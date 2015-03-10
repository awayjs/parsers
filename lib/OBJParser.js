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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9PQkpQYXJzZXIudHMiXSwibmFtZXMiOlsiT0JKUGFyc2VyIiwiT0JKUGFyc2VyLmNvbnN0cnVjdG9yIiwiT0JKUGFyc2VyLnNjYWxlIiwiT0JKUGFyc2VyLnN1cHBvcnRzVHlwZSIsIk9CSlBhcnNlci5zdXBwb3J0c0RhdGEiLCJPQkpQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIk9CSlBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIk9CSlBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiT0JKUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiT0JKUGFyc2VyLnBhcnNlTGluZSIsIk9CSlBhcnNlci50cmFuc2xhdGUiLCJPQkpQYXJzZXIudHJhbnNsYXRlTWF0ZXJpYWxHcm91cCIsIk9CSlBhcnNlci50cmFuc2xhdGVWZXJ0ZXhEYXRhIiwiT0JKUGFyc2VyLmNyZWF0ZU9iamVjdCIsIk9CSlBhcnNlci5jcmVhdGVHcm91cCIsIk9CSlBhcnNlci5jcmVhdGVNYXRlcmlhbEdyb3VwIiwiT0JKUGFyc2VyLnBhcnNlVmVydGV4IiwiT0JKUGFyc2VyLnBhcnNlVVYiLCJPQkpQYXJzZXIucGFyc2VWZXJ0ZXhOb3JtYWwiLCJPQkpQYXJzZXIucGFyc2VGYWNlIiwiT0JKUGFyc2VyLnBhcnNlSW5kZXgiLCJPQkpQYXJzZXIucGFyc2VNdGwiLCJPQkpQYXJzZXIucGFyc2VNYXBLZFN0cmluZyIsIk9CSlBhcnNlci5sb2FkTXRsIiwiT0JKUGFyc2VyLmFwcGx5TWF0ZXJpYWwiLCJPQkpQYXJzZXIuYXBwbHlNYXRlcmlhbHMiLCJPYmplY3RHcm91cCIsIk9iamVjdEdyb3VwLmNvbnN0cnVjdG9yIiwiR3JvdXAiLCJHcm91cC5jb25zdHJ1Y3RvciIsIk1hdGVyaWFsR3JvdXAiLCJNYXRlcmlhbEdyb3VwLmNvbnN0cnVjdG9yIiwiU3BlY3VsYXJEYXRhIiwiU3BlY3VsYXJEYXRhLmNvbnN0cnVjdG9yIiwiTG9hZGVkTWF0ZXJpYWwiLCJMb2FkZWRNYXRlcmlhbC5jb25zdHJ1Y3RvciIsIkZhY2VEYXRhIiwiRmFjZURhdGEuY29uc3RydWN0b3IiLCJVViIsIlVWLmNvbnN0cnVjdG9yIiwiVVYudiIsIlVWLnUiLCJVVi5jbG9uZSIsIlVWLnRvU3RyaW5nIiwiVmVydGV4IiwiVmVydGV4LmNvbnN0cnVjdG9yIiwiVmVydGV4LmluZGV4IiwiVmVydGV4LngiLCJWZXJ0ZXgueSIsIlZlcnRleC56IiwiVmVydGV4LmNsb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFPLG1CQUFtQixXQUFjLDBDQUEwQyxDQUFDLENBQUM7QUFDcEYsSUFBTyxRQUFRLFdBQWlCLCtCQUErQixDQUFDLENBQUM7QUFLakUsSUFBTyxtQkFBbUIsV0FBYyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ25GLElBQU8sVUFBVSxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ25FLElBQU8sVUFBVSxXQUFnQixvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3ZFLElBQU8sV0FBVyxXQUFnQixxQ0FBcUMsQ0FBQyxDQUFDO0FBR3pFLElBQU8sV0FBVyxXQUFnQixzQ0FBc0MsQ0FBQyxDQUFDO0FBRTFFLElBQU8sc0JBQXNCLFdBQWEsc0RBQXNELENBQUMsQ0FBQztBQUNsRyxJQUFPLElBQUksV0FBa0Isa0NBQWtDLENBQUMsQ0FBQztBQUNqRSxJQUFPLHNCQUFzQixXQUFhLG9EQUFvRCxDQUFDLENBQUM7QUFHaEcsSUFBTyxjQUFjLFdBQWUsMkNBQTJDLENBQUMsQ0FBQztBQUNqRixJQUFPLGtCQUFrQixXQUFjLCtDQUErQyxDQUFDLENBQUM7QUFDeEYsSUFBTyxtQkFBbUIsV0FBYyx3REFBd0QsQ0FBQyxDQUFDO0FBRWxHLEFBR0E7O0dBREc7SUFDRyxTQUFTO0lBQVNBLFVBQWxCQSxTQUFTQSxVQUFtQkE7SUEyQmpDQTs7OztPQUlHQTtJQUNIQSxTQWhDS0EsU0FBU0EsQ0FnQ0ZBLEtBQWdCQTtRQUFoQkMscUJBQWdCQSxHQUFoQkEsU0FBZ0JBO1FBRTNCQSxrQkFBTUEsbUJB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QUNBLENBQUNBO1lBQ3JEQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBZUEsQ0FBQ0E7WUFDekNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3ZCQSxDQUFDQTtRQUVEQSxPQUFPQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUNqRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFFbEVBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFFdENBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQ2pFQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNqQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3hCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNyQ0Es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Q0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFdEZBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFOUVBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFNUZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUVEQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzdDQSxDQUFDQTtJQUVEbkI7O09BRUdBO0lBQ0tBLDhCQUFVQSxHQUFsQkEsVUFBbUJBLEtBQVlBLEVBQUVBLE1BQWFBO1FBRTdDb0Is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QSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTt3QkFDL0VBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUVuREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1pBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO3dCQUNqQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0EsR0FBRUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7b0JBRXZFQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBRVBBLE1BQU1BLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUVsQkEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUN4SEEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsQ0FBQ0E7Z0NBQy9EQSxLQUFLQSxDQUFDQTs0QkFFUEEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUMxSEEsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsQ0FBQ0E7b0NBQ3RFQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQTtnQ0FDcEJBLENBQUNBO2dDQUNEQSxLQUFLQSxDQUFDQTs0QkFFUEEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUN4Q0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsS0FBS0EsQ0FBQ0E7Z0NBQ25DQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDakJBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBO2dDQUNyQkEsS0FBS0EsQ0FBQ0E7NEJBRVBBLEtBQUtBLElBQUlBO2dDQUNSQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQ0FDMUhBLFlBQVlBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLElBQUlBLEVBQUVBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLENBQUNBO29DQUNyRUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0NBQ2pCQSxDQUFDQTtnQ0FDREEsS0FBS0EsQ0FBQ0E7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RUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBOzs7T0FMQUo7SUFXREEsc0JBQVdBLHFCQUFDQTtRQUpaQTs7O1dBR0dBO2FBQ0hBO1lBRUNLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTthQUVETCxVQUFhQSxLQUFZQTtZQUV4QkssSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBOzs7T0FMQUw7SUFPREE7O09BRUdBO0lBQ0lBLHNCQUFLQSxHQUFaQTtRQUVDTSxNQUFNQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFDRk4sYUFBQ0E7QUFBREEsQ0F0RkEsQUFzRkNBLElBQUE7QUFwTUQsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6Ik9CSlBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcbmltcG9ydCBHZW9tZXRyeVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvR2VvbWV0cnlcIik7XG5pbXBvcnQgTWF0cml4M0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL01hdHJpeDNEXCIpO1xuaW1wb3J0IFF1YXRlcm5pb25cdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9RdWF0ZXJuaW9uXCIpO1xuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcbmltcG9ydCBJQXNzZXRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0lBc3NldFwiKTtcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XG5pbXBvcnQgVVJMUmVxdWVzdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMUmVxdWVzdFwiKTtcbmltcG9ydCBQYXJzZXJCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUGFyc2VyQmFzZVwiKTtcbmltcG9ydCBQYXJzZXJVdGlsc1x0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlclV0aWxzXCIpO1xuaW1wb3J0IFJlc291cmNlRGVwZW5kZW5jeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUmVzb3VyY2VEZXBlbmRlbmN5XCIpO1xuaW1wb3J0IFRleHR1cmUyREJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL1RleHR1cmUyREJhc2VcIik7XG5pbXBvcnQgVGV4dHVyZUJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZUJhc2VcIik7XG5cbmltcG9ydCBEaXNwbGF5T2JqZWN0Q29udGFpbmVyXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2NvbnRhaW5lcnMvRGlzcGxheU9iamVjdENvbnRhaW5lclwiKTtcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xuaW1wb3J0IERlZmF1bHRNYXRlcmlhbE1hbmFnZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWFuYWdlcnMvRGVmYXVsdE1hdGVyaWFsTWFuYWdlclwiKTtcbmltcG9ydCBNYXRlcmlhbEJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL01hdGVyaWFsQmFzZVwiKTtcblxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL01ldGhvZE1hdGVyaWFsXCIpO1xuaW1wb3J0IE1ldGhvZE1hdGVyaWFsTW9kZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxNb2RlXCIpO1xuaW1wb3J0IFNwZWN1bGFyQmFzaWNNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJCYXNpY01ldGhvZFwiKTtcblxuLyoqXG4gKiBPQkpQYXJzZXIgcHJvdmlkZXMgYSBwYXJzZXIgZm9yIHRoZSBPQkogZGF0YSB0eXBlLlxuICovXG5jbGFzcyBPQkpQYXJzZXIgZXh0ZW5kcyBQYXJzZXJCYXNlXG57XG5cdHByaXZhdGUgX3RleHREYXRhOnN0cmluZztcblx0cHJpdmF0ZSBfc3RhcnRlZFBhcnNpbmc6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfY2hhckluZGV4Om51bWJlcjtcblx0cHJpdmF0ZSBfb2xkSW5kZXg6bnVtYmVyO1xuXHRwcml2YXRlIF9zdHJpbmdMZW5ndGg6bnVtYmVyO1xuXHRwcml2YXRlIF9jdXJyZW50T2JqZWN0Ok9iamVjdEdyb3VwO1xuXHRwcml2YXRlIF9jdXJyZW50R3JvdXA6R3JvdXA7XG5cdHByaXZhdGUgX2N1cnJlbnRNYXRlcmlhbEdyb3VwOk1hdGVyaWFsR3JvdXA7XG5cdHByaXZhdGUgX29iamVjdHM6QXJyYXk8T2JqZWN0R3JvdXA+O1xuXHRwcml2YXRlIF9tYXRlcmlhbElEczpzdHJpbmdbXTtcblx0cHJpdmF0ZSBfbWF0ZXJpYWxMb2FkZWQ6QXJyYXk8TG9hZGVkTWF0ZXJpYWw+O1xuXHRwcml2YXRlIF9tYXRlcmlhbFNwZWN1bGFyRGF0YTpBcnJheTxTcGVjdWxhckRhdGE+O1xuXHRwcml2YXRlIF9tZXNoZXM6QXJyYXk8TWVzaD47XG5cdHByaXZhdGUgX2xhc3RNdGxJRDpzdHJpbmc7XG5cdHByaXZhdGUgX29iamVjdEluZGV4Om51bWJlcjtcblx0cHJpdmF0ZSBfcmVhbEluZGljZXM7XG5cdHByaXZhdGUgX3ZlcnRleEluZGV4Om51bWJlcjtcblx0cHJpdmF0ZSBfdmVydGljZXM6QXJyYXk8VmVydGV4Pjtcblx0cHJpdmF0ZSBfdmVydGV4Tm9ybWFsczpBcnJheTxWZXJ0ZXg+O1xuXHRwcml2YXRlIF91dnM6QXJyYXk8VVY+O1xuXHRwcml2YXRlIF9zY2FsZTpudW1iZXI7XG5cdHByaXZhdGUgX210bExpYjpib29sZWFuO1xuXHRwcml2YXRlIF9tdGxMaWJMb2FkZWQ6Ym9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgX2FjdGl2ZU1hdGVyaWFsSUQ6c3RyaW5nID0gXCJcIjtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBPQkpQYXJzZXIgb2JqZWN0LlxuXHQgKiBAcGFyYW0gdXJpIFRoZSB1cmwgb3IgaWQgb2YgdGhlIGRhdGEgb3IgZmlsZSB0byBiZSBwYXJzZWQuXG5cdCAqIEBwYXJhbSBleHRyYSBUaGUgaG9sZGVyIGZvciBleHRyYSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgcGFyc2VyIG1pZ2h0IG5lZWQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzY2FsZTpudW1iZXIgPSAxKVxuXHR7XG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5URVhUKTtcblx0XHR0aGlzLl9zY2FsZSA9IHNjYWxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxpbmcgZmFjdG9yIGFwcGxpZWQgZGlyZWN0bHkgdG8gdmVydGljZXMgZGF0YVxuXHQgKiBAcGFyYW0gdmFsdWUgVGhlIHNjYWxpbmcgZmFjdG9yLlxuXHQgKi9cblx0cHVibGljIHNldCBzY2FsZSh2YWx1ZTpudW1iZXIpXG5cdHtcblx0XHR0aGlzLl9zY2FsZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCBhIGdpdmVuIGZpbGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBieSB0aGUgcGFyc2VyLlxuXHQgKiBAcGFyYW0gZXh0ZW5zaW9uIFRoZSBmaWxlIGV4dGVuc2lvbiBvZiBhIHBvdGVudGlhbCBmaWxlIHRvIGJlIHBhcnNlZC5cblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZmlsZSB0eXBlIGlzIHN1cHBvcnRlZC5cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNUeXBlKGV4dGVuc2lvbjpzdHJpbmcpOmJvb2xlYW5cblx0e1xuXHRcdGV4dGVuc2lvbiA9IGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBleHRlbnNpb24gPT0gXCJvYmpcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBUZXN0cyB3aGV0aGVyIGEgZGF0YSBibG9jayBjYW4gYmUgcGFyc2VkIGJ5IHRoZSBwYXJzZXIuXG5cdCAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGJsb2NrIHRvIHBvdGVudGlhbGx5IGJlIHBhcnNlZC5cblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZGF0YSBpcyBzdXBwb3J0ZWQuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzRGF0YShkYXRhOmFueSk6Ym9vbGVhblxuXHR7XG5cdFx0dmFyIGNvbnRlbnQ6c3RyaW5nID0gUGFyc2VyVXRpbHMudG9TdHJpbmcoZGF0YSk7XG5cdFx0dmFyIGhhc1Y6Ym9vbGVhbiA9IGZhbHNlO1xuXHRcdHZhciBoYXNGOmJvb2xlYW4gPSBmYWxzZTtcblxuXHRcdGlmIChjb250ZW50KSB7XG5cdFx0XHRoYXNWID0gY29udGVudC5pbmRleE9mKFwiXFxudiBcIikgIT0gLTE7XG5cdFx0XHRoYXNGID0gY29udGVudC5pbmRleE9mKFwiXFxuZiBcIikgIT0gLTE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhc1YgJiYgaGFzRjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3kocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSlcblx0e1xuXHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuaWQgPT0gJ210bCcpIHtcblx0XHRcdHZhciBzdHI6c3RyaW5nID0gUGFyc2VyVXRpbHMudG9TdHJpbmcocmVzb3VyY2VEZXBlbmRlbmN5LmRhdGEpO1xuXHRcdFx0dGhpcy5wYXJzZU10bChzdHIpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBhc3NldDpJQXNzZXQ7XG5cblx0XHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzLmxlbmd0aCAhPSAxKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YXNzZXQgPSByZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzWzBdO1xuXG5cdFx0XHRpZiAoYXNzZXQuaXNBc3NldChUZXh0dXJlQmFzZSkpIHtcblxuXHRcdFx0XHR2YXIgbG06TG9hZGVkTWF0ZXJpYWwgPSBuZXcgTG9hZGVkTWF0ZXJpYWwoKTtcblx0XHRcdFx0bG0ubWF0ZXJpYWxJRCA9IHJlc291cmNlRGVwZW5kZW5jeS5pZDtcblx0XHRcdFx0bG0udGV4dHVyZSA9IDxUZXh0dXJlMkRCYXNlPiBhc3NldDtcblxuXHRcdFx0XHR0aGlzLl9tYXRlcmlhbExvYWRlZC5wdXNoKGxtKTtcblxuXHRcdFx0XHRpZiAodGhpcy5fbWVzaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLmFwcGx5TWF0ZXJpYWwobG0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeUZhaWx1cmUocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSlcblx0e1xuXHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuaWQgPT0gXCJtdGxcIikge1xuXHRcdFx0dGhpcy5fbXRsTGliID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9tdGxMaWJMb2FkZWQgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGxtOkxvYWRlZE1hdGVyaWFsID0gbmV3IExvYWRlZE1hdGVyaWFsKCk7XG5cdFx0XHRsbS5tYXRlcmlhbElEID0gcmVzb3VyY2VEZXBlbmRlbmN5LmlkO1xuXHRcdFx0dGhpcy5fbWF0ZXJpYWxMb2FkZWQucHVzaChsbSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX21lc2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0dGhpcy5hcHBseU1hdGVyaWFsKGxtKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9wUHJvY2VlZFBhcnNpbmcoKTpib29sZWFuXG5cdHtcblx0XHR2YXIgbGluZTpzdHJpbmc7XG5cdFx0dmFyIGNyZXR1cm46c3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMCk7XG5cdFx0dmFyIHRydW5rO1xuXG5cdFx0aWYgKCF0aGlzLl9zdGFydGVkUGFyc2luZykge1xuXHRcdFx0dGhpcy5fdGV4dERhdGEgPSB0aGlzLl9wR2V0VGV4dERhdGEoKTtcblx0XHRcdC8vIE1lcmdlIGxpbmVicmVha3MgdGhhdCBhcmUgaW1tZWRpYXRlbHkgcHJlY2VlZGVkIGJ5XG5cdFx0XHQvLyB0aGUgXCJlc2NhcGVcIiBiYWNrd2FyZCBzbGFzaCBpbnRvIHNpbmdsZSBsaW5lcy5cblx0XHRcdHRoaXMuX3RleHREYXRhID0gdGhpcy5fdGV4dERhdGEucmVwbGFjZSgvXFxcXFtcXHJcXG5dK1xccyovZ20sICcgJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX3RleHREYXRhLmluZGV4T2YoY3JldHVybikgPT0gLTEpXG5cdFx0XHRjcmV0dXJuID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMyk7XG5cblx0XHRpZiAoIXRoaXMuX3N0YXJ0ZWRQYXJzaW5nKSB7XG5cdFx0XHR0aGlzLl9zdGFydGVkUGFyc2luZyA9IHRydWU7XG5cdFx0XHR0aGlzLl92ZXJ0aWNlcyA9IG5ldyBBcnJheTxWZXJ0ZXg+KCk7XG5cdFx0XHR0aGlzLl92ZXJ0ZXhOb3JtYWxzID0gbmV3IEFycmF5PFZlcnRleD4oKTtcblx0XHRcdHRoaXMuX21hdGVyaWFsSURzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblx0XHRcdHRoaXMuX21hdGVyaWFsTG9hZGVkID0gbmV3IEFycmF5PExvYWRlZE1hdGVyaWFsPigpO1xuXHRcdFx0dGhpcy5fbWVzaGVzID0gbmV3IEFycmF5PE1lc2g+KCk7XG5cdFx0XHR0aGlzLl91dnMgPSBuZXcgQXJyYXk8VVY+KCk7XG5cdFx0XHR0aGlzLl9zdHJpbmdMZW5ndGggPSB0aGlzLl90ZXh0RGF0YS5sZW5ndGg7XG5cdFx0XHR0aGlzLl9jaGFySW5kZXggPSB0aGlzLl90ZXh0RGF0YS5pbmRleE9mKGNyZXR1cm4sIDApO1xuXHRcdFx0dGhpcy5fb2xkSW5kZXggPSAwO1xuXHRcdFx0dGhpcy5fb2JqZWN0cyA9IG5ldyBBcnJheTxPYmplY3RHcm91cD4oKTtcblx0XHRcdHRoaXMuX29iamVjdEluZGV4ID0gMDtcblx0XHR9XG5cblx0XHR3aGlsZSAodGhpcy5fY2hhckluZGV4IDwgdGhpcy5fc3RyaW5nTGVuZ3RoICYmIHRoaXMuX3BIYXNUaW1lKCkpIHtcblx0XHRcdHRoaXMuX2NoYXJJbmRleCA9IHRoaXMuX3RleHREYXRhLmluZGV4T2YoY3JldHVybiwgdGhpcy5fb2xkSW5kZXgpO1xuXG5cdFx0XHRpZiAodGhpcy5fY2hhckluZGV4ID09IC0xKVxuXHRcdFx0XHR0aGlzLl9jaGFySW5kZXggPSB0aGlzLl9zdHJpbmdMZW5ndGg7XG5cblx0XHRcdGxpbmUgPSB0aGlzLl90ZXh0RGF0YS5zdWJzdHJpbmcodGhpcy5fb2xkSW5kZXgsIHRoaXMuX2NoYXJJbmRleCk7XG5cdFx0XHRsaW5lID0gbGluZS5zcGxpdCgnXFxyJykuam9pbihcIlwiKTtcblx0XHRcdGxpbmUgPSBsaW5lLnJlcGxhY2UoXCIgIFwiLCBcIiBcIik7XG5cdFx0XHR0cnVuayA9IGxpbmUuc3BsaXQoXCIgXCIpO1xuXHRcdFx0dGhpcy5fb2xkSW5kZXggPSB0aGlzLl9jaGFySW5kZXggKyAxO1xuXHRcdFx0dGhpcy5wYXJzZUxpbmUodHJ1bmspO1xuXG5cdFx0XHQvLyBJZiB3aGF0ZXZlciB3YXMgcGFyc2VkIG9uIHRoaXMgbGluZSByZXN1bHRlZCBpbiB0aGVcblx0XHRcdC8vIHBhcnNpbmcgYmVpbmcgcGF1c2VkIHRvIHJldHJpZXZlIGRlcGVuZGVuY2llcywgYnJlYWtcblx0XHRcdC8vIGhlcmUgYW5kIGRvIG5vdCBjb250aW51ZSBwYXJzaW5nIHVudGlsIHVuLXBhdXNlZC5cblx0XHRcdGlmICh0aGlzLnBhcnNpbmdQYXVzZWQpIHtcblx0XHRcdFx0cmV0dXJuIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9jaGFySW5kZXggPj0gdGhpcy5fc3RyaW5nTGVuZ3RoKSB7XG5cblx0XHRcdGlmICh0aGlzLl9tdGxMaWIgJiYgIXRoaXMuX210bExpYkxvYWRlZCkge1xuXHRcdFx0XHRyZXR1cm4gUGFyc2VyQmFzZS5NT1JFX1RPX1BBUlNFO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnRyYW5zbGF0ZSgpO1xuXHRcdFx0dGhpcy5hcHBseU1hdGVyaWFscygpO1xuXG5cdFx0XHRyZXR1cm4gUGFyc2VyQmFzZS5QQVJTSU5HX0RPTkU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcblx0fVxuXG5cdHB1YmxpYyBfcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0Om51bWJlcilcblx0e1xuXHRcdHN1cGVyLl9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQpO1xuXG5cdFx0Ly9jcmVhdGUgYSBjb250ZW50IG9iamVjdCBmb3IgTG9hZGVyc1xuXHRcdHRoaXMuX3BDb250ZW50ID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgYSBzaW5nbGUgbGluZSBpbiB0aGUgT0JKIGZpbGUuXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlTGluZSh0cnVuaylcblx0e1xuXHRcdHN3aXRjaCAodHJ1bmtbMF0pIHtcblxuXHRcdFx0Y2FzZSBcIm10bGxpYlwiOlxuXG5cdFx0XHRcdHRoaXMuX210bExpYiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX210bExpYkxvYWRlZCA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmxvYWRNdGwodHJ1bmtbMV0pO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwiZ1wiOlxuXG5cdFx0XHRcdHRoaXMuY3JlYXRlR3JvdXAodHJ1bmspO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwib1wiOlxuXG5cdFx0XHRcdHRoaXMuY3JlYXRlT2JqZWN0KHRydW5rKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcInVzZW10bFwiOlxuXG5cdFx0XHRcdGlmICh0aGlzLl9tdGxMaWIpIHtcblxuXHRcdFx0XHRcdGlmICghdHJ1bmtbMV0pXG5cdFx0XHRcdFx0XHR0cnVua1sxXSA9IFwiZGVmMDAwXCI7XG5cblx0XHRcdFx0XHR0aGlzLl9tYXRlcmlhbElEcy5wdXNoKHRydW5rWzFdKTtcblx0XHRcdFx0XHR0aGlzLl9hY3RpdmVNYXRlcmlhbElEID0gdHJ1bmtbMV07XG5cblx0XHRcdFx0XHRpZiAodGhpcy5fY3VycmVudEdyb3VwKVxuXHRcdFx0XHRcdFx0dGhpcy5fY3VycmVudEdyb3VwLm1hdGVyaWFsSUQgPSB0aGlzLl9hY3RpdmVNYXRlcmlhbElEO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJ2XCI6XG5cblx0XHRcdFx0dGhpcy5wYXJzZVZlcnRleCh0cnVuayk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJ2dFwiOlxuXG5cdFx0XHRcdHRoaXMucGFyc2VVVih0cnVuayk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJ2blwiOlxuXG5cdFx0XHRcdHRoaXMucGFyc2VWZXJ0ZXhOb3JtYWwodHJ1bmspO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwiZlwiOlxuXG5cdFx0XHRcdHRoaXMucGFyc2VGYWNlKHRydW5rKTtcblxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB0aGUgcGFyc2VkIGRhdGEgaW50byBhbiBBd2F5M0Qgc2NlbmVncmFwaCBzdHJ1Y3R1cmVcblx0ICovXG5cdHByaXZhdGUgdHJhbnNsYXRlKClcblx0e1xuXHRcdGZvciAodmFyIG9iakluZGV4Om51bWJlciA9IDA7IG9iakluZGV4IDwgdGhpcy5fb2JqZWN0cy5sZW5ndGg7ICsrb2JqSW5kZXgpIHtcblx0XHRcdHZhciBncm91cHM6QXJyYXk8R3JvdXA+ID0gdGhpcy5fb2JqZWN0c1tvYmpJbmRleF0uZ3JvdXBzO1xuXHRcdFx0dmFyIG51bUdyb3VwczpudW1iZXIgPSBncm91cHMubGVuZ3RoO1xuXHRcdFx0dmFyIG1hdGVyaWFsR3JvdXBzOkFycmF5PE1hdGVyaWFsR3JvdXA+O1xuXHRcdFx0dmFyIG51bU1hdGVyaWFsR3JvdXBzOm51bWJlcjtcblx0XHRcdHZhciBnZW9tZXRyeTpHZW9tZXRyeTtcblx0XHRcdHZhciBtZXNoOk1lc2g7XG5cblx0XHRcdHZhciBtOm51bWJlcjtcblx0XHRcdHZhciBzbTpudW1iZXI7XG5cdFx0XHR2YXIgYm1NYXRlcmlhbDpNZXRob2RNYXRlcmlhbDtcblxuXHRcdFx0Zm9yICh2YXIgZzpudW1iZXIgPSAwOyBnIDwgbnVtR3JvdXBzOyArK2cpIHtcblx0XHRcdFx0Z2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoKTtcblx0XHRcdFx0bWF0ZXJpYWxHcm91cHMgPSBncm91cHNbZ10ubWF0ZXJpYWxHcm91cHM7XG5cdFx0XHRcdG51bU1hdGVyaWFsR3JvdXBzID0gbWF0ZXJpYWxHcm91cHMubGVuZ3RoO1xuXG5cdFx0XHRcdGZvciAobSA9IDA7IG0gPCBudW1NYXRlcmlhbEdyb3VwczsgKyttKVxuXHRcdFx0XHRcdHRoaXMudHJhbnNsYXRlTWF0ZXJpYWxHcm91cChtYXRlcmlhbEdyb3Vwc1ttXSwgZ2VvbWV0cnkpO1xuXG5cdFx0XHRcdGlmIChnZW9tZXRyeS5zdWJHZW9tZXRyaWVzLmxlbmd0aCA9PSAwKVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRcdC8vIEZpbmFsaXplIGFuZCBmb3JjZSB0eXBlLWJhc2VkIG5hbWVcblx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQoPElBc3NldD4gZ2VvbWV0cnkpOy8vLCBcIlwiKTtcblxuXHRcdFx0XHRibU1hdGVyaWFsID0gbmV3IE1ldGhvZE1hdGVyaWFsKERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuZ2V0RGVmYXVsdFRleHR1cmUoKSk7XG5cblx0XHRcdFx0Ly9jaGVjayBmb3IgbXVsdGlwYXNzXG5cdFx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA+PSAyKVxuXHRcdFx0XHRcdGJtTWF0ZXJpYWwubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xuXG5cdFx0XHRcdG1lc2ggPSBuZXcgTWVzaChnZW9tZXRyeSwgYm1NYXRlcmlhbCk7XG5cblx0XHRcdFx0aWYgKHRoaXMuX29iamVjdHNbb2JqSW5kZXhdLm5hbWUpIHtcblx0XHRcdFx0XHQvLyB0aGlzIGlzIGEgZnVsbCBpbmRlcGVuZGVudCBvYmplY3QgKCdvJyB0YWcgaW4gT0JKIGZpbGUpXG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gdGhpcy5fb2JqZWN0c1tvYmpJbmRleF0ubmFtZTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGdyb3Vwc1tnXS5uYW1lKSB7XG5cblx0XHRcdFx0XHQvLyB0aGlzIGlzIGEgZ3JvdXAgc28gdGhlIHN1YiBncm91cHMgY29udGFpbiB0aGUgYWN0dWFsIG1lc2ggb2JqZWN0IG5hbWVzICgnZycgdGFnIGluIE9CSiBmaWxlKVxuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGdyb3Vwc1tnXS5uYW1lO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gTm8gbmFtZSBzdG9yZWQuIFVzZSBlbXB0eSBzdHJpbmcgd2hpY2ggd2lsbCBmb3JjZSBpdFxuXHRcdFx0XHRcdC8vIHRvIGJlIG92ZXJyaWRkZW4gYnkgZmluYWxpemVBc3NldCgpIHRvIHR5cGUgZGVmYXVsdC5cblx0XHRcdFx0XHRtZXNoLm5hbWUgPSBcIlwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fbWVzaGVzLnB1c2gobWVzaCk7XG5cblx0XHRcdFx0aWYgKGdyb3Vwc1tnXS5tYXRlcmlhbElEICE9IFwiXCIpXG5cdFx0XHRcdFx0Ym1NYXRlcmlhbC5uYW1lID0gZ3JvdXBzW2ddLm1hdGVyaWFsSUQgKyBcIn5cIiArIG1lc2gubmFtZTsgZWxzZVxuXHRcdFx0XHRcdGJtTWF0ZXJpYWwubmFtZSA9IHRoaXMuX2xhc3RNdGxJRCArIFwiflwiICsgbWVzaC5uYW1lO1xuXG5cdFx0XHRcdGlmIChtZXNoLnN1Yk1lc2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Zm9yIChzbSA9IDE7IHNtIDwgbWVzaC5zdWJNZXNoZXMubGVuZ3RoOyArK3NtKVxuXHRcdFx0XHRcdFx0bWVzaC5zdWJNZXNoZXNbc21dLm1hdGVyaWFsID0gYm1NYXRlcmlhbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XG5cdFx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKG1lc2gpO1xuXG5cdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IG1lc2gpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGVzIGFuIG9iaidzIG1hdGVyaWFsIGdyb3VwIHRvIGEgc3ViZ2VvbWV0cnkuXG5cdCAqIEBwYXJhbSBtYXRlcmlhbEdyb3VwIFRoZSBtYXRlcmlhbCBncm91cCBkYXRhIHRvIGNvbnZlcnQuXG5cdCAqIEBwYXJhbSBnZW9tZXRyeSBUaGUgR2VvbWV0cnkgdG8gY29udGFpbiB0aGUgY29udmVydGVkIFN1Ykdlb21ldHJ5LlxuXHQgKi9cblx0cHJpdmF0ZSB0cmFuc2xhdGVNYXRlcmlhbEdyb3VwKG1hdGVyaWFsR3JvdXA6TWF0ZXJpYWxHcm91cCwgZ2VvbWV0cnk6R2VvbWV0cnkpXG5cdHtcblx0XHR2YXIgZmFjZXM6QXJyYXk8RmFjZURhdGE+ID0gbWF0ZXJpYWxHcm91cC5mYWNlcztcblx0XHR2YXIgZmFjZTpGYWNlRGF0YTtcblx0XHR2YXIgbnVtRmFjZXM6bnVtYmVyID0gZmFjZXMubGVuZ3RoO1xuXHRcdHZhciBudW1WZXJ0czpudW1iZXI7XG5cdFx0dmFyIHN1YjpUcmlhbmdsZVN1Ykdlb21ldHJ5O1xuXG5cdFx0dmFyIHZlcnRpY2VzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXHRcdHZhciB1dnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0dmFyIG5vcm1hbHM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdFx0dmFyIGluZGljZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cblx0XHR0aGlzLl9yZWFsSW5kaWNlcyA9IFtdO1xuXHRcdHRoaXMuX3ZlcnRleEluZGV4ID0gMDtcblxuXHRcdHZhciBqOm51bWJlcjtcblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBudW1GYWNlczsgKytpKSB7XG5cblx0XHRcdGZhY2UgPSBmYWNlc1tpXTtcblx0XHRcdG51bVZlcnRzID0gZmFjZS5pbmRleElkcy5sZW5ndGggLSAxO1xuXG5cdFx0XHRmb3IgKGogPSAxOyBqIDwgbnVtVmVydHM7ICsraikge1xuXG5cdFx0XHRcdHRoaXMudHJhbnNsYXRlVmVydGV4RGF0YShmYWNlLCBqLCB2ZXJ0aWNlcywgdXZzLCBpbmRpY2VzLCBub3JtYWxzKTtcblx0XHRcdFx0dGhpcy50cmFuc2xhdGVWZXJ0ZXhEYXRhKGZhY2UsIDAsIHZlcnRpY2VzLCB1dnMsIGluZGljZXMsIG5vcm1hbHMpO1xuXHRcdFx0XHR0aGlzLnRyYW5zbGF0ZVZlcnRleERhdGEoZmFjZSwgaiArIDEsIHZlcnRpY2VzLCB1dnMsIGluZGljZXMsIG5vcm1hbHMpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodmVydGljZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0c3ViID0gbmV3IFRyaWFuZ2xlU3ViR2VvbWV0cnkodHJ1ZSk7XG5cdFx0XHRzdWIuYXV0b0Rlcml2ZU5vcm1hbHMgPSBub3JtYWxzLmxlbmd0aD8gZmFsc2UgOiB0cnVlO1xuXHRcdFx0c3ViLnVwZGF0ZUluZGljZXMoaW5kaWNlcyk7XG5cdFx0XHRzdWIudXBkYXRlUG9zaXRpb25zKHZlcnRpY2VzKTtcblx0XHRcdHN1Yi51cGRhdGVWZXJ0ZXhOb3JtYWxzKG5vcm1hbHMpO1xuXHRcdFx0c3ViLnVwZGF0ZVVWcyh1dnMpO1xuXG5cdFx0XHRnZW9tZXRyeS5hZGRTdWJHZW9tZXRyeShzdWIpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdHJhbnNsYXRlVmVydGV4RGF0YShmYWNlOkZhY2VEYXRhLCB2ZXJ0ZXhJbmRleDpudW1iZXIsIHZlcnRpY2VzOkFycmF5PG51bWJlcj4sIHV2czpBcnJheTxudW1iZXI+LCBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki8sIG5vcm1hbHM6QXJyYXk8bnVtYmVyPilcblx0e1xuXHRcdHZhciBpbmRleDpudW1iZXI7XG5cdFx0dmFyIHZlcnRleDpWZXJ0ZXg7XG5cdFx0dmFyIHZlcnRleE5vcm1hbDpWZXJ0ZXg7XG5cdFx0dmFyIHV2OlVWO1xuXG5cdFx0aWYgKCF0aGlzLl9yZWFsSW5kaWNlc1tmYWNlLmluZGV4SWRzW3ZlcnRleEluZGV4XV0pIHtcblxuXHRcdFx0aW5kZXggPSB0aGlzLl92ZXJ0ZXhJbmRleDtcblx0XHRcdHRoaXMuX3JlYWxJbmRpY2VzW2ZhY2UuaW5kZXhJZHNbdmVydGV4SW5kZXhdXSA9ICsrdGhpcy5fdmVydGV4SW5kZXg7XG5cdFx0XHR2ZXJ0ZXggPSB0aGlzLl92ZXJ0aWNlc1tmYWNlLnZlcnRleEluZGljZXNbdmVydGV4SW5kZXhdIC0gMV07XG5cdFx0XHR2ZXJ0aWNlcy5wdXNoKHZlcnRleC54KnRoaXMuX3NjYWxlLCB2ZXJ0ZXgueSp0aGlzLl9zY2FsZSwgdmVydGV4LnoqdGhpcy5fc2NhbGUpO1xuXG5cdFx0XHRpZiAoZmFjZS5ub3JtYWxJbmRpY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmVydGV4Tm9ybWFsID0gdGhpcy5fdmVydGV4Tm9ybWFsc1tmYWNlLm5vcm1hbEluZGljZXNbdmVydGV4SW5kZXhdIC0gMV07XG5cdFx0XHRcdG5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwueCwgdmVydGV4Tm9ybWFsLnksIHZlcnRleE5vcm1hbC56KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZhY2UudXZJbmRpY2VzLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHV2ID0gdGhpcy5fdXZzW2ZhY2UudXZJbmRpY2VzW3ZlcnRleEluZGV4XSAtIDFdO1xuXHRcdFx0XHRcdHV2cy5wdXNoKHV2LnUsIHV2LnYpO1xuXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblxuXHRcdFx0XHRcdHN3aXRjaCAodmVydGV4SW5kZXgpIHtcblx0XHRcdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0XHRcdFx0dXZzLnB1c2goMCwgMSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0XHR1dnMucHVzaCguNSwgMCk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0XHR1dnMucHVzaCgxLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGluZGV4ID0gdGhpcy5fcmVhbEluZGljZXNbZmFjZS5pbmRleElkc1t2ZXJ0ZXhJbmRleF1dIC0gMTtcblx0XHR9XG5cblx0XHRpbmRpY2VzLnB1c2goaW5kZXgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IGdyb3VwLlxuXHQgKiBAcGFyYW0gdHJ1bmsgVGhlIGRhdGEgYmxvY2sgY29udGFpbmluZyB0aGUgb2JqZWN0IHRhZyBhbmQgaXRzIHBhcmFtZXRlcnNcblx0ICovXG5cdHByaXZhdGUgY3JlYXRlT2JqZWN0KHRydW5rKVxuXHR7XG5cdFx0dGhpcy5fY3VycmVudEdyb3VwID0gbnVsbDtcblx0XHR0aGlzLl9jdXJyZW50TWF0ZXJpYWxHcm91cCA9IG51bGw7XG5cdFx0dGhpcy5fb2JqZWN0cy5wdXNoKHRoaXMuX2N1cnJlbnRPYmplY3QgPSBuZXcgT2JqZWN0R3JvdXAoKSk7XG5cblx0XHRpZiAodHJ1bmspXG5cdFx0XHR0aGlzLl9jdXJyZW50T2JqZWN0Lm5hbWUgPSB0cnVua1sxXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IGdyb3VwLlxuXHQgKiBAcGFyYW0gdHJ1bmsgVGhlIGRhdGEgYmxvY2sgY29udGFpbmluZyB0aGUgZ3JvdXAgdGFnIGFuZCBpdHMgcGFyYW1ldGVyc1xuXHQgKi9cblx0cHJpdmF0ZSBjcmVhdGVHcm91cCh0cnVuaylcblx0e1xuXHRcdGlmICghdGhpcy5fY3VycmVudE9iamVjdClcblx0XHRcdHRoaXMuY3JlYXRlT2JqZWN0KG51bGwpO1xuXHRcdHRoaXMuX2N1cnJlbnRHcm91cCA9IG5ldyBHcm91cCgpO1xuXG5cdFx0dGhpcy5fY3VycmVudEdyb3VwLm1hdGVyaWFsSUQgPSB0aGlzLl9hY3RpdmVNYXRlcmlhbElEO1xuXG5cdFx0aWYgKHRydW5rKVxuXHRcdFx0dGhpcy5fY3VycmVudEdyb3VwLm5hbWUgPSB0cnVua1sxXTtcblx0XHR0aGlzLl9jdXJyZW50T2JqZWN0Lmdyb3Vwcy5wdXNoKHRoaXMuX2N1cnJlbnRHcm91cCk7XG5cblx0XHR0aGlzLmNyZWF0ZU1hdGVyaWFsR3JvdXAobnVsbCk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBtYXRlcmlhbCBncm91cC5cblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIG1hdGVyaWFsIHRhZyBhbmQgaXRzIHBhcmFtZXRlcnNcblx0ICovXG5cdHByaXZhdGUgY3JlYXRlTWF0ZXJpYWxHcm91cCh0cnVuaylcblx0e1xuXHRcdHRoaXMuX2N1cnJlbnRNYXRlcmlhbEdyb3VwID0gbmV3IE1hdGVyaWFsR3JvdXAoKTtcblx0XHRpZiAodHJ1bmspXG5cdFx0XHR0aGlzLl9jdXJyZW50TWF0ZXJpYWxHcm91cC51cmwgPSB0cnVua1sxXTtcblx0XHR0aGlzLl9jdXJyZW50R3JvdXAubWF0ZXJpYWxHcm91cHMucHVzaCh0aGlzLl9jdXJyZW50TWF0ZXJpYWxHcm91cCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVhZHMgdGhlIG5leHQgdmVydGV4IGNvb3JkaW5hdGVzLlxuXHQgKiBAcGFyYW0gdHJ1bmsgVGhlIGRhdGEgYmxvY2sgY29udGFpbmluZyB0aGUgdmVydGV4IHRhZyBhbmQgaXRzIHBhcmFtZXRlcnNcblx0ICovXG5cdHByaXZhdGUgcGFyc2VWZXJ0ZXgodHJ1bmspXG5cdHtcblx0XHQvL2ZvciB0aGUgdmVyeSByYXJlIGNhc2VzIG9mIG90aGVyIGRlbGltaXRlcnMvY2hhcmNvZGVzIHNlZW4gaW4gc29tZSBvYmogZmlsZXNcblxuXHRcdHZhciB2MTpudW1iZXIsIHYyOm51bWJlciAsIHYzOm51bWJlcjtcblx0XHRpZiAodHJ1bmsubGVuZ3RoID4gNCkge1xuXHRcdFx0dmFyIG5UcnVuayA9IFtdO1xuXHRcdFx0dmFyIHZhbDpudW1iZXI7XG5cblx0XHRcdGZvciAodmFyIGk6bnVtYmVyID0gMTsgaSA8IHRydW5rLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodHJ1bmtbaV0pO1xuXHRcdFx0XHRpZiAoIWlzTmFOKHZhbCkpXG5cdFx0XHRcdFx0blRydW5rLnB1c2godmFsKTtcblx0XHRcdH1cblxuXHRcdFx0djEgPSA8bnVtYmVyPiBuVHJ1bmtbMF07XG5cdFx0XHR2MiA9IDxudW1iZXI+IG5UcnVua1sxXTtcblx0XHRcdHYzID0gPG51bWJlcj4gLW5UcnVua1syXTtcblx0XHRcdHRoaXMuX3ZlcnRpY2VzLnB1c2gobmV3IFZlcnRleCh2MSwgdjIsIHYzKSk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0djEgPSA8bnVtYmVyPiBwYXJzZUZsb2F0KHRydW5rWzFdKTtcblx0XHRcdHYyID0gPG51bWJlcj4gcGFyc2VGbG9hdCh0cnVua1syXSk7XG5cdFx0XHR2MyA9IDxudW1iZXI+IC1wYXJzZUZsb2F0KHRydW5rWzNdKTtcblxuXHRcdFx0dGhpcy5fdmVydGljZXMucHVzaChuZXcgVmVydGV4KHYxLCB2MiwgdjMpKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWFkcyB0aGUgbmV4dCB1diBjb29yZGluYXRlcy5cblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIHV2IHRhZyBhbmQgaXRzIHBhcmFtZXRlcnNcblx0ICovXG5cdHByaXZhdGUgcGFyc2VVVih0cnVuaylcblx0e1xuXHRcdGlmICh0cnVuay5sZW5ndGggPiAzKSB7XG5cdFx0XHR2YXIgblRydW5rID0gW107XG5cdFx0XHR2YXIgdmFsOm51bWJlcjtcblx0XHRcdGZvciAodmFyIGk6bnVtYmVyID0gMTsgaSA8IHRydW5rLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodHJ1bmtbaV0pO1xuXHRcdFx0XHRpZiAoIWlzTmFOKHZhbCkpXG5cdFx0XHRcdFx0blRydW5rLnB1c2godmFsKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3V2cy5wdXNoKG5ldyBVVihuVHJ1bmtbMF0sIDEgLSBuVHJ1bmtbMV0pKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl91dnMucHVzaChuZXcgVVYocGFyc2VGbG9hdCh0cnVua1sxXSksIDEgLSBwYXJzZUZsb2F0KHRydW5rWzJdKSkpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlYWRzIHRoZSBuZXh0IHZlcnRleCBub3JtYWwgY29vcmRpbmF0ZXMuXG5cdCAqIEBwYXJhbSB0cnVuayBUaGUgZGF0YSBibG9jayBjb250YWluaW5nIHRoZSB2ZXJ0ZXggbm9ybWFsIHRhZyBhbmQgaXRzIHBhcmFtZXRlcnNcblx0ICovXG5cdHByaXZhdGUgcGFyc2VWZXJ0ZXhOb3JtYWwodHJ1bmspXG5cdHtcblx0XHRpZiAodHJ1bmsubGVuZ3RoID4gNCkge1xuXHRcdFx0dmFyIG5UcnVuayA9IFtdO1xuXHRcdFx0dmFyIHZhbDpudW1iZXI7XG5cdFx0XHRmb3IgKHZhciBpOm51bWJlciA9IDE7IGkgPCB0cnVuay5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHRydW5rW2ldKTtcblx0XHRcdFx0aWYgKCFpc05hTih2YWwpKVxuXHRcdFx0XHRcdG5UcnVuay5wdXNoKHZhbCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl92ZXJ0ZXhOb3JtYWxzLnB1c2gobmV3IFZlcnRleChuVHJ1bmtbMF0sIG5UcnVua1sxXSwgLW5UcnVua1syXSkpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3ZlcnRleE5vcm1hbHMucHVzaChuZXcgVmVydGV4KHBhcnNlRmxvYXQodHJ1bmtbMV0pLCBwYXJzZUZsb2F0KHRydW5rWzJdKSwgLXBhcnNlRmxvYXQodHJ1bmtbM10pKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlYWRzIHRoZSBuZXh0IGZhY2UncyBpbmRpY2VzLlxuXHQgKiBAcGFyYW0gdHJ1bmsgVGhlIGRhdGEgYmxvY2sgY29udGFpbmluZyB0aGUgZmFjZSB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlRmFjZSh0cnVuaylcblx0e1xuXHRcdHZhciBsZW46bnVtYmVyID0gdHJ1bmsubGVuZ3RoO1xuXHRcdHZhciBmYWNlOkZhY2VEYXRhID0gbmV3IEZhY2VEYXRhKCk7XG5cblx0XHRpZiAoIXRoaXMuX2N1cnJlbnRHcm91cCkge1xuXHRcdFx0dGhpcy5jcmVhdGVHcm91cChudWxsKTtcblx0XHR9XG5cblx0XHR2YXIgaW5kaWNlcztcblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDE7IGkgPCBsZW47ICsraSkge1xuXG5cdFx0XHRpZiAodHJ1bmtbaV0gPT0gXCJcIikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aW5kaWNlcyA9IHRydW5rW2ldLnNwbGl0KFwiL1wiKTtcblx0XHRcdGZhY2UudmVydGV4SW5kaWNlcy5wdXNoKHRoaXMucGFyc2VJbmRleChwYXJzZUludChpbmRpY2VzWzBdKSwgdGhpcy5fdmVydGljZXMubGVuZ3RoKSk7XG5cblx0XHRcdGlmIChpbmRpY2VzWzFdICYmIFN0cmluZyhpbmRpY2VzWzFdKS5sZW5ndGggPiAwKVxuXHRcdFx0XHRmYWNlLnV2SW5kaWNlcy5wdXNoKHRoaXMucGFyc2VJbmRleChwYXJzZUludChpbmRpY2VzWzFdKSwgdGhpcy5fdXZzLmxlbmd0aCkpO1xuXG5cdFx0XHRpZiAoaW5kaWNlc1syXSAmJiBTdHJpbmcoaW5kaWNlc1syXSkubGVuZ3RoID4gMClcblx0XHRcdFx0ZmFjZS5ub3JtYWxJbmRpY2VzLnB1c2godGhpcy5wYXJzZUluZGV4KHBhcnNlSW50KGluZGljZXNbMl0pLCB0aGlzLl92ZXJ0ZXhOb3JtYWxzLmxlbmd0aCkpO1xuXG5cdFx0XHRmYWNlLmluZGV4SWRzLnB1c2godHJ1bmtbaV0pO1xuXHRcdH1cblxuXHRcdHRoaXMuX2N1cnJlbnRNYXRlcmlhbEdyb3VwLmZhY2VzLnB1c2goZmFjZSk7XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBpcyBhIGhhY2sgYXJvdW5kIG5lZ2F0aXZlIGZhY2UgY29vcmRzXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlSW5kZXgoaW5kZXg6bnVtYmVyLCBsZW5ndGg6bnVtYmVyKTpudW1iZXJcblx0e1xuXHRcdGlmIChpbmRleCA8IDApXG5cdFx0XHRyZXR1cm4gaW5kZXggKyBsZW5ndGggKyAxOyBlbHNlXG5cdFx0XHRyZXR1cm4gaW5kZXg7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlTXRsKGRhdGE6c3RyaW5nKVxuXHR7XG5cdFx0dmFyIG1hdGVyaWFsRGVmaW5pdGlvbnMgPSBkYXRhLnNwbGl0KCduZXdtdGwnKTtcblx0XHR2YXIgbGluZXM7XG5cdFx0dmFyIHRydW5rO1xuXHRcdHZhciBqOm51bWJlcjtcblxuXHRcdHZhciBiYXNpY1NwZWN1bGFyTWV0aG9kOlNwZWN1bGFyQmFzaWNNZXRob2Q7XG5cdFx0dmFyIHVzZVNwZWN1bGFyOmJvb2xlYW47XG5cdFx0dmFyIHVzZUNvbG9yOmJvb2xlYW47XG5cdFx0dmFyIGRpZmZ1c2VDb2xvcjpudW1iZXI7XG5cdFx0dmFyIGNvbG9yOm51bWJlcjtcblx0XHR2YXIgc3BlY3VsYXJDb2xvcjpudW1iZXI7XG5cdFx0dmFyIHNwZWN1bGFyOm51bWJlcjtcblx0XHR2YXIgYWxwaGE6bnVtYmVyO1xuXHRcdHZhciBtYXBrZDpzdHJpbmc7XG5cblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBtYXRlcmlhbERlZmluaXRpb25zLmxlbmd0aDsgKytpKSB7XG5cblxuXHRcdFx0bGluZXMgPSAobWF0ZXJpYWxEZWZpbml0aW9uc1tpXS5zcGxpdCgnXFxyJykpLmpvaW4oXCJcIikuc3BsaXQoJ1xcbicpO1xuXHRcdFx0Ly9saW5lcyA9IChtYXRlcmlhbERlZmluaXRpb25zW2ldLnNwbGl0KCdcXHInKSBhcyBBcnJheSkuam9pbihcIlwiKS5zcGxpdCgnXFxuJyk7XG5cblx0XHRcdGlmIChsaW5lcy5sZW5ndGggPT0gMSlcblx0XHRcdFx0bGluZXMgPSBtYXRlcmlhbERlZmluaXRpb25zW2ldLnNwbGl0KFN0cmluZy5mcm9tQ2hhckNvZGUoMTMpKTtcblxuXHRcdFx0ZGlmZnVzZUNvbG9yID0gY29sb3IgPSBzcGVjdWxhckNvbG9yID0gMHhGRkZGRkY7XG5cdFx0XHRzcGVjdWxhciA9IDA7XG5cdFx0XHR1c2VTcGVjdWxhciA9IGZhbHNlO1xuXHRcdFx0dXNlQ29sb3IgPSBmYWxzZTtcblx0XHRcdGFscGhhID0gMTtcblx0XHRcdG1hcGtkID0gXCJcIjtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgKytqKSB7XG5cblx0XHRcdFx0bGluZXNbal0gPSBsaW5lc1tqXS5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpO1xuXG5cdFx0XHRcdGlmIChsaW5lc1tqXS5zdWJzdHJpbmcoMCwgMSkgIT0gXCIjXCIgJiYgKGogPT0gMCB8fCBsaW5lc1tqXSAhPSBcIlwiKSkge1xuXHRcdFx0XHRcdHRydW5rID0gbGluZXNbal0uc3BsaXQoXCIgXCIpO1xuXG5cdFx0XHRcdFx0aWYgKFN0cmluZyh0cnVua1swXSkuY2hhckNvZGVBdCgwKSA9PSA5IHx8IFN0cmluZyh0cnVua1swXSkuY2hhckNvZGVBdCgwKSA9PSAzMilcblx0XHRcdFx0XHRcdHRydW5rWzBdID0gdHJ1bmtbMF0uc3Vic3RyaW5nKDEsIHRydW5rWzBdLmxlbmd0aCk7XG5cblx0XHRcdFx0XHRpZiAoaiA9PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9sYXN0TXRsSUQgPSB0cnVuay5qb2luKFwiXCIpO1xuXHRcdFx0XHRcdFx0dGhpcy5fbGFzdE10bElEID0gKHRoaXMuX2xhc3RNdGxJRCA9PSBcIlwiKT8gXCJkZWYwMDBcIiA6IHRoaXMuX2xhc3RNdGxJRDtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdHN3aXRjaCAodHJ1bmtbMF0pIHtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwiS2FcIjpcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpICYmIHRydW5rWzJdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMl0pKSAmJiB0cnVua1szXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzNdKSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvciA9IHRydW5rWzFdKjI1NSA8PCAxNiB8IHRydW5rWzJdKjI1NSA8PCA4IHwgdHJ1bmtbM10qMjU1O1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJLc1wiOlxuXHRcdFx0XHRcdFx0XHRcdGlmICh0cnVua1sxXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzFdKSkgJiYgdHJ1bmtbMl0gJiYgIWlzTmFOKE51bWJlcih0cnVua1syXSkpICYmIHRydW5rWzNdICYmICFpc05hTihOdW1iZXIodHJ1bmtbM10pKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY3VsYXJDb2xvciA9IHRydW5rWzFdKjI1NSA8PCAxNiB8IHRydW5rWzJdKjI1NSA8PCA4IHwgdHJ1bmtbM10qMjU1O1xuXHRcdFx0XHRcdFx0XHRcdFx0dXNlU3BlY3VsYXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwiTnNcIjpcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpKVxuXHRcdFx0XHRcdFx0XHRcdFx0c3BlY3VsYXIgPSBOdW1iZXIodHJ1bmtbMV0pKjAuMDAxO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChzcGVjdWxhciA9PSAwKVxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlU3BlY3VsYXIgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwiS2RcIjpcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpICYmIHRydW5rWzJdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMl0pKSAmJiB0cnVua1szXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzNdKSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpZmZ1c2VDb2xvciA9IHRydW5rWzFdKjI1NSA8PCAxNiB8IHRydW5rWzJdKjI1NSA8PCA4IHwgdHJ1bmtbM10qMjU1O1xuXHRcdFx0XHRcdFx0XHRcdFx0dXNlQ29sb3IgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwidHJcIjpcblx0XHRcdFx0XHRcdFx0Y2FzZSBcImRcIjpcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpKVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxwaGEgPSBOdW1iZXIodHJ1bmtbMV0pO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJtYXBfS2RcIjpcblx0XHRcdFx0XHRcdFx0XHRtYXBrZCA9IHRoaXMucGFyc2VNYXBLZFN0cmluZyh0cnVuayk7XG5cdFx0XHRcdFx0XHRcdFx0bWFwa2QgPSBtYXBrZC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG1hcGtkICE9IFwiXCIpIHtcblxuXHRcdFx0XHRpZiAodXNlU3BlY3VsYXIpIHtcblxuXHRcdFx0XHRcdGJhc2ljU3BlY3VsYXJNZXRob2QgPSBuZXcgU3BlY3VsYXJCYXNpY01ldGhvZCgpO1xuXHRcdFx0XHRcdGJhc2ljU3BlY3VsYXJNZXRob2Quc3BlY3VsYXJDb2xvciA9IHNwZWN1bGFyQ29sb3I7XG5cdFx0XHRcdFx0YmFzaWNTcGVjdWxhck1ldGhvZC5zcGVjdWxhciA9IHNwZWN1bGFyO1xuXG5cdFx0XHRcdFx0dmFyIHNwZWN1bGFyRGF0YTpTcGVjdWxhckRhdGEgPSBuZXcgU3BlY3VsYXJEYXRhKCk7XG5cdFx0XHRcdFx0c3BlY3VsYXJEYXRhLmFscGhhID0gYWxwaGE7XG5cdFx0XHRcdFx0c3BlY3VsYXJEYXRhLmJhc2ljU3BlY3VsYXJNZXRob2QgPSBiYXNpY1NwZWN1bGFyTWV0aG9kO1xuXHRcdFx0XHRcdHNwZWN1bGFyRGF0YS5tYXRlcmlhbElEID0gdGhpcy5fbGFzdE10bElEO1xuXG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YSlcblx0XHRcdFx0XHRcdHRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhID0gbmV3IEFycmF5PFNwZWN1bGFyRGF0YT4oKTtcblxuXHRcdFx0XHRcdHRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhLnB1c2goc3BlY3VsYXJEYXRhKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGhpcy5fbGFzdE10bElELCBuZXcgVVJMUmVxdWVzdChtYXBrZCkpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKHVzZUNvbG9yICYmICFpc05hTihjb2xvcikpIHtcblxuXHRcdFx0XHR2YXIgbG06TG9hZGVkTWF0ZXJpYWwgPSBuZXcgTG9hZGVkTWF0ZXJpYWwoKTtcblx0XHRcdFx0bG0ubWF0ZXJpYWxJRCA9IHRoaXMuX2xhc3RNdGxJRDtcblxuXHRcdFx0XHRpZiAoYWxwaGEgPT0gMClcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIldhcm5pbmc6IGFuIGFscGhhIHZhbHVlIG9mIDAgd2FzIGZvdW5kIGluIG10bCBjb2xvciB0YWcgKFRyIG9yIGQpIHJlZjpcIiArIHRoaXMuX2xhc3RNdGxJRCArIFwiLCBtZXNoKGVzKSB1c2luZyBpdCB3aWxsIGJlIGludmlzaWJsZSFcIik7XG5cblx0XHRcdFx0dmFyIGNtOk1ldGhvZE1hdGVyaWFsO1xuXG5cdFx0XHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA8IDIpIHtcblx0XHRcdFx0XHRjbSA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvcik7XG5cblx0XHRcdFx0XHR2YXIgY29sb3JNYXQ6TWV0aG9kTWF0ZXJpYWwgPSA8TWV0aG9kTWF0ZXJpYWw+IGNtO1xuXG5cdFx0XHRcdFx0Y29sb3JNYXQuYWxwaGEgPSBhbHBoYTtcblx0XHRcdFx0XHRjb2xvck1hdC5kaWZmdXNlQ29sb3IgPSBkaWZmdXNlQ29sb3I7XG5cdFx0XHRcdFx0Y29sb3JNYXQucmVwZWF0ID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGlmICh1c2VTcGVjdWxhcikge1xuXHRcdFx0XHRcdFx0Y29sb3JNYXQuc3BlY3VsYXJDb2xvciA9IHNwZWN1bGFyQ29sb3I7XG5cdFx0XHRcdFx0XHRjb2xvck1hdC5zcGVjdWxhciA9IHNwZWN1bGFyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNtID0gbmV3IE1ldGhvZE1hdGVyaWFsKGNvbG9yKTtcblx0XHRcdFx0XHRjbS5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XG5cblx0XHRcdFx0XHR2YXIgY29sb3JNdWx0aU1hdDpNZXRob2RNYXRlcmlhbCA9IDxNZXRob2RNYXRlcmlhbD4gY207XG5cblxuXHRcdFx0XHRcdGNvbG9yTXVsdGlNYXQuZGlmZnVzZUNvbG9yID0gZGlmZnVzZUNvbG9yO1xuXHRcdFx0XHRcdGNvbG9yTXVsdGlNYXQucmVwZWF0ID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGlmICh1c2VTcGVjdWxhcikge1xuXHRcdFx0XHRcdFx0Y29sb3JNdWx0aU1hdC5zcGVjdWxhckNvbG9yID0gc3BlY3VsYXJDb2xvcjtcblx0XHRcdFx0XHRcdGNvbG9yTXVsdGlNYXQuc3BlY3VsYXIgPSBzcGVjdWxhcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsbS5jbSA9IGNtO1xuXG5cdFx0XHRcdHRoaXMuX21hdGVyaWFsTG9hZGVkLnB1c2gobG0pO1xuXG5cdFx0XHRcdGlmICh0aGlzLl9tZXNoZXMubGVuZ3RoID4gMClcblx0XHRcdFx0XHR0aGlzLmFwcGx5TWF0ZXJpYWwobG0pO1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fbXRsTGliTG9hZGVkID0gdHJ1ZTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VNYXBLZFN0cmluZyh0cnVuayk6c3RyaW5nXG5cdHtcblx0XHR2YXIgdXJsOnN0cmluZyA9IFwiXCI7XG5cdFx0dmFyIGk6bnVtYmVyO1xuXHRcdHZhciBicmVha2ZsYWc6Ym9vbGVhbjtcblxuXHRcdGZvciAoaSA9IDE7IGkgPCB0cnVuay5sZW5ndGg7KSB7XG5cdFx0XHRzd2l0Y2ggKHRydW5rW2ldKSB7XG5cdFx0XHRcdGNhc2UgXCItYmxlbmR1XCI6XG5cdFx0XHRcdGNhc2UgXCItYmxlbmR2XCI6XG5cdFx0XHRcdGNhc2UgXCItY2NcIjpcblx0XHRcdFx0Y2FzZSBcIi1jbGFtcFwiOlxuXHRcdFx0XHRjYXNlIFwiLXRleHJlc1wiOlxuXHRcdFx0XHRcdGkgKz0gMjsgLy9Ta2lwIGFoZWFkIDEgYXR0cmlidXRlXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCItbW1cIjpcblx0XHRcdFx0XHRpICs9IDM7IC8vU2tpcCBhaGVhZCAyIGF0dHJpYnV0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIi1vXCI6XG5cdFx0XHRcdGNhc2UgXCItc1wiOlxuXHRcdFx0XHRjYXNlIFwiLXRcIjpcblx0XHRcdFx0XHRpICs9IDQ7IC8vU2tpcCBhaGVhZCAzIGF0dHJpYnV0ZXNcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRicmVha2ZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYnJlYWtmbGFnKVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHQvL1JlY29uc3RydWN0IFVSTC9maWxlbmFtZVxuXHRcdGZvciAoaTsgaSA8IHRydW5rLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR1cmwgKz0gdHJ1bmtbaV07XG5cdFx0XHR1cmwgKz0gXCIgXCI7XG5cdFx0fVxuXG5cdFx0Ly9SZW1vdmUgdGhlIGV4dHJhbmVvdXMgc3BhY2UgYW5kL29yIG5ld2xpbmUgZnJvbSB0aGUgcmlnaHQgc2lkZVxuXHRcdHVybCA9IHVybC5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpO1xuXG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXG5cdHByaXZhdGUgbG9hZE10bChtdGx1cmw6c3RyaW5nKVxuXHR7XG5cdFx0Ly8gQWRkIHJhdy1kYXRhIGRlcGVuZGVuY3kgdG8gcXVldWUgYW5kIGxvYWQgZGVwZW5kZW5jaWVzIG5vdyxcblx0XHQvLyB3aGljaCB3aWxsIHBhdXNlIHRoZSBwYXJzaW5nIGluIHRoZSBtZWFudGltZS5cblx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSgnbXRsJywgbmV3IFVSTFJlcXVlc3QobXRsdXJsKSwgdHJ1ZSk7XG5cdFx0dGhpcy5fcFBhdXNlQW5kUmV0cmlldmVEZXBlbmRlbmNpZXMoKTsvL1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBseU1hdGVyaWFsKGxtOkxvYWRlZE1hdGVyaWFsKVxuXHR7XG5cdFx0dmFyIGRlY29tcG9zZUlEO1xuXHRcdHZhciBtZXNoOk1lc2g7XG5cdFx0dmFyIHRtOk1ldGhvZE1hdGVyaWFsO1xuXHRcdHZhciBqOm51bWJlcjtcblx0XHR2YXIgc3BlY3VsYXJEYXRhOlNwZWN1bGFyRGF0YTtcblxuXHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuX21lc2hlcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0bWVzaCA9IHRoaXMuX21lc2hlc1tpXTtcblx0XHRcdGRlY29tcG9zZUlEID0gbWVzaC5tYXRlcmlhbC5uYW1lLnNwbGl0KFwiflwiKTtcblxuXHRcdFx0aWYgKGRlY29tcG9zZUlEWzBdID09IGxtLm1hdGVyaWFsSUQpIHtcblxuXHRcdFx0XHRpZiAobG0uY20pIHtcblx0XHRcdFx0XHRpZiAobWVzaC5tYXRlcmlhbClcblx0XHRcdFx0XHRcdG1lc2gubWF0ZXJpYWwgPSBudWxsO1xuXHRcdFx0XHRcdG1lc2gubWF0ZXJpYWwgPSBsbS5jbTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGxtLnRleHR1cmUpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPCAyKSB7IC8vIGlmIG1hdGVyaWFsTW9kZSBpcyAwIG9yIDEsIHdlIGNyZWF0ZSBhIFNpbmdsZVBhc3Ncblx0XHRcdFx0XHRcdHRtID0gPE1ldGhvZE1hdGVyaWFsID4gbWVzaC5tYXRlcmlhbDtcblxuXHRcdFx0XHRcdFx0dG0udGV4dHVyZSA9IGxtLnRleHR1cmU7XG5cdFx0XHRcdFx0XHR0bS5jb2xvciA9IGxtLmNvbG9yO1xuXHRcdFx0XHRcdFx0dG0uYWxwaGEgPSBsbS5hbHBoYTtcblx0XHRcdFx0XHRcdHRtLnJlcGVhdCA9IHRydWU7XG5cblx0XHRcdFx0XHRcdGlmIChsbS5zcGVjdWxhck1ldGhvZCkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEJ5IHNldHRpbmcgdGhlIHNwZWN1bGFyTWV0aG9kIHByb3BlcnR5IHRvIG51bGwgYmVmb3JlIGFzc2lnbmluZ1xuXHRcdFx0XHRcdFx0XHQvLyB0aGUgYWN0dWFsIG1ldGhvZCBpbnN0YW5jZSwgd2UgYXZvaWQgaGF2aW5nIHRoZSBwcm9wZXJ0aWVzIG9mXG5cdFx0XHRcdFx0XHRcdC8vIHRoZSBuZXcgbWV0aG9kIGJlaW5nIG92ZXJyaWRkZW4gd2l0aCB0aGUgc2V0dGluZ3MgZnJvbSB0aGUgb2xkXG5cdFx0XHRcdFx0XHRcdC8vIG9uZSwgd2hpY2ggaXMgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgc2V0dGVyLlxuXHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdHRtLnNwZWN1bGFyTWV0aG9kID0gbG0uc3BlY3VsYXJNZXRob2Q7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGEpIHtcblxuXHRcdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgdGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGEubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0XHRcdFx0XHRzcGVjdWxhckRhdGEgPSB0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YVtqXTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChzcGVjdWxhckRhdGEubWF0ZXJpYWxJRCA9PSBsbS5tYXRlcmlhbElEKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IG51bGw7IC8vIFByZXZlbnQgcHJvcGVydHkgb3ZlcndyaXRlIChzZWUgYWJvdmUpXG5cdFx0XHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IHNwZWN1bGFyRGF0YS5iYXNpY1NwZWN1bGFyTWV0aG9kO1xuXHRcdFx0XHRcdFx0XHRcdFx0dG0uY29sb3IgPSBzcGVjdWxhckRhdGEuY29sb3I7XG5cdFx0XHRcdFx0XHRcdFx0XHR0bS5hbHBoYSA9IHNwZWN1bGFyRGF0YS5hbHBoYTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7IC8vaWYgbWF0ZXJpYWxNb2RlPT0yIHRoaXMgaXMgYSBNdWx0aVBhc3NUZXh0dXJlXG5cdFx0XHRcdFx0XHR0bSA9IDxNZXRob2RNYXRlcmlhbD4gbWVzaC5tYXRlcmlhbDtcblx0XHRcdFx0XHRcdHRtLm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcblxuXHRcdFx0XHRcdFx0dG0udGV4dHVyZSA9IGxtLnRleHR1cmU7XG5cdFx0XHRcdFx0XHR0bS5jb2xvciA9IGxtLmNvbG9yO1xuXHRcdFx0XHRcdFx0dG0ucmVwZWF0ID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0aWYgKGxtLnNwZWN1bGFyTWV0aG9kKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEJ5IHNldHRpbmcgdGhlIHNwZWN1bGFyTWV0aG9kIHByb3BlcnR5IHRvIG51bGwgYmVmb3JlIGFzc2lnbmluZ1xuXHRcdFx0XHRcdFx0XHQvLyB0aGUgYWN0dWFsIG1ldGhvZCBpbnN0YW5jZSwgd2UgYXZvaWQgaGF2aW5nIHRoZSBwcm9wZXJ0aWVzIG9mXG5cdFx0XHRcdFx0XHRcdC8vIHRoZSBuZXcgbWV0aG9kIGJlaW5nIG92ZXJyaWRkZW4gd2l0aCB0aGUgc2V0dGluZ3MgZnJvbSB0aGUgb2xkXG5cdFx0XHRcdFx0XHRcdC8vIG9uZSwgd2hpY2ggaXMgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgc2V0dGVyLlxuXHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdHRtLnNwZWN1bGFyTWV0aG9kID0gbG0uc3BlY3VsYXJNZXRob2Q7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCB0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YS5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRcdFx0XHRcdHNwZWN1bGFyRGF0YSA9IHRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhW2pdO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHNwZWN1bGFyRGF0YS5tYXRlcmlhbElEID09IGxtLm1hdGVyaWFsSUQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRtLnNwZWN1bGFyTWV0aG9kID0gbnVsbDsgLy8gUHJldmVudCBwcm9wZXJ0eSBvdmVyd3JpdGUgKHNlZSBhYm92ZSlcblx0XHRcdFx0XHRcdFx0XHRcdHRtLnNwZWN1bGFyTWV0aG9kID0gc3BlY3VsYXJEYXRhLmJhc2ljU3BlY3VsYXJNZXRob2Q7XG5cdFx0XHRcdFx0XHRcdFx0XHR0bS5jb2xvciA9IHNwZWN1bGFyRGF0YS5jb2xvcjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZXNoLm1hdGVyaWFsLm5hbWUgPSBkZWNvbXBvc2VJRFsxXT8gZGVjb21wb3NlSURbMV0gOiBkZWNvbXBvc2VJRFswXTtcblx0XHRcdFx0dGhpcy5fbWVzaGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0LS1pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChsbS5jbSB8fCB0bSlcblx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KGxtLmNtIHx8IHRtKTtcblx0fVxuXG5cdHByaXZhdGUgYXBwbHlNYXRlcmlhbHMoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX21hdGVyaWFsTG9hZGVkLmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5fbWF0ZXJpYWxMb2FkZWQubGVuZ3RoOyArK2kpXG5cdFx0XHR0aGlzLmFwcGx5TWF0ZXJpYWwodGhpcy5fbWF0ZXJpYWxMb2FkZWRbaV0pO1xuXHR9XG59XG5cbmV4cG9ydCA9IE9CSlBhcnNlcjtcblxuY2xhc3MgT2JqZWN0R3JvdXBcbntcblx0cHVibGljIG5hbWU6c3RyaW5nO1xuXHRwdWJsaWMgZ3JvdXBzOkdyb3VwW10gPSBuZXcgQXJyYXk8R3JvdXA+KCk7XG59XG5cbmNsYXNzIEdyb3VwXG57XG5cdHB1YmxpYyBuYW1lOnN0cmluZztcblx0cHVibGljIG1hdGVyaWFsSUQ6c3RyaW5nO1xuXHRwdWJsaWMgbWF0ZXJpYWxHcm91cHM6TWF0ZXJpYWxHcm91cFtdID0gbmV3IEFycmF5PE1hdGVyaWFsR3JvdXA+KCk7XG59XG5cbmNsYXNzIE1hdGVyaWFsR3JvdXBcbntcblx0cHVibGljIHVybDpzdHJpbmc7XG5cdHB1YmxpYyBmYWNlczpGYWNlRGF0YVtdID0gbmV3IEFycmF5PEZhY2VEYXRhPigpO1xufVxuXG5jbGFzcyBTcGVjdWxhckRhdGFcbntcblx0cHVibGljIG1hdGVyaWFsSUQ6c3RyaW5nO1xuXHRwdWJsaWMgYmFzaWNTcGVjdWxhck1ldGhvZDpTcGVjdWxhckJhc2ljTWV0aG9kO1xuXHRwdWJsaWMgY29sb3I6bnVtYmVyID0gMHhGRkZGRkY7XG5cdHB1YmxpYyBhbHBoYTpudW1iZXIgPSAxO1xufVxuXG5jbGFzcyBMb2FkZWRNYXRlcmlhbFxue1xuXHRwdWJsaWMgbWF0ZXJpYWxJRDpzdHJpbmc7XG5cdHB1YmxpYyB0ZXh0dXJlOlRleHR1cmUyREJhc2U7XG5cdHB1YmxpYyBjbTpNYXRlcmlhbEJhc2U7XG5cdHB1YmxpYyBzcGVjdWxhck1ldGhvZDpTcGVjdWxhckJhc2ljTWV0aG9kO1xuXHRwdWJsaWMgY29sb3I6bnVtYmVyID0gMHhGRkZGRkY7XG5cdHB1YmxpYyBhbHBoYTpudW1iZXIgPSAxO1xufVxuXG5jbGFzcyBGYWNlRGF0YVxue1xuXHRwdWJsaWMgdmVydGV4SW5kaWNlczpBcnJheTxudW1iZXI+IC8qdWludCovID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0cHVibGljIHV2SW5kaWNlczpBcnJheTxudW1iZXI+IC8qdWludCovID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0cHVibGljIG5vcm1hbEluZGljZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdHB1YmxpYyBpbmRleElkczpzdHJpbmdbXSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7IC8vIHVzZWQgZm9yIHJlYWwgaW5kZXggbG9va3Vwc1xufVxuXG4vKipcbiogVGV4dHVyZSBjb29yZGluYXRlcyB2YWx1ZSBvYmplY3QuXG4qL1xuY2xhc3MgVVZcbntcblx0cHJpdmF0ZSBfdTpudW1iZXI7XG5cdHByaXZhdGUgX3Y6bnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IDxjb2RlPlVWPC9jb2RlPiBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSAgICB1ICAgICAgICBbb3B0aW9uYWxdICAgIFRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgb2YgdGhlIHRleHR1cmUgdmFsdWUuIERlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSAgICB2ICAgICAgICBbb3B0aW9uYWxdICAgIFRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIG9mIHRoZSB0ZXh0dXJlIHZhbHVlLiBEZWZhdWx0cyB0byAwLlxuXHQgKi9cblx0Y29uc3RydWN0b3IodTpudW1iZXIgPSAwLCB2Om51bWJlciA9IDApXG5cdHtcblx0XHR0aGlzLl91ID0gdTtcblx0XHR0aGlzLl92ID0gdjtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZpbmVzIHRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIG9mIHRoZSB0ZXh0dXJlIHZhbHVlLlxuXHQgKi9cblx0cHVibGljIGdldCB2KCk6bnVtYmVyXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fdjtcblx0fVxuXG5cdHB1YmxpYyBzZXQgdih2YWx1ZTpudW1iZXIpXG5cdHtcblx0XHR0aGlzLl92ID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogRGVmaW5lcyB0aGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIG9mIHRoZSB0ZXh0dXJlIHZhbHVlLlxuXHQgKi9cblx0cHVibGljIGdldCB1KCk6bnVtYmVyXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fdTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgdSh2YWx1ZTpudW1iZXIpXG5cdHtcblx0XHR0aGlzLl91ID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJucyBhIG5ldyBVViB2YWx1ZSBPYmplY3Rcblx0ICovXG5cdHB1YmxpYyBjbG9uZSgpOlVWXG5cdHtcblx0XHRyZXR1cm4gbmV3IFVWKHRoaXMuX3UsIHRoaXMuX3YpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybnMgdGhlIHZhbHVlIG9iamVjdCBhcyBhIHN0cmluZyBmb3IgdHJhY2UvZGVidWcgcHVycG9zZVxuXHQgKi9cblx0cHVibGljIHRvU3RyaW5nKCk6c3RyaW5nXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fdSArIFwiLFwiICsgdGhpcy5fdjtcblx0fVxufVxuXG5jbGFzcyBWZXJ0ZXhcbntcblx0cHJpdmF0ZSBfeDpudW1iZXI7XG5cdHByaXZhdGUgX3k6bnVtYmVyO1xuXHRwcml2YXRlIF96Om51bWJlcjtcblx0cHJpdmF0ZSBfaW5kZXg6bnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IDxjb2RlPlZlcnRleDwvY29kZT4gdmFsdWUgb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0gICAgeCAgICAgICAgICAgIFtvcHRpb25hbF0gICAgVGhlIHggdmFsdWUuIERlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSAgICB5ICAgICAgICAgICAgW29wdGlvbmFsXSAgICBUaGUgeSB2YWx1ZS4gRGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtICAgIHogICAgICAgICAgICBbb3B0aW9uYWxdICAgIFRoZSB6IHZhbHVlLiBEZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0gICAgaW5kZXggICAgICAgIFtvcHRpb25hbF0gICAgVGhlIGluZGV4IHZhbHVlLiBEZWZhdWx0cyBpcyBOYU4uXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih4Om51bWJlciA9IDAsIHk6bnVtYmVyID0gMCwgejpudW1iZXIgPSAwLCBpbmRleDpudW1iZXIgPSAwKVxuXHR7XG5cdFx0dGhpcy5feCA9IHg7XG5cdFx0dGhpcy5feSA9IHk7XG5cdFx0dGhpcy5feiA9IHo7XG5cdFx0dGhpcy5faW5kZXggPSBpbmRleDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUbyBkZWZpbmUvc3RvcmUgdGhlIGluZGV4IG9mIHZhbHVlIG9iamVjdFxuXHQgKiBAcGFyYW0gICAgaW5kICAgICAgICBUaGUgaW5kZXhcblx0ICovXG5cdHB1YmxpYyBzZXQgaW5kZXgoaW5kOm51bWJlcilcblx0e1xuXHRcdHRoaXMuX2luZGV4ID0gaW5kO1xuXHR9XG5cblx0cHVibGljIGdldCBpbmRleCgpOm51bWJlclxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2luZGV4O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvIGRlZmluZS9zdG9yZSB0aGUgeCB2YWx1ZSBvZiB0aGUgdmFsdWUgb2JqZWN0XG5cdCAqIEBwYXJhbSAgICB2YWx1ZSAgICAgICAgVGhlIHggdmFsdWVcblx0ICovXG5cdHB1YmxpYyBnZXQgeCgpOm51bWJlclxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3g7XG5cdH1cblxuXHRwdWJsaWMgc2V0IHgodmFsdWU6bnVtYmVyKVxuXHR7XG5cdFx0dGhpcy5feCA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvIGRlZmluZS9zdG9yZSB0aGUgeSB2YWx1ZSBvZiB0aGUgdmFsdWUgb2JqZWN0XG5cdCAqIEBwYXJhbSAgICB2YWx1ZSAgICAgICAgVGhlIHkgdmFsdWVcblx0ICovXG5cdHB1YmxpYyBnZXQgeSgpOm51bWJlclxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3k7XG5cdH1cblxuXHRwdWJsaWMgc2V0IHkodmFsdWU6bnVtYmVyKVxuXHR7XG5cdFx0dGhpcy5feSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvIGRlZmluZS9zdG9yZSB0aGUgeiB2YWx1ZSBvZiB0aGUgdmFsdWUgb2JqZWN0XG5cdCAqIEBwYXJhbSAgICB2YWx1ZSAgICAgICAgVGhlIHogdmFsdWVcblx0ICovXG5cdHB1YmxpYyBnZXQgeigpOm51bWJlclxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3o7XG5cdH1cblxuXHRwdWJsaWMgc2V0IHoodmFsdWU6bnVtYmVyKVxuXHR7XG5cdFx0dGhpcy5feiA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybnMgYSBuZXcgVmVydGV4IHZhbHVlIE9iamVjdFxuXHQgKi9cblx0cHVibGljIGNsb25lKCk6VmVydGV4XG5cdHtcblx0XHRyZXR1cm4gbmV3IFZlcnRleCh0aGlzLl94LCB0aGlzLl95LCB0aGlzLl96KTtcblx0fVxufSJdfQ==