import BlendMode						= require("awayjs-core/lib/data/BlendMode");
import TriangleSubGeometry				= require("awayjs-core/lib/data/TriangleSubGeometry");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");
import Vector3D							= require("awayjs-core/lib/geom/Vector3D");
import URLLoaderDataFormat				= require("awayjs-core/lib/net/URLLoaderDataFormat");
import URLRequest						= require("awayjs-core/lib/net/URLRequest");
import IAsset							= require("awayjs-core/lib/library/IAsset");
import ParserBase						= require("awayjs-core/lib/parsers/ParserBase");
import ParserUtils						= require("awayjs-core/lib/parsers/ParserUtils");
import ResourceDependency				= require("awayjs-core/lib/parsers/ResourceDependency");

import BitmapImage2D					= require("awayjs-core/lib/data/BitmapImage2D");
import BitmapImageCube					= require("awayjs-core/lib/data/BitmapImageCube");
import ByteArray						= require("awayjs-core/lib/utils/ByteArray");
import Geometry							= require("awayjs-core/lib/data/Geometry");

import DisplayObject					= require("awayjs-display/lib/base/DisplayObject");
import DisplayObjectContainer			= require("awayjs-display/lib/containers/DisplayObjectContainer");
import SingleCubeTexture				= require("awayjs-display/lib/textures/SingleCubeTexture");
import Single2DTexture					= require("awayjs-display/lib/textures/Single2DTexture");


import MaterialBase						= require("awayjs-display/lib/materials/MaterialBase");
import DefaultMaterialManager			= require("awayjs-display/lib/managers/DefaultMaterialManager");


import Mesh								= require("awayjs-display/lib/entities/Mesh");




import AWDBitFlags						= require("awayjs-parsers/lib/AWD3ParserUtils/AWDBitFlags");
import AWDProperties					= require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");

import AWDAssetParsers					= require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParsers");
import AWDBlock							= require("awayjs-parsers/lib/AWD3ParserUtils/AWDBlock");
import AWD3FileData						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3FileData");
import AWD3Utils						= require("awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils");



/**
 * AWD3Utils provides a parser for the AWD data type.
 */
class AWD3Parser extends ParserBase
{
	//set to "true" to have some console.logs in the Console
	private _debug:boolean = false;
	private _byteData:ByteArray;
	private _startedParsing:boolean = false;
	private _compression:number;
	private _streaming:boolean;
	private _parsed_header:boolean = false;
	private _body:ByteArray;
	private _awd_data:AWD3FileData;
	private _block_parser:AWDAssetParsers;

	// temp for checking stats
	public total_time:number = 0;
	public geom_time:number = 0;
	public timeline_time:number = 0;

	/**
	 * Creates a new AWD3Utils object.
	 * @param uri The url or id of the data or file to be parsed.
	 * @param extra The holder for extra contextual data that the parser might need.
	 */
	constructor(block_parser:AWDAssetParsers = undefined)
	{
		super(URLLoaderDataFormat.ARRAY_BUFFER);

		this._block_parser=block_parser;
		if(this._block_parser==undefined){
			this._block_parser=new AWDAssetParsers();
		}
		this._awd_data=new AWD3FileData();
		this._block_parser.init_parser(this._awd_data);
	}

	/**
	 * Indicates whether or not a given file extension is supported by the parser.
	 * @param extension The file extension of a potential file to be parsed.
	 * @return Whether or not the given file type is supported.
	 */
	public static supportsType(extension:string):boolean
	{
		extension = extension.toLowerCase();
		return extension == "awd";
	}

	/**
	 * Tests whether a data block can be parsed by the parser.
	 * @param data The data block to potentially be parsed.
	 * @return Whether or not the given data is supported.
	 */
	public static supportsData(data:any):boolean
	{
		return (ParserUtils.toString(data, 3) == 'AWD');
	}

