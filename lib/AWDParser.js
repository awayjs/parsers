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
                case 2:
                case 131:
                    this.parseShape2D(this._cur_block_id);
                    isParsed = true;
                    break;
                case 3:
                case 132:
                    this.parseShape2DFill(this._cur_block_id);
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
    //Block ID = 2
    AWDParser.prototype.parseShape2D = function (blockID) {
        var geom = new Geometry();
        // Read name and sub count
        var name = this.parseVarStr();
        var num_subs = this._newBlockBytes.readUnsignedShort();
        // Read optional properties
        var props = this.parseProperties({ 1: this._geoNrType, 2: this._geoNrType });
        // Loop through sub meshes
        var subs_parsed = 0;
        while (subs_parsed < num_subs) {
            var i;
            var sm_len, sm_end;
            var sub_geom;
            var w_indices;
            var weights;
            sm_len = this._newBlockBytes.readUnsignedInt();
            sm_end = this._newBlockBytes.position + sm_len;
            //console.log("        (!) PARSE SUBMESH");
            // Ignore for now (read uv for subshapes later)"
            var subProps = this.parseProperties({ 1: this._geoNrType, 2: this._geoNrType });
            // Loop through data streams
            var indices = new Array();
            var i_idx = 0;
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
                var type;
                var r, g, b, a;
                var u, v;
                if (str_type == 1) {
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
                        r = this.readNumber(this._accuracyGeo);
                        g = this.readNumber(this._accuracyGeo);
                        b = this.readNumber(this._accuracyGeo);
                        a = this.readNumber(this._accuracyGeo);
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
                            // pos.z                |   not used
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
                else if (str_type == 2) {
                    while (this._newBlockBytes.position < str_end) {
                        var thisVal = this._newBlockBytes.readUnsignedShort();
                        indices[i_idx++] = thisVal;
                    }
                }
                else if (str_type == 3) {
                    while (this._newBlockBytes.position < str_end) {
                        var thisVal = this._newBlockBytes.readUnsignedShort();
                        indices[i_idx++] = thisVal;
                    }
                }
                else if (str_type == 4) {
                    while (this._newBlockBytes.position < str_end) {
                        var thisVal = this._newBlockBytes.readUnsignedShort();
                        indices[i_idx++] = thisVal;
                    }
                }
                else if (str_type == 5) {
                    while (this._newBlockBytes.position < str_end) {
                        var thisVal = this._newBlockBytes.readUnsignedShort();
                        indices[i_idx++] = thisVal;
                    }
                }
                else {
                    this._newBlockBytes.position = str_end;
                }
            }
            this.parseUserAttributes(); // Ignore sub-mesh attributes for now
            sub_geom = new TriangleSubGeometry(true);
            sub_geom.autoDeriveNormals = false;
            // when rendering as "normal" 3d-geometry, we need to autoDerive tangents
            if (true) {
                sub_geom.autoDeriveTangents = true;
            }
            else {
                sub_geom.updateVertexTangents(tangents);
            }
            sub_geom.updateIndices(indices);
            sub_geom.updatePositions(verts);
            sub_geom.updateUVs(uvs);
            sub_geom.updateVertexNormals(normals);
            geom.addSubGeometry(sub_geom);
            subs_parsed++;
        }
        this.parseUserAttributes();
        this._pFinalizeAsset(geom, name);
        this._blocks[blockID].data = geom;
        if (this._debug)
            console.log("Parsed a TriangleGeometry: Name = " + name + "| Id = " + sub_geom.id);
    };
    //Block ID = 3
    AWDParser.prototype.parseShape2DFill = function (blockID) {
        var name = this.parseVarStr();
        var fill_type = this._newBlockBytes.readUnsignedByte();
        var fill_props = this.parseProperties({ 1: AWDParser.UINT32 }); // { 1:UINT32, 6:AWDSTRING }  ); //; , 2:UINT32, 3:UINT32, 5:BOOL } );
        switch (fill_type) {
            case 0:
                //console.log("Parsed a Solid FILL: Name = " + name);
                var material = new MethodMaterial(fill_props.get(1, 0xcccccc));
                material.bothSides = true;
                this._pFinalizeAsset(material, name);
                this._blocks[blockID].data = material;
                break;
            case 1:
                console.log("Parsed a bitmap FILL: Name = " + name);
                break;
            case 2:
                console.log("Parsed a linear gradient FILL: Name = " + name);
                break;
            case 3:
                console.log("Parsed a radial gradient FILL: Name = " + name);
                break;
            default:
                console.log("Parsed a unknown fillstyle: Name = " + name);
                break;
        }
        this.parseUserAttributes();
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
            var frameDuration = this._newBlockBytes.readUnsignedInt();
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
                        // Place Object Command
                        var properties = {};
                        var hasResource = !!this._newBlockBytes.readByte();
                        var hasDisplayMatrix = !!this._newBlockBytes.readByte();
                        var hasColorMatrix = !!this._newBlockBytes.readByte();
                        var hasDepthChange = !!this._newBlockBytes.readByte();
                        var hasFilterChange = !!this._newBlockBytes.readByte();
                        var hasBlendModeChange = !!this._newBlockBytes.readByte();
                        var hasDepthClipChange = !!this._newBlockBytes.readByte();
                        var hasVisibilityChange = !!this._newBlockBytes.readByte();
                        objectID = this._newBlockBytes.readUnsignedInt();
                        if (hasResource) {
                            resourceID = this._newBlockBytes.readUnsignedInt();
                            commandString += "\n      - Add new Resource = " + resourceID + " as object_id = " + objectID;
                        }
                        else {
                            commandString += "\n      - Update object_id = " + objectID;
                        }
                        if (hasDisplayMatrix) {
                            var transformArray = [];
                            var thisMatrix = new Matrix3D();
                            // TODO: implement this in exporter (make transform optional 3d):
                            var is3d = false; // !!this._newBlockBytes.readByte();
                            if (is3d) {
                                thisMatrix = this.parseMatrix3D();
                            }
                            else {
                                for (k = 0; k < 6; k++) {
                                    transformArray.push(this._newBlockBytes.readFloat());
                                }
                                // TODO: set rotation and scale
                                thisMatrix.position = new Vector3D(transformArray[4], transformArray[5], 0);
                            }
                            properties["_iMatrix3D"] = thisMatrix;
                            commandString += "\n                transformArray = " + transformArray;
                        }
                        if (hasColorMatrix) {
                            var colorMatrix = [];
                            for (k = 0; k < 20; k++) {
                                colorMatrix.push(this._newBlockBytes.readFloat());
                            }
                            // TODO: set ColorTransform on objectProps
                            commandString += "\n                colorMatrix = " + colorMatrix;
                        }
                        if (hasDepthChange) {
                            var newDepth = this._newBlockBytes.readUnsignedInt();
                            commandString += "\n                Depth = " + newDepth;
                        }
                        if (hasFilterChange) {
                        }
                        if (hasBlendModeChange) {
                            var newBlendMode = this._newBlockBytes.readUnsignedByte();
                            commandString += "\n                BlendMode = " + newBlendMode;
                        }
                        if (hasDepthClipChange) {
                            var newClipDepth = this._newBlockBytes.readUnsignedInt();
                            commandString += "\n                ClipDepth = " + newClipDepth;
                        }
                        if (hasVisibilityChange) {
                            var newVisibility = Boolean(this._newBlockBytes.readByte());
                            commandString += "\n                Visibitily = " + newVisibility;
                            properties["visible"] = newVisibility;
                        }
                        var numFills = this._newBlockBytes.readUnsignedShort();
                        commandString += "\n                number of fills = " + numFills;
                        var fillsIDs = [];
                        for (k = 0; k < numFills; k++) {
                            fillsIDs.push(this._newBlockBytes.readUnsignedInt());
                            commandString += "\n                    id of fill = " + fillsIDs[k];
                        }
                        var instanceName = this.parseVarStr();
                        if (instanceName.length) {
                            properties["name"] = instanceName;
                            commandString += "\n                instanceName = " + instanceName;
                        }
                        // if this is a "ADD NEW OBJECT"-command,
                        // we need to lookup the new object by AWD ID.
                        if (hasResource) {
                            var newChild;
                            // sound is added to timeline with dedicated Command, as it is no display-object (has no matrix etc)
                            // check if a Geometry can be found at the resourceID (AWD-ID)
                            var returnedArray = this.getAssetByID(resourceID, [AssetType.GEOMETRY]);
                            if (returnedArray[0]) {
                                var geom = returnedArray[1];
                                newChild = new Mesh(geom);
                                for (k = 0; k < numFills; k++) {
                                    var returnedArray2 = this.getAssetByID(fillsIDs[k], [AssetType.MATERIAL]);
                                    if (returnedArray2[0] && newChild.subMeshes.length > k)
                                        newChild.subMeshes[k].material = returnedArray2[1];
                                }
                            }
                            else {
                                // no geometry found, so we check for TIMELINE.
                                var returnedArray = this.getAssetByID(resourceID, [AssetType.TIMELINE]);
                                if (returnedArray[0])
                                    newChild = returnedArray[1];
                            }
                            var instanceID = timeLineContainer.registerPotentialChild(newChild);
                            objectIDMap[objectID] = instanceID;
                            frame.addConstructCommand(new AddChildCommand(instanceID));
                        }
                        var instanceID = objectIDMap[objectID];
                        for (var key in properties) {
                            if (properties.hasOwnProperty(key)) {
                                frame.addConstructCommand(new UpdatePropertyCommand(instanceID, key, properties[key]));
                            }
                        }
                        break;
                    case 3:
                        // Remove Object Command
                        objectID = this._newBlockBytes.readUnsignedInt();
                        var instanceID = objectIDMap[objectID];
                        frame.addConstructCommand(new RemoveChildCommand(instanceID));
                        commandString += "\n       - Remove object with ID: " + objectID;
                        break;
                    case 4:
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
            //this.parseUserAttributes(); // Ignore sub-mesh attributes for now
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
        var debugString = "";
        if (spezialType >= 2) {
            this._blocks[blockID].addError("Material-spezialType '" + spezialType + "' is not supported, can only be 0:singlePass, 1:MultiPass !");
            return;
        }
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
                props = this.parseProperties({ 1: AWDParser.BADDR, 2: AWDParser.BADDR, 3: AWDParser.BADDR, 101: this._propsNrType, 102: this._propsNrType, 103: this._propsNrType, 201: AWDParser.UINT32, 202: AWDParser.UINT32, 301: AWDParser.UINT16, 302: AWDParser.UINT16, 401: AWDParser.UINT8, 402: AWDParser.UINT8, 601: AWDParser.COLOR, 602: AWDParser.COLOR, 701: AWDParser.BOOL, 702: AWDParser.BOOL, 801: AWDParser.MTX4x4 });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXIudHMiXSwibmFtZXMiOlsiQVdEUGFyc2VyIiwiQVdEUGFyc2VyLmNvbnN0cnVjdG9yIiwiQVdEUGFyc2VyLnN1cHBvcnRzVHlwZSIsIkFXRFBhcnNlci5zdXBwb3J0c0RhdGEiLCJBV0RQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5TmFtZSIsIkFXRFBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiQVdEUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiQVdEUGFyc2VyLmRpc3Bvc2UiLCJBV0RQYXJzZXIucGFyc2VOZXh0QmxvY2siLCJBV0RQYXJzZXIucGFyc2VTaGFwZTJEIiwiQVdEUGFyc2VyLnBhcnNlU2hhcGUyREZpbGwiLCJBV0RQYXJzZXIucGFyc2VUaW1lTGluZSIsIkFXRFBhcnNlci5wYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2siLCJBV0RQYXJzZXIucGFyc2VQcmltaXR2ZXMiLCJBV0RQYXJzZXIucGFyc2VDb250YWluZXIiLCJBV0RQYXJzZXIucGFyc2VNZXNoSW5zdGFuY2UiLCJBV0RQYXJzZXIucGFyc2VTa3lib3hJbnN0YW5jZSIsIkFXRFBhcnNlci5wYXJzZUxpZ2h0IiwiQVdEUGFyc2VyLnBhcnNlQ2FtZXJhIiwiQVdEUGFyc2VyLnBhcnNlTGlnaHRQaWNrZXIiLCJBV0RQYXJzZXIucGFyc2VNYXRlcmlhbCIsIkFXRFBhcnNlci5wYXJzZU1hdGVyaWFsX3YxIiwiQVdEUGFyc2VyLnBhcnNlVGV4dHVyZSIsIkFXRFBhcnNlci5wYXJzZUN1YmVUZXh0dXJlIiwiQVdEUGFyc2VyLnBhcnNlU2hhcmVkTWV0aG9kQmxvY2siLCJBV0RQYXJzZXIucGFyc2VTaGFkb3dNZXRob2RCbG9jayIsIkFXRFBhcnNlci5wYXJzZUNvbW1hbmQiLCJBV0RQYXJzZXIucGFyc2VNZXRhRGF0YSIsIkFXRFBhcnNlci5wYXJzZU5hbWVTcGFjZSIsIkFXRFBhcnNlci5wYXJzZVNoYWRvd01ldGhvZExpc3QiLCJBV0RQYXJzZXIucGFyc2VTa2VsZXRvbiIsIkFXRFBhcnNlci5wYXJzZVNrZWxldG9uUG9zZSIsIkFXRFBhcnNlci5wYXJzZVNrZWxldG9uQW5pbWF0aW9uIiwiQVdEUGFyc2VyLnBhcnNlTWVzaFBvc2VBbmltYXRpb24iLCJBV0RQYXJzZXIucGFyc2VWZXJ0ZXhBbmltYXRpb25TZXQiLCJBV0RQYXJzZXIucGFyc2VBbmltYXRvclNldCIsIkFXRFBhcnNlci5wYXJzZVNoYXJlZE1ldGhvZExpc3QiLCJBV0RQYXJzZXIucGFyc2VVc2VyQXR0cmlidXRlcyIsIkFXRFBhcnNlci5wYXJzZVByb3BlcnRpZXMiLCJBV0RQYXJzZXIucGFyc2VBdHRyVmFsdWUiLCJBV0RQYXJzZXIucGFyc2VIZWFkZXIiLCJBV0RQYXJzZXIuZ2V0VVZGb3JWZXJ0ZXhBbmltYXRpb24iLCJBV0RQYXJzZXIucGFyc2VWYXJTdHIiLCJBV0RQYXJzZXIuZ2V0QXNzZXRCeUlEIiwiQVdEUGFyc2VyLmdldERlZmF1bHRBc3NldCIsIkFXRFBhcnNlci5nZXREZWZhdWx0TWF0ZXJpYWwiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdFRleHR1cmUiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdEN1YmVUZXh0dXJlIiwiQVdEUGFyc2VyLnJlYWROdW1iZXIiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXgzRCIsIkFXRFBhcnNlci5wYXJzZU1hdHJpeDMyUmF3RGF0YSIsIkFXRFBhcnNlci5wYXJzZU1hdHJpeDQzUmF3RGF0YSIsIkFXREJsb2NrIiwiQVdEQmxvY2suY29uc3RydWN0b3IiLCJBV0RCbG9jay5kaXNwb3NlIiwiQVdEQmxvY2suYWRkRXJyb3IiLCJBV0RQcm9wZXJ0aWVzIiwiQVdEUHJvcGVydGllcy5jb25zdHJ1Y3RvciIsIkFXRFByb3BlcnRpZXMuc2V0IiwiQVdEUHJvcGVydGllcy5nZXQiLCJCaXRGbGFncyIsIkJpdEZs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Q0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBVUEsRUFBRUEsOENBQThDQTtRQUM3RkEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQzdDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzNDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFT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Y0EsQ0FBQ0EsUUFBUUEsSUFBSUEsR0FBR0EsQ0FBQ0E7b0JBQ3BDQSxLQUFLQSxDQUFDQTtZQUNSQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUNEQSxBQUVBQSxJQUZJQTtZQUVBQSxNQUFNQSxHQUFVQSxDQUFDQSxDQUFDQTtRQUN0QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsSUFBSUEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkRBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxPQUFPQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTt3QkFDNUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsR0FBR0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7d0JBQzFFQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFDVkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBO1lBQ0ZBLENBQUNBO1lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUVqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSx1QkFBdUJBLENBQUNBLENBQUNBO2dCQUUzR0EsRUFBRUEsQ0FBQ0Es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QSxDQUFDQTs0QkFDckJBLEFBQ0FBLHVEQUR1REE7NEJBQ3ZEQSxRQUFRQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTs0QkFDdEJBLFFBQVFBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBOzRCQUN0QkEsUUFBUUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3ZCQSxDQUFDQTtvQkFDRkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBO2dCQUlEQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDeEJBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUMvQ0EsSUFBSUEsT0FBT0EsR0FBU0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTt3QkFDNURBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBO29CQUM1QkEsQ0FBQ0E7Z0JBRUZBLENBQUNBO2dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFMUJBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUMvQ0EsSUFBSUEsT0FBT0EsR0FBU0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTt3QkFDNURBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBO29CQUM1QkEsQ0FBQ0E7Z0JBRUZBLENBQUNBO2dCQUFBQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtv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Q0xBLE1BQU1BLEdBQUdBLElBQUlBLG9CQUFvQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9KQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0tBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUNySEEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsdUNBQXVDQTtnQkFDbk1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDckRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDeERBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFFL0NBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxtQkFBbUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3SkEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHNCQUFzQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNJQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdklBLEtBQUtBLENBQUNBO1lBRVBBO2dCQUNDQSxNQUFNQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtnQkFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdDQUFnQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxLQUFLQSxDQUFDQTtRQUNSQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUczREEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMzQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ25DQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUVw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QUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUU5QkEsSUFBSUEsbUJBQW1CQSxHQUFjQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUV0SEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsSUFBSUEsSUFBSUEsR0FBbURBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3BCQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHVDQUF1Q0EsQ0FBQ0EsQ0FBQ0E7UUFDekVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLEFBQ0FBLDZCQUQ2QkE7WUFDSEEsSUFBSUEsQ0FBQ0EsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDMURBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM5QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakNBLElBQUlBLENBQVFBLENBQUNBO1lBSWJBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUM1Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0VBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hEQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEpBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLFFBQVFBLENBQVNBLEtBQUtBLENBQUNBLEdB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Q0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFFaENBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXBCQSxLQUFLQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXBGQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQWdCQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0JBLGVBQWVBLEdBQUdBLElBQUlBLHVCQUF1QkEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxDQUFDQTtZQU9GQSxDQUFDQTtRQUVGQSxDQUFDQTtRQUNEQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUNyQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2xDQSxLQUFLQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUM1Q0EsS0FBS0EsQ0FBQ0EsT0FB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QSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUNuZEEsSUFBSUEsV0FBV0EsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLFdBQVdBLEdBQVVBLEVBQUVBLENBQUNBO1FBRTVCQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0Esd0JBQXdCQSxHQUFHQSxXQUFXQSxHQUFHQSw2REFBNkRBLENBQUNBLENBQUNBO1lBQ3ZJQSxNQUFNQSxDQUFDQTtRQUNSQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUMxQkEsV0FBV0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO1lBQy9CQSxXQUFXQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVq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QTtZQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEJBLFdBQVdBLEdBQUdBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsV0FBV0EsSUFBSUEsNEJBQTRCQSxHQUFHQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNoRUEsQ0FBQ0E7WUFFREEsSUFBSUEsZUFBZUEsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUFBO1lBRTVFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDOUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHVDQUF1Q0EsR0FBR0EsZUFBZUEsR0FBR0EsNEJBQTRCQSxDQUFDQSxDQUFDQTtZQUMxSEEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLEdBQUdBLENBQUNBLFdBQVdBLEdBQXFCQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUV0REEsQ0FBQ0E7WUFFREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaENBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ2hDQSxHQUFHQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxD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QUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRWhEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUN4QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRTlCQSxBQUNBQSxXQURXQTtZQUNYQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDZkEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxJQUFJQSxHQUFVQSxDQUFDQTtnQkFDZkEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBRWpEQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN2R0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBRVBBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO2dCQUNqREEsSUFBSUEsSUFBY0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtnQkFFdkJBLElBQUlBLENBQUNBLGNBQWNBLENB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RUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RFQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxJQUFJQTtnQkFHUkEsWUFBWUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFvQkEsS0FBS0EsRUFBV0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RFQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLFlBQWFBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM5Q0EsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRWhFQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFFUkEsWUFBWUEsR0FBR0EsSUFBSUEsZ0JBQWdCQSxDQUFvQkEsS0FBS0EsRUFBV0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RFQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLFlBQWFBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM5Q0EsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRTVEQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFDUkEsWUFBWUEsR0FBR0EsSUFB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V0FBV0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JDQSxPQUFPQSxHQUFlQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDN0VBLEtBQUtBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO3dCQUM1QkEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1JBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBOzRCQUMvQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQUE7NEJBQ3RDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFBQTs0QkFDdENBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUFBOzRCQUN0Q0EsS0FBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2pCQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTs0QkFDakJBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNsQkEsQ0FBQ0E7d0JBQ0RBLE9BQU9BLEdBQUdBLElBQUlBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3hDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTt3QkFDL0JBLE9BQU9BLENBQUNBLGVBQWVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO3dCQUMvQkEsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEs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cUJBLEdBQTdCQSxVQUE4QkEsT0FBY0E7UUFHM0NzQyxJQUFJQSxVQUFVQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ2hFQSxJQUFJQSxrQkFBbUNBLENBQUNBO1FBRXhDQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDL2RBLElBQUlBLFFBQWVBLENBQUNBO1FBQ3BCQSxJQUFJQSxhQUF3QkEsQ0FBQ0E7UUFFN0JBLE1BQU1BLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBRXBCQSxLQUFLQSxHQUFHQTtnQkFDUEEsa0JBQWtCQSxHQUFHQSxJQUFJQSx1QkFBdUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4SUEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsR0FBR0E7Z0JBQ1BBLGtCQUFrQkEsR0FBR0EsSUFBSUEsMEJBQTBCQSxFQUFFQSxDQUFDQTtnQkFDdERBLElBQUlBLE1BQU1BLEdBQW1CQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDMUJBLGtCQUFtQkEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FB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QUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29DQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0NBQ3BCQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7NEJBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGVBQWVBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLElBQUlBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUMzRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsWUFBWUEsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0NBQ3hEQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDdkJBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29DQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0NBQ3BCQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7NEJBQUNBLElBQUlBLENBQUNBLENBQUNBO2dDQUNQQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDdkJBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dDQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7NEJBRXBCQSxDQUFDQTt3QkFDRkEsQ0FBQ0E7d0JBQ0RBLEFBQ0FBLHdIQUR3SEE7d0JBQ3hIQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxJ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Q0FBb0JBLEdBQTVCQTtRQUVDcUQsSUFBSUEsT0FBT0EsR0FBaUJBLElBQUlBLEtBQUtBLENBQVNBLEVBQUVBLENBQUNBLENBQUNBO1FBRWxEQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNqQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDakJBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ2xCQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3BEQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUVsQkEsQUFFQUEsMEVBRjBFQTtRQUUxRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2hCQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNoQkEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBRWpCQSxDQUFDQTtRQUVEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUF4cUdhckQsOEJBQW9CQSxHQUFVQSxNQUFNQSxDQUFDQTtJQUNyQ0Esc0JBQVlBLEdBQVVBLENBQUNBLENBQUNBO0lBQ3hCQSxpQkFBT0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDbkJBLGNBQUlBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2hCQSxjQUFJQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNoQkEsZUFBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDakJBLGVBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxlQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsZ0JBQU1BLEdBQVVBLENBQUNBLENBQUNBO0lBQ2xCQSxnQkFBTUEsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDbEJBLGlCQUFPQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNuQkEsaUJBQU9BLEdBQVVBLENBQUNBLENBQUNBO0lBQ25CQSxjQUFJQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNqQkEsZUFBS0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDbEJBLGVBQUtBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ2xCQSxtQkFBU0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDdEJBLHNCQUFZQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUN6QkEsbUJBQVNBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ3RCQSxtQkFBU0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDdEJBLG1CQUFTQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUN0QkEsZ0JBQU1BLEdBQVVBLEVBQUVBLENBQUNBO0lBQ25CQSxnQkFBTUEsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDbkJBLGdCQUFNQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNuQkEsZ0JBQU1BLEdBQVVBLEVBQUVBLENBQUNBO0lBbXBHbENBLGdCQUFDQTtBQUFEQSxDQXJzR0EsQUFxc0dDQSxFQXJzR3VCLFVBQVUsRUFxc0dqQztBQUlELElBQU0sUUFBUTtJQVlic0QsU0FaS0EsUUFBUUE7SUFjYkMsQ0FBQ0E7SUFFTUQsMEJBQU9BLEdBQWRBO1FBR0NFLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2ZBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2xCQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMxQkEsSUFBSUEsQ0FBQ0EscUJBQXFCQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUVuQ0EsQ0FBQ0E7SUFFTUYsMkJBQVFBLEdBQWZBLFVBQWdCQSxRQUFlQTtRQUU5QkcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO1FBRTFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFDRkgsZUFBQ0E7QUFBREEsQ0FqQ0EsQUFpQ0NBLElBQUE7QUFFRCxJQUFNLGFBQWE7SUFBbkJJLFNBQU1BLGFBQWFBO0lBZW5CQyxDQUFDQTtJQWJPRCwyQkFBR0EsR0FBVkEsVUFBV0EsR0FBVUEsRUFBRUEsS0FBU0E7UUFFL0JFLElBQUlBLENBQUVBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLENBQUVBLEdBQUdBLEtBQUtBLENBQUNBO0lBQ2hDQSxDQUFDQTtJQUVNRiwyQkFBR0EsR0FBVkEsVUFBV0EsR0FBVUEsRUFBRUEsUUFBWUE7UUFFbENHLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFDakJBLENBQUNBO0lBQ0ZBLENBQUNBO0lBQ0ZILG9CQUFDQTtBQUFEQSxDQWZBLEFBZUNBLElBQUE7QUFFRCxBQUdBOztHQURHO0lBQ0csUUFBUTtJQUFkSSxTQUFNQSxRQUFRQTtJQXVCZEMsQ0FBQ0E7SUFKY0QsYUFBSUEsR0FBbEJBLFVBQW1CQSxLQUFZQSxFQUFFQSxRQUFlQTtRQUUvQ0UsTUFBTUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBcEJhRixjQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsY0FBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDakJBLGNBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxjQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsY0FBS0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDbEJBLGNBQUtBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ2xCQSxjQUFLQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNsQkEsY0FBS0EsR0FBVUEsR0FBR0EsQ0FBQ0E7SUFDbkJBLGNBQUtBLEdBQVVBLEdBQUdBLENBQUNBO0lBQ25CQSxlQUFNQSxHQUFVQSxHQUFHQSxDQUFDQTtJQUNwQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLElBQUlBLENBQUNBO0lBQ3JCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLEtBQUtBLENBQUNBO0lBQ3RCQSxlQUFNQSxHQUFVQSxLQUFLQSxDQUFDQTtJQU1yQ0EsZUFBQ0E7QUFBREEsQ0F2QkEsQUF1QkNBLElBQUE7QUFoRkQsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6IkFXRFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQml0bWFwRGF0YVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9iYXNlL0JpdG1hcERhdGFcIik7XHJcbmltcG9ydCBCbGVuZE1vZGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvYmFzZS9CbGVuZE1vZGVcIik7XHJcbmltcG9ydCBDb2xvclRyYW5zZm9ybVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9Db2xvclRyYW5zZm9ybVwiKTtcclxuaW1wb3J0IE1hdHJpeDNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9NYXRyaXgzRFwiKTtcclxuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcclxuaW1wb3J0IFVSTExvYWRlckRhdGFGb3JtYXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyRGF0YUZvcm1hdFwiKTtcclxuaW1wb3J0IFVSTFJlcXVlc3RcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTFJlcXVlc3RcIik7XHJcbmltcG9ydCBBc3NldFR5cGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldFR5cGVcIik7XHJcbmltcG9ydCBJQXNzZXRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0lBc3NldFwiKTtcclxuaW1wb3J0IFBhcnNlckJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJCYXNlXCIpO1xyXG5pbXBvcnQgUGFyc2VyVXRpbHNcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJVdGlsc1wiKTtcclxuaW1wb3J0IFJlc291cmNlRGVwZW5kZW5jeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUmVzb3VyY2VEZXBlbmRlbmN5XCIpO1xyXG5pbXBvcnQgUHJvamVjdGlvbkJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL1Byb2plY3Rpb25CYXNlXCIpO1xyXG5pbXBvcnQgUGVyc3BlY3RpdmVQcm9qZWN0aW9uXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL1BlcnNwZWN0aXZlUHJvamVjdGlvblwiKTtcclxuaW1wb3J0IE9ydGhvZ3JhcGhpY1Byb2plY3Rpb25cdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvT3J0aG9ncmFwaGljUHJvamVjdGlvblwiKTtcclxuaW1wb3J0IE9ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb25cdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wcm9qZWN0aW9ucy9PcnRob2dyYXBoaWNPZmZDZW50ZXJQcm9qZWN0aW9uXCIpO1xyXG5pbXBvcnQgQml0bWFwQ3ViZVRleHR1cmVcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9CaXRtYXBDdWJlVGV4dHVyZVwiKTtcclxuaW1wb3J0IEJpdG1hcFRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0JpdG1hcFRleHR1cmVcIik7XHJcbmltcG9ydCBDdWJlVGV4dHVyZUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0N1YmVUZXh0dXJlQmFzZVwiKTtcclxuaW1wb3J0IEltYWdlQ3ViZVRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0ltYWdlQ3ViZVRleHR1cmVcIik7XHJcbmltcG9ydCBJbWFnZVRleHR1cmVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvSW1hZ2VUZXh0dXJlXCIpO1xyXG5pbXBvcnQgVGV4dHVyZTJEQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZTJEQmFzZVwiKTtcclxuaW1wb3J0IFRleHR1cmVQcm94eUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL1RleHR1cmVQcm94eUJhc2VcIik7XHJcbmltcG9ydCBCeXRlQXJyYXlcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvQnl0ZUFycmF5XCIpO1xyXG5cclxuaW1wb3J0IERpc3BsYXlPYmplY3RDb250YWluZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9EaXNwbGF5T2JqZWN0Q29udGFpbmVyXCIpO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9EaXNwbGF5T2JqZWN0XCIpO1xyXG5pbXBvcnQgR2VvbWV0cnlcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0dlb21ldHJ5XCIpO1xyXG5pbXBvcnQgTGlnaHRCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvTGlnaHRCYXNlXCIpO1xyXG5pbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcclxuaW1wb3J0IERpcmVjdGlvbmFsTGlnaHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0RpcmVjdGlvbmFsTGlnaHRcIik7XHJcbmltcG9ydCBQb2ludExpZ2h0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1BvaW50TGlnaHRcIik7XHJcbmltcG9ydCBDYW1lcmFcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9DYW1lcmFcIik7XHJcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xyXG5pbXBvcnQgU2t5Ym94XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvU2t5Ym94XCIpO1xyXG5pbXBvcnQgTWF0ZXJpYWxCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9NYXRlcmlhbEJhc2VcIik7XHJcbmltcG9ydCBMaWdodFBpY2tlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9saWdodHBpY2tlcnMvTGlnaHRQaWNrZXJCYXNlXCIpO1xyXG5pbXBvcnQgU3RhdGljTGlnaHRQaWNrZXJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvbGlnaHRwaWNrZXJzL1N0YXRpY0xpZ2h0UGlja2VyXCIpO1xyXG5pbXBvcnQgQ3ViZU1hcFNoYWRvd01hcHBlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL0N1YmVNYXBTaGFkb3dNYXBwZXJcIik7XHJcbmltcG9ydCBEaXJlY3Rpb25hbFNoYWRvd01hcHBlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvc2hhZG93bWFwcGVycy9EaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiKTtcclxuaW1wb3J0IFNoYWRvd01hcHBlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL1NoYWRvd01hcHBlckJhc2VcIik7XHJcbmltcG9ydCBQcmVmYWJCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJlZmFiQmFzZVwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDYXBzdWxlUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlQ29uZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ29uZVByZWZhYlwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUN1YmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN1YmVQcmVmYWJcIik7XHJcbmltcG9ydCBQcmltaXRpdmVDeWxpbmRlclByZWZhYlx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlUGxhbmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVBsYW5lUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlU3BoZXJlUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlU3BoZXJlUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlVG9ydXNQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVRvcnVzUHJlZmFiXCIpO1xyXG5cclxuaW1wb3J0IEFuaW1hdGlvblNldEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRpb25TZXRCYXNlXCIpO1xyXG5pbXBvcnQgQW5pbWF0b3JCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRvckJhc2VcIik7XHJcbmltcG9ydCBWZXJ0ZXhBbmltYXRpb25TZXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvVmVydGV4QW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgVmVydGV4QW5pbWF0b3JcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9WZXJ0ZXhBbmltYXRvclwiKTtcclxuaW1wb3J0IFNrZWxldG9uQW5pbWF0aW9uU2V0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25BbmltYXRvclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0b3JcIik7XHJcbmltcG9ydCBKb2ludFBvc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvSm9pbnRQb3NlXCIpO1xyXG5pbXBvcnQgU2tlbGV0b25cdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblwiKTtcclxuaW1wb3J0IFNrZWxldG9uUG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblBvc2VcIik7XHJcbmltcG9ydCBTa2VsZXRvbkpvaW50XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvbkpvaW50XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25DbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1NrZWxldG9uQ2xpcE5vZGVcIik7XHJcbmltcG9ydCBWZXJ0ZXhDbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1ZlcnRleENsaXBOb2RlXCIpO1xyXG5pbXBvcnQgRGVmYXVsdE1hdGVyaWFsTWFuYWdlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9tYW5hZ2Vycy9EZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXCIpO1xyXG5cclxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsTW9kZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxNb2RlXCIpO1xyXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxcIik7XHJcbmltcG9ydCBBbWJpZW50RW52TWFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0FtYmllbnRFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlRGVwdGhNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZURlcHRoTWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZUNlbE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VDZWxNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlR3JhZGllbnRNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VHcmFkaWVudE1ldGhvZFwiKTtcclxuaW1wb3J0IERpZmZ1c2VMaWdodE1hcE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUxpZ2h0TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZVdyYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZVdyYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RBbHBoYU1hc2tNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEFscGhhTWFza01ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdENvbG9yTWF0cml4TWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RDb2xvck1hdHJpeE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdENvbG9yVHJhbnNmb3JtTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RFbnZNYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0RW52TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0Rm9nTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Rm9nTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEZyZXNuZWxFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RMaWdodE1hcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RMaWdodE1hcE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdE1ldGhvZEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RNZXRob2RCYXNlXCIpO1xyXG5pbXBvcnQgRWZmZWN0UmltTGlnaHRNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0UmltTGlnaHRNZXRob2RcIik7XHJcbmltcG9ydCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2RcIik7XHJcbmltcG9ydCBTaGFkb3dEaXRoZXJlZE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dEaXRoZXJlZE1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0ZpbHRlcmVkTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0ZpbHRlcmVkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93TWV0aG9kQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd01ldGhvZEJhc2VcIik7XHJcbmltcG9ydCBTcGVjdWxhckZyZXNuZWxNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyRnJlc25lbE1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0hhcmRNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dIYXJkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyQW5pc290cm9waWNNZXRob2RcIik7XHJcbmltcG9ydCBTcGVjdWxhckNlbE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhckNlbE1ldGhvZFwiKTtcclxuaW1wb3J0IFNwZWN1bGFyUGhvbmdNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJQaG9uZ01ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd05lYXJNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dOZWFyTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93U29mdE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd1NvZnRNZXRob2RcIik7XHJcblxyXG5pbXBvcnQgVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9mYWN0b3JpZXMvVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IEFTMlNjZW5lR3JhcGhGYWN0b3J5ID0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL2ZhY3Rvcmllcy9BUzJTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IE1vdmllQ2xpcCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9kaXNwbGF5L01vdmllQ2xpcFwiKTtcclxuaW1wb3J0IFRpbWVsaW5lS2V5RnJhbWUgPSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvVGltZWxpbmVLZXlGcmFtZVwiKTtcclxuaW1wb3J0IEFkZENoaWxkQ29tbWFuZCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC90aW1lbGluZS9jb21tYW5kcy9BZGRDaGlsZENvbW1hbmRcIik7XHJcbmltcG9ydCBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQgPSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvY29tbWFuZHMvVXBkYXRlUHJvcGVydHlDb21tYW5kXCIpO1xyXG5pbXBvcnQgUmVtb3ZlQ2hpbGRDb21tYW5kID0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL3RpbWVsaW5lL2NvbW1hbmRzL1JlbW92ZUNoaWxkQ29tbWFuZFwiKTtcclxuXHJcbi8qKlxyXG4gKiBBV0RQYXJzZXIgcHJvdmlkZXMgYSBwYXJzZXIgZm9yIHRoZSBBV0QgZGF0YSB0eXBlLlxyXG4gKi9cclxuY2xhc3MgQVdEUGFyc2VyIGV4dGVuZHMgUGFyc2VyQmFzZVxyXG57XHJcblx0Ly9zZXQgdG8gXCJ0cnVlXCIgdG8gaGF2ZSBzb21lIGNvbnNvbGUubG9ncyBpbiB0aGUgQ29uc29sZVxyXG5cdHByaXZhdGUgX2RlYnVnOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9ieXRlRGF0YTpCeXRlQXJyYXk7XHJcblx0cHJpdmF0ZSBfc3RhcnRlZFBhcnNpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2N1cl9ibG9ja19pZDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfYmxvY2tzOkFycmF5PEFXREJsb2NrPjtcclxuXHRwcml2YXRlIF9uZXdCbG9ja0J5dGVzOkJ5dGVBcnJheTtcclxuXHRwcml2YXRlIF92ZXJzaW9uOkFycmF5PG51bWJlcj47XHJcblx0cHJpdmF0ZSBfY29tcHJlc3Npb246bnVtYmVyO1xyXG5cdHByaXZhdGUgX2FjY3VyYWN5T25CbG9ja3M6Ym9vbGVhbjtcclxuXHRwcml2YXRlIF9hY2N1cmFjeU1hdHJpeDpib29sZWFuO1xyXG5cdHByaXZhdGUgX2FjY3VyYWN5R2VvOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfYWNjdXJhY3lQcm9wczpib29sZWFuO1xyXG5cdHByaXZhdGUgX21hdHJpeE5yVHlwZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfZ2VvTnJUeXBlOm51bWJlcjtcclxuXHRwcml2YXRlIF9wcm9wc05yVHlwZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfc3RyZWFtaW5nOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfdGV4dHVyZV91c2VyczpPYmplY3QgPSB7fTtcclxuXHRwcml2YXRlIF9wYXJzZWRfaGVhZGVyOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9ib2R5OkJ5dGVBcnJheTtcclxuXHRwcml2YXRlIF9kZWZhdWx0VGV4dHVyZTpCaXRtYXBUZXh0dXJlOyAgICAgLy8gSFRNTCBJTUFHRSBURVhUVVJFID4/ICFcclxuXHRwcml2YXRlIF9jdWJlVGV4dHVyZXM6QXJyYXk8YW55PjtcclxuXHRwcml2YXRlIF9kZWZhdWx0Qml0bWFwTWF0ZXJpYWw6TWV0aG9kTWF0ZXJpYWw7XHJcblx0cHJpdmF0ZSBfZGVmYXVsdEN1YmVUZXh0dXJlOkJpdG1hcEN1YmVUZXh0dXJlO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIENPTVBSRVNTSU9OTU9ERV9MWk1BOnN0cmluZyA9IFwibHptYVwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgVU5DT01QUkVTU0VEOm51bWJlciA9IDA7XHJcblx0cHVibGljIHN0YXRpYyBERUZMQVRFOm51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBMWk1BOm51bWJlciA9IDI7XHJcblx0cHVibGljIHN0YXRpYyBJTlQ4Om51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBJTlQxNjpudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBzdGF0aWMgSU5UMzI6bnVtYmVyID0gMztcclxuXHRwdWJsaWMgc3RhdGljIFVJTlQ4Om51bWJlciA9IDQ7XHJcblx0cHVibGljIHN0YXRpYyBVSU5UMTY6bnVtYmVyID0gNTtcclxuXHRwdWJsaWMgc3RhdGljIFVJTlQzMjpudW1iZXIgPSA2O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQzMjpudW1iZXIgPSA3O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQ2NDpudW1iZXIgPSA4O1xyXG5cdHB1YmxpYyBzdGF0aWMgQk9PTDpudW1iZXIgPSAyMTtcclxuXHRwdWJsaWMgc3RhdGljIENPTE9SOm51bWJlciA9IDIyO1xyXG5cdHB1YmxpYyBzdGF0aWMgQkFERFI6bnVtYmVyID0gMjM7XHJcblx0cHVibGljIHN0YXRpYyBBV0RTVFJJTkc6bnVtYmVyID0gMzE7XHJcblx0cHVibGljIHN0YXRpYyBBV0RCWVRFQVJSQVk6bnVtYmVyID0gMzI7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1IyeDE6bnVtYmVyID0gNDE7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1IzeDE6bnVtYmVyID0gNDI7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1I0eDE6bnVtYmVyID0gNDM7XHJcblx0cHVibGljIHN0YXRpYyBNVFgzeDI6bnVtYmVyID0gNDQ7XHJcblx0cHVibGljIHN0YXRpYyBNVFgzeDM6bnVtYmVyID0gNDU7XHJcblx0cHVibGljIHN0YXRpYyBNVFg0eDM6bnVtYmVyID0gNDY7XHJcblx0cHVibGljIHN0YXRpYyBNVFg0eDQ6bnVtYmVyID0gNDc7XHJcblxyXG5cdHByaXZhdGUgYmxlbmRNb2RlRGljOkFycmF5PHN0cmluZz47XHJcblx0cHJpdmF0ZSBfZGVwdGhTaXplRGljOkFycmF5PG51bWJlcj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSBuZXcgQVdEUGFyc2VyIG9iamVjdC5cclxuXHQgKiBAcGFyYW0gdXJpIFRoZSB1cmwgb3IgaWQgb2YgdGhlIGRhdGEgb3IgZmlsZSB0byBiZSBwYXJzZWQuXHJcblx0ICogQHBhcmFtIGV4dHJhIFRoZSBob2xkZXIgZm9yIGV4dHJhIGNvbnRleHR1YWwgZGF0YSB0aGF0IHRoZSBwYXJzZXIgbWlnaHQgbmVlZC5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5BUlJBWV9CVUZGRVIpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2NrcyA9IG5ldyBBcnJheTxBV0RCbG9jaz4oKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1swXSA9IG5ldyBBV0RCbG9jaygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzWzBdLmRhdGEgPSBudWxsOyAvLyBaZXJvIGFkZHJlc3MgbWVhbnMgbnVsbCBpbiBBV0RcclxuXHJcbiAgICAgICAgdGhpcy5ibGVuZE1vZGVEaWMgPSBuZXcgQXJyYXk8c3RyaW5nPigpOyAvLyB1c2VkIHRvIHRyYW5zbGF0ZSBpbnRzIHRvIGJsZW5kTW9kZS1zdHJpbmdzXHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5OT1JNQUwpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuQUREKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkFMUEhBKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkRBUktFTik7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5ESUZGRVJFTkNFKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkVSQVNFKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkhBUkRMSUdIVCk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5JTlZFUlQpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTEFZRVIpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTElHSFRFTik7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5NVUxUSVBMWSk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5OT1JNQUwpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuT1ZFUkxBWSk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5TQ1JFRU4pO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuU0hBREVSKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk9WRVJMQVkpO1xyXG5cclxuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYyA9IG5ldyBBcnJheTxudW1iZXI+KCk7IC8vIHVzZWQgdG8gdHJhbnNsYXRlIGludHMgdG8gZGVwdGhTaXplLXZhbHVlc1xyXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMjU2KTtcclxuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDUxMik7XHJcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMucHVzaCgyMDQ4KTtcclxuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDEwMjQpO1xyXG5cdFx0dGhpcy5fdmVyc2lvbiA9IEFycmF5PG51bWJlcj4oKTsgLy8gd2lsbCBjb250YWluIDIgaW50IChtYWpvci12ZXJzaW9uLCBtaW5vci12ZXJzaW9uKSBmb3IgYXdkLXZlcnNpb24tY2hlY2tcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCBhIGdpdmVuIGZpbGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBieSB0aGUgcGFyc2VyLlxyXG5cdCAqIEBwYXJhbSBleHRlbnNpb24gVGhlIGZpbGUgZXh0ZW5zaW9uIG9mIGEgcG90ZW50aWFsIGZpbGUgdG8gYmUgcGFyc2VkLlxyXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGZpbGUgdHlwZSBpcyBzdXBwb3J0ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c1R5cGUoZXh0ZW5zaW9uOnN0cmluZyk6Ym9vbGVhblxyXG5cdHtcclxuXHRcdGV4dGVuc2lvbiA9IGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0cmV0dXJuIGV4dGVuc2lvbiA9PSBcImF3ZFwiO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciBhIGRhdGEgYmxvY2sgY2FuIGJlIHBhcnNlZCBieSB0aGUgcGFyc2VyLlxyXG5cdCAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGJsb2NrIHRvIHBvdGVudGlhbGx5IGJlIHBhcnNlZC5cclxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBkYXRhIGlzIHN1cHBvcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzRGF0YShkYXRhOmFueSk6Ym9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiAoUGFyc2VyVXRpbHMudG9TdHJpbmcoZGF0YSwgMykgPT0gJ0FXRCcpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGluaGVyaXREb2NcclxuXHQgKi9cclxuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KVxyXG5cdHtcclxuXHRcdC8vIHRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBEZXBlbmRlbmN5IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxyXG5cdFx0Ly8gdGhlIEFzc2V0cyB3YWl0aW5nIGZvciB0aGlzIEJpdG1hcCwgY2FuIGJlIFRleHR1cmUgb3IgQ3ViZVRleHR1cmUuXHJcblx0XHQvLyBpZiB0aGUgQml0bWFwIGlzIGF3YWl0ZWQgYnkgYSBDdWJlVGV4dHVyZSwgd2UgbmVlZCB0byBjaGVjayBpZiBpdHMgdGhlIGxhc3QgQml0bWFwIG9mIHRoZSBDdWJlVGV4dHVyZSxcclxuXHRcdC8vIHNvIHdlIGtub3cgaWYgd2UgaGF2ZSB0byBmaW5hbGl6ZSB0aGUgQXNzZXQgKEN1YmVUZXh0dXJlKSBvciBub3QuXHJcblx0XHRpZiAocmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHR2YXIgaXNDdWJlVGV4dHVyZUFycmF5OkFycmF5PHN0cmluZz4gPSByZXNvdXJjZURlcGVuZGVuY3kuaWQuc3BsaXQoXCIjXCIpO1xyXG5cdFx0XHR2YXIgcmVzc291cmNlSUQ6c3RyaW5nID0gaXNDdWJlVGV4dHVyZUFycmF5WzBdO1xyXG5cdFx0XHR2YXIgYXNzZXQ6VGV4dHVyZVByb3h5QmFzZTtcclxuXHRcdFx0dmFyIHRoaXNCaXRtYXBUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcblx0XHRcdHZhciBibG9jazpBV0RCbG9jaztcclxuXHJcblx0XHRcdGlmIChpc0N1YmVUZXh0dXJlQXJyYXkubGVuZ3RoID09IDEpIC8vIE5vdCBhIGN1YmUgdGV4dHVyZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YXNzZXQgPSA8VGV4dHVyZTJEQmFzZT4gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcclxuXHRcdFx0XHRpZiAoYXNzZXQpIHtcclxuXHRcdFx0XHRcdHZhciBtYXQ6TWV0aG9kTWF0ZXJpYWw7XHJcblx0XHRcdFx0XHR2YXIgdXNlcnM6QXJyYXk8c3RyaW5nPjtcclxuXHJcblx0XHRcdFx0XHRibG9jayA9IHRoaXMuX2Jsb2Nrc1sgcmVzb3VyY2VEZXBlbmRlbmN5LmlkIF07XHJcblx0XHRcdFx0XHRibG9jay5kYXRhID0gYXNzZXQ7IC8vIFN0b3JlIGZpbmlzaGVkIGFzc2V0XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVzZXQgbmFtZSBvZiB0ZXh0dXJlIHRvIHRoZSBvbmUgZGVmaW5lZCBpbiB0aGUgQVdEIGZpbGUsXHJcblx0XHRcdFx0XHQvLyBhcyBvcHBvc2VkIHRvIHdoYXRldmVyIHRoZSBpbWFnZSBwYXJzZXIgY2FtZSB1cCB3aXRoLlxyXG5cdFx0XHRcdFx0YXNzZXQucmVzZXRBc3NldFBhdGgoYmxvY2submFtZSwgbnVsbCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRibG9jay5uYW1lID0gYXNzZXQubmFtZTtcclxuXHRcdFx0XHRcdC8vIEZpbmFsaXplIHRleHR1cmUgYXNzZXQgdG8gZGlzcGF0Y2ggdGV4dHVyZSBldmVudCwgd2hpY2ggd2FzXHJcblx0XHRcdFx0XHQvLyBwcmV2aW91c2x5IHN1cHByZXNzZWQgd2hpbGUgdGhlIGRlcGVuZGVuY3kgd2FzIGxvYWRlZC5cclxuXHRcdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0KTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbG9hZGVkIEJpdG1hcCBmb3IgdGV4dHVyZVwiKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgdGV4dHVyZTogTmFtZSA9IFwiICsgYmxvY2submFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaXNDdWJlVGV4dHVyZUFycmF5Lmxlbmd0aCA+IDEpIC8vIEN1YmUgVGV4dHVyZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpc0JpdG1hcFRleHR1cmUgPSA8Qml0bWFwVGV4dHVyZT4gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcclxuXHJcblx0XHRcdFx0dmFyIHR4OkltYWdlVGV4dHVyZSA9IDxJbWFnZVRleHR1cmU+IHRoaXNCaXRtYXBUZXh0dXJlO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9jdWJlVGV4dHVyZXNbIGlzQ3ViZVRleHR1cmVBcnJheVsxXSBdID0gdHguaHRtbEltYWdlRWxlbWVudDsgLy8gP1xyXG5cdFx0XHRcdHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLnB1c2goMSk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbG9hZGVkIEJpdG1hcCBcIiArIHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLmxlbmd0aCArIFwiIC8gNiBmb3IgQ3ViZXRleHR1cmVcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLl90ZXh0dXJlX3VzZXJzW3Jlc3NvdXJjZUlEXS5sZW5ndGggPT0gdGhpcy5fY3ViZVRleHR1cmVzLmxlbmd0aCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBwb3NYOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1swXTtcclxuXHRcdFx0XHRcdHZhciBuZWdYOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1sxXTtcclxuXHRcdFx0XHRcdHZhciBwb3NZOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1syXTtcclxuXHRcdFx0XHRcdHZhciBuZWdZOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1szXTtcclxuXHRcdFx0XHRcdHZhciBwb3NaOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1s0XTtcclxuXHRcdFx0XHRcdHZhciBuZWdaOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1s1XTtcclxuXHJcblx0XHRcdFx0XHRhc3NldCA9IDxUZXh0dXJlUHJveHlCYXNlPiBuZXcgSW1hZ2VDdWJlVGV4dHVyZShwb3NYLCBuZWdYLCBwb3NZLCBuZWdZLCBwb3NaLCBuZWdaKTtcclxuXHRcdFx0XHRcdGJsb2NrID0gdGhpcy5fYmxvY2tzW3Jlc3NvdXJjZUlEXTtcclxuXHRcdFx0XHRcdGJsb2NrLmRhdGEgPSBhc3NldDsgLy8gU3RvcmUgZmluaXNoZWQgYXNzZXRcclxuXHJcblx0XHRcdFx0XHQvLyBSZXNldCBuYW1lIG9mIHRleHR1cmUgdG8gdGhlIG9uZSBkZWZpbmVkIGluIHRoZSBBV0QgZmlsZSxcclxuXHRcdFx0XHRcdC8vIGFzIG9wcG9zZWQgdG8gd2hhdGV2ZXIgdGhlIGltYWdlIHBhcnNlciBjYW1lIHVwIHdpdGguXHJcblx0XHRcdFx0XHRhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcclxuXHRcdFx0XHRcdGJsb2NrLm5hbWUgPSBhc3NldC5uYW1lO1xyXG5cdFx0XHRcdFx0Ly8gRmluYWxpemUgdGV4dHVyZSBhc3NldCB0byBkaXNwYXRjaCB0ZXh0dXJlIGV2ZW50LCB3aGljaCB3YXNcclxuXHRcdFx0XHRcdC8vIHByZXZpb3VzbHkgc3VwcHJlc3NlZCB3aGlsZSB0aGUgZGVwZW5kZW5jeSB3YXMgbG9hZGVkLlxyXG5cdFx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIEN1YmVUZXh0dXJlOiBOYW1lID0gXCIgKyBibG9jay5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAaW5oZXJpdERvY1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KVxyXG5cdHtcclxuXHRcdC8vbm90IHVzZWQgLSBpZiBhIGRlcGVuZGN5IGZhaWxzLCB0aGUgYXdhaXRpbmcgVGV4dHVyZSBvciBDdWJlVGV4dHVyZSB3aWxsIG5ldmVyIGJlIGZpbmFsaXplZCwgYW5kIHRoZSBkZWZhdWx0LWJpdG1hcHMgd2lsbCBiZSB1c2VkLlxyXG5cdFx0Ly8gdGhpcyBtZWFucywgdGhhdCBpZiBvbmUgQml0bWFwIG9mIGEgQ3ViZVRleHR1cmUgZmFpbHMsIHRoZSBDdWJlVGV4dHVyZSB3aWxsIGhhdmUgdGhlIERlZmF1bHRUZXh0dXJlIGFwcGxpZWQgZm9yIGFsbCBzaXggQml0bWFwcy5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc29sdmUgYSBkZXBlbmRlbmN5IG5hbWVcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSByZXNvdXJjZURlcGVuZGVuY3kgVGhlIGRlcGVuZGVuY3kgdG8gYmUgcmVzb2x2ZWQuXHJcblx0ICovXHJcblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3lOYW1lKHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3ksIGFzc2V0OklBc3NldCk6c3RyaW5nXHJcblx0e1xyXG5cdFx0dmFyIG9sZE5hbWU6c3RyaW5nID0gYXNzZXQubmFtZTtcclxuXHJcblx0XHRpZiAoYXNzZXQpIHtcclxuXHRcdFx0dmFyIGJsb2NrOkFXREJsb2NrID0gdGhpcy5fYmxvY2tzW3BhcnNlSW50KHJlc291cmNlRGVwZW5kZW5jeS5pZCldO1xyXG5cdFx0XHQvLyBSZXNldCBuYW1lIG9mIHRleHR1cmUgdG8gdGhlIG9uZSBkZWZpbmVkIGluIHRoZSBBV0QgZmlsZSxcclxuXHRcdFx0Ly8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cclxuXHRcdFx0YXNzZXQucmVzZXRBc3NldFBhdGgoYmxvY2submFtZSwgbnVsbCwgdHJ1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG5ld05hbWU6c3RyaW5nID0gYXNzZXQubmFtZTtcclxuXHJcblx0XHRhc3NldC5uYW1lID0gb2xkTmFtZTtcclxuXHJcblx0XHRyZXR1cm4gbmV3TmFtZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAaW5oZXJpdERvY1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBfcFByb2NlZWRQYXJzaW5nKCk6Ym9vbGVhblxyXG5cdHtcclxuXHJcblx0XHRpZiAoIXRoaXMuX3N0YXJ0ZWRQYXJzaW5nKSB7XHJcblx0XHRcdHRoaXMuX2J5dGVEYXRhID0gdGhpcy5fcEdldEJ5dGVEYXRhKCk7Ly9nZXRCeXRlRGF0YSgpO1xyXG5cdFx0XHR0aGlzLl9zdGFydGVkUGFyc2luZyA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9wYXJzZWRfaGVhZGVyKSB7XHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly90aGlzLl9ieXRlRGF0YS5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjtcclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly8gUGFyc2UgaGVhZGVyIGFuZCBkZWNvbXByZXNzIGJvZHkgaWYgbmVlZGVkXHJcblx0XHRcdHRoaXMucGFyc2VIZWFkZXIoKTtcclxuXHJcblx0XHRcdHN3aXRjaCAodGhpcy5fY29tcHJlc3Npb24pIHtcclxuXHJcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuREVGTEFURTpcclxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5MWk1BOlxyXG5cdFx0XHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCcpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLlVOQ09NUFJFU1NFRDpcclxuXHRcdFx0XHRcdHRoaXMuX2JvZHkgPSB0aGlzLl9ieXRlRGF0YTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0XHQvLyBDb21wcmVzc2VkIEFXRCBGb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcblx0XHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0XHRcdC8qXHJcblx0XHRcdFx0IGNhc2UgQVdEUGFyc2VyLkRFRkxBVEU6XHJcblxyXG5cdFx0XHRcdCB0aGlzLl9ib2R5ID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cdFx0XHRcdCB0aGlzLl9ieXRlRGF0YS5yZWFkQnl0ZXModGhpcy5fYm9keSwgMCwgdGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSk7XHJcblx0XHRcdFx0IHRoaXMuX2JvZHkudW5jb21wcmVzcygpO1xyXG5cclxuXHRcdFx0XHQgYnJlYWs7XHJcblx0XHRcdFx0IGNhc2UgQVdEUGFyc2VyLkxaTUE6XHJcblxyXG5cdFx0XHRcdCB0aGlzLl9ib2R5ID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cdFx0XHRcdCB0aGlzLl9ieXRlRGF0YS5yZWFkQnl0ZXModGhpcy5fYm9keSwgMCwgdGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSk7XHJcblx0XHRcdFx0IHRoaXMuX2JvZHkudW5jb21wcmVzcyhDT01QUkVTU0lPTk1PREVfTFpNQSk7XHJcblxyXG5cdFx0XHRcdCBicmVhaztcclxuXHRcdFx0XHQgLy8qL1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fcGFyc2VkX2hlYWRlciA9IHRydWU7XHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly90aGlzLl9ib2R5LmVuZGlhbiA9IEVuZGlhbi5MSVRUTEVfRU5ESUFOOy8vIFNob3VsZCBiZSBkZWZhdWx0XHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5fYm9keSkge1xyXG5cclxuXHRcdFx0d2hpbGUgKHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSA+IDAgJiYgIXRoaXMucGFyc2luZ1BhdXNlZCkgLy8mJiB0aGlzLl9wSGFzVGltZSgpIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMucGFyc2VOZXh0QmxvY2soKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBSZXR1cm4gY29tcGxldGUgc3RhdHVzXHJcblx0XHRcdGlmICh0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCkgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuZGlzcG9zZSgpO1xyXG5cdFx0XHRcdHJldHVybiAgUGFyc2VyQmFzZS5QQVJTSU5HX0RPTkU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuICBQYXJzZXJCYXNlLk1PUkVfVE9fUEFSU0U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2NvbXByZXNzaW9uKSB7XHJcblxyXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkRFRkxBVEU6XHJcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuTFpNQTpcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIoISkgQVdEUGFyc2VyIEVycm9yOiBDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkICghKVwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gRXJyb3IgLSBtb3N0IGxpa2VseSBfYm9keSBub3Qgc2V0IGJlY2F1c2Ugd2UgZG8gbm90IHN1cHBvcnQgY29tcHJlc3Npb24uXHJcblx0XHRcdHJldHVybiAgUGFyc2VyQmFzZS5QQVJTSU5HX0RPTkU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBfcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0Om51bWJlcilcclxuXHR7XHJcblx0XHRzdXBlci5fcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0KTtcclxuXHJcblx0XHQvL2NyZWF0ZSBhIGNvbnRlbnQgb2JqZWN0IGZvciBMb2FkZXJzXHJcblx0XHR0aGlzLl9wQ29udGVudCA9IG5ldyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGRpc3Bvc2UoKTp2b2lkXHJcblx0e1xyXG5cclxuXHRcdGZvciAodmFyIGMgaW4gdGhpcy5fYmxvY2tzKSB7XHJcblxyXG5cdFx0XHR2YXIgYjpBV0RCbG9jayA9IDxBV0RCbG9jaz4gdGhpcy5fYmxvY2tzWyBjIF07XHJcblx0XHRcdGIuZGlzcG9zZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlTmV4dEJsb2NrKCk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBibG9jazpBV0RCbG9jaztcclxuXHRcdHZhciBhc3NldERhdGE6SUFzc2V0O1xyXG5cdFx0dmFyIGlzUGFyc2VkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdHZhciBuczpudW1iZXI7XHJcblx0XHR2YXIgdHlwZTpudW1iZXI7XHJcblx0XHR2YXIgZmxhZ3M6bnVtYmVyO1xyXG5cdFx0dmFyIGxlbjpudW1iZXI7XHJcblxyXG5cdFx0dGhpcy5fY3VyX2Jsb2NrX2lkID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRucyA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dHlwZSA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0ZmxhZ3MgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdGxlbiA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0dmFyIGJsb2NrQ29tcHJlc3Npb246Ym9vbGVhbiA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUc0KTtcclxuXHRcdHZhciBibG9ja0NvbXByZXNzaW9uTFpNQTpib29sZWFuID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzUpO1xyXG5cclxuXHRcdGlmICh0aGlzLl9hY2N1cmFjeU9uQmxvY2tzKSB7XHJcblx0XHRcdHRoaXMuX2FjY3VyYWN5TWF0cml4ID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzEpO1xyXG5cdFx0XHR0aGlzLl9hY2N1cmFjeUdlbyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUcyKTtcclxuXHRcdFx0dGhpcy5fYWNjdXJhY3lQcm9wcyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUczKTtcclxuXHRcdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fYWNjdXJhY3lHZW8pIHtcclxuXHRcdFx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fYWNjdXJhY3lNYXRyaXgpIHtcclxuXHRcdFx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLl9hY2N1cmFjeVByb3BzKSB7XHJcblx0XHRcdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBibG9ja0VuZEFsbDpudW1iZXIgPSB0aGlzLl9ib2R5LnBvc2l0aW9uICsgbGVuO1xyXG5cclxuXHRcdGlmIChsZW4gPiB0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCkpIHtcclxuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQVdEMiBibG9jayBsZW5ndGggaXMgYmlnZ2VyIHRoYW4gdGhlIGJ5dGVzIHRoYXQgYXJlIGF2YWlsYWJsZSEnKTtcclxuXHRcdFx0dGhpcy5fYm9keS5wb3NpdGlvbiArPSB0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMgPSBuZXcgQnl0ZUFycmF5KCk7XHJcblxyXG5cclxuXHRcdHRoaXMuX2JvZHkucmVhZEJ5dGVzKHRoaXMuX25ld0Jsb2NrQnl0ZXMsIDAsIGxlbik7XHJcblxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBDb21wcmVzc2VkIEFXRCBGb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcblxyXG5cdFx0aWYgKGJsb2NrQ29tcHJlc3Npb24pIHtcclxuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCcpO1xyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0IGlmIChibG9ja0NvbXByZXNzaW9uTFpNQSlcclxuXHRcdFx0IHtcclxuXHRcdFx0IHRoaXMuX25ld0Jsb2NrQnl0ZXMudW5jb21wcmVzcyhBV0RQYXJzZXIuQ09NUFJFU1NJT05NT0RFX0xaTUEpO1xyXG5cdFx0XHQgfVxyXG5cdFx0XHQgZWxzZVxyXG5cdFx0XHQge1xyXG5cdFx0XHQgdGhpcy5fbmV3QmxvY2tCeXRlcy51bmNvbXByZXNzKCk7XHJcblx0XHRcdCB9XHJcblx0XHRcdCAqL1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIExJVFRMRV9FTkRJQU4gLSBEZWZhdWx0IGZvciBBcnJheUJ1ZmZlciAvIE5vdCBpbXBsZW1lbnRlZCBpbiBCeXRlQXJyYXlcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly90aGlzLl9uZXdCbG9ja0J5dGVzLmVuZGlhbiA9IEVuZGlhbi5MSVRUTEVfRU5ESUFOO1xyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IDA7XHJcblx0XHRibG9jayA9IG5ldyBBV0RCbG9jaygpO1xyXG5cdFx0YmxvY2subGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxlbjtcclxuXHRcdGJsb2NrLmlkID0gdGhpcy5fY3VyX2Jsb2NrX2lkO1xyXG5cclxuXHRcdHZhciBibG9ja0VuZEJsb2NrOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW47XHJcblxyXG5cdFx0aWYgKGJsb2NrQ29tcHJlc3Npb24pIHtcclxuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCcpO1xyXG5cdFx0XHQvL2Jsb2NrRW5kQmxvY2sgICA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyB0aGlzLl9uZXdCbG9ja0J5dGVzLmxlbmd0aDtcclxuXHRcdFx0Ly9ibG9jay5sZW4gICAgICAgPSBibG9ja0VuZEJsb2NrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkFXREJsb2NrOiAgSUQgPSBcIiArIHRoaXMuX2N1cl9ibG9ja19pZCArIFwiIHwgVHlwZUlEID0gXCIgKyB0eXBlICsgXCIgfCBDb21wcmVzc2lvbiA9IFwiICsgYmxvY2tDb21wcmVzc2lvbiArIFwiIHwgTWF0cml4LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lNYXRyaXggKyBcIiB8IEdlb21ldHJ5LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lHZW8gKyBcIiB8IFByb3BlcnRpZXMtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeVByb3BzKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbdGhpcy5fY3VyX2Jsb2NrX2lkXSA9IGJsb2NrO1xyXG5cclxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAzKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAwKSkge1xyXG4gICAgICAgICAgICAvLyBwcm9iYWJseSBzaG91bGQgY29udGFpbiBzb21lIGluZm8gYWJvdXQgdGhlIHR5cGUgb2YgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIHZhciBmYWN0b3J5ID0gbmV3IEFTMlNjZW5lR3JhcGhGYWN0b3J5KCk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIDI6Ly8ganVzdCBiZWNhdXNlIGkgdXNlZCBibG9ja0lEIDIgaW4gZmlyc3QgZXhwb3J0ZXIgZWFybGllclxyXG5cdFx0XHRcdGNhc2UgMTMxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYXBlMkQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMzovLyBqdXN0IGJlY2F1c2UgaSB1c2VkIGJsb2NrSUQgMyBpbiBmaXJzdCBleHBvcnRlciBlYXJsaWVyXHJcblx0XHRcdFx0Y2FzZSAxMzI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2hhcGUyREZpbGwodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgNDovLyBqdXN0IGJlY2F1c2UgaSB1c2VkIGJsb2NrSUQgNCBpbiBmaXJzdCBleHBvcnRlciBlYXJsaWVyXHJcblx0XHRcdFx0Y2FzZSAxMzM6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGltZUxpbmUodGhpcy5fY3VyX2Jsb2NrX2lkLCBmYWN0b3J5KTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICAgICAgaWYgKCh0aGlzLl92ZXJzaW9uWzBdID4gMil8fCgodGhpcy5fdmVyc2lvblswXSA+PSAyKSAmJiAodGhpcy5fdmVyc2lvblsxXSA+PSAxKSkpIHtcclxuXHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgMTE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlUHJpbWl0dmVzKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDMxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNreWJveEluc3RhbmNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDQxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUxpZ2h0KHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDQyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUNhbWVyYSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdC8vICBjYXNlIDQzOlxyXG5cdFx0XHRcdC8vICAgICAgcGFyc2VUZXh0dXJlUHJvamVjdG9yKF9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdC8vICAgICAgaXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdC8vICAgICAgYnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgNTE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTGlnaHRQaWNrZXIodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgODE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWF0ZXJpYWxfdjEodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgODM6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ3ViZVRleHR1cmUodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgOTE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2hhcmVkTWV0aG9kQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgOTI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2hhZG93TWV0aG9kQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTExOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1lc2hQb3NlQW5pbWF0aW9uKHRoaXMuX2N1cl9ibG9ja19pZCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDExMjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoUG9zZUFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMTM6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVmVydGV4QW5pbWF0aW9uU2V0KHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEyMjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VBbmltYXRvclNldCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyNTM6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ29tbWFuZCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8qL1xyXG5cdFx0fVxyXG5cdFx0Ly8qXHJcblx0XHRpZiAoaXNQYXJzZWQgPT0gZmFsc2UpIHtcclxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblxyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VUcmlhbmdsZUdlb21ldHJpZUJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDIyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUNvbnRhaW5lcih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyMzpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoSW5zdGFuY2UodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgODE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWF0ZXJpYWwodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgODI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGV4dHVyZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMDE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2tlbGV0b24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTAyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNrZWxldG9uUG9zZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMDM6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2tlbGV0b25BbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTIxOlxyXG5cdFx0XHRcdFx0Ly90aGlzLnBhcnNlVVZBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdC8vYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyNTQ6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTmFtZVNwYWNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI1NTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXRhRGF0YSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkFXREJsb2NrOiAgIFVua25vd24gQmxvY2tUeXBlICAoQmxvY2tJRCA9IFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIpIC0gU2tpcCBcIiArIGxlbiArIFwiIGJ5dGVzXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArPSBsZW47XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8qL1xyXG5cclxuXHRcdHZhciBtc2dDbnQ6bnVtYmVyID0gMDtcclxuXHRcdGlmICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID09IGJsb2NrRW5kQmxvY2spIHtcclxuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdFx0aWYgKGJsb2NrLmVycm9yTWVzc2FnZXMpIHtcclxuXHRcdFx0XHRcdHdoaWxlIChtc2dDbnQgPCBibG9jay5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgKCEpIEVycm9yOiBcIiArIGJsb2NrLmVycm9yTWVzc2FnZXNbbXNnQ250XSArIFwiICghKVwiKTtcclxuXHRcdFx0XHRcdFx0bXNnQ250Kys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiXFxuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCIgICghKSghKSghKSBFcnJvciB3aGlsZSByZWFkaW5nIEFXREJsb2NrIElEIFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIgPSBza2lwIHRvIG5leHQgYmxvY2tcIik7XHJcblxyXG5cdFx0XHRcdGlmIChibG9jay5lcnJvck1lc3NhZ2VzKSB7XHJcblx0XHRcdFx0XHR3aGlsZSAobXNnQ250IDwgYmxvY2suZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICghKSBFcnJvcjogXCIgKyBibG9jay5lcnJvck1lc3NhZ2VzW21zZ0NudF0gKyBcIiAoISlcIik7XHJcblx0XHRcdFx0XHRcdG1zZ0NudCsrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2JvZHkucG9zaXRpb24gPSBibG9ja0VuZEFsbDtcclxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMgPSBudWxsO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHQvLy0tUGFyc2VyIEJsb2Nrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQvL0Jsb2NrIElEID0gMlxyXG5cdHByaXZhdGUgcGFyc2VTaGFwZTJEKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cclxuXHRcdHZhciBnZW9tOkdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Ly8gUmVhZCBuYW1lIGFuZCBzdWIgY291bnRcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBudW1fc3ViczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0Ly8gUmVhZCBvcHRpb25hbCBwcm9wZXJ0aWVzXHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX2dlb05yVHlwZSwgMjp0aGlzLl9nZW9OclR5cGV9KTtcclxuXHJcblxyXG5cdFx0Ly8gTG9vcCB0aHJvdWdoIHN1YiBtZXNoZXNcclxuXHRcdHZhciBzdWJzX3BhcnNlZDpudW1iZXIgPSAwO1xyXG5cdFx0d2hpbGUgKHN1YnNfcGFyc2VkIDwgbnVtX3N1YnMpIHtcclxuXHRcdFx0dmFyIGk6bnVtYmVyO1xyXG5cdFx0XHR2YXIgc21fbGVuOm51bWJlciwgc21fZW5kOm51bWJlcjtcclxuXHRcdFx0dmFyIHN1Yl9nZW9tOlRyaWFuZ2xlU3ViR2VvbWV0cnk7XHJcblx0XHRcdHZhciB3X2luZGljZXM6QXJyYXk8bnVtYmVyPjtcclxuXHRcdFx0dmFyIHdlaWdodHM6QXJyYXk8bnVtYmVyPjtcclxuXHJcblx0XHRcdHNtX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHNtX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzbV9sZW47XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCIgICAgICAgICghKSBQQVJTRSBTVUJNRVNIXCIpO1xyXG5cclxuXHRcdFx0Ly8gSWdub3JlIGZvciBub3cgKHJlYWQgdXYgZm9yIHN1YnNoYXBlcyBsYXRlcilcIlxyXG5cdFx0XHR2YXIgc3ViUHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX2dlb05yVHlwZSwgMjp0aGlzLl9nZW9OclR5cGV9KTtcclxuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xyXG5cdFx0XHR2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0dmFyIGlfaWR4Om51bWJlciA9IDA7XHJcblx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc21fZW5kKSB7XHJcblx0XHRcdFx0dmFyIGlkeDpudW1iZXIgPSAwO1xyXG5cdFx0XHRcdHZhciB1dl9pZHg6bnVtYmVyID0gMDtcclxuXHRcdFx0XHR2YXIgbl9pZHg6bnVtYmVyID0gMDtcclxuXHRcdFx0XHR2YXIgdF9pZHg6bnVtYmVyID0gMDtcclxuXHRcdFx0XHR2YXIgc3RyX2Z0eXBlOm51bWJlciwgc3RyX3R5cGU6bnVtYmVyLCBzdHJfbGVuOm51bWJlciwgc3RyX2VuZDpudW1iZXI7XHJcblxyXG5cdFx0XHRcdC8vIFR5cGUsIGZpZWxkIHR5cGUsIGxlbmd0aFxyXG5cdFx0XHRcdHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0c3RyX2Z0eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0c3RyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xyXG5cclxuXHRcdFx0XHR2YXIgeDpudW1iZXIsIHk6bnVtYmVyLCB6Om51bWJlcjtcclxuXHRcdFx0XHR2YXIgdHlwZTpudW1iZXI7XHJcblx0XHRcdFx0dmFyIHI6bnVtYmVyLCBnOm51bWJlciwgYjpudW1iZXIsYTpudW1iZXI7XHJcblx0XHRcdFx0dmFyIHU6bnVtYmVyLCB2Om51bWJlcjtcclxuXHJcblx0XHRcdFx0aWYgKHN0cl90eXBlID09IDEpIHtcclxuXHRcdFx0XHRcdHZhciB2ZXJ0czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0XHRcdHZhciB1dnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0XHRcdFx0XHR2YXIgbm9ybWFsczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0XHRcdHZhciB0YW5nZW50czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHJcblx0XHRcdFx0XHRcdHggPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0XHR5ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHRcdFx0XHRcdFx0eiA9IC0wLjEgKiBzdWJzX3BhcnNlZDtcclxuXHRcdFx0XHRcdFx0Ly96ID0gc3Vic19wYXJzZWQ7XHJcblx0XHRcdFx0XHRcdC8veiA9IChibG9ja0lEKjAuMDAxKSArIHN1YnNfcGFyc2VkXHJcblx0XHRcdFx0XHRcdHR5cGUgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0XHR1ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHRcdFx0XHRcdFx0diA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcblx0XHRcdFx0XHRcdHIgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0XHRnID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHRcdFx0XHRcdFx0YiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcblx0XHRcdFx0XHRcdGEgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gd2hpbGUgdGhpcyBpcyB0cnVlLCBiZSBwYXJzZSB0aGUgdmVydGV4LWRhdGEsIHNvIGl0IGNhbiBiZSByZW5kZXJlZCBhcyBcIm5vcm1hbFwiIDNkLWdlb21ldHJ5XHJcblx0XHRcdFx0XHRcdGlmICh0cnVlKSB7XHJcblx0XHRcdFx0XHRcdFx0dXZzW2lkeF0gPSAwLjA7XHJcblx0XHRcdFx0XHRcdFx0bm9ybWFsc1tpZHhdID0gMC4wO1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHg7XHJcblx0XHRcdFx0XHRcdFx0dXZzW2lkeF0gPSAwLjA7XHJcblx0XHRcdFx0XHRcdFx0bm9ybWFsc1tpZHhdID0gMC4wO1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHk7XHJcblx0XHRcdFx0XHRcdFx0bm9ybWFsc1tpZHhdID0gMS4wO1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHo7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHQvLyBwYXJzZSBhbmQgc2V0LWRhdGEsIHNvIHRoZSAzZC1nZW9tZXRyeSBjb250YWlucyBhbGwgZGF0YSAoYnV0IGlzIG5vIGxvbmdlciB2YWxpZCBmb3Igbm9ybWFsIDNkLXJlbmRlcilcclxuXHRcdFx0XHRcdFx0XHQvLyBhd2F5M2QtdmVydGV4ZGF0YSAgICB8ICAgYXdheUpTLXNoYXBlLWRhdGFcclxuXHRcdFx0XHRcdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHRcdFx0XHRcdC8vIHBvcy54ICAgICAgICAgICAgICAgIHwgICBwb3MueFxyXG5cdFx0XHRcdFx0XHRcdC8vIHBvcy55ICAgICAgICAgICAgICAgIHwgICBwb3MueVxyXG5cdFx0XHRcdFx0XHRcdC8vIHBvcy56ICAgICAgICAgICAgICAgIHwgICBub3QgdXNlZFxyXG5cdFx0XHRcdFx0XHRcdC8vIG5vcm1hbC54ICAgICAgICAgICAgIHwgICBjdXJ2ZS10eXBlICgwOm5vdEN1cnZlZCwgMTogY29udmV4LCAyOmNvbmNhdmUpXHJcblx0XHRcdFx0XHRcdFx0Ly8gbm9ybWFsLnkgICAgICAgICAgICAgfCAgIGFscGhhXHJcblx0XHRcdFx0XHRcdFx0Ly8gbm9ybWFsLnogICAgICAgICAgICAgfCAgIG5vdCB1c2VkXHJcblx0XHRcdFx0XHRcdFx0Ly8gdXYudSAgICAgICAgICAgICAgICAgfCAgIGN1cnZlLnVcclxuXHRcdFx0XHRcdFx0XHQvLyB1di52ICAgICAgICAgICAgICAgICB8ICAgY3VydmUudlxyXG5cdFx0XHRcdFx0XHRcdC8vIHRhbmdlbnQueCAgICAgICAgICAgIHwgICByZWRcclxuXHRcdFx0XHRcdFx0XHQvLyB0YW5nZW50LnkgICAgICAgICAgICB8ICAgZ3JlZW5cclxuXHRcdFx0XHRcdFx0XHQvLyB0YW5nZW50LnogICAgICAgICAgICB8ICAgYmx1ZVxyXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHg7XHJcblx0XHRcdFx0XHRcdFx0Ly91djJbaWR4XSA9IHg7XHJcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geTtcclxuXHRcdFx0XHRcdFx0XHQvL3V2MltpZHhdID0geTtcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB6O1xyXG5cdFx0XHRcdFx0XHRcdHV2c1t1dl9pZHgrK10gPSB1O1xyXG5cdFx0XHRcdFx0XHRcdHV2c1t1dl9pZHgrK10gPSB2O1xyXG5cdFx0XHRcdFx0XHRcdG5vcm1hbHNbbl9pZHgrK10gPSB0eXBlO1xyXG5cdFx0XHRcdFx0XHRcdG5vcm1hbHNbbl9pZHgrK10gPSBhO1xyXG5cdFx0XHRcdFx0XHRcdG5vcm1hbHNbbl9pZHgrK10gPSAwO1xyXG5cdFx0XHRcdFx0XHRcdC8vIHRyYWNlKFwicj1cIiArIHIgKyBcIiBnPVwiICsgZyArIFwiIGI9XCIgKyBiICsgXCIgYT1cIiArIGEpO1xyXG5cdFx0XHRcdFx0XHRcdHRhbmdlbnRzW3RfaWR4KytdID0gcjtcclxuXHRcdFx0XHRcdFx0XHR0YW5nZW50c1t0X2lkeCsrXSA9IGc7XHJcblx0XHRcdFx0XHRcdFx0dGFuZ2VudHNbdF9pZHgrK10gPSBiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGluIGZ1dHVyZSB3ZSB3aWxsIG9ubHkgaGF2ZSBvbmUgc3RyZWFtIGZvciBhbGwgZmFjZS1pbmRpY2llc1xyXG5cdFx0XHRcdC8vIG9ubHkga2VlcGluZyBpdCBzcGxpdCB1cCBmb3IgdGhlIG1vbWVudCxcclxuXHRcdFx0XHQvLyBzbyB3ZSBjYW4gZGVidWcgYnkgY2hvb3Npbmcgd2hhdCBraW5kIG9mIHRyaWFuZ2xlcyBhcmUgYWRkZWQgdG8gc3ViR2VvLlxyXG5cdFx0XHRcdGVsc2UgaWYgKHN0cl90eXBlID09IDIpIHtcclxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdGhpc1ZhbDpudW1iZXI9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRcdFx0aW5kaWNlc1tpX2lkeCsrXSA9IHRoaXNWYWw7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMykge1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdGhpc1ZhbDpudW1iZXI9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRcdFx0aW5kaWNlc1tpX2lkeCsrXSA9IHRoaXNWYWw7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1lbHNlIGlmIChzdHJfdHlwZSA9PSA0KSB7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdHZhciB0aGlzVmFsOm51bWJlcj0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lfaWR4KytdID0gdGhpc1ZhbDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fWVsc2UgaWYgKHN0cl90eXBlID09IDUpIHtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHRoaXNWYWw6bnVtYmVyPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdFx0XHRcdGluZGljZXNbaV9pZHgrK10gPSB0aGlzVmFsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIHN1Yi1tZXNoIGF0dHJpYnV0ZXMgZm9yIG5vd1xyXG5cclxuXHRcdFx0c3ViX2dlb20gPSBuZXcgVHJpYW5nbGVTdWJHZW9tZXRyeSh0cnVlKTtcclxuXHRcdFx0c3ViX2dlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcclxuXHRcdFx0Ly8gd2hlbiByZW5kZXJpbmcgYXMgXCJub3JtYWxcIiAzZC1nZW9tZXRyeSwgd2UgbmVlZCB0byBhdXRvRGVyaXZlIHRhbmdlbnRzXHJcblx0XHRcdGlmKHRydWUpe1xyXG5cdFx0XHRcdHN1Yl9nZW9tLmF1dG9EZXJpdmVUYW5nZW50cyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gaWYgdXNpbmcgYSBuZXcgTWF0ZXJpYWwsXHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0c3ViX2dlb20udXBkYXRlVmVydGV4VGFuZ2VudHModGFuZ2VudHMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XHJcblx0XHRcdHN1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyh2ZXJ0cyk7XHJcblx0XHRcdHN1Yl9nZW9tLnVwZGF0ZVVWcyh1dnMpO1xyXG5cdFx0XHRzdWJfZ2VvbS51cGRhdGVWZXJ0ZXhOb3JtYWxzKG5vcm1hbHMpO1xyXG5cclxuXHRcdFx0Z2VvbS5hZGRTdWJHZW9tZXRyeShzdWJfZ2VvbSk7XHJcblxyXG5cdFx0XHRzdWJzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBnZW9tLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gZ2VvbTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVHJpYW5nbGVHZW9tZXRyeTogTmFtZSA9IFwiICsgbmFtZSArIFwifCBJZCA9IFwiICsgc3ViX2dlb20uaWQpO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gM1xyXG5cdHByaXZhdGUgcGFyc2VTaGFwZTJERmlsbChibG9ja0lEOm51bWJlcik6dm9pZCB7XHJcblxyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIGZpbGxfdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBmaWxsX3Byb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyfSk7Ly8geyAxOlVJTlQzMiwgNjpBV0RTVFJJTkcgfSAgKTsgLy87ICwgMjpVSU5UMzIsIDM6VUlOVDMyLCA1OkJPT0wgfSApO1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coXCJQYXJzZWQgYSBmaWxsXCIpO1xyXG5cdFx0c3dpdGNoIChmaWxsX3R5cGUpIHtcclxuXHRcdFx0Ly8gdG8gZG8sIG5vdCBhbGwgcHJvcGVydGllcyBhcmUgc2V0IG9uIGFsbCBwcmltaXRpdmVzXHJcblxyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNvbGlkIEZJTEw6IE5hbWUgPSBcIiArIG5hbWUpO1xyXG5cdFx0XHRcdHZhciBtYXRlcmlhbDpNZXRob2RNYXRlcmlhbCA9IG5ldyBNZXRob2RNYXRlcmlhbChmaWxsX3Byb3BzLmdldCgxLCAweGNjY2NjYykpO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmJvdGhTaWRlcyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0ZXJpYWwsIG5hbWUpO1xyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWF0ZXJpYWw7XHJcblx0XHRcdFx0Ly9wcmVmYWIgPSBuZXcgYXdheS5wcmVmYWJzLlByaW1pdGl2ZVBsYW5lUHJlZmFiKHByb3BzLmdldCgxMDEsIDEwMCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDEpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBiaXRtYXAgRklMTDogTmFtZSA9IFwiICsgbmFtZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIGxpbmVhciBncmFkaWVudCBGSUxMOiBOYW1lID0gXCIgKyBuYW1lKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgcmFkaWFsIGdyYWRpZW50IEZJTEw6IE5hbWUgPSBcIiArIG5hbWUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgdW5rbm93biBmaWxsc3R5bGU6IE5hbWUgPSBcIiArIG5hbWUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gNFxyXG5cdHByaXZhdGUgcGFyc2VUaW1lTGluZShibG9ja0lEOm51bWJlciwgZmFjdG9yeTpUaW1lbGluZVNjZW5lR3JhcGhGYWN0b3J5KTp2b2lkIHtcclxuXHJcblx0XHR2YXIgaTpudW1iZXI7XHJcblx0XHR2YXIgajpudW1iZXI7XHJcblx0XHR2YXIgazpudW1iZXI7XHJcblx0XHR2YXIgdGltZUxpbmVDb250YWluZXIgPSBmYWN0b3J5LmNyZWF0ZU1vdmllQ2xpcCgpO1xyXG5cdFx0dmFyIG5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgaXNTY2VuZSA9ICEhdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgc2NlbmVJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dmFyIG51bUZyYW1lcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuICAgICAgICB2YXIgb2JqZWN0SURNYXAgOiB7IFtpZDpzdHJpbmddOm51bWJlcjsgfSA9IHt9O1xyXG5cclxuXHRcdC8vIHZhciBwcmV2aW91c1RpbWVMaW5lOlRpbWVMaW5lRnJhbWU7XHJcblx0XHQvLyB2YXIgZmlsbF9wcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQzMn0pOy8vIHsgMTpVSU5UMzIsIDY6QVdEU1RSSU5HIH0gICk7IC8vOyAsIDI6VUlOVDMyLCAzOlVJTlQzMiwgNTpCT09MIH0gKTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVElNRUxJTkU6IE5hbWUgPSBcIiArIG5hbWUgKyBcInwgaXNTY2VuZSA9IFwiICsgaXNTY2VuZSArIFwifCBzY2VuZUlEID0gXCIgKyBzY2VuZUlEICsgXCJ8IG51bUZyYW1lcyA9IFwiICsgbnVtRnJhbWVzKTtcclxuXHJcblx0XHR2YXIgdG90YWxEdXJhdGlvbiA9IDA7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtRnJhbWVzOyBpKyspIHtcclxuXHJcblx0XHRcdHZhciBmcmFtZSA9IG5ldyBUaW1lbGluZUtleUZyYW1lKCk7XHJcblx0XHRcdHZhciB0cmFjZVN0cmluZyA9IFwiZnJhbWUgPSBcIiArIGk7XHJcblxyXG5cdFx0XHR2YXIgZnJhbWVEdXJhdGlvbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdGZyYW1lLnNldEZyYW1lVGltZSh0b3RhbER1cmF0aW9uLCBmcmFtZUR1cmF0aW9uKTtcclxuXHRcdFx0dG90YWxEdXJhdGlvbiArPSBmcmFtZUR1cmF0aW9uO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZHVyYXRpb24gPSBcIiArIGZyYW1lRHVyYXRpb24pO1xyXG5cclxuXHRcdFx0dmFyIG51bUxhYmVscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG51bUxhYmVsczsgaisrKSB7XHJcblx0XHRcdFx0dmFyIGxhYmVsVHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdHZhciBsYWJlbCA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEhhbmRsZSBsYWJlbHMgZGlmZmVyZW50bHlcclxuICAgICAgICAgICAgICAgIC8vdGltZUxpbmVDb250YWluZXIuYWRkRnJhbWVMYWJlbChuZXcgRnJhbWVMYWJlbChsYWJlbCwgbGFiZWxUeXBlLCBmcmFtZSkpO1xyXG5cdFx0XHRcdHRyYWNlU3RyaW5nICs9IFwiXFxuICAgICBsYWJlbCA9IFwiICsgbGFiZWwgKyBcIiAtIGxhYmVsVHlwZSA9IFwiICsgbGFiZWxUeXBlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbnVtQ29tbWFuZHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdHZhciBjb21tYW5kU3RyaW5nID0gXCJcXG4gICAgICBDb21tYW5kcyBcIiArIG51bUNvbW1hbmRzO1xyXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgbnVtQ29tbWFuZHM7IGorKykge1xyXG5cdFx0XHRcdHZhciBvYmplY3RJRDpudW1iZXI7XHJcblx0XHRcdFx0dmFyIHJlc291cmNlSUQ6bnVtYmVyO1xyXG5cdFx0XHRcdHZhciBjb21tYW5kVHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxID0gVXBkYXRlT2JqZWN0IChhbHNvIHVzZWQgdG8gaW5wdXQgbmV3IG9iamVjdClcclxuICAgICAgICAgICAgICAgIC8vIDMgPSByZW1vdmUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAvLyA0ID0gYWRkIC8gdXBkYXRlIHNvdW5kXHJcblxyXG5cdFx0XHRcdHN3aXRjaCAoY29tbWFuZFR5cGUpIHtcclxuXHJcblx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRjYXNlIDI6XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBQbGFjZSBPYmplY3QgQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnk7IH0gPSB7fTtcclxuXHRcdFx0XHRcdFx0dmFyIGhhc1Jlc291cmNlID0gISF0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlKCk7XHJcblx0XHRcdFx0XHRcdHZhciBoYXNEaXNwbGF5TWF0cml4ID0gISF0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlKCk7XHJcblx0XHRcdFx0XHRcdHZhciBoYXNDb2xvck1hdHJpeCA9ICEhdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZSgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgaGFzRGVwdGhDaGFuZ2UgPSAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcclxuXHRcdFx0XHRcdFx0dmFyIGhhc0ZpbHRlckNoYW5nZSA9ICEhdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZSgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgaGFzQmxlbmRNb2RlQ2hhbmdlID0gISF0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlKCk7XHJcblx0XHRcdFx0XHRcdHZhciBoYXNEZXB0aENsaXBDaGFuZ2UgPSAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcclxuXHRcdFx0XHRcdFx0dmFyIGhhc1Zpc2liaWxpdHlDaGFuZ2UgPSAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcclxuXHJcblx0XHRcdFx0XHRcdG9iamVjdElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChoYXNSZXNvdXJjZSkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc291cmNlSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIEFkZCBuZXcgUmVzb3VyY2UgPSBcIiArIHJlc291cmNlSUQgKyBcIiBhcyBvYmplY3RfaWQgPSBcIiArIG9iamVjdElEO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIFVwZGF0ZSBvYmplY3RfaWQgPSBcIiArIG9iamVjdElEO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaGFzRGlzcGxheU1hdHJpeCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciB0cmFuc2Zvcm1BcnJheTpudW1iZXJbXSA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdHZhciB0aGlzTWF0cml4ID0gbmV3IE1hdHJpeDNEKCk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogaW1wbGVtZW50IHRoaXMgaW4gZXhwb3J0ZXIgKG1ha2UgdHJhbnNmb3JtIG9wdGlvbmFsIDNkKTpcclxuXHRcdFx0XHRcdFx0XHR2YXIgaXMzZCA9IGZhbHNlOyAvLyAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXMzZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGsgPSAwOyBrIDwgNjsgaysrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybUFycmF5LnB1c2godGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBzZXQgcm90YXRpb24gYW5kIHNjYWxlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzTWF0cml4LnBvc2l0aW9uID0gbmV3IFZlY3RvcjNEKHRyYW5zZm9ybUFycmF5WzRdLCB0cmFuc2Zvcm1BcnJheVs1XSwgMCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXNbXCJfaU1hdHJpeDNEXCJdID0gdGhpc01hdHJpeDtcclxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFycmF5ID0gXCIgKyB0cmFuc2Zvcm1BcnJheTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGhhc0NvbG9yTWF0cml4KSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGNvbG9yTWF0cml4Om51bWJlcltdID0gW107XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChrID0gMDsgayA8IDIwOyBrKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yTWF0cml4LnB1c2godGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBDb2xvclRyYW5zZm9ybSBvbiBvYmplY3RQcm9wc1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgY29sb3JNYXRyaXggPSBcIiArIGNvbG9yTWF0cml4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaGFzRGVwdGhDaGFuZ2UpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbmV3RGVwdGggPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgRGVwdGggPSBcIiArIG5ld0RlcHRoO1xyXG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBkZXB0aCBvbiBvYmplY3RQcm9wc1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaGFzRmlsdGVyQ2hhbmdlKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogYWRkIGZpbHRlclxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaGFzQmxlbmRNb2RlQ2hhbmdlKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIG5ld0JsZW5kTW9kZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgQmxlbmRNb2RlID0gXCIgKyBuZXdCbGVuZE1vZGU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmIChoYXNEZXB0aENsaXBDaGFuZ2UpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbmV3Q2xpcERlcHRoID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIENsaXBEZXB0aCA9IFwiICsgbmV3Q2xpcERlcHRoO1xyXG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBkZXB0aENsaXBDaGFuZ2Ugb24gb2JqZWN0UHJvcHNcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGhhc1Zpc2liaWxpdHlDaGFuZ2UpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbmV3VmlzaWJpbGl0eSA9IEJvb2xlYW4odGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZSgpKTtcclxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIFZpc2liaXRpbHkgPSBcIiArIG5ld1Zpc2liaWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW1widmlzaWJsZVwiXSA9IG5ld1Zpc2liaWxpdHk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHZhciBudW1GaWxscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBudW1iZXIgb2YgZmlsbHMgPSBcIiArIG51bUZpbGxzO1xyXG5cdFx0XHRcdFx0XHR2YXIgZmlsbHNJRHM6bnVtYmVyW10gPSBbXTtcclxuXHRcdFx0XHRcdFx0Zm9yIChrID0gMDsgayA8IG51bUZpbGxzOyBrKyspIHtcclxuXHRcdFx0XHRcdFx0XHRmaWxsc0lEcy5wdXNoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCkpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgICAgIGlkIG9mIGZpbGwgPSBcIiArIGZpbGxzSURzW2tdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2VOYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaW5zdGFuY2VOYW1lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tcIm5hbWVcIl0gPSBpbnN0YW5jZU5hbWU7XHJcblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU5hbWUgPSBcIiArIGluc3RhbmNlTmFtZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gaWYgdGhpcyBpcyBhIFwiQUREIE5FVyBPQkpFQ1RcIi1jb21tYW5kLFxyXG5cdFx0XHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGxvb2t1cCB0aGUgbmV3IG9iamVjdCBieSBBV0QgSUQuXHJcblx0XHRcdFx0XHRcdGlmIChoYXNSZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkO1xyXG5cdFx0XHRcdFx0XHRcdC8vIHNvdW5kIGlzIGFkZGVkIHRvIHRpbWVsaW5lIHdpdGggZGVkaWNhdGVkIENvbW1hbmQsIGFzIGl0IGlzIG5vIGRpc3BsYXktb2JqZWN0IChoYXMgbm8gbWF0cml4IGV0YylcclxuXHRcdFx0XHRcdFx0XHQvLyBjaGVjayBpZiBhIEdlb21ldHJ5IGNhbiBiZSBmb3VuZCBhdCB0aGUgcmVzb3VyY2VJRCAoQVdELUlEKVxyXG5cdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZEFycmF5OmFueVtdID0gdGhpcy5nZXRBc3NldEJ5SUQocmVzb3VyY2VJRCwgWyBBc3NldFR5cGUuR0VPTUVUUlkgXSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBnZW9tID0gPEdlb21ldHJ5PnJldHVybmVkQXJyYXlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGQgPSBuZXcgTWVzaChnZW9tKTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIGdlb21ldHJ5IGZvdW5kLiBjcmVhdGUgbmV3IENvbW1hbmQsIGFkZCB0aGUgcHJvcHMgYW5kIHRoZSBtYXRlcmlhbHMgdG8gaXRcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAoayA9IDA7IGsgPCBudW1GaWxsczsgaysrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZEFycmF5MjphbnlbXSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGZpbGxzSURzW2tdLCBbIEFzc2V0VHlwZS5NQVRFUklBTCBdKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXkyWzBdICYmIG5ld0NoaWxkLnN1Yk1lc2hlcy5sZW5ndGggPiBrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGQuc3ViTWVzaGVzW2tdLm1hdGVyaWFsID0gcmV0dXJuZWRBcnJheTJbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gbm8gZ2VvbWV0cnkgZm91bmQsIHNvIHdlIGNoZWNrIGZvciBUSU1FTElORS5cclxuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZEFycmF5OmFueVtdID0gdGhpcy5nZXRBc3NldEJ5SUQocmVzb3VyY2VJRCwgWyBBc3NldFR5cGUuVElNRUxJTkUgXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGQgPSA8TW92aWVDbGlwPnJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZUlEID0gdGltZUxpbmVDb250YWluZXIucmVnaXN0ZXJQb3RlbnRpYWxDaGlsZChuZXdDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RJRE1hcFtvYmplY3RJRF0gPSBpbnN0YW5jZUlEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgQWRkQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlSUQgPSBvYmplY3RJRE1hcFtvYmplY3RJRF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBrZXksIHByb3BlcnRpZXNba2V5XSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDM6XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgT2JqZWN0IENvbW1hbmRcclxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2VJRCA9IG9iamVjdElETWFwW29iamVjdElEXTtcclxuXHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgUmVtb3ZlQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcclxuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAtIFJlbW92ZSBvYmplY3Qgd2l0aCBJRDogXCIgKyBvYmplY3RJRDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSA0OlxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQWRkIFNvdW5kIENvbW1hbmRcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogY3JlYXRlIENvbW1hbmRQcm9wc1NvdW5kIGFuZCBjaGVjayB3aGljaCBhc3NldCB0byB1c2VcclxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHRyZXNvdXJjZUlEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaW1wbGVtZW50IHNvdW5kIGluIHRpbWVsaW5lXHJcblx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIEFkZCBuZXcgU291bmQgQVdELUlEID0gXCIgKyByZXNvdXJjZUlELnRvU3RyaW5nKCkgKyBcIiBhcyBvYmplY3RfaWQgPSBcIiArIG9iamVjdElELnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgIC0gVW5rbm93biBDb21tYW5kIFR5cGUgPSBcIiArIGNvbW1hbmRUeXBlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbGVuZ3RoX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRpZiAobGVuZ3RoX2NvZGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBTY3JpcHQgc2hvdWxkIHByb2JhYmx5IG5vdCBiZSBhdHRhY2hlZCB0byBrZXlmcmFtZXM/XHJcblx0XHRcdFx0dmFyIGZyYW1lX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW5ndGhfY29kZSk7XHJcblx0XHRcdFx0Ly9mcmFtZS5hZGRUb1NjcmlwdChmcmFtZV9jb2RlKTtcclxuXHRcdFx0XHR0cmFjZVN0cmluZyArPSBcIlxcbmZyYW1lLWNvZGUgPSBcIiArIGZyYW1lX2NvZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0dHJhY2VTdHJpbmcgKz0gY29tbWFuZFN0cmluZztcclxuXHRcdFx0Ly90cmFjZShcImxlbmd0aF9jb2RlID0gXCIrbGVuZ3RoX2NvZGUrXCIgZnJhbWVfY29kZSA9IFwiK2ZyYW1lX2NvZGUpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpOy8vIHVzZXIgYXR0cmlidXRlcyAtIHNraXAgZm9yIG5vd1xyXG5cdFx0XHQvL3RoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpOyAvLyBJZ25vcmUgc3ViLW1lc2ggYXR0cmlidXRlcyBmb3Igbm93XHJcblx0XHRcdC8vY29uc29sZS5sb2codHJhY2VTdHJpbmcpO1xyXG5cdFx0XHR0aW1lTGluZUNvbnRhaW5lci5hZGRGcmFtZShmcmFtZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+dGltZUxpbmVDb250YWluZXIsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0aW1lTGluZUNvbnRhaW5lcjtcclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gMVxyXG4gICAgcHJpdmF0ZSBwYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICAgICAgdmFyIGdlb206R2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoKTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBuYW1lIGFuZCBzdWIgY291bnRcclxuICAgICAgICB2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcbiAgICAgICAgdmFyIG51bV9zdWJzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBvcHRpb25hbCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9nZW9OclR5cGUsIDI6dGhpcy5fZ2VvTnJUeXBlfSk7XHJcbiAgICAgICAgdmFyIGdlb1NjYWxlVTpudW1iZXIgPSBwcm9wcy5nZXQoMSwgMSk7XHJcbiAgICAgICAgdmFyIGdlb1NjYWxlVjpudW1iZXIgPSBwcm9wcy5nZXQoMiwgMSk7XHJcblxyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBzdWIgbWVzaGVzXHJcbiAgICAgICAgdmFyIHN1YnNfcGFyc2VkOm51bWJlciA9IDA7XHJcbiAgICAgICAgd2hpbGUgKHN1YnNfcGFyc2VkIDwgbnVtX3N1YnMpIHtcclxuICAgICAgICAgICAgdmFyIGlzXzJkX2dlb206Ym9vbGVhbj1mYWxzZTtcclxuICAgICAgICAgICAgdmFyIGk6bnVtYmVyO1xyXG4gICAgICAgICAgICB2YXIgc21fbGVuOm51bWJlciwgc21fZW5kOm51bWJlcjtcclxuICAgICAgICAgICAgdmFyIHdfaW5kaWNlczpBcnJheTxudW1iZXI+O1xyXG4gICAgICAgICAgICB2YXIgd2VpZ2h0czpBcnJheTxudW1iZXI+O1xyXG5cclxuICAgICAgICAgICAgc21fbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuICAgICAgICAgICAgc21fZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHNtX2xlbjtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdWJQcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xyXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggZGF0YSBzdHJlYW1zXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc21fZW5kKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWR4Om51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXZfaWR4Om51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgbl9pZHg6bnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciB0X2lkeDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cl9mdHlwZTpudW1iZXIsIHN0cl90eXBlOm51bWJlciwgc3RyX2xlbjpudW1iZXIsIHN0cl9lbmQ6bnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFR5cGUsIGZpZWxkIHR5cGUsIGxlbmd0aFxyXG4gICAgICAgICAgICAgICAgc3RyX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuICAgICAgICAgICAgICAgIHN0cl9mdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgc3RyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcbiAgICAgICAgICAgICAgICBzdHJfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHN0cl9sZW47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHg6bnVtYmVyLCB5Om51bWJlciwgejpudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0cl90eXBlID09IDEpIHsvL3ZlcnRleCAzZCBwb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmVydHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHo7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJfdHlwZSA9PSAyKSB7Ly9mYWNlIGluZGljaWVzIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlc1tpZHgrK10gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1dnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cl90eXBlID09IDQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxzW2lkeCsrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdfaW5kaWNlcyA9IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdfaW5kaWNlc1tpZHgrK10gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCkqMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJfdHlwZSA9PSA3KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gOCkgey8vIDJkLXBvc2l0aW9ucyAtIG5vdCB1c2VkIHlldC5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gOSkgey8vIGNvbWJpbmVkIHZlcnRleDNEIHN0cmVhbSAxMyB4IGZsb2F0MzJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMTApIHsvLyBjb21iaW5lZCB2ZXJ0ZXgyRCBzdHJlYW0gOSB4IGZsb2F0MzJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHg6bnVtYmVyLCB5Om51bWJlciwgejpudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGU6bnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByOm51bWJlciwgZzpudW1iZXIsIGI6bnVtYmVyLGE6bnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1Om51bWJlciwgdjpudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2ZXJ0czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWxzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YW5nZW50czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHogPSAtMC4xICogc3Vic19wYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8veiA9IHN1YnNfcGFyc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ogPSAoYmxvY2tJRCowLjAwMSkgKyBzdWJzX3BhcnNlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiByID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBhID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hpbGUgdGhpcyBpcyB0cnVlLCBiZSBwYXJzZSB0aGUgdmVydGV4LWRhdGEsIHNvIGl0IGNhbiBiZSByZW5kZXJlZCBhcyBcIm5vcm1hbFwiIDNkLWdlb21ldHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dnNbaWR4XSA9IDAuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbHNbaWR4XSA9IDAuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dnNbaWR4XSA9IDAuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbHNbaWR4XSA9IDAuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxzW2lkeF0gPSAxLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0c1tpZHgrK10gPSB6O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSBhbmQgc2V0LWRhdGEsIHNvIHRoZSAzZC1nZW9tZXRyeSBjb250YWlucyBhbGwgZGF0YSAoYnV0IGlzIG5vIGxvbmdlciB2YWxpZCBmb3Igbm9ybWFsIDNkLXJlbmRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF3YXkzZC12ZXJ0ZXhkYXRhICAgIHwgICBhd2F5SlMtc2hhcGUtZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvcy54ICAgICAgICAgICAgICAgIHwgICBwb3MueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zLnkgICAgICAgICAgICAgICAgfCAgIHBvcy55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3MueiAgICAgICAgICAgICAgICB8ICAgcG9zLnogKGZvciBub3cgd2UganVzdCB1c2UgdGhpcyBhcyBkZXB0aCAoc2V0IGVhY2ggc3ViZ2VvIHRvIGl0cyBvd24gZGVwdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsLnggICAgICAgICAgICAgfCAgIGN1cnZlLXR5cGUgKDA6bm90Q3VydmVkLCAxOiBjb252ZXgsIDI6Y29uY2F2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbC55ICAgICAgICAgICAgIHwgICBhbHBoYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsLnogICAgICAgICAgICAgfCAgIG5vdCB1c2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1di51ICAgICAgICAgICAgICAgICB8ICAgY3VydmUudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXYudiAgICAgICAgICAgICAgICAgfCAgIGN1cnZlLnZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhbmdlbnQueCAgICAgICAgICAgIHwgICByZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhbmdlbnQueSAgICAgICAgICAgIHwgICBncmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFuZ2VudC56ICAgICAgICAgICAgfCAgIGJsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3V2MltpZHhdID0geDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3V2MltpZHhdID0geTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRzW2lkeCsrXSA9IHo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dnNbdXZfaWR4KytdID0gdTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV2c1t1dl9pZHgrK10gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsc1tuX2lkeCsrXSA9IHR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxzW25faWR4KytdID0gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbHNbbl9pZHgrK10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhY2UoXCJyPVwiICsgciArIFwiIGc9XCIgKyBnICsgXCIgYj1cIiArIGIgKyBcIiBhPVwiICsgYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50c1t0X2lkeCsrXSA9IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50c1t0X2lkeCsrXSA9IGc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YW5nZW50c1t0X2lkeCsrXSA9IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cl90eXBlID09IDExKSB7Ly8gY29tYmluZWQgdmVydGV4MkQgc3RyZWFtIDUgeCBmbG9hdDMyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIHN1Yi1tZXNoIGF0dHJpYnV0ZXMgZm9yIG5vd1xyXG4gICAgICAgICAgICB2YXIgc3ViX2dlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcclxuICAgICAgICAgICAgc3ViX2dlb20gPSBuZXcgVHJpYW5nbGVTdWJHZW9tZXRyeSh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHdlaWdodHMpXHJcbiAgICAgICAgICAgICAgICBzdWJfZ2VvbS5qb2ludHNQZXJWZXJ0ZXggPSB3ZWlnaHRzLmxlbmd0aC8odmVydHMubGVuZ3RoLzMpO1xyXG4gICAgICAgICAgICBpZiAobm9ybWFscylcclxuICAgICAgICAgICAgICAgIHN1Yl9nZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh1dnMpXHJcbiAgICAgICAgICAgICAgICBzdWJfZ2VvbS5hdXRvRGVyaXZlVVZzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN1Yl9nZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gcmVuZGVyaW5nIGFzIFwibm9ybWFsXCIgM2QtZ2VvbWV0cnksIHdlIG5lZWQgdG8gYXV0b0Rlcml2ZSB0YW5nZW50c1xyXG4gICAgICAgICAgICBpZih0cnVlKXtcclxuICAgICAgICAgICAgICAgIHN1Yl9nZW9tLmF1dG9EZXJpdmVUYW5nZW50cyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ViX2dlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcclxuICAgICAgICAgICAgc3ViX2dlb20udXBkYXRlUG9zaXRpb25zKHZlcnRzKTtcclxuICAgICAgICAgICAgc3ViX2dlb20udXBkYXRlVmVydGV4Tm9ybWFscyhub3JtYWxzKTtcclxuICAgICAgICAgICAgc3ViX2dlb20udXBkYXRlVVZzKHV2cyk7XHJcbiAgICAgICAgICAgIHN1Yl9nZW9tLnVwZGF0ZVZlcnRleFRhbmdlbnRzKG51bGwpO1xyXG4gICAgICAgICAgICBzdWJfZ2VvbS51cGRhdGVKb2ludFdlaWdodHMod2VpZ2h0cyk7XHJcbiAgICAgICAgICAgIHN1Yl9nZW9tLnVwZGF0ZUpvaW50SW5kaWNlcyh3X2luZGljZXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjYWxlVTpudW1iZXIgPSBzdWJQcm9wcy5nZXQoMSwgMSk7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZVY6bnVtYmVyID0gc3ViUHJvcHMuZ2V0KDIsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc2V0U3ViVVZzOmJvb2xlYW4gPSBmYWxzZTsgLy90aGlzIHNob3VsZCByZW1haW4gZmFsc2UgYXRtLCBiZWNhdXNlIGluIEF3YXlCdWlsZGVyIHRoZSB1diBpcyBvbmx5IHNjYWxlZCBieSB0aGUgZ2VvbWV0cnlcclxuXHJcbiAgICAgICAgICAgIGlmICgoZ2VvU2NhbGVVICE9IHNjYWxlVSkgfHwgKGdlb1NjYWxlViAhPSBzY2FsZVYpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdWJVVnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2NhbGVVID0gZ2VvU2NhbGVVL3NjYWxlVTtcclxuICAgICAgICAgICAgICAgIHNjYWxlViA9IGdlb1NjYWxlVi9zY2FsZVY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZXRTdWJVVnMpXHJcbiAgICAgICAgICAgICAgICBzdWJfZ2VvbS5zY2FsZVVWKHNjYWxlVSwgc2NhbGVWKTtcclxuXHJcbiAgICAgICAgICAgIGdlb20uYWRkU3ViR2VvbWV0cnkoc3ViX2dlb20pO1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogU29tZWhvdyBtYXAgaW4tc3ViIHRvIG91dC1zdWIgaW5kaWNlcyB0byBlbmFibGUgbG9vay11cFxyXG4gICAgICAgICAgICAvLyB3aGVuIGNyZWF0aW5nIG1lc2hlcyAoYW5kIHRoZWlyIG1hdGVyaWFsIGFzc2lnbm1lbnRzLilcclxuXHJcbiAgICAgICAgICAgIHN1YnNfcGFyc2VkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoZ2VvU2NhbGVVICE9IDEpIHx8IChnZW9TY2FsZVYgIT0gMSkpXHJcbiAgICAgICAgICAgIGdlb20uc2NhbGVVVihnZW9TY2FsZVUsIGdlb1NjYWxlVik7XHJcbiAgICAgICAgdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgdGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gZ2VvbSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBnZW9tO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVidWcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJzZWQgYSBUcmlhbmdsZUdlb21ldHJ5OiBOYW1lID0gXCIgKyBuYW1lICsgXCJ8IElkID0gXCIgKyBzdWJfZ2VvbS5pZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDExXHJcblx0cHJpdmF0ZSBwYXJzZVByaW1pdHZlcyhibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBuYW1lOnN0cmluZztcclxuXHRcdHZhciBwcmVmYWI6UHJlZmFiQmFzZTtcclxuXHRcdHZhciBwcmltVHlwZTpudW1iZXI7XHJcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXM7XHJcblx0XHR2YXIgYnNtOk1hdHJpeDNEO1xyXG5cclxuXHRcdC8vIFJlYWQgbmFtZSBhbmQgc3ViIGNvdW50XHJcblx0XHRuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0cHJpbVR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezEwMTp0aGlzLl9nZW9OclR5cGUsIDEwMjp0aGlzLl9nZW9OclR5cGUsIDEwMzp0aGlzLl9nZW9OclR5cGUsIDExMDp0aGlzLl9nZW9OclR5cGUsIDExMTp0aGlzLl9nZW9OclR5cGUsIDMwMTpBV0RQYXJzZXIuVUlOVDE2LCAzMDI6QVdEUGFyc2VyLlVJTlQxNiwgMzAzOkFXRFBhcnNlci5VSU5UMTYsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MLCA3MDM6QVdEUGFyc2VyLkJPT0wsIDcwNDpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cclxuXHRcdHZhciBwcmltaXRpdmVUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiVW5zdXBwb3J0ZWQgVHlwZS1JRFwiLCBcIlByaW1pdGl2ZVBsYW5lUHJlZmFiXCIsIFwiUHJpbWl0aXZlQ3ViZVByZWZhYlwiLCBcIlByaW1pdGl2ZVNwaGVyZVByZWZhYlwiLCBcIlByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIsIFwiUHJpbWl0aXZlc0NvbmVQcmVmYWJcIiwgXCJQcmltaXRpdmVzQ2Fwc3VsZVByZWZhYlwiLCBcIlByaW1pdGl2ZXNUb3J1c1ByZWZhYlwiXVxyXG5cclxuXHRcdHN3aXRjaCAocHJpbVR5cGUpIHtcclxuXHRcdFx0Ly8gdG8gZG8sIG5vdCBhbGwgcHJvcGVydGllcyBhcmUgc2V0IG9uIGFsbCBwcmltaXRpdmVzXHJcblxyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVBsYW5lUHJlZmFiKHByb3BzLmdldCgxMDEsIDEwMCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDEpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZUN1YmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgMTAwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDEwMywgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMSksIHByb3BzLmdldCgzMDIsIDEpLCBwcm9wcy5nZXQoMzAzLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVTcGhlcmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDEyKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDeWxpbmRlclByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDUwKSwgcHJvcHMuZ2V0KDEwMywgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxKSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7IC8vIGJvb2w3MDEsIGJvb2w3MDIsIGJvb2w3MDMsIGJvb2w3MDQpO1xyXG5cdFx0XHRcdGlmICghcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpXHJcblx0XHRcdFx0XHQoPFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiPnByZWZhYikudG9wQ2xvc2VkID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKCFwcm9wcy5nZXQoNzAyLCB0cnVlKSlcclxuXHRcdFx0XHRcdCg8UHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWI+cHJlZmFiKS5ib3R0b21DbG9zZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAoIXByb3BzLmdldCg3MDMsIHRydWUpKVxyXG5cdFx0XHRcdFx0KDxQcmltaXRpdmVDeWxpbmRlclByZWZhYj5wcmVmYWIpLnlVcCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgNTpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ29uZVByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCg3MDEsIHRydWUpLCBwcm9wcy5nZXQoNzAyLCB0cnVlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDY6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDE1KSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSA3OlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVUb3J1c1ByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDUwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCA4KSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJlZmFiQmFzZSgpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRVJST1I6IFVOU1VQUE9SVEVEIFBSRUZBQl9UWVBFXCIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgocHJvcHMuZ2V0KDExMCwgMSkgIT0gMSkgfHwgKHByb3BzLmdldCgxMTEsIDEpICE9IDEpKSB7XHJcblx0XHRcdC8vZ2VvbS5zdWJHZW9tZXRyaWVzO1xyXG5cdFx0XHQvL2dlb20uc2NhbGVVVihwcm9wcy5nZXQoMTEwLCAxKSwgcHJvcHMuZ2V0KDExMSwgMSkpOyAvL1RPRE8gYWRkIGJhY2sgc2NhbGluZyB0byBwcmVmYWJzXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRwcmVmYWIubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChwcmVmYWIsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBwcmVmYWI7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGlmICgocHJpbVR5cGUgPCAwKSB8fCAocHJpbVR5cGUgPiA3KSkge1xyXG5cdFx0XHRcdHByaW1UeXBlID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFByaW1pdml0ZTogTmFtZSA9IFwiICsgbmFtZSArIFwifCB0eXBlID0gXCIgKyBwcmltaXRpdmVUeXBlc1twcmltVHlwZV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQmxvY2sgSUQgPSAyMlxyXG5cdHByaXZhdGUgcGFyc2VDb250YWluZXIoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmc7XHJcblx0XHR2YXIgcGFyX2lkOm51bWJlcjtcclxuXHRcdHZhciBtdHg6TWF0cml4M0Q7XHJcblx0XHR2YXIgY3RyOkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblx0XHR2YXIgcGFyZW50OkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblxyXG5cdFx0cGFyX2lkID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdG10eCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xyXG5cdFx0bmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xyXG5cdFx0Y3RyID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcclxuXHRcdGN0ci50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKTtcclxuXHJcblx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR2YXIgb2JqOkRpc3BsYXlPYmplY3QgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV0pLmFkZENoaWxkKGN0cik7XHJcblx0XHRcdHBhcmVudE5hbWUgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHR9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzWyBibG9ja0lEIF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBPYmplY3RDb250YWluZXIzRFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XHJcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGN0cik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW4gQVdEIHZlcnNpb24gMi4xIHdlIHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXHJcblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMSkpIHtcclxuXHRcdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcclxuXHRcdFx0Y3RyLnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gaW4gb3RoZXIgdmVyc2lvbnMgd2UgZG8gbm90IHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhlIGV4dHJhUHJvcGVydGllcyBzaG91bGQgb25seSBiZSBzZXQgZm9yIEFXRDIuMS1GaWxlcywgYnV0IGlzIHJlYWQgZm9yIGJvdGggdmVyc2lvbnNcclxuXHRcdGN0ci5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGN0ciwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGN0cjtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDb250YWluZXI6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQmxvY2sgSUQgPSAyM1xyXG5cdHByaXZhdGUgcGFyc2VNZXNoSW5zdGFuY2UoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbnVtX21hdGVyaWFsczpudW1iZXI7XHJcblx0XHR2YXIgbWF0ZXJpYWxzX3BhcnNlZDpudW1iZXI7XHJcblx0XHR2YXIgcGFyZW50OkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xyXG5cdFx0dmFyIGRhdGFfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciBnZW9tOkdlb21ldHJ5O1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlHZW9tZXRyeTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZGF0YV9pZCwgW0Fzc2V0VHlwZS5HRU9NRVRSWV0pXHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlHZW9tZXRyeVswXSkge1xyXG5cdFx0XHRnZW9tID0gPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5R2VvbWV0cnlbMV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIEdlb21ldHJ5IGZvciB0aGlzIE1lc2guIEEgZW1wdHkgR2VvbWV0cnkgaXMgY3JlYXRlZCFcIik7XHJcblx0XHRcdGdlb20gPSBuZXcgR2VvbWV0cnkoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZ2VvSUQgPSBkYXRhX2lkO1xyXG5cdFx0dmFyIG1hdGVyaWFsczpBcnJheTxNYXRlcmlhbEJhc2U+ID0gbmV3IEFycmF5PE1hdGVyaWFsQmFzZT4oKTtcclxuXHRcdG51bV9tYXRlcmlhbHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0dmFyIG1hdGVyaWFsTmFtZXM6QXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcblx0XHRtYXRlcmlhbHNfcGFyc2VkID0gMDtcclxuXHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheU1hdGVyaWFsOkFycmF5PGFueT47XHJcblxyXG5cdFx0d2hpbGUgKG1hdGVyaWFsc19wYXJzZWQgPCBudW1fbWF0ZXJpYWxzKSB7XHJcblx0XHRcdHZhciBtYXRfaWQ6bnVtYmVyO1xyXG5cdFx0XHRtYXRfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRyZXR1cm5lZEFycmF5TWF0ZXJpYWwgPSB0aGlzLmdldEFzc2V0QnlJRChtYXRfaWQsIFtBc3NldFR5cGUuTUFURVJJQUxdKVxyXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5TWF0ZXJpYWxbMF0pICYmIChtYXRfaWQgPiAwKSkge1xyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIE1hdGVyaWFsIE5yIFwiICsgbWF0ZXJpYWxzX3BhcnNlZCArIFwiIChJRCA9IFwiICsgbWF0X2lkICsgXCIgKSBmb3IgdGhpcyBNZXNoXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbTpNYXRlcmlhbEJhc2UgPSA8TWF0ZXJpYWxCYXNlPiByZXR1cm5lZEFycmF5TWF0ZXJpYWxbMV07XHJcblxyXG5cdFx0XHRtYXRlcmlhbHMucHVzaChtKTtcclxuXHRcdFx0bWF0ZXJpYWxOYW1lcy5wdXNoKG0ubmFtZSk7XHJcblxyXG5cdFx0XHRtYXRlcmlhbHNfcGFyc2VkKys7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG1lc2g6TWVzaCA9IG5ldyBNZXNoKGdlb20sIG51bGwpO1xyXG5cdFx0bWVzaC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlQYXJlbnQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKVxyXG5cclxuXHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XHJcblx0XHRcdHZhciBvYmpDOkRpc3BsYXlPYmplY3RDb250YWluZXIgPSA8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVBhcmVudFsxXTtcclxuXHRcdFx0b2JqQy5hZGRDaGlsZChtZXNoKTtcclxuXHRcdFx0cGFyZW50TmFtZSA9IG9iakMubmFtZTtcclxuXHRcdH0gZWxzZSBpZiAocGFyX2lkID4gMCkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBNZXNoXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcclxuXHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQobWVzaCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG1hdGVyaWFscy5sZW5ndGggPj0gMSAmJiBtZXNoLnN1Yk1lc2hlcy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWxzWzBdO1xyXG5cdFx0fSBlbHNlIGlmIChtYXRlcmlhbHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHR2YXIgaTpudW1iZXI7XHJcblxyXG5cdFx0XHQvLyBBc3NpZ24gZWFjaCBzdWItbWVzaCBpbiB0aGUgbWVzaCBhIG1hdGVyaWFsIGZyb20gdGhlIGxpc3QuIElmIG1vcmUgc3ViLW1lc2hlc1xyXG5cdFx0XHQvLyB0aGFuIG1hdGVyaWFscywgcmVwZWF0IHRoZSBsYXN0IG1hdGVyaWFsIGZvciBhbGwgcmVtYWluaW5nIHN1Yi1tZXNoZXMuXHJcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXNoLnN1Yk1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdG1lc2guc3ViTWVzaGVzW2ldLm1hdGVyaWFsID0gbWF0ZXJpYWxzW01hdGgubWluKG1hdGVyaWFscy5sZW5ndGggLSAxLCBpKV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAyKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAxKSkge1xyXG5cdFx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOCwgNTpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cdFx0XHRtZXNoLnBpdm90ID0gbmV3IFZlY3RvcjNEKDxudW1iZXI+cHJvcHMuZ2V0KDEsIDApLCA8bnVtYmVyPnByb3BzLmdldCgyLCAwKSwgPG51bWJlcj4gcHJvcHMuZ2V0KDMsIDApKTtcclxuXHRcdFx0bWVzaC5jYXN0c1NoYWRvd3MgPSBwcm9wcy5nZXQoNSwgdHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdH1cclxuXHJcblx0XHRtZXNoLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWVzaCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1lc2g7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTWVzaDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSArIFwifCBHZW9tZXRyeS1OYW1lID0gXCIgKyBnZW9tLm5hbWUgKyBcIiB8IFN1Yk1lc2hlcyA9IFwiICsgbWVzaC5zdWJNZXNoZXMubGVuZ3RoICsgXCIgfCBNYXQtTmFtZXMgPSBcIiArIG1hdGVyaWFsTmFtZXMudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly9CbG9jayBJRCAzMVxyXG5cdHByaXZhdGUgcGFyc2VTa3lib3hJbnN0YW5jZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBjdWJlVGV4QWRkcjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5Q3ViZVRleDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoY3ViZVRleEFkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0sIFwiQ3ViZVRleHR1cmVcIik7XHJcblx0XHRpZiAoKCFyZXR1cm5lZEFycmF5Q3ViZVRleFswXSkgJiYgKGN1YmVUZXhBZGRyICE9IDApKVxyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQ3ViZXRleHR1cmUgKElEID0gXCIgKyBjdWJlVGV4QWRkciArIFwiICkgZm9yIHRoaXMgU2t5Ym94XCIpO1xyXG5cdFx0dmFyIGFzc2V0OlNreWJveCA9IG5ldyBTa3lib3goPEltYWdlQ3ViZVRleHR1cmU+IHJldHVybmVkQXJyYXlDdWJlVGV4WzFdKTtcclxuXHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKVxyXG5cdFx0YXNzZXQuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGFzc2V0LCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2t5Ym94OiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IEN1YmVUZXh0dXJlLU5hbWUgPSBcIiArICg8SW1hZ2VDdWJlVGV4dHVyZT4gcmV0dXJuZWRBcnJheUN1YmVUZXhbMV0pLm5hbWUpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA0MVxyXG5cdHByaXZhdGUgcGFyc2VMaWdodChibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBsaWdodDpMaWdodEJhc2U7XHJcblx0XHR2YXIgbmV3U2hhZG93TWFwcGVyOlNoYWRvd01hcHBlckJhc2U7XHJcblxyXG5cdFx0dmFyIHBhcl9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIG10eDpNYXRyaXgzRCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIGxpZ2h0VHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fcHJvcHNOclR5cGUsIDI6dGhpcy5fcHJvcHNOclR5cGUsIDM6QVdEUGFyc2VyLkNPTE9SLCA0OnRoaXMuX3Byb3BzTnJUeXBlLCA1OnRoaXMuX3Byb3BzTnJUeXBlLCA2OkFXRFBhcnNlci5CT09MLCA3OkFXRFBhcnNlci5DT0xPUiwgODp0aGlzLl9wcm9wc05yVHlwZSwgOTpBV0RQYXJzZXIuVUlOVDgsIDEwOkFXRFBhcnNlci5VSU5UOCwgMTE6dGhpcy5fcHJvcHNOclR5cGUsIDEyOkFXRFBhcnNlci5VSU5UMTYsIDIxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjI6dGhpcy5fbWF0cml4TnJUeXBlLCAyMzp0aGlzLl9tYXRyaXhOclR5cGV9KTtcclxuXHRcdHZhciBzaGFkb3dNYXBwZXJUeXBlOm51bWJlciA9IHByb3BzLmdldCg5LCAwKTtcclxuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XHJcblx0XHR2YXIgbGlnaHRUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiVW5zdXBwb3J0ZWQgTGlnaHRUeXBlXCIsIFwiUG9pbnRMaWdodFwiLCBcIkRpcmVjdGlvbmFsTGlnaHRcIl07XHJcblx0XHR2YXIgc2hhZG93TWFwcGVyVHlwZXM6QXJyYXk8c3RyaW5nPiA9IFtcIk5vIFNoYWRvd01hcHBlclwiLCBcIkRpcmVjdGlvbmFsU2hhZG93TWFwcGVyXCIsIFwiTmVhckRpcmVjdGlvbmFsU2hhZG93TWFwcGVyXCIsIFwiQ2FzY2FkZVNoYWRvd01hcHBlclwiLCBcIkN1YmVNYXBTaGFkb3dNYXBwZXJcIl07XHJcblxyXG5cdFx0aWYgKGxpZ2h0VHlwZSA9PSAxKSB7XHJcblx0XHRcdGxpZ2h0ID0gbmV3IFBvaW50TGlnaHQoKTtcclxuXHJcblx0XHRcdCg8UG9pbnRMaWdodD4gbGlnaHQpLnJhZGl1cyA9IHByb3BzLmdldCgxLCA5MDAwMCk7XHJcblx0XHRcdCg8UG9pbnRMaWdodD4gbGlnaHQpLmZhbGxPZmYgPSBwcm9wcy5nZXQoMiwgMTAwMDAwKTtcclxuXHJcblx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID4gMCkge1xyXG5cdFx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID09IDQpIHtcclxuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlciA9IG5ldyBDdWJlTWFwU2hhZG93TWFwcGVyKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsaWdodC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChsaWdodFR5cGUgPT0gMikge1xyXG5cclxuXHRcdFx0bGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodChwcm9wcy5nZXQoMjEsIDApLCBwcm9wcy5nZXQoMjIsIC0xKSwgcHJvcHMuZ2V0KDIzLCAxKSk7XHJcblxyXG5cdFx0XHRpZiAoc2hhZG93TWFwcGVyVHlwZSA+IDApIHtcclxuXHRcdFx0XHRpZiAoc2hhZG93TWFwcGVyVHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRuZXdTaGFkb3dNYXBwZXIgPSBuZXcgRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXIoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vaWYgKHNoYWRvd01hcHBlclR5cGUgPT0gMilcclxuXHRcdFx0XHQvLyAgbmV3U2hhZG93TWFwcGVyID0gbmV3IE5lYXJEaXJlY3Rpb25hbFNoYWRvd01hcHBlcihwcm9wcy5nZXQoMTEsIDAuNSkpO1xyXG5cdFx0XHRcdC8vaWYgKHNoYWRvd01hcHBlclR5cGUgPT0gMylcclxuXHRcdFx0XHQvLyAgIG5ld1NoYWRvd01hcHBlciA9IG5ldyBDYXNjYWRlU2hhZG93TWFwcGVyKHByb3BzLmdldCgxMiwgMykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHRcdGxpZ2h0LmNvbG9yID0gcHJvcHMuZ2V0KDMsIDB4ZmZmZmZmKTtcclxuXHRcdGxpZ2h0LnNwZWN1bGFyID0gcHJvcHMuZ2V0KDQsIDEuMCk7XHJcblx0XHRsaWdodC5kaWZmdXNlID0gcHJvcHMuZ2V0KDUsIDEuMCk7XHJcblx0XHRsaWdodC5hbWJpZW50Q29sb3IgPSBwcm9wcy5nZXQoNywgMHhmZmZmZmYpO1xyXG5cdFx0bGlnaHQuYW1iaWVudCA9IHByb3BzLmdldCg4LCAwLjApO1xyXG5cclxuXHRcdC8vIGlmIGEgc2hhZG93TWFwcGVyIGhhcyBiZWVuIGNyZWF0ZWQsIGFkanVzdCB0aGUgZGVwdGhNYXBTaXplIGlmIG5lZWRlZCwgYXNzaWduIHRvIGxpZ2h0IGFuZCBzZXQgY2FzdFNoYWRvd3MgdG8gdHJ1ZVxyXG5cdFx0aWYgKG5ld1NoYWRvd01hcHBlcikge1xyXG5cdFx0XHRpZiAobmV3U2hhZG93TWFwcGVyIGluc3RhbmNlb2YgQ3ViZU1hcFNoYWRvd01hcHBlcikge1xyXG5cdFx0XHRcdGlmIChwcm9wcy5nZXQoMTAsIDEpICE9IDEpIHtcclxuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlci5kZXB0aE1hcFNpemUgPSB0aGlzLl9kZXB0aFNpemVEaWNbcHJvcHMuZ2V0KDEwLCAxKV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChwcm9wcy5nZXQoMTAsIDIpICE9IDIpIHtcclxuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlci5kZXB0aE1hcFNpemUgPSB0aGlzLl9kZXB0aFNpemVEaWNbcHJvcHMuZ2V0KDEwLCAyKV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsaWdodC5zaGFkb3dNYXBwZXIgPSBuZXdTaGFkb3dNYXBwZXI7XHJcblx0XHRcdGxpZ2h0LmNhc3RzU2hhZG93cyA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHBhcl9pZCAhPSAwKSB7XHJcblxyXG5cdFx0XHR2YXIgcmV0dXJuZWRBcnJheVBhcmVudDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pXHJcblxyXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVBhcmVudFswXSkge1xyXG5cdFx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVBhcmVudFsxXSkuYWRkQ2hpbGQobGlnaHQpO1xyXG5cdFx0XHRcdHBhcmVudE5hbWUgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV0pLm5hbWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwYXJlbnQgZm9yIHRoaXMgTGlnaHRcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XHJcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGxpZ2h0KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8IElBc3NldD4gbGlnaHQsIG5hbWUpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbGlnaHQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIExpZ2h0OiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFR5cGUgPSBcIiArIGxpZ2h0VHlwZXNbbGlnaHRUeXBlXSArIFwiIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUgKyBcIiB8IFNoYWRvd01hcHBlci1UeXBlID0gXCIgKyBzaGFkb3dNYXBwZXJUeXBlc1tzaGFkb3dNYXBwZXJUeXBlXSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDQzXHJcblx0cHJpdmF0ZSBwYXJzZUNhbWVyYShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHJcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xyXG5cdFx0dmFyIHByb2plY3Rpb246UHJvamVjdGlvbkJhc2U7XHJcblxyXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7IC8vc2V0IGFzIGFjdGl2ZSBjYW1lcmFcclxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7IC8vbGVuZ3Rob2YgbGVuc2VzIC0gbm90IHVzZWQgeWV0XHJcblxyXG5cdFx0dmFyIHByb2plY3Rpb250eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxMDE6dGhpcy5fcHJvcHNOclR5cGUsIDEwMjp0aGlzLl9wcm9wc05yVHlwZSwgMTAzOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDQ6dGhpcy5fcHJvcHNOclR5cGV9KTtcclxuXHJcblx0XHRzd2l0Y2ggKHByb2plY3Rpb250eXBlKSB7XHJcblx0XHRcdGNhc2UgNTAwMTpcclxuXHRcdFx0XHRwcm9qZWN0aW9uID0gbmV3IFBlcnNwZWN0aXZlUHJvamVjdGlvbihwcm9wcy5nZXQoMTAxLCA2MCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDUwMDI6XHJcblx0XHRcdFx0cHJvamVjdGlvbiA9IG5ldyBPcnRob2dyYXBoaWNQcm9qZWN0aW9uKHByb3BzLmdldCgxMDEsIDUwMCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDUwMDM6XHJcblx0XHRcdFx0cHJvamVjdGlvbiA9IG5ldyBPcnRob2dyYXBoaWNPZmZDZW50ZXJQcm9qZWN0aW9uKHByb3BzLmdldCgxMDEsIC00MDApLCBwcm9wcy5nZXQoMTAyLCA0MDApLCBwcm9wcy5nZXQoMTAzLCAtMzAwKSwgcHJvcHMuZ2V0KDEwNCwgMzAwKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ1bnN1cHBvcnRlZExlbnN0eXBlXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgY2FtZXJhOkNhbWVyYSA9IG5ldyBDYW1lcmEocHJvamVjdGlvbik7XHJcblx0XHRjYW1lcmEudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcclxuXHJcblx0XHRpZiAocmV0dXJuZWRBcnJheVBhcmVudFswXSkge1xyXG5cclxuXHRcdFx0dmFyIG9iakM6RGlzcGxheU9iamVjdENvbnRhaW5lciA9IDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdO1xyXG5cdFx0XHRvYmpDLmFkZENoaWxkKGNhbWVyYSk7XHJcblxyXG5cdFx0XHRwYXJlbnROYW1lID0gb2JqQy5uYW1lO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAocGFyX2lkID4gMCkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBDYW1lcmFcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChjYW1lcmEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhbWVyYS5uYW1lID0gbmFtZTtcclxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4fSk7XHJcblx0XHRjYW1lcmEucGl2b3QgPSBuZXcgVmVjdG9yM0QocHJvcHMuZ2V0KDEsIDApLCBwcm9wcy5nZXQoMiwgMCksIHByb3BzLmdldCgzLCAwKSk7XHJcblx0XHRjYW1lcmEuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChjYW1lcmEsIG5hbWUpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY2FtZXJhXHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQ2FtZXJhOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFByb2plY3Rpb250eXBlID0gXCIgKyBwcm9qZWN0aW9uICsgXCIgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDUxXHJcblx0cHJpdmF0ZSBwYXJzZUxpZ2h0UGlja2VyKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIG51bUxpZ2h0czpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgbGlnaHRzQXJyYXk6QXJyYXk8TGlnaHRCYXNlPiA9IG5ldyBBcnJheTxMaWdodEJhc2U+KCk7XHJcblx0XHR2YXIgazpudW1iZXIgPSAwO1xyXG5cdFx0dmFyIGxpZ2h0SUQ6bnVtYmVyID0gMDtcclxuXHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheUxpZ2h0OkFycmF5PGFueT47XHJcblx0XHR2YXIgbGlnaHRzQXJyYXlOYW1lczpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHJcblx0XHRmb3IgKGsgPSAwOyBrIDwgbnVtTGlnaHRzOyBrKyspIHtcclxuXHRcdFx0bGlnaHRJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHJldHVybmVkQXJyYXlMaWdodCA9IHRoaXMuZ2V0QXNzZXRCeUlEKGxpZ2h0SUQsIFtBc3NldFR5cGUuTElHSFRdKVxyXG5cclxuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlMaWdodFswXSkge1xyXG5cdFx0XHRcdGxpZ2h0c0FycmF5LnB1c2goPExpZ2h0QmFzZT4gcmV0dXJuZWRBcnJheUxpZ2h0WzFdKTtcclxuXHRcdFx0XHRsaWdodHNBcnJheU5hbWVzLnB1c2goKCA8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5TGlnaHRbMV0pLm5hbWUpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIExpZ2h0IE5yIFwiICsgayArIFwiIChJRCA9IFwiICsgbGlnaHRJRCArIFwiICkgZm9yIHRoaXMgTGlnaHRQaWNrZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobGlnaHRzQXJyYXkubGVuZ3RoID09IDApIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSB0aGlzIExpZ2h0UGlja2VyLCBjYXVzZSBubyBMaWdodCB3YXMgZm91bmQuXCIpO1xyXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdFx0cmV0dXJuOyAvL3JldHVybiB3aXRob3V0IGFueSBtb3JlIHBhcnNpbmcgZm9yIHRoaXMgYmxvY2tcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbGlnaHRQaWNrOkxpZ2h0UGlja2VyQmFzZSA9IG5ldyBTdGF0aWNMaWdodFBpY2tlcihsaWdodHNBcnJheSk7XHJcblx0XHRsaWdodFBpY2submFtZSA9IG5hbWU7XHJcblxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBsaWdodFBpY2ssIG5hbWUpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbGlnaHRQaWNrXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTdGF0aWNMaWdodFBpY2tlcjogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIGxpZ2h0c0FycmF5TmFtZXMudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gODFcclxuXHRwcml2YXRlIHBhcnNlTWF0ZXJpYWwoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHQvLyBUT0RPOiBub3QgdXNlZFxyXG5cdFx0Ly8vL2Jsb2NrTGVuZ3RoID0gYmxvY2subGVuO1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nO1xyXG5cdFx0dmFyIHR5cGU6bnVtYmVyO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXM7XHJcblx0XHR2YXIgbWF0Ok1ldGhvZE1hdGVyaWFsO1xyXG5cdFx0dmFyIGF0dHJpYnV0ZXM6T2JqZWN0O1xyXG5cdFx0dmFyIGZpbmFsaXplOmJvb2xlYW47XHJcblx0XHR2YXIgbnVtX21ldGhvZHM6bnVtYmVyO1xyXG5cdFx0dmFyIG1ldGhvZHNfcGFyc2VkOm51bWJlcjtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XHJcblxyXG5cdFx0bmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdG51bV9tZXRob2RzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblxyXG5cdFx0Ly8gUmVhZCBtYXRlcmlhbCBudW1lcmljYWwgcHJvcGVydGllc1xyXG5cdFx0Ly8gKDE9Y29sb3IsIDI9Yml0bWFwIHVybCwgMTA9YWxwaGEsIDExPWFscGhhX2JsZW5kaW5nLCAxMj1hbHBoYV90aHJlc2hvbGQsIDEzPXJlcGVhdClcclxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoeyAxOkFXRFBhcnNlci5JTlQzMiwgMjpBV0RQYXJzZXIuQkFERFIsIDEwOnRoaXMuX3Byb3BzTnJUeXBlLCAxMTpBV0RQYXJzZXIuQk9PTCwgMTI6dGhpcy5fcHJvcHNOclR5cGUsIDEzOkFXRFBhcnNlci5CT09MfSk7XHJcblxyXG5cdFx0bWV0aG9kc19wYXJzZWQgPSAwO1xyXG5cdFx0d2hpbGUgKG1ldGhvZHNfcGFyc2VkIDwgbnVtX21ldGhvZHMpIHtcclxuXHRcdFx0dmFyIG1ldGhvZF90eXBlOm51bWJlcjtcclxuXHJcblx0XHRcdG1ldGhvZF90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRcdG1ldGhvZHNfcGFyc2VkICs9IDE7XHJcblx0XHR9XHJcblx0XHR2YXIgZGVidWdTdHJpbmc6c3RyaW5nID0gXCJcIjtcclxuXHRcdGF0dHJpYnV0ZXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdGlmICh0eXBlID09PSAxKSB7IC8vIENvbG9yIG1hdGVyaWFsXHJcblx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBcIjtcclxuXHRcdFx0dmFyIGNvbG9yOm51bWJlcjtcclxuXHRcdFx0Y29sb3IgPSBwcm9wcy5nZXQoMSwgMHhmZmZmZmYpO1xyXG5cdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPCAyKSB7XHJcblx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yLCBwcm9wcy5nZXQoMTAsIDEuMCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvcik7XHJcblx0XHRcdFx0bWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0eXBlID09PSAyKSB7XHJcblx0XHRcdHZhciB0ZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMiwgMCk7XHJcblxyXG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHRleF9hZGRyID4gMCkpXHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIERpZmZzdWVUZXh0dXJlIChJRCA9IFwiICsgdGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xyXG5cclxuXHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA8IDIpIHtcclxuXHRcdFx0XHRtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xyXG5cdFx0XHRcdG1hdC5hbHBoYSA9IHByb3BzLmdldCgxMCwgMS4wKTtcclxuXHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIE1ldGhvZE1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgbWF0Lm5hbWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcclxuXHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIE1ldGhvZE1hdGVyaWFsKE11bHRpUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyBtYXQubmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdG1hdC5leHRyYSA9IGF0dHJpYnV0ZXM7XHJcblx0XHRtYXQuYWxwaGFUaHJlc2hvbGQgPSBwcm9wcy5nZXQoMTIsIDAuMCk7XHJcblx0XHRtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtYXQsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBtYXQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRlYnVnU3RyaW5nKTtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBCbG9jayBJRCA9IDgxIEFXRDIuMVxyXG5cdHByaXZhdGUgcGFyc2VNYXRlcmlhbF92MShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBtYXQ6TWV0aG9kTWF0ZXJpYWw7XHJcblx0XHR2YXIgbm9ybWFsVGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xyXG5cdFx0dmFyIHNwZWNUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG5cclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dmFyIG51bV9tZXRob2RzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDQ6QVdEUGFyc2VyLlVJTlQ4LCA1OkFXRFBhcnNlci5CT09MLCA2OkFXRFBhcnNlci5CT09MLCA3OkFXRFBhcnNlci5CT09MLCA4OkFXRFBhcnNlci5CT09MLCA5OkFXRFBhcnNlci5VSU5UOCwgMTA6dGhpcy5fcHJvcHNOclR5cGUsIDExOkFXRFBhcnNlci5CT09MLCAxMjp0aGlzLl9wcm9wc05yVHlwZSwgMTM6QVdEUGFyc2VyLkJPT0wsIDE1OnRoaXMuX3Byb3BzTnJUeXBlLCAxNjpBV0RQYXJzZXIuVUlOVDMyLCAxNzpBV0RQYXJzZXIuQkFERFIsIDE4OnRoaXMuX3Byb3BzTnJUeXBlLCAxOTp0aGlzLl9wcm9wc05yVHlwZSwgMjA6QVdEUGFyc2VyLlVJTlQzMiwgMjE6QVdEUGFyc2VyLkJBRERSLCAyMjpBV0RQYXJzZXIuQkFERFJ9KTtcclxuXHRcdHZhciBzcGV6aWFsVHlwZTpudW1iZXIgPSBwcm9wcy5nZXQoNCwgMCk7XHJcblx0XHR2YXIgZGVidWdTdHJpbmc6c3RyaW5nID0gXCJcIjtcclxuXHJcblx0XHRpZiAoc3BlemlhbFR5cGUgPj0gMikgey8vdGhpcyBpcyBubyBzdXBwb3J0ZWQgbWF0ZXJpYWxcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiTWF0ZXJpYWwtc3BlemlhbFR5cGUgJ1wiICsgc3BlemlhbFR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCwgY2FuIG9ubHkgYmUgMDpzaW5nbGVQYXNzLCAxOk11bHRpUGFzcyAhXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlID09IDEpXHJcblx0XHRcdHNwZXppYWxUeXBlID0gMDtcclxuXHRcdGVsc2UgaWYgKHRoaXMubWF0ZXJpYWxNb2RlID09IDIpXHJcblx0XHRcdHNwZXppYWxUeXBlID0gMTtcclxuXHJcblx0XHRpZiAoc3BlemlhbFR5cGUgPCAyKSB7Ly90aGlzIGlzIFNpbmdsZVBhc3Mgb3IgTXVsdGlQYXNzXHJcblxyXG5cdFx0XHRpZiAodHlwZSA9PSAxKSB7Ly8gQ29sb3IgbWF0ZXJpYWxcclxuXHRcdFx0XHR2YXIgY29sb3I6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDB4Y2NjY2NjKTsvL1RPRE8gdGVtcG9yYXJpbHkgc3dhcHBlZCBzbyB0aGF0IGRpZmZ1c2UgY29sb3IgZ29lcyB0byBhbWJpZW50XHJcblxyXG5cdFx0XHRcdGlmIChzcGV6aWFsVHlwZSA9PSAxKSB7Ly9cdE11bHRpUGFzc01hdGVyaWFsXHJcblx0XHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IpO1xyXG5cdFx0XHRcdFx0bWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcclxuXHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgeyAvL1x0U2luZ2xlUGFzc01hdGVyaWFsXHJcblx0XHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IsIHByb3BzLmdldCgxMCwgMS4wKSk7XHJcblx0XHRcdFx0XHRtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBDb2xvck1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PSAyKSB7Ly8gdGV4dHVyZSBtYXRlcmlhbFxyXG5cdFx0XHRcdHZhciB0ZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMiwgMCk7Ly9UT0RPIHRlbXBvcmFyaWx5IHN3YXBwZWQgc28gdGhhdCBkaWZmdXNlIHRleHR1cmUgZ29lcyB0byBhbWJpZW50XHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHJcblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHRleF9hZGRyID4gMCkpXHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQW1iaWVudFRleHR1cmUgKElEID0gXCIgKyB0ZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcblxyXG5cdFx0XHRcdHZhciB0ZXh0dXJlOlRleHR1cmUyREJhc2UgPSByZXR1cm5lZEFycmF5WzFdO1xyXG5cclxuXHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwodGV4dHVyZSk7XHJcblxyXG5cdFx0XHRcdGlmIChzcGV6aWFsVHlwZSA9PSAxKSB7Ly8gTXVsdGlQYXNzTWF0ZXJpYWxcclxuXHRcdFx0XHRcdG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcblxyXG5cdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgdGV4dHVyZS5uYW1lO1xyXG5cdFx0XHRcdH0gZWxzZSB7Ly9cdFNpbmdsZVBhc3NNYXRlcmlhbFxyXG5cdFx0XHRcdFx0bWF0LmFscGhhID0gcHJvcHMuZ2V0KDEwLCAxLjApO1xyXG5cdFx0XHRcdFx0bWF0LmFscGhhQmxlbmRpbmcgPSBwcm9wcy5nZXQoMTEsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIE1ldGhvZE1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgdGV4dHVyZS5uYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGRpZmZ1c2VUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcblx0XHRcdHZhciBkaWZmdXNlVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDE3LCAwKTtcclxuXHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChkaWZmdXNlVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKGRpZmZ1c2VUZXhfYWRkciAhPSAwKSkge1xyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBEaWZmdXNlVGV4dHVyZSAoSUQgPSBcIiArIGRpZmZ1c2VUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdGRpZmZ1c2VUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHJcblx0XHRcdGlmIChkaWZmdXNlVGV4dHVyZSkge1xyXG5cdFx0XHRcdG1hdC5kaWZmdXNlVGV4dHVyZSA9IGRpZmZ1c2VUZXh0dXJlO1xyXG5cdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVRleHR1cmUtTmFtZSA9IFwiICsgZGlmZnVzZVRleHR1cmUubmFtZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG5vcm1hbFRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgzLCAwKTtcclxuXHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChub3JtYWxUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAobm9ybWFsVGV4X2FkZHIgIT0gMCkpIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTm9ybWFsVGV4dHVyZSAoSUQgPSBcIiArIG5vcm1hbFRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRub3JtYWxUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IE5vcm1hbFRleHR1cmUtTmFtZSA9IFwiICsgbm9ybWFsVGV4dHVyZS5uYW1lO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgc3BlY1RleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyMSwgMCk7XHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChzcGVjVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHNwZWNUZXhfYWRkciAhPSAwKSkge1xyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTcGVjdWxhclRleHR1cmUgKElEID0gXCIgKyBzcGVjVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdFx0c3BlY1RleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJUZXh0dXJlLU5hbWUgPSBcIiArIHNwZWNUZXh0dXJlLm5hbWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBsaWdodFBpY2tlckFkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIyLCAwKTtcclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGxpZ2h0UGlja2VyQWRkciwgW0Fzc2V0VHlwZS5MSUdIVF9QSUNLRVJdKVxyXG5cclxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKGxpZ2h0UGlja2VyQWRkcikpIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTGlnaHRQaWNrZXIgKElEID0gXCIgKyBsaWdodFBpY2tlckFkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG1hdC5saWdodFBpY2tlciA9IDxMaWdodFBpY2tlckJhc2U+IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0Ly9kZWJ1Z1N0cmluZys9XCIgfCBMaWdodHBpY2tlci1OYW1lID0gXCIrTGlnaHRQaWNrZXJCYXNlKHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hdC5zbW9vdGggPSBwcm9wcy5nZXQoNSwgdHJ1ZSk7XHJcblx0XHRcdG1hdC5taXBtYXAgPSBwcm9wcy5nZXQoNiwgdHJ1ZSk7XHJcblx0XHRcdG1hdC5ib3RoU2lkZXMgPSBwcm9wcy5nZXQoNywgZmFsc2UpO1xyXG5cdFx0XHRtYXQuYWxwaGFQcmVtdWx0aXBsaWVkID0gcHJvcHMuZ2V0KDgsIGZhbHNlKTtcclxuXHRcdFx0bWF0LmJsZW5kTW9kZSA9IHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg5LCAwKV07XHJcblx0XHRcdG1hdC5yZXBlYXQgPSBwcm9wcy5nZXQoMTMsIGZhbHNlKTtcclxuXHJcblx0XHRcdGlmIChub3JtYWxUZXh0dXJlKVxyXG5cdFx0XHRcdG1hdC5ub3JtYWxNYXAgPSBub3JtYWxUZXh0dXJlO1xyXG5cclxuXHRcdFx0aWYgKHNwZWNUZXh0dXJlKVxyXG5cdFx0XHRcdG1hdC5zcGVjdWxhck1hcCA9IHNwZWNUZXh0dXJlO1xyXG5cclxuXHRcdFx0bWF0LmFscGhhVGhyZXNob2xkID0gcHJvcHMuZ2V0KDEyLCAwLjApO1xyXG5cdFx0XHRtYXQuYW1iaWVudCA9IHByb3BzLmdldCgxNSwgMS4wKTtcclxuXHRcdFx0bWF0LmRpZmZ1c2VDb2xvciA9IHByb3BzLmdldCgxNiwgMHhmZmZmZmYpO1xyXG5cdFx0XHRtYXQuc3BlY3VsYXIgPSBwcm9wcy5nZXQoMTgsIDEuMCk7XHJcblx0XHRcdG1hdC5nbG9zcyA9IHByb3BzLmdldCgxOSwgNTApO1xyXG5cdFx0XHRtYXQuc3BlY3VsYXJDb2xvciA9IHByb3BzLmdldCgyMCwgMHhmZmZmZmYpO1xyXG5cclxuXHRcdFx0dmFyIG1ldGhvZHNfcGFyc2VkOm51bWJlciA9IDA7XHJcblx0XHRcdHZhciB0YXJnZXRJRDpudW1iZXI7XHJcblxyXG5cdFx0XHR3aGlsZSAobWV0aG9kc19wYXJzZWQgPCBudW1fbWV0aG9kcykge1xyXG5cdFx0XHRcdHZhciBtZXRob2RfdHlwZTpudW1iZXI7XHJcblx0XHRcdFx0bWV0aG9kX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0XHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTCwgODAxOkFXRFBhcnNlci5NVFg0eDR9KTtcclxuXHJcblx0XHRcdFx0c3dpdGNoIChtZXRob2RfdHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSA5OTk6IC8vd3JhcHBlci1NZXRob2RzIHRoYXQgd2lsbCBsb2FkIGEgcHJldmlvdXMgcGFyc2VkIEVmZmVrdE1ldGhvZCByZXR1cm5lZFxyXG5cclxuXHRcdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5FRkZFQ1RTX01FVEhPRF0pO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVmZmVjdE1ldGhvZCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBNYXRlcmlhbFwiKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRtYXQuYWRkRWZmZWN0TWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IEVmZmVjdE1ldGhvZC1OYW1lID0gXCIgKyAoPEVmZmVjdE1ldGhvZEJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgOTk4OiAvL3dyYXBwZXItTWV0aG9kcyB0aGF0IHdpbGwgbG9hZCBhIHByZXZpb3VzIHBhcnNlZCBTaGFkb3dNYXBNZXRob2RcclxuXHJcblx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTaGFkb3dNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bWF0LnNoYWRvd01ldGhvZCA9IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTaGFkb3dNZXRob2QtTmFtZSA9IFwiICsgKDxTaGFkb3dNZXRob2RCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDE6IC8vRW52TWFwQW1iaWVudE1ldGhvZFxyXG5cdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBBbWJpZW50TWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0XHRcdG1hdC5hbWJpZW50TWV0aG9kID0gbmV3IEFtYmllbnRFbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgQW1iaWVudEVudk1hcE1ldGhvZCB8IEVudk1hcC1OYW1lID1cIiArICg8Q3ViZVRleHR1cmVCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDUxOiAvL0RlcHRoRGlmZnVzZU1ldGhvZFxyXG5cdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlRGVwdGhNZXRob2QoKTtcclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlRGVwdGhNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDUyOiAvL0dyYWRpZW50RGlmZnVzZU1ldGhvZFxyXG5cdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBHcmFkaWVudERpZmZ1c2VUZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEdyYWRpZW50RGlmZnVzZU1ldGhvZFwiKTtcclxuXHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZUdyYWRpZW50TWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VHcmFkaWVudE1ldGhvZCB8IEdyYWRpZW50RGlmZnVzZVRleHR1cmUtTmFtZSA9XCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA1MzogLy9XcmFwRGlmZnVzZU1ldGhvZFxyXG5cdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlV3JhcE1ldGhvZChwcm9wcy5nZXQoMTAxLCA1KSk7XHJcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVdyYXBNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDU0OiAvL0xpZ2h0TWFwRGlmZnVzZU1ldGhvZFxyXG5cdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBMaWdodE1hcERpZmZ1c2VNZXRob2RcIik7XHJcblx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VMaWdodE1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCB0aGlzLmJsZW5kTW9kZURpY1twcm9wcy5nZXQoNDAxLCAxMCldLCBmYWxzZSwgbWF0LmRpZmZ1c2VNZXRob2QpO1xyXG5cdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VMaWdodE1hcE1ldGhvZCB8IExpZ2h0TWFwVGV4dHVyZS1OYW1lID1cIiArICg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDU1OiAvL0NlbERpZmZ1c2VNZXRob2RcclxuXHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZUNlbE1ldGhvZChwcm9wcy5nZXQoNDAxLCAzKSwgbWF0LmRpZmZ1c2VNZXRob2QpO1xyXG5cdFx0XHRcdFx0XHQoPERpZmZ1c2VDZWxNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zbW9vdGhuZXNzID0gcHJvcHMuZ2V0KDEwMSwgMC4xKTtcclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlQ2VsTWV0aG9kXCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSA1NjogLy9TdWJTdXJmYWNlU2NhdHRlcmluZ01ldGhvZFxyXG4vL1x0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZVN1YlN1cmZhY2VNZXRob2QoKTsgLy9kZXB0aE1hcFNpemUgYW5kIGRlcHRoTWFwT2Zmc2V0ID9cclxuLy9cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZVN1YlN1cmZhY2VNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zY2F0dGVyaW5nID0gcHJvcHMuZ2V0KDEwMSwgMC4yKTtcclxuLy9cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZVN1YlN1cmZhY2VNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS50cmFuc2x1Y2VuY3kgPSBwcm9wcy5nZXQoMTAyLCAxKTtcclxuLy9cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZVN1YlN1cmZhY2VNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zY2F0dGVyQ29sb3IgPSBwcm9wcy5nZXQoNjAxLCAweGZmZmZmZik7XHJcbi8vXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kXCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgMTAxOiAvL0FuaXNvdHJvcGljU3BlY3VsYXJNZXRob2RcclxuXHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyQW5pc290cm9waWNNZXRob2QoKTtcclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kXCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAxMDI6IC8vU3BlY3VsYXJQaG9uZ01ldGhvZFxyXG5cdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJQaG9uZ01ldGhvZCgpO1xyXG5cdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyUGhvbmdNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDEwMzogLy9DZWxsU3BlY3VsYXJNZXRob2RcclxuXHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyQ2VsTWV0aG9kKHByb3BzLmdldCgxMDEsIDAuNSksIG1hdC5zcGVjdWxhck1ldGhvZCk7XHJcblx0XHRcdFx0XHRcdCg8U3BlY3VsYXJDZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkuc21vb3RobmVzcyA9IHByb3BzLmdldCgxMDIsIDAuMSk7XHJcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJDZWxNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDEwNDogLy9TcGVjdWxhckZyZXNuZWxNZXRob2RcclxuXHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyRnJlc25lbE1ldGhvZChwcm9wcy5nZXQoNzAxLCB0cnVlKSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcclxuXHRcdFx0XHRcdFx0KDxTcGVjdWxhckZyZXNuZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkuZnJlc25lbFBvd2VyID0gcHJvcHMuZ2V0KDEwMSwgNSk7XHJcblx0XHRcdFx0XHRcdCg8U3BlY3VsYXJGcmVzbmVsTWV0aG9kPiBtYXQuc3BlY3VsYXJNZXRob2QpLm5vcm1hbFJlZmxlY3RhbmNlID0gcHJvcHMuZ2V0KDEwMiwgMC4xKTtcclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckZyZXNuZWxNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIDE1MTovL0hlaWdodE1hcE5vcm1hbE1ldGhvZCAtIHRoaW9zIGlzIG5vdCBpbXBsZW1lbnRlZCBmb3Igbm93LCBidXQgbWlnaHQgYXBwZWFyIGxhdGVyXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAxNTI6IC8vU2ltcGxlV2F0ZXJOb3JtYWxNZXRob2RcclxuXHRcdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2Vjb3VuZE5vcm1hbE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBTaW1wbGVXYXRlck5vcm1hbE1ldGhvZFwiKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFtYXQubm9ybWFsTWFwKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgbm9ybWFsIE1hcCBvbiB0aGlzIE1hdGVyaWFsIHRvIHVzZSB3aXRoIHRoaXMgU2ltcGxlV2F0ZXJOb3JtYWxNZXRob2RcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRtYXQubm9ybWFsTWFwID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHRcdFx0bWF0Lm5vcm1hbE1ldGhvZCA9IG5ldyBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZChtYXQubm9ybWFsTWFwLCByZXR1cm5lZEFycmF5WzFdKTtcclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZCB8IFNlY29uZC1Ob3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArICg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0XHRcdG1ldGhvZHNfcGFyc2VkICs9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdG1hdC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkZWJ1Z1N0cmluZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gODJcclxuXHRwcml2YXRlIHBhcnNlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHJcblx0XHR2YXIgYXNzZXQ6VGV4dHVyZTJEQmFzZTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XHJcblxyXG5cdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcclxuXHJcblx0XHQvLyBFeHRlcm5hbFxyXG5cdFx0aWYgKHR5cGUgPT0gMCkge1xyXG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHZhciB1cmw6c3RyaW5nO1xyXG5cdFx0XHR1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XHJcblx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBuZXcgVVJMUmVxdWVzdCh1cmwpLCBmYWxzZSwgbnVsbCwgdHJ1ZSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdFx0dmFyIGRhdGE6Qnl0ZUFycmF5O1xyXG5cdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBBV0RQYXJzZXIgLSBGaXggZm9yIEZpcmVGb3ggQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MTUwNzUgLlxyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBDb252ZXJ0aW5nIGRhdGEgdG8gaW1hZ2UgaGVyZSBpbnN0ZWFkIG9mIHBhcnNlciAtIGZpeCBGaXJlRm94IGJ1ZyB3aGVyZSBpbWFnZSB3aWR0aCAvIGhlaWdodCBpcyAwIHdoZW4gY3JlYXRlZCBmcm9tIGRhdGFcclxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB0aGUgYnJvd3NlciB0aW1lIHRvIGluaXRpYWxpc2UgaW1hZ2Ugd2lkdGggLyBoZWlnaHQuXHJcblxyXG5cdFx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbnVsbCwgZmFsc2UsIFBhcnNlclV0aWxzLmJ5dGVBcnJheVRvSW1hZ2UoZGF0YSksIHRydWUpO1xyXG5cdFx0XHQvL3RoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElnbm9yZSBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHR2YXIgdGV4dHVyZVN0eWxlc05hbWVzOkFycmF5PHN0cmluZz4gPSBbXCJleHRlcm5hbFwiLCBcImVtYmVkXCJdXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyBhIFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQml0bWFwIGZvciBUZXh0dXJlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA4M1xyXG5cdHByaXZhdGUgcGFyc2VDdWJlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdC8vYmxvY2tMZW5ndGggPSBibG9jay5sZW47XHJcblx0XHR2YXIgZGF0YV9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIGFzc2V0OkN1YmVUZXh0dXJlQmFzZTtcclxuXHRcdHZhciBpOm51bWJlcjtcclxuXHJcblx0XHR0aGlzLl9jdWJlVGV4dHVyZXMgPSBuZXcgQXJyYXk8YW55PigpO1xyXG5cdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1sgdGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgXSA9IFtdO1xyXG5cclxuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuXHRcdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcclxuXHRcdFx0dGhpcy5fY3ViZVRleHR1cmVzLnB1c2gobnVsbCk7XHJcblxyXG5cdFx0XHQvLyBFeHRlcm5hbFxyXG5cdFx0XHRpZiAodHlwZSA9PSAwKSB7XHJcblx0XHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHZhciB1cmw6c3RyaW5nO1xyXG5cdFx0XHRcdHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcclxuXHJcblx0XHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgKyBcIiNcIiArIGksIG5ldyBVUkxSZXF1ZXN0KHVybCksIGZhbHNlLCBudWxsLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHZhciBkYXRhOkJ5dGVBcnJheTtcclxuXHRcdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG5cdFx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpICsgXCIjXCIgKyBpLCBudWxsLCBmYWxzZSwgUGFyc2VyVXRpbHMuYnl0ZUFycmF5VG9JbWFnZShkYXRhKSwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBJZ25vcmUgZm9yIG5vd1xyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZXh0cmFzID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0dmFyIHRleHR1cmVTdHlsZXNOYW1lczpBcnJheTxzdHJpbmc+ID0gW1wiZXh0ZXJuYWxcIiwgXCJlbWJlZFwiXVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0IHBhcnNpbmcgNiBcIiArIHRleHR1cmVTdHlsZXNOYW1lc1t0eXBlXSArIFwiIEJpdG1hcHMgZm9yIEN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDkxXHJcblx0cHJpdmF0ZSBwYXJzZVNoYXJlZE1ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGFzc2V0OkVmZmVjdE1ldGhvZEJhc2U7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHRhc3NldCA9IHRoaXMucGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQpO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQsIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgRWZmZWN0TWV0aG9kOiBOYW1lID0gXCIgKyBhc3NldC5uYW1lICsgXCIgVHlwZSA9IFwiICsgYXNzZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDkyXHJcblx0cHJpdmF0ZSBwYXJzZVNoYWRvd01ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHR5cGU6bnVtYmVyO1xyXG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcclxuXHRcdHZhciBhc3NldDpTaGFkb3dNZXRob2RCYXNlO1xyXG5cdFx0dmFyIHNoYWRvd0xpZ2h0SUQ6bnVtYmVyO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0c2hhZG93TGlnaHRJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoc2hhZG93TGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pO1xyXG5cclxuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGFyZ2V0TGlnaHQgKElEID0gXCIgKyBzaGFkb3dMaWdodElEICsgXCIgKSBmb3IgdGhpcyBTaGFkb3dNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRhc3NldCA9IHRoaXMucGFyc2VTaGFkb3dNZXRob2RMaXN0KDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlbMV0sIGJsb2NrSUQpO1xyXG5cclxuXHRcdGlmICghYXNzZXQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIGZvciBub3dcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0LCB0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNoYWRvd01hcE1ldGhvZE1ldGhvZDogTmFtZSA9IFwiICsgYXNzZXQubmFtZSArIFwiIHwgVHlwZSA9IFwiICsgYXNzZXQgKyBcIiB8IExpZ2h0LU5hbWUgPSBcIiwgKCA8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5WzFdICkubmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly9CbG9jayBJRCA9IDI1M1xyXG5cdHByaXZhdGUgcGFyc2VDb21tYW5kKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGhhc0Jsb2Nrczpib29sZWFuID0gKCB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKSA9PSAxICk7XHJcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0dmFyIHBhcmVudE9iamVjdDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cdFx0dmFyIHRhcmdldE9iamVjdDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSk7XHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0cGFyZW50T2JqZWN0ID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG51bUNvbW1hbmRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XHJcblx0XHR2YXIgdHlwZUNvbW1hbmQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuXHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUn0pO1xyXG5cclxuXHRcdHN3aXRjaCAodHlwZUNvbW1hbmQpIHtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cclxuXHRcdFx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdHZhciByZXR1cm5lZEFycmF5VGFyZ2V0OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLlRFWFRVUkVfUFJPSkVDVE9SXSk7IC8vZm9yIG5vIG9ubHkgbGlnaHQgaXMgcmVxdWVzdGVkISEhIVxyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5VGFyZ2V0WzBdKSAmJiAodGFyZ2V0SUQgIT0gMCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBsaWdodCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKCBmb3IgdGhpcyBDb21tYW5kQm9jayFcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0YXJnZXRPYmplY3QgPSByZXR1cm5lZEFycmF5VGFyZ2V0WzFdO1xyXG5cclxuXHRcdFx0XHRpZiAocGFyZW50T2JqZWN0KSB7XHJcblx0XHRcdFx0XHRwYXJlbnRPYmplY3QuYWRkQ2hpbGQodGFyZ2V0T2JqZWN0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRhcmdldE9iamVjdC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0YXJnZXRPYmplY3QpIHtcclxuXHRcdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcclxuXHJcblx0XHRcdHRhcmdldE9iamVjdC5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcclxuXHRcdFx0dGFyZ2V0T2JqZWN0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0YXJnZXRPYmplY3RcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDb21tYW5kQmxvY2s6IE5hbWUgPSAnXCIgKyBuYW1lKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvL2Jsb2NrSUQgMjU1XHJcblx0cHJpdmF0ZSBwYXJzZU1ldGFEYXRhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyLCAyOkFXRFBhcnNlci5BV0RTVFJJTkcsIDM6QVdEUGFyc2VyLkFXRFNUUklORywgNDpBV0RQYXJzZXIuQVdEU1RSSU5HLCA1OkFXRFBhcnNlci5BV0RTVFJJTkd9KTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBNZXRhRGF0YUJsb2NrOiBUaW1lU3RhbXAgICAgICAgICA9IFwiICsgcHJvcHMuZ2V0KDEsIDApKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBFbmNvZGVyTmFtZSAgICAgICA9IFwiICsgcHJvcHMuZ2V0KDIsIFwidW5rbm93blwiKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgRW5jb2RlclZlcnNpb24gICAgPSBcIiArIHByb3BzLmdldCgzLCBcInVua25vd25cIikpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRvck5hbWUgICAgID0gXCIgKyBwcm9wcy5nZXQoNCwgXCJ1bmtub3duXCIpKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0b3JWZXJzaW9uICA9IFwiICsgcHJvcHMuZ2V0KDUsIFwidW5rbm93blwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL2Jsb2NrSUQgMjU0XHJcblx0cHJpdmF0ZSBwYXJzZU5hbWVTcGFjZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBpZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBuYW1lU3BhY2VTdHJpbmc6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE5hbWVTcGFjZUJsb2NrOiBJRCA9IFwiICsgaWQgKyBcIiB8IFN0cmluZyA9IFwiICsgbmFtZVNwYWNlU3RyaW5nKTtcclxuXHR9XHJcblxyXG5cdC8vLS1QYXJzZXIgVVRJTFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbnMgcmVhZHMgYW5kIGNyZWF0ZXMgYSBTaGFkb3dNZXRob2RNZXRob2RcclxuXHRwcml2YXRlIHBhcnNlU2hhZG93TWV0aG9kTGlzdChsaWdodDpMaWdodEJhc2UsIGJsb2NrSUQ6bnVtYmVyKTpTaGFkb3dNZXRob2RCYXNlXHJcblx0e1xyXG5cclxuXHRcdHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBzaGFkb3dNZXRob2Q6U2hhZG93TWV0aG9kQmFzZTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTCwgODAxOkFXRFBhcnNlci5NVFg0eDR9KTtcclxuXHJcblx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PlxyXG5cdFx0c3dpdGNoIChtZXRob2RUeXBlKSB7XHJcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDEwMDE6IC8vQ2FzY2FkZVNoYWRvd01hcE1ldGhvZFxyXG5cdFx0XHQvL1x0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IGdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5TSEFET1dfTUFQX01FVEhPRF0pO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRfYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNoYWRvd0Jhc2VNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgQ2FzY2FkZVNoYWRvd01hcE1ldGhvZCAtIFNoYWRvd01ldGhvZCBub3QgY3JlYXRlZFwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHR9XHJcblx0XHRcdC8vXHRcdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBDYXNjYWRlU2hhZG93TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAxMDAyOiAvL1NoYWRvd05lYXJNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTaGFkb3dCYXNlTWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFNoYWRvd05lYXJNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93TmVhck1ldGhvZCg8U2hhZG93TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTEwMTogLy9TaGFkb3dGaWx0ZXJlZE1ldGhvZFxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RmlsdGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0KTtcclxuXHRcdFx0XHQoPFNoYWRvd0ZpbHRlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XHJcblx0XHRcdFx0KDxTaGFkb3dGaWx0ZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAxMTAyOiAvL1NoYWRvd0RpdGhlcmVkTWV0aG9kXHJcblxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RGl0aGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0LCA8bnVtYmVyPiBwcm9wcy5nZXQoMjAxLCA1KSk7XHJcblx0XHRcdFx0KDxTaGFkb3dEaXRoZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG5cdFx0XHRcdCg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcclxuXHRcdFx0XHQoPFNoYWRvd0RpdGhlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLnJhbmdlID0gcHJvcHMuZ2V0KDEwMywgMSk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDExMDM6IC8vU2hhZG93U29mdE1ldGhvZFxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93U29mdE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQsIDxudW1iZXI+IHByb3BzLmdldCgyMDEsIDUpKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkucmFuZ2UgPSBwcm9wcy5nZXQoMTAzLCAxKTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTEwNDogLy9TaGFkb3dIYXJkTWV0aG9kXHJcblx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IFNoYWRvd0hhcmRNZXRob2QobGlnaHQpO1xyXG5cdFx0XHRcdCg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG5cdFx0XHRcdCg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0cmV0dXJuIHNoYWRvd01ldGhvZDtcclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgMTAxXHJcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIG51bV9qb2ludHM6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIHNrZWxldG9uOlNrZWxldG9uID0gbmV3IFNrZWxldG9uKCk7XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsgLy8gRGlzY2FyZCBwcm9wZXJ0aWVzIGZvciBub3dcdFx0XHJcblxyXG5cdFx0dmFyIGpvaW50c19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcclxuXHRcdHdoaWxlIChqb2ludHNfcGFyc2VkIDwgbnVtX2pvaW50cykge1xyXG5cdFx0XHR2YXIgam9pbnQ6U2tlbGV0b25Kb2ludDtcclxuXHRcdFx0dmFyIGlicDpNYXRyaXgzRDtcclxuXHRcdFx0Ly8gSWdub3JlIGpvaW50IGlkXHJcblx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0am9pbnQgPSBuZXcgU2tlbGV0b25Kb2ludCgpO1xyXG5cdFx0XHRqb2ludC5wYXJlbnRJbmRleCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSAtIDE7IC8vIDA9bnVsbCBpbiBBV0RcclxuXHRcdFx0am9pbnQubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHRcdGlicCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xyXG5cdFx0XHRqb2ludC5pbnZlcnNlQmluZFBvc2UgPSBpYnAucmF3RGF0YTtcclxuXHRcdFx0Ly8gSWdub3JlIGpvaW50IHByb3BzL2F0dHJpYnV0ZXMgZm9yIG5vd1xyXG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRcdHNrZWxldG9uLmpvaW50cy5wdXNoKGpvaW50KTtcclxuXHRcdFx0am9pbnRzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIERpc2NhcmQgYXR0cmlidXRlcyBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHNrZWxldG9uLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gc2tlbGV0b247XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b246IE5hbWUgPSBcIiArIHNrZWxldG9uLm5hbWUgKyBcIiB8IE51bWJlciBvZiBKb2ludHMgPSBcIiArIGpvaW50c19wYXJzZWQpO1xyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDEwMlxyXG5cdHByaXZhdGUgcGFyc2VTa2VsZXRvblBvc2UoYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbnVtX2pvaW50czpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsgLy8gSWdub3JlIHByb3BlcnRpZXMgZm9yIG5vd1xyXG5cclxuXHRcdHZhciBwb3NlOlNrZWxldG9uUG9zZSA9IG5ldyBTa2VsZXRvblBvc2UoKTtcclxuXHJcblx0XHR2YXIgam9pbnRzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xyXG5cdFx0d2hpbGUgKGpvaW50c19wYXJzZWQgPCBudW1fam9pbnRzKSB7XHJcblx0XHRcdHZhciBqb2ludF9wb3NlOkpvaW50UG9zZTtcclxuXHRcdFx0dmFyIGhhc190cmFuc2Zvcm06bnVtYmVyIC8qdWludCovO1xyXG5cdFx0XHRqb2ludF9wb3NlID0gbmV3IEpvaW50UG9zZSgpO1xyXG5cdFx0XHRoYXNfdHJhbnNmb3JtID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdGlmIChoYXNfdHJhbnNmb3JtID09IDEpIHtcclxuXHRcdFx0XHR2YXIgbXR4X2RhdGE6QXJyYXk8bnVtYmVyPiA9IHRoaXMucGFyc2VNYXRyaXg0M1Jhd0RhdGEoKTtcclxuXHJcblx0XHRcdFx0dmFyIG10eDpNYXRyaXgzRCA9IG5ldyBNYXRyaXgzRChtdHhfZGF0YSk7XHJcblx0XHRcdFx0am9pbnRfcG9zZS5vcmllbnRhdGlvbi5mcm9tTWF0cml4KG10eCk7XHJcblx0XHRcdFx0am9pbnRfcG9zZS50cmFuc2xhdGlvbi5jb3B5RnJvbShtdHgucG9zaXRpb24pO1xyXG5cclxuXHRcdFx0XHRwb3NlLmpvaW50UG9zZXNbam9pbnRzX3BhcnNlZF0gPSBqb2ludF9wb3NlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGpvaW50c19wYXJzZWQrKztcclxuXHRcdH1cclxuXHRcdC8vIFNraXAgYXR0cmlidXRlcyBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHBvc2UsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBwb3NlO1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uUG9zZTogTmFtZSA9IFwiICsgcG9zZS5uYW1lICsgXCIgfCBOdW1iZXIgb2YgSm9pbnRzID0gXCIgKyBqb2ludHNfcGFyc2VkKTtcclxuXHR9XHJcblxyXG5cdC8vYmxvY2tJRCAxMDNcclxuXHRwcml2YXRlIHBhcnNlU2tlbGV0b25BbmltYXRpb24oYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgZnJhbWVfZHVyOm51bWJlcjtcclxuXHRcdHZhciBwb3NlX2FkZHI6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIGNsaXA6U2tlbGV0b25DbGlwTm9kZSA9IG5ldyBTa2VsZXRvbkNsaXBOb2RlKCk7XHJcblx0XHR2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsgLy8gSWdub3JlIHByb3BlcnRpZXMgZm9yIG5vd1xyXG5cclxuXHRcdHZhciBmcmFtZXNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG5cdFx0d2hpbGUgKGZyYW1lc19wYXJzZWQgPCBudW1fZnJhbWVzKSB7XHJcblx0XHRcdHBvc2VfYWRkciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdGZyYW1lX2R1ciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBvc2VfYWRkciwgW0Fzc2V0VHlwZS5TS0VMRVRPTl9QT1NFXSk7XHJcblx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2tlbGV0b25Qb3NlIEZyYW1lICMgXCIgKyBmcmFtZXNfcGFyc2VkICsgXCIgKElEID0gXCIgKyBwb3NlX2FkZHIgKyBcIiApIGZvciB0aGlzIFNrZWxldG9uQ2xpcE5vZGVcIik7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjbGlwLmFkZEZyYW1lKDxTa2VsZXRvblBvc2U+IHRoaXMuX2Jsb2Nrc1twb3NlX2FkZHJdLmRhdGEsIGZyYW1lX2R1cik7XHJcblx0XHRcdGZyYW1lc19wYXJzZWQrKztcclxuXHRcdH1cclxuXHRcdGlmIChjbGlwLmZyYW1lcy5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgdGhpcyBTa2VsZXRvbkNsaXBOb2RlLCBiZWNhdXNlIG5vIEZyYW1lcyB3aGVyZSBzZXQuXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHQvLyBJZ25vcmUgYXR0cmlidXRlcyBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNsaXAsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjbGlwO1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uQ2xpcE5vZGU6IE5hbWUgPSBcIiArIGNsaXAubmFtZSArIFwiIHwgTnVtYmVyIG9mIEZyYW1lcyA9IFwiICsgY2xpcC5mcmFtZXMubGVuZ3RoKTtcclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSAxMTEgLyAgQmxvY2sgSUQgPSAxMTJcclxuXHRwcml2YXRlIHBhcnNlTWVzaFBvc2VBbmltYXRpb24oYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8sIHBvc2VPbmx5OmJvb2xlYW4gPSBmYWxzZSk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IDE7XHJcblx0XHR2YXIgbnVtX3N1Ym1lc2hlczpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgc3ViTWVzaFBhcnNlZDpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgZnJhbWVfZHVyOm51bWJlcjtcclxuXHRcdHZhciB4Om51bWJlcjtcclxuXHRcdHZhciB5Om51bWJlcjtcclxuXHRcdHZhciB6Om51bWJlcjtcclxuXHRcdHZhciBzdHJfbGVuOm51bWJlcjtcclxuXHRcdHZhciBzdHJfZW5kOm51bWJlcjtcclxuXHRcdHZhciBnZW9tZXRyeTpHZW9tZXRyeTtcclxuXHRcdHZhciBzdWJHZW9tOlRyaWFuZ2xlU3ViR2VvbWV0cnk7XHJcblx0XHR2YXIgaWR4Om51bWJlciAvKmludCovID0gMDtcclxuXHRcdHZhciBjbGlwOlZlcnRleENsaXBOb2RlID0gbmV3IFZlcnRleENsaXBOb2RlKCk7XHJcblx0XHR2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+IC8qdWludCovO1xyXG5cdFx0dmFyIHZlcnRzOkFycmF5PG51bWJlcj47XHJcblx0XHR2YXIgbnVtX1N0cmVhbXM6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cdFx0dmFyIHN0cmVhbXNQYXJzZWQ6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cdFx0dmFyIHN0cmVhbXR5cGVzOkFycmF5PG51bWJlcj4gLyppbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCkgLyppbnQqLztcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzO1xyXG5cdFx0dmFyIHRoaXNHZW86R2VvbWV0cnk7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgZ2VvQWRyZXNzOm51bWJlciAvKmludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChnZW9BZHJlc3MsIFtBc3NldFR5cGUuR0VPTUVUUlldKTtcclxuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgdGFyZ2V0LUdlb21ldHJ5LU9iamVjdCBcIiArIGdlb0FkcmVzcyArIFwiICkgZm9yIHRoaXMgVmVydGV4Q2xpcE5vZGVcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciB1dnM6QXJyYXk8QXJyYXk8bnVtYmVyPj4gPSB0aGlzLmdldFVWRm9yVmVydGV4QW5pbWF0aW9uKGdlb0FkcmVzcyk7XHJcblx0XHRpZiAoIXBvc2VPbmx5KVxyXG5cdFx0XHRudW1fZnJhbWVzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdG51bV9zdWJtZXNoZXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRudW1fU3RyZWFtcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHN0cmVhbXNQYXJzZWQgPSAwO1xyXG5cdFx0d2hpbGUgKHN0cmVhbXNQYXJzZWQgPCBudW1fU3RyZWFtcykge1xyXG5cdFx0XHRzdHJlYW10eXBlcy5wdXNoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSk7XHJcblx0XHRcdHN0cmVhbXNQYXJzZWQrKztcclxuXHRcdH1cclxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJPT0wsIDI6QVdEUGFyc2VyLkJPT0x9KTtcclxuXHJcblx0XHRjbGlwLmxvb3BpbmcgPSBwcm9wcy5nZXQoMSwgdHJ1ZSk7XHJcblx0XHRjbGlwLnN0aXRjaEZpbmFsRnJhbWUgPSBwcm9wcy5nZXQoMiwgZmFsc2UpO1xyXG5cclxuXHRcdGZyYW1lc19wYXJzZWQgPSAwO1xyXG5cdFx0d2hpbGUgKGZyYW1lc19wYXJzZWQgPCBudW1fZnJhbWVzKSB7XHJcblx0XHRcdGZyYW1lX2R1ciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoKTtcclxuXHRcdFx0c3ViTWVzaFBhcnNlZCA9IDA7XHJcblx0XHRcdHdoaWxlIChzdWJNZXNoUGFyc2VkIDwgbnVtX3N1Ym1lc2hlcykge1xyXG5cdFx0XHRcdHN0cmVhbXNQYXJzZWQgPSAwO1xyXG5cdFx0XHRcdHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHN0cl9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgc3RyX2xlbjtcclxuXHRcdFx0XHR3aGlsZSAoc3RyZWFtc1BhcnNlZCA8IG51bV9TdHJlYW1zKSB7XHJcblx0XHRcdFx0XHRpZiAoc3RyZWFtdHlwZXNbc3RyZWFtc1BhcnNlZF0gPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRpbmRpY2VzID0gKDxHZW9tZXRyeT4gcmV0dXJuZWRBcnJheVsxXSkuc3ViR2VvbWV0cmllc1tzdWJNZXNoUGFyc2VkXS5pbmRpY2VzO1xyXG5cdFx0XHRcdFx0XHR2ZXJ0cyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0XHRcdFx0XHRcdGlkeCA9IDA7XHJcblx0XHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cdFx0XHRcdFx0XHRcdHggPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pXHJcblx0XHRcdFx0XHRcdFx0eSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcclxuXHRcdFx0XHRcdFx0XHR6ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKVxyXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHg7XHJcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geTtcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB6O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20gPSBuZXcgVHJpYW5nbGVTdWJHZW9tZXRyeSh0cnVlKTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVJbmRpY2VzKGluZGljZXMpO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVBvc2l0aW9ucyh2ZXJ0cyk7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlVVZzKHV2c1tzdWJNZXNoUGFyc2VkXSk7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlVmVydGV4Tm9ybWFscyhudWxsKTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVWZXJ0ZXhUYW5nZW50cyhudWxsKTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS5hdXRvRGVyaXZlTm9ybWFscyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLmF1dG9EZXJpdmVUYW5nZW50cyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRzdWJNZXNoUGFyc2VkKys7XHJcblx0XHRcdFx0XHRcdGdlb21ldHJ5LmFkZFN1Ykdlb21ldHJ5KHN1Ykdlb20pXHJcblx0XHRcdFx0XHR9IGVsc2VcclxuXHRcdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XHJcblx0XHRcdFx0XHRzdHJlYW1zUGFyc2VkKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNsaXAuYWRkRnJhbWUoZ2VvbWV0cnksIGZyYW1lX2R1cik7XHJcblx0XHRcdGZyYW1lc19wYXJzZWQrKztcclxuXHRcdH1cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoY2xpcCwgbmFtZSk7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjbGlwO1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFZlcnRleENsaXBOb2RlOiBOYW1lID0gXCIgKyBjbGlwLm5hbWUgKyBcIiB8IFRhcmdldC1HZW9tZXRyeS1OYW1lID0gXCIgKyAoPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5WzFdKS5uYW1lICsgXCIgfCBOdW1iZXIgb2YgRnJhbWVzID0gXCIgKyBjbGlwLmZyYW1lcy5sZW5ndGgpO1xyXG5cdH1cclxuXHJcblx0Ly9CbG9ja0lEIDExM1xyXG5cdHByaXZhdGUgcGFyc2VWZXJ0ZXhBbmltYXRpb25TZXQoYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgcG9zZUJsb2NrQWRyZXNzOm51bWJlciAvKmludCovXHJcblx0XHR2YXIgb3V0cHV0U3RyaW5nOnN0cmluZyA9IFwiXCI7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMTZ9KTtcclxuXHRcdHZhciBmcmFtZXNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XHJcblx0XHR2YXIgc2tlbGV0b25GcmFtZXM6QXJyYXk8U2tlbGV0b25DbGlwTm9kZT4gPSBuZXcgQXJyYXk8U2tlbGV0b25DbGlwTm9kZT4oKTtcclxuXHRcdHZhciB2ZXJ0ZXhGcmFtZXM6QXJyYXk8VmVydGV4Q2xpcE5vZGU+ID0gbmV3IEFycmF5PFZlcnRleENsaXBOb2RlPigpO1xyXG5cdFx0d2hpbGUgKGZyYW1lc19wYXJzZWQgPCBudW1fZnJhbWVzKSB7XHJcblx0XHRcdHBvc2VCbG9ja0FkcmVzcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwb3NlQmxvY2tBZHJlc3MsIFtBc3NldFR5cGUuQU5JTUFUSU9OX05PREVdKTtcclxuXHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbmltYXRpb25DbGlwTm9kZSBOciBcIiArIGZyYW1lc19wYXJzZWQgKyBcIiAoIFwiICsgcG9zZUJsb2NrQWRyZXNzICsgXCIgKSBmb3IgdGhpcyBBbmltYXRpb25TZXRcIik7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzFdIGluc3RhbmNlb2YgVmVydGV4Q2xpcE5vZGUpXHJcblx0XHRcdFx0dmVydGV4RnJhbWVzLnB1c2gocmV0dXJuZWRBcnJheVsxXSlcclxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVsxXSBpbnN0YW5jZW9mIFNrZWxldG9uQ2xpcE5vZGUpXHJcblx0XHRcdFx0c2tlbGV0b25GcmFtZXMucHVzaChyZXR1cm5lZEFycmF5WzFdKVxyXG5cdFx0XHR9XHJcblx0XHRcdGZyYW1lc19wYXJzZWQrKztcclxuXHRcdH1cclxuXHRcdGlmICgodmVydGV4RnJhbWVzLmxlbmd0aCA9PSAwKSAmJiAoc2tlbGV0b25GcmFtZXMubGVuZ3RoID09IDApKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGhpcyBBbmltYXRpb25TZXQsIGJlY2F1c2UgaXQgY29udGFpbnMgbm8gYW5pbWF0aW9uc1wiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRpZiAodmVydGV4RnJhbWVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dmFyIG5ld1ZlcnRleEFuaW1hdGlvblNldDpWZXJ0ZXhBbmltYXRpb25TZXQgPSBuZXcgVmVydGV4QW5pbWF0aW9uU2V0KCk7XHJcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdmVydGV4RnJhbWVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdG5ld1ZlcnRleEFuaW1hdGlvblNldC5hZGRBbmltYXRpb24odmVydGV4RnJhbWVzW2ldKTtcclxuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobmV3VmVydGV4QW5pbWF0aW9uU2V0LCBuYW1lKTtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBuZXdWZXJ0ZXhBbmltYXRpb25TZXQ7XHJcblx0XHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFZlcnRleEFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3VmVydGV4QW5pbWF0aW9uU2V0LmFuaW1hdGlvbnMubGVuZ3RoICsgXCIgfCBBbmltYXRpb24tTmFtZXMgPSBcIiArIG5ld1ZlcnRleEFuaW1hdGlvblNldC5hbmltYXRpb25OYW1lcy50b1N0cmluZygpKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHNrZWxldG9uRnJhbWVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBvc2VCbG9ja0FkcmVzcywgW0Fzc2V0VHlwZS5BTklNQVRJT05fTk9ERV0pO1xyXG5cdFx0XHR2YXIgbmV3U2tlbGV0b25BbmltYXRpb25TZXQ6U2tlbGV0b25BbmltYXRpb25TZXQgPSBuZXcgU2tlbGV0b25BbmltYXRpb25TZXQocHJvcHMuZ2V0KDEsIDQpKTsgLy9wcm9wcy5nZXQoMSw0KSk7XHJcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgc2tlbGV0b25GcmFtZXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0bmV3U2tlbGV0b25BbmltYXRpb25TZXQuYWRkQW5pbWF0aW9uKHNrZWxldG9uRnJhbWVzW2ldKTtcclxuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobmV3U2tlbGV0b25BbmltYXRpb25TZXQsIG5hbWUpO1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0O1xyXG5cdFx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbkFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9ucy5sZW5ndGggKyBcIiB8IEFuaW1hdGlvbi1OYW1lcyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9uTmFtZXMudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9ja0lEIDEyMlxyXG5cdHByaXZhdGUgcGFyc2VBbmltYXRvclNldChibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciB0YXJnZXRNZXNoOk1lc2g7XHJcblx0XHR2YXIgYW5pbVNldEJsb2NrQWRyZXNzOm51bWJlciAvKmludCovXHJcblx0XHR2YXIgdGFyZ2V0QW5pbWF0aW9uU2V0OkFuaW1hdGlvblNldEJhc2U7XHJcblx0XHR2YXIgb3V0cHV0U3RyaW5nOnN0cmluZyA9IFwiXCI7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgdHlwZTpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFJ9KTtcclxuXHJcblx0XHRhbmltU2V0QmxvY2tBZHJlc3MgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIHRhcmdldE1lc2hMZW5ndGg6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIG1lc2hBZHJlc3NlczpBcnJheTxudW1iZXI+IC8qdWludCovID0gbmV3IEFycmF5PG51bWJlcj4oKSAvKnVpbnQqLztcclxuXHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdGFyZ2V0TWVzaExlbmd0aDsgaSsrKVxyXG5cdFx0XHRtZXNoQWRyZXNzZXMucHVzaCh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpKTtcclxuXHJcblx0XHR2YXIgYWN0aXZlU3RhdGU6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIGF1dG9wbGF5OmJvb2xlYW4gPSAoIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpID09IDEgKTtcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcclxuXHRcdHZhciB0YXJnZXRNZXNoZXM6QXJyYXk8TWVzaD4gPSBuZXcgQXJyYXk8TWVzaD4oKTtcclxuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbWVzaEFkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChtZXNoQWRyZXNzZXNbaV0sIFtBc3NldFR5cGUuTUVTSF0pO1xyXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHR0YXJnZXRNZXNoZXMucHVzaCg8TWVzaD4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoYW5pbVNldEJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9TRVRdKTtcclxuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQW5pbWF0aW9uU2V0ICggXCIgKyBhbmltU2V0QmxvY2tBZHJlc3MgKyBcIiApIGZvciB0aGlzIEFuaW1hdG9yXCIpOztcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHR0YXJnZXRBbmltYXRpb25TZXQgPSA8QW5pbWF0aW9uU2V0QmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdHZhciB0aGlzQW5pbWF0b3I6QW5pbWF0b3JCYXNlO1xyXG5cdFx0aWYgKHR5cGUgPT0gMSkge1xyXG5cclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHByb3BzLmdldCgxLCAwKSwgW0Fzc2V0VHlwZS5TS0VMRVRPTl0pO1xyXG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2tlbGV0b24gKCBcIiArIHByb3BzLmdldCgxLCAwKSArIFwiICkgZm9yIHRoaXMgQW5pbWF0b3JcIik7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpc0FuaW1hdG9yID0gbmV3IFNrZWxldG9uQW5pbWF0b3IoPFNrZWxldG9uQW5pbWF0aW9uU2V0PiB0YXJnZXRBbmltYXRpb25TZXQsIDxTa2VsZXRvbj4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0eXBlID09IDIpXHJcblx0XHRcdHRoaXNBbmltYXRvciA9IG5ldyBWZXJ0ZXhBbmltYXRvcig8VmVydGV4QW5pbWF0aW9uU2V0PiB0YXJnZXRBbmltYXRpb25TZXQpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHRoaXNBbmltYXRvciwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRoaXNBbmltYXRvcjtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCB0YXJnZXRNZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHR5cGUgPT0gMSlcclxuXHRcdFx0XHR0YXJnZXRNZXNoZXNbaV0uYW5pbWF0b3IgPSAoPFNrZWxldG9uQW5pbWF0b3I+IHRoaXNBbmltYXRvcik7XHJcblx0XHRcdGlmICh0eXBlID09IDIpXHJcblx0XHRcdFx0dGFyZ2V0TWVzaGVzW2ldLmFuaW1hdG9yID0gKDxWZXJ0ZXhBbmltYXRvcj4gdGhpc0FuaW1hdG9yKTtcclxuXHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQW5pbWF0b3I6IE5hbWUgPSBcIiArIG5hbWUpO1xyXG5cdH1cclxuXHRcclxuXHQvLyB0aGlzIGZ1bmN0aW9ucyByZWFkcyBhbmQgY3JlYXRlcyBhIEVmZmVjdE1ldGhvZFxyXG5cdHByaXZhdGUgcGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQ6bnVtYmVyKTpFZmZlY3RNZXRob2RCYXNlXHJcblx0e1xyXG5cclxuXHRcdHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBlZmZlY3RNZXRob2RSZXR1cm46RWZmZWN0TWV0aG9kQmFzZTtcclxuXHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUiwgMjpBV0RQYXJzZXIuQkFERFIsIDM6QVdEUGFyc2VyLkJBRERSLCAxMDE6dGhpcy5fcHJvcHNOclR5cGUsIDEwMjp0aGlzLl9wcm9wc05yVHlwZSwgMTAzOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDQ6dGhpcy5fcHJvcHNOclR5cGUsIDEwNTp0aGlzLl9wcm9wc05yVHlwZSwgMTA2OnRoaXMuX3Byb3BzTnJUeXBlLCAxMDc6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cdFx0dmFyIHRhcmdldElEOm51bWJlcjtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XHJcblxyXG5cdFx0c3dpdGNoIChtZXRob2RUeXBlKSB7XHJcblx0XHRcdC8vIEVmZmVjdCBNZXRob2RzXHJcblx0XHRcdGNhc2UgNDAxOiAvL0NvbG9yTWF0cml4XHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdENvbG9yTWF0cml4TWV0aG9kKHByb3BzLmdldCgxMDEsIG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwMjogLy9Db2xvclRyYW5zZm9ybVxyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZCgpO1xyXG5cdFx0XHRcdHZhciBvZmZDb2w6bnVtYmVyIC8qdWludCovID0gcHJvcHMuZ2V0KDYwMSwgMHgwMDAwMDAwMCk7XHJcblx0XHRcdFx0KDxFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZD4gZWZmZWN0TWV0aG9kUmV0dXJuKS5jb2xvclRyYW5zZm9ybSA9IG5ldyBDb2xvclRyYW5zZm9ybShwcm9wcy5nZXQoMTAyLCAxKSwgcHJvcHMuZ2V0KDEwMywgMSksIHByb3BzLmdldCgxMDQsIDEpLCBwcm9wcy5nZXQoMTAxLCAxKSwgKChvZmZDb2wgPj4gMTYpICYgMHhGRiksICgob2ZmQ29sID4+IDgpICYgMHhGRiksIChvZmZDb2wgJiAweEZGKSwgKChvZmZDb2wgPj4gMjQpICYgMHhGRikpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwMzogLy9FbnZNYXBcclxuXHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VOViBNQVAnLCB0YXJnZXRJRCk7XHJcblxyXG5cclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFsgQXNzZXRUeXBlLlRFWFRVUkUgXSwgXCJDdWJlVGV4dHVyZVwiKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRW52TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEVudk1hcE1ldGhvZFwiKTtcclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0RW52TWFwTWV0aG9kKDxDdWJlVGV4dHVyZUJhc2U+IHJldHVybmVkQXJyYXlbMV0sIDxudW1iZXI+IHByb3BzLmdldCgxMDEsIDEpKTtcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgyLCAwKTtcclxuXHRcdFx0XHRpZiAodGFyZ2V0SUQgPiAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTWFzay10ZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEVudk1hcE1ldGhvZFwiKTtcclxuXHJcblx0XHRcdFx0XHQvLyBUb2RvOiB0ZXN0IG1hc2sgd2l0aCBFbnZNYXBNZXRob2RcclxuXHRcdFx0XHRcdC8vKDxFbnZNYXBNZXRob2Q+IGVmZmVjdE1ldGhvZFJldHVybikubWFzayA9IDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDQ6IC8vTGlnaHRNYXBNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBMaWdodE1hcE1ldGhvZFwiKTtcclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0TGlnaHRNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSk7IC8vdXNlc2Vjb25kYXJ5VVYgbm90IHNldFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvL1x0XHRcdFx0Y2FzZSA0MDU6IC8vUHJvamVjdGl2ZVRleHR1cmVNZXRob2RcclxuXHRcdFx0Ly9cdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSBnZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV9QUk9KRUNUT1JdKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGV4dHVyZVByb2plY3RvciAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZFwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFByb2plY3RpdmVUZXh0dXJlTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIGJsZW5kTW9kZURpY1twcm9wcy5nZXQoNDAxLCAxMCldKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDA2OiAvL1JpbUxpZ2h0TWV0aG9kXHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdFJpbUxpZ2h0TWV0aG9kKHByb3BzLmdldCg2MDEsIDB4ZmZmZmZmKSwgcHJvcHMuZ2V0KDEwMSwgMC40KSwgcHJvcHMuZ2V0KDEwMSwgMikpOyAvL2JsZW5kTW9kZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwNzogLy9BbHBoYU1hc2tNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbHBoYS10ZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEFscGhhTWFza01ldGhvZFwiKTtcclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0QWxwaGFNYXNrTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHByb3BzLmdldCg3MDEsIGZhbHNlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDQwODogLy9SZWZyYWN0aW9uRW52TWFwTWV0aG9kXHJcblx0XHRcdC8vXHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdC8vXHRcdFx0XHRcdFx0X2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgUmVmcmFjdGlvbkVudk1hcE1ldGhvZFwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFJlZnJhY3Rpb25FbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDEwMSwgMC4xKSwgcHJvcHMuZ2V0KDEwMiwgMC4wMSksIHByb3BzLmdldCgxMDMsIDAuMDEpLCBwcm9wcy5nZXQoMTA0LCAwLjAxKSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdFJlZnJhY3Rpb25FbnZNYXBNZXRob2QoZWZmZWN0TWV0aG9kUmV0dXJuKS5hbHBoYSA9IHByb3BzLmdldCgxMDQsIDEpO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgNDA5OiAvL091dGxpbmVNZXRob2RcclxuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IE91dGxpbmVNZXRob2QocHJvcHMuZ2V0KDYwMSwgMHgwMDAwMDAwMCksIHByb3BzLmdldCgxMDEsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSwgcHJvcHMuZ2V0KDcwMiwgZmFsc2UpKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDEwOiAvL0ZyZXNuZWxFbnZNYXBNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0sIFwiQ3ViZVRleHR1cmVcIik7XHJcblx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBGcmVzbmVsRW52TWFwTWV0aG9kXCIpO1xyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RGcmVzbmVsRW52TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHByb3BzLmdldCgxMDEsIDEpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MTE6IC8vRm9nTWV0aG9kXHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEZvZ01ldGhvZChwcm9wcy5nZXQoMTAxLCAwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwMCksIHByb3BzLmdldCg2MDEsIDB4ODA4MDgwKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRyZXR1cm4gZWZmZWN0TWV0aG9kUmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VVc2VyQXR0cmlidXRlcygpOk9iamVjdFxyXG5cdHtcclxuXHRcdHZhciBhdHRyaWJ1dGVzOk9iamVjdDtcclxuXHRcdHZhciBsaXN0X2xlbjpudW1iZXI7XHJcblx0XHR2YXIgYXR0aWJ1dGVDbnQ6bnVtYmVyO1xyXG5cclxuXHRcdGxpc3RfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRpZiAobGlzdF9sZW4gPiAwKSB7XHJcblxyXG5cdFx0XHR2YXIgbGlzdF9lbmQ6bnVtYmVyO1xyXG5cclxuXHRcdFx0YXR0cmlidXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0bGlzdF9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGlzdF9sZW47XHJcblxyXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IGxpc3RfZW5kKSB7XHJcblx0XHRcdFx0dmFyIG5zX2lkOm51bWJlcjtcclxuXHRcdFx0XHR2YXIgYXR0cl9rZXk6c3RyaW5nO1xyXG5cdFx0XHRcdHZhciBhdHRyX3R5cGU6bnVtYmVyO1xyXG5cdFx0XHRcdHZhciBhdHRyX2xlbjpudW1iZXI7XHJcblx0XHRcdFx0dmFyIGF0dHJfdmFsOmFueTtcclxuXHJcblx0XHRcdFx0Ly8gVE9ETzogUHJvcGVybHkgdGVuZCB0byBuYW1lc3BhY2VzIGluIGF0dHJpYnV0ZXNcclxuXHRcdFx0XHRuc19pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdGF0dHJfa2V5ID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0XHRcdGF0dHJfdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdGF0dHJfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRcdFx0aWYgKCh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgYXR0cl9sZW4pID4gbGlzdF9lbmQpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICBFcnJvciBpbiByZWFkaW5nIGF0dHJpYnV0ZSAjIFwiICsgYXR0aWJ1dGVDbnQgKyBcIiA9IHNraXBwZWQgdG8gZW5kIG9mIGF0dHJpYnV0ZS1saXN0XCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGF0dHJpYnV0ZXM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKGF0dHJfdHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuQVdEU1RSSU5HOlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGF0dHJfbGVuKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQ4OlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQxNjpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDMyOlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEludCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkJPT0w6XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UODpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMTY6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQzMjpcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkJBRERSOlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuRkxPQVQzMjpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUNjQ6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSAndW5pbXBsZW1lbnRlZCBhdHRyaWJ1dGUgdHlwZSAnICsgYXR0cl90eXBlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGF0dHJfbGVuO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJhdHRyaWJ1dGUgPSBuYW1lOiBcIiArIGF0dHJfa2V5ICsgXCIgIC8gdmFsdWUgPSBcIiArIGF0dHJfdmFsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGF0dHJpYnV0ZXNbYXR0cl9rZXldID0gYXR0cl92YWw7XHJcblx0XHRcdFx0YXR0aWJ1dGVDbnQgKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBhdHRyaWJ1dGVzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZVByb3BlcnRpZXMoZXhwZWN0ZWQ6T2JqZWN0KTpBV0RQcm9wZXJ0aWVzXHJcblx0e1xyXG5cdFx0dmFyIGxpc3RfZW5kOm51bWJlcjtcclxuXHRcdHZhciBsaXN0X2xlbjpudW1iZXI7XHJcblx0XHR2YXIgcHJvcGVydHlDbnQ6bnVtYmVyID0gMDtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gbmV3IEFXRFByb3BlcnRpZXMoKTtcclxuXHJcblx0XHRsaXN0X2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRsaXN0X2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsaXN0X2xlbjtcclxuXHJcblx0XHRpZiAoZXhwZWN0ZWQpIHtcclxuXHJcblx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgbGlzdF9lbmQpIHtcclxuXHRcdFx0XHR2YXIgbGVuOm51bWJlcjtcclxuXHRcdFx0XHR2YXIga2V5Om51bWJlcjtcclxuXHRcdFx0XHR2YXIgdHlwZTpudW1iZXI7XHJcblxyXG5cdFx0XHRcdGtleSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRsZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW4pID4gbGlzdF9lbmQpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICBFcnJvciBpbiByZWFkaW5nIHByb3BlcnR5ICMgXCIgKyBwcm9wZXJ0eUNudCArIFwiID0gc2tpcHBlZCB0byBlbmQgb2YgcHJvcGVydGllLWxpc3RcIik7XHJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gbGlzdF9lbmQ7XHJcblx0XHRcdFx0XHRyZXR1cm4gcHJvcHM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoZXhwZWN0ZWQuaGFzT3duUHJvcGVydHkoa2V5LnRvU3RyaW5nKCkpKSB7XHJcblx0XHRcdFx0XHR0eXBlID0gZXhwZWN0ZWRba2V5XTtcclxuXHRcdFx0XHRcdHByb3BzLnNldChrZXksIHRoaXMucGFyc2VBdHRyVmFsdWUodHlwZSwgbGVuKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKz0gbGVuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cHJvcGVydHlDbnQgKz0gMTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBsaXN0X2VuZDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcHJvcHM7XHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZUF0dHJWYWx1ZSh0eXBlOm51bWJlciwgbGVuOm51bWJlcik6YW55XHJcblx0e1xyXG5cdFx0dmFyIGVsZW1fbGVuOm51bWJlcjtcclxuXHRcdHZhciByZWFkX2Z1bmM6RnVuY3Rpb247XHJcblxyXG5cdFx0c3dpdGNoICh0eXBlKSB7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5CT09MOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQ4OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gMTtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMTY6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSAyO1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMzI6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSA0O1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEludDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQ4OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gMTtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMTY6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSAyO1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMzI6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkNPTE9SOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5CQUREUjpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDQ7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDMyOlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gNDtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUNjQ6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSA4O1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkFXRFNUUklORzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMobGVuKTtcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLlZFQ1RPUjJ4MTpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SM3gxOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5WRUNUT1I0eDE6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLk1UWDN4MjpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYM3gzOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFg0eDM6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLk1UWDR4NDpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDg7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZWxlbV9sZW4gPCBsZW4pIHtcclxuXHRcdFx0dmFyIGxpc3Q6QXJyYXk8YW55PiA9IFtdO1xyXG5cdFx0XHR2YXIgbnVtX3JlYWQ6bnVtYmVyID0gMDtcclxuXHRcdFx0dmFyIG51bV9lbGVtczpudW1iZXIgPSBsZW4vZWxlbV9sZW47XHJcblxyXG5cdFx0XHR3aGlsZSAobnVtX3JlYWQgPCBudW1fZWxlbXMpIHtcclxuXHRcdFx0XHRsaXN0LnB1c2gocmVhZF9mdW5jLmFwcGx5KHRoaXMuX25ld0Jsb2NrQnl0ZXMpKTsgLy8gbGlzdC5wdXNoKHJlYWRfZnVuYygpKTtcclxuXHRcdFx0XHRudW1fcmVhZCsrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHR2YXIgdmFsOmFueSA9IHJlYWRfZnVuYy5hcHBseSh0aGlzLl9uZXdCbG9ja0J5dGVzKTsvL3JlYWRfZnVuYygpO1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZUhlYWRlcigpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgZmxhZ3M6bnVtYmVyO1xyXG5cdFx0dmFyIGJvZHlfbGVuOm51bWJlcjtcclxuXHJcblx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiA9IDM7IC8vIFNraXAgbWFnaWMgc3RyaW5nIGFuZCBwYXJzZSB2ZXJzaW9uXHJcblxyXG5cdFx0dGhpcy5fdmVyc2lvblswXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHRoaXMuX3ZlcnNpb25bMV0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblxyXG5cdFx0ZmxhZ3MgPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRTaG9ydCgpOyAvLyBQYXJzZSBiaXQgZmxhZ3NcclxuXHJcblx0XHR0aGlzLl9zdHJlYW1pbmcgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XHJcblxyXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XHJcblx0XHRcdHRoaXMuX2FjY3VyYWN5TWF0cml4ID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzIpO1xyXG5cdFx0XHR0aGlzLl9hY2N1cmFjeUdlbyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUczKTtcclxuXHRcdFx0dGhpcy5fYWNjdXJhY3lQcm9wcyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUc0KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBzZXQgX2FjY3VyYWN5T25CbG9ja3MsIHRoZSBwcmVjaXNpb24tdmFsdWVzIGFyZSByZWFkIGZyb20gZWFjaCBibG9jay1oZWFkZXIuXHJcblxyXG5cdFx0Ly8gc2V0IHN0b3JhZ2VQcmVjaXNpb24gdHlwZXNcclxuXHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuXHRcdGlmICh0aGlzLl9hY2N1cmFjeUdlbykge1xyXG5cdFx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRpZiAodGhpcy5fYWNjdXJhY3lNYXRyaXgpIHtcclxuXHRcdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRpZiAodGhpcy5fYWNjdXJhY3lQcm9wcykge1xyXG5cdFx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2NvbXByZXNzaW9uID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkQnl0ZSgpOyAvLyBjb21wcmVzc2lvblxyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkltcG9ydCBBV0RGaWxlIG9mIHZlcnNpb24gPSBcIiArIHRoaXMuX3ZlcnNpb25bMF0gKyBcIiAtIFwiICsgdGhpcy5fdmVyc2lvblsxXSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiR2xvYmFsIFNldHRpbmdzID0gQ29tcHJlc3Npb24gPSBcIiArIHRoaXMuX2NvbXByZXNzaW9uICsgXCIgfCBTdHJlYW1pbmcgPSBcIiArIHRoaXMuX3N0cmVhbWluZyArIFwiIHwgTWF0cml4LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lNYXRyaXggKyBcIiB8IEdlb21ldHJ5LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lHZW8gKyBcIiB8IFByb3BlcnRpZXMtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeVByb3BzKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDaGVjayBmaWxlIGludGVncml0eVxyXG5cdFx0Ym9keV9sZW4gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdGlmICghdGhpcy5fc3RyZWFtaW5nICYmIGJvZHlfbGVuICE9IHRoaXMuX2J5dGVEYXRhLmdldEJ5dGVzQXZhaWxhYmxlKCkpIHtcclxuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQVdEMiBib2R5IGxlbmd0aCBkb2VzIG5vdCBtYXRjaCBoZWFkZXIgaW50ZWdyaXR5IGZpZWxkJyk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHQvLyBIZWxwZXIgLSBmdW5jdGlvbnNcclxuXHRwcml2YXRlIGdldFVWRm9yVmVydGV4QW5pbWF0aW9uKG1lc2hJRDpudW1iZXIgLyp1aW50Ki8pOkFycmF5PEFycmF5PG51bWJlcj4+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuX2Jsb2Nrc1ttZXNoSURdLmRhdGEgaW5zdGFuY2VvZiBNZXNoKVxyXG5cdFx0bWVzaElEID0gdGhpcy5fYmxvY2tzW21lc2hJRF0uZ2VvSUQ7XHJcblx0XHRpZiAodGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uO1xyXG5cdFx0dmFyIGdlb21ldHJ5Okdlb21ldHJ5ID0gKDxHZW9tZXRyeT4gdGhpcy5fYmxvY2tzW21lc2hJRF0uZGF0YSk7XHJcblx0XHR2YXIgZ2VvQ250Om51bWJlciAvKmludCovID0gMDtcclxuXHRcdHZhciB1ZDpBcnJheTxudW1iZXI+O1xyXG5cdFx0dmFyIHVTdHJpZGU6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIHVPZmZzOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBudW1Qb2ludHM6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki87XHJcblx0XHR2YXIgbmV3VXZzOkFycmF5PG51bWJlcj47XHJcblx0XHR2YXIgc3ViX2dlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xyXG5cdFx0d2hpbGUgKGdlb0NudCA8IGdlb21ldHJ5LnN1Ykdlb21ldHJpZXMubGVuZ3RoKSB7XHJcblx0XHRcdG5ld1V2cyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0XHRcdHN1Yl9nZW9tID0gPFRyaWFuZ2xlU3ViR2VvbWV0cnk+IGdlb21ldHJ5LnN1Ykdlb21ldHJpZXNbZ2VvQ250XTtcclxuXHRcdFx0bnVtUG9pbnRzID0gc3ViX2dlb20ubnVtVmVydGljZXM7XHJcblx0XHRcdHVkID0gc3ViX2dlb20udXZzO1xyXG5cdFx0XHR1U3RyaWRlID0gc3ViX2dlb20uZ2V0U3RyaWRlKFRyaWFuZ2xlU3ViR2VvbWV0cnkuVVZfREFUQSk7XHJcblx0XHRcdHVPZmZzID0gc3ViX2dlb20uZ2V0T2Zmc2V0KFRyaWFuZ2xlU3ViR2VvbWV0cnkuVVZfREFUQSk7XHJcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKykge1xyXG5cdFx0XHRcdG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMF0pO1xyXG5cdFx0XHRcdG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbi5wdXNoKG5ld1V2cyk7XHJcblx0XHRcdGdlb0NudCsrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbjtcclxuXHR9XHJcblx0XHJcblx0cHJpdmF0ZSBwYXJzZVZhclN0cigpOnN0cmluZ1xyXG5cdHtcclxuXHJcblx0XHR2YXIgbGVuOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW4pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRBc3NldEJ5SUQoYXNzZXRJRDpudW1iZXIsIGFzc2V0VHlwZXNUb0dldDpBcnJheTxzdHJpbmc+LCBleHRyYVR5cGVJbmZvOnN0cmluZyA9IFwiU2luZ2xlVGV4dHVyZVwiKTpBcnJheTxhbnk+XHJcblx0e1xyXG5cdFx0dmFyIHJldHVybkFycmF5OkFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xyXG5cdFx0dmFyIHR5cGVDbnQ6bnVtYmVyID0gMDtcclxuXHRcdGlmIChhc3NldElEID4gMCkge1xyXG5cdFx0XHRpZiAodGhpcy5fYmxvY2tzW2Fzc2V0SURdKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKSB7XHJcblx0XHRcdFx0XHR3aGlsZSAodHlwZUNudCA8IGFzc2V0VHlwZXNUb0dldC5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBpYXNzZXQ6SUFzc2V0ID0gPElBc3NldD4gdGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGE7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaWFzc2V0LmFzc2V0VHlwZSA9PSBhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0pIHtcclxuXHRcdFx0XHRcdFx0XHQvL2lmIHRoZSByaWdodCBhc3NldFR5cGUgd2FzIGZvdW5kXHJcblx0XHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLlRFWFRVUkUpICYmIChleHRyYVR5cGVJbmZvID09IFwiQ3ViZVRleHR1cmVcIikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSBpbnN0YW5jZW9mIEltYWdlQ3ViZVRleHR1cmUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5BcnJheTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLlRFWFRVUkUpICYmIChleHRyYVR5cGVJbmZvID09IFwiU2luZ2xlVGV4dHVyZVwiKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhIGluc3RhbmNlb2YgSW1hZ2VUZXh0dXJlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5BcnJheTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vaWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLkdFT01FVFJZKSAmJiAoSUFzc2V0KF9ibG9ja3NbYXNzZXRJRF0uZGF0YSkuYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NRVNIKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuR0VPTUVUUlkpICYmIChpYXNzZXQuYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NRVNIKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgbWVzaDpNZXNoID0gPE1lc2g+IHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhXHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChtZXNoLmdlb21ldHJ5KTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0eXBlQ250Kys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyBpZiB0aGUgaGFzIG5vdCByZXR1cm5lZCBhbnl0aGluZyB5ZXQsIHRoZSBhc3NldCBpcyBub3QgZm91bmQsIG9yIHRoZSBmb3VuZCBhc3NldCBpcyBub3QgdGhlIHJpZ2h0IHR5cGUuXHJcblx0XHRyZXR1cm5BcnJheS5wdXNoKGZhbHNlKTtcclxuXHRcdHJldHVybkFycmF5LnB1c2godGhpcy5nZXREZWZhdWx0QXNzZXQoYXNzZXRUeXBlc1RvR2V0WzBdLCBleHRyYVR5cGVJbmZvKSk7XHJcblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldERlZmF1bHRBc3NldChhc3NldFR5cGU6c3RyaW5nLCBleHRyYVR5cGVJbmZvOnN0cmluZyk6SUFzc2V0XHJcblx0e1xyXG5cdFx0c3dpdGNoICh0cnVlKSB7XHJcblx0XHRcdGNhc2UgKGFzc2V0VHlwZSA9PSBBc3NldFR5cGUuVEVYVFVSRSk6XHJcblx0XHRcdFx0aWYgKGV4dHJhVHlwZUluZm8gPT0gXCJDdWJlVGV4dHVyZVwiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk7XHJcblx0XHRcdFx0aWYgKGV4dHJhVHlwZUluZm8gPT0gXCJTaW5nbGVUZXh0dXJlXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5nZXREZWZhdWx0VGV4dHVyZSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIChhc3NldFR5cGUgPT0gQXNzZXRUeXBlLk1BVEVSSUFMKTpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXREZWZhdWx0TWF0ZXJpYWwoKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXREZWZhdWx0TWF0ZXJpYWwoKTpJQXNzZXRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuX2RlZmF1bHRCaXRtYXBNYXRlcmlhbClcclxuXHRcdFx0dGhpcy5fZGVmYXVsdEJpdG1hcE1hdGVyaWFsID0gPE1ldGhvZE1hdGVyaWFsPiBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRNYXRlcmlhbCgpO1xyXG5cclxuXHRcdHJldHVybiAgPElBc3NldD4gIHRoaXMuX2RlZmF1bHRCaXRtYXBNYXRlcmlhbDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0RGVmYXVsdFRleHR1cmUoKTpJQXNzZXRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuX2RlZmF1bHRUZXh0dXJlKVxyXG5cdFx0XHR0aGlzLl9kZWZhdWx0VGV4dHVyZSA9IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuZ2V0RGVmYXVsdFRleHR1cmUoKTtcclxuXHJcblx0XHRyZXR1cm4gPElBc3NldD4gdGhpcy5fZGVmYXVsdFRleHR1cmU7XHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXREZWZhdWx0Q3ViZVRleHR1cmUoKTpJQXNzZXRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZSkge1xyXG5cdFx0XHR2YXIgZGVmYXVsdEJpdG1hcDpCaXRtYXBEYXRhID0gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5jcmVhdGVDaGVja2VyZWRCaXRtYXBEYXRhKCk7XHJcblxyXG5cdFx0XHR0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUgPSBuZXcgQml0bWFwQ3ViZVRleHR1cmUoZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCk7XHJcblx0XHRcdHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZS5uYW1lID0gXCJkZWZhdWx0Q3ViZVRleHR1cmVcIjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPElBc3NldD4gdGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWFkTnVtYmVyKHByZWNpc2lvbjpib29sZWFuID0gZmFsc2UpOm51bWJlclxyXG5cdHtcclxuXHRcdGlmIChwcmVjaXNpb24pXHJcblx0XHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGUoKTtcclxuXHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VNYXRyaXgzRCgpOk1hdHJpeDNEXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBNYXRyaXgzRCh0aGlzLnBhcnNlTWF0cml4NDNSYXdEYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZU1hdHJpeDMyUmF3RGF0YSgpOkFycmF5PG51bWJlcj5cclxuXHR7XHJcblx0XHR2YXIgaTpudW1iZXI7XHJcblx0XHR2YXIgbXR4X3JhdzpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oNik7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcblx0XHRcdG10eF9yYXdbaV0gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtdHhfcmF3O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZU1hdHJpeDQzUmF3RGF0YSgpOkFycmF5PG51bWJlcj5cclxuXHR7XHJcblx0XHR2YXIgbXR4X3JhdzpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oMTYpO1xyXG5cclxuXHRcdG10eF9yYXdbMF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1sxXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbM10gPSAwLjA7XHJcblx0XHRtdHhfcmF3WzRdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbNV0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1s2XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzddID0gMC4wO1xyXG5cdFx0bXR4X3Jhd1s4XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzldID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTBdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTFdID0gMC4wO1xyXG5cdFx0bXR4X3Jhd1sxMl0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1sxM10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1sxNF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1sxNV0gPSAxLjA7XHJcblxyXG5cdFx0Ly9UT0RPOiBmaXggbWF4IGV4cG9ydGVyIHRvIHJlbW92ZSBOYU4gdmFsdWVzIGluIGpvaW50IDAgaW52ZXJzZSBiaW5kIHBvc2VcclxuXHJcblx0XHRpZiAoaXNOYU4obXR4X3Jhd1swXSkpIHtcclxuXHRcdFx0bXR4X3Jhd1swXSA9IDE7XHJcblx0XHRcdG10eF9yYXdbMV0gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzJdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1s0XSA9IDA7XHJcblx0XHRcdG10eF9yYXdbNV0gPSAxO1xyXG5cdFx0XHRtdHhfcmF3WzZdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1s4XSA9IDA7XHJcblx0XHRcdG10eF9yYXdbOV0gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzEwXSA9IDE7XHJcblx0XHRcdG10eF9yYXdbMTJdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1sxM10gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzE0XSA9IDA7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtdHhfcmF3O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCA9IEFXRFBhcnNlcjtcclxuXHJcbmNsYXNzIEFXREJsb2NrXHJcbntcclxuXHRwdWJsaWMgaWQ6bnVtYmVyO1xyXG5cdHB1YmxpYyBuYW1lOnN0cmluZztcclxuXHRwdWJsaWMgZGF0YTphbnk7XHJcblx0cHVibGljIGxlbjphbnk7XHJcblx0cHVibGljIGdlb0lEOm51bWJlcjtcclxuXHRwdWJsaWMgZXh0cmFzOk9iamVjdDtcclxuXHRwdWJsaWMgYnl0ZXM6Qnl0ZUFycmF5O1xyXG5cdHB1YmxpYyBlcnJvck1lc3NhZ2VzOkFycmF5PHN0cmluZz47XHJcblx0cHVibGljIHV2c0ZvclZlcnRleEFuaW1hdGlvbjpBcnJheTxBcnJheTxudW1iZXI+PjtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkaXNwb3NlKClcclxuXHR7XHJcblxyXG5cdFx0dGhpcy5pZCA9IG51bGw7XHJcblx0XHR0aGlzLmJ5dGVzID0gbnVsbDtcclxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlcyA9IG51bGw7XHJcblx0XHR0aGlzLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZEVycm9yKGVycm9yTXNnOnN0cmluZyk6dm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lcnJvck1lc3NhZ2VzKVxyXG5cdFx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlcy5wdXNoKGVycm9yTXNnKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEFXRFByb3BlcnRpZXNcclxue1xyXG5cdHB1YmxpYyBzZXQoa2V5Om51bWJlciwgdmFsdWU6YW55KTp2b2lkXHJcblx0e1xyXG5cdFx0dGhpc1sga2V5LnRvU3RyaW5nKCkgXSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldChrZXk6bnVtYmVyLCBmYWxsYmFjazphbnkpOmFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleS50b1N0cmluZygpKSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpc1trZXkudG9TdHJpbmcoKV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsbGJhY2s7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIEJpdEZsYWdzXHJcbntcclxuXHRwdWJsaWMgc3RhdGljIEZMQUcxOm51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMjpudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzM6bnVtYmVyID0gNDtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUc0Om51bWJlciA9IDg7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHNTpudW1iZXIgPSAxNjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUc2Om51bWJlciA9IDMyO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzc6bnVtYmVyID0gNjQ7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHODpudW1iZXIgPSAxMjg7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHOTpudW1iZXIgPSAyNTY7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTA6bnVtYmVyID0gNTEyO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzExOm51bWJlciA9IDEwMjQ7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTI6bnVtYmVyID0gMjA0ODtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUcxMzpudW1iZXIgPSA0MDk2O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE0Om51bWJlciA9IDgxOTI7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTU6bnVtYmVyID0gMTYzODQ7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTY6bnVtYmVyID0gMzI3Njg7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdGVzdChmbGFnczpudW1iZXIsIHRlc3RGbGFnOm51bWJlcik6Ym9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiAoZmxhZ3MgJiB0ZXN0RmxhZykgPT0gdGVzdEZsYWc7XHJcblx0fVxyXG59XHJcbiJdfQ==