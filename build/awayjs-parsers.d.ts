declare module "awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase" {
	import AWD3FileData = require("awayjs-parsers/lib/AWD3ParserUtils/AWD3FileData");
	class AWDAssetParserBase {
	    private _awd_file_data;
	    constructor();
	    awd_file_data: AWD3FileData;
	    parseFromBytes(): void;
	}
	export = AWDAssetParserBase;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParsers" {
	import AWDAssetParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	import AWD3FileData = require("awayjs-parsers/lib/AWD3ParserUtils/AWD3FileData");
	class AWDBlockParsers {
	    private _supported_asset_blocks;
	    private _all_block_parsers;
	    constructor();
	    add_block_parser(block_parser: AWDAssetParserBase, block_types: Array<number>): void;
	    init_parser(file_data: AWD3FileData): void;
	    parseAsset(type: number): boolean;
	}
	export = AWDBlockParsers;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/AnimatorAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class AnimatorAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = AnimatorAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/AudioAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class AudioAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = AudioAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/BillboardAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class BillboardAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = BillboardAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/BitmapTextureAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class BitmapTextureAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = BitmapTextureAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/BlockNameSpaceAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class BlockNameSpaceAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = BlockNameSpaceAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/CameraAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class CameraAWD3Parser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = CameraAWD3Parser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/CommandAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class CommandAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = CommandAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/CubeTextureAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class CubeTextureAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = CubeTextureAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/DisplayObjectContainerAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class DisplayObjectContainerAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = DisplayObjectContainerAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/GeometryAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class GeometryAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = GeometryAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/LightAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class LightAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = LightAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/LightPickerAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class LightPickerAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = LightPickerAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/MaterialAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class MaterialAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = MaterialAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/MeshAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class MeshAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = MeshAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/MetadataAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class MetadataAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = MetadataAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/MovieClipAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class MovieClipAWDParser extends AWDBlockParserBase {
	    private factory;
	    constructor();
	    parseFromBytes(): void;
	}
	export = MovieClipAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/PrefabAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class PrefabAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = PrefabAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/ShadowMethodAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class ShadowMethodAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	    private parseShadowMethodList(light);
	}
	export = ShadowMethodAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/SharedMethodAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class SharedMethodAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	    private parseSharedMethodList();
	}
	export = SharedMethodAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/SkeletonAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class SkeletonAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = SkeletonAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/SkeletonAnimClipAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class SkeletonAnimClipAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = SkeletonAnimClipAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/SkeletonPoseAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class SkeletonPoseAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = SkeletonPoseAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/SkyboxAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class SkyboxAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = SkyboxAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/TesselatedFontAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class TesselatedFontAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = TesselatedFontAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/TextfieldAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class TextfieldAWDParser extends AWDBlockParserBase {
	    private factory;
	    constructor();
	    parseFromBytes(): void;
	}
	export = TextfieldAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/TextformatAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class TextformatAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = TextformatAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/VertexAnimClipAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class VertexAnimClipAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = VertexAnimClipAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3BlockParsers/VertexAnimationSetAWDParser" {
	import AWDBlockParserBase = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParserBase");
	class VertexAnimationSetAWDParser extends AWDBlockParserBase {
	    constructor();
	    parseFromBytes(): void;
	}
	export = VertexAnimationSetAWDParser;
	
}

