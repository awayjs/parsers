import AttributesBuffer					= require("awayjs-core/lib/attributes/AttributesBuffer");
import Short3Attributes					= require("awayjs-core/lib/attributes/Short3Attributes");
import Float3Attributes					= require("awayjs-core/lib/attributes/Float3Attributes");
import Float2Attributes					= require("awayjs-core/lib/attributes/Float2Attributes");
import BitmapImage2D					= require("awayjs-core/lib/data/BitmapImage2D");
import BitmapImageCube					= require("awayjs-core/lib/data/BitmapImageCube");
import BlendMode						= require("awayjs-core/lib/data/BlendMode");
import WaveAudio						= require("awayjs-core/lib/data/WaveAudio");
import ColorTransform					= require("awayjs-core/lib/geom/ColorTransform");
import Matrix3D							= require("awayjs-core/lib/geom/Matrix3D");
import Vector3D							= require("awayjs-core/lib/geom/Vector3D");
import URLLoaderDataFormat				= require("awayjs-core/lib/net/URLLoaderDataFormat");
import URLRequest						= require("awayjs-core/lib/net/URLRequest");
import IAsset							= require("awayjs-core/lib/library/IAsset");
import ParserBase						= require("awayjs-core/lib/parsers/ParserBase");
import ParserUtils						= require("awayjs-core/lib/parsers/ParserUtils");
import ResourceDependency				= require("awayjs-core/lib/parsers/ResourceDependency");
import ProjectionBase					= require("awayjs-core/lib/projections/ProjectionBase");
import PerspectiveProjection			= require("awayjs-core/lib/projections/PerspectiveProjection");
import OrthographicProjection			= require("awayjs-core/lib/projections/OrthographicProjection");
import OrthographicOffCenterProjection	= require("awayjs-core/lib/projections/OrthographicOffCenterProjection");
import ByteArray						= require("awayjs-core/lib/utils/ByteArray");

import AnimationNodeBase				= require("awayjs-display/lib/animators/nodes/AnimationNodeBase");
import DisplayObjectContainer			= require("awayjs-display/lib/containers/DisplayObjectContainer");
import DisplayObject					= require("awayjs-display/lib/base/DisplayObject");
import LightBase						= require("awayjs-display/lib/base/LightBase");
import Geometry							= require("awayjs-display/lib/base/Geometry");
import SubGeometryBase					= require("awayjs-display/lib/base/SubGeometryBase");
import CurveSubGeometry					= require("awayjs-display/lib/base/CurveSubGeometry");
import TriangleSubGeometry				= require("awayjs-display/lib/base/TriangleSubGeometry");
import DirectionalLight					= require("awayjs-display/lib/entities/DirectionalLight");
import PointLight						= require("awayjs-display/lib/entities/PointLight");
import Camera							= require("awayjs-display/lib/entities/Camera");
import Mesh								= require("awayjs-display/lib/entities/Mesh");
import TextField						= require("awayjs-display/lib/entities/TextField");
import Billboard						= require("awayjs-display/lib/entities/Billboard");
import Skybox							= require("awayjs-display/lib/entities/Skybox");
import DefaultMaterialManager			= require("awayjs-display/lib/managers/DefaultMaterialManager");
import MaterialBase						= require("awayjs-display/lib/materials/MaterialBase");
import LightPickerBase					= require("awayjs-display/lib/materials/lightpickers/LightPickerBase");
import StaticLightPicker				= require("awayjs-display/lib/materials/lightpickers/StaticLightPicker");
import CubeMapShadowMapper				= require("awayjs-display/lib/materials/shadowmappers/CubeMapShadowMapper");
import DirectionalShadowMapper			= require("awayjs-display/lib/materials/shadowmappers/DirectionalShadowMapper");
import ShadowMapperBase					= require("awayjs-display/lib/materials/shadowmappers/ShadowMapperBase");

import PrefabBase						= require("awayjs-display/lib/prefabs/PrefabBase");
import PrimitivePrefabBase				= require("awayjs-display/lib/prefabs/PrimitivePrefabBase");
import PrimitiveCapsulePrefab			= require("awayjs-display/lib/prefabs/PrimitiveCapsulePrefab");
import PrimitiveConePrefab				= require("awayjs-display/lib/prefabs/PrimitiveConePrefab");
import PrimitiveCubePrefab				= require("awayjs-display/lib/prefabs/PrimitiveCubePrefab");
import PrimitiveCylinderPrefab			= require("awayjs-display/lib/prefabs/PrimitiveCylinderPrefab");
import PrimitivePlanePrefab				= require("awayjs-display/lib/prefabs/PrimitivePlanePrefab");
import PrimitiveSpherePrefab			= require("awayjs-display/lib/prefabs/PrimitiveSpherePrefab");
import PrimitiveTorusPrefab				= require("awayjs-display/lib/prefabs/PrimitiveTorusPrefab");
import SingleCubeTexture				= require("awayjs-display/lib/textures/SingleCubeTexture");
import Single2DTexture					= require("awayjs-display/lib/textures/Single2DTexture");
import TextureBase						= require("awayjs-display/lib/textures/TextureBase");

import AnimationSetBase					= require("awayjs-renderergl/lib/animators/AnimationSetBase");
import AnimatorBase						= require("awayjs-renderergl/lib/animators/AnimatorBase");
import VertexAnimationSet				= require("awayjs-renderergl/lib/animators/VertexAnimationSet");
import VertexAnimator					= require("awayjs-renderergl/lib/animators/VertexAnimator");
import SkeletonAnimationSet				= require("awayjs-renderergl/lib/animators/SkeletonAnimationSet");
import SkeletonAnimator					= require("awayjs-renderergl/lib/animators/SkeletonAnimator");
import JointPose						= require("awayjs-renderergl/lib/animators/data/JointPose");
import Skeleton							= require("awayjs-renderergl/lib/animators/data/Skeleton");
import SkeletonPose						= require("awayjs-renderergl/lib/animators/data/SkeletonPose");
import SkeletonJoint					= require("awayjs-renderergl/lib/animators/data/SkeletonJoint");
import SkeletonClipNode					= require("awayjs-renderergl/lib/animators/nodes/SkeletonClipNode");
import VertexClipNode					= require("awayjs-renderergl/lib/animators/nodes/VertexClipNode");

import MethodMaterialMode				= require("awayjs-methodmaterials/lib/MethodMaterialMode");
import MethodMaterial					= require("awayjs-methodmaterials/lib/MethodMaterial");
import AmbientEnvMapMethod				= require("awayjs-methodmaterials/lib/methods/AmbientEnvMapMethod");
import DiffuseDepthMethod				= require("awayjs-methodmaterials/lib/methods/DiffuseDepthMethod");
import DiffuseCelMethod					= require("awayjs-methodmaterials/lib/methods/DiffuseCelMethod");
import DiffuseGradientMethod			= require("awayjs-methodmaterials/lib/methods/DiffuseGradientMethod");
import DiffuseLightMapMethod			= require("awayjs-methodmaterials/lib/methods/DiffuseLightMapMethod");
import DiffuseWrapMethod				= require("awayjs-methodmaterials/lib/methods/DiffuseWrapMethod");
import EffectAlphaMaskMethod			= require("awayjs-methodmaterials/lib/methods/EffectAlphaMaskMethod");
import EffectColorMatrixMethod			= require("awayjs-methodmaterials/lib/methods/EffectColorMatrixMethod");
import EffectColorTransformMethod		= require("awayjs-methodmaterials/lib/methods/EffectColorTransformMethod");
import EffectEnvMapMethod				= require("awayjs-methodmaterials/lib/methods/EffectEnvMapMethod");
import EffectFogMethod					= require("awayjs-methodmaterials/lib/methods/EffectFogMethod");
import EffectFresnelEnvMapMethod		= require("awayjs-methodmaterials/lib/methods/EffectFresnelEnvMapMethod");
import EffectLightMapMethod				= require("awayjs-methodmaterials/lib/methods/EffectLightMapMethod");
import EffectMethodBase					= require("awayjs-methodmaterials/lib/methods/EffectMethodBase");
import EffectRimLightMethod				= require("awayjs-methodmaterials/lib/methods/EffectRimLightMethod");
import NormalSimpleWaterMethod			= require("awayjs-methodmaterials/lib/methods/NormalSimpleWaterMethod");
import ShadowDitheredMethod				= require("awayjs-methodmaterials/lib/methods/ShadowDitheredMethod");
import ShadowFilteredMethod				= require("awayjs-methodmaterials/lib/methods/ShadowFilteredMethod");
import ShadowMapMethodBase				= require("awayjs-methodmaterials/lib/methods/ShadowMapMethodBase");
import ShadowMethodBase					= require("awayjs-methodmaterials/lib/methods/ShadowMethodBase");
import SpecularFresnelMethod			= require("awayjs-methodmaterials/lib/methods/SpecularFresnelMethod");
import ShadowHardMethod					= require("awayjs-methodmaterials/lib/methods/ShadowHardMethod");
import SpecularAnisotropicMethod		= require("awayjs-methodmaterials/lib/methods/SpecularAnisotropicMethod");
import SpecularCelMethod				= require("awayjs-methodmaterials/lib/methods/SpecularCelMethod");
import SpecularPhongMethod				= require("awayjs-methodmaterials/lib/methods/SpecularPhongMethod");
import ShadowNearMethod					= require("awayjs-methodmaterials/lib/methods/ShadowNearMethod");
import ShadowSoftMethod					= require("awayjs-methodmaterials/lib/methods/ShadowSoftMethod");

import BasicMaterial					= require("awayjs-display/lib/materials/BasicMaterial");

import TimelineSceneGraphFactory 	= require("awayjs-player/lib/factories/TimelineSceneGraphFactory");
import AS2SceneGraphFactory 		= require("awayjs-player/lib/factories/AS2SceneGraphFactory");
import MovieClip 					= require("awayjs-player/lib/display/MovieClip");
import TimelineKeyFrame 			= require("awayjs-player/lib/timeline/TimelineKeyFrame");
import AddChildCommand 				= require("awayjs-player/lib/timeline/commands/AddChildCommand");
import SetButtonCommand 				= require("awayjs-player/lib/timeline/commands/SetButtonCommand");

import AddChildAtDepthCommand		= require("awayjs-player/lib/timeline/commands/AddChildAtDepthCommand");
import ApplyAS2DepthsCommand		= require("awayjs-player/lib/timeline/commands/ApplyAS2DepthsCommand");
import ExecuteScriptCommand 		= require("awayjs-player/lib/timeline/commands/ExecuteScriptCommand");
import RemoveChildCommand 			= require("awayjs-player/lib/timeline/commands/RemoveChildCommand");
import RemoveChildrenAtDepthCommand	= require("awayjs-player/lib/timeline/commands/RemoveChildrenAtDepthCommand");
import SetInstanceNameCommand 		= require("awayjs-player/lib/timeline/commands/SetInstanceNameCommand");
import UpdatePropertyCommand 		= require("awayjs-player/lib/timeline/commands/UpdatePropertyCommand");
import SetMaskCommand 		        = require("awayjs-player/lib/timeline/commands/SetMaskCommand");

import Font							= require("awayjs-display/lib/text/Font");
import TesselatedFontTable			= require("awayjs-display/lib/text/TesselatedFontTable");
import TextFormat			= require("awayjs-display/lib/text/TextFormat");
import TextFieldType			= require("awayjs-display/lib/text/TextFieldType");

import AWDBlock							= require("awayjs-parsers/lib/AWD3ParserUtils/AWDBlock");
/**
 * AWDParser provides a parser for the AWD data type.
 */
class AWDParser extends ParserBase
{
	//set to "true" to have some console.logs in the Console
	private _debug:boolean = true;
	private _byteData:ByteArray;
	private _startedParsing:boolean = false;
	private _cur_block_id:number;
	private _blocks:Array<AWDBlock>;
	private _newBlockBytes:ByteArray;
	private _version:Array<number>;
	private _compression:number;
	private _accuracyOnBlocks:boolean;
	private _accuracyMatrix:boolean;
	private _accuracyGeo:boolean;
	private _accuracyProps:boolean;
	private _matrixNrType:number;
	private _geoNrType:number;
	private _propsNrType:number;
	private _streaming:boolean;
	private _texture_users:Object = {};
	private _parsed_header:boolean = false;
	private _body:ByteArray;
	private _defaultTexture:Single2DTexture;     // HTML IMAGE TEXTURE >? !
	private _cubeBitmaps:Array<BitmapImage2D>;
	private _defaultBitmapMaterial:MethodMaterial;
	private _defaultCubeTexture:SingleCubeTexture;


	public static COMPRESSIONMODE_LZMA:string = "lzma";
	public static UNCOMPRESSED:number = 0;
	public static DEFLATE:number = 1;
	public static LZMA:number = 2;
	public static INT8:number = 1;
	public static INT16:number = 2;
	public static INT32:number = 3;
	public static UINT8:number = 4;
	public static UINT16:number = 5;
	public static UINT32:number = 6;
	public static FLOAT32:number = 7;
	public static FLOAT64:number = 8;
	public static BOOL:number = 21;
	public static COLOR:number = 22;
	public static BADDR:number = 23;
	public static AWDSTRING:number = 31;
	public static AWDBYTEARRAY:number = 32;
	public static VECTOR2x1:number = 41;
	public static VECTOR3x1:number = 42;
	public static VECTOR4x1:number = 43;
	public static MTX3x2:number = 44;
	public static MTX3x3:number = 45;
	public static MTX4x3:number = 46;
	public static MTX4x4:number = 47;

	private blendModeDic:Array<string>;
	private _depthSizeDic:Array<number>;

	private _time_all:number=0;
	private _time_geom:number=0;
	private _time_timeline:number=0;
	private _time_fonts:number=0;
	private _time_textfields:number=0;
	private _time_sounds:number=0;
	private _time_textures:number=0;
	private _time_materials:number=0;
	private _time_meshes:number=0;


