import { IAsset } from "@awayjs/core/lib/library/IAsset";
import { ParserBase } from "@awayjs/core/lib/parsers/ParserBase";
import { ResourceDependency } from "@awayjs/core/lib/parsers/ResourceDependency";
import { View } from "@awayjs/display/lib/View";
/**
 * AWDParser provides a parser for the AWD data type.
 */
export declare class AWDParser extends ParserBase {
    private _view;
    private _debug;
    private _debugTimers;
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
    private _streaming;
    private _texture_users;
    private _parsed_header;
    private _body;
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
    static GEO_NUMBER: number;
    static MATRIX_NUMBER: number;
    static PROPERTY_NUMBER: number;
    private blendModeDic;
    private _depthSizeDic;
    private start_timeing;
    private _time_all;
    private _time_graphics;
    private _time_graphics_bytes;
    private _time_timeline;
    private _time_fonts;
    private _time_textfields;
    private _time_sounds;
    private _time_textures;
    private _time_materials;
    private _time_sprites;
    private _num_graphics;
    private _num_timeline;
    private _num_fonts;
    private _num_textfields;
    private _num_sounds;
    private _num_textures;
    private _num_materials;
    private _num_sprites;
    /**
     * Creates a new AWD3Parserutils object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    constructor(view?: View);
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
    private updateTimers(type);
    private parseTesselatedFont(blockID);
    private static textFormatProperties;
    private parseTextFormat(blockID);
    private static textFieldProperties;
    private static textFieldTypes;
    private parseTextField(blockID, factory);
    private parseBillBoardLibraryBlock(blockID);
    private parseSpriteLibraryBlock(blockID);
    private parseAudioBlock(blockID, factory);
    private static movieClipProperties;
    private parseMovieClip(blockID, factory);
    private static graphicsProperties;
    private static elementsProperties;
    private parseGraphics(blockID);
    private static primitiveProperties;
    private static primitiveTypes;
    private parsePrimitves(blockID);
    private static containerProperties;
    private parseContainer(blockID);
    private static spriteInstanceProperties;
    private parseSpriteInstance(blockID);
    private parseSkyboxInstance(blockID);
    private static lightProperties;
    private parseLight(blockID);
    private static cameraProperties;
    private static cameraPivotProperties;
    private parseCamera(blockID);
    private parseLightPicker(blockID);
    private static materialProperties;
    private parseMaterial(blockID);
    private static material_v1Properties;
    private static method_v1Properties;
    private parseMaterial_v1(blockID);
    private parseTexture(blockID);
    private parseCubeTexture(blockID);
    private parseSharedMethodBlock(blockID);
    private parseShadowMethodBlock(blockID);
    private static commandProperties;
    private static targetProperties;
    private parseCommand(blockID);
    private static metaDataProperties;
    private parseMetaData(blockID);
    private parseNameSpace(blockID);
    private shadowMethodListProperties;
    private parseShadowMethodList(light, blockID);
    private parseSkeleton(blockID);
    private parseSkeletonPose(blockID);
    private parseSkeletonAnimation(blockID);
    private spritePoseAnimationProperties;
    private parseSpritePoseAnimation(blockID, poseOnly?);
    private static vertexAnimationSetProperties;
    private parseVertexAnimationSet(blockID);
    private static animatorSetProperties;
    private parseAnimatorSet(blockID);
    private sharedMethodListProperties;
    private parseSharedMethodList(blockID);
    private parseUserAttributes();
    private parseProperties(expected);
    private parseAttrValue(type, len);
    private parseHeader();
    private getUVForVertexAnimation(spriteID);
    private parseVarStr();
    private readNumber(precision?);
    private parseMatrix3D();
    private parseMatrix32RawData();
    private parseMatrix43RawData();
}
