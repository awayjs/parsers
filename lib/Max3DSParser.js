var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Geometry = require("awayjs-core/lib/data/Geometry");
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var Matrix3D = require("awayjs-core/lib/geom/Matrix3D");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
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
/**
 * Max3DSParser provides a parser for the 3ds data type.
 */
var Max3DSParser = (function (_super) {
    __extends(Max3DSParser, _super);
    /**
     * Creates a new <code>Max3DSParser</code> object.
     *
     * @param useSmoothingGroups Determines whether the parser looks for smoothing groups in the 3ds file or assumes uniform smoothing. Defaults to true.
     */
    function Max3DSParser(useSmoothingGroups) {
        if (useSmoothingGroups === void 0) { useSmoothingGroups = true; }
        _super.call(this, URLLoaderDataFormat.ARRAY_BUFFER);
        this._useSmoothingGroups = useSmoothingGroups;
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    Max3DSParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "3ds";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    Max3DSParser.supportsData = function (data) {
        var ba;
        ba = ParserUtils.toByteArray(data);
        if (ba) {
            ba.position = 0;
            if (ba.readShort() == 0x4d4d)
                return true;
        }
        return false;
    };
    /**
     * @inheritDoc
     */
    Max3DSParser.prototype._iResolveDependency = function (resourceDependency) {
        if (resourceDependency.assets.length == 1) {
            var asset;
            asset = resourceDependency.assets[0];
            if (asset.isAsset(TextureBase)) {
                var tex;
                tex = this._textures[resourceDependency.id];
                tex.texture = asset;
            }
        }
    };
    /**
     * @inheritDoc
     */
    Max3DSParser.prototype._iResolveDependencyFailure = function (resourceDependency) {
        // TODO: Implement
    };
    /**
     * @inheritDoc
     */
    Max3DSParser.prototype._pProceedParsing = function () {
        if (!this._byteData) {
            this._byteData = this._pGetByteData();
            this._byteData.position = 0;
            //----------------------------------------------------------------------------
            // LITTLE_ENDIAN - Default for ArrayBuffer / Not implemented in ByteArray
            //----------------------------------------------------------------------------
            //this._byteData.endian = Endian.LITTLE_ENDIAN;// Should be default
            //----------------------------------------------------------------------------
            this._textures = {};
            this._materials = {};
            this._unfinalized_objects = {};
        }
        while (this._pHasTime()) {
            // If we are currently working on an object, and the most recent chunk was
            // the last one in that object, finalize the current object.
            if (this._cur_mat && this._byteData.position >= this._cur_mat_end)
                this.finalizeCurrentMaterial();
            else if (this._cur_obj && this._byteData.position >= this._cur_obj_end) {
                // Can't finalize at this point, because we have to wait until the full
                // animation section has been parsed for any potential pivot definitions
                this._unfinalized_objects[this._cur_obj.name] = this._cur_obj;
                this._cur_obj_end = Number.MAX_VALUE;
                this._cur_obj = null;
            }
            if (this._byteData.getBytesAvailable() > 0) {
                var cid /*uint*/;
                var len /*uint*/;
                var end /*uint*/;
                cid = this._byteData.readUnsignedShort();
                len = this._byteData.readUnsignedInt();
                end = this._byteData.position + (len - 6);
                switch (cid) {
                    case 0x4D4D:
                    case 0x3D3D:
                    case 0xB000:
                        continue;
                        break;
                    case 0xAFFF:
                        this._cur_mat_end = end;
                        this._cur_mat = this.parseMaterial();
                        break;
                    case 0x4000:
                        this._cur_obj_end = end;
                        this._cur_obj = new ObjectVO();
                        this._cur_obj.name = this.readNulTermstring();
                        this._cur_obj.materials = new Array();
                        this._cur_obj.materialFaces = {};
                        break;
                    case 0x4100:
                        this._cur_obj.type = Mesh.assetType;
                        break;
                    case 0x4110:
                        this.parseVertexList();
                        break;
                    case 0x4120:
                        this.parseFaceList();
                        break;
                    case 0x4140:
                        this.parseUVList();
                        break;
                    case 0x4130:
                        this.parseFaceMaterialList();
                        break;
                    case 0x4160:
                        this._cur_obj.transform = this.readTransform();
                        break;
                    case 0xB002:
                        this.parseObjectAnimation(end);
                        break;
                    case 0x4150:
                        this.parseSmoothingGroups();
                        break;
                    default:
                        // Skip this (unknown) chunk
                        this._byteData.position += (len - 6);
                        break;
                }
                // Pause parsing if there were any dependencies found during this
                // iteration (i.e. if there are any dependencies that need to be
                // retrieved at this time.)
                if (this.dependencies.length) {
                    this._pPauseAndRetrieveDependencies();
                    break;
                }
            }
        }
        // More parsing is required if the entire byte array has not yet
        // been read, or if there is a currently non-finalized object in
        // the pipeline.
        if (this._byteData.getBytesAvailable() || this._cur_obj || this._cur_mat) {
            return ParserBase.MORE_TO_PARSE;
        }
        else {
            var name;
            for (name in this._unfinalized_objects) {
                var obj;
                obj = this.constructObject(this._unfinalized_objects[name]);
                if (obj) {
                    //add to the content property
                    this._pContent.addChild(obj);
                    this._pFinalizeAsset(obj, name);
                }
            }
            return ParserBase.PARSING_DONE;
        }
    };
    Max3DSParser.prototype._pStartParsing = function (frameLimit) {
        _super.prototype._pStartParsing.call(this, frameLimit);
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer();
    };
    Max3DSParser.prototype.parseMaterial = function () {
        var mat;
        mat = new MaterialVO();
        while (this._byteData.position < this._cur_mat_end) {
            var cid /*uint*/;
            var len /*uint*/;
            var end /*uint*/;
            cid = this._byteData.readUnsignedShort();
            len = this._byteData.readUnsignedInt();
            end = this._byteData.position + (len - 6);
            switch (cid) {
                case 0xA000:
                    mat.name = this.readNulTermstring();
                    break;
                case 0xA010:
                    mat.ambientColor = this.readColor();
                    break;
                case 0xA020:
                    mat.diffuseColor = this.readColor();
                    break;
                case 0xA030:
                    mat.specularColor = this.readColor();
                    break;
                case 0xA081:
                    mat.twoSided = true;
                    break;
                case 0xA200:
                    mat.colorMap = this.parseTexture(end);
                    break;
                case 0xA204:
                    mat.specularMap = this.parseTexture(end);
                    break;
                default:
                    this._byteData.position = end;
                    break;
            }
        }
        return mat;
    };
    Max3DSParser.prototype.parseTexture = function (end /*uint*/) {
        var tex;
        tex = new TextureVO();
        while (this._byteData.position < end) {
            var cid /*uint*/;
            var len /*uint*/;
            cid = this._byteData.readUnsignedShort();
            len = this._byteData.readUnsignedInt();
            switch (cid) {
                case 0xA300:
                    tex.url = this.readNulTermstring();
                    break;
                default:
                    // Skip this unknown texture sub-chunk
                    this._byteData.position += (len - 6);
                    break;
            }
        }
        this._textures[tex.url] = tex;
        this._pAddDependency(tex.url, new URLRequest(tex.url));
        return tex;
    };
    Max3DSParser.prototype.parseVertexList = function () {
        var i /*uint*/;
        var len /*uint*/;
        var count /*uint*/;
        count = this._byteData.readUnsignedShort();
        this._cur_obj.verts = new Array(count * 3);
        i = 0;
        len = this._cur_obj.verts.length;
        while (i < len) {
            var x, y, z;
            x = this._byteData.readFloat();
            y = this._byteData.readFloat();
            z = this._byteData.readFloat();
            this._cur_obj.verts[i++] = x;
            this._cur_obj.verts[i++] = z;
            this._cur_obj.verts[i++] = y;
        }
    };
    Max3DSParser.prototype.parseFaceList = function () {
        var i /*uint*/;
        var len /*uint*/;
        var count /*uint*/;
        count = this._byteData.readUnsignedShort();
        this._cur_obj.indices = new Array(count * 3);
        i = 0;
        len = this._cur_obj.indices.length;
        while (i < len) {
            var i0 /*uint*/, i1 /*uint*/, i2 /*uint*/;
            i0 = this._byteData.readUnsignedShort();
            i1 = this._byteData.readUnsignedShort();
            i2 = this._byteData.readUnsignedShort();
            this._cur_obj.indices[i++] = i0;
            this._cur_obj.indices[i++] = i2;
            this._cur_obj.indices[i++] = i1;
            // Skip "face info", irrelevant in Away3D
            this._byteData.position += 2;
        }
        this._cur_obj.smoothingGroups = new Array(count);
    };
    Max3DSParser.prototype.parseSmoothingGroups = function () {
        var len = this._cur_obj.indices.length / 3;
        var i = 0;
        while (i < len) {
            this._cur_obj.smoothingGroups[i] = this._byteData.readUnsignedInt();
            i++;
        }
    };
    Max3DSParser.prototype.parseUVList = function () {
        var i /*uint*/;
        var len /*uint*/;
        var count /*uint*/;
        count = this._byteData.readUnsignedShort();
        this._cur_obj.uvs = new Array(count * 2);
        i = 0;
        len = this._cur_obj.uvs.length;
        while (i < len) {
            this._cur_obj.uvs[i++] = this._byteData.readFloat();
            this._cur_obj.uvs[i++] = 1.0 - this._byteData.readFloat();
        }
    };
    Max3DSParser.prototype.parseFaceMaterialList = function () {
        var mat;
        var count /*uint*/;
        var i /*uint*/;
        var faces /*uint*/;
        mat = this.readNulTermstring();
        count = this._byteData.readUnsignedShort();
        faces = new Array(count);
        i = 0;
        while (i < faces.length)
            faces[i++] = this._byteData.readUnsignedShort();
        this._cur_obj.materials.push(mat);
        this._cur_obj.materialFaces[mat] = faces;
    };
    Max3DSParser.prototype.parseObjectAnimation = function (end) {
        var vo;
        var obj;
        var pivot;
        var name;
        var hier /*uint*/;
        // Pivot defaults to origin
        pivot = new Vector3D;
        while (this._byteData.position < end) {
            var cid /*uint*/;
            var len /*uint*/;
            cid = this._byteData.readUnsignedShort();
            len = this._byteData.readUnsignedInt();
            switch (cid) {
                case 0xb010:
                    name = this.readNulTermstring();
                    this._byteData.position += 4;
                    hier = this._byteData.readShort();
                    break;
                case 0xb013:
                    pivot.x = this._byteData.readFloat();
                    pivot.z = this._byteData.readFloat();
                    pivot.y = this._byteData.readFloat();
                    break;
                default:
                    this._byteData.position += (len - 6);
                    break;
            }
        }
        // If name is "$$$DUMMY" this is an empty object (e.g. a container)
        // and will be ignored in this version of the parser
        // TODO: Implement containers in 3DS parser.
        if (name != '$$$DUMMY' && this._unfinalized_objects.hasOwnProperty(name)) {
            vo = this._unfinalized_objects[name];
            obj = this.constructObject(vo, pivot);
            if (obj) {
                //add to the content property
                this._pContent.addChild(obj);
                this._pFinalizeAsset(obj, vo.name);
            }
            delete this._unfinalized_objects[name];
        }
    };
    Max3DSParser.prototype.constructObject = function (obj, pivot) {
        if (pivot === void 0) { pivot = null; }
        if (obj.type == Mesh.assetType) {
            var i /*uint*/;
            var sub;
            var geom;
            var mat;
            var mesh;
            var mtx;
            var vertices;
            var faces;
            if (obj.materials.length > 1)
                console.log("The Away3D 3DS parser does not support multiple materials per mesh at this point.");
            // Ignore empty objects
            if (!obj.indices || obj.indices.length == 0)
                return null;
            vertices = new Array(obj.verts.length / 3);
            faces = new Array(obj.indices.length / 3);
            this.prepareData(vertices, faces, obj);
            if (this._useSmoothingGroups)
                this.applySmoothGroups(vertices, faces);
            obj.verts = new Array(vertices.length * 3);
            for (i = 0; i < vertices.length; i++) {
                obj.verts[i * 3] = vertices[i].x;
                obj.verts[i * 3 + 1] = vertices[i].y;
                obj.verts[i * 3 + 2] = vertices[i].z;
            }
            obj.indices = new Array(faces.length * 3);
            for (i = 0; i < faces.length; i++) {
                obj.indices[i * 3] = faces[i].a;
                obj.indices[i * 3 + 1] = faces[i].b;
                obj.indices[i * 3 + 2] = faces[i].c;
            }
            if (obj.uvs) {
                // If the object had UVs to start with, use UVs generated by
                // smoothing group splitting algorithm. Otherwise those UVs
                // will be nonsense and should be skipped.
                obj.uvs = new Array(vertices.length * 2);
                for (i = 0; i < vertices.length; i++) {
                    obj.uvs[i * 2] = vertices[i].u;
                    obj.uvs[i * 2 + 1] = vertices[i].v;
                }
            }
            geom = new Geometry();
            // Construct sub-geometries (potentially splitting buffers)
            // and add them to geometry.
            sub = new TriangleSubGeometry(true);
            sub.updateIndices(obj.indices);
            sub.updatePositions(obj.verts);
            sub.updateUVs(obj.uvs);
            geom.addSubGeometry(sub);
            if (obj.materials.length > 0) {
                var mname;
                mname = obj.materials[0];
                mat = this._materials[mname].material;
            }
            // Apply pivot translation to geometry if a pivot was
            // found while parsing the keyframe chunk earlier.
            if (pivot) {
                if (obj.transform) {
                    // If a transform was found while parsing the
                    // object chunk, use it to find the local pivot vector
                    var dat = obj.transform.concat();
                    dat[12] = 0;
                    dat[13] = 0;
                    dat[14] = 0;
                    mtx = new Matrix3D(dat);
                    pivot = mtx.transformVector(pivot);
                }
                pivot.scaleBy(-1);
                mtx = new Matrix3D();
                mtx.appendTranslation(pivot.x, pivot.y, pivot.z);
                geom.applyTransformation(mtx);
            }
            // Apply transformation to geometry if a transformation
            // was found while parsing the object chunk earlier.
            if (obj.transform) {
                mtx = new Matrix3D(obj.transform);
                mtx.invert();
                geom.applyTransformation(mtx);
            }
            // Final transform applied to geometry. Finalize the geometry,
            // which will no longer be modified after this point.
            this._pFinalizeAsset(geom, obj.name.concat('_geom'));
            // Build mesh and return it
            mesh = new Mesh(geom, mat);
            mesh.transform.matrix3D = new Matrix3D(obj.transform);
            return mesh;
        }
        // If reached, unknown
        return null;
    };
    Max3DSParser.prototype.prepareData = function (vertices, faces, obj) {
        // convert raw ObjectVO's data to structured VertexVO and FaceVO
        var i /*int*/;
        var j /*int*/;
        var k /*int*/;
        var len = obj.verts.length;
        for (i = 0, j = 0, k = 0; i < len;) {
            var v = new VertexVO;
            v.x = obj.verts[i++];
            v.y = obj.verts[i++];
            v.z = obj.verts[i++];
            if (obj.uvs) {
                v.u = obj.uvs[j++];
                v.v = obj.uvs[j++];
            }
            vertices[k++] = v;
        }
        len = obj.indices.length;
        for (i = 0, k = 0; i < len;) {
            var f = new FaceVO();
            f.a = obj.indices[i++];
            f.b = obj.indices[i++];
            f.c = obj.indices[i++];
            f.smoothGroup = obj.smoothingGroups[k] || 0;
            faces[k++] = f;
        }
    };
    Max3DSParser.prototype.applySmoothGroups = function (vertices, faces) {
        // clone vertices according to following rule:
        // clone if vertex's in faces from groups 1+2 and 3
        // don't clone if vertex's in faces from groups 1+2, 3 and 1+3
        var i /*int*/;
        var j /*int*/;
        var k /*int*/;
        var l /*int*/;
        var len /*int*/;
        var numVerts = vertices.length;
        var numFaces = faces.length;
        // extract groups data for vertices
        var vGroups = new Array(numVerts) /*uint*/;
        for (i = 0; i < numVerts; i++)
            vGroups[i] = new Array();
        for (i = 0; i < numFaces; i++) {
            var face = faces[i];
            for (j = 0; j < 3; j++) {
                var groups = vGroups[(j == 0) ? face.a : ((j == 1) ? face.b : face.c)];
                var group = face.smoothGroup;
                for (k = groups.length - 1; k >= 0; k--) {
                    if ((group & groups[k]) > 0) {
                        group |= groups[k];
                        groups.splice(k, 1);
                        k = groups.length - 1;
                    }
                }
                groups.push(group);
            }
        }
        // clone vertices
        var vClones = new Array(numVerts) /*uint*/;
        for (i = 0; i < numVerts; i++) {
            if ((len = vGroups[i].length) < 1)
                continue;
            var clones = new Array(len) /*uint*/;
            vClones[i] = clones;
            clones[0] = i;
            var v0 = vertices[i];
            for (j = 1; j < len; j++) {
                var v1 = new VertexVO;
                v1.x = v0.x;
                v1.y = v0.y;
                v1.z = v0.z;
                v1.u = v0.u;
                v1.v = v0.v;
                clones[j] = vertices.length;
                vertices.push(v1);
            }
        }
        numVerts = vertices.length;
        for (i = 0; i < numFaces; i++) {
            face = faces[i];
            group = face.smoothGroup;
            for (j = 0; j < 3; j++) {
                k = (j == 0) ? face.a : ((j == 1) ? face.b : face.c);
                groups = vGroups[k];
                len = groups.length;
                clones = vClones[k];
                for (l = 0; l < len; l++) {
                    if (((group == 0) && (groups[l] == 0)) || ((group & groups[l]) > 0)) {
                        var index = clones[l];
                        if (group == 0) {
                            // vertex is unique if no smoothGroup found
                            groups.splice(l, 1);
                            clones.splice(l, 1);
                        }
                        if (j == 0)
                            face.a = index;
                        else if (j == 1)
                            face.b = index;
                        else
                            face.c = index;
                        l = len;
                    }
                }
            }
        }
    };
    Max3DSParser.prototype.finalizeCurrentMaterial = function () {
        var mat;
        if (this._cur_mat.colorMap)
            mat = new MethodMaterial(this._cur_mat.colorMap.texture || DefaultMaterialManager.getDefaultTexture());
        else
            mat = new MethodMaterial(this._cur_mat.ambientColor);
        mat.diffuseColor = this._cur_mat.diffuseColor;
        mat.specularColor = this._cur_mat.specularColor;
        if (this.materialMode >= 2)
            mat.mode = MethodMaterialMode.MULTI_PASS;
        mat.bothSides = this._cur_mat.twoSided;
        this._pFinalizeAsset(mat, this._cur_mat.name);
        this._materials[this._cur_mat.name] = this._cur_mat;
        this._cur_mat.material = mat;
        this._cur_mat = null;
    };
    Max3DSParser.prototype.readNulTermstring = function () {
        var chr /*int*/;
        var str = "";
        while ((chr = this._byteData.readUnsignedByte()) > 0)
            str += String.fromCharCode(chr);
        return str;
    };
    Max3DSParser.prototype.readTransform = function () {
        var data;
        data = new Array(16);
        // X axis
        data[0] = this._byteData.readFloat(); // X
        data[2] = this._byteData.readFloat(); // Z
        data[1] = this._byteData.readFloat(); // Y
        data[3] = 0;
        // Z axis
        data[8] = this._byteData.readFloat(); // X
        data[10] = this._byteData.readFloat(); // Z
        data[9] = this._byteData.readFloat(); // Y
        data[11] = 0;
        // Y Axis
        data[4] = this._byteData.readFloat(); // X
        data[6] = this._byteData.readFloat(); // Z
        data[5] = this._byteData.readFloat(); // Y
        data[7] = 0;
        // Translation
        data[12] = this._byteData.readFloat(); // X
        data[14] = this._byteData.readFloat(); // Z
        data[13] = this._byteData.readFloat(); // Y
        data[15] = 1;
        return data;
    };
    Max3DSParser.prototype.readColor = function () {
        var cid /*int*/;
        var len /*int*/;
        var r /*int*/, g /*int*/, b /*int*/;
        cid = this._byteData.readUnsignedShort();
        len = this._byteData.readUnsignedInt();
        switch (cid) {
            case 0x0010:
                r = this._byteData.readFloat() * 255;
                g = this._byteData.readFloat() * 255;
                b = this._byteData.readFloat() * 255;
                break;
            case 0x0011:
                r = this._byteData.readUnsignedByte();
                g = this._byteData.readUnsignedByte();
                b = this._byteData.readUnsignedByte();
                break;
            default:
                this._byteData.position += (len - 6);
                break;
        }
        return (r << 16) | (g << 8) | b;
    };
    return Max3DSParser;
})(ParserBase);
/**
 *
 */
var FaceVO = (function () {
    function FaceVO() {
    }
    return FaceVO;
})();
/**
 *
 */
var MaterialVO = (function () {
    function MaterialVO() {
    }
    return MaterialVO;
})();
/**
 *
 */
var ObjectVO = (function () {
    function ObjectVO() {
    }
    return ObjectVO;
})();
/**
 *
 */
var TextureVO = (function () {
    function TextureVO() {
    }
    return TextureVO;
})();
/**
 *
 */
var VertexVO = (function () {
    function VertexVO() {
    }
    return VertexVO;
})();
module.exports = Max3DSParser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9NYXgzRFNQYXJzZXIudHMiXSwibmFtZXMiOlsiTWF4M0RTUGFyc2VyIiwiTWF4M0RTUGFyc2VyLmNvbnN0cnVjdG9yIiwiTWF4M0RTUGFyc2VyLnN1cHBvcnRzVHlwZSIsIk1heDNEU1BhcnNlci5zdXBwb3J0c0RhdGEiLCJNYXgzRFNQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIk1heDNEU1BhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIk1heDNEU1BhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiTWF4M0RTUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiTWF4M0RTUGFyc2VyLnBhcnNlTWF0ZXJpYWwiLCJNYXgzRFNQYXJzZXIucGFyc2VUZXh0dXJlIiwiTWF4M0RTUGFyc2VyLnBhcnNlVmVydGV4TGlzdCIsIk1heDNEU1BhcnNlci5wYXJzZUZhY2VMaXN0IiwiTWF4M0RTUGFyc2VyLnBhcnNlU21vb3RoaW5nR3JvdXBzIiwiTWF4M0RTUGFyc2VyLnBhcnNlVVZMaXN0IiwiTWF4M0RTUGFyc2VyLnBhcnNlRmFjZU1hdGVyaWFsTGlzdCIsIk1heDNEU1BhcnNlci5wYXJzZU9iamVjdEFuaW1hdGlvbiIsIk1heDNEU1BhcnNlci5jb25zdHJ1Y3RPYmplY3QiLCJNYXgzRFNQYXJzZXIucHJlcGFyZURhdGEiLCJNYXgzRFNQYXJzZXIuYXBwbHlTbW9vdGhHcm91cHMiLCJNYXgzRFNQYXJzZXIuZmluYWxpemVDdXJyZW50TWF0ZXJpYWwiLCJNYXgzRFNQYXJzZXIucmVhZE51bFRlcm1zdHJpbmciLCJNYXgzRFNQYXJzZXIucmVhZFRyYW5zZm9ybSIsIk1heDNEU1BhcnNlci5yZWFkQ29sb3IiLCJGYWNlVk8iLCJGYWNlVk8uY29uc3RydWN0b3IiLCJNYXRlcmlhbFZPIiwiTWF0ZXJpYWxWTy5jb25zdHJ1Y3RvciIsIk9iamVjdFZPIiwiT2JqZWN0Vk8uY29uc3RydWN0b3IiLCJUZXh0dXJlVk8iLCJUZXh0dXJl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QUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDNUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG1GQUFtRkEsQ0FBQ0EsQ0FBQ0E7WUFFbEdBLEFBQ0FBLHVCQUR1QkE7WUFDdkJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLElBQUlBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO2dCQUMzQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFFYkEsUUFBUUEsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBV0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkRBLEtBQUtBLEdBQUdBLElBQUlBLEtBQUtBLENBQVNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEdBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRWhEQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxLQUFLQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUV2Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQTtnQkFDNUJBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFFekNBLEdBQUdBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLEtBQUtBLENBQVNBLFFBQVFBLENBQUNBLE1BQU1BLEdBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2pEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDdENBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLEdBQUNBLENBQUNBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENB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QUFRQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUMvQ0EsSUFBSUEsUUFBUUEsR0FBbUJBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBO1FBRTVDQSxBQUNBQSxtQ0FEbUNBO1lBQy9CQSxPQUFPQSxHQUFpQ0EsSUFBSUEsS0FBS0EsQ0FBZ0JBLFFBQVFBLENBQUNBLENBQUNBLFFBQURBLEFBQVNBLENBQUNBO1FBQ3hGQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxRQUFRQSxFQUFFQSxDQUFDQSxFQUFFQTtZQUM1QkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsRUFBVUEsQ0FBVUE7UUFDM0NBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFFBQVFBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQy9CQSxJQUFJQSxJQUFJQSxHQUFVQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQ3hCQSxJQUFJQSxNQUFNQSxHQUEwQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzVGQSxJQUFJQSxLQUFLQSxHQUFtQkEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0JBQzdDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtvQkFDekNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUM3QkEsS0FBS0EsSUFBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ25CQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcEJBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQUN2QkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBO2dCQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFDREEsQUFDQUEsaUJBRGlCQTtZQUNiQSxPQUFPQSxHQUFpQ0EsSUFBSUEsS0FBS0EsQ0FBZ0JBLFFBQVFBLENBQUNBLENBQUNBLFFBQURBLEFBQVNBLENBQUNBO1FBQ3hGQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxRQUFRQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUMvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxRQUFRQSxDQUFDQTtZQUNWQSxJQUFJQSxNQUFNQSxHQUEwQkEsSUFBSUEsS0FBS0EsQ0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsUUFBREEsQUFBU0EsQ0FBQ0E7WUFDcEVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBO1lBQ3BCQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNkQSxJQUFJQSxFQUFFQSxHQUFZQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQzFCQSxJQUFJQSxFQUFFQSxHQUFZQSxJQUFJQSxRQUFRQSxDQUFDQTtnQkFDL0JBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1pBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQzVCQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNuQkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFDREEsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFFM0JBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFFBQVFBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQy9CQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoQkEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7WUFDekJBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdB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QUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxJQUFJQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsSUFBSUE7UUFDMUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLElBQUlBO1FBQzFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVaQSxBQUNBQSxTQURTQTtRQUNUQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxJQUFJQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsSUFBSUE7UUFDM0NBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLElBQUlBO1FBQzFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUViQSxBQUNBQSxTQURTQTtRQUNUQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxJQUFJQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsSUFBSUE7UUFDMUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLElBQUlBO1FBQzFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVa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QTs7R0FERztJQUNHLFNBQVM7SUFBZkUsU0FBTUEsU0FBU0E7SUFJZkMsQ0FBQ0E7SUFBREQsZ0JBQUNBO0FBQURBLENBSkEsQUFJQ0EsSUFBQTtBQUVELEFBR0E7O0dBREc7SUFDRyxRQUFRO0lBQWRFLFNBQU1BLFFBQVFBO0lBU2RDLENBQUNBO0lBQURELGVBQUNBO0FBQURBLENBVEEsQUFTQ0EsSUFBQTtBQXBFRCxpQkFBUyxZQUFZLENBQUMiLCJmaWxlIjoiTWF4M0RTUGFyc2VyLmpzIiwic291cmNlUm9vdCI6Ii4uLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZW9tZXRyeVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvR2VvbWV0cnlcIik7XHJcbmltcG9ydCBUcmlhbmdsZVN1Ykdlb21ldHJ5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZGF0YS9UcmlhbmdsZVN1Ykdlb21ldHJ5XCIpO1xyXG5pbXBvcnQgTWF0cml4M0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL01hdHJpeDNEXCIpO1xyXG5pbXBvcnQgVmVjdG9yM0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1ZlY3RvcjNEXCIpO1xyXG5pbXBvcnQgSUFzc2V0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbGlicmFyeS9JQXNzZXRcIik7XHJcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XHJcbmltcG9ydCBVUkxSZXF1ZXN0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCIpO1xyXG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XHJcbmltcG9ydCBQYXJzZXJVdGlsc1x0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlclV0aWxzXCIpO1xyXG5pbXBvcnQgUmVzb3VyY2VEZXBlbmRlbmN5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9SZXNvdXJjZURlcGVuZGVuY3lcIik7XHJcbmltcG9ydCBUZXh0dXJlMkRCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlMkRCYXNlXCIpO1xyXG5pbXBvcnQgVGV4dHVyZUJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZUJhc2VcIik7XHJcbmltcG9ydCBCeXRlQXJyYXlcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvQnl0ZUFycmF5XCIpO1xyXG5cclxuaW1wb3J0IERpc3BsYXlPYmplY3RDb250YWluZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9EaXNwbGF5T2JqZWN0Q29udGFpbmVyXCIpO1xyXG5pbXBvcnQgTWVzaFx0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvTWVzaFwiKTtcclxuaW1wb3J0IERlZmF1bHRNYXRlcmlhbE1hbmFnZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvbWFuYWdlcnMvRGVmYXVsdE1hdGVyaWFsTWFuYWdlclwiKTtcclxuaW1wb3J0IE1hdGVyaWFsQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9tYXRlcmlhbHMvTWF0ZXJpYWxCYXNlXCIpO1xyXG5cclxuaW1wb3J0IE1ldGhvZE1hdGVyaWFsXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL01ldGhvZE1hdGVyaWFsXCIpO1xyXG5pbXBvcnQgTWV0aG9kTWF0ZXJpYWxNb2RlXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9NZXRob2RNYXRlcmlhbE1vZGVcIik7XHJcblxyXG4vKipcclxuICogTWF4M0RTUGFyc2VyIHByb3ZpZGVzIGEgcGFyc2VyIGZvciB0aGUgM2RzIGRhdGEgdHlwZS5cclxuICovXHJcbmNsYXNzIE1heDNEU1BhcnNlciBleHRlbmRzIFBhcnNlckJhc2Vcclxue1xyXG5cdHByaXZhdGUgX2J5dGVEYXRhOkJ5dGVBcnJheTtcclxuXHJcblx0cHJpdmF0ZSBfdGV4dHVyZXM6T2JqZWN0O1xyXG5cdHByaXZhdGUgX21hdGVyaWFsczpPYmplY3Q7XHJcblx0cHJpdmF0ZSBfdW5maW5hbGl6ZWRfb2JqZWN0czpPYmplY3Q7XHJcblxyXG5cdHByaXZhdGUgX2N1cl9vYmpfZW5kOm51bWJlcjtcclxuXHRwcml2YXRlIF9jdXJfb2JqOk9iamVjdFZPO1xyXG5cclxuXHRwcml2YXRlIF9jdXJfbWF0X2VuZDpudW1iZXI7XHJcblx0cHJpdmF0ZSBfY3VyX21hdDpNYXRlcmlhbFZPO1xyXG5cdHByaXZhdGUgX3VzZVNtb290aGluZ0dyb3Vwczpib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgbmV3IDxjb2RlPk1heDNEU1BhcnNlcjwvY29kZT4gb2JqZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHVzZVNtb290aGluZ0dyb3VwcyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhcnNlciBsb29rcyBmb3Igc21vb3RoaW5nIGdyb3VwcyBpbiB0aGUgM2RzIGZpbGUgb3IgYXNzdW1lcyB1bmlmb3JtIHNtb290aGluZy4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcih1c2VTbW9vdGhpbmdHcm91cHM6Ym9vbGVhbiA9IHRydWUpXHJcblx0e1xyXG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5BUlJBWV9CVUZGRVIpO1xyXG5cclxuXHRcdHRoaXMuX3VzZVNtb290aGluZ0dyb3VwcyA9IHVzZVNtb290aGluZ0dyb3VwcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCBhIGdpdmVuIGZpbGUgZXh0ZW5zaW9uIGlzIHN1cHBvcnRlZCBieSB0aGUgcGFyc2VyLlxyXG5cdCAqIEBwYXJhbSBleHRlbnNpb24gVGhlIGZpbGUgZXh0ZW5zaW9uIG9mIGEgcG90ZW50aWFsIGZpbGUgdG8gYmUgcGFyc2VkLlxyXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGZpbGUgdHlwZSBpcyBzdXBwb3J0ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c1R5cGUoZXh0ZW5zaW9uOnN0cmluZyk6Ym9vbGVhblxyXG5cdHtcclxuXHRcdGV4dGVuc2lvbiA9IGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0cmV0dXJuIGV4dGVuc2lvbiA9PSBcIjNkc1wiO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciBhIGRhdGEgYmxvY2sgY2FuIGJlIHBhcnNlZCBieSB0aGUgcGFyc2VyLlxyXG5cdCAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGJsb2NrIHRvIHBvdGVudGlhbGx5IGJlIHBhcnNlZC5cclxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBkYXRhIGlzIHN1cHBvcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzRGF0YShkYXRhOmFueSk6Ym9vbGVhblxyXG5cdHtcclxuXHRcdHZhciBiYTpCeXRlQXJyYXk7XHJcblxyXG5cdFx0YmEgPSBQYXJzZXJVdGlscy50b0J5dGVBcnJheShkYXRhKTtcclxuXHRcdGlmIChiYSkge1xyXG5cdFx0XHRiYS5wb3NpdGlvbiA9IDA7XHJcblx0XHRcdGlmIChiYS5yZWFkU2hvcnQoKSA9PSAweDRkNGQpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGluaGVyaXREb2NcclxuXHQgKi9cclxuXHRwdWJsaWMgX2lSZXNvbHZlRGVwZW5kZW5jeShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KTp2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0dmFyIGFzc2V0OklBc3NldDtcclxuXHJcblx0XHRcdGFzc2V0ID0gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcclxuXHRcdFx0aWYgKGFzc2V0LmlzQXNzZXQoVGV4dHVyZUJhc2UpKSB7XHJcblx0XHRcdFx0dmFyIHRleDpUZXh0dXJlVk87XHJcblxyXG5cdFx0XHRcdHRleCA9IHRoaXMuX3RleHR1cmVzW3Jlc291cmNlRGVwZW5kZW5jeS5pZF07XHJcblx0XHRcdFx0dGV4LnRleHR1cmUgPSA8VGV4dHVyZTJEQmFzZT4gYXNzZXQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBpbmhlcml0RG9jXHJcblx0ICovXHJcblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3lGYWlsdXJlKHJlc291cmNlRGVwZW5kZW5jeTpSZXNvdXJjZURlcGVuZGVuY3kpOnZvaWRcclxuXHR7XHJcblx0XHQvLyBUT0RPOiBJbXBsZW1lbnRcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBpbmhlcml0RG9jXHJcblx0ICovXHJcblx0cHVibGljIF9wUHJvY2VlZFBhcnNpbmcoKTpib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLl9ieXRlRGF0YSkge1xyXG5cdFx0XHR0aGlzLl9ieXRlRGF0YSA9IHRoaXMuX3BHZXRCeXRlRGF0YSgpO1xyXG5cdFx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiA9IDA7XHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly8gTElUVExFX0VORElBTiAtIERlZmF1bHQgZm9yIEFycmF5QnVmZmVyIC8gTm90IGltcGxlbWVudGVkIGluIEJ5dGVBcnJheVxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly90aGlzLl9ieXRlRGF0YS5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjsvLyBTaG91bGQgYmUgZGVmYXVsdFxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdHRoaXMuX3RleHR1cmVzID0ge307XHJcblx0XHRcdHRoaXMuX21hdGVyaWFscyA9IHt9O1xyXG5cdFx0XHR0aGlzLl91bmZpbmFsaXplZF9vYmplY3RzID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVE9ETzogV2l0aCB0aGlzIGNvbnN0cnVjdCwgdGhlIGxvb3Agd2lsbCBydW4gbm8tb3AgZm9yIGFzIGxvbmdcclxuXHRcdC8vIGFzIHRoZXJlIGlzIHRpbWUgb25jZSBmaWxlIGhhcyBmaW5pc2hlZCByZWFkaW5nLiBDb25zaWRlciBhIG5pY2VcclxuXHRcdC8vIHdheSB0byBzdG9wIGxvb3Agd2hlbiBieXRlIGFycmF5IGlzIGVtcHR5LCB3aXRob3V0IHB1dHRpbmcgaXQgaW5cclxuXHRcdC8vIHRoZSB3aGlsZS1jb25kaXRpb25hbCwgd2hpY2ggd2lsbCBwcmV2ZW50IGZpbmFsaXphdGlvbnMgZnJvbVxyXG5cdFx0Ly8gaGFwcGVuaW5nIGFmdGVyIHRoZSBsYXN0IGNodW5rLlxyXG5cdFx0d2hpbGUgKHRoaXMuX3BIYXNUaW1lKCkpIHtcclxuXHJcblx0XHRcdC8vIElmIHdlIGFyZSBjdXJyZW50bHkgd29ya2luZyBvbiBhbiBvYmplY3QsIGFuZCB0aGUgbW9zdCByZWNlbnQgY2h1bmsgd2FzXHJcblx0XHRcdC8vIHRoZSBsYXN0IG9uZSBpbiB0aGF0IG9iamVjdCwgZmluYWxpemUgdGhlIGN1cnJlbnQgb2JqZWN0LlxyXG5cdFx0XHRpZiAodGhpcy5fY3VyX21hdCAmJiB0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiA+PSB0aGlzLl9jdXJfbWF0X2VuZClcclxuXHRcdFx0XHR0aGlzLmZpbmFsaXplQ3VycmVudE1hdGVyaWFsKCk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuX2N1cl9vYmogJiYgdGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPj0gdGhpcy5fY3VyX29ial9lbmQpIHtcclxuXHRcdFx0XHQvLyBDYW4ndCBmaW5hbGl6ZSBhdCB0aGlzIHBvaW50LCBiZWNhdXNlIHdlIGhhdmUgdG8gd2FpdCB1bnRpbCB0aGUgZnVsbFxyXG5cdFx0XHRcdC8vIGFuaW1hdGlvbiBzZWN0aW9uIGhhcyBiZWVuIHBhcnNlZCBmb3IgYW55IHBvdGVudGlhbCBwaXZvdCBkZWZpbml0aW9uc1xyXG5cdFx0XHRcdHRoaXMuX3VuZmluYWxpemVkX29iamVjdHNbdGhpcy5fY3VyX29iai5uYW1lXSA9IHRoaXMuX2N1cl9vYmo7XHJcblx0XHRcdFx0dGhpcy5fY3VyX29ial9lbmQgPSBOdW1iZXIuTUFYX1ZBTFVFIC8qdWludCovO1xyXG5cdFx0XHRcdHRoaXMuX2N1cl9vYmogPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSA+IDApIHtcclxuXHRcdFx0XHR2YXIgY2lkOm51bWJlciAvKnVpbnQqLztcclxuXHRcdFx0XHR2YXIgbGVuOm51bWJlciAvKnVpbnQqLztcclxuXHRcdFx0XHR2YXIgZW5kOm51bWJlciAvKnVpbnQqLztcclxuXHJcblx0XHRcdFx0Y2lkID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0XHRsZW4gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHRcdFx0XHRlbmQgPSB0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiArIChsZW4gLSA2KTtcclxuXHJcblx0XHRcdFx0c3dpdGNoIChjaWQpIHtcclxuXHRcdFx0XHRcdGNhc2UgMHg0RDREOiAvLyBNQUlOM0RTXHJcblx0XHRcdFx0XHRjYXNlIDB4M0QzRDogLy8gRURJVDNEU1xyXG5cdFx0XHRcdFx0Y2FzZSAweEIwMDA6IC8vIEtFWUYzRFNcclxuXHRcdFx0XHRcdFx0Ly8gVGhpcyB0eXBlcyBhcmUgXCJjb250YWluZXIgY2h1bmtzXCIgYW5kIGNvbnRhaW4gb25seVxyXG5cdFx0XHRcdFx0XHQvLyBzdWItY2h1bmtzIChubyBkYXRhIG9uIHRoZWlyIG93bi4pIFRoaXMgbWVhbnMgdGhhdFxyXG5cdFx0XHRcdFx0XHQvLyB0aGVyZSBpcyBub3RoaW5nIG1vcmUgdG8gcGFyc2UgYXQgdGhpcyBwb2ludCwgYW5kXHJcblx0XHRcdFx0XHRcdC8vIGluc3RlYWQgd2Ugc2hvdWxkIHByb2dyZXNzIHRvIHRoZSBuZXh0IGNodW5rLCB3aGljaFxyXG5cdFx0XHRcdFx0XHQvLyB3aWxsIGJlIHRoZSBmaXJzdCBzdWItY2h1bmsgb2YgdGhpcyBvbmUuXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDB4QUZGRjogLy8gTUFURVJJQUxcclxuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX21hdF9lbmQgPSBlbmQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2N1cl9tYXQgPSB0aGlzLnBhcnNlTWF0ZXJpYWwoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAweDQwMDA6IC8vIEVESVRfT0JKRUNUXHJcblx0XHRcdFx0XHRcdHRoaXMuX2N1cl9vYmpfZW5kID0gZW5kO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9jdXJfb2JqID0gbmV3IE9iamVjdFZPKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2N1cl9vYmoubmFtZSA9IHRoaXMucmVhZE51bFRlcm1zdHJpbmcoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX29iai5tYXRlcmlhbHMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9jdXJfb2JqLm1hdGVyaWFsRmFjZXMgPSB7fTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAweDQxMDA6IC8vIE9CSl9UUklNRVNIXHJcblx0XHRcdFx0XHRcdHRoaXMuX2N1cl9vYmoudHlwZSA9IE1lc2guYXNzZXRUeXBlO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDB4NDExMDogLy8gVFJJX1ZFUlRFWExcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJzZVZlcnRleExpc3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAweDQxMjA6IC8vIFRSSV9GQUNFTElTVFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcnNlRmFjZUxpc3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAweDQxNDA6IC8vIFRSSV9NQVBQSU5HQ09PUkRTXHJcblx0XHRcdFx0XHRcdHRoaXMucGFyc2VVVkxpc3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAweDQxMzA6IC8vIEZhY2UgbWF0ZXJpYWxzXHJcblx0XHRcdFx0XHRcdHRoaXMucGFyc2VGYWNlTWF0ZXJpYWxMaXN0KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgMHg0MTYwOiAvLyBUcmFuc2Zvcm1cclxuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX29iai50cmFuc2Zvcm0gPSB0aGlzLnJlYWRUcmFuc2Zvcm0oKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAweEIwMDI6IC8vIE9iamVjdCBhbmltYXRpb24gKGluY2x1ZGluZyBwaXZvdClcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJzZU9iamVjdEFuaW1hdGlvbihlbmQpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDB4NDE1MDogLy8gU21vb3RoaW5nIGdyb3Vwc1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcnNlU21vb3RoaW5nR3JvdXBzKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdC8vIFNraXAgdGhpcyAodW5rbm93bikgY2h1bmtcclxuXHRcdFx0XHRcdFx0dGhpcy5fYnl0ZURhdGEucG9zaXRpb24gKz0gKGxlbiAtIDYpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFBhdXNlIHBhcnNpbmcgaWYgdGhlcmUgd2VyZSBhbnkgZGVwZW5kZW5jaWVzIGZvdW5kIGR1cmluZyB0aGlzXHJcblx0XHRcdFx0Ly8gaXRlcmF0aW9uIChpLmUuIGlmIHRoZXJlIGFyZSBhbnkgZGVwZW5kZW5jaWVzIHRoYXQgbmVlZCB0byBiZVxyXG5cdFx0XHRcdC8vIHJldHJpZXZlZCBhdCB0aGlzIHRpbWUuKVxyXG5cdFx0XHRcdGlmICh0aGlzLmRlcGVuZGVuY2llcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3BQYXVzZUFuZFJldHJpZXZlRGVwZW5kZW5jaWVzKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBNb3JlIHBhcnNpbmcgaXMgcmVxdWlyZWQgaWYgdGhlIGVudGlyZSBieXRlIGFycmF5IGhhcyBub3QgeWV0XHJcblx0XHQvLyBiZWVuIHJlYWQsIG9yIGlmIHRoZXJlIGlzIGEgY3VycmVudGx5IG5vbi1maW5hbGl6ZWQgb2JqZWN0IGluXHJcblx0XHQvLyB0aGUgcGlwZWxpbmUuXHJcblx0XHRpZiAodGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSB8fCB0aGlzLl9jdXJfb2JqIHx8IHRoaXMuX2N1cl9tYXQpIHtcclxuXHRcdFx0cmV0dXJuIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBuYW1lOnN0cmluZztcclxuXHJcblx0XHRcdC8vIEZpbmFsaXplIGFueSByZW1haW5pbmcgb2JqZWN0cyBiZWZvcmUgZW5kaW5nLlxyXG5cdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5fdW5maW5hbGl6ZWRfb2JqZWN0cykge1xyXG5cdFx0XHRcdHZhciBvYmo6RGlzcGxheU9iamVjdENvbnRhaW5lcjtcclxuXHRcdFx0XHRvYmogPSB0aGlzLmNvbnN0cnVjdE9iamVjdCh0aGlzLl91bmZpbmFsaXplZF9vYmplY3RzW25hbWVdKTtcclxuXHRcdFx0XHRpZiAob2JqKSB7XHJcblx0XHRcdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG5cdFx0XHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQob2JqKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldChvYmosIG5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIF9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQ6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHN1cGVyLl9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQpO1xyXG5cclxuXHRcdC8vY3JlYXRlIGEgY29udGVudCBvYmplY3QgZm9yIExvYWRlcnNcclxuXHRcdHRoaXMuX3BDb250ZW50ID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VNYXRlcmlhbCgpOk1hdGVyaWFsVk9cclxuXHR7XHJcblx0XHR2YXIgbWF0Ok1hdGVyaWFsVk87XHJcblxyXG5cdFx0bWF0ID0gbmV3IE1hdGVyaWFsVk8oKTtcclxuXHJcblx0XHR3aGlsZSAodGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPCB0aGlzLl9jdXJfbWF0X2VuZCkge1xyXG5cdFx0XHR2YXIgY2lkOm51bWJlciAvKnVpbnQqLztcclxuXHRcdFx0dmFyIGxlbjpudW1iZXIgLyp1aW50Ki87XHJcblx0XHRcdHZhciBlbmQ6bnVtYmVyIC8qdWludCovO1xyXG5cclxuXHRcdFx0Y2lkID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0bGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdGVuZCA9IHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uICsgKGxlbiAtIDYpO1xyXG5cclxuXHRcdFx0c3dpdGNoIChjaWQpIHtcclxuXHRcdFx0XHRjYXNlIDB4QTAwMDogLy8gTWF0ZXJpYWwgbmFtZVxyXG5cdFx0XHRcdFx0bWF0Lm5hbWUgPSB0aGlzLnJlYWROdWxUZXJtc3RyaW5nKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAweEEwMTA6IC8vIEFtYmllbnQgY29sb3JcclxuXHRcdFx0XHRcdG1hdC5hbWJpZW50Q29sb3IgPSB0aGlzLnJlYWRDb2xvcigpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMHhBMDIwOiAvLyBEaWZmdXNlIGNvbG9yXHJcblx0XHRcdFx0XHRtYXQuZGlmZnVzZUNvbG9yID0gdGhpcy5yZWFkQ29sb3IoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDB4QTAzMDogLy8gU3BlY3VsYXIgY29sb3JcclxuXHRcdFx0XHRcdG1hdC5zcGVjdWxhckNvbG9yID0gdGhpcy5yZWFkQ29sb3IoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDB4QTA4MTogLy8gVHdvLXNpZGVkLCBleGlzdGVuY2UgaW5kaWNhdGVzIFwidHJ1ZVwiXHJcblx0XHRcdFx0XHRtYXQudHdvU2lkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMHhBMjAwOiAvLyBNYWluIChjb2xvcikgdGV4dHVyZVxyXG5cdFx0XHRcdFx0bWF0LmNvbG9yTWFwID0gdGhpcy5wYXJzZVRleHR1cmUoZW5kKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDB4QTIwNDogLy8gU3BlY3VsYXIgbWFwXHJcblx0XHRcdFx0XHRtYXQuc3BlY3VsYXJNYXAgPSB0aGlzLnBhcnNlVGV4dHVyZShlbmQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiA9IGVuZDtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1hdDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VUZXh0dXJlKGVuZDpudW1iZXIgLyp1aW50Ki8pOlRleHR1cmVWT1xyXG5cdHtcclxuXHRcdHZhciB0ZXg6VGV4dHVyZVZPO1xyXG5cclxuXHRcdHRleCA9IG5ldyBUZXh0dXJlVk8oKTtcclxuXHJcblx0XHR3aGlsZSAodGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPCBlbmQpIHtcclxuXHRcdFx0dmFyIGNpZDpudW1iZXIgLyp1aW50Ki87XHJcblx0XHRcdHZhciBsZW46bnVtYmVyIC8qdWludCovO1xyXG5cclxuXHRcdFx0Y2lkID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0bGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKGNpZCkge1xyXG5cdFx0XHRcdGNhc2UgMHhBMzAwOlxyXG5cdFx0XHRcdFx0dGV4LnVybCA9IHRoaXMucmVhZE51bFRlcm1zdHJpbmcoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0Ly8gU2tpcCB0aGlzIHVua25vd24gdGV4dHVyZSBzdWItY2h1bmtcclxuXHRcdFx0XHRcdHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uICs9IChsZW4gLSA2KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fdGV4dHVyZXNbdGV4LnVybF0gPSB0ZXg7XHJcblx0XHR0aGlzLl9wQWRkRGVwZW5kZW5jeSh0ZXgudXJsLCBuZXcgVVJMUmVxdWVzdCh0ZXgudXJsKSk7XHJcblxyXG5cdFx0cmV0dXJuIHRleDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VWZXJ0ZXhMaXN0KCk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBpOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBsZW46bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIGNvdW50Om51bWJlciAvKnVpbnQqLztcclxuXHJcblx0XHRjb3VudCA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHR0aGlzLl9jdXJfb2JqLnZlcnRzID0gbmV3IEFycmF5PG51bWJlcj4oY291bnQqMyk7XHJcblxyXG5cdFx0aSA9IDA7XHJcblx0XHRsZW4gPSB0aGlzLl9jdXJfb2JqLnZlcnRzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpIDwgbGVuKSB7XHJcblx0XHRcdHZhciB4Om51bWJlciwgeTpudW1iZXIsIHo6bnVtYmVyO1xyXG5cclxuXHRcdFx0eCA9IHRoaXMuX2J5dGVEYXRhLnJlYWRGbG9hdCgpO1xyXG5cdFx0XHR5ID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XHJcblx0XHRcdHogPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTtcclxuXHJcblx0XHRcdHRoaXMuX2N1cl9vYmoudmVydHNbaSsrXSA9IHg7XHJcblx0XHRcdHRoaXMuX2N1cl9vYmoudmVydHNbaSsrXSA9IHo7XHJcblx0XHRcdHRoaXMuX2N1cl9vYmoudmVydHNbaSsrXSA9IHk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlRmFjZUxpc3QoKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIGxlbjpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgY291bnQ6bnVtYmVyIC8qdWludCovO1xyXG5cclxuXHRcdGNvdW50ID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHRoaXMuX2N1cl9vYmouaW5kaWNlcyA9IG5ldyBBcnJheTxudW1iZXI+KGNvdW50KjMpIC8qdWludCovO1xyXG5cclxuXHRcdGkgPSAwO1xyXG5cdFx0bGVuID0gdGhpcy5fY3VyX29iai5pbmRpY2VzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpIDwgbGVuKSB7XHJcblx0XHRcdHZhciBpMDpudW1iZXIgLyp1aW50Ki8sIGkxOm51bWJlciAvKnVpbnQqLywgaTI6bnVtYmVyIC8qdWludCovO1xyXG5cclxuXHRcdFx0aTAgPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cdFx0XHRpMSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRcdGkyID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHRcdHRoaXMuX2N1cl9vYmouaW5kaWNlc1tpKytdID0gaTA7XHJcblx0XHRcdHRoaXMuX2N1cl9vYmouaW5kaWNlc1tpKytdID0gaTI7XHJcblx0XHRcdHRoaXMuX2N1cl9vYmouaW5kaWNlc1tpKytdID0gaTE7XHJcblxyXG5cdFx0XHQvLyBTa2lwIFwiZmFjZSBpbmZvXCIsIGlycmVsZXZhbnQgaW4gQXdheTNEXHJcblx0XHRcdHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uICs9IDI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fY3VyX29iai5zbW9vdGhpbmdHcm91cHMgPSBuZXcgQXJyYXk8bnVtYmVyPihjb3VudCkgLyp1aW50Ki87XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlU21vb3RoaW5nR3JvdXBzKCk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBsZW46bnVtYmVyIC8qdWludCovID0gdGhpcy5fY3VyX29iai5pbmRpY2VzLmxlbmd0aC8zO1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qdWludCovID0gMDtcclxuXHRcdHdoaWxlIChpIDwgbGVuKSB7XHJcblx0XHRcdHRoaXMuX2N1cl9vYmouc21vb3RoaW5nR3JvdXBzW2ldID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XHJcblx0XHRcdGkrKztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VVVkxpc3QoKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qdWludCovO1xyXG5cdFx0dmFyIGxlbjpudW1iZXIgLyp1aW50Ki87XHJcblx0XHR2YXIgY291bnQ6bnVtYmVyIC8qdWludCovO1xyXG5cclxuXHRcdGNvdW50ID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdHRoaXMuX2N1cl9vYmoudXZzID0gbmV3IEFycmF5PG51bWJlcj4oY291bnQqMik7XHJcblxyXG5cdFx0aSA9IDA7XHJcblx0XHRsZW4gPSB0aGlzLl9jdXJfb2JqLnV2cy5sZW5ndGg7XHJcblx0XHR3aGlsZSAoaSA8IGxlbikge1xyXG5cdFx0XHR0aGlzLl9jdXJfb2JqLnV2c1tpKytdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XHJcblx0XHRcdHRoaXMuX2N1cl9vYmoudXZzW2krK10gPSAxLjAgLSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VGYWNlTWF0ZXJpYWxMaXN0KCk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBtYXQ6c3RyaW5nO1xyXG5cdFx0dmFyIGNvdW50Om51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBpOm51bWJlciAvKnVpbnQqLztcclxuXHRcdHZhciBmYWNlczpBcnJheTxudW1iZXI+IC8qdWludCovO1xyXG5cclxuXHRcdG1hdCA9IHRoaXMucmVhZE51bFRlcm1zdHJpbmcoKTtcclxuXHRcdGNvdW50ID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHJcblx0XHRmYWNlcyA9IG5ldyBBcnJheTxudW1iZXI+KGNvdW50KSAvKnVpbnQqLztcclxuXHRcdGkgPSAwO1xyXG5cdFx0d2hpbGUgKGkgPCBmYWNlcy5sZW5ndGgpXHJcblx0XHRcdGZhY2VzW2krK10gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRTaG9ydCgpO1xyXG5cclxuXHRcdHRoaXMuX2N1cl9vYmoubWF0ZXJpYWxzLnB1c2gobWF0KTtcclxuXHRcdHRoaXMuX2N1cl9vYmoubWF0ZXJpYWxGYWNlc1ttYXRdID0gZmFjZXM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlT2JqZWN0QW5pbWF0aW9uKGVuZDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgdm86T2JqZWN0Vk87XHJcblx0XHR2YXIgb2JqOkRpc3BsYXlPYmplY3RDb250YWluZXI7XHJcblx0XHR2YXIgcGl2b3Q6VmVjdG9yM0Q7XHJcblx0XHR2YXIgbmFtZTpzdHJpbmc7XHJcblx0XHR2YXIgaGllcjpudW1iZXIgLyp1aW50Ki87XHJcblxyXG5cdFx0Ly8gUGl2b3QgZGVmYXVsdHMgdG8gb3JpZ2luXHJcblx0XHRwaXZvdCA9IG5ldyBWZWN0b3IzRDtcclxuXHJcblx0XHR3aGlsZSAodGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPCBlbmQpIHtcclxuXHRcdFx0dmFyIGNpZDpudW1iZXIgLyp1aW50Ki87XHJcblx0XHRcdHZhciBsZW46bnVtYmVyIC8qdWludCovO1xyXG5cclxuXHRcdFx0Y2lkID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcclxuXHRcdFx0bGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKGNpZCkge1xyXG5cdFx0XHRcdGNhc2UgMHhiMDEwOiAvLyBOYW1lL2hpZXJhcmNoeVxyXG5cdFx0XHRcdFx0bmFtZSA9IHRoaXMucmVhZE51bFRlcm1zdHJpbmcoKTtcclxuXHRcdFx0XHRcdHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uICs9IDQ7XHJcblx0XHRcdFx0XHRoaWVyID0gdGhpcy5fYnl0ZURhdGEucmVhZFNob3J0KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAweGIwMTM6IC8vIFBpdm90XHJcblx0XHRcdFx0XHRwaXZvdC54ID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XHJcblx0XHRcdFx0XHRwaXZvdC56ID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XHJcblx0XHRcdFx0XHRwaXZvdC55ID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uICs9IChsZW4gLSA2KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWYgbmFtZSBpcyBcIiQkJERVTU1ZXCIgdGhpcyBpcyBhbiBlbXB0eSBvYmplY3QgKGUuZy4gYSBjb250YWluZXIpXHJcblx0XHQvLyBhbmQgd2lsbCBiZSBpZ25vcmVkIGluIHRoaXMgdmVyc2lvbiBvZiB0aGUgcGFyc2VyXHJcblx0XHQvLyBUT0RPOiBJbXBsZW1lbnQgY29udGFpbmVycyBpbiAzRFMgcGFyc2VyLlxyXG5cdFx0aWYgKG5hbWUgIT0gJyQkJERVTU1ZJyAmJiB0aGlzLl91bmZpbmFsaXplZF9vYmplY3RzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcblx0XHRcdHZvID0gdGhpcy5fdW5maW5hbGl6ZWRfb2JqZWN0c1tuYW1lXTtcclxuXHRcdFx0b2JqID0gdGhpcy5jb25zdHJ1Y3RPYmplY3Qodm8sIHBpdm90KTtcclxuXHJcblx0XHRcdGlmIChvYmopIHtcclxuXHRcdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG5cdFx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKG9iaik7XHJcblxyXG5cdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KG9iaiwgdm8ubmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRkZWxldGUgdGhpcy5fdW5maW5hbGl6ZWRfb2JqZWN0c1tuYW1lXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY29uc3RydWN0T2JqZWN0KG9iajpPYmplY3RWTywgcGl2b3Q6VmVjdG9yM0QgPSBudWxsKTpEaXNwbGF5T2JqZWN0Q29udGFpbmVyXHJcblx0e1xyXG5cdFx0aWYgKG9iai50eXBlID09IE1lc2guYXNzZXRUeXBlKSB7XHJcblx0XHRcdHZhciBpOm51bWJlciAvKnVpbnQqLztcclxuXHRcdFx0dmFyIHN1YjpUcmlhbmdsZVN1Ykdlb21ldHJ5O1xyXG5cdFx0XHR2YXIgZ2VvbTpHZW9tZXRyeTtcclxuXHRcdFx0dmFyIG1hdDpNYXRlcmlhbEJhc2U7XHJcblx0XHRcdHZhciBtZXNoOk1lc2g7XHJcblx0XHRcdHZhciBtdHg6TWF0cml4M0Q7XHJcblx0XHRcdHZhciB2ZXJ0aWNlczpBcnJheTxWZXJ0ZXhWTz47XHJcblx0XHRcdHZhciBmYWNlczpBcnJheTxGYWNlVk8+O1xyXG5cclxuXHRcdFx0aWYgKG9iai5tYXRlcmlhbHMubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRoZSBBd2F5M0QgM0RTIHBhcnNlciBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIG1hdGVyaWFscyBwZXIgbWVzaCBhdCB0aGlzIHBvaW50LlwiKTtcclxuXHJcblx0XHRcdC8vIElnbm9yZSBlbXB0eSBvYmplY3RzXHJcblx0XHRcdGlmICghb2JqLmluZGljZXMgfHwgb2JqLmluZGljZXMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR2ZXJ0aWNlcyA9IG5ldyBBcnJheTxWZXJ0ZXhWTz4ob2JqLnZlcnRzLmxlbmd0aC8zKTtcclxuXHRcdFx0ZmFjZXMgPSBuZXcgQXJyYXk8RmFjZVZPPihvYmouaW5kaWNlcy5sZW5ndGgvMyk7XHJcblxyXG5cdFx0XHR0aGlzLnByZXBhcmVEYXRhKHZlcnRpY2VzLCBmYWNlcywgb2JqKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLl91c2VTbW9vdGhpbmdHcm91cHMpXHJcblx0XHRcdFx0dGhpcy5hcHBseVNtb290aEdyb3Vwcyh2ZXJ0aWNlcywgZmFjZXMpO1xyXG5cclxuXHRcdFx0b2JqLnZlcnRzID0gbmV3IEFycmF5PG51bWJlcj4odmVydGljZXMubGVuZ3RoKjMpO1xyXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRvYmoudmVydHNbaSozXSA9IHZlcnRpY2VzW2ldLng7XHJcblx0XHRcdFx0b2JqLnZlcnRzW2kqMyArIDFdID0gdmVydGljZXNbaV0ueTtcclxuXHRcdFx0XHRvYmoudmVydHNbaSozICsgMl0gPSB2ZXJ0aWNlc1tpXS56O1xyXG5cdFx0XHR9XHJcblx0XHRcdG9iai5pbmRpY2VzID0gbmV3IEFycmF5PG51bWJlcj4oZmFjZXMubGVuZ3RoKjMpIC8qdWludCovO1xyXG5cclxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGZhY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0b2JqLmluZGljZXNbaSozXSA9IGZhY2VzW2ldLmE7XHJcblx0XHRcdFx0b2JqLmluZGljZXNbaSozICsgMV0gPSBmYWNlc1tpXS5iO1xyXG5cdFx0XHRcdG9iai5pbmRpY2VzW2kqMyArIDJdID0gZmFjZXNbaV0uYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9iai51dnMpIHtcclxuXHRcdFx0XHQvLyBJZiB0aGUgb2JqZWN0IGhhZCBVVnMgdG8gc3RhcnQgd2l0aCwgdXNlIFVWcyBnZW5lcmF0ZWQgYnlcclxuXHRcdFx0XHQvLyBzbW9vdGhpbmcgZ3JvdXAgc3BsaXR0aW5nIGFsZ29yaXRobS4gT3RoZXJ3aXNlIHRob3NlIFVWc1xyXG5cdFx0XHRcdC8vIHdpbGwgYmUgbm9uc2Vuc2UgYW5kIHNob3VsZCBiZSBza2lwcGVkLlxyXG5cdFx0XHRcdG9iai51dnMgPSBuZXcgQXJyYXk8bnVtYmVyPih2ZXJ0aWNlcy5sZW5ndGgqMik7XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRvYmoudXZzW2kqMl0gPSB2ZXJ0aWNlc1tpXS51O1xyXG5cdFx0XHRcdFx0b2JqLnV2c1tpKjIgKyAxXSA9IHZlcnRpY2VzW2ldLnY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRnZW9tID0gbmV3IEdlb21ldHJ5KCk7XHJcblxyXG5cdFx0XHQvLyBDb25zdHJ1Y3Qgc3ViLWdlb21ldHJpZXMgKHBvdGVudGlhbGx5IHNwbGl0dGluZyBidWZmZXJzKVxyXG5cdFx0XHQvLyBhbmQgYWRkIHRoZW0gdG8gZ2VvbWV0cnkuXHJcblx0XHRcdHN1YiA9IG5ldyBUcmlhbmdsZVN1Ykdlb21ldHJ5KHRydWUpO1xyXG5cdFx0XHRzdWIudXBkYXRlSW5kaWNlcyhvYmouaW5kaWNlcyk7XHJcblx0XHRcdHN1Yi51cGRhdGVQb3NpdGlvbnMob2JqLnZlcnRzKTtcclxuXHRcdFx0c3ViLnVwZGF0ZVVWcyhvYmoudXZzKTtcclxuXHJcblx0XHRcdGdlb20uYWRkU3ViR2VvbWV0cnkoc3ViKTtcclxuXHJcblx0XHRcdGlmIChvYmoubWF0ZXJpYWxzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR2YXIgbW5hbWU6c3RyaW5nO1xyXG5cdFx0XHRcdG1uYW1lID0gb2JqLm1hdGVyaWFsc1swXTtcclxuXHRcdFx0XHRtYXQgPSB0aGlzLl9tYXRlcmlhbHNbbW5hbWVdLm1hdGVyaWFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBcHBseSBwaXZvdCB0cmFuc2xhdGlvbiB0byBnZW9tZXRyeSBpZiBhIHBpdm90IHdhc1xyXG5cdFx0XHQvLyBmb3VuZCB3aGlsZSBwYXJzaW5nIHRoZSBrZXlmcmFtZSBjaHVuayBlYXJsaWVyLlxyXG5cdFx0XHRpZiAocGl2b3QpIHtcclxuXHRcdFx0XHRpZiAob2JqLnRyYW5zZm9ybSkge1xyXG5cdFx0XHRcdFx0Ly8gSWYgYSB0cmFuc2Zvcm0gd2FzIGZvdW5kIHdoaWxlIHBhcnNpbmcgdGhlXHJcblx0XHRcdFx0XHQvLyBvYmplY3QgY2h1bmssIHVzZSBpdCB0byBmaW5kIHRoZSBsb2NhbCBwaXZvdCB2ZWN0b3JcclxuXHRcdFx0XHRcdHZhciBkYXQ6QXJyYXk8bnVtYmVyPiA9IG9iai50cmFuc2Zvcm0uY29uY2F0KCk7XHJcblx0XHRcdFx0XHRkYXRbMTJdID0gMDtcclxuXHRcdFx0XHRcdGRhdFsxM10gPSAwO1xyXG5cdFx0XHRcdFx0ZGF0WzE0XSA9IDA7XHJcblx0XHRcdFx0XHRtdHggPSBuZXcgTWF0cml4M0QoZGF0KTtcclxuXHRcdFx0XHRcdHBpdm90ID0gbXR4LnRyYW5zZm9ybVZlY3RvcihwaXZvdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRwaXZvdC5zY2FsZUJ5KC0xKTtcclxuXHJcblx0XHRcdFx0bXR4ID0gbmV3IE1hdHJpeDNEKCk7XHJcblx0XHRcdFx0bXR4LmFwcGVuZFRyYW5zbGF0aW9uKHBpdm90LngsIHBpdm90LnksIHBpdm90LnopO1xyXG5cdFx0XHRcdGdlb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihtdHgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBcHBseSB0cmFuc2Zvcm1hdGlvbiB0byBnZW9tZXRyeSBpZiBhIHRyYW5zZm9ybWF0aW9uXHJcblx0XHRcdC8vIHdhcyBmb3VuZCB3aGlsZSBwYXJzaW5nIHRoZSBvYmplY3QgY2h1bmsgZWFybGllci5cclxuXHRcdFx0aWYgKG9iai50cmFuc2Zvcm0pIHtcclxuXHRcdFx0XHRtdHggPSBuZXcgTWF0cml4M0Qob2JqLnRyYW5zZm9ybSk7XHJcblx0XHRcdFx0bXR4LmludmVydCgpO1xyXG5cdFx0XHRcdGdlb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihtdHgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBGaW5hbCB0cmFuc2Zvcm0gYXBwbGllZCB0byBnZW9tZXRyeS4gRmluYWxpemUgdGhlIGdlb21ldHJ5LFxyXG5cdFx0XHQvLyB3aGljaCB3aWxsIG5vIGxvbmdlciBiZSBtb2RpZmllZCBhZnRlciB0aGlzIHBvaW50LlxyXG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldChnZW9tLCBvYmoubmFtZS5jb25jYXQoJ19nZW9tJykpO1xyXG5cclxuXHRcdFx0Ly8gQnVpbGQgbWVzaCBhbmQgcmV0dXJuIGl0XHJcblx0XHRcdG1lc2ggPSBuZXcgTWVzaChnZW9tLCBtYXQpO1xyXG5cdFx0XHRtZXNoLnRyYW5zZm9ybS5tYXRyaXgzRCA9IG5ldyBNYXRyaXgzRChvYmoudHJhbnNmb3JtKTtcclxuXHRcdFx0cmV0dXJuIG1lc2g7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWYgcmVhY2hlZCwgdW5rbm93blxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByZXBhcmVEYXRhKHZlcnRpY2VzOkFycmF5PFZlcnRleFZPPiwgZmFjZXM6QXJyYXk8RmFjZVZPPiwgb2JqOk9iamVjdFZPKTp2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY29udmVydCByYXcgT2JqZWN0Vk8ncyBkYXRhIHRvIHN0cnVjdHVyZWQgVmVydGV4Vk8gYW5kIEZhY2VWT1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki87XHJcblx0XHR2YXIgajpudW1iZXIgLyppbnQqLztcclxuXHRcdHZhciBrOm51bWJlciAvKmludCovO1xyXG5cdFx0dmFyIGxlbjpudW1iZXIgLyppbnQqLyA9IG9iai52ZXJ0cy5sZW5ndGg7XHJcblx0XHRmb3IgKGkgPSAwLCBqID0gMCwgayA9IDA7IGkgPCBsZW47KSB7XHJcblx0XHRcdHZhciB2OlZlcnRleFZPID0gbmV3IFZlcnRleFZPO1xyXG5cdFx0XHR2LnggPSBvYmoudmVydHNbaSsrXTtcclxuXHRcdFx0di55ID0gb2JqLnZlcnRzW2krK107XHJcblx0XHRcdHYueiA9IG9iai52ZXJ0c1tpKytdO1xyXG5cdFx0XHRpZiAob2JqLnV2cykge1xyXG5cdFx0XHRcdHYudSA9IG9iai51dnNbaisrXTtcclxuXHRcdFx0XHR2LnYgPSBvYmoudXZzW2orK107XHJcblx0XHRcdH1cclxuXHRcdFx0dmVydGljZXNbaysrXSA9IHY7XHJcblx0XHR9XHJcblx0XHRsZW4gPSBvYmouaW5kaWNlcy5sZW5ndGg7XHJcblx0XHRmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGxlbjspIHtcclxuXHRcdFx0dmFyIGY6RmFjZVZPID0gbmV3IEZhY2VWTygpO1xyXG5cdFx0XHRmLmEgPSBvYmouaW5kaWNlc1tpKytdO1xyXG5cdFx0XHRmLmIgPSBvYmouaW5kaWNlc1tpKytdO1xyXG5cdFx0XHRmLmMgPSBvYmouaW5kaWNlc1tpKytdO1xyXG5cdFx0XHRmLnNtb290aEdyb3VwID0gb2JqLnNtb290aGluZ0dyb3Vwc1trXSB8fCAwO1xyXG5cdFx0XHRmYWNlc1trKytdID0gZjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXBwbHlTbW9vdGhHcm91cHModmVydGljZXM6QXJyYXk8VmVydGV4Vk8+LCBmYWNlczpBcnJheTxGYWNlVk8+KTp2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY2xvbmUgdmVydGljZXMgYWNjb3JkaW5nIHRvIGZvbGxvd2luZyBydWxlOlxyXG5cdFx0Ly8gY2xvbmUgaWYgdmVydGV4J3MgaW4gZmFjZXMgZnJvbSBncm91cHMgMSsyIGFuZCAzXHJcblx0XHQvLyBkb24ndCBjbG9uZSBpZiB2ZXJ0ZXgncyBpbiBmYWNlcyBmcm9tIGdyb3VwcyAxKzIsIDMgYW5kIDErM1xyXG5cclxuXHRcdHZhciBpOm51bWJlciAvKmludCovO1xyXG5cdFx0dmFyIGo6bnVtYmVyIC8qaW50Ki87XHJcblx0XHR2YXIgazpudW1iZXIgLyppbnQqLztcclxuXHRcdHZhciBsOm51bWJlciAvKmludCovO1xyXG5cdFx0dmFyIGxlbjpudW1iZXIgLyppbnQqLztcclxuXHRcdHZhciBudW1WZXJ0czpudW1iZXIgLyp1aW50Ki8gPSB2ZXJ0aWNlcy5sZW5ndGg7XHJcblx0XHR2YXIgbnVtRmFjZXM6bnVtYmVyIC8qdWludCovID0gZmFjZXMubGVuZ3RoO1xyXG5cclxuXHRcdC8vIGV4dHJhY3QgZ3JvdXBzIGRhdGEgZm9yIHZlcnRpY2VzXHJcblx0XHR2YXIgdkdyb3VwczpBcnJheTxBcnJheTxudW1iZXI+PiAvKnVpbnQqLyA9IG5ldyBBcnJheTxBcnJheTxudW1iZXI+PihudW1WZXJ0cykgLyp1aW50Ki87XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtVmVydHM7IGkrKylcclxuXHRcdFx0dkdyb3Vwc1tpXSA9IG5ldyBBcnJheTxudW1iZXI+KCkgLyp1aW50Ki87XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtRmFjZXM7IGkrKykge1xyXG5cdFx0XHR2YXIgZmFjZTpGYWNlVk8gPSBmYWNlc1tpXTtcclxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IDM7IGorKykge1xyXG5cdFx0XHRcdHZhciBncm91cHM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IHZHcm91cHNbKGogPT0gMCk/IGZhY2UuYSA6ICgoaiA9PSAxKT8gZmFjZS5iIDogZmFjZS5jKV07XHJcblx0XHRcdFx0dmFyIGdyb3VwOm51bWJlciAvKnVpbnQqLyA9IGZhY2Uuc21vb3RoR3JvdXA7XHJcblx0XHRcdFx0Zm9yIChrID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XHJcblx0XHRcdFx0XHRpZiAoKGdyb3VwICYgZ3JvdXBzW2tdKSA+IDApIHtcclxuXHRcdFx0XHRcdFx0Z3JvdXAgfD0gZ3JvdXBzW2tdO1xyXG5cdFx0XHRcdFx0XHRncm91cHMuc3BsaWNlKGssIDEpO1xyXG5cdFx0XHRcdFx0XHRrID0gZ3JvdXBzLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdyb3Vwcy5wdXNoKGdyb3VwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gY2xvbmUgdmVydGljZXNcclxuXHRcdHZhciB2Q2xvbmVzOkFycmF5PEFycmF5PG51bWJlcj4+IC8qdWludCovID0gbmV3IEFycmF5PEFycmF5PG51bWJlcj4+KG51bVZlcnRzKSAvKnVpbnQqLztcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBudW1WZXJ0czsgaSsrKSB7XHJcblx0XHRcdGlmICgobGVuID0gdkdyb3Vwc1tpXS5sZW5ndGgpIDwgMSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0dmFyIGNsb25lczpBcnJheTxudW1iZXI+IC8qdWludCovID0gbmV3IEFycmF5PG51bWJlcj4obGVuKSAvKnVpbnQqLztcclxuXHRcdFx0dkNsb25lc1tpXSA9IGNsb25lcztcclxuXHRcdFx0Y2xvbmVzWzBdID0gaTtcclxuXHRcdFx0dmFyIHYwOlZlcnRleFZPID0gdmVydGljZXNbaV07XHJcblx0XHRcdGZvciAoaiA9IDE7IGogPCBsZW47IGorKykge1xyXG5cdFx0XHRcdHZhciB2MTpWZXJ0ZXhWTyA9IG5ldyBWZXJ0ZXhWTztcclxuXHRcdFx0XHR2MS54ID0gdjAueDtcclxuXHRcdFx0XHR2MS55ID0gdjAueTtcclxuXHRcdFx0XHR2MS56ID0gdjAuejtcclxuXHRcdFx0XHR2MS51ID0gdjAudTtcclxuXHRcdFx0XHR2MS52ID0gdjAudjtcclxuXHRcdFx0XHRjbG9uZXNbal0gPSB2ZXJ0aWNlcy5sZW5ndGg7XHJcblx0XHRcdFx0dmVydGljZXMucHVzaCh2MSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdG51bVZlcnRzID0gdmVydGljZXMubGVuZ3RoO1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBudW1GYWNlczsgaSsrKSB7XHJcblx0XHRcdGZhY2UgPSBmYWNlc1tpXTtcclxuXHRcdFx0Z3JvdXAgPSBmYWNlLnNtb290aEdyb3VwO1xyXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgMzsgaisrKSB7XHJcblx0XHRcdFx0ayA9IChqID09IDApPyBmYWNlLmEgOiAoKGogPT0gMSk/IGZhY2UuYiA6IGZhY2UuYyk7XHJcblx0XHRcdFx0Z3JvdXBzID0gdkdyb3Vwc1trXTtcclxuXHRcdFx0XHRsZW4gPSBncm91cHMubGVuZ3RoO1xyXG5cdFx0XHRcdGNsb25lcyA9IHZDbG9uZXNba107XHJcblx0XHRcdFx0Zm9yIChsID0gMDsgbCA8IGxlbjsgbCsrKSB7XHJcblx0XHRcdFx0XHRpZiAoKChncm91cCA9PSAwKSAmJiAoZ3JvdXBzW2xdID09IDApKSB8fCAoKGdyb3VwICYgZ3JvdXBzW2xdKSA+IDApKSB7XHJcblx0XHRcdFx0XHRcdHZhciBpbmRleDpudW1iZXIgLyp1aW50Ki8gPSBjbG9uZXNbbF07XHJcblx0XHRcdFx0XHRcdGlmIChncm91cCA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdmVydGV4IGlzIHVuaXF1ZSBpZiBubyBzbW9vdGhHcm91cCBmb3VuZFxyXG5cdFx0XHRcdFx0XHRcdGdyb3Vwcy5zcGxpY2UobCwgMSk7XHJcblx0XHRcdFx0XHRcdFx0Y2xvbmVzLnNwbGljZShsLCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoaiA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdGZhY2UuYSA9IGluZGV4OyBlbHNlIGlmIChqID09IDEpXHJcblx0XHRcdFx0XHRcdFx0ZmFjZS5iID0gaW5kZXg7IGVsc2VcclxuXHRcdFx0XHRcdFx0XHRmYWNlLmMgPSBpbmRleDtcclxuXHRcdFx0XHRcdFx0bCA9IGxlbjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZmluYWxpemVDdXJyZW50TWF0ZXJpYWwoKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIG1hdDpNZXRob2RNYXRlcmlhbDtcclxuXHJcblx0XHRpZiAodGhpcy5fY3VyX21hdC5jb2xvck1hcClcclxuXHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKHRoaXMuX2N1cl9tYXQuY29sb3JNYXAudGV4dHVyZSB8fCBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyLmdldERlZmF1bHRUZXh0dXJlKCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwodGhpcy5fY3VyX21hdC5hbWJpZW50Q29sb3IpO1xyXG5cclxuXHRcdG1hdC5kaWZmdXNlQ29sb3IgPSB0aGlzLl9jdXJfbWF0LmRpZmZ1c2VDb2xvcjtcclxuXHRcdG1hdC5zcGVjdWxhckNvbG9yID0gdGhpcy5fY3VyX21hdC5zcGVjdWxhckNvbG9yO1xyXG5cclxuXHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA+PSAyKVxyXG5cdFx0XHRtYXQubW9kZSA9IE1ldGhvZE1hdGVyaWFsTW9kZS5NVUxUSV9QQVNTXHJcblxyXG5cdFx0bWF0LmJvdGhTaWRlcyA9IHRoaXMuX2N1cl9tYXQudHdvU2lkZWQ7XHJcblxyXG5cdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQobWF0LCB0aGlzLl9jdXJfbWF0Lm5hbWUpO1xyXG5cclxuXHRcdHRoaXMuX21hdGVyaWFsc1t0aGlzLl9jdXJfbWF0Lm5hbWVdID0gdGhpcy5fY3VyX21hdDtcclxuXHRcdHRoaXMuX2N1cl9tYXQubWF0ZXJpYWwgPSBtYXQ7XHJcblxyXG5cdFx0dGhpcy5fY3VyX21hdCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlYWROdWxUZXJtc3RyaW5nKCk6c3RyaW5nXHJcblx0e1xyXG5cdFx0dmFyIGNocjpudW1iZXIgLyppbnQqLztcclxuXHRcdHZhciBzdHI6c3RyaW5nID0gXCJcIjtcclxuXHJcblx0XHR3aGlsZSAoKGNociA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKSkgPiAwKVxyXG5cdFx0XHRzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xyXG5cclxuXHRcdHJldHVybiBzdHI7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlYWRUcmFuc2Zvcm0oKTpBcnJheTxudW1iZXI+XHJcblx0e1xyXG5cdFx0dmFyIGRhdGE6QXJyYXk8bnVtYmVyPjtcclxuXHJcblx0XHRkYXRhID0gbmV3IEFycmF5PG51bWJlcj4oMTYpO1xyXG5cclxuXHRcdC8vIFggYXhpc1xyXG5cdFx0ZGF0YVswXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRGbG9hdCgpOyAvLyBYXHJcblx0XHRkYXRhWzJdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7IC8vIFpcclxuXHRcdGRhdGFbMV0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWVxyXG5cdFx0ZGF0YVszXSA9IDA7XHJcblxyXG5cdFx0Ly8gWiBheGlzXHJcblx0XHRkYXRhWzhdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7IC8vIFhcclxuXHRcdGRhdGFbMTBdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7IC8vIFpcclxuXHRcdGRhdGFbOV0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWVxyXG5cdFx0ZGF0YVsxMV0gPSAwO1xyXG5cclxuXHRcdC8vIFkgQXhpc1xyXG5cdFx0ZGF0YVs0XSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRGbG9hdCgpOyAvLyBYXHJcblx0XHRkYXRhWzZdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7IC8vIFpcclxuXHRcdGRhdGFbNV0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWVxyXG5cdFx0ZGF0YVs3XSA9IDA7XHJcblxyXG5cdFx0Ly8gVHJhbnNsYXRpb25cclxuXHRcdGRhdGFbMTJdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7IC8vIFhcclxuXHRcdGRhdGFbMTRdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7IC8vIFpcclxuXHRcdGRhdGFbMTNdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7IC8vIFlcclxuXHRcdGRhdGFbMTVdID0gMTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVhZENvbG9yKCk6bnVtYmVyIC8qaW50Ki9cclxuXHR7XHJcblx0XHR2YXIgY2lkOm51bWJlciAvKmludCovO1xyXG5cdFx0dmFyIGxlbjpudW1iZXIgLyppbnQqLztcclxuXHRcdHZhciByOm51bWJlciAvKmludCovLCBnOm51bWJlciAvKmludCovLCBiOm51bWJlciAvKmludCovO1xyXG5cclxuXHRcdGNpZCA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XHJcblx0XHRsZW4gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRJbnQoKTtcclxuXHJcblx0XHRzd2l0Y2ggKGNpZCkge1xyXG5cdFx0XHRjYXNlIDB4MDAxMDogLy8gRmxvYXRzXHJcblx0XHRcdFx0ciA9IHRoaXMuX2J5dGVEYXRhLnJlYWRGbG9hdCgpKjI1NTtcclxuXHRcdFx0XHRnID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCkqMjU1O1xyXG5cdFx0XHRcdGIgPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKSoyNTU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMHgwMDExOiAvLyAyNC1iaXQgY29sb3JcclxuXHRcdFx0XHRyID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkQnl0ZSgpO1xyXG5cdFx0XHRcdGcgPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRCeXRlKCk7XHJcblx0XHRcdFx0YiA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiArPSAobGVuIC0gNik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIChyIDw8IDE2KSB8IChnIDw8IDgpIHwgYjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCA9IE1heDNEU1BhcnNlcjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgRmFjZVZPXHJcbntcclxuXHRwdWJsaWMgYTpudW1iZXIgLyppbnQqLztcclxuXHRwdWJsaWMgYjpudW1iZXIgLyppbnQqLztcclxuXHRwdWJsaWMgYzpudW1iZXIgLyppbnQqLztcclxuXHRwdWJsaWMgc21vb3RoR3JvdXA6bnVtYmVyIC8qaW50Ki87XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgTWF0ZXJpYWxWT1xyXG57XHJcblx0cHVibGljIG5hbWU6c3RyaW5nO1xyXG5cdHB1YmxpYyBhbWJpZW50Q29sb3I6bnVtYmVyIC8qaW50Ki87XHJcblx0cHVibGljIGRpZmZ1c2VDb2xvcjpudW1iZXIgLyppbnQqLztcclxuXHRwdWJsaWMgc3BlY3VsYXJDb2xvcjpudW1iZXIgLyppbnQqLztcclxuXHRwdWJsaWMgdHdvU2lkZWQ6Ym9vbGVhbjtcclxuXHRwdWJsaWMgY29sb3JNYXA6VGV4dHVyZVZPO1xyXG5cdHB1YmxpYyBzcGVjdWxhck1hcDpUZXh0dXJlVk87XHJcblx0cHVibGljIG1hdGVyaWFsOk1hdGVyaWFsQmFzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RWT1xyXG57XHJcblx0cHVibGljIG5hbWU6c3RyaW5nO1xyXG5cdHB1YmxpYyB0eXBlOnN0cmluZztcclxuXHRwdWJsaWMgcGl2b3RYOm51bWJlcjtcclxuXHRwdWJsaWMgcGl2b3RZOm51bWJlcjtcclxuXHRwdWJsaWMgcGl2b3RaOm51bWJlcjtcclxuXHRwdWJsaWMgdHJhbnNmb3JtOkFycmF5PG51bWJlcj47XHJcblx0cHVibGljIHZlcnRzOkFycmF5PG51bWJlcj47XHJcblx0cHVibGljIGluZGljZXM6QXJyYXk8bnVtYmVyPiAvKmludCovO1xyXG5cdHB1YmxpYyB1dnM6QXJyYXk8bnVtYmVyPjtcclxuXHRwdWJsaWMgbWF0ZXJpYWxGYWNlczpPYmplY3Q7XHJcblx0cHVibGljIG1hdGVyaWFsczpBcnJheTxzdHJpbmc+O1xyXG5cdHB1YmxpYyBzbW9vdGhpbmdHcm91cHM6QXJyYXk8bnVtYmVyPiAvKmludCovO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIFRleHR1cmVWT1xyXG57XHJcblx0cHVibGljIHVybDpzdHJpbmc7XHJcblx0cHVibGljIHRleHR1cmU6VGV4dHVyZTJEQmFzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBWZXJ0ZXhWT1xyXG57XHJcblx0cHVibGljIHg6bnVtYmVyO1xyXG5cdHB1YmxpYyB5Om51bWJlcjtcclxuXHRwdWJsaWMgejpudW1iZXI7XHJcblx0cHVibGljIHU6bnVtYmVyO1xyXG5cdHB1YmxpYyB2Om51bWJlcjtcclxuXHRwdWJsaWMgbm9ybWFsOlZlY3RvcjNEO1xyXG5cdHB1YmxpYyB0YW5nZW50OlZlY3RvcjNEO1xyXG59Il19