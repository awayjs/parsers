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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9NYXgzRFNQYXJzZXIudHMiXSwibmFtZXMiOlsiTWF4M0RTUGFyc2VyIiwiTWF4M0RTUGFyc2VyLmNvbnN0cnVjdG9yIiwiTWF4M0RTUGFyc2VyLnN1cHBvcnRzVHlwZSIsIk1heDNEU1BhcnNlci5zdXBwb3J0c0RhdGEiLCJNYXgzRFNQYXJzZXIuX2lSZXNvbHZlRGVwZW5kZW5jeSIsIk1heDNEU1BhcnNlci5faVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZSIsIk1heDNEU1BhcnNlci5fcFByb2NlZWRQYXJzaW5nIiwiTWF4M0RTUGFyc2VyLl9wU3RhcnRQYXJzaW5nIiwiTWF4M0RTUGFyc2VyLnBhcnNlTWF0ZXJpYWwiLCJNYXgzRFNQYXJzZXIucGFyc2VUZXh0dXJlIiwiTWF4M0RTUGFyc2VyLnBhcnNlVmVydGV4TGlzdCIsIk1heDNEU1BhcnNlci5wYXJzZUZhY2VMaXN0IiwiTWF4M0RTUGFyc2VyLnBhcnNlU21vb3RoaW5nR3JvdXBzIiwiTWF4M0RTUGFyc2VyLnBhcnNlVVZMaXN0IiwiTWF4M0RTUGFyc2VyLnBhcnNlRmFjZU1hdGVyaWFsTGlzdCIsIk1heDNEU1BhcnNlci5wYXJzZU9iamVjdEFuaW1hdGlvbiIsIk1heDNEU1BhcnNlci5jb25zdHJ1Y3RPYmplY3QiLCJNYXgzRFNQYXJzZXIucHJlcGFyZURhdGEiLCJNYXgzRFNQYXJzZXIuYXBwbHlTbW9vdGhHcm91cHMiLCJNYXgzRFNQYXJzZXIuZmluYWxpemVDdXJyZW50TWF0ZXJpYWwiLCJNYXgzRFNQYXJzZXIucmVhZE51bFRlcm1zdHJpbmciLCJNYXgzRFNQYXJzZXIucmVhZFRyYW5zZm9ybSIsIk1heDNEU1BhcnNlci5yZWFkQ29sb3IiLCJGYWNlVk8iLCJGYWNlVk8uY29uc3RydWN0b3IiLCJNYXRlcmlhbFZPIiwiTWF0ZXJpYWxWTy5jb25zdHJ1Y3RvciIsIk9iamVjdFZPIiwiT2JqZWN0Vk8uY29uc3RydWN0b3IiLCJUZXh0dXJlVk8iLCJUZXh0dXJl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QUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDNUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG1GQUFtRkEsQ0FBQ0EsQ0FBQ0E7WUFFbEdBLEFBQ0FBLHVCQUR1QkE7WUFDdkJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLElBQUlBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBO2dCQUMzQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFFYkEsUUFBUUEsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBV0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkRBLEtBQUtBLEdBQUdBLElBQUlBLEtBQUtBLENBQVNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEdBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRWhEQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxLQUFLQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUV2Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQTtnQkFDNUJBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFFekNBLEdBQUdBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLEtBQUtBLENBQVNBLFFBQVFBLENBQUNBLE1BQU1BLEdBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2pEQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDdENBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLEdBQUNBLENBQUNBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENB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QUFRQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUMvQ0EsSUFBSUEsUUFBUUEsR0FBbUJBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBO1FBRTVDQSxBQUNBQSxtQ0FEbUNBO1lBQy9CQSxPQUFPQSxHQUFpQ0EsSUFBSUEsS0FBS0EsQ0FBZ0JBLFFBQVFBLENBQUNBLENBQUNBLFFBQURBLEFBQVNBLENBQUNBO1FBQ3hGQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxRQUFRQSxFQUFFQSxDQUFDQSxFQUFFQTtZQUM1QkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsRUFBVUEsQ0FBVUE7UUFDM0NBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFFBQVFBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQy9CQSxJQUFJQSxJQUFJQSxHQUFVQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQ3hCQSxJQUFJQSxNQUFNQSxHQUEwQkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzVGQSxJQUFJQSxLQUFLQSxHQUFtQkEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0JBQzdDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtvQkFDekNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUM3QkEsS0FBS0EsSUFBSUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ25CQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcEJBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQUN2QkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBO2dCQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFDREEsQUFDQUEsaUJBRGlCQTtZQUNiQSxPQUFPQSxHQUFpQ0EsSUFBSUEsS0FBS0EsQ0FBZ0JBLFFBQVFBLENBQUNBLENBQUNBLFFBQURBLEFBQVNBLENBQUNBO1FBQ3hGQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxRQUFRQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUMvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxRQUFRQSxDQUFDQTtZQUNWQSxJQUFJQSxNQUFNQSxHQUEwQkEsSUFBSUEsS0FBS0EsQ0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsUUFBREEsQUFBU0EsQ0FBQ0E7WUFDcEVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBO1lBQ3BCQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNkQSxJQUFJQSxFQUFFQSxHQUFZQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQzFCQSxJQUFJQSxFQUFFQSxHQUFZQSxJQUFJQSxRQUFRQSxDQUFDQTtnQkFDL0JBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1pBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQzVCQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNuQkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFDREEsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFFM0JBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFFBQVFBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQy9CQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoQkEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7WUFDekJBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdB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QUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxJQUFJQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsSUFBSUE7UUFDMUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLElBQUlBO1FBQzFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVaQSxBQUNBQSxTQURTQTtRQUNUQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxJQUFJQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsSUFBSUE7UUFDM0NBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLElBQUlBO1FBQzFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUViQSxBQUNBQSxTQURTQTtRQUNUQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxJQUFJQTtRQUMxQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsSUFBSUE7UUFDMUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLElBQUlBO1FBQzFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVa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QTs7R0FERztJQUNHLFNBQVM7SUFBZkUsU0FBTUEsU0FBU0E7SUFJZkMsQ0FBQ0E7SUFBREQsZ0JBQUNBO0FBQURBLENBSkEsQUFJQ0EsSUFBQTtBQUVELEFBR0E7O0dBREc7SUFDRyxRQUFRO0lBQWRFLFNBQU1BLFFBQVFBO0lBU2RDLENBQUNBO0lBQURELGVBQUNBO0FBQURBLENBVEEsQUFTQ0EsSUFBQTtBQXBFRCxpQkFBUyxZQUFZLENBQUMiLCJmaWxlIjoiTWF4M0RTUGFyc2VyLmpzIiwic291cmNlUm9vdCI6Ii4uLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZW9tZXRyeVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvR2VvbWV0cnlcIik7XG5pbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcbmltcG9ydCBNYXRyaXgzRFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2dlb20vTWF0cml4M0RcIik7XG5pbXBvcnQgVmVjdG9yM0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1ZlY3RvcjNEXCIpO1xuaW1wb3J0IElBc3NldFx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2xpYnJhcnkvSUFzc2V0XCIpO1xuaW1wb3J0IFVSTExvYWRlckRhdGFGb3JtYXRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyRGF0YUZvcm1hdFwiKTtcbmltcG9ydCBVUkxSZXF1ZXN0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCIpO1xuaW1wb3J0IFBhcnNlckJhc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJCYXNlXCIpO1xuaW1wb3J0IFBhcnNlclV0aWxzXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3BhcnNlcnMvUGFyc2VyVXRpbHNcIik7XG5pbXBvcnQgUmVzb3VyY2VEZXBlbmRlbmN5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9SZXNvdXJjZURlcGVuZGVuY3lcIik7XG5pbXBvcnQgVGV4dHVyZTJEQmFzZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdGV4dHVyZXMvVGV4dHVyZTJEQmFzZVwiKTtcbmltcG9ydCBUZXh0dXJlQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlQmFzZVwiKTtcbmltcG9ydCBCeXRlQXJyYXlcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvQnl0ZUFycmF5XCIpO1xuXG5pbXBvcnQgRGlzcGxheU9iamVjdENvbnRhaW5lclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9jb250YWluZXJzL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XG5pbXBvcnQgTWVzaFx0XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvZW50aXRpZXMvTWVzaFwiKTtcbmltcG9ydCBEZWZhdWx0TWF0ZXJpYWxNYW5hZ2VyXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hbmFnZXJzL0RlZmF1bHRNYXRlcmlhbE1hbmFnZXJcIik7XG5pbXBvcnQgTWF0ZXJpYWxCYXNlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL21hdGVyaWFscy9NYXRlcmlhbEJhc2VcIik7XG5cbmltcG9ydCBNZXRob2RNYXRlcmlhbFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9NZXRob2RNYXRlcmlhbFwiKTtcbmltcG9ydCBNZXRob2RNYXRlcmlhbE1vZGVcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1tZXRob2RtYXRlcmlhbHMvbGliL01ldGhvZE1hdGVyaWFsTW9kZVwiKTtcblxuLyoqXG4gKiBNYXgzRFNQYXJzZXIgcHJvdmlkZXMgYSBwYXJzZXIgZm9yIHRoZSAzZHMgZGF0YSB0eXBlLlxuICovXG5jbGFzcyBNYXgzRFNQYXJzZXIgZXh0ZW5kcyBQYXJzZXJCYXNlXG57XG5cdHByaXZhdGUgX2J5dGVEYXRhOkJ5dGVBcnJheTtcblxuXHRwcml2YXRlIF90ZXh0dXJlczpPYmplY3Q7XG5cdHByaXZhdGUgX21hdGVyaWFsczpPYmplY3Q7XG5cdHByaXZhdGUgX3VuZmluYWxpemVkX29iamVjdHM6T2JqZWN0O1xuXG5cdHByaXZhdGUgX2N1cl9vYmpfZW5kOm51bWJlcjtcblx0cHJpdmF0ZSBfY3VyX29iajpPYmplY3RWTztcblxuXHRwcml2YXRlIF9jdXJfbWF0X2VuZDpudW1iZXI7XG5cdHByaXZhdGUgX2N1cl9tYXQ6TWF0ZXJpYWxWTztcblx0cHJpdmF0ZSBfdXNlU21vb3RoaW5nR3JvdXBzOmJvb2xlYW47XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgPGNvZGU+TWF4M0RTUGFyc2VyPC9jb2RlPiBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB1c2VTbW9vdGhpbmdHcm91cHMgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXJzZXIgbG9va3MgZm9yIHNtb290aGluZyBncm91cHMgaW4gdGhlIDNkcyBmaWxlIG9yIGFzc3VtZXMgdW5pZm9ybSBzbW9vdGhpbmcuIERlZmF1bHRzIHRvIHRydWUuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih1c2VTbW9vdGhpbmdHcm91cHM6Ym9vbGVhbiA9IHRydWUpXG5cdHtcblx0XHRzdXBlcihVUkxMb2FkZXJEYXRhRm9ybWF0LkFSUkFZX0JVRkZFUik7XG5cblx0XHR0aGlzLl91c2VTbW9vdGhpbmdHcm91cHMgPSB1c2VTbW9vdGhpbmdHcm91cHM7XG5cdH1cblxuXHQvKipcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gZmlsZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGJ5IHRoZSBwYXJzZXIuXG5cdCAqIEBwYXJhbSBleHRlbnNpb24gVGhlIGZpbGUgZXh0ZW5zaW9uIG9mIGEgcG90ZW50aWFsIGZpbGUgdG8gYmUgcGFyc2VkLlxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBmaWxlIHR5cGUgaXMgc3VwcG9ydGVkLlxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c1R5cGUoZXh0ZW5zaW9uOnN0cmluZyk6Ym9vbGVhblxuXHR7XG5cdFx0ZXh0ZW5zaW9uID0gZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIGV4dGVuc2lvbiA9PSBcIjNkc1wiO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRlc3RzIHdoZXRoZXIgYSBkYXRhIGJsb2NrIGNhbiBiZSBwYXJzZWQgYnkgdGhlIHBhcnNlci5cblx0ICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgYmxvY2sgdG8gcG90ZW50aWFsbHkgYmUgcGFyc2VkLlxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBkYXRhIGlzIHN1cHBvcnRlZC5cblx0ICovXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNEYXRhKGRhdGE6YW55KTpib29sZWFuXG5cdHtcblx0XHR2YXIgYmE6Qnl0ZUFycmF5O1xuXG5cdFx0YmEgPSBQYXJzZXJVdGlscy50b0J5dGVBcnJheShkYXRhKTtcblx0XHRpZiAoYmEpIHtcblx0XHRcdGJhLnBvc2l0aW9uID0gMDtcblx0XHRcdGlmIChiYS5yZWFkU2hvcnQoKSA9PSAweDRkNGQpXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9pUmVzb2x2ZURlcGVuZGVuY3kocmVzb3VyY2VEZXBlbmRlbmN5OlJlc291cmNlRGVwZW5kZW5jeSk6dm9pZFxuXHR7XG5cdFx0aWYgKHJlc291cmNlRGVwZW5kZW5jeS5hc3NldHMubGVuZ3RoID09IDEpIHtcblx0XHRcdHZhciBhc3NldDpJQXNzZXQ7XG5cblx0XHRcdGFzc2V0ID0gcmVzb3VyY2VEZXBlbmRlbmN5LmFzc2V0c1swXTtcblx0XHRcdGlmIChhc3NldC5pc0Fzc2V0KFRleHR1cmVCYXNlKSkge1xuXHRcdFx0XHR2YXIgdGV4OlRleHR1cmVWTztcblxuXHRcdFx0XHR0ZXggPSB0aGlzLl90ZXh0dXJlc1tyZXNvdXJjZURlcGVuZGVuY3kuaWRdO1xuXHRcdFx0XHR0ZXgudGV4dHVyZSA9IDxUZXh0dXJlMkRCYXNlPiBhc3NldDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHB1YmxpYyBfaVJlc29sdmVEZXBlbmRlbmN5RmFpbHVyZShyZXNvdXJjZURlcGVuZGVuY3k6UmVzb3VyY2VEZXBlbmRlbmN5KTp2b2lkXG5cdHtcblx0XHQvLyBUT0RPOiBJbXBsZW1lbnRcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cHVibGljIF9wUHJvY2VlZFBhcnNpbmcoKTpib29sZWFuXG5cdHtcblx0XHRpZiAoIXRoaXMuX2J5dGVEYXRhKSB7XG5cdFx0XHR0aGlzLl9ieXRlRGF0YSA9IHRoaXMuX3BHZXRCeXRlRGF0YSgpO1xuXHRcdFx0dGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPSAwO1xuXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcdC8vIExJVFRMRV9FTkRJQU4gLSBEZWZhdWx0IGZvciBBcnJheUJ1ZmZlciAvIE5vdCBpbXBsZW1lbnRlZCBpbiBCeXRlQXJyYXlcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFx0Ly90aGlzLl9ieXRlRGF0YS5lbmRpYW4gPSBFbmRpYW4uTElUVExFX0VORElBTjsvLyBTaG91bGQgYmUgZGVmYXVsdFxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRcdHRoaXMuX3RleHR1cmVzID0ge307XG5cdFx0XHR0aGlzLl9tYXRlcmlhbHMgPSB7fTtcblx0XHRcdHRoaXMuX3VuZmluYWxpemVkX29iamVjdHMgPSB7fTtcblx0XHR9XG5cblx0XHQvLyBUT0RPOiBXaXRoIHRoaXMgY29uc3RydWN0LCB0aGUgbG9vcCB3aWxsIHJ1biBuby1vcCBmb3IgYXMgbG9uZ1xuXHRcdC8vIGFzIHRoZXJlIGlzIHRpbWUgb25jZSBmaWxlIGhhcyBmaW5pc2hlZCByZWFkaW5nLiBDb25zaWRlciBhIG5pY2Vcblx0XHQvLyB3YXkgdG8gc3RvcCBsb29wIHdoZW4gYnl0ZSBhcnJheSBpcyBlbXB0eSwgd2l0aG91dCBwdXR0aW5nIGl0IGluXG5cdFx0Ly8gdGhlIHdoaWxlLWNvbmRpdGlvbmFsLCB3aGljaCB3aWxsIHByZXZlbnQgZmluYWxpemF0aW9ucyBmcm9tXG5cdFx0Ly8gaGFwcGVuaW5nIGFmdGVyIHRoZSBsYXN0IGNodW5rLlxuXHRcdHdoaWxlICh0aGlzLl9wSGFzVGltZSgpKSB7XG5cblx0XHRcdC8vIElmIHdlIGFyZSBjdXJyZW50bHkgd29ya2luZyBvbiBhbiBvYmplY3QsIGFuZCB0aGUgbW9zdCByZWNlbnQgY2h1bmsgd2FzXG5cdFx0XHQvLyB0aGUgbGFzdCBvbmUgaW4gdGhhdCBvYmplY3QsIGZpbmFsaXplIHRoZSBjdXJyZW50IG9iamVjdC5cblx0XHRcdGlmICh0aGlzLl9jdXJfbWF0ICYmIHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uID49IHRoaXMuX2N1cl9tYXRfZW5kKVxuXHRcdFx0XHR0aGlzLmZpbmFsaXplQ3VycmVudE1hdGVyaWFsKCk7XG5cdFx0XHRlbHNlIGlmICh0aGlzLl9jdXJfb2JqICYmIHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uID49IHRoaXMuX2N1cl9vYmpfZW5kKSB7XG5cdFx0XHRcdC8vIENhbid0IGZpbmFsaXplIGF0IHRoaXMgcG9pbnQsIGJlY2F1c2Ugd2UgaGF2ZSB0byB3YWl0IHVudGlsIHRoZSBmdWxsXG5cdFx0XHRcdC8vIGFuaW1hdGlvbiBzZWN0aW9uIGhhcyBiZWVuIHBhcnNlZCBmb3IgYW55IHBvdGVudGlhbCBwaXZvdCBkZWZpbml0aW9uc1xuXHRcdFx0XHR0aGlzLl91bmZpbmFsaXplZF9vYmplY3RzW3RoaXMuX2N1cl9vYmoubmFtZV0gPSB0aGlzLl9jdXJfb2JqO1xuXHRcdFx0XHR0aGlzLl9jdXJfb2JqX2VuZCA9IE51bWJlci5NQVhfVkFMVUUgLyp1aW50Ki87XG5cdFx0XHRcdHRoaXMuX2N1cl9vYmogPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fYnl0ZURhdGEuZ2V0Qnl0ZXNBdmFpbGFibGUoKSA+IDApIHtcblx0XHRcdFx0dmFyIGNpZDpudW1iZXIgLyp1aW50Ki87XG5cdFx0XHRcdHZhciBsZW46bnVtYmVyIC8qdWludCovO1xuXHRcdFx0XHR2YXIgZW5kOm51bWJlciAvKnVpbnQqLztcblxuXHRcdFx0XHRjaWQgPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0XHRsZW4gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRJbnQoKTtcblx0XHRcdFx0ZW5kID0gdGhpcy5fYnl0ZURhdGEucG9zaXRpb24gKyAobGVuIC0gNik7XG5cblx0XHRcdFx0c3dpdGNoIChjaWQpIHtcblx0XHRcdFx0XHRjYXNlIDB4NEQ0RDogLy8gTUFJTjNEU1xuXHRcdFx0XHRcdGNhc2UgMHgzRDNEOiAvLyBFRElUM0RTXG5cdFx0XHRcdFx0Y2FzZSAweEIwMDA6IC8vIEtFWUYzRFNcblx0XHRcdFx0XHRcdC8vIFRoaXMgdHlwZXMgYXJlIFwiY29udGFpbmVyIGNodW5rc1wiIGFuZCBjb250YWluIG9ubHlcblx0XHRcdFx0XHRcdC8vIHN1Yi1jaHVua3MgKG5vIGRhdGEgb24gdGhlaXIgb3duLikgVGhpcyBtZWFucyB0aGF0XG5cdFx0XHRcdFx0XHQvLyB0aGVyZSBpcyBub3RoaW5nIG1vcmUgdG8gcGFyc2UgYXQgdGhpcyBwb2ludCwgYW5kXG5cdFx0XHRcdFx0XHQvLyBpbnN0ZWFkIHdlIHNob3VsZCBwcm9ncmVzcyB0byB0aGUgbmV4dCBjaHVuaywgd2hpY2hcblx0XHRcdFx0XHRcdC8vIHdpbGwgYmUgdGhlIGZpcnN0IHN1Yi1jaHVuayBvZiB0aGlzIG9uZS5cblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIDB4QUZGRjogLy8gTUFURVJJQUxcblx0XHRcdFx0XHRcdHRoaXMuX2N1cl9tYXRfZW5kID0gZW5kO1xuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX21hdCA9IHRoaXMucGFyc2VNYXRlcmlhbCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIDB4NDAwMDogLy8gRURJVF9PQkpFQ1Rcblx0XHRcdFx0XHRcdHRoaXMuX2N1cl9vYmpfZW5kID0gZW5kO1xuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX29iaiA9IG5ldyBPYmplY3RWTygpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX29iai5uYW1lID0gdGhpcy5yZWFkTnVsVGVybXN0cmluZygpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX29iai5tYXRlcmlhbHMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX29iai5tYXRlcmlhbEZhY2VzID0ge307XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgMHg0MTAwOiAvLyBPQkpfVFJJTUVTSFxuXHRcdFx0XHRcdFx0dGhpcy5fY3VyX29iai50eXBlID0gTWVzaC5hc3NldFR5cGU7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgMHg0MTEwOiAvLyBUUklfVkVSVEVYTFxuXHRcdFx0XHRcdFx0dGhpcy5wYXJzZVZlcnRleExpc3QoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSAweDQxMjA6IC8vIFRSSV9GQUNFTElTVFxuXHRcdFx0XHRcdFx0dGhpcy5wYXJzZUZhY2VMaXN0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgMHg0MTQwOiAvLyBUUklfTUFQUElOR0NPT1JEU1xuXHRcdFx0XHRcdFx0dGhpcy5wYXJzZVVWTGlzdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIDB4NDEzMDogLy8gRmFjZSBtYXRlcmlhbHNcblx0XHRcdFx0XHRcdHRoaXMucGFyc2VGYWNlTWF0ZXJpYWxMaXN0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgMHg0MTYwOiAvLyBUcmFuc2Zvcm1cblx0XHRcdFx0XHRcdHRoaXMuX2N1cl9vYmoudHJhbnNmb3JtID0gdGhpcy5yZWFkVHJhbnNmb3JtKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgMHhCMDAyOiAvLyBPYmplY3QgYW5pbWF0aW9uIChpbmNsdWRpbmcgcGl2b3QpXG5cdFx0XHRcdFx0XHR0aGlzLnBhcnNlT2JqZWN0QW5pbWF0aW9uKGVuZCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgMHg0MTUwOiAvLyBTbW9vdGhpbmcgZ3JvdXBzXG5cdFx0XHRcdFx0XHR0aGlzLnBhcnNlU21vb3RoaW5nR3JvdXBzKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHQvLyBTa2lwIHRoaXMgKHVua25vd24pIGNodW5rXG5cdFx0XHRcdFx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiArPSAobGVuIC0gNik7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFBhdXNlIHBhcnNpbmcgaWYgdGhlcmUgd2VyZSBhbnkgZGVwZW5kZW5jaWVzIGZvdW5kIGR1cmluZyB0aGlzXG5cdFx0XHRcdC8vIGl0ZXJhdGlvbiAoaS5lLiBpZiB0aGVyZSBhcmUgYW55IGRlcGVuZGVuY2llcyB0aGF0IG5lZWQgdG8gYmVcblx0XHRcdFx0Ly8gcmV0cmlldmVkIGF0IHRoaXMgdGltZS4pXG5cdFx0XHRcdGlmICh0aGlzLmRlcGVuZGVuY2llcy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLl9wUGF1c2VBbmRSZXRyaWV2ZURlcGVuZGVuY2llcygpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTW9yZSBwYXJzaW5nIGlzIHJlcXVpcmVkIGlmIHRoZSBlbnRpcmUgYnl0ZSBhcnJheSBoYXMgbm90IHlldFxuXHRcdC8vIGJlZW4gcmVhZCwgb3IgaWYgdGhlcmUgaXMgYSBjdXJyZW50bHkgbm9uLWZpbmFsaXplZCBvYmplY3QgaW5cblx0XHQvLyB0aGUgcGlwZWxpbmUuXG5cdFx0aWYgKHRoaXMuX2J5dGVEYXRhLmdldEJ5dGVzQXZhaWxhYmxlKCkgfHwgdGhpcy5fY3VyX29iaiB8fCB0aGlzLl9jdXJfbWF0KSB7XG5cdFx0XHRyZXR1cm4gUGFyc2VyQmFzZS5NT1JFX1RPX1BBUlNFO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbmFtZTpzdHJpbmc7XG5cblx0XHRcdC8vIEZpbmFsaXplIGFueSByZW1haW5pbmcgb2JqZWN0cyBiZWZvcmUgZW5kaW5nLlxuXHRcdFx0Zm9yIChuYW1lIGluIHRoaXMuX3VuZmluYWxpemVkX29iamVjdHMpIHtcblx0XHRcdFx0dmFyIG9iajpEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xuXHRcdFx0XHRvYmogPSB0aGlzLmNvbnN0cnVjdE9iamVjdCh0aGlzLl91bmZpbmFsaXplZF9vYmplY3RzW25hbWVdKTtcblx0XHRcdFx0aWYgKG9iaikge1xuXHRcdFx0XHRcdC8vYWRkIHRvIHRoZSBjb250ZW50IHByb3BlcnR5XG5cdFx0XHRcdFx0KDxEaXNwbGF5T2JqZWN0Q29udGFpbmVyPiB0aGlzLl9wQ29udGVudCkuYWRkQ2hpbGQob2JqKTtcblxuXHRcdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KG9iaiwgbmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBfcFN0YXJ0UGFyc2luZyhmcmFtZUxpbWl0Om51bWJlcilcblx0e1xuXHRcdHN1cGVyLl9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQpO1xuXG5cdFx0Ly9jcmVhdGUgYSBjb250ZW50IG9iamVjdCBmb3IgTG9hZGVyc1xuXHRcdHRoaXMuX3BDb250ZW50ID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VNYXRlcmlhbCgpOk1hdGVyaWFsVk9cblx0e1xuXHRcdHZhciBtYXQ6TWF0ZXJpYWxWTztcblxuXHRcdG1hdCA9IG5ldyBNYXRlcmlhbFZPKCk7XG5cblx0XHR3aGlsZSAodGhpcy5fYnl0ZURhdGEucG9zaXRpb24gPCB0aGlzLl9jdXJfbWF0X2VuZCkge1xuXHRcdFx0dmFyIGNpZDpudW1iZXIgLyp1aW50Ki87XG5cdFx0XHR2YXIgbGVuOm51bWJlciAvKnVpbnQqLztcblx0XHRcdHZhciBlbmQ6bnVtYmVyIC8qdWludCovO1xuXG5cdFx0XHRjaWQgPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXHRcdFx0bGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XG5cdFx0XHRlbmQgPSB0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiArIChsZW4gLSA2KTtcblxuXHRcdFx0c3dpdGNoIChjaWQpIHtcblx0XHRcdFx0Y2FzZSAweEEwMDA6IC8vIE1hdGVyaWFsIG5hbWVcblx0XHRcdFx0XHRtYXQubmFtZSA9IHRoaXMucmVhZE51bFRlcm1zdHJpbmcoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDB4QTAxMDogLy8gQW1iaWVudCBjb2xvclxuXHRcdFx0XHRcdG1hdC5hbWJpZW50Q29sb3IgPSB0aGlzLnJlYWRDb2xvcigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMHhBMDIwOiAvLyBEaWZmdXNlIGNvbG9yXG5cdFx0XHRcdFx0bWF0LmRpZmZ1c2VDb2xvciA9IHRoaXMucmVhZENvbG9yKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAweEEwMzA6IC8vIFNwZWN1bGFyIGNvbG9yXG5cdFx0XHRcdFx0bWF0LnNwZWN1bGFyQ29sb3IgPSB0aGlzLnJlYWRDb2xvcigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMHhBMDgxOiAvLyBUd28tc2lkZWQsIGV4aXN0ZW5jZSBpbmRpY2F0ZXMgXCJ0cnVlXCJcblx0XHRcdFx0XHRtYXQudHdvU2lkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMHhBMjAwOiAvLyBNYWluIChjb2xvcikgdGV4dHVyZVxuXHRcdFx0XHRcdG1hdC5jb2xvck1hcCA9IHRoaXMucGFyc2VUZXh0dXJlKGVuZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAweEEyMDQ6IC8vIFNwZWN1bGFyIG1hcFxuXHRcdFx0XHRcdG1hdC5zcGVjdWxhck1hcCA9IHRoaXMucGFyc2VUZXh0dXJlKGVuZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiA9IGVuZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVRleHR1cmUoZW5kOm51bWJlciAvKnVpbnQqLyk6VGV4dHVyZVZPXG5cdHtcblx0XHR2YXIgdGV4OlRleHR1cmVWTztcblxuXHRcdHRleCA9IG5ldyBUZXh0dXJlVk8oKTtcblxuXHRcdHdoaWxlICh0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiA8IGVuZCkge1xuXHRcdFx0dmFyIGNpZDpudW1iZXIgLyp1aW50Ki87XG5cdFx0XHR2YXIgbGVuOm51bWJlciAvKnVpbnQqLztcblxuXHRcdFx0Y2lkID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdGxlbiA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0XHRzd2l0Y2ggKGNpZCkge1xuXHRcdFx0XHRjYXNlIDB4QTMwMDpcblx0XHRcdFx0XHR0ZXgudXJsID0gdGhpcy5yZWFkTnVsVGVybXN0cmluZygpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gU2tpcCB0aGlzIHVua25vd24gdGV4dHVyZSBzdWItY2h1bmtcblx0XHRcdFx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiArPSAobGVuIC0gNik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fdGV4dHVyZXNbdGV4LnVybF0gPSB0ZXg7XG5cdFx0dGhpcy5fcEFkZERlcGVuZGVuY3kodGV4LnVybCwgbmV3IFVSTFJlcXVlc3QodGV4LnVybCkpO1xuXG5cdFx0cmV0dXJuIHRleDtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VWZXJ0ZXhMaXN0KCk6dm9pZFxuXHR7XG5cdFx0dmFyIGk6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBsZW46bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBjb3VudDpudW1iZXIgLyp1aW50Ki87XG5cblx0XHRjb3VudCA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0dGhpcy5fY3VyX29iai52ZXJ0cyA9IG5ldyBBcnJheTxudW1iZXI+KGNvdW50KjMpO1xuXG5cdFx0aSA9IDA7XG5cdFx0bGVuID0gdGhpcy5fY3VyX29iai52ZXJ0cy5sZW5ndGg7XG5cdFx0d2hpbGUgKGkgPCBsZW4pIHtcblx0XHRcdHZhciB4Om51bWJlciwgeTpudW1iZXIsIHo6bnVtYmVyO1xuXG5cdFx0XHR4ID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XG5cdFx0XHR5ID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XG5cdFx0XHR6ID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XG5cblx0XHRcdHRoaXMuX2N1cl9vYmoudmVydHNbaSsrXSA9IHg7XG5cdFx0XHR0aGlzLl9jdXJfb2JqLnZlcnRzW2krK10gPSB6O1xuXHRcdFx0dGhpcy5fY3VyX29iai52ZXJ0c1tpKytdID0geTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlRmFjZUxpc3QoKTp2b2lkXG5cdHtcblx0XHR2YXIgaTpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIGxlbjpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIGNvdW50Om51bWJlciAvKnVpbnQqLztcblxuXHRcdGNvdW50ID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR0aGlzLl9jdXJfb2JqLmluZGljZXMgPSBuZXcgQXJyYXk8bnVtYmVyPihjb3VudCozKSAvKnVpbnQqLztcblxuXHRcdGkgPSAwO1xuXHRcdGxlbiA9IHRoaXMuX2N1cl9vYmouaW5kaWNlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKGkgPCBsZW4pIHtcblx0XHRcdHZhciBpMDpudW1iZXIgLyp1aW50Ki8sIGkxOm51bWJlciAvKnVpbnQqLywgaTI6bnVtYmVyIC8qdWludCovO1xuXG5cdFx0XHRpMCA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRpMSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0XHRpMiA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHRcdHRoaXMuX2N1cl9vYmouaW5kaWNlc1tpKytdID0gaTA7XG5cdFx0XHR0aGlzLl9jdXJfb2JqLmluZGljZXNbaSsrXSA9IGkyO1xuXHRcdFx0dGhpcy5fY3VyX29iai5pbmRpY2VzW2krK10gPSBpMTtcblxuXHRcdFx0Ly8gU2tpcCBcImZhY2UgaW5mb1wiLCBpcnJlbGV2YW50IGluIEF3YXkzRFxuXHRcdFx0dGhpcy5fYnl0ZURhdGEucG9zaXRpb24gKz0gMjtcblx0XHR9XG5cblx0XHR0aGlzLl9jdXJfb2JqLnNtb290aGluZ0dyb3VwcyA9IG5ldyBBcnJheTxudW1iZXI+KGNvdW50KSAvKnVpbnQqLztcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VTbW9vdGhpbmdHcm91cHMoKTp2b2lkXG5cdHtcblx0XHR2YXIgbGVuOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX2N1cl9vYmouaW5kaWNlcy5sZW5ndGgvMztcblx0XHR2YXIgaTpudW1iZXIgLyp1aW50Ki8gPSAwO1xuXHRcdHdoaWxlIChpIDwgbGVuKSB7XG5cdFx0XHR0aGlzLl9jdXJfb2JqLnNtb290aGluZ0dyb3Vwc1tpXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEludCgpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcGFyc2VVVkxpc3QoKTp2b2lkXG5cdHtcblx0XHR2YXIgaTpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIGxlbjpudW1iZXIgLyp1aW50Ki87XG5cdFx0dmFyIGNvdW50Om51bWJlciAvKnVpbnQqLztcblxuXHRcdGNvdW50ID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHR0aGlzLl9jdXJfb2JqLnV2cyA9IG5ldyBBcnJheTxudW1iZXI+KGNvdW50KjIpO1xuXG5cdFx0aSA9IDA7XG5cdFx0bGVuID0gdGhpcy5fY3VyX29iai51dnMubGVuZ3RoO1xuXHRcdHdoaWxlIChpIDwgbGVuKSB7XG5cdFx0XHR0aGlzLl9jdXJfb2JqLnV2c1tpKytdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XG5cdFx0XHR0aGlzLl9jdXJfb2JqLnV2c1tpKytdID0gMS4wIC0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUZhY2VNYXRlcmlhbExpc3QoKTp2b2lkXG5cdHtcblx0XHR2YXIgbWF0OnN0cmluZztcblx0XHR2YXIgY291bnQ6bnVtYmVyIC8qdWludCovO1xuXHRcdHZhciBpOm51bWJlciAvKnVpbnQqLztcblx0XHR2YXIgZmFjZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLztcblxuXHRcdG1hdCA9IHRoaXMucmVhZE51bFRlcm1zdHJpbmcoKTtcblx0XHRjb3VudCA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cblx0XHRmYWNlcyA9IG5ldyBBcnJheTxudW1iZXI+KGNvdW50KSAvKnVpbnQqLztcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoaSA8IGZhY2VzLmxlbmd0aClcblx0XHRcdGZhY2VzW2krK10gPSB0aGlzLl9ieXRlRGF0YS5yZWFkVW5zaWduZWRTaG9ydCgpO1xuXG5cdFx0dGhpcy5fY3VyX29iai5tYXRlcmlhbHMucHVzaChtYXQpO1xuXHRcdHRoaXMuX2N1cl9vYmoubWF0ZXJpYWxGYWNlc1ttYXRdID0gZmFjZXM7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlT2JqZWN0QW5pbWF0aW9uKGVuZDpudW1iZXIpOnZvaWRcblx0e1xuXHRcdHZhciB2bzpPYmplY3RWTztcblx0XHR2YXIgb2JqOkRpc3BsYXlPYmplY3RDb250YWluZXI7XG5cdFx0dmFyIHBpdm90OlZlY3RvcjNEO1xuXHRcdHZhciBuYW1lOnN0cmluZztcblx0XHR2YXIgaGllcjpudW1iZXIgLyp1aW50Ki87XG5cblx0XHQvLyBQaXZvdCBkZWZhdWx0cyB0byBvcmlnaW5cblx0XHRwaXZvdCA9IG5ldyBWZWN0b3IzRDtcblxuXHRcdHdoaWxlICh0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiA8IGVuZCkge1xuXHRcdFx0dmFyIGNpZDpudW1iZXIgLyp1aW50Ki87XG5cdFx0XHR2YXIgbGVuOm51bWJlciAvKnVpbnQqLztcblxuXHRcdFx0Y2lkID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkU2hvcnQoKTtcblx0XHRcdGxlbiA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEludCgpO1xuXG5cdFx0XHRzd2l0Y2ggKGNpZCkge1xuXHRcdFx0XHRjYXNlIDB4YjAxMDogLy8gTmFtZS9oaWVyYXJjaHlcblx0XHRcdFx0XHRuYW1lID0gdGhpcy5yZWFkTnVsVGVybXN0cmluZygpO1xuXHRcdFx0XHRcdHRoaXMuX2J5dGVEYXRhLnBvc2l0aW9uICs9IDQ7XG5cdFx0XHRcdFx0aGllciA9IHRoaXMuX2J5dGVEYXRhLnJlYWRTaG9ydCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMHhiMDEzOiAvLyBQaXZvdFxuXHRcdFx0XHRcdHBpdm90LnggPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTtcblx0XHRcdFx0XHRwaXZvdC56ID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7XG5cdFx0XHRcdFx0cGl2b3QueSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRGbG9hdCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhpcy5fYnl0ZURhdGEucG9zaXRpb24gKz0gKGxlbiAtIDYpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIG5hbWUgaXMgXCIkJCREVU1NWVwiIHRoaXMgaXMgYW4gZW1wdHkgb2JqZWN0IChlLmcuIGEgY29udGFpbmVyKVxuXHRcdC8vIGFuZCB3aWxsIGJlIGlnbm9yZWQgaW4gdGhpcyB2ZXJzaW9uIG9mIHRoZSBwYXJzZXJcblx0XHQvLyBUT0RPOiBJbXBsZW1lbnQgY29udGFpbmVycyBpbiAzRFMgcGFyc2VyLlxuXHRcdGlmIChuYW1lICE9ICckJCREVU1NWScgJiYgdGhpcy5fdW5maW5hbGl6ZWRfb2JqZWN0cy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdFx0dm8gPSB0aGlzLl91bmZpbmFsaXplZF9vYmplY3RzW25hbWVdO1xuXHRcdFx0b2JqID0gdGhpcy5jb25zdHJ1Y3RPYmplY3Qodm8sIHBpdm90KTtcblxuXHRcdFx0aWYgKG9iaikge1xuXHRcdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxuXHRcdFx0XHQoPERpc3BsYXlPYmplY3RDb250YWluZXI+IHRoaXMuX3BDb250ZW50KS5hZGRDaGlsZChvYmopO1xuXG5cdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KG9iaiwgdm8ubmFtZSk7XG5cdFx0XHR9XG5cblxuXHRcdFx0ZGVsZXRlIHRoaXMuX3VuZmluYWxpemVkX29iamVjdHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RPYmplY3Qob2JqOk9iamVjdFZPLCBwaXZvdDpWZWN0b3IzRCA9IG51bGwpOkRpc3BsYXlPYmplY3RDb250YWluZXJcblx0e1xuXHRcdGlmIChvYmoudHlwZSA9PSBNZXNoLmFzc2V0VHlwZSkge1xuXHRcdFx0dmFyIGk6bnVtYmVyIC8qdWludCovO1xuXHRcdFx0dmFyIHN1YjpUcmlhbmdsZVN1Ykdlb21ldHJ5O1xuXHRcdFx0dmFyIGdlb206R2VvbWV0cnk7XG5cdFx0XHR2YXIgbWF0Ok1hdGVyaWFsQmFzZTtcblx0XHRcdHZhciBtZXNoOk1lc2g7XG5cdFx0XHR2YXIgbXR4Ok1hdHJpeDNEO1xuXHRcdFx0dmFyIHZlcnRpY2VzOkFycmF5PFZlcnRleFZPPjtcblx0XHRcdHZhciBmYWNlczpBcnJheTxGYWNlVk8+O1xuXG5cdFx0XHRpZiAob2JqLm1hdGVyaWFscy5sZW5ndGggPiAxKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRoZSBBd2F5M0QgM0RTIHBhcnNlciBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIG1hdGVyaWFscyBwZXIgbWVzaCBhdCB0aGlzIHBvaW50LlwiKTtcblxuXHRcdFx0Ly8gSWdub3JlIGVtcHR5IG9iamVjdHNcblx0XHRcdGlmICghb2JqLmluZGljZXMgfHwgb2JqLmluZGljZXMubGVuZ3RoID09IDApXG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHR2ZXJ0aWNlcyA9IG5ldyBBcnJheTxWZXJ0ZXhWTz4ob2JqLnZlcnRzLmxlbmd0aC8zKTtcblx0XHRcdGZhY2VzID0gbmV3IEFycmF5PEZhY2VWTz4ob2JqLmluZGljZXMubGVuZ3RoLzMpO1xuXG5cdFx0XHR0aGlzLnByZXBhcmVEYXRhKHZlcnRpY2VzLCBmYWNlcywgb2JqKTtcblxuXHRcdFx0aWYgKHRoaXMuX3VzZVNtb290aGluZ0dyb3Vwcylcblx0XHRcdFx0dGhpcy5hcHBseVNtb290aEdyb3Vwcyh2ZXJ0aWNlcywgZmFjZXMpO1xuXG5cdFx0XHRvYmoudmVydHMgPSBuZXcgQXJyYXk8bnVtYmVyPih2ZXJ0aWNlcy5sZW5ndGgqMyk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0b2JqLnZlcnRzW2kqM10gPSB2ZXJ0aWNlc1tpXS54O1xuXHRcdFx0XHRvYmoudmVydHNbaSozICsgMV0gPSB2ZXJ0aWNlc1tpXS55O1xuXHRcdFx0XHRvYmoudmVydHNbaSozICsgMl0gPSB2ZXJ0aWNlc1tpXS56O1xuXHRcdFx0fVxuXHRcdFx0b2JqLmluZGljZXMgPSBuZXcgQXJyYXk8bnVtYmVyPihmYWNlcy5sZW5ndGgqMykgLyp1aW50Ki87XG5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBmYWNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRvYmouaW5kaWNlc1tpKjNdID0gZmFjZXNbaV0uYTtcblx0XHRcdFx0b2JqLmluZGljZXNbaSozICsgMV0gPSBmYWNlc1tpXS5iO1xuXHRcdFx0XHRvYmouaW5kaWNlc1tpKjMgKyAyXSA9IGZhY2VzW2ldLmM7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvYmoudXZzKSB7XG5cdFx0XHRcdC8vIElmIHRoZSBvYmplY3QgaGFkIFVWcyB0byBzdGFydCB3aXRoLCB1c2UgVVZzIGdlbmVyYXRlZCBieVxuXHRcdFx0XHQvLyBzbW9vdGhpbmcgZ3JvdXAgc3BsaXR0aW5nIGFsZ29yaXRobS4gT3RoZXJ3aXNlIHRob3NlIFVWc1xuXHRcdFx0XHQvLyB3aWxsIGJlIG5vbnNlbnNlIGFuZCBzaG91bGQgYmUgc2tpcHBlZC5cblx0XHRcdFx0b2JqLnV2cyA9IG5ldyBBcnJheTxudW1iZXI+KHZlcnRpY2VzLmxlbmd0aCoyKTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b2JqLnV2c1tpKjJdID0gdmVydGljZXNbaV0udTtcblx0XHRcdFx0XHRvYmoudXZzW2kqMiArIDFdID0gdmVydGljZXNbaV0udjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRnZW9tID0gbmV3IEdlb21ldHJ5KCk7XG5cblx0XHRcdC8vIENvbnN0cnVjdCBzdWItZ2VvbWV0cmllcyAocG90ZW50aWFsbHkgc3BsaXR0aW5nIGJ1ZmZlcnMpXG5cdFx0XHQvLyBhbmQgYWRkIHRoZW0gdG8gZ2VvbWV0cnkuXG5cdFx0XHRzdWIgPSBuZXcgVHJpYW5nbGVTdWJHZW9tZXRyeSh0cnVlKTtcblx0XHRcdHN1Yi51cGRhdGVJbmRpY2VzKG9iai5pbmRpY2VzKTtcblx0XHRcdHN1Yi51cGRhdGVQb3NpdGlvbnMob2JqLnZlcnRzKTtcblx0XHRcdHN1Yi51cGRhdGVVVnMob2JqLnV2cyk7XG5cblx0XHRcdGdlb20uYWRkU3ViR2VvbWV0cnkoc3ViKTtcblxuXHRcdFx0aWYgKG9iai5tYXRlcmlhbHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW5hbWU6c3RyaW5nO1xuXHRcdFx0XHRtbmFtZSA9IG9iai5tYXRlcmlhbHNbMF07XG5cdFx0XHRcdG1hdCA9IHRoaXMuX21hdGVyaWFsc1ttbmFtZV0ubWF0ZXJpYWw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IHBpdm90IHRyYW5zbGF0aW9uIHRvIGdlb21ldHJ5IGlmIGEgcGl2b3Qgd2FzXG5cdFx0XHQvLyBmb3VuZCB3aGlsZSBwYXJzaW5nIHRoZSBrZXlmcmFtZSBjaHVuayBlYXJsaWVyLlxuXHRcdFx0aWYgKHBpdm90KSB7XG5cdFx0XHRcdGlmIChvYmoudHJhbnNmb3JtKSB7XG5cdFx0XHRcdFx0Ly8gSWYgYSB0cmFuc2Zvcm0gd2FzIGZvdW5kIHdoaWxlIHBhcnNpbmcgdGhlXG5cdFx0XHRcdFx0Ly8gb2JqZWN0IGNodW5rLCB1c2UgaXQgdG8gZmluZCB0aGUgbG9jYWwgcGl2b3QgdmVjdG9yXG5cdFx0XHRcdFx0dmFyIGRhdDpBcnJheTxudW1iZXI+ID0gb2JqLnRyYW5zZm9ybS5jb25jYXQoKTtcblx0XHRcdFx0XHRkYXRbMTJdID0gMDtcblx0XHRcdFx0XHRkYXRbMTNdID0gMDtcblx0XHRcdFx0XHRkYXRbMTRdID0gMDtcblx0XHRcdFx0XHRtdHggPSBuZXcgTWF0cml4M0QoZGF0KTtcblx0XHRcdFx0XHRwaXZvdCA9IG10eC50cmFuc2Zvcm1WZWN0b3IocGl2b3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGl2b3Quc2NhbGVCeSgtMSk7XG5cblx0XHRcdFx0bXR4ID0gbmV3IE1hdHJpeDNEKCk7XG5cdFx0XHRcdG10eC5hcHBlbmRUcmFuc2xhdGlvbihwaXZvdC54LCBwaXZvdC55LCBwaXZvdC56KTtcblx0XHRcdFx0Z2VvbS5hcHBseVRyYW5zZm9ybWF0aW9uKG10eCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IHRyYW5zZm9ybWF0aW9uIHRvIGdlb21ldHJ5IGlmIGEgdHJhbnNmb3JtYXRpb25cblx0XHRcdC8vIHdhcyBmb3VuZCB3aGlsZSBwYXJzaW5nIHRoZSBvYmplY3QgY2h1bmsgZWFybGllci5cblx0XHRcdGlmIChvYmoudHJhbnNmb3JtKSB7XG5cdFx0XHRcdG10eCA9IG5ldyBNYXRyaXgzRChvYmoudHJhbnNmb3JtKTtcblx0XHRcdFx0bXR4LmludmVydCgpO1xuXHRcdFx0XHRnZW9tLmFwcGx5VHJhbnNmb3JtYXRpb24obXR4KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmluYWwgdHJhbnNmb3JtIGFwcGxpZWQgdG8gZ2VvbWV0cnkuIEZpbmFsaXplIHRoZSBnZW9tZXRyeSxcblx0XHRcdC8vIHdoaWNoIHdpbGwgbm8gbG9uZ2VyIGJlIG1vZGlmaWVkIGFmdGVyIHRoaXMgcG9pbnQuXG5cdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldChnZW9tLCBvYmoubmFtZS5jb25jYXQoJ19nZW9tJykpO1xuXG5cdFx0XHQvLyBCdWlsZCBtZXNoIGFuZCByZXR1cm4gaXRcblx0XHRcdG1lc2ggPSBuZXcgTWVzaChnZW9tLCBtYXQpO1xuXHRcdFx0bWVzaC50cmFuc2Zvcm0ubWF0cml4M0QgPSBuZXcgTWF0cml4M0Qob2JqLnRyYW5zZm9ybSk7XG5cdFx0XHRyZXR1cm4gbWVzaDtcblx0XHR9XG5cblx0XHQvLyBJZiByZWFjaGVkLCB1bmtub3duXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRwcml2YXRlIHByZXBhcmVEYXRhKHZlcnRpY2VzOkFycmF5PFZlcnRleFZPPiwgZmFjZXM6QXJyYXk8RmFjZVZPPiwgb2JqOk9iamVjdFZPKTp2b2lkXG5cdHtcblx0XHQvLyBjb252ZXJ0IHJhdyBPYmplY3RWTydzIGRhdGEgdG8gc3RydWN0dXJlZCBWZXJ0ZXhWTyBhbmQgRmFjZVZPXG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGo6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGs6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGxlbjpudW1iZXIgLyppbnQqLyA9IG9iai52ZXJ0cy5sZW5ndGg7XG5cdFx0Zm9yIChpID0gMCwgaiA9IDAsIGsgPSAwOyBpIDwgbGVuOykge1xuXHRcdFx0dmFyIHY6VmVydGV4Vk8gPSBuZXcgVmVydGV4Vk87XG5cdFx0XHR2LnggPSBvYmoudmVydHNbaSsrXTtcblx0XHRcdHYueSA9IG9iai52ZXJ0c1tpKytdO1xuXHRcdFx0di56ID0gb2JqLnZlcnRzW2krK107XG5cdFx0XHRpZiAob2JqLnV2cykge1xuXHRcdFx0XHR2LnUgPSBvYmoudXZzW2orK107XG5cdFx0XHRcdHYudiA9IG9iai51dnNbaisrXTtcblx0XHRcdH1cblx0XHRcdHZlcnRpY2VzW2srK10gPSB2O1xuXHRcdH1cblx0XHRsZW4gPSBvYmouaW5kaWNlcy5sZW5ndGg7XG5cdFx0Zm9yIChpID0gMCwgayA9IDA7IGkgPCBsZW47KSB7XG5cdFx0XHR2YXIgZjpGYWNlVk8gPSBuZXcgRmFjZVZPKCk7XG5cdFx0XHRmLmEgPSBvYmouaW5kaWNlc1tpKytdO1xuXHRcdFx0Zi5iID0gb2JqLmluZGljZXNbaSsrXTtcblx0XHRcdGYuYyA9IG9iai5pbmRpY2VzW2krK107XG5cdFx0XHRmLnNtb290aEdyb3VwID0gb2JqLnNtb290aGluZ0dyb3Vwc1trXSB8fCAwO1xuXHRcdFx0ZmFjZXNbaysrXSA9IGY7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhcHBseVNtb290aEdyb3Vwcyh2ZXJ0aWNlczpBcnJheTxWZXJ0ZXhWTz4sIGZhY2VzOkFycmF5PEZhY2VWTz4pOnZvaWRcblx0e1xuXHRcdC8vIGNsb25lIHZlcnRpY2VzIGFjY29yZGluZyB0byBmb2xsb3dpbmcgcnVsZTpcblx0XHQvLyBjbG9uZSBpZiB2ZXJ0ZXgncyBpbiBmYWNlcyBmcm9tIGdyb3VwcyAxKzIgYW5kIDNcblx0XHQvLyBkb24ndCBjbG9uZSBpZiB2ZXJ0ZXgncyBpbiBmYWNlcyBmcm9tIGdyb3VwcyAxKzIsIDMgYW5kIDErM1xuXG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGo6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGs6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGw6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGxlbjpudW1iZXIgLyppbnQqLztcblx0XHR2YXIgbnVtVmVydHM6bnVtYmVyIC8qdWludCovID0gdmVydGljZXMubGVuZ3RoO1xuXHRcdHZhciBudW1GYWNlczpudW1iZXIgLyp1aW50Ki8gPSBmYWNlcy5sZW5ndGg7XG5cblx0XHQvLyBleHRyYWN0IGdyb3VwcyBkYXRhIGZvciB2ZXJ0aWNlc1xuXHRcdHZhciB2R3JvdXBzOkFycmF5PEFycmF5PG51bWJlcj4+IC8qdWludCovID0gbmV3IEFycmF5PEFycmF5PG51bWJlcj4+KG51bVZlcnRzKSAvKnVpbnQqLztcblx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtVmVydHM7IGkrKylcblx0XHRcdHZHcm91cHNbaV0gPSBuZXcgQXJyYXk8bnVtYmVyPigpIC8qdWludCovO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBudW1GYWNlczsgaSsrKSB7XG5cdFx0XHR2YXIgZmFjZTpGYWNlVk8gPSBmYWNlc1tpXTtcblx0XHRcdGZvciAoaiA9IDA7IGogPCAzOyBqKyspIHtcblx0XHRcdFx0dmFyIGdyb3VwczpBcnJheTxudW1iZXI+IC8qdWludCovID0gdkdyb3Vwc1soaiA9PSAwKT8gZmFjZS5hIDogKChqID09IDEpPyBmYWNlLmIgOiBmYWNlLmMpXTtcblx0XHRcdFx0dmFyIGdyb3VwOm51bWJlciAvKnVpbnQqLyA9IGZhY2Uuc21vb3RoR3JvdXA7XG5cdFx0XHRcdGZvciAoayA9IGdyb3Vwcy5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuXHRcdFx0XHRcdGlmICgoZ3JvdXAgJiBncm91cHNba10pID4gMCkge1xuXHRcdFx0XHRcdFx0Z3JvdXAgfD0gZ3JvdXBzW2tdO1xuXHRcdFx0XHRcdFx0Z3JvdXBzLnNwbGljZShrLCAxKTtcblx0XHRcdFx0XHRcdGsgPSBncm91cHMubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Z3JvdXBzLnB1c2goZ3JvdXApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBjbG9uZSB2ZXJ0aWNlc1xuXHRcdHZhciB2Q2xvbmVzOkFycmF5PEFycmF5PG51bWJlcj4+IC8qdWludCovID0gbmV3IEFycmF5PEFycmF5PG51bWJlcj4+KG51bVZlcnRzKSAvKnVpbnQqLztcblx0XHRmb3IgKGkgPSAwOyBpIDwgbnVtVmVydHM7IGkrKykge1xuXHRcdFx0aWYgKChsZW4gPSB2R3JvdXBzW2ldLmxlbmd0aCkgPCAxKVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdHZhciBjbG9uZXM6QXJyYXk8bnVtYmVyPiAvKnVpbnQqLyA9IG5ldyBBcnJheTxudW1iZXI+KGxlbikgLyp1aW50Ki87XG5cdFx0XHR2Q2xvbmVzW2ldID0gY2xvbmVzO1xuXHRcdFx0Y2xvbmVzWzBdID0gaTtcblx0XHRcdHZhciB2MDpWZXJ0ZXhWTyA9IHZlcnRpY2VzW2ldO1xuXHRcdFx0Zm9yIChqID0gMTsgaiA8IGxlbjsgaisrKSB7XG5cdFx0XHRcdHZhciB2MTpWZXJ0ZXhWTyA9IG5ldyBWZXJ0ZXhWTztcblx0XHRcdFx0djEueCA9IHYwLng7XG5cdFx0XHRcdHYxLnkgPSB2MC55O1xuXHRcdFx0XHR2MS56ID0gdjAuejtcblx0XHRcdFx0djEudSA9IHYwLnU7XG5cdFx0XHRcdHYxLnYgPSB2MC52O1xuXHRcdFx0XHRjbG9uZXNbal0gPSB2ZXJ0aWNlcy5sZW5ndGg7XG5cdFx0XHRcdHZlcnRpY2VzLnB1c2godjEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRudW1WZXJ0cyA9IHZlcnRpY2VzLmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBudW1GYWNlczsgaSsrKSB7XG5cdFx0XHRmYWNlID0gZmFjZXNbaV07XG5cdFx0XHRncm91cCA9IGZhY2Uuc21vb3RoR3JvdXA7XG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgMzsgaisrKSB7XG5cdFx0XHRcdGsgPSAoaiA9PSAwKT8gZmFjZS5hIDogKChqID09IDEpPyBmYWNlLmIgOiBmYWNlLmMpO1xuXHRcdFx0XHRncm91cHMgPSB2R3JvdXBzW2tdO1xuXHRcdFx0XHRsZW4gPSBncm91cHMubGVuZ3RoO1xuXHRcdFx0XHRjbG9uZXMgPSB2Q2xvbmVzW2tdO1xuXHRcdFx0XHRmb3IgKGwgPSAwOyBsIDwgbGVuOyBsKyspIHtcblx0XHRcdFx0XHRpZiAoKChncm91cCA9PSAwKSAmJiAoZ3JvdXBzW2xdID09IDApKSB8fCAoKGdyb3VwICYgZ3JvdXBzW2xdKSA+IDApKSB7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXg6bnVtYmVyIC8qdWludCovID0gY2xvbmVzW2xdO1xuXHRcdFx0XHRcdFx0aWYgKGdyb3VwID09IDApIHtcblx0XHRcdFx0XHRcdFx0Ly8gdmVydGV4IGlzIHVuaXF1ZSBpZiBubyBzbW9vdGhHcm91cCBmb3VuZFxuXHRcdFx0XHRcdFx0XHRncm91cHMuc3BsaWNlKGwsIDEpO1xuXHRcdFx0XHRcdFx0XHRjbG9uZXMuc3BsaWNlKGwsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGogPT0gMClcblx0XHRcdFx0XHRcdFx0ZmFjZS5hID0gaW5kZXg7IGVsc2UgaWYgKGogPT0gMSlcblx0XHRcdFx0XHRcdFx0ZmFjZS5iID0gaW5kZXg7IGVsc2Vcblx0XHRcdFx0XHRcdFx0ZmFjZS5jID0gaW5kZXg7XG5cdFx0XHRcdFx0XHRsID0gbGVuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZmluYWxpemVDdXJyZW50TWF0ZXJpYWwoKTp2b2lkXG5cdHtcblx0XHR2YXIgbWF0Ok1ldGhvZE1hdGVyaWFsO1xuXG5cdFx0aWYgKHRoaXMuX2N1cl9tYXQuY29sb3JNYXApXG5cdFx0XHRtYXQgPSBuZXcgTWV0aG9kTWF0ZXJpYWwodGhpcy5fY3VyX21hdC5jb2xvck1hcC50ZXh0dXJlIHx8IERlZmF1bHRNYXRlcmlhbE1hbmFnZXIuZ2V0RGVmYXVsdFRleHR1cmUoKSk7XG5cdFx0ZWxzZVxuXHRcdFx0bWF0ID0gbmV3IE1ldGhvZE1hdGVyaWFsKHRoaXMuX2N1cl9tYXQuYW1iaWVudENvbG9yKTtcblxuXHRcdG1hdC5kaWZmdXNlQ29sb3IgPSB0aGlzLl9jdXJfbWF0LmRpZmZ1c2VDb2xvcjtcblx0XHRtYXQuc3BlY3VsYXJDb2xvciA9IHRoaXMuX2N1cl9tYXQuc3BlY3VsYXJDb2xvcjtcblxuXHRcdGlmICh0aGlzLm1hdGVyaWFsTW9kZSA+PSAyKVxuXHRcdFx0bWF0Lm1vZGUgPSBNZXRob2RNYXRlcmlhbE1vZGUuTVVMVElfUEFTU1xuXG5cdFx0bWF0LmJvdGhTaWRlcyA9IHRoaXMuX2N1cl9tYXQudHdvU2lkZWQ7XG5cblx0XHR0aGlzLl9wRmluYWxpemVBc3NldChtYXQsIHRoaXMuX2N1cl9tYXQubmFtZSk7XG5cblx0XHR0aGlzLl9tYXRlcmlhbHNbdGhpcy5fY3VyX21hdC5uYW1lXSA9IHRoaXMuX2N1cl9tYXQ7XG5cdFx0dGhpcy5fY3VyX21hdC5tYXRlcmlhbCA9IG1hdDtcblxuXHRcdHRoaXMuX2N1cl9tYXQgPSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkTnVsVGVybXN0cmluZygpOnN0cmluZ1xuXHR7XG5cdFx0dmFyIGNocjpudW1iZXIgLyppbnQqLztcblx0XHR2YXIgc3RyOnN0cmluZyA9IFwiXCI7XG5cblx0XHR3aGlsZSAoKGNociA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKSkgPiAwKVxuXHRcdFx0c3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKTtcblxuXHRcdHJldHVybiBzdHI7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRUcmFuc2Zvcm0oKTpBcnJheTxudW1iZXI+XG5cdHtcblx0XHR2YXIgZGF0YTpBcnJheTxudW1iZXI+O1xuXG5cdFx0ZGF0YSA9IG5ldyBBcnJheTxudW1iZXI+KDE2KTtcblxuXHRcdC8vIFggYXhpc1xuXHRcdGRhdGFbMF0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWFxuXHRcdGRhdGFbMl0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWlxuXHRcdGRhdGFbMV0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWVxuXHRcdGRhdGFbM10gPSAwO1xuXG5cdFx0Ly8gWiBheGlzXG5cdFx0ZGF0YVs4XSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRGbG9hdCgpOyAvLyBYXG5cdFx0ZGF0YVsxMF0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWlxuXHRcdGRhdGFbOV0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWVxuXHRcdGRhdGFbMTFdID0gMDtcblxuXHRcdC8vIFkgQXhpc1xuXHRcdGRhdGFbNF0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWFxuXHRcdGRhdGFbNl0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWlxuXHRcdGRhdGFbNV0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWVxuXHRcdGRhdGFbN10gPSAwO1xuXG5cdFx0Ly8gVHJhbnNsYXRpb25cblx0XHRkYXRhWzEyXSA9IHRoaXMuX2J5dGVEYXRhLnJlYWRGbG9hdCgpOyAvLyBYXG5cdFx0ZGF0YVsxNF0gPSB0aGlzLl9ieXRlRGF0YS5yZWFkRmxvYXQoKTsgLy8gWlxuXHRcdGRhdGFbMTNdID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCk7IC8vIFlcblx0XHRkYXRhWzE1XSA9IDE7XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdHByaXZhdGUgcmVhZENvbG9yKCk6bnVtYmVyIC8qaW50Ki9cblx0e1xuXHRcdHZhciBjaWQ6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGxlbjpudW1iZXIgLyppbnQqLztcblx0XHR2YXIgcjpudW1iZXIgLyppbnQqLywgZzpudW1iZXIgLyppbnQqLywgYjpudW1iZXIgLyppbnQqLztcblxuXHRcdGNpZCA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZFNob3J0KCk7XG5cdFx0bGVuID0gdGhpcy5fYnl0ZURhdGEucmVhZFVuc2lnbmVkSW50KCk7XG5cblx0XHRzd2l0Y2ggKGNpZCkge1xuXHRcdFx0Y2FzZSAweDAwMTA6IC8vIEZsb2F0c1xuXHRcdFx0XHRyID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCkqMjU1O1xuXHRcdFx0XHRnID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCkqMjU1O1xuXHRcdFx0XHRiID0gdGhpcy5fYnl0ZURhdGEucmVhZEZsb2F0KCkqMjU1O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMHgwMDExOiAvLyAyNC1iaXQgY29sb3Jcblx0XHRcdFx0ciA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0ZyA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0YiA9IHRoaXMuX2J5dGVEYXRhLnJlYWRVbnNpZ25lZEJ5dGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aGlzLl9ieXRlRGF0YS5wb3NpdGlvbiArPSAobGVuIC0gNik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiAociA8PCAxNikgfCAoZyA8PCA4KSB8IGI7XG5cdH1cbn1cblxuZXhwb3J0ID0gTWF4M0RTUGFyc2VyO1xuXG4vKipcbiAqXG4gKi9cbmNsYXNzIEZhY2VWT1xue1xuXHRwdWJsaWMgYTpudW1iZXIgLyppbnQqLztcblx0cHVibGljIGI6bnVtYmVyIC8qaW50Ki87XG5cdHB1YmxpYyBjOm51bWJlciAvKmludCovO1xuXHRwdWJsaWMgc21vb3RoR3JvdXA6bnVtYmVyIC8qaW50Ki87XG59XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTWF0ZXJpYWxWT1xue1xuXHRwdWJsaWMgbmFtZTpzdHJpbmc7XG5cdHB1YmxpYyBhbWJpZW50Q29sb3I6bnVtYmVyIC8qaW50Ki87XG5cdHB1YmxpYyBkaWZmdXNlQ29sb3I6bnVtYmVyIC8qaW50Ki87XG5cdHB1YmxpYyBzcGVjdWxhckNvbG9yOm51bWJlciAvKmludCovO1xuXHRwdWJsaWMgdHdvU2lkZWQ6Ym9vbGVhbjtcblx0cHVibGljIGNvbG9yTWFwOlRleHR1cmVWTztcblx0cHVibGljIHNwZWN1bGFyTWFwOlRleHR1cmVWTztcblx0cHVibGljIG1hdGVyaWFsOk1hdGVyaWFsQmFzZTtcbn1cblxuLyoqXG4gKlxuICovXG5jbGFzcyBPYmplY3RWT1xue1xuXHRwdWJsaWMgbmFtZTpzdHJpbmc7XG5cdHB1YmxpYyB0eXBlOnN0cmluZztcblx0cHVibGljIHBpdm90WDpudW1iZXI7XG5cdHB1YmxpYyBwaXZvdFk6bnVtYmVyO1xuXHRwdWJsaWMgcGl2b3RaOm51bWJlcjtcblx0cHVibGljIHRyYW5zZm9ybTpBcnJheTxudW1iZXI+O1xuXHRwdWJsaWMgdmVydHM6QXJyYXk8bnVtYmVyPjtcblx0cHVibGljIGluZGljZXM6QXJyYXk8bnVtYmVyPiAvKmludCovO1xuXHRwdWJsaWMgdXZzOkFycmF5PG51bWJlcj47XG5cdHB1YmxpYyBtYXRlcmlhbEZhY2VzOk9iamVjdDtcblx0cHVibGljIG1hdGVyaWFsczpBcnJheTxzdHJpbmc+O1xuXHRwdWJsaWMgc21vb3RoaW5nR3JvdXBzOkFycmF5PG51bWJlcj4gLyppbnQqLztcbn1cblxuLyoqXG4gKlxuICovXG5jbGFzcyBUZXh0dXJlVk9cbntcblx0cHVibGljIHVybDpzdHJpbmc7XG5cdHB1YmxpYyB0ZXh0dXJlOlRleHR1cmUyREJhc2U7XG59XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgVmVydGV4Vk9cbntcblx0cHVibGljIHg6bnVtYmVyO1xuXHRwdWJsaWMgeTpudW1iZXI7XG5cdHB1YmxpYyB6Om51bWJlcjtcblx0cHVibGljIHU6bnVtYmVyO1xuXHRwdWJsaWMgdjpudW1iZXI7XG5cdHB1YmxpYyBub3JtYWw6VmVjdG9yM0Q7XG5cdHB1YmxpYyB0YW5nZW50OlZlY3RvcjNEO1xufSJdfQ==