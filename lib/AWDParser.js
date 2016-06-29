"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttributesBuffer_1 = require("@awayjs/core/lib/attributes/AttributesBuffer");
var Float3Attributes_1 = require("@awayjs/core/lib/attributes/Float3Attributes");
var Float2Attributes_1 = require("@awayjs/core/lib/attributes/Float2Attributes");
var Byte4Attributes_1 = require("@awayjs/core/lib/attributes/Byte4Attributes");
var BitmapImageCube_1 = require("@awayjs/core/lib/image/BitmapImageCube");
var BlendMode_1 = require("@awayjs/core/lib/image/BlendMode");
var Sampler2D_1 = require("@awayjs/core/lib/image/Sampler2D");
var ColorTransform_1 = require("@awayjs/core/lib/geom/ColorTransform");
var Matrix3D_1 = require("@awayjs/core/lib/geom/Matrix3D");
var Vector3D_1 = require("@awayjs/core/lib/geom/Vector3D");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("@awayjs/core/lib/net/URLRequest");
var ParserBase_1 = require("@awayjs/core/lib/parsers/ParserBase");
var ParserUtils_1 = require("@awayjs/core/lib/parsers/ParserUtils");
var PerspectiveProjection_1 = require("@awayjs/core/lib/projections/PerspectiveProjection");
var OrthographicProjection_1 = require("@awayjs/core/lib/projections/OrthographicProjection");
var OrthographicOffCenterProjection_1 = require("@awayjs/core/lib/projections/OrthographicOffCenterProjection");
var ByteArray_1 = require("@awayjs/core/lib/utils/ByteArray");
var DisplayObjectContainer_1 = require("@awayjs/display/lib/display/DisplayObjectContainer");
var Graphics_1 = require("@awayjs/display/lib/graphics/Graphics");
var TriangleElements_1 = require("@awayjs/display/lib/graphics/TriangleElements");
var DirectionalLight_1 = require("@awayjs/display/lib/display/DirectionalLight");
var PointLight_1 = require("@awayjs/display/lib/display/PointLight");
var Camera_1 = require("@awayjs/display/lib/display/Camera");
var Sprite_1 = require("@awayjs/display/lib/display/Sprite");
var Billboard_1 = require("@awayjs/display/lib/display/Billboard");
var Skybox_1 = require("@awayjs/display/lib/display/Skybox");
var DefaultMaterialManager_1 = require("@awayjs/display/lib/managers/DefaultMaterialManager");
var StaticLightPicker_1 = require("@awayjs/display/lib/materials/lightpickers/StaticLightPicker");
var CubeMapShadowMapper_1 = require("@awayjs/display/lib/materials/shadowmappers/CubeMapShadowMapper");
var DirectionalShadowMapper_1 = require("@awayjs/display/lib/materials/shadowmappers/DirectionalShadowMapper");
var PrefabBase_1 = require("@awayjs/display/lib/prefabs/PrefabBase");
var PrimitiveCapsulePrefab_1 = require("@awayjs/display/lib/prefabs/PrimitiveCapsulePrefab");
var PrimitiveConePrefab_1 = require("@awayjs/display/lib/prefabs/PrimitiveConePrefab");
var PrimitiveCubePrefab_1 = require("@awayjs/display/lib/prefabs/PrimitiveCubePrefab");
var PrimitiveCylinderPrefab_1 = require("@awayjs/display/lib/prefabs/PrimitiveCylinderPrefab");
var PrimitivePlanePrefab_1 = require("@awayjs/display/lib/prefabs/PrimitivePlanePrefab");
var PrimitiveSpherePrefab_1 = require("@awayjs/display/lib/prefabs/PrimitiveSpherePrefab");
var PrimitiveTorusPrefab_1 = require("@awayjs/display/lib/prefabs/PrimitiveTorusPrefab");
var SingleCubeTexture_1 = require("@awayjs/display/lib/textures/SingleCubeTexture");
var Single2DTexture_1 = require("@awayjs/display/lib/textures/Single2DTexture");
var VertexAnimationSet_1 = require("@awayjs/renderer/lib/animators/VertexAnimationSet");
var VertexAnimator_1 = require("@awayjs/renderer/lib/animators/VertexAnimator");
var SkeletonAnimationSet_1 = require("@awayjs/renderer/lib/animators/SkeletonAnimationSet");
var SkeletonAnimator_1 = require("@awayjs/renderer/lib/animators/SkeletonAnimator");
var JointPose_1 = require("@awayjs/renderer/lib/animators/data/JointPose");
var Skeleton_1 = require("@awayjs/renderer/lib/animators/data/Skeleton");
var SkeletonPose_1 = require("@awayjs/renderer/lib/animators/data/SkeletonPose");
var SkeletonJoint_1 = require("@awayjs/renderer/lib/animators/data/SkeletonJoint");
var SkeletonClipNode_1 = require("@awayjs/renderer/lib/animators/nodes/SkeletonClipNode");
var VertexClipNode_1 = require("@awayjs/renderer/lib/animators/nodes/VertexClipNode");
var MethodMaterialMode_1 = require("@awayjs/materials/lib/MethodMaterialMode");
var MethodMaterial_1 = require("@awayjs/materials/lib/MethodMaterial");
var AmbientEnvMapMethod_1 = require("@awayjs/materials/lib/methods/AmbientEnvMapMethod");
var DiffuseDepthMethod_1 = require("@awayjs/materials/lib/methods/DiffuseDepthMethod");
var DiffuseCelMethod_1 = require("@awayjs/materials/lib/methods/DiffuseCelMethod");
var DiffuseGradientMethod_1 = require("@awayjs/materials/lib/methods/DiffuseGradientMethod");
var DiffuseLightMapMethod_1 = require("@awayjs/materials/lib/methods/DiffuseLightMapMethod");
var DiffuseWrapMethod_1 = require("@awayjs/materials/lib/methods/DiffuseWrapMethod");
var EffectAlphaMaskMethod_1 = require("@awayjs/materials/lib/methods/EffectAlphaMaskMethod");
var EffectColorMatrixMethod_1 = require("@awayjs/materials/lib/methods/EffectColorMatrixMethod");
var EffectColorTransformMethod_1 = require("@awayjs/materials/lib/methods/EffectColorTransformMethod");
var EffectEnvMapMethod_1 = require("@awayjs/materials/lib/methods/EffectEnvMapMethod");
var EffectFogMethod_1 = require("@awayjs/materials/lib/methods/EffectFogMethod");
var EffectFresnelEnvMapMethod_1 = require("@awayjs/materials/lib/methods/EffectFresnelEnvMapMethod");
var EffectLightMapMethod_1 = require("@awayjs/materials/lib/methods/EffectLightMapMethod");
var EffectRimLightMethod_1 = require("@awayjs/materials/lib/methods/EffectRimLightMethod");
var NormalSimpleWaterMethod_1 = require("@awayjs/materials/lib/methods/NormalSimpleWaterMethod");
var ShadowDitheredMethod_1 = require("@awayjs/materials/lib/methods/ShadowDitheredMethod");
var ShadowFilteredMethod_1 = require("@awayjs/materials/lib/methods/ShadowFilteredMethod");
var SpecularFresnelMethod_1 = require("@awayjs/materials/lib/methods/SpecularFresnelMethod");
var ShadowHardMethod_1 = require("@awayjs/materials/lib/methods/ShadowHardMethod");
var SpecularAnisotropicMethod_1 = require("@awayjs/materials/lib/methods/SpecularAnisotropicMethod");
var SpecularCelMethod_1 = require("@awayjs/materials/lib/methods/SpecularCelMethod");
var SpecularPhongMethod_1 = require("@awayjs/materials/lib/methods/SpecularPhongMethod");
var ShadowNearMethod_1 = require("@awayjs/materials/lib/methods/ShadowNearMethod");
var ShadowSoftMethod_1 = require("@awayjs/materials/lib/methods/ShadowSoftMethod");
var BasicMaterial_1 = require("@awayjs/display/lib/materials/BasicMaterial");
var AS2SceneGraphFactory_1 = require("@awayjs/player/lib/factories/AS2SceneGraphFactory");
var Timeline_1 = require("@awayjs/display/lib/base/Timeline");
var AssetLibrary_1 = require("@awayjs/core/lib/library/AssetLibrary");
var Font_1 = require("@awayjs/display/lib/text/Font");
var TesselatedFontTable_1 = require("@awayjs/display/lib/text/TesselatedFontTable");
var TextFormat_1 = require("@awayjs/display/lib/text/TextFormat");
var AWDBlock_1 = require("./AWD3ParserUtils/AWDBlock");
var Rectangle_1 = require("@awayjs/core/lib/geom/Rectangle");
var Style_1 = require("@awayjs/display/lib/base/Style");
var Matrix_1 = require("@awayjs/core/lib/geom/Matrix");
var MappingMode_1 = require("@awayjs/display/lib/textures/MappingMode");
var ElementsType_1 = require("@awayjs/display/lib/graphics/ElementsType");
/**
 * AWDParser provides a parser for the AWD data type.
 */
