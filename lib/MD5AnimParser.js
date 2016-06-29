"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Quaternion_1 = require("@awayjs/core/lib/geom/Quaternion");
var Vector3D_1 = require("@awayjs/core/lib/geom/Vector3D");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var ParserBase_1 = require("@awayjs/core/lib/parsers/ParserBase");
var JointPose_1 = require("@awayjs/renderer/lib/animators/data/JointPose");
var SkeletonPose_1 = require("@awayjs/renderer/lib/animators/data/SkeletonPose");
var SkeletonClipNode_1 = require("@awayjs/renderer/lib/animators/nodes/SkeletonClipNode");
/**
 * MD5AnimParser provides a parser for the md5anim data type, providing an animation sequence for the md5 format.
 *
 * todo: optimize
 */
var MD5AnimParser = (function (_super) {
    __extends(MD5AnimParser, _super);
    /**
     * Creates a new MD5AnimParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    function MD5AnimParser(additionalRotationAxis, additionalRotationRadians) {
        if (additionalRotationAxis === void 0) { additionalRotationAxis = null; }
        if (additionalRotationRadians === void 0) { additionalRotationRadians = 0; }
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.TEXT);
        this._parseIndex = 0;
        this._line = 0;
        this._charLineIndex = 0;
        this._rotationQuat = new Quaternion_1.Quaternion();
        var t1 = new Quaternion_1.Quaternion();
        var t2 = new Quaternion_1.Quaternion();
        t1.fromAxisAngle(Vector3D_1.Vector3D.X_AXIS, -Math.PI * .5);
        t2.fromAxisAngle(Vector3D_1.Vector3D.Y_AXIS, -Math.PI * .5);
        this._rotationQuat.multiply(t2, t1);
        if (additionalRotationAxis) {
            this._rotationQuat.multiply(t2, t1);
            t1.fromAxisAngle(additionalRotationAxis, additionalRotationRadians);
            this._rotationQuat.multiply(t1, this._rotationQuat);
        }
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    MD5AnimParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        return extension == "md5anim";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    MD5AnimParser.supportsData = function (data) {
        return false;
    };
    /**
     * @inheritDoc
     */
    MD5AnimParser.prototype._pProceedParsing = function () {
        var token;
        if (!this._startedParsing) {
            this._textData = this._pGetTextData();
            this._startedParsing = true;
        }
        while (this._pHasTime()) {
            token = this.getNextToken();
            switch (token) {
                case MD5AnimParser.COMMENT_TOKEN:
                    this.ignoreLine();
                    break;
                case "":
                    // can occur at the end of a file
                    break;
                case MD5AnimParser.VERSION_TOKEN:
                    this._version = this.getNextInt();
                    if (this._version != 10)
                        throw new Error("Unknown version number encountered!");
                    break;
                case MD5AnimParser.COMMAND_LINE_TOKEN:
                    this.parseCMD();
                    break;
                case MD5AnimParser.NUM_FRAMES_TOKEN:
                    this._numFrames = this.getNextInt();
                    this._bounds = new Array();
                    this._frameData = new Array();
                    break;
                case MD5AnimParser.NUM_JOINTS_TOKEN:
                    this._numJoints = this.getNextInt();
                    this._hierarchy = new Array(this._numJoints);
                    this._baseFrameData = new Array(this._numJoints);
                    break;
                case MD5AnimParser.FRAME_RATE_TOKEN:
                    this._frameRate = this.getNextInt();
                    break;
                case MD5AnimParser.NUM_ANIMATED_COMPONENTS_TOKEN:
                    this._numAnimatedComponents = this.getNextInt();
                    break;
                case MD5AnimParser.HIERARCHY_TOKEN:
                    this.parseHierarchy();
                    break;
                case MD5AnimParser.BOUNDS_TOKEN:
                    this.parseBounds();
                    break;
                case MD5AnimParser.BASE_FRAME_TOKEN:
                    this.parseBaseFrame();
                    break;
                case MD5AnimParser.FRAME_TOKEN:
                    this.parseFrame();
                    break;
                default:
                    if (!this._reachedEOF)
                        this.sendUnknownKeywordError();
            }
            if (this._reachedEOF) {
                this._clip = new SkeletonClipNode_1.SkeletonClipNode();
                this.translateClip();
                this._pFinalizeAsset(this._clip);
                return ParserBase_1.ParserBase.PARSING_DONE;
            }
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    /**
     * Converts all key frame data to an SkinnedAnimationSequence.
     */
    MD5AnimParser.prototype.translateClip = function () {
        for (var i = 0; i < this._numFrames; ++i)
            this._clip.addFrame(this.translatePose(this._frameData[i]), 1000 / this._frameRate);
    };
    /**
     * Converts a single key frame data to a SkeletonPose.
     * @param frameData The actual frame data.
     * @return A SkeletonPose containing the frame data's pose.
     */
    MD5AnimParser.prototype.translatePose = function (frameData) {
        var hierarchy;
        var pose;
        var base;
        var flags;
        var j;
        var translate = new Vector3D_1.Vector3D();
        var orientation = new Quaternion_1.Quaternion();
        var components = frameData.components;
        var skelPose = new SkeletonPose_1.SkeletonPose();
        var jointPoses = skelPose.jointPoses;
        for (var i = 0; i < this._numJoints; ++i) {
            j = 0;
            pose = new JointPose_1.JointPose();
            hierarchy = this._hierarchy[i];
            base = this._baseFrameData[i];
            flags = hierarchy.flags;
            translate.x = base.position.x;
            translate.y = base.position.y;
            translate.z = base.position.z;
            orientation.x = base.orientation.x;
            orientation.y = base.orientation.y;
            orientation.z = base.orientation.z;
            if (flags & 1)
                translate.x = components[hierarchy.startIndex + (j++)];
            if (flags & 2)
                translate.y = components[hierarchy.startIndex + (j++)];
            if (flags & 4)
                translate.z = components[hierarchy.startIndex + (j++)];
            if (flags & 8)
                orientation.x = components[hierarchy.startIndex + (j++)];
            if (flags & 16)
                orientation.y = components[hierarchy.startIndex + (j++)];
            if (flags & 32)
                orientation.z = components[hierarchy.startIndex + (j++)];
            var w = 1 - orientation.x * orientation.x - orientation.y * orientation.y - orientation.z * orientation.z;
            orientation.w = w < 0 ? 0 : -Math.sqrt(w);
            if (hierarchy.parentIndex < 0) {
                pose.orientation.multiply(this._rotationQuat, orientation);
                pose.translation = this._rotationQuat.rotatePoint(translate);
            }
            else {
                pose.orientation.copyFrom(orientation);
                pose.translation.x = translate.x;
                pose.translation.y = translate.y;
                pose.translation.z = translate.z;
            }
            pose.orientation.y = -pose.orientation.y;
            pose.orientation.z = -pose.orientation.z;
            pose.translation.x = -pose.translation.x;
            jointPoses[i] = pose;
        }
        return skelPose;
    };
    /**
     * Parses the skeleton's hierarchy data.
     */
    MD5AnimParser.prototype.parseHierarchy = function () {
        var ch;
        var data;
        var token = this.getNextToken();
        var i = 0;
        if (token != "{")
            this.sendUnknownKeywordError();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            data = new HierarchyData();
            data.name = this.parseLiteralstring();
            data.parentIndex = this.getNextInt();
            data.flags = this.getNextInt();
            data.startIndex = this.getNextInt();
            this._hierarchy[i++] = data;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5AnimParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Parses frame bounds.
     */
    MD5AnimParser.prototype.parseBounds = function () {
        var ch;
        var data;
        var token = this.getNextToken();
        var i = 0;
        if (token != "{")
            this.sendUnknownKeywordError();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            data = new BoundsData();
            data.min = this.parseVector3D();
            data.max = this.parseVector3D();
            this._bounds[i++] = data;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5AnimParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Parses the base frame.
     */
    MD5AnimParser.prototype.parseBaseFrame = function () {
        var ch;
        var data;
        var token = this.getNextToken();
        var i = 0;
        if (token != "{")
            this.sendUnknownKeywordError();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            data = new BaseFrameData();
            data.position = this.parseVector3D();
            data.orientation = this.parseQuaternion();
            this._baseFrameData[i++] = data;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5AnimParser.COMMENT_TOKEN)
                    this.ignoreLine();
                ch = this.getNextChar();
            }
            if (ch != "}")
                this.putBack();
        } while (ch != "}");
    };
    /**
     * Parses a single frame.
     */
    MD5AnimParser.prototype.parseFrame = function () {
        var ch;
        var data;
        var token;
        var frameIndex;
        frameIndex = this.getNextInt();
        token = this.getNextToken();
        if (token != "{")
            this.sendUnknownKeywordError();
        do {
            if (this._reachedEOF)
                this.sendEOFError();
            data = new FrameData();
            data.components = new Array(this._numAnimatedComponents);
            for (var i = 0; i < this._numAnimatedComponents; ++i)
                data.components[i] = this.getNextNumber();
            this._frameData[frameIndex] = data;
            ch = this.getNextChar();
            if (ch == "/") {
                this.putBack();
                ch = this.getNextToken();
                if (ch == MD5AnimParser.COMMENT_TOKEN)
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
    MD5AnimParser.prototype.putBack = function () {
        this._parseIndex--;
        this._charLineIndex--;
        this._reachedEOF = this._parseIndex >= this._textData.length;
    };
    /**
     * Gets the next token in the data stream.
     */
    MD5AnimParser.prototype.getNextToken = function () {
        var ch;
        var token = "";
        while (!this._reachedEOF) {
            ch = this.getNextChar();
            if (ch == " " || ch == "\r" || ch == "\n" || ch == "\t") {
                if (token != MD5AnimParser.COMMENT_TOKEN)
                    this.skipWhiteSpace();
                if (token != "")
                    return token;
            }
            else
                token += ch;
            if (token == MD5AnimParser.COMMENT_TOKEN)
                return token;
        }
        return token;
    };
    /**
     * Skips all whitespace in the data stream.
     */
    MD5AnimParser.prototype.skipWhiteSpace = function () {
        var ch;
        do
            ch = this.getNextChar();
        while (ch == "\n" || ch == " " || ch == "\r" || ch == "\t");
        this.putBack();
    };
    /**
     * Skips to the next line.
     */
    MD5AnimParser.prototype.ignoreLine = function () {
        var ch;
        while (!this._reachedEOF && ch != "\n")
            ch = this.getNextChar();
    };
    /**
     * Retrieves the next single character in the data stream.
     */
    MD5AnimParser.prototype.getNextChar = function () {
        var ch = this._textData.charAt(this._parseIndex++);
        if (ch == "\n") {
            ++this._line;
            this._charLineIndex = 0;
        }
        else if (ch != "\r")
            ++this._charLineIndex;
        if (this._parseIndex == this._textData.length)
            this._reachedEOF = true;
        return ch;
    };
    /**
     * Retrieves the next integer in the data stream.
     */
    MD5AnimParser.prototype.getNextInt = function () {
        var i = parseInt(this.getNextToken());
        if (isNaN(i))
            this.sendParseError("int type");
        return i;
    };
    /**
     * Retrieves the next floating point number in the data stream.
     */
    MD5AnimParser.prototype.getNextNumber = function () {
        var f = parseFloat(this.getNextToken());
        if (isNaN(f))
            this.sendParseError("float type");
        return f;
    };
    /**
     * Retrieves the next 3d vector in the data stream.
     */
    MD5AnimParser.prototype.parseVector3D = function () {
        var vec = new Vector3D_1.Vector3D();
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        vec.x = this.getNextNumber();
        vec.y = this.getNextNumber();
        vec.z = this.getNextNumber();
        if (this.getNextToken() != ")")
            this.sendParseError(")");
        return vec;
    };
    /**
     * Retrieves the next quaternion in the data stream.
     */
    MD5AnimParser.prototype.parseQuaternion = function () {
        var quat = new Quaternion_1.Quaternion();
        var ch = this.getNextToken();
        if (ch != "(")
            this.sendParseError("(");
        quat.x = this.getNextNumber();
        quat.y = this.getNextNumber();
        quat.z = this.getNextNumber();
        // quat supposed to be unit length
        var t = 1 - (quat.x * quat.x) - (quat.y * quat.y) - (quat.z * quat.z);
        quat.w = t < 0 ? 0 : -Math.sqrt(t);
        if (this.getNextToken() != ")")
            this.sendParseError(")");
        return quat;
    };
    /**
     * Parses the command line data.
     */
    MD5AnimParser.prototype.parseCMD = function () {
        // just ignore the command line property
        this.parseLiteralstring();
    };
    /**
     * Retrieves the next literal string in the data stream. A literal string is a sequence of characters bounded
     * by double quotes.
     */
    MD5AnimParser.prototype.parseLiteralstring = function () {
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
    MD5AnimParser.prototype.sendEOFError = function () {
        throw new Error("Unexpected end of file");
    };
    /**
     * Throws an error when an unexpected token was encountered.
     * @param expected The token type that was actually expected.
     */
    MD5AnimParser.prototype.sendParseError = function (expected) {
        throw new Error("Unexpected token at line " + (this._line + 1) + ", character " + this._charLineIndex + ". " + expected + " expected, but " + this._textData.charAt(this._parseIndex - 1) + " encountered");
    };
    /**
     * Throws an error when an unknown keyword was encountered.
     */
    MD5AnimParser.prototype.sendUnknownKeywordError = function () {
        throw new Error("Unknown keyword at line " + (this._line + 1) + ", character " + this._charLineIndex + ". ");
    };
    MD5AnimParser.VERSION_TOKEN = "MD5Version";
    MD5AnimParser.COMMAND_LINE_TOKEN = "commandline";
    MD5AnimParser.NUM_FRAMES_TOKEN = "numFrames";
    MD5AnimParser.NUM_JOINTS_TOKEN = "numJoints";
    MD5AnimParser.FRAME_RATE_TOKEN = "frameRate";
    MD5AnimParser.NUM_ANIMATED_COMPONENTS_TOKEN = "numAnimatedComponents";
    MD5AnimParser.HIERARCHY_TOKEN = "hierarchy";
    MD5AnimParser.BOUNDS_TOKEN = "bounds";
    MD5AnimParser.BASE_FRAME_TOKEN = "baseframe";
    MD5AnimParser.FRAME_TOKEN = "frame";
    MD5AnimParser.COMMENT_TOKEN = "//";
    return MD5AnimParser;
}(ParserBase_1.ParserBase));
exports.MD5AnimParser = MD5AnimParser;
/**
 *
 */
var BaseFrameData = (function () {
    function BaseFrameData() {
    }
    return BaseFrameData;
}());
exports.BaseFrameData = BaseFrameData;
/**
 *
 */
var BoundsData = (function () {
    function BoundsData() {
    }
    return BoundsData;
}());
exports.BoundsData = BoundsData;
/**
 *
 */
var FrameData = (function () {
    function FrameData() {
    }
    return FrameData;
}());
exports.FrameData = FrameData;
/**
 *
 */
var HierarchyData = (function () {
    function HierarchyData() {
    }
    return HierarchyData;
}());
exports.HierarchyData = HierarchyData;
