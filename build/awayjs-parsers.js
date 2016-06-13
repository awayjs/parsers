require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var AWDParser_1 = require("./lib/AWDParser");
exports.AWDParser = AWDParser_1.AWDParser;
var Max3DSParser_1 = require("./lib/Max3DSParser");
exports.Max3DSParser = Max3DSParser_1.Max3DSParser;
var MD2Parser_1 = require("./lib/MD2Parser");
exports.MD2Parser = MD2Parser_1.MD2Parser;
var MD5AnimParser_1 = require("./lib/MD5AnimParser");
exports.MD5AnimParser = MD5AnimParser_1.MD5AnimParser;
var MD5MeshParser_1 = require("./lib/MD5MeshParser");
exports.MD5MeshParser = MD5MeshParser_1.MD5MeshParser;
var OBJParser_1 = require("./lib/OBJParser");
exports.OBJParser = OBJParser_1.OBJParser;
var Parsers_1 = require("./lib/Parsers");
exports.Parsers = Parsers_1.Parsers;
},{"./lib/AWDParser":"awayjs-parsers/lib/AWDParser","./lib/MD2Parser":"awayjs-parsers/lib/MD2Parser","./lib/MD5AnimParser":"awayjs-parsers/lib/MD5AnimParser","./lib/MD5MeshParser":"awayjs-parsers/lib/MD5MeshParser","./lib/Max3DSParser":"awayjs-parsers/lib/Max3DSParser","./lib/OBJParser":"awayjs-parsers/lib/OBJParser","./lib/Parsers":"awayjs-parsers/lib/Parsers"}],"awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils":[function(require,module,exports){
"use strict";
var AWD3Utils = (function () {
    function AWD3Utils() {
    }
    AWD3Utils.BLOCKSTATE_FINALIZE = 0;
    AWD3Utils.BLOCKSTATE_INVALID = 1;
    AWD3Utils.BLOCKSTATE_LOAD_DEPENDENICES = 2;
    AWD3Utils.BLOCKSTATE_NO_ASSET = 3;
    AWD3Utils.COMPRESSIONMODE_LZMA = "lzma";
    AWD3Utils.UNCOMPRESSED = 0;
    AWD3Utils.DEFLATE = 1;
    AWD3Utils.LZMA = 2;
    AWD3Utils.INT8 = 1;
    AWD3Utils.INT16 = 2;
    AWD3Utils.INT32 = 3;
    AWD3Utils.UINT8 = 4;
    AWD3Utils.UINT16 = 5;
    AWD3Utils.UINT32 = 6;
    AWD3Utils.FLOAT32 = 7;
    AWD3Utils.FLOAT64 = 8;
    AWD3Utils.BOOL = 21;
    AWD3Utils.COLOR = 22;
    AWD3Utils.BADDR = 23;
    AWD3Utils.AWDSTRING = 31;
    AWD3Utils.AWDBYTEARRAY = 32;
    AWD3Utils.VECTOR2x1 = 41;
    AWD3Utils.VECTOR3x1 = 42;
    AWD3Utils.VECTOR4x1 = 43;
    AWD3Utils.MTX3x2 = 44;
    AWD3Utils.MTX3x3 = 45;
    AWD3Utils.MTX4x3 = 46;
    AWD3Utils.MTX4x4 = 47;
    return AWD3Utils;
}());
exports.AWD3Utils = AWD3Utils;
},{}],"awayjs-parsers/lib/AWD3ParserUtils/AWDBlock":[function(require,module,exports){
"use strict";
var AWD3Utils_1 = require("../AWD3ParserUtils/AWD3Utils");
var AWDBlock = (function () {
    function AWDBlock(this_id, this_type) {
        this.type = this_type;
        this.id = this_id;
        this.state = AWD3Utils_1.AWD3Utils.BLOCKSTATE_FINALIZE;
        this.dependencies_data = Array();
        this.dependencies_urls = Array();
        if (this_type == 83) {
            this.loaded_dependencies = Array(6);
        }
        this.loaded_dependencies_cnt = 0;
    }
    AWDBlock.prototype.dispose = function () {
        this.id = null;
        this.bytes = null;
        this.errorMessages = null;
        this.uvsForVertexAnimation = null;
    };
    AWDBlock.prototype.addError = function (errorMsg) {
        if (!this.errorMessages)
            this.errorMessages = new Array();
        this.errorMessages.push(errorMsg);
    };
    return AWDBlock;
}());
exports.AWDBlock = AWDBlock;
},{"../AWD3ParserUtils/AWD3Utils":"awayjs-parsers/lib/AWD3ParserUtils/AWD3Utils"}],"awayjs-parsers/lib/AWDParser":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttributesBuffer_1 = require("awayjs-core/lib/attributes/AttributesBuffer");
var Float3Attributes_1 = require("awayjs-core/lib/attributes/Float3Attributes");
var Float2Attributes_1 = require("awayjs-core/lib/attributes/Float2Attributes");
var Byte4Attributes_1 = require("awayjs-core/lib/attributes/Byte4Attributes");
var BitmapImageCube_1 = require("awayjs-core/lib/image/BitmapImageCube");
var BlendMode_1 = require("awayjs-core/lib/image/BlendMode");
var Sampler2D_1 = require("awayjs-core/lib/image/Sampler2D");
var ColorTransform_1 = require("awayjs-core/lib/geom/ColorTransform");
var Matrix3D_1 = require("awayjs-core/lib/geom/Matrix3D");
var Vector3D_1 = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat_1 = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("awayjs-core/lib/net/URLRequest");
var ParserBase_1 = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils_1 = require("awayjs-core/lib/parsers/ParserUtils");
var PerspectiveProjection_1 = require("awayjs-core/lib/projections/PerspectiveProjection");
var OrthographicProjection_1 = require("awayjs-core/lib/projections/OrthographicProjection");
var OrthographicOffCenterProjection_1 = require("awayjs-core/lib/projections/OrthographicOffCenterProjection");
var ByteArray_1 = require("awayjs-core/lib/utils/ByteArray");
var DisplayObjectContainer_1 = require("awayjs-display/lib/display/DisplayObjectContainer");
var Graphics_1 = require("awayjs-display/lib/graphics/Graphics");
var TriangleElements_1 = require("awayjs-display/lib/graphics/TriangleElements");
var DirectionalLight_1 = require("awayjs-display/lib/display/DirectionalLight");
var PointLight_1 = require("awayjs-display/lib/display/PointLight");
var Camera_1 = require("awayjs-display/lib/display/Camera");
var Sprite_1 = require("awayjs-display/lib/display/Sprite");
var Billboard_1 = require("awayjs-display/lib/display/Billboard");
var Skybox_1 = require("awayjs-display/lib/display/Skybox");
var DefaultMaterialManager_1 = require("awayjs-display/lib/managers/DefaultMaterialManager");
var StaticLightPicker_1 = require("awayjs-display/lib/materials/lightpickers/StaticLightPicker");
var CubeMapShadowMapper_1 = require("awayjs-display/lib/materials/shadowmappers/CubeMapShadowMapper");
var DirectionalShadowMapper_1 = require("awayjs-display/lib/materials/shadowmappers/DirectionalShadowMapper");
var PrefabBase_1 = require("awayjs-display/lib/prefabs/PrefabBase");
var PrimitiveCapsulePrefab_1 = require("awayjs-display/lib/prefabs/PrimitiveCapsulePrefab");
var PrimitiveConePrefab_1 = require("awayjs-display/lib/prefabs/PrimitiveConePrefab");
var PrimitiveCubePrefab_1 = require("awayjs-display/lib/prefabs/PrimitiveCubePrefab");
var PrimitiveCylinderPrefab_1 = require("awayjs-display/lib/prefabs/PrimitiveCylinderPrefab");
var PrimitivePlanePrefab_1 = require("awayjs-display/lib/prefabs/PrimitivePlanePrefab");
var PrimitiveSpherePrefab_1 = require("awayjs-display/lib/prefabs/PrimitiveSpherePrefab");
var PrimitiveTorusPrefab_1 = require("awayjs-display/lib/prefabs/PrimitiveTorusPrefab");
var SingleCubeTexture_1 = require("awayjs-display/lib/textures/SingleCubeTexture");
var Single2DTexture_1 = require("awayjs-display/lib/textures/Single2DTexture");
var VertexAnimationSet_1 = require("awayjs-renderergl/lib/animators/VertexAnimationSet");
var VertexAnimator_1 = require("awayjs-renderergl/lib/animators/VertexAnimator");
var SkeletonAnimationSet_1 = require("awayjs-renderergl/lib/animators/SkeletonAnimationSet");
var SkeletonAnimator_1 = require("awayjs-renderergl/lib/animators/SkeletonAnimator");
var JointPose_1 = require("awayjs-renderergl/lib/animators/data/JointPose");
var Skeleton_1 = require("awayjs-renderergl/lib/animators/data/Skeleton");
var SkeletonPose_1 = require("awayjs-renderergl/lib/animators/data/SkeletonPose");
var SkeletonJoint_1 = require("awayjs-renderergl/lib/animators/data/SkeletonJoint");
var SkeletonClipNode_1 = require("awayjs-renderergl/lib/animators/nodes/SkeletonClipNode");
var VertexClipNode_1 = require("awayjs-renderergl/lib/animators/nodes/VertexClipNode");
var MethodMaterialMode_1 = require("awayjs-methodmaterials/lib/MethodMaterialMode");
var MethodMaterial_1 = require("awayjs-methodmaterials/lib/MethodMaterial");
var AmbientEnvMapMethod_1 = require("awayjs-methodmaterials/lib/methods/AmbientEnvMapMethod");
var DiffuseDepthMethod_1 = require("awayjs-methodmaterials/lib/methods/DiffuseDepthMethod");
var DiffuseCelMethod_1 = require("awayjs-methodmaterials/lib/methods/DiffuseCelMethod");
var DiffuseGradientMethod_1 = require("awayjs-methodmaterials/lib/methods/DiffuseGradientMethod");
var DiffuseLightMapMethod_1 = require("awayjs-methodmaterials/lib/methods/DiffuseLightMapMethod");
var DiffuseWrapMethod_1 = require("awayjs-methodmaterials/lib/methods/DiffuseWrapMethod");
var EffectAlphaMaskMethod_1 = require("awayjs-methodmaterials/lib/methods/EffectAlphaMaskMethod");
var EffectColorMatrixMethod_1 = require("awayjs-methodmaterials/lib/methods/EffectColorMatrixMethod");
var EffectColorTransformMethod_1 = require("awayjs-methodmaterials/lib/methods/EffectColorTransformMethod");
var EffectEnvMapMethod_1 = require("awayjs-methodmaterials/lib/methods/EffectEnvMapMethod");
var EffectFogMethod_1 = require("awayjs-methodmaterials/lib/methods/EffectFogMethod");
var EffectFresnelEnvMapMethod_1 = require("awayjs-methodmaterials/lib/methods/EffectFresnelEnvMapMethod");
var EffectLightMapMethod_1 = require("awayjs-methodmaterials/lib/methods/EffectLightMapMethod");
var EffectRimLightMethod_1 = require("awayjs-methodmaterials/lib/methods/EffectRimLightMethod");
var NormalSimpleWaterMethod_1 = require("awayjs-methodmaterials/lib/methods/NormalSimpleWaterMethod");
var ShadowDitheredMethod_1 = require("awayjs-methodmaterials/lib/methods/ShadowDitheredMethod");
var ShadowFilteredMethod_1 = require("awayjs-methodmaterials/lib/methods/ShadowFilteredMethod");
var SpecularFresnelMethod_1 = require("awayjs-methodmaterials/lib/methods/SpecularFresnelMethod");
var ShadowHardMethod_1 = require("awayjs-methodmaterials/lib/methods/ShadowHardMethod");
var SpecularAnisotropicMethod_1 = require("awayjs-methodmaterials/lib/methods/SpecularAnisotropicMethod");
var SpecularCelMethod_1 = require("awayjs-methodmaterials/lib/methods/SpecularCelMethod");
var SpecularPhongMethod_1 = require("awayjs-methodmaterials/lib/methods/SpecularPhongMethod");
var ShadowNearMethod_1 = require("awayjs-methodmaterials/lib/methods/ShadowNearMethod");
var ShadowSoftMethod_1 = require("awayjs-methodmaterials/lib/methods/ShadowSoftMethod");
var BasicMaterial_1 = require("awayjs-display/lib/materials/BasicMaterial");
var AS2SceneGraphFactory_1 = require("awayjs-player/lib/factories/AS2SceneGraphFactory");
var Timeline_1 = require("awayjs-display/lib/base/Timeline");
var AssetLibrary_1 = require("awayjs-core/lib/library/AssetLibrary");
var Font_1 = require("awayjs-display/lib/text/Font");
var TesselatedFontTable_1 = require("awayjs-display/lib/text/TesselatedFontTable");
var TextFormat_1 = require("awayjs-display/lib/text/TextFormat");
var AWDBlock_1 = require("./AWD3ParserUtils/AWDBlock");
var Rectangle_1 = require("awayjs-core/lib/geom/Rectangle");
var Style_1 = require("awayjs-display/lib/base/Style");
var Matrix_1 = require("awayjs-core/lib/geom/Matrix");
var MappingMode_1 = require("awayjs-display/lib/textures/MappingMode");
var ElementsType_1 = require("awayjs-display/lib/graphics/ElementsType");
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
                    var curve_elements = new TriangleElements_1.TriangleElements(vertexBuffer);
                    curve_elements.setPositions(new Float2Attributes_1.Float2Attributes(vertexBuffer));
                    if (attr_count == 20)
                        curve_elements.setCustomAttributes("curves", new Float3Attributes_1.Float3Attributes(vertexBuffer));
                    else if (attr_count == 12)
                        curve_elements.setCustomAttributes("curves", new Byte4Attributes_1.Byte4Attributes(vertexBuffer, false));
                    //add UVs if they exist in the data
                    if (attr_count == 28)
                        curve_elements.setUVs(new Float2Attributes_1.Float2Attributes(vertexBuffer));
                    new_font_style.setChar(font_style_char.toString(), curve_elements, char_width);
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
},{"./AWD3ParserUtils/AWDBlock":"awayjs-parsers/lib/AWD3ParserUtils/AWDBlock","awayjs-core/lib/attributes/AttributesBuffer":undefined,"awayjs-core/lib/attributes/Byte4Attributes":undefined,"awayjs-core/lib/attributes/Float2Attributes":undefined,"awayjs-core/lib/attributes/Float3Attributes":undefined,"awayjs-core/lib/geom/ColorTransform":undefined,"awayjs-core/lib/geom/Matrix":undefined,"awayjs-core/lib/geom/Matrix3D":undefined,"awayjs-core/lib/geom/Rectangle":undefined,"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/image/BitmapImageCube":undefined,"awayjs-core/lib/image/BlendMode":undefined,"awayjs-core/lib/image/Sampler2D":undefined,"awayjs-core/lib/library/AssetLibrary":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-core/lib/projections/OrthographicOffCenterProjection":undefined,"awayjs-core/lib/projections/OrthographicProjection":undefined,"awayjs-core/lib/projections/PerspectiveProjection":undefined,"awayjs-core/lib/utils/ByteArray":undefined,"awayjs-display/lib/base/Style":undefined,"awayjs-display/lib/base/Timeline":undefined,"awayjs-display/lib/display/Billboard":undefined,"awayjs-display/lib/display/Camera":undefined,"awayjs-display/lib/display/DirectionalLight":undefined,"awayjs-display/lib/display/DisplayObjectContainer":undefined,"awayjs-display/lib/display/PointLight":undefined,"awayjs-display/lib/display/Skybox":undefined,"awayjs-display/lib/display/Sprite":undefined,"awayjs-display/lib/graphics/ElementsType":undefined,"awayjs-display/lib/graphics/Graphics":undefined,"awayjs-display/lib/graphics/TriangleElements":undefined,"awayjs-display/lib/managers/DefaultMaterialManager":undefined,"awayjs-display/lib/materials/BasicMaterial":undefined,"awayjs-display/lib/materials/lightpickers/StaticLightPicker":undefined,"awayjs-display/lib/materials/shadowmappers/CubeMapShadowMapper":undefined,"awayjs-display/lib/materials/shadowmappers/DirectionalShadowMapper":undefined,"awayjs-display/lib/prefabs/PrefabBase":undefined,"awayjs-display/lib/prefabs/PrimitiveCapsulePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveConePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveCubePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveCylinderPrefab":undefined,"awayjs-display/lib/prefabs/PrimitivePlanePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveSpherePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveTorusPrefab":undefined,"awayjs-display/lib/text/Font":undefined,"awayjs-display/lib/text/TesselatedFontTable":undefined,"awayjs-display/lib/text/TextFormat":undefined,"awayjs-display/lib/textures/MappingMode":undefined,"awayjs-display/lib/textures/Single2DTexture":undefined,"awayjs-display/lib/textures/SingleCubeTexture":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/MethodMaterialMode":undefined,"awayjs-methodmaterials/lib/methods/AmbientEnvMapMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseCelMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseDepthMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseGradientMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseLightMapMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseWrapMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectAlphaMaskMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectColorMatrixMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectColorTransformMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectEnvMapMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectFogMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectFresnelEnvMapMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectLightMapMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectRimLightMethod":undefined,"awayjs-methodmaterials/lib/methods/NormalSimpleWaterMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowDitheredMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowFilteredMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowHardMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowNearMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowSoftMethod":undefined,"awayjs-methodmaterials/lib/methods/SpecularAnisotropicMethod":undefined,"awayjs-methodmaterials/lib/methods/SpecularCelMethod":undefined,"awayjs-methodmaterials/lib/methods/SpecularFresnelMethod":undefined,"awayjs-methodmaterials/lib/methods/SpecularPhongMethod":undefined,"awayjs-player/lib/factories/AS2SceneGraphFactory":undefined,"awayjs-renderergl/lib/animators/SkeletonAnimationSet":undefined,"awayjs-renderergl/lib/animators/SkeletonAnimator":undefined,"awayjs-renderergl/lib/animators/VertexAnimationSet":undefined,"awayjs-renderergl/lib/animators/VertexAnimator":undefined,"awayjs-renderergl/lib/animators/data/JointPose":undefined,"awayjs-renderergl/lib/animators/data/Skeleton":undefined,"awayjs-renderergl/lib/animators/data/SkeletonJoint":undefined,"awayjs-renderergl/lib/animators/data/SkeletonPose":undefined,"awayjs-renderergl/lib/animators/nodes/SkeletonClipNode":undefined,"awayjs-renderergl/lib/animators/nodes/VertexClipNode":undefined}],"awayjs-parsers/lib/FNTParser":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AssetLibrary_1 = require("awayjs-core/lib/library/AssetLibrary");
var URLLoaderDataFormat_1 = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("awayjs-core/lib/net/URLRequest");
var ParserBase_1 = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils_1 = require("awayjs-core/lib/parsers/ParserUtils");
var XmlUtils_1 = require("awayjs-core/lib/utils/XmlUtils");
var BitmapFontTable_1 = require("awayjs-display/lib/text/BitmapFontTable");
var Font_1 = require("awayjs-display/lib/text/Font");
/**
 * TextureAtlasParser provides a "parser" for natively supported image types (jpg, png). While it simply loads bytes into
 * a loader object, it wraps it in a BitmapImage2DResource so resource management can happen consistently without
 * exception cases.
 */