var AWDParser = (function (_super) {
    __extends(AWDParser, _super);
    /**
     * Creates a new AWD3Parserutils object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    function AWDParser(view) {
        if (view === void 0) { view = null; }
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.ARRAY_BUFFER);
        //set to "true" to have some console.logs in the Console
        this._debug = false;
        this._debugTimers = true;
        this._startedParsing = false;
        this._texture_users = {};
        this._parsed_header = false;
        this._time_all = 0;
        this._time_graphics = 0;
        this._time_graphics_bytes = 0;
        this._time_timeline = 0;
        this._time_fonts = 0;
        this._time_textfields = 0;
        this._time_sounds = 0;
        this._time_textures = 0;
        this._time_materials = 0;
        this._time_sprites = 0;
        this._num_graphics = 0;
        this._num_timeline = 0;
        this._num_fonts = 0;
        this._num_textfields = 0;
        this._num_sounds = 0;
        this._num_textures = 0;
        this._num_materials = 0;
        this._num_sprites = 0;
        //--Parser UTILS---------------------------------------------------------------------------
        this.shadowMethodListProperties = {
            1: AWDParser.BADDR,
            2: AWDParser.BADDR,
            3: AWDParser.BADDR,
            101: AWDParser.PROPERTY_NUMBER,
            102: AWDParser.PROPERTY_NUMBER,
            103: AWDParser.PROPERTY_NUMBER,
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
            801: AWDParser.MTX4x4 };
        this.spritePoseAnimationProperties = {
            1: AWDParser.BOOL,
            2: AWDParser.BOOL };
        this.sharedMethodListProperties = {
            1: AWDParser.BADDR,
            2: AWDParser.BADDR,
            3: AWDParser.BADDR,
            101: AWDParser.PROPERTY_NUMBER,
            102: AWDParser.PROPERTY_NUMBER,
            103: AWDParser.PROPERTY_NUMBER,
            104: AWDParser.PROPERTY_NUMBER,
            105: AWDParser.PROPERTY_NUMBER,
            106: AWDParser.PROPERTY_NUMBER,
            107: AWDParser.PROPERTY_NUMBER,
            201: AWDParser.UINT32,
            202: AWDParser.UINT32,
            301: AWDParser.UINT16,
            302: AWDParser.UINT16,
            401: AWDParser.UINT8,
            402: AWDParser.UINT8,
            601: AWDParser.COLOR,
            602: AWDParser.COLOR,
            701: AWDParser.BOOL,
            702: AWDParser.BOOL };
        this._view = view;
        this._blocks = new Array();
        this._blocks[0] = new AWDBlock_1.AWDBlock(0, 255);
        this._blocks[0].data = null; // Zero address means null in AWD
        this.blendModeDic = new Array(); // used to translate ints to blendMode-strings
        this.blendModeDic.push(BlendMode_1.BlendMode.NORMAL);
        this.blendModeDic.push(BlendMode_1.BlendMode.ADD);
        this.blendModeDic.push(BlendMode_1.BlendMode.ALPHA);
        this.blendModeDic.push(BlendMode_1.BlendMode.DARKEN);
        this.blendModeDic.push(BlendMode_1.BlendMode.DIFFERENCE);
        this.blendModeDic.push(BlendMode_1.BlendMode.ERASE);
        this.blendModeDic.push(BlendMode_1.BlendMode.HARDLIGHT);
        this.blendModeDic.push(BlendMode_1.BlendMode.INVERT);
        this.blendModeDic.push(BlendMode_1.BlendMode.LAYER);
        this.blendModeDic.push(BlendMode_1.BlendMode.LIGHTEN);
        this.blendModeDic.push(BlendMode_1.BlendMode.MULTIPLY);
        this.blendModeDic.push(BlendMode_1.BlendMode.NORMAL);
        this.blendModeDic.push(BlendMode_1.BlendMode.OVERLAY);
        this.blendModeDic.push(BlendMode_1.BlendMode.SCREEN);
        this.blendModeDic.push(BlendMode_1.BlendMode.SHADER);
        this.blendModeDic.push(BlendMode_1.BlendMode.OVERLAY);
        this._depthSizeDic = new Array(); // used to translate ints to depthSize-values
        this._depthSizeDic.push(256);
        this._depthSizeDic.push(512);
        this._depthSizeDic.push(2048);
        this._depthSizeDic.push(1024);
        this._version = Array(); // will contain 2 int (major-version, minor-version) for awd-version-check
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    AWDParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "awd";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    AWDParser.supportsData = function (data) {
        return (ParserUtils_1.ParserUtils.toString(data, 3) == 'AWD');
    };
    /**
     * @inheritDoc
     */
    AWDParser.prototype._iResolveDependency = function (resourceDependency) {
        // this will be called when Dependency has finished loading.
        // the ressource dependecniy has a id that point to the awd_block waiting for it.
        //console.log("AWDParser resolve dependencies";
        if (resourceDependency.assets.length == 1) {
            var this_block = this._blocks[parseInt(resourceDependency.id)];
            if (this_block.type == 82) {
                var image_asset = resourceDependency.assets[0];
                this_block.data = image_asset; // Store finished asset
                // Finalize texture asset to dispatch texture event, which was
                // previously suppressed while the dependency was loaded.
                this._pFinalizeAsset(image_asset, this_block.name);
                if (this._debug)
                    console.log("Parsed Texture: Name = " + this_block.name);
            }
            else if (this_block.type == 44) {
                var audio_asset = resourceDependency.assets[0];
                this_block.data = audio_asset; // Store finished asset
                // Finalize texture asset to dispatch texture event, which was
                // previously suppressed while the dependency was loaded.
                //console.log("Parsing audio " + this_block.name);
                this._pFinalizeAsset(audio_asset, this_block.name);
                if (this._debug)
                    console.log("Parsed WaveAudio: Name = " + this_block.name);
            }
            else if (this_block.type == 83) {
                this_block.loaded_dependencies[resourceDependency.sub_id] = resourceDependency.assets[0];
                this_block.loaded_dependencies_cnt++;
                if (this._debug)
                    console.log("Successfully loaded Bitmap " + resourceDependency.sub_id + " / 6 for Cubetexture");
                if (this_block.loaded_dependencies_cnt == 6) {
                    var cube_image_asset = new BitmapImageCube_1.BitmapImageCube(this_block.loaded_dependencies[0].width);
                    for (var i = 0; i < 6; i++)
                        cube_image_asset.draw(i, this_block.loaded_dependencies[i]);
                    this_block.data = cube_image_asset; // Store finished asset
                    this._pFinalizeAsset(cube_image_asset, this_block.name);
                    if (this._debug)
                        console.log("Parsed CubeTexture: Name = " + this_block.name);
                }
            }
            if (this._debugTimers && !this._isParsing)
                this.updateTimers(this_block.type);
        }
    };
    /**
     * @inheritDoc
     */
    AWDParser.prototype._iResolveDependencyFailure = function (resourceDependency) {
        //not used - if a dependcy fails, the awaiting Texture or CubeTexture will never be finalized, and the default-bitmaps will be used.
        // this means, that if one Bitmap of a CubeTexture fails, the CubeTexture will have the DefaultTexture applied for all six Bitmaps.
    };
    /**
     * Resolve a dependency name
     *
     * @param resourceDependency The dependency to be resolved.
     */
    AWDParser.prototype._iResolveDependencyName = function (resourceDependency, asset) {
        var oldName = asset.name;
        if (asset) {
            var block = this._blocks[parseInt(resourceDependency.id)];
            // Reset name of texture to the one defined in the AWD file,
            // as opposed to whatever the image parser came up with.
            asset.resetAssetPath(block.name, null, true);
        }
        var newName = asset.name;
        asset.name = oldName;
        return newName;
    };
    /**
     * @inheritDoc
     */
    AWDParser.prototype._pProceedParsing = function () {
        if (!this._startedParsing) {
            this._byteData = this._pGetByteData(); //getByteData();
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
            }
            this._parsed_header = true;
        }
        if (this._body) {
            while (this._body.getBytesAvailable() > 0 && !this.parsingPaused)
                this.parseNextBlock();
            //----------------------------------------------------------------------------
            // Return complete status
            if (this._body.getBytesAvailable() == 0) {
                this.dispose();
                if (this._debugTimers)
                    console.log("Parsing total: " + (this._time_all | 0) + "ms", " | graphics: " + this._num_graphics + ", " + (this._time_graphics | 0) + "ms", " | graphics bytes: " + this._num_graphics + ", " + (this._time_graphics_bytes | 0) + "ms", " | timelines: " + this._num_timeline + ", " + (this._time_timeline | 0) + "ms", " | fonts: " + this._num_fonts + ", " + (this._time_fonts | 0) + "ms", " | sounds: " + this._num_sounds + ", " + (this._time_sounds | 0) + "ms", " | mats: " + this._num_materials + ", " + (this._time_materials | 0) + "ms", " | textures: " + this._num_textures + ", " + (this._time_textures | 0) + "ms", " | sprites: " + this._num_sprites + ", " + (this._time_sprites | 0) + "ms");
                return ParserBase_1.ParserBase.PARSING_DONE;
            }
            else {
                return ParserBase_1.ParserBase.MORE_TO_PARSE;
            }
        }
        else {
            switch (this._compression) {
                case AWDParser.DEFLATE:
                case AWDParser.LZMA:
                    if (this._debug)
                        console.log("(!) AWDParser Error: Compressed AWD formats not yet supported (!)");
                    break;
            }
            // Error - most likely _body not set because we do not support compression.
            return ParserBase_1.ParserBase.PARSING_DONE;
        }
    };
    AWDParser.prototype._pStartParsing = function (frameLimit) {
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer_1.DisplayObjectContainer();
        _super.prototype._pStartParsing.call(this, frameLimit);
    };
    AWDParser.prototype.dispose = function () {
        for (var c in this._blocks) {
            var b = this._blocks[c];
            b.dispose();
        }
    };
    AWDParser.prototype.parseNextBlock = function () {
        var block;
        var isParsed = false;
        var ns;
        var type;
        var flags;
        var len;
        //*
        if (this._debugTimers)
            this.start_timeing = performance.now();
        //*/
        this._cur_block_id = this._body.readUnsignedInt();
        ns = this._body.readUnsignedByte();
        type = this._body.readUnsignedByte();
        flags = this._body.readUnsignedByte();
        len = this._body.readUnsignedInt();
        var blockCompression = BitFlags.test(flags, BitFlags.FLAG4);
        var blockCompressionLZMA = BitFlags.test(flags, BitFlags.FLAG5);
        if (this._accuracyOnBlocks) {
            this._accuracyMatrix = BitFlags.test(flags, BitFlags.FLAG1);
            this._accuracyGeo = BitFlags.test(flags, BitFlags.FLAG2);
            this._accuracyProps = BitFlags.test(flags, BitFlags.FLAG3);
        }
        var blockEndAll = this._body.position + len;
        if (len > this._body.getBytesAvailable()) {
            this._pDieWithError('AWD2 block length is bigger than the bytes that are available!');
            this._body.position += this._body.getBytesAvailable();
            return;
        }
        //----------------------------------------------------------------------------
        // Compressed AWD Formats not yet supported
        if (blockCompression) {
            this._pDieWithError('Compressed AWD formats not yet supported');
            this._newBlockBytes = new ByteArray_1.ByteArray();
            this._body.readBytes(this._newBlockBytes, 0, len);
            this._newBlockBytes.position = 0;
        }
        else {
            this._newBlockBytes = this._body;
        }
        //----------------------------------------------------------------------------
        // LITTLE_ENDIAN - Default for ArrayBuffer / Not implemented in ByteArray
        //----------------------------------------------------------------------------
        //this._newBlockBytes.endian = Endian.LITTLE_ENDIAN;
        //----------------------------------------------------------------------------
        block = new AWDBlock_1.AWDBlock(this._cur_block_id, type);
        block.len = len;
        var blockEndBlock = this._newBlockBytes.position + len;
        if (blockCompression) {
            this._pDieWithError('Compressed AWD formats not yet supported');
        }
        if (this._debug)
            console.log("AWDBlock:  ID = " + this._cur_block_id + " | TypeID = " + type + " | Compression = " + blockCompression + " | Matrix-Precision = " + this._accuracyMatrix + " | Graphics-Precision = " + this._accuracyGeo + " | Properties-Precision = " + this._accuracyProps);
        this._blocks[this._cur_block_id] = block;
        if ((this._version[0] == 3) && (this._version[1] == 0)) {
            // probably should contain some info about the type of animation
            var factory = new AS2SceneGraphFactory_1.AS2SceneGraphFactory(this._view);
            switch (type) {
                case 24:
                    this.parseSpriteLibraryBlock(this._cur_block_id);
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
                    this.parseMovieClip(this._cur_block_id, factory);
                    isParsed = true;
                    break;
                case 134:
                    this.parseTextField(this._cur_block_id, factory);
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
        if ((this._version[0] > 2) || ((this._version[0] >= 2) && (this._version[1] >= 1))) {
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
                    this.parseSpritePoseAnimation(this._cur_block_id, true);
                    isParsed = true;
                    break;
                case 112:
                    this.parseSpritePoseAnimation(this._cur_block_id);
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
        }
        if (isParsed == false) {
            switch (type) {
                case 1:
                    this.parseGraphics(this._cur_block_id);
                    break;
                case 22:
                    this.parseContainer(this._cur_block_id);
                    break;
                case 23:
                    this.parseSpriteInstance(this._cur_block_id);
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
                    if (this._debug)
                        console.log("AWDBlock:   Unknown BlockType  (BlockID = " + this._cur_block_id + ") - Skip " + len + " bytes");
                    this._newBlockBytes.position += len;
                    break;
            }
        }
        if (this._debug) {
            if (this._newBlockBytes.position != blockEndBlock)
                console.log("  (!)(!)(!) Error while reading AWDBlock ID " + this._cur_block_id + " = skip to next block");
            if (block.errorMessages) {
                var len = block.errorMessages.length;
                for (var msgCnt = 0; msgCnt < len; msgCnt++)
                    console.log("        (!) Error: " + block.errorMessages[msgCnt] + " (!)");
            }
            console.log("\n");
        }
        if (this._debugTimers && !this.parsingPaused)
            this.updateTimers(type);
        this._body.position = blockEndAll;
        this._newBlockBytes = null;
    };
    AWDParser.prototype.updateTimers = function (type) {
        var end_timing = performance.now();
        var time_delta = end_timing - this.start_timeing;
        this._time_all += time_delta;
        if (type == 1) {
            this._time_graphics += time_delta;
            this._num_graphics++;
        }
        else if (type == 133) {
            this._time_timeline += time_delta;
            this._num_timeline++;
        }
        else if (type == 135) {
            this._time_fonts += time_delta;
            this._num_fonts++;
        }
        else if (type == 134) {
            this._time_textfields += time_delta;
            this._num_textfields++;
        }
        else if (type == 44) {
            this._time_sounds += time_delta;
            this._num_sounds++;
        }
        else if (type == 82) {
            this._time_textures += time_delta;
            this._num_textures++;
        }
        else if (type == 81) {
            this._time_materials += time_delta;
            this._num_materials++;
        }
        else if (type == 24) {
            this._time_sprites += time_delta;
            this._num_sprites++;
        }
    };
    //--Parser Blocks---------------------------------------------------------------------------
    AWDParser.prototype.parseTesselatedFont = function (blockID) {
        var name = this.parseVarStr();
        this._blocks[blockID].name = name;
        var new_font = AssetLibrary_1.AssetLibrary.getAsset(this._blocks[blockID].name);
        var newfont = false;
        if (new_font == undefined) {
            new_font = new Font_1.Font();
            newfont = true;
        }
        var font_style_cnt = this._newBlockBytes.readUnsignedInt();
        var font_style_char_cnt;
        var font_style_name;
        var new_font_style;
        var font_style_char;
        var attr_count = 0;
        var sm_len;
        var sm_end;
        var str_ftype, str_type, str_len, str_end;
        for (var i = 0; i < font_style_cnt; ++i) {
            font_style_name = this.parseVarStr();
            // dirty hack for icycle
            // we use bold chars for non-latin chars, but we use regular for � sign,
            // so the dirty hack is to merge the regular and the bold style
            if ((this._blocks[blockID].name == "Tahoma") && (font_style_name == "RegularStyle")) {
                font_style_name = "BoldStyle";
            }
            new_font_style = new_font.get_font_table(font_style_name, TesselatedFontTable_1.TesselatedFontTable.assetType);
            new_font_style.set_font_em_size(this._newBlockBytes.readUnsignedInt());
            new_font_style.set_whitespace_width(this._newBlockBytes.readUnsignedInt());
            new_font_style.ascent = this._newBlockBytes.readFloat();
            new_font_style.descent = this._newBlockBytes.readFloat();
            //console.log(new_font_style.get_whitespace_width());
            font_style_char_cnt = this._newBlockBytes.readUnsignedInt();
            for (var j = 0; j < font_style_char_cnt; ++j) {
                // todo: this is basically a simplified version of the elements-parsing done in parseGraphics. Make a parseElements() instead (?)
                font_style_char = this._newBlockBytes.readUnsignedInt();
                var char_width = this._newBlockBytes.readFloat();
                sm_len = this._newBlockBytes.readUnsignedInt();
                sm_end = this._newBlockBytes.position + sm_len;
                // Loop through data streams
                while (this._newBlockBytes.position < sm_end) {
                    // Type, field type, length
                    str_type = this._newBlockBytes.readUnsignedByte();
                    str_ftype = this._newBlockBytes.readUnsignedByte();
                    str_len = this._newBlockBytes.readUnsignedInt();
                    str_end = this._newBlockBytes.position + str_len;
                    if (str_type == 2) {
                        var indices = new Array();
                        for (var idx = 0; this._newBlockBytes.position < str_end; idx++)
                            indices[idx] = this._newBlockBytes.readUnsignedShort();
                    }
                    else if (str_type == 11) {
                        attr_count = 20;
                        var curveData = new ByteArray_1.ByteArray(str_len);
                        this._newBlockBytes.readBytes(curveData, 0, str_len);
                    }
                    else if (str_type == 12) {
                        attr_count = 12;
                        var curveData = new ByteArray_1.ByteArray(str_len);
                        this._newBlockBytes.readBytes(curveData, 0, str_len);
                    }
                    else if (str_type == 10) {
                        attr_count = 28;
                        var curveData = new ByteArray_1.ByteArray(str_len);
                        this._newBlockBytes.readBytes(curveData, 0, str_len);
                    }
                    else {
                        this._newBlockBytes.position = str_end;
                    }
                }
                if (curveData) {
                    var vertexBuffer = new AttributesBuffer_1.AttributesBuffer(attr_count, str_len / attr_count);
                    vertexBuffer.bufferView = new Uint8Array(curveData.arraybytes);
                    //console.log("allchars[cnt1++] = ['"+font_style_char.toString()+"',["+vertexBuffer.bufferView.toString()+"]]");
                    new_font_style.setChar(font_style_char.toString(), char_width, vertexBuffer, null);
                }
            }
        }
        this.parseProperties(null);
        this.parseUserAttributes();
        if (newfont) {
            this._pFinalizeAsset(new_font, name);
        }
        this._blocks[blockID].data = new_font;
        if (this._debug)
            console.log("Parsed a font: Name = '" + name);
    };
    AWDParser.prototype.parseTextFormat = function (blockID) {
        var name = this.parseVarStr();
        this._blocks[blockID].name = name;
        var font = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        var font_style_name = this.parseVarStr();
        var newTextFormat = new TextFormat_1.TextFormat();
        newTextFormat.font_name = font.name;
        // todo:  atm in awd this will always default to get a TesselatedFontTable. need to find a way to request the correct type here
        var font_table = font.get_font_table(font_style_name);
        if (font_table != null) {
            newTextFormat.font_style = font_style_name;
            newTextFormat.font_table = font_table;
        }
        var mat = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        mat.bothSides = true;
        mat.curves = true;
        var num_uv_values = this._newBlockBytes.readUnsignedByte();
        var uv_values = [];
        for (var uvcnt = 0; uvcnt < num_uv_values; uvcnt++)
            uv_values[uvcnt] = this._newBlockBytes.readFloat();
        newTextFormat.uv_values = uv_values;
        var format_props = this.parseProperties(AWDParser.textFormatProperties);
        newTextFormat.size = format_props.get(1, 12);
        newTextFormat.letterSpacing = format_props.get(2, 0);
        //newTextFormat.rotated = format_props.get(3,false);
        newTextFormat.kerning = format_props.get(4, true);
        //newTextFormat.baseline_shift = format_props.get(5,1);
        var tf_align_int = format_props.get(6, 0);
        if (tf_align_int == 1) {
            newTextFormat.align = "right";
        }
        else if (tf_align_int == 2) {
            newTextFormat.align = "center";
        }
        else if (tf_align_int == 3) {
            newTextFormat.align = "justify";
        }
        newTextFormat.indent = format_props.get(7, 0);
        newTextFormat.leftMargin = format_props.get(8, 0);
        newTextFormat.rightMargin = format_props.get(9, 0);
        newTextFormat.leading = format_props.get(10, 0);
        newTextFormat.material = mat;
        this.parseUserAttributes(); // textformat has no extra-properties
        //newTextFormat.extra =
        this._pFinalizeAsset(newTextFormat, name);
        this._blocks[blockID].data = newTextFormat;
        if (this._debug)
            console.log("Parsed a TextFormat: Name = '" + name + " font: " + font.name);
    };
    AWDParser.prototype.parseTextField = function (blockID, factory) {
        var name = this.parseVarStr();
        this._blocks[blockID].name = name;
        var newTextField = factory.createTextField();
        var text_field_type = this._newBlockBytes.readUnsignedByte();
        newTextField.type = AWDParser.textFieldTypes[text_field_type];
        if (text_field_type == 3)
            newTextField.displayAsPassword = true;
        //
        newTextField.textWidth = Math.abs(this._newBlockBytes.readFloat());
        newTextField.textHeight = Math.abs(this._newBlockBytes.readFloat());
        var num_paragraphs = this._newBlockBytes.readUnsignedInt();
        var complete_text = "";
        //console.log("num_paragraphs  '" + num_paragraphs);
        for (var paracnt = 0; paracnt < num_paragraphs; paracnt++) {
            var num_textruns = this._newBlockBytes.readUnsignedInt();
            //console.log("num_textruns  '" + num_textruns);
            for (var textrun_cnt = 0; textrun_cnt < num_textruns; textrun_cnt++) {
                var text_format = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
                var txt_length = this._newBlockBytes.readUnsignedInt();
                //console.log("txt_length  '" + txt_length);
                if (txt_length > 0) {
                    var this_txt = this._newBlockBytes.readUTFBytes(txt_length);
                    //newTextField.appendText(this_txt, text_format);
                    complete_text += this_txt;
                }
            }
        }
        newTextField.textFormat = text_format;
        newTextField.text = complete_text;
        //newTextField.construct_graphics();
        // todo: optional matrix etc can be put in properties.
        var props = this.parseProperties(AWDParser.textFieldProperties);
        newTextField.selectable = props.get(1, false);
        newTextField.border = props.get(3, false);
        //newTextField.renderHTML =  props.get(4, false);
        //newTextField.scrollable =  props.get(5, false);
        //newTextField.text_flow =  props.get(7, 0);
        //newTextField.orientationMode =  props.get(8, 0);
        //newTextField.line_mode =  props.get(9, 0);
        newTextField.extra = this.parseUserAttributes();
        //console.log("Parsed a TextField: Name = '" + name + "| text  = " + complete_text);
        this._pFinalizeAsset(newTextField, name);
        this._blocks[blockID].data = newTextField;
        if (this._debug)
            console.log("Parsed a TextField: Name = '" + name + "| text  = " + complete_text);
    };
    // Block ID = 25
    AWDParser.prototype.parseBillBoardLibraryBlock = function (blockID) {
        var name = this.parseVarStr();
        var mat = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        mat.bothSides = true;
        var billboard = new Billboard_1.Billboard(mat);
        // todo: optional matrix etc can be put in properties.
        this.parseProperties(null);
        billboard.extra = this.parseUserAttributes();
        this._pFinalizeAsset(billboard, name);
        this._blocks[blockID].data = billboard;
        if (this._debug)
            console.log("Parsed a Library-Billboard: Name = '" + name + "| Material-Name = " + mat.name);
    };
    // Block ID = 24
    AWDParser.prototype.parseSpriteLibraryBlock = function (blockID) {
        var name = this.parseVarStr();
        var data_id = this._newBlockBytes.readUnsignedInt();
        var graphics = this._blocks[data_id].data;
        this._blocks[blockID].geoID = data_id;
        var num_materials = this._newBlockBytes.readUnsignedShort();
        var materials = new Array();
        var materialNames = new Array();
        var mat;
        for (var materials_parsed = 0; materials_parsed < num_materials; materials_parsed++) {
            mat = (this._blocks[this._newBlockBytes.readUnsignedInt()].data || DefaultMaterialManager_1.DefaultMaterialManager.getDefaultMaterial());
            //mat.preserveAlpha = true;
            //mat.alphaBlending = true;
            mat.useColorTransform = true;
            materials[materials_parsed] = mat;
            materialNames[materials_parsed] = mat.name;
        }
        var start_timeing = performance.now();
        var sprite = new Sprite_1.Sprite();
        graphics.copyTo(sprite.graphics);
        var end_timing = performance.now();
        var time_delta = end_timing - start_timeing;
        this._time_graphics_bytes += time_delta;
        if (materials.length >= 1 && sprite.graphics.count == 1) {
            sprite.material = materials[0];
        }
        else if (materials.length > 1) {
            // Assign each sub-sprite in the sprite a material from the list. If more sub-sprites
            // than materials, repeat the last material for all remaining sub-sprites.
            for (var i = 0; i < sprite.graphics.count; i++)
                sprite.graphics.getGraphicAt(i).material = materials[Math.min(materials.length - 1, i)];
        }
        var count = this._newBlockBytes.readUnsignedShort();
        //if(count != sprite.graphics.count)
        //	throw new Error("num elements does not match num subsprites";
        for (var i = 0; i < count; i++) {
            var type = this._newBlockBytes.readUnsignedByte();
            var sampler = new Sampler2D_1.Sampler2D();
            var graphic = sprite.graphics.getGraphicAt(i);
            if (graphic) {
                graphic.style = new Style_1.Style();
                graphic.style.addSamplerAt(sampler, graphic.material.getTextureAt(0));
            }
            if (type == 3) {
                var tx = this._newBlockBytes.readFloat();
                var ty = this._newBlockBytes.readFloat();
                if (graphic) {
                    graphic.material.animateUVs = true;
                    graphic.style.uvMatrix = new Matrix_1.Matrix(0, 0, 0, 0, tx, ty);
                }
            }
            else if (type == 4) {
                var matrix = this.parseMatrix32RawData();
                if (graphic) {
                    graphic.material.animateUVs = true;
                    graphic.style.uvMatrix = new Matrix_1.Matrix(matrix);
                }
            }
            else if (type == 5) {
                var newMatrix = new Matrix_1.Matrix(this._newBlockBytes.readFloat(), this._newBlockBytes.readFloat(), 0, 0, this._newBlockBytes.readFloat(), this._newBlockBytes.readFloat());
                if (graphic) {
                    graphic.material.animateUVs = true;
                    graphic.style.uvMatrix = newMatrix;
                }
            }
            else if (type == 6) {
                var x = this._newBlockBytes.readFloat();
                var y = this._newBlockBytes.readFloat();
                var width = this._newBlockBytes.readFloat();
                var height = this._newBlockBytes.readFloat();
                var matrix = this.parseMatrix32RawData();
                if (graphic) {
                    sampler.imageRect = new Rectangle_1.Rectangle(x, y, width, height);
                    graphic.material.imageRect = true;
                    graphic.material.animateUVs = true;
                    graphic.style.uvMatrix = new Matrix_1.Matrix(matrix);
                }
            }
            if (graphic) {
                //check if curves are needed
                if (graphic.elements.getCustomAtributes("curves"))
                    graphic.material.curves = true;
            }
            // todo: finish optional properties (spreadmode + focalpoint)
            this._newBlockBytes.readUnsignedInt();
        }
        this.parseProperties(null);
        sprite.extra = this.parseUserAttributes();
        this._pFinalizeAsset(sprite, name);
        this._blocks[blockID].data = sprite;
        if (this._debug)
            console.log("Parsed a Library-Sprite: Name = '" + name + "| Graphics-Name = " + graphics.name + " | Graphics-Count = " + sprite.graphics.count + " | Mat-Names = " + materialNames);
    };
    AWDParser.prototype.parseAudioBlock = function (blockID, factory) {
        //var asset:Audio;todo create asset for audio
        this._blocks[blockID].name = this.parseVarStr();
        var type = this._newBlockBytes.readUnsignedByte();
        var data_len;
        // External
        if (type == 0) {
            data_len = this._newBlockBytes.readUnsignedInt();
            var url;
            url = this._newBlockBytes.readUTFBytes(data_len);
            // todo parser needs to be able to handle mp3 and wav files if we trigger the loading of external ressource
            this._pAddDependency(this._cur_block_id.toString(), new URLRequest_1.URLRequest(url), false, null, true);
        }
        else {
            // todo: exporter does not export embed sounds yet
            data_len = this._newBlockBytes.readUnsignedInt();
            var data = new ByteArray_1.ByteArray(data_len);
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
        if (this._debug)
            console.log("Start parsing a " + ["external", "embed"][type] + " Audio file");
    };
    //Block ID = 4
    AWDParser.prototype.parseMovieClip = function (blockID, factory) {
        var i;
        var j;
        var cmd_asset;
        var new_timeline = new Timeline_1.Timeline();
        var new_mc = factory.createMovieClip(new_timeline);
        var name = this.parseVarStr();
        // register list of potential childs
        // a potential child can be reused on a timeline (added / removed / added)
        // However, for each potential child, we need to register the max-number of instances that a frame contains
        // we parse 2 lists of potential-childs:
        // -	the first list contains potential-childs that are only ever instanced once per frame.
        // -	the second list contains potential-childs that are instanced multiple times on some frames.
        // on registering a child, the child gets a incremental-id assigned. This is the id, that the commands are using to access the childs.
        // hence we need to be careful to register all objects in correct order.
        var num_potential_childs = this._newBlockBytes.readUnsignedShort();
        for (i = 0; i < num_potential_childs; i++) {
            cmd_asset = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
            if (cmd_asset != null) {
                new_timeline.registerPotentialChild(cmd_asset);
            }
            else {
                //todo: register a default display object on timeline, so we do not mess up the incremental obj-id
                //new_mc.registerPotentialChild(cmd_asset);
                console.log("ERROR when collecting objects for timeline");
            }
        }
        var num_all_display_instances = num_potential_childs;
        var num_potential_childs_multi_instanced = this._newBlockBytes.readUnsignedShort();
        for (i = 0; i < num_potential_childs_multi_instanced; i++) {
            cmd_asset = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
            var num_instances = this._newBlockBytes.readUnsignedShort();
            num_all_display_instances += num_instances;
            if (cmd_asset != null) {
                for (j = 0; j < num_instances; j++)
                    new_timeline.registerPotentialChild(cmd_asset);
            }
            else {
                for (j = 0; j < num_instances; j++) {
                    //todo: register a default display object on timeline, so we do not mess up the incremental obj-id
                    //new_mc.registerPotentialChild(cmd_asset);
                    console.log("ERROR when collecting objects for timeline");
                }
            }
        }
        if (this._debug)
            console.log("Parsed " + (num_potential_childs + num_potential_childs_multi_instanced) + " potential childs. They will be used by " + num_all_display_instances + " instances.");
        // register list of potential sounds - for now we always have 0 sounds
        var num_potential_sounds = this._newBlockBytes.readUnsignedShort();
        var str_cnt = this._newBlockBytes.readUnsignedByte();
        var str_len = 0;
        var str_data_type = 0;
        var str_type = 0;
        var str_counter = 0;
        for (i = 0; i < str_cnt; i++) {
            // the first 6 lists are not optional and always in same order
            // hence we can get type by incremental counter instead of stored uint8
            if (str_counter < 6)
                str_type = str_counter;
            else
                str_type = this._newBlockBytes.readUnsignedByte();
            // get the data type for this stream (1:UINT8 - 2:UINT16 - 3:UINT32)
            str_data_type = this._newBlockBytes.readUnsignedByte();
            // size of this stream in byte
            str_len = this._newBlockBytes.readUnsignedInt();
            if (str_len > 0) {
                var keyframes_start_indices_data = new ByteArray_1.ByteArray(str_len);
                this._newBlockBytes.readBytes(keyframes_start_indices_data, 0, str_len);
                var new_buffer;
                //console.log("str_data_type = "+str_type);
                switch (str_data_type) {
                    case 1:
                        new_buffer = new Uint8Array(keyframes_start_indices_data.arraybytes);
                        break;
                    case 2:
                        new_buffer = new Uint16Array(keyframes_start_indices_data.arraybytes);
                        break;
                    case 4:
                        new_buffer = new Uint32Array(keyframes_start_indices_data.arraybytes);
                        break;
                }
                switch (str_type) {
                    case 0:
                        new_timeline.keyframe_durations = new_buffer;
                        new_timeline.numKeyFrames = str_len / str_data_type;
                        break;
                    case 1:
                        new_timeline.frame_command_indices = new_buffer;
                        break;
                    case 2:
                        new_timeline.frame_recipe = new_buffer;
                        break;
                    case 3:
                        new_timeline.command_length_stream = new_buffer;
                        break;
                    case 4:
                        new_timeline.command_index_stream = new_buffer;
                        break;
                    case 5:
                        new_timeline.add_child_stream = new_buffer;
                        break;
                    case 6:
                        new_timeline.remove_child_stream = new_buffer;
                        break;
                    case 7:
                        new_timeline.update_child_stream = new_buffer;
                        break;
                    case 8:
                        new_timeline.update_child_props_indices_stream = new_buffer;
                        break;
                    case 9:
                        new_timeline.update_child_props_length_stream = new_buffer;
                        break;
                    case 10:
                        new_timeline.property_type_stream = new_buffer;
                        break;
                    case 11:
                        new_timeline.property_index_stream = new_buffer;
                        break;
                    case 12:
                        new_timeline.properties_stream_int = new_buffer;
                        break;
                }
            }
            str_counter++;
        }
        var lc = 0;
        var float_array_data;
        str_cnt = this._newBlockBytes.readUnsignedByte();
        for (i = 0; i < str_cnt; i++) {
            str_type = this._newBlockBytes.readUnsignedByte();
            str_len = this._newBlockBytes.readUnsignedInt();
            switch (str_type) {
                case 0:
                    float_array_data = new ByteArray_1.ByteArray(str_len);
                    this._newBlockBytes.readBytes(float_array_data, 0, str_len);
                    new_timeline.properties_stream_f32_mtx_scale_rot = new Float32Array(float_array_data.arraybytes);
                    break;
                case 1:
                    float_array_data = new ByteArray_1.ByteArray(str_len);
                    this._newBlockBytes.readBytes(float_array_data, 0, str_len);
                    new_timeline.properties_stream_f32_mtx_pos = new Float32Array(float_array_data.arraybytes);
                    break;
                case 2:
                    float_array_data = new ByteArray_1.ByteArray(str_len);
                    this._newBlockBytes.readBytes(float_array_data, 0, str_len);
                    new_timeline.properties_stream_f32_mtx_all = new Float32Array(float_array_data.arraybytes);
                    break;
                case 3:
                    float_array_data = new ByteArray_1.ByteArray(str_len);
                    this._newBlockBytes.readBytes(float_array_data, 0, str_len);
                    new_timeline.properties_stream_f32_ct = new Float32Array(float_array_data.arraybytes);
                    break;
                case 4:
                    str_len = this._newBlockBytes.readUnsignedShort();
                    //console.log("start reading labels "+str_len);
                    for (lc = 0; lc < str_len; lc++) {
                        new_timeline._labels[this.parseVarStr()] = this._newBlockBytes.readUnsignedShort();
                    }
                    break;
                case 5:
                    str_len = this._newBlockBytes.readUnsignedShort();
                    var string_props_array = [];
                    for (lc = 0; lc < str_len; lc++) {
                        string_props_array.push(this._newBlockBytes.readUTFBytes(this._newBlockBytes.readUnsignedShort()));
                    }
                    new_timeline.properties_stream_strings = string_props_array;
                    break;
                case 6:
                    str_len = this._newBlockBytes.readUnsignedShort();
                    for (lc = 0; lc < str_len; lc++) {
                        var frame_index = this._newBlockBytes.readUnsignedShort();
                        var one_str_len = this._newBlockBytes.readUnsignedInt();
                        //this._newBlockBytes.readUTFBytes(one_str_len);
                        new_timeline.add_framescript(this._newBlockBytes.readUTFBytes(one_str_len), frame_index);
                    }
                    break;
            }
        }
        new_timeline.init();
        var sceneID = 0;
        var fps = 25;
        this.parseProperties(AWDParser.movieClipProperties);
        this.parseUserAttributes();
        this._pFinalizeAsset(new_mc, name);
        this._blocks[blockID].data = new_mc;
        if (this._debug)
            console.log("Parsed a TIMELINE: Name = " + name + "| sceneID = " + sceneID + "| numFrames = " + new_mc.timeline.numFrames);
    };
    //Block ID = 1
    AWDParser.prototype.parseGraphics = function (blockID) {
        var graphics = new Graphics_1.Graphics();
        // Read name and sub count
        var name = this.parseVarStr();
        var numElements = this._newBlockBytes.readUnsignedShort();
        // Read optional properties
        var props = this.parseProperties(AWDParser.graphicsProperties);
        var geoScaleU = props.get(1, 1);
        var geoScaleV = props.get(2, 1);
        var target_start_idx = 0;
        var target_vert_cnt = 0;
        var element_type = ElementType.STANDART_STREAMS;
        var target_element = null;
        // Loop through sub sprites
        for (var elements_parsed = 0; elements_parsed < numElements; elements_parsed++) {
            var is_curve_elements = false;
            var attr_count = 0;
            var sm_len, sm_end;
            var w_indices;
            var weights;
            target_start_idx = 0;
            target_vert_cnt = 0;
            element_type = ElementType.STANDART_STREAMS;
            target_element = null;
            sm_len = this._newBlockBytes.readUnsignedInt();
            sm_end = this._newBlockBytes.position + sm_len;
            var elementsProps = this.parseProperties(AWDParser.elementsProperties);
            // Loop through data streams
            while (this._newBlockBytes.position < sm_end) {
                var idx = 0;
                var str_ftype, str_type, str_len, str_end;
                // Type, field type, length
                str_type = this._newBlockBytes.readUnsignedByte();
                str_ftype = this._newBlockBytes.readUnsignedByte();
                str_len = this._newBlockBytes.readUnsignedInt();
                str_end = this._newBlockBytes.position + str_len;
                var x, y, z;
                if (str_type == 1) {
                    var verts = new Array();
                    while (this._newBlockBytes.position < str_end) {
                        x = this.readNumber(this._accuracyGeo);
                        y = this.readNumber(this._accuracyGeo);
                        z = this.readNumber(this._accuracyGeo);
                        verts[idx++] = x;
                        verts[idx++] = y;
                        verts[idx++] = z;
                    }
                }
                else if (str_type == 2) {
                    var indices = new Array();
                    while (this._newBlockBytes.position < str_end)
                        indices[idx++] = this._newBlockBytes.readUnsignedShort();
                }
                else if (str_type == 3) {
                    var uvs = new Array();
                    while (this._newBlockBytes.position < str_end)
                        uvs[idx++] = this.readNumber(this._accuracyGeo);
                }
                else if (str_type == 4) {
                    var normals = new Array();
                    while (this._newBlockBytes.position < str_end)
                        normals[idx++] = this.readNumber(this._accuracyGeo);
                }
                else if (str_type == 6) {
                    w_indices = Array();
                    while (this._newBlockBytes.position < str_end)
                        w_indices[idx++] = this._newBlockBytes.readUnsignedShort() * 3;
                }
                else if (str_type == 7) {
                    weights = new Array();
                    while (this._newBlockBytes.position < str_end)
                        weights[idx++] = this.readNumber(this._accuracyGeo);
                }
                else if (str_type == 8) {
                    this._newBlockBytes.position = str_end;
                }
                else if (str_type == 9) {
                    this._newBlockBytes.position = str_end;
                }
                else if (str_type == 10) {
                    element_type = ElementType.CONCENATED_STREAMS;
                    attr_count = 28;
                    var curveData = new ByteArray_1.ByteArray(str_len);
                    this._newBlockBytes.readBytes(curveData, 0, str_len);
                }
                else if (str_type == 11) {
                    element_type = ElementType.CONCENATED_STREAMS;
                    attr_count = 20;
                    var curveData = new ByteArray_1.ByteArray(str_len);
                    this._newBlockBytes.readBytes(curveData, 0, str_len);
                }
                else if (str_type == 12) {
                    element_type = ElementType.CONCENATED_STREAMS;
                    attr_count = 12;
                    var curveData = new ByteArray_1.ByteArray(str_len);
                    this._newBlockBytes.readBytes(curveData, 0, str_len);
                }
                else if (str_type == 13) {
                    element_type = ElementType.SHARED_BUFFER;
                    var targetGraphic = (this._blocks[this._newBlockBytes.readUnsignedInt()].data);
                    var element_idx = this._newBlockBytes.readUnsignedByte();
                    target_element = targetGraphic.getGraphicAt(element_idx).elements;
                    target_start_idx = this._newBlockBytes.readUnsignedInt();
                    target_vert_cnt = this._newBlockBytes.readUnsignedInt();
                }
                else {
                    console.log("skipping unknown subgeom stream");
                    this._newBlockBytes.position = str_end;
                }
            }
            this.parseUserAttributes(); // Ignore sub-sprite attributes for now
            if (element_type == ElementType.CONCENATED_STREAMS) {
                //console.log("str_len/attr_count = "+str_len/attr_count)
                var vertexBuffer = new AttributesBuffer_1.AttributesBuffer(attr_count, str_len / attr_count);
                vertexBuffer.bufferView = new Uint8Array(curveData.arraybytes);
                var curve_elements = new TriangleElements_1.TriangleElements(vertexBuffer);
                curve_elements.setPositions(new Float2Attributes_1.Float2Attributes(vertexBuffer));
                if (attr_count == 20) {
                    curve_elements.setCustomAttributes("curves", new Float3Attributes_1.Float3Attributes(vertexBuffer));
                }
                else if (attr_count == 12) {
                    curve_elements.setCustomAttributes("curves", new Byte4Attributes_1.Byte4Attributes(vertexBuffer, false));
                }
                if (attr_count == 28)
                    curve_elements.setUVs(new Float2Attributes_1.Float2Attributes(vertexBuffer));
                graphics.addGraphic(curve_elements);
                if (this._debug)
                    console.log("Parsed a TriangleElements with curves");
            }
            else if (element_type == ElementType.STANDART_STREAMS) {
                var triangle_elements = new TriangleElements_1.TriangleElements(new AttributesBuffer_1.AttributesBuffer());
                if (weights)
                    triangle_elements.jointsPerVertex = weights.length / (verts.length / 3);
                if (normals)
                    triangle_elements.autoDeriveNormals = false;
                triangle_elements.autoDeriveTangents = true;
                triangle_elements.setIndices(indices);
                triangle_elements.setPositions(verts);
                triangle_elements.setNormals(normals);
                triangle_elements.setUVs(uvs);
                triangle_elements.setJointWeights(weights);
                triangle_elements.setJointIndices(w_indices);
                var scaleU = elementsProps.get(1, 1);
                var scaleV = elementsProps.get(2, 1);
                var setSubUVs = false; //this should remain false atm, because in AwayBuilder the uv is only scaled by the graphics
                if ((geoScaleU != scaleU) || (geoScaleV != scaleV)) {
                    setSubUVs = true;
                    scaleU = geoScaleU / scaleU;
                    scaleV = geoScaleV / scaleV;
                }
                if (setSubUVs)
                    triangle_elements.scaleUV(scaleU, scaleV);
                graphics.addGraphic(triangle_elements);
                if (this._debug)
                    console.log("Parsed a TriangleElements");
            }
            else if (element_type == ElementType.SHARED_BUFFER) {
                var graphic = graphics.addGraphic(target_element);
                graphic.offset = target_start_idx;
                graphic.count = target_vert_cnt;
                if (this._debug)
                    console.log("Parsed a TriangleElements that shares buffer from target geom");
            }
        }
        if ((geoScaleU != 1) || (geoScaleV != 1))
            graphics.scaleUV(geoScaleU, geoScaleV);
        this.parseUserAttributes();
        this._pFinalizeAsset(graphics, name);
        this._blocks[blockID].data = graphics;
        if (this._debug)
            console.log("Parsed Graphics: Name = " + name);
    };
    //Block ID = 11
    AWDParser.prototype.parsePrimitves = function (blockID) {
        var name;
        var prefab;
        var primType;
        var elements_parsed;
        var props;
        var bsm;
        // Read name and sub count
        name = this.parseVarStr();
        primType = this._newBlockBytes.readUnsignedByte();
        props = this.parseProperties(AWDParser.primitiveProperties);
        // to do, not all properties are set on all primitives
        switch (primType) {
            case 1:
                prefab = new PrimitivePlanePrefab_1.PrimitivePlanePrefab(null, ElementsType_1.ElementsType.TRIANGLE, props.get(101, 100), props.get(102, 100), props.get(301, 1), props.get(302, 1), props.get(701, true), props.get(702, false));
                break;
            case 2:
                prefab = new PrimitiveCubePrefab_1.PrimitiveCubePrefab(null, ElementsType_1.ElementsType.TRIANGLE, props.get(101, 100), props.get(102, 100), props.get(103, 100), props.get(301, 1), props.get(302, 1), props.get(303, 1), props.get(701, true));
                break;
            case 3:
                prefab = new PrimitiveSpherePrefab_1.PrimitiveSpherePrefab(null, ElementsType_1.ElementsType.TRIANGLE, props.get(101, 50), props.get(301, 16), props.get(302, 12), props.get(701, true));
                break;
            case 4:
                prefab = new PrimitiveCylinderPrefab_1.PrimitiveCylinderPrefab(null, ElementsType_1.ElementsType.TRIANGLE, props.get(101, 50), props.get(102, 50), props.get(103, 100), props.get(301, 16), props.get(302, 1), true, true, true); // bool701, bool702, bool703, bool704);
                if (!props.get(701, true))
                    prefab.topClosed = false;
                if (!props.get(702, true))
                    prefab.bottomClosed = false;
                if (!props.get(703, true))
                    prefab.yUp = false;
                break;
            case 5:
                prefab = new PrimitiveConePrefab_1.PrimitiveConePrefab(null, ElementsType_1.ElementsType.TRIANGLE, props.get(101, 50), props.get(102, 100), props.get(301, 16), props.get(302, 1), props.get(701, true), props.get(702, true));
                break;
            case 6:
                prefab = new PrimitiveCapsulePrefab_1.PrimitiveCapsulePrefab(null, ElementsType_1.ElementsType.TRIANGLE, props.get(101, 50), props.get(102, 100), props.get(301, 16), props.get(302, 15), props.get(701, true));
                break;
            case 7:
                prefab = new PrimitiveTorusPrefab_1.PrimitiveTorusPrefab(null, ElementsType_1.ElementsType.TRIANGLE, props.get(101, 50), props.get(102, 50), props.get(301, 16), props.get(302, 8), props.get(701, true));
                break;
            default:
                prefab = new PrefabBase_1.PrefabBase();
                console.log("ERROR: UNSUPPORTED PREFAB_TYPE");
                break;
        }
        if ((props.get(110, 1) != 1) || (props.get(111, 1) != 1)) {
        }
        this.parseUserAttributes();
        prefab.name = name;
        this._pFinalizeAsset(prefab, name);
        this._blocks[blockID].data = prefab;
        if (this._debug) {
            if ((primType < 0) || (primType > 7))
                primType = 0;
            console.log("Parsed a Primivite: Name = " + name + "| type = " + AWDParser.primitiveTypes[primType]);
        }
    };
    // Block ID = 22
    AWDParser.prototype.parseContainer = function (blockID) {
        var name;
        var mtx;
        var ctr;
        var parent = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        mtx = this.parseMatrix3D();
        name = this.parseVarStr();
        var parentName = "Root (TopLevel)";
        ctr = new DisplayObjectContainer_1.DisplayObjectContainer();
        ctr.transform.matrix3D = mtx;
        if (parent) {
            parent.addChild(ctr);
            parentName = parent.name;
        }
        else {
            //add to the content property
            this._pContent.addChild(ctr);
        }
        // in AWD version 2.1 we read the Container properties
        if ((this._version[0] == 2) && (this._version[1] == 1)) {
            var props = this.parseProperties(AWDParser.containerProperties);
            ctr.pivot = new Vector3D_1.Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
        }
        else {
            this.parseProperties(null);
        }
        // the extraProperties should only be set for AWD2.1-Files, but is read for both versions
        ctr.extra = this.parseUserAttributes();
        this._pFinalizeAsset(ctr, name);
        this._blocks[blockID].data = ctr;
        if (this._debug)
            console.log("Parsed a Container: Name = '" + name + "' | Parent-Name = " + parentName);
    };
    // Block ID = 23
    AWDParser.prototype.parseSpriteInstance = function (blockID) {
        var parent = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        var mtx = this.parseMatrix3D();
        var name = this.parseVarStr();
        var data_id = this._newBlockBytes.readUnsignedInt();
        var asset = this._blocks[data_id].data;
        var graphics;
        var prefab;
        var isPrefab = false;
        if (asset.isAsset(Graphics_1.Graphics)) {
            graphics = asset;
        }
        else {
            isPrefab = true;
            prefab = asset;
        }
        this._blocks[blockID].geoID = data_id;
        var num_materials = this._newBlockBytes.readUnsignedShort();
        var materials = new Array();
        var materialNames = new Array();
        var mat;
        for (var materials_parsed = 0; materials_parsed < num_materials; materials_parsed++) {
            mat = (this._blocks[this._newBlockBytes.readUnsignedInt()].data || DefaultMaterialManager_1.DefaultMaterialManager.getDefaultMaterial());
            materials[materials_parsed] = mat;
            materialNames[materials_parsed] = mat.name;
        }
        var sprite;
        if (isPrefab) {
            sprite = prefab.getNewObject();
        }
        else {
            sprite = new Sprite_1.Sprite();
            graphics.copyTo(sprite.graphics);
        }
        sprite.transform.matrix3D = mtx;
        var parentName = "Root (TopLevel)";
        if (parent) {
            parent.addChild(sprite);
            parentName = parent.name;
        }
        else {
            //add to the content property
            this._pContent.addChild(sprite);
        }
        if (materials.length >= 1 && sprite.graphics.count == 1) {
            sprite.material = materials[0];
        }
        else if (materials.length > 1) {
            // Assign each sub-sprite in the sprite a material from the list. If more sub-sprites
            // than materials, repeat the last material for all remaining sub-sprites.
            for (var i = 0; i < sprite.graphics.count; i++)
                sprite.graphics.getGraphicAt(i).material = materials[Math.min(materials.length - 1, i)];
        }
        if ((this._version[0] == 2) && (this._version[1] == 1)) {
            var props = this.parseProperties(AWDParser.spriteInstanceProperties);
            sprite.pivot = new Vector3D_1.Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
            sprite.castsShadows = props.get(5, true);
        }
        else {
            this.parseProperties(null);
        }
        sprite.extra = this.parseUserAttributes();
        this._pFinalizeAsset(sprite, name);
        this._blocks[blockID].data = sprite;
        if (this._debug) {
            if (isPrefab)
                console.log("Parsed a Sprite for Prefab: Name = '" + name + "' | Parent-Name = " + parentName + "| Prefab-Name = " + prefab.name + " | Graphics-Count = " + sprite.graphics.count + " | Mat-Names = " + materialNames);
            else
                console.log("Parsed a Sprite for Graphics: Name = '" + name + "' | Parent-Name = " + parentName + "| Graphics-Name = " + graphics.name + " | Graphics-Count = " + sprite.graphics.count + " | Mat-Names = " + materialNames);
        }
    };
    //Block ID 31
    AWDParser.prototype.parseSkyboxInstance = function (blockID) {
        var name = this.parseVarStr();
        var asset = new Skybox_1.Skybox();
        var tex = new SingleCubeTexture_1.SingleCubeTexture(this._blocks[this._newBlockBytes.readUnsignedInt()].data || DefaultMaterialManager_1.DefaultMaterialManager.getDefaultImageCube());
        asset.texture = tex;
        this.parseProperties(null);
        asset.extra = this.parseUserAttributes();
        this._pFinalizeAsset(asset, name);
        this._blocks[blockID].data = asset;
        if (this._debug)
            console.log("Parsed a Skybox: Name = '" + name + "' | CubeTexture-Name = " + tex.name);
    };
    //Block ID = 41
    AWDParser.prototype.parseLight = function (blockID) {
        var light;
        var newShadowMapper;
        var parent = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        var mtx = this.parseMatrix3D();
        var name = this.parseVarStr();
        var lightType = this._newBlockBytes.readUnsignedByte();
        var props = this.parseProperties(AWDParser.lightProperties);
        var shadowMapperType = props.get(9, 0);
        var lightTypes = ["Unsupported LightType", "PointLight", "DirectionalLight"];
        var shadowMapperTypes = ["No ShadowMapper", "DirectionalShadowMapper", "NearDirectionalShadowMapper", "CascadeShadowMapper", "CubeMapShadowMapper"];
        if (lightType == 1) {
            light = new PointLight_1.PointLight();
            light.radius = props.get(1, 90000);
            light.fallOff = props.get(2, 100000);
            if (shadowMapperType > 0) {
                if (shadowMapperType == 4) {
                    newShadowMapper = new CubeMapShadowMapper_1.CubeMapShadowMapper();
                }
            }
            light.transform.matrix3D = mtx;
        }
        if (lightType == 2) {
            light = new DirectionalLight_1.DirectionalLight(props.get(21, 0), props.get(22, -1), props.get(23, 1));
            if (shadowMapperType > 0) {
                if (shadowMapperType == 1) {
                    newShadowMapper = new DirectionalShadowMapper_1.DirectionalShadowMapper();
                }
            }
        }
        light.color = props.get(3, 0xffffff);
        light.specular = props.get(4, 1.0);
        light.diffuse = props.get(5, 1.0);
        light.ambientColor = props.get(7, 0xffffff);
        light.ambient = props.get(8, 0.0);
        // if a shadowMapper has been created, adjust the depthMapSize if needed, assign to light and set castShadows to true
        if (newShadowMapper) {
            if (newShadowMapper instanceof CubeMapShadowMapper_1.CubeMapShadowMapper) {
                if (props.get(10, 1) != 1)
                    newShadowMapper.depthMapSize = this._depthSizeDic[props.get(10, 1)];
            }
            else {
                if (props.get(10, 2) != 2)
                    newShadowMapper.depthMapSize = this._depthSizeDic[props.get(10, 2)];
            }
            light.shadowMapper = newShadowMapper;
            light.castsShadows = true;
        }
        var parentName = "Root (TopLevel)";
        if (parent) {
            parent.addChild(light);
            parentName = parent.name;
        }
        else {
            //add to the content property
            this._pContent.addChild(light);
        }
        this.parseUserAttributes();
        this._pFinalizeAsset(light, name);
        this._blocks[blockID].data = light;
        if (this._debug)
            console.log("Parsed a Light: Name = '" + name + "' | Type = " + lightTypes[lightType] + " | Parent-Name = " + parentName + " | ShadowMapper-Type = " + shadowMapperTypes[shadowMapperType]);
    };
    //Block ID = 43
    AWDParser.prototype.parseCamera = function (blockID) {
        var parent = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        var mtx = this.parseMatrix3D();
        var name = this.parseVarStr();
        var projection;
        this._newBlockBytes.readUnsignedByte(); //set as active camera
        this._newBlockBytes.readShort(); //lengthof lenses - not used yet
        var projectiontype = this._newBlockBytes.readShort();
        var props = this.parseProperties(AWDParser.cameraProperties);
        switch (projectiontype) {
            case 5001:
                projection = new PerspectiveProjection_1.PerspectiveProjection(props.get(101, 60));
                break;
            case 5002:
                projection = new OrthographicProjection_1.OrthographicProjection(props.get(101, 500));
                break;
            case 5003:
                projection = new OrthographicOffCenterProjection_1.OrthographicOffCenterProjection(props.get(101, -400), props.get(102, 400), props.get(103, -300), props.get(104, 300));
                break;
            default:
                console.log("unsupportedLenstype");
                return;
        }
        var camera = new Camera_1.Camera(projection);
        camera.transform.matrix3D = mtx;
        var parentName = "Root (TopLevel)";
        if (parent) {
            parent.addChild(camera);
            parentName = parent.name;
        }
        else {
            //add to the content property
            this._pContent.addChild(camera);
        }
        camera.name = name;
        props = this.parseProperties(AWDParser.cameraPivotProperties);
        camera.pivot = new Vector3D_1.Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
        camera.extra = this.parseUserAttributes();
        this._pFinalizeAsset(camera, name);
        this._blocks[blockID].data = camera;
        if (this._debug)
            console.log("Parsed a Camera: Name = '" + name + "' | Projectiontype = " + projection + " | Parent-Name = " + parentName);
    };
    //Block ID = 51
    AWDParser.prototype.parseLightPicker = function (blockID) {
        var name = this.parseVarStr();
        var numLights = this._newBlockBytes.readUnsignedShort();
        var lightsArray = new Array();
        var lightsArrayNames = new Array();
        for (var k = 0; k < numLights; k++) {
            var light = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
            lightsArray.push(light);
            lightsArrayNames.push(light.name);
        }
        if (lightsArray.length == 0) {
            this._blocks[blockID].addError("Could not create this LightPicker, cause no Light was found.");
            this.parseUserAttributes();
            return; //return without any more parsing for this block
        }
        var lightPick = new StaticLightPicker_1.StaticLightPicker(lightsArray);
        lightPick.name = name;
        this.parseUserAttributes();
        this._pFinalizeAsset(lightPick, name);
        this._blocks[blockID].data = lightPick;
        if (this._debug)
            console.log("Parsed a StaticLightPicker: Name = '" + name + "' | Texture-Name = " + lightsArrayNames);
    };
    //Block ID = 81
    AWDParser.prototype.parseMaterial = function (blockID) {
        // TODO: not used
        ////blockLength = block.len;
        var name;
        var type;
        var props;
        var mat;
        var finalize;
        var num_methods;
        var methods_parsed;
        var returnedArray;
        name = this.parseVarStr();
        type = this._newBlockBytes.readUnsignedByte();
        num_methods = this._newBlockBytes.readUnsignedByte();
        // Read material numerical properties
        props = this.parseProperties(AWDParser.materialProperties);
        methods_parsed = 0;
        while (methods_parsed < num_methods) {
            var method_type;
            method_type = this._newBlockBytes.readUnsignedShort();
            this.parseProperties(null);
            this.parseUserAttributes();
            methods_parsed += 1;
        }
        var debugString = "";
        if (type === 1) {
            debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
            var color = props.get(1, 0xffffff);
            if (this.materialMode < 2) {
                mat = new MethodMaterial_1.MethodMaterial(color, props.get(10, 1.0));
            }
            else {
                mat = new MethodMaterial_1.MethodMaterial(color);
                mat.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
            }
        }
        else if (type === 2) {
            var texture = new Single2DTexture_1.Single2DTexture(this._blocks[props.get(2, 0)].data);
            mat = new MethodMaterial_1.MethodMaterial();
            mat.ambientMethod.texture = texture;
            if (this.materialMode < 2) {
                mat.alphaBlending = props.get(11, false);
                mat.alpha = props.get(10, 1.0);
                debugString += "Parsed a MethodMaterial(SinglePass): Name = '" + name + "'" + (texture ? " | Texture-Name = " + texture.name : "");
            }
            else {
                mat.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                debugString += "Parsed a MethodMaterial(MultiPass): Name = '" + name + "'" + (texture ? " | Texture-Name = " + texture.name : "");
            }
        }
        mat.extra = this.parseUserAttributes();
        mat.alphaThreshold = props.get(12, 0.0);
        mat.style.sampler = new Sampler2D_1.Sampler2D(props.get(13, false));
        this._pFinalizeAsset(mat, name);
        this._blocks[blockID].data = mat;
        if (this._debug)
            console.log(debugString);
    };
    // Block ID = 81 AWD2.1
    AWDParser.prototype.parseMaterial_v1 = function (blockID) {
        var mat;
        var diffuseImage;
        var normalImage;
        var specImage;
        var name = this.parseVarStr();
        var type = this._newBlockBytes.readUnsignedByte();
        var num_methods = this._newBlockBytes.readUnsignedByte();
        var props = this.parseProperties(AWDParser.material_v1Properties);
        var spezialType = props.get(4, 0);
        var debugString = "Parsed Material ";
        if (spezialType >= 2) {
            this._blocks[blockID].addError("Material-spezialType '" + spezialType + "' is not supported, can only be 0:singlePass, 1:MultiPass !");
            return;
        }
        if (type <= 2) {
            if (this.materialMode == 1)
                spezialType = 0;
            else if (this.materialMode == 2)
                spezialType = 1;
            if (spezialType < 2) {
                if (type == 1) {
                    var color = props.get(1, 0xcccccc); //TODO temporarily swapped so that diffuse color goes to ambient
                    if (spezialType == 1) {
                        mat = new MethodMaterial_1.MethodMaterial(color);
                        mat.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                        debugString += "Parsed a ColorMaterial(MultiPass): Name = '" + name + "' | ";
                    }
                    else {
                        mat = new MethodMaterial_1.MethodMaterial(color, props.get(10, 1.0));
                        mat.alphaBlending = props.get(11, false);
                        debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
                    }
                }
                else if (type == 2) {
                    var texture = new Single2DTexture_1.Single2DTexture(this._blocks[props.get(2, 0)].data);
                    mat = new MethodMaterial_1.MethodMaterial();
                    mat.ambientMethod.texture = texture;
                    if (spezialType == 1) {
                        mat.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                        debugString += "Parsed a MethodMaterial(MultiPass): Name = '" + name + "'" + (texture ? " | Texture-Name = " + texture.name : "");
                    }
                    else {
                        mat.alpha = props.get(10, 1.0);
                        mat.alphaBlending = props.get(11, false);
                        debugString += "Parsed a MethodMaterial(SinglePass): Name = '" + name + "'" + (texture ? " | Texture-Name = " + texture.name : "");
                    }
                }
                diffuseImage = this._blocks[props.get(17, 0)].data;
                normalImage = this._blocks[props.get(3, 0)].data;
                specImage = this._blocks[props.get(21, 0)].data;
                mat.lightPicker = this._blocks[props.get(22, 0)].data;
                mat.style.sampler = new Sampler2D_1.Sampler2D(props.get(13, false), props.get(5, true), props.get(6, true));
                mat.bothSides = props.get(7, false);
                mat.alphaPremultiplied = props.get(8, false);
                mat.blendMode = this.blendModeDic[props.get(9, 0)];
                if (diffuseImage) {
                    mat.diffuseTexture = new Single2DTexture_1.Single2DTexture(diffuseImage);
                    debugString += " | DiffuseTexture-Name = " + diffuseImage.name;
                }
                if (normalImage) {
                    mat.normalMethod.texture = new Single2DTexture_1.Single2DTexture(normalImage);
                    debugString += " | NormalTexture-Name = " + normalImage.name;
                }
                if (specImage) {
                    mat.specularMethod.texture = new Single2DTexture_1.Single2DTexture(specImage);
                    debugString += " | SpecularTexture-Name = " + specImage.name;
                }
                mat.alphaThreshold = props.get(12, 0.0);
                mat.ambientMethod.strength = props.get(15, 1.0);
                mat.diffuseMethod.color = props.get(16, 0xffffff);
                mat.specularMethod.strength = props.get(18, 1.0);
                mat.specularMethod.gloss = props.get(19, 50);
                mat.specularMethod.color = props.get(20, 0xffffff);
                for (var methods_parsed = 0; methods_parsed < num_methods; methods_parsed++) {
                    var method_type;
                    method_type = this._newBlockBytes.readUnsignedShort();
                    props = this.parseProperties(AWDParser.method_v1Properties);
                    switch (method_type) {
                        case 999:
                            var effectMethod = this._blocks[props.get(1, 0)].data;
                            mat.addEffectMethod(effectMethod);
                            debugString += " | EffectMethod-Name = " + effectMethod.name;
                            break;
                        case 998:
                            var shadowMapMethod = this._blocks[props.get(1, 0)].data;
                            mat.shadowMethod = shadowMapMethod;
                            debugString += " | ShadowMethod-Name = " + shadowMapMethod.name;
                            break;
                        case 1:
                            var cubeTexture = new SingleCubeTexture_1.SingleCubeTexture(this._blocks[props.get(1, 0)].data);
                            mat.ambientMethod = new AmbientEnvMapMethod_1.AmbientEnvMapMethod();
                            mat.ambientMethod.texture = cubeTexture;
                            debugString += " | AmbientEnvMapMethod | EnvMap-Name =" + cubeTexture.name;
                            break;
                        case 51:
                            mat.diffuseMethod = new DiffuseDepthMethod_1.DiffuseDepthMethod();
                            debugString += " | DiffuseDepthMethod";
                            break;
                        case 52:
                            var texture = new Single2DTexture_1.Single2DTexture(this._blocks[props.get(1, 0)].data);
                            mat.diffuseMethod = new DiffuseGradientMethod_1.DiffuseGradientMethod(texture);
                            debugString += " | DiffuseGradientMethod | GradientDiffuseTexture-Name =" + texture.name;
                            break;
                        case 53:
                            mat.diffuseMethod = new DiffuseWrapMethod_1.DiffuseWrapMethod(props.get(101, 5));
                            debugString += " | DiffuseWrapMethod";
                            break;
                        case 54:
                            var texture = new Single2DTexture_1.Single2DTexture(this._blocks[props.get(1, 0)].data);
                            mat.diffuseMethod = new DiffuseLightMapMethod_1.DiffuseLightMapMethod(texture, this.blendModeDic[props.get(401, 10)], false, mat.diffuseMethod);
                            debugString += " | DiffuseLightMapMethod | LightMapTexture-Name =" + texture.name;
                            break;
                        case 55:
                            mat.diffuseMethod = new DiffuseCelMethod_1.DiffuseCelMethod(props.get(401, 3), mat.diffuseMethod);
                            mat.diffuseMethod.smoothness = props.get(101, 0.1);
                            debugString += " | DiffuseCelMethod";
                            break;
                        case 56:
                            //							mat.diffuseMethod = new DiffuseSubSurfaceMethod(); //depthMapSize and depthMapOffset ?
                            //							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).scattering = props.get(101, 0.2);
                            //							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).translucency = props.get(102, 1);
                            //							(<DiffuseSubSurfaceMethod> mat.diffuseMethod).scatterColor = props.get(601, 0xffffff);
                            //							debugString += " | DiffuseSubSurfaceMethod";
                            break;
                        case 101:
                            mat.specularMethod = new SpecularAnisotropicMethod_1.SpecularAnisotropicMethod();
                            debugString += " | SpecularAnisotropicMethod";
                            break;
                        case 102:
                            mat.specularMethod = new SpecularPhongMethod_1.SpecularPhongMethod();
                            debugString += " | SpecularPhongMethod";
                            break;
                        case 103:
                            mat.specularMethod = new SpecularCelMethod_1.SpecularCelMethod(props.get(101, 0.5), mat.specularMethod);
                            mat.specularMethod.smoothness = props.get(102, 0.1);
                            debugString += " | SpecularCelMethod";
                            break;
                        case 104:
                            mat.specularMethod = new SpecularFresnelMethod_1.SpecularFresnelMethod(props.get(701, true), mat.specularMethod);
                            mat.specularMethod.fresnelPower = props.get(101, 5);
                            mat.specularMethod.normalReflectance = props.get(102, 0.1);
                            debugString += " | SpecularFresnelMethod";
                            break;
                        case 151:
                            break;
                        case 152:
                            var texture = new Single2DTexture_1.Single2DTexture(this._blocks[props.get(1, 0)].data);
                            mat.normalMethod = new NormalSimpleWaterMethod_1.NormalSimpleWaterMethod(mat.normalMethod.texture || texture, texture);
                            debugString += " | NormalSimpleWaterMethod | Second-NormalTexture-Name = " + texture.name;
                            break;
                    }
                    this.parseUserAttributes();
                }
            }
        }
        else if ((type >= 3) && (type <= 7)) {
            // if this is a basic material, we create it, finalize it, assign it to block-cache and return.
            var color = props.get(1, 0xcccccc);
            debugString += color;
            var diffuseTexture = new Single2DTexture_1.Single2DTexture(this._blocks[props.get(2, 0)].data);
            if (type == 5) {
                diffuseTexture.mappingMode = MappingMode_1.MappingMode.LINEAR_GRADIENT;
            }
            else if (type == 6) {
                diffuseTexture.mappingMode = MappingMode_1.MappingMode.RADIAL_GRADIENT;
            }
            var basic_mat = new BasicMaterial_1.BasicMaterial();
            basic_mat.texture = diffuseTexture;
            basic_mat.bothSides = true;
            basic_mat.alphaBlending = props.get(11, false);
            //basic_mat.preserveAlpha = basic_mat.alphaBlending;
            //basic_mat.alphaBlending = true;
            basic_mat.extra = this.parseUserAttributes();
            this._pFinalizeAsset(basic_mat, name);
            this._blocks[blockID].data = basic_mat;
            if (this._debug)
                console.log(debugString);
            return;
        }
        mat.extra = this.parseUserAttributes();
        this._pFinalizeAsset(mat, name);
        this._blocks[blockID].data = mat;
        if (this._debug)
            console.log(debugString);
    };
    //Block ID = 82
    AWDParser.prototype.parseTexture = function (blockID) {
        this._blocks[blockID].name = this.parseVarStr();
        var type = this._newBlockBytes.readUnsignedByte();
        this._texture_users[this._cur_block_id] = [];
        // External
        if (type == 0) {
            var url = this._newBlockBytes.readUTFBytes(this._newBlockBytes.readUnsignedInt());
            this._pAddDependency(this._cur_block_id.toString(), new URLRequest_1.URLRequest(url), false, null, true);
        }
        else {
            var data_len = this._newBlockBytes.readUnsignedInt();
            var data = new ByteArray_1.ByteArray(data_len);
            this._newBlockBytes.readBytes(data, 0, data_len);
            //
            // AWD3Parserutils - Fix for FireFox Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=715075 .
            //
            // Converting data to image here instead of parser - fix FireFox bug where image width / height is 0 when created from data
            // This gives the browser time to initialise image width / height.
            this._pAddDependency(this._cur_block_id.toString(), null, false, data, true);
        }
        // Ignore for now
        this.parseProperties(null);
        this._blocks[blockID].extras = this.parseUserAttributes();
        this._pPauseAndRetrieveDependencies();
        if (this._debug)
            console.log("Start parsing a " + ["external", "embed"][type] + " Bitmap for Texture");
    };
    //Block ID = 83
    AWDParser.prototype.parseCubeTexture = function (blockID) {
        //blockLength = block.len;
        var data_len;
        var i;
        this._texture_users[this._cur_block_id] = [];
        var type = this._newBlockBytes.readUnsignedByte();
        this._blocks[blockID].name = this.parseVarStr();
        for (i = 0; i < 6; i++) {
            this._texture_users[this._cur_block_id] = [];
            // External
            if (type == 0) {
                data_len = this._newBlockBytes.readUnsignedInt();
                var url;
                url = this._newBlockBytes.readUTFBytes(data_len);
                this._pAddDependency(this._cur_block_id.toString(), new URLRequest_1.URLRequest(url), false, null, true, i);
            }
            else {
                data_len = this._newBlockBytes.readUnsignedInt();
                var data = new ByteArray_1.ByteArray(data_len);
                this._newBlockBytes.readBytes(data, 0, data_len);
                this._pAddDependency(this._cur_block_id.toString(), null, false, ParserUtils_1.ParserUtils.byteArrayToImage(data), true, i);
            }
        }
        // Ignore for now
        this.parseProperties(null);
        this._blocks[blockID].extras = this.parseUserAttributes();
        this._pPauseAndRetrieveDependencies();
        if (this._debug)
            console.log("Start parsing 6 " + ["external", "embed"][type] + " Bitmaps for CubeTexture");
    };
    //Block ID = 91
    AWDParser.prototype.parseSharedMethodBlock = function (blockID) {
        var asset;
        this._blocks[blockID].name = this.parseVarStr();
        asset = this.parseSharedMethodList(blockID);
        this.parseUserAttributes();
        this._blocks[blockID].data = asset;
        this._pFinalizeAsset(asset, this._blocks[blockID].name);
        this._blocks[blockID].data = asset;
        if (this._debug)
            console.log("Parsed a EffectMethod: Name = " + asset.name + " Type = " + asset);
    };
    //Block ID = 92
    AWDParser.prototype.parseShadowMethodBlock = function (blockID) {
        this._blocks[blockID].name = this.parseVarStr();
        var light = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        var asset = this.parseShadowMethodList(light, blockID);
        if (!asset)
            return;
        this.parseUserAttributes(); // Ignore for now
        this._pFinalizeAsset(asset, this._blocks[blockID].name);
        this._blocks[blockID].data = asset;
        if (this._debug)
            console.log("Parsed a ShadowMapMethodMethod: Name = " + asset.name + " | Type = " + asset + " | Light-Name = ", light.name);
    };
    //Block ID = 253
    AWDParser.prototype.parseCommand = function (blockID) {
        var hasBlocks = (this._newBlockBytes.readUnsignedByte() == 1);
        var parentObject = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        var targetObject;
        var mtx = this.parseMatrix3D();
        var name = this.parseVarStr();
        var numCommands = this._newBlockBytes.readShort();
        var typeCommand = this._newBlockBytes.readShort();
        var props = this.parseProperties(AWDParser.commandProperties);
        switch (typeCommand) {
            case 1:
                targetObject = this._blocks[props.get(1, 0)].data;
                targetObject.transform.matrix3D = mtx;
                if (parentObject)
                    parentObject.addChild(targetObject);
                break;
        }
        if (targetObject) {
            props = this.parseProperties(AWDParser.targetProperties);
            targetObject.pivot = new Vector3D_1.Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
            targetObject.extra = this.parseUserAttributes();
        }
        this._blocks[blockID].data = targetObject;
        if (this._debug)
            console.log("Parsed a CommandBlock: Name = '" + name);
    };
    //blockID 255
    AWDParser.prototype.parseMetaData = function (blockID) {
        var props = this.parseProperties(AWDParser.metaDataProperties);
        if (this._debug) {
            console.log("Parsed a MetaDataBlock: TimeStamp         = " + props.get(1, 0));
            console.log("                        EncoderName       = " + props.get(2, "unknown"));
            console.log("                        EncoderVersion    = " + props.get(3, "unknown"));
            console.log("                        GeneratorName     = " + props.get(4, "unknown"));
            console.log("                        GeneratorVersion  = " + props.get(5, "unknown"));
        }
    };
    //blockID 254
    AWDParser.prototype.parseNameSpace = function (blockID) {
        var id = this._newBlockBytes.readUnsignedByte();
        var nameSpaceString = this.parseVarStr();
        if (this._debug)
            console.log("Parsed a NameSpaceBlock: ID = " + id + " | String = " + nameSpaceString);
    };
    // this functions reads and creates a ShadowMethodMethod
    AWDParser.prototype.parseShadowMethodList = function (light, blockID) {
        var methodType = this._newBlockBytes.readUnsignedShort();
        var shadowMethod;
        var props = this.parseProperties(this.shadowMethodListProperties);
        var targetID;
        var returnedArray;
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
            case 1002:
                shadowMethod = new ShadowNearMethod_1.ShadowNearMethod(this._blocks[props.get(1, 0)].data);
                break;
            case 1101:
                shadowMethod = new ShadowFilteredMethod_1.ShadowFilteredMethod(light);
                shadowMethod.alpha = props.get(101, 1);
                shadowMethod.epsilon = props.get(102, 0.002);
                break;
            case 1102:
                shadowMethod = new ShadowDitheredMethod_1.ShadowDitheredMethod(light, props.get(201, 5));
                shadowMethod.alpha = props.get(101, 1);
                shadowMethod.epsilon = props.get(102, 0.002);
                shadowMethod.range = props.get(103, 1);
                break;
            case 1103:
                shadowMethod = new ShadowSoftMethod_1.ShadowSoftMethod(light, props.get(201, 5));
                shadowMethod.alpha = props.get(101, 1);
                shadowMethod.epsilon = props.get(102, 0.002);
                shadowMethod.range = props.get(103, 1);
                break;
            case 1104:
                shadowMethod = new ShadowHardMethod_1.ShadowHardMethod(light);
                shadowMethod.alpha = props.get(101, 1);
                shadowMethod.epsilon = props.get(102, 0.002);
                break;
        }
        this.parseUserAttributes();
        return shadowMethod;
    };
    //Block ID 101
    AWDParser.prototype.parseSkeleton = function (blockID /*uint*/) {
        var name = this.parseVarStr();
        var num_joints = this._newBlockBytes.readUnsignedShort();
        var skeleton = new Skeleton_1.Skeleton();
        this.parseProperties(null); // Discard properties for now
        for (var joints_parsed = 0; joints_parsed < num_joints; joints_parsed++) {
            var joint;
            var ibp;
            // Ignore joint id
            this._newBlockBytes.readUnsignedShort();
            joint = new SkeletonJoint_1.SkeletonJoint();
            joint.parentIndex = this._newBlockBytes.readUnsignedShort() - 1; // 0=null in AWD
            joint.name = this.parseVarStr();
            ibp = this.parseMatrix3D();
            joint.inverseBindPose = ibp.rawData;
            // Ignore joint props/attributes for now
            this.parseProperties(null);
            this.parseUserAttributes();
            skeleton.joints.push(joint);
        }
        // Discard attributes for now
        this.parseUserAttributes();
        this._pFinalizeAsset(skeleton, name);
        this._blocks[blockID].data = skeleton;
        if (this._debug)
            console.log("Parsed a Skeleton: Name = " + skeleton.name + " | Number of Joints = " + joints_parsed);
    };
    //Block ID = 102
    AWDParser.prototype.parseSkeletonPose = function (blockID /*uint*/) {
        var name = this.parseVarStr();
        var num_joints = this._newBlockBytes.readUnsignedShort();
        this.parseProperties(null); // Ignore properties for now
        var pose = new SkeletonPose_1.SkeletonPose();
        for (var joints_parsed = 0; joints_parsed < num_joints; joints_parsed++) {
            var joint_pose;
            var has_transform;
            joint_pose = new JointPose_1.JointPose();
            has_transform = this._newBlockBytes.readUnsignedByte();
            if (has_transform == 1) {
                var mtx_data = this.parseMatrix43RawData();
                var mtx = new Matrix3D_1.Matrix3D(mtx_data);
                joint_pose.orientation.fromMatrix(mtx);
                joint_pose.translation.copyFrom(mtx.position);
                pose.jointPoses[joints_parsed] = joint_pose;
            }
        }
        // Skip attributes for now
        this.parseUserAttributes();
        this._pFinalizeAsset(pose, name);
        this._blocks[blockID].data = pose;
        if (this._debug)
            console.log("Parsed a SkeletonPose: Name = " + pose.name + " | Number of Joints = " + joints_parsed);
    };
    //blockID 103
    AWDParser.prototype.parseSkeletonAnimation = function (blockID /*uint*/) {
        var frame_dur;
        var pose_id;
        var name = this.parseVarStr();
        var clip = new SkeletonClipNode_1.SkeletonClipNode();
        var num_frames = this._newBlockBytes.readUnsignedShort();
        this.parseProperties(null); // Ignore properties for now
        for (var frames_parsed = 0; frames_parsed < num_frames; frames_parsed++) {
            pose_id = this._newBlockBytes.readUnsignedInt();
            frame_dur = this._newBlockBytes.readUnsignedShort();
            clip.addFrame(this._blocks[pose_id].data, frame_dur);
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
    };
    //Block ID = 111 /  Block ID = 112
    AWDParser.prototype.parseSpritePoseAnimation = function (blockID /*uint*/, poseOnly) {
        if (poseOnly === void 0) { poseOnly = false; }
        var subSpriteParsed;
        var x;
        var y;
        var z;
        var str_len;
        var str_end;
        var elements;
        var idx = 0;
        var clip = new VertexClipNode_1.VertexClipNode();
        var indices;
        var verts;
        var streamtypes = new Array();
        var props;
        var name = this.parseVarStr();
        var geo_id = this._newBlockBytes.readUnsignedInt();
        var graphics = this._blocks[geo_id].data;
        var uvs = this.getUVForVertexAnimation(geo_id);
        var num_frames = (!poseOnly) ? this._newBlockBytes.readUnsignedShort() : 1;
        var num_subsprites = this._newBlockBytes.readUnsignedShort();
        var num_Streams = this._newBlockBytes.readUnsignedShort();
        for (var streamsParsed = 0; streamsParsed < num_Streams; streamsParsed++)
            streamtypes.push(this._newBlockBytes.readUnsignedShort());
        props = this.parseProperties(this.spritePoseAnimationProperties);
        clip.looping = props.get(1, true);
        clip.stitchFinalFrame = props.get(2, false);
        var frame_dur;
        for (var frames_parsed = 0; frames_parsed < num_frames; frames_parsed++) {
            frame_dur = this._newBlockBytes.readUnsignedShort();
            graphics = new Graphics_1.Graphics();
            subSpriteParsed = 0;
            while (subSpriteParsed < num_subsprites) {
                streamsParsed = 0;
                str_len = this._newBlockBytes.readUnsignedInt();
                str_end = this._newBlockBytes.position + str_len;
                while (streamsParsed < num_Streams) {
                    if (streamtypes[streamsParsed] == 1) {
                        indices = graphics.getGraphicAt(subSpriteParsed).elements.indices;
                        verts = new Array();
                        idx = 0;
                        while (this._newBlockBytes.position < str_end) {
                            x = this.readNumber(this._accuracyGeo);
                            y = this.readNumber(this._accuracyGeo);
                            z = this.readNumber(this._accuracyGeo);
                            verts[idx++] = x;
                            verts[idx++] = y;
                            verts[idx++] = z;
                        }
                        elements = new TriangleElements_1.TriangleElements(new AttributesBuffer_1.AttributesBuffer());
                        elements.setIndices(indices);
                        elements.setPositions(verts);
                        elements.setUVs(uvs[subSpriteParsed]);
                        elements.setNormals(null);
                        elements.setTangents(null);
                        elements.autoDeriveNormals = false;
                        elements.autoDeriveTangents = false;
                        subSpriteParsed++;
                        graphics.addGraphic(elements);
                    }
                    else
                        this._newBlockBytes.position = str_end;
                    streamsParsed++;
                }
            }
            clip.addFrame(graphics, frame_dur);
        }
        this.parseUserAttributes();
        this._pFinalizeAsset(clip, name);
        this._blocks[blockID].data = clip;
        if (this._debug)
            console.log("Parsed a VertexClipNode: Name = " + clip.name + " | Target-Graphics-Name = " + graphics.name + " | Number of Frames = " + clip.frames.length);
    };
    //BlockID 113
    AWDParser.prototype.parseVertexAnimationSet = function (blockID /*uint*/) {
        var name = this.parseVarStr();
        var num_frames = this._newBlockBytes.readUnsignedShort();
        var props = this.parseProperties(AWDParser.vertexAnimationSetProperties);
        var skeletonFrames = new Array();
        var vertexFrames = new Array();
        var clipNode;
        for (var frames_parsed = 0; frames_parsed < num_frames; frames_parsed++) {
            clipNode = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
            if (clipNode instanceof VertexClipNode_1.VertexClipNode)
                vertexFrames.push(clipNode);
            else if (clipNode instanceof SkeletonClipNode_1.SkeletonClipNode)
                skeletonFrames.push(clipNode);
        }
        if ((vertexFrames.length == 0) && (skeletonFrames.length == 0)) {
            this._blocks[blockID].addError("Could not create this AnimationSet, because it contains no animations");
            return;
        }
        this.parseUserAttributes();
        if (vertexFrames.length > 0) {
            var newVertexAnimationSet = new VertexAnimationSet_1.VertexAnimationSet();
            for (var i = 0; i < vertexFrames.length; i++)
                newVertexAnimationSet.addAnimation(vertexFrames[i]);
            this._pFinalizeAsset(newVertexAnimationSet, name);
            this._blocks[blockID].data = newVertexAnimationSet;
            if (this._debug)
                console.log("Parsed a VertexAnimationSet: Name = " + name + " | Animations = " + newVertexAnimationSet.animations.length + " | Animation-Names = " + newVertexAnimationSet.animationNames);
        }
        else if (skeletonFrames.length > 0) {
            var newSkeletonAnimationSet = new SkeletonAnimationSet_1.SkeletonAnimationSet(props.get(1, 4)); //props.get(1,4));
            for (var i = 0; i < skeletonFrames.length; i++)
                newSkeletonAnimationSet.addAnimation(skeletonFrames[i]);
            this._pFinalizeAsset(newSkeletonAnimationSet, name);
            this._blocks[blockID].data = newSkeletonAnimationSet;
            if (this._debug)
                console.log("Parsed a SkeletonAnimationSet: Name = " + name + " | Animations = " + newSkeletonAnimationSet.animations.length + " | Animation-Names = " + newSkeletonAnimationSet.animationNames);
        }
    };
    //BlockID 122
    AWDParser.prototype.parseAnimatorSet = function (blockID /*uint*/) {
        var name = this.parseVarStr();
        var type = this._newBlockBytes.readUnsignedShort();
        var props = this.parseProperties(AWDParser.animatorSetProperties);
        var targetAnimationSet = this._blocks[this._newBlockBytes.readUnsignedInt()].data;
        var targetSpritees = new Array();
        var targetSpriteLength = this._newBlockBytes.readUnsignedShort();
        for (var i = 0; i < targetSpriteLength; i++)
            targetSpritees.push(this._blocks[this._newBlockBytes.readUnsignedInt()].data);
        var activeState = this._newBlockBytes.readUnsignedShort();
        var autoplay = (this._newBlockBytes.readUnsignedByte() == 1);
        this.parseUserAttributes();
        this.parseUserAttributes();
        var thisAnimator;
        if (type == 1)
            thisAnimator = new SkeletonAnimator_1.SkeletonAnimator(targetAnimationSet, this._blocks[props.get(1, 0)].data);
        else if (type == 2)
            thisAnimator = new VertexAnimator_1.VertexAnimator(targetAnimationSet);
        this._pFinalizeAsset(thisAnimator, name);
        this._blocks[blockID].data = thisAnimator;
        for (i = 0; i < targetSpritees.length; i++) {
            if (type == 1)
                targetSpritees[i].animator = thisAnimator;
            else if (type == 2)
                targetSpritees[i].animator = thisAnimator;
        }
        if (this._debug)
            console.log("Parsed a Animator: Name = " + name);
    };
    // this functions reads and creates a EffectMethod
    AWDParser.prototype.parseSharedMethodList = function (blockID) {
        var methodType = this._newBlockBytes.readUnsignedShort();
        var effectMethodReturn;
        var props = this.parseProperties(this.sharedMethodListProperties);
        switch (methodType) {
            // Effect Methods
            case 401:
                effectMethodReturn = new EffectColorMatrixMethod_1.EffectColorMatrixMethod(props.get(101, new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)));
                break;
            case 402:
                effectMethodReturn = new EffectColorTransformMethod_1.EffectColorTransformMethod();
                var offCol = props.get(601, 0x00000000);
                effectMethodReturn.colorTransform = new ColorTransform_1.ColorTransform(props.get(102, 1), props.get(103, 1), props.get(104, 1), props.get(101, 1), ((offCol >> 16) & 0xFF), ((offCol >> 8) & 0xFF), (offCol & 0xFF), ((offCol >> 24) & 0xFF));
                break;
            case 403:
                effectMethodReturn = new EffectEnvMapMethod_1.EffectEnvMapMethod(new SingleCubeTexture_1.SingleCubeTexture(this._blocks[props.get(1, 0)].data), props.get(101, 1));
                var targetID = props.get(2, 0);
                if (targetID > 0) {
                }
                break;
            case 404:
                effectMethodReturn = new EffectLightMapMethod_1.EffectLightMapMethod(this._blocks[props.get(1, 0)].data, this.blendModeDic[props.get(401, 10)]); //usesecondaryUV not set
                break;
            //				case 405: //ProjectiveTextureMethod
            //					targetID = props.get(1, 0);
            //					returnedArray = getAssetByID(targetID, [TextureProjector.assetType]);
            //					if (!returnedArray[0])
            //						_blocks[blockID].addError("Could not find the TextureProjector (ID = " + targetID + " ) for this ProjectiveTextureMethod");
            //					effectMethodReturn = new ProjectiveTextureMethod(returnedArray[1], blendModeDic[props.get(401, 10)]);
            //					break;
            case 406:
                effectMethodReturn = new EffectRimLightMethod_1.EffectRimLightMethod(props.get(601, 0xffffff), props.get(101, 0.4), props.get(101, 2)); //blendMode
                break;
            case 407:
                effectMethodReturn = new EffectAlphaMaskMethod_1.EffectAlphaMaskMethod(this._blocks[props.get(1, 0)].data, props.get(701, false));
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
            case 410:
                effectMethodReturn = new EffectFresnelEnvMapMethod_1.EffectFresnelEnvMapMethod(this._blocks[props.get(1, 0)].data, props.get(101, 1));
                break;
            case 411:
                effectMethodReturn = new EffectFogMethod_1.EffectFogMethod(props.get(101, 0), props.get(102, 1000), props.get(601, 0x808080));
                break;
        }
        this.parseUserAttributes();
        return effectMethodReturn;
    };
    AWDParser.prototype.parseUserAttributes = function () {
        var list_len = this._newBlockBytes.readUnsignedInt();
        if (list_len > 0) {
            var list_end = this._newBlockBytes.position + list_len;
            var attributes = {};
            for (var attibuteCnt = 0; this._newBlockBytes.position < list_end; attibuteCnt++) {
                var ns_id;
                var attr_key;
                var attr_type;
                var attr_len;
                var attr_val;
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
                attributes[attr_key] = attr_val;
                if (this._debug)
                    console.log("attribute = name: " + attr_key + "  / value = " + attr_val);
            }
        }
        return attributes;
    };
    AWDParser.prototype.parseProperties = function (expected) {
        var list_len = this._newBlockBytes.readUnsignedInt();
        var props = new AWDProperties();
        var list_end = this._newBlockBytes.position + list_len;
        if (expected) {
            var len;
            var key;
            var type;
            for (var propertyCnt = 0; this._newBlockBytes.position < list_end; propertyCnt++) {
                key = this._newBlockBytes.readUnsignedShort();
                len = this._newBlockBytes.readUnsignedInt();
                if ((this._newBlockBytes.position + len) > list_end) {
                    console.log("           Error in reading property # " + propertyCnt + " = skipped to end of propertie-list");
                    this._newBlockBytes.position = list_end;
                    return props;
                }
                if (expected[key]) {
                    type = expected[key];
                    props.set(key, this.parseAttrValue(type, len));
                }
                else {
                    this._newBlockBytes.position += len;
                }
            }
        }
        else {
            this._newBlockBytes.position = list_end;
        }
        return props;
    };
    AWDParser.prototype.parseAttrValue = function (type, len) {
        var elem_len;
        var read_func;
        var accuracy;
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
            case AWDParser.GEO_NUMBER:
                accuracy = this._accuracyGeo;
            case AWDParser.MATRIX_NUMBER:
                accuracy = this._accuracyMatrix;
            case AWDParser.PROPERTY_NUMBER:
                accuracy = this._accuracyProps;
            default:
                if (accuracy) {
                    elem_len = 8;
                    read_func = this._newBlockBytes.readDouble;
                }
                else {
                    elem_len = 4;
                    read_func = this._newBlockBytes.readFloat;
                }
        }
        if (elem_len < len) {
            var list = [];
            var num_elems = len / elem_len;
            for (var num_read = 0; num_read < num_elems; num_read++)
                list[num_read] = read_func.call(this._newBlockBytes);
            return list;
        }
        else {
            return read_func.call(this._newBlockBytes);
        }
    };
    AWDParser.prototype.parseHeader = function () {
        this._byteData.position = 3; // Skip magic string and parse version
        this._version[0] = this._byteData.readUnsignedByte();
        this._version[1] = this._byteData.readUnsignedByte();
        var flags = this._byteData.readUnsignedShort(); // Parse bit flags
        this._streaming = BitFlags.test(flags, BitFlags.FLAG1);
        // if we set _accuracyOnBlocks, the precision-values are read from each block-header.
        if ((this._version[0] == 2) && (this._version[1] == 1)) {
            this._accuracyMatrix = BitFlags.test(flags, BitFlags.FLAG2);
            this._accuracyGeo = BitFlags.test(flags, BitFlags.FLAG3);
            this._accuracyProps = BitFlags.test(flags, BitFlags.FLAG4);
        }
        this._compression = this._byteData.readUnsignedByte(); // compression
        if (this._debug) {
            console.log("Import AWDFile of version = " + this._version[0] + " - " + this._version[1]);
            console.log("Global Settings = Compression = " + this._compression + " | Streaming = " + this._streaming + " | Matrix-Precision = " + this._accuracyMatrix + " | Graphics-Precision = " + this._accuracyGeo + " | Properties-Precision = " + this._accuracyProps);
        }
        // Check file integrity
        var body_len = this._byteData.readUnsignedInt();
        if (!this._streaming && body_len != this._byteData.getBytesAvailable())
            this._pDieWithError('AWD2 body length does not match header integrity field');
    };
    // Helper - functions
    AWDParser.prototype.getUVForVertexAnimation = function (spriteID /*uint*/) {
        if (this._blocks[spriteID].data instanceof Sprite_1.Sprite)
            spriteID = this._blocks[spriteID].geoID;
        if (this._blocks[spriteID].uvsForVertexAnimation)
            return this._blocks[spriteID].uvsForVertexAnimation;
        var graphics = this._blocks[spriteID].data;
        var elements;
        var uvsForVertexAnimation = this._blocks[spriteID].uvsForVertexAnimation = new Array();
        var len = graphics.count;
        for (var geoCnt = 0; geoCnt < len; geoCnt++) {
            elements = graphics.getGraphicAt(geoCnt).elements;
            uvsForVertexAnimation[geoCnt] = elements.uvs.get(elements.numVertices);
        }
        return this._blocks[spriteID].uvsForVertexAnimation;
    };
    AWDParser.prototype.parseVarStr = function () {
        return this._newBlockBytes.readUTFBytes(this._newBlockBytes.readUnsignedShort());
    };
    AWDParser.prototype.readNumber = function (precision) {
        if (precision === void 0) { precision = false; }
        if (precision)
            return this._newBlockBytes.readDouble();
        return this._newBlockBytes.readFloat();
    };
    AWDParser.prototype.parseMatrix3D = function () {
        return new Matrix3D_1.Matrix3D(this.parseMatrix43RawData());
    };
    AWDParser.prototype.parseMatrix32RawData = function () {
        var mtx_raw = new Float32Array(6);
        for (var i = 0; i < 6; i++)
            mtx_raw[i] = this._newBlockBytes.readFloat();
        return mtx_raw;
    };
    AWDParser.prototype.parseMatrix43RawData = function () {
        var mtx_raw = new Float32Array(16);
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
    };
    AWDParser.COMPRESSIONMODE_LZMA = "lzma";
    AWDParser.UNCOMPRESSED = 0;
    AWDParser.DEFLATE = 1;
    AWDParser.LZMA = 2;
    AWDParser.INT8 = 1;
    AWDParser.INT16 = 2;
    AWDParser.INT32 = 3;
    AWDParser.UINT8 = 4;
    AWDParser.UINT16 = 5;
    AWDParser.UINT32 = 6;
    AWDParser.FLOAT32 = 7;
    AWDParser.FLOAT64 = 8;
    AWDParser.BOOL = 21;
    AWDParser.COLOR = 22;
    AWDParser.BADDR = 23;
    AWDParser.AWDSTRING = 31;
    AWDParser.AWDBYTEARRAY = 32;
    AWDParser.VECTOR2x1 = 41;
    AWDParser.VECTOR3x1 = 42;
    AWDParser.VECTOR4x1 = 43;
    AWDParser.MTX3x2 = 44;
    AWDParser.MTX3x3 = 45;
    AWDParser.MTX4x3 = 46;
    AWDParser.MTX4x4 = 47;
    AWDParser.GEO_NUMBER = 48;
    AWDParser.MATRIX_NUMBER = 49;
    AWDParser.PROPERTY_NUMBER = 50;
    AWDParser.textFormatProperties = {
        1: AWDParser.UINT16,
        2: AWDParser.FLOAT32,
        3: AWDParser.UINT8,
        4: AWDParser.UINT8,
        5: AWDParser.UINT8,
        6: AWDParser.UINT8,
        7: AWDParser.FLOAT32,
        8: AWDParser.FLOAT32,
        9: AWDParser.FLOAT32,
        10: AWDParser.FLOAT32 }; //line spacing
    AWDParser.textFieldProperties = {
        1: AWDParser.BOOL,
        3: AWDParser.BOOL,
        4: AWDParser.BOOL,
        5: AWDParser.BOOL,
        7: AWDParser.UINT8,
        8: AWDParser.UINT8,
        9: AWDParser.UINT8 };
    AWDParser.textFieldTypes = ["static", "dynamic", "input", "input"];
    AWDParser.movieClipProperties = {
        1: AWDParser.FLOAT32,
        2: AWDParser.UINT16,
        3: AWDParser.UINT8 }; // scripting-language right now its always as2
    AWDParser.graphicsProperties = {
        1: AWDParser.GEO_NUMBER,
        2: AWDParser.GEO_NUMBER };
    AWDParser.elementsProperties = {
        1: AWDParser.GEO_NUMBER,
        2: AWDParser.GEO_NUMBER };
    AWDParser.primitiveProperties = {
        101: AWDParser.GEO_NUMBER,
        102: AWDParser.GEO_NUMBER,
        103: AWDParser.GEO_NUMBER,
        110: AWDParser.GEO_NUMBER,
        111: AWDParser.GEO_NUMBER,
        301: AWDParser.UINT16,
        302: AWDParser.UINT16,
        303: AWDParser.UINT16,
        701: AWDParser.BOOL,
        702: AWDParser.BOOL,
        703: AWDParser.BOOL,
        704: AWDParser.BOOL };
    AWDParser.primitiveTypes = ["Unsupported Type-ID", "PrimitivePlanePrefab", "PrimitiveCubePrefab", "PrimitiveSpherePrefab", "PrimitiveCylinderPrefab", "PrimitivesConePrefab", "PrimitivesCapsulePrefab", "PrimitivesTorusPrefab"];
    AWDParser.containerProperties = {
        1: AWDParser.MATRIX_NUMBER,
        2: AWDParser.MATRIX_NUMBER,
        3: AWDParser.MATRIX_NUMBER,
        4: AWDParser.UINT8 };
    AWDParser.spriteInstanceProperties = {
        1: AWDParser.MATRIX_NUMBER,
        2: AWDParser.MATRIX_NUMBER,
        3: AWDParser.MATRIX_NUMBER,
        4: AWDParser.UINT8,
        5: AWDParser.BOOL };
    AWDParser.lightProperties = {
        1: AWDParser.PROPERTY_NUMBER,
        2: AWDParser.PROPERTY_NUMBER,
        3: AWDParser.COLOR,
        4: AWDParser.PROPERTY_NUMBER,
        5: AWDParser.PROPERTY_NUMBER,
        6: AWDParser.BOOL,
        7: AWDParser.COLOR,
        8: AWDParser.PROPERTY_NUMBER,
        9: AWDParser.UINT8,
        10: AWDParser.UINT8,
        11: AWDParser.PROPERTY_NUMBER,
        12: AWDParser.UINT16,
        21: AWDParser.MATRIX_NUMBER,
        22: AWDParser.MATRIX_NUMBER,
        23: AWDParser.MATRIX_NUMBER };
    AWDParser.cameraProperties = {
        101: AWDParser.PROPERTY_NUMBER,
        102: AWDParser.PROPERTY_NUMBER,
        103: AWDParser.PROPERTY_NUMBER,
        104: AWDParser.PROPERTY_NUMBER };
    AWDParser.cameraPivotProperties = {
        1: AWDParser.MATRIX_NUMBER,
        2: AWDParser.MATRIX_NUMBER,
        3: AWDParser.MATRIX_NUMBER,
        4: AWDParser.UINT8 };
    // (1=color, 2=bitmap url, 10=alpha, 11=alpha_blending, 12=alpha_threshold, 13=repeat)
    AWDParser.materialProperties = {
        1: AWDParser.INT32,
        2: AWDParser.BADDR,
        10: AWDParser.PROPERTY_NUMBER,
        11: AWDParser.BOOL,
        12: AWDParser.PROPERTY_NUMBER,
        13: AWDParser.BOOL };
    AWDParser.material_v1Properties = { 1: AWDParser.UINT32,
        2: AWDParser.BADDR,
        3: AWDParser.BADDR,
        4: AWDParser.UINT8,
        5: AWDParser.BOOL,
        6: AWDParser.BOOL,
        7: AWDParser.BOOL,
        8: AWDParser.BOOL,
        9: AWDParser.UINT8,
        10: AWDParser.PROPERTY_NUMBER,
        11: AWDParser.BOOL,
        12: AWDParser.PROPERTY_NUMBER,
        13: AWDParser.BOOL,
        15: AWDParser.PROPERTY_NUMBER,
        16: AWDParser.UINT32,
        17: AWDParser.BADDR,
        18: AWDParser.PROPERTY_NUMBER,
        19: AWDParser.PROPERTY_NUMBER,
        20: AWDParser.UINT32,
        21: AWDParser.BADDR,
        22: AWDParser.BADDR };
    AWDParser.method_v1Properties = {
        1: AWDParser.BADDR,
        2: AWDParser.BADDR,
        3: AWDParser.BADDR,
        101: AWDParser.PROPERTY_NUMBER,
        102: AWDParser.PROPERTY_NUMBER,
        103: AWDParser.PROPERTY_NUMBER,
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
        801: AWDParser.MTX4x4 };
    AWDParser.commandProperties = {
        1: AWDParser.BADDR };
    AWDParser.targetProperties = {
        1: AWDParser.MATRIX_NUMBER,
        2: AWDParser.MATRIX_NUMBER,
        3: AWDParser.MATRIX_NUMBER,
        4: AWDParser.UINT8 };
    AWDParser.metaDataProperties = {
        1: AWDParser.UINT32,
        2: AWDParser.AWDSTRING,
        3: AWDParser.AWDSTRING,
        4: AWDParser.AWDSTRING,
        5: AWDParser.AWDSTRING };
    AWDParser.vertexAnimationSetProperties = {
        1: AWDParser.UINT16 };
    AWDParser.animatorSetProperties = { 1: AWDParser.BADDR };
    return AWDParser;
}(ParserBase_1.ParserBase));
exports.AWDParser = AWDParser;
var ElementType = (function () {
    function ElementType() {
    }
    ElementType.STANDART_STREAMS = 0;
    ElementType.CONCENATED_STREAMS = 1;
    ElementType.SHARED_BUFFER = 2;
    return ElementType;
}());
var AWDProperties = (function () {
    function AWDProperties() {
    }
    AWDProperties.prototype.set = function (key, value) {
        this[key] = value;
    };
    AWDProperties.prototype.get = function (key, fallback) {
        return (this[key] || fallback);
    };
    return AWDProperties;
}());
/**
 *
 */
var BitFlags = (function () {
    function BitFlags() {
    }
    BitFlags.test = function (flags, testFlag) {
        return (flags & testFlag) == testFlag;
    };
    BitFlags.FLAG1 = 1;
    BitFlags.FLAG2 = 2;
    BitFlags.FLAG3 = 4;
    BitFlags.FLAG4 = 8;
    BitFlags.FLAG5 = 16;
    BitFlags.FLAG6 = 32;
    BitFlags.FLAG7 = 64;
    BitFlags.FLAG8 = 128;
    BitFlags.FLAG9 = 256;
    BitFlags.FLAG10 = 512;
    BitFlags.FLAG11 = 1024;
    BitFlags.FLAG12 = 2048;
    BitFlags.FLAG13 = 4096;
    BitFlags.FLAG14 = 8192;
    BitFlags.FLAG15 = 16384;
    BitFlags.FLAG16 = 32768;
    return BitFlags;
}());
