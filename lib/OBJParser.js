var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var Geometry = require("awayjs-core/lib/data/Geometry");
var AssetType = require("awayjs-core/lib/library/AssetType");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var DefaultMaterialManager = require("awayjs-renderergl/lib/managers/DefaultMaterialManager");
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
            if (asset.assetType == AssetType.TEXTURE) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9PQkpQYXJzZXIudHMiXSwibmFtZXMiOlsiT0JKUGFyc2VyIiwiT0JKUGFyc2VyLmNvbnN0cnVjdG9yIiwiT0JKUGFyc2VyLnNjYWxlIiwiT0JKUGFyc2VyLnN1cHBvcnRzVHlwZSIsIk9CSlBhcnNlci5zdXBwb3J0c0RhdGEiLCJPQkpQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIk9CSlBhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIk9CSlBhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiT0JKUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiT0JKUGFyc2VyLnBhcnNlTGluZSIsIk9CSlBhcnNlci50cmFuc2xhdGUiLCJPQkpQYXJzZXIudHJhbnNsYXRlTWF0ZXJpYWxHcm91cCIsIk9CSlBhcnNlci50cmFuc2xhdGVWZXJ0ZXhEYXRhIiwiT0JKUGFyc2VyLmNyZWF0ZU9iamVjdCIsIk9CSlBhcnNlci5jcmVhdGVHcm91cCIsIk9CSlBhcnNlci5jcmVhdGVNYXRlcmlhbEdyb3VwIiwiT0JKUGFyc2VyLnBhcnNlVmVydGV4IiwiT0JKUGFyc2VyLnBhcnNlVVYiLCJPQkpQYXJzZXIucGFyc2VWZXJ0ZXhOb3JtYWwiLCJPQkpQYXJzZXIucGFyc2VGYWNlIiwiT0JKUGFyc2VyLnBhcnNlSW5kZXgiLCJPQkpQYXJzZXIucGFyc2VNdGwiLCJPQkpQYXJzZXIucGFyc2VNYXBLZFN0cmluZyIsIk9CSlBhcnNlci5sb2FkTXRsIiwiT0JKUGFyc2VyLmFwcGx5TWF0ZXJpYWwiLCJPQkpQYXJzZXIuYXBwbHlNYXRlcmlhbHMiLCJPYmplY3RHcm91cCIsIk9iamVjdEdyb3VwLmNvbnN0cnVjdG9yIiwiR3JvdXAiLCJHcm91cC5jb25zdHJ1Y3RvciIsIk1hdGVyaWFsR3JvdXAiLCJNYXRlcmlhbEdyb3VwLmNvbnN0cnVjdG9yIiwiU3BlY3VsYXJEYXRhIiwiU3BlY3VsYXJEYXRhLmNvbnN0cnVjdG9yIiwiTG9hZGVkTWF0ZXJpYWwiLCJMb2FkZWRNYXRlcmlhbC5jb25zdHJ1Y3RvciIsIkZhY2VEYXRhIiwiRmFjZURhdGEuY29uc3RydWN0b3IiLCJVViIsIlVWLmNvbnN0cnVjdG9yIiwiVVYudiIsIlVWLnUiLCJVVi5jbG9uZSIsIlVWLnRvU3RyaW5nIiwiVmVydGV4IiwiVmVydGV4LmNvbnN0cnVjdG9yIiwiVmVydGV4LmluZGV4IiwiVmVydGV4LngiLCJWZXJ0ZXgueSIsIlZlcnRleC56IiwiVmVydGV4LmNsb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFPLG1CQUFtQixXQUFjLDBDQUEwQyxDQUFDLENBQUM7QUFDcEYsSUFBTyxRQUFRLFdBQWlCLCtCQUErQixDQUFDLENBQUM7QUFJakUsSUFBTyxTQUFTLFdBQWdCLG1DQUFtQyxDQUFDLENBQUM7QUFFckUsSUFBTyxtQkFBbUIsV0FBYyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ25GLElBQU8sVUFBVSxXQUFnQixnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ25FLElBQU8sVUFBVSxXQUFnQixvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3ZFLElBQU8sV0FBVyxXQUFnQixxQ0FBcUMsQ0FBQyxDQUFDO0FBSXpFLElBQU8sc0JBQXNCLFdBQWEsc0RBQXNELENBQUMsQ0FBQztBQUNsRyxJQUFPLElBQUksV0FBa0Isa0NBQWtDLENBQUMsQ0FBQztBQUdqRSxJQUFPLHNCQUFzQixXQUFhLHVEQUF1RCxDQUFDLENBQUM7QUFFbkcsSUFBTyxjQUFjLFdBQWUsMkNBQTJDLENBQUMsQ0FBQztBQUNqRixJQUFPLGtCQUFrQixXQUFjLCtDQUErQyxDQUFDLENBQUM7QUFDeEYsSUFBTyxtQkFBbUIsV0FBYyx3REFBd0QsQ0FBQyxDQUFDO0FBRWxHLEFBR0E7O0dBREc7SUFDRyxTQUFTO0lBQVNBLFVBQWxCQSxTQUFTQSxVQUFtQkE7SUEyQmpDQTs7OztPQUlHQTtJQUNIQSxTQWhDS0EsU0FBU0EsQ0FnQ0ZBLEtBQWdCQTtRQUFoQkMscUJBQWdCQSxHQUFoQkEsU0FBZ0JBO1FBRTNCQSxrQkFBTUEsbUJB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QUNBLENBQUNBLENBQUNBO1lBQ3JEQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBZUEsQ0FBQ0E7WUFDekNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3ZCQSxDQUFDQTtRQUVEQSxPQUFPQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUNqRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFFbEVBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFFdENBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQ2pFQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNqQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3hCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQSxDQUFDQTtZ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Q0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFdEZBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFOUVBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFNUZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUVEQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzdDQSxDQUFDQTtJQUVEbkI7O09BRUdBO0lBQ0tBLDhCQUFVQSxHQUFsQkEsVUFBbUJBLEtBQVlBLEVBQUVBLE1BQWFBO1FB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QSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTt3QkFDL0VBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUVuREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1pBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO3dCQUNqQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0EsR0FBRUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7b0JBRXZFQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBRVBBLE1BQU1BLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUVsQkEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUN4SEEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsQ0FBQ0E7Z0NBQy9EQSxLQUFLQSxDQUFDQTs0QkFFUEEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUMxSEEsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsR0FBR0EsQ0FBQ0E7b0NBQ3RFQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQTtnQ0FDcEJBLENBQUNBO2dDQUNEQSxLQUFLQSxDQUFDQTs0QkFFUEEsS0FBS0EsSUFBSUE7Z0NBQ1JBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29DQUN4Q0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsS0FBS0EsQ0FBQ0E7Z0NBQ25DQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDakJBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBO2dDQUNyQkEsS0FBS0EsQ0FBQ0E7NEJBRVBBLEtBQUtBLElBQUlBO2dDQUNSQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQ0FDMUhBLFlBQVlBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLElBQUlBLEVBQUVBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLEdBQUdBLENBQUNBO29DQUNyRUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0NBQ2pCQSxDQUFDQTtnQ0FDREEsS0FBS0EsQ0FBQ0E7NEJBRVBBLEtBQUtBLElBQUlBLENBQUNBOzRCQUNWQSxLQUFLQSxHQUFHQTtnQ0FDUEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0NBQ3hDQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDMUJBLEtBQUtBLENBQUNBOzRCQUVQQSxLQUFLQSxRQUFRQTtnQ0FDWkEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQ0FDckNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNwQ0EsQ0FBQ0E7b0JBQ0ZBLENBQUNBO2dCQUNGQSxDQUFDQTtZQUNGQSxDQUFDQTtZQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFakJBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO29CQUVqQkEsbUJBQW1CQSxHQUFHQSxJQUFJQSxtQkFBbUJBLEVBQUVBLENBQUNBO29CQUNoREEsbUJBQW1CQSxDQUFDQSxhQUFhQSxHQUFHQSxhQUFhQSxDQUFDQTtvQkFDbERBLG1CQUFtQkEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7b0JBRXhDQSxJQUFJQSxZQUFZQSxHQUFnQkEsSUFBSUEsWUFBWUEsRUFBRUEsQ0FBQ0E7b0JBQ25EQSxZQUFZQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDM0JBLFlBQVlBLENBQUNBLG1CQUFtQkEsR0FBR0EsbUJBQW1CQSxDQUFDQTtvQkFDdkRBLFlBQVlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO29CQUUxQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQTt3QkFDL0JBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBZ0JBLENBQUNBO29CQUV4REEsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtnQkFFL0NBLENBQUNBO2dCQUVEQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUU5REEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRXRDQSxJQUFJQSxFQUFFQSxHQUFrQkEsSUFBSUEsY0FBY0EsRUFBRUEsQ0FBQ0E7Z0JBQzdDQSxFQUFFQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTtnQkFFaENBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBO29CQUNkQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx3RUFBd0VBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLHdDQUF3Q0EsQ0FBQ0EsQ0FBQ0E7Z0JBRXBKQSxJQUFJQSxFQUFpQkEsQ0FBQ0E7Z0JBRXRCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0JBLEVBQUVBLEdBQUdBLElBQUlBLGNBQWNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUUvQkEsSUFBSUEsUUFBUUEsR0FBbUNBLEVBQUVBLENBQUNBO29CQUVsREEsUUFBUUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3ZCQSxRQUFRQSxDQUFDQSxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQTtvQkFDckNBLFFBQVFBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO29CQUV2QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pCQSxRQUFRQSxDQUFDQSxhQUFhQSxHQUFHQSxhQUFhQSxDQUFDQTt3QkFDdkNBLFFBQVFBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO29CQUM5QkEsQ0FBQ0E7Z0JBRUZBLENBQUNBO2dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDUEEsRUFBRUEsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQy9CQSxFQUFFQSxDQUFDQSxJQUFJQSxHQUFHQSxrQkFBa0JBLENBQUNBLFVBQVVBLENBQUNBO29CQUV4Q0EsSUFBSUEsYUFBYUEsR0FBbUNBLEVBQUVBLENBQUNBO29CQUd2REEsYUFBYUEsQ0FBQ0EsWUFBWUEsR0FBR0EsWUFBWUEsQ0FBQ0E7b0JBQzFDQSxhQUFhQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFFNUJBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQkEsYUFBYUEsQ0FBQ0EsYUFBYUEsR0FBR0EsYUFBYUEsQ0FBQ0E7d0JBQzVDQSxhQUFhQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQTtvQkFDbkNBLENBQUNBO2dCQUNGQSxDQUFDQTtnQkFFREEsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBRVhBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUU5QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNCQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUV6QkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFFREEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDM0JBLENBQUNBO0lBRU9yQixvQ0FBZ0JBLEdBQXhCQSxVQUF5QkEsS0FBS0E7UUFFN0JzQixJQUFJQSxHQUFHQSxHQUFVQSxFQUFFQSxDQUFDQTtRQUNwQkEsSUFBSUEsQ0FBUUEsQ0FBQ0E7UUFDYkEsSUFBSUEsU0FBaUJBLENBQUNBO1FBRXRCQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQTtZQUMvQkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xCQSxLQUFLQSxTQUFTQSxDQUFDQTtnQkFDZkEsS0FBS0EsU0FBU0EsQ0FBQ0E7Z0JBQ2ZBLEtBQUtBLEtBQUtBLENBQUNBO2dCQUNYQSxLQUFLQSxRQUFRQSxDQUFDQTtnQkFDZEEsS0FBS0EsU0FBU0E7b0JBQ2JBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLHdCQUF3QkE7b0JBQ2hDQSxLQUFLQSxDQUFDQTtnQkFDUEEsS0FBS0EsS0FBS0E7b0JBQ1RBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLHlCQUF5QkE7b0JBQ2pDQSxLQUFLQSxDQUFDQTtnQkFDUEEsS0FBS0EsSUFBSUEsQ0FBQ0E7Z0JBQ1ZBLEtBQUtBLElBQUlBLENBQUNBO2dCQUNWQSxLQUFLQSxJQUFJQTtvQkFDUkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEseUJBQXlCQTtvQkFDakNBLFFBQVFBLENBQUNBO2dCQUNWQTtvQkFDQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ2pCQSxLQUFLQSxDQUFDQTtZQUNSQSxDQUFDQTtZQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDYkEsS0FBS0EsQ0FBQ0E7UUFDUkEsQ0FBQ0E7UUFHREEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDL0JBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxHQUFHQSxJQUFJQSxHQUFHQSxDQUFDQTtRQUNaQSxDQUFDQTtRQUVEQSxBQUNBQSxnRUFEZ0VBO1FBQ2hFQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUU5QkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7SUFDWkEsQ0FBQ0E7SUFFT3RCLDJCQUFPQSxHQUFmQSxVQUFnQkEsTUFBYUE7UUFFNUJ1QixBQUVBQSw4REFGOERBO1FBQzlEQSxnREFBZ0RBO1FBQ2hEQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMxREEsSUFBSUEsQ0FBQ0EsOEJBQThCQSxFQUFFQSxFQUFDQSxFQUFFQTtJQUN6Q0EsQ0FBQ0EsR0FEc0NBO0lBRy9CdkIsaUNBQWFBLEdBQXJCQSxVQUFzQkEsRUFBaUJBO1FBRXRDd0IsSUFBSUEsV0FBV0EsQ0FBQ0E7UUFDaEJBLElBQUlBLElBQVNBLENBQUNBO1FBQ2RBLElBQUlBLEVBQWlCQSxDQUFDQTtRQUN0QkEsSUFBSUEsQ0FBUUEsQ0FBQ0E7UUFDYkEsSUFBSUEsWUFBeUJBLENBQUNBO1FBRTlCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFVQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUNyREEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBRTVDQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFFckNBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO29CQUNYQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDakJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUN0QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBRXZCQSxDQUFDQTtnQkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDM0JBLEVBQUVBLEdBQXFCQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFFckNBLEVBQUVBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBO3dCQUN4QkEsRUFBRUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ3BCQSxFQUFFQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDcEJBLEVBQUVBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO3dCQUVqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBRXZCQSxBQUlBQSxrRUFKa0VBOzRCQUNsRUEsZ0VBQWdFQTs0QkFDaEVBLGlFQUFpRUE7NEJBQ2pFQSxnREFBZ0RBOzRCQUNoREEsRUFBRUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0E7NEJBQ3pCQSxFQUFFQSxDQUFDQSxjQUFjQSxHQUFHQSxFQUFFQSxDQUFDQSxjQUFjQSxDQUFDQTt3QkFFdkNBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBLENBQUNBOzRCQUV2Q0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQTtnQ0FDeERBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0NBRTdDQSxFQUFFQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtvQ0FDOUNBLEVBQUVBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLEVBQUVBLHlDQUF5Q0E7b0NBQ25FQSxFQUFFQSxDQUFDQSxjQUFjQSxHQUFHQSxZQUFZQSxDQUFDQSxtQkFBbUJBLENBQUNBO29DQUNyREEsRUFBRUEsQ0FBQ0EsS0FBS0EsR0FBR0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0NBQzlCQSxFQUFFQSxDQUFDQSxLQUFLQSxHQUFHQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQTtvQ0FDOUJBLEtBQUtBLENBQUNBO2dDQUNQQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7d0JBQ0ZBLENBQUNBO29CQUNGQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLEVBQUVBLEdBQW9CQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDcENBLEVBQUVBLENBQUNBLElBQUlBLEdBQUdBLGtCQUFrQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7d0JBRXhDQSxFQUFFQSxDQUFDQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDeEJBLEVBQUVBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBO3dCQUNwQkEsRUFBRUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7d0JBRWpCQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkJBLEFBSUFBLGtFQUprRUE7NEJBQ2xFQSxnRUFBZ0VBOzRCQUNoRUEsaUVBQWlFQTs0QkFDakVBLGdEQUFnREE7NEJBQ2hEQSxFQUFFQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxDQUFDQTs0QkFDekJBLEVBQUVBLENBQUNBLGNBQWNBLEdBQUdBLEVBQUVBLENBQUNBLGNBQWNBLENBQUNBO3dCQUN2Q0EsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3ZDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBO2dDQUN4REEsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FFN0NBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO29DQUM5Q0EsRUFBRUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsRUFBRUEseUNBQXlDQTtvQ0FDbkVBLEVBQUVBLENBQUNBLGNBQWNBLEdBQUdBLFlBQVlBLENBQUNBLG1CQUFtQkEsQ0FBQ0E7b0NBQ3JEQSxFQUFFQSxDQUFDQSxLQUFLQSxHQUFHQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQTtvQ0FFOUJBLEtBQUtBLENBQUNBO2dDQUVQQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7d0JBQ0ZBLENBQUNBO29CQUNGQSxDQUFDQTtnQkFDRkEsQ0FBQ0E7Z0JBRURBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLEdBQUdBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLEdBQUVBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNyRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNMQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUNmQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFFT3hCLGtDQUFjQSxHQUF0QkE7UUFFQ3lCLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO1lBQ3BDQSxNQUFNQSxDQUFDQTtRQUVSQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFVQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUMxREEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDOUNBLENBQUNBO0lBQ0Z6QixnQkFBQ0E7QUFBREEsQ0FoNkJBLEFBZzZCQ0EsRUFoNkJ1QixVQUFVLEVBZzZCakM7QUFJRCxJQUFNLFdBQVc7SUFBakIwQixTQUFNQSxXQUFXQTtRQUdUQyxXQUFNQSxHQUFXQSxJQUFJQSxLQUFLQSxFQUFTQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUFBREQsa0JBQUNBO0FBQURBLENBSkEsQUFJQ0EsSUFBQTtBQUVELElBQU0sS0FBSztJQUFYRSxTQUFNQSxLQUFLQTtRQUlIQyxtQkFBY0EsR0FBbUJBLElBQUlBLEtBQUtBLEVBQWlCQSxDQUFDQTtJQUNwRUEsQ0FBQ0E7SUFBREQsWUFBQ0E7QUFBREEsQ0FMQSxBQUtDQSxJQUFBO0FBRUQsSUFBTSxhQUFhO0lBQW5CRSxTQUFNQSxhQUFhQTtRQUdYQyxVQUFLQSxHQUFjQSxJQUFJQSxLQUFLQSxFQUFZQSxDQUFDQTtJQUNqREEsQ0FBQ0E7SUFBREQsb0JBQUNBO0FBQURBLENBSkEsQUFJQ0EsSUFBQTtBQUVELElBQU0sWUFBWTtJQUFsQkUsU0FBTUEsWUFBWUE7UUFJVkMsVUFBS0EsR0FBVUEsUUFBUUEsQ0FBQ0E7UUFDeEJBLFVBQUtBLEdBQVVBLENBQUNBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUFERCxtQkFBQ0E7QUFBREEsQ0FOQSxBQU1DQSxJQUFBO0FBRUQsSUFBTSxjQUFjO0lBQXBCRSxTQUFNQSxjQUFjQTtRQU1aQyxVQUFLQSxHQUFVQSxRQUFRQSxDQUFDQTtRQUN4QkEsVUFBS0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQURELHFCQUFDQTtBQUFEQSxDQVJBLEFBUUNBLElBQUE7QUFFRCxJQUFNLFFBQVE7SUFBZEUsU0FBTUEsUUFBUUE7UUFFTkMsa0JBQWFBLEdBQTBCQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQTtRQUMzREEsY0FBU0EsR0FBMEJBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO1FBQ3ZEQSxrQkFBYUEsR0FBMEJBLElBQUlBLEtBQUtBLEVBQVVBLENBQUNBO1FBQzNEQSxhQUFRQSxHQUFZQSxJQUFJQSxLQUFLQSxFQUFVQSxDQUFDQSxDQUFDQSw4QkFBOEJBO0lBQy9FQSxDQUFDQTtJQUFERCxlQUFDQTtBQUFEQSxDQU5BLEFBTUNBLElBQUE7QUFFRCxBQUdBOztFQURFO0lBQ0ksRUFBRTtJQUtQRTs7Ozs7T0FLR0E7SUFDSEEsU0FYS0EsRUFBRUEsQ0FXS0EsQ0FBWUEsRUFBRUEsQ0FBWUE7UUFBMUJDLGlCQUFZQSxHQUFaQSxLQUFZQTtRQUFFQSxpQkFBWUEsR0FBWkEsS0FBWUE7UUFFckNBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ1pBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ2JBLENBQUNBO0lBS0RELHNCQUFXQSxpQkFBQ0E7UUFIWkE7O1dBRUdBO2FBQ0hBO1lBRUNFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTthQUVERixVQUFhQSxLQUFZQTtZQUV4QkUsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBOzs7T0FMQUY7SUFVREEsc0JBQVdBLGlCQUFDQTtRQUhaQTs7V0FFR0E7YUFDSEE7WUFFQ0csTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDaEJBLENBQUNBO2FBRURILFVBQWFBLEtBQVlBO1lBRXhCRyxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUNqQkEsQ0FBQ0E7OztPQUxBSDtJQU9EQTs7T0FFR0E7SUFDSUEsa0JBQUtBLEdBQVpBO1FBRUNJLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUVESjs7T0FFR0E7SUFDSUEscUJBQVFBLEdBQWZBO1FBRUNLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO0lBQ2hDQSxDQUFDQTtJQUNGTCxTQUFDQTtBQUFEQSxDQTFEQSxBQTBEQ0EsSUFBQTtBQUVELElBQU0sTUFBTTtJQU9YTTs7Ozs7OztPQU9HQTtJQUNIQSxTQWZLQSxNQUFNQSxDQWVDQSxDQUFZQSxFQUFFQSxDQUFZQSxFQUFFQSxDQUFZQSxFQUFFQSxLQUFnQkE7UUFBMURDLGlCQUFZQSxHQUFaQSxLQUFZQTtRQUFFQSxpQkFBWUEsR0FBWkEsS0FBWUE7UUFBRUEsaUJBQVlBLEdBQVpBLEtBQVlBO1FBQUVBLHFCQUFnQkEsR0FBaEJBLFNBQWdCQTtRQUVyRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDWkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDWkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDWkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDckJBLENBQUNBO0lBTURELHNCQUFXQSx5QkFBS0E7YUFLaEJBO1lBRUNFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1FBQ3BCQSxDQUFDQTtRQVpERjs7O1dBR0dBO2FBQ0hBLFVBQWlCQSxHQUFVQTtZQUUxQkUsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDbkJBLENBQUNBOzs7T0FBQUY7SUFXREEsc0JBQVdBLHFCQUFDQTtRQUpaQTs7O1dBR0dBO2FBQ0hBO1lBRUNHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTthQUVESCxVQUFhQSxLQUFZQTtZQUV4QkcsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBOzs7T0FMQUg7SUFXREEsc0JBQVdBLHFCQUFDQTtRQUpaQTs7O1dBR0dBO2FBQ0hBO1lBRUNJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTthQUVESixVQUFhQSxLQUFZQTtZQUV4QkksSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBOzs7T0FMQUo7SUFXREEsc0JBQVdBLHFCQUFDQTtRQUpaQTs7O1dBR0dBO2FBQ0hBO1lBRUNLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTthQUVETCxVQUFhQSxLQUFZQTtZQUV4QkssSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBOzs7T0FMQUw7SUFPREE7O09BRUdBO0lBQ0lBLHNCQUFLQSxHQUFaQTtRQUVDTSxNQUFNQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFDRk4sYUFBQ0E7QUFBREEsQ0F0RkEsQUFzRkNBLElBQUE7QUFwTUQsaUJBQVMsU0FBUyxDQUFDIiwiZmlsZSI6Ik9CSlBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcbmltcG9ydCBHZW9tZXRyeVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvR2VvbWV0cnlcIik7XG5pbXBvcnQgTWF0cml4M0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL01hdHJpeDNEXCIpO1xuaW1wb3J0IFF1YXRlcm5pb25cdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9RdWF0ZXJuaW9uXCIpO1xuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcbmltcG9ydCBBc3NldFR5cGVcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9Bc3NldFR5cGVcIik7XG5pbXBvcnQgSUFzc2V0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9JQXNzZXRcIik7XG5pbXBvcnQgVVJMTG9hZGVyRGF0YUZvcm1hdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxMb2FkZXJEYXRhRm9ybWF0XCIpO1xuaW1wb3J0IFVSTFJlcXVlc3RcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTFJlcXVlc3RcIik7XG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XG5pbXBvcnQgUGFyc2VyVXRpbHNcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJVdGlsc1wiKTtcbmltcG9ydCBSZXNvdXJjZURlcGVuZGVuY3lcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1Jlc291cmNlRGVwZW5kZW5jeVwiKTtcbmltcG9ydCBUZXh0dXJlMkRCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlMkRCYXNlXCIpO1xuXG5pbXBvcnQgRGlzcGxheU9iamVjdENvbnRhaW5lclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9jb250YWluZXJzL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XG5pbXBvcnQgTWVzaFx0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvTWVzaFwiKTtcbmltcG9ydCBNYXRlcmlhbEJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWF0ZXJpYWxzL01hdGVyaWFsQmFzZVwiKTtcblxuaW1wb3J0IERlZmF1bHRNYXRlcmlhbE1hbmFnZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvbWFuYWdlcnMvRGVmYXVsdE1hdGVyaWFsTWFuYWdlclwiKTtcblxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL01ldGhvZE1hdGVyaWFsXCIpO1xuaW1wb3J0IE1ldGhvZE1hdGVyaWFsTW9kZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLW1ldGhvZG1hdGVyaWFscy9saWIvTWV0aG9kTWF0ZXJpYWxNb2RlXCIpO1xuaW1wb3J0IFNwZWN1bGFyQmFzaWNNZXRob2RcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL21ldGhvZHMvU3BlY3VsYXJCYXNpY01ldGhvZFwiKTtcblxuLyoqXG4gKiBPQkpQYXJzZXIgcHJvdmlkZXMgYSBwYXJzZXIgZm9yIHRoZSBPQkogZGF0YSB0eXBlLlxuICovXG5jbGFzcyBPQkpQYXJzZXIgZXh0ZW5kcyBQYXJzZXJCYXNlXG57XG5cdHByaXZhdGUgX3RleHREYXRhOnN0cmluZztcblx0cHJpdmF0ZSBfc3RhcnRlZFBhcnNpbmc6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfY2hhckluZGV4Om51bWJlcjtcblx0cHJpdmF0ZSBfb2xkSW5kZXg6bnVtYmVyO1xuXHRwcml2YXRlIF9zdHJpbmdMZW5ndGg6bnVtYmVyO1xuXHRwcml2YXRlIF9jdXJyZW50T2JqZWN0Ok9iamVjdEdyb3VwO1xuXHRwcml2YXRlIF9jdXJyZW50R3JvdXA6R3JvdXA7XG5cdHByaXZhdGUgX2N1cnJlbnRNYXRlcmlhbEdyb3VwOk1hdGVyaWFsR3JvdXA7XG5cdHByaXZhdGUgX29iamVjdHM6QXJyYXk8T2JqZWN0R3JvdXA+O1xuXHRwcml2YXRlIF9tYXRlcmlhbElEczpzdHJpbmdbXTtcblx0cHJpdmF0ZSBfbWF0ZXJpYWxMb2FkZWQ6QXJyYXk8TG9hZGVkTWF0ZXJpYWw+O1xuXHRwcml2YXRlIF9tYXRlcmlhbFNwZWN1bGFyRGF0YTpBcnJheTxTcGVjdWxhckRhdGE+O1xuXHRwcml2YXRlIF9tZXNoZXM6QXJyYXk8TWVzaD47XG5cdHByaXZhdGUgX2xhc3RNdGxJRDpzdHJpbmc7XG5cdHByaXZhdGUgX29iamVjdEluZGV4Om51bWJlcjtcblx0cHJpdmF0ZSBfcmVhbEluZGljZXM7XG5cdHByaXZhdGUgX3ZlcnRleEluZGV4Om51bWJlcjtcblx0cHJpdmF0ZSBfdmVydGljZXM6QXJyYXk8VmVydGV4Pjtcblx0cHJpdmF0ZSBfdmVydGV4Tm9ybWFsczpBcnJheTxWZXJ0ZXg+O1xuXHRwcml2YXRlIF91dnM6QXJyYXk8VVY+O1xuXHRwcml2YXRlIF9zY2FsZTpudW1iZXI7XG5cdHByaXZhdGUgX210bExpYjpib29sZWFuO1xuXHRwcml2YXRlIF9tdGxMaWJMb2FkZWQ6Ym9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgX2FjdGl2ZU1hdGVyaWFsSUQ6c3RyaW5nID0gXCJcIjtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBPQkpQYXJzZXIgb2JqZWN0LlxuXHQgKiBAcGFyYW0gdXJpIFRoZSB1cmwgb3IgaWQgb2YgdGhlIGRhdGEgb3IgZmlsZSB0byBiZSBwYXJzZWQuXG5cdCAqIEBwYXJhbSBleHRyYSBUaGUgaG9sZGVyIGZvciBleHRyYSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgcGFyc2VyIG1pZ2h0IG5lZWQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzY2FsZTpudW1iZXIgPSAxKVxuXHR7XG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5URVhUKTtcblx0XHR0aGlzLl9zY2FsZSA9IHNjYWxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxpbmcgZmFjdG9yIGFwcGxpZWQgZGlyZWN0bHkgdG8gdmVydGljZXMgZGF0YVxuXHQgKiBAcGFyYW0gdmFsdWUgVGhlIHNjYWxpbmcgZmFjdG9yLlxuXHQgKi9cblx0cHVibGljIHNldCBzY2FsZSh2YWx1ZTpudW1iZXIpXG5cdHtcblx0XHR0aGlzLl9zY2FsZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCBhIGdpdmVuIGZpbGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBieSB0aGUgcGFyc2VyLlxuXHQgKiBAcGFyYW0gZXh0ZW5zaW9uIFRoZSBmaWxlIGV4dGVuc2lvbiBvZiBhIHBvdGVudGlhbCBmaWxlIHRvIGJlIHBhcnNlZC5cblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZmlsZSB0eXBlIGlzIHN1cHBvcnRlZC5cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNUeXBlKGV4dGVuc2lvbjpzdHJpbmcpOmJvb2xlYW5cblx0e1xuXHRcdGV4dGVuc2lvbiA9IGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBleHRlbnNpb24gPT0gXCJvYmpcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBUZXN0cyB3aGV0aGVyIGEgZGF0YSBibG9jayBjYW4gYmUgcGFyc2VkIGJ5IHRoZSBwYXJzZXIuXG5cdCAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGJsb2NrIHRvIHBvdGVudGlhbGx5IGJlIHBhcnNlZC5cblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZGF0YSBpcyBzdXBwb3J0ZWQuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzRGF0YShkYXRhOmFueSk6Ym9vbGVhblxuXHR7XG5cdFx0dmFyIGNvbnRlbnQ6c3RyaW5nID0gUGFyc2VyVXRpbHMudG9TdHJpbmcoZGF0YSk7XG5cdFx0dmFyIGhhc1Y6Ym9vbGVhbiA9IGZhbHNlO1xuXHRcdHZhciBoYXNGOmJvb2xlYW4gPSBmYWxzZTtcblxuXHRcdGlmIChjb250ZW50KSB7XG5cdFx0XHRoYXNWID0gY29udGVudC5pbmRleE9mKFwiXFxudiBcIikgIT0gLTE7XG5cdFx0XHRoYXNGID0gY29udGVudC5pbmRleE9mKFwiXFxuZiBcIikgIT0gLTE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhc1YgJiYgaGFzRjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3kocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSlcblx0e1xuXHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuaWQgPT0gJ210bCcpIHtcblx0XHRcdHZhciBzdHI6c3RyaW5nID0gUGFyc2VyVXRpbHMudG9TdHJpbmcocmVzb3VyY2VEZXBlbmRlbmN5LmRhdGEpO1xuXHRcdFx0dGhpcy5wYXJzZU10bChzdHIpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBhc3NldDpJQXNzZXQ7XG5cblx0XHRcdGlmIChyZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzLmxlbmd0aCAhPSAxKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YXNzZXQgPSByZXNvdXJjZURlcGVuZGVuY3kuYXNzZXRzWzBdO1xuXG5cdFx0XHRpZiAoYXNzZXQuYXNzZXRUeXBlID09IEFzc2V0VHlwZS5URVhUVVJFKSB7XG5cblx0XHRcdFx0dmFyIGxtOkxvYWRlZE1hdGVyaWFsID0gbmV3IExvYWRlZE1hdGVyaWFsKCk7XG5cdFx0XHRcdGxtLm1hdGVyaWFsSUQgPSByZXNvdXJjZURlcGVuZGVuY3kuaWQ7XG5cdFx0XHRcdGxtLnRleHR1cmUgPSA8VGV4dHVyZTJEQmFzZT4gYXNzZXQ7XG5cblx0XHRcdFx0dGhpcy5fbWF0ZXJpYWxMb2FkZWQucHVzaChsbSk7XG5cblx0XHRcdFx0aWYgKHRoaXMuX21lc2hlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBseU1hdGVyaWFsKGxtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3lGYWlsdXJlKHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpXG5cdHtcblx0XHRpZiAocmVzb3VyY2VEZXBlbmRlbmN5LmlkID09IFwibXRsXCIpIHtcblx0XHRcdHRoaXMuX210bExpYiA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fbXRsTGliTG9hZGVkID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBsbTpMb2FkZWRNYXRlcmlhbCA9IG5ldyBMb2FkZWRNYXRlcmlhbCgpO1xuXHRcdFx0bG0ubWF0ZXJpYWxJRCA9IHJlc291cmNlRGVwZW5kZW5jeS5pZDtcblx0XHRcdHRoaXMuX21hdGVyaWFsTG9hZGVkLnB1c2gobG0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9tZXNoZXMubGVuZ3RoID4gMClcblx0XHRcdHRoaXMuYXBwbHlNYXRlcmlhbChsbSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHB1YmxpYyBfcFByb2NlZWRQYXJzaW5nKCk6Ym9vbGVhblxuXHR7XG5cdFx0dmFyIGxpbmU6c3RyaW5nO1xuXHRcdHZhciBjcmV0dXJuOnN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTApO1xuXHRcdHZhciB0cnVuaztcblxuXHRcdGlmICghdGhpcy5fc3RhcnRlZFBhcnNpbmcpIHtcblx0XHRcdHRoaXMuX3RleHREYXRhID0gdGhpcy5fcEdldFRleHREYXRhKCk7XG5cdFx0XHQvLyBNZXJnZSBsaW5lYnJlYWtzIHRoYXQgYXJlIGltbWVkaWF0ZWx5IHByZWNlZWRlZCBieVxuXHRcdFx0Ly8gdGhlIFwiZXNjYXBlXCIgYmFja3dhcmQgc2xhc2ggaW50byBzaW5nbGUgbGluZXMuXG5cdFx0XHR0aGlzLl90ZXh0RGF0YSA9IHRoaXMuX3RleHREYXRhLnJlcGxhY2UoL1xcXFxbXFxyXFxuXStcXHMqL2dtLCAnICcpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl90ZXh0RGF0YS5pbmRleE9mKGNyZXR1cm4pID09IC0xKVxuXHRcdFx0Y3JldHVybiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTMpO1xuXG5cdFx0aWYgKCF0aGlzLl9zdGFydGVkUGFyc2luZykge1xuXHRcdFx0dGhpcy5fc3RhcnRlZFBhcnNpbmcgPSB0cnVlO1xuXHRcdFx0dGhpcy5fdmVydGljZXMgPSBuZXcgQXJyYXk8VmVydGV4PigpO1xuXHRcdFx0dGhpcy5fdmVydGV4Tm9ybWFscyA9IG5ldyBBcnJheTxWZXJ0ZXg+KCk7XG5cdFx0XHR0aGlzLl9tYXRlcmlhbElEcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cdFx0XHR0aGlzLl9tYXRlcmlhbExvYWRlZCA9IG5ldyBBcnJheTxMb2FkZWRNYXRlcmlhbD4oKTtcblx0XHRcdHRoaXMuX21lc2hlcyA9IG5ldyBBcnJheTxNZXNoPigpO1xuXHRcdFx0dGhpcy5fdXZzID0gbmV3IEFycmF5PFVWPigpO1xuXHRcdFx0dGhpcy5fc3RyaW5nTGVuZ3RoID0gdGhpcy5fdGV4dERhdGEubGVuZ3RoO1xuXHRcdFx0dGhpcy5fY2hhckluZGV4ID0gdGhpcy5fdGV4dERhdGEuaW5kZXhPZihjcmV0dXJuLCAwKTtcblx0XHRcdHRoaXMuX29sZEluZGV4ID0gMDtcblx0XHRcdHRoaXMuX29iamVjdHMgPSBuZXcgQXJyYXk8T2JqZWN0R3JvdXA+KCk7XG5cdFx0XHR0aGlzLl9vYmplY3RJbmRleCA9IDA7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKHRoaXMuX2NoYXJJbmRleCA8IHRoaXMuX3N0cmluZ0xlbmd0aCAmJiB0aGlzLl9wSGFzVGltZSgpKSB7XG5cdFx0XHR0aGlzLl9jaGFySW5kZXggPSB0aGlzLl90ZXh0RGF0YS5pbmRleE9mKGNyZXR1cm4sIHRoaXMuX29sZEluZGV4KTtcblxuXHRcdFx0aWYgKHRoaXMuX2NoYXJJbmRleCA9PSAtMSlcblx0XHRcdFx0dGhpcy5fY2hhckluZGV4ID0gdGhpcy5fc3RyaW5nTGVuZ3RoO1xuXG5cdFx0XHRsaW5lID0gdGhpcy5fdGV4dERhdGEuc3Vic3RyaW5nKHRoaXMuX29sZEluZGV4LCB0aGlzLl9jaGFySW5kZXgpO1xuXHRcdFx0bGluZSA9IGxpbmUuc3BsaXQoJ1xccicpLmpvaW4oXCJcIik7XG5cdFx0XHRsaW5lID0gbGluZS5yZXBsYWNlKFwiICBcIiwgXCIgXCIpO1xuXHRcdFx0dHJ1bmsgPSBsaW5lLnNwbGl0KFwiIFwiKTtcblx0XHRcdHRoaXMuX29sZEluZGV4ID0gdGhpcy5fY2hhckluZGV4ICsgMTtcblx0XHRcdHRoaXMucGFyc2VMaW5lKHRydW5rKTtcblxuXHRcdFx0Ly8gSWYgd2hhdGV2ZXIgd2FzIHBhcnNlZCBvbiB0aGlzIGxpbmUgcmVzdWx0ZWQgaW4gdGhlXG5cdFx0XHQvLyBwYXJzaW5nIGJlaW5nIHBhdXNlZCB0byByZXRyaWV2ZSBkZXBlbmRlbmNpZXMsIGJyZWFrXG5cdFx0XHQvLyBoZXJlIGFuZCBkbyBub3QgY29udGludWUgcGFyc2luZyB1bnRpbCB1bi1wYXVzZWQuXG5cdFx0XHRpZiAodGhpcy5wYXJzaW5nUGF1c2VkKSB7XG5cdFx0XHRcdHJldHVybiBQYXJzZXJCYXNlLk1PUkVfVE9fUEFSU0U7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAodGhpcy5fY2hhckluZGV4ID49IHRoaXMuX3N0cmluZ0xlbmd0aCkge1xuXG5cdFx0XHRpZiAodGhpcy5fbXRsTGliICYmICF0aGlzLl9tdGxMaWJMb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50cmFuc2xhdGUoKTtcblx0XHRcdHRoaXMuYXBwbHlNYXRlcmlhbHMoKTtcblxuXHRcdFx0cmV0dXJuIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xuXHRcdH1cblxuXHRcdHJldHVybiBQYXJzZXJCYXNlLk1PUkVfVE9fUEFSU0U7XG5cdH1cblxuXHRwdWJsaWMgX3BTdGFydFBhcnNpbmcoZnJhbWVMaW1pdDpudW1iZXIpXG5cdHtcblx0XHRzdXBlci5fcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0KTtcblxuXHRcdC8vY3JlYXRlIGEgY29udGVudCBvYmplY3QgZm9yIExvYWRlcnNcblx0XHR0aGlzLl9wQ29udGVudCA9IG5ldyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2VzIGEgc2luZ2xlIGxpbmUgaW4gdGhlIE9CSiBmaWxlLlxuXHQgKi9cblx0cHJpdmF0ZSBwYXJzZUxpbmUodHJ1bmspXG5cdHtcblx0XHRzd2l0Y2ggKHRydW5rWzBdKSB7XG5cblx0XHRcdGNhc2UgXCJtdGxsaWJcIjpcblxuXHRcdFx0XHR0aGlzLl9tdGxMaWIgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9tdGxMaWJMb2FkZWQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5sb2FkTXRsKHRydW5rWzFdKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcImdcIjpcblxuXHRcdFx0XHR0aGlzLmNyZWF0ZUdyb3VwKHRydW5rKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcIm9cIjpcblxuXHRcdFx0XHR0aGlzLmNyZWF0ZU9iamVjdCh0cnVuayk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgXCJ1c2VtdGxcIjpcblxuXHRcdFx0XHRpZiAodGhpcy5fbXRsTGliKSB7XG5cblx0XHRcdFx0XHRpZiAoIXRydW5rWzFdKVxuXHRcdFx0XHRcdFx0dHJ1bmtbMV0gPSBcImRlZjAwMFwiO1xuXG5cdFx0XHRcdFx0dGhpcy5fbWF0ZXJpYWxJRHMucHVzaCh0cnVua1sxXSk7XG5cdFx0XHRcdFx0dGhpcy5fYWN0aXZlTWF0ZXJpYWxJRCA9IHRydW5rWzFdO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2N1cnJlbnRHcm91cClcblx0XHRcdFx0XHRcdHRoaXMuX2N1cnJlbnRHcm91cC5tYXRlcmlhbElEID0gdGhpcy5fYWN0aXZlTWF0ZXJpYWxJRDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwidlwiOlxuXG5cdFx0XHRcdHRoaXMucGFyc2VWZXJ0ZXgodHJ1bmspO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwidnRcIjpcblxuXHRcdFx0XHR0aGlzLnBhcnNlVVYodHJ1bmspO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFwidm5cIjpcblxuXHRcdFx0XHR0aGlzLnBhcnNlVmVydGV4Tm9ybWFsKHRydW5rKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBcImZcIjpcblxuXHRcdFx0XHR0aGlzLnBhcnNlRmFjZSh0cnVuayk7XG5cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgdGhlIHBhcnNlZCBkYXRhIGludG8gYW4gQXdheTNEIHNjZW5lZ3JhcGggc3RydWN0dXJlXG5cdCAqL1xuXHRwcml2YXRlIHRyYW5zbGF0ZSgpXG5cdHtcblx0XHRmb3IgKHZhciBvYmpJbmRleDpudW1iZXIgPSAwOyBvYmpJbmRleCA8IHRoaXMuX29iamVjdHMubGVuZ3RoOyArK29iakluZGV4KSB7XG5cdFx0XHR2YXIgZ3JvdXBzOkFycmF5PEdyb3VwPiA9IHRoaXMuX29iamVjdHNbb2JqSW5kZXhdLmdyb3Vwcztcblx0XHRcdHZhciBudW1Hcm91cHM6bnVtYmVyID0gZ3JvdXBzLmxlbmd0aDtcblx0XHRcdHZhciBtYXRlcmlhbEdyb3VwczpBcnJheTxNYXRlcmlhbEdyb3VwPjtcblx0XHRcdHZhciBudW1NYXRlcmlhbEdyb3VwczpudW1iZXI7XG5cdFx0XHR2YXIgZ2VvbWV0cnk6R2VvbWV0cnk7XG5cdFx0XHR2YXIgbWVzaDpNZXNoO1xuXG5cdFx0XHR2YXIgbTpudW1iZXI7XG5cdFx0XHR2YXIgc206bnVtYmVyO1xuXHRcdFx0dmFyIGJtTWF0ZXJpYWw6TWV0aG9kTWF0ZXJpYWw7XG5cblx0XHRcdGZvciAodmFyIGc6bnVtYmVyID0gMDsgZyA8IG51bUdyb3VwczsgKytnKSB7XG5cdFx0XHRcdGdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KCk7XG5cdFx0XHRcdG1hdGVyaWFsR3JvdXBzID0gZ3JvdXBzW2ddLm1hdGVyaWFsR3JvdXBzO1xuXHRcdFx0XHRudW1NYXRlcmlhbEdyb3VwcyA9IG1hdGVyaWFsR3JvdXBzLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKG0gPSAwOyBtIDwgbnVtTWF0ZXJpYWxHcm91cHM7ICsrbSlcblx0XHRcdFx0XHR0aGlzLnRyYW5zbGF0ZU1hdGVyaWFsR3JvdXAobWF0ZXJpYWxHcm91cHNbbV0sIGdlb21ldHJ5KTtcblxuXHRcdFx0XHRpZiAoZ2VvbWV0cnkuc3ViR2VvbWV0cmllcy5sZW5ndGggPT0gMClcblx0XHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0XHQvLyBGaW5hbGl6ZSBhbmQgZm9yY2UgdHlwZS1iYXNlZCBuYW1lXG5cdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KDxJQXNzZXQ+IGdlb21ldHJ5KTsvLywgXCJcIik7XG5cblx0XHRcdFx0Ym1NYXRlcmlhbCA9IG5ldyBNZXRob2RNYXRlcmlhbChEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRUZXh0dXJlKCkpO1xuXG5cdFx0XHRcdC8vY2hlY2sgZm9yIG11bHRpcGFzc1xuXHRcdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPj0gMilcblx0XHRcdFx0XHRibU1hdGVyaWFsLm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTUztcblxuXHRcdFx0XHRtZXNoID0gbmV3IE1lc2goZ2VvbWV0cnksIGJtTWF0ZXJpYWwpO1xuXG5cdFx0XHRcdGlmICh0aGlzLl9vYmplY3RzW29iakluZGV4XS5uYW1lKSB7XG5cdFx0XHRcdFx0Ly8gdGhpcyBpcyBhIGZ1bGwgaW5kZXBlbmRlbnQgb2JqZWN0ICgnbycgdGFnIGluIE9CSiBmaWxlKVxuXHRcdFx0XHRcdG1lc2gubmFtZSA9IHRoaXMuX29iamVjdHNbb2JqSW5kZXhdLm5hbWU7XG5cblx0XHRcdFx0fSBlbHNlIGlmIChncm91cHNbZ10ubmFtZSkge1xuXG5cdFx0XHRcdFx0Ly8gdGhpcyBpcyBhIGdyb3VwIHNvIHRoZSBzdWIgZ3JvdXBzIGNvbnRhaW4gdGhlIGFjdHVhbCBtZXNoIG9iamVjdCBuYW1lcyAoJ2cnIHRhZyBpbiBPQkogZmlsZSlcblx0XHRcdFx0XHRtZXNoLm5hbWUgPSBncm91cHNbZ10ubmFtZTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIE5vIG5hbWUgc3RvcmVkLiBVc2UgZW1wdHkgc3RyaW5nIHdoaWNoIHdpbGwgZm9yY2UgaXRcblx0XHRcdFx0XHQvLyB0byBiZSBvdmVycmlkZGVuIGJ5IGZpbmFsaXplQXNzZXQoKSB0byB0eXBlIGRlZmF1bHQuXG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gXCJcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX21lc2hlcy5wdXNoKG1lc2gpO1xuXG5cdFx0XHRcdGlmIChncm91cHNbZ10ubWF0ZXJpYWxJRCAhPSBcIlwiKVxuXHRcdFx0XHRcdGJtTWF0ZXJpYWwubmFtZSA9IGdyb3Vwc1tnXS5tYXRlcmlhbElEICsgXCJ+XCIgKyBtZXNoLm5hbWU7IGVsc2Vcblx0XHRcdFx0XHRibU1hdGVyaWFsLm5hbWUgPSB0aGlzLl9sYXN0TXRsSUQgKyBcIn5cIiArIG1lc2gubmFtZTtcblxuXHRcdFx0XHRpZiAobWVzaC5zdWJNZXNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGZvciAoc20gPSAxOyBzbSA8IG1lc2guc3ViTWVzaGVzLmxlbmd0aDsgKytzbSlcblx0XHRcdFx0XHRcdG1lc2guc3ViTWVzaGVzW3NtXS5tYXRlcmlhbCA9IGJtTWF0ZXJpYWw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxuXHRcdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChtZXNoKTtcblxuXHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCg8SUFzc2V0PiBtZXNoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVHJhbnNsYXRlcyBhbiBvYmoncyBtYXRlcmlhbCBncm91cCB0byBhIHN1Ymdlb21ldHJ5LlxuXHQgKiBAcGFyYW0gbWF0ZXJpYWxHcm91cCBUaGUgbWF0ZXJpYWwgZ3JvdXAgZGF0YSB0byBjb252ZXJ0LlxuXHQgKiBAcGFyYW0gZ2VvbWV0cnkgVGhlIEdlb21ldHJ5IHRvIGNvbnRhaW4gdGhlIGNvbnZlcnRlZCBTdWJHZW9tZXRyeS5cblx0ICovXG5cdHByaXZhdGUgdHJhbnNsYXRlTWF0ZXJpYWxHcm91cChtYXRlcmlhbEdyb3VwOk1hdGVyaWFsR3JvdXAsIGdlb21ldHJ5Okdlb21ldHJ5KVxuXHR7XG5cdFx0dmFyIGZhY2VzOkFycmF5PEZhY2VEYXRhPiA9IG1hdGVyaWFsR3JvdXAuZmFjZXM7XG5cdFx0dmFyIGZhY2U6RmFjZURhdGE7XG5cdFx0dmFyIG51bUZhY2VzOm51bWJlciA9IGZhY2VzLmxlbmd0aDtcblx0XHR2YXIgbnVtVmVydHM6bnVtYmVyO1xuXHRcdHZhciBzdWI6VHJpYW5nbGVTdWJHZW9tZXRyeTtcblxuXHRcdHZhciB2ZXJ0aWNlczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblx0XHR2YXIgdXZzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXHRcdHZhciBub3JtYWxzOkFycmF5PG51bWJlcj4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXHRcdHZhciBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki8gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXG5cdFx0dGhpcy5fcmVhbEluZGljZXMgPSBbXTtcblx0XHR0aGlzLl92ZXJ0ZXhJbmRleCA9IDA7XG5cblx0XHR2YXIgajpudW1iZXI7XG5cdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgbnVtRmFjZXM7ICsraSkge1xuXG5cdFx0XHRmYWNlID0gZmFjZXNbaV07XG5cdFx0XHRudW1WZXJ0cyA9IGZhY2UuaW5kZXhJZHMubGVuZ3RoIC0gMTtcblxuXHRcdFx0Zm9yIChqID0gMTsgaiA8IG51bVZlcnRzOyArK2opIHtcblxuXHRcdFx0XHR0aGlzLnRyYW5zbGF0ZVZlcnRleERhdGEoZmFjZSwgaiwgdmVydGljZXMsIHV2cywgaW5kaWNlcywgbm9ybWFscyk7XG5cdFx0XHRcdHRoaXMudHJhbnNsYXRlVmVydGV4RGF0YShmYWNlLCAwLCB2ZXJ0aWNlcywgdXZzLCBpbmRpY2VzLCBub3JtYWxzKTtcblx0XHRcdFx0dGhpcy50cmFuc2xhdGVWZXJ0ZXhEYXRhKGZhY2UsIGogKyAxLCB2ZXJ0aWNlcywgdXZzLCBpbmRpY2VzLCBub3JtYWxzKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZlcnRpY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdHN1YiA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xuXHRcdFx0c3ViLmF1dG9EZXJpdmVOb3JtYWxzID0gbm9ybWFscy5sZW5ndGg/IGZhbHNlIDogdHJ1ZTtcblx0XHRcdHN1Yi51cGRhdGVJbmRpY2VzKGluZGljZXMpO1xuXHRcdFx0c3ViLnVwZGF0ZVBvc2l0aW9ucyh2ZXJ0aWNlcyk7XG5cdFx0XHRzdWIudXBkYXRlVmVydGV4Tm9ybWFscyhub3JtYWxzKTtcblx0XHRcdHN1Yi51cGRhdGVVVnModXZzKTtcblxuXHRcdFx0Z2VvbWV0cnkuYWRkU3ViR2VvbWV0cnkoc3ViKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRyYW5zbGF0ZVZlcnRleERhdGEoZmFjZTpGYWNlRGF0YSwgdmVydGV4SW5kZXg6bnVtYmVyLCB2ZXJ0aWNlczpBcnJheTxudW1iZXI+LCB1dnM6QXJyYXk8bnVtYmVyPiwgaW5kaWNlczpBcnJheTxudW1iZXI+IC8qdWludCovLCBub3JtYWxzOkFycmF5PG51bWJlcj4pXG5cdHtcblx0XHR2YXIgaW5kZXg6bnVtYmVyO1xuXHRcdHZhciB2ZXJ0ZXg6VmVydGV4O1xuXHRcdHZhciB2ZXJ0ZXhOb3JtYWw6VmVydGV4O1xuXHRcdHZhciB1djpVVjtcblxuXHRcdGlmICghdGhpcy5fcmVhbEluZGljZXNbZmFjZS5pbmRleElkc1t2ZXJ0ZXhJbmRleF1dKSB7XG5cblx0XHRcdGluZGV4ID0gdGhpcy5fdmVydGV4SW5kZXg7XG5cdFx0XHR0aGlzLl9yZWFsSW5kaWNlc1tmYWNlLmluZGV4SWRzW3ZlcnRleEluZGV4XV0gPSArK3RoaXMuX3ZlcnRleEluZGV4O1xuXHRcdFx0dmVydGV4ID0gdGhpcy5fdmVydGljZXNbZmFjZS52ZXJ0ZXhJbmRpY2VzW3ZlcnRleEluZGV4XSAtIDFdO1xuXHRcdFx0dmVydGljZXMucHVzaCh2ZXJ0ZXgueCp0aGlzLl9zY2FsZSwgdmVydGV4LnkqdGhpcy5fc2NhbGUsIHZlcnRleC56KnRoaXMuX3NjYWxlKTtcblxuXHRcdFx0aWYgKGZhY2Uubm9ybWFsSW5kaWNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZlcnRleE5vcm1hbCA9IHRoaXMuX3ZlcnRleE5vcm1hbHNbZmFjZS5ub3JtYWxJbmRpY2VzW3ZlcnRleEluZGV4XSAtIDFdO1xuXHRcdFx0XHRub3JtYWxzLnB1c2godmVydGV4Tm9ybWFsLngsIHZlcnRleE5vcm1hbC55LCB2ZXJ0ZXhOb3JtYWwueik7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmYWNlLnV2SW5kaWNlcy5sZW5ndGggPiAwKSB7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR1diA9IHRoaXMuX3V2c1tmYWNlLnV2SW5kaWNlc1t2ZXJ0ZXhJbmRleF0gLSAxXTtcblx0XHRcdFx0XHR1dnMucHVzaCh1di51LCB1di52KTtcblxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cblx0XHRcdFx0XHRzd2l0Y2ggKHZlcnRleEluZGV4KSB7XG5cdFx0XHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0XHRcdHV2cy5wdXNoKDAsIDEpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdFx0dXZzLnB1c2goLjUsIDApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0dXZzLnB1c2goMSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbmRleCA9IHRoaXMuX3JlYWxJbmRpY2VzW2ZhY2UuaW5kZXhJZHNbdmVydGV4SW5kZXhdXSAtIDE7XG5cdFx0fVxuXG5cdFx0aW5kaWNlcy5wdXNoKGluZGV4KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCBncm91cC5cblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIG9iamVjdCB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXG5cdCAqL1xuXHRwcml2YXRlIGNyZWF0ZU9iamVjdCh0cnVuaylcblx0e1xuXHRcdHRoaXMuX2N1cnJlbnRHcm91cCA9IG51bGw7XG5cdFx0dGhpcy5fY3VycmVudE1hdGVyaWFsR3JvdXAgPSBudWxsO1xuXHRcdHRoaXMuX29iamVjdHMucHVzaCh0aGlzLl9jdXJyZW50T2JqZWN0ID0gbmV3IE9iamVjdEdyb3VwKCkpO1xuXG5cdFx0aWYgKHRydW5rKVxuXHRcdFx0dGhpcy5fY3VycmVudE9iamVjdC5uYW1lID0gdHJ1bmtbMV07XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBncm91cC5cblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIGdyb3VwIHRhZyBhbmQgaXRzIHBhcmFtZXRlcnNcblx0ICovXG5cdHByaXZhdGUgY3JlYXRlR3JvdXAodHJ1bmspXG5cdHtcblx0XHRpZiAoIXRoaXMuX2N1cnJlbnRPYmplY3QpXG5cdFx0XHR0aGlzLmNyZWF0ZU9iamVjdChudWxsKTtcblx0XHR0aGlzLl9jdXJyZW50R3JvdXAgPSBuZXcgR3JvdXAoKTtcblxuXHRcdHRoaXMuX2N1cnJlbnRHcm91cC5tYXRlcmlhbElEID0gdGhpcy5fYWN0aXZlTWF0ZXJpYWxJRDtcblxuXHRcdGlmICh0cnVuaylcblx0XHRcdHRoaXMuX2N1cnJlbnRHcm91cC5uYW1lID0gdHJ1bmtbMV07XG5cdFx0dGhpcy5fY3VycmVudE9iamVjdC5ncm91cHMucHVzaCh0aGlzLl9jdXJyZW50R3JvdXApO1xuXG5cdFx0dGhpcy5jcmVhdGVNYXRlcmlhbEdyb3VwKG51bGwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgbWF0ZXJpYWwgZ3JvdXAuXG5cdCAqIEBwYXJhbSB0cnVuayBUaGUgZGF0YSBibG9jayBjb250YWluaW5nIHRoZSBtYXRlcmlhbCB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXG5cdCAqL1xuXHRwcml2YXRlIGNyZWF0ZU1hdGVyaWFsR3JvdXAodHJ1bmspXG5cdHtcblx0XHR0aGlzLl9jdXJyZW50TWF0ZXJpYWxHcm91cCA9IG5ldyBNYXRlcmlhbEdyb3VwKCk7XG5cdFx0aWYgKHRydW5rKVxuXHRcdFx0dGhpcy5fY3VycmVudE1hdGVyaWFsR3JvdXAudXJsID0gdHJ1bmtbMV07XG5cdFx0dGhpcy5fY3VycmVudEdyb3VwLm1hdGVyaWFsR3JvdXBzLnB1c2godGhpcy5fY3VycmVudE1hdGVyaWFsR3JvdXApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlYWRzIHRoZSBuZXh0IHZlcnRleCBjb29yZGluYXRlcy5cblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIHZlcnRleCB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlVmVydGV4KHRydW5rKVxuXHR7XG5cdFx0Ly9mb3IgdGhlIHZlcnkgcmFyZSBjYXNlcyBvZiBvdGhlciBkZWxpbWl0ZXJzL2NoYXJjb2RlcyBzZWVuIGluIHNvbWUgb2JqIGZpbGVzXG5cblx0XHR2YXIgdjE6bnVtYmVyLCB2MjpudW1iZXIgLCB2MzpudW1iZXI7XG5cdFx0aWYgKHRydW5rLmxlbmd0aCA+IDQpIHtcblx0XHRcdHZhciBuVHJ1bmsgPSBbXTtcblx0XHRcdHZhciB2YWw6bnVtYmVyO1xuXG5cdFx0XHRmb3IgKHZhciBpOm51bWJlciA9IDE7IGkgPCB0cnVuay5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHRydW5rW2ldKTtcblx0XHRcdFx0aWYgKCFpc05hTih2YWwpKVxuXHRcdFx0XHRcdG5UcnVuay5wdXNoKHZhbCk7XG5cdFx0XHR9XG5cblx0XHRcdHYxID0gPG51bWJlcj4gblRydW5rWzBdO1xuXHRcdFx0djIgPSA8bnVtYmVyPiBuVHJ1bmtbMV07XG5cdFx0XHR2MyA9IDxudW1iZXI+IC1uVHJ1bmtbMl07XG5cdFx0XHR0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgodjEsIHYyLCB2MykpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHYxID0gPG51bWJlcj4gcGFyc2VGbG9hdCh0cnVua1sxXSk7XG5cdFx0XHR2MiA9IDxudW1iZXI+IHBhcnNlRmxvYXQodHJ1bmtbMl0pO1xuXHRcdFx0djMgPSA8bnVtYmVyPiAtcGFyc2VGbG9hdCh0cnVua1szXSk7XG5cblx0XHRcdHRoaXMuX3ZlcnRpY2VzLnB1c2gobmV3IFZlcnRleCh2MSwgdjIsIHYzKSk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogUmVhZHMgdGhlIG5leHQgdXYgY29vcmRpbmF0ZXMuXG5cdCAqIEBwYXJhbSB0cnVuayBUaGUgZGF0YSBibG9jayBjb250YWluaW5nIHRoZSB1diB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlVVYodHJ1bmspXG5cdHtcblx0XHRpZiAodHJ1bmsubGVuZ3RoID4gMykge1xuXHRcdFx0dmFyIG5UcnVuayA9IFtdO1xuXHRcdFx0dmFyIHZhbDpudW1iZXI7XG5cdFx0XHRmb3IgKHZhciBpOm51bWJlciA9IDE7IGkgPCB0cnVuay5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHRydW5rW2ldKTtcblx0XHRcdFx0aWYgKCFpc05hTih2YWwpKVxuXHRcdFx0XHRcdG5UcnVuay5wdXNoKHZhbCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl91dnMucHVzaChuZXcgVVYoblRydW5rWzBdLCAxIC0gblRydW5rWzFdKSk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fdXZzLnB1c2gobmV3IFVWKHBhcnNlRmxvYXQodHJ1bmtbMV0pLCAxIC0gcGFyc2VGbG9hdCh0cnVua1syXSkpKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWFkcyB0aGUgbmV4dCB2ZXJ0ZXggbm9ybWFsIGNvb3JkaW5hdGVzLlxuXHQgKiBAcGFyYW0gdHJ1bmsgVGhlIGRhdGEgYmxvY2sgY29udGFpbmluZyB0aGUgdmVydGV4IG5vcm1hbCB0YWcgYW5kIGl0cyBwYXJhbWV0ZXJzXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlVmVydGV4Tm9ybWFsKHRydW5rKVxuXHR7XG5cdFx0aWYgKHRydW5rLmxlbmd0aCA+IDQpIHtcblx0XHRcdHZhciBuVHJ1bmsgPSBbXTtcblx0XHRcdHZhciB2YWw6bnVtYmVyO1xuXHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAxOyBpIDwgdHJ1bmsubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dmFsID0gcGFyc2VGbG9hdCh0cnVua1tpXSk7XG5cdFx0XHRcdGlmICghaXNOYU4odmFsKSlcblx0XHRcdFx0XHRuVHJ1bmsucHVzaCh2YWwpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fdmVydGV4Tm9ybWFscy5wdXNoKG5ldyBWZXJ0ZXgoblRydW5rWzBdLCBuVHJ1bmtbMV0sIC1uVHJ1bmtbMl0pKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl92ZXJ0ZXhOb3JtYWxzLnB1c2gobmV3IFZlcnRleChwYXJzZUZsb2F0KHRydW5rWzFdKSwgcGFyc2VGbG9hdCh0cnVua1syXSksIC1wYXJzZUZsb2F0KHRydW5rWzNdKSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWFkcyB0aGUgbmV4dCBmYWNlJ3MgaW5kaWNlcy5cblx0ICogQHBhcmFtIHRydW5rIFRoZSBkYXRhIGJsb2NrIGNvbnRhaW5pbmcgdGhlIGZhY2UgdGFnIGFuZCBpdHMgcGFyYW1ldGVyc1xuXHQgKi9cblx0cHJpdmF0ZSBwYXJzZUZhY2UodHJ1bmspXG5cdHtcblx0XHR2YXIgbGVuOm51bWJlciA9IHRydW5rLmxlbmd0aDtcblx0XHR2YXIgZmFjZTpGYWNlRGF0YSA9IG5ldyBGYWNlRGF0YSgpO1xuXG5cdFx0aWYgKCF0aGlzLl9jdXJyZW50R3JvdXApIHtcblx0XHRcdHRoaXMuY3JlYXRlR3JvdXAobnVsbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGluZGljZXM7XG5cdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAxOyBpIDwgbGVuOyArK2kpIHtcblxuXHRcdFx0aWYgKHRydW5rW2ldID09IFwiXCIpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGluZGljZXMgPSB0cnVua1tpXS5zcGxpdChcIi9cIik7XG5cdFx0XHRmYWNlLnZlcnRleEluZGljZXMucHVzaCh0aGlzLnBhcnNlSW5kZXgocGFyc2VJbnQoaW5kaWNlc1swXSksIHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCkpO1xuXG5cdFx0XHRpZiAoaW5kaWNlc1sxXSAmJiBTdHJpbmcoaW5kaWNlc1sxXSkubGVuZ3RoID4gMClcblx0XHRcdFx0ZmFjZS51dkluZGljZXMucHVzaCh0aGlzLnBhcnNlSW5kZXgocGFyc2VJbnQoaW5kaWNlc1sxXSksIHRoaXMuX3V2cy5sZW5ndGgpKTtcblxuXHRcdFx0aWYgKGluZGljZXNbMl0gJiYgU3RyaW5nKGluZGljZXNbMl0pLmxlbmd0aCA+IDApXG5cdFx0XHRcdGZhY2Uubm9ybWFsSW5kaWNlcy5wdXNoKHRoaXMucGFyc2VJbmRleChwYXJzZUludChpbmRpY2VzWzJdKSwgdGhpcy5fdmVydGV4Tm9ybWFscy5sZW5ndGgpKTtcblxuXHRcdFx0ZmFjZS5pbmRleElkcy5wdXNoKHRydW5rW2ldKTtcblx0XHR9XG5cblx0XHR0aGlzLl9jdXJyZW50TWF0ZXJpYWxHcm91cC5mYWNlcy5wdXNoKGZhY2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgaXMgYSBoYWNrIGFyb3VuZCBuZWdhdGl2ZSBmYWNlIGNvb3Jkc1xuXHQgKi9cblx0cHJpdmF0ZSBwYXJzZUluZGV4KGluZGV4Om51bWJlciwgbGVuZ3RoOm51bWJlcik6bnVtYmVyXG5cdHtcblx0XHRpZiAoaW5kZXggPCAwKVxuXHRcdFx0cmV0dXJuIGluZGV4ICsgbGVuZ3RoICsgMTsgZWxzZVxuXHRcdFx0cmV0dXJuIGluZGV4O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZU10bChkYXRhOnN0cmluZylcblx0e1xuXHRcdHZhciBtYXRlcmlhbERlZmluaXRpb25zID0gZGF0YS5zcGxpdCgnbmV3bXRsJyk7XG5cdFx0dmFyIGxpbmVzO1xuXHRcdHZhciB0cnVuaztcblx0XHR2YXIgajpudW1iZXI7XG5cblx0XHR2YXIgYmFzaWNTcGVjdWxhck1ldGhvZDpTcGVjdWxhckJhc2ljTWV0aG9kO1xuXHRcdHZhciB1c2VTcGVjdWxhcjpib29sZWFuO1xuXHRcdHZhciB1c2VDb2xvcjpib29sZWFuO1xuXHRcdHZhciBkaWZmdXNlQ29sb3I6bnVtYmVyO1xuXHRcdHZhciBjb2xvcjpudW1iZXI7XG5cdFx0dmFyIHNwZWN1bGFyQ29sb3I6bnVtYmVyO1xuXHRcdHZhciBzcGVjdWxhcjpudW1iZXI7XG5cdFx0dmFyIGFscGhhOm51bWJlcjtcblx0XHR2YXIgbWFwa2Q6c3RyaW5nO1xuXG5cdFx0Zm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgbWF0ZXJpYWxEZWZpbml0aW9ucy5sZW5ndGg7ICsraSkge1xuXG5cblx0XHRcdGxpbmVzID0gKG1hdGVyaWFsRGVmaW5pdGlvbnNbaV0uc3BsaXQoJ1xccicpKS5qb2luKFwiXCIpLnNwbGl0KCdcXG4nKTtcblx0XHRcdC8vbGluZXMgPSAobWF0ZXJpYWxEZWZpbml0aW9uc1tpXS5zcGxpdCgnXFxyJykgYXMgQXJyYXkpLmpvaW4oXCJcIikuc3BsaXQoJ1xcbicpO1xuXG5cdFx0XHRpZiAobGluZXMubGVuZ3RoID09IDEpXG5cdFx0XHRcdGxpbmVzID0gbWF0ZXJpYWxEZWZpbml0aW9uc1tpXS5zcGxpdChTdHJpbmcuZnJvbUNoYXJDb2RlKDEzKSk7XG5cblx0XHRcdGRpZmZ1c2VDb2xvciA9IGNvbG9yID0gc3BlY3VsYXJDb2xvciA9IDB4RkZGRkZGO1xuXHRcdFx0c3BlY3VsYXIgPSAwO1xuXHRcdFx0dXNlU3BlY3VsYXIgPSBmYWxzZTtcblx0XHRcdHVzZUNvbG9yID0gZmFsc2U7XG5cdFx0XHRhbHBoYSA9IDE7XG5cdFx0XHRtYXBrZCA9IFwiXCI7XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7ICsraikge1xuXG5cdFx0XHRcdGxpbmVzW2pdID0gbGluZXNbal0ucmVwbGFjZSgvXFxzKyQvLCBcIlwiKTtcblxuXHRcdFx0XHRpZiAobGluZXNbal0uc3Vic3RyaW5nKDAsIDEpICE9IFwiI1wiICYmIChqID09IDAgfHwgbGluZXNbal0gIT0gXCJcIikpIHtcblx0XHRcdFx0XHR0cnVuayA9IGxpbmVzW2pdLnNwbGl0KFwiIFwiKTtcblxuXHRcdFx0XHRcdGlmIChTdHJpbmcodHJ1bmtbMF0pLmNoYXJDb2RlQXQoMCkgPT0gOSB8fCBTdHJpbmcodHJ1bmtbMF0pLmNoYXJDb2RlQXQoMCkgPT0gMzIpXG5cdFx0XHRcdFx0XHR0cnVua1swXSA9IHRydW5rWzBdLnN1YnN0cmluZygxLCB0cnVua1swXS5sZW5ndGgpO1xuXG5cdFx0XHRcdFx0aWYgKGogPT0gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fbGFzdE10bElEID0gdHJ1bmsuam9pbihcIlwiKTtcblx0XHRcdFx0XHRcdHRoaXMuX2xhc3RNdGxJRCA9ICh0aGlzLl9sYXN0TXRsSUQgPT0gXCJcIik/IFwiZGVmMDAwXCIgOiB0aGlzLl9sYXN0TXRsSUQ7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRydW5rWzBdKSB7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcIkthXCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRydW5rWzFdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMV0pKSAmJiB0cnVua1syXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzJdKSkgJiYgdHJ1bmtbM10gJiYgIWlzTmFOKE51bWJlcih0cnVua1szXSkpKVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3IgPSB0cnVua1sxXSoyNTUgPDwgMTYgfCB0cnVua1syXSoyNTUgPDwgOCB8IHRydW5rWzNdKjI1NTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwiS3NcIjpcblx0XHRcdFx0XHRcdFx0XHRpZiAodHJ1bmtbMV0gJiYgIWlzTmFOKE51bWJlcih0cnVua1sxXSkpICYmIHRydW5rWzJdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMl0pKSAmJiB0cnVua1szXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzNdKSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWN1bGFyQ29sb3IgPSB0cnVua1sxXSoyNTUgPDwgMTYgfCB0cnVua1syXSoyNTUgPDwgOCB8IHRydW5rWzNdKjI1NTtcblx0XHRcdFx0XHRcdFx0XHRcdHVzZVNwZWN1bGFyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcIk5zXCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRydW5rWzFdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMV0pKSlcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWN1bGFyID0gTnVtYmVyKHRydW5rWzFdKSowLjAwMTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoc3BlY3VsYXIgPT0gMClcblx0XHRcdFx0XHRcdFx0XHRcdHVzZVNwZWN1bGFyID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcIktkXCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRydW5rWzFdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMV0pKSAmJiB0cnVua1syXSAmJiAhaXNOYU4oTnVtYmVyKHRydW5rWzJdKSkgJiYgdHJ1bmtbM10gJiYgIWlzTmFOKE51bWJlcih0cnVua1szXSkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaWZmdXNlQ29sb3IgPSB0cnVua1sxXSoyNTUgPDwgMTYgfCB0cnVua1syXSoyNTUgPDwgOCB8IHRydW5rWzNdKjI1NTtcblx0XHRcdFx0XHRcdFx0XHRcdHVzZUNvbG9yID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInRyXCI6XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJkXCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRydW5rWzFdICYmICFpc05hTihOdW1iZXIodHJ1bmtbMV0pKSlcblx0XHRcdFx0XHRcdFx0XHRcdGFscGhhID0gTnVtYmVyKHRydW5rWzFdKTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwibWFwX0tkXCI6XG5cdFx0XHRcdFx0XHRcdFx0bWFwa2QgPSB0aGlzLnBhcnNlTWFwS2RTdHJpbmcodHJ1bmspO1xuXHRcdFx0XHRcdFx0XHRcdG1hcGtkID0gbWFwa2QucmVwbGFjZSgvXFxcXC9nLCBcIi9cIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXBrZCAhPSBcIlwiKSB7XG5cblx0XHRcdFx0aWYgKHVzZVNwZWN1bGFyKSB7XG5cblx0XHRcdFx0XHRiYXNpY1NwZWN1bGFyTWV0aG9kID0gbmV3IFNwZWN1bGFyQmFzaWNNZXRob2QoKTtcblx0XHRcdFx0XHRiYXNpY1NwZWN1bGFyTWV0aG9kLnNwZWN1bGFyQ29sb3IgPSBzcGVjdWxhckNvbG9yO1xuXHRcdFx0XHRcdGJhc2ljU3BlY3VsYXJNZXRob2Quc3BlY3VsYXIgPSBzcGVjdWxhcjtcblxuXHRcdFx0XHRcdHZhciBzcGVjdWxhckRhdGE6U3BlY3VsYXJEYXRhID0gbmV3IFNwZWN1bGFyRGF0YSgpO1xuXHRcdFx0XHRcdHNwZWN1bGFyRGF0YS5hbHBoYSA9IGFscGhhO1xuXHRcdFx0XHRcdHNwZWN1bGFyRGF0YS5iYXNpY1NwZWN1bGFyTWV0aG9kID0gYmFzaWNTcGVjdWxhck1ldGhvZDtcblx0XHRcdFx0XHRzcGVjdWxhckRhdGEubWF0ZXJpYWxJRCA9IHRoaXMuX2xhc3RNdGxJRDtcblxuXHRcdFx0XHRcdGlmICghdGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGEpXG5cdFx0XHRcdFx0XHR0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YSA9IG5ldyBBcnJheTxTcGVjdWxhckRhdGE+KCk7XG5cblx0XHRcdFx0XHR0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YS5wdXNoKHNwZWN1bGFyRGF0YSk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX3BBZGREZXBlbmRlbmN5KHRoaXMuX2xhc3RNdGxJRCwgbmV3IFVSTFJlcXVlc3QobWFwa2QpKTtcblxuXHRcdFx0fSBlbHNlIGlmICh1c2VDb2xvciAmJiAhaXNOYU4oY29sb3IpKSB7XG5cblx0XHRcdFx0dmFyIGxtOkxvYWRlZE1hdGVyaWFsID0gbmV3IExvYWRlZE1hdGVyaWFsKCk7XG5cdFx0XHRcdGxtLm1hdGVyaWFsSUQgPSB0aGlzLl9sYXN0TXRsSUQ7XG5cblx0XHRcdFx0aWYgKGFscGhhID09IDApXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJXYXJuaW5nOiBhbiBhbHBoYSB2YWx1ZSBvZiAwIHdhcyBmb3VuZCBpbiBtdGwgY29sb3IgdGFnIChUciBvciBkKSByZWY6XCIgKyB0aGlzLl9sYXN0TXRsSUQgKyBcIiwgbWVzaChlcykgdXNpbmcgaXQgd2lsbCBiZSBpbnZpc2libGUhXCIpO1xuXG5cdFx0XHRcdHZhciBjbTpNZXRob2RNYXRlcmlhbDtcblxuXHRcdFx0XHRpZiAodGhpcy5tYXRlcmlhbE1vZGUgPCAyKSB7XG5cdFx0XHRcdFx0Y20gPSBuZXcgTWV0aG9kTWF0ZXJpYWwoY29sb3IpO1xuXG5cdFx0XHRcdFx0dmFyIGNvbG9yTWF0Ok1ldGhvZE1hdGVyaWFsID0gPE1ldGhvZE1hdGVyaWFsPiBjbTtcblxuXHRcdFx0XHRcdGNvbG9yTWF0LmFscGhhID0gYWxwaGE7XG5cdFx0XHRcdFx0Y29sb3JNYXQuZGlmZnVzZUNvbG9yID0gZGlmZnVzZUNvbG9yO1xuXHRcdFx0XHRcdGNvbG9yTWF0LnJlcGVhdCA9IHRydWU7XG5cblx0XHRcdFx0XHRpZiAodXNlU3BlY3VsYXIpIHtcblx0XHRcdFx0XHRcdGNvbG9yTWF0LnNwZWN1bGFyQ29sb3IgPSBzcGVjdWxhckNvbG9yO1xuXHRcdFx0XHRcdFx0Y29sb3JNYXQuc3BlY3VsYXIgPSBzcGVjdWxhcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbSA9IG5ldyBNZXRob2RNYXRlcmlhbChjb2xvcik7XG5cdFx0XHRcdFx0Y20ubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTO1xuXG5cdFx0XHRcdFx0dmFyIGNvbG9yTXVsdGlNYXQ6TWV0aG9kTWF0ZXJpYWwgPSA8TWV0aG9kTWF0ZXJpYWw+IGNtO1xuXG5cblx0XHRcdFx0XHRjb2xvck11bHRpTWF0LmRpZmZ1c2VDb2xvciA9IGRpZmZ1c2VDb2xvcjtcblx0XHRcdFx0XHRjb2xvck11bHRpTWF0LnJlcGVhdCA9IHRydWU7XG5cblx0XHRcdFx0XHRpZiAodXNlU3BlY3VsYXIpIHtcblx0XHRcdFx0XHRcdGNvbG9yTXVsdGlNYXQuc3BlY3VsYXJDb2xvciA9IHNwZWN1bGFyQ29sb3I7XG5cdFx0XHRcdFx0XHRjb2xvck11bHRpTWF0LnNwZWN1bGFyID0gc3BlY3VsYXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bG0uY20gPSBjbTtcblxuXHRcdFx0XHR0aGlzLl9tYXRlcmlhbExvYWRlZC5wdXNoKGxtKTtcblxuXHRcdFx0XHRpZiAodGhpcy5fbWVzaGVzLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0dGhpcy5hcHBseU1hdGVyaWFsKGxtKTtcblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX210bExpYkxvYWRlZCA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlTWFwS2RTdHJpbmcodHJ1bmspOnN0cmluZ1xuXHR7XG5cdFx0dmFyIHVybDpzdHJpbmcgPSBcIlwiO1xuXHRcdHZhciBpOm51bWJlcjtcblx0XHR2YXIgYnJlYWtmbGFnOmJvb2xlYW47XG5cblx0XHRmb3IgKGkgPSAxOyBpIDwgdHJ1bmsubGVuZ3RoOykge1xuXHRcdFx0c3dpdGNoICh0cnVua1tpXSkge1xuXHRcdFx0XHRjYXNlIFwiLWJsZW5kdVwiOlxuXHRcdFx0XHRjYXNlIFwiLWJsZW5kdlwiOlxuXHRcdFx0XHRjYXNlIFwiLWNjXCI6XG5cdFx0XHRcdGNhc2UgXCItY2xhbXBcIjpcblx0XHRcdFx0Y2FzZSBcIi10ZXhyZXNcIjpcblx0XHRcdFx0XHRpICs9IDI7IC8vU2tpcCBhaGVhZCAxIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiLW1tXCI6XG5cdFx0XHRcdFx0aSArPSAzOyAvL1NraXAgYWhlYWQgMiBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCItb1wiOlxuXHRcdFx0XHRjYXNlIFwiLXNcIjpcblx0XHRcdFx0Y2FzZSBcIi10XCI6XG5cdFx0XHRcdFx0aSArPSA0OyAvL1NraXAgYWhlYWQgMyBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWtmbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKGJyZWFrZmxhZylcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Ly9SZWNvbnN0cnVjdCBVUkwvZmlsZW5hbWVcblx0XHRmb3IgKGk7IGkgPCB0cnVuay5sZW5ndGg7IGkrKykge1xuXHRcdFx0dXJsICs9IHRydW5rW2ldO1xuXHRcdFx0dXJsICs9IFwiIFwiO1xuXHRcdH1cblxuXHRcdC8vUmVtb3ZlIHRoZSBleHRyYW5lb3VzIHNwYWNlIGFuZC9vciBuZXdsaW5lIGZyb20gdGhlIHJpZ2h0IHNpZGVcblx0XHR1cmwgPSB1cmwucmVwbGFjZSgvXFxzKyQvLCBcIlwiKTtcblxuXHRcdHJldHVybiB1cmw7XG5cdH1cblxuXHRwcml2YXRlIGxvYWRNdGwobXRsdXJsOnN0cmluZylcblx0e1xuXHRcdC8vIEFkZCByYXctZGF0YSBkZXBlbmRlbmN5IHRvIHF1ZXVlIGFuZCBsb2FkIGRlcGVuZGVuY2llcyBub3csXG5cdFx0Ly8gd2hpY2ggd2lsbCBwYXVzZSB0aGUgcGFyc2luZyBpbiB0aGUgbWVhbnRpbWUuXG5cdFx0dGhpcy5fcEFkZERlcGVuZGVuY3koJ210bCcsIG5ldyBVUkxSZXF1ZXN0KG10bHVybCksIHRydWUpO1xuXHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7Ly9cblx0fVxuXG5cdHByaXZhdGUgYXBwbHlNYXRlcmlhbChsbTpMb2FkZWRNYXRlcmlhbClcblx0e1xuXHRcdHZhciBkZWNvbXBvc2VJRDtcblx0XHR2YXIgbWVzaDpNZXNoO1xuXHRcdHZhciB0bTpNZXRob2RNYXRlcmlhbDtcblx0XHR2YXIgajpudW1iZXI7XG5cdFx0dmFyIHNwZWN1bGFyRGF0YTpTcGVjdWxhckRhdGE7XG5cblx0XHRmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCB0aGlzLl9tZXNoZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdG1lc2ggPSB0aGlzLl9tZXNoZXNbaV07XG5cdFx0XHRkZWNvbXBvc2VJRCA9IG1lc2gubWF0ZXJpYWwubmFtZS5zcGxpdChcIn5cIik7XG5cblx0XHRcdGlmIChkZWNvbXBvc2VJRFswXSA9PSBsbS5tYXRlcmlhbElEKSB7XG5cblx0XHRcdFx0aWYgKGxtLmNtKSB7XG5cdFx0XHRcdFx0aWYgKG1lc2gubWF0ZXJpYWwpXG5cdFx0XHRcdFx0XHRtZXNoLm1hdGVyaWFsID0gbnVsbDtcblx0XHRcdFx0XHRtZXNoLm1hdGVyaWFsID0gbG0uY207XG5cblx0XHRcdFx0fSBlbHNlIGlmIChsbS50ZXh0dXJlKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubWF0ZXJpYWxNb2RlIDwgMikgeyAvLyBpZiBtYXRlcmlhbE1vZGUgaXMgMCBvciAxLCB3ZSBjcmVhdGUgYSBTaW5nbGVQYXNzXG5cdFx0XHRcdFx0XHR0bSA9IDxNZXRob2RNYXRlcmlhbCA+IG1lc2gubWF0ZXJpYWw7XG5cblx0XHRcdFx0XHRcdHRtLnRleHR1cmUgPSBsbS50ZXh0dXJlO1xuXHRcdFx0XHRcdFx0dG0uY29sb3IgPSBsbS5jb2xvcjtcblx0XHRcdFx0XHRcdHRtLmFscGhhID0gbG0uYWxwaGE7XG5cdFx0XHRcdFx0XHR0bS5yZXBlYXQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRpZiAobG0uc3BlY3VsYXJNZXRob2QpIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBCeSBzZXR0aW5nIHRoZSBzcGVjdWxhck1ldGhvZCBwcm9wZXJ0eSB0byBudWxsIGJlZm9yZSBhc3NpZ25pbmdcblx0XHRcdFx0XHRcdFx0Ly8gdGhlIGFjdHVhbCBtZXRob2QgaW5zdGFuY2UsIHdlIGF2b2lkIGhhdmluZyB0aGUgcHJvcGVydGllcyBvZlxuXHRcdFx0XHRcdFx0XHQvLyB0aGUgbmV3IG1ldGhvZCBiZWluZyBvdmVycmlkZGVuIHdpdGggdGhlIHNldHRpbmdzIGZyb20gdGhlIG9sZFxuXHRcdFx0XHRcdFx0XHQvLyBvbmUsIHdoaWNoIGlzIGRlZmF1bHQgYmVoYXZpb3Igb2YgdGhlIHNldHRlci5cblx0XHRcdFx0XHRcdFx0dG0uc3BlY3VsYXJNZXRob2QgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IGxtLnNwZWN1bGFyTWV0aG9kO1xuXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhKSB7XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IHRoaXMuX21hdGVyaWFsU3BlY3VsYXJEYXRhLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3BlY3VsYXJEYXRhID0gdGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGFbal07XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoc3BlY3VsYXJEYXRhLm1hdGVyaWFsSUQgPT0gbG0ubWF0ZXJpYWxJRCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dG0uc3BlY3VsYXJNZXRob2QgPSBudWxsOyAvLyBQcmV2ZW50IHByb3BlcnR5IG92ZXJ3cml0ZSAoc2VlIGFib3ZlKVxuXHRcdFx0XHRcdFx0XHRcdFx0dG0uc3BlY3VsYXJNZXRob2QgPSBzcGVjdWxhckRhdGEuYmFzaWNTcGVjdWxhck1ldGhvZDtcblx0XHRcdFx0XHRcdFx0XHRcdHRtLmNvbG9yID0gc3BlY3VsYXJEYXRhLmNvbG9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0dG0uYWxwaGEgPSBzcGVjdWxhckRhdGEuYWxwaGE7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgeyAvL2lmIG1hdGVyaWFsTW9kZT09MiB0aGlzIGlzIGEgTXVsdGlQYXNzVGV4dHVyZVxuXHRcdFx0XHRcdFx0dG0gPSA8TWV0aG9kTWF0ZXJpYWw+IG1lc2gubWF0ZXJpYWw7XG5cdFx0XHRcdFx0XHR0bS5tb2RlID0gTWV0aG9kTWF0ZXJpYWxNb2RlLk1VTFRJX1BBU1M7XG5cblx0XHRcdFx0XHRcdHRtLnRleHR1cmUgPSBsbS50ZXh0dXJlO1xuXHRcdFx0XHRcdFx0dG0uY29sb3IgPSBsbS5jb2xvcjtcblx0XHRcdFx0XHRcdHRtLnJlcGVhdCA9IHRydWU7XG5cblx0XHRcdFx0XHRcdGlmIChsbS5zcGVjdWxhck1ldGhvZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBCeSBzZXR0aW5nIHRoZSBzcGVjdWxhck1ldGhvZCBwcm9wZXJ0eSB0byBudWxsIGJlZm9yZSBhc3NpZ25pbmdcblx0XHRcdFx0XHRcdFx0Ly8gdGhlIGFjdHVhbCBtZXRob2QgaW5zdGFuY2UsIHdlIGF2b2lkIGhhdmluZyB0aGUgcHJvcGVydGllcyBvZlxuXHRcdFx0XHRcdFx0XHQvLyB0aGUgbmV3IG1ldGhvZCBiZWluZyBvdmVycmlkZGVuIHdpdGggdGhlIHNldHRpbmdzIGZyb20gdGhlIG9sZFxuXHRcdFx0XHRcdFx0XHQvLyBvbmUsIHdoaWNoIGlzIGRlZmF1bHQgYmVoYXZpb3Igb2YgdGhlIHNldHRlci5cblx0XHRcdFx0XHRcdFx0dG0uc3BlY3VsYXJNZXRob2QgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IGxtLnNwZWN1bGFyTWV0aG9kO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgdGhpcy5fbWF0ZXJpYWxTcGVjdWxhckRhdGEubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0XHRcdFx0XHRzcGVjdWxhckRhdGEgPSB0aGlzLl9tYXRlcmlhbFNwZWN1bGFyRGF0YVtqXTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChzcGVjdWxhckRhdGEubWF0ZXJpYWxJRCA9PSBsbS5tYXRlcmlhbElEKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IG51bGw7IC8vIFByZXZlbnQgcHJvcGVydHkgb3ZlcndyaXRlIChzZWUgYWJvdmUpXG5cdFx0XHRcdFx0XHRcdFx0XHR0bS5zcGVjdWxhck1ldGhvZCA9IHNwZWN1bGFyRGF0YS5iYXNpY1NwZWN1bGFyTWV0aG9kO1xuXHRcdFx0XHRcdFx0XHRcdFx0dG0uY29sb3IgPSBzcGVjdWxhckRhdGEuY29sb3I7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVzaC5tYXRlcmlhbC5uYW1lID0gZGVjb21wb3NlSURbMV0/IGRlY29tcG9zZUlEWzFdIDogZGVjb21wb3NlSURbMF07XG5cdFx0XHRcdHRoaXMuX21lc2hlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdC0taTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobG0uY20gfHwgdG0pXG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldChsbS5jbSB8fCB0bSk7XG5cdH1cblxuXHRwcml2YXRlIGFwcGx5TWF0ZXJpYWxzKClcblx0e1xuXHRcdGlmICh0aGlzLl9tYXRlcmlhbExvYWRlZC5sZW5ndGggPT0gMClcblx0XHRcdHJldHVybjtcblxuXHRcdGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuX21hdGVyaWFsTG9hZGVkLmxlbmd0aDsgKytpKVxuXHRcdFx0dGhpcy5hcHBseU1hdGVyaWFsKHRoaXMuX21hdGVyaWFsTG9hZGVkW2ldKTtcblx0fVxufVxuXG5leHBvcnQgPSBPQkpQYXJzZXI7XG5cbmNsYXNzIE9iamVjdEdyb3VwXG57XG5cdHB1YmxpYyBuYW1lOnN0cmluZztcblx0cHVibGljIGdyb3VwczpHcm91cFtdID0gbmV3IEFycmF5PEdyb3VwPigpO1xufVxuXG5jbGFzcyBHcm91cFxue1xuXHRwdWJsaWMgbmFtZTpzdHJpbmc7XG5cdHB1YmxpYyBtYXRlcmlhbElEOnN0cmluZztcblx0cHVibGljIG1hdGVyaWFsR3JvdXBzOk1hdGVyaWFsR3JvdXBbXSA9IG5ldyBBcnJheTxNYXRlcmlhbEdyb3VwPigpO1xufVxuXG5jbGFzcyBNYXRlcmlhbEdyb3VwXG57XG5cdHB1YmxpYyB1cmw6c3RyaW5nO1xuXHRwdWJsaWMgZmFjZXM6RmFjZURhdGFbXSA9IG5ldyBBcnJheTxGYWNlRGF0YT4oKTtcbn1cblxuY2xhc3MgU3BlY3VsYXJEYXRhXG57XG5cdHB1YmxpYyBtYXRlcmlhbElEOnN0cmluZztcblx0cHVibGljIGJhc2ljU3BlY3VsYXJNZXRob2Q6U3BlY3VsYXJCYXNpY01ldGhvZDtcblx0cHVibGljIGNvbG9yOm51bWJlciA9IDB4RkZGRkZGO1xuXHRwdWJsaWMgYWxwaGE6bnVtYmVyID0gMTtcbn1cblxuY2xhc3MgTG9hZGVkTWF0ZXJpYWxcbntcblx0cHVibGljIG1hdGVyaWFsSUQ6c3RyaW5nO1xuXHRwdWJsaWMgdGV4dHVyZTpUZXh0dXJlMkRCYXNlO1xuXHRwdWJsaWMgY206TWF0ZXJpYWxCYXNlO1xuXHRwdWJsaWMgc3BlY3VsYXJNZXRob2Q6U3BlY3VsYXJCYXNpY01ldGhvZDtcblx0cHVibGljIGNvbG9yOm51bWJlciA9IDB4RkZGRkZGO1xuXHRwdWJsaWMgYWxwaGE6bnVtYmVyID0gMTtcbn1cblxuY2xhc3MgRmFjZURhdGFcbntcblx0cHVibGljIHZlcnRleEluZGljZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdHB1YmxpYyB1dkluZGljZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cdHB1YmxpYyBub3JtYWxJbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki8gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuXHRwdWJsaWMgaW5kZXhJZHM6c3RyaW5nW10gPSBuZXcgQXJyYXk8c3RyaW5nPigpOyAvLyB1c2VkIGZvciByZWFsIGluZGV4IGxvb2t1cHNcbn1cblxuLyoqXG4qIFRleHR1cmUgY29vcmRpbmF0ZXMgdmFsdWUgb2JqZWN0LlxuKi9cbmNsYXNzIFVWXG57XG5cdHByaXZhdGUgX3U6bnVtYmVyO1xuXHRwcml2YXRlIF92Om51bWJlcjtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyA8Y29kZT5VVjwvY29kZT4gb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0gICAgdSAgICAgICAgW29wdGlvbmFsXSAgICBUaGUgaG9yaXpvbnRhbCBjb29yZGluYXRlIG9mIHRoZSB0ZXh0dXJlIHZhbHVlLiBEZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0gICAgdiAgICAgICAgW29wdGlvbmFsXSAgICBUaGUgdmVydGljYWwgY29vcmRpbmF0ZSBvZiB0aGUgdGV4dHVyZSB2YWx1ZS4gRGVmYXVsdHMgdG8gMC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHU6bnVtYmVyID0gMCwgdjpudW1iZXIgPSAwKVxuXHR7XG5cdFx0dGhpcy5fdSA9IHU7XG5cdFx0dGhpcy5fdiA9IHY7XG5cdH1cblxuXHQvKipcblx0ICogRGVmaW5lcyB0aGUgdmVydGljYWwgY29vcmRpbmF0ZSBvZiB0aGUgdGV4dHVyZSB2YWx1ZS5cblx0ICovXG5cdHB1YmxpYyBnZXQgdigpOm51bWJlclxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3Y7XG5cdH1cblxuXHRwdWJsaWMgc2V0IHYodmFsdWU6bnVtYmVyKVxuXHR7XG5cdFx0dGhpcy5fdiA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlZmluZXMgdGhlIGhvcml6b250YWwgY29vcmRpbmF0ZSBvZiB0aGUgdGV4dHVyZSB2YWx1ZS5cblx0ICovXG5cdHB1YmxpYyBnZXQgdSgpOm51bWJlclxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3U7XG5cdH1cblxuXHRwdWJsaWMgc2V0IHUodmFsdWU6bnVtYmVyKVxuXHR7XG5cdFx0dGhpcy5fdSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybnMgYSBuZXcgVVYgdmFsdWUgT2JqZWN0XG5cdCAqL1xuXHRwdWJsaWMgY2xvbmUoKTpVVlxuXHR7XG5cdFx0cmV0dXJuIG5ldyBVVih0aGlzLl91LCB0aGlzLl92KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm5zIHRoZSB2YWx1ZSBvYmplY3QgYXMgYSBzdHJpbmcgZm9yIHRyYWNlL2RlYnVnIHB1cnBvc2Vcblx0ICovXG5cdHB1YmxpYyB0b1N0cmluZygpOnN0cmluZ1xuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3UgKyBcIixcIiArIHRoaXMuX3Y7XG5cdH1cbn1cblxuY2xhc3MgVmVydGV4XG57XG5cdHByaXZhdGUgX3g6bnVtYmVyO1xuXHRwcml2YXRlIF95Om51bWJlcjtcblx0cHJpdmF0ZSBfejpudW1iZXI7XG5cdHByaXZhdGUgX2luZGV4Om51bWJlcjtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyA8Y29kZT5WZXJ0ZXg8L2NvZGU+IHZhbHVlIG9iamVjdC5cblx0ICpcblx0ICogQHBhcmFtICAgIHggICAgICAgICAgICBbb3B0aW9uYWxdICAgIFRoZSB4IHZhbHVlLiBEZWZhdWx0cyB0byAwLlxuXHQgKiBAcGFyYW0gICAgeSAgICAgICAgICAgIFtvcHRpb25hbF0gICAgVGhlIHkgdmFsdWUuIERlZmF1bHRzIHRvIDAuXG5cdCAqIEBwYXJhbSAgICB6ICAgICAgICAgICAgW29wdGlvbmFsXSAgICBUaGUgeiB2YWx1ZS4gRGVmYXVsdHMgdG8gMC5cblx0ICogQHBhcmFtICAgIGluZGV4ICAgICAgICBbb3B0aW9uYWxdICAgIFRoZSBpbmRleCB2YWx1ZS4gRGVmYXVsdHMgaXMgTmFOLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoeDpudW1iZXIgPSAwLCB5Om51bWJlciA9IDAsIHo6bnVtYmVyID0gMCwgaW5kZXg6bnVtYmVyID0gMClcblx0e1xuXHRcdHRoaXMuX3ggPSB4O1xuXHRcdHRoaXMuX3kgPSB5O1xuXHRcdHRoaXMuX3ogPSB6O1xuXHRcdHRoaXMuX2luZGV4ID0gaW5kZXg7XG5cdH1cblxuXHQvKipcblx0ICogVG8gZGVmaW5lL3N0b3JlIHRoZSBpbmRleCBvZiB2YWx1ZSBvYmplY3Rcblx0ICogQHBhcmFtICAgIGluZCAgICAgICAgVGhlIGluZGV4XG5cdCAqL1xuXHRwdWJsaWMgc2V0IGluZGV4KGluZDpudW1iZXIpXG5cdHtcblx0XHR0aGlzLl9pbmRleCA9IGluZDtcblx0fVxuXG5cdHB1YmxpYyBnZXQgaW5kZXgoKTpudW1iZXJcblx0e1xuXHRcdHJldHVybiB0aGlzLl9pbmRleDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUbyBkZWZpbmUvc3RvcmUgdGhlIHggdmFsdWUgb2YgdGhlIHZhbHVlIG9iamVjdFxuXHQgKiBAcGFyYW0gICAgdmFsdWUgICAgICAgIFRoZSB4IHZhbHVlXG5cdCAqL1xuXHRwdWJsaWMgZ2V0IHgoKTpudW1iZXJcblx0e1xuXHRcdHJldHVybiB0aGlzLl94O1xuXHR9XG5cblx0cHVibGljIHNldCB4KHZhbHVlOm51bWJlcilcblx0e1xuXHRcdHRoaXMuX3ggPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUbyBkZWZpbmUvc3RvcmUgdGhlIHkgdmFsdWUgb2YgdGhlIHZhbHVlIG9iamVjdFxuXHQgKiBAcGFyYW0gICAgdmFsdWUgICAgICAgIFRoZSB5IHZhbHVlXG5cdCAqL1xuXHRwdWJsaWMgZ2V0IHkoKTpudW1iZXJcblx0e1xuXHRcdHJldHVybiB0aGlzLl95O1xuXHR9XG5cblx0cHVibGljIHNldCB5KHZhbHVlOm51bWJlcilcblx0e1xuXHRcdHRoaXMuX3kgPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUbyBkZWZpbmUvc3RvcmUgdGhlIHogdmFsdWUgb2YgdGhlIHZhbHVlIG9iamVjdFxuXHQgKiBAcGFyYW0gICAgdmFsdWUgICAgICAgIFRoZSB6IHZhbHVlXG5cdCAqL1xuXHRwdWJsaWMgZ2V0IHooKTpudW1iZXJcblx0e1xuXHRcdHJldHVybiB0aGlzLl96O1xuXHR9XG5cblx0cHVibGljIHNldCB6KHZhbHVlOm51bWJlcilcblx0e1xuXHRcdHRoaXMuX3ogPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm5zIGEgbmV3IFZlcnRleCB2YWx1ZSBPYmplY3Rcblx0ICovXG5cdHB1YmxpYyBjbG9uZSgpOlZlcnRleFxuXHR7XG5cdFx0cmV0dXJuIG5ldyBWZXJ0ZXgodGhpcy5feCwgdGhpcy5feSwgdGhpcy5feik7XG5cdH1cbn0iXX0=