	/**
	 * Creates a new AWD3Parserutils object.
	 * @param uri The url or id of the data or file to be parsed.
	 * @param extra The holder for extra contextual data that the parser might need.
	 */
	constructor()
	{
		super(URLLoaderDataFormat.ARRAY_BUFFER);

		this._blocks = new Array<AWDBlock>();
		this._blocks[0] = new AWDBlock(0,255);
		this._blocks[0].data = null; // Zero address means null in AWD

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
		this._version = Array<number>(); // will contain 2 int (major-version, minor-version) for awd-version-check
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
		//console.log("AWDParser resolve dependencies");
		if (resourceDependency.assets.length == 1) {
			var this_block:AWDBlock = this._blocks[parseInt(resourceDependency.id)];
			if(this_block.type==82){
				var texture_asset:Single2DTexture = new Single2DTexture(<BitmapImage2D> resourceDependency.assets[0]);
				this_block.data = texture_asset; // Store finished asset
				// Finalize texture asset to dispatch texture event, which was
				// previously suppressed while the dependency was loaded.
				this._pFinalizeAsset(<IAsset> texture_asset, this_block.name);

				if (this._debug) {
					console.log("Successfully loaded Bitmap for texture");
					console.log("Parsed texture: Name = " + this_block.name);
				}
			}
			else if(this_block.type==44){
				var audio_asset:WaveAudio = <WaveAudio> resourceDependency.assets[0];
				this_block.data = audio_asset; // Store finished asset
				// Finalize texture asset to dispatch texture event, which was
				// previously suppressed while the dependency was loaded.
				//console.log("Parsing audio " + this_block.name);
				this._pFinalizeAsset(<IAsset> audio_asset, this_block.name);

				if (this._debug) {
					console.log("Successfully loaded Sound into WaveAudio");
					console.log("Loaded audio: Name = " + this_block.name);
				}
			}
			else if(this_block.type==83){
				this_block.loaded_dependencies[resourceDependency.sub_id]= resourceDependency.assets[0];
				this_block.loaded_dependencies_cnt++;
				if (this._debug) {
					console.log("Successfully loaded Bitmap " + resourceDependency.sub_id + " / 6 for Cubetexture");
				}
				if(this_block.loaded_dependencies_cnt==6){
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
		//not used - if a dependcy fails, the awaiting Texture or CubeTexture will never be finalized, and the default-bitmaps will be used.
		// this means, that if one Bitmap of a CubeTexture fails, the CubeTexture will have the DefaultTexture applied for all six Bitmaps.
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
			var block:AWDBlock = this._blocks[parseInt(resourceDependency.id)];
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

				case AWDParser.DEFLATE:
				case AWDParser.LZMA:
					this._pDieWithError('Compressed AWD formats not yet supported');
					break;

				case AWDParser.UNCOMPRESSED:
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

				case AWDParser.DEFLATE:
				case AWDParser.LZMA:

					if (this._debug) {
						console.log("(!) AWDParser Error: Compressed AWD formats not yet supported (!)");
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

		for (var c in this._blocks) {

			var b:AWDBlock = <AWDBlock> this._blocks[ c ];
			b.dispose();

		}

	}

	private parseNextBlock():void
	{
		var block:AWDBlock;
		var assetData:IAsset;
		var isParsed:boolean = false;
		var ns:number;
		var type:number;
		var flags:number;
		var len:number;

		var start_timeing = 0;
		start_timeing = performance.now();

		this._cur_block_id = this._body.readUnsignedInt();

		ns = this._body.readUnsignedByte();
		type = this._body.readUnsignedByte();
		flags = this._body.readUnsignedByte();
		len = this._body.readUnsignedInt();

		var blockCompression:boolean = BitFlags.test(flags, BitFlags.FLAG4);
		var blockCompressionLZMA:boolean = BitFlags.test(flags, BitFlags.FLAG5);

		if (this._accuracyOnBlocks) {
			this._accuracyMatrix = BitFlags.test(flags, BitFlags.FLAG1);
			this._accuracyGeo = BitFlags.test(flags, BitFlags.FLAG2);
			this._accuracyProps = BitFlags.test(flags, BitFlags.FLAG3);
			this._geoNrType = AWDParser.FLOAT32;

			if (this._accuracyGeo) {
				this._geoNrType = AWDParser.FLOAT64;
			}

			this._matrixNrType = AWDParser.FLOAT32;

			if (this._accuracyMatrix) {
				this._matrixNrType = AWDParser.FLOAT64;
			}

			this._propsNrType = AWDParser.FLOAT32;

			if (this._accuracyProps) {
				this._propsNrType = AWDParser.FLOAT64;
			}
		}

		var blockEndAll:number = this._body.position + len;

		if (len > this._body.getBytesAvailable()) {
			this._pDieWithError('AWD2 block length is bigger than the bytes that are available!');
			this._body.position += this._body.getBytesAvailable();
			return;
		}
		this._newBlockBytes = new ByteArray();


		this._body.readBytes(this._newBlockBytes, 0, len);

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

		this._newBlockBytes.position = 0;
		block = new AWDBlock(this._cur_block_id, type);
		block.len = this._newBlockBytes.position + len;
		var blockEndBlock:number = this._newBlockBytes.position + len;

		if (blockCompression) {
			this._pDieWithError('Compressed AWD formats not yet supported');
			//blockEndBlock   = this._newBlockBytes.position + this._newBlockBytes.length;
			//block.len       = blockEndBlock;
		}

		if (this._debug) {
			console.log("AWDBlock:  ID = " + this._cur_block_id + " | TypeID = " + type + " | Compression = " + blockCompression + " | Matrix-Precision = " + this._accuracyMatrix + " | Geometry-Precision = " + this._accuracyGeo + " | Properties-Precision = " + this._accuracyProps);
		}

		this._blocks[this._cur_block_id] = block;

		if ((this._version[0] == 3) && (this._version[1] == 0)) {
			// probably should contain some info about the type of animation
			var factory = new AS2SceneGraphFactory();

			switch (type) {
				case 24:
					this.parseMeshLibraryBlock(this._cur_block_id);
					isParsed = true;
					break;
				case 25:
					this.parseBillBoardLibraryBlock(this._cur_block_id);
					isParsed = true;
					break;
				case 44:
					this.parseAudioBlock(this._cur_block_id, factory);
					isParsed = true;
					break;
				case 133:
					this.parseTimeLine(this._cur_block_id, factory);
					isParsed = true;
					break;
				case 134:
					this.paresTextField(this._cur_block_id, factory);
					isParsed = true;
					break;
				case 135:
					this.parseTesselatedFont(this._cur_block_id);
					isParsed = true;
					break;
				case 136:
					this.parseTextFormat(this._cur_block_id);
					isParsed = true;
					break;
			}
		}
		if ((this._version[0] > 2)||((this._version[0] >= 2) && (this._version[1] >= 1))) {

			switch (type) {
				case 11:
					this.parsePrimitves(this._cur_block_id);
					isParsed = true;
					break;
				case 31:
					this.parseSkyboxInstance(this._cur_block_id);
					isParsed = true;
					break;
				case 41:
					this.parseLight(this._cur_block_id);
					isParsed = true;
					break;
				case 42:
					this.parseCamera(this._cur_block_id);
					isParsed = true;
					break;

				//  case 43:
				//      parseTextureProjector(_cur_block_id);
				//      isParsed = true;
				//      break;

				case 51:
					this.parseLightPicker(this._cur_block_id);
					isParsed = true;
					break;
				case 81:
					this.parseMaterial_v1(this._cur_block_id);
					isParsed = true;
					break;
				case 83:
					this.parseCubeTexture(this._cur_block_id);
					isParsed = true;
					break;
				case 91:
					this.parseSharedMethodBlock(this._cur_block_id);
					isParsed = true;
					break;
				case 92:
					this.parseShadowMethodBlock(this._cur_block_id);
					isParsed = true;
					break;
				case 111:
					this.parseMeshPoseAnimation(this._cur_block_id, true);
					isParsed = true;
					break;
				case 112:
					this.parseMeshPoseAnimation(this._cur_block_id);
					isParsed = true;
					break;
				case 113:
					this.parseVertexAnimationSet(this._cur_block_id);
					isParsed = true;
					break;
				case 122:
					this.parseAnimatorSet(this._cur_block_id);
					isParsed = true;
					break;
				case 253:
					this.parseCommand(this._cur_block_id);
					isParsed = true;
					break;
			}
			//*/
		}
		//*
		if (isParsed == false) {
			switch (type) {

				case 1:
					this.parseTriangleGeometrieBlock(this._cur_block_id);
					break;
				case 22:
					this.parseContainer(this._cur_block_id);
					break;
				case 23:
					this.parseMeshInstance(this._cur_block_id);
					break;
				case 81:
					this.parseMaterial(this._cur_block_id);
					break;
				case 82:
					this.parseTexture(this._cur_block_id);
					break;
				case 101:
					this.parseSkeleton(this._cur_block_id);
					break;
				case 102:
					this.parseSkeletonPose(this._cur_block_id);
					break;
				case 103:
					this.parseSkeletonAnimation(this._cur_block_id);
					break;
				case 121:
				//this.parseUVAnimation(this._cur_block_id);
				//break;
				case 254:
					this.parseNameSpace(this._cur_block_id);
					break;
				case 255:
					this.parseMetaData(this._cur_block_id);
					break;
				default:
					if (this._debug) {
						console.log("AWDBlock:   Unknown BlockType  (BlockID = " + this._cur_block_id + ") - Skip " + len + " bytes");
					}
					this._newBlockBytes.position += len;
					break;
			}
		}




		var msgCnt:number = 0;
		if (this._newBlockBytes.position == blockEndBlock) {
			if (this._debug) {
				if (block.errorMessages) {
					while (msgCnt < block.errorMessages.length) {
						console.log("        (!) Error: " + block.errorMessages[msgCnt] + " (!)");
						msgCnt++;
					}
				}
			}
			if (this._debug) {
				console.log("\n");
			}
		} else {
			if (this._debug) {

				console.log("  (!)(!)(!) Error while reading AWDBlock ID " + this._cur_block_id + " = skip to next block");

				if (block.errorMessages) {
					while (msgCnt < block.errorMessages.length) {
						console.log("        (!) Error: " + block.errorMessages[msgCnt] + " (!)");
						msgCnt++;
					}
				}
			}
		}

		this._body.position = blockEndAll;
		this._newBlockBytes = null;

		var end_timing = performance.now();
		var time_delta = end_timing - start_timeing;
		this._time_all+=time_delta;
		if(type==1){
			this._time_geom+=time_delta;
		}
		else if(type==133){
			this._time_timeline+=time_delta;
		}
		else if(type==135){
			this._time_fonts+=time_delta;
		}
		else if(type==134){
			this._time_textfields+=time_delta;
		}
		else if(type==44){
			this._time_sounds+=time_delta;
		}
		else if(type==82){
			this._time_materials+=time_delta;
		}
		else if(type==81){
			this._time_textures+=time_delta;
		}
		else if(type==24){
			this._time_meshes+=time_delta;
		}
		console.log("Parsed block of type: "+type +" in "+time_delta+" ms | parsing total: "+this._time_all+" | geoms: "+this._time_geom+" | timelines: "+this._time_timeline+" | fonts: "+this._time_fonts);

		console.log("Parsed block of type: "+type +" in "+time_delta+" ms | sounbds: "+this._time_sounds+" | mats: "+this._time_materials+" | textures: "+this._time_textures+" | meshes: "+this._time_meshes);

	}


	//--Parser Blocks---------------------------------------------------------------------------


	private parseTesselatedFont(blockID:number):void {
		var name:string = this.parseVarStr();
		this._blocks[blockID].name = name;
		//console.log("Font name = "+this._blocks[blockID].name);
		var font_style_cnt:number = this._newBlockBytes.readUnsignedInt();
		//console.log("Font font_style_cnt = "+font_style_cnt);
		var new_font:Font=new Font();
		for (var i:number = 0; i < font_style_cnt; ++i) {
			var font_style_name:string = this.parseVarStr();
			//console.log("Font font_style_name = "+font_style_name);
			var new_font_style:TesselatedFontTable=new_font.get_font_table(font_style_name);
			new_font_style.set_font_em_size(this._newBlockBytes.readUnsignedInt());
			//console.log("Font new_font_style.font_em_size = "+new_font_style.get_font_em_size);
			var font_style_char_cnt:number = this._newBlockBytes.readUnsignedInt();
			//console.log("Font font_style_char_cnt = "+font_style_char_cnt);
			for (var i:number = 0; i < font_style_char_cnt; ++i) {

				var font_style_char:number = this._newBlockBytes.readUnsignedInt();
				//console.log("Font font_style_char = "+font_style_char);
				// todo: this is basically a simplified version of the subgeom-parsing done in parseTriangleGeometry. Make a parseSubGeom() instead (?)
				var sm_len:number = this._newBlockBytes.readUnsignedInt();
				var sm_end:number = this._newBlockBytes.position + sm_len;
				//console.log("Font sm_len = "+sm_len);

				//this.parseProperties(null); // no properties for font-table subgeos
				// Loop through data streams
				while (this._newBlockBytes.position < sm_end) {
					var idx:number = 0;
					var str_ftype:number, str_type:number, str_len:number, str_end:number;

					// Type, field type, length
					str_type = this._newBlockBytes.readUnsignedByte();
					str_ftype = this._newBlockBytes.readUnsignedByte();
					str_len = this._newBlockBytes.readUnsignedInt();
					str_end = this._newBlockBytes.position + str_len;

					if (str_type == 2) {//face indicies positions
						var indices:Array<number> = new Array<number>();

						while (this._newBlockBytes.position < str_end) {
							indices[idx++] = this._newBlockBytes.readUnsignedShort();
						}
					} else if (str_type == 10) {// combined vertex2D stream 5 x float32

						var curveData:ByteArray = new ByteArray();
						this._newBlockBytes.readBytes(curveData, 0, str_len);
					}
					else {
						this._newBlockBytes.position = str_end;
					}
				}
				//this.parseProperties(null);// no attributes for font-table subgeos

				var vertexBuffer:AttributesBuffer = new AttributesBuffer(28, str_len/28);
				vertexBuffer.bufferView = new Uint8Array(<ArrayBuffer> curveData.arraybytes);

				var curve_sub_geom:CurveSubGeometry = new CurveSubGeometry(vertexBuffer);
				curve_sub_geom.setIndices(indices);
				curve_sub_geom.setPositions(new Float3Attributes(vertexBuffer));
				curve_sub_geom.setCurves(new Float2Attributes(vertexBuffer));
				curve_sub_geom.setUVs(new Float2Attributes(vertexBuffer));
				new_font_style.set_subgeo_for_char(font_style_char.toString(), curve_sub_geom);
			}
			//console.log("Parsed a font-table");

		}
		//console.log("Parsed a font");
		this.parseProperties(null);
		this.parseUserAttributes();
		this._pFinalizeAsset(<IAsset>new_font, name);
		this._blocks[blockID].data = new_font;
		if (this._debug) {
			console.log("Parsed a font: Name = '" + name);
		}

	}

	private parseTextFormat(blockID:number):void {
		var name:string = this.parseVarStr();
		this._blocks[blockID].name = name;
		//console.log("this._blocks[blockID].name  '" + this._blocks[blockID].name );
		var font_id:number = this._newBlockBytes.readUnsignedInt();
		//console.log("font_id  '" + font_id);
		var font_style_name:string = this.parseVarStr();
		//console.log("font_style_name  '" + font_style_name);
		var returnArrayFont:Array<any> = this.getAssetByID(font_id, [Font.assetType]);
		var font:Font;
		if (returnArrayFont[0]) {
			font = <Font> returnArrayFont[1];
		} else {
			this._blocks[blockID].addError("Could not find a Font for this TextFormat. A empty Font is created!");
			font = new Font();
		}
		var newTextFormat:TextFormat = new TextFormat();
		newTextFormat.font_name = font.name;
		var font_table:TesselatedFontTable = font.get_font_table(font_style_name);
		if(font_table!=null){
			newTextFormat.font_style = font_style_name;
			newTextFormat.font_table = font_table;
		}

		var data_id:number = this._newBlockBytes.readUnsignedInt();
		//console.log("mat  '" + data_id);
		var mat:BasicMaterial;
		var returnedArrayMaterial:Array<any> = this.getAssetByID(data_id, [MethodMaterial.assetType, BasicMaterial.assetType]);

		if (returnedArrayMaterial[0]) {
			mat = <BasicMaterial> returnedArrayMaterial[1];
		} else {
			this._blocks[blockID].addError("Could not find a Material for this TextFormat. Default Material will be used!");
			mat = new BasicMaterial();
		}
		mat.bothSides=true;

		var num_uv_values:number = this._newBlockBytes.readUnsignedByte();
		//console.log("num_uv_values  '" + num_uv_values);
		var uv_values:Array<number>=[];
		for(var uvcnt:number=0; uvcnt<num_uv_values; uvcnt++){
			var uv_value:number=this._newBlockBytes.readFloat();
			uv_values.push(uv_value);
			//console.log("uv_value  '" + uv_value);
		}
		newTextFormat.uv_values=uv_values;
		var format_props:AWDProperties = this.parseProperties({1:AWDParser.UINT16, 2:AWDParser.UINT16, 3:AWDParser.UINT8,4:AWDParser.UINT8,5:AWDParser.UINT8,6:AWDParser.UINT8, 7:AWDParser.UINT16, 8:AWDParser.UINT16, 9:AWDParser.UINT16, 10:AWDParser.UINT16});

		newTextFormat.size = format_props.get(1,12);
		newTextFormat.letterSpacing = format_props.get(2,0);
		//newTextFormat.rotated = format_props.get(3,false);
		newTextFormat.kerning = format_props.get(4,true);
		//newTextFormat.baseline_shift = format_props.get(5,1);
		//newTextFormat.align = format_props.get(6,0);
		newTextFormat.indent = format_props.get(7,0);
		newTextFormat.leftMargin = format_props.get(8,0);
		newTextFormat.rightMargin = format_props.get(9,0);
		//newTextFormat.linespacing = format_props.get(10,0);
		newTextFormat.material = mat;
		this.parseUserAttributes();// textformat has no extra-properties
		//newTextFormat.extra =

		this._pFinalizeAsset(<IAsset> newTextFormat, name);
		this._blocks[blockID].data = newTextFormat;

		if (this._debug) {
			console.log("Parsed a TextFormat: Name = '" + name + " font: "+font.name);
		}

	}

	private paresTextField(blockID:number, factory:TimelineSceneGraphFactory):void {
		var name:string = this.parseVarStr();
		this._blocks[blockID].name = name;
		//console.log("name  '" + name);
        var newTextField = factory.createTextField();
		var text_field_type:number=this._newBlockBytes.readUnsignedByte();
		if(text_field_type==0) {
			newTextField.type = "static";
		}
		else if(text_field_type==1) {
			newTextField.type = "dynamic";
		}
		else if(text_field_type==2) {
			newTextField.type = "input";
		}
		else if(text_field_type==3) {
			newTextField.type ="input";
			newTextField.displayAsPassword=true;
		}

		newTextField.width=this._newBlockBytes.readFloat();
		newTextField.height=this._newBlockBytes.readFloat();
		var num_paragraphs:number = this._newBlockBytes.readUnsignedInt();
		var complete_text:string = "";
		//console.log("num_paragraphs  '" + num_paragraphs);
		var text_format:TextFormat;
		for(var paracnt:number=0; paracnt<num_paragraphs; paracnt++){

			var num_textruns:number = this._newBlockBytes.readUnsignedInt();
			//console.log("num_textruns  '" + num_textruns);
			for(var textrun_cnt:number=0; textrun_cnt<num_textruns; textrun_cnt++) {

				var format_id:number = this._newBlockBytes.readUnsignedInt();
				//console.log("format_id  '" + format_id);
				var textFormatArray:Array<any> = this.getAssetByID(format_id, [TextFormat.assetType]);
				if (textFormatArray[0]) {
					text_format = <TextFormat> textFormatArray[1];
				} else {
					this._blocks[blockID].addError("Could not find a Material for this Billboard. A empty material is created!");
					text_format = new TextFormat();
				}
				//console.log("text_format  '" + text_format.name);
				var txt_length = this._newBlockBytes.readUnsignedInt();
				//console.log("txt_length  '" + txt_length);
				if (txt_length > 0) {
					var this_txt:string = this._newBlockBytes.readUTFBytes(txt_length);
					//newTextField.appendText(this_txt, text_format);
					complete_text+=this_txt;
					//console.log("this_txt  '" + this_txt);
				}
			}
			//newTextField.closeParagraph();
		}
		newTextField.textFormat=text_format;
		newTextField.text=complete_text;
		//newTextField.construct_geometry();
		// todo: optional matrix etc can be put in properties.

		var props:AWDProperties = this.parseProperties({1:AWDParser.BOOL, 3:AWDParser.BOOL, 4:AWDParser.BOOL, 5:AWDParser.BOOL, 7:AWDParser.UINT8, 8:AWDParser.UINT8, 9:AWDParser.UINT8});
		newTextField.selectable = props.get(1, false);
		newTextField.border =  props.get(3, false);
		//newTextField.renderHTML =  props.get(4, false);
		//newTextField.scrollable =  props.get(5, false);
		//newTextField.text_flow =  props.get(7, 0);
		//newTextField.orientationMode =  props.get(8, 0);
		//newTextField.line_mode =  props.get(9, 0);
		newTextField.extra = this.parseUserAttributes();

		//console.log("Parsed a TextField: Name = '" + name + "| text  = " + complete_text);
		this._pFinalizeAsset(<IAsset> newTextField, name);
		this._blocks[blockID].data = newTextField;

		if (this._debug) {
			console.log("Parsed a TextField: Name = '" + name + "| text  = " + complete_text);
		}

	}

	// Block ID = 25
	private parseBillBoardLibraryBlock(blockID:number):void {

		var name:string = this.parseVarStr();

		var data_id:number = this._newBlockBytes.readUnsignedInt();
		var mat:BasicMaterial;
		var returnedArrayMaterial:Array<any> = this.getAssetByID(data_id, [MethodMaterial.assetType, BasicMaterial.assetType]);

		if (returnedArrayMaterial[0]) {
			mat = <BasicMaterial> returnedArrayMaterial[1];
		} else {
			this._blocks[blockID].addError("Could not find a Material for this Billboard. A empty material is created!");
			mat = new BasicMaterial();
		}
		mat.bothSides=true;
		var billboard:Billboard = new Billboard(mat);

		// todo: optional matrix etc can be put in properties.
		this.parseProperties(null);

		billboard.extra = this.parseUserAttributes();

		this._pFinalizeAsset(<IAsset> billboard, name);
		this._blocks[blockID].data = billboard;

		if (this._debug) {
			console.log("Parsed a Library-Billboard: Name = '" + name + "| Material-Name = " + mat.name);
		}
	}
	// Block ID = 24
	private parseMeshLibraryBlock(blockID:number):void {
		var num_materials:number;
		var materials_parsed:number;

		var name:string = this.parseVarStr();

		var data_id:number = this._newBlockBytes.readUnsignedInt();
		var geom:Geometry;
		var returnedArrayGeometry:Array<any> = this.getAssetByID(data_id, [Geometry.assetType]);
		if (returnedArrayGeometry[0]) {
			geom = <Geometry> returnedArrayGeometry[1];
		} else {
			this._blocks[blockID].addError("Could not find a Geometry for this Mesh. A empty Geometry is created!");
			geom = new Geometry();
		}

		this._blocks[blockID].geoID = data_id;
		var materials:Array<MethodMaterial> = new Array<MethodMaterial>();
		num_materials = this._newBlockBytes.readUnsignedShort();

		var materialNames:Array<string> = new Array<string>();
		materials_parsed = 0;

		var returnedArrayMaterial:Array<any>;

		while (materials_parsed < num_materials) {
			var mat_id:number;
			mat_id = this._newBlockBytes.readUnsignedInt();
			returnedArrayMaterial = this.getAssetByID(mat_id, [MethodMaterial.assetType, BasicMaterial.assetType])
			if ((!returnedArrayMaterial[0]) && (mat_id > 0)) {
				this._blocks[blockID].addError("Could not find Material Nr " + materials_parsed + " (ID = " + mat_id + " ) for this Mesh");
			}

			var m:MethodMaterial = <MethodMaterial> returnedArrayMaterial[1];
			//m.preserveAlpha = true;
			m.alphaBlending = true;
			m.useColorTransform = true;
			materials.push(m);
			materialNames.push(m.name);

			materials_parsed++;
		}

		var mesh:Mesh = new Mesh(geom, null);


		if (materials.length >= 1 && mesh.subMeshes.length == 1) {
			mesh.material = materials[0];
		} else if (materials.length > 1) {
			var i:number;

			// Assign each sub-mesh in the mesh a material from the list. If more sub-meshes
			// than materials, repeat the last material for all remaining sub-meshes.
			for (i = 0; i < mesh.subMeshes.length; i++) {
				mesh.subMeshes[i].material = materials[Math.min(materials.length - 1, i)];
			}
		}
		this.parseProperties(null);
		mesh.extra = this.parseUserAttributes();

		this._pFinalizeAsset(<IAsset> mesh, name);
		this._blocks[blockID].data = mesh;

		if (this._debug) {
			console.log("Parsed a Library-Mesh: Name = '" + name + "| Geometry-Name = " + geom.name + " | SubMeshes = " + mesh.subMeshes.length + " | Mat-Names = " + materialNames.toString());
		}
	}
	private parseAudioBlock(blockID:number, factory:TimelineSceneGraphFactory):void {

		//var asset:Audio;todo create asset for audio

		this._blocks[blockID].name = this.parseVarStr();

		var type:number = this._newBlockBytes.readUnsignedByte();
		var data_len:number;

		//this._texture_users[this._cur_block_id.toString()] = [];

		// External
		if (type == 0) {
			data_len = this._newBlockBytes.readUnsignedInt();
			var url:string;
			url = this._newBlockBytes.readUTFBytes(data_len);
			// todo parser needs to be able to handle mp3 and wav files if we trigger the loading of external ressource
			this._pAddDependency(this._cur_block_id.toString(), new URLRequest(url), false, null, true);
			console.log("Audio url = "+url);

		} else {
			// todo: exporter does not export embed sounds yet
			data_len = this._newBlockBytes.readUnsignedInt();

			var data:ByteArray;
			data = new ByteArray();
			this._newBlockBytes.readBytes(data, 0, data_len);

			// todo parse sound from bytes
			// this._pAddDependency(this._cur_block_id.toString(), null, false, ParserUtils.by(data), true);
			this._pAddDependency(this._cur_block_id.toString(), null, false, data, true);

		}

		// Ignore for now
		this.parseProperties(null);
		this._blocks[blockID].extras = this.parseUserAttributes();
		this._pPauseAndRetrieveDependencies();
		//this._blocks[blockID].data = asset;todo

		if (this._debug) {
			var textureStylesNames:Array<string> = ["external", "embed"];
			console.log("Start parsing a " + textureStylesNames[type] + " Audio file");
		}
	}

	//Block ID = 4
	private parseTimeLine(blockID:number, factory:TimelineSceneGraphFactory):void {

		var i:number;
		var j:number;
		var c:number;
		var timeLineContainer = factory.createMovieClip();
		var name = this.parseVarStr();
		var isScene = !!this._newBlockBytes.readUnsignedByte();
		var sceneID = this._newBlockBytes.readUnsignedByte();
		var fps:number = this._newBlockBytes.readFloat();
		//console.log("fps = "+fps);
		timeLineContainer.fps=fps;
		var ms_per_frame = 1000 / fps;
		var num_instances:number=0;
		var num_all_display_instances:number=0;


		// register list of potential childs
		// a potential child can be reused on a timeline (added / removed / added)
		// However, for each potential child, we need to register the max-number of instances that a frame contains
		// we parse 2 lists of potential-childs:
		// -	the first list contains potential-childs that are only ever instanced once per frame.
		// -	the second list contains potential-childs that are instanced multiple times on some frames.

		// on registering a child, the child gets a incremental-id assigned. This is the id, that the commands are using to access the childs.
		// hence we need to be careful to register all objects in correct order.

		var num_potential_childs:number = this._newBlockBytes.readUnsignedShort();
		for (i = 0; i < num_potential_childs; i++) {
			resourceID = this._newBlockBytes.readUnsignedInt();
			var cmd_asset:DisplayObject = <DisplayObject>this._blocks[resourceID].data;
			if (cmd_asset != null) {
				timeLineContainer.registerPotentialChild(cmd_asset);
			}
			else{
				//todo: register a default display object on timeline, so we do not mess up the incremental obj-id
				//timeLineContainer.registerPotentialChild(cmd_asset);
				console.log("ERROR when collecting objects for timeline");
			}
		}
		num_all_display_instances+=num_potential_childs;
		var num_potential_childs_multi_instanced = this._newBlockBytes.readUnsignedShort();
		num_potential_childs+=num_potential_childs_multi_instanced;
		for (i = 0; i < num_potential_childs_multi_instanced; i++) {
			resourceID = this._newBlockBytes.readUnsignedInt();
			num_instances = this._newBlockBytes.readUnsignedShort();
			num_all_display_instances+=num_instances;
			var cmd_asset:DisplayObject = <DisplayObject>this._blocks[resourceID].data;
			if (cmd_asset != null) {
				for (j = 0; j < num_instances; j++) {
					timeLineContainer.registerPotentialChild(cmd_asset);
				}
			}
			else{
				for (j = 0; j < num_instances; j++) {
					//todo: register a default display object on timeline, so we do not mess up the incremental obj-id
					//timeLineContainer.registerPotentialChild(cmd_asset);
					console.log("ERROR when collecting objects for timeline");
				}
			}
		}

		if (this._debug)
			console.log("Parsed "+num_potential_childs+" potential childs. They will be used by "+num_all_display_instances+" instances.");

		// register list of potential sounds
		// a potential child can be reused on a timeline (added / removed / added)
		var num_potential_sounds = this._newBlockBytes.readUnsignedShort();
		for (i = 0; i < num_potential_sounds; i++) {
			resourceID = this._newBlockBytes.readUnsignedInt();
			var cmd_asset:DisplayObject = <DisplayObject>this._blocks[resourceID].data;
			if (cmd_asset != null) {
				//todo: register sound objects on movieclip
				console.log("ERROR when collecting objects for timeline");
				//timeLineContainer.registerPotentialChild(cmd_asset);
			}
			else{
				//todo: this is a error that might break complete timeline, because all sound obj-id shift
			}
		}
		//console.log("Parsed "+num_potential_sounds+" potential sounds");

		var numFrames = this._newBlockBytes.readUnsignedShort();

		//console.log("numFrames "+numFrames);
		// var previousTimeLine:TimeLineFrame;
		// var fill_props:AWDProperties = this.parseProperties({1:AWD3Parserutils.UINT32});// { 1:UINT32, 6:AWDSTRING }  ); //; , 2:UINT32, 3:UINT32, 5:BOOL } );


		var totalDuration:number;
		var frameDuration:number;
		var numLabels:number;
		var numCommands:number;
		var objectID:number;
		var target_depth:number;
		var resourceID:number;
		var number_of_obj:number;
		var commandType:number;
		var frame:TimelineKeyFrame;
		var label:string;
		var hasDepthChanges:boolean;
		totalDuration=0;
		for (i = 0; i < numFrames; i++) {
			frame = new TimelineKeyFrame();
			// todo: remove the ms_per_frame to set the duration in frames
			frameDuration = this._newBlockBytes.readUnsignedInt();
			frame.setFrameTime(totalDuration, frameDuration);
			totalDuration += frameDuration;
			//console.log("duration = " + frameDuration);

			numLabels = this._newBlockBytes.readUnsignedByte();

			for (j = 0; j < numLabels; j++) {
				// TODO: Temporary way to handle labels
				frame.label = this.parseVarStr();
			}

			numCommands = this._newBlockBytes.readUnsignedShort();
			//console.log("numCommands "+numCommands);
			//traceString += "\n      Commands " + numCommands;
			hasDepthChanges = false;
			for (j = 0; j < numCommands; j++) {
				commandType = this._newBlockBytes.readUnsignedByte();

				// 1 = remove a number of objects by depth
				// 2 = add a object by child-id at specific depth
				// 3 = update a object by child-id
				// 4 = add / update sound - (not finished)

				switch (commandType) {

					case 1:// remove a number of objects at specific depth
						number_of_obj = this._newBlockBytes.readUnsignedShort();
						//console.log("number_of_obj ", number_of_obj);
						var remove_depths:Array<number>=new Array<number>();
						for (c = 0; c < number_of_obj; c++) {
							// Remove Object Command
							target_depth = this._newBlockBytes.readShort();
							remove_depths.push(target_depth);
							//console.log("\n       - Remove object at depth: " + target_depth);
						}
						frame.addConstructCommand(new RemoveChildrenAtDepthCommand(remove_depths));
						break;

					case 2:// add a of object by child-id at specific depth
					case 3:// update a object by child-id
					case 6:// add a of button_instance
						objectID = this._newBlockBytes.readUnsignedShort();
						//console.log("add / update objectID ", objectID);
						if (commandType != 3) {
							hasDepthChanges=true;
							target_depth = this._newBlockBytes.readShort();
							//console.log("target_depth ", target_depth);
                            var potChild = timeLineContainer.getPotentialChildPrototype(objectID);
							if (potChild != undefined) {
								frame.addConstructCommand(new AddChildAtDepthCommand(objectID, target_depth));
								if(commandType==6) {
									frame.addConstructCommand(new SetButtonCommand(objectID));
								}
								else {
									// if the object is a tetfield, we set the textfield-name as instancename
									if (potChild.isAsset(TextField)) {
										frame.addConstructCommand(new SetInstanceNameCommand(objectID, potChild.name));
									}
								}
							}
							else{
								console.log("ERROR: could not find the objectID ", objectID);
							}
						}
						var props_flag = this._newBlockBytes.readUnsignedShort();
						/*	Props_flags
						 1: read display matrix - 6 x float,
						 2: read display matrix - read another UINT8-bitflag that determinates what matrix components to parse
						 3: read color matrix - 4 x float, 4 x uint16
						 4: read color matrix - read another UINT8-bitflag that determinates what matrix components to parse
						 5: blendmode - uint8
						 6: visible - boolean
						 7: AWD3Parserutils.UINT8
						 });*/
						// read display matrix
						if (BitFlags.test(props_flag, BitFlags.FLAG1)) {
							var thisMatrix = new Matrix3D();
							if (BitFlags.test(props_flag, BitFlags.FLAG2)) {
							}
							else {
								thisMatrix.rawData[0] = this._newBlockBytes.readFloat();
								thisMatrix.rawData[1] = this._newBlockBytes.readFloat();
								thisMatrix.rawData[4] = this._newBlockBytes.readFloat();
								thisMatrix.rawData[5] = this._newBlockBytes.readFloat();
								thisMatrix.position = new Vector3D(this._newBlockBytes.readFloat(), this._newBlockBytes.readFloat(), 0);
							}
							frame.addConstructCommand(new UpdatePropertyCommand(objectID, "_iMatrix3D", thisMatrix));
						}
						// read colortransforms
						if (BitFlags.test(props_flag, BitFlags.FLAG3)) {
							var thisColorTransform = new ColorTransform();
							if (BitFlags.test(props_flag, BitFlags.FLAG4)) {
							}
							else {
								thisColorTransform.redMultiplier = this._newBlockBytes.readFloat();
								thisColorTransform.greenMultiplier = this._newBlockBytes.readFloat();
								thisColorTransform.blueMultiplier = this._newBlockBytes.readFloat();
								thisColorTransform.alphaMultiplier = this._newBlockBytes.readFloat();
								thisColorTransform.redOffset = this._newBlockBytes.readShort();
								thisColorTransform.greenOffset = this._newBlockBytes.readShort();
								thisColorTransform.blueOffset = this._newBlockBytes.readShort();
								thisColorTransform.alphaOffset = this._newBlockBytes.readShort();
							}
							frame.addConstructCommand(new UpdatePropertyCommand(objectID, "colorTransform", thisColorTransform));
						}
						if (BitFlags.test(props_flag, BitFlags.FLAG5)) {
							var blendmode_int = this._newBlockBytes.readUnsignedByte();
							var blendmode_string = this.blendModeDic[blendmode_int];
						}
						if (BitFlags.test(props_flag, BitFlags.FLAG6)) {
							frame.addConstructCommand(new UpdatePropertyCommand(objectID, "visible", this._newBlockBytes.readByte()));
						}
						if (BitFlags.test(props_flag, BitFlags.FLAG7)) {
							var instanceName = this.parseVarStr();
							if (instanceName.length) {
								frame.addConstructCommand(new SetInstanceNameCommand(objectID, instanceName));
							}
						}
						if (BitFlags.test(props_flag, BitFlags.FLAG8)) {
							var mask_id_nums = this._newBlockBytes.readUnsignedShort();
							var mask_ids = new Array();
							for (var mi_cnt = 0; mi_cnt < mask_id_nums; mi_cnt++) {
								mask_ids.push(this._newBlockBytes.readShort());
							}
							if (mask_ids.length > 0) {
								if ((mask_ids.length == 1) && (mask_ids[0] == -1)) {
									// TODO: this object is used as mask
									frame.addConstructCommand(new UpdatePropertyCommand(objectID, "_iMaskID", objectID));
								}
								else
									frame.addConstructCommand(new SetMaskCommand(objectID, mask_ids));
							}
						}
						break;

					case 4:

						// Add Sound Command
						// TODO: create CommandPropsSound and check which asset to use
						objectID = this._newBlockBytes.readUnsignedInt();
						resourceID = this._newBlockBytes.readUnsignedInt();
						// TODO: implement sound in timeline
						//commandString += "\n      - Add new Sound AWD-ID = " + resourceID.toString() + " as object_id = " + objectID.toString();
						break;

					default:

						//commandString += "\n       - Unknown Command Type = " + commandType;
						break;

				}
			}

			if (hasDepthChanges) {
				// only want to do this once after all children's depth values are updated
				frame.addConstructCommand(new ApplyAS2DepthsCommand());
				hasDepthChanges = false;
			}

			var length_code = this._newBlockBytes.readUnsignedInt();
			if (length_code > 0) {
				// TODO: Script should probably not be attached to keyframes?
				var frame_code = this._newBlockBytes.readUTFBytes(length_code);
				frame.addPostConstructCommand(new ExecuteScriptCommand(frame_code));
				//traceString += "\nframe-code = " + frame_code;
			}
			//traceString += commandString;
			//trace("length_code = "+length_code+" frame_code = "+frame_code);
			this._newBlockBytes.readUnsignedInt();// user attributes - skip for now
			//console.log(traceString);
			timeLineContainer.addFrame(frame);

		}

		this._pFinalizeAsset(<IAsset>timeLineContainer, name);
		this._blocks[blockID].data = timeLineContainer;
		this.parseProperties(null);
		this.parseUserAttributes();
		if (this._debug)
			console.log("Parsed a TIMELINE: Name = " + name + "| isScene = " + isScene + "| sceneID = " + sceneID + "| numFrames = " + numFrames);
	}

	//Block ID = 1
	private parseTriangleGeometrieBlock(blockID:number):void
	{

		var geom:Geometry = new Geometry();

		// Read name and sub count
		var name:string = this.parseVarStr();
		var num_subs:number = this._newBlockBytes.readUnsignedShort();

		// Read optional properties
		var props:AWDProperties = this.parseProperties({1:this._geoNrType, 2:this._geoNrType});
		var geoScaleU:number = props.get(1, 1);
		var geoScaleV:number = props.get(2, 1);

		// Loop through sub meshes
		var subs_parsed:number = 0;
		while (subs_parsed < num_subs) {
			var is_curve_geom:boolean=false;
			var i:number;
			var sm_len:number, sm_end:number;
			var w_indices:Array<number>;
			var weights:Array<number>;

			sm_len = this._newBlockBytes.readUnsignedInt();
			sm_end = this._newBlockBytes.position + sm_len;

			var subProps:AWDProperties = this.parseProperties({1:this._geoNrType, 2:this._geoNrType});
			// Loop through data streams
			while (this._newBlockBytes.position < sm_end) {
				var idx:number = 0;
				var str_ftype:number, str_type:number, str_len:number, str_end:number;

				// Type, field type, length
				str_type = this._newBlockBytes.readUnsignedByte();
				str_ftype = this._newBlockBytes.readUnsignedByte();
				str_len = this._newBlockBytes.readUnsignedInt();
				str_end = this._newBlockBytes.position + str_len;

				var x:number, y:number, z:number;

				if (str_type == 1) {//vertex 3d positions
					var verts:Array<number> = new Array<number>();

					while (this._newBlockBytes.position < str_end) {

						x = this.readNumber(this._accuracyGeo);
						y = this.readNumber(this._accuracyGeo);
						z = this.readNumber(this._accuracyGeo);

						verts[idx++] = x;
						verts[idx++] = y;
						verts[idx++] = z;
					}
				} else if (str_type == 2) {//face indicies positions
					var indices:Array<number> = new Array<number>();

					while (this._newBlockBytes.position < str_end) {
						indices[idx++] = this._newBlockBytes.readUnsignedShort();
					}

				} else if (str_type == 3) {
					var uvs:Array<number> = new Array<number>();
					while (this._newBlockBytes.position < str_end) {
						uvs[idx++] = this.readNumber(this._accuracyGeo);

					}
				} else if (str_type == 4) {

					var normals:Array<number> = new Array<number>();

					while (this._newBlockBytes.position < str_end) {
						normals[idx++] = this.readNumber(this._accuracyGeo);
					}

				} else if (str_type == 6) {
					w_indices = Array<number>();

					while (this._newBlockBytes.position < str_end) {
						w_indices[idx++] = this._newBlockBytes.readUnsignedShort()*3;
					}

				} else if (str_type == 7) {

					weights = new Array<number>();

					while (this._newBlockBytes.position < str_end) {
						weights[idx++] = this.readNumber(this._accuracyGeo);
					}
				} else if (str_type == 8) {// 2d-positions - not used yet.
					this._newBlockBytes.position = str_end;
				} else if (str_type == 9) {// combined vertex3D stream 13 x float32
					this._newBlockBytes.position = str_end;
				} else if (str_type == 10) {// combined vertex2D stream 5 x float32
					is_curve_geom=true;

					var curveData:ByteArray = new ByteArray();
					this._newBlockBytes.readBytes(curveData, 0, str_len);
				}
				else {
					this._newBlockBytes.position = str_end;
				}

			}

			this.parseUserAttributes(); // Ignore sub-mesh attributes for now
			if(is_curve_geom){
				var vertexBuffer:AttributesBuffer = new AttributesBuffer(28, str_len/28);
				vertexBuffer.bufferView = new Uint8Array(<ArrayBuffer> curveData.arraybytes);

				var curve_sub_geom:CurveSubGeometry = new CurveSubGeometry(vertexBuffer);
				curve_sub_geom.setIndices(indices);
				curve_sub_geom.setPositions(new Float3Attributes(vertexBuffer));
				curve_sub_geom.setCurves(new Float2Attributes(vertexBuffer));
				curve_sub_geom.setUVs(new Float2Attributes(vertexBuffer));
				geom.addSubGeometry(curve_sub_geom);
				if (this._debug)
					console.log("Parsed a CurveSubGeometry");
			}
			else {
				var triangle_sub_geom = new TriangleSubGeometry(new AttributesBuffer());
				if (weights)
					triangle_sub_geom.jointsPerVertex = weights.length / (verts.length / 3);
				if (normals)
					triangle_sub_geom.autoDeriveNormals = false;
				if (uvs)
					triangle_sub_geom.autoDeriveUVs = false;
				//triangle_sub_geom.autoDeriveNormals = false;
				if (true) {
					triangle_sub_geom.autoDeriveTangents = true;
				}
				triangle_sub_geom.setIndices(indices);
				triangle_sub_geom.setPositions(verts);
				triangle_sub_geom.setNormals(normals);
				triangle_sub_geom.setUVs(uvs);
				triangle_sub_geom.setTangents(null);
				triangle_sub_geom.setJointWeights(weights);
				triangle_sub_geom.setJointIndices(w_indices);

				var scaleU:number = subProps.get(1, 1);
				var scaleV:number = subProps.get(2, 1);
				var setSubUVs:boolean = false; //this should remain false atm, because in AwayBuilder the uv is only scaled by the geometry

				if ((geoScaleU != scaleU) || (geoScaleV != scaleV)) {
					setSubUVs = true;
					scaleU = geoScaleU / scaleU;
					scaleV = geoScaleV / scaleV;
				}

				if (setSubUVs)
					triangle_sub_geom.scaleUV(scaleU, scaleV);
				geom.addSubGeometry(triangle_sub_geom);
				if (this._debug)
					console.log("Parsed a TriangleSubGeometry");
			}


			// TODO: Somehow map in-sub to out-sub indices to enable look-up
			// when creating meshes (and their material assignments.)

			subs_parsed++;
		}
		if ((geoScaleU != 1) || (geoScaleV != 1))
			geom.scaleUV(geoScaleU, geoScaleV);
		this.parseUserAttributes();
		this._pFinalizeAsset(<IAsset> geom, name);
		this._blocks[blockID].data = geom;

		if (this._debug) {
			console.log("Parsed a TriangleGeometry: Name = " + name);
		}

	}


	//Block ID = 11
	private parsePrimitves(blockID:number):void
	{
		var name:string;
		var prefab:PrefabBase;
		var primType:number;
		var subs_parsed:number;
		var props:AWDProperties;
		var bsm:Matrix3D;

		// Read name and sub count
		name = this.parseVarStr();
		primType = this._newBlockBytes.readUnsignedByte();
		props = this.parseProperties({101:this._geoNrType, 102:this._geoNrType, 103:this._geoNrType, 110:this._geoNrType, 111:this._geoNrType, 301:AWDParser.UINT16, 302:AWDParser.UINT16, 303:AWDParser.UINT16, 701:AWDParser.BOOL, 702:AWDParser.BOOL, 703:AWDParser.BOOL, 704:AWDParser.BOOL});

		var primitiveTypes:Array<string> = ["Unsupported Type-ID", "PrimitivePlanePrefab", "PrimitiveCubePrefab", "PrimitiveSpherePrefab", "PrimitiveCylinderPrefab", "PrimitivesConePrefab", "PrimitivesCapsulePrefab", "PrimitivesTorusPrefab"]

		switch (primType) {
			// to do, not all properties are set on all primitives

			case 1:
				prefab = new PrimitivePlanePrefab(props.get(101, 100), props.get(102, 100), props.get(301, 1), props.get(302, 1), props.get(701, true), props.get(702, false));
				break;

			case 2:
				prefab = new PrimitiveCubePrefab(props.get(101, 100), props.get(102, 100), props.get(103, 100), props.get(301, 1), props.get(302, 1), props.get(303, 1), props.get(701, true));
				break;

			case 3:
				prefab = new PrimitiveSpherePrefab(props.get(101, 50), props.get(301, 16), props.get(302, 12), props.get(701, true));
				break;

			case 4:
				prefab = new PrimitiveCylinderPrefab(props.get(101, 50), props.get(102, 50), props.get(103, 100), props.get(301, 16), props.get(302, 1), true, true, true); // bool701, bool702, bool703, bool704);
				if (!props.get(701, true))
					(<PrimitiveCylinderPrefab>prefab).topClosed = false;
				if (!props.get(702, true))
					(<PrimitiveCylinderPrefab>prefab).bottomClosed = false;
				if (!props.get(703, true))
					(<PrimitiveCylinderPrefab>prefab).yUp = false;

				break;

			case 5:
				prefab = new PrimitiveConePrefab(props.get(101, 50), props.get(102, 100), props.get(301, 16), props.get(302, 1), props.get(701, true), props.get(702, true));
				break;

			case 6:
				prefab = new PrimitiveCapsulePrefab(props.get(101, 50), props.get(102, 100), props.get(301, 16), props.get(302, 15), props.get(701, true));
				break;

			case 7:
				prefab = new PrimitiveTorusPrefab(props.get(101, 50), props.get(102, 50), props.get(301, 16), props.get(302, 8), props.get(701, true));
				break;

			default:
				prefab = new PrefabBase();
				console.log("ERROR: UNSUPPORTED PREFAB_TYPE");
				break;
		}

		if ((props.get(110, 1) != 1) || (props.get(111, 1) != 1)) {
			//geom.subGeometries;
			//geom.scaleUV(props.get(110, 1), props.get(111, 1)); //TODO add back scaling to prefabs
		}

		this.parseUserAttributes();
		prefab.name = name;
		this._pFinalizeAsset(prefab, name);
		this._blocks[blockID].data = prefab;

		if (this._debug) {
			if ((primType < 0) || (primType > 7)) {
				primType = 0;
			}
			console.log("Parsed a Primivite: Name = " + name + "| type = " + primitiveTypes[primType]);
		}
	}

	// Block ID = 22
	private parseContainer(blockID:number):void
	{
		var name:string;
		var par_id:number;
		var mtx:Matrix3D;
		var ctr:DisplayObjectContainer;
		var parent:DisplayObjectContainer;

		par_id = this._newBlockBytes.readUnsignedInt();
		mtx = this.parseMatrix3D();
		name = this.parseVarStr();

		var parentName:string = "Root (TopLevel)";
		ctr = new DisplayObjectContainer();
		ctr.transform.matrix3D = mtx;

		var returnedArray:Array<any> = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType]);

		if (returnedArray[0]) {
			var obj:DisplayObject = (<DisplayObjectContainer> returnedArray[1]).addChild(ctr);
			parentName = (<DisplayObjectContainer> returnedArray[1]).name;
		} else if (par_id > 0) {
			this._blocks[ blockID ].addError("Could not find a parent for this ObjectContainer3D");
		} else {
			//add to the content property
			(<DisplayObjectContainer> this._pContent).addChild(ctr);
		}

		// in AWD version 2.1 we read the Container properties
		if ((this._version[0] == 2) && (this._version[1] == 1)) {
			var props:AWDProperties = this.parseProperties({1:this._matrixNrType, 2:this._matrixNrType, 3:this._matrixNrType, 4:AWDParser.UINT8});
			ctr.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
		}
		// in other versions we do not read the Container properties
		else {
			this.parseProperties(null);
		}

		// the extraProperties should only be set for AWD2.1-Files, but is read for both versions
		ctr.extra = this.parseUserAttributes();

		this._pFinalizeAsset(<IAsset> ctr, name);
		this._blocks[blockID].data = ctr;

		if (this._debug) {
			console.log("Parsed a Container: Name = '" + name + "' | Parent-Name = " + parentName);
		}
	}

	// Block ID = 23
	private parseMeshInstance(blockID:number):void
	{
		var num_materials:number;
		var materials_parsed:number;
		var parent:DisplayObjectContainer;
		var par_id:number = this._newBlockBytes.readUnsignedInt();
		var mtx:Matrix3D = this.parseMatrix3D();
		var name:string = this.parseVarStr();
		var parentName:string = "Root (TopLevel)";
		var data_id:number = this._newBlockBytes.readUnsignedInt();
		var geom:Geometry;;
		var prefab:PrefabBase;
		var returnedArrayGeometry:Array<any> = this.getAssetByID(data_id, [Geometry.assetType]);
		var isPrefab:boolean=false;
		if (returnedArrayGeometry[0]) {
			geom = <Geometry> returnedArrayGeometry[1];
		} else {
			var returnedArrayGeometry2:Array<any> = this.getAssetByID(data_id, [PrimitivePrefabBase.assetType]);
			if (returnedArrayGeometry2[0]) {
				isPrefab=true;
				prefab=<PrefabBase>returnedArrayGeometry2[1];
			}
			else{
				this._blocks[blockID].addError("Could not find a Geometry or prefab for this Mesh " + data_id + ". A empty Geometry is created!");
				geom = new Geometry();
			}
		}

		this._blocks[blockID].geoID = data_id;
		var materials:Array<MethodMaterial> = new Array<MethodMaterial>();
		num_materials = this._newBlockBytes.readUnsignedShort();

		var materialNames:Array<string> = new Array<string>();
		materials_parsed = 0;

		var returnedArrayMaterial:Array<any>;

		while (materials_parsed < num_materials) {
			var mat_id:number;
			mat_id = this._newBlockBytes.readUnsignedInt();
			returnedArrayMaterial = this.getAssetByID(mat_id, [MethodMaterial.assetType, BasicMaterial.assetType])
			if ((!returnedArrayMaterial[0]) && (mat_id > 0)) {
				this._blocks[blockID].addError("Could not find Material Nr " + materials_parsed + " (ID = " + mat_id + " ) for this Mesh");
			}
			var m:MethodMaterial = <MethodMaterial> returnedArrayMaterial[1];
			materials.push(m);
			materialNames.push(m.name);
			materials_parsed++;
		}

		var mesh:Mesh;
		if(isPrefab){
			mesh = <Mesh>prefab.getNewObject();
		}
		else{
			mesh = new Mesh(geom, null);
		}
		mesh.transform.matrix3D = mtx;

		var returnedArrayParent:Array<any> = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType])

		if (returnedArrayParent[0]) {
			var objC:DisplayObjectContainer = <DisplayObjectContainer> returnedArrayParent[1];
			objC.addChild(mesh);
			parentName = objC.name;
		} else if (par_id > 0) {
			this._blocks[blockID].addError("Could not find a parent for this Mesh");
		} else {
			//add to the content property
			(<DisplayObjectContainer> this._pContent).addChild(mesh);
		}

		if (materials.length >= 1 && mesh.subMeshes.length == 1) {
			mesh.material = materials[0];
		} else if (materials.length > 1) {
			var i:number;

			// Assign each sub-mesh in the mesh a material from the list. If more sub-meshes
			// than materials, repeat the last material for all remaining sub-meshes.
			for (i = 0; i < mesh.subMeshes.length; i++) {
				mesh.subMeshes[i].material = materials[Math.min(materials.length - 1, i)];
			}
		}
		if ((this._version[0] == 2) && (this._version[1] == 1)) {
			var props:AWDProperties = this.parseProperties({1:this._matrixNrType, 2:this._matrixNrType, 3:this._matrixNrType, 4:AWDParser.UINT8, 5:AWDParser.BOOL});
			mesh.pivot = new Vector3D(<number>props.get(1, 0), <number>props.get(2, 0), <number> props.get(3, 0));
			mesh.castsShadows = props.get(5, true);
		} else {
			this.parseProperties(null);
		}

		mesh.extra = this.parseUserAttributes();

		this._pFinalizeAsset(<IAsset> mesh, name);
		this._blocks[blockID].data = mesh;

		if (this._debug) {
			if (isPrefab) {
				console.log("Parsed a Mesh for Prefab: Name = '" + name + "' | Parent-Name = " + parentName + "| Prefab-Name = " + prefab.name + " | SubMeshes = " + mesh.subMeshes.length + " | Mat-Names = " + materialNames.toString());
			} else {
				console.log("Parsed a Mesh for Geometry: Name = '" + name + "' | Parent-Name = " + parentName + "| Geometry-Name = " + geom.name + " | SubMeshes = " + mesh.subMeshes.length + " | Mat-Names = " + materialNames.toString());
			}
		}
	}


