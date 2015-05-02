import BitmapImage2D					= require("awayjs-core/lib/data/BitmapImage2D");
import BitmapImageCube					= require("awayjs-core/lib/data/BitmapImageCube");
import BlendMode						= require("awayjs-core/lib/data/BlendMode");
import Geometry							= require("awayjs-core/lib/data/Geometry");
import TriangleSubGeometry				= require("awayjs-core/lib/data/TriangleSubGeometry");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");
import Vector3D							= require("awayjs-core/lib/geom/Vector3D");
import URLLoaderDataFormat				= require("awayjs-core/lib/net/URLLoaderDataFormat");
import URLRequest						= require("awayjs-core/lib/net/URLRequest");
import IAsset							= require("awayjs-core/lib/library/IAsset");
import ParserBase						= require("awayjs-core/lib/parsers/ParserBase");
import ParserUtils						= require("awayjs-core/lib/parsers/ParserUtils");
import ResourceDependency				= require("awayjs-core/lib/parsers/ResourceDependency");
import ByteArray						= require("awayjs-core/lib/utils/ByteArray");

import DisplayObject					= require("awayjs-display/lib/base/DisplayObject");
import DisplayObjectContainer			= require("awayjs-display/lib/containers/DisplayObjectContainer");
import DefaultMaterialManager			= require("awayjs-display/lib/managers/DefaultMaterialManager");
import Mesh								= require("awayjs-display/lib/entities/Mesh");
import TextureBase						= require("awayjs-display/lib/textures/TextureBase");
import SingleCubeTexture				= require("awayjs-display/lib/textures/SingleCubeTexture");
import Single2DTexture					= require("awayjs-display/lib/textures/Single2DTexture");

import MethodMaterial					= require("awayjs-methodmaterials/lib/MethodMaterial");

import AWDBitFlags						= require("awayjs-parsers/lib/AWD3ParserUtils/AWDBitFlags");
import AWDProperties					= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import AWDBlock			= require("awayjs-parsers/lib/AWD3ParserUtils/AWDBlock");
import AWD3Utils			= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");



/**
 * AWD3FileData stores the data loaded for a AWD-file. It also gives access to some helper functions.
 */
class AWD3FileData
{
	//set to "true" to have some console.logs in the Console
	private _debug:boolean = false;

	private _cur_block:AWDBlock;
	private _blocks:Array<AWDBlock>;
	private _newBlockBytes:ByteArray;

	public  major_version:number;
	public  minor_version:number;

	private _accuracyOnBlocks:boolean = false;

	private _accuracyMatrix:boolean;
	private _accuracyGeo:boolean;
	private _accuracyProps:boolean;
	private _matrixNrType:number;
	private _geoNrType:number;
	private _propsNrType:number;

	private blendModeDic:Array<string>;
	private _depthSizeDic:Array<number>;

	private _defaultCubeTexture:SingleCubeTexture;
	/**
	 * Creates a new AWD3FileData object.
	 */
	constructor()
	{
		this.major_version=0;
		this.minor_version=0;

		this._blocks = new Array<AWDBlock>();
		this._blocks.push(new AWDBlock(255, 0));
		this._cur_block=this._blocks[0];
		this.blendModeDic = new Array<string>(); // used to translate ints to blendMode-strings
		this.blendModeDic.push(BlendMode.NORMAL);
		this.blendModeDic.push(BlendMode.ADD);
		this.blendModeDic.push(BlendMode.ALPHA);
		this.blendModeDic.push(BlendMode.DARKEN);
		this.blendModeDic.push(BlendMode.DIFFERENCE);
		this.blendModeDic.push(BlendMode.ERASE);
		this.blendModeDic.push(BlendMode.HARDLIGHT);
		this.blendModeDic.push(BlendMode.INVERT);
		this.blendModeDic.push(BlendMode.LAYER);
		this.blendModeDic.push(BlendMode.LIGHTEN);
		this.blendModeDic.push(BlendMode.MULTIPLY);
		this.blendModeDic.push(BlendMode.NORMAL);
		this.blendModeDic.push(BlendMode.OVERLAY);
		this.blendModeDic.push(BlendMode.SCREEN);
		this.blendModeDic.push(BlendMode.SHADER);
		this.blendModeDic.push(BlendMode.OVERLAY);

		this._depthSizeDic = new Array<number>(); // used to translate ints to depthSize-values
		this._depthSizeDic.push(256);
		this._depthSizeDic.push(512);
		this._depthSizeDic.push(2048);
		this._depthSizeDic.push(1024);
	}

