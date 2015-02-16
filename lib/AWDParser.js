var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BlendMode = require("awayjs-core/lib/base/BlendMode");
var ColorTransform = require("awayjs-core/lib/geom/ColorTransform");
var Matrix3D = require("awayjs-core/lib/geom/Matrix3D");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var AssetType = require("awayjs-core/lib/library/AssetType");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var PerspectiveProjection = require("awayjs-core/lib/projections/PerspectiveProjection");
var OrthographicProjection = require("awayjs-core/lib/projections/OrthographicProjection");
var OrthographicOffCenterProjection = require("awayjs-core/lib/projections/OrthographicOffCenterProjection");
var BitmapCubeTexture = require("awayjs-core/lib/textures/BitmapCubeTexture");
var ImageCubeTexture = require("awayjs-core/lib/textures/ImageCubeTexture");
var ImageTexture = require("awayjs-core/lib/textures/ImageTexture");
var ByteArray = require("awayjs-core/lib/utils/ByteArray");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var Geometry = require("awayjs-display/lib/base/Geometry");
var TriangleSubGeometry = require("awayjs-display/lib/base/TriangleSubGeometry");
var DirectionalLight = require("awayjs-display/lib/entities/DirectionalLight");
var PointLight = require("awayjs-display/lib/entities/PointLight");
var Camera = require("awayjs-display/lib/entities/Camera");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var Skybox = require("awayjs-display/lib/entities/Skybox");
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
var DefaultMaterialManager = require("awayjs-renderergl/lib/managers/DefaultMaterialManager");
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
var EffectRimLightMethod = require("awayjs-methodmaterials/lib/methods/EffectRimLightMethod");
var NormalSimpleWaterMethod = require("awayjs-methodmaterials/lib/methods/NormalSimpleWaterMethod");
var ShadowDitheredMethod = require("awayjs-methodmaterials/lib/methods/ShadowDitheredMethod");
var ShadowFilteredMethod = require("awayjs-methodmaterials/lib/methods/ShadowFilteredMethod");
var SpecularFresnelMethod = require("awayjs-methodmaterials/lib/methods/SpecularFresnelMethod");
var ShadowHardMethod = require("awayjs-methodmaterials/lib/methods/ShadowHardMethod");
var SpecularAnisotropicMethod = require("awayjs-methodmaterials/lib/methods/SpecularAnisotropicMethod");
var SpecularCelMethod = require("awayjs-methodmaterials/lib/methods/SpecularCelMethod");
var SpecularPhongMethod = require("awayjs-methodmaterials/lib/methods/SpecularPhongMethod");
var ShadowNearMethod = require("awayjs-methodmaterials/lib/methods/ShadowNearMethod");
var ShadowSoftMethod = require("awayjs-methodmaterials/lib/methods/ShadowSoftMethod");
var AS2SceneGraphFactory = require("awayjs-player/lib/fl/factories/AS2SceneGraphFactory");
var TimelineKeyFrame = require("awayjs-player/lib/fl/timeline/TimelineKeyFrame");
var AddChildCommand = require("awayjs-player/lib/fl/timeline/commands/AddChildCommand");
var UpdatePropertyCommand = require("awayjs-player/lib/fl/timeline/commands/UpdatePropertyCommand");
var RemoveChildCommand = require("awayjs-player/lib/fl/timeline/commands/RemoveChildCommand");
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
        this._debug = false;
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
                case 44:
                    this.parseAduioBlock(this._cur_block_id, factory);
                    isParsed = true;
                    break;
                case 4:
                case 133:
                    this.parseTimeLine(this._cur_block_id, factory);
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
    AWDParser.prototype.parseAduioBlock = function (blockID, factory) {
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
            var numLabels = this._newBlockBytes.readUnsignedShort();
            for (j = 0; j < numLabels; j++) {
                var labelType = this._newBlockBytes.readUnsignedByte();
                var label = this.parseVarStr();
                // TODO: Handle labels differently
                //timeLineContainer.addFrameLabel(new FrameLabel(label, labelType, frame));
                traceString += "\n     label = " + label + " - labelType = " + labelType;
            }
            var numCommands = this._newBlockBytes.readUnsignedShort();
            var commandString = "\n      Commands " + numCommands;
            for (j = 0; j < numCommands; j++) {
                var objectID;
                var resourceID;
                var commandType = this._newBlockBytes.readUnsignedShort();
                switch (commandType) {
                    case 1:
                    case 2:
                    case 3:
                        objectID = this._newBlockBytes.readUnsignedInt();
                        var instanceID = 0; // must be set in folling conditions:
                        if (commandType == 1) {
                            // this commands looks for a object by awd-id and puts it into the timeline
                            resourceID = this._newBlockBytes.readUnsignedInt();
                            var newChild;
                            var numFills = this._newBlockBytes.readUnsignedShort();
                            commandString += "\n                number of fills = " + numFills;
                            // sound is added to timeline with dedicated Command, as it is no display-object (has no matrix etc)
                            // check if a Geometry can be found at the resourceID (AWD-ID)
                            var returnedArray = this.getAssetByID(resourceID, [AssetType.GEOMETRY]);
                            if (returnedArray[0]) {
                                var geom = returnedArray[1];
                                newChild = new Mesh(geom);
                                for (k = 0; k < numFills; k++) {
                                    var returnedArray2 = this.getAssetByID(this._newBlockBytes.readUnsignedInt(), [AssetType.MATERIAL]);
                                    if (returnedArray2[0] && newChild.subMeshes.length > k)
                                        newChild.subMeshes[k].material = returnedArray2[1];
                                }
                            }
                            else {
                                for (k = 0; k < numFills; k++)
                                    this._newBlockBytes.readUnsignedInt();
                                var returnedArray = this.getAssetByID(resourceID, [AssetType.TIMELINE]);
                                if (returnedArray[0])
                                    newChild = returnedArray[1];
                            }
                            instanceID = timeLineContainer.registerPotentialChild(newChild);
                            objectIDMap[objectID] = instanceID;
                            frame.addConstructCommand(new AddChildCommand(instanceID));
                            var instanceName = this.parseVarStr();
                            if (instanceName.length) {
                                frame.addConstructCommand(new UpdatePropertyCommand(instanceID, "name", instanceName));
                                commandString += "\n                instanceName = " + instanceName;
                            }
                            commandString += "\n      - Add new Resource = " + resourceID + " as object_id = " + objectID;
                        }
                        else if (commandType == 2) {
                            // this commands looks for a object by global string identifier and puts it into the timeline
                            // this is not used yet, but might be useful to do things like text-localization
                            var global_ressource_id = this.parseVarStr();
                        }
                        else {
                            instanceID = objectIDMap[objectID];
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
                        var props = this.parseProperties({ 1: this._matrixNrType, 2: this._matrixNrType, 3: this._propsNrType, 4: AWDParser.UINT8, 5: AWDParser.UINT8, 6: AWDParser.UINT32, 7: AWDParser.UINT32 });
                        var matrix_2d = props.get(1, []);
                        //var matrix_3d:Float32Array = props.get(2, []);
                        var colortransform = props.get(3, []);
                        var blendmode = props.get(4, -1);
                        var visibilty = props.get(5, -1);
                        var depth = props.get(6, -1);
                        var mask = props.get(7, -1);
                        // todo: handle filters
                        //matrix2d must provide 6 values to be valid
                        commandString += "\n                transformArray = " + matrix_2d.length;
                        if (matrix_2d.length == 6) {
                            var thisMatrix = new Matrix3D();
                            // todo set rotation + scale from matrix 2x3 to matrix3d
                            thisMatrix.position = new Vector3D(matrix_2d[4], matrix_2d[5], 0);
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
                        }
                        // mask must be positive to be valid. i think only add-commands will have this value.
                        // e.g. it should never be updated on already existing objects. (because depth of objects can change, i am not sure)
                        if (mask >= 0) {
                            commandString += "\n                Mask-up to obj-id: " + mask;
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
            //console.log(traceString);
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
            var is_2d_geom = false;
            var i;
            var sm_len, sm_end;
            var w_indices;
            var weights;
            sm_len = this._newBlockBytes.readUnsignedInt();
            sm_end = this._newBlockBytes.position + sm_len;
            var subProps = this.parseProperties({ 1: this._geoNrType, 2: this._geoNrType });
            while (this._newBlockBytes.position < sm_end) {
                var idx = 0;
                var uv_idx = 0;
                var n_idx = 0;
                var t_idx = 0;
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
                    var x, y, z;
                    var type;
                    var r, g, b, a;
                    var u, v;
                    var verts = new Array();
                    var uvs = new Array();
                    var normals = new Array();
                    var tangents = new Array();
                    while (this._newBlockBytes.position < str_end) {
                        x = this.readNumber(this._accuracyGeo);
                        y = this.readNumber(this._accuracyGeo);
                        z = -0.1 * subs_parsed;
                        //z = subs_parsed;
                        //z = (blockID*0.001) + subs_parsed
                        type = this.readNumber(this._accuracyGeo);
                        u = this.readNumber(this._accuracyGeo);
                        v = this.readNumber(this._accuracyGeo);
                        /* r = this.readNumber(this._accuracyGeo);
                         g = this.readNumber(this._accuracyGeo);
                         b = this.readNumber(this._accuracyGeo);
                         a = this.readNumber(this._accuracyGeo);*/
                        // while this is true, be parse the vertex-data, so it can be rendered as "normal" 3d-geometry
                        if (true) {
                            uvs[idx] = 0.0;
                            normals[idx] = 0.0;
                            verts[idx++] = x;
                            uvs[idx] = 0.0;
                            normals[idx] = 0.0;
                            verts[idx++] = y;
                            normals[idx] = 1.0;
                            verts[idx++] = z;
                        }
                        else {
                            // parse and set-data, so the 3d-geometry contains all data (but is no longer valid for normal 3d-render)
                            // away3d-vertexdata    |   awayJS-shape-data
                            // -----------------------------------------------------------------------
                            // pos.x                |   pos.x
                            // pos.y                |   pos.y
                            // pos.z                |   pos.z (for now we just use this as depth (set each subgeo to its own depth))
                            // normal.x             |   curve-type (0:notCurved, 1: convex, 2:concave)
                            // normal.y             |   alpha
                            // normal.z             |   not used
                            // uv.u                 |   curve.u
                            // uv.v                 |   curve.v
                            // tangent.x            |   red
                            // tangent.y            |   green
                            // tangent.z            |   blue
                            verts[idx++] = x;
                            //uv2[idx] = x;
                            verts[idx++] = y;
                            //uv2[idx] = y;
                            verts[idx++] = z;
                            uvs[uv_idx++] = u;
                            uvs[uv_idx++] = v;
                            normals[n_idx++] = type;
                            normals[n_idx++] = a;
                            normals[n_idx++] = 0;
                            // trace("r=" + r + " g=" + g + " b=" + b + " a=" + a);
                            tangents[t_idx++] = r;
                            tangents[t_idx++] = g;
                            tangents[t_idx++] = b;
                        }
                    }
                }
                else if (str_type == 11) {
                    this._newBlockBytes.position = str_end;
                }
                else {
                    this._newBlockBytes.position = str_end;
                }
            }
            this.parseUserAttributes(); // Ignore sub-mesh attributes for now
            var sub_geom;
            sub_geom = new TriangleSubGeometry(true);
            if (weights)
                sub_geom.jointsPerVertex = weights.length / (verts.length / 3);
            if (normals)
                sub_geom.autoDeriveNormals = false;
            if (uvs)
                sub_geom.autoDeriveUVs = false;
            sub_geom.autoDeriveNormals = false;
            // when rendering as "normal" 3d-geometry, we need to autoDerive tangents
            if (true) {
                sub_geom.autoDeriveTangents = true;
            }
            sub_geom.updateIndices(indices);
            sub_geom.updatePositions(verts);
            sub_geom.updateVertexNormals(normals);
            sub_geom.updateUVs(uvs);
            sub_geom.updateVertexTangents(null);
            sub_geom.updateJointWeights(weights);
            sub_geom.updateJointIndices(w_indices);
            var scaleU = subProps.get(1, 1);
            var scaleV = subProps.get(2, 1);
            var setSubUVs = false; //this should remain false atm, because in AwayBuilder the uv is only scaled by the geometry
            if ((geoScaleU != scaleU) || (geoScaleV != scaleV)) {
                setSubUVs = true;
                scaleU = geoScaleU / scaleU;
                scaleV = geoScaleV / scaleV;
            }
            if (setSubUVs)
                sub_geom.scaleUV(scaleU, scaleV);
            geom.addSubGeometry(sub_geom);
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
            console.log("Parsed a TriangleGeometry: Name = " + name + "| Id = " + sub_geom.id);
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
        var returnedArray = this.getAssetByID(par_id, [AssetType.CONTAINER, AssetType.LIGHT, AssetType.MESH]);
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
        var returnedArrayGeometry = this.getAssetByID(data_id, [AssetType.GEOMETRY]);
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
            returnedArrayMaterial = this.getAssetByID(mat_id, [AssetType.MATERIAL]);
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
        var returnedArrayParent = this.getAssetByID(par_id, [AssetType.CONTAINER, AssetType.LIGHT, AssetType.MESH]);
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
        var returnedArrayCubeTex = this.getAssetByID(cubeTexAddr, [AssetType.TEXTURE], "CubeTexture");
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
            var returnedArrayParent = this.getAssetByID(par_id, [AssetType.CONTAINER, AssetType.LIGHT, AssetType.MESH]);
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
        var returnedArrayParent = this.getAssetByID(par_id, [AssetType.CONTAINER, AssetType.LIGHT, AssetType.MESH]);
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
            returnedArrayLight = this.getAssetByID(lightID, [AssetType.LIGHT]);
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
            returnedArray = this.getAssetByID(tex_addr, [AssetType.TEXTURE]);
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
                    returnedArray = this.getAssetByID(tex_addr, [AssetType.TEXTURE]);
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
                returnedArray = this.getAssetByID(diffuseTex_addr, [AssetType.TEXTURE]);
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
                returnedArray = this.getAssetByID(normalTex_addr, [AssetType.TEXTURE]);
                if ((!returnedArray[0]) && (normalTex_addr != 0)) {
                    this._blocks[blockID].addError("Could not find the NormalTexture (ID = " + normalTex_addr + " ) for this MethodMaterial");
                }
                if (returnedArray[0]) {
                    normalTexture = returnedArray[1];
                    debugString += " | NormalTexture-Name = " + normalTexture.name;
                }
                var specTex_addr = props.get(21, 0);
                returnedArray = this.getAssetByID(specTex_addr, [AssetType.TEXTURE]);
                if ((!returnedArray[0]) && (specTex_addr != 0)) {
                    this._blocks[blockID].addError("Could not find the SpecularTexture (ID = " + specTex_addr + " ) for this MethodMaterial");
                }
                if (returnedArray[0]) {
                    specTexture = returnedArray[1];
                    debugString += " | SpecularTexture-Name = " + specTexture.name;
                }
                var lightPickerAddr = props.get(22, 0);
                returnedArray = this.getAssetByID(lightPickerAddr, [AssetType.LIGHT_PICKER]);
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
                            returnedArray = this.getAssetByID(targetID, [AssetType.EFFECTS_METHOD]);
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
                            returnedArray = this.getAssetByID(targetID, [AssetType.SHADOW_MAP_METHOD]);
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
                            returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE], "CubeTexture");
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
                            returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE]);
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
                            returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE]);
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
                            returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE]);
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
        else if (type == 3) {
            var color = props.get(1, 0xcccccc); //TODO temporarily swapped so that diffuse color goes to ambient
            debugString += color;
            mat = new MethodMaterial(color, props.get(10, 1.0));
            debugString += "alpha = " + props.get(10, 1.0) + " ";
            mat.bothSides = true;
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
        var returnedArray = this.getAssetByID(shadowLightID, [AssetType.LIGHT]);
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
        var returnedArray = this.getAssetByID(par_id, [AssetType.CONTAINER, AssetType.LIGHT, AssetType.MESH]);
        if (returnedArray[0]) {
            parentObject = returnedArray[1];
        }
        var numCommands = this._newBlockBytes.readShort();
        var typeCommand = this._newBlockBytes.readShort();
        var props = this.parseProperties({ 1: AWDParser.BADDR });
        switch (typeCommand) {
            case 1:
                var targetID = props.get(1, 0);
                var returnedArrayTarget = this.getAssetByID(targetID, [AssetType.LIGHT, AssetType.TEXTURE_PROJECTOR]); //for no only light is requested!!!!
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
                returnedArray = this.getAssetByID(targetID, [AssetType.SHADOW_MAP_METHOD]);
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
            returnedArray = this.getAssetByID(pose_addr, [AssetType.SKELETON_POSE]);
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
        var returnedArray = this.getAssetByID(geoAdress, [AssetType.GEOMETRY]);
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
            var returnedArray = this.getAssetByID(poseBlockAdress, [AssetType.ANIMATION_NODE]);
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
            returnedArray = this.getAssetByID(poseBlockAdress, [AssetType.ANIMATION_NODE]);
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
            returnedArray = this.getAssetByID(meshAdresses[i], [AssetType.MESH]);
            if (returnedArray[0])
                targetMeshes.push(returnedArray[1]);
        }
        returnedArray = this.getAssetByID(animSetBlockAdress, [AssetType.ANIMATION_SET]);
        if (!returnedArray[0]) {
            this._blocks[blockID].addError("Could not find the AnimationSet ( " + animSetBlockAdress + " ) for this Animator");
            ;
            return;
        }
        targetAnimationSet = returnedArray[1];
        var thisAnimator;
        if (type == 1) {
            returnedArray = this.getAssetByID(props.get(1, 0), [AssetType.SKELETON]);
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
                returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE], "CubeTexture");
                if (!returnedArray[0])
                    this._blocks[blockID].addError("Could not find the EnvMap (ID = " + targetID + " ) for this EnvMapMethod");
                effectMethodReturn = new EffectEnvMapMethod(returnedArray[1], props.get(101, 1));
                targetID = props.get(2, 0);
                if (targetID > 0) {
                    returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE]);
                    if (!returnedArray[0])
                        this._blocks[blockID].addError("Could not find the Mask-texture (ID = " + targetID + " ) for this EnvMapMethod");
                }
                break;
            case 404:
                targetID = props.get(1, 0);
                returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE]);
                if (!returnedArray[0])
                    this._blocks[blockID].addError("Could not find the LightMap (ID = " + targetID + " ) for this LightMapMethod");
                effectMethodReturn = new EffectLightMapMethod(returnedArray[1], this.blendModeDic[props.get(401, 10)]); //usesecondaryUV not set
                break;
            case 406:
                effectMethodReturn = new EffectRimLightMethod(props.get(601, 0xffffff), props.get(101, 0.4), props.get(101, 2)); //blendMode
                break;
            case 407:
                targetID = props.get(1, 0);
                returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE]);
                if (!returnedArray[0])
                    this._blocks[blockID].addError("Could not find the Alpha-texture (ID = " + targetID + " ) for this AlphaMaskMethod");
                effectMethodReturn = new EffectAlphaMaskMethod(returnedArray[1], props.get(701, false));
                break;
            case 410:
                targetID = props.get(1, 0);
                returnedArray = this.getAssetByID(targetID, [AssetType.TEXTURE], "CubeTexture");
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
                            if ((assetTypesToGet[typeCnt] == AssetType.TEXTURE) && (extraTypeInfo == "CubeTexture")) {
                                if (this._blocks[assetID].data instanceof ImageCubeTexture) {
                                    returnArray.push(true);
                                    returnArray.push(this._blocks[assetID].data);
                                    return returnArray;
                                }
                            }
                            if ((assetTypesToGet[typeCnt] == AssetType.TEXTURE) && (extraTypeInfo == "SingleTexture")) {
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
                        //if ((assetTypesToGet[typeCnt] == AssetType.GEOMETRY) && (IAsset(_blocks[assetID].data).assetType == AssetType.MESH)) {
                        if ((assetTypesToGet[typeCnt] == AssetType.GEOMETRY) && (iasset.assetType == AssetType.MESH)) {
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
            case (assetType == AssetType.TEXTURE):
                if (extraTypeInfo == "CubeTexture")
                    return this.getDefaultCubeTexture();
                if (extraTypeInfo == "SingleTexture")
                    return this.getDefaultTexture();
                break;
            case (assetType == AssetType.MATERIAL):
                return this.getDefaultMaterial();
                break;
            default:
                break;
        }
        return null;
    };
    AWDParser.prototype.getDefaultMaterial = function () {
        if (!this._defaultBitmapMaterial)
            this._defaultBitmapMaterial = DefaultMaterialManager.getDefaultMaterial();
        return this._defaultBitmapMaterial;
    };
    AWDParser.prototype.getDefaultTexture = function () {
        if (!this._defaultTexture)
            this._defaultTexture = DefaultMaterialManager.getDefaultTexture();
        return this._defaultTexture;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXIudHMiXSwibmFtZXMiOlsiQVdEUGFyc2VyIiwiQVdEUGFyc2VyLmNvbnN0cnVjdG9yIiwiQVdEUGFyc2VyLnN1cHBvcnRzVHlwZSIsIkFXRFBhcnNlci5zdXBwb3J0c0RhdGEiLCJBV0RQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5TmFtZSIsIkFXRFBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiQVdEUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiQVdEUGFyc2VyLmRpc3Bvc2UiLCJBV0RQYXJzZXIucGFyc2VOZXh0QmxvY2siLCJBV0RQYXJzZXIucGFyc2VBZHVpb0Jsb2NrIiwiQVdEUGFyc2VyLnBhcnNlVGltZUxpbmUiLCJBV0RQYXJzZXIucGFyc2VUcmlhbmdsZUdlb21ldHJpZUJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlUHJpbWl0dmVzIiwiQVdEUGFyc2VyLnBhcnNlQ29udGFpbmVyIiwiQVdEUGFyc2VyLnBhcnNlTWVzaEluc3RhbmNlIiwiQVdEUGFyc2VyLnBhcnNlU2t5Ym94SW5zdGFuY2UiLCJBV0RQYXJzZXIucGFyc2VMaWdodCIsIkFXRFBhcnNlci5wYXJzZUNhbWVyYSIsIkFXRFBhcnNlci5wYXJzZUxpZ2h0UGlja2VyIiwiQVdEUGFyc2VyLnBhcnNlTWF0ZXJpYWwiLCJBV0RQYXJzZXIucGFyc2VNYXRlcmlhbF92MSIsIkFXRFBhcnNlci5wYXJzZVRleHR1cmUiLCJBV0RQYXJzZXIucGFyc2VDdWJlVGV4dHVyZSIsIkFXRFBhcnNlci5wYXJzZVNoYXJlZE1ldGhvZEJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlU2hhZG93TWV0aG9kQmxvY2siLCJBV0RQYXJzZXIucGFyc2VDb21tYW5kIiwiQVdEUGFyc2VyLnBhcnNlTWV0YURhdGEiLCJBV0RQYXJzZXIucGFyc2VOYW1lU3BhY2UiLCJBV0RQYXJzZXIucGFyc2VTaGFkb3dNZXRob2RMaXN0IiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b24iLCJBV0RQYXJzZXIucGFyc2VTa2VsZXRvblBvc2UiLCJBV0RQYXJzZXIucGFyc2VTa2VsZXRvbkFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZU1lc2hQb3NlQW5pbWF0aW9uIiwiQVdEUGFyc2VyLnBhcnNlVmVydGV4QW5pbWF0aW9uU2V0IiwiQVdEUGFyc2VyLnBhcnNlQW5pbWF0b3JTZXQiLCJBV0RQYXJzZXIucGFyc2VTaGFyZWRNZXRob2RMaXN0IiwiQVdEUGFyc2VyLnBhcnNlVXNlckF0dHJpYnV0ZXMiLCJBV0RQYXJzZXIucGFyc2VQcm9wZXJ0aWVzIiwiQVdEUGFyc2VyLnBhcnNlQXR0clZhbHVlIiwiQVdEUGFyc2VyLnBhcnNlSGVhZGVyIiwiQVdEUGFyc2VyLmdldFVWRm9yVmVydGV4QW5pbWF0aW9uIiwiQVdEUGFyc2VyLnBhcnNlVmFyU3RyIiwiQVdEUGFyc2VyLmdldEFzc2V0QnlJRCIsIkFXRFBhcnNlci5nZXREZWZhdWx0QXNzZXQiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdE1hdGVyaWFsIiwiQVdEUGFyc2VyLmdldERlZmF1bHRUZXh0dXJlIiwiQVdEUGFyc2VyLmdldERlZmF1bHRDdWJlVGV4dHVyZSIsIkFXRFBhcnNlci5yZWFkTnVtYmVyIiwiQVdEUGFyc2VyLnBhcnNlTWF0cml4M0QiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXgzMlJhd0RhdGEiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXg0M1Jhd0RhdGEiLCJBV0RCbG9jayIsIkFXREJsb2NrLmNvbnN0cnVjdG9yIiwiQVdEQmxvY2suZGlzcG9zZSIsIkFXREJsb2NrLmFkZEVycm9yIiwiQVdEUHJvcGVydGllcyIsIkFXRFByb3BlcnRpZXMuY29uc3RydWN0b3IiLCJBV0RQcm9wZXJ0aWVzLnNldCIsIkFXRFByb3BlcnRpZXMuZ2V0IiwiQml0RmxhZ3MiLCJCaXRGbGFncy5jb25zdHJ1Y3RvciIsIkJpdEZsYWdz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QUtBLEVBQVVBLEVBQUVBLDhDQUE4Q0E7UUFDdkZBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUM3Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUMzQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7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QUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUNBLENBQUNBLENBQUNBO3dCQUVoTUEsSUFBSUEsU0FBU0EsR0FBZ0JBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO3dCQUM5Q0EsQUFDQUEsZ0RBRGdEQTs0QkFDNUNBLGNBQWNBLEdBQWdCQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTt3QkFDbkRBLElBQUlBLFNBQVNBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4Q0EsSUFBSUEsU0FBU0EsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3hDQSxJQUFJQSxLQUFLQSxHQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcENBLElBQUlBLElBQUlBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNuQ0EsQUFJQUEsdUJBSnVCQTt3QkFFdkJBLDRDQUE0Q0E7d0JBRTVDQSxhQUFhQSxJQUFJQSxxQ0FBcUNBLEdBQUdBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBO3dCQUMxRUEsRUFBRUEsQ0FBQ0Es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QWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO2dCQUNoREEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsQ0FBQ0E7Z0JBRWpEQSxJQUFJQSxDQUFRQSxFQUFFQSxDQUFRQSxFQUFFQSxDQUFRQSxDQUFDQTtnQkFFakNBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNoQkEsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO29CQUU5Q0EsT0FBT0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsRUFBRUEsQ0FBQ0E7d0JBRTVDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTt3QkFDdkNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO3dCQUN2Q0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7d0JBRXZDQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDakJBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNqQkEsS0FBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN2QkEsSUFBSUEsT0FBT0EsR0FBaUJBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO29CQUVoREEsT0FBT0EsSUFBSUEsQ0FBQ0EsY0FBY0Es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QSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0tBLEtBQUtBLENBQUNBO1lBRVZBLEtBQUtBLENBQUNBO2dCQUNGQSxNQUFNQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUNySEEsS0FBS0EsQ0FBQ0E7WUFFVkEsS0FBS0EsQ0FBQ0E7Z0JBQ0ZBLE1BQU1BLEdBQUdBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsdUNBQXVDQTtnQkFDbk1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNJQSxNQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDeERBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNJQSxNQUFPQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDM0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNJQSxNQUFPQSxDQUFDQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFFbERBLEtBQUtBLENBQUNBO1lBRVZBLEtBQUtBLENBQUNBO2dCQUNGQSxNQUFNQSxHQUFHQSxJQUFJQSxtQkFBbUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3SkEsS0FBS0EsQ0FBQ0E7WUFFVkEsS0FBS0EsQ0FBQ0E7Z0JBQ0ZBLE1BQU1BLEdBQUdBLElBQUlBLHNCQUFzQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNJQSxLQUFLQSxDQUFDQTtZQUVWQSxLQUFLQSxDQUFDQTtnQkFDRkEsTUFBTUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdklBLEtBQUtBLENBQUNBO1lBRVZBO2dCQUNJQSxNQUFNQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtnQkFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdDQUFnQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxLQUFLQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxH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LE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHVDQUF1Q0EsQ0FBQ0EsQ0FBQ0E7UUFDNUVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ0pBLEFBQ0FBLDZCQUQ2QkE7WUFDSEEsSUFBSUEsQ0FBQ0EsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDN0RBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3REQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNqQ0EsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLElBQUlBLENBQVFBLENBQUNBO1lBSWJBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUN6Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOUVBLENBQUNBO1FBQ0xBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JEQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEpBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLFFBQVFBLENBQVNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEVBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEVBQVdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RHQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMzQ0EsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFFeENBLElBQUlBLENBQUNBLGVBQWVBLENBQVVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxJ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QUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUN6V0EsSUFBSUEsZ0JBQWdCQSxHQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM5Q0EsSUFBSUEsVUFBVUEsR0FBVUEsaUJBQWlCQSxDQUFDQTtRQUMxQ0EsSUFBSUEsVUFBVUEsR0FBaUJBLENBQUNBLHVCQUF1QkEsRUFBRUEsWUFBWUEsRUFBRUEsa0JBQWtCQSxDQUFDQSxDQUFDQTtRQUMzRkEsSUFBSUEsaUJBQWlCQSxHQUFpQkEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSx5QkFBeUJBLEVBQUVBLDZCQUE2QkEsRUFBRUEscUJBQXFCQSxFQUFFQSxxQkFBcUJBLENBQUNBLENBQUNBO1FBRWxLQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsS0FBS0EsR0FBR0EsSUFBSUEsVUFBVUEsRUFBRUEsQ0FBQ0E7WUFF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QUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN4QkEsZUFBZUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hFQSxDQUFDQTtZQUNMQSxDQUFDQTtZQUVEQSxLQUFLQSxDQUFDQSxZQUFZQSxHQUFHQSxlQUFlQSxDQUFDQTtZQUNyQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDOUJBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRWRBLElBQUlBLG1CQUFtQkEsR0FBY0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFFdEhBLEVBQUVBLENBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0NBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xFQSxVQUFVQSxHQUE2QkEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUN4RUEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHdDQUF3Q0EsQ0FBQ0EsQ0FBQ0E7WUFDN0VBLENBQUNBO1FBQ0xBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ0pBLEFBQ0FBLDZCQUQ2QkE7WUFDSEEsSUFBSUEsQ0FBQ0EsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDOURBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFFM0JBLElBQUlBLENBQUNBLGVBQWVBLENBQVdBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBRTVDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUVuQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDWkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMEJBQTBCQSxHQUFHQSxJQUFJQSxHQUFHQSxhQUFhQSxHQUFHQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxtQkFBbUJBLEdBQUdBLFVBQVVBLEdBQUdBLHlCQUF5QkEsR0FBR0EsaUJBQWlCQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLENBQUNBO0lBRXBNQSxDQUFDQTtJQUVEbEIsZUFBZUE7SUFDUEEsK0JBQVdBLEdBQW5CQSxVQUFvQkEsT0FBY0E7UUFHOUJtQixJQUFJQSxNQUFNQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtRQUMxREEsSUFBSUEsR0FBR0EsR0FBWUEsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7UUFDeENBLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxVQUFVQSxHQUFVQSxpQkFBaUJBLENBQUNBO1FBQzFDQSxJQUFJQSxVQUF5QkEsQ0FBQ0E7UUFFOUJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsRUFBRUEsRUFBRUEsc0JBQXNCQTtRQUM5REEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsZ0NBQWdDQTtRQUVqRUEsSUFBSUEsY0FBY0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDNURBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUU3SUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckJBLEtBQUtBLElBQUlBO2dCQUNMQSxVQUFVQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzREEsS0FBS0EsQ0FBQ0E7WUFDVkEsS0FBS0EsSUFBSUE7Z0JBQ0xBLFVBQVVBLEdBQUdBLElBQUlBLHNCQUFzQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxLQUFLQSxDQUFDQTtZQUNWQSxLQUFLQSxJQUFJQTtnQkFDTEEsVUFBVUEsR0FBR0EsSUFBSUEsK0JBQStCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdklBLEtBQUtBLENBQUNBO1lBQ1ZBO2dCQUNJQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsTUFBTUEsQ0FBQ0E7UUFDZkEsQ0FBQ0E7UUFFREEsSUFBSUEsTUFBTUEsR0FBVUEsSUFBSUEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDM0NBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1FBRWhDQSxJQUFJQSxtQkFBbUJBLEdBQWNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUFBO1FBRXRIQSxFQUFFQSxDQUFDQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXpCQSxJQUFJQSxJQUFJQSxHQUFtREEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFdEJBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBRTNCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EseUNBQXlDQSxDQUFDQSxDQUFDQTtRQUM5RUEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsQUFDQUEsNkJBRDZCQTtZQUNIQSxJQUFJQSxDQUFDQSxTQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMvREEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkJBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1FBQ3BIQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvRUEsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUUxQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFbkNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BLENBQUFBO1FBRW5DQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNkQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwyQkFBMkJBLEdBQUdBLElBQUlBLEdBQUdBLHVCQUF1QkEsR0FBR0EsVUFBVUEsR0FBR0EsbUJBQW1CQSxHQUFHQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUM5SEEsQ0FBQ0E7SUFFTEEsQ0FBQ0E7SUFFRG5CLGVBQWVBO0lBQ1BBLG9DQUFnQkEsR0FBeEJBLFVBQXlCQSxPQUFjQTtRQUVuQ29CLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxTQUFTQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQy9EQSxJQUFJQSxXQUFXQSxHQUFvQkEsSUFBSUEsS0FBS0EsRUFBYUEsQ0FBQ0E7UUFDMURBLElBQUlBLENBQUNBLEdBQVVBLENBQUNBLENBQUNBO1FBQ2pCQSxJQUFJQSxPQUFPQSxHQUFVQSxDQUFDQSxDQUFDQTtRQUV2QkEsSUFBSUEsa0JBQTZCQSxDQUFDQTtRQUNsQ0EsSUFBSUEsZ0JBQWdCQSxHQUFpQkEsSUFBSUEsS0FBS0EsRUFBVUEsQ0FBQ0E7UUFFekRBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQzdCQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtZQUNoREEsa0JBQWtCQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFBQTtZQUVsRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeEJBLFdBQVdBLENBQUNBLElBQUlBLENBQWFBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BEQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQWVBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0EsQ0FBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFckVBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNKQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSw0QkFBNEJBLEdBQUdBLENBQUNBLEdBQUdBLFNBQVNBLEdBQUdBLE9BQU9BLEdBQUdBLHlCQUF5QkEsQ0FBQ0EsQ0FBQ0E7WUFDdkhBLENBQUNBO1FBQ0xBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzFCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSw4REFBOERBLENBQUNBLENBQUNBO1lBQy9GQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1lBQzNCQSxNQUFNQSxFQUFFQSxnREFBZ0RBO1FBQzVEQSxDQUFDQSxHQURVQTtRQUdYQSxJQUFJQSxTQUFTQSxHQUFtQkEsSUFBSUEsaUJBQWlCQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUNuRUEsU0FBU0EsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFFdEJBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLGVBQWVBLENBQVVBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBRS9DQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFBQTtRQUN0Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDZEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esc0NBQXNDQSxHQUFHQSxJQUFJQSxHQUFHQSxxQkFBcUJBLEdBQUdBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDckhBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURwQixlQUFlQTtJQUNQQSxpQ0FBYUEsR0FBckJBLFVBQXNCQSxPQUFjQTtRQUVoQ3FCLEFBRUFBLGlCQUZpQkE7UUFDakJBLDRCQUE0QkE7WUFDeEJBLElBQVdBLENBQUNBO1FBQ2hCQSxJQUFJQSxJQUFXQSxDQUFDQTtRQUNoQkEsSUFBSUEsS0FBbUJBLENBQUNBO1FBQ3hCQSxJQUFJQSxHQUFrQkEsQ0FBQ0E7UUFDdkJBLElBQUlBLFVBQWlCQSxDQUFDQTtRQUN0QkEsSUFBSUEsUUFBZ0JBLENBQUNBO1FBQ3JCQSxJQUFJQSxXQUFrQkEsQ0FBQ0E7UUFDdkJBLElBQUlBLGNBQXFCQSxDQUFDQTtRQUMxQkEsSUFBSUEsYUFBd0JBLENBQUNBO1FBRTdCQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUMxQkEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUM5Q0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUVyREEsQUFFQUEscUNBRnFDQTtRQUNyQ0Esc0ZBQXNGQTtRQUN0RkEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFeEpBLGNBQWNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ25CQSxPQUFPQSxjQUFjQSxHQUFHQSxXQUFXQSxFQUFFQSxDQUFDQTtZQUNsQ0EsSUFBSUEsV0FBa0JBLENBQUNBO1lBRXZCQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1lBQ3REQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUMzQkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtZQUMzQkEsY0FBY0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBQ0RBLElBQUlBLFdBQVdBLEdBQVVBLEVBQUVBLENBQUNBO1FBQzVCQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQ3hDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNiQSxXQUFXQSxJQUFJQSw4Q0FBOENBLEdBQUdBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBO1lBQzlFQSxJQUFJQSxLQUFZQSxDQUFDQTtZQUNqQkEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4QkEsR0FBR0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeERBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNKQSxHQUFHQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDaENBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDN0NBLENBQUNBO1FBQ0xBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxJQUFJQSxRQUFRQSxHQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUV0Q0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFakVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsMENBQTBDQSxHQUFHQSxRQUFRQSxHQUFHQSxzQkFBc0JBLENBQUNBLENBQUNBO1lBRW5IQSxHQUFHQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFpQkEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFM0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4QkEsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pDQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDL0JBLFdBQVdBLElBQUlBLCtDQUErQ0EsR0FBR0EsSUFBSUEsR0FBR0EscUJBQXFCQSxHQUFHQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUM3R0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7Z0JBQ3pDQSxXQUFXQSxJQUFJQSw4Q0FBOENBLEdBQUdBLElBQUlBLEdBQUdBLHFCQUFxQkEsR0FBR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDNUdBLENBQUNBO1FBQ0xBLENBQUNBO1FBRURBLEdBQUdBLENBQUNBLEtBQUtBLEdBQUdBLFVBQVVBLENBQUNBO1FBQ3ZCQSxHQUFHQSxDQUFDQSxjQUFjQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN4Q0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLElBQUlBLENBQUNBLGVBQWVBLENBQVVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUVqQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDZEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFFN0JBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURyQix1QkFBdUJBO0lBQ2ZBLG9DQUFnQkEsR0FBeEJBLFVBQXlCQSxPQUFjQTtRQUVuQ3NCLElBQUlBLEdBQWtCQSxDQUFDQTtRQUN2QkEsSUFBSUEsYUFBMkJBLENBQUNBO1FBQ2hDQSxJQUFJQSxXQUF5QkEsQ0FBQ0E7UUFDOUJBLElBQUlBLGFBQXdCQSxDQUFDQTtRQUU3QkEsSUFBSUEsSUFBSUEsR0FBVUEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDckNBLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFDekRBLElBQUlBLFdBQVdBLEdBQVVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFDaEVBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUNuZEEsSUFBSUEsV0FBV0EsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLFdBQVdBLEdBQVVBLGtCQUFrQkEsQ0FBQ0E7UUFFNUNBLEVBQUVBLENBQUNBLENBQUNB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LENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFFekRBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRWhEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUNyQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRTlCQSxBQUNBQSxXQURXQTtZQUNYQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxJQUFJQSxHQUFVQSxDQUFDQTtnQkFDZkEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBRWpEQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUMxR0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBRUpBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO2dCQUNqREEsSUFBSUEsSUFBY0Es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QUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUVqS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDZEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5RUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMxRkEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFRDVCLGFBQWFBO0lBQ0xBLGtDQUFjQSxHQUF0QkEsVUFBdUJBLE9BQWNBO1FBRWpDNkIsSUFBSUEsRUFBRUEsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUN2REEsSUFBSUEsZUFBZUEsR0FBVUEs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NEJBQTRCQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUN6REEsQ0FBQ0E7SUFFRHBDLGtEQUFrREE7SUFDMUNBLHlDQUFxQkEsR0FBN0JBLFVBQThCQSxPQUFjQTtRQUd4Q3FDLElBQUlBLFVBQVVBLEdBQVVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7UUFDaEVBLElBQUlBLGtCQUFtQ0EsQ0FBQ0E7UUFFeENBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFH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V0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0NBQ3ZCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDN0NBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO2dDQUN2QkEsQ0FBQ0E7NEJBQ0xBLENBQUNBOzRCQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxJQUFJQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDeEZBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLFlBQVlBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO29DQUNyREEsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0NBQ3ZCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDN0NBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO2dDQUN2QkEsQ0FBQ0E7NEJBQ0xBLENBQUNBOzRCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDSkEsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NBQ3ZCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDN0NBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBOzRCQUV2QkEsQ0FBQ0E7d0JBQ0xBLENBQUNBO3dCQUNEQSxBQUNBQSx3SEFEd0hBO3dCQUN4SEEsRUFBRUEsQ0FBQ0Es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QUNBO1FBQ2pEQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUFFT25ELHdDQUFvQkEsR0FBNUJBO1FBRUlvRCxJQUFJQSxPQUFPQSxHQUFpQkEsSUFBSUEsS0FBS0EsQ0FBU0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFFbERBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ2pCQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNqQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDbEJBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3BEQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBRWxCQSxBQUVBQSwwRUFGMEVBO1FBRTFFQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FB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ZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLElBQUlBLENBQUNBO0lBQ3JCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLEtBQUtBLENBQUNBO0lBQ3RCQSxlQUFNQSxHQUFVQSxLQUFLQSxDQUFDQTtJQU14Q0EsZUFBQ0E7QUFBREEsQ0F2QkEsQUF1QkNBLElBQUE7QUFoRkQsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6IkFXRFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQml0bWFwRGF0YVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9iYXNlL0JpdG1hcERhdGFcIik7XHJcbmltcG9ydCBCbGVuZE1vZGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvYmFzZS9CbGVuZE1vZGVcIik7XHJcbmltcG9ydCBDb2xvclRyYW5zZm9ybVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9Db2xvclRyYW5zZm9ybVwiKTtcclxuaW1wb3J0IE1hdHJpeDNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9NYXRyaXgzRFwiKTtcclxuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcclxuaW1wb3J0IFVSTExvYWRlckRhdGFGb3JtYXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyRGF0YUZvcm1hdFwiKTtcclxuaW1wb3J0IFVSTFJlcXVlc3RcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTFJlcXVlc3RcIik7XHJcbmltcG9ydCBBc3NldFR5cGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldFR5cGVcIik7XHJcbmltcG9ydCBJQXNzZXRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0lBc3NldFwiKTtcclxuaW1wb3J0IFBhcnNlckJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJCYXNlXCIpO1xyXG5pbXBvcnQgUGFyc2VyVXRpbHNcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJVdGlsc1wiKTtcclxuaW1wb3J0IFJlc291cmNlRGVwZW5kZW5jeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUmVzb3VyY2VEZXBlbmRlbmN5XCIpO1xyXG5pbXBvcnQgUHJvamVjdGlvbkJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL1Byb2plY3Rpb25CYXNlXCIpO1xyXG5pbXBvcnQgUGVyc3BlY3RpdmVQcm9qZWN0aW9uXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL1BlcnNwZWN0aXZlUHJvamVjdGlvblwiKTtcclxuaW1wb3J0IE9ydGhvZ3JhcGhpY1Byb2plY3Rpb25cdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvT3J0aG9ncmFwaGljUHJvamVjdGlvblwiKTtcclxuaW1wb3J0IE9ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb25cdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wcm9qZWN0aW9ucy9PcnRob2dyYXBoaWNPZmZDZW50ZXJQcm9qZWN0aW9uXCIpO1xyXG5pbXBvcnQgQml0bWFwQ3ViZVRleHR1cmVcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9CaXRtYXBDdWJlVGV4dHVyZVwiKTtcclxuaW1wb3J0IEJpdG1hcFRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0JpdG1hcFRleHR1cmVcIik7XHJcbmltcG9ydCBDdWJlVGV4dHVyZUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0N1YmVUZXh0dXJlQmFzZVwiKTtcclxuaW1wb3J0IEltYWdlQ3ViZVRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0ltYWdlQ3ViZVRleHR1cmVcIik7XHJcbmltcG9ydCBJbWFnZVRleHR1cmVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvSW1hZ2VUZXh0dXJlXCIpO1xyXG5pbXBvcnQgVGV4dHVyZTJEQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZTJEQmFzZVwiKTtcclxuaW1wb3J0IFRleHR1cmVQcm94eUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL1RleHR1cmVQcm94eUJhc2VcIik7XHJcbmltcG9ydCBCeXRlQXJyYXlcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvQnl0ZUFycmF5XCIpO1xyXG5cclxuaW1wb3J0IERpc3BsYXlPYmplY3RDb250YWluZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9EaXNwbGF5T2JqZWN0Q29udGFpbmVyXCIpO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9EaXNwbGF5T2JqZWN0XCIpO1xyXG5pbXBvcnQgR2VvbWV0cnlcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0dlb21ldHJ5XCIpO1xyXG5pbXBvcnQgTGlnaHRCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvTGlnaHRCYXNlXCIpO1xyXG5pbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcclxuaW1wb3J0IERpcmVjdGlvbmFsTGlnaHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0RpcmVjdGlvbmFsTGlnaHRcIik7XHJcbmltcG9ydCBQb2ludExpZ2h0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1BvaW50TGlnaHRcIik7XHJcbmltcG9ydCBDYW1lcmFcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9DYW1lcmFcIik7XHJcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xyXG5pbXBvcnQgU2t5Ym94XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvU2t5Ym94XCIpO1xyXG5pbXBvcnQgTWF0ZXJpYWxCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9NYXRlcmlhbEJhc2VcIik7XHJcbmltcG9ydCBMaWdodFBpY2tlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9saWdodHBpY2tlcnMvTGlnaHRQaWNrZXJCYXNlXCIpO1xyXG5pbXBvcnQgU3RhdGljTGlnaHRQaWNrZXJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvbGlnaHRwaWNrZXJzL1N0YXRpY0xpZ2h0UGlja2VyXCIpO1xyXG5pbXBvcnQgQ3ViZU1hcFNoYWRvd01hcHBlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL0N1YmVNYXBTaGFkb3dNYXBwZXJcIik7XHJcbmltcG9ydCBEaXJlY3Rpb25hbFNoYWRvd01hcHBlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvc2hhZG93bWFwcGVycy9EaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiKTtcclxuaW1wb3J0IFNoYWRvd01hcHBlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL1NoYWRvd01hcHBlckJhc2VcIik7XHJcbmltcG9ydCBQcmVmYWJCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJlZmFiQmFzZVwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDYXBzdWxlUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlQ29uZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ29uZVByZWZhYlwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUN1YmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN1YmVQcmVmYWJcIik7XHJcbmltcG9ydCBQcmltaXRpdmVDeWxpbmRlclByZWZhYlx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlUGxhbmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVBsYW5lUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlU3BoZXJlUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlU3BoZXJlUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlVG9ydXNQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVRvcnVzUHJlZmFiXCIpO1xyXG5cclxuaW1wb3J0IEFuaW1hdGlvblNldEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRpb25TZXRCYXNlXCIpO1xyXG5pbXBvcnQgQW5pbWF0b3JCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRvckJhc2VcIik7XHJcbmltcG9ydCBWZXJ0ZXhBbmltYXRpb25TZXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvVmVydGV4QW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgVmVydGV4QW5pbWF0b3JcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9WZXJ0ZXhBbmltYXRvclwiKTtcclxuaW1wb3J0IFNrZWxldG9uQW5pbWF0aW9uU2V0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25BbmltYXRvclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0b3JcIik7XHJcbmltcG9ydCBKb2ludFBvc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvSm9pbnRQb3NlXCIpO1xyXG5pbXBvcnQgU2tlbGV0b25cdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblwiKTtcclxuaW1wb3J0IFNrZWxldG9uUG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblBvc2VcIik7XHJcbmltcG9ydCBTa2VsZXRvbkpvaW50XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvbkpvaW50XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25DbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1NrZWxldG9uQ2xpcE5vZGVcIik7XHJcbmltcG9ydCBWZXJ0ZXhDbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1ZlcnRleENsaXBOb2RlXCIpO1xyXG5pbXBvcnQgRGVmYXVsdE1hdGVyaWFsTWFuYWdlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9tYW5hZ2Vycy9EZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXCIpO1xyXG5cclxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsTW9kZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxNb2RlXCIpO1xyXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxcIik7XHJcbmltcG9ydCBBbWJpZW50RW52TWFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0FtYmllbnRFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlRGVwdGhNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZURlcHRoTWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZUNlbE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VDZWxNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlR3JhZGllbnRNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VHcmFkaWVudE1ldGhvZFwiKTtcclxuaW1wb3J0IERpZmZ1c2VMaWdodE1hcE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUxpZ2h0TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZVdyYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZVdyYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RBbHBoYU1hc2tNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEFscGhhTWFza01ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdENvbG9yTWF0cml4TWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RDb2xvck1hdHJpeE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdENvbG9yVHJhbnNmb3JtTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RFbnZNYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0RW52TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0Rm9nTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Rm9nTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEZyZXNuZWxFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RMaWdodE1hcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RMaWdodE1hcE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdE1ldGhvZEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RNZXRob2RCYXNlXCIpO1xyXG5pbXBvcnQgRWZmZWN0UmltTGlnaHRNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0UmltTGlnaHRNZXRob2RcIik7XHJcbmltcG9ydCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2RcIik7XHJcbmltcG9ydCBTaGFkb3dEaXRoZXJlZE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dEaXRoZXJlZE1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0ZpbHRlcmVkTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0ZpbHRlcmVkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93TWV0aG9kQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd01ldGhvZEJhc2VcIik7XHJcbmltcG9ydCBTcGVjdWxhckZyZXNuZWxNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyRnJlc25lbE1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0hhcmRNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dIYXJkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyQW5pc290cm9waWNNZXRob2RcIik7XHJcbmltcG9ydCBTcGVjdWxhckNlbE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhckNlbE1ldGhvZFwiKTtcclxuaW1wb3J0IFNwZWN1bGFyUGhvbmdNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJQaG9uZ01ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd05lYXJNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dOZWFyTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93U29mdE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd1NvZnRNZXRob2RcIik7XHJcblxyXG5pbXBvcnQgVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9mYWN0b3JpZXMvVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IEFTMlNjZW5lR3JhcGhGYWN0b3J5ID0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL2ZhY3Rvcmllcy9BUzJTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IE1vdmllQ2xpcCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9kaXNwbGF5L01vdmllQ2xpcFwiKTtcclxuaW1wb3J0IFRpbWVsaW5lS2V5RnJhbWUgPSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvVGltZWxpbmVLZXlGcmFtZVwiKTtcclxuaW1wb3J0IEFkZENoaWxkQ29tbWFuZCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC90aW1lbGluZS9jb21tYW5kcy9BZGRDaGlsZENvbW1hbmRcIik7XHJcbmltcG9ydCBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQgPSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvY29tbWFuZHMvVXBkYXRlUHJvcGVydHlDb21tYW5kXCIpO1xyXG5pbXBvcnQgUmVtb3ZlQ2hpbGRDb21tYW5kID0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL3RpbWVsaW5lL2NvbW1hbmRzL1JlbW92ZUNoaWxkQ29tbWFuZFwiKTtcclxuXHJcbi8qKlxyXG4gKiBBV0RQYXJzZXIgcHJvdmlkZXMgYSBwYXJzZXIgZm9yIHRoZSBBV0QgZGF0YSB0eXBlLlxyXG4gKi9cclxuY2xhc3MgQVdEUGFyc2VyIGV4dGVuZHMgUGFyc2VyQmFzZVxyXG57XHJcbiAgICAvL3NldCB0byBcInRydWVcIiB0byBoYXZlIHNvbWUgY29uc29sZS5sb2dzIGluIHRoZSBDb25zb2xlXHJcbiAgICBwcml2YXRlIF9kZWJ1Zzpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9ieXRlRGF0YTpCeXRlQXJyYXk7XHJcbiAgICBwcml2YXRlIF9zdGFydGVkUGFyc2luZzpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jdXJfYmxvY2tfaWQ6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYmxvY2tzOkFycmF5PEFXREJsb2NrPjtcclxuICAgIHByaXZhdGUgX25ld0Jsb2NrQnl0ZXM6Qnl0ZUFycmF5O1xyXG4gICAgcHJpdmF0ZSBfdmVyc2lvbjpBcnJheTxudW1iZXI+O1xyXG4gICAgcHJpdmF0ZSBfY29tcHJlc3Npb246bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYWNjdXJhY3lPbkJsb2Nrczpib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYWNjdXJhY3lNYXRyaXg6Ym9vbGVhbjtcclxuICAgIHByaXZhdGUgX2FjY3VyYWN5R2VvOmJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9hY2N1cmFjeVByb3BzOmJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9tYXRyaXhOclR5cGU6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZ2VvTnJUeXBlOm51bWJlcjtcclxuICAgIHByaXZhdGUgX3Byb3BzTnJUeXBlOm51bWJlcjtcclxuICAgIHByaXZhdGUgX3N0cmVhbWluZzpib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZV91c2VyczpPYmplY3QgPSB7fTtcclxuICAgIHByaXZhdGUgX3BhcnNlZF9oZWFkZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYm9keTpCeXRlQXJyYXk7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0VGV4dHVyZTpCaXRtYXBUZXh0dXJlOyAgICAgLy8gSFRNTCBJTUFHRSBURVhUVVJFID4/ICFcclxuICAgIHByaXZhdGUgX2N1YmVUZXh0dXJlczpBcnJheTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdEJpdG1hcE1hdGVyaWFsOk1ldGhvZE1hdGVyaWFsO1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdEN1YmVUZXh0dXJlOkJpdG1hcEN1YmVUZXh0dXJlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ09NUFJFU1NJT05NT0RFX0xaTUE6c3RyaW5nID0gXCJsem1hXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFVOQ09NUFJFU1NFRDpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBERUZMQVRFOm51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgc3RhdGljIExaTUE6bnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSU5UODpudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHN0YXRpYyBJTlQxNjpudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIHN0YXRpYyBJTlQzMjpudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHN0YXRpYyBVSU5UODpudW1iZXIgPSA0O1xyXG4gICAgcHVibGljIHN0YXRpYyBVSU5UMTY6bnVtYmVyID0gNTtcclxuICAgIHB1YmxpYyBzdGF0aWMgVUlOVDMyOm51bWJlciA9IDY7XHJcbiAgICBwdWJsaWMgc3RhdGljIEZMT0FUMzI6bnVtYmVyID0gNztcclxuICAgIHB1YmxpYyBzdGF0aWMgRkxPQVQ2NDpudW1iZXIgPSA4O1xyXG4gICAgcHVibGljIHN0YXRpYyBCT09MOm51bWJlciA9IDIxO1xyXG4gICAgcHVibGljIHN0YXRpYyBDT0xPUjpudW1iZXIgPSAyMjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQkFERFI6bnVtYmVyID0gMjM7XHJcbiAgICBwdWJsaWMgc3RhdGljIEFXRFNUUklORzpudW1iZXIgPSAzMTtcclxuICAgIHB1YmxpYyBzdGF0aWMgQVdEQllURUFSUkFZOm51bWJlciA9IDMyO1xyXG4gICAgcHVibGljIHN0YXRpYyBWRUNUT1IyeDE6bnVtYmVyID0gNDE7XHJcbiAgICBwdWJsaWMgc3RhdGljIFZFQ1RPUjN4MTpudW1iZXIgPSA0MjtcclxuICAgIHB1YmxpYyBzdGF0aWMgVkVDVE9SNHgxOm51bWJlciA9IDQzO1xyXG4gICAgcHVibGljIHN0YXRpYyBNVFgzeDI6bnVtYmVyID0gNDQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIE1UWDN4MzpudW1iZXIgPSA0NTtcclxuICAgIHB1YmxpYyBzdGF0aWMgTVRYNHgzOm51bWJlciA9IDQ2O1xyXG4gICAgcHVibGljIHN0YXRpYyBNVFg0eDQ6bnVtYmVyID0gNDc7XHJcblxyXG4gICAgcHJpdmF0ZSBibGVuZE1vZGVEaWM6QXJyYXk8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgX2RlcHRoU2l6ZURpYzpBcnJheTxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBBV0RQYXJzZXIgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgdXJsIG9yIGlkIG9mIHRoZSBkYXRhIG9yIGZpbGUgdG8gYmUgcGFyc2VkLlxyXG4gICAgICogQHBhcmFtIGV4dHJhIFRoZSBob2xkZXIgZm9yIGV4dHJhIGNvbnRleHR1YWwgZGF0YSB0aGF0IHRoZSBwYXJzZXIgbWlnaHQgbmVlZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKFVSTExvYWRlckRhdGFGb3JtYXQuQVJSQVlfQlVGRkVSKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gbmV3IEFycmF5PEFXREJsb2NrPigpO1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1swXSA9IG5ldyBBV0RCbG9jaygpO1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1swXS5kYXRhID0gbnVsbDsgLy8gWmVybyBhZGRyZXNzIG1lYW5zIG51bGwgaW4gQVdEXHJcblxyXG4gICAgICAgIHRoaXMuYmxlbmRNb2RlRGljID0gbmV3IEFycmF5PHN0cmluZz4oKTsgLy8gdXNlZCB0byB0cmFuc2xhdGUgaW50cyB0byBibGVuZE1vZGUtc3RyaW5nc1xyXG4gICAgICAgIHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk5PUk1BTCk7XHJcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuQUREKTtcclxuICAgICAgICB0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5BTFBIQSk7XHJcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuREFSS0VOKTtcclxuICAgICAgICB0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5ESUZGRVJFTkNFKTtcclxuICAgICAgICB0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5FUkFTRSk7XHJcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuSEFSRExJR0hUKTtcclxuICAgICAgICB0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5JTlZFUlQpO1xyXG4gICAgICAgIHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkxBWUVSKTtcclxuICAgICAgICB0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5MSUdIVEVOKTtcclxuICAgICAgICB0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5NVUxUSVBMWSk7XHJcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTk9STUFMKTtcclxuICAgICAgICB0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5PVkVSTEFZKTtcclxuICAgICAgICB0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5TQ1JFRU4pO1xyXG4gICAgICAgIHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLlNIQURFUik7XHJcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuT1ZFUkxBWSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RlcHRoU2l6ZURpYyA9IG5ldyBBcnJheTxudW1iZXI+KCk7IC8vIHVzZWQgdG8gdHJhbnNsYXRlIGludHMgdG8gZGVwdGhTaXplLXZhbHVlc1xyXG4gICAgICAgIHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDI1Nik7XHJcbiAgICAgICAgdGhpcy5fZGVwdGhTaXplRGljLnB1c2goNTEyKTtcclxuICAgICAgICB0aGlzLl9kZXB0aFNpemVEaWMucHVzaCgyMDQ4KTtcclxuICAgICAgICB0aGlzLl9kZXB0aFNpemVEaWMucHVzaCgxMDI0KTtcclxuICAgICAgICB0aGlzLl92ZXJzaW9uID0gQXJyYXk8bnVtYmVyPigpOyAvLyB3aWxsIGNvbnRhaW4gMiBpbnQgKG1ham9yLXZlcnNpb24sIG1pbm9yLXZlcnNpb24pIGZvciBhd2QtdmVyc2lvbi1jaGVja1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gZmlsZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGJ5IHRoZSBwYXJzZXIuXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIFRoZSBmaWxlIGV4dGVuc2lvbiBvZiBhIHBvdGVudGlhbCBmaWxlIHRvIGJlIHBhcnNlZC5cclxuICAgICAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGZpbGUgdHlwZSBpcyBzdXBwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNUeXBlKGV4dGVuc2lvbjpzdHJpbmcpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBleHRlbnNpb24gPSBleHRlbnNpb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uID09IFwiYXdkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0cyB3aGV0aGVyIGEgZGF0YSBibG9jayBjYW4gYmUgcGFyc2VkIGJ5IHRoZSBwYXJzZXIuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBibG9jayB0byBwb3RlbnRpYWxseSBiZSBwYXJzZWQuXHJcbiAgICAgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBkYXRhIGlzIHN1cHBvcnRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzdXBwb3J0c0RhdGEoZGF0YTphbnkpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKFBhcnNlclV0aWxzLnRvU3RyaW5nKGRhdGEsIDMpID09ICdBV0QnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbmhlcml0RG9jXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5KHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIERlcGVuZGVuY3kgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXHJcbiAgICAgICAgLy8gdGhlIEFzc2V0cyB3YWl0aW5nIGZvciB0aGlzIEJpdG1hcCwgY2FuIGJlIFRleHR1cmUgb3IgQ3ViZVRleHR1cmUuXHJcbiAgICAgICAgLy8gaWYgdGhlIEJpdG1hcCBpcyBhd2FpdGVkIGJ5IGEgQ3ViZVRleHR1cmUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXRzIHRoZSBsYXN0IEJpdG1hcCBvZiB0aGUgQ3ViZVRleHR1cmUsXHJcbiAgICAgICAgLy8gc28gd2Uga25vdyBpZiB3ZSBoYXZlIHRvIGZpbmFsaXplIHRoZSBBc3NldCAoQ3ViZVRleHR1cmUpIG9yIG5vdC5cclxuICAgICAgICBpZiAocmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgaXNDdWJlVGV4dHVyZUFycmF5OkFycmF5PHN0cmluZz4gPSByZXNvdXJjZURlcGVuZGVuY3kuaWQuc3BsaXQoXCIjXCIpO1xyXG4gICAgICAgICAgICB2YXIgcmVzc291cmNlSUQ6c3RyaW5nID0gaXNDdWJlVGV4dHVyZUFycmF5WzBdO1xyXG4gICAgICAgICAgICB2YXIgYXNzZXQ6VGV4dHVyZVByb3h5QmFzZTtcclxuICAgICAgICAgICAgdmFyIHRoaXNCaXRtYXBUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcbiAgICAgICAgICAgIHZhciBibG9jazpBV0RCbG9jaztcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0N1YmVUZXh0dXJlQXJyYXkubGVuZ3RoID09IDEpIC8vIE5vdCBhIGN1YmUgdGV4dHVyZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhc3NldCA9IDxUZXh0dXJlMkRCYXNlPiByZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlcnM6QXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sgPSB0aGlzLl9ibG9ja3NbIHJlc291cmNlRGVwZW5kZW5jeS5pZCBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmRhdGEgPSBhc3NldDsgLy8gU3RvcmUgZmluaXNoZWQgYXNzZXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgbmFtZSBvZiB0ZXh0dXJlIHRvIHRoZSBvbmUgZGVmaW5lZCBpbiB0aGUgQVdEIGZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9jay5uYW1lID0gYXNzZXQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbGl6ZSB0ZXh0dXJlIGFzc2V0IHRvIGRpc3BhdGNoIHRleHR1cmUgZXZlbnQsIHdoaWNoIHdhc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzbHkgc3VwcHJlc3NlZCB3aGlsZSB0aGUgZGVwZW5kZW5jeSB3YXMgbG9hZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGxvYWRlZCBCaXRtYXAgZm9yIHRleHR1cmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIHRleHR1cmU6IE5hbWUgPSBcIiArIGJsb2NrLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ3ViZVRleHR1cmVBcnJheS5sZW5ndGggPiAxKSAvLyBDdWJlIFRleHR1cmVcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpc0JpdG1hcFRleHR1cmUgPSA8Qml0bWFwVGV4dHVyZT4gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdHg6SW1hZ2VUZXh0dXJlID0gPEltYWdlVGV4dHVyZT4gdGhpc0JpdG1hcFRleHR1cmU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3ViZVRleHR1cmVzWyBpc0N1YmVUZXh0dXJlQXJyYXlbMV0gXSA9IHR4Lmh0bWxJbWFnZUVsZW1lbnQ7IC8vID9cclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLnB1c2goMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbG9hZGVkIEJpdG1hcCBcIiArIHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLmxlbmd0aCArIFwiIC8gNiBmb3IgQ3ViZXRleHR1cmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ubGVuZ3RoID09IHRoaXMuX2N1YmVUZXh0dXJlcy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc1g6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZWdYOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zWTphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5lZ1k6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NaOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1s0XTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmVnWjphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbNV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0ID0gPFRleHR1cmVQcm94eUJhc2U+IG5ldyBJbWFnZUN1YmVUZXh0dXJlKHBvc1gsIG5lZ1gsIHBvc1ksIG5lZ1ksIHBvc1osIG5lZ1opO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrID0gdGhpcy5fYmxvY2tzW3Jlc3NvdXJjZUlEXTtcclxuICAgICAgICAgICAgICAgICAgICBibG9jay5kYXRhID0gYXNzZXQ7IC8vIFN0b3JlIGZpbmlzaGVkIGFzc2V0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIG9wcG9zZWQgdG8gd2hhdGV2ZXIgdGhlIGltYWdlIHBhcnNlciBjYW1lIHVwIHdpdGguXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQucmVzZXRBc3NldFBhdGgoYmxvY2submFtZSwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2submFtZSA9IGFzc2V0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluYWxpemUgdGV4dHVyZSBhc3NldCB0byBkaXNwYXRjaCB0ZXh0dXJlIGV2ZW50LCB3aGljaCB3YXNcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aW91c2x5IHN1cHByZXNzZWQgd2hpbGUgdGhlIGRlcGVuZGVuY3kgd2FzIGxvYWRlZC5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIEN1YmVUZXh0dXJlOiBOYW1lID0gXCIgKyBibG9jay5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGluaGVyaXREb2NcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3lGYWlsdXJlKHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpXHJcbiAgICB7XHJcbiAgICAgICAgLy9ub3QgdXNlZCAtIGlmIGEgZGVwZW5kY3kgZmFpbHMsIHRoZSBhd2FpdGluZyBUZXh0dXJlIG9yIEN1YmVUZXh0dXJlIHdpbGwgbmV2ZXIgYmUgZmluYWxpemVkLCBhbmQgdGhlIGRlZmF1bHQtYml0bWFwcyB3aWxsIGJlIHVzZWQuXHJcbiAgICAgICAgLy8gdGhpcyBtZWFucywgdGhhdCBpZiBvbmUgQml0bWFwIG9mIGEgQ3ViZVRleHR1cmUgZmFpbHMsIHRoZSBDdWJlVGV4dHVyZSB3aWxsIGhhdmUgdGhlIERlZmF1bHRUZXh0dXJlIGFwcGxpZWQgZm9yIGFsbCBzaXggQml0bWFwcy5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc29sdmUgYSBkZXBlbmRlbmN5IG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcmVzb3VyY2VEZXBlbmRlbmN5IFRoZSBkZXBlbmRlbmN5IHRvIGJlIHJlc29sdmVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeU5hbWUocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSwgYXNzZXQ6SUFzc2V0KTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICB2YXIgb2xkTmFtZTpzdHJpbmcgPSBhc3NldC5uYW1lO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrOkFXREJsb2NrID0gdGhpcy5fYmxvY2tzW3BhcnNlSW50KHJlc291cmNlRGVwZW5kZW5jeS5pZCldO1xyXG4gICAgICAgICAgICAvLyBSZXNldCBuYW1lIG9mIHRleHR1cmUgdG8gdGhlIG9uZSBkZWZpbmVkIGluIHRoZSBBV0QgZmlsZSxcclxuICAgICAgICAgICAgLy8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cclxuICAgICAgICAgICAgYXNzZXQucmVzZXRBc3NldFBhdGgoYmxvY2submFtZSwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmV3TmFtZTpzdHJpbmcgPSBhc3NldC5uYW1lO1xyXG5cclxuICAgICAgICBhc3NldC5uYW1lID0gb2xkTmFtZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld05hbWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGluaGVyaXREb2NcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9wUHJvY2VlZFBhcnNpbmcoKTpib29sZWFuXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc3RhcnRlZFBhcnNpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnl0ZURhdGEgPSB0aGlzLl9wR2V0Qnl0ZURhdGEoKTsvL2dldEJ5dGVEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ZWRQYXJzaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fcGFyc2VkX2hlYWRlcikge1xyXG5cclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIExJVFRMRV9FTkRJQU4gLSBEZWZhdWx0IGZvciBBcnJheUJ1ZmZlciAvIE5vdCBpbXBsZW1lbnRlZCBpbiBCeXRlQXJyYXlcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vdGhpcy5fYnl0ZURhdGEuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFBhcnNlIGhlYWRlciBhbmQgZGVjb21wcmVzcyBib2R5IGlmIG5lZWRlZFxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlSGVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2NvbXByZXNzaW9uKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuREVGTEFURTpcclxuICAgICAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLkxaTUE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcERpZVdpdGhFcnJvcignQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLlVOQ09NUFJFU1NFRDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ib2R5ID0gdGhpcy5fYnl0ZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAvLyBDb21wcmVzc2VkIEFXRCBGb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAgICAgICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLkRFRkxBVEU6XHJcblxyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2JvZHkgPSBuZXcgQnl0ZUFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fYnl0ZURhdGEucmVhZEJ5dGVzKHRoaXMuX2JvZHksIDAsIHRoaXMuX2J5dGVEYXRhLmdldEJ5dGVzQXZhaWxhYmxlKCkpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2JvZHkudW5jb21wcmVzcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5MWk1BOlxyXG5cclxuICAgICAgICAgICAgICAgICB0aGlzLl9ib2R5ID0gbmV3IEJ5dGVBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2J5dGVEYXRhLnJlYWRCeXRlcyh0aGlzLl9ib2R5LCAwLCB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLl9ib2R5LnVuY29tcHJlc3MoQ09NUFJFU1NJT05NT0RFX0xaTUEpO1xyXG5cclxuICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAvLyovXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wYXJzZWRfaGVhZGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvL3RoaXMuX2JvZHkuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47Ly8gU2hvdWxkIGJlIGRlZmF1bHRcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JvZHkpIHtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCkgPiAwICYmICF0aGlzLnBhcnNpbmdQYXVzZWQpIC8vJiYgdGhpcy5fcEhhc1RpbWUoKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VOZXh0QmxvY2soKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBSZXR1cm4gY29tcGxldGUgc3RhdHVzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBQYXJzZXJCYXNlLk1PUkVfVE9fUEFSU0U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9jb21wcmVzc2lvbikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLkRFRkxBVEU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5MWk1BOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVidWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIoISkgQVdEUGFyc2VyIEVycm9yOiBDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkICghKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFcnJvciAtIG1vc3QgbGlrZWx5IF9ib2R5IG5vdCBzZXQgYmVjYXVzZSB3ZSBkbyBub3Qgc3VwcG9ydCBjb21wcmVzc2lvbi5cclxuICAgICAgICAgICAgcmV0dXJuICBQYXJzZXJCYXNlLlBBUlNJTkdfRE9ORTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX3BTdGFydFBhcnNpbmcoZnJhbWVMaW1pdDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuX3BTdGFydFBhcnNpbmcoZnJhbWVMaW1pdCk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIGEgY29udGVudCBvYmplY3QgZm9yIExvYWRlcnNcclxuICAgICAgICB0aGlzLl9wQ29udGVudCA9IG5ldyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNwb3NlKCk6dm9pZFxyXG4gICAge1xyXG5cclxuICAgICAgICBmb3IgKHZhciBjIGluIHRoaXMuX2Jsb2Nrcykge1xyXG5cclxuICAgICAgICAgICAgdmFyIGI6QVdEQmxvY2sgPSA8QVdEQmxvY2s+IHRoaXMuX2Jsb2Nrc1sgYyBdO1xyXG4gICAgICAgICAgICBiLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlTmV4dEJsb2NrKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBibG9jazpBV0RCbG9jaztcclxuICAgICAgICB2YXIgYXNzZXREYXRhOklBc3NldDtcclxuICAgICAgICB2YXIgaXNQYXJzZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBuczpudW1iZXI7XHJcbiAgICAgICAgdmFyIHR5cGU6bnVtYmVyO1xyXG4gICAgICAgIHZhciBmbGFnczpudW1iZXI7XHJcbiAgICAgICAgdmFyIGxlbjpudW1iZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cl9ibG9ja19pZCA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG4gICAgICAgIG5zID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcbiAgICAgICAgdHlwZSA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgIGZsYWdzID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcbiAgICAgICAgbGVuID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcbiAgICAgICAgdmFyIGJsb2NrQ29tcHJlc3Npb246Ym9vbGVhbiA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUc0KTtcclxuICAgICAgICB2YXIgYmxvY2tDb21wcmVzc2lvbkxaTUE6Ym9vbGVhbiA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUc1KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FjY3VyYWN5T25CbG9ja3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWNjdXJhY3lNYXRyaXggPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY3VyYWN5R2VvID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzIpO1xyXG4gICAgICAgICAgICB0aGlzLl9hY2N1cmFjeVByb3BzID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzMpO1xyXG4gICAgICAgICAgICB0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hY2N1cmFjeUdlbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FjY3VyYWN5TWF0cml4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hY2N1cmFjeVByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYmxvY2tFbmRBbGw6bnVtYmVyID0gdGhpcy5fYm9keS5wb3NpdGlvbiArIGxlbjtcclxuXHJcbiAgICAgICAgaWYgKGxlbiA+IHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wRGllV2l0aEVycm9yKCdBV0QyIGJsb2NrIGxlbmd0aCBpcyBiaWdnZXIgdGhhbiB0aGUgYnl0ZXMgdGhhdCBhcmUgYXZhaWxhYmxlIScpO1xyXG4gICAgICAgICAgICB0aGlzLl9ib2R5LnBvc2l0aW9uICs9IHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9uZXdCbG9ja0J5dGVzID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fYm9keS5yZWFkQnl0ZXModGhpcy5fbmV3QmxvY2tCeXRlcywgMCwgbGVuKTtcclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQ29tcHJlc3NlZCBBV0QgRm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZFxyXG5cclxuICAgICAgICBpZiAoYmxvY2tDb21wcmVzc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgaWYgKGJsb2NrQ29tcHJlc3Npb25MWk1BKVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy51bmNvbXByZXNzKEFXRFBhcnNlci5DT01QUkVTU0lPTk1PREVfTFpNQSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICB0aGlzLl9uZXdCbG9ja0J5dGVzLnVuY29tcHJlc3MoKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vdGhpcy5fbmV3QmxvY2tCeXRlcy5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgYmxvY2sgPSBuZXcgQVdEQmxvY2soKTtcclxuICAgICAgICBibG9jay5sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuO1xyXG4gICAgICAgIGJsb2NrLmlkID0gdGhpcy5fY3VyX2Jsb2NrX2lkO1xyXG5cclxuICAgICAgICB2YXIgYmxvY2tFbmRCbG9jazpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuO1xyXG5cclxuICAgICAgICBpZiAoYmxvY2tDb21wcmVzc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcbiAgICAgICAgICAgIC8vYmxvY2tFbmRCbG9jayAgID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHRoaXMuX25ld0Jsb2NrQnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAvL2Jsb2NrLmxlbiAgICAgICA9IGJsb2NrRW5kQmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBV0RCbG9jazogIElEID0gXCIgKyB0aGlzLl9jdXJfYmxvY2tfaWQgKyBcIiB8IFR5cGVJRCA9IFwiICsgdHlwZSArIFwiIHwgQ29tcHJlc3Npb24gPSBcIiArIGJsb2NrQ29tcHJlc3Npb24gKyBcIiB8IE1hdHJpeC1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5TWF0cml4ICsgXCIgfCBHZW9tZXRyeS1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5R2VvICsgXCIgfCBQcm9wZXJ0aWVzLVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lQcm9wcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9ibG9ja3NbdGhpcy5fY3VyX2Jsb2NrX2lkXSA9IGJsb2NrO1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMykgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMCkpIHtcclxuICAgICAgICAgICAgLy8gcHJvYmFibHkgc2hvdWxkIGNvbnRhaW4gc29tZSBpbmZvIGFib3V0IHRoZSB0eXBlIG9mIGFuaW1hdGlvblxyXG4gICAgICAgICAgICB2YXIgZmFjdG9yeSA9IG5ldyBBUzJTY2VuZUdyYXBoRmFjdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VBZHVpb0Jsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCwgZmFjdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQYXJzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8vIGp1c3QgYmVjYXVzZSBpIHVzZWQgYmxvY2tJRCA0IGluIGZpcnN0IGV4cG9ydGVyIGVhcmxpZXJcclxuICAgICAgICAgICAgICAgIGNhc2UgMTMzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VUaW1lTGluZSh0aGlzLl9jdXJfYmxvY2tfaWQsIGZhY3RvcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPiAyKXx8KCh0aGlzLl92ZXJzaW9uWzBdID49IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID49IDEpKSkge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VQcmltaXR2ZXModGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1BhcnNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDMxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VTa3lib3hJbnN0YW5jZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUxpZ2h0KHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQYXJzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlQ2FtZXJhKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQYXJzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBjYXNlIDQzOlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICBwYXJzZVRleHR1cmVQcm9qZWN0b3IoX2N1cl9ibG9ja19pZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSA1MTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlTGlnaHRQaWNrZXIodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1BhcnNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDgxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VNYXRlcmlhbF92MSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgODM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUN1YmVUZXh0dXJlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQYXJzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlU2hhcmVkTWV0aG9kQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1BhcnNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDkyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VTaGFkb3dNZXRob2RCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTExOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VNZXNoUG9zZUFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTEyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VNZXNoUG9zZUFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTEzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VWZXJ0ZXhBbmltYXRpb25TZXQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1BhcnNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlQW5pbWF0b3JTZXQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1BhcnNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI1MzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlQ29tbWFuZCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vKlxyXG4gICAgICAgIGlmIChpc1BhcnNlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZUNvbnRhaW5lcih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlTWVzaEluc3RhbmNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDgxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VNYXRlcmlhbCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4MjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlVGV4dHVyZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZVNrZWxldG9uKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlU2tlbGV0b25Qb3NlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlU2tlbGV0b25BbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTIxOlxyXG4gICAgICAgICAgICAgICAgLy90aGlzLnBhcnNlVVZBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI1NDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlTmFtZVNwYWNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI1NTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlTWV0YURhdGEodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVdEQmxvY2s6ICAgVW5rbm93biBCbG9ja1R5cGUgIChCbG9ja0lEID0gXCIgKyB0aGlzLl9jdXJfYmxvY2tfaWQgKyBcIikgLSBTa2lwIFwiICsgbGVuICsgXCIgYnl0ZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKz0gbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vKi9cclxuXHJcbiAgICAgICAgdmFyIG1zZ0NudDpudW1iZXIgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID09IGJsb2NrRW5kQmxvY2spIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2suZXJyb3JNZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChtc2dDbnQgPCBibG9jay5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgICAgICAgKCEpIEVycm9yOiBcIiArIGJsb2NrLmVycm9yTWVzc2FnZXNbbXNnQ250XSArIFwiICghKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ250Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVidWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgKCEpKCEpKCEpIEVycm9yIHdoaWxlIHJlYWRpbmcgQVdEQmxvY2sgSUQgXCIgKyB0aGlzLl9jdXJfYmxvY2tfaWQgKyBcIiA9IHNraXAgdG8gbmV4dCBibG9ja1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2suZXJyb3JNZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChtc2dDbnQgPCBibG9jay5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgICAgICAgKCEpIEVycm9yOiBcIiArIGJsb2NrLmVycm9yTWVzc2FnZXNbbXNnQ250XSArIFwiICghKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnQ250Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9ib2R5LnBvc2l0aW9uID0gYmxvY2tFbmRBbGw7XHJcbiAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcyA9IG51bGw7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy0tUGFyc2VyIEJsb2Nrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VBZHVpb0Jsb2NrKGJsb2NrSUQ6bnVtYmVyLCBmYWN0b3J5OlRpbWVsaW5lU2NlbmVHcmFwaEZhY3RvcnkpOnZvaWQge1xyXG5cclxuICAgICAgICAvL3ZhciBhc3NldDpBdWRpbzt0b2RvIGNyZWF0ZSBhc3NldCBmb3IgYXVkaW9cclxuXHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG4gICAgICAgIHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgIHZhciBkYXRhX2xlbjpudW1iZXI7XHJcblxyXG4gICAgICAgIC8vdGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gRXh0ZXJuYWxcclxuICAgICAgICBpZiAodHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICAgICAgdmFyIHVybDpzdHJpbmc7XHJcbiAgICAgICAgICAgIHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcclxuICAgICAgICAgICAgLy8gdG9kbyBwYXJzZXIgbmVlZHMgdG8gYmUgYWJsZSB0byBoYW5kbGUgbXAzIGFuZCB3YXYgZmlsZXMgaWYgd2UgdHJpZ2dlciB0aGUgbG9hZGluZyBvZiBleHRlcm5hbCByZXNzb3VyY2VcclxuICAgICAgICAgICAgLy90aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbmV3IFVSTFJlcXVlc3QodXJsKSwgZmFsc2UsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1ZGlvIHVybCA9IFwiK3VybCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IGV4cG9ydGVyIGRvZXMgbm90IGV4cG9ydCBlbWJlZCBzb3VuZHMgeWV0XHJcbiAgICAgICAgICAgIGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhOkJ5dGVBcnJheTtcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBCeXRlQXJyYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZXMoZGF0YSwgMCwgZGF0YV9sZW4pO1xyXG5cclxuICAgICAgICAgICAgLy8gdG9kbyBwYXJzZSBzb3VuZCBmcm9tIGJ5dGVzXHJcbiAgICAgICAgICAgIC8vIHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgUGFyc2VyVXRpbHMuYnkoZGF0YSksIHRydWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWdub3JlIGZvciBub3dcclxuICAgICAgICB0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZXh0cmFzID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGhpcy5fcFBhdXNlQW5kUmV0cmlldmVEZXBlbmRlbmNpZXMoKTtcclxuICAgICAgICAvL3RoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7dG9kb1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHR1cmVTdHlsZXNOYW1lczpBcnJheTxzdHJpbmc+ID0gW1wiZXh0ZXJuYWxcIiwgXCJlbWJlZFwiXVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0IHBhcnNpbmcgYSBcIiArIHRleHR1cmVTdHlsZXNOYW1lc1t0eXBlXSArIFwiIEF1ZGlvIGZpbGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQmxvY2sgSUQgPSA0XHJcbiAgICBwcml2YXRlIHBhcnNlVGltZUxpbmUoYmxvY2tJRDpudW1iZXIsIGZhY3Rvcnk6VGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSk6dm9pZCB7XHJcblxyXG4gICAgICAgIHZhciBpOm51bWJlcjtcclxuICAgICAgICB2YXIgajpudW1iZXI7XHJcbiAgICAgICAgdmFyIGs6bnVtYmVyO1xyXG4gICAgICAgIHZhciB0aW1lTGluZUNvbnRhaW5lciA9IGZhY3RvcnkuY3JlYXRlTW92aWVDbGlwKCk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcbiAgICAgICAgdmFyIGlzU2NlbmUgPSAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgIHZhciBzY2VuZUlEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcbiAgICAgICAgdmFyIGZwczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xyXG4gICAgICAgIHZhciBtc19wZXJfZnJhbWUgPSAxMDAwIC8gZnBzO1xyXG4gICAgICAgIHZhciBudW1GcmFtZXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcbiAgICAgICAgdmFyIG9iamVjdElETWFwIDogeyBbaWQ6c3RyaW5nXTpudW1iZXI7IH0gPSB7fTtcclxuXHJcbiAgICAgICAgLy8gdmFyIHByZXZpb3VzVGltZUxpbmU6VGltZUxpbmVGcmFtZTtcclxuICAgICAgICAvLyB2YXIgZmlsbF9wcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQzMn0pOy8vIHsgMTpVSU5UMzIsIDY6QVdEU1RSSU5HIH0gICk7IC8vOyAsIDI6VUlOVDMyLCAzOlVJTlQzMiwgNTpCT09MIH0gKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFRJTUVMSU5FOiBOYW1lID0gXCIgKyBuYW1lICsgXCJ8IGlzU2NlbmUgPSBcIiArIGlzU2NlbmUgKyBcInwgc2NlbmVJRCA9IFwiICsgc2NlbmVJRCArIFwifCBudW1GcmFtZXMgPSBcIiArIG51bUZyYW1lcyk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbER1cmF0aW9uID0gMDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtRnJhbWVzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBUaW1lbGluZUtleUZyYW1lKCk7XHJcbiAgICAgICAgICAgIHZhciB0cmFjZVN0cmluZyA9IFwiZnJhbWUgPSBcIiArIGk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGUgbXNfcGVyX2ZyYW1lIHRvIHNldCB0aGUgZHVyYXRpb24gaW4gZnJhbWVzXHJcbiAgICAgICAgICAgIHZhciBmcmFtZUR1cmF0aW9uID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKSAqIG1zX3Blcl9mcmFtZTtcclxuICAgICAgICAgICAgZnJhbWUuc2V0RnJhbWVUaW1lKHRvdGFsRHVyYXRpb24sIGZyYW1lRHVyYXRpb24pO1xyXG4gICAgICAgICAgICB0b3RhbER1cmF0aW9uICs9IGZyYW1lRHVyYXRpb247XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkdXJhdGlvbiA9IFwiICsgZnJhbWVEdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICB2YXIgbnVtTGFiZWxzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbnVtTGFiZWxzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsYWJlbFR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEhhbmRsZSBsYWJlbHMgZGlmZmVyZW50bHlcclxuICAgICAgICAgICAgICAgIC8vdGltZUxpbmVDb250YWluZXIuYWRkRnJhbWVMYWJlbChuZXcgRnJhbWVMYWJlbChsYWJlbCwgbGFiZWxUeXBlLCBmcmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgdHJhY2VTdHJpbmcgKz0gXCJcXG4gICAgIGxhYmVsID0gXCIgKyBsYWJlbCArIFwiIC0gbGFiZWxUeXBlID0gXCIgKyBsYWJlbFR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBudW1Db21tYW5kcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICAgICAgdmFyIGNvbW1hbmRTdHJpbmcgPSBcIlxcbiAgICAgIENvbW1hbmRzIFwiICsgbnVtQ29tbWFuZHM7XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBudW1Db21tYW5kczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0SUQ6bnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc291cmNlSUQ6bnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbW1hbmRUeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDEgPSBBZGQgb2JqZWN0IGJ5IGxvY2FsIGlkIChhd2QtYmxvY2staWQpICsgdXBkYXRlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgIC8vIDIgPSBBZGQgb2JqZWN0IGJ5IGdsb2JhbCBpZCAoc3RyaW5nIGlkZW50aWZpZXIpICsgdXBkYXRlIHByb3BlcnRpZXMgIU5vdCB1c2VkIHlldC4hXHJcbiAgICAgICAgICAgICAgICAvLyAzID0gVXBkYXRlT2JqZWN0IC0gdXBkYXRlIGEgb2JqZWN0IHRoYXQgaXMgYWxyZWFkeSBwcmVzZW50XHJcbiAgICAgICAgICAgICAgICAvLyA0ID0gcmVtb3ZlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgLy8gNSA9IGFkZCAvIHVwZGF0ZSBzb3VuZFxyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFR5cGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZUlEPTA7IC8vIG11c3QgYmUgc2V0IGluIGZvbGxpbmcgY29uZGl0aW9uczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRUeXBlPT0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbW1hbmRzIGxvb2tzIGZvciBhIG9iamVjdCBieSBhd2QtaWQgYW5kIHB1dHMgaXQgaW50byB0aGUgdGltZWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtRmlsbHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIG51bWJlciBvZiBmaWxscyA9IFwiICsgbnVtRmlsbHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc291bmQgaXMgYWRkZWQgdG8gdGltZWxpbmUgd2l0aCBkZWRpY2F0ZWQgQ29tbWFuZCwgYXMgaXQgaXMgbm8gZGlzcGxheS1vYmplY3QgKGhhcyBubyBtYXRyaXggZXRjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgYSBHZW9tZXRyeSBjYW4gYmUgZm91bmQgYXQgdGhlIHJlc291cmNlSUQgKEFXRC1JRClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lZEFycmF5OmFueVtdID0gdGhpcy5nZXRBc3NldEJ5SUQocmVzb3VyY2VJRCwgWyBBc3NldFR5cGUuR0VPTUVUUlkgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWRBcnJheVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnZW9tID0gPEdlb21ldHJ5PnJldHVybmVkQXJyYXlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGQgPSBuZXcgTWVzaChnZW9tKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZW9tZXRyeSBmb3VuZC4gY3JlYXRlIG5ldyBDb21tYW5kLCBhZGQgdGhlIHByb3BzIGFuZCB0aGUgbWF0ZXJpYWxzIHRvIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG51bUZpbGxzOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVkQXJyYXkyOmFueVtdID0gdGhpcy5nZXRBc3NldEJ5SUQodGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKSwgWyBBc3NldFR5cGUuTUFURVJJQUwgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZEFycmF5MlswXSAmJiBuZXdDaGlsZC5zdWJNZXNoZXMubGVuZ3RoID4gaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkLnN1Yk1lc2hlc1trXS5tYXRlcmlhbCA9IHJldHVybmVkQXJyYXkyWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBubyBnZW9tZXRyeSBmb3VuZCwgc28gd2UgY2hlY2sgZm9yIFRJTUVMSU5FLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIHNob3VsZCBiZSBubyBmaWxscyBpbiB0aGlzIGNhc2UsIGJ1dCBnZW9tZXRyeSBjaGVjayBtaWdodCBoYXZlIGZhaWxlZCwgYW5kIGZpbGwtaWRzIHN0aWxsIG5lZWQgdG8gYmUgcGFyc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG51bUZpbGxzOyBrKyspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lZEFycmF5OmFueVtdID0gdGhpcy5nZXRBc3NldEJ5SUQocmVzb3VyY2VJRCwgWyBBc3NldFR5cGUuVElNRUxJTkUgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVybmVkQXJyYXlbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkID0gPE1vdmllQ2xpcD5yZXR1cm5lZEFycmF5WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSUQgPSB0aW1lTGluZUNvbnRhaW5lci5yZWdpc3RlclBvdGVudGlhbENoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdElETWFwW29iamVjdElEXSA9IGluc3RhbmNlSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBBZGRDaGlsZENvbW1hbmQoaW5zdGFuY2VJRCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZU5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VOYW1lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcIm5hbWVcIiwgaW5zdGFuY2VOYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU5hbWUgPSBcIiArIGluc3RhbmNlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIEFkZCBuZXcgUmVzb3VyY2UgPSBcIiArIHJlc291cmNlSUQgKyBcIiBhcyBvYmplY3RfaWQgPSBcIiArIG9iamVjdElEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmRUeXBlPT0yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbW1hbmRzIGxvb2tzIGZvciBhIG9iamVjdCBieSBnbG9iYWwgc3RyaW5nIGlkZW50aWZpZXIgYW5kIHB1dHMgaXQgaW50byB0aGUgdGltZWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWQgeWV0LCBidXQgbWlnaHQgYmUgdXNlZnVsIHRvIGRvIHRoaW5ncyBsaWtlIHRleHQtbG9jYWxpemF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2xvYmFsX3Jlc3NvdXJjZV9pZCA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG8gKGlmIG5lZWRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSUQgPSBvYmplY3RJRE1hcFtvYmplY3RJRF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBVcGRhdGUgb2JqZWN0X2lkID0gXCIgKyBvYmplY3RJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWFkIHRoZSBjb21tYW5kIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTogbWF0cml4MmQgKDYgeCBudW1iZXIgd2l0aCBzdG9yYWdlIHByZWNpc2lvbiBtYXRyaXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDI6IG1hdHJpeDJkICgxMiB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIG1hdHJpeCkgbm90IHVzZWQgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDM6IGNvbG9ydHJhbnNmb3JtICgyMCB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIHByb3BlcnRpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQ6IGJsZW5kbW9kZSAodWludDgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDU6IHZpc2liaWx0eSAodWludDgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDY6IGRlcHRoICh1aW50MzIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDc6IG1hc2sgKHVpbnQzMilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9wcm9wc05yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDgsIDU6QVdEUGFyc2VyLlVJTlQ4LCA2OkFXRFBhcnNlci5VSU5UMzIsIDc6QVdEUGFyc2VyLlVJTlQzMn0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdHJpeF8yZDpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMSwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBtYXRyaXhfM2Q6RmxvYXQzMkFycmF5ID0gcHJvcHMuZ2V0KDIsIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9ydHJhbnNmb3JtOkZsb2F0MzJBcnJheSA9IHByb3BzLmdldCgzLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBibGVuZG1vZGU6bnVtYmVyID0gcHJvcHMuZ2V0KDQsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZpc2liaWx0eTpudW1iZXIgPSBwcm9wcy5nZXQoNSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVwdGg6bnVtYmVyID0gcHJvcHMuZ2V0KDYsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2s6bnVtYmVyID0gcHJvcHMuZ2V0KDcsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogaGFuZGxlIGZpbHRlcnNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbWF0cml4MmQgbXVzdCBwcm92aWRlIDYgdmFsdWVzIHRvIGJlIHZhbGlkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFycmF5ID0gXCIgKyBtYXRyaXhfMmQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0cml4XzJkLmxlbmd0aD09Nikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNNYXRyaXggPSBuZXcgTWF0cml4M0QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG8gc2V0IHJvdGF0aW9uICsgc2NhbGUgZnJvbSBtYXRyaXggMngzIHRvIG1hdHJpeDNkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzTWF0cml4LnBvc2l0aW9uID0gbmV3IFZlY3RvcjNEKG1hdHJpeF8yZFs0XSwgbWF0cml4XzJkWzVdLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcIl9pTWF0cml4M0RcIiwgdGhpc01hdHJpeCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXJyYXkgPSBcIiArIG1hdHJpeF8yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL21hdHJpeDJkIG11c3QgcHJvdmlkZSAyMCB2YWx1ZXMgdG8gYmUgdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9ydHJhbnNmb3JtLmxlbmd0aD09MjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHNldCBDb2xvclRyYW5zZm9ybSBvbiBvYmplY3RQcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBjb2xvck1hdHJpeCA9IFwiICsgY29sb3J0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJsZW5kbW9kZSBtdXN0IGJlIHBvc2l0aXZlIHRvIGJlIHZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibGVuZG1vZGU+PTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBibGVuZG1vZGVfc3RyaW5nOnN0cmluZyA9IHRoaXMuYmxlbmRNb2RlRGljW2JsZW5kbW9kZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzZXQgQmxlbmRtb2RlIG9uIG9iamVjdFByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIEJsZW5kTW9kZSA9IFwiICsgYmxlbmRtb2RlX3N0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2aXNpYmlsdHkgbXVzdCBiZSBwb3NpdGl2ZSB0byBiZSB2YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlzaWJpbHR5Pj0wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih2aXNpYmlsdHk9PTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwidmlzaWJsZVwiLCBmYWxzZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcInZpc2libGVcIiwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlcHRoIG11c3QgYmUgcG9zaXRpdmUgdG8gYmUgdmFsaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoPj0wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIERlcHRoID0gXCIgKyBkZXB0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHNldCBkZXB0aENsaXBDaGFuZ2Ugb24gb2JqZWN0UHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXNrIG11c3QgYmUgcG9zaXRpdmUgdG8gYmUgdmFsaWQuIGkgdGhpbmsgb25seSBhZGQtY29tbWFuZHMgd2lsbCBoYXZlIHRoaXMgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGUuZy4gaXQgc2hvdWxkIG5ldmVyIGJlIHVwZGF0ZWQgb24gYWxyZWFkeSBleGlzdGluZyBvYmplY3RzLiAoYmVjYXVzZSBkZXB0aCBvZiBvYmplY3RzIGNhbiBjaGFuZ2UsIGkgYW0gbm90IHN1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrPj0wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIE1hc2stdXAgdG8gb2JqLWlkOiBcIiArIG1hc2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzZXQgZGVwdGhDbGlwQ2hhbmdlIG9uIG9iamVjdFByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogaGFuZGxlIGZpbHRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBPYmplY3QgQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZUlEID0gb2JqZWN0SURNYXBbb2JqZWN0SURdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBSZW1vdmVDaGlsZENvbW1hbmQoaW5zdGFuY2VJRCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgIC0gUmVtb3ZlIG9iamVjdCB3aXRoIElEOiBcIiArIG9iamVjdElEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIFNvdW5kIENvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogY3JlYXRlIENvbW1hbmRQcm9wc1NvdW5kIGFuZCBjaGVjayB3aGljaCBhc3NldCB0byB1c2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZUlEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IHNvdW5kIGluIHRpbWVsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIEFkZCBuZXcgU291bmQgQVdELUlEID0gXCIgKyByZXNvdXJjZUlELnRvU3RyaW5nKCkgKyBcIiBhcyBvYmplY3RfaWQgPSBcIiArIG9iamVjdElELnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAtIFVua25vd24gQ29tbWFuZCBUeXBlID0gXCIgKyBjb21tYW5kVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICBpZiAobGVuZ3RoX2NvZGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBTY3JpcHQgc2hvdWxkIHByb2JhYmx5IG5vdCBiZSBhdHRhY2hlZCB0byBrZXlmcmFtZXM/XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWVfY29kZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGxlbmd0aF9jb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vZnJhbWUuYWRkVG9TY3JpcHQoZnJhbWVfY29kZSk7XHJcbiAgICAgICAgICAgICAgICB0cmFjZVN0cmluZyArPSBcIlxcbmZyYW1lLWNvZGUgPSBcIiArIGZyYW1lX2NvZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJhY2VTdHJpbmcgKz0gY29tbWFuZFN0cmluZztcclxuICAgICAgICAgICAgLy90cmFjZShcImxlbmd0aF9jb2RlID0gXCIrbGVuZ3RoX2NvZGUrXCIgZnJhbWVfY29kZSA9IFwiK2ZyYW1lX2NvZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpOy8vIHVzZXIgYXR0cmlidXRlcyAtIHNraXAgZm9yIG5vd1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRyYWNlU3RyaW5nKTtcclxuICAgICAgICAgICAgdGltZUxpbmVDb250YWluZXIuYWRkRnJhbWUoZnJhbWUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+dGltZUxpbmVDb250YWluZXIsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gdGltZUxpbmVDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcbiAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9CbG9jayBJRCA9IDFcclxuICAgIHByaXZhdGUgcGFyc2VUcmlhbmdsZUdlb21ldHJpZUJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHZhciBnZW9tOkdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KCk7XHJcblxyXG4gICAgICAgIC8vIFJlYWQgbmFtZSBhbmQgc3ViIGNvdW50XHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHZhciBudW1fc3ViczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG4gICAgICAgIC8vIFJlYWQgb3B0aW9uYWwgcHJvcGVydGllc1xyXG4gICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xyXG4gICAgICAgIHZhciBnZW9TY2FsZVU6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDEpO1xyXG4gICAgICAgIHZhciBnZW9TY2FsZVY6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDEpO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggc3ViIG1lc2hlc1xyXG4gICAgICAgIHZhciBzdWJzX3BhcnNlZDpudW1iZXIgPSAwO1xyXG4gICAgICAgIHdoaWxlIChzdWJzX3BhcnNlZCA8IG51bV9zdWJzKSB7XHJcbiAgICAgICAgICAgIHZhciBpc18yZF9nZW9tOmJvb2xlYW49ZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpOm51bWJlcjtcclxuICAgICAgICAgICAgdmFyIHNtX2xlbjpudW1iZXIsIHNtX2VuZDpudW1iZXI7XHJcbiAgICAgICAgICAgIHZhciB3X2luZGljZXM6QXJyYXk8bnVtYmVyPjtcclxuICAgICAgICAgICAgdmFyIHdlaWdodHM6QXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgICAgICAgICAgIHNtX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcbiAgICAgICAgICAgIHNtX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzbV9sZW47XHJcblxyXG4gICAgICAgICAgICB2YXIgc3ViUHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX2dlb05yVHlwZSwgMjp0aGlzLl9nZW9OclR5cGV9KTtcclxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHNtX2VuZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkeDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHV2X2lkeDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5faWR4Om51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgdF9pZHg6bnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJfZnR5cGU6bnVtYmVyLCBzdHJfdHlwZTpudW1iZXIsIHN0cl9sZW46bnVtYmVyLCBzdHJfZW5kOm51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUeXBlLCBmaWVsZCB0eXBlLCBsZW5ndGhcclxuICAgICAgICAgICAgICAgIHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICBzdHJfZnR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuICAgICAgICAgICAgICAgIHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICAgICAgc3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB4Om51bWJlciwgeTpudW1iZXIsIHo6bnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdHJfdHlwZSA9PSAxKSB7Ly92ZXJ0ZXggM2QgcG9zaXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnRzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB6O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMikgey8vZmFjZSBpbmRpY2llcyBwb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXNbaWR4KytdID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cl90eXBlID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dnNbaWR4KytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJfdHlwZSA9PSA0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWxzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsc1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cl90eXBlID09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICB3X2luZGljZXMgPSBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3X2luZGljZXNbaWR4KytdID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpKjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gNykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodHNbaWR4KytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cl90eXBlID09IDgpIHsvLyAyZC1wb3NpdGlvbnMgLSBub3QgdXNlZCB5ZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cl90eXBlID09IDkpIHsvLyBjb21iaW5lZCB2ZXJ0ZXgzRCBzdHJlYW0gMTMgeCBmbG9hdDMyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cl90eXBlID09IDEwKSB7Ly8gY29tYmluZWQgdmVydGV4MkQgc3RyZWFtIDkgeCBmbG9hdDMyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4Om51bWJlciwgeTpudW1iZXIsIHo6bnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlOm51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcjpudW1iZXIsIGc6bnVtYmVyLCBiOm51bWJlcixhOm51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdTpudW1iZXIsIHY6bnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmVydHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHV2czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9ybWFsczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFuZ2VudHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6ID0gLTAuMSAqIHN1YnNfcGFyc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ogPSBzdWJzX3BhcnNlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy96ID0gKGJsb2NrSUQqMC4wMDEpICsgc3Vic19wYXJzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHUgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogciA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBnID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ki9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWxlIHRoaXMgaXMgdHJ1ZSwgYmUgcGFyc2UgdGhlIHZlcnRleC1kYXRhLCBzbyBpdCBjYW4gYmUgcmVuZGVyZWQgYXMgXCJub3JtYWxcIiAzZC1nZW9tZXRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZzW2lkeF0gPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxzW2lkeF0gPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZzW2lkeF0gPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxzW2lkeF0gPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsc1tpZHhdID0gMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydHNbaWR4KytdID0gejtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgYW5kIHNldC1kYXRhLCBzbyB0aGUgM2QtZ2VvbWV0cnkgY29udGFpbnMgYWxsIGRhdGEgKGJ1dCBpcyBubyBsb25nZXIgdmFsaWQgZm9yIG5vcm1hbCAzZC1yZW5kZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhd2F5M2QtdmVydGV4ZGF0YSAgICB8ICAgYXdheUpTLXNoYXBlLWRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3MueCAgICAgICAgICAgICAgICB8ICAgcG9zLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvcy55ICAgICAgICAgICAgICAgIHwgICBwb3MueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zLnogICAgICAgICAgICAgICAgfCAgIHBvcy56IChmb3Igbm93IHdlIGp1c3QgdXNlIHRoaXMgYXMgZGVwdGggKHNldCBlYWNoIHN1YmdlbyB0byBpdHMgb3duIGRlcHRoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbC54ICAgICAgICAgICAgIHwgICBjdXJ2ZS10eXBlICgwOm5vdEN1cnZlZCwgMTogY29udmV4LCAyOmNvbmNhdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWwueSAgICAgICAgICAgICB8ICAgYWxwaGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbC56ICAgICAgICAgICAgIHwgICBub3QgdXNlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXYudSAgICAgICAgICAgICAgICAgfCAgIGN1cnZlLnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHV2LnYgICAgICAgICAgICAgICAgIHwgICBjdXJ2ZS52XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YW5nZW50LnggICAgICAgICAgICB8ICAgcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YW5nZW50LnkgICAgICAgICAgICB8ICAgZ3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhbmdlbnQueiAgICAgICAgICAgIHwgICBibHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91djJbaWR4XSA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91djJbaWR4XSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB6O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZzW3V2X2lkeCsrXSA9IHU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dnNbdXZfaWR4KytdID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbHNbbl9pZHgrK10gPSB0eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsc1tuX2lkeCsrXSA9IGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxzW25faWR4KytdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYWNlKFwicj1cIiArIHIgKyBcIiBnPVwiICsgZyArIFwiIGI9XCIgKyBiICsgXCIgYT1cIiArIGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudHNbdF9pZHgrK10gPSByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudHNbdF9pZHgrK10gPSBnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudHNbdF9pZHgrK10gPSBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJfdHlwZSA9PSAxMSkgey8vIGNvbWJpbmVkIHZlcnRleDJEIHN0cmVhbSA1IHggZmxvYXQzMlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7IC8vIElnbm9yZSBzdWItbWVzaCBhdHRyaWJ1dGVzIGZvciBub3dcclxuICAgICAgICAgICAgdmFyIHN1Yl9nZW9tOlRyaWFuZ2xlU3ViR2VvbWV0cnk7XHJcbiAgICAgICAgICAgIHN1Yl9nZW9tID0gbmV3IFRyaWFuZ2xlU3ViR2VvbWV0cnkodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICh3ZWlnaHRzKVxyXG4gICAgICAgICAgICAgICAgc3ViX2dlb20uam9pbnRzUGVyVmVydGV4ID0gd2VpZ2h0cy5sZW5ndGgvKHZlcnRzLmxlbmd0aC8zKTtcclxuICAgICAgICAgICAgaWYgKG5vcm1hbHMpXHJcbiAgICAgICAgICAgICAgICBzdWJfZ2VvbS5hdXRvRGVyaXZlTm9ybWFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodXZzKVxyXG4gICAgICAgICAgICAgICAgc3ViX2dlb20uYXV0b0Rlcml2ZVVWcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdWJfZ2VvbS5hdXRvRGVyaXZlTm9ybWFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB3aGVuIHJlbmRlcmluZyBhcyBcIm5vcm1hbFwiIDNkLWdlb21ldHJ5LCB3ZSBuZWVkIHRvIGF1dG9EZXJpdmUgdGFuZ2VudHNcclxuICAgICAgICAgICAgaWYodHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBzdWJfZ2VvbS5hdXRvRGVyaXZlVGFuZ2VudHMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XHJcbiAgICAgICAgICAgIHN1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyh2ZXJ0cyk7XHJcbiAgICAgICAgICAgIHN1Yl9nZW9tLnVwZGF0ZVZlcnRleE5vcm1hbHMobm9ybWFscyk7XHJcbiAgICAgICAgICAgIHN1Yl9nZW9tLnVwZGF0ZVVWcyh1dnMpO1xyXG4gICAgICAgICAgICBzdWJfZ2VvbS51cGRhdGVWZXJ0ZXhUYW5nZW50cyhudWxsKTtcclxuICAgICAgICAgICAgc3ViX2dlb20udXBkYXRlSm9pbnRXZWlnaHRzKHdlaWdodHMpO1xyXG4gICAgICAgICAgICBzdWJfZ2VvbS51cGRhdGVKb2ludEluZGljZXMod19pbmRpY2VzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY2FsZVU6bnVtYmVyID0gc3ViUHJvcHMuZ2V0KDEsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc2NhbGVWOm51bWJlciA9IHN1YlByb3BzLmdldCgyLCAxKTtcclxuICAgICAgICAgICAgdmFyIHNldFN1YlVWczpib29sZWFuID0gZmFsc2U7IC8vdGhpcyBzaG91bGQgcmVtYWluIGZhbHNlIGF0bSwgYmVjYXVzZSBpbiBBd2F5QnVpbGRlciB0aGUgdXYgaXMgb25seSBzY2FsZWQgYnkgdGhlIGdlb21ldHJ5XHJcblxyXG4gICAgICAgICAgICBpZiAoKGdlb1NjYWxlVSAhPSBzY2FsZVUpIHx8IChnZW9TY2FsZVYgIT0gc2NhbGVWKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3ViVVZzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNjYWxlVSA9IGdlb1NjYWxlVS9zY2FsZVU7XHJcbiAgICAgICAgICAgICAgICBzY2FsZVYgPSBnZW9TY2FsZVYvc2NhbGVWO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0U3ViVVZzKVxyXG4gICAgICAgICAgICAgICAgc3ViX2dlb20uc2NhbGVVVihzY2FsZVUsIHNjYWxlVik7XHJcblxyXG4gICAgICAgICAgICBnZW9tLmFkZFN1Ykdlb21ldHJ5KHN1Yl9nZW9tKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IFNvbWVob3cgbWFwIGluLXN1YiB0byBvdXQtc3ViIGluZGljZXMgdG8gZW5hYmxlIGxvb2stdXBcclxuICAgICAgICAgICAgLy8gd2hlbiBjcmVhdGluZyBtZXNoZXMgKGFuZCB0aGVpciBtYXRlcmlhbCBhc3NpZ25tZW50cy4pXHJcblxyXG4gICAgICAgICAgICBzdWJzX3BhcnNlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGdlb1NjYWxlVSAhPSAxKSB8fCAoZ2VvU2NhbGVWICE9IDEpKVxyXG4gICAgICAgICAgICBnZW9tLnNjYWxlVVYoZ2VvU2NhbGVVLCBnZW9TY2FsZVYpO1xyXG4gICAgICAgIHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGdlb20sIG5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gZ2VvbTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVHJpYW5nbGVHZW9tZXRyeTogTmFtZSA9IFwiICsgbmFtZSArIFwifCBJZCA9IFwiICsgc3ViX2dlb20uaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vQmxvY2sgSUQgPSAxMVxyXG4gICAgcHJpdmF0ZSBwYXJzZVByaW1pdHZlcyhibG9ja0lEOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBuYW1lOnN0cmluZztcclxuICAgICAgICB2YXIgcHJlZmFiOlByZWZhYkJhc2U7XHJcbiAgICAgICAgdmFyIHByaW1UeXBlOm51bWJlcjtcclxuICAgICAgICB2YXIgc3Vic19wYXJzZWQ6bnVtYmVyO1xyXG4gICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzO1xyXG4gICAgICAgIHZhciBic206TWF0cml4M0Q7XHJcblxyXG4gICAgICAgIC8vIFJlYWQgbmFtZSBhbmQgc3ViIGNvdW50XHJcbiAgICAgICAgbmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICBwcmltVHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgIHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezEwMTp0aGlzLl9nZW9OclR5cGUsIDEwMjp0aGlzLl9nZW9OclR5cGUsIDEwMzp0aGlzLl9nZW9OclR5cGUsIDExMDp0aGlzLl9nZW9OclR5cGUsIDExMTp0aGlzLl9nZW9OclR5cGUsIDMwMTpBV0RQYXJzZXIuVUlOVDE2LCAzMDI6QVdEUGFyc2VyLlVJTlQxNiwgMzAzOkFXRFBhcnNlci5VSU5UMTYsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MLCA3MDM6QVdEUGFyc2VyLkJPT0wsIDcwNDpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cclxuICAgICAgICB2YXIgcHJpbWl0aXZlVHlwZXM6QXJyYXk8c3RyaW5nPiA9IFtcIlVuc3VwcG9ydGVkIFR5cGUtSURcIiwgXCJQcmltaXRpdmVQbGFuZVByZWZhYlwiLCBcIlByaW1pdGl2ZUN1YmVQcmVmYWJcIiwgXCJQcmltaXRpdmVTcGhlcmVQcmVmYWJcIiwgXCJQcmltaXRpdmVDeWxpbmRlclByZWZhYlwiLCBcIlByaW1pdGl2ZXNDb25lUHJlZmFiXCIsIFwiUHJpbWl0aXZlc0NhcHN1bGVQcmVmYWJcIiwgXCJQcmltaXRpdmVzVG9ydXNQcmVmYWJcIl1cclxuXHJcbiAgICAgICAgc3dpdGNoIChwcmltVHlwZSkge1xyXG4gICAgICAgICAgICAvLyB0byBkbywgbm90IGFsbCBwcm9wZXJ0aWVzIGFyZSBzZXQgb24gYWxsIHByaW1pdGl2ZXNcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHByZWZhYiA9IG5ldyBQcmltaXRpdmVQbGFuZVByZWZhYihwcm9wcy5nZXQoMTAxLCAxMDApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxKSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCg3MDEsIHRydWUpLCBwcm9wcy5nZXQoNzAyLCBmYWxzZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ3ViZVByZWZhYihwcm9wcy5nZXQoMTAxLCAxMDApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMTAzLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxKSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCgzMDMsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHByZWZhYiA9IG5ldyBQcmltaXRpdmVTcGhlcmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDEyKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCA1MCksIHByb3BzLmdldCgxMDMsIDEwMCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMSksIHRydWUsIHRydWUsIHRydWUpOyAvLyBib29sNzAxLCBib29sNzAyLCBib29sNzAzLCBib29sNzA0KTtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgKDxQcmltaXRpdmVDeWxpbmRlclByZWZhYj5wcmVmYWIpLnRvcENsb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5nZXQoNzAyLCB0cnVlKSlcclxuICAgICAgICAgICAgICAgICAgICAoPFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiPnByZWZhYikuYm90dG9tQ2xvc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLmdldCg3MDMsIHRydWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICg8UHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWI+cHJlZmFiKS55VXAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHByZWZhYiA9IG5ldyBQcmltaXRpdmVDb25lUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgcHJlZmFiID0gbmV3IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDE1KSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBwcmVmYWIgPSBuZXcgUHJpbWl0aXZlVG9ydXNQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCA1MCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgOCksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHByZWZhYiA9IG5ldyBQcmVmYWJCYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBVTlNVUFBPUlRFRCBQUkVGQUJfVFlQRVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChwcm9wcy5nZXQoMTEwLCAxKSAhPSAxKSB8fCAocHJvcHMuZ2V0KDExMSwgMSkgIT0gMSkpIHtcclxuICAgICAgICAgICAgLy9nZW9tLnN1Ykdlb21ldHJpZXM7XHJcbiAgICAgICAgICAgIC8vZ2VvbS5zY2FsZVVWKHByb3BzLmdldCgxMTAsIDEpLCBwcm9wcy5nZXQoMTExLCAxKSk7IC8vVE9ETyBhZGQgYmFjayBzY2FsaW5nIHRvIHByZWZhYnNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHByZWZhYi5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9wRmluYWxpemVBc3NldChwcmVmYWIsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gcHJlZmFiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpIHtcclxuICAgICAgICAgICAgaWYgKChwcmltVHlwZSA8IDApIHx8IChwcmltVHlwZSA+IDcpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmltVHlwZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBQcmltaXZpdGU6IE5hbWUgPSBcIiArIG5hbWUgKyBcInwgdHlwZSA9IFwiICsgcHJpbWl0aXZlVHlwZXNbcHJpbVR5cGVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmxvY2sgSUQgPSAyMlxyXG4gICAgcHJpdmF0ZSBwYXJzZUNvbnRhaW5lcihibG9ja0lEOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBuYW1lOnN0cmluZztcclxuICAgICAgICB2YXIgcGFyX2lkOm51bWJlcjtcclxuICAgICAgICB2YXIgbXR4Ok1hdHJpeDNEO1xyXG4gICAgICAgIHZhciBjdHI6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcclxuICAgICAgICB2YXIgcGFyZW50OkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblxyXG4gICAgICAgIHBhcl9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcbiAgICAgICAgbXR4ID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcbiAgICAgICAgbmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcclxuICAgICAgICBjdHIgPSBuZXcgRGlzcGxheU9iamVjdENvbnRhaW5lcigpO1xyXG4gICAgICAgIGN0ci50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG4gICAgICAgIHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSk7XHJcblxyXG4gICAgICAgIGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmo6RGlzcGxheU9iamVjdCA9ICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVsxXSkuYWRkQ2hpbGQoY3RyKTtcclxuICAgICAgICAgICAgcGFyZW50TmFtZSA9ICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzWyBibG9ja0lEIF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBPYmplY3RDb250YWluZXIzRFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChjdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW4gQVdEIHZlcnNpb24gMi4xIHdlIHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXHJcbiAgICAgICAgaWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4fSk7XHJcbiAgICAgICAgICAgIGN0ci5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW4gb3RoZXIgdmVyc2lvbnMgd2UgZG8gbm90IHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhlIGV4dHJhUHJvcGVydGllcyBzaG91bGQgb25seSBiZSBzZXQgZm9yIEFXRDIuMS1GaWxlcywgYnV0IGlzIHJlYWQgZm9yIGJvdGggdmVyc2lvbnNcclxuICAgICAgICBjdHIuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gY3RyLCBuYW1lKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGN0cjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQ29udGFpbmVyOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmxvY2sgSUQgPSAyM1xyXG4gICAgcHJpdmF0ZSBwYXJzZU1lc2hJbnN0YW5jZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBudW1fbWF0ZXJpYWxzOm51bWJlcjtcclxuICAgICAgICB2YXIgbWF0ZXJpYWxzX3BhcnNlZDpudW1iZXI7XHJcbiAgICAgICAgdmFyIHBhcmVudDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG4gICAgICAgIHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICB2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XHJcbiAgICAgICAgdmFyIGRhdGFfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICB2YXIgZ2VvbTpHZW9tZXRyeTtcclxuICAgICAgICB2YXIgcmV0dXJuZWRBcnJheUdlb21ldHJ5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChkYXRhX2lkLCBbQXNzZXRUeXBlLkdFT01FVFJZXSlcclxuXHJcbiAgICAgICAgaWYgKHJldHVybmVkQXJyYXlHZW9tZXRyeVswXSkge1xyXG4gICAgICAgICAgICBnZW9tID0gPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5R2VvbWV0cnlbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBHZW9tZXRyeSBmb3IgdGhpcyBNZXNoLiBBIGVtcHR5IEdlb21ldHJ5IGlzIGNyZWF0ZWQhXCIpO1xyXG4gICAgICAgICAgICBnZW9tID0gbmV3IEdlb21ldHJ5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZ2VvSUQgPSBkYXRhX2lkO1xyXG4gICAgICAgIHZhciBtYXRlcmlhbHM6QXJyYXk8TWF0ZXJpYWxCYXNlPiA9IG5ldyBBcnJheTxNYXRlcmlhbEJhc2U+KCk7XHJcbiAgICAgICAgbnVtX21hdGVyaWFscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcbiAgICAgICAgdmFyIG1hdGVyaWFsTmFtZXM6QXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgbWF0ZXJpYWxzX3BhcnNlZCA9IDA7XHJcblxyXG4gICAgICAgIHZhciByZXR1cm5lZEFycmF5TWF0ZXJpYWw6QXJyYXk8YW55PjtcclxuXHJcbiAgICAgICAgd2hpbGUgKG1hdGVyaWFsc19wYXJzZWQgPCBudW1fbWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRfaWQ6bnVtYmVyO1xyXG4gICAgICAgICAgICBtYXRfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICByZXR1cm5lZEFycmF5TWF0ZXJpYWwgPSB0aGlzLmdldEFzc2V0QnlJRChtYXRfaWQsIFtBc3NldFR5cGUuTUFURVJJQUxdKVxyXG4gICAgICAgICAgICBpZiAoKCFyZXR1cm5lZEFycmF5TWF0ZXJpYWxbMF0pICYmIChtYXRfaWQgPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgTWF0ZXJpYWwgTnIgXCIgKyBtYXRlcmlhbHNfcGFyc2VkICsgXCIgKElEID0gXCIgKyBtYXRfaWQgKyBcIiApIGZvciB0aGlzIE1lc2hcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBtOk1hdGVyaWFsQmFzZSA9IDxNYXRlcmlhbEJhc2U+IHJldHVybmVkQXJyYXlNYXRlcmlhbFsxXTtcclxuXHJcbiAgICAgICAgICAgIG1hdGVyaWFscy5wdXNoKG0pO1xyXG4gICAgICAgICAgICBtYXRlcmlhbE5hbWVzLnB1c2gobS5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgIG1hdGVyaWFsc19wYXJzZWQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtZXNoOk1lc2ggPSBuZXcgTWVzaChnZW9tLCBudWxsKTtcclxuICAgICAgICBtZXNoLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcclxuXHJcbiAgICAgICAgdmFyIHJldHVybmVkQXJyYXlQYXJlbnQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKVxyXG5cclxuICAgICAgICBpZiAocmV0dXJuZWRBcnJheVBhcmVudFswXSkge1xyXG4gICAgICAgICAgICB2YXIgb2JqQzpEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV07XHJcbiAgICAgICAgICAgIG9iakMuYWRkQ2hpbGQobWVzaCk7XHJcbiAgICAgICAgICAgIHBhcmVudE5hbWUgPSBvYmpDLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJfaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIE1lc2hcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcclxuICAgICAgICAgICAgKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQobWVzaCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWxzLmxlbmd0aCA+PSAxICYmIG1lc2guc3ViTWVzaGVzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbHNbMF07XHJcbiAgICAgICAgfSBlbHNlIGlmIChtYXRlcmlhbHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2YXIgaTpudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gZWFjaCBzdWItbWVzaCBpbiB0aGUgbWVzaCBhIG1hdGVyaWFsIGZyb20gdGhlIGxpc3QuIElmIG1vcmUgc3ViLW1lc2hlc1xyXG4gICAgICAgICAgICAvLyB0aGFuIG1hdGVyaWFscywgcmVwZWF0IHRoZSBsYXN0IG1hdGVyaWFsIGZvciBhbGwgcmVtYWluaW5nIHN1Yi1tZXNoZXMuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtZXNoLnN1Yk1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5zdWJNZXNoZXNbaV0ubWF0ZXJpYWwgPSBtYXRlcmlhbHNbTWF0aC5taW4obWF0ZXJpYWxzLmxlbmd0aCAtIDEsIGkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMSkpIHtcclxuICAgICAgICAgICAgdmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDgsIDU6QVdEUGFyc2VyLkJPT0x9KTtcclxuICAgICAgICAgICAgbWVzaC5waXZvdCA9IG5ldyBWZWN0b3IzRCg8bnVtYmVyPnByb3BzLmdldCgxLCAwKSwgPG51bWJlcj5wcm9wcy5nZXQoMiwgMCksIDxudW1iZXI+IHByb3BzLmdldCgzLCAwKSk7XHJcbiAgICAgICAgICAgIG1lc2guY2FzdHNTaGFkb3dzID0gcHJvcHMuZ2V0KDUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVzaC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuICAgICAgICB0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtZXNoLCBuYW1lKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1lc2g7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE1lc2g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUgKyBcInwgR2VvbWV0cnktTmFtZSA9IFwiICsgZ2VvbS5uYW1lICsgXCIgfCBTdWJNZXNoZXMgPSBcIiArIG1lc2guc3ViTWVzaGVzLmxlbmd0aCArIFwiIHwgTWF0LU5hbWVzID0gXCIgKyBtYXRlcmlhbE5hbWVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9CbG9jayBJRCAzMVxyXG4gICAgcHJpdmF0ZSBwYXJzZVNreWJveEluc3RhbmNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHZhciBjdWJlVGV4QWRkcjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuICAgICAgICB2YXIgcmV0dXJuZWRBcnJheUN1YmVUZXg6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGN1YmVUZXhBZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG4gICAgICAgIGlmICgoIXJldHVybmVkQXJyYXlDdWJlVGV4WzBdKSAmJiAoY3ViZVRleEFkZHIgIT0gMCkpXHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBDdWJldGV4dHVyZSAoSUQgPSBcIiArIGN1YmVUZXhBZGRyICsgXCIgKSBmb3IgdGhpcyBTa3lib3hcIik7XHJcbiAgICAgICAgdmFyIGFzc2V0OlNreWJveCA9IG5ldyBTa3lib3goPEltYWdlQ3ViZVRleHR1cmU+IHJldHVybmVkQXJyYXlDdWJlVGV4WzFdKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbClcclxuICAgICAgICBhc3NldC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGFzc2V0LCBuYW1lKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBTa3lib3g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgQ3ViZVRleHR1cmUtTmFtZSA9IFwiICsgKDxJbWFnZUN1YmVUZXh0dXJlPiByZXR1cm5lZEFycmF5Q3ViZVRleFsxXSkubmFtZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vQmxvY2sgSUQgPSA0MVxyXG4gICAgcHJpdmF0ZSBwYXJzZUxpZ2h0KGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGxpZ2h0OkxpZ2h0QmFzZTtcclxuICAgICAgICB2YXIgbmV3U2hhZG93TWFwcGVyOlNoYWRvd01hcHBlckJhc2U7XHJcblxyXG4gICAgICAgIHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICB2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHZhciBsaWdodFR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcbiAgICAgICAgdmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9wcm9wc05yVHlwZSwgMjp0aGlzLl9wcm9wc05yVHlwZSwgMzpBV0RQYXJzZXIuQ09MT1IsIDQ6dGhpcy5fcHJvcHNOclR5cGUsIDU6dGhpcy5fcHJvcHNOclR5cGUsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkNPTE9SLCA4OnRoaXMuX3Byb3BzTnJUeXBlLCA5OkFXRFBhcnNlci5VSU5UOCwgMTA6QVdEUGFyc2VyLlVJTlQ4LCAxMTp0aGlzLl9wcm9wc05yVHlwZSwgMTI6QVdEUGFyc2VyLlVJTlQxNiwgMjE6dGhpcy5fbWF0cml4TnJUeXBlLCAyMjp0aGlzLl9tYXRyaXhOclR5cGUsIDIzOnRoaXMuX21hdHJpeE5yVHlwZX0pO1xyXG4gICAgICAgIHZhciBzaGFkb3dNYXBwZXJUeXBlOm51bWJlciA9IHByb3BzLmdldCg5LCAwKTtcclxuICAgICAgICB2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xyXG4gICAgICAgIHZhciBsaWdodFR5cGVzOkFycmF5PHN0cmluZz4gPSBbXCJVbnN1cHBvcnRlZCBMaWdodFR5cGVcIiwgXCJQb2ludExpZ2h0XCIsIFwiRGlyZWN0aW9uYWxMaWdodFwiXTtcclxuICAgICAgICB2YXIgc2hhZG93TWFwcGVyVHlwZXM6QXJyYXk8c3RyaW5nPiA9IFtcIk5vIFNoYWRvd01hcHBlclwiLCBcIkRpcmVjdGlvbmFsU2hhZG93TWFwcGVyXCIsIFwiTmVhckRpcmVjdGlvbmFsU2hhZG93TWFwcGVyXCIsIFwiQ2FzY2FkZVNoYWRvd01hcHBlclwiLCBcIkN1YmVNYXBTaGFkb3dNYXBwZXJcIl07XHJcblxyXG4gICAgICAgIGlmIChsaWdodFR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBsaWdodCA9IG5ldyBQb2ludExpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAoPFBvaW50TGlnaHQ+IGxpZ2h0KS5yYWRpdXMgPSBwcm9wcy5nZXQoMSwgOTAwMDApO1xyXG4gICAgICAgICAgICAoPFBvaW50TGlnaHQ+IGxpZ2h0KS5mYWxsT2ZmID0gcHJvcHMuZ2V0KDIsIDEwMDAwMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hhZG93TWFwcGVyVHlwZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dNYXBwZXJUeXBlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGFkb3dNYXBwZXIgPSBuZXcgQ3ViZU1hcFNoYWRvd01hcHBlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaWdodC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxpZ2h0VHlwZSA9PSAyKSB7XHJcblxyXG4gICAgICAgICAgICBsaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KHByb3BzLmdldCgyMSwgMCksIHByb3BzLmdldCgyMiwgLTEpLCBwcm9wcy5nZXQoMjMsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaGFkb3dNYXBwZXJUeXBlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd01hcHBlclR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoYWRvd01hcHBlciA9IG5ldyBEaXJlY3Rpb25hbFNoYWRvd01hcHBlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgKHNoYWRvd01hcHBlclR5cGUgPT0gMilcclxuICAgICAgICAgICAgICAgIC8vICBuZXdTaGFkb3dNYXBwZXIgPSBuZXcgTmVhckRpcmVjdGlvbmFsU2hhZG93TWFwcGVyKHByb3BzLmdldCgxMSwgMC41KSk7XHJcbiAgICAgICAgICAgICAgICAvL2lmIChzaGFkb3dNYXBwZXJUeXBlID09IDMpXHJcbiAgICAgICAgICAgICAgICAvLyAgIG5ld1NoYWRvd01hcHBlciA9IG5ldyBDYXNjYWRlU2hhZG93TWFwcGVyKHByb3BzLmdldCgxMiwgMykpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGlnaHQuY29sb3IgPSBwcm9wcy5nZXQoMywgMHhmZmZmZmYpO1xyXG4gICAgICAgIGxpZ2h0LnNwZWN1bGFyID0gcHJvcHMuZ2V0KDQsIDEuMCk7XHJcbiAgICAgICAgbGlnaHQuZGlmZnVzZSA9IHByb3BzLmdldCg1LCAxLjApO1xyXG4gICAgICAgIGxpZ2h0LmFtYmllbnRDb2xvciA9IHByb3BzLmdldCg3LCAweGZmZmZmZik7XHJcbiAgICAgICAgbGlnaHQuYW1iaWVudCA9IHByb3BzLmdldCg4LCAwLjApO1xyXG5cclxuICAgICAgICAvLyBpZiBhIHNoYWRvd01hcHBlciBoYXMgYmVlbiBjcmVhdGVkLCBhZGp1c3QgdGhlIGRlcHRoTWFwU2l6ZSBpZiBuZWVkZWQsIGFzc2lnbiB0byBsaWdodCBhbmQgc2V0IGNhc3RTaGFkb3dzIHRvIHRydWVcclxuICAgICAgICBpZiAobmV3U2hhZG93TWFwcGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdTaGFkb3dNYXBwZXIgaW5zdGFuY2VvZiBDdWJlTWFwU2hhZG93TWFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuZ2V0KDEwLCAxKSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hhZG93TWFwcGVyLmRlcHRoTWFwU2l6ZSA9IHRoaXMuX2RlcHRoU2l6ZURpY1twcm9wcy5nZXQoMTAsIDEpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5nZXQoMTAsIDIpICE9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGFkb3dNYXBwZXIuZGVwdGhNYXBTaXplID0gdGhpcy5fZGVwdGhTaXplRGljW3Byb3BzLmdldCgxMCwgMildO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaWdodC5zaGFkb3dNYXBwZXIgPSBuZXdTaGFkb3dNYXBwZXI7XHJcbiAgICAgICAgICAgIGxpZ2h0LmNhc3RzU2hhZG93cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyX2lkICE9IDApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV0pLmFkZENoaWxkKGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5hbWUgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV0pLm5hbWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBMaWdodFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XHJcbiAgICAgICAgICAgICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGxpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuICAgICAgICB0aGlzLl9wRmluYWxpemVBc3NldCg8IElBc3NldD4gbGlnaHQsIG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGxpZ2h0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTGlnaHQ6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVHlwZSA9IFwiICsgbGlnaHRUeXBlc1tsaWdodFR5cGVdICsgXCIgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSArIFwiIHwgU2hhZG93TWFwcGVyLVR5cGUgPSBcIiArIHNoYWRvd01hcHBlclR5cGVzW3NoYWRvd01hcHBlclR5cGVdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9CbG9jayBJRCA9IDQzXHJcbiAgICBwcml2YXRlIHBhcnNlQ2FtZXJhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICB2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XHJcbiAgICAgICAgdmFyIHByb2plY3Rpb246UHJvamVjdGlvbkJhc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpOyAvL3NldCBhcyBhY3RpdmUgY2FtZXJhXHJcbiAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTsgLy9sZW5ndGhvZiBsZW5zZXMgLSBub3QgdXNlZCB5ZXRcclxuXHJcbiAgICAgICAgdmFyIHByb2plY3Rpb250eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XHJcbiAgICAgICAgdmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMTA0OnRoaXMuX3Byb3BzTnJUeXBlfSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocHJvamVjdGlvbnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSA1MDAxOlxyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbiA9IG5ldyBQZXJzcGVjdGl2ZVByb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgNjApKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDUwMDI6XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uID0gbmV3IE9ydGhvZ3JhcGhpY1Byb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgNTAwKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1MDAzOlxyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbiA9IG5ldyBPcnRob2dyYXBoaWNPZmZDZW50ZXJQcm9qZWN0aW9uKHByb3BzLmdldCgxMDEsIC00MDApLCBwcm9wcy5nZXQoMTAyLCA0MDApLCBwcm9wcy5nZXQoMTAzLCAtMzAwKSwgcHJvcHMuZ2V0KDEwNCwgMzAwKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5zdXBwb3J0ZWRMZW5zdHlwZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjYW1lcmE6Q2FtZXJhID0gbmV3IENhbWVyYShwcm9qZWN0aW9uKTtcclxuICAgICAgICBjYW1lcmEudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xyXG5cclxuICAgICAgICB2YXIgcmV0dXJuZWRBcnJheVBhcmVudDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pXHJcblxyXG4gICAgICAgIGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgb2JqQzpEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV07XHJcbiAgICAgICAgICAgIG9iakMuYWRkQ2hpbGQoY2FtZXJhKTtcclxuXHJcbiAgICAgICAgICAgIHBhcmVudE5hbWUgPSBvYmpDLm5hbWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyX2lkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBDYW1lcmFcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcclxuICAgICAgICAgICAgKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQoY2FtZXJhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbWVyYS5uYW1lID0gbmFtZTtcclxuICAgICAgICBwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xyXG4gICAgICAgIGNhbWVyYS5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcclxuICAgICAgICBjYW1lcmEuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcEZpbmFsaXplQXNzZXQoY2FtZXJhLCBuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjYW1lcmFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQ2FtZXJhOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFByb2plY3Rpb250eXBlID0gXCIgKyBwcm9qZWN0aW9uICsgXCIgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0Jsb2NrIElEID0gNTFcclxuICAgIHByaXZhdGUgcGFyc2VMaWdodFBpY2tlcihibG9ja0lEOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICB2YXIgbnVtTGlnaHRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICB2YXIgbGlnaHRzQXJyYXk6QXJyYXk8TGlnaHRCYXNlPiA9IG5ldyBBcnJheTxMaWdodEJhc2U+KCk7XHJcbiAgICAgICAgdmFyIGs6bnVtYmVyID0gMDtcclxuICAgICAgICB2YXIgbGlnaHRJRDpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICB2YXIgcmV0dXJuZWRBcnJheUxpZ2h0OkFycmF5PGFueT47XHJcbiAgICAgICAgdmFyIGxpZ2h0c0FycmF5TmFtZXM6QXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcblxyXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBudW1MaWdodHM7IGsrKykge1xyXG4gICAgICAgICAgICBsaWdodElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICAgICAgcmV0dXJuZWRBcnJheUxpZ2h0ID0gdGhpcy5nZXRBc3NldEJ5SUQobGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pXHJcblxyXG4gICAgICAgICAgICBpZiAocmV0dXJuZWRBcnJheUxpZ2h0WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBsaWdodHNBcnJheS5wdXNoKDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlMaWdodFsxXSk7XHJcbiAgICAgICAgICAgICAgICBsaWdodHNBcnJheU5hbWVzLnB1c2goKCA8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5TGlnaHRbMV0pLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgTGlnaHQgTnIgXCIgKyBrICsgXCIgKElEID0gXCIgKyBsaWdodElEICsgXCIgKSBmb3IgdGhpcyBMaWdodFBpY2tlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxpZ2h0c0FycmF5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGhpcyBMaWdodFBpY2tlciwgY2F1c2Ugbm8gTGlnaHQgd2FzIGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy9yZXR1cm4gd2l0aG91dCBhbnkgbW9yZSBwYXJzaW5nIGZvciB0aGlzIGJsb2NrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbGlnaHRQaWNrOkxpZ2h0UGlja2VyQmFzZSA9IG5ldyBTdGF0aWNMaWdodFBpY2tlcihsaWdodHNBcnJheSk7XHJcbiAgICAgICAgbGlnaHRQaWNrLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuICAgICAgICB0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBsaWdodFBpY2ssIG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGxpZ2h0UGlja1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFN0YXRpY0xpZ2h0UGlja2VyOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgbGlnaHRzQXJyYXlOYW1lcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9CbG9jayBJRCA9IDgxXHJcbiAgICBwcml2YXRlIHBhcnNlTWF0ZXJpYWwoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBUT0RPOiBub3QgdXNlZFxyXG4gICAgICAgIC8vLy9ibG9ja0xlbmd0aCA9IGJsb2NrLmxlbjtcclxuICAgICAgICB2YXIgbmFtZTpzdHJpbmc7XHJcbiAgICAgICAgdmFyIHR5cGU6bnVtYmVyO1xyXG4gICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzO1xyXG4gICAgICAgIHZhciBtYXQ6TWV0aG9kTWF0ZXJpYWw7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXM6T2JqZWN0O1xyXG4gICAgICAgIHZhciBmaW5hbGl6ZTpib29sZWFuO1xyXG4gICAgICAgIHZhciBudW1fbWV0aG9kczpudW1iZXI7XHJcbiAgICAgICAgdmFyIG1ldGhvZHNfcGFyc2VkOm51bWJlcjtcclxuICAgICAgICB2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG5cclxuICAgICAgICBuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuICAgICAgICBudW1fbWV0aG9kcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuICAgICAgICAvLyBSZWFkIG1hdGVyaWFsIG51bWVyaWNhbCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgLy8gKDE9Y29sb3IsIDI9Yml0bWFwIHVybCwgMTA9YWxwaGEsIDExPWFscGhhX2JsZW5kaW5nLCAxMj1hbHBoYV90aHJlc2hvbGQsIDEzPXJlcGVhdClcclxuICAgICAgICBwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsgMTpBV0RQYXJzZXIuSU5UMzIsIDI6QVdEUGFyc2VyLkJBRERSLCAxMDp0aGlzLl9wcm9wc05yVHlwZSwgMTE6QVdEUGFyc2VyLkJPT0wsIDEyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMzpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cclxuICAgICAgICBtZXRob2RzX3BhcnNlZCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKG1ldGhvZHNfcGFyc2VkIDwgbnVtX21ldGhvZHMpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZF90eXBlOm51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIG1ldGhvZF90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgICAgIG1ldGhvZHNfcGFyc2VkICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkZWJ1Z1N0cmluZzpzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGF0dHJpYnV0ZXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gMSkgeyAvLyBDb2xvciBtYXRlcmlhbFxyXG4gICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIENvbG9yTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgXCI7XHJcbiAgICAgICAgICAgIHZhciBjb2xvcjpudW1iZXI7XHJcbiAgICAgICAgICAgIGNvbG9yID0gcHJvcHMuZ2V0KDEsIDB4ZmZmZmZmKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWxNb2RlIDwgMikge1xyXG4gICAgICAgICAgICAgICAgbWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yLCBwcm9wcy5nZXQoMTAsIDEuMCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yKTtcclxuICAgICAgICAgICAgICAgIG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0ZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAodGV4X2FkZHIgPiAwKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBEaWZmc3VlVGV4dHVyZSAoSUQgPSBcIiArIHRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNYXRlcmlhbFwiKTtcclxuXHJcbiAgICAgICAgICAgIG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbCg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRlcmlhbE1vZGUgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWF0LmFscGhhID0gcHJvcHMuZ2V0KDEwLCAxLjApO1xyXG4gICAgICAgICAgICAgICAgZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIG1hdC5uYW1lO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcclxuICAgICAgICAgICAgICAgIGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoTXVsdGlQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIG1hdC5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQuZXh0cmEgPSBhdHRyaWJ1dGVzO1xyXG4gICAgICAgIG1hdC5hbHBoYVRocmVzaG9sZCA9IHByb3BzLmdldCgxMiwgMC4wKTtcclxuICAgICAgICBtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlYnVnU3RyaW5nKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsb2NrIElEID0gODEgQVdEMi4xXHJcbiAgICBwcml2YXRlIHBhcnNlTWF0ZXJpYWxfdjEoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgbWF0Ok1ldGhvZE1hdGVyaWFsO1xyXG4gICAgICAgIHZhciBub3JtYWxUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcbiAgICAgICAgdmFyIHNwZWNUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcbiAgICAgICAgdmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcclxuXHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgIHZhciBudW1fbWV0aG9kczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuICAgICAgICB2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMzIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgNDpBV0RQYXJzZXIuVUlOVDgsIDU6QVdEUGFyc2VyLkJPT0wsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkJPT0wsIDg6QVdEUGFyc2VyLkJPT0wsIDk6QVdEUGFyc2VyLlVJTlQ4LCAxMDp0aGlzLl9wcm9wc05yVHlwZSwgMTE6QVdEUGFyc2VyLkJPT0wsIDEyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMzpBV0RQYXJzZXIuQk9PTCwgMTU6dGhpcy5fcHJvcHNOclR5cGUsIDE2OkFXRFBhcnNlci5VSU5UMzIsIDE3OkFXRFBhcnNlci5CQUREUiwgMTg6dGhpcy5fcHJvcHNOclR5cGUsIDE5OnRoaXMuX3Byb3BzTnJUeXBlLCAyMDpBV0RQYXJzZXIuVUlOVDMyLCAyMTpBV0RQYXJzZXIuQkFERFIsIDIyOkFXRFBhcnNlci5CQUREUn0pO1xyXG4gICAgICAgIHZhciBzcGV6aWFsVHlwZTpudW1iZXIgPSBwcm9wcy5nZXQoNCwgMCk7XHJcbiAgICAgICAgdmFyIGRlYnVnU3RyaW5nOnN0cmluZyA9IFwiUGFyc2VkIE1hdGVyaWFsIFwiO1xyXG5cclxuICAgICAgICBpZiAoc3BlemlhbFR5cGUgPj0gMikgey8vdGhpcyBpcyBubyBzdXBwb3J0ZWQgbWF0ZXJpYWxcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiTWF0ZXJpYWwtc3BlemlhbFR5cGUgJ1wiICsgc3BlemlhbFR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCwgY2FuIG9ubHkgYmUgMDpzaW5nbGVQYXNzLCAxOk11bHRpUGFzcyAhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA8PSAyKSB7Ly8gQ29sb3IgbWF0ZXJpYWxcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWxNb2RlID09IDEpXHJcbiAgICAgICAgICAgICAgICBzcGV6aWFsVHlwZSA9IDA7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubWF0ZXJpYWxNb2RlID09IDIpXHJcbiAgICAgICAgICAgICAgICBzcGV6aWFsVHlwZSA9IDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3BlemlhbFR5cGUgPCAyKSB7Ly90aGlzIGlzIFNpbmdsZVBhc3Mgb3IgTXVsdGlQYXNzXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gMSkgey8vIENvbG9yIG1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yOm51bWJlciA9IHByb3BzLmdldCgxLCAweGNjY2NjYyk7Ly9UT0RPIHRlbXBvcmFyaWx5IHN3YXBwZWQgc28gdGhhdCBkaWZmdXNlIGNvbG9yIGdvZXMgdG8gYW1iaWVudFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3BlemlhbFR5cGUgPT0gMSkgey8vXHRNdWx0aVBhc3NNYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIENvbG9yTWF0ZXJpYWwoTXVsdGlQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy9cdFNpbmdsZVBhc3NNYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IsIHByb3BzLmdldCgxMCwgMS4wKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC5hbHBoYUJsZW5kaW5nID0gcHJvcHMuZ2V0KDExLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IDIpIHsvLyB0ZXh0dXJlIG1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTsvL1RPRE8gdGVtcG9yYXJpbHkgc3dhcHBlZCBzbyB0aGF0IGRpZmZ1c2UgdGV4dHVyZSBnb2VzIHRvIGFtYmllbnRcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAodGV4X2FkZHIgPiAwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEFtYmllbnRUZXh0dXJlIChJRCA9IFwiICsgdGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dHVyZTpUZXh0dXJlMkRCYXNlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKHRleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3BlemlhbFR5cGUgPT0gMSkgey8vIE11bHRpUGFzc01hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIE1ldGhvZE1hdGVyaWFsKE11bHRpUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyB0ZXh0dXJlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsvL1x0U2luZ2xlUGFzc01hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC5hbHBoYSA9IHByb3BzLmdldCgxMCwgMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0LmFscGhhQmxlbmRpbmcgPSBwcm9wcy5nZXQoMTEsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyB0ZXh0dXJlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaWZmdXNlVGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpZmZ1c2VUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMTcsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChkaWZmdXNlVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChkaWZmdXNlVGV4X2FkZHIgIT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRGlmZnVzZVRleHR1cmUgKElEID0gXCIgKyBkaWZmdXNlVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZEFycmF5WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZ1c2VUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXQuZGlmZnVzZVRleHR1cmUgPSBkaWZmdXNlVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VUZXh0dXJlLU5hbWUgPSBcIiArIGRpZmZ1c2VUZXh0dXJlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbFRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgzLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQobm9ybWFsVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChub3JtYWxUZXhfYWRkciAhPSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBOb3JtYWxUZXh0dXJlIChJRCA9IFwiICsgbm9ybWFsVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArIG5vcm1hbFRleHR1cmUubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3BlY1RleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyMSwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoc3BlY1RleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoc3BlY1RleF9hZGRyICE9IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNwZWN1bGFyVGV4dHVyZSAoSUQgPSBcIiArIHNwZWNUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWRBcnJheVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyVGV4dHVyZS1OYW1lID0gXCIgKyBzcGVjVGV4dHVyZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsaWdodFBpY2tlckFkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIyLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChsaWdodFBpY2tlckFkZHIsIFtBc3NldFR5cGUuTElHSFRfUElDS0VSXSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAobGlnaHRQaWNrZXJBZGRyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodFBpY2tlciAoSUQgPSBcIiArIGxpZ2h0UGlja2VyQWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdC5saWdodFBpY2tlciA9IDxMaWdodFBpY2tlckJhc2U+IHJldHVybmVkQXJyYXlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kZWJ1Z1N0cmluZys9XCIgfCBMaWdodHBpY2tlci1OYW1lID0gXCIrTGlnaHRQaWNrZXJCYXNlKHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0LnNtb290aCA9IHByb3BzLmdldCg1LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG1hdC5taXBtYXAgPSBwcm9wcy5nZXQoNiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBtYXQuYm90aFNpZGVzID0gcHJvcHMuZ2V0KDcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIG1hdC5hbHBoYVByZW11bHRpcGxpZWQgPSBwcm9wcy5nZXQoOCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbWF0LmJsZW5kTW9kZSA9IHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg5LCAwKV07XHJcbiAgICAgICAgICAgICAgICBtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbFRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Lm5vcm1hbE1hcCA9IG5vcm1hbFRleHR1cmU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNwZWNUZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgICAgIG1hdC5zcGVjdWxhck1hcCA9IHNwZWNUZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdC5hbHBoYVRocmVzaG9sZCA9IHByb3BzLmdldCgxMiwgMC4wKTtcclxuICAgICAgICAgICAgICAgIG1hdC5hbWJpZW50ID0gcHJvcHMuZ2V0KDE1LCAxLjApO1xyXG4gICAgICAgICAgICAgICAgbWF0LmRpZmZ1c2VDb2xvciA9IHByb3BzLmdldCgxNiwgMHhmZmZmZmYpO1xyXG4gICAgICAgICAgICAgICAgbWF0LnNwZWN1bGFyID0gcHJvcHMuZ2V0KDE4LCAxLjApO1xyXG4gICAgICAgICAgICAgICAgbWF0Lmdsb3NzID0gcHJvcHMuZ2V0KDE5LCA1MCk7XHJcbiAgICAgICAgICAgICAgICBtYXQuc3BlY3VsYXJDb2xvciA9IHByb3BzLmdldCgyMCwgMHhmZmZmZmYpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2RzX3BhcnNlZDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldElEOm51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobWV0aG9kc19wYXJzZWQgPCBudW1fbWV0aG9kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXRob2RfdHlwZTpudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxOiBBV0RQYXJzZXIuQkFERFIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDI6IEFXRFBhcnNlci5CQUREUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzogQVdEUGFyc2VyLkJBRERSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDE6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDI6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDM6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyMDE6IEFXRFBhcnNlci5VSU5UMzIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMjogQVdEUGFyc2VyLlVJTlQzMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAxOiBBV0RQYXJzZXIuVUlOVDE2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDI6IEFXRFBhcnNlci5VSU5UMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQwMTogQVdEUGFyc2VyLlVJTlQ4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0MDI6IEFXRFBhcnNlci5VSU5UOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNjAxOiBBV0RQYXJzZXIuQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDYwMjogQVdEUGFyc2VyLkNPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3MDE6IEFXRFBhcnNlci5CT09MLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3MDI6IEFXRFBhcnNlci5CT09MLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA4MDE6IEFXRFBhcnNlci5NVFg0eDRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtZXRob2RfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk5OTogLy93cmFwcGVyLU1ldGhvZHMgdGhhdCB3aWxsIGxvYWQgYSBwcmV2aW91cyBwYXJzZWQgRWZmZWt0TWV0aG9kIHJldHVybmVkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuRUZGRUNUU19NRVRIT0RdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRWZmZWN0TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuYWRkRWZmZWN0TWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIiB8IEVmZmVjdE1ldGhvZC1OYW1lID0gXCIgKyAoPEVmZmVjdE1ldGhvZEJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk5ODogLy93cmFwcGVyLU1ldGhvZHMgdGhhdCB3aWxsIGxvYWQgYSBwcmV2aW91cyBwYXJzZWQgU2hhZG93TWFwTWV0aG9kXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2hhZG93TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuc2hhZG93TWV0aG9kID0gcmV0dXJuZWRBcnJheVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIiB8IFNoYWRvd01ldGhvZC1OYW1lID0gXCIgKyAoPFNoYWRvd01ldGhvZEJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IC8vRW52TWFwQW1iaWVudE1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0sIFwiQ3ViZVRleHR1cmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBBbWJpZW50TWV0aG9kTWF0ZXJpYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuYW1iaWVudE1ldGhvZCA9IG5ldyBBbWJpZW50RW52TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdTdHJpbmcgKz0gXCIgfCBBbWJpZW50RW52TWFwTWV0aG9kIHwgRW52TWFwLU5hbWUgPVwiICsgKDxDdWJlVGV4dHVyZUJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTE6IC8vRGVwdGhEaWZmdXNlTWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlRGVwdGhNZXRob2QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZURlcHRoTWV0aG9kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1MjogLy9HcmFkaWVudERpZmZ1c2VNZXRob2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgR3JhZGllbnREaWZmdXNlVGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBHcmFkaWVudERpZmZ1c2VNZXRob2RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlR3JhZGllbnRNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VHcmFkaWVudE1ldGhvZCB8IEdyYWRpZW50RGlmZnVzZVRleHR1cmUtTmFtZSA9XCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1MzogLy9XcmFwRGlmZnVzZU1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZVdyYXBNZXRob2QocHJvcHMuZ2V0KDEwMSwgNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlV3JhcE1ldGhvZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTQ6IC8vTGlnaHRNYXBEaWZmdXNlTWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIExpZ2h0TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIExpZ2h0TWFwRGlmZnVzZU1ldGhvZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VMaWdodE1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCB0aGlzLmJsZW5kTW9kZURpY1twcm9wcy5nZXQoNDAxLCAxMCldLCBmYWxzZSwgbWF0LmRpZmZ1c2VNZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlTGlnaHRNYXBNZXRob2QgfCBMaWdodE1hcFRleHR1cmUtTmFtZSA9XCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1NTogLy9DZWxEaWZmdXNlTWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlQ2VsTWV0aG9kKHByb3BzLmdldCg0MDEsIDMpLCBtYXQuZGlmZnVzZU1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPERpZmZ1c2VDZWxNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zbW9vdGhuZXNzID0gcHJvcHMuZ2V0KDEwMSwgMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZUNlbE1ldGhvZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTY6IC8vU3ViU3VyZmFjZVNjYXR0ZXJpbmdNZXRob2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZCgpOyAvL2RlcHRoTWFwU2l6ZSBhbmQgZGVwdGhNYXBPZmZzZXQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZVN1YlN1cmZhY2VNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zY2F0dGVyaW5nID0gcHJvcHMuZ2V0KDEwMSwgMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkudHJhbnNsdWNlbmN5ID0gcHJvcHMuZ2V0KDEwMiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x0XHRcdFx0XHRcdFx0KDxEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnNjYXR0ZXJDb2xvciA9IHByb3BzLmdldCg2MDEsIDB4ZmZmZmZmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAxOiAvL0FuaXNvdHJvcGljU3BlY3VsYXJNZXRob2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC5zcGVjdWxhck1ldGhvZCA9IG5ldyBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyQW5pc290cm9waWNNZXRob2RcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMjogLy9TcGVjdWxhclBob25nTWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJQaG9uZ01ldGhvZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhclBob25nTWV0aG9kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDM6IC8vQ2VsbFNwZWN1bGFyTWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJDZWxNZXRob2QocHJvcHMuZ2V0KDEwMSwgMC41KSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8U3BlY3VsYXJDZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkuc21vb3RobmVzcyA9IHByb3BzLmdldCgxMDIsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyQ2VsTWV0aG9kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDQ6IC8vU3BlY3VsYXJGcmVzbmVsTWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJGcmVzbmVsTWV0aG9kKHByb3BzLmdldCg3MDEsIHRydWUpLCBtYXQuc3BlY3VsYXJNZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxTcGVjdWxhckZyZXNuZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkuZnJlc25lbFBvd2VyID0gcHJvcHMuZ2V0KDEwMSwgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPFNwZWN1bGFyRnJlc25lbE1ldGhvZD4gbWF0LnNwZWN1bGFyTWV0aG9kKS5ub3JtYWxSZWZsZWN0YW5jZSA9IHByb3BzLmdldCgxMDIsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyRnJlc25lbE1ldGhvZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTUxOi8vSGVpZ2h0TWFwTm9ybWFsTWV0aG9kIC0gdGhpb3MgaXMgbm90IGltcGxlbWVudGVkIGZvciBub3csIGJ1dCBtaWdodCBhcHBlYXIgbGF0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1MjogLy9TaW1wbGVXYXRlck5vcm1hbE1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTZWNvdW5kTm9ybWFsTWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFNpbXBsZVdhdGVyTm9ybWFsTWV0aG9kXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXQubm9ybWFsTWFwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgbm9ybWFsIE1hcCBvbiB0aGlzIE1hdGVyaWFsIHRvIHVzZSB3aXRoIHRoaXMgU2ltcGxlV2F0ZXJOb3JtYWxNZXRob2RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Lm5vcm1hbE1hcCA9IHJldHVybmVkQXJyYXlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQubm9ybWFsTWV0aG9kID0gbmV3IE5vcm1hbFNpbXBsZVdhdGVyTWV0aG9kKG1hdC5ub3JtYWxNYXAsIHJldHVybmVkQXJyYXlbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZCB8IFNlY29uZC1Ob3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArICg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzX3BhcnNlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGU9PTMpe1xyXG4gICAgICAgICAgICB2YXIgY29sb3I6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDB4Y2NjY2NjKTsvL1RPRE8gdGVtcG9yYXJpbHkgc3dhcHBlZCBzbyB0aGF0IGRpZmZ1c2UgY29sb3IgZ29lcyB0byBhbWJpZW50XHJcbiAgICAgICAgICAgIGRlYnVnU3RyaW5nKz1jb2xvcjtcclxuICAgICAgICAgICAgbWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yLCBwcm9wcy5nZXQoMTAsIDEuMCkpO1xyXG4gICAgICAgICAgICBkZWJ1Z1N0cmluZys9IFwiYWxwaGEgPSBcIitwcm9wcy5nZXQoMTAsIDEuMCkrXCIgXCI7XHJcbiAgICAgICAgICAgIG1hdC5ib3RoU2lkZXMgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBtYXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlYnVnU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9CbG9jayBJRCA9IDgyXHJcbiAgICBwcml2YXRlIHBhcnNlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG5cclxuICAgICAgICB2YXIgYXNzZXQ6VGV4dHVyZTJEQmFzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG4gICAgICAgIHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgIHZhciBkYXRhX2xlbjpudW1iZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX3RleHR1cmVfdXNlcnNbdGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCldID0gW107XHJcblxyXG4gICAgICAgIC8vIEV4dGVybmFsXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICBkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcbiAgICAgICAgICAgIHZhciB1cmw6c3RyaW5nO1xyXG4gICAgICAgICAgICB1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBuZXcgVVJMUmVxdWVzdCh1cmwpLCBmYWxzZSwgbnVsbCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhOkJ5dGVBcnJheTtcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBCeXRlQXJyYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZXMoZGF0YSwgMCwgZGF0YV9sZW4pO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQVdEUGFyc2VyIC0gRml4IGZvciBGaXJlRm94IEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzE1MDc1IC5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQ29udmVydGluZyBkYXRhIHRvIGltYWdlIGhlcmUgaW5zdGVhZCBvZiBwYXJzZXIgLSBmaXggRmlyZUZveCBidWcgd2hlcmUgaW1hZ2Ugd2lkdGggLyBoZWlnaHQgaXMgMCB3aGVuIGNyZWF0ZWQgZnJvbSBkYXRhXHJcbiAgICAgICAgICAgIC8vIFRoaXMgZ2l2ZXMgdGhlIGJyb3dzZXIgdGltZSB0byBpbml0aWFsaXNlIGltYWdlIHdpZHRoIC8gaGVpZ2h0LlxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieXRlQXJyYXlUb0ltYWdlKGRhdGEpLCB0cnVlKTtcclxuICAgICAgICAgICAgLy90aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbnVsbCwgZmFsc2UsIGRhdGEsIHRydWUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBmb3Igbm93XHJcbiAgICAgICAgdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmV4dHJhcyA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0dXJlU3R5bGVzTmFtZXM6QXJyYXk8c3RyaW5nPiA9IFtcImV4dGVybmFsXCIsIFwiZW1iZWRcIl1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydCBwYXJzaW5nIGEgXCIgKyB0ZXh0dXJlU3R5bGVzTmFtZXNbdHlwZV0gKyBcIiBCaXRtYXAgZm9yIFRleHR1cmVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0Jsb2NrIElEID0gODNcclxuICAgIHByaXZhdGUgcGFyc2VDdWJlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vYmxvY2tMZW5ndGggPSBibG9jay5sZW47XHJcbiAgICAgICAgdmFyIGRhdGFfbGVuOm51bWJlcjtcclxuICAgICAgICB2YXIgYXNzZXQ6Q3ViZVRleHR1cmVCYXNlO1xyXG4gICAgICAgIHZhciBpOm51bWJlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fY3ViZVRleHR1cmVzID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgICAgICB0aGlzLl90ZXh0dXJlX3VzZXJzWyB0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSBdID0gW107XHJcblxyXG4gICAgICAgIHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlX3VzZXJzW3RoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpXSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLl9jdWJlVGV4dHVyZXMucHVzaChudWxsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEV4dGVybmFsXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmw6c3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMoZGF0YV9sZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpICsgXCIjXCIgKyBpLCBuZXcgVVJMUmVxdWVzdCh1cmwpLCBmYWxzZSwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGE6Qnl0ZUFycmF5O1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IG5ldyBCeXRlQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgKyBcIiNcIiArIGksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieXRlQXJyYXlUb0ltYWdlKGRhdGEpLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWdub3JlIGZvciBub3dcclxuICAgICAgICB0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZXh0cmFzID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGhpcy5fcFBhdXNlQW5kUmV0cmlldmVEZXBlbmRlbmNpZXMoKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpIHtcclxuICAgICAgICAgICAgdmFyIHRleHR1cmVTdHlsZXNOYW1lczpBcnJheTxzdHJpbmc+ID0gW1wiZXh0ZXJuYWxcIiwgXCJlbWJlZFwiXVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0IHBhcnNpbmcgNiBcIiArIHRleHR1cmVTdHlsZXNOYW1lc1t0eXBlXSArIFwiIEJpdG1hcHMgZm9yIEN1YmVUZXh0dXJlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0Jsb2NrIElEID0gOTFcclxuICAgIHByaXZhdGUgcGFyc2VTaGFyZWRNZXRob2RCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBhc3NldDpFZmZlY3RNZXRob2RCYXNlO1xyXG5cclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICBhc3NldCA9IHRoaXMucGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQpO1xyXG4gICAgICAgIHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XHJcbiAgICAgICAgdGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQsIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBFZmZlY3RNZXRob2Q6IE5hbWUgPSBcIiArIGFzc2V0Lm5hbWUgKyBcIiBUeXBlID0gXCIgKyBhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQmxvY2sgSUQgPSA5MlxyXG4gICAgcHJpdmF0ZSBwYXJzZVNoYWRvd01ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHR5cGU6bnVtYmVyO1xyXG4gICAgICAgIHZhciBkYXRhX2xlbjpudW1iZXI7XHJcbiAgICAgICAgdmFyIGFzc2V0OlNoYWRvd01ldGhvZEJhc2U7XHJcbiAgICAgICAgdmFyIHNoYWRvd0xpZ2h0SUQ6bnVtYmVyO1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuICAgICAgICBzaGFkb3dMaWdodElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICB2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoc2hhZG93TGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pO1xyXG5cclxuICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFRhcmdldExpZ2h0IChJRCA9IFwiICsgc2hhZG93TGlnaHRJRCArIFwiICkgZm9yIHRoaXMgU2hhZG93TWV0aG9kIC0gU2hhZG93TWV0aG9kIG5vdCBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3NldCA9IHRoaXMucGFyc2VTaGFkb3dNZXRob2RMaXN0KDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlbMV0sIGJsb2NrSUQpO1xyXG5cclxuICAgICAgICBpZiAoIWFzc2V0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpOyAvLyBJZ25vcmUgZm9yIG5vd1xyXG4gICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0LCB0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSk7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2hhZG93TWFwTWV0aG9kTWV0aG9kOiBOYW1lID0gXCIgKyBhc3NldC5uYW1lICsgXCIgfCBUeXBlID0gXCIgKyBhc3NldCArIFwiIHwgTGlnaHQtTmFtZSA9IFwiLCAoIDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlbMV0gKS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vQmxvY2sgSUQgPSAyNTNcclxuICAgIHByaXZhdGUgcGFyc2VDb21tYW5kKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGhhc0Jsb2Nrczpib29sZWFuID0gKCB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKSA9PSAxICk7XHJcbiAgICAgICAgdmFyIHBhcl9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgIHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuICAgICAgICB2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG4gICAgICAgIHZhciBwYXJlbnRPYmplY3Q6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcclxuICAgICAgICB2YXIgdGFyZ2V0T2JqZWN0OkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblxyXG4gICAgICAgIHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSk7XHJcblxyXG4gICAgICAgIGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE9iamVjdCA9IDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5WzFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG51bUNvbW1hbmRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XHJcbiAgICAgICAgdmFyIHR5cGVDb21tYW5kOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XHJcblxyXG4gICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSfSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZUNvbW1hbmQpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJRDpudW1iZXIgPSBwcm9wcy5nZXQoMSwgMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWRBcnJheVRhcmdldDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5URVhUVVJFX1BST0pFQ1RPUl0pOyAvL2ZvciBubyBvbmx5IGxpZ2h0IGlzIHJlcXVlc3RlZCEhISFcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKCFyZXR1cm5lZEFycmF5VGFyZ2V0WzBdKSAmJiAodGFyZ2V0SUQgIT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgbGlnaHQgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICggZm9yIHRoaXMgQ29tbWFuZEJvY2shXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRPYmplY3QgPSByZXR1cm5lZEFycmF5VGFyZ2V0WzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRPYmplY3QuYWRkQ2hpbGQodGFyZ2V0T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRPYmplY3QudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldE9iamVjdCkge1xyXG4gICAgICAgICAgICBwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0T2JqZWN0LnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xyXG4gICAgICAgICAgICB0YXJnZXRPYmplY3QuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gdGFyZ2V0T2JqZWN0XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhcnNlZCBhIENvbW1hbmRCbG9jazogTmFtZSA9ICdcIiArIG5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9ibG9ja0lEIDI1NVxyXG4gICAgcHJpdmF0ZSBwYXJzZU1ldGFEYXRhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyLCAyOkFXRFBhcnNlci5BV0RTVFJJTkcsIDM6QVdEUGFyc2VyLkFXRFNUUklORywgNDpBV0RQYXJzZXIuQVdEU1RSSU5HLCA1OkFXRFBhcnNlci5BV0RTVFJJTkd9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTWV0YURhdGFCbG9jazogVGltZVN0YW1wICAgICAgICAgPSBcIiArIHByb3BzLmdldCgxLCAwKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgRW5jb2Rlck5hbWUgICAgICAgPSBcIiArIHByb3BzLmdldCgyLCBcInVua25vd25cIikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEVuY29kZXJWZXJzaW9uICAgID0gXCIgKyBwcm9wcy5nZXQoMywgXCJ1bmtub3duXCIpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0b3JOYW1lICAgICA9IFwiICsgcHJvcHMuZ2V0KDQsIFwidW5rbm93blwiKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhdG9yVmVyc2lvbiAgPSBcIiArIHByb3BzLmdldCg1LCBcInVua25vd25cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2Jsb2NrSUQgMjU0XHJcbiAgICBwcml2YXRlIHBhcnNlTmFtZVNwYWNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGlkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgIHZhciBuYW1lU3BhY2VTdHJpbmc6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBOYW1lU3BhY2VCbG9jazogSUQgPSBcIiArIGlkICsgXCIgfCBTdHJpbmcgPSBcIiArIG5hbWVTcGFjZVN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLVBhcnNlciBVVElMUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHRoaXMgZnVuY3Rpb25zIHJlYWRzIGFuZCBjcmVhdGVzIGEgU2hhZG93TWV0aG9kTWV0aG9kXHJcbiAgICBwcml2YXRlIHBhcnNlU2hhZG93TWV0aG9kTGlzdChsaWdodDpMaWdodEJhc2UsIGJsb2NrSUQ6bnVtYmVyKTpTaGFkb3dNZXRob2RCYXNlXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICB2YXIgc2hhZG93TWV0aG9kOlNoYWRvd01ldGhvZEJhc2U7XHJcbiAgICAgICAgdmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgMTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMjAxOkFXRFBhcnNlci5VSU5UMzIsIDIwMjpBV0RQYXJzZXIuVUlOVDMyLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDQwMTpBV0RQYXJzZXIuVUlOVDgsIDQwMjpBV0RQYXJzZXIuVUlOVDgsIDYwMTpBV0RQYXJzZXIuQ09MT1IsIDYwMjpBV0RQYXJzZXIuQ09MT1IsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MLCA4MDE6QVdEUGFyc2VyLk1UWDR4NH0pO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0SUQ6bnVtYmVyO1xyXG4gICAgICAgIHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT5cclxuICAgICAgICBzd2l0Y2ggKG1ldGhvZFR5cGUpIHtcclxuICAgICAgICAgICAgLy9cdFx0XHRcdGNhc2UgMTAwMTogLy9DYXNjYWRlU2hhZG93TWFwTWV0aG9kXHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG4gICAgICAgICAgICAvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlNIQURPV19NQVBfTUVUSE9EXSk7XHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG4gICAgICAgICAgICAvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2hhZG93QmFzZU1ldGhvZCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBDYXNjYWRlU2hhZG93TWFwTWV0aG9kIC0gU2hhZG93TWV0aG9kIG5vdCBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICAvL1x0XHRcdFx0XHRcdHJldHVybiBzaGFkb3dNZXRob2Q7XHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgLy9cdFx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IENhc2NhZGVTaGFkb3dNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRcdGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDI6IC8vU2hhZG93TmVhck1ldGhvZFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTaGFkb3dCYXNlTWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFNoYWRvd05lYXJNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoYWRvd01ldGhvZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dOZWFyTWV0aG9kKDxTaGFkb3dNZXRob2RCYXNlPiByZXR1cm5lZEFycmF5WzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDExMDE6IC8vU2hhZG93RmlsdGVyZWRNZXRob2RcclxuXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RmlsdGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICg8U2hhZG93RmlsdGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcclxuICAgICAgICAgICAgICAgICg8U2hhZG93RmlsdGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxMTAyOiAvL1NoYWRvd0RpdGhlcmVkTWV0aG9kXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dEaXRoZXJlZE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQsIDxudW1iZXI+IHByb3BzLmdldCgyMDEsIDUpKTtcclxuICAgICAgICAgICAgICAgICg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcclxuICAgICAgICAgICAgICAgICg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcclxuICAgICAgICAgICAgICAgICg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkucmFuZ2UgPSBwcm9wcy5nZXQoMTAzLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMTAzOiAvL1NoYWRvd1NvZnRNZXRob2RcclxuXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93U29mdE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQsIDxudW1iZXI+IHByb3BzLmdldCgyMDEsIDUpKTtcclxuICAgICAgICAgICAgICAgICg8U2hhZG93U29mdE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgKDxTaGFkb3dTb2Z0TWV0aG9kPiBzaGFkb3dNZXRob2QpLmVwc2lsb24gPSBwcm9wcy5nZXQoMTAyLCAwLjAwMik7XHJcbiAgICAgICAgICAgICAgICAoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkucmFuZ2UgPSBwcm9wcy5nZXQoMTAzLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMTA0OiAvL1NoYWRvd0hhcmRNZXRob2RcclxuICAgICAgICAgICAgICAgIHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dIYXJkTWV0aG9kKGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgKDxTaGFkb3dIYXJkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmVwc2lsb24gPSBwcm9wcy5nZXQoMTAyLCAwLjAwMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHJldHVybiBzaGFkb3dNZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy9CbG9jayBJRCAxMDFcclxuICAgIHByaXZhdGUgcGFyc2VTa2VsZXRvbihibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICB2YXIgbnVtX2pvaW50czpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcbiAgICAgICAgdmFyIHNrZWxldG9uOlNrZWxldG9uID0gbmV3IFNrZWxldG9uKCk7XHJcbiAgICAgICAgdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIERpc2NhcmQgcHJvcGVydGllcyBmb3Igbm93XHJcblxyXG4gICAgICAgIHZhciBqb2ludHNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGpvaW50c19wYXJzZWQgPCBudW1fam9pbnRzKSB7XHJcbiAgICAgICAgICAgIHZhciBqb2ludDpTa2VsZXRvbkpvaW50O1xyXG4gICAgICAgICAgICB2YXIgaWJwOk1hdHJpeDNEO1xyXG4gICAgICAgICAgICAvLyBJZ25vcmUgam9pbnQgaWRcclxuICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG4gICAgICAgICAgICBqb2ludCA9IG5ldyBTa2VsZXRvbkpvaW50KCk7XHJcbiAgICAgICAgICAgIGpvaW50LnBhcmVudEluZGV4ID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpIC0gMTsgLy8gMD1udWxsIGluIEFXRFxyXG4gICAgICAgICAgICBqb2ludC5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuICAgICAgICAgICAgaWJwID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcbiAgICAgICAgICAgIGpvaW50LmludmVyc2VCaW5kUG9zZSA9IGlicC5yYXdEYXRhO1xyXG4gICAgICAgICAgICAvLyBJZ25vcmUgam9pbnQgcHJvcHMvYXR0cmlidXRlcyBmb3Igbm93XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuICAgICAgICAgICAgc2tlbGV0b24uam9pbnRzLnB1c2goam9pbnQpO1xyXG4gICAgICAgICAgICBqb2ludHNfcGFyc2VkKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNjYXJkIGF0dHJpYnV0ZXMgZm9yIG5vd1xyXG4gICAgICAgIHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHNrZWxldG9uLCBuYW1lKTtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHNrZWxldG9uO1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbjogTmFtZSA9IFwiICsgc2tlbGV0b24ubmFtZSArIFwiIHwgTnVtYmVyIG9mIEpvaW50cyA9IFwiICsgam9pbnRzX3BhcnNlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9CbG9jayBJRCA9IDEwMlxyXG4gICAgcHJpdmF0ZSBwYXJzZVNrZWxldG9uUG9zZShibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICB2YXIgbnVtX2pvaW50czpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcbiAgICAgICAgdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIElnbm9yZSBwcm9wZXJ0aWVzIGZvciBub3dcclxuXHJcbiAgICAgICAgdmFyIHBvc2U6U2tlbGV0b25Qb3NlID0gbmV3IFNrZWxldG9uUG9zZSgpO1xyXG5cclxuICAgICAgICB2YXIgam9pbnRzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xyXG4gICAgICAgIHdoaWxlIChqb2ludHNfcGFyc2VkIDwgbnVtX2pvaW50cykge1xyXG4gICAgICAgICAgICB2YXIgam9pbnRfcG9zZTpKb2ludFBvc2U7XHJcbiAgICAgICAgICAgIHZhciBoYXNfdHJhbnNmb3JtOm51bWJlciAvKnVpbnQqLztcclxuICAgICAgICAgICAgam9pbnRfcG9zZSA9IG5ldyBKb2ludFBvc2UoKTtcclxuICAgICAgICAgICAgaGFzX3RyYW5zZm9ybSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoaGFzX3RyYW5zZm9ybSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXR4X2RhdGE6QXJyYXk8bnVtYmVyPiA9IHRoaXMucGFyc2VNYXRyaXg0M1Jhd0RhdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbXR4Ok1hdHJpeDNEID0gbmV3IE1hdHJpeDNEKG10eF9kYXRhKTtcclxuICAgICAgICAgICAgICAgIGpvaW50X3Bvc2Uub3JpZW50YXRpb24uZnJvbU1hdHJpeChtdHgpO1xyXG4gICAgICAgICAgICAgICAgam9pbnRfcG9zZS50cmFuc2xhdGlvbi5jb3B5RnJvbShtdHgucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2Uuam9pbnRQb3Nlc1tqb2ludHNfcGFyc2VkXSA9IGpvaW50X3Bvc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgam9pbnRzX3BhcnNlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTa2lwIGF0dHJpYnV0ZXMgZm9yIG5vd1xyXG4gICAgICAgIHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHBvc2UsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gcG9zZTtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b25Qb3NlOiBOYW1lID0gXCIgKyBwb3NlLm5hbWUgKyBcIiB8IE51bWJlciBvZiBKb2ludHMgPSBcIiArIGpvaW50c19wYXJzZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYmxvY2tJRCAxMDNcclxuICAgIHByaXZhdGUgcGFyc2VTa2VsZXRvbkFuaW1hdGlvbihibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBmcmFtZV9kdXI6bnVtYmVyO1xyXG4gICAgICAgIHZhciBwb3NlX2FkZHI6bnVtYmVyIC8qdWludCovO1xyXG4gICAgICAgIHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICB2YXIgY2xpcDpTa2VsZXRvbkNsaXBOb2RlID0gbmV3IFNrZWxldG9uQ2xpcE5vZGUoKTtcclxuICAgICAgICB2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcbiAgICAgICAgdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIElnbm9yZSBwcm9wZXJ0aWVzIGZvciBub3dcclxuXHJcbiAgICAgICAgdmFyIGZyYW1lc19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcclxuICAgICAgICB2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG4gICAgICAgIHdoaWxlIChmcmFtZXNfcGFyc2VkIDwgbnVtX2ZyYW1lcykge1xyXG4gICAgICAgICAgICBwb3NlX2FkZHIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICBmcmFtZV9kdXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcbiAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChwb3NlX2FkZHIsIFtBc3NldFR5cGUuU0tFTEVUT05fUE9TRV0pO1xyXG4gICAgICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2tlbGV0b25Qb3NlIEZyYW1lICMgXCIgKyBmcmFtZXNfcGFyc2VkICsgXCIgKElEID0gXCIgKyBwb3NlX2FkZHIgKyBcIiApIGZvciB0aGlzIFNrZWxldG9uQ2xpcE5vZGVcIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNsaXAuYWRkRnJhbWUoPFNrZWxldG9uUG9zZT4gdGhpcy5fYmxvY2tzW3Bvc2VfYWRkcl0uZGF0YSwgZnJhbWVfZHVyKTtcclxuICAgICAgICAgICAgZnJhbWVzX3BhcnNlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xpcC5mcmFtZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IHRoaXMgU2tlbGV0b25DbGlwTm9kZSwgYmVjYXVzZSBubyBGcmFtZXMgd2hlcmUgc2V0LlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZ25vcmUgYXR0cmlidXRlcyBmb3Igbm93XHJcbiAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGhpcy5fcEZpbmFsaXplQXNzZXQoY2xpcCwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjbGlwO1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbkNsaXBOb2RlOiBOYW1lID0gXCIgKyBjbGlwLm5hbWUgKyBcIiB8IE51bWJlciBvZiBGcmFtZXMgPSBcIiArIGNsaXAuZnJhbWVzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9CbG9jayBJRCA9IDExMSAvICBCbG9jayBJRCA9IDExMlxyXG4gICAgcHJpdmF0ZSBwYXJzZU1lc2hQb3NlQW5pbWF0aW9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovLCBwb3NlT25seTpib29sZWFuID0gZmFsc2UpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSAxO1xyXG4gICAgICAgIHZhciBudW1fc3VibWVzaGVzOm51bWJlciAvKnVpbnQqLztcclxuICAgICAgICB2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki87XHJcbiAgICAgICAgdmFyIHN1Yk1lc2hQYXJzZWQ6bnVtYmVyIC8qdWludCovO1xyXG4gICAgICAgIHZhciBmcmFtZV9kdXI6bnVtYmVyO1xyXG4gICAgICAgIHZhciB4Om51bWJlcjtcclxuICAgICAgICB2YXIgeTpudW1iZXI7XHJcbiAgICAgICAgdmFyIHo6bnVtYmVyO1xyXG4gICAgICAgIHZhciBzdHJfbGVuOm51bWJlcjtcclxuICAgICAgICB2YXIgc3RyX2VuZDpudW1iZXI7XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5Okdlb21ldHJ5O1xyXG4gICAgICAgIHZhciBzdWJHZW9tOlRyaWFuZ2xlU3ViR2VvbWV0cnk7XHJcbiAgICAgICAgdmFyIGlkeDpudW1iZXIgLyppbnQqLyA9IDA7XHJcbiAgICAgICAgdmFyIGNsaXA6VmVydGV4Q2xpcE5vZGUgPSBuZXcgVmVydGV4Q2xpcE5vZGUoKTtcclxuICAgICAgICB2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+IC8qdWludCovO1xyXG4gICAgICAgIHZhciB2ZXJ0czpBcnJheTxudW1iZXI+O1xyXG4gICAgICAgIHZhciBudW1fU3RyZWFtczpudW1iZXIgLyppbnQqLyA9IDA7XHJcbiAgICAgICAgdmFyIHN0cmVhbXNQYXJzZWQ6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG4gICAgICAgIHZhciBzdHJlYW10eXBlczpBcnJheTxudW1iZXI+IC8qaW50Ki8gPSBuZXcgQXJyYXk8bnVtYmVyPigpIC8qaW50Ki87XHJcbiAgICAgICAgdmFyIHByb3BzOkFXRFByb3BlcnRpZXM7XHJcbiAgICAgICAgdmFyIHRoaXNHZW86R2VvbWV0cnk7XHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHZhciBnZW9BZHJlc3M6bnVtYmVyIC8qaW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgIHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChnZW9BZHJlc3MsIFtBc3NldFR5cGUuR0VPTUVUUlldKTtcclxuICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIHRhcmdldC1HZW9tZXRyeS1PYmplY3QgXCIgKyBnZW9BZHJlc3MgKyBcIiApIGZvciB0aGlzIFZlcnRleENsaXBOb2RlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1dnM6QXJyYXk8QXJyYXk8bnVtYmVyPj4gPSB0aGlzLmdldFVWRm9yVmVydGV4QW5pbWF0aW9uKGdlb0FkcmVzcyk7XHJcbiAgICAgICAgaWYgKCFwb3NlT25seSlcclxuICAgICAgICAgICAgbnVtX2ZyYW1lcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcbiAgICAgICAgbnVtX3N1Ym1lc2hlcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICBudW1fU3RyZWFtcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICBzdHJlYW1zUGFyc2VkID0gMDtcclxuICAgICAgICB3aGlsZSAoc3RyZWFtc1BhcnNlZCA8IG51bV9TdHJlYW1zKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbXR5cGVzLnB1c2godGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpKTtcclxuICAgICAgICAgICAgc3RyZWFtc1BhcnNlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CT09MLCAyOkFXRFBhcnNlci5CT09MfSk7XHJcblxyXG4gICAgICAgIGNsaXAubG9vcGluZyA9IHByb3BzLmdldCgxLCB0cnVlKTtcclxuICAgICAgICBjbGlwLnN0aXRjaEZpbmFsRnJhbWUgPSBwcm9wcy5nZXQoMiwgZmFsc2UpO1xyXG5cclxuICAgICAgICBmcmFtZXNfcGFyc2VkID0gMDtcclxuICAgICAgICB3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcclxuICAgICAgICAgICAgZnJhbWVfZHVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBzdWJNZXNoUGFyc2VkID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHN1Yk1lc2hQYXJzZWQgPCBudW1fc3VibWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW1zUGFyc2VkID0gMDtcclxuICAgICAgICAgICAgICAgIHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICAgICAgc3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN0cmVhbXNQYXJzZWQgPCBudW1fU3RyZWFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJlYW10eXBlc1tzdHJlYW1zUGFyc2VkXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXMgPSAoPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5WzFdKS5zdWJHZW9tZXRyaWVzW3N1Yk1lc2hQYXJzZWRdLmluZGljZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHogPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydHNbaWR4KytdID0geTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViR2VvbSA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJHZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykdlb20udXBkYXRlUG9zaXRpb25zKHZlcnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViR2VvbS51cGRhdGVVVnModXZzW3N1Yk1lc2hQYXJzZWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViR2VvbS51cGRhdGVWZXJ0ZXhOb3JtYWxzKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJHZW9tLnVwZGF0ZVZlcnRleFRhbmdlbnRzKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJHZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykdlb20uYXV0b0Rlcml2ZVRhbmdlbnRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk1lc2hQYXJzZWQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkuYWRkU3ViR2VvbWV0cnkoc3ViR2VvbSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtc1BhcnNlZCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsaXAuYWRkRnJhbWUoZ2VvbWV0cnksIGZyYW1lX2R1cik7XHJcbiAgICAgICAgICAgIGZyYW1lc19wYXJzZWQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGhpcy5fcEZpbmFsaXplQXNzZXQoY2xpcCwgbmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY2xpcDtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVmVydGV4Q2xpcE5vZGU6IE5hbWUgPSBcIiArIGNsaXAubmFtZSArIFwiIHwgVGFyZ2V0LUdlb21ldHJ5LU5hbWUgPSBcIiArICg8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlbMV0pLm5hbWUgKyBcIiB8IE51bWJlciBvZiBGcmFtZXMgPSBcIiArIGNsaXAuZnJhbWVzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9CbG9ja0lEIDExM1xyXG4gICAgcHJpdmF0ZSBwYXJzZVZlcnRleEFuaW1hdGlvblNldChibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciBwb3NlQmxvY2tBZHJlc3M6bnVtYmVyIC8qaW50Ki9cclxuICAgICAgICB2YXIgb3V0cHV0U3RyaW5nOnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgIHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICB2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMTZ9KTtcclxuICAgICAgICB2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xyXG4gICAgICAgIHZhciBza2VsZXRvbkZyYW1lczpBcnJheTxTa2VsZXRvbkNsaXBOb2RlPiA9IG5ldyBBcnJheTxTa2VsZXRvbkNsaXBOb2RlPigpO1xyXG4gICAgICAgIHZhciB2ZXJ0ZXhGcmFtZXM6QXJyYXk8VmVydGV4Q2xpcE5vZGU+ID0gbmV3IEFycmF5PFZlcnRleENsaXBOb2RlPigpO1xyXG4gICAgICAgIHdoaWxlIChmcmFtZXNfcGFyc2VkIDwgbnVtX2ZyYW1lcykge1xyXG4gICAgICAgICAgICBwb3NlQmxvY2tBZHJlc3MgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICB2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZUJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9OT0RFXSk7XHJcbiAgICAgICAgICAgIGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbmltYXRpb25DbGlwTm9kZSBOciBcIiArIGZyYW1lc19wYXJzZWQgKyBcIiAoIFwiICsgcG9zZUJsb2NrQWRyZXNzICsgXCIgKSBmb3IgdGhpcyBBbmltYXRpb25TZXRcIik7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJldHVybmVkQXJyYXlbMV0gaW5zdGFuY2VvZiBWZXJ0ZXhDbGlwTm9kZSlcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhGcmFtZXMucHVzaChyZXR1cm5lZEFycmF5WzFdKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJldHVybmVkQXJyYXlbMV0gaW5zdGFuY2VvZiBTa2VsZXRvbkNsaXBOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNrZWxldG9uRnJhbWVzLnB1c2gocmV0dXJuZWRBcnJheVsxXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmcmFtZXNfcGFyc2VkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodmVydGV4RnJhbWVzLmxlbmd0aCA9PSAwKSAmJiAoc2tlbGV0b25GcmFtZXMubGVuZ3RoID09IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGhpcyBBbmltYXRpb25TZXQsIGJlY2F1c2UgaXQgY29udGFpbnMgbm8gYW5pbWF0aW9uc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBpZiAodmVydGV4RnJhbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIG5ld1ZlcnRleEFuaW1hdGlvblNldDpWZXJ0ZXhBbmltYXRpb25TZXQgPSBuZXcgVmVydGV4QW5pbWF0aW9uU2V0KCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdmVydGV4RnJhbWVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgbmV3VmVydGV4QW5pbWF0aW9uU2V0LmFkZEFuaW1hdGlvbih2ZXJ0ZXhGcmFtZXNbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLl9wRmluYWxpemVBc3NldChuZXdWZXJ0ZXhBbmltYXRpb25TZXQsIG5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1ZlcnRleEFuaW1hdGlvblNldDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBWZXJ0ZXhBbmltYXRpb25TZXQ6IE5hbWUgPSBcIiArIG5hbWUgKyBcIiB8IEFuaW1hdGlvbnMgPSBcIiArIG5ld1ZlcnRleEFuaW1hdGlvblNldC5hbmltYXRpb25zLmxlbmd0aCArIFwiIHwgQW5pbWF0aW9uLU5hbWVzID0gXCIgKyBuZXdWZXJ0ZXhBbmltYXRpb25TZXQuYW5pbWF0aW9uTmFtZXMudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2tlbGV0b25GcmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZUJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9OT0RFXSk7XHJcbiAgICAgICAgICAgIHZhciBuZXdTa2VsZXRvbkFuaW1hdGlvblNldDpTa2VsZXRvbkFuaW1hdGlvblNldCA9IG5ldyBTa2VsZXRvbkFuaW1hdGlvblNldChwcm9wcy5nZXQoMSwgNCkpOyAvL3Byb3BzLmdldCgxLDQpKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCBza2VsZXRvbkZyYW1lcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0LmFkZEFuaW1hdGlvbihza2VsZXRvbkZyYW1lc1tpXSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0LCBuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBuZXdTa2VsZXRvbkFuaW1hdGlvblNldDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbkFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9ucy5sZW5ndGggKyBcIiB8IEFuaW1hdGlvbi1OYW1lcyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9uTmFtZXMudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0Jsb2NrSUQgMTIyXHJcbiAgICBwcml2YXRlIHBhcnNlQW5pbWF0b3JTZXQoYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgdGFyZ2V0TWVzaDpNZXNoO1xyXG4gICAgICAgIHZhciBhbmltU2V0QmxvY2tBZHJlc3M6bnVtYmVyIC8qaW50Ki9cclxuICAgICAgICB2YXIgdGFyZ2V0QW5pbWF0aW9uU2V0OkFuaW1hdGlvblNldEJhc2U7XHJcbiAgICAgICAgdmFyIG91dHB1dFN0cmluZzpzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICB2YXIgdHlwZTpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG4gICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSfSk7XHJcblxyXG4gICAgICAgIGFuaW1TZXRCbG9ja0FkcmVzcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcbiAgICAgICAgdmFyIHRhcmdldE1lc2hMZW5ndGg6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG4gICAgICAgIHZhciBtZXNoQWRyZXNzZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCkgLyp1aW50Ki87XHJcbiAgICAgICAgZm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCB0YXJnZXRNZXNoTGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIG1lc2hBZHJlc3Nlcy5wdXNoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCkpO1xyXG5cclxuICAgICAgICB2YXIgYWN0aXZlU3RhdGU6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG4gICAgICAgIHZhciBhdXRvcGxheTpib29sZWFuID0gKCB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKSA9PSAxICk7XHJcbiAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG4gICAgICAgIHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XHJcbiAgICAgICAgdmFyIHRhcmdldE1lc2hlczpBcnJheTxNZXNoPiA9IG5ldyBBcnJheTxNZXNoPigpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWVzaEFkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChtZXNoQWRyZXNzZXNbaV0sIFtBc3NldFR5cGUuTUVTSF0pO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuZWRBcnJheVswXSlcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lc2hlcy5wdXNoKDxNZXNoPiByZXR1cm5lZEFycmF5WzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGFuaW1TZXRCbG9ja0FkcmVzcywgW0Fzc2V0VHlwZS5BTklNQVRJT05fU0VUXSk7XHJcbiAgICAgICAgaWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbmltYXRpb25TZXQgKCBcIiArIGFuaW1TZXRCbG9ja0FkcmVzcyArIFwiICkgZm9yIHRoaXMgQW5pbWF0b3JcIik7O1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0QW5pbWF0aW9uU2V0ID0gPEFuaW1hdGlvblNldEJhc2U+IHJldHVybmVkQXJyYXlbMV07XHJcbiAgICAgICAgdmFyIHRoaXNBbmltYXRvcjpBbmltYXRvckJhc2U7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHByb3BzLmdldCgxLCAwKSwgW0Fzc2V0VHlwZS5TS0VMRVRPTl0pO1xyXG4gICAgICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTa2VsZXRvbiAoIFwiICsgcHJvcHMuZ2V0KDEsIDApICsgXCIgKSBmb3IgdGhpcyBBbmltYXRvclwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNBbmltYXRvciA9IG5ldyBTa2VsZXRvbkFuaW1hdG9yKDxTa2VsZXRvbkFuaW1hdGlvblNldD4gdGFyZ2V0QW5pbWF0aW9uU2V0LCA8U2tlbGV0b24+IHJldHVybmVkQXJyYXlbMV0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMilcclxuICAgICAgICAgICAgdGhpc0FuaW1hdG9yID0gbmV3IFZlcnRleEFuaW1hdG9yKDxWZXJ0ZXhBbmltYXRpb25TZXQ+IHRhcmdldEFuaW1hdGlvblNldCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHRoaXNBbmltYXRvciwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0aGlzQW5pbWF0b3I7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRhcmdldE1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAxKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVzaGVzW2ldLmFuaW1hdG9yID0gKDxTa2VsZXRvbkFuaW1hdG9yPiB0aGlzQW5pbWF0b3IpO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAyKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVzaGVzW2ldLmFuaW1hdG9yID0gKDxWZXJ0ZXhBbmltYXRvcj4gdGhpc0FuaW1hdG9yKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBBbmltYXRvcjogTmFtZSA9IFwiICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBmdW5jdGlvbnMgcmVhZHMgYW5kIGNyZWF0ZXMgYSBFZmZlY3RNZXRob2RcclxuICAgIHByaXZhdGUgcGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQ6bnVtYmVyKTpFZmZlY3RNZXRob2RCYXNlXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICB2YXIgZWZmZWN0TWV0aG9kUmV0dXJuOkVmZmVjdE1ldGhvZEJhc2U7XHJcblxyXG4gICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDEwNDp0aGlzLl9wcm9wc05yVHlwZSwgMTA1OnRoaXMuX3Byb3BzTnJUeXBlLCAxMDY6dGhpcy5fcHJvcHNOclR5cGUsIDEwNzp0aGlzLl9wcm9wc05yVHlwZSwgMjAxOkFXRFBhcnNlci5VSU5UMzIsIDIwMjpBV0RQYXJzZXIuVUlOVDMyLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDQwMTpBV0RQYXJzZXIuVUlOVDgsIDQwMjpBV0RQYXJzZXIuVUlOVDgsIDYwMTpBV0RQYXJzZXIuQ09MT1IsIDYwMjpBV0RQYXJzZXIuQ09MT1IsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MfSk7XHJcbiAgICAgICAgdmFyIHRhcmdldElEOm51bWJlcjtcclxuICAgICAgICB2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG1ldGhvZFR5cGUpIHtcclxuICAgICAgICAgICAgLy8gRWZmZWN0IE1ldGhvZHNcclxuICAgICAgICAgICAgY2FzZSA0MDE6IC8vQ29sb3JNYXRyaXhcclxuICAgICAgICAgICAgICAgIGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RDb2xvck1hdHJpeE1ldGhvZChwcm9wcy5nZXQoMTAxLCBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSkpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwMjogLy9Db2xvclRyYW5zZm9ybVxyXG4gICAgICAgICAgICAgICAgZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdENvbG9yVHJhbnNmb3JtTWV0aG9kKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2ZmQ29sOm51bWJlciAvKnVpbnQqLyA9IHByb3BzLmdldCg2MDEsIDB4MDAwMDAwMDApO1xyXG4gICAgICAgICAgICAgICAgKDxFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZD4gZWZmZWN0TWV0aG9kUmV0dXJuKS5jb2xvclRyYW5zZm9ybSA9IG5ldyBDb2xvclRyYW5zZm9ybShwcm9wcy5nZXQoMTAyLCAxKSwgcHJvcHMuZ2V0KDEwMywgMSksIHByb3BzLmdldCgxMDQsIDEpLCBwcm9wcy5nZXQoMTAxLCAxKSwgKChvZmZDb2wgPj4gMTYpICYgMHhGRiksICgob2ZmQ29sID4+IDgpICYgMHhGRiksIChvZmZDb2wgJiAweEZGKSwgKChvZmZDb2wgPj4gMjQpICYgMHhGRikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDAzOiAvL0Vudk1hcFxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VOViBNQVAnLCB0YXJnZXRJRCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgWyBBc3NldFR5cGUuVEVYVFVSRSBdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgRW52TWFwTWV0aG9kXCIpO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEVudk1hcE1ldGhvZCg8Q3ViZVRleHR1cmVCYXNlPiByZXR1cm5lZEFycmF5WzFdLCA8bnVtYmVyPiBwcm9wcy5nZXQoMTAxLCAxKSk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRJRCA9IHByb3BzLmdldCgyLCAwKTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJRCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIE1hc2stdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZG86IHRlc3QgbWFzayB3aXRoIEVudk1hcE1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vKDxFbnZNYXBNZXRob2Q+IGVmZmVjdE1ldGhvZFJldHVybikubWFzayA9IDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA0OiAvL0xpZ2h0TWFwTWV0aG9kXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIExpZ2h0TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIExpZ2h0TWFwTWV0aG9kXCIpO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdExpZ2h0TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg0MDEsIDEwKV0pOyAvL3VzZXNlY29uZGFyeVVWIG5vdCBzZXRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x0XHRcdFx0Y2FzZSA0MDU6IC8vUHJvamVjdGl2ZVRleHR1cmVNZXRob2RcclxuICAgICAgICAgICAgLy9cdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSBnZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV9QUk9KRUNUT1JdKTtcclxuICAgICAgICAgICAgLy9cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG4gICAgICAgICAgICAvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGV4dHVyZVByb2plY3RvciAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZFwiKTtcclxuICAgICAgICAgICAgLy9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFByb2plY3RpdmVUZXh0dXJlTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIGJsZW5kTW9kZURpY1twcm9wcy5nZXQoNDAxLCAxMCldKTtcclxuICAgICAgICAgICAgLy9cdFx0XHRcdFx0YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA2OiAvL1JpbUxpZ2h0TWV0aG9kXHJcbiAgICAgICAgICAgICAgICBlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0UmltTGlnaHRNZXRob2QocHJvcHMuZ2V0KDYwMSwgMHhmZmZmZmYpLCBwcm9wcy5nZXQoMTAxLCAwLjQpLCBwcm9wcy5nZXQoMTAxLCAyKSk7IC8vYmxlbmRNb2RlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDc6IC8vQWxwaGFNYXNrTWV0aG9kXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEFscGhhLXRleHR1cmUgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgQWxwaGFNYXNrTWV0aG9kXCIpO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEFscGhhTWFza01ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBwcm9wcy5nZXQoNzAxLCBmYWxzZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRjYXNlIDQwODogLy9SZWZyYWN0aW9uRW52TWFwTWV0aG9kXHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG4gICAgICAgICAgICAvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG4gICAgICAgICAgICAvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRcdFx0X2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgUmVmcmFjdGlvbkVudk1hcE1ldGhvZFwiKTtcclxuICAgICAgICAgICAgLy9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFJlZnJhY3Rpb25FbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDEwMSwgMC4xKSwgcHJvcHMuZ2V0KDEwMiwgMC4wMSksIHByb3BzLmdldCgxMDMsIDAuMDEpLCBwcm9wcy5nZXQoMTA0LCAwLjAxKSk7XHJcbiAgICAgICAgICAgIC8vXHRcdFx0XHRcdFJlZnJhY3Rpb25FbnZNYXBNZXRob2QoZWZmZWN0TWV0aG9kUmV0dXJuKS5hbHBoYSA9IHByb3BzLmdldCgxMDQsIDEpO1xyXG4gICAgICAgICAgICAvL1x0XHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgLy9cdFx0XHRcdGNhc2UgNDA5OiAvL091dGxpbmVNZXRob2RcclxuICAgICAgICAgICAgLy9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IE91dGxpbmVNZXRob2QocHJvcHMuZ2V0KDYwMSwgMHgwMDAwMDAwMCksIHByb3BzLmdldCgxMDEsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSwgcHJvcHMuZ2V0KDcwMiwgZmFsc2UpKTtcclxuICAgICAgICAgICAgLy9cdFx0XHRcdFx0YnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDEwOiAvL0ZyZXNuZWxFbnZNYXBNZXRob2RcclxuICAgICAgICAgICAgICAgIHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgRnJlc25lbEVudk1hcE1ldGhvZFwiKTtcclxuICAgICAgICAgICAgICAgIGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RGcmVzbmVsRW52TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHByb3BzLmdldCgxMDEsIDEpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQxMTogLy9Gb2dNZXRob2RcclxuICAgICAgICAgICAgICAgIGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RGb2dNZXRob2QocHJvcHMuZ2V0KDEwMSwgMCksIHByb3BzLmdldCgxMDIsIDEwMDApLCBwcm9wcy5nZXQoNjAxLCAweDgwODA4MCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuICAgICAgICByZXR1cm4gZWZmZWN0TWV0aG9kUmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlVXNlckF0dHJpYnV0ZXMoKTpPYmplY3RcclxuICAgIHtcclxuICAgICAgICB2YXIgYXR0cmlidXRlczpPYmplY3Q7XHJcbiAgICAgICAgdmFyIGxpc3RfbGVuOm51bWJlcjtcclxuICAgICAgICB2YXIgYXR0aWJ1dGVDbnQ6bnVtYmVyO1xyXG5cclxuICAgICAgICBsaXN0X2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG4gICAgICAgIGlmIChsaXN0X2xlbiA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBsaXN0X2VuZDpudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0ge307XHJcblxyXG4gICAgICAgICAgICBsaXN0X2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsaXN0X2xlbjtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgbGlzdF9lbmQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuc19pZDpudW1iZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXR0cl9rZXk6c3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJfdHlwZTpudW1iZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXR0cl9sZW46bnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJfdmFsOmFueTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBQcm9wZXJseSB0ZW5kIHRvIG5hbWVzcGFjZXMgaW4gYXR0cmlidXRlc1xyXG4gICAgICAgICAgICAgICAgbnNfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuICAgICAgICAgICAgICAgIGF0dHJfa2V5ID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG4gICAgICAgICAgICAgICAgYXR0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICBhdHRyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgYXR0cl9sZW4pID4gbGlzdF9lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBhdHRyaWJ1dGUgIyBcIiArIGF0dGlidXRlQ250ICsgXCIgPSBza2lwcGVkIHRvIGVuZCBvZiBhdHRyaWJ1dGUtbGlzdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gbGlzdF9lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhdHRyX3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5BV0RTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMoYXR0cl9sZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5JTlQ4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuSU5UMTY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuSU5UMzI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkSW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLkJPT0w6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuVUlOVDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLlVJTlQxNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLlVJTlQzMjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5CQUREUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5GTE9BVDMyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLkZMT0FUNjQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJfdmFsID0gJ3VuaW1wbGVtZW50ZWQgYXR0cmlidXRlIHR5cGUgJyArIGF0dHJfdHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArPSBhdHRyX2xlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdHRyaWJ1dGUgPSBuYW1lOiBcIiArIGF0dHJfa2V5ICsgXCIgIC8gdmFsdWUgPSBcIiArIGF0dHJfdmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJfa2V5XSA9IGF0dHJfdmFsO1xyXG4gICAgICAgICAgICAgICAgYXR0aWJ1dGVDbnQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVByb3BlcnRpZXMoZXhwZWN0ZWQ6T2JqZWN0KTpBV0RQcm9wZXJ0aWVzXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGxpc3RfZW5kOm51bWJlcjtcclxuICAgICAgICB2YXIgbGlzdF9sZW46bnVtYmVyO1xyXG4gICAgICAgIHZhciBwcm9wZXJ0eUNudDpudW1iZXIgPSAwO1xyXG4gICAgICAgIHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gbmV3IEFXRFByb3BlcnRpZXMoKTtcclxuXHJcbiAgICAgICAgbGlzdF9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgIGxpc3RfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxpc3RfbGVuO1xyXG5cclxuICAgICAgICBpZiAoZXhwZWN0ZWQpIHtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgbGlzdF9lbmQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZW46bnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleTpudW1iZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZTpudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAga2V5ID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG4gICAgICAgICAgICAgICAgbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW4pID4gbGlzdF9lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBwcm9wZXJ0eSAjIFwiICsgcHJvcGVydHlDbnQgKyBcIiA9IHNraXBwZWQgdG8gZW5kIG9mIHByb3BlcnRpZS1saXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBsaXN0X2VuZDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV4cGVjdGVkLmhhc093blByb3BlcnR5KGtleS50b1N0cmluZygpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBleHBlY3RlZFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNldChrZXksIHRoaXMucGFyc2VBdHRyVmFsdWUodHlwZSwgbGVuKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKz0gbGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q250ICs9IDE7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3BzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlQXR0clZhbHVlKHR5cGU6bnVtYmVyLCBsZW46bnVtYmVyKTphbnlcclxuICAgIHtcclxuICAgICAgICB2YXIgZWxlbV9sZW46bnVtYmVyO1xyXG4gICAgICAgIHZhciByZWFkX2Z1bmM6RnVuY3Rpb247XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuQk9PTDpcclxuICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuSU5UODpcclxuICAgICAgICAgICAgICAgIGVsZW1fbGVuID0gMTtcclxuICAgICAgICAgICAgICAgIHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLklOVDE2OlxyXG4gICAgICAgICAgICAgICAgZWxlbV9sZW4gPSAyO1xyXG4gICAgICAgICAgICAgICAgcmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLklOVDMyOlxyXG4gICAgICAgICAgICAgICAgZWxlbV9sZW4gPSA0O1xyXG4gICAgICAgICAgICAgICAgcmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkSW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5VSU5UODpcclxuICAgICAgICAgICAgICAgIGVsZW1fbGVuID0gMTtcclxuICAgICAgICAgICAgICAgIHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuVUlOVDE2OlxyXG4gICAgICAgICAgICAgICAgZWxlbV9sZW4gPSAyO1xyXG4gICAgICAgICAgICAgICAgcmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuVUlOVDMyOlxyXG4gICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5DT0xPUjpcclxuICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuQkFERFI6XHJcbiAgICAgICAgICAgICAgICBlbGVtX2xlbiA9IDQ7XHJcbiAgICAgICAgICAgICAgICByZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuRkxPQVQzMjpcclxuICAgICAgICAgICAgICAgIGVsZW1fbGVuID0gNDtcclxuICAgICAgICAgICAgICAgIHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5GTE9BVDY0OlxyXG4gICAgICAgICAgICAgICAgZWxlbV9sZW4gPSA4O1xyXG4gICAgICAgICAgICAgICAgcmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5BV0RTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMobGVuKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLlZFQ1RPUjJ4MTpcclxuICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuVkVDVE9SM3gxOlxyXG4gICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5WRUNUT1I0eDE6XHJcbiAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLk1UWDN4MjpcclxuICAgICAgICAgICAgY2FzZSBBV0RQYXJzZXIuTVRYM3gzOlxyXG4gICAgICAgICAgICBjYXNlIEFXRFBhcnNlci5NVFg0eDM6XHJcbiAgICAgICAgICAgIGNhc2UgQVdEUGFyc2VyLk1UWDR4NDpcclxuICAgICAgICAgICAgICAgIGVsZW1fbGVuID0gODtcclxuICAgICAgICAgICAgICAgIHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtX2xlbiA8IGxlbikge1xyXG4gICAgICAgICAgICB2YXIgbGlzdDpBcnJheTxhbnk+ID0gW107XHJcbiAgICAgICAgICAgIHZhciBudW1fcmVhZDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICB2YXIgbnVtX2VsZW1zOm51bWJlciA9IGxlbi9lbGVtX2xlbjtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChudW1fcmVhZCA8IG51bV9lbGVtcykge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHJlYWRfZnVuYy5hcHBseSh0aGlzLl9uZXdCbG9ja0J5dGVzKSk7IC8vIGxpc3QucHVzaChyZWFkX2Z1bmMoKSk7XHJcbiAgICAgICAgICAgICAgICBudW1fcmVhZCsrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbDphbnkgPSByZWFkX2Z1bmMuYXBwbHkodGhpcy5fbmV3QmxvY2tCeXRlcyk7Ly9yZWFkX2Z1bmMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZUhlYWRlcigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgZmxhZ3M6bnVtYmVyO1xyXG4gICAgICAgIHZhciBib2R5X2xlbjpudW1iZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uID0gMzsgLy8gU2tpcCBtYWdpYyBzdHJpbmcgYW5kIHBhcnNlIHZlcnNpb25cclxuXHJcbiAgICAgICAgdGhpcy5fdmVyc2lvblswXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuICAgICAgICB0aGlzLl92ZXJzaW9uWzFdID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuICAgICAgICBmbGFncyA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7IC8vIFBhcnNlIGJpdCBmbGFnc1xyXG5cclxuICAgICAgICB0aGlzLl9zdHJlYW1pbmcgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XHJcblxyXG4gICAgICAgIGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAyKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY2N1cmFjeU1hdHJpeCA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUcyKTtcclxuICAgICAgICAgICAgdGhpcy5fYWNjdXJhY3lHZW8gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjY3VyYWN5UHJvcHMgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB3ZSBzZXQgX2FjY3VyYWN5T25CbG9ja3MsIHRoZSBwcmVjaXNpb24tdmFsdWVzIGFyZSByZWFkIGZyb20gZWFjaCBibG9jay1oZWFkZXIuXHJcblxyXG4gICAgICAgIC8vIHNldCBzdG9yYWdlUHJlY2lzaW9uIHR5cGVzXHJcbiAgICAgICAgdGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hY2N1cmFjeUdlbykge1xyXG4gICAgICAgICAgICB0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWNjdXJhY3lNYXRyaXgpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWNjdXJhY3lQcm9wcykge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY29tcHJlc3Npb24gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7IC8vIGNvbXByZXNzaW9uXHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1Zykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkltcG9ydCBBV0RGaWxlIG9mIHZlcnNpb24gPSBcIiArIHRoaXMuX3ZlcnNpb25bMF0gKyBcIiAtIFwiICsgdGhpcy5fdmVyc2lvblsxXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsIFNldHRpbmdzID0gQ29tcHJlc3Npb24gPSBcIiArIHRoaXMuX2NvbXByZXNzaW9uICsgXCIgfCBTdHJlYW1pbmcgPSBcIiArIHRoaXMuX3N0cmVhbWluZyArIFwiIHwgTWF0cml4LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lNYXRyaXggKyBcIiB8IEdlb21ldHJ5LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lHZW8gKyBcIiB8IFByb3BlcnRpZXMtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeVByb3BzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZpbGUgaW50ZWdyaXR5XHJcbiAgICAgICAgYm9keV9sZW4gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3N0cmVhbWluZyAmJiBib2R5X2xlbiAhPSB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0FXRDIgYm9keSBsZW5ndGggZG9lcyBub3QgbWF0Y2ggaGVhZGVyIGludGVncml0eSBmaWVsZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyBIZWxwZXIgLSBmdW5jdGlvbnNcclxuICAgIHByaXZhdGUgZ2V0VVZGb3JWZXJ0ZXhBbmltYXRpb24obWVzaElEOm51bWJlciAvKnVpbnQqLyk6QXJyYXk8QXJyYXk8bnVtYmVyPj5cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5fYmxvY2tzW21lc2hJRF0uZGF0YSBpbnN0YW5jZW9mIE1lc2gpXHJcbiAgICAgICAgICAgIG1lc2hJRCA9IHRoaXMuX2Jsb2Nrc1ttZXNoSURdLmdlb0lEO1xyXG4gICAgICAgIGlmICh0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb24pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb247XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5Okdlb21ldHJ5ID0gKDxHZW9tZXRyeT4gdGhpcy5fYmxvY2tzW21lc2hJRF0uZGF0YSk7XHJcbiAgICAgICAgdmFyIGdlb0NudDpudW1iZXIgLyppbnQqLyA9IDA7XHJcbiAgICAgICAgdmFyIHVkOkFycmF5PG51bWJlcj47XHJcbiAgICAgICAgdmFyIHVTdHJpZGU6bnVtYmVyIC8qdWludCovO1xyXG4gICAgICAgIHZhciB1T2ZmczpudW1iZXIgLyp1aW50Ki87XHJcbiAgICAgICAgdmFyIG51bVBvaW50czpudW1iZXIgLyp1aW50Ki87XHJcbiAgICAgICAgdmFyIGk6bnVtYmVyIC8qaW50Ki87XHJcbiAgICAgICAgdmFyIG5ld1V2czpBcnJheTxudW1iZXI+O1xyXG4gICAgICAgIHZhciBzdWJfZ2VvbTpUcmlhbmdsZVN1Ykdlb21ldHJ5O1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xyXG4gICAgICAgIHdoaWxlIChnZW9DbnQgPCBnZW9tZXRyeS5zdWJHZW9tZXRyaWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBuZXdVdnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgICAgICBzdWJfZ2VvbSA9IDxUcmlhbmdsZVN1Ykdlb21ldHJ5PiBnZW9tZXRyeS5zdWJHZW9tZXRyaWVzW2dlb0NudF07XHJcbiAgICAgICAgICAgIG51bVBvaW50cyA9IHN1Yl9nZW9tLm51bVZlcnRpY2VzO1xyXG4gICAgICAgICAgICB1ZCA9IHN1Yl9nZW9tLnV2cztcclxuICAgICAgICAgICAgdVN0cmlkZSA9IHN1Yl9nZW9tLmdldFN0cmlkZShUcmlhbmdsZVN1Ykdlb21ldHJ5LlVWX0RBVEEpO1xyXG4gICAgICAgICAgICB1T2ZmcyA9IHN1Yl9nZW9tLmdldE9mZnNldChUcmlhbmdsZVN1Ykdlb21ldHJ5LlVWX0RBVEEpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtUG9pbnRzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMF0pO1xyXG4gICAgICAgICAgICAgICAgbmV3VXZzLnB1c2godWRbdU9mZnMgKyBpKnVTdHJpZGUgKyAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uLnB1c2gobmV3VXZzKTtcclxuICAgICAgICAgICAgZ2VvQ250Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVZhclN0cigpOnN0cmluZ1xyXG4gICAge1xyXG5cclxuICAgICAgICB2YXIgbGVuOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMobGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFzc2V0QnlJRChhc3NldElEOm51bWJlciwgYXNzZXRUeXBlc1RvR2V0OkFycmF5PHN0cmluZz4sIGV4dHJhVHlwZUluZm86c3RyaW5nID0gXCJTaW5nbGVUZXh0dXJlXCIpOkFycmF5PGFueT5cclxuICAgIHtcclxuICAgICAgICB2YXIgcmV0dXJuQXJyYXk6QXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgdmFyIHR5cGVDbnQ6bnVtYmVyID0gMDtcclxuICAgICAgICBpZiAoYXNzZXRJRCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHR5cGVDbnQgPCBhc3NldFR5cGVzVG9HZXQubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWFzc2V0OklBc3NldCA9IDxJQXNzZXQ+IHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlhc3NldC5hc3NldFR5cGUgPT0gYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZSByaWdodCBhc3NldFR5cGUgd2FzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuVEVYVFVSRSkgJiYgKGV4dHJhVHlwZUluZm8gPT0gXCJDdWJlVGV4dHVyZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSBpbnN0YW5jZW9mIEltYWdlQ3ViZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuVEVYVFVSRSkgJiYgKGV4dHJhVHlwZUluZm8gPT0gXCJTaW5nbGVUZXh0dXJlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhIGluc3RhbmNlb2YgSW1hZ2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuR0VPTUVUUlkpICYmIChJQXNzZXQoX2Jsb2Nrc1thc3NldElEXS5kYXRhKS5hc3NldFR5cGUgPT0gQXNzZXRUeXBlLk1FU0gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5HRU9NRVRSWSkgJiYgKGlhc3NldC5hc3NldFR5cGUgPT0gQXNzZXRUeXBlLk1FU0gpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lc2g6TWVzaCA9IDxNZXNoPiB0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKG1lc2guZ2VvbWV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUNudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB0aGUgaGFzIG5vdCByZXR1cm5lZCBhbnl0aGluZyB5ZXQsIHRoZSBhc3NldCBpcyBub3QgZm91bmQsIG9yIHRoZSBmb3VuZCBhc3NldCBpcyBub3QgdGhlIHJpZ2h0IHR5cGUuXHJcbiAgICAgICAgcmV0dXJuQXJyYXkucHVzaChmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLmdldERlZmF1bHRBc3NldChhc3NldFR5cGVzVG9HZXRbMF0sIGV4dHJhVHlwZUluZm8pKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0QXNzZXQoYXNzZXRUeXBlOnN0cmluZywgZXh0cmFUeXBlSW5mbzpzdHJpbmcpOklBc3NldFxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIChhc3NldFR5cGUgPT0gQXNzZXRUeXBlLlRFWFRVUkUpOlxyXG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhVHlwZUluZm8gPT0gXCJDdWJlVGV4dHVyZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRDdWJlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhVHlwZUluZm8gPT0gXCJTaW5nbGVUZXh0dXJlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdFRleHR1cmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIChhc3NldFR5cGUgPT0gQXNzZXRUeXBlLk1BVEVSSUFMKTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRNYXRlcmlhbCgpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0TWF0ZXJpYWwoKTpJQXNzZXRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RlZmF1bHRCaXRtYXBNYXRlcmlhbClcclxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdEJpdG1hcE1hdGVyaWFsID0gPE1ldGhvZE1hdGVyaWFsPiBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRNYXRlcmlhbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gIDxJQXNzZXQ+ICB0aGlzLl9kZWZhdWx0Qml0bWFwTWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0VGV4dHVyZSgpOklBc3NldFxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5fZGVmYXVsdFRleHR1cmUpXHJcbiAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRUZXh0dXJlID0gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0VGV4dHVyZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gPElBc3NldD4gdGhpcy5fZGVmYXVsdFRleHR1cmU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk6SUFzc2V0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRCaXRtYXA6Qml0bWFwRGF0YSA9IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuY3JlYXRlQ2hlY2tlcmVkQml0bWFwRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlID0gbmV3IEJpdG1hcEN1YmVUZXh0dXJlKGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXApO1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUubmFtZSA9IFwiZGVmYXVsdEN1YmVUZXh0dXJlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPElBc3NldD4gdGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZE51bWJlcihwcmVjaXNpb246Ym9vbGVhbiA9IGZhbHNlKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICBpZiAocHJlY2lzaW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VNYXRyaXgzRCgpOk1hdHJpeDNEXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzRCh0aGlzLnBhcnNlTWF0cml4NDNSYXdEYXRhKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFyc2VNYXRyaXgzMlJhd0RhdGEoKTpBcnJheTxudW1iZXI+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGk6bnVtYmVyO1xyXG4gICAgICAgIHZhciBtdHhfcmF3OkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPig2KTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG10eF9yYXdbaV0gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG10eF9yYXc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZU1hdHJpeDQzUmF3RGF0YSgpOkFycmF5PG51bWJlcj5cclxuICAgIHtcclxuICAgICAgICB2YXIgbXR4X3JhdzpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oMTYpO1xyXG5cclxuICAgICAgICBtdHhfcmF3WzBdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuICAgICAgICBtdHhfcmF3WzFdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuICAgICAgICBtdHhfcmF3WzJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuICAgICAgICBtdHhfcmF3WzNdID0gMC4wO1xyXG4gICAgICAgIG10eF9yYXdbNF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG4gICAgICAgIG10eF9yYXdbNV0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG4gICAgICAgIG10eF9yYXdbNl0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG4gICAgICAgIG10eF9yYXdbN10gPSAwLjA7XHJcbiAgICAgICAgbXR4X3Jhd1s4XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcbiAgICAgICAgbXR4X3Jhd1s5XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcbiAgICAgICAgbXR4X3Jhd1sxMF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG4gICAgICAgIG10eF9yYXdbMTFdID0gMC4wO1xyXG4gICAgICAgIG10eF9yYXdbMTJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuICAgICAgICBtdHhfcmF3WzEzXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcbiAgICAgICAgbXR4X3Jhd1sxNF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG4gICAgICAgIG10eF9yYXdbMTVdID0gMS4wO1xyXG5cclxuICAgICAgICAvL1RPRE86IGZpeCBtYXggZXhwb3J0ZXIgdG8gcmVtb3ZlIE5hTiB2YWx1ZXMgaW4gam9pbnQgMCBpbnZlcnNlIGJpbmQgcG9zZVxyXG5cclxuICAgICAgICBpZiAoaXNOYU4obXR4X3Jhd1swXSkpIHtcclxuICAgICAgICAgICAgbXR4X3Jhd1swXSA9IDE7XHJcbiAgICAgICAgICAgIG10eF9yYXdbMV0gPSAwO1xyXG4gICAgICAgICAgICBtdHhfcmF3WzJdID0gMDtcclxuICAgICAgICAgICAgbXR4X3Jhd1s0XSA9IDA7XHJcbiAgICAgICAgICAgIG10eF9yYXdbNV0gPSAxO1xyXG4gICAgICAgICAgICBtdHhfcmF3WzZdID0gMDtcclxuICAgICAgICAgICAgbXR4X3Jhd1s4XSA9IDA7XHJcbiAgICAgICAgICAgIG10eF9yYXdbOV0gPSAwO1xyXG4gICAgICAgICAgICBtdHhfcmF3WzEwXSA9IDE7XHJcbiAgICAgICAgICAgIG10eF9yYXdbMTJdID0gMDtcclxuICAgICAgICAgICAgbXR4X3Jhd1sxM10gPSAwO1xyXG4gICAgICAgICAgICBtdHhfcmF3WzE0XSA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG10eF9yYXc7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgPSBBV0RQYXJzZXI7XHJcblxyXG5jbGFzcyBBV0RCbG9ja1xyXG57XHJcbiAgICBwdWJsaWMgaWQ6bnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIGRhdGE6YW55O1xyXG4gICAgcHVibGljIGxlbjphbnk7XHJcbiAgICBwdWJsaWMgZ2VvSUQ6bnVtYmVyO1xyXG4gICAgcHVibGljIGV4dHJhczpPYmplY3Q7XHJcbiAgICBwdWJsaWMgYnl0ZXM6Qnl0ZUFycmF5O1xyXG4gICAgcHVibGljIGVycm9yTWVzc2FnZXM6QXJyYXk8c3RyaW5nPjtcclxuICAgIHB1YmxpYyB1dnNGb3JWZXJ0ZXhBbmltYXRpb246QXJyYXk8QXJyYXk8bnVtYmVyPj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKClcclxuICAgIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ieXRlcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRFcnJvcihlcnJvck1zZzpzdHJpbmcpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXJyb3JNZXNzYWdlcylcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzLnB1c2goZXJyb3JNc2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBV0RQcm9wZXJ0aWVzXHJcbntcclxuICAgIHB1YmxpYyBzZXQoa2V5Om51bWJlciwgdmFsdWU6YW55KTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpc1sga2V5LnRvU3RyaW5nKCkgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5Om51bWJlciwgZmFsbGJhY2s6YW55KTphbnlcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5LnRvU3RyaW5nKCldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxsYmFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgQml0RmxhZ3Ncclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBGTEFHMTpudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHN0YXRpYyBGTEFHMjpudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIHN0YXRpYyBGTEFHMzpudW1iZXIgPSA0O1xyXG4gICAgcHVibGljIHN0YXRpYyBGTEFHNDpudW1iZXIgPSA4O1xyXG4gICAgcHVibGljIHN0YXRpYyBGTEFHNTpudW1iZXIgPSAxNjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzY6bnVtYmVyID0gMzI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEZMQUc3Om51bWJlciA9IDY0O1xyXG4gICAgcHVibGljIHN0YXRpYyBGTEFHODpudW1iZXIgPSAxMjg7XHJcbiAgICBwdWJsaWMgc3RhdGljIEZMQUc5Om51bWJlciA9IDI1NjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzEwOm51bWJlciA9IDUxMjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzExOm51bWJlciA9IDEwMjQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIEZMQUcxMjpudW1iZXIgPSAyMDQ4O1xyXG4gICAgcHVibGljIHN0YXRpYyBGTEFHMTM6bnVtYmVyID0gNDA5NjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzE0Om51bWJlciA9IDgxOTI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEZMQUcxNTpudW1iZXIgPSAxNjM4NDtcclxuICAgIHB1YmxpYyBzdGF0aWMgRkxBRzE2Om51bWJlciA9IDMyNzY4O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGVzdChmbGFnczpudW1iZXIsIHRlc3RGbGFnOm51bWJlcik6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoZmxhZ3MgJiB0ZXN0RmxhZykgPT0gdGVzdEZsYWc7XHJcbiAgICB9XHJcbn1cclxuIl19