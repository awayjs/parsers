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
var CurveSubGeometry = require("awayjs-display/lib/base/CurveSubGeometry");
var CurveMaterial = require("awayjs-display/lib/materials/CurveMaterial");
var AS2SceneGraphFactory = require("awayjs-player/lib/fl/factories/AS2SceneGraphFactory");
var TimelineKeyFrame = require("awayjs-player/lib/fl/timeline/TimelineKeyFrame");
var AddChildCommand = require("awayjs-player/lib/fl/timeline/commands/AddChildCommand");
var UpdatePropertyCommand = require("awayjs-player/lib/fl/timeline/commands/UpdatePropertyCommand");
var RemoveChildCommand = require("awayjs-player/lib/fl/timeline/commands/RemoveChildCommand");
var ApplyAS2DepthsCommand = require("awayjs-player/lib/fl/timeline/commands/ApplyAS2DepthsCommand");
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
                case 44:
                    this.parseAudioBlock(this._cur_block_id, factory);
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
            var hasDepthChanges = false;
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
                triangle_sub_geom.autoDeriveNormals = false;
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
        else if ((type >= 3) && (type <= 7)) {
            // if this is a curve material, we create it, finalize it, assign it to block-cache and return and return.
            var color = props.get(1, 0xcccccc);
            debugString += color;
            var diffuseTexture;
            var diffuseTex_addr = props.get(2, 0);
            returnedArray = this.getAssetByID(diffuseTex_addr, [AssetType.TEXTURE]);
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
                    return DefaultMaterialManager.getDefaultTexture();
                break;
            case (assetType == AssetType.MATERIAL):
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXIudHMiXSwibmFtZXMiOlsiQVdEUGFyc2VyIiwiQVdEUGFyc2VyLmNvbnN0cnVjdG9yIiwiQVdEUGFyc2VyLnN1cHBvcnRzVHlwZSIsIkFXRFBhcnNlci5zdXBwb3J0c0RhdGEiLCJBV0RQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5TmFtZSIsIkFXRFBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiQVdEUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiQVdEUGFyc2VyLmRpc3Bvc2UiLCJBV0RQYXJzZXIucGFyc2VOZXh0QmxvY2siLCJBV0RQYXJzZXIucGFyc2VBdWRpb0Jsb2NrIiwiQVdEUGFyc2VyLnBhcnNlVGltZUxpbmUiLCJBV0RQYXJzZXIucGFyc2VUcmlhbmdsZUdlb21ldHJpZUJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlUHJpbWl0dmVzIiwiQVdEUGFyc2VyLnBhcnNlQ29udGFpbmVyIiwiQVdEUGFyc2VyLnBhcnNlTWVzaEluc3RhbmNlIiwiQVdEUGFyc2VyLnBhcnNlU2t5Ym94SW5zdGFuY2UiLCJBV0RQYXJzZXIucGFyc2VMaWdodCIsIkFXRFBhcnNlci5wYXJzZUNhbWVyYSIsIkFXRFBhcnNlci5wYXJzZUxpZ2h0UGlja2VyIiwiQVdEUGFyc2VyLnBhcnNlTWF0ZXJpYWwiLCJBV0RQYXJzZXIucGFyc2VNYXRlcmlhbF92MSIsIkFXRFBhcnNlci5wYXJzZVRleHR1cmUiLCJBV0RQYXJzZXIucGFyc2VDdWJlVGV4dHVyZSIsIkFXRFBhcnNlci5wYXJzZVNoYXJlZE1ldGhvZEJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlU2hhZG93TWV0aG9kQmxvY2siLCJBV0RQYXJzZXIucGFyc2VDb21tYW5kIiwiQVdEUGFyc2VyLnBhcnNlTWV0YURhdGEiLCJBV0RQYXJzZXIucGFyc2VOYW1lU3BhY2UiLCJBV0RQYXJzZXIucGFyc2VTaGFkb3dNZXRob2RMaXN0IiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b24iLCJBV0RQYXJzZXIucGFyc2VTa2VsZXRvblBvc2UiLCJBV0RQYXJzZXIucGFyc2VTa2VsZXRvbkFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZU1lc2hQb3NlQW5pbWF0aW9uIiwiQVdEUGFyc2VyLnBhcnNlVmVydGV4QW5pbWF0aW9uU2V0IiwiQVdEUGFyc2VyLnBhcnNlQW5pbWF0b3JTZXQiLCJBV0RQYXJzZXIucGFyc2VTaGFyZWRNZXRob2RMaXN0IiwiQVdEUGFyc2VyLnBhcnNlVXNlckF0dHJpYnV0ZXMiLCJBV0RQYXJzZXIucGFyc2VQcm9wZXJ0aWVzIiwiQVdEUGFyc2VyLnBhcnNlQXR0clZhbHVlIiwiQVdEUGFyc2VyLnBhcnNlSGVhZGVyIiwiQVdEUGFyc2VyLmdldFVWRm9yVmVydGV4QW5pbWF0aW9uIiwiQVdEUGFyc2VyLnBhcnNlVmFyU3RyIiwiQVdEUGFyc2VyLmdldEFzc2V0QnlJRCIsIkFXRFBhcnNlci5nZXREZWZhdWx0QXNzZXQiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdEN1YmVUZXh0dXJlIiwiQVdEUGFyc2VyLnJlYWROdW1iZXIiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXgzRCIsIkFXRFBhcnNlci5wYXJzZU1hdHJpeDMyUmF3RGF0YSIsIkFXRFBhcnNlci5wYXJzZU1hdHJpeDQzUmF3RGF0YSIsIkFXREJsb2NrIiwiQVdEQmxvY2suY29uc3RydWN0b3IiLCJBV0RCbG9jay5kaXNwb3NlIiwiQVdEQmxvY2suYWRkRXJyb3IiLCJBV0RQcm9wZXJ0aWVzIiwiQVdEUHJvcGVydGllcy5jb25zdHJ1Y3RvciIsIkFXRFByb3BlcnRpZXMuc2V0IiwiQVdEUHJvcGVydGllcy5nZXQiLCJCaXRGbGFncyIsIkJpdEZsYWdzLmNvbnN0cnVjdG9yIiwiQml0RmxhZ3MudGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBTyxTQUFTLFdBQWdCLGdDQUFnQyxDQUFDLENB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QUlBLEVBQUVBLGlDQUFpQ0E7UUFFOURBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLEVBQUVBLDhDQUE4Q0E7UUFDdkZBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUM3Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUMzQ0EsSUFBSUEsQ0FB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Q0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsSUFBSUEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkRBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxPQUFPQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTt3QkFDNUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsR0FBR0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7d0JBQzFFQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFDVkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBO1lBQ0ZBLENBQUNBO1lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUVqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSx1QkFBdUJBLENBQUNBLENBQUNBO2dCQUUzR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxPQUFPQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTt3QkFDNUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNB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QSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxFQUFFQSxDQUFDQTt3QkFFL0NBLFNBQVNBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEVBQUNBLElBQUlBO3dCQUM5REEsU0FBU0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBQ0EsSUFBSUE7d0JBQzlEQSxTQUFTQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxHQUFJQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxFQUFDQSxPQUFPQTt3QkFFbEVBLFNBQVNBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEVBQUNBLGdCQUFnQkE7d0JBQzdFQSxTQUFTQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxFQUFDQSxnQkFBZ0JBO3dCQUU3RUEsR0FBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBQ0EsZ0JBQWdCQTt3QkFDcEVBLEdBQUdBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEVBQUNBLGdCQUFnQkE7b0JBQ3JFQSxDQUFDQSxHQURvREE7Z0JBRXREQSxDQUFDQTtnQkFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ0xBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9B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aUJBLENBQUNBLHFCQUFxQkEsRUFBRUEsc0JBQXNCQSxFQUFFQSxxQkFBcUJBLEVBQUVBLHVCQUF1QkEsRUFBRUEseUJBQXlCQSxFQUFFQSxzQkFBc0JBLEVBQUVBLHlCQUF5QkEsRUFBRUEsdUJBQXVCQSxDQUFDQSxDQUFBQTtRQUV6T0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFHbEJBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxvQkFBb0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvSkEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLG1CQUFtQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9LQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEscUJBQXFCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckhBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSx1QkFBdUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLHVDQUF1Q0E7Z0JBQ25NQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDQ0EsTUFBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3JEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDQ0EsTUFBT0EsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3hEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDQ0EsTUFBT0EsQ0FBQ0EsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBRS9DQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDN0pBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxzQkFBc0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzSUEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLG9CQUFvQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZJQSxLQUFLQSxDQUFDQTtZQUVQQTtnQkFDQ0EsTUFBTUEsR0FBR0EsSUFBSUEsVUFBVUEsRUFBRUEsQ0FBQ0E7Z0JBQzFCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQ0FBZ0NBLENBQUNBLENBQUNBO2dCQUM5Q0EsS0FBS0EsQ0FBQ0E7UUFDUkEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFHM0RBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLG1C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QUNBLENBQUNBLENBQUNBO1lBQ2xCQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUUzQkEsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUNwQkEsQ0FBQ0E7UUFFREEsSUFBSUEsSUFBSUEsR0FBUUEsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1FBRTlCQSxJQUFJQSxtQkFBbUJBLEdBQWNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUFBO1FBRXRIQSxFQUFFQSxDQUFDQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzVCQSxJQUFJQSxJQUFJQSxHQUFtREEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQ3hCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsdUNBQXVDQSxDQUFDQSxDQUFDQTtRQUN6RUEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQUFDQUEsNkJBRDZCQTtZQUNIQSxJQUFJQSxDQUFDQSxTQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMxREEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekRBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQ0EsSUFBSUEsQ0FBUUEsQ0FBQ0E7WUFJYkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQzVDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzRUEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeERBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtZQUN4SkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsUUFBUUEsQ0FBU0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBV0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEdBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3hDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNQQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUV4Q0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBVUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBRWxDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EseUJBQXlCQSxHQUFHQSxJQUFJQSxHQUFHQSxvQkFBb0JBLEdBQUdBLFVBQVVBLEdBQUdBLG9CQUFvQkEsR0FBR0EsSUFBSUEsQ0FBQ0Es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QUFDQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQWdCQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0JBLGVBQWVBLEdBQUdBLElBQUlBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7Z0JBQzdDQSxDQUFDQTtZQUNGQSxDQUFDQTtZQUVEQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUVoQ0EsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFcEJBLEtBQUtBLEdBQUdBLElBQUlBLGdCQUFnQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFcEZBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFnQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMzQkEsZUFBZUEsR0FBR0EsSUFBSUEsdUJBQXVCQSxFQUFFQSxDQUFDQTtnQkFDakRBLENBQUNBO1lBT0ZBLENBQUNBO1FBRUZBLENBQUNBO1FBQ0RBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO1FBQ3JDQSxLQUFLQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxD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RUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFN0lBLE1BQU1BLENBQUNBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hCQSxLQUFLQSxJQUFJQTtnQkFDUkEsVUFBVUEsR0FBR0EsSUFBSUEscUJBQXFCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0RBLEtBQUtBLENBQUNBO1lBQ1BBLEtBQUtBLElBQUlBO2dCQUNSQSxVQUFVQSxHQUFHQSxJQUFJQSxzQkFBc0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3REEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsSUFBSUE7Z0JBQ1JBLFVBQVVBLEdBQUdBLElBQUlBLCtCQUErQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZJQSxLQUFLQSxDQUFDQTtZQUNQQTtnQkFDQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQTtnQkFDbkNBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBRURBLElBQUlBLE1BQU1BLEdBQVVBLElBQUlBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQzNDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUVoQ0EsSUFBSUEsbUJBQW1CQSxHQUFjQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUV0SEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUU1QkEsSUFBSUEsSUFBSUEsR0FBbURBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBRXRCQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUV4QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHlDQUF5Q0EsQ0FBQ0EsQ0FBQ0E7UUFDM0VBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLEFBQ0FBLDZCQUQ2QkE7WUFDSEEsSUFBSUEsQ0FBQ0EsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDNURBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ25CQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFT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LEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1FBQ25kQSxJQUFJQSxXQUFXQSxHQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsV0FBV0EsR0FBVUEsa0JBQWtCQSxDQUFDQTtRQUU1Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHdCQUF3QkEsR0FBR0EsV0FBV0EsR0FBR0EsNkRBQTZEQSxDQUFDQSxDQUFDQTtZQUN2SUEsTUFBTUEsQ0FBQ0E7UUFDUkEsQ0FBQ0E7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LEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRWhEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUN4QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRTlCQSxBQUNBQSxXQURXQTtZQUNYQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDZkEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxJQUFJQSxHQUFVQSxDQUFDQTtnQkFDZkEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBRWpEQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN2R0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBRVBBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO2dCQUNqREEsSUFBSUEsSUFBY0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtnQkFFdkJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNB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RUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RFQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxJQUFJQTtnQkFHUkEsWUFBWUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFvQkEsS0FBS0EsRUFBV0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RFQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLFlBQWFBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM5Q0EsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRWhFQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFFUkEsWUFBWUEsR0FBR0EsSUFBSUEsZ0JBQWdCQSxDQUFvQkEsS0FBS0EsRUFBV0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RFQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLFlBQWFBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM5Q0EsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRTVEQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFDUkEsWUFBWUEsR0FBR0EsSUFBSUEs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V0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JDQSxPQUFPQSxHQUFlQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDN0VBLEtBQUtBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO3dCQUM1QkEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1JBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBOzRCQUMvQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQUE7NEJBQ3RDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFBQTs0QkFDdENBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUFBOzRCQUN0Q0EsS0FBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2pCQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTs0QkFDakJBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNsQkEsQ0FBQ0E7d0JBQ0RBLE9BQU9BLEdBQUdBLElBQUlBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3hDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTt3QkFDL0JBLE9BQU9BLENBQUNBLGVBQWVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO3dCQUMvQkEsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FB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LEdBQTdCQSxVQUE4QkEsT0FBY0E7UUFHM0NxQyxJQUFJQSxVQUFVQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ2hFQSxJQUFJQSxrQkFBbUNBLENBQUNBO1FBRXhDQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDL2RBLElBQUlBLFFBQWVBLENBQUNBO1FBQ3BCQSxJQUFJQSxhQUF3QkEsQ0FBQ0E7UUFFN0JBLE1BQU1BLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBRXBCQSxLQUFLQSxHQUFHQTtnQkFDUEEsa0JBQWtCQSxHQUFHQSxJQUFJQSx1QkFBdUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4SUEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsR0FBR0E7Z0JBQ1BBLGtCQUFrQkEsR0FBR0EsSUFBSUEsMEJBQTBCQSxFQUFFQSxDQUFDQTtnQkFDdERBLElBQUlBLE1BQU1BLEdBQW1CQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDMUJBLGtCQUFtQkEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0Es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LElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29DQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0NBQ3BCQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7NEJBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGVBQWVBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLElBQUlBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUMzRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsWUFBWUEsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0NBQ3hEQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDdkJBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29DQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0NBQ3BCQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7NEJBQUNBLElBQUlBLENBQUNBLENBQUNBO2dDQUNQQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDdkJBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dDQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7NEJBRXBCQSxDQUFDQTt3QkFDRkEsQ0FBQ0E7d0JBQ0RBLEFBQ0FBLHdIQUR3SEE7d0JBQ3hIQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJ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QkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDakJBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ2xCQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVB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R0FBbEJBLFVBQW1CQSxLQUFZQSxFQUFFQSxRQUFlQTtRQUUvQ0UsTUFBTUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBcEJhRixjQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsY0FBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDakJBLGNBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxjQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsY0FBS0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDbEJBLGNBQUtBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ2xCQSxjQUFLQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNsQkEsY0FBS0EsR0FBVUEsR0FBR0EsQ0FBQ0E7SUFDbkJBLGNBQUtBLEdBQVVBLEdBQUdBLENBQUNBO0lBQ25CQSxlQUFNQSxHQUFVQSxHQUFHQSxDQUFDQTtJQUNwQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLElBQUlBLENBQUNBO0lBQ3JCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLEtBQUtBLENBQUNBO0lBQ3RCQSxlQUFNQSxHQUFVQSxLQUFLQSxDQUFDQTtJQU1yQ0EsZUFBQ0E7QUFBREEsQ0F2QkEsQUF1QkNBLElBQUE7QUFoRkQsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6IkFXRFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQml0bWFwRGF0YVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9iYXNlL0JpdG1hcERhdGFcIik7XHJcbmltcG9ydCBCbGVuZE1vZGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvYmFzZS9CbGVuZE1vZGVcIik7XHJcbmltcG9ydCBDb2xvclRyYW5zZm9ybVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9Db2xvclRyYW5zZm9ybVwiKTtcclxuaW1wb3J0IE1hdHJpeDNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9NYXRyaXgzRFwiKTtcclxuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcclxuaW1wb3J0IFVSTExvYWRlckRhdGFGb3JtYXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyRGF0YUZvcm1hdFwiKTtcclxuaW1wb3J0IFVSTFJlcXVlc3RcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTFJlcXVlc3RcIik7XHJcbmltcG9ydCBBc3NldFR5cGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldFR5cGVcIik7XHJcbmltcG9ydCBJQXNzZXRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0lBc3NldFwiKTtcclxuaW1wb3J0IFBhcnNlckJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJCYXNlXCIpO1xyXG5pbXBvcnQgUGFyc2VyVXRpbHNcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJVdGlsc1wiKTtcclxuaW1wb3J0IFJlc291cmNlRGVwZW5kZW5jeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUmVzb3VyY2VEZXBlbmRlbmN5XCIpO1xyXG5pbXBvcnQgUHJvamVjdGlvbkJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL1Byb2plY3Rpb25CYXNlXCIpO1xyXG5pbXBvcnQgUGVyc3BlY3RpdmVQcm9qZWN0aW9uXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL1BlcnNwZWN0aXZlUHJvamVjdGlvblwiKTtcclxuaW1wb3J0IE9ydGhvZ3JhcGhpY1Byb2plY3Rpb25cdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvT3J0aG9ncmFwaGljUHJvamVjdGlvblwiKTtcclxuaW1wb3J0IE9ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb25cdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wcm9qZWN0aW9ucy9PcnRob2dyYXBoaWNPZmZDZW50ZXJQcm9qZWN0aW9uXCIpO1xyXG5pbXBvcnQgQml0bWFwQ3ViZVRleHR1cmVcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9CaXRtYXBDdWJlVGV4dHVyZVwiKTtcclxuaW1wb3J0IEJpdG1hcFRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0JpdG1hcFRleHR1cmVcIik7XHJcbmltcG9ydCBDdWJlVGV4dHVyZUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0N1YmVUZXh0dXJlQmFzZVwiKTtcclxuaW1wb3J0IEltYWdlQ3ViZVRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0ltYWdlQ3ViZVRleHR1cmVcIik7XHJcbmltcG9ydCBJbWFnZVRleHR1cmVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvSW1hZ2VUZXh0dXJlXCIpO1xyXG5pbXBvcnQgVGV4dHVyZTJEQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZTJEQmFzZVwiKTtcclxuaW1wb3J0IFRleHR1cmVQcm94eUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL1RleHR1cmVQcm94eUJhc2VcIik7XHJcbmltcG9ydCBCeXRlQXJyYXlcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvQnl0ZUFycmF5XCIpO1xyXG5cclxuaW1wb3J0IERpc3BsYXlPYmplY3RDb250YWluZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9EaXNwbGF5T2JqZWN0Q29udGFpbmVyXCIpO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9EaXNwbGF5T2JqZWN0XCIpO1xyXG5pbXBvcnQgR2VvbWV0cnlcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0dlb21ldHJ5XCIpO1xyXG5pbXBvcnQgTGlnaHRCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvTGlnaHRCYXNlXCIpO1xyXG5pbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcclxuaW1wb3J0IERpcmVjdGlvbmFsTGlnaHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0RpcmVjdGlvbmFsTGlnaHRcIik7XHJcbmltcG9ydCBQb2ludExpZ2h0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1BvaW50TGlnaHRcIik7XHJcbmltcG9ydCBDYW1lcmFcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9DYW1lcmFcIik7XHJcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xyXG5pbXBvcnQgU2t5Ym94XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvU2t5Ym94XCIpO1xyXG5pbXBvcnQgTWF0ZXJpYWxCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9NYXRlcmlhbEJhc2VcIik7XHJcbmltcG9ydCBMaWdodFBpY2tlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9saWdodHBpY2tlcnMvTGlnaHRQaWNrZXJCYXNlXCIpO1xyXG5pbXBvcnQgU3RhdGljTGlnaHRQaWNrZXJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvbGlnaHRwaWNrZXJzL1N0YXRpY0xpZ2h0UGlja2VyXCIpO1xyXG5pbXBvcnQgQ3ViZU1hcFNoYWRvd01hcHBlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL0N1YmVNYXBTaGFkb3dNYXBwZXJcIik7XHJcbmltcG9ydCBEaXJlY3Rpb25hbFNoYWRvd01hcHBlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvc2hhZG93bWFwcGVycy9EaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiKTtcclxuaW1wb3J0IFNoYWRvd01hcHBlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL1NoYWRvd01hcHBlckJhc2VcIik7XHJcbmltcG9ydCBQcmVmYWJCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJlZmFiQmFzZVwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDYXBzdWxlUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlQ29uZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ29uZVByZWZhYlwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUN1YmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN1YmVQcmVmYWJcIik7XHJcbmltcG9ydCBQcmltaXRpdmVDeWxpbmRlclByZWZhYlx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlUGxhbmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVBsYW5lUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlU3BoZXJlUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlU3BoZXJlUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlVG9ydXNQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVRvcnVzUHJlZmFiXCIpO1xyXG5cclxuaW1wb3J0IEFuaW1hdGlvblNldEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRpb25TZXRCYXNlXCIpO1xyXG5pbXBvcnQgQW5pbWF0b3JCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRvckJhc2VcIik7XHJcbmltcG9ydCBWZXJ0ZXhBbmltYXRpb25TZXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvVmVydGV4QW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgVmVydGV4QW5pbWF0b3JcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9WZXJ0ZXhBbmltYXRvclwiKTtcclxuaW1wb3J0IFNrZWxldG9uQW5pbWF0aW9uU2V0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25BbmltYXRvclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0b3JcIik7XHJcbmltcG9ydCBKb2ludFBvc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvSm9pbnRQb3NlXCIpO1xyXG5pbXBvcnQgU2tlbGV0b25cdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblwiKTtcclxuaW1wb3J0IFNrZWxldG9uUG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblBvc2VcIik7XHJcbmltcG9ydCBTa2VsZXRvbkpvaW50XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvbkpvaW50XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25DbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1NrZWxldG9uQ2xpcE5vZGVcIik7XHJcbmltcG9ydCBWZXJ0ZXhDbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1ZlcnRleENsaXBOb2RlXCIpO1xyXG5pbXBvcnQgRGVmYXVsdE1hdGVyaWFsTWFuYWdlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9tYW5hZ2Vycy9EZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXCIpO1xyXG5cclxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsTW9kZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxNb2RlXCIpO1xyXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxcIik7XHJcbmltcG9ydCBBbWJpZW50RW52TWFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0FtYmllbnRFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlRGVwdGhNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZURlcHRoTWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZUNlbE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VDZWxNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlR3JhZGllbnRNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VHcmFkaWVudE1ldGhvZFwiKTtcclxuaW1wb3J0IERpZmZ1c2VMaWdodE1hcE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUxpZ2h0TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZVdyYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZVdyYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RBbHBoYU1hc2tNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEFscGhhTWFza01ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdENvbG9yTWF0cml4TWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RDb2xvck1hdHJpeE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdENvbG9yVHJhbnNmb3JtTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RFbnZNYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0RW52TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0Rm9nTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Rm9nTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEZyZXNuZWxFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RMaWdodE1hcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RMaWdodE1hcE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdE1ldGhvZEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RNZXRob2RCYXNlXCIpO1xyXG5pbXBvcnQgRWZmZWN0UmltTGlnaHRNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0UmltTGlnaHRNZXRob2RcIik7XHJcbmltcG9ydCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2RcIik7XHJcbmltcG9ydCBTaGFkb3dEaXRoZXJlZE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dEaXRoZXJlZE1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0ZpbHRlcmVkTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0ZpbHRlcmVkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93TWV0aG9kQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd01ldGhvZEJhc2VcIik7XHJcbmltcG9ydCBTcGVjdWxhckZyZXNuZWxNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyRnJlc25lbE1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0hhcmRNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dIYXJkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyQW5pc290cm9waWNNZXRob2RcIik7XHJcbmltcG9ydCBTcGVjdWxhckNlbE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhckNlbE1ldGhvZFwiKTtcclxuaW1wb3J0IFNwZWN1bGFyUGhvbmdNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJQaG9uZ01ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd05lYXJNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dOZWFyTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93U29mdE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd1NvZnRNZXRob2RcIik7XHJcblxyXG5pbXBvcnQgU3ViR2VvbWV0cnlCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL1N1Ykdlb21ldHJ5QmFzZVwiKTtcclxuaW1wb3J0IEN1cnZlU3ViR2VvbWV0cnlcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvQ3VydmVTdWJHZW9tZXRyeVwiKTtcclxuaW1wb3J0IEN1cnZlTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9DdXJ2ZU1hdGVyaWFsXCIpXHJcbmltcG9ydCBCYXNpY01hdGVyaWFsXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvQmFzaWNNYXRlcmlhbFwiKTtcclxuXHJcblxyXG5pbXBvcnQgVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9mYWN0b3JpZXMvVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IEFTMlNjZW5lR3JhcGhGYWN0b3J5ID0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL2ZhY3Rvcmllcy9BUzJTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IE1vdmllQ2xpcCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9kaXNwbGF5L01vdmllQ2xpcFwiKTtcclxuaW1wb3J0IFRpbWVsaW5lS2V5RnJhbWUgPSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvVGltZWxpbmVLZXlGcmFtZVwiKTtcclxuaW1wb3J0IEFkZENoaWxkQ29tbWFuZCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC90aW1lbGluZS9jb21tYW5kcy9BZGRDaGlsZENvbW1hbmRcIik7XHJcbmltcG9ydCBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQgPSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvY29tbWFuZHMvVXBkYXRlUHJvcGVydHlDb21tYW5kXCIpO1xyXG5pbXBvcnQgUmVtb3ZlQ2hpbGRDb21tYW5kID0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL3RpbWVsaW5lL2NvbW1hbmRzL1JlbW92ZUNoaWxkQ29tbWFuZFwiKTtcclxuaW1wb3J0IEFwcGx5QVMyRGVwdGhzQ29tbWFuZCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC90aW1lbGluZS9jb21tYW5kcy9BcHBseUFTMkRlcHRoc0NvbW1hbmRcIik7XHJcblxyXG4vKipcclxuICogQVdEUGFyc2VyIHByb3ZpZGVzIGEgcGFyc2VyIGZvciB0aGUgQVdEIGRhdGEgdHlwZS5cclxuICovXHJcbmNsYXNzIEFXRFBhcnNlciBleHRlbmRzIFBhcnNlckJhc2Vcclxue1xyXG5cdC8vc2V0IHRvIFwidHJ1ZVwiIHRvIGhhdmUgc29tZSBjb25zb2xlLmxvZ3MgaW4gdGhlIENvbnNvbGVcclxuXHRwcml2YXRlIF9kZWJ1Zzpib29sZWFuID0gdHJ1ZTtcclxuXHRwcml2YXRlIF9ieXRlRGF0YTpCeXRlQXJyYXk7XHJcblx0cHJpdmF0ZSBfc3RhcnRlZFBhcnNpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2N1cl9ibG9ja19pZDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfYmxvY2tzOkFycmF5PEFXREJsb2NrPjtcclxuXHRwcml2YXRlIF9uZXdCbG9ja0J5dGVzOkJ5dGVBcnJheTtcclxuXHRwcml2YXRlIF92ZXJzaW9uOkFycmF5PG51bWJlcj47XHJcblx0cHJpdmF0ZSBfY29tcHJlc3Npb246bnVtYmVyO1xyXG5cdHByaXZhdGUgX2FjY3VyYWN5T25CbG9ja3M6Ym9vbGVhbjtcclxuXHRwcml2YXRlIF9hY2N1cmFjeU1hdHJpeDpib29sZWFuO1xyXG5cdHByaXZhdGUgX2FjY3VyYWN5R2VvOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfYWNjdXJhY3lQcm9wczpib29sZWFuO1xyXG5cdHByaXZhdGUgX21hdHJpeE5yVHlwZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfZ2VvTnJUeXBlOm51bWJlcjtcclxuXHRwcml2YXRlIF9wcm9wc05yVHlwZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfc3RyZWFtaW5nOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfdGV4dHVyZV91c2VyczpPYmplY3QgPSB7fTtcclxuXHRwcml2YXRlIF9wYXJzZWRfaGVhZGVyOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9ib2R5OkJ5dGVBcnJheTtcclxuXHRwcml2YXRlIF9kZWZhdWx0VGV4dHVyZTpCaXRtYXBUZXh0dXJlOyAgICAgLy8gSFRNTCBJTUFHRSBURVhUVVJFID4/ICFcclxuXHRwcml2YXRlIF9jdWJlVGV4dHVyZXM6QXJyYXk8YW55PjtcclxuXHRwcml2YXRlIF9kZWZhdWx0Qml0bWFwTWF0ZXJpYWw6TWV0aG9kTWF0ZXJpYWw7XHJcblx0cHJpdmF0ZSBfZGVmYXVsdEN1YmVUZXh0dXJlOkJpdG1hcEN1YmVUZXh0dXJlO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIENPTVBSRVNTSU9OTU9ERV9MWk1BOnN0cmluZyA9IFwibHptYVwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgVU5DT01QUkVTU0VEOm51bWJlciA9IDA7XHJcblx0cHVibGljIHN0YXRpYyBERUZMQVRFOm51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBMWk1BOm51bWJlciA9IDI7XHJcblx0cHVibGljIHN0YXRpYyBJTlQ4Om51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBJTlQxNjpudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBzdGF0aWMgSU5UMzI6bnVtYmVyID0gMztcclxuXHRwdWJsaWMgc3RhdGljIFVJTlQ4Om51bWJlciA9IDQ7XHJcblx0cHVibGljIHN0YXRpYyBVSU5UMTY6bnVtYmVyID0gNTtcclxuXHRwdWJsaWMgc3RhdGljIFVJTlQzMjpudW1iZXIgPSA2O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQzMjpudW1iZXIgPSA3O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQ2NDpudW1iZXIgPSA4O1xyXG5cdHB1YmxpYyBzdGF0aWMgQk9PTDpudW1iZXIgPSAyMTtcclxuXHRwdWJsaWMgc3RhdGljIENPTE9SOm51bWJlciA9IDIyO1xyXG5cdHB1YmxpYyBzdGF0aWMgQkFERFI6bnVtYmVyID0gMjM7XHJcblx0cHVibGljIHN0YXRpYyBBV0RTVFJJTkc6bnVtYmVyID0gMzE7XHJcblx0cHVibGljIHN0YXRpYyBBV0RCWVRFQVJSQVk6bnVtYmVyID0gMzI7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1IyeDE6bnVtYmVyID0gNDE7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1IzeDE6bnVtYmVyID0gNDI7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1I0eDE6bnVtYmVyID0gNDM7XHJcblx0cHVibGljIHN0YXRpYyBNVFgzeDI6bnVtYmVyID0gNDQ7XHJcblx0cHVibGljIHN0YXRpYyBNVFgzeDM6bnVtYmVyID0gNDU7XHJcblx0cHVibGljIHN0YXRpYyBNVFg0eDM6bnVtYmVyID0gNDY7XHJcblx0cHVibGljIHN0YXRpYyBNVFg0eDQ6bnVtYmVyID0gNDc7XHJcblxyXG5cdHByaXZhdGUgYmxlbmRNb2RlRGljOkFycmF5PHN0cmluZz47XHJcblx0cHJpdmF0ZSBfZGVwdGhTaXplRGljOkFycmF5PG51bWJlcj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSBuZXcgQVdEUGFyc2VyIG9iamVjdC5cclxuXHQgKiBAcGFyYW0gdXJpIFRoZSB1cmwgb3IgaWQgb2YgdGhlIGRhdGEgb3IgZmlsZSB0byBiZSBwYXJzZWQuXHJcblx0ICogQHBhcmFtIGV4dHJhIFRoZSBob2xkZXIgZm9yIGV4dHJhIGNvbnRleHR1YWwgZGF0YSB0aGF0IHRoZSBwYXJzZXIgbWlnaHQgbmVlZC5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5BUlJBWV9CVUZGRVIpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2NrcyA9IG5ldyBBcnJheTxBV0RCbG9jaz4oKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1swXSA9IG5ldyBBV0RCbG9jaygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzWzBdLmRhdGEgPSBudWxsOyAvLyBaZXJvIGFkZHJlc3MgbWVhbnMgbnVsbCBpbiBBV0RcclxuXHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7IC8vIHVzZWQgdG8gdHJhbnNsYXRlIGludHMgdG8gYmxlbmRNb2RlLXN0cmluZ3NcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk5PUk1BTCk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5BREQpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuQUxQSEEpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuREFSS0VOKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkRJRkZFUkVOQ0UpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuRVJBU0UpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuSEFSRExJR0hUKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLklOVkVSVCk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5MQVlFUik7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5MSUdIVEVOKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk1VTFRJUExZKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk5PUk1BTCk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5PVkVSTEFZKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLlNDUkVFTik7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5TSEFERVIpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuT1ZFUkxBWSk7XHJcblxyXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljID0gbmV3IEFycmF5PG51bWJlcj4oKTsgLy8gdXNlZCB0byB0cmFuc2xhdGUgaW50cyB0byBkZXB0aFNpemUtdmFsdWVzXHJcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMucHVzaCgyNTYpO1xyXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goNTEyKTtcclxuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDIwNDgpO1xyXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMTAyNCk7XHJcblx0XHR0aGlzLl92ZXJzaW9uID0gQXJyYXk8bnVtYmVyPigpOyAvLyB3aWxsIGNvbnRhaW4gMiBpbnQgKG1ham9yLXZlcnNpb24sIG1pbm9yLXZlcnNpb24pIGZvciBhd2QtdmVyc2lvbi1jaGVja1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gZmlsZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGJ5IHRoZSBwYXJzZXIuXHJcblx0ICogQHBhcmFtIGV4dGVuc2lvbiBUaGUgZmlsZSBleHRlbnNpb24gb2YgYSBwb3RlbnRpYWwgZmlsZSB0byBiZSBwYXJzZWQuXHJcblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZmlsZSB0eXBlIGlzIHN1cHBvcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzVHlwZShleHRlbnNpb246c3RyaW5nKTpib29sZWFuXHJcblx0e1xyXG5cdFx0ZXh0ZW5zaW9uID0gZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRyZXR1cm4gZXh0ZW5zaW9uID09IFwiYXdkXCI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIGEgZGF0YSBibG9jayBjYW4gYmUgcGFyc2VkIGJ5IHRoZSBwYXJzZXIuXHJcblx0ICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgYmxvY2sgdG8gcG90ZW50aWFsbHkgYmUgcGFyc2VkLlxyXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGRhdGEgaXMgc3VwcG9ydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNEYXRhKGRhdGE6YW55KTpib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIChQYXJzZXJVdGlscy50b1N0cmluZyhkYXRhLCAzKSA9PSAnQVdEJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAaW5oZXJpdERvY1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5KHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIERlcGVuZGVuY3kgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXHJcblx0XHQvLyB0aGUgQXNzZXRzIHdhaXRpbmcgZm9yIHRoaXMgQml0bWFwLCBjYW4gYmUgVGV4dHVyZSBvciBDdWJlVGV4dHVyZS5cclxuXHRcdC8vIGlmIHRoZSBCaXRtYXAgaXMgYXdhaXRlZCBieSBhIEN1YmVUZXh0dXJlLCB3ZSBuZWVkIHRvIGNoZWNrIGlmIGl0cyB0aGUgbGFzdCBCaXRtYXAgb2YgdGhlIEN1YmVUZXh0dXJlLFxyXG5cdFx0Ly8gc28gd2Uga25vdyBpZiB3ZSBoYXZlIHRvIGZpbmFsaXplIHRoZSBBc3NldCAoQ3ViZVRleHR1cmUpIG9yIG5vdC5cclxuXHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdHZhciBpc0N1YmVUZXh0dXJlQXJyYXk6QXJyYXk8c3RyaW5nPiA9IHJlc291cmNlRGVwZW5kZW5jeS5pZC5zcGxpdChcIiNcIik7XHJcblx0XHRcdHZhciByZXNzb3VyY2VJRDpzdHJpbmcgPSBpc0N1YmVUZXh0dXJlQXJyYXlbMF07XHJcblx0XHRcdHZhciBhc3NldDpUZXh0dXJlUHJveHlCYXNlO1xyXG5cdFx0XHR2YXIgdGhpc0JpdG1hcFRleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRcdFx0dmFyIGJsb2NrOkFXREJsb2NrO1xyXG5cclxuXHRcdFx0aWYgKGlzQ3ViZVRleHR1cmVBcnJheS5sZW5ndGggPT0gMSkgLy8gTm90IGEgY3ViZSB0ZXh0dXJlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhc3NldCA9IDxUZXh0dXJlMkRCYXNlPiByZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzWzBdO1xyXG5cdFx0XHRcdGlmIChhc3NldCkge1xyXG5cdFx0XHRcdFx0dmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcclxuXHRcdFx0XHRcdHZhciB1c2VyczpBcnJheTxzdHJpbmc+O1xyXG5cclxuXHRcdFx0XHRcdGJsb2NrID0gdGhpcy5fYmxvY2tzWyByZXNvdXJjZURlcGVuZGVuY3kuaWQgXTtcclxuXHRcdFx0XHRcdGJsb2NrLmRhdGEgPSBhc3NldDsgLy8gU3RvcmUgZmluaXNoZWQgYXNzZXRcclxuXHJcblx0XHRcdFx0XHQvLyBSZXNldCBuYW1lIG9mIHRleHR1cmUgdG8gdGhlIG9uZSBkZWZpbmVkIGluIHRoZSBBV0QgZmlsZSxcclxuXHRcdFx0XHRcdC8vIGFzIG9wcG9zZWQgdG8gd2hhdGV2ZXIgdGhlIGltYWdlIHBhcnNlciBjYW1lIHVwIHdpdGguXHJcblx0XHRcdFx0XHRhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcclxuXHRcdFx0XHRcdGJsb2NrLm5hbWUgPSBhc3NldC5uYW1lO1xyXG5cdFx0XHRcdFx0Ly8gRmluYWxpemUgdGV4dHVyZSBhc3NldCB0byBkaXNwYXRjaCB0ZXh0dXJlIGV2ZW50LCB3aGljaCB3YXNcclxuXHRcdFx0XHRcdC8vIHByZXZpb3VzbHkgc3VwcHJlc3NlZCB3aGlsZSB0aGUgZGVwZW5kZW5jeSB3YXMgbG9hZGVkLlxyXG5cdFx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBsb2FkZWQgQml0bWFwIGZvciB0ZXh0dXJlXCIpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCB0ZXh0dXJlOiBOYW1lID0gXCIgKyBibG9jay5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpc0N1YmVUZXh0dXJlQXJyYXkubGVuZ3RoID4gMSkgLy8gQ3ViZSBUZXh0dXJlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzQml0bWFwVGV4dHVyZSA9IDxCaXRtYXBUZXh0dXJlPiByZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzWzBdO1xyXG5cclxuXHRcdFx0XHR2YXIgdHg6SW1hZ2VUZXh0dXJlID0gPEltYWdlVGV4dHVyZT4gdGhpc0JpdG1hcFRleHR1cmU7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2N1YmVUZXh0dXJlc1sgaXNDdWJlVGV4dHVyZUFycmF5WzFdIF0gPSB0eC5odG1sSW1hZ2VFbGVtZW50OyAvLyA/XHJcblx0XHRcdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ucHVzaCgxKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBsb2FkZWQgQml0bWFwIFwiICsgdGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ubGVuZ3RoICsgXCIgLyA2IGZvciBDdWJldGV4dHVyZVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLmxlbmd0aCA9PSB0aGlzLl9jdWJlVGV4dHVyZXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHBvc1g6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzBdO1xyXG5cdFx0XHRcdFx0dmFyIG5lZ1g6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzFdO1xyXG5cdFx0XHRcdFx0dmFyIHBvc1k6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzJdO1xyXG5cdFx0XHRcdFx0dmFyIG5lZ1k6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzNdO1xyXG5cdFx0XHRcdFx0dmFyIHBvc1o6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzRdO1xyXG5cdFx0XHRcdFx0dmFyIG5lZ1o6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzVdO1xyXG5cclxuXHRcdFx0XHRcdGFzc2V0ID0gPFRleHR1cmVQcm94eUJhc2U+IG5ldyBJbWFnZUN1YmVUZXh0dXJlKHBvc1gsIG5lZ1gsIHBvc1ksIG5lZ1ksIHBvc1osIG5lZ1opO1xyXG5cdFx0XHRcdFx0YmxvY2sgPSB0aGlzLl9ibG9ja3NbcmVzc291cmNlSURdO1xyXG5cdFx0XHRcdFx0YmxvY2suZGF0YSA9IGFzc2V0OyAvLyBTdG9yZSBmaW5pc2hlZCBhc3NldFxyXG5cclxuXHRcdFx0XHRcdC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxyXG5cdFx0XHRcdFx0Ly8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cclxuXHRcdFx0XHRcdGFzc2V0LnJlc2V0QXNzZXRQYXRoKGJsb2NrLm5hbWUsIG51bGwsIHRydWUpO1xyXG5cdFx0XHRcdFx0YmxvY2submFtZSA9IGFzc2V0Lm5hbWU7XHJcblx0XHRcdFx0XHQvLyBGaW5hbGl6ZSB0ZXh0dXJlIGFzc2V0IHRvIGRpc3BhdGNoIHRleHR1cmUgZXZlbnQsIHdoaWNoIHdhc1xyXG5cdFx0XHRcdFx0Ly8gcHJldmlvdXNseSBzdXBwcmVzc2VkIHdoaWxlIHRoZSBkZXBlbmRlbmN5IHdhcyBsb2FkZWQuXHJcblx0XHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgQ3ViZVRleHR1cmU6IE5hbWUgPSBcIiArIGJsb2NrLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBpbmhlcml0RG9jXHJcblx0ICovXHJcblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3lGYWlsdXJlKHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpXHJcblx0e1xyXG5cdFx0Ly9ub3QgdXNlZCAtIGlmIGEgZGVwZW5kY3kgZmFpbHMsIHRoZSBhd2FpdGluZyBUZXh0dXJlIG9yIEN1YmVUZXh0dXJlIHdpbGwgbmV2ZXIgYmUgZmluYWxpemVkLCBhbmQgdGhlIGRlZmF1bHQtYml0bWFwcyB3aWxsIGJlIHVzZWQuXHJcblx0XHQvLyB0aGlzIG1lYW5zLCB0aGF0IGlmIG9uZSBCaXRtYXAgb2YgYSBDdWJlVGV4dHVyZSBmYWlscywgdGhlIEN1YmVUZXh0dXJlIHdpbGwgaGF2ZSB0aGUgRGVmYXVsdFRleHR1cmUgYXBwbGllZCBmb3IgYWxsIHNpeCBCaXRtYXBzLlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzb2x2ZSBhIGRlcGVuZGVuY3kgbmFtZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlRGVwZW5kZW5jeSBUaGUgZGVwZW5kZW5jeSB0byBiZSByZXNvbHZlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeU5hbWUocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSwgYXNzZXQ6SUFzc2V0KTpzdHJpbmdcclxuXHR7XHJcblx0XHR2YXIgb2xkTmFtZTpzdHJpbmcgPSBhc3NldC5uYW1lO1xyXG5cclxuXHRcdGlmIChhc3NldCkge1xyXG5cdFx0XHR2YXIgYmxvY2s6QVdEQmxvY2sgPSB0aGlzLl9ibG9ja3NbcGFyc2VJbnQocmVzb3VyY2VEZXBlbmRlbmN5LmlkKV07XHJcblx0XHRcdC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxyXG5cdFx0XHQvLyBhcyBvcHBvc2VkIHRvIHdoYXRldmVyIHRoZSBpbWFnZSBwYXJzZXIgY2FtZSB1cCB3aXRoLlxyXG5cdFx0XHRhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbmV3TmFtZTpzdHJpbmcgPSBhc3NldC5uYW1lO1xyXG5cclxuXHRcdGFzc2V0Lm5hbWUgPSBvbGROYW1lO1xyXG5cclxuXHRcdHJldHVybiBuZXdOYW1lO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBpbmhlcml0RG9jXHJcblx0ICovXHJcblx0cHVibGljIF9wUHJvY2VlZFBhcnNpbmcoKTpib29sZWFuXHJcblx0e1xyXG5cclxuXHRcdGlmICghdGhpcy5fc3RhcnRlZFBhcnNpbmcpIHtcclxuXHRcdFx0dGhpcy5fYnl0ZURhdGEgPSB0aGlzLl9wR2V0Qnl0ZURhdGEoKTsvL2dldEJ5dGVEYXRhKCk7XHJcblx0XHRcdHRoaXMuX3N0YXJ0ZWRQYXJzaW5nID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuX3BhcnNlZF9oZWFkZXIpIHtcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvL3RoaXMuX2J5dGVEYXRhLmVuZGlhbiA9IEVuZGlhbi5MSVRUTEVfRU5ESUFOO1xyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBQYXJzZSBoZWFkZXIgYW5kIGRlY29tcHJlc3MgYm9keSBpZiBuZWVkZWRcclxuXHRcdFx0dGhpcy5wYXJzZUhlYWRlcigpO1xyXG5cclxuXHRcdFx0c3dpdGNoICh0aGlzLl9jb21wcmVzc2lvbikge1xyXG5cclxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5ERUZMQVRFOlxyXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkxaTUE6XHJcblx0XHRcdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuVU5DT01QUkVTU0VEOlxyXG5cdFx0XHRcdFx0dGhpcy5fYm9keSA9IHRoaXMuX2J5dGVEYXRhO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHRcdC8vIENvbXByZXNzZWQgQVdEIEZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWRcclxuXHRcdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdFx0LypcclxuXHRcdFx0XHQgY2FzZSBBV0RQYXJzZXIuREVGTEFURTpcclxuXHJcblx0XHRcdFx0IHRoaXMuX2JvZHkgPSBuZXcgQnl0ZUFycmF5KCk7XHJcblx0XHRcdFx0IHRoaXMuX2J5dGVEYXRhLnJlYWRCeXRlcyh0aGlzLl9ib2R5LCAwLCB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKTtcclxuXHRcdFx0XHQgdGhpcy5fYm9keS51bmNvbXByZXNzKCk7XHJcblxyXG5cdFx0XHRcdCBicmVhaztcclxuXHRcdFx0XHQgY2FzZSBBV0RQYXJzZXIuTFpNQTpcclxuXHJcblx0XHRcdFx0IHRoaXMuX2JvZHkgPSBuZXcgQnl0ZUFycmF5KCk7XHJcblx0XHRcdFx0IHRoaXMuX2J5dGVEYXRhLnJlYWRCeXRlcyh0aGlzLl9ib2R5LCAwLCB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKTtcclxuXHRcdFx0XHQgdGhpcy5fYm9keS51bmNvbXByZXNzKENPTVBSRVNTSU9OTU9ERV9MWk1BKTtcclxuXHJcblx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHRcdCAvLyovXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9wYXJzZWRfaGVhZGVyID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvL3RoaXMuX2JvZHkuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47Ly8gU2hvdWxkIGJlIGRlZmF1bHRcclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9ib2R5KSB7XHJcblxyXG5cdFx0XHR3aGlsZSAodGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpID4gMCAmJiAhdGhpcy5wYXJzaW5nUGF1c2VkKSAvLyYmIHRoaXMuX3BIYXNUaW1lKCkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYXJzZU5leHRCbG9jaygpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vIFJldHVybiBjb21wbGV0ZSBzdGF0dXNcclxuXHRcdFx0aWYgKHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSA9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5kaXNwb3NlKCk7XHJcblx0XHRcdFx0cmV0dXJuICBQYXJzZXJCYXNlLlBBUlNJTkdfRE9ORTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHN3aXRjaCAodGhpcy5fY29tcHJlc3Npb24pIHtcclxuXHJcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuREVGTEFURTpcclxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5MWk1BOlxyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIighKSBBV0RQYXJzZXIgRXJyb3I6IENvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQgKCEpXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBFcnJvciAtIG1vc3QgbGlrZWx5IF9ib2R5IG5vdCBzZXQgYmVjYXVzZSB3ZSBkbyBub3Qgc3VwcG9ydCBjb21wcmVzc2lvbi5cclxuXHRcdFx0cmV0dXJuICBQYXJzZXJCYXNlLlBBUlNJTkdfRE9ORTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIF9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQ6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHN1cGVyLl9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQpO1xyXG5cclxuXHRcdC8vY3JlYXRlIGEgY29udGVudCBvYmplY3QgZm9yIExvYWRlcnNcclxuXHRcdHRoaXMuX3BDb250ZW50ID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZGlzcG9zZSgpOnZvaWRcclxuXHR7XHJcblxyXG5cdFx0Zm9yICh2YXIgYyBpbiB0aGlzLl9ibG9ja3MpIHtcclxuXHJcblx0XHRcdHZhciBiOkFXREJsb2NrID0gPEFXREJsb2NrPiB0aGlzLl9ibG9ja3NbIGMgXTtcclxuXHRcdFx0Yi5kaXNwb3NlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VOZXh0QmxvY2soKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGJsb2NrOkFXREJsb2NrO1xyXG5cdFx0dmFyIGFzc2V0RGF0YTpJQXNzZXQ7XHJcblx0XHR2YXIgaXNQYXJzZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0dmFyIG5zOm51bWJlcjtcclxuXHRcdHZhciB0eXBlOm51bWJlcjtcclxuXHRcdHZhciBmbGFnczpudW1iZXI7XHJcblx0XHR2YXIgbGVuOm51bWJlcjtcclxuXHJcblx0XHR0aGlzLl9jdXJfYmxvY2tfaWQgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdG5zID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR0eXBlID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRmbGFncyA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0bGVuID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHR2YXIgYmxvY2tDb21wcmVzc2lvbjpib29sZWFuID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzQpO1xyXG5cdFx0dmFyIGJsb2NrQ29tcHJlc3Npb25MWk1BOmJvb2xlYW4gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5T25CbG9ja3MpIHtcclxuXHRcdFx0dGhpcy5fYWNjdXJhY3lNYXRyaXggPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XHJcblx0XHRcdHRoaXMuX2FjY3VyYWN5R2VvID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzIpO1xyXG5cdFx0XHR0aGlzLl9hY2N1cmFjeVByb3BzID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzMpO1xyXG5cdFx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLl9hY2N1cmFjeUdlbykge1xyXG5cdFx0XHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLl9hY2N1cmFjeU1hdHJpeCkge1xyXG5cdFx0XHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuX2FjY3VyYWN5UHJvcHMpIHtcclxuXHRcdFx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGJsb2NrRW5kQWxsOm51bWJlciA9IHRoaXMuX2JvZHkucG9zaXRpb24gKyBsZW47XHJcblxyXG5cdFx0aWYgKGxlbiA+IHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSkge1xyXG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdBV0QyIGJsb2NrIGxlbmd0aCBpcyBiaWdnZXIgdGhhbiB0aGUgYnl0ZXMgdGhhdCBhcmUgYXZhaWxhYmxlIScpO1xyXG5cdFx0XHR0aGlzLl9ib2R5LnBvc2l0aW9uICs9IHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcyA9IG5ldyBCeXRlQXJyYXkoKTtcclxuXHJcblxyXG5cdFx0dGhpcy5fYm9keS5yZWFkQnl0ZXModGhpcy5fbmV3QmxvY2tCeXRlcywgMCwgbGVuKTtcclxuXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIENvbXByZXNzZWQgQVdEIEZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWRcclxuXHJcblx0XHRpZiAoYmxvY2tDb21wcmVzc2lvbikge1xyXG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHQgaWYgKGJsb2NrQ29tcHJlc3Npb25MWk1BKVxyXG5cdFx0XHQge1xyXG5cdFx0XHQgdGhpcy5fbmV3QmxvY2tCeXRlcy51bmNvbXByZXNzKEFXRFBhcnNlci5DT01QUkVTU0lPTk1PREVfTFpNQSk7XHJcblx0XHRcdCB9XHJcblx0XHRcdCBlbHNlXHJcblx0XHRcdCB7XHJcblx0XHRcdCB0aGlzLl9uZXdCbG9ja0J5dGVzLnVuY29tcHJlc3MoKTtcclxuXHRcdFx0IH1cclxuXHRcdFx0ICovXHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvL3RoaXMuX25ld0Jsb2NrQnl0ZXMuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gMDtcclxuXHRcdGJsb2NrID0gbmV3IEFXREJsb2NrKCk7XHJcblx0XHRibG9jay5sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuO1xyXG5cdFx0YmxvY2suaWQgPSB0aGlzLl9jdXJfYmxvY2tfaWQ7XHJcblxyXG5cdFx0dmFyIGJsb2NrRW5kQmxvY2s6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxlbjtcclxuXHJcblx0XHRpZiAoYmxvY2tDb21wcmVzc2lvbikge1xyXG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcblx0XHRcdC8vYmxvY2tFbmRCbG9jayAgID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHRoaXMuX25ld0Jsb2NrQnl0ZXMubGVuZ3RoO1xyXG5cdFx0XHQvL2Jsb2NrLmxlbiAgICAgICA9IGJsb2NrRW5kQmxvY2s7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQVdEQmxvY2s6ICBJRCA9IFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIgfCBUeXBlSUQgPSBcIiArIHR5cGUgKyBcIiB8IENvbXByZXNzaW9uID0gXCIgKyBibG9ja0NvbXByZXNzaW9uICsgXCIgfCBNYXRyaXgtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeU1hdHJpeCArIFwiIHwgR2VvbWV0cnktUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeUdlbyArIFwiIHwgUHJvcGVydGllcy1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5UHJvcHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1t0aGlzLl9jdXJfYmxvY2tfaWRdID0gYmxvY2s7XHJcblxyXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDMpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDApKSB7XHJcblx0XHRcdC8vIHByb2JhYmx5IHNob3VsZCBjb250YWluIHNvbWUgaW5mbyBhYm91dCB0aGUgdHlwZSBvZiBhbmltYXRpb25cclxuXHRcdFx0dmFyIGZhY3RvcnkgPSBuZXcgQVMyU2NlbmVHcmFwaEZhY3RvcnkoKTtcclxuXHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgNDQ6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQXVkaW9CbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQsIGZhY3RvcnkpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA0Oi8vIGp1c3QgYmVjYXVzZSBpIHVzZWQgYmxvY2tJRCA0IGluIGZpcnN0IGV4cG9ydGVyIGVhcmxpZXJcclxuXHRcdFx0XHRjYXNlIDEzMzpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VUaW1lTGluZSh0aGlzLl9jdXJfYmxvY2tfaWQsIGZhY3RvcnkpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA+IDIpfHwoKHRoaXMuX3ZlcnNpb25bMF0gPj0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPj0gMSkpKSB7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIDExOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVByaW1pdHZlcyh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAzMTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa3lib3hJbnN0YW5jZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA0MTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VMaWdodCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA0MjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VDYW1lcmEodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHQvLyAgY2FzZSA0MzpcclxuXHRcdFx0XHQvLyAgICAgIHBhcnNlVGV4dHVyZVByb2plY3RvcihfY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHQvLyAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHQvLyAgICAgIGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDUxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUxpZ2h0UGlja2VyKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDgxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1hdGVyaWFsX3YxKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDgzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUN1YmVUZXh0dXJlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDkxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYXJlZE1ldGhvZEJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDkyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYWRvd01ldGhvZEJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDExMTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoUG9zZUFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQsIHRydWUpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMTI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaFBvc2VBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTEzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVZlcnRleEFuaW1hdGlvblNldCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMjI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQW5pbWF0b3JTZXQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjUzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUNvbW1hbmQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vKi9cclxuXHRcdH1cclxuXHRcdC8vKlxyXG5cdFx0aWYgKGlzUGFyc2VkID09IGZhbHNlKSB7XHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyMjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VDb250YWluZXIodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjM6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaEluc3RhbmNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDgxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1hdGVyaWFsKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDgyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRleHR1cmUodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTAxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNrZWxldG9uKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEwMjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa2VsZXRvblBvc2UodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTAzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNrZWxldG9uQW5pbWF0aW9uKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEyMTpcclxuXHRcdFx0XHQvL3RoaXMucGFyc2VVVkFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdC8vYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyNTQ6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTmFtZVNwYWNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI1NTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXRhRGF0YSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkFXREJsb2NrOiAgIFVua25vd24gQmxvY2tUeXBlICAoQmxvY2tJRCA9IFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIpIC0gU2tpcCBcIiArIGxlbiArIFwiIGJ5dGVzXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArPSBsZW47XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8qL1xyXG5cclxuXHRcdHZhciBtc2dDbnQ6bnVtYmVyID0gMDtcclxuXHRcdGlmICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID09IGJsb2NrRW5kQmxvY2spIHtcclxuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdFx0aWYgKGJsb2NrLmVycm9yTWVzc2FnZXMpIHtcclxuXHRcdFx0XHRcdHdoaWxlIChtc2dDbnQgPCBibG9jay5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgKCEpIEVycm9yOiBcIiArIGJsb2NrLmVycm9yTWVzc2FnZXNbbXNnQ250XSArIFwiICghKVwiKTtcclxuXHRcdFx0XHRcdFx0bXNnQ250Kys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiXFxuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCIgICghKSghKSghKSBFcnJvciB3aGlsZSByZWFkaW5nIEFXREJsb2NrIElEIFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIgPSBza2lwIHRvIG5leHQgYmxvY2tcIik7XHJcblxyXG5cdFx0XHRcdGlmIChibG9jay5lcnJvck1lc3NhZ2VzKSB7XHJcblx0XHRcdFx0XHR3aGlsZSAobXNnQ250IDwgYmxvY2suZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICghKSBFcnJvcjogXCIgKyBibG9jay5lcnJvck1lc3NhZ2VzW21zZ0NudF0gKyBcIiAoISlcIik7XHJcblx0XHRcdFx0XHRcdG1zZ0NudCsrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2JvZHkucG9zaXRpb24gPSBibG9ja0VuZEFsbDtcclxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMgPSBudWxsO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHQvLy0tUGFyc2VyIEJsb2Nrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRwcml2YXRlIHBhcnNlQXVkaW9CbG9jayhibG9ja0lEOm51bWJlciwgZmFjdG9yeTpUaW1lbGluZVNjZW5lR3JhcGhGYWN0b3J5KTp2b2lkIHtcclxuXHJcblx0XHQvL3ZhciBhc3NldDpBdWRpbzt0b2RvIGNyZWF0ZSBhc3NldCBmb3IgYXVkaW9cclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XHJcblxyXG5cdFx0Ly90aGlzLl90ZXh0dXJlX3VzZXJzW3RoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpXSA9IFtdO1xyXG5cclxuXHRcdC8vIEV4dGVybmFsXHJcblx0XHRpZiAodHlwZSA9PSAwKSB7XHJcblx0XHRcdGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0dmFyIHVybDpzdHJpbmc7XHJcblx0XHRcdHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcclxuXHRcdFx0Ly8gdG9kbyBwYXJzZXIgbmVlZHMgdG8gYmUgYWJsZSB0byBoYW5kbGUgbXAzIGFuZCB3YXYgZmlsZXMgaWYgd2UgdHJpZ2dlciB0aGUgbG9hZGluZyBvZiBleHRlcm5hbCByZXNzb3VyY2VcclxuXHRcdFx0Ly90aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbmV3IFVSTFJlcXVlc3QodXJsKSwgZmFsc2UsIG51bGwsIHRydWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkF1ZGlvIHVybCA9IFwiK3VybCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gdG9kbzogZXhwb3J0ZXIgZG9lcyBub3QgZXhwb3J0IGVtYmVkIHNvdW5kcyB5ZXRcclxuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdFx0dmFyIGRhdGE6Qnl0ZUFycmF5O1xyXG5cdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG5cdFx0XHQvLyB0b2RvIHBhcnNlIHNvdW5kIGZyb20gYnl0ZXNcclxuXHRcdFx0Ly8gdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieShkYXRhKSwgdHJ1ZSk7XHJcblx0XHRcdC8vdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBkYXRhLCB0cnVlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWdub3JlIGZvciBub3dcclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmV4dHJhcyA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcFBhdXNlQW5kUmV0cmlldmVEZXBlbmRlbmNpZXMoKTtcclxuXHRcdC8vdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDt0b2RvXHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdHZhciB0ZXh0dXJlU3R5bGVzTmFtZXM6QXJyYXk8c3RyaW5nPiA9IFtcImV4dGVybmFsXCIsIFwiZW1iZWRcIl1cclxuXHRcdFx0Y29uc29sZS5sb2coXCJTdGFydCBwYXJzaW5nIGEgXCIgKyB0ZXh0dXJlU3R5bGVzTmFtZXNbdHlwZV0gKyBcIiBBdWRpbyBmaWxlXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDRcclxuXHRwcml2YXRlIHBhcnNlVGltZUxpbmUoYmxvY2tJRDpudW1iZXIsIGZhY3Rvcnk6VGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSk6dm9pZCB7XHJcblxyXG5cdFx0dmFyIGk6bnVtYmVyO1xyXG5cdFx0dmFyIGo6bnVtYmVyO1xyXG5cdFx0dmFyIGs6bnVtYmVyO1xyXG5cdFx0dmFyIHRpbWVMaW5lQ29udGFpbmVyID0gZmFjdG9yeS5jcmVhdGVNb3ZpZUNsaXAoKTtcclxuXHRcdHZhciBuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIGlzU2NlbmUgPSAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dmFyIHNjZW5lSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBmcHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcclxuXHRcdHZhciBtc19wZXJfZnJhbWUgPSAxMDAwIC8gZnBzO1xyXG5cdFx0dmFyIG51bUZyYW1lcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBvYmplY3RJRE1hcCA6IHsgW2lkOnN0cmluZ106bnVtYmVyOyB9ID0ge307XHJcblxyXG5cdFx0Ly8gdmFyIHByZXZpb3VzVGltZUxpbmU6VGltZUxpbmVGcmFtZTtcclxuXHRcdC8vIHZhciBmaWxsX3Byb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyfSk7Ly8geyAxOlVJTlQzMiwgNjpBV0RTVFJJTkcgfSAgKTsgLy87ICwgMjpVSU5UMzIsIDM6VUlOVDMyLCA1OkJPT0wgfSApO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUSU1FTElORTogTmFtZSA9IFwiICsgbmFtZSArIFwifCBpc1NjZW5lID0gXCIgKyBpc1NjZW5lICsgXCJ8IHNjZW5lSUQgPSBcIiArIHNjZW5lSUQgKyBcInwgbnVtRnJhbWVzID0gXCIgKyBudW1GcmFtZXMpO1xyXG5cclxuXHRcdHZhciB0b3RhbER1cmF0aW9uID0gMDtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBudW1GcmFtZXM7IGkrKykge1xyXG5cclxuXHRcdFx0dmFyIGZyYW1lID0gbmV3IFRpbWVsaW5lS2V5RnJhbWUoKTtcclxuXHRcdFx0dmFyIHRyYWNlU3RyaW5nID0gXCJmcmFtZSA9IFwiICsgaTtcclxuXHRcdFx0Ly8gVE9ETzogcmVtb3ZlIHRoZSBtc19wZXJfZnJhbWUgdG8gc2V0IHRoZSBkdXJhdGlvbiBpbiBmcmFtZXNcclxuXHRcdFx0dmFyIGZyYW1lRHVyYXRpb24gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpICogbXNfcGVyX2ZyYW1lO1xyXG5cdFx0XHRmcmFtZS5zZXRGcmFtZVRpbWUodG90YWxEdXJhdGlvbiwgZnJhbWVEdXJhdGlvbik7XHJcblx0XHRcdHRvdGFsRHVyYXRpb24gKz0gZnJhbWVEdXJhdGlvbjtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImR1cmF0aW9uID0gXCIgKyBmcmFtZUR1cmF0aW9uKTtcclxuXHJcblx0XHRcdHZhciBudW1MYWJlbHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1MYWJlbHM7IGorKykge1xyXG5cdFx0XHRcdHZhciBsYWJlbFR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHR2YXIgbGFiZWwgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHRcdFx0Ly8gVE9ETzogSGFuZGxlIGxhYmVscyBkaWZmZXJlbnRseVxyXG5cdFx0XHRcdC8vdGltZUxpbmVDb250YWluZXIuYWRkRnJhbWVMYWJlbChuZXcgRnJhbWVMYWJlbChsYWJlbCwgbGFiZWxUeXBlLCBmcmFtZSkpO1xyXG5cdFx0XHRcdHRyYWNlU3RyaW5nICs9IFwiXFxuICAgICBsYWJlbCA9IFwiICsgbGFiZWwgKyBcIiAtIGxhYmVsVHlwZSA9IFwiICsgbGFiZWxUeXBlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbnVtQ29tbWFuZHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdHZhciBjb21tYW5kU3RyaW5nID0gXCJcXG4gICAgICBDb21tYW5kcyBcIiArIG51bUNvbW1hbmRzO1xyXG5cdFx0XHR2YXIgaGFzRGVwdGhDaGFuZ2VzID0gZmFsc2U7XHJcblx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1Db21tYW5kczsgaisrKSB7XHJcblx0XHRcdFx0dmFyIG9iamVjdElEOm51bWJlcjtcclxuXHRcdFx0XHR2YXIgcmVzb3VyY2VJRDpudW1iZXI7XHJcblx0XHRcdFx0dmFyIGNvbW1hbmRUeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdFx0XHQvLyAxID0gQWRkIG9iamVjdCBieSBsb2NhbCBpZCAoYXdkLWJsb2NrLWlkKSArIHVwZGF0ZSBwcm9wZXJ0aWVzXHJcblx0XHRcdFx0Ly8gMiA9IEFkZCBvYmplY3QgYnkgZ2xvYmFsIGlkIChzdHJpbmcgaWRlbnRpZmllcikgKyB1cGRhdGUgcHJvcGVydGllcyAhTm90IHVzZWQgeWV0LiFcclxuXHRcdFx0XHQvLyAzID0gVXBkYXRlT2JqZWN0IC0gdXBkYXRlIGEgb2JqZWN0IHRoYXQgaXMgYWxyZWFkeSBwcmVzZW50XHJcblx0XHRcdFx0Ly8gNCA9IHJlbW92ZSBvYmplY3RcclxuXHRcdFx0XHQvLyA1ID0gYWRkIC8gdXBkYXRlIHNvdW5kXHJcblxyXG5cdFx0XHRcdHN3aXRjaCAoY29tbWFuZFR5cGUpIHtcclxuXHJcblx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRjYXNlIDM6XHJcblxyXG5cdFx0XHRcdFx0XHRvYmplY3RJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0XHRcdHZhciBpbnN0YW5jZUlEPTA7IC8vIG11c3QgYmUgc2V0IGluIGZvbGxpbmcgY29uZGl0aW9uczpcclxuXHRcdFx0XHRcdFx0aWYgKGNvbW1hbmRUeXBlPT0xKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcyBjb21tYW5kcyBsb29rcyBmb3IgYSBvYmplY3QgYnkgYXdkLWlkIGFuZCBwdXRzIGl0IGludG8gdGhlIHRpbWVsaW5lXHJcblx0XHRcdFx0XHRcdFx0cmVzb3VyY2VJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBuZXdDaGlsZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIG51bUZpbGxzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgbnVtYmVyIG9mIGZpbGxzID0gXCIgKyBudW1GaWxscztcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gc291bmQgaXMgYWRkZWQgdG8gdGltZWxpbmUgd2l0aCBkZWRpY2F0ZWQgQ29tbWFuZCwgYXMgaXQgaXMgbm8gZGlzcGxheS1vYmplY3QgKGhhcyBubyBtYXRyaXggZXRjKVxyXG5cdFx0XHRcdFx0XHRcdC8vIGNoZWNrIGlmIGEgR2VvbWV0cnkgY2FuIGJlIGZvdW5kIGF0IHRoZSByZXNvdXJjZUlEIChBV0QtSUQpXHJcblx0XHRcdFx0XHRcdFx0dmFyIHJldHVybmVkQXJyYXk6YW55W10gPSB0aGlzLmdldEFzc2V0QnlJRChyZXNvdXJjZUlELCBbIEFzc2V0VHlwZS5HRU9NRVRSWSBdKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGdlb20gPSA8R2VvbWV0cnk+cmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHRcdFx0XHRcdG5ld0NoaWxkID0gbmV3IE1lc2goZ2VvbSk7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBnZW9tZXRyeSBmb3VuZC4gY3JlYXRlIG5ldyBDb21tYW5kLCBhZGQgdGhlIHByb3BzIGFuZCB0aGUgbWF0ZXJpYWxzIHRvIGl0XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGsgPSAwOyBrIDwgbnVtRmlsbHM7IGsrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWRBcnJheTI6YW55W10gPSB0aGlzLmdldEFzc2V0QnlJRCh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpLCBbIEFzc2V0VHlwZS5NQVRFUklBTCBdKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXkyWzBdICYmIG5ld0NoaWxkLnN1Yk1lc2hlcy5sZW5ndGggPiBrKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5ld0NoaWxkLnN1Yk1lc2hlc1trXS5tYXRlcmlhbCA9IHJldHVybmVkQXJyYXkyWzFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBubyBnZW9tZXRyeSBmb3VuZCwgc28gd2UgY2hlY2sgZm9yIFRJTUVMSU5FLlxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdGhlcmUgc2hvdWxkIGJlIG5vIGZpbGxzIGluIHRoaXMgY2FzZSwgYnV0IGdlb21ldHJ5IGNoZWNrIG1pZ2h0IGhhdmUgZmFpbGVkLCBhbmQgZmlsbC1pZHMgc3RpbGwgbmVlZCB0byBiZSBwYXJzZWRcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAoayA9IDA7IGsgPCBudW1GaWxsczsgaysrKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZEFycmF5OmFueVtdID0gdGhpcy5nZXRBc3NldEJ5SUQocmVzb3VyY2VJRCwgWyBBc3NldFR5cGUuVElNRUxJTkUgXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmV3Q2hpbGQgPSA8TW92aWVDbGlwPnJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZUlEID0gdGltZUxpbmVDb250YWluZXIucmVnaXN0ZXJQb3RlbnRpYWxDaGlsZChuZXdDaGlsZCk7XHJcblx0XHRcdFx0XHRcdFx0b2JqZWN0SURNYXBbb2JqZWN0SURdID0gaW5zdGFuY2VJRDtcclxuXHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBBZGRDaGlsZENvbW1hbmQoaW5zdGFuY2VJRCkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2VOYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChpbnN0YW5jZU5hbWUubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJuYW1lXCIsIGluc3RhbmNlTmFtZSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU5hbWUgPSBcIiArIGluc3RhbmNlTmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgIC0gQWRkIG5ldyBSZXNvdXJjZSA9IFwiICsgcmVzb3VyY2VJRCArIFwiIGFzIG9iamVjdF9pZCA9IFwiICsgb2JqZWN0SUQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoY29tbWFuZFR5cGU9PTIpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyB0aGlzIGNvbW1hbmRzIGxvb2tzIGZvciBhIG9iamVjdCBieSBnbG9iYWwgc3RyaW5nIGlkZW50aWZpZXIgYW5kIHB1dHMgaXQgaW50byB0aGUgdGltZWxpbmVcclxuXHRcdFx0XHRcdFx0XHQvLyB0aGlzIGlzIG5vdCB1c2VkIHlldCwgYnV0IG1pZ2h0IGJlIHVzZWZ1bCB0byBkbyB0aGluZ3MgbGlrZSB0ZXh0LWxvY2FsaXphdGlvblxyXG5cdFx0XHRcdFx0XHRcdHZhciBnbG9iYWxfcmVzc291cmNlX2lkID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0XHRcdFx0XHRcdC8vIHRvZG8gKGlmIG5lZWRlZClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZUlEID0gb2JqZWN0SURNYXBbb2JqZWN0SURdO1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIFVwZGF0ZSBvYmplY3RfaWQgPSBcIiArIG9iamVjdElEO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIHJlYWQgdGhlIGNvbW1hbmQgcHJvcGVydGllc1xyXG5cdFx0XHRcdFx0XHQvLyAxOiBtYXRyaXgyZCAoNiB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIG1hdHJpeClcclxuXHRcdFx0XHRcdFx0Ly8gMjogbWF0cml4MmQgKDEyIHggbnVtYmVyIHdpdGggc3RvcmFnZSBwcmVjaXNpb24gbWF0cml4KSBub3QgdXNlZCB5ZXRcclxuXHRcdFx0XHRcdFx0Ly8gMzogY29sb3J0cmFuc2Zvcm0gKDIwIHggbnVtYmVyIHdpdGggc3RvcmFnZSBwcmVjaXNpb24gcHJvcGVydGllcylcclxuXHRcdFx0XHRcdFx0Ly8gNDogYmxlbmRtb2RlICh1aW50OClcclxuXHRcdFx0XHRcdFx0Ly8gNTogdmlzaWJpbHR5ICh1aW50OClcclxuXHRcdFx0XHRcdFx0Ly8gNjogZGVwdGggKHVpbnQzMilcclxuXHRcdFx0XHRcdFx0Ly8gNzogbWFzayAodWludDMyKVxyXG5cclxuXHRcdFx0XHRcdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX3Byb3BzTnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOCwgNTpBV0RQYXJzZXIuVUlOVDgsIDY6QVdEUGFyc2VyLlVJTlQzMiwgNzpBV0RQYXJzZXIuVUlOVDMyfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgbWF0cml4XzJkOkZsb2F0MzJBcnJheSA9IHByb3BzLmdldCgxLCBbXSk7XHJcblx0XHRcdFx0XHRcdC8vdmFyIG1hdHJpeF8zZDpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMiwgW10pO1xyXG5cdFx0XHRcdFx0XHR2YXIgY29sb3J0cmFuc2Zvcm06RmxvYXQzMkFycmF5ID0gcHJvcHMuZ2V0KDMsIFtdKTtcclxuXHRcdFx0XHRcdFx0dmFyIGJsZW5kbW9kZTpudW1iZXIgPSBwcm9wcy5nZXQoNCwgLTEpO1xyXG5cdFx0XHRcdFx0XHR2YXIgdmlzaWJpbHR5Om51bWJlciA9IHByb3BzLmdldCg1LCAtMSk7XHJcblx0XHRcdFx0XHRcdHZhciBkZXB0aDpudW1iZXIgPSBwcm9wcy5nZXQoNiwgLTEpO1xyXG5cdFx0XHRcdFx0XHR2YXIgbWFzazpudW1iZXIgPSBwcm9wcy5nZXQoNywgLTEpO1xyXG5cdFx0XHRcdFx0XHQvLyB0b2RvOiBoYW5kbGUgZmlsdGVyc1xyXG5cclxuXHRcdFx0XHRcdFx0Ly9tYXRyaXgyZCBtdXN0IHByb3ZpZGUgNiB2YWx1ZXMgdG8gYmUgdmFsaWRcclxuXHJcblx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXJyYXkgPSBcIiArIG1hdHJpeF8yZC5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdGlmIChtYXRyaXhfMmQubGVuZ3RoPT02KSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHRoaXNNYXRyaXggPSBuZXcgTWF0cml4M0QoKTtcclxuXHRcdFx0XHRcdFx0XHQvLyB0b2RvIHNldCByb3RhdGlvbiArIHNjYWxlIGZyb20gbWF0cml4IDJ4MyB0byBtYXRyaXgzZFxyXG5cdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucG9zaXRpb24gPSBuZXcgVmVjdG9yM0QobWF0cml4XzJkWzRdLCBtYXRyaXhfMmRbNV0sIDApO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucmF3RGF0YVswXT1tYXRyaXhfMmRbMF07XHJcblx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5yYXdEYXRhWzFdPW1hdHJpeF8yZFsxXTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzTWF0cml4LnJhd0RhdGFbNF09bWF0cml4XzJkWzJdO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucmF3RGF0YVs1XT1tYXRyaXhfMmRbM107XHJcblx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwiX2lNYXRyaXgzRFwiLCB0aGlzTWF0cml4KSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXJyYXkgPSBcIiArIG1hdHJpeF8yZDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvL21hdHJpeDJkIG11c3QgcHJvdmlkZSAyMCB2YWx1ZXMgdG8gYmUgdmFsaWRcclxuXHRcdFx0XHRcdFx0aWYgKGNvbG9ydHJhbnNmb3JtLmxlbmd0aD09MjApIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBzZXQgQ29sb3JUcmFuc2Zvcm0gb24gb2JqZWN0UHJvcHNcclxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIGNvbG9yTWF0cml4ID0gXCIgKyBjb2xvcnRyYW5zZm9ybTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gYmxlbmRtb2RlIG11c3QgYmUgcG9zaXRpdmUgdG8gYmUgdmFsaWRcclxuXHRcdFx0XHRcdFx0aWYgKGJsZW5kbW9kZT49MCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBibGVuZG1vZGVfc3RyaW5nOnN0cmluZyA9IHRoaXMuYmxlbmRNb2RlRGljW2JsZW5kbW9kZV07XHJcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2V0IEJsZW5kbW9kZSBvbiBvYmplY3RQcm9wc1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgQmxlbmRNb2RlID0gXCIgKyBibGVuZG1vZGVfc3RyaW5nO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIHZpc2liaWx0eSBtdXN0IGJlIHBvc2l0aXZlIHRvIGJlIHZhbGlkXHJcblx0XHRcdFx0XHRcdGlmICh2aXNpYmlsdHk+PTApIHtcclxuXHRcdFx0XHRcdFx0XHRpZih2aXNpYmlsdHk9PTApXHJcblx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJ2aXNpYmxlXCIsIGZhbHNlKSk7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwidmlzaWJsZVwiLCB0cnVlKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gZGVwdGggbXVzdCBiZSBwb3NpdGl2ZSB0byBiZSB2YWxpZFxyXG5cdFx0XHRcdFx0XHRpZiAoZGVwdGg+PTApIHtcclxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIERlcHRoID0gXCIgKyBkZXB0aDtcclxuXHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJfX0FTMkRlcHRoXCIsIGRlcHRoKSk7XHJcblx0XHRcdFx0XHRcdFx0aGFzRGVwdGhDaGFuZ2VzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyBtYXNrIG11c3QgYmUgcG9zaXRpdmUgdG8gYmUgdmFsaWQuIGkgdGhpbmsgb25seSBhZGQtY29tbWFuZHMgd2lsbCBoYXZlIHRoaXMgdmFsdWUuXHJcblx0XHRcdFx0XHRcdC8vIGUuZy4gaXQgc2hvdWxkIG5ldmVyIGJlIHVwZGF0ZWQgb24gYWxyZWFkeSBleGlzdGluZyBvYmplY3RzLiAoYmVjYXVzZSBkZXB0aCBvZiBvYmplY3RzIGNhbiBjaGFuZ2UsIGkgYW0gbm90IHN1cmUpXHJcblx0XHRcdFx0XHRcdGlmIChtYXNrPj0wKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBNYXNrLXVwIHRvIG9iai1pZDogXCIgKyBtYXNrO1xyXG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBkZXB0aENsaXBDaGFuZ2Ugb24gb2JqZWN0UHJvcHNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyB0b2RvOiBoYW5kbGUgZmlsdGVyc1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDQ6XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgT2JqZWN0IENvbW1hbmRcclxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2VJRCA9IG9iamVjdElETWFwW29iamVjdElEXTtcclxuXHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgUmVtb3ZlQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcclxuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAtIFJlbW92ZSBvYmplY3Qgd2l0aCBJRDogXCIgKyBvYmplY3RJRDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSA1OlxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQWRkIFNvdW5kIENvbW1hbmRcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogY3JlYXRlIENvbW1hbmRQcm9wc1NvdW5kIGFuZCBjaGVjayB3aGljaCBhc3NldCB0byB1c2VcclxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHRyZXNvdXJjZUlEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaW1wbGVtZW50IHNvdW5kIGluIHRpbWVsaW5lXHJcblx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIEFkZCBuZXcgU291bmQgQVdELUlEID0gXCIgKyByZXNvdXJjZUlELnRvU3RyaW5nKCkgKyBcIiBhcyBvYmplY3RfaWQgPSBcIiArIG9iamVjdElELnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgIC0gVW5rbm93biBDb21tYW5kIFR5cGUgPSBcIiArIGNvbW1hbmRUeXBlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaGFzRGVwdGhDaGFuZ2VzKSB7XHJcblx0XHRcdFx0Ly8gb25seSB3YW50IHRvIGRvIHRoaXMgb25jZSBhZnRlciBhbGwgY2hpbGRyZW4ncyBkZXB0aCB2YWx1ZXMgYXJlIHVwZGF0ZWRcclxuXHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBBcHBseUFTMkRlcHRoc0NvbW1hbmQoKSk7XHJcblx0XHRcdFx0aGFzRGVwdGhDaGFuZ2VzID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBsZW5ndGhfY29kZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdGlmIChsZW5ndGhfY29kZSA+IDApIHtcclxuXHRcdFx0XHQvLyBUT0RPOiBTY3JpcHQgc2hvdWxkIHByb2JhYmx5IG5vdCBiZSBhdHRhY2hlZCB0byBrZXlmcmFtZXM/XHJcblx0XHRcdFx0dmFyIGZyYW1lX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW5ndGhfY29kZSk7XHJcblx0XHRcdFx0Ly9mcmFtZS5hZGRUb1NjcmlwdChmcmFtZV9jb2RlKTtcclxuXHRcdFx0XHR0cmFjZVN0cmluZyArPSBcIlxcbmZyYW1lLWNvZGUgPSBcIiArIGZyYW1lX2NvZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0dHJhY2VTdHJpbmcgKz0gY29tbWFuZFN0cmluZztcclxuXHRcdFx0Ly90cmFjZShcImxlbmd0aF9jb2RlID0gXCIrbGVuZ3RoX2NvZGUrXCIgZnJhbWVfY29kZSA9IFwiK2ZyYW1lX2NvZGUpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpOy8vIHVzZXIgYXR0cmlidXRlcyAtIHNraXAgZm9yIG5vd1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRyYWNlU3RyaW5nKTtcclxuXHRcdFx0dGltZUxpbmVDb250YWluZXIuYWRkRnJhbWUoZnJhbWUpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PnRpbWVMaW5lQ29udGFpbmVyLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gdGltZUxpbmVDb250YWluZXI7XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDFcclxuXHRwcml2YXRlIHBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHJcblx0XHR2YXIgZ2VvbTpHZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xyXG5cclxuXHRcdC8vIFJlYWQgbmFtZSBhbmQgc3ViIGNvdW50XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbnVtX3N1YnM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdC8vIFJlYWQgb3B0aW9uYWwgcHJvcGVydGllc1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9nZW9OclR5cGUsIDI6dGhpcy5fZ2VvTnJUeXBlfSk7XHJcblx0XHR2YXIgZ2VvU2NhbGVVOm51bWJlciA9IHByb3BzLmdldCgxLCAxKTtcclxuXHRcdHZhciBnZW9TY2FsZVY6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDEpO1xyXG5cclxuXHRcdC8vIExvb3AgdGhyb3VnaCBzdWIgbWVzaGVzXHJcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyID0gMDtcclxuXHRcdHdoaWxlIChzdWJzX3BhcnNlZCA8IG51bV9zdWJzKSB7XHJcblx0XHRcdHZhciBpc19jdXJ2ZV9nZW9tOmJvb2xlYW49ZmFsc2U7XHJcblx0XHRcdHZhciBpOm51bWJlcjtcclxuXHRcdFx0dmFyIHNtX2xlbjpudW1iZXIsIHNtX2VuZDpudW1iZXI7XHJcblx0XHRcdHZhciB3X2luZGljZXM6QXJyYXk8bnVtYmVyPjtcclxuXHRcdFx0dmFyIHdlaWdodHM6QXJyYXk8bnVtYmVyPjtcclxuXHJcblx0XHRcdHNtX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHNtX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzbV9sZW47XHJcblxyXG5cdFx0XHR2YXIgc3ViUHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX2dlb05yVHlwZSwgMjp0aGlzLl9nZW9OclR5cGV9KTtcclxuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xyXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHNtX2VuZCkge1xyXG5cdFx0XHRcdHZhciBpZHg6bnVtYmVyID0gMDtcclxuXHRcdFx0XHR2YXIgc3RyX2Z0eXBlOm51bWJlciwgc3RyX3R5cGU6bnVtYmVyLCBzdHJfbGVuOm51bWJlciwgc3RyX2VuZDpudW1iZXI7XHJcblxyXG5cdFx0XHRcdC8vIFR5cGUsIGZpZWxkIHR5cGUsIGxlbmd0aFxyXG5cdFx0XHRcdHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0c3RyX2Z0eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0c3RyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xyXG5cclxuXHRcdFx0XHR2YXIgeDpudW1iZXIsIHk6bnVtYmVyLCB6Om51bWJlcjtcclxuXHJcblx0XHRcdFx0aWYgKHN0cl90eXBlID09IDEpIHsvL3ZlcnRleCAzZCBwb3NpdGlvbnNcclxuXHRcdFx0XHRcdHZhciB2ZXJ0czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHJcblx0XHRcdFx0XHRcdHggPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0XHR5ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHRcdFx0XHRcdFx0eiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB4O1xyXG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB5O1xyXG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB6O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMikgey8vZmFjZSBpbmRpY2llcyBwb3NpdGlvbnNcclxuXHRcdFx0XHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAzKSB7XHJcblx0XHRcdFx0XHR2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdHV2c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDQpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgbm9ybWFsczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0bm9ybWFsc1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDYpIHtcclxuXHRcdFx0XHRcdHdfaW5kaWNlcyA9IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0d19pbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSozO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDcpIHtcclxuXHJcblx0XHRcdFx0XHR3ZWlnaHRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0d2VpZ2h0c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gOCkgey8vIDJkLXBvc2l0aW9ucyAtIG5vdCB1c2VkIHlldC5cclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gOSkgey8vIGNvbWJpbmVkIHZlcnRleDNEIHN0cmVhbSAxMyB4IGZsb2F0MzJcclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMTApIHsvLyBjb21iaW5lZCB2ZXJ0ZXgyRCBzdHJlYW0gNSB4IGZsb2F0MzJcclxuXHRcdFx0XHRcdGlzX2N1cnZlX2dlb209dHJ1ZTtcclxuXHRcdFx0XHRcdHZhciBpZHhfcG9zOm51bWJlciA9IDA7XHJcblx0XHRcdFx0XHR2YXIgaWR4X2N1cnZlczpudW1iZXIgPSAwO1xyXG5cdFx0XHRcdFx0dmFyIGlkeF91dnM6bnVtYmVyID0gMDtcclxuXHJcblx0XHRcdFx0XHR2YXIgcG9zaXRpb25zOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0XHRcdFx0dmFyIGN1cnZlRGF0YTpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0XHRcdHZhciB1dnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geVxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9ICB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHR5cGVcclxuXHJcblx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXHJcblx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAyXHJcblxyXG5cdFx0XHRcdFx0XHR1dnNbaWR4X3V2cysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxyXG5cdFx0XHRcdFx0XHR1dnNbaWR4X3V2cysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpOyAvLyBJZ25vcmUgc3ViLW1lc2ggYXR0cmlidXRlcyBmb3Igbm93XHJcblx0XHRcdGlmKGlzX2N1cnZlX2dlb20pe1xyXG5cdFx0XHRcdHZhciBjdXJ2ZV9zdWJfZ2VvbTpDdXJ2ZVN1Ykdlb21ldHJ5ID0gbmV3IEN1cnZlU3ViR2VvbWV0cnkodHJ1ZSk7XHJcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVDdXJ2ZXMoY3VydmVEYXRhKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVVVnModXZzKTtcclxuXHRcdFx0XHRnZW9tLmFkZFN1Ykdlb21ldHJ5KGN1cnZlX3N1Yl9nZW9tKTtcclxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIEN1cnZlU3ViR2VvbWV0cnlcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dmFyIHRyaWFuZ2xlX3N1Yl9nZW9tID0gbmV3IFRyaWFuZ2xlU3ViR2VvbWV0cnkodHJ1ZSk7XHJcblx0XHRcdFx0aWYgKHdlaWdodHMpXHJcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5qb2ludHNQZXJWZXJ0ZXggPSB3ZWlnaHRzLmxlbmd0aCAvICh2ZXJ0cy5sZW5ndGggLyAzKTtcclxuXHRcdFx0XHRpZiAobm9ybWFscylcclxuXHRcdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKHV2cylcclxuXHRcdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLmF1dG9EZXJpdmVVVnMgPSBmYWxzZTtcclxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5hdXRvRGVyaXZlTm9ybWFscyA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmICh0cnVlKSB7XHJcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5hdXRvRGVyaXZlVGFuZ2VudHMgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVJbmRpY2VzKGluZGljZXMpO1xyXG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyh2ZXJ0cyk7XHJcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlVmVydGV4Tm9ybWFscyhub3JtYWxzKTtcclxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVVVnModXZzKTtcclxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVWZXJ0ZXhUYW5nZW50cyhudWxsKTtcclxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVKb2ludFdlaWdodHMod2VpZ2h0cyk7XHJcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlSm9pbnRJbmRpY2VzKHdfaW5kaWNlcyk7XHJcblxyXG5cdFx0XHRcdHZhciBzY2FsZVU6bnVtYmVyID0gc3ViUHJvcHMuZ2V0KDEsIDEpO1xyXG5cdFx0XHRcdHZhciBzY2FsZVY6bnVtYmVyID0gc3ViUHJvcHMuZ2V0KDIsIDEpO1xyXG5cdFx0XHRcdHZhciBzZXRTdWJVVnM6Ym9vbGVhbiA9IGZhbHNlOyAvL3RoaXMgc2hvdWxkIHJlbWFpbiBmYWxzZSBhdG0sIGJlY2F1c2UgaW4gQXdheUJ1aWxkZXIgdGhlIHV2IGlzIG9ubHkgc2NhbGVkIGJ5IHRoZSBnZW9tZXRyeVxyXG5cclxuXHRcdFx0XHRpZiAoKGdlb1NjYWxlVSAhPSBzY2FsZVUpIHx8IChnZW9TY2FsZVYgIT0gc2NhbGVWKSkge1xyXG5cdFx0XHRcdFx0c2V0U3ViVVZzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHNjYWxlVSA9IGdlb1NjYWxlVSAvIHNjYWxlVTtcclxuXHRcdFx0XHRcdHNjYWxlViA9IGdlb1NjYWxlViAvIHNjYWxlVjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChzZXRTdWJVVnMpXHJcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5zY2FsZVVWKHNjYWxlVSwgc2NhbGVWKTtcclxuXHRcdFx0XHRnZW9tLmFkZFN1Ykdlb21ldHJ5KHRyaWFuZ2xlX3N1Yl9nZW9tKTtcclxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFRyaWFuZ2xlU3ViR2VvbWV0cnlcIik7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHQvLyBUT0RPOiBTb21laG93IG1hcCBpbi1zdWIgdG8gb3V0LXN1YiBpbmRpY2VzIHRvIGVuYWJsZSBsb29rLXVwXHJcblx0XHRcdC8vIHdoZW4gY3JlYXRpbmcgbWVzaGVzIChhbmQgdGhlaXIgbWF0ZXJpYWwgYXNzaWdubWVudHMuKVxyXG5cclxuXHRcdFx0c3Vic19wYXJzZWQrKztcclxuXHRcdH1cclxuXHRcdGlmICgoZ2VvU2NhbGVVICE9IDEpIHx8IChnZW9TY2FsZVYgIT0gMSkpXHJcblx0XHRcdGdlb20uc2NhbGVVVihnZW9TY2FsZVUsIGdlb1NjYWxlVik7XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGdlb20sIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBnZW9tO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFRyaWFuZ2xlR2VvbWV0cnk6IE5hbWUgPSBcIiArIG5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxuXHQvL0Jsb2NrIElEID0gMTFcclxuXHRwcml2YXRlIHBhcnNlUHJpbWl0dmVzKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nO1xyXG5cdFx0dmFyIHByZWZhYjpQcmVmYWJCYXNlO1xyXG5cdFx0dmFyIHByaW1UeXBlOm51bWJlcjtcclxuXHRcdHZhciBzdWJzX3BhcnNlZDpudW1iZXI7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcztcclxuXHRcdHZhciBic206TWF0cml4M0Q7XHJcblxyXG5cdFx0Ly8gUmVhZCBuYW1lIGFuZCBzdWIgY291bnRcclxuXHRcdG5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHRwcmltVHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTAxOnRoaXMuX2dlb05yVHlwZSwgMTAyOnRoaXMuX2dlb05yVHlwZSwgMTAzOnRoaXMuX2dlb05yVHlwZSwgMTEwOnRoaXMuX2dlb05yVHlwZSwgMTExOnRoaXMuX2dlb05yVHlwZSwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCAzMDM6QVdEUGFyc2VyLlVJTlQxNiwgNzAxOkFXRFBhcnNlci5CT09MLCA3MDI6QVdEUGFyc2VyLkJPT0wsIDcwMzpBV0RQYXJzZXIuQk9PTCwgNzA0OkFXRFBhcnNlci5CT09MfSk7XHJcblxyXG5cdFx0dmFyIHByaW1pdGl2ZVR5cGVzOkFycmF5PHN0cmluZz4gPSBbXCJVbnN1cHBvcnRlZCBUeXBlLUlEXCIsIFwiUHJpbWl0aXZlUGxhbmVQcmVmYWJcIiwgXCJQcmltaXRpdmVDdWJlUHJlZmFiXCIsIFwiUHJpbWl0aXZlU3BoZXJlUHJlZmFiXCIsIFwiUHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWJcIiwgXCJQcmltaXRpdmVzQ29uZVByZWZhYlwiLCBcIlByaW1pdGl2ZXNDYXBzdWxlUHJlZmFiXCIsIFwiUHJpbWl0aXZlc1RvcnVzUHJlZmFiXCJdXHJcblxyXG5cdFx0c3dpdGNoIChwcmltVHlwZSkge1xyXG5cdFx0XHQvLyB0byBkbywgbm90IGFsbCBwcm9wZXJ0aWVzIGFyZSBzZXQgb24gYWxsIHByaW1pdGl2ZXNcclxuXHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlUGxhbmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgMTAwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMSksIHByb3BzLmdldCgzMDIsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSwgcHJvcHMuZ2V0KDcwMiwgZmFsc2UpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ3ViZVByZWZhYihwcm9wcy5nZXQoMTAxLCAxMDApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMTAzLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxKSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCgzMDMsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVNwaGVyZVByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMTIpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgNTApLCBwcm9wcy5nZXQoMTAzLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDEpLCB0cnVlLCB0cnVlLCB0cnVlKTsgLy8gYm9vbDcwMSwgYm9vbDcwMiwgYm9vbDcwMywgYm9vbDcwNCk7XHJcblx0XHRcdFx0aWYgKCFwcm9wcy5nZXQoNzAxLCB0cnVlKSlcclxuXHRcdFx0XHRcdCg8UHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWI+cHJlZmFiKS50b3BDbG9zZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAoIXByb3BzLmdldCg3MDIsIHRydWUpKVxyXG5cdFx0XHRcdFx0KDxQcmltaXRpdmVDeWxpbmRlclByZWZhYj5wcmVmYWIpLmJvdHRvbUNsb3NlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmICghcHJvcHMuZ2V0KDcwMywgdHJ1ZSkpXHJcblx0XHRcdFx0XHQoPFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiPnByZWZhYikueVVwID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSA1OlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDb25lUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIHRydWUpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgNjpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ2Fwc3VsZVByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMTUpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDc6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVRvcnVzUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgNTApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDgpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmVmYWJCYXNlKCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFUlJPUjogVU5TVVBQT1JURUQgUFJFRkFCX1RZUEVcIik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKChwcm9wcy5nZXQoMTEwLCAxKSAhPSAxKSB8fCAocHJvcHMuZ2V0KDExMSwgMSkgIT0gMSkpIHtcclxuXHRcdFx0Ly9nZW9tLnN1Ykdlb21ldHJpZXM7XHJcblx0XHRcdC8vZ2VvbS5zY2FsZVVWKHByb3BzLmdldCgxMTAsIDEpLCBwcm9wcy5nZXQoMTExLCAxKSk7IC8vVE9ETyBhZGQgYmFjayBzY2FsaW5nIHRvIHByZWZhYnNcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHByZWZhYi5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHByZWZhYiwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHByZWZhYjtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0aWYgKChwcmltVHlwZSA8IDApIHx8IChwcmltVHlwZSA+IDcpKSB7XHJcblx0XHRcdFx0cHJpbVR5cGUgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgUHJpbWl2aXRlOiBOYW1lID0gXCIgKyBuYW1lICsgXCJ8IHR5cGUgPSBcIiArIHByaW1pdGl2ZVR5cGVzW3ByaW1UeXBlXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBCbG9jayBJRCA9IDIyXHJcblx0cHJpdmF0ZSBwYXJzZUNvbnRhaW5lcihibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBuYW1lOnN0cmluZztcclxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyO1xyXG5cdFx0dmFyIG10eDpNYXRyaXgzRDtcclxuXHRcdHZhciBjdHI6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcclxuXHRcdHZhciBwYXJlbnQ6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcclxuXHJcblx0XHRwYXJfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0bXR4ID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHRuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XHJcblx0XHRjdHIgPSBuZXcgRGlzcGxheU9iamVjdENvbnRhaW5lcigpO1xyXG5cdFx0Y3RyLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcclxuXHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pO1xyXG5cclxuXHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdHZhciBvYmo6RGlzcGxheU9iamVjdCA9ICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVsxXSkuYWRkQ2hpbGQoY3RyKTtcclxuXHRcdFx0cGFyZW50TmFtZSA9ICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdH0gZWxzZSBpZiAocGFyX2lkID4gMCkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbIGJsb2NrSUQgXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIE9iamVjdENvbnRhaW5lcjNEXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcclxuXHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQoY3RyKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbiBBV0QgdmVyc2lvbiAyLjEgd2UgcmVhZCB0aGUgQ29udGFpbmVyIHByb3BlcnRpZXNcclxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAyKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAxKSkge1xyXG5cdFx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xyXG5cdFx0XHRjdHIucGl2b3QgPSBuZXcgVmVjdG9yM0QocHJvcHMuZ2V0KDEsIDApLCBwcm9wcy5nZXQoMiwgMCksIHByb3BzLmdldCgzLCAwKSk7XHJcblx0XHR9XHJcblx0XHQvLyBpbiBvdGhlciB2ZXJzaW9ucyB3ZSBkbyBub3QgcmVhZCB0aGUgQ29udGFpbmVyIHByb3BlcnRpZXNcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyB0aGUgZXh0cmFQcm9wZXJ0aWVzIHNob3VsZCBvbmx5IGJlIHNldCBmb3IgQVdEMi4xLUZpbGVzLCBidXQgaXMgcmVhZCBmb3IgYm90aCB2ZXJzaW9uc1xyXG5cdFx0Y3RyLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gY3RyLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY3RyO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIENvbnRhaW5lcjogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBCbG9jayBJRCA9IDIzXHJcblx0cHJpdmF0ZSBwYXJzZU1lc2hJbnN0YW5jZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBudW1fbWF0ZXJpYWxzOm51bWJlcjtcclxuXHRcdHZhciBtYXRlcmlhbHNfcGFyc2VkOm51bWJlcjtcclxuXHRcdHZhciBwYXJlbnQ6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcclxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XHJcblx0XHR2YXIgZGF0YV9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIGdlb206R2VvbWV0cnk7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheUdlb21ldHJ5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChkYXRhX2lkLCBbQXNzZXRUeXBlLkdFT01FVFJZXSlcclxuXHJcblx0XHRpZiAocmV0dXJuZWRBcnJheUdlb21ldHJ5WzBdKSB7XHJcblx0XHRcdGdlb20gPSA8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlHZW9tZXRyeVsxXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgR2VvbWV0cnkgZm9yIHRoaXMgTWVzaC4gQSBlbXB0eSBHZW9tZXRyeSBpcyBjcmVhdGVkIVwiKTtcclxuXHRcdFx0Z2VvbSA9IG5ldyBHZW9tZXRyeSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5nZW9JRCA9IGRhdGFfaWQ7XHJcblx0XHR2YXIgbWF0ZXJpYWxzOkFycmF5PE1hdGVyaWFsQmFzZT4gPSBuZXcgQXJyYXk8TWF0ZXJpYWxCYXNlPigpO1xyXG5cdFx0bnVtX21hdGVyaWFscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHR2YXIgbWF0ZXJpYWxOYW1lczpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHRcdG1hdGVyaWFsc19wYXJzZWQgPSAwO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5TWF0ZXJpYWw6QXJyYXk8YW55PjtcclxuXHJcblx0XHR3aGlsZSAobWF0ZXJpYWxzX3BhcnNlZCA8IG51bV9tYXRlcmlhbHMpIHtcclxuXHRcdFx0dmFyIG1hdF9pZDpudW1iZXI7XHJcblx0XHRcdG1hdF9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHJldHVybmVkQXJyYXlNYXRlcmlhbCA9IHRoaXMuZ2V0QXNzZXRCeUlEKG1hdF9pZCwgW0Fzc2V0VHlwZS5NQVRFUklBTF0pXHJcblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlNYXRlcmlhbFswXSkgJiYgKG1hdF9pZCA+IDApKSB7XHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgTWF0ZXJpYWwgTnIgXCIgKyBtYXRlcmlhbHNfcGFyc2VkICsgXCIgKElEID0gXCIgKyBtYXRfaWQgKyBcIiApIGZvciB0aGlzIE1lc2hcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtOk1hdGVyaWFsQmFzZSA9IDxNYXRlcmlhbEJhc2U+IHJldHVybmVkQXJyYXlNYXRlcmlhbFsxXTtcclxuXHJcblx0XHRcdG1hdGVyaWFscy5wdXNoKG0pO1xyXG5cdFx0XHRtYXRlcmlhbE5hbWVzLnB1c2gobS5uYW1lKTtcclxuXHJcblx0XHRcdG1hdGVyaWFsc19wYXJzZWQrKztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbWVzaDpNZXNoID0gbmV3IE1lc2goZ2VvbSwgbnVsbCk7XHJcblx0XHRtZXNoLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcclxuXHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheVBhcmVudDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pXHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlQYXJlbnRbMF0pIHtcclxuXHRcdFx0dmFyIG9iakM6RGlzcGxheU9iamVjdENvbnRhaW5lciA9IDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdO1xyXG5cdFx0XHRvYmpDLmFkZENoaWxkKG1lc2gpO1xyXG5cdFx0XHRwYXJlbnROYW1lID0gb2JqQy5uYW1lO1xyXG5cdFx0fSBlbHNlIGlmIChwYXJfaWQgPiAwKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIE1lc2hcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChtZXNoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAobWF0ZXJpYWxzLmxlbmd0aCA+PSAxICYmIG1lc2guc3ViTWVzaGVzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbHNbMF07XHJcblx0XHR9IGVsc2UgaWYgKG1hdGVyaWFscy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdHZhciBpOm51bWJlcjtcclxuXHJcblx0XHRcdC8vIEFzc2lnbiBlYWNoIHN1Yi1tZXNoIGluIHRoZSBtZXNoIGEgbWF0ZXJpYWwgZnJvbSB0aGUgbGlzdC4gSWYgbW9yZSBzdWItbWVzaGVzXHJcblx0XHRcdC8vIHRoYW4gbWF0ZXJpYWxzLCByZXBlYXQgdGhlIGxhc3QgbWF0ZXJpYWwgZm9yIGFsbCByZW1haW5pbmcgc3ViLW1lc2hlcy5cclxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1lc2guc3ViTWVzaGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bWVzaC5zdWJNZXNoZXNbaV0ubWF0ZXJpYWwgPSBtYXRlcmlhbHNbTWF0aC5taW4obWF0ZXJpYWxzLmxlbmd0aCAtIDEsIGkpXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XHJcblx0XHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4LCA1OkFXRFBhcnNlci5CT09MfSk7XHJcblx0XHRcdG1lc2gucGl2b3QgPSBuZXcgVmVjdG9yM0QoPG51bWJlcj5wcm9wcy5nZXQoMSwgMCksIDxudW1iZXI+cHJvcHMuZ2V0KDIsIDApLCA8bnVtYmVyPiBwcm9wcy5nZXQoMywgMCkpO1xyXG5cdFx0XHRtZXNoLmNhc3RzU2hhZG93cyA9IHByb3BzLmdldCg1LCB0cnVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1lc2guZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtZXNoLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWVzaDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBNZXNoOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lICsgXCJ8IEdlb21ldHJ5LU5hbWUgPSBcIiArIGdlb20ubmFtZSArIFwiIHwgU3ViTWVzaGVzID0gXCIgKyBtZXNoLnN1Yk1lc2hlcy5sZW5ndGggKyBcIiB8IE1hdC1OYW1lcyA9IFwiICsgbWF0ZXJpYWxOYW1lcy50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvL0Jsb2NrIElEIDMxXHJcblx0cHJpdmF0ZSBwYXJzZVNreWJveEluc3RhbmNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIGN1YmVUZXhBZGRyOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlDdWJlVGV4OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChjdWJlVGV4QWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcclxuXHRcdGlmICgoIXJldHVybmVkQXJyYXlDdWJlVGV4WzBdKSAmJiAoY3ViZVRleEFkZHIgIT0gMCkpXHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBDdWJldGV4dHVyZSAoSUQgPSBcIiArIGN1YmVUZXhBZGRyICsgXCIgKSBmb3IgdGhpcyBTa3lib3hcIik7XHJcblx0XHR2YXIgYXNzZXQ6U2t5Ym94ID0gbmV3IFNreWJveCg8SW1hZ2VDdWJlVGV4dHVyZT4gcmV0dXJuZWRBcnJheUN1YmVUZXhbMV0pO1xyXG5cclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpXHJcblx0XHRhc3NldC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoYXNzZXQsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa3lib3g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgQ3ViZVRleHR1cmUtTmFtZSA9IFwiICsgKDxJbWFnZUN1YmVUZXh0dXJlPiByZXR1cm5lZEFycmF5Q3ViZVRleFsxXSkubmFtZSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDQxXHJcblx0cHJpdmF0ZSBwYXJzZUxpZ2h0KGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGxpZ2h0OkxpZ2h0QmFzZTtcclxuXHRcdHZhciBuZXdTaGFkb3dNYXBwZXI6U2hhZG93TWFwcGVyQmFzZTtcclxuXHJcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbGlnaHRUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9wcm9wc05yVHlwZSwgMjp0aGlzLl9wcm9wc05yVHlwZSwgMzpBV0RQYXJzZXIuQ09MT1IsIDQ6dGhpcy5fcHJvcHNOclR5cGUsIDU6dGhpcy5fcHJvcHNOclR5cGUsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkNPTE9SLCA4OnRoaXMuX3Byb3BzTnJUeXBlLCA5OkFXRFBhcnNlci5VSU5UOCwgMTA6QVdEUGFyc2VyLlVJTlQ4LCAxMTp0aGlzLl9wcm9wc05yVHlwZSwgMTI6QVdEUGFyc2VyLlVJTlQxNiwgMjE6dGhpcy5fbWF0cml4TnJUeXBlLCAyMjp0aGlzLl9tYXRyaXhOclR5cGUsIDIzOnRoaXMuX21hdHJpeE5yVHlwZX0pO1xyXG5cdFx0dmFyIHNoYWRvd01hcHBlclR5cGU6bnVtYmVyID0gcHJvcHMuZ2V0KDksIDApO1xyXG5cdFx0dmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcclxuXHRcdHZhciBsaWdodFR5cGVzOkFycmF5PHN0cmluZz4gPSBbXCJVbnN1cHBvcnRlZCBMaWdodFR5cGVcIiwgXCJQb2ludExpZ2h0XCIsIFwiRGlyZWN0aW9uYWxMaWdodFwiXTtcclxuXHRcdHZhciBzaGFkb3dNYXBwZXJUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiTm8gU2hhZG93TWFwcGVyXCIsIFwiRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXJcIiwgXCJOZWFyRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXJcIiwgXCJDYXNjYWRlU2hhZG93TWFwcGVyXCIsIFwiQ3ViZU1hcFNoYWRvd01hcHBlclwiXTtcclxuXHJcblx0XHRpZiAobGlnaHRUeXBlID09IDEpIHtcclxuXHRcdFx0bGlnaHQgPSBuZXcgUG9pbnRMaWdodCgpO1xyXG5cclxuXHRcdFx0KDxQb2ludExpZ2h0PiBsaWdodCkucmFkaXVzID0gcHJvcHMuZ2V0KDEsIDkwMDAwKTtcclxuXHRcdFx0KDxQb2ludExpZ2h0PiBsaWdodCkuZmFsbE9mZiA9IHByb3BzLmdldCgyLCAxMDAwMDApO1xyXG5cclxuXHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPiAwKSB7XHJcblx0XHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPT0gNCkge1xyXG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyID0gbmV3IEN1YmVNYXBTaGFkb3dNYXBwZXIoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxpZ2h0LnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGxpZ2h0VHlwZSA9PSAyKSB7XHJcblxyXG5cdFx0XHRsaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KHByb3BzLmdldCgyMSwgMCksIHByb3BzLmdldCgyMiwgLTEpLCBwcm9wcy5nZXQoMjMsIDEpKTtcclxuXHJcblx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID4gMCkge1xyXG5cdFx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID09IDEpIHtcclxuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlciA9IG5ldyBEaXJlY3Rpb25hbFNoYWRvd01hcHBlcigpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9pZiAoc2hhZG93TWFwcGVyVHlwZSA9PSAyKVxyXG5cdFx0XHRcdC8vICBuZXdTaGFkb3dNYXBwZXIgPSBuZXcgTmVhckRpcmVjdGlvbmFsU2hhZG93TWFwcGVyKHByb3BzLmdldCgxMSwgMC41KSk7XHJcblx0XHRcdFx0Ly9pZiAoc2hhZG93TWFwcGVyVHlwZSA9PSAzKVxyXG5cdFx0XHRcdC8vICAgbmV3U2hhZG93TWFwcGVyID0gbmV3IENhc2NhZGVTaGFkb3dNYXBwZXIocHJvcHMuZ2V0KDEyLCAzKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdFx0bGlnaHQuY29sb3IgPSBwcm9wcy5nZXQoMywgMHhmZmZmZmYpO1xyXG5cdFx0bGlnaHQuc3BlY3VsYXIgPSBwcm9wcy5nZXQoNCwgMS4wKTtcclxuXHRcdGxpZ2h0LmRpZmZ1c2UgPSBwcm9wcy5nZXQoNSwgMS4wKTtcclxuXHRcdGxpZ2h0LmFtYmllbnRDb2xvciA9IHByb3BzLmdldCg3LCAweGZmZmZmZik7XHJcblx0XHRsaWdodC5hbWJpZW50ID0gcHJvcHMuZ2V0KDgsIDAuMCk7XHJcblxyXG5cdFx0Ly8gaWYgYSBzaGFkb3dNYXBwZXIgaGFzIGJlZW4gY3JlYXRlZCwgYWRqdXN0IHRoZSBkZXB0aE1hcFNpemUgaWYgbmVlZGVkLCBhc3NpZ24gdG8gbGlnaHQgYW5kIHNldCBjYXN0U2hhZG93cyB0byB0cnVlXHJcblx0XHRpZiAobmV3U2hhZG93TWFwcGVyKSB7XHJcblx0XHRcdGlmIChuZXdTaGFkb3dNYXBwZXIgaW5zdGFuY2VvZiBDdWJlTWFwU2hhZG93TWFwcGVyKSB7XHJcblx0XHRcdFx0aWYgKHByb3BzLmdldCgxMCwgMSkgIT0gMSkge1xyXG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyLmRlcHRoTWFwU2l6ZSA9IHRoaXMuX2RlcHRoU2l6ZURpY1twcm9wcy5nZXQoMTAsIDEpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHByb3BzLmdldCgxMCwgMikgIT0gMikge1xyXG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyLmRlcHRoTWFwU2l6ZSA9IHRoaXMuX2RlcHRoU2l6ZURpY1twcm9wcy5nZXQoMTAsIDIpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxpZ2h0LnNoYWRvd01hcHBlciA9IG5ld1NoYWRvd01hcHBlcjtcclxuXHRcdFx0bGlnaHQuY2FzdHNTaGFkb3dzID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocGFyX2lkICE9IDApIHtcclxuXHJcblx0XHRcdHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcclxuXHJcblx0XHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XHJcblx0XHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdKS5hZGRDaGlsZChsaWdodCk7XHJcblx0XHRcdFx0cGFyZW50TmFtZSA9ICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVBhcmVudFsxXSkubmFtZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBMaWdodFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcclxuXHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQobGlnaHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDwgSUFzc2V0PiBsaWdodCwgbmFtZSk7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBsaWdodDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTGlnaHQ6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVHlwZSA9IFwiICsgbGlnaHRUeXBlc1tsaWdodFR5cGVdICsgXCIgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSArIFwiIHwgU2hhZG93TWFwcGVyLVR5cGUgPSBcIiArIHNoYWRvd01hcHBlclR5cGVzW3NoYWRvd01hcHBlclR5cGVdKTtcclxuXHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gNDNcclxuXHRwcml2YXRlIHBhcnNlQ2FtZXJhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cclxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XHJcblx0XHR2YXIgcHJvamVjdGlvbjpQcm9qZWN0aW9uQmFzZTtcclxuXHJcblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTsgLy9zZXQgYXMgYWN0aXZlIGNhbWVyYVxyXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTsgLy9sZW5ndGhvZiBsZW5zZXMgLSBub3QgdXNlZCB5ZXRcclxuXHJcblx0XHR2YXIgcHJvamVjdGlvbnR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDEwNDp0aGlzLl9wcm9wc05yVHlwZX0pO1xyXG5cclxuXHRcdHN3aXRjaCAocHJvamVjdGlvbnR5cGUpIHtcclxuXHRcdFx0Y2FzZSA1MDAxOlxyXG5cdFx0XHRcdHByb2plY3Rpb24gPSBuZXcgUGVyc3BlY3RpdmVQcm9qZWN0aW9uKHByb3BzLmdldCgxMDEsIDYwKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNTAwMjpcclxuXHRcdFx0XHRwcm9qZWN0aW9uID0gbmV3IE9ydGhvZ3JhcGhpY1Byb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgNTAwKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNTAwMzpcclxuXHRcdFx0XHRwcm9qZWN0aW9uID0gbmV3IE9ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgLTQwMCksIHByb3BzLmdldCgxMDIsIDQwMCksIHByb3BzLmdldCgxMDMsIC0zMDApLCBwcm9wcy5nZXQoMTA0LCAzMDApKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInVuc3VwcG9ydGVkTGVuc3R5cGVcIik7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjYW1lcmE6Q2FtZXJhID0gbmV3IENhbWVyYShwcm9qZWN0aW9uKTtcclxuXHRcdGNhbWVyYS50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlQYXJlbnQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKVxyXG5cclxuXHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XHJcblxyXG5cdFx0XHR2YXIgb2JqQzpEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV07XHJcblx0XHRcdG9iakMuYWRkQ2hpbGQoY2FtZXJhKTtcclxuXHJcblx0XHRcdHBhcmVudE5hbWUgPSBvYmpDLm5hbWU7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChwYXJfaWQgPiAwKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIENhbWVyYVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XHJcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGNhbWVyYSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FtZXJhLm5hbWUgPSBuYW1lO1xyXG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcclxuXHRcdGNhbWVyYS5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcclxuXHRcdGNhbWVyYS5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNhbWVyYSwgbmFtZSk7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjYW1lcmFcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDYW1lcmE6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUHJvamVjdGlvbnR5cGUgPSBcIiArIHByb2plY3Rpb24gKyBcIiB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gNTFcclxuXHRwcml2YXRlIHBhcnNlTGlnaHRQaWNrZXIoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbnVtTGlnaHRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBsaWdodHNBcnJheTpBcnJheTxMaWdodEJhc2U+ID0gbmV3IEFycmF5PExpZ2h0QmFzZT4oKTtcclxuXHRcdHZhciBrOm51bWJlciA9IDA7XHJcblx0XHR2YXIgbGlnaHRJRDpudW1iZXIgPSAwO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5TGlnaHQ6QXJyYXk8YW55PjtcclxuXHRcdHZhciBsaWdodHNBcnJheU5hbWVzOkFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuXHRcdGZvciAoayA9IDA7IGsgPCBudW1MaWdodHM7IGsrKykge1xyXG5cdFx0XHRsaWdodElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0cmV0dXJuZWRBcnJheUxpZ2h0ID0gdGhpcy5nZXRBc3NldEJ5SUQobGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pXHJcblxyXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheUxpZ2h0WzBdKSB7XHJcblx0XHRcdFx0bGlnaHRzQXJyYXkucHVzaCg8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5TGlnaHRbMV0pO1xyXG5cdFx0XHRcdGxpZ2h0c0FycmF5TmFtZXMucHVzaCgoIDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlMaWdodFsxXSkubmFtZSk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgTGlnaHQgTnIgXCIgKyBrICsgXCIgKElEID0gXCIgKyBsaWdodElEICsgXCIgKSBmb3IgdGhpcyBMaWdodFBpY2tlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChsaWdodHNBcnJheS5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHRoaXMgTGlnaHRQaWNrZXIsIGNhdXNlIG5vIExpZ2h0IHdhcyBmb3VuZC5cIik7XHJcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0XHRyZXR1cm47IC8vcmV0dXJuIHdpdGhvdXQgYW55IG1vcmUgcGFyc2luZyBmb3IgdGhpcyBibG9ja1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBsaWdodFBpY2s6TGlnaHRQaWNrZXJCYXNlID0gbmV3IFN0YXRpY0xpZ2h0UGlja2VyKGxpZ2h0c0FycmF5KTtcclxuXHRcdGxpZ2h0UGljay5uYW1lID0gbmFtZTtcclxuXHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGxpZ2h0UGljaywgbmFtZSk7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBsaWdodFBpY2tcclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFN0YXRpY0xpZ2h0UGlja2VyOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgbGlnaHRzQXJyYXlOYW1lcy50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA4MVxyXG5cdHByaXZhdGUgcGFyc2VNYXRlcmlhbChibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdC8vIFRPRE86IG5vdCB1c2VkXHJcblx0XHQvLy8vYmxvY2tMZW5ndGggPSBibG9jay5sZW47XHJcblx0XHR2YXIgbmFtZTpzdHJpbmc7XHJcblx0XHR2YXIgdHlwZTpudW1iZXI7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcztcclxuXHRcdHZhciBtYXQ6TWV0aG9kTWF0ZXJpYWw7XHJcblx0XHR2YXIgYXR0cmlidXRlczpPYmplY3Q7XHJcblx0XHR2YXIgZmluYWxpemU6Ym9vbGVhbjtcclxuXHRcdHZhciBudW1fbWV0aG9kczpudW1iZXI7XHJcblx0XHR2YXIgbWV0aG9kc19wYXJzZWQ6bnVtYmVyO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcclxuXHJcblx0XHRuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0bnVtX21ldGhvZHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHJcblx0XHQvLyBSZWFkIG1hdGVyaWFsIG51bWVyaWNhbCBwcm9wZXJ0aWVzXHJcblx0XHQvLyAoMT1jb2xvciwgMj1iaXRtYXAgdXJsLCAxMD1hbHBoYSwgMTE9YWxwaGFfYmxlbmRpbmcsIDEyPWFscGhhX3RocmVzaG9sZCwgMTM9cmVwZWF0KVxyXG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7IDE6QVdEUGFyc2VyLklOVDMyLCAyOkFXRFBhcnNlci5CQUREUiwgMTA6dGhpcy5fcHJvcHNOclR5cGUsIDExOkFXRFBhcnNlci5CT09MLCAxMjp0aGlzLl9wcm9wc05yVHlwZSwgMTM6QVdEUGFyc2VyLkJPT0x9KTtcclxuXHJcblx0XHRtZXRob2RzX3BhcnNlZCA9IDA7XHJcblx0XHR3aGlsZSAobWV0aG9kc19wYXJzZWQgPCBudW1fbWV0aG9kcykge1xyXG5cdFx0XHR2YXIgbWV0aG9kX3R5cGU6bnVtYmVyO1xyXG5cclxuXHRcdFx0bWV0aG9kX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdFx0bWV0aG9kc19wYXJzZWQgKz0gMTtcclxuXHRcdH1cclxuXHRcdHZhciBkZWJ1Z1N0cmluZzpzdHJpbmcgPSBcIlwiO1xyXG5cdFx0YXR0cmlidXRlcyA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0aWYgKHR5cGUgPT09IDEpIHsgLy8gQ29sb3IgbWF0ZXJpYWxcclxuXHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBDb2xvck1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xyXG5cdFx0XHR2YXIgY29sb3I6bnVtYmVyO1xyXG5cdFx0XHRjb2xvciA9IHByb3BzLmdldCgxLCAweGZmZmZmZik7XHJcblx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA8IDIpIHtcclxuXHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IsIHByb3BzLmdldCgxMCwgMS4wKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yKTtcclxuXHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IDIpIHtcclxuXHRcdFx0dmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTtcclxuXHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0ZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAodGV4X2FkZHIgPiAwKSlcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRGlmZnN1ZVRleHR1cmUgKElEID0gXCIgKyB0ZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWF0ZXJpYWxcIik7XHJcblxyXG5cdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlIDwgMikge1xyXG5cdFx0XHRcdG1hdC5hbHBoYUJsZW5kaW5nID0gcHJvcHMuZ2V0KDExLCBmYWxzZSk7XHJcblx0XHRcdFx0bWF0LmFscGhhID0gcHJvcHMuZ2V0KDEwLCAxLjApO1xyXG5cdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyBtYXQubmFtZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xyXG5cdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoTXVsdGlQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIG1hdC5uYW1lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bWF0LmV4dHJhID0gYXR0cmlidXRlcztcclxuXHRcdG1hdC5hbHBoYVRocmVzaG9sZCA9IHByb3BzLmdldCgxMiwgMC4wKTtcclxuXHRcdG1hdC5yZXBlYXQgPSBwcm9wcy5nZXQoMTMsIGZhbHNlKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1hdCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGVidWdTdHJpbmcpO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEJsb2NrIElEID0gODEgQVdEMi4xXHJcblx0cHJpdmF0ZSBwYXJzZU1hdGVyaWFsX3YxKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcclxuXHRcdHZhciBub3JtYWxUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcblx0XHR2YXIgc3BlY1RleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XHJcblxyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIHR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgbnVtX21ldGhvZHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMzIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgNDpBV0RQYXJzZXIuVUlOVDgsIDU6QVdEUGFyc2VyLkJPT0wsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkJPT0wsIDg6QVdEUGFyc2VyLkJPT0wsIDk6QVdEUGFyc2VyLlVJTlQ4LCAxMDp0aGlzLl9wcm9wc05yVHlwZSwgMTE6QVdEUGFyc2VyLkJPT0wsIDEyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMzpBV0RQYXJzZXIuQk9PTCwgMTU6dGhpcy5fcHJvcHNOclR5cGUsIDE2OkFXRFBhcnNlci5VSU5UMzIsIDE3OkFXRFBhcnNlci5CQUREUiwgMTg6dGhpcy5fcHJvcHNOclR5cGUsIDE5OnRoaXMuX3Byb3BzTnJUeXBlLCAyMDpBV0RQYXJzZXIuVUlOVDMyLCAyMTpBV0RQYXJzZXIuQkFERFIsIDIyOkFXRFBhcnNlci5CQUREUn0pO1xyXG5cdFx0dmFyIHNwZXppYWxUeXBlOm51bWJlciA9IHByb3BzLmdldCg0LCAwKTtcclxuXHRcdHZhciBkZWJ1Z1N0cmluZzpzdHJpbmcgPSBcIlBhcnNlZCBNYXRlcmlhbCBcIjtcclxuXHJcblx0XHRpZiAoc3BlemlhbFR5cGUgPj0gMikgey8vdGhpcyBpcyBubyBzdXBwb3J0ZWQgbWF0ZXJpYWxcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiTWF0ZXJpYWwtc3BlemlhbFR5cGUgJ1wiICsgc3BlemlhbFR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCwgY2FuIG9ubHkgYmUgMDpzaW5nbGVQYXNzLCAxOk11bHRpUGFzcyAhXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHR5cGUgPD0gMikgey8vIENvbG9yIG1hdGVyaWFsXHJcblx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA9PSAxKVxyXG5cdFx0XHRcdHNwZXppYWxUeXBlID0gMDtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5tYXRlcmlhbE1vZGUgPT0gMilcclxuXHRcdFx0XHRzcGV6aWFsVHlwZSA9IDE7XHJcblxyXG5cdFx0XHRpZiAoc3BlemlhbFR5cGUgPCAyKSB7Ly90aGlzIGlzIFNpbmdsZVBhc3Mgb3IgTXVsdGlQYXNzXHJcblxyXG5cdFx0XHRcdGlmICh0eXBlID09IDEpIHsvLyBDb2xvciBtYXRlcmlhbFxyXG5cdFx0XHRcdFx0dmFyIGNvbG9yOm51bWJlciA9IHByb3BzLmdldCgxLCAweGNjY2NjYyk7Ly9UT0RPIHRlbXBvcmFyaWx5IHN3YXBwZWQgc28gdGhhdCBkaWZmdXNlIGNvbG9yIGdvZXMgdG8gYW1iaWVudFxyXG5cclxuXHRcdFx0XHRcdGlmIChzcGV6aWFsVHlwZSA9PSAxKSB7Ly9cdE11bHRpUGFzc01hdGVyaWFsXHJcblx0XHRcdFx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvcik7XHJcblx0XHRcdFx0XHRcdG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7IC8vXHRTaW5nbGVQYXNzTWF0ZXJpYWxcclxuXHRcdFx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yLCBwcm9wcy5nZXQoMTAsIDEuMCkpO1xyXG5cdFx0XHRcdFx0XHRtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIENvbG9yTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgXCI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PSAyKSB7Ly8gdGV4dHVyZSBtYXRlcmlhbFxyXG5cdFx0XHRcdFx0dmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTsvL1RPRE8gdGVtcG9yYXJpbHkgc3dhcHBlZCBzbyB0aGF0IGRpZmZ1c2UgdGV4dHVyZSBnb2VzIHRvIGFtYmllbnRcclxuXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0ZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHRleF9hZGRyID4gMCkpXHJcblx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbWJpZW50VGV4dHVyZSAoSUQgPSBcIiArIHRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgdGV4dHVyZTpUZXh0dXJlMkRCYXNlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHJcblx0XHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwodGV4dHVyZSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNwZXppYWxUeXBlID09IDEpIHsvLyBNdWx0aVBhc3NNYXRlcmlhbFxyXG5cdFx0XHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgdGV4dHVyZS5uYW1lO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHsvL1x0U2luZ2xlUGFzc01hdGVyaWFsXHJcblx0XHRcdFx0XHRcdG1hdC5hbHBoYSA9IHByb3BzLmdldCgxMCwgMS4wKTtcclxuXHRcdFx0XHRcdFx0bWF0LmFscGhhQmxlbmRpbmcgPSBwcm9wcy5nZXQoMTEsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyB0ZXh0dXJlLm5hbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgZGlmZnVzZVRleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRcdFx0XHR2YXIgZGlmZnVzZVRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgxNywgMCk7XHJcblxyXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChkaWZmdXNlVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoZGlmZnVzZVRleF9hZGRyICE9IDApKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRGlmZnVzZVRleHR1cmUgKElEID0gXCIgKyBkaWZmdXNlVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHRkaWZmdXNlVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XHJcblxyXG5cdFx0XHRcdGlmIChkaWZmdXNlVGV4dHVyZSkge1xyXG5cdFx0XHRcdFx0bWF0LmRpZmZ1c2VUZXh0dXJlID0gZGlmZnVzZVRleHR1cmU7XHJcblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VUZXh0dXJlLU5hbWUgPSBcIiArIGRpZmZ1c2VUZXh0dXJlLm5hbWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgbm9ybWFsVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDMsIDApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQobm9ybWFsVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAobm9ybWFsVGV4X2FkZHIgIT0gMCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBOb3JtYWxUZXh0dXJlIChJRCA9IFwiICsgbm9ybWFsVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdG5vcm1hbFRleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArIG5vcm1hbFRleHR1cmUubmFtZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBzcGVjVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoc3BlY1RleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHJcblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHNwZWNUZXhfYWRkciAhPSAwKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNwZWN1bGFyVGV4dHVyZSAoSUQgPSBcIiArIHNwZWNUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdFx0XHRzcGVjVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyVGV4dHVyZS1OYW1lID0gXCIgKyBzcGVjVGV4dHVyZS5uYW1lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGxpZ2h0UGlja2VyQWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMjIsIDApO1xyXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChsaWdodFBpY2tlckFkZHIsIFtBc3NldFR5cGUuTElHSFRfUElDS0VSXSlcclxuXHJcblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKGxpZ2h0UGlja2VyQWRkcikpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodFBpY2tlciAoSUQgPSBcIiArIGxpZ2h0UGlja2VyQWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1hdC5saWdodFBpY2tlciA9IDxMaWdodFBpY2tlckJhc2U+IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHQvL2RlYnVnU3RyaW5nKz1cIiB8IExpZ2h0cGlja2VyLU5hbWUgPSBcIitMaWdodFBpY2tlckJhc2UocmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1hdC5zbW9vdGggPSBwcm9wcy5nZXQoNSwgdHJ1ZSk7XHJcblx0XHRcdFx0bWF0Lm1pcG1hcCA9IHByb3BzLmdldCg2LCB0cnVlKTtcclxuXHRcdFx0XHRtYXQuYm90aFNpZGVzID0gcHJvcHMuZ2V0KDcsIGZhbHNlKTtcclxuXHRcdFx0XHRtYXQuYWxwaGFQcmVtdWx0aXBsaWVkID0gcHJvcHMuZ2V0KDgsIGZhbHNlKTtcclxuXHRcdFx0XHRtYXQuYmxlbmRNb2RlID0gdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDksIDApXTtcclxuXHRcdFx0XHRtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdGlmIChub3JtYWxUZXh0dXJlKVxyXG5cdFx0XHRcdFx0bWF0Lm5vcm1hbE1hcCA9IG5vcm1hbFRleHR1cmU7XHJcblxyXG5cdFx0XHRcdGlmIChzcGVjVGV4dHVyZSlcclxuXHRcdFx0XHRcdG1hdC5zcGVjdWxhck1hcCA9IHNwZWNUZXh0dXJlO1xyXG5cclxuXHRcdFx0XHRtYXQuYWxwaGFUaHJlc2hvbGQgPSBwcm9wcy5nZXQoMTIsIDAuMCk7XHJcblx0XHRcdFx0bWF0LmFtYmllbnQgPSBwcm9wcy5nZXQoMTUsIDEuMCk7XHJcblx0XHRcdFx0bWF0LmRpZmZ1c2VDb2xvciA9IHByb3BzLmdldCgxNiwgMHhmZmZmZmYpO1xyXG5cdFx0XHRcdG1hdC5zcGVjdWxhciA9IHByb3BzLmdldCgxOCwgMS4wKTtcclxuXHRcdFx0XHRtYXQuZ2xvc3MgPSBwcm9wcy5nZXQoMTksIDUwKTtcclxuXHRcdFx0XHRtYXQuc3BlY3VsYXJDb2xvciA9IHByb3BzLmdldCgyMCwgMHhmZmZmZmYpO1xyXG5cclxuXHRcdFx0XHR2YXIgbWV0aG9kc19wYXJzZWQ6bnVtYmVyID0gMDtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyO1xyXG5cclxuXHRcdFx0XHR3aGlsZSAobWV0aG9kc19wYXJzZWQgPCBudW1fbWV0aG9kcykge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZF90eXBlOm51bWJlcjtcclxuXHRcdFx0XHRcdG1ldGhvZF90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdFx0XHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoe1xyXG5cdFx0XHRcdFx0XHQxOiBBV0RQYXJzZXIuQkFERFIsXHJcblx0XHRcdFx0XHRcdDI6IEFXRFBhcnNlci5CQUREUixcclxuXHRcdFx0XHRcdFx0MzogQVdEUGFyc2VyLkJBRERSLFxyXG5cdFx0XHRcdFx0XHQxMDE6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG5cdFx0XHRcdFx0XHQxMDI6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG5cdFx0XHRcdFx0XHQxMDM6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG5cdFx0XHRcdFx0XHQyMDE6IEFXRFBhcnNlci5VSU5UMzIsXHJcblx0XHRcdFx0XHRcdDIwMjogQVdEUGFyc2VyLlVJTlQzMixcclxuXHRcdFx0XHRcdFx0MzAxOiBBV0RQYXJzZXIuVUlOVDE2LFxyXG5cdFx0XHRcdFx0XHQzMDI6IEFXRFBhcnNlci5VSU5UMTYsXHJcblx0XHRcdFx0XHRcdDQwMTogQVdEUGFyc2VyLlVJTlQ4LFxyXG5cdFx0XHRcdFx0XHQ0MDI6IEFXRFBhcnNlci5VSU5UOCxcclxuXHRcdFx0XHRcdFx0NjAxOiBBV0RQYXJzZXIuQ09MT1IsXHJcblx0XHRcdFx0XHRcdDYwMjogQVdEUGFyc2VyLkNPTE9SLFxyXG5cdFx0XHRcdFx0XHQ3MDE6IEFXRFBhcnNlci5CT09MLFxyXG5cdFx0XHRcdFx0XHQ3MDI6IEFXRFBhcnNlci5CT09MLFxyXG5cdFx0XHRcdFx0XHQ4MDE6IEFXRFBhcnNlci5NVFg0eDRcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAobWV0aG9kX3R5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSA5OTk6IC8vd3JhcHBlci1NZXRob2RzIHRoYXQgd2lsbCBsb2FkIGEgcHJldmlvdXMgcGFyc2VkIEVmZmVrdE1ldGhvZCByZXR1cm5lZFxyXG5cclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuRUZGRUNUU19NRVRIT0RdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRWZmZWN0TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXQuYWRkRWZmZWN0TWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRWZmZWN0TWV0aG9kLU5hbWUgPSBcIiArICg8RWZmZWN0TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSA5OTg6IC8vd3JhcHBlci1NZXRob2RzIHRoYXQgd2lsbCBsb2FkIGEgcHJldmlvdXMgcGFyc2VkIFNoYWRvd01hcE1ldGhvZFxyXG5cclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2hhZG93TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXQuc2hhZG93TWV0aG9kID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU2hhZG93TWV0aG9kLU5hbWUgPSBcIiArICg8U2hhZG93TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSAxOiAvL0Vudk1hcEFtYmllbnRNZXRob2RcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0sIFwiQ3ViZVRleHR1cmVcIik7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBBbWJpZW50TWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0XHRcdFx0bWF0LmFtYmllbnRNZXRob2QgPSBuZXcgQW1iaWVudEVudk1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IEFtYmllbnRFbnZNYXBNZXRob2QgfCBFbnZNYXAtTmFtZSA9XCIgKyAoPEN1YmVUZXh0dXJlQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdGNhc2UgNTE6IC8vRGVwdGhEaWZmdXNlTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZURlcHRoTWV0aG9kKCk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlRGVwdGhNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA1MjogLy9HcmFkaWVudERpZmZ1c2VNZXRob2RcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBHcmFkaWVudERpZmZ1c2VUZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEdyYWRpZW50RGlmZnVzZU1ldGhvZFwiKTtcclxuXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlR3JhZGllbnRNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlR3JhZGllbnRNZXRob2QgfCBHcmFkaWVudERpZmZ1c2VUZXh0dXJlLU5hbWUgPVwiICsgKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDUzOiAvL1dyYXBEaWZmdXNlTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZVdyYXBNZXRob2QocHJvcHMuZ2V0KDEwMSwgNSkpO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVdyYXBNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA1NDogLy9MaWdodE1hcERpZmZ1c2VNZXRob2RcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBMaWdodE1hcERpZmZ1c2VNZXRob2RcIik7XHJcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZUxpZ2h0TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg0MDEsIDEwKV0sIGZhbHNlLCBtYXQuZGlmZnVzZU1ldGhvZCk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlTGlnaHRNYXBNZXRob2QgfCBMaWdodE1hcFRleHR1cmUtTmFtZSA9XCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgNTU6IC8vQ2VsRGlmZnVzZU1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VDZWxNZXRob2QocHJvcHMuZ2V0KDQwMSwgMyksIG1hdC5kaWZmdXNlTWV0aG9kKTtcclxuXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VDZWxNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zbW9vdGhuZXNzID0gcHJvcHMuZ2V0KDEwMSwgMC4xKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VDZWxNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA1NjogLy9TdWJTdXJmYWNlU2NhdHRlcmluZ01ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZCgpOyAvL2RlcHRoTWFwU2l6ZSBhbmQgZGVwdGhNYXBPZmZzZXQgP1xyXG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkuc2NhdHRlcmluZyA9IHByb3BzLmdldCgxMDEsIDAuMik7XHJcblx0XHRcdFx0XHRcdFx0Ly9cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZVN1YlN1cmZhY2VNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS50cmFuc2x1Y2VuY3kgPSBwcm9wcy5nZXQoMTAyLCAxKTtcclxuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0KDxEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnNjYXR0ZXJDb2xvciA9IHByb3BzLmdldCg2MDEsIDB4ZmZmZmZmKTtcclxuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSAxMDE6IC8vQW5pc290cm9waWNTcGVjdWxhck1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdG1hdC5zcGVjdWxhck1ldGhvZCA9IG5ldyBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kKCk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kXCI7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMTAyOiAvL1NwZWN1bGFyUGhvbmdNZXRob2RcclxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJQaG9uZ01ldGhvZCgpO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJQaG9uZ01ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDEwMzogLy9DZWxsU3BlY3VsYXJNZXRob2RcclxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJDZWxNZXRob2QocHJvcHMuZ2V0KDEwMSwgMC41KSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcclxuXHRcdFx0XHRcdFx0XHQoPFNwZWN1bGFyQ2VsTWV0aG9kPiBtYXQuc3BlY3VsYXJNZXRob2QpLnNtb290aG5lc3MgPSBwcm9wcy5nZXQoMTAyLCAwLjEpO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJDZWxNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAxMDQ6IC8vU3BlY3VsYXJGcmVzbmVsTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyRnJlc25lbE1ldGhvZChwcm9wcy5nZXQoNzAxLCB0cnVlKSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcclxuXHRcdFx0XHRcdFx0XHQoPFNwZWN1bGFyRnJlc25lbE1ldGhvZD4gbWF0LnNwZWN1bGFyTWV0aG9kKS5mcmVzbmVsUG93ZXIgPSBwcm9wcy5nZXQoMTAxLCA1KTtcclxuXHRcdFx0XHRcdFx0XHQoPFNwZWN1bGFyRnJlc25lbE1ldGhvZD4gbWF0LnNwZWN1bGFyTWV0aG9kKS5ub3JtYWxSZWZsZWN0YW5jZSA9IHByb3BzLmdldCgxMDIsIDAuMSk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckZyZXNuZWxNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAxNTE6Ly9IZWlnaHRNYXBOb3JtYWxNZXRob2QgLSB0aGlvcyBpcyBub3QgaW1wbGVtZW50ZWQgZm9yIG5vdywgYnV0IG1pZ2h0IGFwcGVhciBsYXRlclxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDE1MjogLy9TaW1wbGVXYXRlck5vcm1hbE1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNlY291bmROb3JtYWxNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgU2ltcGxlV2F0ZXJOb3JtYWxNZXRob2RcIik7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFtYXQubm9ybWFsTWFwKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBub3JtYWwgTWFwIG9uIHRoaXMgTWF0ZXJpYWwgdG8gdXNlIHdpdGggdGhpcyBTaW1wbGVXYXRlck5vcm1hbE1ldGhvZFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0bWF0Lm5vcm1hbE1hcCA9IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHRcdFx0bWF0Lm5vcm1hbE1ldGhvZCA9IG5ldyBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZChtYXQubm9ybWFsTWFwLCByZXR1cm5lZEFycmF5WzFdKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IE5vcm1hbFNpbXBsZVdhdGVyTWV0aG9kIHwgU2Vjb25kLU5vcm1hbFRleHR1cmUtTmFtZSA9IFwiICsgKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRcdFx0XHRtZXRob2RzX3BhcnNlZCArPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gdG9kbzogd2Ugc2hvdWxkIG5vdCBuZWVkIHRoaXMgYW55bW9yZSAoaWYgdXNpbmcgdGV4dHVyZS1hdGxhcylcclxuXHRcdGVsc2UgaWYgKCh0eXBlPj0zKSYmKHR5cGU8PTcpKXtcclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBhIGN1cnZlIG1hdGVyaWFsLCB3ZSBjcmVhdGUgaXQsIGZpbmFsaXplIGl0LCBhc3NpZ24gaXQgdG8gYmxvY2stY2FjaGUgYW5kIHJldHVybiBhbmQgcmV0dXJuLlxyXG5cdFx0XHR2YXIgY29sb3I6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDB4Y2NjY2NjKTtcclxuXHRcdFx0ZGVidWdTdHJpbmcrPWNvbG9yO1xyXG5cclxuXHRcdFx0dmFyIGRpZmZ1c2VUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcblx0XHRcdHZhciBkaWZmdXNlVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDApO1xyXG5cclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRpZmZ1c2VUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoZGlmZnVzZVRleF9hZGRyICE9IDApKSB7XHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIERpZmZ1c2VUZXh0dXJlIChJRCA9IFwiICsgZGlmZnVzZVRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcclxuXHRcdFx0XHRkaWZmdXNlVGV4dHVyZSA9IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuZ2V0RGVmYXVsdFRleHR1cmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0ZGlmZnVzZVRleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0XHR2YXIgY3VydmVfbWF0OkN1cnZlTWF0ZXJpYWwgPSBuZXcgQ3VydmVNYXRlcmlhbChkaWZmdXNlVGV4dHVyZSk7XHJcblx0XHRcdC8vZGVidWdTdHJpbmcrPSBcIiBhbHBoYSA9IFwiK3Byb3BzLmdldCgxMCwgMS4wKStcIiBcIjtcclxuXHRcdFx0ZGVidWdTdHJpbmcrPSBcIiB0ZXh0dXJlID0gXCIrZGlmZnVzZVRleF9hZGRyK1wiIFwiO1xyXG5cdFx0XHRjdXJ2ZV9tYXQuYm90aFNpZGVzID0gdHJ1ZTtcclxuXHRcdFx0Y3VydmVfbWF0LnByZXNlcnZlQWxwaGEgPSB0cnVlO1xyXG5cdFx0XHRjdXJ2ZV9tYXQuYWxwaGFCbGVuZGluZyA9IHRydWU7XHJcblx0XHRcdGN1cnZlX21hdC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBjdXJ2ZV9tYXQsIG5hbWUpO1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGN1cnZlX21hdDtcclxuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRlYnVnU3RyaW5nKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHRcdG1hdC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkZWJ1Z1N0cmluZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gODJcclxuXHRwcml2YXRlIHBhcnNlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHJcblx0XHR2YXIgYXNzZXQ6VGV4dHVyZTJEQmFzZTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XHJcblxyXG5cdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcclxuXHJcblx0XHQvLyBFeHRlcm5hbFxyXG5cdFx0aWYgKHR5cGUgPT0gMCkge1xyXG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHZhciB1cmw6c3RyaW5nO1xyXG5cdFx0XHR1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XHJcblx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBuZXcgVVJMUmVxdWVzdCh1cmwpLCBmYWxzZSwgbnVsbCwgdHJ1ZSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdFx0dmFyIGRhdGE6Qnl0ZUFycmF5O1xyXG5cdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBBV0RQYXJzZXIgLSBGaXggZm9yIEZpcmVGb3ggQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MTUwNzUgLlxyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBDb252ZXJ0aW5nIGRhdGEgdG8gaW1hZ2UgaGVyZSBpbnN0ZWFkIG9mIHBhcnNlciAtIGZpeCBGaXJlRm94IGJ1ZyB3aGVyZSBpbWFnZSB3aWR0aCAvIGhlaWdodCBpcyAwIHdoZW4gY3JlYXRlZCBmcm9tIGRhdGFcclxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB0aGUgYnJvd3NlciB0aW1lIHRvIGluaXRpYWxpc2UgaW1hZ2Ugd2lkdGggLyBoZWlnaHQuXHJcblxyXG5cdFx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbnVsbCwgZmFsc2UsIFBhcnNlclV0aWxzLmJ5dGVBcnJheVRvSW1hZ2UoZGF0YSksIHRydWUpO1xyXG5cdFx0XHQvL3RoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElnbm9yZSBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHR2YXIgdGV4dHVyZVN0eWxlc05hbWVzOkFycmF5PHN0cmluZz4gPSBbXCJleHRlcm5hbFwiLCBcImVtYmVkXCJdXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyBhIFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQml0bWFwIGZvciBUZXh0dXJlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA4M1xyXG5cdHByaXZhdGUgcGFyc2VDdWJlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdC8vYmxvY2tMZW5ndGggPSBibG9jay5sZW47XHJcblx0XHR2YXIgZGF0YV9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIGFzc2V0OkN1YmVUZXh0dXJlQmFzZTtcclxuXHRcdHZhciBpOm51bWJlcjtcclxuXHJcblx0XHR0aGlzLl9jdWJlVGV4dHVyZXMgPSBuZXcgQXJyYXk8YW55PigpO1xyXG5cdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1sgdGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgXSA9IFtdO1xyXG5cclxuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuXHRcdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcclxuXHRcdFx0dGhpcy5fY3ViZVRleHR1cmVzLnB1c2gobnVsbCk7XHJcblxyXG5cdFx0XHQvLyBFeHRlcm5hbFxyXG5cdFx0XHRpZiAodHlwZSA9PSAwKSB7XHJcblx0XHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHZhciB1cmw6c3RyaW5nO1xyXG5cdFx0XHRcdHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcclxuXHJcblx0XHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgKyBcIiNcIiArIGksIG5ldyBVUkxSZXF1ZXN0KHVybCksIGZhbHNlLCBudWxsLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHZhciBkYXRhOkJ5dGVBcnJheTtcclxuXHRcdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG5cdFx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpICsgXCIjXCIgKyBpLCBudWxsLCBmYWxzZSwgUGFyc2VyVXRpbHMuYnl0ZUFycmF5VG9JbWFnZShkYXRhKSwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBJZ25vcmUgZm9yIG5vd1xyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZXh0cmFzID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0dmFyIHRleHR1cmVTdHlsZXNOYW1lczpBcnJheTxzdHJpbmc+ID0gW1wiZXh0ZXJuYWxcIiwgXCJlbWJlZFwiXVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0IHBhcnNpbmcgNiBcIiArIHRleHR1cmVTdHlsZXNOYW1lc1t0eXBlXSArIFwiIEJpdG1hcHMgZm9yIEN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDkxXHJcblx0cHJpdmF0ZSBwYXJzZVNoYXJlZE1ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGFzc2V0OkVmZmVjdE1ldGhvZEJhc2U7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHRhc3NldCA9IHRoaXMucGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQpO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQsIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgRWZmZWN0TWV0aG9kOiBOYW1lID0gXCIgKyBhc3NldC5uYW1lICsgXCIgVHlwZSA9IFwiICsgYXNzZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDkyXHJcblx0cHJpdmF0ZSBwYXJzZVNoYWRvd01ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHR5cGU6bnVtYmVyO1xyXG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcclxuXHRcdHZhciBhc3NldDpTaGFkb3dNZXRob2RCYXNlO1xyXG5cdFx0dmFyIHNoYWRvd0xpZ2h0SUQ6bnVtYmVyO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0c2hhZG93TGlnaHRJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoc2hhZG93TGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pO1xyXG5cclxuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGFyZ2V0TGlnaHQgKElEID0gXCIgKyBzaGFkb3dMaWdodElEICsgXCIgKSBmb3IgdGhpcyBTaGFkb3dNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRhc3NldCA9IHRoaXMucGFyc2VTaGFkb3dNZXRob2RMaXN0KDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlbMV0sIGJsb2NrSUQpO1xyXG5cclxuXHRcdGlmICghYXNzZXQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIGZvciBub3dcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0LCB0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNoYWRvd01hcE1ldGhvZE1ldGhvZDogTmFtZSA9IFwiICsgYXNzZXQubmFtZSArIFwiIHwgVHlwZSA9IFwiICsgYXNzZXQgKyBcIiB8IExpZ2h0LU5hbWUgPSBcIiwgKCA8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5WzFdICkubmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly9CbG9jayBJRCA9IDI1M1xyXG5cdHByaXZhdGUgcGFyc2VDb21tYW5kKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGhhc0Jsb2Nrczpib29sZWFuID0gKCB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKSA9PSAxICk7XHJcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0dmFyIHBhcmVudE9iamVjdDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cdFx0dmFyIHRhcmdldE9iamVjdDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSk7XHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0cGFyZW50T2JqZWN0ID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG51bUNvbW1hbmRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XHJcblx0XHR2YXIgdHlwZUNvbW1hbmQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuXHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUn0pO1xyXG5cclxuXHRcdHN3aXRjaCAodHlwZUNvbW1hbmQpIHtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cclxuXHRcdFx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdHZhciByZXR1cm5lZEFycmF5VGFyZ2V0OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLlRFWFRVUkVfUFJPSkVDVE9SXSk7IC8vZm9yIG5vIG9ubHkgbGlnaHQgaXMgcmVxdWVzdGVkISEhIVxyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5VGFyZ2V0WzBdKSAmJiAodGFyZ2V0SUQgIT0gMCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBsaWdodCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKCBmb3IgdGhpcyBDb21tYW5kQm9jayFcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0YXJnZXRPYmplY3QgPSByZXR1cm5lZEFycmF5VGFyZ2V0WzFdO1xyXG5cclxuXHRcdFx0XHRpZiAocGFyZW50T2JqZWN0KSB7XHJcblx0XHRcdFx0XHRwYXJlbnRPYmplY3QuYWRkQ2hpbGQodGFyZ2V0T2JqZWN0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRhcmdldE9iamVjdC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0YXJnZXRPYmplY3QpIHtcclxuXHRcdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcclxuXHJcblx0XHRcdHRhcmdldE9iamVjdC5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcclxuXHRcdFx0dGFyZ2V0T2JqZWN0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0YXJnZXRPYmplY3RcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDb21tYW5kQmxvY2s6IE5hbWUgPSAnXCIgKyBuYW1lKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvL2Jsb2NrSUQgMjU1XHJcblx0cHJpdmF0ZSBwYXJzZU1ldGFEYXRhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyLCAyOkFXRFBhcnNlci5BV0RTVFJJTkcsIDM6QVdEUGFyc2VyLkFXRFNUUklORywgNDpBV0RQYXJzZXIuQVdEU1RSSU5HLCA1OkFXRFBhcnNlci5BV0RTVFJJTkd9KTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBNZXRhRGF0YUJsb2NrOiBUaW1lU3RhbXAgICAgICAgICA9IFwiICsgcHJvcHMuZ2V0KDEsIDApKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBFbmNvZGVyTmFtZSAgICAgICA9IFwiICsgcHJvcHMuZ2V0KDIsIFwidW5rbm93blwiKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgRW5jb2RlclZlcnNpb24gICAgPSBcIiArIHByb3BzLmdldCgzLCBcInVua25vd25cIikpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRvck5hbWUgICAgID0gXCIgKyBwcm9wcy5nZXQoNCwgXCJ1bmtub3duXCIpKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0b3JWZXJzaW9uICA9IFwiICsgcHJvcHMuZ2V0KDUsIFwidW5rbm93blwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL2Jsb2NrSUQgMjU0XHJcblx0cHJpdmF0ZSBwYXJzZU5hbWVTcGFjZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBpZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBuYW1lU3BhY2VTdHJpbmc6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE5hbWVTcGFjZUJsb2NrOiBJRCA9IFwiICsgaWQgKyBcIiB8IFN0cmluZyA9IFwiICsgbmFtZVNwYWNlU3RyaW5nKTtcclxuXHR9XHJcblxyXG5cdC8vLS1QYXJzZXIgVVRJTFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbnMgcmVhZHMgYW5kIGNyZWF0ZXMgYSBTaGFkb3dNZXRob2RNZXRob2RcclxuXHRwcml2YXRlIHBhcnNlU2hhZG93TWV0aG9kTGlzdChsaWdodDpMaWdodEJhc2UsIGJsb2NrSUQ6bnVtYmVyKTpTaGFkb3dNZXRob2RCYXNlXHJcblx0e1xyXG5cclxuXHRcdHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBzaGFkb3dNZXRob2Q6U2hhZG93TWV0aG9kQmFzZTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTCwgODAxOkFXRFBhcnNlci5NVFg0eDR9KTtcclxuXHJcblx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PlxyXG5cdFx0c3dpdGNoIChtZXRob2RUeXBlKSB7XHJcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDEwMDE6IC8vQ2FzY2FkZVNoYWRvd01hcE1ldGhvZFxyXG5cdFx0XHQvL1x0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IGdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5TSEFET1dfTUFQX01FVEhPRF0pO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRfYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNoYWRvd0Jhc2VNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgQ2FzY2FkZVNoYWRvd01hcE1ldGhvZCAtIFNoYWRvd01ldGhvZCBub3QgY3JlYXRlZFwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHR9XHJcblx0XHRcdC8vXHRcdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBDYXNjYWRlU2hhZG93TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAxMDAyOiAvL1NoYWRvd05lYXJNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTaGFkb3dCYXNlTWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFNoYWRvd05lYXJNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93TmVhck1ldGhvZCg8U2hhZG93TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTEwMTogLy9TaGFkb3dGaWx0ZXJlZE1ldGhvZFxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RmlsdGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0KTtcclxuXHRcdFx0XHQoPFNoYWRvd0ZpbHRlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XHJcblx0XHRcdFx0KDxTaGFkb3dGaWx0ZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAxMTAyOiAvL1NoYWRvd0RpdGhlcmVkTWV0aG9kXHJcblxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RGl0aGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0LCA8bnVtYmVyPiBwcm9wcy5nZXQoMjAxLCA1KSk7XHJcblx0XHRcdFx0KDxTaGFkb3dEaXRoZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG5cdFx0XHRcdCg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcclxuXHRcdFx0XHQoPFNoYWRvd0RpdGhlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLnJhbmdlID0gcHJvcHMuZ2V0KDEwMywgMSk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDExMDM6IC8vU2hhZG93U29mdE1ldGhvZFxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93U29mdE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQsIDxudW1iZXI+IHByb3BzLmdldCgyMDEsIDUpKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkucmFuZ2UgPSBwcm9wcy5nZXQoMTAzLCAxKTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTEwNDogLy9TaGFkb3dIYXJkTWV0aG9kXHJcblx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IFNoYWRvd0hhcmRNZXRob2QobGlnaHQpO1xyXG5cdFx0XHRcdCg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG5cdFx0XHRcdCg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0cmV0dXJuIHNoYWRvd01ldGhvZDtcclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgMTAxXHJcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIG51bV9qb2ludHM6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIHNrZWxldG9uOlNrZWxldG9uID0gbmV3IFNrZWxldG9uKCk7XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsgLy8gRGlzY2FyZCBwcm9wZXJ0aWVzIGZvciBub3dcclxuXHJcblx0XHR2YXIgam9pbnRzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xyXG5cdFx0d2hpbGUgKGpvaW50c19wYXJzZWQgPCBudW1fam9pbnRzKSB7XHJcblx0XHRcdHZhciBqb2ludDpTa2VsZXRvbkpvaW50O1xyXG5cdFx0XHR2YXIgaWJwOk1hdHJpeDNEO1xyXG5cdFx0XHQvLyBJZ25vcmUgam9pbnQgaWRcclxuXHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRqb2ludCA9IG5ldyBTa2VsZXRvbkpvaW50KCk7XHJcblx0XHRcdGpvaW50LnBhcmVudEluZGV4ID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpIC0gMTsgLy8gMD1udWxsIGluIEFXRFxyXG5cdFx0XHRqb2ludC5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdFx0aWJwID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHRcdGpvaW50LmludmVyc2VCaW5kUG9zZSA9IGlicC5yYXdEYXRhO1xyXG5cdFx0XHQvLyBJZ25vcmUgam9pbnQgcHJvcHMvYXR0cmlidXRlcyBmb3Igbm93XHJcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdFx0c2tlbGV0b24uam9pbnRzLnB1c2goam9pbnQpO1xyXG5cdFx0XHRqb2ludHNfcGFyc2VkKys7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRGlzY2FyZCBhdHRyaWJ1dGVzIGZvciBub3dcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoc2tlbGV0b24sIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBza2VsZXRvbjtcclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbjogTmFtZSA9IFwiICsgc2tlbGV0b24ubmFtZSArIFwiIHwgTnVtYmVyIG9mIEpvaW50cyA9IFwiICsgam9pbnRzX3BhcnNlZCk7XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gMTAyXHJcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uUG9zZShibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBudW1fam9pbnRzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBJZ25vcmUgcHJvcGVydGllcyBmb3Igbm93XHJcblxyXG5cdFx0dmFyIHBvc2U6U2tlbGV0b25Qb3NlID0gbmV3IFNrZWxldG9uUG9zZSgpO1xyXG5cclxuXHRcdHZhciBqb2ludHNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XHJcblx0XHR3aGlsZSAoam9pbnRzX3BhcnNlZCA8IG51bV9qb2ludHMpIHtcclxuXHRcdFx0dmFyIGpvaW50X3Bvc2U6Sm9pbnRQb3NlO1xyXG5cdFx0XHR2YXIgaGFzX3RyYW5zZm9ybTpudW1iZXIgLyp1aW50Ki87XHJcblx0XHRcdGpvaW50X3Bvc2UgPSBuZXcgSm9pbnRQb3NlKCk7XHJcblx0XHRcdGhhc190cmFuc2Zvcm0gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0aWYgKGhhc190cmFuc2Zvcm0gPT0gMSkge1xyXG5cdFx0XHRcdHZhciBtdHhfZGF0YTpBcnJheTxudW1iZXI+ID0gdGhpcy5wYXJzZU1hdHJpeDQzUmF3RGF0YSgpO1xyXG5cclxuXHRcdFx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gbmV3IE1hdHJpeDNEKG10eF9kYXRhKTtcclxuXHRcdFx0XHRqb2ludF9wb3NlLm9yaWVudGF0aW9uLmZyb21NYXRyaXgobXR4KTtcclxuXHRcdFx0XHRqb2ludF9wb3NlLnRyYW5zbGF0aW9uLmNvcHlGcm9tKG10eC5wb3NpdGlvbik7XHJcblxyXG5cdFx0XHRcdHBvc2Uuam9pbnRQb3Nlc1tqb2ludHNfcGFyc2VkXSA9IGpvaW50X3Bvc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0am9pbnRzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0Ly8gU2tpcCBhdHRyaWJ1dGVzIGZvciBub3dcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQocG9zZSwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHBvc2U7XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b25Qb3NlOiBOYW1lID0gXCIgKyBwb3NlLm5hbWUgKyBcIiB8IE51bWJlciBvZiBKb2ludHMgPSBcIiArIGpvaW50c19wYXJzZWQpO1xyXG5cdH1cclxuXHJcblx0Ly9ibG9ja0lEIDEwM1xyXG5cdHByaXZhdGUgcGFyc2VTa2VsZXRvbkFuaW1hdGlvbihibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBmcmFtZV9kdXI6bnVtYmVyO1xyXG5cdFx0dmFyIHBvc2VfYWRkcjpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgY2xpcDpTa2VsZXRvbkNsaXBOb2RlID0gbmV3IFNrZWxldG9uQ2xpcE5vZGUoKTtcclxuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBJZ25vcmUgcHJvcGVydGllcyBmb3Igbm93XHJcblxyXG5cdFx0dmFyIGZyYW1lc19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XHJcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcclxuXHRcdFx0cG9zZV9hZGRyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0ZnJhbWVfZHVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZV9hZGRyLCBbQXNzZXRUeXBlLlNLRUxFVE9OX1BPU0VdKTtcclxuXHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTa2VsZXRvblBvc2UgRnJhbWUgIyBcIiArIGZyYW1lc19wYXJzZWQgKyBcIiAoSUQgPSBcIiArIHBvc2VfYWRkciArIFwiICkgZm9yIHRoaXMgU2tlbGV0b25DbGlwTm9kZVwiKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGNsaXAuYWRkRnJhbWUoPFNrZWxldG9uUG9zZT4gdGhpcy5fYmxvY2tzW3Bvc2VfYWRkcl0uZGF0YSwgZnJhbWVfZHVyKTtcclxuXHRcdFx0ZnJhbWVzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNsaXAuZnJhbWVzLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCB0aGlzIFNrZWxldG9uQ2xpcE5vZGUsIGJlY2F1c2Ugbm8gRnJhbWVzIHdoZXJlIHNldC5cIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdC8vIElnbm9yZSBhdHRyaWJ1dGVzIGZvciBub3dcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoY2xpcCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGNsaXA7XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b25DbGlwTm9kZTogTmFtZSA9IFwiICsgY2xpcC5uYW1lICsgXCIgfCBOdW1iZXIgb2YgRnJhbWVzID0gXCIgKyBjbGlwLmZyYW1lcy5sZW5ndGgpO1xyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDExMSAvICBCbG9jayBJRCA9IDExMlxyXG5cdHByaXZhdGUgcGFyc2VNZXNoUG9zZUFuaW1hdGlvbihibG9ja0lEOm51bWJlciAvKnVpbnQqLywgcG9zZU9ubHk6Ym9vbGVhbiA9IGZhbHNlKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG51bV9mcmFtZXM6bnVtYmVyIC8qdWludCovID0gMTtcclxuXHRcdHZhciBudW1fc3VibWVzaGVzOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBmcmFtZXNfcGFyc2VkOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBzdWJNZXNoUGFyc2VkOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBmcmFtZV9kdXI6bnVtYmVyO1xyXG5cdFx0dmFyIHg6bnVtYmVyO1xyXG5cdFx0dmFyIHk6bnVtYmVyO1xyXG5cdFx0dmFyIHo6bnVtYmVyO1xyXG5cdFx0dmFyIHN0cl9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIHN0cl9lbmQ6bnVtYmVyO1xyXG5cdFx0dmFyIGdlb21ldHJ5Okdlb21ldHJ5O1xyXG5cdFx0dmFyIHN1Ykdlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcclxuXHRcdHZhciBpZHg6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cdFx0dmFyIGNsaXA6VmVydGV4Q2xpcE5vZGUgPSBuZXcgVmVydGV4Q2xpcE5vZGUoKTtcclxuXHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki87XHJcblx0XHR2YXIgdmVydHM6QXJyYXk8bnVtYmVyPjtcclxuXHRcdHZhciBudW1fU3RyZWFtczpudW1iZXIgLyppbnQqLyA9IDA7XHJcblx0XHR2YXIgc3RyZWFtc1BhcnNlZDpudW1iZXIgLyppbnQqLyA9IDA7XHJcblx0XHR2YXIgc3RyZWFtdHlwZXM6QXJyYXk8bnVtYmVyPiAvKmludCovID0gbmV3IEFycmF5PG51bWJlcj4oKSAvKmludCovO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXM7XHJcblx0XHR2YXIgdGhpc0dlbzpHZW9tZXRyeTtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBnZW9BZHJlc3M6bnVtYmVyIC8qaW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGdlb0FkcmVzcywgW0Fzc2V0VHlwZS5HRU9NRVRSWV0pO1xyXG5cdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSB0YXJnZXQtR2VvbWV0cnktT2JqZWN0IFwiICsgZ2VvQWRyZXNzICsgXCIgKSBmb3IgdGhpcyBWZXJ0ZXhDbGlwTm9kZVwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHV2czpBcnJheTxBcnJheTxudW1iZXI+PiA9IHRoaXMuZ2V0VVZGb3JWZXJ0ZXhBbmltYXRpb24oZ2VvQWRyZXNzKTtcclxuXHRcdGlmICghcG9zZU9ubHkpXHJcblx0XHRcdG51bV9mcmFtZXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0bnVtX3N1Ym1lc2hlcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdG51bV9TdHJlYW1zID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0c3RyZWFtc1BhcnNlZCA9IDA7XHJcblx0XHR3aGlsZSAoc3RyZWFtc1BhcnNlZCA8IG51bV9TdHJlYW1zKSB7XHJcblx0XHRcdHN0cmVhbXR5cGVzLnB1c2godGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpKTtcclxuXHRcdFx0c3RyZWFtc1BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQk9PTCwgMjpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cclxuXHRcdGNsaXAubG9vcGluZyA9IHByb3BzLmdldCgxLCB0cnVlKTtcclxuXHRcdGNsaXAuc3RpdGNoRmluYWxGcmFtZSA9IHByb3BzLmdldCgyLCBmYWxzZSk7XHJcblxyXG5cdFx0ZnJhbWVzX3BhcnNlZCA9IDA7XHJcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcclxuXHRcdFx0ZnJhbWVfZHVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xyXG5cdFx0XHRzdWJNZXNoUGFyc2VkID0gMDtcclxuXHRcdFx0d2hpbGUgKHN1Yk1lc2hQYXJzZWQgPCBudW1fc3VibWVzaGVzKSB7XHJcblx0XHRcdFx0c3RyZWFtc1BhcnNlZCA9IDA7XHJcblx0XHRcdFx0c3RyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xyXG5cdFx0XHRcdHdoaWxlIChzdHJlYW1zUGFyc2VkIDwgbnVtX1N0cmVhbXMpIHtcclxuXHRcdFx0XHRcdGlmIChzdHJlYW10eXBlc1tzdHJlYW1zUGFyc2VkXSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGluZGljZXMgPSAoPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5WzFdKS5zdWJHZW9tZXRyaWVzW3N1Yk1lc2hQYXJzZWRdLmluZGljZXM7XHJcblx0XHRcdFx0XHRcdHZlcnRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0XHRcdFx0aWR4ID0gMDtcclxuXHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0eCA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcclxuXHRcdFx0XHRcdFx0XHR5ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKVxyXG5cdFx0XHRcdFx0XHRcdHogPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pXHJcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geDtcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB5O1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHo7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0c3ViR2VvbSA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlUG9zaXRpb25zKHZlcnRzKTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVVVnModXZzW3N1Yk1lc2hQYXJzZWRdKTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVWZXJ0ZXhOb3JtYWxzKG51bGwpO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVZlcnRleFRhbmdlbnRzKG51bGwpO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20uYXV0b0Rlcml2ZVRhbmdlbnRzID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHN1Yk1lc2hQYXJzZWQrKztcclxuXHRcdFx0XHRcdFx0Z2VvbWV0cnkuYWRkU3ViR2VvbWV0cnkoc3ViR2VvbSlcclxuXHRcdFx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcclxuXHRcdFx0XHRcdHN0cmVhbXNQYXJzZWQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2xpcC5hZGRGcmFtZShnZW9tZXRyeSwgZnJhbWVfZHVyKTtcclxuXHRcdFx0ZnJhbWVzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChjbGlwLCBuYW1lKTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGNsaXA7XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVmVydGV4Q2xpcE5vZGU6IE5hbWUgPSBcIiArIGNsaXAubmFtZSArIFwiIHwgVGFyZ2V0LUdlb21ldHJ5LU5hbWUgPSBcIiArICg8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlbMV0pLm5hbWUgKyBcIiB8IE51bWJlciBvZiBGcmFtZXMgPSBcIiArIGNsaXAuZnJhbWVzLmxlbmd0aCk7XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrSUQgMTEzXHJcblx0cHJpdmF0ZSBwYXJzZVZlcnRleEFuaW1hdGlvblNldChibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBwb3NlQmxvY2tBZHJlc3M6bnVtYmVyIC8qaW50Ki9cclxuXHRcdHZhciBvdXRwdXRTdHJpbmc6c3RyaW5nID0gXCJcIjtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQxNn0pO1xyXG5cdFx0dmFyIGZyYW1lc19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcclxuXHRcdHZhciBza2VsZXRvbkZyYW1lczpBcnJheTxTa2VsZXRvbkNsaXBOb2RlPiA9IG5ldyBBcnJheTxTa2VsZXRvbkNsaXBOb2RlPigpO1xyXG5cdFx0dmFyIHZlcnRleEZyYW1lczpBcnJheTxWZXJ0ZXhDbGlwTm9kZT4gPSBuZXcgQXJyYXk8VmVydGV4Q2xpcE5vZGU+KCk7XHJcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcclxuXHRcdFx0cG9zZUJsb2NrQWRyZXNzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBvc2VCbG9ja0FkcmVzcywgW0Fzc2V0VHlwZS5BTklNQVRJT05fTk9ERV0pO1xyXG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEFuaW1hdGlvbkNsaXBOb2RlIE5yIFwiICsgZnJhbWVzX3BhcnNlZCArIFwiICggXCIgKyBwb3NlQmxvY2tBZHJlc3MgKyBcIiApIGZvciB0aGlzIEFuaW1hdGlvblNldFwiKTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMV0gaW5zdGFuY2VvZiBWZXJ0ZXhDbGlwTm9kZSlcclxuXHRcdFx0XHRcdHZlcnRleEZyYW1lcy5wdXNoKHJldHVybmVkQXJyYXlbMV0pXHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMV0gaW5zdGFuY2VvZiBTa2VsZXRvbkNsaXBOb2RlKVxyXG5cdFx0XHRcdFx0c2tlbGV0b25GcmFtZXMucHVzaChyZXR1cm5lZEFycmF5WzFdKVxyXG5cdFx0XHR9XHJcblx0XHRcdGZyYW1lc19wYXJzZWQrKztcclxuXHRcdH1cclxuXHRcdGlmICgodmVydGV4RnJhbWVzLmxlbmd0aCA9PSAwKSAmJiAoc2tlbGV0b25GcmFtZXMubGVuZ3RoID09IDApKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGhpcyBBbmltYXRpb25TZXQsIGJlY2F1c2UgaXQgY29udGFpbnMgbm8gYW5pbWF0aW9uc1wiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRpZiAodmVydGV4RnJhbWVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dmFyIG5ld1ZlcnRleEFuaW1hdGlvblNldDpWZXJ0ZXhBbmltYXRpb25TZXQgPSBuZXcgVmVydGV4QW5pbWF0aW9uU2V0KCk7XHJcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdmVydGV4RnJhbWVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdG5ld1ZlcnRleEFuaW1hdGlvblNldC5hZGRBbmltYXRpb24odmVydGV4RnJhbWVzW2ldKTtcclxuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobmV3VmVydGV4QW5pbWF0aW9uU2V0LCBuYW1lKTtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBuZXdWZXJ0ZXhBbmltYXRpb25TZXQ7XHJcblx0XHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFZlcnRleEFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3VmVydGV4QW5pbWF0aW9uU2V0LmFuaW1hdGlvbnMubGVuZ3RoICsgXCIgfCBBbmltYXRpb24tTmFtZXMgPSBcIiArIG5ld1ZlcnRleEFuaW1hdGlvblNldC5hbmltYXRpb25OYW1lcy50b1N0cmluZygpKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHNrZWxldG9uRnJhbWVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBvc2VCbG9ja0FkcmVzcywgW0Fzc2V0VHlwZS5BTklNQVRJT05fTk9ERV0pO1xyXG5cdFx0XHR2YXIgbmV3U2tlbGV0b25BbmltYXRpb25TZXQ6U2tlbGV0b25BbmltYXRpb25TZXQgPSBuZXcgU2tlbGV0b25BbmltYXRpb25TZXQocHJvcHMuZ2V0KDEsIDQpKTsgLy9wcm9wcy5nZXQoMSw0KSk7XHJcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgc2tlbGV0b25GcmFtZXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0bmV3U2tlbGV0b25BbmltYXRpb25TZXQuYWRkQW5pbWF0aW9uKHNrZWxldG9uRnJhbWVzW2ldKTtcclxuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobmV3U2tlbGV0b25BbmltYXRpb25TZXQsIG5hbWUpO1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0O1xyXG5cdFx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbkFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9ucy5sZW5ndGggKyBcIiB8IEFuaW1hdGlvbi1OYW1lcyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9uTmFtZXMudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9ja0lEIDEyMlxyXG5cdHByaXZhdGUgcGFyc2VBbmltYXRvclNldChibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciB0YXJnZXRNZXNoOk1lc2g7XHJcblx0XHR2YXIgYW5pbVNldEJsb2NrQWRyZXNzOm51bWJlciAvKmludCovXHJcblx0XHR2YXIgdGFyZ2V0QW5pbWF0aW9uU2V0OkFuaW1hdGlvblNldEJhc2U7XHJcblx0XHR2YXIgb3V0cHV0U3RyaW5nOnN0cmluZyA9IFwiXCI7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgdHlwZTpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFJ9KTtcclxuXHJcblx0XHRhbmltU2V0QmxvY2tBZHJlc3MgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIHRhcmdldE1lc2hMZW5ndGg6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIG1lc2hBZHJlc3NlczpBcnJheTxudW1iZXI+IC8qdWludCovID0gbmV3IEFycmF5PG51bWJlcj4oKSAvKnVpbnQqLztcclxuXHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdGFyZ2V0TWVzaExlbmd0aDsgaSsrKVxyXG5cdFx0XHRtZXNoQWRyZXNzZXMucHVzaCh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpKTtcclxuXHJcblx0XHR2YXIgYWN0aXZlU3RhdGU6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIGF1dG9wbGF5OmJvb2xlYW4gPSAoIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpID09IDEgKTtcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcclxuXHRcdHZhciB0YXJnZXRNZXNoZXM6QXJyYXk8TWVzaD4gPSBuZXcgQXJyYXk8TWVzaD4oKTtcclxuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbWVzaEFkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChtZXNoQWRyZXNzZXNbaV0sIFtBc3NldFR5cGUuTUVTSF0pO1xyXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHR0YXJnZXRNZXNoZXMucHVzaCg8TWVzaD4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoYW5pbVNldEJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9TRVRdKTtcclxuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQW5pbWF0aW9uU2V0ICggXCIgKyBhbmltU2V0QmxvY2tBZHJlc3MgKyBcIiApIGZvciB0aGlzIEFuaW1hdG9yXCIpOztcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHR0YXJnZXRBbmltYXRpb25TZXQgPSA8QW5pbWF0aW9uU2V0QmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdHZhciB0aGlzQW5pbWF0b3I6QW5pbWF0b3JCYXNlO1xyXG5cdFx0aWYgKHR5cGUgPT0gMSkge1xyXG5cclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHByb3BzLmdldCgxLCAwKSwgW0Fzc2V0VHlwZS5TS0VMRVRPTl0pO1xyXG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2tlbGV0b24gKCBcIiArIHByb3BzLmdldCgxLCAwKSArIFwiICkgZm9yIHRoaXMgQW5pbWF0b3JcIik7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpc0FuaW1hdG9yID0gbmV3IFNrZWxldG9uQW5pbWF0b3IoPFNrZWxldG9uQW5pbWF0aW9uU2V0PiB0YXJnZXRBbmltYXRpb25TZXQsIDxTa2VsZXRvbj4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0eXBlID09IDIpXHJcblx0XHRcdHRoaXNBbmltYXRvciA9IG5ldyBWZXJ0ZXhBbmltYXRvcig8VmVydGV4QW5pbWF0aW9uU2V0PiB0YXJnZXRBbmltYXRpb25TZXQpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHRoaXNBbmltYXRvciwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRoaXNBbmltYXRvcjtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCB0YXJnZXRNZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHR5cGUgPT0gMSlcclxuXHRcdFx0XHR0YXJnZXRNZXNoZXNbaV0uYW5pbWF0b3IgPSAoPFNrZWxldG9uQW5pbWF0b3I+IHRoaXNBbmltYXRvcik7XHJcblx0XHRcdGlmICh0eXBlID09IDIpXHJcblx0XHRcdFx0dGFyZ2V0TWVzaGVzW2ldLmFuaW1hdG9yID0gKDxWZXJ0ZXhBbmltYXRvcj4gdGhpc0FuaW1hdG9yKTtcclxuXHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQW5pbWF0b3I6IE5hbWUgPSBcIiArIG5hbWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbnMgcmVhZHMgYW5kIGNyZWF0ZXMgYSBFZmZlY3RNZXRob2RcclxuXHRwcml2YXRlIHBhcnNlU2hhcmVkTWV0aG9kTGlzdChibG9ja0lEOm51bWJlcik6RWZmZWN0TWV0aG9kQmFzZVxyXG5cdHtcclxuXHJcblx0XHR2YXIgbWV0aG9kVHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgZWZmZWN0TWV0aG9kUmV0dXJuOkVmZmVjdE1ldGhvZEJhc2U7XHJcblxyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgMTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMTA0OnRoaXMuX3Byb3BzTnJUeXBlLCAxMDU6dGhpcy5fcHJvcHNOclR5cGUsIDEwNjp0aGlzLl9wcm9wc05yVHlwZSwgMTA3OnRoaXMuX3Byb3BzTnJUeXBlLCAyMDE6QVdEUGFyc2VyLlVJTlQzMiwgMjAyOkFXRFBhcnNlci5VSU5UMzIsIDMwMTpBV0RQYXJzZXIuVUlOVDE2LCAzMDI6QVdEUGFyc2VyLlVJTlQxNiwgNDAxOkFXRFBhcnNlci5VSU5UOCwgNDAyOkFXRFBhcnNlci5VSU5UOCwgNjAxOkFXRFBhcnNlci5DT0xPUiwgNjAyOkFXRFBhcnNlci5DT0xPUiwgNzAxOkFXRFBhcnNlci5CT09MLCA3MDI6QVdEUGFyc2VyLkJPT0x9KTtcclxuXHRcdHZhciB0YXJnZXRJRDpudW1iZXI7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG5cclxuXHRcdHN3aXRjaCAobWV0aG9kVHlwZSkge1xyXG5cdFx0XHQvLyBFZmZlY3QgTWV0aG9kc1xyXG5cdFx0XHRjYXNlIDQwMTogLy9Db2xvck1hdHJpeFxyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RDb2xvck1hdHJpeE1ldGhvZChwcm9wcy5nZXQoMTAxLCBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSkpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDI6IC8vQ29sb3JUcmFuc2Zvcm1cclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2QoKTtcclxuXHRcdFx0XHR2YXIgb2ZmQ29sOm51bWJlciAvKnVpbnQqLyA9IHByb3BzLmdldCg2MDEsIDB4MDAwMDAwMDApO1xyXG5cdFx0XHRcdCg8RWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2Q+IGVmZmVjdE1ldGhvZFJldHVybikuY29sb3JUcmFuc2Zvcm0gPSBuZXcgQ29sb3JUcmFuc2Zvcm0ocHJvcHMuZ2V0KDEwMiwgMSksIHByb3BzLmdldCgxMDMsIDEpLCBwcm9wcy5nZXQoMTA0LCAxKSwgcHJvcHMuZ2V0KDEwMSwgMSksICgob2ZmQ29sID4+IDE2KSAmIDB4RkYpLCAoKG9mZkNvbCA+PiA4KSAmIDB4RkYpLCAob2ZmQ29sICYgMHhGRiksICgob2ZmQ29sID4+IDI0KSAmIDB4RkYpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDM6IC8vRW52TWFwXHJcblxyXG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFTlYgTUFQJywgdGFyZ2V0SUQpO1xyXG5cclxuXHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbIEFzc2V0VHlwZS5URVhUVVJFIF0sIFwiQ3ViZVRleHR1cmVcIik7XHJcblx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEVudk1hcE1ldGhvZCg8Q3ViZVRleHR1cmVCYXNlPiByZXR1cm5lZEFycmF5WzFdLCA8bnVtYmVyPiBwcm9wcy5nZXQoMTAxLCAxKSk7XHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMiwgMCk7XHJcblx0XHRcdFx0aWYgKHRhcmdldElEID4gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIE1hc2stdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XHJcblxyXG5cdFx0XHRcdFx0Ly8gVG9kbzogdGVzdCBtYXNrIHdpdGggRW52TWFwTWV0aG9kXHJcblx0XHRcdFx0XHQvLyg8RW52TWFwTWV0aG9kPiBlZmZlY3RNZXRob2RSZXR1cm4pLm1hc2sgPSA8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDA0OiAvL0xpZ2h0TWFwTWV0aG9kXHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTGlnaHRNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgTGlnaHRNYXBNZXRob2RcIik7XHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdExpZ2h0TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg0MDEsIDEwKV0pOyAvL3VzZXNlY29uZGFyeVVWIG5vdCBzZXRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgNDA1OiAvL1Byb2plY3RpdmVUZXh0dXJlTWV0aG9kXHJcblx0XHRcdC8vXHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVfUFJPSkVDVE9SXSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRfYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFRleHR1cmVQcm9qZWN0b3IgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgUHJvamVjdGl2ZVRleHR1cmVNZXRob2RcIik7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwNjogLy9SaW1MaWdodE1ldGhvZFxyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RSaW1MaWdodE1ldGhvZChwcm9wcy5nZXQoNjAxLCAweGZmZmZmZiksIHByb3BzLmdldCgxMDEsIDAuNCksIHByb3BzLmdldCgxMDEsIDIpKTsgLy9ibGVuZE1vZGVcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDc6IC8vQWxwaGFNYXNrTWV0aG9kXHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQWxwaGEtdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBBbHBoYU1hc2tNZXRob2RcIik7XHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEFscGhhTWFza01ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBwcm9wcy5nZXQoNzAxLCBmYWxzZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvL1x0XHRcdFx0Y2FzZSA0MDg6IC8vUmVmcmFjdGlvbkVudk1hcE1ldGhvZFxyXG5cdFx0XHQvL1x0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IGdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRW52TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFJlZnJhY3Rpb25FbnZNYXBNZXRob2RcIik7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBSZWZyYWN0aW9uRW52TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHByb3BzLmdldCgxMDEsIDAuMSksIHByb3BzLmdldCgxMDIsIDAuMDEpLCBwcm9wcy5nZXQoMTAzLCAwLjAxKSwgcHJvcHMuZ2V0KDEwNCwgMC4wMSkpO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRSZWZyYWN0aW9uRW52TWFwTWV0aG9kKGVmZmVjdE1ldGhvZFJldHVybikuYWxwaGEgPSBwcm9wcy5nZXQoMTA0LCAxKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDQwOTogLy9PdXRsaW5lTWV0aG9kXHJcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBPdXRsaW5lTWV0aG9kKHByb3BzLmdldCg2MDEsIDB4MDAwMDAwMDApLCBwcm9wcy5nZXQoMTAxLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQxMDogLy9GcmVzbmVsRW52TWFwTWV0aG9kXHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgRnJlc25lbEVudk1hcE1ldGhvZFwiKTtcclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBwcm9wcy5nZXQoMTAxLCAxKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDExOiAvL0ZvZ01ldGhvZFxyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RGb2dNZXRob2QocHJvcHMuZ2V0KDEwMSwgMCksIHByb3BzLmdldCgxMDIsIDEwMDApLCBwcm9wcy5nZXQoNjAxLCAweDgwODA4MCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0cmV0dXJuIGVmZmVjdE1ldGhvZFJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlVXNlckF0dHJpYnV0ZXMoKTpPYmplY3RcclxuXHR7XHJcblx0XHR2YXIgYXR0cmlidXRlczpPYmplY3Q7XHJcblx0XHR2YXIgbGlzdF9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIGF0dGlidXRlQ250Om51bWJlcjtcclxuXHJcblx0XHRsaXN0X2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0aWYgKGxpc3RfbGVuID4gMCkge1xyXG5cclxuXHRcdFx0dmFyIGxpc3RfZW5kOm51bWJlcjtcclxuXHJcblx0XHRcdGF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcblx0XHRcdGxpc3RfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxpc3RfbGVuO1xyXG5cclxuXHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBsaXN0X2VuZCkge1xyXG5cdFx0XHRcdHZhciBuc19pZDpudW1iZXI7XHJcblx0XHRcdFx0dmFyIGF0dHJfa2V5OnN0cmluZztcclxuXHRcdFx0XHR2YXIgYXR0cl90eXBlOm51bWJlcjtcclxuXHRcdFx0XHR2YXIgYXR0cl9sZW46bnVtYmVyO1xyXG5cdFx0XHRcdHZhciBhdHRyX3ZhbDphbnk7XHJcblxyXG5cdFx0XHRcdC8vIFRPRE86IFByb3Blcmx5IHRlbmQgdG8gbmFtZXNwYWNlcyBpbiBhdHRyaWJ1dGVzXHJcblx0XHRcdFx0bnNfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRhdHRyX2tleSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdFx0XHRhdHRyX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRhdHRyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0XHRcdGlmICgodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGF0dHJfbGVuKSA+IGxpc3RfZW5kKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBhdHRyaWJ1dGUgIyBcIiArIGF0dGlidXRlQ250ICsgXCIgPSBza2lwcGVkIHRvIGVuZCBvZiBhdHRyaWJ1dGUtbGlzdFwiKTtcclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBsaXN0X2VuZDtcclxuXHRcdFx0XHRcdHJldHVybiBhdHRyaWJ1dGVzO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3dpdGNoIChhdHRyX3R5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkFXRFNUUklORzpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhhdHRyX2xlbik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UODpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMTY6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQzMjpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5CT09MOlxyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDg6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDE2OlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMzI6XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5CQUREUjpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUMzI6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDY0OlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gJ3VuaW1wbGVtZW50ZWQgYXR0cmlidXRlIHR5cGUgJyArIGF0dHJfdHlwZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArPSBhdHRyX2xlbjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiYXR0cmlidXRlID0gbmFtZTogXCIgKyBhdHRyX2tleSArIFwiICAvIHZhbHVlID0gXCIgKyBhdHRyX3ZhbCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRhdHRyaWJ1dGVzW2F0dHJfa2V5XSA9IGF0dHJfdmFsO1xyXG5cdFx0XHRcdGF0dGlidXRlQ250ICs9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXR0cmlidXRlcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VQcm9wZXJ0aWVzKGV4cGVjdGVkOk9iamVjdCk6QVdEUHJvcGVydGllc1xyXG5cdHtcclxuXHRcdHZhciBsaXN0X2VuZDpudW1iZXI7XHJcblx0XHR2YXIgbGlzdF9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIHByb3BlcnR5Q250Om51bWJlciA9IDA7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IG5ldyBBV0RQcm9wZXJ0aWVzKCk7XHJcblxyXG5cdFx0bGlzdF9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0bGlzdF9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGlzdF9sZW47XHJcblxyXG5cdFx0aWYgKGV4cGVjdGVkKSB7XHJcblxyXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IGxpc3RfZW5kKSB7XHJcblx0XHRcdFx0dmFyIGxlbjpudW1iZXI7XHJcblx0XHRcdFx0dmFyIGtleTpudW1iZXI7XHJcblx0XHRcdFx0dmFyIHR5cGU6bnVtYmVyO1xyXG5cclxuXHRcdFx0XHRrZXkgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdFx0bGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRcdFx0aWYgKCh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuKSA+IGxpc3RfZW5kKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBwcm9wZXJ0eSAjIFwiICsgcHJvcGVydHlDbnQgKyBcIiA9IHNraXBwZWQgdG8gZW5kIG9mIHByb3BlcnRpZS1saXN0XCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHByb3BzO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGV4cGVjdGVkLmhhc093blByb3BlcnR5KGtleS50b1N0cmluZygpKSkge1xyXG5cdFx0XHRcdFx0dHlwZSA9IGV4cGVjdGVkW2tleV07XHJcblx0XHRcdFx0XHRwcm9wcy5zZXQoa2V5LCB0aGlzLnBhcnNlQXR0clZhbHVlKHR5cGUsIGxlbikpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGxlbjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHByb3BlcnR5Q250ICs9IDE7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gbGlzdF9lbmQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHByb3BzO1xyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VBdHRyVmFsdWUodHlwZTpudW1iZXIsIGxlbjpudW1iZXIpOmFueVxyXG5cdHtcclxuXHRcdHZhciBlbGVtX2xlbjpudW1iZXI7XHJcblx0XHR2YXIgcmVhZF9mdW5jOkZ1bmN0aW9uO1xyXG5cclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQk9PTDpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UODpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDE7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDE2OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gMjtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDMyOlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gNDtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRJbnQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UODpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDE7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDE2OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gMjtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDMyOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5DT0xPUjpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQkFERFI6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSA0O1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuRkxPQVQzMjpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDQ7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDY0OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gODtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5BV0RTVFJJTkc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGxlbik7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5WRUNUT1IyeDE6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLlZFQ1RPUjN4MTpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SNHgxOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFgzeDI6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLk1UWDN4MzpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYNHgzOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFg0eDQ6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSA4O1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGVsZW1fbGVuIDwgbGVuKSB7XHJcblx0XHRcdHZhciBsaXN0OkFycmF5PGFueT4gPSBbXTtcclxuXHRcdFx0dmFyIG51bV9yZWFkOm51bWJlciA9IDA7XHJcblx0XHRcdHZhciBudW1fZWxlbXM6bnVtYmVyID0gbGVuL2VsZW1fbGVuO1xyXG5cclxuXHRcdFx0d2hpbGUgKG51bV9yZWFkIDwgbnVtX2VsZW1zKSB7XHJcblx0XHRcdFx0bGlzdC5wdXNoKHJlYWRfZnVuYy5hcHBseSh0aGlzLl9uZXdCbG9ja0J5dGVzKSk7IC8vIGxpc3QucHVzaChyZWFkX2Z1bmMoKSk7XHJcblx0XHRcdFx0bnVtX3JlYWQrKztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGxpc3Q7XHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0dmFyIHZhbDphbnkgPSByZWFkX2Z1bmMuYXBwbHkodGhpcy5fbmV3QmxvY2tCeXRlcyk7Ly9yZWFkX2Z1bmMoKTtcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VIZWFkZXIoKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGZsYWdzOm51bWJlcjtcclxuXHRcdHZhciBib2R5X2xlbjpudW1iZXI7XHJcblxyXG5cdFx0dGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPSAzOyAvLyBTa2lwIG1hZ2ljIHN0cmluZyBhbmQgcGFyc2UgdmVyc2lvblxyXG5cclxuXHRcdHRoaXMuX3ZlcnNpb25bMF0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR0aGlzLl92ZXJzaW9uWzFdID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuXHRcdGZsYWdzID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTsgLy8gUGFyc2UgYml0IGZsYWdzXHJcblxyXG5cdFx0dGhpcy5fc3RyZWFtaW5nID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzEpO1xyXG5cclxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAyKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAxKSkge1xyXG5cdFx0XHR0aGlzLl9hY2N1cmFjeU1hdHJpeCA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUcyKTtcclxuXHRcdFx0dGhpcy5fYWNjdXJhY3lHZW8gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMyk7XHJcblx0XHRcdHRoaXMuX2FjY3VyYWN5UHJvcHMgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgd2Ugc2V0IF9hY2N1cmFjeU9uQmxvY2tzLCB0aGUgcHJlY2lzaW9uLXZhbHVlcyBhcmUgcmVhZCBmcm9tIGVhY2ggYmxvY2staGVhZGVyLlxyXG5cclxuXHRcdC8vIHNldCBzdG9yYWdlUHJlY2lzaW9uIHR5cGVzXHJcblx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRpZiAodGhpcy5fYWNjdXJhY3lHZW8pIHtcclxuXHRcdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5TWF0cml4KSB7XHJcblx0XHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5UHJvcHMpIHtcclxuXHRcdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9jb21wcmVzc2lvbiA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTsgLy8gY29tcHJlc3Npb25cclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJJbXBvcnQgQVdERmlsZSBvZiB2ZXJzaW9uID0gXCIgKyB0aGlzLl92ZXJzaW9uWzBdICsgXCIgLSBcIiArIHRoaXMuX3ZlcnNpb25bMV0pO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkdsb2JhbCBTZXR0aW5ncyA9IENvbXByZXNzaW9uID0gXCIgKyB0aGlzLl9jb21wcmVzc2lvbiArIFwiIHwgU3RyZWFtaW5nID0gXCIgKyB0aGlzLl9zdHJlYW1pbmcgKyBcIiB8IE1hdHJpeC1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5TWF0cml4ICsgXCIgfCBHZW9tZXRyeS1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5R2VvICsgXCIgfCBQcm9wZXJ0aWVzLVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lQcm9wcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2hlY2sgZmlsZSBpbnRlZ3JpdHlcclxuXHRcdGJvZHlfbGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRpZiAoIXRoaXMuX3N0cmVhbWluZyAmJiBib2R5X2xlbiAhPSB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKSB7XHJcblx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0FXRDIgYm9keSBsZW5ndGggZG9lcyBub3QgbWF0Y2ggaGVhZGVyIGludGVncml0eSBmaWVsZCcpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0Ly8gSGVscGVyIC0gZnVuY3Rpb25zXHJcblx0cHJpdmF0ZSBnZXRVVkZvclZlcnRleEFuaW1hdGlvbihtZXNoSUQ6bnVtYmVyIC8qdWludCovKTpBcnJheTxBcnJheTxudW1iZXI+PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLl9ibG9ja3NbbWVzaElEXS5kYXRhIGluc3RhbmNlb2YgTWVzaClcclxuXHRcdFx0bWVzaElEID0gdGhpcy5fYmxvY2tzW21lc2hJRF0uZ2VvSUQ7XHJcblx0XHRpZiAodGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uO1xyXG5cdFx0dmFyIGdlb21ldHJ5Okdlb21ldHJ5ID0gKDxHZW9tZXRyeT4gdGhpcy5fYmxvY2tzW21lc2hJRF0uZGF0YSk7XHJcblx0XHR2YXIgZ2VvQ250Om51bWJlciAvKmludCovID0gMDtcclxuXHRcdHZhciB1ZDpBcnJheTxudW1iZXI+O1xyXG5cdFx0dmFyIHVTdHJpZGU6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIHVPZmZzOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBudW1Qb2ludHM6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki87XHJcblx0XHR2YXIgbmV3VXZzOkFycmF5PG51bWJlcj47XHJcblx0XHR2YXIgc3ViX2dlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xyXG5cdFx0d2hpbGUgKGdlb0NudCA8IGdlb21ldHJ5LnN1Ykdlb21ldHJpZXMubGVuZ3RoKSB7XHJcblx0XHRcdG5ld1V2cyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0XHRcdHN1Yl9nZW9tID0gPFRyaWFuZ2xlU3ViR2VvbWV0cnk+IGdlb21ldHJ5LnN1Ykdlb21ldHJpZXNbZ2VvQ250XTtcclxuXHRcdFx0bnVtUG9pbnRzID0gc3ViX2dlb20ubnVtVmVydGljZXM7XHJcblx0XHRcdHVkID0gc3ViX2dlb20udXZzO1xyXG5cdFx0XHR1U3RyaWRlID0gc3ViX2dlb20uZ2V0U3RyaWRlKFRyaWFuZ2xlU3ViR2VvbWV0cnkuVVZfREFUQSk7XHJcblx0XHRcdHVPZmZzID0gc3ViX2dlb20uZ2V0T2Zmc2V0KFRyaWFuZ2xlU3ViR2VvbWV0cnkuVVZfREFUQSk7XHJcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKykge1xyXG5cdFx0XHRcdG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMF0pO1xyXG5cdFx0XHRcdG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbi5wdXNoKG5ld1V2cyk7XHJcblx0XHRcdGdlb0NudCsrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VWYXJTdHIoKTpzdHJpbmdcclxuXHR7XHJcblxyXG5cdFx0dmFyIGxlbjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMobGVuKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0QXNzZXRCeUlEKGFzc2V0SUQ6bnVtYmVyLCBhc3NldFR5cGVzVG9HZXQ6QXJyYXk8c3RyaW5nPiwgZXh0cmFUeXBlSW5mbzpzdHJpbmcgPSBcIlNpbmdsZVRleHR1cmVcIik6QXJyYXk8YW55PlxyXG5cdHtcclxuXHRcdHZhciByZXR1cm5BcnJheTpBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcclxuXHRcdHZhciB0eXBlQ250Om51bWJlciA9IDA7XHJcblx0XHRpZiAoYXNzZXRJRCA+IDApIHtcclxuXHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSkge1xyXG5cdFx0XHRcdFx0d2hpbGUgKHR5cGVDbnQgPCBhc3NldFR5cGVzVG9HZXQubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaWFzc2V0OklBc3NldCA9IDxJQXNzZXQ+IHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGlhc3NldC5hc3NldFR5cGUgPT0gYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly9pZiB0aGUgcmlnaHQgYXNzZXRUeXBlIHdhcyBmb3VuZFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5URVhUVVJFKSAmJiAoZXh0cmFUeXBlSW5mbyA9PSBcIkN1YmVUZXh0dXJlXCIpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEgaW5zdGFuY2VvZiBJbWFnZUN1YmVUZXh0dXJlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5URVhUVVJFKSAmJiAoZXh0cmFUeXBlSW5mbyA9PSBcIlNpbmdsZVRleHR1cmVcIikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSBpbnN0YW5jZW9mIEltYWdlVGV4dHVyZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvL2lmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5HRU9NRVRSWSkgJiYgKElBc3NldChfYmxvY2tzW2Fzc2V0SURdLmRhdGEpLmFzc2V0VHlwZSA9PSBBc3NldFR5cGUuTUVTSCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLkdFT01FVFJZKSAmJiAoaWFzc2V0LmFzc2V0VHlwZSA9PSBBc3NldFR5cGUuTUVTSCkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIG1lc2g6TWVzaCA9IDxNZXNoPiB0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YVxyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2gobWVzaC5nZW9tZXRyeSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dHlwZUNudCsrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gaWYgdGhlIGhhcyBub3QgcmV0dXJuZWQgYW55dGhpbmcgeWV0LCB0aGUgYXNzZXQgaXMgbm90IGZvdW5kLCBvciB0aGUgZm91bmQgYXNzZXQgaXMgbm90IHRoZSByaWdodCB0eXBlLlxyXG5cdFx0cmV0dXJuQXJyYXkucHVzaChmYWxzZSk7XHJcblx0XHRyZXR1cm5BcnJheS5wdXNoKHRoaXMuZ2V0RGVmYXVsdEFzc2V0KGFzc2V0VHlwZXNUb0dldFswXSwgZXh0cmFUeXBlSW5mbykpO1xyXG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xyXG5cdH1cclxuXHRwcml2YXRlIGdldERlZmF1bHRBc3NldChhc3NldFR5cGU6c3RyaW5nLCBleHRyYVR5cGVJbmZvOnN0cmluZyk6SUFzc2V0XHJcblx0e1xyXG5cdFx0c3dpdGNoICh0cnVlKSB7XHJcblx0XHRcdGNhc2UgKGFzc2V0VHlwZSA9PSBBc3NldFR5cGUuVEVYVFVSRSk6XHJcblx0XHRcdFx0aWYgKGV4dHJhVHlwZUluZm8gPT0gXCJDdWJlVGV4dHVyZVwiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk7XHJcblx0XHRcdFx0aWYgKGV4dHJhVHlwZUluZm8gPT0gXCJTaW5nbGVUZXh0dXJlXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0VGV4dHVyZSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIChhc3NldFR5cGUgPT0gQXNzZXRUeXBlLk1BVEVSSUFMKTpcclxuXHRcdFx0XHRyZXR1cm4gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0TWF0ZXJpYWwoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk6SUFzc2V0XHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUpIHtcclxuXHRcdFx0dmFyIGRlZmF1bHRCaXRtYXA6Qml0bWFwRGF0YSA9IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuY3JlYXRlQ2hlY2tlcmVkQml0bWFwRGF0YSgpO1xyXG5cclxuXHRcdFx0dGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlID0gbmV3IEJpdG1hcEN1YmVUZXh0dXJlKGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXApO1xyXG5cdFx0XHR0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUubmFtZSA9IFwiZGVmYXVsdEN1YmVUZXh0dXJlXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxJQXNzZXQ+IHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVhZE51bWJlcihwcmVjaXNpb246Ym9vbGVhbiA9IGZhbHNlKTpudW1iZXJcclxuXHR7XHJcblx0XHRpZiAocHJlY2lzaW9uKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlTWF0cml4M0QoKTpNYXRyaXgzRFxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTWF0cml4M0QodGhpcy5wYXJzZU1hdHJpeDQzUmF3RGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VNYXRyaXgzMlJhd0RhdGEoKTpBcnJheTxudW1iZXI+XHJcblx0e1xyXG5cdFx0dmFyIGk6bnVtYmVyO1xyXG5cdFx0dmFyIG10eF9yYXc6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KDYpO1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IDY7IGkrKykge1xyXG5cdFx0XHRtdHhfcmF3W2ldID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbXR4X3JhdztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VNYXRyaXg0M1Jhd0RhdGEoKTpBcnJheTxudW1iZXI+XHJcblx0e1xyXG5cdFx0dmFyIG10eF9yYXc6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KDE2KTtcclxuXHJcblx0XHRtdHhfcmF3WzBdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMV0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1syXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzNdID0gMC4wO1xyXG5cdFx0bXR4X3Jhd1s0XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzVdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbNl0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1s3XSA9IDAuMDtcclxuXHRcdG10eF9yYXdbOF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1s5XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzEwXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzExXSA9IDAuMDtcclxuXHRcdG10eF9yYXdbMTJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTNdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTRdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTVdID0gMS4wO1xyXG5cclxuXHRcdC8vVE9ETzogZml4IG1heCBleHBvcnRlciB0byByZW1vdmUgTmFOIHZhbHVlcyBpbiBqb2ludCAwIGludmVyc2UgYmluZCBwb3NlXHJcblxyXG5cdFx0aWYgKGlzTmFOKG10eF9yYXdbMF0pKSB7XHJcblx0XHRcdG10eF9yYXdbMF0gPSAxO1xyXG5cdFx0XHRtdHhfcmF3WzFdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1syXSA9IDA7XHJcblx0XHRcdG10eF9yYXdbNF0gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzVdID0gMTtcclxuXHRcdFx0bXR4X3Jhd1s2XSA9IDA7XHJcblx0XHRcdG10eF9yYXdbOF0gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzldID0gMDtcclxuXHRcdFx0bXR4X3Jhd1sxMF0gPSAxO1xyXG5cdFx0XHRtdHhfcmF3WzEyXSA9IDA7XHJcblx0XHRcdG10eF9yYXdbMTNdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1sxNF0gPSAwO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbXR4X3JhdztcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgPSBBV0RQYXJzZXI7XHJcblxyXG5jbGFzcyBBV0RCbG9ja1xyXG57XHJcblx0cHVibGljIGlkOm51bWJlcjtcclxuXHRwdWJsaWMgbmFtZTpzdHJpbmc7XHJcblx0cHVibGljIGRhdGE6YW55O1xyXG5cdHB1YmxpYyBsZW46YW55O1xyXG5cdHB1YmxpYyBnZW9JRDpudW1iZXI7XHJcblx0cHVibGljIGV4dHJhczpPYmplY3Q7XHJcblx0cHVibGljIGJ5dGVzOkJ5dGVBcnJheTtcclxuXHRwdWJsaWMgZXJyb3JNZXNzYWdlczpBcnJheTxzdHJpbmc+O1xyXG5cdHB1YmxpYyB1dnNGb3JWZXJ0ZXhBbmltYXRpb246QXJyYXk8QXJyYXk8bnVtYmVyPj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGlzcG9zZSgpXHJcblx0e1xyXG5cclxuXHRcdHRoaXMuaWQgPSBudWxsO1xyXG5cdFx0dGhpcy5ieXRlcyA9IG51bGw7XHJcblx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBudWxsO1xyXG5cdFx0dGhpcy51dnNGb3JWZXJ0ZXhBbmltYXRpb24gPSBudWxsO1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRFcnJvcihlcnJvck1zZzpzdHJpbmcpOnZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZXJyb3JNZXNzYWdlcylcclxuXHRcdFx0dGhpcy5lcnJvck1lc3NhZ2VzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHJcblx0XHR0aGlzLmVycm9yTWVzc2FnZXMucHVzaChlcnJvck1zZyk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBBV0RQcm9wZXJ0aWVzXHJcbntcclxuXHRwdWJsaWMgc2V0KGtleTpudW1iZXIsIHZhbHVlOmFueSk6dm9pZFxyXG5cdHtcclxuXHRcdHRoaXNbIGtleS50b1N0cmluZygpIF0gPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQoa2V5Om51bWJlciwgZmFsbGJhY2s6YW55KTphbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkudG9TdHJpbmcoKSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXNba2V5LnRvU3RyaW5nKCldO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbGxiYWNrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBCaXRGbGFnc1xyXG57XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTpudW1iZXIgPSAxO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzI6bnVtYmVyID0gMjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUczOm51bWJlciA9IDQ7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHNDpudW1iZXIgPSA4O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzU6bnVtYmVyID0gMTY7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHNjpudW1iZXIgPSAzMjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUc3Om51bWJlciA9IDY0O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzg6bnVtYmVyID0gMTI4O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzk6bnVtYmVyID0gMjU2O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzEwOm51bWJlciA9IDUxMjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUcxMTpudW1iZXIgPSAxMDI0O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzEyOm51bWJlciA9IDIwNDg7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTM6bnVtYmVyID0gNDA5NjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUcxNDpudW1iZXIgPSA4MTkyO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE1Om51bWJlciA9IDE2Mzg0O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE2Om51bWJlciA9IDMyNzY4O1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHRlc3QoZmxhZ3M6bnVtYmVyLCB0ZXN0RmxhZzpudW1iZXIpOmJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKGZsYWdzICYgdGVzdEZsYWcpID09IHRlc3RGbGFnO1xyXG5cdH1cclxufVxyXG4iXX0=