	public getDepthSizeFromEnum(depthSize:number):number
	{
		return this._depthSizeDic[depthSize];
	}
	public getBlendModeStringFromEnum(blendmode:number):string
	{
		return this.blendModeDic[blendmode];
	}

	public dispose():void
	{

		for (var c in this._blocks) {

			var b:AWDBlock = <AWDBlock> this._blocks[ c ];
			b.dispose();

		}

	}
	public get accuracyOnBlocks():boolean
	{
		return this._accuracyOnBlocks;
	}
	public get accuracyMatrix():boolean
	{
		return this._accuracyMatrix;
	}
	public set accuracyMatrix(new_accuracyMatrix:boolean)
	{
		this._accuracyMatrix = new_accuracyMatrix;
	}
	public get accuracyProps():boolean
	{
		return this._accuracyProps;
	}
	public set accuracyProps(new_accuracyProps:boolean)
	{
		this._accuracyProps = new_accuracyProps;
	}
	public set accuracyGeo(new_accuracyGeo:boolean)
	{
		this._accuracyGeo = new_accuracyGeo;
	}
	public get accuracyGeo():boolean
	{
		return this._accuracyGeo;
	}
	public get debug():boolean
	{
		return this._debug;
	}

	public get matrixNrType():number
	{
		return this._matrixNrType;
	}
	public set matrixNrType(newmatrixNrType:number)
	{
		this._matrixNrType = newmatrixNrType;
	}

	public get propsNrType():number
	{
		return this._propsNrType;
	}
	public set propsNrType(new_props_nr:number)
	{
		this._propsNrType = new_props_nr;
	}

	public get geoNrType():number
	{
		return this._geoNrType;
	}
	public set geoNrType(new_geoNrType:number)
	{
		this._geoNrType = new_geoNrType;
	}


	public set newBlockBytes(new_newBlockBytes:ByteArray)
	{
		this._newBlockBytes = new_newBlockBytes;
	}
	public get newBlockBytes():ByteArray
	{
		return this._newBlockBytes;
	}
	public create_new_block(type:number, id:number)
	{
		var new_block:AWDBlock= new AWDBlock(this._blocks.length, type);
		this._cur_block=new_block;
		this._blocks[id]=new_block;
	}
	public get cur_block():AWDBlock
	{
		return this._cur_block;
	}
	public block_cnt():number
	{
		return this._blocks.length;
	}

	//--Parser UTILS---------------------------------------------------------------------------

	public parseUserAttributes():Object
	{
		var attributes:Object;
		var list_len:number;
		var attibuteCnt:number;

		list_len = this._newBlockBytes.readUnsignedInt();

		if (list_len > 0) {

			var list_end:number;

			attributes = {};

			list_end = this._newBlockBytes.position + list_len;

			while (this._newBlockBytes.position < list_end) {
				var ns_id:number;
				var attr_key:string;
				var attr_type:number;
				var attr_len:number;
				var attr_val:any;

				// TODO: Properly tend to namespaces in attributes
				ns_id = this._newBlockBytes.readUnsignedByte();
				attr_key = this.parseVarStr();
				attr_type = this._newBlockBytes.readUnsignedByte();
				attr_len = this._newBlockBytes.readUnsignedInt();

				if ((this._newBlockBytes.position + attr_len) > list_end) {
					console.log("           Error in reading attribute # " + attibuteCnt + " = skipped to end of attribute-list");
					this._newBlockBytes.position = list_end;
					return attributes;
				}

				switch (attr_type) {
					case AWD3Utils.AWDSTRING:
						attr_val = this._newBlockBytes.readUTFBytes(attr_len);
						break;
					case AWD3Utils.INT8:
						attr_val = this._newBlockBytes.readByte();
						break;
					case AWD3Utils.INT16:
						attr_val = this._newBlockBytes.readShort();
						break;
					case AWD3Utils.INT32:
						attr_val = this._newBlockBytes.readInt();
						break;
					case AWD3Utils.BOOL:
					case AWD3Utils.UINT8:
						attr_val = this._newBlockBytes.readUnsignedByte();
						break;
					case AWD3Utils.UINT16:
						attr_val = this._newBlockBytes.readUnsignedShort();
						break;
					case AWD3Utils.UINT32:
					case AWD3Utils.BADDR:
						attr_val = this._newBlockBytes.readUnsignedInt();
						break;
					case AWD3Utils.FLOAT32:
						attr_val = this._newBlockBytes.readFloat();
						break;
					case AWD3Utils.FLOAT64:
						attr_val = this._newBlockBytes.readDouble();
						break;
					default:
						attr_val = 'unimplemented attribute type ' + attr_type;
						this._newBlockBytes.position += attr_len;
						break;
				}

				if (this._debug) {
					console.log("attribute = name: " + attr_key + "  / value = " + attr_val);
				}

				attributes[attr_key] = attr_val;
				attibuteCnt += 1;
			}
		}

		return attributes;
	}

