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
var Billboard = require("awayjs-display/lib/entities/Billboard");
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
var BasicMaterial = require("awayjs-display/lib/materials/BasicMaterial");
var AS2SceneGraphFactory = require("awayjs-player/lib/fl/factories/AS2SceneGraphFactory");
var TimelineKeyFrame = require("awayjs-player/lib/fl/timeline/TimelineKeyFrame");
var AddChildCommand = require("awayjs-player/lib/fl/timeline/commands/AddChildCommand");
var UpdatePropertyCommand = require("awayjs-player/lib/fl/timeline/commands/UpdatePropertyCommand");
var RemoveChildCommand = require("awayjs-player/lib/fl/timeline/commands/RemoveChildCommand");
var ApplyAS2DepthsCommand = require("awayjs-player/lib/fl/timeline/commands/ApplyAS2DepthsCommand");
var Font = require("awayjs-display/lib/text/Font");
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
    // Block ID = 25
    AWDParser.prototype.parseBillBoardLibraryBlock = function (blockID) {
        var name = this.parseVarStr();
        var data_id = this._newBlockBytes.readUnsignedInt();
        var mat;
        var returnedArrayMaterial = this.getAssetByID(data_id, [AssetType.MATERIAL]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXIudHMiXSwibmFtZXMiOlsiQVdEUGFyc2VyIiwiQVdEUGFyc2VyLmNvbnN0cnVjdG9yIiwiQVdEUGFyc2VyLnN1cHBvcnRzVHlwZSIsIkFXRFBhcnNlci5zdXBwb3J0c0RhdGEiLCJBV0RQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5TmFtZSIsIkFXRFBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiQVdEUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiQVdEUGFyc2VyLmRpc3Bvc2UiLCJBV0RQYXJzZXIucGFyc2VOZXh0QmxvY2siLCJBV0RQYXJzZXIucGFyc2VUZXNzZWxhdGVkRm9udCIsIkFXRFBhcnNlci5wYXJzZVRleHRGb3JtYXQiLCJBV0RQYXJzZXIucGFyZXNUZXh0RmllbGQiLCJBV0RQYXJzZXIucGFyc2VCaWxsQm9hcmRMaWJyYXJ5QmxvY2siLCJBV0RQYXJzZXIucGFyc2VNZXNoTGlicmFyeUJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlQXVkaW9CbG9jayIsIkFXRFBhcnNlci5wYXJzZVRpbWVMaW5lIiwiQVdEUGFyc2VyLnBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayIsIkFXRFBhcnNlci5wYXJzZVByaW1pdHZlcyIsIkFXRFBhcnNlci5wYXJzZUNvbnRhaW5lciIsIkFXRFBhcnNlci5wYXJzZU1lc2hJbnN0YW5jZSIsIkFXRFBhcnNlci5wYXJzZVNreWJveEluc3RhbmNlIiwiQVdEUGFyc2VyLnBhcnNlTGlnaHQiLCJBV0RQYXJzZXIucGFyc2VDYW1lcmEiLCJBV0RQYXJzZXIucGFyc2VMaWdodFBpY2tlciIsIkFXRFBhcnNlci5wYXJzZU1hdGVyaWFsIiwiQVdEUGFyc2VyLnBhcnNlTWF0ZXJpYWxfdjEiLCJBV0RQYXJzZXIucGFyc2VUZXh0dXJlIiwiQVdEUGFyc2VyLnBhcnNlQ3ViZVRleHR1cmUiLCJBV0RQYXJzZXIucGFyc2VTaGFyZWRNZXRob2RCbG9jayIsIkFXRFBhcnNlci5wYXJzZVNoYWRvd01ldGhvZEJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlQ29tbWFuZCIsIkFXRFBhcnNlci5wYXJzZU1ldGFEYXRhIiwiQVdEUGFyc2VyLnBhcnNlTmFtZVNwYWNlIiwiQVdEUGFyc2VyLnBhcnNlU2hhZG93TWV0aG9kTGlzdCIsIkFXRFBhcnNlci5wYXJzZVNrZWxldG9uIiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b25Qb3NlIiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b25BbmltYXRpb24iLCJBV0RQYXJzZXIucGFyc2VNZXNoUG9zZUFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZVZlcnRleEFuaW1hdGlvblNldCIsIkFXRFBhcnNlci5wYXJzZUFuaW1hdG9yU2V0IiwiQVdEUGFyc2VyLnBhcnNlU2hhcmVkTWV0aG9kTGlzdCIsIkFXRFBhcnNlci5wYXJzZVVzZXJBdHRyaWJ1dGVzIiwiQVdEUGFyc2VyLnBhcnNlUHJvcGVydGllcyIsIkFXRFBhcnNlci5wYXJzZUF0dHJWYWx1ZSIsIkFXRFBhcnNlci5wYXJzZUhlYWRlciIsIkFXRFBhcnNlci5nZXRVVkZvclZlcnRleEFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZVZhclN0ciIsIkFXRFBhcnNlci5nZXRBc3NldEJ5SUQiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdEFzc2V0IiwiQVdEUGFyc2VyLmdldERlZmF1bHRDdWJlVGV4dHVyZSIsIkFXRFBhcnNlci5yZWFkTnVtYmVyIiwiQVdEUGFyc2VyLnBhcnNlTWF0cml4M0QiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXgzMlJhd0RhdGEiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXg0M1Jhd0RhdGEiLCJBV0RCbG9jayIsIkFXREJsb2NrLmNvbnN0cnVjdG9yIiwiQVdEQmxvY2suZGlzcG9zZSIsIkFXREJsb2NrLmFkZEVycm9yIiwiQVdEUHJvcGVydGllcyIsIkFXRFByb3BlcnRpZXMuY29uc3RydWN0b3IiLCJBV0RQcm9wZXJ0aWVzLnNldCIsIkFXRFByb3BlcnRpZXMuZ2V0IiwiQml0RmxhZ3MiLCJCaXRGbGFncy5jb25zdHJ1Y3RvciIsIkJpdEZsYWdzLnRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLElBQU8sU0FBUyxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sY0FBYyxXQUFlLHFDQUFxQyxDQUFDLENBQUM7QUFDM0UsSUFBTyxRQUFRLFdBQWlCLCtCQUErQixDQUFDLENBQUM7QUFDakUsSUFBTyxRQUFRLFdBQWlCLCtCQUErQixDQUFDLENBQUM7QUFDakUsSUFBTyxtQkFBbUIsV0FBYyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ25GLElBQU8sVUFBVSxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ25FLElBQU8sU0FBUyxXQUFnQixtQ0FBbUMsQ0FBQyxDQUFDO0FBRXJFLElBQU8sVUFBVSxXQUFnQixvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3ZFLElBQU8sV0FBVyxXQUFnQixxQ0FBcUMsQ0FBQyxDQUFDO0FBR3pFLElBQU8scUJBQXFCLFdBQWEsbURBQW1ELENBQUMsQ0FBQztBQUM5RixJQUFPLHNCQUFzQixXQUFhLG9EQUFvRCxDQUFDLENBQUM7QUFDaEcsSUFBTywrQkFBK0IsV0FBVyw2REFBNkQsQ0FBQyxDQUFDO0FBQ2hILElBQU8saUJBQWlCLFdBQWMsNENBQTRDLENBQUMsQ0FBQztBQUdwRixJQUFPLGdCQUFnQixXQUFlLDJDQUEyQyxDQUFDLENBQUM7QUFDbkYsSUFBTyxZQUFZLFdBQWdCLHVDQUF1QyxDQUFDLENBQUM7QUFHNUUsSUFBTyxTQUFTLFdBQWdCLGlDQUFpQyxDQUFDLENBQUM7QUFFbkUsSUFBTyxzQkFBc0IsV0FBYSxzREFBc0QsQ0FBQyxDQUFDO0FBRWxHLElBQU8sUUFBUSxXQUFpQixrQ0FBa0MsQ0FBQyxDQUFDO0FBRXBFLElBQU8sbUJBQW1CLFdBQWMsNkNBQTZDLENBQUMsQ0FBQztBQUN2RixJQUFPLGdCQUFnQixXQUFlLDhDQUE4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QUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUMzQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBRTFDQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxLQUFLQSxFQUFVQSxFQUFFQSw2Q0FBNkNBO1FBQ3ZGQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzlCQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFD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QkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3BEQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDaEJBLEtBQUtBLENBQUNBO2dCQUNQQSxLQUFLQSxFQUFFQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xEQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDaEJBLEtBQUtBLENBQUNBO2dCQUNQQSxLQUFLQSxHQUFHQTtvQkFDUEEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hEQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDaEJBLEtBQUtBLENBQUNBO2dCQUNQQSxLQUFLQSxHQUFHQTtvQkFDUEEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDaEJBLEtBQUtBLENBQUNBO2dCQUNQQSxLQUFLQSxHQUFHQTtvQkFDUEEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtvQkFDN0NBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUNoQkEsS0FBS0EsQ0FBQ0E7Z0JBQ1BBLEtBQUtBLEdBQUdBO29CQUNQQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtvQkFDekNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUNoQkEsS0FBS0EsQ0FBQ0E7WUFDUkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBRUEsQ0FBQ0EsQ0FB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Q0EsU0FBU0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekRBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQ0EsSUFBSUEsQ0FBUUEsQ0FBQ0E7WUFJYkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQzVDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzRUEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFFeENBLElBQUlBLENBQUNBLGVBQWVBLENBQVVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQzFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUVsQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGlDQUFpQ0EsR0FBR0EsSUFBSUEsR0FBR0Es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QkFBeUJBLEVBQUVBLHNCQUFzQkEsRUFBRUEseUJBQXlCQSxFQUFFQSx1QkFBdUJBLENBQUNBLENBQUFBO1FBRXpPQSxNQUFNQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUdsQkEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLG9CQUFvQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9KQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0tBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUNySEEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsdUNBQXVDQTtnQkFDbk1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDckRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDeERBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFFL0NBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxtQkFBbUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3SkEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHNCQUFzQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNJQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdklBLEtBQUtBLENBQUNBO1lBRVBBO2dCQUNDQSxNQUFNQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtnQkFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdDQUFnQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxLQUFLQSxDQUFDQTtRQUNSQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUczREEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMzQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkJB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QSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6REEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2pDQSxJQUFJQSxDQUFRQSxDQUFDQTtZQUliQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDNUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNFQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4REEsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO1lBQ3hKQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFTQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFXQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0R0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDeENBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzVCQSxDQUFDQTtRQUVEQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBRXhDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFVQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFFbENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx5QkFBeUJBLEdBQUdBLElBQUlBLEdBQUdBLG9CQUFvQkEsR0FBR0EsVUFBVUEsR0FBR0Esb0JBQW9CQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxpQkFBaUJBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEdBQUdBLGlCQUFpQkEsR0FBR0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDak5BLENBQUNBO0lBQ0ZBLENBQUNBO0lBR0RyQixhQUFhQTtJQUNMQSx1Q0FBbUJBLEdBQTNCQSxVQUE0QkEsT0FBY0E7UUFFekNzQixJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUNyQ0EsSUFBSUEsV0FBV0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7UUFFL0RBLElBQUlBLG9CQUFvQkEsR0FBY0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7UUFDekdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcERBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHVDQUF1Q0EsR0FBR0EsV0FBV0EsR0FBR0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtRQUM5R0EsSUFBSUEsS0FBS0EsR0FBVUEsSUFBSUEsTUFBTUEsQ0FBb0JBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFMUVBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUFBO1FBQzFCQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNsQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDbkNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDJCQUEyQkEsR0FBR0EsSUFBSUEsR0FBR0EseUJBQXlCQSxHQUF1QkEsb0JBQW9CQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUVsSUEsQ0FBQ0E7SUFFRHRCLGVBQWVBO0lBQ1BBLDhCQUFVQSxHQUFsQkEsVUFBbUJBLE9BQWNBO1FBRWhDdUIsSUFBSUEsS0FBZUEsQ0FBQ0E7UUFDcEJBLElBQUlBLGVBQWdDQSxDQUFDQTtRQUVyQ0EsSUFBSUEsTUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7UUFDMURBLElBQUlBLEdBQUdBLEdBQVlBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO1FBQ3hDQSxJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUNyQ0EsSUFBSUEsU0FBU0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUM5REEsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUNBLENBQUNBLENBQUNBO1FBQ3pXQSxJQUFJQSxnQkFBZ0JBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQzlDQSxJQUFJQSxVQUFVQSxHQUFVQSxpQkFBaUJBLENBQUNBO1FBQzFDQSxJQUFJQSxVQUFVQSxHQUFpQkEsQ0FBQ0EsdUJBQXVCQSxFQUFFQSxZQUFZQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO1FBQzNGQSxJQUFJQSxpQkFBaUJBLEdBQWlCQSxDQUFDQSxpQkFBaUJBLEVBQUVBLHlCQUF5QkEsRUFBRUEsNkJBQTZCQSxFQUFFQSxxQkFBcUJBLEVBQUVBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7UUFFbEtBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxLQUFLQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtZQUVYQSxLQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNwQ0EsS0FBTUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFcERBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFnQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMzQkEsZUFBZUEsR0FBR0EsSUFBSUEsbUJBQW1CQSxFQUFFQSxDQUFDQTtnQkFDN0NBLENBQUNBO1lBQ0ZBLENBQUNBO1lBRURBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1FBRWhDQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUVwQkEsS0FBS0EsR0FBR0EsSUFBSUEsZ0JBQWdCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUVwRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMUJBLEVBQUVBLENBQUNBLENBQUNBLGdCQUFnQkEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNCQSxlQUFlQSxHQUFHQSxJQUFJQSx1QkFBdUJBLEVBQUVBLENBQUNBO2dCQUNqREEsQ0FBQ0E7WUFPRkEsQ0FBQ0E7UUFFRkEsQ0FBQ0E7UUFDREEsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDckNBLEtBQUtBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ25DQSxLQUFLQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNsQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBRWxDQSxBQUNBQSxxSEFEcUhBO1FBQ3JIQSxFQUFFQSxDQUFDQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZUFBZUEsWUFBWUEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDcERBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMzQkEsZUFBZUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JFQSxDQUFDQTtZQUNGQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDUEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNCQSxlQUFlQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckVBLENBQUNBO1lBQ0ZBLENBQUNBO1lBRURBLEtBQUtBLENBQUNBLFlBQVlBLEdBQUdBLGVBQWVBLENBQUNBO1lBQ3JDQSxLQUFLQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFakJBLElBQUlBLG1CQUFtQkEsR0FBY0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFFdEhBLEVBQUVBLENBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0ZBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xFQSxVQUFVQSxHQUE2QkEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFFQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNyRUEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHdDQUF3Q0EsQ0FBQ0EsQ0FBQ0E7WUFDMUVBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLEFBQ0FBLDZCQUQ2QkE7WUFDSEEsSUFBSUEsQ0FBQ0EsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDM0RBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFFM0JBLElBQUlBLENBQUNBLGVBQWVBLENBQVdBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBRTVDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUVuQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMEJBQTBCQSxHQUFHQSxJQUFJQSxHQUFHQSxhQUFhQSxHQUFHQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxtQkFBbUJBLEdBQUdBLFVBQVVBLEdBQUdBLHlCQUF5QkEsR0FBR0EsaUJBQWlCQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLENBQUNBO0lBRTlMQSxDQUFDQTtJQUVEdkIsZUFBZUE7SUFDUEEsK0JBQVdBLEdBQW5CQSxVQUFvQkEsT0FBY0E7UUFHakN3QixJQUFJQSxNQUFNQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtRQUMxREEsSUFBSUEsR0FBR0EsR0FBWUEsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7UUFDeENBLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxVQUFVQSxHQUFVQSxpQkFBaUJBLENBQUNBO1FBQzFDQSxJQUFJQSxVQUF5QkEsQ0FBQ0E7UUFFOUJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsRUFBRUEsRUFBRUEsc0JBQXNCQTtRQUM5REEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsZ0NBQWdDQTtRQUVqRUEsSUFBSUEsY0FBY0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDNURBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUU3SUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEJBLEtBQUtBLElBQUlBO2dCQUNSQSxVQUFVQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzREEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsSUFBSUE7Z0JBQ1JBLFVBQVVBLEdBQUdBLElBQUlBLHNCQUFzQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFDUkEsVUFBVUEsR0FBR0EsSUFBSUEsK0JBQStCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdklBLEtBQUtBLENBQUNBO1lBQ1BBO2dCQUNDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFFREEsSUFBSUEsTUFBTUEsR0FBVUEsSUFBSUEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDM0NBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1FBRWhDQSxJQUFJQSxtQkFBbUJBLEdBQWNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUFBO1FBRXRIQSxFQUFFQSxDQUFDQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRTVCQSxJQUFJQSxJQUFJQSxHQUFtREEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFdEJBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBRXhCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EseUNBQXlDQSxDQUFDQSxDQUFDQTtRQUMzRUEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQUFDQUEsNkJBRDZCQTtZQUNIQSxJQUFJQSxDQUFDQSxTQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUM1REEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkJBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1FBQ3BIQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvRUEsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUUxQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFbkNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BLENBQUFBO1FBRW5DQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxHQUFHQSxJQUFJQSxHQUFHQSx1QkFBdUJBLEdBQUdBLFVBQVVBLEdBQUdBLG1CQUFtQkEsR0FBR0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDM0hBLENBQUNBO0lBRUZBLENBQUNBO0lBRUR4QixlQUFlQTtJQUNQQSxvQ0FBZ0JBLEdBQXhCQSxVQUF5QkEsT0FBY0E7UUFFdEN5QixJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUNyQ0EsSUFBSUEsU0FBU0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtRQUMvREEsSUFBSUEsV0FBV0EsR0FBb0JBLElBQUlBLEtBQUtBLEVBQWFBLENBQUNBO1FBQzFEQSxJQUFJQSxDQUFDQSxHQUFVQSxDQUFDQSxDQUFDQTtRQUNqQkEsSUFBSUEsT0FBT0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7UUFFdkJBLElBQUlBLGtCQUE2QkEsQ0FBQ0E7UUFDbENBLElBQUlBLGdCQUFnQkEsR0FBaUJBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO1FBRXpEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxTQUFTQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUNoQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7WUFDaERBLGtCQUFrQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFFbEVBLEVBQUVBLENBQUNBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFhQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwREEsZ0JBQWdCQSxDQUFDQSxJQUFJQSxDQUFlQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRWxFQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDUEEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsNEJBQTRCQSxHQUFHQSxDQUFDQSxHQUFHQSxTQUFTQSxHQUFHQSxPQUFPQSxHQUFHQSx5QkFBeUJBLENBQUNBLENBQUNBO1lBQ3BIQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsOERBQThEQSxDQUFDQSxDQUFDQTtZQUMvRkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtZQUMzQkEsTUFBTUEsRUFBRUEsZ0RBQWdEQTtRQUN6REEsQ0FBQ0EsR0FET0E7UUFHUkEsSUFBSUEsU0FBU0EsR0FBbUJBLElBQUlBLGlCQUFpQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDbkVBLFNBQVNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBRXRCQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFVQSxTQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUUvQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQUE7UUFDdENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxzQ0FBc0NBLEdBQUdBLElBQUlBLEdBQUdBLHFCQUFxQkEsR0FBR0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNsSEEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFFRHpCLGVBQWVBO0lBQ1BBLGlDQUFhQSxHQUFyQkEsVUFBc0JBLE9BQWNBO1FBRW5DMEIsQUFFQUEsaUJBRmlCQTtRQUNqQkEsNEJBQTRCQTtZQUN4QkEsSUFBV0EsQ0FBQ0E7UUFDaEJBLElBQUlBLElBQVdBLENBQUNBO1FBQ2hCQSxJQUFJQSxLQUFtQkEsQ0FBQ0E7UUFDeEJBLElBQUlBLEdBQWtCQSxDQUFDQTtRQUN2QkEsSUFBSUEsVUFBaUJBLENBQUNBO1FBQ3RCQSxJQUFJQSxRQUFnQkEsQ0FBQ0E7UUFDckJBLElBQUlBLFdBQWtCQSxDQUFDQTtRQUN2QkEsSUFBSUEsY0FBcUJBLENBQUNBO1FBQzFCQSxJQUFJQSxhQUF3QkEsQ0FBQ0E7UUFFN0JBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQzFCQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQzlDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBRXJEQSxBQUVBQSxxQ0FGcUNBO1FBQ3JDQSxzRkFBc0ZBO1FBQ3RGQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUV4SkEsY0FBY0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbkJBLE9BQU9BLGNBQWNBLEdBQUdBLFdBQVdBLEVBQUVBLENBQUNBO1lBQ3JDQSxJQUFJQSxXQUFrQkEsQ0FBQ0E7WUFFdkJBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7WUFDdERBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzNCQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1lBQzNCQSxjQUFjQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7UUFDREEsSUFBSUEsV0FBV0EsR0FBVUEsRUFBRUEsQ0FBQ0E7UUFDNUJBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDeENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxXQUFXQSxJQUFJQSw4Q0FBOENBLEdBQUdBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBO1lBQzlFQSxJQUFJQSxLQUFZQSxDQUFDQTtZQUNqQkEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzQkEsR0FBR0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckRBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNQQSxHQUFHQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDaENBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDMUNBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxRQUFRQSxHQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUV0Q0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFakVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsMENBQTBDQSxHQUFHQSxRQUFRQSxHQUFHQSxzQkFBc0JBLENBQUNBLENBQUNBO1lBRWhIQSxHQUFHQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFpQkEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFM0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzQkEsR0FBR0EsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pDQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDL0JBLFdBQVdBLElBQUlBLCtDQUErQ0EsR0FBR0EsSUFBSUEsR0FBR0EscUJBQXFCQSxHQUFHQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUMxR0EsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7Z0JBQ3pDQSxXQUFXQSxJQUFJQSw4Q0FBOENBLEdBQUdBLElBQUlBLEdBQUdBLHFCQUFxQkEsR0FBR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDekdBLENBQUNBO1FBQ0ZBLENBQUNBO1FBRURBLEdBQUdBLENBQUNBLEtBQUtBLEdBQUdBLFVBQVVBLENBQUNBO1FBQ3ZCQSxHQUFHQSxDQUFDQSxjQUFjQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN4Q0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLElBQUlBLENBQUNBLGVBQWVBLENBQVVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUVqQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1FBRTFCQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVEMUIsdUJBQXVCQTtJQUNmQSxvQ0FBZ0JBLEdBQXhCQSxVQUF5QkEsT0FBY0E7UUFFdEMyQixJQUFJQSxHQUFrQkEsQ0FBQ0E7UUFDdkJBLElBQUlBLGFBQTJCQSxDQUFDQTtRQUNoQ0EsSUFBSUEsV0FBeUJBLENBQUNBO1FBQzlCQSxJQUFJQSxhQUF3QkEsQ0FBQ0E7UUFFN0JBLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3pEQSxJQUFJQSxXQUFXQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ2hFQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbmRBLElBQUlBLFdBQVdBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxXQUFXQSxHQUFVQSxrQkFBa0JBLENBQUNBO1FBRTVDQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0Esd0JBQXdCQSxHQUFHQSxXQUFXQSxHQUFHQSw2REFBNkRBLENBQUNBLENBQUNBO1lBQ3ZJQSxNQUFNQSxDQUFDQTtRQUNSQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNm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Q0FBQ0E7Z0JBRXREQSxDQUFDQTtnQkFFREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDaENBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNwQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDN0NBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNuREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBRWxDQSxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQTtvQkFDakJBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLGFBQWFBLENBQUNBO2dCQUUvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0E7b0JBQ2ZBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLFdBQVdBLENBQUNBO2dCQUUvQkEsR0FBR0EsQ0FBQ0EsY0FBY0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxHQUFHQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFD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QUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQ3hCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUN4REEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFOUJBLEFBQ0FBLFdBRFdBO1lBQ1hBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNmQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtnQkFDakRBLElBQUlBLEdBQVVBLENBQUNBO2dCQUNmQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFFakRBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLEVBQUVBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3ZHQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFFUEEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxJQUFJQSxJQUFjQSxDQUFDQTtnQkFDbkJBLElBQUlBLEdBQUdBLElBQUlBLFNBQVNBLEVBQUVBLENBQUNBO2dCQUV2QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBRWpEQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxXQUFXQSxDQUFDQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3RIQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVEQSxBQUNBQSxpQkFEaUJBO1FBQ2pCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMzQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMxREEsSUFBSUEsQ0FBQ0EsOEJBQThCQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFFbkNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxJQUFJQSxrQkFBa0JBLEdBQWlCQSxDQUFDQSxVQUFVQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFBQTtZQUM1REEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLDBCQUEwQkEsQ0FBQ0EsQ0FBQ0E7UUFDekZBLENBQUNBO0lBQ0ZBLENBQUNBO0lBRUQ3QixlQUFlQTtJQUNQQSwwQ0FBc0JBLEdBQTlCQSxVQUErQkEsT0FBY0E7UUFFNUM4QixJQUFJQSxLQUFzQkEsQ0FBQ0E7UUFFM0JBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ2hEQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUNuQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBVUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDakVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO1FBRW5DQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0NBQWdDQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxHQUFHQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNqRkEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFFRDlCLGVBQWVBO0lBQ1BBLDBDQUFzQkEsR0FBOUJBLFVBQStCQSxPQUFjQTtRQUU1QytCLElBQUlBLElBQVdBLENBQUNBO1FBQ2hCQSxJQUFJQSxRQUFlQSxDQUFDQTtRQUNwQkEsSUFBSUEsS0FBc0JBLENBQUNBO1FBQzNCQSxJQUFJQSxhQUFvQkEsQ0FBQ0E7UUFDekJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRWhEQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtRQUN0REEsSUFBSUEsYUFBYUEsR0FBY0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFbkZBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSx1Q0FBdUNBLEdBQUdBLGFBQWFBLEdBQUdBLHFEQUFxREEsQ0FBQ0EsQ0FBQ0E7WUFDaEpBLE1BQU1BLENBQUNBO1FBQ1JBLENBQUNBO1FBRURBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBYUEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFFMUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1lBQ1ZBLE1BQU1BLENBQUNBO1FBRVJBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsRUFBRUEsaUJBQWlCQTtRQUM3Q0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBVUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDakVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO1FBRW5DQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EseUNBQXlDQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxHQUFHQSxZQUFZQSxHQUFHQSxLQUFLQSxHQUFHQSxrQkFBa0JBLEVBQWdCQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN4SkEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFHRC9CLGdCQUFnQkE7SUFDUkEsZ0NBQVlBLEdBQXBCQSxVQUFxQkEsT0FBY0E7UUFFbENnQyxJQUFJQSxTQUFTQSxHQUFXQSxDQUFFQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLElBQUlBLENBQUNBLENBQUVBLENBQUNBO1FBQ3hFQSxJQUFJQSxNQUFNQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtRQUMxREEsSUFBSUEsR0FBR0EsR0FBWUEsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7UUFDeENBLElBQUlBLElBQUlBLEdBQVVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRXJDQSxJQUFJQSxZQUFtQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLFlBQW1DQSxDQUFDQTtRQUV4Q0EsSUFBSUEsYUFBYUEsR0FBY0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFakhBLEVBQUVBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RCQSxZQUFZQSxHQUE0QkEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDMURBLENBQUNBO1FBRURBLElBQUlBLFdBQVdBLEdBQVVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO1FBQ3pEQSxJQUFJQSxXQUFXQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtRQUV6REEsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1FBRXBFQSxNQUFNQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyQkEsS0FBS0EsQ0FBQ0E7Z0JBRUxBLElBQUlBLFFBQVFBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0Q0EsSUFBSUEsbUJBQW1CQSxHQUFjQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBLEVBQUVBLG9DQUFvQ0E7Z0JBRXRKQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNsREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsaUNBQWlDQSxHQUFHQSxRQUFRQSxHQUFHQSwwQkFBMEJBLENBQUNBLENBQUNBO29CQUMxR0EsTUFBTUEsQ0FBQ0E7Z0JBQ1JBLENBQUNBO2dCQUVEQSxZQUFZQSxHQUFHQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUV0Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxZQUFZQSxDQUFDQSxRQUFRQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtnQkFDckNBLENBQUNBO2dCQUVEQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtnQkFFdENBLEtBQUtBLENBQUNBO1FBQ1JBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xCQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtZQUVwSEEsWUFBWUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckZBLFlBQVlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFFakRBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLFlBQVlBLENBQUFBO1FBRXpDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUNBQWlDQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN2REEsQ0FBQ0E7SUFFRkEsQ0FBQ0E7SUFFRGhDLGFBQWFBO0lBQ0xBLGlDQUFhQSxHQUFyQkEsVUFBc0JBLE9BQWNBO1FBRW5DaUMsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUNBLENBQUNBLENBQUNBO1FBRWpLQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5RUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2RkEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFFRGpDLGFBQWFBO0lBQ0xBLGtDQUFjQSxHQUF0QkEsVUFBdUJBLE9BQWNBO1FBRXBDa0MsSUFBSUEsRUFBRUEsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUN2REEsSUFBSUEsZUFBZUEsR0FBVUEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDaERBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdDQUFnQ0EsR0FBR0EsRUFBRUEsR0FBR0EsY0FBY0EsR0FBR0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7SUFDeEZBLENBQUNBO0lBRURsQywyRkFBMkZBO0lBRTNGQSx3REFBd0RBO0lBQ2hEQSx5Q0FBcUJBLEdBQTdCQSxVQUE4QkEsS0FBZUEsRUFBRUEsT0FBY0E7UUFHNURtQyxJQUFJQSxVQUFVQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ2hFQSxJQUFJQSxZQUE2QkEsQ0FBQ0E7UUFDbENBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUV6WkEsSUFBSUEsUUFBZUEsQ0FBQ0E7UUFDcEJBLElBQUlBLGFBQXdCQSxDQUFBQTtRQUM1QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFVcEJBLEtBQUtBLElBQUlBO2dCQUNSQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLDRDQUE0Q0EsR0FBR0EsUUFBUUEsR0FBR0EseURBQXlEQSxDQUFDQSxDQUFDQTtvQkFDcEpBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBQ0RBLFlBQVlBLEdBQUdBLElBQUlBLGdCQUFnQkEsQ0FBb0JBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6RUEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsSUFBSUE7Z0JBRVJBLFlBQVlBLEdBQUdBLElBQUlBLG9CQUFvQkEsQ0FBb0JBLEtBQUtBLENBQUNBLENBQUNBO2dCQUMxQ0EsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxZQUFhQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDdEVBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLElBQUlBO2dCQUdSQSxZQUFZQSxHQUFHQSxJQUFJQSxvQkFBb0JBLENBQW9CQSxLQUFLQSxFQUFXQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEVBLFlBQWFBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4Q0EsWUFBYUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFaEVBLEtBQUtBLENBQUNBO1lBQ1BBLEtBQUtBLElBQUlBO2dCQUVSQSxZQUFZQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLENBQW9CQSxLQUFLQSxFQUFXQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEVBLFlBQWFBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4Q0EsWUFBYUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFNURBLEtBQUtBLENBQUNBO1lBQ1BBLEtBQUtBLElBQUlBO2dCQUNSQSxZQUFZQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUN2QkEsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0Es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LENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7UUFDaEVBLElBQUlBLGtCQUFtQ0EsQ0FBQ0E7UUFFeENBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUMvZEEsSUFBSUEsUUFBZUEsQ0FBQ0E7UUFDcEJBLElBQUlBLGFBQXdCQSxDQUFDQTtRQUU3QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFcEJBLEtBQUtBLEdBQUdBO2dCQUNQQSxrQkFBa0JBLEdBQUdBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hJQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxHQUFHQTtnQkFDUEEsa0JBQWtCQSxHQUFHQSxJQUFJQSwwQkFBMEJBLEVBQUVBLENBQUNBO2dCQUN0REEsSUFBSUEsTUFBTUEsR0FBbUJBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO2dCQUMxQkEsa0JBQW1CQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFD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QUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNqQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDbEJBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3BEQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FB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QUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxRQUFRQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFwQmFGLGNBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxjQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsY0FBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDakJBLGNBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxjQUFLQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNsQkEsY0FBS0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDbEJBLGNBQUtBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ2xCQSxjQUFLQSxHQUFVQSxHQUFHQSxDQUFDQTtJQUNuQkEsY0FBS0EsR0FBVUEsR0FBR0EsQ0FBQ0E7SUFDbkJBLGVBQU1BLEdBQVVBLEdBQUdBLENBQUNBO0lBQ3BCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLElBQUlBLENBQUNBO0lBQ3JCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsS0FBS0EsQ0FBQ0E7SUFDdEJBLGVBQU1BLEdBQVVBLEtBQUtBLENBQUNBO0lBTXJDQSxlQUFDQTtBQUFEQSxDQXZCQSxBQXVCQ0EsSUFBQTtBQWhGRCxpQkFBUyxTQUFTLENBQUMiLCJmaWxlIjoiQVdEUGFyc2VyLmpzIiwic291cmNlUm9vdCI6Ii4uLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaXRtYXBEYXRhXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2Jhc2UvQml0bWFwRGF0YVwiKTtcbmltcG9ydCBCbGVuZE1vZGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvYmFzZS9CbGVuZE1vZGVcIik7XG5pbXBvcnQgQ29sb3JUcmFuc2Zvcm1cdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vQ29sb3JUcmFuc2Zvcm1cIik7XG5pbXBvcnQgTWF0cml4M0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL01hdHJpeDNEXCIpO1xuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XG5pbXBvcnQgVVJMUmVxdWVzdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMUmVxdWVzdFwiKTtcbmltcG9ydCBBc3NldFR5cGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldFR5cGVcIik7XG5pbXBvcnQgSUFzc2V0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9JQXNzZXRcIik7XG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XG5pbXBvcnQgUGFyc2VyVXRpbHNcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJVdGlsc1wiKTtcbmltcG9ydCBSZXNvdXJjZURlcGVuZGVuY3lcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1Jlc291cmNlRGVwZW5kZW5jeVwiKTtcbmltcG9ydCBQcm9qZWN0aW9uQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvUHJvamVjdGlvbkJhc2VcIik7XG5pbXBvcnQgUGVyc3BlY3RpdmVQcm9qZWN0aW9uXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL1BlcnNwZWN0aXZlUHJvamVjdGlvblwiKTtcbmltcG9ydCBPcnRob2dyYXBoaWNQcm9qZWN0aW9uXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL09ydGhvZ3JhcGhpY1Byb2plY3Rpb25cIik7XG5pbXBvcnQgT3J0aG9ncmFwaGljT2ZmQ2VudGVyUHJvamVjdGlvblx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL09ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb25cIik7XG5pbXBvcnQgQml0bWFwQ3ViZVRleHR1cmVcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9CaXRtYXBDdWJlVGV4dHVyZVwiKTtcbmltcG9ydCBCaXRtYXBUZXh0dXJlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9CaXRtYXBUZXh0dXJlXCIpO1xuaW1wb3J0IEN1YmVUZXh0dXJlQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvQ3ViZVRleHR1cmVCYXNlXCIpO1xuaW1wb3J0IEltYWdlQ3ViZVRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0ltYWdlQ3ViZVRleHR1cmVcIik7XG5pbXBvcnQgSW1hZ2VUZXh0dXJlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0ltYWdlVGV4dHVyZVwiKTtcbmltcG9ydCBUZXh0dXJlMkRCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlMkRCYXNlXCIpO1xuaW1wb3J0IFRleHR1cmVQcm94eUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL1RleHR1cmVQcm94eUJhc2VcIik7XG5pbXBvcnQgQnl0ZUFycmF5XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL0J5dGVBcnJheVwiKTtcblxuaW1wb3J0IERpc3BsYXlPYmplY3RDb250YWluZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9EaXNwbGF5T2JqZWN0Q29udGFpbmVyXCIpO1xuaW1wb3J0IERpc3BsYXlPYmplY3RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvRGlzcGxheU9iamVjdFwiKTtcbmltcG9ydCBHZW9tZXRyeVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvR2VvbWV0cnlcIik7XG5pbXBvcnQgTGlnaHRCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvTGlnaHRCYXNlXCIpO1xuaW1wb3J0IFRyaWFuZ2xlU3ViR2VvbWV0cnlcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL1RyaWFuZ2xlU3ViR2VvbWV0cnlcIik7XG5pbXBvcnQgRGlyZWN0aW9uYWxMaWdodFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvRGlyZWN0aW9uYWxMaWdodFwiKTtcbmltcG9ydCBQb2ludExpZ2h0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1BvaW50TGlnaHRcIik7XG5pbXBvcnQgQ2FtZXJhXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvQ2FtZXJhXCIpO1xuaW1wb3J0IE1lc2hcdFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL01lc2hcIik7XG5pbXBvcnQgQmlsbGJvYXJkXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0JpbGxib2FyZFwiKTtcbmltcG9ydCBTa3lib3hcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9Ta3lib3hcIik7XG5pbXBvcnQgTWF0ZXJpYWxCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9NYXRlcmlhbEJhc2VcIik7XG5pbXBvcnQgTGlnaHRQaWNrZXJCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvbGlnaHRwaWNrZXJzL0xpZ2h0UGlja2VyQmFzZVwiKTtcbmltcG9ydCBTdGF0aWNMaWdodFBpY2tlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9saWdodHBpY2tlcnMvU3RhdGljTGlnaHRQaWNrZXJcIik7XG5pbXBvcnQgQ3ViZU1hcFNoYWRvd01hcHBlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL0N1YmVNYXBTaGFkb3dNYXBwZXJcIik7XG5pbXBvcnQgRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL3NoYWRvd21hcHBlcnMvRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXJcIik7XG5pbXBvcnQgU2hhZG93TWFwcGVyQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL3NoYWRvd21hcHBlcnMvU2hhZG93TWFwcGVyQmFzZVwiKTtcbmltcG9ydCBQcmVmYWJCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJlZmFiQmFzZVwiKTtcbmltcG9ydCBQcmltaXRpdmVDYXBzdWxlUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ2Fwc3VsZVByZWZhYlwiKTtcbmltcG9ydCBQcmltaXRpdmVDb25lUHJlZmFiXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDb25lUHJlZmFiXCIpO1xuaW1wb3J0IFByaW1pdGl2ZUN1YmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUN1YmVQcmVmYWJcIik7XG5pbXBvcnQgUHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDeWxpbmRlclByZWZhYlwiKTtcbmltcG9ydCBQcmltaXRpdmVQbGFuZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlUGxhbmVQcmVmYWJcIik7XG5pbXBvcnQgUHJpbWl0aXZlU3BoZXJlUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlU3BoZXJlUHJlZmFiXCIpO1xuaW1wb3J0IFByaW1pdGl2ZVRvcnVzUHJlZmFiXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVUb3J1c1ByZWZhYlwiKTtcblxuaW1wb3J0IEFuaW1hdGlvblNldEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9BbmltYXRpb25TZXRCYXNlXCIpO1xuaW1wb3J0IEFuaW1hdG9yQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvQW5pbWF0b3JCYXNlXCIpO1xuaW1wb3J0IFZlcnRleEFuaW1hdGlvblNldFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9WZXJ0ZXhBbmltYXRpb25TZXRcIik7XG5pbXBvcnQgVmVydGV4QW5pbWF0b3JcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9WZXJ0ZXhBbmltYXRvclwiKTtcbmltcG9ydCBTa2VsZXRvbkFuaW1hdGlvblNldFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9Ta2VsZXRvbkFuaW1hdGlvblNldFwiKTtcbmltcG9ydCBTa2VsZXRvbkFuaW1hdG9yXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvU2tlbGV0b25BbmltYXRvclwiKTtcbmltcG9ydCBKb2ludFBvc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvSm9pbnRQb3NlXCIpO1xuaW1wb3J0IFNrZWxldG9uXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvU2tlbGV0b25cIik7XG5pbXBvcnQgU2tlbGV0b25Qb3NlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL1NrZWxldG9uUG9zZVwiKTtcbmltcG9ydCBTa2VsZXRvbkpvaW50XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvbkpvaW50XCIpO1xuaW1wb3J0IFNrZWxldG9uQ2xpcE5vZGVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9ub2Rlcy9Ta2VsZXRvbkNsaXBOb2RlXCIpO1xuaW1wb3J0IFZlcnRleENsaXBOb2RlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvbm9kZXMvVmVydGV4Q2xpcE5vZGVcIik7XG5pbXBvcnQgRGVmYXVsdE1hdGVyaWFsTWFuYWdlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9tYW5hZ2Vycy9EZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXCIpO1xuXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxNb2RlXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9NZXRob2RNYXRlcmlhbE1vZGVcIik7XG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxcIik7XG5pbXBvcnQgQW1iaWVudEVudk1hcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9BbWJpZW50RW52TWFwTWV0aG9kXCIpO1xuaW1wb3J0IERpZmZ1c2VEZXB0aE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9EaWZmdXNlRGVwdGhNZXRob2RcIik7XG5pbXBvcnQgRGlmZnVzZUNlbE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VDZWxNZXRob2RcIik7XG5pbXBvcnQgRGlmZnVzZUdyYWRpZW50TWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9EaWZmdXNlR3JhZGllbnRNZXRob2RcIik7XG5pbXBvcnQgRGlmZnVzZUxpZ2h0TWFwTWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9EaWZmdXNlTGlnaHRNYXBNZXRob2RcIik7XG5pbXBvcnQgRGlmZnVzZVdyYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZVdyYXBNZXRob2RcIik7XG5pbXBvcnQgRWZmZWN0QWxwaGFNYXNrTWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RBbHBoYU1hc2tNZXRob2RcIik7XG5pbXBvcnQgRWZmZWN0Q29sb3JNYXRyaXhNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdENvbG9yTWF0cml4TWV0aG9kXCIpO1xuaW1wb3J0IEVmZmVjdENvbG9yVHJhbnNmb3JtTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2RcIik7XG5pbXBvcnQgRWZmZWN0RW52TWFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEVudk1hcE1ldGhvZFwiKTtcbmltcG9ydCBFZmZlY3RGb2dNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RGb2dNZXRob2RcIik7XG5pbXBvcnQgRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdEZyZXNuZWxFbnZNYXBNZXRob2RcIik7XG5pbXBvcnQgRWZmZWN0TGlnaHRNYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0TGlnaHRNYXBNZXRob2RcIik7XG5pbXBvcnQgRWZmZWN0TWV0aG9kQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdE1ldGhvZEJhc2VcIik7XG5pbXBvcnQgRWZmZWN0UmltTGlnaHRNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0UmltTGlnaHRNZXRob2RcIik7XG5pbXBvcnQgTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL05vcm1hbFNpbXBsZVdhdGVyTWV0aG9kXCIpO1xuaW1wb3J0IFNoYWRvd0RpdGhlcmVkTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0RpdGhlcmVkTWV0aG9kXCIpO1xuaW1wb3J0IFNoYWRvd0ZpbHRlcmVkTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0ZpbHRlcmVkTWV0aG9kXCIpO1xuaW1wb3J0IFNoYWRvd01ldGhvZEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dNZXRob2RCYXNlXCIpO1xuaW1wb3J0IFNwZWN1bGFyRnJlc25lbE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJGcmVzbmVsTWV0aG9kXCIpO1xuaW1wb3J0IFNoYWRvd0hhcmRNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dIYXJkTWV0aG9kXCIpO1xuaW1wb3J0IFNwZWN1bGFyQW5pc290cm9waWNNZXRob2RcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kXCIpO1xuaW1wb3J0IFNwZWN1bGFyQ2VsTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyQ2VsTWV0aG9kXCIpO1xuaW1wb3J0IFNwZWN1bGFyUGhvbmdNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJQaG9uZ01ldGhvZFwiKTtcbmltcG9ydCBTaGFkb3dOZWFyTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93TmVhck1ldGhvZFwiKTtcbmltcG9ydCBTaGFkb3dTb2Z0TWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93U29mdE1ldGhvZFwiKTtcblxuaW1wb3J0IFN1Ykdlb21ldHJ5QmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9TdWJHZW9tZXRyeUJhc2VcIik7XG5pbXBvcnQgQ3VydmVTdWJHZW9tZXRyeVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9DdXJ2ZVN1Ykdlb21ldHJ5XCIpO1xuaW1wb3J0IEN1cnZlTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9DdXJ2ZU1hdGVyaWFsXCIpXG5pbXBvcnQgQmFzaWNNYXRlcmlhbFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL0Jhc2ljTWF0ZXJpYWxcIik7XG5cblxuaW1wb3J0IFRpbWVsaW5lU2NlbmVHcmFwaEZhY3RvcnkgXHQ9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC9mYWN0b3JpZXMvVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeVwiKTtcbmltcG9ydCBBUzJTY2VuZUdyYXBoRmFjdG9yeSBcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvZmFjdG9yaWVzL0FTMlNjZW5lR3JhcGhGYWN0b3J5XCIpO1xuaW1wb3J0IE1vdmllQ2xpcCBcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvZGlzcGxheS9Nb3ZpZUNsaXBcIik7XG5pbXBvcnQgVGltZWxpbmVLZXlGcmFtZSBcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC90aW1lbGluZS9UaW1lbGluZUtleUZyYW1lXCIpO1xuaW1wb3J0IEFkZENoaWxkQ29tbWFuZCBcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL3RpbWVsaW5lL2NvbW1hbmRzL0FkZENoaWxkQ29tbWFuZFwiKTtcbmltcG9ydCBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQgXHRcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZsL3RpbWVsaW5lL2NvbW1hbmRzL1VwZGF0ZVByb3BlcnR5Q29tbWFuZFwiKTtcbmltcG9ydCBSZW1vdmVDaGlsZENvbW1hbmQgXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZmwvdGltZWxpbmUvY29tbWFuZHMvUmVtb3ZlQ2hpbGRDb21tYW5kXCIpO1xuaW1wb3J0IEFwcGx5QVMyRGVwdGhzQ29tbWFuZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mbC90aW1lbGluZS9jb21tYW5kcy9BcHBseUFTMkRlcHRoc0NvbW1hbmRcIik7XG5cbmltcG9ydCBGb250XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvdGV4dC9Gb250XCIpO1xuaW1wb3J0IFRlc3NlbGF0ZWRGb250VGFibGVcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvdGV4dC9UZXNzZWxhdGVkRm9udFRhYmxlXCIpO1xuLyoqXG4gKiBBV0RQYXJzZXIgcHJvdmlkZXMgYSBwYXJzZXIgZm9yIHRoZSBBV0QgZGF0YSB0eXBlLlxuICovXG5jbGFzcyBBV0RQYXJzZXIgZXh0ZW5kcyBQYXJzZXJCYXNlXG57XG5cdC8vc2V0IHRvIFwidHJ1ZVwiIHRvIGhhdmUgc29tZSBjb25zb2xlLmxvZ3MgaW4gdGhlIENvbnNvbGVcblx0cHJpdmF0ZSBfZGVidWc6Ym9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgX2J5dGVEYXRhOkJ5dGVBcnJheTtcblx0cHJpdmF0ZSBfc3RhcnRlZFBhcnNpbmc6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9jdXJfYmxvY2tfaWQ6bnVtYmVyO1xuXHRwcml2YXRlIF9ibG9ja3M6QXJyYXk8QVdEQmxvY2s+O1xuXHRwcml2YXRlIF9uZXdCbG9ja0J5dGVzOkJ5dGVBcnJheTtcblx0cHJpdmF0ZSBfdmVyc2lvbjpBcnJheTxudW1iZXI+O1xuXHRwcml2YXRlIF9jb21wcmVzc2lvbjpudW1iZXI7XG5cdHByaXZhdGUgX2FjY3VyYWN5T25CbG9ja3M6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfYWNjdXJhY3lNYXRyaXg6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfYWNjdXJhY3lHZW86Ym9vbGVhbjtcblx0cHJpdmF0ZSBfYWNjdXJhY3lQcm9wczpib29sZWFuO1xuXHRwcml2YXRlIF9tYXRyaXhOclR5cGU6bnVtYmVyO1xuXHRwcml2YXRlIF9nZW9OclR5cGU6bnVtYmVyO1xuXHRwcml2YXRlIF9wcm9wc05yVHlwZTpudW1iZXI7XG5cdHByaXZhdGUgX3N0cmVhbWluZzpib29sZWFuO1xuXHRwcml2YXRlIF90ZXh0dXJlX3VzZXJzOk9iamVjdCA9IHt9O1xuXHRwcml2YXRlIF9wYXJzZWRfaGVhZGVyOmJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfYm9keTpCeXRlQXJyYXk7XG5cdHByaXZhdGUgX2RlZmF1bHRUZXh0dXJlOkJpdG1hcFRleHR1cmU7ICAgICAvLyBIVE1MIElNQUdFIFRFWFRVUkUgPj8gIVxuXHRwcml2YXRlIF9jdWJlVGV4dHVyZXM6QXJyYXk8YW55Pjtcblx0cHJpdmF0ZSBfZGVmYXVsdEJpdG1hcE1hdGVyaWFsOk1ldGhvZE1hdGVyaWFsO1xuXHRwcml2YXRlIF9kZWZhdWx0Q3ViZVRleHR1cmU6Qml0bWFwQ3ViZVRleHR1cmU7XG5cblx0cHVibGljIHN0YXRpYyBDT01QUkVTU0lPTk1PREVfTFpNQTpzdHJpbmcgPSBcImx6bWFcIjtcblx0cHVibGljIHN0YXRpYyBVTkNPTVBSRVNTRUQ6bnVtYmVyID0gMDtcblx0cHVibGljIHN0YXRpYyBERUZMQVRFOm51bWJlciA9IDE7XG5cdHB1YmxpYyBzdGF0aWMgTFpNQTpudW1iZXIgPSAyO1xuXHRwdWJsaWMgc3RhdGljIElOVDg6bnVtYmVyID0gMTtcblx0cHVibGljIHN0YXRpYyBJTlQxNjpudW1iZXIgPSAyO1xuXHRwdWJsaWMgc3RhdGljIElOVDMyOm51bWJlciA9IDM7XG5cdHB1YmxpYyBzdGF0aWMgVUlOVDg6bnVtYmVyID0gNDtcblx0cHVibGljIHN0YXRpYyBVSU5UMTY6bnVtYmVyID0gNTtcblx0cHVibGljIHN0YXRpYyBVSU5UMzI6bnVtYmVyID0gNjtcblx0cHVibGljIHN0YXRpYyBGTE9BVDMyOm51bWJlciA9IDc7XG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQ2NDpudW1iZXIgPSA4O1xuXHRwdWJsaWMgc3RhdGljIEJPT0w6bnVtYmVyID0gMjE7XG5cdHB1YmxpYyBzdGF0aWMgQ09MT1I6bnVtYmVyID0gMjI7XG5cdHB1YmxpYyBzdGF0aWMgQkFERFI6bnVtYmVyID0gMjM7XG5cdHB1YmxpYyBzdGF0aWMgQVdEU1RSSU5HOm51bWJlciA9IDMxO1xuXHRwdWJsaWMgc3RhdGljIEFXREJZVEVBUlJBWTpudW1iZXIgPSAzMjtcblx0cHVibGljIHN0YXRpYyBWRUNUT1IyeDE6bnVtYmVyID0gNDE7XG5cdHB1YmxpYyBzdGF0aWMgVkVDVE9SM3gxOm51bWJlciA9IDQyO1xuXHRwdWJsaWMgc3RhdGljIFZFQ1RPUjR4MTpudW1iZXIgPSA0Mztcblx0cHVibGljIHN0YXRpYyBNVFgzeDI6bnVtYmVyID0gNDQ7XG5cdHB1YmxpYyBzdGF0aWMgTVRYM3gzOm51bWJlciA9IDQ1O1xuXHRwdWJsaWMgc3RhdGljIE1UWDR4MzpudW1iZXIgPSA0Njtcblx0cHVibGljIHN0YXRpYyBNVFg0eDQ6bnVtYmVyID0gNDc7XG5cblx0cHJpdmF0ZSBibGVuZE1vZGVEaWM6QXJyYXk8c3RyaW5nPjtcblx0cHJpdmF0ZSBfZGVwdGhTaXplRGljOkFycmF5PG51bWJlcj47XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgQVdEUGFyc2VyIG9iamVjdC5cblx0ICogQHBhcmFtIHVyaSBUaGUgdXJsIG9yIGlkIG9mIHRoZSBkYXRhIG9yIGZpbGUgdG8gYmUgcGFyc2VkLlxuXHQgKiBAcGFyYW0gZXh0cmEgVGhlIGhvbGRlciBmb3IgZXh0cmEgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIHBhcnNlciBtaWdodCBuZWVkLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5BUlJBWV9CVUZGRVIpO1xuXG5cdFx0dGhpcy5fYmxvY2tzID0gbmV3IEFycmF5PEFXREJsb2NrPigpO1xuXHRcdHRoaXMuX2Jsb2Nrc1swXSA9IG5ldyBBV0RCbG9jaygpO1xuXHRcdHRoaXMuX2Jsb2Nrc1swXS5kYXRhID0gbnVsbDsgLy8gWmVybyBhZGRyZXNzIG1lYW5zIG51bGwgaW4gQVdEXG5cblx0XHR0aGlzLmJsZW5kTW9kZURpYyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7IC8vIHVzZWQgdG8gdHJhbnNsYXRlIGludHMgdG8gYmxlbmRNb2RlLXN0cmluZ3Ncblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5OT1JNQUwpO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkFERCk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuQUxQSEEpO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkRBUktFTik7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuRElGRkVSRU5DRSk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuRVJBU0UpO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkhBUkRMSUdIVCk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuSU5WRVJUKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5MQVlFUik7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTElHSFRFTik7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTVVMVElQTFkpO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk5PUk1BTCk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuT1ZFUkxBWSk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuU0NSRUVOKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5TSEFERVIpO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk9WRVJMQVkpO1xuXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljID0gbmV3IEFycmF5PG51bWJlcj4oKTsgLy8gdXNlZCB0byB0cmFuc2xhdGUgaW50cyB0byBkZXB0aFNpemUtdmFsdWVzXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMjU2KTtcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMucHVzaCg1MTIpO1xuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDIwNDgpO1xuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDEwMjQpO1xuXHRcdHRoaXMuX3ZlcnNpb24gPSBBcnJheTxudW1iZXI+KCk7IC8vIHdpbGwgY29udGFpbiAyIGludCAobWFqb3ItdmVyc2lvbiwgbWlub3ItdmVyc2lvbikgZm9yIGF3ZC12ZXJzaW9uLWNoZWNrXG5cdH1cblxuXHQvKipcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gZmlsZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGJ5IHRoZSBwYXJzZXIuXG5cdCAqIEBwYXJhbSBleHRlbnNpb24gVGhlIGZpbGUgZXh0ZW5zaW9uIG9mIGEgcG90ZW50aWFsIGZpbGUgdG8gYmUgcGFyc2VkLlxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBmaWxlIHR5cGUgaXMgc3VwcG9ydGVkLlxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c1R5cGUoZXh0ZW5zaW9uOnN0cmluZyk6Ym9vbGVhblxuXHR7XG5cdFx0ZXh0ZW5zaW9uID0gZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIGV4dGVuc2lvbiA9PSBcImF3ZFwiO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRlc3RzIHdoZXRoZXIgYSBkYXRhIGJsb2NrIGNhbiBiZSBwYXJzZWQgYnkgdGhlIHBhcnNlci5cblx0ICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgYmxvY2sgdG8gcG90ZW50aWFsbHkgYmUgcGFyc2VkLlxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBkYXRhIGlzIHN1cHBvcnRlZC5cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNEYXRhKGRhdGE6YW55KTpib29sZWFuXG5cdHtcblx0XHRyZXR1cm4gKFBhcnNlclV0aWxzLnRvU3RyaW5nKGRhdGEsIDMpID09ICdBV0QnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3kocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSlcblx0e1xuXHRcdC8vIHRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBEZXBlbmRlbmN5IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuXHRcdC8vIHRoZSBBc3NldHMgd2FpdGluZyBmb3IgdGhpcyBCaXRtYXAsIGNhbiBiZSBUZXh0dXJlIG9yIEN1YmVUZXh0dXJlLlxuXHRcdC8vIGlmIHRoZSBCaXRtYXAgaXMgYXdhaXRlZCBieSBhIEN1YmVUZXh0dXJlLCB3ZSBuZWVkIHRvIGNoZWNrIGlmIGl0cyB0aGUgbGFzdCBCaXRtYXAgb2YgdGhlIEN1YmVUZXh0dXJlLFxuXHRcdC8vIHNvIHdlIGtub3cgaWYgd2UgaGF2ZSB0byBmaW5hbGl6ZSB0aGUgQXNzZXQgKEN1YmVUZXh0dXJlKSBvciBub3QuXG5cdFx0aWYgKHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHMubGVuZ3RoID09IDEpIHtcblx0XHRcdHZhciBpc0N1YmVUZXh0dXJlQXJyYXk6QXJyYXk8c3RyaW5nPiA9IHJlc291cmNlRGVwZW5kZW5jeS5pZC5zcGxpdChcIiNcIik7XG5cdFx0XHR2YXIgcmVzc291cmNlSUQ6c3RyaW5nID0gaXNDdWJlVGV4dHVyZUFycmF5WzBdO1xuXHRcdFx0dmFyIGFzc2V0OlRleHR1cmVQcm94eUJhc2U7XG5cdFx0XHR2YXIgdGhpc0JpdG1hcFRleHR1cmU6VGV4dHVyZTJEQmFzZTtcblx0XHRcdHZhciBibG9jazpBV0RCbG9jaztcblxuXHRcdFx0aWYgKGlzQ3ViZVRleHR1cmVBcnJheS5sZW5ndGggPT0gMSkgLy8gTm90IGEgY3ViZSB0ZXh0dXJlXG5cdFx0XHR7XG5cdFx0XHRcdGFzc2V0ID0gPFRleHR1cmUyREJhc2U+IHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHNbMF07XG5cdFx0XHRcdGlmIChhc3NldCkge1xuXHRcdFx0XHRcdHZhciBtYXQ6TWV0aG9kTWF0ZXJpYWw7XG5cdFx0XHRcdFx0dmFyIHVzZXJzOkFycmF5PHN0cmluZz47XG5cblx0XHRcdFx0XHRibG9jayA9IHRoaXMuX2Jsb2Nrc1sgcmVzb3VyY2VEZXBlbmRlbmN5LmlkIF07XG5cdFx0XHRcdFx0YmxvY2suZGF0YSA9IGFzc2V0OyAvLyBTdG9yZSBmaW5pc2hlZCBhc3NldFxuXG5cdFx0XHRcdFx0Ly8gUmVzZXQgbmFtZSBvZiB0ZXh0dXJlIHRvIHRoZSBvbmUgZGVmaW5lZCBpbiB0aGUgQVdEIGZpbGUsXG5cdFx0XHRcdFx0Ly8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cblx0XHRcdFx0XHRhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcblx0XHRcdFx0XHRibG9jay5uYW1lID0gYXNzZXQubmFtZTtcblx0XHRcdFx0XHQvLyBGaW5hbGl6ZSB0ZXh0dXJlIGFzc2V0IHRvIGRpc3BhdGNoIHRleHR1cmUgZXZlbnQsIHdoaWNoIHdhc1xuXHRcdFx0XHRcdC8vIHByZXZpb3VzbHkgc3VwcHJlc3NlZCB3aGlsZSB0aGUgZGVwZW5kZW5jeSB3YXMgbG9hZGVkLlxuXHRcdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0KTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbG9hZGVkIEJpdG1hcCBmb3IgdGV4dHVyZVwiKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIHRleHR1cmU6IE5hbWUgPSBcIiArIGJsb2NrLm5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDdWJlVGV4dHVyZUFycmF5Lmxlbmd0aCA+IDEpIC8vIEN1YmUgVGV4dHVyZVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzQml0bWFwVGV4dHVyZSA9IDxCaXRtYXBUZXh0dXJlPiByZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzWzBdO1xuXG5cdFx0XHRcdHZhciB0eDpJbWFnZVRleHR1cmUgPSA8SW1hZ2VUZXh0dXJlPiB0aGlzQml0bWFwVGV4dHVyZTtcblxuXHRcdFx0XHR0aGlzLl9jdWJlVGV4dHVyZXNbIGlzQ3ViZVRleHR1cmVBcnJheVsxXSBdID0gdHguaHRtbEltYWdlRWxlbWVudDsgLy8gP1xuXHRcdFx0XHR0aGlzLl90ZXh0dXJlX3VzZXJzW3Jlc3NvdXJjZUlEXS5wdXNoKDEpO1xuXG5cdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGxvYWRlZCBCaXRtYXAgXCIgKyB0aGlzLl90ZXh0dXJlX3VzZXJzW3Jlc3NvdXJjZUlEXS5sZW5ndGggKyBcIiAvIDYgZm9yIEN1YmV0ZXh0dXJlXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl90ZXh0dXJlX3VzZXJzW3Jlc3NvdXJjZUlEXS5sZW5ndGggPT0gdGhpcy5fY3ViZVRleHR1cmVzLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0dmFyIHBvc1g6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzBdO1xuXHRcdFx0XHRcdHZhciBuZWdYOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1sxXTtcblx0XHRcdFx0XHR2YXIgcG9zWTphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbMl07XG5cdFx0XHRcdFx0dmFyIG5lZ1k6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzNdO1xuXHRcdFx0XHRcdHZhciBwb3NaOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1s0XTtcblx0XHRcdFx0XHR2YXIgbmVnWjphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbNV07XG5cblx0XHRcdFx0XHRhc3NldCA9IDxUZXh0dXJlUHJveHlCYXNlPiBuZXcgSW1hZ2VDdWJlVGV4dHVyZShwb3NYLCBuZWdYLCBwb3NZLCBuZWdZLCBwb3NaLCBuZWdaKTtcblx0XHRcdFx0XHRibG9jayA9IHRoaXMuX2Jsb2Nrc1tyZXNzb3VyY2VJRF07XG5cdFx0XHRcdFx0YmxvY2suZGF0YSA9IGFzc2V0OyAvLyBTdG9yZSBmaW5pc2hlZCBhc3NldFxuXG5cdFx0XHRcdFx0Ly8gUmVzZXQgbmFtZSBvZiB0ZXh0dXJlIHRvIHRoZSBvbmUgZGVmaW5lZCBpbiB0aGUgQVdEIGZpbGUsXG5cdFx0XHRcdFx0Ly8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cblx0XHRcdFx0XHRhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcblx0XHRcdFx0XHRibG9jay5uYW1lID0gYXNzZXQubmFtZTtcblx0XHRcdFx0XHQvLyBGaW5hbGl6ZSB0ZXh0dXJlIGFzc2V0IHRvIGRpc3BhdGNoIHRleHR1cmUgZXZlbnQsIHdoaWNoIHdhc1xuXHRcdFx0XHRcdC8vIHByZXZpb3VzbHkgc3VwcHJlc3NlZCB3aGlsZSB0aGUgZGVwZW5kZW5jeSB3YXMgbG9hZGVkLlxuXHRcdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0KTtcblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIEN1YmVUZXh0dXJlOiBOYW1lID0gXCIgKyBibG9jay5uYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3lGYWlsdXJlKHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpXG5cdHtcblx0XHQvL25vdCB1c2VkIC0gaWYgYSBkZXBlbmRjeSBmYWlscywgdGhlIGF3YWl0aW5nIFRleHR1cmUgb3IgQ3ViZVRleHR1cmUgd2lsbCBuZXZlciBiZSBmaW5hbGl6ZWQsIGFuZCB0aGUgZGVmYXVsdC1iaXRtYXBzIHdpbGwgYmUgdXNlZC5cblx0XHQvLyB0aGlzIG1lYW5zLCB0aGF0IGlmIG9uZSBCaXRtYXAgb2YgYSBDdWJlVGV4dHVyZSBmYWlscywgdGhlIEN1YmVUZXh0dXJlIHdpbGwgaGF2ZSB0aGUgRGVmYXVsdFRleHR1cmUgYXBwbGllZCBmb3IgYWxsIHNpeCBCaXRtYXBzLlxuXHR9XG5cblx0LyoqXG5cdCAqIFJlc29sdmUgYSBkZXBlbmRlbmN5IG5hbWVcblx0ICpcblx0ICogQHBhcmFtIHJlc291cmNlRGVwZW5kZW5jeSBUaGUgZGVwZW5kZW5jeSB0byBiZSByZXNvbHZlZC5cblx0ICovXG5cdHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5TmFtZShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5LCBhc3NldDpJQXNzZXQpOnN0cmluZ1xuXHR7XG5cdFx0dmFyIG9sZE5hbWU6c3RyaW5nID0gYXNzZXQubmFtZTtcblxuXHRcdGlmIChhc3NldCkge1xuXHRcdFx0dmFyIGJsb2NrOkFXREJsb2NrID0gdGhpcy5fYmxvY2tzW3BhcnNlSW50KHJlc291cmNlRGVwZW5kZW5jeS5pZCldO1xuXHRcdFx0Ly8gUmVzZXQgbmFtZSBvZiB0ZXh0dXJlIHRvIHRoZSBvbmUgZGVmaW5lZCBpbiB0aGUgQVdEIGZpbGUsXG5cdFx0XHQvLyBhcyBvcHBvc2VkIHRvIHdoYXRldmVyIHRoZSBpbWFnZSBwYXJzZXIgY2FtZSB1cCB3aXRoLlxuXHRcdFx0YXNzZXQucmVzZXRBc3NldFBhdGgoYmxvY2submFtZSwgbnVsbCwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld05hbWU6c3RyaW5nID0gYXNzZXQubmFtZTtcblxuXHRcdGFzc2V0Lm5hbWUgPSBvbGROYW1lO1xuXG5cdFx0cmV0dXJuIG5ld05hbWU7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9wUHJvY2VlZFBhcnNpbmcoKTpib29sZWFuXG5cdHtcblxuXHRcdGlmICghdGhpcy5fc3RhcnRlZFBhcnNpbmcpIHtcblx0XHRcdHRoaXMuX2J5dGVEYXRhID0gdGhpcy5fcEdldEJ5dGVEYXRhKCk7Ly9nZXRCeXRlRGF0YSgpO1xuXHRcdFx0dGhpcy5fc3RhcnRlZFBhcnNpbmcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5fcGFyc2VkX2hlYWRlcikge1xuXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vIExJVFRMRV9FTkRJQU4gLSBEZWZhdWx0IGZvciBBcnJheUJ1ZmZlciAvIE5vdCBpbXBsZW1lbnRlZCBpbiBCeXRlQXJyYXlcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly90aGlzLl9ieXRlRGF0YS5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjtcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vIFBhcnNlIGhlYWRlciBhbmQgZGVjb21wcmVzcyBib2R5IGlmIG5lZWRlZFxuXHRcdFx0dGhpcy5wYXJzZUhlYWRlcigpO1xuXG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2NvbXByZXNzaW9uKSB7XG5cblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuREVGTEFURTpcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuTFpNQTpcblx0XHRcdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuVU5DT01QUkVTU0VEOlxuXHRcdFx0XHRcdHRoaXMuX2JvZHkgPSB0aGlzLl9ieXRlRGF0YTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdFx0Ly8gQ29tcHJlc3NlZCBBV0QgRm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZFxuXHRcdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFx0XHQvKlxuXHRcdFx0XHQgY2FzZSBBV0RQYXJzZXIuREVGTEFURTpcblxuXHRcdFx0XHQgdGhpcy5fYm9keSA9IG5ldyBCeXRlQXJyYXkoKTtcblx0XHRcdFx0IHRoaXMuX2J5dGVEYXRhLnJlYWRCeXRlcyh0aGlzLl9ib2R5LCAwLCB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKTtcblx0XHRcdFx0IHRoaXMuX2JvZHkudW5jb21wcmVzcygpO1xuXG5cdFx0XHRcdCBicmVhaztcblx0XHRcdFx0IGNhc2UgQVdEUGFyc2VyLkxaTUE6XG5cblx0XHRcdFx0IHRoaXMuX2JvZHkgPSBuZXcgQnl0ZUFycmF5KCk7XG5cdFx0XHRcdCB0aGlzLl9ieXRlRGF0YS5yZWFkQnl0ZXModGhpcy5fYm9keSwgMCwgdGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSk7XG5cdFx0XHRcdCB0aGlzLl9ib2R5LnVuY29tcHJlc3MoQ09NUFJFU1NJT05NT0RFX0xaTUEpO1xuXG5cdFx0XHRcdCBicmVhaztcblx0XHRcdFx0IC8vKi9cblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9wYXJzZWRfaGVhZGVyID0gdHJ1ZTtcblxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHQvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vdGhpcy5fYm9keS5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjsvLyBTaG91bGQgYmUgZGVmYXVsdFxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHR9XG5cblx0XHRpZiAodGhpcy5fYm9keSkge1xuXG5cdFx0XHR3aGlsZSAodGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpID4gMCAmJiAhdGhpcy5wYXJzaW5nUGF1c2VkKSAvLyYmIHRoaXMuX3BIYXNUaW1lKCkgKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnBhcnNlTmV4dEJsb2NrKCk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHQvLyBSZXR1cm4gY29tcGxldGUgc3RhdHVzXG5cdFx0XHRpZiAodGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpID09IDApIHtcblx0XHRcdFx0dGhpcy5kaXNwb3NlKCk7XG5cdFx0XHRcdHJldHVybiAgUGFyc2VyQmFzZS5QQVJTSU5HX0RPTkU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2NvbXByZXNzaW9uKSB7XG5cblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuREVGTEFURTpcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuTFpNQTpcblxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIoISkgQVdEUGFyc2VyIEVycm9yOiBDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkICghKVwiKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXHRcdFx0Ly8gRXJyb3IgLSBtb3N0IGxpa2VseSBfYm9keSBub3Qgc2V0IGJlY2F1c2Ugd2UgZG8gbm90IHN1cHBvcnQgY29tcHJlc3Npb24uXG5cdFx0XHRyZXR1cm4gIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwdWJsaWMgX3BTdGFydFBhcnNpbmcoZnJhbWVMaW1pdDpudW1iZXIpXG5cdHtcblx0XHRzdXBlci5fcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0KTtcblxuXHRcdC8vY3JlYXRlIGEgY29udGVudCBvYmplY3QgZm9yIExvYWRlcnNcblx0XHR0aGlzLl9wQ29udGVudCA9IG5ldyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XG5cdH1cblxuXHRwcml2YXRlIGRpc3Bvc2UoKTp2b2lkXG5cdHtcblxuXHRcdGZvciAodmFyIGMgaW4gdGhpcy5fYmxvY2tzKSB7XG5cblx0XHRcdHZhciBiOkFXREJsb2NrID0gPEFXREJsb2NrPiB0aGlzLl9ibG9ja3NbIGMgXTtcblx0XHRcdGIuZGlzcG9zZSgpO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIHBhcnNlTmV4dEJsb2NrKCk6dm9pZFxuXHR7XG5cdFx0dmFyIGJsb2NrOkFXREJsb2NrO1xuXHRcdHZhciBhc3NldERhdGE6SUFzc2V0O1xuXHRcdHZhciBpc1BhcnNlZDpib29sZWFuID0gZmFsc2U7XG5cdFx0dmFyIG5zOm51bWJlcjtcblx0XHR2YXIgdHlwZTpudW1iZXI7XG5cdFx0dmFyIGZsYWdzOm51bWJlcjtcblx0XHR2YXIgbGVuOm51bWJlcjtcblxuXHRcdHRoaXMuX2N1cl9ibG9ja19pZCA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkSW50KCk7XG5cblx0XHRucyA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdHR5cGUgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRmbGFncyA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdGxlbiA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkSW50KCk7XG5cblx0XHR2YXIgYmxvY2tDb21wcmVzc2lvbjpib29sZWFuID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzQpO1xuXHRcdHZhciBibG9ja0NvbXByZXNzaW9uTFpNQTpib29sZWFuID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzUpO1xuXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5T25CbG9ja3MpIHtcblx0XHRcdHRoaXMuX2FjY3VyYWN5TWF0cml4ID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzEpO1xuXHRcdFx0dGhpcy5fYWNjdXJhY3lHZW8gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMik7XG5cdFx0XHR0aGlzLl9hY2N1cmFjeVByb3BzID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzMpO1xuXHRcdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XG5cblx0XHRcdGlmICh0aGlzLl9hY2N1cmFjeUdlbykge1xuXHRcdFx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XG5cblx0XHRcdGlmICh0aGlzLl9hY2N1cmFjeU1hdHJpeCkge1xuXHRcdFx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcblxuXHRcdFx0aWYgKHRoaXMuX2FjY3VyYWN5UHJvcHMpIHtcblx0XHRcdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgYmxvY2tFbmRBbGw6bnVtYmVyID0gdGhpcy5fYm9keS5wb3NpdGlvbiArIGxlbjtcblxuXHRcdGlmIChsZW4gPiB0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCkpIHtcblx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0FXRDIgYmxvY2sgbGVuZ3RoIGlzIGJpZ2dlciB0aGFuIHRoZSBieXRlcyB0aGF0IGFyZSBhdmFpbGFibGUhJyk7XG5cdFx0XHR0aGlzLl9ib2R5LnBvc2l0aW9uICs9IHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcyA9IG5ldyBCeXRlQXJyYXkoKTtcblxuXG5cdFx0dGhpcy5fYm9keS5yZWFkQnl0ZXModGhpcy5fbmV3QmxvY2tCeXRlcywgMCwgbGVuKTtcblxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIENvbXByZXNzZWQgQVdEIEZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWRcblxuXHRcdGlmIChibG9ja0NvbXByZXNzaW9uKSB7XG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdDb21wcmVzc2VkIEFXRCBmb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XG5cblx0XHRcdC8qXG5cdFx0XHQgaWYgKGJsb2NrQ29tcHJlc3Npb25MWk1BKVxuXHRcdFx0IHtcblx0XHRcdCB0aGlzLl9uZXdCbG9ja0J5dGVzLnVuY29tcHJlc3MoQVdEUGFyc2VyLkNPTVBSRVNTSU9OTU9ERV9MWk1BKTtcblx0XHRcdCB9XG5cdFx0XHQgZWxzZVxuXHRcdFx0IHtcblx0XHRcdCB0aGlzLl9uZXdCbG9ja0J5dGVzLnVuY29tcHJlc3MoKTtcblx0XHRcdCB9XG5cdFx0XHQgKi9cblxuXHRcdH1cblxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIExJVFRMRV9FTkRJQU4gLSBEZWZhdWx0IGZvciBBcnJheUJ1ZmZlciAvIE5vdCBpbXBsZW1lbnRlZCBpbiBCeXRlQXJyYXlcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvL3RoaXMuX25ld0Jsb2NrQnl0ZXMuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47XG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gMDtcblx0XHRibG9jayA9IG5ldyBBV0RCbG9jaygpO1xuXHRcdGJsb2NrLmxlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW47XG5cdFx0YmxvY2suaWQgPSB0aGlzLl9jdXJfYmxvY2tfaWQ7XG5cblx0XHR2YXIgYmxvY2tFbmRCbG9jazpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuO1xuXG5cdFx0aWYgKGJsb2NrQ29tcHJlc3Npb24pIHtcblx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0NvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQnKTtcblx0XHRcdC8vYmxvY2tFbmRCbG9jayAgID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHRoaXMuX25ld0Jsb2NrQnl0ZXMubGVuZ3RoO1xuXHRcdFx0Ly9ibG9jay5sZW4gICAgICAgPSBibG9ja0VuZEJsb2NrO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJBV0RCbG9jazogIElEID0gXCIgKyB0aGlzLl9jdXJfYmxvY2tfaWQgKyBcIiB8IFR5cGVJRCA9IFwiICsgdHlwZSArIFwiIHwgQ29tcHJlc3Npb24gPSBcIiArIGJsb2NrQ29tcHJlc3Npb24gKyBcIiB8IE1hdHJpeC1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5TWF0cml4ICsgXCIgfCBHZW9tZXRyeS1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5R2VvICsgXCIgfCBQcm9wZXJ0aWVzLVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lQcm9wcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fYmxvY2tzW3RoaXMuX2N1cl9ibG9ja19pZF0gPSBibG9jaztcblxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAzKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAwKSkge1xuXHRcdFx0Ly8gcHJvYmFibHkgc2hvdWxkIGNvbnRhaW4gc29tZSBpbmZvIGFib3V0IHRoZSB0eXBlIG9mIGFuaW1hdGlvblxuXHRcdFx0dmFyIGZhY3RvcnkgPSBuZXcgQVMyU2NlbmVHcmFwaEZhY3RvcnkoKTtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgMjQ6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1lc2hMaWJyYXJ5QmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMjU6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZUJpbGxCb2FyZExpYnJhcnlCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0NDpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQXVkaW9CbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQsIGZhY3RvcnkpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMzM6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRpbWVMaW5lKHRoaXMuX2N1cl9ibG9ja19pZCwgZmFjdG9yeSk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEzNDpcblx0XHRcdFx0XHR0aGlzLnBhcmVzVGV4dEZpZWxkKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEzNTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGVzc2VsYXRlZEZvbnQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTM2OlxuXHRcdFx0XHRcdHRoaXMucGFyc2VUZXh0Rm9ybWF0KHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPiAyKXx8KCh0aGlzLl92ZXJzaW9uWzBdID49IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID49IDEpKSkge1xuXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAxMTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlUHJpbWl0dmVzKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDMxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa3lib3hJbnN0YW5jZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0MTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTGlnaHQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDI6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZUNhbWVyYSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHQvLyAgY2FzZSA0Mzpcblx0XHRcdFx0Ly8gICAgICBwYXJzZVRleHR1cmVQcm9qZWN0b3IoX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdC8vICAgICAgaXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHQvLyAgICAgIGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgNTE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZUxpZ2h0UGlja2VyKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDgxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VNYXRlcmlhbF92MSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA4Mzpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ3ViZVRleHR1cmUodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgOTE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYXJlZE1ldGhvZEJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VTaGFkb3dNZXRob2RCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMTE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1lc2hQb3NlQW5pbWF0aW9uKHRoaXMuX2N1cl9ibG9ja19pZCwgdHJ1ZSk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDExMjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaFBvc2VBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTEzOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VWZXJ0ZXhBbmltYXRpb25TZXQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTIyOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VBbmltYXRvclNldCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAyNTM6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZUNvbW1hbmQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHQvLyovXG5cdFx0fVxuXHRcdC8vKlxuXHRcdGlmIChpc1BhcnNlZCA9PSBmYWxzZSkge1xuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VUcmlhbmdsZUdlb21ldHJpZUJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMjI6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZUNvbnRhaW5lcih0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDIzOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoSW5zdGFuY2UodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA4MTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWF0ZXJpYWwodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA4Mjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGV4dHVyZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEwMTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2tlbGV0b24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMDI6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNrZWxldG9uUG9zZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEwMzpcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2tlbGV0b25BbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMjE6XG5cdFx0XHRcdC8vdGhpcy5wYXJzZVVWQW5pbWF0aW9uKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdC8vYnJlYWs7XG5cdFx0XHRcdGNhc2UgMjU0OlxuXHRcdFx0XHRcdHRoaXMucGFyc2VOYW1lU3BhY2UodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAyNTU6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1ldGFEYXRhKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkFXREJsb2NrOiAgIFVua25vd24gQmxvY2tUeXBlICAoQmxvY2tJRCA9IFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIpIC0gU2tpcCBcIiArIGxlbiArIFwiIGJ5dGVzXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGxlbjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8qL1xuXG5cdFx0dmFyIG1zZ0NudDpudW1iZXIgPSAwO1xuXHRcdGlmICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID09IGJsb2NrRW5kQmxvY2spIHtcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRpZiAoYmxvY2suZXJyb3JNZXNzYWdlcykge1xuXHRcdFx0XHRcdHdoaWxlIChtc2dDbnQgPCBibG9jay5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICghKSBFcnJvcjogXCIgKyBibG9jay5lcnJvck1lc3NhZ2VzW21zZ0NudF0gKyBcIiAoISlcIik7XG5cdFx0XHRcdFx0XHRtc2dDbnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlxcblwiKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cblx0XHRcdFx0Y29uc29sZS5sb2coXCIgICghKSghKSghKSBFcnJvciB3aGlsZSByZWFkaW5nIEFXREJsb2NrIElEIFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIgPSBza2lwIHRvIG5leHQgYmxvY2tcIik7XG5cblx0XHRcdFx0aWYgKGJsb2NrLmVycm9yTWVzc2FnZXMpIHtcblx0XHRcdFx0XHR3aGlsZSAobXNnQ250IDwgYmxvY2suZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAoISkgRXJyb3I6IFwiICsgYmxvY2suZXJyb3JNZXNzYWdlc1ttc2dDbnRdICsgXCIgKCEpXCIpO1xuXHRcdFx0XHRcdFx0bXNnQ250Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fYm9keS5wb3NpdGlvbiA9IGJsb2NrRW5kQWxsO1xuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMgPSBudWxsO1xuXG5cdH1cblxuXG5cdC8vLS1QYXJzZXIgQmxvY2tzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXHRwcml2YXRlIHBhcnNlVGVzc2VsYXRlZEZvbnQoYmxvY2tJRDpudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdC8vY29uc29sZS5sb2coXCJGb250IG5hbWUgPSBcIit0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSk7XG5cdFx0dmFyIGZvbnRfc3R5bGVfY250Om51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIkZvbnQgZm9udF9zdHlsZV9jbnQgPSBcIitmb250X3N0eWxlX2NudCk7XG5cdFx0dmFyIG5ld19mb250OkZvbnQ9bmV3IEZvbnQoKTtcblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBmb250X3N0eWxlX2NudDsgKytpKSB7XG5cdFx0XHR2YXIgZm9udF9zdHlsZV9uYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHRcdC8vY29uc29sZS5sb2coXCJGb250IGZvbnRfc3R5bGVfbmFtZSA9IFwiK2ZvbnRfc3R5bGVfbmFtZSk7XG5cdFx0XHR2YXIgbmV3X2ZvbnRfc3R5bGU6VGVzc2VsYXRlZEZvbnRUYWJsZT1uZXdfZm9udC5nZXRfZm9udF90YWJsZShmb250X3N0eWxlX25hbWUpO1xuXHRcdFx0bmV3X2ZvbnRfc3R5bGUuc2V0X2ZvbnRfZW1fc2l6ZSh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpKTtcblx0XHRcdC8vY29uc29sZS5sb2coXCJGb250IG5ld19mb250X3N0eWxlLmZvbnRfZW1fc2l6ZSA9IFwiK25ld19mb250X3N0eWxlLmdldF9mb250X2VtX3NpemUpO1xuXHRcdFx0dmFyIGZvbnRfc3R5bGVfY2hhcl9jbnQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdC8vY29uc29sZS5sb2coXCJGb250IGZvbnRfc3R5bGVfY2hhcl9jbnQgPSBcIitmb250X3N0eWxlX2NoYXJfY250KTtcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IGZvbnRfc3R5bGVfY2hhcl9jbnQ7ICsraSkge1xuXG5cdFx0XHRcdHZhciBmb250X3N0eWxlX2NoYXI6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkZvbnQgZm9udF9zdHlsZV9jaGFyID0gXCIrZm9udF9zdHlsZV9jaGFyKTtcblx0XHRcdFx0Ly8gdG9kbzogdGhpcyBpcyBiYXNpY2FsbHkgYSBzaW1wbGlmaWVkIHZlcnNpb24gb2YgdGhlIHN1Ymdlb20tcGFyc2luZyBkb25lIGluIHBhcnNlVHJpYW5nbGVHZW9tZXRyeS4gTWFrZSBhIHBhcnNlU3ViR2VvbSgpIGluc3RlYWQgKD8pXG5cdFx0XHRcdHZhciBzbV9sZW46bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0dmFyIHNtX2VuZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgc21fbGVuO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBzbV9sZW4gPSBcIitzbV9sZW4pO1xuXG5cdFx0XHRcdC8vdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIG5vIHByb3BlcnRpZXMgZm9yIGZvbnQtdGFibGUgc3ViZ2Vvc1xuXHRcdFx0XHQvLyBMb29wIHRocm91Z2ggZGF0YSBzdHJlYW1zXG5cdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc21fZW5kKSB7XG5cdFx0XHRcdFx0dmFyIGlkeDpudW1iZXIgPSAwO1xuXHRcdFx0XHRcdHZhciBzdHJfZnR5cGU6bnVtYmVyLCBzdHJfdHlwZTpudW1iZXIsIHN0cl9sZW46bnVtYmVyLCBzdHJfZW5kOm51bWJlcjtcblxuXHRcdFx0XHRcdC8vIFR5cGUsIGZpZWxkIHR5cGUsIGxlbmd0aFxuXHRcdFx0XHRcdHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdFx0c3RyX2Z0eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdFx0c3RyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xuXG5cdFx0XHRcdFx0aWYgKHN0cl90eXBlID09IDIpIHsvL2ZhY2UgaW5kaWNpZXMgcG9zaXRpb25zXG5cdFx0XHRcdFx0XHR2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblxuXHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHRcdGluZGljZXNbaWR4KytdID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMTApIHsvLyBjb21iaW5lZCB2ZXJ0ZXgyRCBzdHJlYW0gNSB4IGZsb2F0MzJcblx0XHRcdFx0XHRcdHZhciBpZHhfcG9zOm51bWJlciA9IDA7XG5cdFx0XHRcdFx0XHR2YXIgaWR4X2N1cnZlczpudW1iZXIgPSAwO1xuXHRcdFx0XHRcdFx0dmFyIGlkeF91dnM6bnVtYmVyID0gMDtcblxuXHRcdFx0XHRcdFx0dmFyIHBvc2l0aW9uczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHRcdHZhciBjdXJ2ZURhdGE6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0XHRcdFx0XHR2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcblxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gdHlwZVxuXG5cdFx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXG5cdFx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAyXG5cblx0XHRcdFx0XHRcdFx0dXZzW2lkeF91dnMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDFcblx0XHRcdFx0XHRcdFx0dXZzW2lkeF91dnMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDFcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly90aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsvLyBubyBhdHRyaWJ1dGVzIGZvciBmb250LXRhYmxlIHN1Ymdlb3Ncblx0XHRcdFx0dmFyIGN1cnZlX3N1Yl9nZW9tOkN1cnZlU3ViR2VvbWV0cnkgPSBuZXcgQ3VydmVTdWJHZW9tZXRyeSh0cnVlKTtcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlUG9zaXRpb25zKHBvc2l0aW9ucyk7XG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZUN1cnZlcyhjdXJ2ZURhdGEpO1xuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVVVnModXZzKTtcblx0XHRcdFx0bmV3X2ZvbnRfc3R5bGUuc2V0X3N1Ymdlb19mb3JfY2hhcihmb250X3N0eWxlX2NoYXIudG9TdHJpbmcoKSwgY3VydmVfc3ViX2dlb20pO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+bmV3X2ZvbnQsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbmV3X2ZvbnQ7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVGV4dEZvcm1hdChibG9ja0lEOm51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdH1cblx0cHJpdmF0ZSBwYXJlc1RleHRGaWVsZChibG9ja0lEOm51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdH1cblxuXHQvLyBCbG9jayBJRCA9IDI1XG5cdHByaXZhdGUgcGFyc2VCaWxsQm9hcmRMaWJyYXJ5QmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWQge1xuXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXG5cdFx0dmFyIGRhdGFfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHR2YXIgbWF0OkJhc2ljTWF0ZXJpYWw7XG5cdFx0dmFyIHJldHVybmVkQXJyYXlNYXRlcmlhbDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZGF0YV9pZCwgW0Fzc2V0VHlwZS5NQVRFUklBTF0pXG5cblx0XHRpZiAocmV0dXJuZWRBcnJheU1hdGVyaWFsWzBdKSB7XG5cdFx0XHRtYXQgPSA8QmFzaWNNYXRlcmlhbD4gcmV0dXJuZWRBcnJheU1hdGVyaWFsWzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIE1hdGVyaWFsIGZvciB0aGlzIEJpbGxib2FyZC4gQSBlbXB0eSBtYXRlcmlhbCBpcyBjcmVhdGVkIVwiKTtcblx0XHRcdG1hdCA9IG5ldyBCYXNpY01hdGVyaWFsKCk7XG5cdFx0fVxuXHRcdG1hdC5ib3RoU2lkZXM9dHJ1ZTtcblx0XHR2YXIgYmlsbGJvYXJkOkJpbGxib2FyZCA9IG5ldyBCaWxsYm9hcmQobWF0KTtcblxuXHRcdC8vIHRvZG86IG9wdGlvbmFsIG1hdHJpeCBldGMgY2FuIGJlIHB1dCBpbiBwcm9wZXJ0aWVzLlxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXG5cdFx0YmlsbGJvYXJkLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBiaWxsYm9hcmQsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYmlsbGJvYXJkO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIExpYnJhcnktQmlsbGJvYXJkOiBOYW1lID0gJ1wiICsgbmFtZSArIFwifCBNYXRlcmlhbC1OYW1lID0gXCIgKyBtYXQubmFtZSk7XG5cdFx0fVxuXHR9XG5cdC8vIEJsb2NrIElEID0gMjRcblx0cHJpdmF0ZSBwYXJzZU1lc2hMaWJyYXJ5QmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWQge1xuXHRcdHZhciBudW1fbWF0ZXJpYWxzOm51bWJlcjtcblx0XHR2YXIgbWF0ZXJpYWxzX3BhcnNlZDpudW1iZXI7XG5cblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHR2YXIgZGF0YV9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBnZW9tOkdlb21ldHJ5O1xuXHRcdHZhciByZXR1cm5lZEFycmF5R2VvbWV0cnk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRhdGFfaWQsIFtBc3NldFR5cGUuR0VPTUVUUlldKVxuXG5cdFx0aWYgKHJldHVybmVkQXJyYXlHZW9tZXRyeVswXSkge1xuXHRcdFx0Z2VvbSA9IDxHZW9tZXRyeT4gcmV0dXJuZWRBcnJheUdlb21ldHJ5WzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIEdlb21ldHJ5IGZvciB0aGlzIE1lc2guIEEgZW1wdHkgR2VvbWV0cnkgaXMgY3JlYXRlZCFcIik7XG5cdFx0XHRnZW9tID0gbmV3IEdlb21ldHJ5KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmdlb0lEID0gZGF0YV9pZDtcblx0XHR2YXIgbWF0ZXJpYWxzOkFycmF5PE1hdGVyaWFsQmFzZT4gPSBuZXcgQXJyYXk8TWF0ZXJpYWxCYXNlPigpO1xuXHRcdG51bV9tYXRlcmlhbHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHR2YXIgbWF0ZXJpYWxOYW1lczpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblx0XHRtYXRlcmlhbHNfcGFyc2VkID0gMDtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5TWF0ZXJpYWw6QXJyYXk8YW55PjtcblxuXHRcdHdoaWxlIChtYXRlcmlhbHNfcGFyc2VkIDwgbnVtX21hdGVyaWFscykge1xuXHRcdFx0dmFyIG1hdF9pZDpudW1iZXI7XG5cdFx0XHRtYXRfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0cmV0dXJuZWRBcnJheU1hdGVyaWFsID0gdGhpcy5nZXRBc3NldEJ5SUQobWF0X2lkLCBbQXNzZXRUeXBlLk1BVEVSSUFMXSlcblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlNYXRlcmlhbFswXSkgJiYgKG1hdF9pZCA+IDApKSB7XG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIE1hdGVyaWFsIE5yIFwiICsgbWF0ZXJpYWxzX3BhcnNlZCArIFwiIChJRCA9IFwiICsgbWF0X2lkICsgXCIgKSBmb3IgdGhpcyBNZXNoXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbTpNYXRlcmlhbEJhc2UgPSA8TWF0ZXJpYWxCYXNlPiByZXR1cm5lZEFycmF5TWF0ZXJpYWxbMV07XG5cblx0XHRcdG1hdGVyaWFscy5wdXNoKG0pO1xuXHRcdFx0bWF0ZXJpYWxOYW1lcy5wdXNoKG0ubmFtZSk7XG5cblx0XHRcdG1hdGVyaWFsc19wYXJzZWQrKztcblx0XHR9XG5cblx0XHR2YXIgbWVzaDpNZXNoID0gbmV3IE1lc2goZ2VvbSwgbnVsbCk7XG5cblxuXHRcdGlmIChtYXRlcmlhbHMubGVuZ3RoID49IDEgJiYgbWVzaC5zdWJNZXNoZXMubGVuZ3RoID09IDEpIHtcblx0XHRcdG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbHNbMF07XG5cdFx0fSBlbHNlIGlmIChtYXRlcmlhbHMubGVuZ3RoID4gMSkge1xuXHRcdFx0dmFyIGk6bnVtYmVyO1xuXG5cdFx0XHQvLyBBc3NpZ24gZWFjaCBzdWItbWVzaCBpbiB0aGUgbWVzaCBhIG1hdGVyaWFsIGZyb20gdGhlIGxpc3QuIElmIG1vcmUgc3ViLW1lc2hlc1xuXHRcdFx0Ly8gdGhhbiBtYXRlcmlhbHMsIHJlcGVhdCB0aGUgbGFzdCBtYXRlcmlhbCBmb3IgYWxsIHJlbWFpbmluZyBzdWItbWVzaGVzLlxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1lc2guc3ViTWVzaGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG1lc2guc3ViTWVzaGVzW2ldLm1hdGVyaWFsID0gbWF0ZXJpYWxzW01hdGgubWluKG1hdGVyaWFscy5sZW5ndGggLSAxLCBpKV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdG1lc2guZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1lc2gsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWVzaDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBMaWJyYXJ5LU1lc2g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCJ8IEdlb21ldHJ5LU5hbWUgPSBcIiArIGdlb20ubmFtZSArIFwiIHwgU3ViTWVzaGVzID0gXCIgKyBtZXNoLnN1Yk1lc2hlcy5sZW5ndGggKyBcIiB8IE1hdC1OYW1lcyA9IFwiICsgbWF0ZXJpYWxOYW1lcy50b1N0cmluZygpKTtcblx0XHR9XG5cdH1cblx0cHJpdmF0ZSBwYXJzZUF1ZGlvQmxvY2soYmxvY2tJRDpudW1iZXIsIGZhY3Rvcnk6VGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSk6dm9pZCB7XG5cblx0XHQvL3ZhciBhc3NldDpBdWRpbzt0b2RvIGNyZWF0ZSBhc3NldCBmb3IgYXVkaW9cblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXG5cdFx0dmFyIHR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcblxuXHRcdC8vdGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcblxuXHRcdC8vIEV4dGVybmFsXG5cdFx0aWYgKHR5cGUgPT0gMCkge1xuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0dmFyIHVybDpzdHJpbmc7XG5cdFx0XHR1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XG5cdFx0XHQvLyB0b2RvIHBhcnNlciBuZWVkcyB0byBiZSBhYmxlIHRvIGhhbmRsZSBtcDMgYW5kIHdhdiBmaWxlcyBpZiB3ZSB0cmlnZ2VyIHRoZSBsb2FkaW5nIG9mIGV4dGVybmFsIHJlc3NvdXJjZVxuXHRcdFx0Ly90aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbmV3IFVSTFJlcXVlc3QodXJsKSwgZmFsc2UsIG51bGwsIHRydWUpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJBdWRpbyB1cmwgPSBcIit1cmwpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRvZG86IGV4cG9ydGVyIGRvZXMgbm90IGV4cG9ydCBlbWJlZCBzb3VuZHMgeWV0XG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cblx0XHRcdHZhciBkYXRhOkJ5dGVBcnJheTtcblx0XHRcdGRhdGEgPSBuZXcgQnl0ZUFycmF5KCk7XG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XG5cblx0XHRcdC8vIHRvZG8gcGFyc2Ugc291bmQgZnJvbSBieXRlc1xuXHRcdFx0Ly8gdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieShkYXRhKSwgdHJ1ZSk7XG5cdFx0XHQvL3RoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XG5cblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgZm9yIG5vd1xuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpO1xuXHRcdC8vdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDt0b2RvXG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdHZhciB0ZXh0dXJlU3R5bGVzTmFtZXM6QXJyYXk8c3RyaW5nPiA9IFtcImV4dGVybmFsXCIsIFwiZW1iZWRcIl1cblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyBhIFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQXVkaW8gZmlsZVwiKTtcblx0XHR9XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gNFxuXHRwcml2YXRlIHBhcnNlVGltZUxpbmUoYmxvY2tJRDpudW1iZXIsIGZhY3Rvcnk6VGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSk6dm9pZCB7XG5cblx0XHR2YXIgaTpudW1iZXI7XG5cdFx0dmFyIGo6bnVtYmVyO1xuXHRcdHZhciBrOm51bWJlcjtcblx0XHR2YXIgdGltZUxpbmVDb250YWluZXIgPSBmYWN0b3J5LmNyZWF0ZU1vdmllQ2xpcCgpO1xuXHRcdHZhciBuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBpc1NjZW5lID0gISF0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgc2NlbmVJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdHZhciBmcHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcblx0XHR2YXIgbXNfcGVyX2ZyYW1lID0gMTAwMCAvIGZwcztcblx0XHR2YXIgbnVtRnJhbWVzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHZhciBvYmplY3RJRE1hcCA6IHsgW2lkOnN0cmluZ106bnVtYmVyOyB9ID0ge307XG5cblx0XHQvLyB2YXIgcHJldmlvdXNUaW1lTGluZTpUaW1lTGluZUZyYW1lO1xuXHRcdC8vIHZhciBmaWxsX3Byb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyfSk7Ly8geyAxOlVJTlQzMiwgNjpBV0RTVFJJTkcgfSAgKTsgLy87ICwgMjpVSU5UMzIsIDM6VUlOVDMyLCA1OkJPT0wgfSApO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUSU1FTElORTogTmFtZSA9IFwiICsgbmFtZSArIFwifCBpc1NjZW5lID0gXCIgKyBpc1NjZW5lICsgXCJ8IHNjZW5lSUQgPSBcIiArIHNjZW5lSUQgKyBcInwgbnVtRnJhbWVzID0gXCIgKyBudW1GcmFtZXMpO1xuXG5cdFx0dmFyIHRvdGFsRHVyYXRpb24gPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBudW1GcmFtZXM7IGkrKykge1xuXG5cdFx0XHR2YXIgZnJhbWUgPSBuZXcgVGltZWxpbmVLZXlGcmFtZSgpO1xuXHRcdFx0dmFyIHRyYWNlU3RyaW5nID0gXCJmcmFtZSA9IFwiICsgaTtcblx0XHRcdC8vIFRPRE86IHJlbW92ZSB0aGUgbXNfcGVyX2ZyYW1lIHRvIHNldCB0aGUgZHVyYXRpb24gaW4gZnJhbWVzXG5cdFx0XHR2YXIgZnJhbWVEdXJhdGlvbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCkgKiBtc19wZXJfZnJhbWU7XG5cdFx0XHRmcmFtZS5zZXRGcmFtZVRpbWUodG90YWxEdXJhdGlvbiwgZnJhbWVEdXJhdGlvbik7XG5cdFx0XHR0b3RhbER1cmF0aW9uICs9IGZyYW1lRHVyYXRpb247XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZHVyYXRpb24gPSBcIiArIGZyYW1lRHVyYXRpb24pO1xuXHRcdFx0dHJhY2VTdHJpbmcgKz0gXCJkdXJhdGlvbiA9IFwiICsgZnJhbWVEdXJhdGlvbjtcblxuXHRcdFx0dmFyIG51bUxhYmVscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1MYWJlbHM7IGorKykge1xuXHRcdFx0XHR2YXIgbGFiZWxUeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdHZhciBsYWJlbCA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHRcdFx0Ly8gVE9ETzogSGFuZGxlIGxhYmVscyBkaWZmZXJlbnRseVxuXHRcdFx0XHQvL3RpbWVMaW5lQ29udGFpbmVyLmFkZEZyYW1lTGFiZWwobmV3IEZyYW1lTGFiZWwobGFiZWwsIGxhYmVsVHlwZSwgZnJhbWUpKTtcblx0XHRcdFx0dHJhY2VTdHJpbmcgKz0gXCJcXG4gICAgIGxhYmVsID0gXCIgKyBsYWJlbCArIFwiIC0gbGFiZWxUeXBlID0gXCIgKyBsYWJlbFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBudW1Db21tYW5kcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdHRyYWNlU3RyaW5nICs9IFwiXFxuICAgICAgQ29tbWFuZHMgXCIgKyBudW1Db21tYW5kcztcblx0XHRcdHZhciBoYXNEZXB0aENoYW5nZXMgPSBmYWxzZTtcblx0XHRcdHZhciBjb21tYW5kU3RyaW5nID0gXCJcIjtcblx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1Db21tYW5kczsgaisrKSB7XG5cdFx0XHRcdHZhciBvYmplY3RJRDpudW1iZXI7XG5cdFx0XHRcdHZhciByZXNvdXJjZUlEOm51bWJlcjtcblx0XHRcdFx0dmFyIGNvbW1hbmRUeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXG5cdFx0XHRcdC8vIDEgPSBBZGQgb2JqZWN0IGJ5IGxvY2FsIGlkIChhd2QtYmxvY2staWQpICsgdXBkYXRlIHByb3BlcnRpZXNcblx0XHRcdFx0Ly8gMiA9IEFkZCBvYmplY3QgYnkgZ2xvYmFsIGlkIChzdHJpbmcgaWRlbnRpZmllcikgKyB1cGRhdGUgcHJvcGVydGllcyAhTm90IHVzZWQgeWV0LiFcblx0XHRcdFx0Ly8gMyA9IFVwZGF0ZU9iamVjdCAtIHVwZGF0ZSBhIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgcHJlc2VudFxuXHRcdFx0XHQvLyA0ID0gcmVtb3ZlIG9iamVjdFxuXHRcdFx0XHQvLyA1ID0gYWRkIC8gdXBkYXRlIHNvdW5kXG5cblx0XHRcdFx0c3dpdGNoIChjb21tYW5kVHlwZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRcdHZhciB2YWxpZF9jb21tYW5kOmJvb2xlYW4gPSBmYWxzZTtcblx0XHRcdFx0XHRcdG9iamVjdElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0XHRcdHZhciBpbnN0YW5jZUlEID0gMDsgLy8gbXVzdCBiZSBzZXQgaW4gZm9sbGluZyBjb25kaXRpb25zOlxuXHRcdFx0XHRcdFx0aWYgKGNvbW1hbmRUeXBlID09IDEpIHtcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcyBjb21tYW5kcyBsb29rcyBmb3IgYSBvYmplY3QgYnkgYXdkLWlkIGFuZCBwdXRzIGl0IGludG8gdGhlIHRpbWVsaW5lXG5cdFx0XHRcdFx0XHRcdHJlc291cmNlSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2VOYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdFx0XHRcdFx0XHQvLyBzb3VuZCBpcyBhZGRlZCB0byB0aW1lbGluZSB3aXRoIGRlZGljYXRlZCBDb21tYW5kLCBhcyBpdCBpcyBubyBkaXNwbGF5LW9iamVjdCAoaGFzIG5vIG1hdHJpeCBldGMpXG5cdFx0XHRcdFx0XHRcdC8vIGNoZWNrIGlmIGEgR2VvbWV0cnkgY2FuIGJlIGZvdW5kIGF0IHRoZSByZXNvdXJjZUlEIChBV0QtSUQpXG5cdFx0XHRcdFx0XHRcdHZhciBjbWRfYXNzZXQ6RGlzcGxheU9iamVjdCA9IDxEaXNwbGF5T2JqZWN0PnRoaXMuX2Jsb2Nrc1tyZXNvdXJjZUlEXS5kYXRhO1xuXHRcdFx0XHRcdFx0XHRpZiAoY21kX2Fzc2V0ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRpbnN0YW5jZUlEID0gdGltZUxpbmVDb250YWluZXIucmVnaXN0ZXJQb3RlbnRpYWxDaGlsZChjbWRfYXNzZXQpO1xuXHRcdFx0XHRcdFx0XHRcdG9iamVjdElETWFwW29iamVjdElEXSA9IGluc3RhbmNlSUQ7XG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgQWRkQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChpbnN0YW5jZU5hbWUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJuYW1lXCIsIGluc3RhbmNlTmFtZSkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU5hbWUgPSBcIiArIGluc3RhbmNlTmFtZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dmFsaWRfY29tbWFuZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgIC0gQWRkIG5ldyBSZXNvdXJjZSA9IFwiICsgcmVzb3VyY2VJRCArIFwiIGFzIG9iamVjdF9pZCA9IFwiICsgb2JqZWN0SUQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgIC0gRVJST1IgLSBvYmplY3RfaWQgPSBcIiArIG9iamVjdElEICsgXCIgLSBOTyBESVNQTEFZX09CSkVDVCBBVCBJRCA9IFwiICsgcmVzb3VyY2VJRDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoY29tbWFuZFR5cGUgPT0gMykge1xuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZUlEID0gb2JqZWN0SURNYXBbb2JqZWN0SURdO1xuXHRcdFx0XHRcdFx0XHR2YWxpZF9jb21tYW5kID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgIC0gVXBkYXRlIG9iamVjdF9pZCA9IFwiICsgb2JqZWN0SUQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyByZWFkIHRoZSBjb21tYW5kIHByb3BlcnRpZXNcblx0XHRcdFx0XHRcdC8vIDE6IG1hdHJpeDJkICg2IHggbnVtYmVyIHdpdGggc3RvcmFnZSBwcmVjaXNpb24gbWF0cml4KVxuXHRcdFx0XHRcdFx0Ly8gMjogbWF0cml4MmQgKDEyIHggbnVtYmVyIHdpdGggc3RvcmFnZSBwcmVjaXNpb24gbWF0cml4KSBub3QgdXNlZCB5ZXRcblx0XHRcdFx0XHRcdC8vIDM6IGNvbG9ydHJhbnNmb3JtICgyMCB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIHByb3BlcnRpZXMpXG5cdFx0XHRcdFx0XHQvLyA0OiBibGVuZG1vZGUgKHVpbnQ4KVxuXHRcdFx0XHRcdFx0Ly8gNTogdmlzaWJpbHR5ICh1aW50OClcblx0XHRcdFx0XHRcdC8vIDY6IGRlcHRoICh1aW50MzIpXG5cdFx0XHRcdFx0XHQvLyA3OiBtYXNrICh1aW50MzIpXG5cdFx0XHRcdFx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHtcblx0XHRcdFx0XHRcdFx0MTogdGhpcy5fbWF0cml4TnJUeXBlLFxuXHRcdFx0XHRcdFx0XHQyOiB0aGlzLl9tYXRyaXhOclR5cGUsXG5cdFx0XHRcdFx0XHRcdDM6IHRoaXMuX3Byb3BzTnJUeXBlLFxuXHRcdFx0XHRcdFx0XHQ0OiBBV0RQYXJzZXIuVUlOVDgsXG5cdFx0XHRcdFx0XHRcdDU6IEFXRFBhcnNlci5VSU5UOCxcblx0XHRcdFx0XHRcdFx0NjogQVdEUGFyc2VyLlVJTlQzMixcblx0XHRcdFx0XHRcdFx0NzogQVdEUGFyc2VyLlVJTlQzMlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRpZiAodmFsaWRfY29tbWFuZCkge1xuXG5cdFx0XHRcdFx0XHRcdHZhciBtYXRyaXhfMmQ6RmxvYXQzMkFycmF5ID0gcHJvcHMuZ2V0KDEsIFtdKTtcblx0XHRcdFx0XHRcdFx0Ly92YXIgbWF0cml4XzNkOkZsb2F0MzJBcnJheSA9IHByb3BzLmdldCgyLCBbXSk7XG5cdFx0XHRcdFx0XHRcdHZhciBjb2xvcnRyYW5zZm9ybTpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMywgW10pO1xuXHRcdFx0XHRcdFx0XHR2YXIgYmxlbmRtb2RlOm51bWJlciA9IHByb3BzLmdldCg0LCAtMSk7XG5cdFx0XHRcdFx0XHRcdHZhciB2aXNpYmlsdHk6bnVtYmVyID0gcHJvcHMuZ2V0KDUsIC0xKTtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcHRoOm51bWJlciA9IHByb3BzLmdldCg2LCAtMSk7XG5cdFx0XHRcdFx0XHRcdHZhciBtYXNrOm51bWJlciA9IHByb3BzLmdldCg3LCAtMSk7XG5cdFx0XHRcdFx0XHRcdC8vIHRvZG86IGhhbmRsZSBmaWx0ZXJzXG5cblx0XHRcdFx0XHRcdFx0Ly9tYXRyaXgyZCBtdXN0IHByb3ZpZGUgNiB2YWx1ZXMgdG8gYmUgdmFsaWRcblxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFycmF5ID0gXCIgKyBtYXRyaXhfMmQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRpZiAobWF0cml4XzJkLmxlbmd0aCA9PSA2KSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRoaXNNYXRyaXggPSBuZXcgTWF0cml4M0QoKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzTWF0cml4LnBvc2l0aW9uID0gbmV3IFZlY3RvcjNEKG1hdHJpeF8yZFs0XSwgbWF0cml4XzJkWzVdLCAwKTtcblx0XHRcdFx0XHRcdFx0XHQvLyB0b2RvIGlzIHRoaXMgY29ycmVjdCBmb3IgMmQgLT4gM2Qgc2NhbGUgYW5kIHJvdGF0aW9uLiAoaSBkb3VidCBpdClcblx0XHRcdFx0XHRcdFx0XHR0aGlzTWF0cml4LnJhd0RhdGFbMF0gPSBtYXRyaXhfMmRbMF07XG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5yYXdEYXRhWzFdID0gbWF0cml4XzJkWzFdO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucmF3RGF0YVs0XSA9IG1hdHJpeF8yZFsyXTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzTWF0cml4LnJhd0RhdGFbNV0gPSBtYXRyaXhfMmRbM107XG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwiX2lNYXRyaXgzRFwiLCB0aGlzTWF0cml4KSk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFycmF5ID0gXCIgKyBtYXRyaXhfMmQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly9tYXRyaXgyZCBtdXN0IHByb3ZpZGUgMjAgdmFsdWVzIHRvIGJlIHZhbGlkXG5cdFx0XHRcdFx0XHRcdGlmIChjb2xvcnRyYW5zZm9ybS5sZW5ndGggPT0gMjApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBzZXQgQ29sb3JUcmFuc2Zvcm0gb24gb2JqZWN0UHJvcHNcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIGNvbG9yTWF0cml4ID0gXCIgKyBjb2xvcnRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIGJsZW5kbW9kZSBtdXN0IGJlIHBvc2l0aXZlIHRvIGJlIHZhbGlkXG5cdFx0XHRcdFx0XHRcdGlmIChibGVuZG1vZGUgPj0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBibGVuZG1vZGVfc3RyaW5nOnN0cmluZyA9IHRoaXMuYmxlbmRNb2RlRGljW2JsZW5kbW9kZV07XG5cdFx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2V0IEJsZW5kbW9kZSBvbiBvYmplY3RQcm9wc1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgQmxlbmRNb2RlID0gXCIgKyBibGVuZG1vZGVfc3RyaW5nO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vIHZpc2liaWx0eSBtdXN0IGJlIHBvc2l0aXZlIHRvIGJlIHZhbGlkXG5cdFx0XHRcdFx0XHRcdGlmICh2aXNpYmlsdHkgPj0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh2aXNpYmlsdHkgPT0gMClcblx0XHRcdFx0XHRcdFx0XHRcdGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcInZpc2libGVcIiwgZmFsc2UpKTtcblx0XHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJ2aXNpYmxlXCIsIHRydWUpKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyBkZXB0aCBtdXN0IGJlIHBvc2l0aXZlIHRvIGJlIHZhbGlkXG5cdFx0XHRcdFx0XHRcdGlmIChkZXB0aCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBEZXB0aCA9IFwiICsgZGVwdGg7XG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwiX19BUzJEZXB0aFwiLCBkZXB0aCkpO1xuXHRcdFx0XHRcdFx0XHRcdGhhc0RlcHRoQ2hhbmdlcyA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gbWFzayBtdXN0IGJlIHBvc2l0aXZlIHRvIGJlIHZhbGlkLiBpIHRoaW5rIG9ubHkgYWRkLWNvbW1hbmRzIHdpbGwgaGF2ZSB0aGlzIHZhbHVlLlxuXHRcdFx0XHRcdFx0XHQvLyBlLmcuIGl0IHNob3VsZCBuZXZlciBiZSB1cGRhdGVkIG9uIGFscmVhZHkgZXhpc3Rpbmcgb2JqZWN0cy4gKGJlY2F1c2UgZGVwdGggb2Ygb2JqZWN0cyBjYW4gY2hhbmdlLCBpIGFtIG5vdCBzdXJlKVxuXHRcdFx0XHRcdFx0XHRpZiAobWFzayA+PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBNYXNrLXVwIHRvIG9iai1pZDogXCIgKyBtYXNrO1xuXHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBkZXB0aENsaXBDaGFuZ2Ugb24gb2JqZWN0UHJvcHNcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyB0b2RvOiBoYW5kbGUgZmlsdGVyc1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIDQ6XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBPYmplY3QgQ29tbWFuZFxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlSUQgPSBvYmplY3RJRE1hcFtvYmplY3RJRF07XG5cdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBSZW1vdmVDaGlsZENvbW1hbmQoaW5zdGFuY2VJRCkpO1xuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAtIFJlbW92ZSBvYmplY3Qgd2l0aCBJRDogXCIgKyBvYmplY3RJRDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSA1OlxuXG5cdFx0XHRcdFx0XHQvLyBBZGQgU291bmQgQ29tbWFuZFxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogY3JlYXRlIENvbW1hbmRQcm9wc1NvdW5kIGFuZCBjaGVjayB3aGljaCBhc3NldCB0byB1c2Vcblx0XHRcdFx0XHRcdG9iamVjdElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0XHRcdHJlc291cmNlSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaW1wbGVtZW50IHNvdW5kIGluIHRpbWVsaW5lXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBBZGQgbmV3IFNvdW5kIEFXRC1JRCA9IFwiICsgcmVzb3VyY2VJRC50b1N0cmluZygpICsgXCIgYXMgb2JqZWN0X2lkID0gXCIgKyBvYmplY3RJRC50b1N0cmluZygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgIC0gVW5rbm93biBDb21tYW5kIFR5cGUgPSBcIiArIGNvbW1hbmRUeXBlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaGFzRGVwdGhDaGFuZ2VzKSB7XG5cdFx0XHRcdC8vIG9ubHkgd2FudCB0byBkbyB0aGlzIG9uY2UgYWZ0ZXIgYWxsIGNoaWxkcmVuJ3MgZGVwdGggdmFsdWVzIGFyZSB1cGRhdGVkXG5cdFx0XHRcdGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IEFwcGx5QVMyRGVwdGhzQ29tbWFuZCgpKTtcblx0XHRcdFx0aGFzRGVwdGhDaGFuZ2VzID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGhfY29kZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRpZiAobGVuZ3RoX2NvZGUgPiAwKSB7XG5cdFx0XHRcdC8vIFRPRE86IFNjcmlwdCBzaG91bGQgcHJvYmFibHkgbm90IGJlIGF0dGFjaGVkIHRvIGtleWZyYW1lcz9cblx0XHRcdFx0dmFyIGZyYW1lX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW5ndGhfY29kZSk7XG5cdFx0XHRcdC8vZnJhbWUuYWRkVG9TY3JpcHQoZnJhbWVfY29kZSk7XG5cdFx0XHRcdHRyYWNlU3RyaW5nICs9IFwiXFxuZnJhbWUtY29kZSA9IFwiICsgZnJhbWVfY29kZTtcblx0XHRcdH1cblx0XHRcdHRyYWNlU3RyaW5nICs9IGNvbW1hbmRTdHJpbmc7XG5cdFx0XHQvL3RyYWNlKFwibGVuZ3RoX2NvZGUgPSBcIitsZW5ndGhfY29kZStcIiBmcmFtZV9jb2RlID0gXCIrZnJhbWVfY29kZSk7XG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpOy8vIHVzZXIgYXR0cmlidXRlcyAtIHNraXAgZm9yIG5vd1xuXHRcdFx0Y29uc29sZS5sb2codHJhY2VTdHJpbmcpO1xuXHRcdFx0dGltZUxpbmVDb250YWluZXIuYWRkRnJhbWUoZnJhbWUpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD50aW1lTGluZUNvbnRhaW5lciwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0aW1lTGluZUNvbnRhaW5lcjtcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0fVxuXHQvL0Jsb2NrIElEID0gMVxuXHRwcml2YXRlIHBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cblx0XHR2YXIgZ2VvbTpHZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xuXG5cdFx0Ly8gUmVhZCBuYW1lIGFuZCBzdWIgY291bnRcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIG51bV9zdWJzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblxuXHRcdC8vIFJlYWQgb3B0aW9uYWwgcHJvcGVydGllc1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xuXHRcdHZhciBnZW9TY2FsZVU6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDEpO1xuXHRcdHZhciBnZW9TY2FsZVY6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDEpO1xuXG5cdFx0Ly8gTG9vcCB0aHJvdWdoIHN1YiBtZXNoZXNcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyID0gMDtcblx0XHR3aGlsZSAoc3Vic19wYXJzZWQgPCBudW1fc3Vicykge1xuXHRcdFx0dmFyIGlzX2N1cnZlX2dlb206Ym9vbGVhbj1mYWxzZTtcblx0XHRcdHZhciBpOm51bWJlcjtcblx0XHRcdHZhciBzbV9sZW46bnVtYmVyLCBzbV9lbmQ6bnVtYmVyO1xuXHRcdFx0dmFyIHdfaW5kaWNlczpBcnJheTxudW1iZXI+O1xuXHRcdFx0dmFyIHdlaWdodHM6QXJyYXk8bnVtYmVyPjtcblxuXHRcdFx0c21fbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdHNtX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzbV9sZW47XG5cblx0XHRcdHZhciBzdWJQcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xuXHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzbV9lbmQpIHtcblx0XHRcdFx0dmFyIGlkeDpudW1iZXIgPSAwO1xuXHRcdFx0XHR2YXIgc3RyX2Z0eXBlOm51bWJlciwgc3RyX3R5cGU6bnVtYmVyLCBzdHJfbGVuOm51bWJlciwgc3RyX2VuZDpudW1iZXI7XG5cblx0XHRcdFx0Ly8gVHlwZSwgZmllbGQgdHlwZSwgbGVuZ3RoXG5cdFx0XHRcdHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdHN0cl9mdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdFx0XHRzdHJfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xuXG5cdFx0XHRcdHZhciB4Om51bWJlciwgeTpudW1iZXIsIHo6bnVtYmVyO1xuXG5cdFx0XHRcdGlmIChzdHJfdHlwZSA9PSAxKSB7Ly92ZXJ0ZXggM2QgcG9zaXRpb25zXG5cdFx0XHRcdFx0dmFyIHZlcnRzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cblx0XHRcdFx0XHRcdHggPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xuXHRcdFx0XHRcdFx0eSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0XHR6ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcblxuXHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geDtcblx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHk7XG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB6O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAyKSB7Ly9mYWNlIGluZGljaWVzIHBvc2l0aW9uc1xuXHRcdFx0XHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAzKSB7XG5cdFx0XHRcdFx0dmFyIHV2czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcblx0XHRcdFx0XHRcdHV2c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDQpIHtcblxuXHRcdFx0XHRcdHZhciBub3JtYWxzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHRub3JtYWxzW2lkeCsrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gNikge1xuXHRcdFx0XHRcdHdfaW5kaWNlcyA9IEFycmF5PG51bWJlcj4oKTtcblxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xuXHRcdFx0XHRcdFx0d19pbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSozO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDcpIHtcblxuXHRcdFx0XHRcdHdlaWdodHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHR3ZWlnaHRzW2lkeCsrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDgpIHsvLyAyZC1wb3NpdGlvbnMgLSBub3QgdXNlZCB5ZXQuXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gOSkgey8vIGNvbWJpbmVkIHZlcnRleDNEIHN0cmVhbSAxMyB4IGZsb2F0MzJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAxMCkgey8vIGNvbWJpbmVkIHZlcnRleDJEIHN0cmVhbSA1IHggZmxvYXQzMlxuXHRcdFx0XHRcdGlzX2N1cnZlX2dlb209dHJ1ZTtcblx0XHRcdFx0XHR2YXIgaWR4X3BvczpudW1iZXIgPSAwO1xuXHRcdFx0XHRcdHZhciBpZHhfY3VydmVzOm51bWJlciA9IDA7XG5cdFx0XHRcdFx0dmFyIGlkeF91dnM6bnVtYmVyID0gMDtcblxuXHRcdFx0XHRcdHZhciBwb3NpdGlvbnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0XHRcdFx0dmFyIGN1cnZlRGF0YTpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHR2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cblx0XHRcdFx0XHRcdHBvc2l0aW9uc1tpZHhfcG9zKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyB4XG5cdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geVxuXHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSAgdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyB0eXBlXG5cblx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXG5cdFx0XHRcdFx0XHRjdXJ2ZURhdGFbaWR4X2N1cnZlcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMlxuXG5cdFx0XHRcdFx0XHR1dnNbaWR4X3V2cysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxuXHRcdFx0XHRcdFx0dXZzW2lkeF91dnMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDFcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIHN1Yi1tZXNoIGF0dHJpYnV0ZXMgZm9yIG5vd1xuXHRcdFx0aWYoaXNfY3VydmVfZ2VvbSl7XG5cdFx0XHRcdHZhciBjdXJ2ZV9zdWJfZ2VvbTpDdXJ2ZVN1Ykdlb21ldHJ5ID0gbmV3IEN1cnZlU3ViR2VvbWV0cnkodHJ1ZSk7XG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVDdXJ2ZXMoY3VydmVEYXRhKTtcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlVVZzKHV2cyk7XG5cdFx0XHRcdGdlb20uYWRkU3ViR2VvbWV0cnkoY3VydmVfc3ViX2dlb20pO1xuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDdXJ2ZVN1Ykdlb21ldHJ5XCIpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHZhciB0cmlhbmdsZV9zdWJfZ2VvbSA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xuXHRcdFx0XHRpZiAod2VpZ2h0cylcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5qb2ludHNQZXJWZXJ0ZXggPSB3ZWlnaHRzLmxlbmd0aCAvICh2ZXJ0cy5sZW5ndGggLyAzKTtcblx0XHRcdFx0aWYgKG5vcm1hbHMpXG5cdFx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcblx0XHRcdFx0aWYgKHV2cylcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5hdXRvRGVyaXZlVVZzID0gZmFsc2U7XG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XG5cdFx0XHRcdGlmICh0cnVlKSB7XG5cdFx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20uYXV0b0Rlcml2ZVRhbmdlbnRzID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVJbmRpY2VzKGluZGljZXMpO1xuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVQb3NpdGlvbnModmVydHMpO1xuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVWZXJ0ZXhOb3JtYWxzKG5vcm1hbHMpO1xuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVVVnModXZzKTtcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlVmVydGV4VGFuZ2VudHMobnVsbCk7XG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZUpvaW50V2VpZ2h0cyh3ZWlnaHRzKTtcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlSm9pbnRJbmRpY2VzKHdfaW5kaWNlcyk7XG5cblx0XHRcdFx0dmFyIHNjYWxlVTpudW1iZXIgPSBzdWJQcm9wcy5nZXQoMSwgMSk7XG5cdFx0XHRcdHZhciBzY2FsZVY6bnVtYmVyID0gc3ViUHJvcHMuZ2V0KDIsIDEpO1xuXHRcdFx0XHR2YXIgc2V0U3ViVVZzOmJvb2xlYW4gPSBmYWxzZTsgLy90aGlzIHNob3VsZCByZW1haW4gZmFsc2UgYXRtLCBiZWNhdXNlIGluIEF3YXlCdWlsZGVyIHRoZSB1diBpcyBvbmx5IHNjYWxlZCBieSB0aGUgZ2VvbWV0cnlcblxuXHRcdFx0XHRpZiAoKGdlb1NjYWxlVSAhPSBzY2FsZVUpIHx8IChnZW9TY2FsZVYgIT0gc2NhbGVWKSkge1xuXHRcdFx0XHRcdHNldFN1YlVWcyA9IHRydWU7XG5cdFx0XHRcdFx0c2NhbGVVID0gZ2VvU2NhbGVVIC8gc2NhbGVVO1xuXHRcdFx0XHRcdHNjYWxlViA9IGdlb1NjYWxlViAvIHNjYWxlVjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzZXRTdWJVVnMpXG5cdFx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20uc2NhbGVVVihzY2FsZVUsIHNjYWxlVik7XG5cdFx0XHRcdGdlb20uYWRkU3ViR2VvbWV0cnkodHJpYW5nbGVfc3ViX2dlb20pO1xuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUcmlhbmdsZVN1Ykdlb21ldHJ5XCIpO1xuXHRcdFx0fVxuXG5cblx0XHRcdC8vIFRPRE86IFNvbWVob3cgbWFwIGluLXN1YiB0byBvdXQtc3ViIGluZGljZXMgdG8gZW5hYmxlIGxvb2stdXBcblx0XHRcdC8vIHdoZW4gY3JlYXRpbmcgbWVzaGVzIChhbmQgdGhlaXIgbWF0ZXJpYWwgYXNzaWdubWVudHMuKVxuXG5cdFx0XHRzdWJzX3BhcnNlZCsrO1xuXHRcdH1cblx0XHRpZiAoKGdlb1NjYWxlVSAhPSAxKSB8fCAoZ2VvU2NhbGVWICE9IDEpKVxuXHRcdFx0Z2VvbS5zY2FsZVVWKGdlb1NjYWxlVSwgZ2VvU2NhbGVWKTtcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBnZW9tLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGdlb207XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVHJpYW5nbGVHZW9tZXRyeTogTmFtZSA9IFwiICsgbmFtZSk7XG5cdFx0fVxuXG5cdH1cblxuXG5cdC8vQmxvY2sgSUQgPSAxMVxuXHRwcml2YXRlIHBhcnNlUHJpbWl0dmVzKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgbmFtZTpzdHJpbmc7XG5cdFx0dmFyIHByZWZhYjpQcmVmYWJCYXNlO1xuXHRcdHZhciBwcmltVHlwZTpudW1iZXI7XG5cdFx0dmFyIHN1YnNfcGFyc2VkOm51bWJlcjtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcztcblx0XHR2YXIgYnNtOk1hdHJpeDNEO1xuXG5cdFx0Ly8gUmVhZCBuYW1lIGFuZCBzdWIgY291bnRcblx0XHRuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHByaW1UeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTAxOnRoaXMuX2dlb05yVHlwZSwgMTAyOnRoaXMuX2dlb05yVHlwZSwgMTAzOnRoaXMuX2dlb05yVHlwZSwgMTEwOnRoaXMuX2dlb05yVHlwZSwgMTExOnRoaXMuX2dlb05yVHlwZSwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCAzMDM6QVdEUGFyc2VyLlVJTlQxNiwgNzAxOkFXRFBhcnNlci5CT09MLCA3MDI6QVdEUGFyc2VyLkJPT0wsIDcwMzpBV0RQYXJzZXIuQk9PTCwgNzA0OkFXRFBhcnNlci5CT09MfSk7XG5cblx0XHR2YXIgcHJpbWl0aXZlVHlwZXM6QXJyYXk8c3RyaW5nPiA9IFtcIlVuc3VwcG9ydGVkIFR5cGUtSURcIiwgXCJQcmltaXRpdmVQbGFuZVByZWZhYlwiLCBcIlByaW1pdGl2ZUN1YmVQcmVmYWJcIiwgXCJQcmltaXRpdmVTcGhlcmVQcmVmYWJcIiwgXCJQcmltaXRpdmVDeWxpbmRlclByZWZhYlwiLCBcIlByaW1pdGl2ZXNDb25lUHJlZmFiXCIsIFwiUHJpbWl0aXZlc0NhcHN1bGVQcmVmYWJcIiwgXCJQcmltaXRpdmVzVG9ydXNQcmVmYWJcIl1cblxuXHRcdHN3aXRjaCAocHJpbVR5cGUpIHtcblx0XHRcdC8vIHRvIGRvLCBub3QgYWxsIHByb3BlcnRpZXMgYXJlIHNldCBvbiBhbGwgcHJpbWl0aXZlc1xuXG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVQbGFuZVByZWZhYihwcm9wcy5nZXQoMTAxLCAxMDApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxKSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCg3MDEsIHRydWUpLCBwcm9wcy5nZXQoNzAyLCBmYWxzZSkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ3ViZVByZWZhYihwcm9wcy5nZXQoMTAxLCAxMDApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMTAzLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxKSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCgzMDMsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVTcGhlcmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDEyKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCA1MCksIHByb3BzLmdldCgxMDMsIDEwMCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMSksIHRydWUsIHRydWUsIHRydWUpOyAvLyBib29sNzAxLCBib29sNzAyLCBib29sNzAzLCBib29sNzA0KTtcblx0XHRcdFx0aWYgKCFwcm9wcy5nZXQoNzAxLCB0cnVlKSlcblx0XHRcdFx0XHQoPFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiPnByZWZhYikudG9wQ2xvc2VkID0gZmFsc2U7XG5cdFx0XHRcdGlmICghcHJvcHMuZ2V0KDcwMiwgdHJ1ZSkpXG5cdFx0XHRcdFx0KDxQcmltaXRpdmVDeWxpbmRlclByZWZhYj5wcmVmYWIpLmJvdHRvbUNsb3NlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoIXByb3BzLmdldCg3MDMsIHRydWUpKVxuXHRcdFx0XHRcdCg8UHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWI+cHJlZmFiKS55VXAgPSBmYWxzZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ29uZVByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCg3MDEsIHRydWUpLCBwcm9wcy5nZXQoNzAyLCB0cnVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDYXBzdWxlUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxNSksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVRvcnVzUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgNTApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDgpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJlZmFiQmFzZSgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVSUk9SOiBVTlNVUFBPUlRFRCBQUkVGQUJfVFlQRVwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKChwcm9wcy5nZXQoMTEwLCAxKSAhPSAxKSB8fCAocHJvcHMuZ2V0KDExMSwgMSkgIT0gMSkpIHtcblx0XHRcdC8vZ2VvbS5zdWJHZW9tZXRyaWVzO1xuXHRcdFx0Ly9nZW9tLnNjYWxlVVYocHJvcHMuZ2V0KDExMCwgMSksIHByb3BzLmdldCgxMTEsIDEpKTsgLy9UT0RPIGFkZCBiYWNrIHNjYWxpbmcgdG8gcHJlZmFic1xuXHRcdH1cblxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHByZWZhYi5uYW1lID0gbmFtZTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChwcmVmYWIsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gcHJlZmFiO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRpZiAoKHByaW1UeXBlIDwgMCkgfHwgKHByaW1UeXBlID4gNykpIHtcblx0XHRcdFx0cHJpbVR5cGUgPSAwO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBQcmltaXZpdGU6IE5hbWUgPSBcIiArIG5hbWUgKyBcInwgdHlwZSA9IFwiICsgcHJpbWl0aXZlVHlwZXNbcHJpbVR5cGVdKTtcblx0XHR9XG5cdH1cblxuXHQvLyBCbG9jayBJRCA9IDIyXG5cdHByaXZhdGUgcGFyc2VDb250YWluZXIoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBuYW1lOnN0cmluZztcblx0XHR2YXIgcGFyX2lkOm51bWJlcjtcblx0XHR2YXIgbXR4Ok1hdHJpeDNEO1xuXHRcdHZhciBjdHI6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcblx0XHR2YXIgcGFyZW50OkRpc3BsYXlPYmplY3RDb250YWluZXI7XG5cblx0XHRwYXJfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdG10eCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xuXHRcdG5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xuXHRcdGN0ciA9IG5ldyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XG5cdFx0Y3RyLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSk7XG5cblx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0dmFyIG9iajpEaXNwbGF5T2JqZWN0ID0gKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5WzFdKS5hZGRDaGlsZChjdHIpO1xuXHRcdFx0cGFyZW50TmFtZSA9ICg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHR9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1sgYmxvY2tJRCBdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwYXJlbnQgZm9yIHRoaXMgT2JqZWN0Q29udGFpbmVyM0RcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChjdHIpO1xuXHRcdH1cblxuXHRcdC8vIGluIEFXRCB2ZXJzaW9uIDIuMSB3ZSByZWFkIHRoZSBDb250YWluZXIgcHJvcGVydGllc1xuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAyKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAxKSkge1xuXHRcdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcblx0XHRcdGN0ci5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcblx0XHR9XG5cdFx0Ly8gaW4gb3RoZXIgdmVyc2lvbnMgd2UgZG8gbm90IHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHR9XG5cblx0XHQvLyB0aGUgZXh0cmFQcm9wZXJ0aWVzIHNob3VsZCBvbmx5IGJlIHNldCBmb3IgQVdEMi4xLUZpbGVzLCBidXQgaXMgcmVhZCBmb3IgYm90aCB2ZXJzaW9uc1xuXHRcdGN0ci5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gY3RyLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGN0cjtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDb250YWluZXI6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEJsb2NrIElEID0gMjNcblx0cHJpdmF0ZSBwYXJzZU1lc2hJbnN0YW5jZShibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIG51bV9tYXRlcmlhbHM6bnVtYmVyO1xuXHRcdHZhciBtYXRlcmlhbHNfcGFyc2VkOm51bWJlcjtcblx0XHR2YXIgcGFyZW50OkRpc3BsYXlPYmplY3RDb250YWluZXI7XG5cdFx0dmFyIHBhcl9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcblx0XHR2YXIgZGF0YV9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBnZW9tOkdlb21ldHJ5O1xuXHRcdHZhciByZXR1cm5lZEFycmF5R2VvbWV0cnk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRhdGFfaWQsIFtBc3NldFR5cGUuR0VPTUVUUlldKVxuXG5cdFx0aWYgKHJldHVybmVkQXJyYXlHZW9tZXRyeVswXSkge1xuXHRcdFx0Z2VvbSA9IDxHZW9tZXRyeT4gcmV0dXJuZWRBcnJheUdlb21ldHJ5WzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIEdlb21ldHJ5IGZvciB0aGlzIE1lc2guIEEgZW1wdHkgR2VvbWV0cnkgaXMgY3JlYXRlZCFcIik7XG5cdFx0XHRnZW9tID0gbmV3IEdlb21ldHJ5KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmdlb0lEID0gZGF0YV9pZDtcblx0XHR2YXIgbWF0ZXJpYWxzOkFycmF5PE1hdGVyaWFsQmFzZT4gPSBuZXcgQXJyYXk8TWF0ZXJpYWxCYXNlPigpO1xuXHRcdG51bV9tYXRlcmlhbHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHR2YXIgbWF0ZXJpYWxOYW1lczpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblx0XHRtYXRlcmlhbHNfcGFyc2VkID0gMDtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5TWF0ZXJpYWw6QXJyYXk8YW55PjtcblxuXHRcdHdoaWxlIChtYXRlcmlhbHNfcGFyc2VkIDwgbnVtX21hdGVyaWFscykge1xuXHRcdFx0dmFyIG1hdF9pZDpudW1iZXI7XG5cdFx0XHRtYXRfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0cmV0dXJuZWRBcnJheU1hdGVyaWFsID0gdGhpcy5nZXRBc3NldEJ5SUQobWF0X2lkLCBbQXNzZXRUeXBlLk1BVEVSSUFMXSlcblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlNYXRlcmlhbFswXSkgJiYgKG1hdF9pZCA+IDApKSB7XG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIE1hdGVyaWFsIE5yIFwiICsgbWF0ZXJpYWxzX3BhcnNlZCArIFwiIChJRCA9IFwiICsgbWF0X2lkICsgXCIgKSBmb3IgdGhpcyBNZXNoXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbTpNYXRlcmlhbEJhc2UgPSA8TWF0ZXJpYWxCYXNlPiByZXR1cm5lZEFycmF5TWF0ZXJpYWxbMV07XG5cblx0XHRcdG1hdGVyaWFscy5wdXNoKG0pO1xuXHRcdFx0bWF0ZXJpYWxOYW1lcy5wdXNoKG0ubmFtZSk7XG5cblx0XHRcdG1hdGVyaWFsc19wYXJzZWQrKztcblx0XHR9XG5cblx0XHR2YXIgbWVzaDpNZXNoID0gbmV3IE1lc2goZ2VvbSwgbnVsbCk7XG5cdFx0bWVzaC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XG5cblx0XHR2YXIgcmV0dXJuZWRBcnJheVBhcmVudDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pXG5cblx0XHRpZiAocmV0dXJuZWRBcnJheVBhcmVudFswXSkge1xuXHRcdFx0dmFyIG9iakM6RGlzcGxheU9iamVjdENvbnRhaW5lciA9IDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdO1xuXHRcdFx0b2JqQy5hZGRDaGlsZChtZXNoKTtcblx0XHRcdHBhcmVudE5hbWUgPSBvYmpDLm5hbWU7XG5cdFx0fSBlbHNlIGlmIChwYXJfaWQgPiAwKSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBNZXNoXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxuXHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQobWVzaCk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGVyaWFscy5sZW5ndGggPj0gMSAmJiBtZXNoLnN1Yk1lc2hlcy5sZW5ndGggPT0gMSkge1xuXHRcdFx0bWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsc1swXTtcblx0XHR9IGVsc2UgaWYgKG1hdGVyaWFscy5sZW5ndGggPiAxKSB7XG5cdFx0XHR2YXIgaTpudW1iZXI7XG5cblx0XHRcdC8vIEFzc2lnbiBlYWNoIHN1Yi1tZXNoIGluIHRoZSBtZXNoIGEgbWF0ZXJpYWwgZnJvbSB0aGUgbGlzdC4gSWYgbW9yZSBzdWItbWVzaGVzXG5cdFx0XHQvLyB0aGFuIG1hdGVyaWFscywgcmVwZWF0IHRoZSBsYXN0IG1hdGVyaWFsIGZvciBhbGwgcmVtYWluaW5nIHN1Yi1tZXNoZXMuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWVzaC5zdWJNZXNoZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bWVzaC5zdWJNZXNoZXNbaV0ubWF0ZXJpYWwgPSBtYXRlcmlhbHNbTWF0aC5taW4obWF0ZXJpYWxzLmxlbmd0aCAtIDEsIGkpXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XG5cdFx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOCwgNTpBV0RQYXJzZXIuQk9PTH0pO1xuXHRcdFx0bWVzaC5waXZvdCA9IG5ldyBWZWN0b3IzRCg8bnVtYmVyPnByb3BzLmdldCgxLCAwKSwgPG51bWJlcj5wcm9wcy5nZXQoMiwgMCksIDxudW1iZXI+IHByb3BzLmdldCgzLCAwKSk7XG5cdFx0XHRtZXNoLmNhc3RzU2hhZG93cyA9IHByb3BzLmdldCg1LCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XG5cdFx0fVxuXG5cdFx0bWVzaC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWVzaCwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBtZXNoO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE1lc2g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUgKyBcInwgR2VvbWV0cnktTmFtZSA9IFwiICsgZ2VvbS5uYW1lICsgXCIgfCBTdWJNZXNoZXMgPSBcIiArIG1lc2guc3ViTWVzaGVzLmxlbmd0aCArIFwiIHwgTWF0LU5hbWVzID0gXCIgKyBtYXRlcmlhbE5hbWVzLnRvU3RyaW5nKCkpO1xuXHRcdH1cblx0fVxuXG5cblx0Ly9CbG9jayBJRCAzMVxuXHRwcml2YXRlIHBhcnNlU2t5Ym94SW5zdGFuY2UoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgY3ViZVRleEFkZHI6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5Q3ViZVRleDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoY3ViZVRleEFkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0sIFwiQ3ViZVRleHR1cmVcIik7XG5cdFx0aWYgKCghcmV0dXJuZWRBcnJheUN1YmVUZXhbMF0pICYmIChjdWJlVGV4QWRkciAhPSAwKSlcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBDdWJldGV4dHVyZSAoSUQgPSBcIiArIGN1YmVUZXhBZGRyICsgXCIgKSBmb3IgdGhpcyBTa3lib3hcIik7XG5cdFx0dmFyIGFzc2V0OlNreWJveCA9IG5ldyBTa3lib3goPEltYWdlQ3ViZVRleHR1cmU+IHJldHVybmVkQXJyYXlDdWJlVGV4WzFdKTtcblxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpXG5cdFx0YXNzZXQuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChhc3NldCwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNreWJveDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBDdWJlVGV4dHVyZS1OYW1lID0gXCIgKyAoPEltYWdlQ3ViZVRleHR1cmU+IHJldHVybmVkQXJyYXlDdWJlVGV4WzFdKS5uYW1lKTtcblxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDQxXG5cdHByaXZhdGUgcGFyc2VMaWdodChibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIGxpZ2h0OkxpZ2h0QmFzZTtcblx0XHR2YXIgbmV3U2hhZG93TWFwcGVyOlNoYWRvd01hcHBlckJhc2U7XG5cblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIG10eDpNYXRyaXgzRCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgbGlnaHRUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fcHJvcHNOclR5cGUsIDI6dGhpcy5fcHJvcHNOclR5cGUsIDM6QVdEUGFyc2VyLkNPTE9SLCA0OnRoaXMuX3Byb3BzTnJUeXBlLCA1OnRoaXMuX3Byb3BzTnJUeXBlLCA2OkFXRFBhcnNlci5CT09MLCA3OkFXRFBhcnNlci5DT0xPUiwgODp0aGlzLl9wcm9wc05yVHlwZSwgOTpBV0RQYXJzZXIuVUlOVDgsIDEwOkFXRFBhcnNlci5VSU5UOCwgMTE6dGhpcy5fcHJvcHNOclR5cGUsIDEyOkFXRFBhcnNlci5VSU5UMTYsIDIxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjI6dGhpcy5fbWF0cml4TnJUeXBlLCAyMzp0aGlzLl9tYXRyaXhOclR5cGV9KTtcblx0XHR2YXIgc2hhZG93TWFwcGVyVHlwZTpudW1iZXIgPSBwcm9wcy5nZXQoOSwgMCk7XG5cdFx0dmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcblx0XHR2YXIgbGlnaHRUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiVW5zdXBwb3J0ZWQgTGlnaHRUeXBlXCIsIFwiUG9pbnRMaWdodFwiLCBcIkRpcmVjdGlvbmFsTGlnaHRcIl07XG5cdFx0dmFyIHNoYWRvd01hcHBlclR5cGVzOkFycmF5PHN0cmluZz4gPSBbXCJObyBTaGFkb3dNYXBwZXJcIiwgXCJEaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiLCBcIk5lYXJEaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiLCBcIkNhc2NhZGVTaGFkb3dNYXBwZXJcIiwgXCJDdWJlTWFwU2hhZG93TWFwcGVyXCJdO1xuXG5cdFx0aWYgKGxpZ2h0VHlwZSA9PSAxKSB7XG5cdFx0XHRsaWdodCA9IG5ldyBQb2ludExpZ2h0KCk7XG5cblx0XHRcdCg8UG9pbnRMaWdodD4gbGlnaHQpLnJhZGl1cyA9IHByb3BzLmdldCgxLCA5MDAwMCk7XG5cdFx0XHQoPFBvaW50TGlnaHQ+IGxpZ2h0KS5mYWxsT2ZmID0gcHJvcHMuZ2V0KDIsIDEwMDAwMCk7XG5cblx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID4gMCkge1xuXHRcdFx0XHRpZiAoc2hhZG93TWFwcGVyVHlwZSA9PSA0KSB7XG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyID0gbmV3IEN1YmVNYXBTaGFkb3dNYXBwZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsaWdodC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XG5cblx0XHR9XG5cblx0XHRpZiAobGlnaHRUeXBlID09IDIpIHtcblxuXHRcdFx0bGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodChwcm9wcy5nZXQoMjEsIDApLCBwcm9wcy5nZXQoMjIsIC0xKSwgcHJvcHMuZ2V0KDIzLCAxKSk7XG5cblx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID4gMCkge1xuXHRcdFx0XHRpZiAoc2hhZG93TWFwcGVyVHlwZSA9PSAxKSB7XG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyID0gbmV3IERpcmVjdGlvbmFsU2hhZG93TWFwcGVyKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL2lmIChzaGFkb3dNYXBwZXJUeXBlID09IDIpXG5cdFx0XHRcdC8vICBuZXdTaGFkb3dNYXBwZXIgPSBuZXcgTmVhckRpcmVjdGlvbmFsU2hhZG93TWFwcGVyKHByb3BzLmdldCgxMSwgMC41KSk7XG5cdFx0XHRcdC8vaWYgKHNoYWRvd01hcHBlclR5cGUgPT0gMylcblx0XHRcdFx0Ly8gICBuZXdTaGFkb3dNYXBwZXIgPSBuZXcgQ2FzY2FkZVNoYWRvd01hcHBlcihwcm9wcy5nZXQoMTIsIDMpKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdGxpZ2h0LmNvbG9yID0gcHJvcHMuZ2V0KDMsIDB4ZmZmZmZmKTtcblx0XHRsaWdodC5zcGVjdWxhciA9IHByb3BzLmdldCg0LCAxLjApO1xuXHRcdGxpZ2h0LmRpZmZ1c2UgPSBwcm9wcy5nZXQoNSwgMS4wKTtcblx0XHRsaWdodC5hbWJpZW50Q29sb3IgPSBwcm9wcy5nZXQoNywgMHhmZmZmZmYpO1xuXHRcdGxpZ2h0LmFtYmllbnQgPSBwcm9wcy5nZXQoOCwgMC4wKTtcblxuXHRcdC8vIGlmIGEgc2hhZG93TWFwcGVyIGhhcyBiZWVuIGNyZWF0ZWQsIGFkanVzdCB0aGUgZGVwdGhNYXBTaXplIGlmIG5lZWRlZCwgYXNzaWduIHRvIGxpZ2h0IGFuZCBzZXQgY2FzdFNoYWRvd3MgdG8gdHJ1ZVxuXHRcdGlmIChuZXdTaGFkb3dNYXBwZXIpIHtcblx0XHRcdGlmIChuZXdTaGFkb3dNYXBwZXIgaW5zdGFuY2VvZiBDdWJlTWFwU2hhZG93TWFwcGVyKSB7XG5cdFx0XHRcdGlmIChwcm9wcy5nZXQoMTAsIDEpICE9IDEpIHtcblx0XHRcdFx0XHRuZXdTaGFkb3dNYXBwZXIuZGVwdGhNYXBTaXplID0gdGhpcy5fZGVwdGhTaXplRGljW3Byb3BzLmdldCgxMCwgMSldO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAocHJvcHMuZ2V0KDEwLCAyKSAhPSAyKSB7XG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyLmRlcHRoTWFwU2l6ZSA9IHRoaXMuX2RlcHRoU2l6ZURpY1twcm9wcy5nZXQoMTAsIDIpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsaWdodC5zaGFkb3dNYXBwZXIgPSBuZXdTaGFkb3dNYXBwZXI7XG5cdFx0XHRsaWdodC5jYXN0c1NoYWRvd3MgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChwYXJfaWQgIT0gMCkge1xuXG5cdFx0XHR2YXIgcmV0dXJuZWRBcnJheVBhcmVudDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pXG5cblx0XHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XG5cdFx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVBhcmVudFsxXSkuYWRkQ2hpbGQobGlnaHQpO1xuXHRcdFx0XHRwYXJlbnROYW1lID0gKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdKS5uYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwYXJlbnQgZm9yIHRoaXMgTGlnaHRcIik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChsaWdodCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8IElBc3NldD4gbGlnaHQsIG5hbWUpO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBsaWdodDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTGlnaHQ6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVHlwZSA9IFwiICsgbGlnaHRUeXBlc1tsaWdodFR5cGVdICsgXCIgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSArIFwiIHwgU2hhZG93TWFwcGVyLVR5cGUgPSBcIiArIHNoYWRvd01hcHBlclR5cGVzW3NoYWRvd01hcHBlclR5cGVdKTtcblxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDQzXG5cdHByaXZhdGUgcGFyc2VDYW1lcmEoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXG5cdFx0dmFyIHBhcl9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcblx0XHR2YXIgcHJvamVjdGlvbjpQcm9qZWN0aW9uQmFzZTtcblxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpOyAvL3NldCBhcyBhY3RpdmUgY2FtZXJhXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTsgLy9sZW5ndGhvZiBsZW5zZXMgLSBub3QgdXNlZCB5ZXRcblxuXHRcdHZhciBwcm9qZWN0aW9udHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDEwNDp0aGlzLl9wcm9wc05yVHlwZX0pO1xuXG5cdFx0c3dpdGNoIChwcm9qZWN0aW9udHlwZSkge1xuXHRcdFx0Y2FzZSA1MDAxOlxuXHRcdFx0XHRwcm9qZWN0aW9uID0gbmV3IFBlcnNwZWN0aXZlUHJvamVjdGlvbihwcm9wcy5nZXQoMTAxLCA2MCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNTAwMjpcblx0XHRcdFx0cHJvamVjdGlvbiA9IG5ldyBPcnRob2dyYXBoaWNQcm9qZWN0aW9uKHByb3BzLmdldCgxMDEsIDUwMCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNTAwMzpcblx0XHRcdFx0cHJvamVjdGlvbiA9IG5ldyBPcnRob2dyYXBoaWNPZmZDZW50ZXJQcm9qZWN0aW9uKHByb3BzLmdldCgxMDEsIC00MDApLCBwcm9wcy5nZXQoMTAyLCA0MDApLCBwcm9wcy5nZXQoMTAzLCAtMzAwKSwgcHJvcHMuZ2V0KDEwNCwgMzAwKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ1bnN1cHBvcnRlZExlbnN0eXBlXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGNhbWVyYTpDYW1lcmEgPSBuZXcgQ2FtZXJhKHByb2plY3Rpb24pO1xuXHRcdGNhbWVyYS50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XG5cblx0XHR2YXIgcmV0dXJuZWRBcnJheVBhcmVudDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pXG5cblx0XHRpZiAocmV0dXJuZWRBcnJheVBhcmVudFswXSkge1xuXG5cdFx0XHR2YXIgb2JqQzpEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV07XG5cdFx0XHRvYmpDLmFkZENoaWxkKGNhbWVyYSk7XG5cblx0XHRcdHBhcmVudE5hbWUgPSBvYmpDLm5hbWU7XG5cblx0XHR9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIENhbWVyYVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGNhbWVyYSk7XG5cdFx0fVxuXG5cdFx0Y2FtZXJhLm5hbWUgPSBuYW1lO1xuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4fSk7XG5cdFx0Y2FtZXJhLnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xuXHRcdGNhbWVyYS5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoY2FtZXJhLCBuYW1lKTtcblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY2FtZXJhXG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQ2FtZXJhOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFByb2plY3Rpb250eXBlID0gXCIgKyBwcm9qZWN0aW9uICsgXCIgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSk7XG5cdFx0fVxuXG5cdH1cblxuXHQvL0Jsb2NrIElEID0gNTFcblx0cHJpdmF0ZSBwYXJzZUxpZ2h0UGlja2VyKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIG51bUxpZ2h0czpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dmFyIGxpZ2h0c0FycmF5OkFycmF5PExpZ2h0QmFzZT4gPSBuZXcgQXJyYXk8TGlnaHRCYXNlPigpO1xuXHRcdHZhciBrOm51bWJlciA9IDA7XG5cdFx0dmFyIGxpZ2h0SUQ6bnVtYmVyID0gMDtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5TGlnaHQ6QXJyYXk8YW55Pjtcblx0XHR2YXIgbGlnaHRzQXJyYXlOYW1lczpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuXHRcdGZvciAoayA9IDA7IGsgPCBudW1MaWdodHM7IGsrKykge1xuXHRcdFx0bGlnaHRJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRyZXR1cm5lZEFycmF5TGlnaHQgPSB0aGlzLmdldEFzc2V0QnlJRChsaWdodElELCBbQXNzZXRUeXBlLkxJR0hUXSlcblxuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlMaWdodFswXSkge1xuXHRcdFx0XHRsaWdodHNBcnJheS5wdXNoKDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlMaWdodFsxXSk7XG5cdFx0XHRcdGxpZ2h0c0FycmF5TmFtZXMucHVzaCgoIDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlMaWdodFsxXSkubmFtZSk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgTGlnaHQgTnIgXCIgKyBrICsgXCIgKElEID0gXCIgKyBsaWdodElEICsgXCIgKSBmb3IgdGhpcyBMaWdodFBpY2tlclwiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobGlnaHRzQXJyYXkubGVuZ3RoID09IDApIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGhpcyBMaWdodFBpY2tlciwgY2F1c2Ugbm8gTGlnaHQgd2FzIGZvdW5kLlwiKTtcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdFx0cmV0dXJuOyAvL3JldHVybiB3aXRob3V0IGFueSBtb3JlIHBhcnNpbmcgZm9yIHRoaXMgYmxvY2tcblx0XHR9XG5cblx0XHR2YXIgbGlnaHRQaWNrOkxpZ2h0UGlja2VyQmFzZSA9IG5ldyBTdGF0aWNMaWdodFBpY2tlcihsaWdodHNBcnJheSk7XG5cdFx0bGlnaHRQaWNrLm5hbWUgPSBuYW1lO1xuXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbGlnaHRQaWNrLCBuYW1lKTtcblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbGlnaHRQaWNrXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFN0YXRpY0xpZ2h0UGlja2VyOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgbGlnaHRzQXJyYXlOYW1lcy50b1N0cmluZygpKTtcblx0XHR9XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gODFcblx0cHJpdmF0ZSBwYXJzZU1hdGVyaWFsKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHQvLyBUT0RPOiBub3QgdXNlZFxuXHRcdC8vLy9ibG9ja0xlbmd0aCA9IGJsb2NrLmxlbjtcblx0XHR2YXIgbmFtZTpzdHJpbmc7XG5cdFx0dmFyIHR5cGU6bnVtYmVyO1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzO1xuXHRcdHZhciBtYXQ6TWV0aG9kTWF0ZXJpYWw7XG5cdFx0dmFyIGF0dHJpYnV0ZXM6T2JqZWN0O1xuXHRcdHZhciBmaW5hbGl6ZTpib29sZWFuO1xuXHRcdHZhciBudW1fbWV0aG9kczpudW1iZXI7XG5cdFx0dmFyIG1ldGhvZHNfcGFyc2VkOm51bWJlcjtcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xuXG5cdFx0bmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR0eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0bnVtX21ldGhvZHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblxuXHRcdC8vIFJlYWQgbWF0ZXJpYWwgbnVtZXJpY2FsIHByb3BlcnRpZXNcblx0XHQvLyAoMT1jb2xvciwgMj1iaXRtYXAgdXJsLCAxMD1hbHBoYSwgMTE9YWxwaGFfYmxlbmRpbmcsIDEyPWFscGhhX3RocmVzaG9sZCwgMTM9cmVwZWF0KVxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoeyAxOkFXRFBhcnNlci5JTlQzMiwgMjpBV0RQYXJzZXIuQkFERFIsIDEwOnRoaXMuX3Byb3BzTnJUeXBlLCAxMTpBV0RQYXJzZXIuQk9PTCwgMTI6dGhpcy5fcHJvcHNOclR5cGUsIDEzOkFXRFBhcnNlci5CT09MfSk7XG5cblx0XHRtZXRob2RzX3BhcnNlZCA9IDA7XG5cdFx0d2hpbGUgKG1ldGhvZHNfcGFyc2VkIDwgbnVtX21ldGhvZHMpIHtcblx0XHRcdHZhciBtZXRob2RfdHlwZTpudW1iZXI7XG5cblx0XHRcdG1ldGhvZF90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRcdG1ldGhvZHNfcGFyc2VkICs9IDE7XG5cdFx0fVxuXHRcdHZhciBkZWJ1Z1N0cmluZzpzdHJpbmcgPSBcIlwiO1xuXHRcdGF0dHJpYnV0ZXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRpZiAodHlwZSA9PT0gMSkgeyAvLyBDb2xvciBtYXRlcmlhbFxuXHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBDb2xvck1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xuXHRcdFx0dmFyIGNvbG9yOm51bWJlcjtcblx0XHRcdGNvbG9yID0gcHJvcHMuZ2V0KDEsIDB4ZmZmZmZmKTtcblx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA8IDIpIHtcblx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yLCBwcm9wcy5nZXQoMTAsIDEuMCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yKTtcblx0XHRcdFx0bWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IDIpIHtcblx0XHRcdHZhciB0ZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMiwgMCk7XG5cblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0ZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmICh0ZXhfYWRkciA+IDApKVxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRGlmZnN1ZVRleHR1cmUgKElEID0gXCIgKyB0ZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWF0ZXJpYWxcIik7XG5cblx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbCg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSk7XG5cblx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA8IDIpIHtcblx0XHRcdFx0bWF0LmFscGhhQmxlbmRpbmcgPSBwcm9wcy5nZXQoMTEsIGZhbHNlKTtcblx0XHRcdFx0bWF0LmFscGhhID0gcHJvcHMuZ2V0KDEwLCAxLjApO1xuXHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIE1ldGhvZE1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgbWF0Lm5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xuXHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIE1ldGhvZE1hdGVyaWFsKE11bHRpUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyBtYXQubmFtZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXQuZXh0cmEgPSBhdHRyaWJ1dGVzO1xuXHRcdG1hdC5hbHBoYVRocmVzaG9sZCA9IHByb3BzLmdldCgxMiwgMC4wKTtcblx0XHRtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coZGVidWdTdHJpbmcpO1xuXG5cdFx0fVxuXHR9XG5cblx0Ly8gQmxvY2sgSUQgPSA4MSBBV0QyLjFcblx0cHJpdmF0ZSBwYXJzZU1hdGVyaWFsX3YxKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgbWF0Ok1ldGhvZE1hdGVyaWFsO1xuXHRcdHZhciBub3JtYWxUZXh0dXJlOlRleHR1cmUyREJhc2U7XG5cdFx0dmFyIHNwZWNUZXh0dXJlOlRleHR1cmUyREJhc2U7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcblxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgbnVtX21ldGhvZHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDQ6QVdEUGFyc2VyLlVJTlQ4LCA1OkFXRFBhcnNlci5CT09MLCA2OkFXRFBhcnNlci5CT09MLCA3OkFXRFBhcnNlci5CT09MLCA4OkFXRFBhcnNlci5CT09MLCA5OkFXRFBhcnNlci5VSU5UOCwgMTA6dGhpcy5fcHJvcHNOclR5cGUsIDExOkFXRFBhcnNlci5CT09MLCAxMjp0aGlzLl9wcm9wc05yVHlwZSwgMTM6QVdEUGFyc2VyLkJPT0wsIDE1OnRoaXMuX3Byb3BzTnJUeXBlLCAxNjpBV0RQYXJzZXIuVUlOVDMyLCAxNzpBV0RQYXJzZXIuQkFERFIsIDE4OnRoaXMuX3Byb3BzTnJUeXBlLCAxOTp0aGlzLl9wcm9wc05yVHlwZSwgMjA6QVdEUGFyc2VyLlVJTlQzMiwgMjE6QVdEUGFyc2VyLkJBRERSLCAyMjpBV0RQYXJzZXIuQkFERFJ9KTtcblx0XHR2YXIgc3BlemlhbFR5cGU6bnVtYmVyID0gcHJvcHMuZ2V0KDQsIDApO1xuXHRcdHZhciBkZWJ1Z1N0cmluZzpzdHJpbmcgPSBcIlBhcnNlZCBNYXRlcmlhbCBcIjtcblxuXHRcdGlmIChzcGV6aWFsVHlwZSA+PSAyKSB7Ly90aGlzIGlzIG5vIHN1cHBvcnRlZCBtYXRlcmlhbFxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiTWF0ZXJpYWwtc3BlemlhbFR5cGUgJ1wiICsgc3BlemlhbFR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCwgY2FuIG9ubHkgYmUgMDpzaW5nbGVQYXNzLCAxOk11bHRpUGFzcyAhXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlIDw9IDIpIHsvLyBDb2xvciBtYXRlcmlhbFxuXHRcdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlID09IDEpXG5cdFx0XHRcdHNwZXppYWxUeXBlID0gMDtcblx0XHRcdGVsc2UgaWYgKHRoaXMubWF0ZXJpYWxNb2RlID09IDIpXG5cdFx0XHRcdHNwZXppYWxUeXBlID0gMTtcblxuXHRcdFx0aWYgKHNwZXppYWxUeXBlIDwgMikgey8vdGhpcyBpcyBTaW5nbGVQYXNzIG9yIE11bHRpUGFzc1xuXG5cdFx0XHRcdGlmICh0eXBlID09IDEpIHsvLyBDb2xvciBtYXRlcmlhbFxuXHRcdFx0XHRcdHZhciBjb2xvcjpudW1iZXIgPSBwcm9wcy5nZXQoMSwgMHhjY2NjY2MpOy8vVE9ETyB0ZW1wb3JhcmlseSBzd2FwcGVkIHNvIHRoYXQgZGlmZnVzZSBjb2xvciBnb2VzIHRvIGFtYmllbnRcblxuXHRcdFx0XHRcdGlmIChzcGV6aWFsVHlwZSA9PSAxKSB7Ly9cdE11bHRpUGFzc01hdGVyaWFsXG5cdFx0XHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IpO1xuXHRcdFx0XHRcdFx0bWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHsgLy9cdFNpbmdsZVBhc3NNYXRlcmlhbFxuXHRcdFx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yLCBwcm9wcy5nZXQoMTAsIDEuMCkpO1xuXHRcdFx0XHRcdFx0bWF0LmFscGhhQmxlbmRpbmcgPSBwcm9wcy5nZXQoMTEsIGZhbHNlKTtcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBcIjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09IDIpIHsvLyB0ZXh0dXJlIG1hdGVyaWFsXG5cdFx0XHRcdFx0dmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTsvL1RPRE8gdGVtcG9yYXJpbHkgc3dhcHBlZCBzbyB0aGF0IGRpZmZ1c2UgdGV4dHVyZSBnb2VzIHRvIGFtYmllbnRcblx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXG5cdFx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHRleF9hZGRyID4gMCkpXG5cdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQW1iaWVudFRleHR1cmUgKElEID0gXCIgKyB0ZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XG5cblx0XHRcdFx0XHR2YXIgdGV4dHVyZTpUZXh0dXJlMkRCYXNlID0gcmV0dXJuZWRBcnJheVsxXTtcblxuXHRcdFx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbCh0ZXh0dXJlKTtcblxuXHRcdFx0XHRcdGlmIChzcGV6aWFsVHlwZSA9PSAxKSB7Ly8gTXVsdGlQYXNzTWF0ZXJpYWxcblx0XHRcdFx0XHRcdG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XG5cblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoTXVsdGlQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIHRleHR1cmUubmFtZTtcblx0XHRcdFx0XHR9IGVsc2Ugey8vXHRTaW5nbGVQYXNzTWF0ZXJpYWxcblx0XHRcdFx0XHRcdG1hdC5hbHBoYSA9IHByb3BzLmdldCgxMCwgMS4wKTtcblx0XHRcdFx0XHRcdG1hdC5hbHBoYUJsZW5kaW5nID0gcHJvcHMuZ2V0KDExLCBmYWxzZSk7XG5cblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyB0ZXh0dXJlLm5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGRpZmZ1c2VUZXh0dXJlOlRleHR1cmUyREJhc2U7XG5cdFx0XHRcdHZhciBkaWZmdXNlVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDE3LCAwKTtcblxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoZGlmZnVzZVRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcblxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoZGlmZnVzZVRleF9hZGRyICE9IDApKSB7XG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIERpZmZ1c2VUZXh0dXJlIChJRCA9IFwiICsgZGlmZnVzZVRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdGRpZmZ1c2VUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcblxuXHRcdFx0XHRpZiAoZGlmZnVzZVRleHR1cmUpIHtcblx0XHRcdFx0XHRtYXQuZGlmZnVzZVRleHR1cmUgPSBkaWZmdXNlVGV4dHVyZTtcblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VUZXh0dXJlLU5hbWUgPSBcIiArIGRpZmZ1c2VUZXh0dXJlLm5hbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgbm9ybWFsVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDMsIDApO1xuXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChub3JtYWxUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKG5vcm1hbFRleF9hZGRyICE9IDApKSB7XG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIE5vcm1hbFRleHR1cmUgKElEID0gXCIgKyBub3JtYWxUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0XHRcdG5vcm1hbFRleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xuXHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgTm9ybWFsVGV4dHVyZS1OYW1lID0gXCIgKyBub3JtYWxUZXh0dXJlLm5hbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgc3BlY1RleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyMSwgMCk7XG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChzcGVjVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXG5cdFx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChzcGVjVGV4X2FkZHIgIT0gMCkpIHtcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU3BlY3VsYXJUZXh0dXJlIChJRCA9IFwiICsgc3BlY1RleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0XHRcdHNwZWNUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyVGV4dHVyZS1OYW1lID0gXCIgKyBzcGVjVGV4dHVyZS5uYW1lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGxpZ2h0UGlja2VyQWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMjIsIDApO1xuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQobGlnaHRQaWNrZXJBZGRyLCBbQXNzZXRUeXBlLkxJR0hUX1BJQ0tFUl0pXG5cblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKGxpZ2h0UGlja2VyQWRkcikpIHtcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTGlnaHRQaWNrZXIgKElEID0gXCIgKyBsaWdodFBpY2tlckFkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1hdC5saWdodFBpY2tlciA9IDxMaWdodFBpY2tlckJhc2U+IHJldHVybmVkQXJyYXlbMV07XG5cdFx0XHRcdFx0Ly9kZWJ1Z1N0cmluZys9XCIgfCBMaWdodHBpY2tlci1OYW1lID0gXCIrTGlnaHRQaWNrZXJCYXNlKHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXQuc21vb3RoID0gcHJvcHMuZ2V0KDUsIHRydWUpO1xuXHRcdFx0XHRtYXQubWlwbWFwID0gcHJvcHMuZ2V0KDYsIHRydWUpO1xuXHRcdFx0XHRtYXQuYm90aFNpZGVzID0gcHJvcHMuZ2V0KDcsIGZhbHNlKTtcblx0XHRcdFx0bWF0LmFscGhhUHJlbXVsdGlwbGllZCA9IHByb3BzLmdldCg4LCBmYWxzZSk7XG5cdFx0XHRcdG1hdC5ibGVuZE1vZGUgPSB0aGlzLmJsZW5kTW9kZURpY1twcm9wcy5nZXQoOSwgMCldO1xuXHRcdFx0XHRtYXQucmVwZWF0ID0gcHJvcHMuZ2V0KDEzLCBmYWxzZSk7XG5cblx0XHRcdFx0aWYgKG5vcm1hbFRleHR1cmUpXG5cdFx0XHRcdFx0bWF0Lm5vcm1hbE1hcCA9IG5vcm1hbFRleHR1cmU7XG5cblx0XHRcdFx0aWYgKHNwZWNUZXh0dXJlKVxuXHRcdFx0XHRcdG1hdC5zcGVjdWxhck1hcCA9IHNwZWNUZXh0dXJlO1xuXG5cdFx0XHRcdG1hdC5hbHBoYVRocmVzaG9sZCA9IHByb3BzLmdldCgxMiwgMC4wKTtcblx0XHRcdFx0bWF0LmFtYmllbnQgPSBwcm9wcy5nZXQoMTUsIDEuMCk7XG5cdFx0XHRcdG1hdC5kaWZmdXNlQ29sb3IgPSBwcm9wcy5nZXQoMTYsIDB4ZmZmZmZmKTtcblx0XHRcdFx0bWF0LnNwZWN1bGFyID0gcHJvcHMuZ2V0KDE4LCAxLjApO1xuXHRcdFx0XHRtYXQuZ2xvc3MgPSBwcm9wcy5nZXQoMTksIDUwKTtcblx0XHRcdFx0bWF0LnNwZWN1bGFyQ29sb3IgPSBwcm9wcy5nZXQoMjAsIDB4ZmZmZmZmKTtcblxuXHRcdFx0XHR2YXIgbWV0aG9kc19wYXJzZWQ6bnVtYmVyID0gMDtcblx0XHRcdFx0dmFyIHRhcmdldElEOm51bWJlcjtcblxuXHRcdFx0XHR3aGlsZSAobWV0aG9kc19wYXJzZWQgPCBudW1fbWV0aG9kcykge1xuXHRcdFx0XHRcdHZhciBtZXRob2RfdHlwZTpudW1iZXI7XG5cdFx0XHRcdFx0bWV0aG9kX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHRcdFx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHtcblx0XHRcdFx0XHRcdDE6IEFXRFBhcnNlci5CQUREUixcblx0XHRcdFx0XHRcdDI6IEFXRFBhcnNlci5CQUREUixcblx0XHRcdFx0XHRcdDM6IEFXRFBhcnNlci5CQUREUixcblx0XHRcdFx0XHRcdDEwMTogdGhpcy5fcHJvcHNOclR5cGUsXG5cdFx0XHRcdFx0XHQxMDI6IHRoaXMuX3Byb3BzTnJUeXBlLFxuXHRcdFx0XHRcdFx0MTAzOiB0aGlzLl9wcm9wc05yVHlwZSxcblx0XHRcdFx0XHRcdDIwMTogQVdEUGFyc2VyLlVJTlQzMixcblx0XHRcdFx0XHRcdDIwMjogQVdEUGFyc2VyLlVJTlQzMixcblx0XHRcdFx0XHRcdDMwMTogQVdEUGFyc2VyLlVJTlQxNixcblx0XHRcdFx0XHRcdDMwMjogQVdEUGFyc2VyLlVJTlQxNixcblx0XHRcdFx0XHRcdDQwMTogQVdEUGFyc2VyLlVJTlQ4LFxuXHRcdFx0XHRcdFx0NDAyOiBBV0RQYXJzZXIuVUlOVDgsXG5cdFx0XHRcdFx0XHQ2MDE6IEFXRFBhcnNlci5DT0xPUixcblx0XHRcdFx0XHRcdDYwMjogQVdEUGFyc2VyLkNPTE9SLFxuXHRcdFx0XHRcdFx0NzAxOiBBV0RQYXJzZXIuQk9PTCxcblx0XHRcdFx0XHRcdDcwMjogQVdEUGFyc2VyLkJPT0wsXG5cdFx0XHRcdFx0XHQ4MDE6IEFXRFBhcnNlci5NVFg0eDRcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHN3aXRjaCAobWV0aG9kX3R5cGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgOTk5OiAvL3dyYXBwZXItTWV0aG9kcyB0aGF0IHdpbGwgbG9hZCBhIHByZXZpb3VzIHBhcnNlZCBFZmZla3RNZXRob2QgcmV0dXJuZWRcblxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLkVGRkVDVFNfTUVUSE9EXSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVmZmVjdE1ldGhvZCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBNYXRlcmlhbFwiKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtYXQuYWRkRWZmZWN0TWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBFZmZlY3RNZXRob2QtTmFtZSA9IFwiICsgKDxFZmZlY3RNZXRob2RCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGNhc2UgOTk4OiAvL3dyYXBwZXItTWV0aG9kcyB0aGF0IHdpbGwgbG9hZCBhIHByZXZpb3VzIHBhcnNlZCBTaGFkb3dNYXBNZXRob2RcblxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlNIQURPV19NQVBfTUVUSE9EXSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNoYWRvd01ldGhvZCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBNYXRlcmlhbFwiKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtYXQuc2hhZG93TWV0aG9kID0gcmV0dXJuZWRBcnJheVsxXTtcblx0XHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNoYWRvd01ldGhvZC1OYW1lID0gXCIgKyAoPFNoYWRvd01ldGhvZEJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSAxOiAvL0Vudk1hcEFtYmllbnRNZXRob2Rcblx0XHRcdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgRW52TWFwQW1iaWVudE1ldGhvZE1hdGVyaWFsXCIpO1xuXHRcdFx0XHRcdFx0XHRtYXQuYW1iaWVudE1ldGhvZCA9IG5ldyBBbWJpZW50RW52TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IEFtYmllbnRFbnZNYXBNZXRob2QgfCBFbnZNYXAtTmFtZSA9XCIgKyAoPEN1YmVUZXh0dXJlQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGNhc2UgNTE6IC8vRGVwdGhEaWZmdXNlTWV0aG9kXG5cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VEZXB0aE1ldGhvZCgpO1xuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VEZXB0aE1ldGhvZFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNTI6IC8vR3JhZGllbnREaWZmdXNlTWV0aG9kXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEdyYWRpZW50RGlmZnVzZVRleHR1cmUgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgR3JhZGllbnREaWZmdXNlTWV0aG9kXCIpO1xuXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlR3JhZGllbnRNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZUdyYWRpZW50TWV0aG9kIHwgR3JhZGllbnREaWZmdXNlVGV4dHVyZS1OYW1lID1cIiArICg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDUzOiAvL1dyYXBEaWZmdXNlTWV0aG9kXG5cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VXcmFwTWV0aG9kKHByb3BzLmdldCgxMDEsIDUpKTtcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlV3JhcE1ldGhvZFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNTQ6IC8vTGlnaHRNYXBEaWZmdXNlTWV0aG9kXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIExpZ2h0TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIExpZ2h0TWFwRGlmZnVzZU1ldGhvZFwiKTtcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZUxpZ2h0TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg0MDEsIDEwKV0sIGZhbHNlLCBtYXQuZGlmZnVzZU1ldGhvZCk7XG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZUxpZ2h0TWFwTWV0aG9kIHwgTGlnaHRNYXBUZXh0dXJlLU5hbWUgPVwiICsgKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNTU6IC8vQ2VsRGlmZnVzZU1ldGhvZFxuXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlQ2VsTWV0aG9kKHByb3BzLmdldCg0MDEsIDMpLCBtYXQuZGlmZnVzZU1ldGhvZCk7XG5cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZUNlbE1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnNtb290aG5lc3MgPSBwcm9wcy5nZXQoMTAxLCAwLjEpO1xuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VDZWxNZXRob2RcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDU2OiAvL1N1YlN1cmZhY2VTY2F0dGVyaW5nTWV0aG9kXG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZCgpOyAvL2RlcHRoTWFwU2l6ZSBhbmQgZGVwdGhNYXBPZmZzZXQgP1xuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0KDxEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnNjYXR0ZXJpbmcgPSBwcm9wcy5nZXQoMTAxLCAwLjIpO1xuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0KDxEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnRyYW5zbHVjZW5jeSA9IHByb3BzLmdldCgxMDIsIDEpO1xuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0KDxEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnNjYXR0ZXJDb2xvciA9IHByb3BzLmdldCg2MDEsIDB4ZmZmZmZmKTtcblx0XHRcdFx0XHRcdFx0Ly9cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVN1YlN1cmZhY2VNZXRob2RcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGNhc2UgMTAxOiAvL0FuaXNvdHJvcGljU3BlY3VsYXJNZXRob2Rcblx0XHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyQW5pc290cm9waWNNZXRob2QoKTtcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAxMDI6IC8vU3BlY3VsYXJQaG9uZ01ldGhvZFxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJQaG9uZ01ldGhvZCgpO1xuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyUGhvbmdNZXRob2RcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDEwMzogLy9DZWxsU3BlY3VsYXJNZXRob2Rcblx0XHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyQ2VsTWV0aG9kKHByb3BzLmdldCgxMDEsIDAuNSksIG1hdC5zcGVjdWxhck1ldGhvZCk7XG5cdFx0XHRcdFx0XHRcdCg8U3BlY3VsYXJDZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkuc21vb3RobmVzcyA9IHByb3BzLmdldCgxMDIsIDAuMSk7XG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJDZWxNZXRob2RcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDEwNDogLy9TcGVjdWxhckZyZXNuZWxNZXRob2Rcblx0XHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyRnJlc25lbE1ldGhvZChwcm9wcy5nZXQoNzAxLCB0cnVlKSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcblx0XHRcdFx0XHRcdFx0KDxTcGVjdWxhckZyZXNuZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkuZnJlc25lbFBvd2VyID0gcHJvcHMuZ2V0KDEwMSwgNSk7XG5cdFx0XHRcdFx0XHRcdCg8U3BlY3VsYXJGcmVzbmVsTWV0aG9kPiBtYXQuc3BlY3VsYXJNZXRob2QpLm5vcm1hbFJlZmxlY3RhbmNlID0gcHJvcHMuZ2V0KDEwMiwgMC4xKTtcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckZyZXNuZWxNZXRob2RcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDE1MTovL0hlaWdodE1hcE5vcm1hbE1ldGhvZCAtIHRoaW9zIGlzIG5vdCBpbXBsZW1lbnRlZCBmb3Igbm93LCBidXQgbWlnaHQgYXBwZWFyIGxhdGVyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAxNTI6IC8vU2ltcGxlV2F0ZXJOb3JtYWxNZXRob2Rcblx0XHRcdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2Vjb3VuZE5vcm1hbE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBTaW1wbGVXYXRlck5vcm1hbE1ldGhvZFwiKTtcblx0XHRcdFx0XHRcdFx0aWYgKCFtYXQubm9ybWFsTWFwKVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgbm9ybWFsIE1hcCBvbiB0aGlzIE1hdGVyaWFsIHRvIHVzZSB3aXRoIHRoaXMgU2ltcGxlV2F0ZXJOb3JtYWxNZXRob2RcIik7XG5cblx0XHRcdFx0XHRcdFx0bWF0Lm5vcm1hbE1hcCA9IHJldHVybmVkQXJyYXlbMV07XG5cdFx0XHRcdFx0XHRcdG1hdC5ub3JtYWxNZXRob2QgPSBuZXcgTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2QobWF0Lm5vcm1hbE1hcCwgcmV0dXJuZWRBcnJheVsxXSk7XG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2QgfCBTZWNvbmQtTm9ybWFsVGV4dHVyZS1OYW1lID0gXCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRcdFx0XHRtZXRob2RzX3BhcnNlZCArPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHRvZG86IHdlIHNob3VsZCBub3QgbmVlZCB0aGlzIGFueW1vcmUgKGlmIHVzaW5nIHRleHR1cmUtYXRsYXMpXG5cdFx0ZWxzZSBpZiAoKHR5cGU+PTMpJiYodHlwZTw9Nykpe1xuXHRcdFx0Ly8gaWYgdGhpcyBpcyBhIGN1cnZlIG1hdGVyaWFsLCB3ZSBjcmVhdGUgaXQsIGZpbmFsaXplIGl0LCBhc3NpZ24gaXQgdG8gYmxvY2stY2FjaGUgYW5kIHJldHVybiBhbmQgcmV0dXJuLlxuXHRcdFx0dmFyIGNvbG9yOm51bWJlciA9IHByb3BzLmdldCgxLCAweGNjY2NjYyk7XG5cdFx0XHRkZWJ1Z1N0cmluZys9Y29sb3I7XG5cblx0XHRcdHZhciBkaWZmdXNlVGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xuXHRcdFx0dmFyIGRpZmZ1c2VUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMiwgMCk7XG5cblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChkaWZmdXNlVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXG5cdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoZGlmZnVzZVRleF9hZGRyICE9IDApKSB7XG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBEaWZmdXNlVGV4dHVyZSAoSUQgPSBcIiArIGRpZmZ1c2VUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XG5cdFx0XHRcdGRpZmZ1c2VUZXh0dXJlID0gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0VGV4dHVyZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0ZGlmZnVzZVRleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xuXHRcdFx0dmFyIGN1cnZlX21hdDpDdXJ2ZU1hdGVyaWFsID0gbmV3IEN1cnZlTWF0ZXJpYWwoZGlmZnVzZVRleHR1cmUpO1xuXHRcdFx0Ly9kZWJ1Z1N0cmluZys9IFwiIGFscGhhID0gXCIrcHJvcHMuZ2V0KDEwLCAxLjApK1wiIFwiO1xuXHRcdFx0ZGVidWdTdHJpbmcrPSBcIiB0ZXh0dXJlID0gXCIrZGlmZnVzZVRleF9hZGRyK1wiIFwiO1xuXHRcdFx0Y3VydmVfbWF0LmJvdGhTaWRlcyA9IHRydWU7XG5cdFx0XHRjdXJ2ZV9tYXQucHJlc2VydmVBbHBoYSA9IHRydWU7XG5cdFx0XHRjdXJ2ZV9tYXQuYWxwaGFCbGVuZGluZyA9IHRydWU7XG5cdFx0XHRjdXJ2ZV9tYXQuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGN1cnZlX21hdCwgbmFtZSk7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGN1cnZlX21hdDtcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdFx0Y29uc29sZS5sb2coZGVidWdTdHJpbmcpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXHRcdG1hdC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1hdCwgbmFtZSk7XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1hdDtcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKGRlYnVnU3RyaW5nKTtcblx0XHR9XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gODJcblx0cHJpdmF0ZSBwYXJzZVRleHR1cmUoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXG5cdFx0dmFyIGFzc2V0OlRleHR1cmUyREJhc2U7XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblxuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XG5cblx0XHR0aGlzLl90ZXh0dXJlX3VzZXJzW3RoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpXSA9IFtdO1xuXG5cdFx0Ly8gRXh0ZXJuYWxcblx0XHRpZiAodHlwZSA9PSAwKSB7XG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHR2YXIgdXJsOnN0cmluZztcblx0XHRcdHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcblx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBuZXcgVVJMUmVxdWVzdCh1cmwpLCBmYWxzZSwgbnVsbCwgdHJ1ZSk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0XHR2YXIgZGF0YTpCeXRlQXJyYXk7XG5cdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xuXHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZXMoZGF0YSwgMCwgZGF0YV9sZW4pO1xuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gQVdEUGFyc2VyIC0gRml4IGZvciBGaXJlRm94IEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzE1MDc1IC5cblx0XHRcdC8vXG5cdFx0XHQvLyBDb252ZXJ0aW5nIGRhdGEgdG8gaW1hZ2UgaGVyZSBpbnN0ZWFkIG9mIHBhcnNlciAtIGZpeCBGaXJlRm94IGJ1ZyB3aGVyZSBpbWFnZSB3aWR0aCAvIGhlaWdodCBpcyAwIHdoZW4gY3JlYXRlZCBmcm9tIGRhdGFcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdGhlIGJyb3dzZXIgdGltZSB0byBpbml0aWFsaXNlIGltYWdlIHdpZHRoIC8gaGVpZ2h0LlxuXG5cdFx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbnVsbCwgZmFsc2UsIFBhcnNlclV0aWxzLmJ5dGVBcnJheVRvSW1hZ2UoZGF0YSksIHRydWUpO1xuXHRcdFx0Ly90aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbnVsbCwgZmFsc2UsIGRhdGEsIHRydWUpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIGZvciBub3dcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZXh0cmFzID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fcFBhdXNlQW5kUmV0cmlldmVEZXBlbmRlbmNpZXMoKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHR2YXIgdGV4dHVyZVN0eWxlc05hbWVzOkFycmF5PHN0cmluZz4gPSBbXCJleHRlcm5hbFwiLCBcImVtYmVkXCJdXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0IHBhcnNpbmcgYSBcIiArIHRleHR1cmVTdHlsZXNOYW1lc1t0eXBlXSArIFwiIEJpdG1hcCBmb3IgVGV4dHVyZVwiKTtcblx0XHR9XG5cblx0fVxuXG5cdC8vQmxvY2sgSUQgPSA4M1xuXHRwcml2YXRlIHBhcnNlQ3ViZVRleHR1cmUoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdC8vYmxvY2tMZW5ndGggPSBibG9jay5sZW47XG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcblx0XHR2YXIgYXNzZXQ6Q3ViZVRleHR1cmVCYXNlO1xuXHRcdHZhciBpOm51bWJlcjtcblxuXHRcdHRoaXMuX2N1YmVUZXh0dXJlcyA9IG5ldyBBcnJheTxhbnk+KCk7XG5cdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1sgdGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgXSA9IFtdO1xuXG5cdFx0dmFyIHR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCA2OyBpKyspIHtcblx0XHRcdHRoaXMuX3RleHR1cmVfdXNlcnNbdGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCldID0gW107XG5cdFx0XHR0aGlzLl9jdWJlVGV4dHVyZXMucHVzaChudWxsKTtcblxuXHRcdFx0Ly8gRXh0ZXJuYWxcblx0XHRcdGlmICh0eXBlID09IDApIHtcblx0XHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHR2YXIgdXJsOnN0cmluZztcblx0XHRcdFx0dXJsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMoZGF0YV9sZW4pO1xuXG5cdFx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpICsgXCIjXCIgKyBpLCBuZXcgVVJMUmVxdWVzdCh1cmwpLCBmYWxzZSwgbnVsbCwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0dmFyIGRhdGE6Qnl0ZUFycmF5O1xuXHRcdFx0XHRkYXRhID0gbmV3IEJ5dGVBcnJheSgpO1xuXG5cdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGVzKGRhdGEsIDAsIGRhdGFfbGVuKTtcblxuXHRcdFx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSArIFwiI1wiICsgaSwgbnVsbCwgZmFsc2UsIFBhcnNlclV0aWxzLmJ5dGVBcnJheVRvSW1hZ2UoZGF0YSksIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBmb3Igbm93XG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmV4dHJhcyA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0dmFyIHRleHR1cmVTdHlsZXNOYW1lczpBcnJheTxzdHJpbmc+ID0gW1wiZXh0ZXJuYWxcIiwgXCJlbWJlZFwiXVxuXHRcdFx0Y29uc29sZS5sb2coXCJTdGFydCBwYXJzaW5nIDYgXCIgKyB0ZXh0dXJlU3R5bGVzTmFtZXNbdHlwZV0gKyBcIiBCaXRtYXBzIGZvciBDdWJlVGV4dHVyZVwiKTtcblx0XHR9XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gOTFcblx0cHJpdmF0ZSBwYXJzZVNoYXJlZE1ldGhvZEJsb2NrKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgYXNzZXQ6RWZmZWN0TWV0aG9kQmFzZTtcblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdGFzc2V0ID0gdGhpcy5wYXJzZVNoYXJlZE1ldGhvZExpc3QoYmxvY2tJRCk7XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCwgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgRWZmZWN0TWV0aG9kOiBOYW1lID0gXCIgKyBhc3NldC5uYW1lICsgXCIgVHlwZSA9IFwiICsgYXNzZXQpO1xuXHRcdH1cblx0fVxuXG5cdC8vQmxvY2sgSUQgPSA5MlxuXHRwcml2YXRlIHBhcnNlU2hhZG93TWV0aG9kQmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciB0eXBlOm51bWJlcjtcblx0XHR2YXIgZGF0YV9sZW46bnVtYmVyO1xuXHRcdHZhciBhc3NldDpTaGFkb3dNZXRob2RCYXNlO1xuXHRcdHZhciBzaGFkb3dMaWdodElEOm51bWJlcjtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblxuXHRcdHNoYWRvd0xpZ2h0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChzaGFkb3dMaWdodElELCBbQXNzZXRUeXBlLkxJR0hUXSk7XG5cblx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBUYXJnZXRMaWdodCAoSUQgPSBcIiArIHNoYWRvd0xpZ2h0SUQgKyBcIiApIGZvciB0aGlzIFNoYWRvd01ldGhvZCAtIFNoYWRvd01ldGhvZCBub3QgY3JlYXRlZFwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRhc3NldCA9IHRoaXMucGFyc2VTaGFkb3dNZXRob2RMaXN0KDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlbMV0sIGJsb2NrSUQpO1xuXG5cdFx0aWYgKCFhc3NldClcblx0XHRcdHJldHVybjtcblxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpOyAvLyBJZ25vcmUgZm9yIG5vd1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0LCB0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTaGFkb3dNYXBNZXRob2RNZXRob2Q6IE5hbWUgPSBcIiArIGFzc2V0Lm5hbWUgKyBcIiB8IFR5cGUgPSBcIiArIGFzc2V0ICsgXCIgfCBMaWdodC1OYW1lID0gXCIsICggPExpZ2h0QmFzZT4gcmV0dXJuZWRBcnJheVsxXSApLm5hbWUpO1xuXHRcdH1cblx0fVxuXG5cblx0Ly9CbG9jayBJRCA9IDI1M1xuXHRwcml2YXRlIHBhcnNlQ29tbWFuZChibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIGhhc0Jsb2Nrczpib29sZWFuID0gKCB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKSA9PSAxICk7XG5cdFx0dmFyIHBhcl9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHR2YXIgcGFyZW50T2JqZWN0OkRpc3BsYXlPYmplY3RDb250YWluZXI7XG5cdFx0dmFyIHRhcmdldE9iamVjdDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKTtcblxuXHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHRwYXJlbnRPYmplY3QgPSA8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVsxXTtcblx0XHR9XG5cblx0XHR2YXIgbnVtQ29tbWFuZHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcblx0XHR2YXIgdHlwZUNvbW1hbmQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcblxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSfSk7XG5cblx0XHRzd2l0Y2ggKHR5cGVDb21tYW5kKSB7XG5cdFx0XHRjYXNlIDE6XG5cblx0XHRcdFx0dmFyIHRhcmdldElEOm51bWJlciA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0dmFyIHJldHVybmVkQXJyYXlUYXJnZXQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuVEVYVFVSRV9QUk9KRUNUT1JdKTsgLy9mb3Igbm8gb25seSBsaWdodCBpcyByZXF1ZXN0ZWQhISEhXG5cblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVRhcmdldFswXSkgJiYgKHRhcmdldElEICE9IDApKSB7XG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIGxpZ2h0IChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiAoIGZvciB0aGlzIENvbW1hbmRCb2NrIVwiKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRPYmplY3QgPSByZXR1cm5lZEFycmF5VGFyZ2V0WzFdO1xuXG5cdFx0XHRcdGlmIChwYXJlbnRPYmplY3QpIHtcblx0XHRcdFx0XHRwYXJlbnRPYmplY3QuYWRkQ2hpbGQodGFyZ2V0T2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRhcmdldE9iamVjdC50cmFuc2Zvcm0ubWF0cml4M0QgPSBtdHg7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldE9iamVjdCkge1xuXHRcdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcblxuXHRcdFx0dGFyZ2V0T2JqZWN0LnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xuXHRcdFx0dGFyZ2V0T2JqZWN0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR9XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0YXJnZXRPYmplY3RcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDb21tYW5kQmxvY2s6IE5hbWUgPSAnXCIgKyBuYW1lKTtcblx0XHR9XG5cblx0fVxuXG5cdC8vYmxvY2tJRCAyNTVcblx0cHJpdmF0ZSBwYXJzZU1ldGFEYXRhKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMzIsIDI6QVdEUGFyc2VyLkFXRFNUUklORywgMzpBV0RQYXJzZXIuQVdEU1RSSU5HLCA0OkFXRFBhcnNlci5BV0RTVFJJTkcsIDU6QVdEUGFyc2VyLkFXRFNUUklOR30pO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE1ldGFEYXRhQmxvY2s6IFRpbWVTdGFtcCAgICAgICAgID0gXCIgKyBwcm9wcy5nZXQoMSwgMCkpO1xuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBFbmNvZGVyTmFtZSAgICAgICA9IFwiICsgcHJvcHMuZ2V0KDIsIFwidW5rbm93blwiKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEVuY29kZXJWZXJzaW9uICAgID0gXCIgKyBwcm9wcy5nZXQoMywgXCJ1bmtub3duXCIpKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhdG9yTmFtZSAgICAgPSBcIiArIHByb3BzLmdldCg0LCBcInVua25vd25cIikpO1xuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0b3JWZXJzaW9uICA9IFwiICsgcHJvcHMuZ2V0KDUsIFwidW5rbm93blwiKSk7XG5cdFx0fVxuXHR9XG5cblx0Ly9ibG9ja0lEIDI1NFxuXHRwcml2YXRlIHBhcnNlTmFtZVNwYWNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dmFyIG5hbWVTcGFjZVN0cmluZzpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBOYW1lU3BhY2VCbG9jazogSUQgPSBcIiArIGlkICsgXCIgfCBTdHJpbmcgPSBcIiArIG5hbWVTcGFjZVN0cmluZyk7XG5cdH1cblxuXHQvLy0tUGFyc2VyIFVUSUxTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0Ly8gdGhpcyBmdW5jdGlvbnMgcmVhZHMgYW5kIGNyZWF0ZXMgYSBTaGFkb3dNZXRob2RNZXRob2Rcblx0cHJpdmF0ZSBwYXJzZVNoYWRvd01ldGhvZExpc3QobGlnaHQ6TGlnaHRCYXNlLCBibG9ja0lEOm51bWJlcik6U2hhZG93TWV0aG9kQmFzZVxuXHR7XG5cblx0XHR2YXIgbWV0aG9kVHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dmFyIHNoYWRvd01ldGhvZDpTaGFkb3dNZXRob2RCYXNlO1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTCwgODAxOkFXRFBhcnNlci5NVFg0eDR9KTtcblxuXHRcdHZhciB0YXJnZXRJRDpudW1iZXI7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PlxuXHRcdHN3aXRjaCAobWV0aG9kVHlwZSkge1xuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgMTAwMTogLy9DYXNjYWRlU2hhZG93TWFwTWV0aG9kXG5cdFx0XHQvL1x0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdC8vXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSBnZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcblx0XHRcdC8vXHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0Ly9cdFx0XHRcdFx0XHRfYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNoYWRvd0Jhc2VNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgQ2FzY2FkZVNoYWRvd01hcE1ldGhvZCAtIFNoYWRvd01ldGhvZCBub3QgY3JlYXRlZFwiKTtcblx0XHRcdC8vXHRcdFx0XHRcdFx0cmV0dXJuIHNoYWRvd01ldGhvZDtcblx0XHRcdC8vXHRcdFx0XHRcdH1cblx0XHRcdC8vXHRcdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBDYXNjYWRlU2hhZG93TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xuXHRcdFx0Ly9cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDEwMDI6IC8vU2hhZG93TmVhck1ldGhvZFxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlNIQURPV19NQVBfTUVUSE9EXSk7XG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTaGFkb3dCYXNlTWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFNoYWRvd05lYXJNZXRob2QgLSBTaGFkb3dNZXRob2Qgbm90IGNyZWF0ZWRcIik7XG5cdFx0XHRcdFx0cmV0dXJuIHNoYWRvd01ldGhvZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93TmVhck1ldGhvZCg8U2hhZG93TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxMTAxOiAvL1NoYWRvd0ZpbHRlcmVkTWV0aG9kXG5cblx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IFNoYWRvd0ZpbHRlcmVkTWV0aG9kKDxEaXJlY3Rpb25hbExpZ2h0PiBsaWdodCk7XG5cdFx0XHRcdCg8U2hhZG93RmlsdGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcblx0XHRcdFx0KDxTaGFkb3dGaWx0ZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAxMTAyOiAvL1NoYWRvd0RpdGhlcmVkTWV0aG9kXG5cblxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RGl0aGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0LCA8bnVtYmVyPiBwcm9wcy5nZXQoMjAxLCA1KSk7XG5cdFx0XHRcdCg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcblx0XHRcdFx0KDxTaGFkb3dEaXRoZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xuXHRcdFx0XHQoPFNoYWRvd0RpdGhlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLnJhbmdlID0gcHJvcHMuZ2V0KDEwMywgMSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDExMDM6IC8vU2hhZG93U29mdE1ldGhvZFxuXG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dTb2Z0TWV0aG9kKDxEaXJlY3Rpb25hbExpZ2h0PiBsaWdodCwgPG51bWJlcj4gcHJvcHMuZ2V0KDIwMSwgNSkpO1xuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcblx0XHRcdFx0KDxTaGFkb3dTb2Z0TWV0aG9kPiBzaGFkb3dNZXRob2QpLmVwc2lsb24gPSBwcm9wcy5nZXQoMTAyLCAwLjAwMik7XG5cdFx0XHRcdCg8U2hhZG93U29mdE1ldGhvZD4gc2hhZG93TWV0aG9kKS5yYW5nZSA9IHByb3BzLmdldCgxMDMsIDEpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxMTA0OiAvL1NoYWRvd0hhcmRNZXRob2Rcblx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IFNoYWRvd0hhcmRNZXRob2QobGlnaHQpO1xuXHRcdFx0XHQoPFNoYWRvd0hhcmRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcblx0XHRcdFx0KDxTaGFkb3dIYXJkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmVwc2lsb24gPSBwcm9wcy5nZXQoMTAyLCAwLjAwMik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHJldHVybiBzaGFkb3dNZXRob2Q7XG5cdH1cblxuXHQvL0Jsb2NrIElEIDEwMVxuXHRwcml2YXRlIHBhcnNlU2tlbGV0b24oYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcblx0e1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgbnVtX2pvaW50czpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dmFyIHNrZWxldG9uOlNrZWxldG9uID0gbmV3IFNrZWxldG9uKCk7XG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIERpc2NhcmQgcHJvcGVydGllcyBmb3Igbm93XG5cblx0XHR2YXIgam9pbnRzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xuXHRcdHdoaWxlIChqb2ludHNfcGFyc2VkIDwgbnVtX2pvaW50cykge1xuXHRcdFx0dmFyIGpvaW50OlNrZWxldG9uSm9pbnQ7XG5cdFx0XHR2YXIgaWJwOk1hdHJpeDNEO1xuXHRcdFx0Ly8gSWdub3JlIGpvaW50IGlkXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRqb2ludCA9IG5ldyBTa2VsZXRvbkpvaW50KCk7XG5cdFx0XHRqb2ludC5wYXJlbnRJbmRleCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSAtIDE7IC8vIDA9bnVsbCBpbiBBV0Rcblx0XHRcdGpvaW50Lm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHRcdGlicCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xuXHRcdFx0am9pbnQuaW52ZXJzZUJpbmRQb3NlID0gaWJwLnJhd0RhdGE7XG5cdFx0XHQvLyBJZ25vcmUgam9pbnQgcHJvcHMvYXR0cmlidXRlcyBmb3Igbm93XG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdFx0c2tlbGV0b24uam9pbnRzLnB1c2goam9pbnQpO1xuXHRcdFx0am9pbnRzX3BhcnNlZCsrO1xuXHRcdH1cblxuXHRcdC8vIERpc2NhcmQgYXR0cmlidXRlcyBmb3Igbm93XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoc2tlbGV0b24sIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gc2tlbGV0b247XG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbjogTmFtZSA9IFwiICsgc2tlbGV0b24ubmFtZSArIFwiIHwgTnVtYmVyIG9mIEpvaW50cyA9IFwiICsgam9pbnRzX3BhcnNlZCk7XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gMTAyXG5cdHByaXZhdGUgcGFyc2VTa2VsZXRvblBvc2UoYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcblx0e1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgbnVtX2pvaW50czpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIElnbm9yZSBwcm9wZXJ0aWVzIGZvciBub3dcblxuXHRcdHZhciBwb3NlOlNrZWxldG9uUG9zZSA9IG5ldyBTa2VsZXRvblBvc2UoKTtcblxuXHRcdHZhciBqb2ludHNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XG5cdFx0d2hpbGUgKGpvaW50c19wYXJzZWQgPCBudW1fam9pbnRzKSB7XG5cdFx0XHR2YXIgam9pbnRfcG9zZTpKb2ludFBvc2U7XG5cdFx0XHR2YXIgaGFzX3RyYW5zZm9ybTpudW1iZXIgLyp1aW50Ki87XG5cdFx0XHRqb2ludF9wb3NlID0gbmV3IEpvaW50UG9zZSgpO1xuXHRcdFx0aGFzX3RyYW5zZm9ybSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdFx0aWYgKGhhc190cmFuc2Zvcm0gPT0gMSkge1xuXHRcdFx0XHR2YXIgbXR4X2RhdGE6QXJyYXk8bnVtYmVyPiA9IHRoaXMucGFyc2VNYXRyaXg0M1Jhd0RhdGEoKTtcblxuXHRcdFx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gbmV3IE1hdHJpeDNEKG10eF9kYXRhKTtcblx0XHRcdFx0am9pbnRfcG9zZS5vcmllbnRhdGlvbi5mcm9tTWF0cml4KG10eCk7XG5cdFx0XHRcdGpvaW50X3Bvc2UudHJhbnNsYXRpb24uY29weUZyb20obXR4LnBvc2l0aW9uKTtcblxuXHRcdFx0XHRwb3NlLmpvaW50UG9zZXNbam9pbnRzX3BhcnNlZF0gPSBqb2ludF9wb3NlO1xuXHRcdFx0fVxuXHRcdFx0am9pbnRzX3BhcnNlZCsrO1xuXHRcdH1cblx0XHQvLyBTa2lwIGF0dHJpYnV0ZXMgZm9yIG5vd1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHBvc2UsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gcG9zZTtcblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uUG9zZTogTmFtZSA9IFwiICsgcG9zZS5uYW1lICsgXCIgfCBOdW1iZXIgb2YgSm9pbnRzID0gXCIgKyBqb2ludHNfcGFyc2VkKTtcblx0fVxuXG5cdC8vYmxvY2tJRCAxMDNcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uQW5pbWF0aW9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXG5cdHtcblx0XHR2YXIgZnJhbWVfZHVyOm51bWJlcjtcblx0XHR2YXIgcG9zZV9hZGRyOm51bWJlciAvKnVpbnQqLztcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIGNsaXA6U2tlbGV0b25DbGlwTm9kZSA9IG5ldyBTa2VsZXRvbkNsaXBOb2RlKCk7XG5cdFx0dmFyIG51bV9mcmFtZXM6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBJZ25vcmUgcHJvcGVydGllcyBmb3Igbm93XG5cblx0XHR2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XG5cdFx0d2hpbGUgKGZyYW1lc19wYXJzZWQgPCBudW1fZnJhbWVzKSB7XG5cdFx0XHRwb3NlX2FkZHIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0ZnJhbWVfZHVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBvc2VfYWRkciwgW0Fzc2V0VHlwZS5TS0VMRVRPTl9QT1NFXSk7XG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTa2VsZXRvblBvc2UgRnJhbWUgIyBcIiArIGZyYW1lc19wYXJzZWQgKyBcIiAoSUQgPSBcIiArIHBvc2VfYWRkciArIFwiICkgZm9yIHRoaXMgU2tlbGV0b25DbGlwTm9kZVwiKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y2xpcC5hZGRGcmFtZSg8U2tlbGV0b25Qb3NlPiB0aGlzLl9ibG9ja3NbcG9zZV9hZGRyXS5kYXRhLCBmcmFtZV9kdXIpO1xuXHRcdFx0ZnJhbWVzX3BhcnNlZCsrO1xuXHRcdH1cblx0XHRpZiAoY2xpcC5mcmFtZXMubGVuZ3RoID09IDApIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCB0aGlzIFNrZWxldG9uQ2xpcE5vZGUsIGJlY2F1c2Ugbm8gRnJhbWVzIHdoZXJlIHNldC5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIElnbm9yZSBhdHRyaWJ1dGVzIGZvciBub3dcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChjbGlwLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGNsaXA7XG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbkNsaXBOb2RlOiBOYW1lID0gXCIgKyBjbGlwLm5hbWUgKyBcIiB8IE51bWJlciBvZiBGcmFtZXMgPSBcIiArIGNsaXAuZnJhbWVzLmxlbmd0aCk7XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gMTExIC8gIEJsb2NrIElEID0gMTEyXG5cdHByaXZhdGUgcGFyc2VNZXNoUG9zZUFuaW1hdGlvbihibG9ja0lEOm51bWJlciAvKnVpbnQqLywgcG9zZU9ubHk6Ym9vbGVhbiA9IGZhbHNlKTp2b2lkXG5cdHtcblx0XHR2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSAxO1xuXHRcdHZhciBudW1fc3VibWVzaGVzOm51bWJlciAvKnVpbnQqLztcblx0XHR2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIHN1Yk1lc2hQYXJzZWQ6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBmcmFtZV9kdXI6bnVtYmVyO1xuXHRcdHZhciB4Om51bWJlcjtcblx0XHR2YXIgeTpudW1iZXI7XG5cdFx0dmFyIHo6bnVtYmVyO1xuXHRcdHZhciBzdHJfbGVuOm51bWJlcjtcblx0XHR2YXIgc3RyX2VuZDpudW1iZXI7XG5cdFx0dmFyIGdlb21ldHJ5Okdlb21ldHJ5O1xuXHRcdHZhciBzdWJHZW9tOlRyaWFuZ2xlU3ViR2VvbWV0cnk7XG5cdFx0dmFyIGlkeDpudW1iZXIgLyppbnQqLyA9IDA7XG5cdFx0dmFyIGNsaXA6VmVydGV4Q2xpcE5vZGUgPSBuZXcgVmVydGV4Q2xpcE5vZGUoKTtcblx0XHR2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+IC8qdWludCovO1xuXHRcdHZhciB2ZXJ0czpBcnJheTxudW1iZXI+O1xuXHRcdHZhciBudW1fU3RyZWFtczpudW1iZXIgLyppbnQqLyA9IDA7XG5cdFx0dmFyIHN0cmVhbXNQYXJzZWQ6bnVtYmVyIC8qaW50Ki8gPSAwO1xuXHRcdHZhciBzdHJlYW10eXBlczpBcnJheTxudW1iZXI+IC8qaW50Ki8gPSBuZXcgQXJyYXk8bnVtYmVyPigpIC8qaW50Ki87XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXM7XG5cdFx0dmFyIHRoaXNHZW86R2VvbWV0cnk7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBnZW9BZHJlc3M6bnVtYmVyIC8qaW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChnZW9BZHJlc3MsIFtBc3NldFR5cGUuR0VPTUVUUlldKTtcblx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSB0YXJnZXQtR2VvbWV0cnktT2JqZWN0IFwiICsgZ2VvQWRyZXNzICsgXCIgKSBmb3IgdGhpcyBWZXJ0ZXhDbGlwTm9kZVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIHV2czpBcnJheTxBcnJheTxudW1iZXI+PiA9IHRoaXMuZ2V0VVZGb3JWZXJ0ZXhBbmltYXRpb24oZ2VvQWRyZXNzKTtcblx0XHRpZiAoIXBvc2VPbmx5KVxuXHRcdFx0bnVtX2ZyYW1lcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblxuXHRcdG51bV9zdWJtZXNoZXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0bnVtX1N0cmVhbXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0c3RyZWFtc1BhcnNlZCA9IDA7XG5cdFx0d2hpbGUgKHN0cmVhbXNQYXJzZWQgPCBudW1fU3RyZWFtcykge1xuXHRcdFx0c3RyZWFtdHlwZXMucHVzaCh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCkpO1xuXHRcdFx0c3RyZWFtc1BhcnNlZCsrO1xuXHRcdH1cblx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CT09MLCAyOkFXRFBhcnNlci5CT09MfSk7XG5cblx0XHRjbGlwLmxvb3BpbmcgPSBwcm9wcy5nZXQoMSwgdHJ1ZSk7XG5cdFx0Y2xpcC5zdGl0Y2hGaW5hbEZyYW1lID0gcHJvcHMuZ2V0KDIsIGZhbHNlKTtcblxuXHRcdGZyYW1lc19wYXJzZWQgPSAwO1xuXHRcdHdoaWxlIChmcmFtZXNfcGFyc2VkIDwgbnVtX2ZyYW1lcykge1xuXHRcdFx0ZnJhbWVfZHVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoKTtcblx0XHRcdHN1Yk1lc2hQYXJzZWQgPSAwO1xuXHRcdFx0d2hpbGUgKHN1Yk1lc2hQYXJzZWQgPCBudW1fc3VibWVzaGVzKSB7XG5cdFx0XHRcdHN0cmVhbXNQYXJzZWQgPSAwO1xuXHRcdFx0XHRzdHJfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xuXHRcdFx0XHR3aGlsZSAoc3RyZWFtc1BhcnNlZCA8IG51bV9TdHJlYW1zKSB7XG5cdFx0XHRcdFx0aWYgKHN0cmVhbXR5cGVzW3N0cmVhbXNQYXJzZWRdID09IDEpIHtcblx0XHRcdFx0XHRcdGluZGljZXMgPSAoPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5WzFdKS5zdWJHZW9tZXRyaWVzW3N1Yk1lc2hQYXJzZWRdLmluZGljZXM7XG5cdFx0XHRcdFx0XHR2ZXJ0cyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0XHRcdFx0XHRpZHggPSAwO1xuXHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHRcdHggPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pXG5cdFx0XHRcdFx0XHRcdHkgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pXG5cdFx0XHRcdFx0XHRcdHogPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHg7XG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHk7XG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHo7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJHZW9tID0gbmV3IFRyaWFuZ2xlU3ViR2VvbWV0cnkodHJ1ZSk7XG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVBvc2l0aW9ucyh2ZXJ0cyk7XG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVVWcyh1dnNbc3ViTWVzaFBhcnNlZF0pO1xuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVWZXJ0ZXhOb3JtYWxzKG51bGwpO1xuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVWZXJ0ZXhUYW5nZW50cyhudWxsKTtcblx0XHRcdFx0XHRcdHN1Ykdlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHN1Ykdlb20uYXV0b0Rlcml2ZVRhbmdlbnRzID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRzdWJNZXNoUGFyc2VkKys7XG5cdFx0XHRcdFx0XHRnZW9tZXRyeS5hZGRTdWJHZW9tZXRyeShzdWJHZW9tKVxuXHRcdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XG5cdFx0XHRcdFx0c3RyZWFtc1BhcnNlZCsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjbGlwLmFkZEZyYW1lKGdlb21ldHJ5LCBmcmFtZV9kdXIpO1xuXHRcdFx0ZnJhbWVzX3BhcnNlZCsrO1xuXHRcdH1cblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChjbGlwLCBuYW1lKTtcblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY2xpcDtcblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFZlcnRleENsaXBOb2RlOiBOYW1lID0gXCIgKyBjbGlwLm5hbWUgKyBcIiB8IFRhcmdldC1HZW9tZXRyeS1OYW1lID0gXCIgKyAoPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5WzFdKS5uYW1lICsgXCIgfCBOdW1iZXIgb2YgRnJhbWVzID0gXCIgKyBjbGlwLmZyYW1lcy5sZW5ndGgpO1xuXHR9XG5cblx0Ly9CbG9ja0lEIDExM1xuXHRwcml2YXRlIHBhcnNlVmVydGV4QW5pbWF0aW9uU2V0KGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXG5cdHtcblx0XHR2YXIgcG9zZUJsb2NrQWRyZXNzOm51bWJlciAvKmludCovXG5cdFx0dmFyIG91dHB1dFN0cmluZzpzdHJpbmcgPSBcIlwiO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDE2fSk7XG5cdFx0dmFyIGZyYW1lc19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcblx0XHR2YXIgc2tlbGV0b25GcmFtZXM6QXJyYXk8U2tlbGV0b25DbGlwTm9kZT4gPSBuZXcgQXJyYXk8U2tlbGV0b25DbGlwTm9kZT4oKTtcblx0XHR2YXIgdmVydGV4RnJhbWVzOkFycmF5PFZlcnRleENsaXBOb2RlPiA9IG5ldyBBcnJheTxWZXJ0ZXhDbGlwTm9kZT4oKTtcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcblx0XHRcdHBvc2VCbG9ja0FkcmVzcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZUJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9OT0RFXSk7XG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbmltYXRpb25DbGlwTm9kZSBOciBcIiArIGZyYW1lc19wYXJzZWQgKyBcIiAoIFwiICsgcG9zZUJsb2NrQWRyZXNzICsgXCIgKSBmb3IgdGhpcyBBbmltYXRpb25TZXRcIik7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMV0gaW5zdGFuY2VvZiBWZXJ0ZXhDbGlwTm9kZSlcblx0XHRcdFx0XHR2ZXJ0ZXhGcmFtZXMucHVzaChyZXR1cm5lZEFycmF5WzFdKVxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVsxXSBpbnN0YW5jZW9mIFNrZWxldG9uQ2xpcE5vZGUpXG5cdFx0XHRcdFx0c2tlbGV0b25GcmFtZXMucHVzaChyZXR1cm5lZEFycmF5WzFdKVxuXHRcdFx0fVxuXHRcdFx0ZnJhbWVzX3BhcnNlZCsrO1xuXHRcdH1cblx0XHRpZiAoKHZlcnRleEZyYW1lcy5sZW5ndGggPT0gMCkgJiYgKHNrZWxldG9uRnJhbWVzLmxlbmd0aCA9PSAwKSkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSB0aGlzIEFuaW1hdGlvblNldCwgYmVjYXVzZSBpdCBjb250YWlucyBubyBhbmltYXRpb25zXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRpZiAodmVydGV4RnJhbWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBuZXdWZXJ0ZXhBbmltYXRpb25TZXQ6VmVydGV4QW5pbWF0aW9uU2V0ID0gbmV3IFZlcnRleEFuaW1hdGlvblNldCgpO1xuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCB2ZXJ0ZXhGcmFtZXMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdG5ld1ZlcnRleEFuaW1hdGlvblNldC5hZGRBbmltYXRpb24odmVydGV4RnJhbWVzW2ldKTtcblx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KG5ld1ZlcnRleEFuaW1hdGlvblNldCwgbmFtZSk7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1ZlcnRleEFuaW1hdGlvblNldDtcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBWZXJ0ZXhBbmltYXRpb25TZXQ6IE5hbWUgPSBcIiArIG5hbWUgKyBcIiB8IEFuaW1hdGlvbnMgPSBcIiArIG5ld1ZlcnRleEFuaW1hdGlvblNldC5hbmltYXRpb25zLmxlbmd0aCArIFwiIHwgQW5pbWF0aW9uLU5hbWVzID0gXCIgKyBuZXdWZXJ0ZXhBbmltYXRpb25TZXQuYW5pbWF0aW9uTmFtZXMudG9TdHJpbmcoKSk7XG5cblx0XHR9IGVsc2UgaWYgKHNrZWxldG9uRnJhbWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChwb3NlQmxvY2tBZHJlc3MsIFtBc3NldFR5cGUuQU5JTUFUSU9OX05PREVdKTtcblx0XHRcdHZhciBuZXdTa2VsZXRvbkFuaW1hdGlvblNldDpTa2VsZXRvbkFuaW1hdGlvblNldCA9IG5ldyBTa2VsZXRvbkFuaW1hdGlvblNldChwcm9wcy5nZXQoMSwgNCkpOyAvL3Byb3BzLmdldCgxLDQpKTtcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgc2tlbGV0b25GcmFtZXMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0LmFkZEFuaW1hdGlvbihza2VsZXRvbkZyYW1lc1tpXSk7XG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldChuZXdTa2VsZXRvbkFuaW1hdGlvblNldCwgbmFtZSk7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0O1xuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uQW5pbWF0aW9uU2V0OiBOYW1lID0gXCIgKyBuYW1lICsgXCIgfCBBbmltYXRpb25zID0gXCIgKyBuZXdTa2VsZXRvbkFuaW1hdGlvblNldC5hbmltYXRpb25zLmxlbmd0aCArIFwiIHwgQW5pbWF0aW9uLU5hbWVzID0gXCIgKyBuZXdTa2VsZXRvbkFuaW1hdGlvblNldC5hbmltYXRpb25OYW1lcy50b1N0cmluZygpKTtcblxuXHRcdH1cblx0fVxuXG5cdC8vQmxvY2tJRCAxMjJcblx0cHJpdmF0ZSBwYXJzZUFuaW1hdG9yU2V0KGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXG5cdHtcblx0XHR2YXIgdGFyZ2V0TWVzaDpNZXNoO1xuXHRcdHZhciBhbmltU2V0QmxvY2tBZHJlc3M6bnVtYmVyIC8qaW50Ki9cblx0XHR2YXIgdGFyZ2V0QW5pbWF0aW9uU2V0OkFuaW1hdGlvblNldEJhc2U7XG5cdFx0dmFyIG91dHB1dFN0cmluZzpzdHJpbmcgPSBcIlwiO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgdHlwZTpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUn0pO1xuXG5cdFx0YW5pbVNldEJsb2NrQWRyZXNzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHR2YXIgdGFyZ2V0TWVzaExlbmd0aDpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dmFyIG1lc2hBZHJlc3NlczpBcnJheTxudW1iZXI+IC8qdWludCovID0gbmV3IEFycmF5PG51bWJlcj4oKSAvKnVpbnQqLztcblx0XHRmb3IgKHZhciBpOm51bWJlciAvKmludCovID0gMDsgaSA8IHRhcmdldE1lc2hMZW5ndGg7IGkrKylcblx0XHRcdG1lc2hBZHJlc3Nlcy5wdXNoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCkpO1xuXG5cdFx0dmFyIGFjdGl2ZVN0YXRlOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgYXV0b3BsYXk6Ym9vbGVhbiA9ICggdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCkgPT0gMSApO1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55Pjtcblx0XHR2YXIgdGFyZ2V0TWVzaGVzOkFycmF5PE1lc2g+ID0gbmV3IEFycmF5PE1lc2g+KCk7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbWVzaEFkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQobWVzaEFkcmVzc2VzW2ldLCBbQXNzZXRUeXBlLk1FU0hdKTtcblx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHR0YXJnZXRNZXNoZXMucHVzaCg8TWVzaD4gcmV0dXJuZWRBcnJheVsxXSk7XG5cdFx0fVxuXHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChhbmltU2V0QmxvY2tBZHJlc3MsIFtBc3NldFR5cGUuQU5JTUFUSU9OX1NFVF0pO1xuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEFuaW1hdGlvblNldCAoIFwiICsgYW5pbVNldEJsb2NrQWRyZXNzICsgXCIgKSBmb3IgdGhpcyBBbmltYXRvclwiKTs7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0dGFyZ2V0QW5pbWF0aW9uU2V0ID0gPEFuaW1hdGlvblNldEJhc2U+IHJldHVybmVkQXJyYXlbMV07XG5cdFx0dmFyIHRoaXNBbmltYXRvcjpBbmltYXRvckJhc2U7XG5cdFx0aWYgKHR5cGUgPT0gMSkge1xuXG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocHJvcHMuZ2V0KDEsIDApLCBbQXNzZXRUeXBlLlNLRUxFVE9OXSk7XG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNrZWxldG9uICggXCIgKyBwcm9wcy5nZXQoMSwgMCkgKyBcIiApIGZvciB0aGlzIEFuaW1hdG9yXCIpO1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdHRoaXNBbmltYXRvciA9IG5ldyBTa2VsZXRvbkFuaW1hdG9yKDxTa2VsZXRvbkFuaW1hdGlvblNldD4gdGFyZ2V0QW5pbWF0aW9uU2V0LCA8U2tlbGV0b24+IHJldHVybmVkQXJyYXlbMV0pO1xuXG5cdFx0fSBlbHNlIGlmICh0eXBlID09IDIpXG5cdFx0XHR0aGlzQW5pbWF0b3IgPSBuZXcgVmVydGV4QW5pbWF0b3IoPFZlcnRleEFuaW1hdGlvblNldD4gdGFyZ2V0QW5pbWF0aW9uU2V0KTtcblxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHRoaXNBbmltYXRvciwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0aGlzQW5pbWF0b3I7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRhcmdldE1lc2hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHR5cGUgPT0gMSlcblx0XHRcdFx0dGFyZ2V0TWVzaGVzW2ldLmFuaW1hdG9yID0gKDxTa2VsZXRvbkFuaW1hdG9yPiB0aGlzQW5pbWF0b3IpO1xuXHRcdFx0aWYgKHR5cGUgPT0gMilcblx0XHRcdFx0dGFyZ2V0TWVzaGVzW2ldLmFuaW1hdG9yID0gKDxWZXJ0ZXhBbmltYXRvcj4gdGhpc0FuaW1hdG9yKTtcblxuXHRcdH1cblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIEFuaW1hdG9yOiBOYW1lID0gXCIgKyBuYW1lKTtcblx0fVxuXG5cdC8vIHRoaXMgZnVuY3Rpb25zIHJlYWRzIGFuZCBjcmVhdGVzIGEgRWZmZWN0TWV0aG9kXG5cdHByaXZhdGUgcGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQ6bnVtYmVyKTpFZmZlY3RNZXRob2RCYXNlXG5cdHtcblxuXHRcdHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgZWZmZWN0TWV0aG9kUmV0dXJuOkVmZmVjdE1ldGhvZEJhc2U7XG5cblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUiwgMjpBV0RQYXJzZXIuQkFERFIsIDM6QVdEUGFyc2VyLkJBRERSLCAxMDE6dGhpcy5fcHJvcHNOclR5cGUsIDEwMjp0aGlzLl9wcm9wc05yVHlwZSwgMTAzOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDQ6dGhpcy5fcHJvcHNOclR5cGUsIDEwNTp0aGlzLl9wcm9wc05yVHlwZSwgMTA2OnRoaXMuX3Byb3BzTnJUeXBlLCAxMDc6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTH0pO1xuXHRcdHZhciB0YXJnZXRJRDpudW1iZXI7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcblxuXHRcdHN3aXRjaCAobWV0aG9kVHlwZSkge1xuXHRcdFx0Ly8gRWZmZWN0IE1ldGhvZHNcblx0XHRcdGNhc2UgNDAxOiAvL0NvbG9yTWF0cml4XG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RDb2xvck1hdHJpeE1ldGhvZChwcm9wcy5nZXQoMTAxLCBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSkpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQwMjogLy9Db2xvclRyYW5zZm9ybVxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2QoKTtcblx0XHRcdFx0dmFyIG9mZkNvbDpudW1iZXIgLyp1aW50Ki8gPSBwcm9wcy5nZXQoNjAxLCAweDAwMDAwMDAwKTtcblx0XHRcdFx0KDxFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZD4gZWZmZWN0TWV0aG9kUmV0dXJuKS5jb2xvclRyYW5zZm9ybSA9IG5ldyBDb2xvclRyYW5zZm9ybShwcm9wcy5nZXQoMTAyLCAxKSwgcHJvcHMuZ2V0KDEwMywgMSksIHByb3BzLmdldCgxMDQsIDEpLCBwcm9wcy5nZXQoMTAxLCAxKSwgKChvZmZDb2wgPj4gMTYpICYgMHhGRiksICgob2ZmQ29sID4+IDgpICYgMHhGRiksIChvZmZDb2wgJiAweEZGKSwgKChvZmZDb2wgPj4gMjQpICYgMHhGRikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDAzOiAvL0Vudk1hcFxuXG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRU5WIE1BUCcsIHRhcmdldElEKTtcblxuXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgWyBBc3NldFR5cGUuVEVYVFVSRSBdLCBcIkN1YmVUZXh0dXJlXCIpO1xuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RFbnZNYXBNZXRob2QoPEN1YmVUZXh0dXJlQmFzZT4gcmV0dXJuZWRBcnJheVsxXSwgPG51bWJlcj4gcHJvcHMuZ2V0KDEwMSwgMSkpO1xuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgyLCAwKTtcblx0XHRcdFx0aWYgKHRhcmdldElEID4gMCkge1xuXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIE1hc2stdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBNZXRob2RcIik7XG5cblx0XHRcdFx0XHQvLyBUb2RvOiB0ZXN0IG1hc2sgd2l0aCBFbnZNYXBNZXRob2Rcblx0XHRcdFx0XHQvLyg8RW52TWFwTWV0aG9kPiBlZmZlY3RNZXRob2RSZXR1cm4pLm1hc2sgPSA8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDA0OiAvL0xpZ2h0TWFwTWV0aG9kXG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIExpZ2h0TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIExpZ2h0TWFwTWV0aG9kXCIpO1xuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0TGlnaHRNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSk7IC8vdXNlc2Vjb25kYXJ5VVYgbm90IHNldFxuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDQwNTogLy9Qcm9qZWN0aXZlVGV4dHVyZU1ldGhvZFxuXHRcdFx0Ly9cdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVfUFJPSkVDVE9SXSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGV4dHVyZVByb2plY3RvciAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZFwiKTtcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDA2OiAvL1JpbUxpZ2h0TWV0aG9kXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RSaW1MaWdodE1ldGhvZChwcm9wcy5nZXQoNjAxLCAweGZmZmZmZiksIHByb3BzLmdldCgxMDEsIDAuNCksIHByb3BzLmdldCgxMDEsIDIpKTsgLy9ibGVuZE1vZGVcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQwNzogLy9BbHBoYU1hc2tNZXRob2Rcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQWxwaGEtdGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBBbHBoYU1hc2tNZXRob2RcIik7XG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RBbHBoYU1hc2tNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDcwMSwgZmFsc2UpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvL1x0XHRcdFx0Y2FzZSA0MDg6IC8vUmVmcmFjdGlvbkVudk1hcE1ldGhvZFxuXHRcdFx0Ly9cdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xuXHRcdFx0Ly9cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0Ly9cdFx0XHRcdFx0XHRfYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBSZWZyYWN0aW9uRW52TWFwTWV0aG9kXCIpO1xuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFJlZnJhY3Rpb25FbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDEwMSwgMC4xKSwgcHJvcHMuZ2V0KDEwMiwgMC4wMSksIHByb3BzLmdldCgxMDMsIDAuMDEpLCBwcm9wcy5nZXQoMTA0LCAwLjAxKSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRSZWZyYWN0aW9uRW52TWFwTWV0aG9kKGVmZmVjdE1ldGhvZFJldHVybikuYWxwaGEgPSBwcm9wcy5nZXQoMTA0LCAxKTtcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgNDA5OiAvL091dGxpbmVNZXRob2Rcblx0XHRcdC8vXHRcdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBPdXRsaW5lTWV0aG9kKHByb3BzLmdldCg2MDEsIDB4MDAwMDAwMDApLCBwcm9wcy5nZXQoMTAxLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDEwOiAvL0ZyZXNuZWxFbnZNYXBNZXRob2Rcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcblx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgRnJlc25lbEVudk1hcE1ldGhvZFwiKTtcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEZyZXNuZWxFbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDEwMSwgMSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDExOiAvL0ZvZ01ldGhvZFxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0Rm9nTWV0aG9kKHByb3BzLmdldCgxMDEsIDApLCBwcm9wcy5nZXQoMTAyLCAxMDAwKSwgcHJvcHMuZ2V0KDYwMSwgMHg4MDgwODApKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0cmV0dXJuIGVmZmVjdE1ldGhvZFJldHVybjtcblxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVVzZXJBdHRyaWJ1dGVzKCk6T2JqZWN0XG5cdHtcblx0XHR2YXIgYXR0cmlidXRlczpPYmplY3Q7XG5cdFx0dmFyIGxpc3RfbGVuOm51bWJlcjtcblx0XHR2YXIgYXR0aWJ1dGVDbnQ6bnVtYmVyO1xuXG5cdFx0bGlzdF9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0aWYgKGxpc3RfbGVuID4gMCkge1xuXG5cdFx0XHR2YXIgbGlzdF9lbmQ6bnVtYmVyO1xuXG5cdFx0XHRhdHRyaWJ1dGVzID0ge307XG5cblx0XHRcdGxpc3RfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxpc3RfbGVuO1xuXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IGxpc3RfZW5kKSB7XG5cdFx0XHRcdHZhciBuc19pZDpudW1iZXI7XG5cdFx0XHRcdHZhciBhdHRyX2tleTpzdHJpbmc7XG5cdFx0XHRcdHZhciBhdHRyX3R5cGU6bnVtYmVyO1xuXHRcdFx0XHR2YXIgYXR0cl9sZW46bnVtYmVyO1xuXHRcdFx0XHR2YXIgYXR0cl92YWw6YW55O1xuXG5cdFx0XHRcdC8vIFRPRE86IFByb3Blcmx5IHRlbmQgdG8gbmFtZXNwYWNlcyBpbiBhdHRyaWJ1dGVzXG5cdFx0XHRcdG5zX2lkID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdGF0dHJfa2V5ID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdFx0XHRhdHRyX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0YXR0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0XHRcdGlmICgodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGF0dHJfbGVuKSA+IGxpc3RfZW5kKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgIEVycm9yIGluIHJlYWRpbmcgYXR0cmlidXRlICMgXCIgKyBhdHRpYnV0ZUNudCArIFwiID0gc2tpcHBlZCB0byBlbmQgb2YgYXR0cmlidXRlLWxpc3RcIik7XG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xuXHRcdFx0XHRcdHJldHVybiBhdHRyaWJ1dGVzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3dpdGNoIChhdHRyX3R5cGUpIHtcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5BV0RTVFJJTkc6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGF0dHJfbGVuKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDg6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDE2OlxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMzI6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEludCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuQk9PTDpcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UODpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMTY6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQzMjpcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5CQUREUjpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUMzI6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDY0OlxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGUoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9ICd1bmltcGxlbWVudGVkIGF0dHJpYnV0ZSB0eXBlICcgKyBhdHRyX3R5cGU7XG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGF0dHJfbGVuO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImF0dHJpYnV0ZSA9IG5hbWU6IFwiICsgYXR0cl9rZXkgKyBcIiAgLyB2YWx1ZSA9IFwiICsgYXR0cl92YWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXR0cmlidXRlc1thdHRyX2tleV0gPSBhdHRyX3ZhbDtcblx0XHRcdFx0YXR0aWJ1dGVDbnQgKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYXR0cmlidXRlcztcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQcm9wZXJ0aWVzKGV4cGVjdGVkOk9iamVjdCk6QVdEUHJvcGVydGllc1xuXHR7XG5cdFx0dmFyIGxpc3RfZW5kOm51bWJlcjtcblx0XHR2YXIgbGlzdF9sZW46bnVtYmVyO1xuXHRcdHZhciBwcm9wZXJ0eUNudDpudW1iZXIgPSAwO1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gbmV3IEFXRFByb3BlcnRpZXMoKTtcblxuXHRcdGxpc3RfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRsaXN0X2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsaXN0X2xlbjtcblxuXHRcdGlmIChleHBlY3RlZCkge1xuXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IGxpc3RfZW5kKSB7XG5cdFx0XHRcdHZhciBsZW46bnVtYmVyO1xuXHRcdFx0XHR2YXIga2V5Om51bWJlcjtcblx0XHRcdFx0dmFyIHR5cGU6bnVtYmVyO1xuXG5cdFx0XHRcdGtleSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0bGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblxuXHRcdFx0XHRpZiAoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW4pID4gbGlzdF9lbmQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBwcm9wZXJ0eSAjIFwiICsgcHJvcGVydHlDbnQgKyBcIiA9IHNraXBwZWQgdG8gZW5kIG9mIHByb3BlcnRpZS1saXN0XCIpO1xuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBsaXN0X2VuZDtcblx0XHRcdFx0XHRyZXR1cm4gcHJvcHM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZXhwZWN0ZWQuaGFzT3duUHJvcGVydHkoa2V5LnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdFx0dHlwZSA9IGV4cGVjdGVkW2tleV07XG5cdFx0XHRcdFx0cHJvcHMuc2V0KGtleSwgdGhpcy5wYXJzZUF0dHJWYWx1ZSh0eXBlLCBsZW4pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGxlbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHByb3BlcnR5Q250ICs9IDE7XG5cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9wcztcblxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUF0dHJWYWx1ZSh0eXBlOm51bWJlciwgbGVuOm51bWJlcik6YW55XG5cdHtcblx0XHR2YXIgZWxlbV9sZW46bnVtYmVyO1xuXHRcdHZhciByZWFkX2Z1bmM6RnVuY3Rpb247XG5cblx0XHRzd2l0Y2ggKHR5cGUpIHtcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQk9PTDpcblx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDg6XG5cdFx0XHRcdGVsZW1fbGVuID0gMTtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDE2OlxuXHRcdFx0XHRlbGVtX2xlbiA9IDI7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMzI6XG5cdFx0XHRcdGVsZW1fbGVuID0gNDtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkSW50O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDg6XG5cdFx0XHRcdGVsZW1fbGVuID0gMTtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDE2OlxuXHRcdFx0XHRlbGVtX2xlbiA9IDI7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMzI6XG5cdFx0XHRjYXNlIEFXRFBhcnNlci5DT0xPUjpcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkJBRERSOlxuXHRcdFx0XHRlbGVtX2xlbiA9IDQ7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuRkxPQVQzMjpcblx0XHRcdFx0ZWxlbV9sZW4gPSA0O1xuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUNjQ6XG5cdFx0XHRcdGVsZW1fbGVuID0gODtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQVdEU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMobGVuKTtcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SMngxOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SM3gxOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SNHgxOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYM3gyOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYM3gzOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYNHgzOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYNHg0OlxuXHRcdFx0XHRlbGVtX2xlbiA9IDg7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0XHRpZiAoZWxlbV9sZW4gPCBsZW4pIHtcblx0XHRcdHZhciBsaXN0OkFycmF5PGFueT4gPSBbXTtcblx0XHRcdHZhciBudW1fcmVhZDpudW1iZXIgPSAwO1xuXHRcdFx0dmFyIG51bV9lbGVtczpudW1iZXIgPSBsZW4vZWxlbV9sZW47XG5cblx0XHRcdHdoaWxlIChudW1fcmVhZCA8IG51bV9lbGVtcykge1xuXHRcdFx0XHRsaXN0LnB1c2gocmVhZF9mdW5jLmFwcGx5KHRoaXMuX25ld0Jsb2NrQnl0ZXMpKTsgLy8gbGlzdC5wdXNoKHJlYWRfZnVuYygpKTtcblx0XHRcdFx0bnVtX3JlYWQrKztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dmFyIHZhbDphbnkgPSByZWFkX2Z1bmMuYXBwbHkodGhpcy5fbmV3QmxvY2tCeXRlcyk7Ly9yZWFkX2Z1bmMoKTtcblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUhlYWRlcigpOnZvaWRcblx0e1xuXHRcdHZhciBmbGFnczpudW1iZXI7XG5cdFx0dmFyIGJvZHlfbGVuOm51bWJlcjtcblxuXHRcdHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uID0gMzsgLy8gU2tpcCBtYWdpYyBzdHJpbmcgYW5kIHBhcnNlIHZlcnNpb25cblxuXHRcdHRoaXMuX3ZlcnNpb25bMF0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dGhpcy5fdmVyc2lvblsxXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblxuXHRcdGZsYWdzID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTsgLy8gUGFyc2UgYml0IGZsYWdzXG5cblx0XHR0aGlzLl9zdHJlYW1pbmcgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XG5cblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMSkpIHtcblx0XHRcdHRoaXMuX2FjY3VyYWN5TWF0cml4ID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzIpO1xuXHRcdFx0dGhpcy5fYWNjdXJhY3lHZW8gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMyk7XG5cdFx0XHR0aGlzLl9hY2N1cmFjeVByb3BzID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzQpO1xuXHRcdH1cblxuXHRcdC8vIGlmIHdlIHNldCBfYWNjdXJhY3lPbkJsb2NrcywgdGhlIHByZWNpc2lvbi12YWx1ZXMgYXJlIHJlYWQgZnJvbSBlYWNoIGJsb2NrLWhlYWRlci5cblxuXHRcdC8vIHNldCBzdG9yYWdlUHJlY2lzaW9uIHR5cGVzXG5cdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XG5cblx0XHRpZiAodGhpcy5fYWNjdXJhY3lHZW8pIHtcblx0XHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xuXHRcdH1cblxuXHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xuXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5TWF0cml4KSB7XG5cdFx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcblx0XHR9XG5cblx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xuXG5cdFx0aWYgKHRoaXMuX2FjY3VyYWN5UHJvcHMpIHtcblx0XHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29tcHJlc3Npb24gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7IC8vIGNvbXByZXNzaW9uXG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiSW1wb3J0IEFXREZpbGUgb2YgdmVyc2lvbiA9IFwiICsgdGhpcy5fdmVyc2lvblswXSArIFwiIC0gXCIgKyB0aGlzLl92ZXJzaW9uWzFdKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiR2xvYmFsIFNldHRpbmdzID0gQ29tcHJlc3Npb24gPSBcIiArIHRoaXMuX2NvbXByZXNzaW9uICsgXCIgfCBTdHJlYW1pbmcgPSBcIiArIHRoaXMuX3N0cmVhbWluZyArIFwiIHwgTWF0cml4LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lNYXRyaXggKyBcIiB8IEdlb21ldHJ5LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lHZW8gKyBcIiB8IFByb3BlcnRpZXMtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeVByb3BzKTtcblx0XHR9XG5cblx0XHQvLyBDaGVjayBmaWxlIGludGVncml0eVxuXHRcdGJvZHlfbGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0aWYgKCF0aGlzLl9zdHJlYW1pbmcgJiYgYm9keV9sZW4gIT0gdGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSkge1xuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQVdEMiBib2R5IGxlbmd0aCBkb2VzIG5vdCBtYXRjaCBoZWFkZXIgaW50ZWdyaXR5IGZpZWxkJyk7XG5cdFx0fVxuXG5cdH1cblx0Ly8gSGVscGVyIC0gZnVuY3Rpb25zXG5cdHByaXZhdGUgZ2V0VVZGb3JWZXJ0ZXhBbmltYXRpb24obWVzaElEOm51bWJlciAvKnVpbnQqLyk6QXJyYXk8QXJyYXk8bnVtYmVyPj5cblx0e1xuXHRcdGlmICh0aGlzLl9ibG9ja3NbbWVzaElEXS5kYXRhIGluc3RhbmNlb2YgTWVzaClcblx0XHRcdG1lc2hJRCA9IHRoaXMuX2Jsb2Nrc1ttZXNoSURdLmdlb0lEO1xuXHRcdGlmICh0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb24pXG5cdFx0XHRyZXR1cm4gdGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uO1xuXHRcdHZhciBnZW9tZXRyeTpHZW9tZXRyeSA9ICg8R2VvbWV0cnk+IHRoaXMuX2Jsb2Nrc1ttZXNoSURdLmRhdGEpO1xuXHRcdHZhciBnZW9DbnQ6bnVtYmVyIC8qaW50Ki8gPSAwO1xuXHRcdHZhciB1ZDpBcnJheTxudW1iZXI+O1xuXHRcdHZhciB1U3RyaWRlOm51bWJlciAvKnVpbnQqLztcblx0XHR2YXIgdU9mZnM6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBudW1Qb2ludHM6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBpOm51bWJlciAvKmludCovO1xuXHRcdHZhciBuZXdVdnM6QXJyYXk8bnVtYmVyPjtcblx0XHR2YXIgc3ViX2dlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcblx0XHR0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb24gPSBuZXcgQXJyYXk8QXJyYXk8bnVtYmVyPj4oKTtcblx0XHR3aGlsZSAoZ2VvQ250IDwgZ2VvbWV0cnkuc3ViR2VvbWV0cmllcy5sZW5ndGgpIHtcblx0XHRcdG5ld1V2cyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0XHRzdWJfZ2VvbSA9IDxUcmlhbmdsZVN1Ykdlb21ldHJ5PiBnZW9tZXRyeS5zdWJHZW9tZXRyaWVzW2dlb0NudF07XG5cdFx0XHRudW1Qb2ludHMgPSBzdWJfZ2VvbS5udW1WZXJ0aWNlcztcblx0XHRcdHVkID0gc3ViX2dlb20udXZzO1xuXHRcdFx0dVN0cmlkZSA9IHN1Yl9nZW9tLmdldFN0cmlkZShUcmlhbmdsZVN1Ykdlb21ldHJ5LlVWX0RBVEEpO1xuXHRcdFx0dU9mZnMgPSBzdWJfZ2VvbS5nZXRPZmZzZXQoVHJpYW5nbGVTdWJHZW9tZXRyeS5VVl9EQVRBKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKykge1xuXHRcdFx0XHRuZXdVdnMucHVzaCh1ZFt1T2ZmcyArIGkqdVN0cmlkZSArIDBdKTtcblx0XHRcdFx0bmV3VXZzLnB1c2godWRbdU9mZnMgKyBpKnVTdHJpZGUgKyAxXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb24ucHVzaChuZXdVdnMpO1xuXHRcdFx0Z2VvQ250Kys7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb247XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVmFyU3RyKCk6c3RyaW5nXG5cdHtcblxuXHRcdHZhciBsZW46bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW4pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRBc3NldEJ5SUQoYXNzZXRJRDpudW1iZXIsIGFzc2V0VHlwZXNUb0dldDpBcnJheTxzdHJpbmc+LCBleHRyYVR5cGVJbmZvOnN0cmluZyA9IFwiU2luZ2xlVGV4dHVyZVwiKTpBcnJheTxhbnk+XG5cdHtcblx0XHR2YXIgcmV0dXJuQXJyYXk6QXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG5cdFx0dmFyIHR5cGVDbnQ6bnVtYmVyID0gMDtcblx0XHRpZiAoYXNzZXRJRCA+IDApIHtcblx0XHRcdGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0pIHtcblx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKSB7XG5cdFx0XHRcdFx0d2hpbGUgKHR5cGVDbnQgPCBhc3NldFR5cGVzVG9HZXQubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHRcdHZhciBpYXNzZXQ6SUFzc2V0ID0gPElBc3NldD4gdGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGE7XG5cblx0XHRcdFx0XHRcdGlmIChpYXNzZXQuYXNzZXRUeXBlID09IGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSkge1xuXHRcdFx0XHRcdFx0XHQvL2lmIHRoZSByaWdodCBhc3NldFR5cGUgd2FzIGZvdW5kXG5cdFx0XHRcdFx0XHRcdGlmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5URVhUVVJFKSAmJiAoZXh0cmFUeXBlSW5mbyA9PSBcIkN1YmVUZXh0dXJlXCIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhIGluc3RhbmNlb2YgSW1hZ2VDdWJlVGV4dHVyZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuVEVYVFVSRSkgJiYgKGV4dHJhVHlwZUluZm8gPT0gXCJTaW5nbGVUZXh0dXJlXCIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhIGluc3RhbmNlb2YgSW1hZ2VUZXh0dXJlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vaWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLkdFT01FVFJZKSAmJiAoSUFzc2V0KF9ibG9ja3NbYXNzZXRJRF0uZGF0YSkuYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NRVNIKSkge1xuXHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLkdFT01FVFJZKSAmJiAoaWFzc2V0LmFzc2V0VHlwZSA9PSBBc3NldFR5cGUuTUVTSCkpIHtcblxuXHRcdFx0XHRcdFx0XHR2YXIgbWVzaDpNZXNoID0gPE1lc2g+IHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhXG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChtZXNoLmdlb21ldHJ5KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHR5cGVDbnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gaWYgdGhlIGhhcyBub3QgcmV0dXJuZWQgYW55dGhpbmcgeWV0LCB0aGUgYXNzZXQgaXMgbm90IGZvdW5kLCBvciB0aGUgZm91bmQgYXNzZXQgaXMgbm90IHRoZSByaWdodCB0eXBlLlxuXHRcdHJldHVybkFycmF5LnB1c2goZmFsc2UpO1xuXHRcdHJldHVybkFycmF5LnB1c2godGhpcy5nZXREZWZhdWx0QXNzZXQoYXNzZXRUeXBlc1RvR2V0WzBdLCBleHRyYVR5cGVJbmZvKSk7XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9XG5cdHByaXZhdGUgZ2V0RGVmYXVsdEFzc2V0KGFzc2V0VHlwZTpzdHJpbmcsIGV4dHJhVHlwZUluZm86c3RyaW5nKTpJQXNzZXRcblx0e1xuXHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0Y2FzZSAoYXNzZXRUeXBlID09IEFzc2V0VHlwZS5URVhUVVJFKTpcblx0XHRcdFx0aWYgKGV4dHJhVHlwZUluZm8gPT0gXCJDdWJlVGV4dHVyZVwiKVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmdldERlZmF1bHRDdWJlVGV4dHVyZSgpO1xuXHRcdFx0XHRpZiAoZXh0cmFUeXBlSW5mbyA9PSBcIlNpbmdsZVRleHR1cmVcIilcblx0XHRcdFx0XHRyZXR1cm4gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0VGV4dHVyZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgKGFzc2V0VHlwZSA9PSBBc3NldFR5cGUuTUFURVJJQUwpOlxuXHRcdFx0XHRyZXR1cm4gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0TWF0ZXJpYWwoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk6SUFzc2V0XG5cdHtcblx0XHRpZiAoIXRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZSkge1xuXHRcdFx0dmFyIGRlZmF1bHRCaXRtYXA6Qml0bWFwRGF0YSA9IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuY3JlYXRlQ2hlY2tlcmVkQml0bWFwRGF0YSgpO1xuXG5cdFx0XHR0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUgPSBuZXcgQml0bWFwQ3ViZVRleHR1cmUoZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCk7XG5cdFx0XHR0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUubmFtZSA9IFwiZGVmYXVsdEN1YmVUZXh0dXJlXCI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxJQXNzZXQ+IHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZE51bWJlcihwcmVjaXNpb246Ym9vbGVhbiA9IGZhbHNlKTpudW1iZXJcblx0e1xuXHRcdGlmIChwcmVjaXNpb24pXG5cdFx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlKCk7XG5cdFx0cmV0dXJuIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0KCk7XG5cblx0fVxuXG5cdHByaXZhdGUgcGFyc2VNYXRyaXgzRCgpOk1hdHJpeDNEXG5cdHtcblx0XHRyZXR1cm4gbmV3IE1hdHJpeDNEKHRoaXMucGFyc2VNYXRyaXg0M1Jhd0RhdGEoKSk7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlTWF0cml4MzJSYXdEYXRhKCk6QXJyYXk8bnVtYmVyPlxuXHR7XG5cdFx0dmFyIGk6bnVtYmVyO1xuXHRcdHZhciBtdHhfcmF3OkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPig2KTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKSB7XG5cdFx0XHRtdHhfcmF3W2ldID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbXR4X3Jhdztcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VNYXRyaXg0M1Jhd0RhdGEoKTpBcnJheTxudW1iZXI+XG5cdHtcblx0XHR2YXIgbXR4X3JhdzpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oMTYpO1xuXG5cdFx0bXR4X3Jhd1swXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1sxXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1syXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1szXSA9IDAuMDtcblx0XHRtdHhfcmF3WzRdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzVdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzZdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzddID0gMC4wO1xuXHRcdG10eF9yYXdbOF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbOV0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbMTBdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzExXSA9IDAuMDtcblx0XHRtdHhfcmF3WzEyXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1sxM10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbMTRdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzE1XSA9IDEuMDtcblxuXHRcdC8vVE9ETzogZml4IG1heCBleHBvcnRlciB0byByZW1vdmUgTmFOIHZhbHVlcyBpbiBqb2ludCAwIGludmVyc2UgYmluZCBwb3NlXG5cblx0XHRpZiAoaXNOYU4obXR4X3Jhd1swXSkpIHtcblx0XHRcdG10eF9yYXdbMF0gPSAxO1xuXHRcdFx0bXR4X3Jhd1sxXSA9IDA7XG5cdFx0XHRtdHhfcmF3WzJdID0gMDtcblx0XHRcdG10eF9yYXdbNF0gPSAwO1xuXHRcdFx0bXR4X3Jhd1s1XSA9IDE7XG5cdFx0XHRtdHhfcmF3WzZdID0gMDtcblx0XHRcdG10eF9yYXdbOF0gPSAwO1xuXHRcdFx0bXR4X3Jhd1s5XSA9IDA7XG5cdFx0XHRtdHhfcmF3WzEwXSA9IDE7XG5cdFx0XHRtdHhfcmF3WzEyXSA9IDA7XG5cdFx0XHRtdHhfcmF3WzEzXSA9IDA7XG5cdFx0XHRtdHhfcmF3WzE0XSA9IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gbXR4X3Jhdztcblx0fVxuXG59XG5cbmV4cG9ydCA9IEFXRFBhcnNlcjtcblxuY2xhc3MgQVdEQmxvY2tcbntcblx0cHVibGljIGlkOm51bWJlcjtcblx0cHVibGljIG5hbWU6c3RyaW5nO1xuXHRwdWJsaWMgZGF0YTphbnk7XG5cdHB1YmxpYyBsZW46YW55O1xuXHRwdWJsaWMgZ2VvSUQ6bnVtYmVyO1xuXHRwdWJsaWMgZXh0cmFzOk9iamVjdDtcblx0cHVibGljIGJ5dGVzOkJ5dGVBcnJheTtcblx0cHVibGljIGVycm9yTWVzc2FnZXM6QXJyYXk8c3RyaW5nPjtcblx0cHVibGljIHV2c0ZvclZlcnRleEFuaW1hdGlvbjpBcnJheTxBcnJheTxudW1iZXI+PjtcblxuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0fVxuXG5cdHB1YmxpYyBkaXNwb3NlKClcblx0e1xuXG5cdFx0dGhpcy5pZCA9IG51bGw7XG5cdFx0dGhpcy5ieXRlcyA9IG51bGw7XG5cdFx0dGhpcy5lcnJvck1lc3NhZ2VzID0gbnVsbDtcblx0XHR0aGlzLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG51bGw7XG5cblx0fVxuXG5cdHB1YmxpYyBhZGRFcnJvcihlcnJvck1zZzpzdHJpbmcpOnZvaWRcblx0e1xuXHRcdGlmICghdGhpcy5lcnJvck1lc3NhZ2VzKVxuXHRcdFx0dGhpcy5lcnJvck1lc3NhZ2VzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlcy5wdXNoKGVycm9yTXNnKTtcblx0fVxufVxuXG5jbGFzcyBBV0RQcm9wZXJ0aWVzXG57XG5cdHB1YmxpYyBzZXQoa2V5Om51bWJlciwgdmFsdWU6YW55KTp2b2lkXG5cdHtcblx0XHR0aGlzWyBrZXkudG9TdHJpbmcoKSBdID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgZ2V0KGtleTpudW1iZXIsIGZhbGxiYWNrOmFueSk6YW55XG5cdHtcblx0XHRpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkudG9TdHJpbmcoKSkpIHtcblx0XHRcdHJldHVybiB0aGlzW2tleS50b1N0cmluZygpXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbGxiYWNrO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqXG4gKi9cbmNsYXNzIEJpdEZsYWdzXG57XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE6bnVtYmVyID0gMTtcblx0cHVibGljIHN0YXRpYyBGTEFHMjpudW1iZXIgPSAyO1xuXHRwdWJsaWMgc3RhdGljIEZMQUczOm51bWJlciA9IDQ7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzQ6bnVtYmVyID0gODtcblx0cHVibGljIHN0YXRpYyBGTEFHNTpudW1iZXIgPSAxNjtcblx0cHVibGljIHN0YXRpYyBGTEFHNjpudW1iZXIgPSAzMjtcblx0cHVibGljIHN0YXRpYyBGTEFHNzpudW1iZXIgPSA2NDtcblx0cHVibGljIHN0YXRpYyBGTEFHODpudW1iZXIgPSAxMjg7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzk6bnVtYmVyID0gMjU2O1xuXHRwdWJsaWMgc3RhdGljIEZMQUcxMDpudW1iZXIgPSA1MTI7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzExOm51bWJlciA9IDEwMjQ7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzEyOm51bWJlciA9IDIwNDg7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzEzOm51bWJlciA9IDQwOTY7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE0Om51bWJlciA9IDgxOTI7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE1Om51bWJlciA9IDE2Mzg0O1xuXHRwdWJsaWMgc3RhdGljIEZMQUcxNjpudW1iZXIgPSAzMjc2ODtcblxuXHRwdWJsaWMgc3RhdGljIHRlc3QoZmxhZ3M6bnVtYmVyLCB0ZXN0RmxhZzpudW1iZXIpOmJvb2xlYW5cblx0e1xuXHRcdHJldHVybiAoZmxhZ3MgJiB0ZXN0RmxhZykgPT0gdGVzdEZsYWc7XG5cdH1cbn1cbiJdfQ==