	//Block ID 31
	private parseSkyboxInstance(blockID:number):void
	{
		var name:string = this.parseVarStr();
		var cubeTexAddr:number = this._newBlockBytes.readUnsignedInt();

		var returnedArrayCubeTex:Array<any> = this.getAssetByID(cubeTexAddr, [SingleCubeTexture.assetType]);
		if ((!returnedArrayCubeTex[0]) && (cubeTexAddr != 0))
			this._blocks[blockID].addError("Could not find the Cubetexture (ID = " + cubeTexAddr + " ) for this Skybox");
		var asset:Skybox = new Skybox(<SingleCubeTexture> returnedArrayCubeTex[1]);

		this.parseProperties(null)
		asset.extra = this.parseUserAttributes();
		this._pFinalizeAsset(asset, name);
		this._blocks[blockID].data = asset;
		if (this._debug)
			console.log("Parsed a Skybox: Name = '" + name + "' | CubeTexture-Name = " + (<SingleCubeTexture> returnedArrayCubeTex[1]).name);

	}

	//Block ID = 41
	private parseLight(blockID:number):void
	{
		var light:LightBase;
		var newShadowMapper:ShadowMapperBase;

		var par_id:number = this._newBlockBytes.readUnsignedInt();
		var mtx:Matrix3D = this.parseMatrix3D();
		var name:string = this.parseVarStr();
		var lightType:number = this._newBlockBytes.readUnsignedByte();
		var props:AWDProperties = this.parseProperties({1:this._propsNrType, 2:this._propsNrType, 3:AWDParser.COLOR, 4:this._propsNrType, 5:this._propsNrType, 6:AWDParser.BOOL, 7:AWDParser.COLOR, 8:this._propsNrType, 9:AWDParser.UINT8, 10:AWDParser.UINT8, 11:this._propsNrType, 12:AWDParser.UINT16, 21:this._matrixNrType, 22:this._matrixNrType, 23:this._matrixNrType});
		var shadowMapperType:number = props.get(9, 0);
		var parentName:string = "Root (TopLevel)";
		var lightTypes:Array<string> = ["Unsupported LightType", "PointLight", "DirectionalLight"];
		var shadowMapperTypes:Array<string> = ["No ShadowMapper", "DirectionalShadowMapper", "NearDirectionalShadowMapper", "CascadeShadowMapper", "CubeMapShadowMapper"];

		if (lightType == 1) {
			light = new PointLight();

			(<PointLight> light).radius = props.get(1, 90000);
			(<PointLight> light).fallOff = props.get(2, 100000);

			if (shadowMapperType > 0) {
				if (shadowMapperType == 4) {
					newShadowMapper = new CubeMapShadowMapper();
				}
			}

			light.transform.matrix3D = mtx;

		}

		if (lightType == 2) {

			light = new DirectionalLight(props.get(21, 0), props.get(22, -1), props.get(23, 1));

			if (shadowMapperType > 0) {
				if (shadowMapperType == 1) {
					newShadowMapper = new DirectionalShadowMapper();
				}

				//if (shadowMapperType == 2)
				//  newShadowMapper = new NearDirectionalShadowMapper(props.get(11, 0.5));
				//if (shadowMapperType == 3)
				//   newShadowMapper = new CascadeShadowMapper(props.get(12, 3));

			}

		}
		light.color = props.get(3, 0xffffff);
		light.specular = props.get(4, 1.0);
		light.diffuse = props.get(5, 1.0);
		light.ambientColor = props.get(7, 0xffffff);
		light.ambient = props.get(8, 0.0);

		// if a shadowMapper has been created, adjust the depthMapSize if needed, assign to light and set castShadows to true
		if (newShadowMapper) {
			if (newShadowMapper instanceof CubeMapShadowMapper) {
				if (props.get(10, 1) != 1) {
					newShadowMapper.depthMapSize = this._depthSizeDic[props.get(10, 1)];
				}
			} else {
				if (props.get(10, 2) != 2) {
					newShadowMapper.depthMapSize = this._depthSizeDic[props.get(10, 2)];
				}
			}

			light.shadowMapper = newShadowMapper;
			light.castsShadows = true;
		}

		if (par_id != 0) {

			var returnedArrayParent:Array<any> = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType])