	public parseProperties(expected:Object):AWDProperties
	{
		var list_end:number;
		var list_len:number;
		var propertyCnt:number = 0;
		var props:AWDProperties = new AWDProperties();

		list_len = this._newBlockBytes.readUnsignedInt();
		list_end = this._newBlockBytes.position + list_len;

		if (expected) {

			while (this._newBlockBytes.position < list_end) {
				var len:number;
				var key:number;
				var type:number;

				key = this._newBlockBytes.readUnsignedShort();
				len = this._newBlockBytes.readUnsignedInt();

				if ((this._newBlockBytes.position + len) > list_end) {
					console.log("           Error in reading property # " + propertyCnt + " = skipped to end of propertie-list");
					this._newBlockBytes.position = list_end;
					return props;
				}

				if (expected.hasOwnProperty(key.toString())) {
					type = expected[key];
					props.set(key, this.parseAttrValue(type, len));
				} else {
					this._newBlockBytes.position += len;
				}

				propertyCnt += 1;

			}
		} else {
			this._newBlockBytes.position = list_end;
		}

		return props;

	}

	private parseAttrValue(type:number, len:number):any
	{
		var elem_len:number;
		var read_func:Function;

		switch (type) {

			case AWD3Utils.BOOL:
			case AWD3Utils.INT8:
				elem_len = 1;
				read_func = this._newBlockBytes.readByte;
				break;

			case AWD3Utils.INT16:
				elem_len = 2;
				read_func = this._newBlockBytes.readShort;
				break;

			case AWD3Utils.INT32:
				elem_len = 4;
				read_func = this._newBlockBytes.readInt;
				break;

			case AWD3Utils.UINT8:
				elem_len = 1;
				read_func = this._newBlockBytes.readUnsignedByte;
				break;

			case AWD3Utils.UINT16:
				elem_len = 2;
				read_func = this._newBlockBytes.readUnsignedShort;
				break;

			case AWD3Utils.UINT32:
			case AWD3Utils.COLOR:
			case AWD3Utils.BADDR:
				elem_len = 4;
				read_func = this._newBlockBytes.readUnsignedInt;
				break;

			case AWD3Utils.FLOAT32:
				elem_len = 4;
				read_func = this._newBlockBytes.readFloat;
				break;

			case AWD3Utils.FLOAT64:
				elem_len = 8;
				read_func = this._newBlockBytes.readDouble;
				break;

			case AWD3Utils.AWDSTRING:
				return this._newBlockBytes.readUTFBytes(len);

			case AWD3Utils.VECTOR2x1:
			case AWD3Utils.VECTOR3x1:
			case AWD3Utils.VECTOR4x1:
			case AWD3Utils.MTX3x2:
			case AWD3Utils.MTX3x3:
			case AWD3Utils.MTX4x3:
			case AWD3Utils.MTX4x4:
				elem_len = 8;
				read_func = this._newBlockBytes.readDouble;
				break;

		}

		if (elem_len < len) {
			var list:Array<any> = [];
			var num_read:number = 0;
			var num_elems:number = len/elem_len;

			while (num_read < num_elems) {
				list.push(read_func.apply(this._newBlockBytes)); // list.push(read_func());
				num_read++;
			}

			return list;
		} else {

			var val:any = read_func.apply(this._newBlockBytes);//read_func();
			return val;
		}
	}

	// Helper - functions
	public getUVForVertexAnimation(meshID:number /*uint*/):Array<Array<number>>
	{
		if (this._blocks[meshID].data instanceof Mesh)
			meshID = this._blocks[meshID].geoID;
		if (this._blocks[meshID].uvsForVertexAnimation)
			return this._blocks[meshID].uvsForVertexAnimation;
		var geometry:Geometry = (<Geometry> this._blocks[meshID].data);
		var geoCnt:number /*int*/ = 0;
		var ud:Array<number>;
		var uStride:number /*uint*/;
		var uOffs:number /*uint*/;
		var numPoints:number /*uint*/;
		var i:number /*int*/;
		var newUvs:Array<number>;
		var sub_geom:TriangleSubGeometry;
		this._blocks[meshID].uvsForVertexAnimation = new Array<Array<number>>();
		while (geoCnt < geometry.subGeometries.length) {
			newUvs = new Array<number>();
			sub_geom = <TriangleSubGeometry> geometry.subGeometries[geoCnt];
			numPoints = sub_geom.numVertices;
			ud = sub_geom.uvs;
			uStride = sub_geom.getStride(TriangleSubGeometry.UV_DATA);
			uOffs = sub_geom.getOffset(TriangleSubGeometry.UV_DATA);
			for (i = 0; i < numPoints; i++) {
				newUvs.push(ud[uOffs + i*uStride + 0]);
				newUvs.push(ud[uOffs + i*uStride + 1]);
			}
			this._blocks[meshID].uvsForVertexAnimation.push(newUvs);
			geoCnt++;
		}
		return this._blocks[meshID].uvsForVertexAnimation;
	}