	/**
	 * @inheritDoc
	 */
	public _iResolveDependency(resourceDependency:ResourceDependency)
	{
		// this will be called when Dependency has finished loading.
		// the ressource dependecniy has a id that point to the awd_block waiting for it.
		if (resourceDependency.assets.length == 1) {
			var this_block:AWDBlock = this._awd_data.getBlockByID(parseInt(resourceDependency.id));
			if(this_block.type==82){
				var testure_asset:Single2DTexture = new Single2DTexture(<BitmapImage2D> resourceDependency.assets[0]);
				this_block.data = testure_asset; // Store finished asset
				// Finalize texture asset to dispatch texture event, which was
				// previously suppressed while the dependency was loaded.
				this._pFinalizeAsset(<IAsset> testure_asset, this_block.name);

				if (this._debug) {
					console.log("Successfully loaded Bitmap for texture");
					console.log("Parsed texture: Name = " + this_block.name);
				}
			}
			else if(this_block.type==44){
				// todo: implement parsing of Audio block data
				/*asset = <Single2DTexture> resourceDependency.assets[0];
				this_block.data = asset; // Store finished asset
				// Finalize texture asset to dispatch texture event, which was
				// previously suppressed while the dependency was loaded.
				this._pFinalizeAsset(<IAsset> asset, this_block.name);

				if (this._debug) {
					console.log("Successfully loaded Bitmap for texture");
					console.log("Parsed texture: Name = " + this_block.name);
				}*/
			}
			else if(this_block.type==83){
				this_block.loaded_dependencies[resourceDependency.sub_id]= resourceDependency.assets[0];
				this_block.loaded_dependencies_cnt++;
				if(this_block.loaded_dependencies_cnt==6){
					if (this._debug) {
						console.log("Successfully loaded Bitmap " + resourceDependency.sub_id + " / 6 for Cubetexture");
					}

					var cube_image_asset = new BitmapImageCube(this_block.loaded_dependencies[0].width);

					for (var i:number = 0; i < 6; i++)
						cube_image_asset.draw(i, this_block.loaded_dependencies[i]);


					var cube_tex_asset = new SingleCubeTexture(cube_image_asset);
					this_block.data = cube_tex_asset; // Store finished asset
					this._pFinalizeAsset(<IAsset> cube_tex_asset, this_block.name);
					if (this._debug) {
						console.log("Parsed CubeTexture: Name = " + this_block.name);
					}
				}
			}
		}
	}

	/**
	 * @inheritDoc
	 */
	public _iResolveDependencyFailure(resourceDependency:ResourceDependency)
	{
		//	not used - if a dependcy fails, the awaiting Texture or CubeTexture will never be finalized, and the default-bitmaps will be used.
		// 	this means, that if one Bitmap of a CubeTexture fails, the CubeTexture will have the DefaultTexture applied for all six Bitmaps.
	}

	/**
	 * Resolve a dependency name
	 *
	 * @param resourceDependency The dependency to be resolved.
	 */
	public _iResolveDependencyName(resourceDependency:ResourceDependency, asset:IAsset):string
	{
		var oldName:string = asset.name;

		if (asset) {
			var block:AWDBlock = this._awd_data.getBlockByID(parseInt(resourceDependency.id));
			// Reset name of texture to the one defined in the AWD file,
			// as opposed to whatever the image parser came up with.
			asset.resetAssetPath(block.name, null, true);
		}

		var newName:string = asset.name;

		asset.name = oldName;

		return newName;

	}

	/**
	 * @inheritDoc
	 */
	public _pProceedParsing():boolean
	{

		if (!this._startedParsing) {
			this._byteData = this._pGetByteData();//getByteData();
			this._startedParsing = true;
		}

		if (!this._parsed_header) {

			//----------------------------------------------------------------------------
			// LITTLE_ENDIAN - Default for ArrayBuffer / Not implemented in ByteArray
			//----------------------------------------------------------------------------
			//this._byteData.endian = Endian.LITTLE_ENDIAN;
			//----------------------------------------------------------------------------

			//----------------------------------------------------------------------------
			// Parse header and decompress body if needed
			this.parseHeader();

			switch (this._compression) {

				case AWD3Utils.DEFLATE:
				case AWD3Utils.LZMA:
					this._pDieWithError('Compressed AWD formats not yet supported');
					break;

				case AWD3Utils.UNCOMPRESSED:
					this._body = this._byteData;
					break;

				//----------------------------------------------------------------------------
				// Compressed AWD Formats not yet supported
				//----------------------------------------------------------------------------

				/*
				 case AWD3Parserutils.DEFLATE:

				 this._body = new ByteArray();
				 this._byteData.readBytes(this._body, 0, this._byteData.getBytesAvailable());
				 this._body.uncompress();

				 break;
				 case AWD3Parserutils.LZMA:

				 this._body = new ByteArray();
				 this._byteData.readBytes(this._body, 0, this._byteData.getBytesAvailable());
				 this._body.uncompress(COMPRESSIONMODE_LZMA);

				 break;
				 //*/

			}

			this._parsed_header = true;

			//----------------------------------------------------------------------------
			// LITTLE_ENDIAN - Default for ArrayBuffer / Not implemented in ByteArray
			//----------------------------------------------------------------------------
			//this._body.endian = Endian.LITTLE_ENDIAN;// Should be default
			//----------------------------------------------------------------------------

		}

		if (this._body) {

			while (this._body.getBytesAvailable() > 0 && !this.parsingPaused) //&& this._pHasTime() )
			{
				this.parseNextBlock();

			}

			//----------------------------------------------------------------------------
			// Return complete status
			if (this._body.getBytesAvailable() == 0) {
				this.dispose();
				return  ParserBase.PARSING_DONE;
			} else {
				return  ParserBase.MORE_TO_PARSE;
			}
		} else {

			switch (this._compression) {

				case AWD3Utils.DEFLATE:
				case AWD3Utils.LZMA:

					if (this._debug) {
						console.log("(!) AWD3Utils Error: Compressed AWD formats not yet supported (!)");
					}

					break;

			}
			// Error - most likely _body not set because we do not support compression.
			return  ParserBase.PARSING_DONE;

		}

	}

