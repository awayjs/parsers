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
var DirectionalLight = require("awayjs-display/lib/entities/DirectionalLight");
var PointLight = require("awayjs-display/lib/entities/PointLight");
var Camera = require("awayjs-display/lib/entities/Camera");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var TextField = require("awayjs-display/lib/entities/TextField");
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
        var returnArrayFont = this.getAssetByID(font_id, [AssetType.FONT]);
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
        var returnedArrayMaterial = this.getAssetByID(data_id, [AssetType.MATERIAL]);
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
                var textFormatArray = this.getAssetByID(format_id, [AssetType.TEXTFORMAT]);
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
                                    commandString += "\n                obj is used as mask";
                                }
                                else {
                                    // TODO: this object is masked by one or more objects defined by ids in mask-array
                                    commandString += "\n                obj is masked by " + mask_ids.length + " objects";
                                    for (var cm = 0; cm < mask_ids.length; cm++) {
                                        commandString += "\n                obj is masked by " + mask_ids[cm];
                                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXIudHMiXSwibmFtZXMiOlsiQVdEUGFyc2VyIiwiQVdEUGFyc2VyLmNvbnN0cnVjdG9yIiwiQVdEUGFyc2VyLnN1cHBvcnRzVHlwZSIsIkFXRFBhcnNlci5zdXBwb3J0c0RhdGEiLCJBV0RQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5TmFtZSIsIkFXRFBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiQVdEUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiQVdEUGFyc2VyLmRpc3Bvc2UiLCJBV0RQYXJzZXIucGFyc2VOZXh0QmxvY2siLCJBV0RQYXJzZXIucGFyc2VUZXNzZWxhdGVkRm9udCIsIkFXRFBhcnNlci5wYXJzZVRleHRGb3JtYXQiLCJBV0RQYXJzZXIucGFyZXNUZXh0RmllbGQiLCJBV0RQYXJzZXIucGFyc2VCaWxsQm9hcmRMaWJyYXJ5QmxvY2siLCJBV0RQYXJzZXIucGFyc2VNZXNoTGlicmFyeUJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlQXVkaW9CbG9jayIsIkFXRFBhcnNlci5wYXJzZVRpbWVMaW5lIiwiQVdEUGFyc2VyLnBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayIsIkFXRFBhcnNlci5wYXJzZVByaW1pdHZlcyIsIkFXRFBhcnNlci5wYXJzZUNvbnRhaW5lciIsIkFXRFBhcnNlci5wYXJzZU1lc2hJbnN0YW5jZSIsIkFXRFBhcnNlci5wYXJzZVNreWJveEluc3RhbmNlIiwiQVdEUGFyc2VyLnBhcnNlTGlnaHQiLCJBV0RQYXJzZXIucGFyc2VDYW1lcmEiLCJBV0RQYXJzZXIucGFyc2VMaWdodFBpY2tlciIsIkFXRFBhcnNlci5wYXJzZU1hdGVyaWFsIiwiQVdEUGFyc2VyLnBhcnNlTWF0ZXJpYWxfdjEiLCJBV0RQYXJzZXIucGFyc2VUZXh0dXJlIiwiQVdEUGFyc2VyLnBhcnNlQ3ViZVRleHR1cmUiLCJBV0RQYXJzZXIucGFyc2VTaGFyZWRNZXRob2RCbG9jayIsIkFXRFBhcnNlci5wYXJzZVNoYWRvd01ldGhvZEJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlQ29tbWFuZCIsIkFXRFBhcnNlci5wYXJzZU1ldGFEYXRhIiwiQVdEUGFyc2VyLnBhcnNlTmFtZVNwYWNlIiwiQVdEUGFyc2VyLnBhcnNlU2hhZG93TWV0aG9kTGlzdCIsIkFXRFBhcnNlci5wYXJzZVNrZWxldG9uIiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b25Qb3NlIiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b25BbmltYXRpb24iLCJBV0RQYXJzZXIucGFyc2VNZXNoUG9zZUFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZVZlcnRleEFuaW1hdGlvblNldCIsIkFXRFBhcnNlci5wYXJzZUFuaW1hdG9yU2V0IiwiQVdEUGFyc2VyLnBhcnNlU2hhcmVkTWV0aG9kTGlzdCIsIkFXRFBhcnNlci5wYXJzZVVzZXJBdHRyaWJ1dGVzIiwiQVdEUGFyc2VyLnBhcnNlUHJvcGVydGllcyIsIkFXRFBhcnNlci5wYXJzZUF0dHJWYWx1ZSIsIkFXRFBhcnNlci5wYXJzZUhlYWRlciIsIkFXRFBhcnNlci5nZXRVVkZvclZlcnRleEFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZVZhclN0ciIsIkFXRFBhcnNlci5nZXRBc3NldEJ5SUQiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdEFzc2V0IiwiQVdEUGFyc2VyLmdldERlZmF1bHRDdWJlVGV4dHVyZSIsIkFXRFBhcnNlci5yZWFkTnVtYmVyIiwiQVdEUGFyc2VyLnBhcnNlTWF0cml4M0QiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXgzMlJhd0RhdGEiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXg0M1Jhd0RhdGEiLCJBV0RCbG9jayIsIkFXREJsb2NrLmNvbnN0cnVjdG9yIiwiQVdEQmxvY2suZGlzcG9zZSIsIkFXREJsb2NrLmFkZEVycm9yIiwiQVdEUHJvcGVydGllcyIsIkFXRFByb3BlcnRpZXMuY29uc3RydWN0b3IiLCJBV0RQcm9wZXJ0aWVzLnNldCIsIkFXRFByb3BlcnRpZXMuZ2V0IiwiQml0RmxhZ3MiLCJCaXRGbGFncy5jb25zdHJ1Y3RvciIsIkJpdEZsYWdzLnRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLElBQU8sU0FBUyxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sUUFBUSxXQUFpQiwrQkFBK0IsQ0FBQyxDQUFDO0FBRWpFLElBQU8sZ0JBQWdCLFdBQWUsdUNBQXVDLENBQUMsQ0FBQztBQUMvRSxJQUFPLG1CQUFtQixXQUFjLDBDQUEwQyxDQUFDLENBQUM7QUFDcEYsSUFBTyxjQUFjLFdBQWUscUNBQXFDLENBQUMsQ0FBQztBQUMzRSxJQUFPLFFBQVEsV0FBaUIsK0JBQStCLENBQUMsQ0FBQztBQUNqRSxJQUFPLFFBQVEsV0FBaUIsK0JBQStCLENBQUMsQ0FBQztBQUNqRSxJQUFPLG1CQUFtQixXQUFjLHlDQUF5QyxDQUFDLENBQUM7QUFDbkYsSUFBTyxVQUFVLFdBQWdCLGdDQUFnQyxDQUFDLENBQUM7QUFDbkUsSUFBTyxTQUFTLFdBQWdCLG1DQUFtQyxDQUFDLENBQUM7QUFFckUsSUFBTyxVQUFVLFdBQWdCLG9DQUFvQyxDQUFDLENBQUM7QUFDdkUsSUFBTyxXQUFXLFdBQWdCLHFDQUFxQyxDQUFDLENBQUM7QUFHekUsSUFBTyxxQkFBcUIsV0FBYSxtREFBbUQsQ0FBQyxDQUFDO0FBQzlGLElBQU8sc0JBQXNCLFdBQWEsb0RBQW9ELENBQUMsQ0FBQztBQUNoRyxJQUFPLCtCQUErQixXQUFXLDZEQUE2RCxDQUFDLENBQUM7QUFDaEgsSUFBTyxpQkFBaUIsV0FBYyw0Q0FBNEMsQ0FBQyxDQUFDO0FBR3BGLElBQU8sZ0JBQWdCLFdBQWUsMkNBQTJDLENBQUMsQ0FBQztBQUNuRixJQUFPLFlBQVksV0FBZ0IsdUNBQXVDLENBQUMsQ0FBQztBQUc1RSxJQUFPLFNBQVMsV0FBZ0IsaUNBQWlDLENBQUMsQ0FBQztBQUVuRSxJQUFPLHNCQUFzQixXQUFhLHNEQUFz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Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzNDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFFMUNBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLEVBQUVBLDZDQUE2Q0E7UUFDdkZBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzdCQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM3QkEsSUFBSUEs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Y0FBY0EsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsQ0FBQ0E7Z0JBQ3hDQSxDQUFDQTtnQkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNCQSxhQUFhQSxHQUFDQSxJQUFJQSxDQUFDQTtvQkFDbkJBLElBQUlBLE9BQU9BLEdBQVVBLENBQUNBLENBQUNBO29CQUN2QkEsSUFBSUEsVUFBVUEsR0FBVUEsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxJQUFJQSxPQUFPQSxHQUFVQSxDQUFDQSxDQUFDQTtvQkFFdkJBLElBQUlBLFNBQVNBLEdBQWlCQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQTtvQkFDbERBLElBQUlBLFNBQVNBLEdBQWlCQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQTtvQkFDbERBLElBQUlBLEdBQUdBLEdBQWlCQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQTtvQkFFNUNBLE9BQU9BLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUUvQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBQ0EsSUFBSUE7d0JBQzlEQSxTQUFTQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxFQUFDQSxJQUFJQTt3QkFDOURBLFNBQVNBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLEdBQUlBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEVBQUNBLE9BQU9BO3dCQUVsRUEsU0FBU0EsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBQ0Es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QUNBLFVBQVVBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO1FBRTFSQSxJQUFJQSxjQUFjQSxHQUFpQkEsQ0FBQ0EscUJBQXFCQSxFQUFFQSxzQkFBc0JBLEVBQUVBLHFCQUFxQkEsRUFBRUEsdUJBQXVCQSxFQUFFQSx5QkFBeUJBLEVBQUVBLHNCQUFzQkEsRUFBRUEseUJBQXlCQSxFQUFFQSx1QkFBdUJBLENBQUNBLENBQUFBO1FBRXpPQSxNQUFNQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUdsQkEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLG9CQUFvQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9KQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsbUJBQW1CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0tBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUNySEEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsdUNBQXVDQTtnQkFDbk1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDckRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDeERBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNDQSxNQUFPQSxDQUFDQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFFL0NBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxtQkFBbUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3SkEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHNCQUFzQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNJQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFH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O1FBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFFQSxPQUFPQSxDQUFFQSxDQUFDQSxRQUFRQSxDQUFDQSxvREFBb0RBLENBQUNBLENBQUNBO1FBQ3hGQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNQQSxBQUNBQSw2QkFENkJBO1lBQ0hBLElBQUlBLENBQUNBLFNBQVVBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3pEQSxDQUFDQTtRQUVEQSxBQUNBQSxzREFEc0RBO1FBQ3REQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4REEsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1lBQ3RJQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFD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QVFBLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNFQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4REEsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO1lBQ3hKQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFTQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFVQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFXQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0R0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDeENBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLElBQUlBLENB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QUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUNyQ0EsSUFBSUEsU0FBU0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUM5REEsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLEVBQUVBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUNBLENBQUNBLENBQUNBO1FBQ3pXQSxJQUFJQSxnQkFBZ0JBLEdBQVVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQzlDQSxJQUFJQSxVQUFVQSxHQUFVQSxpQkFBaUJBLENBQUNBO1FBQzFDQSxJQUFJQSxVQUFVQSxHQUFpQkEsQ0FBQ0EsdUJBQXVCQSxFQUFFQSxZQUFZQSxFQUFFQSxrQkFB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QUNBLENBQUNBO29CQUMzQkEsZUFBZUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JFQSxDQUFDQTtZQUNGQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDUEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNCQSxlQUFlQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckVBLENBQUNBO1lBQ0ZBLENBQUNBO1lBRURBLEtBQUtBLENBQUNBLFlBQVlBLEdBQUdBLGVBQWVBLENBQUNBO1lBQ3JDQSxLQUFLQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFakJBLElBQUlBLG1CQUFtQkEsR0FBY0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7WUFFdEhBLEVBQUVBLENBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0ZBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xFQSxVQUFVQSxHQUE2QkEsbUJBQW1CQSxD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QSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdklBLEtBQUtBLENBQUNBO1lBQ1BBO2dCQUNDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFFREEsSUFBSUEsTUFBTUEsR0FBVUEsSUFBSUEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDM0NBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO1FBRWhDQSxJQUFJQSxtQkFBbUJBLEdBQWNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUFBO1FBRXRIQSxFQUFFQSxDQUFDQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRTVCQSxJQUFJQSxJQUFJQSxHQUFtREEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFdEJBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBRXhCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EseUNBQXlDQSxDQUFDQSxDQUFDQTtRQUMzRUEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQUFDQUEsNkJBRDZCQTtZQUNIQSxJQUFJQSxDQUFDQSxTQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUM1REEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbkJBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1FBQ3BIQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvRUEsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUUxQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFbkNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BLENBQUFBO1FBRW5DQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFN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QVVBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxJQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3pEQSxJQUFJQSxXQUFXQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ2hFQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsRUFBQ0EsU0FBU0EsQ0FBQ0Es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ZUFBZUEsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFBQTtnQkFFNUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUM5Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsdUNBQXVDQSxHQUFHQSxlQUFlQSxHQUFHQSw0QkFBNEJBLENBQUNBLENBQUNBO2dCQUMxSEEsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUNQQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFxQkEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRXREQSxDQUFDQTtnQkFFREEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDaENBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNwQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDN0NBLEdBQUdBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtB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QSxHQUFHQSxRQUFRQSxHQUFHQSwwQkFBMEJBLENBQUNBLENBQUNBO29CQUMxR0EsTUFBTUEsQ0FBQ0E7Z0JBQ1JBLENBQUNBO2dCQUVEQSxZQUFZQSxHQUFHQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUV0Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxZQUFZQSxDQUFDQSxRQUFRQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtnQkFDckNBLENBQUNBO2dCQUVEQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtnQkFFdENBLEtBQUtBLENBQUNBO1FBQ1JBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xCQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtZQUVwSEEsWUFBWUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckZBLFlBQVlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFFakRBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLFlBQVlBLENBQUFBO1FBRXpDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUNBQWlDQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN2REEsQ0FBQ0E7SUFFRkEsQ0FBQ0E7SUFFRGhDLGFBQWFBO0lBQ0xBLGlDQUFhQSxHQUFyQkEsVUFBc0JBLE9BQWNBO1FBRW5DaUMsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUNBLENBQUNBLENBQUNBO1FBRWpLQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5RUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOENBQThDQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2RkEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFFRGpDLGFBQWFBO0lBQ0xBLGtDQUFjQSxHQUF0QkEsVUFBdUJBLE9BQWNBO1FBRXBDa0MsSUFBSUEsRUFBRUEsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtRQUN2REEsSUFBSUEsZUFBZUEsR0FBVUEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDaERBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1lBQ2ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdDQUFnQ0EsR0FBR0EsRUFBRUEsR0FBR0EsY0FBY0EsR0FBR0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7SUFDeEZBLENBQUNBO0lBRURsQywyRkFBMkZBO0lBRTNGQSx3REFBd0RBO0lBQ2hEQSx5Q0FBcUJBLEdBQTdCQSxVQUE4QkEsS0FBZUEsRUFBRUEsT0FBY0E7UUFHNURtQyxJQUFJQSxVQUFVQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1FBQ2hFQSxJQUFJQSxZQUE2QkEsQ0FBQ0E7UUFDbENBLElBQUlBLEtBQUtBLEdBQWlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUV6WkEsSUFBSUEsUUFBZUEsQ0FBQ0E7UUFDcEJBLElBQUlBLGFBQXdCQSxDQUFBQTtRQUM1QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFVcEJBLEtBQUtBLElBQUlBO2dCQUNSQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLDRD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QUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUMvZEEsSUFBSUEsUUFBZUEsQ0FBQ0E7UUFDcEJBLElBQUlBLGFBQXdCQSxDQUFDQTtRQUU3QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFcEJBLEtBQUtBLEdBQUdBO2dCQUNQQSxrQkFBa0JBLEdBQUdBLElBQUlBLHVCQUF1QkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hJQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxHQUFHQTtnQkFDUEEsa0JBQWtCQSxHQUFHQSxJQUFJQSwwQkFBMEJBLEVBQUVBLENBQUNBO2dCQUN0REEsSUFBSUEsTUFBTUEsR0FBbUJBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO2dCQUMxQkEsa0JBQW1CQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDN1BBLEtBQUtBLENBQUNBO1lBQ1BBLEtBQUtBLEdBQUdBO2dCQUVQQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO2dCQUdqQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBRUEsU0FBU0EsQ0FBQ0EsT0FBT0Es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O1FBRTlEQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUV2REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeERBLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQzVEQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUN6REEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDNURBLENBQUNBO1FBRURBLEFBR0FBLHFGQUhxRkE7UUFFckZBLDZCQUE2QkE7UUFDN0JBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBO1FBRXBDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDckNBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBO1FBRXZDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxD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Q0E7SUFFT3RELHdDQUFvQkEsR0FBNUJBO1FBRUN1RCxJQUFJQSxPQUFPQSxHQUFpQkEsSUFBSUEsS0FBS0EsQ0FBU0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFFbERBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ2pCQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNqQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDbEJBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3BEQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBRWxCQSxBQUVBQSwwRUFGMEVBO1FBRTFFQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0Es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ckJBLGVBQU1BLEdBQVVBLElBQUlBLENBQUNBO0lBQ3JCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsS0FBS0EsQ0FBQ0E7SUFDdEJBLGVBQU1BLEdBQVVBLEtBQUtBLENBQUNBO0lBTXJDQSxlQUFDQTtBQUFEQSxDQXZCQSxBQXVCQ0EsSUFBQTtBQWhGRCxpQkFBUyxTQUFTLENBQUMiLCJmaWxlIjoiQVdEUGFyc2VyLmpzIiwic291cmNlUm9vdCI6Ii4uLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaXRtYXBEYXRhXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvQml0bWFwRGF0YVwiKTtcclxuaW1wb3J0IEJsZW5kTW9kZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9kYXRhL0JsZW5kTW9kZVwiKTtcclxuaW1wb3J0IEdlb21ldHJ5XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZGF0YS9HZW9tZXRyeVwiKTtcclxuaW1wb3J0IFN1Ykdlb21ldHJ5QmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZGF0YS9TdWJHZW9tZXRyeUJhc2VcIik7XHJcbmltcG9ydCBDdXJ2ZVN1Ykdlb21ldHJ5XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9kYXRhL0N1cnZlU3ViR2VvbWV0cnlcIik7XHJcbmltcG9ydCBUcmlhbmdsZVN1Ykdlb21ldHJ5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZGF0YS9UcmlhbmdsZVN1Ykdlb21ldHJ5XCIpO1xyXG5pbXBvcnQgQ29sb3JUcmFuc2Zvcm1cdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vQ29sb3JUcmFuc2Zvcm1cIik7XHJcbmltcG9ydCBNYXRyaXgzRFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vTWF0cml4M0RcIik7XHJcbmltcG9ydCBWZWN0b3IzRFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vVmVjdG9yM0RcIik7XHJcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XHJcbmltcG9ydCBVUkxSZXF1ZXN0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCIpO1xyXG5pbXBvcnQgQXNzZXRUeXBlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2xpYnJhcnkvQXNzZXRUeXBlXCIpO1xyXG5pbXBvcnQgSUFzc2V0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9JQXNzZXRcIik7XHJcbmltcG9ydCBQYXJzZXJCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUGFyc2VyQmFzZVwiKTtcclxuaW1wb3J0IFBhcnNlclV0aWxzXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUGFyc2VyVXRpbHNcIik7XHJcbmltcG9ydCBSZXNvdXJjZURlcGVuZGVuY3lcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1Jlc291cmNlRGVwZW5kZW5jeVwiKTtcclxuaW1wb3J0IFByb2plY3Rpb25CYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wcm9qZWN0aW9ucy9Qcm9qZWN0aW9uQmFzZVwiKTtcclxuaW1wb3J0IFBlcnNwZWN0aXZlUHJvamVjdGlvblx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wcm9qZWN0aW9ucy9QZXJzcGVjdGl2ZVByb2plY3Rpb25cIik7XHJcbmltcG9ydCBPcnRob2dyYXBoaWNQcm9qZWN0aW9uXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3Byb2plY3Rpb25zL09ydGhvZ3JhcGhpY1Byb2plY3Rpb25cIik7XHJcbmltcG9ydCBPcnRob2dyYXBoaWNPZmZDZW50ZXJQcm9qZWN0aW9uXHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvT3J0aG9ncmFwaGljT2ZmQ2VudGVyUHJvamVjdGlvblwiKTtcclxuaW1wb3J0IEJpdG1hcEN1YmVUZXh0dXJlXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvQml0bWFwQ3ViZVRleHR1cmVcIik7XHJcbmltcG9ydCBCaXRtYXBUZXh0dXJlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9CaXRtYXBUZXh0dXJlXCIpO1xyXG5pbXBvcnQgQ3ViZVRleHR1cmVCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9DdWJlVGV4dHVyZUJhc2VcIik7XHJcbmltcG9ydCBJbWFnZUN1YmVUZXh0dXJlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9JbWFnZUN1YmVUZXh0dXJlXCIpO1xyXG5pbXBvcnQgSW1hZ2VUZXh0dXJlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0ltYWdlVGV4dHVyZVwiKTtcclxuaW1wb3J0IFRleHR1cmUyREJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL1RleHR1cmUyREJhc2VcIik7XHJcbmltcG9ydCBUZXh0dXJlUHJveHlCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlUHJveHlCYXNlXCIpO1xyXG5pbXBvcnQgQnl0ZUFycmF5XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL0J5dGVBcnJheVwiKTtcclxuXHJcbmltcG9ydCBEaXNwbGF5T2JqZWN0Q29udGFpbmVyXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2NvbnRhaW5lcnMvRGlzcGxheU9iamVjdENvbnRhaW5lclwiKTtcclxuaW1wb3J0IERpc3BsYXlPYmplY3RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2Jhc2UvRGlzcGxheU9iamVjdFwiKTtcclxuaW1wb3J0IExpZ2h0QmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0xpZ2h0QmFzZVwiKTtcclxuaW1wb3J0IERpcmVjdGlvbmFsTGlnaHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0RpcmVjdGlvbmFsTGlnaHRcIik7XHJcbmltcG9ydCBQb2ludExpZ2h0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1BvaW50TGlnaHRcIik7XHJcbmltcG9ydCBDYW1lcmFcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9DYW1lcmFcIik7XHJcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xyXG5pbXBvcnQgVGV4dEZpZWxkXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1RleHRGaWVsZFwiKTtcclxuaW1wb3J0IEJpbGxib2FyZFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9CaWxsYm9hcmRcIik7XHJcbmltcG9ydCBTa3lib3hcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9Ta3lib3hcIik7XHJcbmltcG9ydCBNYXRlcmlhbEJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL01hdGVyaWFsQmFzZVwiKTtcclxuaW1wb3J0IExpZ2h0UGlja2VyQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL2xpZ2h0cGlja2Vycy9MaWdodFBpY2tlckJhc2VcIik7XHJcbmltcG9ydCBTdGF0aWNMaWdodFBpY2tlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9saWdodHBpY2tlcnMvU3RhdGljTGlnaHRQaWNrZXJcIik7XHJcbmltcG9ydCBDdWJlTWFwU2hhZG93TWFwcGVyXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL3NoYWRvd21hcHBlcnMvQ3ViZU1hcFNoYWRvd01hcHBlclwiKTtcclxuaW1wb3J0IERpcmVjdGlvbmFsU2hhZG93TWFwcGVyXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL0RpcmVjdGlvbmFsU2hhZG93TWFwcGVyXCIpO1xyXG5pbXBvcnQgU2hhZG93TWFwcGVyQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL3NoYWRvd21hcHBlcnMvU2hhZG93TWFwcGVyQmFzZVwiKTtcclxuaW1wb3J0IFByZWZhYkJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmVmYWJCYXNlXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlQ2Fwc3VsZVByZWZhYlx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUNhcHN1bGVQcmVmYWJcIik7XHJcbmltcG9ydCBQcmltaXRpdmVDb25lUHJlZmFiXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDb25lUHJlZmFiXCIpO1xyXG5pbXBvcnQgUHJpbWl0aXZlQ3ViZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ3ViZVByZWZhYlwiKTtcclxuaW1wb3J0IFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWJcIik7XHJcbmltcG9ydCBQcmltaXRpdmVQbGFuZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlUGxhbmVQcmVmYWJcIik7XHJcbmltcG9ydCBQcmltaXRpdmVTcGhlcmVQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVTcGhlcmVQcmVmYWJcIik7XHJcbmltcG9ydCBQcmltaXRpdmVUb3J1c1ByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlVG9ydXNQcmVmYWJcIik7XHJcblxyXG5pbXBvcnQgQW5pbWF0aW9uU2V0QmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL0FuaW1hdGlvblNldEJhc2VcIik7XHJcbmltcG9ydCBBbmltYXRvckJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL0FuaW1hdG9yQmFzZVwiKTtcclxuaW1wb3J0IFZlcnRleEFuaW1hdGlvblNldFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9WZXJ0ZXhBbmltYXRpb25TZXRcIik7XHJcbmltcG9ydCBWZXJ0ZXhBbmltYXRvclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1ZlcnRleEFuaW1hdG9yXCIpO1xyXG5pbXBvcnQgU2tlbGV0b25BbmltYXRpb25TZXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvU2tlbGV0b25BbmltYXRpb25TZXRcIik7XHJcbmltcG9ydCBTa2VsZXRvbkFuaW1hdG9yXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvU2tlbGV0b25BbmltYXRvclwiKTtcclxuaW1wb3J0IEpvaW50UG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Kb2ludFBvc2VcIik7XHJcbmltcG9ydCBTa2VsZXRvblx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL1NrZWxldG9uXCIpO1xyXG5pbXBvcnQgU2tlbGV0b25Qb3NlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL1NrZWxldG9uUG9zZVwiKTtcclxuaW1wb3J0IFNrZWxldG9uSm9pbnRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL1NrZWxldG9uSm9pbnRcIik7XHJcbmltcG9ydCBTa2VsZXRvbkNsaXBOb2RlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvbm9kZXMvU2tlbGV0b25DbGlwTm9kZVwiKTtcclxuaW1wb3J0IFZlcnRleENsaXBOb2RlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvbm9kZXMvVmVydGV4Q2xpcE5vZGVcIik7XHJcbmltcG9ydCBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL21hbmFnZXJzL0RlZmF1bHRNYXRlcmlhbE1hbmFnZXJcIik7XHJcblxyXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxNb2RlXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9NZXRob2RNYXRlcmlhbE1vZGVcIik7XHJcbmltcG9ydCBNZXRob2RNYXRlcmlhbFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9NZXRob2RNYXRlcmlhbFwiKTtcclxuaW1wb3J0IEFtYmllbnRFbnZNYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvQW1iaWVudEVudk1hcE1ldGhvZFwiKTtcclxuaW1wb3J0IERpZmZ1c2VEZXB0aE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9EaWZmdXNlRGVwdGhNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlQ2VsTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUNlbE1ldGhvZFwiKTtcclxuaW1wb3J0IERpZmZ1c2VHcmFkaWVudE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUdyYWRpZW50TWV0aG9kXCIpO1xyXG5pbXBvcnQgRGlmZnVzZUxpZ2h0TWFwTWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9EaWZmdXNlTGlnaHRNYXBNZXRob2RcIik7XHJcbmltcG9ydCBEaWZmdXNlV3JhcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9EaWZmdXNlV3JhcE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdEFscGhhTWFza01ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0QWxwaGFNYXNrTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0Q29sb3JNYXRyaXhNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdENvbG9yTWF0cml4TWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0Q29sb3JUcmFuc2Zvcm1NZXRob2RcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdEVudk1hcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RFbnZNYXBNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RGb2dNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RGb2dNZXRob2RcIik7XHJcbmltcG9ydCBFZmZlY3RGcmVzbmVsRW52TWFwTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZFwiKTtcclxuaW1wb3J0IEVmZmVjdExpZ2h0TWFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdExpZ2h0TWFwTWV0aG9kXCIpO1xyXG5pbXBvcnQgRWZmZWN0TWV0aG9kQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdE1ldGhvZEJhc2VcIik7XHJcbmltcG9ydCBFZmZlY3RSaW1MaWdodE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RSaW1MaWdodE1ldGhvZFwiKTtcclxuaW1wb3J0IE5vcm1hbFNpbXBsZVdhdGVyTWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9Ob3JtYWxTaW1wbGVXYXRlck1ldGhvZFwiKTtcclxuaW1wb3J0IFNoYWRvd0RpdGhlcmVkTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0RpdGhlcmVkTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93RmlsdGVyZWRNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93RmlsdGVyZWRNZXRob2RcIik7XHJcbmltcG9ydCBTaGFkb3dNZXRob2RCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93TWV0aG9kQmFzZVwiKTtcclxuaW1wb3J0IFNwZWN1bGFyRnJlc25lbE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJGcmVzbmVsTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93SGFyZE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd0hhcmRNZXRob2RcIik7XHJcbmltcG9ydCBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZFwiKTtcclxuaW1wb3J0IFNwZWN1bGFyQ2VsTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyQ2VsTWV0aG9kXCIpO1xyXG5pbXBvcnQgU3BlY3VsYXJQaG9uZ01ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhclBob25nTWV0aG9kXCIpO1xyXG5pbXBvcnQgU2hhZG93TmVhck1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd05lYXJNZXRob2RcIik7XHJcbmltcG9ydCBTaGFkb3dTb2Z0TWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93U29mdE1ldGhvZFwiKTtcclxuXHJcbmltcG9ydCBDdXJ2ZU1hdGVyaWFsXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvQ3VydmVNYXRlcmlhbFwiKVxyXG5pbXBvcnQgQmFzaWNNYXRlcmlhbFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL0Jhc2ljTWF0ZXJpYWxcIik7XHJcblxyXG5pbXBvcnQgVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSBcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZhY3Rvcmllcy9UaW1lbGluZVNjZW5lR3JhcGhGYWN0b3J5XCIpO1xyXG5pbXBvcnQgQVMyU2NlbmVHcmFwaEZhY3RvcnkgXHRcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZhY3Rvcmllcy9BUzJTY2VuZUdyYXBoRmFjdG9yeVwiKTtcclxuaW1wb3J0IE1vdmllQ2xpcCBcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvZGlzcGxheS9Nb3ZpZUNsaXBcIik7XHJcbmltcG9ydCBUaW1lbGluZUtleUZyYW1lIFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL3RpbWVsaW5lL1RpbWVsaW5lS2V5RnJhbWVcIik7XHJcbmltcG9ydCBBZGRDaGlsZENvbW1hbmQgXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi90aW1lbGluZS9jb21tYW5kcy9BZGRDaGlsZENvbW1hbmRcIik7XHJcbmltcG9ydCBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQgXHRcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL3RpbWVsaW5lL2NvbW1hbmRzL1VwZGF0ZVByb3BlcnR5Q29tbWFuZFwiKTtcclxuaW1wb3J0IFJlbW92ZUNoaWxkQ29tbWFuZCBcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi90aW1lbGluZS9jb21tYW5kcy9SZW1vdmVDaGlsZENvbW1hbmRcIik7XHJcbmltcG9ydCBBcHBseUFTMkRlcHRoc0NvbW1hbmRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvdGltZWxpbmUvY29tbWFuZHMvQXBwbHlBUzJEZXB0aHNDb21tYW5kXCIpO1xyXG5cclxuaW1wb3J0IEZvbnRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi90ZXh0L0ZvbnRcIik7XHJcbmltcG9ydCBUZXNzZWxhdGVkRm9udFRhYmxlXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3RleHQvVGVzc2VsYXRlZEZvbnRUYWJsZVwiKTtcclxuaW1wb3J0IFRleHRGb3JtYXRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvdGV4dC9UZXh0Rm9ybWF0XCIpO1xyXG4vKipcclxuICogQVdEUGFyc2VyIHByb3ZpZGVzIGEgcGFyc2VyIGZvciB0aGUgQVdEIGRhdGEgdHlwZS5cclxuICovXHJcbmNsYXNzIEFXRFBhcnNlciBleHRlbmRzIFBhcnNlckJhc2Vcclxue1xyXG5cdC8vc2V0IHRvIFwidHJ1ZVwiIHRvIGhhdmUgc29tZSBjb25zb2xlLmxvZ3MgaW4gdGhlIENvbnNvbGVcclxuXHRwcml2YXRlIF9kZWJ1Zzpib29sZWFuID0gdHJ1ZTtcclxuXHRwcml2YXRlIF9ieXRlRGF0YTpCeXRlQXJyYXk7XHJcblx0cHJpdmF0ZSBfc3RhcnRlZFBhcnNpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgX2N1cl9ibG9ja19pZDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfYmxvY2tzOkFycmF5PEFXREJsb2NrPjtcclxuXHRwcml2YXRlIF9uZXdCbG9ja0J5dGVzOkJ5dGVBcnJheTtcclxuXHRwcml2YXRlIF92ZXJzaW9uOkFycmF5PG51bWJlcj47XHJcblx0cHJpdmF0ZSBfY29tcHJlc3Npb246bnVtYmVyO1xyXG5cdHByaXZhdGUgX2FjY3VyYWN5T25CbG9ja3M6Ym9vbGVhbjtcclxuXHRwcml2YXRlIF9hY2N1cmFjeU1hdHJpeDpib29sZWFuO1xyXG5cdHByaXZhdGUgX2FjY3VyYWN5R2VvOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfYWNjdXJhY3lQcm9wczpib29sZWFuO1xyXG5cdHByaXZhdGUgX21hdHJpeE5yVHlwZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfZ2VvTnJUeXBlOm51bWJlcjtcclxuXHRwcml2YXRlIF9wcm9wc05yVHlwZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfc3RyZWFtaW5nOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfdGV4dHVyZV91c2VyczpPYmplY3QgPSB7fTtcclxuXHRwcml2YXRlIF9wYXJzZWRfaGVhZGVyOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIF9ib2R5OkJ5dGVBcnJheTtcclxuXHRwcml2YXRlIF9kZWZhdWx0VGV4dHVyZTpCaXRtYXBUZXh0dXJlOyAgICAgLy8gSFRNTCBJTUFHRSBURVhUVVJFID4/ICFcclxuXHRwcml2YXRlIF9jdWJlVGV4dHVyZXM6QXJyYXk8YW55PjtcclxuXHRwcml2YXRlIF9kZWZhdWx0Qml0bWFwTWF0ZXJpYWw6TWV0aG9kTWF0ZXJpYWw7XHJcblx0cHJpdmF0ZSBfZGVmYXVsdEN1YmVUZXh0dXJlOkJpdG1hcEN1YmVUZXh0dXJlO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIENPTVBSRVNTSU9OTU9ERV9MWk1BOnN0cmluZyA9IFwibHptYVwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgVU5DT01QUkVTU0VEOm51bWJlciA9IDA7XHJcblx0cHVibGljIHN0YXRpYyBERUZMQVRFOm51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBMWk1BOm51bWJlciA9IDI7XHJcblx0cHVibGljIHN0YXRpYyBJTlQ4Om51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBJTlQxNjpudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBzdGF0aWMgSU5UMzI6bnVtYmVyID0gMztcclxuXHRwdWJsaWMgc3RhdGljIFVJTlQ4Om51bWJlciA9IDQ7XHJcblx0cHVibGljIHN0YXRpYyBVSU5UMTY6bnVtYmVyID0gNTtcclxuXHRwdWJsaWMgc3RhdGljIFVJTlQzMjpudW1iZXIgPSA2O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQzMjpudW1iZXIgPSA3O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxPQVQ2NDpudW1iZXIgPSA4O1xyXG5cdHB1YmxpYyBzdGF0aWMgQk9PTDpudW1iZXIgPSAyMTtcclxuXHRwdWJsaWMgc3RhdGljIENPTE9SOm51bWJlciA9IDIyO1xyXG5cdHB1YmxpYyBzdGF0aWMgQkFERFI6bnVtYmVyID0gMjM7XHJcblx0cHVibGljIHN0YXRpYyBBV0RTVFJJTkc6bnVtYmVyID0gMzE7XHJcblx0cHVibGljIHN0YXRpYyBBV0RCWVRFQVJSQVk6bnVtYmVyID0gMzI7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1IyeDE6bnVtYmVyID0gNDE7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1IzeDE6bnVtYmVyID0gNDI7XHJcblx0cHVibGljIHN0YXRpYyBWRUNUT1I0eDE6bnVtYmVyID0gNDM7XHJcblx0cHVibGljIHN0YXRpYyBNVFgzeDI6bnVtYmVyID0gNDQ7XHJcblx0cHVibGljIHN0YXRpYyBNVFgzeDM6bnVtYmVyID0gNDU7XHJcblx0cHVibGljIHN0YXRpYyBNVFg0eDM6bnVtYmVyID0gNDY7XHJcblx0cHVibGljIHN0YXRpYyBNVFg0eDQ6bnVtYmVyID0gNDc7XHJcblxyXG5cdHByaXZhdGUgYmxlbmRNb2RlRGljOkFycmF5PHN0cmluZz47XHJcblx0cHJpdmF0ZSBfZGVwdGhTaXplRGljOkFycmF5PG51bWJlcj47XHJcblx0cHJpdmF0ZSBfYWxsRm9udFRhYmxlczpBcnJheTxUZXNzZWxhdGVkRm9udFRhYmxlPjtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIG5ldyBBV0RQYXJzZXIgb2JqZWN0LlxyXG5cdCAqIEBwYXJhbSB1cmkgVGhlIHVybCBvciBpZCBvZiB0aGUgZGF0YSBvciBmaWxlIHRvIGJlIHBhcnNlZC5cclxuXHQgKiBAcGFyYW0gZXh0cmEgVGhlIGhvbGRlciBmb3IgZXh0cmEgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIHBhcnNlciBtaWdodCBuZWVkLlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcihVUkxMb2FkZXJEYXRhRm9ybWF0LkFSUkFZX0JVRkZFUik7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzID0gbmV3IEFycmF5PEFXREJsb2NrPigpO1xyXG5cdFx0dGhpcy5fYmxvY2tzWzBdID0gbmV3IEFXREJsb2NrKCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbMF0uZGF0YSA9IG51bGw7IC8vIFplcm8gYWRkcmVzcyBtZWFucyBudWxsIGluIEFXRFxyXG5cclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljID0gbmV3IEFycmF5PHN0cmluZz4oKTsgLy8gdXNlZCB0byB0cmFuc2xhdGUgaW50cyB0byBibGVuZE1vZGUtc3RyaW5nc1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTk9STUFMKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkFERCk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5BTFBIQSk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5EQVJLRU4pO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuRElGRkVSRU5DRSk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5FUkFTRSk7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5IQVJETElHSFQpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuSU5WRVJUKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkxBWUVSKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkxJR0hURU4pO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTVVMVElQTFkpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTk9STUFMKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk9WRVJMQVkpO1xyXG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuU0NSRUVOKTtcclxuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLlNIQURFUik7XHJcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5PVkVSTEFZKTtcclxuXHJcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMgPSBuZXcgQXJyYXk8bnVtYmVyPigpOyAvLyB1c2VkIHRvIHRyYW5zbGF0ZSBpbnRzIHRvIGRlcHRoU2l6ZS12YWx1ZXNcclxuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDI1Nik7XHJcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMucHVzaCg1MTIpO1xyXG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMjA0OCk7XHJcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMucHVzaCgxMDI0KTtcclxuXHRcdHRoaXMuX3ZlcnNpb24gPSBBcnJheTxudW1iZXI+KCk7IC8vIHdpbGwgY29udGFpbiAyIGludCAobWFqb3ItdmVyc2lvbiwgbWlub3ItdmVyc2lvbikgZm9yIGF3ZC12ZXJzaW9uLWNoZWNrXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgYSBnaXZlbiBmaWxlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYnkgdGhlIHBhcnNlci5cclxuXHQgKiBAcGFyYW0gZXh0ZW5zaW9uIFRoZSBmaWxlIGV4dGVuc2lvbiBvZiBhIHBvdGVudGlhbCBmaWxlIHRvIGJlIHBhcnNlZC5cclxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBmaWxlIHR5cGUgaXMgc3VwcG9ydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNUeXBlKGV4dGVuc2lvbjpzdHJpbmcpOmJvb2xlYW5cclxuXHR7XHJcblx0XHRleHRlbnNpb24gPSBleHRlbnNpb24udG9Mb3dlckNhc2UoKTtcclxuXHRcdHJldHVybiBleHRlbnNpb24gPT0gXCJhd2RcIjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRlc3RzIHdoZXRoZXIgYSBkYXRhIGJsb2NrIGNhbiBiZSBwYXJzZWQgYnkgdGhlIHBhcnNlci5cclxuXHQgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBibG9jayB0byBwb3RlbnRpYWxseSBiZSBwYXJzZWQuXHJcblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZGF0YSBpcyBzdXBwb3J0ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c0RhdGEoZGF0YTphbnkpOmJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKFBhcnNlclV0aWxzLnRvU3RyaW5nKGRhdGEsIDMpID09ICdBV0QnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBpbmhlcml0RG9jXHJcblx0ICovXHJcblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3kocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSlcclxuXHR7XHJcblx0XHQvLyB0aGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gRGVwZW5kZW5jeSBoYXMgZmluaXNoZWQgbG9hZGluZy5cclxuXHRcdC8vIHRoZSBBc3NldHMgd2FpdGluZyBmb3IgdGhpcyBCaXRtYXAsIGNhbiBiZSBUZXh0dXJlIG9yIEN1YmVUZXh0dXJlLlxyXG5cdFx0Ly8gaWYgdGhlIEJpdG1hcCBpcyBhd2FpdGVkIGJ5IGEgQ3ViZVRleHR1cmUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXRzIHRoZSBsYXN0IEJpdG1hcCBvZiB0aGUgQ3ViZVRleHR1cmUsXHJcblx0XHQvLyBzbyB3ZSBrbm93IGlmIHdlIGhhdmUgdG8gZmluYWxpemUgdGhlIEFzc2V0IChDdWJlVGV4dHVyZSkgb3Igbm90LlxyXG5cdFx0aWYgKHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0dmFyIGlzQ3ViZVRleHR1cmVBcnJheTpBcnJheTxzdHJpbmc+ID0gcmVzb3VyY2VEZXBlbmRlbmN5LmlkLnNwbGl0KFwiI1wiKTtcclxuXHRcdFx0dmFyIHJlc3NvdXJjZUlEOnN0cmluZyA9IGlzQ3ViZVRleHR1cmVBcnJheVswXTtcclxuXHRcdFx0dmFyIGFzc2V0OlRleHR1cmVQcm94eUJhc2U7XHJcblx0XHRcdHZhciB0aGlzQml0bWFwVGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xyXG5cdFx0XHR2YXIgYmxvY2s6QVdEQmxvY2s7XHJcblxyXG5cdFx0XHRpZiAoaXNDdWJlVGV4dHVyZUFycmF5Lmxlbmd0aCA9PSAxKSAvLyBOb3QgYSBjdWJlIHRleHR1cmVcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFzc2V0ID0gPFRleHR1cmUyREJhc2U+IHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHNbMF07XHJcblx0XHRcdFx0aWYgKGFzc2V0KSB7XHJcblx0XHRcdFx0XHR2YXIgbWF0Ok1ldGhvZE1hdGVyaWFsO1xyXG5cdFx0XHRcdFx0dmFyIHVzZXJzOkFycmF5PHN0cmluZz47XHJcblxyXG5cdFx0XHRcdFx0YmxvY2sgPSB0aGlzLl9ibG9ja3NbIHJlc291cmNlRGVwZW5kZW5jeS5pZCBdO1xyXG5cdFx0XHRcdFx0YmxvY2suZGF0YSA9IGFzc2V0OyAvLyBTdG9yZSBmaW5pc2hlZCBhc3NldFxyXG5cclxuXHRcdFx0XHRcdC8vIFJlc2V0IG5hbWUgb2YgdGV4dHVyZSB0byB0aGUgb25lIGRlZmluZWQgaW4gdGhlIEFXRCBmaWxlLFxyXG5cdFx0XHRcdFx0Ly8gYXMgb3Bwb3NlZCB0byB3aGF0ZXZlciB0aGUgaW1hZ2UgcGFyc2VyIGNhbWUgdXAgd2l0aC5cclxuXHRcdFx0XHRcdGFzc2V0LnJlc2V0QXNzZXRQYXRoKGJsb2NrLm5hbWUsIG51bGwsIHRydWUpO1xyXG5cdFx0XHRcdFx0YmxvY2submFtZSA9IGFzc2V0Lm5hbWU7XHJcblx0XHRcdFx0XHQvLyBGaW5hbGl6ZSB0ZXh0dXJlIGFzc2V0IHRvIGRpc3BhdGNoIHRleHR1cmUgZXZlbnQsIHdoaWNoIHdhc1xyXG5cdFx0XHRcdFx0Ly8gcHJldmlvdXNseSBzdXBwcmVzc2VkIHdoaWxlIHRoZSBkZXBlbmRlbmN5IHdhcyBsb2FkZWQuXHJcblx0XHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGxvYWRlZCBCaXRtYXAgZm9yIHRleHR1cmVcIik7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIHRleHR1cmU6IE5hbWUgPSBcIiArIGJsb2NrLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGlzQ3ViZVRleHR1cmVBcnJheS5sZW5ndGggPiAxKSAvLyBDdWJlIFRleHR1cmVcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXNCaXRtYXBUZXh0dXJlID0gPEJpdG1hcFRleHR1cmU+IHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHNbMF07XHJcblxyXG5cdFx0XHRcdHZhciB0eDpJbWFnZVRleHR1cmUgPSA8SW1hZ2VUZXh0dXJlPiB0aGlzQml0bWFwVGV4dHVyZTtcclxuXHJcblx0XHRcdFx0dGhpcy5fY3ViZVRleHR1cmVzWyBpc0N1YmVUZXh0dXJlQXJyYXlbMV0gXSA9IHR4Lmh0bWxJbWFnZUVsZW1lbnQ7IC8vID9cclxuXHRcdFx0XHR0aGlzLl90ZXh0dXJlX3VzZXJzW3Jlc3NvdXJjZUlEXS5wdXNoKDEpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGxvYWRlZCBCaXRtYXAgXCIgKyB0aGlzLl90ZXh0dXJlX3VzZXJzW3Jlc3NvdXJjZUlEXS5sZW5ndGggKyBcIiAvIDYgZm9yIEN1YmV0ZXh0dXJlXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5fdGV4dHVyZV91c2Vyc1tyZXNzb3VyY2VJRF0ubGVuZ3RoID09IHRoaXMuX2N1YmVUZXh0dXJlcy5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgcG9zWDphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbMF07XHJcblx0XHRcdFx0XHR2YXIgbmVnWDphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbMV07XHJcblx0XHRcdFx0XHR2YXIgcG9zWTphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbMl07XHJcblx0XHRcdFx0XHR2YXIgbmVnWTphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbM107XHJcblx0XHRcdFx0XHR2YXIgcG9zWjphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbNF07XHJcblx0XHRcdFx0XHR2YXIgbmVnWjphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbNV07XHJcblxyXG5cdFx0XHRcdFx0YXNzZXQgPSA8VGV4dHVyZVByb3h5QmFzZT4gbmV3IEltYWdlQ3ViZVRleHR1cmUocG9zWCwgbmVnWCwgcG9zWSwgbmVnWSwgcG9zWiwgbmVnWik7XHJcblx0XHRcdFx0XHRibG9jayA9IHRoaXMuX2Jsb2Nrc1tyZXNzb3VyY2VJRF07XHJcblx0XHRcdFx0XHRibG9jay5kYXRhID0gYXNzZXQ7IC8vIFN0b3JlIGZpbmlzaGVkIGFzc2V0XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVzZXQgbmFtZSBvZiB0ZXh0dXJlIHRvIHRoZSBvbmUgZGVmaW5lZCBpbiB0aGUgQVdEIGZpbGUsXHJcblx0XHRcdFx0XHQvLyBhcyBvcHBvc2VkIHRvIHdoYXRldmVyIHRoZSBpbWFnZSBwYXJzZXIgY2FtZSB1cCB3aXRoLlxyXG5cdFx0XHRcdFx0YXNzZXQucmVzZXRBc3NldFBhdGgoYmxvY2submFtZSwgbnVsbCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRibG9jay5uYW1lID0gYXNzZXQubmFtZTtcclxuXHRcdFx0XHRcdC8vIEZpbmFsaXplIHRleHR1cmUgYXNzZXQgdG8gZGlzcGF0Y2ggdGV4dHVyZSBldmVudCwgd2hpY2ggd2FzXHJcblx0XHRcdFx0XHQvLyBwcmV2aW91c2x5IHN1cHByZXNzZWQgd2hpbGUgdGhlIGRlcGVuZGVuY3kgd2FzIGxvYWRlZC5cclxuXHRcdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0KTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBDdWJlVGV4dHVyZTogTmFtZSA9IFwiICsgYmxvY2submFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGluaGVyaXREb2NcclxuXHQgKi9cclxuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeUZhaWx1cmUocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSlcclxuXHR7XHJcblx0XHQvL25vdCB1c2VkIC0gaWYgYSBkZXBlbmRjeSBmYWlscywgdGhlIGF3YWl0aW5nIFRleHR1cmUgb3IgQ3ViZVRleHR1cmUgd2lsbCBuZXZlciBiZSBmaW5hbGl6ZWQsIGFuZCB0aGUgZGVmYXVsdC1iaXRtYXBzIHdpbGwgYmUgdXNlZC5cclxuXHRcdC8vIHRoaXMgbWVhbnMsIHRoYXQgaWYgb25lIEJpdG1hcCBvZiBhIEN1YmVUZXh0dXJlIGZhaWxzLCB0aGUgQ3ViZVRleHR1cmUgd2lsbCBoYXZlIHRoZSBEZWZhdWx0VGV4dHVyZSBhcHBsaWVkIGZvciBhbGwgc2l4IEJpdG1hcHMuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNvbHZlIGEgZGVwZW5kZW5jeSBuYW1lXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VEZXBlbmRlbmN5IFRoZSBkZXBlbmRlbmN5IHRvIGJlIHJlc29sdmVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5TmFtZShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5LCBhc3NldDpJQXNzZXQpOnN0cmluZ1xyXG5cdHtcclxuXHRcdHZhciBvbGROYW1lOnN0cmluZyA9IGFzc2V0Lm5hbWU7XHJcblxyXG5cdFx0aWYgKGFzc2V0KSB7XHJcblx0XHRcdHZhciBibG9jazpBV0RCbG9jayA9IHRoaXMuX2Jsb2Nrc1twYXJzZUludChyZXNvdXJjZURlcGVuZGVuY3kuaWQpXTtcclxuXHRcdFx0Ly8gUmVzZXQgbmFtZSBvZiB0ZXh0dXJlIHRvIHRoZSBvbmUgZGVmaW5lZCBpbiB0aGUgQVdEIGZpbGUsXHJcblx0XHRcdC8vIGFzIG9wcG9zZWQgdG8gd2hhdGV2ZXIgdGhlIGltYWdlIHBhcnNlciBjYW1lIHVwIHdpdGguXHJcblx0XHRcdGFzc2V0LnJlc2V0QXNzZXRQYXRoKGJsb2NrLm5hbWUsIG51bGwsIHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBuZXdOYW1lOnN0cmluZyA9IGFzc2V0Lm5hbWU7XHJcblxyXG5cdFx0YXNzZXQubmFtZSA9IG9sZE5hbWU7XHJcblxyXG5cdFx0cmV0dXJuIG5ld05hbWU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGluaGVyaXREb2NcclxuXHQgKi9cclxuXHRwdWJsaWMgX3BQcm9jZWVkUGFyc2luZygpOmJvb2xlYW5cclxuXHR7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9zdGFydGVkUGFyc2luZykge1xyXG5cdFx0XHR0aGlzLl9ieXRlRGF0YSA9IHRoaXMuX3BHZXRCeXRlRGF0YSgpOy8vZ2V0Qnl0ZURhdGEoKTtcclxuXHRcdFx0dGhpcy5fc3RhcnRlZFBhcnNpbmcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5fcGFyc2VkX2hlYWRlcikge1xyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vIExJVFRMRV9FTkRJQU4gLSBEZWZhdWx0IGZvciBBcnJheUJ1ZmZlciAvIE5vdCBpbXBsZW1lbnRlZCBpbiBCeXRlQXJyYXlcclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vdGhpcy5fYnl0ZURhdGEuZW5kaWFuID0gRW5kaWFuLkxJVFRMRV9FTkRJQU47XHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vIFBhcnNlIGhlYWRlciBhbmQgZGVjb21wcmVzcyBib2R5IGlmIG5lZWRlZFxyXG5cdFx0XHR0aGlzLnBhcnNlSGVhZGVyKCk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuX2NvbXByZXNzaW9uKSB7XHJcblxyXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkRFRkxBVEU6XHJcblx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuTFpNQTpcclxuXHRcdFx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0NvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQnKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VTkNPTVBSRVNTRUQ6XHJcblx0XHRcdFx0XHR0aGlzLl9ib2R5ID0gdGhpcy5fYnl0ZURhdGE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdFx0Ly8gQ29tcHJlc3NlZCBBV0QgRm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZFxyXG5cdFx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0XHQvKlxyXG5cdFx0XHRcdCBjYXNlIEFXRFBhcnNlci5ERUZMQVRFOlxyXG5cclxuXHRcdFx0XHQgdGhpcy5fYm9keSA9IG5ldyBCeXRlQXJyYXkoKTtcclxuXHRcdFx0XHQgdGhpcy5fYnl0ZURhdGEucmVhZEJ5dGVzKHRoaXMuX2JvZHksIDAsIHRoaXMuX2J5dGVEYXRhLmdldEJ5dGVzQXZhaWxhYmxlKCkpO1xyXG5cdFx0XHRcdCB0aGlzLl9ib2R5LnVuY29tcHJlc3MoKTtcclxuXHJcblx0XHRcdFx0IGJyZWFrO1xyXG5cdFx0XHRcdCBjYXNlIEFXRFBhcnNlci5MWk1BOlxyXG5cclxuXHRcdFx0XHQgdGhpcy5fYm9keSA9IG5ldyBCeXRlQXJyYXkoKTtcclxuXHRcdFx0XHQgdGhpcy5fYnl0ZURhdGEucmVhZEJ5dGVzKHRoaXMuX2JvZHksIDAsIHRoaXMuX2J5dGVEYXRhLmdldEJ5dGVzQXZhaWxhYmxlKCkpO1xyXG5cdFx0XHRcdCB0aGlzLl9ib2R5LnVuY29tcHJlc3MoQ09NUFJFU1NJT05NT0RFX0xaTUEpO1xyXG5cclxuXHRcdFx0XHQgYnJlYWs7XHJcblx0XHRcdFx0IC8vKi9cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuX3BhcnNlZF9oZWFkZXIgPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vIExJVFRMRV9FTkRJQU4gLSBEZWZhdWx0IGZvciBBcnJheUJ1ZmZlciAvIE5vdCBpbXBsZW1lbnRlZCBpbiBCeXRlQXJyYXlcclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vdGhpcy5fYm9keS5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjsvLyBTaG91bGQgYmUgZGVmYXVsdFxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX2JvZHkpIHtcclxuXHJcblx0XHRcdHdoaWxlICh0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCkgPiAwICYmICF0aGlzLnBhcnNpbmdQYXVzZWQpIC8vJiYgdGhpcy5fcEhhc1RpbWUoKSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLnBhcnNlTmV4dEJsb2NrKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly8gUmV0dXJuIGNvbXBsZXRlIHN0YXR1c1xyXG5cdFx0XHRpZiAodGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpID09IDApIHtcclxuXHRcdFx0XHR0aGlzLmRpc3Bvc2UoKTtcclxuXHRcdFx0XHRyZXR1cm4gIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAgUGFyc2VyQmFzZS5NT1JFX1RPX1BBUlNFO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0c3dpdGNoICh0aGlzLl9jb21wcmVzc2lvbikge1xyXG5cclxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5ERUZMQVRFOlxyXG5cdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkxaTUE6XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiKCEpIEFXRFBhcnNlciBFcnJvcjogQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCAoISlcIik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIEVycm9yIC0gbW9zdCBsaWtlbHkgX2JvZHkgbm90IHNldCBiZWNhdXNlIHdlIGRvIG5vdCBzdXBwb3J0IGNvbXByZXNzaW9uLlxyXG5cdFx0XHRyZXR1cm4gIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgX3BTdGFydFBhcnNpbmcoZnJhbWVMaW1pdDpudW1iZXIpXHJcblx0e1xyXG5cdFx0c3VwZXIuX3BTdGFydFBhcnNpbmcoZnJhbWVMaW1pdCk7XHJcblxyXG5cdFx0Ly9jcmVhdGUgYSBjb250ZW50IG9iamVjdCBmb3IgTG9hZGVyc1xyXG5cdFx0dGhpcy5fcENvbnRlbnQgPSBuZXcgRGlzcGxheU9iamVjdENvbnRhaW5lcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBkaXNwb3NlKCk6dm9pZFxyXG5cdHtcclxuXHJcblx0XHRmb3IgKHZhciBjIGluIHRoaXMuX2Jsb2Nrcykge1xyXG5cclxuXHRcdFx0dmFyIGI6QVdEQmxvY2sgPSA8QVdEQmxvY2s+IHRoaXMuX2Jsb2Nrc1sgYyBdO1xyXG5cdFx0XHRiLmRpc3Bvc2UoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZU5leHRCbG9jaygpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgYmxvY2s6QVdEQmxvY2s7XHJcblx0XHR2YXIgYXNzZXREYXRhOklBc3NldDtcclxuXHRcdHZhciBpc1BhcnNlZDpib29sZWFuID0gZmFsc2U7XHJcblx0XHR2YXIgbnM6bnVtYmVyO1xyXG5cdFx0dmFyIHR5cGU6bnVtYmVyO1xyXG5cdFx0dmFyIGZsYWdzOm51bWJlcjtcclxuXHRcdHZhciBsZW46bnVtYmVyO1xyXG5cclxuXHRcdHRoaXMuX2N1cl9ibG9ja19pZCA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0bnMgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHR5cGUgPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdGZsYWdzID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRsZW4gPSB0aGlzLl9ib2R5LnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdHZhciBibG9ja0NvbXByZXNzaW9uOmJvb2xlYW4gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNCk7XHJcblx0XHR2YXIgYmxvY2tDb21wcmVzc2lvbkxaTUE6Ym9vbGVhbiA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUc1KTtcclxuXHJcblx0XHRpZiAodGhpcy5fYWNjdXJhY3lPbkJsb2Nrcykge1xyXG5cdFx0XHR0aGlzLl9hY2N1cmFjeU1hdHJpeCA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUcxKTtcclxuXHRcdFx0dGhpcy5fYWNjdXJhY3lHZW8gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMik7XHJcblx0XHRcdHRoaXMuX2FjY3VyYWN5UHJvcHMgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMyk7XHJcblx0XHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuX2FjY3VyYWN5R2VvKSB7XHJcblx0XHRcdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuX2FjY3VyYWN5TWF0cml4KSB7XHJcblx0XHRcdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fYWNjdXJhY3lQcm9wcykge1xyXG5cdFx0XHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgYmxvY2tFbmRBbGw6bnVtYmVyID0gdGhpcy5fYm9keS5wb3NpdGlvbiArIGxlbjtcclxuXHJcblx0XHRpZiAobGVuID4gdGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpKSB7XHJcblx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0FXRDIgYmxvY2sgbGVuZ3RoIGlzIGJpZ2dlciB0aGFuIHRoZSBieXRlcyB0aGF0IGFyZSBhdmFpbGFibGUhJyk7XHJcblx0XHRcdHRoaXMuX2JvZHkucG9zaXRpb24gKz0gdGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzID0gbmV3IEJ5dGVBcnJheSgpO1xyXG5cclxuXHJcblx0XHR0aGlzLl9ib2R5LnJlYWRCeXRlcyh0aGlzLl9uZXdCbG9ja0J5dGVzLCAwLCBsZW4pO1xyXG5cclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQ29tcHJlc3NlZCBBV0QgRm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZFxyXG5cclxuXHRcdGlmIChibG9ja0NvbXByZXNzaW9uKSB7XHJcblx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0NvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQnKTtcclxuXHJcblx0XHRcdC8qXHJcblx0XHRcdCBpZiAoYmxvY2tDb21wcmVzc2lvbkxaTUEpXHJcblx0XHRcdCB7XHJcblx0XHRcdCB0aGlzLl9uZXdCbG9ja0J5dGVzLnVuY29tcHJlc3MoQVdEUGFyc2VyLkNPTVBSRVNTSU9OTU9ERV9MWk1BKTtcclxuXHRcdFx0IH1cclxuXHRcdFx0IGVsc2VcclxuXHRcdFx0IHtcclxuXHRcdFx0IHRoaXMuX25ld0Jsb2NrQnl0ZXMudW5jb21wcmVzcygpO1xyXG5cdFx0XHQgfVxyXG5cdFx0XHQgKi9cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBMSVRUTEVfRU5ESUFOIC0gRGVmYXVsdCBmb3IgQXJyYXlCdWZmZXIgLyBOb3QgaW1wbGVtZW50ZWQgaW4gQnl0ZUFycmF5XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vdGhpcy5fbmV3QmxvY2tCeXRlcy5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjtcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSAwO1xyXG5cdFx0YmxvY2sgPSBuZXcgQVdEQmxvY2soKTtcclxuXHRcdGJsb2NrLmxlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW47XHJcblx0XHRibG9jay5pZCA9IHRoaXMuX2N1cl9ibG9ja19pZDtcclxuXHJcblx0XHR2YXIgYmxvY2tFbmRCbG9jazpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGVuO1xyXG5cclxuXHRcdGlmIChibG9ja0NvbXByZXNzaW9uKSB7XHJcblx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0NvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQnKTtcclxuXHRcdFx0Ly9ibG9ja0VuZEJsb2NrICAgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgdGhpcy5fbmV3QmxvY2tCeXRlcy5sZW5ndGg7XHJcblx0XHRcdC8vYmxvY2subGVuICAgICAgID0gYmxvY2tFbmRCbG9jaztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJBV0RCbG9jazogIElEID0gXCIgKyB0aGlzLl9jdXJfYmxvY2tfaWQgKyBcIiB8IFR5cGVJRCA9IFwiICsgdHlwZSArIFwiIHwgQ29tcHJlc3Npb24gPSBcIiArIGJsb2NrQ29tcHJlc3Npb24gKyBcIiB8IE1hdHJpeC1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5TWF0cml4ICsgXCIgfCBHZW9tZXRyeS1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5R2VvICsgXCIgfCBQcm9wZXJ0aWVzLVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lQcm9wcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW3RoaXMuX2N1cl9ibG9ja19pZF0gPSBibG9jaztcclxuXHJcblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMykgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMCkpIHtcclxuXHRcdFx0Ly8gcHJvYmFibHkgc2hvdWxkIGNvbnRhaW4gc29tZSBpbmZvIGFib3V0IHRoZSB0eXBlIG9mIGFuaW1hdGlvblxyXG5cdFx0XHR2YXIgZmFjdG9yeSA9IG5ldyBBUzJTY2VuZUdyYXBoRmFjdG9yeSgpO1xyXG5cclxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSAyNDpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoTGlicmFyeUJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI1OlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUJpbGxCb2FyZExpYnJhcnlCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA0NDpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VBdWRpb0Jsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCwgZmFjdG9yeSk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEzMzpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VUaW1lTGluZSh0aGlzLl9jdXJfYmxvY2tfaWQsIGZhY3RvcnkpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMzQ6XHJcblx0XHRcdFx0XHR0aGlzLnBhcmVzVGV4dEZpZWxkKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEzNTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VUZXNzZWxhdGVkRm9udCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMzY6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGV4dEZvcm1hdCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA+IDIpfHwoKHRoaXMuX3ZlcnNpb25bMF0gPj0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPj0gMSkpKSB7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIDExOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVByaW1pdHZlcyh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAzMTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa3lib3hJbnN0YW5jZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA0MTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VMaWdodCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA0MjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VDYW1lcmEodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHQvLyAgY2FzZSA0MzpcclxuXHRcdFx0XHQvLyAgICAgIHBhcnNlVGV4dHVyZVByb2plY3RvcihfY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHQvLyAgICAgIGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHQvLyAgICAgIGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDUxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUxpZ2h0UGlja2VyKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDgxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1hdGVyaWFsX3YxKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDgzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUN1YmVUZXh0dXJlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDkxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYXJlZE1ldGhvZEJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDkyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYWRvd01ldGhvZEJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDExMTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoUG9zZUFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQsIHRydWUpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMTI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaFBvc2VBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTEzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVZlcnRleEFuaW1hdGlvblNldCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMjI6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQW5pbWF0b3JTZXQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjUzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZUNvbW1hbmQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vKi9cclxuXHRcdH1cclxuXHRcdC8vKlxyXG5cdFx0aWYgKGlzUGFyc2VkID09IGZhbHNlKSB7XHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyMjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VDb250YWluZXIodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjM6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaEluc3RhbmNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDgxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1hdGVyaWFsKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDgyOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRleHR1cmUodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTAxOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNrZWxldG9uKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEwMjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa2VsZXRvblBvc2UodGhpcy5fY3VyX2Jsb2NrX2lkKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTAzOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNrZWxldG9uQW5pbWF0aW9uKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEyMTpcclxuXHRcdFx0XHQvL3RoaXMucGFyc2VVVkFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdC8vYnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyNTQ6XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlTmFtZVNwYWNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI1NTpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXRhRGF0YSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkFXREJsb2NrOiAgIFVua25vd24gQmxvY2tUeXBlICAoQmxvY2tJRCA9IFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIpIC0gU2tpcCBcIiArIGxlbiArIFwiIGJ5dGVzXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArPSBsZW47XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8qL1xyXG5cclxuXHRcdHZhciBtc2dDbnQ6bnVtYmVyID0gMDtcclxuXHRcdGlmICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID09IGJsb2NrRW5kQmxvY2spIHtcclxuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdFx0aWYgKGJsb2NrLmVycm9yTWVzc2FnZXMpIHtcclxuXHRcdFx0XHRcdHdoaWxlIChtc2dDbnQgPCBibG9jay5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgKCEpIEVycm9yOiBcIiArIGJsb2NrLmVycm9yTWVzc2FnZXNbbXNnQ250XSArIFwiICghKVwiKTtcclxuXHRcdFx0XHRcdFx0bXNnQ250Kys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiXFxuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCIgICghKSghKSghKSBFcnJvciB3aGlsZSByZWFkaW5nIEFXREJsb2NrIElEIFwiICsgdGhpcy5fY3VyX2Jsb2NrX2lkICsgXCIgPSBza2lwIHRvIG5leHQgYmxvY2tcIik7XHJcblxyXG5cdFx0XHRcdGlmIChibG9jay5lcnJvck1lc3NhZ2VzKSB7XHJcblx0XHRcdFx0XHR3aGlsZSAobXNnQ250IDwgYmxvY2suZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICghKSBFcnJvcjogXCIgKyBibG9jay5lcnJvck1lc3NhZ2VzW21zZ0NudF0gKyBcIiAoISlcIik7XHJcblx0XHRcdFx0XHRcdG1zZ0NudCsrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2JvZHkucG9zaXRpb24gPSBibG9ja0VuZEFsbDtcclxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMgPSBudWxsO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHQvLy0tUGFyc2VyIEJsb2Nrcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblx0cHJpdmF0ZSBwYXJzZVRlc3NlbGF0ZWRGb250KGJsb2NrSUQ6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gbmFtZTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJGb250IG5hbWUgPSBcIit0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSk7XHJcblx0XHR2YXIgZm9udF9zdHlsZV9jbnQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJGb250IGZvbnRfc3R5bGVfY250ID0gXCIrZm9udF9zdHlsZV9jbnQpO1xyXG5cdFx0dmFyIG5ld19mb250OkZvbnQ9bmV3IEZvbnQoKTtcclxuXHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IGZvbnRfc3R5bGVfY250OyArK2kpIHtcclxuXHRcdFx0dmFyIGZvbnRfc3R5bGVfbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJGb250IGZvbnRfc3R5bGVfbmFtZSA9IFwiK2ZvbnRfc3R5bGVfbmFtZSk7XHJcblx0XHRcdHZhciBuZXdfZm9udF9zdHlsZTpUZXNzZWxhdGVkRm9udFRhYmxlPW5ld19mb250LmdldF9mb250X3RhYmxlKGZvbnRfc3R5bGVfbmFtZSk7XHJcblx0XHRcdG5ld19mb250X3N0eWxlLnNldF9mb250X2VtX3NpemUodGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJGb250IG5ld19mb250X3N0eWxlLmZvbnRfZW1fc2l6ZSA9IFwiK25ld19mb250X3N0eWxlLmdldF9mb250X2VtX3NpemUpO1xyXG5cdFx0XHR2YXIgZm9udF9zdHlsZV9jaGFyX2NudDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBmb250X3N0eWxlX2NoYXJfY250ID0gXCIrZm9udF9zdHlsZV9jaGFyX2NudCk7XHJcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IGZvbnRfc3R5bGVfY2hhcl9jbnQ7ICsraSkge1xyXG5cclxuXHRcdFx0XHR2YXIgZm9udF9zdHlsZV9jaGFyOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkZvbnQgZm9udF9zdHlsZV9jaGFyID0gXCIrZm9udF9zdHlsZV9jaGFyKTtcclxuXHRcdFx0XHQvLyB0b2RvOiB0aGlzIGlzIGJhc2ljYWxseSBhIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiB0aGUgc3ViZ2VvbS1wYXJzaW5nIGRvbmUgaW4gcGFyc2VUcmlhbmdsZUdlb21ldHJ5LiBNYWtlIGEgcGFyc2VTdWJHZW9tKCkgaW5zdGVhZCAoPylcclxuXHRcdFx0XHR2YXIgc21fbGVuOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0dmFyIHNtX2VuZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgc21fbGVuO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJGb250IHNtX2xlbiA9IFwiK3NtX2xlbik7XHJcblxyXG5cdFx0XHRcdC8vdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIG5vIHByb3BlcnRpZXMgZm9yIGZvbnQtdGFibGUgc3ViZ2Vvc1xyXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBkYXRhIHN0cmVhbXNcclxuXHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHNtX2VuZCkge1xyXG5cdFx0XHRcdFx0dmFyIGlkeDpudW1iZXIgPSAwO1xyXG5cdFx0XHRcdFx0dmFyIHN0cl9mdHlwZTpudW1iZXIsIHN0cl90eXBlOm51bWJlciwgc3RyX2xlbjpudW1iZXIsIHN0cl9lbmQ6bnVtYmVyO1xyXG5cclxuXHRcdFx0XHRcdC8vIFR5cGUsIGZpZWxkIHR5cGUsIGxlbmd0aFxyXG5cdFx0XHRcdFx0c3RyX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRcdHN0cl9mdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdFx0c3RyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0XHRzdHJfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHN0cl9sZW47XHJcblxyXG5cdFx0XHRcdFx0aWYgKHN0cl90eXBlID09IDIpIHsvL2ZhY2UgaW5kaWNpZXMgcG9zaXRpb25zXHJcblx0XHRcdFx0XHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuXHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdFx0aW5kaWNlc1tpZHgrK10gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMTApIHsvLyBjb21iaW5lZCB2ZXJ0ZXgyRCBzdHJlYW0gNSB4IGZsb2F0MzJcclxuXHRcdFx0XHRcdFx0dmFyIGlkeF9wb3M6bnVtYmVyID0gMDtcclxuXHRcdFx0XHRcdFx0dmFyIGlkeF9jdXJ2ZXM6bnVtYmVyID0gMDtcclxuXHRcdFx0XHRcdFx0dmFyIGlkeF91dnM6bnVtYmVyID0gMDtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBwb3NpdGlvbnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0XHRcdFx0XHRcdHZhciBjdXJ2ZURhdGE6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0XHRcdFx0XHRcdHZhciB1dnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG5cdFx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHhcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geVxyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uc1tpZHhfcG9zKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyB0eXBlXHJcblxyXG5cdFx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXHJcblx0XHRcdFx0XHRcdFx0Y3VydmVEYXRhW2lkeF9jdXJ2ZXMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDJcclxuXHJcblx0XHRcdFx0XHRcdFx0dXZzW2lkeF91dnMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDFcclxuXHRcdFx0XHRcdFx0XHR1dnNbaWR4X3V2cysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7Ly8gbm8gYXR0cmlidXRlcyBmb3IgZm9udC10YWJsZSBzdWJnZW9zXHJcblx0XHRcdFx0dmFyIGN1cnZlX3N1Yl9nZW9tOkN1cnZlU3ViR2VvbWV0cnkgPSBuZXcgQ3VydmVTdWJHZW9tZXRyeSh0cnVlKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVJbmRpY2VzKGluZGljZXMpO1xyXG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZUN1cnZlcyhjdXJ2ZURhdGEpO1xyXG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZVVWcyh1dnMpO1xyXG5cdFx0XHRcdG5ld19mb250X3N0eWxlLnNldF9zdWJnZW9fZm9yX2NoYXIoZm9udF9zdHlsZV9jaGFyLnRvU3RyaW5nKCksIGN1cnZlX3N1Yl9nZW9tKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIGZvbnQtdGFibGVcIik7XHJcblxyXG5cdFx0fVxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIlBhcnNlZCBhIGZvbnRcIik7XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD5uZXdfZm9udCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld19mb250O1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgZm9udDogTmFtZSA9ICdcIiArIG5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VUZXh0Rm9ybWF0KGJsb2NrSUQ6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gbmFtZTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJ0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSAgJ1wiICsgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgKTtcclxuXHRcdHZhciBmb250X2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiZm9udF9pZCAgJ1wiICsgZm9udF9pZCk7XHJcblx0XHR2YXIgZm9udF9zdHlsZV9uYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJmb250X3N0eWxlX25hbWUgICdcIiArIGZvbnRfc3R5bGVfbmFtZSk7XHJcblx0XHR2YXIgcmV0dXJuQXJyYXlGb250OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChmb250X2lkLCBbQXNzZXRUeXBlLkZPTlRdKTtcclxuXHRcdHZhciBmb250OkZvbnQ7XHJcblx0XHRpZiAocmV0dXJuQXJyYXlGb250WzBdKSB7XHJcblx0XHRcdGZvbnQgPSA8Rm9udD4gcmV0dXJuQXJyYXlGb250WzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBGb250IGZvciB0aGlzIFRleHRGb3JtYXQuIEEgZW1wdHkgRm9udCBpcyBjcmVhdGVkIVwiKTtcclxuXHRcdFx0Zm9udCA9IG5ldyBGb250KCk7XHJcblx0XHR9XHJcblx0XHR2YXIgbmV3VGV4dEZvcm1hdDpUZXh0Rm9ybWF0ID0gbmV3IFRleHRGb3JtYXQoKTtcclxuXHRcdG5ld1RleHRGb3JtYXQuZm9udF9uYW1lID0gZm9udC5uYW1lO1xyXG5cdFx0dmFyIGZvbnRfdGFibGU6VGVzc2VsYXRlZEZvbnRUYWJsZSA9IGZvbnQuZ2V0X2ZvbnRfdGFibGUoZm9udF9zdHlsZV9uYW1lKTtcclxuXHRcdGlmKGZvbnRfdGFibGUhPW51bGwpe1xyXG5cdFx0XHRuZXdUZXh0Rm9ybWF0LmZvbnRfc3R5bGUgPSBmb250X3N0eWxlX25hbWU7XHJcblx0XHRcdG5ld1RleHRGb3JtYXQuZm9udF90YWJsZSA9IGZvbnRfdGFibGU7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGRhdGFfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJtYXQgICdcIiArIGRhdGFfaWQpO1xyXG5cdFx0dmFyIG1hdDpCYXNpY01hdGVyaWFsO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlNYXRlcmlhbDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZGF0YV9pZCwgW0Fzc2V0VHlwZS5NQVRFUklBTF0pO1xyXG5cclxuXHRcdGlmIChyZXR1cm5lZEFycmF5TWF0ZXJpYWxbMF0pIHtcclxuXHRcdFx0bWF0ID0gPEJhc2ljTWF0ZXJpYWw+IHJldHVybmVkQXJyYXlNYXRlcmlhbFsxXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgTWF0ZXJpYWwgZm9yIHRoaXMgVGV4dEZvcm1hdC4gRGVmYXVsdCBNYXRlcmlhbCB3aWxsIGJlIHVzZWQhXCIpO1xyXG5cdFx0XHRtYXQgPSBuZXcgQmFzaWNNYXRlcmlhbCgpO1xyXG5cdFx0fVxyXG5cdFx0bWF0LmJvdGhTaWRlcz10cnVlO1xyXG5cclxuXHRcdHZhciBudW1fdXZfdmFsdWVzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIm51bV91dl92YWx1ZXMgICdcIiArIG51bV91dl92YWx1ZXMpO1xyXG5cdFx0dmFyIHV2X3ZhbHVlczpBcnJheTxudW1iZXI+PVtdO1xyXG5cdFx0Zm9yKHZhciB1dmNudDpudW1iZXI9MDsgdXZjbnQ8bnVtX3V2X3ZhbHVlczsgdXZjbnQrKyl7XHJcblx0XHRcdHZhciB1dl92YWx1ZTpudW1iZXI9dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcclxuXHRcdFx0dXZfdmFsdWVzLnB1c2godXZfdmFsdWUpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwidXZfdmFsdWUgICdcIiArIHV2X3ZhbHVlKTtcclxuXHRcdH1cclxuXHRcdG5ld1RleHRGb3JtYXQudXZfdmFsdWVzPXV2X3ZhbHVlcztcclxuXHRcdHZhciBmb3JtYXRfcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMTYsIDI6QVdEUGFyc2VyLlVJTlQxNiwgMzpBV0RQYXJzZXIuVUlOVDgsNDpBV0RQYXJzZXIuVUlOVDgsNTpBV0RQYXJzZXIuVUlOVDh9KTtcclxuXHJcblx0XHRuZXdUZXh0Rm9ybWF0LnNpemUgPSBmb3JtYXRfcHJvcHMuZ2V0KDEsMTIpO1xyXG5cdFx0bmV3VGV4dEZvcm1hdC5sZXR0ZXJTcGFjaW5nID0gZm9ybWF0X3Byb3BzLmdldCgyLDApO1xyXG5cdFx0Ly9uZXdUZXh0Rm9ybWF0LnJvdGF0ZWQgPSBmb3JtYXRfcHJvcHMuZ2V0KDMsZmFsc2UpO1xyXG5cdFx0bmV3VGV4dEZvcm1hdC5rZXJuaW5nID0gZm9ybWF0X3Byb3BzLmdldCg0LHRydWUpO1xyXG5cdFx0Ly9uZXdUZXh0Rm9ybWF0LmJhc2VsaW5lX3NoaWZ0ID0gZm9ybWF0X3Byb3BzLmdldCg1LDEpO1xyXG5cdFx0bmV3VGV4dEZvcm1hdC5tYXRlcmlhbCA9IG1hdDtcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpOy8vIHRleHRmb3JtYXQgaGFzIG5vIGV4dHJhLXByb3BlcnRpZXNcclxuXHRcdC8vbmV3VGV4dEZvcm1hdC5leHRyYSA9XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbmV3VGV4dEZvcm1hdCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1RleHRGb3JtYXQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVGV4dEZvcm1hdDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIiBmb250OiBcIitmb250Lm5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyZXNUZXh0RmllbGQoYmxvY2tJRDpudW1iZXIpOnZvaWQge1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSBuYW1lO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIm5hbWUgICdcIiArIG5hbWUpO1xyXG5cdFx0dmFyIG5ld1RleHRGaWVsZDpUZXh0RmllbGQgPSBuZXcgVGV4dEZpZWxkKCk7XHJcblx0XHR2YXIgbnVtX3BhcmFncmFwaHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciBjb21wbGV0ZV90ZXh0OnN0cmluZyA9IFwiXCI7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwibnVtX3BhcmFncmFwaHMgICdcIiArIG51bV9wYXJhZ3JhcGhzKTtcclxuXHRcdHZhciB0ZXh0X2Zvcm1hdDpUZXh0Rm9ybWF0O1xyXG5cdFx0Zm9yKHZhciBwYXJhY250Om51bWJlcj0wOyBwYXJhY250PG51bV9wYXJhZ3JhcGhzOyBwYXJhY250Kyspe1xyXG5cclxuXHRcdFx0dmFyIG51bV90ZXh0cnVuczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwibnVtX3RleHRydW5zICAnXCIgKyBudW1fdGV4dHJ1bnMpO1xyXG5cdFx0XHRmb3IodmFyIHRleHRydW5fY250Om51bWJlcj0wOyB0ZXh0cnVuX2NudDxudW1fdGV4dHJ1bnM7IHRleHRydW5fY250KyspIHtcclxuXHJcblx0XHRcdFx0dmFyIGZvcm1hdF9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJmb3JtYXRfaWQgICdcIiArIGZvcm1hdF9pZCk7XHJcblx0XHRcdFx0dmFyIHRleHRGb3JtYXRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZm9ybWF0X2lkLCBbQXNzZXRUeXBlLlRFWFRGT1JNQVRdKTtcclxuXHRcdFx0XHRpZiAodGV4dEZvcm1hdEFycmF5WzBdKSB7XHJcblx0XHRcdFx0XHR0ZXh0X2Zvcm1hdCA9IDxUZXh0Rm9ybWF0PiB0ZXh0Rm9ybWF0QXJyYXlbMV07XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgTWF0ZXJpYWwgZm9yIHRoaXMgQmlsbGJvYXJkLiBBIGVtcHR5IG1hdGVyaWFsIGlzIGNyZWF0ZWQhXCIpO1xyXG5cdFx0XHRcdFx0dGV4dF9mb3JtYXQgPSBuZXcgVGV4dEZvcm1hdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwidGV4dF9mb3JtYXQgICdcIiArIHRleHRfZm9ybWF0Lm5hbWUpO1xyXG5cdFx0XHRcdHZhciB0eHRfbGVuZ3RoID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwidHh0X2xlbmd0aCAgJ1wiICsgdHh0X2xlbmd0aCk7XHJcblx0XHRcdFx0aWYgKHR4dF9sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR2YXIgdGhpc190eHQ6c3RyaW5nID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXModHh0X2xlbmd0aCk7XHJcblx0XHRcdFx0XHQvL25ld1RleHRGaWVsZC5hcHBlbmRUZXh0KHRoaXNfdHh0LCB0ZXh0X2Zvcm1hdCk7XHJcblx0XHRcdFx0XHRjb21wbGV0ZV90ZXh0Kz10aGlzX3R4dDtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJ0aGlzX3R4dCAgJ1wiICsgdGhpc190eHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvL25ld1RleHRGaWVsZC5jbG9zZVBhcmFncmFwaCgpO1xyXG5cdFx0fVxyXG5cdFx0bmV3VGV4dEZpZWxkLnRleHRGb3JtYXQ9dGV4dF9mb3JtYXQ7XHJcblx0XHRuZXdUZXh0RmllbGQudGV4dD1jb21wbGV0ZV90ZXh0O1xyXG5cdFx0Ly9uZXdUZXh0RmllbGQuY29uc3RydWN0X2dlb21ldHJ5KCk7XHJcblx0XHQvLyB0b2RvOiBvcHRpb25hbCBtYXRyaXggZXRjIGNhbiBiZSBwdXQgaW4gcHJvcGVydGllcy5cclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cclxuXHRcdG5ld1RleHRGaWVsZC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coXCJQYXJzZWQgYSBUZXh0RmllbGQ6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCJ8IHRleHQgID0gXCIgKyBjb21wbGV0ZV90ZXh0KTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG5ld1RleHRGaWVsZCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1RleHRGaWVsZDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUZXh0RmllbGQ6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCJ8IHRleHQgID0gXCIgKyBjb21wbGV0ZV90ZXh0KTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvLyBCbG9jayBJRCA9IDI1XHJcblx0cHJpdmF0ZSBwYXJzZUJpbGxCb2FyZExpYnJhcnlCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZCB7XHJcblxyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdHZhciBkYXRhX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgbWF0OkJhc2ljTWF0ZXJpYWw7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheU1hdGVyaWFsOkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChkYXRhX2lkLCBbQXNzZXRUeXBlLk1BVEVSSUFMXSk7XHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlNYXRlcmlhbFswXSkge1xyXG5cdFx0XHRtYXQgPSA8QmFzaWNNYXRlcmlhbD4gcmV0dXJuZWRBcnJheU1hdGVyaWFsWzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBNYXRlcmlhbCBmb3IgdGhpcyBCaWxsYm9hcmQuIEEgZW1wdHkgbWF0ZXJpYWwgaXMgY3JlYXRlZCFcIik7XHJcblx0XHRcdG1hdCA9IG5ldyBCYXNpY01hdGVyaWFsKCk7XHJcblx0XHR9XHJcblx0XHRtYXQuYm90aFNpZGVzPXRydWU7XHJcblx0XHR2YXIgYmlsbGJvYXJkOkJpbGxib2FyZCA9IG5ldyBCaWxsYm9hcmQobWF0KTtcclxuXHJcblx0XHQvLyB0b2RvOiBvcHRpb25hbCBtYXRyaXggZXRjIGNhbiBiZSBwdXQgaW4gcHJvcGVydGllcy5cclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cclxuXHRcdGJpbGxib2FyZC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGJpbGxib2FyZCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGJpbGxib2FyZDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBMaWJyYXJ5LUJpbGxib2FyZDogTmFtZSA9ICdcIiArIG5hbWUgKyBcInwgTWF0ZXJpYWwtTmFtZSA9IFwiICsgbWF0Lm5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBCbG9jayBJRCA9IDI0XHJcblx0cHJpdmF0ZSBwYXJzZU1lc2hMaWJyYXJ5QmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWQge1xyXG5cdFx0dmFyIG51bV9tYXRlcmlhbHM6bnVtYmVyO1xyXG5cdFx0dmFyIG1hdGVyaWFsc19wYXJzZWQ6bnVtYmVyO1xyXG5cclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgZGF0YV9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIGdlb206R2VvbWV0cnk7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheUdlb21ldHJ5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChkYXRhX2lkLCBbQXNzZXRUeXBlLkdFT01FVFJZXSlcclxuXHJcblx0XHRpZiAocmV0dXJuZWRBcnJheUdlb21ldHJ5WzBdKSB7XHJcblx0XHRcdGdlb20gPSA8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlHZW9tZXRyeVsxXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgR2VvbWV0cnkgZm9yIHRoaXMgTWVzaC4gQSBlbXB0eSBHZW9tZXRyeSBpcyBjcmVhdGVkIVwiKTtcclxuXHRcdFx0Z2VvbSA9IG5ldyBHZW9tZXRyeSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5nZW9JRCA9IGRhdGFfaWQ7XHJcblx0XHR2YXIgbWF0ZXJpYWxzOkFycmF5PE1hdGVyaWFsQmFzZT4gPSBuZXcgQXJyYXk8TWF0ZXJpYWxCYXNlPigpO1xyXG5cdFx0bnVtX21hdGVyaWFscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHR2YXIgbWF0ZXJpYWxOYW1lczpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHRcdG1hdGVyaWFsc19wYXJzZWQgPSAwO1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5TWF0ZXJpYWw6QXJyYXk8YW55PjtcclxuXHJcblx0XHR3aGlsZSAobWF0ZXJpYWxzX3BhcnNlZCA8IG51bV9tYXRlcmlhbHMpIHtcclxuXHRcdFx0dmFyIG1hdF9pZDpudW1iZXI7XHJcblx0XHRcdG1hdF9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHJldHVybmVkQXJyYXlNYXRlcmlhbCA9IHRoaXMuZ2V0QXNzZXRCeUlEKG1hdF9pZCwgW0Fzc2V0VHlwZS5NQVRFUklBTF0pXHJcblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlNYXRlcmlhbFswXSkgJiYgKG1hdF9pZCA+IDApKSB7XHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgTWF0ZXJpYWwgTnIgXCIgKyBtYXRlcmlhbHNfcGFyc2VkICsgXCIgKElEID0gXCIgKyBtYXRfaWQgKyBcIiApIGZvciB0aGlzIE1lc2hcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtOk1hdGVyaWFsQmFzZSA9IDxNYXRlcmlhbEJhc2U+IHJldHVybmVkQXJyYXlNYXRlcmlhbFsxXTtcclxuXHJcblx0XHRcdG1hdGVyaWFscy5wdXNoKG0pO1xyXG5cdFx0XHRtYXRlcmlhbE5hbWVzLnB1c2gobS5uYW1lKTtcclxuXHJcblx0XHRcdG1hdGVyaWFsc19wYXJzZWQrKztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbWVzaDpNZXNoID0gbmV3IE1lc2goZ2VvbSwgbnVsbCk7XHJcblxyXG5cclxuXHRcdGlmIChtYXRlcmlhbHMubGVuZ3RoID49IDEgJiYgbWVzaC5zdWJNZXNoZXMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0bWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsc1swXTtcclxuXHRcdH0gZWxzZSBpZiAobWF0ZXJpYWxzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0dmFyIGk6bnVtYmVyO1xyXG5cclxuXHRcdFx0Ly8gQXNzaWduIGVhY2ggc3ViLW1lc2ggaW4gdGhlIG1lc2ggYSBtYXRlcmlhbCBmcm9tIHRoZSBsaXN0LiBJZiBtb3JlIHN1Yi1tZXNoZXNcclxuXHRcdFx0Ly8gdGhhbiBtYXRlcmlhbHMsIHJlcGVhdCB0aGUgbGFzdCBtYXRlcmlhbCBmb3IgYWxsIHJlbWFpbmluZyBzdWItbWVzaGVzLlxyXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWVzaC5zdWJNZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRtZXNoLnN1Yk1lc2hlc1tpXS5tYXRlcmlhbCA9IG1hdGVyaWFsc1tNYXRoLm1pbihtYXRlcmlhbHMubGVuZ3RoIC0gMSwgaSldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdG1lc2guZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtZXNoLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWVzaDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBMaWJyYXJ5LU1lc2g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCJ8IEdlb21ldHJ5LU5hbWUgPSBcIiArIGdlb20ubmFtZSArIFwiIHwgU3ViTWVzaGVzID0gXCIgKyBtZXNoLnN1Yk1lc2hlcy5sZW5ndGggKyBcIiB8IE1hdC1OYW1lcyA9IFwiICsgbWF0ZXJpYWxOYW1lcy50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHJpdmF0ZSBwYXJzZUF1ZGlvQmxvY2soYmxvY2tJRDpudW1iZXIsIGZhY3Rvcnk6VGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSk6dm9pZCB7XHJcblxyXG5cdFx0Ly92YXIgYXNzZXQ6QXVkaW87dG9kbyBjcmVhdGUgYXNzZXQgZm9yIGF1ZGlvXHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0dmFyIHR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgZGF0YV9sZW46bnVtYmVyO1xyXG5cclxuXHRcdC8vdGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcclxuXHJcblx0XHQvLyBFeHRlcm5hbFxyXG5cdFx0aWYgKHR5cGUgPT0gMCkge1xyXG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHZhciB1cmw6c3RyaW5nO1xyXG5cdFx0XHR1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XHJcblx0XHRcdC8vIHRvZG8gcGFyc2VyIG5lZWRzIHRvIGJlIGFibGUgdG8gaGFuZGxlIG1wMyBhbmQgd2F2IGZpbGVzIGlmIHdlIHRyaWdnZXIgdGhlIGxvYWRpbmcgb2YgZXh0ZXJuYWwgcmVzc291cmNlXHJcblx0XHRcdC8vdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG5ldyBVUkxSZXF1ZXN0KHVybCksIGZhbHNlLCBudWxsLCB0cnVlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJBdWRpbyB1cmwgPSBcIit1cmwpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIHRvZG86IGV4cG9ydGVyIGRvZXMgbm90IGV4cG9ydCBlbWJlZCBzb3VuZHMgeWV0XHJcblx0XHRcdGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRcdHZhciBkYXRhOkJ5dGVBcnJheTtcclxuXHRcdFx0ZGF0YSA9IG5ldyBCeXRlQXJyYXkoKTtcclxuXHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZXMoZGF0YSwgMCwgZGF0YV9sZW4pO1xyXG5cclxuXHRcdFx0Ly8gdG9kbyBwYXJzZSBzb3VuZCBmcm9tIGJ5dGVzXHJcblx0XHRcdC8vIHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgUGFyc2VyVXRpbHMuYnkoZGF0YSksIHRydWUpO1xyXG5cdFx0XHQvL3RoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElnbm9yZSBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XHJcblx0XHQvL3RoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7dG9kb1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHR2YXIgdGV4dHVyZVN0eWxlc05hbWVzOkFycmF5PHN0cmluZz4gPSBbXCJleHRlcm5hbFwiLCBcImVtYmVkXCJdXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyBhIFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQXVkaW8gZmlsZVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA0XHJcblx0cHJpdmF0ZSBwYXJzZVRpbWVMaW5lKGJsb2NrSUQ6bnVtYmVyLCBmYWN0b3J5OlRpbWVsaW5lU2NlbmVHcmFwaEZhY3RvcnkpOnZvaWQge1xyXG5cclxuXHRcdHZhciBpOm51bWJlcjtcclxuXHRcdHZhciBqOm51bWJlcjtcclxuXHRcdHZhciBrOm51bWJlcjtcclxuXHRcdHZhciB0aW1lTGluZUNvbnRhaW5lciA9IGZhY3RvcnkuY3JlYXRlTW92aWVDbGlwKCk7XHJcblx0XHR2YXIgbmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBpc1NjZW5lID0gISF0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBzY2VuZUlEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgZnBzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0KCk7XHJcblx0XHR2YXIgbXNfcGVyX2ZyYW1lID0gMTAwMCAvIGZwcztcclxuXHRcdHZhciBudW1GcmFtZXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgb2JqZWN0SURNYXAgOiB7IFtpZDpzdHJpbmddOm51bWJlcjsgfSA9IHt9O1xyXG5cclxuXHRcdC8vIHZhciBwcmV2aW91c1RpbWVMaW5lOlRpbWVMaW5lRnJhbWU7XHJcblx0XHQvLyB2YXIgZmlsbF9wcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQzMn0pOy8vIHsgMTpVSU5UMzIsIDY6QVdEU1RSSU5HIH0gICk7IC8vOyAsIDI6VUlOVDMyLCAzOlVJTlQzMiwgNTpCT09MIH0gKTtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVElNRUxJTkU6IE5hbWUgPSBcIiArIG5hbWUgKyBcInwgaXNTY2VuZSA9IFwiICsgaXNTY2VuZSArIFwifCBzY2VuZUlEID0gXCIgKyBzY2VuZUlEICsgXCJ8IG51bUZyYW1lcyA9IFwiICsgbnVtRnJhbWVzKTtcclxuXHJcblx0XHR2YXIgdG90YWxEdXJhdGlvbiA9IDA7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtRnJhbWVzOyBpKyspIHtcclxuXHJcblx0XHRcdHZhciBmcmFtZSA9IG5ldyBUaW1lbGluZUtleUZyYW1lKCk7XHJcblx0XHRcdHZhciB0cmFjZVN0cmluZyA9IFwiZnJhbWUgPSBcIiArIGk7XHJcblx0XHRcdC8vIFRPRE86IHJlbW92ZSB0aGUgbXNfcGVyX2ZyYW1lIHRvIHNldCB0aGUgZHVyYXRpb24gaW4gZnJhbWVzXHJcblx0XHRcdHZhciBmcmFtZUR1cmF0aW9uID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKSAqIG1zX3Blcl9mcmFtZTtcclxuXHRcdFx0ZnJhbWUuc2V0RnJhbWVUaW1lKHRvdGFsRHVyYXRpb24sIGZyYW1lRHVyYXRpb24pO1xyXG5cdFx0XHR0b3RhbER1cmF0aW9uICs9IGZyYW1lRHVyYXRpb247XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJkdXJhdGlvbiA9IFwiICsgZnJhbWVEdXJhdGlvbik7XHJcblx0XHRcdHRyYWNlU3RyaW5nICs9IFwiZHVyYXRpb24gPSBcIiArIGZyYW1lRHVyYXRpb247XHJcblxyXG5cdFx0XHR2YXIgbnVtTGFiZWxzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgbnVtTGFiZWxzOyBqKyspIHtcclxuXHRcdFx0XHR2YXIgbGFiZWxUeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0dmFyIGxhYmVsID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0XHRcdC8vIFRPRE86IEhhbmRsZSBsYWJlbHMgZGlmZmVyZW50bHlcclxuXHRcdFx0XHQvL3RpbWVMaW5lQ29udGFpbmVyLmFkZEZyYW1lTGFiZWwobmV3IEZyYW1lTGFiZWwobGFiZWwsIGxhYmVsVHlwZSwgZnJhbWUpKTtcclxuXHRcdFx0XHR0cmFjZVN0cmluZyArPSBcIlxcbiAgICAgbGFiZWwgPSBcIiArIGxhYmVsICsgXCIgLSBsYWJlbFR5cGUgPSBcIiArIGxhYmVsVHlwZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG51bUNvbW1hbmRzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHR0cmFjZVN0cmluZyArPSBcIlxcbiAgICAgIENvbW1hbmRzIFwiICsgbnVtQ29tbWFuZHM7XHJcblx0XHRcdHZhciBoYXNEZXB0aENoYW5nZXMgPSBmYWxzZTtcclxuXHRcdFx0dmFyIGNvbW1hbmRTdHJpbmcgPSBcIlwiO1xyXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgbnVtQ29tbWFuZHM7IGorKykge1xyXG5cdFx0XHRcdHZhciBvYmplY3RJRDpudW1iZXI7XHJcblx0XHRcdFx0dmFyIHJlc291cmNlSUQ6bnVtYmVyO1xyXG5cdFx0XHRcdHZhciBjb21tYW5kVHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHRcdFx0Ly8gMSA9IEFkZCBvYmplY3QgYnkgbG9jYWwgaWQgKGF3ZC1ibG9jay1pZCkgKyB1cGRhdGUgcHJvcGVydGllc1xyXG5cdFx0XHRcdC8vIDIgPSBBZGQgb2JqZWN0IGJ5IGdsb2JhbCBpZCAoc3RyaW5nIGlkZW50aWZpZXIpICsgdXBkYXRlIHByb3BlcnRpZXMgIU5vdCB1c2VkIHlldC4hXHJcblx0XHRcdFx0Ly8gMyA9IFVwZGF0ZU9iamVjdCAtIHVwZGF0ZSBhIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgcHJlc2VudFxyXG5cdFx0XHRcdC8vIDQgPSByZW1vdmUgb2JqZWN0XHJcblx0XHRcdFx0Ly8gNSA9IGFkZCAvIHVwZGF0ZSBzb3VuZFxyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKGNvbW1hbmRUeXBlKSB7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0XHR2YXIgdmFsaWRfY29tbWFuZDpib29sZWFuID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdG9iamVjdElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlSUQgPSAwOyAvLyBtdXN0IGJlIHNldCBpbiBmb2xsaW5nIGNvbmRpdGlvbnM6XHJcblx0XHRcdFx0XHRcdGlmIChjb21tYW5kVHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcyBjb21tYW5kcyBsb29rcyBmb3IgYSBvYmplY3QgYnkgYXdkLWlkIGFuZCBwdXRzIGl0IGludG8gdGhlIHRpbWVsaW5lXHJcblx0XHRcdFx0XHRcdFx0cmVzb3VyY2VJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlTmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdFx0XHRcdFx0XHQvLyBzb3VuZCBpcyBhZGRlZCB0byB0aW1lbGluZSB3aXRoIGRlZGljYXRlZCBDb21tYW5kLCBhcyBpdCBpcyBubyBkaXNwbGF5LW9iamVjdCAoaGFzIG5vIG1hdHJpeCBldGMpXHJcblx0XHRcdFx0XHRcdFx0Ly8gY2hlY2sgaWYgYSBHZW9tZXRyeSBjYW4gYmUgZm91bmQgYXQgdGhlIHJlc291cmNlSUQgKEFXRC1JRClcclxuXHRcdFx0XHRcdFx0XHR2YXIgY21kX2Fzc2V0OkRpc3BsYXlPYmplY3QgPSA8RGlzcGxheU9iamVjdD50aGlzLl9ibG9ja3NbcmVzb3VyY2VJRF0uZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoY21kX2Fzc2V0ICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGluc3RhbmNlSUQgPSB0aW1lTGluZUNvbnRhaW5lci5yZWdpc3RlclBvdGVudGlhbENoaWxkKGNtZF9hc3NldCk7XHJcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RJRE1hcFtvYmplY3RJRF0gPSBpbnN0YW5jZUlEO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgQWRkQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaW5zdGFuY2VOYW1lLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJuYW1lXCIsIGluc3RhbmNlTmFtZSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIGluc3RhbmNlTmFtZSA9IFwiICsgaW5zdGFuY2VOYW1lO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsaWRfY29tbWFuZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBBZGQgbmV3IFJlc291cmNlID0gXCIgKyByZXNvdXJjZUlEICsgXCIgYXMgb2JqZWN0X2lkID0gXCIgKyBvYmplY3RJRDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBFUlJPUiAtIG9iamVjdF9pZCA9IFwiICsgb2JqZWN0SUQgKyBcIiAtIE5PIERJU1BMQVlfT0JKRUNUIEFUIElEID0gXCIgKyByZXNvdXJjZUlEO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIGlmIChjb21tYW5kVHlwZSA9PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2VJRCA9IG9iamVjdElETWFwW29iamVjdElEXTtcclxuXHRcdFx0XHRcdFx0XHR2YWxpZF9jb21tYW5kID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBVcGRhdGUgb2JqZWN0X2lkID0gXCIgKyBvYmplY3RJRDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyByZWFkIHRoZSBjb21tYW5kIHByb3BlcnRpZXNcclxuXHRcdFx0XHRcdFx0Ly8gMTogbWF0cml4MmQgKDYgeCBudW1iZXIgd2l0aCBzdG9yYWdlIHByZWNpc2lvbiBtYXRyaXgpXHJcblx0XHRcdFx0XHRcdC8vIDI6IG1hdHJpeDJkICgxMiB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIG1hdHJpeCkgbm90IHVzZWQgeWV0XHJcblx0XHRcdFx0XHRcdC8vIDM6IGNvbG9ydHJhbnNmb3JtICgyMCB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIHByb3BlcnRpZXMpXHJcblx0XHRcdFx0XHRcdC8vIDQ6IGJsZW5kbW9kZSAodWludDgpXHJcblx0XHRcdFx0XHRcdC8vIDU6IHZpc2liaWx0eSAodWludDgpXHJcblx0XHRcdFx0XHRcdC8vIDY6IGRlcHRoICh1aW50MzIpXHJcblx0XHRcdFx0XHRcdC8vIDc6IG1hc2sgKHVpbnQzMilcclxuXHRcdFx0XHRcdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7XHJcblx0XHRcdFx0XHRcdFx0MTogdGhpcy5fbWF0cml4TnJUeXBlLFxyXG5cdFx0XHRcdFx0XHRcdDI6IHRoaXMuX21hdHJpeE5yVHlwZSxcclxuXHRcdFx0XHRcdFx0XHQzOiB0aGlzLl9wcm9wc05yVHlwZSxcclxuXHRcdFx0XHRcdFx0XHQ0OiBBV0RQYXJzZXIuVUlOVDgsXHJcblx0XHRcdFx0XHRcdFx0NTogQVdEUGFyc2VyLlVJTlQ4LFxyXG5cdFx0XHRcdFx0XHRcdDY6IEFXRFBhcnNlci5VSU5UMzJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8vIHRvZG86IGZpeCBwcm9wZXJ0eSBwYXJzaW5nIHNvIHdlIGNhbiByZWFkIHZhcmlhYmxlIHNpemUgbGlzdCAoYXRtIGxpc3Qgd2l0aCBzaXplID0gMSBpcyByZXR1cm5lZCBhcyBzaW5nbGUgbnVtYmVyKVxyXG5cdFx0XHRcdFx0XHQvLyBmb3IgdGhpcyByZWFzb24sIGZvciBub3cgdGhlIG1hc2stcHJvcGVydHkgaXMgcmVhZCBzZXBwZXJhdGx5XHJcblx0XHRcdFx0XHRcdHZhciBtYXNrX2lkX251bXM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0dmFyIG1hc2tfaWRzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBtaV9jbnQ6bnVtYmVyID0gMDsgbWlfY250IDwgbWFza19pZF9udW1zOyBtaV9jbnQrKykge1xyXG5cdFx0XHRcdFx0XHRcdG1hc2tfaWRzLnB1c2godGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHZhbGlkX2NvbW1hbmQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIG1hdHJpeF8yZDpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMSwgW10pO1xyXG5cdFx0XHRcdFx0XHRcdC8vdmFyIG1hdHJpeF8zZDpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMiwgW10pO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjb2xvcnRyYW5zZm9ybTpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMywgW10pO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBibGVuZG1vZGU6bnVtYmVyID0gcHJvcHMuZ2V0KDQsIC0xKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdmlzaWJpbHR5Om51bWJlciA9IHByb3BzLmdldCg1LCAtMSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGRlcHRoOm51bWJlciA9IHByb3BzLmdldCg2LCAtMSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIG1hc2s6QXJyYXk8bnVtYmVyPiA9IHByb3BzLmdldCg3LCBbXSk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdG9kbzogaGFuZGxlIGZpbHRlcnNcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9tYXRyaXgyZCBtdXN0IHByb3ZpZGUgNiB2YWx1ZXMgdG8gYmUgdmFsaWRcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1BcnJheSA9IFwiICsgbWF0cml4XzJkLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0XHRpZiAobWF0cml4XzJkLmxlbmd0aCA9PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdGhpc01hdHJpeCA9IG5ldyBNYXRyaXgzRCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzRChtYXRyaXhfMmRbNF0sIG1hdHJpeF8yZFs1XSwgMCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB0b2RvIGlzIHRoaXMgY29ycmVjdCBmb3IgMmQgLT4gM2Qgc2NhbGUgYW5kIHJvdGF0aW9uLiAoaSBkb3VidCBpdClcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucmF3RGF0YVswXSA9IG1hdHJpeF8yZFswXTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucmF3RGF0YVsxXSA9IG1hdHJpeF8yZFsxXTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucmF3RGF0YVs0XSA9IG1hdHJpeF8yZFsyXTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucmF3RGF0YVs1XSA9IG1hdHJpeF8yZFszXTtcclxuXHRcdFx0XHRcdFx0XHRcdGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcIl9pTWF0cml4M0RcIiwgdGhpc01hdHJpeCkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXJyYXkgPSBcIiArIG1hdHJpeF8yZDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly9tYXRyaXgyZCBtdXN0IHByb3ZpZGUgMjAgdmFsdWVzIHRvIGJlIHZhbGlkXHJcblx0XHRcdFx0XHRcdFx0aWYgKGNvbG9ydHJhbnNmb3JtLmxlbmd0aCA9PSAyMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2V0IENvbG9yVHJhbnNmb3JtIG9uIG9iamVjdFByb3BzXHJcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIGNvbG9yTWF0cml4ID0gXCIgKyBjb2xvcnRyYW5zZm9ybTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIGJsZW5kbW9kZSBtdXN0IGJlIHBvc2l0aXZlIHRvIGJlIHZhbGlkXHJcblx0XHRcdFx0XHRcdFx0aWYgKGJsZW5kbW9kZSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgYmxlbmRtb2RlX3N0cmluZzpzdHJpbmcgPSB0aGlzLmJsZW5kTW9kZURpY1tibGVuZG1vZGVdO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2V0IEJsZW5kbW9kZSBvbiBvYmplY3RQcm9wc1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBCbGVuZE1vZGUgPSBcIiArIGJsZW5kbW9kZV9zdHJpbmc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIHZpc2liaWx0eSBtdXN0IGJlIHBvc2l0aXZlIHRvIGJlIHZhbGlkXHJcblx0XHRcdFx0XHRcdFx0aWYgKHZpc2liaWx0eSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodmlzaWJpbHR5ID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcInZpc2libGVcIiwgZmFsc2UpKTtcclxuXHRcdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwidmlzaWJsZVwiLCB0cnVlKSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vIGRlcHRoIG11c3QgYmUgcG9zaXRpdmUgdG8gYmUgdmFsaWRcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGVwdGggPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBEZXB0aCA9IFwiICsgZGVwdGg7XHJcblx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJfX0FTMkRlcHRoXCIsIGRlcHRoKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRoYXNEZXB0aENoYW5nZXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyBtYXNrIG11c3QgYmUgcG9zaXRpdmUgdG8gYmUgdmFsaWQuIGkgdGhpbmsgb25seSBhZGQtY29tbWFuZHMgd2lsbCBoYXZlIHRoaXMgdmFsdWUuXHJcblx0XHRcdFx0XHRcdFx0Ly8gZS5nLiBpdCBzaG91bGQgbmV2ZXIgYmUgdXBkYXRlZCBvbiBhbHJlYWR5IGV4aXN0aW5nIG9iamVjdHMuIChiZWNhdXNlIGRlcHRoIG9mIG9iamVjdHMgY2FuIGNoYW5nZSwgaSBhbSBub3Qgc3VyZSlcclxuXHRcdFx0XHRcdFx0XHRpZiAobWFza19pZHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoKG1hc2tfaWRzLmxlbmd0aD09MSkmJihtYXNrX2lkc1swXT09MCkpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiB0aGlzIG9iamVjdCBpcyB1c2VkIGFzIG1hc2tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBvYmogaXMgdXNlZCBhcyBtYXNrXCI7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiB0aGlzIG9iamVjdCBpcyBtYXNrZWQgYnkgb25lIG9yIG1vcmUgb2JqZWN0cyBkZWZpbmVkIGJ5IGlkcyBpbiBtYXNrLWFycmF5XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgb2JqIGlzIG1hc2tlZCBieSBcIittYXNrX2lkcy5sZW5ndGgrXCIgb2JqZWN0c1wiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKHZhciBjbTpudW1iZXIgPSAwOyBjbSA8IG1hc2tfaWRzLmxlbmd0aDsgY20rKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgb2JqIGlzIG1hc2tlZCBieSBcIittYXNrX2lkc1tjbV07XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8gdG9kbzogaGFuZGxlIGZpbHRlcnNcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDQ6XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgT2JqZWN0IENvbW1hbmRcclxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2VJRCA9IG9iamVjdElETWFwW29iamVjdElEXTtcclxuXHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgUmVtb3ZlQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcclxuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAtIFJlbW92ZSBvYmplY3Qgd2l0aCBJRDogXCIgKyBvYmplY3RJRDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSA1OlxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQWRkIFNvdW5kIENvbW1hbmRcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogY3JlYXRlIENvbW1hbmRQcm9wc1NvdW5kIGFuZCBjaGVjayB3aGljaCBhc3NldCB0byB1c2VcclxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRcdFx0XHRyZXNvdXJjZUlEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaW1wbGVtZW50IHNvdW5kIGluIHRpbWVsaW5lXHJcblx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAtIEFkZCBuZXcgU291bmQgQVdELUlEID0gXCIgKyByZXNvdXJjZUlELnRvU3RyaW5nKCkgKyBcIiBhcyBvYmplY3RfaWQgPSBcIiArIG9iamVjdElELnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgIC0gVW5rbm93biBDb21tYW5kIFR5cGUgPSBcIiArIGNvbW1hbmRUeXBlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaGFzRGVwdGhDaGFuZ2VzKSB7XHJcblx0XHRcdFx0Ly8gb25seSB3YW50IHRvIGRvIHRoaXMgb25jZSBhZnRlciBhbGwgY2hpbGRyZW4ncyBkZXB0aCB2YWx1ZXMgYXJlIHVwZGF0ZWRcclxuXHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBBcHBseUFTMkRlcHRoc0NvbW1hbmQoKSk7XHJcblx0XHRcdFx0aGFzRGVwdGhDaGFuZ2VzID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBsZW5ndGhfY29kZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdGlmIChsZW5ndGhfY29kZSA+IDApIHtcclxuXHRcdFx0XHQvLyBUT0RPOiBTY3JpcHQgc2hvdWxkIHByb2JhYmx5IG5vdCBiZSBhdHRhY2hlZCB0byBrZXlmcmFtZXM/XHJcblx0XHRcdFx0dmFyIGZyYW1lX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW5ndGhfY29kZSk7XHJcblx0XHRcdFx0Ly9mcmFtZS5hZGRUb1NjcmlwdChmcmFtZV9jb2RlKTtcclxuXHRcdFx0XHR0cmFjZVN0cmluZyArPSBcIlxcbmZyYW1lLWNvZGUgPSBcIiArIGZyYW1lX2NvZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0dHJhY2VTdHJpbmcgKz0gY29tbWFuZFN0cmluZztcclxuXHRcdFx0Ly90cmFjZShcImxlbmd0aF9jb2RlID0gXCIrbGVuZ3RoX2NvZGUrXCIgZnJhbWVfY29kZSA9IFwiK2ZyYW1lX2NvZGUpO1xyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpOy8vIHVzZXIgYXR0cmlidXRlcyAtIHNraXAgZm9yIG5vd1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0cmFjZVN0cmluZyk7XHJcblx0XHRcdHRpbWVMaW5lQ29udGFpbmVyLmFkZEZyYW1lKGZyYW1lKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD50aW1lTGluZUNvbnRhaW5lciwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRpbWVMaW5lQ29udGFpbmVyO1xyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHR9XHJcblx0Ly9CbG9jayBJRCA9IDFcclxuXHRwcml2YXRlIHBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHJcblx0XHR2YXIgZ2VvbTpHZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xyXG5cclxuXHRcdC8vIFJlYWQgbmFtZSBhbmQgc3ViIGNvdW50XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbnVtX3N1YnM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdC8vIFJlYWQgb3B0aW9uYWwgcHJvcGVydGllc1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9nZW9OclR5cGUsIDI6dGhpcy5fZ2VvTnJUeXBlfSk7XHJcblx0XHR2YXIgZ2VvU2NhbGVVOm51bWJlciA9IHByb3BzLmdldCgxLCAxKTtcclxuXHRcdHZhciBnZW9TY2FsZVY6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDEpO1xyXG5cclxuXHRcdC8vIExvb3AgdGhyb3VnaCBzdWIgbWVzaGVzXHJcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyID0gMDtcclxuXHRcdHdoaWxlIChzdWJzX3BhcnNlZCA8IG51bV9zdWJzKSB7XHJcblx0XHRcdHZhciBpc19jdXJ2ZV9nZW9tOmJvb2xlYW49ZmFsc2U7XHJcblx0XHRcdHZhciBpOm51bWJlcjtcclxuXHRcdFx0dmFyIHNtX2xlbjpudW1iZXIsIHNtX2VuZDpudW1iZXI7XHJcblx0XHRcdHZhciB3X2luZGljZXM6QXJyYXk8bnVtYmVyPjtcclxuXHRcdFx0dmFyIHdlaWdodHM6QXJyYXk8bnVtYmVyPjtcclxuXHJcblx0XHRcdHNtX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdHNtX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzbV9sZW47XHJcblxyXG5cdFx0XHR2YXIgc3ViUHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX2dlb05yVHlwZSwgMjp0aGlzLl9nZW9OclR5cGV9KTtcclxuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xyXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHNtX2VuZCkge1xyXG5cdFx0XHRcdHZhciBpZHg6bnVtYmVyID0gMDtcclxuXHRcdFx0XHR2YXIgc3RyX2Z0eXBlOm51bWJlciwgc3RyX3R5cGU6bnVtYmVyLCBzdHJfbGVuOm51bWJlciwgc3RyX2VuZDpudW1iZXI7XHJcblxyXG5cdFx0XHRcdC8vIFR5cGUsIGZpZWxkIHR5cGUsIGxlbmd0aFxyXG5cdFx0XHRcdHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0c3RyX2Z0eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0c3RyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xyXG5cclxuXHRcdFx0XHR2YXIgeDpudW1iZXIsIHk6bnVtYmVyLCB6Om51bWJlcjtcclxuXHJcblx0XHRcdFx0aWYgKHN0cl90eXBlID09IDEpIHsvL3ZlcnRleCAzZCBwb3NpdGlvbnNcclxuXHRcdFx0XHRcdHZhciB2ZXJ0czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHJcblx0XHRcdFx0XHRcdHggPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0XHR5ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcclxuXHRcdFx0XHRcdFx0eiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB4O1xyXG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB5O1xyXG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB6O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMikgey8vZmFjZSBpbmRpY2llcyBwb3NpdGlvbnNcclxuXHRcdFx0XHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xyXG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAzKSB7XHJcblx0XHRcdFx0XHR2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblx0XHRcdFx0XHRcdHV2c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDQpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgbm9ybWFsczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0bm9ybWFsc1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDYpIHtcclxuXHRcdFx0XHRcdHdfaW5kaWNlcyA9IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0d19pbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSozO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDcpIHtcclxuXHJcblx0XHRcdFx0XHR3ZWlnaHRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0d2VpZ2h0c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gOCkgey8vIDJkLXBvc2l0aW9ucyAtIG5vdCB1c2VkIHlldC5cclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gOSkgey8vIGNvbWJpbmVkIHZlcnRleDNEIHN0cmVhbSAxMyB4IGZsb2F0MzJcclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gMTApIHsvLyBjb21iaW5lZCB2ZXJ0ZXgyRCBzdHJlYW0gNSB4IGZsb2F0MzJcclxuXHRcdFx0XHRcdGlzX2N1cnZlX2dlb209dHJ1ZTtcclxuXHRcdFx0XHRcdHZhciBpZHhfcG9zOm51bWJlciA9IDA7XHJcblx0XHRcdFx0XHR2YXIgaWR4X2N1cnZlczpudW1iZXIgPSAwO1xyXG5cdFx0XHRcdFx0dmFyIGlkeF91dnM6bnVtYmVyID0gMDtcclxuXHJcblx0XHRcdFx0XHR2YXIgcG9zaXRpb25zOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0XHRcdFx0dmFyIGN1cnZlRGF0YTpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0XHRcdHZhciB1dnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geVxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9ICB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHR5cGVcclxuXHJcblx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXHJcblx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAyXHJcblxyXG5cdFx0XHRcdFx0XHR1dnNbaWR4X3V2cysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxyXG5cdFx0XHRcdFx0XHR1dnNbaWR4X3V2cysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpOyAvLyBJZ25vcmUgc3ViLW1lc2ggYXR0cmlidXRlcyBmb3Igbm93XHJcblx0XHRcdGlmKGlzX2N1cnZlX2dlb20pe1xyXG5cdFx0XHRcdHZhciBjdXJ2ZV9zdWJfZ2VvbTpDdXJ2ZVN1Ykdlb21ldHJ5ID0gbmV3IEN1cnZlU3ViR2VvbWV0cnkodHJ1ZSk7XHJcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVDdXJ2ZXMoY3VydmVEYXRhKTtcclxuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVVVnModXZzKTtcclxuXHRcdFx0XHRnZW9tLmFkZFN1Ykdlb21ldHJ5KGN1cnZlX3N1Yl9nZW9tKTtcclxuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIEN1cnZlU3ViR2VvbWV0cnlcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dmFyIHRyaWFuZ2xlX3N1Yl9nZW9tID0gbmV3IFRyaWFuZ2xlU3ViR2VvbWV0cnkodHJ1ZSk7XHJcblx0XHRcdFx0aWYgKHdlaWdodHMpXHJcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5qb2ludHNQZXJWZXJ0ZXggPSB3ZWlnaHRzLmxlbmd0aCAvICh2ZXJ0cy5sZW5ndGggLyAzKTtcclxuXHRcdFx0XHRpZiAobm9ybWFscylcclxuXHRcdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKHV2cylcclxuXHRcdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLmF1dG9EZXJpdmVVVnMgPSBmYWxzZTtcclxuXHRcdFx0XHQvL3RyaWFuZ2xlX3N1Yl9nZW9tLmF1dG9EZXJpdmVOb3JtYWxzID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKHRydWUpIHtcclxuXHRcdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLmF1dG9EZXJpdmVUYW5nZW50cyA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XHJcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlUG9zaXRpb25zKHZlcnRzKTtcclxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVWZXJ0ZXhOb3JtYWxzKG5vcm1hbHMpO1xyXG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZVVWcyh1dnMpO1xyXG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZVZlcnRleFRhbmdlbnRzKG51bGwpO1xyXG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZUpvaW50V2VpZ2h0cyh3ZWlnaHRzKTtcclxuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVKb2ludEluZGljZXMod19pbmRpY2VzKTtcclxuXHJcblx0XHRcdFx0dmFyIHNjYWxlVTpudW1iZXIgPSBzdWJQcm9wcy5nZXQoMSwgMSk7XHJcblx0XHRcdFx0dmFyIHNjYWxlVjpudW1iZXIgPSBzdWJQcm9wcy5nZXQoMiwgMSk7XHJcblx0XHRcdFx0dmFyIHNldFN1YlVWczpib29sZWFuID0gZmFsc2U7IC8vdGhpcyBzaG91bGQgcmVtYWluIGZhbHNlIGF0bSwgYmVjYXVzZSBpbiBBd2F5QnVpbGRlciB0aGUgdXYgaXMgb25seSBzY2FsZWQgYnkgdGhlIGdlb21ldHJ5XHJcblxyXG5cdFx0XHRcdGlmICgoZ2VvU2NhbGVVICE9IHNjYWxlVSkgfHwgKGdlb1NjYWxlViAhPSBzY2FsZVYpKSB7XHJcblx0XHRcdFx0XHRzZXRTdWJVVnMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0c2NhbGVVID0gZ2VvU2NhbGVVIC8gc2NhbGVVO1xyXG5cdFx0XHRcdFx0c2NhbGVWID0gZ2VvU2NhbGVWIC8gc2NhbGVWO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHNldFN1YlVWcylcclxuXHRcdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnNjYWxlVVYoc2NhbGVVLCBzY2FsZVYpO1xyXG5cdFx0XHRcdGdlb20uYWRkU3ViR2VvbWV0cnkodHJpYW5nbGVfc3ViX2dlb20pO1xyXG5cdFx0XHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdC8vIFRPRE86IFNvbWVob3cgbWFwIGluLXN1YiB0byBvdXQtc3ViIGluZGljZXMgdG8gZW5hYmxlIGxvb2stdXBcclxuXHRcdFx0Ly8gd2hlbiBjcmVhdGluZyBtZXNoZXMgKGFuZCB0aGVpciBtYXRlcmlhbCBhc3NpZ25tZW50cy4pXHJcblxyXG5cdFx0XHRzdWJzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKChnZW9TY2FsZVUgIT0gMSkgfHwgKGdlb1NjYWxlViAhPSAxKSlcclxuXHRcdFx0Z2VvbS5zY2FsZVVWKGdlb1NjYWxlVSwgZ2VvU2NhbGVWKTtcclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gZ2VvbSwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGdlb207XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVHJpYW5nbGVHZW9tZXRyeTogTmFtZSA9IFwiICsgbmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdC8vQmxvY2sgSUQgPSAxMVxyXG5cdHByaXZhdGUgcGFyc2VQcmltaXR2ZXMoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmc7XHJcblx0XHR2YXIgcHJlZmFiOlByZWZhYkJhc2U7XHJcblx0XHR2YXIgcHJpbVR5cGU6bnVtYmVyO1xyXG5cdFx0dmFyIHN1YnNfcGFyc2VkOm51bWJlcjtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzO1xyXG5cdFx0dmFyIGJzbTpNYXRyaXgzRDtcclxuXHJcblx0XHQvLyBSZWFkIG5hbWUgYW5kIHN1YiBjb3VudFxyXG5cdFx0bmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHByaW1UeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxMDE6dGhpcy5fZ2VvTnJUeXBlLCAxMDI6dGhpcy5fZ2VvTnJUeXBlLCAxMDM6dGhpcy5fZ2VvTnJUeXBlLCAxMTA6dGhpcy5fZ2VvTnJUeXBlLCAxMTE6dGhpcy5fZ2VvTnJUeXBlLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDMwMzpBV0RQYXJzZXIuVUlOVDE2LCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTCwgNzAzOkFXRFBhcnNlci5CT09MLCA3MDQ6QVdEUGFyc2VyLkJPT0x9KTtcclxuXHJcblx0XHR2YXIgcHJpbWl0aXZlVHlwZXM6QXJyYXk8c3RyaW5nPiA9IFtcIlVuc3VwcG9ydGVkIFR5cGUtSURcIiwgXCJQcmltaXRpdmVQbGFuZVByZWZhYlwiLCBcIlByaW1pdGl2ZUN1YmVQcmVmYWJcIiwgXCJQcmltaXRpdmVTcGhlcmVQcmVmYWJcIiwgXCJQcmltaXRpdmVDeWxpbmRlclByZWZhYlwiLCBcIlByaW1pdGl2ZXNDb25lUHJlZmFiXCIsIFwiUHJpbWl0aXZlc0NhcHN1bGVQcmVmYWJcIiwgXCJQcmltaXRpdmVzVG9ydXNQcmVmYWJcIl1cclxuXHJcblx0XHRzd2l0Y2ggKHByaW1UeXBlKSB7XHJcblx0XHRcdC8vIHRvIGRvLCBub3QgYWxsIHByb3BlcnRpZXMgYXJlIHNldCBvbiBhbGwgcHJpbWl0aXZlc1xyXG5cclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVQbGFuZVByZWZhYihwcm9wcy5nZXQoMTAxLCAxMDApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxKSwgcHJvcHMuZ2V0KDMwMiwgMSksIHByb3BzLmdldCg3MDEsIHRydWUpLCBwcm9wcy5nZXQoNzAyLCBmYWxzZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDdWJlUHJlZmFiKHByb3BzLmdldCgxMDEsIDEwMCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgxMDMsIDEwMCksIHByb3BzLmdldCgzMDEsIDEpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDMwMywgMSksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlU3BoZXJlUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxMiksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCA1MCksIHByb3BzLmdldCgxMDMsIDEwMCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMSksIHRydWUsIHRydWUsIHRydWUpOyAvLyBib29sNzAxLCBib29sNzAyLCBib29sNzAzLCBib29sNzA0KTtcclxuXHRcdFx0XHRpZiAoIXByb3BzLmdldCg3MDEsIHRydWUpKVxyXG5cdFx0XHRcdFx0KDxQcmltaXRpdmVDeWxpbmRlclByZWZhYj5wcmVmYWIpLnRvcENsb3NlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmICghcHJvcHMuZ2V0KDcwMiwgdHJ1ZSkpXHJcblx0XHRcdFx0XHQoPFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiPnByZWZhYikuYm90dG9tQ2xvc2VkID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKCFwcm9wcy5nZXQoNzAzLCB0cnVlKSlcclxuXHRcdFx0XHRcdCg8UHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWI+cHJlZmFiKS55VXAgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDU6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZUNvbmVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSwgcHJvcHMuZ2V0KDcwMiwgdHJ1ZSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSA2OlxyXG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDYXBzdWxlUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxNSksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgNzpcclxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlVG9ydXNQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCA1MCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgOCksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByZWZhYkJhc2UoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVSUk9SOiBVTlNVUFBPUlRFRCBQUkVGQUJfVFlQRVwiKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoKHByb3BzLmdldCgxMTAsIDEpICE9IDEpIHx8IChwcm9wcy5nZXQoMTExLCAxKSAhPSAxKSkge1xyXG5cdFx0XHQvL2dlb20uc3ViR2VvbWV0cmllcztcclxuXHRcdFx0Ly9nZW9tLnNjYWxlVVYocHJvcHMuZ2V0KDExMCwgMSksIHByb3BzLmdldCgxMTEsIDEpKTsgLy9UT0RPIGFkZCBiYWNrIHNjYWxpbmcgdG8gcHJlZmFic1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0cHJlZmFiLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQocHJlZmFiLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gcHJlZmFiO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRpZiAoKHByaW1UeXBlIDwgMCkgfHwgKHByaW1UeXBlID4gNykpIHtcclxuXHRcdFx0XHRwcmltVHlwZSA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBQcmltaXZpdGU6IE5hbWUgPSBcIiArIG5hbWUgKyBcInwgdHlwZSA9IFwiICsgcHJpbWl0aXZlVHlwZXNbcHJpbVR5cGVdKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEJsb2NrIElEID0gMjJcclxuXHRwcml2YXRlIHBhcnNlQ29udGFpbmVyKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nO1xyXG5cdFx0dmFyIHBhcl9pZDpudW1iZXI7XHJcblx0XHR2YXIgbXR4Ok1hdHJpeDNEO1xyXG5cdFx0dmFyIGN0cjpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cdFx0dmFyIHBhcmVudDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cclxuXHRcdHBhcl9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRtdHggPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuXHRcdG5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0dmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcclxuXHRcdGN0ciA9IG5ldyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XHJcblx0XHRjdHIudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSk7XHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0dmFyIG9iajpEaXNwbGF5T2JqZWN0ID0gKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5WzFdKS5hZGRDaGlsZChjdHIpO1xyXG5cdFx0XHRwYXJlbnROYW1lID0gKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0fSBlbHNlIGlmIChwYXJfaWQgPiAwKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1sgYmxvY2tJRCBdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwYXJlbnQgZm9yIHRoaXMgT2JqZWN0Q29udGFpbmVyM0RcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChjdHIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluIEFXRCB2ZXJzaW9uIDIuMSB3ZSByZWFkIHRoZSBDb250YWluZXIgcHJvcGVydGllc1xyXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XHJcblx0XHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4fSk7XHJcblx0XHRcdGN0ci5waXZvdCA9IG5ldyBWZWN0b3IzRChwcm9wcy5nZXQoMSwgMCksIHByb3BzLmdldCgyLCAwKSwgcHJvcHMuZ2V0KDMsIDApKTtcclxuXHRcdH1cclxuXHRcdC8vIGluIG90aGVyIHZlcnNpb25zIHdlIGRvIG5vdCByZWFkIHRoZSBDb250YWluZXIgcHJvcGVydGllc1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHRoZSBleHRyYVByb3BlcnRpZXMgc2hvdWxkIG9ubHkgYmUgc2V0IGZvciBBV0QyLjEtRmlsZXMsIGJ1dCBpcyByZWFkIGZvciBib3RoIHZlcnNpb25zXHJcblx0XHRjdHIuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBjdHIsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjdHI7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQ29udGFpbmVyOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEJsb2NrIElEID0gMjNcclxuXHRwcml2YXRlIHBhcnNlTWVzaEluc3RhbmNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG51bV9tYXRlcmlhbHM6bnVtYmVyO1xyXG5cdFx0dmFyIG1hdGVyaWFsc19wYXJzZWQ6bnVtYmVyO1xyXG5cdFx0dmFyIHBhcmVudDpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xyXG5cdFx0dmFyIHBhcl9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIG10eDpNYXRyaXgzRCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcclxuXHRcdHZhciBkYXRhX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgZ2VvbTpHZW9tZXRyeTtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5R2VvbWV0cnk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRhdGFfaWQsIFtBc3NldFR5cGUuR0VPTUVUUlldKVxyXG5cclxuXHRcdGlmIChyZXR1cm5lZEFycmF5R2VvbWV0cnlbMF0pIHtcclxuXHRcdFx0Z2VvbSA9IDxHZW9tZXRyeT4gcmV0dXJuZWRBcnJheUdlb21ldHJ5WzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBHZW9tZXRyeSBmb3IgdGhpcyBNZXNoLiBBIGVtcHR5IEdlb21ldHJ5IGlzIGNyZWF0ZWQhXCIpO1xyXG5cdFx0XHRnZW9tID0gbmV3IEdlb21ldHJ5KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmdlb0lEID0gZGF0YV9pZDtcclxuXHRcdHZhciBtYXRlcmlhbHM6QXJyYXk8TWF0ZXJpYWxCYXNlPiA9IG5ldyBBcnJheTxNYXRlcmlhbEJhc2U+KCk7XHJcblx0XHRudW1fbWF0ZXJpYWxzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdHZhciBtYXRlcmlhbE5hbWVzOkFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cdFx0bWF0ZXJpYWxzX3BhcnNlZCA9IDA7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlNYXRlcmlhbDpBcnJheTxhbnk+O1xyXG5cclxuXHRcdHdoaWxlIChtYXRlcmlhbHNfcGFyc2VkIDwgbnVtX21hdGVyaWFscykge1xyXG5cdFx0XHR2YXIgbWF0X2lkOm51bWJlcjtcclxuXHRcdFx0bWF0X2lkID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0cmV0dXJuZWRBcnJheU1hdGVyaWFsID0gdGhpcy5nZXRBc3NldEJ5SUQobWF0X2lkLCBbQXNzZXRUeXBlLk1BVEVSSUFMXSlcclxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheU1hdGVyaWFsWzBdKSAmJiAobWF0X2lkID4gMCkpIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBNYXRlcmlhbCBOciBcIiArIG1hdGVyaWFsc19wYXJzZWQgKyBcIiAoSUQgPSBcIiArIG1hdF9pZCArIFwiICkgZm9yIHRoaXMgTWVzaFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG06TWF0ZXJpYWxCYXNlID0gPE1hdGVyaWFsQmFzZT4gcmV0dXJuZWRBcnJheU1hdGVyaWFsWzFdO1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxzLnB1c2gobSk7XHJcblx0XHRcdG1hdGVyaWFsTmFtZXMucHVzaChtLm5hbWUpO1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBtZXNoOk1lc2ggPSBuZXcgTWVzaChnZW9tLCBudWxsKTtcclxuXHRcdG1lc2gudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xyXG5cclxuXHRcdHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcclxuXHJcblx0XHRpZiAocmV0dXJuZWRBcnJheVBhcmVudFswXSkge1xyXG5cdFx0XHR2YXIgb2JqQzpEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV07XHJcblx0XHRcdG9iakMuYWRkQ2hpbGQobWVzaCk7XHJcblx0XHRcdHBhcmVudE5hbWUgPSBvYmpDLm5hbWU7XHJcblx0XHR9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwYXJlbnQgZm9yIHRoaXMgTWVzaFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XHJcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKG1lc2gpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtYXRlcmlhbHMubGVuZ3RoID49IDEgJiYgbWVzaC5zdWJNZXNoZXMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0bWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsc1swXTtcclxuXHRcdH0gZWxzZSBpZiAobWF0ZXJpYWxzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0dmFyIGk6bnVtYmVyO1xyXG5cclxuXHRcdFx0Ly8gQXNzaWduIGVhY2ggc3ViLW1lc2ggaW4gdGhlIG1lc2ggYSBtYXRlcmlhbCBmcm9tIHRoZSBsaXN0LiBJZiBtb3JlIHN1Yi1tZXNoZXNcclxuXHRcdFx0Ly8gdGhhbiBtYXRlcmlhbHMsIHJlcGVhdCB0aGUgbGFzdCBtYXRlcmlhbCBmb3IgYWxsIHJlbWFpbmluZyBzdWItbWVzaGVzLlxyXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWVzaC5zdWJNZXNoZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRtZXNoLnN1Yk1lc2hlc1tpXS5tYXRlcmlhbCA9IG1hdGVyaWFsc1tNYXRoLm1pbihtYXRlcmlhbHMubGVuZ3RoIC0gMSwgaSldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMSkpIHtcclxuXHRcdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDgsIDU6QVdEUGFyc2VyLkJPT0x9KTtcclxuXHRcdFx0bWVzaC5waXZvdCA9IG5ldyBWZWN0b3IzRCg8bnVtYmVyPnByb3BzLmdldCgxLCAwKSwgPG51bWJlcj5wcm9wcy5nZXQoMiwgMCksIDxudW1iZXI+IHByb3BzLmdldCgzLCAwKSk7XHJcblx0XHRcdG1lc2guY2FzdHNTaGFkb3dzID0gcHJvcHMuZ2V0KDUsIHRydWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bWVzaC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1lc2gsIG5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBtZXNoO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE1lc2g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUgKyBcInwgR2VvbWV0cnktTmFtZSA9IFwiICsgZ2VvbS5uYW1lICsgXCIgfCBTdWJNZXNoZXMgPSBcIiArIG1lc2guc3ViTWVzaGVzLmxlbmd0aCArIFwiIHwgTWF0LU5hbWVzID0gXCIgKyBtYXRlcmlhbE5hbWVzLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdC8vQmxvY2sgSUQgMzFcclxuXHRwcml2YXRlIHBhcnNlU2t5Ym94SW5zdGFuY2UoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgY3ViZVRleEFkZHI6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheUN1YmVUZXg6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGN1YmVUZXhBZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0aWYgKCghcmV0dXJuZWRBcnJheUN1YmVUZXhbMF0pICYmIChjdWJlVGV4QWRkciAhPSAwKSlcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEN1YmV0ZXh0dXJlIChJRCA9IFwiICsgY3ViZVRleEFkZHIgKyBcIiApIGZvciB0aGlzIFNreWJveFwiKTtcclxuXHRcdHZhciBhc3NldDpTa3lib3ggPSBuZXcgU2t5Ym94KDxJbWFnZUN1YmVUZXh0dXJlPiByZXR1cm5lZEFycmF5Q3ViZVRleFsxXSk7XHJcblxyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbClcclxuXHRcdGFzc2V0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChhc3NldCwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNreWJveDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBDdWJlVGV4dHVyZS1OYW1lID0gXCIgKyAoPEltYWdlQ3ViZVRleHR1cmU+IHJldHVybmVkQXJyYXlDdWJlVGV4WzFdKS5uYW1lKTtcclxuXHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gNDFcclxuXHRwcml2YXRlIHBhcnNlTGlnaHQoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbGlnaHQ6TGlnaHRCYXNlO1xyXG5cdFx0dmFyIG5ld1NoYWRvd01hcHBlcjpTaGFkb3dNYXBwZXJCYXNlO1xyXG5cclxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBsaWdodFR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX3Byb3BzTnJUeXBlLCAyOnRoaXMuX3Byb3BzTnJUeXBlLCAzOkFXRFBhcnNlci5DT0xPUiwgNDp0aGlzLl9wcm9wc05yVHlwZSwgNTp0aGlzLl9wcm9wc05yVHlwZSwgNjpBV0RQYXJzZXIuQk9PTCwgNzpBV0RQYXJzZXIuQ09MT1IsIDg6dGhpcy5fcHJvcHNOclR5cGUsIDk6QVdEUGFyc2VyLlVJTlQ4LCAxMDpBV0RQYXJzZXIuVUlOVDgsIDExOnRoaXMuX3Byb3BzTnJUeXBlLCAxMjpBV0RQYXJzZXIuVUlOVDE2LCAyMTp0aGlzLl9tYXRyaXhOclR5cGUsIDIyOnRoaXMuX21hdHJpeE5yVHlwZSwgMjM6dGhpcy5fbWF0cml4TnJUeXBlfSk7XHJcblx0XHR2YXIgc2hhZG93TWFwcGVyVHlwZTpudW1iZXIgPSBwcm9wcy5nZXQoOSwgMCk7XHJcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xyXG5cdFx0dmFyIGxpZ2h0VHlwZXM6QXJyYXk8c3RyaW5nPiA9IFtcIlVuc3VwcG9ydGVkIExpZ2h0VHlwZVwiLCBcIlBvaW50TGlnaHRcIiwgXCJEaXJlY3Rpb25hbExpZ2h0XCJdO1xyXG5cdFx0dmFyIHNoYWRvd01hcHBlclR5cGVzOkFycmF5PHN0cmluZz4gPSBbXCJObyBTaGFkb3dNYXBwZXJcIiwgXCJEaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiLCBcIk5lYXJEaXJlY3Rpb25hbFNoYWRvd01hcHBlclwiLCBcIkNhc2NhZGVTaGFkb3dNYXBwZXJcIiwgXCJDdWJlTWFwU2hhZG93TWFwcGVyXCJdO1xyXG5cclxuXHRcdGlmIChsaWdodFR5cGUgPT0gMSkge1xyXG5cdFx0XHRsaWdodCA9IG5ldyBQb2ludExpZ2h0KCk7XHJcblxyXG5cdFx0XHQoPFBvaW50TGlnaHQ+IGxpZ2h0KS5yYWRpdXMgPSBwcm9wcy5nZXQoMSwgOTAwMDApO1xyXG5cdFx0XHQoPFBvaW50TGlnaHQ+IGxpZ2h0KS5mYWxsT2ZmID0gcHJvcHMuZ2V0KDIsIDEwMDAwMCk7XHJcblxyXG5cdFx0XHRpZiAoc2hhZG93TWFwcGVyVHlwZSA+IDApIHtcclxuXHRcdFx0XHRpZiAoc2hhZG93TWFwcGVyVHlwZSA9PSA0KSB7XHJcblx0XHRcdFx0XHRuZXdTaGFkb3dNYXBwZXIgPSBuZXcgQ3ViZU1hcFNoYWRvd01hcHBlcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGlnaHQudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobGlnaHRUeXBlID09IDIpIHtcclxuXHJcblx0XHRcdGxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQocHJvcHMuZ2V0KDIxLCAwKSwgcHJvcHMuZ2V0KDIyLCAtMSksIHByb3BzLmdldCgyMywgMSkpO1xyXG5cclxuXHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPiAwKSB7XHJcblx0XHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0bmV3U2hhZG93TWFwcGVyID0gbmV3IERpcmVjdGlvbmFsU2hhZG93TWFwcGVyKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL2lmIChzaGFkb3dNYXBwZXJUeXBlID09IDIpXHJcblx0XHRcdFx0Ly8gIG5ld1NoYWRvd01hcHBlciA9IG5ldyBOZWFyRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXIocHJvcHMuZ2V0KDExLCAwLjUpKTtcclxuXHRcdFx0XHQvL2lmIChzaGFkb3dNYXBwZXJUeXBlID09IDMpXHJcblx0XHRcdFx0Ly8gICBuZXdTaGFkb3dNYXBwZXIgPSBuZXcgQ2FzY2FkZVNoYWRvd01hcHBlcihwcm9wcy5nZXQoMTIsIDMpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0XHRsaWdodC5jb2xvciA9IHByb3BzLmdldCgzLCAweGZmZmZmZik7XHJcblx0XHRsaWdodC5zcGVjdWxhciA9IHByb3BzLmdldCg0LCAxLjApO1xyXG5cdFx0bGlnaHQuZGlmZnVzZSA9IHByb3BzLmdldCg1LCAxLjApO1xyXG5cdFx0bGlnaHQuYW1iaWVudENvbG9yID0gcHJvcHMuZ2V0KDcsIDB4ZmZmZmZmKTtcclxuXHRcdGxpZ2h0LmFtYmllbnQgPSBwcm9wcy5nZXQoOCwgMC4wKTtcclxuXHJcblx0XHQvLyBpZiBhIHNoYWRvd01hcHBlciBoYXMgYmVlbiBjcmVhdGVkLCBhZGp1c3QgdGhlIGRlcHRoTWFwU2l6ZSBpZiBuZWVkZWQsIGFzc2lnbiB0byBsaWdodCBhbmQgc2V0IGNhc3RTaGFkb3dzIHRvIHRydWVcclxuXHRcdGlmIChuZXdTaGFkb3dNYXBwZXIpIHtcclxuXHRcdFx0aWYgKG5ld1NoYWRvd01hcHBlciBpbnN0YW5jZW9mIEN1YmVNYXBTaGFkb3dNYXBwZXIpIHtcclxuXHRcdFx0XHRpZiAocHJvcHMuZ2V0KDEwLCAxKSAhPSAxKSB7XHJcblx0XHRcdFx0XHRuZXdTaGFkb3dNYXBwZXIuZGVwdGhNYXBTaXplID0gdGhpcy5fZGVwdGhTaXplRGljW3Byb3BzLmdldCgxMCwgMSldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAocHJvcHMuZ2V0KDEwLCAyKSAhPSAyKSB7XHJcblx0XHRcdFx0XHRuZXdTaGFkb3dNYXBwZXIuZGVwdGhNYXBTaXplID0gdGhpcy5fZGVwdGhTaXplRGljW3Byb3BzLmdldCgxMCwgMildO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGlnaHQuc2hhZG93TWFwcGVyID0gbmV3U2hhZG93TWFwcGVyO1xyXG5cdFx0XHRsaWdodC5jYXN0c1NoYWRvd3MgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwYXJfaWQgIT0gMCkge1xyXG5cclxuXHRcdFx0dmFyIHJldHVybmVkQXJyYXlQYXJlbnQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKVxyXG5cclxuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlQYXJlbnRbMF0pIHtcclxuXHRcdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV0pLmFkZENoaWxkKGxpZ2h0KTtcclxuXHRcdFx0XHRwYXJlbnROYW1lID0gKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdKS5uYW1lO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIExpZ2h0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChsaWdodCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPCBJQXNzZXQ+IGxpZ2h0LCBuYW1lKTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGxpZ2h0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBMaWdodDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUeXBlID0gXCIgKyBsaWdodFR5cGVzW2xpZ2h0VHlwZV0gKyBcIiB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lICsgXCIgfCBTaGFkb3dNYXBwZXItVHlwZSA9IFwiICsgc2hhZG93TWFwcGVyVHlwZXNbc2hhZG93TWFwcGVyVHlwZV0pO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA0M1xyXG5cdHByaXZhdGUgcGFyc2VDYW1lcmEoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblxyXG5cdFx0dmFyIHBhcl9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0dmFyIG10eDpNYXRyaXgzRCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIHBhcmVudE5hbWU6c3RyaW5nID0gXCJSb290IChUb3BMZXZlbClcIjtcclxuXHRcdHZhciBwcm9qZWN0aW9uOlByb2plY3Rpb25CYXNlO1xyXG5cclxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpOyAvL3NldCBhcyBhY3RpdmUgY2FtZXJhXHJcblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpOyAvL2xlbmd0aG9mIGxlbnNlcyAtIG5vdCB1c2VkIHlldFxyXG5cclxuXHRcdHZhciBwcm9qZWN0aW9udHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMTA0OnRoaXMuX3Byb3BzTnJUeXBlfSk7XHJcblxyXG5cdFx0c3dpdGNoIChwcm9qZWN0aW9udHlwZSkge1xyXG5cdFx0XHRjYXNlIDUwMDE6XHJcblx0XHRcdFx0cHJvamVjdGlvbiA9IG5ldyBQZXJzcGVjdGl2ZVByb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgNjApKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA1MDAyOlxyXG5cdFx0XHRcdHByb2plY3Rpb24gPSBuZXcgT3J0aG9ncmFwaGljUHJvamVjdGlvbihwcm9wcy5nZXQoMTAxLCA1MDApKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA1MDAzOlxyXG5cdFx0XHRcdHByb2plY3Rpb24gPSBuZXcgT3J0aG9ncmFwaGljT2ZmQ2VudGVyUHJvamVjdGlvbihwcm9wcy5nZXQoMTAxLCAtNDAwKSwgcHJvcHMuZ2V0KDEwMiwgNDAwKSwgcHJvcHMuZ2V0KDEwMywgLTMwMCksIHByb3BzLmdldCgxMDQsIDMwMCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwidW5zdXBwb3J0ZWRMZW5zdHlwZVwiKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGNhbWVyYTpDYW1lcmEgPSBuZXcgQ2FtZXJhKHByb2plY3Rpb24pO1xyXG5cdFx0Y2FtZXJhLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcclxuXHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheVBhcmVudDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pXHJcblxyXG5cdFx0aWYgKHJldHVybmVkQXJyYXlQYXJlbnRbMF0pIHtcclxuXHJcblx0XHRcdHZhciBvYmpDOkRpc3BsYXlPYmplY3RDb250YWluZXIgPSA8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVBhcmVudFsxXTtcclxuXHRcdFx0b2JqQy5hZGRDaGlsZChjYW1lcmEpO1xyXG5cclxuXHRcdFx0cGFyZW50TmFtZSA9IG9iakMubmFtZTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwYXJlbnQgZm9yIHRoaXMgQ2FtZXJhXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcclxuXHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQoY2FtZXJhKTtcclxuXHRcdH1cclxuXHJcblx0XHRjYW1lcmEubmFtZSA9IG5hbWU7XHJcblx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xyXG5cdFx0Y2FtZXJhLnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xyXG5cdFx0Y2FtZXJhLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoY2FtZXJhLCBuYW1lKTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGNhbWVyYVxyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIENhbWVyYTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBQcm9qZWN0aW9udHlwZSA9IFwiICsgcHJvamVjdGlvbiArIFwiIHwgUGFyZW50LU5hbWUgPSBcIiArIHBhcmVudE5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA1MVxyXG5cdHByaXZhdGUgcGFyc2VMaWdodFBpY2tlcihibG9ja0lEOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBudW1MaWdodHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIGxpZ2h0c0FycmF5OkFycmF5PExpZ2h0QmFzZT4gPSBuZXcgQXJyYXk8TGlnaHRCYXNlPigpO1xyXG5cdFx0dmFyIGs6bnVtYmVyID0gMDtcclxuXHRcdHZhciBsaWdodElEOm51bWJlciA9IDA7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXlMaWdodDpBcnJheTxhbnk+O1xyXG5cdFx0dmFyIGxpZ2h0c0FycmF5TmFtZXM6QXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcblxyXG5cdFx0Zm9yIChrID0gMDsgayA8IG51bUxpZ2h0czsgaysrKSB7XHJcblx0XHRcdGxpZ2h0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRyZXR1cm5lZEFycmF5TGlnaHQgPSB0aGlzLmdldEFzc2V0QnlJRChsaWdodElELCBbQXNzZXRUeXBlLkxJR0hUXSlcclxuXHJcblx0XHRcdGlmIChyZXR1cm5lZEFycmF5TGlnaHRbMF0pIHtcclxuXHRcdFx0XHRsaWdodHNBcnJheS5wdXNoKDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlMaWdodFsxXSk7XHJcblx0XHRcdFx0bGlnaHRzQXJyYXlOYW1lcy5wdXNoKCggPExpZ2h0QmFzZT4gcmV0dXJuZWRBcnJheUxpZ2h0WzFdKS5uYW1lKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBMaWdodCBOciBcIiArIGsgKyBcIiAoSUQgPSBcIiArIGxpZ2h0SUQgKyBcIiApIGZvciB0aGlzIExpZ2h0UGlja2VyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGxpZ2h0c0FycmF5Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGhpcyBMaWdodFBpY2tlciwgY2F1c2Ugbm8gTGlnaHQgd2FzIGZvdW5kLlwiKTtcclxuXHRcdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRcdHJldHVybjsgLy9yZXR1cm4gd2l0aG91dCBhbnkgbW9yZSBwYXJzaW5nIGZvciB0aGlzIGJsb2NrXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGxpZ2h0UGljazpMaWdodFBpY2tlckJhc2UgPSBuZXcgU3RhdGljTGlnaHRQaWNrZXIobGlnaHRzQXJyYXkpO1xyXG5cdFx0bGlnaHRQaWNrLm5hbWUgPSBuYW1lO1xyXG5cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbGlnaHRQaWNrLCBuYW1lKTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGxpZ2h0UGlja1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU3RhdGljTGlnaHRQaWNrZXI6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyBsaWdodHNBcnJheU5hbWVzLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDgxXHJcblx0cHJpdmF0ZSBwYXJzZU1hdGVyaWFsKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0Ly8gVE9ETzogbm90IHVzZWRcclxuXHRcdC8vLy9ibG9ja0xlbmd0aCA9IGJsb2NrLmxlbjtcclxuXHRcdHZhciBuYW1lOnN0cmluZztcclxuXHRcdHZhciB0eXBlOm51bWJlcjtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzO1xyXG5cdFx0dmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcclxuXHRcdHZhciBhdHRyaWJ1dGVzOk9iamVjdDtcclxuXHRcdHZhciBmaW5hbGl6ZTpib29sZWFuO1xyXG5cdFx0dmFyIG51bV9tZXRob2RzOm51bWJlcjtcclxuXHRcdHZhciBtZXRob2RzX3BhcnNlZDpudW1iZXI7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG5cclxuXHRcdG5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR0eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRudW1fbWV0aG9kcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cclxuXHRcdC8vIFJlYWQgbWF0ZXJpYWwgbnVtZXJpY2FsIHByb3BlcnRpZXNcclxuXHRcdC8vICgxPWNvbG9yLCAyPWJpdG1hcCB1cmwsIDEwPWFscGhhLCAxMT1hbHBoYV9ibGVuZGluZywgMTI9YWxwaGFfdGhyZXNob2xkLCAxMz1yZXBlYXQpXHJcblx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsgMTpBV0RQYXJzZXIuSU5UMzIsIDI6QVdEUGFyc2VyLkJBRERSLCAxMDp0aGlzLl9wcm9wc05yVHlwZSwgMTE6QVdEUGFyc2VyLkJPT0wsIDEyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMzpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cclxuXHRcdG1ldGhvZHNfcGFyc2VkID0gMDtcclxuXHRcdHdoaWxlIChtZXRob2RzX3BhcnNlZCA8IG51bV9tZXRob2RzKSB7XHJcblx0XHRcdHZhciBtZXRob2RfdHlwZTpudW1iZXI7XHJcblxyXG5cdFx0XHRtZXRob2RfdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0XHRtZXRob2RzX3BhcnNlZCArPSAxO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGRlYnVnU3RyaW5nOnN0cmluZyA9IFwiXCI7XHJcblx0XHRhdHRyaWJ1dGVzID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRpZiAodHlwZSA9PT0gMSkgeyAvLyBDb2xvciBtYXRlcmlhbFxyXG5cdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIENvbG9yTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgXCI7XHJcblx0XHRcdHZhciBjb2xvcjpudW1iZXI7XHJcblx0XHRcdGNvbG9yID0gcHJvcHMuZ2V0KDEsIDB4ZmZmZmZmKTtcclxuXHRcdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlIDwgMikge1xyXG5cdFx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvciwgcHJvcHMuZ2V0KDEwLCAxLjApKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IpO1xyXG5cdFx0XHRcdG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gMikge1xyXG5cdFx0XHR2YXIgdGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDApO1xyXG5cclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHJcblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmICh0ZXhfYWRkciA+IDApKVxyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBEaWZmc3VlVGV4dHVyZSAoSUQgPSBcIiArIHRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNYXRlcmlhbFwiKTtcclxuXHJcblx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbCg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPCAyKSB7XHJcblx0XHRcdFx0bWF0LmFscGhhQmxlbmRpbmcgPSBwcm9wcy5nZXQoMTEsIGZhbHNlKTtcclxuXHRcdFx0XHRtYXQuYWxwaGEgPSBwcm9wcy5nZXQoMTAsIDEuMCk7XHJcblx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIG1hdC5uYW1lO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcblx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgbWF0Lm5hbWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRtYXQuZXh0cmEgPSBhdHRyaWJ1dGVzO1xyXG5cdFx0bWF0LmFscGhhVGhyZXNob2xkID0gcHJvcHMuZ2V0KDEyLCAwLjApO1xyXG5cdFx0bWF0LnJlcGVhdCA9IHByb3BzLmdldCgxMywgZmFsc2UpO1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWF0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkZWJ1Z1N0cmluZyk7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQmxvY2sgSUQgPSA4MSBBV0QyLjFcclxuXHRwcml2YXRlIHBhcnNlTWF0ZXJpYWxfdjEoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbWF0Ok1ldGhvZE1hdGVyaWFsO1xyXG5cdFx0dmFyIG5vcm1hbFRleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRcdHZhciBzcGVjVGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcclxuXHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBudW1fbWV0aG9kczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQzMiwgMjpBV0RQYXJzZXIuQkFERFIsIDM6QVdEUGFyc2VyLkJBRERSLCA0OkFXRFBhcnNlci5VSU5UOCwgNTpBV0RQYXJzZXIuQk9PTCwgNjpBV0RQYXJzZXIuQk9PTCwgNzpBV0RQYXJzZXIuQk9PTCwgODpBV0RQYXJzZXIuQk9PTCwgOTpBV0RQYXJzZXIuVUlOVDgsIDEwOnRoaXMuX3Byb3BzTnJUeXBlLCAxMTpBV0RQYXJzZXIuQk9PTCwgMTI6dGhpcy5fcHJvcHNOclR5cGUsIDEzOkFXRFBhcnNlci5CT09MLCAxNTp0aGlzLl9wcm9wc05yVHlwZSwgMTY6QVdEUGFyc2VyLlVJTlQzMiwgMTc6QVdEUGFyc2VyLkJBRERSLCAxODp0aGlzLl9wcm9wc05yVHlwZSwgMTk6dGhpcy5fcHJvcHNOclR5cGUsIDIwOkFXRFBhcnNlci5VSU5UMzIsIDIxOkFXRFBhcnNlci5CQUREUiwgMjI6QVdEUGFyc2VyLkJBRERSfSk7XHJcblx0XHR2YXIgc3BlemlhbFR5cGU6bnVtYmVyID0gcHJvcHMuZ2V0KDQsIDApO1xyXG5cdFx0dmFyIGRlYnVnU3RyaW5nOnN0cmluZyA9IFwiUGFyc2VkIE1hdGVyaWFsIFwiO1xyXG5cclxuXHRcdGlmIChzcGV6aWFsVHlwZSA+PSAyKSB7Ly90aGlzIGlzIG5vIHN1cHBvcnRlZCBtYXRlcmlhbFxyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJNYXRlcmlhbC1zcGV6aWFsVHlwZSAnXCIgKyBzcGV6aWFsVHlwZSArIFwiJyBpcyBub3Qgc3VwcG9ydGVkLCBjYW4gb25seSBiZSAwOnNpbmdsZVBhc3MsIDE6TXVsdGlQYXNzICFcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodHlwZSA8PSAyKSB7Ly8gQ29sb3IgbWF0ZXJpYWxcclxuXHRcdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlID09IDEpXHJcblx0XHRcdFx0c3BlemlhbFR5cGUgPSAwO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLm1hdGVyaWFsTW9kZSA9PSAyKVxyXG5cdFx0XHRcdHNwZXppYWxUeXBlID0gMTtcclxuXHJcblx0XHRcdGlmIChzcGV6aWFsVHlwZSA8IDIpIHsvL3RoaXMgaXMgU2luZ2xlUGFzcyBvciBNdWx0aVBhc3NcclxuXHJcblx0XHRcdFx0aWYgKHR5cGUgPT0gMSkgey8vIENvbG9yIG1hdGVyaWFsXHJcblx0XHRcdFx0XHR2YXIgY29sb3I6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDB4Y2NjY2NjKTsvL1RPRE8gdGVtcG9yYXJpbHkgc3dhcHBlZCBzbyB0aGF0IGRpZmZ1c2UgY29sb3IgZ29lcyB0byBhbWJpZW50XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNwZXppYWxUeXBlID09IDEpIHsvL1x0TXVsdGlQYXNzTWF0ZXJpYWxcclxuXHRcdFx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yKTtcclxuXHRcdFx0XHRcdFx0bWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBDb2xvck1hdGVyaWFsKE11bHRpUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgXCI7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHsgLy9cdFNpbmdsZVBhc3NNYXRlcmlhbFxyXG5cdFx0XHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IsIHByb3BzLmdldCgxMCwgMS4wKSk7XHJcblx0XHRcdFx0XHRcdG1hdC5hbHBoYUJsZW5kaW5nID0gcHJvcHMuZ2V0KDExLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgQ29sb3JNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBcIjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09IDIpIHsvLyB0ZXh0dXJlIG1hdGVyaWFsXHJcblx0XHRcdFx0XHR2YXIgdGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDApOy8vVE9ETyB0ZW1wb3JhcmlseSBzd2FwcGVkIHNvIHRoYXQgZGlmZnVzZSB0ZXh0dXJlIGdvZXMgdG8gYW1iaWVudFxyXG5cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAodGV4X2FkZHIgPiAwKSlcclxuXHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEFtYmllbnRUZXh0dXJlIChJRCA9IFwiICsgdGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cclxuXHRcdFx0XHRcdHZhciB0ZXh0dXJlOlRleHR1cmUyREJhc2UgPSByZXR1cm5lZEFycmF5WzFdO1xyXG5cclxuXHRcdFx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbCh0ZXh0dXJlKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc3BlemlhbFR5cGUgPT0gMSkgey8vIE11bHRpUGFzc01hdGVyaWFsXHJcblx0XHRcdFx0XHRcdG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcblxyXG5cdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIE1ldGhvZE1hdGVyaWFsKE11bHRpUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyB0ZXh0dXJlLm5hbWU7XHJcblx0XHRcdFx0XHR9IGVsc2Ugey8vXHRTaW5nbGVQYXNzTWF0ZXJpYWxcclxuXHRcdFx0XHRcdFx0bWF0LmFscGhhID0gcHJvcHMuZ2V0KDEwLCAxLjApO1xyXG5cdFx0XHRcdFx0XHRtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIHRleHR1cmUubmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBkaWZmdXNlVGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xyXG5cdFx0XHRcdHZhciBkaWZmdXNlVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDE3LCAwKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRpZmZ1c2VUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChkaWZmdXNlVGV4X2FkZHIgIT0gMCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBEaWZmdXNlVGV4dHVyZSAoSUQgPSBcIiArIGRpZmZ1c2VUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdGRpZmZ1c2VUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHJcblx0XHRcdFx0aWYgKGRpZmZ1c2VUZXh0dXJlKSB7XHJcblx0XHRcdFx0XHRtYXQuZGlmZnVzZVRleHR1cmUgPSBkaWZmdXNlVGV4dHVyZTtcclxuXHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVRleHR1cmUtTmFtZSA9IFwiICsgZGlmZnVzZVRleHR1cmUubmFtZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBub3JtYWxUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMywgMCk7XHJcblxyXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChub3JtYWxUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblxyXG5cdFx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChub3JtYWxUZXhfYWRkciAhPSAwKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIE5vcm1hbFRleHR1cmUgKElEID0gXCIgKyBub3JtYWxUZXhfYWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHRcdFx0bm9ybWFsVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IE5vcm1hbFRleHR1cmUtTmFtZSA9IFwiICsgbm9ybWFsVGV4dHVyZS5uYW1lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIHNwZWNUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMjEsIDApO1xyXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChzcGVjVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAoc3BlY1RleF9hZGRyICE9IDApKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU3BlY3VsYXJUZXh0dXJlIChJRCA9IFwiICsgc3BlY1RleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdHNwZWNUZXh0dXJlID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJUZXh0dXJlLU5hbWUgPSBcIiArIHNwZWNUZXh0dXJlLm5hbWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgbGlnaHRQaWNrZXJBZGRyOm51bWJlciA9IHByb3BzLmdldCgyMiwgMCk7XHJcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGxpZ2h0UGlja2VyQWRkciwgW0Fzc2V0VHlwZS5MSUdIVF9QSUNLRVJdKVxyXG5cclxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAobGlnaHRQaWNrZXJBZGRyKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIExpZ2h0UGlja2VyIChJRCA9IFwiICsgbGlnaHRQaWNrZXJBZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bWF0LmxpZ2h0UGlja2VyID0gPExpZ2h0UGlja2VyQmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHRcdC8vZGVidWdTdHJpbmcrPVwiIHwgTGlnaHRwaWNrZXItTmFtZSA9IFwiK0xpZ2h0UGlja2VyQmFzZShyZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bWF0LnNtb290aCA9IHByb3BzLmdldCg1LCB0cnVlKTtcclxuXHRcdFx0XHRtYXQubWlwbWFwID0gcHJvcHMuZ2V0KDYsIHRydWUpO1xyXG5cdFx0XHRcdG1hdC5ib3RoU2lkZXMgPSBwcm9wcy5nZXQoNywgZmFsc2UpO1xyXG5cdFx0XHRcdG1hdC5hbHBoYVByZW11bHRpcGxpZWQgPSBwcm9wcy5nZXQoOCwgZmFsc2UpO1xyXG5cdFx0XHRcdG1hdC5ibGVuZE1vZGUgPSB0aGlzLmJsZW5kTW9kZURpY1twcm9wcy5nZXQoOSwgMCldO1xyXG5cdFx0XHRcdG1hdC5yZXBlYXQgPSBwcm9wcy5nZXQoMTMsIGZhbHNlKTtcclxuXHJcblx0XHRcdFx0aWYgKG5vcm1hbFRleHR1cmUpXHJcblx0XHRcdFx0XHRtYXQubm9ybWFsTWFwID0gbm9ybWFsVGV4dHVyZTtcclxuXHJcblx0XHRcdFx0aWYgKHNwZWNUZXh0dXJlKVxyXG5cdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWFwID0gc3BlY1RleHR1cmU7XHJcblxyXG5cdFx0XHRcdG1hdC5hbHBoYVRocmVzaG9sZCA9IHByb3BzLmdldCgxMiwgMC4wKTtcclxuXHRcdFx0XHRtYXQuYW1iaWVudCA9IHByb3BzLmdldCgxNSwgMS4wKTtcclxuXHRcdFx0XHRtYXQuZGlmZnVzZUNvbG9yID0gcHJvcHMuZ2V0KDE2LCAweGZmZmZmZik7XHJcblx0XHRcdFx0bWF0LnNwZWN1bGFyID0gcHJvcHMuZ2V0KDE4LCAxLjApO1xyXG5cdFx0XHRcdG1hdC5nbG9zcyA9IHByb3BzLmdldCgxOSwgNTApO1xyXG5cdFx0XHRcdG1hdC5zcGVjdWxhckNvbG9yID0gcHJvcHMuZ2V0KDIwLCAweGZmZmZmZik7XHJcblxyXG5cdFx0XHRcdHZhciBtZXRob2RzX3BhcnNlZDpudW1iZXIgPSAwO1xyXG5cdFx0XHRcdHZhciB0YXJnZXRJRDpudW1iZXI7XHJcblxyXG5cdFx0XHRcdHdoaWxlIChtZXRob2RzX3BhcnNlZCA8IG51bV9tZXRob2RzKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kX3R5cGU6bnVtYmVyO1xyXG5cdFx0XHRcdFx0bWV0aG9kX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblxyXG5cdFx0XHRcdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7XHJcblx0XHRcdFx0XHRcdDE6IEFXRFBhcnNlci5CQUREUixcclxuXHRcdFx0XHRcdFx0MjogQVdEUGFyc2VyLkJBRERSLFxyXG5cdFx0XHRcdFx0XHQzOiBBV0RQYXJzZXIuQkFERFIsXHJcblx0XHRcdFx0XHRcdDEwMTogdGhpcy5fcHJvcHNOclR5cGUsXHJcblx0XHRcdFx0XHRcdDEwMjogdGhpcy5fcHJvcHNOclR5cGUsXHJcblx0XHRcdFx0XHRcdDEwMzogdGhpcy5fcHJvcHNOclR5cGUsXHJcblx0XHRcdFx0XHRcdDIwMTogQVdEUGFyc2VyLlVJTlQzMixcclxuXHRcdFx0XHRcdFx0MjAyOiBBV0RQYXJzZXIuVUlOVDMyLFxyXG5cdFx0XHRcdFx0XHQzMDE6IEFXRFBhcnNlci5VSU5UMTYsXHJcblx0XHRcdFx0XHRcdDMwMjogQVdEUGFyc2VyLlVJTlQxNixcclxuXHRcdFx0XHRcdFx0NDAxOiBBV0RQYXJzZXIuVUlOVDgsXHJcblx0XHRcdFx0XHRcdDQwMjogQVdEUGFyc2VyLlVJTlQ4LFxyXG5cdFx0XHRcdFx0XHQ2MDE6IEFXRFBhcnNlci5DT0xPUixcclxuXHRcdFx0XHRcdFx0NjAyOiBBV0RQYXJzZXIuQ09MT1IsXHJcblx0XHRcdFx0XHRcdDcwMTogQVdEUGFyc2VyLkJPT0wsXHJcblx0XHRcdFx0XHRcdDcwMjogQVdEUGFyc2VyLkJPT0wsXHJcblx0XHRcdFx0XHRcdDgwMTogQVdEUGFyc2VyLk1UWDR4NFxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0c3dpdGNoIChtZXRob2RfdHlwZSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlIDk5OTogLy93cmFwcGVyLU1ldGhvZHMgdGhhdCB3aWxsIGxvYWQgYSBwcmV2aW91cyBwYXJzZWQgRWZmZWt0TWV0aG9kIHJldHVybmVkXHJcblxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5FRkZFQ1RTX01FVEhPRF0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFZmZlY3RNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1hdC5hZGRFZmZlY3RNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBFZmZlY3RNZXRob2QtTmFtZSA9IFwiICsgKDxFZmZlY3RNZXRob2RCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIDk5ODogLy93cmFwcGVyLU1ldGhvZHMgdGhhdCB3aWxsIGxvYWQgYSBwcmV2aW91cyBwYXJzZWQgU2hhZG93TWFwTWV0aG9kXHJcblxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5TSEFET1dfTUFQX01FVEhPRF0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTaGFkb3dNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgTWF0ZXJpYWxcIik7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1hdC5zaGFkb3dNZXRob2QgPSByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTaGFkb3dNZXRob2QtTmFtZSA9IFwiICsgKDxTaGFkb3dNZXRob2RCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIDE6IC8vRW52TWFwQW1iaWVudE1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRW52TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEVudk1hcEFtYmllbnRNZXRob2RNYXRlcmlhbFwiKTtcclxuXHRcdFx0XHRcdFx0XHRtYXQuYW1iaWVudE1ldGhvZCA9IG5ldyBBbWJpZW50RW52TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgQW1iaWVudEVudk1hcE1ldGhvZCB8IEVudk1hcC1OYW1lID1cIiArICg8Q3ViZVRleHR1cmVCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSA1MTogLy9EZXB0aERpZmZ1c2VNZXRob2RcclxuXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlRGVwdGhNZXRob2QoKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VEZXB0aE1ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDUyOiAvL0dyYWRpZW50RGlmZnVzZU1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEdyYWRpZW50RGlmZnVzZVRleHR1cmUgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgR3JhZGllbnREaWZmdXNlTWV0aG9kXCIpO1xyXG5cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VHcmFkaWVudE1ldGhvZChyZXR1cm5lZEFycmF5WzFdKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VHcmFkaWVudE1ldGhvZCB8IEdyYWRpZW50RGlmZnVzZVRleHR1cmUtTmFtZSA9XCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgNTM6IC8vV3JhcERpZmZ1c2VNZXRob2RcclxuXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlV3JhcE1ldGhvZChwcm9wcy5nZXQoMTAxLCA1KSk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlV3JhcE1ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDU0OiAvL0xpZ2h0TWFwRGlmZnVzZU1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIExpZ2h0TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIExpZ2h0TWFwRGlmZnVzZU1ldGhvZFwiKTtcclxuXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlTGlnaHRNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSwgZmFsc2UsIG1hdC5kaWZmdXNlTWV0aG9kKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VMaWdodE1hcE1ldGhvZCB8IExpZ2h0TWFwVGV4dHVyZS1OYW1lID1cIiArICg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA1NTogLy9DZWxEaWZmdXNlTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZUNlbE1ldGhvZChwcm9wcy5nZXQoNDAxLCAzKSwgbWF0LmRpZmZ1c2VNZXRob2QpO1xyXG5cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZUNlbE1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnNtb290aG5lc3MgPSBwcm9wcy5nZXQoMTAxLCAwLjEpO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZUNlbE1ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDU2OiAvL1N1YlN1cmZhY2VTY2F0dGVyaW5nTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0Ly9cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kKCk7IC8vZGVwdGhNYXBTaXplIGFuZCBkZXB0aE1hcE9mZnNldCA/XHJcblx0XHRcdFx0XHRcdFx0Ly9cdFx0XHRcdFx0XHRcdCg8RGlmZnVzZVN1YlN1cmZhY2VNZXRob2Q+IG1hdC5kaWZmdXNlTWV0aG9kKS5zY2F0dGVyaW5nID0gcHJvcHMuZ2V0KDEwMSwgMC4yKTtcclxuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0KDxEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZD4gbWF0LmRpZmZ1c2VNZXRob2QpLnRyYW5zbHVjZW5jeSA9IHByb3BzLmdldCgxMDIsIDEpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkuc2NhdHRlckNvbG9yID0gcHJvcHMuZ2V0KDYwMSwgMHhmZmZmZmYpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kXCI7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIDEwMTogLy9Bbmlzb3Ryb3BpY1NwZWN1bGFyTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyQW5pc290cm9waWNNZXRob2QoKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyQW5pc290cm9waWNNZXRob2RcIjtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAxMDI6IC8vU3BlY3VsYXJQaG9uZ01ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdG1hdC5zcGVjdWxhck1ldGhvZCA9IG5ldyBTcGVjdWxhclBob25nTWV0aG9kKCk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhclBob25nTWV0aG9kXCI7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMTAzOiAvL0NlbGxTcGVjdWxhck1ldGhvZFxyXG5cdFx0XHRcdFx0XHRcdG1hdC5zcGVjdWxhck1ldGhvZCA9IG5ldyBTcGVjdWxhckNlbE1ldGhvZChwcm9wcy5nZXQoMTAxLCAwLjUpLCBtYXQuc3BlY3VsYXJNZXRob2QpO1xyXG5cdFx0XHRcdFx0XHRcdCg8U3BlY3VsYXJDZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkuc21vb3RobmVzcyA9IHByb3BzLmdldCgxMDIsIDAuMSk7XHJcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckNlbE1ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDEwNDogLy9TcGVjdWxhckZyZXNuZWxNZXRob2RcclxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJGcmVzbmVsTWV0aG9kKHByb3BzLmdldCg3MDEsIHRydWUpLCBtYXQuc3BlY3VsYXJNZXRob2QpO1xyXG5cdFx0XHRcdFx0XHRcdCg8U3BlY3VsYXJGcmVzbmVsTWV0aG9kPiBtYXQuc3BlY3VsYXJNZXRob2QpLmZyZXNuZWxQb3dlciA9IHByb3BzLmdldCgxMDEsIDUpO1xyXG5cdFx0XHRcdFx0XHRcdCg8U3BlY3VsYXJGcmVzbmVsTWV0aG9kPiBtYXQuc3BlY3VsYXJNZXRob2QpLm5vcm1hbFJlZmxlY3RhbmNlID0gcHJvcHMuZ2V0KDEwMiwgMC4xKTtcclxuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyRnJlc25lbE1ldGhvZFwiO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDE1MTovL0hlaWdodE1hcE5vcm1hbE1ldGhvZCAtIHRoaW9zIGlzIG5vdCBpbXBsZW1lbnRlZCBmb3Igbm93LCBidXQgbWlnaHQgYXBwZWFyIGxhdGVyXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMTUyOiAvL1NpbXBsZVdhdGVyTm9ybWFsTWV0aG9kXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2Vjb3VuZE5vcm1hbE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBTaW1wbGVXYXRlck5vcm1hbE1ldGhvZFwiKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIW1hdC5ub3JtYWxNYXApXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIG5vcm1hbCBNYXAgb24gdGhpcyBNYXRlcmlhbCB0byB1c2Ugd2l0aCB0aGlzIFNpbXBsZVdhdGVyTm9ybWFsTWV0aG9kXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRtYXQubm9ybWFsTWFwID0gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdFx0XHRcdFx0XHRtYXQubm9ybWFsTWV0aG9kID0gbmV3IE5vcm1hbFNpbXBsZVdhdGVyTWV0aG9kKG1hdC5ub3JtYWxNYXAsIHJldHVybmVkQXJyYXlbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgTm9ybWFsU2ltcGxlV2F0ZXJNZXRob2QgfCBTZWNvbmQtTm9ybWFsVGV4dHVyZS1OYW1lID0gXCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdFx0XHRcdG1ldGhvZHNfcGFyc2VkICs9IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyB0b2RvOiB3ZSBzaG91bGQgbm90IG5lZWQgdGhpcyBhbnltb3JlIChpZiB1c2luZyB0ZXh0dXJlLWF0bGFzKVxyXG5cdFx0ZWxzZSBpZiAoKHR5cGU+PTMpJiYodHlwZTw9Nykpe1xyXG5cdFx0XHQvLyBpZiB0aGlzIGlzIGEgY3VydmUgbWF0ZXJpYWwsIHdlIGNyZWF0ZSBpdCwgZmluYWxpemUgaXQsIGFzc2lnbiBpdCB0byBibG9jay1jYWNoZSBhbmQgcmV0dXJuIGFuZCByZXR1cm4uXHJcblx0XHRcdHZhciBjb2xvcjpudW1iZXIgPSBwcm9wcy5nZXQoMSwgMHhjY2NjY2MpO1xyXG5cdFx0XHRkZWJ1Z1N0cmluZys9Y29sb3I7XHJcblxyXG5cdFx0XHR2YXIgZGlmZnVzZVRleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRcdFx0dmFyIGRpZmZ1c2VUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMiwgMCk7XHJcblxyXG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQoZGlmZnVzZVRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcclxuXHJcblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChkaWZmdXNlVGV4X2FkZHIgIT0gMCkpIHtcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRGlmZnVzZVRleHR1cmUgKElEID0gXCIgKyBkaWZmdXNlVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xyXG5cdFx0XHRcdGRpZmZ1c2VUZXh0dXJlID0gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5nZXREZWZhdWx0VGV4dHVyZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRkaWZmdXNlVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XHJcblx0XHRcdHZhciBjdXJ2ZV9tYXQ6Q3VydmVNYXRlcmlhbCA9IG5ldyBDdXJ2ZU1hdGVyaWFsKGRpZmZ1c2VUZXh0dXJlKTtcclxuXHRcdFx0Ly9kZWJ1Z1N0cmluZys9IFwiIGFscGhhID0gXCIrcHJvcHMuZ2V0KDEwLCAxLjApK1wiIFwiO1xyXG5cdFx0XHRkZWJ1Z1N0cmluZys9IFwiIHRleHR1cmUgPSBcIitkaWZmdXNlVGV4X2FkZHIrXCIgXCI7XHJcblx0XHRcdGN1cnZlX21hdC5ib3RoU2lkZXMgPSB0cnVlO1xyXG5cdFx0XHRjdXJ2ZV9tYXQucHJlc2VydmVBbHBoYSA9IHRydWU7XHJcblx0XHRcdGN1cnZlX21hdC5hbHBoYUJsZW5kaW5nID0gdHJ1ZTtcclxuXHRcdFx0Y3VydmVfbWF0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGN1cnZlX21hdCwgbmFtZSk7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY3VydmVfbWF0O1xyXG5cdFx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGVidWdTdHJpbmcpO1xyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cdFx0bWF0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtYXQsIG5hbWUpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWF0O1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRlYnVnU3RyaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSA4MlxyXG5cdHByaXZhdGUgcGFyc2VUZXh0dXJlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cclxuXHRcdHZhciBhc3NldDpUZXh0dXJlMkRCYXNlO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cclxuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcclxuXHJcblx0XHR0aGlzLl90ZXh0dXJlX3VzZXJzW3RoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpXSA9IFtdO1xyXG5cclxuXHRcdC8vIEV4dGVybmFsXHJcblx0XHRpZiAodHlwZSA9PSAwKSB7XHJcblx0XHRcdGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0dmFyIHVybDpzdHJpbmc7XHJcblx0XHRcdHVybCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGRhdGFfbGVuKTtcclxuXHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG5ldyBVUkxSZXF1ZXN0KHVybCksIGZhbHNlLCBudWxsLCB0cnVlKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0XHR2YXIgZGF0YTpCeXRlQXJyYXk7XHJcblx0XHRcdGRhdGEgPSBuZXcgQnl0ZUFycmF5KCk7XHJcblx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGVzKGRhdGEsIDAsIGRhdGFfbGVuKTtcclxuXHJcblx0XHRcdC8vXHJcblx0XHRcdC8vIEFXRFBhcnNlciAtIEZpeCBmb3IgRmlyZUZveCBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTcxNTA3NSAuXHJcblx0XHRcdC8vXHJcblx0XHRcdC8vIENvbnZlcnRpbmcgZGF0YSB0byBpbWFnZSBoZXJlIGluc3RlYWQgb2YgcGFyc2VyIC0gZml4IEZpcmVGb3ggYnVnIHdoZXJlIGltYWdlIHdpZHRoIC8gaGVpZ2h0IGlzIDAgd2hlbiBjcmVhdGVkIGZyb20gZGF0YVxyXG5cdFx0XHQvLyBUaGlzIGdpdmVzIHRoZSBicm93c2VyIHRpbWUgdG8gaW5pdGlhbGlzZSBpbWFnZSB3aWR0aCAvIGhlaWdodC5cclxuXHJcblx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgUGFyc2VyVXRpbHMuYnl0ZUFycmF5VG9JbWFnZShkYXRhKSwgdHJ1ZSk7XHJcblx0XHRcdC8vdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBkYXRhLCB0cnVlKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWdub3JlIGZvciBub3dcclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmV4dHJhcyA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0dGhpcy5fcFBhdXNlQW5kUmV0cmlldmVEZXBlbmRlbmNpZXMoKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdHZhciB0ZXh0dXJlU3R5bGVzTmFtZXM6QXJyYXk8c3RyaW5nPiA9IFtcImV4dGVybmFsXCIsIFwiZW1iZWRcIl1cclxuXHRcdFx0Y29uc29sZS5sb2coXCJTdGFydCBwYXJzaW5nIGEgXCIgKyB0ZXh0dXJlU3R5bGVzTmFtZXNbdHlwZV0gKyBcIiBCaXRtYXAgZm9yIFRleHR1cmVcIik7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCA9IDgzXHJcblx0cHJpdmF0ZSBwYXJzZUN1YmVUZXh0dXJlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0Ly9ibG9ja0xlbmd0aCA9IGJsb2NrLmxlbjtcclxuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XHJcblx0XHR2YXIgYXNzZXQ6Q3ViZVRleHR1cmVCYXNlO1xyXG5cdFx0dmFyIGk6bnVtYmVyO1xyXG5cclxuXHRcdHRoaXMuX2N1YmVUZXh0dXJlcyA9IG5ldyBBcnJheTxhbnk+KCk7XHJcblx0XHR0aGlzLl90ZXh0dXJlX3VzZXJzWyB0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSBdID0gW107XHJcblxyXG5cdFx0dmFyIHR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblxyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IDY7IGkrKykge1xyXG5cdFx0XHR0aGlzLl90ZXh0dXJlX3VzZXJzW3RoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpXSA9IFtdO1xyXG5cdFx0XHR0aGlzLl9jdWJlVGV4dHVyZXMucHVzaChudWxsKTtcclxuXHJcblx0XHRcdC8vIEV4dGVybmFsXHJcblx0XHRcdGlmICh0eXBlID09IDApIHtcclxuXHRcdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0dmFyIHVybDpzdHJpbmc7XHJcblx0XHRcdFx0dXJsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMoZGF0YV9sZW4pO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSArIFwiI1wiICsgaSwgbmV3IFVSTFJlcXVlc3QodXJsKSwgZmFsc2UsIG51bGwsIHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0dmFyIGRhdGE6Qnl0ZUFycmF5O1xyXG5cdFx0XHRcdGRhdGEgPSBuZXcgQnl0ZUFycmF5KCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGVzKGRhdGEsIDAsIGRhdGFfbGVuKTtcclxuXHJcblx0XHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgKyBcIiNcIiArIGksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieXRlQXJyYXlUb0ltYWdlKGRhdGEpLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElnbm9yZSBmb3Igbm93XHJcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHR2YXIgdGV4dHVyZVN0eWxlc05hbWVzOkFycmF5PHN0cmluZz4gPSBbXCJleHRlcm5hbFwiLCBcImVtYmVkXCJdXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyA2IFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQml0bWFwcyBmb3IgQ3ViZVRleHR1cmVcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gOTFcclxuXHRwcml2YXRlIHBhcnNlU2hhcmVkTWV0aG9kQmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgYXNzZXQ6RWZmZWN0TWV0aG9kQmFzZTtcclxuXHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdGFzc2V0ID0gdGhpcy5wYXJzZVNoYXJlZE1ldGhvZExpc3QoYmxvY2tJRCk7XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBhc3NldCwgdGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUpO1xyXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcclxuXHJcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBFZmZlY3RNZXRob2Q6IE5hbWUgPSBcIiArIGFzc2V0Lm5hbWUgKyBcIiBUeXBlID0gXCIgKyBhc3NldCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gOTJcclxuXHRwcml2YXRlIHBhcnNlU2hhZG93TWV0aG9kQmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgdHlwZTpudW1iZXI7XHJcblx0XHR2YXIgZGF0YV9sZW46bnVtYmVyO1xyXG5cdFx0dmFyIGFzc2V0OlNoYWRvd01ldGhvZEJhc2U7XHJcblx0XHR2YXIgc2hhZG93TGlnaHRJRDpudW1iZXI7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHRzaGFkb3dMaWdodElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChzaGFkb3dMaWdodElELCBbQXNzZXRUeXBlLkxJR0hUXSk7XHJcblxyXG5cdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBUYXJnZXRMaWdodCAoSUQgPSBcIiArIHNoYWRvd0xpZ2h0SUQgKyBcIiApIGZvciB0aGlzIFNoYWRvd01ldGhvZCAtIFNoYWRvd01ldGhvZCBub3QgY3JlYXRlZFwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFzc2V0ID0gdGhpcy5wYXJzZVNoYWRvd01ldGhvZExpc3QoPExpZ2h0QmFzZT4gcmV0dXJuZWRBcnJheVsxXSwgYmxvY2tJRCk7XHJcblxyXG5cdFx0aWYgKCFhc3NldClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpOyAvLyBJZ25vcmUgZm9yIG5vd1xyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQsIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2hhZG93TWFwTWV0aG9kTWV0aG9kOiBOYW1lID0gXCIgKyBhc3NldC5uYW1lICsgXCIgfCBUeXBlID0gXCIgKyBhc3NldCArIFwiIHwgTGlnaHQtTmFtZSA9IFwiLCAoIDxMaWdodEJhc2U+IHJldHVybmVkQXJyYXlbMV0gKS5uYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvL0Jsb2NrIElEID0gMjUzXHJcblx0cHJpdmF0ZSBwYXJzZUNvbW1hbmQoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgaGFzQmxvY2tzOmJvb2xlYW4gPSAoIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpID09IDEgKTtcclxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdHZhciBtdHg6TWF0cml4M0QgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHJcblx0XHR2YXIgcGFyZW50T2JqZWN0OkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblx0XHR2YXIgdGFyZ2V0T2JqZWN0OkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblxyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKTtcclxuXHJcblx0XHRpZiAocmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHRwYXJlbnRPYmplY3QgPSA8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVsxXTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbnVtQ29tbWFuZHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQoKTtcclxuXHRcdHZhciB0eXBlQ29tbWFuZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xyXG5cclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSfSk7XHJcblxyXG5cdFx0c3dpdGNoICh0eXBlQ29tbWFuZCkge1xyXG5cdFx0XHRjYXNlIDE6XHJcblxyXG5cdFx0XHRcdHZhciB0YXJnZXRJRDpudW1iZXIgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0dmFyIHJldHVybmVkQXJyYXlUYXJnZXQ6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuVEVYVFVSRV9QUk9KRUNUT1JdKTsgLy9mb3Igbm8gb25seSBsaWdodCBpcyByZXF1ZXN0ZWQhISEhXHJcblxyXG5cdFx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlUYXJnZXRbMF0pICYmICh0YXJnZXRJRCAhPSAwKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIGxpZ2h0IChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiAoIGZvciB0aGlzIENvbW1hbmRCb2NrIVwiKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRhcmdldE9iamVjdCA9IHJldHVybmVkQXJyYXlUYXJnZXRbMV07XHJcblxyXG5cdFx0XHRcdGlmIChwYXJlbnRPYmplY3QpIHtcclxuXHRcdFx0XHRcdHBhcmVudE9iamVjdC5hZGRDaGlsZCh0YXJnZXRPYmplY3QpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGFyZ2V0T2JqZWN0LnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRhcmdldE9iamVjdCkge1xyXG5cdFx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xyXG5cclxuXHRcdFx0dGFyZ2V0T2JqZWN0LnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xyXG5cdFx0XHR0YXJnZXRPYmplY3QuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcblx0XHR9XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRhcmdldE9iamVjdFxyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIENvbW1hbmRCbG9jazogTmFtZSA9ICdcIiArIG5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vYmxvY2tJRCAyNTVcclxuXHRwcml2YXRlIHBhcnNlTWV0YURhdGEoYmxvY2tJRDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMzIsIDI6QVdEUGFyc2VyLkFXRFNUUklORywgMzpBV0RQYXJzZXIuQVdEU1RSSU5HLCA0OkFXRFBhcnNlci5BV0RTVFJJTkcsIDU6QVdEUGFyc2VyLkFXRFNUUklOR30pO1xyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE1ldGFEYXRhQmxvY2s6IFRpbWVTdGFtcCAgICAgICAgID0gXCIgKyBwcm9wcy5nZXQoMSwgMCkpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEVuY29kZXJOYW1lICAgICAgID0gXCIgKyBwcm9wcy5nZXQoMiwgXCJ1bmtub3duXCIpKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBFbmNvZGVyVmVyc2lvbiAgICA9IFwiICsgcHJvcHMuZ2V0KDMsIFwidW5rbm93blwiKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhdG9yTmFtZSAgICAgPSBcIiArIHByb3BzLmdldCg0LCBcInVua25vd25cIikpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRvclZlcnNpb24gID0gXCIgKyBwcm9wcy5nZXQoNSwgXCJ1bmtub3duXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vYmxvY2tJRCAyNTRcclxuXHRwcml2YXRlIHBhcnNlTmFtZVNwYWNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGlkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0dmFyIG5hbWVTcGFjZVN0cmluZzpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHRpZiAodGhpcy5fZGVidWcpXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTmFtZVNwYWNlQmxvY2s6IElEID0gXCIgKyBpZCArIFwiIHwgU3RyaW5nID0gXCIgKyBuYW1lU3BhY2VTdHJpbmcpO1xyXG5cdH1cclxuXHJcblx0Ly8tLVBhcnNlciBVVElMUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQvLyB0aGlzIGZ1bmN0aW9ucyByZWFkcyBhbmQgY3JlYXRlcyBhIFNoYWRvd01ldGhvZE1ldGhvZFxyXG5cdHByaXZhdGUgcGFyc2VTaGFkb3dNZXRob2RMaXN0KGxpZ2h0OkxpZ2h0QmFzZSwgYmxvY2tJRDpudW1iZXIpOlNoYWRvd01ldGhvZEJhc2VcclxuXHR7XHJcblxyXG5cdFx0dmFyIG1ldGhvZFR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIHNoYWRvd01ldGhvZDpTaGFkb3dNZXRob2RCYXNlO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgMTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMjAxOkFXRFBhcnNlci5VSU5UMzIsIDIwMjpBV0RQYXJzZXIuVUlOVDMyLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDQwMTpBV0RQYXJzZXIuVUlOVDgsIDQwMjpBV0RQYXJzZXIuVUlOVDgsIDYwMTpBV0RQYXJzZXIuQ09MT1IsIDYwMjpBV0RQYXJzZXIuQ09MT1IsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MLCA4MDE6QVdEUGFyc2VyLk1UWDR4NH0pO1xyXG5cclxuXHRcdHZhciB0YXJnZXRJRDpudW1iZXI7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+XHJcblx0XHRzd2l0Y2ggKG1ldGhvZFR5cGUpIHtcclxuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgMTAwMTogLy9DYXNjYWRlU2hhZG93TWFwTWV0aG9kXHJcblx0XHRcdC8vXHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlNIQURPV19NQVBfTUVUSE9EXSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2hhZG93QmFzZU1ldGhvZCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBDYXNjYWRlU2hhZG93TWFwTWV0aG9kIC0gU2hhZG93TWV0aG9kIG5vdCBjcmVhdGVkXCIpO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRcdHJldHVybiBzaGFkb3dNZXRob2Q7XHJcblx0XHRcdC8vXHRcdFx0XHRcdH1cclxuXHRcdFx0Ly9cdFx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IENhc2NhZGVTaGFkb3dNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDEwMDI6IC8vU2hhZG93TmVhck1ldGhvZFxyXG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5TSEFET1dfTUFQX01FVEhPRF0pO1xyXG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNoYWRvd0Jhc2VNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgU2hhZG93TmVhck1ldGhvZCAtIFNoYWRvd01ldGhvZCBub3QgY3JlYXRlZFwiKTtcclxuXHRcdFx0XHRcdHJldHVybiBzaGFkb3dNZXRob2Q7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dOZWFyTWV0aG9kKDxTaGFkb3dNZXRob2RCYXNlPiByZXR1cm5lZEFycmF5WzFdKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAxMTAxOiAvL1NoYWRvd0ZpbHRlcmVkTWV0aG9kXHJcblxyXG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dGaWx0ZXJlZE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQpO1xyXG5cdFx0XHRcdCg8U2hhZG93RmlsdGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkuYWxwaGEgPSBwcm9wcy5nZXQoMTAxLCAxKTtcclxuXHRcdFx0XHQoPFNoYWRvd0ZpbHRlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmVwc2lsb24gPSBwcm9wcy5nZXQoMTAyLCAwLjAwMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDExMDI6IC8vU2hhZG93RGl0aGVyZWRNZXRob2RcclxuXHJcblxyXG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dEaXRoZXJlZE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQsIDxudW1iZXI+IHByb3BzLmdldCgyMDEsIDUpKTtcclxuXHRcdFx0XHQoPFNoYWRvd0RpdGhlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XHJcblx0XHRcdFx0KDxTaGFkb3dEaXRoZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xyXG5cdFx0XHRcdCg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkucmFuZ2UgPSBwcm9wcy5nZXQoMTAzLCAxKTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTEwMzogLy9TaGFkb3dTb2Z0TWV0aG9kXHJcblxyXG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dTb2Z0TWV0aG9kKDxEaXJlY3Rpb25hbExpZ2h0PiBsaWdodCwgPG51bWJlcj4gcHJvcHMuZ2V0KDIwMSwgNSkpO1xyXG5cdFx0XHRcdCg8U2hhZG93U29mdE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xyXG5cdFx0XHRcdCg8U2hhZG93U29mdE1ldGhvZD4gc2hhZG93TWV0aG9kKS5lcHNpbG9uID0gcHJvcHMuZ2V0KDEwMiwgMC4wMDIpO1xyXG5cdFx0XHRcdCg8U2hhZG93U29mdE1ldGhvZD4gc2hhZG93TWV0aG9kKS5yYW5nZSA9IHByb3BzLmdldCgxMDMsIDEpO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAxMTA0OiAvL1NoYWRvd0hhcmRNZXRob2RcclxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93SGFyZE1ldGhvZChsaWdodCk7XHJcblx0XHRcdFx0KDxTaGFkb3dIYXJkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmFscGhhID0gcHJvcHMuZ2V0KDEwMSwgMSk7XHJcblx0XHRcdFx0KDxTaGFkb3dIYXJkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmVwc2lsb24gPSBwcm9wcy5nZXQoMTAyLCAwLjAwMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xyXG5cdH1cclxuXHJcblx0Ly9CbG9jayBJRCAxMDFcclxuXHRwcml2YXRlIHBhcnNlU2tlbGV0b24oYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblx0XHR2YXIgbnVtX2pvaW50czpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgc2tlbGV0b246U2tlbGV0b24gPSBuZXcgU2tlbGV0b24oKTtcclxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBEaXNjYXJkIHByb3BlcnRpZXMgZm9yIG5vd1xyXG5cclxuXHRcdHZhciBqb2ludHNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XHJcblx0XHR3aGlsZSAoam9pbnRzX3BhcnNlZCA8IG51bV9qb2ludHMpIHtcclxuXHRcdFx0dmFyIGpvaW50OlNrZWxldG9uSm9pbnQ7XHJcblx0XHRcdHZhciBpYnA6TWF0cml4M0Q7XHJcblx0XHRcdC8vIElnbm9yZSBqb2ludCBpZFxyXG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdGpvaW50ID0gbmV3IFNrZWxldG9uSm9pbnQoKTtcclxuXHRcdFx0am9pbnQucGFyZW50SW5kZXggPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCkgLSAxOyAvLyAwPW51bGwgaW4gQVdEXHJcblx0XHRcdGpvaW50Lm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XHJcblxyXG5cdFx0XHRpYnAgPSB0aGlzLnBhcnNlTWF0cml4M0QoKTtcclxuXHRcdFx0am9pbnQuaW52ZXJzZUJpbmRQb3NlID0gaWJwLnJhd0RhdGE7XHJcblx0XHRcdC8vIElnbm9yZSBqb2ludCBwcm9wcy9hdHRyaWJ1dGVzIGZvciBub3dcclxuXHRcdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7XHJcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xyXG5cdFx0XHRza2VsZXRvbi5qb2ludHMucHVzaChqb2ludCk7XHJcblx0XHRcdGpvaW50c19wYXJzZWQrKztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBEaXNjYXJkIGF0dHJpYnV0ZXMgZm9yIG5vd1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChza2VsZXRvbiwgbmFtZSk7XHJcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHNrZWxldG9uO1xyXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uOiBOYW1lID0gXCIgKyBza2VsZXRvbi5uYW1lICsgXCIgfCBOdW1iZXIgb2YgSm9pbnRzID0gXCIgKyBqb2ludHNfcGFyc2VkKTtcclxuXHR9XHJcblxyXG5cdC8vQmxvY2sgSUQgPSAxMDJcclxuXHRwcml2YXRlIHBhcnNlU2tlbGV0b25Qb3NlKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIG51bV9qb2ludHM6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIElnbm9yZSBwcm9wZXJ0aWVzIGZvciBub3dcclxuXHJcblx0XHR2YXIgcG9zZTpTa2VsZXRvblBvc2UgPSBuZXcgU2tlbGV0b25Qb3NlKCk7XHJcblxyXG5cdFx0dmFyIGpvaW50c19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcclxuXHRcdHdoaWxlIChqb2ludHNfcGFyc2VkIDwgbnVtX2pvaW50cykge1xyXG5cdFx0XHR2YXIgam9pbnRfcG9zZTpKb2ludFBvc2U7XHJcblx0XHRcdHZhciBoYXNfdHJhbnNmb3JtOm51bWJlciAvKnVpbnQqLztcclxuXHRcdFx0am9pbnRfcG9zZSA9IG5ldyBKb2ludFBvc2UoKTtcclxuXHRcdFx0aGFzX3RyYW5zZm9ybSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRpZiAoaGFzX3RyYW5zZm9ybSA9PSAxKSB7XHJcblx0XHRcdFx0dmFyIG10eF9kYXRhOkFycmF5PG51bWJlcj4gPSB0aGlzLnBhcnNlTWF0cml4NDNSYXdEYXRhKCk7XHJcblxyXG5cdFx0XHRcdHZhciBtdHg6TWF0cml4M0QgPSBuZXcgTWF0cml4M0QobXR4X2RhdGEpO1xyXG5cdFx0XHRcdGpvaW50X3Bvc2Uub3JpZW50YXRpb24uZnJvbU1hdHJpeChtdHgpO1xyXG5cdFx0XHRcdGpvaW50X3Bvc2UudHJhbnNsYXRpb24uY29weUZyb20obXR4LnBvc2l0aW9uKTtcclxuXHJcblx0XHRcdFx0cG9zZS5qb2ludFBvc2VzW2pvaW50c19wYXJzZWRdID0gam9pbnRfcG9zZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRqb2ludHNfcGFyc2VkKys7XHJcblx0XHR9XHJcblx0XHQvLyBTa2lwIGF0dHJpYnV0ZXMgZm9yIG5vd1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChwb3NlLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gcG9zZTtcclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvblBvc2U6IE5hbWUgPSBcIiArIHBvc2UubmFtZSArIFwiIHwgTnVtYmVyIG9mIEpvaW50cyA9IFwiICsgam9pbnRzX3BhcnNlZCk7XHJcblx0fVxyXG5cclxuXHQvL2Jsb2NrSUQgMTAzXHJcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uQW5pbWF0aW9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGZyYW1lX2R1cjpudW1iZXI7XHJcblx0XHR2YXIgcG9zZV9hZGRyOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciBjbGlwOlNrZWxldG9uQ2xpcE5vZGUgPSBuZXcgU2tlbGV0b25DbGlwTm9kZSgpO1xyXG5cdFx0dmFyIG51bV9mcmFtZXM6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIElnbm9yZSBwcm9wZXJ0aWVzIGZvciBub3dcclxuXHJcblx0XHR2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xyXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PjtcclxuXHRcdHdoaWxlIChmcmFtZXNfcGFyc2VkIDwgbnVtX2ZyYW1lcykge1xyXG5cdFx0XHRwb3NlX2FkZHIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHRmcmFtZV9kdXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChwb3NlX2FkZHIsIFtBc3NldFR5cGUuU0tFTEVUT05fUE9TRV0pO1xyXG5cdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNrZWxldG9uUG9zZSBGcmFtZSAjIFwiICsgZnJhbWVzX3BhcnNlZCArIFwiIChJRCA9IFwiICsgcG9zZV9hZGRyICsgXCIgKSBmb3IgdGhpcyBTa2VsZXRvbkNsaXBOb2RlXCIpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Y2xpcC5hZGRGcmFtZSg8U2tlbGV0b25Qb3NlPiB0aGlzLl9ibG9ja3NbcG9zZV9hZGRyXS5kYXRhLCBmcmFtZV9kdXIpO1xyXG5cdFx0XHRmcmFtZXNfcGFyc2VkKys7XHJcblx0XHR9XHJcblx0XHRpZiAoY2xpcC5mcmFtZXMubGVuZ3RoID09IDApIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IHRoaXMgU2tlbGV0b25DbGlwTm9kZSwgYmVjYXVzZSBubyBGcmFtZXMgd2hlcmUgc2V0LlwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly8gSWdub3JlIGF0dHJpYnV0ZXMgZm9yIG5vd1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChjbGlwLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY2xpcDtcclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBTa2VsZXRvbkNsaXBOb2RlOiBOYW1lID0gXCIgKyBjbGlwLm5hbWUgKyBcIiB8IE51bWJlciBvZiBGcmFtZXMgPSBcIiArIGNsaXAuZnJhbWVzLmxlbmd0aCk7XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrIElEID0gMTExIC8gIEJsb2NrIElEID0gMTEyXHJcblx0cHJpdmF0ZSBwYXJzZU1lc2hQb3NlQW5pbWF0aW9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovLCBwb3NlT25seTpib29sZWFuID0gZmFsc2UpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSAxO1xyXG5cdFx0dmFyIG51bV9zdWJtZXNoZXM6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIGZyYW1lc19wYXJzZWQ6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIHN1Yk1lc2hQYXJzZWQ6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIGZyYW1lX2R1cjpudW1iZXI7XHJcblx0XHR2YXIgeDpudW1iZXI7XHJcblx0XHR2YXIgeTpudW1iZXI7XHJcblx0XHR2YXIgejpudW1iZXI7XHJcblx0XHR2YXIgc3RyX2xlbjpudW1iZXI7XHJcblx0XHR2YXIgc3RyX2VuZDpudW1iZXI7XHJcblx0XHR2YXIgZ2VvbWV0cnk6R2VvbWV0cnk7XHJcblx0XHR2YXIgc3ViR2VvbTpUcmlhbmdsZVN1Ykdlb21ldHJ5O1xyXG5cdFx0dmFyIGlkeDpudW1iZXIgLyppbnQqLyA9IDA7XHJcblx0XHR2YXIgY2xpcDpWZXJ0ZXhDbGlwTm9kZSA9IG5ldyBWZXJ0ZXhDbGlwTm9kZSgpO1xyXG5cdFx0dmFyIGluZGljZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLztcclxuXHRcdHZhciB2ZXJ0czpBcnJheTxudW1iZXI+O1xyXG5cdFx0dmFyIG51bV9TdHJlYW1zOm51bWJlciAvKmludCovID0gMDtcclxuXHRcdHZhciBzdHJlYW1zUGFyc2VkOm51bWJlciAvKmludCovID0gMDtcclxuXHRcdHZhciBzdHJlYW10eXBlczpBcnJheTxudW1iZXI+IC8qaW50Ki8gPSBuZXcgQXJyYXk8bnVtYmVyPigpIC8qaW50Ki87XHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcztcclxuXHRcdHZhciB0aGlzR2VvOkdlb21ldHJ5O1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIGdlb0FkcmVzczpudW1iZXIgLyppbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZ2VvQWRyZXNzLCBbQXNzZXRUeXBlLkdFT01FVFJZXSk7XHJcblx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIHRhcmdldC1HZW9tZXRyeS1PYmplY3QgXCIgKyBnZW9BZHJlc3MgKyBcIiApIGZvciB0aGlzIFZlcnRleENsaXBOb2RlXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR2YXIgdXZzOkFycmF5PEFycmF5PG51bWJlcj4+ID0gdGhpcy5nZXRVVkZvclZlcnRleEFuaW1hdGlvbihnZW9BZHJlc3MpO1xyXG5cdFx0aWYgKCFwb3NlT25seSlcclxuXHRcdFx0bnVtX2ZyYW1lcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHRudW1fc3VibWVzaGVzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0bnVtX1N0cmVhbXMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRzdHJlYW1zUGFyc2VkID0gMDtcclxuXHRcdHdoaWxlIChzdHJlYW1zUGFyc2VkIDwgbnVtX1N0cmVhbXMpIHtcclxuXHRcdFx0c3RyZWFtdHlwZXMucHVzaCh0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCkpO1xyXG5cdFx0XHRzdHJlYW1zUGFyc2VkKys7XHJcblx0XHR9XHJcblx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CT09MLCAyOkFXRFBhcnNlci5CT09MfSk7XHJcblxyXG5cdFx0Y2xpcC5sb29waW5nID0gcHJvcHMuZ2V0KDEsIHRydWUpO1xyXG5cdFx0Y2xpcC5zdGl0Y2hGaW5hbEZyYW1lID0gcHJvcHMuZ2V0KDIsIGZhbHNlKTtcclxuXHJcblx0XHRmcmFtZXNfcGFyc2VkID0gMDtcclxuXHRcdHdoaWxlIChmcmFtZXNfcGFyc2VkIDwgbnVtX2ZyYW1lcykge1xyXG5cdFx0XHRmcmFtZV9kdXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KCk7XHJcblx0XHRcdHN1Yk1lc2hQYXJzZWQgPSAwO1xyXG5cdFx0XHR3aGlsZSAoc3ViTWVzaFBhcnNlZCA8IG51bV9zdWJtZXNoZXMpIHtcclxuXHRcdFx0XHRzdHJlYW1zUGFyc2VkID0gMDtcclxuXHRcdFx0XHRzdHJfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRzdHJfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHN0cl9sZW47XHJcblx0XHRcdFx0d2hpbGUgKHN0cmVhbXNQYXJzZWQgPCBudW1fU3RyZWFtcykge1xyXG5cdFx0XHRcdFx0aWYgKHN0cmVhbXR5cGVzW3N0cmVhbXNQYXJzZWRdID09IDEpIHtcclxuXHRcdFx0XHRcdFx0aW5kaWNlcyA9ICg8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlbMV0pLnN1Ykdlb21ldHJpZXNbc3ViTWVzaFBhcnNlZF0uaW5kaWNlcztcclxuXHRcdFx0XHRcdFx0dmVydHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0XHRcdFx0XHRpZHggPSAwO1xyXG5cdFx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcclxuXHRcdFx0XHRcdFx0XHR4ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKVxyXG5cdFx0XHRcdFx0XHRcdHkgPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pXHJcblx0XHRcdFx0XHRcdFx0eiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcclxuXHRcdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB4O1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHk7XHJcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0gejtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRzdWJHZW9tID0gbmV3IFRyaWFuZ2xlU3ViR2VvbWV0cnkodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS51cGRhdGVQb3NpdGlvbnModmVydHMpO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVVWcyh1dnNbc3ViTWVzaFBhcnNlZF0pO1xyXG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVZlcnRleE5vcm1hbHMobnVsbCk7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlVmVydGV4VGFuZ2VudHMobnVsbCk7XHJcblx0XHRcdFx0XHRcdHN1Ykdlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0c3ViR2VvbS5hdXRvRGVyaXZlVGFuZ2VudHMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0c3ViTWVzaFBhcnNlZCsrO1xyXG5cdFx0XHRcdFx0XHRnZW9tZXRyeS5hZGRTdWJHZW9tZXRyeShzdWJHZW9tKVxyXG5cdFx0XHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBzdHJfZW5kO1xyXG5cdFx0XHRcdFx0c3RyZWFtc1BhcnNlZCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjbGlwLmFkZEZyYW1lKGdlb21ldHJ5LCBmcmFtZV9kdXIpO1xyXG5cdFx0XHRmcmFtZXNfcGFyc2VkKys7XHJcblx0XHR9XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNsaXAsIG5hbWUpO1xyXG5cclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY2xpcDtcclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBWZXJ0ZXhDbGlwTm9kZTogTmFtZSA9IFwiICsgY2xpcC5uYW1lICsgXCIgfCBUYXJnZXQtR2VvbWV0cnktTmFtZSA9IFwiICsgKDxHZW9tZXRyeT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZSArIFwiIHwgTnVtYmVyIG9mIEZyYW1lcyA9IFwiICsgY2xpcC5mcmFtZXMubGVuZ3RoKTtcclxuXHR9XHJcblxyXG5cdC8vQmxvY2tJRCAxMTNcclxuXHRwcml2YXRlIHBhcnNlVmVydGV4QW5pbWF0aW9uU2V0KGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHBvc2VCbG9ja0FkcmVzczpudW1iZXIgLyppbnQqL1xyXG5cdFx0dmFyIG91dHB1dFN0cmluZzpzdHJpbmcgPSBcIlwiO1xyXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0dmFyIG51bV9mcmFtZXM6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDE2fSk7XHJcblx0XHR2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xyXG5cdFx0dmFyIHNrZWxldG9uRnJhbWVzOkFycmF5PFNrZWxldG9uQ2xpcE5vZGU+ID0gbmV3IEFycmF5PFNrZWxldG9uQ2xpcE5vZGU+KCk7XHJcblx0XHR2YXIgdmVydGV4RnJhbWVzOkFycmF5PFZlcnRleENsaXBOb2RlPiA9IG5ldyBBcnJheTxWZXJ0ZXhDbGlwTm9kZT4oKTtcclxuXHRcdHdoaWxlIChmcmFtZXNfcGFyc2VkIDwgbnVtX2ZyYW1lcykge1xyXG5cdFx0XHRwb3NlQmxvY2tBZHJlc3MgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cdFx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZUJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9OT0RFXSk7XHJcblx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQW5pbWF0aW9uQ2xpcE5vZGUgTnIgXCIgKyBmcmFtZXNfcGFyc2VkICsgXCIgKCBcIiArIHBvc2VCbG9ja0FkcmVzcyArIFwiICkgZm9yIHRoaXMgQW5pbWF0aW9uU2V0XCIpO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVsxXSBpbnN0YW5jZW9mIFZlcnRleENsaXBOb2RlKVxyXG5cdFx0XHRcdFx0dmVydGV4RnJhbWVzLnB1c2gocmV0dXJuZWRBcnJheVsxXSlcclxuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVsxXSBpbnN0YW5jZW9mIFNrZWxldG9uQ2xpcE5vZGUpXHJcblx0XHRcdFx0XHRza2VsZXRvbkZyYW1lcy5wdXNoKHJldHVybmVkQXJyYXlbMV0pXHJcblx0XHRcdH1cclxuXHRcdFx0ZnJhbWVzX3BhcnNlZCsrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCh2ZXJ0ZXhGcmFtZXMubGVuZ3RoID09IDApICYmIChza2VsZXRvbkZyYW1lcy5sZW5ndGggPT0gMCkpIHtcclxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSB0aGlzIEFuaW1hdGlvblNldCwgYmVjYXVzZSBpdCBjb250YWlucyBubyBhbmltYXRpb25zXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHRcdGlmICh2ZXJ0ZXhGcmFtZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR2YXIgbmV3VmVydGV4QW5pbWF0aW9uU2V0OlZlcnRleEFuaW1hdGlvblNldCA9IG5ldyBWZXJ0ZXhBbmltYXRpb25TZXQoKTtcclxuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCB2ZXJ0ZXhGcmFtZXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0bmV3VmVydGV4QW5pbWF0aW9uU2V0LmFkZEFuaW1hdGlvbih2ZXJ0ZXhGcmFtZXNbaV0pO1xyXG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldChuZXdWZXJ0ZXhBbmltYXRpb25TZXQsIG5hbWUpO1xyXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1ZlcnRleEFuaW1hdGlvblNldDtcclxuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVmVydGV4QW5pbWF0aW9uU2V0OiBOYW1lID0gXCIgKyBuYW1lICsgXCIgfCBBbmltYXRpb25zID0gXCIgKyBuZXdWZXJ0ZXhBbmltYXRpb25TZXQuYW5pbWF0aW9ucy5sZW5ndGggKyBcIiB8IEFuaW1hdGlvbi1OYW1lcyA9IFwiICsgbmV3VmVydGV4QW5pbWF0aW9uU2V0LmFuaW1hdGlvbk5hbWVzLnRvU3RyaW5nKCkpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoc2tlbGV0b25GcmFtZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZUJsb2NrQWRyZXNzLCBbQXNzZXRUeXBlLkFOSU1BVElPTl9OT0RFXSk7XHJcblx0XHRcdHZhciBuZXdTa2VsZXRvbkFuaW1hdGlvblNldDpTa2VsZXRvbkFuaW1hdGlvblNldCA9IG5ldyBTa2VsZXRvbkFuaW1hdGlvblNldChwcm9wcy5nZXQoMSwgNCkpOyAvL3Byb3BzLmdldCgxLDQpKTtcclxuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCBza2VsZXRvbkZyYW1lcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRuZXdTa2VsZXRvbkFuaW1hdGlvblNldC5hZGRBbmltYXRpb24oc2tlbGV0b25GcmFtZXNbaV0pO1xyXG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldChuZXdTa2VsZXRvbkFuaW1hdGlvblNldCwgbmFtZSk7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbmV3U2tlbGV0b25BbmltYXRpb25TZXQ7XHJcblx0XHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uQW5pbWF0aW9uU2V0OiBOYW1lID0gXCIgKyBuYW1lICsgXCIgfCBBbmltYXRpb25zID0gXCIgKyBuZXdTa2VsZXRvbkFuaW1hdGlvblNldC5hbmltYXRpb25zLmxlbmd0aCArIFwiIHwgQW5pbWF0aW9uLU5hbWVzID0gXCIgKyBuZXdTa2VsZXRvbkFuaW1hdGlvblNldC5hbmltYXRpb25OYW1lcy50b1N0cmluZygpKTtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL0Jsb2NrSUQgMTIyXHJcblx0cHJpdmF0ZSBwYXJzZUFuaW1hdG9yU2V0KGJsb2NrSUQ6bnVtYmVyIC8qdWludCovKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHRhcmdldE1lc2g6TWVzaDtcclxuXHRcdHZhciBhbmltU2V0QmxvY2tBZHJlc3M6bnVtYmVyIC8qaW50Ki9cclxuXHRcdHZhciB0YXJnZXRBbmltYXRpb25TZXQ6QW5pbWF0aW9uU2V0QmFzZTtcclxuXHRcdHZhciBvdXRwdXRTdHJpbmc6c3RyaW5nID0gXCJcIjtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcclxuXHRcdHZhciB0eXBlOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUn0pO1xyXG5cclxuXHRcdGFuaW1TZXRCbG9ja0FkcmVzcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHR2YXIgdGFyZ2V0TWVzaExlbmd0aDpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgbWVzaEFkcmVzc2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki8gPSBuZXcgQXJyYXk8bnVtYmVyPigpIC8qdWludCovO1xyXG5cdFx0Zm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCB0YXJnZXRNZXNoTGVuZ3RoOyBpKyspXHJcblx0XHRcdG1lc2hBZHJlc3Nlcy5wdXNoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCkpO1xyXG5cclxuXHRcdHZhciBhY3RpdmVTdGF0ZTpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR2YXIgYXV0b3BsYXk6Ym9vbGVhbiA9ICggdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCkgPT0gMSApO1xyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcclxuXHJcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xyXG5cdFx0dmFyIHRhcmdldE1lc2hlczpBcnJheTxNZXNoPiA9IG5ldyBBcnJheTxNZXNoPigpO1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBtZXNoQWRyZXNzZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKG1lc2hBZHJlc3Nlc1tpXSwgW0Fzc2V0VHlwZS5NRVNIXSk7XHJcblx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdHRhcmdldE1lc2hlcy5wdXNoKDxNZXNoPiByZXR1cm5lZEFycmF5WzFdKTtcclxuXHRcdH1cclxuXHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChhbmltU2V0QmxvY2tBZHJlc3MsIFtBc3NldFR5cGUuQU5JTUFUSU9OX1NFVF0pO1xyXG5cdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XHJcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbmltYXRpb25TZXQgKCBcIiArIGFuaW1TZXRCbG9ja0FkcmVzcyArIFwiICkgZm9yIHRoaXMgQW5pbWF0b3JcIik7O1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdHRhcmdldEFuaW1hdGlvblNldCA9IDxBbmltYXRpb25TZXRCYXNlPiByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0dmFyIHRoaXNBbmltYXRvcjpBbmltYXRvckJhc2U7XHJcblx0XHRpZiAodHlwZSA9PSAxKSB7XHJcblxyXG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocHJvcHMuZ2V0KDEsIDApLCBbQXNzZXRUeXBlLlNLRUxFVE9OXSk7XHJcblx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xyXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTa2VsZXRvbiAoIFwiICsgcHJvcHMuZ2V0KDEsIDApICsgXCIgKSBmb3IgdGhpcyBBbmltYXRvclwiKTtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzQW5pbWF0b3IgPSBuZXcgU2tlbGV0b25BbmltYXRvcig8U2tlbGV0b25BbmltYXRpb25TZXQ+IHRhcmdldEFuaW1hdGlvblNldCwgPFNrZWxldG9uPiByZXR1cm5lZEFycmF5WzFdKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gMilcclxuXHRcdFx0dGhpc0FuaW1hdG9yID0gbmV3IFZlcnRleEFuaW1hdG9yKDxWZXJ0ZXhBbmltYXRpb25TZXQ+IHRhcmdldEFuaW1hdGlvblNldCk7XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQodGhpc0FuaW1hdG9yLCBuYW1lKTtcclxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gdGhpc0FuaW1hdG9yO1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHRhcmdldE1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAodHlwZSA9PSAxKVxyXG5cdFx0XHRcdHRhcmdldE1lc2hlc1tpXS5hbmltYXRvciA9ICg8U2tlbGV0b25BbmltYXRvcj4gdGhpc0FuaW1hdG9yKTtcclxuXHRcdFx0aWYgKHR5cGUgPT0gMilcclxuXHRcdFx0XHR0YXJnZXRNZXNoZXNbaV0uYW5pbWF0b3IgPSAoPFZlcnRleEFuaW1hdG9yPiB0aGlzQW5pbWF0b3IpO1xyXG5cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl9kZWJ1ZylcclxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBBbmltYXRvcjogTmFtZSA9IFwiICsgbmFtZSk7XHJcblx0fVxyXG5cclxuXHQvLyB0aGlzIGZ1bmN0aW9ucyByZWFkcyBhbmQgY3JlYXRlcyBhIEVmZmVjdE1ldGhvZFxyXG5cdHByaXZhdGUgcGFyc2VTaGFyZWRNZXRob2RMaXN0KGJsb2NrSUQ6bnVtYmVyKTpFZmZlY3RNZXRob2RCYXNlXHJcblx0e1xyXG5cclxuXHRcdHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHZhciBlZmZlY3RNZXRob2RSZXR1cm46RWZmZWN0TWV0aG9kQmFzZTtcclxuXHJcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5CQUREUiwgMjpBV0RQYXJzZXIuQkFERFIsIDM6QVdEUGFyc2VyLkJBRERSLCAxMDE6dGhpcy5fcHJvcHNOclR5cGUsIDEwMjp0aGlzLl9wcm9wc05yVHlwZSwgMTAzOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDQ6dGhpcy5fcHJvcHNOclR5cGUsIDEwNTp0aGlzLl9wcm9wc05yVHlwZSwgMTA2OnRoaXMuX3Byb3BzTnJUeXBlLCAxMDc6dGhpcy5fcHJvcHNOclR5cGUsIDIwMTpBV0RQYXJzZXIuVUlOVDMyLCAyMDI6QVdEUGFyc2VyLlVJTlQzMiwgMzAxOkFXRFBhcnNlci5VSU5UMTYsIDMwMjpBV0RQYXJzZXIuVUlOVDE2LCA0MDE6QVdEUGFyc2VyLlVJTlQ4LCA0MDI6QVdEUGFyc2VyLlVJTlQ4LCA2MDE6QVdEUGFyc2VyLkNPTE9SLCA2MDI6QVdEUGFyc2VyLkNPTE9SLCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTH0pO1xyXG5cdFx0dmFyIHRhcmdldElEOm51bWJlcjtcclxuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XHJcblxyXG5cdFx0c3dpdGNoIChtZXRob2RUeXBlKSB7XHJcblx0XHRcdC8vIEVmZmVjdCBNZXRob2RzXHJcblx0XHRcdGNhc2UgNDAxOiAvL0NvbG9yTWF0cml4XHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdENvbG9yTWF0cml4TWV0aG9kKHByb3BzLmdldCgxMDEsIG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKSkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwMjogLy9Db2xvclRyYW5zZm9ybVxyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZCgpO1xyXG5cdFx0XHRcdHZhciBvZmZDb2w6bnVtYmVyIC8qdWludCovID0gcHJvcHMuZ2V0KDYwMSwgMHgwMDAwMDAwMCk7XHJcblx0XHRcdFx0KDxFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZD4gZWZmZWN0TWV0aG9kUmV0dXJuKS5jb2xvclRyYW5zZm9ybSA9IG5ldyBDb2xvclRyYW5zZm9ybShwcm9wcy5nZXQoMTAyLCAxKSwgcHJvcHMuZ2V0KDEwMywgMSksIHByb3BzLmdldCgxMDQsIDEpLCBwcm9wcy5nZXQoMTAxLCAxKSwgKChvZmZDb2wgPj4gMTYpICYgMHhGRiksICgob2ZmQ29sID4+IDgpICYgMHhGRiksIChvZmZDb2wgJiAweEZGKSwgKChvZmZDb2wgPj4gMjQpICYgMHhGRikpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwMzogLy9FbnZNYXBcclxuXHJcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VOViBNQVAnLCB0YXJnZXRJRCk7XHJcblxyXG5cclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFsgQXNzZXRUeXBlLlRFWFRVUkUgXSwgXCJDdWJlVGV4dHVyZVwiKTtcclxuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRW52TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEVudk1hcE1ldGhvZFwiKTtcclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0RW52TWFwTWV0aG9kKDxDdWJlVGV4dHVyZUJhc2U+IHJldHVybmVkQXJyYXlbMV0sIDxudW1iZXI+IHByb3BzLmdldCgxMDEsIDEpKTtcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgyLCAwKTtcclxuXHRcdFx0XHRpZiAodGFyZ2V0SUQgPiAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTWFzay10ZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEVudk1hcE1ldGhvZFwiKTtcclxuXHJcblx0XHRcdFx0XHQvLyBUb2RvOiB0ZXN0IG1hc2sgd2l0aCBFbnZNYXBNZXRob2RcclxuXHRcdFx0XHRcdC8vKDxFbnZNYXBNZXRob2Q+IGVmZmVjdE1ldGhvZFJldHVybikubWFzayA9IDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MDQ6IC8vTGlnaHRNYXBNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodE1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBMaWdodE1hcE1ldGhvZFwiKTtcclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0TGlnaHRNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSk7IC8vdXNlc2Vjb25kYXJ5VVYgbm90IHNldFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvL1x0XHRcdFx0Y2FzZSA0MDU6IC8vUHJvamVjdGl2ZVRleHR1cmVNZXRob2RcclxuXHRcdFx0Ly9cdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSBnZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV9QUk9KRUNUT1JdKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgVGV4dHVyZVByb2plY3RvciAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBQcm9qZWN0aXZlVGV4dHVyZU1ldGhvZFwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFByb2plY3RpdmVUZXh0dXJlTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIGJsZW5kTW9kZURpY1twcm9wcy5nZXQoNDAxLCAxMCldKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDA2OiAvL1JpbUxpZ2h0TWV0aG9kXHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdFJpbUxpZ2h0TWV0aG9kKHByb3BzLmdldCg2MDEsIDB4ZmZmZmZmKSwgcHJvcHMuZ2V0KDEwMSwgMC40KSwgcHJvcHMuZ2V0KDEwMSwgMikpOyAvL2JsZW5kTW9kZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwNzogLy9BbHBoYU1hc2tNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xyXG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcclxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbHBoYS10ZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEFscGhhTWFza01ldGhvZFwiKTtcclxuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0QWxwaGFNYXNrTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHByb3BzLmdldCg3MDEsIGZhbHNlKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDQwODogLy9SZWZyYWN0aW9uRW52TWFwTWV0aG9kXHJcblx0XHRcdC8vXHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXHJcblx0XHRcdC8vXHRcdFx0XHRcdFx0X2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBFbnZNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgUmVmcmFjdGlvbkVudk1hcE1ldGhvZFwiKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFJlZnJhY3Rpb25FbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgcHJvcHMuZ2V0KDEwMSwgMC4xKSwgcHJvcHMuZ2V0KDEwMiwgMC4wMSksIHByb3BzLmdldCgxMDMsIDAuMDEpLCBwcm9wcy5nZXQoMTA0LCAwLjAxKSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdFJlZnJhY3Rpb25FbnZNYXBNZXRob2QoZWZmZWN0TWV0aG9kUmV0dXJuKS5hbHBoYSA9IHByb3BzLmdldCgxMDQsIDEpO1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgNDA5OiAvL091dGxpbmVNZXRob2RcclxuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IE91dGxpbmVNZXRob2QocHJvcHMuZ2V0KDYwMSwgMHgwMDAwMDAwMCksIHByb3BzLmdldCgxMDEsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSwgcHJvcHMuZ2V0KDcwMiwgZmFsc2UpKTtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDEwOiAvL0ZyZXNuZWxFbnZNYXBNZXRob2RcclxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcclxuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0sIFwiQ3ViZVRleHR1cmVcIik7XHJcblx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxyXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBGcmVzbmVsRW52TWFwTWV0aG9kXCIpO1xyXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RGcmVzbmVsRW52TWFwTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIHByb3BzLmdldCgxMDEsIDEpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0MTE6IC8vRm9nTWV0aG9kXHJcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEZvZ01ldGhvZChwcm9wcy5nZXQoMTAxLCAwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwMCksIHByb3BzLmdldCg2MDEsIDB4ODA4MDgwKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XHJcblx0XHRyZXR1cm4gZWZmZWN0TWV0aG9kUmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VVc2VyQXR0cmlidXRlcygpOk9iamVjdFxyXG5cdHtcclxuXHRcdHZhciBhdHRyaWJ1dGVzOk9iamVjdDtcclxuXHRcdHZhciBsaXN0X2xlbjpudW1iZXI7XHJcblx0XHR2YXIgYXR0aWJ1dGVDbnQ6bnVtYmVyO1xyXG5cclxuXHRcdGxpc3RfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRpZiAobGlzdF9sZW4gPiAwKSB7XHJcblxyXG5cdFx0XHR2YXIgbGlzdF9lbmQ6bnVtYmVyO1xyXG5cclxuXHRcdFx0YXR0cmlidXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0bGlzdF9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGlzdF9sZW47XHJcblxyXG5cdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IGxpc3RfZW5kKSB7XHJcblx0XHRcdFx0dmFyIG5zX2lkOm51bWJlcjtcclxuXHRcdFx0XHR2YXIgYXR0cl9rZXk6c3RyaW5nO1xyXG5cdFx0XHRcdHZhciBhdHRyX3R5cGU6bnVtYmVyO1xyXG5cdFx0XHRcdHZhciBhdHRyX2xlbjpudW1iZXI7XHJcblx0XHRcdFx0dmFyIGF0dHJfdmFsOmFueTtcclxuXHJcblx0XHRcdFx0Ly8gVE9ETzogUHJvcGVybHkgdGVuZCB0byBuYW1lc3BhY2VzIGluIGF0dHJpYnV0ZXNcclxuXHRcdFx0XHRuc19pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdGF0dHJfa2V5ID0gdGhpcy5wYXJzZVZhclN0cigpO1xyXG5cdFx0XHRcdGF0dHJfdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdGF0dHJfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRcdFx0aWYgKCh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgYXR0cl9sZW4pID4gbGlzdF9lbmQpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICBFcnJvciBpbiByZWFkaW5nIGF0dHJpYnV0ZSAjIFwiICsgYXR0aWJ1dGVDbnQgKyBcIiA9IHNraXBwZWQgdG8gZW5kIG9mIGF0dHJpYnV0ZS1saXN0XCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGF0dHJpYnV0ZXM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKGF0dHJfdHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuQVdEU1RSSU5HOlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGF0dHJfbGVuKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQ4OlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEJ5dGUoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQxNjpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLklOVDMyOlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEludCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkJPT0w6XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UODpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMTY6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQzMjpcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkJBRERSOlxyXG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuRkxPQVQzMjpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUNjQ6XHJcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSAndW5pbXBsZW1lbnRlZCBhdHRyaWJ1dGUgdHlwZSAnICsgYXR0cl90eXBlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICs9IGF0dHJfbGVuO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJhdHRyaWJ1dGUgPSBuYW1lOiBcIiArIGF0dHJfa2V5ICsgXCIgIC8gdmFsdWUgPSBcIiArIGF0dHJfdmFsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGF0dHJpYnV0ZXNbYXR0cl9rZXldID0gYXR0cl92YWw7XHJcblx0XHRcdFx0YXR0aWJ1dGVDbnQgKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBhdHRyaWJ1dGVzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZVByb3BlcnRpZXMoZXhwZWN0ZWQ6T2JqZWN0KTpBV0RQcm9wZXJ0aWVzXHJcblx0e1xyXG5cdFx0dmFyIGxpc3RfZW5kOm51bWJlcjtcclxuXHRcdHZhciBsaXN0X2xlbjpudW1iZXI7XHJcblx0XHR2YXIgcHJvcGVydHlDbnQ6bnVtYmVyID0gMDtcclxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gbmV3IEFXRFByb3BlcnRpZXMoKTtcclxuXHJcblx0XHRsaXN0X2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRsaXN0X2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsaXN0X2xlbjtcclxuXHJcblx0XHRpZiAoZXhwZWN0ZWQpIHtcclxuXHJcblx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgbGlzdF9lbmQpIHtcclxuXHRcdFx0XHR2YXIgbGVuOm51bWJlcjtcclxuXHRcdFx0XHR2YXIga2V5Om51bWJlcjtcclxuXHRcdFx0XHR2YXIgdHlwZTpudW1iZXI7XHJcblxyXG5cdFx0XHRcdGtleSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRsZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW4pID4gbGlzdF9lbmQpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICBFcnJvciBpbiByZWFkaW5nIHByb3BlcnR5ICMgXCIgKyBwcm9wZXJ0eUNudCArIFwiID0gc2tpcHBlZCB0byBlbmQgb2YgcHJvcGVydGllLWxpc3RcIik7XHJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gbGlzdF9lbmQ7XHJcblx0XHRcdFx0XHRyZXR1cm4gcHJvcHM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoZXhwZWN0ZWQuaGFzT3duUHJvcGVydHkoa2V5LnRvU3RyaW5nKCkpKSB7XHJcblx0XHRcdFx0XHR0eXBlID0gZXhwZWN0ZWRba2V5XTtcclxuXHRcdFx0XHRcdHByb3BzLnNldChrZXksIHRoaXMucGFyc2VBdHRyVmFsdWUodHlwZSwgbGVuKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKz0gbGVuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cHJvcGVydHlDbnQgKz0gMTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSBsaXN0X2VuZDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcHJvcHM7XHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZUF0dHJWYWx1ZSh0eXBlOm51bWJlciwgbGVuOm51bWJlcik6YW55XHJcblx0e1xyXG5cdFx0dmFyIGVsZW1fbGVuOm51bWJlcjtcclxuXHRcdHZhciByZWFkX2Z1bmM6RnVuY3Rpb247XHJcblxyXG5cdFx0c3dpdGNoICh0eXBlKSB7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5CT09MOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQ4OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gMTtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMTY6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSAyO1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMzI6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSA0O1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEludDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQ4OlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gMTtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMTY6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSAyO1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMzI6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkNPTE9SOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5CQUREUjpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDQ7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDMyOlxyXG5cdFx0XHRcdGVsZW1fbGVuID0gNDtcclxuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUNjQ6XHJcblx0XHRcdFx0ZWxlbV9sZW4gPSA4O1xyXG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkFXRFNUUklORzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMobGVuKTtcclxuXHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLlZFQ1RPUjJ4MTpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuVkVDVE9SM3gxOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5WRUNUT1I0eDE6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLk1UWDN4MjpcclxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuTVRYM3gzOlxyXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFg0eDM6XHJcblx0XHRcdGNhc2UgQVdEUGFyc2VyLk1UWDR4NDpcclxuXHRcdFx0XHRlbGVtX2xlbiA9IDg7XHJcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZWxlbV9sZW4gPCBsZW4pIHtcclxuXHRcdFx0dmFyIGxpc3Q6QXJyYXk8YW55PiA9IFtdO1xyXG5cdFx0XHR2YXIgbnVtX3JlYWQ6bnVtYmVyID0gMDtcclxuXHRcdFx0dmFyIG51bV9lbGVtczpudW1iZXIgPSBsZW4vZWxlbV9sZW47XHJcblxyXG5cdFx0XHR3aGlsZSAobnVtX3JlYWQgPCBudW1fZWxlbXMpIHtcclxuXHRcdFx0XHRsaXN0LnB1c2gocmVhZF9mdW5jLmFwcGx5KHRoaXMuX25ld0Jsb2NrQnl0ZXMpKTsgLy8gbGlzdC5wdXNoKHJlYWRfZnVuYygpKTtcclxuXHRcdFx0XHRudW1fcmVhZCsrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHR2YXIgdmFsOmFueSA9IHJlYWRfZnVuYy5hcHBseSh0aGlzLl9uZXdCbG9ja0J5dGVzKTsvL3JlYWRfZnVuYygpO1xyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZUhlYWRlcigpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgZmxhZ3M6bnVtYmVyO1xyXG5cdFx0dmFyIGJvZHlfbGVuOm51bWJlcjtcclxuXHJcblx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiA9IDM7IC8vIFNraXAgbWFnaWMgc3RyaW5nIGFuZCBwYXJzZSB2ZXJzaW9uXHJcblxyXG5cdFx0dGhpcy5fdmVyc2lvblswXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdHRoaXMuX3ZlcnNpb25bMV0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblxyXG5cdFx0ZmxhZ3MgPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRTaG9ydCgpOyAvLyBQYXJzZSBiaXQgZmxhZ3NcclxuXHJcblx0XHR0aGlzLl9zdHJlYW1pbmcgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XHJcblxyXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XHJcblx0XHRcdHRoaXMuX2FjY3VyYWN5TWF0cml4ID0gQml0RmxhZ3MudGVzdChmbGFncywgQml0RmxhZ3MuRkxBRzIpO1xyXG5cdFx0XHR0aGlzLl9hY2N1cmFjeUdlbyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUczKTtcclxuXHRcdFx0dGhpcy5fYWNjdXJhY3lQcm9wcyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUc0KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBzZXQgX2FjY3VyYWN5T25CbG9ja3MsIHRoZSBwcmVjaXNpb24tdmFsdWVzIGFyZSByZWFkIGZyb20gZWFjaCBibG9jay1oZWFkZXIuXHJcblxyXG5cdFx0Ly8gc2V0IHN0b3JhZ2VQcmVjaXNpb24gdHlwZXNcclxuXHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xyXG5cclxuXHRcdGlmICh0aGlzLl9hY2N1cmFjeUdlbykge1xyXG5cdFx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRpZiAodGhpcy5fYWNjdXJhY3lNYXRyaXgpIHtcclxuXHRcdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcclxuXHJcblx0XHRpZiAodGhpcy5fYWNjdXJhY3lQcm9wcykge1xyXG5cdFx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2NvbXByZXNzaW9uID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkQnl0ZSgpOyAvLyBjb21wcmVzc2lvblxyXG5cclxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkltcG9ydCBBV0RGaWxlIG9mIHZlcnNpb24gPSBcIiArIHRoaXMuX3ZlcnNpb25bMF0gKyBcIiAtIFwiICsgdGhpcy5fdmVyc2lvblsxXSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiR2xvYmFsIFNldHRpbmdzID0gQ29tcHJlc3Npb24gPSBcIiArIHRoaXMuX2NvbXByZXNzaW9uICsgXCIgfCBTdHJlYW1pbmcgPSBcIiArIHRoaXMuX3N0cmVhbWluZyArIFwiIHwgTWF0cml4LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lNYXRyaXggKyBcIiB8IEdlb21ldHJ5LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lHZW8gKyBcIiB8IFByb3BlcnRpZXMtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeVByb3BzKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDaGVjayBmaWxlIGludGVncml0eVxyXG5cdFx0Ym9keV9sZW4gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdGlmICghdGhpcy5fc3RyZWFtaW5nICYmIGJvZHlfbGVuICE9IHRoaXMuX2J5dGVEYXRhLmdldEJ5dGVzQXZhaWxhYmxlKCkpIHtcclxuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQVdEMiBib2R5IGxlbmd0aCBkb2VzIG5vdCBtYXRjaCBoZWFkZXIgaW50ZWdyaXR5IGZpZWxkJyk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHQvLyBIZWxwZXIgLSBmdW5jdGlvbnNcclxuXHRwcml2YXRlIGdldFVWRm9yVmVydGV4QW5pbWF0aW9uKG1lc2hJRDpudW1iZXIgLyp1aW50Ki8pOkFycmF5PEFycmF5PG51bWJlcj4+XHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuX2Jsb2Nrc1ttZXNoSURdLmRhdGEgaW5zdGFuY2VvZiBNZXNoKVxyXG5cdFx0XHRtZXNoSUQgPSB0aGlzLl9ibG9ja3NbbWVzaElEXS5nZW9JRDtcclxuXHRcdGlmICh0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb24pXHJcblx0XHRcdHJldHVybiB0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb247XHJcblx0XHR2YXIgZ2VvbWV0cnk6R2VvbWV0cnkgPSAoPEdlb21ldHJ5PiB0aGlzLl9ibG9ja3NbbWVzaElEXS5kYXRhKTtcclxuXHRcdHZhciBnZW9DbnQ6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cdFx0dmFyIHVkOkFycmF5PG51bWJlcj47XHJcblx0XHR2YXIgdVN0cmlkZTpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgdU9mZnM6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIG51bVBvaW50czpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgaTpudW1iZXIgLyppbnQqLztcclxuXHRcdHZhciBuZXdVdnM6QXJyYXk8bnVtYmVyPjtcclxuXHRcdHZhciBzdWJfZ2VvbTpUcmlhbmdsZVN1Ykdlb21ldHJ5O1xyXG5cdFx0dGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uID0gbmV3IEFycmF5PEFycmF5PG51bWJlcj4+KCk7XHJcblx0XHR3aGlsZSAoZ2VvQ250IDwgZ2VvbWV0cnkuc3ViR2VvbWV0cmllcy5sZW5ndGgpIHtcclxuXHRcdFx0bmV3VXZzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdFx0c3ViX2dlb20gPSA8VHJpYW5nbGVTdWJHZW9tZXRyeT4gZ2VvbWV0cnkuc3ViR2VvbWV0cmllc1tnZW9DbnRdO1xyXG5cdFx0XHRudW1Qb2ludHMgPSBzdWJfZ2VvbS5udW1WZXJ0aWNlcztcclxuXHRcdFx0dWQgPSBzdWJfZ2VvbS51dnM7XHJcblx0XHRcdHVTdHJpZGUgPSBzdWJfZ2VvbS5nZXRTdHJpZGUoVHJpYW5nbGVTdWJHZW9tZXRyeS5VVl9EQVRBKTtcclxuXHRcdFx0dU9mZnMgPSBzdWJfZ2VvbS5nZXRPZmZzZXQoVHJpYW5nbGVTdWJHZW9tZXRyeS5VVl9EQVRBKTtcclxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG51bVBvaW50czsgaSsrKSB7XHJcblx0XHRcdFx0bmV3VXZzLnB1c2godWRbdU9mZnMgKyBpKnVTdHJpZGUgKyAwXSk7XHJcblx0XHRcdFx0bmV3VXZzLnB1c2godWRbdU9mZnMgKyBpKnVTdHJpZGUgKyAxXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uLnB1c2gobmV3VXZzKTtcclxuXHRcdFx0Z2VvQ250Kys7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5fYmxvY2tzW21lc2hJRF0udXZzRm9yVmVydGV4QW5pbWF0aW9uO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZVZhclN0cigpOnN0cmluZ1xyXG5cdHtcclxuXHJcblx0XHR2YXIgbGVuOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW4pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRBc3NldEJ5SUQoYXNzZXRJRDpudW1iZXIsIGFzc2V0VHlwZXNUb0dldDpBcnJheTxzdHJpbmc+LCBleHRyYVR5cGVJbmZvOnN0cmluZyA9IFwiU2luZ2xlVGV4dHVyZVwiKTpBcnJheTxhbnk+XHJcblx0e1xyXG5cdFx0dmFyIHJldHVybkFycmF5OkFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xyXG5cdFx0dmFyIHR5cGVDbnQ6bnVtYmVyID0gMDtcclxuXHRcdGlmIChhc3NldElEID4gMCkge1xyXG5cdFx0XHRpZiAodGhpcy5fYmxvY2tzW2Fzc2V0SURdKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKSB7XHJcblx0XHRcdFx0XHR3aGlsZSAodHlwZUNudCA8IGFzc2V0VHlwZXNUb0dldC5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBpYXNzZXQ6SUFzc2V0ID0gPElBc3NldD4gdGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGE7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaWFzc2V0LmFzc2V0VHlwZSA9PSBhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0pIHtcclxuXHRcdFx0XHRcdFx0XHQvL2lmIHRoZSByaWdodCBhc3NldFR5cGUgd2FzIGZvdW5kXHJcblx0XHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLlRFWFRVUkUpICYmIChleHRyYVR5cGVJbmZvID09IFwiQ3ViZVRleHR1cmVcIikpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSBpbnN0YW5jZW9mIEltYWdlQ3ViZVRleHR1cmUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5BcnJheTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLlRFWFRVUkUpICYmIChleHRyYVR5cGVJbmZvID09IFwiU2luZ2xlVGV4dHVyZVwiKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhIGluc3RhbmNlb2YgSW1hZ2VUZXh0dXJlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5BcnJheTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vaWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLkdFT01FVFJZKSAmJiAoSUFzc2V0KF9ibG9ja3NbYXNzZXRJRF0uZGF0YSkuYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NRVNIKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuR0VPTUVUUlkpICYmIChpYXNzZXQuYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NRVNIKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgbWVzaDpNZXNoID0gPE1lc2g+IHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhXHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChtZXNoLmdlb21ldHJ5KTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0eXBlQ250Kys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyBpZiB0aGUgaGFzIG5vdCByZXR1cm5lZCBhbnl0aGluZyB5ZXQsIHRoZSBhc3NldCBpcyBub3QgZm91bmQsIG9yIHRoZSBmb3VuZCBhc3NldCBpcyBub3QgdGhlIHJpZ2h0IHR5cGUuXHJcblx0XHRyZXR1cm5BcnJheS5wdXNoKGZhbHNlKTtcclxuXHRcdHJldHVybkFycmF5LnB1c2godGhpcy5nZXREZWZhdWx0QXNzZXQoYXNzZXRUeXBlc1RvR2V0WzBdLCBleHRyYVR5cGVJbmZvKSk7XHJcblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XHJcblx0fVxyXG5cdHByaXZhdGUgZ2V0RGVmYXVsdEFzc2V0KGFzc2V0VHlwZTpzdHJpbmcsIGV4dHJhVHlwZUluZm86c3RyaW5nKTpJQXNzZXRcclxuXHR7XHJcblx0XHRzd2l0Y2ggKHRydWUpIHtcclxuXHRcdFx0Y2FzZSAoYXNzZXRUeXBlID09IEFzc2V0VHlwZS5URVhUVVJFKTpcclxuXHRcdFx0XHRpZiAoZXh0cmFUeXBlSW5mbyA9PSBcIkN1YmVUZXh0dXJlXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5nZXREZWZhdWx0Q3ViZVRleHR1cmUoKTtcclxuXHRcdFx0XHRpZiAoZXh0cmFUeXBlSW5mbyA9PSBcIlNpbmdsZVRleHR1cmVcIilcclxuXHRcdFx0XHRcdHJldHVybiBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRUZXh0dXJlKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgKGFzc2V0VHlwZSA9PSBBc3NldFR5cGUuTUFURVJJQUwpOlxyXG5cdFx0XHRcdHJldHVybiBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRNYXRlcmlhbCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXREZWZhdWx0Q3ViZVRleHR1cmUoKTpJQXNzZXRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZSkge1xyXG5cdFx0XHR2YXIgZGVmYXVsdEJpdG1hcDpCaXRtYXBEYXRhID0gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5jcmVhdGVDaGVja2VyZWRCaXRtYXBEYXRhKCk7XHJcblxyXG5cdFx0XHR0aGlzLl9kZWZhdWx0Q3ViZVRleHR1cmUgPSBuZXcgQml0bWFwQ3ViZVRleHR1cmUoZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCwgZGVmYXVsdEJpdG1hcCk7XHJcblx0XHRcdHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZS5uYW1lID0gXCJkZWZhdWx0Q3ViZVRleHR1cmVcIjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPElBc3NldD4gdGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWFkTnVtYmVyKHByZWNpc2lvbjpib29sZWFuID0gZmFsc2UpOm51bWJlclxyXG5cdHtcclxuXHRcdGlmIChwcmVjaXNpb24pXHJcblx0XHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGUoKTtcclxuXHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VNYXRyaXgzRCgpOk1hdHJpeDNEXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBNYXRyaXgzRCh0aGlzLnBhcnNlTWF0cml4NDNSYXdEYXRhKCkpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZU1hdHJpeDMyUmF3RGF0YSgpOkFycmF5PG51bWJlcj5cclxuXHR7XHJcblx0XHR2YXIgaTpudW1iZXI7XHJcblx0XHR2YXIgbXR4X3JhdzpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oNik7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcblx0XHRcdG10eF9yYXdbaV0gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtdHhfcmF3O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZU1hdHJpeDQzUmF3RGF0YSgpOkFycmF5PG51bWJlcj5cclxuXHR7XHJcblx0XHR2YXIgbXR4X3JhdzpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oMTYpO1xyXG5cclxuXHRcdG10eF9yYXdbMF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1sxXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbM10gPSAwLjA7XHJcblx0XHRtdHhfcmF3WzRdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbNV0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1s2XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzddID0gMC4wO1xyXG5cdFx0bXR4X3Jhd1s4XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XHJcblx0XHRtdHhfcmF3WzldID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTBdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcclxuXHRcdG10eF9yYXdbMTFdID0gMC4wO1xyXG5cdFx0bXR4X3Jhd1sxMl0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1sxM10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1sxNF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xyXG5cdFx0bXR4X3Jhd1sxNV0gPSAxLjA7XHJcblxyXG5cdFx0Ly9UT0RPOiBmaXggbWF4IGV4cG9ydGVyIHRvIHJlbW92ZSBOYU4gdmFsdWVzIGluIGpvaW50IDAgaW52ZXJzZSBiaW5kIHBvc2VcclxuXHJcblx0XHRpZiAoaXNOYU4obXR4X3Jhd1swXSkpIHtcclxuXHRcdFx0bXR4X3Jhd1swXSA9IDE7XHJcblx0XHRcdG10eF9yYXdbMV0gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzJdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1s0XSA9IDA7XHJcblx0XHRcdG10eF9yYXdbNV0gPSAxO1xyXG5cdFx0XHRtdHhfcmF3WzZdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1s4XSA9IDA7XHJcblx0XHRcdG10eF9yYXdbOV0gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzEwXSA9IDE7XHJcblx0XHRcdG10eF9yYXdbMTJdID0gMDtcclxuXHRcdFx0bXR4X3Jhd1sxM10gPSAwO1xyXG5cdFx0XHRtdHhfcmF3WzE0XSA9IDA7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtdHhfcmF3O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCA9IEFXRFBhcnNlcjtcclxuXHJcbmNsYXNzIEFXREJsb2NrXHJcbntcclxuXHRwdWJsaWMgaWQ6bnVtYmVyO1xyXG5cdHB1YmxpYyBuYW1lOnN0cmluZztcclxuXHRwdWJsaWMgZGF0YTphbnk7XHJcblx0cHVibGljIGxlbjphbnk7XHJcblx0cHVibGljIGdlb0lEOm51bWJlcjtcclxuXHRwdWJsaWMgZXh0cmFzOk9iamVjdDtcclxuXHRwdWJsaWMgYnl0ZXM6Qnl0ZUFycmF5O1xyXG5cdHB1YmxpYyBlcnJvck1lc3NhZ2VzOkFycmF5PHN0cmluZz47XHJcblx0cHVibGljIHV2c0ZvclZlcnRleEFuaW1hdGlvbjpBcnJheTxBcnJheTxudW1iZXI+PjtcclxuXHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkaXNwb3NlKClcclxuXHR7XHJcblxyXG5cdFx0dGhpcy5pZCA9IG51bGw7XHJcblx0XHR0aGlzLmJ5dGVzID0gbnVsbDtcclxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlcyA9IG51bGw7XHJcblx0XHR0aGlzLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZEVycm9yKGVycm9yTXNnOnN0cmluZyk6dm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lcnJvck1lc3NhZ2VzKVxyXG5cdFx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlcy5wdXNoKGVycm9yTXNnKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEFXRFByb3BlcnRpZXNcclxue1xyXG5cdHB1YmxpYyBzZXQoa2V5Om51bWJlciwgdmFsdWU6YW55KTp2b2lkXHJcblx0e1xyXG5cdFx0dGhpc1sga2V5LnRvU3RyaW5nKCkgXSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldChrZXk6bnVtYmVyLCBmYWxsYmFjazphbnkpOmFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleS50b1N0cmluZygpKSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpc1trZXkudG9TdHJpbmcoKV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsbGJhY2s7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIEJpdEZsYWdzXHJcbntcclxuXHRwdWJsaWMgc3RhdGljIEZMQUcxOm51bWJlciA9IDE7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMjpudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzM6bnVtYmVyID0gNDtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUc0Om51bWJlciA9IDg7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHNTpudW1iZXIgPSAxNjtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUc2Om51bWJlciA9IDMyO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzc6bnVtYmVyID0gNjQ7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHODpudW1iZXIgPSAxMjg7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHOTpudW1iZXIgPSAyNTY7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTA6bnVtYmVyID0gNTEyO1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzExOm51bWJlciA9IDEwMjQ7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTI6bnVtYmVyID0gMjA0ODtcclxuXHRwdWJsaWMgc3RhdGljIEZMQUcxMzpudW1iZXIgPSA0MDk2O1xyXG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE0Om51bWJlciA9IDgxOTI7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTU6bnVtYmVyID0gMTYzODQ7XHJcblx0cHVibGljIHN0YXRpYyBGTEFHMTY6bnVtYmVyID0gMzI3Njg7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdGVzdChmbGFnczpudW1iZXIsIHRlc3RGbGFnOm51bWJlcik6Ym9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiAoZmxhZ3MgJiB0ZXN0RmxhZykgPT0gdGVzdEZsYWc7XHJcblx0fVxyXG59XHJcbiJdfQ==