var FNTParser = (function (_super) {
    __extends(FNTParser, _super);
    /**
     * Creates a new TextureAtlasParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    function FNTParser() {
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.TEXT);
        this._parseState = 0;
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    FNTParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        var supports = extension == "fnt";
        if (supports) {
            console.log("supportsType fnt = " + extension);
        }
        return extension == "fnt";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    FNTParser.supportsData = function (data) {
        try {
            var content = ParserUtils_1.ParserUtils.toString(data);
            if (content.indexOf("font") != -1 || content.indexOf("Font") != -1) {
                console.log("supportsData fnt");
                return true;
            }
            return false;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * @inheritDoc
     */
    FNTParser.prototype._iResolveDependency = function (resourceDependency) {
        if (resourceDependency.assets.length) {
            this._bitmapFontTable.add_page(resourceDependency.assets[0]);
            this._pFinalizeAsset(resourceDependency.assets[0]);
            this._parseState = FNTParserState.PARSE_CHARS;
        }
        else {
            this._parseState = FNTParserState.PARSE_COMPLETE;
        }
    };
    /**
     * @inheritDoc
     */
    FNTParser.prototype._iResolveDependencyFailure = function (resourceDependency) {
        this._parseState = FNTParserState.PARSE_COMPLETE;
    };
    /**
     * @inheritDoc
     */
    FNTParser.prototype._pProceedParsing = function () {
        var nodes;
        switch (this._parseState) {
            case FNTParserState.PARSE_XML:
                try {
                    this._doc = XmlUtils_1.XmlUtils.getChildrenWithTag(XmlUtils_1.XmlUtils.strToXml(this._pGetTextData()), "font")[0];
                    var page_node = XmlUtils_1.XmlUtils.getChildrenWithTag(this._doc, "pages")[0];
                    var all_pages = XmlUtils_1.XmlUtils.getChildrenWithTag(page_node, "page");
                    var len = all_pages.length;
                    // todo: correctly support multiple pages
                    for (var i = 0; i < len; i++) {
                        this._imagePath = XmlUtils_1.XmlUtils.readAttributeValue(all_pages[i], "file");
                    }
                    var char_node = XmlUtils_1.XmlUtils.getChildrenWithTag(this._doc, "chars")[0];
                    this._chars = XmlUtils_1.XmlUtils.getChildrenWithTag(char_node, "char");
                    this._parseState = FNTParserState.PARSE_IMAGE;
                    var info_node = XmlUtils_1.XmlUtils.getChildrenWithTag(this._doc, "info")[0];
                    var common_node = XmlUtils_1.XmlUtils.getChildrenWithTag(this._doc, "common")[0];
                    var font_name = XmlUtils_1.XmlUtils.readAttributeValue(info_node, "face");
                    this._font = AssetLibrary_1.AssetLibrary.getAsset(font_name);
                    if (this._font == undefined) {
                        this._font = new Font_1.Font();
                        this._font.name = font_name;
                    }
                    var bold = XmlUtils_1.XmlUtils.readAttributeValue(info_node, "bold");
                    if (bold != "0")
                        font_name += "_bold";
                    var italic = XmlUtils_1.XmlUtils.readAttributeValue(info_node, "italic");
                    if (italic != "0")
                        font_name += "_italic";
                    this._bitmapFontTable = this._font.get_font_table(font_name, BitmapFontTable_1.BitmapFontTable.assetType);
                    var size = XmlUtils_1.XmlUtils.readAttributeValue(info_node, "size");
                    this._bitmapFontTable._init_size = parseInt(size);
                }
                catch (Error) {
                    return ParserBase_1.ParserBase.PARSING_DONE;
                }
                break;
            case FNTParserState.PARSE_IMAGE:
                if (this._imagePath) {
                    this._pAddDependency(this._imagePath, new URLRequest_1.URLRequest(this._imagePath));
                    this._pPauseAndRetrieveDependencies();
                }
                else {
                    return ParserBase_1.ParserBase.PARSING_DONE;
                }
                break;
            case FNTParserState.PARSE_CHARS:
                var element;
                var x, y, width, height, xoff, yoff, xadv, page, chnl;
                var id;
                var len = this._chars.length;
                for (var i = 0; i < len; i++) {
                    element = this._chars[i];
                    x = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "x"));
                    y = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "y"));
                    width = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "width"));
                    height = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "height"));
                    xoff = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "xoffset"));
                    yoff = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "yoffset"));
                    xadv = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "xadvance"));
                    page = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "page"));
                    chnl = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "chnl"));
                    id = XmlUtils_1.XmlUtils.readAttributeValue(element, "id");
                    this._bitmapFontTable.setChar(id, x, y, width, height, xoff, yoff, xadv, page, chnl);
                }
                this._pFinalizeAsset(this._font, this._font.name);
                this._parseState = FNTParserState.PARSE_COMPLETE;
                break;
            case FNTParserState.PARSE_COMPLETE:
                return ParserBase_1.ParserBase.PARSING_DONE;
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    return FNTParser;
}(ParserBase_1.ParserBase));
exports.FNTParser = FNTParser;
var FNTParserState = (function () {
    function FNTParserState() {
    }
    FNTParserState.PARSE_XML = 0;
    FNTParserState.PARSE_IMAGE = 1;
    FNTParserState.PARSE_CHARS = 2;
    FNTParserState.PARSE_COMPLETE = 3;
    return FNTParserState;
}());
},{"awayjs-core/lib/library/AssetLibrary":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-core/lib/utils/XmlUtils":undefined,"awayjs-display/lib/text/BitmapFontTable":undefined,"awayjs-display/lib/text/Font":undefined}],"awayjs-parsers/lib/MD2Parser":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttributesBuffer_1 = require("awayjs-core/lib/attributes/AttributesBuffer");
var URLLoaderDataFormat_1 = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("awayjs-core/lib/net/URLRequest");
var ParserBase_1 = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils_1 = require("awayjs-core/lib/parsers/ParserUtils");
var Graphics_1 = require("awayjs-display/lib/graphics/Graphics");
var TriangleElements_1 = require("awayjs-display/lib/graphics/TriangleElements");
var DisplayObjectContainer_1 = require("awayjs-display/lib/display/DisplayObjectContainer");
var Sprite_1 = require("awayjs-display/lib/display/Sprite");
var DefaultMaterialManager_1 = require("awayjs-display/lib/managers/DefaultMaterialManager");
var VertexClipNode_1 = require("awayjs-renderergl/lib/animators/nodes/VertexClipNode");
var VertexAnimationSet_1 = require("awayjs-renderergl/lib/animators/VertexAnimationSet");
var MethodMaterial_1 = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodMaterialMode_1 = require("awayjs-methodmaterials/lib/MethodMaterialMode");
/**
 * MD2Parser provides a parser for the MD2 data type.
 */
var MD2Parser = (function (_super) {
    __extends(MD2Parser, _super);
    /**
     * Creates a new MD2Parser object.
     * @param textureType The extension of the texture (e.g. jpg/png/...)
     * @param ignoreTexturePath If true, the path of the texture is ignored
     */
    function MD2Parser(textureType, ignoreTexturePath) {
        if (textureType === void 0) { textureType = "jpg"; }
        if (ignoreTexturePath === void 0) { ignoreTexturePath = true; }
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.ARRAY_BUFFER);
        this._clipNodes = new Object();
        // the current elements being built
        this._animationSet = new VertexAnimationSet_1.VertexAnimationSet();
        this.materialFinal = false;
        this.graphicsCreated = false;
        this._textureType = textureType;
        this._ignoreTexturePath = ignoreTexturePath;
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    MD2Parser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "md2";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    MD2Parser.supportsData = function (data) {
        return (ParserUtils_1.ParserUtils.toString(data, 4) == 'IDP2');
    };
    /**
     * @inheritDoc
     */
    MD2Parser.prototype._iResolveDependency = function (resourceDependency) {
        if (resourceDependency.assets.length != 1)
            return;
        var material = new MethodMaterial_1.MethodMaterial(resourceDependency.assets[0]);
        if (this.materialMode >= 2)
            material.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
        //add to the content property
        this._pContent.addChild(this._sprite);
        material.name = this._sprite.material.name;
        this._sprite.material = material;
        this._pFinalizeAsset(material);
        this._pFinalizeAsset(this._sprite.graphics);
        this._pFinalizeAsset(this._sprite);
        this.materialFinal = true;
    };
    /**
     * @inheritDoc
     */
    MD2Parser.prototype._iResolveDependencyFailure = function (resourceDependency) {
        // apply system default
        if (this.materialMode < 2) {
            this._sprite.material = DefaultMaterialManager_1.DefaultMaterialManager.getDefaultMaterial();
        }
        else {
            this._sprite.material = new MethodMaterial_1.MethodMaterial(DefaultMaterialManager_1.DefaultMaterialManager.getDefaultImage2D());
            this._sprite.material.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
        }
        //add to the content property
        this._pContent.addChild(this._sprite);
        this._pFinalizeAsset(this._sprite.graphics);
        this._pFinalizeAsset(this._sprite);
        this.materialFinal = true;
    };
    /**
     * @inheritDoc
     */
    MD2Parser.prototype._pProceedParsing = function () {
        if (!this._startedParsing) {
            this._byteData = this._pGetByteData();
            this._startedParsing = true;
            // Reset bytearray read position (which may have been
            // moved forward by the supportsData() function.)
            this._byteData.position = 0;
        }
        while (this._pHasTime()) {
            if (!this._parsedHeader) {
                //----------------------------------------------------------------------------
                // LITTLE_ENDIAN - Default for ArrayBuffer / Not implemented in ByteArray
                //----------------------------------------------------------------------------
                //this._byteData.endian = Endian.LITTLE_ENDIAN;
                // TODO: Create a sprite only when encountered (if it makes sense
                // for this file format) and return it using this._pFinalizeAsset()
                this._sprite = new Sprite_1.Sprite();
                this._graphics = this._sprite.graphics;
                if (this.materialMode < 2) {
                    this._sprite.material = DefaultMaterialManager_1.DefaultMaterialManager.getDefaultMaterial();
                }
                else {
                    this._sprite.material = new MethodMaterial_1.MethodMaterial(DefaultMaterialManager_1.DefaultMaterialManager.getDefaultImage2D());
                    this._sprite.material.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                }
                //_graphics.animation = new VertexAnimation(2, VertexAnimationMode.ABSOLUTE);
                //_animator = new VertexAnimator(VertexAnimationState(_sprite.animationState));
                // Parse header and decompress body
                this.parseHeader();
                this.parseMaterialNames();
            }
            else if (!this._parsedUV) {
                this.parseUV();
            }
            else if (!this._parsedFaces) {
                this.parseFaces();
            }
            else if (!this._parsedFrames) {
                this.parseFrames();
            }
            else if ((this.graphicsCreated) && (this.materialFinal)) {
                return ParserBase_1.ParserBase.PARSING_DONE;
            }
            else if (!this.graphicsCreated) {
                this.graphicsCreated = true;
                //create default subgraphics
                this._graphics.addGraphic(this._firstElements.clone());
                // Force name to be chosen by this._pFinalizeAsset()
                this._sprite.name = "";
                if (this.materialFinal) {
                    //add to the content property
                    this._pContent.addChild(this._sprite);
                    this._pFinalizeAsset(this._sprite.graphics);
                    this._pFinalizeAsset(this._sprite);
                }
                this._pPauseAndRetrieveDependencies();
            }
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    MD2Parser.prototype._pStartParsing = function (frameLimit) {
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer_1.DisplayObjectContainer();
        _super.prototype._pStartParsing.call(this, frameLimit);
    };
    /**
     * Reads in all that MD2 Header data that is declared as private variables.
     * I know its a lot, and it looks ugly, but only way to do it in Flash
     */
    MD2Parser.prototype.parseHeader = function () {
        this._ident = this._byteData.readInt();
        this._version = this._byteData.readInt();
        this._skinWidth = this._byteData.readInt();
        this._skinHeight = this._byteData.readInt();
        //skip this._frameSize
        this._byteData.readInt();
        this._numSkins = this._byteData.readInt();
        this._numVertices = this._byteData.readInt();
        this._numST = this._byteData.readInt();
        this._numTris = this._byteData.readInt();
        //skip this._numGlCmds
        this._byteData.readInt();
        this._numFrames = this._byteData.readInt();
        this._offsetSkins = this._byteData.readInt();
        this._offsetST = this._byteData.readInt();
        this._offsetTris = this._byteData.readInt();
        this._offsetFrames = this._byteData.readInt();
        //skip this._offsetGlCmds
        this._byteData.readInt();
        this._offsetEnd = this._byteData.readInt();
        this._parsedHeader = true;
    };
    /**
     * Parses the file names for the materials.
     */
    MD2Parser.prototype.parseMaterialNames = function () {
        var url;
        var name;
        var extIndex;
        var slashIndex;
        this._materialNames = new Array();
        this._byteData.position = this._offsetSkins;
        var regExp = new RegExp("[^a-zA-Z0-9\\_\/.]", "g");
        for (var i = 0; i < this._numSkins; ++i) {
            name = this._byteData.readUTFBytes(64);
            name = name.replace(regExp, "");
            extIndex = name.lastIndexOf(".");
            if (this._ignoreTexturePath)
                slashIndex = name.lastIndexOf("/");
            if (name.toLowerCase().indexOf(".jpg") == -1 && name.toLowerCase().indexOf(".png") == -1) {
                name = name.substring(slashIndex + 1, extIndex);
                url = name + "." + this._textureType;
            }
            else {
                url = name;
            }
            this._materialNames[i] = name;
            // only support 1 skin TODO: really?
            if (this.dependencies.length == 0)
                this._pAddDependency(name, new URLRequest_1.URLRequest(url));
        }
        if (this._materialNames.length > 0)
            this._sprite.material.name = this._materialNames[0];
        else
            this.materialFinal = true;
    };
    /**
     * Parses the uv data for the sprite.
     */
    MD2Parser.prototype.parseUV = function () {
        var j = 0;
        this._uvs = new Array(this._numST * 2);
        this._byteData.position = this._offsetST;
        for (var i = 0; i < this._numST; i++) {
            this._uvs[j++] = this._byteData.readShort() / this._skinWidth;
            this._uvs[j++] = this._byteData.readShort() / this._skinHeight;
        }
        this._parsedUV = true;
    };
    /**
     * Parses unique indices for the faces.
     */
    MD2Parser.prototype.parseFaces = function () {
        var a /*uint*/, b /*uint*/, c /*uint*/, ta /*uint*/, tb /*uint*/, tc;
        var i;
        this._vertIndices = new Array();
        this._uvIndices = new Array();
        this._indices = new Array() /*uint*/;
        this._byteData.position = this._offsetTris;
        for (i = 0; i < this._numTris; i++) {
            //collect vertex indices
            a = this._byteData.readUnsignedShort();
            b = this._byteData.readUnsignedShort();
            c = this._byteData.readUnsignedShort();
            //collect uv indices
            ta = this._byteData.readUnsignedShort();
            tb = this._byteData.readUnsignedShort();
            tc = this._byteData.readUnsignedShort();
            this.addIndex(a, ta);
            this.addIndex(b, tb);
            this.addIndex(c, tc);
        }
        var len = this._uvIndices.length;
        this._finalUV = new Array(len * 2);
        for (i = 0; i < len; ++i) {
            this._finalUV[i << 1] = this._uvs[this._uvIndices[i] << 1];
            this._finalUV[(i << 1) + 1] = this._uvs[(this._uvIndices[i] << 1) + 1];
        }
        this._parsedFaces = true;
    };
    /**
     * Adds a face index to the list if it doesn't exist yet, based on vertexIndex and uvIndex, and adds the
     * corresponding vertex and uv data in the correct location.
     * @param vertexIndex The original index in the vertex list.
     * @param uvIndex The original index in the uv list.
     */
    MD2Parser.prototype.addIndex = function (vertexIndex /*uint*/, uvIndex /*uint*/) {
        var index = this.findIndex(vertexIndex, uvIndex);
        if (index == -1) {
            this._indices.push(this._vertIndices.length);
            this._vertIndices.push(vertexIndex);
            this._uvIndices.push(uvIndex);
        }
        else
            this._indices.push(index);
    };
    /**
     * Finds the final index corresponding to the original MD2's vertex and uv indices. Returns -1 if it wasn't added yet.
     * @param vertexIndex The original index in the vertex list.
     * @param uvIndex The original index in the uv list.
     * @return The index of the final sprite corresponding to the original vertex and uv index. -1 if it doesn't exist yet.
     */
    MD2Parser.prototype.findIndex = function (vertexIndex /*uint*/, uvIndex /*uint*/) {
        var len = this._vertIndices.length;
        for (var i = 0; i < len; ++i) {
            if (this._vertIndices[i] == vertexIndex && this._uvIndices[i] == uvIndex)
                return i;
        }
        return -1;
    };
    /**
     * Parses all the frame elements.
     */
    MD2Parser.prototype.parseFrames = function () {
        var sx, sy, sz;
        var tx, ty, tz;
        var graphics;
        var elements;
        var vertLen = this._vertIndices.length;
        var fvertices;
        var tvertices;
        var i /*uint*/, j /*int*/, k;
        //var ch : number /*uint*/;
        var name = "";
        var prevClip = null;
        this._byteData.position = this._offsetFrames;
        for (i = 0; i < this._numFrames; i++) {
            tvertices = new Array();
            fvertices = new Array(vertLen * 3);
            sx = this._byteData.readFloat();
            sy = this._byteData.readFloat();
            sz = this._byteData.readFloat();
            tx = this._byteData.readFloat();
            ty = this._byteData.readFloat();
            tz = this._byteData.readFloat();
            name = this.readFrameName();
            // Note, the extra data.position++ in the for loop is there
            // to skip over a byte that holds the "vertex normal index"
            for (j = 0; j < this._numVertices; j++, this._byteData.position++)
                tvertices.push(sx * this._byteData.readUnsignedByte() + tx, sy * this._byteData.readUnsignedByte() + ty, sz * this._byteData.readUnsignedByte() + tz);
            k = 0;
            for (j = 0; j < vertLen; j++) {
                fvertices[k++] = tvertices[this._vertIndices[j] * 3];
                fvertices[k++] = tvertices[this._vertIndices[j] * 3 + 2];
                fvertices[k++] = tvertices[this._vertIndices[j] * 3 + 1];
            }
            elements = new TriangleElements_1.TriangleElements(new AttributesBuffer_1.AttributesBuffer());
            if (this._firstElements == null)
                this._firstElements = elements;
            graphics = new Graphics_1.Graphics();
            graphics.addGraphic(elements);
            elements.setIndices(this._indices);
            elements.setPositions(fvertices);
            elements.setUVs(this._finalUV);
            // cause explicit updates
            elements.setNormals(null);
            elements.setTangents(null);
            // turn auto updates off because they may be animated and set explicitly
            elements.autoDeriveNormals = false;
            elements.autoDeriveTangents = false;
            var clip = this._clipNodes[name];
            if (!clip) {
                // If another sequence was parsed before this one, starting
                // a new state means the previous one is complete and can
                // hence be finalized.
                if (prevClip) {
                    this._pFinalizeAsset(prevClip);
                    this._animationSet.addAnimation(prevClip);
                }
                clip = new VertexClipNode_1.VertexClipNode();
                clip.name = name;
                clip.stitchFinalFrame = true;
                this._clipNodes[name] = clip;
                prevClip = clip;
            }
            clip.addFrame(graphics, 1000 / MD2Parser.FPS);
        }
        // Finalize the last state
        if (prevClip) {
            this._pFinalizeAsset(prevClip);
            this._animationSet.addAnimation(prevClip);
        }
        // Force this._pFinalizeAsset() to decide name
        this._pFinalizeAsset(this._animationSet);
        this._parsedFrames = true;
    };
    MD2Parser.prototype.readFrameName = function () {
        var name = "";
        var k = 0;
        for (var j = 0; j < 16; j++) {
            var ch = this._byteData.readUnsignedByte();
            if (Math.floor(ch) > 0x39 && Math.floor(ch) <= 0x7A && k == 0)
                name += String.fromCharCode(ch);
            if (Math.floor(ch) >= 0x30 && Math.floor(ch) <= 0x39)
                k++;
        }
        return name;
    };
    MD2Parser.FPS = 6;
    return MD2Parser;
}(ParserBase_1.ParserBase));
exports.MD2Parser = MD2Parser;
},{"awayjs-core/lib/attributes/AttributesBuffer":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-display/lib/display/DisplayObjectContainer":undefined,"awayjs-display/lib/display/Sprite":undefined,"awayjs-display/lib/graphics/Graphics":undefined,"awayjs-display/lib/graphics/TriangleElements":undefined,"awayjs-display/lib/managers/DefaultMaterialManager":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/MethodMaterialMode":undefined,"awayjs-renderergl/lib/animators/VertexAnimationSet":undefined,"awayjs-renderergl/lib/animators/nodes/VertexClipNode":undefined}],"awayjs-parsers/lib/MD5AnimParser":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Quaternion_1 = require("awayjs-core/lib/geom/Quaternion");
var Vector3D_1 = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat_1 = require("awayjs-core/lib/net/URLLoaderDataFormat");
var ParserBase_1 = require("awayjs-core/lib/parsers/ParserBase");
var JointPose_1 = require("awayjs-renderergl/lib/animators/data/JointPose");
var SkeletonPose_1 = require("awayjs-renderergl/lib/animators/data/SkeletonPose");
var SkeletonClipNode_1 = require("awayjs-renderergl/lib/animators/nodes/SkeletonClipNode");
/**
 * MD5AnimParser provides a parser for the md5anim data type, providing an animation sequence for the md5 format.
 *
 * todo: optimize
 */
var MD5AnimParser = (function (_super) {
    __extends(MD5AnimParser, _super);
    /**
     * Creates a new MD5AnimParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    function MD5AnimParser(additionalRotationAxis, additionalRotationRadians) {
        if (additionalRotationAxis === void 0) { additionalRotationAxis = null; }
        if (additionalRotationRadians === void 0) { additionalRotationRadians = 0; }
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.TEXT);
        this._parseIndex = 0;
        this._line = 0;
        this._charLineIndex = 0;
        this._rotationQuat = new Quaternion_1.Quaternion();
        var t1 = new Quaternion_1.Quaternion();
        var t2 = new Quaternion_1.Quaternion();
        t1.fromAxisAngle(Vector3D_1.Vector3D.X_AXIS, -Math.PI * .5);
        t2.fromAxisAngle(Vector3D_1.Vector3D.Y_AXIS, -Math.PI * .5);
        this._rotationQuat.multiply(t2, t1);
        if (additionalRotationAxis) {
            this._rotationQuat.multiply(t2, t1);
            t1.fromAxisAngle(additionalRotationAxis, additionalRotationRadians);
            this._rotationQuat.multiply(t1, this._rotationQuat);
        }
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    MD5AnimParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "md5anim";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    MD5AnimParser.supportsData = function (data) {
        return false;
    };
    /**
     * @inheritDoc
     */
    MD5AnimParser.prototype._pProceedParsing = function () {
        var token;
        if (!this._startedParsing) {
            this._textData = this._pGetTextData();
            this._startedParsing = true;
        }
        while (this._pHasTime()) {
            token = this.getNextToken();
            switch (token) {
                case MD5AnimParser.COMMENT_TOKEN:
                    this.ignoreLine();
                    break;
                case "":
                    // can occur at the end of a file
                    break;
                case MD5AnimParser.VERSION_TOKEN:
                    this._version = this.getNextInt();
                    if (this._version != 10)
                        throw new Error("Unknown version number encountered!");
                    break;
                case MD5AnimParser.COMMAND_LINE_TOKEN:
                    this.parseCMD();
                    break;
                case MD5AnimParser.NUM_FRAMES_TOKEN:
                    this._numFrames = this.getNextInt();
                    this._bounds = new Array();
                    this._frameData = new Array();
                    break;
                case MD5AnimParser.NUM_JOINTS_TOKEN:
                    this._numJoints = this.getNextInt();
                    this._hierarchy = new Array(this._numJoints);
                    this._baseFrameData = new Array(this._numJoints);
                    break;
                case MD5AnimParser.FRAME_RATE_TOKEN:
                    this._frameRate = this.getNextInt();
                    break;
                case MD5AnimParser.NUM_ANIMATED_COMPONENTS_TOKEN:
                    this._numAnimatedComponents = this.getNextInt();
                    break;
                case MD5AnimParser.HIERARCHY_TOKEN:
                    this.parseHierarchy();
                    break;
                case MD5AnimParser.BOUNDS_TOKEN:
                    this.parseBounds();
                    break;
                case MD5AnimParser.BASE_FRAME_TOKEN:
                    this.parseBaseFrame();
                    break;
                case MD5AnimParser.FRAME_TOKEN:
                    this.parseFrame();
                    break;
                default:
                    if (!this._reachedEOF)
                        this.sendUnknownKeywordError();
            }
            if (this._reachedEOF) {
                this._clip = new SkeletonClipNode_1.SkeletonClipNode();
                this.translateClip();
                this._pFinalizeAsset(this._clip);
                return ParserBase_1.ParserBase.PARSING_DONE;
            }
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    /**
     * Converts all key frame data to an SkinnedAnimationSequence.
     */
    MD5AnimParser.prototype.translateClip = function () {
        for (var i = 0; i < this._numFrames; ++i)
            this._clip.addFrame(this.translatePose(this._frameData[i]), 1000 / this._frameRate);
    };
    /**
     * Converts a single key frame data to a SkeletonPose.
     * @param frameData The actual frame data.
     * @return A SkeletonPose containing the frame data's pose.
     */
    MD5AnimParser.prototype.translatePose = function (frameData) {
        var hierarchy;
        var pose;
        var base;
        var flags;
        var j;
        var translate = new Vector3D_1.Vector3D();
        var orientation = new Quaternion_1.Quaternion();
        var components = frameData.components;
        var skelPose = new SkeletonPose_1.SkeletonPose();
        var jointPoses = skelPose.jointPoses;
        for (var i = 0; i < this._numJoints; ++i) {
            j = 0;
            pose = new JointPose_1.JointPose();
            hierarchy = this._hierarchy[i];
            base = this._baseFrameData[i];
            flags = hierarchy.flags;
            translate.x = base.position.x;
            translate.y = base.position.y;
            translate.z = base.position.z;
            orientation.x = base.orientation.x;
            orientation.y = base.orientation.y;
            orientation.z = base.orientation.z;
            if (flags & 1)
                translate.x = components[hierarchy.startIndex + (j++)];
            if (flags & 2)
                translate.y = components[hierarchy.startIndex + (j++)];
            if (flags & 4)
                translate.z = components[hierarchy.startIndex + (j++)];
            if (flags & 8)
                orientation.x = components[hierarchy.startIndex + (j++)];
            if (flags & 16)
                orientation.y = components[hierarchy.startIndex + (j++)];
            if (flags & 32)
                orientation.z = components[hierarchy.startIndex + (j++)];
            var w = 1 - orientation.x * orientation.x - orientation.y * orientation.y - orientation.z * orientation.z;
            orientation.w = w < 0 ? 0 : -Math.sqrt(w);
            if (hierarchy.parentIndex < 0) {
                pose.orientation.multiply(this._rotationQuat, orientation);
                pose.translation = this._rotationQuat.rotatePoint(translate);
            }
            else {
                pose.orientation.copyFrom(orientation);
                pose.translation.x = translate.x;
                pose.translation.y = translate.y;
                pose.translation.z = translate.z;
            }
            pose.orientation.y = -pose.orientation.y;
            pose.orientation.z = -pose.orientation.z;
            pose.translation.x = -pose.translation.x;
            jointPoses[i] = pose;
        }
        return skelPose;
    };
    /**
     * Parses the skeleton's hierarchy data.
     */
    MD5AnimParser.prototype.parseHierarchy = function () {
        var ch;
        var data;
        var token = this.getNextToken();
        var i = 0;
        if (token != "{")
            this.sendUnknownKeywordError();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            data = new HierarchyData();
            data.name = this.parseLiteralstring();
            data.parentIndex = this.getNextInt();
            data.flags = this.getNextInt();
            data.startIndex = this.getNextInt();
            this._hierarchy[i++] = data;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5AnimParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Parses frame bounds.
     */
    MD5AnimParser.prototype.parseBounds = function () {
        var ch;
        var data;
        var token = this.getNextToken();
        var i = 0;
        if (token != "{")
            this.sendUnknownKeywordError();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            data = new BoundsData();
            data.min = this.parseVector3D();
            data.max = this.parseVector3D();
            this._bounds[i++] = data;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5AnimParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Parses the base frame.
     */
    MD5AnimParser.prototype.parseBaseFrame = function () {
        var ch;
        var data;
        var token = this.getNextToken();
        var i = 0;
        if (token != "{")
            this.sendUnknownKeywordError();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            data = new BaseFrameData();
            data.position = this.parseVector3D();
            data.orientation = this.parseQuaternion();
            this._baseFrameData[i++] = data;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5AnimParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Parses a single frame.
     */
    MD5AnimParser.prototype.parseFrame = function () {
        var ch;
        var data;
        var token;
        var frameIndex;
        frameIndex = this.getNextInt();
        token = this.getNextToken();
        if (token != "{")
            this.sendUnknownKeywordError();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            data = new FrameData();
            data.components = new Array(this._numAnimatedComponents);
            for (var i = 0; i < this._numAnimatedComponents; ++i)
                data.components[i] = this.getNextNumber();
            this._frameData[frameIndex] = data;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5AnimParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Puts back the last read character into the data stream.
     */
    MD5AnimParser.prototype.putBack = function () {
        this._parseIndex--;
        this._charLineIndex--;
        this._reachedEOF = this._parseIndex >= this._textData.length;
    };
    /**
     * Gets the next token in the data stream.
     */
    MD5AnimParser.prototype.getNextToken = function () {
        var ch;
        var token = "";
        while (!this._reachedEOF) {
            ch = this.getNextChar();
            if (ch == " " || ch == "\r" || ch == "\n" || ch == "\t") {
                if (token != MD5AnimParser.COMMENT_TOKEN)
                    this.skipWhiteSpace();
                if (token != "")
                    return token;
            }
            else
                token += ch;
            if (token == MD5AnimParser.COMMENT_TOKEN)
                return token;
        }
        return token;
    };
    /**
     * Skips all whitespace in the data stream.
     */
    MD5AnimParser.prototype.skipWhiteSpace = function () {
        var ch;
        do
            ch = this.getNextChar();
        while (ch == "\n" || ch == " " || ch == "\r" || ch == "\t");
        this.putBack();
    };
    /**
     * Skips to the next line.
     */
    MD5AnimParser.prototype.ignoreLine = function () {
        var ch;
        while (!this._reachedEOF && ch != "\n")
            ch = this.getNextChar();
    };
    /**
     * Retrieves the next single character in the data stream.
     */
    MD5AnimParser.prototype.getNextChar = function () {
        var ch = this._textData.charAt(this._parseIndex++);
        if (ch == "\n") {
            ++this._line;
            this._charLineIndex = 0;
        }
        else if (ch != "\r")
            ++this._charLineIndex;
        if (this._parseIndex == this._textData.length)
            this._reachedEOF = true;
        return ch;
    };
    /**
     * Retrieves the next integer in the data stream.
     */
    MD5AnimParser.prototype.getNextInt = function () {
        var i = parseInt(this.getNextToken());
        if (isNaN(i))
            this.sendParseError("int type");
        return i;
    };
    /**
     * Retrieves the next floating point number in the data stream.
     */
    MD5AnimParser.prototype.getNextNumber = function () {
        var f = parseFloat(this.getNextToken());
        if (isNaN(f))
            this.sendParseError("float type");
        return f;
    };
    /**
     * Retrieves the next 3d vector in the data stream.
     */
    MD5AnimParser.prototype.parseVector3D = function () {
        var vec = new Vector3D_1.Vector3D();
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        vec.x = this.getNextNumber();
        vec.y = this.getNextNumber();
        vec.z = this.getNextNumber();
        if (this.getNextToken() != ")")
            this.sendParseError(")");
        return vec;
    };
    /**
     * Retrieves the next quaternion in the data stream.
     */
    MD5AnimParser.prototype.parseQuaternion = function () {
        var quat = new Quaternion_1.Quaternion();
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        quat.x = this.getNextNumber();
        quat.y = this.getNextNumber();
        quat.z = this.getNextNumber();
        // quat supposed to be unit length
        var t = 1 - (quat.x * quat.x) - (quat.y * quat.y) - (quat.z * quat.z);
        quat.w = t < 0 ? 0 : -Math.sqrt(t);
        if (this.getNextToken() != ")")
            this.sendParseError(")");
        return quat;
    };
    /**
     * Parses the command line data.
     */
    MD5AnimParser.prototype.parseCMD = function () {
        // just ignore the command line property
        this.parseLiteralstring();
    };
    /**
     * Retrieves the next literal string in the data stream. A literal string is a sequence of characters bounded
     * by double quotes.
     */
    MD5AnimParser.prototype.parseLiteralstring = function () {
        this.skipWhiteSpace();
        var ch = this.getNextChar();
        var str = "";
        if (ch != "\"")
            this.sendParseError("\"");
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            ch = this.getNextChar();
            if (ch != "\"")
                str += ch;
        } while (ch != "\"");
        return str;
    };
    /**
     * Throws an end-of-file error when a premature end of file was encountered.
     */
    MD5AnimParser.prototype.sendEOFError = function () {
        throw new Error("Unexpected end of file");
    };
    /**
     * Throws an error when an unexpected token was encountered.
     * @param expected The token type that was actually expected.
     */
    MD5AnimParser.prototype.sendParseError = function (expected) {
        throw new Error("Unexpected token at line " + (this._line + 1) + ", character " + this._charLineIndex + ". " + expected + " expected, but " + this._textData.charAt(this._parseIndex - 1) + " encountered");
    };
    /**
     * Throws an error when an unknown keyword was encountered.
     */
    MD5AnimParser.prototype.sendUnknownKeywordError = function () {
        throw new Error("Unknown keyword at line " + (this._line + 1) + ", character " + this._charLineIndex + ". ");
    };
    MD5AnimParser.VERSION_TOKEN = "MD5Version";
    MD5AnimParser.COMMAND_LINE_TOKEN = "commandline";
    MD5AnimParser.NUM_FRAMES_TOKEN = "numFrames";
    MD5AnimParser.NUM_JOINTS_TOKEN = "numJoints";
    MD5AnimParser.FRAME_RATE_TOKEN = "frameRate";
    MD5AnimParser.NUM_ANIMATED_COMPONENTS_TOKEN = "numAnimatedComponents";
    MD5AnimParser.HIERARCHY_TOKEN = "hierarchy";
    MD5AnimParser.BOUNDS_TOKEN = "bounds";
    MD5AnimParser.BASE_FRAME_TOKEN = "baseframe";
    MD5AnimParser.FRAME_TOKEN = "frame";
    MD5AnimParser.COMMENT_TOKEN = "//";
    return MD5AnimParser;
}(ParserBase_1.ParserBase));
exports.MD5AnimParser = MD5AnimParser;
/**
 *
 */
var BaseFrameData = (function () {
    function BaseFrameData() {
    }
    return BaseFrameData;
}());
exports.BaseFrameData = BaseFrameData;
/**
 *
 */
var BoundsData = (function () {
    function BoundsData() {
    }
    return BoundsData;
}());
exports.BoundsData = BoundsData;
/**
 *
 */
var FrameData = (function () {
    function FrameData() {
    }
    return FrameData;
}());
exports.FrameData = FrameData;
/**
 *
 */
var HierarchyData = (function () {
    function HierarchyData() {
    }
    return HierarchyData;
}());
exports.HierarchyData = HierarchyData;
},{"awayjs-core/lib/geom/Quaternion":undefined,"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-renderergl/lib/animators/data/JointPose":undefined,"awayjs-renderergl/lib/animators/data/SkeletonPose":undefined,"awayjs-renderergl/lib/animators/nodes/SkeletonClipNode":undefined}],"awayjs-parsers/lib/MD5MeshParser":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttributesBuffer_1 = require("awayjs-core/lib/attributes/AttributesBuffer");
var Quaternion_1 = require("awayjs-core/lib/geom/Quaternion");
var Vector3D_1 = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat_1 = require("awayjs-core/lib/net/URLLoaderDataFormat");
var ParserBase_1 = require("awayjs-core/lib/parsers/ParserBase");
var TriangleElements_1 = require("awayjs-display/lib/graphics/TriangleElements");
var DisplayObjectContainer_1 = require("awayjs-display/lib/display/DisplayObjectContainer");
var Sprite_1 = require("awayjs-display/lib/display/Sprite");
var SkeletonAnimationSet_1 = require("awayjs-renderergl/lib/animators/SkeletonAnimationSet");
var Skeleton_1 = require("awayjs-renderergl/lib/animators/data/Skeleton");
var SkeletonJoint_1 = require("awayjs-renderergl/lib/animators/data/SkeletonJoint");
// todo: create animation system, parse skeleton
/**
 * MD5MeshParser provides a parser for the md5mesh data type, providing the graphics of the md5 format.
 *
 * todo: optimize
 */
var MD5MeshParser = (function (_super) {
    __extends(MD5MeshParser, _super);
    /**
     * Creates a new MD5MeshParser object.
     */
    function MD5MeshParser(additionalRotationAxis, additionalRotationRadians) {
        if (additionalRotationAxis === void 0) { additionalRotationAxis = null; }
        if (additionalRotationRadians === void 0) { additionalRotationRadians = 0; }
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.TEXT);
        this._parseIndex = 0;
        this._line = 0;
        this._charLineIndex = 0;
        this._rotationQuat = new Quaternion_1.Quaternion();
        this._rotationQuat.fromAxisAngle(Vector3D_1.Vector3D.X_AXIS, -Math.PI * .5);
        if (additionalRotationAxis) {
            var quat = new Quaternion_1.Quaternion();
            quat.fromAxisAngle(additionalRotationAxis, additionalRotationRadians);
            this._rotationQuat.multiply(this._rotationQuat, quat);
        }
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    MD5MeshParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "md5sprite";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    MD5MeshParser.supportsData = function (data) {
        return false;
    };
    /**
     * @inheritDoc
     */
    MD5MeshParser.prototype._pProceedParsing = function () {
        var token;
        if (!this._startedParsing) {
            this._textData = this._pGetTextData();
            this._startedParsing = true;
        }
        while (this._pHasTime()) {
            token = this.getNextToken();
            switch (token) {
                case MD5MeshParser.COMMENT_TOKEN:
                    this.ignoreLine();
                    break;
                case MD5MeshParser.VERSION_TOKEN:
                    this._version = this.getNextInt();
                    if (this._version != 10)
                        throw new Error("Unknown version number encountered!");
                    break;
                case MD5MeshParser.COMMAND_LINE_TOKEN:
                    this.parseCMD();
                    break;
                case MD5MeshParser.NUM_JOINTS_TOKEN:
                    this._numJoints = this.getNextInt();
                    this._bindPoses = new Array(this._numJoints);
                    break;
                case MD5MeshParser.NUM_MESHES_TOKEN:
                    this._numMeshes = this.getNextInt();
                    break;
                case MD5MeshParser.JOINTS_TOKEN:
                    this.parseJoints();
                    break;
                case MD5MeshParser.MESH_TOKEN:
                    this.parseMesh();
                    break;
                default:
                    if (!this._reachedEOF)
                        this.sendUnknownKeywordError();
            }
            if (this._reachedEOF) {
                this.calculateMaxJointCount();
                this._animationSet = new SkeletonAnimationSet_1.SkeletonAnimationSet(this._maxJointCount);
                this._sprite = new Sprite_1.Sprite();
                this._graphics = this._sprite.graphics;
                for (var i = 0; i < this._elementsData.length; ++i)
                    this._graphics.addGraphic(this.translateElements(this._elementsData[i].positionData, this._elementsData[i].weightData, this._elementsData[i].indices));
                //_graphics.animation = _animation;
                //					_sprite.animationController = _animationController;
                //add to the content property
                this._pContent.addChild(this._sprite);
                this._pFinalizeAsset(this._graphics);
                this._pFinalizeAsset(this._sprite);
                this._pFinalizeAsset(this._skeleton);
                this._pFinalizeAsset(this._animationSet);
                return ParserBase_1.ParserBase.PARSING_DONE;
            }
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    MD5MeshParser.prototype._pStartParsing = function (frameLimit) {
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer_1.DisplayObjectContainer();
        _super.prototype._pStartParsing.call(this, frameLimit);
    };
    MD5MeshParser.prototype.calculateMaxJointCount = function () {
        this._maxJointCount = 0;
        var numElementsData = this._elementsData.length;
        for (var i = 0; i < numElementsData; ++i) {
            var elementsData = this._elementsData[i];
            var positionData = elementsData.positionData;
            var numVerts = positionData.length;
            for (var j = 0; j < numVerts; ++j) {
                var zeroWeights = this.countZeroWeightJoints(positionData[j], elementsData.weightData);
                var totalJoints = positionData[j].countWeight - zeroWeights;
                if (totalJoints > this._maxJointCount)
                    this._maxJointCount = totalJoints;
            }
        }
    };
    MD5MeshParser.prototype.countZeroWeightJoints = function (position, weights) {
        var start = position.startWeight;
        var end = position.startWeight + position.countWeight;
        var count = 0;
        var weight;
        for (var i = start; i < end; ++i) {
            weight = weights[i].bias;
            if (weight == 0)
                ++count;
        }
        return count;
    };
    /**
     * Parses the skeleton's joints.
     */
    MD5MeshParser.prototype.parseJoints = function () {
        var ch;
        var joint;
        var pos;
        var quat;
        var i = 0;
        var token = this.getNextToken();
        if (token != "{")
            this.sendUnknownKeywordError();
        this._skeleton = new Skeleton_1.Skeleton();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            joint = new SkeletonJoint_1.SkeletonJoint();
            joint.name = this.parseLiteralstring();
            joint.parentIndex = this.getNextInt();
            pos = this.parseVector3D();
            pos = this._rotationQuat.rotatePoint(pos);
            quat = this.parseQuaternion();
            // todo: check if this is correct, or maybe we want to actually store it as quats?
            this._bindPoses[i] = quat.toMatrix3D();
            this._bindPoses[i].appendTranslation(pos.x, pos.y, pos.z);
            var inv = this._bindPoses[i].clone();
            inv.invert();
            joint.inverseBindPose = inv.rawData;
            this._skeleton.joints[i++] = joint;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5MeshParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Puts back the last read character into the data stream.
     */
    MD5MeshParser.prototype.putBack = function () {
        this._parseIndex--;
        this._charLineIndex--;
        this._reachedEOF = this._parseIndex >= this._textData.length;
    };
    /**
     * Parses the mesh graphics.
     */
    MD5MeshParser.prototype.parseMesh = function () {
        var token = this.getNextToken();
        var ch;
        var positionData;
        var weights;
        var indices;
        if (token != "{")
            this.sendUnknownKeywordError();
        if (this._shaders == null)
            this._shaders = new Array();
        while (ch != "}") {
            ch = this.getNextToken();
            switch (ch) {
                case MD5MeshParser.COMMENT_TOKEN:
                    this.ignoreLine();
                    break;
                case MD5MeshParser.MESH_SHADER_TOKEN:
                    this._shaders.push(this.parseLiteralstring());
                    break;
                case MD5MeshParser.MESH_NUM_VERTS_TOKEN:
                    positionData = new Array(this.getNextInt());
                    break;
                case MD5MeshParser.MESH_NUM_TRIS_TOKEN:
                    indices = new Array(this.getNextInt() * 3) /*uint*/;
                    break;
                case MD5MeshParser.MESH_NUM_WEIGHTS_TOKEN:
                    weights = new Array(this.getNextInt());
                    break;
                case MD5MeshParser.MESH_VERT_TOKEN:
                    this.parseVertex(positionData);
                    break;
                case MD5MeshParser.MESH_TRI_TOKEN:
                    this.parseTri(indices);
                    break;
                case MD5MeshParser.MESH_WEIGHT_TOKEN:
                    this.parseJoint(weights);
                    break;
            }
        }
        if (this._elementsData == null)
            this._elementsData = new Array();
        var i = this._elementsData.length;
        this._elementsData[i] = new ElementsData();
        this._elementsData[i].positionData = positionData;
        this._elementsData[i].weightData = weights;
        this._elementsData[i].indices = indices;
    };
    /**
     * Converts the sprite data to a SkinnedSub instance.
     * @param positionData The sprite's positions.
     * @param weights The joint weights per position.
     * @param indices The indices for the faces.
     * @return A TriangleElements instance containing all elements data for the current sprite.
     */
    MD5MeshParser.prototype.translateElements = function (positionData, weights, indices /*uint*/) {
        var len = positionData.length;
        var v1 /*int*/, v2 /*int*/, v3;
        var position;
        var weight;
        var bindPose;
        var pos;
        var elements = new TriangleElements_1.TriangleElements(new AttributesBuffer_1.AttributesBuffer());
        var uvs = new Array(len * 2);
        var positions = new Array(len * 3);
        var jointIndices = new Array(len * this._maxJointCount);
        var jointWeights = new Array(len * this._maxJointCount);
        var l = 0;
        var nonZeroWeights;
        for (var i = 0; i < len; ++i) {
            position = positionData[i];
            v1 = position.index * 3;
            v2 = v1 + 1;
            v3 = v1 + 2;
            positions[v1] = positions[v2] = positions[v3] = 0;
            nonZeroWeights = 0;
            for (var j = 0; j < position.countWeight; ++j) {
                weight = weights[position.startWeight + j];
                if (weight.bias > 0) {
                    bindPose = this._bindPoses[weight.joint];
                    pos = bindPose.transformVector(weight.pos);
                    positions[v1] += pos.x * weight.bias;
                    positions[v2] += pos.y * weight.bias;
                    positions[v3] += pos.z * weight.bias;
                    // indices need to be multiplied by 3 (amount of matrix registers)
                    jointIndices[l] = weight.joint * 3;
                    jointWeights[l++] = weight.bias;
                    ++nonZeroWeights;
                }
            }
            for (j = nonZeroWeights; j < this._maxJointCount; ++j) {
                jointIndices[l] = 0;
                jointWeights[l++] = 0;
            }
            v1 = position.index << 1;
            uvs[v1++] = position.s;
            uvs[v1] = position.t;
        }
        elements.jointsPerVertex = this._maxJointCount;
        elements.setIndices(indices);
        elements.setPositions(positions);
        elements.setUVs(uvs);
        elements.setJointIndices(jointIndices);
        elements.setJointWeights(jointWeights);
        // cause explicit updates
        elements.setNormals(null);
        elements.setTangents(null);
        // turn auto updates off because they may be animated and set explicitly
        elements.autoDeriveTangents = false;
        elements.autoDeriveNormals = false;
        return elements;
    };
    /**
     * Retrieve the next triplet of position indices that form a face.
     * @param indices The index list in which to store the read data.
     */
    MD5MeshParser.prototype.parseTri = function (indices /*uint*/) {
        var index = this.getNextInt() * 3;
        indices[index] = this.getNextInt();
        indices[index + 1] = this.getNextInt();
        indices[index + 2] = this.getNextInt();
    };
    /**
     * Reads a new joint data set for a single joint.
     * @param weights the target list to contain the weight data.
     */
    MD5MeshParser.prototype.parseJoint = function (weights) {
        var weight = new JointData();
        weight.index = this.getNextInt();
        weight.joint = this.getNextInt();
        weight.bias = this.getNextNumber();
        weight.pos = this.parseVector3D();
        weights[weight.index] = weight;
    };
    /**
     * Reads the data for a single position.
     * @param positionData The list to contain the position data.
     */
    MD5MeshParser.prototype.parseVertex = function (positionData) {
        var position = new PositionData();
        position.index = this.getNextInt();
        this.parseUV(position);
        position.startWeight = this.getNextInt();
        position.countWeight = this.getNextInt();
        //			if (position.countWeight > _maxJointCount) _maxJointCount = position.countWeight;
        positionData[position.index] = position;
    };
    /**
     * Reads the next uv coordinate.
     * @param positionData The positionData to contain the UV coordinates.
     */
    MD5MeshParser.prototype.parseUV = function (positionData) {
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        positionData.s = this.getNextNumber();
        positionData.t = this.getNextNumber();
        if (this.getNextToken() != ")")
            this.sendParseError(")");
    };
    /**
     * Gets the next token in the data stream.
     */
    MD5MeshParser.prototype.getNextToken = function () {
        var ch;
        var token = "";
        while (!this._reachedEOF) {
            ch = this.getNextChar();
            if (ch == " " || ch == "\r" || ch == "\n" || ch == "\t") {
                if (token != MD5MeshParser.COMMENT_TOKEN)
                    this.skipWhiteSpace();
                if (token != "")
                    return token;
            }
            else
                token += ch;
            if (token == MD5MeshParser.COMMENT_TOKEN)
                return token;
        }
        return token;
    };
    /**
     * Skips all whitespace in the data stream.
     */
    MD5MeshParser.prototype.skipWhiteSpace = function () {
        var ch;
        do
            ch = this.getNextChar();
        while (ch == "\n" || ch == " " || ch == "\r" || ch == "\t");
        this.putBack();
    };
    /**
     * Skips to the next line.
     */
    MD5MeshParser.prototype.ignoreLine = function () {
        var ch;
        while (!this._reachedEOF && ch != "\n")
            ch = this.getNextChar();
    };
    /**
     * Retrieves the next single character in the data stream.
     */
    MD5MeshParser.prototype.getNextChar = function () {
        var ch = this._textData.charAt(this._parseIndex++);
        if (ch == "\n") {
            ++this._line;
            this._charLineIndex = 0;
        }
        else if (ch != "\r")
            ++this._charLineIndex;
        if (this._parseIndex >= this._textData.length)
            this._reachedEOF = true;
        return ch;
    };
    /**
     * Retrieves the next integer in the data stream.
     */
    MD5MeshParser.prototype.getNextInt = function () {
        var i = parseInt(this.getNextToken());
        if (isNaN(i))
            this.sendParseError("int type");
        return i;
    };
    /**
     * Retrieves the next floating point number in the data stream.
     */
    MD5MeshParser.prototype.getNextNumber = function () {
        var f = parseFloat(this.getNextToken());
        if (isNaN(f))
            this.sendParseError("float type");
        return f;
    };
    /**
     * Retrieves the next 3d vector in the data stream.
     */
    MD5MeshParser.prototype.parseVector3D = function () {
        var vec = new Vector3D_1.Vector3D();
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        vec.x = -this.getNextNumber();
        vec.y = this.getNextNumber();
        vec.z = this.getNextNumber();
        if (this.getNextToken() != ")")
            this.sendParseError(")");
        return vec;
    };
    /**
     * Retrieves the next quaternion in the data stream.
     */
    MD5MeshParser.prototype.parseQuaternion = function () {
        var quat = new Quaternion_1.Quaternion();
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        quat.x = this.getNextNumber();
        quat.y = -this.getNextNumber();
        quat.z = -this.getNextNumber();
        // quat supposed to be unit length
        var t = 1 - quat.x * quat.x - quat.y * quat.y - quat.z * quat.z;
        quat.w = t < 0 ? 0 : -Math.sqrt(t);
        if (this.getNextToken() != ")")
            this.sendParseError(")");
        var rotQuat = new Quaternion_1.Quaternion();
        rotQuat.multiply(this._rotationQuat, quat);
        return rotQuat;
    };
    /**
     * Parses the command line data.
     */
    MD5MeshParser.prototype.parseCMD = function () {
        // just ignore the command line property
        this.parseLiteralstring();
    };
    /**
     * Retrieves the next literal string in the data stream. A literal string is a sequence of characters bounded
     * by double quotes.
     */
    MD5MeshParser.prototype.parseLiteralstring = function () {
        this.skipWhiteSpace();
        var ch = this.getNextChar();
        var str = "";
        if (ch != "\"")
            this.sendParseError("\"");
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            ch = this.getNextChar();
            if (ch != "\"")
                str += ch;
        } while (ch != "\"");
        return str;
    };
    /**
     * Throws an end-of-file error when a premature end of file was encountered.
     */
    MD5MeshParser.prototype.sendEOFError = function () {
        throw new Error("Unexpected end of file");
    };
    /**
     * Throws an error when an unexpected token was encountered.
     * @param expected The token type that was actually expected.
     */
    MD5MeshParser.prototype.sendParseError = function (expected) {
        throw new Error("Unexpected token at line " + (this._line + 1) + ", character " + this._charLineIndex + ". " + expected + " expected, but " + this._textData.charAt(this._parseIndex - 1) + " encountered");
    };
    /**
     * Throws an error when an unknown keyword was encountered.
     */
    MD5MeshParser.prototype.sendUnknownKeywordError = function () {
        throw new Error("Unknown keyword at line " + (this._line + 1) + ", character " + this._charLineIndex + ". ");
    };
    MD5MeshParser.VERSION_TOKEN = "MD5Version";
    MD5MeshParser.COMMAND_LINE_TOKEN = "commandline";
    MD5MeshParser.NUM_JOINTS_TOKEN = "numJoints";
    MD5MeshParser.NUM_MESHES_TOKEN = "numMeshes";
    MD5MeshParser.COMMENT_TOKEN = "//";
    MD5MeshParser.JOINTS_TOKEN = "joints";
    MD5MeshParser.MESH_TOKEN = "mesh";
    MD5MeshParser.MESH_SHADER_TOKEN = "shader";
    MD5MeshParser.MESH_NUM_VERTS_TOKEN = "numverts";
    MD5MeshParser.MESH_VERT_TOKEN = "vert";
    MD5MeshParser.MESH_NUM_TRIS_TOKEN = "numtris";
    MD5MeshParser.MESH_TRI_TOKEN = "tri";
    MD5MeshParser.MESH_NUM_WEIGHTS_TOKEN = "numweights";
    MD5MeshParser.MESH_WEIGHT_TOKEN = "weight";
    return MD5MeshParser;
}(ParserBase_1.ParserBase));
exports.MD5MeshParser = MD5MeshParser;
var PositionData = (function () {
    function PositionData() {
    }
    return PositionData;
}());
exports.PositionData = PositionData;
var JointData = (function () {
    function JointData() {
    }
    return JointData;
}());
exports.JointData = JointData;
var ElementsData = (function () {
    function ElementsData() {
    }
    return ElementsData;
}());
exports.ElementsData = ElementsData;
},{"awayjs-core/lib/attributes/AttributesBuffer":undefined,"awayjs-core/lib/geom/Quaternion":undefined,"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-display/lib/display/DisplayObjectContainer":undefined,"awayjs-display/lib/display/Sprite":undefined,"awayjs-display/lib/graphics/TriangleElements":undefined,"awayjs-renderergl/lib/animators/SkeletonAnimationSet":undefined,"awayjs-renderergl/lib/animators/data/Skeleton":undefined,"awayjs-renderergl/lib/animators/data/SkeletonJoint":undefined}],"awayjs-parsers/lib/Max3DSParser":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttributesBuffer_1 = require("awayjs-core/lib/attributes/AttributesBuffer");
var BitmapImage2D_1 = require("awayjs-core/lib/image/BitmapImage2D");
var Matrix3D_1 = require("awayjs-core/lib/geom/Matrix3D");
var Vector3D_1 = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat_1 = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("awayjs-core/lib/net/URLRequest");
var ParserBase_1 = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils_1 = require("awayjs-core/lib/parsers/ParserUtils");
var TriangleElements_1 = require("awayjs-display/lib/graphics/TriangleElements");
var DisplayObjectContainer_1 = require("awayjs-display/lib/display/DisplayObjectContainer");
var Sprite_1 = require("awayjs-display/lib/display/Sprite");
var DefaultMaterialManager_1 = require("awayjs-display/lib/managers/DefaultMaterialManager");
var Single2DTexture_1 = require("awayjs-display/lib/textures/Single2DTexture");
var MethodMaterial_1 = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodMaterialMode_1 = require("awayjs-methodmaterials/lib/MethodMaterialMode");
/**
 * Max3DSParser provides a parser for the 3ds data type.
 */
var Max3DSParser = (function (_super) {
    __extends(Max3DSParser, _super);
    /**
     * Creates a new <code>Max3DSParser</code> object.
     *
     * @param useSmoothingGroups Determines whether the parser looks for smoothing groups in the 3ds file or assumes uniform smoothing. Defaults to true.
     */
    function Max3DSParser(useSmoothingGroups) {
        if (useSmoothingGroups === void 0) { useSmoothingGroups = true; }
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.ARRAY_BUFFER);
        this._useSmoothingGroups = useSmoothingGroups;
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    Max3DSParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "3ds";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    Max3DSParser.supportsData = function (data) {
        var ba;
        ba = ParserUtils_1.ParserUtils.toByteArray(data);
        if (ba) {
            ba.position = 0;
            if (ba.readShort() == 0x4d4d)
                return true;
        }
        return false;
    };
    /**
     * @inheritDoc
     */
    Max3DSParser.prototype._iResolveDependency = function (resourceDependency) {
        if (resourceDependency.assets.length == 1) {
            var asset;
            asset = resourceDependency.assets[0];
            if (asset.isAsset(BitmapImage2D_1.BitmapImage2D)) {
                var tex;
                tex = this._textures[resourceDependency.id];
                tex.texture = new Single2DTexture_1.Single2DTexture(asset);
            }
        }
    };
    /**
     * @inheritDoc
     */
    Max3DSParser.prototype._iResolveDependencyFailure = function (resourceDependency) {
        // TODO: Implement
    };
    /**
     * @inheritDoc
     */
    Max3DSParser.prototype._pProceedParsing = function () {
        if (!this._byteData) {
            this._byteData = this._pGetByteData();
            this._byteData.position = 0;
            //----------------------------------------------------------------------------
            // LITTLE_ENDIAN - Default for ArrayBuffer / Not implemented in ByteArray
            //----------------------------------------------------------------------------
            //this._byteData.endian = Endian.LITTLE_ENDIAN;// Should be default
            //----------------------------------------------------------------------------
            this._textures = {};
            this._materials = {};
            this._unfinalized_objects = {};
        }
        // TODO: With this construct, the loop will run no-op for as long
        // as there is time once file has finished reading. Consider a nice
        // way to stop loop when byte array is empty, without putting it in
        // the while-conditional, which will prevent finalizations from
        // happening after the last chunk.
        while (this._pHasTime()) {
            // If we are currently working on an object, and the most recent chunk was
            // the last one in that object, finalize the current object.
            if (this._cur_mat && this._byteData.position >= this._cur_mat_end)
                this.finalizeCurrentMaterial();
            else if (this._cur_obj && this._byteData.position >= this._cur_obj_end) {
                // Can't finalize at this point, because we have to wait until the full
                // animation section has been parsed for any potential pivot definitions
                this._unfinalized_objects[this._cur_obj.name] = this._cur_obj;
                this._cur_obj_end = Number.MAX_VALUE /*uint*/;
                this._cur_obj = null;
            }
            if (this._byteData.getBytesAvailable() > 0) {
                var cid;
                var len;
                var end;
                cid = this._byteData.readUnsignedShort();
                len = this._byteData.readUnsignedInt();
                end = this._byteData.position + (len - 6);
                switch (cid) {
                    case 0x4D4D: // MAIN3DS
                    case 0x3D3D: // EDIT3DS
                    case 0xB000:
                        // This types are "container chunks" and contain only
                        // sub-chunks (no data on their own.) This means that
                        // there is nothing more to parse at this point, and
                        // instead we should progress to the next chunk, which
                        // will be the first sub-chunk of this one.
                        continue;
                    case 0xAFFF:
                        this._cur_mat_end = end;
                        this._cur_mat = this.parseMaterial();
                        break;
                    case 0x4000:
                        this._cur_obj_end = end;
                        this._cur_obj = new ObjectVO();
                        this._cur_obj.name = this.readNulTermstring();
                        this._cur_obj.materials = new Array();
                        this._cur_obj.materialFaces = {};
                        break;
                    case 0x4100:
                        this._cur_obj.type = Sprite_1.Sprite.assetType;
                        break;
                    case 0x4110:
                        this.parseVertexList();
                        break;
                    case 0x4120:
                        this.parseFaceList();
                        break;
                    case 0x4140:
                        this.parseUVList();
                        break;
                    case 0x4130:
                        this.parseFaceMaterialList();
                        break;
                    case 0x4160:
                        this._cur_obj.transform = this.readTransform();
                        break;
                    case 0xB002:
                        this.parseObjectAnimation(end);
                        break;
                    case 0x4150:
                        this.parseSmoothingGroups();
                        break;
                    default:
                        // Skip this (unknown) chunk
                        this._byteData.position += (len - 6);
                        break;
                }
                // Pause parsing if there were any dependencies found during this
                // iteration (i.e. if there are any dependencies that need to be
                // retrieved at this time.)
                if (this.dependencies.length) {
                    this._pPauseAndRetrieveDependencies();
                    break;
                }
            }
        }
        // More parsing is required if the entire byte array has not yet
        // been read, or if there is a currently non-finalized object in
        // the pipeline.
        if (this._byteData.getBytesAvailable() || this._cur_obj || this._cur_mat) {
            return ParserBase_1.ParserBase.MORE_TO_PARSE;
        }
        else {
            var name;
            // Finalize any remaining objects before ending.
            for (name in this._unfinalized_objects) {
                var obj;
                obj = this.constructObject(this._unfinalized_objects[name]);
                if (obj) {
                    //add to the content property
                    this._pContent.addChild(obj);
                    this._pFinalizeAsset(obj, name);
                }
            }
            return ParserBase_1.ParserBase.PARSING_DONE;
        }
    };
    Max3DSParser.prototype._pStartParsing = function (frameLimit) {
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer_1.DisplayObjectContainer();
        _super.prototype._pStartParsing.call(this, frameLimit);
    };
    Max3DSParser.prototype.parseMaterial = function () {
        var mat;
        mat = new MaterialVO();
        while (this._byteData.position < this._cur_mat_end) {
            var cid;
            var len;
            var end;
            cid = this._byteData.readUnsignedShort();
            len = this._byteData.readUnsignedInt();
            end = this._byteData.position + (len - 6);
            switch (cid) {
                case 0xA000:
                    mat.name = this.readNulTermstring();
                    break;
                case 0xA010:
                    mat.ambientColor = this.readColor();
                    break;
                case 0xA020:
                    mat.diffuseColor = this.readColor();
                    break;
                case 0xA030:
                    mat.specularColor = this.readColor();
                    break;
                case 0xA081:
                    mat.twoSided = true;
                    break;
                case 0xA200:
                    mat.colorMap = this.parseTexture(end);
                    break;
                case 0xA204:
                    mat.specularMap = this.parseTexture(end);
                    break;
                default:
                    this._byteData.position = end;
                    break;
            }
        }
        return mat;
    };
    Max3DSParser.prototype.parseTexture = function (end /*uint*/) {
        var tex;
        tex = new TextureVO();
        while (this._byteData.position < end) {
            var cid;
            var len;
            cid = this._byteData.readUnsignedShort();
            len = this._byteData.readUnsignedInt();
            switch (cid) {
                case 0xA300:
                    tex.url = this.readNulTermstring();
                    break;
                default:
                    // Skip this unknown texture sub-chunk
                    this._byteData.position += (len - 6);
                    break;
            }
        }
        this._textures[tex.url] = tex;
        this._pAddDependency(tex.url, new URLRequest_1.URLRequest(tex.url));
        return tex;
    };
    Max3DSParser.prototype.parseVertexList = function () {
        var i;
        var len;
        var count;
        count = this._byteData.readUnsignedShort();
        this._cur_obj.verts = new Array(count * 3);
        i = 0;
        len = this._cur_obj.verts.length;
        while (i < len) {
            var x, y, z;
            x = this._byteData.readFloat();
            y = this._byteData.readFloat();
            z = this._byteData.readFloat();
            this._cur_obj.verts[i++] = x;
            this._cur_obj.verts[i++] = z;
            this._cur_obj.verts[i++] = y;
        }
    };
    Max3DSParser.prototype.parseFaceList = function () {
        var i;
        var len;
        var count;
        count = this._byteData.readUnsignedShort();
        this._cur_obj.indices = new Array(count * 3) /*uint*/;
        i = 0;
        len = this._cur_obj.indices.length;
        while (i < len) {
            var i0 /*uint*/, i1 /*uint*/, i2;
            i0 = this._byteData.readUnsignedShort();
            i1 = this._byteData.readUnsignedShort();
            i2 = this._byteData.readUnsignedShort();
            this._cur_obj.indices[i++] = i0;
            this._cur_obj.indices[i++] = i2;
            this._cur_obj.indices[i++] = i1;
            // Skip "face info", irrelevant in Away3D
            this._byteData.position += 2;
        }
        this._cur_obj.smoothingGroups = new Array(count) /*uint*/;
    };
    Max3DSParser.prototype.parseSmoothingGroups = function () {
        var len = this._cur_obj.indices.length / 3;
        var i = 0;
        while (i < len) {
            this._cur_obj.smoothingGroups[i] = this._byteData.readUnsignedInt();
            i++;
        }
    };
    Max3DSParser.prototype.parseUVList = function () {
        var i;
        var len;
        var count;
        count = this._byteData.readUnsignedShort();
        this._cur_obj.uvs = new Array(count * 2);
        i = 0;
        len = this._cur_obj.uvs.length;
        while (i < len) {
            this._cur_obj.uvs[i++] = this._byteData.readFloat();
            this._cur_obj.uvs[i++] = 1.0 - this._byteData.readFloat();
        }
    };
    Max3DSParser.prototype.parseFaceMaterialList = function () {
        var mat;
        var count;
        var i;
        var faces;
        mat = this.readNulTermstring();
        count = this._byteData.readUnsignedShort();
        faces = new Array(count) /*uint*/;
        i = 0;
        while (i < faces.length)
            faces[i++] = this._byteData.readUnsignedShort();
        this._cur_obj.materials.push(mat);
        this._cur_obj.materialFaces[mat] = faces;
    };
    Max3DSParser.prototype.parseObjectAnimation = function (end) {
        var vo;
        var obj;
        var pivot;
        var name;
        var hier;
        // Pivot defaults to origin
        pivot = new Vector3D_1.Vector3D;
        while (this._byteData.position < end) {
            var cid;
            var len;
            cid = this._byteData.readUnsignedShort();
            len = this._byteData.readUnsignedInt();
            switch (cid) {
                case 0xb010:
                    name = this.readNulTermstring();
                    this._byteData.position += 4;
                    hier = this._byteData.readShort();
                    break;
                case 0xb013:
                    pivot.x = this._byteData.readFloat();
                    pivot.z = this._byteData.readFloat();
                    pivot.y = this._byteData.readFloat();
                    break;
                default:
                    this._byteData.position += (len - 6);
                    break;
            }
        }
        // If name is "$$$DUMMY" this is an empty object (e.g. a container)
        // and will be ignored in this version of the parser
        // TODO: Implement containers in 3DS parser.
        if (name != '$$$DUMMY' && this._unfinalized_objects.hasOwnProperty(name)) {
            vo = this._unfinalized_objects[name];
            obj = this.constructObject(vo, pivot);
            if (obj) {
                //add to the content property
                this._pContent.addChild(obj);
                this._pFinalizeAsset(obj, vo.name);
            }
            delete this._unfinalized_objects[name];
        }
    };
    Max3DSParser.prototype.constructObject = function (obj, pivot) {
        if (pivot === void 0) { pivot = null; }
        if (obj.type == Sprite_1.Sprite.assetType) {
            var i;
            var sub;
            var graphics;
            var mat;
            var sprite;
            var mtx;
            var vertices;
            var faces;
            if (obj.materials.length > 1)
                console.log("The Away3D 3DS parser does not support multiple materials per sprite at this point.");
            // Ignore empty objects
            if (!obj.indices || obj.indices.length == 0)
                return null;
            vertices = new Array(obj.verts.length / 3);
            faces = new Array(obj.indices.length / 3);
            this.prepareData(vertices, faces, obj);
            if (this._useSmoothingGroups)
                this.applySmoothGroups(vertices, faces);
            obj.verts = new Array(vertices.length * 3);
            for (i = 0; i < vertices.length; i++) {
                obj.verts[i * 3] = vertices[i].x;
                obj.verts[i * 3 + 1] = vertices[i].y;
                obj.verts[i * 3 + 2] = vertices[i].z;
            }
            obj.indices = new Array(faces.length * 3) /*uint*/;
            for (i = 0; i < faces.length; i++) {
                obj.indices[i * 3] = faces[i].a;
                obj.indices[i * 3 + 1] = faces[i].b;
                obj.indices[i * 3 + 2] = faces[i].c;
            }
            if (obj.uvs) {
                // If the object had UVs to start with, use UVs generated by
                // smoothing group splitting algorithm. Otherwise those UVs
                // will be nonsense and should be skipped.
                obj.uvs = new Array(vertices.length * 2);
                for (i = 0; i < vertices.length; i++) {
                    obj.uvs[i * 2] = vertices[i].u;
                    obj.uvs[i * 2 + 1] = vertices[i].v;
                }
            }
            if (obj.materials.length > 0) {
                var mname;
                mname = obj.materials[0];
                mat = this._materials[mname].material;
            }
            // Build sprite and return it
            sprite = new Sprite_1.Sprite(mat);
            sprite.transform.matrix3D = new Matrix3D_1.Matrix3D(obj.transform);
            graphics = sprite.graphics;
            // Construct elements (potentially splitting buffers)
            // and add them to graphics.
            sub = new TriangleElements_1.TriangleElements(new AttributesBuffer_1.AttributesBuffer());
            sub.setIndices(obj.indices);
            sub.setPositions(obj.verts);
            sub.setUVs(obj.uvs);
            graphics.addGraphic(sub);
            // Apply pivot translation to graphics if a pivot was
            // found while parsing the keyframe chunk earlier.
            if (pivot) {
                if (obj.transform) {
                    // If a transform was found while parsing the
                    // object chunk, use it to find the local pivot vector
                    mtx = new Matrix3D_1.Matrix3D(obj.transform);
                    mtx.rawData[12] = 0;
                    mtx.rawData[13] = 0;
                    mtx.rawData[14] = 0;
                    pivot = mtx.transformVector(pivot);
                }
                pivot.scaleBy(-1);
                mtx = new Matrix3D_1.Matrix3D();
                mtx.appendTranslation(pivot.x, pivot.y, pivot.z);
                graphics.applyTransformation(mtx);
            }
            // Apply transformation to graphics if a transformation
            // was found while parsing the object chunk earlier.
            if (obj.transform) {
                mtx = new Matrix3D_1.Matrix3D(obj.transform);
                mtx.invert();
                graphics.applyTransformation(mtx);
            }
            // Final transform applied to graphics. Finalize the graphics,
            // which will no longer be modified after this point.
            this._pFinalizeAsset(graphics, obj.name.concat('_graphics'));
            return sprite;
        }
        // If reached, unknown
        return null;
    };
    Max3DSParser.prototype.prepareData = function (vertices, faces, obj) {
        // convert raw ObjectVO's data to structured VertexVO and FaceVO
        var i;
        var j;
        var k;
        var len = obj.verts.length;
        for (i = 0, j = 0, k = 0; i < len;) {
            var v = new VertexVO;
            v.x = obj.verts[i++];
            v.y = obj.verts[i++];
            v.z = obj.verts[i++];
            if (obj.uvs) {
                v.u = obj.uvs[j++];
                v.v = obj.uvs[j++];
            }
            vertices[k++] = v;
        }
        len = obj.indices.length;
        for (i = 0, k = 0; i < len;) {
            var f = new FaceVO();
            f.a = obj.indices[i++];
            f.b = obj.indices[i++];
            f.c = obj.indices[i++];
            f.smoothGroup = obj.smoothingGroups[k] || 0;
            faces[k++] = f;
        }
    };
    Max3DSParser.prototype.applySmoothGroups = function (vertices, faces) {
        // clone vertices according to following rule:
        // clone if vertex's in faces from groups 1+2 and 3
        // don't clone if vertex's in faces from groups 1+2, 3 and 1+3
        var i;
        var j;
        var k;
        var l;
        var len;
        var numVerts = vertices.length;
        var numFaces = faces.length;
        // extract groups data for vertices
        var vGroups = new Array(numVerts);
        for (i = 0; i < numVerts; i++)
            vGroups[i] = new Array() /*uint*/;
        for (i = 0; i < numFaces; i++) {
            var face = faces[i];
            for (j = 0; j < 3; j++) {
                var groups = vGroups[(j == 0) ? face.a : ((j == 1) ? face.b : face.c)];
                var group = face.smoothGroup;
                for (k = groups.length - 1; k >= 0; k--) {
                    if ((group & groups[k]) > 0) {
                        group |= groups[k];
                        groups.splice(k, 1);
                        k = groups.length - 1;
                    }
                }
                groups.push(group);
            }
        }
        // clone vertices
        var vClones = new Array(numVerts);
        for (i = 0; i < numVerts; i++) {
            if ((len = vGroups[i].length) < 1)
                continue;
            var clones = new Array(len);
            vClones[i] = clones;
            clones[0] = i;
            var v0 = vertices[i];
            for (j = 1; j < len; j++) {
                var v1 = new VertexVO;
                v1.x = v0.x;
                v1.y = v0.y;
                v1.z = v0.z;
                v1.u = v0.u;
                v1.v = v0.v;
                clones[j] = vertices.length;
                vertices.push(v1);
            }
        }
        numVerts = vertices.length;
        for (i = 0; i < numFaces; i++) {
            face = faces[i];
            group = face.smoothGroup;
            for (j = 0; j < 3; j++) {
                k = (j == 0) ? face.a : ((j == 1) ? face.b : face.c);
                groups = vGroups[k];
                len = groups.length;
                clones = vClones[k];
                for (l = 0; l < len; l++) {
                    if (((group == 0) && (groups[l] == 0)) || ((group & groups[l]) > 0)) {
                        var index = clones[l];
                        if (group == 0) {
                            // vertex is unique if no smoothGroup found
                            groups.splice(l, 1);
                            clones.splice(l, 1);
                        }
                        if (j == 0)
                            face.a = index;
                        else if (j == 1)
                            face.b = index;
                        else
                            face.c = index;
                        l = len;
                    }
                }
            }
        }
    };
    Max3DSParser.prototype.finalizeCurrentMaterial = function () {
        var mat;
        mat = new MethodMaterial_1.MethodMaterial(this._cur_mat.ambientColor);
        if (this._cur_mat.colorMap)
            mat.ambientMethod.texture = this._cur_mat.colorMap.texture || DefaultMaterialManager_1.DefaultMaterialManager.getDefaultTexture();
        mat.diffuseMethod.color = this._cur_mat.diffuseColor;
        mat.specularMethod.color = this._cur_mat.specularColor;
        if (this.materialMode >= 2)
            mat.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
        mat.bothSides = this._cur_mat.twoSided;
        this._pFinalizeAsset(mat, this._cur_mat.name);
        this._materials[this._cur_mat.name] = this._cur_mat;
        this._cur_mat.material = mat;
        this._cur_mat = null;
    };
    Max3DSParser.prototype.readNulTermstring = function () {
        var chr;
        var str = "";
        while ((chr = this._byteData.readUnsignedByte()) > 0)
            str += String.fromCharCode(chr);
        return str;
    };
    Max3DSParser.prototype.readTransform = function () {
        var data = new Float32Array(16);
        // X axis
        data[0] = this._byteData.readFloat(); // X
        data[2] = this._byteData.readFloat(); // Z
        data[1] = this._byteData.readFloat(); // Y
        data[3] = 0;
        // Z axis
        data[8] = this._byteData.readFloat(); // X
        data[10] = this._byteData.readFloat(); // Z
        data[9] = this._byteData.readFloat(); // Y
        data[11] = 0;
        // Y Axis
        data[4] = this._byteData.readFloat(); // X
        data[6] = this._byteData.readFloat(); // Z
        data[5] = this._byteData.readFloat(); // Y
        data[7] = 0;
        // Translation
        data[12] = this._byteData.readFloat(); // X
        data[14] = this._byteData.readFloat(); // Z
        data[13] = this._byteData.readFloat(); // Y
        data[15] = 1;
        return data;
    };
    Max3DSParser.prototype.readColor = function () {
        var cid;
        var len;
        var r /*int*/, g /*int*/, b;
        cid = this._byteData.readUnsignedShort();
        len = this._byteData.readUnsignedInt();
        switch (cid) {
            case 0x0010:
                r = this._byteData.readFloat() * 255;
                g = this._byteData.readFloat() * 255;
                b = this._byteData.readFloat() * 255;
                break;
            case 0x0011:
                r = this._byteData.readUnsignedByte();
                g = this._byteData.readUnsignedByte();
                b = this._byteData.readUnsignedByte();
                break;
            default:
                this._byteData.position += (len - 6);
                break;
        }
        return (r << 16) | (g << 8) | b;
    };
    return Max3DSParser;
}(ParserBase_1.ParserBase));
exports.Max3DSParser = Max3DSParser;
/**
 *
 */
var FaceVO = (function () {
    function FaceVO() {
    }
    return FaceVO;
}());
exports.FaceVO = FaceVO;
/**
 *
 */
var MaterialVO = (function () {
    function MaterialVO() {
    }
    return MaterialVO;
}());
exports.MaterialVO = MaterialVO;
/**
 *
 */
var ObjectVO = (function () {
    function ObjectVO() {
    }
    return ObjectVO;
}());
exports.ObjectVO = ObjectVO;
/**
 *
 */
var TextureVO = (function () {
    function TextureVO() {
    }
    return TextureVO;
}());
exports.TextureVO = TextureVO;
/**
 *
 */
var VertexVO = (function () {
    function VertexVO() {
    }
    return VertexVO;
}());
exports.VertexVO = VertexVO;
},{"awayjs-core/lib/attributes/AttributesBuffer":undefined,"awayjs-core/lib/geom/Matrix3D":undefined,"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/image/BitmapImage2D":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-display/lib/display/DisplayObjectContainer":undefined,"awayjs-display/lib/display/Sprite":undefined,"awayjs-display/lib/graphics/TriangleElements":undefined,"awayjs-display/lib/managers/DefaultMaterialManager":undefined,"awayjs-display/lib/textures/Single2DTexture":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/MethodMaterialMode":undefined}],"awayjs-parsers/lib/OBJParser":[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sampler2D_1 = require("awayjs-core/lib/image/Sampler2D");
var AttributesBuffer_1 = require("awayjs-core/lib/attributes/AttributesBuffer");
var BitmapImage2D_1 = require("awayjs-core/lib/image/BitmapImage2D");
var URLLoaderDataFormat_1 = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("awayjs-core/lib/net/URLRequest");
var ParserBase_1 = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils_1 = require("awayjs-core/lib/parsers/ParserUtils");
var TriangleElements_1 = require("awayjs-display/lib/graphics/TriangleElements");
var DisplayObjectContainer_1 = require("awayjs-display/lib/display/DisplayObjectContainer");
var Sprite_1 = require("awayjs-display/lib/display/Sprite");
var DefaultMaterialManager_1 = require("awayjs-display/lib/managers/DefaultMaterialManager");
var Single2DTexture_1 = require("awayjs-display/lib/textures/Single2DTexture");
var MethodMaterial_1 = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodMaterialMode_1 = require("awayjs-methodmaterials/lib/MethodMaterialMode");
var SpecularBasicMethod_1 = require("awayjs-methodmaterials/lib/methods/SpecularBasicMethod");
/**
 * OBJParser provides a parser for the OBJ data type.
 */
var OBJParser = (function (_super) {
    __extends(OBJParser, _super);
    /**
     * Creates a new OBJParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    function OBJParser(scale) {
        if (scale === void 0) { scale = 1; }
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.TEXT);
        this._mtlLibLoaded = true;
        this._activeMaterialID = "";
        this._scale = scale;
    }
    Object.defineProperty(OBJParser.prototype, "scale", {
        /**
         * Scaling factor applied directly to vertices data
         * @param value The scaling factor.
         */
        set: function (value) {
            this._scale = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    OBJParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "obj";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    OBJParser.supportsData = function (data) {
        var content = ParserUtils_1.ParserUtils.toString(data);
        var hasV = false;
        var hasF = false;
        if (content) {
            hasV = content.indexOf("\nv ") != -1;
            hasF = content.indexOf("\nf ") != -1;
        }
        return hasV && hasF;
    };
    /**
     * @inheritDoc
     */
    OBJParser.prototype._iResolveDependency = function (resourceDependency) {
        if (resourceDependency.id == 'mtl') {
            var str = ParserUtils_1.ParserUtils.toString(resourceDependency.data);
            this.parseMtl(str);
        }
        else {
            var asset;
            if (resourceDependency.assets.length != 1) {
                return;
            }
            asset = resourceDependency.assets[0];
            if (asset.isAsset(BitmapImage2D_1.BitmapImage2D)) {
                var lm = new LoadedMaterial();
                lm.materialID = resourceDependency.id;
                lm.texture = new Single2DTexture_1.Single2DTexture(asset);
                this._materialLoaded.push(lm);
                if (this._sprites.length > 0) {
                    this.applyMaterial(lm);
                }
            }
        }
    };
    /**
     * @inheritDoc
     */
    OBJParser.prototype._iResolveDependencyFailure = function (resourceDependency) {
        if (resourceDependency.id == "mtl") {
            this._mtlLib = false;
            this._mtlLibLoaded = false;
        }
        else {
            var lm = new LoadedMaterial();
            lm.materialID = resourceDependency.id;
            this._materialLoaded.push(lm);
        }
        if (this._sprites.length > 0)
            this.applyMaterial(lm);
    };
    /**
     * @inheritDoc
     */
    OBJParser.prototype._pProceedParsing = function () {
        var line;
        var creturn = String.fromCharCode(10);
        var trunk;
        if (!this._startedParsing) {
            this._textData = this._pGetTextData();
            // Merge linebreaks that are immediately preceeded by
            // the "escape" backward slash into single lines.
            this._textData = this._textData.replace(/\\[\r\n]+\s*/gm, ' ');
        }
        if (this._textData.indexOf(creturn) == -1)
            creturn = String.fromCharCode(13);
        if (!this._startedParsing) {
            this._startedParsing = true;
            this._vertices = new Array();
            this._vertexNormals = new Array();
            this._materialIDs = new Array();
            this._materialLoaded = new Array();
            this._sprites = new Array();
            this._uvs = new Array();
            this._stringLength = this._textData.length;
            this._charIndex = this._textData.indexOf(creturn, 0);
            this._oldIndex = 0;
            this._objects = new Array();
            this._objectIndex = 0;
        }
        while (this._charIndex < this._stringLength && this._pHasTime()) {
            this._charIndex = this._textData.indexOf(creturn, this._oldIndex);
            if (this._charIndex == -1)
                this._charIndex = this._stringLength;
            line = this._textData.substring(this._oldIndex, this._charIndex);
            line = line.split('\r').join("");
            line = line.replace("  ", " ");
            trunk = line.split(" ");
            this._oldIndex = this._charIndex + 1;
            this.parseLine(trunk);
            // If whatever was parsed on this line resulted in the
            // parsing being paused to retrieve dependencies, break
            // here and do not continue parsing until un-paused.
            if (this.parsingPaused) {
                return ParserBase_1.ParserBase.MORE_TO_PARSE;
            }
        }
        if (this._charIndex >= this._stringLength) {
            if (this._mtlLib && !this._mtlLibLoaded) {
                return ParserBase_1.ParserBase.MORE_TO_PARSE;
            }
            this.translate();
            this.applyMaterials();
            return ParserBase_1.ParserBase.PARSING_DONE;
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    OBJParser.prototype._pStartParsing = function (frameLimit) {
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer_1.DisplayObjectContainer();
        _super.prototype._pStartParsing.call(this, frameLimit);
    };
    /**
     * Parses a single line in the OBJ file.
     */
    OBJParser.prototype.parseLine = function (trunk) {
        switch (trunk[0]) {
            case "mtllib":
                this._mtlLib = true;
                this._mtlLibLoaded = false;
                this.loadMtl(trunk[1]);
                break;
            case "g":
                this.createGroup(trunk);
                break;
            case "o":
                this.createObject(trunk);
                break;
            case "usemtl":
                if (this._mtlLib) {
                    if (!trunk[1])
                        trunk[1] = "def000";
                    this._materialIDs.push(trunk[1]);
                    this._activeMaterialID = trunk[1];
                    if (this._currentGroup)
                        this._currentGroup.materialID = this._activeMaterialID;
                }
                break;
            case "v":
                this.parseVertex(trunk);
                break;
            case "vt":
                this.parseUV(trunk);
                break;
            case "vn":
                this.parseVertexNormal(trunk);
                break;
            case "f":
                this.parseFace(trunk);
        }
    };
    /**
     * Converts the parsed data into an Away3D scenegraph structure
     */
    OBJParser.prototype.translate = function () {
        for (var objIndex = 0; objIndex < this._objects.length; ++objIndex) {
            var groups = this._objects[objIndex].groups;
            var numGroups = groups.length;
            var materialGroups;
            var numMaterialGroups;
            var graphics;
            var sprite;
            var m;
            var sm;
            var bmMaterial;
            for (var g = 0; g < numGroups; ++g) {
                bmMaterial = new MethodMaterial_1.MethodMaterial(DefaultMaterialManager_1.DefaultMaterialManager.getDefaultImage2D());
                //check for multipass
                if (this.materialMode >= 2)
                    bmMaterial.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                sprite = new Sprite_1.Sprite(bmMaterial);
                graphics = sprite.graphics;
                materialGroups = groups[g].materialGroups;
                numMaterialGroups = materialGroups.length;
                for (m = 0; m < numMaterialGroups; ++m)
                    this.translateMaterialGroup(materialGroups[m], graphics);
                if (graphics.count == 0)
                    continue;
                // Finalize and force type-based name
                this._pFinalizeAsset(graphics); //, "");
                if (this._objects[objIndex].name) {
                    // this is a full independent object ('o' tag in OBJ file)
                    sprite.name = this._objects[objIndex].name;
                }
                else if (groups[g].name) {
                    // this is a group so the sub groups contain the actual sprite object names ('g' tag in OBJ file)
                    sprite.name = groups[g].name;
                }
                else {
                    // No name stored. Use empty string which will force it
                    // to be overridden by finalizeAsset() to type default.
                    sprite.name = "";
                }
                this._sprites.push(sprite);
                if (groups[g].materialID != "")
                    bmMaterial.name = groups[g].materialID + "~" + sprite.name;
                else
                    bmMaterial.name = this._lastMtlID + "~" + sprite.name;
                if (sprite.graphics.count > 1) {
                    for (sm = 1; sm < sprite.graphics.count; ++sm)
                        sprite.graphics.getGraphicAt(sm).material = bmMaterial;
                }
                //add to the content property
                this._pContent.addChild(sprite);
                this._pFinalizeAsset(sprite);
            }
        }
    };
    /**
     * Translates an obj's material group to a subgraphics.
     * @param materialGroup The material group data to convert.
     * @param graphics The Graphics to contain the converted Elements.
     */
    OBJParser.prototype.translateMaterialGroup = function (materialGroup, graphics) {
        var faces = materialGroup.faces;
        var face;
        var numFaces = faces.length;
        var numVerts;
        var elements;
        var vertices = new Array();
        var uvs = new Array();
        var normals = new Array();
        var indices = new Array();
        this._realIndices = [];
        this._vertexIndex = 0;
        var j;
        for (var i = 0; i < numFaces; ++i) {
            face = faces[i];
            numVerts = face.indexIds.length - 1;
            for (j = 1; j < numVerts; ++j) {
                this.translateVertexData(face, j, vertices, uvs, indices, normals);
                this.translateVertexData(face, 0, vertices, uvs, indices, normals);
                this.translateVertexData(face, j + 1, vertices, uvs, indices, normals);
            }
        }
        if (vertices.length > 0) {
            elements = new TriangleElements_1.TriangleElements(new AttributesBuffer_1.AttributesBuffer());
            elements.autoDeriveNormals = normals.length ? false : true;
            elements.setIndices(indices);
            elements.setPositions(vertices);
            elements.setNormals(normals);
            elements.setUVs(uvs);
            graphics.addGraphic(elements);
        }
    };
    OBJParser.prototype.translateVertexData = function (face, vertexIndex, vertices, uvs, indices /*uint*/, normals) {
        var index;
        var vertex;
        var vertexNormal;
        var uv;
        if (!this._realIndices[face.indexIds[vertexIndex]]) {
            index = this._vertexIndex;
            this._realIndices[face.indexIds[vertexIndex]] = ++this._vertexIndex;
            vertex = this._vertices[face.vertexIndices[vertexIndex] - 1];
            vertices.push(vertex.x * this._scale, vertex.y * this._scale, vertex.z * this._scale);
            if (face.normalIndices.length > 0) {
                vertexNormal = this._vertexNormals[face.normalIndices[vertexIndex] - 1];
                normals.push(vertexNormal.x, vertexNormal.y, vertexNormal.z);
            }
            if (face.uvIndices.length > 0) {
                try {
                    uv = this._uvs[face.uvIndices[vertexIndex] - 1];
                    uvs.push(uv.u, uv.v);
                }
                catch (e) {
                    switch (vertexIndex) {
                        case 0:
                            uvs.push(0, 1);
                            break;
                        case 1:
                            uvs.push(.5, 0);
                            break;
                        case 2:
                            uvs.push(1, 1);
                    }
                }
            }
        }
        else {
            index = this._realIndices[face.indexIds[vertexIndex]] - 1;
        }
        indices.push(index);
    };
    /**
     * Creates a new object group.
     * @param trunk The data block containing the object tag and its parameters
     */
    OBJParser.prototype.createObject = function (trunk) {
        this._currentGroup = null;
        this._currentMaterialGroup = null;
        this._objects.push(this._currentObject = new ObjectGroup());
        if (trunk)
            this._currentObject.name = trunk[1];
    };
    /**
     * Creates a new group.
     * @param trunk The data block containing the group tag and its parameters
     */
    OBJParser.prototype.createGroup = function (trunk) {
        if (!this._currentObject)
            this.createObject(null);
        this._currentGroup = new Group();
        this._currentGroup.materialID = this._activeMaterialID;
        if (trunk)
            this._currentGroup.name = trunk[1];
        this._currentObject.groups.push(this._currentGroup);
        this.createMaterialGroup(null);
    };
    /**
     * Creates a new material group.
     * @param trunk The data block containing the material tag and its parameters
     */
    OBJParser.prototype.createMaterialGroup = function (trunk) {
        this._currentMaterialGroup = new MaterialGroup();
        if (trunk)
            this._currentMaterialGroup.url = trunk[1];
        this._currentGroup.materialGroups.push(this._currentMaterialGroup);
    };
    /**
     * Reads the next vertex coordinates.
     * @param trunk The data block containing the vertex tag and its parameters
     */
    OBJParser.prototype.parseVertex = function (trunk) {
        //for the very rare cases of other delimiters/charcodes seen in some obj files
        var v1, v2, v3;
        if (trunk.length > 4) {
            var nTrunk = [];
            var val;
            for (var i = 1; i < trunk.length; ++i) {
                val = parseFloat(trunk[i]);
                if (!isNaN(val))
                    nTrunk.push(val);
            }
            v1 = nTrunk[0];
            v2 = nTrunk[1];
            v3 = -nTrunk[2];
            this._vertices.push(new Vertex(v1, v2, v3));
        }
        else {
            v1 = parseFloat(trunk[1]);
            v2 = parseFloat(trunk[2]);
            v3 = -parseFloat(trunk[3]);
            this._vertices.push(new Vertex(v1, v2, v3));
        }
    };
    /**
     * Reads the next uv coordinates.
     * @param trunk The data block containing the uv tag and its parameters
     */
    OBJParser.prototype.parseUV = function (trunk) {
        if (trunk.length > 3) {
            var nTrunk = [];
            var val;
            for (var i = 1; i < trunk.length; ++i) {
                val = parseFloat(trunk[i]);
                if (!isNaN(val))
                    nTrunk.push(val);
            }
            this._uvs.push(new UV(nTrunk[0], 1 - nTrunk[1]));
        }
        else {
            this._uvs.push(new UV(parseFloat(trunk[1]), 1 - parseFloat(trunk[2])));
        }
    };
    /**
     * Reads the next vertex normal coordinates.
     * @param trunk The data block containing the vertex normal tag and its parameters
     */
    OBJParser.prototype.parseVertexNormal = function (trunk) {
        if (trunk.length > 4) {
            var nTrunk = [];
            var val;
            for (var i = 1; i < trunk.length; ++i) {
                val = parseFloat(trunk[i]);
                if (!isNaN(val))
                    nTrunk.push(val);
            }
            this._vertexNormals.push(new Vertex(nTrunk[0], nTrunk[1], -nTrunk[2]));
        }
        else {
            this._vertexNormals.push(new Vertex(parseFloat(trunk[1]), parseFloat(trunk[2]), -parseFloat(trunk[3])));
        }
    };
    /**
     * Reads the next face's indices.
     * @param trunk The data block containing the face tag and its parameters
     */
    OBJParser.prototype.parseFace = function (trunk) {
        var len = trunk.length;
        var face = new FaceData();
        if (!this._currentGroup) {
            this.createGroup(null);
        }
        var indices;
        for (var i = 1; i < len; ++i) {
            if (trunk[i] == "") {
                continue;
            }
            indices = trunk[i].split("/");
            face.vertexIndices.push(this.parseIndex(parseInt(indices[0]), this._vertices.length));
            if (indices[1] && String(indices[1]).length > 0)
                face.uvIndices.push(this.parseIndex(parseInt(indices[1]), this._uvs.length));
            if (indices[2] && String(indices[2]).length > 0)
                face.normalIndices.push(this.parseIndex(parseInt(indices[2]), this._vertexNormals.length));
            face.indexIds.push(trunk[i]);
        }
        this._currentMaterialGroup.faces.push(face);
    };
    /**
     * This is a hack around negative face coords
     */
    OBJParser.prototype.parseIndex = function (index, length) {
        if (index < 0)
            return index + length + 1;
        else
            return index;
    };
    OBJParser.prototype.parseMtl = function (data) {
        var materialDefinitions = data.split('newmtl');
        var lines;
        var trunk;
        var j;
        var basicSpecularMethod;
        var useSpecular;
        var useColor;
        var diffuseColor;
        var color;
        var specularColor;
        var specular;
        var alpha;
        var mapkd;
        for (var i = 0; i < materialDefinitions.length; ++i) {
            lines = (materialDefinitions[i].split('\r')).join("").split('\n');
            //lines = (materialDefinitions[i].split('\r') as Array).join("").split('\n');
            if (lines.length == 1)
                lines = materialDefinitions[i].split(String.fromCharCode(13));
            diffuseColor = color = specularColor = 0xFFFFFF;
            specular = 0;
            useSpecular = false;
            useColor = false;
            alpha = 1;
            mapkd = "";
            for (j = 0; j < lines.length; ++j) {
                lines[j] = lines[j].replace(/\s+$/, "");
                if (lines[j].substring(0, 1) != "#" && (j == 0 || lines[j] != "")) {
                    trunk = lines[j].split(" ");
                    if (String(trunk[0]).charCodeAt(0) == 9 || String(trunk[0]).charCodeAt(0) == 32)
                        trunk[0] = trunk[0].substring(1, trunk[0].length);
                    if (j == 0) {
                        this._lastMtlID = trunk.join("");
                        this._lastMtlID = (this._lastMtlID == "") ? "def000" : this._lastMtlID;
                    }
                    else {
                        switch (trunk[0]) {
                            case "Ka":
                                if (trunk[1] && !isNaN(Number(trunk[1])) && trunk[2] && !isNaN(Number(trunk[2])) && trunk[3] && !isNaN(Number(trunk[3])))
                                    color = trunk[1] * 255 << 16 | trunk[2] * 255 << 8 | trunk[3] * 255;
                                break;
                            case "Ks":
                                if (trunk[1] && !isNaN(Number(trunk[1])) && trunk[2] && !isNaN(Number(trunk[2])) && trunk[3] && !isNaN(Number(trunk[3]))) {
                                    specularColor = trunk[1] * 255 << 16 | trunk[2] * 255 << 8 | trunk[3] * 255;
                                    useSpecular = true;
                                }
                                break;
                            case "Ns":
                                if (trunk[1] && !isNaN(Number(trunk[1])))
                                    specular = Number(trunk[1]) * 0.001;
                                if (specular == 0)
                                    useSpecular = false;
                                break;
                            case "Kd":
                                if (trunk[1] && !isNaN(Number(trunk[1])) && trunk[2] && !isNaN(Number(trunk[2])) && trunk[3] && !isNaN(Number(trunk[3]))) {
                                    diffuseColor = trunk[1] * 255 << 16 | trunk[2] * 255 << 8 | trunk[3] * 255;
                                    useColor = true;
                                }
                                break;
                            case "tr":
                            case "d":
                                if (trunk[1] && !isNaN(Number(trunk[1])))
                                    alpha = Number(trunk[1]);
                                break;
                            case "map_Kd":
                                mapkd = this.parseMapKdString(trunk);
                                mapkd = mapkd.replace(/\\/g, "/");
                        }
                    }
                }
            }
            if (mapkd != "") {
                if (useSpecular) {
                    basicSpecularMethod = new SpecularBasicMethod_1.SpecularBasicMethod();
                    basicSpecularMethod.color = specularColor;
                    basicSpecularMethod.strength = specular;
                    var specularData = new SpecularData();
                    specularData.alpha = alpha;
                    specularData.basicSpecularMethod = basicSpecularMethod;
                    specularData.materialID = this._lastMtlID;
                    if (!this._materialSpecularData)
                        this._materialSpecularData = new Array();
                    this._materialSpecularData.push(specularData);
                }
                this._pAddDependency(this._lastMtlID, new URLRequest_1.URLRequest(mapkd));
            }
            else if (useColor && !isNaN(color)) {
                var lm = new LoadedMaterial();
                lm.materialID = this._lastMtlID;
                if (alpha == 0)
                    console.log("Warning: an alpha value of 0 was found in mtl color tag (Tr or d) ref:" + this._lastMtlID + ", sprite(es) using it will be invisible!");
                var cm = new MethodMaterial_1.MethodMaterial(color);
                if (this.materialMode < 2) {
                    cm.alpha = alpha;
                }
                else {
                    cm.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                }
                cm.diffuseMethod.color = diffuseColor;
                if (useSpecular) {
                    cm.specularMethod.color = specularColor;
                    cm.specularMethod.strength = specular;
                }
                lm.cm = cm;
                this._materialLoaded.push(lm);
                if (this._sprites.length > 0)
                    this.applyMaterial(lm);
            }
        }
        this._mtlLibLoaded = true;
    };
    OBJParser.prototype.parseMapKdString = function (trunk) {
        var url = "";
        var i;
        var breakflag;
        for (i = 1; i < trunk.length;) {
            switch (trunk[i]) {
                case "-blendu":
                case "-blendv":
                case "-cc":
                case "-clamp":
                case "-texres":
                    i += 2; //Skip ahead 1 attribute
                    break;
                case "-mm":
                    i += 3; //Skip ahead 2 attributes
                    break;
                case "-o":
                case "-s":
                case "-t":
                    i += 4; //Skip ahead 3 attributes
                    continue;
                default:
                    breakflag = true;
                    break;
            }
            if (breakflag)
                break;
        }
        //Reconstruct URL/filename
        for (i; i < trunk.length; i++) {
            url += trunk[i];
            url += " ";
        }
        //Remove the extraneous space and/or newline from the right side
        url = url.replace(/\s+$/, "");
        return url;
    };
    OBJParser.prototype.loadMtl = function (mtlurl) {
        // Add raw-data dependency to queue and load dependencies now,
        // which will pause the parsing in the meantime.
        this._pAddDependency('mtl', new URLRequest_1.URLRequest(mtlurl), true);
        this._pPauseAndRetrieveDependencies(); //
    };
    OBJParser.prototype.applyMaterial = function (lm) {
        var decomposeID;
        var sprite;
        var tm;
        var j;
        var specularData;
        for (var i = 0; i < this._sprites.length; ++i) {
            sprite = this._sprites[i];
            decomposeID = sprite.material.name.split("~");
            if (decomposeID[0] == lm.materialID) {
                if (lm.cm) {
                    if (sprite.material)
                        sprite.material = null;
                    sprite.material = lm.cm;
                }
                else if (lm.texture) {
                    tm = sprite.material;
                    tm.ambientMethod.texture = lm.texture;
                    tm.style.color = lm.color;
                    tm.alpha = lm.alpha;
                    tm.style.sampler = new Sampler2D_1.Sampler2D(true);
                    if (this.materialMode < 2)
                        tm.alpha = lm.alpha;
                    else
                        tm.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                    if (lm.specularMethod) {
                        // By setting the specularMethod property to null before assigning
                        // the actual method instance, we avoid having the properties of
                        // the new method being overridden with the settings from the old
                        // one, which is default behavior of the setter.
                        tm.specularMethod = null;
                        tm.specularMethod = lm.specularMethod;
                    }
                    else if (this._materialSpecularData) {
                        for (j = 0; j < this._materialSpecularData.length; ++j) {
                            specularData = this._materialSpecularData[j];
                            if (specularData.materialID == lm.materialID) {
                                tm.specularMethod = null; // Prevent property overwrite (see above)
                                tm.specularMethod = specularData.basicSpecularMethod;
                                tm.specularMethod.color = specularData.color;
                                tm.specularMethod.strength = specularData.alpha;
                                break;
                            }
                        }
                    }
                }
                sprite.material.name = decomposeID[1] ? decomposeID[1] : decomposeID[0];
                this._sprites.splice(i, 1);
                --i;
            }
        }
        if (lm.cm || tm)
            this._pFinalizeAsset(lm.cm || tm);
    };
    OBJParser.prototype.applyMaterials = function () {
        if (this._materialLoaded.length == 0)
            return;
        for (var i = 0; i < this._materialLoaded.length; ++i)
            this.applyMaterial(this._materialLoaded[i]);
    };
    return OBJParser;
}(ParserBase_1.ParserBase));
exports.OBJParser = OBJParser;
var ObjectGroup = (function () {
    function ObjectGroup() {
        this.groups = new Array();
    }
    return ObjectGroup;
}());
exports.ObjectGroup = ObjectGroup;
var Group = (function () {
    function Group() {
        this.materialGroups = new Array();
    }
    return Group;
}());
exports.Group = Group;
var MaterialGroup = (function () {
    function MaterialGroup() {
        this.faces = new Array();
    }
    return MaterialGroup;
}());
exports.MaterialGroup = MaterialGroup;
var SpecularData = (function () {
    function SpecularData() {
        this.color = 0xFFFFFF;
        this.alpha = 1;
    }
    return SpecularData;
}());
exports.SpecularData = SpecularData;
var LoadedMaterial = (function () {
    function LoadedMaterial() {
        this.color = 0xFFFFFF;
        this.alpha = 1;
    }
    return LoadedMaterial;
}());
exports.LoadedMaterial = LoadedMaterial;
var FaceData = (function () {
    function FaceData() {
        this.vertexIndices = new Array();
        this.uvIndices = new Array();
        this.normalIndices = new Array();
        this.indexIds = new Array(); // used for real index lookups
    }
    return FaceData;
}());
exports.FaceData = FaceData;
/**
* Texture coordinates value object.
*/
var UV = (function () {
    /**
     * Creates a new <code>UV</code> object.
     *
     * @param    u        [optional]    The horizontal coordinate of the texture value. Defaults to 0.
     * @param    v        [optional]    The vertical coordinate of the texture value. Defaults to 0.
     */
    function UV(u, v) {
        if (u === void 0) { u = 0; }
        if (v === void 0) { v = 0; }
        this._u = u;
        this._v = v;
    }
    Object.defineProperty(UV.prototype, "v", {
        /**
         * Defines the vertical coordinate of the texture value.
         */
        get: function () {
            return this._v;
        },
        set: function (value) {
            this._v = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UV.prototype, "u", {
        /**
         * Defines the horizontal coordinate of the texture value.
         */
        get: function () {
            return this._u;
        },
        set: function (value) {
            this._u = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * returns a new UV value Object
     */
    UV.prototype.clone = function () {
        return new UV(this._u, this._v);
    };
    /**
     * returns the value object as a string for trace/debug purpose
     */
    UV.prototype.toString = function () {
        return this._u + "," + this._v;
    };
    return UV;
}());
exports.UV = UV;
var Vertex = (function () {
    /**
     * Creates a new <code>Vertex</code> value object.
     *
     * @param    x            [optional]    The x value. Defaults to 0.
     * @param    y            [optional]    The y value. Defaults to 0.
     * @param    z            [optional]    The z value. Defaults to 0.
     * @param    index        [optional]    The index value. Defaults is NaN.
     */
    function Vertex(x, y, z, index) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (index === void 0) { index = 0; }
        this._x = x;
        this._y = y;
        this._z = z;
        this._index = index;
    }
    Object.defineProperty(Vertex.prototype, "index", {
        get: function () {
            return this._index;
        },
        /**
         * To define/store the index of value object
         * @param    ind        The index
         */
        set: function (ind) {
            this._index = ind;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vertex.prototype, "x", {
        /**
         * To define/store the x value of the value object
         * @param    value        The x value
         */
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vertex.prototype, "y", {
        /**
         * To define/store the y value of the value object
         * @param    value        The y value
         */
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vertex.prototype, "z", {
        /**
         * To define/store the z value of the value object
         * @param    value        The z value
         */
        get: function () {
            return this._z;
        },
        set: function (value) {
            this._z = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * returns a new Vertex value Object
     */
    Vertex.prototype.clone = function () {
        return new Vertex(this._x, this._y, this._z);
    };
    return Vertex;
}());
exports.Vertex = Vertex;
},{"awayjs-core/lib/attributes/AttributesBuffer":undefined,"awayjs-core/lib/image/BitmapImage2D":undefined,"awayjs-core/lib/image/Sampler2D":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-display/lib/display/DisplayObjectContainer":undefined,"awayjs-display/lib/display/Sprite":undefined,"awayjs-display/lib/graphics/TriangleElements":undefined,"awayjs-display/lib/managers/DefaultMaterialManager":undefined,"awayjs-display/lib/textures/Single2DTexture":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/MethodMaterialMode":undefined,"awayjs-methodmaterials/lib/methods/SpecularBasicMethod":undefined}],"awayjs-parsers/lib/Parsers":[function(require,module,exports){
"use strict";
var Loader_1 = require("awayjs-core/lib/library/Loader");
var AWDParser_1 = require("./AWDParser");
var Max3DSParser_1 = require("./Max3DSParser");
var MD2Parser_1 = require("./MD2Parser");
var OBJParser_1 = require("./OBJParser");
var FNTParser_1 = require("./FNTParser");
/**
 *
 */
var Parsers = (function () {
    function Parsers() {
    }
    /**
     * Short-hand function to enable all bundled parsers for auto-detection. In practice,
     * this is the same as invoking enableParsers(Parsers.ALL_BUNDLED) on any of the
     * loader classes SingleFileLoader, LoaderSession, AssetLibrary or Loader3D.
     *
     * See notes about file size in the documentation for the ALL_BUNDLED constant.
     *
     * @see away.parsers.Parsers.ALL_BUNDLED
     */
    Parsers.enableAllBundled = function () {
        Loader_1.Loader.enableParsers(Parsers.ALL_BUNDLED);
    };
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
     * <li>Doom 3 MD5 sprites (.md5sprite)</li>
     * <li>Wavefront OBJ (.obj)</li>
     * <li>Collada (.dae)</li>
     * <li>Images (.jpg, .png)</li>
     * </ul>
     *
     * @see away.library.AssetLibrary.enableParser
     */
    Parsers.ALL_BUNDLED = Array(AWDParser_1.AWDParser, Max3DSParser_1.Max3DSParser, MD2Parser_1.MD2Parser, OBJParser_1.OBJParser, FNTParser_1.FNTParser);
    return Parsers;
}());
exports.Parsers = Parsers;
},{"./AWDParser":"awayjs-parsers/lib/AWDParser","./FNTParser":"awayjs-parsers/lib/FNTParser","./MD2Parser":"awayjs-parsers/lib/MD2Parser","./Max3DSParser":"awayjs-parsers/lib/Max3DSParser","./OBJParser":"awayjs-parsers/lib/OBJParser","awayjs-core/lib/library/Loader":undefined}]},{},[1])
//# sourceMappingURL=awayjs-parsers.js.map