	public _pStartParsing(frameLimit:number)
	{
		super._pStartParsing(frameLimit);

		//create a content object for Loaders
		this._pContent = new DisplayObjectContainer();
	}

	private dispose():void
	{
		this._awd_data.dispose();
	}

	private parseNextBlock():void
	{
		var block_id:number = this._body.readUnsignedInt();

		var ns:number = this._body.readUnsignedByte();
		var block_type:number = this._body.readUnsignedByte();
		var flags:number = this._body.readUnsignedByte();
		var len:number = this._body.readUnsignedInt();

		var blockCompression:boolean = AWDBitFlags.test(flags, AWDBitFlags.FLAG4);
		var blockCompressionLZMA:boolean = AWDBitFlags.test(flags, AWDBitFlags.FLAG5);

		if (this._awd_data.accuracyOnBlocks) {
			this._awd_data.accuracyMatrix = AWDBitFlags.test(flags, AWDBitFlags.FLAG1);
			this._awd_data.accuracyGeo = AWDBitFlags.test(flags, AWDBitFlags.FLAG2);
			this._awd_data.accuracyProps = AWDBitFlags.test(flags, AWDBitFlags.FLAG3);
			this._awd_data.geoNrType = AWD3Utils.FLOAT32;

			if (this._awd_data.accuracyGeo) {
				this._awd_data.geoNrType = AWD3Utils.FLOAT64;
			}

			this._awd_data.matrixNrType = AWD3Utils.FLOAT32;

			if (this._awd_data.accuracyMatrix) {
				this._awd_data.matrixNrType = AWD3Utils.FLOAT64;
			}

			this._awd_data.propsNrType = AWD3Utils.FLOAT32;

			if (this._awd_data.accuracyProps) {
				this._awd_data.propsNrType = AWD3Utils.FLOAT64;
			}
		}

		var blockEndAll:number = this._body.position + len;

		if (len > this._body.getBytesAvailable()) {
			this._pDieWithError('AWD2 block length is bigger than the bytes that are available!');
			this._body.position += this._body.getBytesAvailable();
			return;
		}

		var newBlockBytes:ByteArray = new ByteArray();
		this._body.readBytes(newBlockBytes, 0, len);
		this._awd_data.newBlockBytes = newBlockBytes;

		//----------------------------------------------------------------------------
		// Compressed AWD Formats not yet supported

		if (blockCompression) {
			this._pDieWithError('Compressed AWD formats not yet supported');

			/*
			 if (blockCompressionLZMA)
			 {
			 this._newBlockBytes.uncompress(AWD3Parserutils.COMPRESSIONMODE_LZMA);
			 }
			 else
			 {
			 this._newBlockBytes.uncompress();
			 }
			 */

		}

		//----------------------------------------------------------------------------
		// LITTLE_ENDIAN - Default for ArrayBuffer / Not implemented in ByteArray
		//----------------------------------------------------------------------------
		//this._newBlockBytes.endian = Endian.LITTLE_ENDIAN;
		//----------------------------------------------------------------------------

		this._awd_data.newBlockBytes.position = 0;

		// we create AWDBlock for all exept the metadata. the metadata block has is the first awdblock in the list by default.
		//if(block_type!=255)
		this._awd_data.create_new_block(block_type, block_id);


		if (blockCompression) {
			this._pDieWithError('Compressed AWD formats not yet supported');
			//blockEndBlock   = this._newBlockBytes.position + this._newBlockBytes.length;
			//block.len       = blockEndBlock;
		}

		//if (this._debug) {
			console.log("AWDBlock:  ID = " + block_id + " | TypeID = " + block_type + " | Compression = " + blockCompression + " | Matrix-Precision = " + this._awd_data.accuracyMatrix + " | Geometry-Precision = " + this._awd_data.accuracyGeo + " | Properties-Precision = " + this._awd_data.accuracyProps);
		//}

		var time_start = performance.now();

		// first check if the block is any of the 3 blocks that does not produce a asset.
			// this block contains a asset.
		if(this._block_parser.parseAsset(block_type)){
			if(this._awd_data.cur_block.state==AWD3Utils.BLOCKSTATE_FINALIZE){
				this._pFinalizeAsset(<IAsset>this._awd_data.cur_block.data, this._awd_data.cur_block.name);
				if(this._awd_data.cur_block.data instanceof DisplayObject){
					if((<DisplayObjectContainer> this._awd_data.cur_block.data).parent==undefined){
						(<DisplayObjectContainer> this._pContent).addChild((<DisplayObjectContainer> this._awd_data.cur_block.data));
					}
				}
			}
			else if(this._awd_data.cur_block.state==AWD3Utils.BLOCKSTATE_INVALID){
				console.log("ERROR while parsing block - type = ", block_type, " id = ", block_id);
			}
			else if(this._awd_data.cur_block.state==AWD3Utils.BLOCKSTATE_LOAD_DEPENDENICES){
				// trigger No asset created yet, because the block has dependencies. load the dependencies:.
				for(var r:number=0; r<this._awd_data.cur_block.dependencies_urls.length;r++){
					// load dependencies by url. let the parser system decide how to parse it
					this._pAddDependency(this._awd_data.cur_block.id.toString(), new URLRequest(this._awd_data.cur_block.dependencies_urls[r]), false, null, true, r);
				}
				for(var r:number=0; r<this._awd_data.cur_block.dependencies_data.length;r++) {
					// load dependencies from data. need to prepare the data based on block_type (image vs audio).
					if ((block_type == 82) || (block_type == 83)) {
						this._pAddDependency(this._awd_data.cur_block.id.toString(), null, false, ParserUtils.byteArrayToImage(this._awd_data.cur_block.dependencies_data[r]), true, r);
					}
					else if (block_type == 44) {
						// todo: parse audio data
						// this._pAddDependency(this._awd_data.cur_block.id.toString(), null, false, this._awd_data.cur_block.dependencies_data[r], true, r);
					}
				}
				this._pPauseAndRetrieveDependencies();
			}
			else if(this._awd_data.cur_block.state==AWD3Utils.BLOCKSTATE_NO_ASSET){
				// this block does not produce any asset (metadata, namespace, command)
			}
		}
		else {
			console.log("Encountered unknown blocktype - type = ", block_type, " id = ", block_id);
		}

		var time_end = performance.now();
		var thisTime:number=time_end-time_start;
		this.total_time+=thisTime;
		if(block_type==1){
			this.geom_time+=thisTime;
		}
		else if(block_type==133){
			this.timeline_time+=thisTime;
		}
		console.log("'parsed '"+block_type+"'  block in "+thisTime+ " ms", " total: ",this.total_time," geom: ",this.geom_time,"timelines:",this.timeline_time);

		this._body.position = blockEndAll;
		this._awd_data.newBlockBytes = null;

	}