declare module "awayjs-parsers/lib/AWD3Parser" {
	import IAsset = require("awayjs-core/lib/library/IAsset");
	import ParserBase = require("awayjs-core/lib/parsers/ParserBase");
	import ResourceDependency = require("awayjs-core/lib/parsers/ResourceDependency");
	import AWDAssetParsers = require("awayjs-parsers/lib/AWD3BlockParsers/AWDBlockParsers");
	/**
	 * AWD3Utils provides a parser for the AWD data type.
	 */
	class AWD3Parser extends ParserBase {
	    private _debug;
	    private _byteData;
	    private _startedParsing;
	    private _compression;
	    private _streaming;
	    private _parsed_header;
	    private _body;
	    private _awd_data;
	    private _block_parser;
	    total_time: number;
	    geom_time: number;
	    timeline_time: number;
	    /**
	     * Creates a new AWD3Utils object.
	     * @param uri The url or id of the data or file to be parsed.
	     * @param extra The holder for extra contextual data that the parser might need.
	     */
	    constructor(block_parser?: AWDAssetParsers);
	    /**
	     * Indicates whether or not a given file extension is supported by the parser.
	     * @param extension The file extension of a potential file to be parsed.
	     * @return Whether or not the given file type is supported.
	     */
	    static supportsType(extension: string): boolean;
	    /**
	     * Tests whether a data block can be parsed by the parser.
	     * @param data The data block to potentially be parsed.
	     * @return Whether or not the given data is supported.
	     */
	    static supportsData(data: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependency(resourceDependency: ResourceDependency): void;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependencyFailure(resourceDependency: ResourceDependency): void;
	    /**
	     * Resolve a dependency name
	     *
	     * @param resourceDependency The dependency to be resolved.
	     */
	    _iResolveDependencyName(resourceDependency: ResourceDependency, asset: IAsset): string;
	    /**
	     * @inheritDoc
	     */
	    _pProceedParsing(): boolean;
	    _pStartParsing(frameLimit: number): void;
	    private dispose();
	    private parseNextBlock();
	    private parseHeader();
	}
	export = AWD3Parser;
	
}

declare module "awayjs-parsers/lib/AWD3ParserUtils/AWD3FileData" {
	import Matrix3D = require("awayjs-core/lib/geom/Matrix3D");
	import IAsset = require("awayjs-core/lib/library/IAsset");
	import ByteArray = require("awayjs-core/lib/utils/ByteArray");
	import AWDProperties = require("awayjs-parsers/lib/AWD3ParserUtils/AWDProperties");
	import AWDBlock = require("awayjs-parsers/lib/AWD3ParserUtils/AWDBlock");
	/**
	 * AWD3FileData stores the data loaded for a AWD-file. It also gives access to some helper functions.
	 */
	class AWD3FileData {
	    private _debug;
	    private _cur_block;
	    private _blocks;
	    private _newBlockBytes;
	    major_version: number;
	    minor_version: number;
	    private _accuracyOnBlocks;
	    private _accuracyMatrix;
	    private _accuracyGeo;
	    private _accuracyProps;
	    private _matrixNrType;
	    private _geoNrType;
	    private _propsNrType;
	    private blendModeDic;
	    private _depthSizeDic;
	    private _defaultCubeTexture;
	    /**
	     * Creates a new AWD3FileData object.
	     */
	    constructor();
	    getDepthSizeFromEnum(depthSize: number): number;
	    getBlendModeStringFromEnum(blendmode: number): string;
	    dispose(): void;
	    accuracyOnBlocks: boolean;
	    accuracyMatrix: boolean;
	    accuracyProps: boolean;
	    accuracyGeo: boolean;
	    debug: boolean;
	    matrixNrType: number;
	    propsNrType: number;
	    geoNrType: number;
	    newBlockBytes: ByteArray;
	    create_new_block(type: number): void;
	    cur_block: AWDBlock;
	    block_cnt(): number;
	    parseUserAttributes(): Object;
	    parseProperties(expected: Object): AWDProperties;
	    private parseAttrValue(type, len);
	    getUVForVertexAnimation(meshID: number): Array<Array<number>>;
	    parseVarStr(): string;
	    getBlockByID(assetID: number): AWDBlock;
	    getAssetByID(assetID: number): IAsset;
	    private getDefaultAsset(assetType, extraTypeInfo);
	    getDefaultCubeTexture(): IAsset;
	    readNumber(precision?: boolean): number;
	    parseMatrix3D(): Matrix3D;
	    private parseMatrix32RawData();
	    parseMatrix43RawData(): Array<number>;
	}
	export = AWD3FileData;
	
}

declare module "awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils" {
	class AWD3Utils {
	    static BLOCKSTATE_FINALIZE: number;
	    static BLOCKSTATE_INVALID: number;
	    static BLOCKSTATE_LOAD_DEPENDENICES: number;
	    static BLOCKSTATE_NO_ASSET: number;
	    static COMPRESSIONMODE_LZMA: string;
	    static UNCOMPRESSED: number;
	    static DEFLATE: number;
	    static LZMA: number;
	    static INT8: number;
	    static INT16: number;
	    static INT32: number;
	    static UINT8: number;
	    static UINT16: number;
	    static UINT32: number;
	    static FLOAT32: number;
	    static FLOAT64: number;
	    static BOOL: number;
	    static COLOR: number;
	    static BADDR: number;
	    static AWDSTRING: number;
	    static AWDBYTEARRAY: number;
	    static VECTOR2x1: number;
	    static VECTOR3x1: number;
	    static VECTOR4x1: number;
	    static MTX3x2: number;
	    static MTX3x3: number;
	    static MTX4x3: number;
	    static MTX4x4: number;
	}
	export = AWD3Utils;
	
}

declare module "awayjs-parsers/lib/AWD3ParserUtils/AWDBitFlags" {
	/**
	 *
	 */
	class AWDBitFlags {
	    static FLAG1: number;
	    static FLAG2: number;
	    static FLAG3: number;
	    static FLAG4: number;
	    static FLAG5: number;
	    static FLAG6: number;
	    static FLAG7: number;
	    static FLAG8: number;
	    static FLAG9: number;
	    static FLAG10: number;
	    static FLAG11: number;
	    static FLAG12: number;
	    static FLAG13: number;
	    static FLAG14: number;
	    static FLAG15: number;
	    static FLAG16: number;
	    static test(flags: number, testFlag: number): boolean;
	}
	export = AWDBitFlags;
	
}

declare module "awayjs-parsers/lib/AWD3ParserUtils/AWDBlock" {
	import ByteArray = require("awayjs-core/lib/utils/ByteArray");
	class AWDBlock {
	    id: number;
	    name: string;
	    type: number;
	    data: any;
	    dependencies_data: Array<ByteArray>;
	    dependencies_urls: Array<string>;
	    loaded_dependencies: Array<any>;
	    loaded_dependencies_cnt: number;
	    len: number;
	    geoID: number;
	    state: number;
	    extras: Object;
	    bytes: ByteArray;
	    errorMessages: Array<string>;
	    uvsForVertexAnimation: Array<Array<number>>;
	    constructor(this_id: number, this_type: number);
	    dispose(): void;
	    addError(errorMsg: string): void;
	}
	export = AWDBlock;
	
}

declare module "awayjs-parsers/lib/AWD3ParserUtils/AWDProperties" {
	class AWDProperties {
	    set(key: number, value: any): void;
	    get(key: number, fallback: any): any;
	}
	export = AWDProperties;
	
}

declare module "awayjs-parsers/lib/AWDParser" {
	import IAsset = require("awayjs-core/lib/library/IAsset");
	import ParserBase = require("awayjs-core/lib/parsers/ParserBase");
	import ResourceDependency = require("awayjs-core/lib/parsers/ResourceDependency");
	/**
	 * AWDParser provides a parser for the AWD data type.
	 */
	class AWDParser extends ParserBase {
	    private _debug;
	    private _byteData;
	    private _startedParsing;
	    private _cur_block_id;
	    private _blocks;
	    private _newBlockBytes;
	    private _version;
	    private _compression;
	    private _accuracyOnBlocks;
	    private _accuracyMatrix;
	    private _accuracyGeo;
	    private _accuracyProps;
	    private _matrixNrType;
	    private _geoNrType;
	    private _propsNrType;
	    private _streaming;
	    private _texture_users;
	    private _parsed_header;
	    private _body;
	    private _defaultTexture;
	    private _cubeTextures;
	    private _defaultBitmapMaterial;
	    private _defaultCubeTexture;
	    total_time: number;
	    geom_time: number;
	    timeline_time: number;
	    static COMPRESSIONMODE_LZMA: string;
	    static UNCOMPRESSED: number;
	    static DEFLATE: number;
	    static LZMA: number;
	    static INT8: number;
	    static INT16: number;
	    static INT32: number;
	    static UINT8: number;
	    static UINT16: number;
	    static UINT32: number;
	    static FLOAT32: number;
	    static FLOAT64: number;
	    static BOOL: number;
	    static COLOR: number;
	    static BADDR: number;
	    static AWDSTRING: number;
	    static AWDBYTEARRAY: number;
	    static VECTOR2x1: number;
	    static VECTOR3x1: number;
	    static VECTOR4x1: number;
	    static MTX3x2: number;
	    static MTX3x3: number;
	    static MTX4x3: number;
	    static MTX4x4: number;
	    private blendModeDic;
	    private _depthSizeDic;
	    private _allFontTables;
	    /**
	     * Creates a new AWD3Parserutils object.
	     * @param uri The url or id of the data or file to be parsed.
	     * @param extra The holder for extra contextual data that the parser might need.
	     */
	    constructor();
	    /**
	     * Indicates whether or not a given file extension is supported by the parser.
	     * @param extension The file extension of a potential file to be parsed.
	     * @return Whether or not the given file type is supported.
	     */
	    static supportsType(extension: string): boolean;
	    /**
	     * Tests whether a data block can be parsed by the parser.
	     * @param data The data block to potentially be parsed.
	     * @return Whether or not the given data is supported.
	     */
	    static supportsData(data: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependency(resourceDependency: ResourceDependency): void;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependencyFailure(resourceDependency: ResourceDependency): void;
	    /**
	     * Resolve a dependency name
	     *
	     * @param resourceDependency The dependency to be resolved.
	     */
	    _iResolveDependencyName(resourceDependency: ResourceDependency, asset: IAsset): string;
	    /**
	     * @inheritDoc
	     */
	    _pProceedParsing(): boolean;
	    _pStartParsing(frameLimit: number): void;
	    private dispose();
	    private parseNextBlock();
	    private parseTesselatedFont(blockID);
	    private parseTextFormat(blockID);
	    private paresTextField(blockID, factory);
	    private parseBillBoardLibraryBlock(blockID);
	    private parseMeshLibraryBlock(blockID);
	    private parseAudioBlock(blockID, factory);
	    private parseTimeLine(blockID, factory);
	    private parseTriangleGeometrieBlock(blockID);
	    private parsePrimitves(blockID);
	    private parseContainer(blockID);
	    private parseMeshInstance(blockID);
	    private parseSkyboxInstance(blockID);
	    private parseLight(blockID);
	    private parseCamera(blockID);
	    private parseLightPicker(blockID);
	    private parseMaterial(blockID);
	    private parseMaterial_v1(blockID);
	    private parseTexture(blockID);
	    private parseCubeTexture(blockID);
	    private parseSharedMethodBlock(blockID);
	    private parseShadowMethodBlock(blockID);
	    private parseCommand(blockID);
	    private parseMetaData(blockID);
	    private parseNameSpace(blockID);
	    private parseShadowMethodList(light, blockID);
	    private parseSkeleton(blockID);
	    private parseSkeletonPose(blockID);
	    private parseSkeletonAnimation(blockID);
	    private parseMeshPoseAnimation(blockID, poseOnly?);
	    private parseVertexAnimationSet(blockID);
	    private parseAnimatorSet(blockID);
	    private parseSharedMethodList(blockID);
	    private parseUserAttributes();
	    private parseProperties(expected);
	    private parseAttrValue(type, len);
	    private parseHeader();
	    private getUVForVertexAnimation(meshID);
	    private parseVarStr();
	    private getAssetByID(assetID, assetTypesToGet, extraTypeInfo?);
	    private getDefaultAsset(assetType, extraTypeInfo);
	    private getDefaultCubeTexture();
	    private readNumber(precision?);
	    private parseMatrix3D();
	    private parseMatrix32RawData();
	    private parseMatrix43RawData();
	}
	export = AWDParser;
	
}

declare module "awayjs-parsers/lib/MD2Parser" {
	import ParserBase = require("awayjs-core/lib/parsers/ParserBase");
	import ResourceDependency = require("awayjs-core/lib/parsers/ResourceDependency");
	/**
	 * MD2Parser provides a parser for the MD2 data type.
	 */
	class MD2Parser extends ParserBase {
	    static FPS: number;
	    private _clipNodes;
	    private _byteData;
	    private _startedParsing;
	    private _parsedHeader;
	    private _parsedUV;
	    private _parsedFaces;
	    private _parsedFrames;
	    private _ident;
	    private _version;
	    private _skinWidth;
	    private _skinHeight;
	    private _numSkins;
	    private _numVertices;
	    private _numST;
	    private _numTris;
	    private _numFrames;
	    private _offsetSkins;
	    private _offsetST;
	    private _offsetTris;
	    private _offsetFrames;
	    private _offsetEnd;
	    private _uvIndices;
	    private _indices;
	    private _vertIndices;
	    private _animationSet;
	    private _firstSubGeom;
	    private _uvs;
	    private _finalUV;
	    private _materialNames;
	    private _textureType;
	    private _ignoreTexturePath;
	    private _mesh;
	    private _geometry;
	    private materialFinal;
	    private geoCreated;
	    /**
	     * Creates a new MD2Parser object.
	     * @param textureType The extension of the texture (e.g. jpg/png/...)
	     * @param ignoreTexturePath If true, the path of the texture is ignored
	     */
	    constructor(textureType?: string, ignoreTexturePath?: boolean);
	    /**
	     * Indicates whether or not a given file extension is supported by the parser.
	     * @param extension The file extension of a potential file to be parsed.
	     * @return Whether or not the given file type is supported.
	     */
	    static supportsType(extension: string): boolean;
	    /**
	     * Tests whether a data block can be parsed by the parser.
	     * @param data The data block to potentially be parsed.
	     * @return Whether or not the given data is supported.
	     */
	    static supportsData(data: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependency(resourceDependency: ResourceDependency): void;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependencyFailure(resourceDependency: ResourceDependency): void;
	    /**
	     * @inheritDoc
	     */
	    _pProceedParsing(): boolean;
	    _pStartParsing(frameLimit: number): void;
	    /**
	     * Reads in all that MD2 Header data that is declared as private variables.
	     * I know its a lot, and it looks ugly, but only way to do it in Flash
	     */
	    private parseHeader();
	    /**
	     * Parses the file names for the materials.
	     */
	    private parseMaterialNames();
	    /**
	     * Parses the uv data for the mesh.
	     */
	    private parseUV();
	    /**
	     * Parses unique indices for the faces.
	     */
	    private parseFaces();
	    /**
	     * Adds a face index to the list if it doesn't exist yet, based on vertexIndex and uvIndex, and adds the
	     * corresponding vertex and uv data in the correct location.
	     * @param vertexIndex The original index in the vertex list.
	     * @param uvIndex The original index in the uv list.
	     */
	    private addIndex(vertexIndex, uvIndex);
	    /**
	     * Finds the final index corresponding to the original MD2's vertex and uv indices. Returns -1 if it wasn't added yet.
	     * @param vertexIndex The original index in the vertex list.
	     * @param uvIndex The original index in the uv list.
	     * @return The index of the final mesh corresponding to the original vertex and uv index. -1 if it doesn't exist yet.
	     */
	    private findIndex(vertexIndex, uvIndex);
	    /**
	     * Parses all the frame geometries.
	     */
	    private parseFrames();
	    private readFrameName();
	}
	export = MD2Parser;
	
}

declare module "awayjs-parsers/lib/MD5AnimParser" {
	import Vector3D = require("awayjs-core/lib/geom/Vector3D");
	import ParserBase = require("awayjs-core/lib/parsers/ParserBase");
	/**
	 * MD5AnimParser provides a parser for the md5anim data type, providing an animation sequence for the md5 format.
	 *
	 * todo: optimize
	 */
	class MD5AnimParser extends ParserBase {
	    private _textData;
	    private _startedParsing;
	    static VERSION_TOKEN: string;
	    static COMMAND_LINE_TOKEN: string;
	    static NUM_FRAMES_TOKEN: string;
	    static NUM_JOINTS_TOKEN: string;
	    static FRAME_RATE_TOKEN: string;
	    static NUM_ANIMATED_COMPONENTS_TOKEN: string;
	    static HIERARCHY_TOKEN: string;
	    static BOUNDS_TOKEN: string;
	    static BASE_FRAME_TOKEN: string;
	    static FRAME_TOKEN: string;
	    static COMMENT_TOKEN: string;
	    private _parseIndex;
	    private _reachedEOF;
	    private _line;
	    private _charLineIndex;
	    private _version;
	    private _frameRate;
	    private _numFrames;
	    private _numJoints;
	    private _numAnimatedComponents;
	    private _hierarchy;
	    private _bounds;
	    private _frameData;
	    private _baseFrameData;
	    private _rotationQuat;
	    private _clip;
	    /**
	     * Creates a new MD5AnimParser object.
	     * @param uri The url or id of the data or file to be parsed.
	     * @param extra The holder for extra contextual data that the parser might need.
	     */
	    constructor(additionalRotationAxis?: Vector3D, additionalRotationRadians?: number);
	    /**
	     * Indicates whether or not a given file extension is supported by the parser.
	     * @param extension The file extension of a potential file to be parsed.
	     * @return Whether or not the given file type is supported.
	     */
	    static supportsType(extension: string): boolean;
	    /**
	     * Tests whether a data block can be parsed by the parser.
	     * @param data The data block to potentially be parsed.
	     * @return Whether or not the given data is supported.
	     */
	    static supportsData(data: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    _pProceedParsing(): boolean;
	    /**
	     * Converts all key frame data to an SkinnedAnimationSequence.
	     */
	    private translateClip();
	    /**
	     * Converts a single key frame data to a SkeletonPose.
	     * @param frameData The actual frame data.
	     * @return A SkeletonPose containing the frame data's pose.
	     */
	    private translatePose(frameData);
	    /**
	     * Parses the skeleton's hierarchy data.
	     */
	    private parseHierarchy();
	    /**
	     * Parses frame bounds.
	     */
	    private parseBounds();
	    /**
	     * Parses the base frame.
	     */
	    private parseBaseFrame();
	    /**
	     * Parses a single frame.
	     */
	    private parseFrame();
	    /**
	     * Puts back the last read character into the data stream.
	     */
	    private putBack();
	    /**
	     * Gets the next token in the data stream.
	     */
	    private getNextToken();
	    /**
	     * Skips all whitespace in the data stream.
	     */
	    private skipWhiteSpace();
	    /**
	     * Skips to the next line.
	     */
	    private ignoreLine();
	    /**
	     * Retrieves the next single character in the data stream.
	     */
	    private getNextChar();
	    /**
	     * Retrieves the next integer in the data stream.
	     */
	    private getNextInt();
	    /**
	     * Retrieves the next floating point number in the data stream.
	     */
	    private getNextNumber();
	    /**
	     * Retrieves the next 3d vector in the data stream.
	     */
	    private parseVector3D();
	    /**
	     * Retrieves the next quaternion in the data stream.
	     */
	    private parseQuaternion();
	    /**
	     * Parses the command line data.
	     */
	    private parseCMD();
	    /**
	     * Retrieves the next literal string in the data stream. A literal string is a sequence of characters bounded
	     * by double quotes.
	     */
	    private parseLiteralstring();
	    /**
	     * Throws an end-of-file error when a premature end of file was encountered.
	     */
	    private sendEOFError();
	    /**
	     * Throws an error when an unexpected token was encountered.
	     * @param expected The token type that was actually expected.
	     */
	    private sendParseError(expected);
	    /**
	     * Throws an error when an unknown keyword was encountered.
	     */
	    private sendUnknownKeywordError();
	}
	export = MD5AnimParser;
	
}

declare module "awayjs-parsers/lib/MD5MeshParser" {
	import Vector3D = require("awayjs-core/lib/geom/Vector3D");
	import ParserBase = require("awayjs-core/lib/parsers/ParserBase");
	/**
	 * MD5MeshParser provides a parser for the md5mesh data type, providing the geometry of the md5 format.
	 *
	 * todo: optimize
	 */
	class MD5MeshParser extends ParserBase {
	    private _textData;
	    private _startedParsing;
	    static VERSION_TOKEN: string;
	    static COMMAND_LINE_TOKEN: string;
	    static NUM_JOINTS_TOKEN: string;
	    static NUM_MESHES_TOKEN: string;
	    static COMMENT_TOKEN: string;
	    static JOINTS_TOKEN: string;
	    static MESH_TOKEN: string;
	    static MESH_SHADER_TOKEN: string;
	    static MESH_NUM_VERTS_TOKEN: string;
	    static MESH_VERT_TOKEN: string;
	    static MESH_NUM_TRIS_TOKEN: string;
	    static MESH_TRI_TOKEN: string;
	    static MESH_NUM_WEIGHTS_TOKEN: string;
	    static MESH_WEIGHT_TOKEN: string;
	    private _parseIndex;
	    private _reachedEOF;
	    private _line;
	    private _charLineIndex;
	    private _version;
	    private _numJoints;
	    private _numMeshes;
	    private _mesh;
	    private _shaders;
	    private _maxJointCount;
	    private _meshData;
	    private _bindPoses;
	    private _geometry;
	    private _skeleton;
	    private _animationSet;
	    private _rotationQuat;
	    /**
	     * Creates a new MD5MeshParser object.
	     */
	    constructor(additionalRotationAxis?: Vector3D, additionalRotationRadians?: number);
	    /**
	     * Indicates whether or not a given file extension is supported by the parser.
	     * @param extension The file extension of a potential file to be parsed.
	     * @return Whether or not the given file type is supported.
	     */
	    static supportsType(extension: string): boolean;
	    /**
	     * Tests whether a data block can be parsed by the parser.
	     * @param data The data block to potentially be parsed.
	     * @return Whether or not the given data is supported.
	     */
	    static supportsData(data: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    _pProceedParsing(): boolean;
	    _pStartParsing(frameLimit: number): void;
	    private calculateMaxJointCount();
	    private countZeroWeightJoints(vertex, weights);
	    /**
	     * Parses the skeleton's joints.
	     */
	    private parseJoints();
	    /**
	     * Puts back the last read character into the data stream.
	     */
	    private putBack();
	    /**
	     * Parses the mesh geometry.
	     */
	    private parseMesh();
	    /**
	     * Converts the mesh data to a SkinnedSub instance.
	     * @param vertexData The mesh's vertices.
	     * @param weights The joint weights per vertex.
	     * @param indices The indices for the faces.
	     * @return A SubGeometry instance containing all geometrical data for the current mesh.
	     */
	    private translateGeom(vertexData, weights, indices);
	    /**
	     * Retrieve the next triplet of vertex indices that form a face.
	     * @param indices The index list in which to store the read data.
	     */
	    private parseTri(indices);
	    /**
	     * Reads a new joint data set for a single joint.
	     * @param weights the target list to contain the weight data.
	     */
	    private parseJoint(weights);
	    /**
	     * Reads the data for a single vertex.
	     * @param vertexData The list to contain the vertex data.
	     */
	    private parseVertex(vertexData);
	    /**
	     * Reads the next uv coordinate.
	     * @param vertexData The vertexData to contain the UV coordinates.
	     */
	    private parseUV(vertexData);
	    /**
	     * Gets the next token in the data stream.
	     */
	    private getNextToken();
	    /**
	     * Skips all whitespace in the data stream.
	     */
	    private skipWhiteSpace();
	    /**
	     * Skips to the next line.
	     */
	    private ignoreLine();
	    /**
	     * Retrieves the next single character in the data stream.
	     */
	    private getNextChar();
	    /**
	     * Retrieves the next integer in the data stream.
	     */
	    private getNextInt();
	    /**
	     * Retrieves the next floating point number in the data stream.
	     */
	    private getNextNumber();
	    /**
	     * Retrieves the next 3d vector in the data stream.
	     */
	    private parseVector3D();
	    /**
	     * Retrieves the next quaternion in the data stream.
	     */
	    private parseQuaternion();
	    /**
	     * Parses the command line data.
	     */
	    private parseCMD();
	    /**
	     * Retrieves the next literal string in the data stream. A literal string is a sequence of characters bounded
	     * by double quotes.
	     */
	    private parseLiteralstring();
	    /**
	     * Throws an end-of-file error when a premature end of file was encountered.
	     */
	    private sendEOFError();
	    /**
	     * Throws an error when an unexpected token was encountered.
	     * @param expected The token type that was actually expected.
	     */
	    private sendParseError(expected);
	    /**
	     * Throws an error when an unknown keyword was encountered.
	     */
	    private sendUnknownKeywordError();
	}
	export = MD5MeshParser;
	
}

declare module "awayjs-parsers/lib/Max3DSParser" {
	import ParserBase = require("awayjs-core/lib/parsers/ParserBase");
	import ResourceDependency = require("awayjs-core/lib/parsers/ResourceDependency");
	/**
	 * Max3DSParser provides a parser for the 3ds data type.
	 */
	class Max3DSParser extends ParserBase {
	    private _byteData;
	    private _textures;
	    private _materials;
	    private _unfinalized_objects;
	    private _cur_obj_end;
	    private _cur_obj;
	    private _cur_mat_end;
	    private _cur_mat;
	    private _useSmoothingGroups;
	    /**
	     * Creates a new <code>Max3DSParser</code> object.
	     *
	     * @param useSmoothingGroups Determines whether the parser looks for smoothing groups in the 3ds file or assumes uniform smoothing. Defaults to true.
	     */
	    constructor(useSmoothingGroups?: boolean);
	    /**
	     * Indicates whether or not a given file extension is supported by the parser.
	     * @param extension The file extension of a potential file to be parsed.
	     * @return Whether or not the given file type is supported.
	     */
	    static supportsType(extension: string): boolean;
	    /**
	     * Tests whether a data block can be parsed by the parser.
	     * @param data The data block to potentially be parsed.
	     * @return Whether or not the given data is supported.
	     */
	    static supportsData(data: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependency(resourceDependency: ResourceDependency): void;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependencyFailure(resourceDependency: ResourceDependency): void;
	    /**
	     * @inheritDoc
	     */
	    _pProceedParsing(): boolean;
	    _pStartParsing(frameLimit: number): void;
	    private parseMaterial();
	    private parseTexture(end);
	    private parseVertexList();
	    private parseFaceList();
	    private parseSmoothingGroups();
	    private parseUVList();
	    private parseFaceMaterialList();
	    private parseObjectAnimation(end);
	    private constructObject(obj, pivot?);
	    private prepareData(vertices, faces, obj);
	    private applySmoothGroups(vertices, faces);
	    private finalizeCurrentMaterial();
	    private readNulTermstring();
	    private readTransform();
	    private readColor();
	}
	export = Max3DSParser;
	
}

declare module "awayjs-parsers/lib/OBJParser" {
	import ParserBase = require("awayjs-core/lib/parsers/ParserBase");
	import ResourceDependency = require("awayjs-core/lib/parsers/ResourceDependency");
	/**
	 * OBJParser provides a parser for the OBJ data type.
	 */
	class OBJParser extends ParserBase {
	    private _textData;
	    private _startedParsing;
	    private _charIndex;
	    private _oldIndex;
	    private _stringLength;
	    private _currentObject;
	    private _currentGroup;
	    private _currentMaterialGroup;
	    private _objects;
	    private _materialIDs;
	    private _materialLoaded;
	    private _materialSpecularData;
	    private _meshes;
	    private _lastMtlID;
	    private _objectIndex;
	    private _realIndices;
	    private _vertexIndex;
	    private _vertices;
	    private _vertexNormals;
	    private _uvs;
	    private _scale;
	    private _mtlLib;
	    private _mtlLibLoaded;
	    private _activeMaterialID;
	    /**
	     * Creates a new OBJParser object.
	     * @param uri The url or id of the data or file to be parsed.
	     * @param extra The holder for extra contextual data that the parser might need.
	     */
	    constructor(scale?: number);
	    /**
	     * Scaling factor applied directly to vertices data
	     * @param value The scaling factor.
	     */
	    scale: number;
	    /**
	     * Indicates whether or not a given file extension is supported by the parser.
	     * @param extension The file extension of a potential file to be parsed.
	     * @return Whether or not the given file type is supported.
	     */
	    static supportsType(extension: string): boolean;
	    /**
	     * Tests whether a data block can be parsed by the parser.
	     * @param data The data block to potentially be parsed.
	     * @return Whether or not the given data is supported.
	     */
	    static supportsData(data: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependency(resourceDependency: ResourceDependency): void;
	    /**
	     * @inheritDoc
	     */
	    _iResolveDependencyFailure(resourceDependency: ResourceDependency): void;
	    /**
	     * @inheritDoc
	     */
	    _pProceedParsing(): boolean;
	    _pStartParsing(frameLimit: number): void;
	    /**
	     * Parses a single line in the OBJ file.
	     */
	    private parseLine(trunk);
	    /**
	     * Converts the parsed data into an Away3D scenegraph structure
	     */
	    private translate();
	    /**
	     * Translates an obj's material group to a subgeometry.
	     * @param materialGroup The material group data to convert.
	     * @param geometry The Geometry to contain the converted SubGeometry.
	     */
	    private translateMaterialGroup(materialGroup, geometry);
	    private translateVertexData(face, vertexIndex, vertices, uvs, indices, normals);
	    /**
	     * Creates a new object group.
	     * @param trunk The data block containing the object tag and its parameters
	     */
	    private createObject(trunk);
	    /**
	     * Creates a new group.
	     * @param trunk The data block containing the group tag and its parameters
	     */
	    private createGroup(trunk);
	    /**
	     * Creates a new material group.
	     * @param trunk The data block containing the material tag and its parameters
	     */
	    private createMaterialGroup(trunk);
	    /**
	     * Reads the next vertex coordinates.
	     * @param trunk The data block containing the vertex tag and its parameters
	     */
	    private parseVertex(trunk);
	    /**
	     * Reads the next uv coordinates.
	     * @param trunk The data block containing the uv tag and its parameters
	     */
	    private parseUV(trunk);
	    /**
	     * Reads the next vertex normal coordinates.
	     * @param trunk The data block containing the vertex normal tag and its parameters
	     */
	    private parseVertexNormal(trunk);
	    /**
	     * Reads the next face's indices.
	     * @param trunk The data block containing the face tag and its parameters
	     */
	    private parseFace(trunk);
	    /**
	     * This is a hack around negative face coords
	     */
	    private parseIndex(index, length);
	    private parseMtl(data);
	    private parseMapKdString(trunk);
	    private loadMtl(mtlurl);
	    private applyMaterial(lm);
	    private applyMaterials();
	}
	export = OBJParser;
	
}

declare module "awayjs-parsers/lib/Parsers" {
	/**
	 *
	 */
	class Parsers {
	    /**
	     * A list of all parsers that come bundled with Away3D. Use this to quickly
	     * enable support for all bundled parsers to the file format auto-detection
	     * feature, using any of the enableParsers() methods on loaders, e.g.:
	     *
	     * <code>AssetLibrary.enableParsers(Parsers.ALL_BUNDLED);</code>
	     *
	     * Beware however that this requires all parser classes to be included in the
	     * SWF file, which will add 50-100 kb to the file. When only a limited set of
	     * file formats are used, SWF file size can be saved by adding the parsers
	     * individually using AssetLibrary.enableParser()
	     *
	     * A third way is to specify a parser for each loaded file, thereby bypassing
	     * the auto-detection mechanisms altogether, while at the same time allowing
	     * any properties that are unique to that parser to be set for that load.
	     *
	     * The bundled parsers are:
	     *
	     * <ul>
	     * <li>AC3D (.ac)</li>
	     * <li>Away Data version 1 ASCII and version 2 binary (.awd). AWD1 BSP unsupported</li>
	     * <li>3DMax (.3ds)</li>
	     * <li>DXF (.dxf)</li>
	     * <li>Quake 2 MD2 models (.md2)</li>
	     * <li>Doom 3 MD5 animation clips (.md5anim)</li>
	     * <li>Doom 3 MD5 meshes (.md5mesh)</li>
	     * <li>Wavefront OBJ (.obj)</li>
	     * <li>Collada (.dae)</li>
	     * <li>Images (.jpg, .png)</li>
	     * </ul>
	     *
	     * @see away.library.AssetLibrary.enableParser
	     */
	    static ALL_BUNDLED: Array<Object>;
	    /**
	     * Short-hand function to enable all bundled parsers for auto-detection. In practice,
	     * this is the same as invoking enableParsers(Parsers.ALL_BUNDLED) on any of the
	     * loader classes SingleFileLoader, AssetLoader, AssetLibrary or Loader3D.
	     *
	     * See notes about file size in the documentation for the ALL_BUNDLED constant.
	     *
	     * @see away.parsers.Parsers.ALL_BUNDLED
	     */
	    static enableAllBundled(): void;
	}
	export = Parsers;
	
}

