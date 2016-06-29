"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttributesBuffer_1 = require("@awayjs/core/lib/attributes/AttributesBuffer");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("@awayjs/core/lib/net/URLRequest");
var ParserBase_1 = require("@awayjs/core/lib/parsers/ParserBase");
var ParserUtils_1 = require("@awayjs/core/lib/parsers/ParserUtils");
var Graphics_1 = require("@awayjs/display/lib/graphics/Graphics");
var TriangleElements_1 = require("@awayjs/display/lib/graphics/TriangleElements");
var DisplayObjectContainer_1 = require("@awayjs/display/lib/display/DisplayObjectContainer");
var Sprite_1 = require("@awayjs/display/lib/display/Sprite");
var DefaultMaterialManager_1 = require("@awayjs/display/lib/managers/DefaultMaterialManager");
var VertexClipNode_1 = require("@awayjs/renderer/lib/animators/nodes/VertexClipNode");
var VertexAnimationSet_1 = require("@awayjs/renderer/lib/animators/VertexAnimationSet");
var MethodMaterial_1 = require("@awayjs/materials/lib/MethodMaterial");
var MethodMaterialMode_1 = require("@awayjs/materials/lib/MethodMaterialMode");
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
