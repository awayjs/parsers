require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"awayjs-parsers/lib/AWDParser":[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BlendMode = require("awayjs-core/lib/data/BlendMode");
var Geometry = require("awayjs-core/lib/data/Geometry");
var CurveSubGeometry = require("awayjs-core/lib/data/CurveSubGeometry");
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var ColorTransform = require("awayjs-core/lib/geom/ColorTransform");
var Matrix3D = require("awayjs-core/lib/geom/Matrix3D");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var PerspectiveProjection = require("awayjs-core/lib/projections/PerspectiveProjection");
var OrthographicProjection = require("awayjs-core/lib/projections/OrthographicProjection");
var OrthographicOffCenterProjection = require("awayjs-core/lib/projections/OrthographicOffCenterProjection");
var BitmapCubeTexture = require("awayjs-core/lib/textures/BitmapCubeTexture");
var ImageCubeTexture = require("awayjs-core/lib/textures/ImageCubeTexture");
var ImageTexture = require("awayjs-core/lib/textures/ImageTexture");
var TextureBase = require("awayjs-core/lib/textures/TextureBase");
var ByteArray = require("awayjs-core/lib/utils/ByteArray");
var AnimationNodeBase = require("awayjs-display/lib/animators/nodes/AnimationNodeBase");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var LightBase = require("awayjs-display/lib/base/LightBase");
var DirectionalLight = require("awayjs-display/lib/entities/DirectionalLight");
var PointLight = require("awayjs-display/lib/entities/PointLight");
var Camera = require("awayjs-display/lib/entities/Camera");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var TextField = require("awayjs-display/lib/entities/TextField");
var Billboard = require("awayjs-display/lib/entities/Billboard");
var Skybox = require("awayjs-display/lib/entities/Skybox");
var DefaultMaterialManager = require("awayjs-display/lib/managers/DefaultMaterialManager");
var MaterialBase = require("awayjs-display/lib/materials/MaterialBase");
var LightPickerBase = require("awayjs-display/lib/materials/lightpickers/LightPickerBase");
var StaticLightPicker = require("awayjs-display/lib/materials/lightpickers/StaticLightPicker");
var CubeMapShadowMapper = require("awayjs-display/lib/materials/shadowmappers/CubeMapShadowMapper");
var DirectionalShadowMapper = require("awayjs-display/lib/materials/shadowmappers/DirectionalShadowMapper");
var PrefabBase = require("awayjs-display/lib/prefabs/PrefabBase");
var PrimitiveCapsulePrefab = require("awayjs-display/lib/prefabs/PrimitiveCapsulePrefab");
var PrimitiveConePrefab = require("awayjs-display/lib/prefabs/PrimitiveConePrefab");
var PrimitiveCubePrefab = require("awayjs-display/lib/prefabs/PrimitiveCubePrefab");
var PrimitiveCylinderPrefab = require("awayjs-display/lib/prefabs/PrimitiveCylinderPrefab");
var PrimitivePlanePrefab = require("awayjs-display/lib/prefabs/PrimitivePlanePrefab");
var PrimitiveSpherePrefab = require("awayjs-display/lib/prefabs/PrimitiveSpherePrefab");
var PrimitiveTorusPrefab = require("awayjs-display/lib/prefabs/PrimitiveTorusPrefab");
var AnimationSetBase = require("awayjs-renderergl/lib/animators/AnimationSetBase");
var VertexAnimationSet = require("awayjs-renderergl/lib/animators/VertexAnimationSet");
var VertexAnimator = require("awayjs-renderergl/lib/animators/VertexAnimator");
var SkeletonAnimationSet = require("awayjs-renderergl/lib/animators/SkeletonAnimationSet");
var SkeletonAnimator = require("awayjs-renderergl/lib/animators/SkeletonAnimator");
var JointPose = require("awayjs-renderergl/lib/animators/data/JointPose");
var Skeleton = require("awayjs-renderergl/lib/animators/data/Skeleton");
var SkeletonPose = require("awayjs-renderergl/lib/animators/data/SkeletonPose");
var SkeletonJoint = require("awayjs-renderergl/lib/animators/data/SkeletonJoint");
var SkeletonClipNode = require("awayjs-renderergl/lib/animators/nodes/SkeletonClipNode");
var VertexClipNode = require("awayjs-renderergl/lib/animators/nodes/VertexClipNode");
var MethodMaterialMode = require("awayjs-methodmaterials/lib/MethodMaterialMode");
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var AmbientEnvMapMethod = require("awayjs-methodmaterials/lib/methods/AmbientEnvMapMethod");
var DiffuseDepthMethod = require("awayjs-methodmaterials/lib/methods/DiffuseDepthMethod");
var DiffuseCelMethod = require("awayjs-methodmaterials/lib/methods/DiffuseCelMethod");
var DiffuseGradientMethod = require("awayjs-methodmaterials/lib/methods/DiffuseGradientMethod");
var DiffuseLightMapMethod = require("awayjs-methodmaterials/lib/methods/DiffuseLightMapMethod");
var DiffuseWrapMethod = require("awayjs-methodmaterials/lib/methods/DiffuseWrapMethod");
var EffectAlphaMaskMethod = require("awayjs-methodmaterials/lib/methods/EffectAlphaMaskMethod");
var EffectColorMatrixMethod = require("awayjs-methodmaterials/lib/methods/EffectColorMatrixMethod");
var EffectColorTransformMethod = require("awayjs-methodmaterials/lib/methods/EffectColorTransformMethod");
var EffectEnvMapMethod = require("awayjs-methodmaterials/lib/methods/EffectEnvMapMethod");
var EffectFogMethod = require("awayjs-methodmaterials/lib/methods/EffectFogMethod");
var EffectFresnelEnvMapMethod = require("awayjs-methodmaterials/lib/methods/EffectFresnelEnvMapMethod");
var EffectLightMapMethod = require("awayjs-methodmaterials/lib/methods/EffectLightMapMethod");
var EffectMethodBase = require("awayjs-methodmaterials/lib/methods/EffectMethodBase");
var EffectRimLightMethod = require("awayjs-methodmaterials/lib/methods/EffectRimLightMethod");
var NormalSimpleWaterMethod = require("awayjs-methodmaterials/lib/methods/NormalSimpleWaterMethod");
var ShadowDitheredMethod = require("awayjs-methodmaterials/lib/methods/ShadowDitheredMethod");
var ShadowFilteredMethod = require("awayjs-methodmaterials/lib/methods/ShadowFilteredMethod");
var ShadowMapMethodBase = require("awayjs-methodmaterials/lib/methods/ShadowMapMethodBase");
var SpecularFresnelMethod = require("awayjs-methodmaterials/lib/methods/SpecularFresnelMethod");
var ShadowHardMethod = require("awayjs-methodmaterials/lib/methods/ShadowHardMethod");
var SpecularAnisotropicMethod = require("awayjs-methodmaterials/lib/methods/SpecularAnisotropicMethod");
var SpecularCelMethod = require("awayjs-methodmaterials/lib/methods/SpecularCelMethod");
var SpecularPhongMethod = require("awayjs-methodmaterials/lib/methods/SpecularPhongMethod");
var ShadowNearMethod = require("awayjs-methodmaterials/lib/methods/ShadowNearMethod");
var ShadowSoftMethod = require("awayjs-methodmaterials/lib/methods/ShadowSoftMethod");
var CurveMaterial = require("awayjs-display/lib/materials/CurveMaterial");
var BasicMaterial = require("awayjs-display/lib/materials/BasicMaterial");
var AS2SceneGraphFactory = require("awayjs-player/lib/factories/AS2SceneGraphFactory");
var TimelineKeyFrame = require("awayjs-player/lib/timeline/TimelineKeyFrame");
var AddChildCommand = require("awayjs-player/lib/timeline/commands/AddChildCommand");
var UpdatePropertyCommand = require("awayjs-player/lib/timeline/commands/UpdatePropertyCommand");
var RemoveChildCommand = require("awayjs-player/lib/timeline/commands/RemoveChildCommand");
var ApplyAS2DepthsCommand = require("awayjs-player/lib/timeline/commands/ApplyAS2DepthsCommand");
var Font = require("awayjs-display/lib/text/Font");
var TextFormat = require("awayjs-display/lib/text/TextFormat");
/**
 * AWDParser provides a parser for the AWD data type.
 */
var AWDParser = (function (_super) {
    __extends(AWDParser, _super);
    /**
     * Creates a new AWDParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    function AWDParser() {
        _super.call(this, URLLoaderDataFormat.ARRAY_BUFFER);
        //set to "true" to have some console.logs in the Console
        this._debug = true;
        this._startedParsing = false;
        this._texture_users = {};
        this._parsed_header = false;
        this._blocks = new Array();
        this._blocks[0] = new AWDBlock();
        this._blocks[0].data = null; // Zero address means null in AWD
        this.blendModeDic = new Array(); // used to translate ints to blendMode-strings
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
        return (ParserUtils.toString(data, 3) == 'AWD');
    };
    /**
     * @inheritDoc
     */
    AWDParser.prototype._iResolveDependency = function (resourceDependency) {
        // this will be called when Dependency has finished loading.
        // the Assets waiting for this Bitmap, can be Texture or CubeTexture.
        // if the Bitmap is awaited by a CubeTexture, we need to check if its the last Bitmap of the CubeTexture,
        // so we know if we have to finalize the Asset (CubeTexture) or not.
        if (resourceDependency.assets.length == 1) {
            var isCubeTextureArray = resourceDependency.id.split("#");
            var ressourceID = isCubeTextureArray[0];
            var asset;
            var thisBitmapTexture;
            var block;
            if (isCubeTextureArray.length == 1) {
                asset = resourceDependency.assets[0];
                if (asset) {
                    var mat;
                    var users;
                    block = this._blocks[resourceDependency.id];
                    block.data = asset; // Store finished asset
                    // Reset name of texture to the one defined in the AWD file,
                    // as opposed to whatever the image parser came up with.
                    asset.resetAssetPath(block.name, null, true);
                    block.name = asset.name;
                    // Finalize texture asset to dispatch texture event, which was
                    // previously suppressed while the dependency was loaded.
                    this._pFinalizeAsset(asset);
                    if (this._debug) {
                        console.log("Successfully loaded Bitmap for texture");
                        console.log("Parsed texture: Name = " + block.name);
                    }
                }
            }
            if (isCubeTextureArray.length > 1) {
                thisBitmapTexture = resourceDependency.assets[0];
                var tx = thisBitmapTexture;
                this._cubeTextures[isCubeTextureArray[1]] = tx.htmlImageElement; // ?
                this._texture_users[ressourceID].push(1);
                if (this._debug) {
                    console.log("Successfully loaded Bitmap " + this._texture_users[ressourceID].length + " / 6 for Cubetexture");
                }
                if (this._texture_users[ressourceID].length == this._cubeTextures.length) {
                    var posX = this._cubeTextures[0];
                    var negX = this._cubeTextures[1];
                    var posY = this._cubeTextures[2];
                    var negY = this._cubeTextures[3];
                    var posZ = this._cubeTextures[4];
                    var negZ = this._cubeTextures[5];
                    asset = new ImageCubeTexture(posX, negX, posY, negY, posZ, negZ);
                    block = this._blocks[ressourceID];
                    block.data = asset; // Store finished asset
                    // Reset name of texture to the one defined in the AWD file,
                    // as opposed to whatever the image parser came up with.
                    asset.resetAssetPath(block.name, null, true);
                    block.name = asset.name;
                    // Finalize texture asset to dispatch texture event, which was
                    // previously suppressed while the dependency was loaded.
                    this._pFinalizeAsset(asset);
                    if (this._debug) {
                        console.log("Parsed CubeTexture: Name = " + block.name);
                    }
                }
            }
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
            while (this._body.getBytesAvailable() > 0 && !this.parsingPaused) {
                this.parseNextBlock();
            }
            //----------------------------------------------------------------------------
            // Return complete status
            if (this._body.getBytesAvailable() == 0) {
                this.dispose();
                return ParserBase.PARSING_DONE;
            }
            else {
                return ParserBase.MORE_TO_PARSE;
            }
        }
        else {
            switch (this._compression) {
                case AWDParser.DEFLATE:
                case AWDParser.LZMA:
                    if (this._debug) {
                        console.log("(!) AWDParser Error: Compressed AWD formats not yet supported (!)");
                    }
                    break;
            }
            // Error - most likely _body not set because we do not support compression.
            return ParserBase.PARSING_DONE;
        }
    };
    AWDParser.prototype._pStartParsing = function (frameLimit) {
        _super.prototype._pStartParsing.call(this, frameLimit);
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer();
    };
    AWDParser.prototype.dispose = function () {
        for (var c in this._blocks) {
            var b = this._blocks[c];
            b.dispose();
        }
    };
    AWDParser.prototype.parseNextBlock = function () {
        var block;
        var assetData;
        var isParsed = false;
        var ns;
        var type;
        var flags;
        var len;
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
        var blockEndAll = this._body.position + len;
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
        }
        //----------------------------------------------------------------------------
        // LITTLE_ENDIAN - Default for ArrayBuffer / Not implemented in ByteArray
        //----------------------------------------------------------------------------
        //this._newBlockBytes.endian = Endian.LITTLE_ENDIAN;
        //----------------------------------------------------------------------------
        this._newBlockBytes.position = 0;
        block = new AWDBlock();
        block.len = this._newBlockBytes.position + len;
        block.id = this._cur_block_id;
        var blockEndBlock = this._newBlockBytes.position + len;
        if (blockCompression) {
            this._pDieWithError('Compressed AWD formats not yet supported');
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
                    this.paresTextField(this._cur_block_id);
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
        //*/
        var msgCnt = 0;
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
        }
        else {
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
    };
    //--Parser Blocks---------------------------------------------------------------------------
    AWDParser.prototype.parseTesselatedFont = function (blockID) {
        var name = this.parseVarStr();
        this._blocks[blockID].name = name;
        //console.log("Font name = "+this._blocks[blockID].name);
        var font_style_cnt = this._newBlockBytes.readUnsignedInt();
        //console.log("Font font_style_cnt = "+font_style_cnt);
        var new_font = new Font();
        for (var i = 0; i < font_style_cnt; ++i) {
            var font_style_name = this.parseVarStr();
            //console.log("Font font_style_name = "+font_style_name);
            var new_font_style = new_font.get_font_table(font_style_name);
            new_font_style.set_font_em_size(this._newBlockBytes.readUnsignedInt());
            //console.log("Font new_font_style.font_em_size = "+new_font_style.get_font_em_size);
            var font_style_char_cnt = this._newBlockBytes.readUnsignedInt();
            for (var i = 0; i < font_style_char_cnt; ++i) {
                var font_style_char = this._newBlockBytes.readUnsignedInt();
                //console.log("Font font_style_char = "+font_style_char);
                // todo: this is basically a simplified version of the subgeom-parsing done in parseTriangleGeometry. Make a parseSubGeom() instead (?)
                var sm_len = this._newBlockBytes.readUnsignedInt();
                var sm_end = this._newBlockBytes.position + sm_len;
                while (this._newBlockBytes.position < sm_end) {
                    var idx = 0;
                    var str_ftype, str_type, str_len, str_end;
                    // Type, field type, length
                    str_type = this._newBlockBytes.readUnsignedByte();
                    str_ftype = this._newBlockBytes.readUnsignedByte();
                    str_len = this._newBlockBytes.readUnsignedInt();
                    str_end = this._newBlockBytes.position + str_len;
                    if (str_type == 2) {
                        var indices = new Array();
                        while (this._newBlockBytes.position < str_end) {
                            indices[idx++] = this._newBlockBytes.readUnsignedShort();
                        }
                    }
                    else if (str_type == 10) {
                        var idx_pos = 0;
                        var idx_curves = 0;
                        var idx_uvs = 0;
                        var positions = new Array();
                        var curveData = new Array();
                        var uvs = new Array();
                        while (this._newBlockBytes.position < str_end) {
                            positions[idx_pos++] = this.readNumber(this._accuracyGeo); // x
                            positions[idx_pos++] = this.readNumber(this._accuracyGeo); // y
                            positions[idx_pos++] = this.readNumber(this._accuracyGeo); // type
                            curveData[idx_curves++] = this.readNumber(this._accuracyGeo); // curve value 1
                            curveData[idx_curves++] = this.readNumber(this._accuracyGeo); // curve value 2
                            uvs[idx_uvs++] = this.readNumber(this._accuracyGeo); // curve value 1
                            uvs[idx_uvs++] = this.readNumber(this._accuracyGeo); // curve value 1
                        }
                    }
                    else {
                        this._newBlockBytes.position = str_end;
                    }
                }
                //this.parseProperties(null);// no attributes for font-table subgeos
                var curve_sub_geom = new CurveSubGeometry(true);
                curve_sub_geom.updateIndices(indices);
                curve_sub_geom.updatePositions(positions);
                curve_sub_geom.updateCurves(curveData);
                curve_sub_geom.updateUVs(uvs);
                new_font_style.set_subgeo_for_char(font_style_char.toString(), curve_sub_geom);
            }
            console.log("Parsed a font-table");
        }
        //console.log("Parsed a font");
        this.parseProperties(null);
        this.parseUserAttributes();
        this._pFinalizeAsset(new_font, name);
        this._blocks[blockID].data = new_font;
        if (this._debug) {
            console.log("Parsed a font: Name = '" + name);
        }
    };
    AWDParser.prototype.parseTextFormat = function (blockID) {
        var name = this.parseVarStr();
        this._blocks[blockID].name = name;
        //console.log("this._blocks[blockID].name  '" + this._blocks[blockID].name );
        var font_id = this._newBlockBytes.readUnsignedInt();
        //console.log("font_id  '" + font_id);
        var font_style_name = this.parseVarStr();
        //console.log("font_style_name  '" + font_style_name);
        var returnArrayFont = this.getAssetByID(font_id, [Font.assetType]);
        var font;
        if (returnArrayFont[0]) {
            font = returnArrayFont[1];
        }
        else {
            this._blocks[blockID].addError("Could not find a Font for this TextFormat. A empty Font is created!");
            font = new Font();
        }
        var newTextFormat = new TextFormat();
        newTextFormat.font_name = font.name;
        var font_table = font.get_font_table(font_style_name);
        if (font_table != null) {
            newTextFormat.font_style = font_style_name;
            newTextFormat.font_table = font_table;
        }
        var data_id = this._newBlockBytes.readUnsignedInt();
        //console.log("mat  '" + data_id);
        var mat;
        var returnedArrayMaterial = this.getAssetByID(data_id, [MaterialBase.assetType]);
        if (returnedArrayMaterial[0]) {
            mat = returnedArrayMaterial[1];
        }
        else {
            this._blocks[blockID].addError("Could not find a Material for this TextFormat. Default Material will be used!");
            mat = new BasicMaterial();
        }
        mat.bothSides = true;
        var num_uv_values = this._newBlockBytes.readUnsignedByte();
        //console.log("num_uv_values  '" + num_uv_values);
        var uv_values = [];
        for (var uvcnt = 0; uvcnt < num_uv_values; uvcnt++) {
            var uv_value = this._newBlockBytes.readFloat();
            uv_values.push(uv_value);
        }
        newTextFormat.uv_values = uv_values;
        var format_props = this.parseProperties({ 1: AWDParser.UINT16, 2: AWDParser.UINT16, 3: AWDParser.UINT8, 4: AWDParser.UINT8, 5: AWDParser.UINT8 });
        newTextFormat.size = format_props.get(1, 12);
        newTextFormat.letterSpacing = format_props.get(2, 0);
        //newTextFormat.rotated = format_props.get(3,false);
        newTextFormat.kerning = format_props.get(4, true);
        //newTextFormat.baseline_shift = format_props.get(5,1);
        newTextFormat.material = mat;
        this.parseUserAttributes(); // textformat has no extra-properties
        //newTextFormat.extra =
        this._pFinalizeAsset(newTextFormat, name);
        this._blocks[blockID].data = newTextFormat;
        if (this._debug) {
            console.log("Parsed a TextFormat: Name = '" + name + " font: " + font.name);
        }
    };
    AWDParser.prototype.paresTextField = function (blockID) {
        var name = this.parseVarStr();
        this._blocks[blockID].name = name;
        //console.log("name  '" + name);
        var newTextField = new TextField();
        var num_paragraphs = this._newBlockBytes.readUnsignedInt();
        var complete_text = "";
        //console.log("num_paragraphs  '" + num_paragraphs);
        var text_format;
        for (var paracnt = 0; paracnt < num_paragraphs; paracnt++) {
            var num_textruns = this._newBlockBytes.readUnsignedInt();
            for (var textrun_cnt = 0; textrun_cnt < num_textruns; textrun_cnt++) {
                var format_id = this._newBlockBytes.readUnsignedInt();
                //console.log("format_id  '" + format_id);
                var textFormatArray = this.getAssetByID(format_id, [TextFormat.assetType]);
                if (textFormatArray[0]) {
                    text_format = textFormatArray[1];
                }
                else {
                    this._blocks[blockID].addError("Could not find a Material for this Billboard. A empty material is created!");
                    text_format = new TextFormat();
                }
                //console.log("text_format  '" + text_format.name);
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
        //newTextField.construct_geometry();
        // todo: optional matrix etc can be put in properties.
        this.parseProperties(null);
        newTextField.extra = this.parseUserAttributes();
        //console.log("Parsed a TextField: Name = '" + name + "| text  = " + complete_text);
        this._pFinalizeAsset(newTextField, name);
        this._blocks[blockID].data = newTextField;
        if (this._debug) {
            console.log("Parsed a TextField: Name = '" + name + "| text  = " + complete_text);
        }
    };
    // Block ID = 25
    AWDParser.prototype.parseBillBoardLibraryBlock = function (blockID) {
        var name = this.parseVarStr();
        var data_id = this._newBlockBytes.readUnsignedInt();
        var mat;
        var returnedArrayMaterial = this.getAssetByID(data_id, [MaterialBase.assetType]);
        if (returnedArrayMaterial[0]) {
            mat = returnedArrayMaterial[1];
        }
        else {
            this._blocks[blockID].addError("Could not find a Material for this Billboard. A empty material is created!");
            mat = new BasicMaterial();
        }
        mat.bothSides = true;
        var billboard = new Billboard(mat);
        // todo: optional matrix etc can be put in properties.
        this.parseProperties(null);
        billboard.extra = this.parseUserAttributes();
        this._pFinalizeAsset(billboard, name);
        this._blocks[blockID].data = billboard;
        if (this._debug) {
            console.log("Parsed a Library-Billboard: Name = '" + name + "| Material-Name = " + mat.name);
        }
    };
    // Block ID = 24
    AWDParser.prototype.parseMeshLibraryBlock = function (blockID) {
        var num_materials;
        var materials_parsed;
        var name = this.parseVarStr();
        var data_id = this._newBlockBytes.readUnsignedInt();
        var geom;
        var returnedArrayGeometry = this.getAssetByID(data_id, [Geometry.assetType]);
        if (returnedArrayGeometry[0]) {
            geom = returnedArrayGeometry[1];
        }
        else {
            this._blocks[blockID].addError("Could not find a Geometry for this Mesh. A empty Geometry is created!");
            geom = new Geometry();
        }
        this._blocks[blockID].geoID = data_id;
        var materials = new Array();
        num_materials = this._newBlockBytes.readUnsignedShort();
        var materialNames = new Array();
        materials_parsed = 0;
        var returnedArrayMaterial;
        while (materials_parsed < num_materials) {
            var mat_id;
            mat_id = this._newBlockBytes.readUnsignedInt();
            returnedArrayMaterial = this.getAssetByID(mat_id, [MaterialBase.assetType]);
            if ((!returnedArrayMaterial[0]) && (mat_id > 0)) {
                this._blocks[blockID].addError("Could not find Material Nr " + materials_parsed + " (ID = " + mat_id + " ) for this Mesh");
            }
            var m = returnedArrayMaterial[1];
            materials.push(m);
            materialNames.push(m.name);
            materials_parsed++;
        }
        var mesh = new Mesh(geom, null);
        if (materials.length >= 1 && mesh.subMeshes.length == 1) {
            mesh.material = materials[0];
        }
        else if (materials.length > 1) {
            var i;
            for (i = 0; i < mesh.subMeshes.length; i++) {
                mesh.subMeshes[i].material = materials[Math.min(materials.length - 1, i)];
            }
        }
        this.parseProperties(null);
        mesh.extra = this.parseUserAttributes();
        this._pFinalizeAsset(mesh, name);
        this._blocks[blockID].data = mesh;
        if (this._debug) {
            console.log("Parsed a Library-Mesh: Name = '" + name + "| Geometry-Name = " + geom.name + " | SubMeshes = " + mesh.subMeshes.length + " | Mat-Names = " + materialNames.toString());
        }
    };
    AWDParser.prototype.parseAudioBlock = function (blockID, factory) {
        //var asset:Audio;todo create asset for audio
        this._blocks[blockID].name = this.parseVarStr();
        var type = this._newBlockBytes.readUnsignedByte();
        var data_len;
        //this._texture_users[this._cur_block_id.toString()] = [];
        // External
        if (type == 0) {
            data_len = this._newBlockBytes.readUnsignedInt();
            var url;
            url = this._newBlockBytes.readUTFBytes(data_len);
            // todo parser needs to be able to handle mp3 and wav files if we trigger the loading of external ressource
            //this._pAddDependency(this._cur_block_id.toString(), new URLRequest(url), false, null, true);
            console.log("Audio url = " + url);
        }
        else {
            // todo: exporter does not export embed sounds yet
            data_len = this._newBlockBytes.readUnsignedInt();
            var data;
            data = new ByteArray();
            this._newBlockBytes.readBytes(data, 0, data_len);
        }
        // Ignore for now
        this.parseProperties(null);
        this._blocks[blockID].extras = this.parseUserAttributes();
        this._pPauseAndRetrieveDependencies();
        //this._blocks[blockID].data = asset;todo
        if (this._debug) {
            var textureStylesNames = ["external", "embed"];
            console.log("Start parsing a " + textureStylesNames[type] + " Audio file");
        }
    };
    //Block ID = 4
    AWDParser.prototype.parseTimeLine = function (blockID, factory) {
        var i;
        var j;
        var k;
        var timeLineContainer = factory.createMovieClip();
        var name = this.parseVarStr();
        var isScene = !!this._newBlockBytes.readUnsignedByte();
        var sceneID = this._newBlockBytes.readUnsignedByte();
        var fps = this._newBlockBytes.readFloat();
        var ms_per_frame = 1000 / fps;
        var numFrames = this._newBlockBytes.readUnsignedShort();
        var objectIDMap = {};
        // var previousTimeLine:TimeLineFrame;
        // var fill_props:AWDProperties = this.parseProperties({1:AWDParser.UINT32});// { 1:UINT32, 6:AWDSTRING }  ); //; , 2:UINT32, 3:UINT32, 5:BOOL } );
        if (this._debug)
            console.log("Parsed a TIMELINE: Name = " + name + "| isScene = " + isScene + "| sceneID = " + sceneID + "| numFrames = " + numFrames);
        var totalDuration = 0;
        for (i = 0; i < numFrames; i++) {
            var frame = new TimelineKeyFrame();
            var traceString = "frame = " + i;
            // TODO: remove the ms_per_frame to set the duration in frames
            var frameDuration = this._newBlockBytes.readUnsignedInt() * ms_per_frame;
            frame.setFrameTime(totalDuration, frameDuration);
            totalDuration += frameDuration;
            //console.log("duration = " + frameDuration);
            traceString += "duration = " + frameDuration;
            var numLabels = this._newBlockBytes.readUnsignedShort();
            for (j = 0; j < numLabels; j++) {
                var labelType = this._newBlockBytes.readUnsignedByte();
                var label = this.parseVarStr();
                // TODO: Handle labels differently
                //timeLineContainer.addFrameLabel(new FrameLabel(label, labelType, frame));
                traceString += "\n     label = " + label + " - labelType = " + labelType;
            }
            var numCommands = this._newBlockBytes.readUnsignedShort();
            traceString += "\n      Commands " + numCommands;
            var hasDepthChanges = false;
            var commandString = "";
            for (j = 0; j < numCommands; j++) {
                var objectID;
                var resourceID;
                var commandType = this._newBlockBytes.readUnsignedShort();
                switch (commandType) {
                    case 1:
                    case 3:
                        var valid_command = false;
                        objectID = this._newBlockBytes.readUnsignedInt();
                        var instanceID = 0; // must be set in folling conditions:
                        if (commandType == 1) {
                            // this commands looks for a object by awd-id and puts it into the timeline
                            resourceID = this._newBlockBytes.readUnsignedInt();
                            var instanceName = this.parseVarStr();
                            // sound is added to timeline with dedicated Command, as it is no display-object (has no matrix etc)
                            // check if a Geometry can be found at the resourceID (AWD-ID)
                            var cmd_asset = this._blocks[resourceID].data;
                            if (cmd_asset != null) {
                                instanceID = timeLineContainer.registerPotentialChild(cmd_asset);
                                objectIDMap[objectID] = instanceID;
                                frame.addConstructCommand(new AddChildCommand(instanceID));
                                if (instanceName.length) {
                                    frame.addConstructCommand(new UpdatePropertyCommand(instanceID, "name", instanceName));
                                    commandString += "\n                instanceName = " + instanceName;
                                }
                                valid_command = true;
                                commandString += "\n      - Add new Resource = " + resourceID + " as object_id = " + objectID;
                            }
                            else {
                                commandString += "\n      - ERROR - object_id = " + objectID + " - NO DISPLAY_OBJECT AT ID = " + resourceID;
                            }
                        }
                        else if (commandType == 3) {
                            instanceID = objectIDMap[objectID];
                            valid_command = true;
                            commandString += "\n      - Update object_id = " + objectID;
                        }
                        // read the command properties
                        // 1: matrix2d (6 x number with storage precision matrix)
                        // 2: matrix2d (12 x number with storage precision matrix) not used yet
                        // 3: colortransform (20 x number with storage precision properties)
                        // 4: blendmode (uint8)
                        // 5: visibilty (uint8)
                        // 6: depth (uint32)
                        // 7: mask (uint32)
                        var props = this.parseProperties({
                            1: this._matrixNrType,
                            2: this._matrixNrType,
                            3: this._propsNrType,
                            4: AWDParser.UINT8,
                            5: AWDParser.UINT8,
                            6: AWDParser.UINT32
                        });
                        // todo: fix property parsing so we can read variable size list (atm list with size = 1 is returned as single number)
                        // for this reason, for now the mask-property is read sepperatly
                        var mask_id_nums = this._newBlockBytes.readUnsignedInt();
                        var mask_ids = new Array();
                        for (var mi_cnt = 0; mi_cnt < mask_id_nums; mi_cnt++) {
                            mask_ids.push(this._newBlockBytes.readUnsignedInt());
                        }
                        if (valid_command) {
                            var matrix_2d = props.get(1, []);
                            //var matrix_3d:Float32Array = props.get(2, []);
                            var colortransform = props.get(3, []);
                            var blendmode = props.get(4, -1);
                            var visibilty = props.get(5, -1);
                            var depth = props.get(6, -1);
                            var mask = props.get(7, []);
                            // todo: handle filters
                            //matrix2d must provide 6 values to be valid
                            commandString += "\n                transformArray = " + matrix_2d.length;
                            if (matrix_2d.length == 6) {
                                var thisMatrix = new Matrix3D();
                                thisMatrix.position = new Vector3D(matrix_2d[4], matrix_2d[5], 0);
                                // todo is this correct for 2d -> 3d scale and rotation. (i doubt it)
                                thisMatrix.rawData[0] = matrix_2d[0];
                                thisMatrix.rawData[1] = matrix_2d[1];
                                thisMatrix.rawData[4] = matrix_2d[2];
                                thisMatrix.rawData[5] = matrix_2d[3];
                                frame.addConstructCommand(new UpdatePropertyCommand(instanceID, "_iMatrix3D", thisMatrix));
                                commandString += "\n                transformArray = " + matrix_2d;
                            }
                            //matrix2d must provide 20 values to be valid
                            if (colortransform.length == 20) {
                                // TODO: set ColorTransform on objectProps
                                commandString += "\n                colorMatrix = " + colortransform;
                            }
                            // blendmode must be positive to be valid
                            if (blendmode >= 0) {
                                var blendmode_string = this.blendModeDic[blendmode];
                                // TODO: set Blendmode on objectProps
                                commandString += "\n                BlendMode = " + blendmode_string;
                            }
                            // visibilty must be positive to be valid
                            if (visibilty >= 0) {
                                if (visibilty == 0)
                                    frame.addConstructCommand(new UpdatePropertyCommand(instanceID, "visible", false));
                                else
                                    frame.addConstructCommand(new UpdatePropertyCommand(instanceID, "visible", true));
                            }
                            // depth must be positive to be valid
                            if (depth >= 0) {
                                commandString += "\n                Depth = " + depth;
                                frame.addConstructCommand(new UpdatePropertyCommand(instanceID, "__AS2Depth", depth));
                                hasDepthChanges = true;
                            }
                            // mask must be positive to be valid. i think only add-commands will have this value.
                            // e.g. it should never be updated on already existing objects. (because depth of objects can change, i am not sure)
                            if (mask_ids.length > 0) {
                                if ((mask_ids.length == 1) && (mask_ids[0] == 0)) {
                                    // TODO: this object is used as mask
                                    frame.addConstructCommand(new UpdatePropertyCommand(instanceID, "_iMaskID", instanceID));
                                    commandString += "\n                obj is used as mask";
                                }
                                else {
                                    // TODO: this object is masked by one or more objects defined by ids in mask-array
                                    commandString += "\n                obj is masked by " + mask_ids.length + " objects";
                                    var maskDOs = [];
                                    for (var cm = 0; cm < mask_ids.length; cm++) {
                                        maskDOs[cm] = timeLineContainer.getPotentialChild(objectIDMap[mask_ids[cm]]);
                                        commandString += "\n                obj is masked by " + mask_ids[cm];
                                    }
                                    frame.addConstructCommand(new UpdatePropertyCommand(instanceID, "_iMasks", maskDOs));
                                }
                            }
                        }
                        break;
                    case 4:
                        // Remove Object Command
                        objectID = this._newBlockBytes.readUnsignedInt();
                        var instanceID = objectIDMap[objectID];
                        frame.addConstructCommand(new RemoveChildCommand(instanceID));
                        commandString += "\n       - Remove object with ID: " + objectID;
                        break;
                    case 5:
                        // Add Sound Command
                        // TODO: create CommandPropsSound and check which asset to use
                        objectID = this._newBlockBytes.readUnsignedInt();
                        resourceID = this._newBlockBytes.readUnsignedInt();
                        // TODO: implement sound in timeline
                        commandString += "\n      - Add new Sound AWD-ID = " + resourceID.toString() + " as object_id = " + objectID.toString();
                        break;
                    default:
                        commandString += "\n       - Unknown Command Type = " + commandType;
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
                //frame.addToScript(frame_code);
                traceString += "\nframe-code = " + frame_code;
            }
            traceString += commandString;
            //trace("length_code = "+length_code+" frame_code = "+frame_code);
            this._newBlockBytes.readUnsignedInt(); // user attributes - skip for now
            console.log(traceString);
            timeLineContainer.addFrame(frame);
        }
        this._pFinalizeAsset(timeLineContainer, name);
        this._blocks[blockID].data = timeLineContainer;
        this.parseProperties(null);
        this.parseUserAttributes();
    };
    //Block ID = 1
    AWDParser.prototype.parseTriangleGeometrieBlock = function (blockID) {
        var geom = new Geometry();
        // Read name and sub count
        var name = this.parseVarStr();
        var num_subs = this._newBlockBytes.readUnsignedShort();
        // Read optional properties
        var props = this.parseProperties({ 1: this._geoNrType, 2: this._geoNrType });
        var geoScaleU = props.get(1, 1);
        var geoScaleV = props.get(2, 1);
        // Loop through sub meshes
        var subs_parsed = 0;
        while (subs_parsed < num_subs) {
            var is_curve_geom = false;
            var i;
            var sm_len, sm_end;
            var w_indices;
            var weights;
            sm_len = this._newBlockBytes.readUnsignedInt();
            sm_end = this._newBlockBytes.position + sm_len;
            var subProps = this.parseProperties({ 1: this._geoNrType, 2: this._geoNrType });
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
                    while (this._newBlockBytes.position < str_end) {
                        indices[idx++] = this._newBlockBytes.readUnsignedShort();
                    }
                }
                else if (str_type == 3) {
                    var uvs = new Array();
                    while (this._newBlockBytes.position < str_end) {
                        uvs[idx++] = this.readNumber(this._accuracyGeo);
                    }
                }
                else if (str_type == 4) {
                    var normals = new Array();
                    while (this._newBlockBytes.position < str_end) {
                        normals[idx++] = this.readNumber(this._accuracyGeo);
                    }
                }
                else if (str_type == 6) {
                    w_indices = Array();
                    while (this._newBlockBytes.position < str_end) {
                        w_indices[idx++] = this._newBlockBytes.readUnsignedShort() * 3;
                    }
                }
                else if (str_type == 7) {
                    weights = new Array();
                    while (this._newBlockBytes.position < str_end) {
                        weights[idx++] = this.readNumber(this._accuracyGeo);
                    }
                }
                else if (str_type == 8) {
                    this._newBlockBytes.position = str_end;
                }
                else if (str_type == 9) {
                    this._newBlockBytes.position = str_end;
                }
                else if (str_type == 10) {
                    is_curve_geom = true;
                    var idx_pos = 0;
                    var idx_curves = 0;
                    var idx_uvs = 0;
                    var positions = new Array();
                    var curveData = new Array();
                    var uvs = new Array();
                    while (this._newBlockBytes.position < str_end) {
                        positions[idx_pos++] = this.readNumber(this._accuracyGeo); // x
                        positions[idx_pos++] = this.readNumber(this._accuracyGeo); // y
                        positions[idx_pos++] = this.readNumber(this._accuracyGeo); // type
                        curveData[idx_curves++] = this.readNumber(this._accuracyGeo); // curve value 1
                        curveData[idx_curves++] = this.readNumber(this._accuracyGeo); // curve value 2
                        uvs[idx_uvs++] = this.readNumber(this._accuracyGeo); // curve value 1
                        uvs[idx_uvs++] = this.readNumber(this._accuracyGeo); // curve value 1
                    }
                }
                else {
                    this._newBlockBytes.position = str_end;
                }
            }
            this.parseUserAttributes(); // Ignore sub-mesh attributes for now
            if (is_curve_geom) {
                var curve_sub_geom = new CurveSubGeometry(true);
                curve_sub_geom.updateIndices(indices);
                curve_sub_geom.updatePositions(positions);
                curve_sub_geom.updateCurves(curveData);
                curve_sub_geom.updateUVs(uvs);
                geom.addSubGeometry(curve_sub_geom);
                if (this._debug)
                    console.log("Parsed a CurveSubGeometry");
            }
            else {
                var triangle_sub_geom = new TriangleSubGeometry(true);
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
                triangle_sub_geom.updateIndices(indices);
                triangle_sub_geom.updatePositions(verts);
                triangle_sub_geom.updateVertexNormals(normals);
                triangle_sub_geom.updateUVs(uvs);
                triangle_sub_geom.updateVertexTangents(null);
                triangle_sub_geom.updateJointWeights(weights);
                triangle_sub_geom.updateJointIndices(w_indices);
                var scaleU = subProps.get(1, 1);
                var scaleV = subProps.get(2, 1);
                var setSubUVs = false; //this should remain false atm, because in AwayBuilder the uv is only scaled by the geometry
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
        this._pFinalizeAsset(geom, name);
        this._blocks[blockID].data = geom;
        if (this._debug) {
            console.log("Parsed a TriangleGeometry: Name = " + name);
        }
    };
    //Block ID = 11
    AWDParser.prototype.parsePrimitves = function (blockID) {
        var name;
        var prefab;
        var primType;
        var subs_parsed;
        var props;
        var bsm;
        // Read name and sub count
        name = this.parseVarStr();
        primType = this._newBlockBytes.readUnsignedByte();
        props = this.parseProperties({ 101: this._geoNrType, 102: this._geoNrType, 103: this._geoNrType, 110: this._geoNrType, 111: this._geoNrType, 301: AWDParser.UINT16, 302: AWDParser.UINT16, 303: AWDParser.UINT16, 701: AWDParser.BOOL, 702: AWDParser.BOOL, 703: AWDParser.BOOL, 704: AWDParser.BOOL });
        var primitiveTypes = ["Unsupported Type-ID", "PrimitivePlanePrefab", "PrimitiveCubePrefab", "PrimitiveSpherePrefab", "PrimitiveCylinderPrefab", "PrimitivesConePrefab", "PrimitivesCapsulePrefab", "PrimitivesTorusPrefab"];
        switch (primType) {
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
                    prefab.topClosed = false;
                if (!props.get(702, true))
                    prefab.bottomClosed = false;
                if (!props.get(703, true))
                    prefab.yUp = false;
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
    };
    // Block ID = 22
    AWDParser.prototype.parseContainer = function (blockID) {
        var name;
        var par_id;
        var mtx;
        var ctr;
        var parent;
        par_id = this._newBlockBytes.readUnsignedInt();
        mtx = this.parseMatrix3D();
        name = this.parseVarStr();
        var parentName = "Root (TopLevel)";
        ctr = new DisplayObjectContainer();
        ctr.transform.matrix3D = mtx;
        var returnedArray = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType]);
        if (returnedArray[0]) {
            var obj = returnedArray[1].addChild(ctr);
            parentName = returnedArray[1].name;
        }
        else if (par_id > 0) {
            this._blocks[blockID].addError("Could not find a parent for this ObjectContainer3D");
        }
        else {
            //add to the content property
            this._pContent.addChild(ctr);
        }
        // in AWD version 2.1 we read the Container properties
        if ((this._version[0] == 2) && (this._version[1] == 1)) {
            var props = this.parseProperties({ 1: this._matrixNrType, 2: this._matrixNrType, 3: this._matrixNrType, 4: AWDParser.UINT8 });
            ctr.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
        }
        else {
            this.parseProperties(null);
        }
        // the extraProperties should only be set for AWD2.1-Files, but is read for both versions
        ctr.extra = this.parseUserAttributes();
        this._pFinalizeAsset(ctr, name);
        this._blocks[blockID].data = ctr;
        if (this._debug) {
            console.log("Parsed a Container: Name = '" + name + "' | Parent-Name = " + parentName);
        }
    };
    // Block ID = 23
    AWDParser.prototype.parseMeshInstance = function (blockID) {
        var num_materials;
        var materials_parsed;
        var parent;
        var par_id = this._newBlockBytes.readUnsignedInt();
        var mtx = this.parseMatrix3D();
        var name = this.parseVarStr();
        var parentName = "Root (TopLevel)";
        var data_id = this._newBlockBytes.readUnsignedInt();
        var geom;
        var returnedArrayGeometry = this.getAssetByID(data_id, [Geometry.assetType]);
        if (returnedArrayGeometry[0]) {
            geom = returnedArrayGeometry[1];
        }
        else {
            this._blocks[blockID].addError("Could not find a Geometry for this Mesh. A empty Geometry is created!");
            geom = new Geometry();
        }
        this._blocks[blockID].geoID = data_id;
        var materials = new Array();
        num_materials = this._newBlockBytes.readUnsignedShort();
        var materialNames = new Array();
        materials_parsed = 0;
        var returnedArrayMaterial;
        while (materials_parsed < num_materials) {
            var mat_id;
            mat_id = this._newBlockBytes.readUnsignedInt();
            returnedArrayMaterial = this.getAssetByID(mat_id, [MaterialBase.assetType]);
            if ((!returnedArrayMaterial[0]) && (mat_id > 0)) {
                this._blocks[blockID].addError("Could not find Material Nr " + materials_parsed + " (ID = " + mat_id + " ) for this Mesh");
            }
            var m = returnedArrayMaterial[1];
            materials.push(m);
            materialNames.push(m.name);
            materials_parsed++;
        }
        var mesh = new Mesh(geom, null);
        mesh.transform.matrix3D = mtx;
        var returnedArrayParent = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType]);
        if (returnedArrayParent[0]) {
            var objC = returnedArrayParent[1];
            objC.addChild(mesh);
            parentName = objC.name;
        }
        else if (par_id > 0) {
            this._blocks[blockID].addError("Could not find a parent for this Mesh");
        }
        else {
            //add to the content property
            this._pContent.addChild(mesh);
        }
        if (materials.length >= 1 && mesh.subMeshes.length == 1) {
            mesh.material = materials[0];
        }
        else if (materials.length > 1) {
            var i;
            for (i = 0; i < mesh.subMeshes.length; i++) {
                mesh.subMeshes[i].material = materials[Math.min(materials.length - 1, i)];
            }
        }
        if ((this._version[0] == 2) && (this._version[1] == 1)) {
            var props = this.parseProperties({ 1: this._matrixNrType, 2: this._matrixNrType, 3: this._matrixNrType, 4: AWDParser.UINT8, 5: AWDParser.BOOL });
            mesh.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
            mesh.castsShadows = props.get(5, true);
        }
        else {
            this.parseProperties(null);
        }
        mesh.extra = this.parseUserAttributes();
        this._pFinalizeAsset(mesh, name);
        this._blocks[blockID].data = mesh;
        if (this._debug) {
            console.log("Parsed a Mesh: Name = '" + name + "' | Parent-Name = " + parentName + "| Geometry-Name = " + geom.name + " | SubMeshes = " + mesh.subMeshes.length + " | Mat-Names = " + materialNames.toString());
        }
    };
    //Block ID 31
    AWDParser.prototype.parseSkyboxInstance = function (blockID) {
        var name = this.parseVarStr();
        var cubeTexAddr = this._newBlockBytes.readUnsignedInt();
        var returnedArrayCubeTex = this.getAssetByID(cubeTexAddr, [TextureBase.assetType], "CubeTexture");
        if ((!returnedArrayCubeTex[0]) && (cubeTexAddr != 0))
            this._blocks[blockID].addError("Could not find the Cubetexture (ID = " + cubeTexAddr + " ) for this Skybox");
        var asset = new Skybox(returnedArrayCubeTex[1]);
        this.parseProperties(null);
        asset.extra = this.parseUserAttributes();
        this._pFinalizeAsset(asset, name);
        this._blocks[blockID].data = asset;
        if (this._debug)
            console.log("Parsed a Skybox: Name = '" + name + "' | CubeTexture-Name = " + returnedArrayCubeTex[1].name);
    };
    //Block ID = 41
    AWDParser.prototype.parseLight = function (blockID) {
        var light;
        var newShadowMapper;
        var par_id = this._newBlockBytes.readUnsignedInt();
        var mtx = this.parseMatrix3D();
        var name = this.parseVarStr();
        var lightType = this._newBlockBytes.readUnsignedByte();
        var props = this.parseProperties({ 1: this._propsNrType, 2: this._propsNrType, 3: AWDParser.COLOR, 4: this._propsNrType, 5: this._propsNrType, 6: AWDParser.BOOL, 7: AWDParser.COLOR, 8: this._propsNrType, 9: AWDParser.UINT8, 10: AWDParser.UINT8, 11: this._propsNrType, 12: AWDParser.UINT16, 21: this._matrixNrType, 22: this._matrixNrType, 23: this._matrixNrType });
        var shadowMapperType = props.get(9, 0);
        var parentName = "Root (TopLevel)";
        var lightTypes = ["Unsupported LightType", "PointLight", "DirectionalLight"];
        var shadowMapperTypes = ["No ShadowMapper", "DirectionalShadowMapper", "NearDirectionalShadowMapper", "CascadeShadowMapper", "CubeMapShadowMapper"];
        if (lightType == 1) {
            light = new PointLight();
            light.radius = props.get(1, 90000);
            light.fallOff = props.get(2, 100000);
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
            }
            else {
                if (props.get(10, 2) != 2) {
                    newShadowMapper.depthMapSize = this._depthSizeDic[props.get(10, 2)];
                }
            }
            light.shadowMapper = newShadowMapper;
            light.castsShadows = true;
        }
        if (par_id != 0) {
            var returnedArrayParent = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType]);
            if (returnedArrayParent[0]) {
                returnedArrayParent[1].addChild(light);
                parentName = returnedArrayParent[1].name;
            }
            else {
                this._blocks[blockID].addError("Could not find a parent for this Light");
            }
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
        var par_id = this._newBlockBytes.readUnsignedInt();
        var mtx = this.parseMatrix3D();
        var name = this.parseVarStr();
        var parentName = "Root (TopLevel)";
        var projection;
        this._newBlockBytes.readUnsignedByte(); //set as active camera
        this._newBlockBytes.readShort(); //lengthof lenses - not used yet
        var projectiontype = this._newBlockBytes.readShort();
        var props = this.parseProperties({ 101: this._propsNrType, 102: this._propsNrType, 103: this._propsNrType, 104: this._propsNrType });
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
        var camera = new Camera(projection);
        camera.transform.matrix3D = mtx;
        var returnedArrayParent = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType]);
        if (returnedArrayParent[0]) {
            var objC = returnedArrayParent[1];
            objC.addChild(camera);
            parentName = objC.name;
        }
        else if (par_id > 0) {
            this._blocks[blockID].addError("Could not find a parent for this Camera");
        }
        else {
            //add to the content property
            this._pContent.addChild(camera);
        }
        camera.name = name;
        props = this.parseProperties({ 1: this._matrixNrType, 2: this._matrixNrType, 3: this._matrixNrType, 4: AWDParser.UINT8 });
        camera.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
        camera.extra = this.parseUserAttributes();
        this._pFinalizeAsset(camera, name);
        this._blocks[blockID].data = camera;
        if (this._debug) {
            console.log("Parsed a Camera: Name = '" + name + "' | Projectiontype = " + projection + " | Parent-Name = " + parentName);
        }
    };
    //Block ID = 51
    AWDParser.prototype.parseLightPicker = function (blockID) {
        var name = this.parseVarStr();
        var numLights = this._newBlockBytes.readUnsignedShort();
        var lightsArray = new Array();
        var k = 0;
        var lightID = 0;
        var returnedArrayLight;
        var lightsArrayNames = new Array();
        for (k = 0; k < numLights; k++) {
            lightID = this._newBlockBytes.readUnsignedInt();
            returnedArrayLight = this.getAssetByID(lightID, [LightBase.assetType]);
            if (returnedArrayLight[0]) {
                lightsArray.push(returnedArrayLight[1]);
                lightsArrayNames.push(returnedArrayLight[1].name);
            }
            else {
                this._blocks[blockID].addError("Could not find a Light Nr " + k + " (ID = " + lightID + " ) for this LightPicker");
            }
        }
        if (lightsArray.length == 0) {
            this._blocks[blockID].addError("Could not create this LightPicker, cause no Light was found.");
            this.parseUserAttributes();
            return; //return without any more parsing for this block
        }
        var lightPick = new StaticLightPicker(lightsArray);
        lightPick.name = name;
        this.parseUserAttributes();
        this._pFinalizeAsset(lightPick, name);
        this._blocks[blockID].data = lightPick;
        if (this._debug) {
            console.log("Parsed a StaticLightPicker: Name = '" + name + "' | Texture-Name = " + lightsArrayNames.toString());
        }
    };
    //Block ID = 81
    AWDParser.prototype.parseMaterial = function (blockID) {
        // TODO: not used
        ////blockLength = block.len;
        var name;
        var type;
        var props;
        var mat;
        var attributes;
        var finalize;
        var num_methods;
        var methods_parsed;
        var returnedArray;
        name = this.parseVarStr();
        type = this._newBlockBytes.readUnsignedByte();
        num_methods = this._newBlockBytes.readUnsignedByte();
        // Read material numerical properties
        // (1=color, 2=bitmap url, 10=alpha, 11=alpha_blending, 12=alpha_threshold, 13=repeat)
        props = this.parseProperties({ 1: AWDParser.INT32, 2: AWDParser.BADDR, 10: this._propsNrType, 11: AWDParser.BOOL, 12: this._propsNrType, 13: AWDParser.BOOL });
        methods_parsed = 0;
        while (methods_parsed < num_methods) {
            var method_type;
            method_type = this._newBlockBytes.readUnsignedShort();
            this.parseProperties(null);
            this.parseUserAttributes();
            methods_parsed += 1;
        }
        var debugString = "";
        attributes = this.parseUserAttributes();
        if (type === 1) {
            debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
            var color;
            color = props.get(1, 0xffffff);
            if (this.materialMode < 2) {
                mat = new MethodMaterial(color, props.get(10, 1.0));
            }
            else {
                mat = new MethodMaterial(color);
                mat.mode = MethodMaterialMode.MULTI_PASS;
            }
        }
        else if (type === 2) {
            var tex_addr = props.get(2, 0);
            returnedArray = this.getAssetByID(tex_addr, [TextureBase.assetType]);
            if ((!returnedArray[0]) && (tex_addr > 0))
                this._blocks[blockID].addError("Could not find the DiffsueTexture (ID = " + tex_addr + " ) for this Material");
            mat = new MethodMaterial(returnedArray[1]);
            if (this.materialMode < 2) {
                mat.alphaBlending = props.get(11, false);
                mat.alpha = props.get(10, 1.0);
                debugString += "Parsed a MethodMaterial(SinglePass): Name = '" + name + "' | Texture-Name = " + mat.name;
            }
            else {
                mat.mode = MethodMaterialMode.MULTI_PASS;
                debugString += "Parsed a MethodMaterial(MultiPass): Name = '" + name + "' | Texture-Name = " + mat.name;
            }
        }
        mat.extra = attributes;
        mat.alphaThreshold = props.get(12, 0.0);
        mat.repeat = props.get(13, false);
        this._pFinalizeAsset(mat, name);
        this._blocks[blockID].data = mat;
        if (this._debug) {
            console.log(debugString);
        }
    };
    // Block ID = 81 AWD2.1
    AWDParser.prototype.parseMaterial_v1 = function (blockID) {
        var mat;
        var normalTexture;
        var specTexture;
        var returnedArray;
        var name = this.parseVarStr();
        var type = this._newBlockBytes.readUnsignedByte();
        var num_methods = this._newBlockBytes.readUnsignedByte();
        var props = this.parseProperties({ 1: AWDParser.UINT32, 2: AWDParser.BADDR, 3: AWDParser.BADDR, 4: AWDParser.UINT8, 5: AWDParser.BOOL, 6: AWDParser.BOOL, 7: AWDParser.BOOL, 8: AWDParser.BOOL, 9: AWDParser.UINT8, 10: this._propsNrType, 11: AWDParser.BOOL, 12: this._propsNrType, 13: AWDParser.BOOL, 15: this._propsNrType, 16: AWDParser.UINT32, 17: AWDParser.BADDR, 18: this._propsNrType, 19: this._propsNrType, 20: AWDParser.UINT32, 21: AWDParser.BADDR, 22: AWDParser.BADDR });
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
                        mat = new MethodMaterial(color);
                        mat.mode = MethodMaterialMode.MULTI_PASS;
                        debugString += "Parsed a ColorMaterial(MultiPass): Name = '" + name + "' | ";
                    }
                    else {
                        mat = new MethodMaterial(color, props.get(10, 1.0));
                        mat.alphaBlending = props.get(11, false);
                        debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
                    }
                }
                else if (type == 2) {
                    var tex_addr = props.get(2, 0); //TODO temporarily swapped so that diffuse texture goes to ambient
                    returnedArray = this.getAssetByID(tex_addr, [TextureBase.assetType]);
                    if ((!returnedArray[0]) && (tex_addr > 0))
                        this._blocks[blockID].addError("Could not find the AmbientTexture (ID = " + tex_addr + " ) for this MethodMaterial");
                    var texture = returnedArray[1];
                    mat = new MethodMaterial(texture);
                    if (spezialType == 1) {
                        mat.mode = MethodMaterialMode.MULTI_PASS;
                        debugString += "Parsed a MethodMaterial(MultiPass): Name = '" + name + "' | Texture-Name = " + texture.name;
                    }
                    else {
                        mat.alpha = props.get(10, 1.0);
                        mat.alphaBlending = props.get(11, false);
                        debugString += "Parsed a MethodMaterial(SinglePass): Name = '" + name + "' | Texture-Name = " + texture.name;
                    }
                }
                var diffuseTexture;
                var diffuseTex_addr = props.get(17, 0);
                returnedArray = this.getAssetByID(diffuseTex_addr, [TextureBase.assetType]);
                if ((!returnedArray[0]) && (diffuseTex_addr != 0)) {
                    this._blocks[blockID].addError("Could not find the DiffuseTexture (ID = " + diffuseTex_addr + " ) for this MethodMaterial");
                }
                if (returnedArray[0])
                    diffuseTexture = returnedArray[1];
                if (diffuseTexture) {
                    mat.diffuseTexture = diffuseTexture;
                    debugString += " | DiffuseTexture-Name = " + diffuseTexture.name;
                }
                var normalTex_addr = props.get(3, 0);
                returnedArray = this.getAssetByID(normalTex_addr, [TextureBase.assetType]);
                if ((!returnedArray[0]) && (normalTex_addr != 0)) {
                    this._blocks[blockID].addError("Could not find the NormalTexture (ID = " + normalTex_addr + " ) for this MethodMaterial");
                }
                if (returnedArray[0]) {
                    normalTexture = returnedArray[1];
                    debugString += " | NormalTexture-Name = " + normalTexture.name;
                }
                var specTex_addr = props.get(21, 0);
                returnedArray = this.getAssetByID(specTex_addr, [TextureBase.assetType]);
                if ((!returnedArray[0]) && (specTex_addr != 0)) {
                    this._blocks[blockID].addError("Could not find the SpecularTexture (ID = " + specTex_addr + " ) for this MethodMaterial");
                }
                if (returnedArray[0]) {
                    specTexture = returnedArray[1];
                    debugString += " | SpecularTexture-Name = " + specTexture.name;
                }
                var lightPickerAddr = props.get(22, 0);
                returnedArray = this.getAssetByID(lightPickerAddr, [LightPickerBase.assetType]);
                if ((!returnedArray[0]) && (lightPickerAddr)) {
                    this._blocks[blockID].addError("Could not find the LightPicker (ID = " + lightPickerAddr + " ) for this MethodMaterial");
                }
                else {
                    mat.lightPicker = returnedArray[1];
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
                var methods_parsed = 0;
                var targetID;
                while (methods_parsed < num_methods) {
                    var method_type;
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
                        case 999:
                            targetID = props.get(1, 0);
                            returnedArray = this.getAssetByID(targetID, [EffectMethodBase.assetType]);
                            if (!returnedArray[0]) {
                                this._blocks[blockID].addError("Could not find the EffectMethod (ID = " + targetID + " ) for this Material");
                            }
                            else {
                                mat.addEffectMethod(returnedArray[1]);
                                debugString += " | EffectMethod-Name = " + returnedArray[1].name;
                            }
                            break;
                        case 998:
                            targetID = props.get(1, 0);
                            returnedArray = this.getAssetByID(targetID, [ShadowMapMethodBase.assetType]);
                            if (!returnedArray[0]) {
                                this._blocks[blockID].addError("Could not find the ShadowMethod (ID = " + targetID + " ) for this Material");
                            }
                            else {
                                mat.shadowMethod = returnedArray[1];
                                debugString += " | ShadowMethod-Name = " + returnedArray[1].name;
                            }
                            break;
                        case 1:
                            targetID = props.get(1, 0);
                            returnedArray = this.getAssetByID(targetID, [TextureBase.assetType], "CubeTexture");
                            if (!returnedArray[0])
                                this._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this EnvMapAmbientMethodMaterial");
                            mat.ambientMethod = new AmbientEnvMapMethod(returnedArray[1]);
                            debugString += " | AmbientEnvMapMethod | EnvMap-Name =" + returnedArray[1].name;
                            break;
                        case 51:
                            mat.diffuseMethod = new DiffuseDepthMethod();
                            debugString += " | DiffuseDepthMethod";
                            break;
                        case 52:
                            targetID = props.get(1, 0);
                            returnedArray = this.getAssetByID(targetID, [TextureBase.assetType]);
                            if (!returnedArray[0])
                                this._blocks[blockID].addError("Could not find the GradientDiffuseTexture (ID = " + targetID + " ) for this GradientDiffuseMethod");
                            mat.diffuseMethod = new DiffuseGradientMethod(returnedArray[1]);
                            debugString += " | DiffuseGradientMethod | GradientDiffuseTexture-Name =" + returnedArray[1].name;
                            break;
                        case 53:
                            mat.diffuseMethod = new DiffuseWrapMethod(props.get(101, 5));
                            debugString += " | DiffuseWrapMethod";
                            break;
                        case 54:
                            targetID = props.get(1, 0);
                            returnedArray = this.getAssetByID(targetID, [TextureBase.assetType]);
                            if (!returnedArray[0])
                                this._blocks[blockID].addError("Could not find the LightMap (ID = " + targetID + " ) for this LightMapDiffuseMethod");
                            mat.diffuseMethod = new DiffuseLightMapMethod(returnedArray[1], this.blendModeDic[props.get(401, 10)], false, mat.diffuseMethod);
                            debugString += " | DiffuseLightMapMethod | LightMapTexture-Name =" + returnedArray[1].name;
                            break;
                        case 55:
                            mat.diffuseMethod = new DiffuseCelMethod(props.get(401, 3), mat.diffuseMethod);
                            mat.diffuseMethod.smoothness = props.get(101, 0.1);
                            debugString += " | DiffuseCelMethod";
                            break;
                        case 56:
                            break;
                        case 101:
                            mat.specularMethod = new SpecularAnisotropicMethod();
                            debugString += " | SpecularAnisotropicMethod";
                            break;
                        case 102:
                            mat.specularMethod = new SpecularPhongMethod();
                            debugString += " | SpecularPhongMethod";
                            break;
                        case 103:
                            mat.specularMethod = new SpecularCelMethod(props.get(101, 0.5), mat.specularMethod);
                            mat.specularMethod.smoothness = props.get(102, 0.1);
                            debugString += " | SpecularCelMethod";
                            break;
                        case 104:
                            mat.specularMethod = new SpecularFresnelMethod(props.get(701, true), mat.specularMethod);
                            mat.specularMethod.fresnelPower = props.get(101, 5);
                            mat.specularMethod.normalReflectance = props.get(102, 0.1);
                            debugString += " | SpecularFresnelMethod";
                            break;
                        case 151:
                            break;
                        case 152:
                            targetID = props.get(1, 0);
                            returnedArray = this.getAssetByID(targetID, [TextureBase.assetType]);
                            if (!returnedArray[0])
                                this._blocks[blockID].addError("Could not find the SecoundNormalMap (ID = " + targetID + " ) for this SimpleWaterNormalMethod");
                            if (!mat.normalMap)
                                this._blocks[blockID].addError("Could not find a normal Map on this Material to use with this SimpleWaterNormalMethod");
                            mat.normalMap = returnedArray[1];
                            mat.normalMethod = new NormalSimpleWaterMethod(mat.normalMap, returnedArray[1]);
                            debugString += " | NormalSimpleWaterMethod | Second-NormalTexture-Name = " + returnedArray[1].name;
                            break;
                    }
                    this.parseUserAttributes();
                    methods_parsed += 1;
                }
            }
        }
        else if ((type >= 3) && (type <= 7)) {
            // if this is a curve material, we create it, finalize it, assign it to block-cache and return and return.
            var color = props.get(1, 0xcccccc);
            debugString += color;
            var diffuseTexture;
            var diffuseTex_addr = props.get(2, 0);
            returnedArray = this.getAssetByID(diffuseTex_addr, [TextureBase.assetType]);
            if ((!returnedArray[0]) && (diffuseTex_addr != 0)) {
                this._blocks[blockID].addError("Could not find the DiffuseTexture (ID = " + diffuseTex_addr + " ) for this MethodMaterial");
                diffuseTexture = DefaultMaterialManager.getDefaultTexture();
            }
            if (returnedArray[0])
                diffuseTexture = returnedArray[1];
            var curve_mat = new CurveMaterial(diffuseTexture);
            //debugString+= " alpha = "+props.get(10, 1.0)+" ";
            debugString += " texture = " + diffuseTex_addr + " ";
            curve_mat.bothSides = true;
            curve_mat.preserveAlpha = true;
            curve_mat.alphaBlending = true;
            curve_mat.extra = this.parseUserAttributes();
            this._pFinalizeAsset(curve_mat, name);
            this._blocks[blockID].data = curve_mat;
            if (this._debug)
                console.log(debugString);
            return;
        }
        mat.extra = this.parseUserAttributes();
        this._pFinalizeAsset(mat, name);
        this._blocks[blockID].data = mat;
        if (this._debug) {
            console.log(debugString);
        }
    };
    //Block ID = 82
    AWDParser.prototype.parseTexture = function (blockID) {
        var asset;
        this._blocks[blockID].name = this.parseVarStr();
        var type = this._newBlockBytes.readUnsignedByte();
        var data_len;
        this._texture_users[this._cur_block_id.toString()] = [];
        // External
        if (type == 0) {
            data_len = this._newBlockBytes.readUnsignedInt();
            var url;
            url = this._newBlockBytes.readUTFBytes(data_len);
            this._pAddDependency(this._cur_block_id.toString(), new URLRequest(url), false, null, true);
        }
        else {
            data_len = this._newBlockBytes.readUnsignedInt();
            var data;
            data = new ByteArray();
            this._newBlockBytes.readBytes(data, 0, data_len);
            //
            // AWDParser - Fix for FireFox Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=715075 .
            //
            // Converting data to image here instead of parser - fix FireFox bug where image width / height is 0 when created from data
            // This gives the browser time to initialise image width / height.
            this._pAddDependency(this._cur_block_id.toString(), null, false, ParserUtils.byteArrayToImage(data), true);
        }
        // Ignore for now
        this.parseProperties(null);
        this._blocks[blockID].extras = this.parseUserAttributes();
        this._pPauseAndRetrieveDependencies();
        this._blocks[blockID].data = asset;
        if (this._debug) {
            var textureStylesNames = ["external", "embed"];
            console.log("Start parsing a " + textureStylesNames[type] + " Bitmap for Texture");
        }
    };
    //Block ID = 83
    AWDParser.prototype.parseCubeTexture = function (blockID) {
        //blockLength = block.len;
        var data_len;
        var asset;
        var i;
        this._cubeTextures = new Array();
        this._texture_users[this._cur_block_id.toString()] = [];
        var type = this._newBlockBytes.readUnsignedByte();
        this._blocks[blockID].name = this.parseVarStr();
        for (i = 0; i < 6; i++) {
            this._texture_users[this._cur_block_id.toString()] = [];
            this._cubeTextures.push(null);
            // External
            if (type == 0) {
                data_len = this._newBlockBytes.readUnsignedInt();
                var url;
                url = this._newBlockBytes.readUTFBytes(data_len);
                this._pAddDependency(this._cur_block_id.toString() + "#" + i, new URLRequest(url), false, null, true);
            }
            else {
                data_len = this._newBlockBytes.readUnsignedInt();
                var data;
                data = new ByteArray();
                this._newBlockBytes.readBytes(data, 0, data_len);
                this._pAddDependency(this._cur_block_id.toString() + "#" + i, null, false, ParserUtils.byteArrayToImage(data), true);
            }
        }
        // Ignore for now
        this.parseProperties(null);
        this._blocks[blockID].extras = this.parseUserAttributes();
        this._pPauseAndRetrieveDependencies();
        this._blocks[blockID].data = asset;
        if (this._debug) {
            var textureStylesNames = ["external", "embed"];
            console.log("Start parsing 6 " + textureStylesNames[type] + " Bitmaps for CubeTexture");
        }
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
        if (this._debug) {
            console.log("Parsed a EffectMethod: Name = " + asset.name + " Type = " + asset);
        }
    };
    //Block ID = 92
    AWDParser.prototype.parseShadowMethodBlock = function (blockID) {
        var type;
        var data_len;
        var asset;
        var shadowLightID;
        this._blocks[blockID].name = this.parseVarStr();
        shadowLightID = this._newBlockBytes.readUnsignedInt();
        var returnedArray = this.getAssetByID(shadowLightID, [LightBase.assetType]);
        if (!returnedArray[0]) {
            this._blocks[blockID].addError("Could not find the TargetLight (ID = " + shadowLightID + " ) for this ShadowMethod - ShadowMethod not created");
            return;
        }
        asset = this.parseShadowMethodList(returnedArray[1], blockID);
        if (!asset)
            return;
        this.parseUserAttributes(); // Ignore for now
        this._pFinalizeAsset(asset, this._blocks[blockID].name);
        this._blocks[blockID].data = asset;
        if (this._debug) {
            console.log("Parsed a ShadowMapMethodMethod: Name = " + asset.name + " | Type = " + asset + " | Light-Name = ", returnedArray[1].name);
        }
    };
    //Block ID = 253
    AWDParser.prototype.parseCommand = function (blockID) {
        var hasBlocks = (this._newBlockBytes.readUnsignedByte() == 1);
        var par_id = this._newBlockBytes.readUnsignedInt();
        var mtx = this.parseMatrix3D();
        var name = this.parseVarStr();
        var parentObject;
        var targetObject;
        var returnedArray = this.getAssetByID(par_id, [DisplayObjectContainer.assetType, LightBase.assetType, Mesh.assetType]);
        if (returnedArray[0]) {
            parentObject = returnedArray[1];
        }
        var numCommands = this._newBlockBytes.readShort();
        var typeCommand = this._newBlockBytes.readShort();
        var props = this.parseProperties({ 1: AWDParser.BADDR });
        switch (typeCommand) {
            case 1:
                var targetID = props.get(1, 0);
                //var returnedArrayTarget:Array<any> = this.getAssetByID(targetID, [LightBase.assetType, TextureProjector.assetType]); //for no only light is requested!!!!
                var returnedArrayTarget = this.getAssetByID(targetID, [LightBase.assetType]); //for no only light is requested!!!!
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
            props = this.parseProperties({ 1: this._matrixNrType, 2: this._matrixNrType, 3: this._matrixNrType, 4: AWDParser.UINT8 });
            targetObject.pivot = new Vector3D(props.get(1, 0), props.get(2, 0), props.get(3, 0));
            targetObject.extra = this.parseUserAttributes();
        }
        this._blocks[blockID].data = targetObject;
        if (this._debug) {
            console.log("Parsed a CommandBlock: Name = '" + name);
        }
    };
    //blockID 255
    AWDParser.prototype.parseMetaData = function (blockID) {
        var props = this.parseProperties({ 1: AWDParser.UINT32, 2: AWDParser.AWDSTRING, 3: AWDParser.AWDSTRING, 4: AWDParser.AWDSTRING, 5: AWDParser.AWDSTRING });
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
    //--Parser UTILS---------------------------------------------------------------------------
    // this functions reads and creates a ShadowMethodMethod
    AWDParser.prototype.parseShadowMethodList = function (light, blockID) {
        var methodType = this._newBlockBytes.readUnsignedShort();
        var shadowMethod;
        var props = this.parseProperties({ 1: AWDParser.BADDR, 2: AWDParser.BADDR, 3: AWDParser.BADDR, 101: this._propsNrType, 102: this._propsNrType, 103: this._propsNrType, 201: AWDParser.UINT32, 202: AWDParser.UINT32, 301: AWDParser.UINT16, 302: AWDParser.UINT16, 401: AWDParser.UINT8, 402: AWDParser.UINT8, 601: AWDParser.COLOR, 602: AWDParser.COLOR, 701: AWDParser.BOOL, 702: AWDParser.BOOL, 801: AWDParser.MTX4x4 });
        var targetID;
        var returnedArray;
        switch (methodType) {
            case 1002:
                targetID = props.get(1, 0);
                returnedArray = this.getAssetByID(targetID, [ShadowMapMethodBase.assetType]);
                if (!returnedArray[0]) {
                    this._blocks[blockID].addError("Could not find the ShadowBaseMethod (ID = " + targetID + " ) for this ShadowNearMethod - ShadowMethod not created");
                    return shadowMethod;
                }
                shadowMethod = new ShadowNearMethod(returnedArray[1]);
                break;
            case 1101:
                shadowMethod = new ShadowFilteredMethod(light);
                shadowMethod.alpha = props.get(101, 1);
                shadowMethod.epsilon = props.get(102, 0.002);
                break;
            case 1102:
                shadowMethod = new ShadowDitheredMethod(light, props.get(201, 5));
                shadowMethod.alpha = props.get(101, 1);
                shadowMethod.epsilon = props.get(102, 0.002);
                shadowMethod.range = props.get(103, 1);
                break;
            case 1103:
                shadowMethod = new ShadowSoftMethod(light, props.get(201, 5));
                shadowMethod.alpha = props.get(101, 1);
                shadowMethod.epsilon = props.get(102, 0.002);
                shadowMethod.range = props.get(103, 1);
                break;
            case 1104:
                shadowMethod = new ShadowHardMethod(light);
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
        var skeleton = new Skeleton();
        this.parseProperties(null); // Discard properties for now
        var joints_parsed = 0;
        while (joints_parsed < num_joints) {
            var joint;
            var ibp;
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
    };
    //Block ID = 102
    AWDParser.prototype.parseSkeletonPose = function (blockID /*uint*/) {
        var name = this.parseVarStr();
        var num_joints = this._newBlockBytes.readUnsignedShort();
        this.parseProperties(null); // Ignore properties for now
        var pose = new SkeletonPose();
        var joints_parsed = 0;
        while (joints_parsed < num_joints) {
            var joint_pose;
            var has_transform /*uint*/;
            joint_pose = new JointPose();
            has_transform = this._newBlockBytes.readUnsignedByte();
            if (has_transform == 1) {
                var mtx_data = this.parseMatrix43RawData();
                var mtx = new Matrix3D(mtx_data);
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
    };
    //blockID 103
    AWDParser.prototype.parseSkeletonAnimation = function (blockID /*uint*/) {
        var frame_dur;
        var pose_addr /*uint*/;
        var name = this.parseVarStr();
        var clip = new SkeletonClipNode();
        var num_frames = this._newBlockBytes.readUnsignedShort();
        this.parseProperties(null); // Ignore properties for now
        var frames_parsed = 0;
        var returnedArray;
        while (frames_parsed < num_frames) {
            pose_addr = this._newBlockBytes.readUnsignedInt();
            frame_dur = this._newBlockBytes.readUnsignedShort();
            returnedArray = this.getAssetByID(pose_addr, [SkeletonPose.assetType]);
            if (!returnedArray[0])
                this._blocks[blockID].addError("Could not find the SkeletonPose Frame # " + frames_parsed + " (ID = " + pose_addr + " ) for this SkeletonClipNode");
            else
                clip.addFrame(this._blocks[pose_addr].data, frame_dur);
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
    };
    //Block ID = 111 /  Block ID = 112
    AWDParser.prototype.parseMeshPoseAnimation = function (blockID /*uint*/, poseOnly) {
        if (poseOnly === void 0) { poseOnly = false; }
        var num_frames = 1;
        var num_submeshes /*uint*/;
        var frames_parsed /*uint*/;
        var subMeshParsed /*uint*/;
        var frame_dur;
        var x;
        var y;
        var z;
        var str_len;
        var str_end;
        var geometry;
        var subGeom;
        var idx = 0;
        var clip = new VertexClipNode();
        var indices /*uint*/;
        var verts;
        var num_Streams = 0;
        var streamsParsed = 0;
        var streamtypes = new Array() /*int*/;
        var props;
        var thisGeo;
        var name = this.parseVarStr();
        var geoAdress = this._newBlockBytes.readUnsignedInt();
        var returnedArray = this.getAssetByID(geoAdress, [Geometry.assetType]);
        if (!returnedArray[0]) {
            this._blocks[blockID].addError("Could not find the target-Geometry-Object " + geoAdress + " ) for this VertexClipNode");
            return;
        }
        var uvs = this.getUVForVertexAnimation(geoAdress);
        if (!poseOnly)
            num_frames = this._newBlockBytes.readUnsignedShort();
        num_submeshes = this._newBlockBytes.readUnsignedShort();
        num_Streams = this._newBlockBytes.readUnsignedShort();
        streamsParsed = 0;
        while (streamsParsed < num_Streams) {
            streamtypes.push(this._newBlockBytes.readUnsignedShort());
            streamsParsed++;
        }
        props = this.parseProperties({ 1: AWDParser.BOOL, 2: AWDParser.BOOL });
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
                        indices = returnedArray[1].subGeometries[subMeshParsed].indices;
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
                        subGeom = new TriangleSubGeometry(true);
                        subGeom.updateIndices(indices);
                        subGeom.updatePositions(verts);
                        subGeom.updateUVs(uvs[subMeshParsed]);
                        subGeom.updateVertexNormals(null);
                        subGeom.updateVertexTangents(null);
                        subGeom.autoDeriveNormals = false;
                        subGeom.autoDeriveTangents = false;
                        subMeshParsed++;
                        geometry.addSubGeometry(subGeom);
                    }
                    else
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
            console.log("Parsed a VertexClipNode: Name = " + clip.name + " | Target-Geometry-Name = " + returnedArray[1].name + " | Number of Frames = " + clip.frames.length);
    };
    //BlockID 113
    AWDParser.prototype.parseVertexAnimationSet = function (blockID /*uint*/) {
        var poseBlockAdress; /*int*/
        var outputString = "";
        var name = this.parseVarStr();
        var num_frames = this._newBlockBytes.readUnsignedShort();
        var props = this.parseProperties({ 1: AWDParser.UINT16 });
        var frames_parsed = 0;
        var skeletonFrames = new Array();
        var vertexFrames = new Array();
        while (frames_parsed < num_frames) {
            poseBlockAdress = this._newBlockBytes.readUnsignedInt();
            var returnedArray = this.getAssetByID(poseBlockAdress, [AnimationNodeBase.assetType]);
            if (!returnedArray[0])
                this._blocks[blockID].addError("Could not find the AnimationClipNode Nr " + frames_parsed + " ( " + poseBlockAdress + " ) for this AnimationSet");
            else {
                if (returnedArray[1] instanceof VertexClipNode)
                    vertexFrames.push(returnedArray[1]);
                if (returnedArray[1] instanceof SkeletonClipNode)
                    skeletonFrames.push(returnedArray[1]);
            }
            frames_parsed++;
        }
        if ((vertexFrames.length == 0) && (skeletonFrames.length == 0)) {
            this._blocks[blockID].addError("Could not create this AnimationSet, because it contains no animations");
            return;
        }
        this.parseUserAttributes();
        if (vertexFrames.length > 0) {
            var newVertexAnimationSet = new VertexAnimationSet();
            for (var i = 0; i < vertexFrames.length; i++)
                newVertexAnimationSet.addAnimation(vertexFrames[i]);
            this._pFinalizeAsset(newVertexAnimationSet, name);
            this._blocks[blockID].data = newVertexAnimationSet;
            if (this._debug)
                console.log("Parsed a VertexAnimationSet: Name = " + name + " | Animations = " + newVertexAnimationSet.animations.length + " | Animation-Names = " + newVertexAnimationSet.animationNames.toString());
        }
        else if (skeletonFrames.length > 0) {
            returnedArray = this.getAssetByID(poseBlockAdress, [AnimationNodeBase.assetType]);
            var newSkeletonAnimationSet = new SkeletonAnimationSet(props.get(1, 4)); //props.get(1,4));
            for (var i = 0; i < skeletonFrames.length; i++)
                newSkeletonAnimationSet.addAnimation(skeletonFrames[i]);
            this._pFinalizeAsset(newSkeletonAnimationSet, name);
            this._blocks[blockID].data = newSkeletonAnimationSet;
            if (this._debug)
                console.log("Parsed a SkeletonAnimationSet: Name = " + name + " | Animations = " + newSkeletonAnimationSet.animations.length + " | Animation-Names = " + newSkeletonAnimationSet.animationNames.toString());
        }
    };
    //BlockID 122
    AWDParser.prototype.parseAnimatorSet = function (blockID /*uint*/) {
        var targetMesh;
        var animSetBlockAdress; /*int*/
        var targetAnimationSet;
        var outputString = "";
        var name = this.parseVarStr();
        var type = this._newBlockBytes.readUnsignedShort();
        var props = this.parseProperties({ 1: AWDParser.BADDR });
        animSetBlockAdress = this._newBlockBytes.readUnsignedInt();
        var targetMeshLength = this._newBlockBytes.readUnsignedShort();
        var meshAdresses = new Array() /*uint*/;
        for (var i = 0; i < targetMeshLength; i++)
            meshAdresses.push(this._newBlockBytes.readUnsignedInt());
        var activeState = this._newBlockBytes.readUnsignedShort();
        var autoplay = (this._newBlockBytes.readUnsignedByte() == 1);
        this.parseUserAttributes();
        this.parseUserAttributes();
        var returnedArray;
        var targetMeshes = new Array();
        for (i = 0; i < meshAdresses.length; i++) {
            returnedArray = this.getAssetByID(meshAdresses[i], [Mesh.assetType]);
            if (returnedArray[0])
                targetMeshes.push(returnedArray[1]);
        }
        returnedArray = this.getAssetByID(animSetBlockAdress, [AnimationSetBase.assetType]);
        if (!returnedArray[0]) {
            this._blocks[blockID].addError("Could not find the AnimationSet ( " + animSetBlockAdress + " ) for this Animator");
            ;
            return;
        }
        targetAnimationSet = returnedArray[1];
        var thisAnimator;
        if (type == 1) {
            returnedArray = this.getAssetByID(props.get(1, 0), [Skeleton.assetType]);
            if (!returnedArray[0]) {
                this._blocks[blockID].addError("Could not find the Skeleton ( " + props.get(1, 0) + " ) for this Animator");
                return;
            }
            thisAnimator = new SkeletonAnimator(targetAnimationSet, returnedArray[1]);
        }
        else if (type == 2)
            thisAnimator = new VertexAnimator(targetAnimationSet);
        this._pFinalizeAsset(thisAnimator, name);
        this._blocks[blockID].data = thisAnimator;
        for (i = 0; i < targetMeshes.length; i++) {
            if (type == 1)
                targetMeshes[i].animator = thisAnimator;
            if (type == 2)
                targetMeshes[i].animator = thisAnimator;
        }
        if (this._debug)
            console.log("Parsed a Animator: Name = " + name);
    };
    // this functions reads and creates a EffectMethod
    AWDParser.prototype.parseSharedMethodList = function (blockID) {
        var methodType = this._newBlockBytes.readUnsignedShort();
        var effectMethodReturn;
        var props = this.parseProperties({ 1: AWDParser.BADDR, 2: AWDParser.BADDR, 3: AWDParser.BADDR, 101: this._propsNrType, 102: this._propsNrType, 103: this._propsNrType, 104: this._propsNrType, 105: this._propsNrType, 106: this._propsNrType, 107: this._propsNrType, 201: AWDParser.UINT32, 202: AWDParser.UINT32, 301: AWDParser.UINT16, 302: AWDParser.UINT16, 401: AWDParser.UINT8, 402: AWDParser.UINT8, 601: AWDParser.COLOR, 602: AWDParser.COLOR, 701: AWDParser.BOOL, 702: AWDParser.BOOL });
        var targetID;
        var returnedArray;
        switch (methodType) {
            case 401:
                effectMethodReturn = new EffectColorMatrixMethod(props.get(101, new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)));
                break;
            case 402:
                effectMethodReturn = new EffectColorTransformMethod();
                var offCol = props.get(601, 0x00000000);
                effectMethodReturn.colorTransform = new ColorTransform(props.get(102, 1), props.get(103, 1), props.get(104, 1), props.get(101, 1), ((offCol >> 16) & 0xFF), ((offCol >> 8) & 0xFF), (offCol & 0xFF), ((offCol >> 24) & 0xFF));
                break;
            case 403:
                targetID = props.get(1, 0);
                console.log('ENV MAP', targetID);
                returnedArray = this.getAssetByID(targetID, [TextureBase.assetType], "CubeTexture");
                if (!returnedArray[0])
                    this._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this EnvMapMethod");
                effectMethodReturn = new EffectEnvMapMethod(returnedArray[1], props.get(101, 1));
                targetID = props.get(2, 0);
                if (targetID > 0) {
                    returnedArray = this.getAssetByID(targetID, [TextureBase.assetType]);
                    if (!returnedArray[0])
                        this._blocks[blockID].addError("Could not find the Mask-texture (ID = " + targetID + " ) for this EnvMapMethod");
                }
                break;
            case 404:
                targetID = props.get(1, 0);
                returnedArray = this.getAssetByID(targetID, [TextureBase.assetType]);
                if (!returnedArray[0])
                    this._blocks[blockID].addError("Could not find the LightMap (ID = " + targetID + " ) for this LightMapMethod");
                effectMethodReturn = new EffectLightMapMethod(returnedArray[1], this.blendModeDic[props.get(401, 10)]); //usesecondaryUV not set
                break;
            case 406:
                effectMethodReturn = new EffectRimLightMethod(props.get(601, 0xffffff), props.get(101, 0.4), props.get(101, 2)); //blendMode
                break;
            case 407:
                targetID = props.get(1, 0);
                returnedArray = this.getAssetByID(targetID, [TextureBase.assetType]);
                if (!returnedArray[0])
                    this._blocks[blockID].addError("Could not find the Alpha-texture (ID = " + targetID + " ) for this AlphaMaskMethod");
                effectMethodReturn = new EffectAlphaMaskMethod(returnedArray[1], props.get(701, false));
                break;
            case 410:
                targetID = props.get(1, 0);
                returnedArray = this.getAssetByID(targetID, [TextureBase.assetType], "CubeTexture");
                if (!returnedArray[0])
                    this._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this FresnelEnvMapMethod");
                effectMethodReturn = new EffectFresnelEnvMapMethod(returnedArray[1], props.get(101, 1));
                break;
            case 411:
                effectMethodReturn = new EffectFogMethod(props.get(101, 0), props.get(102, 1000), props.get(601, 0x808080));
                break;
        }
        this.parseUserAttributes();
        return effectMethodReturn;
    };
    AWDParser.prototype.parseUserAttributes = function () {
        var attributes;
        var list_len;
        var attibuteCnt;
        list_len = this._newBlockBytes.readUnsignedInt();
        if (list_len > 0) {
            var list_end;
            attributes = {};
            list_end = this._newBlockBytes.position + list_len;
            while (this._newBlockBytes.position < list_end) {
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
                if (this._debug) {
                    console.log("attribute = name: " + attr_key + "  / value = " + attr_val);
                }
                attributes[attr_key] = attr_val;
                attibuteCnt += 1;
            }
        }
        return attributes;
    };
    AWDParser.prototype.parseProperties = function (expected) {
        var list_end;
        var list_len;
        var propertyCnt = 0;
        var props = new AWDProperties();
        list_len = this._newBlockBytes.readUnsignedInt();
        list_end = this._newBlockBytes.position + list_len;
        if (expected) {
            while (this._newBlockBytes.position < list_end) {
                var len;
                var key;
                var type;
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
                }
                else {
                    this._newBlockBytes.position += len;
                }
                propertyCnt += 1;
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
            var list = [];
            var num_read = 0;
            var num_elems = len / elem_len;
            while (num_read < num_elems) {
                list.push(read_func.apply(this._newBlockBytes)); // list.push(read_func());
                num_read++;
            }
            return list;
        }
        else {
            var val = read_func.apply(this._newBlockBytes); //read_func();
            return val;
        }
    };
    AWDParser.prototype.parseHeader = function () {
        var flags;
        var body_len;
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
    };
    // Helper - functions
    AWDParser.prototype.getUVForVertexAnimation = function (meshID /*uint*/) {
        if (this._blocks[meshID].data instanceof Mesh)
            meshID = this._blocks[meshID].geoID;
        if (this._blocks[meshID].uvsForVertexAnimation)
            return this._blocks[meshID].uvsForVertexAnimation;
        var geometry = this._blocks[meshID].data;
        var geoCnt = 0;
        var ud;
        var uStride /*uint*/;
        var uOffs /*uint*/;
        var numPoints /*uint*/;
        var i /*int*/;
        var newUvs;
        var sub_geom;
        this._blocks[meshID].uvsForVertexAnimation = new Array();
        while (geoCnt < geometry.subGeometries.length) {
            newUvs = new Array();
            sub_geom = geometry.subGeometries[geoCnt];
            numPoints = sub_geom.numVertices;
            ud = sub_geom.uvs;
            uStride = sub_geom.getStride(TriangleSubGeometry.UV_DATA);
            uOffs = sub_geom.getOffset(TriangleSubGeometry.UV_DATA);
            for (i = 0; i < numPoints; i++) {
                newUvs.push(ud[uOffs + i * uStride + 0]);
                newUvs.push(ud[uOffs + i * uStride + 1]);
            }
            this._blocks[meshID].uvsForVertexAnimation.push(newUvs);
            geoCnt++;
        }
        return this._blocks[meshID].uvsForVertexAnimation;
    };
    AWDParser.prototype.parseVarStr = function () {
        var len = this._newBlockBytes.readUnsignedShort();
        return this._newBlockBytes.readUTFBytes(len);
    };
    AWDParser.prototype.getAssetByID = function (assetID, assetTypesToGet, extraTypeInfo) {
        if (extraTypeInfo === void 0) { extraTypeInfo = "SingleTexture"; }
        var returnArray = new Array();
        var typeCnt = 0;
        if (assetID > 0) {
            if (this._blocks[assetID]) {
                if (this._blocks[assetID].data) {
                    while (typeCnt < assetTypesToGet.length) {
                        var iasset = this._blocks[assetID].data;
                        if (iasset.assetType == assetTypesToGet[typeCnt]) {
                            //if the right assetType was found
                            if ((assetTypesToGet[typeCnt] == TextureBase.assetType) && (extraTypeInfo == "CubeTexture")) {
                                if (this._blocks[assetID].data instanceof ImageCubeTexture) {
                                    returnArray.push(true);
                                    returnArray.push(this._blocks[assetID].data);
                                    return returnArray;
                                }
                            }
                            if ((assetTypesToGet[typeCnt] == TextureBase.assetType) && (extraTypeInfo == "SingleTexture")) {
                                if (this._blocks[assetID].data instanceof ImageTexture) {
                                    returnArray.push(true);
                                    returnArray.push(this._blocks[assetID].data);
                                    return returnArray;
                                }
                            }
                            else {
                                returnArray.push(true);
                                returnArray.push(this._blocks[assetID].data);
                                return returnArray;
                            }
                        }
                        //if ((assetTypesToGet[typeCnt] == Geometry.assetType) && (IAsset(_blocks[assetID].data).assetType == Mesh.assetType)) {
                        if ((assetTypesToGet[typeCnt] == Geometry.assetType) && (iasset.assetType == Mesh.assetType)) {
                            var mesh = this._blocks[assetID].data;
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
        returnArray.push(this.getDefaultAsset(assetTypesToGet[0], extraTypeInfo));
        return returnArray;
    };
    AWDParser.prototype.getDefaultAsset = function (assetType, extraTypeInfo) {
        switch (true) {
            case (assetType == TextureBase.assetType):
                if (extraTypeInfo == "CubeTexture")
                    return this.getDefaultCubeTexture();
                if (extraTypeInfo == "SingleTexture")
                    return DefaultMaterialManager.getDefaultTexture();
                break;
            case (assetType == MaterialBase.assetType):
                return DefaultMaterialManager.getDefaultMaterial();
                break;
            default:
                break;
        }
        return null;
    };
    AWDParser.prototype.getDefaultCubeTexture = function () {
        if (!this._defaultCubeTexture) {
            var defaultBitmap = DefaultMaterialManager.createCheckeredBitmapData();
            this._defaultCubeTexture = new BitmapCubeTexture(defaultBitmap, defaultBitmap, defaultBitmap, defaultBitmap, defaultBitmap, defaultBitmap);
            this._defaultCubeTexture.name = "defaultCubeTexture";
        }
        return this._defaultCubeTexture;
    };
    AWDParser.prototype.readNumber = function (precision) {
        if (precision === void 0) { precision = false; }
        if (precision)
            return this._newBlockBytes.readDouble();
        return this._newBlockBytes.readFloat();
    };
    AWDParser.prototype.parseMatrix3D = function () {
        return new Matrix3D(this.parseMatrix43RawData());
    };
    AWDParser.prototype.parseMatrix32RawData = function () {
        var i;
        var mtx_raw = new Array(6);
        for (i = 0; i < 6; i++) {
            mtx_raw[i] = this._newBlockBytes.readFloat();
        }
        return mtx_raw;
    };
    AWDParser.prototype.parseMatrix43RawData = function () {
        var mtx_raw = new Array(16);
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
    return AWDParser;
})(ParserBase);
var AWDBlock = (function () {
    function AWDBlock() {
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
})();
var AWDProperties = (function () {
    function AWDProperties() {
    }
    AWDProperties.prototype.set = function (key, value) {
        this[key.toString()] = value;
    };
    AWDProperties.prototype.get = function (key, fallback) {
        if (this.hasOwnProperty(key.toString())) {
            return this[key.toString()];
        }
        else {
            return fallback;
        }
    };
    return AWDProperties;
})();
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
})();
module.exports = AWDParser;


},{"awayjs-core/lib/data/BlendMode":undefined,"awayjs-core/lib/data/CurveSubGeometry":undefined,"awayjs-core/lib/data/Geometry":undefined,"awayjs-core/lib/data/TriangleSubGeometry":undefined,"awayjs-core/lib/geom/ColorTransform":undefined,"awayjs-core/lib/geom/Matrix3D":undefined,"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-core/lib/projections/OrthographicOffCenterProjection":undefined,"awayjs-core/lib/projections/OrthographicProjection":undefined,"awayjs-core/lib/projections/PerspectiveProjection":undefined,"awayjs-core/lib/textures/BitmapCubeTexture":undefined,"awayjs-core/lib/textures/ImageCubeTexture":undefined,"awayjs-core/lib/textures/ImageTexture":undefined,"awayjs-core/lib/textures/TextureBase":undefined,"awayjs-core/lib/utils/ByteArray":undefined,"awayjs-display/lib/animators/nodes/AnimationNodeBase":undefined,"awayjs-display/lib/base/LightBase":undefined,"awayjs-display/lib/containers/DisplayObjectContainer":undefined,"awayjs-display/lib/entities/Billboard":undefined,"awayjs-display/lib/entities/Camera":undefined,"awayjs-display/lib/entities/DirectionalLight":undefined,"awayjs-display/lib/entities/Mesh":undefined,"awayjs-display/lib/entities/PointLight":undefined,"awayjs-display/lib/entities/Skybox":undefined,"awayjs-display/lib/entities/TextField":undefined,"awayjs-display/lib/managers/DefaultMaterialManager":undefined,"awayjs-display/lib/materials/BasicMaterial":undefined,"awayjs-display/lib/materials/CurveMaterial":undefined,"awayjs-display/lib/materials/MaterialBase":undefined,"awayjs-display/lib/materials/lightpickers/LightPickerBase":undefined,"awayjs-display/lib/materials/lightpickers/StaticLightPicker":undefined,"awayjs-display/lib/materials/shadowmappers/CubeMapShadowMapper":undefined,"awayjs-display/lib/materials/shadowmappers/DirectionalShadowMapper":undefined,"awayjs-display/lib/prefabs/PrefabBase":undefined,"awayjs-display/lib/prefabs/PrimitiveCapsulePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveConePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveCubePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveCylinderPrefab":undefined,"awayjs-display/lib/prefabs/PrimitivePlanePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveSpherePrefab":undefined,"awayjs-display/lib/prefabs/PrimitiveTorusPrefab":undefined,"awayjs-display/lib/text/Font":undefined,"awayjs-display/lib/text/TextFormat":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/MethodMaterialMode":undefined,"awayjs-methodmaterials/lib/methods/AmbientEnvMapMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseCelMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseDepthMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseGradientMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseLightMapMethod":undefined,"awayjs-methodmaterials/lib/methods/DiffuseWrapMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectAlphaMaskMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectColorMatrixMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectColorTransformMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectEnvMapMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectFogMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectFresnelEnvMapMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectLightMapMethod":undefined,"awayjs-methodmaterials/lib/methods/EffectMethodBase":undefined,"awayjs-methodmaterials/lib/methods/EffectRimLightMethod":undefined,"awayjs-methodmaterials/lib/methods/NormalSimpleWaterMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowDitheredMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowFilteredMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowHardMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowMapMethodBase":undefined,"awayjs-methodmaterials/lib/methods/ShadowNearMethod":undefined,"awayjs-methodmaterials/lib/methods/ShadowSoftMethod":undefined,"awayjs-methodmaterials/lib/methods/SpecularAnisotropicMethod":undefined,"awayjs-methodmaterials/lib/methods/SpecularCelMethod":undefined,"awayjs-methodmaterials/lib/methods/SpecularFresnelMethod":undefined,"awayjs-methodmaterials/lib/methods/SpecularPhongMethod":undefined,"awayjs-player/lib/factories/AS2SceneGraphFactory":undefined,"awayjs-player/lib/timeline/TimelineKeyFrame":undefined,"awayjs-player/lib/timeline/commands/AddChildCommand":undefined,"awayjs-player/lib/timeline/commands/ApplyAS2DepthsCommand":undefined,"awayjs-player/lib/timeline/commands/RemoveChildCommand":undefined,"awayjs-player/lib/timeline/commands/UpdatePropertyCommand":undefined,"awayjs-renderergl/lib/animators/AnimationSetBase":undefined,"awayjs-renderergl/lib/animators/SkeletonAnimationSet":undefined,"awayjs-renderergl/lib/animators/SkeletonAnimator":undefined,"awayjs-renderergl/lib/animators/VertexAnimationSet":undefined,"awayjs-renderergl/lib/animators/VertexAnimator":undefined,"awayjs-renderergl/lib/animators/data/JointPose":undefined,"awayjs-renderergl/lib/animators/data/Skeleton":undefined,"awayjs-renderergl/lib/animators/data/SkeletonJoint":undefined,"awayjs-renderergl/lib/animators/data/SkeletonPose":undefined,"awayjs-renderergl/lib/animators/nodes/SkeletonClipNode":undefined,"awayjs-renderergl/lib/animators/nodes/VertexClipNode":undefined}],"awayjs-parsers/lib/MD2Parser":[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Geometry = require("awayjs-core/lib/data/Geometry");
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var DefaultMaterialManager = require("awayjs-display/lib/managers/DefaultMaterialManager");
var VertexClipNode = require("awayjs-renderergl/lib/animators/nodes/VertexClipNode");
var VertexAnimationSet = require("awayjs-renderergl/lib/animators/VertexAnimationSet");
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodMaterialMode = require("awayjs-methodmaterials/lib/MethodMaterialMode");
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
        _super.call(this, URLLoaderDataFormat.ARRAY_BUFFER);
        this._clipNodes = new Object();
        // the current subgeom being built
        this._animationSet = new VertexAnimationSet();
        this.materialFinal = false;
        this.geoCreated = false;
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
        return (ParserUtils.toString(data, 4) == 'IDP2');
    };
    /**
     * @inheritDoc
     */
    MD2Parser.prototype._iResolveDependency = function (resourceDependency) {
        if (resourceDependency.assets.length != 1)
            return;
        var asset = resourceDependency.assets[0];
        if (asset) {
            var material = new MethodMaterial(asset);
            if (this.materialMode >= 2)
                material.mode = MethodMaterialMode.MULTI_PASS;
            //add to the content property
            this._pContent.addChild(this._mesh);
            material.name = this._mesh.material.name;
            this._mesh.material = material;
            this._pFinalizeAsset(material);
            this._pFinalizeAsset(this._mesh.geometry);
            this._pFinalizeAsset(this._mesh);
        }
        this.materialFinal = true;
    };
    /**
     * @inheritDoc
     */
    MD2Parser.prototype._iResolveDependencyFailure = function (resourceDependency) {
        // apply system default
        if (this.materialMode < 2) {
            this._mesh.material = DefaultMaterialManager.getDefaultMaterial();
        }
        else {
            this._mesh.material = new MethodMaterial(DefaultMaterialManager.getDefaultTexture());
            this._mesh.material.mode = MethodMaterialMode.MULTI_PASS;
        }
        //add to the content property
        this._pContent.addChild(this._mesh);
        this._pFinalizeAsset(this._mesh.geometry);
        this._pFinalizeAsset(this._mesh);
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
                // TODO: Create a mesh only when encountered (if it makes sense
                // for this file format) and return it using this._pFinalizeAsset()
                this._geometry = new Geometry();
                this._mesh = new Mesh(this._geometry, null);
                if (this.materialMode < 2) {
                    this._mesh.material = DefaultMaterialManager.getDefaultMaterial();
                }
                else {
                    this._mesh.material = new MethodMaterial(DefaultMaterialManager.getDefaultTexture());
                    this._mesh.material.mode = MethodMaterialMode.MULTI_PASS;
                }
                //_geometry.animation = new VertexAnimation(2, VertexAnimationMode.ABSOLUTE);
                //_animator = new VertexAnimator(VertexAnimationState(_mesh.animationState));
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
            else if ((this.geoCreated) && (this.materialFinal)) {
                return ParserBase.PARSING_DONE;
            }
            else if (!this.geoCreated) {
                this.geoCreated = true;
                //create default subgeometry
                this._geometry.addSubGeometry(this._firstSubGeom.clone());
                // Force name to be chosen by this._pFinalizeAsset()
                this._mesh.name = "";
                if (this.materialFinal) {
                    //add to the content property
                    this._pContent.addChild(this._mesh);
                    this._pFinalizeAsset(this._mesh.geometry);
                    this._pFinalizeAsset(this._mesh);
                }
                this._pPauseAndRetrieveDependencies();
            }
        }
        return ParserBase.MORE_TO_PARSE;
    };
    MD2Parser.prototype._pStartParsing = function (frameLimit) {
        _super.prototype._pStartParsing.call(this, frameLimit);
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer();
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
        var extIndex /*int*/;
        var slashIndex /*int*/;
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
                this._pAddDependency(name, new URLRequest(url));
        }
        if (this._materialNames.length > 0)
            this._mesh.material.name = this._materialNames[0];
        else
            this.materialFinal = true;
    };
    /**
     * Parses the uv data for the mesh.
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
        var a /*uint*/, b /*uint*/, c /*uint*/, ta /*uint*/, tb /*uint*/, tc /*uint*/;
        var i /*uint*/;
        this._vertIndices = new Array();
        this._uvIndices = new Array();
        this._indices = new Array();
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
     * @return The index of the final mesh corresponding to the original vertex and uv index. -1 if it doesn't exist yet.
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
     * Parses all the frame geometries.
     */
    MD2Parser.prototype.parseFrames = function () {
        var sx, sy, sz;
        var tx, ty, tz;
        var geometry;
        var subGeom;
        var vertLen = this._vertIndices.length;
        var fvertices;
        var tvertices;
        var i /*uint*/, j /*int*/, k /*uint*/;
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
            for (j = 0; j < this._numVertices; j++, this._byteData.position++)
                tvertices.push(sx * this._byteData.readUnsignedByte() + tx, sy * this._byteData.readUnsignedByte() + ty, sz * this._byteData.readUnsignedByte() + tz);
            k = 0;
            for (j = 0; j < vertLen; j++) {
                fvertices[k++] = tvertices[this._vertIndices[j] * 3];
                fvertices[k++] = tvertices[this._vertIndices[j] * 3 + 2];
                fvertices[k++] = tvertices[this._vertIndices[j] * 3 + 1];
            }
            subGeom = new TriangleSubGeometry(true);
            if (this._firstSubGeom == null)
                this._firstSubGeom = subGeom;
            geometry = new Geometry();
            geometry.addSubGeometry(subGeom);
            subGeom.updateIndices(this._indices);
            subGeom.updatePositions(fvertices);
            subGeom.updateUVs(this._finalUV);
            subGeom.vertexNormals;
            subGeom.vertexTangents;
            subGeom.autoDeriveNormals = false;
            subGeom.autoDeriveTangents = false;
            var clip = this._clipNodes[name];
            if (!clip) {
                // If another sequence was parsed before this one, starting
                // a new state means the previous one is complete and can
                // hence be finalized.
                if (prevClip) {
                    this._pFinalizeAsset(prevClip);
                    this._animationSet.addAnimation(prevClip);
                }
                clip = new VertexClipNode();
                clip.name = name;
                clip.stitchFinalFrame = true;
                this._clipNodes[name] = clip;
                prevClip = clip;
            }
            clip.addFrame(geometry, 1000 / MD2Parser.FPS);
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
})(ParserBase);
module.exports = MD2Parser;


},{"awayjs-core/lib/data/Geometry":undefined,"awayjs-core/lib/data/TriangleSubGeometry":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-display/lib/containers/DisplayObjectContainer":undefined,"awayjs-display/lib/entities/Mesh":undefined,"awayjs-display/lib/managers/DefaultMaterialManager":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/MethodMaterialMode":undefined,"awayjs-renderergl/lib/animators/VertexAnimationSet":undefined,"awayjs-renderergl/lib/animators/nodes/VertexClipNode":undefined}],"awayjs-parsers/lib/MD5AnimParser":[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Quaternion = require("awayjs-core/lib/geom/Quaternion");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var JointPose = require("awayjs-renderergl/lib/animators/data/JointPose");
var SkeletonPose = require("awayjs-renderergl/lib/animators/data/SkeletonPose");
var SkeletonClipNode = require("awayjs-renderergl/lib/animators/nodes/SkeletonClipNode");
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
        _super.call(this, URLLoaderDataFormat.TEXT);
        this._parseIndex = 0;
        this._line = 0;
        this._charLineIndex = 0;
        this._rotationQuat = new Quaternion();
        var t1 = new Quaternion();
        var t2 = new Quaternion();
        t1.fromAxisAngle(Vector3D.X_AXIS, -Math.PI * .5);
        t2.fromAxisAngle(Vector3D.Y_AXIS, -Math.PI * .5);
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
                this._clip = new SkeletonClipNode();
                this.translateClip();
                this._pFinalizeAsset(this._clip);
                return ParserBase.PARSING_DONE;
            }
        }
        return ParserBase.MORE_TO_PARSE;
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
        var flags /*int*/;
        var j /*int*/;
        var translate = new Vector3D();
        var orientation = new Quaternion();
        var components = frameData.components;
        var skelPose = new SkeletonPose();
        var jointPoses = skelPose.jointPoses;
        for (var i = 0; i < this._numJoints; ++i) {
            j = 0;
            pose = new JointPose();
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
        var frameIndex /*int*/;
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
        var vec = new Vector3D();
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
        var quat = new Quaternion();
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
})(ParserBase);
/**
 *
 */