			if (returnedArrayParent[0]) {
				(<DisplayObjectContainer> returnedArrayParent[1]).addChild(light);
				parentName = (<DisplayObjectContainer> returnedArrayParent[1]).name;
			} else {
				this._blocks[blockID].addError("Could not find a parent for this Light");
			}
		} else {
			//add to the content property
			(<DisplayObjectContainer> this._pContent).addChild(light);
		}

		this.parseUserAttributes();

		this._pFinalizeAsset(< IAsset> light, name);

		this._blocks[blockID].data = light;

		if (this._debug)
			console.log("Parsed a Light: Name = '" + name + "' | Type = " + lightTypes[lightType] + " | Parent-Name = " + parentName + " | ShadowMapper-Type = " + shadowMapperTypes[shadowMapperType]);

	}

	//Block ID = 43
	private parseCamera(blockID:number):void
	{

		var par_id:number = this._newBlockBytes.readUnsignedInt();
		var mtx:Matrix3D = this.parseMatrix3D();
		var name:string = this.parseVarStr();
		var parentName:string = "Root (TopLevel)";
		var projection:ProjectionBase;

		this._newBlockBytes.readUnsignedByte(); //set as active camera
		this._newBlockBytes.readShort(); //lengthof lenses - not used yet

		var projectiontype:number = this._newBlockBytes.readShort();
		var props:AWDProperties = this.parseProperties({101:this._propsNrType, 102:this._propsNrType, 103:this._propsNrType, 104:this._propsNrType});

		switch (projectiontype) {
			case 5001:
				projection = new PerspectiveProjection(props.get(101, 60));
				break;
			case 5002:
				projection = new OrthographicProjection(props.get(101, 500));
				break;
			case 5003:
				projection = new OrthographicOffCenterProjection(props.get(101, -400), props.get(102, 400), props.get(103, -300), props.get(104, 300));
				break;
			default:
				console.log("unsupportedLenstype");
				return;
		}

		var camera:Camera = new Camera(projection);
		camera.transform.matrix3D = mtx;

		var returnedArrayParent:Array<any> = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType])

		if (returnedArrayParent[0]) {

			var objC:DisplayObjectContainer = <DisplayObjectContainer> returnedArrayParent[1];
			objC.addChild(camera);

			parentName = objC.name;

		} else if (par_id > 0) {
			this._blocks[blockID].addError("Could not find a parent for this Camera");
		} else {
			//add to the content property
			(<DisplayObjectContainer> this._pContent).addChild(camera);
		}

		camera.name = name;
		props = this.parseProperties({1:this._matrixNrType, 2:this._matrixNrType, 3:this._matrixNrType, 4:AWDParser.UINT8});
		camera.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
		camera.extra = this.parseUserAttributes();

		this._pFinalizeAsset(camera, name);

		this._blocks[blockID].data = camera

		if (this._debug) {
			console.log("Parsed a Camera: Name = '" + name + "' | Projectiontype = " + projection + " | Parent-Name = " + parentName);
		}

	}

	//Block ID = 51
	private parseLightPicker(blockID:number):void
	{
		var name:string = this.parseVarStr();
		var numLights:number = this._newBlockBytes.readUnsignedShort();
		var lightsArray:Array<LightBase> = new Array<LightBase>();
		var k:number = 0;
		var lightID:number = 0;

		var returnedArrayLight:Array<any>;
		var lightsArrayNames:Array<string> = new Array<string>();

		for (k = 0; k < numLights; k++) {
			lightID = this._newBlockBytes.readUnsignedInt();
			returnedArrayLight = this.getAssetByID(lightID, [LightBase.assetType])

			if (returnedArrayLight[0]) {
				lightsArray.push(<LightBase> returnedArrayLight[1]);
				lightsArrayNames.push(( <LightBase> returnedArrayLight[1]).name);

			} else {
				this._blocks[blockID].addError("Could not find a Light Nr " + k + " (ID = " + lightID + " ) for this LightPicker");
			}
		}

		if (lightsArray.length == 0) {
			this._blocks[blockID].addError("Could not create this LightPicker, cause no Light was found.");
			this.parseUserAttributes();
			return; //return without any more parsing for this block
		}

		var lightPick:LightPickerBase = new StaticLightPicker(lightsArray);
		lightPick.name = name;

		this.parseUserAttributes();
		this._pFinalizeAsset(<IAsset> lightPick, name);

		this._blocks[blockID].data = lightPick
		if (this._debug) {
			console.log("Parsed a StaticLightPicker: Name = '" + name + "' | Texture-Name = " + lightsArrayNames.toString());
		}
	}

	//Block ID = 81
	private parseMaterial(blockID:number):void
	{
		// TODO: not used
		////blockLength = block.len;
		var name:string;
		var type:number;
		var props:AWDProperties;
		var mat:MethodMaterial;
		var attributes:Object;
		var finalize:boolean;
		var num_methods:number;
		var methods_parsed:number;
		var returnedArray:Array<any>;

		name = this.parseVarStr();
		type = this._newBlockBytes.readUnsignedByte();
		num_methods = this._newBlockBytes.readUnsignedByte();

		// Read material numerical properties
		// (1=color, 2=bitmap url, 10=alpha, 11=alpha_blending, 12=alpha_threshold, 13=repeat)
		props = this.parseProperties({ 1:AWDParser.INT32, 2:AWDParser.BADDR, 10:this._propsNrType, 11:AWDParser.BOOL, 12:this._propsNrType, 13:AWDParser.BOOL});

		methods_parsed = 0;
		while (methods_parsed < num_methods) {
			var method_type:number;

			method_type = this._newBlockBytes.readUnsignedShort();
			this.parseProperties(null);
			this.parseUserAttributes();
			methods_parsed += 1;
		}
		var debugString:string = "";
		attributes = this.parseUserAttributes();
		if (type === 1) { // Color material
			debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
			var color:number;
			color = props.get(1, 0xffffff);
			if (this.materialMode < 2) {
				mat = new MethodMaterial(color, props.get(10, 1.0));
			} else {
				mat = new MethodMaterial(color);
				mat.mode = MethodMaterialMode.MULTI_PASS;
			}
		} else if (type === 2) {
			var tex_addr:number = props.get(2, 0);

			returnedArray = this.getAssetByID(tex_addr, [Single2DTexture.assetType]);

			if ((!returnedArray[0]) && (tex_addr > 0))
				this._blocks[blockID].addError("Could not find the DiffsueTexture (ID = " + tex_addr + " ) for this Material");

			mat = new MethodMaterial(<TextureBase> returnedArray[1]);

			if (this.materialMode < 2) {
				mat.alphaBlending = props.get(11, false);
				mat.alpha = props.get(10, 1.0);
				debugString += "Parsed a MethodMaterial(SinglePass): Name = '" + name + "' | Texture-Name = " + mat.name;
			} else {
				mat.mode = MethodMaterialMode.MULTI_PASS;
				debugString += "Parsed a MethodMaterial(MultiPass): Name = '" + name + "' | Texture-Name = " + mat.name;
			}
		}

		mat.extra = attributes;
		mat.alphaThreshold = props.get(12, 0.0);
		mat.repeat = props.get(13, false);
		this._pFinalizeAsset(<IAsset> mat, name);
		this._blocks[blockID].data = mat;

		if (this._debug) {
			console.log(debugString);

		}
	}

	// Block ID = 81 AWD2.1
	private parseMaterial_v1(blockID:number):void
	{
		var mat:MethodMaterial;
		var normalTexture:TextureBase;
		var specTexture:TextureBase;
		var returnedArray:Array<any>;

		var name:string = this.parseVarStr();
		var type:number = this._newBlockBytes.readUnsignedByte();
		var num_methods:number = this._newBlockBytes.readUnsignedByte();
		var props:AWDProperties = this.parseProperties({1:AWDParser.UINT32, 2:AWDParser.BADDR, 3:AWDParser.BADDR, 4:AWDParser.UINT8, 5:AWDParser.BOOL, 6:AWDParser.BOOL, 7:AWDParser.BOOL, 8:AWDParser.BOOL, 9:AWDParser.UINT8, 10:this._propsNrType, 11:AWDParser.BOOL, 12:this._propsNrType, 13:AWDParser.BOOL, 15:this._propsNrType, 16:AWDParser.UINT32, 17:AWDParser.BADDR, 18:this._propsNrType, 19:this._propsNrType, 20:AWDParser.UINT32, 21:AWDParser.BADDR, 22:AWDParser.BADDR});
		var spezialType:number = props.get(4, 0);
		var debugString:string = "Parsed Material ";

		if (spezialType >= 2) {//this is no supported material
			this._blocks[blockID].addError("Material-spezialType '" + spezialType + "' is not supported, can only be 0:singlePass, 1:MultiPass !");
			return;
		}

		if (type <= 2) {// Color material
			if (this.materialMode == 1)
				spezialType = 0;
			else if (this.materialMode == 2)
				spezialType = 1;

			if (spezialType < 2) {//this is SinglePass or MultiPass

				if (type == 1) {// Color material
					var color:number = props.get(1, 0xcccccc);//TODO temporarily swapped so that diffuse color goes to ambient

					if (spezialType == 1) {//	MultiPassMaterial
						mat = new MethodMaterial(color);
						mat.mode = MethodMaterialMode.MULTI_PASS;
						debugString += "Parsed a ColorMaterial(MultiPass): Name = '" + name + "' | ";

					} else { //	SinglePassMaterial
						mat = new MethodMaterial(color, props.get(10, 1.0));
						mat.alphaBlending = props.get(11, false);
						debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
					}

				} else if (type == 2) {// texture material
					var tex_addr:number = props.get(2, 0);//TODO temporarily swapped so that diffuse texture goes to ambient
					returnedArray = this.getAssetByID(tex_addr, [Single2DTexture.assetType]);

					if ((!returnedArray[0]) && (tex_addr > 0))
						this._blocks[blockID].addError("Could not find the AmbientTexture (ID = " + tex_addr + " ) for this MethodMaterial");

					var texture:Single2DTexture = returnedArray[1];

					mat = new MethodMaterial(texture);

					if (spezialType == 1) {// MultiPassMaterial
						mat.mode = MethodMaterialMode.MULTI_PASS;

						debugString += "Parsed a MethodMaterial(MultiPass): Name = '" + name + "' | Texture-Name = " + texture.name;
					} else {//	SinglePassMaterial
						mat.alpha = props.get(10, 1.0);
						mat.alphaBlending = props.get(11, false);

						debugString += "Parsed a MethodMaterial(SinglePass): Name = '" + name + "' | Texture-Name = " + texture.name;
					}
				}

				var diffuseTexture:Single2DTexture;
				var diffuseTex_addr:number = props.get(17, 0);

				returnedArray = this.getAssetByID(diffuseTex_addr, [Single2DTexture.assetType]);

				if ((!returnedArray[0]) && (diffuseTex_addr != 0)) {
					this._blocks[blockID].addError("Could not find the DiffuseTexture (ID = " + diffuseTex_addr + " ) for this MethodMaterial");
				}

				if (returnedArray[0])
					diffuseTexture = returnedArray[1];

				if (diffuseTexture) {
					mat.diffuseTexture = diffuseTexture;
					debugString += " | DiffuseTexture-Name = " + diffuseTexture.name;
				}

				var normalTex_addr:number = props.get(3, 0);

				returnedArray = this.getAssetByID(normalTex_addr, [Single2DTexture.assetType]);

				if ((!returnedArray[0]) && (normalTex_addr != 0)) {
					this._blocks[blockID].addError("Could not find the NormalTexture (ID = " + normalTex_addr + " ) for this MethodMaterial");
				}

				if (returnedArray[0]) {
					normalTexture = returnedArray[1];
					debugString += " | NormalTexture-Name = " + normalTexture.name;
				}

				var specTex_addr:number = props.get(21, 0);
				returnedArray = this.getAssetByID(specTex_addr, [Single2DTexture.assetType]);

				if ((!returnedArray[0]) && (specTex_addr != 0)) {
					this._blocks[blockID].addError("Could not find the SpecularTexture (ID = " + specTex_addr + " ) for this MethodMaterial");
				}
				if (returnedArray[0]) {
					specTexture = returnedArray[1];
					debugString += " | SpecularTexture-Name = " + specTexture.name;
				}

				var lightPickerAddr:number = props.get(22, 0);
				returnedArray = this.getAssetByID(lightPickerAddr, [LightPickerBase.assetType])

				if ((!returnedArray[0]) && (lightPickerAddr)) {
					this._blocks[blockID].addError("Could not find the LightPicker (ID = " + lightPickerAddr + " ) for this MethodMaterial");
				} else {
					mat.lightPicker = <LightPickerBase> returnedArray[1];
					//debugString+=" | Lightpicker-Name = "+LightPickerBase(returnedArray[1]).name;
				}

				mat.smooth = props.get(5, true);
				mat.mipmap = props.get(6, true);
				mat.bothSides = props.get(7, false);
				mat.alphaPremultiplied = props.get(8, false);
				mat.blendMode = this.blendModeDic[props.get(9, 0)];
				mat.repeat = props.get(13, false);

				if (normalTexture)
					mat.normalMap = normalTexture;

				if (specTexture)
					mat.specularMap = specTexture;

				mat.alphaThreshold = props.get(12, 0.0);
				mat.ambient = props.get(15, 1.0);
				mat.diffuseColor = props.get(16, 0xffffff);
				mat.specular = props.get(18, 1.0);
				mat.gloss = props.get(19, 50);
				mat.specularColor = props.get(20, 0xffffff);

				var methods_parsed:number = 0;
				var targetID:number;

				while (methods_parsed < num_methods) {
					var method_type:number;
					method_type = this._newBlockBytes.readUnsignedShort();

					props = this.parseProperties({
						1: AWDParser.BADDR,
						2: AWDParser.BADDR,
						3: AWDParser.BADDR,
						101: this._propsNrType,
						102: this._propsNrType,
						103: this._propsNrType,
						201: AWDParser.UINT32,
						202: AWDParser.UINT32,
						301: AWDParser.UINT16,
						302: AWDParser.UINT16,
						401: AWDParser.UINT8,
						402: AWDParser.UINT8,
						601: AWDParser.COLOR,
						602: AWDParser.COLOR,
						701: AWDParser.BOOL,
						702: AWDParser.BOOL,
						801: AWDParser.MTX4x4
					});

					switch (method_type) {
						case 999: //wrapper-Methods that will load a previous parsed EffektMethod returned

							targetID = props.get(1, 0);
							returnedArray = this.getAssetByID(targetID, [EffectMethodBase.assetType]);

							if (!returnedArray[0]) {
								this._blocks[blockID].addError("Could not find the EffectMethod (ID = " + targetID + " ) for this Material");
							} else {
								mat.addEffectMethod(returnedArray[1]);

								debugString += " | EffectMethod-Name = " + (<EffectMethodBase> returnedArray[1]).name;
							}

							break;

						case 998: //wrapper-Methods that will load a previous parsed ShadowMapMethod

							targetID = props.get(1, 0);
							returnedArray = this.getAssetByID(targetID, [ShadowMapMethodBase.assetType]);

							if (!returnedArray[0]) {
								this._blocks[blockID].addError("Could not find the ShadowMethod (ID = " + targetID + " ) for this Material");
							} else {
								mat.shadowMethod = returnedArray[1];
								debugString += " | ShadowMethod-Name = " + (<ShadowMethodBase> returnedArray[1]).name;
							}

							break;

						case 1: //EnvMapAmbientMethod
							targetID = props.get(1, 0);
							returnedArray = this.getAssetByID(targetID, [SingleCubeTexture.assetType]);
							if (!returnedArray[0])
								this._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this EnvMapAmbientMethodMaterial");
							mat.ambientMethod = new AmbientEnvMapMethod();
							mat.texture = returnedArray[1];
							debugString += " | AmbientEnvMapMethod | EnvMap-Name =" + (<SingleCubeTexture> returnedArray[1]).name;
							break;

						case 51: //DepthDiffuseMethod
							mat.diffuseMethod = new DiffuseDepthMethod();
							debugString += " | DiffuseDepthMethod";
							break;
						case 52: //GradientDiffuseMethod
							targetID = props.get(1, 0);
							returnedArray = this.getAssetByID(targetID, [Single2DTexture.assetType]);
							if (!returnedArray[0])
								this._blocks[blockID].addError("Could not find the GradientDiffuseTexture (ID = " + targetID + " ) for this GradientDiffuseMethod");
							mat.diffuseMethod = new DiffuseGradientMethod(returnedArray[1]);
							debugString += " | DiffuseGradientMethod | GradientDiffuseTexture-Name =" + (<TextureBase> returnedArray[1]).name;
							break;
						case 53: //WrapDiffuseMethod
							mat.diffuseMethod = new DiffuseWrapMethod(props.get(101, 5));
							debugString += " | DiffuseWrapMethod";
							break;
						case 54: //LightMapDiffuseMethod
							targetID = props.get(1, 0);
							returnedArray = this.getAssetByID(targetID, [Single2DTexture.assetType]);
							if (!returnedArray[0])
								this._blocks[blockID].addError("Could not find the LightMap (ID = " + targetID + " ) for this LightMapDiffuseMethod");
							mat.diffuseMethod = new DiffuseLightMapMethod(returnedArray[1], this.blendModeDic[props.get(401, 10)], false, mat.diffuseMethod);
							debugString += " | DiffuseLightMapMethod | LightMapTexture-Name =" + (<TextureBase> returnedArray[1]).name;
							break;
						case 55: //CelDiffuseMethod
							mat.diffuseMethod = new DiffuseCelMethod(props.get(401, 3), mat.diffuseMethod);
							(<DiffuseCelMethod> mat.diffuseMethod).smoothness = props.get(101, 0.1);
							debugString += " | DiffuseCelMethod";
							break;
						case 56: //SubSurfaceScatteringMethod
							//							mat.diffuseMethod = new DiffuseSubSurfaceMethod(); //depthMapSize and depthMapOffset ?
							//							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).scattering = props.get(101, 0.2);
							//							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).translucency = props.get(102, 1);
							//							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).scatterColor = props.get(601, 0xffffff);
							//							debugString += " | DiffuseSubSurfaceMethod";
							break;

						case 101: //AnisotropicSpecularMethod
							mat.specularMethod = new SpecularAnisotropicMethod();
							debugString += " | SpecularAnisotropicMethod";
							break;
						case 102: //SpecularPhongMethod
							mat.specularMethod = new SpecularPhongMethod();
							debugString += " | SpecularPhongMethod";
							break;
						case 103: //CellSpecularMethod
							mat.specularMethod = new SpecularCelMethod(props.get(101, 0.5), mat.specularMethod);
							(<SpecularCelMethod> mat.specularMethod).smoothness = props.get(102, 0.1);
							debugString += " | SpecularCelMethod";
							break;
						case 104: //SpecularFresnelMethod
							mat.specularMethod = new SpecularFresnelMethod(props.get(701, true), mat.specularMethod);
							(<SpecularFresnelMethod> mat.specularMethod).fresnelPower = props.get(101, 5);
							(<SpecularFresnelMethod> mat.specularMethod).normalReflectance = props.get(102, 0.1);
							debugString += " | SpecularFresnelMethod";
							break;
						case 151://HeightMapNormalMethod - thios is not implemented for now, but might appear later
							break;
						case 152: //SimpleWaterNormalMethod
							targetID = props.get(1, 0);
							returnedArray = this.getAssetByID(targetID, [Single2DTexture.assetType]);
							if (!returnedArray[0])
								this._blocks[blockID].addError("Could not find the SecoundNormalMap (ID = " + targetID + " ) for this SimpleWaterNormalMethod");
							if (!mat.normalMap)
								this._blocks[blockID].addError("Could not find a normal Map on this Material to use with this SimpleWaterNormalMethod");

							mat.normalMap = returnedArray[1];
							mat.normalMethod = new NormalSimpleWaterMethod(mat.normalMap, returnedArray[1]);
							debugString += " | NormalSimpleWaterMethod | Second-NormalTexture-Name = " + (<TextureBase> returnedArray[1]).name;
							break;
					}
					this.parseUserAttributes();
					methods_parsed += 1;
				}
			}
		}
		// todo: we should not need this anymore (if using texture-atlas)
		else if ((type>=3)&&(type<=7)){
			// if this is a basic material, we create it, finalize it, assign it to block-cache and return and return.
			var color:number = props.get(1, 0xcccccc);
			debugString+=color;
		
			var diffuseTexture:Single2DTexture;
			var diffuseTex_addr:number = props.get(2, 0);
		
			returnedArray = this.getAssetByID(diffuseTex_addr, [Single2DTexture.assetType]);
		
			if ((!returnedArray[0]) && (diffuseTex_addr != 0)) {
				this._blocks[blockID].addError("Could not find the DiffuseTexture (ID = " + diffuseTex_addr + " ) for this MethodMaterial");
				diffuseTexture = DefaultMaterialManager.getDefaultTexture();
			}
		
			if (returnedArray[0])
				diffuseTexture = returnedArray[1];
			var basic_mat:BasicMaterial = new BasicMaterial(diffuseTexture);
			//debugString+= " alpha = "+props.get(10, 1.0)+" ";
			debugString+= " texture = "+diffuseTex_addr+" ";
			basic_mat.bothSides = true;
			basic_mat.preserveAlpha = true;
			basic_mat.alphaBlending = true;
			basic_mat.extra = this.parseUserAttributes();
			this._pFinalizeAsset(<IAsset> basic_mat, name);
			this._blocks[blockID].data = basic_mat;
			if (this._debug)
				console.log(debugString);
			return;
		
		}
		mat.extra = this.parseUserAttributes();
		this._pFinalizeAsset(<IAsset> mat, name);

		this._blocks[blockID].data = mat;
		if (this._debug) {
			console.log(debugString);
		}
	}

	//Block ID = 82
	private parseTexture(blockID:number):void
	{

		var asset:TextureBase;

		this._blocks[blockID].name = this.parseVarStr();

		var type:number = this._newBlockBytes.readUnsignedByte();
		var data_len:number;

		this._texture_users[this._cur_block_id.toString()] = [];

		// External
		if (type == 0) {
			data_len = this._newBlockBytes.readUnsignedInt();
			var url:string;
			url = this._newBlockBytes.readUTFBytes(data_len);
			this._pAddDependency(this._cur_block_id.toString(), new URLRequest(url), false, null, true);

		} else {
			data_len = this._newBlockBytes.readUnsignedInt();

			var data:ByteArray;
			data = new ByteArray();
			this._newBlockBytes.readBytes(data, 0, data_len);

			//
			// AWD3Parserutils - Fix for FireFox Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=715075 .
			//
			// Converting data to image here instead of parser - fix FireFox bug where image width / height is 0 when created from data
			// This gives the browser time to initialise image width / height.

			this._pAddDependency(this._cur_block_id.toString(), null, false, ParserUtils.byteArrayToImage(data), true);
			//this._pAddDependency(this._cur_block_id.toString(), null, false, data, true);

		}

		// Ignore for now
		this.parseProperties(null);
		this._blocks[blockID].extras = this.parseUserAttributes();
		this._blocks[blockID].data = asset;

		if (this._debug) {
			var textureStylesNames:Array<string> = ["external", "embed"]
			console.log("Start parsing a " + textureStylesNames[type] + " Bitmap for Texture");
		}
		this._pPauseAndRetrieveDependencies();

	}

	//Block ID = 83
	private parseCubeTexture(blockID:number):void
	{
		//blockLength = block.len;
		var data_len:number;
		var asset:SingleCubeTexture;
		var i:number;

		this._cubeBitmaps = new Array<BitmapImage2D>();
		this._texture_users[ this._cur_block_id.toString() ] = [];

		var type:number = this._newBlockBytes.readUnsignedByte();

		this._blocks[blockID].name = this.parseVarStr();

		for (i = 0; i < 6; i++) {
			this._texture_users[this._cur_block_id.toString()] = [];
			this._cubeBitmaps.push(null);

			// External
			if (type == 0) {
				data_len = this._newBlockBytes.readUnsignedInt();
				var url:string;
				url = this._newBlockBytes.readUTFBytes(data_len);
				this._pAddDependency(this._cur_block_id.toString(), new URLRequest(url), false, null, true, i);
			} else {

				data_len = this._newBlockBytes.readUnsignedInt();
				var data:ByteArray;
				data = new ByteArray();

				this._newBlockBytes.readBytes(data, 0, data_len);

				this._pAddDependency(this._cur_block_id.toString(), null, false, ParserUtils.byteArrayToImage(data), true, i);
			}
		}

		// Ignore for now
		this.parseProperties(null);
		this._blocks[blockID].extras = this.parseUserAttributes();
		this._pPauseAndRetrieveDependencies();
		this._blocks[blockID].data = asset;

		if (this._debug) {
			var textureStylesNames:Array<string> = ["external", "embed"]
			console.log("Start parsing 6 " + textureStylesNames[type] + " Bitmaps for CubeTexture");
		}
	}

	//Block ID = 91
	private parseSharedMethodBlock(blockID:number):void
	{
		var asset:EffectMethodBase;

		this._blocks[blockID].name = this.parseVarStr();
		asset = this.parseSharedMethodList(blockID);
		this.parseUserAttributes();
		this._blocks[blockID].data = asset;
		this._pFinalizeAsset(<IAsset> asset, this._blocks[blockID].name);
		this._blocks[blockID].data = asset;

		if (this._debug) {
			console.log("Parsed a EffectMethod: Name = " + asset.name + " Type = " + asset);
		}
	}

	//Block ID = 92
	private parseShadowMethodBlock(blockID:number):void
	{
		var type:number;
		var data_len:number;
		var asset:ShadowMethodBase;
		var shadowLightID:number;
		this._blocks[blockID].name = this.parseVarStr();

		shadowLightID = this._newBlockBytes.readUnsignedInt();
		var returnedArray:Array<any> = this.getAssetByID(shadowLightID, [LightBase.assetType]);

		if (!returnedArray[0]) {
			this._blocks[blockID].addError("Could not find the TargetLight (ID = " + shadowLightID + " ) for this ShadowMethod - ShadowMethod not created");
			return;
		}

		asset = this.parseShadowMethodList(<LightBase> returnedArray[1], blockID);

		if (!asset)
			return;

		this.parseUserAttributes(); // Ignore for now
		this._pFinalizeAsset(<IAsset> asset, this._blocks[blockID].name);
		this._blocks[blockID].data = asset;

		if (this._debug) {
			console.log("Parsed a ShadowMapMethodMethod: Name = " + asset.name + " | Type = " + asset + " | Light-Name = ", ( <LightBase> returnedArray[1] ).name);
		}
	}


	//Block ID = 253
	private parseCommand(blockID:number):void
	{
		var hasBlocks:boolean = ( this._newBlockBytes.readUnsignedByte() == 1 );
		var par_id:number = this._newBlockBytes.readUnsignedInt();
		var mtx:Matrix3D = this.parseMatrix3D();
		var name:string = this.parseVarStr();

		var parentObject:DisplayObjectContainer;
		var targetObject:DisplayObjectContainer;

		var returnedArray:Array<any> = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType]);

		if (returnedArray[0]) {
			parentObject = <DisplayObjectContainer> returnedArray[1];
		}

		var numCommands:number = this._newBlockBytes.readShort();
		var typeCommand:number = this._newBlockBytes.readShort();

		var props:AWDProperties = this.parseProperties({1:AWDParser.BADDR});

		switch (typeCommand) {
			case 1:

				var targetID:number = props.get(1, 0);
				//var returnedArrayTarget:Array<any> = this.getAssetByID(targetID, [LightBase.assetType, TextureProjector.assetType]); //for no only light is requested!!!!
				var returnedArrayTarget:Array<any> = this.getAssetByID(targetID, [LightBase.assetType]); //for no only light is requested!!!!

				if ((!returnedArrayTarget[0]) && (targetID != 0)) {
					this._blocks[blockID].addError("Could not find the light (ID = " + targetID + " ( for this CommandBock!");
					return;
				}

				targetObject = returnedArrayTarget[1];

				if (parentObject) {
					parentObject.addChild(targetObject);
				}

				targetObject.transform.matrix3D = mtx;

				break;
		}

		if (targetObject) {
			props = this.parseProperties({1:this._matrixNrType, 2:this._matrixNrType, 3:this._matrixNrType, 4:AWDParser.UINT8});

			targetObject.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
			targetObject.extra = this.parseUserAttributes();

		}
		this._blocks[blockID].data = targetObject

		if (this._debug) {
			console.log("Parsed a CommandBlock: Name = '" + name);
		}

	}

	//blockID 255
	private parseMetaData(blockID:number):void
	{
		var props:AWDProperties = this.parseProperties({1:AWDParser.UINT32, 2:AWDParser.AWDSTRING, 3:AWDParser.AWDSTRING, 4:AWDParser.AWDSTRING, 5:AWDParser.AWDSTRING});

		if (this._debug) {
			console.log("Parsed a MetaDataBlock: TimeStamp         = " + props.get(1, 0));
			console.log("                        EncoderName       = " + props.get(2, "unknown"));
			console.log("                        EncoderVersion    = " + props.get(3, "unknown"));
			console.log("                        GeneratorName     = " + props.get(4, "unknown"));
			console.log("                        GeneratorVersion  = " + props.get(5, "unknown"));
		}
	}

	//blockID 254
	private parseNameSpace(blockID:number):void
	{
		var id:number = this._newBlockBytes.readUnsignedByte();
		var nameSpaceString:string = this.parseVarStr();
		if (this._debug)
			console.log("Parsed a NameSpaceBlock: ID = " + id + " | String = " + nameSpaceString);
	}

	//--Parser UTILS---------------------------------------------------------------------------

	// this functions reads and creates a ShadowMethodMethod
	private parseShadowMethodList(light:LightBase, blockID:number):ShadowMethodBase
	{

		var methodType:number = this._newBlockBytes.readUnsignedShort();
		var shadowMethod:ShadowMethodBase;
		var props:AWDProperties = this.parseProperties({1:AWDParser.BADDR, 2:AWDParser.BADDR, 3:AWDParser.BADDR, 101:this._propsNrType, 102:this._propsNrType, 103:this._propsNrType, 201:AWDParser.UINT32, 202:AWDParser.UINT32, 301:AWDParser.UINT16, 302:AWDParser.UINT16, 401:AWDParser.UINT8, 402:AWDParser.UINT8, 601:AWDParser.COLOR, 602:AWDParser.COLOR, 701:AWDParser.BOOL, 702:AWDParser.BOOL, 801:AWDParser.MTX4x4});

		var targetID:number;
		var returnedArray:Array<any>
		switch (methodType) {
			//				case 1001: //CascadeShadowMapMethod
			//					targetID = props.get(1, 0);
			//					returnedArray = getAssetByID(targetID, [ShadowMapMethodBase.assetType]);
			//					if (!returnedArray[0]) {
			//						_blocks[blockID].addError("Could not find the ShadowBaseMethod (ID = " + targetID + " ) for this CascadeShadowMapMethod - ShadowMethod not created");
			//						return shadowMethod;
			//					}
			//					shadowMethod = new CascadeShadowMapMethod(returnedArray[1]);
			//					break;
			case 1002: //ShadowNearMethod
				targetID = props.get(1, 0);
				returnedArray = this.getAssetByID(targetID, [ShadowMapMethodBase.assetType]);
				if (!returnedArray[0]) {
					this._blocks[blockID].addError("Could not find the ShadowBaseMethod (ID = " + targetID + " ) for this ShadowNearMethod - ShadowMethod not created");
					return shadowMethod;
				}
				shadowMethod = new ShadowNearMethod(<ShadowMethodBase> returnedArray[1]);
				break;
			case 1101: //ShadowFilteredMethod

				shadowMethod = new ShadowFilteredMethod(<DirectionalLight> light);
				(<ShadowFilteredMethod> shadowMethod).alpha = props.get(101, 1);
				(<ShadowFilteredMethod> shadowMethod).epsilon = props.get(102, 0.002);
				break;

			case 1102: //ShadowDitheredMethod


				shadowMethod = new ShadowDitheredMethod(<DirectionalLight> light, <number> props.get(201, 5));
				(<ShadowDitheredMethod> shadowMethod).alpha = props.get(101, 1);
				(<ShadowDitheredMethod> shadowMethod).epsilon = props.get(102, 0.002);
				(<ShadowDitheredMethod> shadowMethod).range = props.get(103, 1);

				break;
			case 1103: //ShadowSoftMethod

				shadowMethod = new ShadowSoftMethod(<DirectionalLight> light, <number> props.get(201, 5));
				(<ShadowSoftMethod> shadowMethod).alpha = props.get(101, 1);
				(<ShadowSoftMethod> shadowMethod).epsilon = props.get(102, 0.002);
				(<ShadowSoftMethod> shadowMethod).range = props.get(103, 1);

				break;
			case 1104: //ShadowHardMethod
				shadowMethod = new ShadowHardMethod(light);
				(<ShadowHardMethod> shadowMethod).alpha = props.get(101, 1);
				(<ShadowHardMethod> shadowMethod).epsilon = props.get(102, 0.002);
				break;

		}
		this.parseUserAttributes();
		return shadowMethod;
	}

	//Block ID 101
	private parseSkeleton(blockID:number /*uint*/):void
	{
		var name:string = this.parseVarStr();
		var num_joints:number /*uint*/ = this._newBlockBytes.readUnsignedShort();
		var skeleton:Skeleton = new Skeleton();
		this.parseProperties(null); // Discard properties for now

		var joints_parsed:number /*uint*/ = 0;
		while (joints_parsed < num_joints) {
			var joint:SkeletonJoint;
			var ibp:Matrix3D;
			// Ignore joint id
			this._newBlockBytes.readUnsignedShort();
			joint = new SkeletonJoint();
			joint.parentIndex = this._newBlockBytes.readUnsignedShort() - 1; // 0=null in AWD
			joint.name = this.parseVarStr();

			ibp = this.parseMatrix3D();
			joint.inverseBindPose = ibp.rawData;
			// Ignore joint props/attributes for now
			this.parseProperties(null);
			this.parseUserAttributes();
			skeleton.joints.push(joint);
			joints_parsed++;
		}

		// Discard attributes for now
		this.parseUserAttributes();
		this._pFinalizeAsset(skeleton, name);
		this._blocks[blockID].data = skeleton;
		if (this._debug)
			console.log("Parsed a Skeleton: Name = " + skeleton.name + " | Number of Joints = " + joints_parsed);
	}

	//Block ID = 102
	private parseSkeletonPose(blockID:number /*uint*/):void
	{
		var name:string = this.parseVarStr();
		var num_joints:number /*uint*/ = this._newBlockBytes.readUnsignedShort();
		this.parseProperties(null); // Ignore properties for now

		var pose:SkeletonPose = new SkeletonPose();

		var joints_parsed:number /*uint*/ = 0;
		while (joints_parsed < num_joints) {
			var joint_pose:JointPose;
			var has_transform:number /*uint*/;
			joint_pose = new JointPose();
			has_transform = this._newBlockBytes.readUnsignedByte();
			if (has_transform == 1) {
				var mtx_data:Array<number> = this.parseMatrix43RawData();

				var mtx:Matrix3D = new Matrix3D(mtx_data);
				joint_pose.orientation.fromMatrix(mtx);
				joint_pose.translation.copyFrom(mtx.position);

				pose.jointPoses[joints_parsed] = joint_pose;
			}
			joints_parsed++;
		}
		// Skip attributes for now
		this.parseUserAttributes();
		this._pFinalizeAsset(pose, name);
		this._blocks[blockID].data = pose;
		if (this._debug)
			console.log("Parsed a SkeletonPose: Name = " + pose.name + " | Number of Joints = " + joints_parsed);
	}

	//blockID 103
	private parseSkeletonAnimation(blockID:number /*uint*/):void
	{
		var frame_dur:number;
		var pose_addr:number /*uint*/;
		var name:string = this.parseVarStr();
		var clip:SkeletonClipNode = new SkeletonClipNode();
		var num_frames:number /*uint*/ = this._newBlockBytes.readUnsignedShort();
		this.parseProperties(null); // Ignore properties for now

		var frames_parsed:number /*uint*/ = 0;
		var returnedArray:Array<any>;
		while (frames_parsed < num_frames) {
			pose_addr = this._newBlockBytes.readUnsignedInt();
			frame_dur = this._newBlockBytes.readUnsignedShort();
			returnedArray = this.getAssetByID(pose_addr, [SkeletonPose.assetType]);
			if (!returnedArray[0])
				this._blocks[blockID].addError("Could not find the SkeletonPose Frame # " + frames_parsed + " (ID = " + pose_addr + " ) for this SkeletonClipNode");
			else
				clip.addFrame(<SkeletonPose> this._blocks[pose_addr].data, frame_dur);
			frames_parsed++;
		}
		if (clip.frames.length == 0) {
			this._blocks[blockID].addError("Could not this SkeletonClipNode, because no Frames where set.");
			return;
		}
		// Ignore attributes for now
		this.parseUserAttributes();
		this._pFinalizeAsset(clip, name);
		this._blocks[blockID].data = clip;
		if (this._debug)
			console.log("Parsed a SkeletonClipNode: Name = " + clip.name + " | Number of Frames = " + clip.frames.length);
	}

	//Block ID = 111 /  Block ID = 112
	private parseMeshPoseAnimation(blockID:number /*uint*/, poseOnly:boolean = false):void
	{
		var num_frames:number /*uint*/ = 1;
		var num_submeshes:number /*uint*/;
		var frames_parsed:number /*uint*/;
		var subMeshParsed:number /*uint*/;
		var frame_dur:number;
		var x:number;
		var y:number;
		var z:number;
		var str_len:number;
		var str_end:number;
		var geometry:Geometry;
		var subGeom:TriangleSubGeometry;
		var idx:number /*int*/ = 0;
		var clip:VertexClipNode = new VertexClipNode();
		var indices:Short3Attributes;
		var verts:Array<number>;
		var num_Streams:number /*int*/ = 0;
		var streamsParsed:number /*int*/ = 0;
		var streamtypes:Array<number> /*int*/ = new Array<number>() /*int*/;
		var props:AWDProperties;
		var thisGeo:Geometry;
		var name:string = this.parseVarStr();
		var geoAdress:number /*int*/ = this._newBlockBytes.readUnsignedInt();
		var returnedArray:Array<any> = this.getAssetByID(geoAdress, [Geometry.assetType]);
		if (!returnedArray[0]) {
			this._blocks[blockID].addError("Could not find the target-Geometry-Object " + geoAdress + " ) for this VertexClipNode");
			return;
		}
		var uvs:Array<Float32Array> = this.getUVForVertexAnimation(geoAdress);
		if (!poseOnly)
			num_frames = this._newBlockBytes.readUnsignedShort();

		num_submeshes = this._newBlockBytes.readUnsignedShort();
		num_Streams = this._newBlockBytes.readUnsignedShort();
		streamsParsed = 0;
		while (streamsParsed < num_Streams) {
			streamtypes.push(this._newBlockBytes.readUnsignedShort());
			streamsParsed++;
		}
		props = this.parseProperties({1:AWDParser.BOOL, 2:AWDParser.BOOL});

		clip.looping = props.get(1, true);
		clip.stitchFinalFrame = props.get(2, false);

		frames_parsed = 0;
		while (frames_parsed < num_frames) {
			frame_dur = this._newBlockBytes.readUnsignedShort();
			geometry = new Geometry();
			subMeshParsed = 0;
			while (subMeshParsed < num_submeshes) {
				streamsParsed = 0;
				str_len = this._newBlockBytes.readUnsignedInt();
				str_end = this._newBlockBytes.position + str_len;
				while (streamsParsed < num_Streams) {
					if (streamtypes[streamsParsed] == 1) {
						indices = (<Geometry> returnedArray[1]).subGeometries[subMeshParsed].indices;
						verts = new Array<number>();
						idx = 0;
						while (this._newBlockBytes.position < str_end) {
							x = this.readNumber(this._accuracyGeo)
							y = this.readNumber(this._accuracyGeo)
							z = this.readNumber(this._accuracyGeo)
							verts[idx++] = x;
							verts[idx++] = y;
							verts[idx++] = z;
						}
						subGeom = new TriangleSubGeometry(new AttributesBuffer());
						subGeom.setIndices(indices);
						subGeom.setPositions(verts);
						subGeom.setUVs(uvs[subMeshParsed]);
						subGeom.setNormals(null);
						subGeom.setTangents(null);
						subGeom.autoDeriveNormals = false;
						subGeom.autoDeriveTangents = false;
						subMeshParsed++;
						geometry.addSubGeometry(subGeom)
					} else
						this._newBlockBytes.position = str_end;
					streamsParsed++;
				}
			}
			clip.addFrame(geometry, frame_dur);
			frames_parsed++;
		}
		this.parseUserAttributes();
		this._pFinalizeAsset(clip, name);

		this._blocks[blockID].data = clip;
		if (this._debug)
			console.log("Parsed a VertexClipNode: Name = " + clip.name + " | Target-Geometry-Name = " + (<Geometry> returnedArray[1]).name + " | Number of Frames = " + clip.frames.length);
	}

	//BlockID 113
	private parseVertexAnimationSet(blockID:number /*uint*/):void
	{
		var poseBlockAdress:number /*int*/
		var outputString:string = "";
		var name:string = this.parseVarStr();
		var num_frames:number /*uint*/ = this._newBlockBytes.readUnsignedShort();
		var props:AWDProperties = this.parseProperties({1:AWDParser.UINT16});
		var frames_parsed:number /*uint*/ = 0;
		var skeletonFrames:Array<SkeletonClipNode> = new Array<SkeletonClipNode>();
		var vertexFrames:Array<VertexClipNode> = new Array<VertexClipNode>();
		while (frames_parsed < num_frames) {
			poseBlockAdress = this._newBlockBytes.readUnsignedInt();
			var returnedArray:Array<any> = this.getAssetByID(poseBlockAdress, [AnimationNodeBase.assetType]);
			if (!returnedArray[0])
				this._blocks[blockID].addError("Could not find the AnimationClipNode Nr " + frames_parsed + " ( " + poseBlockAdress + " ) for this AnimationSet");
			else {
				if (returnedArray[1] instanceof VertexClipNode)
					vertexFrames.push(returnedArray[1])
				if (returnedArray[1] instanceof SkeletonClipNode)
					skeletonFrames.push(returnedArray[1])
			}
			frames_parsed++;
		}
		if ((vertexFrames.length == 0) && (skeletonFrames.length == 0)) {
			this._blocks[blockID].addError("Could not create this AnimationSet, because it contains no animations");
			return;
		}
		this.parseUserAttributes();
		if (vertexFrames.length > 0) {
			var newVertexAnimationSet:VertexAnimationSet = new VertexAnimationSet();
			for (var i:number /*int*/ = 0; i < vertexFrames.length; i++)
				newVertexAnimationSet.addAnimation(vertexFrames[i]);
			this._pFinalizeAsset(newVertexAnimationSet, name);
			this._blocks[blockID].data = newVertexAnimationSet;
			if (this._debug)
				console.log("Parsed a VertexAnimationSet: Name = " + name + " | Animations = " + newVertexAnimationSet.animations.length + " | Animation-Names = " + newVertexAnimationSet.animationNames.toString());

		} else if (skeletonFrames.length > 0) {
			returnedArray = this.getAssetByID(poseBlockAdress, [AnimationNodeBase.assetType]);
			var newSkeletonAnimationSet:SkeletonAnimationSet = new SkeletonAnimationSet(props.get(1, 4)); //props.get(1,4));
			for (var i:number /*int*/ = 0; i < skeletonFrames.length; i++)
				newSkeletonAnimationSet.addAnimation(skeletonFrames[i]);
			this._pFinalizeAsset(newSkeletonAnimationSet, name);
			this._blocks[blockID].data = newSkeletonAnimationSet;
			if (this._debug)
				console.log("Parsed a SkeletonAnimationSet: Name = " + name + " | Animations = " + newSkeletonAnimationSet.animations.length + " | Animation-Names = " + newSkeletonAnimationSet.animationNames.toString());

		}
	}

	//BlockID 122
	private parseAnimatorSet(blockID:number /*uint*/):void
	{
		var targetMesh:Mesh;
		var animSetBlockAdress:number /*int*/
		var targetAnimationSet:AnimationSetBase;
		var outputString:string = "";
		var name:string = this.parseVarStr();
		var type:number /*uint*/ = this._newBlockBytes.readUnsignedShort();

		var props:AWDProperties = this.parseProperties({1:AWDParser.BADDR});

		animSetBlockAdress = this._newBlockBytes.readUnsignedInt();
		var targetMeshLength:number /*uint*/ = this._newBlockBytes.readUnsignedShort();
		var meshAdresses:Array<number> /*uint*/ = new Array<number>() /*uint*/;
		for (var i:number /*int*/ = 0; i < targetMeshLength; i++)
			meshAdresses.push(this._newBlockBytes.readUnsignedInt());

		var activeState:number /*uint*/ = this._newBlockBytes.readUnsignedShort();
		var autoplay:boolean = ( this._newBlockBytes.readUnsignedByte() == 1 );
		this.parseUserAttributes();
		this.parseUserAttributes();

		var returnedArray:Array<any>;
		var targetMeshes:Array<Mesh> = new Array<Mesh>();

		for (i = 0; i < meshAdresses.length; i++) {
			returnedArray = this.getAssetByID(meshAdresses[i], [Mesh.assetType]);
			if (returnedArray[0])
				targetMeshes.push(<Mesh> returnedArray[1]);
		}
		returnedArray = this.getAssetByID(animSetBlockAdress, [AnimationSetBase.assetType]);
		if (!returnedArray[0]) {
			this._blocks[blockID].addError("Could not find the AnimationSet ( " + animSetBlockAdress + " ) for this Animator");;
			return
		}
		targetAnimationSet = <AnimationSetBase> returnedArray[1];
		var thisAnimator:AnimatorBase;
		if (type == 1) {

			returnedArray = this.getAssetByID(props.get(1, 0), [Skeleton.assetType]);
			if (!returnedArray[0]) {
				this._blocks[blockID].addError("Could not find the Skeleton ( " + props.get(1, 0) + " ) for this Animator");
				return
			}
			thisAnimator = new SkeletonAnimator(<SkeletonAnimationSet> targetAnimationSet, <Skeleton> returnedArray[1]);

		} else if (type == 2)
			thisAnimator = new VertexAnimator(<VertexAnimationSet> targetAnimationSet);

		this._pFinalizeAsset(thisAnimator, name);
		this._blocks[blockID].data = thisAnimator;
		for (i = 0; i < targetMeshes.length; i++) {
			if (type == 1)
				targetMeshes[i].animator = (<SkeletonAnimator> thisAnimator);
			if (type == 2)
				targetMeshes[i].animator = (<VertexAnimator> thisAnimator);

		}
		if (this._debug)
			console.log("Parsed a Animator: Name = " + name);
	}

	// this functions reads and creates a EffectMethod
	private parseSharedMethodList(blockID:number):EffectMethodBase
	{

		var methodType:number = this._newBlockBytes.readUnsignedShort();
		var effectMethodReturn:EffectMethodBase;

		var props:AWDProperties = this.parseProperties({1:AWDParser.BADDR, 2:AWDParser.BADDR, 3:AWDParser.BADDR, 101:this._propsNrType, 102:this._propsNrType, 103:this._propsNrType, 104:this._propsNrType, 105:this._propsNrType, 106:this._propsNrType, 107:this._propsNrType, 201:AWDParser.UINT32, 202:AWDParser.UINT32, 301:AWDParser.UINT16, 302:AWDParser.UINT16, 401:AWDParser.UINT8, 402:AWDParser.UINT8, 601:AWDParser.COLOR, 602:AWDParser.COLOR, 701:AWDParser.BOOL, 702:AWDParser.BOOL});
		var targetID:number;
		var returnedArray:Array<any>;

		switch (methodType) {
			// Effect Methods
			case 401: //ColorMatrix
				effectMethodReturn = new EffectColorMatrixMethod(props.get(101, new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)));
				break;
			case 402: //ColorTransform
				effectMethodReturn = new EffectColorTransformMethod();
				var offCol:number /*uint*/ = props.get(601, 0x00000000);
				(<EffectColorTransformMethod> effectMethodReturn).colorTransform = new ColorTransform(props.get(102, 1), props.get(103, 1), props.get(104, 1), props.get(101, 1), ((offCol >> 16) & 0xFF), ((offCol >> 8) & 0xFF), (offCol & 0xFF), ((offCol >> 24) & 0xFF));
				break;
			case 403: //EnvMap

				targetID = props.get(1, 0);
				console.log('ENV MAP', targetID);


				returnedArray = this.getAssetByID(targetID, [ SingleCubeTexture.assetType ]);
				if (!returnedArray[0])
					this._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this EnvMapMethod");
				effectMethodReturn = new EffectEnvMapMethod(<SingleCubeTexture> returnedArray[1], <number> props.get(101, 1));
				targetID = props.get(2, 0);
				if (targetID > 0) {
					returnedArray = this.getAssetByID(targetID, [Single2DTexture.assetType]);
					if (!returnedArray[0])
						this._blocks[blockID].addError("Could not find the Mask-texture (ID = " + targetID + " ) for this EnvMapMethod");

					// Todo: test mask with EnvMapMethod
					//(<EnvMapMethod> effectMethodReturn).mask = <TextureBase> returnedArray[1];
				}
				break;
			case 404: //LightMapMethod
				targetID = props.get(1, 0);
				returnedArray = this.getAssetByID(targetID, [Single2DTexture.assetType]);
				if (!returnedArray[0])
					this._blocks[blockID].addError("Could not find the LightMap (ID = " + targetID + " ) for this LightMapMethod");
				effectMethodReturn = new EffectLightMapMethod(returnedArray[1], this.blendModeDic[props.get(401, 10)]); //usesecondaryUV not set
				break;
			//				case 405: //ProjectiveTextureMethod
			//					targetID = props.get(1, 0);
			//					returnedArray = getAssetByID(targetID, [TextureProjector.assetType]);
			//					if (!returnedArray[0])
			//						_blocks[blockID].addError("Could not find the TextureProjector (ID = " + targetID + " ) for this ProjectiveTextureMethod");
			//					effectMethodReturn = new ProjectiveTextureMethod(returnedArray[1], blendModeDic[props.get(401, 10)]);
			//					break;
			case 406: //RimLightMethod
				effectMethodReturn = new EffectRimLightMethod(props.get(601, 0xffffff), props.get(101, 0.4), props.get(101, 2)); //blendMode
				break;
			case 407: //AlphaMaskMethod
				targetID = props.get(1, 0);
				returnedArray = this.getAssetByID(targetID, [Single2DTexture.assetType]);
				if (!returnedArray[0])
					this._blocks[blockID].addError("Could not find the Alpha-texture (ID = " + targetID + " ) for this AlphaMaskMethod");
				effectMethodReturn = new EffectAlphaMaskMethod(returnedArray[1], props.get(701, false));
				break;
			//				case 408: //RefractionEnvMapMethod
			//					targetID = props.get(1, 0);
			//					returnedArray = getAssetByID(targetID, [TextureBase.assetType], "CubeTexture");
			//					if (!returnedArray[0])
			//						_blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this RefractionEnvMapMethod");
			//					effectMethodReturn = new RefractionEnvMapMethod(returnedArray[1], props.get(101, 0.1), props.get(102, 0.01), props.get(103, 0.01), props.get(104, 0.01));
			//					RefractionEnvMapMethod(effectMethodReturn).alpha = props.get(104, 1);
			//					break;
			//				case 409: //OutlineMethod
			//					effectMethodReturn = new OutlineMethod(props.get(601, 0x00000000), props.get(101, 1), props.get(701, true), props.get(702, false));
			//					break;
			case 410: //FresnelEnvMapMethod
				targetID = props.get(1, 0);
				returnedArray = this.getAssetByID(targetID, [SingleCubeTexture.assetType]);
				if (!returnedArray[0])
					this._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this FresnelEnvMapMethod");
				effectMethodReturn = new EffectFresnelEnvMapMethod(returnedArray[1], props.get(101, 1));
				break;
			case 411: //FogMethod
				effectMethodReturn = new EffectFogMethod(props.get(101, 0), props.get(102, 1000), props.get(601, 0x808080));
				break;

		}
		this.parseUserAttributes();
		return effectMethodReturn;

	}

	private parseUserAttributes():Object
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
					case AWDParser.AWDSTRING:
						attr_val = this._newBlockBytes.readUTFBytes(attr_len);
						break;
					case AWDParser.INT8:
						attr_val = this._newBlockBytes.readByte();
						break;
					case AWDParser.INT16:
						attr_val = this._newBlockBytes.readShort();
						break;
					case AWDParser.INT32:
						attr_val = this._newBlockBytes.readInt();
						break;
					case AWDParser.BOOL:
					case AWDParser.UINT8:
						attr_val = this._newBlockBytes.readUnsignedByte();
						break;
					case AWDParser.UINT16:
						attr_val = this._newBlockBytes.readUnsignedShort();
						break;
					case AWDParser.UINT32:
					case AWDParser.BADDR:
						attr_val = this._newBlockBytes.readUnsignedInt();
						break;
					case AWDParser.FLOAT32:
						attr_val = this._newBlockBytes.readFloat();
						break;
					case AWDParser.FLOAT64:
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

	private parseProperties(expected:Object):AWDProperties
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

			case AWDParser.BOOL:
			case AWDParser.INT8:
				elem_len = 1;
				read_func = this._newBlockBytes.readByte;
				break;

			case AWDParser.INT16:
				elem_len = 2;
				read_func = this._newBlockBytes.readShort;
				break;

			case AWDParser.INT32:
				elem_len = 4;
				read_func = this._newBlockBytes.readInt;
				break;

			case AWDParser.UINT8:
				elem_len = 1;
				read_func = this._newBlockBytes.readUnsignedByte;
				break;

			case AWDParser.UINT16:
				elem_len = 2;
				read_func = this._newBlockBytes.readUnsignedShort;
				break;

			case AWDParser.UINT32:
			case AWDParser.COLOR:
			case AWDParser.BADDR:
				elem_len = 4;
				read_func = this._newBlockBytes.readUnsignedInt;
				break;

			case AWDParser.FLOAT32:
				elem_len = 4;
				read_func = this._newBlockBytes.readFloat;
				break;

			case AWDParser.FLOAT64:
				elem_len = 8;
				read_func = this._newBlockBytes.readDouble;
				break;

			case AWDParser.AWDSTRING:
				return this._newBlockBytes.readUTFBytes(len);

			case AWDParser.VECTOR2x1:
			case AWDParser.VECTOR3x1:
			case AWDParser.VECTOR4x1:
			case AWDParser.MTX3x2:
			case AWDParser.MTX3x3:
			case AWDParser.MTX4x3:
			case AWDParser.MTX4x4:
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

	private parseHeader():void
	{
		var flags:number;
		var body_len:number;

		this._byteData.position = 3; // Skip magic string and parse version

		this._version[0] = this._byteData.readUnsignedByte();
		this._version[1] = this._byteData.readUnsignedByte();

		flags = this._byteData.readUnsignedShort(); // Parse bit flags

		this._streaming = BitFlags.test(flags, BitFlags.FLAG1);

		if ((this._version[0] == 2) && (this._version[1] == 1)) {
			this._accuracyMatrix = BitFlags.test(flags, BitFlags.FLAG2);
			this._accuracyGeo = BitFlags.test(flags, BitFlags.FLAG3);
			this._accuracyProps = BitFlags.test(flags, BitFlags.FLAG4);
		}

		// if we set _accuracyOnBlocks, the precision-values are read from each block-header.

		// set storagePrecision types
		this._geoNrType = AWDParser.FLOAT32;

		if (this._accuracyGeo) {
			this._geoNrType = AWDParser.FLOAT64;
		}

		this._matrixNrType = AWDParser.FLOAT32;

		if (this._accuracyMatrix) {
			this._matrixNrType = AWDParser.FLOAT64;
		}

		this._propsNrType = AWDParser.FLOAT32;

		if (this._accuracyProps) {
			this._propsNrType = AWDParser.FLOAT64;
		}

		this._compression = this._byteData.readUnsignedByte(); // compression

		if (this._debug) {
			console.log("Import AWDFile of version = " + this._version[0] + " - " + this._version[1]);
			console.log("Global Settings = Compression = " + this._compression + " | Streaming = " + this._streaming + " | Matrix-Precision = " + this._accuracyMatrix + " | Geometry-Precision = " + this._accuracyGeo + " | Properties-Precision = " + this._accuracyProps);
		}

		// Check file integrity
		body_len = this._byteData.readUnsignedInt();
		if (!this._streaming && body_len != this._byteData.getBytesAvailable()) {
			this._pDieWithError('AWD2 body length does not match header integrity field');
		}

	}
	// Helper - functions
	private getUVForVertexAnimation(meshID:number /*uint*/):Array<Float32Array>
	{
		if (this._blocks[meshID].data instanceof Mesh)
			meshID = this._blocks[meshID].geoID;
		if (this._blocks[meshID].uvsForVertexAnimation)
			return this._blocks[meshID].uvsForVertexAnimation;
		var geometry:Geometry = (<Geometry> this._blocks[meshID].data);
		var geoCnt:number /*int*/ = 0;
		var sub_geom:TriangleSubGeometry;
		this._blocks[meshID].uvsForVertexAnimation = new Array<Float32Array>();
		while (geoCnt < geometry.subGeometries.length) {
			sub_geom = <TriangleSubGeometry> geometry.subGeometries[geoCnt];
			this._blocks[meshID].uvsForVertexAnimation.push(sub_geom.uvs.get(sub_geom.numVertices));
			geoCnt++;
		}
		return this._blocks[meshID].uvsForVertexAnimation;
	}

	private parseVarStr():string
	{

		var len:number = this._newBlockBytes.readUnsignedShort();
		return this._newBlockBytes.readUTFBytes(len);
	}

	private getAssetByID(assetID:number, assetTypesToGet:Array<string>):Array<any>
	{
		var returnArray:Array<any> = new Array<any>();
		var typeCnt:number = 0;
		if (assetID > 0) {
			if (this._blocks[assetID]) {
				if (this._blocks[assetID].data) {
					while (typeCnt < assetTypesToGet.length) {
						//console.log("check if asset is of type = "+assetTypesToGet[typeCnt]);
						var iasset:IAsset = <IAsset> this._blocks[assetID].data;
						//console.log("asset is of type = "+iasset.assetType);
						if (iasset.assetType == assetTypesToGet[typeCnt]) {
							//if the right assetType was found
							if ((assetTypesToGet[typeCnt] == SingleCubeTexture.assetType)) {
								if (this._blocks[assetID].data instanceof SingleCubeTexture) {
									returnArray.push(true);
									returnArray.push(this._blocks[assetID].data);
									return returnArray;
								}
							}
							if ((assetTypesToGet[typeCnt] == Single2DTexture.assetType)) {
								if (this._blocks[assetID].data instanceof Single2DTexture) {
									returnArray.push(true);
									returnArray.push(this._blocks[assetID].data);
									return returnArray;
								}
							} else {
								returnArray.push(true);
								returnArray.push(this._blocks[assetID].data);
								return returnArray;

							}
						}
						//if ((assetTypesToGet[typeCnt] == Geometry.assetType) && (IAsset(_blocks[assetID].data).assetType == Mesh.assetType)) {
						if ((assetTypesToGet[typeCnt] == Geometry.assetType) && (iasset.assetType == Mesh.assetType)) {

							var mesh:Mesh = <Mesh> this._blocks[assetID].data;
							returnArray.push(true);
							returnArray.push(mesh.geometry);
							return returnArray;

						}
						typeCnt++;
					}
				}
			}
		}
		// if the has not returned anything yet, the asset is not found, or the found asset is not the right type.
		returnArray.push(false);
		returnArray.push(this.getDefaultAsset(assetTypesToGet[0]));
		return returnArray;
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

	private readNumber(precision:boolean = false):number
	{
		if (precision)
			return this._newBlockBytes.readDouble();
		return this._newBlockBytes.readFloat();

	}

	private parseMatrix3D():Matrix3D
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

	private parseMatrix43RawData():Array<number>
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

export = AWDParser;


class AWDProperties
{
	public set(key:number, value:any):void
	{
		this[ key.toString() ] = value;
	}

	public get(key:number, fallback:any):any
	{
		if (this.hasOwnProperty(key.toString())) {
			return this[key.toString()];
		} else {
			return fallback;
		}
	}
}

/**
 *
 */
class BitFlags
{
	public static FLAG1:number = 1;
	public static FLAG2:number = 2;
	public static FLAG3:number = 4;
	public static FLAG4:number = 8;
	public static FLAG5:number = 16;
	public static FLAG6:number = 32;
	public static FLAG7:number = 64;
	public static FLAG8:number = 128;
	public static FLAG9:number = 256;
	public static FLAG10:number = 512;
	public static FLAG11:number = 1024;
	public static FLAG12:number = 2048;
	public static FLAG13:number = 4096;
	public static FLAG14:number = 8192;
	public static FLAG15:number = 16384;
	public static FLAG16:number = 32768;

	public static test(flags:number, testFlag:number):boolean
	{
		return (flags & testFlag) == testFlag;
	}
}
