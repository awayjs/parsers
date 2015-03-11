var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var Geometry = require("awayjs-core/lib/data/Geometry");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var TextureBase = require("awayjs-core/lib/textures/TextureBase");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var DefaultMaterialManager = require("awayjs-display/lib/managers/DefaultMaterialManager");
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodMaterialMode = require("awayjs-methodmaterials/lib/MethodMaterialMode");
var SpecularBasicMethod = require("awayjs-methodmaterials/lib/methods/SpecularBasicMethod");
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
        _super.call(this, URLLoaderDataFormat.TEXT);
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
        var content = ParserUtils.toString(data);
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
            var str = ParserUtils.toString(resourceDependency.data);
            this.parseMtl(str);
        }
        else {
            var asset;
            if (resourceDependency.assets.length != 1) {
                return;
            }
            asset = resourceDependency.assets[0];
            if (asset.isAsset(TextureBase)) {
                var lm = new LoadedMaterial();
                lm.materialID = resourceDependency.id;
                lm.texture = asset;
                this._materialLoaded.push(lm);
                if (this._meshes.length > 0) {
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
        if (this._meshes.length > 0)
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
            this._meshes = new Array();
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
                return ParserBase.MORE_TO_PARSE;
            }
        }
        if (this._charIndex >= this._stringLength) {
            if (this._mtlLib && !this._mtlLibLoaded) {
                return ParserBase.MORE_TO_PARSE;
            }
            this.translate();
            this.applyMaterials();
            return ParserBase.PARSING_DONE;
        }
        return ParserBase.MORE_TO_PARSE;
    };
    OBJParser.prototype._pStartParsing = function (frameLimit) {
        _super.prototype._pStartParsing.call(this, frameLimit);
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer();
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
            var geometry;
            var mesh;
            var m;
            var sm;
            var bmMaterial;
            for (var g = 0; g < numGroups; ++g) {
                geometry = new Geometry();
                materialGroups = groups[g].materialGroups;
                numMaterialGroups = materialGroups.length;
                for (m = 0; m < numMaterialGroups; ++m)
                    this.translateMaterialGroup(materialGroups[m], geometry);
                if (geometry.subGeometries.length == 0)
                    continue;
                // Finalize and force type-based name
                this._pFinalizeAsset(geometry); //, "");
                bmMaterial = new MethodMaterial(DefaultMaterialManager.getDefaultTexture());
                //check for multipass
                if (this.materialMode >= 2)
                    bmMaterial.mode = MethodMaterialMode.MULTI_PASS;
                mesh = new Mesh(geometry, bmMaterial);
                if (this._objects[objIndex].name) {
                    // this is a full independent object ('o' tag in OBJ file)
                    mesh.name = this._objects[objIndex].name;
                }
                else if (groups[g].name) {
                    // this is a group so the sub groups contain the actual mesh object names ('g' tag in OBJ file)
                    mesh.name = groups[g].name;
                }
                else {
                    // No name stored. Use empty string which will force it
                    // to be overridden by finalizeAsset() to type default.
                    mesh.name = "";
                }
                this._meshes.push(mesh);
                if (groups[g].materialID != "")
                    bmMaterial.name = groups[g].materialID + "~" + mesh.name;
                else
                    bmMaterial.name = this._lastMtlID + "~" + mesh.name;
                if (mesh.subMeshes.length > 1) {
                    for (sm = 1; sm < mesh.subMeshes.length; ++sm)
                        mesh.subMeshes[sm].material = bmMaterial;
                }
                //add to the content property
                this._pContent.addChild(mesh);
                this._pFinalizeAsset(mesh);
            }
        }
    };
    /**
     * Translates an obj's material group to a subgeometry.
     * @param materialGroup The material group data to convert.
     * @param geometry The Geometry to contain the converted SubGeometry.
     */
    OBJParser.prototype.translateMaterialGroup = function (materialGroup, geometry) {
        var faces = materialGroup.faces;
        var face;
        var numFaces = faces.length;
        var numVerts;
        var sub;
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
            sub = new TriangleSubGeometry(true);
            sub.autoDeriveNormals = normals.length ? false : true;
            sub.updateIndices(indices);
            sub.updatePositions(vertices);
            sub.updateVertexNormals(normals);
            sub.updateUVs(uvs);
            geometry.addSubGeometry(sub);
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
                    basicSpecularMethod = new SpecularBasicMethod();
                    basicSpecularMethod.specularColor = specularColor;
                    basicSpecularMethod.specular = specular;
                    var specularData = new SpecularData();
                    specularData.alpha = alpha;
                    specularData.basicSpecularMethod = basicSpecularMethod;
                    specularData.materialID = this._lastMtlID;
                    if (!this._materialSpecularData)
                        this._materialSpecularData = new Array();
                    this._materialSpecularData.push(specularData);
                }
                this._pAddDependency(this._lastMtlID, new URLRequest(mapkd));
            }
            else if (useColor && !isNaN(color)) {
                var lm = new LoadedMaterial();
                lm.materialID = this._lastMtlID;
                if (alpha == 0)
                    console.log("Warning: an alpha value of 0 was found in mtl color tag (Tr or d) ref:" + this._lastMtlID + ", mesh(es) using it will be invisible!");
                var cm;
                if (this.materialMode < 2) {
                    cm = new MethodMaterial(color);
                    var colorMat = cm;
                    colorMat.alpha = alpha;
                    colorMat.diffuseColor = diffuseColor;
                    colorMat.repeat = true;
                    if (useSpecular) {
                        colorMat.specularColor = specularColor;
                        colorMat.specular = specular;
                    }
                }
                else {
                    cm = new MethodMaterial(color);
                    cm.mode = MethodMaterialMode.MULTI_PASS;
                    var colorMultiMat = cm;
                    colorMultiMat.diffuseColor = diffuseColor;
                    colorMultiMat.repeat = true;
                    if (useSpecular) {
                        colorMultiMat.specularColor = specularColor;
                        colorMultiMat.specular = specular;
                    }
                }
                lm.cm = cm;
                this._materialLoaded.push(lm);
                if (this._meshes.length > 0)
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
        this._pAddDependency('mtl', new URLRequest(mtlurl), true);
        this._pPauseAndRetrieveDependencies(); //
    };
    OBJParser.prototype.applyMaterial = function (lm) {
        var decomposeID;
        var mesh;
        var tm;
        var j;
        var specularData;
        for (var i = 0; i < this._meshes.length; ++i) {
            mesh = this._meshes[i];
            decomposeID = mesh.material.name.split("~");
            if (decomposeID[0] == lm.materialID) {
                if (lm.cm) {
                    if (mesh.material)
                        mesh.material = null;
                    mesh.material = lm.cm;
                }
                else if (lm.texture) {
                    if (this.materialMode < 2) {
                        tm = mesh.material;
                        tm.texture = lm.texture;
                        tm.color = lm.color;
                        tm.alpha = lm.alpha;
                        tm.repeat = true;
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
                                    tm.color = specularData.color;
                                    tm.alpha = specularData.alpha;
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        tm = mesh.material;
                        tm.mode = MethodMaterialMode.MULTI_PASS;
                        tm.texture = lm.texture;
                        tm.color = lm.color;
                        tm.repeat = true;
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
                                    tm.color = specularData.color;
                                    break;
                                }
                            }
                        }
                    }
                }
                mesh.material.name = decomposeID[1] ? decomposeID[1] : decomposeID[0];
                this._meshes.splice(i, 1);
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
})(ParserBase);
var ObjectGroup = (function () {
    function ObjectGroup() {
        this.groups = new Array();
    }
    return ObjectGroup;
})();
var Group = (function () {
    function Group() {
        this.materialGroups = new Array();
    }
    return Group;
})();
var MaterialGroup = (function () {
    function MaterialGroup() {
        this.faces = new Array();
    }
    return MaterialGroup;
})();
var SpecularData = (function () {
    function SpecularData() {
        this.color = 0xFFFFFF;
        this.alpha = 1;
    }
    return SpecularData;
})();
var LoadedMaterial = (function () {
    function LoadedMaterial() {
        this.color = 0xFFFFFF;
        this.alpha = 1;
    }
    return LoadedMaterial;
})();
var FaceData = (function () {
    function FaceData() {
        this.vertexIndices = new Array();
        this.uvIndices = new Array();
        this.normalIndices = new Array();
        this.indexIds = new Array(); // used for real index lookups
    }
    return FaceData;
})();
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
})();
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
})();
module.exports = OBJParser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9PQkpQYXJzZXIudHMiXSwibmFtZXMiOlsiT0JKUGFyc2VyIiwiT0JKUGFyc2VyLmNvbnN0cnVjdG9yIiwiT0JKUGFyc2VyLnNjYWxlIiwiT0JKUGFyc2VyLnN1cHBvcnRzVHlwZSIsIk9CSlBhcnNlci5zdXBwb3J0c0RhdGEiLCJPQkpQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIk9CSlBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIk9CSlBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiT0JKUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiT0JKUGFyc2VyLnBhcnNlTGluZSIsIk9CSlBhcnNlci50cmFuc2xhdGUiLCJPQkpQYXJzZXIudHJhbnNsYXRlTWF0ZXJpYWxHcm91cCIsIk9CSlBhcnNlci50cmFuc2xhdGVWZXJ0ZXhEYXRhIiwiT0JKUGFyc2VyLmNyZWF0ZU9iamVjdCIsIk9CSlBhcnNlci5jcmVhdGVHcm91cCIsIk9CSlBhcnNlci5jcmVhdGVNYXRlcmlhbEdyb3VwIiwiT0JKUGFyc2VyLnBhcnNlVmVydGV4IiwiT0JKUGFyc2VyLnBhcnNlVVYiLCJPQkpQYXJzZXIucGFyc2VWZXJ0ZXhOb3JtYWwiLCJPQkpQYXJzZXIucGFyc2VGYWNlIiwiT0JKUGFyc2VyLnBhcnNlSW5kZXgiLCJPQkpQYXJzZXIucGFyc2VNdGwiLCJPQkpQYXJzZXIucGFyc2VNYXBLZFN0cmluZyIsIk9CSlBhcnNlci5sb2FkTXRsIiwiT0JKUGFyc2VyLmFwcGx5TWF0ZXJpYWwiLCJPQkpQYXJzZXIuYXBwbHlNYXRlcmlhbHMiLCJPYmplY3RHcm91cCIsIk9iamVjdEdyb3VwLmNvbnN0cnVjdG9yIiwiR3JvdXAiLCJHcm91cC5jb25zdHJ1Y3RvciIsIk1hdGVyaWFsR3JvdXAiLCJNYXRlcmlhbEdyb3VwLmNvbnN0cnVjdG9yIiwiU3BlY3VsYXJEYXRhIiwiU3BlY3VsYXJEYXRhLmNvbnN0cnVjdG9yIiwiTG9hZGVkTWF0ZXJpYWwiLCJMb2FkZWRNYXRlcmlhbC5jb25zdHJ1Y3RvciIsIkZhY2VEYXRhIiwiRmFjZURhdGEuY29uc3RydWN0b3IiLCJVViIsIlVWLmNvbnN0cnVjdG9yIiwiVVYudiIsIlVWLnUiLCJVVi5jbG9uZSIsIlVWLnRvU3RyaW5nIiwiVmVydGV4IiwiVmVydGV4LmNvbnN0cnVjdG9yIiwiVmVydGV4LmluZGV4IiwiVmVydGV4LngiLCJWZXJ0ZXgueSIsIlZlcnRleC56IiwiVmVydGV4LmNsb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFPLG1CQUFtQixXQUFjLDBDQUEwQyxDQUFDLENBQUM7QUFDcEYsSUFBTyxRQUFRLFdBQWlCLCtCQUErQixDQUFDLENBQUM7QUFLakUsSUFBTyxtQkFBbUIsV0FBYyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ25GLElBQU8sVUFBVSxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ25FLElBQU8sVUFBVSxXQUFnQixvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3ZFLElBQU8sV0FBVyxXQUFnQixxQ0FBcUMsQ0FBQyxDQUFDO0FBR3pFLElBQU8sV0FBVyxXQUFnQixzQ0FBc0MsQ0FBQyxDQUFDO0FBRTFFLElBQU8sc0JBQXNCLFdBQWEsc0RBQXNELENBQUMsQ0FBQztBQUNsRyxJQUFPLElBQUksV0FBa0Isa0NBQWtDLENBQUMsQ0FBQztBQUNqRSxJQUFPLHNCQUFzQixXQUFhLG9EQUFvRCxDQUFDLENBQUM7QUFHaEcsSUFBTyxjQUFjLFdBQWUsMkNBQTJDLENBQUMsQ0FBQztBQUNqRixJQUFPLGtCQUFrQixXQUFjLCtDQUErQyxDQUFDLENBQUM7QUFDeEYsSUFBTyxtQkFBbUIsV0FBYyx3REFBd0QsQ0FBQyxDQUFDO0FBRWxHLEFBR0E7O0dBREc7SUFDRyxTQUFTO0lBQVNBLFVBQWxCQSxTQUFTQSxVQUFtQkE7SUEyQmpDQTs7OztPQUlHQTtJQUNIQSxTQWhDS0EsU0FBU0EsQ0FnQ0ZBLEtBQWdCQTtRQUFoQkMscUJBQWdCQSxHQUFoQkEsU0FBZ0JBO1FBRTNCQSxrQkFBTUEsbUJB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QUNBLENBQUNBO1lBQ3JEQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBZUEsQ0FBQ0E7WUFDekNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3ZCQSxDQUFDQTtRQUVEQSxPQUFPQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUNqRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFFbEVBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFFdENBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQ2pFQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNqQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3hCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNyQ0Es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Q0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFdEZBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFOUVBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFNUZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUVEQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzdDQSxDQUFDQTtJQUVEbkI7O09BRUdBO0lBQ0tBLDhCQUFVQSxHQUFsQkEsVUFBbUJBLEtBQVlBLEVBQUVBLE1BQWFBO1FBRTdDb0Is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QSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTt3QkFDL0VBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUVuREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1pBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO3dCQUNqQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0EsR0FBRUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7b0JBRXZFQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBRVBBLE1BQU1BLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUVsQkEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUN4SEEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsQ0FBQ0E7Z0NBQy9EQSxLQUFLQSxDQUFDQTs0QkFFUEEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUMxSEEsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsQ0FBQ0E7b0NBQ3RFQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQTtnQ0FDcEJBLENBQUNBO2dDQUNEQSxLQUFLQSxDQUFDQTs0QkFFUEEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUN4Q0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsS0FBS0EsQ0FBQ0E7Z0NBQ25DQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDakJBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBO2dDQUNyQkEsS0FBS0EsQ0FBQ0E7NEJBRVBBLEtBQUtBLElBQUlBO2dDQUNSQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQ0FDMUhBLFlBQVlBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLElBQUlBLEVBQUVBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLENBQUNBO29DQUNyRUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0NBQ2pCQSxDQUFDQTtnQ0FDREEsS0FBS0EsQ0FBQ0E7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RUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBOzs7T0FMQUo7SUFXREEsc0JBQVdBLHFCQUFDQTtRQUpaQTs7O1dBR0dBO2FBQ0hBO1lBRUNLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTthQUVETCxVQUFhQSxLQUFZQTtZQUV4QkssSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBOzs7T0FMQUw7SUFPREE7O09BRUdBO0lBQ0lBLHNCQUFLQSxHQUFaQTtRQUVDTSxNQUFNQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFDRk4sYUFBQ0E7QUFBREEsQ0F0RkEsQUFzRkNBLElBQUE7QUFwTUQsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6Ik9CSlBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcclxuaW1wb3J0IEdlb21ldHJ5XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZGF0YS9HZW9tZXRyeVwiKTtcclxuaW1wb3J0IE1hdHJpeDNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9NYXRyaXgzRFwiKTtcclxuaW1wb3J0IFF1YXRlcm5pb25cdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9RdWF0ZXJuaW9uXCIpO1xyXG5pbXBvcnQgVmVjdG9yM0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1ZlY3RvcjNEXCIpO1xyXG5pbXBvcnQgSUFzc2V0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9JQXNzZXRcIik7XHJcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XHJcbmltcG9ydCBVUkxSZXF1ZXN0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCIpO1xyXG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XHJcbmltcG9ydCBQYXJzZXJVdGlsc1x0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlclV0aWxzXCIpO1xyXG5pbXBvcnQgUmVzb3VyY2VEZXBlbmRlbmN5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9SZXNvdXJjZURlcGVuZGVuY3lcIik7XHJcbmltcG9ydCBUZXh0dXJlMkRCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlMkRCYXNlXCIpO1xyXG5pbXBvcnQgVGV4dHVyZUJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZUJhc2VcIik7XHJcblxyXG5pbXBvcnQgRGlzcGxheU9iamVjdENvbnRhaW5lclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9jb250YWluZXJzL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XHJcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xyXG5pbXBvcnQgRGVmYXVsdE1hdGVyaWFsTWFuYWdlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYW5hZ2Vycy9EZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXCIpO1xyXG5pbXBvcnQgTWF0ZXJpYWxCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9NYXRlcmlhbEJhc2VcIik7XHJcblxyXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxcIik7XHJcbmltcG9ydCBNZXRob2RNYXRlcmlhbE1vZGVcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL01ldGhvZE1hdGVyaWFsTW9kZVwiKTtcclxuaW1wb3J0IFNwZWN1bGFyQmFzaWNNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJCYXNpY01ldGhvZFwiKTtcclxuXHJcbi8qKlxyXG4gKiBPQkpQYXJzZXIgcHJvdmlkZXMgYSBwYXJzZXIgZm9yIHRoZSBPQkogZGF0YSB0eXBlLlxyXG4gKi9cclxuY2xhc3MgT0JKUGFyc2VyIGV4dGVuZHMgUGFyc2VyQmFzZVxyXG57XHJcblx0cHJpdmF0ZSBfdGV4dERhdGE6c3RyaW5nO1xyXG5cdHByaXZhdGUgX3N0YXJ0ZWRQYXJzaW5nOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfY2hhckluZGV4Om51bWJlcjtcclxuXHRwcml2YXRlIF9vbGRJbmRleDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfc3RyaW5nTGVuZ3RoOm51bWJlcjtcclxuXHRwcml2YXRlIF9jdXJyZW50T2JqZWN0Ok9iamVjdEdyb3VwO1xyXG5cdHByaXZhdGUgX2N1cnJlbnRHcm91cDpHcm91cDtcclxuXHRwcml2YXRlIF9jdXJyZW50TWF0ZXJpYWxHcm91cDpNYXRlcmlhbEdyb3VwO1xyXG5cdHByaXZhdGUgX29iamVjdHM6QXJyYXk8T2JqZWN0R3JvdXA+O1xyXG5cdHByaXZhdGUgX21hdGVyaWFsSURzOnN0cmluZ1tdO1xyXG5cdHByaXZhdGUgX21hdGVyaWFsTG9hZGVkOkFycmF5PExvYWRlZE1hdGVyaWFsPjtcclxuXHRwcml2YXRlIF9tYXRlcmlhbFNwZWN1bGFyRGF0YTpBcnJheTxTcGVjdWxhckRhdGE+O1xyXG5cdHByaXZhdGUgX21lc2hlczpBcnJheTxNZXNoPjtcclxuXHRwcml2YXRlIF9sYXN0TXRsSUQ6c3RyaW5nO1xyXG5cdHByaXZhdGUgX29iamVjdEluZGV4Om51bWJlcjtcclxuXHRwcml2YXRlIF9yZWFsSW5kaWNlcztcclxuXHRwcml2YXRlIF92ZXJ0ZXhJbmRleDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfdmVydGljZXM6QXJyYXk8VmVydGV4PjtcclxuXHRwcml2YXRlIF92ZXJ0ZXhOb3JtYWxzOkFycmF5PFZlcnRleD47XHJcblx0cHJpdmF0ZSBfdXZzOkFycmF5PFVWPjtcclxuXHRwcml2YXRlIF9zY2FsZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfbXRsTGliOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfbXRsTGliTG9hZGVkOmJvb2xlYW4gPSB0cnVlO1xyXG5cdHByaXZhdGUgX2FjdGl2ZU1hdGVyaWFsSUQ6c3RyaW5nID0gXCJcIjtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIG5ldyBPQkpQYXJzZXIgb2JqZWN0LlxyXG5cdCAqIEBwYXJhbSB1cmkgVGhlIHVybCBvciBpZCBvZiB0aGUgZGF0YSBvciBmaWxlIHRvIGJlIHBhcnNlZC5cclxuXHQgKiBAcGFyYW0gZXh0cmEgVGhlIGhvbGRlciBmb3IgZXh0cmEgY29udGV4dHVhbCBkYXRhIHRoYXQgdGhlIHBhcnNlciBtaWdodCBuZWVkLlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKHNjYWxlOm51bWJlciA9IDEpXHJcblx0e1xyXG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5URVhUKTtcclxuXHRcdHRoaXMuX3NjYWxlID0gc2NhbGU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTY2FsaW5nIGZhY3RvciBhcHBsaWVkIGRpcmVjdGx5IHRvIHZlcnRpY2VzIGRhdGFcclxuXHQgKiBAcGFyYW0gdmFsdWUgVGhlIHNjYWxpbmcgZmFjdG9yLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXQgc2NhbGUodmFsdWU6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3NjYWxlID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgYSBnaXZlbiBmaWxlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYnkgdGhlIHBhcnNlci5cclxuXHQgKiBAcGFyYW0gZXh0ZW5zaW9uIFRoZSBmaWxlIGV4dGVuc2lvbiBvZiBhIHBvdGVudGlhbCBmaWxlIHRvIGJlIHBhcnNlZC5cclxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBmaWxlIHR5cGUgaXMgc3VwcG9ydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNUeXBlKGV4dGVuc2lvbjpzdHJpbmcpOmJvb2xlYW5cclxuXHR7XHJcblx0XHRleHRlbnNpb24gPSBleHRlbnNpb24udG9Mb3dlckNhc2UoKTtcclxuXHRcdHJldHVybiBleHRlbnNpb24gPT0gXCJvYmpcIjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRlc3RzIHdoZXRoZXIgYSBkYXRhIGJsb2NrIGNhbiBiZSBwYXJzZWQgYnkgdGhlIHBhcnNlci5cclxuXHQgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBibG9jayB0byBwb3RlbnRpYWxseSBiZSBwYXJzZWQuXHJcblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZGF0YSBpcyBzdXBwb3J0ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c0RhdGEoZGF0YTphbnkpOmJvb2xlYW5cclxuXHR7XHJcblx0XHR2YXIgY29udGVudDpzdHJpbmcgPSBQYXJzZXJVdGlscy50b1N0cmluZyhkYXRhKTtcclxuXHRcdHZhciBoYXNWOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdHZhciBoYXNGOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoY29udGVudCkge1xyXG5cdFx0XHRoYXNWID0gY29udGVudC5pbmRleE9mKFwiXFxudiBcIikgIT0gLTE7XHJcblx0XHRcdGhhc0YgPSBjb250ZW50LmluZGV4T2YoXCJcXG5mIFwiKSAhPSAtMTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaGFzViAmJiBoYXNGO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGluaGVyaXREb2NcclxuXHQgKi9cclxuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KVxyXG5cdHtcclxuXHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuaWQgPT0gJ210bCcpIHtcclxuXHRcdFx0dmFyIHN0cjpzdHJpbmcgPSBQYXJzZXJVdGlscy50b1N0cmluZyhyZXNvdXJjZURlcGVuZGVuY3kuZGF0YSk7XHJcblx0XHRcdHRoaXMucGFyc2VNdGwoc3RyKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgYXNzZXQ6SUFzc2V0O1xyXG5cclxuXHRcdFx0aWYgKHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHMubGVuZ3RoICE9IDEpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFzc2V0ID0gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcclxuXHJcblx0XHRcdGlmIChhc3NldC5pc0Fzc2V0KFRleHR1cmVCYXNlKSkge1xyXG5cclxuXHRcdFx0XHR2YXIgbG06TG9hZGVkTWF0ZXJpYWwgPSBuZXcgTG9hZGVkTWF0ZXJpYWwoKTtcclxuXHRcdFx0XHRsbS5tYXRlcmlhbElEID0gcmVzb3VyY2VEZXBlbmRlbmN5LmlkO1xyXG5cdFx0XHRcdGxtLnRleHR1cmUgPSA8VGV4dHVyZTJEQmFzZT4gYXNzZXQ7XHJcblxyXG5cdFx0XHRcdHRoaXMuX21hdGVyaWFsTG9hZGVkLnB1c2gobG0pO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5fbWVzaGVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuYXBwbHlNYXRlcmlhbChsbSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAaW5oZXJpdERvY1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KVxyXG5cdHtcclxuXHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuaWQgPT0gXCJtdGxcIikge1xyXG5cdFx0XHR0aGlzLl9tdGxMaWIgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5fbXRsTGliTG9hZGVkID0gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgbG06TG9hZGVkTWF0ZXJpYWwgPSBuZXcgTG9hZGVkTWF0ZXJpYWwoKTtcclxuXHRcdFx0bG0ubWF0ZXJpYWxJRCA9IHJlc291cmNlRGVwZW5kZW5jeS5pZDtcclxuXHRcdFx0dGhpcy5fbWF0ZXJpYWxMb2FkZWQucHVzaChsbSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX21lc2hlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHR0aGlzLmFwcGx5TWF0ZXJpYWwobG0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGluaGVyaXREb2NcclxuXHQgKi9cclxuXHRwdWJsaWMgX3BQcm9jZWVkUGFyc2luZygpOmJvb2xlYW5cclxuXHR7XHJcblx0XHR2YXIgbGluZTpzdHJpbmc7XHJcblx0XHR2YXIgY3JldHVybjpzdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwKTtcclxuXHRcdHZhciB0cnVuaztcclxuXHJcblx0XHRpZiAoIXRoaXMuX3N0YXJ0ZWRQYXJzaW5nKSB7XHJcblx0XHRcdHRoaXMuX3RleHREYXRhID0gdGhpcy5fcEdldFRleHREYXRhKCk7XHJcblx0XHRcdC8vIE1lcmdlIGxpbmVicmVha3MgdGhhdCBhcmUgaW1tZWRpYXRlbHkgcHJlY2VlZGVkIGJ5XHJcblx0XHRcdC8vIHRoZSBcImVzY2FwZVwiIGJhY2t3YXJkIHNsYXNoIGludG8gc2luZ2xlIGxpbmVzLlxyXG5cdFx0XHR0aGlzLl90ZXh0RGF0YSA9IHRoaXMuX3RleHREYXRhLnJlcGxhY2UoL1xcXFxbXFxyXFxuXStcXHMqL2dtLCAnICcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl90ZXh0RGF0YS5pbmRleE9mKGNyZXR1cm4pID09IC0xKVxyXG5cdFx0XHRjcmV0dXJuID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMyk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9zdGFydGVkUGFyc2luZykge1xyXG5cdFx0XHR0aGlzLl9zdGFydGVkUGFyc2luZyA9IHRydWU7XHJcblx0XHRcdHRoaXMuX3ZlcnRpY2VzID0gbmV3IEFycmF5PFZlcnRleD4oKTtcclxuXHRcdFx0dGhpcy5fdmVydGV4Tm9ybWFscyA9IG5ldyBBcnJheTxWZXJ0ZXg+KCk7XHJcblx0XHRcdHRoaXMuX21hdGVyaWFsSURzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHRcdFx0dGhpcy5fbWF0ZXJpYWxMb2FkZWQgPSBuZXcgQXJyYXk8TG9hZGVkTWF0ZXJpYWw+KCk7XHJcblx0XHRcdHRoaXMuX21lc2hlcyA9IG5ldyBBcnJheTxNZXNoPigpO1xyXG5cdFx0XHR0aGlzLl91dnMgPSBuZXcgQXJyYXk8VVY+KCk7XHJcblx0XHRcdHRoaXMuX3N0cmluZ0xlbmd0aCA9IHRoaXMuX3RleHREYXRhLmxlbmd0aDtcclxuXHRcdFx0dGhpcy5fY2hhckluZGV4ID0gdGhpcy5fdGV4dERhdGEuaW5kZXhPZihjcmV0dXJuLCAwKTtcclxuXHRcdFx0dGhpcy5fb2xkSW5kZXggPSAwO1xyXG5cdFx0XHR0aGlzLl9vYmplY3RzID0gbmV3IEFycmF5PE9iamVjdEdyb3VwPigpO1xyXG5cdFx0XHR0aGlzLl9vYmplY3RJbmRleCA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0d2hpbGUgKHRoaXMuX2NoYXJJbmRleCA8IHRoaXMuX3N0cmluZ0xlbmd0aCAmJiB0aGlzLl9wSGFzVGltZSgpKSB7XHJcblx0XHRcdHRoaXMuX2NoYXJJbmRleCA9IHRoaXMuX3RleHREYXRhLmluZGV4T2YoY3JldHVybiwgdGhpcy5fb2xkSW5kZXgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuX2NoYXJJbmRleCA9PSAtMSlcclxuXHRcdFx0XHR0aGlzLl9jaGFySW5kZXggPSB0aGlzLl9zdHJpbmdMZW5ndGg7XHJcblxyXG5cdFx0XHRsaW5lID0gdGhpcy5fdGV4dERhdGEuc3Vic3RyaW5nKHRoaXMuX29sZEluZGV4LCB0aGlzLl9jaGFySW5kZXgpO1xyXG5cdFx0XHRsaW5lID0gbGluZS5zcGxpdCgnXFxyJykuam9pbihcIlwiKTtcclxuXHRcdFx0bGluZSA9IGxpbmUucmVwbGFjZShcIiAgXCIsIFwiIFwiKTtcclxuXHRcdFx0dHJ1bmsgPSBsaW5lLnNwbGl0KFwiIFwiKTtcclxuXHRcdFx0dGhpcy5fb2xkSW5kZXggPSB0aGlzLl9jaGFySW5kZXggKyAxO1xyXG5cdFx0XHR0aGlzLnBhcnNlTGluZSh0cnVuayk7XHJcblxyXG5cdFx0XHQvLyBJZiB3aGF0ZXZlciB3YXMgcGFyc2VkIG9uIHRoaXMgbGluZSByZXN1bHRlZCBpbiB0aGVcclxuXHRcdFx0Ly8gcGFyc2luZyBiZWluZyBwYXVzZWQgdG8gcmV0cmlldmUgZGVwZW5kZW5jaWVzLCBicmVha1xyXG5cdFx0XHQvLyBoZXJlIGFuZCBkbyBub3QgY29udGludWUgcGFyc2luZyB1bnRpbCB1bi1wYXVzZWQuXHJcblx0XHRcdGlmICh0aGlzLnBhcnNpbmdQYXVzZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gUGFyc2VyQmFzZS5NT1JFX1RPX1BBUlNFO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9jaGFySW5kZXggPj0gdGhpcy5fc3RyaW5nTGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fbXRsTGliICYmICF0aGlzLl9tdGxMaWJMb2FkZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gUGFyc2VyQmFzZS5NT1JFX1RPX1BBUlNFO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnRyYW5zbGF0ZSgpO1xyXG5cdFx0XHR0aGlzLmFwcGx5TWF0ZXJpYWxzKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gUGFyc2VyQmFzZS5QQVJTSU5HX0RPTkU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBfcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0Om51bWJlcilcclxuXHR7XHJcblx0XHRzdXBlci5fcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0KTtcclxuXHJcblx0XHQvL2NyZWF0ZSBhIGNvbnRlbnQgb2JqZWN0IGZvciBMb2FkZXJzXHJcblx0XHR0aGlzLl9wQ29udGVudCA9IG5ldyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgYSBzaW5nbGUgbGluZSBpbiB0aGUgT0JKIGZpbGUuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwYXJzZUxpbmUodHJ1bmspXHJcblx0e1xyXG5cdFx0c3dpdGNoICh0cnVua1swXSkge1xyXG5cclxuXHRcdFx0Y2FzZSBcIm10bGxpYlwiOlxyXG5cclxuXHRcdFx0XHR0aGlzLl9tdGxMaWIgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuX210bExpYkxvYWRlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMubG9hZE10bCh0cnVua1sxXSk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcImdcIjpcclxuXHJcblx0XHRcdFx0dGhpcy5jcmVhdGVHcm91cCh0cnVuayk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIm9cIjpcclxuXHJcblx0XHRcdFx0dGhpcy5jcmVhdGVPYmplY3QodHJ1bmspO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJ1c2VtdGxcIjpcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuX210bExpYikge1xyXG5cclxuXHRcdFx0XHRcdGlmICghdHJ1bmtbMV0pXHJcblx0XHRcdFx0XHRcdHRydW5rWzFdID0gXCJkZWYwMDBcIjtcclxuXHJcblx0XHRcdFx0XHR0aGlzLl9tYXRlcmlhbElEcy5wdXNoKHRydW5rWzFdKTtcclxuXHRcdFx0XHRcdHRoaXMuX2FjdGl2ZU1hdGVyaWFsSUQgPSB0cnVua1sxXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy5fY3VycmVudEdyb3VwKVxyXG5cdFx0XHRcdFx0XHR0aGlzLl9jdXJyZW50R3JvdXAubWF0ZXJpYWxJRCA9IHRoaXMuX2FjdGl2ZU1hdGVyaWFsSUQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJ2XCI6XHJcblxyXG5cdFx0XHRcdHRoaXMucGFyc2VWZXJ0ZXgodHJ1bmspO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJ2dFwiOlxyXG5cclxuXHRcdFx0XHR0aGlzLnBhcnNlVVYodHJ1bmspO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJ2blwiOlxyXG5cclxuXHRcdFx0XHR0aGlzLnBhcnNlVmVydGV4Tm9ybWFsKHRydW5rKTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiZlwiOlxyXG5cclxuXHRcdFx0XHR0aGlzLnBhcnNlRmFjZSh0cnVuayk7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVydHMgdGhlIHBhcnNlZCBkYXRhIGludG8gYW4gQXdheTNEIHNjZW5lZ3JhcGggc3RydWN0dXJlXHJcblx0ICovXHJcblx0cHJpdmF0ZSB0cmFuc2xhdGUoKVxyXG5cdHtcclxuXHRcdGZvciAodmFyIG9iakluZGV4Om51bWJlciA9IDA7IG9iakluZGV4IDwgdGhpcy5fb2JqZWN0cy5sZW5ndGg7ICsrb2JqSW5kZXgpIHtcclxuXHRcdFx0dmFyIGdyb3VwczpBcnJheTxHcm91cD4gPSB0aGlzLl9vYmplY3RzW29iakluZGV4XS5ncm91cHM7XHJcblx0XHRcdHZhciBudW1Hcm91cHM6bnVtYmVyID0gZ3JvdXBzLmxlbmd0aDtcclxuXHRcdFx0dmFyIG1hdGVyaWFsR3JvdXBzOkFycmF5PE1hdGVyaWFsR3JvdXA+O1xyXG5cdFx0XHR2YXIgbnVtTWF0ZXJpYWxHcm91cHM6bnVtYmVyO1xyXG5cdFx0XHR2YXIgZ2VvbWV0cnk6R2VvbWV0cnk7XHJcblx0XHRcdHZhciBtZXNoOk1lc2g7XHJcblxyXG5cdFx0XHR2YXIgbTpudW1iZXI7XHJcblx0XHRcdHZhciBzbTpudW1iZXI7XHJcblx0XHRcdHZhciBibU1hdGVyaWFsOk1ldGhvZE1hdGVyaWFsO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgZzpudW1iZXIgPSAwOyBnIDwgbnVtR3JvdXBzOyArK2cpIHtcclxuXHRcdFx0XHRnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSgpO1xyXG5cdFx0XHRcdG1hdGVyaWFsR3JvdXBzID0gZ3JvdXBzW2ddLm1hdGVyaWFsR3JvdXBzO1xyXG5cdFx0XHRcdG51bU1hdGVyaWFsR3JvdXBzID0gbWF0ZXJpYWxHcm91cHMubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRmb3IgKG0gPSAwOyBtIDwgbnVtTWF0ZXJpYWxHcm91cHM7ICsrbSlcclxuXHRcdFx0XHRcdHRoaXMudHJhbnNsYXRlTWF0ZXJpYWxHcm91cChtYXRlcmlhbEdyb3Vwc1ttXSwgZ2VvbWV0cnkpO1xyXG5cclxuXHRcdFx0XHRpZiAoZ2VvbWV0cnkuc3ViR2VvbWV0cmllcy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHQvLyBGaW5hbGl6ZSBhbmQgZm9yY2UgdHlwZS1iYXNlZCBuYW1lXHJcblx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gZ2VvbWV0cnkpOy8vLCBcIlwiKTtcclxuXHJcblx0XHRcdFx0Ym1NYXRlcmlhbCA9IG5ldyBNZXRob2RNYXRlcmlhbChEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRUZXh0dXJlKCkpO1xyXG5cclxuXHRcdFx0XHQvL2NoZWNrIGZvciBtdWx0aXBhc3NcclxuXHRcdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPj0gMilcclxuXHRcdFx0XHRcdGJtTWF0ZXJpYWwubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xyXG5cclxuXHRcdFx0XHRtZXNoID0gbmV3IE1lc2goZ2VvbWV0cnksIGJtTWF0ZXJpYWwpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5fb2JqZWN0c1tvYmpJbmRleF0ubmFtZSkge1xyXG5cdFx0XHRcdFx0Ly8gdGhpcyBpcyBhIGZ1bGwgaW5kZXBlbmRlbnQgb2JqZWN0ICgnbycgdGFnIGluIE9CSiBmaWxlKVxyXG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gdGhpcy5fb2JqZWN0c1tvYmpJbmRleF0ubmFtZTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChncm91cHNbZ10ubmFtZSkge1xyXG5cclxuXHRcdFx0XHRcdC8vIHRoaXMgaXMgYSBncm91cCBzbyB0aGUgc3ViIGdyb3VwcyBjb250YWluIHRoZSBhY3R1YWwgbWVzaCBvYmplY3QgbmFtZXMgKCdnJyB0YWcgaW4gT0JKIGZpbGUpXHJcblx0XHRcdFx0XHRtZXNoLm5hbWUgPSBncm91cHNbZ10ubmFtZTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIE5vIG5hbWUgc3RvcmVkLiBVc2UgZW1wdHkgc3RyaW5nIHdoaWNoIHdpbGwgZm9yY2UgaXRcclxuXHRcdFx0XHRcdC8vIHRvIGJlIG92ZXJyaWRkZW4gYnkgZmluYWxpemVBc3NldCgpIHRvIHR5cGUgZGVmYXVsdC5cclxuXHRcdFx0XHRcdG1lc2gubmFtZSA9IFwiXCI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLl9tZXNoZXMucHVzaChtZXNoKTtcclxuXHJcblx0XHRcdFx0aWYgKGdyb3Vwc1tnXS5tYXRlcmlhbElEICE9IFwiXCIpXHJcblx0XHRcdFx0XHRibU1hdGVyaWFsLm5hbWUgPSBncm91cHNbZ10ubWF0ZXJpYWxJRCArIFwiflwiICsgbWVzaC5uYW1lOyBlbHNlXHJcblx0XHRcdFx0XHRibU1hdGVyaWFsLm5hbWUgPSB0aGlzLl9sYXN0TXRsSUQgKyBcIn5cIiArIG1lc2gubmFtZTtcclxuXHJcblx0XHRcdFx0aWYgKG1lc2guc3ViTWVzaGVzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdGZvciAoc20gPSAxOyBzbSA8IG1lc2guc3ViTWVzaGVzLmxlbmd0aDsgKytzbSlcclxuXHRcdFx0XHRcdFx0bWVzaC5zdWJNZXNoZXNbc21dLm1hdGVyaWFsID0gYm1NYXRlcmlhbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XHJcblx0XHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQobWVzaCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1lc2gpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUcmFuc2xhdGVzIGFuIG9iaidzIG1hdGVyaWFsIGdyb3VwIHRvIGEgc3ViZ2VvbWV0cnkuXHJcblx0ICogQHBhcmFtIG1hdGVyaWFsR3JvdXAgVGhlIG1hdGVyaWFsIGdyb3VwIGRhdGEgdG8gY29udmVydC5cclxuXHQgKiBAcGFyYW0gZ2VvbWV0cnkgVGhlIEdlb21ldHJ5IHRvIGNvbnRhaW4gdGhlIGNvbnZlcnRlZCBTdWJHZW9tZXRyeS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHRyYW5zbGF0ZU1hdGVyaWFsR3JvdXAobWF0ZXJpYWxHcm91cDpNYXRlcmlhbEdyb3VwLCBnZW9tZXRyeTpHZW9tZXRyeSlcclxuXHR7XHJcblx0XHR2YXIgZmFjZXM6QXJyYXk8RmFjZURhdGE+ID0gbWF0ZXJpYWxHcm91cC5mYWNlcztcclxuXHRcdHZhciBmYWNlOkZhY2VEYXRhO1xyXG5cdFx0dmFyIG51bUZhY2VzOm51bWJlciA9IGZhY2VzLmxlbmd0aDtcclxuXHRcdHZhciBudW1WZXJ0czpudW1iZXI7XHJcblx0XHR2YXIgc3ViOlRyaWFuZ2xlU3ViR2VvbWV0cnk7XHJcblxyXG5cdFx0dmFyIHZlcnRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0dmFyIHV2czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHRcdHZhciBub3JtYWxzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdFx0dmFyIGluZGljZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG5cdFx0dGhpcy5fcmVhbEluZGljZXMgPSBbXTtcclxuXHRcdHRoaXMuX3ZlcnRleEluZGV4ID0gMDtcclxuXHJcblx0XHR2YXIgajpudW1iZXI7XHJcblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBudW1GYWNlczsgKytpKSB7XHJcblxyXG5cdFx0XHRmYWNlID0gZmFjZXNbaV07XHJcblx0XHRcdG51bVZlcnRzID0gZmFjZS5pbmRleElkcy5sZW5ndGggLSAxO1xyXG5cclxuXHRcdFx0Zm9yIChqID0gMTsgaiA8IG51bVZlcnRzOyArK2opIHtcclxuXHJcblx0XHRcdFx0dGhpcy50cmFuc2xhdGVWZXJ0ZXhEYXRhKGZhY2UsIGosIHZlcnRpY2VzLCB1dnMsIGluZGljZXMsIG5vcm1hbHMpO1xyXG5cdFx0XHRcdHRoaXMudHJhbnNsYXRlVmVydGV4RGF0YShmYWNlLCAwLCB2ZXJ0aWNlcywgdXZzLCBpbmRpY2VzLCBub3JtYWxzKTtcclxuXHRcdFx0XHR0aGlzLnRyYW5zbGF0ZVZlcnRleERhdGEoZmFjZSwgaiArIDEsIHZlcnRpY2VzLCB1dnMsIGluZGljZXMsIG5vcm1hbHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodmVydGljZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRzdWIgPSBuZXcgVHJpYW5nbGVTdWJHZW9tZXRyeSh0cnVlKTtcclxuXHRcdFx0c3ViLmF1dG9EZXJpdmVOb3JtYWxzID0gbm9ybWFscy5sZW5ndGg/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdFx0c3ViLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XHJcblx0XHRcdHN1Yi51cGRhdGVQb3NpdGlvbnModmVydGljZXMpO1xyXG5cdFx0XHRzdWIudXBkYXRlVmVydGV4Tm9ybWFscyhub3JtYWxzKTtcclxuXHRcdFx0c3ViLnVwZGF0ZVVWcyh1dnMpO1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkuYWRkU3ViR2VvbWV0cnkoc3ViKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdHJhbnNsYXRlVmVydGV4RGF0YShmYWNlOkZhY2VEYXRhLCB2ZXJ0ZXhJbmRleDpudW1iZXIsIHZlcnRpY2VzOkFycmF5PG51bWJlcj4sIHV2czpBcnJheTxudW1iZXI+LCBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki8sIG5vcm1hbHM6QXJyYXk8bnVtYmVyPilcclxuXHR7XHJcblx0XHR2YXIgaW5kZXg6bnVtYmVyO1xyXG5cdFx0dmFyIHZlcnRleDpWZXJ0ZXg7XHJcblx0XHR2YXIgdmVydGV4Tm9ybWFsOlZlcnRleDtcclxuXHRcdHZhciB1djpVVjtcclxuXHJcblx0XHRpZiAoIXRoaXMuX3JlYWxJbmRpY2VzW2ZhY2UuaW5kZXhJZHNbdmVydGV4SW5kZXhdXSkge1xyXG5cclxuXHRcdFx0aW5kZXggPSB0aGlzLl92ZXJ0ZXhJbmRleDtcclxuXHRcdFx0dGhpcy5fcmVhbEluZGljZXNbZmFjZS5pbmRleElkc1t2ZXJ0ZXhJbmRleF1dID0gKyt0aGlzLl92ZXJ0ZXhJbmRleDtcclxuXHRcdFx0dmVydGV4ID0gdGhpcy5fdmVydGljZXNbZmFjZS52ZXJ0ZXhJbmRpY2VzW3ZlcnRleEluZGV4XSAtIDFdO1xyXG5cdFx0XHR2ZXJ0aWNlcy5wdXNoKHZlcnRleC54KnRoaXMuX3NjYWxlLCB2ZXJ0ZXgueSp0aGlzLl9zY2FsZSwgdmVydGV4LnoqdGhpcy5fc2NhbGUpO1xyXG5cclxuXHRcdFx0aWYgKGZhY2Uubm9ybWFsSW5kaWNlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dmVydGV4Tm9ybWFsID0gdGhpcy5fdmVydGV4Tm9ybWFsc1tmYWNlLm5vcm1hbEluZGljZXNbdmVydGV4SW5kZXhdIC0gMV07XHJcblx0XHRcdFx0bm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbC54LCB2ZXJ0ZXhOb3JtYWwueSwgdmVydGV4Tm9ybWFsLnopO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZmFjZS51dkluZGljZXMubGVuZ3RoID4gMCkge1xyXG5cclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dXYgPSB0aGlzLl91dnNbZmFjZS51dkluZGljZXNbdmVydGV4SW5kZXhdIC0gMV07XHJcblx0XHRcdFx0XHR1dnMucHVzaCh1di51LCB1di52KTtcclxuXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAodmVydGV4SW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0XHRcdHV2cy5wdXNoKDAsIDEpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRcdFx0dXZzLnB1c2goLjUsIDApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRcdFx0dXZzLnB1c2goMSwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGluZGV4ID0gdGhpcy5fcmVhbEluZGljZXNbZmFjZS5pbmRleElkc1t2ZXJ0ZXhJbmRleF1dIC0gMTtcclxuXHRcdH1cclxuXHJcblx0XHRpbmRpY2VzLnB1c2goaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgZ3JvdXAuXHJcblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIG9iamVjdCB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjcmVhdGVPYmplY3QodHJ1bmspXHJcblx0e1xyXG5cdFx0dGhpcy5fY3VycmVudEdyb3VwID0gbnVsbDtcclxuXHRcdHRoaXMuX2N1cnJlbnRNYXRlcmlhbEdyb3VwID0gbnVsbDtcclxuXHRcdHRoaXMuX29iamVjdHMucHVzaCh0aGlzLl9jdXJyZW50T2JqZWN0ID0gbmV3IE9iamVjdEdyb3VwKCkpO1xyXG5cclxuXHRcdGlmICh0cnVuaylcclxuXHRcdFx0dGhpcy5fY3VycmVudE9iamVjdC5uYW1lID0gdHJ1bmtbMV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgbmV3IGdyb3VwLlxyXG5cdCAqIEBwYXJhbSB0cnVuayBUaGUgZGF0YSBibG9jayBjb250YWluaW5nIHRoZSBncm91cCB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjcmVhdGVHcm91cCh0cnVuaylcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuX2N1cnJlbnRPYmplY3QpXHJcblx0XHRcdHRoaXMuY3JlYXRlT2JqZWN0KG51bGwpO1xyXG5cdFx0dGhpcy5fY3VycmVudEdyb3VwID0gbmV3IEdyb3VwKCk7XHJcblxyXG5cdFx0dGhpcy5fY3VycmVudEdyb3VwLm1hdGVyaWFsSUQgPSB0aGlzLl9hY3RpdmVNYXRlcmlhbElEO1xyXG5cclxuXHRcdGlmICh0cnVuaylcclxuXHRcdFx0dGhpcy5fY3VycmVudEdyb3VwLm5hbWUgPSB0cnVua1sxXTtcclxuXHRcdHRoaXMuX2N1cnJlbnRPYmplY3QuZ3JvdXBzLnB1c2godGhpcy5fY3VycmVudEdyb3VwKTtcclxuXHJcblx0XHR0aGlzLmNyZWF0ZU1hdGVyaWFsR3JvdXAobnVsbCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgbmV3IG1hdGVyaWFsIGdyb3VwLlxyXG5cdCAqIEBwYXJhbSB0cnVuayBUaGUgZGF0YSBibG9jayBjb250YWluaW5nIHRoZSBtYXRlcmlhbCB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjcmVhdGVNYXRlcmlhbEdyb3VwKHRydW5rKVxyXG5cdHtcclxuXHRcdHRoaXMuX2N1cnJlbnRNYXRlcmlhbEdyb3VwID0gbmV3IE1hdGVyaWFsR3JvdXAoKTtcclxuXHRcdGlmICh0cnVuaylcclxuXHRcdFx0dGhpcy5fY3VycmVudE1hdGVyaWFsR3JvdXAudXJsID0gdHJ1bmtbMV07XHJcblx0XHR0aGlzLl9jdXJyZW50R3JvdXAubWF0ZXJpYWxHcm91cHMucHVzaCh0aGlzLl9jdXJyZW50TWF0ZXJpYWxHcm91cCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWFkcyB0aGUgbmV4dCB2ZXJ0ZXggY29vcmRpbmF0ZXMuXHJcblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIHZlcnRleCB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwYXJzZVZlcnRleCh0cnVuaylcclxuXHR7XHJcblx0XHQvL2ZvciB0aGUgdmVyeSByYXJlIGNhc2VzIG9mIG90aGVyIGRlbGltaXRlcnMvY2hhcmNvZGVzIHNlZW4gaW4gc29tZSBvYmogZmlsZXNcclxuXHJcblx0XHR2YXIgdjE6bnVtYmVyLCB2MjpudW1iZXIgLCB2MzpudW1iZXI7XHJcblx0XHRpZiAodHJ1bmsubGVuZ3RoID4gNCkge1xyXG5cdFx0XHR2YXIgblRydW5rID0gW107XHJcblx0XHRcdHZhciB2YWw6bnVtYmVyO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAxOyBpIDwgdHJ1bmsubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHRydW5rW2ldKTtcclxuXHRcdFx0XHRpZiAoIWlzTmFOKHZhbCkpXHJcblx0XHRcdFx0XHRuVHJ1bmsucHVzaCh2YWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2MSA9IDxudW1iZXI+IG5UcnVua1swXTtcclxuXHRcdFx0djIgPSA8bnVtYmVyPiBuVHJ1bmtbMV07XHJcblx0XHRcdHYzID0gPG51bWJlcj4gLW5UcnVua1syXTtcclxuXHRcdFx0dGhpcy5fdmVydGljZXMucHVzaChuZXcgVmVydGV4KHYxLCB2MiwgdjMpKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2MSA9IDxudW1iZXI+IHBhcnNlRmxvYXQodHJ1bmtbMV0pO1xyXG5cdFx0XHR2MiA9IDxudW1iZXI+IHBhcnNlRmxvYXQodHJ1bmtbMl0pO1xyXG5cdFx0XHR2MyA9IDxudW1iZXI+IC1wYXJzZUZsb2F0KHRydW5rWzNdKTtcclxuXHJcblx0XHRcdHRoaXMuX3ZlcnRpY2VzLnB1c2gobmV3IFZlcnRleCh2MSwgdjIsIHYzKSk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVhZHMgdGhlIG5leHQgdXYgY29vcmRpbmF0ZXMuXHJcblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIHV2IHRhZyBhbmQgaXRzIHBhcmFtZXRlcnNcclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlVVYodHJ1bmspXHJcblx0e1xyXG5cdFx0aWYgKHRydW5rLmxlbmd0aCA+IDMpIHtcclxuXHRcdFx0dmFyIG5UcnVuayA9IFtdO1xyXG5cdFx0XHR2YXIgdmFsOm51bWJlcjtcclxuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAxOyBpIDwgdHJ1bmsubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHRydW5rW2ldKTtcclxuXHRcdFx0XHRpZiAoIWlzTmFOKHZhbCkpXHJcblx0XHRcdFx0XHRuVHJ1bmsucHVzaCh2YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX3V2cy5wdXNoKG5ldyBVVihuVHJ1bmtbMF0sIDEgLSBuVHJ1bmtbMV0pKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl91dnMucHVzaChuZXcgVVYocGFyc2VGbG9hdCh0cnVua1sxXSksIDEgLSBwYXJzZUZsb2F0KHRydW5rWzJdKSkpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlYWRzIHRoZSBuZXh0IHZlcnRleCBub3JtYWwgY29vcmRpbmF0ZXMuXHJcblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIHZlcnRleCBub3JtYWwgdGFnIGFuZCBpdHMgcGFyYW1ldGVyc1xyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VWZXJ0ZXhOb3JtYWwodHJ1bmspXHJcblx0e1xyXG5cdFx0aWYgKHRydW5rLmxlbmd0aCA+IDQpIHtcclxuXHRcdFx0dmFyIG5UcnVuayA9IFtdO1xyXG5cdFx0XHR2YXIgdmFsOm51bWJlcjtcclxuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAxOyBpIDwgdHJ1bmsubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHRydW5rW2ldKTtcclxuXHRcdFx0XHRpZiAoIWlzTmFOKHZhbCkpXHJcblx0XHRcdFx0XHRuVHJ1bmsucHVzaCh2YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX3ZlcnRleE5vcm1hbHMucHVzaChuZXcgVmVydGV4KG5UcnVua1swXSwgblRydW5rWzFdLCAtblRydW5rWzJdKSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fdmVydGV4Tm9ybWFscy5wdXNoKG5ldyBWZXJ0ZXgocGFyc2VGbG9hdCh0cnVua1sxXSksIHBhcnNlRmxvYXQodHJ1bmtbMl0pLCAtcGFyc2VGbG9hdCh0cnVua1szXSkpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlYWRzIHRoZSBuZXh0IGZhY2UncyBpbmRpY2VzLlxyXG5cdCAqIEBwYXJhbSB0cnVuayBUaGUgZGF0YSBibG9jayBjb250YWluaW5nIHRoZSBmYWNlIHRhZyBhbmQgaXRzIHBhcmFtZXRlcnNcclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlRmFjZSh0cnVuaylcclxuXHR7XHJcblx0XHR2YXIgbGVuOm51bWJlciA9IHRydW5rLmxlbmd0aDtcclxuXHRcdHZhciBmYWNlOkZhY2VEYXRhID0gbmV3IEZhY2VEYXRhKCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9jdXJyZW50R3JvdXApIHtcclxuXHRcdFx0dGhpcy5jcmVhdGVHcm91cChudWxsKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaW5kaWNlcztcclxuXHRcdGZvciAodmFyIGk6bnVtYmVyID0gMTsgaSA8IGxlbjsgKytpKSB7XHJcblxyXG5cdFx0XHRpZiAodHJ1bmtbaV0gPT0gXCJcIikge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpbmRpY2VzID0gdHJ1bmtbaV0uc3BsaXQoXCIvXCIpO1xyXG5cdFx0XHRmYWNlLnZlcnRleEluZGljZXMucHVzaCh0aGlzLnBhcnNlSW5kZXgocGFyc2VJbnQoaW5kaWNlc1swXSksIHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCkpO1xyXG5cclxuXHRcdFx0aWYgKGluZGljZXNbMV0gJiYgU3RyaW5nKGluZGljZXNbMV0pLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0ZmFjZS51dkluZGljZXMucHVzaCh0aGlzLnBhcnNlSW5kZXgocGFyc2VJbnQoaW5kaWNlc1sxXSksIHRoaXMuX3V2cy5sZW5ndGgpKTtcclxuXHJcblx0XHRcdGlmIChpbmRpY2VzWzJdICYmIFN0cmluZyhpbmRpY2VzWzJdKS5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdGZhY2Uubm9ybWFsSW5kaWNlcy5wdXNoKHRoaXMucGFyc2VJbmRleChwYXJzZUludChpbmRpY2VzWzJdKSwgdGhpcy5fdmVydGV4Tm9ybWFscy5sZW5ndGgpKTtcclxuXHJcblx0XHRcdGZhY2UuaW5kZXhJZHMucHVzaCh0cnVua1tpXSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fY3VycmVudE1hdGVyaWFsR3JvdXAuZmFjZXMucHVzaChmYWNlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgaXMgYSBoYWNrIGFyb3VuZCBuZWdhdGl2ZSBmYWNlIGNvb3Jkc1xyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VJbmRleChpbmRleDpudW1iZXIsIGxlbmd0aDpudW1iZXIpOm51bWJlclxyXG5cdHtcclxuXHRcdGlmIChpbmRleCA8IDApXHJcblx0XHRcdHJldHVybiBpbmRleCArIGxlbmd0aCArIDE7IGVsc2VcclxuXHRcdFx0cmV0dXJuIGluZGV4O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZU10bChkYXRhOnN0cmluZylcclxuXHR7XHJcblx0XHR2YXIgbWF0ZXJpYWxEZWZpbml0aW9ucyA9IGRhdGEuc3BsaXQoJ25ld210bCcpO1xyXG5cdFx0dmFyIGxpbmVzO1xyXG5cdFx0dmFyIHRydW5rO1xyXG5cdFx0dmFyIGo6bnVtYmVyO1xyXG5cclxuXHRcdHZhciBiYXNpY1NwZWN1bGFyTWV0aG9kOlNwZWN1bGFyQmFzaWNNZXRob2Q7XHJcblx0XHR2YXIgdXNlU3BlY3VsYXI6Ym9vbGVhbjtcclxuXHRcdHZhciB1c2VDb2xvcjpib29sZWFuO1xyXG5cdFx0dmFyIGRpZmZ1c2VDb2xvcjpudW1iZXI7XHJcblx0XHR2YXIgY29sb3I6bnVtYmVyO1xyXG5cdFx0dmFyIHNwZWN1bGFyQ29sb3I6bnVtYmVyO1xyXG5cdFx0dmFyIHNwZWN1bGFyOm51bWJlcjtcclxuXHRcdHZhciBhbHBoYTpudW1iZXI7XHJcblx0XHR2YXIgbWFwa2Q6c3RyaW5nO1xyXG5cclxuXHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IG1hdGVyaWFsRGVmaW5pdGlvbnMubGVuZ3RoOyArK2kpIHtcclxuXHJcblxyXG5cdFx0XHRsaW5lcyA9IChtYXRlcmlhbERlZmluaXRpb25zW2ldLnNwbGl0KCdcXHInKSkuam9pbihcIlwiKS5zcGxpdCgnXFxuJyk7XHJcblx0XHRcdC8vbGluZXMgPSAobWF0ZXJpYWxEZWZpbml0aW9uc1tpXS5zcGxpdCgnXFxyJykgYXMgQXJyYXkpLmpvaW4oXCJcIikuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRcdFx0aWYgKGxpbmVzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRcdGxpbmVzID0gbWF0ZXJpYWxEZWZpbml0aW9uc1tpXS5zcGxpdChTdHJpbmcuZnJvbUNoYXJDb2RlKDEzKSk7XHJcblxyXG5cdFx0XHRkaWZmdXNlQ29sb3IgPSBjb2xvciA9IHNwZWN1bGFyQ29sb3IgPSAweEZGRkZGRjtcclxuXHRcdFx0c3BlY3VsYXIgPSAwO1xyXG5cdFx0XHR1c2VTcGVjdWxhciA9IGZhbHNlO1xyXG5cdFx0XHR1c2VDb2xvciA9IGZhbHNlO1xyXG5cdFx0XHRhbHBoYSA9IDE7XHJcblx0XHRcdG1hcGtkID0gXCJcIjtcclxuXHJcblx0XHRcdGZvciAoaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7ICsraikge1xyXG5cclxuXHRcdFx0XHRsaW5lc1tqXSA9IGxpbmVzW2pdLnJlcGxhY2UoL1xccyskLywgXCJcIik7XHJcblxyXG5cdFx0XHRcdGlmIChsaW5lc1tqXS5zdWJzdHJpbmcoMCwgMSkgIT0gXCIjXCIgJiYgKGogPT0gMCB8fCBsaW5lc1tqXSAhPSBcIlwiKSkge1xyXG5cdFx0XHRcdFx0dHJ1bmsgPSBsaW5lc1tqXS5zcGxpdChcIiBcIik7XHJcblxyXG5cdFx0XHRcdFx0aWYgKFN0cmluZyh0cnVua1swXSkuY2hhckNvZGVBdCgwKSA9PSA5IHx8IFN0cmluZyh0cnVua1swXSkuY2hhckNvZGVBdCgwKSA9PSAzMilcclxuXHRcdFx0XHRcdFx0dHJ1bmtbMF0gPSB0cnVua1swXS5zdWJzdHJpbmcoMSwgdHJ1bmtbMF0ubGVuZ3RoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaiA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2xhc3RNdGxJRCA9IHRydW5rLmpvaW4oXCJcIik7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2xhc3RNdGxJRCA9ICh0aGlzLl9sYXN0TXRsSUQgPT0gXCJcIik/IFwiZGVmMDAwXCIgOiB0aGlzLl9sYXN0TXRsSUQ7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXRjaCAodHJ1bmtbMF0pIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIkthXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpICYmIHRydW5rWzJdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMl0pKSAmJiB0cnVua1szXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzNdKSkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yID0gdHJ1bmtbMV0qMjU1IDw8IDE2IHwgdHJ1bmtbMl0qMjU1IDw8IDggfCB0cnVua1szXSoyNTU7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIktzXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpICYmIHRydW5rWzJdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMl0pKSAmJiB0cnVua1szXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzNdKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY3VsYXJDb2xvciA9IHRydW5rWzFdKjI1NSA8PCAxNiB8IHRydW5rWzJdKjI1NSA8PCA4IHwgdHJ1bmtbM10qMjU1O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VTcGVjdWxhciA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIk5zXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcGVjdWxhciA9IE51bWJlcih0cnVua1sxXSkqMC4wMDE7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoc3BlY3VsYXIgPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlU3BlY3VsYXIgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjYXNlIFwiS2RcIjpcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0cnVua1sxXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzFdKSkgJiYgdHJ1bmtbMl0gJiYgIWlzTmFOKE51bWJlcih0cnVua1syXSkpICYmIHRydW5rWzNdICYmICFpc05hTihOdW1iZXIodHJ1bmtbM10pKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaWZmdXNlQ29sb3IgPSB0cnVua1sxXSoyNTUgPDwgMTYgfCB0cnVua1syXSoyNTUgPDwgOCB8IHRydW5rWzNdKjI1NTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlQ29sb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJ0clwiOlxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJkXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHBoYSA9IE51bWJlcih0cnVua1sxXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIm1hcF9LZFwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0bWFwa2QgPSB0aGlzLnBhcnNlTWFwS2RTdHJpbmcodHJ1bmspO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFwa2QgPSBtYXBrZC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1hcGtkICE9IFwiXCIpIHtcclxuXHJcblx0XHRcdFx0aWYgKHVzZVNwZWN1bGFyKSB7XHJcblxyXG5cdFx0XHRcdFx0YmFzaWNTcGVjdWxhck1ldGhvZCA9IG5ldyBTcGVjdWxhckJhc2ljTWV0aG9kKCk7XHJcblx0XHRcdFx0XHRiYXNpY1NwZWN1bGFyTWV0aG9kLnNwZWN1bGFyQ29sb3IgPSBzcGVjdWxhckNvbG9yO1xyXG5cdFx0XHRcdFx0YmFzaWNTcGVjdWxhck1ldGhvZC5zcGVjdWxhciA9IHNwZWN1bGFyO1xyXG5cclxuXHRcdFx0XHRcdHZhciBzcGVjdWxhckRhdGE6U3BlY3VsYXJEYXRhID0gbmV3IFNwZWN1bGFyRGF0YSgpO1xyXG5cdFx0XHRcdFx0c3BlY3VsYXJEYXRhLmFscGhhID0gYWxwaGE7XHJcblx0XHRcdFx0XHRzcGVjdWxhckRhdGEuYmFzaWNTcGVjdWxhck1ldGhvZCA9IGJhc2ljU3BlY3VsYXJNZXRob2Q7XHJcblx0XHRcdFx0XHRzcGVjdWxhckRhdGEubWF0ZXJpYWxJRCA9IHRoaXMuX2xhc3RNdGxJRDtcclxuXHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhKVxyXG5cdFx0XHRcdFx0XHR0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YSA9IG5ldyBBcnJheTxTcGVjdWxhckRhdGE+KCk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGEucHVzaChzcGVjdWxhckRhdGEpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2xhc3RNdGxJRCwgbmV3IFVSTFJlcXVlc3QobWFwa2QpKTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAodXNlQ29sb3IgJiYgIWlzTmFOKGNvbG9yKSkge1xyXG5cclxuXHRcdFx0XHR2YXIgbG06TG9hZGVkTWF0ZXJpYWwgPSBuZXcgTG9hZGVkTWF0ZXJpYWwoKTtcclxuXHRcdFx0XHRsbS5tYXRlcmlhbElEID0gdGhpcy5fbGFzdE10bElEO1xyXG5cclxuXHRcdFx0XHRpZiAoYWxwaGEgPT0gMClcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiV2FybmluZzogYW4gYWxwaGEgdmFsdWUgb2YgMCB3YXMgZm91bmQgaW4gbXRsIGNvbG9yIHRhZyAoVHIgb3IgZCkgcmVmOlwiICsgdGhpcy5fbGFzdE10bElEICsgXCIsIG1lc2goZXMpIHVzaW5nIGl0IHdpbGwgYmUgaW52aXNpYmxlIVwiKTtcclxuXHJcblx0XHRcdFx0dmFyIGNtOk1ldGhvZE1hdGVyaWFsO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPCAyKSB7XHJcblx0XHRcdFx0XHRjbSA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvcik7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGNvbG9yTWF0Ok1ldGhvZE1hdGVyaWFsID0gPE1ldGhvZE1hdGVyaWFsPiBjbTtcclxuXHJcblx0XHRcdFx0XHRjb2xvck1hdC5hbHBoYSA9IGFscGhhO1xyXG5cdFx0XHRcdFx0Y29sb3JNYXQuZGlmZnVzZUNvbG9yID0gZGlmZnVzZUNvbG9yO1xyXG5cdFx0XHRcdFx0Y29sb3JNYXQucmVwZWF0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRpZiAodXNlU3BlY3VsYXIpIHtcclxuXHRcdFx0XHRcdFx0Y29sb3JNYXQuc3BlY3VsYXJDb2xvciA9IHNwZWN1bGFyQ29sb3I7XHJcblx0XHRcdFx0XHRcdGNvbG9yTWF0LnNwZWN1bGFyID0gc3BlY3VsYXI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjbSA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvcik7XHJcblx0XHRcdFx0XHRjbS5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGNvbG9yTXVsdGlNYXQ6TWV0aG9kTWF0ZXJpYWwgPSA8TWV0aG9kTWF0ZXJpYWw+IGNtO1xyXG5cclxuXHJcblx0XHRcdFx0XHRjb2xvck11bHRpTWF0LmRpZmZ1c2VDb2xvciA9IGRpZmZ1c2VDb2xvcjtcclxuXHRcdFx0XHRcdGNvbG9yTXVsdGlNYXQucmVwZWF0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRpZiAodXNlU3BlY3VsYXIpIHtcclxuXHRcdFx0XHRcdFx0Y29sb3JNdWx0aU1hdC5zcGVjdWxhckNvbG9yID0gc3BlY3VsYXJDb2xvcjtcclxuXHRcdFx0XHRcdFx0Y29sb3JNdWx0aU1hdC5zcGVjdWxhciA9IHNwZWN1bGFyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bG0uY20gPSBjbTtcclxuXHJcblx0XHRcdFx0dGhpcy5fbWF0ZXJpYWxMb2FkZWQucHVzaChsbSk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLl9tZXNoZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRcdHRoaXMuYXBwbHlNYXRlcmlhbChsbSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fbXRsTGliTG9hZGVkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VNYXBLZFN0cmluZyh0cnVuayk6c3RyaW5nXHJcblx0e1xyXG5cdFx0dmFyIHVybDpzdHJpbmcgPSBcIlwiO1xyXG5cdFx0dmFyIGk6bnVtYmVyO1xyXG5cdFx0dmFyIGJyZWFrZmxhZzpib29sZWFuO1xyXG5cclxuXHRcdGZvciAoaSA9IDE7IGkgPCB0cnVuay5sZW5ndGg7KSB7XHJcblx0XHRcdHN3aXRjaCAodHJ1bmtbaV0pIHtcclxuXHRcdFx0XHRjYXNlIFwiLWJsZW5kdVwiOlxyXG5cdFx0XHRcdGNhc2UgXCItYmxlbmR2XCI6XHJcblx0XHRcdFx0Y2FzZSBcIi1jY1wiOlxyXG5cdFx0XHRcdGNhc2UgXCItY2xhbXBcIjpcclxuXHRcdFx0XHRjYXNlIFwiLXRleHJlc1wiOlxyXG5cdFx0XHRcdFx0aSArPSAyOyAvL1NraXAgYWhlYWQgMSBhdHRyaWJ1dGVcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCItbW1cIjpcclxuXHRcdFx0XHRcdGkgKz0gMzsgLy9Ta2lwIGFoZWFkIDIgYXR0cmlidXRlc1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcIi1vXCI6XHJcblx0XHRcdFx0Y2FzZSBcIi1zXCI6XHJcblx0XHRcdFx0Y2FzZSBcIi10XCI6XHJcblx0XHRcdFx0XHRpICs9IDQ7IC8vU2tpcCBhaGVhZCAzIGF0dHJpYnV0ZXNcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRicmVha2ZsYWcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChicmVha2ZsYWcpXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9SZWNvbnN0cnVjdCBVUkwvZmlsZW5hbWVcclxuXHRcdGZvciAoaTsgaSA8IHRydW5rLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHVybCArPSB0cnVua1tpXTtcclxuXHRcdFx0dXJsICs9IFwiIFwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vUmVtb3ZlIHRoZSBleHRyYW5lb3VzIHNwYWNlIGFuZC9vciBuZXdsaW5lIGZyb20gdGhlIHJpZ2h0IHNpZGVcclxuXHRcdHVybCA9IHVybC5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpO1xyXG5cclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRNdGwobXRsdXJsOnN0cmluZylcclxuXHR7XHJcblx0XHQvLyBBZGQgcmF3LWRhdGEgZGVwZW5kZW5jeSB0byBxdWV1ZSBhbmQgbG9hZCBkZXBlbmRlbmNpZXMgbm93LFxyXG5cdFx0Ly8gd2hpY2ggd2lsbCBwYXVzZSB0aGUgcGFyc2luZyBpbiB0aGUgbWVhbnRpbWUuXHJcblx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSgnbXRsJywgbmV3IFVSTFJlcXVlc3QobXRsdXJsKSwgdHJ1ZSk7XHJcblx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpOy8vXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFwcGx5TWF0ZXJpYWwobG06TG9hZGVkTWF0ZXJpYWwpXHJcblx0e1xyXG5cdFx0dmFyIGRlY29tcG9zZUlEO1xyXG5cdFx0dmFyIG1lc2g6TWVzaDtcclxuXHRcdHZhciB0bTpNZXRob2RNYXRlcmlhbDtcclxuXHRcdHZhciBqOm51bWJlcjtcclxuXHRcdHZhciBzcGVjdWxhckRhdGE6U3BlY3VsYXJEYXRhO1xyXG5cclxuXHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuX21lc2hlcy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRtZXNoID0gdGhpcy5fbWVzaGVzW2ldO1xyXG5cdFx0XHRkZWNvbXBvc2VJRCA9IG1lc2gubWF0ZXJpYWwubmFtZS5zcGxpdChcIn5cIik7XHJcblxyXG5cdFx0XHRpZiAoZGVjb21wb3NlSURbMF0gPT0gbG0ubWF0ZXJpYWxJRCkge1xyXG5cclxuXHRcdFx0XHRpZiAobG0uY20pIHtcclxuXHRcdFx0XHRcdGlmIChtZXNoLm1hdGVyaWFsKVxyXG5cdFx0XHRcdFx0XHRtZXNoLm1hdGVyaWFsID0gbnVsbDtcclxuXHRcdFx0XHRcdG1lc2gubWF0ZXJpYWwgPSBsbS5jbTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChsbS50ZXh0dXJlKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPCAyKSB7IC8vIGlmIG1hdGVyaWFsTW9kZSBpcyAwIG9yIDEsIHdlIGNyZWF0ZSBhIFNpbmdsZVBhc3NcclxuXHRcdFx0XHRcdFx0dG0gPSA8TWV0aG9kTWF0ZXJpYWwgPiBtZXNoLm1hdGVyaWFsO1xyXG5cclxuXHRcdFx0XHRcdFx0dG0udGV4dHVyZSA9IGxtLnRleHR1cmU7XHJcblx0XHRcdFx0XHRcdHRtLmNvbG9yID0gbG0uY29sb3I7XHJcblx0XHRcdFx0XHRcdHRtLmFscGhhID0gbG0uYWxwaGE7XHJcblx0XHRcdFx0XHRcdHRtLnJlcGVhdCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobG0uc3BlY3VsYXJNZXRob2QpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gQnkgc2V0dGluZyB0aGUgc3BlY3VsYXJNZXRob2QgcHJvcGVydHkgdG8gbnVsbCBiZWZvcmUgYXNzaWduaW5nXHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhlIGFjdHVhbCBtZXRob2QgaW5zdGFuY2UsIHdlIGF2b2lkIGhhdmluZyB0aGUgcHJvcGVydGllcyBvZlxyXG5cdFx0XHRcdFx0XHRcdC8vIHRoZSBuZXcgbWV0aG9kIGJlaW5nIG92ZXJyaWRkZW4gd2l0aCB0aGUgc2V0dGluZ3MgZnJvbSB0aGUgb2xkXHJcblx0XHRcdFx0XHRcdFx0Ly8gb25lLCB3aGljaCBpcyBkZWZhdWx0IGJlaGF2aW9yIG9mIHRoZSBzZXR0ZXIuXHJcblx0XHRcdFx0XHRcdFx0dG0uc3BlY3VsYXJNZXRob2QgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdHRtLnNwZWN1bGFyTWV0aG9kID0gbG0uc3BlY3VsYXJNZXRob2Q7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCB0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YS5sZW5ndGg7ICsraikge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3BlY3VsYXJEYXRhID0gdGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGFbal07XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHNwZWN1bGFyRGF0YS5tYXRlcmlhbElEID09IGxtLm1hdGVyaWFsSUQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG0uc3BlY3VsYXJNZXRob2QgPSBudWxsOyAvLyBQcmV2ZW50IHByb3BlcnR5IG92ZXJ3cml0ZSAoc2VlIGFib3ZlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IHNwZWN1bGFyRGF0YS5iYXNpY1NwZWN1bGFyTWV0aG9kO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0bS5jb2xvciA9IHNwZWN1bGFyRGF0YS5jb2xvcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG0uYWxwaGEgPSBzcGVjdWxhckRhdGEuYWxwaGE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHsgLy9pZiBtYXRlcmlhbE1vZGU9PTIgdGhpcyBpcyBhIE11bHRpUGFzc1RleHR1cmVcclxuXHRcdFx0XHRcdFx0dG0gPSA8TWV0aG9kTWF0ZXJpYWw+IG1lc2gubWF0ZXJpYWw7XHJcblx0XHRcdFx0XHRcdHRtLm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcclxuXHJcblx0XHRcdFx0XHRcdHRtLnRleHR1cmUgPSBsbS50ZXh0dXJlO1xyXG5cdFx0XHRcdFx0XHR0bS5jb2xvciA9IGxtLmNvbG9yO1xyXG5cdFx0XHRcdFx0XHR0bS5yZXBlYXQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxtLnNwZWN1bGFyTWV0aG9kKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gQnkgc2V0dGluZyB0aGUgc3BlY3VsYXJNZXRob2QgcHJvcGVydHkgdG8gbnVsbCBiZWZvcmUgYXNzaWduaW5nXHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhlIGFjdHVhbCBtZXRob2QgaW5zdGFuY2UsIHdlIGF2b2lkIGhhdmluZyB0aGUgcHJvcGVydGllcyBvZlxyXG5cdFx0XHRcdFx0XHRcdC8vIHRoZSBuZXcgbWV0aG9kIGJlaW5nIG92ZXJyaWRkZW4gd2l0aCB0aGUgc2V0dGluZ3MgZnJvbSB0aGUgb2xkXHJcblx0XHRcdFx0XHRcdFx0Ly8gb25lLCB3aGljaCBpcyBkZWZhdWx0IGJlaGF2aW9yIG9mIHRoZSBzZXR0ZXIuXHJcblx0XHRcdFx0XHRcdFx0dG0uc3BlY3VsYXJNZXRob2QgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdHRtLnNwZWN1bGFyTWV0aG9kID0gbG0uc3BlY3VsYXJNZXRob2Q7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgdGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGEubGVuZ3RoOyArK2opIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNwZWN1bGFyRGF0YSA9IHRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhW2pdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChzcGVjdWxhckRhdGEubWF0ZXJpYWxJRCA9PSBsbS5tYXRlcmlhbElEKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRtLnNwZWN1bGFyTWV0aG9kID0gbnVsbDsgLy8gUHJldmVudCBwcm9wZXJ0eSBvdmVyd3JpdGUgKHNlZSBhYm92ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG0uc3BlY3VsYXJNZXRob2QgPSBzcGVjdWxhckRhdGEuYmFzaWNTcGVjdWxhck1ldGhvZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dG0uY29sb3IgPSBzcGVjdWxhckRhdGEuY29sb3I7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtZXNoLm1hdGVyaWFsLm5hbWUgPSBkZWNvbXBvc2VJRFsxXT8gZGVjb21wb3NlSURbMV0gOiBkZWNvbXBvc2VJRFswXTtcclxuXHRcdFx0XHR0aGlzLl9tZXNoZXMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdC0taTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChsbS5jbSB8fCB0bSlcclxuXHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobG0uY20gfHwgdG0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhcHBseU1hdGVyaWFscygpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuX21hdGVyaWFsTG9hZGVkLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5fbWF0ZXJpYWxMb2FkZWQubGVuZ3RoOyArK2kpXHJcblx0XHRcdHRoaXMuYXBwbHlNYXRlcmlhbCh0aGlzLl9tYXRlcmlhbExvYWRlZFtpXSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgPSBPQkpQYXJzZXI7XHJcblxyXG5jbGFzcyBPYmplY3RHcm91cFxyXG57XHJcblx0cHVibGljIG5hbWU6c3RyaW5nO1xyXG5cdHB1YmxpYyBncm91cHM6R3JvdXBbXSA9IG5ldyBBcnJheTxHcm91cD4oKTtcclxufVxyXG5cclxuY2xhc3MgR3JvdXBcclxue1xyXG5cdHB1YmxpYyBuYW1lOnN0cmluZztcclxuXHRwdWJsaWMgbWF0ZXJpYWxJRDpzdHJpbmc7XHJcblx0cHVibGljIG1hdGVyaWFsR3JvdXBzOk1hdGVyaWFsR3JvdXBbXSA9IG5ldyBBcnJheTxNYXRlcmlhbEdyb3VwPigpO1xyXG59XHJcblxyXG5jbGFzcyBNYXRlcmlhbEdyb3VwXHJcbntcclxuXHRwdWJsaWMgdXJsOnN0cmluZztcclxuXHRwdWJsaWMgZmFjZXM6RmFjZURhdGFbXSA9IG5ldyBBcnJheTxGYWNlRGF0YT4oKTtcclxufVxyXG5cclxuY2xhc3MgU3BlY3VsYXJEYXRhXHJcbntcclxuXHRwdWJsaWMgbWF0ZXJpYWxJRDpzdHJpbmc7XHJcblx0cHVibGljIGJhc2ljU3BlY3VsYXJNZXRob2Q6U3BlY3VsYXJCYXNpY01ldGhvZDtcclxuXHRwdWJsaWMgY29sb3I6bnVtYmVyID0gMHhGRkZGRkY7XHJcblx0cHVibGljIGFscGhhOm51bWJlciA9IDE7XHJcbn1cclxuXHJcbmNsYXNzIExvYWRlZE1hdGVyaWFsXHJcbntcclxuXHRwdWJsaWMgbWF0ZXJpYWxJRDpzdHJpbmc7XHJcblx0cHVibGljIHRleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxuXHRwdWJsaWMgY206TWF0ZXJpYWxCYXNlO1xyXG5cdHB1YmxpYyBzcGVjdWxhck1ldGhvZDpTcGVjdWxhckJhc2ljTWV0aG9kO1xyXG5cdHB1YmxpYyBjb2xvcjpudW1iZXIgPSAweEZGRkZGRjtcclxuXHRwdWJsaWMgYWxwaGE6bnVtYmVyID0gMTtcclxufVxyXG5cclxuY2xhc3MgRmFjZURhdGFcclxue1xyXG5cdHB1YmxpYyB2ZXJ0ZXhJbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki8gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cdHB1YmxpYyB1dkluZGljZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0cHVibGljIG5vcm1hbEluZGljZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblx0cHVibGljIGluZGV4SWRzOnN0cmluZ1tdID0gbmV3IEFycmF5PHN0cmluZz4oKTsgLy8gdXNlZCBmb3IgcmVhbCBpbmRleCBsb29rdXBzXHJcbn1cclxuXHJcbi8qKlxyXG4qIFRleHR1cmUgY29vcmRpbmF0ZXMgdmFsdWUgb2JqZWN0LlxyXG4qL1xyXG5jbGFzcyBVVlxyXG57XHJcblx0cHJpdmF0ZSBfdTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfdjpudW1iZXI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSBuZXcgPGNvZGU+VVY8L2NvZGU+IG9iamVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAgICB1ICAgICAgICBbb3B0aW9uYWxdICAgIFRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgb2YgdGhlIHRleHR1cmUgdmFsdWUuIERlZmF1bHRzIHRvIDAuXHJcblx0ICogQHBhcmFtICAgIHYgICAgICAgIFtvcHRpb25hbF0gICAgVGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgb2YgdGhlIHRleHR1cmUgdmFsdWUuIERlZmF1bHRzIHRvIDAuXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IodTpudW1iZXIgPSAwLCB2Om51bWJlciA9IDApXHJcblx0e1xyXG5cdFx0dGhpcy5fdSA9IHU7XHJcblx0XHR0aGlzLl92ID0gdjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlZmluZXMgdGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgb2YgdGhlIHRleHR1cmUgdmFsdWUuXHJcblx0ICovXHJcblx0cHVibGljIGdldCB2KCk6bnVtYmVyXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Y7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHYodmFsdWU6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3YgPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlZmluZXMgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBvZiB0aGUgdGV4dHVyZSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IHUoKTpudW1iZXJcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5fdTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgdSh2YWx1ZTpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fdSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcmV0dXJucyBhIG5ldyBVViB2YWx1ZSBPYmplY3RcclxuXHQgKi9cclxuXHRwdWJsaWMgY2xvbmUoKTpVVlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVVYodGhpcy5fdSwgdGhpcy5fdik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiByZXR1cm5zIHRoZSB2YWx1ZSBvYmplY3QgYXMgYSBzdHJpbmcgZm9yIHRyYWNlL2RlYnVnIHB1cnBvc2VcclxuXHQgKi9cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTpzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5fdSArIFwiLFwiICsgdGhpcy5fdjtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFZlcnRleFxyXG57XHJcblx0cHJpdmF0ZSBfeDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfeTpudW1iZXI7XHJcblx0cHJpdmF0ZSBfejpudW1iZXI7XHJcblx0cHJpdmF0ZSBfaW5kZXg6bnVtYmVyO1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgbmV3IDxjb2RlPlZlcnRleDwvY29kZT4gdmFsdWUgb2JqZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtICAgIHggICAgICAgICAgICBbb3B0aW9uYWxdICAgIFRoZSB4IHZhbHVlLiBEZWZhdWx0cyB0byAwLlxyXG5cdCAqIEBwYXJhbSAgICB5ICAgICAgICAgICAgW29wdGlvbmFsXSAgICBUaGUgeSB2YWx1ZS4gRGVmYXVsdHMgdG8gMC5cclxuXHQgKiBAcGFyYW0gICAgeiAgICAgICAgICAgIFtvcHRpb25hbF0gICAgVGhlIHogdmFsdWUuIERlZmF1bHRzIHRvIDAuXHJcblx0ICogQHBhcmFtICAgIGluZGV4ICAgICAgICBbb3B0aW9uYWxdICAgIFRoZSBpbmRleCB2YWx1ZS4gRGVmYXVsdHMgaXMgTmFOLlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKHg6bnVtYmVyID0gMCwgeTpudW1iZXIgPSAwLCB6Om51bWJlciA9IDAsIGluZGV4Om51bWJlciA9IDApXHJcblx0e1xyXG5cdFx0dGhpcy5feCA9IHg7XHJcblx0XHR0aGlzLl95ID0geTtcclxuXHRcdHRoaXMuX3ogPSB6O1xyXG5cdFx0dGhpcy5faW5kZXggPSBpbmRleDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRvIGRlZmluZS9zdG9yZSB0aGUgaW5kZXggb2YgdmFsdWUgb2JqZWN0XHJcblx0ICogQHBhcmFtICAgIGluZCAgICAgICAgVGhlIGluZGV4XHJcblx0ICovXHJcblx0cHVibGljIHNldCBpbmRleChpbmQ6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX2luZGV4ID0gaW5kO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBpbmRleCgpOm51bWJlclxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLl9pbmRleDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRvIGRlZmluZS9zdG9yZSB0aGUgeCB2YWx1ZSBvZiB0aGUgdmFsdWUgb2JqZWN0XHJcblx0ICogQHBhcmFtICAgIHZhbHVlICAgICAgICBUaGUgeCB2YWx1ZVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgeCgpOm51bWJlclxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLl94O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCB4KHZhbHVlOm51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl94ID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUbyBkZWZpbmUvc3RvcmUgdGhlIHkgdmFsdWUgb2YgdGhlIHZhbHVlIG9iamVjdFxyXG5cdCAqIEBwYXJhbSAgICB2YWx1ZSAgICAgICAgVGhlIHkgdmFsdWVcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IHkoKTpudW1iZXJcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5feTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgeSh2YWx1ZTpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5feSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVG8gZGVmaW5lL3N0b3JlIHRoZSB6IHZhbHVlIG9mIHRoZSB2YWx1ZSBvYmplY3RcclxuXHQgKiBAcGFyYW0gICAgdmFsdWUgICAgICAgIFRoZSB6IHZhbHVlXHJcblx0ICovXHJcblx0cHVibGljIGdldCB6KCk6bnVtYmVyXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuX3o7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHoodmFsdWU6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3ogPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJldHVybnMgYSBuZXcgVmVydGV4IHZhbHVlIE9iamVjdFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjbG9uZSgpOlZlcnRleFxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVmVydGV4KHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3opO1xyXG5cdH1cclxufSJdfQ==