var BaseFrameData = (function () {
    function BaseFrameData() {
    }
    return BaseFrameData;
})();
/**
 *
 */
var BoundsData = (function () {
    function BoundsData() {
    }
    return BoundsData;
})();
/**
 *
 */
var FrameData = (function () {
    function FrameData() {
    }
    return FrameData;
})();
/**
 *
 */
var HierarchyData = (function () {
    function HierarchyData() {
    }
    return HierarchyData;
})();
module.exports = MD5AnimParser;


},{"awayjs-core/lib/geom/Quaternion":undefined,"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-renderergl/lib/animators/data/JointPose":undefined,"awayjs-renderergl/lib/animators/data/SkeletonPose":undefined,"awayjs-renderergl/lib/animators/nodes/SkeletonClipNode":undefined}],"awayjs-parsers/lib/MD5MeshParser":[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Geometry = require("awayjs-core/lib/data/Geometry");
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var Quaternion = require("awayjs-core/lib/geom/Quaternion");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var SkeletonAnimationSet = require("awayjs-renderergl/lib/animators/SkeletonAnimationSet");
var Skeleton = require("awayjs-renderergl/lib/animators/data/Skeleton");
var SkeletonJoint = require("awayjs-renderergl/lib/animators/data/SkeletonJoint");
// todo: create animation system, parse skeleton
/**
 * MD5MeshParser provides a parser for the md5mesh data type, providing the geometry of the md5 format.
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
        _super.call(this, URLLoaderDataFormat.TEXT);
        this._parseIndex = 0;
        this._line = 0;
        this._charLineIndex = 0;
        this._rotationQuat = new Quaternion();
        this._rotationQuat.fromAxisAngle(Vector3D.X_AXIS, -Math.PI * .5);
        if (additionalRotationAxis) {
            var quat = new Quaternion();
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
        return extension == "md5mesh";
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
                this._animationSet = new SkeletonAnimationSet(this._maxJointCount);
                this._mesh = new Mesh(new Geometry(), null);
                this._geometry = this._mesh.geometry;
                for (var i = 0; i < this._meshData.length; ++i)
                    this._geometry.addSubGeometry(this.translateGeom(this._meshData[i].vertexData, this._meshData[i].weightData, this._meshData[i].indices));
                //_geometry.animation = _animation;
                //					_mesh.animationController = _animationController;
                //add to the content property
                this._pContent.addChild(this._mesh);
                this._pFinalizeAsset(this._geometry);
                this._pFinalizeAsset(this._mesh);
                this._pFinalizeAsset(this._skeleton);
                this._pFinalizeAsset(this._animationSet);
                return ParserBase.PARSING_DONE;
            }
        }
        return ParserBase.MORE_TO_PARSE;
    };
    MD5MeshParser.prototype._pStartParsing = function (frameLimit) {
        _super.prototype._pStartParsing.call(this, frameLimit);
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer();
    };
    MD5MeshParser.prototype.calculateMaxJointCount = function () {
        this._maxJointCount = 0;
        var numMeshData = this._meshData.length;
        for (var i = 0; i < numMeshData; ++i) {
            var meshData = this._meshData[i];
            var vertexData = meshData.vertexData;
            var numVerts = vertexData.length;
            for (var j = 0; j < numVerts; ++j) {
                var zeroWeights = this.countZeroWeightJoints(vertexData[j], meshData.weightData);
                var totalJoints = vertexData[j].countWeight - zeroWeights;
                if (totalJoints > this._maxJointCount)
                    this._maxJointCount = totalJoints;
            }
        }
    };
    MD5MeshParser.prototype.countZeroWeightJoints = function (vertex, weights) {
        var start = vertex.startWeight;
        var end = vertex.startWeight + vertex.countWeight;
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
        this._skeleton = new Skeleton();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            joint = new SkeletonJoint();
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
     * Parses the mesh geometry.
     */
    MD5MeshParser.prototype.parseMesh = function () {
        var token = this.getNextToken();
        var ch;
        var vertexData;
        var weights;
        var indices /*uint*/;
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
                    vertexData = new Array(this.getNextInt());
                    break;
                case MD5MeshParser.MESH_NUM_TRIS_TOKEN:
                    indices = new Array(this.getNextInt() * 3);
                    break;
                case MD5MeshParser.MESH_NUM_WEIGHTS_TOKEN:
                    weights = new Array(this.getNextInt());
                    break;
                case MD5MeshParser.MESH_VERT_TOKEN:
                    this.parseVertex(vertexData);
                    break;
                case MD5MeshParser.MESH_TRI_TOKEN:
                    this.parseTri(indices);
                    break;
                case MD5MeshParser.MESH_WEIGHT_TOKEN:
                    this.parseJoint(weights);
                    break;
            }
        }
        if (this._meshData == null)
            this._meshData = new Array();
        var i = this._meshData.length;
        this._meshData[i] = new MeshData();
        this._meshData[i].vertexData = vertexData;
        this._meshData[i].weightData = weights;
        this._meshData[i].indices = indices;
    };
    /**
     * Converts the mesh data to a SkinnedSub instance.
     * @param vertexData The mesh's vertices.
     * @param weights The joint weights per vertex.
     * @param indices The indices for the faces.
     * @return A SubGeometry instance containing all geometrical data for the current mesh.
     */
    MD5MeshParser.prototype.translateGeom = function (vertexData, weights, indices /*uint*/) {
        var len = vertexData.length;
        var v1 /*int*/, v2 /*int*/, v3 /*int*/;
        var vertex;
        var weight;
        var bindPose;
        var pos;
        var subGeom = new TriangleSubGeometry(true);
        var uvs = new Array(len * 2);
        var vertices = new Array(len * 3);
        var jointIndices = new Array(len * this._maxJointCount);
        var jointWeights = new Array(len * this._maxJointCount);
        var l = 0;
        var nonZeroWeights /*int*/;
        for (var i = 0; i < len; ++i) {
            vertex = vertexData[i];
            v1 = vertex.index * 3;
            v2 = v1 + 1;
            v3 = v1 + 2;
            vertices[v1] = vertices[v2] = vertices[v3] = 0;
            nonZeroWeights = 0;
            for (var j = 0; j < vertex.countWeight; ++j) {
                weight = weights[vertex.startWeight + j];
                if (weight.bias > 0) {
                    bindPose = this._bindPoses[weight.joint];
                    pos = bindPose.transformVector(weight.pos);
                    vertices[v1] += pos.x * weight.bias;
                    vertices[v2] += pos.y * weight.bias;
                    vertices[v3] += pos.z * weight.bias;
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
            v1 = vertex.index << 1;
            uvs[v1++] = vertex.s;
            uvs[v1] = vertex.t;
        }
        subGeom.jointsPerVertex = this._maxJointCount;
        subGeom.updateIndices(indices);
        subGeom.updatePositions(vertices);
        subGeom.updateUVs(uvs);
        subGeom.updateJointIndices(jointIndices);
        subGeom.updateJointWeights(jointWeights);
        // cause explicit updates
        subGeom.vertexNormals;
        subGeom.vertexTangents;
        // turn auto updates off because they may be animated and set explicitly
        subGeom.autoDeriveTangents = false;
        subGeom.autoDeriveNormals = false;
        return subGeom;
    };
    /**
     * Retrieve the next triplet of vertex indices that form a face.
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
     * Reads the data for a single vertex.
     * @param vertexData The list to contain the vertex data.
     */
    MD5MeshParser.prototype.parseVertex = function (vertexData) {
        var vertex = new VertexData();
        vertex.index = this.getNextInt();
        this.parseUV(vertex);
        vertex.startWeight = this.getNextInt();
        vertex.countWeight = this.getNextInt();
        //			if (vertex.countWeight > _maxJointCount) _maxJointCount = vertex.countWeight;
        vertexData[vertex.index] = vertex;
    };
    /**
     * Reads the next uv coordinate.
     * @param vertexData The vertexData to contain the UV coordinates.
     */
    MD5MeshParser.prototype.parseUV = function (vertexData) {
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        vertexData.s = this.getNextNumber();
        vertexData.t = this.getNextNumber();
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
        var vec = new Vector3D();
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
        var quat = new Quaternion();
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
        var rotQuat = new Quaternion();
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
})(ParserBase);
var VertexData = (function () {
    function VertexData() {
    }
    return VertexData;
})();
var JointData = (function () {
    function JointData() {
    }
    return JointData;
})();
var MeshData = (function () {
    function MeshData() {
    }
    return MeshData;
})();
module.exports = MD5MeshParser;


},{"awayjs-core/lib/data/Geometry":undefined,"awayjs-core/lib/data/TriangleSubGeometry":undefined,"awayjs-core/lib/geom/Quaternion":undefined,"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-display/lib/containers/DisplayObjectContainer":undefined,"awayjs-display/lib/entities/Mesh":undefined,"awayjs-renderergl/lib/animators/SkeletonAnimationSet":undefined,"awayjs-renderergl/lib/animators/data/Skeleton":undefined,"awayjs-renderergl/lib/animators/data/SkeletonJoint":undefined}],"awayjs-parsers/lib/Max3DSParser":[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Geometry = require("awayjs-core/lib/data/Geometry");
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var Matrix3D = require("awayjs-core/lib/geom/Matrix3D");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var TextureBase = require("awayjs-core/lib/textures/TextureBase");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var DefaultMaterialManager = require("awayjs-display/lib/managers/DefaultMaterialManager");
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodMaterialMode = require("awayjs-methodmaterials/lib/MethodMaterialMode");
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
        _super.call(this, URLLoaderDataFormat.ARRAY_BUFFER);
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
        ba = ParserUtils.toByteArray(data);
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
            if (asset.isAsset(TextureBase)) {
                var tex;
                tex = this._textures[resourceDependency.id];
                tex.texture = asset;
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
        while (this._pHasTime()) {
            // If we are currently working on an object, and the most recent chunk was
            // the last one in that object, finalize the current object.
            if (this._cur_mat && this._byteData.position >= this._cur_mat_end)
                this.finalizeCurrentMaterial();
            else if (this._cur_obj && this._byteData.position >= this._cur_obj_end) {
                // Can't finalize at this point, because we have to wait until the full
                // animation section has been parsed for any potential pivot definitions
                this._unfinalized_objects[this._cur_obj.name] = this._cur_obj;
                this._cur_obj_end = Number.MAX_VALUE;
                this._cur_obj = null;
            }
            if (this._byteData.getBytesAvailable() > 0) {
                var cid /*uint*/;
                var len /*uint*/;
                var end /*uint*/;
                cid = this._byteData.readUnsignedShort();
                len = this._byteData.readUnsignedInt();
                end = this._byteData.position + (len - 6);
                switch (cid) {
                    case 0x4D4D:
                    case 0x3D3D:
                    case 0xB000:
                        continue;
                        break;
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
                        this._cur_obj.type = Mesh.assetType;
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
            return ParserBase.MORE_TO_PARSE;
        }
        else {
            var name;
            for (name in this._unfinalized_objects) {
                var obj;
                obj = this.constructObject(this._unfinalized_objects[name]);
                if (obj) {
                    //add to the content property
                    this._pContent.addChild(obj);
                    this._pFinalizeAsset(obj, name);
                }
            }
            return ParserBase.PARSING_DONE;
        }
    };
    Max3DSParser.prototype._pStartParsing = function (frameLimit) {
        _super.prototype._pStartParsing.call(this, frameLimit);
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer();
    };
    Max3DSParser.prototype.parseMaterial = function () {
        var mat;
        mat = new MaterialVO();
        while (this._byteData.position < this._cur_mat_end) {
            var cid /*uint*/;
            var len /*uint*/;
            var end /*uint*/;
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
            var cid /*uint*/;
            var len /*uint*/;
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
        this._pAddDependency(tex.url, new URLRequest(tex.url));
        return tex;
    };
    Max3DSParser.prototype.parseVertexList = function () {
        var i /*uint*/;
        var len /*uint*/;
        var count /*uint*/;
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
        var i /*uint*/;
        var len /*uint*/;
        var count /*uint*/;
        count = this._byteData.readUnsignedShort();
        this._cur_obj.indices = new Array(count * 3);
        i = 0;
        len = this._cur_obj.indices.length;
        while (i < len) {
            var i0 /*uint*/, i1 /*uint*/, i2 /*uint*/;
            i0 = this._byteData.readUnsignedShort();
            i1 = this._byteData.readUnsignedShort();
            i2 = this._byteData.readUnsignedShort();
            this._cur_obj.indices[i++] = i0;
            this._cur_obj.indices[i++] = i2;
            this._cur_obj.indices[i++] = i1;
            // Skip "face info", irrelevant in Away3D
            this._byteData.position += 2;
        }
        this._cur_obj.smoothingGroups = new Array(count);
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
        var i /*uint*/;
        var len /*uint*/;
        var count /*uint*/;
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
        var count /*uint*/;
        var i /*uint*/;
        var faces /*uint*/;
        mat = this.readNulTermstring();
        count = this._byteData.readUnsignedShort();
        faces = new Array(count);
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
        var hier /*uint*/;
        // Pivot defaults to origin
        pivot = new Vector3D;
        while (this._byteData.position < end) {
            var cid /*uint*/;
            var len /*uint*/;
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
        if (obj.type == Mesh.assetType) {
            var i /*uint*/;
            var sub;
            var geom;
            var mat;
            var mesh;
            var mtx;
            var vertices;
            var faces;
            if (obj.materials.length > 1)
                console.log("The Away3D 3DS parser does not support multiple materials per mesh at this point.");
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
            obj.indices = new Array(faces.length * 3);
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
            geom = new Geometry();
            // Construct sub-geometries (potentially splitting buffers)
            // and add them to geometry.
            sub = new TriangleSubGeometry(true);
            sub.updateIndices(obj.indices);
            sub.updatePositions(obj.verts);
            sub.updateUVs(obj.uvs);
            geom.addSubGeometry(sub);
            if (obj.materials.length > 0) {
                var mname;
                mname = obj.materials[0];
                mat = this._materials[mname].material;
            }
            // Apply pivot translation to geometry if a pivot was
            // found while parsing the keyframe chunk earlier.
            if (pivot) {
                if (obj.transform) {
                    // If a transform was found while parsing the
                    // object chunk, use it to find the local pivot vector
                    var dat = obj.transform.concat();
                    dat[12] = 0;
                    dat[13] = 0;
                    dat[14] = 0;
                    mtx = new Matrix3D(dat);
                    pivot = mtx.transformVector(pivot);
                }
                pivot.scaleBy(-1);
                mtx = new Matrix3D();
                mtx.appendTranslation(pivot.x, pivot.y, pivot.z);
                geom.applyTransformation(mtx);
            }
            // Apply transformation to geometry if a transformation
            // was found while parsing the object chunk earlier.
            if (obj.transform) {
                mtx = new Matrix3D(obj.transform);
                mtx.invert();
                geom.applyTransformation(mtx);
            }
            // Final transform applied to geometry. Finalize the geometry,
            // which will no longer be modified after this point.
            this._pFinalizeAsset(geom, obj.name.concat('_geom'));
            // Build mesh and return it
            mesh = new Mesh(geom, mat);
            mesh.transform.matrix3D = new Matrix3D(obj.transform);
            return mesh;
        }
        // If reached, unknown
        return null;
    };
    Max3DSParser.prototype.prepareData = function (vertices, faces, obj) {
        // convert raw ObjectVO's data to structured VertexVO and FaceVO
        var i /*int*/;
        var j /*int*/;
        var k /*int*/;
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
        var i /*int*/;
        var j /*int*/;
        var k /*int*/;
        var l /*int*/;
        var len /*int*/;
        var numVerts = vertices.length;
        var numFaces = faces.length;
        // extract groups data for vertices
        var vGroups = new Array(numVerts) /*uint*/;
        for (i = 0; i < numVerts; i++)
            vGroups[i] = new Array();
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
        var vClones = new Array(numVerts) /*uint*/;
        for (i = 0; i < numVerts; i++) {
            if ((len = vGroups[i].length) < 1)
                continue;
            var clones = new Array(len) /*uint*/;
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
        if (this._cur_mat.colorMap)
            mat = new MethodMaterial(this._cur_mat.colorMap.texture || DefaultMaterialManager.getDefaultTexture());
        else
            mat = new MethodMaterial(this._cur_mat.ambientColor);
        mat.diffuseColor = this._cur_mat.diffuseColor;
        mat.specularColor = this._cur_mat.specularColor;
        if (this.materialMode >= 2)
            mat.mode = MethodMaterialMode.MULTI_PASS;
        mat.bothSides = this._cur_mat.twoSided;
        this._pFinalizeAsset(mat, this._cur_mat.name);
        this._materials[this._cur_mat.name] = this._cur_mat;
        this._cur_mat.material = mat;
        this._cur_mat = null;
    };
    Max3DSParser.prototype.readNulTermstring = function () {
        var chr /*int*/;
        var str = "";
        while ((chr = this._byteData.readUnsignedByte()) > 0)
            str += String.fromCharCode(chr);
        return str;
    };
    Max3DSParser.prototype.readTransform = function () {
        var data;
        data = new Array(16);
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
        var cid /*int*/;
        var len /*int*/;
        var r /*int*/, g /*int*/, b /*int*/;
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
})(ParserBase);
/**
 *
 */
var FaceVO = (function () {
    function FaceVO() {
    }
    return FaceVO;
})();
/**
 *
 */
var MaterialVO = (function () {
    function MaterialVO() {
    }
    return MaterialVO;
})();
/**
 *
 */
var ObjectVO = (function () {
    function ObjectVO() {
    }
    return ObjectVO;
})();
/**
 *
 */
var TextureVO = (function () {
    function TextureVO() {
    }
    return TextureVO;
})();
/**
 *
 */
var VertexVO = (function () {
    function VertexVO() {
    }
    return VertexVO;
})();
module.exports = Max3DSParser;


},{"awayjs-core/lib/data/Geometry":undefined,"awayjs-core/lib/data/TriangleSubGeometry":undefined,"awayjs-core/lib/geom/Matrix3D":undefined,"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-core/lib/textures/TextureBase":undefined,"awayjs-display/lib/containers/DisplayObjectContainer":undefined,"awayjs-display/lib/entities/Mesh":undefined,"awayjs-display/lib/managers/DefaultMaterialManager":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/MethodMaterialMode":undefined}],"awayjs-parsers/lib/OBJParser":[function(require,module,exports){
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var Geometry = require("awayjs-core/lib/data/Geometry");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var TextureBase = require("awayjs-core/lib/textures/TextureBase");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var DefaultMaterialManager = require("awayjs-display/lib/managers/DefaultMaterialManager");
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodMaterialMode = require("awayjs-methodmaterials/lib/MethodMaterialMode");
var SpecularBasicMethod = require("awayjs-methodmaterials/lib/methods/SpecularBasicMethod");
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
        _super.call(this, URLLoaderDataFormat.TEXT);
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
        var content = ParserUtils.toString(data);
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
            var str = ParserUtils.toString(resourceDependency.data);
            this.parseMtl(str);
        }
        else {
            var asset;
            if (resourceDependency.assets.length != 1) {
                return;
            }
            asset = resourceDependency.assets[0];
            if (asset.isAsset(TextureBase)) {
                var lm = new LoadedMaterial();
                lm.materialID = resourceDependency.id;
                lm.texture = asset;
                this._materialLoaded.push(lm);
                if (this._meshes.length > 0) {
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
        if (this._meshes.length > 0)
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
            this._meshes = new Array();
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
                return ParserBase.MORE_TO_PARSE;
            }
        }
        if (this._charIndex >= this._stringLength) {
            if (this._mtlLib && !this._mtlLibLoaded) {
                return ParserBase.MORE_TO_PARSE;
            }
            this.translate();
            this.applyMaterials();
            return ParserBase.PARSING_DONE;
        }
        return ParserBase.MORE_TO_PARSE;
    };
    OBJParser.prototype._pStartParsing = function (frameLimit) {
        _super.prototype._pStartParsing.call(this, frameLimit);
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer();
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
            var geometry;
            var mesh;
            var m;
            var sm;
            var bmMaterial;
            for (var g = 0; g < numGroups; ++g) {
                geometry = new Geometry();
                materialGroups = groups[g].materialGroups;
                numMaterialGroups = materialGroups.length;
                for (m = 0; m < numMaterialGroups; ++m)
                    this.translateMaterialGroup(materialGroups[m], geometry);
                if (geometry.subGeometries.length == 0)
                    continue;
                // Finalize and force type-based name
                this._pFinalizeAsset(geometry); //, "");
                bmMaterial = new MethodMaterial(DefaultMaterialManager.getDefaultTexture());
                //check for multipass
                if (this.materialMode >= 2)
                    bmMaterial.mode = MethodMaterialMode.MULTI_PASS;
                mesh = new Mesh(geometry, bmMaterial);
                if (this._objects[objIndex].name) {
                    // this is a full independent object ('o' tag in OBJ file)
                    mesh.name = this._objects[objIndex].name;
                }
                else if (groups[g].name) {
                    // this is a group so the sub groups contain the actual mesh object names ('g' tag in OBJ file)
                    mesh.name = groups[g].name;
                }
                else {
                    // No name stored. Use empty string which will force it
                    // to be overridden by finalizeAsset() to type default.
                    mesh.name = "";
                }
                this._meshes.push(mesh);
                if (groups[g].materialID != "")
                    bmMaterial.name = groups[g].materialID + "~" + mesh.name;
                else
                    bmMaterial.name = this._lastMtlID + "~" + mesh.name;
                if (mesh.subMeshes.length > 1) {
                    for (sm = 1; sm < mesh.subMeshes.length; ++sm)
                        mesh.subMeshes[sm].material = bmMaterial;
                }
                //add to the content property
                this._pContent.addChild(mesh);
                this._pFinalizeAsset(mesh);
            }
        }
    };
    /**
     * Translates an obj's material group to a subgeometry.
     * @param materialGroup The material group data to convert.
     * @param geometry The Geometry to contain the converted SubGeometry.
     */
    OBJParser.prototype.translateMaterialGroup = function (materialGroup, geometry) {
        var faces = materialGroup.faces;
        var face;
        var numFaces = faces.length;
        var numVerts;
        var sub;
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
            sub = new TriangleSubGeometry(true);
            sub.autoDeriveNormals = normals.length ? false : true;
            sub.updateIndices(indices);
            sub.updatePositions(vertices);
            sub.updateVertexNormals(normals);
            sub.updateUVs(uvs);
            geometry.addSubGeometry(sub);
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
                    basicSpecularMethod = new SpecularBasicMethod();
                    basicSpecularMethod.specularColor = specularColor;
                    basicSpecularMethod.specular = specular;
                    var specularData = new SpecularData();
                    specularData.alpha = alpha;
                    specularData.basicSpecularMethod = basicSpecularMethod;
                    specularData.materialID = this._lastMtlID;
                    if (!this._materialSpecularData)
                        this._materialSpecularData = new Array();
                    this._materialSpecularData.push(specularData);
                }
                this._pAddDependency(this._lastMtlID, new URLRequest(mapkd));
            }
            else if (useColor && !isNaN(color)) {
                var lm = new LoadedMaterial();
                lm.materialID = this._lastMtlID;
                if (alpha == 0)
                    console.log("Warning: an alpha value of 0 was found in mtl color tag (Tr or d) ref:" + this._lastMtlID + ", mesh(es) using it will be invisible!");
                var cm;
                if (this.materialMode < 2) {
                    cm = new MethodMaterial(color);
                    var colorMat = cm;
                    colorMat.alpha = alpha;
                    colorMat.diffuseColor = diffuseColor;
                    colorMat.repeat = true;
                    if (useSpecular) {
                        colorMat.specularColor = specularColor;
                        colorMat.specular = specular;
                    }
                }
                else {
                    cm = new MethodMaterial(color);
                    cm.mode = MethodMaterialMode.MULTI_PASS;
                    var colorMultiMat = cm;
                    colorMultiMat.diffuseColor = diffuseColor;
                    colorMultiMat.repeat = true;
                    if (useSpecular) {
                        colorMultiMat.specularColor = specularColor;
                        colorMultiMat.specular = specular;
                    }
                }
                lm.cm = cm;
                this._materialLoaded.push(lm);
                if (this._meshes.length > 0)
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
        this._pAddDependency('mtl', new URLRequest(mtlurl), true);
        this._pPauseAndRetrieveDependencies(); //
    };
    OBJParser.prototype.applyMaterial = function (lm) {
        var decomposeID;
        var mesh;
        var tm;
        var j;
        var specularData;
        for (var i = 0; i < this._meshes.length; ++i) {
            mesh = this._meshes[i];
            decomposeID = mesh.material.name.split("~");
            if (decomposeID[0] == lm.materialID) {
                if (lm.cm) {
                    if (mesh.material)
                        mesh.material = null;
                    mesh.material = lm.cm;
                }
                else if (lm.texture) {
                    if (this.materialMode < 2) {
                        tm = mesh.material;
                        tm.texture = lm.texture;
                        tm.color = lm.color;
                        tm.alpha = lm.alpha;
                        tm.repeat = true;
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
                                    tm.color = specularData.color;
                                    tm.alpha = specularData.alpha;
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        tm = mesh.material;
                        tm.mode = MethodMaterialMode.MULTI_PASS;
                        tm.texture = lm.texture;
                        tm.color = lm.color;
                        tm.repeat = true;
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
                                    tm.color = specularData.color;
                                    break;
                                }
                            }
                        }
                    }
                }
                mesh.material.name = decomposeID[1] ? decomposeID[1] : decomposeID[0];
                this._meshes.splice(i, 1);
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
})(ParserBase);
var ObjectGroup = (function () {
    function ObjectGroup() {
        this.groups = new Array();
    }
    return ObjectGroup;
})();
var Group = (function () {
    function Group() {
        this.materialGroups = new Array();
    }
    return Group;
})();
var MaterialGroup = (function () {
    function MaterialGroup() {
        this.faces = new Array();
    }
    return MaterialGroup;
})();
var SpecularData = (function () {
    function SpecularData() {
        this.color = 0xFFFFFF;
        this.alpha = 1;
    }
    return SpecularData;
})();
var LoadedMaterial = (function () {
    function LoadedMaterial() {
        this.color = 0xFFFFFF;
        this.alpha = 1;
    }
    return LoadedMaterial;
})();
var FaceData = (function () {
    function FaceData() {
        this.vertexIndices = new Array();
        this.uvIndices = new Array();
        this.normalIndices = new Array();
        this.indexIds = new Array(); // used for real index lookups
    }
    return FaceData;
})();
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
})();
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
})();
module.exports = OBJParser;


},{"awayjs-core/lib/data/Geometry":undefined,"awayjs-core/lib/data/TriangleSubGeometry":undefined,"awayjs-core/lib/net/URLLoaderDataFormat":undefined,"awayjs-core/lib/net/URLRequest":undefined,"awayjs-core/lib/parsers/ParserBase":undefined,"awayjs-core/lib/parsers/ParserUtils":undefined,"awayjs-core/lib/textures/TextureBase":undefined,"awayjs-display/lib/containers/DisplayObjectContainer":undefined,"awayjs-display/lib/entities/Mesh":undefined,"awayjs-display/lib/managers/DefaultMaterialManager":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/MethodMaterialMode":undefined,"awayjs-methodmaterials/lib/methods/SpecularBasicMethod":undefined}],"awayjs-parsers/lib/Parsers":[function(require,module,exports){
var AssetLoader = require("awayjs-core/lib/library/AssetLoader");
var AWDParser = require("awayjs-parsers/lib/AWDParser");
var Max3DSParser = require("awayjs-parsers/lib/Max3DSParser");
var MD2Parser = require("awayjs-parsers/lib/MD2Parser");
var OBJParser = require("awayjs-parsers/lib/OBJParser");
/**
 *
 */
var Parsers = (function () {
    function Parsers() {
    }
    /**
     * Short-hand function to enable all bundled parsers for auto-detection. In practice,
     * this is the same as invoking enableParsers(Parsers.ALL_BUNDLED) on any of the
     * loader classes SingleFileLoader, AssetLoader, AssetLibrary or Loader3D.
     *
     * See notes about file size in the documentation for the ALL_BUNDLED constant.
     *
     * @see away.parsers.Parsers.ALL_BUNDLED
     */
    Parsers.enableAllBundled = function () {
        AssetLoader.enableParsers(Parsers.ALL_BUNDLED);
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
     * <li>Doom 3 MD5 meshes (.md5mesh)</li>
     * <li>Wavefront OBJ (.obj)</li>
     * <li>Collada (.dae)</li>
     * <li>Images (.jpg, .png)</li>
     * </ul>
     *
     * @see away.library.AssetLibrary.enableParser
     */
    Parsers.ALL_BUNDLED = Array(AWDParser, Max3DSParser, MD2Parser, OBJParser);
    return Parsers;
})();
module.exports = Parsers;


},{"awayjs-core/lib/library/AssetLoader":undefined,"awayjs-parsers/lib/AWDParser":"awayjs-parsers/lib/AWDParser","awayjs-parsers/lib/MD2Parser":"awayjs-parsers/lib/MD2Parser","awayjs-parsers/lib/Max3DSParser":"awayjs-parsers/lib/Max3DSParser","awayjs-parsers/lib/OBJParser":"awayjs-parsers/lib/OBJParser"}]},{},[])


//# sourceMappingURL=awayjs-parsers.js.map