"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sampler2D_1 = require("@awayjs/core/lib/image/Sampler2D");
var AttributesBuffer_1 = require("@awayjs/core/lib/attributes/AttributesBuffer");
var BitmapImage2D_1 = require("@awayjs/core/lib/image/BitmapImage2D");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("@awayjs/core/lib/net/URLRequest");
var ParserBase_1 = require("@awayjs/core/lib/parsers/ParserBase");
var ParserUtils_1 = require("@awayjs/core/lib/parsers/ParserUtils");
var TriangleElements_1 = require("@awayjs/display/lib/graphics/TriangleElements");
var DisplayObjectContainer_1 = require("@awayjs/display/lib/display/DisplayObjectContainer");
var Sprite_1 = require("@awayjs/display/lib/display/Sprite");
var DefaultMaterialManager_1 = require("@awayjs/display/lib/managers/DefaultMaterialManager");
var Single2DTexture_1 = require("@awayjs/display/lib/textures/Single2DTexture");
var MethodMaterial_1 = require("@awayjs/materials/lib/MethodMaterial");
var MethodMaterialMode_1 = require("@awayjs/materials/lib/MethodMaterialMode");
var SpecularBasicMethod_1 = require("@awayjs/materials/lib/methods/SpecularBasicMethod");
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
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.TEXT);
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
        var content = ParserUtils_1.ParserUtils.toString(data);
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
            var str = ParserUtils_1.ParserUtils.toString(resourceDependency.data);
            this.parseMtl(str);
        }
        else {
            var asset;
            if (resourceDependency.assets.length != 1) {
                return;
            }
            asset = resourceDependency.assets[0];
            if (asset.isAsset(BitmapImage2D_1.BitmapImage2D)) {
                var lm = new LoadedMaterial();
                lm.materialID = resourceDependency.id;
                lm.texture = new Single2DTexture_1.Single2DTexture(asset);
                this._materialLoaded.push(lm);
                if (this._sprites.length > 0) {
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
        if (this._sprites.length > 0)
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
            this._sprites = new Array();
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
                return ParserBase_1.ParserBase.MORE_TO_PARSE;
            }
        }
        if (this._charIndex >= this._stringLength) {
            if (this._mtlLib && !this._mtlLibLoaded) {
                return ParserBase_1.ParserBase.MORE_TO_PARSE;
            }
            this.translate();
            this.applyMaterials();
            return ParserBase_1.ParserBase.PARSING_DONE;
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    OBJParser.prototype._pStartParsing = function (frameLimit) {
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer_1.DisplayObjectContainer();
        _super.prototype._pStartParsing.call(this, frameLimit);
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
            var graphics;
            var sprite;
            var m;
            var sm;
            var bmMaterial;
            for (var g = 0; g < numGroups; ++g) {
                bmMaterial = new MethodMaterial_1.MethodMaterial(DefaultMaterialManager_1.DefaultMaterialManager.getDefaultImage2D());
                //check for multipass
                if (this.materialMode >= 2)
                    bmMaterial.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                sprite = new Sprite_1.Sprite(bmMaterial);
                graphics = sprite.graphics;
                materialGroups = groups[g].materialGroups;
                numMaterialGroups = materialGroups.length;
                for (m = 0; m < numMaterialGroups; ++m)
                    this.translateMaterialGroup(materialGroups[m], graphics);
                if (graphics.count == 0)
                    continue;
                // Finalize and force type-based name
                this._pFinalizeAsset(graphics); //, "");
                if (this._objects[objIndex].name) {
                    // this is a full independent object ('o' tag in OBJ file)
                    sprite.name = this._objects[objIndex].name;
                }
                else if (groups[g].name) {
                    // this is a group so the sub groups contain the actual sprite object names ('g' tag in OBJ file)
                    sprite.name = groups[g].name;
                }
                else {
                    // No name stored. Use empty string which will force it
                    // to be overridden by finalizeAsset() to type default.
                    sprite.name = "";
                }
                this._sprites.push(sprite);
                if (groups[g].materialID != "")
                    bmMaterial.name = groups[g].materialID + "~" + sprite.name;
                else
                    bmMaterial.name = this._lastMtlID + "~" + sprite.name;
                if (sprite.graphics.count > 1) {
                    for (sm = 1; sm < sprite.graphics.count; ++sm)
                        sprite.graphics.getGraphicAt(sm).material = bmMaterial;
                }
                //add to the content property
                this._pContent.addChild(sprite);
                this._pFinalizeAsset(sprite);
            }
        }
    };
    /**
     * Translates an obj's material group to a subgraphics.
     * @param materialGroup The material group data to convert.
     * @param graphics The Graphics to contain the converted Elements.
     */
    OBJParser.prototype.translateMaterialGroup = function (materialGroup, graphics) {
        var faces = materialGroup.faces;
        var face;
        var numFaces = faces.length;
        var numVerts;
        var elements;
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
            elements = new TriangleElements_1.TriangleElements(new AttributesBuffer_1.AttributesBuffer());
            elements.autoDeriveNormals = normals.length ? false : true;
            elements.setIndices(indices);
            elements.setPositions(vertices);
            elements.setNormals(normals);
            elements.setUVs(uvs);
            graphics.addGraphic(elements);
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
                    basicSpecularMethod = new SpecularBasicMethod_1.SpecularBasicMethod();
                    basicSpecularMethod.color = specularColor;
                    basicSpecularMethod.strength = specular;
                    var specularData = new SpecularData();
                    specularData.alpha = alpha;
                    specularData.basicSpecularMethod = basicSpecularMethod;
                    specularData.materialID = this._lastMtlID;
                    if (!this._materialSpecularData)
                        this._materialSpecularData = new Array();
                    this._materialSpecularData.push(specularData);
                }
                this._pAddDependency(this._lastMtlID, new URLRequest_1.URLRequest(mapkd));
            }
            else if (useColor && !isNaN(color)) {
                var lm = new LoadedMaterial();
                lm.materialID = this._lastMtlID;
                if (alpha == 0)
                    console.log("Warning: an alpha value of 0 was found in mtl color tag (Tr or d) ref:" + this._lastMtlID + ", sprite(es) using it will be invisible!");
                var cm = new MethodMaterial_1.MethodMaterial(color);
                if (this.materialMode < 2) {
                    cm.alpha = alpha;
                }
                else {
                    cm.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
                }
                cm.diffuseMethod.color = diffuseColor;
                if (useSpecular) {
                    cm.specularMethod.color = specularColor;
                    cm.specularMethod.strength = specular;
                }
                lm.cm = cm;
                this._materialLoaded.push(lm);
                if (this._sprites.length > 0)
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
        //Reconstruct URL/filename
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
        this._pAddDependency('mtl', new URLRequest_1.URLRequest(mtlurl), true);
        this._pPauseAndRetrieveDependencies(); //
    };
    OBJParser.prototype.applyMaterial = function (lm) {
        var decomposeID;
        var sprite;
        var tm;
        var j;
        var specularData;
        for (var i = 0; i < this._sprites.length; ++i) {
            sprite = this._sprites[i];
            decomposeID = sprite.material.name.split("~");
            if (decomposeID[0] == lm.materialID) {
                if (lm.cm) {
                    if (sprite.material)
                        sprite.material = null;
                    sprite.material = lm.cm;
                }
                else if (lm.texture) {
                    tm = sprite.material;
                    tm.ambientMethod.texture = lm.texture;
                    tm.style.color = lm.color;
                    tm.alpha = lm.alpha;
                    tm.style.sampler = new Sampler2D_1.Sampler2D(true);
                    if (this.materialMode < 2)
                        tm.alpha = lm.alpha;
                    else
                        tm.mode = MethodMaterialMode_1.MethodMaterialMode.MULTI_PASS;
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
                                tm.specularMethod.color = specularData.color;
                                tm.specularMethod.strength = specularData.alpha;
                                break;
                            }
                        }
                    }
                }
                sprite.material.name = decomposeID[1] ? decomposeID[1] : decomposeID[0];
                this._sprites.splice(i, 1);
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
}(ParserBase_1.ParserBase));
exports.OBJParser = OBJParser;
var ObjectGroup = (function () {
    function ObjectGroup() {
        this.groups = new Array();
    }
    return ObjectGroup;
}());
exports.ObjectGroup = ObjectGroup;
var Group = (function () {
    function Group() {
        this.materialGroups = new Array();
    }
    return Group;
}());
exports.Group = Group;
var MaterialGroup = (function () {
    function MaterialGroup() {
        this.faces = new Array();
    }
    return MaterialGroup;
}());
exports.MaterialGroup = MaterialGroup;
var SpecularData = (function () {
    function SpecularData() {
        this.color = 0xFFFFFF;
        this.alpha = 1;
    }
    return SpecularData;
}());
exports.SpecularData = SpecularData;
var LoadedMaterial = (function () {
    function LoadedMaterial() {
        this.color = 0xFFFFFF;
        this.alpha = 1;
    }
    return LoadedMaterial;
}());
exports.LoadedMaterial = LoadedMaterial;
var FaceData = (function () {
    function FaceData() {
        this.vertexIndices = new Array();
        this.uvIndices = new Array();
        this.normalIndices = new Array();
        this.indexIds = new Array(); // used for real index lookups
    }
    return FaceData;
}());
exports.FaceData = FaceData;
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
}());
exports.UV = UV;
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
}());
exports.Vertex = Vertex;