	public parseVarStr():string
	{

		var len:number = this._newBlockBytes.readUnsignedShort();
		return this._newBlockBytes.readUTFBytes(len);
	}

	public getBlockByID(assetID:number):AWDBlock
	{
		return this._blocks[assetID];
	}
	public getAssetByID(assetID:number):IAsset
	{
		return this._blocks[assetID].data;
	}
	private getDefaultAsset(assetType:string):IAsset
	{
		switch (true) {
			case (assetType == SingleCubeTexture.assetType):
				return this.getDefaultCubeTexture();
				break;
			case (assetType == Single2DTexture.assetType):
				return DefaultMaterialManager.getDefaultTexture();
				break;
			case (assetType == MethodMaterial.assetType):
				return DefaultMaterialManager.getDefaultMaterial();
				break;
			default:
				break;
		}

		return null;
	}

	public getDefaultCubeTexture():IAsset
	{
		if (!this._defaultCubeTexture) {
			var defaultBitmap:BitmapImage2D = DefaultMaterialManager.createCheckeredBitmapImage2D();

			var bitmapImageCube = new BitmapImageCube(defaultBitmap.width);

			for (var i:number = 0; i < 6; i++)
				bitmapImageCube.draw(i, defaultBitmap);


			this._defaultCubeTexture = new SingleCubeTexture(bitmapImageCube);
			this._defaultCubeTexture.name = "defaultCubeTexture";
		}

		return <IAsset> this._defaultCubeTexture;
	}

	public  readNumber(precision:boolean = false):number
	{
		if (precision)
			return this._newBlockBytes.readDouble();
		return this._newBlockBytes.readFloat();

	}

	public parseMatrix3D():Matrix3D
	{
		return new Matrix3D(this.parseMatrix43RawData());
	}

	private parseMatrix32RawData():Array<number>
	{
		var i:number;
		var mtx_raw:Array<number> = new Array<number>(6);
		for (i = 0; i < 6; i++) {
			mtx_raw[i] = this._newBlockBytes.readFloat();
		}

		return mtx_raw;
	}

	public parseMatrix43RawData():Array<number>
	{
		var mtx_raw:Array<number> = new Array<number>(16);

		mtx_raw[0] = this.readNumber(this._accuracyMatrix);
		mtx_raw[1] = this.readNumber(this._accuracyMatrix);
		mtx_raw[2] = this.readNumber(this._accuracyMatrix);
		mtx_raw[3] = 0.0;
		mtx_raw[4] = this.readNumber(this._accuracyMatrix);
		mtx_raw[5] = this.readNumber(this._accuracyMatrix);
		mtx_raw[6] = this.readNumber(this._accuracyMatrix);
		mtx_raw[7] = 0.0;
		mtx_raw[8] = this.readNumber(this._accuracyMatrix);
		mtx_raw[9] = this.readNumber(this._accuracyMatrix);
		mtx_raw[10] = this.readNumber(this._accuracyMatrix);
		mtx_raw[11] = 0.0;
		mtx_raw[12] = this.readNumber(this._accuracyMatrix);
		mtx_raw[13] = this.readNumber(this._accuracyMatrix);
		mtx_raw[14] = this.readNumber(this._accuracyMatrix);
		mtx_raw[15] = 1.0;

		//TODO: fix max exporter to remove NaN values in joint 0 inverse bind pose

		if (isNaN(mtx_raw[0])) {
			mtx_raw[0] = 1;
			mtx_raw[1] = 0;
			mtx_raw[2] = 0;
			mtx_raw[4] = 0;
			mtx_raw[5] = 1;
			mtx_raw[6] = 0;
			mtx_raw[8] = 0;
			mtx_raw[9] = 0;
			mtx_raw[10] = 1;
			mtx_raw[12] = 0;
			mtx_raw[13] = 0;
			mtx_raw[14] = 0;

		}

		return mtx_raw;
	}

}

export = AWD3FileData;



