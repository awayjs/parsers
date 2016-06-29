"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AttributesBuffer_1 = require("@awayjs/core/lib/attributes/AttributesBuffer");
var Quaternion_1 = require("@awayjs/core/lib/geom/Quaternion");
var Vector3D_1 = require("@awayjs/core/lib/geom/Vector3D");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var ParserBase_1 = require("@awayjs/core/lib/parsers/ParserBase");
var TriangleElements_1 = require("@awayjs/display/lib/graphics/TriangleElements");
var DisplayObjectContainer_1 = require("@awayjs/display/lib/display/DisplayObjectContainer");
var Sprite_1 = require("@awayjs/display/lib/display/Sprite");
var SkeletonAnimationSet_1 = require("@awayjs/renderer/lib/animators/SkeletonAnimationSet");
var Skeleton_1 = require("@awayjs/renderer/lib/animators/data/Skeleton");
var SkeletonJoint_1 = require("@awayjs/renderer/lib/animators/data/SkeletonJoint");
// todo: create animation system, parse skeleton
/**
 * MD5MeshParser provides a parser for the md5mesh data type, providing the graphics of the md5 format.
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
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.TEXT);
        this._parseIndex = 0;
        this._line = 0;
        this._charLineIndex = 0;
        this._rotationQuat = new Quaternion_1.Quaternion();
        this._rotationQuat.fromAxisAngle(Vector3D_1.Vector3D.X_AXIS, -Math.PI * .5);
        if (additionalRotationAxis) {
            var quat = new Quaternion_1.Quaternion();
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
        return extension == "md5sprite";
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
                this._animationSet = new SkeletonAnimationSet_1.SkeletonAnimationSet(this._maxJointCount);
                this._sprite = new Sprite_1.Sprite();
                this._graphics = this._sprite.graphics;
                for (var i = 0; i < this._elementsData.length; ++i)
                    this._graphics.addGraphic(this.translateElements(this._elementsData[i].positionData, this._elementsData[i].weightData, this._elementsData[i].indices));
                //_graphics.animation = _animation;
                //					_sprite.animationController = _animationController;
                //add to the content property
                this._pContent.addChild(this._sprite);
                this._pFinalizeAsset(this._graphics);
                this._pFinalizeAsset(this._sprite);
                this._pFinalizeAsset(this._skeleton);
                this._pFinalizeAsset(this._animationSet);
                return ParserBase_1.ParserBase.PARSING_DONE;
            }
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    MD5MeshParser.prototype._pStartParsing = function (frameLimit) {
        //create a content object for Loaders
        this._pContent = new DisplayObjectContainer_1.DisplayObjectContainer();
        _super.prototype._pStartParsing.call(this, frameLimit);
    };
    MD5MeshParser.prototype.calculateMaxJointCount = function () {
        this._maxJointCount = 0;
        var numElementsData = this._elementsData.length;
        for (var i = 0; i < numElementsData; ++i) {
            var elementsData = this._elementsData[i];
            var positionData = elementsData.positionData;
            var numVerts = positionData.length;
            for (var j = 0; j < numVerts; ++j) {
                var zeroWeights = this.countZeroWeightJoints(positionData[j], elementsData.weightData);
                var totalJoints = positionData[j].countWeight - zeroWeights;
                if (totalJoints > this._maxJointCount)
                    this._maxJointCount = totalJoints;
            }
        }
    };
    MD5MeshParser.prototype.countZeroWeightJoints = function (position, weights) {
        var start = position.startWeight;
        var end = position.startWeight + position.countWeight;
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
        this._skeleton = new Skeleton_1.Skeleton();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            joint = new SkeletonJoint_1.SkeletonJoint();
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
     * Parses the mesh graphics.
     */
    MD5MeshParser.prototype.parseMesh = function () {
        var token = this.getNextToken();
        var ch;
        var positionData;
        var weights;
        var indices;
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
                    positionData = new Array(this.getNextInt());
                    break;
                case MD5MeshParser.MESH_NUM_TRIS_TOKEN:
                    indices = new Array(this.getNextInt() * 3) /*uint*/;
                    break;
                case MD5MeshParser.MESH_NUM_WEIGHTS_TOKEN:
                    weights = new Array(this.getNextInt());
                    break;
                case MD5MeshParser.MESH_VERT_TOKEN:
                    this.parseVertex(positionData);
                    break;
                case MD5MeshParser.MESH_TRI_TOKEN:
                    this.parseTri(indices);
                    break;
                case MD5MeshParser.MESH_WEIGHT_TOKEN:
                    this.parseJoint(weights);
                    break;
            }
        }
        if (this._elementsData == null)
            this._elementsData = new Array();
        var i = this._elementsData.length;
        this._elementsData[i] = new ElementsData();
        this._elementsData[i].positionData = positionData;
        this._elementsData[i].weightData = weights;
        this._elementsData[i].indices = indices;
    };
    /**
     * Converts the sprite data to a SkinnedSub instance.
     * @param positionData The sprite's positions.
     * @param weights The joint weights per position.
     * @param indices The indices for the faces.
     * @return A TriangleElements instance containing all elements data for the current sprite.
     */
    MD5MeshParser.prototype.translateElements = function (positionData, weights, indices /*uint*/) {
        var len = positionData.length;
        var v1 /*int*/, v2 /*int*/, v3;
        var position;
        var weight;
        var bindPose;
        var pos;
        var elements = new TriangleElements_1.TriangleElements(new AttributesBuffer_1.AttributesBuffer());
        var uvs = new Array(len * 2);
        var positions = new Array(len * 3);
        var jointIndices = new Array(len * this._maxJointCount);
        var jointWeights = new Array(len * this._maxJointCount);
        var l = 0;
        var nonZeroWeights;
        for (var i = 0; i < len; ++i) {
            position = positionData[i];
            v1 = position.index * 3;
            v2 = v1 + 1;
            v3 = v1 + 2;
            positions[v1] = positions[v2] = positions[v3] = 0;
            nonZeroWeights = 0;
            for (var j = 0; j < position.countWeight; ++j) {
                weight = weights[position.startWeight + j];
                if (weight.bias > 0) {
                    bindPose = this._bindPoses[weight.joint];
                    pos = bindPose.transformVector(weight.pos);
                    positions[v1] += pos.x * weight.bias;
                    positions[v2] += pos.y * weight.bias;
                    positions[v3] += pos.z * weight.bias;
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
            v1 = position.index << 1;
            uvs[v1++] = position.s;
            uvs[v1] = position.t;
        }
        elements.jointsPerVertex = this._maxJointCount;
        elements.setIndices(indices);
        elements.setPositions(positions);
        elements.setUVs(uvs);
        elements.setJointIndices(jointIndices);
        elements.setJointWeights(jointWeights);
        // cause explicit updates
        elements.setNormals(null);
        elements.setTangents(null);
        // turn auto updates off because they may be animated and set explicitly
        elements.autoDeriveTangents = false;
        elements.autoDeriveNormals = false;
        return elements;
    };
    /**
     * Retrieve the next triplet of position indices that form a face.
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
     * Reads the data for a single position.
     * @param positionData The list to contain the position data.
     */
    MD5MeshParser.prototype.parseVertex = function (positionData) {
        var position = new PositionData();
        position.index = this.getNextInt();
        this.parseUV(position);
        position.startWeight = this.getNextInt();
        position.countWeight = this.getNextInt();
        //			if (position.countWeight > _maxJointCount) _maxJointCount = position.countWeight;
        positionData[position.index] = position;
    };
    /**
     * Reads the next uv coordinate.
     * @param positionData The positionData to contain the UV coordinates.
     */
    MD5MeshParser.prototype.parseUV = function (positionData) {
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        positionData.s = this.getNextNumber();
        positionData.t = this.getNextNumber();
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
        var vec = new Vector3D_1.Vector3D();
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
        var quat = new Quaternion_1.Quaternion();
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
        var rotQuat = new Quaternion_1.Quaternion();
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
}(ParserBase_1.ParserBase));
exports.MD5MeshParser = MD5MeshParser;
var PositionData = (function () {
    function PositionData() {
    }
    return PositionData;
}());
exports.PositionData = PositionData;
var JointData = (function () {
    function JointData() {
    }
    return JointData;
}());
exports.JointData = JointData;
var ElementsData = (function () {
    function ElementsData() {
    }
    return ElementsData;
}());
exports.ElementsData = ElementsData;
