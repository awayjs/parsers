var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var BlendMode = require("awayjs-display/lib/base/BlendMode");
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
var SkyboxMaterial = require("awayjs-renderergl/lib/materials/SkyboxMaterial");
var TriangleMaterialMode = require("awayjs-methodmaterials/lib/TriangleMaterialMode");
var TriangleMethodMaterial = require("awayjs-methodmaterials/lib/TriangleMethodMaterial");
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
var TimeLine = require("awayjs-display/lib/entities/TimeLine");
var TimeLineFrame = require("awayjs-display/lib/entities/timelinedata/TimeLineFrame");
var TimeLineObject = require("awayjs-display/lib/entities/timelinedata/TimeLineObject");
var FrameCommand = require("awayjs-display/lib/entities/timelinedata/FrameCommand");
var CommandPropsDisplayObject = require("awayjs-display/lib/entities/timelinedata/CommandPropsDisplayObject");
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
                    this.parseTimeLine(this._cur_block_id);
                    isParsed = true;
                    break;
            }
        }
        else if ((this._version[0] == 2) && (this._version[1] == 1)) {
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
                var material = new TriangleMethodMaterial(fill_props.get(1, 0xcccccc));
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
    AWDParser.prototype.parseTimeLine = function (blockID) {
        var i;
        var j;
        var k;
        var timeLineContainer = new TimeLine();
        var name = this.parseVarStr();
        var isScene = !!this._newBlockBytes.readUnsignedByte();
        var sceneID = this._newBlockBytes.readUnsignedByte();
        var numFrames = this._newBlockBytes.readUnsignedShort();
        // var previousTimeLine:TimeLineFrame;
        // var fill_props:AWDProperties = this.parseProperties({1:AWDParser.UINT32});// { 1:UINT32, 6:AWDSTRING }  ); //; , 2:UINT32, 3:UINT32, 5:BOOL } );
        if (this._debug)
            console.log("Parsed a TIMELINE: Name = " + name + "| isScene = " + isScene + "| sceneID = " + sceneID + "| numFrames = " + numFrames);
        var totalDuration = 0;
        for (i = 0; i < numFrames; i++) {
            var frame = new TimeLineFrame();
            var traceString = "frame = " + i;
            var frameDuration = this._newBlockBytes.readUnsignedInt();
            frame.setFrameTime(totalDuration, frameDuration);
            totalDuration += frameDuration;
            //console.log("duration = " + frameDuration);
            var numLabels = this._newBlockBytes.readUnsignedShort();
            for (j = 0; j < numLabels; j++) {
                var labelType = this._newBlockBytes.readUnsignedByte();
                var label = this.parseVarStr();
                frame.addLabel(label, labelType);
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
                        var newObjectProps = new CommandPropsDisplayObject();
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
                            newObjectProps.setDisplaymatrix(thisMatrix);
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
                            newObjectProps.setInstancename(instanceName);
                            commandString += "\n                instanceName = " + instanceName;
                        }
                        // if this is a "ADD NEW OBJECT"-command,
                        // we need to lookup the new object by AWD ID.
                        if (hasResource) {
                            // sound is added to timeline with dedicated Command, as it is no display-object (has no matrix etc)
                            // check if a Geometry can be found at the resourceID (AWD-ID)
                            var returnedArray = this.getAssetByID(resourceID, [AssetType.GEOMETRY]);
                            if (returnedArray[0]) {
                                var geom = returnedArray[1];
                                var newMesh = new Mesh(geom);
                                for (k = 0; k < numFills; k++) {
                                    var returnedArray2 = this.getAssetByID(fillsIDs[k], [AssetType.MATERIAL]);
                                    if (returnedArray2[0]) {
                                        if (newMesh.subMeshes.length > k) {
                                            newMesh.subMeshes[k].material = returnedArray2[1];
                                        }
                                    }
                                }
                                var newTimeLineMesh = new TimeLineObject(newMesh, objectID, new CommandPropsDisplayObject());
                                timeLineContainer.addTimeLineObject(newTimeLineMesh);
                                var newCommandaddMesh = new FrameCommand(newTimeLineMesh);
                                newCommandaddMesh.commandProps = newObjectProps;
                                frame.addCommand(newCommandaddMesh);
                            }
                            else {
                                // no geometry found, so we check for TIMELINE.
                                var returnedArray = this.getAssetByID(resourceID, [AssetType.TIMELINE]);
                                if (returnedArray[0]) {
                                    // timeline found. create command and add it to the frame
                                    var newTimeLineTimeLine = new TimeLineObject(returnedArray[1], objectID, new CommandPropsDisplayObject());
                                    timeLineContainer.addTimeLineObject(newTimeLineTimeLine);
                                    var newCommandAddTimeLine = new FrameCommand(newTimeLineTimeLine);
                                    newCommandAddTimeLine.commandProps = newObjectProps;
                                    frame.addCommand(newCommandAddTimeLine);
                                }
                            }
                        }
                        else {
                            // get the existing TimeLineobject fronm the timeline
                            var newTimeLineUpdate = timeLineContainer.getTimeLineObjectByID(objectID);
                            var newCommandupdate = new FrameCommand(newTimeLineUpdate);
                            //newCommandupdate.commandProps=newObjectProps;
                            // TODO:
                            frame.addCommand(newCommandupdate);
                        }
                        break;
                    case 3:
                        // Remove Object Command
                        objectID = this._newBlockBytes.readUnsignedInt();
                        var newTimeLineUpdate = timeLineContainer.getTimeLineObjectByID(objectID);
                        var newCommandupdate = new FrameCommand(newTimeLineUpdate);
                        newCommandupdate.activateObj = false;
                        frame.addCommand(newCommandupdate);
                        //newCommandupdate.commandProps=newObjectProps;
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
                var frame_code = this._newBlockBytes.readUTFBytes(length_code);
                frame.addToScript(frame_code);
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
            var i;
            var sm_len, sm_end;
            var sub_geom;
            var w_indices;
            var weights;
            sm_len = this._newBlockBytes.readUnsignedInt();
            sm_end = this._newBlockBytes.position + sm_len;
            // Ignore for now
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
                        // TODO: Respect stream field type
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
                        // TODO: Respect stream field type
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
                        w_indices[idx++] = this._newBlockBytes.readUnsignedShort() * 3; // TODO: Respect stream field type
                    }
                }
                else if (str_type == 7) {
                    weights = new Array();
                    while (this._newBlockBytes.position < str_end) {
                        weights[idx++] = this.readNumber(this._accuracyGeo);
                    }
                }
                else {
                    this._newBlockBytes.position = str_end;
                }
            }
            this.parseUserAttributes(); // Ignore sub-mesh attributes for now
            sub_geom = new TriangleSubGeometry(true);
            if (weights)
                sub_geom.jointsPerVertex = weights.length / (verts.length / 3);
            if (normals)
                sub_geom.autoDeriveNormals = false;
            if (uvs)
                sub_geom.autoDeriveUVs = false;
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
        var asset = new Skybox(new SkyboxMaterial(returnedArrayCubeTex[1]));
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
                mat = new TriangleMethodMaterial(color, props.get(10, 1.0));
            }
            else {
                mat = new TriangleMethodMaterial(color);
                mat.materialMode = TriangleMaterialMode.MULTI_PASS;
            }
        }
        else if (type === 2) {
            var tex_addr = props.get(2, 0);
            returnedArray = this.getAssetByID(tex_addr, [AssetType.TEXTURE]);
            if ((!returnedArray[0]) && (tex_addr > 0))
                this._blocks[blockID].addError("Could not find the DiffsueTexture (ID = " + tex_addr + " ) for this Material");
            mat = new TriangleMethodMaterial(returnedArray[1]);
            if (this.materialMode < 2) {
                mat.alphaBlending = props.get(11, false);
                mat.alpha = props.get(10, 1.0);
                debugString += "Parsed a TriangleMethodMaterial(SinglePass): Name = '" + name + "' | Texture-Name = " + mat.name;
            }
            else {
                mat.materialMode = TriangleMaterialMode.MULTI_PASS;
                debugString += "Parsed a TriangleMethodMaterial(MultiPass): Name = '" + name + "' | Texture-Name = " + mat.name;
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
                    mat = new TriangleMethodMaterial(color);
                    mat.materialMode = TriangleMaterialMode.MULTI_PASS;
                    debugString += "Parsed a ColorMaterial(MultiPass): Name = '" + name + "' | ";
                }
                else {
                    mat = new TriangleMethodMaterial(color, props.get(10, 1.0));
                    mat.alphaBlending = props.get(11, false);
                    debugString += "Parsed a ColorMaterial(SinglePass): Name = '" + name + "' | ";
                }
            }
            else if (type == 2) {
                var tex_addr = props.get(2, 0); //TODO temporarily swapped so that diffuse texture goes to ambient
                returnedArray = this.getAssetByID(tex_addr, [AssetType.TEXTURE]);
                if ((!returnedArray[0]) && (tex_addr > 0))
                    this._blocks[blockID].addError("Could not find the AmbientTexture (ID = " + tex_addr + " ) for this TriangleMethodMaterial");
                var texture = returnedArray[1];
                mat = new TriangleMethodMaterial(texture);
                if (spezialType == 1) {
                    mat.materialMode = TriangleMaterialMode.MULTI_PASS;
                    debugString += "Parsed a TriangleMethodMaterial(MultiPass): Name = '" + name + "' | Texture-Name = " + texture.name;
                }
                else {
                    mat.alpha = props.get(10, 1.0);
                    mat.alphaBlending = props.get(11, false);
                    debugString += "Parsed a TriangleMethodMaterial(SinglePass): Name = '" + name + "' | Texture-Name = " + texture.name;
                }
            }
            var diffuseTexture;
            var diffuseTex_addr = props.get(17, 0);
            returnedArray = this.getAssetByID(diffuseTex_addr, [AssetType.TEXTURE]);
            if ((!returnedArray[0]) && (diffuseTex_addr != 0)) {
                this._blocks[blockID].addError("Could not find the DiffuseTexture (ID = " + diffuseTex_addr + " ) for this TriangleMethodMaterial");
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
                this._blocks[blockID].addError("Could not find the NormalTexture (ID = " + normalTex_addr + " ) for this TriangleMethodMaterial");
            }
            if (returnedArray[0]) {
                normalTexture = returnedArray[1];
                debugString += " | NormalTexture-Name = " + normalTexture.name;
            }
            var specTex_addr = props.get(21, 0);
            returnedArray = this.getAssetByID(specTex_addr, [AssetType.TEXTURE]);
            if ((!returnedArray[0]) && (specTex_addr != 0)) {
                this._blocks[blockID].addError("Could not find the SpecularTexture (ID = " + specTex_addr + " ) for this TriangleMethodMaterial");
            }
            if (returnedArray[0]) {
                specTexture = returnedArray[1];
                debugString += " | SpecularTexture-Name = " + specTexture.name;
            }
            var lightPickerAddr = props.get(22, 0);
            returnedArray = this.getAssetByID(lightPickerAddr, [AssetType.LIGHT_PICKER]);
            if ((!returnedArray[0]) && (lightPickerAddr)) {
                this._blocks[blockID].addError("Could not find the LightPicker (ID = " + lightPickerAddr + " ) for this TriangleMethodMaterial");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXIudHMiXSwibmFtZXMiOlsiQVdEUGFyc2VyIiwiQVdEUGFyc2VyLmNvbnN0cnVjdG9yIiwiQVdEUGFyc2VyLnN1cHBvcnRzVHlwZSIsIkFXRFBhcnNlci5zdXBwb3J0c0RhdGEiLCJBV0RQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5TmFtZSIsIkFXRFBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiQVdEUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiQVdEUGFyc2VyLmRpc3Bvc2UiLCJBV0RQYXJzZXIucGFyc2VOZXh0QmxvY2siLCJBV0RQYXJzZXIucGFyc2VTaGFwZTJEIiwiQVdEUGFyc2VyLnBhcnNlU2hhcGUyREZpbGwiLCJBV0RQYXJzZXIucGFyc2VUaW1lTGluZSIsIkFXRFBhcnNlci5wYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2siLCJBV0RQYXJzZXIucGFyc2VQcmltaXR2ZXMiLCJBV0RQYXJzZXIucGFyc2VDb250YWluZXIiLCJBV0RQYXJzZXIucGFyc2VNZXNoSW5zdGFuY2UiLCJBV0RQYXJzZXIucGFyc2VTa3lib3hJbnN0YW5jZSIsIkFXRFBhcnNlci5wYXJzZUxpZ2h0IiwiQVdEUGFyc2VyLnBhcnNlQ2FtZXJhIiwiQVdEUGFyc2VyLnBhcnNlTGlnaHRQaWNrZXIiLCJBV0RQYXJzZXIucGFyc2VNYXRlcmlhbCIsIkFXRFBhcnNlci5wYXJzZU1hdGVyaWFsX3YxIiwiQVdEUGFyc2VyLnBhcnNlVGV4dHVyZSIsIkFXRFBhcnNlci5wYXJzZUN1YmVUZXh0dXJlIiwiQVdEUGFyc2VyLnBhcnNlU2hhcmVkTWV0aG9kQmxvY2siLCJBV0RQYXJzZXIucGFyc2VTaGFkb3dNZXRob2RCbG9jayIsIkFXRFBhcnNlci5wYXJzZUNvbW1hbmQiLCJBV0RQYXJzZXIucGFyc2VNZXRhRGF0YSIsIkFXRFBhcnNlci5wYXJzZU5hbWVTcGFjZSIsIkFXRFBhcnNlci5wYXJzZVNoYWRvd01ldGhvZExpc3QiLCJBV0RQYXJzZXIucGFyc2VTa2VsZXRvbiIsIkFXRFBhcnNlci5wYXJzZVNrZWxldG9uUG9zZSIsIkFXRFBhcnNlci5wYXJzZVNrZWxldG9uQW5pbWF0aW9uIiwiQVdEUGFyc2VyLnBhcnNlTWVzaFBvc2VBbmltYXRpb24iLCJBV0RQYXJzZXIucGFyc2VWZXJ0ZXhBbmltYXRpb25TZXQiLCJBV0RQYXJzZXIucGFyc2VBbmltYXRvclNldCIsIkFXRFBhcnNlci5wYXJzZVNoYXJlZE1ldGhvZExpc3QiLCJBV0RQYXJzZXIucGFyc2VVc2VyQXR0cmlidXRlcyIsIkFXRFBhcnNlci5wYXJzZVByb3BlcnRpZXMiLCJBV0RQYXJzZXIucGFyc2VBdHRyVmFsdWUiLCJBV0RQYXJzZXIucGFyc2VIZWFkZXIiLCJBV0RQYXJzZXIuZ2V0VVZGb3JWZXJ0ZXhBbmltYXRpb24iLCJBV0RQYXJzZXIucGFyc2VWYXJTdHIiLCJBV0RQYXJzZXIuZ2V0QXNzZXRCeUlEIiwiQVdEUGFyc2VyLmdldERlZmF1bHRBc3NldCIsIkFXRFBhcnNlci5nZXREZWZhdWx0TWF0ZXJpYWwiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdFRleHR1cmUiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdEN1YmVUZXh0dXJlIiwiQVdEUGFyc2VyLnJlYWROdW1iZXIiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXgzRCIsIkFXRFBhcnNlci5wYXJzZU1hdHJpeDMyUmF3RGF0YSIsIkFXRFBhcnNlci5wYXJzZU1hdHJpeDQzUmF3RGF0YSIsIkFXREJsb2NrIiwiQVdEQmxvY2suY29uc3RydWN0b3IiLCJBV0RCbG9jay5kaXNwb3NlIiwiQVdEQmxvY2suYWRkRXJyb3IiLCJBV0RQcm9wZXJ0aWVzIiwiQVdEUHJvcGVydGllcy5jb25zdHJ1Y3RvciIsIkFXRFByb3BlcnRpZXMuc2V0IiwiQVdEUHJvcGVydGllcy5nZXQiLCJCaXRGbGFncyIsIkJpdEZs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LElBQUlBLEVBQUVBLGlDQUFpQ0E7UUFFOURBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLEVBQUVBLDhDQUE4Q0E7UUFDdkZBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUM3Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUMzQ0EsSUFBSUEs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QSxDQUFDQSxDQUFDQTtRQUN0QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsSUFBSUEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkRBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxPQUFPQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTt3QkFDNUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsR0FBR0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7d0JBQzFFQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFDVkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBO1lBQ0ZBLENBQUNBO1lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUVqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSx1QkFBdUJBLENBQUNBLENBQUNBO2dCQUUzR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxPQUFPQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTt3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LEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBOzRCQUN0QkEsUUFBUUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3ZCQSxDQUFDQTtvQkFDRkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBO2dCQUlEQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDeEJBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUMvQ0EsSUFBSUEsT0FBT0EsR0FBU0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTt3QkFDNURBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBO29CQUM1QkEsQ0FBQ0E7Z0JBRUZBLENBQUNBO2dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFMUJBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUMvQ0EsSUFBSUEsT0FBT0EsR0FBU0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTt3QkFDNURBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEdBQUdBLE9BQU9BLENBQUNBO29CQUM1QkEsQ0FBQ0E7Z0JBRUZBLENBQUNBO2dCQUFBQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFekJBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUMvQ0EsSUFBSUEsT0FBT0EsR0FBU0EsSUFBSUEsQ0FBQ0EsY0FBY0Es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Q0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9KQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0tBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUNySEEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsdUNBQXVDQTtnQkFDbk1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDckRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDeERBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFFL0NBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxtQkFBbUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3SkEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHNCQUFzQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNJQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdklBLEtBQUtBLENBQUNBO1lBRVBBO2dCQUNDQSxNQUFNQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtnQkFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdDQUFnQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxLQUFLQSxDQUFDQTtRQUNSQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUczREEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMzQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ25DQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUVwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FB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SUFBSUEsbUJBQW1CQSxHQUFjQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUV0SEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsSUFBSUEsSUFBSUEsR0FBbURBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3BCQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHVDQUF1Q0EsQ0FBQ0EsQ0FBQ0E7UUFDekVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLEFBQ0FBLDZCQUQ2QkE7WUFDSEEsSUFBSUEsQ0FBQ0EsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDMURBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM5QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakNBLElBQUlBLENBQVFBLENBQUNBO1lBSWJBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUM1Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0VBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hEQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEpBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLFFBQVFBLENBQVNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEVBQVVBLEtBQUtBLENBQUNBLEdB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R0FBR0EsQ0FBQ0E7UUFFaENBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXBCQSxLQUFLQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXBGQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQWdCQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0JBLGVBQWVBLEdBQUdBLElBQUlBLHVCQUF1QkEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxDQUFDQTtZQU9GQSxDQUFDQTtRQUVGQSxDQUFDQTtRQUNEQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUNyQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2xDQSxLQUFLQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUM1Q0EsS0FBS0EsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FB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QSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUNuZEEsSUFBSUEsV0FBV0EsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLFdBQVdBLEdBQVVBLEVBQUVBLENBQUNBO1FBRTVCQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0Esd0JBQXdCQSxHQUFHQSxXQUFXQSxHQUFHQSw2REFBNkRBLENBQUNBLENBQUNBO1lBQ3ZJQSxNQUFNQSxDQUFDQTtRQUNSQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUMxQkEsV0FBV0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO1lBQy9CQSxXQUFXQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FB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QSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEJBLFdBQVdBLEdBQUdBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsV0FBV0EsSUFBSUEsNEJBQTRCQSxHQUFHQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNoRUEsQ0FBQ0E7WUFFREEsSUFBSUEsZUFBZUEsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUFBO1lBRTVFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDOUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHVDQUF1Q0EsR0FBR0EsZUFBZUEsR0FBR0Esb0NBQW9DQSxDQUFDQSxDQUFDQTtZQUNsSUEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLEdBQUdBLENBQUNBLFdBQVdBLEdBQXFCQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUV0REEsQ0FBQ0E7WUFFREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaENBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ2hDQSxHQUFHQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNwQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUM3Q0EsR0FBR0EsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkRBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBRWxDQSxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDakJBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLGFBQWFBLENBQUNBO1lBRS9CQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQTtnQkFDZkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsV0FBV0EsQ0FBQ0E7WUFFL0JBLEdBQUdBLENBQUNBLGNBQWNBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3hDQSxHQUFHQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNqQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDM0NBLEdBQUdBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2xDQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUM5QkEsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFFNUNBLElBQUlBLGNBQWNBLEdBQVVBLENBQUNBLENBQUNBO1lBQzlCQSxJQUFJQSxRQUFlQSxDQUFDQTtZQUVwQkEsT0FBT0EsY0FBY0EsR0FBR0EsV0FBV0EsRUFBRUEsQ0FBQ0E7Z0JBQ3JDQSxJQUFJQSxXQUFrQkEsQ0FBQ0E7Z0JBQ3ZCQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO2dCQUV0REEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRXZZQSxNQUFNQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDckJBLEtBQUtBLEdBQUdBO3dCQUVQQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDM0JBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBO3dCQUV4RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3ZCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSx3Q0FBd0NBLEdBQUdBLFFBQVFBLEdBQUdBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7d0JBQzlHQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ1BBLEdBQUdBLENBQUNBLGVBQWVBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUV0Q0EsV0FBV0EsSUFBSUEseUJBQXlCQSxHQUF1QkEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3ZGQSxDQUFDQTt3QkFFREEsS0FBS0EsQ0FBQ0E7b0JBRVBBLEtBQUtBLEdBQUdBO3dCQUVQQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDM0JBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBRTNFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHdDQUF3Q0EsR0FBR0EsUUFBUUEsR0FBR0Esc0JBQXNCQSxDQUFDQSxDQUFDQTt3QkFDOUdBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDUEEsR0FBR0EsQ0FBQ0EsWUFBWUEsR0FBR0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3BDQSxXQUFXQSxJQUFJQSx5QkFBeUJBLEdBQXVCQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdkZBLENBQUNBO3dCQUVEQSxLQUFLQSxDQUFDQTtvQkFFUEEsS0FBS0EsQ0FBQ0E7d0JBQ0xBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO3dCQUMzQkEsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2hGQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDckJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLGtDQUFrQ0EsR0FBR0EsUUFBUUEsR0FBR0EseUNBQXlDQSxDQUFDQSxDQUFDQTt3QkFDM0hBLEdBQUdBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLG1CQUFtQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzlEQSxXQUFXQSxJQUFJQSx3Q0FBd0NBLEdBQXNCQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDcEdBLEtBQUtBLENBQUNBO29CQUVQQSxLQUFLQSxFQUFFQTt3QkFDTkEsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsa0JBQWtCQSxFQUFFQSxDQUFDQTt3QkFDN0NBLFdBQVdBLElBQUlBLHVCQUF1QkEsQ0FBQ0E7d0JBQ3ZDQSxLQUFLQSxDQUFDQTtvQkFDUEEsS0FBS0EsRUFBRUE7d0JBQ05BLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO3dCQUMzQkEsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDckJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLGtEQUFrREEsR0FBR0EsUUFBUUEsR0FBR0EsbUNBQW1DQSxDQUFDQSxDQUFDQTt3QkFDcklBLEdBQUdBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLHFCQUFxQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2hFQSxXQUFXQSxJQUFJQSwwREFBMERBLEdBQW9CQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDcEhBLEtBQUtBLENBQUNBO29CQUNQQSxLQUFLQSxFQUFFQTt3QkFDTkEsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsaUJBQWlCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDN0RBLFdBQVdBLElBQUlBLHNCQUFzQkEsQ0FBQ0E7d0JBQ3RDQSxLQUFLQSxDQUFDQTtvQkFDUEEsS0FBS0EsRUFBRUE7d0JBQ05BLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO3dCQUMzQkEsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDckJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLG9DQUFvQ0EsR0FBR0EsUUFBUUEsR0FBR0EsbUNBQW1DQSxDQUFDQSxDQUFDQTt3QkFDdkhBLEdBQUdBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLHFCQUFxQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsRUFBRUEsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2pJQSxXQUFXQSxJQUFJQSxtREFBbURBLEdBQW9CQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDN0dBLEtBQUtBLENBQUNBO29CQUNQQSxLQUFLQSxFQUFFQTt3QkFDTkEsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsZ0JBQWdCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTt3QkFDM0RBLEdBQUdBLENBQUNBLGFBQWNBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO3dCQUN4RUEsV0FBV0EsSUFBSUEscUJBQXFCQSxDQUFDQTt3QkFDckNBLEtBQUtBLENBQUNBO29CQUNQQSxLQUFLQSxFQUFFQTt3QkFNTkEsS0FBS0EsQ0FBQ0E7b0JBRVBBLEtBQUtBLEdBQUdBO3dCQUNQQSxHQUFHQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSx5QkFBeUJBLEVBQUVBLENBQUNBO3dCQUNyREEsV0FBV0EsSUFBSUEsOEJBQThCQSxDQUFDQTt3QkFDOUNBLEtBQUtBLENBQUNBO29CQUNQQSxLQUFLQSxHQUFHQTt3QkFDUEEsR0FBR0EsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsbUJBQW1CQSxFQUFFQSxDQUFDQTt3QkFDL0NBLFdBQVdBLElBQUlBLHdCQUF3QkEsQ0FBQ0E7d0JBQ3hDQSxLQUFLQSxDQUFDQTtvQkFDUEEsS0FBS0EsR0FBR0E7d0JBQ1BBLEdBQUdBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLGlCQUFpQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7d0JBQy9EQSxHQUFHQSxDQUFDQSxjQUFlQSxDQUFDQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDMUVBLFdBQVdBLElBQUlBLHNCQUFzQkEsQ0FBQ0E7d0JBQ3RDQSxLQUFLQSxDQUFDQTtvQkFDUEEsS0FBS0EsR0FBR0E7d0JBQ1BBLEdBQUdBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLHFCQUFxQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2hFQSxHQUFHQSxDQUFDQSxjQUFlQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDckRBLEdBQUdBLENBQUNBLGNBQWVBLENBQUNBLGlCQUFpQkEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JGQSxXQUFXQSxJQUFJQSwwQkFBMEJBLENBQUNBO3dCQUMxQ0EsS0FBS0EsQ0FBQ0E7b0JBQ1BBLEtBQUtBLEdBQUdBO3dCQUNQQSxLQUFLQSxDQUFDQTtvQkFDUEEsS0FBS0EsR0FBR0E7d0JBQ1BBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO3dCQUMzQkEsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDckJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLDRDQUE0Q0EsR0FBR0EsUUFBUUEsR0FBR0EscUNBQXFDQSxDQUFDQSxDQUFDQTt3QkFDaklBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBOzRCQUNsQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsdUZBQXVGQSxDQUFDQSxDQUFDQTt3QkFFekhBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsdUJBQXVCQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDaEZBLFdBQVdBLElBQUlBLDJEQUEyREEsR0FBb0JBLGFBQWFBLENBQUNBLENBQUNBLENBQUVBLENBQUNBLElBQUlBLENBQUNBO3dCQUNySEEsS0FBS0EsQ0FBQ0E7Z0JBQ1JBLENBQUNBO2dCQUNEQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO2dCQUMzQkEsY0FBY0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDckJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQ0RBLEdBQUdBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDdkNBLElBQUlBLENBQUNBLGVBQWVBLENBQVVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBRXpDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNqQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBQzFCQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVEdkIsZUFBZUE7SUFDUEEsZ0NBQVlBLEdBQXBCQSxVQUFxQkEsT0FBY0E7UUFHbEN3QixJQUFJQSxLQUFtQkEsQ0FBQ0E7UUFFeEJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRWhEQSxJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3pEQSxJQUFJQSxRQUFlQSxDQUFDQTtRQUVwQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFFeERBLEFBQ0FBLFdBRFdBO1FBQ1hBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2ZBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO1lBQ2pEQSxJQUFJQSxHQUFVQSxDQUFDQTtZQUNmQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUNqREEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsSUFBSUEsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFN0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO1lBRWpEQSxJQUFJQSxJQUFjQSxDQUFDQTtZQUNuQkEsSUFBSUEsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO1lBRWpEQSxBQU1BQSxFQU5FQTtZQUNGQSx5RkFBeUZBO1lBQ3pGQSxFQUFFQTtZQUNGQSwySEFBMkhBO1lBQzNIQSxrRUFBa0VBO1lBRWxFQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxXQUFXQSxDQUFDQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBRzVHQSxDQUFDQTtRQUVEQSxBQUNBQSxpQkFEaUJBO1FBQ2pCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMxREEsSUFBSUEsQ0FBQ0EsOEJBQThCQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFFbkNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxJQUFJQSxrQkFBa0JBLEdBQWlCQSxDQUFDQSxVQUFVQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFBQTtZQUM1REEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7UUFDcEZBLENBQUNBO0lBRUZBLENBQUNBO0lBRUR4QixlQUFlQTtJQUNQQSxvQ0FBZ0JBLEdBQXhCQSxVQUF5QkEsT0FBY0E7UUFFdEN5QixBQUNBQSwwQkFEMEJBO1lBQ3RCQSxRQUFlQSxDQUFDQTtRQUNwQkEsSUFBSUEsS0FBcUJBLENBQUNBO1FBQzFCQSxJQUFJQSxDQUFRQSxDQUFDQTtRQUViQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxLQUFLQSxFQUFPQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBRUEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBRUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFFMURBLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFFekRBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRWhEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUN4QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRTlCQSxBQUNBQSxXQURXQTtZQUNYQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDZkEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxJQUFJQSxHQUFVQSxDQUFDQTtnQkFDZkEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBRWpEQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN2R0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBRVBBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO2dCQUNqREEsSUFBSUEsSUFBY0EsQ0FBQ0E7Z0JBQ25CQSxJQUFJQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtnQkFFdkJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLElB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Q0FBQ0E7Z0JBQ3RFQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxJQUFJQTtnQkFHUkEsWUFBWUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFvQkEsS0FBS0EsRUFBV0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RFQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLFlBQWFBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM5Q0EsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRWhFQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFFUkEsWUFBWUEsR0FBR0EsSUFBSUEsZ0JBQWdCQSxDQUFvQkEsS0FBS0EsRUFBV0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RFQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLFlBQWFBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM5Q0EsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRTVEQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFDUkEsWUFBWUEsR0FBR0EsSUFBSUEsZ0JBQWdCQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDdkJBLFlBQWFBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4Q0EsWUFBYUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xFQSxLQUFLQSxDQUFDQTtRQUVSQSxDQUFDQTtRQUNEQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFRC9CLGNBQWNBO0lBQ05BLGlDQUFhQSxHQUFyQkEsVUFBc0JBLE9BQU9BLENBQVFBLFFBQURBLEFBQVNBO1FBRTVDZ0MsSUFBSUEsSUFBSUEsR0FBVUEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDckNBLElBQUlBLFVBQVVBLEdBQW1CQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ3pFQSxJQUFJQSxRQUFRQSxHQUFZQSxJQUFJQSxRQUFRQSxFQUFFQSxDQUFDQTtRQUN2Q0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsK0JBQStCQTtRQUUzREEsSUFBSUEsYUFBYUEsR0FBbUJBLENBQUNBLENBQUNBO1FBQ3RDQSxPQUFPQSxhQUFhQSxHQUFHQSxVQUFVQSxFQUFFQSxDQUFDQTtZQUNuQ0EsSUFBSUEsS0FBbUJBLENBQUNBO1lBQ3hCQSxJQUFJQSxHQUFZQSxDQUFDQTtZQUNqQkEsQUFDQUEsa0JBRGtCQTtZQUNsQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtZQUN4Q0EsS0FBS0EsR0FBR0EsSUFBSUEsYUFBYUEsRUFBRUEsQ0FBQ0E7WUFDNUJBLEtBQUtBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGlCQUFpQkEsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsZ0JBQWdCQTtZQUNqRkEsS0FBS0EsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFFaENBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO1lBQzNCQSxLQUFLQSxDQUFDQSxlQUFlQSxHQUFHQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNwQ0EsQUFDQUEsd0NBRHdDQTtZQUN4Q0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7WUFDM0JBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQzVCQSxhQUFhQSxFQUFFQSxDQUFDQTtRQUNqQkEsQ0FBQ0E7UUFFREEsQUFDQUEsNkJBRDZCQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBO1FBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw0QkFBNEJBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLEdBQUdBLHdCQUF3QkEsR0FBR0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7SUFDdkdBLENBQUNBO0lBRURoQyxnQkFBZ0JBO0lBQ1JBLHFDQUFpQkEsR0FBekJBLFVBQTBCQSxPQUFPQSxDQUFRQSxRQUFEQSxBQUFTQTtRQUVoRGlDLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxVQUFVQSxHQUFtQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtRQUN6RUEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsNEJBQTRCQTtRQUV4REEsSUFBSUEsSUFBSUEsR0FBZ0JBLElBQUlBLFlBQVlBLEVBQUVBLENBQUNBO1FBRTNDQSxJQUFJQSxhQUFhQSxHQUFtQkEsQ0FBQ0EsQ0FBQ0E7UUFDdENBLE9BQU9BLGFBQWFBLEdBQUdBLFVBQVVBLEVBQUVBLENBQUNBO1lBQ25DQSxJQUFJQSxVQUFvQkEsQ0FBQ0E7WUFDekJBLElBQUlBLGFBQWFBLENBQVFBLFFBQURBLEFBQVNBLENBQUNBO1lBQ2xDQSxVQUFVQSxHQUFHQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtZQUM3QkEsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtZQUN2REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hCQSxJQUFJQSxRQUFRQSxHQUFpQkEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxDQUFDQTtnQkFFekRBLElBQUlBLEdBQUdBLEdBQVlBLElBQUlBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO2dCQUMxQ0EsVUFBVUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFFOUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLGFBQWFBLENBQUNBLEdBQUdBLFVBQVVBLENBQUNBO1lBQzdDQSxDQUFDQTtZQUNEQSxhQUFhQSxFQUFFQSxDQUFDQTtRQUNqQkEsQ0FBQ0E7UUFDREEsQUFDQUEsMEJBRDBCQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDakNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQ0FBZ0NBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLHdCQUF3QkEsR0FBR0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7SUFDdkdBLENBQUNBO0lBRURqQyxhQUFhQTtJQUNMQSwwQ0FBc0JBLEdBQTlCQSxVQUErQkEsT0FBT0EsQ0FBUUEsUUFBREEsQUFBU0E7UUFFckRrQyxJQUFJQSxTQUFnQkEsQ0FBQ0E7UUFDckJBLElBQUlBLFNBQVNBLENBQVFBLFFBQURBLEFBQVNBLENBQUNBO1FBQzlCQSxJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUNyQ0EsSUFBSUEsSUFBSUEsR0FBb0JBLElBQUlBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7UUFDbkRBLElBQUlBLFVBQVVBLEdBQW1CQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ3pFQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSw0QkFBNEJBO1FBRXhEQSxJQUFJQSxhQUFhQSxHQUFtQkEsQ0FBQ0EsQ0FBQ0E7UUFDdENBLElBQUlBLGFBQXdCQSxDQUFDQTtRQUM3QkEsT0FBT0EsYUFBYUEsR0FBR0EsVUFBVUEsRUFBRUEsQ0FBQ0E7WUFDbkNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO1lBQ2xEQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1lBQ3BEQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSwwQ0FBMENBLEdBQUdBLGFBQWFBLEdBQUdBLFNBQVNBLEdBQUdBLFNBQVNBLEdBQUdBLDhCQUE4QkEsQ0FBQ0EsQ0FBQ0E7WUFDckpBLElBQUlBO2dCQUNIQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFnQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFDdkVBLGFBQWFBLEVBQUVBLENBQUNBO1FBQ2pCQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsK0RBQStEQSxDQUFDQSxDQUFDQTtZQUNoR0EsTUFBTUEsQ0FBQ0E7UUFDUkEsQ0FBQ0E7UUFDREEsQUFDQUEsNEJBRDRCQTtRQUM1QkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDakNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxvQ0FBb0NBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLHdCQUF3QkEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDaEhBLENBQUNBO0lBRURsQyxrQ0FBa0NBO0lBQzFCQSwwQ0FBc0JBLEdBQTlCQSxVQUErQkEsT0FBT0EsQ0FBUUEsUUFBREEsQUFBU0EsRUFBRUEsUUFBd0JBO1FBQXhCbUMsd0JBQXdCQSxHQUF4QkEsZ0JBQXdCQTtRQUUvRUEsSUFBSUEsVUFBVUEsR0FBbUJBLENBQUNBLENBQUNBO1FBQ25DQSxJQUFJQSxhQUFhQSxDQUFRQSxRQUFEQSxBQUFTQSxDQUFDQTtRQUNsQ0EsSUFBSUEsYUFBYUEsQ0FBUUEsUUFBREEsQUFBU0EsQ0FBQ0E7UUFDbENBLElBQUlBLGFBQWFBLENBQVFBLFFBQURBLEFBQVNBLENBQUNBO1FBQ2xDQSxJQUFJQSxTQUFnQkEsQ0FBQ0E7UUFDckJBLElBQUlBLENBQVFBLENBQUNBO1FBQ2JBLElBQUlBLENBQVFBLENBQUNBO1FBQ2JBLElBQUlBLENBQVFBLENBQUNBO1FBQ2JBLElBQUlBLE9BQWNBLENBQUNBO1FBQ25CQSxJQUFJQSxPQUFjQSxDQUFDQTtRQUNuQkEsSUFBSUEsUUFBaUJBLENBQUNBO1FBQ3RCQSxJQUFJQSxPQUEyQkEsQ0FBQ0E7UUFDaENBLElBQUlBLEdBQUdBLEdBQWtCQSxDQUFDQSxDQUFDQTtRQUMzQkEsSUFBSUEsSUFBSUEsR0FBa0JBLElBQUlBLGNBQWNBLEVBQUVBLENBQUNBO1FBQy9DQSxJQUFJQSxPQUFPQSxDQUFlQSxRQUFEQSxBQUFTQSxDQUFDQTtRQUNuQ0EsSUFBSUEsS0FBbUJBLENBQUNBO1FBQ3hCQSxJQUFJQSxXQUFXQSxHQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLElBQUlBLGFBQWFBLEdBQWtCQSxDQUFDQSxDQUFDQTtRQUNyQ0EsSUFBSUEsV0FBV0EsR0FBeUJBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBLE9BQURBLEFBQVFBLENBQUNBO1FBQ3BFQSxJQUFJQSxLQUFtQkEsQ0FBQ0E7UUFDeEJBLElBQUlBLE9BQWdCQSxDQUFDQTtRQUNyQkEsSUFBSUEsSUFBSUEsR0FBVUEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDckNBLElBQUlBLFNBQVNBLEdBQWtCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtRQUNyRUEsSUFBSUEsYUFBYUEsR0FBY0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbEZBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSw0Q0FBNENBLEdBQUdBLFNBQVNBLEdBQUdBLDRCQUE0QkEsQ0FBQ0EsQ0FBQ0E7WUFDeEhBLE1BQU1BLENBQUNBO1FBQ1JBLENBQUNBO1FBQ0RBLElBQUlBLEdBQUdBLEdBQXdCQSxJQUFJQSxDQUFDQSx1QkFBdUJBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBQ3ZFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNiQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBRXREQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ3hEQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ3REQSxhQUFhQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNsQkEsT0FBT0EsYUFBYUEsR0FBR0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFDcENBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDMURBLGFBQWFBLEVBQUVBLENBQUNBO1FBQ2pCQSxDQUFDQTtRQUNEQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUVuRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbENBLElBQUlBLENBQUNBLGdCQUFnQkEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFFNUNBLGFBQWFBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2xCQSxPQUFPQSxhQUFhQSxHQUFHQSxVQUFVQSxFQUFFQSxDQUFDQTtZQUNuQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtZQUNwREEsUUFBUUEsR0FBR0EsSUFBSUEsUUFBUUEsRUFBRUEsQ0FBQ0E7WUFDMUJBLGFBQWFBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2xCQSxPQUFPQSxhQUFhQSxHQUFHQSxhQUFhQSxFQUFFQSxDQUFDQTtnQkFDdENBLGFBQWFBLEdBQUdBLENBQUNBLENBQUNBO2dCQUNsQkEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ2hEQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxDQUFDQTtnQkFDakRBLE9BQU9BLGFBQWFBLEdBQUdBLFdBQVdBLEVBQUVBLENBQUNBO29CQUNwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JDQSxPQUFPQSxHQUFlQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDN0VBLEtBQUtBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO3dCQUM1QkEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1JBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBOzRCQUMvQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQUE7NEJBQ3RDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFBQTs0QkFDdENBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUFBOzRCQUN0Q0EsS0FBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2pCQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTs0QkFDakJBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNsQkEsQ0FBQ0E7d0JBQ0RBLE9BQU9BLEdBQUdBLElBQUlBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3hDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTt3QkFDL0JBLE9BQU9BLENBQUNBLGVBQWVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO3dCQUMvQkEsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7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T0FBY0E7UUFHM0NzQyxJQUFJQSxVQUFVQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ2hFQSxJQUFJQSxrQkFBbUNBLENBQUNBO1FBRXhDQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDL2RBLElBQUlBLFFBQWVBLENBQUNBO1FBQ3BCQSxJQUFJQSxhQUF3QkEsQ0FBQ0E7UUFFN0JBLE1BQU1BLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBRXBCQSxLQUFLQSxHQUFHQTtnQkFDUEEsa0JBQWtCQSxHQUFHQSxJQUFJQSx1QkFBdUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4SUEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsR0FBR0E7Z0JBQ1BBLGtCQUFrQkEsR0FBR0EsSUFBSUEsMEJBQTBCQSxFQUFFQSxDQUFDQTtnQkFDdERBLElBQUlBLE1BQU1BLEdBQW1CQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDMUJBLGtCQUFtQkEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FB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QU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29DQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0NBQ3BCQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7NEJBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGVBQWVBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLElBQUlBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUMzRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsWUFBWUEsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0NBQ3hEQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDdkJBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29DQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0NBQ3BCQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7NEJBQUNBLElBQUlBLENBQUNBLENBQUNBO2dDQUNQQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDdkJBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dDQUM3Q0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7NEJBRXBCQSxDQUFDQTt3QkFDRkEsQ0FBQ0E7d0JBQ0RBLEFBQ0FBLHdIQUR3SEE7d0JBQ3hIQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxD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cUQsSUFBSUEsT0FBT0EsR0FBaUJBLElBQUlBLEtBQUtBLENBQVNBLEVBQUVBLENBQUNBLENBQUNBO1FBRWxEQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNqQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDakJBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ2xCQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3BEQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUVsQkEsQUFFQUEsMEVBRjBFQTtRQUUxRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2ZBLE9BQU9B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QUNyQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLEtBQUtBLENBQUNBO0lBQ3RCQSxlQUFNQSxHQUFVQSxLQUFLQSxDQUFDQTtJQU1yQ0EsZUFBQ0E7QUFBREEsQ0F2QkEsQUF1QkNBLElBQUE7QUFoRkQsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6IkFXRFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQml0bWFwRGF0YVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9iYXNlL0JpdG1hcERhdGFcIik7XG5pbXBvcnQgQ29sb3JUcmFuc2Zvcm1cdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vQ29sb3JUcmFuc2Zvcm1cIik7XG5pbXBvcnQgTWF0cml4M0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL01hdHJpeDNEXCIpO1xuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XG5pbXBvcnQgVVJMUmVxdWVzdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMUmVxdWVzdFwiKTtcbmltcG9ydCBBc3NldFR5cGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldFR5cGVcIik7XG5pbXBvcnQgSUFzc2V0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9JQXNzZXRcIik7XG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XG5pbXBvcnQgUGFyc2VyVXRpbHNcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJVdGlsc1wiKTtcbmltcG9ydCBSZXNvdXJjZURlcGVuZGVuY3lcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1Jlc291cmNlRGVwZW5kZW5jeVwiKTtcbmltcG9ydCBQcm9qZWN0aW9uQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvUHJvamVjdGlvbkJhc2VcIik7XG5pbXBvcnQgUGVyc3BlY3RpdmVQcm9qZWN0aW9uXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL1BlcnNwZWN0aXZlUHJvamVjdGlvblwiKTtcbmltcG9ydCBPcnRob2dyYXBoaWNQcm9qZWN0aW9uXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL09ydGhvZ3JhcGhpY1Byb2plY3Rpb25cIik7XG5pbXBvcnQgT3J0aG9ncmFwaGljT2ZmQ2VudGVyUHJvamVjdGlvblx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL09ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb25cIik7XG5pbXBvcnQgQml0bWFwQ3ViZVRleHR1cmVcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9CaXRtYXBDdWJlVGV4dHVyZVwiKTtcbmltcG9ydCBCaXRtYXBUZXh0dXJlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9CaXRtYXBUZXh0dXJlXCIpO1xuaW1wb3J0IEN1YmVUZXh0dXJlQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvQ3ViZVRleHR1cmVCYXNlXCIpO1xuaW1wb3J0IEltYWdlQ3ViZVRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0ltYWdlQ3ViZVRleHR1cmVcIik7XG5pbXBvcnQgSW1hZ2VUZXh0dXJlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0ltYWdlVGV4dHVyZVwiKTtcbmltcG9ydCBUZXh0dXJlMkRCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlMkRCYXNlXCIpO1xuaW1wb3J0IFRleHR1cmVQcm94eUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL1RleHR1cmVQcm94eUJhc2VcIik7XG5pbXBvcnQgQnl0ZUFycmF5XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL0J5dGVBcnJheVwiKTtcblxuaW1wb3J0IERpc3BsYXlPYmplY3RDb250YWluZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9EaXNwbGF5T2JqZWN0Q29udGFpbmVyXCIpO1xuaW1wb3J0IEJsZW5kTW9kZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0JsZW5kTW9kZVwiKTtcbmltcG9ydCBEaXNwbGF5T2JqZWN0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0Rpc3BsYXlPYmplY3RcIik7XG5pbXBvcnQgR2VvbWV0cnlcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0dlb21ldHJ5XCIpO1xuaW1wb3J0IExpZ2h0QmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0xpZ2h0QmFzZVwiKTtcbmltcG9ydCBUcmlhbmdsZVN1Ykdlb21ldHJ5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9UcmlhbmdsZVN1Ykdlb21ldHJ5XCIpO1xuaW1wb3J0IERpcmVjdGlvbmFsTGlnaHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0RpcmVjdGlvbmFsTGlnaHRcIik7XG5pbXBvcnQgUG9pbnRMaWdodFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9Qb2ludExpZ2h0XCIpO1xuaW1wb3J0IENhbWVyYVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0NhbWVyYVwiKTtcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xuaW1wb3J0IFNreWJveFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1NreWJveFwiKTtcbmltcG9ydCBNYXRlcmlhbEJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL01hdGVyaWFsQmFzZVwiKTtcbmltcG9ydCBMaWdodFBpY2tlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9saWdodHBpY2tlcnMvTGlnaHRQaWNrZXJCYXNlXCIpO1xuaW1wb3J0IFN0YXRpY0xpZ2h0UGlja2VyXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL2xpZ2h0cGlja2Vycy9TdGF0aWNMaWdodFBpY2tlclwiKTtcbmltcG9ydCBDdWJlTWFwU2hhZG93TWFwcGVyXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL3NoYWRvd21hcHBlcnMvQ3ViZU1hcFNoYWRvd01hcHBlclwiKTtcbmltcG9ydCBEaXJlY3Rpb25hbFNoYWRvd01hcHBlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvc2hhZG93bWFwcGVycy9EaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiKTtcbmltcG9ydCBTaGFkb3dNYXBwZXJCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvc2hhZG93bWFwcGVycy9TaGFkb3dNYXBwZXJCYXNlXCIpO1xuaW1wb3J0IFByZWZhYkJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmVmYWJCYXNlXCIpO1xuaW1wb3J0IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDYXBzdWxlUHJlZmFiXCIpO1xuaW1wb3J0IFByaW1pdGl2ZUNvbmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUNvbmVQcmVmYWJcIik7XG5pbXBvcnQgUHJpbWl0aXZlQ3ViZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ3ViZVByZWZhYlwiKTtcbmltcG9ydCBQcmltaXRpdmVDeWxpbmRlclByZWZhYlx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIpO1xuaW1wb3J0IFByaW1pdGl2ZVBsYW5lUHJlZmFiXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVQbGFuZVByZWZhYlwiKTtcbmltcG9ydCBQcmltaXRpdmVTcGhlcmVQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVTcGhlcmVQcmVmYWJcIik7XG5pbXBvcnQgUHJpbWl0aXZlVG9ydXNQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVRvcnVzUHJlZmFiXCIpO1xuXG5pbXBvcnQgQW5pbWF0aW9uU2V0QmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL0FuaW1hdGlvblNldEJhc2VcIik7XG5pbXBvcnQgQW5pbWF0b3JCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRvckJhc2VcIik7XG5pbXBvcnQgVmVydGV4QW5pbWF0aW9uU2V0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1ZlcnRleEFuaW1hdGlvblNldFwiKTtcbmltcG9ydCBWZXJ0ZXhBbmltYXRvclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1ZlcnRleEFuaW1hdG9yXCIpO1xuaW1wb3J0IFNrZWxldG9uQW5pbWF0aW9uU2V0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0aW9uU2V0XCIpO1xuaW1wb3J0IFNrZWxldG9uQW5pbWF0b3JcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9Ta2VsZXRvbkFuaW1hdG9yXCIpO1xuaW1wb3J0IEpvaW50UG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Kb2ludFBvc2VcIik7XG5pbXBvcnQgU2tlbGV0b25cdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblwiKTtcbmltcG9ydCBTa2VsZXRvblBvc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvU2tlbGV0b25Qb3NlXCIpO1xuaW1wb3J0IFNrZWxldG9uSm9pbnRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL1NrZWxldG9uSm9pbnRcIik7XG5pbXBvcnQgU2tlbGV0b25DbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1NrZWxldG9uQ2xpcE5vZGVcIik7XG5pbXBvcnQgVmVydGV4Q2xpcE5vZGVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9ub2Rlcy9WZXJ0ZXhDbGlwTm9kZVwiKTtcbmltcG9ydCBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL21hbmFnZXJzL0RlZmF1bHRNYXRlcmlhbE1hbmFnZXJcIik7XG5pbXBvcnQgU2t5Ym94TWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL21hdGVyaWFscy9Ta3lib3hNYXRlcmlhbFwiKTtcblxuaW1wb3J0IFRyaWFuZ2xlTWF0ZXJpYWxNb2RlXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9UcmlhbmdsZU1hdGVyaWFsTW9kZVwiKTtcbmltcG9ydCBUcmlhbmdsZU1ldGhvZE1hdGVyaWFsXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvVHJpYW5nbGVNZXRob2RNYXRlcmlhbFwiKTtcbmltcG9ydCBBbWJpZW50RW52TWFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0FtYmllbnRFbnZNYXBNZXRob2RcIik7XG5pbXBvcnQgRGlmZnVzZURlcHRoTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VEZXB0aE1ldGhvZFwiKTtcbmltcG9ydCBEaWZmdXNlQ2VsTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUNlbE1ldGhvZFwiKTtcbmltcG9ydCBEaWZmdXNlR3JhZGllbnRNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VHcmFkaWVudE1ldGhvZFwiKTtcbmltcG9ydCBEaWZmdXNlTGlnaHRNYXBNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VMaWdodE1hcE1ldGhvZFwiKTtcbmltcG9ydCBEaWZmdXNlV3JhcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9EaWZmdXNlV3JhcE1ldGhvZFwiKTtcbmltcG9ydCBFZmZlY3RBbHBoYU1hc2tNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEFscGhhTWFza01ldGhvZFwiKTtcbmltcG9ydCBFZmZlY3RDb2xvck1hdHJpeE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Q29sb3JNYXRyaXhNZXRob2RcIik7XG5pbXBvcnQgRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2RcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZFwiKTtcbmltcG9ydCBFZmZlY3RFbnZNYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0RW52TWFwTWV0aG9kXCIpO1xuaW1wb3J0IEVmZmVjdEZvZ01ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEZvZ01ldGhvZFwiKTtcbmltcG9ydCBFZmZlY3RGcmVzbmVsRW52TWFwTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZFwiKTtcbmltcG9ydCBFZmZlY3RMaWdodE1hcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RMaWdodE1hcE1ldGhvZFwiKTtcbmltcG9ydCBFZmZlY3RNZXRob2RCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0TWV0aG9kQmFzZVwiKTtcbmltcG9ydCBFZmZlY3RSaW1MaWdodE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RSaW1MaWdodE1ldGhvZFwiKTtcbmltcG9ydCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2RcIik7XG5pbXBvcnQgU2hhZG93RGl0aGVyZWRNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93RGl0aGVyZWRNZXRob2RcIik7XG5pbXBvcnQgU2hhZG93RmlsdGVyZWRNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93RmlsdGVyZWRNZXRob2RcIik7XG5pbXBvcnQgU2hhZG93TWV0aG9kQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd01ldGhvZEJhc2VcIik7XG5pbXBvcnQgU3BlY3VsYXJGcmVzbmVsTWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhckZyZXNuZWxNZXRob2RcIik7XG5pbXBvcnQgU2hhZG93SGFyZE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0hhcmRNZXRob2RcIik7XG5pbXBvcnQgU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyQW5pc290cm9waWNNZXRob2RcIik7XG5pbXBvcnQgU3BlY3VsYXJDZWxNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJDZWxNZXRob2RcIik7XG5pbXBvcnQgU3BlY3VsYXJQaG9uZ01ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhclBob25nTWV0aG9kXCIpO1xuaW1wb3J0IFNoYWRvd05lYXJNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dOZWFyTWV0aG9kXCIpO1xuaW1wb3J0IFNoYWRvd1NvZnRNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dTb2Z0TWV0aG9kXCIpO1xuXG5pbXBvcnQgVGltZUxpbmUgPSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1RpbWVMaW5lXCIpO1xuaW1wb3J0IFRpbWVMaW5lRnJhbWUgPSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL3RpbWVsaW5lZGF0YS9UaW1lTGluZUZyYW1lXCIpO1xuaW1wb3J0IFRpbWVMaW5lT2JqZWN0ID0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy90aW1lbGluZWRhdGEvVGltZUxpbmVPYmplY3RcIik7XG5pbXBvcnQgRnJhbWVDb21tYW5kID0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy90aW1lbGluZWRhdGEvRnJhbWVDb21tYW5kXCIpO1xuaW1wb3J0IENvbW1hbmRQcm9wc0Rpc3BsYXlPYmplY3QgPSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL3RpbWVsaW5lZGF0YS9Db21tYW5kUHJvcHNEaXNwbGF5T2JqZWN0XCIpO1xuXG4vKipcbiAqIEFXRFBhcnNlciBwcm92aWRlcyBhIHBhcnNlciBmb3IgdGhlIEFXRCBkYXRhIHR5cGUuXG4gKi9cbmNsYXNzIEFXRFBhcnNlciBleHRlbmRzIFBhcnNlckJhc2Vcbntcblx0Ly9zZXQgdG8gXCJ0cnVlXCIgdG8gaGF2ZSBzb21lIGNvbnNvbGUubG9ncyBpbiB0aGUgQ29uc29sZVxuXHRwcml2YXRlIF9kZWJ1Zzpib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2J5dGVEYXRhOkJ5dGVBcnJheTtcblx0cHJpdmF0ZSBfc3RhcnRlZFBhcnNpbmc6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9jdXJfYmxvY2tfaWQ6bnVtYmVyO1xuXHRwcml2YXRlIF9ibG9ja3M6QXJyYXk8QVdEQmxvY2s+O1xuXHRwcml2YXRlIF9uZXdCbG9ja0J5dGVzOkJ5dGVBcnJheTtcblx0cHJpdmF0ZSBfdmVyc2lvbjpBcnJheTxudW1iZXI+O1xuXHRwcml2YXRlIF9jb21wcmVzc2lvbjpudW1iZXI7XG5cdHByaXZhdGUgX2FjY3VyYWN5T25CbG9ja3M6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfYWNjdXJhY3lNYXRyaXg6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfYWNjdXJhY3lHZW86Ym9vbGVhbjtcblx0cHJpdmF0ZSBfYWNjdXJhY3lQcm9wczpib29sZWFuO1xuXHRwcml2YXRlIF9tYXRyaXhOclR5cGU6bnVtYmVyO1xuXHRwcml2YXRlIF9nZW9OclR5cGU6bnVtYmVyO1xuXHRwcml2YXRlIF9wcm9wc05yVHlwZTpudW1iZXI7XG5cdHByaXZhdGUgX3N0cmVhbWluZzpib29sZWFuO1xuXHRwcml2YXRlIF90ZXh0dXJlX3VzZXJzOk9iamVjdCA9IHt9O1xuXHRwcml2YXRlIF9wYXJzZWRfaGVhZGVyOmJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfYm9keTpCeXRlQXJyYXk7XG5cdHByaXZhdGUgX2RlZmF1bHRUZXh0dXJlOkJpdG1hcFRleHR1cmU7ICAgICAvLyBIVE1MIElNQUdFIFRFWFRVUkUgPj8gIVxuXHRwcml2YXRlIF9jdWJlVGV4dHVyZXM6QXJyYXk8YW55Pjtcblx0cHJpdmF0ZSBfZGVmYXVsdEJpdG1hcE1hdGVyaWFsOlRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWw7XG5cdHByaXZhdGUgX2RlZmF1bHRDdWJlVGV4dHVyZTpCaXRtYXBDdWJlVGV4dHVyZTtcblxuXHRwdWJsaWMgc3RhdGljIENPTVBSRVNTSU9OTU9ERV9MWk1BOnN0cmluZyA9IFwibHptYVwiO1xuXHRwdWJsaWMgc3RhdGljIFVOQ09NUFJFU1NFRDpudW1iZXIgPSAwO1xuXHRwdWJsaWMgc3RhdGljIERFRkxBVEU6bnVtYmVyID0gMTtcblx0cHVibGljIHN0YXRpYyBMWk1BOm51bWJlciA9IDI7XG5cdHB1YmxpYyBzdGF0aWMgSU5UODpudW1iZXIgPSAxO1xuXHRwdWJsaWMgc3RhdGljIElOVDE2Om51bWJlciA9IDI7XG5cdHB1YmxpYyBzdGF0aWMgSU5UMzI6bnVtYmVyID0gMztcblx0cHVibGljIHN0YXRpYyBVSU5UODpudW1iZXIgPSA0O1xuXHRwdWJsaWMgc3RhdGljIFVJTlQxNjpudW1iZXIgPSA1O1xuXHRwdWJsaWMgc3RhdGljIFVJTlQzMjpudW1iZXIgPSA2O1xuXHRwdWJsaWMgc3RhdGljIEZMT0FUMzI6bnVtYmVyID0gNztcblx0cHVibGljIHN0YXRpYyBGTE9BVDY0Om51bWJlciA9IDg7XG5cdHB1YmxpYyBzdGF0aWMgQk9PTDpudW1iZXIgPSAyMTtcblx0cHVibGljIHN0YXRpYyBDT0xPUjpudW1iZXIgPSAyMjtcblx0cHVibGljIHN0YXRpYyBCQUREUjpudW1iZXIgPSAyMztcblx0cHVibGljIHN0YXRpYyBBV0RTVFJJTkc6bnVtYmVyID0gMzE7XG5cdHB1YmxpYyBzdGF0aWMgQVdEQllURUFSUkFZOm51bWJlciA9IDMyO1xuXHRwdWJsaWMgc3RhdGljIFZFQ1RPUjJ4MTpudW1iZXIgPSA0MTtcblx0cHVibGljIHN0YXRpYyBWRUNUT1IzeDE6bnVtYmVyID0gNDI7XG5cdHB1YmxpYyBzdGF0aWMgVkVDVE9SNHgxOm51bWJlciA9IDQzO1xuXHRwdWJsaWMgc3RhdGljIE1UWDN4MjpudW1iZXIgPSA0NDtcblx0cHVibGljIHN0YXRpYyBNVFgzeDM6bnVtYmVyID0gNDU7XG5cdHB1YmxpYyBzdGF0aWMgTVRYNHgzOm51bWJlciA9IDQ2O1xuXHRwdWJsaWMgc3RhdGljIE1UWDR4NDpudW1iZXIgPSA0NztcblxuXHRwcml2YXRlIGJsZW5kTW9kZURpYzpBcnJheTxzdHJpbmc+O1xuXHRwcml2YXRlIF9kZXB0aFNpemVEaWM6QXJyYXk8bnVtYmVyPjtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBBV0RQYXJzZXIgb2JqZWN0LlxuXHQgKiBAcGFyYW0gdXJpIFRoZSB1cmwgb3IgaWQgb2YgdGhlIGRhdGEgb3IgZmlsZSB0byBiZSBwYXJzZWQuXG5cdCAqIEBwYXJhbSBleHRyYSBUaGUgaG9sZGVyIGZvciBleHRyYSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgcGFyc2VyIG1pZ2h0IG5lZWQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHRzdXBlcihVUkxMb2FkZXJEYXRhRm9ybWF0LkFSUkFZX0JVRkZFUik7XG5cblx0XHR0aGlzLl9ibG9ja3MgPSBuZXcgQXJyYXk8QVdEQmxvY2s+KCk7XG5cdFx0dGhpcy5fYmxvY2tzWzBdID0gbmV3IEFXREJsb2NrKCk7XG5cdFx0dGhpcy5fYmxvY2tzWzBdLmRhdGEgPSBudWxsOyAvLyBaZXJvIGFkZHJlc3MgbWVhbnMgbnVsbCBpbiBBV0RcblxuXHRcdHRoaXMuYmxlbmRNb2RlRGljID0gbmV3IEFycmF5PHN0cmluZz4oKTsgLy8gdXNlZCB0byB0cmFuc2xhdGUgaW50cyB0byBibGVuZE1vZGUtc3RyaW5nc1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk5PUk1BTCk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuQUREKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5BTFBIQSk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuREFSS0VOKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5ESUZGRVJFTkNFKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5FUkFTRSk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuSEFSRExJR0hUKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5JTlZFUlQpO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkxBWUVSKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5MSUdIVEVOKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5NVUxUSVBMWSk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTk9STUFMKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5PVkVSTEFZKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5TQ1JFRU4pO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLlNIQURFUik7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuT1ZFUkxBWSk7XG5cblx0XHR0aGlzLl9kZXB0aFNpemVEaWMgPSBuZXcgQXJyYXk8bnVtYmVyPigpOyAvLyB1c2VkIHRvIHRyYW5zbGF0ZSBpbnRzIHRvIGRlcHRoU2l6ZS12YWx1ZXNcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMucHVzaCgyNTYpO1xuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDUxMik7XG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMjA0OCk7XG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMTAyNCk7XG5cdFx0dGhpcy5fdmVyc2lvbiA9IEFycmF5PG51bWJlcj4oKTsgLy8gd2lsbCBjb250YWluIDIgaW50IChtYWpvci12ZXJzaW9uLCBtaW5vci12ZXJzaW9uKSBmb3IgYXdkLXZlcnNpb24tY2hlY2tcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgYSBnaXZlbiBmaWxlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYnkgdGhlIHBhcnNlci5cblx0ICogQHBhcmFtIGV4dGVuc2lvbiBUaGUgZmlsZSBleHRlbnNpb24gb2YgYSBwb3RlbnRpYWwgZmlsZSB0byBiZSBwYXJzZWQuXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGZpbGUgdHlwZSBpcyBzdXBwb3J0ZWQuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzVHlwZShleHRlbnNpb246c3RyaW5nKTpib29sZWFuXG5cdHtcblx0XHRleHRlbnNpb24gPSBleHRlbnNpb24udG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gZXh0ZW5zaW9uID09IFwiYXdkXCI7XG5cdH1cblxuXHQvKipcblx0ICogVGVzdHMgd2hldGhlciBhIGRhdGEgYmxvY2sgY2FuIGJlIHBhcnNlZCBieSB0aGUgcGFyc2VyLlxuXHQgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBibG9jayB0byBwb3RlbnRpYWxseSBiZSBwYXJzZWQuXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGRhdGEgaXMgc3VwcG9ydGVkLlxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c0RhdGEoZGF0YTphbnkpOmJvb2xlYW5cblx0e1xuXHRcdHJldHVybiAoUGFyc2VyVXRpbHMudG9TdHJpbmcoZGF0YSwgMykgPT0gJ0FXRCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KVxuXHR7XG5cdFx0Ly8gdGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIERlcGVuZGVuY3kgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG5cdFx0Ly8gdGhlIEFzc2V0cyB3YWl0aW5nIGZvciB0aGlzIEJpdG1hcCwgY2FuIGJlIFRleHR1cmUgb3IgQ3ViZVRleHR1cmUuXG5cdFx0Ly8gaWYgdGhlIEJpdG1hcCBpcyBhd2FpdGVkIGJ5IGEgQ3ViZVRleHR1cmUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXRzIHRoZSBsYXN0IEJpdG1hcCBvZiB0aGUgQ3ViZVRleHR1cmUsXG5cdFx0Ly8gc28gd2Uga25vdyBpZiB3ZSBoYXZlIHRvIGZpbmFsaXplIHRoZSBBc3NldCAoQ3ViZVRleHR1cmUpIG9yIG5vdC5cblx0XHRpZiAocmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0cy5sZW5ndGggPT0gMSkge1xuXHRcdFx0dmFyIGlzQ3ViZVRleHR1cmVBcnJheTpBcnJheTxzdHJpbmc+ID0gcmVzb3VyY2VEZXBlbmRlbmN5LmlkLnNwbGl0KFwiI1wiKTtcblx0XHRcdHZhciByZXNzb3VyY2VJRDpzdHJpbmcgPSBpc0N1YmVUZXh0dXJlQXJyYXlbMF07XG5cdFx0XHR2YXIgYXNzZXQ6VGV4dHVyZVByb3h5QmFzZTtcblx0XHRcdHZhciB0aGlzQml0bWFwVGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xuXHRcdFx0dmFyIGJsb2NrOkFXREJsb2NrO1xuXG5cdFx0XHRpZiAoaXNDdWJlVGV4dHVyZUFycmF5Lmxlbmd0aCA9PSAxKSAvLyBOb3QgYSBjdWJlIHRleHR1cmVcblx0XHRcdHtcblx0XHRcdFx0YXNzZXQgPSA8VGV4dHVyZTJEQmFzZT4gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcblx0XHRcdFx0aWYgKGFzc2V0KSB7XG5cdFx0XHRcdFx0dmFyIG1hdDpUcmlhbmdsZU1ldGhvZE1hdGVyaWFsO1xuXHRcdFx0XHRcdHZhciB1c2VyczpBcnJheTxzdHJpbmc+O1xuXG5cdFx0XHRcdFx0YmxvY2sgPSB0aGlzLl9ibG9ja3NbIHJlc291cmNlRGVwZW5kZW5jeS5pZCBdO1xuXHRcdFx0XHRcdGJsb2NrLmRhdGEgPSBhc3NldDsgLy8gU3RvcmUgZmluaXNoZWQgYXNzZXRcblxuXHRcdFx0XHRcdC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxuXHRcdFx0XHRcdC8vIGFzIG9wcG9zZWQgdG8gd2hhdGV2ZXIgdGhlIGltYWdlIHBhcnNlciBjYW1lIHVwIHdpdGguXG5cdFx0XHRcdFx0YXNzZXQucmVzZXRBc3NldFBhdGgoYmxvY2submFtZSwgbnVsbCwgdHJ1ZSk7XG5cdFx0XHRcdFx0YmxvY2submFtZSA9IGFzc2V0Lm5hbWU7XG5cdFx0XHRcdFx0Ly8gRmluYWxpemUgdGV4dHVyZSBhc3NldCB0byBkaXNwYXRjaCB0ZXh0dXJlIGV2ZW50LCB3aGljaCB3YXNcblx0XHRcdFx0XHQvLyBwcmV2aW91c2x5IHN1cHByZXNzZWQgd2hpbGUgdGhlIGRlcGVuZGVuY3kgd2FzIGxvYWRlZC5cblx0XHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGxvYWRlZCBCaXRtYXAgZm9yIHRleHR1cmVcIik7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCB0ZXh0dXJlOiBOYW1lID0gXCIgKyBibG9jay5uYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzQ3ViZVRleHR1cmVBcnJheS5sZW5ndGggPiAxKSAvLyBDdWJlIFRleHR1cmVcblx0XHRcdHtcblx0XHRcdFx0dGhpc0JpdG1hcFRleHR1cmUgPSA8Qml0bWFwVGV4dHVyZT4gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcblxuXHRcdFx0XHR2YXIgdHg6SW1hZ2VUZXh0dXJlID0gPEltYWdlVGV4dHVyZT4gdGhpc0JpdG1hcFRleHR1cmU7XG5cblx0XHRcdFx0dGhpcy5fY3ViZVRleHR1cmVzWyBpc0N1YmVUZXh0dXJlQXJyYXlbMV0gXSA9IHR4Lmh0bWxJbWFnZUVsZW1lbnQ7IC8vID9cblx0XHRcdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ucHVzaCgxKTtcblxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBsb2FkZWQgQml0bWFwIFwiICsgdGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ubGVuZ3RoICsgXCIgLyA2IGZvciBDdWJldGV4dHVyZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ubGVuZ3RoID09IHRoaXMuX2N1YmVUZXh0dXJlcy5sZW5ndGgpIHtcblxuXHRcdFx0XHRcdHZhciBwb3NYOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1swXTtcblx0XHRcdFx0XHR2YXIgbmVnWDphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbMV07XG5cdFx0XHRcdFx0dmFyIHBvc1k6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzJdO1xuXHRcdFx0XHRcdHZhciBuZWdZOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1szXTtcblx0XHRcdFx0XHR2YXIgcG9zWjphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbNF07XG5cdFx0XHRcdFx0dmFyIG5lZ1o6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzVdO1xuXG5cdFx0XHRcdFx0YXNzZXQgPSA8VGV4dHVyZVByb3h5QmFzZT4gbmV3IEltYWdlQ3ViZVRleHR1cmUocG9zWCwgbmVnWCwgcG9zWSwgbmVnWSwgcG9zWiwgbmVnWik7XG5cdFx0XHRcdFx0YmxvY2sgPSB0aGlzLl9ibG9ja3NbcmVzc291cmNlSURdO1xuXHRcdFx0XHRcdGJsb2NrLmRhdGEgPSBhc3NldDsgLy8gU3RvcmUgZmluaXNoZWQgYXNzZXRcblxuXHRcdFx0XHRcdC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxuXHRcdFx0XHRcdC8vIGFzIG9wcG9zZWQgdG8gd2hhdGV2ZXIgdGhlIGltYWdlIHBhcnNlciBjYW1lIHVwIHdpdGguXG5cdFx0XHRcdFx0YXNzZXQucmVzZXRBc3NldFBhdGgoYmxvY2submFtZSwgbnVsbCwgdHJ1ZSk7XG5cdFx0XHRcdFx0YmxvY2submFtZSA9IGFzc2V0Lm5hbWU7XG5cdFx0XHRcdFx0Ly8gRmluYWxpemUgdGV4dHVyZSBhc3NldCB0byBkaXNwYXRjaCB0ZXh0dXJlIGV2ZW50LCB3aGljaCB3YXNcblx0XHRcdFx0XHQvLyBwcmV2aW91c2x5IHN1cHByZXNzZWQgd2hpbGUgdGhlIGRlcGVuZGVuY3kgd2FzIGxvYWRlZC5cblx0XHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBDdWJlVGV4dHVyZTogTmFtZSA9IFwiICsgYmxvY2submFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KVxuXHR7XG5cdFx0Ly9ub3QgdXNlZCAtIGlmIGEgZGVwZW5kY3kgZmFpbHMsIHRoZSBhd2FpdGluZyBUZXh0dXJlIG9yIEN1YmVUZXh0dXJlIHdpbGwgbmV2ZXIgYmUgZmluYWxpemVkLCBhbmQgdGhlIGRlZmF1bHQtYml0bWFwcyB3aWxsIGJlIHVzZWQuXG5cdFx0Ly8gdGhpcyBtZWFucywgdGhhdCBpZiBvbmUgQml0bWFwIG9mIGEgQ3ViZVRleHR1cmUgZmFpbHMsIHRoZSBDdWJlVGV4dHVyZSB3aWxsIGhhdmUgdGhlIERlZmF1bHRUZXh0dXJlIGFwcGxpZWQgZm9yIGFsbCBzaXggQml0bWFwcy5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNvbHZlIGEgZGVwZW5kZW5jeSBuYW1lXG5cdCAqXG5cdCAqIEBwYXJhbSByZXNvdXJjZURlcGVuZGVuY3kgVGhlIGRlcGVuZGVuY3kgdG8gYmUgcmVzb2x2ZWQuXG5cdCAqL1xuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeU5hbWUocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSwgYXNzZXQ6SUFzc2V0KTpzdHJpbmdcblx0e1xuXHRcdHZhciBvbGROYW1lOnN0cmluZyA9IGFzc2V0Lm5hbWU7XG5cblx0XHRpZiAoYXNzZXQpIHtcblx0XHRcdHZhciBibG9jazpBV0RCbG9jayA9IHRoaXMuX2Jsb2Nrc1twYXJzZUludChyZXNvdXJjZURlcGVuZGVuY3kuaWQpXTtcblx0XHRcdC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxuXHRcdFx0Ly8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cblx0XHRcdGFzc2V0LnJlc2V0QXNzZXRQYXRoKGJsb2NrLm5hbWUsIG51bGwsIHRydWUpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdOYW1lOnN0cmluZyA9IGFzc2V0Lm5hbWU7XG5cblx0XHRhc3NldC5uYW1lID0gb2xkTmFtZTtcblxuXHRcdHJldHVybiBuZXdOYW1lO1xuXG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHB1YmxpYyBfcFByb2NlZWRQYXJzaW5nKCk6Ym9vbGVhblxuXHR7XG5cblx0XHRpZiAoIXRoaXMuX3N0YXJ0ZWRQYXJzaW5nKSB7XG5cdFx0XHR0aGlzLl9ieXRlRGF0YSA9IHRoaXMuX3BHZXRCeXRlRGF0YSgpOy8vZ2V0Qnl0ZURhdGEoKTtcblx0XHRcdHRoaXMuX3N0YXJ0ZWRQYXJzaW5nID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuX3BhcnNlZF9oZWFkZXIpIHtcblxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHQvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vdGhpcy5fYnl0ZURhdGEuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47XG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHQvLyBQYXJzZSBoZWFkZXIgYW5kIGRlY29tcHJlc3MgYm9keSBpZiBuZWVkZWRcblx0XHRcdHRoaXMucGFyc2VIZWFkZXIoKTtcblxuXHRcdFx0c3dpdGNoICh0aGlzLl9jb21wcmVzc2lvbikge1xuXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkRFRkxBVEU6XG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkxaTUE6XG5cdFx0XHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCcpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLlVOQ09NUFJFU1NFRDpcblx0XHRcdFx0XHR0aGlzLl9ib2R5ID0gdGhpcy5fYnl0ZURhdGE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcdC8vIENvbXByZXNzZWQgQVdEIEZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWRcblx0XHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRcdFx0Lypcblx0XHRcdFx0IGNhc2UgQVdEUGFyc2VyLkRFRkxBVEU6XG5cblx0XHRcdFx0IHRoaXMuX2JvZHkgPSBuZXcgQnl0ZUFycmF5KCk7XG5cdFx0XHRcdCB0aGlzLl9ieXRlRGF0YS5yZWFkQnl0ZXModGhpcy5fYm9keSwgMCwgdGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSk7XG5cdFx0XHRcdCB0aGlzLl9ib2R5LnVuY29tcHJlc3MoKTtcblxuXHRcdFx0XHQgYnJlYWs7XG5cdFx0XHRcdCBjYXNlIEFXRFBhcnNlci5MWk1BOlxuXG5cdFx0XHRcdCB0aGlzLl9ib2R5ID0gbmV3IEJ5dGVBcnJheSgpO1xuXHRcdFx0XHQgdGhpcy5fYnl0ZURhdGEucmVhZEJ5dGVzKHRoaXMuX2JvZHksIDAsIHRoaXMuX2J5dGVEYXRhLmdldEJ5dGVzQXZhaWxhYmxlKCkpO1xuXHRcdFx0XHQgdGhpcy5fYm9keS51bmNvbXByZXNzKENPTVBSRVNTSU9OTU9ERV9MWk1BKTtcblxuXHRcdFx0XHQgYnJlYWs7XG5cdFx0XHRcdCAvLyovXG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fcGFyc2VkX2hlYWRlciA9IHRydWU7XG5cblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHQvL3RoaXMuX2JvZHkuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47Ly8gU2hvdWxkIGJlIGRlZmF1bHRcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2JvZHkpIHtcblxuXHRcdFx0d2hpbGUgKHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSA+IDAgJiYgIXRoaXMucGFyc2luZ1BhdXNlZCkgLy8mJiB0aGlzLl9wSGFzVGltZSgpIClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5wYXJzZU5leHRCbG9jaygpO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly8gUmV0dXJuIGNvbXBsZXRlIHN0YXR1c1xuXHRcdFx0aWYgKHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSA9PSAwKSB7XG5cdFx0XHRcdHRoaXMuZGlzcG9zZSgpO1xuXHRcdFx0XHRyZXR1cm4gIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuICBQYXJzZXJCYXNlLk1PUkVfVE9fUEFSU0U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0c3dpdGNoICh0aGlzLl9jb21wcmVzc2lvbikge1xuXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkRFRkxBVEU6XG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkxaTUE6XG5cblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiKCEpIEFXRFBhcnNlciBFcnJvcjogQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCAoISlcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblx0XHRcdC8vIEVycm9yIC0gbW9zdCBsaWtlbHkgX2JvZHkgbm90IHNldCBiZWNhdXNlIHdlIGRvIG5vdCBzdXBwb3J0IGNvbXByZXNzaW9uLlxuXHRcdFx0cmV0dXJuICBQYXJzZXJCYXNlLlBBUlNJTkdfRE9ORTtcblxuXHRcdH1cblxuXHR9XG5cblx0cHVibGljIF9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQ6bnVtYmVyKVxuXHR7XG5cdFx0c3VwZXIuX3BTdGFydFBhcnNpbmcoZnJhbWVMaW1pdCk7XG5cblx0XHQvL2NyZWF0ZSBhIGNvbnRlbnQgb2JqZWN0IGZvciBMb2FkZXJzXG5cdFx0dGhpcy5fcENvbnRlbnQgPSBuZXcgRGlzcGxheU9iamVjdENvbnRhaW5lcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXNwb3NlKCk6dm9pZFxuXHR7XG5cblx0XHRmb3IgKHZhciBjIGluIHRoaXMuX2Jsb2Nrcykge1xuXG5cdFx0XHR2YXIgYjpBV0RCbG9jayA9IDxBV0RCbG9jaz4gdGhpcy5fYmxvY2tzWyBjIF07XG5cdFx0XHRiLmRpc3Bvc2UoKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZU5leHRCbG9jaygpOnZvaWRcblx0e1xuXHRcdHZhciBibG9jazpBV0RCbG9jaztcblx0XHR2YXIgYXNzZXREYXRhOklBc3NldDtcblx0XHR2YXIgaXNQYXJzZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXHRcdHZhciBuczpudW1iZXI7XG5cdFx0dmFyIHR5cGU6bnVtYmVyO1xuXHRcdHZhciBmbGFnczpudW1iZXI7XG5cdFx0dmFyIGxlbjpudW1iZXI7XG5cblx0XHR0aGlzLl9jdXJfYmxvY2tfaWQgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0bnMgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR0eXBlID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0ZmxhZ3MgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRsZW4gPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0dmFyIGJsb2NrQ29tcHJlc3Npb246Ym9vbGVhbiA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUc0KTtcblx0XHR2YXIgYmxvY2tDb21wcmVzc2lvbkxaTUE6Ym9vbGVhbiA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUc1KTtcblxuXHRcdGlmICh0aGlzLl9hY2N1cmFjeU9uQmxvY2tzKSB7XG5cdFx0XHR0aGlzLl9hY2N1cmFjeU1hdHJpeCA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUcxKTtcblx0XHRcdHRoaXMuX2FjY3VyYWN5R2VvID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzIpO1xuXHRcdFx0dGhpcy5fYWNjdXJhY3lQcm9wcyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUczKTtcblx0XHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xuXG5cdFx0XHRpZiAodGhpcy5fYWNjdXJhY3lHZW8pIHtcblx0XHRcdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xuXG5cdFx0XHRpZiAodGhpcy5fYWNjdXJhY3lNYXRyaXgpIHtcblx0XHRcdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XG5cblx0XHRcdGlmICh0aGlzLl9hY2N1cmFjeVByb3BzKSB7XG5cdFx0XHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGJsb2NrRW5kQWxsOm51bWJlciA9IHRoaXMuX2JvZHkucG9zaXRpb24gKyBsZW47XG5cblx0XHRpZiAobGVuID4gdGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpKSB7XG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdBV0QyIGJsb2NrIGxlbmd0aCBpcyBiaWdnZXIgdGhhbiB0aGUgYnl0ZXMgdGhhdCBhcmUgYXZhaWxhYmxlIScpO1xuXHRcdFx0dGhpcy5fYm9keS5wb3NpdGlvbiArPSB0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMgPSBuZXcgQnl0ZUFycmF5KCk7XG5cblxuXHRcdHRoaXMuX2JvZHkucmVhZEJ5dGVzKHRoaXMuX25ld0Jsb2NrQnl0ZXMsIDAsIGxlbik7XG5cblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBDb21wcmVzc2VkIEFXRCBGb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkXG5cblx0XHRpZiAoYmxvY2tDb21wcmVzc2lvbikge1xuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCcpO1xuXG5cdFx0XHQvKlxuXHRcdFx0IGlmIChibG9ja0NvbXByZXNzaW9uTFpNQSlcblx0XHRcdCB7XG5cdFx0XHQgdGhpcy5fbmV3QmxvY2tCeXRlcy51bmNvbXByZXNzKEFXRFBhcnNlci5DT01QUkVTU0lPTk1PREVfTFpNQSk7XG5cdFx0XHQgfVxuXHRcdFx0IGVsc2Vcblx0XHRcdCB7XG5cdFx0XHQgdGhpcy5fbmV3QmxvY2tCeXRlcy51bmNvbXByZXNzKCk7XG5cdFx0XHQgfVxuXHRcdFx0ICovXG5cblx0XHR9XG5cblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly90aGlzLl9uZXdCbG9ja0J5dGVzLmVuZGlhbiA9IEVuZGlhbi5MSVRUTEVfRU5ESUFOO1xuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IDA7XG5cdFx0YmxvY2sgPSBuZXcgQVdEQmxvY2soKTtcblx0XHRibG9jay5sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuO1xuXHRcdGJsb2NrLmlkID0gdGhpcy5fY3VyX2Jsb2NrX2lkO1xuXG5cdFx0dmFyIGJsb2NrRW5kQmxvY2s6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxlbjtcblxuXHRcdGlmIChibG9ja0NvbXByZXNzaW9uKSB7XG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XG5cdFx0XHQvL2Jsb2NrRW5kQmxvY2sgICA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyB0aGlzLl9uZXdCbG9ja0J5dGVzLmxlbmd0aDtcblx0XHRcdC8vYmxvY2subGVuICAgICAgID0gYmxvY2tFbmRCbG9jaztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiQVdEQmxvY2s6ICBJRCA9IFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIgfCBUeXBlSUQgPSBcIiArIHR5cGUgKyBcIiB8IENvbXByZXNzaW9uID0gXCIgKyBibG9ja0NvbXByZXNzaW9uICsgXCIgfCBNYXRyaXgtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeU1hdHJpeCArIFwiIHwgR2VvbWV0cnktUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeUdlbyArIFwiIHwgUHJvcGVydGllcy1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5UHJvcHMpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2Jsb2Nrc1t0aGlzLl9jdXJfYmxvY2tfaWRdID0gYmxvY2s7XG5cblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMykgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMCkpIHtcblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRjYXNlIDI6Ly8ganVzdCBiZWNhdXNlIGkgdXNlZCBibG9ja0lEIDIgaW4gZmlyc3QgZXhwb3J0ZXIgZWFybGllclxuXHRcdFx0XHRjYXNlIDEzMTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2hhcGUyRCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzOi8vIGp1c3QgYmVjYXVzZSBpIHVzZWQgYmxvY2tJRCAzIGluIGZpcnN0IGV4cG9ydGVyIGVhcmxpZXJcblx0XHRcdFx0Y2FzZSAxMzI6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYXBlMkRGaWxsKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ6Ly8ganVzdCBiZWNhdXNlIGkgdXNlZCBibG9ja0lEIDQgaW4gZmlyc3QgZXhwb3J0ZXIgZWFybGllclxuXHRcdFx0XHRjYXNlIDEzMzpcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGltZUxpbmUodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XG5cblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRjYXNlIDExOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VQcmltaXR2ZXModGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNreWJveEluc3RhbmNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VMaWdodCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0Mjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ2FtZXJhKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vICBjYXNlIDQzOlxuXHRcdFx0XHQvLyAgICAgIHBhcnNlVGV4dHVyZVByb2plY3RvcihfY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0Ly8gICAgICBpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdC8vICAgICAgYnJlYWs7XG5cblx0XHRcdFx0Y2FzZSA1MTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTGlnaHRQaWNrZXIodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgODE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1hdGVyaWFsX3YxKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDgzOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VDdWJlVGV4dHVyZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA5MTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2hhcmVkTWV0aG9kQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYWRvd01ldGhvZEJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDExMTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaFBvc2VBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkLCB0cnVlKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTEyOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoUG9zZUFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMTM6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVZlcnRleEFuaW1hdGlvblNldCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMjI6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZUFuaW1hdG9yU2V0KHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI1Mzpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ29tbWFuZCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdC8vKi9cblx0XHR9XG5cdFx0Ly8qXG5cdFx0aWYgKGlzUGFyc2VkID09IGZhbHNlKSB7XG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblxuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAyMjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ29udGFpbmVyKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMjM6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1lc2hJbnN0YW5jZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDgxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VNYXRlcmlhbCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDgyOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VUZXh0dXJlKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTAxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa2VsZXRvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEwMjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2tlbGV0b25Qb3NlKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTAzOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa2VsZXRvbkFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEyMTpcblx0XHRcdFx0XHQvL3RoaXMucGFyc2VVVkFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdC8vYnJlYWs7XG5cdFx0XHRcdGNhc2UgMjU0OlxuXHRcdFx0XHRcdHRoaXMucGFyc2VOYW1lU3BhY2UodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAyNTU6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1ldGFEYXRhKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkFXREJsb2NrOiAgIFVua25vd24gQmxvY2tUeXBlICAoQmxvY2tJRCA9IFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIpIC0gU2tpcCBcIiArIGxlbiArIFwiIGJ5dGVzXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGxlbjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8qL1xuXG5cdFx0dmFyIG1zZ0NudDpudW1iZXIgPSAwO1xuXHRcdGlmICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID09IGJsb2NrRW5kQmxvY2spIHtcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRpZiAoYmxvY2suZXJyb3JNZXNzYWdlcykge1xuXHRcdFx0XHRcdHdoaWxlIChtc2dDbnQgPCBibG9jay5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICghKSBFcnJvcjogXCIgKyBibG9jay5lcnJvck1lc3NhZ2VzW21zZ0NudF0gKyBcIiAoISlcIik7XG5cdFx0XHRcdFx0XHRtc2dDbnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlxcblwiKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cblx0XHRcdFx0Y29uc29sZS5sb2coXCIgICghKSghKSghKSBFcnJvciB3aGlsZSByZWFkaW5nIEFXREJsb2NrIElEIFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIgPSBza2lwIHRvIG5leHQgYmxvY2tcIik7XG5cblx0XHRcdFx0aWYgKGJsb2NrLmVycm9yTWVzc2FnZXMpIHtcblx0XHRcdFx0XHR3aGlsZSAobXNnQ250IDwgYmxvY2suZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAoISkgRXJyb3I6IFwiICsgYmxvY2suZXJyb3JNZXNzYWdlc1ttc2dDbnRdICsgXCIgKCEpXCIpO1xuXHRcdFx0XHRcdFx0bXNnQ250Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fYm9keS5wb3NpdGlvbiA9IGJsb2NrRW5kQWxsO1xuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMgPSBudWxsO1xuXG5cdH1cblxuXG5cdC8vLS1QYXJzZXIgQmxvY2tzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0Ly9CbG9jayBJRCA9IDJcblx0cHJpdmF0ZSBwYXJzZVNoYXBlMkQoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXG5cdFx0dmFyIGdlb206R2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoKTtcblxuXHRcdC8vIFJlYWQgbmFtZSBhbmQgc3ViIGNvdW50XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBudW1fc3ViczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHQvLyBSZWFkIG9wdGlvbmFsIHByb3BlcnRpZXNcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX2dlb05yVHlwZSwgMjp0aGlzLl9nZW9OclR5cGV9KTtcblxuXG5cdFx0Ly8gTG9vcCB0aHJvdWdoIHN1YiBtZXNoZXNcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyID0gMDtcblx0XHR3aGlsZSAoc3Vic19wYXJzZWQgPCBudW1fc3Vicykge1xuXHRcdFx0dmFyIGk6bnVtYmVyO1xuXHRcdFx0dmFyIHNtX2xlbjpudW1iZXIsIHNtX2VuZDpudW1iZXI7XG5cdFx0XHR2YXIgc3ViX2dlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcblx0XHRcdHZhciB3X2luZGljZXM6QXJyYXk8bnVtYmVyPjtcblx0XHRcdHZhciB3ZWlnaHRzOkFycmF5PG51bWJlcj47XG5cblx0XHRcdHNtX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRzbV9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgc21fbGVuO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIiAgICAgICAgKCEpIFBBUlNFIFNVQk1FU0hcIik7XG5cblx0XHRcdC8vIElnbm9yZSBmb3Igbm93IChyZWFkIHV2IGZvciBzdWJzaGFwZXMgbGF0ZXIpXCJcblx0XHRcdHZhciBzdWJQcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xuXHRcdFx0dmFyIGluZGljZXM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0XHR2YXIgaV9pZHg6bnVtYmVyID0gMDtcblx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc21fZW5kKSB7XG5cdFx0XHRcdHZhciBpZHg6bnVtYmVyID0gMDtcblx0XHRcdFx0dmFyIHV2X2lkeDpudW1iZXIgPSAwO1xuXHRcdFx0XHR2YXIgbl9pZHg6bnVtYmVyID0gMDtcblx0XHRcdFx0dmFyIHRfaWR4Om51bWJlciA9IDA7XG5cdFx0XHRcdHZhciBzdHJfZnR5cGU6bnVtYmVyLCBzdHJfdHlwZTpudW1iZXIsIHN0cl9sZW46bnVtYmVyLCBzdHJfZW5kOm51bWJlcjtcblxuXHRcdFx0XHQvLyBUeXBlLCBmaWVsZCB0eXBlLCBsZW5ndGhcblx0XHRcdFx0c3RyX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0c3RyX2Z0eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRzdHJfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHN0cl9sZW47XG5cblx0XHRcdFx0dmFyIHg6bnVtYmVyLCB5Om51bWJlciwgejpudW1iZXI7XG5cdFx0XHRcdHZhciB0eXBlOm51bWJlcjtcblx0XHRcdFx0dmFyIHI6bnVtYmVyLCBnOm51bWJlciwgYjpudW1iZXIsYTpudW1iZXI7XG5cdFx0XHRcdHZhciB1Om51bWJlciwgdjpudW1iZXI7XG5cblx0XHRcdFx0aWYgKHN0cl90eXBlID09IDEpIHtcblx0XHRcdFx0XHR2YXIgdmVydHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0XHRcdFx0dmFyIHV2czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHR2YXIgbm9ybWFsczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHR2YXIgdGFuZ2VudHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcblxuXHRcdFx0XHRcdFx0eCA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0XHR5ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcblx0XHRcdFx0XHRcdHogPSAtMC4xICogc3Vic19wYXJzZWQ7XG5cdFx0XHRcdFx0XHQvL3ogPSBzdWJzX3BhcnNlZDtcblx0XHRcdFx0XHRcdC8veiA9IChibG9ja0lEKjAuMDAxKSArIHN1YnNfcGFyc2VkXG5cdFx0XHRcdFx0XHR0eXBlID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcblx0XHRcdFx0XHRcdHUgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xuXHRcdFx0XHRcdFx0diA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0XHRyID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcblx0XHRcdFx0XHRcdGcgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xuXHRcdFx0XHRcdFx0YiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0XHRhID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcblxuXHRcdFx0XHRcdFx0Ly8gd2hpbGUgdGhpcyBpcyB0cnVlLCBiZSBwYXJzZSB0aGUgdmVydGV4LWRhdGEsIHNvIGl0IGNhbiBiZSByZW5kZXJlZCBhcyBcIm5vcm1hbFwiIDNkLWdlb21ldHJ5XG5cdFx0XHRcdFx0XHRpZiAodHJ1ZSkge1xuXHRcdFx0XHRcdFx0XHR1dnNbaWR4XSA9IDAuMDtcblx0XHRcdFx0XHRcdFx0bm9ybWFsc1tpZHhdID0gMC4wO1xuXHRcdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB4O1xuXHRcdFx0XHRcdFx0XHR1dnNbaWR4XSA9IDAuMDtcblx0XHRcdFx0XHRcdFx0bm9ybWFsc1tpZHhdID0gMC4wO1xuXHRcdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB5O1xuXHRcdFx0XHRcdFx0XHRub3JtYWxzW2lkeF0gPSAxLjA7XG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHo7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdFx0XHQvLyBwYXJzZSBhbmQgc2V0LWRhdGEsIHNvIHRoZSAzZC1nZW9tZXRyeSBjb250YWlucyBhbGwgZGF0YSAoYnV0IGlzIG5vIGxvbmdlciB2YWxpZCBmb3Igbm9ybWFsIDNkLXJlbmRlcilcblx0XHRcdFx0XHRcdFx0Ly8gYXdheTNkLXZlcnRleGRhdGEgICAgfCAgIGF3YXlKUy1zaGFwZS1kYXRhXG5cdFx0XHRcdFx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHRcdFx0XHRcdC8vIHBvcy54ICAgICAgICAgICAgICAgIHwgICBwb3MueFxuXHRcdFx0XHRcdFx0XHQvLyBwb3MueSAgICAgICAgICAgICAgICB8ICAgcG9zLnlcblx0XHRcdFx0XHRcdFx0Ly8gcG9zLnogICAgICAgICAgICAgICAgfCAgIG5vdCB1c2VkXG5cdFx0XHRcdFx0XHRcdC8vIG5vcm1hbC54ICAgICAgICAgICAgIHwgICBjdXJ2ZS10eXBlICgwOm5vdEN1cnZlZCwgMTogY29udmV4LCAyOmNvbmNhdmUpXG5cdFx0XHRcdFx0XHRcdC8vIG5vcm1hbC55ICAgICAgICAgICAgIHwgICBhbHBoYVxuXHRcdFx0XHRcdFx0XHQvLyBub3JtYWwueiAgICAgICAgICAgICB8ICAgbm90IHVzZWRcblx0XHRcdFx0XHRcdFx0Ly8gdXYudSAgICAgICAgICAgICAgICAgfCAgIGN1cnZlLnVcblx0XHRcdFx0XHRcdFx0Ly8gdXYudiAgICAgICAgICAgICAgICAgfCAgIGN1cnZlLnZcblx0XHRcdFx0XHRcdFx0Ly8gdGFuZ2VudC54ICAgICAgICAgICAgfCAgIHJlZFxuXHRcdFx0XHRcdFx0XHQvLyB0YW5nZW50LnkgICAgICAgICAgICB8ICAgZ3JlZW5cblx0XHRcdFx0XHRcdFx0Ly8gdGFuZ2VudC56ICAgICAgICAgICAgfCAgIGJsdWVcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geDtcblx0XHRcdFx0XHRcdFx0Ly91djJbaWR4XSA9IHg7XG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHk7XG5cdFx0XHRcdFx0XHRcdC8vdXYyW2lkeF0gPSB5O1xuXHRcdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB6O1xuXHRcdFx0XHRcdFx0XHR1dnNbdXZfaWR4KytdID0gdTtcblx0XHRcdFx0XHRcdFx0dXZzW3V2X2lkeCsrXSA9IHY7XG5cdFx0XHRcdFx0XHRcdG5vcm1hbHNbbl9pZHgrK10gPSB0eXBlO1xuXHRcdFx0XHRcdFx0XHRub3JtYWxzW25faWR4KytdID0gYTtcblx0XHRcdFx0XHRcdFx0bm9ybWFsc1tuX2lkeCsrXSA9IDA7XG5cdFx0XHRcdFx0XHRcdC8vIHRyYWNlKFwicj1cIiArIHIgKyBcIiBnPVwiICsgZyArIFwiIGI9XCIgKyBiICsgXCIgYT1cIiArIGEpO1xuXHRcdFx0XHRcdFx0XHR0YW5nZW50c1t0X2lkeCsrXSA9IHI7XG5cdFx0XHRcdFx0XHRcdHRhbmdlbnRzW3RfaWR4KytdID0gZztcblx0XHRcdFx0XHRcdFx0dGFuZ2VudHNbdF9pZHgrK10gPSBiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpbiBmdXR1cmUgd2Ugd2lsbCBvbmx5IGhhdmUgb25lIHN0cmVhbSBmb3IgYWxsIGZhY2UtaW5kaWNpZXNcblx0XHRcdFx0Ly8gb25seSBrZWVwaW5nIGl0IHNwbGl0IHVwIGZvciB0aGUgbW9tZW50LFxuXHRcdFx0XHQvLyBzbyB3ZSBjYW4gZGVidWcgYnkgY2hvb3Npbmcgd2hhdCBraW5kIG9mIHRyaWFuZ2xlcyBhcmUgYWRkZWQgdG8gc3ViR2VvLlxuXHRcdFx0XHRlbHNlIGlmIChzdHJfdHlwZSA9PSAyKSB7XG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHR2YXIgdGhpc1ZhbDpudW1iZXI9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0XHRcdGluZGljZXNbaV9pZHgrK10gPSB0aGlzVmFsO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDMpIHtcblxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xuXHRcdFx0XHRcdFx0dmFyIHRoaXNWYWw6bnVtYmVyPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lfaWR4KytdID0gdGhpc1ZhbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fWVsc2UgaWYgKHN0cl90eXBlID09IDQpIHtcblxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xuXHRcdFx0XHRcdFx0dmFyIHRoaXNWYWw6bnVtYmVyPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lfaWR4KytdID0gdGhpc1ZhbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fWVsc2UgaWYgKHN0cl90eXBlID09IDUpIHtcblxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xuXHRcdFx0XHRcdFx0dmFyIHRoaXNWYWw6bnVtYmVyPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lfaWR4KytdID0gdGhpc1ZhbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpOyAvLyBJZ25vcmUgc3ViLW1lc2ggYXR0cmlidXRlcyBmb3Igbm93XG5cblx0XHRcdHN1Yl9nZW9tID0gbmV3IFRyaWFuZ2xlU3ViR2VvbWV0cnkodHJ1ZSk7XG5cdFx0XHRzdWJfZ2VvbS5hdXRvRGVyaXZlTm9ybWFscyA9IGZhbHNlO1xuXHRcdFx0Ly8gd2hlbiByZW5kZXJpbmcgYXMgXCJub3JtYWxcIiAzZC1nZW9tZXRyeSwgd2UgbmVlZCB0byBhdXRvRGVyaXZlIHRhbmdlbnRzXG5cdFx0XHRpZih0cnVlKXtcblx0XHRcdFx0c3ViX2dlb20uYXV0b0Rlcml2ZVRhbmdlbnRzID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdC8vIGlmIHVzaW5nIGEgbmV3IE1hdGVyaWFsLFxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0c3ViX2dlb20udXBkYXRlVmVydGV4VGFuZ2VudHModGFuZ2VudHMpO1xuXHRcdFx0fVxuXHRcdFx0c3ViX2dlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcblx0XHRcdHN1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyh2ZXJ0cyk7XG5cdFx0XHRzdWJfZ2VvbS51cGRhdGVVVnModXZzKTtcblx0XHRcdHN1Yl9nZW9tLnVwZGF0ZVZlcnRleE5vcm1hbHMobm9ybWFscyk7XG5cblx0XHRcdGdlb20uYWRkU3ViR2VvbWV0cnkoc3ViX2dlb20pO1xuXG5cdFx0XHRzdWJzX3BhcnNlZCsrO1xuXHRcdH1cblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBnZW9tLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGdlb207XG5cblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFRyaWFuZ2xlR2VvbWV0cnk6IE5hbWUgPSBcIiArIG5hbWUgKyBcInwgSWQgPSBcIiArIHN1Yl9nZW9tLmlkKTtcblxuXG5cdH1cblxuXHQvL0Jsb2NrIElEID0gM1xuXHRwcml2YXRlIHBhcnNlU2hhcGUyREZpbGwoYmxvY2tJRDpudW1iZXIpOnZvaWQge1xuXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBmaWxsX3R5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dmFyIGZpbGxfcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMzJ9KTsvLyB7IDE6VUlOVDMyLCA2OkFXRFNUUklORyB9ICApOyAvLzsgLCAyOlVJTlQzMiwgMzpVSU5UMzIsIDU6Qk9PTCB9ICk7XG5cblx0XHQvL2NvbnNvbGUubG9nKFwiUGFyc2VkIGEgZmlsbFwiKTtcblx0XHRzd2l0Y2ggKGZpbGxfdHlwZSkge1xuXHRcdFx0Ly8gdG8gZG8sIG5vdCBhbGwgcHJvcGVydGllcyBhcmUgc2V0IG9uIGFsbCBwcmltaXRpdmVzXG5cblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNvbGlkIEZJTEw6IE5hbWUgPSBcIiArIG5hbWUpO1xuXHRcdFx0XHR2YXIgbWF0ZXJpYWw6VHJpYW5nbGVNZXRob2RNYXRlcmlhbD1uZXcgVHJpYW5nbGVNZXRob2RNYXRlcmlhbChmaWxsX3Byb3BzLmdldCgxLCAweGNjY2NjYykpO1xuXHRcdFx0XHRtYXRlcmlhbC5ib3RoU2lkZXM9dHJ1ZTtcblx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0ZXJpYWwsIG5hbWUpO1xuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdGVyaWFsO1xuXHRcdFx0XHQvL3ByZWZhYiA9IG5ldyBhd2F5LnByZWZhYnMuUHJpbWl0aXZlUGxhbmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgMTAwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMSksIHByb3BzLmdldCgzMDIsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSwgcHJvcHMuZ2V0KDcwMiwgZmFsc2UpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBiaXRtYXAgRklMTDogTmFtZSA9IFwiICsgbmFtZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIGxpbmVhciBncmFkaWVudCBGSUxMOiBOYW1lID0gXCIgKyBuYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgcmFkaWFsIGdyYWRpZW50IEZJTEw6IE5hbWUgPSBcIiArIG5hbWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgdW5rbm93biBmaWxsc3R5bGU6IE5hbWUgPSBcIiArIG5hbWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gNFxuXHRwcml2YXRlIHBhcnNlVGltZUxpbmUoYmxvY2tJRDpudW1iZXIpOnZvaWQge1xuXG5cdFx0dmFyIGk6bnVtYmVyO1xuXHRcdHZhciBqOm51bWJlcjtcblx0XHR2YXIgazpudW1iZXI7XG5cblx0XHR2YXIgdGltZUxpbmVDb250YWluZXIgPSBuZXcgVGltZUxpbmUoKTtcblx0XHR2YXIgbmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgaXNTY2VuZSA9ICEhdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dmFyIHNjZW5lSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgbnVtRnJhbWVzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXG5cdFx0Ly8gdmFyIHByZXZpb3VzVGltZUxpbmU6VGltZUxpbmVGcmFtZTtcblx0XHQvLyB2YXIgZmlsbF9wcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQzMn0pOy8vIHsgMTpVSU5UMzIsIDY6QVdEU1RSSU5HIH0gICk7IC8vOyAsIDI6VUlOVDMyLCAzOlVJTlQzMiwgNTpCT09MIH0gKTtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVElNRUxJTkU6IE5hbWUgPSBcIiArIG5hbWUgKyBcInwgaXNTY2VuZSA9IFwiICsgaXNTY2VuZSArIFwifCBzY2VuZUlEID0gXCIgKyBzY2VuZUlEICsgXCJ8IG51bUZyYW1lcyA9IFwiICsgbnVtRnJhbWVzKTtcblxuXHRcdHZhciB0b3RhbER1cmF0aW9uID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtRnJhbWVzOyBpKyspIHtcblx0XHRcdHZhciBmcmFtZSA9IG5ldyBUaW1lTGluZUZyYW1lKCk7XG5cdFx0XHR2YXIgdHJhY2VTdHJpbmcgPSBcImZyYW1lID0gXCIgKyBpO1xuXG5cdFx0XHR2YXIgZnJhbWVEdXJhdGlvbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRmcmFtZS5zZXRGcmFtZVRpbWUodG90YWxEdXJhdGlvbiwgZnJhbWVEdXJhdGlvbik7XG5cdFx0XHR0b3RhbER1cmF0aW9uICs9IGZyYW1lRHVyYXRpb247XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZHVyYXRpb24gPSBcIiArIGZyYW1lRHVyYXRpb24pO1xuXG5cdFx0XHR2YXIgbnVtTGFiZWxzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG51bUxhYmVsczsgaisrKSB7XG5cdFx0XHRcdHZhciBsYWJlbFR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0dmFyIGxhYmVsID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdFx0XHRmcmFtZS5hZGRMYWJlbChsYWJlbCwgbGFiZWxUeXBlKTtcblx0XHRcdFx0dHJhY2VTdHJpbmcgKz0gXCJcXG4gICAgIGxhYmVsID0gXCIgKyBsYWJlbCArIFwiIC0gbGFiZWxUeXBlID0gXCIgKyBsYWJlbFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBudW1Db21tYW5kcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdHZhciBjb21tYW5kU3RyaW5nID0gXCJcXG4gICAgICBDb21tYW5kcyBcIiArIG51bUNvbW1hbmRzO1xuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG51bUNvbW1hbmRzOyBqKyspIHtcblx0XHRcdFx0dmFyIG9iamVjdElEOm51bWJlcjtcblx0XHRcdFx0dmFyIHJlc291cmNlSUQ6bnVtYmVyO1xuXHRcdFx0XHR2YXIgY29tbWFuZFR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHRcdFx0c3dpdGNoIChjb21tYW5kVHlwZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdGNhc2UgMjpcblxuXHRcdFx0XHRcdFx0Ly8gUGxhY2UgT2JqZWN0IENvbW1hbmRcblx0XHRcdFx0XHRcdHZhciBuZXdPYmplY3RQcm9wcyA9IG5ldyBDb21tYW5kUHJvcHNEaXNwbGF5T2JqZWN0KCk7XG5cdFx0XHRcdFx0XHR2YXIgaGFzUmVzb3VyY2UgPSAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcblx0XHRcdFx0XHRcdHZhciBoYXNEaXNwbGF5TWF0cml4ID0gISF0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlKCk7XG5cdFx0XHRcdFx0XHR2YXIgaGFzQ29sb3JNYXRyaXggPSAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcblx0XHRcdFx0XHRcdHZhciBoYXNEZXB0aENoYW5nZSA9ICEhdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdFx0dmFyIGhhc0ZpbHRlckNoYW5nZSA9ICEhdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdFx0dmFyIGhhc0JsZW5kTW9kZUNoYW5nZSA9ICEhdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdFx0dmFyIGhhc0RlcHRoQ2xpcENoYW5nZSA9ICEhdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdFx0dmFyIGhhc1Zpc2liaWxpdHlDaGFuZ2UgPSAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcblxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0XHRcdFx0XHRpZiAoaGFzUmVzb3VyY2UpIHtcblx0XHRcdFx0XHRcdFx0cmVzb3VyY2VJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIEFkZCBuZXcgUmVzb3VyY2UgPSBcIiArIHJlc291cmNlSUQgKyBcIiBhcyBvYmplY3RfaWQgPSBcIiArIG9iamVjdElEO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgIC0gVXBkYXRlIG9iamVjdF9pZCA9IFwiICsgb2JqZWN0SUQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChoYXNEaXNwbGF5TWF0cml4KSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0cmFuc2Zvcm1BcnJheTpudW1iZXJbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHR2YXIgdGhpc01hdHJpeCA9IG5ldyBNYXRyaXgzRCgpO1xuXHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBpbXBsZW1lbnQgdGhpcyBpbiBleHBvcnRlciAobWFrZSB0cmFuc2Zvcm0gb3B0aW9uYWwgM2QpOlxuXHRcdFx0XHRcdFx0XHR2YXIgaXMzZCA9IGZhbHNlOyAvLyAhIXRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzM2QpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzTWF0cml4ID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChrID0gMDsgayA8IDY7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtQXJyYXkucHVzaCh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2V0IHJvdGF0aW9uIGFuZCBzY2FsZVxuXHRcdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucG9zaXRpb24gPSBuZXcgVmVjdG9yM0QodHJhbnNmb3JtQXJyYXlbNF0sIHRyYW5zZm9ybUFycmF5WzVdLCAwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRuZXdPYmplY3RQcm9wcy5zZXREaXNwbGF5bWF0cml4KHRoaXNNYXRyaXgpO1xuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFycmF5ID0gXCIgKyB0cmFuc2Zvcm1BcnJheTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGhhc0NvbG9yTWF0cml4KSB7XG5cdFx0XHRcdFx0XHRcdHZhciBjb2xvck1hdHJpeDpudW1iZXJbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGsgPSAwOyBrIDwgMjA7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yTWF0cml4LnB1c2godGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2V0IENvbG9yVHJhbnNmb3JtIG9uIG9iamVjdFByb3BzXG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgY29sb3JNYXRyaXggPSBcIiArIGNvbG9yTWF0cml4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoaGFzRGVwdGhDaGFuZ2UpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG5ld0RlcHRoID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBEZXB0aCA9IFwiICsgbmV3RGVwdGg7XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBkZXB0aCBvbiBvYmplY3RQcm9wc1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoaGFzRmlsdGVyQ2hhbmdlKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IGFkZCBmaWx0ZXJcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGhhc0JsZW5kTW9kZUNoYW5nZSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgbmV3QmxlbmRNb2RlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgQmxlbmRNb2RlID0gXCIgKyBuZXdCbGVuZE1vZGU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChoYXNEZXB0aENsaXBDaGFuZ2UpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG5ld0NsaXBEZXB0aCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgQ2xpcERlcHRoID0gXCIgKyBuZXdDbGlwRGVwdGg7XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBkZXB0aENsaXBDaGFuZ2Ugb24gb2JqZWN0UHJvcHNcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGhhc1Zpc2liaWxpdHlDaGFuZ2UpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG5ld1Zpc2liaWxpdHkgPSBCb29sZWFuKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKSk7XG5cdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgVmlzaWJpdGlseSA9IFwiICsgbmV3VmlzaWJpbGl0eTtcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2V0IHZpc2liaWxpdHlDaGFuZ2Ugb24gb2JqZWN0UHJvcHNcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIG51bUZpbGxzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBudW1iZXIgb2YgZmlsbHMgPSBcIiArIG51bUZpbGxzO1xuXHRcdFx0XHRcdFx0dmFyIGZpbGxzSURzOm51bWJlcltdID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKGsgPSAwOyBrIDwgbnVtRmlsbHM7IGsrKykge1xuXHRcdFx0XHRcdFx0XHRmaWxsc0lEcy5wdXNoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCkpO1xuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgICAgICBpZCBvZiBmaWxsID0gXCIgKyBmaWxsc0lEc1trXTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlTmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHRcdFx0XHRcdGlmIChpbnN0YW5jZU5hbWUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdG5ld09iamVjdFByb3BzLnNldEluc3RhbmNlbmFtZShpbnN0YW5jZU5hbWUpO1xuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIGluc3RhbmNlTmFtZSA9IFwiICsgaW5zdGFuY2VOYW1lO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBpZiB0aGlzIGlzIGEgXCJBREQgTkVXIE9CSkVDVFwiLWNvbW1hbmQsXG5cdFx0XHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGxvb2t1cCB0aGUgbmV3IG9iamVjdCBieSBBV0QgSUQuXG5cdFx0XHRcdFx0XHRpZiAoaGFzUmVzb3VyY2UpIHtcblx0XHRcdFx0XHRcdFx0Ly8gc291bmQgaXMgYWRkZWQgdG8gdGltZWxpbmUgd2l0aCBkZWRpY2F0ZWQgQ29tbWFuZCwgYXMgaXQgaXMgbm8gZGlzcGxheS1vYmplY3QgKGhhcyBubyBtYXRyaXggZXRjKVxuXHRcdFx0XHRcdFx0XHQvLyBjaGVjayBpZiBhIEdlb21ldHJ5IGNhbiBiZSBmb3VuZCBhdCB0aGUgcmVzb3VyY2VJRCAoQVdELUlEKVxuXHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWRBcnJheTphbnlbXSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHJlc291cmNlSUQsIFsgQXNzZXRUeXBlLkdFT01FVFJZIF0pO1xuXHRcdFx0XHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBnZW9tID0gPEdlb21ldHJ5PnJldHVybmVkQXJyYXlbMV07XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG5ld01lc2ggPSBuZXcgTWVzaChnZW9tKTtcblx0XHRcdFx0XHRcdFx0XHQvLyBnZW9tZXRyeSBmb3VuZC4gY3JlYXRlIG5ldyBDb21tYW5kLCBhZGQgdGhlIHByb3BzIGFuZCB0aGUgbWF0ZXJpYWxzIHRvIGl0XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChrID0gMDsgayA8IG51bUZpbGxzOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZEFycmF5MjphbnlbXSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGZpbGxzSURzW2tdLCBbIEFzc2V0VHlwZS5NQVRFUklBTCBdKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXR1cm5lZEFycmF5MlswXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAobmV3TWVzaC5zdWJNZXNoZXMubGVuZ3RoID4gaykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ld01lc2guc3ViTWVzaGVzW2tdLm1hdGVyaWFsID0gcmV0dXJuZWRBcnJheTJbMV07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG5ld1RpbWVMaW5lTWVzaCA9IG5ldyBUaW1lTGluZU9iamVjdCg8SUFzc2V0Pm5ld01lc2gsIG9iamVjdElELCBuZXcgQ29tbWFuZFByb3BzRGlzcGxheU9iamVjdCgpKTtcblx0XHRcdFx0XHRcdFx0XHR0aW1lTGluZUNvbnRhaW5lci5hZGRUaW1lTGluZU9iamVjdChuZXdUaW1lTGluZU1lc2gpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBuZXdDb21tYW5kYWRkTWVzaCA9IG5ldyBGcmFtZUNvbW1hbmQobmV3VGltZUxpbmVNZXNoKTtcblx0XHRcdFx0XHRcdFx0XHRuZXdDb21tYW5kYWRkTWVzaC5jb21tYW5kUHJvcHMgPSBuZXdPYmplY3RQcm9wcztcblx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb21tYW5kKG5ld0NvbW1hbmRhZGRNZXNoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBubyBnZW9tZXRyeSBmb3VuZCwgc28gd2UgY2hlY2sgZm9yIFRJTUVMSU5FLlxuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZEFycmF5OmFueVtdID0gdGhpcy5nZXRBc3NldEJ5SUQocmVzb3VyY2VJRCwgWyBBc3NldFR5cGUuVElNRUxJTkUgXSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHRpbWVsaW5lIGZvdW5kLiBjcmVhdGUgY29tbWFuZCBhbmQgYWRkIGl0IHRvIHRoZSBmcmFtZVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5ld1RpbWVMaW5lVGltZUxpbmUgPSBuZXcgVGltZUxpbmVPYmplY3QoPFRpbWVMaW5lPnJldHVybmVkQXJyYXlbMV0sIG9iamVjdElELCBuZXcgQ29tbWFuZFByb3BzRGlzcGxheU9iamVjdCgpKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRpbWVMaW5lQ29udGFpbmVyLmFkZFRpbWVMaW5lT2JqZWN0KG5ld1RpbWVMaW5lVGltZUxpbmUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5ld0NvbW1hbmRBZGRUaW1lTGluZSA9IG5ldyBGcmFtZUNvbW1hbmQobmV3VGltZUxpbmVUaW1lTGluZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdDb21tYW5kQWRkVGltZUxpbmUuY29tbWFuZFByb3BzID0gbmV3T2JqZWN0UHJvcHM7XG5cdFx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb21tYW5kKG5ld0NvbW1hbmRBZGRUaW1lTGluZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2V7XG5cdFx0XHRcdFx0XHRcdC8vIGdldCB0aGUgZXhpc3RpbmcgVGltZUxpbmVvYmplY3QgZnJvbm0gdGhlIHRpbWVsaW5lXG5cdFx0XHRcdFx0XHRcdHZhciBuZXdUaW1lTGluZVVwZGF0ZSA9IHRpbWVMaW5lQ29udGFpbmVyLmdldFRpbWVMaW5lT2JqZWN0QnlJRChvYmplY3RJRCk7XG5cdFx0XHRcdFx0XHRcdHZhciBuZXdDb21tYW5kdXBkYXRlID0gbmV3IEZyYW1lQ29tbWFuZChuZXdUaW1lTGluZVVwZGF0ZSk7XG5cdFx0XHRcdFx0XHRcdC8vbmV3Q29tbWFuZHVwZGF0ZS5jb21tYW5kUHJvcHM9bmV3T2JqZWN0UHJvcHM7XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86XG5cdFx0XHRcdFx0XHRcdGZyYW1lLmFkZENvbW1hbmQobmV3Q29tbWFuZHVwZGF0ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgMzpcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIE9iamVjdCBDb21tYW5kXG5cdFx0XHRcdFx0XHRvYmplY3RJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRcdFx0XHR2YXIgbmV3VGltZUxpbmVVcGRhdGUgPSB0aW1lTGluZUNvbnRhaW5lci5nZXRUaW1lTGluZU9iamVjdEJ5SUQob2JqZWN0SUQpO1xuXHRcdFx0XHRcdFx0dmFyIG5ld0NvbW1hbmR1cGRhdGUgPSBuZXcgRnJhbWVDb21tYW5kKG5ld1RpbWVMaW5lVXBkYXRlKTtcblx0XHRcdFx0XHRcdG5ld0NvbW1hbmR1cGRhdGUuYWN0aXZhdGVPYmogPSBmYWxzZTtcblx0XHRcdFx0XHRcdGZyYW1lLmFkZENvbW1hbmQobmV3Q29tbWFuZHVwZGF0ZSk7XG5cdFx0XHRcdFx0XHQvL25ld0NvbW1hbmR1cGRhdGUuY29tbWFuZFByb3BzPW5ld09iamVjdFByb3BzO1xuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAtIFJlbW92ZSBvYmplY3Qgd2l0aCBJRDogXCIgKyBvYmplY3RJRDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSA0OlxuXG5cdFx0XHRcdFx0XHQvLyBBZGQgU291bmQgQ29tbWFuZFxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogY3JlYXRlIENvbW1hbmRQcm9wc1NvdW5kIGFuZCBjaGVjayB3aGljaCBhc3NldCB0byB1c2Vcblx0XHRcdFx0XHRcdG9iamVjdElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0XHRcdHJlc291cmNlSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaW1wbGVtZW50IHNvdW5kIGluIHRpbWVsaW5lXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBBZGQgbmV3IFNvdW5kIEFXRC1JRCA9IFwiICsgcmVzb3VyY2VJRC50b1N0cmluZygpICsgXCIgYXMgb2JqZWN0X2lkID0gXCIgKyBvYmplY3RJRC50b1N0cmluZygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgIC0gVW5rbm93biBDb21tYW5kIFR5cGUgPSBcIiArIGNvbW1hbmRUeXBlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0aWYgKGxlbmd0aF9jb2RlID4gMCkge1xuXHRcdFx0XHR2YXIgZnJhbWVfY29kZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGxlbmd0aF9jb2RlKTtcblx0XHRcdFx0ZnJhbWUuYWRkVG9TY3JpcHQoZnJhbWVfY29kZSk7XG5cdFx0XHRcdHRyYWNlU3RyaW5nICs9IFwiXFxuZnJhbWUtY29kZSA9IFwiICsgZnJhbWVfY29kZTtcblx0XHRcdH1cblx0XHRcdHRyYWNlU3RyaW5nICs9IGNvbW1hbmRTdHJpbmc7XG5cdFx0XHQvL3RyYWNlKFwibGVuZ3RoX2NvZGUgPSBcIitsZW5ndGhfY29kZStcIiBmcmFtZV9jb2RlID0gXCIrZnJhbWVfY29kZSk7XG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpOy8vIHVzZXIgYXR0cmlidXRlcyAtIHNraXAgZm9yIG5vd1xuXHRcdFx0Ly90aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIHN1Yi1tZXNoIGF0dHJpYnV0ZXMgZm9yIG5vd1xuXHRcdFx0Ly9jb25zb2xlLmxvZyh0cmFjZVN0cmluZyk7XG5cdFx0XHR0aW1lTGluZUNvbnRhaW5lci5hZGRGcmFtZShmcmFtZSk7XG5cblx0XHR9XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PnRpbWVMaW5lQ29udGFpbmVyLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRpbWVMaW5lQ29udGFpbmVyO1xuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDFcblx0cHJpdmF0ZSBwYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXG5cdFx0dmFyIGdlb206R2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoKTtcblxuXHRcdC8vIFJlYWQgbmFtZSBhbmQgc3ViIGNvdW50XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBudW1fc3ViczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHQvLyBSZWFkIG9wdGlvbmFsIHByb3BlcnRpZXNcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX2dlb05yVHlwZSwgMjp0aGlzLl9nZW9OclR5cGV9KTtcblx0XHR2YXIgZ2VvU2NhbGVVOm51bWJlciA9IHByb3BzLmdldCgxLCAxKTtcblx0XHR2YXIgZ2VvU2NhbGVWOm51bWJlciA9IHByb3BzLmdldCgyLCAxKTtcblxuXHRcdC8vIExvb3AgdGhyb3VnaCBzdWIgbWVzaGVzXG5cdFx0dmFyIHN1YnNfcGFyc2VkOm51bWJlciA9IDA7XG5cdFx0d2hpbGUgKHN1YnNfcGFyc2VkIDwgbnVtX3N1YnMpIHtcblx0XHRcdHZhciBpOm51bWJlcjtcblx0XHRcdHZhciBzbV9sZW46bnVtYmVyLCBzbV9lbmQ6bnVtYmVyO1xuXHRcdFx0dmFyIHN1Yl9nZW9tOlRyaWFuZ2xlU3ViR2VvbWV0cnk7XG5cdFx0XHR2YXIgd19pbmRpY2VzOkFycmF5PG51bWJlcj47XG5cdFx0XHR2YXIgd2VpZ2h0czpBcnJheTxudW1iZXI+O1xuXG5cdFx0XHRzbV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0c21fZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHNtX2xlbjtcblxuXHRcdFx0Ly8gSWdub3JlIGZvciBub3dcblx0XHRcdHZhciBzdWJQcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xuXHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzbV9lbmQpIHtcblx0XHRcdFx0dmFyIGlkeDpudW1iZXIgPSAwO1xuXHRcdFx0XHR2YXIgc3RyX2Z0eXBlOm51bWJlciwgc3RyX3R5cGU6bnVtYmVyLCBzdHJfbGVuOm51bWJlciwgc3RyX2VuZDpudW1iZXI7XG5cblx0XHRcdFx0Ly8gVHlwZSwgZmllbGQgdHlwZSwgbGVuZ3RoXG5cdFx0XHRcdHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdHN0cl9mdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdFx0XHRzdHJfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xuXG5cdFx0XHRcdHZhciB4Om51bWJlciwgeTpudW1iZXIsIHo6bnVtYmVyO1xuXG5cdFx0XHRcdGlmIChzdHJfdHlwZSA9PSAxKSB7XG5cdFx0XHRcdFx0dmFyIHZlcnRzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBSZXNwZWN0IHN0cmVhbSBmaWVsZCB0eXBlXG5cdFx0XHRcdFx0XHR4ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcblx0XHRcdFx0XHRcdHkgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xuXHRcdFx0XHRcdFx0eiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cblx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHg7XG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB5O1xuXHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0gejtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMikge1xuXHRcdFx0XHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBSZXNwZWN0IHN0cmVhbSBmaWVsZCB0eXBlXG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAzKSB7XG5cdFx0XHRcdFx0dmFyIHV2czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcblx0XHRcdFx0XHRcdHV2c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDQpIHtcblxuXHRcdFx0XHRcdHZhciBub3JtYWxzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHRub3JtYWxzW2lkeCsrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gNikge1xuXHRcdFx0XHRcdHdfaW5kaWNlcyA9IEFycmF5PG51bWJlcj4oKTtcblxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xuXHRcdFx0XHRcdFx0d19pbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSozOyAvLyBUT0RPOiBSZXNwZWN0IHN0cmVhbSBmaWVsZCB0eXBlXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gNykge1xuXG5cdFx0XHRcdFx0d2VpZ2h0cyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcblx0XHRcdFx0XHRcdHdlaWdodHNbaWR4KytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIHN1Yi1tZXNoIGF0dHJpYnV0ZXMgZm9yIG5vd1xuXG5cdFx0XHRzdWJfZ2VvbSA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xuXHRcdFx0aWYgKHdlaWdodHMpXG5cdFx0XHRcdHN1Yl9nZW9tLmpvaW50c1BlclZlcnRleCA9IHdlaWdodHMubGVuZ3RoLyh2ZXJ0cy5sZW5ndGgvMyk7XG5cdFx0XHRpZiAobm9ybWFscylcblx0XHRcdFx0c3ViX2dlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcblx0XHRcdGlmICh1dnMpXG5cdFx0XHRcdHN1Yl9nZW9tLmF1dG9EZXJpdmVVVnMgPSBmYWxzZTtcblx0XHRcdHN1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XG5cdFx0XHRzdWJfZ2VvbS51cGRhdGVQb3NpdGlvbnModmVydHMpO1xuXHRcdFx0c3ViX2dlb20udXBkYXRlVmVydGV4Tm9ybWFscyhub3JtYWxzKTtcblx0XHRcdHN1Yl9nZW9tLnVwZGF0ZVVWcyh1dnMpO1xuXHRcdFx0c3ViX2dlb20udXBkYXRlVmVydGV4VGFuZ2VudHMobnVsbCk7XG5cdFx0XHRzdWJfZ2VvbS51cGRhdGVKb2ludFdlaWdodHMod2VpZ2h0cyk7XG5cdFx0XHRzdWJfZ2VvbS51cGRhdGVKb2ludEluZGljZXMod19pbmRpY2VzKTtcblxuXHRcdFx0dmFyIHNjYWxlVTpudW1iZXIgPSBzdWJQcm9wcy5nZXQoMSwgMSk7XG5cdFx0XHR2YXIgc2NhbGVWOm51bWJlciA9IHN1YlByb3BzLmdldCgyLCAxKTtcblx0XHRcdHZhciBzZXRTdWJVVnM6Ym9vbGVhbiA9IGZhbHNlOyAvL3RoaXMgc2hvdWxkIHJlbWFpbiBmYWxzZSBhdG0sIGJlY2F1c2UgaW4gQXdheUJ1aWxkZXIgdGhlIHV2IGlzIG9ubHkgc2NhbGVkIGJ5IHRoZSBnZW9tZXRyeVxuXG5cdFx0XHRpZiAoKGdlb1NjYWxlVSAhPSBzY2FsZVUpIHx8IChnZW9TY2FsZVYgIT0gc2NhbGVWKSkge1xuXHRcdFx0XHRzZXRTdWJVVnMgPSB0cnVlO1xuXHRcdFx0XHRzY2FsZVUgPSBnZW9TY2FsZVUvc2NhbGVVO1xuXHRcdFx0XHRzY2FsZVYgPSBnZW9TY2FsZVYvc2NhbGVWO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2V0U3ViVVZzKVxuXHRcdFx0XHRzdWJfZ2VvbS5zY2FsZVVWKHNjYWxlVSwgc2NhbGVWKTtcblxuXHRcdFx0Z2VvbS5hZGRTdWJHZW9tZXRyeShzdWJfZ2VvbSk7XG5cblx0XHRcdC8vIFRPRE86IFNvbWVob3cgbWFwIGluLXN1YiB0byBvdXQtc3ViIGluZGljZXMgdG8gZW5hYmxlIGxvb2stdXBcblx0XHRcdC8vIHdoZW4gY3JlYXRpbmcgbWVzaGVzIChhbmQgdGhlaXIgbWF0ZXJpYWwgYXNzaWdubWVudHMuKVxuXG5cdFx0XHRzdWJzX3BhcnNlZCsrO1xuXHRcdH1cblx0XHRpZiAoKGdlb1NjYWxlVSAhPSAxKSB8fCAoZ2VvU2NhbGVWICE9IDEpKVxuXHRcdFx0Z2VvbS5zY2FsZVVWKGdlb1NjYWxlVSwgZ2VvU2NhbGVWKTtcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBnZW9tLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGdlb207XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVHJpYW5nbGVHZW9tZXRyeTogTmFtZSA9IFwiICsgbmFtZSArIFwifCBJZCA9IFwiICsgc3ViX2dlb20uaWQpO1xuXHRcdH1cblxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDExXG5cdHByaXZhdGUgcGFyc2VQcmltaXR2ZXMoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBuYW1lOnN0cmluZztcblx0XHR2YXIgcHJlZmFiOlByZWZhYkJhc2U7XG5cdFx0dmFyIHByaW1UeXBlOm51bWJlcjtcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyO1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzO1xuXHRcdHZhciBic206TWF0cml4M0Q7XG5cblx0XHQvLyBSZWFkIG5hbWUgYW5kIHN1YiBjb3VudFxuXHRcdG5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0cHJpbVR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxMDE6dGhpcy5fZ2VvTnJUeXBlLCAxMDI6dGhpcy5fZ2VvTnJUeXBlLCAxMDM6dGhpcy5fZ2VvTnJUeXBlLCAxMTA6dGhpcy5fZ2VvTnJUeXBlLCAxMTE6dGhpcy5fZ2VvTnJUeXBlLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDMwMzpBV0RQYXJzZXIuVUlOVDE2LCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTCwgNzAzOkFXRFBhcnNlci5CT09MLCA3MDQ6QVdEUGFyc2VyLkJPT0x9KTtcblxuXHRcdHZhciBwcmltaXRpdmVUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiVW5zdXBwb3J0ZWQgVHlwZS1JRFwiLCBcIlByaW1pdGl2ZVBsYW5lUHJlZmFiXCIsIFwiUHJpbWl0aXZlQ3ViZVByZWZhYlwiLCBcIlByaW1pdGl2ZVNwaGVyZVByZWZhYlwiLCBcIlByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIsIFwiUHJpbWl0aXZlc0NvbmVQcmVmYWJcIiwgXCJQcmltaXRpdmVzQ2Fwc3VsZVByZWZhYlwiLCBcIlByaW1pdGl2ZXNUb3J1c1ByZWZhYlwiXVxuXG5cdFx0c3dpdGNoIChwcmltVHlwZSkge1xuXHRcdFx0Ly8gdG8gZG8sIG5vdCBhbGwgcHJvcGVydGllcyBhcmUgc2V0IG9uIGFsbCBwcmltaXRpdmVzXG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVBsYW5lUHJlZmFiKHByb3BzLmdldCgxMDEsIDEwMCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDEpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDdWJlUHJlZmFiKHByb3BzLmdldCgxMDEsIDEwMCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgxMDMsIDEwMCksIHByb3BzLmdldCgzMDEsIDEpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDMwMywgMSksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVNwaGVyZVByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMTIpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDeWxpbmRlclByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDUwKSwgcHJvcHMuZ2V0KDEwMywgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxKSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7IC8vIGJvb2w3MDEsIGJvb2w3MDIsIGJvb2w3MDMsIGJvb2w3MDQpO1xuXHRcdFx0XHRpZiAoIXByb3BzLmdldCg3MDEsIHRydWUpKVxuXHRcdFx0XHRcdCg8UHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWI+cHJlZmFiKS50b3BDbG9zZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYgKCFwcm9wcy5nZXQoNzAyLCB0cnVlKSlcblx0XHRcdFx0XHQoPFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiPnByZWZhYikuYm90dG9tQ2xvc2VkID0gZmFsc2U7XG5cdFx0XHRcdGlmICghcHJvcHMuZ2V0KDcwMywgdHJ1ZSkpXG5cdFx0XHRcdFx0KDxQcmltaXRpdmVDeWxpbmRlclByZWZhYj5wcmVmYWIpLnlVcCA9IGZhbHNlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDb25lUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIHRydWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDE1KSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlVG9ydXNQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCA1MCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgOCksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmVmYWJCYXNlKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRVJST1I6IFVOU1VQUE9SVEVEIFBSRUZBQl9UWVBFXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAoKHByb3BzLmdldCgxMTAsIDEpICE9IDEpIHx8IChwcm9wcy5nZXQoMTExLCAxKSAhPSAxKSkge1xuXHRcdFx0Ly9nZW9tLnN1Ykdlb21ldHJpZXM7XG5cdFx0XHQvL2dlb20uc2NhbGVVVihwcm9wcy5nZXQoMTEwLCAxKSwgcHJvcHMuZ2V0KDExMSwgMSkpOyAvL1RPRE8gYWRkIGJhY2sgc2NhbGluZyB0byBwcmVmYWJzXG5cdFx0fVxuXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0cHJlZmFiLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHByZWZhYiwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBwcmVmYWI7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGlmICgocHJpbVR5cGUgPCAwKSB8fCAocHJpbVR5cGUgPiA3KSkge1xuXHRcdFx0XHRwcmltVHlwZSA9IDA7XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFByaW1pdml0ZTogTmFtZSA9IFwiICsgbmFtZSArIFwifCB0eXBlID0gXCIgKyBwcmltaXRpdmVUeXBlc1twcmltVHlwZV0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIEJsb2NrIElEID0gMjJcblx0cHJpdmF0ZSBwYXJzZUNvbnRhaW5lcihibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIG5hbWU6c3RyaW5nO1xuXHRcdHZhciBwYXJfaWQ6bnVtYmVyO1xuXHRcdHZhciBtdHg6TWF0cml4M0Q7XG5cdFx0dmFyIGN0cjpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xuXHRcdHZhciBwYXJlbnQ6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcblxuXHRcdHBhcl9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0bXR4ID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XG5cdFx0bmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblxuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XG5cdFx0Y3RyID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcblx0XHRjdHIudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKTtcblxuXHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHR2YXIgb2JqOkRpc3BsYXlPYmplY3QgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV0pLmFkZENoaWxkKGN0cik7XG5cdFx0XHRwYXJlbnROYW1lID0gKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xuXHRcdH0gZWxzZSBpZiAocGFyX2lkID4gMCkge1xuXHRcdFx0dGhpcy5fYmxvY2tzWyBibG9ja0lEIF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBPYmplY3RDb250YWluZXIzRFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGN0cik7XG5cdFx0fVxuXG5cdFx0Ly8gaW4gQVdEIHZlcnNpb24gMi4xIHdlIHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XG5cdFx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xuXHRcdFx0Y3RyLnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xuXHRcdH1cblx0XHQvLyBpbiBvdGhlciB2ZXJzaW9ucyB3ZSBkbyBub3QgcmVhZCB0aGUgQ29udGFpbmVyIHByb3BlcnRpZXNcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdH1cblxuXHRcdC8vIHRoZSBleHRyYVByb3BlcnRpZXMgc2hvdWxkIG9ubHkgYmUgc2V0IGZvciBBV0QyLjEtRmlsZXMsIGJ1dCBpcyByZWFkIGZvciBib3RoIHZlcnNpb25zXG5cdFx0Y3RyLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBjdHIsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY3RyO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIENvbnRhaW5lcjogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQmxvY2sgSUQgPSAyM1xuXHRwcml2YXRlIHBhcnNlTWVzaEluc3RhbmNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgbnVtX21hdGVyaWFsczpudW1iZXI7XG5cdFx0dmFyIG1hdGVyaWFsc19wYXJzZWQ6bnVtYmVyO1xuXHRcdHZhciBwYXJlbnQ6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIG10eDpNYXRyaXgzRCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xuXHRcdHZhciBkYXRhX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIGdlb206R2VvbWV0cnk7XG5cdFx0dmFyIHJldHVybmVkQXJyYXlHZW9tZXRyeTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZGF0YV9pZCwgW0Fzc2V0VHlwZS5HRU9NRVRSWV0pXG5cblx0XHRpZiAocmV0dXJuZWRBcnJheUdlb21ldHJ5WzBdKSB7XG5cdFx0XHRnZW9tID0gPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5R2VvbWV0cnlbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgR2VvbWV0cnkgZm9yIHRoaXMgTWVzaC4gQSBlbXB0eSBHZW9tZXRyeSBpcyBjcmVhdGVkIVwiKTtcblx0XHRcdGdlb20gPSBuZXcgR2VvbWV0cnkoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZ2VvSUQgPSBkYXRhX2lkO1xuXHRcdHZhciBtYXRlcmlhbHM6QXJyYXk8TWF0ZXJpYWxCYXNlPiA9IG5ldyBBcnJheTxNYXRlcmlhbEJhc2U+KCk7XG5cdFx0bnVtX21hdGVyaWFscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblxuXHRcdHZhciBtYXRlcmlhbE5hbWVzOkFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXHRcdG1hdGVyaWFsc19wYXJzZWQgPSAwO1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXlNYXRlcmlhbDpBcnJheTxhbnk+O1xuXG5cdFx0d2hpbGUgKG1hdGVyaWFsc19wYXJzZWQgPCBudW1fbWF0ZXJpYWxzKSB7XG5cdFx0XHR2YXIgbWF0X2lkOm51bWJlcjtcblx0XHRcdG1hdF9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRyZXR1cm5lZEFycmF5TWF0ZXJpYWwgPSB0aGlzLmdldEFzc2V0QnlJRChtYXRfaWQsIFtBc3NldFR5cGUuTUFURVJJQUxdKVxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheU1hdGVyaWFsWzBdKSAmJiAobWF0X2lkID4gMCkpIHtcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgTWF0ZXJpYWwgTnIgXCIgKyBtYXRlcmlhbHNfcGFyc2VkICsgXCIgKElEID0gXCIgKyBtYXRfaWQgKyBcIiApIGZvciB0aGlzIE1lc2hcIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtOk1hdGVyaWFsQmFzZSA9IDxNYXRlcmlhbEJhc2U+IHJldHVybmVkQXJyYXlNYXRlcmlhbFsxXTtcblxuXHRcdFx0bWF0ZXJpYWxzLnB1c2gobSk7XG5cdFx0XHRtYXRlcmlhbE5hbWVzLnB1c2gobS5uYW1lKTtcblxuXHRcdFx0bWF0ZXJpYWxzX3BhcnNlZCsrO1xuXHRcdH1cblxuXHRcdHZhciBtZXNoOk1lc2ggPSBuZXcgTWVzaChnZW9tLCBudWxsKTtcblx0XHRtZXNoLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcblxuXHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XG5cdFx0XHR2YXIgb2JqQzpEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV07XG5cdFx0XHRvYmpDLmFkZENoaWxkKG1lc2gpO1xuXHRcdFx0cGFyZW50TmFtZSA9IG9iakMubmFtZTtcblx0XHR9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIE1lc2hcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChtZXNoKTtcblx0XHR9XG5cblx0XHRpZiAobWF0ZXJpYWxzLmxlbmd0aCA+PSAxICYmIG1lc2guc3ViTWVzaGVzLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWxzWzBdO1xuXHRcdH0gZWxzZSBpZiAobWF0ZXJpYWxzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHZhciBpOm51bWJlcjtcblxuXHRcdFx0Ly8gQXNzaWduIGVhY2ggc3ViLW1lc2ggaW4gdGhlIG1lc2ggYSBtYXRlcmlhbCBmcm9tIHRoZSBsaXN0LiBJZiBtb3JlIHN1Yi1tZXNoZXNcblx0XHRcdC8vIHRoYW4gbWF0ZXJpYWxzLCByZXBlYXQgdGhlIGxhc3QgbWF0ZXJpYWwgZm9yIGFsbCByZW1haW5pbmcgc3ViLW1lc2hlcy5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXNoLnN1Yk1lc2hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRtZXNoLnN1Yk1lc2hlc1tpXS5tYXRlcmlhbCA9IG1hdGVyaWFsc1tNYXRoLm1pbihtYXRlcmlhbHMubGVuZ3RoIC0gMSwgaSldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMSkpIHtcblx0XHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4LCA1OkFXRFBhcnNlci5CT09MfSk7XG5cdFx0XHRtZXNoLnBpdm90ID0gbmV3IFZlY3RvcjNEKDxudW1iZXI+cHJvcHMuZ2V0KDEsIDApLCA8bnVtYmVyPnByb3BzLmdldCgyLCAwKSwgPG51bWJlcj4gcHJvcHMuZ2V0KDMsIDApKTtcblx0XHRcdG1lc2guY2FzdHNTaGFkb3dzID0gcHJvcHMuZ2V0KDUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHR9XG5cblx0XHRtZXNoLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtZXNoLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1lc2g7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTWVzaDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSArIFwifCBHZW9tZXRyeS1OYW1lID0gXCIgKyBnZW9tLm5hbWUgKyBcIiB8IFN1Yk1lc2hlcyA9IFwiICsgbWVzaC5zdWJNZXNoZXMubGVuZ3RoICsgXCIgfCBNYXQtTmFtZXMgPSBcIiArIG1hdGVyaWFsTmFtZXMudG9TdHJpbmcoKSk7XG5cdFx0fVxuXHR9XG5cblxuXHQvL0Jsb2NrIElEIDMxXG5cdHByaXZhdGUgcGFyc2VTa3lib3hJbnN0YW5jZShibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBjdWJlVGV4QWRkcjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXlDdWJlVGV4OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChjdWJlVGV4QWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcblx0XHRpZiAoKCFyZXR1cm5lZEFycmF5Q3ViZVRleFswXSkgJiYgKGN1YmVUZXhBZGRyICE9IDApKVxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEN1YmV0ZXh0dXJlIChJRCA9IFwiICsgY3ViZVRleEFkZHIgKyBcIiApIGZvciB0aGlzIFNreWJveFwiKTtcblx0XHR2YXIgYXNzZXQ6U2t5Ym94ID0gbmV3IFNreWJveChuZXcgU2t5Ym94TWF0ZXJpYWwoPEltYWdlQ3ViZVRleHR1cmU+IHJldHVybmVkQXJyYXlDdWJlVGV4WzFdKSk7XG5cblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKVxuXHRcdGFzc2V0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoYXNzZXQsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa3lib3g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgQ3ViZVRleHR1cmUtTmFtZSA9IFwiICsgKDxJbWFnZUN1YmVUZXh0dXJlPiByZXR1cm5lZEFycmF5Q3ViZVRleFsxXSkubmFtZSk7XG5cblx0fVxuXG5cdC8vQmxvY2sgSUQgPSA0MVxuXHRwcml2YXRlIHBhcnNlTGlnaHQoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBsaWdodDpMaWdodEJhc2U7XG5cdFx0dmFyIG5ld1NoYWRvd01hcHBlcjpTaGFkb3dNYXBwZXJCYXNlO1xuXG5cdFx0dmFyIHBhcl9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIGxpZ2h0VHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX3Byb3BzTnJUeXBlLCAyOnRoaXMuX3Byb3BzTnJUeXBlLCAzOkFXRFBhcnNlci5DT0xPUiwgNDp0aGlzLl9wcm9wc05yVHlwZSwgNTp0aGlzLl9wcm9wc05yVHlwZSwgNjpBV0RQYXJzZXIuQk9PTCwgNzpBV0RQYXJzZXIuQ09MT1IsIDg6dGhpcy5fcHJvcHNOclR5cGUsIDk6QVdEUGFyc2VyLlVJTlQ4LCAxMDpBV0RQYXJzZXIuVUlOVDgsIDExOnRoaXMuX3Byb3BzTnJUeXBlLCAxMjpBV0RQYXJzZXIuVUlOVDE2LCAyMTp0aGlzLl9tYXRyaXhOclR5cGUsIDIyOnRoaXMuX21hdHJpeE5yVHlwZSwgMjM6dGhpcy5fbWF0cml4TnJUeXBlfSk7XG5cdFx0dmFyIHNoYWRvd01hcHBlclR5cGU6bnVtYmVyID0gcHJvcHMuZ2V0KDksIDApO1xuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XG5cdFx0dmFyIGxpZ2h0VHlwZXM6QXJyYXk8c3RyaW5nPiA9IFtcIlVuc3VwcG9ydGVkIExpZ2h0VHlwZVwiLCBcIlBvaW50TGlnaHRcIiwgXCJEaXJlY3Rpb25hbExpZ2h0XCJdO1xuXHRcdHZhciBzaGFkb3dNYXBwZXJUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiTm8gU2hhZG93TWFwcGVyXCIsIFwiRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXJcIiwgXCJOZWFyRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXJcIiwgXCJDYXNjYWRlU2hhZG93TWFwcGVyXCIsIFwiQ3ViZU1hcFNoYWRvd01hcHBlclwiXTtcblxuXHRcdGlmIChsaWdodFR5cGUgPT0gMSkge1xuXHRcdFx0bGlnaHQgPSBuZXcgUG9pbnRMaWdodCgpO1xuXG5cdFx0XHQoPFBvaW50TGlnaHQ+IGxpZ2h0KS5yYWRpdXMgPSBwcm9wcy5nZXQoMSwgOTAwMDApO1xuXHRcdFx0KDxQb2ludExpZ2h0PiBsaWdodCkuZmFsbE9mZiA9IHByb3BzLmdldCgyLCAxMDAwMDApO1xuXG5cdFx0XHRpZiAoc2hhZG93TWFwcGVyVHlwZSA+IDApIHtcblx0XHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPT0gNCkge1xuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlciA9IG5ldyBDdWJlTWFwU2hhZG93TWFwcGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGlnaHQudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xuXG5cdFx0fVxuXG5cdFx0aWYgKGxpZ2h0VHlwZSA9PSAyKSB7XG5cblx0XHRcdGxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQocHJvcHMuZ2V0KDIxLCAwKSwgcHJvcHMuZ2V0KDIyLCAtMSksIHByb3BzLmdldCgyMywgMSkpO1xuXG5cdFx0XHRpZiAoc2hhZG93TWFwcGVyVHlwZSA+IDApIHtcblx0XHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPT0gMSkge1xuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlciA9IG5ldyBEaXJlY3Rpb25hbFNoYWRvd01hcHBlcigpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9pZiAoc2hhZG93TWFwcGVyVHlwZSA9PSAyKVxuXHRcdFx0XHQvLyAgbmV3U2hhZG93TWFwcGVyID0gbmV3IE5lYXJEaXJlY3Rpb25hbFNoYWRvd01hcHBlcihwcm9wcy5nZXQoMTEsIDAuNSkpO1xuXHRcdFx0XHQvL2lmIChzaGFkb3dNYXBwZXJUeXBlID09IDMpXG5cdFx0XHRcdC8vICAgbmV3U2hhZG93TWFwcGVyID0gbmV3IENhc2NhZGVTaGFkb3dNYXBwZXIocHJvcHMuZ2V0KDEyLCAzKSk7XG5cblx0XHRcdH1cblxuXHRcdH1cblx0XHRsaWdodC5jb2xvciA9IHByb3BzLmdldCgzLCAweGZmZmZmZik7XG5cdFx0bGlnaHQuc3BlY3VsYXIgPSBwcm9wcy5nZXQoNCwgMS4wKTtcblx0XHRsaWdodC5kaWZmdXNlID0gcHJvcHMuZ2V0KDUsIDEuMCk7XG5cdFx0bGlnaHQuYW1iaWVudENvbG9yID0gcHJvcHMuZ2V0KDcsIDB4ZmZmZmZmKTtcblx0XHRsaWdodC5hbWJpZW50ID0gcHJvcHMuZ2V0KDgsIDAuMCk7XG5cblx0XHQvLyBpZiBhIHNoYWRvd01hcHBlciBoYXMgYmVlbiBjcmVhdGVkLCBhZGp1c3QgdGhlIGRlcHRoTWFwU2l6ZSBpZiBuZWVkZWQsIGFzc2lnbiB0byBsaWdodCBhbmQgc2V0IGNhc3RTaGFkb3dzIHRvIHRydWVcblx0XHRpZiAobmV3U2hhZG93TWFwcGVyKSB7XG5cdFx0XHRpZiAobmV3U2hhZG93TWFwcGVyIGluc3RhbmNlb2YgQ3ViZU1hcFNoYWRvd01hcHBlcikge1xuXHRcdFx0XHRpZiAocHJvcHMuZ2V0KDEwLCAxKSAhPSAxKSB7XG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyLmRlcHRoTWFwU2l6ZSA9IHRoaXMuX2RlcHRoU2l6ZURpY1twcm9wcy5nZXQoMTAsIDEpXTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHByb3BzLmdldCgxMCwgMikgIT0gMikge1xuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlci5kZXB0aE1hcFNpemUgPSB0aGlzLl9kZXB0aFNpemVEaWNbcHJvcHMuZ2V0KDEwLCAyKV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGlnaHQuc2hhZG93TWFwcGVyID0gbmV3U2hhZG93TWFwcGVyO1xuXHRcdFx0bGlnaHQuY2FzdHNTaGFkb3dzID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAocGFyX2lkICE9IDApIHtcblxuXHRcdFx0dmFyIHJldHVybmVkQXJyYXlQYXJlbnQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKVxuXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVBhcmVudFswXSkge1xuXHRcdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV0pLmFkZENoaWxkKGxpZ2h0KTtcblx0XHRcdFx0cGFyZW50TmFtZSA9ICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVBhcmVudFsxXSkubmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIExpZ2h0XCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxuXHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQobGlnaHQpO1xuXHRcdH1cblxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPCBJQXNzZXQ+IGxpZ2h0LCBuYW1lKTtcblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbGlnaHQ7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIExpZ2h0OiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFR5cGUgPSBcIiArIGxpZ2h0VHlwZXNbbGlnaHRUeXBlXSArIFwiIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUgKyBcIiB8IFNoYWRvd01hcHBlci1UeXBlID0gXCIgKyBzaGFkb3dNYXBwZXJUeXBlc1tzaGFkb3dNYXBwZXJUeXBlXSk7XG5cblx0fVxuXG5cdC8vQmxvY2sgSUQgPSA0M1xuXHRwcml2YXRlIHBhcnNlQ2FtZXJhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XG5cdFx0dmFyIHByb2plY3Rpb246UHJvamVjdGlvbkJhc2U7XG5cblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTsgLy9zZXQgYXMgYWN0aXZlIGNhbWVyYVxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7IC8vbGVuZ3Rob2YgbGVuc2VzIC0gbm90IHVzZWQgeWV0XG5cblx0XHR2YXIgcHJvamVjdGlvbnR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxMDE6dGhpcy5fcHJvcHNOclR5cGUsIDEwMjp0aGlzLl9wcm9wc05yVHlwZSwgMTAzOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDQ6dGhpcy5fcHJvcHNOclR5cGV9KTtcblxuXHRcdHN3aXRjaCAocHJvamVjdGlvbnR5cGUpIHtcblx0XHRcdGNhc2UgNTAwMTpcblx0XHRcdFx0cHJvamVjdGlvbiA9IG5ldyBQZXJzcGVjdGl2ZVByb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgNjApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDUwMDI6XG5cdFx0XHRcdHByb2plY3Rpb24gPSBuZXcgT3J0aG9ncmFwaGljUHJvamVjdGlvbihwcm9wcy5nZXQoMTAxLCA1MDApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDUwMDM6XG5cdFx0XHRcdHByb2plY3Rpb24gPSBuZXcgT3J0aG9ncmFwaGljT2ZmQ2VudGVyUHJvamVjdGlvbihwcm9wcy5nZXQoMTAxLCAtNDAwKSwgcHJvcHMuZ2V0KDEwMiwgNDAwKSwgcHJvcHMuZ2V0KDEwMywgLTMwMCksIHByb3BzLmdldCgxMDQsIDMwMCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidW5zdXBwb3J0ZWRMZW5zdHlwZVwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjYW1lcmE6Q2FtZXJhID0gbmV3IENhbWVyYShwcm9qZWN0aW9uKTtcblx0XHRjYW1lcmEudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXlQYXJlbnQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKVxuXG5cdFx0aWYgKHJldHVybmVkQXJyYXlQYXJlbnRbMF0pIHtcblxuXHRcdFx0dmFyIG9iakM6RGlzcGxheU9iamVjdENvbnRhaW5lciA9IDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdO1xuXHRcdFx0b2JqQy5hZGRDaGlsZChjYW1lcmEpO1xuXG5cdFx0XHRwYXJlbnROYW1lID0gb2JqQy5uYW1lO1xuXG5cdFx0fSBlbHNlIGlmIChwYXJfaWQgPiAwKSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBDYW1lcmFcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChjYW1lcmEpO1xuXHRcdH1cblxuXHRcdGNhbWVyYS5uYW1lID0gbmFtZTtcblx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xuXHRcdGNhbWVyYS5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcblx0XHRjYW1lcmEuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNhbWVyYSwgbmFtZSk7XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGNhbWVyYVxuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIENhbWVyYTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBQcm9qZWN0aW9udHlwZSA9IFwiICsgcHJvamVjdGlvbiArIFwiIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUpO1xuXHRcdH1cblxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDUxXG5cdHByaXZhdGUgcGFyc2VMaWdodFBpY2tlcihibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBudW1MaWdodHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHZhciBsaWdodHNBcnJheTpBcnJheTxMaWdodEJhc2U+ID0gbmV3IEFycmF5PExpZ2h0QmFzZT4oKTtcblx0XHR2YXIgazpudW1iZXIgPSAwO1xuXHRcdHZhciBsaWdodElEOm51bWJlciA9IDA7XG5cblx0XHR2YXIgcmV0dXJuZWRBcnJheUxpZ2h0OkFycmF5PGFueT47XG5cdFx0dmFyIGxpZ2h0c0FycmF5TmFtZXM6QXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cblx0XHRmb3IgKGsgPSAwOyBrIDwgbnVtTGlnaHRzOyBrKyspIHtcblx0XHRcdGxpZ2h0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0cmV0dXJuZWRBcnJheUxpZ2h0ID0gdGhpcy5nZXRBc3NldEJ5SUQobGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pXG5cblx0XHRcdGlmIChyZXR1cm5lZEFycmF5TGlnaHRbMF0pIHtcblx0XHRcdFx0bGlnaHRzQXJyYXkucHVzaCg8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5TGlnaHRbMV0pO1xuXHRcdFx0XHRsaWdodHNBcnJheU5hbWVzLnB1c2goKCA8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5TGlnaHRbMV0pLm5hbWUpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIExpZ2h0IE5yIFwiICsgayArIFwiIChJRCA9IFwiICsgbGlnaHRJRCArIFwiICkgZm9yIHRoaXMgTGlnaHRQaWNrZXJcIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGxpZ2h0c0FycmF5Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHRoaXMgTGlnaHRQaWNrZXIsIGNhdXNlIG5vIExpZ2h0IHdhcyBmb3VuZC5cIik7XG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRcdHJldHVybjsgLy9yZXR1cm4gd2l0aG91dCBhbnkgbW9yZSBwYXJzaW5nIGZvciB0aGlzIGJsb2NrXG5cdFx0fVxuXG5cdFx0dmFyIGxpZ2h0UGljazpMaWdodFBpY2tlckJhc2UgPSBuZXcgU3RhdGljTGlnaHRQaWNrZXIobGlnaHRzQXJyYXkpO1xuXHRcdGxpZ2h0UGljay5uYW1lID0gbmFtZTtcblxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGxpZ2h0UGljaywgbmFtZSk7XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGxpZ2h0UGlja1xuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTdGF0aWNMaWdodFBpY2tlcjogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIGxpZ2h0c0FycmF5TmFtZXMudG9TdHJpbmcoKSk7XG5cdFx0fVxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDgxXG5cdHByaXZhdGUgcGFyc2VNYXRlcmlhbChibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0Ly8gVE9ETzogbm90IHVzZWRcblx0XHQvLy8vYmxvY2tMZW5ndGggPSBibG9jay5sZW47XG5cdFx0dmFyIG5hbWU6c3RyaW5nO1xuXHRcdHZhciB0eXBlOm51bWJlcjtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcztcblx0XHR2YXIgbWF0OlRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWw7XG5cdFx0dmFyIGF0dHJpYnV0ZXM6T2JqZWN0O1xuXHRcdHZhciBmaW5hbGl6ZTpib29sZWFuO1xuXHRcdHZhciBudW1fbWV0aG9kczpudW1iZXI7XG5cdFx0dmFyIG1ldGhvZHNfcGFyc2VkOm51bWJlcjtcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xuXG5cdFx0bmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR0eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0bnVtX21ldGhvZHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblxuXHRcdC8vIFJlYWQgbWF0ZXJpYWwgbnVtZXJpY2FsIHByb3BlcnRpZXNcblx0XHQvLyAoMT1jb2xvciwgMj1iaXRtYXAgdXJsLCAxMD1hbHBoYSwgMTE9YWxwaGFfYmxlbmRpbmcsIDEyPWFscGhhX3RocmVzaG9sZCwgMTM9cmVwZWF0KVxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoeyAxOkFXRFBhcnNlci5JTlQzMiwgMjpBV0RQYXJzZXIuQkFERFIsIDEwOnRoaXMuX3Byb3BzTnJUeXBlLCAxMTpBV0RQYXJzZXIuQk9PTCwgMTI6dGhpcy5fcHJvcHNOclR5cGUsIDEzOkFXRFBhcnNlci5CT09MfSk7XG5cblx0XHRtZXRob2RzX3BhcnNlZCA9IDA7XG5cdFx0d2hpbGUgKG1ldGhvZHNfcGFyc2VkIDwgbnVtX21ldGhvZHMpIHtcblx0XHRcdHZhciBtZXRob2RfdHlwZTpudW1iZXI7XG5cblx0XHRcdG1ldGhvZF90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRcdG1ldGhvZHNfcGFyc2VkICs9IDE7XG5cdFx0fVxuXHRcdHZhciBkZWJ1Z1N0cmluZzpzdHJpbmcgPSBcIlwiO1xuXHRcdGF0dHJpYnV0ZXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRpZiAodHlwZSA9PT0gMSkgeyAvLyBDb2xvciBtYXRlcmlhbFxuXHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBDb2xvck1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xuXHRcdFx0dmFyIGNvbG9yOm51bWJlcjtcblx0XHRcdGNvbG9yID0gcHJvcHMuZ2V0KDEsIDB4ZmZmZmZmKTtcblx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA8IDIpIHtcblx0XHRcdFx0bWF0ID0gbmV3IFRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWwoY29sb3IsIHByb3BzLmdldCgxMCwgMS4wKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXQgPSBuZXcgVHJpYW5nbGVNZXRob2RNYXRlcmlhbChjb2xvcik7XG5cdFx0XHRcdG1hdC5tYXRlcmlhbE1vZGUgPSBUcmlhbmdsZU1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gMikge1xuXHRcdFx0dmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTtcblxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcblxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHRleF9hZGRyID4gMCkpXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBEaWZmc3VlVGV4dHVyZSAoSUQgPSBcIiArIHRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNYXRlcmlhbFwiKTtcblxuXHRcdFx0bWF0ID0gbmV3IFRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWwoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pO1xuXG5cdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPCAyKSB7XG5cdFx0XHRcdG1hdC5hbHBoYUJsZW5kaW5nID0gcHJvcHMuZ2V0KDExLCBmYWxzZSk7XG5cdFx0XHRcdG1hdC5hbHBoYSA9IHByb3BzLmdldCgxMCwgMS4wKTtcblx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBUcmlhbmdsZU1ldGhvZE1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgbWF0Lm5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXQubWF0ZXJpYWxNb2RlID0gVHJpYW5nbGVNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcblx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBUcmlhbmdsZU1ldGhvZE1hdGVyaWFsKE11bHRpUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyBtYXQubmFtZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXQuZXh0cmEgPSBhdHRyaWJ1dGVzO1xuXHRcdG1hdC5hbHBoYVRocmVzaG9sZCA9IHByb3BzLmdldCgxMiwgMC4wKTtcblx0XHRtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coZGVidWdTdHJpbmcpO1xuXG5cdFx0fVxuXHR9XG5cblx0Ly8gQmxvY2sgSUQgPSA4MSBBV0QyLjFcblx0cHJpdmF0ZSBwYXJzZU1hdGVyaWFsX3YxKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgbWF0OlRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWw7XG5cdFx0dmFyIG5vcm1hbFRleHR1cmU6VGV4dHVyZTJEQmFzZTtcblx0XHR2YXIgc3BlY1RleHR1cmU6VGV4dHVyZTJEQmFzZTtcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xuXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdHZhciBudW1fbWV0aG9kczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMzIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgNDpBV0RQYXJzZXIuVUlOVDgsIDU6QVdEUGFyc2VyLkJPT0wsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkJPT0wsIDg6QVdEUGFyc2VyLkJPT0wsIDk6QVdEUGFyc2VyLlVJTlQ4LCAxMDp0aGlzLl9wcm9wc05yVHlwZSwgMTE6QVdEUGFyc2VyLkJPT0wsIDEyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMzpBV0RQYXJzZXIuQk9PTCwgMTU6dGhpcy5fcHJvcHNOclR5cGUsIDE2OkFXRFBhcnNlci5VSU5UMzIsIDE3OkFXRFBhcnNlci5CQUREUiwgMTg6dGhpcy5fcHJvcHNOclR5cGUsIDE5OnRoaXMuX3Byb3BzTnJUeXBlLCAyMDpBV0RQYXJzZXIuVUlOVDMyLCAyMTpBV0RQYXJzZXIuQkFERFIsIDIyOkFXRFBhcnNlci5CQUREUn0pO1xuXHRcdHZhciBzcGV6aWFsVHlwZTpudW1iZXIgPSBwcm9wcy5nZXQoNCwgMCk7XG5cdFx0dmFyIGRlYnVnU3RyaW5nOnN0cmluZyA9IFwiXCI7XG5cblx0XHRpZiAoc3BlemlhbFR5cGUgPj0gMikgey8vdGhpcyBpcyBubyBzdXBwb3J0ZWQgbWF0ZXJpYWxcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIk1hdGVyaWFsLXNwZXppYWxUeXBlICdcIiArIHNwZXppYWxUeXBlICsgXCInIGlzIG5vdCBzdXBwb3J0ZWQsIGNhbiBvbmx5IGJlIDA6c2luZ2xlUGFzcywgMTpNdWx0aVBhc3MgIVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPT0gMSlcblx0XHRcdHNwZXppYWxUeXBlID0gMDtcblx0XHRlbHNlIGlmICh0aGlzLm1hdGVyaWFsTW9kZSA9PSAyKVxuXHRcdFx0c3BlemlhbFR5cGUgPSAxO1xuXG5cdFx0aWYgKHNwZXppYWxUeXBlIDwgMikgey8vdGhpcyBpcyBTaW5nbGVQYXNzIG9yIE11bHRpUGFzc1xuXG5cdFx0XHRpZiAodHlwZSA9PSAxKSB7Ly8gQ29sb3IgbWF0ZXJpYWxcblx0XHRcdFx0dmFyIGNvbG9yOm51bWJlciA9IHByb3BzLmdldCgxLCAweGNjY2NjYyk7Ly9UT0RPIHRlbXBvcmFyaWx5IHN3YXBwZWQgc28gdGhhdCBkaWZmdXNlIGNvbG9yIGdvZXMgdG8gYW1iaWVudFxuXG5cdFx0XHRcdGlmIChzcGV6aWFsVHlwZSA9PSAxKSB7Ly9cdE11bHRpUGFzc01hdGVyaWFsXG5cdFx0XHRcdFx0bWF0ID0gbmV3IFRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWwoY29sb3IpO1xuXHRcdFx0XHRcdG1hdC5tYXRlcmlhbE1vZGUgPSBUcmlhbmdsZU1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xuXHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xuXG5cdFx0XHRcdH0gZWxzZSB7IC8vXHRTaW5nbGVQYXNzTWF0ZXJpYWxcblx0XHRcdFx0XHRtYXQgPSBuZXcgVHJpYW5nbGVNZXRob2RNYXRlcmlhbChjb2xvciwgcHJvcHMuZ2V0KDEwLCAxLjApKTtcblx0XHRcdFx0XHRtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xuXHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gMikgey8vIHRleHR1cmUgbWF0ZXJpYWxcblx0XHRcdFx0dmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTsvL1RPRE8gdGVtcG9yYXJpbHkgc3dhcHBlZCBzbyB0aGF0IGRpZmZ1c2UgdGV4dHVyZSBnb2VzIHRvIGFtYmllbnRcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcblxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAodGV4X2FkZHIgPiAwKSlcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQW1iaWVudFRleHR1cmUgKElEID0gXCIgKyB0ZXhfYWRkciArIFwiICkgZm9yIHRoaXMgVHJpYW5nbGVNZXRob2RNYXRlcmlhbFwiKTtcblxuXHRcdFx0XHR2YXIgdGV4dHVyZTpUZXh0dXJlMkRCYXNlID0gcmV0dXJuZWRBcnJheVsxXTtcblxuXHRcdFx0XHRtYXQgPSBuZXcgVHJpYW5nbGVNZXRob2RNYXRlcmlhbCh0ZXh0dXJlKTtcblxuXHRcdFx0XHRpZiAoc3BlemlhbFR5cGUgPT0gMSkgey8vIE11bHRpUGFzc01hdGVyaWFsXG5cdFx0XHRcdFx0bWF0Lm1hdGVyaWFsTW9kZSA9IFRyaWFuZ2xlTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XG5cblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIFRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWwoTXVsdGlQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIHRleHR1cmUubmFtZTtcblx0XHRcdFx0fSBlbHNlIHsvL1x0U2luZ2xlUGFzc01hdGVyaWFsXG5cdFx0XHRcdFx0bWF0LmFscGhhID0gcHJvcHMuZ2V0KDEwLCAxLjApO1xuXHRcdFx0XHRcdG1hdC5hbHBoYUJsZW5kaW5nID0gcHJvcHMuZ2V0KDExLCBmYWxzZSk7XG5cblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIFRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyB0ZXh0dXJlLm5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIGRpZmZ1c2VUZXh0dXJlOlRleHR1cmUyREJhc2U7XG5cdFx0XHR2YXIgZGlmZnVzZVRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgxNywgMCk7XG5cblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChkaWZmdXNlVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoZGlmZnVzZVRleF9hZGRyICE9IDApKSB7XG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBEaWZmdXNlVGV4dHVyZSAoSUQgPSBcIiArIGRpZmZ1c2VUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgVHJpYW5nbGVNZXRob2RNYXRlcmlhbFwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdGRpZmZ1c2VUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcblxuXHRcdFx0aWYgKGRpZmZ1c2VUZXh0dXJlKSB7XG5cdFx0XHRcdG1hdC5kaWZmdXNlVGV4dHVyZSA9IGRpZmZ1c2VUZXh0dXJlO1xuXHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VUZXh0dXJlLU5hbWUgPSBcIiArIGRpZmZ1c2VUZXh0dXJlLm5hbWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBub3JtYWxUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMywgMCk7XG5cblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChub3JtYWxUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChub3JtYWxUZXhfYWRkciAhPSAwKSkge1xuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTm9ybWFsVGV4dHVyZSAoSUQgPSBcIiArIG5vcm1hbFRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBUcmlhbmdsZU1ldGhvZE1hdGVyaWFsXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0XHRub3JtYWxUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcblx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArIG5vcm1hbFRleHR1cmUubmFtZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNwZWNUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMjEsIDApO1xuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHNwZWNUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChzcGVjVGV4X2FkZHIgIT0gMCkpIHtcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNwZWN1bGFyVGV4dHVyZSAoSUQgPSBcIiArIHNwZWNUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgVHJpYW5nbGVNZXRob2RNYXRlcmlhbFwiKTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHRcdHNwZWNUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcblx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhclRleHR1cmUtTmFtZSA9IFwiICsgc3BlY1RleHR1cmUubmFtZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxpZ2h0UGlja2VyQWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMjIsIDApO1xuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGxpZ2h0UGlja2VyQWRkciwgW0Fzc2V0VHlwZS5MSUdIVF9QSUNLRVJdKVxuXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAobGlnaHRQaWNrZXJBZGRyKSkge1xuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTGlnaHRQaWNrZXIgKElEID0gXCIgKyBsaWdodFBpY2tlckFkZHIgKyBcIiApIGZvciB0aGlzIFRyaWFuZ2xlTWV0aG9kTWF0ZXJpYWxcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXQubGlnaHRQaWNrZXIgPSA8TGlnaHRQaWNrZXJCYXNlPiByZXR1cm5lZEFycmF5WzFdO1xuXHRcdFx0XHQvL2RlYnVnU3RyaW5nKz1cIiB8IExpZ2h0cGlja2VyLU5hbWUgPSBcIitMaWdodFBpY2tlckJhc2UocmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdH1cblxuXHRcdFx0bWF0LnNtb290aCA9IHByb3BzLmdldCg1LCB0cnVlKTtcblx0XHRcdG1hdC5taXBtYXAgPSBwcm9wcy5nZXQoNiwgdHJ1ZSk7XG5cdFx0XHRtYXQuYm90aFNpZGVzID0gcHJvcHMuZ2V0KDcsIGZhbHNlKTtcblx0XHRcdG1hdC5hbHBoYVByZW11bHRpcGxpZWQgPSBwcm9wcy5nZXQoOCwgZmFsc2UpO1xuXHRcdFx0bWF0LmJsZW5kTW9kZSA9IHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg5LCAwKV07XG5cdFx0XHRtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XG5cblx0XHRcdGlmIChub3JtYWxUZXh0dXJlKVxuXHRcdFx0XHRtYXQubm9ybWFsTWFwID0gbm9ybWFsVGV4dHVyZTtcblxuXHRcdFx0aWYgKHNwZWNUZXh0dXJlKVxuXHRcdFx0XHRtYXQuc3BlY3VsYXJNYXAgPSBzcGVjVGV4dHVyZTtcblxuXHRcdFx0bWF0LmFscGhhVGhyZXNob2xkID0gcHJvcHMuZ2V0KDEyLCAwLjApO1xuXHRcdFx0bWF0LmFtYmllbnQgPSBwcm9wcy5nZXQoMTUsIDEuMCk7XG5cdFx0XHRtYXQuZGlmZnVzZUNvbG9yID0gcHJvcHMuZ2V0KDE2LCAweGZmZmZmZik7XG5cdFx0XHRtYXQuc3BlY3VsYXIgPSBwcm9wcy5nZXQoMTgsIDEuMCk7XG5cdFx0XHRtYXQuZ2xvc3MgPSBwcm9wcy5nZXQoMTksIDUwKTtcblx0XHRcdG1hdC5zcGVjdWxhckNvbG9yID0gcHJvcHMuZ2V0KDIwLCAweGZmZmZmZik7XG5cblx0XHRcdHZhciBtZXRob2RzX3BhcnNlZDpudW1iZXIgPSAwO1xuXHRcdFx0dmFyIHRhcmdldElEOm51bWJlcjtcblxuXHRcdFx0d2hpbGUgKG1ldGhvZHNfcGFyc2VkIDwgbnVtX21ldGhvZHMpIHtcblx0XHRcdFx0dmFyIG1ldGhvZF90eXBlOm51bWJlcjtcblx0XHRcdFx0bWV0aG9kX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHRcdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgMTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMjAxOkFXRFBhcnNlci5VSU5UMzIsIDIwMjpBV0RQYXJzZXIuVUlOVDMyLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDQwMTpBV0RQYXJzZXIuVUlOVDgsIDQwMjpBV0RQYXJzZXIuVUlOVDgsIDYwMTpBV0RQYXJzZXIuQ09MT1IsIDYwMjpBV0RQYXJzZXIuQ09MT1IsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MLCA4MDE6QVdEUGFyc2VyLk1UWDR4NH0pO1xuXG5cdFx0XHRcdHN3aXRjaCAobWV0aG9kX3R5cGUpIHtcblx0XHRcdFx0XHRjYXNlIDk5OTogLy93cmFwcGVyLU1ldGhvZHMgdGhhdCB3aWxsIGxvYWQgYSBwcmV2aW91cyBwYXJzZWQgRWZmZWt0TWV0aG9kIHJldHVybmVkXG5cblx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLkVGRkVDVFNfTUVUSE9EXSk7XG5cblx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRWZmZWN0TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bWF0LmFkZEVmZmVjdE1ldGhvZChyZXR1cm5lZEFycmF5WzFdKTtcblxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IEVmZmVjdE1ldGhvZC1OYW1lID0gXCIgKyAoPEVmZmVjdE1ldGhvZEJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSA5OTg6IC8vd3JhcHBlci1NZXRob2RzIHRoYXQgd2lsbCBsb2FkIGEgcHJldmlvdXMgcGFyc2VkIFNoYWRvd01hcE1ldGhvZFxuXG5cdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5TSEFET1dfTUFQX01FVEhPRF0pO1xuXG5cdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNoYWRvd01ldGhvZCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBNYXRlcmlhbFwiKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1hdC5zaGFkb3dNZXRob2QgPSByZXR1cm5lZEFycmF5WzFdO1xuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNoYWRvd01ldGhvZC1OYW1lID0gXCIgKyAoPFNoYWRvd01ldGhvZEJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAxOiAvL0Vudk1hcEFtYmllbnRNZXRob2Rcblx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xuXHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRW52TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEVudk1hcEFtYmllbnRNZXRob2RNYXRlcmlhbFwiKTtcblx0XHRcdFx0XHRcdG1hdC5hbWJpZW50TWV0aG9kID0gbmV3IEFtYmllbnRFbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XG5cdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IEFtYmllbnRFbnZNYXBNZXRob2QgfCBFbnZNYXAtTmFtZSA9XCIgKyAoPEN1YmVUZXh0dXJlQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSA1MTogLy9EZXB0aERpZmZ1c2VNZXRob2Rcblx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VEZXB0aE1ldGhvZCgpO1xuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlRGVwdGhNZXRob2RcIjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgNTI6IC8vR3JhZGllbnREaWZmdXNlTWV0aG9kXG5cdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBHcmFkaWVudERpZmZ1c2VUZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEdyYWRpZW50RGlmZnVzZU1ldGhvZFwiKTtcblx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VHcmFkaWVudE1ldGhvZChyZXR1cm5lZEFycmF5WzFdKTtcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZUdyYWRpZW50TWV0aG9kIHwgR3JhZGllbnREaWZmdXNlVGV4dHVyZS1OYW1lID1cIiArICg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgNTM6IC8vV3JhcERpZmZ1c2VNZXRob2Rcblx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VXcmFwTWV0aG9kKHByb3BzLmdldCgxMDEsIDUpKTtcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVdyYXBNZXRob2RcIjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgNTQ6IC8vTGlnaHRNYXBEaWZmdXNlTWV0aG9kXG5cdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBMaWdodE1hcERpZmZ1c2VNZXRob2RcIik7XG5cdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlTGlnaHRNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSwgZmFsc2UsIG1hdC5kaWZmdXNlTWV0aG9kKTtcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZUxpZ2h0TWFwTWV0aG9kIHwgTGlnaHRNYXBUZXh0dXJlLU5hbWUgPVwiICsgKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSA1NTogLy9DZWxEaWZmdXNlTWV0aG9kXG5cdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlQ2VsTWV0aG9kKHByb3BzLmdldCg0MDEsIDMpLCBtYXQuZGlmZnVzZU1ldGhvZCk7XG5cdFx0XHRcdFx0XHQoPERpZmZ1c2VDZWxNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zbW9vdGhuZXNzID0gcHJvcHMuZ2V0KDEwMSwgMC4xKTtcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZUNlbE1ldGhvZFwiO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSA1NjogLy9TdWJTdXJmYWNlU2NhdHRlcmluZ01ldGhvZFxuLy9cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kKCk7IC8vZGVwdGhNYXBTaXplIGFuZCBkZXB0aE1hcE9mZnNldCA/XG4vL1x0XHRcdFx0XHRcdFx0KDxEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnNjYXR0ZXJpbmcgPSBwcm9wcy5nZXQoMTAxLCAwLjIpO1xuLy9cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZVN1YlN1cmZhY2VNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS50cmFuc2x1Y2VuY3kgPSBwcm9wcy5nZXQoMTAyLCAxKTtcbi8vXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkuc2NhdHRlckNvbG9yID0gcHJvcHMuZ2V0KDYwMSwgMHhmZmZmZmYpO1xuLy9cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVN1YlN1cmZhY2VNZXRob2RcIjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAxMDE6IC8vQW5pc290cm9waWNTcGVjdWxhck1ldGhvZFxuXHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyQW5pc290cm9waWNNZXRob2QoKTtcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZFwiO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMDI6IC8vU3BlY3VsYXJQaG9uZ01ldGhvZFxuXHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyUGhvbmdNZXRob2QoKTtcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJQaG9uZ01ldGhvZFwiO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMDM6IC8vQ2VsbFNwZWN1bGFyTWV0aG9kXG5cdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJDZWxNZXRob2QocHJvcHMuZ2V0KDEwMSwgMC41KSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcblx0XHRcdFx0XHRcdCg8U3BlY3VsYXJDZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkuc21vb3RobmVzcyA9IHByb3BzLmdldCgxMDIsIDAuMSk7XG5cdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyQ2VsTWV0aG9kXCI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEwNDogLy9TcGVjdWxhckZyZXNuZWxNZXRob2Rcblx0XHRcdFx0XHRcdG1hdC5zcGVjdWxhck1ldGhvZCA9IG5ldyBTcGVjdWxhckZyZXNuZWxNZXRob2QocHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIG1hdC5zcGVjdWxhck1ldGhvZCk7XG5cdFx0XHRcdFx0XHQoPFNwZWN1bGFyRnJlc25lbE1ldGhvZD4gbWF0LnNwZWN1bGFyTWV0aG9kKS5mcmVzbmVsUG93ZXIgPSBwcm9wcy5nZXQoMTAxLCA1KTtcblx0XHRcdFx0XHRcdCg8U3BlY3VsYXJGcmVzbmVsTWV0aG9kPiBtYXQuc3BlY3VsYXJNZXRob2QpLm5vcm1hbFJlZmxlY3RhbmNlID0gcHJvcHMuZ2V0KDEwMiwgMC4xKTtcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJGcmVzbmVsTWV0aG9kXCI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDE1MTovL0hlaWdodE1hcE5vcm1hbE1ldGhvZCAtIHRoaW9zIGlzIG5vdCBpbXBsZW1lbnRlZCBmb3Igbm93LCBidXQgbWlnaHQgYXBwZWFyIGxhdGVyXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDE1MjogLy9TaW1wbGVXYXRlck5vcm1hbE1ldGhvZFxuXHRcdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2Vjb3VuZE5vcm1hbE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBTaW1wbGVXYXRlck5vcm1hbE1ldGhvZFwiKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Lm5vcm1hbE1hcClcblx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBub3JtYWwgTWFwIG9uIHRoaXMgTWF0ZXJpYWwgdG8gdXNlIHdpdGggdGhpcyBTaW1wbGVXYXRlck5vcm1hbE1ldGhvZFwiKTtcblxuXHRcdFx0XHRcdFx0bWF0Lm5vcm1hbE1hcCA9IHJldHVybmVkQXJyYXlbMV07XG5cdFx0XHRcdFx0XHRtYXQubm9ybWFsTWV0aG9kID0gbmV3IE5vcm1hbFNpbXBsZVdhdGVyTWV0aG9kKG1hdC5ub3JtYWxNYXAsIHJldHVybmVkQXJyYXlbMV0pO1xuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZCB8IFNlY29uZC1Ob3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArICg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdFx0XHRtZXRob2RzX3BhcnNlZCArPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYXQuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtYXQsIG5hbWUpO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBtYXQ7XG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhkZWJ1Z1N0cmluZyk7XG5cdFx0fVxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDgyXG5cdHByaXZhdGUgcGFyc2VUZXh0dXJlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblxuXHRcdHZhciBhc3NldDpUZXh0dXJlMkRCYXNlO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgZGF0YV9sZW46bnVtYmVyO1xuXG5cdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcblxuXHRcdC8vIEV4dGVybmFsXG5cdFx0aWYgKHR5cGUgPT0gMCkge1xuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0dmFyIHVybDpzdHJpbmc7XG5cdFx0XHR1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XG5cdFx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbmV3IFVSTFJlcXVlc3QodXJsKSwgZmFsc2UsIG51bGwsIHRydWUpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblxuXHRcdFx0dmFyIGRhdGE6Qnl0ZUFycmF5O1xuXHRcdFx0ZGF0YSA9IG5ldyBCeXRlQXJyYXkoKTtcblx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGVzKGRhdGEsIDAsIGRhdGFfbGVuKTtcblxuXHRcdFx0Ly9cblx0XHRcdC8vIEFXRFBhcnNlciAtIEZpeCBmb3IgRmlyZUZveCBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTcxNTA3NSAuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gQ29udmVydGluZyBkYXRhIHRvIGltYWdlIGhlcmUgaW5zdGVhZCBvZiBwYXJzZXIgLSBmaXggRmlyZUZveCBidWcgd2hlcmUgaW1hZ2Ugd2lkdGggLyBoZWlnaHQgaXMgMCB3aGVuIGNyZWF0ZWQgZnJvbSBkYXRhXG5cdFx0XHQvLyBUaGlzIGdpdmVzIHRoZSBicm93c2VyIHRpbWUgdG8gaW5pdGlhbGlzZSBpbWFnZSB3aWR0aCAvIGhlaWdodC5cblxuXHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieXRlQXJyYXlUb0ltYWdlKGRhdGEpLCB0cnVlKTtcblx0XHRcdC8vdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBkYXRhLCB0cnVlKTtcblxuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBmb3Igbm93XG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmV4dHJhcyA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0dmFyIHRleHR1cmVTdHlsZXNOYW1lczpBcnJheTxzdHJpbmc+ID0gW1wiZXh0ZXJuYWxcIiwgXCJlbWJlZFwiXVxuXHRcdFx0Y29uc29sZS5sb2coXCJTdGFydCBwYXJzaW5nIGEgXCIgKyB0ZXh0dXJlU3R5bGVzTmFtZXNbdHlwZV0gKyBcIiBCaXRtYXAgZm9yIFRleHR1cmVcIik7XG5cdFx0fVxuXG5cdH1cblxuXHQvL0Jsb2NrIElEID0gODNcblx0cHJpdmF0ZSBwYXJzZUN1YmVUZXh0dXJlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHQvL2Jsb2NrTGVuZ3RoID0gYmxvY2subGVuO1xuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XG5cdFx0dmFyIGFzc2V0OkN1YmVUZXh0dXJlQmFzZTtcblx0XHR2YXIgaTpudW1iZXI7XG5cblx0XHR0aGlzLl9jdWJlVGV4dHVyZXMgPSBuZXcgQXJyYXk8YW55PigpO1xuXHRcdHRoaXMuX3RleHR1cmVfdXNlcnNbIHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpIF0gPSBbXTtcblxuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKSB7XG5cdFx0XHR0aGlzLl90ZXh0dXJlX3VzZXJzW3RoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpXSA9IFtdO1xuXHRcdFx0dGhpcy5fY3ViZVRleHR1cmVzLnB1c2gobnVsbCk7XG5cblx0XHRcdC8vIEV4dGVybmFsXG5cdFx0XHRpZiAodHlwZSA9PSAwKSB7XG5cdFx0XHRcdGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0dmFyIHVybDpzdHJpbmc7XG5cdFx0XHRcdHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcblxuXHRcdFx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSArIFwiI1wiICsgaSwgbmV3IFVSTFJlcXVlc3QodXJsKSwgZmFsc2UsIG51bGwsIHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRcdHZhciBkYXRhOkJ5dGVBcnJheTtcblx0XHRcdFx0ZGF0YSA9IG5ldyBCeXRlQXJyYXkoKTtcblxuXHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XG5cblx0XHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgKyBcIiNcIiArIGksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieXRlQXJyYXlUb0ltYWdlKGRhdGEpLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgZm9yIG5vd1xuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdHZhciB0ZXh0dXJlU3R5bGVzTmFtZXM6QXJyYXk8c3RyaW5nPiA9IFtcImV4dGVybmFsXCIsIFwiZW1iZWRcIl1cblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyA2IFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQml0bWFwcyBmb3IgQ3ViZVRleHR1cmVcIik7XG5cdFx0fVxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDkxXG5cdHByaXZhdGUgcGFyc2VTaGFyZWRNZXRob2RCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIGFzc2V0OkVmZmVjdE1ldGhvZEJhc2U7XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHRhc3NldCA9IHRoaXMucGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQpO1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQsIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIEVmZmVjdE1ldGhvZDogTmFtZSA9IFwiICsgYXNzZXQubmFtZSArIFwiIFR5cGUgPSBcIiArIGFzc2V0KTtcblx0XHR9XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gOTJcblx0cHJpdmF0ZSBwYXJzZVNoYWRvd01ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgdHlwZTpudW1iZXI7XG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcblx0XHR2YXIgYXNzZXQ6U2hhZG93TWV0aG9kQmFzZTtcblx0XHR2YXIgc2hhZG93TGlnaHRJRDpudW1iZXI7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHRzaGFkb3dMaWdodElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoc2hhZG93TGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pO1xuXG5cdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGFyZ2V0TGlnaHQgKElEID0gXCIgKyBzaGFkb3dMaWdodElEICsgXCIgKSBmb3IgdGhpcyBTaGFkb3dNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXNzZXQgPSB0aGlzLnBhcnNlU2hhZG93TWV0aG9kTGlzdCg8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5WzFdLCBibG9ja0lEKTtcblxuXHRcdGlmICghYXNzZXQpXG5cdFx0XHRyZXR1cm47XG5cblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIGZvciBub3dcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCwgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2hhZG93TWFwTWV0aG9kTWV0aG9kOiBOYW1lID0gXCIgKyBhc3NldC5uYW1lICsgXCIgfCBUeXBlID0gXCIgKyBhc3NldCArIFwiIHwgTGlnaHQtTmFtZSA9IFwiLCAoIDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlbMV0gKS5uYW1lKTtcblx0XHR9XG5cdH1cblxuXG5cdC8vQmxvY2sgSUQgPSAyNTNcblx0cHJpdmF0ZSBwYXJzZUNvbW1hbmQoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBoYXNCbG9ja3M6Ym9vbGVhbiA9ICggdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCkgPT0gMSApO1xuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXG5cdFx0dmFyIHBhcmVudE9iamVjdDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xuXHRcdHZhciB0YXJnZXRPYmplY3Q6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSk7XG5cblx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0cGFyZW50T2JqZWN0ID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV07XG5cdFx0fVxuXG5cdFx0dmFyIG51bUNvbW1hbmRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XG5cdFx0dmFyIHR5cGVDb21tYW5kOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XG5cblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUn0pO1xuXG5cdFx0c3dpdGNoICh0eXBlQ29tbWFuZCkge1xuXHRcdFx0Y2FzZSAxOlxuXG5cdFx0XHRcdHZhciB0YXJnZXRJRDpudW1iZXIgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdHZhciByZXR1cm5lZEFycmF5VGFyZ2V0OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLlRFWFRVUkVfUFJPSkVDVE9SXSk7IC8vZm9yIG5vIG9ubHkgbGlnaHQgaXMgcmVxdWVzdGVkISEhIVxuXG5cdFx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlUYXJnZXRbMF0pICYmICh0YXJnZXRJRCAhPSAwKSkge1xuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBsaWdodCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKCBmb3IgdGhpcyBDb21tYW5kQm9jayFcIik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGFyZ2V0T2JqZWN0ID0gcmV0dXJuZWRBcnJheVRhcmdldFsxXTtcblxuXHRcdFx0XHRpZiAocGFyZW50T2JqZWN0KSB7XG5cdFx0XHRcdFx0cGFyZW50T2JqZWN0LmFkZENoaWxkKHRhcmdldE9iamVjdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRPYmplY3QudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXRPYmplY3QpIHtcblx0XHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4fSk7XG5cblx0XHRcdHRhcmdldE9iamVjdC5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcblx0XHRcdHRhcmdldE9iamVjdC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXG5cdFx0fVxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gdGFyZ2V0T2JqZWN0XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQ29tbWFuZEJsb2NrOiBOYW1lID0gJ1wiICsgbmFtZSk7XG5cdFx0fVxuXG5cdH1cblxuXHQvL2Jsb2NrSUQgMjU1XG5cdHByaXZhdGUgcGFyc2VNZXRhRGF0YShibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyLCAyOkFXRFBhcnNlci5BV0RTVFJJTkcsIDM6QVdEUGFyc2VyLkFXRFNUUklORywgNDpBV0RQYXJzZXIuQVdEU1RSSU5HLCA1OkFXRFBhcnNlci5BV0RTVFJJTkd9KTtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBNZXRhRGF0YUJsb2NrOiBUaW1lU3RhbXAgICAgICAgICA9IFwiICsgcHJvcHMuZ2V0KDEsIDApKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgRW5jb2Rlck5hbWUgICAgICAgPSBcIiArIHByb3BzLmdldCgyLCBcInVua25vd25cIikpO1xuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBFbmNvZGVyVmVyc2lvbiAgICA9IFwiICsgcHJvcHMuZ2V0KDMsIFwidW5rbm93blwiKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRvck5hbWUgICAgID0gXCIgKyBwcm9wcy5nZXQoNCwgXCJ1bmtub3duXCIpKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhdG9yVmVyc2lvbiAgPSBcIiArIHByb3BzLmdldCg1LCBcInVua25vd25cIikpO1xuXHRcdH1cblx0fVxuXG5cdC8vYmxvY2tJRCAyNTRcblx0cHJpdmF0ZSBwYXJzZU5hbWVTcGFjZShibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIGlkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdHZhciBuYW1lU3BhY2VTdHJpbmc6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTmFtZVNwYWNlQmxvY2s6IElEID0gXCIgKyBpZCArIFwiIHwgU3RyaW5nID0gXCIgKyBuYW1lU3BhY2VTdHJpbmcpO1xuXHR9XG5cblx0Ly8tLVBhcnNlciBVVElMUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdC8vIHRoaXMgZnVuY3Rpb25zIHJlYWRzIGFuZCBjcmVhdGVzIGEgU2hhZG93TWV0aG9kTWV0aG9kXG5cdHByaXZhdGUgcGFyc2VTaGFkb3dNZXRob2RMaXN0KGxpZ2h0OkxpZ2h0QmFzZSwgYmxvY2tJRDpudW1iZXIpOlNoYWRvd01ldGhvZEJhc2Vcblx0e1xuXG5cdFx0dmFyIG1ldGhvZFR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHZhciBzaGFkb3dNZXRob2Q6U2hhZG93TWV0aG9kQmFzZTtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUiwgMjpBV0RQYXJzZXIuQkFERFIsIDM6QVdEUGFyc2VyLkJBRERSLCAxMDE6dGhpcy5fcHJvcHNOclR5cGUsIDEwMjp0aGlzLl9wcm9wc05yVHlwZSwgMTAzOnRoaXMuX3Byb3BzTnJUeXBlLCAyMDE6QVdEUGFyc2VyLlVJTlQzMiwgMjAyOkFXRFBhcnNlci5VSU5UMzIsIDMwMTpBV0RQYXJzZXIuVUlOVDE2LCAzMDI6QVdEUGFyc2VyLlVJTlQxNiwgNDAxOkFXRFBhcnNlci5VSU5UOCwgNDAyOkFXRFBhcnNlci5VSU5UOCwgNjAxOkFXRFBhcnNlci5DT0xPUiwgNjAyOkFXRFBhcnNlci5DT0xPUiwgNzAxOkFXRFBhcnNlci5CT09MLCA3MDI6QVdEUGFyc2VyLkJPT0wsIDgwMTpBV0RQYXJzZXIuTVRYNHg0fSk7XG5cblx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyO1xuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT5cblx0XHRzd2l0Y2ggKG1ldGhvZFR5cGUpIHtcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDEwMDE6IC8vQ2FzY2FkZVNoYWRvd01hcE1ldGhvZFxuXHRcdFx0Ly9cdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlNIQURPV19NQVBfTUVUSE9EXSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdC8vXHRcdFx0XHRcdFx0X2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTaGFkb3dCYXNlTWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIENhc2NhZGVTaGFkb3dNYXBNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XG5cdFx0XHQvL1x0XHRcdFx0XHRcdHJldHVybiBzaGFkb3dNZXRob2Q7XG5cdFx0XHQvL1x0XHRcdFx0XHR9XG5cdFx0XHQvL1x0XHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgQ2FzY2FkZVNoYWRvd01hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdKTtcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxMDAyOiAvL1NoYWRvd05lYXJNZXRob2Rcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5TSEFET1dfTUFQX01FVEhPRF0pO1xuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2hhZG93QmFzZU1ldGhvZCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBTaGFkb3dOZWFyTWV0aG9kIC0gU2hhZG93TWV0aG9kIG5vdCBjcmVhdGVkXCIpO1xuXHRcdFx0XHRcdHJldHVybiBzaGFkb3dNZXRob2Q7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IFNoYWRvd05lYXJNZXRob2QoPFNoYWRvd01ldGhvZEJhc2U+IHJldHVybmVkQXJyYXlbMV0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTEwMTogLy9TaGFkb3dGaWx0ZXJlZE1ldGhvZFxuXG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dGaWx0ZXJlZE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQpO1xuXHRcdFx0XHQoPFNoYWRvd0ZpbHRlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XG5cdFx0XHRcdCg8U2hhZG93RmlsdGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMTEwMjogLy9TaGFkb3dEaXRoZXJlZE1ldGhvZFxuXG5cblx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IFNoYWRvd0RpdGhlcmVkTWV0aG9kKDxEaXJlY3Rpb25hbExpZ2h0PiBsaWdodCwgPG51bWJlcj4gcHJvcHMuZ2V0KDIwMSwgNSkpO1xuXHRcdFx0XHQoPFNoYWRvd0RpdGhlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XG5cdFx0XHRcdCg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcblx0XHRcdFx0KDxTaGFkb3dEaXRoZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5yYW5nZSA9IHByb3BzLmdldCgxMDMsIDEpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxMTAzOiAvL1NoYWRvd1NvZnRNZXRob2RcblxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93U29mdE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQsIDxudW1iZXI+IHByb3BzLmdldCgyMDEsIDUpKTtcblx0XHRcdFx0KDxTaGFkb3dTb2Z0TWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XG5cdFx0XHRcdCg8U2hhZG93U29mdE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkucmFuZ2UgPSBwcm9wcy5nZXQoMTAzLCAxKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTEwNDogLy9TaGFkb3dIYXJkTWV0aG9kXG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dIYXJkTWV0aG9kKGxpZ2h0KTtcblx0XHRcdFx0KDxTaGFkb3dIYXJkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XG5cdFx0XHRcdCg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xuXHR9XG5cblx0Ly9CbG9jayBJRCAxMDFcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXG5cdHtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIG51bV9qb2ludHM6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHZhciBza2VsZXRvbjpTa2VsZXRvbiA9IG5ldyBTa2VsZXRvbigpO1xuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBEaXNjYXJkIHByb3BlcnRpZXMgZm9yIG5vd1x0XHRcblxuXHRcdHZhciBqb2ludHNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XG5cdFx0d2hpbGUgKGpvaW50c19wYXJzZWQgPCBudW1fam9pbnRzKSB7XG5cdFx0XHR2YXIgam9pbnQ6U2tlbGV0b25Kb2ludDtcblx0XHRcdHZhciBpYnA6TWF0cml4M0Q7XG5cdFx0XHQvLyBJZ25vcmUgam9pbnQgaWRcblx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdGpvaW50ID0gbmV3IFNrZWxldG9uSm9pbnQoKTtcblx0XHRcdGpvaW50LnBhcmVudEluZGV4ID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpIC0gMTsgLy8gMD1udWxsIGluIEFXRFxuXHRcdFx0am9pbnQubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblxuXHRcdFx0aWJwID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XG5cdFx0XHRqb2ludC5pbnZlcnNlQmluZFBvc2UgPSBpYnAucmF3RGF0YTtcblx0XHRcdC8vIElnbm9yZSBqb2ludCBwcm9wcy9hdHRyaWJ1dGVzIGZvciBub3dcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0XHRza2VsZXRvbi5qb2ludHMucHVzaChqb2ludCk7XG5cdFx0XHRqb2ludHNfcGFyc2VkKys7XG5cdFx0fVxuXG5cdFx0Ly8gRGlzY2FyZCBhdHRyaWJ1dGVzIGZvciBub3dcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChza2VsZXRvbiwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBza2VsZXRvbjtcblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uOiBOYW1lID0gXCIgKyBza2VsZXRvbi5uYW1lICsgXCIgfCBOdW1iZXIgb2YgSm9pbnRzID0gXCIgKyBqb2ludHNfcGFyc2VkKTtcblx0fVxuXG5cdC8vQmxvY2sgSUQgPSAxMDJcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uUG9zZShibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxuXHR7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBudW1fam9pbnRzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsgLy8gSWdub3JlIHByb3BlcnRpZXMgZm9yIG5vd1xuXG5cdFx0dmFyIHBvc2U6U2tlbGV0b25Qb3NlID0gbmV3IFNrZWxldG9uUG9zZSgpO1xuXG5cdFx0dmFyIGpvaW50c19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcblx0XHR3aGlsZSAoam9pbnRzX3BhcnNlZCA8IG51bV9qb2ludHMpIHtcblx0XHRcdHZhciBqb2ludF9wb3NlOkpvaW50UG9zZTtcblx0XHRcdHZhciBoYXNfdHJhbnNmb3JtOm51bWJlciAvKnVpbnQqLztcblx0XHRcdGpvaW50X3Bvc2UgPSBuZXcgSm9pbnRQb3NlKCk7XG5cdFx0XHRoYXNfdHJhbnNmb3JtID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRpZiAoaGFzX3RyYW5zZm9ybSA9PSAxKSB7XG5cdFx0XHRcdHZhciBtdHhfZGF0YTpBcnJheTxudW1iZXI+ID0gdGhpcy5wYXJzZU1hdHJpeDQzUmF3RGF0YSgpO1xuXG5cdFx0XHRcdHZhciBtdHg6TWF0cml4M0QgPSBuZXcgTWF0cml4M0QobXR4X2RhdGEpO1xuXHRcdFx0XHRqb2ludF9wb3NlLm9yaWVudGF0aW9uLmZyb21NYXRyaXgobXR4KTtcblx0XHRcdFx0am9pbnRfcG9zZS50cmFuc2xhdGlvbi5jb3B5RnJvbShtdHgucG9zaXRpb24pO1xuXG5cdFx0XHRcdHBvc2Uuam9pbnRQb3Nlc1tqb2ludHNfcGFyc2VkXSA9IGpvaW50X3Bvc2U7XG5cdFx0XHR9XG5cdFx0XHRqb2ludHNfcGFyc2VkKys7XG5cdFx0fVxuXHRcdC8vIFNraXAgYXR0cmlidXRlcyBmb3Igbm93XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQocG9zZSwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBwb3NlO1xuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b25Qb3NlOiBOYW1lID0gXCIgKyBwb3NlLm5hbWUgKyBcIiB8IE51bWJlciBvZiBKb2ludHMgPSBcIiArIGpvaW50c19wYXJzZWQpO1xuXHR9XG5cblx0Ly9ibG9ja0lEIDEwM1xuXHRwcml2YXRlIHBhcnNlU2tlbGV0b25BbmltYXRpb24oYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcblx0e1xuXHRcdHZhciBmcmFtZV9kdXI6bnVtYmVyO1xuXHRcdHZhciBwb3NlX2FkZHI6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgY2xpcDpTa2VsZXRvbkNsaXBOb2RlID0gbmV3IFNrZWxldG9uQ2xpcE5vZGUoKTtcblx0XHR2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIElnbm9yZSBwcm9wZXJ0aWVzIGZvciBub3dcblxuXHRcdHZhciBmcmFtZXNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55Pjtcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcblx0XHRcdHBvc2VfYWRkciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRmcmFtZV9kdXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZV9hZGRyLCBbQXNzZXRUeXBlLlNLRUxFVE9OX1BPU0VdKTtcblx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNrZWxldG9uUG9zZSBGcmFtZSAjIFwiICsgZnJhbWVzX3BhcnNlZCArIFwiIChJRCA9IFwiICsgcG9zZV9hZGRyICsgXCIgKSBmb3IgdGhpcyBTa2VsZXRvbkNsaXBOb2RlXCIpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjbGlwLmFkZEZyYW1lKDxTa2VsZXRvblBvc2U+IHRoaXMuX2Jsb2Nrc1twb3NlX2FkZHJdLmRhdGEsIGZyYW1lX2R1cik7XG5cdFx0XHRmcmFtZXNfcGFyc2VkKys7XG5cdFx0fVxuXHRcdGlmIChjbGlwLmZyYW1lcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IHRoaXMgU2tlbGV0b25DbGlwTm9kZSwgYmVjYXVzZSBubyBGcmFtZXMgd2hlcmUgc2V0LlwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIGF0dHJpYnV0ZXMgZm9yIG5vd1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNsaXAsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY2xpcDtcblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uQ2xpcE5vZGU6IE5hbWUgPSBcIiArIGNsaXAubmFtZSArIFwiIHwgTnVtYmVyIG9mIEZyYW1lcyA9IFwiICsgY2xpcC5mcmFtZXMubGVuZ3RoKTtcblx0fVxuXG5cdC8vQmxvY2sgSUQgPSAxMTEgLyAgQmxvY2sgSUQgPSAxMTJcblx0cHJpdmF0ZSBwYXJzZU1lc2hQb3NlQW5pbWF0aW9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovLCBwb3NlT25seTpib29sZWFuID0gZmFsc2UpOnZvaWRcblx0e1xuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IDE7XG5cdFx0dmFyIG51bV9zdWJtZXNoZXM6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBmcmFtZXNfcGFyc2VkOm51bWJlciAvKnVpbnQqLztcblx0XHR2YXIgc3ViTWVzaFBhcnNlZDpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIGZyYW1lX2R1cjpudW1iZXI7XG5cdFx0dmFyIHg6bnVtYmVyO1xuXHRcdHZhciB5Om51bWJlcjtcblx0XHR2YXIgejpudW1iZXI7XG5cdFx0dmFyIHN0cl9sZW46bnVtYmVyO1xuXHRcdHZhciBzdHJfZW5kOm51bWJlcjtcblx0XHR2YXIgZ2VvbWV0cnk6R2VvbWV0cnk7XG5cdFx0dmFyIHN1Ykdlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcblx0XHR2YXIgaWR4Om51bWJlciAvKmludCovID0gMDtcblx0XHR2YXIgY2xpcDpWZXJ0ZXhDbGlwTm9kZSA9IG5ldyBWZXJ0ZXhDbGlwTm9kZSgpO1xuXHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki87XG5cdFx0dmFyIHZlcnRzOkFycmF5PG51bWJlcj47XG5cdFx0dmFyIG51bV9TdHJlYW1zOm51bWJlciAvKmludCovID0gMDtcblx0XHR2YXIgc3RyZWFtc1BhcnNlZDpudW1iZXIgLyppbnQqLyA9IDA7XG5cdFx0dmFyIHN0cmVhbXR5cGVzOkFycmF5PG51bWJlcj4gLyppbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCkgLyppbnQqLztcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcztcblx0XHR2YXIgdGhpc0dlbzpHZW9tZXRyeTtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIGdlb0FkcmVzczpudW1iZXIgLyppbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGdlb0FkcmVzcywgW0Fzc2V0VHlwZS5HRU9NRVRSWV0pO1xuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIHRhcmdldC1HZW9tZXRyeS1PYmplY3QgXCIgKyBnZW9BZHJlc3MgKyBcIiApIGZvciB0aGlzIFZlcnRleENsaXBOb2RlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgdXZzOkFycmF5PEFycmF5PG51bWJlcj4+ID0gdGhpcy5nZXRVVkZvclZlcnRleEFuaW1hdGlvbihnZW9BZHJlc3MpO1xuXHRcdGlmICghcG9zZU9ubHkpXG5cdFx0XHRudW1fZnJhbWVzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXG5cdFx0bnVtX3N1Ym1lc2hlcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRudW1fU3RyZWFtcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRzdHJlYW1zUGFyc2VkID0gMDtcblx0XHR3aGlsZSAoc3RyZWFtc1BhcnNlZCA8IG51bV9TdHJlYW1zKSB7XG5cdFx0XHRzdHJlYW10eXBlcy5wdXNoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSk7XG5cdFx0XHRzdHJlYW1zUGFyc2VkKys7XG5cdFx0fVxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJPT0wsIDI6QVdEUGFyc2VyLkJPT0x9KTtcblxuXHRcdGNsaXAubG9vcGluZyA9IHByb3BzLmdldCgxLCB0cnVlKTtcblx0XHRjbGlwLnN0aXRjaEZpbmFsRnJhbWUgPSBwcm9wcy5nZXQoMiwgZmFsc2UpO1xuXG5cdFx0ZnJhbWVzX3BhcnNlZCA9IDA7XG5cdFx0d2hpbGUgKGZyYW1lc19wYXJzZWQgPCBudW1fZnJhbWVzKSB7XG5cdFx0XHRmcmFtZV9kdXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xuXHRcdFx0c3ViTWVzaFBhcnNlZCA9IDA7XG5cdFx0XHR3aGlsZSAoc3ViTWVzaFBhcnNlZCA8IG51bV9zdWJtZXNoZXMpIHtcblx0XHRcdFx0c3RyZWFtc1BhcnNlZCA9IDA7XG5cdFx0XHRcdHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRzdHJfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHN0cl9sZW47XG5cdFx0XHRcdHdoaWxlIChzdHJlYW1zUGFyc2VkIDwgbnVtX1N0cmVhbXMpIHtcblx0XHRcdFx0XHRpZiAoc3RyZWFtdHlwZXNbc3RyZWFtc1BhcnNlZF0gPT0gMSkge1xuXHRcdFx0XHRcdFx0aW5kaWNlcyA9ICg8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlbMV0pLnN1Ykdlb21ldHJpZXNbc3ViTWVzaFBhcnNlZF0uaW5kaWNlcztcblx0XHRcdFx0XHRcdHZlcnRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHRcdGlkeCA9IDA7XG5cdFx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcblx0XHRcdFx0XHRcdFx0eCA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcblx0XHRcdFx0XHRcdFx0eSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcblx0XHRcdFx0XHRcdFx0eiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geDtcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geTtcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0gejtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ykdlb20gPSBuZXcgVHJpYW5nbGVTdWJHZW9tZXRyeSh0cnVlKTtcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlUG9zaXRpb25zKHZlcnRzKTtcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlVVZzKHV2c1tzdWJNZXNoUGFyc2VkXSk7XG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVZlcnRleE5vcm1hbHMobnVsbCk7XG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVZlcnRleFRhbmdlbnRzKG51bGwpO1xuXHRcdFx0XHRcdFx0c3ViR2VvbS5hdXRvRGVyaXZlTm9ybWFscyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c3ViR2VvbS5hdXRvRGVyaXZlVGFuZ2VudHMgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHN1Yk1lc2hQYXJzZWQrKztcblx0XHRcdFx0XHRcdGdlb21ldHJ5LmFkZFN1Ykdlb21ldHJ5KHN1Ykdlb20pXG5cdFx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcblx0XHRcdFx0XHRzdHJlYW1zUGFyc2VkKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNsaXAuYWRkRnJhbWUoZ2VvbWV0cnksIGZyYW1lX2R1cik7XG5cdFx0XHRmcmFtZXNfcGFyc2VkKys7XG5cdFx0fVxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNsaXAsIG5hbWUpO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjbGlwO1xuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVmVydGV4Q2xpcE5vZGU6IE5hbWUgPSBcIiArIGNsaXAubmFtZSArIFwiIHwgVGFyZ2V0LUdlb21ldHJ5LU5hbWUgPSBcIiArICg8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlbMV0pLm5hbWUgKyBcIiB8IE51bWJlciBvZiBGcmFtZXMgPSBcIiArIGNsaXAuZnJhbWVzLmxlbmd0aCk7XG5cdH1cblxuXHQvL0Jsb2NrSUQgMTEzXG5cdHByaXZhdGUgcGFyc2VWZXJ0ZXhBbmltYXRpb25TZXQoYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcblx0e1xuXHRcdHZhciBwb3NlQmxvY2tBZHJlc3M6bnVtYmVyIC8qaW50Ki9cblx0XHR2YXIgb3V0cHV0U3RyaW5nOnN0cmluZyA9IFwiXCI7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMTZ9KTtcblx0XHR2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xuXHRcdHZhciBza2VsZXRvbkZyYW1lczpBcnJheTxTa2VsZXRvbkNsaXBOb2RlPiA9IG5ldyBBcnJheTxTa2VsZXRvbkNsaXBOb2RlPigpO1xuXHRcdHZhciB2ZXJ0ZXhGcmFtZXM6QXJyYXk8VmVydGV4Q2xpcE5vZGU+ID0gbmV3IEFycmF5PFZlcnRleENsaXBOb2RlPigpO1xuXHRcdHdoaWxlIChmcmFtZXNfcGFyc2VkIDwgbnVtX2ZyYW1lcykge1xuXHRcdFx0cG9zZUJsb2NrQWRyZXNzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwb3NlQmxvY2tBZHJlc3MsIFtBc3NldFR5cGUuQU5JTUFUSU9OX05PREVdKTtcblx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEFuaW1hdGlvbkNsaXBOb2RlIE5yIFwiICsgZnJhbWVzX3BhcnNlZCArIFwiICggXCIgKyBwb3NlQmxvY2tBZHJlc3MgKyBcIiApIGZvciB0aGlzIEFuaW1hdGlvblNldFwiKTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVsxXSBpbnN0YW5jZW9mIFZlcnRleENsaXBOb2RlKVxuXHRcdFx0XHR2ZXJ0ZXhGcmFtZXMucHVzaChyZXR1cm5lZEFycmF5WzFdKVxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVsxXSBpbnN0YW5jZW9mIFNrZWxldG9uQ2xpcE5vZGUpXG5cdFx0XHRcdHNrZWxldG9uRnJhbWVzLnB1c2gocmV0dXJuZWRBcnJheVsxXSlcblx0XHRcdH1cblx0XHRcdGZyYW1lc19wYXJzZWQrKztcblx0XHR9XG5cdFx0aWYgKCh2ZXJ0ZXhGcmFtZXMubGVuZ3RoID09IDApICYmIChza2VsZXRvbkZyYW1lcy5sZW5ndGggPT0gMCkpIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGhpcyBBbmltYXRpb25TZXQsIGJlY2F1c2UgaXQgY29udGFpbnMgbm8gYW5pbWF0aW9uc1wiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0aWYgKHZlcnRleEZyYW1lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgbmV3VmVydGV4QW5pbWF0aW9uU2V0OlZlcnRleEFuaW1hdGlvblNldCA9IG5ldyBWZXJ0ZXhBbmltYXRpb25TZXQoKTtcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdmVydGV4RnJhbWVzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRuZXdWZXJ0ZXhBbmltYXRpb25TZXQuYWRkQW5pbWF0aW9uKHZlcnRleEZyYW1lc1tpXSk7XG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldChuZXdWZXJ0ZXhBbmltYXRpb25TZXQsIG5hbWUpO1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBuZXdWZXJ0ZXhBbmltYXRpb25TZXQ7XG5cdFx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVmVydGV4QW5pbWF0aW9uU2V0OiBOYW1lID0gXCIgKyBuYW1lICsgXCIgfCBBbmltYXRpb25zID0gXCIgKyBuZXdWZXJ0ZXhBbmltYXRpb25TZXQuYW5pbWF0aW9ucy5sZW5ndGggKyBcIiB8IEFuaW1hdGlvbi1OYW1lcyA9IFwiICsgbmV3VmVydGV4QW5pbWF0aW9uU2V0LmFuaW1hdGlvbk5hbWVzLnRvU3RyaW5nKCkpO1xuXG5cdFx0fSBlbHNlIGlmIChza2VsZXRvbkZyYW1lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZUJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9OT0RFXSk7XG5cdFx0XHR2YXIgbmV3U2tlbGV0b25BbmltYXRpb25TZXQ6U2tlbGV0b25BbmltYXRpb25TZXQgPSBuZXcgU2tlbGV0b25BbmltYXRpb25TZXQocHJvcHMuZ2V0KDEsIDQpKTsgLy9wcm9wcy5nZXQoMSw0KSk7XG5cdFx0XHRmb3IgKHZhciBpOm51bWJlciAvKmludCovID0gMDsgaSA8IHNrZWxldG9uRnJhbWVzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRuZXdTa2VsZXRvbkFuaW1hdGlvblNldC5hZGRBbmltYXRpb24oc2tlbGV0b25GcmFtZXNbaV0pO1xuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobmV3U2tlbGV0b25BbmltYXRpb25TZXQsIG5hbWUpO1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBuZXdTa2VsZXRvbkFuaW1hdGlvblNldDtcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbkFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9ucy5sZW5ndGggKyBcIiB8IEFuaW1hdGlvbi1OYW1lcyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9uTmFtZXMudG9TdHJpbmcoKSk7XG5cblx0XHR9XG5cdH1cblxuXHQvL0Jsb2NrSUQgMTIyXG5cdHByaXZhdGUgcGFyc2VBbmltYXRvclNldChibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxuXHR7XG5cdFx0dmFyIHRhcmdldE1lc2g6TWVzaDtcblx0XHR2YXIgYW5pbVNldEJsb2NrQWRyZXNzOm51bWJlciAvKmludCovXG5cdFx0dmFyIHRhcmdldEFuaW1hdGlvblNldDpBbmltYXRpb25TZXRCYXNlO1xuXHRcdHZhciBvdXRwdXRTdHJpbmc6c3RyaW5nID0gXCJcIjtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIHR5cGU6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFJ9KTtcblxuXHRcdGFuaW1TZXRCbG9ja0FkcmVzcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIHRhcmdldE1lc2hMZW5ndGg6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHZhciBtZXNoQWRyZXNzZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCkgLyp1aW50Ki87XG5cdFx0Zm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCB0YXJnZXRNZXNoTGVuZ3RoOyBpKyspXG5cdFx0XHRtZXNoQWRyZXNzZXMucHVzaCh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpKTtcblxuXHRcdHZhciBhY3RpdmVTdGF0ZTpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dmFyIGF1dG9wbGF5OmJvb2xlYW4gPSAoIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpID09IDEgKTtcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XG5cdFx0dmFyIHRhcmdldE1lc2hlczpBcnJheTxNZXNoPiA9IG5ldyBBcnJheTxNZXNoPigpO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IG1lc2hBZHJlc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKG1lc2hBZHJlc3Nlc1tpXSwgW0Fzc2V0VHlwZS5NRVNIXSk7XG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0dGFyZ2V0TWVzaGVzLnB1c2goPE1lc2g+IHJldHVybmVkQXJyYXlbMV0pO1xuXHRcdH1cblx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoYW5pbVNldEJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9TRVRdKTtcblx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbmltYXRpb25TZXQgKCBcIiArIGFuaW1TZXRCbG9ja0FkcmVzcyArIFwiICkgZm9yIHRoaXMgQW5pbWF0b3JcIik7O1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHRhcmdldEFuaW1hdGlvblNldCA9IDxBbmltYXRpb25TZXRCYXNlPiByZXR1cm5lZEFycmF5WzFdO1xuXHRcdHZhciB0aGlzQW5pbWF0b3I6QW5pbWF0b3JCYXNlO1xuXHRcdGlmICh0eXBlID09IDEpIHtcblxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHByb3BzLmdldCgxLCAwKSwgW0Fzc2V0VHlwZS5TS0VMRVRPTl0pO1xuXHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTa2VsZXRvbiAoIFwiICsgcHJvcHMuZ2V0KDEsIDApICsgXCIgKSBmb3IgdGhpcyBBbmltYXRvclwiKTtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHR0aGlzQW5pbWF0b3IgPSBuZXcgU2tlbGV0b25BbmltYXRvcig8U2tlbGV0b25BbmltYXRpb25TZXQ+IHRhcmdldEFuaW1hdGlvblNldCwgPFNrZWxldG9uPiByZXR1cm5lZEFycmF5WzFdKTtcblxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PSAyKVxuXHRcdFx0dGhpc0FuaW1hdG9yID0gbmV3IFZlcnRleEFuaW1hdG9yKDxWZXJ0ZXhBbmltYXRpb25TZXQ+IHRhcmdldEFuaW1hdGlvblNldCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCh0aGlzQW5pbWF0b3IsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gdGhpc0FuaW1hdG9yO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0YXJnZXRNZXNoZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0eXBlID09IDEpXG5cdFx0XHRcdHRhcmdldE1lc2hlc1tpXS5hbmltYXRvciA9ICg8U2tlbGV0b25BbmltYXRvcj4gdGhpc0FuaW1hdG9yKTtcblx0XHRcdGlmICh0eXBlID09IDIpXG5cdFx0XHRcdHRhcmdldE1lc2hlc1tpXS5hbmltYXRvciA9ICg8VmVydGV4QW5pbWF0b3I+IHRoaXNBbmltYXRvcik7XG5cblx0XHR9XG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBBbmltYXRvcjogTmFtZSA9IFwiICsgbmFtZSk7XG5cdH1cblx0XG5cdC8vIHRoaXMgZnVuY3Rpb25zIHJlYWRzIGFuZCBjcmVhdGVzIGEgRWZmZWN0TWV0aG9kXG5cdHByaXZhdGUgcGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQ6bnVtYmVyKTpFZmZlY3RNZXRob2RCYXNlXG5cdHtcblxuXHRcdHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgZWZmZWN0TWV0aG9kUmV0dXJuOkVmZmVjdE1ldGhvZEJhc2U7XG5cblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUiwgMjpBV0RQYXJzZXIuQkFERFIsIDM6QVdEUGFyc2VyLkJBRERSLCAxMDE6dGhpcy5fcHJvcHNOclR5cGUsIDEwMjp0aGlzLl9wcm9wc05yVHlwZSwgMTAzOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDQ6dGhpcy5fcHJvcHNOclR5cGUsIDEwNTp0aGlzLl9wcm9wc05yVHlwZSwgMTA2OnRoaXMuX3Byb3BzTnJUeXBlLCAxMDc6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTH0pO1xuXHRcdHZhciB0YXJnZXRJRDpudW1iZXI7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcblxuXHRcdHN3aXRjaCAobWV0aG9kVHlwZSkge1xuXHRcdFx0Ly8gRWZmZWN0IE1ldGhvZHNcblx0XHRcdGNhc2UgNDAxOiAvL0NvbG9yTWF0cml4XG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RDb2xvck1hdHJpeE1ldGhvZChwcm9wcy5nZXQoMTAxLCBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSkpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQwMjogLy9Db2xvclRyYW5zZm9ybVxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2QoKTtcblx0XHRcdFx0dmFyIG9mZkNvbDpudW1iZXIgLyp1aW50Ki8gPSBwcm9wcy5nZXQoNjAxLCAweDAwMDAwMDAwKTtcblx0XHRcdFx0KDxFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZD4gZWZmZWN0TWV0aG9kUmV0dXJuKS5jb2xvclRyYW5zZm9ybSA9IG5ldyBDb2xvclRyYW5zZm9ybShwcm9wcy5nZXQoMTAyLCAxKSwgcHJvcHMuZ2V0KDEwMywgMSksIHByb3BzLmdldCgxMDQsIDEpLCBwcm9wcy5nZXQoMTAxLCAxKSwgKChvZmZDb2wgPj4gMTYpICYgMHhGRiksICgob2ZmQ29sID4+IDgpICYgMHhGRiksIChvZmZDb2wgJiAweEZGKSwgKChvZmZDb2wgPj4gMjQpICYgMHhGRikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDAzOiAvL0Vudk1hcFxuXG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRU5WIE1BUCcsIHRhcmdldElEKTtcblxuXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgWyBBc3NldFR5cGUuVEVYVFVSRSBdLCBcIkN1YmVUZXh0dXJlXCIpO1xuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RFbnZNYXBNZXRob2QoPEN1YmVUZXh0dXJlQmFzZT4gcmV0dXJuZWRBcnJheVsxXSwgPG51bWJlcj4gcHJvcHMuZ2V0KDEwMSwgMSkpO1xuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgyLCAwKTtcblx0XHRcdFx0aWYgKHRhcmdldElEID4gMCkge1xuXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIE1hc2stdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XG5cblx0XHRcdFx0XHQvLyBUb2RvOiB0ZXN0IG1hc2sgd2l0aCBFbnZNYXBNZXRob2Rcblx0XHRcdFx0XHQvLyg8RW52TWFwTWV0aG9kPiBlZmZlY3RNZXRob2RSZXR1cm4pLm1hc2sgPSA8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDA0OiAvL0xpZ2h0TWFwTWV0aG9kXG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIExpZ2h0TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIExpZ2h0TWFwTWV0aG9kXCIpO1xuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0TGlnaHRNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSk7IC8vdXNlc2Vjb25kYXJ5VVYgbm90IHNldFxuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDQwNTogLy9Qcm9qZWN0aXZlVGV4dHVyZU1ldGhvZFxuXHRcdFx0Ly9cdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVfUFJPSkVDVE9SXSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGV4dHVyZVByb2plY3RvciAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZFwiKTtcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDA2OiAvL1JpbUxpZ2h0TWV0aG9kXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RSaW1MaWdodE1ldGhvZChwcm9wcy5nZXQoNjAxLCAweGZmZmZmZiksIHByb3BzLmdldCgxMDEsIDAuNCksIHByb3BzLmdldCgxMDEsIDIpKTsgLy9ibGVuZE1vZGVcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQwNzogLy9BbHBoYU1hc2tNZXRob2Rcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQWxwaGEtdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBBbHBoYU1hc2tNZXRob2RcIik7XG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RBbHBoYU1hc2tNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDcwMSwgZmFsc2UpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvL1x0XHRcdFx0Y2FzZSA0MDg6IC8vUmVmcmFjdGlvbkVudk1hcE1ldGhvZFxuXHRcdFx0Ly9cdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xuXHRcdFx0Ly9cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRfYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBSZWZyYWN0aW9uRW52TWFwTWV0aG9kXCIpO1xuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFJlZnJhY3Rpb25FbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDEwMSwgMC4xKSwgcHJvcHMuZ2V0KDEwMiwgMC4wMSksIHByb3BzLmdldCgxMDMsIDAuMDEpLCBwcm9wcy5nZXQoMTA0LCAwLjAxKSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRSZWZyYWN0aW9uRW52TWFwTWV0aG9kKGVmZmVjdE1ldGhvZFJldHVybikuYWxwaGEgPSBwcm9wcy5nZXQoMTA0LCAxKTtcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgNDA5OiAvL091dGxpbmVNZXRob2Rcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBPdXRsaW5lTWV0aG9kKHByb3BzLmdldCg2MDEsIDB4MDAwMDAwMDApLCBwcm9wcy5nZXQoMTAxLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDEwOiAvL0ZyZXNuZWxFbnZNYXBNZXRob2Rcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcblx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgRnJlc25lbEVudk1hcE1ldGhvZFwiKTtcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEZyZXNuZWxFbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDEwMSwgMSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDExOiAvL0ZvZ01ldGhvZFxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0Rm9nTWV0aG9kKHByb3BzLmdldCgxMDEsIDApLCBwcm9wcy5nZXQoMTAyLCAxMDAwKSwgcHJvcHMuZ2V0KDYwMSwgMHg4MDgwODApKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0cmV0dXJuIGVmZmVjdE1ldGhvZFJldHVybjtcblxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVVzZXJBdHRyaWJ1dGVzKCk6T2JqZWN0XG5cdHtcblx0XHR2YXIgYXR0cmlidXRlczpPYmplY3Q7XG5cdFx0dmFyIGxpc3RfbGVuOm51bWJlcjtcblx0XHR2YXIgYXR0aWJ1dGVDbnQ6bnVtYmVyO1xuXG5cdFx0bGlzdF9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0aWYgKGxpc3RfbGVuID4gMCkge1xuXG5cdFx0XHR2YXIgbGlzdF9lbmQ6bnVtYmVyO1xuXG5cdFx0XHRhdHRyaWJ1dGVzID0ge307XG5cblx0XHRcdGxpc3RfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxpc3RfbGVuO1xuXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IGxpc3RfZW5kKSB7XG5cdFx0XHRcdHZhciBuc19pZDpudW1iZXI7XG5cdFx0XHRcdHZhciBhdHRyX2tleTpzdHJpbmc7XG5cdFx0XHRcdHZhciBhdHRyX3R5cGU6bnVtYmVyO1xuXHRcdFx0XHR2YXIgYXR0cl9sZW46bnVtYmVyO1xuXHRcdFx0XHR2YXIgYXR0cl92YWw6YW55O1xuXG5cdFx0XHRcdC8vIFRPRE86IFByb3Blcmx5IHRlbmQgdG8gbmFtZXNwYWNlcyBpbiBhdHRyaWJ1dGVzXG5cdFx0XHRcdG5zX2lkID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdGF0dHJfa2V5ID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdFx0XHRhdHRyX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0YXR0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0XHRcdGlmICgodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGF0dHJfbGVuKSA+IGxpc3RfZW5kKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgIEVycm9yIGluIHJlYWRpbmcgYXR0cmlidXRlICMgXCIgKyBhdHRpYnV0ZUNudCArIFwiID0gc2tpcHBlZCB0byBlbmQgb2YgYXR0cmlidXRlLWxpc3RcIik7XG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xuXHRcdFx0XHRcdHJldHVybiBhdHRyaWJ1dGVzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3dpdGNoIChhdHRyX3R5cGUpIHtcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5BV0RTVFJJTkc6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGF0dHJfbGVuKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDg6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDE2OlxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMzI6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEludCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuQk9PTDpcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UODpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMTY6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQzMjpcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5CQUREUjpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUMzI6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDY0OlxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGUoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9ICd1bmltcGxlbWVudGVkIGF0dHJpYnV0ZSB0eXBlICcgKyBhdHRyX3R5cGU7XG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGF0dHJfbGVuO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImF0dHJpYnV0ZSA9IG5hbWU6IFwiICsgYXR0cl9rZXkgKyBcIiAgLyB2YWx1ZSA9IFwiICsgYXR0cl92YWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXR0cmlidXRlc1thdHRyX2tleV0gPSBhdHRyX3ZhbDtcblx0XHRcdFx0YXR0aWJ1dGVDbnQgKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYXR0cmlidXRlcztcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQcm9wZXJ0aWVzKGV4cGVjdGVkOk9iamVjdCk6QVdEUHJvcGVydGllc1xuXHR7XG5cdFx0dmFyIGxpc3RfZW5kOm51bWJlcjtcblx0XHR2YXIgbGlzdF9sZW46bnVtYmVyO1xuXHRcdHZhciBwcm9wZXJ0eUNudDpudW1iZXIgPSAwO1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gbmV3IEFXRFByb3BlcnRpZXMoKTtcblxuXHRcdGxpc3RfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRsaXN0X2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsaXN0X2xlbjtcblxuXHRcdGlmIChleHBlY3RlZCkge1xuXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IGxpc3RfZW5kKSB7XG5cdFx0XHRcdHZhciBsZW46bnVtYmVyO1xuXHRcdFx0XHR2YXIga2V5Om51bWJlcjtcblx0XHRcdFx0dmFyIHR5cGU6bnVtYmVyO1xuXG5cdFx0XHRcdGtleSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0bGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblxuXHRcdFx0XHRpZiAoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW4pID4gbGlzdF9lbmQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBwcm9wZXJ0eSAjIFwiICsgcHJvcGVydHlDbnQgKyBcIiA9IHNraXBwZWQgdG8gZW5kIG9mIHByb3BlcnRpZS1saXN0XCIpO1xuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBsaXN0X2VuZDtcblx0XHRcdFx0XHRyZXR1cm4gcHJvcHM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZXhwZWN0ZWQuaGFzT3duUHJvcGVydHkoa2V5LnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdFx0dHlwZSA9IGV4cGVjdGVkW2tleV07XG5cdFx0XHRcdFx0cHJvcHMuc2V0KGtleSwgdGhpcy5wYXJzZUF0dHJWYWx1ZSh0eXBlLCBsZW4pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGxlbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHByb3BlcnR5Q250ICs9IDE7XG5cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9wcztcblxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUF0dHJWYWx1ZSh0eXBlOm51bWJlciwgbGVuOm51bWJlcik6YW55XG5cdHtcblx0XHR2YXIgZWxlbV9sZW46bnVtYmVyO1xuXHRcdHZhciByZWFkX2Z1bmM6RnVuY3Rpb247XG5cblx0XHRzd2l0Y2ggKHR5cGUpIHtcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQk9PTDpcblx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDg6XG5cdFx0XHRcdGVsZW1fbGVuID0gMTtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDE2OlxuXHRcdFx0XHRlbGVtX2xlbiA9IDI7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMzI6XG5cdFx0XHRcdGVsZW1fbGVuID0gNDtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkSW50O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDg6XG5cdFx0XHRcdGVsZW1fbGVuID0gMTtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDE2OlxuXHRcdFx0XHRlbGVtX2xlbiA9IDI7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMzI6XG5cdFx0XHRjYXNlIEFXRFBhcnNlci5DT0xPUjpcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkJBRERSOlxuXHRcdFx0XHRlbGVtX2xlbiA9IDQ7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuRkxPQVQzMjpcblx0XHRcdFx0ZWxlbV9sZW4gPSA0O1xuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUNjQ6XG5cdFx0XHRcdGVsZW1fbGVuID0gODtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQVdEU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMobGVuKTtcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SMngxOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SM3gxOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SNHgxOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYM3gyOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYM3gzOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYNHgzOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYNHg0OlxuXHRcdFx0XHRlbGVtX2xlbiA9IDg7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0XHRpZiAoZWxlbV9sZW4gPCBsZW4pIHtcblx0XHRcdHZhciBsaXN0OkFycmF5PGFueT4gPSBbXTtcblx0XHRcdHZhciBudW1fcmVhZDpudW1iZXIgPSAwO1xuXHRcdFx0dmFyIG51bV9lbGVtczpudW1iZXIgPSBsZW4vZWxlbV9sZW47XG5cblx0XHRcdHdoaWxlIChudW1fcmVhZCA8IG51bV9lbGVtcykge1xuXHRcdFx0XHRsaXN0LnB1c2gocmVhZF9mdW5jLmFwcGx5KHRoaXMuX25ld0Jsb2NrQnl0ZXMpKTsgLy8gbGlzdC5wdXNoKHJlYWRfZnVuYygpKTtcblx0XHRcdFx0bnVtX3JlYWQrKztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dmFyIHZhbDphbnkgPSByZWFkX2Z1bmMuYXBwbHkodGhpcy5fbmV3QmxvY2tCeXRlcyk7Ly9yZWFkX2Z1bmMoKTtcblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUhlYWRlcigpOnZvaWRcblx0e1xuXHRcdHZhciBmbGFnczpudW1iZXI7XG5cdFx0dmFyIGJvZHlfbGVuOm51bWJlcjtcblxuXHRcdHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uID0gMzsgLy8gU2tpcCBtYWdpYyBzdHJpbmcgYW5kIHBhcnNlIHZlcnNpb25cblxuXHRcdHRoaXMuX3ZlcnNpb25bMF0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dGhpcy5fdmVyc2lvblsxXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblxuXHRcdGZsYWdzID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTsgLy8gUGFyc2UgYml0IGZsYWdzXG5cblx0XHR0aGlzLl9zdHJlYW1pbmcgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XG5cblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMSkpIHtcblx0XHRcdHRoaXMuX2FjY3VyYWN5TWF0cml4ID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzIpO1xuXHRcdFx0dGhpcy5fYWNjdXJhY3lHZW8gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMyk7XG5cdFx0XHR0aGlzLl9hY2N1cmFjeVByb3BzID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzQpO1xuXHRcdH1cblxuXHRcdC8vIGlmIHdlIHNldCBfYWNjdXJhY3lPbkJsb2NrcywgdGhlIHByZWNpc2lvbi12YWx1ZXMgYXJlIHJlYWQgZnJvbSBlYWNoIGJsb2NrLWhlYWRlci5cblxuXHRcdC8vIHNldCBzdG9yYWdlUHJlY2lzaW9uIHR5cGVzXG5cdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XG5cblx0XHRpZiAodGhpcy5fYWNjdXJhY3lHZW8pIHtcblx0XHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xuXHRcdH1cblxuXHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xuXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5TWF0cml4KSB7XG5cdFx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcblx0XHR9XG5cblx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xuXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5UHJvcHMpIHtcblx0XHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29tcHJlc3Npb24gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7IC8vIGNvbXByZXNzaW9uXG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiSW1wb3J0IEFXREZpbGUgb2YgdmVyc2lvbiA9IFwiICsgdGhpcy5fdmVyc2lvblswXSArIFwiIC0gXCIgKyB0aGlzLl92ZXJzaW9uWzFdKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiR2xvYmFsIFNldHRpbmdzID0gQ29tcHJlc3Npb24gPSBcIiArIHRoaXMuX2NvbXByZXNzaW9uICsgXCIgfCBTdHJlYW1pbmcgPSBcIiArIHRoaXMuX3N0cmVhbWluZyArIFwiIHwgTWF0cml4LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lNYXRyaXggKyBcIiB8IEdlb21ldHJ5LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lHZW8gKyBcIiB8IFByb3BlcnRpZXMtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeVByb3BzKTtcblx0XHR9XG5cblx0XHQvLyBDaGVjayBmaWxlIGludGVncml0eVxuXHRcdGJvZHlfbGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0aWYgKCF0aGlzLl9zdHJlYW1pbmcgJiYgYm9keV9sZW4gIT0gdGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSkge1xuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQVdEMiBib2R5IGxlbmd0aCBkb2VzIG5vdCBtYXRjaCBoZWFkZXIgaW50ZWdyaXR5IGZpZWxkJyk7XG5cdFx0fVxuXG5cdH1cblx0Ly8gSGVscGVyIC0gZnVuY3Rpb25zXG5cdHByaXZhdGUgZ2V0VVZGb3JWZXJ0ZXhBbmltYXRpb24obWVzaElEOm51bWJlciAvKnVpbnQqLyk6QXJyYXk8QXJyYXk8bnVtYmVyPj5cblx0e1xuXHRcdGlmICh0aGlzLl9ibG9ja3NbbWVzaElEXS5kYXRhIGluc3RhbmNlb2YgTWVzaClcblx0XHRtZXNoSUQgPSB0aGlzLl9ibG9ja3NbbWVzaElEXS5nZW9JRDtcblx0XHRpZiAodGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uKVxuXHRcdFx0cmV0dXJuIHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbjtcblx0XHR2YXIgZ2VvbWV0cnk6R2VvbWV0cnkgPSAoPEdlb21ldHJ5PiB0aGlzLl9ibG9ja3NbbWVzaElEXS5kYXRhKTtcblx0XHR2YXIgZ2VvQ250Om51bWJlciAvKmludCovID0gMDtcblx0XHR2YXIgdWQ6QXJyYXk8bnVtYmVyPjtcblx0XHR2YXIgdVN0cmlkZTpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIHVPZmZzOm51bWJlciAvKnVpbnQqLztcblx0XHR2YXIgbnVtUG9pbnRzOm51bWJlciAvKnVpbnQqLztcblx0XHR2YXIgaTpudW1iZXIgLyppbnQqLztcblx0XHR2YXIgbmV3VXZzOkFycmF5PG51bWJlcj47XG5cdFx0dmFyIHN1Yl9nZW9tOlRyaWFuZ2xlU3ViR2VvbWV0cnk7XG5cdFx0dGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uID0gbmV3IEFycmF5PEFycmF5PG51bWJlcj4+KCk7XG5cdFx0d2hpbGUgKGdlb0NudCA8IGdlb21ldHJ5LnN1Ykdlb21ldHJpZXMubGVuZ3RoKSB7XG5cdFx0XHRuZXdVdnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXHRcdFx0c3ViX2dlb20gPSA8VHJpYW5nbGVTdWJHZW9tZXRyeT4gZ2VvbWV0cnkuc3ViR2VvbWV0cmllc1tnZW9DbnRdO1xuXHRcdFx0bnVtUG9pbnRzID0gc3ViX2dlb20ubnVtVmVydGljZXM7XG5cdFx0XHR1ZCA9IHN1Yl9nZW9tLnV2cztcblx0XHRcdHVTdHJpZGUgPSBzdWJfZ2VvbS5nZXRTdHJpZGUoVHJpYW5nbGVTdWJHZW9tZXRyeS5VVl9EQVRBKTtcblx0XHRcdHVPZmZzID0gc3ViX2dlb20uZ2V0T2Zmc2V0KFRyaWFuZ2xlU3ViR2VvbWV0cnkuVVZfREFUQSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtUG9pbnRzOyBpKyspIHtcblx0XHRcdFx0bmV3VXZzLnB1c2godWRbdU9mZnMgKyBpKnVTdHJpZGUgKyAwXSk7XG5cdFx0XHRcdG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMV0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uLnB1c2gobmV3VXZzKTtcblx0XHRcdGdlb0NudCsrO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uO1xuXHR9XG5cdFxuXHRwcml2YXRlIHBhcnNlVmFyU3RyKCk6c3RyaW5nXG5cdHtcblxuXHRcdHZhciBsZW46bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRBc3NldEJ5SUQoYXNzZXRJRDpudW1iZXIsIGFzc2V0VHlwZXNUb0dldDpBcnJheTxzdHJpbmc+LCBleHRyYVR5cGVJbmZvOnN0cmluZyA9IFwiU2luZ2xlVGV4dHVyZVwiKTpBcnJheTxhbnk+XG5cdHtcblx0XHR2YXIgcmV0dXJuQXJyYXk6QXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG5cdFx0dmFyIHR5cGVDbnQ6bnVtYmVyID0gMDtcblx0XHRpZiAoYXNzZXRJRCA+IDApIHtcblx0XHRcdGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0pIHtcblx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKSB7XG5cdFx0XHRcdFx0d2hpbGUgKHR5cGVDbnQgPCBhc3NldFR5cGVzVG9HZXQubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHRcdHZhciBpYXNzZXQ6SUFzc2V0ID0gPElBc3NldD4gdGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGE7XG5cblx0XHRcdFx0XHRcdGlmIChpYXNzZXQuYXNzZXRUeXBlID09IGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSkge1xuXHRcdFx0XHRcdFx0XHQvL2lmIHRoZSByaWdodCBhc3NldFR5cGUgd2FzIGZvdW5kXG5cdFx0XHRcdFx0XHRcdGlmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5URVhUVVJFKSAmJiAoZXh0cmFUeXBlSW5mbyA9PSBcIkN1YmVUZXh0dXJlXCIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhIGluc3RhbmNlb2YgSW1hZ2VDdWJlVGV4dHVyZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuVEVYVFVSRSkgJiYgKGV4dHJhVHlwZUluZm8gPT0gXCJTaW5nbGVUZXh0dXJlXCIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhIGluc3RhbmNlb2YgSW1hZ2VUZXh0dXJlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vaWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLkdFT01FVFJZKSAmJiAoSUFzc2V0KF9ibG9ja3NbYXNzZXRJRF0uZGF0YSkuYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NRVNIKSkge1xuXHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLkdFT01FVFJZKSAmJiAoaWFzc2V0LmFzc2V0VHlwZSA9PSBBc3NldFR5cGUuTUVTSCkpIHtcblxuXHRcdFx0XHRcdFx0XHR2YXIgbWVzaDpNZXNoID0gPE1lc2g+IHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhXG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChtZXNoLmdlb21ldHJ5KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHR5cGVDbnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gaWYgdGhlIGhhcyBub3QgcmV0dXJuZWQgYW55dGhpbmcgeWV0LCB0aGUgYXNzZXQgaXMgbm90IGZvdW5kLCBvciB0aGUgZm91bmQgYXNzZXQgaXMgbm90IHRoZSByaWdodCB0eXBlLlxuXHRcdHJldHVybkFycmF5LnB1c2goZmFsc2UpO1xuXHRcdHJldHVybkFycmF5LnB1c2godGhpcy5nZXREZWZhdWx0QXNzZXQoYXNzZXRUeXBlc1RvR2V0WzBdLCBleHRyYVR5cGVJbmZvKSk7XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXREZWZhdWx0QXNzZXQoYXNzZXRUeXBlOnN0cmluZywgZXh0cmFUeXBlSW5mbzpzdHJpbmcpOklBc3NldFxuXHR7XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIChhc3NldFR5cGUgPT0gQXNzZXRUeXBlLlRFWFRVUkUpOlxuXHRcdFx0XHRpZiAoZXh0cmFUeXBlSW5mbyA9PSBcIkN1YmVUZXh0dXJlXCIpXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk7XG5cdFx0XHRcdGlmIChleHRyYVR5cGVJbmZvID09IFwiU2luZ2xlVGV4dHVyZVwiKVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmdldERlZmF1bHRUZXh0dXJlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAoYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NQVRFUklBTCk6XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldERlZmF1bHRNYXRlcmlhbCgpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRwcml2YXRlIGdldERlZmF1bHRNYXRlcmlhbCgpOklBc3NldFxuXHR7XG5cdFx0aWYgKCF0aGlzLl9kZWZhdWx0Qml0bWFwTWF0ZXJpYWwpXG5cdFx0XHR0aGlzLl9kZWZhdWx0Qml0bWFwTWF0ZXJpYWwgPSA8VHJpYW5nbGVNZXRob2RNYXRlcmlhbD4gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0TWF0ZXJpYWwoKTtcblxuXHRcdHJldHVybiAgPElBc3NldD4gIHRoaXMuX2RlZmF1bHRCaXRtYXBNYXRlcmlhbDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RGVmYXVsdFRleHR1cmUoKTpJQXNzZXRcblx0e1xuXHRcdGlmICghdGhpcy5fZGVmYXVsdFRleHR1cmUpXG5cdFx0XHR0aGlzLl9kZWZhdWx0VGV4dHVyZSA9IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuZ2V0RGVmYXVsdFRleHR1cmUoKTtcblxuXHRcdHJldHVybiA8SUFzc2V0PiB0aGlzLl9kZWZhdWx0VGV4dHVyZTtcblxuXHR9XG5cblx0cHJpdmF0ZSBnZXREZWZhdWx0Q3ViZVRleHR1cmUoKTpJQXNzZXRcblx0e1xuXHRcdGlmICghdGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlKSB7XG5cdFx0XHR2YXIgZGVmYXVsdEJpdG1hcDpCaXRtYXBEYXRhID0gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5jcmVhdGVDaGVja2VyZWRCaXRtYXBEYXRhKCk7XG5cblx0XHRcdHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZSA9IG5ldyBCaXRtYXBDdWJlVGV4dHVyZShkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwKTtcblx0XHRcdHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZS5uYW1lID0gXCJkZWZhdWx0Q3ViZVRleHR1cmVcIjtcblx0XHR9XG5cblx0XHRyZXR1cm4gPElBc3NldD4gdGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkTnVtYmVyKHByZWNpc2lvbjpib29sZWFuID0gZmFsc2UpOm51bWJlclxuXHR7XG5cdFx0aWYgKHByZWNpc2lvbilcblx0XHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGUoKTtcblx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcblxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZU1hdHJpeDNEKCk6TWF0cml4M0Rcblx0e1xuXHRcdHJldHVybiBuZXcgTWF0cml4M0QodGhpcy5wYXJzZU1hdHJpeDQzUmF3RGF0YSgpKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VNYXRyaXgzMlJhd0RhdGEoKTpBcnJheTxudW1iZXI+XG5cdHtcblx0XHR2YXIgaTpudW1iZXI7XG5cdFx0dmFyIG10eF9yYXc6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KDYpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCA2OyBpKyspIHtcblx0XHRcdG10eF9yYXdbaV0gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtdHhfcmF3O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZU1hdHJpeDQzUmF3RGF0YSgpOkFycmF5PG51bWJlcj5cblx0e1xuXHRcdHZhciBtdHhfcmF3OkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigxNik7XG5cblx0XHRtdHhfcmF3WzBdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzFdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzNdID0gMC4wO1xuXHRcdG10eF9yYXdbNF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbNV0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbNl0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbN10gPSAwLjA7XG5cdFx0bXR4X3Jhd1s4XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1s5XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1sxMF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbMTFdID0gMC4wO1xuXHRcdG10eF9yYXdbMTJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzEzXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1sxNF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbMTVdID0gMS4wO1xuXG5cdFx0Ly9UT0RPOiBmaXggbWF4IGV4cG9ydGVyIHRvIHJlbW92ZSBOYU4gdmFsdWVzIGluIGpvaW50IDAgaW52ZXJzZSBiaW5kIHBvc2VcblxuXHRcdGlmIChpc05hTihtdHhfcmF3WzBdKSkge1xuXHRcdFx0bXR4X3Jhd1swXSA9IDE7XG5cdFx0XHRtdHhfcmF3WzFdID0gMDtcblx0XHRcdG10eF9yYXdbMl0gPSAwO1xuXHRcdFx0bXR4X3Jhd1s0XSA9IDA7XG5cdFx0XHRtdHhfcmF3WzVdID0gMTtcblx0XHRcdG10eF9yYXdbNl0gPSAwO1xuXHRcdFx0bXR4X3Jhd1s4XSA9IDA7XG5cdFx0XHRtdHhfcmF3WzldID0gMDtcblx0XHRcdG10eF9yYXdbMTBdID0gMTtcblx0XHRcdG10eF9yYXdbMTJdID0gMDtcblx0XHRcdG10eF9yYXdbMTNdID0gMDtcblx0XHRcdG10eF9yYXdbMTRdID0gMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiBtdHhfcmF3O1xuXHR9XG5cbn1cblxuZXhwb3J0ID0gQVdEUGFyc2VyO1xuXG5jbGFzcyBBV0RCbG9ja1xue1xuXHRwdWJsaWMgaWQ6bnVtYmVyO1xuXHRwdWJsaWMgbmFtZTpzdHJpbmc7XG5cdHB1YmxpYyBkYXRhOmFueTtcblx0cHVibGljIGxlbjphbnk7XG5cdHB1YmxpYyBnZW9JRDpudW1iZXI7XG5cdHB1YmxpYyBleHRyYXM6T2JqZWN0O1xuXHRwdWJsaWMgYnl0ZXM6Qnl0ZUFycmF5O1xuXHRwdWJsaWMgZXJyb3JNZXNzYWdlczpBcnJheTxzdHJpbmc+O1xuXHRwdWJsaWMgdXZzRm9yVmVydGV4QW5pbWF0aW9uOkFycmF5PEFycmF5PG51bWJlcj4+O1xuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHR9XG5cblx0cHVibGljIGRpc3Bvc2UoKVxuXHR7XG5cblx0XHR0aGlzLmlkID0gbnVsbDtcblx0XHR0aGlzLmJ5dGVzID0gbnVsbDtcblx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBudWxsO1xuXHRcdHRoaXMudXZzRm9yVmVydGV4QW5pbWF0aW9uID0gbnVsbDtcblxuXHR9XG5cblx0cHVibGljIGFkZEVycm9yKGVycm9yTXNnOnN0cmluZyk6dm9pZFxuXHR7XG5cdFx0aWYgKCF0aGlzLmVycm9yTWVzc2FnZXMpXG5cdFx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG5cdFx0dGhpcy5lcnJvck1lc3NhZ2VzLnB1c2goZXJyb3JNc2cpO1xuXHR9XG59XG5cbmNsYXNzIEFXRFByb3BlcnRpZXNcbntcblx0cHVibGljIHNldChrZXk6bnVtYmVyLCB2YWx1ZTphbnkpOnZvaWRcblx0e1xuXHRcdHRoaXNbIGtleS50b1N0cmluZygpIF0gPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBnZXQoa2V5Om51bWJlciwgZmFsbGJhY2s6YW55KTphbnlcblx0e1xuXHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleS50b1N0cmluZygpKSkge1xuXHRcdFx0cmV0dXJuIHRoaXNba2V5LnRvU3RyaW5nKCldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsbGJhY2s7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgQml0RmxhZ3Ncbntcblx0cHVibGljIHN0YXRpYyBGTEFHMTpudW1iZXIgPSAxO1xuXHRwdWJsaWMgc3RhdGljIEZMQUcyOm51bWJlciA9IDI7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzM6bnVtYmVyID0gNDtcblx0cHVibGljIHN0YXRpYyBGTEFHNDpudW1iZXIgPSA4O1xuXHRwdWJsaWMgc3RhdGljIEZMQUc1Om51bWJlciA9IDE2O1xuXHRwdWJsaWMgc3RhdGljIEZMQUc2Om51bWJlciA9IDMyO1xuXHRwdWJsaWMgc3RhdGljIEZMQUc3Om51bWJlciA9IDY0O1xuXHRwdWJsaWMgc3RhdGljIEZMQUc4Om51bWJlciA9IDEyODtcblx0cHVibGljIHN0YXRpYyBGTEFHOTpudW1iZXIgPSAyNTY7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzEwOm51bWJlciA9IDUxMjtcblx0cHVibGljIHN0YXRpYyBGTEFHMTE6bnVtYmVyID0gMTAyNDtcblx0cHVibGljIHN0YXRpYyBGTEFHMTI6bnVtYmVyID0gMjA0ODtcblx0cHVibGljIHN0YXRpYyBGTEFHMTM6bnVtYmVyID0gNDA5Njtcblx0cHVibGljIHN0YXRpYyBGTEFHMTQ6bnVtYmVyID0gODE5Mjtcblx0cHVibGljIHN0YXRpYyBGTEFHMTU6bnVtYmVyID0gMTYzODQ7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE2Om51bWJlciA9IDMyNzY4O1xuXG5cdHB1YmxpYyBzdGF0aWMgdGVzdChmbGFnczpudW1iZXIsIHRlc3RGbGFnOm51bWJlcik6Ym9vbGVhblxuXHR7XG5cdFx0cmV0dXJuIChmbGFncyAmIHRlc3RGbGFnKSA9PSB0ZXN0RmxhZztcblx0fVxufVxuIl19