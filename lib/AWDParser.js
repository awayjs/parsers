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
        for (var uvcnt = 0; uvcnt < num_uv_values; uvcnt++) {
            var uv_value = this._newBlockBytes.readFloat();
        }
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
        for (var paracnt = 0; paracnt < num_paragraphs; paracnt++) {
            var num_textruns = this._newBlockBytes.readUnsignedInt();
            for (var textrun_cnt = 0; textrun_cnt < num_textruns; textrun_cnt++) {
                var format_id = this._newBlockBytes.readUnsignedInt();
                //console.log("format_id  '" + format_id);
                var text_format;
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
                    newTextField.appendText(this_txt, text_format);
                    complete_text += this_txt;
                }
            }
            newTextField.closeParagraph();
        }
        newTextField.construct_geometry();
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
                            if (mask.length > 0) {
                                if ((mask.length == 1) && (mask[0] < 0)) {
                                    // TODO: this object is used as mask
                                    commandString += "\n                obj is used as mask";
                                }
                                else {
                                    // TODO: this object is masked by one or more objects defined by ids in mask-array
                                    commandString += "\n                obj is masked by " + mask.length + " objects";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXIudHMiXSwibmFtZXMiOlsiQVdEUGFyc2VyIiwiQVdEUGFyc2VyLmNvbnN0cnVjdG9yIiwiQVdEUGFyc2VyLnN1cHBvcnRzVHlwZSIsIkFXRFBhcnNlci5zdXBwb3J0c0RhdGEiLCJBV0RQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIkFXRFBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5TmFtZSIsIkFXRFBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiQVdEUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiQVdEUGFyc2VyLmRpc3Bvc2UiLCJBV0RQYXJzZXIucGFyc2VOZXh0QmxvY2siLCJBV0RQYXJzZXIucGFyc2VUZXNzZWxhdGVkRm9udCIsIkFXRFBhcnNlci5wYXJzZVRleHRGb3JtYXQiLCJBV0RQYXJzZXIucGFyZXNUZXh0RmllbGQiLCJBV0RQYXJzZXIucGFyc2VCaWxsQm9hcmRMaWJyYXJ5QmxvY2siLCJBV0RQYXJzZXIucGFyc2VNZXNoTGlicmFyeUJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlQXVkaW9CbG9jayIsIkFXRFBhcnNlci5wYXJzZVRpbWVMaW5lIiwiQVdEUGFyc2VyLnBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayIsIkFXRFBhcnNlci5wYXJzZVByaW1pdHZlcyIsIkFXRFBhcnNlci5wYXJzZUNvbnRhaW5lciIsIkFXRFBhcnNlci5wYXJzZU1lc2hJbnN0YW5jZSIsIkFXRFBhcnNlci5wYXJzZVNreWJveEluc3RhbmNlIiwiQVdEUGFyc2VyLnBhcnNlTGlnaHQiLCJBV0RQYXJzZXIucGFyc2VDYW1lcmEiLCJBV0RQYXJzZXIucGFyc2VMaWdodFBpY2tlciIsIkFXRFBhcnNlci5wYXJzZU1hdGVyaWFsIiwiQVdEUGFyc2VyLnBhcnNlTWF0ZXJpYWxfdjEiLCJBV0RQYXJzZXIucGFyc2VUZXh0dXJlIiwiQVdEUGFyc2VyLnBhcnNlQ3ViZVRleHR1cmUiLCJBV0RQYXJzZXIucGFyc2VTaGFyZWRNZXRob2RCbG9jayIsIkFXRFBhcnNlci5wYXJzZVNoYWRvd01ldGhvZEJsb2NrIiwiQVdEUGFyc2VyLnBhcnNlQ29tbWFuZCIsIkFXRFBhcnNlci5wYXJzZU1ldGFEYXRhIiwiQVdEUGFyc2VyLnBhcnNlTmFtZVNwYWNlIiwiQVdEUGFyc2VyLnBhcnNlU2hhZG93TWV0aG9kTGlzdCIsIkFXRFBhcnNlci5wYXJzZVNrZWxldG9uIiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b25Qb3NlIiwiQVdEUGFyc2VyLnBhcnNlU2tlbGV0b25BbmltYXRpb24iLCJBV0RQYXJzZXIucGFyc2VNZXNoUG9zZUFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZVZlcnRleEFuaW1hdGlvblNldCIsIkFXRFBhcnNlci5wYXJzZUFuaW1hdG9yU2V0IiwiQVdEUGFyc2VyLnBhcnNlU2hhcmVkTWV0aG9kTGlzdCIsIkFXRFBhcnNlci5wYXJzZVVzZXJBdHRyaWJ1dGVzIiwiQVdEUGFyc2VyLnBhcnNlUHJvcGVydGllcyIsIkFXRFBhcnNlci5wYXJzZUF0dHJWYWx1ZSIsIkFXRFBhcnNlci5wYXJzZUhlYWRlciIsIkFXRFBhcnNlci5nZXRVVkZvclZlcnRleEFuaW1hdGlvbiIsIkFXRFBhcnNlci5wYXJzZVZhclN0ciIsIkFXRFBhcnNlci5nZXRBc3NldEJ5SUQiLCJBV0RQYXJzZXIuZ2V0RGVmYXVsdEFzc2V0IiwiQVdEUGFyc2VyLmdldERlZmF1bHRDdWJlVGV4dHVyZSIsIkFXRFBhcnNlci5yZWFkTnVtYmVyIiwiQVdEUGFyc2VyLnBhcnNlTWF0cml4M0QiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXgzMlJhd0RhdGEiLCJBV0RQYXJzZXIucGFyc2VNYXRyaXg0M1Jhd0RhdGEiLCJBV0RCbG9jayIsIkFXREJsb2NrLmNvbnN0cnVjdG9yIiwiQVdEQmxvY2suZGlzcG9zZSIsIkFXREJsb2NrLmFkZEVycm9yIiwiQVdEUHJvcGVydGllcyIsIkFXRFByb3BlcnRpZXMuY29uc3RydWN0b3IiLCJBV0RQcm9wZXJ0aWVzLnNldCIsIkFXRFByb3BlcnRpZXMuZ2V0IiwiQml0RmxhZ3MiLCJCaXRGbGFncy5jb25zdHJ1Y3RvciIsIkJpdEZsYWdzLnRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLElBQU8sU0FBUyxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sUUFBUSxXQUFpQiwrQkFBK0IsQ0FBQyxDQUFDO0FBRWpFLElBQU8sZ0JBQWdCLFdBQWUsdUNBQXVDLENBQUMsQ0FBQztBQUMvRSxJQUFPLG1CQUFtQixXQUFjLDBDQUEwQyxDQUFDLENBQUM7QUFDcEYsSUFBTyxjQUFjLFdBQWUscUNBQXFDLENBQUMsQ0FBQztBQUMzRSxJQUFPLFFBQVEsV0FBaUIsK0JBQStCLENBQUMsQ0FBQztBQUNqRSxJQUFPLFFBQVEsV0FBaUIsK0JBQStCLENBQUMsQ0FBQztBQUNqRSxJQUFPLG1CQUFtQixXQUFjLHlDQUF5QyxDQUFDLENBQUM7QUFDbkYsSUFBTyxVQUFVLFdBQWdCLGdDQUFnQyxDQUFDLENBQUM7QUFDbkUsSUFBTyxTQUFTLFdBQWdCLG1DQUFtQyxDQUFDLENBQUM7QUFFckUsSUFBTyxVQUFVLFdBQWdCLG9DQUFvQyxDQUFDLENBQUM7QUFDdkUsSUFBTyxXQUFXLFdBQWdCLHFDQUFxQyxDQUFDLENBQUM7QUFHekUsSUFBTyxxQkFBcUIsV0FBYSxtREFBbUQsQ0FBQyxDQUFDO0FBQzlGLElBQU8sc0JBQXNCLFdBQWEsb0RBQW9ELENBQUMsQ0FBQztBQUNoRyxJQUFPLCtCQUErQixXQUFXLDZEQUE2RCxDQUFDLENBQUM7QUFDaEgsSUFBTyxpQkFBaUIsV0FBYyw0Q0FBNEMsQ0FBQyxDQUFDO0FBR3BGLElBQU8sZ0JBQWdCLFdBQWUsMkNBQTJDLENBQUMsQ0FBQztBQUNuRixJQUFPLFlBQVksV0FBZ0IsdUNBQXVDLENBQUMsQ0FBQztBQUc1RSxJQUFPLFNBQVMsV0FBZ0IsaUNBQWlDLENBQUMsQ0FBQztBQUVuRSxJQUFPLHNCQUFzQixXQUFhLHNEQUFz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Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzNDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3pDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFFMUNBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLEVBQUVBLDZDQUE2Q0E7UUFDdkZBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzdCQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM3QkEsSUFBSUEs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QUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0pBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxtQkFBbUJBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvS0EsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLHFCQUFxQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JIQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsdUJBQXVCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSx1Q0FBdUNBO2dCQUNuTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ0NBLE1BQU9BLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUNyREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ0NBLE1BQU9BLENBQUNBLFlBQVlBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN4REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ0NBLE1BQU9BLENBQUNBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUUvQ0EsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLEdBQUdBLElBQUlBLG1CQUFtQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdKQSxLQUFLQSxDQUFDQTtZQUVQQSxLQUFLQSxDQUFDQTtnQkFDTEEsTUFBTUEsR0FBR0EsSUFBSUEsc0JBQXNCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0lBLEtBQUtBLENBQUNBO1lBRVBBLEtBQUtBLENBQUNBO2dCQUNMQSxNQUFNQSxHQUFHQSxJQUFJQSxvQkFBb0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUN2SUEsS0FBS0EsQ0FBQ0E7WUFFUEE7Z0JBQ0NBLE1BQU1BLEdBQUdBLElBQUlBLFVBQVVBLEVBQUVBLENBQUNBO2dCQUMxQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0NBQWdDQSxDQUFDQSxDQUFDQTtnQkFDOUNBLEtBQUtBLENBQUNBO1FBQ1JBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBRzNEQSxDQUFDQTtRQUVEQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNuQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBO1FBRXBDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFD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QUU5QkEsSUFBSUEsbUJBQW1CQSxHQUFjQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUV0SEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsSUFBSUEsSUFBSUEsR0FBbURBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3BCQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHVDQUF1Q0EsQ0FBQ0EsQ0FBQ0E7UUFDekVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLEFBQ0FBLDZCQUQ2QkE7WUFDSEEsSUFBSUEsQ0FBQ0EsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDMURBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM5QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakNBLElBQUlBLENBQVFBLENBQUNBO1lBSWJBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUM1Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0VBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hEQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEpBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLFFBQVFBLENBQVNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEVBQVVBLEtBQUtBLENB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LENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXBCQSxLQUFLQSxHQUFHQSxJQUFJQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXBGQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQWdCQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0JBLGVBQWVBLEdBQUdBLElBQUlBLHVCQUF1QkEsRUFBRUEsQ0FBQ0E7Z0JBQ2pEQSxDQUFDQTtZQU9GQSxDQUFDQTtRQUVGQSxDQUFDQTtRQUNEQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUNyQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2xDQSxLQUFLQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUM1Q0EsS0FBS0EsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsR0FB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QSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUNuZEEsSUFBSUEsV0FBV0EsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDekNBLElBQUlBLFdBQVdBLEdBQVVBLGtCQUFrQkEsQ0FBQ0E7UUFFNUNBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSx3QkFBd0JBLEdBQUdBLFdBQVdBLEdBQUdBLDZEQUE2REEsQ0FBQ0EsQ0FBQ0E7WUFDdklBLE1BQU1BLENBQUNBO1FBQ1JBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2ZBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO2dCQUMxQkEsV0FBV0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO2dCQUMvQkEsV0FBV0EsR0FBR0Es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QUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUU5QkEsQUFDQUEsV0FEV0E7WUFDWEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2ZBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO2dCQUNqREEsSUFBSUEsR0FBVUEsQ0FBQ0E7Z0JBQ2ZBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO2dCQUVqREEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsR0FBR0EsR0FBR0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDdkdBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUVQQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtnQkFDakRBLElBQUlBLElBQWNBLENBQUNBO2dCQUNuQkEsSUFBSUEsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7Z0JBRXZCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFFakRBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLEVBQUVBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLFdBQVdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDdEhBLENBQUNBO1FBQ0ZBLENBQUNBO1FBRURBLEFBQ0FBLGlCQURpQkE7UUFDakJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzFEQSxJQUFJQSxDQUFDQSw4QkFBOEJBLEVBQUVBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUVuQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLElBQUlBLGtCQUFrQkEsR0FBaUJBLENBQUNBLFVBQVVBLEVBQUVBLE9BQU9BLENBQUNBLENBQUFBO1lBQzVEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsMEJBQTBCQSxDQUFDQSxDQUFDQTtRQUN6RkEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFFRDdCLGVBQWVBO0lBQ1BBLDBDQUFzQkEsR0FBOUJBLFVBQStCQSxPQUFjQTtRQUU1QzhCLElBQUlBLEtBQXNCQSxDQUFDQTtRQUUzQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDaERBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ25DQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFVQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNqRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFFbkNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQ0FBZ0NBLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLEdBQUdBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBO1FBQ2pGQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVEOUIsZUFBZUE7SUFDUEEsMENBQXNCQSxHQUE5QkEsVUFBK0JBLE9BQWNBO1FBRTVDK0IsSUFBSUEsSUFBV0EsQ0FBQ0E7UUFDaEJBLElBQUlBLFFBQWVBLENBQUNBO1FBQ3BCQSxJQUFJQSxLQUFzQkEsQ0FBQ0E7UUFDM0JBLElBQUlBLGFBQW9CQSxDQUFDQTtRQUN6QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFFaERBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO1FBQ3REQSxJQUFJQSxhQUFhQSxHQUFjQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVuRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLHVDQUF1Q0EsR0FBR0EsYUFBYUEsR0FBR0EscURBQXFEQSxDQUFDQSxDQUFDQTtZQUNoSkEsTUFBTUEsQ0FBQ0E7UUFDUkEsQ0FBQ0E7UUFFREEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFhQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUUxRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDVkEsTUFBTUEsQ0FBQ0E7UUFFUkEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxFQUFFQSxpQkFBaUJBO1FBQzdDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFVQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNqRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFFbkNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx5Q0FBeUNBLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLEdBQUdBLFlBQVlBLEdBQUdBLEtBQUtBLEdBQUdBLGtCQUFrQkEsRUFBZ0JBLGFBQWFBLENBQUNBLENBQUNBLENBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ3hKQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUdEL0IsZ0JBQWdCQTtJQUNSQSxnQ0FBWUEsR0FBcEJBLFVBQXFCQSxPQUFjQTtRQUVsQ2dDLElBQUlBLFNBQVNBLEdBQVdBLENBQUVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBRUEsQ0FBQ0E7UUFDeEVBLElBQUlBLE1BQU1BLEdBQVVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO1FBQzFEQSxJQUFJQSxHQUFHQSxHQUFZQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtRQUN4Q0EsSUFBSUEsSUFBSUEsR0FBVUEsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFFckNBLElBQUlBLFlBQW1DQSxDQUFDQTtRQUN4Q0EsSUFBSUEsWUFBbUNBLENBQUNBO1FBRXhDQSxJQUFJQSxhQUFhQSxHQUFjQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVqSEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLFlBQVlBLEdBQTRCQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMxREEsQ0FBQ0E7UUFFREEsSUFBSUEsV0FBV0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDekRBLElBQUlBLFdBQVdBLEdBQVVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO1FBRXpEQSxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFcEVBLE1BQU1BLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JCQSxLQUFLQSxDQUFDQTtnQkFFTEEsSUFBSUEsUUFBUUEsR0FBVUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RDQSxJQUFJQSxtQkFBbUJBLEdBQWNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsb0NBQW9DQTtnQkFFdEpBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxpQ0FBaUNBLEdBQUdBLFFBQVFBLEdBQUdBLDBCQUEwQkEsQ0FBQ0EsQ0FBQ0E7b0JBQzFHQSxNQUFNQSxDQUFDQTtnQkFDUkEsQ0FBQ0E7Z0JBRURBLFlBQVlBLEdBQUdBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRXRDQSxFQUFFQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDbEJBLFlBQVlBLENBQUNBLFFBQVFBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBRURBLFlBQVlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO2dCQUV0Q0EsS0FBS0EsQ0FBQ0E7UUFDUkEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUNBLENBQUNBLENBQUNBO1lBRXBIQSxZQUFZQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyRkEsWUFBWUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUVqREEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsWUFBWUEsQ0FBQUE7UUFFekNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxpQ0FBaUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBO1FBQ3ZEQSxDQUFDQTtJQUVGQSxDQUFDQTtJQUVEaEMsYUFBYUE7SUFDTEEsaUNBQWFBLEdBQXJCQSxVQUFzQkEsT0FBY0E7UUFFbkNpQyxJQUFJQSxLQUFLQSxHQUFpQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsRUFBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFaktBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ2pCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw4Q0FBOENBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzlFQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw4Q0FBOENBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw4Q0FBOENBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw4Q0FBOENBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw4Q0FBOENBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3ZGQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUVEakMsYUFBYUE7SUFDTEEsa0NBQWNBLEdBQXRCQSxVQUF1QkEsT0FBY0E7UUFFcENrQyxJQUFJQSxFQUFFQSxHQUFVQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3ZEQSxJQUFJQSxlQUFlQSxHQUFVQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUNoREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDZkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0NBQWdDQSxHQUFHQSxFQUFFQSxHQUFHQSxjQUFjQSxHQUFHQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUN4RkEsQ0FBQ0E7SUFFRGxDLDJGQUEyRkE7SUFFM0ZBLHdEQUF3REE7SUFDaERBLHlDQUFxQkEsR0FBN0JBLFVBQThCQSxLQUFlQSxFQUFFQSxPQUFjQTtRQUc1RG1DLElBQUlBLFVBQVVBLEdBQVVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7UUFDaEVBLElBQUlBLFlBQTZCQSxDQUFDQTtRQUNsQ0EsSUFBSUEsS0FBS0EsR0FBaUJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEVBQUNBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUNBLENBQUNBLENBQUNBO1FBRXpaQSxJQUFJQSxRQUFlQSxDQUFDQTtRQUNwQkEsSUFBSUEsYUFBd0JBLENBQUFBO1FBQzVCQSxNQUFNQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtZQVVwQkEsS0FBS0EsSUFBSUE7Z0JBQ1JBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzQkEsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0VBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsNENBQTRDQSxHQUFHQSxRQUFRQSxHQUFHQSx5REFBeURBLENBQUNBLENBQUNBO29CQUNwSkEsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFDREEsWUFBWUEsR0FBR0EsSUFBSUEsZ0JBQWdCQSxDQUFvQkEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pFQSxLQUFLQSxDQUFDQTtZQUNQQSxLQUFLQSxJQUFJQTtnQkFFUkEsWUFBWUEsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFvQkEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFDQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLFlBQWFBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUN0RUEsS0FBS0EsQ0FBQ0E7WUFFUEEsS0FBS0EsSUFBSUE7Z0JBR1JBLFlBQVlBLEdBQUdBLElBQUlBLG9CQUFvQkEsQ0FBb0JBLEtBQUtBLEVBQVdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0RUEsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxZQUFhQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDOUNBLFlBQWFBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUVoRUEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsSUFBSUE7Z0JBRVJBLFlBQVlBLEdBQUdBLElBQUlBLGdCQUFnQkEsQ0FBb0JBLEtBQUtBLEVBQVdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0RUEsWUFBYUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxZQUFhQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDOUNBLFlBQWFBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUU1REEsS0FBS0EsQ0FBQ0E7WUFDUEEsS0FBS0EsSUFBSUE7Z0JBQ1JBLFlBQVlBLEdBQUdBLElBQUlBLGdCQUFnQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZCQSxZQUFhQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLFlBQWFBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNsRUEsS0FBS0EsQ0FBQ0E7UUFFUkEsQ0FBQ0E7UUFDREEsSUFB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LENBQUNBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO1FBQy9kQSxJQUFJQSxRQUFlQSxDQUFDQTtRQUNwQkEsSUFBSUEsYUFBd0JBLENBQUNBO1FBRTdCQSxNQUFNQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUVwQkEsS0FBS0EsR0FBR0E7Z0JBQ1BBLGtCQUFrQkEsR0FBR0EsSUFBSUEsdUJBQXVCQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeElBLEtBQUtBLENBQUNBO1lBQ1BBLEtBQUtBLEdBQUdBO2dCQUNQQSxrQkFBa0JBLEdBQUdBLElBQUlBLDBCQUEwQkEsRUFBRUEsQ0FBQ0E7Z0JBQ3REQSxJQUFJQSxNQUFNQSxHQUFtQkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxrQkFBbUJBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3UEEsS0FB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QUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBQ3JEQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO1FBRXJEQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxpQkFBaUJBLEVBQUVBLEVBQUVBLGtCQUFrQkE7UUFFOURBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBRXZEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4REEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDNURBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3pEQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM1REEsQ0FBQ0E7UUFFREEsQUFHQUEscUZBSHFGQTtRQUVyRkEsNkJBQTZCQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFFcENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUNyQ0EsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFFdkNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBO1lBQzFCQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUN4Q0EsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFFdENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pCQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUN2Q0EsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxFQUFFQSxjQUFjQTtRQUVyRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDhCQUE4QkEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtDQUFrQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsaUJBQWlCQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSx3QkFBd0JBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLDBCQUEwQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsNEJBQTRCQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtRQUNuUUEsQ0FBQ0E7UUFFREEsQUFDQUEsdUJBRHVCQTtRQUN2QkEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7UUFDNUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLFFBQVFBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeEVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLHdEQUF3REEsQ0FBQ0EsQ0FBQ0E7UUFDL0VBLENBQUNBO0lBRUZBLENBQUNBO0lBQ0Q5QyxxQkFBcUJBO0lBQ2JBLDJDQUF1QkEsR0FBL0JBLFVBQWdDQSxNQUFNQSxDQUFRQSxRQUFEQSxBQUFTQTtRQUVyRCtDLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLFlBQVlBLElBQUlBLENBQUNBO1lBQzdDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNyQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EscUJBQXFCQSxDQUFDQTtZQUM5Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EscUJBQXFCQSxDQUFDQTtRQUNuREEsSUFBSUEsUUFBUUEsR0FBd0JBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUtBLENBQUNBO1FBQy9EQSxJQUFJQSxNQUFNQSxHQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLElBQUlBLEVBQWdCQSxDQUFDQTtRQUNyQkEsSUFBSUEsT0FBT0EsQ0FBUUEsUUFBREEsQUFBU0EsQ0FBQ0E7UUFDNUJBLElBQUlBLEtBQUtBLENBQVFBLFFBQURBLEFBQVNBLENBQUNBO1FBQzFCQSxJQUFJQSxTQUFTQSxDQUFRQSxRQUFEQSxBQUFTQSxDQUFDQTtRQUM5QkEsSUFBSUEsQ0FBQ0EsQ0FBUUEsT0FBREEsQUFBUUEsQ0FBQ0E7UUFDckJBLElBQUlBLE1BQW9CQSxDQUFDQTtRQUN6QkEsSUFBSUEsUUFBNEJBLENBQUNBO1FBQ2pDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxxQkFBcUJBLEdBQUdBLElBQUlBLEtBQUtBLEVBQWlCQSxDQUFDQTtRQUN4RUEsT0FBT0EsTUFBTUEsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7WUFDL0NBLE1BQU1BLEdBQUdBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO1lBQzdCQSxRQUFRQSxHQUF5QkEsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDaEVBLFNBQVNBLEdBQUdBLFFBQVFBLENBQUNBLFdBQVdBLENBQUNBO1lBQ2pDQSxFQUFFQSxHQUFHQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQTtZQUNsQkEsT0FBT0EsR0FBR0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUMxREEsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUN4REEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsU0FBU0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQ2hDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxHQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdkNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLEdBQUNBLE9BQU9BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hDQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxxQkFBcUJBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ3hEQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUNWQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxxQkFBcUJBLENBQUNBO0lBQ25EQSxDQUFDQTtJQUVPL0MsK0JBQVdBLEdBQW5CQTtRQUdDZ0QsSUFBSUEsR0FBR0EsR0FBVUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtRQUN6REEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDOUNBLENBQUNBO0lBRU9oRCxnQ0FBWUEsR0FBcEJBLFVBQXFCQSxPQUFjQSxFQUFFQSxlQUE2QkEsRUFBRUEsYUFBc0NBO1FBQXRDaUQsNkJBQXNDQSxHQUF0Q0EsK0JBQXNDQTtRQUV6R0EsSUFBSUEsV0FBV0EsR0FBY0EsSUFBSUEsS0FBS0EsRUFBT0EsQ0FBQ0E7UUFDOUNBLElBQUlBLE9BQU9BLEdBQVVBLENBQUNBLENBQUNBO1FBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDaENBLE9BQU9BLE9BQU9BLEdBQUdBLGVBQWVBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO3dCQUV6Q0EsSUFBSUEsTUFBTUEsR0FBbUJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBO3dCQUV4REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsSUFBSUEsZUFBZUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2xEQSxBQUNBQSxrQ0FEa0NBOzRCQUNsQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsSUFBSUEsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0NBQ3pGQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxZQUFZQSxnQkFBZ0JBLENBQUNBLENBQUNBLENBQUNBO29DQUM1REEsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0NBQ3ZCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDN0NBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO2dDQUNwQkEsQ0FBQ0E7NEJBQ0ZBLENBQUNBOzRCQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxlQUFlQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxJQUFJQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDM0ZBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLFlBQVlBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO29DQUN4REEsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0NBQ3ZCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDN0NBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO2dDQUNwQkEsQ0FBQ0E7NEJBQ0ZBLENBQUNBOzRCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDUEEsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NBQ3ZCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDN0NBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBOzRCQUVwQkEsQ0FBQ0E7d0JBQ0ZBLENBQUNBO3dCQUNEQSxBQUNBQSx3SEFEd0hBO3dCQUN4SEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsSUFBSUEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBRTlGQSxJQUFJQSxJQUFJQSxHQUFlQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFBQTs0QkFFakRBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBOzRCQUN2QkEsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7NEJBQ2hDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTt3QkFFcEJBLENBQUNBO3dCQUVEQSxPQUFPQSxFQUFFQSxDQUFDQTtvQkFDWEEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBO1lBQ0ZBLENBQUNBO1FBQ0ZBLENBQUNBO1FBQ0RBLEFBQ0FBLDBHQUQwR0E7UUFDMUdBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3hCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMxRUEsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDcEJBLENBQUNBO0lBQ09qRCxtQ0FBZUEsR0FBdkJBLFVBQXdCQSxTQUFnQkEsRUFBRUEsYUFBb0JBO1FBRTdEa0QsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDZEEsS0FBS0EsQ0FBQ0EsU0FBU0EsSUFBSUEsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQ3BDQSxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxJQUFJQSxhQUFhQSxDQUFDQTtvQkFDbENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsRUFBRUEsQ0FBQ0E7Z0JBQ3JDQSxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxJQUFJQSxlQUFlQSxDQUFDQTtvQkFDcENBLE1BQU1BLENBQUNBLHNCQUFzQkEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtnQkFDbkRBLEtBQUtBLENBQUNBO1lBQ1BBLEtBQUtBLENBQUNBLFNBQVNBLElBQUlBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBO2dCQUNyQ0EsTUFBTUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxrQkFBa0JBLEVBQUVBLENBQUNBO2dCQUNuREEsS0FBS0EsQ0FBQ0E7WUFDUEE7Z0JBQ0NBLEtBQUtBLENBQUNBO1FBQ1JBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2JBLENBQUNBO0lBRU9sRCx5Q0FBcUJBLEdBQTdCQTtRQUVDbUQsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMvQkEsSUFBSUEsYUFBYUEsR0FBY0Esc0JBQXNCQSxDQUFDQSx5QkFBeUJBLEVBQUVBLENBQUNBO1lBRWxGQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEdBQUdBLElBQUlBLGlCQUFpQkEsQ0FBQ0EsYUFBYUEsRUFBRUEsYUFBYUEsRUFBRUEsYUFBYUEsRUFBRUEsYUFBYUEsRUFBRUEsYUFBYUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7WUFDM0lBLElBQUlBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsR0FBR0Esb0JBQW9CQSxDQUFDQTtRQUN0REEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBVUEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQTtJQUMxQ0EsQ0FBQ0E7SUFFT25ELDhCQUFVQSxHQUFsQkEsVUFBbUJBLFNBQXlCQTtRQUF6Qm9ELHlCQUF5QkEsR0FBekJBLGlCQUF5QkE7UUFFM0NBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBO1lBQ2JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1FBQ3pDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtJQUV4Q0EsQ0FBQ0E7SUFFT3BELGlDQUFhQSxHQUFyQkE7UUFFQ3FELE1BQU1BLENBQUNBLElBQUlBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLG9CQUFvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDbERBLENBQUNBO0lBRU9yRCx3Q0FBb0JBLEdBQTVCQTtRQUVDc0QsSUFBSUEsQ0FBUUEsQ0FBQ0E7UUFDYkEsSUFBSUEsT0FBT0EsR0FBaUJBLElBQUlBLEtBQUtBLENBQVNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2pEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUN4QkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDOUNBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUVPdEQsd0NBQW9CQSxHQUE1QkE7UUFFQ3VELElBQUlBLE9BQU9BLEdBQWlCQSxJQUFJQSxLQUFLQSxDQUFTQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUVsREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDakJBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ25EQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ2pCQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNuREEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3BEQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNsQkEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFDcERBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQ3BEQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtRQUNwREEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFFbEJBLEFBRUFBLDBFQUYwRUE7UUFFMUVBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNmQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNoQkEsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2hCQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVqQkEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBanpHYXZELDhCQUFvQkEsR0FBVUEsTUFBTUEsQ0FBQ0E7SUFDckNBLHNCQUFZQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUN4QkEsaUJBQU9BLEdBQVVBLENBQUNBLENBQUNBO0lBQ25CQSxjQUFJQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNoQkEsY0FBSUEsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDaEJBLGVBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxlQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsZUFBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDakJBLGdCQUFNQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNsQkEsZ0JBQU1BLEdBQVVBLENBQUNBLENBQUNBO0lBQ2xCQSxpQkFBT0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDbkJBLGlCQUFPQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNuQkEsY0FBSUEsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDakJBLGVBQUtBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ2xCQSxlQUFLQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNsQkEsbUJBQVNBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ3RCQSxzQkFBWUEsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDekJBLG1CQUFTQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUN0QkEsbUJBQVNBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ3RCQSxtQkFBU0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDdEJBLGdCQUFNQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNuQkEsZ0JBQU1BLEdBQVVBLEVBQUVBLENBQUNBO0lBQ25CQSxnQkFBTUEsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDbkJBLGdCQUFNQSxHQUFVQSxFQUFFQSxDQUFDQTtJQTR4R2xDQSxnQkFBQ0E7QUFBREEsQ0E5MEdBLEFBODBHQ0EsRUE5MEd1QixVQUFVLEVBODBHakM7QUFJRCxJQUFNLFFBQVE7SUFZYndELFNBWktBLFFBQVFBO0lBY2JDLENBQUNBO0lBRU1ELDBCQUFPQSxHQUFkQTtRQUdDRSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNmQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNsQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDMUJBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFFbkNBLENBQUNBO0lBRU1GLDJCQUFRQSxHQUFmQSxVQUFnQkEsUUFBZUE7UUFFOUJHLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQTtRQUUxQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBQ0ZILGVBQUNBO0FBQURBLENBakNBLEFBaUNDQSxJQUFBO0FBRUQsSUFBTSxhQUFhO0lBQW5CSSxTQUFNQSxhQUFhQTtJQWVuQkMsQ0FBQ0E7SUFiT0QsMkJBQUdBLEdBQVZBLFVBQVdBLEdBQVVBLEVBQUVBLEtBQVNBO1FBRS9CRSxJQUFJQSxDQUFFQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFFQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFTUYsMkJBQUdBLEdBQVZBLFVBQVdBLEdBQVVBLEVBQUVBLFFBQVlBO1FBRWxDRyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO1FBQ2pCQSxDQUFDQTtJQUNGQSxDQUFDQTtJQUNGSCxvQkFBQ0E7QUFBREEsQ0FmQSxBQWVDQSxJQUFBO0FBRUQsQUFHQTs7R0FERztJQUNHLFFBQVE7SUFBZEksU0FBTUEsUUFBUUE7SUF1QmRDLENBQUNBO0lBSmNELGFBQUlBLEdBQWxCQSxVQUFtQkEsS0FBWUEsRUFBRUEsUUFBZUE7UUFFL0NFLE1BQU1BLENBQUNBLENBQUNBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLFFBQVFBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQXBCYUYsY0FBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDakJBLGNBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ2pCQSxjQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtJQUNqQkEsY0FBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDakJBLGNBQUtBLEdBQVVBLEVBQUVBLENBQUNBO0lBQ2xCQSxjQUFLQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUNsQkEsY0FBS0EsR0FBVUEsRUFBRUEsQ0FBQ0E7SUFDbEJBLGNBQUtBLEdBQVVBLEdBQUdBLENBQUNBO0lBQ25CQSxjQUFLQSxHQUFVQSxHQUFHQSxDQUFDQTtJQUNuQkEsZUFBTUEsR0FBVUEsR0FBR0EsQ0FBQ0E7SUFDcEJBLGVBQU1BLEdBQVVBLElBQUlBLENBQUNBO0lBQ3JCQSxlQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUNyQkEsZUFBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFDckJBLGVBQU1BLEdBQVVBLElBQUlBLENBQUNBO0lBQ3JCQSxlQUFNQSxHQUFVQSxLQUFLQSxDQUFDQTtJQUN0QkEsZUFBTUEsR0FBVUEsS0FBS0EsQ0FBQ0E7SUFNckNBLGVBQUNBO0FBQURBLENBdkJBLEFBdUJDQSxJQUFBO0FBaEZELGlCQUFTLFNBQVMsQ0FBQyIsImZpbGUiOiJBV0RQYXJzZXIuanMiLCJzb3VyY2VSb290IjoiLi4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpdG1hcERhdGFcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZGF0YS9CaXRtYXBEYXRhXCIpO1xuaW1wb3J0IEJsZW5kTW9kZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9kYXRhL0JsZW5kTW9kZVwiKTtcbmltcG9ydCBHZW9tZXRyeVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvR2VvbWV0cnlcIik7XG5pbXBvcnQgU3ViR2VvbWV0cnlCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9kYXRhL1N1Ykdlb21ldHJ5QmFzZVwiKTtcbmltcG9ydCBDdXJ2ZVN1Ykdlb21ldHJ5XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9kYXRhL0N1cnZlU3ViR2VvbWV0cnlcIik7XG5pbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcbmltcG9ydCBDb2xvclRyYW5zZm9ybVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9Db2xvclRyYW5zZm9ybVwiKTtcbmltcG9ydCBNYXRyaXgzRFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vTWF0cml4M0RcIik7XG5pbXBvcnQgVmVjdG9yM0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1ZlY3RvcjNEXCIpO1xuaW1wb3J0IFVSTExvYWRlckRhdGFGb3JtYXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyRGF0YUZvcm1hdFwiKTtcbmltcG9ydCBVUkxSZXF1ZXN0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCIpO1xuaW1wb3J0IEFzc2V0VHlwZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0Fzc2V0VHlwZVwiKTtcbmltcG9ydCBJQXNzZXRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0lBc3NldFwiKTtcbmltcG9ydCBQYXJzZXJCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUGFyc2VyQmFzZVwiKTtcbmltcG9ydCBQYXJzZXJVdGlsc1x0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlclV0aWxzXCIpO1xuaW1wb3J0IFJlc291cmNlRGVwZW5kZW5jeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUmVzb3VyY2VEZXBlbmRlbmN5XCIpO1xuaW1wb3J0IFByb2plY3Rpb25CYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wcm9qZWN0aW9ucy9Qcm9qZWN0aW9uQmFzZVwiKTtcbmltcG9ydCBQZXJzcGVjdGl2ZVByb2plY3Rpb25cdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvUGVyc3BlY3RpdmVQcm9qZWN0aW9uXCIpO1xuaW1wb3J0IE9ydGhvZ3JhcGhpY1Byb2plY3Rpb25cdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvT3J0aG9ncmFwaGljUHJvamVjdGlvblwiKTtcbmltcG9ydCBPcnRob2dyYXBoaWNPZmZDZW50ZXJQcm9qZWN0aW9uXHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvT3J0aG9ncmFwaGljT2ZmQ2VudGVyUHJvamVjdGlvblwiKTtcbmltcG9ydCBCaXRtYXBDdWJlVGV4dHVyZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0JpdG1hcEN1YmVUZXh0dXJlXCIpO1xuaW1wb3J0IEJpdG1hcFRleHR1cmVcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0JpdG1hcFRleHR1cmVcIik7XG5pbXBvcnQgQ3ViZVRleHR1cmVCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9DdWJlVGV4dHVyZUJhc2VcIik7XG5pbXBvcnQgSW1hZ2VDdWJlVGV4dHVyZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvSW1hZ2VDdWJlVGV4dHVyZVwiKTtcbmltcG9ydCBJbWFnZVRleHR1cmVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvSW1hZ2VUZXh0dXJlXCIpO1xuaW1wb3J0IFRleHR1cmUyREJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL1RleHR1cmUyREJhc2VcIik7XG5pbXBvcnQgVGV4dHVyZVByb3h5QmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZVByb3h5QmFzZVwiKTtcbmltcG9ydCBCeXRlQXJyYXlcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvQnl0ZUFycmF5XCIpO1xuXG5pbXBvcnQgRGlzcGxheU9iamVjdENvbnRhaW5lclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9jb250YWluZXJzL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XG5pbXBvcnQgRGlzcGxheU9iamVjdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvYmFzZS9EaXNwbGF5T2JqZWN0XCIpO1xuaW1wb3J0IExpZ2h0QmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9iYXNlL0xpZ2h0QmFzZVwiKTtcbmltcG9ydCBEaXJlY3Rpb25hbExpZ2h0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9EaXJlY3Rpb25hbExpZ2h0XCIpO1xuaW1wb3J0IFBvaW50TGlnaHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvUG9pbnRMaWdodFwiKTtcbmltcG9ydCBDYW1lcmFcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9DYW1lcmFcIik7XG5pbXBvcnQgTWVzaFx0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvTWVzaFwiKTtcbmltcG9ydCBUZXh0RmllbGRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvVGV4dEZpZWxkXCIpO1xuaW1wb3J0IEJpbGxib2FyZFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9CaWxsYm9hcmRcIik7XG5pbXBvcnQgU2t5Ym94XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvU2t5Ym94XCIpO1xuaW1wb3J0IE1hdGVyaWFsQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvTWF0ZXJpYWxCYXNlXCIpO1xuaW1wb3J0IExpZ2h0UGlja2VyQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL2xpZ2h0cGlja2Vycy9MaWdodFBpY2tlckJhc2VcIik7XG5pbXBvcnQgU3RhdGljTGlnaHRQaWNrZXJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvbGlnaHRwaWNrZXJzL1N0YXRpY0xpZ2h0UGlja2VyXCIpO1xuaW1wb3J0IEN1YmVNYXBTaGFkb3dNYXBwZXJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvc2hhZG93bWFwcGVycy9DdWJlTWFwU2hhZG93TWFwcGVyXCIpO1xuaW1wb3J0IERpcmVjdGlvbmFsU2hhZG93TWFwcGVyXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL0RpcmVjdGlvbmFsU2hhZG93TWFwcGVyXCIpO1xuaW1wb3J0IFNoYWRvd01hcHBlckJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9zaGFkb3dtYXBwZXJzL1NoYWRvd01hcHBlckJhc2VcIik7XG5pbXBvcnQgUHJlZmFiQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByZWZhYkJhc2VcIik7XG5pbXBvcnQgUHJpbWl0aXZlQ2Fwc3VsZVByZWZhYlx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZUNhcHN1bGVQcmVmYWJcIik7XG5pbXBvcnQgUHJpbWl0aXZlQ29uZVByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ29uZVByZWZhYlwiKTtcbmltcG9ydCBQcmltaXRpdmVDdWJlUHJlZmFiXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVDdWJlUHJlZmFiXCIpO1xuaW1wb3J0IFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWJcIik7XG5pbXBvcnQgUHJpbWl0aXZlUGxhbmVQcmVmYWJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVBsYW5lUHJlZmFiXCIpO1xuaW1wb3J0IFByaW1pdGl2ZVNwaGVyZVByZWZhYlx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVNwaGVyZVByZWZhYlwiKTtcbmltcG9ydCBQcmltaXRpdmVUb3J1c1ByZWZhYlx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL3ByZWZhYnMvUHJpbWl0aXZlVG9ydXNQcmVmYWJcIik7XG5cbmltcG9ydCBBbmltYXRpb25TZXRCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvQW5pbWF0aW9uU2V0QmFzZVwiKTtcbmltcG9ydCBBbmltYXRvckJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL0FuaW1hdG9yQmFzZVwiKTtcbmltcG9ydCBWZXJ0ZXhBbmltYXRpb25TZXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvVmVydGV4QW5pbWF0aW9uU2V0XCIpO1xuaW1wb3J0IFZlcnRleEFuaW1hdG9yXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvVmVydGV4QW5pbWF0b3JcIik7XG5pbXBvcnQgU2tlbGV0b25BbmltYXRpb25TZXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvU2tlbGV0b25BbmltYXRpb25TZXRcIik7XG5pbXBvcnQgU2tlbGV0b25BbmltYXRvclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0b3JcIik7XG5pbXBvcnQgSm9pbnRQb3NlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL0pvaW50UG9zZVwiKTtcbmltcG9ydCBTa2VsZXRvblx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL1NrZWxldG9uXCIpO1xuaW1wb3J0IFNrZWxldG9uUG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblBvc2VcIik7XG5pbXBvcnQgU2tlbGV0b25Kb2ludFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvU2tlbGV0b25Kb2ludFwiKTtcbmltcG9ydCBTa2VsZXRvbkNsaXBOb2RlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvbm9kZXMvU2tlbGV0b25DbGlwTm9kZVwiKTtcbmltcG9ydCBWZXJ0ZXhDbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1ZlcnRleENsaXBOb2RlXCIpO1xuaW1wb3J0IERlZmF1bHRNYXRlcmlhbE1hbmFnZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvbWFuYWdlcnMvRGVmYXVsdE1hdGVyaWFsTWFuYWdlclwiKTtcblxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsTW9kZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxNb2RlXCIpO1xuaW1wb3J0IE1ldGhvZE1hdGVyaWFsXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL01ldGhvZE1hdGVyaWFsXCIpO1xuaW1wb3J0IEFtYmllbnRFbnZNYXBNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvQW1iaWVudEVudk1hcE1ldGhvZFwiKTtcbmltcG9ydCBEaWZmdXNlRGVwdGhNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZURlcHRoTWV0aG9kXCIpO1xuaW1wb3J0IERpZmZ1c2VDZWxNZXRob2RcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9EaWZmdXNlQ2VsTWV0aG9kXCIpO1xuaW1wb3J0IERpZmZ1c2VHcmFkaWVudE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUdyYWRpZW50TWV0aG9kXCIpO1xuaW1wb3J0IERpZmZ1c2VMaWdodE1hcE1ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRGlmZnVzZUxpZ2h0TWFwTWV0aG9kXCIpO1xuaW1wb3J0IERpZmZ1c2VXcmFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0RpZmZ1c2VXcmFwTWV0aG9kXCIpO1xuaW1wb3J0IEVmZmVjdEFscGhhTWFza01ldGhvZFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0QWxwaGFNYXNrTWV0aG9kXCIpO1xuaW1wb3J0IEVmZmVjdENvbG9yTWF0cml4TWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RDb2xvck1hdHJpeE1ldGhvZFwiKTtcbmltcG9ydCBFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdENvbG9yVHJhbnNmb3JtTWV0aG9kXCIpO1xuaW1wb3J0IEVmZmVjdEVudk1hcE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RFbnZNYXBNZXRob2RcIik7XG5pbXBvcnQgRWZmZWN0Rm9nTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvRWZmZWN0Rm9nTWV0aG9kXCIpO1xuaW1wb3J0IEVmZmVjdEZyZXNuZWxFbnZNYXBNZXRob2RcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RGcmVzbmVsRW52TWFwTWV0aG9kXCIpO1xuaW1wb3J0IEVmZmVjdExpZ2h0TWFwTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdExpZ2h0TWFwTWV0aG9kXCIpO1xuaW1wb3J0IEVmZmVjdE1ldGhvZEJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9FZmZlY3RNZXRob2RCYXNlXCIpO1xuaW1wb3J0IEVmZmVjdFJpbUxpZ2h0TWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL0VmZmVjdFJpbUxpZ2h0TWV0aG9kXCIpO1xuaW1wb3J0IE5vcm1hbFNpbXBsZVdhdGVyTWV0aG9kXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9Ob3JtYWxTaW1wbGVXYXRlck1ldGhvZFwiKTtcbmltcG9ydCBTaGFkb3dEaXRoZXJlZE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dEaXRoZXJlZE1ldGhvZFwiKTtcbmltcG9ydCBTaGFkb3dGaWx0ZXJlZE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TaGFkb3dGaWx0ZXJlZE1ldGhvZFwiKTtcbmltcG9ydCBTaGFkb3dNZXRob2RCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93TWV0aG9kQmFzZVwiKTtcbmltcG9ydCBTcGVjdWxhckZyZXNuZWxNZXRob2RcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyRnJlc25lbE1ldGhvZFwiKTtcbmltcG9ydCBTaGFkb3dIYXJkTWV0aG9kXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU2hhZG93SGFyZE1ldGhvZFwiKTtcbmltcG9ydCBTcGVjdWxhckFuaXNvdHJvcGljTWV0aG9kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZFwiKTtcbmltcG9ydCBTcGVjdWxhckNlbE1ldGhvZFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvbWV0aG9kcy9TcGVjdWxhckNlbE1ldGhvZFwiKTtcbmltcG9ydCBTcGVjdWxhclBob25nTWV0aG9kXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NwZWN1bGFyUGhvbmdNZXRob2RcIik7XG5pbXBvcnQgU2hhZG93TmVhck1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd05lYXJNZXRob2RcIik7XG5pbXBvcnQgU2hhZG93U29mdE1ldGhvZFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9tZXRob2RzL1NoYWRvd1NvZnRNZXRob2RcIik7XG5cbmltcG9ydCBDdXJ2ZU1hdGVyaWFsXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvQ3VydmVNYXRlcmlhbFwiKVxuaW1wb3J0IEJhc2ljTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9CYXNpY01hdGVyaWFsXCIpO1xuXG5pbXBvcnQgVGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSBcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL2ZhY3Rvcmllcy9UaW1lbGluZVNjZW5lR3JhcGhGYWN0b3J5XCIpO1xuaW1wb3J0IEFTMlNjZW5lR3JhcGhGYWN0b3J5IFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9mYWN0b3JpZXMvQVMyU2NlbmVHcmFwaEZhY3RvcnlcIik7XG5pbXBvcnQgTW92aWVDbGlwIFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi9kaXNwbGF5L01vdmllQ2xpcFwiKTtcbmltcG9ydCBUaW1lbGluZUtleUZyYW1lIFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL3RpbWVsaW5lL1RpbWVsaW5lS2V5RnJhbWVcIik7XG5pbXBvcnQgQWRkQ2hpbGRDb21tYW5kIFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvdGltZWxpbmUvY29tbWFuZHMvQWRkQ2hpbGRDb21tYW5kXCIpO1xuaW1wb3J0IFVwZGF0ZVByb3BlcnR5Q29tbWFuZCBcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBsYXllci9saWIvdGltZWxpbmUvY29tbWFuZHMvVXBkYXRlUHJvcGVydHlDb21tYW5kXCIpO1xuaW1wb3J0IFJlbW92ZUNoaWxkQ29tbWFuZCBcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGxheWVyL2xpYi90aW1lbGluZS9jb21tYW5kcy9SZW1vdmVDaGlsZENvbW1hbmRcIik7XG5pbXBvcnQgQXBwbHlBUzJEZXB0aHNDb21tYW5kXHRcdD0gcmVxdWlyZShcImF3YXlqcy1wbGF5ZXIvbGliL3RpbWVsaW5lL2NvbW1hbmRzL0FwcGx5QVMyRGVwdGhzQ29tbWFuZFwiKTtcblxuaW1wb3J0IEZvbnRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi90ZXh0L0ZvbnRcIik7XG5pbXBvcnQgVGVzc2VsYXRlZEZvbnRUYWJsZVx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi90ZXh0L1Rlc3NlbGF0ZWRGb250VGFibGVcIik7XG5pbXBvcnQgVGV4dEZvcm1hdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi90ZXh0L1RleHRGb3JtYXRcIik7XG4vKipcbiAqIEFXRFBhcnNlciBwcm92aWRlcyBhIHBhcnNlciBmb3IgdGhlIEFXRCBkYXRhIHR5cGUuXG4gKi9cbmNsYXNzIEFXRFBhcnNlciBleHRlbmRzIFBhcnNlckJhc2Vcbntcblx0Ly9zZXQgdG8gXCJ0cnVlXCIgdG8gaGF2ZSBzb21lIGNvbnNvbGUubG9ncyBpbiB0aGUgQ29uc29sZVxuXHRwcml2YXRlIF9kZWJ1Zzpib29sZWFuID0gdHJ1ZTtcblx0cHJpdmF0ZSBfYnl0ZURhdGE6Qnl0ZUFycmF5O1xuXHRwcml2YXRlIF9zdGFydGVkUGFyc2luZzpib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2N1cl9ibG9ja19pZDpudW1iZXI7XG5cdHByaXZhdGUgX2Jsb2NrczpBcnJheTxBV0RCbG9jaz47XG5cdHByaXZhdGUgX25ld0Jsb2NrQnl0ZXM6Qnl0ZUFycmF5O1xuXHRwcml2YXRlIF92ZXJzaW9uOkFycmF5PG51bWJlcj47XG5cdHByaXZhdGUgX2NvbXByZXNzaW9uOm51bWJlcjtcblx0cHJpdmF0ZSBfYWNjdXJhY3lPbkJsb2Nrczpib29sZWFuO1xuXHRwcml2YXRlIF9hY2N1cmFjeU1hdHJpeDpib29sZWFuO1xuXHRwcml2YXRlIF9hY2N1cmFjeUdlbzpib29sZWFuO1xuXHRwcml2YXRlIF9hY2N1cmFjeVByb3BzOmJvb2xlYW47XG5cdHByaXZhdGUgX21hdHJpeE5yVHlwZTpudW1iZXI7XG5cdHByaXZhdGUgX2dlb05yVHlwZTpudW1iZXI7XG5cdHByaXZhdGUgX3Byb3BzTnJUeXBlOm51bWJlcjtcblx0cHJpdmF0ZSBfc3RyZWFtaW5nOmJvb2xlYW47XG5cdHByaXZhdGUgX3RleHR1cmVfdXNlcnM6T2JqZWN0ID0ge307XG5cdHByaXZhdGUgX3BhcnNlZF9oZWFkZXI6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9ib2R5OkJ5dGVBcnJheTtcblx0cHJpdmF0ZSBfZGVmYXVsdFRleHR1cmU6Qml0bWFwVGV4dHVyZTsgICAgIC8vIEhUTUwgSU1BR0UgVEVYVFVSRSA+PyAhXG5cdHByaXZhdGUgX2N1YmVUZXh0dXJlczpBcnJheTxhbnk+O1xuXHRwcml2YXRlIF9kZWZhdWx0Qml0bWFwTWF0ZXJpYWw6TWV0aG9kTWF0ZXJpYWw7XG5cdHByaXZhdGUgX2RlZmF1bHRDdWJlVGV4dHVyZTpCaXRtYXBDdWJlVGV4dHVyZTtcblxuXHRwdWJsaWMgc3RhdGljIENPTVBSRVNTSU9OTU9ERV9MWk1BOnN0cmluZyA9IFwibHptYVwiO1xuXHRwdWJsaWMgc3RhdGljIFVOQ09NUFJFU1NFRDpudW1iZXIgPSAwO1xuXHRwdWJsaWMgc3RhdGljIERFRkxBVEU6bnVtYmVyID0gMTtcblx0cHVibGljIHN0YXRpYyBMWk1BOm51bWJlciA9IDI7XG5cdHB1YmxpYyBzdGF0aWMgSU5UODpudW1iZXIgPSAxO1xuXHRwdWJsaWMgc3RhdGljIElOVDE2Om51bWJlciA9IDI7XG5cdHB1YmxpYyBzdGF0aWMgSU5UMzI6bnVtYmVyID0gMztcblx0cHVibGljIHN0YXRpYyBVSU5UODpudW1iZXIgPSA0O1xuXHRwdWJsaWMgc3RhdGljIFVJTlQxNjpudW1iZXIgPSA1O1xuXHRwdWJsaWMgc3RhdGljIFVJTlQzMjpudW1iZXIgPSA2O1xuXHRwdWJsaWMgc3RhdGljIEZMT0FUMzI6bnVtYmVyID0gNztcblx0cHVibGljIHN0YXRpYyBGTE9BVDY0Om51bWJlciA9IDg7XG5cdHB1YmxpYyBzdGF0aWMgQk9PTDpudW1iZXIgPSAyMTtcblx0cHVibGljIHN0YXRpYyBDT0xPUjpudW1iZXIgPSAyMjtcblx0cHVibGljIHN0YXRpYyBCQUREUjpudW1iZXIgPSAyMztcblx0cHVibGljIHN0YXRpYyBBV0RTVFJJTkc6bnVtYmVyID0gMzE7XG5cdHB1YmxpYyBzdGF0aWMgQVdEQllURUFSUkFZOm51bWJlciA9IDMyO1xuXHRwdWJsaWMgc3RhdGljIFZFQ1RPUjJ4MTpudW1iZXIgPSA0MTtcblx0cHVibGljIHN0YXRpYyBWRUNUT1IzeDE6bnVtYmVyID0gNDI7XG5cdHB1YmxpYyBzdGF0aWMgVkVDVE9SNHgxOm51bWJlciA9IDQzO1xuXHRwdWJsaWMgc3RhdGljIE1UWDN4MjpudW1iZXIgPSA0NDtcblx0cHVibGljIHN0YXRpYyBNVFgzeDM6bnVtYmVyID0gNDU7XG5cdHB1YmxpYyBzdGF0aWMgTVRYNHgzOm51bWJlciA9IDQ2O1xuXHRwdWJsaWMgc3RhdGljIE1UWDR4NDpudW1iZXIgPSA0NztcblxuXHRwcml2YXRlIGJsZW5kTW9kZURpYzpBcnJheTxzdHJpbmc+O1xuXHRwcml2YXRlIF9kZXB0aFNpemVEaWM6QXJyYXk8bnVtYmVyPjtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBBV0RQYXJzZXIgb2JqZWN0LlxuXHQgKiBAcGFyYW0gdXJpIFRoZSB1cmwgb3IgaWQgb2YgdGhlIGRhdGEgb3IgZmlsZSB0byBiZSBwYXJzZWQuXG5cdCAqIEBwYXJhbSBleHRyYSBUaGUgaG9sZGVyIGZvciBleHRyYSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgcGFyc2VyIG1pZ2h0IG5lZWQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHRzdXBlcihVUkxMb2FkZXJEYXRhRm9ybWF0LkFSUkFZX0JVRkZFUik7XG5cblx0XHR0aGlzLl9ibG9ja3MgPSBuZXcgQXJyYXk8QVdEQmxvY2s+KCk7XG5cdFx0dGhpcy5fYmxvY2tzWzBdID0gbmV3IEFXREJsb2NrKCk7XG5cdFx0dGhpcy5fYmxvY2tzWzBdLmRhdGEgPSBudWxsOyAvLyBaZXJvIGFkZHJlc3MgbWVhbnMgbnVsbCBpbiBBV0RcblxuXHRcdHRoaXMuYmxlbmRNb2RlRGljID0gbmV3IEFycmF5PHN0cmluZz4oKTsgLy8gdXNlZCB0byB0cmFuc2xhdGUgaW50cyB0byBibGVuZE1vZGUtc3RyaW5nc1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLk5PUk1BTCk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuQUREKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5BTFBIQSk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuREFSS0VOKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5ESUZGRVJFTkNFKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5FUkFTRSk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuSEFSRExJR0hUKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5JTlZFUlQpO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLkxBWUVSKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5MSUdIVEVOKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5NVUxUSVBMWSk7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuTk9STUFMKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5PVkVSTEFZKTtcblx0XHR0aGlzLmJsZW5kTW9kZURpYy5wdXNoKEJsZW5kTW9kZS5TQ1JFRU4pO1xuXHRcdHRoaXMuYmxlbmRNb2RlRGljLnB1c2goQmxlbmRNb2RlLlNIQURFUik7XG5cdFx0dGhpcy5ibGVuZE1vZGVEaWMucHVzaChCbGVuZE1vZGUuT1ZFUkxBWSk7XG5cblx0XHR0aGlzLl9kZXB0aFNpemVEaWMgPSBuZXcgQXJyYXk8bnVtYmVyPigpOyAvLyB1c2VkIHRvIHRyYW5zbGF0ZSBpbnRzIHRvIGRlcHRoU2l6ZS12YWx1ZXNcblx0XHR0aGlzLl9kZXB0aFNpemVEaWMucHVzaCgyNTYpO1xuXHRcdHRoaXMuX2RlcHRoU2l6ZURpYy5wdXNoKDUxMik7XG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMjA0OCk7XG5cdFx0dGhpcy5fZGVwdGhTaXplRGljLnB1c2goMTAyNCk7XG5cdFx0dGhpcy5fdmVyc2lvbiA9IEFycmF5PG51bWJlcj4oKTsgLy8gd2lsbCBjb250YWluIDIgaW50IChtYWpvci12ZXJzaW9uLCBtaW5vci12ZXJzaW9uKSBmb3IgYXdkLXZlcnNpb24tY2hlY2tcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgYSBnaXZlbiBmaWxlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYnkgdGhlIHBhcnNlci5cblx0ICogQHBhcmFtIGV4dGVuc2lvbiBUaGUgZmlsZSBleHRlbnNpb24gb2YgYSBwb3RlbnRpYWwgZmlsZSB0byBiZSBwYXJzZWQuXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGZpbGUgdHlwZSBpcyBzdXBwb3J0ZWQuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzVHlwZShleHRlbnNpb246c3RyaW5nKTpib29sZWFuXG5cdHtcblx0XHRleHRlbnNpb24gPSBleHRlbnNpb24udG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gZXh0ZW5zaW9uID09IFwiYXdkXCI7XG5cdH1cblxuXHQvKipcblx0ICogVGVzdHMgd2hldGhlciBhIGRhdGEgYmxvY2sgY2FuIGJlIHBhcnNlZCBieSB0aGUgcGFyc2VyLlxuXHQgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBibG9jayB0byBwb3RlbnRpYWxseSBiZSBwYXJzZWQuXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGRhdGEgaXMgc3VwcG9ydGVkLlxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c0RhdGEoZGF0YTphbnkpOmJvb2xlYW5cblx0e1xuXHRcdHJldHVybiAoUGFyc2VyVXRpbHMudG9TdHJpbmcoZGF0YSwgMykgPT0gJ0FXRCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KVxuXHR7XG5cdFx0Ly8gdGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIERlcGVuZGVuY3kgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG5cdFx0Ly8gdGhlIEFzc2V0cyB3YWl0aW5nIGZvciB0aGlzIEJpdG1hcCwgY2FuIGJlIFRleHR1cmUgb3IgQ3ViZVRleHR1cmUuXG5cdFx0Ly8gaWYgdGhlIEJpdG1hcCBpcyBhd2FpdGVkIGJ5IGEgQ3ViZVRleHR1cmUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgaXRzIHRoZSBsYXN0IEJpdG1hcCBvZiB0aGUgQ3ViZVRleHR1cmUsXG5cdFx0Ly8gc28gd2Uga25vdyBpZiB3ZSBoYXZlIHRvIGZpbmFsaXplIHRoZSBBc3NldCAoQ3ViZVRleHR1cmUpIG9yIG5vdC5cblx0XHRpZiAocmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0cy5sZW5ndGggPT0gMSkge1xuXHRcdFx0dmFyIGlzQ3ViZVRleHR1cmVBcnJheTpBcnJheTxzdHJpbmc+ID0gcmVzb3VyY2VEZXBlbmRlbmN5LmlkLnNwbGl0KFwiI1wiKTtcblx0XHRcdHZhciByZXNzb3VyY2VJRDpzdHJpbmcgPSBpc0N1YmVUZXh0dXJlQXJyYXlbMF07XG5cdFx0XHR2YXIgYXNzZXQ6VGV4dHVyZVByb3h5QmFzZTtcblx0XHRcdHZhciB0aGlzQml0bWFwVGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xuXHRcdFx0dmFyIGJsb2NrOkFXREJsb2NrO1xuXG5cdFx0XHRpZiAoaXNDdWJlVGV4dHVyZUFycmF5Lmxlbmd0aCA9PSAxKSAvLyBOb3QgYSBjdWJlIHRleHR1cmVcblx0XHRcdHtcblx0XHRcdFx0YXNzZXQgPSA8VGV4dHVyZTJEQmFzZT4gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcblx0XHRcdFx0aWYgKGFzc2V0KSB7XG5cdFx0XHRcdFx0dmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcblx0XHRcdFx0XHR2YXIgdXNlcnM6QXJyYXk8c3RyaW5nPjtcblxuXHRcdFx0XHRcdGJsb2NrID0gdGhpcy5fYmxvY2tzWyByZXNvdXJjZURlcGVuZGVuY3kuaWQgXTtcblx0XHRcdFx0XHRibG9jay5kYXRhID0gYXNzZXQ7IC8vIFN0b3JlIGZpbmlzaGVkIGFzc2V0XG5cblx0XHRcdFx0XHQvLyBSZXNldCBuYW1lIG9mIHRleHR1cmUgdG8gdGhlIG9uZSBkZWZpbmVkIGluIHRoZSBBV0QgZmlsZSxcblx0XHRcdFx0XHQvLyBhcyBvcHBvc2VkIHRvIHdoYXRldmVyIHRoZSBpbWFnZSBwYXJzZXIgY2FtZSB1cCB3aXRoLlxuXHRcdFx0XHRcdGFzc2V0LnJlc2V0QXNzZXRQYXRoKGJsb2NrLm5hbWUsIG51bGwsIHRydWUpO1xuXHRcdFx0XHRcdGJsb2NrLm5hbWUgPSBhc3NldC5uYW1lO1xuXHRcdFx0XHRcdC8vIEZpbmFsaXplIHRleHR1cmUgYXNzZXQgdG8gZGlzcGF0Y2ggdGV4dHVyZSBldmVudCwgd2hpY2ggd2FzXG5cdFx0XHRcdFx0Ly8gcHJldmlvdXNseSBzdXBwcmVzc2VkIHdoaWxlIHRoZSBkZXBlbmRlbmN5IHdhcyBsb2FkZWQuXG5cdFx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBsb2FkZWQgQml0bWFwIGZvciB0ZXh0dXJlXCIpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgdGV4dHVyZTogTmFtZSA9IFwiICsgYmxvY2submFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0N1YmVUZXh0dXJlQXJyYXkubGVuZ3RoID4gMSkgLy8gQ3ViZSBUZXh0dXJlXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXNCaXRtYXBUZXh0dXJlID0gPEJpdG1hcFRleHR1cmU+IHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHNbMF07XG5cblx0XHRcdFx0dmFyIHR4OkltYWdlVGV4dHVyZSA9IDxJbWFnZVRleHR1cmU+IHRoaXNCaXRtYXBUZXh0dXJlO1xuXG5cdFx0XHRcdHRoaXMuX2N1YmVUZXh0dXJlc1sgaXNDdWJlVGV4dHVyZUFycmF5WzFdIF0gPSB0eC5odG1sSW1hZ2VFbGVtZW50OyAvLyA/XG5cdFx0XHRcdHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLnB1c2goMSk7XG5cblx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbG9hZGVkIEJpdG1hcCBcIiArIHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLmxlbmd0aCArIFwiIC8gNiBmb3IgQ3ViZXRleHR1cmVcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuX3RleHR1cmVfdXNlcnNbcmVzc291cmNlSURdLmxlbmd0aCA9PSB0aGlzLl9jdWJlVGV4dHVyZXMubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHR2YXIgcG9zWDphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbMF07XG5cdFx0XHRcdFx0dmFyIG5lZ1g6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzFdO1xuXHRcdFx0XHRcdHZhciBwb3NZOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1syXTtcblx0XHRcdFx0XHR2YXIgbmVnWTphbnkgPSB0aGlzLl9jdWJlVGV4dHVyZXNbM107XG5cdFx0XHRcdFx0dmFyIHBvc1o6YW55ID0gdGhpcy5fY3ViZVRleHR1cmVzWzRdO1xuXHRcdFx0XHRcdHZhciBuZWdaOmFueSA9IHRoaXMuX2N1YmVUZXh0dXJlc1s1XTtcblxuXHRcdFx0XHRcdGFzc2V0ID0gPFRleHR1cmVQcm94eUJhc2U+IG5ldyBJbWFnZUN1YmVUZXh0dXJlKHBvc1gsIG5lZ1gsIHBvc1ksIG5lZ1ksIHBvc1osIG5lZ1opO1xuXHRcdFx0XHRcdGJsb2NrID0gdGhpcy5fYmxvY2tzW3Jlc3NvdXJjZUlEXTtcblx0XHRcdFx0XHRibG9jay5kYXRhID0gYXNzZXQ7IC8vIFN0b3JlIGZpbmlzaGVkIGFzc2V0XG5cblx0XHRcdFx0XHQvLyBSZXNldCBuYW1lIG9mIHRleHR1cmUgdG8gdGhlIG9uZSBkZWZpbmVkIGluIHRoZSBBV0QgZmlsZSxcblx0XHRcdFx0XHQvLyBhcyBvcHBvc2VkIHRvIHdoYXRldmVyIHRoZSBpbWFnZSBwYXJzZXIgY2FtZSB1cCB3aXRoLlxuXHRcdFx0XHRcdGFzc2V0LnJlc2V0QXNzZXRQYXRoKGJsb2NrLm5hbWUsIG51bGwsIHRydWUpO1xuXHRcdFx0XHRcdGJsb2NrLm5hbWUgPSBhc3NldC5uYW1lO1xuXHRcdFx0XHRcdC8vIEZpbmFsaXplIHRleHR1cmUgYXNzZXQgdG8gZGlzcGF0Y2ggdGV4dHVyZSBldmVudCwgd2hpY2ggd2FzXG5cdFx0XHRcdFx0Ly8gcHJldmlvdXNseSBzdXBwcmVzc2VkIHdoaWxlIHRoZSBkZXBlbmRlbmN5IHdhcyBsb2FkZWQuXG5cdFx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQpO1xuXHRcdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgQ3ViZVRleHR1cmU6IE5hbWUgPSBcIiArIGJsb2NrLm5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeUZhaWx1cmUocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSlcblx0e1xuXHRcdC8vbm90IHVzZWQgLSBpZiBhIGRlcGVuZGN5IGZhaWxzLCB0aGUgYXdhaXRpbmcgVGV4dHVyZSBvciBDdWJlVGV4dHVyZSB3aWxsIG5ldmVyIGJlIGZpbmFsaXplZCwgYW5kIHRoZSBkZWZhdWx0LWJpdG1hcHMgd2lsbCBiZSB1c2VkLlxuXHRcdC8vIHRoaXMgbWVhbnMsIHRoYXQgaWYgb25lIEJpdG1hcCBvZiBhIEN1YmVUZXh0dXJlIGZhaWxzLCB0aGUgQ3ViZVRleHR1cmUgd2lsbCBoYXZlIHRoZSBEZWZhdWx0VGV4dHVyZSBhcHBsaWVkIGZvciBhbGwgc2l4IEJpdG1hcHMuXG5cdH1cblxuXHQvKipcblx0ICogUmVzb2x2ZSBhIGRlcGVuZGVuY3kgbmFtZVxuXHQgKlxuXHQgKiBAcGFyYW0gcmVzb3VyY2VEZXBlbmRlbmN5IFRoZSBkZXBlbmRlbmN5IHRvIGJlIHJlc29sdmVkLlxuXHQgKi9cblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3lOYW1lKHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3ksIGFzc2V0OklBc3NldCk6c3RyaW5nXG5cdHtcblx0XHR2YXIgb2xkTmFtZTpzdHJpbmcgPSBhc3NldC5uYW1lO1xuXG5cdFx0aWYgKGFzc2V0KSB7XG5cdFx0XHR2YXIgYmxvY2s6QVdEQmxvY2sgPSB0aGlzLl9ibG9ja3NbcGFyc2VJbnQocmVzb3VyY2VEZXBlbmRlbmN5LmlkKV07XG5cdFx0XHQvLyBSZXNldCBuYW1lIG9mIHRleHR1cmUgdG8gdGhlIG9uZSBkZWZpbmVkIGluIHRoZSBBV0QgZmlsZSxcblx0XHRcdC8vIGFzIG9wcG9zZWQgdG8gd2hhdGV2ZXIgdGhlIGltYWdlIHBhcnNlciBjYW1lIHVwIHdpdGguXG5cdFx0XHRhc3NldC5yZXNldEFzc2V0UGF0aChibG9jay5uYW1lLCBudWxsLCB0cnVlKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3TmFtZTpzdHJpbmcgPSBhc3NldC5uYW1lO1xuXG5cdFx0YXNzZXQubmFtZSA9IG9sZE5hbWU7XG5cblx0XHRyZXR1cm4gbmV3TmFtZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRwdWJsaWMgX3BQcm9jZWVkUGFyc2luZygpOmJvb2xlYW5cblx0e1xuXG5cdFx0aWYgKCF0aGlzLl9zdGFydGVkUGFyc2luZykge1xuXHRcdFx0dGhpcy5fYnl0ZURhdGEgPSB0aGlzLl9wR2V0Qnl0ZURhdGEoKTsvL2dldEJ5dGVEYXRhKCk7XG5cdFx0XHR0aGlzLl9zdGFydGVkUGFyc2luZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLl9wYXJzZWRfaGVhZGVyKSB7XG5cblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XHQvL3RoaXMuX2J5dGVEYXRhLmVuZGlhbiA9IEVuZGlhbi5MSVRUTEVfRU5ESUFOO1xuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly8gUGFyc2UgaGVhZGVyIGFuZCBkZWNvbXByZXNzIGJvZHkgaWYgbmVlZGVkXG5cdFx0XHR0aGlzLnBhcnNlSGVhZGVyKCk7XG5cblx0XHRcdHN3aXRjaCAodGhpcy5fY29tcHJlc3Npb24pIHtcblxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5ERUZMQVRFOlxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5MWk1BOlxuXHRcdFx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0NvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQnKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5VTkNPTVBSRVNTRUQ6XG5cdFx0XHRcdFx0dGhpcy5fYm9keSA9IHRoaXMuX2J5dGVEYXRhO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0XHQvLyBDb21wcmVzc2VkIEFXRCBGb3JtYXRzIG5vdCB5ZXQgc3VwcG9ydGVkXG5cdFx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0XHRcdC8qXG5cdFx0XHRcdCBjYXNlIEFXRFBhcnNlci5ERUZMQVRFOlxuXG5cdFx0XHRcdCB0aGlzLl9ib2R5ID0gbmV3IEJ5dGVBcnJheSgpO1xuXHRcdFx0XHQgdGhpcy5fYnl0ZURhdGEucmVhZEJ5dGVzKHRoaXMuX2JvZHksIDAsIHRoaXMuX2J5dGVEYXRhLmdldEJ5dGVzQXZhaWxhYmxlKCkpO1xuXHRcdFx0XHQgdGhpcy5fYm9keS51bmNvbXByZXNzKCk7XG5cblx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHQgY2FzZSBBV0RQYXJzZXIuTFpNQTpcblxuXHRcdFx0XHQgdGhpcy5fYm9keSA9IG5ldyBCeXRlQXJyYXkoKTtcblx0XHRcdFx0IHRoaXMuX2J5dGVEYXRhLnJlYWRCeXRlcyh0aGlzLl9ib2R5LCAwLCB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKTtcblx0XHRcdFx0IHRoaXMuX2JvZHkudW5jb21wcmVzcyhDT01QUkVTU0lPTk1PREVfTFpNQSk7XG5cblx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHQgLy8qL1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3BhcnNlZF9oZWFkZXIgPSB0cnVlO1xuXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vIExJVFRMRV9FTkRJQU4gLSBEZWZhdWx0IGZvciBBcnJheUJ1ZmZlciAvIE5vdCBpbXBsZW1lbnRlZCBpbiBCeXRlQXJyYXlcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly90aGlzLl9ib2R5LmVuZGlhbiA9IEVuZGlhbi5MSVRUTEVfRU5ESUFOOy8vIFNob3VsZCBiZSBkZWZhdWx0XG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9ib2R5KSB7XG5cblx0XHRcdHdoaWxlICh0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCkgPiAwICYmICF0aGlzLnBhcnNpbmdQYXVzZWQpIC8vJiYgdGhpcy5fcEhhc1RpbWUoKSApXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMucGFyc2VOZXh0QmxvY2soKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vIFJldHVybiBjb21wbGV0ZSBzdGF0dXNcblx0XHRcdGlmICh0aGlzLl9ib2R5LmdldEJ5dGVzQXZhaWxhYmxlKCkgPT0gMCkge1xuXHRcdFx0XHR0aGlzLmRpc3Bvc2UoKTtcblx0XHRcdFx0cmV0dXJuICBQYXJzZXJCYXNlLlBBUlNJTkdfRE9ORTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAgUGFyc2VyQmFzZS5NT1JFX1RPX1BBUlNFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHN3aXRjaCAodGhpcy5fY29tcHJlc3Npb24pIHtcblxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5ERUZMQVRFOlxuXHRcdFx0XHRjYXNlIEFXRFBhcnNlci5MWk1BOlxuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIighKSBBV0RQYXJzZXIgRXJyb3I6IENvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQgKCEpXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cdFx0XHQvLyBFcnJvciAtIG1vc3QgbGlrZWx5IF9ib2R5IG5vdCBzZXQgYmVjYXVzZSB3ZSBkbyBub3Qgc3VwcG9ydCBjb21wcmVzc2lvbi5cblx0XHRcdHJldHVybiAgUGFyc2VyQmFzZS5QQVJTSU5HX0RPTkU7XG5cblx0XHR9XG5cblx0fVxuXG5cdHB1YmxpYyBfcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0Om51bWJlcilcblx0e1xuXHRcdHN1cGVyLl9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQpO1xuXG5cdFx0Ly9jcmVhdGUgYSBjb250ZW50IG9iamVjdCBmb3IgTG9hZGVyc1xuXHRcdHRoaXMuX3BDb250ZW50ID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgZGlzcG9zZSgpOnZvaWRcblx0e1xuXG5cdFx0Zm9yICh2YXIgYyBpbiB0aGlzLl9ibG9ja3MpIHtcblxuXHRcdFx0dmFyIGI6QVdEQmxvY2sgPSA8QVdEQmxvY2s+IHRoaXMuX2Jsb2Nrc1sgYyBdO1xuXHRcdFx0Yi5kaXNwb3NlKCk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgcGFyc2VOZXh0QmxvY2soKTp2b2lkXG5cdHtcblx0XHR2YXIgYmxvY2s6QVdEQmxvY2s7XG5cdFx0dmFyIGFzc2V0RGF0YTpJQXNzZXQ7XG5cdFx0dmFyIGlzUGFyc2VkOmJvb2xlYW4gPSBmYWxzZTtcblx0XHR2YXIgbnM6bnVtYmVyO1xuXHRcdHZhciB0eXBlOm51bWJlcjtcblx0XHR2YXIgZmxhZ3M6bnVtYmVyO1xuXHRcdHZhciBsZW46bnVtYmVyO1xuXG5cdFx0dGhpcy5fY3VyX2Jsb2NrX2lkID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRJbnQoKTtcblxuXHRcdG5zID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dHlwZSA9IHRoaXMuX2JvZHkucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdGZsYWdzID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0bGVuID0gdGhpcy5fYm9keS5yZWFkVW5zaWduZWRJbnQoKTtcblxuXHRcdHZhciBibG9ja0NvbXByZXNzaW9uOmJvb2xlYW4gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNCk7XG5cdFx0dmFyIGJsb2NrQ29tcHJlc3Npb25MWk1BOmJvb2xlYW4gPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNSk7XG5cblx0XHRpZiAodGhpcy5fYWNjdXJhY3lPbkJsb2Nrcykge1xuXHRcdFx0dGhpcy5fYWNjdXJhY3lNYXRyaXggPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMSk7XG5cdFx0XHR0aGlzLl9hY2N1cmFjeUdlbyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUcyKTtcblx0XHRcdHRoaXMuX2FjY3VyYWN5UHJvcHMgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMyk7XG5cdFx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcblxuXHRcdFx0aWYgKHRoaXMuX2FjY3VyYWN5R2VvKSB7XG5cdFx0XHRcdHRoaXMuX2dlb05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9tYXRyaXhOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcblxuXHRcdFx0aWYgKHRoaXMuX2FjY3VyYWN5TWF0cml4KSB7XG5cdFx0XHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDMyO1xuXG5cdFx0XHRpZiAodGhpcy5fYWNjdXJhY3lQcm9wcykge1xuXHRcdFx0XHR0aGlzLl9wcm9wc05yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBibG9ja0VuZEFsbDpudW1iZXIgPSB0aGlzLl9ib2R5LnBvc2l0aW9uICsgbGVuO1xuXG5cdFx0aWYgKGxlbiA+IHRoaXMuX2JvZHkuZ2V0Qnl0ZXNBdmFpbGFibGUoKSkge1xuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQVdEMiBibG9jayBsZW5ndGggaXMgYmlnZ2VyIHRoYW4gdGhlIGJ5dGVzIHRoYXQgYXJlIGF2YWlsYWJsZSEnKTtcblx0XHRcdHRoaXMuX2JvZHkucG9zaXRpb24gKz0gdGhpcy5fYm9keS5nZXRCeXRlc0F2YWlsYWJsZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzID0gbmV3IEJ5dGVBcnJheSgpO1xuXG5cblx0XHR0aGlzLl9ib2R5LnJlYWRCeXRlcyh0aGlzLl9uZXdCbG9ja0J5dGVzLCAwLCBsZW4pO1xuXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gQ29tcHJlc3NlZCBBV0QgRm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZFxuXG5cdFx0aWYgKGJsb2NrQ29tcHJlc3Npb24pIHtcblx0XHRcdHRoaXMuX3BEaWVXaXRoRXJyb3IoJ0NvbXByZXNzZWQgQVdEIGZvcm1hdHMgbm90IHlldCBzdXBwb3J0ZWQnKTtcblxuXHRcdFx0Lypcblx0XHRcdCBpZiAoYmxvY2tDb21wcmVzc2lvbkxaTUEpXG5cdFx0XHQge1xuXHRcdFx0IHRoaXMuX25ld0Jsb2NrQnl0ZXMudW5jb21wcmVzcyhBV0RQYXJzZXIuQ09NUFJFU1NJT05NT0RFX0xaTUEpO1xuXHRcdFx0IH1cblx0XHRcdCBlbHNlXG5cdFx0XHQge1xuXHRcdFx0IHRoaXMuX25ld0Jsb2NrQnl0ZXMudW5jb21wcmVzcygpO1xuXHRcdFx0IH1cblx0XHRcdCAqL1xuXG5cdFx0fVxuXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vdGhpcy5fbmV3QmxvY2tCeXRlcy5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjtcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPSAwO1xuXHRcdGJsb2NrID0gbmV3IEFXREJsb2NrKCk7XG5cdFx0YmxvY2subGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxlbjtcblx0XHRibG9jay5pZCA9IHRoaXMuX2N1cl9ibG9ja19pZDtcblxuXHRcdHZhciBibG9ja0VuZEJsb2NrOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBsZW47XG5cblx0XHRpZiAoYmxvY2tDb21wcmVzc2lvbikge1xuXHRcdFx0dGhpcy5fcERpZVdpdGhFcnJvcignQ29tcHJlc3NlZCBBV0QgZm9ybWF0cyBub3QgeWV0IHN1cHBvcnRlZCcpO1xuXHRcdFx0Ly9ibG9ja0VuZEJsb2NrICAgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgdGhpcy5fbmV3QmxvY2tCeXRlcy5sZW5ndGg7XG5cdFx0XHQvL2Jsb2NrLmxlbiAgICAgICA9IGJsb2NrRW5kQmxvY2s7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkFXREJsb2NrOiAgSUQgPSBcIiArIHRoaXMuX2N1cl9ibG9ja19pZCArIFwiIHwgVHlwZUlEID0gXCIgKyB0eXBlICsgXCIgfCBDb21wcmVzc2lvbiA9IFwiICsgYmxvY2tDb21wcmVzc2lvbiArIFwiIHwgTWF0cml4LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lNYXRyaXggKyBcIiB8IEdlb21ldHJ5LVByZWNpc2lvbiA9IFwiICsgdGhpcy5fYWNjdXJhY3lHZW8gKyBcIiB8IFByb3BlcnRpZXMtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeVByb3BzKTtcblx0XHR9XG5cblx0XHR0aGlzLl9ibG9ja3NbdGhpcy5fY3VyX2Jsb2NrX2lkXSA9IGJsb2NrO1xuXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDMpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDApKSB7XG5cdFx0XHQvLyBwcm9iYWJseSBzaG91bGQgY29udGFpbiBzb21lIGluZm8gYWJvdXQgdGhlIHR5cGUgb2YgYW5pbWF0aW9uXG5cdFx0XHR2YXIgZmFjdG9yeSA9IG5ldyBBUzJTY2VuZUdyYXBoRmFjdG9yeSgpO1xuXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAyNDpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaExpYnJhcnlCbG9jayh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAyNTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQmlsbEJvYXJkTGlicmFyeUJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ0OlxuXHRcdFx0XHRcdHRoaXMucGFyc2VBdWRpb0Jsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCwgZmFjdG9yeSk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEzMzpcblx0XHRcdFx0XHR0aGlzLnBhcnNlVGltZUxpbmUodGhpcy5fY3VyX2Jsb2NrX2lkLCBmYWN0b3J5KTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTM0OlxuXHRcdFx0XHRcdHRoaXMucGFyZXNUZXh0RmllbGQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTM1OlxuXHRcdFx0XHRcdHRoaXMucGFyc2VUZXNzZWxhdGVkRm9udCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMzY6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRleHRGb3JtYXQodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA+IDIpfHwoKHRoaXMuX3ZlcnNpb25bMF0gPj0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPj0gMSkpKSB7XG5cblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRjYXNlIDExOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VQcmltaXR2ZXModGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNreWJveEluc3RhbmNlKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VMaWdodCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0Mjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ2FtZXJhKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vICBjYXNlIDQzOlxuXHRcdFx0XHQvLyAgICAgIHBhcnNlVGV4dHVyZVByb2plY3RvcihfY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0Ly8gICAgICBpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdC8vICAgICAgYnJlYWs7XG5cblx0XHRcdFx0Y2FzZSA1MTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTGlnaHRQaWNrZXIodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgODE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1hdGVyaWFsX3YxKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDgzOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VDdWJlVGV4dHVyZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA5MTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2hhcmVkTWV0aG9kQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVNoYWRvd01ldGhvZEJsb2NrKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDExMTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWVzaFBvc2VBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkLCB0cnVlKTtcblx0XHRcdFx0XHRpc1BhcnNlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTEyOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoUG9zZUFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMTM6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVZlcnRleEFuaW1hdGlvblNldCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMjI6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZUFuaW1hdG9yU2V0KHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0aXNQYXJzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI1Mzpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ29tbWFuZCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGlzUGFyc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdC8vKi9cblx0XHR9XG5cdFx0Ly8qXG5cdFx0aWYgKGlzUGFyc2VkID09IGZhbHNlKSB7XG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblxuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRyaWFuZ2xlR2VvbWV0cmllQmxvY2sodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAyMjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ29udGFpbmVyKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMjM6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU1lc2hJbnN0YW5jZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDgxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VNYXRlcmlhbCh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDgyOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VUZXh0dXJlKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTAxOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa2VsZXRvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEwMjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlU2tlbGV0b25Qb3NlKHRoaXMuX2N1cl9ibG9ja19pZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTAzOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VTa2VsZXRvbkFuaW1hdGlvbih0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDEyMTpcblx0XHRcdFx0Ly90aGlzLnBhcnNlVVZBbmltYXRpb24odGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0Ly9icmVhaztcblx0XHRcdFx0Y2FzZSAyNTQ6XG5cdFx0XHRcdFx0dGhpcy5wYXJzZU5hbWVTcGFjZSh0aGlzLl9jdXJfYmxvY2tfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI1NTpcblx0XHRcdFx0XHR0aGlzLnBhcnNlTWV0YURhdGEodGhpcy5fY3VyX2Jsb2NrX2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQVdEQmxvY2s6ICAgVW5rbm93biBCbG9ja1R5cGUgIChCbG9ja0lEID0gXCIgKyB0aGlzLl9jdXJfYmxvY2tfaWQgKyBcIikgLSBTa2lwIFwiICsgbGVuICsgXCIgYnl0ZXNcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKz0gbGVuO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyovXG5cblx0XHR2YXIgbXNnQ250Om51bWJlciA9IDA7XG5cdFx0aWYgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPT0gYmxvY2tFbmRCbG9jaykge1xuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRcdGlmIChibG9jay5lcnJvck1lc3NhZ2VzKSB7XG5cdFx0XHRcdFx0d2hpbGUgKG1zZ0NudCA8IGJsb2NrLmVycm9yTWVzc2FnZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgKCEpIEVycm9yOiBcIiArIGJsb2NrLmVycm9yTWVzc2FnZXNbbXNnQ250XSArIFwiICghKVwiKTtcblx0XHRcdFx0XHRcdG1zZ0NudCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiXFxuXCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5fZGVidWcpIHtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgKCEpKCEpKCEpIEVycm9yIHdoaWxlIHJlYWRpbmcgQVdEQmxvY2sgSUQgXCIgKyB0aGlzLl9jdXJfYmxvY2tfaWQgKyBcIiA9IHNraXAgdG8gbmV4dCBibG9ja1wiKTtcblxuXHRcdFx0XHRpZiAoYmxvY2suZXJyb3JNZXNzYWdlcykge1xuXHRcdFx0XHRcdHdoaWxlIChtc2dDbnQgPCBibG9jay5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICghKSBFcnJvcjogXCIgKyBibG9jay5lcnJvck1lc3NhZ2VzW21zZ0NudF0gKyBcIiAoISlcIik7XG5cdFx0XHRcdFx0XHRtc2dDbnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9ib2R5LnBvc2l0aW9uID0gYmxvY2tFbmRBbGw7XG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcyA9IG51bGw7XG5cblx0fVxuXG5cblx0Ly8tLVBhcnNlciBCbG9ja3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cdHByaXZhdGUgcGFyc2VUZXNzZWxhdGVkRm9udChibG9ja0lEOm51bWJlcik6dm9pZCB7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gbmFtZTtcblx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBuYW1lID0gXCIrdGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUpO1xuXHRcdHZhciBmb250X3N0eWxlX2NudDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdC8vY29uc29sZS5sb2coXCJGb250IGZvbnRfc3R5bGVfY250ID0gXCIrZm9udF9zdHlsZV9jbnQpO1xuXHRcdHZhciBuZXdfZm9udDpGb250PW5ldyBGb250KCk7XG5cdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgZm9udF9zdHlsZV9jbnQ7ICsraSkge1xuXHRcdFx0dmFyIGZvbnRfc3R5bGVfbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBmb250X3N0eWxlX25hbWUgPSBcIitmb250X3N0eWxlX25hbWUpO1xuXHRcdFx0dmFyIG5ld19mb250X3N0eWxlOlRlc3NlbGF0ZWRGb250VGFibGU9bmV3X2ZvbnQuZ2V0X2ZvbnRfdGFibGUoZm9udF9zdHlsZV9uYW1lKTtcblx0XHRcdG5ld19mb250X3N0eWxlLnNldF9mb250X2VtX3NpemUodGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKSk7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBuZXdfZm9udF9zdHlsZS5mb250X2VtX3NpemUgPSBcIituZXdfZm9udF9zdHlsZS5nZXRfZm9udF9lbV9zaXplKTtcblx0XHRcdHZhciBmb250X3N0eWxlX2NoYXJfY250Om51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiRm9udCBmb250X3N0eWxlX2NoYXJfY250ID0gXCIrZm9udF9zdHlsZV9jaGFyX2NudCk7XG5cdFx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBmb250X3N0eWxlX2NoYXJfY250OyArK2kpIHtcblxuXHRcdFx0XHR2YXIgZm9udF9zdHlsZV9jaGFyOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJGb250IGZvbnRfc3R5bGVfY2hhciA9IFwiK2ZvbnRfc3R5bGVfY2hhcik7XG5cdFx0XHRcdC8vIHRvZG86IHRoaXMgaXMgYmFzaWNhbGx5IGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBzdWJnZW9tLXBhcnNpbmcgZG9uZSBpbiBwYXJzZVRyaWFuZ2xlR2VvbWV0cnkuIE1ha2UgYSBwYXJzZVN1Ykdlb20oKSBpbnN0ZWFkICg/KVxuXHRcdFx0XHR2YXIgc21fbGVuOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRcdHZhciBzbV9lbmQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHNtX2xlbjtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIkZvbnQgc21fbGVuID0gXCIrc21fbGVuKTtcblxuXHRcdFx0XHQvL3RoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpOyAvLyBubyBwcm9wZXJ0aWVzIGZvciBmb250LXRhYmxlIHN1Ymdlb3Ncblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xuXHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHNtX2VuZCkge1xuXHRcdFx0XHRcdHZhciBpZHg6bnVtYmVyID0gMDtcblx0XHRcdFx0XHR2YXIgc3RyX2Z0eXBlOm51bWJlciwgc3RyX3R5cGU6bnVtYmVyLCBzdHJfbGVuOm51bWJlciwgc3RyX2VuZDpudW1iZXI7XG5cblx0XHRcdFx0XHQvLyBUeXBlLCBmaWVsZCB0eXBlLCBsZW5ndGhcblx0XHRcdFx0XHRzdHJfdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdFx0XHRcdHN0cl9mdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdFx0XHRcdHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdHN0cl9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgc3RyX2xlbjtcblxuXHRcdFx0XHRcdGlmIChzdHJfdHlwZSA9PSAyKSB7Ly9mYWNlIGluZGljaWVzIHBvc2l0aW9uc1xuXHRcdFx0XHRcdFx0dmFyIGluZGljZXM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cblx0XHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xuXHRcdFx0XHRcdFx0XHRpbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDEwKSB7Ly8gY29tYmluZWQgdmVydGV4MkQgc3RyZWFtIDUgeCBmbG9hdDMyXG5cdFx0XHRcdFx0XHR2YXIgaWR4X3BvczpudW1iZXIgPSAwO1xuXHRcdFx0XHRcdFx0dmFyIGlkeF9jdXJ2ZXM6bnVtYmVyID0gMDtcblx0XHRcdFx0XHRcdHZhciBpZHhfdXZzOm51bWJlciA9IDA7XG5cblx0XHRcdFx0XHRcdHZhciBwb3NpdGlvbnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0XHRcdFx0XHR2YXIgY3VydmVEYXRhOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXHRcdFx0XHRcdFx0dmFyIHV2czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblxuXHRcdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cblx0XHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHhcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHlcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIHR5cGVcblxuXHRcdFx0XHRcdFx0XHRjdXJ2ZURhdGFbaWR4X2N1cnZlcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxuXHRcdFx0XHRcdFx0XHRjdXJ2ZURhdGFbaWR4X2N1cnZlcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMlxuXG5cdFx0XHRcdFx0XHRcdHV2c1tpZHhfdXZzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXG5cdFx0XHRcdFx0XHRcdHV2c1tpZHhfdXZzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vdGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7Ly8gbm8gYXR0cmlidXRlcyBmb3IgZm9udC10YWJsZSBzdWJnZW9zXG5cdFx0XHRcdHZhciBjdXJ2ZV9zdWJfZ2VvbTpDdXJ2ZVN1Ykdlb21ldHJ5ID0gbmV3IEN1cnZlU3ViR2VvbWV0cnkodHJ1ZSk7XG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVDdXJ2ZXMoY3VydmVEYXRhKTtcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlVVZzKHV2cyk7XG5cdFx0XHRcdG5ld19mb250X3N0eWxlLnNldF9zdWJnZW9fZm9yX2NoYXIoZm9udF9zdHlsZV9jaGFyLnRvU3RyaW5nKCksIGN1cnZlX3N1Yl9nZW9tKTtcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgZm9udC10YWJsZVwiKTtcblxuXHRcdH1cblx0XHQvL2NvbnNvbGUubG9nKFwiUGFyc2VkIGEgZm9udFwiKTtcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0Pm5ld19mb250LCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld19mb250O1xuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBmb250OiBOYW1lID0gJ1wiICsgbmFtZSk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVGV4dEZvcm1hdChibG9ja0lEOm51bWJlcik6dm9pZCB7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gbmFtZTtcblx0XHQvL2NvbnNvbGUubG9nKFwidGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgICdcIiArIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lICk7XG5cdFx0dmFyIGZvbnRfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHQvL2NvbnNvbGUubG9nKFwiZm9udF9pZCAgJ1wiICsgZm9udF9pZCk7XG5cdFx0dmFyIGZvbnRfc3R5bGVfbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImZvbnRfc3R5bGVfbmFtZSAgJ1wiICsgZm9udF9zdHlsZV9uYW1lKTtcblx0XHR2YXIgcmV0dXJuQXJyYXlGb250OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChmb250X2lkLCBbQXNzZXRUeXBlLkZPTlRdKTtcblx0XHR2YXIgZm9udDpGb250O1xuXHRcdGlmIChyZXR1cm5BcnJheUZvbnRbMF0pIHtcblx0XHRcdGZvbnQgPSA8Rm9udD4gcmV0dXJuQXJyYXlGb250WzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIEZvbnQgZm9yIHRoaXMgVGV4dEZvcm1hdC4gQSBlbXB0eSBGb250IGlzIGNyZWF0ZWQhXCIpO1xuXHRcdFx0Zm9udCA9IG5ldyBGb250KCk7XG5cdFx0fVxuXHRcdHZhciBuZXdUZXh0Rm9ybWF0OlRleHRGb3JtYXQgPSBuZXcgVGV4dEZvcm1hdCgpO1xuXHRcdG5ld1RleHRGb3JtYXQuZm9udF9uYW1lID0gZm9udC5uYW1lO1xuXHRcdHZhciBmb250X3RhYmxlOlRlc3NlbGF0ZWRGb250VGFibGUgPSBmb250LmdldF9mb250X3RhYmxlKGZvbnRfc3R5bGVfbmFtZSk7XG5cdFx0aWYoZm9udF90YWJsZSE9bnVsbCl7XG5cdFx0XHRuZXdUZXh0Rm9ybWF0LmZvbnRfc3R5bGUgPSBmb250X3N0eWxlX25hbWU7XG5cdFx0XHRuZXdUZXh0Rm9ybWF0LmZvbnRfdGFibGUgPSBmb250X3RhYmxlO1xuXHRcdH1cblxuXHRcdHZhciBkYXRhX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIm1hdCAgJ1wiICsgZGF0YV9pZCk7XG5cdFx0dmFyIG1hdDpCYXNpY01hdGVyaWFsO1xuXHRcdHZhciByZXR1cm5lZEFycmF5TWF0ZXJpYWw6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRhdGFfaWQsIFtBc3NldFR5cGUuTUFURVJJQUxdKTtcblxuXHRcdGlmIChyZXR1cm5lZEFycmF5TWF0ZXJpYWxbMF0pIHtcblx0XHRcdG1hdCA9IDxCYXNpY01hdGVyaWFsPiByZXR1cm5lZEFycmF5TWF0ZXJpYWxbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgTWF0ZXJpYWwgZm9yIHRoaXMgVGV4dEZvcm1hdC4gRGVmYXVsdCBNYXRlcmlhbCB3aWxsIGJlIHVzZWQhXCIpO1xuXHRcdFx0bWF0ID0gbmV3IEJhc2ljTWF0ZXJpYWwoKTtcblx0XHR9XG5cdFx0bWF0LmJvdGhTaWRlcz10cnVlO1xuXG5cdFx0dmFyIG51bV91dl92YWx1ZXM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIm51bV91dl92YWx1ZXMgICdcIiArIG51bV91dl92YWx1ZXMpO1xuXHRcdGZvcih2YXIgdXZjbnQ6bnVtYmVyPTA7IHV2Y250PG51bV91dl92YWx1ZXM7IHV2Y250Kyspe1xuXHRcdFx0dmFyIHV2X3ZhbHVlOm51bWJlcj10aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInV2X3ZhbHVlICAnXCIgKyB1dl92YWx1ZSk7XG5cdFx0fVxuXHRcdHZhciBmb3JtYXRfcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMTYsIDI6QVdEUGFyc2VyLlVJTlQxNiwgMzpBV0RQYXJzZXIuVUlOVDgsNDpBV0RQYXJzZXIuVUlOVDgsNTpBV0RQYXJzZXIuVUlOVDh9KTtcblxuXHRcdG5ld1RleHRGb3JtYXQuc2l6ZSA9IGZvcm1hdF9wcm9wcy5nZXQoMSwxMik7XG5cdFx0bmV3VGV4dEZvcm1hdC5sZXR0ZXJTcGFjaW5nID0gZm9ybWF0X3Byb3BzLmdldCgyLDApO1xuXHRcdC8vbmV3VGV4dEZvcm1hdC5yb3RhdGVkID0gZm9ybWF0X3Byb3BzLmdldCgzLGZhbHNlKTtcblx0XHRuZXdUZXh0Rm9ybWF0Lmtlcm5pbmcgPSBmb3JtYXRfcHJvcHMuZ2V0KDQsdHJ1ZSk7XG5cdFx0Ly9uZXdUZXh0Rm9ybWF0LmJhc2VsaW5lX3NoaWZ0ID0gZm9ybWF0X3Byb3BzLmdldCg1LDEpO1xuXHRcdG5ld1RleHRGb3JtYXQubWF0ZXJpYWwgPSBtYXQ7XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7Ly8gdGV4dGZvcm1hdCBoYXMgbm8gZXh0cmEtcHJvcGVydGllc1xuXHRcdC8vbmV3VGV4dEZvcm1hdC5leHRyYSA9XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBuZXdUZXh0Rm9ybWF0LCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1RleHRGb3JtYXQ7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVGV4dEZvcm1hdDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIiBmb250OiBcIitmb250Lm5hbWUpO1xuXHRcdH1cblxuXHR9XG5cdHByaXZhdGUgcGFyZXNUZXh0RmllbGQoYmxvY2tJRDpudW1iZXIpOnZvaWQge1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSA9IG5hbWU7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIm5hbWUgICdcIiArIG5hbWUpO1xuXHRcdHZhciBuZXdUZXh0RmllbGQ6VGV4dEZpZWxkID0gbmV3IFRleHRGaWVsZCgpO1xuXHRcdHZhciBudW1fcGFyYWdyYXBoczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBjb21wbGV0ZV90ZXh0OnN0cmluZyA9IFwiXCI7XG5cdFx0Ly9jb25zb2xlLmxvZyhcIm51bV9wYXJhZ3JhcGhzICAnXCIgKyBudW1fcGFyYWdyYXBocyk7XG5cdFx0Zm9yKHZhciBwYXJhY250Om51bWJlcj0wOyBwYXJhY250PG51bV9wYXJhZ3JhcGhzOyBwYXJhY250Kyspe1xuXG5cdFx0XHR2YXIgbnVtX3RleHRydW5zOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwibnVtX3RleHRydW5zICAnXCIgKyBudW1fdGV4dHJ1bnMpO1xuXHRcdFx0Zm9yKHZhciB0ZXh0cnVuX2NudDpudW1iZXI9MDsgdGV4dHJ1bl9jbnQ8bnVtX3RleHRydW5zOyB0ZXh0cnVuX2NudCsrKSB7XG5cblx0XHRcdFx0dmFyIGZvcm1hdF9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwiZm9ybWF0X2lkICAnXCIgKyBmb3JtYXRfaWQpO1xuXHRcdFx0XHR2YXIgdGV4dF9mb3JtYXQ6VGV4dEZvcm1hdDtcblx0XHRcdFx0dmFyIHRleHRGb3JtYXRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZm9ybWF0X2lkLCBbQXNzZXRUeXBlLlRFWFRGT1JNQVRdKTtcblx0XHRcdFx0aWYgKHRleHRGb3JtYXRBcnJheVswXSkge1xuXHRcdFx0XHRcdHRleHRfZm9ybWF0ID0gPFRleHRGb3JtYXQ+IHRleHRGb3JtYXRBcnJheVsxXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIE1hdGVyaWFsIGZvciB0aGlzIEJpbGxib2FyZC4gQSBlbXB0eSBtYXRlcmlhbCBpcyBjcmVhdGVkIVwiKTtcblx0XHRcdFx0XHR0ZXh0X2Zvcm1hdCA9IG5ldyBUZXh0Rm9ybWF0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInRleHRfZm9ybWF0ICAnXCIgKyB0ZXh0X2Zvcm1hdC5uYW1lKTtcblx0XHRcdFx0dmFyIHR4dF9sZW5ndGggPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwidHh0X2xlbmd0aCAgJ1wiICsgdHh0X2xlbmd0aCk7XG5cdFx0XHRcdGlmICh0eHRfbGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciB0aGlzX3R4dDpzdHJpbmcgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyh0eHRfbGVuZ3RoKTtcblx0XHRcdFx0XHRuZXdUZXh0RmllbGQuYXBwZW5kVGV4dCh0aGlzX3R4dCwgdGV4dF9mb3JtYXQpO1xuXHRcdFx0XHRcdGNvbXBsZXRlX3RleHQrPXRoaXNfdHh0O1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJ0aGlzX3R4dCAgJ1wiICsgdGhpc190eHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRuZXdUZXh0RmllbGQuY2xvc2VQYXJhZ3JhcGgoKTtcblx0XHR9XG5cdFx0bmV3VGV4dEZpZWxkLmNvbnN0cnVjdF9nZW9tZXRyeSgpO1xuXHRcdC8vIHRvZG86IG9wdGlvbmFsIG1hdHJpeCBldGMgY2FuIGJlIHB1dCBpbiBwcm9wZXJ0aWVzLlxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXG5cdFx0bmV3VGV4dEZpZWxkLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHQvL2NvbnNvbGUubG9nKFwiUGFyc2VkIGEgVGV4dEZpZWxkOiBOYW1lID0gJ1wiICsgbmFtZSArIFwifCB0ZXh0ICA9IFwiICsgY29tcGxldGVfdGV4dCk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbmV3VGV4dEZpZWxkLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG5ld1RleHRGaWVsZDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUZXh0RmllbGQ6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCJ8IHRleHQgID0gXCIgKyBjb21wbGV0ZV90ZXh0KTtcblx0XHR9XG5cblx0fVxuXG5cdC8vIEJsb2NrIElEID0gMjVcblx0cHJpdmF0ZSBwYXJzZUJpbGxCb2FyZExpYnJhcnlCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZCB7XG5cblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHR2YXIgZGF0YV9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBtYXQ6QmFzaWNNYXRlcmlhbDtcblx0XHR2YXIgcmV0dXJuZWRBcnJheU1hdGVyaWFsOkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChkYXRhX2lkLCBbQXNzZXRUeXBlLk1BVEVSSUFMXSk7XG5cblx0XHRpZiAocmV0dXJuZWRBcnJheU1hdGVyaWFsWzBdKSB7XG5cdFx0XHRtYXQgPSA8QmFzaWNNYXRlcmlhbD4gcmV0dXJuZWRBcnJheU1hdGVyaWFsWzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIE1hdGVyaWFsIGZvciB0aGlzIEJpbGxib2FyZC4gQSBlbXB0eSBtYXRlcmlhbCBpcyBjcmVhdGVkIVwiKTtcblx0XHRcdG1hdCA9IG5ldyBCYXNpY01hdGVyaWFsKCk7XG5cdFx0fVxuXHRcdG1hdC5ib3RoU2lkZXM9dHJ1ZTtcblx0XHR2YXIgYmlsbGJvYXJkOkJpbGxib2FyZCA9IG5ldyBCaWxsYm9hcmQobWF0KTtcblxuXHRcdC8vIHRvZG86IG9wdGlvbmFsIG1hdHJpeCBldGMgY2FuIGJlIHB1dCBpbiBwcm9wZXJ0aWVzLlxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXG5cdFx0YmlsbGJvYXJkLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBiaWxsYm9hcmQsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYmlsbGJvYXJkO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIExpYnJhcnktQmlsbGJvYXJkOiBOYW1lID0gJ1wiICsgbmFtZSArIFwifCBNYXRlcmlhbC1OYW1lID0gXCIgKyBtYXQubmFtZSk7XG5cdFx0fVxuXHR9XG5cdC8vIEJsb2NrIElEID0gMjRcblx0cHJpdmF0ZSBwYXJzZU1lc2hMaWJyYXJ5QmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWQge1xuXHRcdHZhciBudW1fbWF0ZXJpYWxzOm51bWJlcjtcblx0XHR2YXIgbWF0ZXJpYWxzX3BhcnNlZDpudW1iZXI7XG5cblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cblx0XHR2YXIgZGF0YV9pZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciBnZW9tOkdlb21ldHJ5O1xuXHRcdHZhciByZXR1cm5lZEFycmF5R2VvbWV0cnk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRhdGFfaWQsIFtBc3NldFR5cGUuR0VPTUVUUlldKVxuXG5cdFx0aWYgKHJldHVybmVkQXJyYXlHZW9tZXRyeVswXSkge1xuXHRcdFx0Z2VvbSA9IDxHZW9tZXRyeT4gcmV0dXJuZWRBcnJheUdlb21ldHJ5WzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIEdlb21ldHJ5IGZvciB0aGlzIE1lc2guIEEgZW1wdHkgR2VvbWV0cnkgaXMgY3JlYXRlZCFcIik7XG5cdFx0XHRnZW9tID0gbmV3IEdlb21ldHJ5KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmdlb0lEID0gZGF0YV9pZDtcblx0XHR2YXIgbWF0ZXJpYWxzOkFycmF5PE1hdGVyaWFsQmFzZT4gPSBuZXcgQXJyYXk8TWF0ZXJpYWxCYXNlPigpO1xuXHRcdG51bV9tYXRlcmlhbHMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHR2YXIgbWF0ZXJpYWxOYW1lczpBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblx0XHRtYXRlcmlhbHNfcGFyc2VkID0gMDtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5TWF0ZXJpYWw6QXJyYXk8YW55PjtcblxuXHRcdHdoaWxlIChtYXRlcmlhbHNfcGFyc2VkIDwgbnVtX21hdGVyaWFscykge1xuXHRcdFx0dmFyIG1hdF9pZDpudW1iZXI7XG5cdFx0XHRtYXRfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0cmV0dXJuZWRBcnJheU1hdGVyaWFsID0gdGhpcy5nZXRBc3NldEJ5SUQobWF0X2lkLCBbQXNzZXRUeXBlLk1BVEVSSUFMXSlcblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlNYXRlcmlhbFswXSkgJiYgKG1hdF9pZCA+IDApKSB7XG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIE1hdGVyaWFsIE5yIFwiICsgbWF0ZXJpYWxzX3BhcnNlZCArIFwiIChJRCA9IFwiICsgbWF0X2lkICsgXCIgKSBmb3IgdGhpcyBNZXNoXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbTpNYXRlcmlhbEJhc2UgPSA8TWF0ZXJpYWxCYXNlPiByZXR1cm5lZEFycmF5TWF0ZXJpYWxbMV07XG5cblx0XHRcdG1hdGVyaWFscy5wdXNoKG0pO1xuXHRcdFx0bWF0ZXJpYWxOYW1lcy5wdXNoKG0ubmFtZSk7XG5cblx0XHRcdG1hdGVyaWFsc19wYXJzZWQrKztcblx0XHR9XG5cblx0XHR2YXIgbWVzaDpNZXNoID0gbmV3IE1lc2goZ2VvbSwgbnVsbCk7XG5cblxuXHRcdGlmIChtYXRlcmlhbHMubGVuZ3RoID49IDEgJiYgbWVzaC5zdWJNZXNoZXMubGVuZ3RoID09IDEpIHtcblx0XHRcdG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbHNbMF07XG5cdFx0fSBlbHNlIGlmIChtYXRlcmlhbHMubGVuZ3RoID4gMSkge1xuXHRcdFx0dmFyIGk6bnVtYmVyO1xuXG5cdFx0XHQvLyBBc3NpZ24gZWFjaCBzdWItbWVzaCBpbiB0aGUgbWVzaCBhIG1hdGVyaWFsIGZyb20gdGhlIGxpc3QuIElmIG1vcmUgc3ViLW1lc2hlc1xuXHRcdFx0Ly8gdGhhbiBtYXRlcmlhbHMsIHJlcGVhdCB0aGUgbGFzdCBtYXRlcmlhbCBmb3IgYWxsIHJlbWFpbmluZyBzdWItbWVzaGVzLlxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1lc2guc3ViTWVzaGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG1lc2guc3ViTWVzaGVzW2ldLm1hdGVyaWFsID0gbWF0ZXJpYWxzW01hdGgubWluKG1hdGVyaWFscy5sZW5ndGggLSAxLCBpKV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdG1lc2guZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1lc2gsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWVzaDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBMaWJyYXJ5LU1lc2g6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCJ8IEdlb21ldHJ5LU5hbWUgPSBcIiArIGdlb20ubmFtZSArIFwiIHwgU3ViTWVzaGVzID0gXCIgKyBtZXNoLnN1Yk1lc2hlcy5sZW5ndGggKyBcIiB8IE1hdC1OYW1lcyA9IFwiICsgbWF0ZXJpYWxOYW1lcy50b1N0cmluZygpKTtcblx0XHR9XG5cdH1cblx0cHJpdmF0ZSBwYXJzZUF1ZGlvQmxvY2soYmxvY2tJRDpudW1iZXIsIGZhY3Rvcnk6VGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSk6dm9pZCB7XG5cblx0XHQvL3ZhciBhc3NldDpBdWRpbzt0b2RvIGNyZWF0ZSBhc3NldCBmb3IgYXVkaW9cblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXG5cdFx0dmFyIHR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcblxuXHRcdC8vdGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcblxuXHRcdC8vIEV4dGVybmFsXG5cdFx0aWYgKHR5cGUgPT0gMCkge1xuXHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0dmFyIHVybDpzdHJpbmc7XG5cdFx0XHR1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XG5cdFx0XHQvLyB0b2RvIHBhcnNlciBuZWVkcyB0byBiZSBhYmxlIHRvIGhhbmRsZSBtcDMgYW5kIHdhdiBmaWxlcyBpZiB3ZSB0cmlnZ2VyIHRoZSBsb2FkaW5nIG9mIGV4dGVybmFsIHJlc3NvdXJjZVxuXHRcdFx0Ly90aGlzLl9wQWRkRGVwZW5kZW5jeSh0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSwgbmV3IFVSTFJlcXVlc3QodXJsKSwgZmFsc2UsIG51bGwsIHRydWUpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJBdWRpbyB1cmwgPSBcIit1cmwpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRvZG86IGV4cG9ydGVyIGRvZXMgbm90IGV4cG9ydCBlbWJlZCBzb3VuZHMgeWV0XG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cblx0XHRcdHZhciBkYXRhOkJ5dGVBcnJheTtcblx0XHRcdGRhdGEgPSBuZXcgQnl0ZUFycmF5KCk7XG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XG5cblx0XHRcdC8vIHRvZG8gcGFyc2Ugc291bmQgZnJvbSBieXRlc1xuXHRcdFx0Ly8gdGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG51bGwsIGZhbHNlLCBQYXJzZXJVdGlscy5ieShkYXRhKSwgdHJ1ZSk7XG5cdFx0XHQvL3RoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XG5cblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgZm9yIG5vd1xuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpO1xuXHRcdC8vdGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDt0b2RvXG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdHZhciB0ZXh0dXJlU3R5bGVzTmFtZXM6QXJyYXk8c3RyaW5nPiA9IFtcImV4dGVybmFsXCIsIFwiZW1iZWRcIl1cblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyBhIFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQXVkaW8gZmlsZVwiKTtcblx0XHR9XG5cdH1cblxuXHQvL0Jsb2NrIElEID0gNFxuXHRwcml2YXRlIHBhcnNlVGltZUxpbmUoYmxvY2tJRDpudW1iZXIsIGZhY3Rvcnk6VGltZWxpbmVTY2VuZUdyYXBoRmFjdG9yeSk6dm9pZCB7XG5cblx0XHR2YXIgaTpudW1iZXI7XG5cdFx0dmFyIGo6bnVtYmVyO1xuXHRcdHZhciBrOm51bWJlcjtcblx0XHR2YXIgdGltZUxpbmVDb250YWluZXIgPSBmYWN0b3J5LmNyZWF0ZU1vdmllQ2xpcCgpO1xuXHRcdHZhciBuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBpc1NjZW5lID0gISF0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgc2NlbmVJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdHZhciBmcHM6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcblx0XHR2YXIgbXNfcGVyX2ZyYW1lID0gMTAwMCAvIGZwcztcblx0XHR2YXIgbnVtRnJhbWVzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHZhciBvYmplY3RJRE1hcCA6IHsgW2lkOnN0cmluZ106bnVtYmVyOyB9ID0ge307XG5cblx0XHQvLyB2YXIgcHJldmlvdXNUaW1lTGluZTpUaW1lTGluZUZyYW1lO1xuXHRcdC8vIHZhciBmaWxsX3Byb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuVUlOVDMyfSk7Ly8geyAxOlVJTlQzMiwgNjpBV0RTVFJJTkcgfSAgKTsgLy87ICwgMjpVSU5UMzIsIDM6VUlOVDMyLCA1OkJPT0wgfSApO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUSU1FTElORTogTmFtZSA9IFwiICsgbmFtZSArIFwifCBpc1NjZW5lID0gXCIgKyBpc1NjZW5lICsgXCJ8IHNjZW5lSUQgPSBcIiArIHNjZW5lSUQgKyBcInwgbnVtRnJhbWVzID0gXCIgKyBudW1GcmFtZXMpO1xuXG5cdFx0dmFyIHRvdGFsRHVyYXRpb24gPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBudW1GcmFtZXM7IGkrKykge1xuXG5cdFx0XHR2YXIgZnJhbWUgPSBuZXcgVGltZWxpbmVLZXlGcmFtZSgpO1xuXHRcdFx0dmFyIHRyYWNlU3RyaW5nID0gXCJmcmFtZSA9IFwiICsgaTtcblx0XHRcdC8vIFRPRE86IHJlbW92ZSB0aGUgbXNfcGVyX2ZyYW1lIHRvIHNldCB0aGUgZHVyYXRpb24gaW4gZnJhbWVzXG5cdFx0XHR2YXIgZnJhbWVEdXJhdGlvbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCkgKiBtc19wZXJfZnJhbWU7XG5cdFx0XHRmcmFtZS5zZXRGcmFtZVRpbWUodG90YWxEdXJhdGlvbiwgZnJhbWVEdXJhdGlvbik7XG5cdFx0XHR0b3RhbER1cmF0aW9uICs9IGZyYW1lRHVyYXRpb247XG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZHVyYXRpb24gPSBcIiArIGZyYW1lRHVyYXRpb24pO1xuXHRcdFx0dHJhY2VTdHJpbmcgKz0gXCJkdXJhdGlvbiA9IFwiICsgZnJhbWVEdXJhdGlvbjtcblxuXHRcdFx0dmFyIG51bUxhYmVscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1MYWJlbHM7IGorKykge1xuXHRcdFx0XHR2YXIgbGFiZWxUeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdHZhciBsYWJlbCA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHRcdFx0Ly8gVE9ETzogSGFuZGxlIGxhYmVscyBkaWZmZXJlbnRseVxuXHRcdFx0XHQvL3RpbWVMaW5lQ29udGFpbmVyLmFkZEZyYW1lTGFiZWwobmV3IEZyYW1lTGFiZWwobGFiZWwsIGxhYmVsVHlwZSwgZnJhbWUpKTtcblx0XHRcdFx0dHJhY2VTdHJpbmcgKz0gXCJcXG4gICAgIGxhYmVsID0gXCIgKyBsYWJlbCArIFwiIC0gbGFiZWxUeXBlID0gXCIgKyBsYWJlbFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBudW1Db21tYW5kcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdHRyYWNlU3RyaW5nICs9IFwiXFxuICAgICAgQ29tbWFuZHMgXCIgKyBudW1Db21tYW5kcztcblx0XHRcdHZhciBoYXNEZXB0aENoYW5nZXMgPSBmYWxzZTtcblx0XHRcdHZhciBjb21tYW5kU3RyaW5nID0gXCJcIjtcblx0XHRcdGZvciAoaiA9IDA7IGogPCBudW1Db21tYW5kczsgaisrKSB7XG5cdFx0XHRcdHZhciBvYmplY3RJRDpudW1iZXI7XG5cdFx0XHRcdHZhciByZXNvdXJjZUlEOm51bWJlcjtcblx0XHRcdFx0dmFyIGNvbW1hbmRUeXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXG5cdFx0XHRcdC8vIDEgPSBBZGQgb2JqZWN0IGJ5IGxvY2FsIGlkIChhd2QtYmxvY2staWQpICsgdXBkYXRlIHByb3BlcnRpZXNcblx0XHRcdFx0Ly8gMiA9IEFkZCBvYmplY3QgYnkgZ2xvYmFsIGlkIChzdHJpbmcgaWRlbnRpZmllcikgKyB1cGRhdGUgcHJvcGVydGllcyAhTm90IHVzZWQgeWV0LiFcblx0XHRcdFx0Ly8gMyA9IFVwZGF0ZU9iamVjdCAtIHVwZGF0ZSBhIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgcHJlc2VudFxuXHRcdFx0XHQvLyA0ID0gcmVtb3ZlIG9iamVjdFxuXHRcdFx0XHQvLyA1ID0gYWRkIC8gdXBkYXRlIHNvdW5kXG5cblx0XHRcdFx0c3dpdGNoIChjb21tYW5kVHlwZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRcdHZhciB2YWxpZF9jb21tYW5kOmJvb2xlYW4gPSBmYWxzZTtcblx0XHRcdFx0XHRcdG9iamVjdElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0XHRcdHZhciBpbnN0YW5jZUlEID0gMDsgLy8gbXVzdCBiZSBzZXQgaW4gZm9sbGluZyBjb25kaXRpb25zOlxuXHRcdFx0XHRcdFx0aWYgKGNvbW1hbmRUeXBlID09IDEpIHtcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcyBjb21tYW5kcyBsb29rcyBmb3IgYSBvYmplY3QgYnkgYXdkLWlkIGFuZCBwdXRzIGl0IGludG8gdGhlIHRpbWVsaW5lXG5cdFx0XHRcdFx0XHRcdHJlc291cmNlSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2VOYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdFx0XHRcdFx0XHQvLyBzb3VuZCBpcyBhZGRlZCB0byB0aW1lbGluZSB3aXRoIGRlZGljYXRlZCBDb21tYW5kLCBhcyBpdCBpcyBubyBkaXNwbGF5LW9iamVjdCAoaGFzIG5vIG1hdHJpeCBldGMpXG5cdFx0XHRcdFx0XHRcdC8vIGNoZWNrIGlmIGEgR2VvbWV0cnkgY2FuIGJlIGZvdW5kIGF0IHRoZSByZXNvdXJjZUlEIChBV0QtSUQpXG5cdFx0XHRcdFx0XHRcdHZhciBjbWRfYXNzZXQ6RGlzcGxheU9iamVjdCA9IDxEaXNwbGF5T2JqZWN0PnRoaXMuX2Jsb2Nrc1tyZXNvdXJjZUlEXS5kYXRhO1xuXHRcdFx0XHRcdFx0XHRpZiAoY21kX2Fzc2V0ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRpbnN0YW5jZUlEID0gdGltZUxpbmVDb250YWluZXIucmVnaXN0ZXJQb3RlbnRpYWxDaGlsZChjbWRfYXNzZXQpO1xuXHRcdFx0XHRcdFx0XHRcdG9iamVjdElETWFwW29iamVjdElEXSA9IGluc3RhbmNlSUQ7XG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgQWRkQ2hpbGRDb21tYW5kKGluc3RhbmNlSUQpKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChpbnN0YW5jZU5hbWUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJuYW1lXCIsIGluc3RhbmNlTmFtZSkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU5hbWUgPSBcIiArIGluc3RhbmNlTmFtZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dmFsaWRfY29tbWFuZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgIC0gQWRkIG5ldyBSZXNvdXJjZSA9IFwiICsgcmVzb3VyY2VJRCArIFwiIGFzIG9iamVjdF9pZCA9IFwiICsgb2JqZWN0SUQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgIC0gRVJST1IgLSBvYmplY3RfaWQgPSBcIiArIG9iamVjdElEICsgXCIgLSBOTyBESVNQTEFZX09CSkVDVCBBVCBJRCA9IFwiICsgcmVzb3VyY2VJRDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoY29tbWFuZFR5cGUgPT0gMykge1xuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZUlEID0gb2JqZWN0SURNYXBbb2JqZWN0SURdO1xuXHRcdFx0XHRcdFx0XHR2YWxpZF9jb21tYW5kID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgIC0gVXBkYXRlIG9iamVjdF9pZCA9IFwiICsgb2JqZWN0SUQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyByZWFkIHRoZSBjb21tYW5kIHByb3BlcnRpZXNcblx0XHRcdFx0XHRcdC8vIDE6IG1hdHJpeDJkICg2IHggbnVtYmVyIHdpdGggc3RvcmFnZSBwcmVjaXNpb24gbWF0cml4KVxuXHRcdFx0XHRcdFx0Ly8gMjogbWF0cml4MmQgKDEyIHggbnVtYmVyIHdpdGggc3RvcmFnZSBwcmVjaXNpb24gbWF0cml4KSBub3QgdXNlZCB5ZXRcblx0XHRcdFx0XHRcdC8vIDM6IGNvbG9ydHJhbnNmb3JtICgyMCB4IG51bWJlciB3aXRoIHN0b3JhZ2UgcHJlY2lzaW9uIHByb3BlcnRpZXMpXG5cdFx0XHRcdFx0XHQvLyA0OiBibGVuZG1vZGUgKHVpbnQ4KVxuXHRcdFx0XHRcdFx0Ly8gNTogdmlzaWJpbHR5ICh1aW50OClcblx0XHRcdFx0XHRcdC8vIDY6IGRlcHRoICh1aW50MzIpXG5cdFx0XHRcdFx0XHQvLyA3OiBtYXNrICh1aW50MzIpXG5cdFx0XHRcdFx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHtcblx0XHRcdFx0XHRcdFx0MTogdGhpcy5fbWF0cml4TnJUeXBlLFxuXHRcdFx0XHRcdFx0XHQyOiB0aGlzLl9tYXRyaXhOclR5cGUsXG5cdFx0XHRcdFx0XHRcdDM6IHRoaXMuX3Byb3BzTnJUeXBlLFxuXHRcdFx0XHRcdFx0XHQ0OiBBV0RQYXJzZXIuVUlOVDgsXG5cdFx0XHRcdFx0XHRcdDU6IEFXRFBhcnNlci5VSU5UOCxcblx0XHRcdFx0XHRcdFx0NjogQVdEUGFyc2VyLlVJTlQzMixcblx0XHRcdFx0XHRcdFx0NzogQVdEUGFyc2VyLlVJTlQzMlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRpZiAodmFsaWRfY29tbWFuZCkge1xuXG5cdFx0XHRcdFx0XHRcdHZhciBtYXRyaXhfMmQ6RmxvYXQzMkFycmF5ID0gcHJvcHMuZ2V0KDEsIFtdKTtcblx0XHRcdFx0XHRcdFx0Ly92YXIgbWF0cml4XzNkOkZsb2F0MzJBcnJheSA9IHByb3BzLmdldCgyLCBbXSk7XG5cdFx0XHRcdFx0XHRcdHZhciBjb2xvcnRyYW5zZm9ybTpGbG9hdDMyQXJyYXkgPSBwcm9wcy5nZXQoMywgW10pO1xuXHRcdFx0XHRcdFx0XHR2YXIgYmxlbmRtb2RlOm51bWJlciA9IHByb3BzLmdldCg0LCAtMSk7XG5cdFx0XHRcdFx0XHRcdHZhciB2aXNpYmlsdHk6bnVtYmVyID0gcHJvcHMuZ2V0KDUsIC0xKTtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcHRoOm51bWJlciA9IHByb3BzLmdldCg2LCAtMSk7XG5cdFx0XHRcdFx0XHRcdHZhciBtYXNrOkFycmF5PG51bWJlcj4gPSBwcm9wcy5nZXQoNywgW10pO1xuXHRcdFx0XHRcdFx0XHQvLyB0b2RvOiBoYW5kbGUgZmlsdGVyc1xuXG5cdFx0XHRcdFx0XHRcdC8vbWF0cml4MmQgbXVzdCBwcm92aWRlIDYgdmFsdWVzIHRvIGJlIHZhbGlkXG5cblx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1BcnJheSA9IFwiICsgbWF0cml4XzJkLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0aWYgKG1hdHJpeF8yZC5sZW5ndGggPT0gNikge1xuXHRcdFx0XHRcdFx0XHRcdHZhciB0aGlzTWF0cml4ID0gbmV3IE1hdHJpeDNEKCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzRChtYXRyaXhfMmRbNF0sIG1hdHJpeF8yZFs1XSwgMCk7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gdG9kbyBpcyB0aGlzIGNvcnJlY3QgZm9yIDJkIC0+IDNkIHNjYWxlIGFuZCByb3RhdGlvbi4gKGkgZG91YnQgaXQpXG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5yYXdEYXRhWzBdID0gbWF0cml4XzJkWzBdO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXNNYXRyaXgucmF3RGF0YVsxXSA9IG1hdHJpeF8yZFsxXTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzTWF0cml4LnJhd0RhdGFbNF0gPSBtYXRyaXhfMmRbMl07XG5cdFx0XHRcdFx0XHRcdFx0dGhpc01hdHJpeC5yYXdEYXRhWzVdID0gbWF0cml4XzJkWzNdO1xuXHRcdFx0XHRcdFx0XHRcdGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcIl9pTWF0cml4M0RcIiwgdGhpc01hdHJpeCkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1BcnJheSA9IFwiICsgbWF0cml4XzJkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vbWF0cml4MmQgbXVzdCBwcm92aWRlIDIwIHZhbHVlcyB0byBiZSB2YWxpZFxuXHRcdFx0XHRcdFx0XHRpZiAoY29sb3J0cmFuc2Zvcm0ubGVuZ3RoID09IDIwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogc2V0IENvbG9yVHJhbnNmb3JtIG9uIG9iamVjdFByb3BzXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBjb2xvck1hdHJpeCA9IFwiICsgY29sb3J0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyBibGVuZG1vZGUgbXVzdCBiZSBwb3NpdGl2ZSB0byBiZSB2YWxpZFxuXHRcdFx0XHRcdFx0XHRpZiAoYmxlbmRtb2RlID49IDApIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgYmxlbmRtb2RlX3N0cmluZzpzdHJpbmcgPSB0aGlzLmJsZW5kTW9kZURpY1tibGVuZG1vZGVdO1xuXHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IHNldCBCbGVuZG1vZGUgb24gb2JqZWN0UHJvcHNcblx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIEJsZW5kTW9kZSA9IFwiICsgYmxlbmRtb2RlX3N0cmluZztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyB2aXNpYmlsdHkgbXVzdCBiZSBwb3NpdGl2ZSB0byBiZSB2YWxpZFxuXHRcdFx0XHRcdFx0XHRpZiAodmlzaWJpbHR5ID49IDApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodmlzaWJpbHR5ID09IDApXG5cdFx0XHRcdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBVcGRhdGVQcm9wZXJ0eUNvbW1hbmQoaW5zdGFuY2VJRCwgXCJ2aXNpYmxlXCIsIGZhbHNlKSk7XG5cdFx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJhbWUuYWRkQ29uc3RydWN0Q29tbWFuZChuZXcgVXBkYXRlUHJvcGVydHlDb21tYW5kKGluc3RhbmNlSUQsIFwidmlzaWJsZVwiLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gZGVwdGggbXVzdCBiZSBwb3NpdGl2ZSB0byBiZSB2YWxpZFxuXHRcdFx0XHRcdFx0XHRpZiAoZGVwdGggPj0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRTdHJpbmcgKz0gXCJcXG4gICAgICAgICAgICAgICAgRGVwdGggPSBcIiArIGRlcHRoO1xuXHRcdFx0XHRcdFx0XHRcdGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IFVwZGF0ZVByb3BlcnR5Q29tbWFuZChpbnN0YW5jZUlELCBcIl9fQVMyRGVwdGhcIiwgZGVwdGgpKTtcblx0XHRcdFx0XHRcdFx0XHRoYXNEZXB0aENoYW5nZXMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vIG1hc2sgbXVzdCBiZSBwb3NpdGl2ZSB0byBiZSB2YWxpZC4gaSB0aGluayBvbmx5IGFkZC1jb21tYW5kcyB3aWxsIGhhdmUgdGhpcyB2YWx1ZS5cblx0XHRcdFx0XHRcdFx0Ly8gZS5nLiBpdCBzaG91bGQgbmV2ZXIgYmUgdXBkYXRlZCBvbiBhbHJlYWR5IGV4aXN0aW5nIG9iamVjdHMuIChiZWNhdXNlIGRlcHRoIG9mIG9iamVjdHMgY2FuIGNoYW5nZSwgaSBhbSBub3Qgc3VyZSlcblx0XHRcdFx0XHRcdFx0aWYgKG1hc2subGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmKChtYXNrLmxlbmd0aD09MSkmJihtYXNrWzBdPDApKXtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IHRoaXMgb2JqZWN0IGlzIHVzZWQgYXMgbWFza1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAgICAgICAgICBvYmogaXMgdXNlZCBhcyBtYXNrXCI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiB0aGlzIG9iamVjdCBpcyBtYXNrZWQgYnkgb25lIG9yIG1vcmUgb2JqZWN0cyBkZWZpbmVkIGJ5IGlkcyBpbiBtYXNrLWFycmF5XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgICAgICAgICAgIG9iaiBpcyBtYXNrZWQgYnkgXCIrbWFzay5sZW5ndGgrXCIgb2JqZWN0c1wiO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyB0b2RvOiBoYW5kbGUgZmlsdGVyc1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIDQ6XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBPYmplY3QgQ29tbWFuZFxuXHRcdFx0XHRcdFx0b2JqZWN0SUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlSUQgPSBvYmplY3RJRE1hcFtvYmplY3RJRF07XG5cdFx0XHRcdFx0XHRmcmFtZS5hZGRDb25zdHJ1Y3RDb21tYW5kKG5ldyBSZW1vdmVDaGlsZENvbW1hbmQoaW5zdGFuY2VJRCkpO1xuXHRcdFx0XHRcdFx0Y29tbWFuZFN0cmluZyArPSBcIlxcbiAgICAgICAtIFJlbW92ZSBvYmplY3Qgd2l0aCBJRDogXCIgKyBvYmplY3RJRDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSA1OlxuXG5cdFx0XHRcdFx0XHQvLyBBZGQgU291bmQgQ29tbWFuZFxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogY3JlYXRlIENvbW1hbmRQcm9wc1NvdW5kIGFuZCBjaGVjayB3aGljaCBhc3NldCB0byB1c2Vcblx0XHRcdFx0XHRcdG9iamVjdElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0XHRcdHJlc291cmNlSUQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaW1wbGVtZW50IHNvdW5kIGluIHRpbWVsaW5lXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgLSBBZGQgbmV3IFNvdW5kIEFXRC1JRCA9IFwiICsgcmVzb3VyY2VJRC50b1N0cmluZygpICsgXCIgYXMgb2JqZWN0X2lkID0gXCIgKyBvYmplY3RJRC50b1N0cmluZygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRjb21tYW5kU3RyaW5nICs9IFwiXFxuICAgICAgIC0gVW5rbm93biBDb21tYW5kIFR5cGUgPSBcIiArIGNvbW1hbmRUeXBlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaGFzRGVwdGhDaGFuZ2VzKSB7XG5cdFx0XHRcdC8vIG9ubHkgd2FudCB0byBkbyB0aGlzIG9uY2UgYWZ0ZXIgYWxsIGNoaWxkcmVuJ3MgZGVwdGggdmFsdWVzIGFyZSB1cGRhdGVkXG5cdFx0XHRcdGZyYW1lLmFkZENvbnN0cnVjdENvbW1hbmQobmV3IEFwcGx5QVMyRGVwdGhzQ29tbWFuZCgpKTtcblx0XHRcdFx0aGFzRGVwdGhDaGFuZ2VzID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGhfY29kZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRpZiAobGVuZ3RoX2NvZGUgPiAwKSB7XG5cdFx0XHRcdC8vIFRPRE86IFNjcmlwdCBzaG91bGQgcHJvYmFibHkgbm90IGJlIGF0dGFjaGVkIHRvIGtleWZyYW1lcz9cblx0XHRcdFx0dmFyIGZyYW1lX2NvZGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW5ndGhfY29kZSk7XG5cdFx0XHRcdC8vZnJhbWUuYWRkVG9TY3JpcHQoZnJhbWVfY29kZSk7XG5cdFx0XHRcdHRyYWNlU3RyaW5nICs9IFwiXFxuZnJhbWUtY29kZSA9IFwiICsgZnJhbWVfY29kZTtcblx0XHRcdH1cblx0XHRcdHRyYWNlU3RyaW5nICs9IGNvbW1hbmRTdHJpbmc7XG5cdFx0XHQvL3RyYWNlKFwibGVuZ3RoX2NvZGUgPSBcIitsZW5ndGhfY29kZStcIiBmcmFtZV9jb2RlID0gXCIrZnJhbWVfY29kZSk7XG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpOy8vIHVzZXIgYXR0cmlidXRlcyAtIHNraXAgZm9yIG5vd1xuXHRcdFx0Y29uc29sZS5sb2codHJhY2VTdHJpbmcpO1xuXHRcdFx0dGltZUxpbmVDb250YWluZXIuYWRkRnJhbWUoZnJhbWUpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD50aW1lTGluZUNvbnRhaW5lciwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSB0aW1lTGluZUNvbnRhaW5lcjtcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0fVxuXHQvL0Jsb2NrIElEID0gMVxuXHRwcml2YXRlIHBhcnNlVHJpYW5nbGVHZW9tZXRyaWVCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cblx0XHR2YXIgZ2VvbTpHZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xuXG5cdFx0Ly8gUmVhZCBuYW1lIGFuZCBzdWIgY291bnRcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIG51bV9zdWJzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblxuXHRcdC8vIFJlYWQgb3B0aW9uYWwgcHJvcGVydGllc1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xuXHRcdHZhciBnZW9TY2FsZVU6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDEpO1xuXHRcdHZhciBnZW9TY2FsZVY6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDEpO1xuXG5cdFx0Ly8gTG9vcCB0aHJvdWdoIHN1YiBtZXNoZXNcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyID0gMDtcblx0XHR3aGlsZSAoc3Vic19wYXJzZWQgPCBudW1fc3Vicykge1xuXHRcdFx0dmFyIGlzX2N1cnZlX2dlb206Ym9vbGVhbj1mYWxzZTtcblx0XHRcdHZhciBpOm51bWJlcjtcblx0XHRcdHZhciBzbV9sZW46bnVtYmVyLCBzbV9lbmQ6bnVtYmVyO1xuXHRcdFx0dmFyIHdfaW5kaWNlczpBcnJheTxudW1iZXI+O1xuXHRcdFx0dmFyIHdlaWdodHM6QXJyYXk8bnVtYmVyPjtcblxuXHRcdFx0c21fbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdHNtX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzbV9sZW47XG5cblx0XHRcdHZhciBzdWJQcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fZ2VvTnJUeXBlLCAyOnRoaXMuX2dlb05yVHlwZX0pO1xuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGRhdGEgc3RyZWFtc1xuXHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzbV9lbmQpIHtcblx0XHRcdFx0dmFyIGlkeDpudW1iZXIgPSAwO1xuXHRcdFx0XHR2YXIgc3RyX2Z0eXBlOm51bWJlciwgc3RyX3R5cGU6bnVtYmVyLCBzdHJfbGVuOm51bWJlciwgc3RyX2VuZDpudW1iZXI7XG5cblx0XHRcdFx0Ly8gVHlwZSwgZmllbGQgdHlwZSwgbGVuZ3RoXG5cdFx0XHRcdHN0cl90eXBlID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRcdHN0cl9mdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdFx0XHRzdHJfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0c3RyX2VuZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKyBzdHJfbGVuO1xuXG5cdFx0XHRcdHZhciB4Om51bWJlciwgeTpudW1iZXIsIHo6bnVtYmVyO1xuXG5cdFx0XHRcdGlmIChzdHJfdHlwZSA9PSAxKSB7Ly92ZXJ0ZXggM2QgcG9zaXRpb25zXG5cdFx0XHRcdFx0dmFyIHZlcnRzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cblx0XHRcdFx0XHRcdHggPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xuXHRcdFx0XHRcdFx0eSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0XHR6ID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTtcblxuXHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geDtcblx0XHRcdFx0XHRcdHZlcnRzW2lkeCsrXSA9IHk7XG5cdFx0XHRcdFx0XHR2ZXJ0c1tpZHgrK10gPSB6O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAyKSB7Ly9mYWNlIGluZGljaWVzIHBvc2l0aW9uc1xuXHRcdFx0XHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHRpbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAzKSB7XG5cdFx0XHRcdFx0dmFyIHV2czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcblx0XHRcdFx0XHRcdHV2c1tpZHgrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDQpIHtcblxuXHRcdFx0XHRcdHZhciBub3JtYWxzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHRub3JtYWxzW2lkeCsrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gNikge1xuXHRcdFx0XHRcdHdfaW5kaWNlcyA9IEFycmF5PG51bWJlcj4oKTtcblxuXHRcdFx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgc3RyX2VuZCkge1xuXHRcdFx0XHRcdFx0d19pbmRpY2VzW2lkeCsrXSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSozO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDcpIHtcblxuXHRcdFx0XHRcdHdlaWdodHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cdFx0XHRcdFx0XHR3ZWlnaHRzW2lkeCsrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0cl90eXBlID09IDgpIHsvLyAyZC1wb3NpdGlvbnMgLSBub3QgdXNlZCB5ZXQuXG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyX3R5cGUgPT0gOSkgey8vIGNvbWJpbmVkIHZlcnRleDNEIHN0cmVhbSAxMyB4IGZsb2F0MzJcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcblx0XHRcdFx0fSBlbHNlIGlmIChzdHJfdHlwZSA9PSAxMCkgey8vIGNvbWJpbmVkIHZlcnRleDJEIHN0cmVhbSA1IHggZmxvYXQzMlxuXHRcdFx0XHRcdGlzX2N1cnZlX2dlb209dHJ1ZTtcblx0XHRcdFx0XHR2YXIgaWR4X3BvczpudW1iZXIgPSAwO1xuXHRcdFx0XHRcdHZhciBpZHhfY3VydmVzOm51bWJlciA9IDA7XG5cdFx0XHRcdFx0dmFyIGlkeF91dnM6bnVtYmVyID0gMDtcblxuXHRcdFx0XHRcdHZhciBwb3NpdGlvbnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0XHRcdFx0dmFyIGN1cnZlRGF0YTpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHR2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0XHRcdFx0d2hpbGUgKHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gPCBzdHJfZW5kKSB7XG5cblx0XHRcdFx0XHRcdHBvc2l0aW9uc1tpZHhfcG9zKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyB4XG5cdFx0XHRcdFx0XHRwb3NpdGlvbnNbaWR4X3BvcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8geVxuXHRcdFx0XHRcdFx0cG9zaXRpb25zW2lkeF9wb3MrK10gPSAgdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyB0eXBlXG5cblx0XHRcdFx0XHRcdGN1cnZlRGF0YVtpZHhfY3VydmVzKytdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5R2VvKTsvLyBjdXJ2ZSB2YWx1ZSAxXG5cdFx0XHRcdFx0XHRjdXJ2ZURhdGFbaWR4X2N1cnZlcysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMlxuXG5cdFx0XHRcdFx0XHR1dnNbaWR4X3V2cysrXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbyk7Ly8gY3VydmUgdmFsdWUgMVxuXHRcdFx0XHRcdFx0dXZzW2lkeF91dnMrK10gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lHZW8pOy8vIGN1cnZlIHZhbHVlIDFcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IHN0cl9lbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTsgLy8gSWdub3JlIHN1Yi1tZXNoIGF0dHJpYnV0ZXMgZm9yIG5vd1xuXHRcdFx0aWYoaXNfY3VydmVfZ2VvbSl7XG5cdFx0XHRcdHZhciBjdXJ2ZV9zdWJfZ2VvbTpDdXJ2ZVN1Ykdlb21ldHJ5ID0gbmV3IEN1cnZlU3ViR2VvbWV0cnkodHJ1ZSk7XG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XG5cdFx0XHRcdGN1cnZlX3N1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuXHRcdFx0XHRjdXJ2ZV9zdWJfZ2VvbS51cGRhdGVDdXJ2ZXMoY3VydmVEYXRhKTtcblx0XHRcdFx0Y3VydmVfc3ViX2dlb20udXBkYXRlVVZzKHV2cyk7XG5cdFx0XHRcdGdlb20uYWRkU3ViR2VvbWV0cnkoY3VydmVfc3ViX2dlb20pO1xuXHRcdFx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDdXJ2ZVN1Ykdlb21ldHJ5XCIpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHZhciB0cmlhbmdsZV9zdWJfZ2VvbSA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xuXHRcdFx0XHRpZiAod2VpZ2h0cylcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5qb2ludHNQZXJWZXJ0ZXggPSB3ZWlnaHRzLmxlbmd0aCAvICh2ZXJ0cy5sZW5ndGggLyAzKTtcblx0XHRcdFx0aWYgKG5vcm1hbHMpXG5cdFx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcblx0XHRcdFx0aWYgKHV2cylcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5hdXRvRGVyaXZlVVZzID0gZmFsc2U7XG5cdFx0XHRcdC8vdHJpYW5nbGVfc3ViX2dlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcblx0XHRcdFx0aWYgKHRydWUpIHtcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5hdXRvRGVyaXZlVGFuZ2VudHMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZVBvc2l0aW9ucyh2ZXJ0cyk7XG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZVZlcnRleE5vcm1hbHMobm9ybWFscyk7XG5cdFx0XHRcdHRyaWFuZ2xlX3N1Yl9nZW9tLnVwZGF0ZVVWcyh1dnMpO1xuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVWZXJ0ZXhUYW5nZW50cyhudWxsKTtcblx0XHRcdFx0dHJpYW5nbGVfc3ViX2dlb20udXBkYXRlSm9pbnRXZWlnaHRzKHdlaWdodHMpO1xuXHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS51cGRhdGVKb2ludEluZGljZXMod19pbmRpY2VzKTtcblxuXHRcdFx0XHR2YXIgc2NhbGVVOm51bWJlciA9IHN1YlByb3BzLmdldCgxLCAxKTtcblx0XHRcdFx0dmFyIHNjYWxlVjpudW1iZXIgPSBzdWJQcm9wcy5nZXQoMiwgMSk7XG5cdFx0XHRcdHZhciBzZXRTdWJVVnM6Ym9vbGVhbiA9IGZhbHNlOyAvL3RoaXMgc2hvdWxkIHJlbWFpbiBmYWxzZSBhdG0sIGJlY2F1c2UgaW4gQXdheUJ1aWxkZXIgdGhlIHV2IGlzIG9ubHkgc2NhbGVkIGJ5IHRoZSBnZW9tZXRyeVxuXG5cdFx0XHRcdGlmICgoZ2VvU2NhbGVVICE9IHNjYWxlVSkgfHwgKGdlb1NjYWxlViAhPSBzY2FsZVYpKSB7XG5cdFx0XHRcdFx0c2V0U3ViVVZzID0gdHJ1ZTtcblx0XHRcdFx0XHRzY2FsZVUgPSBnZW9TY2FsZVUgLyBzY2FsZVU7XG5cdFx0XHRcdFx0c2NhbGVWID0gZ2VvU2NhbGVWIC8gc2NhbGVWO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNldFN1YlVWcylcblx0XHRcdFx0XHR0cmlhbmdsZV9zdWJfZ2VvbS5zY2FsZVVWKHNjYWxlVSwgc2NhbGVWKTtcblx0XHRcdFx0Z2VvbS5hZGRTdWJHZW9tZXRyeSh0cmlhbmdsZV9zdWJfZ2VvbSk7XG5cdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFRyaWFuZ2xlU3ViR2VvbWV0cnlcIik7XG5cdFx0XHR9XG5cblxuXHRcdFx0Ly8gVE9ETzogU29tZWhvdyBtYXAgaW4tc3ViIHRvIG91dC1zdWIgaW5kaWNlcyB0byBlbmFibGUgbG9vay11cFxuXHRcdFx0Ly8gd2hlbiBjcmVhdGluZyBtZXNoZXMgKGFuZCB0aGVpciBtYXRlcmlhbCBhc3NpZ25tZW50cy4pXG5cblx0XHRcdHN1YnNfcGFyc2VkKys7XG5cdFx0fVxuXHRcdGlmICgoZ2VvU2NhbGVVICE9IDEpIHx8IChnZW9TY2FsZVYgIT0gMSkpXG5cdFx0XHRnZW9tLnNjYWxlVVYoZ2VvU2NhbGVVLCBnZW9TY2FsZVYpO1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGdlb20sIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gZ2VvbTtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBUcmlhbmdsZUdlb21ldHJ5OiBOYW1lID0gXCIgKyBuYW1lKTtcblx0XHR9XG5cblx0fVxuXG5cblx0Ly9CbG9jayBJRCA9IDExXG5cdHByaXZhdGUgcGFyc2VQcmltaXR2ZXMoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBuYW1lOnN0cmluZztcblx0XHR2YXIgcHJlZmFiOlByZWZhYkJhc2U7XG5cdFx0dmFyIHByaW1UeXBlOm51bWJlcjtcblx0XHR2YXIgc3Vic19wYXJzZWQ6bnVtYmVyO1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzO1xuXHRcdHZhciBic206TWF0cml4M0Q7XG5cblx0XHQvLyBSZWFkIG5hbWUgYW5kIHN1YiBjb3VudFxuXHRcdG5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0cHJpbVR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxMDE6dGhpcy5fZ2VvTnJUeXBlLCAxMDI6dGhpcy5fZ2VvTnJUeXBlLCAxMDM6dGhpcy5fZ2VvTnJUeXBlLCAxMTA6dGhpcy5fZ2VvTnJUeXBlLCAxMTE6dGhpcy5fZ2VvTnJUeXBlLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDMwMzpBV0RQYXJzZXIuVUlOVDE2LCA3MDE6QVdEUGFyc2VyLkJPT0wsIDcwMjpBV0RQYXJzZXIuQk9PTCwgNzAzOkFXRFBhcnNlci5CT09MLCA3MDQ6QVdEUGFyc2VyLkJPT0x9KTtcblxuXHRcdHZhciBwcmltaXRpdmVUeXBlczpBcnJheTxzdHJpbmc+ID0gW1wiVW5zdXBwb3J0ZWQgVHlwZS1JRFwiLCBcIlByaW1pdGl2ZVBsYW5lUHJlZmFiXCIsIFwiUHJpbWl0aXZlQ3ViZVByZWZhYlwiLCBcIlByaW1pdGl2ZVNwaGVyZVByZWZhYlwiLCBcIlByaW1pdGl2ZUN5bGluZGVyUHJlZmFiXCIsIFwiUHJpbWl0aXZlc0NvbmVQcmVmYWJcIiwgXCJQcmltaXRpdmVzQ2Fwc3VsZVByZWZhYlwiLCBcIlByaW1pdGl2ZXNUb3J1c1ByZWZhYlwiXVxuXG5cdFx0c3dpdGNoIChwcmltVHlwZSkge1xuXHRcdFx0Ly8gdG8gZG8sIG5vdCBhbGwgcHJvcGVydGllcyBhcmUgc2V0IG9uIGFsbCBwcmltaXRpdmVzXG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVBsYW5lUHJlZmFiKHByb3BzLmdldCgxMDEsIDEwMCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgzMDEsIDEpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIGZhbHNlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDdWJlUHJlZmFiKHByb3BzLmdldCgxMDEsIDEwMCksIHByb3BzLmdldCgxMDIsIDEwMCksIHByb3BzLmdldCgxMDMsIDEwMCksIHByb3BzLmdldCgzMDEsIDEpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDMwMywgMSksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZVNwaGVyZVByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgMTIpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDeWxpbmRlclByZWZhYihwcm9wcy5nZXQoMTAxLCA1MCksIHByb3BzLmdldCgxMDIsIDUwKSwgcHJvcHMuZ2V0KDEwMywgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxKSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7IC8vIGJvb2w3MDEsIGJvb2w3MDIsIGJvb2w3MDMsIGJvb2w3MDQpO1xuXHRcdFx0XHRpZiAoIXByb3BzLmdldCg3MDEsIHRydWUpKVxuXHRcdFx0XHRcdCg8UHJpbWl0aXZlQ3lsaW5kZXJQcmVmYWI+cHJlZmFiKS50b3BDbG9zZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYgKCFwcm9wcy5nZXQoNzAyLCB0cnVlKSlcblx0XHRcdFx0XHQoPFByaW1pdGl2ZUN5bGluZGVyUHJlZmFiPnByZWZhYikuYm90dG9tQ2xvc2VkID0gZmFsc2U7XG5cdFx0XHRcdGlmICghcHJvcHMuZ2V0KDcwMywgdHJ1ZSkpXG5cdFx0XHRcdFx0KDxQcmltaXRpdmVDeWxpbmRlclByZWZhYj5wcmVmYWIpLnlVcCA9IGZhbHNlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmltaXRpdmVDb25lUHJlZmFiKHByb3BzLmdldCgxMDEsIDUwKSwgcHJvcHMuZ2V0KDEwMiwgMTAwKSwgcHJvcHMuZ2V0KDMwMSwgMTYpLCBwcm9wcy5nZXQoMzAyLCAxKSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSksIHByb3BzLmdldCg3MDIsIHRydWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0cHJlZmFiID0gbmV3IFByaW1pdGl2ZUNhcHN1bGVQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCAxMDApLCBwcm9wcy5nZXQoMzAxLCAxNiksIHByb3BzLmdldCgzMDIsIDE1KSwgcHJvcHMuZ2V0KDcwMSwgdHJ1ZSkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHRwcmVmYWIgPSBuZXcgUHJpbWl0aXZlVG9ydXNQcmVmYWIocHJvcHMuZ2V0KDEwMSwgNTApLCBwcm9wcy5nZXQoMTAyLCA1MCksIHByb3BzLmdldCgzMDEsIDE2KSwgcHJvcHMuZ2V0KDMwMiwgOCksIHByb3BzLmdldCg3MDEsIHRydWUpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHByZWZhYiA9IG5ldyBQcmVmYWJCYXNlKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRVJST1I6IFVOU1VQUE9SVEVEIFBSRUZBQl9UWVBFXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAoKHByb3BzLmdldCgxMTAsIDEpICE9IDEpIHx8IChwcm9wcy5nZXQoMTExLCAxKSAhPSAxKSkge1xuXHRcdFx0Ly9nZW9tLnN1Ykdlb21ldHJpZXM7XG5cdFx0XHQvL2dlb20uc2NhbGVVVihwcm9wcy5nZXQoMTEwLCAxKSwgcHJvcHMuZ2V0KDExMSwgMSkpOyAvL1RPRE8gYWRkIGJhY2sgc2NhbGluZyB0byBwcmVmYWJzXG5cdFx0fVxuXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0cHJlZmFiLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHByZWZhYiwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBwcmVmYWI7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGlmICgocHJpbVR5cGUgPCAwKSB8fCAocHJpbVR5cGUgPiA3KSkge1xuXHRcdFx0XHRwcmltVHlwZSA9IDA7XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFByaW1pdml0ZTogTmFtZSA9IFwiICsgbmFtZSArIFwifCB0eXBlID0gXCIgKyBwcmltaXRpdmVUeXBlc1twcmltVHlwZV0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIEJsb2NrIElEID0gMjJcblx0cHJpdmF0ZSBwYXJzZUNvbnRhaW5lcihibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIG5hbWU6c3RyaW5nO1xuXHRcdHZhciBwYXJfaWQ6bnVtYmVyO1xuXHRcdHZhciBtdHg6TWF0cml4M0Q7XG5cdFx0dmFyIGN0cjpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xuXHRcdHZhciBwYXJlbnQ6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcblxuXHRcdHBhcl9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0bXR4ID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XG5cdFx0bmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblxuXHRcdHZhciBwYXJlbnROYW1lOnN0cmluZyA9IFwiUm9vdCAoVG9wTGV2ZWwpXCI7XG5cdFx0Y3RyID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcblx0XHRjdHIudHJhbnNmb3JtLm1hdHJpeDNEID0gbXR4O1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBhcl9pZCwgW0Fzc2V0VHlwZS5DT05UQUlORVIsIEFzc2V0VHlwZS5MSUdIVCwgQXNzZXRUeXBlLk1FU0hdKTtcblxuXHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHR2YXIgb2JqOkRpc3BsYXlPYmplY3QgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlbMV0pLmFkZENoaWxkKGN0cik7XG5cdFx0XHRwYXJlbnROYW1lID0gKDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xuXHRcdH0gZWxzZSBpZiAocGFyX2lkID4gMCkge1xuXHRcdFx0dGhpcy5fYmxvY2tzWyBibG9ja0lEIF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBPYmplY3RDb250YWluZXIzRFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGN0cik7XG5cdFx0fVxuXG5cdFx0Ly8gaW4gQVdEIHZlcnNpb24gMi4xIHdlIHJlYWQgdGhlIENvbnRhaW5lciBwcm9wZXJ0aWVzXG5cdFx0aWYgKCh0aGlzLl92ZXJzaW9uWzBdID09IDIpICYmICh0aGlzLl92ZXJzaW9uWzFdID09IDEpKSB7XG5cdFx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xuXHRcdFx0Y3RyLnBpdm90ID0gbmV3IFZlY3RvcjNEKHByb3BzLmdldCgxLCAwKSwgcHJvcHMuZ2V0KDIsIDApLCBwcm9wcy5nZXQoMywgMCkpO1xuXHRcdH1cblx0XHQvLyBpbiBvdGhlciB2ZXJzaW9ucyB3ZSBkbyBub3QgcmVhZCB0aGUgQ29udGFpbmVyIHByb3BlcnRpZXNcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdH1cblxuXHRcdC8vIHRoZSBleHRyYVByb3BlcnRpZXMgc2hvdWxkIG9ubHkgYmUgc2V0IGZvciBBV0QyLjEtRmlsZXMsIGJ1dCBpcyByZWFkIGZvciBib3RoIHZlcnNpb25zXG5cdFx0Y3RyLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBjdHIsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY3RyO1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIENvbnRhaW5lcjogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQmxvY2sgSUQgPSAyM1xuXHRwcml2YXRlIHBhcnNlTWVzaEluc3RhbmNlKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgbnVtX21hdGVyaWFsczpudW1iZXI7XG5cdFx0dmFyIG1hdGVyaWFsc19wYXJzZWQ6bnVtYmVyO1xuXHRcdHZhciBwYXJlbnQ6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIG10eDpNYXRyaXgzRCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xuXHRcdHZhciBkYXRhX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIGdlb206R2VvbWV0cnk7XG5cdFx0dmFyIHJldHVybmVkQXJyYXlHZW9tZXRyeTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQoZGF0YV9pZCwgW0Fzc2V0VHlwZS5HRU9NRVRSWV0pXG5cblx0XHRpZiAocmV0dXJuZWRBcnJheUdlb21ldHJ5WzBdKSB7XG5cdFx0XHRnZW9tID0gPEdlb21ldHJ5PiByZXR1cm5lZEFycmF5R2VvbWV0cnlbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgR2VvbWV0cnkgZm9yIHRoaXMgTWVzaC4gQSBlbXB0eSBHZW9tZXRyeSBpcyBjcmVhdGVkIVwiKTtcblx0XHRcdGdlb20gPSBuZXcgR2VvbWV0cnkoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZ2VvSUQgPSBkYXRhX2lkO1xuXHRcdHZhciBtYXRlcmlhbHM6QXJyYXk8TWF0ZXJpYWxCYXNlPiA9IG5ldyBBcnJheTxNYXRlcmlhbEJhc2U+KCk7XG5cdFx0bnVtX21hdGVyaWFscyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblxuXHRcdHZhciBtYXRlcmlhbE5hbWVzOkFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXHRcdG1hdGVyaWFsc19wYXJzZWQgPSAwO1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXlNYXRlcmlhbDpBcnJheTxhbnk+O1xuXG5cdFx0d2hpbGUgKG1hdGVyaWFsc19wYXJzZWQgPCBudW1fbWF0ZXJpYWxzKSB7XG5cdFx0XHR2YXIgbWF0X2lkOm51bWJlcjtcblx0XHRcdG1hdF9pZCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRyZXR1cm5lZEFycmF5TWF0ZXJpYWwgPSB0aGlzLmdldEFzc2V0QnlJRChtYXRfaWQsIFtBc3NldFR5cGUuTUFURVJJQUxdKVxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheU1hdGVyaWFsWzBdKSAmJiAobWF0X2lkID4gMCkpIHtcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgTWF0ZXJpYWwgTnIgXCIgKyBtYXRlcmlhbHNfcGFyc2VkICsgXCIgKElEID0gXCIgKyBtYXRfaWQgKyBcIiApIGZvciB0aGlzIE1lc2hcIik7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtOk1hdGVyaWFsQmFzZSA9IDxNYXRlcmlhbEJhc2U+IHJldHVybmVkQXJyYXlNYXRlcmlhbFsxXTtcblxuXHRcdFx0bWF0ZXJpYWxzLnB1c2gobSk7XG5cdFx0XHRtYXRlcmlhbE5hbWVzLnB1c2gobS5uYW1lKTtcblxuXHRcdFx0bWF0ZXJpYWxzX3BhcnNlZCsrO1xuXHRcdH1cblxuXHRcdHZhciBtZXNoOk1lc2ggPSBuZXcgTWVzaChnZW9tLCBudWxsKTtcblx0XHRtZXNoLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcblxuXHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XG5cdFx0XHR2YXIgb2JqQzpEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV07XG5cdFx0XHRvYmpDLmFkZENoaWxkKG1lc2gpO1xuXHRcdFx0cGFyZW50TmFtZSA9IG9iakMubmFtZTtcblx0XHR9IGVsc2UgaWYgKHBhcl9pZCA+IDApIHtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IGZvciB0aGlzIE1lc2hcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XG5cdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChtZXNoKTtcblx0XHR9XG5cblx0XHRpZiAobWF0ZXJpYWxzLmxlbmd0aCA+PSAxICYmIG1lc2guc3ViTWVzaGVzLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWxzWzBdO1xuXHRcdH0gZWxzZSBpZiAobWF0ZXJpYWxzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHZhciBpOm51bWJlcjtcblxuXHRcdFx0Ly8gQXNzaWduIGVhY2ggc3ViLW1lc2ggaW4gdGhlIG1lc2ggYSBtYXRlcmlhbCBmcm9tIHRoZSBsaXN0LiBJZiBtb3JlIHN1Yi1tZXNoZXNcblx0XHRcdC8vIHRoYW4gbWF0ZXJpYWxzLCByZXBlYXQgdGhlIGxhc3QgbWF0ZXJpYWwgZm9yIGFsbCByZW1haW5pbmcgc3ViLW1lc2hlcy5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtZXNoLnN1Yk1lc2hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRtZXNoLnN1Yk1lc2hlc1tpXS5tYXRlcmlhbCA9IG1hdGVyaWFsc1tNYXRoLm1pbihtYXRlcmlhbHMubGVuZ3RoIC0gMSwgaSldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoKHRoaXMuX3ZlcnNpb25bMF0gPT0gMikgJiYgKHRoaXMuX3ZlcnNpb25bMV0gPT0gMSkpIHtcblx0XHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6dGhpcy5fbWF0cml4TnJUeXBlLCAyOnRoaXMuX21hdHJpeE5yVHlwZSwgMzp0aGlzLl9tYXRyaXhOclR5cGUsIDQ6QVdEUGFyc2VyLlVJTlQ4LCA1OkFXRFBhcnNlci5CT09MfSk7XG5cdFx0XHRtZXNoLnBpdm90ID0gbmV3IFZlY3RvcjNEKDxudW1iZXI+cHJvcHMuZ2V0KDEsIDApLCA8bnVtYmVyPnByb3BzLmdldCgyLCAwKSwgPG51bWJlcj4gcHJvcHMuZ2V0KDMsIDApKTtcblx0XHRcdG1lc2guY2FzdHNTaGFkb3dzID0gcHJvcHMuZ2V0KDUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHR9XG5cblx0XHRtZXNoLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtZXNoLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IG1lc2g7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTWVzaDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBQYXJlbnQtTmFtZSA9IFwiICsgcGFyZW50TmFtZSArIFwifCBHZW9tZXRyeS1OYW1lID0gXCIgKyBnZW9tLm5hbWUgKyBcIiB8IFN1Yk1lc2hlcyA9IFwiICsgbWVzaC5zdWJNZXNoZXMubGVuZ3RoICsgXCIgfCBNYXQtTmFtZXMgPSBcIiArIG1hdGVyaWFsTmFtZXMudG9TdHJpbmcoKSk7XG5cdFx0fVxuXHR9XG5cblxuXHQvL0Jsb2NrIElEIDMxXG5cdHByaXZhdGUgcGFyc2VTa3lib3hJbnN0YW5jZShibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBjdWJlVGV4QWRkcjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXlDdWJlVGV4OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChjdWJlVGV4QWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSwgXCJDdWJlVGV4dHVyZVwiKTtcblx0XHRpZiAoKCFyZXR1cm5lZEFycmF5Q3ViZVRleFswXSkgJiYgKGN1YmVUZXhBZGRyICE9IDApKVxuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEN1YmV0ZXh0dXJlIChJRCA9IFwiICsgY3ViZVRleEFkZHIgKyBcIiApIGZvciB0aGlzIFNreWJveFwiKTtcblx0XHR2YXIgYXNzZXQ6U2t5Ym94ID0gbmV3IFNreWJveCg8SW1hZ2VDdWJlVGV4dHVyZT4gcmV0dXJuZWRBcnJheUN1YmVUZXhbMV0pO1xuXG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbClcblx0XHRhc3NldC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGFzc2V0LCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2t5Ym94OiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IEN1YmVUZXh0dXJlLU5hbWUgPSBcIiArICg8SW1hZ2VDdWJlVGV4dHVyZT4gcmV0dXJuZWRBcnJheUN1YmVUZXhbMV0pLm5hbWUpO1xuXG5cdH1cblxuXHQvL0Jsb2NrIElEID0gNDFcblx0cHJpdmF0ZSBwYXJzZUxpZ2h0KGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgbGlnaHQ6TGlnaHRCYXNlO1xuXHRcdHZhciBuZXdTaGFkb3dNYXBwZXI6U2hhZG93TWFwcGVyQmFzZTtcblxuXHRcdHZhciBwYXJfaWQ6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHR2YXIgbXR4Ok1hdHJpeDNEID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBsaWdodFR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9wcm9wc05yVHlwZSwgMjp0aGlzLl9wcm9wc05yVHlwZSwgMzpBV0RQYXJzZXIuQ09MT1IsIDQ6dGhpcy5fcHJvcHNOclR5cGUsIDU6dGhpcy5fcHJvcHNOclR5cGUsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkNPTE9SLCA4OnRoaXMuX3Byb3BzTnJUeXBlLCA5OkFXRFBhcnNlci5VSU5UOCwgMTA6QVdEUGFyc2VyLlVJTlQ4LCAxMTp0aGlzLl9wcm9wc05yVHlwZSwgMTI6QVdEUGFyc2VyLlVJTlQxNiwgMjE6dGhpcy5fbWF0cml4TnJUeXBlLCAyMjp0aGlzLl9tYXRyaXhOclR5cGUsIDIzOnRoaXMuX21hdHJpeE5yVHlwZX0pO1xuXHRcdHZhciBzaGFkb3dNYXBwZXJUeXBlOm51bWJlciA9IHByb3BzLmdldCg5LCAwKTtcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xuXHRcdHZhciBsaWdodFR5cGVzOkFycmF5PHN0cmluZz4gPSBbXCJVbnN1cHBvcnRlZCBMaWdodFR5cGVcIiwgXCJQb2ludExpZ2h0XCIsIFwiRGlyZWN0aW9uYWxMaWdodFwiXTtcblx0XHR2YXIgc2hhZG93TWFwcGVyVHlwZXM6QXJyYXk8c3RyaW5nPiA9IFtcIk5vIFNoYWRvd01hcHBlclwiLCBcIkRpcmVjdGlvbmFsU2hhZG93TWFwcGVyXCIsIFwiTmVhckRpcmVjdGlvbmFsU2hhZG93TWFwcGVyXCIsIFwiQ2FzY2FkZVNoYWRvd01hcHBlclwiLCBcIkN1YmVNYXBTaGFkb3dNYXBwZXJcIl07XG5cblx0XHRpZiAobGlnaHRUeXBlID09IDEpIHtcblx0XHRcdGxpZ2h0ID0gbmV3IFBvaW50TGlnaHQoKTtcblxuXHRcdFx0KDxQb2ludExpZ2h0PiBsaWdodCkucmFkaXVzID0gcHJvcHMuZ2V0KDEsIDkwMDAwKTtcblx0XHRcdCg8UG9pbnRMaWdodD4gbGlnaHQpLmZhbGxPZmYgPSBwcm9wcy5nZXQoMiwgMTAwMDAwKTtcblxuXHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPiAwKSB7XG5cdFx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID09IDQpIHtcblx0XHRcdFx0XHRuZXdTaGFkb3dNYXBwZXIgPSBuZXcgQ3ViZU1hcFNoYWRvd01hcHBlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxpZ2h0LnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcblxuXHRcdH1cblxuXHRcdGlmIChsaWdodFR5cGUgPT0gMikge1xuXG5cdFx0XHRsaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KHByb3BzLmdldCgyMSwgMCksIHByb3BzLmdldCgyMiwgLTEpLCBwcm9wcy5nZXQoMjMsIDEpKTtcblxuXHRcdFx0aWYgKHNoYWRvd01hcHBlclR5cGUgPiAwKSB7XG5cdFx0XHRcdGlmIChzaGFkb3dNYXBwZXJUeXBlID09IDEpIHtcblx0XHRcdFx0XHRuZXdTaGFkb3dNYXBwZXIgPSBuZXcgRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXIoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vaWYgKHNoYWRvd01hcHBlclR5cGUgPT0gMilcblx0XHRcdFx0Ly8gIG5ld1NoYWRvd01hcHBlciA9IG5ldyBOZWFyRGlyZWN0aW9uYWxTaGFkb3dNYXBwZXIocHJvcHMuZ2V0KDExLCAwLjUpKTtcblx0XHRcdFx0Ly9pZiAoc2hhZG93TWFwcGVyVHlwZSA9PSAzKVxuXHRcdFx0XHQvLyAgIG5ld1NoYWRvd01hcHBlciA9IG5ldyBDYXNjYWRlU2hhZG93TWFwcGVyKHByb3BzLmdldCgxMiwgMykpO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0bGlnaHQuY29sb3IgPSBwcm9wcy5nZXQoMywgMHhmZmZmZmYpO1xuXHRcdGxpZ2h0LnNwZWN1bGFyID0gcHJvcHMuZ2V0KDQsIDEuMCk7XG5cdFx0bGlnaHQuZGlmZnVzZSA9IHByb3BzLmdldCg1LCAxLjApO1xuXHRcdGxpZ2h0LmFtYmllbnRDb2xvciA9IHByb3BzLmdldCg3LCAweGZmZmZmZik7XG5cdFx0bGlnaHQuYW1iaWVudCA9IHByb3BzLmdldCg4LCAwLjApO1xuXG5cdFx0Ly8gaWYgYSBzaGFkb3dNYXBwZXIgaGFzIGJlZW4gY3JlYXRlZCwgYWRqdXN0IHRoZSBkZXB0aE1hcFNpemUgaWYgbmVlZGVkLCBhc3NpZ24gdG8gbGlnaHQgYW5kIHNldCBjYXN0U2hhZG93cyB0byB0cnVlXG5cdFx0aWYgKG5ld1NoYWRvd01hcHBlcikge1xuXHRcdFx0aWYgKG5ld1NoYWRvd01hcHBlciBpbnN0YW5jZW9mIEN1YmVNYXBTaGFkb3dNYXBwZXIpIHtcblx0XHRcdFx0aWYgKHByb3BzLmdldCgxMCwgMSkgIT0gMSkge1xuXHRcdFx0XHRcdG5ld1NoYWRvd01hcHBlci5kZXB0aE1hcFNpemUgPSB0aGlzLl9kZXB0aFNpemVEaWNbcHJvcHMuZ2V0KDEwLCAxKV07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChwcm9wcy5nZXQoMTAsIDIpICE9IDIpIHtcblx0XHRcdFx0XHRuZXdTaGFkb3dNYXBwZXIuZGVwdGhNYXBTaXplID0gdGhpcy5fZGVwdGhTaXplRGljW3Byb3BzLmdldCgxMCwgMildO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxpZ2h0LnNoYWRvd01hcHBlciA9IG5ld1NoYWRvd01hcHBlcjtcblx0XHRcdGxpZ2h0LmNhc3RzU2hhZG93cyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcl9pZCAhPSAwKSB7XG5cblx0XHRcdHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcblxuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlQYXJlbnRbMF0pIHtcblx0XHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5UGFyZW50WzFdKS5hZGRDaGlsZChsaWdodCk7XG5cdFx0XHRcdHBhcmVudE5hbWUgPSAoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHJldHVybmVkQXJyYXlQYXJlbnRbMV0pLm5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhIHBhcmVudCBmb3IgdGhpcyBMaWdodFwiKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9hZGQgdG8gdGhlIGNvbnRlbnQgcHJvcGVydHlcblx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKGxpZ2h0KTtcblx0XHR9XG5cblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblxuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDwgSUFzc2V0PiBsaWdodCwgbmFtZSk7XG5cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGxpZ2h0O1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBMaWdodDogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUeXBlID0gXCIgKyBsaWdodFR5cGVzW2xpZ2h0VHlwZV0gKyBcIiB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lICsgXCIgfCBTaGFkb3dNYXBwZXItVHlwZSA9IFwiICsgc2hhZG93TWFwcGVyVHlwZXNbc2hhZG93TWFwcGVyVHlwZV0pO1xuXG5cdH1cblxuXHQvL0Jsb2NrIElEID0gNDNcblx0cHJpdmF0ZSBwYXJzZUNhbWVyYShibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIG10eDpNYXRyaXgzRCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgcGFyZW50TmFtZTpzdHJpbmcgPSBcIlJvb3QgKFRvcExldmVsKVwiO1xuXHRcdHZhciBwcm9qZWN0aW9uOlByb2plY3Rpb25CYXNlO1xuXG5cdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7IC8vc2V0IGFzIGFjdGl2ZSBjYW1lcmFcblx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpOyAvL2xlbmd0aG9mIGxlbnNlcyAtIG5vdCB1c2VkIHlldFxuXG5cdFx0dmFyIHByb2plY3Rpb250eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMTA0OnRoaXMuX3Byb3BzTnJUeXBlfSk7XG5cblx0XHRzd2l0Y2ggKHByb2plY3Rpb250eXBlKSB7XG5cdFx0XHRjYXNlIDUwMDE6XG5cdFx0XHRcdHByb2plY3Rpb24gPSBuZXcgUGVyc3BlY3RpdmVQcm9qZWN0aW9uKHByb3BzLmdldCgxMDEsIDYwKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA1MDAyOlxuXHRcdFx0XHRwcm9qZWN0aW9uID0gbmV3IE9ydGhvZ3JhcGhpY1Byb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgNTAwKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA1MDAzOlxuXHRcdFx0XHRwcm9qZWN0aW9uID0gbmV3IE9ydGhvZ3JhcGhpY09mZkNlbnRlclByb2plY3Rpb24ocHJvcHMuZ2V0KDEwMSwgLTQwMCksIHByb3BzLmdldCgxMDIsIDQwMCksIHByb3BzLmdldCgxMDMsIC0zMDApLCBwcm9wcy5nZXQoMTA0LCAzMDApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInVuc3VwcG9ydGVkTGVuc3R5cGVcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY2FtZXJhOkNhbWVyYSA9IG5ldyBDYW1lcmEocHJvamVjdGlvbik7XG5cdFx0Y2FtZXJhLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcblxuXHRcdHZhciByZXR1cm5lZEFycmF5UGFyZW50OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwYXJfaWQsIFtBc3NldFR5cGUuQ09OVEFJTkVSLCBBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5NRVNIXSlcblxuXHRcdGlmIChyZXR1cm5lZEFycmF5UGFyZW50WzBdKSB7XG5cblx0XHRcdHZhciBvYmpDOkRpc3BsYXlPYmplY3RDb250YWluZXIgPSA8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gcmV0dXJuZWRBcnJheVBhcmVudFsxXTtcblx0XHRcdG9iakMuYWRkQ2hpbGQoY2FtZXJhKTtcblxuXHRcdFx0cGFyZW50TmFtZSA9IG9iakMubmFtZTtcblxuXHRcdH0gZWxzZSBpZiAocGFyX2lkID4gMCkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwYXJlbnQgZm9yIHRoaXMgQ2FtZXJhXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxuXHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQoY2FtZXJhKTtcblx0XHR9XG5cblx0XHRjYW1lcmEubmFtZSA9IG5hbWU7XG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTp0aGlzLl9tYXRyaXhOclR5cGUsIDI6dGhpcy5fbWF0cml4TnJUeXBlLCAzOnRoaXMuX21hdHJpeE5yVHlwZSwgNDpBV0RQYXJzZXIuVUlOVDh9KTtcblx0XHRjYW1lcmEucGl2b3QgPSBuZXcgVmVjdG9yM0QocHJvcHMuZ2V0KDEsIDApLCBwcm9wcy5nZXQoMiwgMCksIHByb3BzLmdldCgzLCAwKSk7XG5cdFx0Y2FtZXJhLmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChjYW1lcmEsIG5hbWUpO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjYW1lcmFcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBDYW1lcmE6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgUHJvamVjdGlvbnR5cGUgPSBcIiArIHByb2plY3Rpb24gKyBcIiB8IFBhcmVudC1OYW1lID0gXCIgKyBwYXJlbnROYW1lKTtcblx0XHR9XG5cblx0fVxuXG5cdC8vQmxvY2sgSUQgPSA1MVxuXHRwcml2YXRlIHBhcnNlTGlnaHRQaWNrZXIoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgbnVtTGlnaHRzOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgbGlnaHRzQXJyYXk6QXJyYXk8TGlnaHRCYXNlPiA9IG5ldyBBcnJheTxMaWdodEJhc2U+KCk7XG5cdFx0dmFyIGs6bnVtYmVyID0gMDtcblx0XHR2YXIgbGlnaHRJRDpudW1iZXIgPSAwO1xuXG5cdFx0dmFyIHJldHVybmVkQXJyYXlMaWdodDpBcnJheTxhbnk+O1xuXHRcdHZhciBsaWdodHNBcnJheU5hbWVzOkFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG5cdFx0Zm9yIChrID0gMDsgayA8IG51bUxpZ2h0czsgaysrKSB7XG5cdFx0XHRsaWdodElEID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdHJldHVybmVkQXJyYXlMaWdodCA9IHRoaXMuZ2V0QXNzZXRCeUlEKGxpZ2h0SUQsIFtBc3NldFR5cGUuTElHSFRdKVxuXG5cdFx0XHRpZiAocmV0dXJuZWRBcnJheUxpZ2h0WzBdKSB7XG5cdFx0XHRcdGxpZ2h0c0FycmF5LnB1c2goPExpZ2h0QmFzZT4gcmV0dXJuZWRBcnJheUxpZ2h0WzFdKTtcblx0XHRcdFx0bGlnaHRzQXJyYXlOYW1lcy5wdXNoKCggPExpZ2h0QmFzZT4gcmV0dXJuZWRBcnJheUxpZ2h0WzFdKS5uYW1lKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBMaWdodCBOciBcIiArIGsgKyBcIiAoSUQgPSBcIiArIGxpZ2h0SUQgKyBcIiApIGZvciB0aGlzIExpZ2h0UGlja2VyXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChsaWdodHNBcnJheS5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSB0aGlzIExpZ2h0UGlja2VyLCBjYXVzZSBubyBMaWdodCB3YXMgZm91bmQuXCIpO1xuXHRcdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0XHRyZXR1cm47IC8vcmV0dXJuIHdpdGhvdXQgYW55IG1vcmUgcGFyc2luZyBmb3IgdGhpcyBibG9ja1xuXHRcdH1cblxuXHRcdHZhciBsaWdodFBpY2s6TGlnaHRQaWNrZXJCYXNlID0gbmV3IFN0YXRpY0xpZ2h0UGlja2VyKGxpZ2h0c0FycmF5KTtcblx0XHRsaWdodFBpY2submFtZSA9IG5hbWU7XG5cblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBsaWdodFBpY2ssIG5hbWUpO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBsaWdodFBpY2tcblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU3RhdGljTGlnaHRQaWNrZXI6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyBsaWdodHNBcnJheU5hbWVzLnRvU3RyaW5nKCkpO1xuXHRcdH1cblx0fVxuXG5cdC8vQmxvY2sgSUQgPSA4MVxuXHRwcml2YXRlIHBhcnNlTWF0ZXJpYWwoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdC8vIFRPRE86IG5vdCB1c2VkXG5cdFx0Ly8vL2Jsb2NrTGVuZ3RoID0gYmxvY2subGVuO1xuXHRcdHZhciBuYW1lOnN0cmluZztcblx0XHR2YXIgdHlwZTpudW1iZXI7XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXM7XG5cdFx0dmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcblx0XHR2YXIgYXR0cmlidXRlczpPYmplY3Q7XG5cdFx0dmFyIGZpbmFsaXplOmJvb2xlYW47XG5cdFx0dmFyIG51bV9tZXRob2RzOm51bWJlcjtcblx0XHR2YXIgbWV0aG9kc19wYXJzZWQ6bnVtYmVyO1xuXHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT47XG5cblx0XHRuYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHR5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRudW1fbWV0aG9kcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXG5cdFx0Ly8gUmVhZCBtYXRlcmlhbCBudW1lcmljYWwgcHJvcGVydGllc1xuXHRcdC8vICgxPWNvbG9yLCAyPWJpdG1hcCB1cmwsIDEwPWFscGhhLCAxMT1hbHBoYV9ibGVuZGluZywgMTI9YWxwaGFfdGhyZXNob2xkLCAxMz1yZXBlYXQpXG5cdFx0cHJvcHMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7IDE6QVdEUGFyc2VyLklOVDMyLCAyOkFXRFBhcnNlci5CQUREUiwgMTA6dGhpcy5fcHJvcHNOclR5cGUsIDExOkFXRFBhcnNlci5CT09MLCAxMjp0aGlzLl9wcm9wc05yVHlwZSwgMTM6QVdEUGFyc2VyLkJPT0x9KTtcblxuXHRcdG1ldGhvZHNfcGFyc2VkID0gMDtcblx0XHR3aGlsZSAobWV0aG9kc19wYXJzZWQgPCBudW1fbWV0aG9kcykge1xuXHRcdFx0dmFyIG1ldGhvZF90eXBlOm51bWJlcjtcblxuXHRcdFx0bWV0aG9kX3R5cGUgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdFx0bWV0aG9kc19wYXJzZWQgKz0gMTtcblx0XHR9XG5cdFx0dmFyIGRlYnVnU3RyaW5nOnN0cmluZyA9IFwiXCI7XG5cdFx0YXR0cmlidXRlcyA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdGlmICh0eXBlID09PSAxKSB7IC8vIENvbG9yIG1hdGVyaWFsXG5cdFx0XHRkZWJ1Z1N0cmluZyArPSBcIlBhcnNlZCBhIENvbG9yTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgXCI7XG5cdFx0XHR2YXIgY29sb3I6bnVtYmVyO1xuXHRcdFx0Y29sb3IgPSBwcm9wcy5nZXQoMSwgMHhmZmZmZmYpO1xuXHRcdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlIDwgMikge1xuXHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IsIHByb3BzLmdldCgxMCwgMS4wKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IpO1xuXHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gMikge1xuXHRcdFx0dmFyIHRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTtcblxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcblxuXHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHRleF9hZGRyID4gMCkpXG5cdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBEaWZmc3VlVGV4dHVyZSAoSUQgPSBcIiArIHRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNYXRlcmlhbFwiKTtcblxuXHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKTtcblxuXHRcdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlIDwgMikge1xuXHRcdFx0XHRtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xuXHRcdFx0XHRtYXQuYWxwaGEgPSBwcm9wcy5nZXQoMTAsIDEuMCk7XG5cdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoU2luZ2xlUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgVGV4dHVyZS1OYW1lID0gXCIgKyBtYXQubmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdC5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XG5cdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiUGFyc2VkIGEgTWV0aG9kTWF0ZXJpYWwoTXVsdGlQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIG1hdC5uYW1lO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG1hdC5leHRyYSA9IGF0dHJpYnV0ZXM7XG5cdFx0bWF0LmFscGhhVGhyZXNob2xkID0gcHJvcHMuZ2V0KDEyLCAwLjApO1xuXHRcdG1hdC5yZXBlYXQgPSBwcm9wcy5nZXQoMTMsIGZhbHNlKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtYXQsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWF0O1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhkZWJ1Z1N0cmluZyk7XG5cblx0XHR9XG5cdH1cblxuXHQvLyBCbG9jayBJRCA9IDgxIEFXRDIuMVxuXHRwcml2YXRlIHBhcnNlTWF0ZXJpYWxfdjEoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBtYXQ6TWV0aG9kTWF0ZXJpYWw7XG5cdFx0dmFyIG5vcm1hbFRleHR1cmU6VGV4dHVyZTJEQmFzZTtcblx0XHR2YXIgc3BlY1RleHR1cmU6VGV4dHVyZTJEQmFzZTtcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xuXG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciB0eXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdHZhciBudW1fbWV0aG9kczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMzIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgNDpBV0RQYXJzZXIuVUlOVDgsIDU6QVdEUGFyc2VyLkJPT0wsIDY6QVdEUGFyc2VyLkJPT0wsIDc6QVdEUGFyc2VyLkJPT0wsIDg6QVdEUGFyc2VyLkJPT0wsIDk6QVdEUGFyc2VyLlVJTlQ4LCAxMDp0aGlzLl9wcm9wc05yVHlwZSwgMTE6QVdEUGFyc2VyLkJPT0wsIDEyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMzpBV0RQYXJzZXIuQk9PTCwgMTU6dGhpcy5fcHJvcHNOclR5cGUsIDE2OkFXRFBhcnNlci5VSU5UMzIsIDE3OkFXRFBhcnNlci5CQUREUiwgMTg6dGhpcy5fcHJvcHNOclR5cGUsIDE5OnRoaXMuX3Byb3BzTnJUeXBlLCAyMDpBV0RQYXJzZXIuVUlOVDMyLCAyMTpBV0RQYXJzZXIuQkFERFIsIDIyOkFXRFBhcnNlci5CQUREUn0pO1xuXHRcdHZhciBzcGV6aWFsVHlwZTpudW1iZXIgPSBwcm9wcy5nZXQoNCwgMCk7XG5cdFx0dmFyIGRlYnVnU3RyaW5nOnN0cmluZyA9IFwiUGFyc2VkIE1hdGVyaWFsIFwiO1xuXG5cdFx0aWYgKHNwZXppYWxUeXBlID49IDIpIHsvL3RoaXMgaXMgbm8gc3VwcG9ydGVkIG1hdGVyaWFsXG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJNYXRlcmlhbC1zcGV6aWFsVHlwZSAnXCIgKyBzcGV6aWFsVHlwZSArIFwiJyBpcyBub3Qgc3VwcG9ydGVkLCBjYW4gb25seSBiZSAwOnNpbmdsZVBhc3MsIDE6TXVsdGlQYXNzICFcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgPD0gMikgey8vIENvbG9yIG1hdGVyaWFsXG5cdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPT0gMSlcblx0XHRcdFx0c3BlemlhbFR5cGUgPSAwO1xuXHRcdFx0ZWxzZSBpZiAodGhpcy5tYXRlcmlhbE1vZGUgPT0gMilcblx0XHRcdFx0c3BlemlhbFR5cGUgPSAxO1xuXG5cdFx0XHRpZiAoc3BlemlhbFR5cGUgPCAyKSB7Ly90aGlzIGlzIFNpbmdsZVBhc3Mgb3IgTXVsdGlQYXNzXG5cblx0XHRcdFx0aWYgKHR5cGUgPT0gMSkgey8vIENvbG9yIG1hdGVyaWFsXG5cdFx0XHRcdFx0dmFyIGNvbG9yOm51bWJlciA9IHByb3BzLmdldCgxLCAweGNjY2NjYyk7Ly9UT0RPIHRlbXBvcmFyaWx5IHN3YXBwZWQgc28gdGhhdCBkaWZmdXNlIGNvbG9yIGdvZXMgdG8gYW1iaWVudFxuXG5cdFx0XHRcdFx0aWYgKHNwZXppYWxUeXBlID09IDEpIHsvL1x0TXVsdGlQYXNzTWF0ZXJpYWxcblx0XHRcdFx0XHRcdG1hdCA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvcik7XG5cdFx0XHRcdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBDb2xvck1hdGVyaWFsKE11bHRpUGFzcyk6IE5hbWUgPSAnXCIgKyBuYW1lICsgXCInIHwgXCI7XG5cblx0XHRcdFx0XHR9IGVsc2UgeyAvL1x0U2luZ2xlUGFzc01hdGVyaWFsXG5cdFx0XHRcdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IsIHByb3BzLmdldCgxMCwgMS4wKSk7XG5cdFx0XHRcdFx0XHRtYXQuYWxwaGFCbGVuZGluZyA9IHByb3BzLmdldCgxMSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBDb2xvck1hdGVyaWFsKFNpbmdsZVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFwiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gMikgey8vIHRleHR1cmUgbWF0ZXJpYWxcblx0XHRcdFx0XHR2YXIgdGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIsIDApOy8vVE9ETyB0ZW1wb3JhcmlseSBzd2FwcGVkIHNvIHRoYXQgZGlmZnVzZSB0ZXh0dXJlIGdvZXMgdG8gYW1iaWVudFxuXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0ZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cblx0XHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAodGV4X2FkZHIgPiAwKSlcblx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbWJpZW50VGV4dHVyZSAoSUQgPSBcIiArIHRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcblxuXHRcdFx0XHRcdHZhciB0ZXh0dXJlOlRleHR1cmUyREJhc2UgPSByZXR1cm5lZEFycmF5WzFdO1xuXG5cdFx0XHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKHRleHR1cmUpO1xuXG5cdFx0XHRcdFx0aWYgKHNwZXppYWxUeXBlID09IDEpIHsvLyBNdWx0aVBhc3NNYXRlcmlhbFxuXHRcdFx0XHRcdFx0bWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcblxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChNdWx0aVBhc3MpOiBOYW1lID0gJ1wiICsgbmFtZSArIFwiJyB8IFRleHR1cmUtTmFtZSA9IFwiICsgdGV4dHVyZS5uYW1lO1xuXHRcdFx0XHRcdH0gZWxzZSB7Ly9cdFNpbmdsZVBhc3NNYXRlcmlhbFxuXHRcdFx0XHRcdFx0bWF0LmFscGhhID0gcHJvcHMuZ2V0KDEwLCAxLjApO1xuXHRcdFx0XHRcdFx0bWF0LmFscGhhQmxlbmRpbmcgPSBwcm9wcy5nZXQoMTEsIGZhbHNlKTtcblxuXHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCJQYXJzZWQgYSBNZXRob2RNYXRlcmlhbChTaW5nbGVQYXNzKTogTmFtZSA9ICdcIiArIG5hbWUgKyBcIicgfCBUZXh0dXJlLU5hbWUgPSBcIiArIHRleHR1cmUubmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZGlmZnVzZVRleHR1cmU6VGV4dHVyZTJEQmFzZTtcblx0XHRcdFx0dmFyIGRpZmZ1c2VUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMTcsIDApO1xuXG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChkaWZmdXNlVGV4X2FkZHIsIFtBc3NldFR5cGUuVEVYVFVSRV0pO1xuXG5cdFx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChkaWZmdXNlVGV4X2FkZHIgIT0gMCkpIHtcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRGlmZnVzZVRleHR1cmUgKElEID0gXCIgKyBkaWZmdXNlVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0ZGlmZnVzZVRleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xuXG5cdFx0XHRcdGlmIChkaWZmdXNlVGV4dHVyZSkge1xuXHRcdFx0XHRcdG1hdC5kaWZmdXNlVGV4dHVyZSA9IGRpZmZ1c2VUZXh0dXJlO1xuXHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZVRleHR1cmUtTmFtZSA9IFwiICsgZGlmZnVzZVRleHR1cmUubmFtZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBub3JtYWxUZXhfYWRkcjpudW1iZXIgPSBwcm9wcy5nZXQoMywgMCk7XG5cblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKG5vcm1hbFRleF9hZGRyLCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcblxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAobm9ybWFsVGV4X2FkZHIgIT0gMCkpIHtcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTm9ybWFsVGV4dHVyZSAoSUQgPSBcIiArIG5vcm1hbFRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0bm9ybWFsVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XG5cdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArIG5vcm1hbFRleHR1cmUubmFtZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBzcGVjVGV4X2FkZHI6bnVtYmVyID0gcHJvcHMuZ2V0KDIxLCAwKTtcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHNwZWNUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cblx0XHRcdFx0aWYgKCghcmV0dXJuZWRBcnJheVswXSkgJiYgKHNwZWNUZXhfYWRkciAhPSAwKSkge1xuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTcGVjdWxhclRleHR1cmUgKElEID0gXCIgKyBzcGVjVGV4X2FkZHIgKyBcIiApIGZvciB0aGlzIE1ldGhvZE1hdGVyaWFsXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0c3BlY1RleHR1cmUgPSByZXR1cm5lZEFycmF5WzFdO1xuXHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJUZXh0dXJlLU5hbWUgPSBcIiArIHNwZWNUZXh0dXJlLm5hbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgbGlnaHRQaWNrZXJBZGRyOm51bWJlciA9IHByb3BzLmdldCgyMiwgMCk7XG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChsaWdodFBpY2tlckFkZHIsIFtBc3NldFR5cGUuTElHSFRfUElDS0VSXSlcblxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5WzBdKSAmJiAobGlnaHRQaWNrZXJBZGRyKSkge1xuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBMaWdodFBpY2tlciAoSUQgPSBcIiArIGxpZ2h0UGlja2VyQWRkciArIFwiICkgZm9yIHRoaXMgTWV0aG9kTWF0ZXJpYWxcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWF0LmxpZ2h0UGlja2VyID0gPExpZ2h0UGlja2VyQmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcblx0XHRcdFx0XHQvL2RlYnVnU3RyaW5nKz1cIiB8IExpZ2h0cGlja2VyLU5hbWUgPSBcIitMaWdodFBpY2tlckJhc2UocmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hdC5zbW9vdGggPSBwcm9wcy5nZXQoNSwgdHJ1ZSk7XG5cdFx0XHRcdG1hdC5taXBtYXAgPSBwcm9wcy5nZXQoNiwgdHJ1ZSk7XG5cdFx0XHRcdG1hdC5ib3RoU2lkZXMgPSBwcm9wcy5nZXQoNywgZmFsc2UpO1xuXHRcdFx0XHRtYXQuYWxwaGFQcmVtdWx0aXBsaWVkID0gcHJvcHMuZ2V0KDgsIGZhbHNlKTtcblx0XHRcdFx0bWF0LmJsZW5kTW9kZSA9IHRoaXMuYmxlbmRNb2RlRGljW3Byb3BzLmdldCg5LCAwKV07XG5cdFx0XHRcdG1hdC5yZXBlYXQgPSBwcm9wcy5nZXQoMTMsIGZhbHNlKTtcblxuXHRcdFx0XHRpZiAobm9ybWFsVGV4dHVyZSlcblx0XHRcdFx0XHRtYXQubm9ybWFsTWFwID0gbm9ybWFsVGV4dHVyZTtcblxuXHRcdFx0XHRpZiAoc3BlY1RleHR1cmUpXG5cdFx0XHRcdFx0bWF0LnNwZWN1bGFyTWFwID0gc3BlY1RleHR1cmU7XG5cblx0XHRcdFx0bWF0LmFscGhhVGhyZXNob2xkID0gcHJvcHMuZ2V0KDEyLCAwLjApO1xuXHRcdFx0XHRtYXQuYW1iaWVudCA9IHByb3BzLmdldCgxNSwgMS4wKTtcblx0XHRcdFx0bWF0LmRpZmZ1c2VDb2xvciA9IHByb3BzLmdldCgxNiwgMHhmZmZmZmYpO1xuXHRcdFx0XHRtYXQuc3BlY3VsYXIgPSBwcm9wcy5nZXQoMTgsIDEuMCk7XG5cdFx0XHRcdG1hdC5nbG9zcyA9IHByb3BzLmdldCgxOSwgNTApO1xuXHRcdFx0XHRtYXQuc3BlY3VsYXJDb2xvciA9IHByb3BzLmdldCgyMCwgMHhmZmZmZmYpO1xuXG5cdFx0XHRcdHZhciBtZXRob2RzX3BhcnNlZDpudW1iZXIgPSAwO1xuXHRcdFx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyO1xuXG5cdFx0XHRcdHdoaWxlIChtZXRob2RzX3BhcnNlZCA8IG51bV9tZXRob2RzKSB7XG5cdFx0XHRcdFx0dmFyIG1ldGhvZF90eXBlOm51bWJlcjtcblx0XHRcdFx0XHRtZXRob2RfdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblxuXHRcdFx0XHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoe1xuXHRcdFx0XHRcdFx0MTogQVdEUGFyc2VyLkJBRERSLFxuXHRcdFx0XHRcdFx0MjogQVdEUGFyc2VyLkJBRERSLFxuXHRcdFx0XHRcdFx0MzogQVdEUGFyc2VyLkJBRERSLFxuXHRcdFx0XHRcdFx0MTAxOiB0aGlzLl9wcm9wc05yVHlwZSxcblx0XHRcdFx0XHRcdDEwMjogdGhpcy5fcHJvcHNOclR5cGUsXG5cdFx0XHRcdFx0XHQxMDM6IHRoaXMuX3Byb3BzTnJUeXBlLFxuXHRcdFx0XHRcdFx0MjAxOiBBV0RQYXJzZXIuVUlOVDMyLFxuXHRcdFx0XHRcdFx0MjAyOiBBV0RQYXJzZXIuVUlOVDMyLFxuXHRcdFx0XHRcdFx0MzAxOiBBV0RQYXJzZXIuVUlOVDE2LFxuXHRcdFx0XHRcdFx0MzAyOiBBV0RQYXJzZXIuVUlOVDE2LFxuXHRcdFx0XHRcdFx0NDAxOiBBV0RQYXJzZXIuVUlOVDgsXG5cdFx0XHRcdFx0XHQ0MDI6IEFXRFBhcnNlci5VSU5UOCxcblx0XHRcdFx0XHRcdDYwMTogQVdEUGFyc2VyLkNPTE9SLFxuXHRcdFx0XHRcdFx0NjAyOiBBV0RQYXJzZXIuQ09MT1IsXG5cdFx0XHRcdFx0XHQ3MDE6IEFXRFBhcnNlci5CT09MLFxuXHRcdFx0XHRcdFx0NzAyOiBBV0RQYXJzZXIuQk9PTCxcblx0XHRcdFx0XHRcdDgwMTogQVdEUGFyc2VyLk1UWDR4NFxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0c3dpdGNoIChtZXRob2RfdHlwZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSA5OTk6IC8vd3JhcHBlci1NZXRob2RzIHRoYXQgd2lsbCBsb2FkIGEgcHJldmlvdXMgcGFyc2VkIEVmZmVrdE1ldGhvZCByZXR1cm5lZFxuXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuRUZGRUNUU19NRVRIT0RdKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRWZmZWN0TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG1hdC5hZGRFZmZlY3RNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XG5cblx0XHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IEVmZmVjdE1ldGhvZC1OYW1lID0gXCIgKyAoPEVmZmVjdE1ldGhvZEJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSA5OTg6IC8vd3JhcHBlci1NZXRob2RzIHRoYXQgd2lsbCBsb2FkIGEgcHJldmlvdXMgcGFyc2VkIFNoYWRvd01hcE1ldGhvZFxuXG5cdFx0XHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2hhZG93TWV0aG9kIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIE1hdGVyaWFsXCIpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG1hdC5zaGFkb3dNZXRob2QgPSByZXR1cm5lZEFycmF5WzFdO1xuXHRcdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU2hhZG93TWV0aG9kLU5hbWUgPSBcIiArICg8U2hhZG93TWV0aG9kQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRjYXNlIDE6IC8vRW52TWFwQW1iaWVudE1ldGhvZFxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xuXHRcdFx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBFbnZNYXBBbWJpZW50TWV0aG9kTWF0ZXJpYWxcIik7XG5cdFx0XHRcdFx0XHRcdG1hdC5hbWJpZW50TWV0aG9kID0gbmV3IEFtYmllbnRFbnZNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgQW1iaWVudEVudk1hcE1ldGhvZCB8IEVudk1hcC1OYW1lID1cIiArICg8Q3ViZVRleHR1cmVCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSA1MTogLy9EZXB0aERpZmZ1c2VNZXRob2Rcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZURlcHRoTWV0aG9kKCk7XG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZURlcHRoTWV0aG9kXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA1MjogLy9HcmFkaWVudERpZmZ1c2VNZXRob2Rcblx0XHRcdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgR3JhZGllbnREaWZmdXNlVGV4dHVyZSAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBHcmFkaWVudERpZmZ1c2VNZXRob2RcIik7XG5cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VHcmFkaWVudE1ldGhvZChyZXR1cm5lZEFycmF5WzFdKTtcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlR3JhZGllbnRNZXRob2QgfCBHcmFkaWVudERpZmZ1c2VUZXh0dXJlLU5hbWUgPVwiICsgKDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdKS5uYW1lO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNTM6IC8vV3JhcERpZmZ1c2VNZXRob2Rcblx0XHRcdFx0XHRcdFx0bWF0LmRpZmZ1c2VNZXRob2QgPSBuZXcgRGlmZnVzZVdyYXBNZXRob2QocHJvcHMuZ2V0KDEwMSwgNSkpO1xuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IERpZmZ1c2VXcmFwTWV0aG9kXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA1NDogLy9MaWdodE1hcERpZmZ1c2VNZXRob2Rcblx0XHRcdFx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTGlnaHRNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgTGlnaHRNYXBEaWZmdXNlTWV0aG9kXCIpO1xuXHRcdFx0XHRcdFx0XHRtYXQuZGlmZnVzZU1ldGhvZCA9IG5ldyBEaWZmdXNlTGlnaHRNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSwgdGhpcy5ibGVuZE1vZGVEaWNbcHJvcHMuZ2V0KDQwMSwgMTApXSwgZmFsc2UsIG1hdC5kaWZmdXNlTWV0aG9kKTtcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlTGlnaHRNYXBNZXRob2QgfCBMaWdodE1hcFRleHR1cmUtTmFtZSA9XCIgKyAoPFRleHR1cmUyREJhc2U+IHJldHVybmVkQXJyYXlbMV0pLm5hbWU7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA1NTogLy9DZWxEaWZmdXNlTWV0aG9kXG5cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VDZWxNZXRob2QocHJvcHMuZ2V0KDQwMSwgMyksIG1hdC5kaWZmdXNlTWV0aG9kKTtcblx0XHRcdFx0XHRcdFx0KDxEaWZmdXNlQ2VsTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkuc21vb3RobmVzcyA9IHByb3BzLmdldCgxMDEsIDAuMSk7XG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgRGlmZnVzZUNlbE1ldGhvZFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNTY6IC8vU3ViU3VyZmFjZVNjYXR0ZXJpbmdNZXRob2Rcblx0XHRcdFx0XHRcdFx0Ly9cdFx0XHRcdFx0XHRcdG1hdC5kaWZmdXNlTWV0aG9kID0gbmV3IERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kKCk7IC8vZGVwdGhNYXBTaXplIGFuZCBkZXB0aE1hcE9mZnNldCA/XG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkuc2NhdHRlcmluZyA9IHByb3BzLmdldCgxMDEsIDAuMik7XG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkudHJhbnNsdWNlbmN5ID0gcHJvcHMuZ2V0KDEwMiwgMSk7XG5cdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XHQoPERpZmZ1c2VTdWJTdXJmYWNlTWV0aG9kPiBtYXQuZGlmZnVzZU1ldGhvZCkuc2NhdHRlckNvbG9yID0gcHJvcHMuZ2V0KDYwMSwgMHhmZmZmZmYpO1xuXHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBEaWZmdXNlU3ViU3VyZmFjZU1ldGhvZFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSAxMDE6IC8vQW5pc290cm9waWNTcGVjdWxhck1ldGhvZFxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJBbmlzb3Ryb3BpY01ldGhvZCgpO1xuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyQW5pc290cm9waWNNZXRob2RcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDEwMjogLy9TcGVjdWxhclBob25nTWV0aG9kXG5cdFx0XHRcdFx0XHRcdG1hdC5zcGVjdWxhck1ldGhvZCA9IG5ldyBTcGVjdWxhclBob25nTWV0aG9kKCk7XG5cdFx0XHRcdFx0XHRcdGRlYnVnU3RyaW5nICs9IFwiIHwgU3BlY3VsYXJQaG9uZ01ldGhvZFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgMTAzOiAvL0NlbGxTcGVjdWxhck1ldGhvZFxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJDZWxNZXRob2QocHJvcHMuZ2V0KDEwMSwgMC41KSwgbWF0LnNwZWN1bGFyTWV0aG9kKTtcblx0XHRcdFx0XHRcdFx0KDxTcGVjdWxhckNlbE1ldGhvZD4gbWF0LnNwZWN1bGFyTWV0aG9kKS5zbW9vdGhuZXNzID0gcHJvcHMuZ2V0KDEwMiwgMC4xKTtcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBTcGVjdWxhckNlbE1ldGhvZFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgMTA0OiAvL1NwZWN1bGFyRnJlc25lbE1ldGhvZFxuXHRcdFx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJGcmVzbmVsTWV0aG9kKHByb3BzLmdldCg3MDEsIHRydWUpLCBtYXQuc3BlY3VsYXJNZXRob2QpO1xuXHRcdFx0XHRcdFx0XHQoPFNwZWN1bGFyRnJlc25lbE1ldGhvZD4gbWF0LnNwZWN1bGFyTWV0aG9kKS5mcmVzbmVsUG93ZXIgPSBwcm9wcy5nZXQoMTAxLCA1KTtcblx0XHRcdFx0XHRcdFx0KDxTcGVjdWxhckZyZXNuZWxNZXRob2Q+IG1hdC5zcGVjdWxhck1ldGhvZCkubm9ybWFsUmVmbGVjdGFuY2UgPSBwcm9wcy5nZXQoMTAyLCAwLjEpO1xuXHRcdFx0XHRcdFx0XHRkZWJ1Z1N0cmluZyArPSBcIiB8IFNwZWN1bGFyRnJlc25lbE1ldGhvZFwiO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgMTUxOi8vSGVpZ2h0TWFwTm9ybWFsTWV0aG9kIC0gdGhpb3MgaXMgbm90IGltcGxlbWVudGVkIGZvciBub3csIGJ1dCBtaWdodCBhcHBlYXIgbGF0ZXJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDE1MjogLy9TaW1wbGVXYXRlck5vcm1hbE1ldGhvZFxuXHRcdFx0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcblx0XHRcdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBTZWNvdW5kTm9ybWFsTWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFNpbXBsZVdhdGVyTm9ybWFsTWV0aG9kXCIpO1xuXHRcdFx0XHRcdFx0XHRpZiAoIW1hdC5ub3JtYWxNYXApXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBub3JtYWwgTWFwIG9uIHRoaXMgTWF0ZXJpYWwgdG8gdXNlIHdpdGggdGhpcyBTaW1wbGVXYXRlck5vcm1hbE1ldGhvZFwiKTtcblxuXHRcdFx0XHRcdFx0XHRtYXQubm9ybWFsTWFwID0gcmV0dXJuZWRBcnJheVsxXTtcblx0XHRcdFx0XHRcdFx0bWF0Lm5vcm1hbE1ldGhvZCA9IG5ldyBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZChtYXQubm9ybWFsTWFwLCByZXR1cm5lZEFycmF5WzFdKTtcblx0XHRcdFx0XHRcdFx0ZGVidWdTdHJpbmcgKz0gXCIgfCBOb3JtYWxTaW1wbGVXYXRlck1ldGhvZCB8IFNlY29uZC1Ob3JtYWxUZXh0dXJlLU5hbWUgPSBcIiArICg8VGV4dHVyZTJEQmFzZT4gcmV0dXJuZWRBcnJheVsxXSkubmFtZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdFx0XHRcdG1ldGhvZHNfcGFyc2VkICs9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdG9kbzogd2Ugc2hvdWxkIG5vdCBuZWVkIHRoaXMgYW55bW9yZSAoaWYgdXNpbmcgdGV4dHVyZS1hdGxhcylcblx0XHRlbHNlIGlmICgodHlwZT49MykmJih0eXBlPD03KSl7XG5cdFx0XHQvLyBpZiB0aGlzIGlzIGEgY3VydmUgbWF0ZXJpYWwsIHdlIGNyZWF0ZSBpdCwgZmluYWxpemUgaXQsIGFzc2lnbiBpdCB0byBibG9jay1jYWNoZSBhbmQgcmV0dXJuIGFuZCByZXR1cm4uXG5cdFx0XHR2YXIgY29sb3I6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDB4Y2NjY2NjKTtcblx0XHRcdGRlYnVnU3RyaW5nKz1jb2xvcjtcblxuXHRcdFx0dmFyIGRpZmZ1c2VUZXh0dXJlOlRleHR1cmUyREJhc2U7XG5cdFx0XHR2YXIgZGlmZnVzZVRleF9hZGRyOm51bWJlciA9IHByb3BzLmdldCgyLCAwKTtcblxuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGRpZmZ1c2VUZXhfYWRkciwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cblx0XHRcdGlmICgoIXJldHVybmVkQXJyYXlbMF0pICYmIChkaWZmdXNlVGV4X2FkZHIgIT0gMCkpIHtcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIERpZmZ1c2VUZXh0dXJlIChJRCA9IFwiICsgZGlmZnVzZVRleF9hZGRyICsgXCIgKSBmb3IgdGhpcyBNZXRob2RNYXRlcmlhbFwiKTtcblx0XHRcdFx0ZGlmZnVzZVRleHR1cmUgPSBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRUZXh0dXJlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRkaWZmdXNlVGV4dHVyZSA9IHJldHVybmVkQXJyYXlbMV07XG5cdFx0XHR2YXIgY3VydmVfbWF0OkN1cnZlTWF0ZXJpYWwgPSBuZXcgQ3VydmVNYXRlcmlhbChkaWZmdXNlVGV4dHVyZSk7XG5cdFx0XHQvL2RlYnVnU3RyaW5nKz0gXCIgYWxwaGEgPSBcIitwcm9wcy5nZXQoMTAsIDEuMCkrXCIgXCI7XG5cdFx0XHRkZWJ1Z1N0cmluZys9IFwiIHRleHR1cmUgPSBcIitkaWZmdXNlVGV4X2FkZHIrXCIgXCI7XG5cdFx0XHRjdXJ2ZV9tYXQuYm90aFNpZGVzID0gdHJ1ZTtcblx0XHRcdGN1cnZlX21hdC5wcmVzZXJ2ZUFscGhhID0gdHJ1ZTtcblx0XHRcdGN1cnZlX21hdC5hbHBoYUJsZW5kaW5nID0gdHJ1ZTtcblx0XHRcdGN1cnZlX21hdC5leHRyYSA9IHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gY3VydmVfbWF0LCBuYW1lKTtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY3VydmVfbWF0O1xuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhkZWJ1Z1N0cmluZyk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cdFx0bWF0LmV4dHJhID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gbWF0LCBuYW1lKTtcblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbWF0O1xuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coZGVidWdTdHJpbmcpO1xuXHRcdH1cblx0fVxuXG5cdC8vQmxvY2sgSUQgPSA4MlxuXHRwcml2YXRlIHBhcnNlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cblx0XHR2YXIgYXNzZXQ6VGV4dHVyZTJEQmFzZTtcblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXG5cdFx0dmFyIHR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0dmFyIGRhdGFfbGVuOm51bWJlcjtcblxuXHRcdHRoaXMuX3RleHR1cmVfdXNlcnNbdGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCldID0gW107XG5cblx0XHQvLyBFeHRlcm5hbFxuXHRcdGlmICh0eXBlID09IDApIHtcblx0XHRcdGRhdGFfbGVuID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdHZhciB1cmw6c3RyaW5nO1xuXHRcdFx0dXJsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMoZGF0YV9sZW4pO1xuXHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCksIG5ldyBVUkxSZXF1ZXN0KHVybCksIGZhbHNlLCBudWxsLCB0cnVlKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cblx0XHRcdHZhciBkYXRhOkJ5dGVBcnJheTtcblx0XHRcdGRhdGEgPSBuZXcgQnl0ZUFycmF5KCk7XG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlcyhkYXRhLCAwLCBkYXRhX2xlbik7XG5cblx0XHRcdC8vXG5cdFx0XHQvLyBBV0RQYXJzZXIgLSBGaXggZm9yIEZpcmVGb3ggQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MTUwNzUgLlxuXHRcdFx0Ly9cblx0XHRcdC8vIENvbnZlcnRpbmcgZGF0YSB0byBpbWFnZSBoZXJlIGluc3RlYWQgb2YgcGFyc2VyIC0gZml4IEZpcmVGb3ggYnVnIHdoZXJlIGltYWdlIHdpZHRoIC8gaGVpZ2h0IGlzIDAgd2hlbiBjcmVhdGVkIGZyb20gZGF0YVxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB0aGUgYnJvd3NlciB0aW1lIHRvIGluaXRpYWxpc2UgaW1hZ2Ugd2lkdGggLyBoZWlnaHQuXG5cblx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgUGFyc2VyVXRpbHMuYnl0ZUFycmF5VG9JbWFnZShkYXRhKSwgdHJ1ZSk7XG5cdFx0XHQvL3RoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpLCBudWxsLCBmYWxzZSwgZGF0YSwgdHJ1ZSk7XG5cblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgZm9yIG5vd1xuXHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5leHRyYXMgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gYXNzZXQ7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdHZhciB0ZXh0dXJlU3R5bGVzTmFtZXM6QXJyYXk8c3RyaW5nPiA9IFtcImV4dGVybmFsXCIsIFwiZW1iZWRcIl1cblx0XHRcdGNvbnNvbGUubG9nKFwiU3RhcnQgcGFyc2luZyBhIFwiICsgdGV4dHVyZVN0eWxlc05hbWVzW3R5cGVdICsgXCIgQml0bWFwIGZvciBUZXh0dXJlXCIpO1xuXHRcdH1cblxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDgzXG5cdHByaXZhdGUgcGFyc2VDdWJlVGV4dHVyZShibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0Ly9ibG9ja0xlbmd0aCA9IGJsb2NrLmxlbjtcblx0XHR2YXIgZGF0YV9sZW46bnVtYmVyO1xuXHRcdHZhciBhc3NldDpDdWJlVGV4dHVyZUJhc2U7XG5cdFx0dmFyIGk6bnVtYmVyO1xuXG5cdFx0dGhpcy5fY3ViZVRleHR1cmVzID0gbmV3IEFycmF5PGFueT4oKTtcblx0XHR0aGlzLl90ZXh0dXJlX3VzZXJzWyB0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKSBdID0gW107XG5cblx0XHR2YXIgdHlwZTpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblxuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDY7IGkrKykge1xuXHRcdFx0dGhpcy5fdGV4dHVyZV91c2Vyc1t0aGlzLl9jdXJfYmxvY2tfaWQudG9TdHJpbmcoKV0gPSBbXTtcblx0XHRcdHRoaXMuX2N1YmVUZXh0dXJlcy5wdXNoKG51bGwpO1xuXG5cdFx0XHQvLyBFeHRlcm5hbFxuXHRcdFx0aWYgKHR5cGUgPT0gMCkge1xuXHRcdFx0XHRkYXRhX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRcdHZhciB1cmw6c3RyaW5nO1xuXHRcdFx0XHR1cmwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhkYXRhX2xlbik7XG5cblx0XHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fY3VyX2Jsb2NrX2lkLnRvU3RyaW5nKCkgKyBcIiNcIiArIGksIG5ldyBVUkxSZXF1ZXN0KHVybCksIGZhbHNlLCBudWxsLCB0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0ZGF0YV9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHR2YXIgZGF0YTpCeXRlQXJyYXk7XG5cdFx0XHRcdGRhdGEgPSBuZXcgQnl0ZUFycmF5KCk7XG5cblx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZXMoZGF0YSwgMCwgZGF0YV9sZW4pO1xuXG5cdFx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2N1cl9ibG9ja19pZC50b1N0cmluZygpICsgXCIjXCIgKyBpLCBudWxsLCBmYWxzZSwgUGFyc2VyVXRpbHMuYnl0ZUFycmF5VG9JbWFnZShkYXRhKSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIGZvciBub3dcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZXh0cmFzID0gdGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fcFBhdXNlQW5kUmV0cmlldmVEZXBlbmRlbmNpZXMoKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHR2YXIgdGV4dHVyZVN0eWxlc05hbWVzOkFycmF5PHN0cmluZz4gPSBbXCJleHRlcm5hbFwiLCBcImVtYmVkXCJdXG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0IHBhcnNpbmcgNiBcIiArIHRleHR1cmVTdHlsZXNOYW1lc1t0eXBlXSArIFwiIEJpdG1hcHMgZm9yIEN1YmVUZXh0dXJlXCIpO1xuXHRcdH1cblx0fVxuXG5cdC8vQmxvY2sgSUQgPSA5MVxuXHRwcml2YXRlIHBhcnNlU2hhcmVkTWV0aG9kQmxvY2soYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBhc3NldDpFZmZlY3RNZXRob2RCYXNlO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLm5hbWUgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0YXNzZXQgPSB0aGlzLnBhcnNlU2hhcmVkTWV0aG9kTGlzdChibG9ja0lEKTtcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGFzc2V0LCB0aGlzLl9ibG9ja3NbYmxvY2tJRF0ubmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBhc3NldDtcblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQYXJzZWQgYSBFZmZlY3RNZXRob2Q6IE5hbWUgPSBcIiArIGFzc2V0Lm5hbWUgKyBcIiBUeXBlID0gXCIgKyBhc3NldCk7XG5cdFx0fVxuXHR9XG5cblx0Ly9CbG9jayBJRCA9IDkyXG5cdHByaXZhdGUgcGFyc2VTaGFkb3dNZXRob2RCbG9jayhibG9ja0lEOm51bWJlcik6dm9pZFxuXHR7XG5cdFx0dmFyIHR5cGU6bnVtYmVyO1xuXHRcdHZhciBkYXRhX2xlbjpudW1iZXI7XG5cdFx0dmFyIGFzc2V0OlNoYWRvd01ldGhvZEJhc2U7XG5cdFx0dmFyIHNoYWRvd0xpZ2h0SUQ6bnVtYmVyO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXG5cdFx0c2hhZG93TGlnaHRJRCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKHNoYWRvd0xpZ2h0SUQsIFtBc3NldFR5cGUuTElHSFRdKTtcblxuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFRhcmdldExpZ2h0IChJRCA9IFwiICsgc2hhZG93TGlnaHRJRCArIFwiICkgZm9yIHRoaXMgU2hhZG93TWV0aG9kIC0gU2hhZG93TWV0aG9kIG5vdCBjcmVhdGVkXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGFzc2V0ID0gdGhpcy5wYXJzZVNoYWRvd01ldGhvZExpc3QoPExpZ2h0QmFzZT4gcmV0dXJuZWRBcnJheVsxXSwgYmxvY2tJRCk7XG5cblx0XHRpZiAoIWFzc2V0KVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7IC8vIElnbm9yZSBmb3Igbm93XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gYXNzZXQsIHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5uYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IGFzc2V0O1xuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNoYWRvd01hcE1ldGhvZE1ldGhvZDogTmFtZSA9IFwiICsgYXNzZXQubmFtZSArIFwiIHwgVHlwZSA9IFwiICsgYXNzZXQgKyBcIiB8IExpZ2h0LU5hbWUgPSBcIiwgKCA8TGlnaHRCYXNlPiByZXR1cm5lZEFycmF5WzFdICkubmFtZSk7XG5cdFx0fVxuXHR9XG5cblxuXHQvL0Jsb2NrIElEID0gMjUzXG5cdHByaXZhdGUgcGFyc2VDb21tYW5kKGJsb2NrSUQ6bnVtYmVyKTp2b2lkXG5cdHtcblx0XHR2YXIgaGFzQmxvY2tzOmJvb2xlYW4gPSAoIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpID09IDEgKTtcblx0XHR2YXIgcGFyX2lkOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIG10eDpNYXRyaXgzRCA9IHRoaXMucGFyc2VNYXRyaXgzRCgpO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblxuXHRcdHZhciBwYXJlbnRPYmplY3Q6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcblx0XHR2YXIgdGFyZ2V0T2JqZWN0OkRpc3BsYXlPYmplY3RDb250YWluZXI7XG5cblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQocGFyX2lkLCBbQXNzZXRUeXBlLkNPTlRBSU5FUiwgQXNzZXRUeXBlLkxJR0hULCBBc3NldFR5cGUuTUVTSF0pO1xuXG5cdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pIHtcblx0XHRcdHBhcmVudE9iamVjdCA9IDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiByZXR1cm5lZEFycmF5WzFdO1xuXHRcdH1cblxuXHRcdHZhciBudW1Db21tYW5kczpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xuXHRcdHZhciB0eXBlQ29tbWFuZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRTaG9ydCgpO1xuXG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFJ9KTtcblxuXHRcdHN3aXRjaCAodHlwZUNvbW1hbmQpIHtcblx0XHRcdGNhc2UgMTpcblxuXHRcdFx0XHR2YXIgdGFyZ2V0SUQ6bnVtYmVyID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHR2YXIgcmV0dXJuZWRBcnJheVRhcmdldDpBcnJheTxhbnk+ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuTElHSFQsIEFzc2V0VHlwZS5URVhUVVJFX1BST0pFQ1RPUl0pOyAvL2ZvciBubyBvbmx5IGxpZ2h0IGlzIHJlcXVlc3RlZCEhISFcblxuXHRcdFx0XHRpZiAoKCFyZXR1cm5lZEFycmF5VGFyZ2V0WzBdKSAmJiAodGFyZ2V0SUQgIT0gMCkpIHtcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgbGlnaHQgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICggZm9yIHRoaXMgQ29tbWFuZEJvY2shXCIpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRhcmdldE9iamVjdCA9IHJldHVybmVkQXJyYXlUYXJnZXRbMV07XG5cblx0XHRcdFx0aWYgKHBhcmVudE9iamVjdCkge1xuXHRcdFx0XHRcdHBhcmVudE9iamVjdC5hZGRDaGlsZCh0YXJnZXRPYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGFyZ2V0T2JqZWN0LnRyYW5zZm9ybS5tYXRyaXgzRCA9IG10eDtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAodGFyZ2V0T2JqZWN0KSB7XG5cdFx0XHRwcm9wcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOnRoaXMuX21hdHJpeE5yVHlwZSwgMjp0aGlzLl9tYXRyaXhOclR5cGUsIDM6dGhpcy5fbWF0cml4TnJUeXBlLCA0OkFXRFBhcnNlci5VSU5UOH0pO1xuXG5cdFx0XHR0YXJnZXRPYmplY3QucGl2b3QgPSBuZXcgVmVjdG9yM0QocHJvcHMuZ2V0KDEsIDApLCBwcm9wcy5nZXQoMiwgMCksIHByb3BzLmdldCgzLCAwKSk7XG5cdFx0XHR0YXJnZXRPYmplY3QuZXh0cmEgPSB0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblxuXHRcdH1cblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRhcmdldE9iamVjdFxuXG5cdFx0aWYgKHRoaXMuX2RlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIENvbW1hbmRCbG9jazogTmFtZSA9ICdcIiArIG5hbWUpO1xuXHRcdH1cblxuXHR9XG5cblx0Ly9ibG9ja0lEIDI1NVxuXHRwcml2YXRlIHBhcnNlTWV0YURhdGEoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLlVJTlQzMiwgMjpBV0RQYXJzZXIuQVdEU1RSSU5HLCAzOkFXRFBhcnNlci5BV0RTVFJJTkcsIDQ6QVdEUGFyc2VyLkFXRFNUUklORywgNTpBV0RQYXJzZXIuQVdEU1RSSU5HfSk7XG5cblx0XHRpZiAodGhpcy5fZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgTWV0YURhdGFCbG9jazogVGltZVN0YW1wICAgICAgICAgPSBcIiArIHByb3BzLmdldCgxLCAwKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEVuY29kZXJOYW1lICAgICAgID0gXCIgKyBwcm9wcy5nZXQoMiwgXCJ1bmtub3duXCIpKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICAgICAgICAgICAgICAgRW5jb2RlclZlcnNpb24gICAgPSBcIiArIHByb3BzLmdldCgzLCBcInVua25vd25cIikpO1xuXHRcdFx0Y29uc29sZS5sb2coXCIgICAgICAgICAgICAgICAgICAgICAgICBHZW5lcmF0b3JOYW1lICAgICA9IFwiICsgcHJvcHMuZ2V0KDQsIFwidW5rbm93blwiKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRvclZlcnNpb24gID0gXCIgKyBwcm9wcy5nZXQoNSwgXCJ1bmtub3duXCIpKTtcblx0XHR9XG5cdH1cblxuXHQvL2Jsb2NrSUQgMjU0XG5cdHByaXZhdGUgcGFyc2VOYW1lU3BhY2UoYmxvY2tJRDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciBpZDpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR2YXIgbmFtZVNwYWNlU3RyaW5nOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIE5hbWVTcGFjZUJsb2NrOiBJRCA9IFwiICsgaWQgKyBcIiB8IFN0cmluZyA9IFwiICsgbmFtZVNwYWNlU3RyaW5nKTtcblx0fVxuXG5cdC8vLS1QYXJzZXIgVVRJTFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvLyB0aGlzIGZ1bmN0aW9ucyByZWFkcyBhbmQgY3JlYXRlcyBhIFNoYWRvd01ldGhvZE1ldGhvZFxuXHRwcml2YXRlIHBhcnNlU2hhZG93TWV0aG9kTGlzdChsaWdodDpMaWdodEJhc2UsIGJsb2NrSUQ6bnVtYmVyKTpTaGFkb3dNZXRob2RCYXNlXG5cdHtcblxuXHRcdHZhciBtZXRob2RUeXBlOm51bWJlciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgc2hhZG93TWV0aG9kOlNoYWRvd01ldGhvZEJhc2U7XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSB0aGlzLnBhcnNlUHJvcGVydGllcyh7MTpBV0RQYXJzZXIuQkFERFIsIDI6QVdEUGFyc2VyLkJBRERSLCAzOkFXRFBhcnNlci5CQUREUiwgMTAxOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDI6dGhpcy5fcHJvcHNOclR5cGUsIDEwMzp0aGlzLl9wcm9wc05yVHlwZSwgMjAxOkFXRFBhcnNlci5VSU5UMzIsIDIwMjpBV0RQYXJzZXIuVUlOVDMyLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDQwMTpBV0RQYXJzZXIuVUlOVDgsIDQwMjpBV0RQYXJzZXIuVUlOVDgsIDYwMTpBV0RQYXJzZXIuQ09MT1IsIDYwMjpBV0RQYXJzZXIuQ09MT1IsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MLCA4MDE6QVdEUGFyc2VyLk1UWDR4NH0pO1xuXG5cdFx0dmFyIHRhcmdldElEOm51bWJlcjtcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+XG5cdFx0c3dpdGNoIChtZXRob2RUeXBlKSB7XG5cdFx0XHQvL1x0XHRcdFx0Y2FzZSAxMDAxOiAvL0Nhc2NhZGVTaGFkb3dNYXBNZXRob2Rcblx0XHRcdC8vXHRcdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0Ly9cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IGdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5TSEFET1dfTUFQX01FVEhPRF0pO1xuXHRcdFx0Ly9cdFx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2hhZG93QmFzZU1ldGhvZCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBDYXNjYWRlU2hhZG93TWFwTWV0aG9kIC0gU2hhZG93TWV0aG9kIG5vdCBjcmVhdGVkXCIpO1xuXHRcdFx0Ly9cdFx0XHRcdFx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xuXHRcdFx0Ly9cdFx0XHRcdFx0fVxuXHRcdFx0Ly9cdFx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IENhc2NhZGVTaGFkb3dNYXBNZXRob2QocmV0dXJuZWRBcnJheVsxXSk7XG5cdFx0XHQvL1x0XHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTAwMjogLy9TaGFkb3dOZWFyTWV0aG9kXG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDEsIDApO1xuXHRcdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuU0hBRE9XX01BUF9NRVRIT0RdKTtcblx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNoYWRvd0Jhc2VNZXRob2QgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgU2hhZG93TmVhck1ldGhvZCAtIFNoYWRvd01ldGhvZCBub3QgY3JlYXRlZFwiKTtcblx0XHRcdFx0XHRyZXR1cm4gc2hhZG93TWV0aG9kO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dOZWFyTWV0aG9kKDxTaGFkb3dNZXRob2RCYXNlPiByZXR1cm5lZEFycmF5WzFdKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDExMDE6IC8vU2hhZG93RmlsdGVyZWRNZXRob2RcblxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93RmlsdGVyZWRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0KTtcblx0XHRcdFx0KDxTaGFkb3dGaWx0ZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xuXHRcdFx0XHQoPFNoYWRvd0ZpbHRlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmVwc2lsb24gPSBwcm9wcy5nZXQoMTAyLCAwLjAwMik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDExMDI6IC8vU2hhZG93RGl0aGVyZWRNZXRob2RcblxuXG5cdFx0XHRcdHNoYWRvd01ldGhvZCA9IG5ldyBTaGFkb3dEaXRoZXJlZE1ldGhvZCg8RGlyZWN0aW9uYWxMaWdodD4gbGlnaHQsIDxudW1iZXI+IHByb3BzLmdldCgyMDEsIDUpKTtcblx0XHRcdFx0KDxTaGFkb3dEaXRoZXJlZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xuXHRcdFx0XHQoPFNoYWRvd0RpdGhlcmVkTWV0aG9kPiBzaGFkb3dNZXRob2QpLmVwc2lsb24gPSBwcm9wcy5nZXQoMTAyLCAwLjAwMik7XG5cdFx0XHRcdCg8U2hhZG93RGl0aGVyZWRNZXRob2Q+IHNoYWRvd01ldGhvZCkucmFuZ2UgPSBwcm9wcy5nZXQoMTAzLCAxKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTEwMzogLy9TaGFkb3dTb2Z0TWV0aG9kXG5cblx0XHRcdFx0c2hhZG93TWV0aG9kID0gbmV3IFNoYWRvd1NvZnRNZXRob2QoPERpcmVjdGlvbmFsTGlnaHQ+IGxpZ2h0LCA8bnVtYmVyPiBwcm9wcy5nZXQoMjAxLCA1KSk7XG5cdFx0XHRcdCg8U2hhZG93U29mdE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xuXHRcdFx0XHQoPFNoYWRvd1NvZnRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcblx0XHRcdFx0KDxTaGFkb3dTb2Z0TWV0aG9kPiBzaGFkb3dNZXRob2QpLnJhbmdlID0gcHJvcHMuZ2V0KDEwMywgMSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDExMDQ6IC8vU2hhZG93SGFyZE1ldGhvZFxuXHRcdFx0XHRzaGFkb3dNZXRob2QgPSBuZXcgU2hhZG93SGFyZE1ldGhvZChsaWdodCk7XG5cdFx0XHRcdCg8U2hhZG93SGFyZE1ldGhvZD4gc2hhZG93TWV0aG9kKS5hbHBoYSA9IHByb3BzLmdldCgxMDEsIDEpO1xuXHRcdFx0XHQoPFNoYWRvd0hhcmRNZXRob2Q+IHNoYWRvd01ldGhvZCkuZXBzaWxvbiA9IHByb3BzLmdldCgxMDIsIDAuMDAyKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0cmV0dXJuIHNoYWRvd01ldGhvZDtcblx0fVxuXG5cdC8vQmxvY2sgSUQgMTAxXG5cdHByaXZhdGUgcGFyc2VTa2VsZXRvbihibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxuXHR7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBudW1fam9pbnRzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgc2tlbGV0b246U2tlbGV0b24gPSBuZXcgU2tlbGV0b24oKTtcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsgLy8gRGlzY2FyZCBwcm9wZXJ0aWVzIGZvciBub3dcblxuXHRcdHZhciBqb2ludHNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XG5cdFx0d2hpbGUgKGpvaW50c19wYXJzZWQgPCBudW1fam9pbnRzKSB7XG5cdFx0XHR2YXIgam9pbnQ6U2tlbGV0b25Kb2ludDtcblx0XHRcdHZhciBpYnA6TWF0cml4M0Q7XG5cdFx0XHQvLyBJZ25vcmUgam9pbnQgaWRcblx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdGpvaW50ID0gbmV3IFNrZWxldG9uSm9pbnQoKTtcblx0XHRcdGpvaW50LnBhcmVudEluZGV4ID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpIC0gMTsgLy8gMD1udWxsIGluIEFXRFxuXHRcdFx0am9pbnQubmFtZSA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblxuXHRcdFx0aWJwID0gdGhpcy5wYXJzZU1hdHJpeDNEKCk7XG5cdFx0XHRqb2ludC5pbnZlcnNlQmluZFBvc2UgPSBpYnAucmF3RGF0YTtcblx0XHRcdC8vIElnbm9yZSBqb2ludCBwcm9wcy9hdHRyaWJ1dGVzIGZvciBub3dcblx0XHRcdHRoaXMucGFyc2VQcm9wZXJ0aWVzKG51bGwpO1xuXHRcdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0XHRza2VsZXRvbi5qb2ludHMucHVzaChqb2ludCk7XG5cdFx0XHRqb2ludHNfcGFyc2VkKys7XG5cdFx0fVxuXG5cdFx0Ly8gRGlzY2FyZCBhdHRyaWJ1dGVzIGZvciBub3dcblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChza2VsZXRvbiwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBza2VsZXRvbjtcblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uOiBOYW1lID0gXCIgKyBza2VsZXRvbi5uYW1lICsgXCIgfCBOdW1iZXIgb2YgSm9pbnRzID0gXCIgKyBqb2ludHNfcGFyc2VkKTtcblx0fVxuXG5cdC8vQmxvY2sgSUQgPSAxMDJcblx0cHJpdmF0ZSBwYXJzZVNrZWxldG9uUG9zZShibG9ja0lEOm51bWJlciAvKnVpbnQqLyk6dm9pZFxuXHR7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBudW1fam9pbnRzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR0aGlzLnBhcnNlUHJvcGVydGllcyhudWxsKTsgLy8gSWdub3JlIHByb3BlcnRpZXMgZm9yIG5vd1xuXG5cdFx0dmFyIHBvc2U6U2tlbGV0b25Qb3NlID0gbmV3IFNrZWxldG9uUG9zZSgpO1xuXG5cdFx0dmFyIGpvaW50c19wYXJzZWQ6bnVtYmVyIC8qdWludCovID0gMDtcblx0XHR3aGlsZSAoam9pbnRzX3BhcnNlZCA8IG51bV9qb2ludHMpIHtcblx0XHRcdHZhciBqb2ludF9wb3NlOkpvaW50UG9zZTtcblx0XHRcdHZhciBoYXNfdHJhbnNmb3JtOm51bWJlciAvKnVpbnQqLztcblx0XHRcdGpvaW50X3Bvc2UgPSBuZXcgSm9pbnRQb3NlKCk7XG5cdFx0XHRoYXNfdHJhbnNmb3JtID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRCeXRlKCk7XG5cdFx0XHRpZiAoaGFzX3RyYW5zZm9ybSA9PSAxKSB7XG5cdFx0XHRcdHZhciBtdHhfZGF0YTpBcnJheTxudW1iZXI+ID0gdGhpcy5wYXJzZU1hdHJpeDQzUmF3RGF0YSgpO1xuXG5cdFx0XHRcdHZhciBtdHg6TWF0cml4M0QgPSBuZXcgTWF0cml4M0QobXR4X2RhdGEpO1xuXHRcdFx0XHRqb2ludF9wb3NlLm9yaWVudGF0aW9uLmZyb21NYXRyaXgobXR4KTtcblx0XHRcdFx0am9pbnRfcG9zZS50cmFuc2xhdGlvbi5jb3B5RnJvbShtdHgucG9zaXRpb24pO1xuXG5cdFx0XHRcdHBvc2Uuam9pbnRQb3Nlc1tqb2ludHNfcGFyc2VkXSA9IGpvaW50X3Bvc2U7XG5cdFx0XHR9XG5cdFx0XHRqb2ludHNfcGFyc2VkKys7XG5cdFx0fVxuXHRcdC8vIFNraXAgYXR0cmlidXRlcyBmb3Igbm93XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQocG9zZSwgbmFtZSk7XG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBwb3NlO1xuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b25Qb3NlOiBOYW1lID0gXCIgKyBwb3NlLm5hbWUgKyBcIiB8IE51bWJlciBvZiBKb2ludHMgPSBcIiArIGpvaW50c19wYXJzZWQpO1xuXHR9XG5cblx0Ly9ibG9ja0lEIDEwM1xuXHRwcml2YXRlIHBhcnNlU2tlbGV0b25BbmltYXRpb24oYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcblx0e1xuXHRcdHZhciBmcmFtZV9kdXI6bnVtYmVyO1xuXHRcdHZhciBwb3NlX2FkZHI6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBuYW1lOnN0cmluZyA9IHRoaXMucGFyc2VWYXJTdHIoKTtcblx0XHR2YXIgY2xpcDpTa2VsZXRvbkNsaXBOb2RlID0gbmV3IFNrZWxldG9uQ2xpcE5vZGUoKTtcblx0XHR2YXIgbnVtX2ZyYW1lczpudW1iZXIgLyp1aW50Ki8gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dGhpcy5wYXJzZVByb3BlcnRpZXMobnVsbCk7IC8vIElnbm9yZSBwcm9wZXJ0aWVzIGZvciBub3dcblxuXHRcdHZhciBmcmFtZXNfcGFyc2VkOm51bWJlciAvKnVpbnQqLyA9IDA7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55Pjtcblx0XHR3aGlsZSAoZnJhbWVzX3BhcnNlZCA8IG51bV9mcmFtZXMpIHtcblx0XHRcdHBvc2VfYWRkciA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRmcmFtZV9kdXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRyZXR1cm5lZEFycmF5ID0gdGhpcy5nZXRBc3NldEJ5SUQocG9zZV9hZGRyLCBbQXNzZXRUeXBlLlNLRUxFVE9OX1BPU0VdKTtcblx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIFNrZWxldG9uUG9zZSBGcmFtZSAjIFwiICsgZnJhbWVzX3BhcnNlZCArIFwiIChJRCA9IFwiICsgcG9zZV9hZGRyICsgXCIgKSBmb3IgdGhpcyBTa2VsZXRvbkNsaXBOb2RlXCIpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjbGlwLmFkZEZyYW1lKDxTa2VsZXRvblBvc2U+IHRoaXMuX2Jsb2Nrc1twb3NlX2FkZHJdLmRhdGEsIGZyYW1lX2R1cik7XG5cdFx0XHRmcmFtZXNfcGFyc2VkKys7XG5cdFx0fVxuXHRcdGlmIChjbGlwLmZyYW1lcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IHRoaXMgU2tlbGV0b25DbGlwTm9kZSwgYmVjYXVzZSBubyBGcmFtZXMgd2hlcmUgc2V0LlwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIGF0dHJpYnV0ZXMgZm9yIG5vd1xuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNsaXAsIG5hbWUpO1xuXHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gY2xpcDtcblx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFNrZWxldG9uQ2xpcE5vZGU6IE5hbWUgPSBcIiArIGNsaXAubmFtZSArIFwiIHwgTnVtYmVyIG9mIEZyYW1lcyA9IFwiICsgY2xpcC5mcmFtZXMubGVuZ3RoKTtcblx0fVxuXG5cdC8vQmxvY2sgSUQgPSAxMTEgLyAgQmxvY2sgSUQgPSAxMTJcblx0cHJpdmF0ZSBwYXJzZU1lc2hQb3NlQW5pbWF0aW9uKGJsb2NrSUQ6bnVtYmVyIC8qdWludCovLCBwb3NlT25seTpib29sZWFuID0gZmFsc2UpOnZvaWRcblx0e1xuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IDE7XG5cdFx0dmFyIG51bV9zdWJtZXNoZXM6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBmcmFtZXNfcGFyc2VkOm51bWJlciAvKnVpbnQqLztcblx0XHR2YXIgc3ViTWVzaFBhcnNlZDpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIGZyYW1lX2R1cjpudW1iZXI7XG5cdFx0dmFyIHg6bnVtYmVyO1xuXHRcdHZhciB5Om51bWJlcjtcblx0XHR2YXIgejpudW1iZXI7XG5cdFx0dmFyIHN0cl9sZW46bnVtYmVyO1xuXHRcdHZhciBzdHJfZW5kOm51bWJlcjtcblx0XHR2YXIgZ2VvbWV0cnk6R2VvbWV0cnk7XG5cdFx0dmFyIHN1Ykdlb206VHJpYW5nbGVTdWJHZW9tZXRyeTtcblx0XHR2YXIgaWR4Om51bWJlciAvKmludCovID0gMDtcblx0XHR2YXIgY2xpcDpWZXJ0ZXhDbGlwTm9kZSA9IG5ldyBWZXJ0ZXhDbGlwTm9kZSgpO1xuXHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki87XG5cdFx0dmFyIHZlcnRzOkFycmF5PG51bWJlcj47XG5cdFx0dmFyIG51bV9TdHJlYW1zOm51bWJlciAvKmludCovID0gMDtcblx0XHR2YXIgc3RyZWFtc1BhcnNlZDpudW1iZXIgLyppbnQqLyA9IDA7XG5cdFx0dmFyIHN0cmVhbXR5cGVzOkFycmF5PG51bWJlcj4gLyppbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCkgLyppbnQqLztcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcztcblx0XHR2YXIgdGhpc0dlbzpHZW9tZXRyeTtcblx0XHR2YXIgbmFtZTpzdHJpbmcgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0dmFyIGdlb0FkcmVzczpudW1iZXIgLyppbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0dmFyIHJldHVybmVkQXJyYXk6QXJyYXk8YW55PiA9IHRoaXMuZ2V0QXNzZXRCeUlEKGdlb0FkcmVzcywgW0Fzc2V0VHlwZS5HRU9NRVRSWV0pO1xuXHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIHRhcmdldC1HZW9tZXRyeS1PYmplY3QgXCIgKyBnZW9BZHJlc3MgKyBcIiApIGZvciB0aGlzIFZlcnRleENsaXBOb2RlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgdXZzOkFycmF5PEFycmF5PG51bWJlcj4+ID0gdGhpcy5nZXRVVkZvclZlcnRleEFuaW1hdGlvbihnZW9BZHJlc3MpO1xuXHRcdGlmICghcG9zZU9ubHkpXG5cdFx0XHRudW1fZnJhbWVzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXG5cdFx0bnVtX3N1Ym1lc2hlcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRudW1fU3RyZWFtcyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRzdHJlYW1zUGFyc2VkID0gMDtcblx0XHR3aGlsZSAoc3RyZWFtc1BhcnNlZCA8IG51bV9TdHJlYW1zKSB7XG5cdFx0XHRzdHJlYW10eXBlcy5wdXNoKHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKSk7XG5cdFx0XHRzdHJlYW1zUGFyc2VkKys7XG5cdFx0fVxuXHRcdHByb3BzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJPT0wsIDI6QVdEUGFyc2VyLkJPT0x9KTtcblxuXHRcdGNsaXAubG9vcGluZyA9IHByb3BzLmdldCgxLCB0cnVlKTtcblx0XHRjbGlwLnN0aXRjaEZpbmFsRnJhbWUgPSBwcm9wcy5nZXQoMiwgZmFsc2UpO1xuXG5cdFx0ZnJhbWVzX3BhcnNlZCA9IDA7XG5cdFx0d2hpbGUgKGZyYW1lc19wYXJzZWQgPCBudW1fZnJhbWVzKSB7XG5cdFx0XHRmcmFtZV9kdXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xuXHRcdFx0c3ViTWVzaFBhcnNlZCA9IDA7XG5cdFx0XHR3aGlsZSAoc3ViTWVzaFBhcnNlZCA8IG51bV9zdWJtZXNoZXMpIHtcblx0XHRcdFx0c3RyZWFtc1BhcnNlZCA9IDA7XG5cdFx0XHRcdHN0cl9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRzdHJfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIHN0cl9sZW47XG5cdFx0XHRcdHdoaWxlIChzdHJlYW1zUGFyc2VkIDwgbnVtX1N0cmVhbXMpIHtcblx0XHRcdFx0XHRpZiAoc3RyZWFtdHlwZXNbc3RyZWFtc1BhcnNlZF0gPT0gMSkge1xuXHRcdFx0XHRcdFx0aW5kaWNlcyA9ICg8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlbMV0pLnN1Ykdlb21ldHJpZXNbc3ViTWVzaFBhcnNlZF0uaW5kaWNlcztcblx0XHRcdFx0XHRcdHZlcnRzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdFx0XHRcdGlkeCA9IDA7XG5cdFx0XHRcdFx0XHR3aGlsZSAodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA8IHN0cl9lbmQpIHtcblx0XHRcdFx0XHRcdFx0eCA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcblx0XHRcdFx0XHRcdFx0eSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcblx0XHRcdFx0XHRcdFx0eiA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeUdlbylcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geDtcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0geTtcblx0XHRcdFx0XHRcdFx0dmVydHNbaWR4KytdID0gejtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ykdlb20gPSBuZXcgVHJpYW5nbGVTdWJHZW9tZXRyeSh0cnVlKTtcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlSW5kaWNlcyhpbmRpY2VzKTtcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlUG9zaXRpb25zKHZlcnRzKTtcblx0XHRcdFx0XHRcdHN1Ykdlb20udXBkYXRlVVZzKHV2c1tzdWJNZXNoUGFyc2VkXSk7XG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVZlcnRleE5vcm1hbHMobnVsbCk7XG5cdFx0XHRcdFx0XHRzdWJHZW9tLnVwZGF0ZVZlcnRleFRhbmdlbnRzKG51bGwpO1xuXHRcdFx0XHRcdFx0c3ViR2VvbS5hdXRvRGVyaXZlTm9ybWFscyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c3ViR2VvbS5hdXRvRGVyaXZlVGFuZ2VudHMgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHN1Yk1lc2hQYXJzZWQrKztcblx0XHRcdFx0XHRcdGdlb21ldHJ5LmFkZFN1Ykdlb21ldHJ5KHN1Ykdlb20pXG5cdFx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gc3RyX2VuZDtcblx0XHRcdFx0XHRzdHJlYW1zUGFyc2VkKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNsaXAuYWRkRnJhbWUoZ2VvbWV0cnksIGZyYW1lX2R1cik7XG5cdFx0XHRmcmFtZXNfcGFyc2VkKys7XG5cdFx0fVxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGNsaXAsIG5hbWUpO1xuXG5cdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmRhdGEgPSBjbGlwO1xuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgVmVydGV4Q2xpcE5vZGU6IE5hbWUgPSBcIiArIGNsaXAubmFtZSArIFwiIHwgVGFyZ2V0LUdlb21ldHJ5LU5hbWUgPSBcIiArICg8R2VvbWV0cnk+IHJldHVybmVkQXJyYXlbMV0pLm5hbWUgKyBcIiB8IE51bWJlciBvZiBGcmFtZXMgPSBcIiArIGNsaXAuZnJhbWVzLmxlbmd0aCk7XG5cdH1cblxuXHQvL0Jsb2NrSUQgMTEzXG5cdHByaXZhdGUgcGFyc2VWZXJ0ZXhBbmltYXRpb25TZXQoYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcblx0e1xuXHRcdHZhciBwb3NlQmxvY2tBZHJlc3M6bnVtYmVyIC8qaW50Ki9cblx0XHR2YXIgb3V0cHV0U3RyaW5nOnN0cmluZyA9IFwiXCI7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciBudW1fZnJhbWVzOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgcHJvcHM6QVdEUHJvcGVydGllcyA9IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHsxOkFXRFBhcnNlci5VSU5UMTZ9KTtcblx0XHR2YXIgZnJhbWVzX3BhcnNlZDpudW1iZXIgLyp1aW50Ki8gPSAwO1xuXHRcdHZhciBza2VsZXRvbkZyYW1lczpBcnJheTxTa2VsZXRvbkNsaXBOb2RlPiA9IG5ldyBBcnJheTxTa2VsZXRvbkNsaXBOb2RlPigpO1xuXHRcdHZhciB2ZXJ0ZXhGcmFtZXM6QXJyYXk8VmVydGV4Q2xpcE5vZGU+ID0gbmV3IEFycmF5PFZlcnRleENsaXBOb2RlPigpO1xuXHRcdHdoaWxlIChmcmFtZXNfcGFyc2VkIDwgbnVtX2ZyYW1lcykge1xuXHRcdFx0cG9zZUJsb2NrQWRyZXNzID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdHZhciByZXR1cm5lZEFycmF5OkFycmF5PGFueT4gPSB0aGlzLmdldEFzc2V0QnlJRChwb3NlQmxvY2tBZHJlc3MsIFtBc3NldFR5cGUuQU5JTUFUSU9OX05PREVdKTtcblx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEFuaW1hdGlvbkNsaXBOb2RlIE5yIFwiICsgZnJhbWVzX3BhcnNlZCArIFwiICggXCIgKyBwb3NlQmxvY2tBZHJlc3MgKyBcIiApIGZvciB0aGlzIEFuaW1hdGlvblNldFwiKTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAocmV0dXJuZWRBcnJheVsxXSBpbnN0YW5jZW9mIFZlcnRleENsaXBOb2RlKVxuXHRcdFx0XHRcdHZlcnRleEZyYW1lcy5wdXNoKHJldHVybmVkQXJyYXlbMV0pXG5cdFx0XHRcdGlmIChyZXR1cm5lZEFycmF5WzFdIGluc3RhbmNlb2YgU2tlbGV0b25DbGlwTm9kZSlcblx0XHRcdFx0XHRza2VsZXRvbkZyYW1lcy5wdXNoKHJldHVybmVkQXJyYXlbMV0pXG5cdFx0XHR9XG5cdFx0XHRmcmFtZXNfcGFyc2VkKys7XG5cdFx0fVxuXHRcdGlmICgodmVydGV4RnJhbWVzLmxlbmd0aCA9PSAwKSAmJiAoc2tlbGV0b25GcmFtZXMubGVuZ3RoID09IDApKSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHRoaXMgQW5pbWF0aW9uU2V0LCBiZWNhdXNlIGl0IGNvbnRhaW5zIG5vIGFuaW1hdGlvbnNcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMucGFyc2VVc2VyQXR0cmlidXRlcygpO1xuXHRcdGlmICh2ZXJ0ZXhGcmFtZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIG5ld1ZlcnRleEFuaW1hdGlvblNldDpWZXJ0ZXhBbmltYXRpb25TZXQgPSBuZXcgVmVydGV4QW5pbWF0aW9uU2V0KCk7XG5cdFx0XHRmb3IgKHZhciBpOm51bWJlciAvKmludCovID0gMDsgaSA8IHZlcnRleEZyYW1lcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0bmV3VmVydGV4QW5pbWF0aW9uU2V0LmFkZEFuaW1hdGlvbih2ZXJ0ZXhGcmFtZXNbaV0pO1xuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobmV3VmVydGV4QW5pbWF0aW9uU2V0LCBuYW1lKTtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbmV3VmVydGV4QW5pbWF0aW9uU2V0O1xuXHRcdFx0aWYgKHRoaXMuX2RlYnVnKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBhcnNlZCBhIFZlcnRleEFuaW1hdGlvblNldDogTmFtZSA9IFwiICsgbmFtZSArIFwiIHwgQW5pbWF0aW9ucyA9IFwiICsgbmV3VmVydGV4QW5pbWF0aW9uU2V0LmFuaW1hdGlvbnMubGVuZ3RoICsgXCIgfCBBbmltYXRpb24tTmFtZXMgPSBcIiArIG5ld1ZlcnRleEFuaW1hdGlvblNldC5hbmltYXRpb25OYW1lcy50b1N0cmluZygpKTtcblxuXHRcdH0gZWxzZSBpZiAoc2tlbGV0b25GcmFtZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHBvc2VCbG9ja0FkcmVzcywgW0Fzc2V0VHlwZS5BTklNQVRJT05fTk9ERV0pO1xuXHRcdFx0dmFyIG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0OlNrZWxldG9uQW5pbWF0aW9uU2V0ID0gbmV3IFNrZWxldG9uQW5pbWF0aW9uU2V0KHByb3BzLmdldCgxLCA0KSk7IC8vcHJvcHMuZ2V0KDEsNCkpO1xuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCBza2VsZXRvbkZyYW1lcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0bmV3U2tlbGV0b25BbmltYXRpb25TZXQuYWRkQW5pbWF0aW9uKHNrZWxldG9uRnJhbWVzW2ldKTtcblx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0LCBuYW1lKTtcblx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5kYXRhID0gbmV3U2tlbGV0b25BbmltYXRpb25TZXQ7XG5cdFx0XHRpZiAodGhpcy5fZGVidWcpXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgU2tlbGV0b25BbmltYXRpb25TZXQ6IE5hbWUgPSBcIiArIG5hbWUgKyBcIiB8IEFuaW1hdGlvbnMgPSBcIiArIG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0LmFuaW1hdGlvbnMubGVuZ3RoICsgXCIgfCBBbmltYXRpb24tTmFtZXMgPSBcIiArIG5ld1NrZWxldG9uQW5pbWF0aW9uU2V0LmFuaW1hdGlvbk5hbWVzLnRvU3RyaW5nKCkpO1xuXG5cdFx0fVxuXHR9XG5cblx0Ly9CbG9ja0lEIDEyMlxuXHRwcml2YXRlIHBhcnNlQW5pbWF0b3JTZXQoYmxvY2tJRDpudW1iZXIgLyp1aW50Ki8pOnZvaWRcblx0e1xuXHRcdHZhciB0YXJnZXRNZXNoOk1lc2g7XG5cdFx0dmFyIGFuaW1TZXRCbG9ja0FkcmVzczpudW1iZXIgLyppbnQqL1xuXHRcdHZhciB0YXJnZXRBbmltYXRpb25TZXQ6QW5pbWF0aW9uU2V0QmFzZTtcblx0XHR2YXIgb3V0cHV0U3RyaW5nOnN0cmluZyA9IFwiXCI7XG5cdFx0dmFyIG5hbWU6c3RyaW5nID0gdGhpcy5wYXJzZVZhclN0cigpO1xuXHRcdHZhciB0eXBlOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSfSk7XG5cblx0XHRhbmltU2V0QmxvY2tBZHJlc3MgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdHZhciB0YXJnZXRNZXNoTGVuZ3RoOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR2YXIgbWVzaEFkcmVzc2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki8gPSBuZXcgQXJyYXk8bnVtYmVyPigpIC8qdWludCovO1xuXHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdGFyZ2V0TWVzaExlbmd0aDsgaSsrKVxuXHRcdFx0bWVzaEFkcmVzc2VzLnB1c2godGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQoKSk7XG5cblx0XHR2YXIgYWN0aXZlU3RhdGU6bnVtYmVyIC8qdWludCovID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHZhciBhdXRvcGxheTpib29sZWFuID0gKCB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKSA9PSAxICk7XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cdFx0dGhpcy5wYXJzZVVzZXJBdHRyaWJ1dGVzKCk7XG5cblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xuXHRcdHZhciB0YXJnZXRNZXNoZXM6QXJyYXk8TWVzaD4gPSBuZXcgQXJyYXk8TWVzaD4oKTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBtZXNoQWRyZXNzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChtZXNoQWRyZXNzZXNbaV0sIFtBc3NldFR5cGUuTUVTSF0pO1xuXHRcdFx0aWYgKHJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdHRhcmdldE1lc2hlcy5wdXNoKDxNZXNoPiByZXR1cm5lZEFycmF5WzFdKTtcblx0XHR9XG5cdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKGFuaW1TZXRCbG9ja0FkcmVzcywgW0Fzc2V0VHlwZS5BTklNQVRJT05fU0VUXSk7XG5cdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKSB7XG5cdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgQW5pbWF0aW9uU2V0ICggXCIgKyBhbmltU2V0QmxvY2tBZHJlc3MgKyBcIiApIGZvciB0aGlzIEFuaW1hdG9yXCIpOztcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHR0YXJnZXRBbmltYXRpb25TZXQgPSA8QW5pbWF0aW9uU2V0QmFzZT4gcmV0dXJuZWRBcnJheVsxXTtcblx0XHR2YXIgdGhpc0FuaW1hdG9yOkFuaW1hdG9yQmFzZTtcblx0XHRpZiAodHlwZSA9PSAxKSB7XG5cblx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRChwcm9wcy5nZXQoMSwgMCksIFtBc3NldFR5cGUuU0tFTEVUT05dKTtcblx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSkge1xuXHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgU2tlbGV0b24gKCBcIiArIHByb3BzLmdldCgxLCAwKSArIFwiICkgZm9yIHRoaXMgQW5pbWF0b3JcIik7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0dGhpc0FuaW1hdG9yID0gbmV3IFNrZWxldG9uQW5pbWF0b3IoPFNrZWxldG9uQW5pbWF0aW9uU2V0PiB0YXJnZXRBbmltYXRpb25TZXQsIDxTa2VsZXRvbj4gcmV0dXJuZWRBcnJheVsxXSk7XG5cblx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gMilcblx0XHRcdHRoaXNBbmltYXRvciA9IG5ldyBWZXJ0ZXhBbmltYXRvcig8VmVydGV4QW5pbWF0aW9uU2V0PiB0YXJnZXRBbmltYXRpb25TZXQpO1xuXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQodGhpc0FuaW1hdG9yLCBuYW1lKTtcblx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uZGF0YSA9IHRoaXNBbmltYXRvcjtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0TWVzaGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodHlwZSA9PSAxKVxuXHRcdFx0XHR0YXJnZXRNZXNoZXNbaV0uYW5pbWF0b3IgPSAoPFNrZWxldG9uQW5pbWF0b3I+IHRoaXNBbmltYXRvcik7XG5cdFx0XHRpZiAodHlwZSA9PSAyKVxuXHRcdFx0XHR0YXJnZXRNZXNoZXNbaV0uYW5pbWF0b3IgPSAoPFZlcnRleEFuaW1hdG9yPiB0aGlzQW5pbWF0b3IpO1xuXG5cdFx0fVxuXHRcdGlmICh0aGlzLl9kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiUGFyc2VkIGEgQW5pbWF0b3I6IE5hbWUgPSBcIiArIG5hbWUpO1xuXHR9XG5cblx0Ly8gdGhpcyBmdW5jdGlvbnMgcmVhZHMgYW5kIGNyZWF0ZXMgYSBFZmZlY3RNZXRob2Rcblx0cHJpdmF0ZSBwYXJzZVNoYXJlZE1ldGhvZExpc3QoYmxvY2tJRDpudW1iZXIpOkVmZmVjdE1ldGhvZEJhc2Vcblx0e1xuXG5cdFx0dmFyIG1ldGhvZFR5cGU6bnVtYmVyID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdHZhciBlZmZlY3RNZXRob2RSZXR1cm46RWZmZWN0TWV0aG9kQmFzZTtcblxuXHRcdHZhciBwcm9wczpBV0RQcm9wZXJ0aWVzID0gdGhpcy5wYXJzZVByb3BlcnRpZXMoezE6QVdEUGFyc2VyLkJBRERSLCAyOkFXRFBhcnNlci5CQUREUiwgMzpBV0RQYXJzZXIuQkFERFIsIDEwMTp0aGlzLl9wcm9wc05yVHlwZSwgMTAyOnRoaXMuX3Byb3BzTnJUeXBlLCAxMDM6dGhpcy5fcHJvcHNOclR5cGUsIDEwNDp0aGlzLl9wcm9wc05yVHlwZSwgMTA1OnRoaXMuX3Byb3BzTnJUeXBlLCAxMDY6dGhpcy5fcHJvcHNOclR5cGUsIDEwNzp0aGlzLl9wcm9wc05yVHlwZSwgMjAxOkFXRFBhcnNlci5VSU5UMzIsIDIwMjpBV0RQYXJzZXIuVUlOVDMyLCAzMDE6QVdEUGFyc2VyLlVJTlQxNiwgMzAyOkFXRFBhcnNlci5VSU5UMTYsIDQwMTpBV0RQYXJzZXIuVUlOVDgsIDQwMjpBV0RQYXJzZXIuVUlOVDgsIDYwMTpBV0RQYXJzZXIuQ09MT1IsIDYwMjpBV0RQYXJzZXIuQ09MT1IsIDcwMTpBV0RQYXJzZXIuQk9PTCwgNzAyOkFXRFBhcnNlci5CT09MfSk7XG5cdFx0dmFyIHRhcmdldElEOm51bWJlcjtcblx0XHR2YXIgcmV0dXJuZWRBcnJheTpBcnJheTxhbnk+O1xuXG5cdFx0c3dpdGNoIChtZXRob2RUeXBlKSB7XG5cdFx0XHQvLyBFZmZlY3QgTWV0aG9kc1xuXHRcdFx0Y2FzZSA0MDE6IC8vQ29sb3JNYXRyaXhcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdENvbG9yTWF0cml4TWV0aG9kKHByb3BzLmdldCgxMDEsIG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDAyOiAvL0NvbG9yVHJhbnNmb3JtXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RDb2xvclRyYW5zZm9ybU1ldGhvZCgpO1xuXHRcdFx0XHR2YXIgb2ZmQ29sOm51bWJlciAvKnVpbnQqLyA9IHByb3BzLmdldCg2MDEsIDB4MDAwMDAwMDApO1xuXHRcdFx0XHQoPEVmZmVjdENvbG9yVHJhbnNmb3JtTWV0aG9kPiBlZmZlY3RNZXRob2RSZXR1cm4pLmNvbG9yVHJhbnNmb3JtID0gbmV3IENvbG9yVHJhbnNmb3JtKHByb3BzLmdldCgxMDIsIDEpLCBwcm9wcy5nZXQoMTAzLCAxKSwgcHJvcHMuZ2V0KDEwNCwgMSksIHByb3BzLmdldCgxMDEsIDEpLCAoKG9mZkNvbCA+PiAxNikgJiAweEZGKSwgKChvZmZDb2wgPj4gOCkgJiAweEZGKSwgKG9mZkNvbCAmIDB4RkYpLCAoKG9mZkNvbCA+PiAyNCkgJiAweEZGKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0MDM6IC8vRW52TWFwXG5cblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFTlYgTUFQJywgdGFyZ2V0SUQpO1xuXG5cblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbIEFzc2V0VHlwZS5URVhUVVJFIF0sIFwiQ3ViZVRleHR1cmVcIik7XG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRW52TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEVudk1hcE1ldGhvZFwiKTtcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEVudk1hcE1ldGhvZCg8Q3ViZVRleHR1cmVCYXNlPiByZXR1cm5lZEFycmF5WzFdLCA8bnVtYmVyPiBwcm9wcy5nZXQoMTAxLCAxKSk7XG5cdFx0XHRcdHRhcmdldElEID0gcHJvcHMuZ2V0KDIsIDApO1xuXHRcdFx0XHRpZiAodGFyZ2V0SUQgPiAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcblx0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTWFzay10ZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEVudk1hcE1ldGhvZFwiKTtcblxuXHRcdFx0XHRcdC8vIFRvZG86IHRlc3QgbWFzayB3aXRoIEVudk1hcE1ldGhvZFxuXHRcdFx0XHRcdC8vKDxFbnZNYXBNZXRob2Q+IGVmZmVjdE1ldGhvZFJldHVybikubWFzayA9IDxUZXh0dXJlMkRCYXNlPiByZXR1cm5lZEFycmF5WzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0MDQ6IC8vTGlnaHRNYXBNZXRob2Rcblx0XHRcdFx0dGFyZ2V0SUQgPSBwcm9wcy5nZXQoMSwgMCk7XG5cdFx0XHRcdHJldHVybmVkQXJyYXkgPSB0aGlzLmdldEFzc2V0QnlJRCh0YXJnZXRJRCwgW0Fzc2V0VHlwZS5URVhUVVJFXSk7XG5cdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdFx0XHR0aGlzLl9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgTGlnaHRNYXAgKElEID0gXCIgKyB0YXJnZXRJRCArIFwiICkgZm9yIHRoaXMgTGlnaHRNYXBNZXRob2RcIik7XG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RMaWdodE1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCB0aGlzLmJsZW5kTW9kZURpY1twcm9wcy5nZXQoNDAxLCAxMCldKTsgLy91c2VzZWNvbmRhcnlVViBub3Qgc2V0XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly9cdFx0XHRcdGNhc2UgNDA1OiAvL1Byb2plY3RpdmVUZXh0dXJlTWV0aG9kXG5cdFx0XHQvL1x0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdC8vXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSBnZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV9QUk9KRUNUT1JdKTtcblx0XHRcdC8vXHRcdFx0XHRcdGlmICghcmV0dXJuZWRBcnJheVswXSlcblx0XHRcdC8vXHRcdFx0XHRcdFx0X2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBUZXh0dXJlUHJvamVjdG9yIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFByb2plY3RpdmVUZXh0dXJlTWV0aG9kXCIpO1xuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IFByb2plY3RpdmVUZXh0dXJlTWV0aG9kKHJldHVybmVkQXJyYXlbMV0sIGJsZW5kTW9kZURpY1twcm9wcy5nZXQoNDAxLCAxMCldKTtcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0MDY6IC8vUmltTGlnaHRNZXRob2Rcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdFJpbUxpZ2h0TWV0aG9kKHByb3BzLmdldCg2MDEsIDB4ZmZmZmZmKSwgcHJvcHMuZ2V0KDEwMSwgMC40KSwgcHJvcHMuZ2V0KDEwMSwgMikpOyAvL2JsZW5kTW9kZVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDA3OiAvL0FscGhhTWFza01ldGhvZFxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdKTtcblx0XHRcdFx0aWYgKCFyZXR1cm5lZEFycmF5WzBdKVxuXHRcdFx0XHRcdHRoaXMuX2Jsb2Nrc1tibG9ja0lEXS5hZGRFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHRoZSBBbHBoYS10ZXh0dXJlIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIEFscGhhTWFza01ldGhvZFwiKTtcblx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IEVmZmVjdEFscGhhTWFza01ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBwcm9wcy5nZXQoNzAxLCBmYWxzZSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vXHRcdFx0XHRjYXNlIDQwODogLy9SZWZyYWN0aW9uRW52TWFwTWV0aG9kXG5cdFx0XHQvL1x0XHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdC8vXHRcdFx0XHRcdHJldHVybmVkQXJyYXkgPSBnZXRBc3NldEJ5SUQodGFyZ2V0SUQsIFtBc3NldFR5cGUuVEVYVFVSRV0sIFwiQ3ViZVRleHR1cmVcIik7XG5cdFx0XHQvL1x0XHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHQvL1x0XHRcdFx0XHRcdF9ibG9ja3NbYmxvY2tJRF0uYWRkRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0aGUgRW52TWFwIChJRCA9IFwiICsgdGFyZ2V0SUQgKyBcIiApIGZvciB0aGlzIFJlZnJhY3Rpb25FbnZNYXBNZXRob2RcIik7XG5cdFx0XHQvL1x0XHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgUmVmcmFjdGlvbkVudk1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBwcm9wcy5nZXQoMTAxLCAwLjEpLCBwcm9wcy5nZXQoMTAyLCAwLjAxKSwgcHJvcHMuZ2V0KDEwMywgMC4wMSksIHByb3BzLmdldCgxMDQsIDAuMDEpKTtcblx0XHRcdC8vXHRcdFx0XHRcdFJlZnJhY3Rpb25FbnZNYXBNZXRob2QoZWZmZWN0TWV0aG9kUmV0dXJuKS5hbHBoYSA9IHByb3BzLmdldCgxMDQsIDEpO1xuXHRcdFx0Ly9cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvL1x0XHRcdFx0Y2FzZSA0MDk6IC8vT3V0bGluZU1ldGhvZFxuXHRcdFx0Ly9cdFx0XHRcdFx0ZWZmZWN0TWV0aG9kUmV0dXJuID0gbmV3IE91dGxpbmVNZXRob2QocHJvcHMuZ2V0KDYwMSwgMHgwMDAwMDAwMCksIHByb3BzLmdldCgxMDEsIDEpLCBwcm9wcy5nZXQoNzAxLCB0cnVlKSwgcHJvcHMuZ2V0KDcwMiwgZmFsc2UpKTtcblx0XHRcdC8vXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0MTA6IC8vRnJlc25lbEVudk1hcE1ldGhvZFxuXHRcdFx0XHR0YXJnZXRJRCA9IHByb3BzLmdldCgxLCAwKTtcblx0XHRcdFx0cmV0dXJuZWRBcnJheSA9IHRoaXMuZ2V0QXNzZXRCeUlEKHRhcmdldElELCBbQXNzZXRUeXBlLlRFWFRVUkVdLCBcIkN1YmVUZXh0dXJlXCIpO1xuXHRcdFx0XHRpZiAoIXJldHVybmVkQXJyYXlbMF0pXG5cdFx0XHRcdFx0dGhpcy5fYmxvY2tzW2Jsb2NrSURdLmFkZEVycm9yKFwiQ291bGQgbm90IGZpbmQgdGhlIEVudk1hcCAoSUQgPSBcIiArIHRhcmdldElEICsgXCIgKSBmb3IgdGhpcyBGcmVzbmVsRW52TWFwTWV0aG9kXCIpO1xuXHRcdFx0XHRlZmZlY3RNZXRob2RSZXR1cm4gPSBuZXcgRWZmZWN0RnJlc25lbEVudk1hcE1ldGhvZChyZXR1cm5lZEFycmF5WzFdLCBwcm9wcy5nZXQoMTAxLCAxKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0MTE6IC8vRm9nTWV0aG9kXG5cdFx0XHRcdGVmZmVjdE1ldGhvZFJldHVybiA9IG5ldyBFZmZlY3RGb2dNZXRob2QocHJvcHMuZ2V0KDEwMSwgMCksIHByb3BzLmdldCgxMDIsIDEwMDApLCBwcm9wcy5nZXQoNjAxLCAweDgwODA4MCkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblx0XHR0aGlzLnBhcnNlVXNlckF0dHJpYnV0ZXMoKTtcblx0XHRyZXR1cm4gZWZmZWN0TWV0aG9kUmV0dXJuO1xuXG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVXNlckF0dHJpYnV0ZXMoKTpPYmplY3Rcblx0e1xuXHRcdHZhciBhdHRyaWJ1dGVzOk9iamVjdDtcblx0XHR2YXIgbGlzdF9sZW46bnVtYmVyO1xuXHRcdHZhciBhdHRpYnV0ZUNudDpudW1iZXI7XG5cblx0XHRsaXN0X2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cblx0XHRpZiAobGlzdF9sZW4gPiAwKSB7XG5cblx0XHRcdHZhciBsaXN0X2VuZDpudW1iZXI7XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSB7fTtcblxuXHRcdFx0bGlzdF9lbmQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgbGlzdF9sZW47XG5cblx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgbGlzdF9lbmQpIHtcblx0XHRcdFx0dmFyIG5zX2lkOm51bWJlcjtcblx0XHRcdFx0dmFyIGF0dHJfa2V5OnN0cmluZztcblx0XHRcdFx0dmFyIGF0dHJfdHlwZTpudW1iZXI7XG5cdFx0XHRcdHZhciBhdHRyX2xlbjpudW1iZXI7XG5cdFx0XHRcdHZhciBhdHRyX3ZhbDphbnk7XG5cblx0XHRcdFx0Ly8gVE9ETzogUHJvcGVybHkgdGVuZCB0byBuYW1lc3BhY2VzIGluIGF0dHJpYnV0ZXNcblx0XHRcdFx0bnNfaWQgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0YXR0cl9rZXkgPSB0aGlzLnBhcnNlVmFyU3RyKCk7XG5cdFx0XHRcdGF0dHJfdHlwZSA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXHRcdFx0XHRhdHRyX2xlbiA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVuc2lnbmVkSW50KCk7XG5cblx0XHRcdFx0aWYgKCh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uICsgYXR0cl9sZW4pID4gbGlzdF9lbmQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIiAgICAgICAgICAgRXJyb3IgaW4gcmVhZGluZyBhdHRyaWJ1dGUgIyBcIiArIGF0dGlidXRlQ250ICsgXCIgPSBza2lwcGVkIHRvIGVuZCBvZiBhdHRyaWJ1dGUtbGlzdFwiKTtcblx0XHRcdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gbGlzdF9lbmQ7XG5cdFx0XHRcdFx0cmV0dXJuIGF0dHJpYnV0ZXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzd2l0Y2ggKGF0dHJfdHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkFXRFNUUklORzpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVVRGQnl0ZXMoYXR0cl9sZW4pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UODpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkQnl0ZSgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMTY6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFNob3J0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQzMjpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkSW50KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIEFXRFBhcnNlci5CT09MOlxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQ4OlxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQxNjpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuVUlOVDMyOlxuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkJBRERSOlxuXHRcdFx0XHRcdFx0YXR0cl92YWwgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBBV0RQYXJzZXIuRkxPQVQzMjpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgQVdEUGFyc2VyLkZMT0FUNjQ6XG5cdFx0XHRcdFx0XHRhdHRyX3ZhbCA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZERvdWJsZSgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGF0dHJfdmFsID0gJ3VuaW1wbGVtZW50ZWQgYXR0cmlidXRlIHR5cGUgJyArIGF0dHJfdHlwZTtcblx0XHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKz0gYXR0cl9sZW47XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiYXR0cmlidXRlID0gbmFtZTogXCIgKyBhdHRyX2tleSArIFwiICAvIHZhbHVlID0gXCIgKyBhdHRyX3ZhbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhdHRyaWJ1dGVzW2F0dHJfa2V5XSA9IGF0dHJfdmFsO1xuXHRcdFx0XHRhdHRpYnV0ZUNudCArPSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBhdHRyaWJ1dGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVByb3BlcnRpZXMoZXhwZWN0ZWQ6T2JqZWN0KTpBV0RQcm9wZXJ0aWVzXG5cdHtcblx0XHR2YXIgbGlzdF9lbmQ6bnVtYmVyO1xuXHRcdHZhciBsaXN0X2xlbjpudW1iZXI7XG5cdFx0dmFyIHByb3BlcnR5Q250Om51bWJlciA9IDA7XG5cdFx0dmFyIHByb3BzOkFXRFByb3BlcnRpZXMgPSBuZXcgQVdEUHJvcGVydGllcygpO1xuXG5cdFx0bGlzdF9sZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdGxpc3RfZW5kID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxpc3RfbGVuO1xuXG5cdFx0aWYgKGV4cGVjdGVkKSB7XG5cblx0XHRcdHdoaWxlICh0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uIDwgbGlzdF9lbmQpIHtcblx0XHRcdFx0dmFyIGxlbjpudW1iZXI7XG5cdFx0XHRcdHZhciBrZXk6bnVtYmVyO1xuXHRcdFx0XHR2YXIgdHlwZTpudW1iZXI7XG5cblx0XHRcdFx0a2V5ID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0XHRsZW4gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0XHRcdGlmICgodGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiArIGxlbikgPiBsaXN0X2VuZCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiICAgICAgICAgICBFcnJvciBpbiByZWFkaW5nIHByb3BlcnR5ICMgXCIgKyBwcm9wZXJ0eUNudCArIFwiID0gc2tpcHBlZCB0byBlbmQgb2YgcHJvcGVydGllLWxpc3RcIik7XG5cdFx0XHRcdFx0dGhpcy5fbmV3QmxvY2tCeXRlcy5wb3NpdGlvbiA9IGxpc3RfZW5kO1xuXHRcdFx0XHRcdHJldHVybiBwcm9wcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChleHBlY3RlZC5oYXNPd25Qcm9wZXJ0eShrZXkudG9TdHJpbmcoKSkpIHtcblx0XHRcdFx0XHR0eXBlID0gZXhwZWN0ZWRba2V5XTtcblx0XHRcdFx0XHRwcm9wcy5zZXQoa2V5LCB0aGlzLnBhcnNlQXR0clZhbHVlKHR5cGUsIGxlbikpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX25ld0Jsb2NrQnl0ZXMucG9zaXRpb24gKz0gbGVuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHJvcGVydHlDbnQgKz0gMTtcblxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9uZXdCbG9ja0J5dGVzLnBvc2l0aW9uID0gbGlzdF9lbmQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzO1xuXG5cdH1cblxuXHRwcml2YXRlIHBhcnNlQXR0clZhbHVlKHR5cGU6bnVtYmVyLCBsZW46bnVtYmVyKTphbnlcblx0e1xuXHRcdHZhciBlbGVtX2xlbjpudW1iZXI7XG5cdFx0dmFyIHJlYWRfZnVuYzpGdW5jdGlvbjtcblxuXHRcdHN3aXRjaCAodHlwZSkge1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5CT09MOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UODpcblx0XHRcdFx0ZWxlbV9sZW4gPSAxO1xuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRCeXRlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuSU5UMTY6XG5cdFx0XHRcdGVsZW1fbGVuID0gMjtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkU2hvcnQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5JTlQzMjpcblx0XHRcdFx0ZWxlbV9sZW4gPSA0O1xuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRJbnQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UODpcblx0XHRcdFx0ZWxlbV9sZW4gPSAxO1xuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZEJ5dGU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5VSU5UMTY6XG5cdFx0XHRcdGVsZW1fbGVuID0gMjtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRTaG9ydDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgQVdEUGFyc2VyLlVJTlQzMjpcblx0XHRcdGNhc2UgQVdEUGFyc2VyLkNPTE9SOlxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuQkFERFI6XG5cdFx0XHRcdGVsZW1fbGVuID0gNDtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkVW5zaWduZWRJbnQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5GTE9BVDMyOlxuXHRcdFx0XHRlbGVtX2xlbiA9IDQ7XG5cdFx0XHRcdHJlYWRfZnVuYyA9IHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZEZsb2F0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBV0RQYXJzZXIuRkxPQVQ2NDpcblx0XHRcdFx0ZWxlbV9sZW4gPSA4O1xuXHRcdFx0XHRyZWFkX2Z1bmMgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGU7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5BV0RTVFJJTkc6XG5cdFx0XHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVVEZCeXRlcyhsZW4pO1xuXG5cdFx0XHRjYXNlIEFXRFBhcnNlci5WRUNUT1IyeDE6XG5cdFx0XHRjYXNlIEFXRFBhcnNlci5WRUNUT1IzeDE6XG5cdFx0XHRjYXNlIEFXRFBhcnNlci5WRUNUT1I0eDE6XG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFgzeDI6XG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFgzeDM6XG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFg0eDM6XG5cdFx0XHRjYXNlIEFXRFBhcnNlci5NVFg0eDQ6XG5cdFx0XHRcdGVsZW1fbGVuID0gODtcblx0XHRcdFx0cmVhZF9mdW5jID0gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRG91YmxlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHRcdGlmIChlbGVtX2xlbiA8IGxlbikge1xuXHRcdFx0dmFyIGxpc3Q6QXJyYXk8YW55PiA9IFtdO1xuXHRcdFx0dmFyIG51bV9yZWFkOm51bWJlciA9IDA7XG5cdFx0XHR2YXIgbnVtX2VsZW1zOm51bWJlciA9IGxlbi9lbGVtX2xlbjtcblxuXHRcdFx0d2hpbGUgKG51bV9yZWFkIDwgbnVtX2VsZW1zKSB7XG5cdFx0XHRcdGxpc3QucHVzaChyZWFkX2Z1bmMuYXBwbHkodGhpcy5fbmV3QmxvY2tCeXRlcykpOyAvLyBsaXN0LnB1c2gocmVhZF9mdW5jKCkpO1xuXHRcdFx0XHRudW1fcmVhZCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbGlzdDtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR2YXIgdmFsOmFueSA9IHJlYWRfZnVuYy5hcHBseSh0aGlzLl9uZXdCbG9ja0J5dGVzKTsvL3JlYWRfZnVuYygpO1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlSGVhZGVyKCk6dm9pZFxuXHR7XG5cdFx0dmFyIGZsYWdzOm51bWJlcjtcblx0XHR2YXIgYm9keV9sZW46bnVtYmVyO1xuXG5cdFx0dGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPSAzOyAvLyBTa2lwIG1hZ2ljIHN0cmluZyBhbmQgcGFyc2UgdmVyc2lvblxuXG5cdFx0dGhpcy5fdmVyc2lvblswXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHR0aGlzLl92ZXJzaW9uWzFdID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkQnl0ZSgpO1xuXG5cdFx0ZmxhZ3MgPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRTaG9ydCgpOyAvLyBQYXJzZSBiaXQgZmxhZ3NcblxuXHRcdHRoaXMuX3N0cmVhbWluZyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUcxKTtcblxuXHRcdGlmICgodGhpcy5fdmVyc2lvblswXSA9PSAyKSAmJiAodGhpcy5fdmVyc2lvblsxXSA9PSAxKSkge1xuXHRcdFx0dGhpcy5fYWNjdXJhY3lNYXRyaXggPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHMik7XG5cdFx0XHR0aGlzLl9hY2N1cmFjeUdlbyA9IEJpdEZsYWdzLnRlc3QoZmxhZ3MsIEJpdEZsYWdzLkZMQUczKTtcblx0XHRcdHRoaXMuX2FjY3VyYWN5UHJvcHMgPSBCaXRGbGFncy50ZXN0KGZsYWdzLCBCaXRGbGFncy5GTEFHNCk7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgd2Ugc2V0IF9hY2N1cmFjeU9uQmxvY2tzLCB0aGUgcHJlY2lzaW9uLXZhbHVlcyBhcmUgcmVhZCBmcm9tIGVhY2ggYmxvY2staGVhZGVyLlxuXG5cdFx0Ly8gc2V0IHN0b3JhZ2VQcmVjaXNpb24gdHlwZXNcblx0XHR0aGlzLl9nZW9OclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQzMjtcblxuXHRcdGlmICh0aGlzLl9hY2N1cmFjeUdlbykge1xuXHRcdFx0dGhpcy5fZ2VvTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUNjQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbWF0cml4TnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XG5cblx0XHRpZiAodGhpcy5fYWNjdXJhY3lNYXRyaXgpIHtcblx0XHRcdHRoaXMuX21hdHJpeE5yVHlwZSA9IEFXRFBhcnNlci5GTE9BVDY0O1xuXHRcdH1cblxuXHRcdHRoaXMuX3Byb3BzTnJUeXBlID0gQVdEUGFyc2VyLkZMT0FUMzI7XG5cblx0XHRpZiAodGhpcy5fYWNjdXJhY3lQcm9wcykge1xuXHRcdFx0dGhpcy5fcHJvcHNOclR5cGUgPSBBV0RQYXJzZXIuRkxPQVQ2NDtcblx0XHR9XG5cblx0XHR0aGlzLl9jb21wcmVzc2lvbiA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTsgLy8gY29tcHJlc3Npb25cblxuXHRcdGlmICh0aGlzLl9kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJJbXBvcnQgQVdERmlsZSBvZiB2ZXJzaW9uID0gXCIgKyB0aGlzLl92ZXJzaW9uWzBdICsgXCIgLSBcIiArIHRoaXMuX3ZlcnNpb25bMV0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJHbG9iYWwgU2V0dGluZ3MgPSBDb21wcmVzc2lvbiA9IFwiICsgdGhpcy5fY29tcHJlc3Npb24gKyBcIiB8IFN0cmVhbWluZyA9IFwiICsgdGhpcy5fc3RyZWFtaW5nICsgXCIgfCBNYXRyaXgtUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeU1hdHJpeCArIFwiIHwgR2VvbWV0cnktUHJlY2lzaW9uID0gXCIgKyB0aGlzLl9hY2N1cmFjeUdlbyArIFwiIHwgUHJvcGVydGllcy1QcmVjaXNpb24gPSBcIiArIHRoaXMuX2FjY3VyYWN5UHJvcHMpO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGZpbGUgaW50ZWdyaXR5XG5cdFx0Ym9keV9sZW4gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRpZiAoIXRoaXMuX3N0cmVhbWluZyAmJiBib2R5X2xlbiAhPSB0aGlzLl9ieXRlRGF0YS5nZXRCeXRlc0F2YWlsYWJsZSgpKSB7XG5cdFx0XHR0aGlzLl9wRGllV2l0aEVycm9yKCdBV0QyIGJvZHkgbGVuZ3RoIGRvZXMgbm90IG1hdGNoIGhlYWRlciBpbnRlZ3JpdHkgZmllbGQnKTtcblx0XHR9XG5cblx0fVxuXHQvLyBIZWxwZXIgLSBmdW5jdGlvbnNcblx0cHJpdmF0ZSBnZXRVVkZvclZlcnRleEFuaW1hdGlvbihtZXNoSUQ6bnVtYmVyIC8qdWludCovKTpBcnJheTxBcnJheTxudW1iZXI+PlxuXHR7XG5cdFx0aWYgKHRoaXMuX2Jsb2Nrc1ttZXNoSURdLmRhdGEgaW5zdGFuY2VvZiBNZXNoKVxuXHRcdFx0bWVzaElEID0gdGhpcy5fYmxvY2tzW21lc2hJRF0uZ2VvSUQ7XG5cdFx0aWYgKHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbilcblx0XHRcdHJldHVybiB0aGlzLl9ibG9ja3NbbWVzaElEXS51dnNGb3JWZXJ0ZXhBbmltYXRpb247XG5cdFx0dmFyIGdlb21ldHJ5Okdlb21ldHJ5ID0gKDxHZW9tZXRyeT4gdGhpcy5fYmxvY2tzW21lc2hJRF0uZGF0YSk7XG5cdFx0dmFyIGdlb0NudDpudW1iZXIgLyppbnQqLyA9IDA7XG5cdFx0dmFyIHVkOkFycmF5PG51bWJlcj47XG5cdFx0dmFyIHVTdHJpZGU6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciB1T2ZmczpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIG51bVBvaW50czpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIG5ld1V2czpBcnJheTxudW1iZXI+O1xuXHRcdHZhciBzdWJfZ2VvbTpUcmlhbmdsZVN1Ykdlb21ldHJ5O1xuXHRcdHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbiA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PigpO1xuXHRcdHdoaWxlIChnZW9DbnQgPCBnZW9tZXRyeS5zdWJHZW9tZXRyaWVzLmxlbmd0aCkge1xuXHRcdFx0bmV3VXZzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHRcdHN1Yl9nZW9tID0gPFRyaWFuZ2xlU3ViR2VvbWV0cnk+IGdlb21ldHJ5LnN1Ykdlb21ldHJpZXNbZ2VvQ250XTtcblx0XHRcdG51bVBvaW50cyA9IHN1Yl9nZW9tLm51bVZlcnRpY2VzO1xuXHRcdFx0dWQgPSBzdWJfZ2VvbS51dnM7XG5cdFx0XHR1U3RyaWRlID0gc3ViX2dlb20uZ2V0U3RyaWRlKFRyaWFuZ2xlU3ViR2VvbWV0cnkuVVZfREFUQSk7XG5cdFx0XHR1T2ZmcyA9IHN1Yl9nZW9tLmdldE9mZnNldChUcmlhbmdsZVN1Ykdlb21ldHJ5LlVWX0RBVEEpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG51bVBvaW50czsgaSsrKSB7XG5cdFx0XHRcdG5ld1V2cy5wdXNoKHVkW3VPZmZzICsgaSp1U3RyaWRlICsgMF0pO1xuXHRcdFx0XHRuZXdVdnMucHVzaCh1ZFt1T2ZmcyArIGkqdVN0cmlkZSArIDFdKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbi5wdXNoKG5ld1V2cyk7XG5cdFx0XHRnZW9DbnQrKztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2Nrc1ttZXNoSURdLnV2c0ZvclZlcnRleEFuaW1hdGlvbjtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VWYXJTdHIoKTpzdHJpbmdcblx0e1xuXG5cdFx0dmFyIGxlbjpudW1iZXIgPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0cmV0dXJuIHRoaXMuX25ld0Jsb2NrQnl0ZXMucmVhZFVURkJ5dGVzKGxlbik7XG5cdH1cblxuXHRwcml2YXRlIGdldEFzc2V0QnlJRChhc3NldElEOm51bWJlciwgYXNzZXRUeXBlc1RvR2V0OkFycmF5PHN0cmluZz4sIGV4dHJhVHlwZUluZm86c3RyaW5nID0gXCJTaW5nbGVUZXh0dXJlXCIpOkFycmF5PGFueT5cblx0e1xuXHRcdHZhciByZXR1cm5BcnJheTpBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcblx0XHR2YXIgdHlwZUNudDpudW1iZXIgPSAwO1xuXHRcdGlmIChhc3NldElEID4gMCkge1xuXHRcdFx0aWYgKHRoaXMuX2Jsb2Nrc1thc3NldElEXSkge1xuXHRcdFx0XHRpZiAodGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEpIHtcblx0XHRcdFx0XHR3aGlsZSAodHlwZUNudCA8IGFzc2V0VHlwZXNUb0dldC5sZW5ndGgpIHtcblxuXHRcdFx0XHRcdFx0dmFyIGlhc3NldDpJQXNzZXQgPSA8SUFzc2V0PiB0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YTtcblxuXHRcdFx0XHRcdFx0aWYgKGlhc3NldC5hc3NldFR5cGUgPT0gYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdKSB7XG5cdFx0XHRcdFx0XHRcdC8vaWYgdGhlIHJpZ2h0IGFzc2V0VHlwZSB3YXMgZm91bmRcblx0XHRcdFx0XHRcdFx0aWYgKChhc3NldFR5cGVzVG9HZXRbdHlwZUNudF0gPT0gQXNzZXRUeXBlLlRFWFRVUkUpICYmIChleHRyYVR5cGVJbmZvID09IFwiQ3ViZVRleHR1cmVcIikpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEgaW5zdGFuY2VvZiBJbWFnZUN1YmVUZXh0dXJlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLl9ibG9ja3NbYXNzZXRJRF0uZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICgoYXNzZXRUeXBlc1RvR2V0W3R5cGVDbnRdID09IEFzc2V0VHlwZS5URVhUVVJFKSAmJiAoZXh0cmFUeXBlSW5mbyA9PSBcIlNpbmdsZVRleHR1cmVcIikpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGEgaW5zdGFuY2VvZiBJbWFnZVRleHR1cmUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2godHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRoaXMuX2Jsb2Nrc1thc3NldElEXS5kYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly9pZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuR0VPTUVUUlkpICYmIChJQXNzZXQoX2Jsb2Nrc1thc3NldElEXS5kYXRhKS5hc3NldFR5cGUgPT0gQXNzZXRUeXBlLk1FU0gpKSB7XG5cdFx0XHRcdFx0XHRpZiAoKGFzc2V0VHlwZXNUb0dldFt0eXBlQ250XSA9PSBBc3NldFR5cGUuR0VPTUVUUlkpICYmIChpYXNzZXQuYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NRVNIKSkge1xuXG5cdFx0XHRcdFx0XHRcdHZhciBtZXNoOk1lc2ggPSA8TWVzaD4gdGhpcy5fYmxvY2tzW2Fzc2V0SURdLmRhdGFcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKG1lc2guZ2VvbWV0cnkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dHlwZUNudCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBpZiB0aGUgaGFzIG5vdCByZXR1cm5lZCBhbnl0aGluZyB5ZXQsIHRoZSBhc3NldCBpcyBub3QgZm91bmQsIG9yIHRoZSBmb3VuZCBhc3NldCBpcyBub3QgdGhlIHJpZ2h0IHR5cGUuXG5cdFx0cmV0dXJuQXJyYXkucHVzaChmYWxzZSk7XG5cdFx0cmV0dXJuQXJyYXkucHVzaCh0aGlzLmdldERlZmF1bHRBc3NldChhc3NldFR5cGVzVG9HZXRbMF0sIGV4dHJhVHlwZUluZm8pKTtcblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH1cblx0cHJpdmF0ZSBnZXREZWZhdWx0QXNzZXQoYXNzZXRUeXBlOnN0cmluZywgZXh0cmFUeXBlSW5mbzpzdHJpbmcpOklBc3NldFxuXHR7XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIChhc3NldFR5cGUgPT0gQXNzZXRUeXBlLlRFWFRVUkUpOlxuXHRcdFx0XHRpZiAoZXh0cmFUeXBlSW5mbyA9PSBcIkN1YmVUZXh0dXJlXCIpXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0RGVmYXVsdEN1YmVUZXh0dXJlKCk7XG5cdFx0XHRcdGlmIChleHRyYVR5cGVJbmZvID09IFwiU2luZ2xlVGV4dHVyZVwiKVxuXHRcdFx0XHRcdHJldHVybiBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRUZXh0dXJlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAoYXNzZXRUeXBlID09IEFzc2V0VHlwZS5NQVRFUklBTCk6XG5cdFx0XHRcdHJldHVybiBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRNYXRlcmlhbCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXREZWZhdWx0Q3ViZVRleHR1cmUoKTpJQXNzZXRcblx0e1xuXHRcdGlmICghdGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlKSB7XG5cdFx0XHR2YXIgZGVmYXVsdEJpdG1hcDpCaXRtYXBEYXRhID0gRGVmYXVsdE1hdGVyaWFsTWFuYWdlci5jcmVhdGVDaGVja2VyZWRCaXRtYXBEYXRhKCk7XG5cblx0XHRcdHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZSA9IG5ldyBCaXRtYXBDdWJlVGV4dHVyZShkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwLCBkZWZhdWx0Qml0bWFwKTtcblx0XHRcdHRoaXMuX2RlZmF1bHRDdWJlVGV4dHVyZS5uYW1lID0gXCJkZWZhdWx0Q3ViZVRleHR1cmVcIjtcblx0XHR9XG5cblx0XHRyZXR1cm4gPElBc3NldD4gdGhpcy5fZGVmYXVsdEN1YmVUZXh0dXJlO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkTnVtYmVyKHByZWNpc2lvbjpib29sZWFuID0gZmFsc2UpOm51bWJlclxuXHR7XG5cdFx0aWYgKHByZWNpc2lvbilcblx0XHRcdHJldHVybiB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWREb3VibGUoKTtcblx0XHRyZXR1cm4gdGhpcy5fbmV3QmxvY2tCeXRlcy5yZWFkRmxvYXQoKTtcblxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZU1hdHJpeDNEKCk6TWF0cml4M0Rcblx0e1xuXHRcdHJldHVybiBuZXcgTWF0cml4M0QodGhpcy5wYXJzZU1hdHJpeDQzUmF3RGF0YSgpKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VNYXRyaXgzMlJhd0RhdGEoKTpBcnJheTxudW1iZXI+XG5cdHtcblx0XHR2YXIgaTpudW1iZXI7XG5cdFx0dmFyIG10eF9yYXc6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KDYpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCA2OyBpKyspIHtcblx0XHRcdG10eF9yYXdbaV0gPSB0aGlzLl9uZXdCbG9ja0J5dGVzLnJlYWRGbG9hdCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtdHhfcmF3O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZU1hdHJpeDQzUmF3RGF0YSgpOkFycmF5PG51bWJlcj5cblx0e1xuXHRcdHZhciBtdHhfcmF3OkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigxNik7XG5cblx0XHRtdHhfcmF3WzBdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzFdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzNdID0gMC4wO1xuXHRcdG10eF9yYXdbNF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbNV0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbNl0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbN10gPSAwLjA7XG5cdFx0bXR4X3Jhd1s4XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1s5XSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1sxMF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbMTFdID0gMC4wO1xuXHRcdG10eF9yYXdbMTJdID0gdGhpcy5yZWFkTnVtYmVyKHRoaXMuX2FjY3VyYWN5TWF0cml4KTtcblx0XHRtdHhfcmF3WzEzXSA9IHRoaXMucmVhZE51bWJlcih0aGlzLl9hY2N1cmFjeU1hdHJpeCk7XG5cdFx0bXR4X3Jhd1sxNF0gPSB0aGlzLnJlYWROdW1iZXIodGhpcy5fYWNjdXJhY3lNYXRyaXgpO1xuXHRcdG10eF9yYXdbMTVdID0gMS4wO1xuXG5cdFx0Ly9UT0RPOiBmaXggbWF4IGV4cG9ydGVyIHRvIHJlbW92ZSBOYU4gdmFsdWVzIGluIGpvaW50IDAgaW52ZXJzZSBiaW5kIHBvc2VcblxuXHRcdGlmIChpc05hTihtdHhfcmF3WzBdKSkge1xuXHRcdFx0bXR4X3Jhd1swXSA9IDE7XG5cdFx0XHRtdHhfcmF3WzFdID0gMDtcblx0XHRcdG10eF9yYXdbMl0gPSAwO1xuXHRcdFx0bXR4X3Jhd1s0XSA9IDA7XG5cdFx0XHRtdHhfcmF3WzVdID0gMTtcblx0XHRcdG10eF9yYXdbNl0gPSAwO1xuXHRcdFx0bXR4X3Jhd1s4XSA9IDA7XG5cdFx0XHRtdHhfcmF3WzldID0gMDtcblx0XHRcdG10eF9yYXdbMTBdID0gMTtcblx0XHRcdG10eF9yYXdbMTJdID0gMDtcblx0XHRcdG10eF9yYXdbMTNdID0gMDtcblx0XHRcdG10eF9yYXdbMTRdID0gMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiBtdHhfcmF3O1xuXHR9XG5cbn1cblxuZXhwb3J0ID0gQVdEUGFyc2VyO1xuXG5jbGFzcyBBV0RCbG9ja1xue1xuXHRwdWJsaWMgaWQ6bnVtYmVyO1xuXHRwdWJsaWMgbmFtZTpzdHJpbmc7XG5cdHB1YmxpYyBkYXRhOmFueTtcblx0cHVibGljIGxlbjphbnk7XG5cdHB1YmxpYyBnZW9JRDpudW1iZXI7XG5cdHB1YmxpYyBleHRyYXM6T2JqZWN0O1xuXHRwdWJsaWMgYnl0ZXM6Qnl0ZUFycmF5O1xuXHRwdWJsaWMgZXJyb3JNZXNzYWdlczpBcnJheTxzdHJpbmc+O1xuXHRwdWJsaWMgdXZzRm9yVmVydGV4QW5pbWF0aW9uOkFycmF5PEFycmF5PG51bWJlcj4+O1xuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHR9XG5cblx0cHVibGljIGRpc3Bvc2UoKVxuXHR7XG5cblx0XHR0aGlzLmlkID0gbnVsbDtcblx0XHR0aGlzLmJ5dGVzID0gbnVsbDtcblx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBudWxsO1xuXHRcdHRoaXMudXZzRm9yVmVydGV4QW5pbWF0aW9uID0gbnVsbDtcblxuXHR9XG5cblx0cHVibGljIGFkZEVycm9yKGVycm9yTXNnOnN0cmluZyk6dm9pZFxuXHR7XG5cdFx0aWYgKCF0aGlzLmVycm9yTWVzc2FnZXMpXG5cdFx0XHR0aGlzLmVycm9yTWVzc2FnZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG5cdFx0dGhpcy5lcnJvck1lc3NhZ2VzLnB1c2goZXJyb3JNc2cpO1xuXHR9XG59XG5cbmNsYXNzIEFXRFByb3BlcnRpZXNcbntcblx0cHVibGljIHNldChrZXk6bnVtYmVyLCB2YWx1ZTphbnkpOnZvaWRcblx0e1xuXHRcdHRoaXNbIGtleS50b1N0cmluZygpIF0gPSB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBnZXQoa2V5Om51bWJlciwgZmFsbGJhY2s6YW55KTphbnlcblx0e1xuXHRcdGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleS50b1N0cmluZygpKSkge1xuXHRcdFx0cmV0dXJuIHRoaXNba2V5LnRvU3RyaW5nKCldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsbGJhY2s7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgQml0RmxhZ3Ncbntcblx0cHVibGljIHN0YXRpYyBGTEFHMTpudW1iZXIgPSAxO1xuXHRwdWJsaWMgc3RhdGljIEZMQUcyOm51bWJlciA9IDI7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzM6bnVtYmVyID0gNDtcblx0cHVibGljIHN0YXRpYyBGTEFHNDpudW1iZXIgPSA4O1xuXHRwdWJsaWMgc3RhdGljIEZMQUc1Om51bWJlciA9IDE2O1xuXHRwdWJsaWMgc3RhdGljIEZMQUc2Om51bWJlciA9IDMyO1xuXHRwdWJsaWMgc3RhdGljIEZMQUc3Om51bWJlciA9IDY0O1xuXHRwdWJsaWMgc3RhdGljIEZMQUc4Om51bWJlciA9IDEyODtcblx0cHVibGljIHN0YXRpYyBGTEFHOTpudW1iZXIgPSAyNTY7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzEwOm51bWJlciA9IDUxMjtcblx0cHVibGljIHN0YXRpYyBGTEFHMTE6bnVtYmVyID0gMTAyNDtcblx0cHVibGljIHN0YXRpYyBGTEFHMTI6bnVtYmVyID0gMjA0ODtcblx0cHVibGljIHN0YXRpYyBGTEFHMTM6bnVtYmVyID0gNDA5Njtcblx0cHVibGljIHN0YXRpYyBGTEFHMTQ6bnVtYmVyID0gODE5Mjtcblx0cHVibGljIHN0YXRpYyBGTEFHMTU6bnVtYmVyID0gMTYzODQ7XG5cdHB1YmxpYyBzdGF0aWMgRkxBRzE2Om51bWJlciA9IDMyNzY4O1xuXG5cdHB1YmxpYyBzdGF0aWMgdGVzdChmbGFnczpudW1iZXIsIHRlc3RGbGFnOm51bWJlcik6Ym9vbGVhblxuXHR7XG5cdFx0cmV0dXJuIChmbGFncyAmIHRlc3RGbGFnKSA9PSB0ZXN0RmxhZztcblx0fVxufVxuIl19