	private parseHeader():void
	{
		var flags:number;
		var body_len:number;

		this._byteData.position = 3; // Skip magic string and parse version

		this._awd_data.major_version = this._byteData.readUnsignedByte();
		this._awd_data.minor_version = this._byteData.readUnsignedByte();

		flags = this._byteData.readUnsignedShort(); // Parse bit flags

		this._streaming = AWDBitFlags.test(flags, AWDBitFlags.FLAG1);

		if ((this._awd_data.major_version == 2) && (this._awd_data.minor_version == 1)) {
			this._awd_data.accuracyMatrix = AWDBitFlags.test(flags, AWDBitFlags.FLAG2);
			this._awd_data.accuracyGeo = AWDBitFlags.test(flags, AWDBitFlags.FLAG3);
			this._awd_data.accuracyProps = AWDBitFlags.test(flags, AWDBitFlags.FLAG4);
		}

		// if we set _accuracyOnBlocks, the precision-values are read from each block-header.

		// set storagePrecision types
		this._awd_data.geoNrType = AWD3Utils.FLOAT32;

		if (this._awd_data.accuracyGeo) {
			this._awd_data.geoNrType = AWD3Utils.FLOAT64;
		}

		this._awd_data.matrixNrType = AWD3Utils.FLOAT32;

		if (this._awd_data.accuracyMatrix) {
			this._awd_data.matrixNrType = AWD3Utils.FLOAT64;
		}

		this._awd_data.propsNrType = AWD3Utils.FLOAT32;

		if (this._awd_data.accuracyProps) {
			this._awd_data.propsNrType = AWD3Utils.FLOAT64;
		}

		this._compression = this._byteData.readUnsignedByte(); // compression

		if (this._debug) {
			console.log("Import AWDFile of version = " + this._awd_data.major_version + " - " + this._awd_data.minor_version );
			console.log("Global Settings = Compression = " + this._compression + " | Streaming = " + this._streaming + " | Matrix-Precision = " + this._awd_data.accuracyMatrix + " | Geometry-Precision = " + this._awd_data.accuracyGeo + " | Properties-Precision = " + this._awd_data.accuracyProps);
		}

		// Check file integrity
		body_len = this._byteData.readUnsignedInt();
		if (!this._streaming && body_len != this._byteData.getBytesAvailable()) {
			this._pDieWithError('AWD2 body length does not match header integrity field');
		}
	}
}

export = AWD3Parser;

