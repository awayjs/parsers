var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Geometry = require("awayjs-core/lib/data/Geometry");
var TriangleSubGeometry = require("awayjs-core/lib/data/TriangleSubGeometry");
var Quaternion = require("awayjs-core/lib/geom/Quaternion");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var DisplayObjectContainer = require("awayjs-display/lib/containers/DisplayObjectContainer");
var Mesh = require("awayjs-display/lib/entities/Mesh");
var SkeletonAnimationSet = require("awayjs-renderergl/lib/animators/SkeletonAnimationSet");
var Skeleton = require("awayjs-renderergl/lib/animators/data/Skeleton");
var SkeletonJoint = require("awayjs-renderergl/lib/animators/data/SkeletonJoint");
// todo: create animation system, parse skeleton
/**
 * MD5MeshParser provides a parser for the md5mesh data type, providing the geometry of the md5 format.
 *
 * todo: optimize
 */
var MD5MeshParser = (function (_super) {
    __extends(MD5MeshParser, _super);
    /**
     * Creates a new MD5MeshParser object.
     */
    function MD5MeshParser(additionalRotationAxis, additionalRotationRadians) {
        if (additionalRotationAxis === void 0) { additionalRotationAxis = null; }
        if (additionalRotationRadians === void 0) { additionalRotationRadians = 0; }
        _super.call(this, URLLoaderDataFormat.TEXT);
        this._parseIndex = 0;
        this._line = 0;
        this._charLineIndex = 0;
        this._rotationQuat = new Quaternion();
        this._rotationQuat.fromAxisAngle(Vector3D.X_AXIS, -Math.PI * .5);
        if (additionalRotationAxis) {
            var quat = new Quaternion();
            quat.fromAxisAngle(additionalRotationAxis, additionalRotationRadians);
            this._rotationQuat.multiply(this._rotationQuat, quat);
        }
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    MD5MeshParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "md5mesh";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    MD5MeshParser.supportsData = function (data) {
        return false;
    };
    /**
     * @inheritDoc
     */
    MD5MeshParser.prototype._pProceedParsing = function () {
        var token;
        if (!this._startedParsing) {
            this._textData = this._pGetTextData();
            this._startedParsing = true;
        }
        while (this._pHasTime()) {
            token = this.getNextToken();
            switch (token) {
                case MD5MeshParser.COMMENT_TOKEN:
                    this.ignoreLine();
                    break;
                case MD5MeshParser.VERSION_TOKEN:
                    this._version = this.getNextInt();
                    if (this._version != 10)
                        throw new Error("Unknown version number encountered!");
                    break;
                case MD5MeshParser.COMMAND_LINE_TOKEN:
                    this.parseCMD();
                    break;
                case MD5MeshParser.NUM_JOINTS_TOKEN:
                    this._numJoints = this.getNextInt();
                    this._bindPoses = new Array(this._numJoints);
                    break;
                case MD5MeshParser.NUM_MESHES_TOKEN:
                    this._numMeshes = this.getNextInt();
                    break;
                case MD5MeshParser.JOINTS_TOKEN:
                    this.parseJoints();
                    break;
                case MD5MeshParser.MESH_TOKEN:
                    this.parseMesh();
                    break;
                default:
                    if (!this._reachedEOF)
                        this.sendUnknownKeywordError();
            }
            if (this._reachedEOF) {
                this.calculateMaxJointCount();
                this._animationSet = new SkeletonAnimationSet(this._maxJointCount);
                this._mesh = new Mesh(new Geometry(), null);
                this._geometry = this._mesh.geometry;
                for (var i = 0; i < this._meshData.length; ++i)
                    this._geometry.addSubGeometry(this.translateGeom(this._meshData[i].vertexData, this._meshData[i].weightData, this._meshData[i].indices));
                //_geometry.animation = _animation;
                //					_mesh.animationController = _animationController;
                //add to the content property
                this._pContent.addChild(this._mesh);
                this._pFinalizeAsset(this._geometry);
                this._pFinalizeAsset(this._mesh);
                this._pFinalizeAsset(this._skeleton);
                this._pFinalizeAsset(this._animationSet);
                return ParserBase.PARSING_DONE;
            }
        }
        return ParserBase.MORE_TO_PARSE;
    };
    MD5MeshParser.prototype._pStartParsing = function (frameLimit) {
        _super.prototype._pStartParsing.call(this, frameLimit);
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer();
    };
    MD5MeshParser.prototype.calculateMaxJointCount = function () {
        this._maxJointCount = 0;
        var numMeshData = this._meshData.length;
        for (var i = 0; i < numMeshData; ++i) {
            var meshData = this._meshData[i];
            var vertexData = meshData.vertexData;
            var numVerts = vertexData.length;
            for (var j = 0; j < numVerts; ++j) {
                var zeroWeights = this.countZeroWeightJoints(vertexData[j], meshData.weightData);
                var totalJoints = vertexData[j].countWeight - zeroWeights;
                if (totalJoints > this._maxJointCount)
                    this._maxJointCount = totalJoints;
            }
        }
    };
    MD5MeshParser.prototype.countZeroWeightJoints = function (vertex, weights) {
        var start = vertex.startWeight;
        var end = vertex.startWeight + vertex.countWeight;
        var count = 0;
        var weight;
        for (var i = start; i < end; ++i) {
            weight = weights[i].bias;
            if (weight == 0)
                ++count;
        }
        return count;
    };
    /**
     * Parses the skeleton's joints.
     */
    MD5MeshParser.prototype.parseJoints = function () {
        var ch;
        var joint;
        var pos;
        var quat;
        var i = 0;
        var token = this.getNextToken();
        if (token != "{")
            this.sendUnknownKeywordError();
        this._skeleton = new Skeleton();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            joint = new SkeletonJoint();
            joint.name = this.parseLiteralstring();
            joint.parentIndex = this.getNextInt();
            pos = this.parseVector3D();
            pos = this._rotationQuat.rotatePoint(pos);
            quat = this.parseQuaternion();
            // todo: check if this is correct, or maybe we want to actually store it as quats?
            this._bindPoses[i] = quat.toMatrix3D();
            this._bindPoses[i].appendTranslation(pos.x, pos.y, pos.z);
            var inv = this._bindPoses[i].clone();
            inv.invert();
            joint.inverseBindPose = inv.rawData;
            this._skeleton.joints[i++] = joint;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5MeshParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Puts back the last read character into the data stream.
     */
    MD5MeshParser.prototype.putBack = function () {
        this._parseIndex--;
        this._charLineIndex--;
        this._reachedEOF = this._parseIndex >= this._textData.length;
    };
    /**
     * Parses the mesh geometry.
     */
    MD5MeshParser.prototype.parseMesh = function () {
        var token = this.getNextToken();
        var ch;
        var vertexData;
        var weights;
        var indices /*uint*/;
        if (token != "{")
            this.sendUnknownKeywordError();
        if (this._shaders == null)
            this._shaders = new Array();
        while (ch != "}") {
            ch = this.getNextToken();
            switch (ch) {
                case MD5MeshParser.COMMENT_TOKEN:
                    this.ignoreLine();
                    break;
                case MD5MeshParser.MESH_SHADER_TOKEN:
                    this._shaders.push(this.parseLiteralstring());
                    break;
                case MD5MeshParser.MESH_NUM_VERTS_TOKEN:
                    vertexData = new Array(this.getNextInt());
                    break;
                case MD5MeshParser.MESH_NUM_TRIS_TOKEN:
                    indices = new Array(this.getNextInt() * 3);
                    break;
                case MD5MeshParser.MESH_NUM_WEIGHTS_TOKEN:
                    weights = new Array(this.getNextInt());
                    break;
                case MD5MeshParser.MESH_VERT_TOKEN:
                    this.parseVertex(vertexData);
                    break;
                case MD5MeshParser.MESH_TRI_TOKEN:
                    this.parseTri(indices);
                    break;
                case MD5MeshParser.MESH_WEIGHT_TOKEN:
                    this.parseJoint(weights);
                    break;
            }
        }
        if (this._meshData == null)
            this._meshData = new Array();
        var i = this._meshData.length;
        this._meshData[i] = new MeshData();
        this._meshData[i].vertexData = vertexData;
        this._meshData[i].weightData = weights;
        this._meshData[i].indices = indices;
    };
    /**
     * Converts the mesh data to a SkinnedSub instance.
     * @param vertexData The mesh's vertices.
     * @param weights The joint weights per vertex.
     * @param indices The indices for the faces.
     * @return A SubGeometry instance containing all geometrical data for the current mesh.
     */
    MD5MeshParser.prototype.translateGeom = function (vertexData, weights, indices /*uint*/) {
        var len = vertexData.length;
        var v1 /*int*/, v2 /*int*/, v3 /*int*/;
        var vertex;
        var weight;
        var bindPose;
        var pos;
        var subGeom = new TriangleSubGeometry(true);
        var uvs = new Array(len * 2);
        var vertices = new Array(len * 3);
        var jointIndices = new Array(len * this._maxJointCount);
        var jointWeights = new Array(len * this._maxJointCount);
        var l = 0;
        var nonZeroWeights /*int*/;
        for (var i = 0; i < len; ++i) {
            vertex = vertexData[i];
            v1 = vertex.index * 3;
            v2 = v1 + 1;
            v3 = v1 + 2;
            vertices[v1] = vertices[v2] = vertices[v3] = 0;
            nonZeroWeights = 0;
            for (var j = 0; j < vertex.countWeight; ++j) {
                weight = weights[vertex.startWeight + j];
                if (weight.bias > 0) {
                    bindPose = this._bindPoses[weight.joint];
                    pos = bindPose.transformVector(weight.pos);
                    vertices[v1] += pos.x * weight.bias;
                    vertices[v2] += pos.y * weight.bias;
                    vertices[v3] += pos.z * weight.bias;
                    // indices need to be multiplied by 3 (amount of matrix registers)
                    jointIndices[l] = weight.joint * 3;
                    jointWeights[l++] = weight.bias;
                    ++nonZeroWeights;
                }
            }
            for (j = nonZeroWeights; j < this._maxJointCount; ++j) {
                jointIndices[l] = 0;
                jointWeights[l++] = 0;
            }
            v1 = vertex.index << 1;
            uvs[v1++] = vertex.s;
            uvs[v1] = vertex.t;
        }
        subGeom.jointsPerVertex = this._maxJointCount;
        subGeom.updateIndices(indices);
        subGeom.updatePositions(vertices);
        subGeom.updateUVs(uvs);
        subGeom.updateJointIndices(jointIndices);
        subGeom.updateJointWeights(jointWeights);
        // cause explicit updates
        subGeom.vertexNormals;
        subGeom.vertexTangents;
        // turn auto updates off because they may be animated and set explicitly
        subGeom.autoDeriveTangents = false;
        subGeom.autoDeriveNormals = false;
        return subGeom;
    };
    /**
     * Retrieve the next triplet of vertex indices that form a face.
     * @param indices The index list in which to store the read data.
     */
    MD5MeshParser.prototype.parseTri = function (indices /*uint*/) {
        var index = this.getNextInt() * 3;
        indices[index] = this.getNextInt();
        indices[index + 1] = this.getNextInt();
        indices[index + 2] = this.getNextInt();
    };
    /**
     * Reads a new joint data set for a single joint.
     * @param weights the target list to contain the weight data.
     */
    MD5MeshParser.prototype.parseJoint = function (weights) {
        var weight = new JointData();
        weight.index = this.getNextInt();
        weight.joint = this.getNextInt();
        weight.bias = this.getNextNumber();
        weight.pos = this.parseVector3D();
        weights[weight.index] = weight;
    };
    /**
     * Reads the data for a single vertex.
     * @param vertexData The list to contain the vertex data.
     */
    MD5MeshParser.prototype.parseVertex = function (vertexData) {
        var vertex = new VertexData();
        vertex.index = this.getNextInt();
        this.parseUV(vertex);
        vertex.startWeight = this.getNextInt();
        vertex.countWeight = this.getNextInt();
        //			if (vertex.countWeight > _maxJointCount) _maxJointCount = vertex.countWeight;
        vertexData[vertex.index] = vertex;
    };
    /**
     * Reads the next uv coordinate.
     * @param vertexData The vertexData to contain the UV coordinates.
     */
    MD5MeshParser.prototype.parseUV = function (vertexData) {
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        vertexData.s = this.getNextNumber();
        vertexData.t = this.getNextNumber();
        if (this.getNextToken() != ")")
            this.sendParseError(")");
    };
    /**
     * Gets the next token in the data stream.
     */
    MD5MeshParser.prototype.getNextToken = function () {
        var ch;
        var token = "";
        while (!this._reachedEOF) {
            ch = this.getNextChar();
            if (ch == " " || ch == "\r" || ch == "\n" || ch == "\t") {
                if (token != MD5MeshParser.COMMENT_TOKEN)
                    this.skipWhiteSpace();
                if (token != "")
                    return token;
            }
            else
                token += ch;
            if (token == MD5MeshParser.COMMENT_TOKEN)
                return token;
        }
        return token;
    };
    /**
     * Skips all whitespace in the data stream.
     */
    MD5MeshParser.prototype.skipWhiteSpace = function () {
        var ch;
        do
            ch = this.getNextChar();
        while (ch == "\n" || ch == " " || ch == "\r" || ch == "\t");
        this.putBack();
    };
    /**
     * Skips to the next line.
     */
    MD5MeshParser.prototype.ignoreLine = function () {
        var ch;
        while (!this._reachedEOF && ch != "\n")
            ch = this.getNextChar();
    };
    /**
     * Retrieves the next single character in the data stream.
     */
    MD5MeshParser.prototype.getNextChar = function () {
        var ch = this._textData.charAt(this._parseIndex++);
        if (ch == "\n") {
            ++this._line;
            this._charLineIndex = 0;
        }
        else if (ch != "\r")
            ++this._charLineIndex;
        if (this._parseIndex >= this._textData.length)
            this._reachedEOF = true;
        return ch;
    };
    /**
     * Retrieves the next integer in the data stream.
     */
    MD5MeshParser.prototype.getNextInt = function () {
        var i = parseInt(this.getNextToken());
        if (isNaN(i))
            this.sendParseError("int type");
        return i;
    };
    /**
     * Retrieves the next floating point number in the data stream.
     */
    MD5MeshParser.prototype.getNextNumber = function () {
        var f = parseFloat(this.getNextToken());
        if (isNaN(f))
            this.sendParseError("float type");
        return f;
    };
    /**
     * Retrieves the next 3d vector in the data stream.
     */
    MD5MeshParser.prototype.parseVector3D = function () {
        var vec = new Vector3D();
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        vec.x = -this.getNextNumber();
        vec.y = this.getNextNumber();
        vec.z = this.getNextNumber();
        if (this.getNextToken() != ")")
            this.sendParseError(")");
        return vec;
    };
    /**
     * Retrieves the next quaternion in the data stream.
     */
    MD5MeshParser.prototype.parseQuaternion = function () {
        var quat = new Quaternion();
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        quat.x = this.getNextNumber();
        quat.y = -this.getNextNumber();
        quat.z = -this.getNextNumber();
        // quat supposed to be unit length
        var t = 1 - quat.x * quat.x - quat.y * quat.y - quat.z * quat.z;
        quat.w = t < 0 ? 0 : -Math.sqrt(t);
        if (this.getNextToken() != ")")
            this.sendParseError(")");
        var rotQuat = new Quaternion();
        rotQuat.multiply(this._rotationQuat, quat);
        return rotQuat;
    };
    /**
     * Parses the command line data.
     */
    MD5MeshParser.prototype.parseCMD = function () {
        // just ignore the command line property
        this.parseLiteralstring();
    };
    /**
     * Retrieves the next literal string in the data stream. A literal string is a sequence of characters bounded
     * by double quotes.
     */
    MD5MeshParser.prototype.parseLiteralstring = function () {
        this.skipWhiteSpace();
        var ch = this.getNextChar();
        var str = "";
        if (ch != "\"")
            this.sendParseError("\"");
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            ch = this.getNextChar();
            if (ch != "\"")
                str += ch;
        } while (ch != "\"");
        return str;
    };
    /**
     * Throws an end-of-file error when a premature end of file was encountered.
     */
    MD5MeshParser.prototype.sendEOFError = function () {
        throw new Error("Unexpected end of file");
    };
    /**
     * Throws an error when an unexpected token was encountered.
     * @param expected The token type that was actually expected.
     */
    MD5MeshParser.prototype.sendParseError = function (expected) {
        throw new Error("Unexpected token at line " + (this._line + 1) + ", character " + this._charLineIndex + ". " + expected + " expected, but " + this._textData.charAt(this._parseIndex - 1) + " encountered");
    };
    /**
     * Throws an error when an unknown keyword was encountered.
     */
    MD5MeshParser.prototype.sendUnknownKeywordError = function () {
        throw new Error("Unknown keyword at line " + (this._line + 1) + ", character " + this._charLineIndex + ". ");
    };
    MD5MeshParser.VERSION_TOKEN = "MD5Version";
    MD5MeshParser.COMMAND_LINE_TOKEN = "commandline";
    MD5MeshParser.NUM_JOINTS_TOKEN = "numJoints";
    MD5MeshParser.NUM_MESHES_TOKEN = "numMeshes";
    MD5MeshParser.COMMENT_TOKEN = "//";
    MD5MeshParser.JOINTS_TOKEN = "joints";
    MD5MeshParser.MESH_TOKEN = "mesh";
    MD5MeshParser.MESH_SHADER_TOKEN = "shader";
    MD5MeshParser.MESH_NUM_VERTS_TOKEN = "numverts";
    MD5MeshParser.MESH_VERT_TOKEN = "vert";
    MD5MeshParser.MESH_NUM_TRIS_TOKEN = "numtris";
    MD5MeshParser.MESH_TRI_TOKEN = "tri";
    MD5MeshParser.MESH_NUM_WEIGHTS_TOKEN = "numweights";
    MD5MeshParser.MESH_WEIGHT_TOKEN = "weight";
    return MD5MeshParser;
})(ParserBase);
var VertexData = (function () {
    function VertexData() {
    }
    return VertexData;
})();
var JointData = (function () {
    function JointData() {
    }
    return JointData;
})();
var MeshData = (function () {
    function MeshData() {
    }
    return MeshData;
})();
module.exports = MD5MeshParser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9NRDVNZXNoUGFyc2VyLnRzIl0sIm5hbWVzIjpbIk1ENU1lc2hQYXJzZXIiLCJNRDVNZXNoUGFyc2VyLmNvbnN0cnVjdG9yIiwiTUQ1TWVzaFBhcnNlci5zdXBwb3J0c1R5cGUiLCJNRDVNZXNoUGFyc2VyLnN1cHBvcnRzRGF0YSIsIk1ENU1lc2hQYXJzZXIuX3BQcm9jZWVkUGFyc2luZyIsIk1ENU1lc2hQYXJzZXIuX3BTdGFydFBhcnNpbmciLCJNRDVNZXNoUGFyc2VyLmNhbGN1bGF0ZU1heEpvaW50Q291bnQiLCJNRDVNZXNoUGFyc2VyLmNvdW50WmVyb1dlaWdodEpvaW50cyIsIk1ENU1lc2hQYXJzZXIucGFyc2VKb2ludHMiLCJNRDVNZXNoUGFyc2VyLnB1dEJhY2siLCJNRDVNZXNoUGFyc2VyLnBhcnNlTWVzaCIsIk1ENU1lc2hQYXJzZXIudHJhbnNsYXRlR2VvbSIsIk1ENU1lc2hQYXJzZXIucGFyc2VUcmkiLCJNRDVNZXNoUGFyc2VyLnBhcnNlSm9pbnQiLCJNRDVNZXNoUGFyc2VyLnBhcnNlVmVydGV4IiwiTUQ1TWVzaFBhcnNlci5wYXJzZVVWIiwiTUQ1TWVzaFBhcnNlci5nZXROZXh0VG9rZW4iLCJNRDVNZXNoUGFyc2VyLnNraXBXaGl0ZVNwYWNlIiwiTUQ1TWVzaFBhcnNlci5pZ25vcmVMaW5lIiwiTUQ1TWVzaFBhcnNlci5nZXROZXh0Q2hhciIsIk1ENU1lc2hQYXJzZXIuZ2V0TmV4dEludCIsIk1ENU1lc2hQYXJzZXIuZ2V0TmV4dE51bWJlciIsIk1ENU1lc2hQYXJzZXIucGFyc2VWZWN0b3IzRCIsIk1ENU1lc2hQYXJzZXIucGFyc2VRdWF0ZXJuaW9uIiwiTUQ1TWVzaFBhcnNlci5wYXJzZUNNRCIsIk1ENU1lc2hQYXJzZXIucGFyc2VMaXRlcmFsc3RyaW5nIiwiTUQ1TWVzaFBhcnNlci5zZW5kRU9GRXJyb3IiLCJNRDVNZXNoUGFyc2VyLnNlbmRQYXJzZUVycm9yIiwiTUQ1TWVzaFBhcnNlci5zZW5kVW5rbm93bktleXdvcmRFcnJvciIsIlZlcnRleERhdGEiLCJWZXJ0ZXhEYXRhLmNvbnN0cnVjdG9yIiwiSm9pbnREYXRhIiwiSm9pbnREYXRhLmNvbnN0cnVjdG9yIiwiTWVzaERhdGEiLCJNZXNoRGF0YS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTyxRQUFRLFdBQWlCLCtCQUErQixDQUFDLENBQUM7QUFDakUsSUFBTyxtQkFBbUIsV0FBYywwQ0FBMEMsQ0FBQyxDQUFDO0FBRXBGLElBQU8sVUFBVSxXQUFnQixpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3BFLElBQU8sUUFBUSxXQUFpQiwrQkFBK0IsQ0FBQyxDQUFDO0FBQ2pFLElBQU8sbUJBQW1CLFdBQWMseUNBQXlDLENBQUMsQ0FBQztBQUNuRixJQUFPLFVBQVUsV0FBZ0Isb0NBQW9DLENBQUMsQ0FBQztBQUV2RSxJQUFPLHNCQUFzQixXQUFhLHNEQUFzRCxDQUFDLENBQUM7QUFDbEcsSUFBTyxJQUFJLFdBQWtCLGtDQUFrQyxDQUFDLENBQUM7QUFFakUsSUFBTyxvQkFBb0IsV0FBYyxzREFBc0QsQ0FBQyxDQUFDO0FBQ2pHLElBQU8sUUFBUSxXQUFpQiwrQ0FBK0MsQ0FBQyxDQUFDO0FBQ2pGLElBQU8sYUFBYSxXQUFlLG9EQUFvRCxDQUFDLENBQUM7QUFFekYsQUFPQSxnREFQZ0Q7QUFFaEQ7Ozs7R0FJRztJQUNHLGFBQWE7SUFBU0EsVUFBdEJBLGFBQWFBLFVBQW1CQTtJQXlDckNBOztPQUVHQTtJQUNIQSxTQTVDS0EsYUFBYUEsQ0E0Q05BLHNCQUFzQ0EsRUFBRUEseUJBQW9DQTtRQUE1RUMsc0NBQXNDQSxHQUF0Q0EsNkJBQXNDQTtRQUFFQSx5Q0FBb0NBLEdBQXBDQSw2QkFBb0NBO1FBRXZGQSxrQkFBTUEsbUJBQW1CQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQTFCekJBLGdCQUFXQSxHQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFFL0JBLFVBQUtBLEdBQWtCQSxDQUFDQSxDQUFDQTtRQUN6QkEsbUJBQWNBLEdBQWtC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R0FBVUEsSUFBSUEsQ0FBQ0E7SUFDNUJBLDBCQUFZQSxHQUFVQSxRQUFRQSxDQUFDQTtJQUMvQkEsd0JBQVVBLEdBQVVBLE1BQU1BLENBQUNBO0lBRTNCQSwrQkFBaUJBLEdBQVVBLFFBQVFBLENBQUNBO0lBQ3BDQSxrQ0FBb0JBLEdBQVVBLFVBQVVBLENBQUNBO0lBQ3pDQSw2QkFBZUEsR0FBVUEsTUFBTUEsQ0FBQ0E7SUFDaENBLGlDQUFtQkEsR0FBVUEsU0FBU0EsQ0FBQ0E7SUFDdkNBLDRCQUFjQSxHQUFVQSxLQUFLQSxDQUFDQTtJQUM5QkEsb0NBQXNCQSxHQUFVQSxZQUFZQSxDQUFDQTtJQUM3Q0EsK0JBQWlCQSxHQUFVQSxRQUFRQSxDQUFDQTtJQXdtQm5EQSxvQkFBQ0E7QUFBREEsQ0ExbkJBLEFBMG5CQ0EsRUExbkIyQixVQUFVLEVBMG5CckM7QUFLRCxJQUFNLFVBQVU7SUFBaEI2QixTQUFNQSxVQUFVQTtJQU9oQkMsQ0FBQ0E7SUFBREQsaUJBQUNBO0FBQURBLENBUEEsQUFPQ0EsSUFBQTtBQUVELElBQU0sU0FBUztJQUFmRSxTQUFNQSxTQUFTQTtJQU1mQyxDQUFDQTtJQUFERCxnQkFBQ0E7QUFBREEsQ0FOQSxBQU1DQSxJQUFBO0FBRUQsSUFBTSxRQUFRO0lBQWRFLFNBQU1BLFFBQVFBO0lBS2RDLENBQUNBO0lBQURELGVBQUNBO0FBQURBLENBTEEsQUFLQ0EsSUFBQTtBQXpCRCxpQkFBUyxhQUFhLENBQUMiLCJmaWxlIjoiTUQ1TWVzaFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2VvbWV0cnlcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9kYXRhL0dlb21ldHJ5XCIpO1xyXG5pbXBvcnQgVHJpYW5nbGVTdWJHZW9tZXRyeVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2RhdGEvVHJpYW5nbGVTdWJHZW9tZXRyeVwiKTtcclxuaW1wb3J0IE1hdHJpeDNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9NYXRyaXgzRFwiKTtcclxuaW1wb3J0IFF1YXRlcm5pb25cdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9RdWF0ZXJuaW9uXCIpO1xyXG5pbXBvcnQgVmVjdG9yM0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1ZlY3RvcjNEXCIpO1xyXG5pbXBvcnQgVVJMTG9hZGVyRGF0YUZvcm1hdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxMb2FkZXJEYXRhRm9ybWF0XCIpO1xyXG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XHJcblxyXG5pbXBvcnQgRGlzcGxheU9iamVjdENvbnRhaW5lclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9jb250YWluZXJzL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XHJcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xyXG5cclxuaW1wb3J0IFNrZWxldG9uQW5pbWF0aW9uU2V0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1NrZWxldG9uQW5pbWF0aW9uU2V0XCIpO1xyXG5pbXBvcnQgU2tlbGV0b25cdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblwiKTtcclxuaW1wb3J0IFNrZWxldG9uSm9pbnRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL1NrZWxldG9uSm9pbnRcIik7XHJcblxyXG4vLyB0b2RvOiBjcmVhdGUgYW5pbWF0aW9uIHN5c3RlbSwgcGFyc2Ugc2tlbGV0b25cclxuXHJcbi8qKlxyXG4gKiBNRDVNZXNoUGFyc2VyIHByb3ZpZGVzIGEgcGFyc2VyIGZvciB0aGUgbWQ1bWVzaCBkYXRhIHR5cGUsIHByb3ZpZGluZyB0aGUgZ2VvbWV0cnkgb2YgdGhlIG1kNSBmb3JtYXQuXHJcbiAqXHJcbiAqIHRvZG86IG9wdGltaXplXHJcbiAqL1xyXG5jbGFzcyBNRDVNZXNoUGFyc2VyIGV4dGVuZHMgUGFyc2VyQmFzZVxyXG57XHJcblx0cHJpdmF0ZSBfdGV4dERhdGE6c3RyaW5nO1xyXG5cdHByaXZhdGUgX3N0YXJ0ZWRQYXJzaW5nOmJvb2xlYW47XHJcblx0cHVibGljIHN0YXRpYyBWRVJTSU9OX1RPS0VOOnN0cmluZyA9IFwiTUQ1VmVyc2lvblwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgQ09NTUFORF9MSU5FX1RPS0VOOnN0cmluZyA9IFwiY29tbWFuZGxpbmVcIjtcclxuXHRwdWJsaWMgc3RhdGljIE5VTV9KT0lOVFNfVE9LRU46c3RyaW5nID0gXCJudW1Kb2ludHNcIjtcclxuXHRwdWJsaWMgc3RhdGljIE5VTV9NRVNIRVNfVE9LRU46c3RyaW5nID0gXCJudW1NZXNoZXNcIjtcclxuXHRwdWJsaWMgc3RhdGljIENPTU1FTlRfVE9LRU46c3RyaW5nID0gXCIvL1wiO1xyXG5cdHB1YmxpYyBzdGF0aWMgSk9JTlRTX1RPS0VOOnN0cmluZyA9IFwiam9pbnRzXCI7XHJcblx0cHVibGljIHN0YXRpYyBNRVNIX1RPS0VOOnN0cmluZyA9IFwibWVzaFwiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIE1FU0hfU0hBREVSX1RPS0VOOnN0cmluZyA9IFwic2hhZGVyXCI7XHJcblx0cHVibGljIHN0YXRpYyBNRVNIX05VTV9WRVJUU19UT0tFTjpzdHJpbmcgPSBcIm51bXZlcnRzXCI7XHJcblx0cHVibGljIHN0YXRpYyBNRVNIX1ZFUlRfVE9LRU46c3RyaW5nID0gXCJ2ZXJ0XCI7XHJcblx0cHVibGljIHN0YXRpYyBNRVNIX05VTV9UUklTX1RPS0VOOnN0cmluZyA9IFwibnVtdHJpc1wiO1xyXG5cdHB1YmxpYyBzdGF0aWMgTUVTSF9UUklfVE9LRU46c3RyaW5nID0gXCJ0cmlcIjtcclxuXHRwdWJsaWMgc3RhdGljIE1FU0hfTlVNX1dFSUdIVFNfVE9LRU46c3RyaW5nID0gXCJudW13ZWlnaHRzXCI7XHJcblx0cHVibGljIHN0YXRpYyBNRVNIX1dFSUdIVF9UT0tFTjpzdHJpbmcgPSBcIndlaWdodFwiO1xyXG5cclxuXHRwcml2YXRlIF9wYXJzZUluZGV4Om51bWJlciAvKmludCovID0gMDtcclxuXHRwcml2YXRlIF9yZWFjaGVkRU9GOmJvb2xlYW47XHJcblx0cHJpdmF0ZSBfbGluZTpudW1iZXIgLyppbnQqLyA9IDA7XHJcblx0cHJpdmF0ZSBfY2hhckxpbmVJbmRleDpudW1iZXIgLyppbnQqLyA9IDA7XHJcblx0cHJpdmF0ZSBfdmVyc2lvbjpudW1iZXIgLyppbnQqLztcclxuXHRwcml2YXRlIF9udW1Kb2ludHM6bnVtYmVyIC8qaW50Ki87XHJcblx0cHJpdmF0ZSBfbnVtTWVzaGVzOm51bWJlciAvKmludCovO1xyXG5cclxuXHRwcml2YXRlIF9tZXNoOk1lc2g7XHJcblx0cHJpdmF0ZSBfc2hhZGVyczpBcnJheTxzdHJpbmc+O1xyXG5cclxuXHRwcml2YXRlIF9tYXhKb2ludENvdW50Om51bWJlciAvKmludCovO1xyXG5cdHByaXZhdGUgX21lc2hEYXRhOkFycmF5PE1lc2hEYXRhPjtcclxuXHRwcml2YXRlIF9iaW5kUG9zZXM6QXJyYXk8TWF0cml4M0Q+O1xyXG5cdHByaXZhdGUgX2dlb21ldHJ5Okdlb21ldHJ5O1xyXG5cclxuXHRwcml2YXRlIF9za2VsZXRvbjpTa2VsZXRvbjtcclxuXHRwcml2YXRlIF9hbmltYXRpb25TZXQ6U2tlbGV0b25BbmltYXRpb25TZXQ7XHJcblxyXG5cdHByaXZhdGUgX3JvdGF0aW9uUXVhdDpRdWF0ZXJuaW9uO1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgbmV3IE1ENU1lc2hQYXJzZXIgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGFkZGl0aW9uYWxSb3RhdGlvbkF4aXM6VmVjdG9yM0QgPSBudWxsLCBhZGRpdGlvbmFsUm90YXRpb25SYWRpYW5zOm51bWJlciA9IDApXHJcblx0e1xyXG5cdFx0c3VwZXIoVVJMTG9hZGVyRGF0YUZvcm1hdC5URVhUKTtcclxuXHRcdHRoaXMuX3JvdGF0aW9uUXVhdCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcblxyXG5cdFx0dGhpcy5fcm90YXRpb25RdWF0LmZyb21BeGlzQW5nbGUoVmVjdG9yM0QuWF9BWElTLCAtTWF0aC5QSSouNSk7XHJcblxyXG5cdFx0aWYgKGFkZGl0aW9uYWxSb3RhdGlvbkF4aXMpIHtcclxuXHRcdFx0dmFyIHF1YXQ6UXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcblx0XHRcdHF1YXQuZnJvbUF4aXNBbmdsZShhZGRpdGlvbmFsUm90YXRpb25BeGlzLCBhZGRpdGlvbmFsUm90YXRpb25SYWRpYW5zKTtcclxuXHRcdFx0dGhpcy5fcm90YXRpb25RdWF0Lm11bHRpcGx5KHRoaXMuX3JvdGF0aW9uUXVhdCwgcXVhdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgYSBnaXZlbiBmaWxlIGV4dGVuc2lvbiBpcyBzdXBwb3J0ZWQgYnkgdGhlIHBhcnNlci5cclxuXHQgKiBAcGFyYW0gZXh0ZW5zaW9uIFRoZSBmaWxlIGV4dGVuc2lvbiBvZiBhIHBvdGVudGlhbCBmaWxlIHRvIGJlIHBhcnNlZC5cclxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBmaWxlIHR5cGUgaXMgc3VwcG9ydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNUeXBlKGV4dGVuc2lvbjpzdHJpbmcpOmJvb2xlYW5cclxuXHR7XHJcblx0XHRleHRlbnNpb24gPSBleHRlbnNpb24udG9Mb3dlckNhc2UoKTtcclxuXHRcdHJldHVybiBleHRlbnNpb24gPT0gXCJtZDVtZXNoXCI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUZXN0cyB3aGV0aGVyIGEgZGF0YSBibG9jayBjYW4gYmUgcGFyc2VkIGJ5IHRoZSBwYXJzZXIuXHJcblx0ICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgYmxvY2sgdG8gcG90ZW50aWFsbHkgYmUgcGFyc2VkLlxyXG5cdCAqIEByZXR1cm4gV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGRhdGEgaXMgc3VwcG9ydGVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgc3VwcG9ydHNEYXRhKGRhdGE6YW55KTpib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGluaGVyaXREb2NcclxuXHQgKi9cclxuXHRwdWJsaWMgX3BQcm9jZWVkUGFyc2luZygpOmJvb2xlYW5cclxuXHR7XHJcblx0XHR2YXIgdG9rZW46c3RyaW5nO1xyXG5cclxuXHRcdGlmICghdGhpcy5fc3RhcnRlZFBhcnNpbmcpIHtcclxuXHRcdFx0dGhpcy5fdGV4dERhdGEgPSB0aGlzLl9wR2V0VGV4dERhdGEoKTtcclxuXHRcdFx0dGhpcy5fc3RhcnRlZFBhcnNpbmcgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlICh0aGlzLl9wSGFzVGltZSgpKSB7XHJcblx0XHRcdHRva2VuID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcclxuXHRcdFx0c3dpdGNoICh0b2tlbikge1xyXG5cdFx0XHRcdGNhc2UgTUQ1TWVzaFBhcnNlci5DT01NRU5UX1RPS0VOOlxyXG5cdFx0XHRcdFx0dGhpcy5pZ25vcmVMaW5lKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1ENU1lc2hQYXJzZXIuVkVSU0lPTl9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMuX3ZlcnNpb24gPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLl92ZXJzaW9uICE9IDEwKVxyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHZlcnNpb24gbnVtYmVyIGVuY291bnRlcmVkIVwiKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1TWVzaFBhcnNlci5DT01NQU5EX0xJTkVfVE9LRU46XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ01EKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1ENU1lc2hQYXJzZXIuTlVNX0pPSU5UU19UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMuX251bUpvaW50cyA9IHRoaXMuZ2V0TmV4dEludCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5fYmluZFBvc2VzID0gbmV3IEFycmF5PE1hdHJpeDNEPih0aGlzLl9udW1Kb2ludHMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBNRDVNZXNoUGFyc2VyLk5VTV9NRVNIRVNfVE9LRU46XHJcblx0XHRcdFx0XHR0aGlzLl9udW1NZXNoZXMgPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1TWVzaFBhcnNlci5KT0lOVFNfVE9LRU46XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlSm9pbnRzKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1ENU1lc2hQYXJzZXIuTUVTSF9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VNZXNoKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9yZWFjaGVkRU9GKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbmRVbmtub3duS2V5d29yZEVycm9yKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLl9yZWFjaGVkRU9GKSB7XHJcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVNYXhKb2ludENvdW50KCk7XHJcblx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uU2V0ID0gbmV3IFNrZWxldG9uQW5pbWF0aW9uU2V0KHRoaXMuX21heEpvaW50Q291bnQpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9tZXNoID0gbmV3IE1lc2gobmV3IEdlb21ldHJ5KCksIG51bGwpO1xyXG5cdFx0XHRcdHRoaXMuX2dlb21ldHJ5ID0gdGhpcy5fbWVzaC5nZW9tZXRyeTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7IGkgPCB0aGlzLl9tZXNoRGF0YS5sZW5ndGg7ICsraSlcclxuXHRcdFx0XHRcdHRoaXMuX2dlb21ldHJ5LmFkZFN1Ykdlb21ldHJ5KHRoaXMudHJhbnNsYXRlR2VvbSh0aGlzLl9tZXNoRGF0YVtpXS52ZXJ0ZXhEYXRhLCB0aGlzLl9tZXNoRGF0YVtpXS53ZWlnaHREYXRhLCB0aGlzLl9tZXNoRGF0YVtpXS5pbmRpY2VzKSk7XHJcblxyXG5cdFx0XHRcdC8vX2dlb21ldHJ5LmFuaW1hdGlvbiA9IF9hbmltYXRpb247XHJcblx0XHRcdFx0Ly9cdFx0XHRcdFx0X21lc2guYW5pbWF0aW9uQ29udHJvbGxlciA9IF9hbmltYXRpb25Db250cm9sbGVyO1xyXG5cclxuXHRcdFx0XHQvL2FkZCB0byB0aGUgY29udGVudCBwcm9wZXJ0eVxyXG5cdFx0XHRcdCg8RGlzcGxheU9iamVjdENvbnRhaW5lcj4gdGhpcy5fcENvbnRlbnQpLmFkZENoaWxkKHRoaXMuX21lc2gpO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCh0aGlzLl9nZW9tZXRyeSk7XHJcblx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQodGhpcy5fbWVzaCk7XHJcblx0XHRcdFx0dGhpcy5fcEZpbmFsaXplQXNzZXQodGhpcy5fc2tlbGV0b24pO1xyXG5cdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHRoaXMuX2FuaW1hdGlvblNldCk7XHJcblx0XHRcdFx0cmV0dXJuIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gUGFyc2VyQmFzZS5NT1JFX1RPX1BBUlNFO1xyXG5cdH1cclxuXHJcblx0cHVibGljIF9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQ6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHN1cGVyLl9wU3RhcnRQYXJzaW5nKGZyYW1lTGltaXQpO1xyXG5cclxuXHRcdC8vY3JlYXRlIGEgY29udGVudCBvYmplY3QgZm9yIExvYWRlcnNcclxuXHRcdHRoaXMuX3BDb250ZW50ID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2FsY3VsYXRlTWF4Sm9pbnRDb3VudCgpOnZvaWRcclxuXHR7XHJcblx0XHR0aGlzLl9tYXhKb2ludENvdW50ID0gMDtcclxuXHJcblx0XHR2YXIgbnVtTWVzaERhdGE6bnVtYmVyIC8qaW50Ki8gPSB0aGlzLl9tZXNoRGF0YS5sZW5ndGg7XHJcblx0XHRmb3IgKHZhciBpOm51bWJlciAvKmludCovID0gMDsgaSA8IG51bU1lc2hEYXRhOyArK2kpIHtcclxuXHRcdFx0dmFyIG1lc2hEYXRhOk1lc2hEYXRhID0gdGhpcy5fbWVzaERhdGFbaV07XHJcblx0XHRcdHZhciB2ZXJ0ZXhEYXRhOkFycmF5PFZlcnRleERhdGE+ID0gbWVzaERhdGEudmVydGV4RGF0YTtcclxuXHRcdFx0dmFyIG51bVZlcnRzOm51bWJlciAvKmludCovID0gdmVydGV4RGF0YS5sZW5ndGg7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBqOm51bWJlciAvKmludCovID0gMDsgaiA8IG51bVZlcnRzOyArK2opIHtcclxuXHRcdFx0XHR2YXIgemVyb1dlaWdodHM6bnVtYmVyIC8qaW50Ki8gPSB0aGlzLmNvdW50WmVyb1dlaWdodEpvaW50cyh2ZXJ0ZXhEYXRhW2pdLCBtZXNoRGF0YS53ZWlnaHREYXRhKTtcclxuXHRcdFx0XHR2YXIgdG90YWxKb2ludHM6bnVtYmVyIC8qaW50Ki8gPSB2ZXJ0ZXhEYXRhW2pdLmNvdW50V2VpZ2h0IC0gemVyb1dlaWdodHM7XHJcblx0XHRcdFx0aWYgKHRvdGFsSm9pbnRzID4gdGhpcy5fbWF4Sm9pbnRDb3VudClcclxuXHRcdFx0XHRcdHRoaXMuX21heEpvaW50Q291bnQgPSB0b3RhbEpvaW50cztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjb3VudFplcm9XZWlnaHRKb2ludHModmVydGV4OlZlcnRleERhdGEsIHdlaWdodHM6QXJyYXk8Sm9pbnREYXRhPik6bnVtYmVyIC8qaW50Ki9cclxuXHR7XHJcblx0XHR2YXIgc3RhcnQ6bnVtYmVyIC8qaW50Ki8gPSB2ZXJ0ZXguc3RhcnRXZWlnaHQ7XHJcblx0XHR2YXIgZW5kOm51bWJlciAvKmludCovID0gdmVydGV4LnN0YXJ0V2VpZ2h0ICsgdmVydGV4LmNvdW50V2VpZ2h0O1xyXG5cdFx0dmFyIGNvdW50Om51bWJlciAvKmludCovID0gMDtcclxuXHRcdHZhciB3ZWlnaHQ6bnVtYmVyO1xyXG5cclxuXHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XHJcblx0XHRcdHdlaWdodCA9IHdlaWdodHNbaV0uYmlhcztcclxuXHRcdFx0aWYgKHdlaWdodCA9PSAwKVxyXG5cdFx0XHRcdCsrY291bnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvdW50O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGFyc2VzIHRoZSBza2VsZXRvbidzIGpvaW50cy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlSm9pbnRzKCk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBjaDpzdHJpbmc7XHJcblx0XHR2YXIgam9pbnQ6U2tlbGV0b25Kb2ludDtcclxuXHRcdHZhciBwb3M6VmVjdG9yM0Q7XHJcblx0XHR2YXIgcXVhdDpRdWF0ZXJuaW9uO1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cdFx0dmFyIHRva2VuOnN0cmluZyA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblxyXG5cdFx0aWYgKHRva2VuICE9IFwie1wiKVxyXG5cdFx0XHR0aGlzLnNlbmRVbmtub3duS2V5d29yZEVycm9yKCk7XHJcblxyXG5cdFx0dGhpcy5fc2tlbGV0b24gPSBuZXcgU2tlbGV0b24oKTtcclxuXHJcblx0XHRkbyB7XHJcblx0XHRcdGlmICh0aGlzLl9yZWFjaGVkRU9GKVxyXG5cdFx0XHRcdHRoaXMuc2VuZEVPRkVycm9yKCk7XHJcblx0XHRcdGpvaW50ID0gbmV3IFNrZWxldG9uSm9pbnQoKTtcclxuXHRcdFx0am9pbnQubmFtZSA9IHRoaXMucGFyc2VMaXRlcmFsc3RyaW5nKCk7XHJcblx0XHRcdGpvaW50LnBhcmVudEluZGV4ID0gdGhpcy5nZXROZXh0SW50KCk7XHJcblx0XHRcdHBvcyA9IHRoaXMucGFyc2VWZWN0b3IzRCgpO1xyXG5cdFx0XHRwb3MgPSB0aGlzLl9yb3RhdGlvblF1YXQucm90YXRlUG9pbnQocG9zKTtcclxuXHRcdFx0cXVhdCA9IHRoaXMucGFyc2VRdWF0ZXJuaW9uKCk7XHJcblxyXG5cdFx0XHQvLyB0b2RvOiBjaGVjayBpZiB0aGlzIGlzIGNvcnJlY3QsIG9yIG1heWJlIHdlIHdhbnQgdG8gYWN0dWFsbHkgc3RvcmUgaXQgYXMgcXVhdHM/XHJcblx0XHRcdHRoaXMuX2JpbmRQb3Nlc1tpXSA9IHF1YXQudG9NYXRyaXgzRCgpO1xyXG5cdFx0XHR0aGlzLl9iaW5kUG9zZXNbaV0uYXBwZW5kVHJhbnNsYXRpb24ocG9zLngsIHBvcy55LCBwb3Mueik7XHJcblx0XHRcdHZhciBpbnY6TWF0cml4M0QgPSB0aGlzLl9iaW5kUG9zZXNbaV0uY2xvbmUoKTtcclxuXHRcdFx0aW52LmludmVydCgpO1xyXG5cdFx0XHRqb2ludC5pbnZlcnNlQmluZFBvc2UgPSBpbnYucmF3RGF0YTtcclxuXHJcblx0XHRcdHRoaXMuX3NrZWxldG9uLmpvaW50c1tpKytdID0gam9pbnQ7XHJcblxyXG5cdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcclxuXHJcblx0XHRcdGlmIChjaCA9PSBcIi9cIikge1xyXG5cdFx0XHRcdHRoaXMucHV0QmFjaygpO1xyXG5cdFx0XHRcdGNoID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcclxuXHRcdFx0XHRpZiAoY2ggPT0gTUQ1TWVzaFBhcnNlci5DT01NRU5UX1RPS0VOKVxyXG5cdFx0XHRcdFx0dGhpcy5pZ25vcmVMaW5lKCk7XHJcblx0XHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY2ggIT0gXCJ9XCIpXHJcblx0XHRcdFx0dGhpcy5wdXRCYWNrKCk7XHJcblx0XHR9IHdoaWxlIChjaCAhPSBcIn1cIik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQdXRzIGJhY2sgdGhlIGxhc3QgcmVhZCBjaGFyYWN0ZXIgaW50byB0aGUgZGF0YSBzdHJlYW0uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwdXRCYWNrKCk6dm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuX3BhcnNlSW5kZXgtLTtcclxuXHRcdHRoaXMuX2NoYXJMaW5lSW5kZXgtLTtcclxuXHRcdHRoaXMuX3JlYWNoZWRFT0YgPSB0aGlzLl9wYXJzZUluZGV4ID49IHRoaXMuX3RleHREYXRhLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBhcnNlcyB0aGUgbWVzaCBnZW9tZXRyeS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlTWVzaCgpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgdG9rZW46c3RyaW5nID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcclxuXHRcdHZhciBjaDpzdHJpbmc7XHJcblx0XHR2YXIgdmVydGV4RGF0YTpBcnJheTxWZXJ0ZXhEYXRhPjtcclxuXHRcdHZhciB3ZWlnaHRzOkFycmF5PEpvaW50RGF0YT47XHJcblx0XHR2YXIgaW5kaWNlczpBcnJheTxudW1iZXI+IC8qdWludCovO1xyXG5cclxuXHRcdGlmICh0b2tlbiAhPSBcIntcIilcclxuXHRcdFx0dGhpcy5zZW5kVW5rbm93bktleXdvcmRFcnJvcigpO1xyXG5cclxuXHRcdGlmICh0aGlzLl9zaGFkZXJzID09IG51bGwpXHJcblx0XHRcdHRoaXMuX3NoYWRlcnMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuXHRcdHdoaWxlIChjaCAhPSBcIn1cIikge1xyXG5cdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRcdHN3aXRjaCAoY2gpIHtcclxuXHRcdFx0XHRjYXNlIE1ENU1lc2hQYXJzZXIuQ09NTUVOVF9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMuaWdub3JlTGluZSgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBNRDVNZXNoUGFyc2VyLk1FU0hfU0hBREVSX1RPS0VOOlxyXG5cdFx0XHRcdFx0dGhpcy5fc2hhZGVycy5wdXNoKHRoaXMucGFyc2VMaXRlcmFsc3RyaW5nKCkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBNRDVNZXNoUGFyc2VyLk1FU0hfTlVNX1ZFUlRTX1RPS0VOOlxyXG5cdFx0XHRcdFx0dmVydGV4RGF0YSA9IG5ldyBBcnJheTxWZXJ0ZXhEYXRhPih0aGlzLmdldE5leHRJbnQoKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1ENU1lc2hQYXJzZXIuTUVTSF9OVU1fVFJJU19UT0tFTjpcclxuXHRcdFx0XHRcdGluZGljZXMgPSBuZXcgQXJyYXk8bnVtYmVyPih0aGlzLmdldE5leHRJbnQoKSozKSAvKnVpbnQqLztcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1TWVzaFBhcnNlci5NRVNIX05VTV9XRUlHSFRTX1RPS0VOOlxyXG5cdFx0XHRcdFx0d2VpZ2h0cyA9IG5ldyBBcnJheTxKb2ludERhdGE+KHRoaXMuZ2V0TmV4dEludCgpKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1TWVzaFBhcnNlci5NRVNIX1ZFUlRfVE9LRU46XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlVmVydGV4KHZlcnRleERhdGEpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBNRDVNZXNoUGFyc2VyLk1FU0hfVFJJX1RPS0VOOlxyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZVRyaShpbmRpY2VzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1TWVzaFBhcnNlci5NRVNIX1dFSUdIVF9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VKb2ludCh3ZWlnaHRzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX21lc2hEYXRhID09IG51bGwpXHJcblx0XHRcdHRoaXMuX21lc2hEYXRhID0gbmV3IEFycmF5PE1lc2hEYXRhPigpO1xyXG5cclxuXHRcdHZhciBpOm51bWJlciAvKnVpbnQqLyA9IHRoaXMuX21lc2hEYXRhLmxlbmd0aDtcclxuXHRcdHRoaXMuX21lc2hEYXRhW2ldID0gbmV3IE1lc2hEYXRhKCk7XHJcblx0XHR0aGlzLl9tZXNoRGF0YVtpXS52ZXJ0ZXhEYXRhID0gdmVydGV4RGF0YTtcclxuXHRcdHRoaXMuX21lc2hEYXRhW2ldLndlaWdodERhdGEgPSB3ZWlnaHRzO1xyXG5cdFx0dGhpcy5fbWVzaERhdGFbaV0uaW5kaWNlcyA9IGluZGljZXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDb252ZXJ0cyB0aGUgbWVzaCBkYXRhIHRvIGEgU2tpbm5lZFN1YiBpbnN0YW5jZS5cclxuXHQgKiBAcGFyYW0gdmVydGV4RGF0YSBUaGUgbWVzaCdzIHZlcnRpY2VzLlxyXG5cdCAqIEBwYXJhbSB3ZWlnaHRzIFRoZSBqb2ludCB3ZWlnaHRzIHBlciB2ZXJ0ZXguXHJcblx0ICogQHBhcmFtIGluZGljZXMgVGhlIGluZGljZXMgZm9yIHRoZSBmYWNlcy5cclxuXHQgKiBAcmV0dXJuIEEgU3ViR2VvbWV0cnkgaW5zdGFuY2UgY29udGFpbmluZyBhbGwgZ2VvbWV0cmljYWwgZGF0YSBmb3IgdGhlIGN1cnJlbnQgbWVzaC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHRyYW5zbGF0ZUdlb20odmVydGV4RGF0YTpBcnJheTxWZXJ0ZXhEYXRhPiwgd2VpZ2h0czpBcnJheTxKb2ludERhdGE+LCBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki8pOlRyaWFuZ2xlU3ViR2VvbWV0cnlcclxuXHR7XHJcblx0XHR2YXIgbGVuOm51bWJlciAvKmludCovID0gdmVydGV4RGF0YS5sZW5ndGg7XHJcblx0XHR2YXIgdjE6bnVtYmVyIC8qaW50Ki8sIHYyOm51bWJlciAvKmludCovLCB2MzpudW1iZXIgLyppbnQqLztcclxuXHRcdHZhciB2ZXJ0ZXg6VmVydGV4RGF0YTtcclxuXHRcdHZhciB3ZWlnaHQ6Sm9pbnREYXRhO1xyXG5cdFx0dmFyIGJpbmRQb3NlOk1hdHJpeDNEO1xyXG5cdFx0dmFyIHBvczpWZWN0b3IzRDtcclxuXHRcdHZhciBzdWJHZW9tOlRyaWFuZ2xlU3ViR2VvbWV0cnkgPSBuZXcgVHJpYW5nbGVTdWJHZW9tZXRyeSh0cnVlKTtcclxuXHRcdHZhciB1dnM6QXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KGxlbioyKTtcclxuXHRcdHZhciB2ZXJ0aWNlczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4obGVuKjMpO1xyXG5cdFx0dmFyIGpvaW50SW5kaWNlczpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4obGVuKnRoaXMuX21heEpvaW50Q291bnQpO1xyXG5cdFx0dmFyIGpvaW50V2VpZ2h0czpBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4obGVuKnRoaXMuX21heEpvaW50Q291bnQpO1xyXG5cdFx0dmFyIGw6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cdFx0dmFyIG5vblplcm9XZWlnaHRzOm51bWJlciAvKmludCovO1xyXG5cclxuXHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuXHRcdFx0dmVydGV4ID0gdmVydGV4RGF0YVtpXTtcclxuXHRcdFx0djEgPSB2ZXJ0ZXguaW5kZXgqMztcclxuXHRcdFx0djIgPSB2MSArIDE7XHJcblx0XHRcdHYzID0gdjEgKyAyO1xyXG5cdFx0XHR2ZXJ0aWNlc1t2MV0gPSB2ZXJ0aWNlc1t2Ml0gPSB2ZXJ0aWNlc1t2M10gPSAwO1xyXG5cclxuXHRcdFx0bm9uWmVyb1dlaWdodHMgPSAwO1xyXG5cdFx0XHRmb3IgKHZhciBqOm51bWJlciAvKmludCovID0gMDsgaiA8IHZlcnRleC5jb3VudFdlaWdodDsgKytqKSB7XHJcblx0XHRcdFx0d2VpZ2h0ID0gd2VpZ2h0c1t2ZXJ0ZXguc3RhcnRXZWlnaHQgKyBqXTtcclxuXHRcdFx0XHRpZiAod2VpZ2h0LmJpYXMgPiAwKSB7XHJcblx0XHRcdFx0XHRiaW5kUG9zZSA9IHRoaXMuX2JpbmRQb3Nlc1t3ZWlnaHQuam9pbnRdO1xyXG5cdFx0XHRcdFx0cG9zID0gYmluZFBvc2UudHJhbnNmb3JtVmVjdG9yKHdlaWdodC5wb3MpO1xyXG5cdFx0XHRcdFx0dmVydGljZXNbdjFdICs9IHBvcy54KndlaWdodC5iaWFzO1xyXG5cdFx0XHRcdFx0dmVydGljZXNbdjJdICs9IHBvcy55KndlaWdodC5iaWFzO1xyXG5cdFx0XHRcdFx0dmVydGljZXNbdjNdICs9IHBvcy56KndlaWdodC5iaWFzO1xyXG5cclxuXHRcdFx0XHRcdC8vIGluZGljZXMgbmVlZCB0byBiZSBtdWx0aXBsaWVkIGJ5IDMgKGFtb3VudCBvZiBtYXRyaXggcmVnaXN0ZXJzKVxyXG5cdFx0XHRcdFx0am9pbnRJbmRpY2VzW2xdID0gd2VpZ2h0LmpvaW50KjM7XHJcblx0XHRcdFx0XHRqb2ludFdlaWdodHNbbCsrXSA9IHdlaWdodC5iaWFzO1xyXG5cdFx0XHRcdFx0Kytub25aZXJvV2VpZ2h0cztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAoaiA9IG5vblplcm9XZWlnaHRzOyBqIDwgdGhpcy5fbWF4Sm9pbnRDb3VudDsgKytqKSB7XHJcblx0XHRcdFx0am9pbnRJbmRpY2VzW2xdID0gMDtcclxuXHRcdFx0XHRqb2ludFdlaWdodHNbbCsrXSA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHYxID0gdmVydGV4LmluZGV4IDw8IDE7XHJcblx0XHRcdHV2c1t2MSsrXSA9IHZlcnRleC5zO1xyXG5cdFx0XHR1dnNbdjFdID0gdmVydGV4LnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0c3ViR2VvbS5qb2ludHNQZXJWZXJ0ZXggPSB0aGlzLl9tYXhKb2ludENvdW50O1xyXG5cdFx0c3ViR2VvbS51cGRhdGVJbmRpY2VzKGluZGljZXMpO1xyXG5cdFx0c3ViR2VvbS51cGRhdGVQb3NpdGlvbnModmVydGljZXMpO1xyXG5cdFx0c3ViR2VvbS51cGRhdGVVVnModXZzKTtcclxuXHRcdHN1Ykdlb20udXBkYXRlSm9pbnRJbmRpY2VzKGpvaW50SW5kaWNlcyk7XHJcblx0XHRzdWJHZW9tLnVwZGF0ZUpvaW50V2VpZ2h0cyhqb2ludFdlaWdodHMpO1xyXG5cdFx0Ly8gY2F1c2UgZXhwbGljaXQgdXBkYXRlc1xyXG5cdFx0c3ViR2VvbS52ZXJ0ZXhOb3JtYWxzO1xyXG5cdFx0c3ViR2VvbS52ZXJ0ZXhUYW5nZW50cztcclxuXHRcdC8vIHR1cm4gYXV0byB1cGRhdGVzIG9mZiBiZWNhdXNlIHRoZXkgbWF5IGJlIGFuaW1hdGVkIGFuZCBzZXQgZXhwbGljaXRseVxyXG5cdFx0c3ViR2VvbS5hdXRvRGVyaXZlVGFuZ2VudHMgPSBmYWxzZTtcclxuXHRcdHN1Ykdlb20uYXV0b0Rlcml2ZU5vcm1hbHMgPSBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gc3ViR2VvbTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlIHRoZSBuZXh0IHRyaXBsZXQgb2YgdmVydGV4IGluZGljZXMgdGhhdCBmb3JtIGEgZmFjZS5cclxuXHQgKiBAcGFyYW0gaW5kaWNlcyBUaGUgaW5kZXggbGlzdCBpbiB3aGljaCB0byBzdG9yZSB0aGUgcmVhZCBkYXRhLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VUcmkoaW5kaWNlczpBcnJheTxudW1iZXI+IC8qdWludCovKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGluZGV4Om51bWJlciAvKmludCovID0gdGhpcy5nZXROZXh0SW50KCkqMztcclxuXHRcdGluZGljZXNbaW5kZXhdID0gdGhpcy5nZXROZXh0SW50KCk7XHJcblx0XHRpbmRpY2VzW2luZGV4ICsgMV0gPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdGluZGljZXNbaW5kZXggKyAyXSA9IHRoaXMuZ2V0TmV4dEludCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVhZHMgYSBuZXcgam9pbnQgZGF0YSBzZXQgZm9yIGEgc2luZ2xlIGpvaW50LlxyXG5cdCAqIEBwYXJhbSB3ZWlnaHRzIHRoZSB0YXJnZXQgbGlzdCB0byBjb250YWluIHRoZSB3ZWlnaHQgZGF0YS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlSm9pbnQod2VpZ2h0czpBcnJheTxKb2ludERhdGE+KTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHdlaWdodDpKb2ludERhdGEgPSBuZXcgSm9pbnREYXRhKCk7XHJcblx0XHR3ZWlnaHQuaW5kZXggPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdHdlaWdodC5qb2ludCA9IHRoaXMuZ2V0TmV4dEludCgpO1xyXG5cdFx0d2VpZ2h0LmJpYXMgPSB0aGlzLmdldE5leHROdW1iZXIoKTtcclxuXHRcdHdlaWdodC5wb3MgPSB0aGlzLnBhcnNlVmVjdG9yM0QoKTtcclxuXHRcdHdlaWdodHNbd2VpZ2h0LmluZGV4XSA9IHdlaWdodDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlYWRzIHRoZSBkYXRhIGZvciBhIHNpbmdsZSB2ZXJ0ZXguXHJcblx0ICogQHBhcmFtIHZlcnRleERhdGEgVGhlIGxpc3QgdG8gY29udGFpbiB0aGUgdmVydGV4IGRhdGEuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwYXJzZVZlcnRleCh2ZXJ0ZXhEYXRhOkFycmF5PFZlcnRleERhdGE+KTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIHZlcnRleDpWZXJ0ZXhEYXRhID0gbmV3IFZlcnRleERhdGEoKTtcclxuXHRcdHZlcnRleC5pbmRleCA9IHRoaXMuZ2V0TmV4dEludCgpO1xyXG5cdFx0dGhpcy5wYXJzZVVWKHZlcnRleCk7XHJcblx0XHR2ZXJ0ZXguc3RhcnRXZWlnaHQgPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdHZlcnRleC5jb3VudFdlaWdodCA9IHRoaXMuZ2V0TmV4dEludCgpO1xyXG5cdFx0Ly9cdFx0XHRpZiAodmVydGV4LmNvdW50V2VpZ2h0ID4gX21heEpvaW50Q291bnQpIF9tYXhKb2ludENvdW50ID0gdmVydGV4LmNvdW50V2VpZ2h0O1xyXG5cdFx0dmVydGV4RGF0YVt2ZXJ0ZXguaW5kZXhdID0gdmVydGV4O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVhZHMgdGhlIG5leHQgdXYgY29vcmRpbmF0ZS5cclxuXHQgKiBAcGFyYW0gdmVydGV4RGF0YSBUaGUgdmVydGV4RGF0YSB0byBjb250YWluIHRoZSBVViBjb29yZGluYXRlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlVVYodmVydGV4RGF0YTpWZXJ0ZXhEYXRhKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGNoOnN0cmluZyA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRpZiAoY2ggIT0gXCIoXCIpXHJcblx0XHRcdHRoaXMuc2VuZFBhcnNlRXJyb3IoXCIoXCIpO1xyXG5cdFx0dmVydGV4RGF0YS5zID0gdGhpcy5nZXROZXh0TnVtYmVyKCk7XHJcblx0XHR2ZXJ0ZXhEYXRhLnQgPSB0aGlzLmdldE5leHROdW1iZXIoKTtcclxuXHJcblx0XHRpZiAodGhpcy5nZXROZXh0VG9rZW4oKSAhPSBcIilcIilcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcIilcIik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIHRoZSBuZXh0IHRva2VuIGluIHRoZSBkYXRhIHN0cmVhbS5cclxuXHQgKi9cclxuXHRwcml2YXRlIGdldE5leHRUb2tlbigpOnN0cmluZ1xyXG5cdHtcclxuXHRcdHZhciBjaDpzdHJpbmc7XHJcblx0XHR2YXIgdG9rZW46c3RyaW5nID0gXCJcIjtcclxuXHJcblx0XHR3aGlsZSAoIXRoaXMuX3JlYWNoZWRFT0YpIHtcclxuXHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblx0XHRcdGlmIChjaCA9PSBcIiBcIiB8fCBjaCA9PSBcIlxcclwiIHx8IGNoID09IFwiXFxuXCIgfHwgY2ggPT0gXCJcXHRcIikge1xyXG5cdFx0XHRcdGlmICh0b2tlbiAhPSBNRDVNZXNoUGFyc2VyLkNPTU1FTlRfVE9LRU4pXHJcblx0XHRcdFx0XHR0aGlzLnNraXBXaGl0ZVNwYWNlKCk7XHJcblx0XHRcdFx0aWYgKHRva2VuICE9IFwiXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW47XHJcblx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdHRva2VuICs9IGNoO1xyXG5cclxuXHRcdFx0aWYgKHRva2VuID09IE1ENU1lc2hQYXJzZXIuQ09NTUVOVF9UT0tFTilcclxuXHRcdFx0XHRyZXR1cm4gdG9rZW47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRva2VuO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2tpcHMgYWxsIHdoaXRlc3BhY2UgaW4gdGhlIGRhdGEgc3RyZWFtLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc2tpcFdoaXRlU3BhY2UoKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGNoOnN0cmluZztcclxuXHJcblx0XHRkb1xyXG5cdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dENoYXIoKTsgd2hpbGUgKGNoID09IFwiXFxuXCIgfHwgY2ggPT0gXCIgXCIgfHwgY2ggPT0gXCJcXHJcIiB8fCBjaCA9PSBcIlxcdFwiKTtcclxuXHJcblx0XHR0aGlzLnB1dEJhY2soKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNraXBzIHRvIHRoZSBuZXh0IGxpbmUuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBpZ25vcmVMaW5lKCk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBjaDpzdHJpbmc7XHJcblx0XHR3aGlsZSAoIXRoaXMuX3JlYWNoZWRFT0YgJiYgY2ggIT0gXCJcXG5cIilcclxuXHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIG5leHQgc2luZ2xlIGNoYXJhY3RlciBpbiB0aGUgZGF0YSBzdHJlYW0uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBnZXROZXh0Q2hhcigpOnN0cmluZ1xyXG5cdHtcclxuXHRcdHZhciBjaDpzdHJpbmcgPSB0aGlzLl90ZXh0RGF0YS5jaGFyQXQodGhpcy5fcGFyc2VJbmRleCsrKTtcclxuXHJcblx0XHRpZiAoY2ggPT0gXCJcXG5cIikge1xyXG5cdFx0XHQrK3RoaXMuX2xpbmU7XHJcblx0XHRcdHRoaXMuX2NoYXJMaW5lSW5kZXggPSAwO1xyXG5cdFx0fSBlbHNlIGlmIChjaCAhPSBcIlxcclwiKVxyXG5cdFx0XHQrK3RoaXMuX2NoYXJMaW5lSW5kZXg7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3BhcnNlSW5kZXggPj0gdGhpcy5fdGV4dERhdGEubGVuZ3RoKVxyXG5cdFx0XHR0aGlzLl9yZWFjaGVkRU9GID0gdHJ1ZTtcclxuXHJcblx0XHRyZXR1cm4gY2g7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIG5leHQgaW50ZWdlciBpbiB0aGUgZGF0YSBzdHJlYW0uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBnZXROZXh0SW50KCk6bnVtYmVyIC8qaW50Ki9cclxuXHR7XHJcblx0XHR2YXIgaTpudW1iZXIgPSBwYXJzZUludCh0aGlzLmdldE5leHRUb2tlbigpKTtcclxuXHRcdGlmIChpc05hTihpKSlcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcImludCB0eXBlXCIpO1xyXG5cdFx0cmV0dXJuIGk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIG5leHQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIGluIHRoZSBkYXRhIHN0cmVhbS5cclxuXHQgKi9cclxuXHRwcml2YXRlIGdldE5leHROdW1iZXIoKTpudW1iZXJcclxuXHR7XHJcblx0XHR2YXIgZjpudW1iZXIgPSBwYXJzZUZsb2F0KHRoaXMuZ2V0TmV4dFRva2VuKCkpO1xyXG5cdFx0aWYgKGlzTmFOKGYpKVxyXG5cdFx0XHR0aGlzLnNlbmRQYXJzZUVycm9yKFwiZmxvYXQgdHlwZVwiKTtcclxuXHRcdHJldHVybiBmO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHRoZSBuZXh0IDNkIHZlY3RvciBpbiB0aGUgZGF0YSBzdHJlYW0uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwYXJzZVZlY3RvcjNEKCk6VmVjdG9yM0RcclxuXHR7XHJcblx0XHR2YXIgdmVjOlZlY3RvcjNEID0gbmV3IFZlY3RvcjNEKCk7XHJcblx0XHR2YXIgY2g6c3RyaW5nID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcclxuXHJcblx0XHRpZiAoY2ggIT0gXCIoXCIpXHJcblx0XHRcdHRoaXMuc2VuZFBhcnNlRXJyb3IoXCIoXCIpO1xyXG5cdFx0dmVjLnggPSAtdGhpcy5nZXROZXh0TnVtYmVyKCk7XHJcblx0XHR2ZWMueSA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xyXG5cdFx0dmVjLnogPSB0aGlzLmdldE5leHROdW1iZXIoKTtcclxuXHJcblx0XHRpZiAodGhpcy5nZXROZXh0VG9rZW4oKSAhPSBcIilcIilcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcIilcIik7XHJcblxyXG5cdFx0cmV0dXJuIHZlYztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB0aGUgbmV4dCBxdWF0ZXJuaW9uIGluIHRoZSBkYXRhIHN0cmVhbS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlUXVhdGVybmlvbigpOlF1YXRlcm5pb25cclxuXHR7XHJcblx0XHR2YXIgcXVhdDpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHRcdHZhciBjaDpzdHJpbmcgPSB0aGlzLmdldE5leHRUb2tlbigpO1xyXG5cclxuXHRcdGlmIChjaCAhPSBcIihcIilcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcIihcIik7XHJcblx0XHRxdWF0LnggPSB0aGlzLmdldE5leHROdW1iZXIoKTtcclxuXHRcdHF1YXQueSA9IC10aGlzLmdldE5leHROdW1iZXIoKTtcclxuXHRcdHF1YXQueiA9IC10aGlzLmdldE5leHROdW1iZXIoKTtcclxuXHJcblx0XHQvLyBxdWF0IHN1cHBvc2VkIHRvIGJlIHVuaXQgbGVuZ3RoXHJcblx0XHR2YXIgdDpudW1iZXIgPSAxIC0gcXVhdC54KnF1YXQueCAtIHF1YXQueSpxdWF0LnkgLSBxdWF0LnoqcXVhdC56O1xyXG5cdFx0cXVhdC53ID0gdCA8IDA/IDAgOiAtTWF0aC5zcXJ0KHQpO1xyXG5cclxuXHRcdGlmICh0aGlzLmdldE5leHRUb2tlbigpICE9IFwiKVwiKVxyXG5cdFx0XHR0aGlzLnNlbmRQYXJzZUVycm9yKFwiKVwiKTtcclxuXHJcblx0XHR2YXIgcm90UXVhdDpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHRcdHJvdFF1YXQubXVsdGlwbHkodGhpcy5fcm90YXRpb25RdWF0LCBxdWF0KTtcclxuXHRcdHJldHVybiByb3RRdWF0O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGFyc2VzIHRoZSBjb21tYW5kIGxpbmUgZGF0YS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlQ01EKCk6dm9pZFxyXG5cdHtcclxuXHRcdC8vIGp1c3QgaWdub3JlIHRoZSBjb21tYW5kIGxpbmUgcHJvcGVydHlcclxuXHRcdHRoaXMucGFyc2VMaXRlcmFsc3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIG5leHQgbGl0ZXJhbCBzdHJpbmcgaW4gdGhlIGRhdGEgc3RyZWFtLiBBIGxpdGVyYWwgc3RyaW5nIGlzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBib3VuZGVkXHJcblx0ICogYnkgZG91YmxlIHF1b3Rlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlTGl0ZXJhbHN0cmluZygpOnN0cmluZ1xyXG5cdHtcclxuXHRcdHRoaXMuc2tpcFdoaXRlU3BhY2UoKTtcclxuXHJcblx0XHR2YXIgY2g6c3RyaW5nID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0dmFyIHN0cjpzdHJpbmcgPSBcIlwiO1xyXG5cclxuXHRcdGlmIChjaCAhPSBcIlxcXCJcIilcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcIlxcXCJcIik7XHJcblxyXG5cdFx0ZG8ge1xyXG5cdFx0XHRpZiAodGhpcy5fcmVhY2hlZEVPRilcclxuXHRcdFx0XHR0aGlzLnNlbmRFT0ZFcnJvcigpO1xyXG5cdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcclxuXHRcdFx0aWYgKGNoICE9IFwiXFxcIlwiKVxyXG5cdFx0XHRcdHN0ciArPSBjaDtcclxuXHRcdH0gd2hpbGUgKGNoICE9IFwiXFxcIlwiKTtcclxuXHJcblx0XHRyZXR1cm4gc3RyO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhyb3dzIGFuIGVuZC1vZi1maWxlIGVycm9yIHdoZW4gYSBwcmVtYXR1cmUgZW5kIG9mIGZpbGUgd2FzIGVuY291bnRlcmVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc2VuZEVPRkVycm9yKCk6dm9pZFxyXG5cdHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGZpbGVcIik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaHJvd3MgYW4gZXJyb3Igd2hlbiBhbiB1bmV4cGVjdGVkIHRva2VuIHdhcyBlbmNvdW50ZXJlZC5cclxuXHQgKiBAcGFyYW0gZXhwZWN0ZWQgVGhlIHRva2VuIHR5cGUgdGhhdCB3YXMgYWN0dWFsbHkgZXhwZWN0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzZW5kUGFyc2VFcnJvcihleHBlY3RlZDpzdHJpbmcpOnZvaWRcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHRva2VuIGF0IGxpbmUgXCIgKyAodGhpcy5fbGluZSArIDEpICsgXCIsIGNoYXJhY3RlciBcIiArIHRoaXMuX2NoYXJMaW5lSW5kZXggKyBcIi4gXCIgKyBleHBlY3RlZCArIFwiIGV4cGVjdGVkLCBidXQgXCIgKyB0aGlzLl90ZXh0RGF0YS5jaGFyQXQodGhpcy5fcGFyc2VJbmRleCAtIDEpICsgXCIgZW5jb3VudGVyZWRcIik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaHJvd3MgYW4gZXJyb3Igd2hlbiBhbiB1bmtub3duIGtleXdvcmQgd2FzIGVuY291bnRlcmVkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc2VuZFVua25vd25LZXl3b3JkRXJyb3IoKTp2b2lkXHJcblx0e1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBrZXl3b3JkIGF0IGxpbmUgXCIgKyAodGhpcy5fbGluZSArIDEpICsgXCIsIGNoYXJhY3RlciBcIiArIHRoaXMuX2NoYXJMaW5lSW5kZXggKyBcIi4gXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0ID0gTUQ1TWVzaFBhcnNlcjtcclxuXHJcblxyXG5jbGFzcyBWZXJ0ZXhEYXRhXHJcbntcclxuXHRwdWJsaWMgaW5kZXg6bnVtYmVyIC8qaW50Ki87XHJcblx0cHVibGljIHM6bnVtYmVyO1xyXG5cdHB1YmxpYyB0Om51bWJlcjtcclxuXHRwdWJsaWMgc3RhcnRXZWlnaHQ6bnVtYmVyIC8qaW50Ki87XHJcblx0cHVibGljIGNvdW50V2VpZ2h0Om51bWJlciAvKmludCovO1xyXG59XHJcblxyXG5jbGFzcyBKb2ludERhdGFcclxue1xyXG5cdHB1YmxpYyBpbmRleDpudW1iZXIgLyppbnQqLztcclxuXHRwdWJsaWMgam9pbnQ6bnVtYmVyIC8qaW50Ki87XHJcblx0cHVibGljIGJpYXM6bnVtYmVyO1xyXG5cdHB1YmxpYyBwb3M6VmVjdG9yM0Q7XHJcbn1cclxuXHJcbmNsYXNzIE1lc2hEYXRhXHJcbntcclxuXHRwdWJsaWMgdmVydGV4RGF0YTpBcnJheTxWZXJ0ZXhEYXRhPjtcclxuXHRwdWJsaWMgd2VpZ2h0RGF0YTpBcnJheTxKb2ludERhdGE+O1xyXG5cdHB1YmxpYyBpbmRpY2VzOkFycmF5PG51bWJlcj4gLyp1aW50Ki87XHJcbn0iXX0=