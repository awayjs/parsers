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
var Billboard = require("awayjs-display/lib/entities/Billboard");
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
var BasicMaterial = require("awayjs-display/lib/materials/BasicMaterial");
var TesselatedFont = require("awayjs-display/lib/text/TesselatedFont");
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
        this._blocks[blockID].name = this.parseVarStr();
        //console.log("Font name = "+this._blocks[blockID].name);
        var font_style_cnt = this._newBlockBytes.readUnsignedInt();
        //console.log("Font font_style_cnt = "+font_style_cnt);
        var new_font = new TesselatedFont();
        for (var i = 0; i < font_style_cnt; ++i) {
            var font_style_name = this.parseVarStr();
            //console.log("Font font_style_name = "+font_style_name);
            var new_font_style = new_font.get_font_style(font_style_name);
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
        }
        this.parseProperties(null);
        this.parseUserAttributes();
        this._pFinalizeAsset(new_font, name);
        this._blocks[blockID].data = new_font;
    };
    AWDParser.prototype.parseTextFormat = function (blockID) {
        this._blocks[blockID].name = this.parseVarStr();
    };
    AWDParser.prototype.paresTextField = function (blockID) {
        this._blocks[blockID].name = this.parseVarStr();
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
                            6: AWDParser.UINT32,
                            7: AWDParser.UINT32
                        });
                        if (valid_command) {
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
                            if (mask >= 0) {
                                commandString += "\n                Mask-up to obj-id: " + mask;
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
    // Block ID = 25
    AWDParser.prototype.parseBillBoardLibraryBlock = function (blockID) {
        var name = this.parseVarStr();
        var data_id = this._newBlockBytes.readUnsignedInt();
        var mat;
        var returnedArrayGeometry = this.getAssetByID(data_id, [AssetType.MATERIAL]);
        if (returnedArrayGeometry[0]) {
            mat = returnedArrayGeometry[1];
        }
        else {
            this._blocks[blockID].addError("Could not find a Material for this Billboard. A empty material is created!");
            mat = new BasicMaterial();
        }
        mat.bothSides = true;
        var billboard = new Billboard(mat);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXIudHMiXSwibmFtZXMiOlsiQVdEUGFyc2VyIiwiQVdEUGFyc2VyLmNvbnN0cnVjdG9yIiwiQVdEUGFyc2VyLnN1cHBvcnRzVHlwZSIsIkFXRFBhcnNlci5zdXBwb3J0c0RhdGEiLCJBV0RQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5TmFtZSIsIkFXRFBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiQVdEUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiQVdEUGFyc2VyLmRpc3Bvc2UiLCJBV0RQYXJzZXIucGFyc2VOZXh0QmxvY2siLCJBV0RQYXJzZXIucGFyc2VUZXNzZWxhdGVkRm9udCIsIkFXRFBhcnNlci5wYXJzZVRleHRGb3JtYXQiLCJBV0RQYXJzZXIucGFyZXNUZXh0RmllbGQiLCJBV0RQYXJzZXIucGFyc2VBdWRpb0Jsb2NrIiwiQVdEUGFyc2VyLnBhcnNlVGltZUxpbmUiLCJBV0RQYXJzZXIucGFyc2VUcmlhbmdsZUdlb21ldHJpZUJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlUHJpbWl0dmVzIiwiQVdEUGFyc2VyLnBhcnNlQ29udGFpbmVyIiwiQVdEUGFyc2VyLnBhcnNlQmlsbEJvYXJkTGlicmFyeUJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlTWVzaExpYnJhcnlCbG9jayIsIkFXRFBhcnNlci5wYXJzZU1lc2hJbnN0YW5jZSIsIkFXRFBhcnNlci5wYXJzZVNreWJveEluc3RhbmNlIiwiQVdEUGFyc2VyLnBhcnNlTGlnaHQiLCJBV0RQYXJzZXIucGFyc2VDYW1lcmEiLCJBV0RQYXJzZXIucGFyc2VMaWdodFBpY2tlciIsIkFXRFBhcnNlci5wYXJzZU1hdGVyaWFsIiwiQVdEUGFyc2VyLnBhcnNlTWF0ZXJpYWxfdjEiLCJBV0RQYXJzZXIucGFyc2VUZXh0dXJlIiwiQVdEUGFyc2VyLnBhcnNlQ3ViZVRleHR1cmUiLCJBV0RQYXJzZXIucGFyc2VTaGFyZWRNZXRob2RCbG9jayIsIkFXRFBhcnNlci5wYXJzZVNoYWRvd01ldGhvZEJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlQ29tbWFuZCIsIkFXRFBhcnNlci5wYXJzZU1ldGFEYXRhIiwiQVdEUGFyc2VyLnBhcnNlTmFtZVNwYWNlIiwiQVdEUGFyc2VyLnBhcnNlU2hhZG93TWV0aG9kTGlzdCIsIkFXRFBhcnNlci5wYXJzZVNrZWxldG9uIiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b25Qb3NlIiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b25BbmltYXRpb24iLCJBV0RQYXJzZXIucGFyc2VNZXNoUG9zZUFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZVZlcnRleEFuaW1hdGlvblNldCIsIkFXRFBhcnNlci5wYXJzZUFuaW1hdG9yU2V0IiwiQVdEUGFyc2VyLnBhcnNlU2hhcmVkTWV0aG9kTGlzdCIsIkFXRFBhcnNlci5wYXJzZVVzZXJBdHRyaWJ1dGVzIiwiQVdEUGFyc2VyLnBhcnNlUHJvcGVydGllcyIsIkFXRFBhcnNlci5wYXJzZUF0dHJWYWx1ZSIsIkFXRFBhcnNlci5wYXJzZUhlYWRlciIsIkFXRFBhcnNlci5nZXRVVkZvclZlcnRleEFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZVZhclN0ciIsIkFXRFBhcnNlci5nZXRBc3NldEJ5SUQiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdEFzc2V0IiwiQVdEUGFyc2VyLmdldERlZmF1bHRDdWJlVGV4dHVyZSIsIkFXRFBhcnNlci5yZWFkTnVtYmVyIiwiQVdEUGFyc2VyLnBhcnNlTWF0cml4M0QiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXgzMlJhd0RhdGEiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXg0M1Jhd0RhdGEiLCJBV0RCbG9jayIsIkFXREJsb2NrLmNvbnN0cnVjdG9yIiwiQVdEQmxvY2suZGlzcG9zZSIsIkFXREJsb2NrLmFkZEVycm9yIiwiQVdEUHJvcGVydGllcyIsIkFXRFByb3BlcnRpZXMuY29uc3RydWN0b3IiLCJBV0RQcm9wZXJ0aWVzLnNldCIsIkFXRFByb3BlcnRpZXMuZ2V0IiwiQml0RmxhZ3MiLCJCaXRGbGFncy5jb25zdHJ1Y3RvciIsIkJpdEZsYWdzLnRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLElBQU8sU0FBUyxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sY0FBYyxXQUFlLHFDQUFxQyxDQUFDLENBQUM7QUFDM0UsSUFBTyxRQUFRLFdBQWlCLCtCQUErQixDQUFDLENBQUM7QUFDakUsSUFBTyxRQUFRLFdBQWlCLCtCQUErQixDQUFDLENBQUM7QUFDakUsSUFBTyxtQkFBbUIsV0FBYyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ25GLElBQU8sVUFBVSxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ25FLElBQU8sU0FBUyxXQUFnQixtQ0FBbUMsQ0FBQyxDQUFDO0FBRXJFLElBQU8sVUFBVSxXQUFnQixvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3ZFLElBQU8sV0FBVyxXQUFnQixxQ0FBcUMsQ0FBQyxDQUFDO0FBR3pFLElBQU8scUJBQXFCLFdBQWEsbURBQW1ELENBQUMsQ0FBQztBQUM5RixJQUFPLHNCQUFzQixXQUFhLG9EQUFvRCxDQUFDLENBQUM7QUFDaEcsSUFBTywrQkFBK0IsV0FBVyw2REFBNkQsQ0FBQyxDQUFDO0FBQ2hILElBQU8saUJBQWlCLFdBQWMsNENBQTRDLENBQUMsQ0FBQztBQUdwRixJQUFPLGdCQUFnQixXQUFlLDJDQUEyQyxDQUFDLENBQUM7QUFDbkYsSUFBTyxZQUFZLFdBQWdCLHVDQUF1QyxDQUFDLENBQUM7QUFHNUUsSUFBTyxTQUFTLFdBQWdCLGlDQUFpQyxDQUFDLENBQUM7QUFFbkUsSUFBTyxzQkFBc0IsV0FBYSxzREFBc0QsQ0FBQyxDQUFDO0FBRWxHLElBQU8sUUFBUSxXQUFpQixrQ0FBa0MsQ0FBQyxDQUFDO0FBRXBFLElBQU8sbUJBQW1CLFdBQWMsNkNBQTZDLENBQUMsQ0FBQztBQUN2RixJQUFPLGdCQUFnQixXQUFlLDhDQUE4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QUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzNDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFFMUNBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLEVBQUVBLDZDQUE2Q0E7UUFDdkZBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzdCQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLElBQUlBLENBQUNBLGFBQWFBLENBQUNB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QUFFQSxFQUFFQSxDQUFDQSxDQUFDQTs0QkFDbkRBLElBQUlBLFNBQVNBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUN4Q0EsSUFBSUEsU0FBU0EsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3hDQSxJQUFJQSxLQUFLQSxHQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDcENBLElBQUlBLElBQUlBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNuQ0EsQUFJQUEsdUJBSnVCQTs0QkFFdkJBLDRDQUE0Q0E7NEJBRTVDQSxhQUFhQSxJQUFJQSxxQ0FBcUNBLEdBQUdBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBOzRCQUMxRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0NBQzNCQSxJQUFJQSxVQUFVQSxHQUFHQSxJQUFJQSxRQUFRQSxFQUFFQSxDQUFDQTtnQ0FDaENBLFVBQVVBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dDQUNsRUEsQUFDQUEscUVBRHFFQTtnQ0FDckVBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUNyQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0NB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QUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUUxUkEsSUFBSUEsY0FBY0EsR0FBaUJBLENBQUNBLHFCQUFxQkEsRUFBRUEsc0JBQXNCQSxFQUFFQSxxQkFBcUJBLEVBQUVBLHVCQUF1QkEsRUFBRUEseUJBQXlCQSxFQUFFQSxzQkFBc0JBLEVBQUVBLHlCQUF5QkEsRUFBRUEsdUJBQXVCQSxDQUFDQSxDQUFBQTtRQUV6T0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFHbEJBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxvQkFBb0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvSkEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLG1CQUFtQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9LQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEscUJBQXFCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckhBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSx1QkFBdUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLHVDQUF1Q0E7Z0JBQ25NQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDQ0EsTUFBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3JEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDQ0EsTUFBT0EsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3hEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDQ0EsTUFBT0EsQ0FBQ0EsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBRS9DQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDN0pBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxzQkFBc0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzSUEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLG9CQUFvQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZJQSxLQUFLQSxDQUFDQTtZQUVQQTtnQkFDQ0EsTUFBTUEsR0FBR0EsSUFBSUEsVUFBVUEsRUFBRUEsQ0FBQ0E7Z0JBQzFCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQ0FBZ0NBLENBQUNBLENBQUNBO2dCQUM5Q0EsS0FBS0EsQ0FBQ0E7UUFDUkEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFHM0RBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDM0JBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ25CQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNuQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFFcENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdENBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2RBLENBQUNBO1lBQ0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDZCQUE2QkEsR0FBR0EsSUFBSUEsR0FBR0EsV0FBV0EsR0FBR0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDNUZBLENBQUNBO0lBQ0ZBLENBQUNBO0lBRURqQixnQkFBZ0JBO0lBQ1JBLGtDQUFjQSxHQUF0QkEsVUFBdUJBLE9BQWNBO1FBRXBDa0IsSUFBSUEsSUFBV0EsQ0FBQ0E7UUFDaEJBLElBQUlBLE1BQWFBLENBQUNBO1FBQ2xCQSxJQUFJQSxHQUFZQSxDQUFDQTtRQUNqQkEsSUFBSUEsR0FBMEJBLENBQUNBO1FBQy9CQSxJQUFJQSxNQUE2QkEsQ0FBQ0E7UUFFbENBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO1FBQy9DQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtRQUMzQkEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFFMUJBLElBQUlBLFVBQVVBLEdBQVVBLGlCQUFpQkEsQ0FBQ0E7UUFDMUNBLEdBQUdBLEdBQUdBLElBQUlBLHNCQUFzQkEsRUFBRUEsQ0FBQ0E7UUFDbkNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1FBRTdCQSxJQUFJQSxhQUFhQSxHQUFjQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVqSEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLElBQUlBLEdBQUdBLEdBQTJDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNsRkEsVUFBVUEsR0FBNkJBLGFBQWFBLENBQUNBLENBQUNBLENBQUVBLENBQUNBLElBQUlBLENBQUNBO1FBQy9EQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBRUEsT0FBT0EsQ0FBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0Esb0RBQW9EQSxDQUFDQSxDQUFDQTtRQUN4RkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQUFDQUEsNkJBRDZCQTtZQUNIQSxJQUFJQSxDQUFDQSxTQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN6REEsQ0FBQ0E7UUFFREEsQUFDQUEsc0RBRHNEQTtRQUN0REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeERBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtZQUN0SUEsR0FBR0EsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FB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QkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3BCQSxDQUFDQTtRQUVEQSxJQUFJQSxJQUFJQSxHQUFRQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNyQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFFOUJBLElBQUlBLG1CQUFtQkEsR0FBY0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFFdEhBLEVBQUVBLENBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLElBQUlBLElBQUlBLEdBQW1EQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xGQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNwQkEsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSx1Q0FBdUNBLENBQUNBLENBQUNBO1FBQ3pFQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNQQSxBQUNBQSw2QkFENkJBO1lBQ0hBLElBQUlBLENBQUNBLFNBQVVBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzFEQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6REEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2pDQSxJQUFJQSxDQUFRQSxDQUFDQTtZQUliQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDNUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNFQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4REEsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVB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TUFBTUEsQ0FBQ0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEJBLEtBQUtBLElBQUlBO2dCQUNSQSxVQUFVQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzREEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsSUFBSUE7Z0JBQ1JBLFVBQVVBLEdBQUdBLElBQUlBLHNCQUFzQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFDUkEsVUFBVUEsR0FBR0EsSUFBSUEsK0JBQStCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdklBLEtBQUtBLENBQUNBO1lBQ1BBO2dCQUNDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFFREEsSUFBSUEsTUFBTUEsR0FBVUEsSUFBSUEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDM0NBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1FBRWhDQSxJQUFJQSxtQkFBbUJBLEdBQWNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUFBO1FBRXRIQSxFQUFFQSxDQUFDQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRTVCQSxJQUFJQSxJQUFJQSxHQUFtREEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFdEJBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBRXhCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EseUNBQXlDQSxDQUFDQSxDQUFDQTtRQUMzRUEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQUFDQUEsNkJBRDZCQTtZQUNIQSxJQUFJQSxDQUFDQSxTQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUM1REEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkJBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1FBQ3BIQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvRUEsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUUxQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFbkNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BLENBQUFBO1FBRW5DQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxHQUFHQSxJQUFJQSxHQUFHQSx1QkFBdUJBLEdBQUdBLFVBQVVBLEdBQUdBLG1CQUFtQkEsR0FBR0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDM0hBLENBQUNBO0lBRUZBLENBQUNBO0lBRUR4QixlQUFlQTtJQUNQQSxvQ0FBZ0JBLEdBQXhCQSxVQUF5QkEsT0FBY0E7UUFFdEN5QixJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUNyQ0EsSUFBSUEsU0FBU0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtRQUMvREEsSUFBSUEsV0FBV0EsR0FBb0JBLElBQUlBLEtBQUtBLEVBQWFBLENBQUNBO1FBQzFEQSxJQUFJQSxDQUFDQSxHQUFVQSxDQUFDQSxDQUFDQTtRQUNqQkEsSUFBSUEsT0FBT0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7UUFFdkJBLElBQUlBLGtCQUE2QkEsQ0FBQ0E7UUFDbENBLElBQUlBLGdCQUFnQkEsR0FBaUJBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO1FBRXpEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxTQUFTQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUNoQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7WUFDaERBLGtCQUFrQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFFbEVBLEVBQUVBLENBQUNBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFhQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwREEsZ0JBQWdCQSxDQUFDQSxJQUFJQSxDQUFlQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRWxFQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDUEEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsNEJBQTRCQSxHQUFHQSxDQUFDQSxHQUFHQSxTQUFTQSxHQUFHQSxPQUFPQSxHQUFHQSx5QkFBeUJBLENBQUNBLENBQUNBO1lBQ3BIQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsOERBQThEQSxDQUFDQSxDQUFDQTtZQUMvRkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtZQUMzQkEsTUFBTUEsRUFBRUEsZ0RBQWdEQTtRQUN6REEsQ0FBQ0EsR0FET0E7UUFHUkEsSUFBSUEsU0FBU0EsR0FBbUJBLElBQUlBLGlCQUFpQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDbkVBLFNBQVNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBRXRCQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFVQSxTQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUUvQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQUE7UUFDdENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxzQ0FBc0NBLEdBQUdBLElBQUlBLEdBQUdBLHFCQUFxQkEsR0FBR0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNsSEEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFFRHpCLGVBQWVBO0lBQ1BBLGlDQUFhQSxHQUFyQkEsVUFBc0JBLE9BQWNBO1FBRW5DMEIsQUFFQUEsaUJBRmlCQTtRQUNqQkEsNEJBQTRCQTtZQUN4QkEsSUFBV0EsQ0FBQ0E7UUFDaEJBLElBQUlBLElBQVdBLENBQUNBO1FBQ2hCQSxJQUFJQSxLQUFtQkEsQ0FBQ0E7UUFDeEJBLElBQUlBLEdBQWtCQSxDQUFDQTtRQUN2QkEsSUFBSUEsVUFBaUJBLENBQUNBO1FBQ3RCQSxJQUFJQSxRQUFnQkEsQ0FBQ0E7UUFDckJBLElBQUlBLFdBQWtCQSxDQUFDQTtRQUN2QkEsSUFBSUEsY0FBcUJBLENBQUNBO1FBQzFCQSxJQUFJQSxhQUF3QkEsQ0FBQ0E7UUFFN0JBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQzFCQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQzlDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBRXJEQSxBQUVBQSxxQ0FGcUNBO1FBQ3JDQSxzRkFBc0ZBO1FBQ3RGQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUV4SkEsY0FBY0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbkJBLE9BQU9BLGNBQWNBLEdBQUdBLFdBQVdBLEVBQUVBLENBQUNBO1lBQ3JDQSxJQUFJQSxXQUFrQkEsQ0FBQ0E7WUFFdkJBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7WUFDdERBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzNCQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1lBQzNCQSxjQUFjQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFDREEsSUFBSUEsV0FBV0EsR0FBVUEsRUFBRUEsQ0FBQ0E7UUFDNUJBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDeENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxXQUFXQSxJQUFJQSw4Q0FBOENBLEdBQUdBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBO1lBQzlFQSxJQUFJQSxLQUFZQSxDQUFDQTtZQUNqQkEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzQkEsR0FBR0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckRBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNQQSxHQUFHQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDaENBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDMUNBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxRQUFRQSxHQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUV0Q0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFakVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsMENBQTBDQSxHQUFHQSxRQUFRQSxHQUFHQSxzQkFBc0JBLENBQUNBLENBQUNBO1lBRWhIQSxHQUFHQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFpQkEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFM0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzQkEsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pDQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDL0JBLFdBQVdBLElBQUlBLCtDQUErQ0EsR0FBR0EsSUFBSUEsR0FBR0EscUJBQXFCQSxHQUFHQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUMxR0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7Z0JBQ3pDQSxXQUFXQSxJQUFJQSw4Q0FBOENBLEdBQUdBLElBQUlBLEdBQUdBLHFCQUFxQkEsR0FBR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDekdBLENBQUNBO1FBQ0ZBLENBQUNBO1FBRURBLEdBQUdBLENBQUNBLEtBQUtBLEdBQUdBLFVBQVVBLENBQUNBO1FBQ3ZCQSxHQUFHQSxDQUFDQSxjQUFjQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN4Q0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLElBQUlBLENBQUNBLGVBQWVBLENBQVVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUVqQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBRTFCQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVEMUIsdUJBQXVCQTtJQUNmQSxvQ0FBZ0JBLEdBQXhCQSxVQUF5QkEsT0FBY0E7UUFFdEMyQixJQUFJQSxHQUFrQkEsQ0FBQ0E7UUFDdkJBLElBQUlBLGFBQTJCQSxDQUFDQTtRQUNoQ0EsSUFBSUEsV0FBeUJBLENBQUNBO1FBQzlCQSxJQUFJQSxhQUF3QkEsQ0FBQ0E7UUFFN0JBLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3pEQSxJQUFJQSxXQUFXQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ2hFQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbmRBLElBQUlBLFdBQVdBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxXQUFXQSxHQUFVQSxrQkFBa0JBLENBQUNBO1FBRTVDQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0Esd0JBQXdCQSxHQUFHQSxXQUFXQSxHQUFHQSw2REFBNkRBLENBQUNBLENBQUNBO1lBQ3ZJQSxNQUFNQSxDQUFDQTtRQUNSQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNmQSxFQUFFQSxDQUFDQSxDQUFDQSxJ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QkFFREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDaENBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNwQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDN0NBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNuREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBRWxDQSxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQTtvQkFDakJBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLGFBQWFBLENBQUNBO2dCQUUvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0E7b0JBQ2ZBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLFdBQVdBLENBQUNBO2dCQUUvQkEsR0FBR0EsQ0FBQ0EsY0FBY0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxHQUFHQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDakNBLEdBQUdBLENBQUNB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LENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQ3hCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUN4REEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFOUJBLEFBQ0FBLFdBRFdBO1lBQ1hBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNmQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtnQkFDakRBLElBQUlBLEdBQVVBLENBQUNBO2dCQUNmQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFFakRBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLEVBQUVBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3ZHQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFFUEEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxJQUFJQSxJQUFjQSxDQUFDQTtnQkFDbkJBLElBQUlBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO2dCQUV2QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBRWpEQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFD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QkFBb0JBLENBQW9CQSxLQUFLQSxFQUFXQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEVBLFlBQWFBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4Q0EsWUFBYUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFaEVBLEtBQUtBLENBQUNBO1lBQ1BBLEtBQUtBLElBQUlBO2dCQUVSQSxZQUFZQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLENBQW9CQSxLQUFLQSxFQUFXQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEVBLFlBQWFBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4Q0EsWUFBYUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFNURBLEtBQUtBLENBQUNBO1lBQ1BBLEtBQUtBLElBQUlBO2dCQUNSQSxZQUFZQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUN2QkEsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FB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Q0FBQ0E7UUFDaEVBLElBQUlBLGtCQUFtQ0EsQ0FBQ0E7UUFFeENBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUMvZEEsSUFBSUEsUUFBZUEsQ0FBQ0E7UUFDcEJBLElBQUlBLGFBQXdCQSxDQUFDQTtRQUU3QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFcEJBLEtBQUtBLEdBQUdBO2dCQUNQQSxrQkFBa0JBLEdBQUdBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hJQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxHQUFHQTtnQkFDUEEsa0JBQWtCQSxHQUFHQSxJQUFJQSwwQkFBMEJBLEVBQUVBLENBQUNBO2dCQUN0REEsSUFBSUEsTUFBTUEsR0FBbUJBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO2dCQUMxQkEsa0JBQW1CQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxN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QTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNqQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDbEJBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3BEQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBRWxCQSxBQUVBQSwwRUFGMEVBO1FB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QSxRQUFRQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFwQmFGLGNBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxjQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsY0FBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDakJBLGNBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxjQUFLQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNsQkEsY0FBS0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDbEJBLGNBQUtBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ2xCQSxjQUFLQSxHQUFVQSxHQUFHQSxDQUFDQTtJQUNuQkEsY0FBS0EsR0FBVUEsR0FBR0EsQ0FBQ0E7SUFDbkJBLGVBQU1BLEdBQVVBLEdBQUdBLENBQUNBO0lBQ3BCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLElBQUlBLENBQUNBO0lBQ3JCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsS0FBS0EsQ0FBQ0E7SUFDdEJBLGVBQU1BLEdBQVVBLEtBQUtBLENBQUNBO0lBTXJDQSxlQUFDQTtBQUFEQSxDQXZCQSxBQXVCQ0EsSUFBQTtBQWhGRCxpQkFBUyxTQUFTLENBQUMiLCJmaWxlIjoiQVdEUGFyc2VyLmpzIiwic291cmNlUm9vdCI6Ii4uLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaXRtYXBEYXRhXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2Jhc2UvQml0bWFwRGF0YVwiKTtcclxuaW1wb3J0IEJsZW5kTW9kZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9iYXNlL0JsZW5kTW9kZVwiKTtcclxuaW1wb3J0IENvbG9yVHJhbnNmb3JtXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL0NvbG9yVHJhbnNmb3JtXCIpO1xyXG5pbXBvcnQgTWF0cml4M0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL01hdHJpeDNEXCIpO1xyXG5pbXBvcnQgVmVjdG9yM0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1ZlY3RvcjNEXCIpO1xyXG5pbXBvcnQgVVJMTG9hZGVyRGF0YUZvcm1hdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxMb2FkZXJEYXRhRm9ybWF0XCIpO1xyXG5pbXBvcnQgVVJMUmVxdWVzdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMUmVxdWVzdFwiKTtcclxuaW1wb3J0IEFzc2V0VHlwZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0Fzc2V0VHlwZVwiKTtcclxuaW1wb3J0IElBc3NldFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2xpYnJhcnkvSUFzc2V0XCIpO1xyXG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XHJcbmltcG9ydCBQYXJzZXJVdGlsc1x0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlclV0aWxzXCIpO1xyXG5pbXBvcnQgUmVzb3VyY2VEZXBlbmRlbmN5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9SZXNvdXJjZURlcGVuZGVuY3lcIik7XHJcbmltcG9ydCBQcm9qZWN0aW9uQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvUHJvamVjdGlvbkJhc2VcIik7XHJcbmltcG9ydCBQZXJzcGVjdGl2ZVByb2plY3Rpb25cdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvUGVyc3BlY3RpdmVQcm9qZWN0aW9uXCIpO1xyXG5pbXBvcnQgT3J0aG9ncmFwaGljUHJvamVjdGlvblx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wcm9qZWN0aW9ucy9PcnRob2dyYXBoaWNQcm9qZWN0aW9uXCIpO1xyXG5pbXBvcnQgT3J0aG9ncmFwaGljT2ZmQ2VudGVyUHJvamVjdGlvblx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL09ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb25cIik7XHJcbmltcG9ydCBCaXRtYXBDdWJlVGV4dHVyZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0JpdG1hcEN1YmVUZXh0dXJlXCIpO1xyXG5pbXBvcnQgQml0bWFwVGV4dHVyZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvQml0bWFwVGV4dHVyZVwiKTtcclxuaW1wb3J0IEN1YmVUZXh0dXJlQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvQ3ViZVRleHR1cmVCYXNlXCIpO1xyXG5pbXBvcnQgSW1hZ2VDdWJlVGV4dHVyZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvSW1hZ2VDdWJlVGV4dHVyZVwiKTtcclxuaW1wb3J0IEltYWdlVGV4dHVyZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9JbWFnZVRleHR1cmVcIik7XHJcbmltcG9ydCBUZXh0dXJlMkRCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlMkRCYXNlXCIpO1xyXG5pbXBvcnQgVGV4dHVyZVByb3h5QmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZVByb3h5QmFzZVwiKTtcclxuaW1wb3J0IEJ5dGVBcnJheVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi91dGlscy9CeXRlQXJyYXlcIik7XHJcblxyXG5pbXBvcnQgRGlzcGxheU9iamVjdENvbnRhaW5lclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9jb250YWluZXJzL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XHJcbmltcG9ydCBEaXNwbGF5T2JqZWN0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0Rpc3BsYXlPYmplY3RcIik7XHJcbmltcG9ydCBHZW9tZXRyeVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvR2VvbWV0cnlcIik7XHJcbmltcG9ydCBMaWdodEJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9MaWdodEJhc2VcIik7XHJcbmltcG9ydCBUcmlhbmdsZVN1Ykdlb21ldHJ5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9UcmlhbmdsZVN1Ykdlb21ldHJ5XCIpO1xyXG5pbXBvcnQgRGlyZWN0aW9uYWxMaWdodFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvRGlyZWN0aW9uYWxMaWdodFwiKTtcclxuaW1wb3J0IFBvaW50TGlnaHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvUG9pbnRMaWdodFwiKTtcclxuaW1wb3J0IENhbWVyYVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0NhbWVyYVwiKTtcclxuaW1wb3J0IE1lc2hcdFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL01lc2hcIik7XHJcbmltcG9ydCBTa3lib3hcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9Ta3lib3hcIik7XHJcbmltcG9ydCBCaWxsYm9hcmRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvQmlsbGJvYXJkXCIpO1xyXG5pbXBvcnQgTWF0ZXJpYWxCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9NYXRlcmlhbEJhc2VcIik7XHJcbmltcG9ydCBMaWdodFBpY2tlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9saWdodHBpY2tlcnMvTGlnaHRQaWNrZXJCYXNlXCIpO1xyXG5pbXBvcnQgU3RhdGljTGlnaHRQaWNrZXJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvbGlnaHRwaWNrZXJzL1N0YXRpY0xpZ2h0UGlja2VyXCIpO1xyXG5pbXBvcnQgQ3ViZU1hcFNoYWRvd01hcHBlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL0N1YmVNYXBTaGFkb3dNYXBwZXJcIik7XHJcbmltcG9ydCBEaXJlY3Rpb25hbFNoYWRvd01hcHBlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvc2hhZG93bWFwcGVycy9EaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiKTtcclxuaW1wb3J0IFNoYWRvd01hcHBlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL1NoYWRvd01hcHBlckJhc2VcIik7XHJcbmltcG9ydCBQcmVmYWJCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJlZmFiQmFzZVwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDYXBzdWxlUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlQ29uZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ29uZVByZWZhYlwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUN1YmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN1YmVQcmVmYWJcIik7XHJcbmltcG9ydCBQcmltaXRpdmVDeWxpbmRlclByZWZhYlx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlUGxhbmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVBsYW5lUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlU3BoZXJlUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlU3BoZXJlUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlVG9ydXNQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVRvcnVzUHJlZmFiXCIpO1xyXG5cclxuaW1wb3J0IEFuaW1hdGlvblNldEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRpb25TZXRCYXNlXCIpO1xyXG5pbXBvcnQgQW5pbWF0b3JCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRvckJhc2VcIik7XHJcbmltcG9ydCBWZXJ0ZXhBbmltYXRpb25TZXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvVmVydGV4QW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgVmVydGV4QW5pbWF0b3JcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9WZXJ0ZXhBbmltYXRvclwiKTtcclxuaW1wb3J0IFNrZWxldG9uQW5pbWF0aW9uU2V0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25BbmltYXRvclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0b3JcIik7XHJcbmltcG9ydCBKb2ludFBvc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvSm9pbnRQb3NlXCIpO1xyXG5pbXBvcnQgU2tlbGV0b25cdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblwiKTtcclxuaW1wb3J0IFNrZWxldG9uUG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblBvc2VcIik7XHJcbmltcG9ydCBTa2VsZXRvbkpvaW50XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvbkpvaW50XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25DbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1NrZWxldG9uQ2xpcE5vZGVcIik7XHJcbmltcG9ydCBWZXJ0ZXhDbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1ZlcnRleENsaXBOb2RlXCIpO1xyXG5pbXBvcnQgRGVmYXVsdE1hdGVyaWFsTWFuYWdlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9tYW5hZ2Vycy9EZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXCIpO1xyXG5cclxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsTW9kZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxNb2RlXCIpO1xyXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxcIik7XHJcbmltcG9ydCBBbWJpZW50RW52TWFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0FtYmllbnRFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlRGVwdGhNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZURlcHRoTWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZUNlbE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VDZWxNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlR3JhZGllbnRNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VHcmFkaWVudE1ldGhvZFwiKTtcclxuaW1wb3J0IERpZmZ1c2VMaWdodE1hcE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUxpZ2h0TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZVdyYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZVdyYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RBbHBoYU1hc2tNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEFscGhhTWFza01ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdENvbG9yTWF0cml4TWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RDb2xvck1hdHJpeE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdENvbG9yVHJhbnNmb3JtTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RFbnZNYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0RW52TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0Rm9nTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Rm9nTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEZyZXNuZWxFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RMaWdodE1hcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RMaWdodE1hcE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdE1ldGhvZEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RNZXRob2RCYXNlXCIpO1xyXG5pbXBvcnQgRWZmZWN0UmltTGlnaHRNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0UmltTGlnaHRNZXRob2RcIik7XHJcbmltcG9ydCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2RcIik7XHJcbmltcG9ydCBTaGFkb3dEaXRoZXJlZE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dEaXRoZXJlZE1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0ZpbHRlcmVkTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0ZpbHRlcmVkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93TWV0aG9kQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd01ldGhvZEJhc2VcIik7XHJcbmltcG9ydCBTcGVjdWxhckZyZXNuZWxNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyRnJlc25lbE1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0hhcmRNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dIYXJkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyQW5pc290cm9waWNNZXRob2RcIik7XHJcbmltcG9ydCBTcGVjdWxhckNlbE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhckNlbE1ldGhvZFwiKTtcclxuaW1wb3J0IFNwZWN1bGFyUGhvbmdNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJQaG9uZ01ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd05lYXJNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dOZWFyTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93U29mdE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd1NvZnRNZXRob2RcIik7XHJcblxyXG5pbXBvcnQgU3ViR2VvbWV0cnlCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL1N1Ykdlb21ldHJ5QmFzZVwiKTtcclxuaW1wb3J0IEN1cnZlU3ViR2VvbWV0cnlcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvQ3VydmVTdWJHZW9tZXRyeVwiKTtcclxuaW1wb3J0IEN1cnZlTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9DdXJ2ZU1hdGVyaWFsXCIpXHJcbmltcG9ydCBCYXNpY01hdGVyaWFsXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvQmFzaWNNYXRlcmlhbFwiKTtcclxuXHJcbmltcG9ydCBUZXNzZWxhdGVkRm9udFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvdGV4dC9UZXNzZWxhdGVkRm9udFwiKTtcclxuaW1wb3J0IFRlc3NlbGF0ZWRGb250U3R5bGVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3RleHQvVGVzc2VsYXRlZEZvbnRTdHlsZVwiKTtcclxuXHJcblxyXG5pbXBvcnQgVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9mYWN0b3JpZXMvVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IEFTMlNjZW5lR3JhcGhGYWN0b3J5ID0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL2ZhY3Rvcmllcy9BUzJTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IE1vdmllQ2xpcCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9kaXNwbGF5L01vdmllQ2xpcFwiKTtcclxuaW1wb3J0IFRpbWVsaW5lS2V5RnJhbWUgPSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvVGltZWxpbmVLZXlGcmFtZVwiKTtcclxuaW1wb3J0IEFkZENoaWxkQ29tbWFuZCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC90aW1lbGluZS9jb21tYW5kcy9BZGRDaGlsZENvbW1hbmRcIik7XHJcbmltcG9ydCBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQgPSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvY29tbWFuZHMvVXBkYXRlUHJvcGVydHlDb21tYW5kXCIpO1xyXG5pbXBvcnQgUmVtb3ZlQ2hpbGRDb21tYW5kID0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL3RpbWVsaW5lL2NvbW1hbmRzL1JlbW92ZUNoaWxkQ29tbWFuZFwiKTtcclxuaW1wb3J0IEFwcGx5QVMyRGVwdGhzQ29tbWFuZCA9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC90aW1lbGluZS9jb21tYW5kcy9BcHBseUFTMkRlcHRoc0NvbW1hbmRcIik7XHJcblxyXG4vKipcclxuICogQVdEUGFyc2VyIHByb3ZpZGVzIGEgcGFyc2VyIGZvciB0aGUgQVdEIGRhdGEgdHlwZS5cclxuICovXHJcbmNsYXNzIEFXRFBhcnNlciBleHRlbmRzIFBhcnNlckJhc2Vcclxue1xyXG5cdC8vc2V0IHRvIFwidHJ1ZVwiIHRvIGhhdmUgc29tZSBjb25zb2xlLmxvZ3MgaW4gdGhlIENvbnNvbGVcclxuXHRwcml2YXRlIF9kZWJ1Zzpib29sZWFuID0gdHJ1ZTtcclxuXHRwcml2YXRlIF9ieXRlRGF0YTpCeXRlQXJyYXk7XHJcblx0cHJpdmF0ZSBfc3RhcnRlZFBhcnNpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2N1cl9ibG9ja19pZDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfYmxvY2tzOkFycmF5PEFXREJsb2NrPjtcclxuXHRwcml2YXRlIF9uZXdCbG9ja0J5dGVzOkJ5dGVBcnJheTtcclxuXHRwcml2YXRlIF92ZXJzaW9uOkFycmF5PG51bWJlcj47XHJcblx0cHJpdmF0ZSBfY29tcHJlc3Npb246bnVtYmVyO1xyXG5cdHByaXZhdGUgX2FjY3VyYWN5T25CbG9ja3M6Ym9vbGVhbjtcclxuXHRwcml2YXRlIF9hY2N1cmFjeU1hdHJpeDpib29sZWFuO1xyXG5cdHByaXZhdGUgX2FjY3VyYWN5R2VvOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfYWNjdXJhY3lQcm9wczpib29sZWFuO1xyXG5cdHByaXZhdGUgX21hdHJpeE5yVHlwZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfZ2VvTnJUeXBlOm51bWJlcjtcclxuXHRwcml2YXRlIF9wcm9wc05yVHlwZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfc3RyZWFtaW5nOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfdGV4dHVyZV91c2VyczpPYmplY3QgPSB7fTtcclxuXHRwcml2YXRlIF9wYXJzZWRfaGVhZGVyOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9ib2R5OkJ5dGVBcnJheTtcclxuXHRwcml2YXRlIF9kZWZhdWx0VGV4dHVyZTpCaXRtYXBUZXh0dXJlOyAgICAgLy8gSFRNTCBJTUFHRSBURVhUVVJFID4/ICFcclxuXHRwcml2YXRlIF9jdWJlVGV4dHVyZXM6QXJyYXk8YW55PjtcclxuXHRwcml2YXRlIF9kZWZhdWx0Qml0bWFwTWF0ZXJpYWw6TWV0aG9kTWF0ZXJpYWw7XHJcblx0cHJpdmF0ZSBfZGVmYXVsdEN1YmVUZXh0dXJlOkJpdG1hcEN1YmVUZXh0dXJlO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIENPTVBSRVNTSU9OTU9ERV9MWk1BOnN0cmluZyA9IFwibHptYVwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgVU5DT01QUkVTU0VEOm51bWJlciA9IDA7XHJcblx0cHVibGljIHN0YXRpYyBERUZMQVRFOm51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBMWk1BOm51bWJlciA9IDI7XHJcblx0cHVibGljIHN0YXRpYyBJTlQ4Om51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBJTlQxNjpudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBzdGF0aWMgSU5UMzI6bnVtYmVyID0gMztcclxuXHRwdWJsaWMgc3RhdGljIFVJTlQ4Om51bWJlciA9IDQ7XHJcblx0cHVibGljIHN0YXRpYyBVSU5UMTY6bnVtYmVyID0gNTtcclxuXHRwdWJsaWMgc3RhdGljIFVJTlQzMjpudW1iZXIgPSA2O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQzMjpudW1iZXIgPSA3O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQ2NDpudW1iZXIgPSA4O1xyXG5cdHB1YmxpYyBzdGF0aWMgQk9PTDpudW1iZXIgPSAyMTtcclxuXHRwdWJsaWMgc3RhdGljIENPTE9SOm51bWJlciA9IDIyO1xyXG5cdHB1YmxpYyBzdGF0aWMgQkFERFI6bnVtYmVyID0gMjM7XHJcblx0cHVibGljIHN0YXRpYyBBV0RTVFJJTkc6bnVtYmVyID0gMzE7XHJcblx0cHVibGljIHN0YXRpYyBBV0RCWVRFQVJSQVk6bnVtYmVyID0gMzI7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1IyeDE6bnVtYmVyID0gNDE7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1IzeDE6bnVtYmVyID0gNDI7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1I0eDE6bnVtYmVyID0gNDM7XHJcblx0cHVibGljIHN0YXRpYyBNVFgzeDI6bnVtYmVyID0gNDQ7XHJcblx0cHVibGljIHN0YXRpYyBNVFgzeDM6bnVtYmVyID0gNDU7XHJcblx0cHVibGljIHN0YXRpYyBNVFg0eDM6bnVtYmVyID0gNDY7XHJcblx0cHVibGljIHN0YXRpYyBNVFg0eDQ6bnVtYmVyID0gNDc7XHJcblxyXG5cdHByaXZhdGUgYmxlbmRNb2RlRGljOkFycmF5PHN0cmluZz47XHJcblx0cHJpdmF0ZSBfZGVwdGhTaXplRGljOkFycmF5PG51bWJlcj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSBuZXcgQVdEUGFyc2VyIG9iamVjdC5cclxuXHQgKiBAcGFyYW0gdXJpIFRoZSB1cmwgb3IgaWQgb2YgdGhlIGRhdGEgb3IgZmlsZSB0byBiZSBwYXJzZWQuXHJcblx0ICogQHBhcmFtIGV4dHJhIFRoZSBob2xkZXIgZm9yIGV4dHJhIGNvbnRleHR1YWwgZGF0YSB0aGF0IHRoZSBwYXJzZXIgbWlnaHQgbmVlZC5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5BUlJBWV9CVUZGRVIpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2NrcyA9IG5ldyBBcnJheTxBV0RCbG9jaz4oKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1swXSA9IG5ldyBBV0RCbG9jaygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzWzBdLmRhdGEgPSBudWxsOyAvLyBaZXJvIGFkZHJlc3MgbWVhbnMgbnVsbCBpbiBBV0RcclxuXHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7IC8vIHVzZWQgdG8gdHJhbnNsYXRlIGludHMgdG8gYmxlbmRNb2RlLXN0cmluZ3NcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk5PUk1BTCk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5BREQpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuQUxQSEEpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuREFSS0VOKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkRJRkZFUkVOQ0UpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuRVJBU0UpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuSEFSRExJR0hUKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLklOVkVSVCk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5MQVlFUik7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5MSUdIVEVOKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk1VTFRJUExZKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk5PUk1BTCk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5PVkVSTEFZKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLlNDUkVFTik7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5TSEFERVIpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuT1ZFUkxBWSk7XHJcblxyXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljID0gbmV3IEFycmF5PG51bWJlcj4oKTsgLy8gdXNlZCB0byB0cmFuc2xhdGUgaW50cyB0byBkZXB0aFNpemUtdmFsdWVzXHJcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMucHVzaCgyNTYpO1xyXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goNTEyKTtcclxuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDIwNDgpO1xyXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMTAyNCk7XHJcblx0XHR0aGlzLl92ZXJzaW9uID0gQXJyYXk8bnVtYmVyPigpOyAvLyB3aWxsIGNvbnRhaW4gMiBpbnQgKG1ham9yLXZlcnNpb24sIG1pbm9yLXZlcnNpb24pIGZvciBhd2QtdmVyc2lvbi1jaGVja1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gZmlsZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGJ5IHRoZSBwYXJzZXIuXHJcblx0ICogQHBhcmFtIGV4dGVuc2lvbiBUaGUgZmlsZSBleHRlbnNpb24gb2YgYSBwb3RlbnRpYWwgZmlsZSB0byBiZSBwYXJzZWQuXHJcblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZmlsZSB0eXBlIGlzIHN1cHBvcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzVHlwZShleHRlbnNpb246c3RyaW5nKTpib29sZWFuXHJcblx0e1xyXG5cdFx0ZXh0ZW5zaW9uID0gZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRyZXR1cm4gZXh0ZW5zaW9uID09IFwiYXdkXCI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIGEgZGF0YSBibG9jayBjYW4gYmUgcGFyc2VkIGJ5IHRoZSBwYXJzZXIuXHJcblx0ICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgYmxvY2sgdG8gcG90ZW50aWFsbHkgYmUgcGFyc2VkLlxyXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGRhdGEgaXMgc3VwcG9ydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNEYXRhKGRhdGE6YW55KTpib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIChQYXJzZXJVdGlscy50b1N0cmluZyhkYXRhLCAzKSA9PSAnQVdEJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAaW5oZXJpdERvY1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5KHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIERlcGVuZGVuY3kgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXHJcblx0XHQvLyB0aGUgQXNzZXRzIHdhaXRpbmcgZm9yIHRoaXMgQml0bWFwLCBjYW4gYmUgVGV4dHVyZSBvciBDdWJlVGV4dHVyZS5cclxuXHRcdC8vIGlmIHRoZSBCaXRtYXAgaXMgYXdhaXRlZCBieSBhIEN1YmVUZXh0dXJlLCB3ZSBuZWVkIHRvIGNoZWNrIGlmIGl0cyB0aGUgbGFzdCBCaXRtYXAgb2YgdGhlIEN1YmVUZXh0dXJlLFxyXG5cdFx0Ly8gc28gd2Uga25vdyBpZiB3ZSBoYXZlIHRvIGZpbmFsaXplIHRoZSBBc3NldCAoQ3ViZVRleHR1cmUpIG9yIG5vdC5cclxuXHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdHZhciBpc0N1YmVUZXh0dXJlQXJyYXk6QXJyYXk8c3RyaW5nPiA9IHJlc291cmNlRGVwZW5kZW5jeS5pZC5zcGxpdChcIiNcIik7XHJcblx0XHRcdHZhciByZXNzb3VyY2VJRDpzdHJpbmcgPSBpc0N1YmVUZXh0dXJlQXJyYXlbMF07XHJcblx0XHRcdHZhciBhc3NldDpUZXh0dXJlUHJveHlCYXNlO1xyXG5cdFx0XHR2YXIgdGhpc0JpdG1hcFRleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRcdFx0dmFyIGJsb2NrOkFXREJsb2NrO1xyXG5cclxuXHRcdFx0aWYgKGlzQ3ViZVRleHR1cmVBcnJheS5sZW5ndGggPT0gMSkgLy8gTm90IGEgY3ViZSB0ZXh0dXJlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhc3NldCA9IDxUZXh0dXJlMkRCYXNlPiByZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzWzBdO1xyXG5cdFx0XHRcdGlmIChhc3NldCkge1xyXG5cdFx0XHRcdFx0dmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcclxuXHRcdFx0XHRcdHZhciB1c2VyczpBcnJheTxzdHJpbmc+O1xyXG5cclxuXHRcdFx0XHRcdGJsb2NrID0gdGhpcy5fYmxvY2tzWyByZXNvdXJjZURlcGVuZGVuY3kuaWQgXTtcclxuXHRcdFx0XHRcdGJsb2NrLmRhdGEgPSBhc3NldDsgLy8gU3RvcmUgZmluaXNoZWQgYXNzZXRcclxuXHJcblx0XHRcdFx0XHQvLyBSZXNldCBuYW1lIG9mIHRleHR1cmUgdG8gdGhlIG9uZSBkZWZpbmVkIGluIHRoZSBBV0QgZmlsZSxcclxuXHRcdFx0XHRcdC8vIGFzIG9wcG9zZWQgdG8gd2hhdGV2ZXIgdGhlIGltYWdlIHBhcnNlciBjYW1lIHVwIHdpdGguXHJcblx0XHRcdFx0XHRhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcclxuXHRcdFx0XHRcdGJsb2NrLm5hbWUgPSBhc3NldC5uYW1lO1xyXG5cdFx0XHRcdFx0Ly8gRmluYWxpemUgdGV4dHVyZSBhc3NldCB0byBkaXNwYXRjaCB0ZXh0dXJlIGV2ZW50LCB3aGljaCB3YXNcclxuXHRcdFx0XHRcdC8vIHByZXZpb3VzbHkgc3VwcHJlc3NlZCB3aGlsZSB0aGUgZGVwZW5kZW5jeSB3YXMgbG9hZGVkLlxyXG5cdFx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBsb2FkZWQgQml0bWFwIGZvciB0ZXh0dXJlXCIpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCB0ZXh0dXJlOiBOYW1lID0gXCIgKyBibG9jay5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpc0N1YmVUZXh0dXJlQXJyYXkubGVuZ3RoID4gMSkgLy8gQ3ViZSBUZXh0dXJlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzQml0bWFwVGV4dHVyZSA9IDxCaXRtYXBUZXh0dXJlPiByZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzWzBdO1xyXG5cclxuXHRcdFx0XHR2YXIgdHg6SW1hZ2VUZXh0dXJlID0gPEltYWdlVGV4dHVyZT4gdGhpc0JpdG1hcFRleHR1cmU7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2N1YmVUZXh0dXJlc1sgaXNDdWJlVGV4dHVyZUFycmF5WzFdIF0gPSB0eC5odG1sSW1hZ2VFbGVtZW50OyAvLyA/XHJcblx0XHRcdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ucHVzaCgxKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBsb2FkZWQgQml0bWFwIFwiICsgdGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ubGVuZ3RoICsgXCIgLyA2IGZvciBDdWJldGV4dHVyZVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLmxlbmd0aCA9PSB0aGlzLl9jdWJlVGV4dHVyZXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHBvc1g6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzBdO1xyXG5cdFx0XHRcdFx0dmFyIG5lZ1g6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzFdO1xyXG5cdFx0XHRcdFx0dmFyIHBvc1k6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzJdO1xyXG5cdFx0XHRcdFx0dmFyIG5lZ1k6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzNdO1xyXG5cdFx0XHRcdFx0dmFyIHBvc1o6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzRdO1xyXG5cdFx0XHRcdFx0dmFyIG5lZ1o6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzVdO1xyXG5cclxuXHRcdFx0XHRcdGFzc2V0ID0gPFRleHR1cmVQcm94eUJhc2U+IG5ldyBJbWFnZUN1YmVUZXh0dXJlKHBvc1gsIG5lZ1gsIHBvc1ksIG5lZ1ksIHBvc1osIG5lZ1opO1xyXG5cdFx0XHRcdFx0YmxvY2sgPSB0aGlzLl9ibG9ja3NbcmVzc291cmNlSURdO1xyXG5cdFx0XHRcdFx0YmxvY2suZGF0YSA9IGFzc2V0OyAvLyBTdG9yZSBmaW5pc2hlZCBhc3NldFxyXG5cclxuXHRcdFx0XHRcdC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxyXG5cdFx0XHRcdFx0Ly8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cclxuXHRcdFx0XHRcdGFzc2V0LnJlc2V0QXNzZXRQYXRoKGJsb2NrLm5hbWUsIG51bGwsIHRydWUpO1xyXG5cdFx0XHRcdFx0YmxvY2submFtZSA9IGFzc2V0Lm5hbWU7XHJcblx0XHRcdFx0XHQvLyBGaW5hbGl6ZSB0ZXh0dXJlIGFzc2V0IHRvIGRpc3BhdGNoIHRleHR1cmUgZXZlbnQsIHdoaWNoIHdhc1xyXG5cdFx0XHRcdFx0Ly8gcHJldmlvdXNseSBzdXBwcmVzc2VkIHdoaWxlIHRoZSBkZXBlbmRlbmN5IHdhcyBsb2FkZWQuXHJcblx0XHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgQ3ViZVRleHR1cmU6IE5hbWUgPSBcIiArIGJsb2NrLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBpbmhlcml0RG9jXHJcblx0ICovXHJcblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3lGYWlsdXJlKHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpXHJcblx0e1xyXG5cdFx0Ly9ub3QgdXNlZCAtIGlmIGEgZGVwZW5kY3kgZmFpbHMsIHRoZSBhd2FpdGluZyBUZXh0dXJlIG9yIEN1YmVUZXh0dXJlIHdpbGwgbmV2ZXIgYmUgZmluYWxpemVkLCBhbmQgdGhlIGRlZmF1bHQtYml0bWFwcyB3aWxsIGJlIHVzZWQuXHJcblx0XHQvLyB0aGlzIG1lYW5zLCB0aGF0IGlmIG9uZSBCaXRtYXAgb2YgYSBDdWJlVGV4dHVyZSBmYWlscywgdGhlIEN1YmVUZXh0dXJlIHdpbGwgaGF2ZSB0aGUgRGVmYXVsdFRleHR1cmUgYXBwbGllZCBmb3IgYWxsIHNpeCBCaXRtYXBzLlxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzb2x2ZSBhIGRlcGVuZGVuY3kgbmFtZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlRGVwZW5kZW5jeSBUaGUgZGVwZW5kZW5jeSB0byBiZSByZXNvbHZlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeU5hbWUocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSwgYXNzZXQ6SUFzc2V0KTpzdHJpbmdcclxuXHR7XHJcblx0XHR2YXIgb2xkTmFtZTpzdHJpbmcgPSBhc3NldC5uYW1lO1xyXG5cclxuXHRcdGlmIChhc3NldCkge1xyXG5cdFx0XHR2YXIgYmxvY2s6QVdEQmxvY2sgPSB0aGlzLl9ibG9ja3NbcGFyc2VJbnQocmVzb3VyY2VEZXBlbmRlbmN5LmlkKV07XHJcblx0XHRcdC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxyXG5cdFx0XHQvLyBhcyBvcHBvc2VkIHRvIHdoYXRldmVyIHRoZSBpbWFnZSBwYXJzZXIgY2FtZSB1cCB3aXRoLlxyXG5cdFx0XHRhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbmV3TmFtZTpzdHJpbmcgPSBhc3NldC5uYW1lO1xyXG5cclxuXHRcdGFzc2V0Lm5hbWUgPSBvbGROYW1lO1xyXG5cclxuXHRcdHJldHVybiBuZXdOYW1lO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBpbmhlcml0RG9jXHJcblx0ICovXHJcblx0cHVibGljIF9wUHJvY2VlZFBhcnNpbmcoKTpib29sZWFuXHJcblx0e1xyXG5cclxuXHRcdGlmICghdGhpcy5fc3RhcnRlZFBhcnNpbmcpIHtcclxuXHRcdFx0dGhpcy5fYnl0ZURhdGEgPSB0aGlzLl9wR2V0Qnl0ZURhdGEoKTsvL2dldEJ5dGVEYXRhKCk7XHJcblx0XHRcdHRoaXMuX3N0YXJ0ZWRQYXJzaW5nID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuX3BhcnNlZF9oZWFkZXIpIHtcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvL3RoaXMuX2J5dGVEYXRhLmVuZGlhbiA9IEVuZGlhbi5MSVRUTEVfRU5ESUFOO1xyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBQYXJzZSBoZWFkZXIgYW5kIGRlY29tcHJlc3MgYm9keSBpZiBuZWVkZWRcclxuXHRcdFx0dGhpcy5wYXJzZUhlYWRlcigpO1xyXG5cclxuXHRcdFx0c3dpdGNoICh0aGlzLl9jb21wcmVzc2lvbikge1xyXG5cclxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5ERUZMQVRFOlxyXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkxaTUE6XHJcblx0XHRcdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuVU5DT01QUkVTU0VEOlxyXG5cdFx0XHRcdFx0dGhpcy5fYm9keSA9IHRoaXMuX2J5dGVEYXRhO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHRcdC8vIENvbXByZXNzZWQgQVdEIEZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWRcclxuXHRcdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdFx0LypcclxuXHRcdFx0XHQgY2FzZSBBV0RQYXJzZXIuREVGTEFURTpcclxuXHJcblx0XHRcdFx0IHRoaXMuX2JvZHkgPSBuZXcgQnl0ZUFycmF5KCk7XHJcblx0XHRcdFx0IHRoaXMuX2J5dGVEYXRhLnJlYWRCeXRlcyh0aGlzLl9ib2R5LCAwLCB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKTtcclxuXHRcdFx0XHQgdGhpcy5fYm9keS51bmNvbXByZXNzKCk7XHJcblxyXG5cdFx0XHRcdCBicmVhaztcclxuXHRcdFx0XHQgY2FzZSBBV0RQYXJzZXIuTFpNQTpcclxuXHJcblx0XHRcdFx0IHRoaXMuX2JvZHkgPSBuZXcgQnl0ZUFycmF5KCk7XHJcblx0XHRcdFx0IHRoaXMuX2J5dGVEYXRhLnJlYWRCeXRlcyh0aGlzLl9ib2R5LCAwLCB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKTtcclxuXHRcdFx0XHQgdGhpcy5fYm9keS51bmNvbXByZXNzKENPTVBSRVNTSU9OTU9ERV9MWk1BKTtcclxuXHJcblx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHRcdCAvLyovXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9wYXJzZWRfaGVhZGVyID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvL3RoaXMuX2JvZHkuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47Ly8gU2hvdWxkIGJlIGRlZmF1bHRcclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9ib2R5KSB7XHJcblxyXG5cdFx0XHR3aGlsZSAodGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpID4gMCAmJiAhdGhpcy5wYXJzaW5nUGF1c2VkKSAvLyYmIHRoaXMuX3BIYXNUaW1lKCkgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5wYXJzZU5leHRCbG9jaygpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vIFJldHVybiBjb21wbGV0ZSBzdGF0dXNcclxuXHRcdFx0aWYgKHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSA9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5kaXNwb3NlKCk7XHJcblx0XHRcdFx0cmV0dXJuICBQYXJzZXJCYXNlLlBBUlNJTkdfRE9ORTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHN3aXRjaCAodGhpcy5fY29tcHJlc3Npb24pIHtcclxuXHJcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuREVGTEFURTpcclxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5MWk1BOlxyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIighKSBBV0RQYXJzZXIgRXJyb3I6IENvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQgKCEpXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBFcnJvciAtIG1vc3QgbGlrZWx5IF9ib2R5IG5vdCBzZXQgYmVjYXVzZSB3ZSBkbyBub3Qgc3VwcG9ydCBjb21wcmVzc2lvbi5cclxuXHRcdFx0cmV0dXJuICBQYXJzZXJCYXNlLlBBUlNJTkdfRE9ORTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIF9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQ6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHN1cGVyLl9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQpO1xyXG5cclxuXHRcdC8vY3JlYXRlIGEgY29udGVudCBvYmplY3QgZm9yIExvYWRlcnNcclxuXHRcdHRoaXMuX3BDb250ZW50ID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZGlzcG9zZSgpOnZvaWRcclxuXHR7XHJcblxyXG5cdFx0Zm9yICh2YXIgYyBpbiB0aGlzLl9ibG9ja3MpIHtcclxuXHJcblx0XHRcdHZhciBiOkFXREJsb2NrID0gPEFXREJsb2NrPiB0aGlzLl9ibG9ja3NbIGMgXTtcclxuXHRcdFx0Yi5kaXNwb3NlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VOZXh0QmxvY2soKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGJsb2NrOkFXREJsb2NrO1xyXG5cdFx0dmFyIGFzc2V0RGF0YTpJQXNzZXQ7XHJcblx0XHR2YXIgaXNQYXJzZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0dmFyIG5zOm51bWJlcjtcclxuXHRcdHZhciB0eXBlOm51bWJlcjtcclxuXHRcdHZhciBmbGFnczpudW1iZXI7XHJcblx0XHR2YXIgbGVuOm51bWJlcjtcclxuXHJcblx0XHR0aGlzLl9jdXJfYmxvY2tfaWQgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdG5zID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR0eXBlID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRmbGFncyA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0bGVuID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHR2YXIgYmxvY2tDb21wcmVzc2lvbjpib29sZWFuID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzQpO1xyXG5cdFx0dmFyIGJsb2NrQ29tcHJlc3Npb25MWk1BOmJvb2xlYW4gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5T25CbG9ja3MpIHtcclxuXHRcdFx0dGhpcy5fYWNjdXJhY3lNYXRyaXggPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XHJcblx0XHRcdHRoaXMuX2FjY3VyYWN5R2VvID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzIpO1xyXG5cdFx0XHR0aGlzLl9hY2N1cmFjeVByb3BzID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzMpO1xyXG5cdFx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLl9hY2N1cmFjeUdlbykge1xyXG5cdFx0XHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRcdGlmICh0aGlzLl9hY2N1cmFjeU1hdHJpeCkge1xyXG5cdFx0XHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuX2FjY3VyYWN5UHJvcHMpIHtcclxuXHRcdFx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGJsb2NrRW5kQWxsOm51bWJlciA9IHRoaXMuX2JvZHkucG9zaXRpb24gKyBsZW47XHJcblxyXG5cdFx0aWYgKGxlbiA+IHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSkge1xyXG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdBV0QyIGJsb2NrIGxlbmd0aCBpcyBiaWdnZXIgdGhhbiB0aGUgYnl0ZXMgdGhhdCBhcmUgYXZhaWxhYmxlIScpO1xyXG5cdFx0XHR0aGlzLl9ib2R5LnBvc2l0aW9uICs9IHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcyA9IG5ldyBCeXRlQXJyYXkoKTtcclxuXHJcblxyXG5cdFx0dGhpcy5fYm9keS5yZWFkQnl0ZXModGhpcy5fbmV3QmxvY2tCeXRlcywgMCwgbGVuKTtcclxuXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIENvbXByZXNzZWQgQVdEIEZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWRcclxuXHJcblx0XHRpZiAoYmxvY2tDb21wcmVzc2lvbikge1xyXG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHQgaWYgKGJsb2NrQ29tcHJlc3Npb25MWk1BKVxyXG5cdFx0XHQge1xyXG5cdFx0XHQgdGhpcy5fbmV3QmxvY2tCeXRlcy51bmNvbXByZXNzKEFXRFBhcnNlci5DT01QUkVTU0lPTk1PREVfTFpNQSk7XHJcblx0XHRcdCB9XHJcblx0XHRcdCBlbHNlXHJcblx0XHRcdCB7XHJcblx0XHRcdCB0aGlzLl9uZXdCbG9ja0J5dGVzLnVuY29tcHJlc3MoKTtcclxuXHRcdFx0IH1cclxuXHRcdFx0ICovXHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvL3RoaXMuX25ld0Jsb2NrQnl0ZXMuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gMDtcclxuXHRcdGJsb2NrID0gbmV3IEFXREJsb2NrKCk7XHJcblx0XHRibG9jay5sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuO1xyXG5cdFx0YmxvY2suaWQgPSB0aGlzLl9jdXJfYmxvY2tfaWQ7XHJcblxyXG5cdFx0dmFyIGJsb2NrRW5kQmxvY2s6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxlbjtcclxuXHJcblx0XHRpZiAoYmxvY2tDb21wcmVzc2lvbikge1xyXG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcblx0XHRcdC8vYmxvY2tFbmRCbG9jayAgID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHRoaXMuX25ld0Jsb2NrQnl0ZXMubGVuZ3RoO1xyXG5cdFx0XHQvL2Jsb2NrLmxlbiAgICAgICA9IGJsb2NrRW5kQmxvY2s7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQVdEQmxvY2s6ICBJRCA9IFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIgfCBUeXBlSUQgPSBcIiArIHR5cGUgKyBcIiB8IENvbXByZXNzaW9uID0gXCIgKyBibG9ja0NvbXByZXNzaW9uICsgXCIgfCBNYXRyaXgtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeU1hdHJpeCArIFwiIHwgR2VvbWV0cnktUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeUdlbyArIFwiIHwgUHJvcGVydGllcy1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5UHJvcHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1t0aGlzLl9jdXJfYmxvY2tfaWRdID0gYmxvY2s7XHJcblxyXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDMpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDApKSB7XHJcblx0XHRcdC8vIHByb2JhYmx5IHNob3VsZCBjb250YWluIHNvbWUgaW5mbyBhYm91dCB0aGUgdHlwZSBvZiBhbmltYXRpb25cclxuXHRcdFx0dmFyIGZhY3RvcnkgPSBuZXcgQVMyU2NlbmVHcmFwaEZhY3RvcnkoKTtcclxuXHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgMjQ6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaExpYnJhcnlCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyNTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VCaWxsQm9hcmRMaWJyYXJ5QmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgNDQ6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQXVkaW9CbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQsIGZhY3RvcnkpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMzM6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGltZUxpbmUodGhpcy5fY3VyX2Jsb2NrX2lkLCBmYWN0b3J5KTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTM0OlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJlc1RleHRGaWVsZCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMzU6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGVzc2VsYXRlZEZvbnQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTM2OlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRleHRGb3JtYXQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPiAyKXx8KCh0aGlzLl92ZXJzaW9uWzBdID49IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID49IDEpKSkge1xyXG5cclxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSAxMTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VQcmltaXR2ZXModGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMzE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2t5Ym94SW5zdGFuY2UodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgNDE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTGlnaHQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgNDI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ2FtZXJhKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Ly8gIGNhc2UgNDM6XHJcblx0XHRcdFx0Ly8gICAgICBwYXJzZVRleHR1cmVQcm9qZWN0b3IoX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0Ly8gICAgICBpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0Ly8gICAgICBicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSA1MTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VMaWdodFBpY2tlcih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA4MTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNYXRlcmlhbF92MSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA4MzpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VDdWJlVGV4dHVyZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA5MTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VTaGFyZWRNZXRob2RCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA5MjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VTaGFkb3dNZXRob2RCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMTE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaFBvc2VBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkLCB0cnVlKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTEyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1lc2hQb3NlQW5pbWF0aW9uKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDExMzpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VWZXJ0ZXhBbmltYXRpb25TZXQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTIyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUFuaW1hdG9yU2V0KHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI1MzpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VDb21tYW5kKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyovXHJcblx0XHR9XHJcblx0XHQvLypcclxuXHRcdGlmIChpc1BhcnNlZCA9PSBmYWxzZSkge1xyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ29udGFpbmVyKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDIzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1lc2hJbnN0YW5jZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA4MTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNYXRlcmlhbCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA4MjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VUZXh0dXJlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEwMTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa2VsZXRvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMDI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2tlbGV0b25Qb3NlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEwMzpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa2VsZXRvbkFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMjE6XHJcblx0XHRcdFx0Ly90aGlzLnBhcnNlVVZBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHQvL2JyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjU0OlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZU5hbWVTcGFjZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyNTU6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWV0YURhdGEodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJBV0RCbG9jazogICBVbmtub3duIEJsb2NrVHlwZSAgKEJsb2NrSUQgPSBcIiArIHRoaXMuX2N1cl9ibG9ja19pZCArIFwiKSAtIFNraXAgXCIgKyBsZW4gKyBcIiBieXRlc1wiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKz0gbGVuO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vKi9cclxuXHJcblx0XHR2YXIgbXNnQ250Om51bWJlciA9IDA7XHJcblx0XHRpZiAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9PSBibG9ja0VuZEJsb2NrKSB7XHJcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdGlmIChibG9jay5lcnJvck1lc3NhZ2VzKSB7XHJcblx0XHRcdFx0XHR3aGlsZSAobXNnQ250IDwgYmxvY2suZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICghKSBFcnJvcjogXCIgKyBibG9jay5lcnJvck1lc3NhZ2VzW21zZ0NudF0gKyBcIiAoISlcIik7XHJcblx0XHRcdFx0XHRcdG1zZ0NudCsrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlxcblwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiICAoISkoISkoISkgRXJyb3Igd2hpbGUgcmVhZGluZyBBV0RCbG9jayBJRCBcIiArIHRoaXMuX2N1cl9ibG9ja19pZCArIFwiID0gc2tpcCB0byBuZXh0IGJsb2NrXCIpO1xyXG5cclxuXHRcdFx0XHRpZiAoYmxvY2suZXJyb3JNZXNzYWdlcykge1xyXG5cdFx0XHRcdFx0d2hpbGUgKG1zZ0NudCA8IGJsb2NrLmVycm9yTWVzc2FnZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAoISkgRXJyb3I6IFwiICsgYmxvY2suZXJyb3JNZXNzYWdlc1ttc2dDbnRdICsgXCIgKCEpXCIpO1xyXG5cdFx0XHRcdFx0XHRtc2dDbnQrKztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9ib2R5LnBvc2l0aW9uID0gYmxvY2tFbmRBbGw7XHJcblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzID0gbnVsbDtcclxuXHJcblx0fVxyXG5cclxuXHJcblx0Ly8tLVBhcnNlciBCbG9ja3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZVRlc3NlbGF0ZWRGb250KGJsb2NrSUQ6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIkZvbnQgbmFtZSA9IFwiK3RoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lKTtcclxuXHRcdHZhciBmb250X3N0eWxlX2NudDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIkZvbnQgZm9udF9zdHlsZV9jbnQgPSBcIitmb250X3N0eWxlX2NudCk7XHJcblx0XHR2YXIgbmV3X2ZvbnQ6VGVzc2VsYXRlZEZvbnQ9bmV3IFRlc3NlbGF0ZWRGb250KCk7XHJcblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBmb250X3N0eWxlX2NudDsgKytpKSB7XHJcblx0XHRcdHZhciBmb250X3N0eWxlX25hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBmb250X3N0eWxlX25hbWUgPSBcIitmb250X3N0eWxlX25hbWUpO1xyXG5cdFx0XHR2YXIgbmV3X2ZvbnRfc3R5bGU6VGVzc2VsYXRlZEZvbnRTdHlsZT1uZXdfZm9udC5nZXRfZm9udF9zdHlsZShmb250X3N0eWxlX25hbWUpO1xyXG5cdFx0XHRuZXdfZm9udF9zdHlsZS5zZXRfZm9udF9lbV9zaXplKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCkpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBuZXdfZm9udF9zdHlsZS5mb250X2VtX3NpemUgPSBcIituZXdfZm9udF9zdHlsZS5nZXRfZm9udF9lbV9zaXplKTtcclxuXHRcdFx0dmFyIGZvbnRfc3R5bGVfY2hhcl9jbnQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIkZvbnQgZm9udF9zdHlsZV9jaGFyX2NudCA9IFwiK2ZvbnRfc3R5bGVfY2hhcl9jbnQpO1xyXG5cdFx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBmb250X3N0eWxlX2NoYXJfY250OyArK2kpIHtcclxuXHJcblx0XHRcdFx0dmFyIGZvbnRfc3R5bGVfY2hhcjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJGb250IGZvbnRfc3R5bGVfY2hhciA9IFwiK2ZvbnRfc3R5bGVfY2hhcik7XHJcblx0XHRcdFx0Ly8gdG9kbzogdGhpcyBpcyBiYXNpY2FsbHkgYSBzaW1wbGlmaWVkIHZlcnNpb24gb2YgdGhlIHN1Ymdlb20tcGFyc2luZyBkb25lIGluIHBhcnNlVHJpYW5nbGVHZW9tZXRyeS4gTWFrZSBhIHBhcnNlU3ViR2VvbSgpIGluc3RlYWQgKD8pXHJcblx0XHRcdFx0dmFyIHNtX2xlbjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHZhciBzbV9lbmQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHNtX2xlbjtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBzbV9sZW4gPSBcIitzbV9sZW4pO1xyXG5cclxuXHRcdFx0XHQvL3RoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBubyBwcm9wZXJ0aWVzIGZvciBmb250LXRhYmxlIHN1Ymdlb3NcclxuXHRcdFx0XHQvLyBMb29wIHRocm91Z2ggZGF0YSBzdHJlYW1zXHJcblx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzbV9lbmQpIHtcclxuXHRcdFx0XHRcdHZhciBpZHg6bnVtYmVyID0gMDtcclxuXHRcdFx0XHRcdHZhciBzdHJfZnR5cGU6bnVtYmVyLCBzdHJfdHlwZTpudW1iZXIsIHN0cl9sZW46bnVtYmVyLCBzdHJfZW5kOm51bWJlcjtcclxuXHJcblx0XHRcdFx0XHQvLyBUeXBlLCBmaWVsZCB0eXBlLCBsZW5ndGhcclxuXHRcdFx0XHRcdHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0XHRzdHJfZnR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRcdHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzdHJfdHlwZSA9PSAyKSB7Ly9mYWNlIGluZGljaWVzIHBvc2l0aW9uc1xyXG5cdFx0XHRcdFx0XHR2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cdFx0XHRcdFx0XHRcdGluZGljZXNbaWR4KytdID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDEwKSB7Ly8gY29tYmluZWQgdmVydGV4MkQgc3RyZWFtIDUgeCBmbG9hdDMyXHJcblx0XHRcdFx0XHRcdHZhciBpZHhfcG9zOm51bWJlciA9IDA7XHJcblx0XHRcdFx0XHRcdHZhciBpZHhfY3VydmVzOm51bWJlciA9IDA7XHJcblx0XHRcdFx0XHRcdHZhciBpZHhfdXZzOm51bWJlciA9IDA7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgcG9zaXRpb25zOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0XHRcdFx0XHR2YXIgY3VydmVEYXRhOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0XHRcdFx0XHR2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuXHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uc1tpZHhfcG9zKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyB4XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHlcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gdHlwZVxyXG5cclxuXHRcdFx0XHRcdFx0XHRjdXJ2ZURhdGFbaWR4X2N1cnZlcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxyXG5cdFx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAyXHJcblxyXG5cdFx0XHRcdFx0XHRcdHV2c1tpZHhfdXZzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXHJcblx0XHRcdFx0XHRcdFx0dXZzW2lkeF91dnMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL3RoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOy8vIG5vIGF0dHJpYnV0ZXMgZm9yIGZvbnQtdGFibGUgc3ViZ2Vvc1xyXG5cdFx0XHRcdHZhciBjdXJ2ZV9zdWJfZ2VvbTpDdXJ2ZVN1Ykdlb21ldHJ5ID0gbmV3IEN1cnZlU3ViR2VvbWV0cnkodHJ1ZSk7XHJcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVDdXJ2ZXMoY3VydmVEYXRhKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVVVnModXZzKTtcclxuXHRcdFx0XHRuZXdfZm9udF9zdHlsZS5zZXRfc3ViZ2VvX2Zvcl9jaGFyKGZvbnRfc3R5bGVfY2hhci50b1N0cmluZygpLCBjdXJ2ZV9zdWJfZ2VvbSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD5uZXdfZm9udCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld19mb250O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZVRleHRGb3JtYXQoYmxvY2tJRDpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0fVxyXG5cdHByaXZhdGUgcGFyZXNUZXh0RmllbGQoYmxvY2tJRDpudW1iZXIpOnZvaWQge1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlQXVkaW9CbG9jayhibG9ja0lEOm51bWJlciwgZmFjdG9yeTpUaW1lbGluZVNjZW5lR3JhcGhGYWN0b3J5KTp2b2lkIHtcclxuXHJcblx0XHQvL3ZhciBhc3NldDpBdWRpbzt0b2RvIGNyZWF0ZSBhc3NldCBmb3IgYXVkaW9cclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XHJcblxyXG5cdFx0Ly90aGlzLl90ZXh0dXJlX3VzZXJzW3RoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpXSA9IFtdO1xyXG5cclxuXHRcdC8vIEV4dGVybmFsXHJcblx0XHRpZiAodHlwZSA9PSAwKSB7XHJcblx0XHRcdGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0dmFyIHVybDpzdHJpbmc7XHJcblx0XHRcdHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcclxuXHRcdFx0Ly8gdG9kbyBwYXJzZXIgbmVlZHMgdG8gYmUgYWJsZSB0byBoYW5kbGUgbXAzIGFuZCB3YXYgZmlsZXMgaWYgd2UgdHJpZ2dlciB0aGUgbG9hZGluZyBvZiBleHRlcm5hbCByZXNzb3VyY2VcclxuXHRcdFx0Ly90aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbmV3IFVSTFJlcXVlc3QodXJsKSwgZmFsc2UsIG51bGwsIHRydWUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkF1ZGlvIHVybCA9IFwiK3VybCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gdG9kbzogZXhwb3J0ZXIgZG9lcyBub3QgZXhwb3J0IGVtYmVkIHNvdW5kcyB5ZXRcclxuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdFx0dmFyIGRhdGE6Qnl0ZUFycmF5O1xyXG5cdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG5cdFx0XHQvLyB0b2RvIHBhcnNlIHNvdW5kIGZyb20gYnl0ZXNcclxuXHRcdFx0Ly8gdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieShkYXRhKSwgdHJ1ZSk7XHJcblx0XHRcdC8vIHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElnbm9yZSBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XHJcblx0XHQvL3RoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7dG9kb1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHR2YXIgdGV4dHVyZVN0eWxlc05hbWVzOkFycmF5PHN0cmluZz4gPSBbXCJleHRlcm5hbFwiLCBcImVtYmVkXCJdXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyBhIFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQXVkaW8gZmlsZVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA0XHJcblx0cHJpdmF0ZSBwYXJzZVRpbWVMaW5lKGJsb2NrSUQ6bnVtYmVyLCBmYWN0b3J5OlRpbWVsaW5lU2NlbmVHcmFwaEZhY3RvcnkpOnZvaWQge1xyXG5cclxuXHRcdHZhciBpOm51bWJlcjtcclxuXHRcdHZhciBqOm51bWJlcjtcclxuXHRcdHZhciBrOm51bWJlcjtcclxuXHRcdHZhciB0aW1lTGluZUNvbnRhaW5lciA9IGZhY3RvcnkuY3JlYXRlTW92aWVDbGlwKCk7XHJcblx0XHR2YXIgbmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBpc1NjZW5lID0gISF0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBzY2VuZUlEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgZnBzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0KCk7XHJcblx0XHR2YXIgbXNfcGVyX2ZyYW1lID0gMTAwMCAvIGZwcztcclxuXHRcdHZhciBudW1GcmFtZXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgb2JqZWN0SURNYXAgOiB7IFtpZDpzdHJpbmddOm51bWJlcjsgfSA9IHt9O1xyXG5cclxuXHRcdC8vIHZhciBwcmV2aW91c1RpbWVMaW5lOlRpbWVMaW5lRnJhbWU7XHJcblx0XHQvLyB2YXIgZmlsbF9wcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQzMn0pOy8vIHsgMTpVSU5UMzIsIDY6QVdEU1RSSU5HIH0gICk7IC8vOyAsIDI6VUlOVDMyLCAzOlVJTlQzMiwgNTpCT09MIH0gKTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVElNRUxJTkU6IE5hbWUgPSBcIiArIG5hbWUgKyBcInwgaXNTY2VuZSA9IFwiICsgaXNTY2VuZSArIFwifCBzY2VuZUlEID0gXCIgKyBzY2VuZUlEICsgXCJ8IG51bUZyYW1lcyA9IFwiICsgbnVtRnJhbWVzKTtcclxuXHJcblx0XHR2YXIgdG90YWxEdXJhdGlvbiA9IDA7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtRnJhbWVzOyBpKyspIHtcclxuXHJcblx0XHRcdHZhciBmcmFtZSA9IG5ldyBUaW1lbGluZUtleUZyYW1lKCk7XHJcblx0XHRcdHZhciB0cmFjZVN0cmluZyA9IFwiZnJhbWUgPSBcIiArIGk7XHJcblx0XHRcdC8vIFRPRE86IHJlbW92ZSB0aGUgbXNfcGVyX2ZyYW1lIHRvIHNldCB0aGUgZHVyYXRpb24gaW4gZnJhbWVzXHJcblx0XHRcdHZhciBmcmFtZUR1cmF0aW9uID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKSAqIG1zX3Blcl9mcmFtZTtcclxuXHRcdFx0ZnJhbWUuc2V0RnJhbWVUaW1lKHRvdGFsRHVyYXRpb24sIGZyYW1lRHVyYXRpb24pO1xyXG5cdFx0XHR0b3RhbER1cmF0aW9uICs9IGZyYW1lRHVyYXRpb247XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJkdXJhdGlvbiA9IFwiICsgZnJhbWVEdXJhdGlvbik7XHJcblx0XHRcdHRyYWNlU3RyaW5nICs9IFwiZHVyYXRpb24gPSBcIiArIGZyYW1lRHVyYXRpb247XHJcblxyXG5cdFx0XHR2YXIgbnVtTGFiZWxzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgbnVtTGFiZWxzOyBqKyspIHtcclxuXHRcdFx0XHR2YXIgbGFiZWxUeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0dmFyIGxhYmVsID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0XHRcdC8vIFRPRE86IEhhbmRsZSBsYWJlbHMgZGlmZmVyZW50bHlcclxuXHRcdFx0XHQvL3RpbWVMaW5lQ29udGFpbmVyLmFkZEZyYW1lTGFiZWwobmV3IEZyYW1lTGFiZWwobGFiZWwsIGxhYmVsVHlwZSwgZnJhbWUpKTtcclxuXHRcdFx0XHR0cmFjZVN0cmluZyArPSBcIlxcbiAgICAgbGFiZWwgPSBcIiArIGxhYmVsICsgXCIgLSBsYWJlbFR5cGUgPSBcIiArIGxhYmVsVHlwZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG51bUNvbW1hbmRzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHR0cmFjZVN0cmluZyArPSBcIlxcbiAgICAgIENvbW1hbmRzIFwiICsgbnVtQ29tbWFuZHM7XHJcblx0XHRcdHZhciBoYXNEZXB0aENoYW5nZXMgPSBmYWxzZTtcclxuXHRcdFx0dmFyIGNvbW1hbmRTdHJpbmcgPSBcIlwiO1xyXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgbnVtQ29tbWFuZHM7IGorKykge1xyXG5cdFx0XHRcdHZhciBvYmplY3RJRDpudW1iZXI7XHJcblx0XHRcdFx0dmFyIHJlc291cmNlSUQ6bnVtYmVyO1xyXG5cdFx0XHRcdHZhciBjb21tYW5kVHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHRcdFx0Ly8gMSA9IEFkZCBvYmplY3QgYnkgbG9jYWwgaWQgKGF3ZC1ibG9jay1pZCkgKyB1cGRhdGUgcHJvcGVydGllc1xyXG5cdFx0XHRcdC8vIDIgPSBBZGQgb2JqZWN0IGJ5IGdsb2JhbCBpZCAoc3RyaW5nIGlkZW50aWZpZXIpICsgdXBkYXRlIHByb3BlcnRpZXMgIU5vdCB1c2VkIHlldC4hXHJcblx0XHRcdFx0Ly8gMyA9IFVwZGF0ZU9iamVjdCAtIHVwZGF0ZSBhIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgcHJlc2VudFxyXG5cdFx0XHRcdC8vIDQgPSByZW1vdmUgb2JqZWN0XHJcblx0XHRcdFx0Ly8gNSA9IGFkZCAvIHVwZGF0ZSBzb3VuZFxyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKGNvbW1hbmRUeXBlKSB7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0XHR2YXIgdmFsaWRfY29tbWFuZDpib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdG9iamVjdElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlSUQgPSAwOyAvLyBtdXN0IGJlIHNldCBpbiBmb2xsaW5nIGNvbmRpdGlvbnM6XHJcblx0XHRcdFx0XHRcdGlmIChjb21tYW5kVHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcyBjb21tYW5kcyBsb29rcyBmb3IgYSBvYmplY3QgYnkgYXdkLWlkIGFuZCBwdXRzIGl0IGludG8gdGhlIHRpbWVsaW5lXHJcblx0XHRcdFx0XHRcdFx0cmVzb3VyY2VJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlTmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdFx0XHRcdFx0XHQvLyBzb3VuZCBpcyBhZGRlZCB0byB0aW1lbGluZSB3aXRoIGRlZGljYXRlZCBDb21tYW5kLCBhcyBpdCBpcyBubyBkaXNwbGF5LW9iamVjdCAoaGFzIG5vIG1hdHJpeCBldGMpXHJcblx0XHRcdFx0XHRcdFx0Ly8gY2hlY2sgaWYgYSBHZW9tZXRyeSBjYW4gYmUgZm91bmQgYXQgdGhlIHJlc291cmNlSUQgKEFXRC1JRClcclxuXHRcdFx0XHRcdFx0XHR2YXIgY21kX2Fzc2V0OkRpc3BsYXlPYmplY3QgPSA8RGlzcGxheU9iamVjdD50aGlzLl9ibG9ja3NbcmVzb3VyY2VJRF0uZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoY21kX2Fzc2V0ICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGluc3RhbmNlSUQgPSB0aW1lTGluZUNvbnRhaW5lci5yZWdpc3RlclBvdGVudGlhbENoaWxkKGNtZF9hc3NldCk7XHJcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RJRE1hcFtvYmplY3RJRF0gPSBpbnN0YW5jZUlEO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgQWRkQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaW5zdGFuY2VOYW1lLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJuYW1lXCIsIGluc3RhbmNlTmFtZSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIGluc3RhbmNlTmFtZSA9IFwiICsgaW5zdGFuY2VOYW1lO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsaWRfY29tbWFuZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBBZGQgbmV3IFJlc291cmNlID0gXCIgKyByZXNvdXJjZUlEICsgXCIgYXMgb2JqZWN0X2lkID0gXCIgKyBvYmplY3RJRDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBFUlJPUiAtIG9iamVjdF9pZCA9IFwiICsgb2JqZWN0SUQgKyBcIiAtIE5PIERJU1BMQVlfT0JKRUNUIEFUIElEID0gXCIgKyByZXNvdXJjZUlEO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmIChjb21tYW5kVHlwZSA9PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2VJRCA9IG9iamVjdElETWFwW29iamVjdElEXTtcclxuXHRcdFx0XHRcdFx0XHR2YWxpZF9jb21tYW5kID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBVcGRhdGUgb2JqZWN0X2lkID0gXCIgKyBvYmplY3RJRDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyByZWFkIHRoZSBjb21tYW5kIHByb3BlcnRpZXNcclxuXHRcdFx0XHRcdFx0Ly8gMTogbWF0cml4MmQgKDYgeCBudW1iZXIgd2l0aCBzdG9yYWdlIHByZWNpc2lvbiBtYXRyaXgpXHJcblx0XHRcdFx0XHRcdC8vIDI6IG1hdHJpeDJkICgxMiB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIG1hdHJpeCkgbm90IHVzZWQgeWV0XHJcblx0XHRcdFx0XHRcdC8vIDM6IGNvbG9ydHJhbnNmb3JtICgyMCB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIHByb3BlcnRpZXMpXHJcblx0XHRcdFx0XHRcdC8vIDQ6IGJsZW5kbW9kZSAodWludDgpXHJcblx0XHRcdFx0XHRcdC8vIDU6IHZpc2liaWx0eSAodWludDgpXHJcblx0XHRcdFx0XHRcdC8vIDY6IGRlcHRoICh1aW50MzIpXHJcblx0XHRcdFx0XHRcdC8vIDc6IG1hc2sgKHVpbnQzMilcclxuXHRcdFx0XHRcdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7XHJcblx0XHRcdFx0XHRcdFx0MTogdGhpcy5fbWF0cml4TnJUeXBlLFxyXG5cdFx0XHRcdFx0XHRcdDI6IHRoaXMuX21hdHJpeE5yVHlwZSxcclxuXHRcdFx0XHRcdFx0XHQzOiB0aGlzLl9wcm9wc05yVHlwZSxcclxuXHRcdFx0XHRcdFx0XHQ0OiBBV0RQYXJzZXIuVUlOVDgsXHJcblx0XHRcdFx0XHRcdFx0NTogQVdEUGFyc2VyLlVJTlQ4LFxyXG5cdFx0XHRcdFx0XHRcdDY6IEFXRFBhcnNlci5VSU5UMzIsXHJcblx0XHRcdFx0XHRcdFx0NzogQVdEUGFyc2VyLlVJTlQzMlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYgKHZhbGlkX2NvbW1hbmQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIG1hdHJpeF8yZDpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMSwgW10pO1xyXG5cdFx0XHRcdFx0XHRcdC8vdmFyIG1hdHJpeF8zZDpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMiwgW10pO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjb2xvcnRyYW5zZm9ybTpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMywgW10pO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBibGVuZG1vZGU6bnVtYmVyID0gcHJvcHMuZ2V0KDQsIC0xKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdmlzaWJpbHR5Om51bWJlciA9IHByb3BzLmdldCg1LCAtMSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGRlcHRoOm51bWJlciA9IHByb3BzLmdldCg2LCAtMSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIG1hc2s6bnVtYmVyID0gcHJvcHMuZ2V0KDcsIC0xKTtcclxuXHRcdFx0XHRcdFx0XHQvLyB0b2RvOiBoYW5kbGUgZmlsdGVyc1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL21hdHJpeDJkIG11c3QgcHJvdmlkZSA2IHZhbHVlcyB0byBiZSB2YWxpZFxyXG5cclxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFycmF5ID0gXCIgKyBtYXRyaXhfMmQubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChtYXRyaXhfMmQubGVuZ3RoID09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0aGlzTWF0cml4ID0gbmV3IE1hdHJpeDNEKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzTWF0cml4LnBvc2l0aW9uID0gbmV3IFZlY3RvcjNEKG1hdHJpeF8yZFs0XSwgbWF0cml4XzJkWzVdLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRvZG8gaXMgdGhpcyBjb3JyZWN0IGZvciAyZCAtPiAzZCBzY2FsZSBhbmQgcm90YXRpb24uIChpIGRvdWJ0IGl0KVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5yYXdEYXRhWzBdID0gbWF0cml4XzJkWzBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5yYXdEYXRhWzFdID0gbWF0cml4XzJkWzFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5yYXdEYXRhWzRdID0gbWF0cml4XzJkWzJdO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5yYXdEYXRhWzVdID0gbWF0cml4XzJkWzNdO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwiX2lNYXRyaXgzRFwiLCB0aGlzTWF0cml4KSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1BcnJheSA9IFwiICsgbWF0cml4XzJkO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvL21hdHJpeDJkIG11c3QgcHJvdmlkZSAyMCB2YWx1ZXMgdG8gYmUgdmFsaWRcclxuXHRcdFx0XHRcdFx0XHRpZiAoY29sb3J0cmFuc2Zvcm0ubGVuZ3RoID09IDIwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBzZXQgQ29sb3JUcmFuc2Zvcm0gb24gb2JqZWN0UHJvcHNcclxuXHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgY29sb3JNYXRyaXggPSBcIiArIGNvbG9ydHJhbnNmb3JtO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gYmxlbmRtb2RlIG11c3QgYmUgcG9zaXRpdmUgdG8gYmUgdmFsaWRcclxuXHRcdFx0XHRcdFx0XHRpZiAoYmxlbmRtb2RlID49IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBibGVuZG1vZGVfc3RyaW5nOnN0cmluZyA9IHRoaXMuYmxlbmRNb2RlRGljW2JsZW5kbW9kZV07XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBzZXQgQmxlbmRtb2RlIG9uIG9iamVjdFByb3BzXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIEJsZW5kTW9kZSA9IFwiICsgYmxlbmRtb2RlX3N0cmluZztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8gdmlzaWJpbHR5IG11c3QgYmUgcG9zaXRpdmUgdG8gYmUgdmFsaWRcclxuXHRcdFx0XHRcdFx0XHRpZiAodmlzaWJpbHR5ID49IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh2aXNpYmlsdHkgPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwidmlzaWJsZVwiLCBmYWxzZSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJ2aXNpYmxlXCIsIHRydWUpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8gZGVwdGggbXVzdCBiZSBwb3NpdGl2ZSB0byBiZSB2YWxpZFxyXG5cdFx0XHRcdFx0XHRcdGlmIChkZXB0aCA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIERlcHRoID0gXCIgKyBkZXB0aDtcclxuXHRcdFx0XHRcdFx0XHRcdGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcIl9fQVMyRGVwdGhcIiwgZGVwdGgpKTtcclxuXHRcdFx0XHRcdFx0XHRcdGhhc0RlcHRoQ2hhbmdlcyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIG1hc2sgbXVzdCBiZSBwb3NpdGl2ZSB0byBiZSB2YWxpZC4gaSB0aGluayBvbmx5IGFkZC1jb21tYW5kcyB3aWxsIGhhdmUgdGhpcyB2YWx1ZS5cclxuXHRcdFx0XHRcdFx0XHQvLyBlLmcuIGl0IHNob3VsZCBuZXZlciBiZSB1cGRhdGVkIG9uIGFscmVhZHkgZXhpc3Rpbmcgb2JqZWN0cy4gKGJlY2F1c2UgZGVwdGggb2Ygb2JqZWN0cyBjYW4gY2hhbmdlLCBpIGFtIG5vdCBzdXJlKVxyXG5cdFx0XHRcdFx0XHRcdGlmIChtYXNrID49IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgTWFzay11cCB0byBvYmotaWQ6IFwiICsgbWFzaztcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBkZXB0aENsaXBDaGFuZ2Ugb24gb2JqZWN0UHJvcHNcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8gdG9kbzogaGFuZGxlIGZpbHRlcnNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDQ6XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgT2JqZWN0IENvbW1hbmRcclxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2VJRCA9IG9iamVjdElETWFwW29iamVjdElEXTtcclxuXHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgUmVtb3ZlQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcclxuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAtIFJlbW92ZSBvYmplY3Qgd2l0aCBJRDogXCIgKyBvYmplY3RJRDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSA1OlxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQWRkIFNvdW5kIENvbW1hbmRcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogY3JlYXRlIENvbW1hbmRQcm9wc1NvdW5kIGFuZCBjaGVjayB3aGljaCBhc3NldCB0byB1c2VcclxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHRyZXNvdXJjZUlEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaW1wbGVtZW50IHNvdW5kIGluIHRpbWVsaW5lXHJcblx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIEFkZCBuZXcgU291bmQgQVdELUlEID0gXCIgKyByZXNvdXJjZUlELnRvU3RyaW5nKCkgKyBcIiBhcyBvYmplY3RfaWQgPSBcIiArIG9iamVjdElELnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgIC0gVW5rbm93biBDb21tYW5kIFR5cGUgPSBcIiArIGNvbW1hbmRUeXBlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaGFzRGVwdGhDaGFuZ2VzKSB7XHJcblx0XHRcdFx0Ly8gb25seSB3YW50IHRvIGRvIHRoaXMgb25jZSBhZnRlciBhbGwgY2hpbGRyZW4ncyBkZXB0aCB2YWx1ZXMgYXJlIHVwZGF0ZWRcclxuXHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBBcHBseUFTMkRlcHRoc0NvbW1hbmQoKSk7XHJcblx0XHRcdFx0aGFzRGVwdGhDaGFuZ2VzID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBsZW5ndGhfY29kZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdGlmIChsZW5ndGhfY29kZSA+IDApIHtcclxuXHRcdFx0XHQvLyBUT0RPOiBTY3JpcHQgc2hvdWxkIHByb2JhYmx5IG5vdCBiZSBhdHRhY2hlZCB0byBrZXlmcmFtZXM/XHJcblx0XHRcdFx0dmFyIGZyYW1lX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW5ndGhfY29kZSk7XHJcblx0XHRcdFx0Ly9mcmFtZS5hZGRUb1NjcmlwdChmcmFtZV9jb2RlKTtcclxuXHRcdFx0XHR0cmFjZVN0cmluZyArPSBcIlxcbmZyYW1lLWNvZGUgPSBcIiArIGZyYW1lX2NvZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0dHJhY2VTdHJpbmcgKz0gY29tbWFuZFN0cmluZztcclxuXHRcdFx0Ly90cmFjZShcImxlbmd0aF9jb2RlID0gXCIrbGVuZ3RoX2NvZGUrXCIgZnJhbWVfY29kZSA9IFwiK2ZyYW1lX2NvZGUpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpOy8vIHVzZXIgYXR0cmlidXRlcyAtIHNraXAgZm9yIG5vd1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0cmFjZVN0cmluZyk7XHJcblx0XHRcdHRpbWVMaW5lQ29udGFpbmVyLmFkZEZyYW1lKGZyYW1lKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD50aW1lTGluZUNvbnRhaW5lciwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRpbWVMaW5lQ29udGFpbmVyO1xyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSAxXHJcblx0cHJpdmF0ZSBwYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblxyXG5cdFx0dmFyIGdlb206R2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoKTtcclxuXHJcblx0XHQvLyBSZWFkIG5hbWUgYW5kIHN1YiBjb3VudFxyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIG51bV9zdWJzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHQvLyBSZWFkIG9wdGlvbmFsIHByb3BlcnRpZXNcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xyXG5cdFx0dmFyIGdlb1NjYWxlVTpudW1iZXIgPSBwcm9wcy5nZXQoMSwgMSk7XHJcblx0XHR2YXIgZ2VvU2NhbGVWOm51bWJlciA9IHByb3BzLmdldCgyLCAxKTtcclxuXHJcblx0XHQvLyBMb29wIHRocm91Z2ggc3ViIG1lc2hlc1xyXG5cdFx0dmFyIHN1YnNfcGFyc2VkOm51bWJlciA9IDA7XHJcblx0XHR3aGlsZSAoc3Vic19wYXJzZWQgPCBudW1fc3Vicykge1xyXG5cdFx0XHR2YXIgaXNfY3VydmVfZ2VvbTpib29sZWFuPWZhbHNlO1xyXG5cdFx0XHR2YXIgaTpudW1iZXI7XHJcblx0XHRcdHZhciBzbV9sZW46bnVtYmVyLCBzbV9lbmQ6bnVtYmVyO1xyXG5cdFx0XHR2YXIgd19pbmRpY2VzOkFycmF5PG51bWJlcj47XHJcblx0XHRcdHZhciB3ZWlnaHRzOkFycmF5PG51bWJlcj47XHJcblxyXG5cdFx0XHRzbV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRzbV9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgc21fbGVuO1xyXG5cclxuXHRcdFx0dmFyIHN1YlByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9nZW9OclR5cGUsIDI6dGhpcy5fZ2VvTnJUeXBlfSk7XHJcblx0XHRcdC8vIExvb3AgdGhyb3VnaCBkYXRhIHN0cmVhbXNcclxuXHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzbV9lbmQpIHtcclxuXHRcdFx0XHR2YXIgaWR4Om51bWJlciA9IDA7XHJcblx0XHRcdFx0dmFyIHN0cl9mdHlwZTpudW1iZXIsIHN0cl90eXBlOm51bWJlciwgc3RyX2xlbjpudW1iZXIsIHN0cl9lbmQ6bnVtYmVyO1xyXG5cclxuXHRcdFx0XHQvLyBUeXBlLCBmaWVsZCB0eXBlLCBsZW5ndGhcclxuXHRcdFx0XHRzdHJfdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdHN0cl9mdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHN0cl9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgc3RyX2xlbjtcclxuXHJcblx0XHRcdFx0dmFyIHg6bnVtYmVyLCB5Om51bWJlciwgejpudW1iZXI7XHJcblxyXG5cdFx0XHRcdGlmIChzdHJfdHlwZSA9PSAxKSB7Ly92ZXJ0ZXggM2QgcG9zaXRpb25zXHJcblx0XHRcdFx0XHR2YXIgdmVydHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR4ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHRcdFx0XHRcdFx0eSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcblx0XHRcdFx0XHRcdHogPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cclxuXHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geDtcclxuXHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geTtcclxuXHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0gejtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDIpIHsvL2ZhY2UgaW5kaWNpZXMgcG9zaXRpb25zXHJcblx0XHRcdFx0XHR2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0aW5kaWNlc1tpZHgrK10gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMykge1xyXG5cdFx0XHRcdFx0dmFyIHV2czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cdFx0XHRcdFx0XHR1dnNbaWR4KytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSA0KSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIG5vcm1hbHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdG5vcm1hbHNbaWR4KytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSA2KSB7XHJcblx0XHRcdFx0XHR3X2luZGljZXMgPSBBcnJheTxudW1iZXI+KCk7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdHdfaW5kaWNlc1tpZHgrK10gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCkqMztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSA3KSB7XHJcblxyXG5cdFx0XHRcdFx0d2VpZ2h0cyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdHdlaWdodHNbaWR4KytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDgpIHsvLyAyZC1wb3NpdGlvbnMgLSBub3QgdXNlZCB5ZXQuXHJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDkpIHsvLyBjb21iaW5lZCB2ZXJ0ZXgzRCBzdHJlYW0gMTMgeCBmbG9hdDMyXHJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDEwKSB7Ly8gY29tYmluZWQgdmVydGV4MkQgc3RyZWFtIDUgeCBmbG9hdDMyXHJcblx0XHRcdFx0XHRpc19jdXJ2ZV9nZW9tPXRydWU7XHJcblx0XHRcdFx0XHR2YXIgaWR4X3BvczpudW1iZXIgPSAwO1xyXG5cdFx0XHRcdFx0dmFyIGlkeF9jdXJ2ZXM6bnVtYmVyID0gMDtcclxuXHRcdFx0XHRcdHZhciBpZHhfdXZzOm51bWJlciA9IDA7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHBvc2l0aW9uczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0XHRcdHZhciBjdXJ2ZURhdGE6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0XHRcdFx0XHR2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cclxuXHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHhcclxuXHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHlcclxuXHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSAgdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyB0eXBlXHJcblxyXG5cdFx0XHRcdFx0XHRjdXJ2ZURhdGFbaWR4X2N1cnZlcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxyXG5cdFx0XHRcdFx0XHRjdXJ2ZURhdGFbaWR4X2N1cnZlcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMlxyXG5cclxuXHRcdFx0XHRcdFx0dXZzW2lkeF91dnMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDFcclxuXHRcdFx0XHRcdFx0dXZzW2lkeF91dnMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIHN1Yi1tZXNoIGF0dHJpYnV0ZXMgZm9yIG5vd1xyXG5cdFx0XHRpZihpc19jdXJ2ZV9nZW9tKXtcclxuXHRcdFx0XHR2YXIgY3VydmVfc3ViX2dlb206Q3VydmVTdWJHZW9tZXRyeSA9IG5ldyBDdXJ2ZVN1Ykdlb21ldHJ5KHRydWUpO1xyXG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XHJcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlUG9zaXRpb25zKHBvc2l0aW9ucyk7XHJcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlQ3VydmVzKGN1cnZlRGF0YSk7XHJcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlVVZzKHV2cyk7XHJcblx0XHRcdFx0Z2VvbS5hZGRTdWJHZW9tZXRyeShjdXJ2ZV9zdWJfZ2VvbSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDdXJ2ZVN1Ykdlb21ldHJ5XCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHZhciB0cmlhbmdsZV9zdWJfZ2VvbSA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xyXG5cdFx0XHRcdGlmICh3ZWlnaHRzKVxyXG5cdFx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20uam9pbnRzUGVyVmVydGV4ID0gd2VpZ2h0cy5sZW5ndGggLyAodmVydHMubGVuZ3RoIC8gMyk7XHJcblx0XHRcdFx0aWYgKG5vcm1hbHMpXHJcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5hdXRvRGVyaXZlTm9ybWFscyA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmICh1dnMpXHJcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5hdXRvRGVyaXZlVVZzID0gZmFsc2U7XHJcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAodHJ1ZSkge1xyXG5cdFx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20uYXV0b0Rlcml2ZVRhbmdlbnRzID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcclxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVQb3NpdGlvbnModmVydHMpO1xyXG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZVZlcnRleE5vcm1hbHMobm9ybWFscyk7XHJcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlVVZzKHV2cyk7XHJcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlVmVydGV4VGFuZ2VudHMobnVsbCk7XHJcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlSm9pbnRXZWlnaHRzKHdlaWdodHMpO1xyXG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZUpvaW50SW5kaWNlcyh3X2luZGljZXMpO1xyXG5cclxuXHRcdFx0XHR2YXIgc2NhbGVVOm51bWJlciA9IHN1YlByb3BzLmdldCgxLCAxKTtcclxuXHRcdFx0XHR2YXIgc2NhbGVWOm51bWJlciA9IHN1YlByb3BzLmdldCgyLCAxKTtcclxuXHRcdFx0XHR2YXIgc2V0U3ViVVZzOmJvb2xlYW4gPSBmYWxzZTsgLy90aGlzIHNob3VsZCByZW1haW4gZmFsc2UgYXRtLCBiZWNhdXNlIGluIEF3YXlCdWlsZGVyIHRoZSB1diBpcyBvbmx5IHNjYWxlZCBieSB0aGUgZ2VvbWV0cnlcclxuXHJcblx0XHRcdFx0aWYgKChnZW9TY2FsZVUgIT0gc2NhbGVVKSB8fCAoZ2VvU2NhbGVWICE9IHNjYWxlVikpIHtcclxuXHRcdFx0XHRcdHNldFN1YlVWcyA9IHRydWU7XHJcblx0XHRcdFx0XHRzY2FsZVUgPSBnZW9TY2FsZVUgLyBzY2FsZVU7XHJcblx0XHRcdFx0XHRzY2FsZVYgPSBnZW9TY2FsZVYgLyBzY2FsZVY7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoc2V0U3ViVVZzKVxyXG5cdFx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20uc2NhbGVVVihzY2FsZVUsIHNjYWxlVik7XHJcblx0XHRcdFx0Z2VvbS5hZGRTdWJHZW9tZXRyeSh0cmlhbmdsZV9zdWJfZ2VvbSk7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUcmlhbmdsZVN1Ykdlb21ldHJ5XCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Ly8gVE9ETzogU29tZWhvdyBtYXAgaW4tc3ViIHRvIG91dC1zdWIgaW5kaWNlcyB0byBlbmFibGUgbG9vay11cFxyXG5cdFx0XHQvLyB3aGVuIGNyZWF0aW5nIG1lc2hlcyAoYW5kIHRoZWlyIG1hdGVyaWFsIGFzc2lnbm1lbnRzLilcclxuXHJcblx0XHRcdHN1YnNfcGFyc2VkKys7XHJcblx0XHR9XHJcblx0XHRpZiAoKGdlb1NjYWxlVSAhPSAxKSB8fCAoZ2VvU2NhbGVWICE9IDEpKVxyXG5cdFx0XHRnZW9tLnNjYWxlVVYoZ2VvU2NhbGVVLCBnZW9TY2FsZVYpO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBnZW9tLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gZ2VvbTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUcmlhbmdsZUdlb21ldHJ5OiBOYW1lID0gXCIgKyBuYW1lKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcblx0Ly9CbG9jayBJRCA9IDExXHJcblx0cHJpdmF0ZSBwYXJzZVByaW1pdHZlcyhibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBuYW1lOnN0cmluZztcclxuXHRcdHZhciBwcmVmYWI6UHJlZmFiQmFzZTtcclxuXHRcdHZhciBwcmltVHlwZTpudW1iZXI7XHJcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXM7XHJcblx0XHR2YXIgYnNtOk1hdHJpeDNEO1xyXG5cclxuXHRcdC8vIFJlYWQgbmFtZSBhbmQgc3ViIGNvdW50XHJcblx0XHRuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0cHJpbVR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezEwMTp0aGlzLl9nZW9OclR5cGUsIDEwMjp0aGlzLl9nZW9OclR5cGUsIDEwMzp0aGlzLl9nZW9OclR5cGUsIDExMDp0aGlzLl9nZW9OclR5cGUsIDExMTp0aGlzLl9nZW9OclR5cGUsIDMwMTpBV0RQYXJzZXIuVUlOVDE2LCAzMDI6QVdEUGFyc2VyLlVJTlQxNiwgMzAzOkFXRFBhcnNlci5VSU5UMTYsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MLCA3MDM6QVdEUGFyc2VyLkJPT0wsIDcwNDpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cclxuXHRcdHZhciBwcmltaXRpdmVUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiVW5zdXBwb3J0ZWQgVHlwZS1JRFwiLCBcIlByaW1pdGl2ZVBsYW5lUHJlZmFiXCIsIFwiUHJpbWl0aXZlQ3ViZVByZWZhYlwiLCBcIlByaW1pdGl2ZVNwaGVyZVByZWZhYlwiLCBcIlByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIsIFwiUHJpbWl0aXZlc0NvbmVQcmVmYWJcIiwgXCJQcmltaXRpdmVzQ2Fwc3VsZVByZWZhYlwiLCBcIlByaW1pdGl2ZXNUb3J1c1ByZWZhYlwiXVxyXG5cclxuXHRcdHN3aXRjaCAocHJpbVR5cGUpIHtcclxuXHRcdFx0Ly8gdG8gZG8sIG5vdCBhbGwgcHJvcGVydGllcyBhcmUgc2V0IG9uIGFsbCBwcmltaXRpdmVzXHJcblxyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVBsYW5lUHJlZmFiKHByb3BzLmdldCgxMDEsIDEwMCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDEpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZUN1YmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgMTAwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDEwMywgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMSksIHByb3BzLmdldCgzMDIsIDEpLCBwcm9wcy5nZXQoMzAzLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVTcGhlcmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDEyKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDeWxpbmRlclByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDUwKSwgcHJvcHMuZ2V0KDEwMywgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxKSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7IC8vIGJvb2w3MDEsIGJvb2w3MDIsIGJvb2w3MDMsIGJvb2w3MDQpO1xyXG5cdFx0XHRcdGlmICghcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpXHJcblx0XHRcdFx0XHQoPFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiPnByZWZhYikudG9wQ2xvc2VkID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKCFwcm9wcy5nZXQoNzAyLCB0cnVlKSlcclxuXHRcdFx0XHRcdCg8UHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWI+cHJlZmFiKS5ib3R0b21DbG9zZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAoIXByb3BzLmdldCg3MDMsIHRydWUpKVxyXG5cdFx0XHRcdFx0KDxQcmltaXRpdmVDeWxpbmRlclByZWZhYj5wcmVmYWIpLnlVcCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgNTpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ29uZVByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCg3MDEsIHRydWUpLCBwcm9wcy5nZXQoNzAyLCB0cnVlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDY6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDE1KSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSA3OlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVUb3J1c1ByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDUwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCA4KSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJlZmFiQmFzZSgpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRVJST1I6IFVOU1VQUE9SVEVEIFBSRUZBQl9UWVBFXCIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgocHJvcHMuZ2V0KDExMCwgMSkgIT0gMSkgfHwgKHByb3BzLmdldCgxMTEsIDEpICE9IDEpKSB7XHJcblx0XHRcdC8vZ2VvbS5zdWJHZW9tZXRyaWVzO1xyXG5cdFx0XHQvL2dlb20uc2NhbGVVVihwcm9wcy5nZXQoMTEwLCAxKSwgcHJvcHMuZ2V0KDExMSwgMSkpOyAvL1RPRE8gYWRkIGJhY2sgc2NhbGluZyB0byBwcmVmYWJzXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRwcmVmYWIubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChwcmVmYWIsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBwcmVmYWI7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGlmICgocHJpbVR5cGUgPCAwKSB8fCAocHJpbVR5cGUgPiA3KSkge1xyXG5cdFx0XHRcdHByaW1UeXBlID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFByaW1pdml0ZTogTmFtZSA9IFwiICsgbmFtZSArIFwifCB0eXBlID0gXCIgKyBwcmltaXRpdmVUeXBlc1twcmltVHlwZV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQmxvY2sgSUQgPSAyMlxyXG5cdHByaXZhdGUgcGFyc2VDb250YWluZXIoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmc7XHJcblx0XHR2YXIgcGFyX2lkOm51bWJlcjtcclxuXHRcdHZhciBtdHg6TWF0cml4M0Q7XHJcblx0XHR2YXIgY3RyOkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblx0XHR2YXIgcGFyZW50OkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblxyXG5cdFx0cGFyX2lkID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdG10eCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xyXG5cdFx0bmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xyXG5cdFx0Y3RyID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcclxuXHRcdGN0ci50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKTtcclxuXHJcblx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR2YXIgb2JqOkRpc3BsYXlPYmplY3QgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV0pLmFkZENoaWxkKGN0cik7XHJcblx0XHRcdHBhcmVudE5hbWUgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHR9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzWyBibG9ja0lEIF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBPYmplY3RDb250YWluZXIzRFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XHJcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGN0cik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW4gQVdEIHZlcnNpb24gMi4xIHdlIHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXHJcblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMSkpIHtcclxuXHRcdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcclxuXHRcdFx0Y3RyLnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gaW4gb3RoZXIgdmVyc2lvbnMgd2UgZG8gbm90IHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhlIGV4dHJhUHJvcGVydGllcyBzaG91bGQgb25seSBiZSBzZXQgZm9yIEFXRDIuMS1GaWxlcywgYnV0IGlzIHJlYWQgZm9yIGJvdGggdmVyc2lvbnNcclxuXHRcdGN0ci5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGN0ciwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGN0cjtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDb250YWluZXI6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQmxvY2sgSUQgPSAyNVxyXG5cdHByaXZhdGUgcGFyc2VCaWxsQm9hcmRMaWJyYXJ5QmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWQge1xyXG5cclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgZGF0YV9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIG1hdDpCYXNpY01hdGVyaWFsO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlHZW9tZXRyeTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZGF0YV9pZCwgW0Fzc2V0VHlwZS5NQVRFUklBTF0pXHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlHZW9tZXRyeVswXSkge1xyXG5cdFx0XHRtYXQgPSA8QmFzaWNNYXRlcmlhbD4gcmV0dXJuZWRBcnJheUdlb21ldHJ5WzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBNYXRlcmlhbCBmb3IgdGhpcyBCaWxsYm9hcmQuIEEgZW1wdHkgbWF0ZXJpYWwgaXMgY3JlYXRlZCFcIik7XHJcblx0XHRcdG1hdCA9IG5ldyBCYXNpY01hdGVyaWFsKCk7XHJcblx0XHR9XHJcblx0XHRtYXQuYm90aFNpZGVzPXRydWU7XHJcblx0XHR2YXIgYmlsbGJvYXJkOkJpbGxib2FyZCA9IG5ldyBCaWxsYm9hcmQobWF0KTtcclxuXHJcblxyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblxyXG5cdFx0YmlsbGJvYXJkLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYmlsbGJvYXJkLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYmlsbGJvYXJkO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIExpYnJhcnktQmlsbGJvYXJkOiBOYW1lID0gJ1wiICsgbmFtZSArIFwifCBNYXRlcmlhbC1OYW1lID0gXCIgKyBtYXQubmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIEJsb2NrIElEID0gMjRcclxuXHRwcml2YXRlIHBhcnNlTWVzaExpYnJhcnlCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZCB7XHJcblx0XHR2YXIgbnVtX21hdGVyaWFsczpudW1iZXI7XHJcblx0XHR2YXIgbWF0ZXJpYWxzX3BhcnNlZDpudW1iZXI7XHJcblxyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdHZhciBkYXRhX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgZ2VvbTpHZW9tZXRyeTtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5R2VvbWV0cnk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRhdGFfaWQsIFtBc3NldFR5cGUuR0VPTUVUUlldKVxyXG5cclxuXHRcdGlmIChyZXR1cm5lZEFycmF5R2VvbWV0cnlbMF0pIHtcclxuXHRcdFx0Z2VvbSA9IDxHZW9tZXRyeT4gcmV0dXJuZWRBcnJheUdlb21ldHJ5WzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBHZW9tZXRyeSBmb3IgdGhpcyBNZXNoLiBBIGVtcHR5IEdlb21ldHJ5IGlzIGNyZWF0ZWQhXCIpO1xyXG5cdFx0XHRnZW9tID0gbmV3IEdlb21ldHJ5KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmdlb0lEID0gZGF0YV9pZDtcclxuXHRcdHZhciBtYXRlcmlhbHM6QXJyYXk8TWF0ZXJpYWxCYXNlPiA9IG5ldyBBcnJheTxNYXRlcmlhbEJhc2U+KCk7XHJcblx0XHRudW1fbWF0ZXJpYWxzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdHZhciBtYXRlcmlhbE5hbWVzOkFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cdFx0bWF0ZXJpYWxzX3BhcnNlZCA9IDA7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlNYXRlcmlhbDpBcnJheTxhbnk+O1xyXG5cclxuXHRcdHdoaWxlIChtYXRlcmlhbHNfcGFyc2VkIDwgbnVtX21hdGVyaWFscykge1xyXG5cdFx0XHR2YXIgbWF0X2lkOm51bWJlcjtcclxuXHRcdFx0bWF0X2lkID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0cmV0dXJuZWRBcnJheU1hdGVyaWFsID0gdGhpcy5nZXRBc3NldEJ5SUQobWF0X2lkLCBbQXNzZXRUeXBlLk1BVEVSSUFMXSlcclxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheU1hdGVyaWFsWzBdKSAmJiAobWF0X2lkID4gMCkpIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBNYXRlcmlhbCBOciBcIiArIG1hdGVyaWFsc19wYXJzZWQgKyBcIiAoSUQgPSBcIiArIG1hdF9pZCArIFwiICkgZm9yIHRoaXMgTWVzaFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG06TWF0ZXJpYWxCYXNlID0gPE1hdGVyaWFsQmFzZT4gcmV0dXJuZWRBcnJheU1hdGVyaWFsWzFdO1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxzLnB1c2gobSk7XHJcblx0XHRcdG1hdGVyaWFsTmFtZXMucHVzaChtLm5hbWUpO1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBtZXNoOk1lc2ggPSBuZXcgTWVzaChnZW9tLCBudWxsKTtcclxuXHJcblxyXG5cdFx0aWYgKG1hdGVyaWFscy5sZW5ndGggPj0gMSAmJiBtZXNoLnN1Yk1lc2hlcy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWxzWzBdO1xyXG5cdFx0fSBlbHNlIGlmIChtYXRlcmlhbHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHR2YXIgaTpudW1iZXI7XHJcblxyXG5cdFx0XHQvLyBBc3NpZ24gZWFjaCBzdWItbWVzaCBpbiB0aGUgbWVzaCBhIG1hdGVyaWFsIGZyb20gdGhlIGxpc3QuIElmIG1vcmUgc3ViLW1lc2hlc1xyXG5cdFx0XHQvLyB0aGFuIG1hdGVyaWFscywgcmVwZWF0IHRoZSBsYXN0IG1hdGVyaWFsIGZvciBhbGwgcmVtYWluaW5nIHN1Yi1tZXNoZXMuXHJcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXNoLnN1Yk1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdG1lc2guc3ViTWVzaGVzW2ldLm1hdGVyaWFsID0gbWF0ZXJpYWxzW01hdGgubWluKG1hdGVyaWFscy5sZW5ndGggLSAxLCBpKV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0bWVzaC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1lc2gsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBtZXNoO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIExpYnJhcnktTWVzaDogTmFtZSA9ICdcIiArIG5hbWUgKyBcInwgR2VvbWV0cnktTmFtZSA9IFwiICsgZ2VvbS5uYW1lICsgXCIgfCBTdWJNZXNoZXMgPSBcIiArIG1lc2guc3ViTWVzaGVzLmxlbmd0aCArIFwiIHwgTWF0LU5hbWVzID0gXCIgKyBtYXRlcmlhbE5hbWVzLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBCbG9jayBJRCA9IDIzXHJcblx0cHJpdmF0ZSBwYXJzZU1lc2hJbnN0YW5jZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBudW1fbWF0ZXJpYWxzOm51bWJlcjtcclxuXHRcdHZhciBtYXRlcmlhbHNfcGFyc2VkOm51bWJlcjtcclxuXHRcdHZhciBwYXJlbnQ6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcclxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XHJcblx0XHR2YXIgZGF0YV9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIGdlb206R2VvbWV0cnk7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheUdlb21ldHJ5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChkYXRhX2lkLCBbQXNzZXRUeXBlLkdFT01FVFJZXSlcclxuXHJcblx0XHRpZiAocmV0dXJuZWRBcnJheUdlb21ldHJ5WzBdKSB7XHJcblx0XHRcdGdlb20gPSA8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlHZW9tZXRyeVsxXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgR2VvbWV0cnkgZm9yIHRoaXMgTWVzaC4gQSBlbXB0eSBHZW9tZXRyeSBpcyBjcmVhdGVkIVwiKTtcclxuXHRcdFx0Z2VvbSA9IG5ldyBHZW9tZXRyeSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5nZW9JRCA9IGRhdGFfaWQ7XHJcblx0XHR2YXIgbWF0ZXJpYWxzOkFycmF5PE1hdGVyaWFsQmFzZT4gPSBuZXcgQXJyYXk8TWF0ZXJpYWxCYXNlPigpO1xyXG5cdFx0bnVtX21hdGVyaWFscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHR2YXIgbWF0ZXJpYWxOYW1lczpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHRcdG1hdGVyaWFsc19wYXJzZWQgPSAwO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5TWF0ZXJpYWw6QXJyYXk8YW55PjtcclxuXHJcblx0XHR3aGlsZSAobWF0ZXJpYWxzX3BhcnNlZCA8IG51bV9tYXRlcmlhbHMpIHtcclxuXHRcdFx0dmFyIG1hdF9pZDpudW1iZXI7XHJcblx0XHRcdG1hdF9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHJldHVybmVkQXJyYXlNYXRlcmlhbCA9IHRoaXMuZ2V0QXNzZXRCeUlEKG1hdF9pZCwgW0Fzc2V0VHlwZS5NQVRFUklBTF0pXHJcblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlNYXRlcmlhbFswXSkgJiYgKG1hdF9pZCA+IDApKSB7XHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgTWF0ZXJpYWwgTnIgXCIgKyBtYXRlcmlhbHNfcGFyc2VkICsgXCIgKElEID0gXCIgKyBtYXRfaWQgKyBcIiApIGZvciB0aGlzIE1lc2hcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtOk1hdGVyaWFsQmFzZSA9IDxNYXRlcmlhbEJhc2U+IHJldHVybmVkQXJyYXlNYXRlcmlhbFsxXTtcclxuXHJcblx0XHRcdG1hdGVyaWFscy5wdXNoKG0pO1xyXG5cdFx0XHRtYXRlcmlhbE5hbWVzLnB1c2gobS5uYW1lKTtcclxuXHJcblx0XHRcdG1hdGVyaWFsc19wYXJzZWQrKztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbWVzaDpNZXNoID0gbmV3IE1lc2goZ2VvbSwgbnVsbCk7XHJcblx0XHRtZXNoLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcclxuXHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheVBhcmVudDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pXHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlQYXJlbnRbMF0pIHtcclxuXHRcdFx0dmFyIG9iakM6RGlzcGxheU9iamVjdENvbnRhaW5lciA9IDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdO1xyXG5cdFx0XHRvYmpDLmFkZENoaWxkKG1lc2gpO1xyXG5cdFx0XHRwYXJlbnROYW1lID0gb2JqQy5uYW1lO1xyXG5cdFx0fSBlbHNlIGlmIChwYXJfaWQgPiAwKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIE1lc2hcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChtZXNoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAobWF0ZXJpYWxzLmxlbmd0aCA+PSAxICYmIG1lc2guc3ViTWVzaGVzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbHNbMF07XHJcblx0XHR9IGVsc2UgaWYgKG1hdGVyaWFscy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdHZhciBpOm51bWJlcjtcclxuXHJcblx0XHRcdC8vIEFzc2lnbiBlYWNoIHN1Yi1tZXNoIGluIHRoZSBtZXNoIGEgbWF0ZXJpYWwgZnJvbSB0aGUgbGlzdC4gSWYgbW9yZSBzdWItbWVzaGVzXHJcblx0XHRcdC8vIHRoYW4gbWF0ZXJpYWxzLCByZXBlYXQgdGhlIGxhc3QgbWF0ZXJpYWwgZm9yIGFsbCByZW1haW5pbmcgc3ViLW1lc2hlcy5cclxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1lc2guc3ViTWVzaGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bWVzaC5zdWJNZXNoZXNbaV0ubWF0ZXJpYWwgPSBtYXRlcmlhbHNbTWF0aC5taW4obWF0ZXJpYWxzLmxlbmd0aCAtIDEsIGkpXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XHJcblx0XHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4LCA1OkFXRFBhcnNlci5CT09MfSk7XHJcblx0XHRcdG1lc2gucGl2b3QgPSBuZXcgVmVjdG9yM0QoPG51bWJlcj5wcm9wcy5nZXQoMSwgMCksIDxudW1iZXI+cHJvcHMuZ2V0KDIsIDApLCA8bnVtYmVyPiBwcm9wcy5nZXQoMywgMCkpO1xyXG5cdFx0XHRtZXNoLmNhc3RzU2hhZG93cyA9IHByb3BzLmdldCg1LCB0cnVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1lc2guZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtZXNoLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWVzaDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBNZXNoOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lICsgXCJ8IEdlb21ldHJ5LU5hbWUgPSBcIiArIGdlb20ubmFtZSArIFwiIHwgU3ViTWVzaGVzID0gXCIgKyBtZXNoLnN1Yk1lc2hlcy5sZW5ndGggKyBcIiB8IE1hdC1OYW1lcyA9IFwiICsgbWF0ZXJpYWxOYW1lcy50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvL0Jsb2NrIElEIDMxXHJcblx0cHJpdmF0ZSBwYXJzZVNreWJveEluc3RhbmNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIGN1YmVUZXhBZGRyOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlDdWJlVGV4OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChjdWJlVGV4QWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcclxuXHRcdGlmICgoIXJldHVybmVkQXJyYXlDdWJlVGV4WzBdKSAmJiAoY3ViZVRleEFkZHIgIT0gMCkpXHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBDdWJldGV4dHVyZSAoSUQgPSBcIiArIGN1YmVUZXhBZGRyICsgXCIgKSBmb3IgdGhpcyBTa3lib3hcIik7XHJcblx0XHR2YXIgYXNzZXQ6U2t5Ym94ID0gbmV3IFNreWJveCg8SW1hZ2VDdWJlVGV4dHVyZT4gcmV0dXJuZWRBcnJheUN1YmVUZXhbMV0pO1xyXG5cclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpXHJcblx0XHRhc3NldC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoYXNzZXQsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa3lib3g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgQ3ViZVRleHR1cmUtTmFtZSA9IFwiICsgKDxJbWFnZUN1YmVUZXh0dXJlPiByZXR1cm5lZEFycmF5Q3ViZVRleFsxXSkubmFtZSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDQxXHJcblx0cHJpdmF0ZSBwYXJzZUxpZ2h0KGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGxpZ2h0OkxpZ2h0QmFzZTtcclxuXHRcdHZhciBuZXdTaGFkb3dNYXBwZXI6U2hhZG93TWFwcGVyQmFzZTtcclxuXHJcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbGlnaHRUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9wcm9wc05yVHlwZSwgMjp0aGlzLl9wcm9wc05yVHlwZSwgMzpBV0RQYXJzZXIuQ09MT1IsIDQ6dGhpcy5fcHJvcHNOclR5cGUsIDU6dGhpcy5fcHJvcHNOclR5cGUsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkNPTE9SLCA4OnRoaXMuX3Byb3BzTnJUeXBlLCA5OkFXRFBhcnNlci5VSU5UOCwgMTA6QVdEUGFyc2VyLlVJTlQ4LCAxMTp0aGlzLl9wcm9wc05yVHlwZSwgMTI6QVdEUGFyc2VyLlVJTlQxNiwgMjE6dGhpcy5fbWF0cml4TnJUeXBlLCAyMjp0aGlzLl9tYXRyaXhOclR5cGUsIDIzOnRoaXMuX21hdHJpeE5yVHlwZX0pO1xyXG5cdFx0dmFyIHNoYWRvd01hcHBlclR5cGU6bnVtYmVyID0gcHJvcHMuZ2V0KDksIDApO1xyXG5cdFx0dmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcclxuXHRcdHZhciBsaWdodFR5cGVzOkFycmF5PHN0cmluZz4gPSBbXCJVbnN1cHBvcnRlZCBMaWdodFR5cGVcIiwgXCJQb2ludExpZ2h0XCIsIFwiRGlyZWN0aW9uYWxMaWdodFwiXTtcclxuXHRcdHZhciBzaGFkb3dNYXBwZXJUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiTm8gU2hhZG93TWFwcGVyXCIsIFwiRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXJcIiwgXCJOZWFyRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXJcIiwgXCJDYXNjYWRlU2hhZG93TWFwcGVyXCIsIFwiQ3ViZU1hcFNoYWRvd01hcHBlclwiXTtcclxuXHJcblx0XHRpZiAobGlnaHRUeXBlID09IDEpIHtcclxuXHRcdFx0bGlnaHQgPSBuZXcgUG9pbnRMaWdodCgpO1xyXG5cclxuXHRcdFx0KDxQb2ludExpZ2h0PiBsaWdodCkucmFkaXVzID0gcHJvcHMuZ2V0KDEsIDkwMDAwKTtcclxuXHRcdFx0KDxQb2ludExpZ2h0PiBsaWdodCkuZmFsbE9mZiA9IHByb3BzLmdldCgyLCAxMDAwMDApO1xyXG5cclxuXHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPiAwKSB7XHJcblx0XHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPT0gNCkge1xyXG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyID0gbmV3IEN1YmVNYXBTaGFkb3dNYXBwZXIoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxpZ2h0LnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGxpZ2h0VHlwZSA9PSAyKSB7XHJcblxyXG5cdFx0XHRsaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KHByb3BzLmdldCgyMSwgMCksIHByb3BzLmdldCgyMiwgLTEpLCBwcm9wcy5nZXQoMjMsIDEpKTtcclxuXHJcblx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID4gMCkge1xyXG5cdFx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID09IDEpIHtcclxuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlciA9IG5ldyBEaXJlY3Rpb25hbFNoYWRvd01hcHBlcigpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9pZiAoc2hhZG93TWFwcGVyVHlwZSA9PSAyKVxyXG5cdFx0XHRcdC8vICBuZXdTaGFkb3dNYXBwZXIgPSBuZXcgTmVhckRpcmVjdGlvbmFsU2hhZG93TWFwcGVyKHByb3BzLmdldCgxMSwgMC41KSk7XHJcblx0XHRcdFx0Ly9pZiAoc2hhZG93TWFwcGVyVHlwZSA9PSAzKVxyXG5cdFx0XHRcdC8vICAgbmV3U2hhZG93TWFwcGVyID0gbmV3IENhc2NhZGVTaGFkb3dNYXBwZXIocHJvcHMuZ2V0KDEyLCAzKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdFx0bGlnaHQuY29sb3IgPSBwcm9wcy5nZXQoMywgMHhmZmZmZmYpO1xyXG5cdFx0bGlnaHQuc3BlY3VsYXIgPSBwcm9wcy5nZXQoNCwgMS4wKTtcclxuXHRcdGxpZ2h0LmRpZmZ1c2UgPSBwcm9wcy5nZXQoNSwgMS4wKTtcclxuXHRcdGxpZ2h0LmFtYmllbnRDb2xvciA9IHByb3BzLmdldCg3LCAweGZmZmZmZik7XHJcblx0XHRsaWdodC5hbWJpZW50ID0gcHJvcHMuZ2V0KDgsIDAuMCk7XHJcblxyXG5cdFx0Ly8gaWYgYSBzaGFkb3dNYXBwZXIgaGFzIGJlZW4gY3JlYXRlZCwgYWRqdXN0IHRoZSBkZXB0aE1hcFNpemUgaWYgbmVlZGVkLCBhc3NpZ24gdG8gbGlnaHQgYW5kIHNldCBjYXN0U2hhZG93cyB0byB0cnVlXHJcblx0XHRpZiAobmV3U2hhZG93TWFwcGVyKSB7XHJcblx0XHRcdGlmIChuZXdTaGFkb3dNYXBwZXIgaW5zdGFuY2VvZiBDdWJlTWFwU2hhZG93TWFwcGVyKSB7XHJcblx0XHRcdFx0aWYgKHByb3BzLmdldCgxMCwgMSkgIT0gMSkge1xyXG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyLmRlcHRoTWFwU2l6ZSA9IHRoaXMuX2RlcHRoU2l6ZURpY1twcm9wcy5nZXQoMTAsIDEpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHByb3BzLmdldCgxMCwgMikgIT0gMikge1xyXG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyLmRlcHRoTWFwU2l6ZSA9IHRoaXMuX2RlcHRoU2l6ZURpY1twcm9wcy5nZXQoMTAsIDIpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxpZ2h0LnNoYWRvd01hcHBlciA9IG5ld1NoYWRvd01hcHBlcjtcclxuXHRcdFx0bGlnaHQuY2FzdHNTaGFkb3dzID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocGFyX2lkICE9IDApIHtcclxuXHJcblx0XHRcdHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcclxuXHJcblx0XHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XHJcblx0XHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdKS5hZGRDaGlsZChsaWdodCk7XHJcblx0XHRcdFx0cGFyZW50TmFtZSA9ICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVBhcmVudFsxXSkubmFtZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBMaWdodFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcclxuXHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQobGlnaHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDwgSUFzc2V0PiBsaWdodCwgbmFtZSk7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBsaWdodDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTGlnaHQ6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVHlwZSA9IFwiICsgbGlnaHRUeXBlc1tsaWdodFR5cGVdICsgXCIgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSArIFwiIHwgU2hhZG93TWFwcGVyLVR5cGUgPSBcIiArIHNoYWRvd01hcHBlclR5cGVzW3NoYWRvd01hcHBlclR5cGVdKTtcclxuXHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gNDNcclxuXHRwcml2YXRlIHBhcnNlQ2FtZXJhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cclxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XHJcblx0XHR2YXIgcHJvamVjdGlvbjpQcm9qZWN0aW9uQmFzZTtcclxuXHJcblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTsgLy9zZXQgYXMgYWN0aXZlIGNhbWVyYVxyXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTsgLy9sZW5ndGhvZiBsZW5zZXMgLSBub3QgdXNlZCB5ZXRcclxuXHJcblx0XHR2YXIgcHJvamVjdGlvbnR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDEwNDp0aGlzLl9wcm9wc05yVHlwZX0pO1xyXG5cclxuXHRcdHN3aXRjaCAocHJvamVjdGlvbnR5cGUpIHtcclxuXHRcdFx0Y2FzZSA1MDAxOlxyXG5cdFx0XHRcdHByb2plY3Rpb24gPSBuZXcgUGVyc3BlY3RpdmVQcm9qZWN0aW9uKHByb3BzLmdldCgxMDEsIDYwKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNTAwMjpcclxuXHRcdFx0XHRwcm9qZWN0aW9uID0gbmV3IE9ydGhvZ3JhcGhpY1Byb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgNTAwKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNTAwMzpcclxuXHRcdFx0XHRwcm9qZWN0aW9uID0gbmV3IE9ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgLTQwMCksIHByb3BzLmdldCgxMDIsIDQwMCksIHByb3BzLmdldCgxMDMsIC0zMDApLCBwcm9wcy5nZXQoMTA0LCAzMDApKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInVuc3VwcG9ydGVkTGVuc3R5cGVcIik7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjYW1lcmE6Q2FtZXJhID0gbmV3IENhbWVyYShwcm9qZWN0aW9uKTtcclxuXHRcdGNhbWVyYS50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlQYXJlbnQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKVxyXG5cclxuXHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XHJcblxyXG5cdFx0XHR2YXIgb2JqQzpEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV07XHJcblx0XHRcdG9iakMuYWRkQ2hpbGQoY2FtZXJhKTtcclxuXHJcblx0XHRcdHBhcmVudE5hbWUgPSBvYmpDLm5hbWU7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChwYXJfaWQgPiAwKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIENhbWVyYVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XHJcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGNhbWVyYSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FtZXJhLm5hbWUgPSBuYW1lO1xyXG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcclxuXHRcdGNhbWVyYS5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcclxuXHRcdGNhbWVyYS5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNhbWVyYSwgbmFtZSk7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjYW1lcmFcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDYW1lcmE6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUHJvamVjdGlvbnR5cGUgPSBcIiArIHByb2plY3Rpb24gKyBcIiB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gNTFcclxuXHRwcml2YXRlIHBhcnNlTGlnaHRQaWNrZXIoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbnVtTGlnaHRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBsaWdodHNBcnJheTpBcnJheTxMaWdodEJhc2U+ID0gbmV3IEFycmF5PExpZ2h0QmFzZT4oKTtcclxuXHRcdHZhciBrOm51bWJlciA9IDA7XHJcblx0XHR2YXIgbGlnaHRJRDpudW1iZXIgPSAwO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5TGlnaHQ6QXJyYXk8YW55PjtcclxuXHRcdHZhciBsaWdodHNBcnJheU5hbWVzOkFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuXHRcdGZvciAoayA9IDA7IGsgPCBudW1MaWdodHM7IGsrKykge1xyXG5cdFx0XHRsaWdodElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0cmV0dXJuZWRBcnJheUxpZ2h0ID0gdGhpcy5nZXRBc3NldEJ5SUQobGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pXHJcblxyXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheUxpZ2h0WzBdKSB7XHJcblx0XHRcdFx0bGlnaHRzQXJyYXkucHVzaCg8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5TGlnaHRbMV0pO1xyXG5cdFx0XHRcdGxpZ2h0c0FycmF5TmFtZXMucHVzaCgoIDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlMaWdodFsxXSkubmFtZSk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgTGlnaHQgTnIgXCIgKyBrICsgXCIgKElEID0gXCIgKyBsaWdodElEICsgXCIgKSBmb3IgdGhpcyBMaWdodFBpY2tlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChsaWdodHNBcnJheS5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHRoaXMgTGlnaHRQaWNrZXIsIGNhdXNlIG5vIExpZ2h0IHdhcyBmb3VuZC5cIik7XHJcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0XHRyZXR1cm47IC8vcmV0dXJuIHdpdGhvdXQgYW55IG1vcmUgcGFyc2luZyBmb3IgdGhpcyBibG9ja1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBsaWdodFBpY2s6TGlnaHRQaWNrZXJCYXNlID0gbmV3IFN0YXRpY0xpZ2h0UGlja2VyKGxpZ2h0c0FycmF5KTtcclxuXHRcdGxpZ2h0UGljay5uYW1lID0gbmFtZTtcclxuXHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGxpZ2h0UGljaywgbmFtZSk7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBsaWdodFBpY2tcclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFN0YXRpY0xpZ2h0UGlja2VyOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgbGlnaHRzQXJyYXlOYW1lcy50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA4MVxyXG5cdHByaXZhdGUgcGFyc2VNYXRlcmlhbChibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdC8vIFRPRE86IG5vdCB1c2VkXHJcblx0XHQvLy8vYmxvY2tMZW5ndGggPSBibG9jay5sZW47XHJcblx0XHR2YXIgbmFtZTpzdHJpbmc7XHJcblx0XHR2YXIgdHlwZTpudW1iZXI7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcztcclxuXHRcdHZhciBtYXQ6TWV0aG9kTWF0ZXJpYWw7XHJcblx0XHR2YXIgYXR0cmlidXRlczpPYmplY3Q7XHJcblx0XHR2YXIgZmluYWxpemU6Ym9vbGVhbjtcclxuXHRcdHZhciBudW1fbWV0aG9kczpudW1iZXI7XHJcblx0XHR2YXIgbWV0aG9kc19wYXJzZWQ6bnVtYmVyO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcclxuXHJcblx0XHRuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0bnVtX21ldGhvZHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHJcblx0XHQvLyBSZWFkIG1hdGVyaWFsIG51bWVyaWNhbCBwcm9wZXJ0aWVzXHJcblx0XHQvLyAoMT1jb2xvciwgMj1iaXRtYXAgdXJsLCAxMD1hbHBoYSwgMTE9YWxwaGFfYmxlbmRpbmcsIDEyPWFscGhhX3RocmVzaG9sZCwgMTM9cmVwZWF0KVxyXG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7IDE6QVdEUGFyc2VyLklOVDMyLCAyOkFXRFBhcnNlci5CQUREUiwgMTA6dGhpcy5fcHJvcHNOclR5cGUsIDExOkFXRFBhcnNlci5CT09MLCAxMjp0aGlzLl9wcm9wc05yVHlwZSwgMTM6QVdEUGFyc2VyLkJPT0x9KTtcclxuXHJcblx0XHRtZXRob2RzX3BhcnNlZCA9IDA7XHJcblx0XHR3aGlsZSAobWV0aG9kc19wYXJzZWQgPCBudW1fbWV0aG9kcykge1xyXG5cdFx0XHR2YXIgbWV0aG9kX3R5cGU6bnVtYmVyO1xyXG5cclxuXHRcdFx0bWV0aG9kX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdFx0bWV0aG9kc19wYXJzZWQgKz0gMTtcclxuXHRcdH1cclxuXHRcdHZhciBkZWJ1Z1N0cmluZzpzdHJpbmcgPSBcIlwiO1xyXG5cdFx0YXR0cmlidXRlcyA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0aWYgKHR5cGUgPT09IDEpIHsgLy8gQ29sb3IgbWF0ZXJpYWxcclxuXHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBDb2xvck1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xyXG5cdFx0XHR2YXIgY29sb3I6bnVtYmVyO1xyXG5cdFx0XHRjb2xvciA9IHByb3BzLmdldCgxLCAweGZmZmZmZik7XHJcblx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA8IDIpIHtcclxuXHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IsIHByb3BzLmdldCgxMCwgMS4wKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yKTtcclxuXHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IDIpIHtcclxuXHRcdFx0dmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTtcclxuXHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0ZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAodGV4X2FkZHIgPiAwKSlcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRGlmZnN1ZVRleHR1cmUgKElEID0gXCIgKyB0ZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWF0ZXJpYWxcIik7XHJcblxyXG5cdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlIDwgMikge1xyXG5cdFx0XHRcdG1hdC5hbHBoYUJsZW5kaW5nID0gcHJvcHMuZ2V0KDExLCBmYWxzZSk7XHJcblx0XHRcdFx0bWF0LmFscGhhID0gcHJvcHMuZ2V0KDEwLCAxLjApO1xyXG5cdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyBtYXQubmFtZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xyXG5cdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoTXVsdGlQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIG1hdC5uYW1lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bWF0LmV4dHJhID0gYXR0cmlidXRlcztcclxuXHRcdG1hdC5hbHBoYVRocmVzaG9sZCA9IHByb3BzLmdldCgxMiwgMC4wKTtcclxuXHRcdG1hdC5yZXBlYXQgPSBwcm9wcy5nZXQoMTMsIGZhbHNlKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1hdCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGVidWdTdHJpbmcpO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEJsb2NrIElEID0gODEgQVdEMi4xXHJcblx0cHJpdmF0ZSBwYXJzZU1hdGVyaWFsX3YxKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcclxuXHRcdHZhciBub3JtYWxUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcblx0XHR2YXIgc3BlY1RleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XHJcblxyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIHR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgbnVtX21ldGhvZHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMzIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgNDpBV0RQYXJzZXIuVUlOVDgsIDU6QVdEUGFyc2VyLkJPT0wsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkJPT0wsIDg6QVdEUGFyc2VyLkJPT0wsIDk6QVdEUGFyc2VyLlVJTlQ4LCAxMDp0aGlzLl9wcm9wc05yVHlwZSwgMTE6QVdEUGFyc2VyLkJPT0wsIDEyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMzpBV0RQYXJzZXIuQk9PTCwgMTU6dGhpcy5fcHJvcHNOclR5cGUsIDE2OkFXRFBhcnNlci5VSU5UMzIsIDE3OkFXRFBhcnNlci5CQUREUiwgMTg6dGhpcy5fcHJvcHNOclR5cGUsIDE5OnRoaXMuX3Byb3BzTnJUeXBlLCAyMDpBV0RQYXJzZXIuVUlOVDMyLCAyMTpBV0RQYXJzZXIuQkFERFIsIDIyOkFXRFBhcnNlci5CQUREUn0pO1xyXG5cdFx0dmFyIHNwZXppYWxUeXBlOm51bWJlciA9IHByb3BzLmdldCg0LCAwKTtcclxuXHRcdHZhciBkZWJ1Z1N0cmluZzpzdHJpbmcgPSBcIlBhcnNlZCBNYXRlcmlhbCBcIjtcclxuXHJcblx0XHRpZiAoc3BlemlhbFR5cGUgPj0gMikgey8vdGhpcyBpcyBubyBzdXBwb3J0ZWQgbWF0ZXJpYWxcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiTWF0ZXJpYWwtc3BlemlhbFR5cGUgJ1wiICsgc3BlemlhbFR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCwgY2FuIG9ubHkgYmUgMDpzaW5nbGVQYXNzLCAxOk11bHRpUGFzcyAhXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHR5cGUgPD0gMikgey8vIENvbG9yIG1hdGVyaWFsXHJcblx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA9PSAxKVxyXG5cdFx0XHRcdHNwZXppYWxUeXBlID0gMDtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5tYXRlcmlhbE1vZGUgPT0gMilcclxuXHRcdFx0XHRzcGV6aWFsVHlwZSA9IDE7XHJcblxyXG5cdFx0XHRpZiAoc3BlemlhbFR5cGUgPCAyKSB7Ly90aGlzIGlzIFNpbmdsZVBhc3Mgb3IgTXVsdGlQYXNzXHJcblxyXG5cdFx0XHRcdGlmICh0eXBlID09IDEpIHsvLyBDb2xvciBtYXRlcmlhbFxyXG5cdFx0XHRcdFx0dmFyIGNvbG9yOm51bWJlciA9IHByb3BzLmdldCgxLCAweGNjY2NjYyk7Ly9UT0RPIHRlbXBvcmFyaWx5IHN3YXBwZWQgc28gdGhhdCBkaWZmdXNlIGNvbG9yIGdvZXMgdG8gYW1iaWVudFxyXG5cclxuXHRcdFx0XHRcdGlmIChzcGV6aWFsVHlwZSA9PSAxKSB7Ly9cdE11bHRpUGFzc01hdGVyaWFsXHJcblx0XHRcdFx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvcik7XHJcblx0XHRcdFx0XHRcdG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7IC8vXHRTaW5nbGVQYXNzTWF0ZXJpYWxcclxuXHRcdFx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yLCBwcm9wcy5nZXQoMTAsIDEuMCkpO1xyXG5cdFx0XHRcdFx0XHRtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIENvbG9yTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgXCI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PSAyKSB7Ly8gdGV4dHVyZSBtYXRlcmlhbFxyXG5cdFx0XHRcdFx0dmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTsvL1RPRE8gdGVtcG9yYXJpbHkgc3dhcHBlZCBzbyB0aGF0IGRpZmZ1c2UgdGV4dHVyZSBnb2VzIHRvIGFtYmllbnRcclxuXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0ZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHRleF9hZGRyID4gMCkpXHJcblx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbWJpZW50VGV4dHVyZSAoSUQgPSBcIiArIHRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgdGV4dHVyZTpUZXh0dXJlMkRCYXNlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHJcblx0XHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwodGV4dHVyZSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNwZXppYWxUeXBlID09IDEpIHsvLyBNdWx0aVBhc3NNYXRlcmlhbFxyXG5cdFx0XHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgdGV4dHVyZS5uYW1lO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHsvL1x0U2luZ2xlUGFzc01hdGVyaWFsXHJcblx0XHRcdFx0XHRcdG1hdC5hbHBoYSA9IHByb3BzLmdldCgxMCwgMS4wKTtcclxuXHRcdFx0XHRcdFx0bWF0LmFscGhhQmxlbmRpbmcgPSBwcm9wcy5nZXQoMTEsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyB0ZXh0dXJlLm5hbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgZGlmZnVzZVRleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRcdFx0XHR2YXIgZGlmZnVzZVRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgxNywgMCk7XHJcblxyXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChkaWZmdXNlVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoZGlmZnVzZVRleF9hZGRyICE9IDApKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRGlmZnVzZVRleHR1cmUgKElEID0gXCIgKyBkaWZmdXNlVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHRkaWZmdXNlVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XHJcblxyXG5cdFx0XHRcdGlmIChkaWZmdXNlVGV4dHVyZSkge1xyXG5cdFx0XHRcdFx0bWF0LmRpZmZ1c2VUZXh0dXJlID0gZGlmZnVzZVRleHR1cmU7XHJcblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VUZXh0dXJlLU5hbWUgPSBcIiArIGRpZmZ1c2VUZXh0dXJlLm5hbWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgbm9ybWFsVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDMsIDApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQobm9ybWFsVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAobm9ybWFsVGV4X2FkZHIgIT0gMCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBOb3JtYWxUZXh0dXJlIChJRCA9IFwiICsgbm9ybWFsVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdG5vcm1hbFRleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArIG5vcm1hbFRleHR1cmUubmFtZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBzcGVjVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoc3BlY1RleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHJcblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHNwZWNUZXhfYWRkciAhPSAwKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNwZWN1bGFyVGV4dHVyZSAoSUQgPSBcIiArIHNwZWNUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdFx0XHRzcGVjVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyVGV4dHVyZS1OYW1lID0gXCIgKyBzcGVjVGV4dHVyZS5uYW1lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGxpZ2h0UGlja2VyQWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMjIsIDApO1xyXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChsaWdodFBpY2tlckFkZHIsIFtBc3NldFR5cGUuTElHSFRfUElDS0VSXSlcclxuXHJcblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKGxpZ2h0UGlja2VyQWRkcikpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodFBpY2tlciAoSUQgPSBcIiArIGxpZ2h0UGlja2VyQWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1hdC5saWdodFBpY2tlciA9IDxMaWdodFBpY2tlckJhc2U+IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHQvL2RlYnVnU3RyaW5nKz1cIiB8IExpZ2h0cGlja2VyLU5hbWUgPSBcIitMaWdodFBpY2tlckJhc2UocmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1hdC5zbW9vdGggPSBwcm9wcy5nZXQoNSwgdHJ1ZSk7XHJcblx0XHRcdFx0bWF0Lm1pcG1hcCA9IHByb3BzLmdldCg2LCB0cnVlKTtcclxuXHRcdFx0XHRtYXQuYm90aFNpZGVzID0gcHJvcHMuZ2V0KDcsIGZhbHNlKTtcclxuXHRcdFx0XHRtYXQuYWxwaGFQcmVtdWx0aXBsaWVkID0gcHJvcHMuZ2V0KDgsIGZhbHNlKTtcclxuXHRcdFx0XHRtYXQuYmxlbmRNb2RlID0gdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDksIDApXTtcclxuXHRcdFx0XHRtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdGlmIChub3JtYWxUZXh0dXJlKVxyXG5cdFx0XHRcdFx0bWF0Lm5vcm1hbE1hcCA9IG5vcm1hbFRleHR1cmU7XHJcblxyXG5cdFx0XHRcdGlmIChzcGVjVGV4dHVyZSlcclxuXHRcdFx0XHRcdG1hdC5zcGVjdWxhck1hcCA9IHNwZWNUZXh0dXJlO1xyXG5cclxuXHRcdFx0XHRtYXQuYWxwaGFUaHJlc2hvbGQgPSBwcm9wcy5nZXQoMTIsIDAuMCk7XHJcblx0XHRcdFx0bWF0LmFtYmllbnQgPSBwcm9wcy5nZXQoMTUsIDEuMCk7XHJcblx0XHRcdFx0bWF0LmRpZmZ1c2VDb2xvciA9IHByb3BzLmdldCgxNiwgMHhmZmZmZmYpO1xyXG5cdFx0XHRcdG1hdC5zcGVjdWxhciA9IHByb3BzLmdldCgxOCwgMS4wKTtcclxuXHRcdFx0XHRtYXQuZ2xvc3MgPSBwcm9wcy5nZXQoMTksIDUwKTtcclxuXHRcdFx0XHRtYXQuc3BlY3VsYXJDb2xvciA9IHByb3BzLmdldCgyMCwgMHhmZmZmZmYpO1xyXG5cclxuXHRcdFx0XHR2YXIgbWV0aG9kc19wYXJzZWQ6bnVtYmVyID0gMDtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyO1xyXG5cclxuXHRcdFx0XHR3aGlsZSAobWV0aG9kc19wYXJzZWQgPCBudW1fbWV0aG9kcykge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZF90eXBlOm51bWJlcjtcclxuXHRcdFx0XHRcdG1ldGhvZF90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdFx0XHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoe1xyXG5cdFx0XHRcdFx0XHQxOiBBV0RQYXJzZXIuQkFERFIsXHJcblx0XHRcdFx0XHRcdDI6IEFXRFBhcnNlci5CQUREUixcclxuXHRcdFx0XHRcdFx0MzogQVdEUGFyc2VyLkJBRERSLFxyXG5cdFx0XHRcdFx0XHQxMDE6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG5cdFx0XHRcdFx0XHQxMDI6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG5cdFx0XHRcdFx0XHQxMDM6IHRoaXMuX3Byb3BzTnJUeXBlLFxyXG5cdFx0XHRcdFx0XHQyMDE6IEFXRFBhcnNlci5VSU5UMzIsXHJcblx0XHRcdFx0XHRcdDIwMjogQVdEUGFyc2VyLlVJTlQzMixcclxuXHRcdFx0XHRcdFx0MzAxOiBBV0RQYXJzZXIuVUlOVDE2LFxyXG5cdFx0XHRcdFx0XHQzMDI6IEFXRFBhcnNlci5VSU5UMTYsXHJcblx0XHRcdFx0XHRcdDQwMTogQVdEUGFyc2VyLlVJTlQ4LFxyXG5cdFx0XHRcdFx0XHQ0MDI6IEFXRFBhcnNlci5VSU5UOCxcclxuXHRcdFx0XHRcdFx0NjAxOiBBV0RQYXJzZXIuQ09MT1IsXHJcblx0XHRcdFx0XHRcdDYwMjogQVdEUGFyc2VyLkNPTE9SLFxyXG5cdFx0XHRcdFx0XHQ3MDE6IEFXRFBhcnNlci5CT09MLFxyXG5cdFx0XHRcdFx0XHQ3MDI6IEFXRFBhcnNlci5CT09MLFxyXG5cdFx0XHRcdFx0XHQ4MDE6IEFXRFBhcnNlci5NVFg0eDRcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAobWV0aG9kX3R5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSA5OTk6IC8vd3JhcHBlci1NZXRob2RzIHRoYXQgd2lsbCBsb2FkIGEgcHJldmlvdXMgcGFyc2VkIEVmZmVrdE1ldGhvZCByZXR1cm5lZFxyXG5cclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuRUZGRUNUU19NRVRIT0RdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRWZmZWN0TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXQuYWRkRWZmZWN0TWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRWZmZWN0TWV0aG9kLU5hbWUgPSBcIiArICg8RWZmZWN0TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSA5OTg6IC8vd3JhcHBlci1NZXRob2RzIHRoYXQgd2lsbCBsb2FkIGEgcHJldmlvdXMgcGFyc2VkIFNoYWRvd01hcE1ldGhvZFxyXG5cclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2hhZG93TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXQuc2hhZG93TWV0aG9kID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU2hhZG93TWV0aG9kLU5hbWUgPSBcIiArICg8U2hhZG93TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSAxOiAvL0Vudk1hcEFtYmllbnRNZXRob2RcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0sIFwiQ3ViZVRleHR1cmVcIik7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBBbWJpZW50TWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0XHRcdFx0bWF0LmFtYmllbnRNZXRob2QgPSBuZXcgQW1iaWVudEVudk1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IEFtYmllbnRFbnZNYXBNZXRob2QgfCBFbnZNYXAtTmFtZSA9XCIgKyAoPEN1YmVUZXh0dXJlQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdGNhc2UgNTE6IC8vRGVwdGhEaWZmdXNlTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZURlcHRoTWV0aG9kKCk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlRGVwdGhNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA1MjogLy9HcmFkaWVudERpZmZ1c2VNZXRob2RcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBHcmFkaWVudERpZmZ1c2VUZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEdyYWRpZW50RGlmZnVzZU1ldGhvZFwiKTtcclxuXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlR3JhZGllbnRNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlR3JhZGllbnRNZXRob2QgfCBHcmFkaWVudERpZmZ1c2VUZXh0dXJlLU5hbWUgPVwiICsgKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDUzOiAvL1dyYXBEaWZmdXNlTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZVdyYXBNZXRob2QocHJvcHMuZ2V0KDEwMSwgNSkpO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVdyYXBNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA1NDogLy9MaWdodE1hcERpZmZ1c2VNZXRob2RcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBMaWdodE1hcERpZmZ1c2VNZXRob2RcIik7XHJcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZUxpZ2h0TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg0MDEsIDEwKV0sIGZhbHNlLCBtYXQuZGlmZnVzZU1ldGhvZCk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlTGlnaHRNYXBNZXRob2QgfCBMaWdodE1hcFRleHR1cmUtTmFtZSA9XCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgNTU6IC8vQ2VsRGlmZnVzZU1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VDZWxNZXRob2QocHJvcHMuZ2V0KDQwMSwgMyksIG1hdC5kaWZmdXNlTWV0aG9kKTtcclxuXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VDZWxNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zbW9vdGhuZXNzID0gcHJvcHMuZ2V0KDEwMSwgMC4xKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VDZWxNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA1NjogLy9TdWJTdXJmYWNlU2NhdHRlcmluZ01ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZCgpOyAvL2RlcHRoTWFwU2l6ZSBhbmQgZGVwdGhNYXBPZmZzZXQgP1xyXG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkuc2NhdHRlcmluZyA9IHByb3BzLmdldCgxMDEsIDAuMik7XHJcblx0XHRcdFx0XHRcdFx0Ly9cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZVN1YlN1cmZhY2VNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS50cmFuc2x1Y2VuY3kgPSBwcm9wcy5nZXQoMTAyLCAxKTtcclxuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0KDxEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnNjYXR0ZXJDb2xvciA9IHByb3BzLmdldCg2MDEsIDB4ZmZmZmZmKTtcclxuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSAxMDE6IC8vQW5pc290cm9waWNTcGVjdWxhck1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdG1hdC5zcGVjdWxhck1ldGhvZCA9IG5ldyBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kKCk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kXCI7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMTAyOiAvL1NwZWN1bGFyUGhvbmdNZXRob2RcclxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJQaG9uZ01ldGhvZCgpO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJQaG9uZ01ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDEwMzogLy9DZWxsU3BlY3VsYXJNZXRob2RcclxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJDZWxNZXRob2QocHJvcHMuZ2V0KDEwMSwgMC41KSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcclxuXHRcdFx0XHRcdFx0XHQoPFNwZWN1bGFyQ2VsTWV0aG9kPiBtYXQuc3BlY3VsYXJNZXRob2QpLnNtb290aG5lc3MgPSBwcm9wcy5nZXQoMTAyLCAwLjEpO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJDZWxNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAxMDQ6IC8vU3BlY3VsYXJGcmVzbmVsTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyRnJlc25lbE1ldGhvZChwcm9wcy5nZXQoNzAxLCB0cnVlKSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcclxuXHRcdFx0XHRcdFx0XHQoPFNwZWN1bGFyRnJlc25lbE1ldGhvZD4gbWF0LnNwZWN1bGFyTWV0aG9kKS5mcmVzbmVsUG93ZXIgPSBwcm9wcy5nZXQoMTAxLCA1KTtcclxuXHRcdFx0XHRcdFx0XHQoPFNwZWN1bGFyRnJlc25lbE1ldGhvZD4gbWF0LnNwZWN1bGFyTWV0aG9kKS5ub3JtYWxSZWZsZWN0YW5jZSA9IHByb3BzLmdldCgxMDIsIDAuMSk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckZyZXNuZWxNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAxNTE6Ly9IZWlnaHRNYXBOb3JtYWxNZXRob2QgLSB0aGlvcyBpcyBub3QgaW1wbGVtZW50ZWQgZm9yIG5vdywgYnV0IG1pZ2h0IGFwcGVhciBsYXRlclxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDE1MjogLy9TaW1wbGVXYXRlck5vcm1hbE1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNlY291bmROb3JtYWxNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgU2ltcGxlV2F0ZXJOb3JtYWxNZXRob2RcIik7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFtYXQubm9ybWFsTWFwKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBub3JtYWwgTWFwIG9uIHRoaXMgTWF0ZXJpYWwgdG8gdXNlIHdpdGggdGhpcyBTaW1wbGVXYXRlck5vcm1hbE1ldGhvZFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0bWF0Lm5vcm1hbE1hcCA9IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHRcdFx0bWF0Lm5vcm1hbE1ldGhvZCA9IG5ldyBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZChtYXQubm9ybWFsTWFwLCByZXR1cm5lZEFycmF5WzFdKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IE5vcm1hbFNpbXBsZVdhdGVyTWV0aG9kIHwgU2Vjb25kLU5vcm1hbFRleHR1cmUtTmFtZSA9IFwiICsgKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRcdFx0XHRtZXRob2RzX3BhcnNlZCArPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gdG9kbzogd2Ugc2hvdWxkIG5vdCBuZWVkIHRoaXMgYW55bW9yZSAoaWYgdXNpbmcgdGV4dHVyZS1hdGxhcylcclxuXHRcdGVsc2UgaWYgKCh0eXBlPj0zKSYmKHR5cGU8PTcpKXtcclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBhIGN1cnZlIG1hdGVyaWFsLCB3ZSBjcmVhdGUgaXQsIGZpbmFsaXplIGl0LCBhc3NpZ24gaXQgdG8gYmxvY2stY2FjaGUgYW5kIHJldHVybiBhbmQgcmV0dXJuLlxyXG5cdFx0XHR2YXIgY29sb3I6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDB4Y2NjY2NjKTtcclxuXHRcdFx0ZGVidWdTdHJpbmcrPWNvbG9yO1xyXG5cclxuXHRcdFx0dmFyIGRpZmZ1c2VUZXh0dXJlOlRleHR1cmUyREJhc2U7XHJcblx0XHRcdHZhciBkaWZmdXNlVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDApO1xyXG5cclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRpZmZ1c2VUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoZGlmZnVzZVRleF9hZGRyICE9IDApKSB7XHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIERpZmZ1c2VUZXh0dXJlIChJRCA9IFwiICsgZGlmZnVzZVRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcclxuXHRcdFx0XHRkaWZmdXNlVGV4dHVyZSA9IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuZ2V0RGVmYXVsdFRleHR1cmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0ZGlmZnVzZVRleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0XHR2YXIgY3VydmVfbWF0OkN1cnZlTWF0ZXJpYWwgPSBuZXcgQ3VydmVNYXRlcmlhbChkaWZmdXNlVGV4dHVyZSk7XHJcblx0XHRcdC8vZGVidWdTdHJpbmcrPSBcIiBhbHBoYSA9IFwiK3Byb3BzLmdldCgxMCwgMS4wKStcIiBcIjtcclxuXHRcdFx0ZGVidWdTdHJpbmcrPSBcIiB0ZXh0dXJlID0gXCIrZGlmZnVzZVRleF9hZGRyK1wiIFwiO1xyXG5cdFx0XHRjdXJ2ZV9tYXQuYm90aFNpZGVzID0gdHJ1ZTtcclxuXHRcdFx0Y3VydmVfbWF0LnByZXNlcnZlQWxwaGEgPSB0cnVlO1xyXG5cdFx0XHRjdXJ2ZV9tYXQuYWxwaGFCbGVuZGluZyA9IHRydWU7XHJcblx0XHRcdGN1cnZlX21hdC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBjdXJ2ZV9tYXQsIG5hbWUpO1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGN1cnZlX21hdDtcclxuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRlYnVnU3RyaW5nKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHRcdG1hdC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkZWJ1Z1N0cmluZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gODJcclxuXHRwcml2YXRlIHBhcnNlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHJcblx0XHR2YXIgYXNzZXQ6VGV4dHVyZTJEQmFzZTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XHJcblxyXG5cdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcclxuXHJcblx0XHQvLyBFeHRlcm5hbFxyXG5cdFx0aWYgKHR5cGUgPT0gMCkge1xyXG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHZhciB1cmw6c3RyaW5nO1xyXG5cdFx0XHR1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XHJcblx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBuZXcgVVJMUmVxdWVzdCh1cmwpLCBmYWxzZSwgbnVsbCwgdHJ1ZSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdFx0dmFyIGRhdGE6Qnl0ZUFycmF5O1xyXG5cdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBBV0RQYXJzZXIgLSBGaXggZm9yIEZpcmVGb3ggQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MTUwNzUgLlxyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBDb252ZXJ0aW5nIGRhdGEgdG8gaW1hZ2UgaGVyZSBpbnN0ZWFkIG9mIHBhcnNlciAtIGZpeCBGaXJlRm94IGJ1ZyB3aGVyZSBpbWFnZSB3aWR0aCAvIGhlaWdodCBpcyAwIHdoZW4gY3JlYXRlZCBmcm9tIGRhdGFcclxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB0aGUgYnJvd3NlciB0aW1lIHRvIGluaXRpYWxpc2UgaW1hZ2Ugd2lkdGggLyBoZWlnaHQuXHJcblxyXG5cdFx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbnVsbCwgZmFsc2UsIFBhcnNlclV0aWxzLmJ5dGVBcnJheVRvSW1hZ2UoZGF0YSksIHRydWUpO1xyXG5cdFx0XHQvL3RoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElnbm9yZSBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHR2YXIgdGV4dHVyZVN0eWxlc05hbWVzOkFycmF5PHN0cmluZz4gPSBbXCJleHRlcm5hbFwiLCBcImVtYmVkXCJdXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyBhIFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQml0bWFwIGZvciBUZXh0dXJlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA4M1xyXG5cdHByaXZhdGUgcGFyc2VDdWJlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdC8vYmxvY2tMZW5ndGggPSBibG9jay5sZW47XHJcblx0XHR2YXIgZGF0YV9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIGFzc2V0OkN1YmVUZXh0dXJlQmFzZTtcclxuXHRcdHZhciBpOm51bWJlcjtcclxuXHJcblx0XHR0aGlzLl9jdWJlVGV4dHVyZXMgPSBuZXcgQXJyYXk8YW55PigpO1xyXG5cdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1sgdGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgXSA9IFtdO1xyXG5cclxuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuXHRcdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcclxuXHRcdFx0dGhpcy5fY3ViZVRleHR1cmVzLnB1c2gobnVsbCk7XHJcblxyXG5cdFx0XHQvLyBFeHRlcm5hbFxyXG5cdFx0XHRpZiAodHlwZSA9PSAwKSB7XHJcblx0XHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHZhciB1cmw6c3RyaW5nO1xyXG5cdFx0XHRcdHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcclxuXHJcblx0XHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgKyBcIiNcIiArIGksIG5ldyBVUkxSZXF1ZXN0KHVybCksIGZhbHNlLCBudWxsLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdHZhciBkYXRhOkJ5dGVBcnJheTtcclxuXHRcdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XHJcblxyXG5cdFx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpICsgXCIjXCIgKyBpLCBudWxsLCBmYWxzZSwgUGFyc2VyVXRpbHMuYnl0ZUFycmF5VG9JbWFnZShkYXRhKSwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBJZ25vcmUgZm9yIG5vd1xyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZXh0cmFzID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0dmFyIHRleHR1cmVTdHlsZXNOYW1lczpBcnJheTxzdHJpbmc+ID0gW1wiZXh0ZXJuYWxcIiwgXCJlbWJlZFwiXVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0IHBhcnNpbmcgNiBcIiArIHRleHR1cmVTdHlsZXNOYW1lc1t0eXBlXSArIFwiIEJpdG1hcHMgZm9yIEN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDkxXHJcblx0cHJpdmF0ZSBwYXJzZVNoYXJlZE1ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGFzc2V0OkVmZmVjdE1ldGhvZEJhc2U7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHRhc3NldCA9IHRoaXMucGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQpO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQsIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgRWZmZWN0TWV0aG9kOiBOYW1lID0gXCIgKyBhc3NldC5uYW1lICsgXCIgVHlwZSA9IFwiICsgYXNzZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDkyXHJcblx0cHJpdmF0ZSBwYXJzZVNoYWRvd01ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHR5cGU6bnVtYmVyO1xyXG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcclxuXHRcdHZhciBhc3NldDpTaGFkb3dNZXRob2RCYXNlO1xyXG5cdFx0dmFyIHNoYWRvd0xpZ2h0SUQ6bnVtYmVyO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0c2hhZG93TGlnaHRJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoc2hhZG93TGlnaHRJRCwgW0Fzc2V0VHlwZS5MSUdIVF0pO1xyXG5cclxuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGFyZ2V0TGlnaHQgKElEID0gXCIgKyBzaGFkb3dMaWdodElEICsgXCIgKSBmb3IgdGhpcyBTaGFkb3dNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRhc3NldCA9IHRoaXMucGFyc2VTaGFkb3dNZXRob2RMaXN0KDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlbMV0sIGJsb2NrSUQpO1xyXG5cclxuXHRcdGlmICghYXNzZXQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIGZvciBub3dcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0LCB0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNoYWRvd01hcE1ldGhvZE1ldGhvZDogTmFtZSA9IFwiICsgYXNzZXQubmFtZSArIFwiIHwgVHlwZSA9IFwiICsgYXNzZXQgKyBcIiB8IExpZ2h0LU5hbWUgPSBcIiwgKCA8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5WzFdICkubmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly9CbG9jayBJRCA9IDI1M1xyXG5cdHByaXZhdGUgcGFyc2VDb21tYW5kKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGhhc0Jsb2Nrczpib29sZWFuID0gKCB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKSA9PSAxICk7XHJcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0dmFyIHBhcmVudE9iamVjdDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cdFx0dmFyIHRhcmdldE9iamVjdDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSk7XHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0cGFyZW50T2JqZWN0ID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG51bUNvbW1hbmRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XHJcblx0XHR2YXIgdHlwZUNvbW1hbmQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuXHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUn0pO1xyXG5cclxuXHRcdHN3aXRjaCAodHlwZUNvbW1hbmQpIHtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cclxuXHRcdFx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdHZhciByZXR1cm5lZEFycmF5VGFyZ2V0OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLlRFWFRVUkVfUFJPSkVDVE9SXSk7IC8vZm9yIG5vIG9ubHkgbGlnaHQgaXMgcmVxdWVzdGVkISEhIVxyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5VGFyZ2V0WzBdKSAmJiAodGFyZ2V0SUQgIT0gMCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBsaWdodCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKCBmb3IgdGhpcyBDb21tYW5kQm9jayFcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0YXJnZXRPYmplY3QgPSByZXR1cm5lZEFycmF5VGFyZ2V0WzFdO1xyXG5cclxuXHRcdFx0XHRpZiAocGFyZW50T2JqZWN0KSB7XHJcblx0XHRcdFx0XHRwYXJlbnRPYmplY3QuYWRkQ2hpbGQodGFyZ2V0T2JqZWN0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRhcmdldE9iamVjdC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0YXJnZXRPYmplY3QpIHtcclxuXHRcdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcclxuXHJcblx0XHRcdHRhcmdldE9iamVjdC5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcclxuXHRcdFx0dGFyZ2V0T2JqZWN0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0YXJnZXRPYmplY3RcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDb21tYW5kQmxvY2s6IE5hbWUgPSAnXCIgKyBuYW1lKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvL2Jsb2NrSUQgMjU1XHJcblx0cHJpdmF0ZSBwYXJzZU1ldGFEYXRhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyLCAyOkFXRFBhcnNlci5BV0RTVFJJTkcsIDM6QVdEUGFyc2VyLkFXRFNUUklORywgNDpBV0RQYXJzZXIuQVdEU1RSSU5HLCA1OkFXRFBhcnNlci5BV0RTVFJJTkd9KTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBNZXRhRGF0YUJsb2NrOiBUaW1lU3RhbXAgICAgICAgICA9IFwiICsgcHJvcHMuZ2V0KDEsIDApKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBFbmNvZGVyTmFtZSAgICAgICA9IFwiICsgcHJvcHMuZ2V0KDIsIFwidW5rbm93blwiKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgRW5jb2RlclZlcnNpb24gICAgPSBcIiArIHByb3BzLmdldCgzLCBcInVua25vd25cIikpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRvck5hbWUgICAgID0gXCIgKyBwcm9wcy5nZXQoNCwgXCJ1bmtub3duXCIpKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0b3JWZXJzaW9uICA9IFwiICsgcHJvcHMuZ2V0KDUsIFwidW5rbm93blwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL2Jsb2NrSUQgMjU0XHJcblx0cHJpdmF0ZSBwYXJzZU5hbWVTcGFjZShibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBpZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBuYW1lU3BhY2VTdHJpbmc6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE5hbWVTcGFjZUJsb2NrOiBJRCA9IFwiICsgaWQgKyBcIiB8IFN0cmluZyA9IFwiICsgbmFtZVNwYWNlU3RyaW5nKTtcclxuXHR9XHJcblxyXG5cdC8vLS1QYXJzZXIgVVRJTFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbnMgcmVhZHMgYW5kIGNyZWF0ZXMgYSBTaGFkb3dNZXRob2RNZXRob2RcclxuXHRwcml2YXRlIHBhcnNlU2hhZG93TWV0aG9kTGlzdChsaWdodDpMaWdodEJhc2UsIGJsb2NrSUQ6bnVtYmVyKTpTaGFkb3dNZXRob2RCYXNlXHJcblx0e1xyXG5cclxuXHRcdHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBzaGFkb3dNZXRob2Q6U2hhZG93TWV0aG9kQmFzZTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTCwgODAxOkFXRFBhcnNlci5NVFg0eDR9KTtcclxuXHJcblx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PlxyXG5cdFx0c3dpdGNoIChtZXRob2RUeXBlKSB7XHJcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDEwMDE6IC8vQ2FzY2FkZVNoYWRvd01hcE1ldGhvZFxyXG5cdFx0XHQvL1x0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IGdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5TSEFET1dfTUFQX01FVEhPRF0pO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRfYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNoYWRvd0Jhc2VNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgQ2FzY2FkZVNoYWRvd01hcE1ldGhvZCAtIFNoYWRvd01ldGhvZCBub3QgY3JlYXRlZFwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHR9XHJcblx0XHRcdC8vXHRcdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBDYXNjYWRlU2hhZG93TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAxMDAyOiAvL1NoYWRvd05lYXJNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTaGFkb3dCYXNlTWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFNoYWRvd05lYXJNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93TmVhck1ldGhvZCg8U2hhZG93TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTEwMTogLy9TaGFkb3dGaWx0ZXJlZE1ldGhvZFxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RmlsdGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0KTtcclxuXHRcdFx0XHQoPFNoYWRvd0ZpbHRlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XHJcblx0XHRcdFx0KDxTaGFkb3dGaWx0ZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAxMTAyOiAvL1NoYWRvd0RpdGhlcmVkTWV0aG9kXHJcblxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RGl0aGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0LCA8bnVtYmVyPiBwcm9wcy5nZXQoMjAxLCA1KSk7XHJcblx0XHRcdFx0KDxTaGFkb3dEaXRoZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG5cdFx0XHRcdCg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcclxuXHRcdFx0XHQoPFNoYWRvd0RpdGhlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLnJhbmdlID0gcHJvcHMuZ2V0KDEwMywgMSk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDExMDM6IC8vU2hhZG93U29mdE1ldGhvZFxyXG5cclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93U29mdE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQsIDxudW1iZXI+IHByb3BzLmdldCgyMDEsIDUpKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcclxuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkucmFuZ2UgPSBwcm9wcy5nZXQoMTAzLCAxKTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTEwNDogLy9TaGFkb3dIYXJkTWV0aG9kXHJcblx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IFNoYWRvd0hhcmRNZXRob2QobGlnaHQpO1xyXG5cdFx0XHRcdCg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG5cdFx0XHRcdCg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0cmV0dXJuIHNoYWRvd01ldGhvZDtcclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgMTAxXHJcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIG51bV9qb2ludHM6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIHNrZWxldG9uOlNrZWxldG9uID0gbmV3IFNrZWxldG9uKCk7XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsgLy8gRGlzY2FyZCBwcm9wZXJ0aWVzIGZvciBub3dcclxuXHJcblx0XHR2YXIgam9pbnRzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xyXG5cdFx0d2hpbGUgKGpvaW50c19wYXJzZWQgPCBudW1fam9pbnRzKSB7XHJcblx0XHRcdHZhciBqb2ludDpTa2VsZXRvbkpvaW50O1xyXG5cdFx0XHR2YXIgaWJwOk1hdHJpeDNEO1xyXG5cdFx0XHQvLyBJZ25vcmUgam9pbnQgaWRcclxuXHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRqb2ludCA9IG5ldyBTa2VsZXRvbkpvaW50KCk7XHJcblx0XHRcdGpvaW50LnBhcmVudEluZGV4ID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpIC0gMTsgLy8gMD1udWxsIGluIEFXRFxyXG5cdFx0XHRqb2ludC5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdFx0aWJwID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XHJcblx0XHRcdGpvaW50LmludmVyc2VCaW5kUG9zZSA9IGlicC5yYXdEYXRhO1xyXG5cdFx0XHQvLyBJZ25vcmUgam9pbnQgcHJvcHMvYXR0cmlidXRlcyBmb3Igbm93XHJcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdFx0c2tlbGV0b24uam9pbnRzLnB1c2goam9pbnQpO1xyXG5cdFx0XHRqb2ludHNfcGFyc2VkKys7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRGlzY2FyZCBhdHRyaWJ1dGVzIGZvciBub3dcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoc2tlbGV0b24sIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBza2VsZXRvbjtcclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbjogTmFtZSA9IFwiICsgc2tlbGV0b24ubmFtZSArIFwiIHwgTnVtYmVyIG9mIEpvaW50cyA9IFwiICsgam9pbnRzX3BhcnNlZCk7XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gMTAyXHJcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uUG9zZShibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBudW1fam9pbnRzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBJZ25vcmUgcHJvcGVydGllcyBmb3Igbm93XHJcblxyXG5cdFx0dmFyIHBvc2U6U2tlbGV0b25Qb3NlID0gbmV3IFNrZWxldG9uUG9zZSgpO1xyXG5cclxuXHRcdHZhciBqb2ludHNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XHJcblx0XHR3aGlsZSAoam9pbnRzX3BhcnNlZCA8IG51bV9qb2ludHMpIHtcclxuXHRcdFx0dmFyIGpvaW50X3Bvc2U6Sm9pbnRQb3NlO1xyXG5cdFx0XHR2YXIgaGFzX3RyYW5zZm9ybTpudW1iZXIgLyp1aW50Ki87XHJcblx0XHRcdGpvaW50X3Bvc2UgPSBuZXcgSm9pbnRQb3NlKCk7XHJcblx0XHRcdGhhc190cmFuc2Zvcm0gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0aWYgKGhhc190cmFuc2Zvcm0gPT0gMSkge1xyXG5cdFx0XHRcdHZhciBtdHhfZGF0YTpBcnJheTxudW1iZXI+ID0gdGhpcy5wYXJzZU1hdHJpeDQzUmF3RGF0YSgpO1xyXG5cclxuXHRcdFx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gbmV3IE1hdHJpeDNEKG10eF9kYXRhKTtcclxuXHRcdFx0XHRqb2ludF9wb3NlLm9yaWVudGF0aW9uLmZyb21NYXRyaXgobXR4KTtcclxuXHRcdFx0XHRqb2ludF9wb3NlLnRyYW5zbGF0aW9uLmNvcHlGcm9tKG10eC5wb3NpdGlvbik7XHJcblxyXG5cdFx0XHRcdHBvc2Uuam9pbnRQb3Nlc1tqb2ludHNfcGFyc2VkXSA9IGpvaW50X3Bvc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0am9pbnRzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0Ly8gU2tpcCBhdHRyaWJ1dGVzIGZvciBub3dcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQocG9zZSwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHBvc2U7XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b25Qb3NlOiBOYW1lID0gXCIgKyBwb3NlLm5hbWUgKyBcIiB8IE51bWJlciBvZiBKb2ludHMgPSBcIiArIGpvaW50c19wYXJzZWQpO1xyXG5cdH1cclxuXHJcblx0Ly9ibG9ja0lEIDEwM1xyXG5cdHByaXZhdGUgcGFyc2VTa2VsZXRvbkFuaW1hdGlvbihibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBmcmFtZV9kdXI6bnVtYmVyO1xyXG5cdFx0dmFyIHBvc2VfYWRkcjpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgY2xpcDpTa2VsZXRvbkNsaXBOb2RlID0gbmV3IFNrZWxldG9uQ2xpcE5vZGUoKTtcclxuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBJZ25vcmUgcHJvcGVydGllcyBmb3Igbm93XHJcblxyXG5cdFx0dmFyIGZyYW1lc19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XHJcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcclxuXHRcdFx0cG9zZV9hZGRyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0ZnJhbWVfZHVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZV9hZGRyLCBbQXNzZXRUeXBlLlNLRUxFVE9OX1BPU0VdKTtcclxuXHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTa2VsZXRvblBvc2UgRnJhbWUgIyBcIiArIGZyYW1lc19wYXJzZWQgKyBcIiAoSUQgPSBcIiArIHBvc2VfYWRkciArIFwiICkgZm9yIHRoaXMgU2tlbGV0b25DbGlwTm9kZVwiKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGNsaXAuYWRkRnJhbWUoPFNrZWxldG9uUG9zZT4gdGhpcy5fYmxvY2tzW3Bvc2VfYWRkcl0uZGF0YSwgZnJhbWVfZHVyKTtcclxuXHRcdFx0ZnJhbWVzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNsaXAuZnJhbWVzLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCB0aGlzIFNrZWxldG9uQ2xpcE5vZGUsIGJlY2F1c2Ugbm8gRnJhbWVzIHdoZXJlIHNldC5cIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdC8vIElnbm9yZSBhdHRyaWJ1dGVzIGZvciBub3dcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoY2xpcCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGNsaXA7XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b25DbGlwTm9kZTogTmFtZSA9IFwiICsgY2xpcC5uYW1lICsgXCIgfCBOdW1iZXIgb2YgRnJhbWVzID0gXCIgKyBjbGlwLmZyYW1lcy5sZW5ndGgpO1xyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDExMSAvICBCbG9jayBJRCA9IDExMlxyXG5cdHByaXZhdGUgcGFyc2VNZXNoUG9zZUFuaW1hdGlvbihibG9ja0lEOm51bWJlciAvKnVpbnQqLywgcG9zZU9ubHk6Ym9vbGVhbiA9IGZhbHNlKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG51bV9mcmFtZXM6bnVtYmVyIC8qdWludCovID0gMTtcclxuXHRcdHZhciBudW1fc3VibWVzaGVzOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBmcmFtZXNfcGFyc2VkOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBzdWJNZXNoUGFyc2VkOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBmcmFtZV9kdXI6bnVtYmVyO1xyXG5cdFx0dmFyIHg6bnVtYmVyO1xyXG5cdFx0dmFyIHk6bnVtYmVyO1xyXG5cdFx0dmFyIHo6bnVtYmVyO1xyXG5cdFx0dmFyIHN0cl9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIHN0cl9lbmQ6bnVtYmVyO1xyXG5cdFx0dmFyIGdlb21ldHJ5Okdlb21ldHJ5O1xyXG5cdFx0dmFyIHN1Ykdlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcclxuXHRcdHZhciBpZHg6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cdFx0dmFyIGNsaXA6VmVydGV4Q2xpcE5vZGUgPSBuZXcgVmVydGV4Q2xpcE5vZGUoKTtcclxuXHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki87XHJcblx0XHR2YXIgdmVydHM6QXJyYXk8bnVtYmVyPjtcclxuXHRcdHZhciBudW1fU3RyZWFtczpudW1iZXIgLyppbnQqLyA9IDA7XHJcblx0XHR2YXIgc3RyZWFtc1BhcnNlZDpudW1iZXIgLyppbnQqLyA9IDA7XHJcblx0XHR2YXIgc3RyZWFtdHlwZXM6QXJyYXk8bnVtYmVyPiAvKmludCovID0gbmV3IEFycmF5PG51bWJlcj4oKSAvKmludCovO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXM7XHJcblx0XHR2YXIgdGhpc0dlbzpHZW9tZXRyeTtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBnZW9BZHJlc3M6bnVtYmVyIC8qaW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGdlb0FkcmVzcywgW0Fzc2V0VHlwZS5HRU9NRVRSWV0pO1xyXG5cdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSB0YXJnZXQtR2VvbWV0cnktT2JqZWN0IFwiICsgZ2VvQWRyZXNzICsgXCIgKSBmb3IgdGhpcyBWZXJ0ZXhDbGlwTm9kZVwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHV2czpBcnJheTxBcnJheTxudW1iZXI+PiA9IHRoaXMuZ2V0VVZGb3JWZXJ0ZXhBbmltYXRpb24oZ2VvQWRyZXNzKTtcclxuXHRcdGlmICghcG9zZU9ubHkpXHJcblx0XHRcdG51bV9mcmFtZXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0bnVtX3N1Ym1lc2hlcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdG51bV9TdHJlYW1zID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0c3RyZWFtc1BhcnNlZCA9IDA7XHJcblx0XHR3aGlsZSAoc3RyZWFtc1BhcnNlZCA8IG51bV9TdHJlYW1zKSB7XHJcblx0XHRcdHN0cmVhbXR5cGVzLnB1c2godGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpKTtcclxuXHRcdFx0c3RyZWFtc1BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQk9PTCwgMjpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cclxuXHRcdGNsaXAubG9vcGluZyA9IHByb3BzLmdldCgxLCB0cnVlKTtcclxuXHRcdGNsaXAuc3RpdGNoRmluYWxGcmFtZSA9IHByb3BzLmdldCgyLCBmYWxzZSk7XHJcblxyXG5cdFx0ZnJhbWVzX3BhcnNlZCA9IDA7XHJcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcclxuXHRcdFx0ZnJhbWVfZHVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xyXG5cdFx0XHRzdWJNZXNoUGFyc2VkID0gMDtcclxuXHRcdFx0d2hpbGUgKHN1Yk1lc2hQYXJzZWQgPCBudW1fc3VibWVzaGVzKSB7XHJcblx0XHRcdFx0c3RyZWFtc1BhcnNlZCA9IDA7XHJcblx0XHRcdFx0c3RyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xyXG5cdFx0XHRcdHdoaWxlIChzdHJlYW1zUGFyc2VkIDwgbnVtX1N0cmVhbXMpIHtcclxuXHRcdFx0XHRcdGlmIChzdHJlYW10eXBlc1tzdHJlYW1zUGFyc2VkXSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGluZGljZXMgPSAoPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5WzFdKS5zdWJHZW9tZXRyaWVzW3N1Yk1lc2hQYXJzZWRdLmluZGljZXM7XHJcblx0XHRcdFx0XHRcdHZlcnRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0XHRcdFx0aWR4ID0gMDtcclxuXHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0eCA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcclxuXHRcdFx0XHRcdFx0XHR5ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKVxyXG5cdFx0XHRcdFx0XHRcdHogPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pXHJcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geDtcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB5O1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHo7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0c3ViR2VvbSA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlUG9zaXRpb25zKHZlcnRzKTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVVVnModXZzW3N1Yk1lc2hQYXJzZWRdKTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVWZXJ0ZXhOb3JtYWxzKG51bGwpO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVZlcnRleFRhbmdlbnRzKG51bGwpO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20uYXV0b0Rlcml2ZVRhbmdlbnRzID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHN1Yk1lc2hQYXJzZWQrKztcclxuXHRcdFx0XHRcdFx0Z2VvbWV0cnkuYWRkU3ViR2VvbWV0cnkoc3ViR2VvbSlcclxuXHRcdFx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcclxuXHRcdFx0XHRcdHN0cmVhbXNQYXJzZWQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2xpcC5hZGRGcmFtZShnZW9tZXRyeSwgZnJhbWVfZHVyKTtcclxuXHRcdFx0ZnJhbWVzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChjbGlwLCBuYW1lKTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGNsaXA7XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVmVydGV4Q2xpcE5vZGU6IE5hbWUgPSBcIiArIGNsaXAubmFtZSArIFwiIHwgVGFyZ2V0LUdlb21ldHJ5LU5hbWUgPSBcIiArICg8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlbMV0pLm5hbWUgKyBcIiB8IE51bWJlciBvZiBGcmFtZXMgPSBcIiArIGNsaXAuZnJhbWVzLmxlbmd0aCk7XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrSUQgMTEzXHJcblx0cHJpdmF0ZSBwYXJzZVZlcnRleEFuaW1hdGlvblNldChibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBwb3NlQmxvY2tBZHJlc3M6bnVtYmVyIC8qaW50Ki9cclxuXHRcdHZhciBvdXRwdXRTdHJpbmc6c3RyaW5nID0gXCJcIjtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQxNn0pO1xyXG5cdFx0dmFyIGZyYW1lc19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcclxuXHRcdHZhciBza2VsZXRvbkZyYW1lczpBcnJheTxTa2VsZXRvbkNsaXBOb2RlPiA9IG5ldyBBcnJheTxTa2VsZXRvbkNsaXBOb2RlPigpO1xyXG5cdFx0dmFyIHZlcnRleEZyYW1lczpBcnJheTxWZXJ0ZXhDbGlwTm9kZT4gPSBuZXcgQXJyYXk8VmVydGV4Q2xpcE5vZGU+KCk7XHJcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcclxuXHRcdFx0cG9zZUJsb2NrQWRyZXNzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBvc2VCbG9ja0FkcmVzcywgW0Fzc2V0VHlwZS5BTklNQVRJT05fTk9ERV0pO1xyXG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEFuaW1hdGlvbkNsaXBOb2RlIE5yIFwiICsgZnJhbWVzX3BhcnNlZCArIFwiICggXCIgKyBwb3NlQmxvY2tBZHJlc3MgKyBcIiApIGZvciB0aGlzIEFuaW1hdGlvblNldFwiKTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMV0gaW5zdGFuY2VvZiBWZXJ0ZXhDbGlwTm9kZSlcclxuXHRcdFx0XHRcdHZlcnRleEZyYW1lcy5wdXNoKHJldHVybmVkQXJyYXlbMV0pXHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMV0gaW5zdGFuY2VvZiBTa2VsZXRvbkNsaXBOb2RlKVxyXG5cdFx0XHRcdFx0c2tlbGV0b25GcmFtZXMucHVzaChyZXR1cm5lZEFycmF5WzFdKVxyXG5cdFx0XHR9XHJcblx0XHRcdGZyYW1lc19wYXJzZWQrKztcclxuXHRcdH1cclxuXHRcdGlmICgodmVydGV4RnJhbWVzLmxlbmd0aCA9PSAwKSAmJiAoc2tlbGV0b25GcmFtZXMubGVuZ3RoID09IDApKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGhpcyBBbmltYXRpb25TZXQsIGJlY2F1c2UgaXQgY29udGFpbnMgbm8gYW5pbWF0aW9uc1wiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRpZiAodmVydGV4RnJhbWVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dmFyIG5ld1ZlcnRleEFuaW1hdGlvblNldDpWZXJ0ZXhBbmltYXRpb25TZXQgPSBuZXcgVmVydGV4QW5pbWF0aW9uU2V0KCk7XHJcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdmVydGV4RnJhbWVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdG5ld1ZlcnRleEFuaW1hdGlvblNldC5hZGRBbmltYXRpb24odmVydGV4RnJhbWVzW2ldKTtcclxuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobmV3VmVydGV4QW5pbWF0aW9uU2V0LCBuYW1lKTtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBuZXdWZXJ0ZXhBbmltYXRpb25TZXQ7XHJcblx0XHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFZlcnRleEFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3VmVydGV4QW5pbWF0aW9uU2V0LmFuaW1hdGlvbnMubGVuZ3RoICsgXCIgfCBBbmltYXRpb24tTmFtZXMgPSBcIiArIG5ld1ZlcnRleEFuaW1hdGlvblNldC5hbmltYXRpb25OYW1lcy50b1N0cmluZygpKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHNrZWxldG9uRnJhbWVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBvc2VCbG9ja0FkcmVzcywgW0Fzc2V0VHlwZS5BTklNQVRJT05fTk9ERV0pO1xyXG5cdFx0XHR2YXIgbmV3U2tlbGV0b25BbmltYXRpb25TZXQ6U2tlbGV0b25BbmltYXRpb25TZXQgPSBuZXcgU2tlbGV0b25BbmltYXRpb25TZXQocHJvcHMuZ2V0KDEsIDQpKTsgLy9wcm9wcy5nZXQoMSw0KSk7XHJcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgc2tlbGV0b25GcmFtZXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0bmV3U2tlbGV0b25BbmltYXRpb25TZXQuYWRkQW5pbWF0aW9uKHNrZWxldG9uRnJhbWVzW2ldKTtcclxuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobmV3U2tlbGV0b25BbmltYXRpb25TZXQsIG5hbWUpO1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0O1xyXG5cdFx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbkFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9ucy5sZW5ndGggKyBcIiB8IEFuaW1hdGlvbi1OYW1lcyA9IFwiICsgbmV3U2tlbGV0b25BbmltYXRpb25TZXQuYW5pbWF0aW9uTmFtZXMudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9ja0lEIDEyMlxyXG5cdHByaXZhdGUgcGFyc2VBbmltYXRvclNldChibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciB0YXJnZXRNZXNoOk1lc2g7XHJcblx0XHR2YXIgYW5pbVNldEJsb2NrQWRyZXNzOm51bWJlciAvKmludCovXHJcblx0XHR2YXIgdGFyZ2V0QW5pbWF0aW9uU2V0OkFuaW1hdGlvblNldEJhc2U7XHJcblx0XHR2YXIgb3V0cHV0U3RyaW5nOnN0cmluZyA9IFwiXCI7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgdHlwZTpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFJ9KTtcclxuXHJcblx0XHRhbmltU2V0QmxvY2tBZHJlc3MgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIHRhcmdldE1lc2hMZW5ndGg6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIG1lc2hBZHJlc3NlczpBcnJheTxudW1iZXI+IC8qdWludCovID0gbmV3IEFycmF5PG51bWJlcj4oKSAvKnVpbnQqLztcclxuXHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdGFyZ2V0TWVzaExlbmd0aDsgaSsrKVxyXG5cdFx0XHRtZXNoQWRyZXNzZXMucHVzaCh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpKTtcclxuXHJcblx0XHR2YXIgYWN0aXZlU3RhdGU6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIGF1dG9wbGF5OmJvb2xlYW4gPSAoIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpID09IDEgKTtcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcclxuXHRcdHZhciB0YXJnZXRNZXNoZXM6QXJyYXk8TWVzaD4gPSBuZXcgQXJyYXk8TWVzaD4oKTtcclxuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbWVzaEFkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChtZXNoQWRyZXNzZXNbaV0sIFtBc3NldFR5cGUuTUVTSF0pO1xyXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHR0YXJnZXRNZXNoZXMucHVzaCg8TWVzaD4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoYW5pbVNldEJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9TRVRdKTtcclxuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQW5pbWF0aW9uU2V0ICggXCIgKyBhbmltU2V0QmxvY2tBZHJlc3MgKyBcIiApIGZvciB0aGlzIEFuaW1hdG9yXCIpOztcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHR0YXJnZXRBbmltYXRpb25TZXQgPSA8QW5pbWF0aW9uU2V0QmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdHZhciB0aGlzQW5pbWF0b3I6QW5pbWF0b3JCYXNlO1xyXG5cdFx0aWYgKHR5cGUgPT0gMSkge1xyXG5cclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHByb3BzLmdldCgxLCAwKSwgW0Fzc2V0VHlwZS5TS0VMRVRPTl0pO1xyXG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2tlbGV0b24gKCBcIiArIHByb3BzLmdldCgxLCAwKSArIFwiICkgZm9yIHRoaXMgQW5pbWF0b3JcIik7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpc0FuaW1hdG9yID0gbmV3IFNrZWxldG9uQW5pbWF0b3IoPFNrZWxldG9uQW5pbWF0aW9uU2V0PiB0YXJnZXRBbmltYXRpb25TZXQsIDxTa2VsZXRvbj4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0eXBlID09IDIpXHJcblx0XHRcdHRoaXNBbmltYXRvciA9IG5ldyBWZXJ0ZXhBbmltYXRvcig8VmVydGV4QW5pbWF0aW9uU2V0PiB0YXJnZXRBbmltYXRpb25TZXQpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHRoaXNBbmltYXRvciwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRoaXNBbmltYXRvcjtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCB0YXJnZXRNZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHR5cGUgPT0gMSlcclxuXHRcdFx0XHR0YXJnZXRNZXNoZXNbaV0uYW5pbWF0b3IgPSAoPFNrZWxldG9uQW5pbWF0b3I+IHRoaXNBbmltYXRvcik7XHJcblx0XHRcdGlmICh0eXBlID09IDIpXHJcblx0XHRcdFx0dGFyZ2V0TWVzaGVzW2ldLmFuaW1hdG9yID0gKDxWZXJ0ZXhBbmltYXRvcj4gdGhpc0FuaW1hdG9yKTtcclxuXHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQW5pbWF0b3I6IE5hbWUgPSBcIiArIG5hbWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbnMgcmVhZHMgYW5kIGNyZWF0ZXMgYSBFZmZlY3RNZXRob2RcclxuXHRwcml2YXRlIHBhcnNlU2hhcmVkTWV0aG9kTGlzdChibG9ja0lEOm51bWJlcik6RWZmZWN0TWV0aG9kQmFzZVxyXG5cdHtcclxuXHJcblx0XHR2YXIgbWV0aG9kVHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgZWZmZWN0TWV0aG9kUmV0dXJuOkVmZmVjdE1ldGhvZEJhc2U7XHJcblxyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgMTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMTA0OnRoaXMuX3Byb3BzTnJUeXBlLCAxMDU6dGhpcy5fcHJvcHNOclR5cGUsIDEwNjp0aGlzLl9wcm9wc05yVHlwZSwgMTA3OnRoaXMuX3Byb3BzTnJUeXBlLCAyMDE6QVdEUGFyc2VyLlVJTlQzMiwgMjAyOkFXRFBhcnNlci5VSU5UMzIsIDMwMTpBV0RQYXJzZXIuVUlOVDE2LCAzMDI6QVdEUGFyc2VyLlVJTlQxNiwgNDAxOkFXRFBhcnNlci5VSU5UOCwgNDAyOkFXRFBhcnNlci5VSU5UOCwgNjAxOkFXRFBhcnNlci5DT0xPUiwgNjAyOkFXRFBhcnNlci5DT0xPUiwgNzAxOkFXRFBhcnNlci5CT09MLCA3MDI6QVdEUGFyc2VyLkJPT0x9KTtcclxuXHRcdHZhciB0YXJnZXRJRDpudW1iZXI7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG5cclxuXHRcdHN3aXRjaCAobWV0aG9kVHlwZSkge1xyXG5cdFx0XHQvLyBFZmZlY3QgTWV0aG9kc1xyXG5cdFx0XHRjYXNlIDQwMTogLy9Db2xvck1hdHJpeFxyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RDb2xvck1hdHJpeE1ldGhvZChwcm9wcy5nZXQoMTAxLCBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSkpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDI6IC8vQ29sb3JUcmFuc2Zvcm1cclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2QoKTtcclxuXHRcdFx0XHR2YXIgb2ZmQ29sOm51bWJlciAvKnVpbnQqLyA9IHByb3BzLmdldCg2MDEsIDB4MDAwMDAwMDApO1xyXG5cdFx0XHRcdCg8RWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2Q+IGVmZmVjdE1ldGhvZFJldHVybikuY29sb3JUcmFuc2Zvcm0gPSBuZXcgQ29sb3JUcmFuc2Zvcm0ocHJvcHMuZ2V0KDEwMiwgMSksIHByb3BzLmdldCgxMDMsIDEpLCBwcm9wcy5nZXQoMTA0LCAxKSwgcHJvcHMuZ2V0KDEwMSwgMSksICgob2ZmQ29sID4+IDE2KSAmIDB4RkYpLCAoKG9mZkNvbCA+PiA4KSAmIDB4RkYpLCAob2ZmQ29sICYgMHhGRiksICgob2ZmQ29sID4+IDI0KSAmIDB4RkYpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDM6IC8vRW52TWFwXHJcblxyXG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFTlYgTUFQJywgdGFyZ2V0SUQpO1xyXG5cclxuXHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbIEFzc2V0VHlwZS5URVhUVVJFIF0sIFwiQ3ViZVRleHR1cmVcIik7XHJcblx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEVudk1hcE1ldGhvZCg8Q3ViZVRleHR1cmVCYXNlPiByZXR1cm5lZEFycmF5WzFdLCA8bnVtYmVyPiBwcm9wcy5nZXQoMTAxLCAxKSk7XHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMiwgMCk7XHJcblx0XHRcdFx0aWYgKHRhcmdldElEID4gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIE1hc2stdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XHJcblxyXG5cdFx0XHRcdFx0Ly8gVG9kbzogdGVzdCBtYXNrIHdpdGggRW52TWFwTWV0aG9kXHJcblx0XHRcdFx0XHQvLyg8RW52TWFwTWV0aG9kPiBlZmZlY3RNZXRob2RSZXR1cm4pLm1hc2sgPSA8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDA0OiAvL0xpZ2h0TWFwTWV0aG9kXHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTGlnaHRNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgTGlnaHRNYXBNZXRob2RcIik7XHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdExpZ2h0TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg0MDEsIDEwKV0pOyAvL3VzZXNlY29uZGFyeVVWIG5vdCBzZXRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgNDA1OiAvL1Byb2plY3RpdmVUZXh0dXJlTWV0aG9kXHJcblx0XHRcdC8vXHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVfUFJPSkVDVE9SXSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRfYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFRleHR1cmVQcm9qZWN0b3IgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgUHJvamVjdGl2ZVRleHR1cmVNZXRob2RcIik7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwNjogLy9SaW1MaWdodE1ldGhvZFxyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RSaW1MaWdodE1ldGhvZChwcm9wcy5nZXQoNjAxLCAweGZmZmZmZiksIHByb3BzLmdldCgxMDEsIDAuNCksIHByb3BzLmdldCgxMDEsIDIpKTsgLy9ibGVuZE1vZGVcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDc6IC8vQWxwaGFNYXNrTWV0aG9kXHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQWxwaGEtdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBBbHBoYU1hc2tNZXRob2RcIik7XHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEFscGhhTWFza01ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBwcm9wcy5nZXQoNzAxLCBmYWxzZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvL1x0XHRcdFx0Y2FzZSA0MDg6IC8vUmVmcmFjdGlvbkVudk1hcE1ldGhvZFxyXG5cdFx0XHQvL1x0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IGdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRW52TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFJlZnJhY3Rpb25FbnZNYXBNZXRob2RcIik7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBSZWZyYWN0aW9uRW52TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHByb3BzLmdldCgxMDEsIDAuMSksIHByb3BzLmdldCgxMDIsIDAuMDEpLCBwcm9wcy5nZXQoMTAzLCAwLjAxKSwgcHJvcHMuZ2V0KDEwNCwgMC4wMSkpO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRSZWZyYWN0aW9uRW52TWFwTWV0aG9kKGVmZmVjdE1ldGhvZFJldHVybikuYWxwaGEgPSBwcm9wcy5nZXQoMTA0LCAxKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDQwOTogLy9PdXRsaW5lTWV0aG9kXHJcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBPdXRsaW5lTWV0aG9kKHByb3BzLmdldCg2MDEsIDB4MDAwMDAwMDApLCBwcm9wcy5nZXQoMTAxLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQxMDogLy9GcmVzbmVsRW52TWFwTWV0aG9kXHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgRnJlc25lbEVudk1hcE1ldGhvZFwiKTtcclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBwcm9wcy5nZXQoMTAxLCAxKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDExOiAvL0ZvZ01ldGhvZFxyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RGb2dNZXRob2QocHJvcHMuZ2V0KDEwMSwgMCksIHByb3BzLmdldCgxMDIsIDEwMDApLCBwcm9wcy5nZXQoNjAxLCAweDgwODA4MCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0cmV0dXJuIGVmZmVjdE1ldGhvZFJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlVXNlckF0dHJpYnV0ZXMoKTpPYmplY3RcclxuXHR7XHJcblx0XHR2YXIgYXR0cmlidXRlczpPYmplY3Q7XHJcblx0XHR2YXIgbGlzdF9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIGF0dGlidXRlQ250Om51bWJlcjtcclxuXHJcblx0XHRsaXN0X2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0aWYgKGxpc3RfbGVuID4gMCkge1xyXG5cclxuXHRcdFx0dmFyIGxpc3RfZW5kOm51bWJlcjtcclxuXHJcblx0XHRcdGF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcblx0XHRcdGxpc3RfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxpc3RfbGVuO1xyXG5cclxuXHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBsaXN0X2VuZCkge1xyXG5cdFx0XHRcdHZhciBuc19pZDpudW1iZXI7XHJcblx0XHRcdFx0dmFyIGF0dHJfa2V5OnN0cmluZztcclxuXHRcdFx0XHR2YXIgYXR0cl90eXBlOm51bWJlcjtcclxuXHRcdFx0XHR2YXIgYXR0cl9sZW46bnVtYmVyO1xyXG5cdFx0XHRcdHZhciBhdHRyX3ZhbDphbnk7XHJcblxyXG5cdFx0XHRcdC8vIFRPRE86IFByb3Blcmx5IHRlbmQgdG8gbmFtZXNwYWNlcyBpbiBhdHRyaWJ1dGVzXHJcblx0XHRcdFx0bnNfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRhdHRyX2tleSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdFx0XHRhdHRyX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRhdHRyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0XHRcdGlmICgodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGF0dHJfbGVuKSA+IGxpc3RfZW5kKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBhdHRyaWJ1dGUgIyBcIiArIGF0dGlidXRlQ250ICsgXCIgPSBza2lwcGVkIHRvIGVuZCBvZiBhdHRyaWJ1dGUtbGlzdFwiKTtcclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBsaXN0X2VuZDtcclxuXHRcdFx0XHRcdHJldHVybiBhdHRyaWJ1dGVzO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3dpdGNoIChhdHRyX3R5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkFXRFNUUklORzpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhhdHRyX2xlbik7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UODpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMTY6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQzMjpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5CT09MOlxyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDg6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDE2OlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMzI6XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5CQUREUjpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUMzI6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDY0OlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gJ3VuaW1wbGVtZW50ZWQgYXR0cmlidXRlIHR5cGUgJyArIGF0dHJfdHlwZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArPSBhdHRyX2xlbjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiYXR0cmlidXRlID0gbmFtZTogXCIgKyBhdHRyX2tleSArIFwiICAvIHZhbHVlID0gXCIgKyBhdHRyX3ZhbCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRhdHRyaWJ1dGVzW2F0dHJfa2V5XSA9IGF0dHJfdmFsO1xyXG5cdFx0XHRcdGF0dGlidXRlQ250ICs9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXR0cmlidXRlcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VQcm9wZXJ0aWVzKGV4cGVjdGVkOk9iamVjdCk6QVdEUHJvcGVydGllc1xyXG5cdHtcclxuXHRcdHZhciBsaXN0X2VuZDpudW1iZXI7XHJcblx0XHR2YXIgbGlzdF9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIHByb3BlcnR5Q250Om51bWJlciA9IDA7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IG5ldyBBV0RQcm9wZXJ0aWVzKCk7XHJcblxyXG5cdFx0bGlzdF9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0bGlzdF9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGlzdF9sZW47XHJcblxyXG5cdFx0aWYgKGV4cGVjdGVkKSB7XHJcblxyXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IGxpc3RfZW5kKSB7XHJcblx0XHRcdFx0dmFyIGxlbjpudW1iZXI7XHJcblx0XHRcdFx0dmFyIGtleTpudW1iZXI7XHJcblx0XHRcdFx0dmFyIHR5cGU6bnVtYmVyO1xyXG5cclxuXHRcdFx0XHRrZXkgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdFx0bGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRcdFx0aWYgKCh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuKSA+IGxpc3RfZW5kKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBwcm9wZXJ0eSAjIFwiICsgcHJvcGVydHlDbnQgKyBcIiA9IHNraXBwZWQgdG8gZW5kIG9mIHByb3BlcnRpZS1saXN0XCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHByb3BzO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGV4cGVjdGVkLmhhc093blByb3BlcnR5KGtleS50b1N0cmluZygpKSkge1xyXG5cdFx0XHRcdFx0dHlwZSA9IGV4cGVjdGVkW2tleV07XHJcblx0XHRcdFx0XHRwcm9wcy5zZXQoa2V5LCB0aGlzLnBhcnNlQXR0clZhbHVlKHR5cGUsIGxlbikpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGxlbjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHByb3BlcnR5Q250ICs9IDE7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gbGlzdF9lbmQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHByb3BzO1xyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VBdHRyVmFsdWUodHlwZTpudW1iZXIsIGxlbjpudW1iZXIpOmFueVxyXG5cdHtcclxuXHRcdHZhciBlbGVtX2xlbjpudW1iZXI7XHJcblx0XHR2YXIgcmVhZF9mdW5jOkZ1bmN0aW9uO1xyXG5cclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQk9PTDpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UODpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDE7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDE2OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gMjtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDMyOlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gNDtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRJbnQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UODpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDE7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDE2OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gMjtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDMyOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5DT0xPUjpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQkFERFI6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSA0O1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuRkxPQVQzMjpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDQ7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDY0OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gODtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5BV0RTVFJJTkc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGxlbik7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5WRUNUT1IyeDE6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLlZFQ1RPUjN4MTpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SNHgxOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFgzeDI6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLk1UWDN4MzpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYNHgzOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFg0eDQ6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSA4O1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGVsZW1fbGVuIDwgbGVuKSB7XHJcblx0XHRcdHZhciBsaXN0OkFycmF5PGFueT4gPSBbXTtcclxuXHRcdFx0dmFyIG51bV9yZWFkOm51bWJlciA9IDA7XHJcblx0XHRcdHZhciBudW1fZWxlbXM6bnVtYmVyID0gbGVuL2VsZW1fbGVuO1xyXG5cclxuXHRcdFx0d2hpbGUgKG51bV9yZWFkIDwgbnVtX2VsZW1zKSB7XHJcblx0XHRcdFx0bGlzdC5wdXNoKHJlYWRfZnVuYy5hcHBseSh0aGlzLl9uZXdCbG9ja0J5dGVzKSk7IC8vIGxpc3QucHVzaChyZWFkX2Z1bmMoKSk7XHJcblx0XHRcdFx0bnVtX3JlYWQrKztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGxpc3Q7XHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0dmFyIHZhbDphbnkgPSByZWFkX2Z1bmMuYXBwbHkodGhpcy5fbmV3QmxvY2tCeXRlcyk7Ly9yZWFkX2Z1bmMoKTtcclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VIZWFkZXIoKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGZsYWdzOm51bWJlcjtcclxuXHRcdHZhciBib2R5X2xlbjpudW1iZXI7XHJcblxyXG5cdFx0dGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPSAzOyAvLyBTa2lwIG1hZ2ljIHN0cmluZyBhbmQgcGFyc2UgdmVyc2lvblxyXG5cclxuXHRcdHRoaXMuX3ZlcnNpb25bMF0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR0aGlzLl92ZXJzaW9uWzFdID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuXHRcdGZsYWdzID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTsgLy8gUGFyc2UgYml0IGZsYWdzXHJcblxyXG5cdFx0dGhpcy5fc3RyZWFtaW5nID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzEpO1xyXG5cclxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAyKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAxKSkge1xyXG5cdFx0XHR0aGlzLl9hY2N1cmFjeU1hdHJpeCA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUcyKTtcclxuXHRcdFx0dGhpcy5fYWNjdXJhY3lHZW8gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMyk7XHJcblx0XHRcdHRoaXMuX2FjY3VyYWN5UHJvcHMgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgd2Ugc2V0IF9hY2N1cmFjeU9uQmxvY2tzLCB0aGUgcHJlY2lzaW9uLXZhbHVlcyBhcmUgcmVhZCBmcm9tIGVhY2ggYmxvY2staGVhZGVyLlxyXG5cclxuXHRcdC8vIHNldCBzdG9yYWdlUHJlY2lzaW9uIHR5cGVzXHJcblx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRpZiAodGhpcy5fYWNjdXJhY3lHZW8pIHtcclxuXHRcdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5TWF0cml4KSB7XHJcblx0XHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5UHJvcHMpIHtcclxuXHRcdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9jb21wcmVzc2lvbiA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTsgLy8gY29tcHJlc3Npb25cclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJJbXBvcnQgQVdERmlsZSBvZiB2ZXJzaW9uID0gXCIgKyB0aGlzLl92ZXJzaW9uWzBdICsgXCIgLSBcIiArIHRoaXMuX3ZlcnNpb25bMV0pO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkdsb2JhbCBTZXR0aW5ncyA9IENvbXByZXNzaW9uID0gXCIgKyB0aGlzLl9jb21wcmVzc2lvbiArIFwiIHwgU3RyZWFtaW5nID0gXCIgKyB0aGlzLl9zdHJlYW1pbmcgKyBcIiB8IE1hdHJpeC1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5TWF0cml4ICsgXCIgfCBHZW9tZXRyeS1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5R2VvICsgXCIgfCBQcm9wZXJ0aWVzLVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lQcm9wcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2hlY2sgZmlsZSBpbnRlZ3JpdHlcclxuXHRcdGJvZHlfbGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRpZiAoIXRoaXMuX3N0cmVhbWluZyAmJiBib2R5X2xlbiAhPSB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKSB7XHJcblx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0FXRDIgYm9keSBsZW5ndGggZG9lcyBub3QgbWF0Y2ggaGVhZGVyIGludGVncml0eSBmaWVsZCcpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0Ly8gSGVscGVyIC0gZnVuY3Rpb25zXHJcblx0cHJpdmF0ZSBnZXRVVkZvclZlcnRleEFuaW1hdGlvbihtZXNoSUQ6bnVtYmVyIC8qdWludCovKTpBcnJheTxBcnJheTxudW1iZXI+PlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLl9ibG9ja3NbbWVzaElEXS5kYXRhIGluc3RhbmNlb2YgTWVzaClcclxuXHRcdFx0bWVzaElEID0gdGhpcy5fYmxvY2tzW21lc2hJRF0uZ2VvSUQ7XHJcblx0XHRpZiAodGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uO1xyXG5cdFx0dmFyIGdlb21ldHJ5Okdlb21ldHJ5ID0gKDxHZW9tZXRyeT4gdGhpcy5fYmxvY2tzW21lc2hJRF0uZGF0YSk7XHJcblx0XHR2YXIgZ2VvQ250Om51bWJlciAvKmludCovID0gMDtcclxuXHRcdHZhciB1ZDpBcnJheTxudW1iZXI+O1xyXG5cdFx0dmFyIHVTdHJpZGU6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIHVPZmZzOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBudW1Qb2ludHM6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki87XHJcblx0XHR2YXIgbmV3VXZzOkFycmF5PG51bWJlcj47XHJcblx0XHR2YXIgc3ViX2dlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xyXG5cdFx0d2hpbGUgKGdlb0NudCA8IGdlb21ldHJ5LnN1Ykdlb21ldHJpZXMubGVuZ3RoKSB7XHJcblx0XHRcdG5ld1V2cyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0XHRcdHN1Yl9nZW9tID0gPFRyaWFuZ2xlU3ViR2VvbWV0cnk+IGdlb21ldHJ5LnN1Ykdlb21ldHJpZXNbZ2VvQ250XTtcclxuXHRcdFx0bnVtUG9pbnRzID0gc3ViX2dlb20ubnVtVmVydGljZXM7XHJcblx0XHRcdHVkID0gc3ViX2dlb20udXZzO1xyXG5cdFx0XHR1U3RyaWRlID0gc3ViX2dlb20uZ2V0U3RyaWRlKFRyaWFuZ2xlU3ViR2VvbWV0cnkuVVZfREFUQSk7XHJcblx0XHRcdHVPZmZzID0gc3ViX2dlb20uZ2V0T2Zmc2V0KFRyaWFuZ2xlU3ViR2VvbWV0cnkuVVZfREFUQSk7XHJcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKykge1xyXG5cdFx0XHRcdG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMF0pO1xyXG5cdFx0XHRcdG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbi5wdXNoKG5ld1V2cyk7XHJcblx0XHRcdGdlb0NudCsrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VWYXJTdHIoKTpzdHJpbmdcclxuXHR7XHJcblxyXG5cdFx0dmFyIGxlbjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMobGVuKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0QXNzZXRCeUlEKGFzc2V0SUQ6bnVtYmVyLCBhc3NldFR5cGVzVG9HZXQ6QXJyYXk8c3RyaW5nPiwgZXh0cmFUeXBlSW5mbzpzdHJpbmcgPSBcIlNpbmdsZVRleHR1cmVcIik6QXJyYXk8YW55PlxyXG5cdHtcclxuXHRcdHZhciByZXR1cm5BcnJheTpBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcclxuXHRcdHZhciB0eXBlQ250Om51bWJlciA9IDA7XHJcblx0XHRpZiAoYXNzZXRJRCA+IDApIHtcclxuXHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSkge1xyXG5cdFx0XHRcdFx0d2hpbGUgKHR5cGVDbnQgPCBhc3NldFR5cGVzVG9HZXQubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaWFzc2V0OklBc3NldCA9IDxJQXNzZXQ+IHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGlhc3NldC5hc3NldFR5cGUgPT0gYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly9pZiB0aGUgcmlnaHQgYXNzZXRUeXBlIHdhcyBmb3VuZFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5URVhUVVJFKSAmJiAoZXh0cmFUeXBlSW5mbyA9PSBcIkN1YmVUZXh0dXJlXCIpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEgaW5zdGFuY2VvZiBJbWFnZUN1YmVUZXh0dXJlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5URVhUVVJFKSAmJiAoZXh0cmFUeXBlSW5mbyA9PSBcIlNpbmdsZVRleHR1cmVcIikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSBpbnN0YW5jZW9mIEltYWdlVGV4dHVyZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvL2lmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5HRU9NRVRSWSkgJiYgKElBc3NldChfYmxvY2tzW2Fzc2V0SURdLmRhdGEpLmFzc2V0VHlwZSA9PSBBc3NldFR5cGUuTUVTSCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLkdFT01FVFJZKSAmJiAoaWFzc2V0LmFzc2V0VHlwZSA9PSBBc3NldFR5cGUuTUVTSCkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIG1lc2g6TWVzaCA9IDxNZXNoPiB0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YVxyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2gobWVzaC5nZW9tZXRyeSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dHlwZUNudCsrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gaWYgdGhlIGhhcyBub3QgcmV0dXJuZWQgYW55dGhpbmcgeWV0LCB0aGUgYXNzZXQgaXMgbm90IGZvdW5kLCBvciB0aGUgZm91bmQgYXNzZXQgaXMgbm90IHRoZSByaWdodCB0eXBlLlxyXG5cdFx0cmV0dXJuQXJyYXkucHVzaChmYWxzZSk7XHJcblx0XHRyZXR1cm5BcnJheS5wdXNoKHRoaXMuZ2V0RGVmYXVsdEFzc2V0KGFzc2V0VHlwZXNUb0dldFswXSwgZXh0cmFUeXBlSW5mbykpO1xyXG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xyXG5cdH1cclxuXHRwcml2YXRlIGdldERlZmF1bHRBc3NldChhc3NldFR5cGU6c3RyaW5nLCBleHRyYVR5cGVJbmZvOnN0cmluZyk6SUFzc2V0XHJcblx0e1xyXG5cdFx0c3dpdGNoICh0cnVlKSB7XHJcblx0XHRcdGNhc2UgKGFzc2V0VHlwZSA9PSBBc3NldFR5cGUuVEVYVFVSRSk6XHJcblx0XHRcdFx0aWYgKGV4dHJhVHlwZUluZm8gPT0gXCJDdWJlVGV4dHVyZVwiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk7XHJcblx0XHRcdFx0aWYgKGV4dHJhVHlwZUluZm8gPT0gXCJTaW5nbGVUZXh0dXJlXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0VGV4dHVyZSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIChhc3NldFR5cGUgPT0gQXNzZXRUeXBlLk1BVEVSSUFMKTpcclxuXHRcdFx0XHRyZXR1cm4gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0TWF0ZXJpYWwoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk6SUFzc2V0XHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUpIHtcclxuXHRcdFx0dmFyIGRlZmF1bHRCaXRtYXA6Qml0bWFwRGF0YSA9IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuY3JlYXRlQ2hlY2tlcmVkQml0bWFwRGF0YSgpO1xyXG5cclxuXHRcdFx0dGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlID0gbmV3IEJpdG1hcEN1YmVUZXh0dXJlKGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXAsIGRlZmF1bHRCaXRtYXApO1xyXG5cdFx0XHR0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUubmFtZSA9IFwiZGVmYXVsdEN1YmVUZXh0dXJlXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIDxJQXNzZXQ+IHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVhZE51bWJlcihwcmVjaXNpb246Ym9vbGVhbiA9IGZhbHNlKTpudW1iZXJcclxuXHR7XHJcblx0XHRpZiAocHJlY2lzaW9uKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlTWF0cml4M0QoKTpNYXRyaXgzRFxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTWF0cml4M0QodGhpcy5wYXJzZU1hdHJpeDQzUmF3RGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VNYXRyaXgzMlJhd0RhdGEoKTpBcnJheTxudW1iZXI+XHJcblx0e1xyXG5cdFx0dmFyIGk6bnVtYmVyO1xyXG5cdFx0dmFyIG10eF9yYXc6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KDYpO1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IDY7IGkrKykge1xyXG5cdFx0XHRtdHhfcmF3W2ldID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbXR4X3JhdztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VNYXRyaXg0M1Jhd0RhdGEoKTpBcnJheTxudW1iZXI+XHJcblx0e1xyXG5cdFx0dmFyIG10eF9yYXc6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KDE2KTtcclxuXHJcblx0XHRtdHhfcmF3WzBdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMV0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1syXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzNdID0gMC4wO1xyXG5cdFx0bXR4X3Jhd1s0XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzVdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbNl0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1s3XSA9IDAuMDtcclxuXHRcdG10eF9yYXdbOF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1s5XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzEwXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzExXSA9IDAuMDtcclxuXHRcdG10eF9yYXdbMTJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTNdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTRdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTVdID0gMS4wO1xyXG5cclxuXHRcdC8vVE9ETzogZml4IG1heCBleHBvcnRlciB0byByZW1vdmUgTmFOIHZhbHVlcyBpbiBqb2ludCAwIGludmVyc2UgYmluZCBwb3NlXHJcblxyXG5cdFx0aWYgKGlzTmFOKG10eF9yYXdbMF0pKSB7XHJcblx0XHRcdG10eF9yYXdbMF0gPSAxO1xyXG5cdFx0XHRtdHhfcmF3WzFdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1syXSA9IDA7XHJcblx0XHRcdG10eF9yYXdbNF0gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzVdID0gMTtcclxuXHRcdFx0bXR4X3Jhd1s2XSA9IDA7XHJcblx0XHRcdG10eF9yYXdbOF0gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzldID0gMDtcclxuXHRcdFx0bXR4X3Jhd1sxMF0gPSAxO1xyXG5cdFx0XHRtdHhfcmF3WzEyXSA9IDA7XHJcblx0XHRcdG10eF9yYXdbMTNdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1sxNF0gPSAwO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbXR4X3JhdztcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgPSBBV0RQYXJzZXI7XHJcblxyXG5jbGFzcyBBV0RCbG9ja1xyXG57XHJcblx0cHVibGljIGlkOm51bWJlcjtcclxuXHRwdWJsaWMgbmFtZTpzdHJpbmc7XHJcblx0cHVibGljIGRhdGE6YW55O1xyXG5cdHB1YmxpYyBsZW46YW55O1xyXG5cdHB1YmxpYyBnZW9JRDpudW1iZXI7XHJcblx0cHVibGljIGV4dHJhczpPYmplY3Q7XHJcblx0cHVibGljIGJ5dGVzOkJ5dGVBcnJheTtcclxuXHRwdWJsaWMgZXJyb3JNZXNzYWdlczpBcnJheTxzdHJpbmc+O1xyXG5cdHB1YmxpYyB1dnNGb3JWZXJ0ZXhBbmltYXRpb246QXJyYXk8QXJyYXk8bnVtYmVyPj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGlzcG9zZSgpXHJcblx0e1xyXG5cclxuXHRcdHRoaXMuaWQgPSBudWxsO1xyXG5cdFx0dGhpcy5ieXRlcyA9IG51bGw7XHJcblx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBudWxsO1xyXG5cdFx0dGhpcy51dnNGb3JWZXJ0ZXhBbmltYXRpb24gPSBudWxsO1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRFcnJvcihlcnJvck1zZzpzdHJpbmcpOnZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZXJyb3JNZXNzYWdlcylcclxuXHRcdFx0dGhpcy5lcnJvck1lc3NhZ2VzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHJcblx0XHR0aGlzLmVycm9yTWVzc2FnZXMucHVzaChlcnJvck1zZyk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBBV0RQcm9wZXJ0aWVzXHJcbntcclxuXHRwdWJsaWMgc2V0KGtleTpudW1iZXIsIHZhbHVlOmFueSk6dm9pZFxyXG5cdHtcclxuXHRcdHRoaXNbIGtleS50b1N0cmluZygpIF0gPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQoa2V5Om51bWJlciwgZmFsbGJhY2s6YW55KTphbnlcclxuXHR7XHJcblx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkudG9TdHJpbmcoKSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXNba2V5LnRvU3RyaW5nKCldO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbGxiYWNrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBCaXRGbGFnc1xyXG57XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTpudW1iZXIgPSAxO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzI6bnVtYmVyID0gMjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUczOm51bWJlciA9IDQ7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHNDpudW1iZXIgPSA4O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzU6bnVtYmVyID0gMTY7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHNjpudW1iZXIgPSAzMjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUc3Om51bWJlciA9IDY0O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzg6bnVtYmVyID0gMTI4O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzk6bnVtYmVyID0gMjU2O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzEwOm51bWJlciA9IDUxMjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUcxMTpudW1iZXIgPSAxMDI0O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzEyOm51bWJlciA9IDIwNDg7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTM6bnVtYmVyID0gNDA5NjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUcxNDpudW1iZXIgPSA4MTkyO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE1Om51bWJlciA9IDE2Mzg0O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE2Om51bWJlciA9IDMyNzY4O1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHRlc3QoZmxhZ3M6bnVtYmVyLCB0ZXN0RmxhZzpudW1iZXIpOmJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKGZsYWdzICYgdGVzdEZsYWcpID09IHRlc3RGbGFnO1xyXG5cdH1cclxufVxyXG4iXX0=