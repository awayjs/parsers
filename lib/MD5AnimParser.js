var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Quaternion = require("awayjs-core/lib/geom/Quaternion");
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var ParserBase = require("awayjs-core/lib/parsers/ParserBase");
var JointPose = require("awayjs-renderergl/lib/animators/data/JointPose");
var SkeletonPose = require("awayjs-renderergl/lib/animators/data/SkeletonPose");
var SkeletonClipNode = require("awayjs-renderergl/lib/animators/nodes/SkeletonClipNode");
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
        _super.call(this, URLLoaderDataFormat.TEXT);
        this._parseIndex = 0;
        this._line = 0;
        this._charLineIndex = 0;
        this._rotationQuat = new Quaternion();
        var t1 = new Quaternion();
        var t2 = new Quaternion();
        t1.fromAxisAngle(Vector3D.X_AXIS, -Math.PI * .5);
        t2.fromAxisAngle(Vector3D.Y_AXIS, -Math.PI * .5);
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
                this._clip = new SkeletonClipNode();
                this.translateClip();
                this._pFinalizeAsset(this._clip);
                return ParserBase.PARSING_DONE;
            }
        }
        return ParserBase.MORE_TO_PARSE;
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
        var flags /*int*/;
        var j /*int*/;
        var translate = new Vector3D();
        var orientation = new Quaternion();
        var components = frameData.components;
        var skelPose = new SkeletonPose();
        var jointPoses = skelPose.jointPoses;
        for (var i = 0; i < this._numJoints; ++i) {
            j = 0;
            pose = new JointPose();
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
        var frameIndex /*int*/;
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
        var vec = new Vector3D();
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
        var quat = new Quaternion();
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
})(ParserBase);
/**
 *
 */
var BaseFrameData = (function () {
    function BaseFrameData() {
    }
    return BaseFrameData;
})();
/**
 *
 */
var BoundsData = (function () {
    function BoundsData() {
    }
    return BoundsData;
})();
/**
 *
 */
var FrameData = (function () {
    function FrameData() {
    }
    return FrameData;
})();
/**
 *
 */
var HierarchyData = (function () {
    function HierarchyData() {
    }
    return HierarchyData;
})();
module.exports = MD5AnimParser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9NRDVBbmltUGFyc2VyLnRzIl0sIm5hbWVzIjpbIk1ENUFuaW1QYXJzZXIiLCJNRDVBbmltUGFyc2VyLmNvbnN0cnVjdG9yIiwiTUQ1QW5pbVBhcnNlci5zdXBwb3J0c1R5cGUiLCJNRDVBbmltUGFyc2VyLnN1cHBvcnRzRGF0YSIsIk1ENUFuaW1QYXJzZXIuX3BQcm9jZWVkUGFyc2luZyIsIk1ENUFuaW1QYXJzZXIudHJhbnNsYXRlQ2xpcCIsIk1ENUFuaW1QYXJzZXIudHJhbnNsYXRlUG9zZSIsIk1ENUFuaW1QYXJzZXIucGFyc2VIaWVyYXJjaHkiLCJNRDVBbmltUGFyc2VyLnBhcnNlQm91bmRzIiwiTUQ1QW5pbVBhcnNlci5wYXJzZUJhc2VGcmFtZSIsIk1ENUFuaW1QYXJzZXIucGFyc2VGcmFtZSIsIk1ENUFuaW1QYXJzZXIucHV0QmFjayIsIk1ENUFuaW1QYXJzZXIuZ2V0TmV4dFRva2VuIiwiTUQ1QW5pbVBhcnNlci5za2lwV2hpdGVTcGFjZSIsIk1ENUFuaW1QYXJzZXIuaWdub3JlTGluZSIsIk1ENUFuaW1QYXJzZXIuZ2V0TmV4dENoYXIiLCJNRDVBbmltUGFyc2VyLmdldE5leHRJbnQiLCJNRDVBbmltUGFyc2VyLmdldE5leHROdW1iZXIiLCJNRDVBbmltUGFyc2VyLnBhcnNlVmVjdG9yM0QiLCJNRDVBbmltUGFyc2VyLnBhcnNlUXVhdGVybmlvbiIsIk1ENUFuaW1QYXJzZXIucGFyc2VDTUQiLCJNRDVBbmltUGFyc2VyLnBhcnNlTGl0ZXJhbHN0cmluZyIsIk1ENUFuaW1QYXJzZXIuc2VuZEVPRkVycm9yIiwiTUQ1QW5pbVBhcnNlci5zZW5kUGFyc2VFcnJvciIsIk1ENUFuaW1QYXJzZXIuc2VuZFVua25vd25LZXl3b3JkRXJyb3IiLCJCYXNlRnJhbWVEYXRhIiwiQmFzZUZyYW1lRGF0YS5jb25zdHJ1Y3RvciIsIkJvdW5kc0RhdGEiLCJCb3VuZHNEYXRhLmNvbnN0cnVjdG9yIiwiRnJhbWVEYXRhIiwiRnJh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Q0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMURBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNkQSxXQUFXQSxDQUFDQSxDQUFDQSxHQUFHQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUUxREEsSUFBSUEsQ0FBQ0EsR0FBVUEsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0dBLFdBQVdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLEdBQUVBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXpDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxXQUFXQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0JBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO2dCQUMzREEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFDOURBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNQQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtnQkFDdkNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNq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QkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUF5akIzQ0Esb0JBQUNBO0FBQURBLENBemtCQSxBQXlrQkNBLEVBemtCMkIsVUFBVSxFQXlrQnJDO0FBS0QsQUFHQTs7R0FERztJQUNHLGFBQWE7SUFBbkJ5QixTQUFNQSxhQUFhQTtJQVduQkMsQ0FBQ0E7SUFBREQsb0JBQUNBO0FBQURBLENBWEEsQUFXQ0EsSUFBQTtBQUVELEFBR0E7O0dBREc7SUFDRyxVQUFVO0lBQWhCRSxTQUFNQSxVQUFVQTtJQVdoQkMsQ0FBQ0E7SUFBREQsaUJBQUNBO0FBQURBLENBWEEsQUFXQ0EsSUFBQTtBQUVELEFBR0E7O0dBREc7SUFDRyxTQUFTO0lBQWZFLFNBQU1BLFNBQVNBO0lBV2ZDLENBQUNBO0lBQURELGdCQUFDQTtBQUFEQSxDQVhBLEFBV0NBLElBQUE7QUFFRCxBQUdBOztHQURHO0lBQ0csYUFBYTtJQUFuQkUsU0FBTUEsYUFBYUE7SUFxQm5CQyxDQUFDQTtJQUFERCxvQkFBQ0E7QUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7QUEzRUQsaUJBQVMsYUFBYSxDQUFDIiwiZmlsZSI6Ik1ENUFuaW1QYXJzZXIuanMiLCJzb3VyY2VSb290IjoiLi4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1YXRlcm5pb25cdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9RdWF0ZXJuaW9uXCIpO1xyXG5pbXBvcnQgVmVjdG9yM0RcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1ZlY3RvcjNEXCIpO1xyXG5pbXBvcnQgVVJMTG9hZGVyRGF0YUZvcm1hdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxMb2FkZXJEYXRhRm9ybWF0XCIpO1xyXG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XHJcblxyXG5pbXBvcnQgSm9pbnRQb3NlXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9kYXRhL0pvaW50UG9zZVwiKTtcclxuaW1wb3J0IFNrZWxldG9uUG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblBvc2VcIik7XHJcbmltcG9ydCBTa2VsZXRvbkNsaXBOb2RlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvbm9kZXMvU2tlbGV0b25DbGlwTm9kZVwiKTtcclxuXHJcbi8qKlxyXG4gKiBNRDVBbmltUGFyc2VyIHByb3ZpZGVzIGEgcGFyc2VyIGZvciB0aGUgbWQ1YW5pbSBkYXRhIHR5cGUsIHByb3ZpZGluZyBhbiBhbmltYXRpb24gc2VxdWVuY2UgZm9yIHRoZSBtZDUgZm9ybWF0LlxyXG4gKlxyXG4gKiB0b2RvOiBvcHRpbWl6ZVxyXG4gKi9cclxuY2xhc3MgTUQ1QW5pbVBhcnNlciBleHRlbmRzIFBhcnNlckJhc2Vcclxue1xyXG5cdHByaXZhdGUgX3RleHREYXRhOnN0cmluZztcclxuXHRwcml2YXRlIF9zdGFydGVkUGFyc2luZzpib29sZWFuO1xyXG5cdHB1YmxpYyBzdGF0aWMgVkVSU0lPTl9UT0tFTjpzdHJpbmcgPSBcIk1ENVZlcnNpb25cIjtcclxuXHRwdWJsaWMgc3RhdGljIENPTU1BTkRfTElORV9UT0tFTjpzdHJpbmcgPSBcImNvbW1hbmRsaW5lXCI7XHJcblx0cHVibGljIHN0YXRpYyBOVU1fRlJBTUVTX1RPS0VOOnN0cmluZyA9IFwibnVtRnJhbWVzXCI7XHJcblx0cHVibGljIHN0YXRpYyBOVU1fSk9JTlRTX1RPS0VOOnN0cmluZyA9IFwibnVtSm9pbnRzXCI7XHJcblx0cHVibGljIHN0YXRpYyBGUkFNRV9SQVRFX1RPS0VOOnN0cmluZyA9IFwiZnJhbWVSYXRlXCI7XHJcblx0cHVibGljIHN0YXRpYyBOVU1fQU5JTUFURURfQ09NUE9ORU5UU19UT0tFTjpzdHJpbmcgPSBcIm51bUFuaW1hdGVkQ29tcG9uZW50c1wiO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIEhJRVJBUkNIWV9UT0tFTjpzdHJpbmcgPSBcImhpZXJhcmNoeVwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgQk9VTkRTX1RPS0VOOnN0cmluZyA9IFwiYm91bmRzXCI7XHJcblx0cHVibGljIHN0YXRpYyBCQVNFX0ZSQU1FX1RPS0VOOnN0cmluZyA9IFwiYmFzZWZyYW1lXCI7XHJcblx0cHVibGljIHN0YXRpYyBGUkFNRV9UT0tFTjpzdHJpbmcgPSBcImZyYW1lXCI7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgQ09NTUVOVF9UT0tFTjpzdHJpbmcgPSBcIi8vXCI7XHJcblxyXG5cdHByaXZhdGUgX3BhcnNlSW5kZXg6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cdHByaXZhdGUgX3JlYWNoZWRFT0Y6Ym9vbGVhbjtcclxuXHRwcml2YXRlIF9saW5lOm51bWJlciAvKmludCovID0gMDtcclxuXHRwcml2YXRlIF9jaGFyTGluZUluZGV4Om51bWJlciAvKmludCovID0gMDtcclxuXHRwcml2YXRlIF92ZXJzaW9uOm51bWJlciAvKmludCovO1xyXG5cdHByaXZhdGUgX2ZyYW1lUmF0ZTpudW1iZXIgLyppbnQqLztcclxuXHRwcml2YXRlIF9udW1GcmFtZXM6bnVtYmVyIC8qaW50Ki87XHJcblx0cHJpdmF0ZSBfbnVtSm9pbnRzOm51bWJlciAvKmludCovO1xyXG5cdHByaXZhdGUgX251bUFuaW1hdGVkQ29tcG9uZW50czpudW1iZXIgLyppbnQqLztcclxuXHJcblx0cHJpdmF0ZSBfaGllcmFyY2h5OkFycmF5PEhpZXJhcmNoeURhdGE+O1xyXG5cdHByaXZhdGUgX2JvdW5kczpBcnJheTxCb3VuZHNEYXRhPjtcclxuXHRwcml2YXRlIF9mcmFtZURhdGE6QXJyYXk8RnJhbWVEYXRhPjtcclxuXHRwcml2YXRlIF9iYXNlRnJhbWVEYXRhOkFycmF5PEJhc2VGcmFtZURhdGE+O1xyXG5cclxuXHRwcml2YXRlIF9yb3RhdGlvblF1YXQ6UXVhdGVybmlvbjtcclxuXHRwcml2YXRlIF9jbGlwOlNrZWxldG9uQ2xpcE5vZGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSBuZXcgTUQ1QW5pbVBhcnNlciBvYmplY3QuXHJcblx0ICogQHBhcmFtIHVyaSBUaGUgdXJsIG9yIGlkIG9mIHRoZSBkYXRhIG9yIGZpbGUgdG8gYmUgcGFyc2VkLlxyXG5cdCAqIEBwYXJhbSBleHRyYSBUaGUgaG9sZGVyIGZvciBleHRyYSBjb250ZXh0dWFsIGRhdGEgdGhhdCB0aGUgcGFyc2VyIG1pZ2h0IG5lZWQuXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoYWRkaXRpb25hbFJvdGF0aW9uQXhpczpWZWN0b3IzRCA9IG51bGwsIGFkZGl0aW9uYWxSb3RhdGlvblJhZGlhbnM6bnVtYmVyID0gMClcclxuXHR7XHJcblx0XHRzdXBlcihVUkxMb2FkZXJEYXRhRm9ybWF0LlRFWFQpO1xyXG5cdFx0dGhpcy5fcm90YXRpb25RdWF0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHRcdHZhciB0MTpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHRcdHZhciB0MjpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHJcblx0XHR0MS5mcm9tQXhpc0FuZ2xlKFZlY3RvcjNELlhfQVhJUywgLU1hdGguUEkqLjUpO1xyXG5cdFx0dDIuZnJvbUF4aXNBbmdsZShWZWN0b3IzRC5ZX0FYSVMsIC1NYXRoLlBJKi41KTtcclxuXHJcblx0XHR0aGlzLl9yb3RhdGlvblF1YXQubXVsdGlwbHkodDIsIHQxKTtcclxuXHJcblx0XHRpZiAoYWRkaXRpb25hbFJvdGF0aW9uQXhpcykge1xyXG5cdFx0XHR0aGlzLl9yb3RhdGlvblF1YXQubXVsdGlwbHkodDIsIHQxKTtcclxuXHRcdFx0dDEuZnJvbUF4aXNBbmdsZShhZGRpdGlvbmFsUm90YXRpb25BeGlzLCBhZGRpdGlvbmFsUm90YXRpb25SYWRpYW5zKTtcclxuXHRcdFx0dGhpcy5fcm90YXRpb25RdWF0Lm11bHRpcGx5KHQxLCB0aGlzLl9yb3RhdGlvblF1YXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gZmlsZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGJ5IHRoZSBwYXJzZXIuXHJcblx0ICogQHBhcmFtIGV4dGVuc2lvbiBUaGUgZmlsZSBleHRlbnNpb24gb2YgYSBwb3RlbnRpYWwgZmlsZSB0byBiZSBwYXJzZWQuXHJcblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZmlsZSB0eXBlIGlzIHN1cHBvcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzVHlwZShleHRlbnNpb246c3RyaW5nKTpib29sZWFuXHJcblx0e1xyXG5cdFx0ZXh0ZW5zaW9uID0gZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRyZXR1cm4gZXh0ZW5zaW9uID09IFwibWQ1YW5pbVwiO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGVzdHMgd2hldGhlciBhIGRhdGEgYmxvY2sgY2FuIGJlIHBhcnNlZCBieSB0aGUgcGFyc2VyLlxyXG5cdCAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGJsb2NrIHRvIHBvdGVudGlhbGx5IGJlIHBhcnNlZC5cclxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBkYXRhIGlzIHN1cHBvcnRlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzRGF0YShkYXRhOmFueSk6Ym9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBpbmhlcml0RG9jXHJcblx0ICovXHJcblx0cHVibGljIF9wUHJvY2VlZFBhcnNpbmcoKTpib29sZWFuXHJcblx0e1xyXG5cdFx0dmFyIHRva2VuOnN0cmluZztcclxuXHJcblx0XHRpZiAoIXRoaXMuX3N0YXJ0ZWRQYXJzaW5nKSB7XHJcblx0XHRcdHRoaXMuX3RleHREYXRhID0gdGhpcy5fcEdldFRleHREYXRhKCk7XHJcblx0XHRcdHRoaXMuX3N0YXJ0ZWRQYXJzaW5nID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHR3aGlsZSAodGhpcy5fcEhhc1RpbWUoKSkge1xyXG5cdFx0XHR0b2tlbiA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRcdHN3aXRjaCAodG9rZW4pIHtcclxuXHRcdFx0XHRjYXNlIE1ENUFuaW1QYXJzZXIuQ09NTUVOVF9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMuaWdub3JlTGluZSgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcIlwiOlxyXG5cdFx0XHRcdFx0Ly8gY2FuIG9jY3VyIGF0IHRoZSBlbmQgb2YgYSBmaWxlXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1ENUFuaW1QYXJzZXIuVkVSU0lPTl9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMuX3ZlcnNpb24gPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLl92ZXJzaW9uICE9IDEwKVxyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHZlcnNpb24gbnVtYmVyIGVuY291bnRlcmVkIVwiKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1QW5pbVBhcnNlci5DT01NQU5EX0xJTkVfVE9LRU46XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ01EKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1ENUFuaW1QYXJzZXIuTlVNX0ZSQU1FU19UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMuX251bUZyYW1lcyA9IHRoaXMuZ2V0TmV4dEludCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5fYm91bmRzID0gbmV3IEFycmF5PEJvdW5kc0RhdGE+KCk7XHJcblx0XHRcdFx0XHR0aGlzLl9mcmFtZURhdGEgPSBuZXcgQXJyYXk8RnJhbWVEYXRhPigpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBNRDVBbmltUGFyc2VyLk5VTV9KT0lOVFNfVE9LRU46XHJcblx0XHRcdFx0XHR0aGlzLl9udW1Kb2ludHMgPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdFx0XHRcdHRoaXMuX2hpZXJhcmNoeSA9IG5ldyBBcnJheTxIaWVyYXJjaHlEYXRhPih0aGlzLl9udW1Kb2ludHMpO1xyXG5cdFx0XHRcdFx0dGhpcy5fYmFzZUZyYW1lRGF0YSA9IG5ldyBBcnJheTxCYXNlRnJhbWVEYXRhPih0aGlzLl9udW1Kb2ludHMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBNRDVBbmltUGFyc2VyLkZSQU1FX1JBVEVfVE9LRU46XHJcblx0XHRcdFx0XHR0aGlzLl9mcmFtZVJhdGUgPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1QW5pbVBhcnNlci5OVU1fQU5JTUFURURfQ09NUE9ORU5UU19UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMuX251bUFuaW1hdGVkQ29tcG9uZW50cyA9IHRoaXMuZ2V0TmV4dEludCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBNRDVBbmltUGFyc2VyLkhJRVJBUkNIWV9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VIaWVyYXJjaHkoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1QW5pbVBhcnNlci5CT1VORFNfVE9LRU46XHJcblx0XHRcdFx0XHR0aGlzLnBhcnNlQm91bmRzKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIE1ENUFuaW1QYXJzZXIuQkFTRV9GUkFNRV9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VCYXNlRnJhbWUoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgTUQ1QW5pbVBhcnNlci5GUkFNRV9UT0tFTjpcclxuXHRcdFx0XHRcdHRoaXMucGFyc2VGcmFtZSgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGlmICghdGhpcy5fcmVhY2hlZEVPRilcclxuXHRcdFx0XHRcdFx0dGhpcy5zZW5kVW5rbm93bktleXdvcmRFcnJvcigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5fcmVhY2hlZEVPRikge1xyXG5cdFx0XHRcdHRoaXMuX2NsaXAgPSBuZXcgU2tlbGV0b25DbGlwTm9kZSgpO1xyXG5cdFx0XHRcdHRoaXMudHJhbnNsYXRlQ2xpcCgpO1xyXG5cdFx0XHRcdHRoaXMuX3BGaW5hbGl6ZUFzc2V0KHRoaXMuX2NsaXApO1xyXG5cdFx0XHRcdHJldHVybiBQYXJzZXJCYXNlLlBBUlNJTkdfRE9ORTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFBhcnNlckJhc2UuTU9SRV9UT19QQVJTRTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnZlcnRzIGFsbCBrZXkgZnJhbWUgZGF0YSB0byBhbiBTa2lubmVkQW5pbWF0aW9uU2VxdWVuY2UuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB0cmFuc2xhdGVDbGlwKCk6dm9pZFxyXG5cdHtcclxuXHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdGhpcy5fbnVtRnJhbWVzOyArK2kpXHJcblx0XHRcdHRoaXMuX2NsaXAuYWRkRnJhbWUodGhpcy50cmFuc2xhdGVQb3NlKHRoaXMuX2ZyYW1lRGF0YVtpXSksIDEwMDAvdGhpcy5fZnJhbWVSYXRlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnZlcnRzIGEgc2luZ2xlIGtleSBmcmFtZSBkYXRhIHRvIGEgU2tlbGV0b25Qb3NlLlxyXG5cdCAqIEBwYXJhbSBmcmFtZURhdGEgVGhlIGFjdHVhbCBmcmFtZSBkYXRhLlxyXG5cdCAqIEByZXR1cm4gQSBTa2VsZXRvblBvc2UgY29udGFpbmluZyB0aGUgZnJhbWUgZGF0YSdzIHBvc2UuXHJcblx0ICovXHJcblx0cHJpdmF0ZSB0cmFuc2xhdGVQb3NlKGZyYW1lRGF0YTpGcmFtZURhdGEpOlNrZWxldG9uUG9zZVxyXG5cdHtcclxuXHRcdHZhciBoaWVyYXJjaHk6SGllcmFyY2h5RGF0YTtcclxuXHRcdHZhciBwb3NlOkpvaW50UG9zZTtcclxuXHRcdHZhciBiYXNlOkJhc2VGcmFtZURhdGE7XHJcblx0XHR2YXIgZmxhZ3M6bnVtYmVyIC8qaW50Ki87XHJcblx0XHR2YXIgajpudW1iZXIgLyppbnQqLztcclxuXHRcdHZhciB0cmFuc2xhdGU6VmVjdG9yM0QgPSBuZXcgVmVjdG9yM0QoKTtcclxuXHRcdHZhciBvcmllbnRhdGlvbjpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHRcdHZhciBjb21wb25lbnRzOkFycmF5PG51bWJlcj4gPSBmcmFtZURhdGEuY29tcG9uZW50cztcclxuXHRcdHZhciBza2VsUG9zZTpTa2VsZXRvblBvc2UgPSBuZXcgU2tlbGV0b25Qb3NlKCk7XHJcblx0XHR2YXIgam9pbnRQb3NlczpBcnJheTxKb2ludFBvc2U+ID0gc2tlbFBvc2Uuam9pbnRQb3NlcztcclxuXHJcblx0XHRmb3IgKHZhciBpOm51bWJlciAvKmludCovID0gMDsgaSA8IHRoaXMuX251bUpvaW50czsgKytpKSB7XHJcblx0XHRcdGogPSAwO1xyXG5cdFx0XHRwb3NlID0gbmV3IEpvaW50UG9zZSgpO1xyXG5cdFx0XHRoaWVyYXJjaHkgPSB0aGlzLl9oaWVyYXJjaHlbaV07XHJcblx0XHRcdGJhc2UgPSB0aGlzLl9iYXNlRnJhbWVEYXRhW2ldO1xyXG5cdFx0XHRmbGFncyA9IGhpZXJhcmNoeS5mbGFncztcclxuXHRcdFx0dHJhbnNsYXRlLnggPSBiYXNlLnBvc2l0aW9uLng7XHJcblx0XHRcdHRyYW5zbGF0ZS55ID0gYmFzZS5wb3NpdGlvbi55O1xyXG5cdFx0XHR0cmFuc2xhdGUueiA9IGJhc2UucG9zaXRpb24uejtcclxuXHRcdFx0b3JpZW50YXRpb24ueCA9IGJhc2Uub3JpZW50YXRpb24ueDtcclxuXHRcdFx0b3JpZW50YXRpb24ueSA9IGJhc2Uub3JpZW50YXRpb24ueTtcclxuXHRcdFx0b3JpZW50YXRpb24ueiA9IGJhc2Uub3JpZW50YXRpb24uejtcclxuXHJcblx0XHRcdGlmIChmbGFncyAmIDEpXHJcblx0XHRcdFx0dHJhbnNsYXRlLnggPSBjb21wb25lbnRzW2hpZXJhcmNoeS5zdGFydEluZGV4ICsgKGorKyldO1xyXG5cdFx0XHRpZiAoZmxhZ3MgJiAyKVxyXG5cdFx0XHRcdHRyYW5zbGF0ZS55ID0gY29tcG9uZW50c1toaWVyYXJjaHkuc3RhcnRJbmRleCArIChqKyspXTtcclxuXHRcdFx0aWYgKGZsYWdzICYgNClcclxuXHRcdFx0XHR0cmFuc2xhdGUueiA9IGNvbXBvbmVudHNbaGllcmFyY2h5LnN0YXJ0SW5kZXggKyAoaisrKV07XHJcblx0XHRcdGlmIChmbGFncyAmIDgpXHJcblx0XHRcdFx0b3JpZW50YXRpb24ueCA9IGNvbXBvbmVudHNbaGllcmFyY2h5LnN0YXJ0SW5kZXggKyAoaisrKV07XHJcblx0XHRcdGlmIChmbGFncyAmIDE2KVxyXG5cdFx0XHRcdG9yaWVudGF0aW9uLnkgPSBjb21wb25lbnRzW2hpZXJhcmNoeS5zdGFydEluZGV4ICsgKGorKyldO1xyXG5cdFx0XHRpZiAoZmxhZ3MgJiAzMilcclxuXHRcdFx0XHRvcmllbnRhdGlvbi56ID0gY29tcG9uZW50c1toaWVyYXJjaHkuc3RhcnRJbmRleCArIChqKyspXTtcclxuXHJcblx0XHRcdHZhciB3Om51bWJlciA9IDEgLSBvcmllbnRhdGlvbi54Km9yaWVudGF0aW9uLnggLSBvcmllbnRhdGlvbi55Km9yaWVudGF0aW9uLnkgLSBvcmllbnRhdGlvbi56Km9yaWVudGF0aW9uLno7XHJcblx0XHRcdG9yaWVudGF0aW9uLncgPSB3IDwgMD8gMCA6IC1NYXRoLnNxcnQodyk7XHJcblxyXG5cdFx0XHRpZiAoaGllcmFyY2h5LnBhcmVudEluZGV4IDwgMCkge1xyXG5cdFx0XHRcdHBvc2Uub3JpZW50YXRpb24ubXVsdGlwbHkodGhpcy5fcm90YXRpb25RdWF0LCBvcmllbnRhdGlvbik7XHJcblx0XHRcdFx0cG9zZS50cmFuc2xhdGlvbiA9IHRoaXMuX3JvdGF0aW9uUXVhdC5yb3RhdGVQb2ludCh0cmFuc2xhdGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBvc2Uub3JpZW50YXRpb24uY29weUZyb20ob3JpZW50YXRpb24pO1xyXG5cdFx0XHRcdHBvc2UudHJhbnNsYXRpb24ueCA9IHRyYW5zbGF0ZS54O1xyXG5cdFx0XHRcdHBvc2UudHJhbnNsYXRpb24ueSA9IHRyYW5zbGF0ZS55O1xyXG5cdFx0XHRcdHBvc2UudHJhbnNsYXRpb24ueiA9IHRyYW5zbGF0ZS56O1xyXG5cdFx0XHR9XHJcblx0XHRcdHBvc2Uub3JpZW50YXRpb24ueSA9IC1wb3NlLm9yaWVudGF0aW9uLnk7XHJcblx0XHRcdHBvc2Uub3JpZW50YXRpb24ueiA9IC1wb3NlLm9yaWVudGF0aW9uLno7XHJcblx0XHRcdHBvc2UudHJhbnNsYXRpb24ueCA9IC1wb3NlLnRyYW5zbGF0aW9uLng7XHJcblxyXG5cdFx0XHRqb2ludFBvc2VzW2ldID0gcG9zZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc2tlbFBvc2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgdGhlIHNrZWxldG9uJ3MgaGllcmFyY2h5IGRhdGEuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwYXJzZUhpZXJhcmNoeSgpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgY2g6c3RyaW5nO1xyXG5cdFx0dmFyIGRhdGE6SGllcmFyY2h5RGF0YTtcclxuXHRcdHZhciB0b2tlbjpzdHJpbmcgPSB0aGlzLmdldE5leHRUb2tlbigpO1xyXG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwO1xyXG5cclxuXHRcdGlmICh0b2tlbiAhPSBcIntcIilcclxuXHRcdFx0dGhpcy5zZW5kVW5rbm93bktleXdvcmRFcnJvcigpO1xyXG5cclxuXHRcdGRvIHtcclxuXHRcdFx0aWYgKHRoaXMuX3JlYWNoZWRFT0YpXHJcblx0XHRcdFx0dGhpcy5zZW5kRU9GRXJyb3IoKTtcclxuXHRcdFx0ZGF0YSA9IG5ldyBIaWVyYXJjaHlEYXRhKCk7XHJcblx0XHRcdGRhdGEubmFtZSA9IHRoaXMucGFyc2VMaXRlcmFsc3RyaW5nKCk7XHJcblx0XHRcdGRhdGEucGFyZW50SW5kZXggPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdFx0ZGF0YS5mbGFncyA9IHRoaXMuZ2V0TmV4dEludCgpO1xyXG5cdFx0XHRkYXRhLnN0YXJ0SW5kZXggPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHRcdFx0dGhpcy5faGllcmFyY2h5W2krK10gPSBkYXRhO1xyXG5cclxuXHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblxyXG5cdFx0XHRpZiAoY2ggPT0gXCIvXCIpIHtcclxuXHRcdFx0XHR0aGlzLnB1dEJhY2soKTtcclxuXHRcdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRcdFx0aWYgKGNoID09IE1ENUFuaW1QYXJzZXIuQ09NTUVOVF9UT0tFTilcclxuXHRcdFx0XHRcdHRoaXMuaWdub3JlTGluZSgpO1xyXG5cdFx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY2ggIT0gXCJ9XCIpXHJcblx0XHRcdFx0dGhpcy5wdXRCYWNrKCk7XHJcblxyXG5cdFx0fSB3aGlsZSAoY2ggIT0gXCJ9XCIpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGFyc2VzIGZyYW1lIGJvdW5kcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlQm91bmRzKCk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBjaDpzdHJpbmc7XHJcblx0XHR2YXIgZGF0YTpCb3VuZHNEYXRhO1xyXG5cdFx0dmFyIHRva2VuOnN0cmluZyA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR2YXIgaTpudW1iZXIgLyppbnQqLyA9IDA7XHJcblxyXG5cdFx0aWYgKHRva2VuICE9IFwie1wiKVxyXG5cdFx0XHR0aGlzLnNlbmRVbmtub3duS2V5d29yZEVycm9yKCk7XHJcblxyXG5cdFx0ZG8ge1xyXG5cdFx0XHRpZiAodGhpcy5fcmVhY2hlZEVPRilcclxuXHRcdFx0XHR0aGlzLnNlbmRFT0ZFcnJvcigpO1xyXG5cdFx0XHRkYXRhID0gbmV3IEJvdW5kc0RhdGEoKTtcclxuXHRcdFx0ZGF0YS5taW4gPSB0aGlzLnBhcnNlVmVjdG9yM0QoKTtcclxuXHRcdFx0ZGF0YS5tYXggPSB0aGlzLnBhcnNlVmVjdG9yM0QoKTtcclxuXHRcdFx0dGhpcy5fYm91bmRzW2krK10gPSBkYXRhO1xyXG5cclxuXHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblxyXG5cdFx0XHRpZiAoY2ggPT0gXCIvXCIpIHtcclxuXHRcdFx0XHR0aGlzLnB1dEJhY2soKTtcclxuXHRcdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRcdFx0aWYgKGNoID09IE1ENUFuaW1QYXJzZXIuQ09NTUVOVF9UT0tFTilcclxuXHRcdFx0XHRcdHRoaXMuaWdub3JlTGluZSgpO1xyXG5cdFx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY2ggIT0gXCJ9XCIpXHJcblx0XHRcdFx0dGhpcy5wdXRCYWNrKCk7XHJcblxyXG5cdFx0fSB3aGlsZSAoY2ggIT0gXCJ9XCIpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGFyc2VzIHRoZSBiYXNlIGZyYW1lLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VCYXNlRnJhbWUoKTp2b2lkXHJcblx0e1xyXG5cdFx0dmFyIGNoOnN0cmluZztcclxuXHRcdHZhciBkYXRhOkJhc2VGcmFtZURhdGE7XHJcblx0XHR2YXIgdG9rZW46c3RyaW5nID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcclxuXHRcdHZhciBpOm51bWJlciAvKmludCovID0gMDtcclxuXHJcblx0XHRpZiAodG9rZW4gIT0gXCJ7XCIpXHJcblx0XHRcdHRoaXMuc2VuZFVua25vd25LZXl3b3JkRXJyb3IoKTtcclxuXHJcblx0XHRkbyB7XHJcblx0XHRcdGlmICh0aGlzLl9yZWFjaGVkRU9GKVxyXG5cdFx0XHRcdHRoaXMuc2VuZEVPRkVycm9yKCk7XHJcblx0XHRcdGRhdGEgPSBuZXcgQmFzZUZyYW1lRGF0YSgpO1xyXG5cdFx0XHRkYXRhLnBvc2l0aW9uID0gdGhpcy5wYXJzZVZlY3RvcjNEKCk7XHJcblx0XHRcdGRhdGEub3JpZW50YXRpb24gPSB0aGlzLnBhcnNlUXVhdGVybmlvbigpO1xyXG5cdFx0XHR0aGlzLl9iYXNlRnJhbWVEYXRhW2krK10gPSBkYXRhO1xyXG5cclxuXHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblxyXG5cdFx0XHRpZiAoY2ggPT0gXCIvXCIpIHtcclxuXHRcdFx0XHR0aGlzLnB1dEJhY2soKTtcclxuXHRcdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRcdFx0aWYgKGNoID09IE1ENUFuaW1QYXJzZXIuQ09NTUVOVF9UT0tFTilcclxuXHRcdFx0XHRcdHRoaXMuaWdub3JlTGluZSgpO1xyXG5cdFx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY2ggIT0gXCJ9XCIpXHJcblx0XHRcdFx0dGhpcy5wdXRCYWNrKCk7XHJcblxyXG5cdFx0fSB3aGlsZSAoY2ggIT0gXCJ9XCIpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGFyc2VzIGEgc2luZ2xlIGZyYW1lLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VGcmFtZSgpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgY2g6c3RyaW5nO1xyXG5cdFx0dmFyIGRhdGE6RnJhbWVEYXRhO1xyXG5cdFx0dmFyIHRva2VuOnN0cmluZztcclxuXHRcdHZhciBmcmFtZUluZGV4Om51bWJlciAvKmludCovO1xyXG5cclxuXHRcdGZyYW1lSW5kZXggPSB0aGlzLmdldE5leHRJbnQoKTtcclxuXHJcblx0XHR0b2tlbiA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRpZiAodG9rZW4gIT0gXCJ7XCIpXHJcblx0XHRcdHRoaXMuc2VuZFVua25vd25LZXl3b3JkRXJyb3IoKTtcclxuXHJcblx0XHRkbyB7XHJcblx0XHRcdGlmICh0aGlzLl9yZWFjaGVkRU9GKVxyXG5cdFx0XHRcdHRoaXMuc2VuZEVPRkVycm9yKCk7XHJcblx0XHRcdGRhdGEgPSBuZXcgRnJhbWVEYXRhKCk7XHJcblx0XHRcdGRhdGEuY29tcG9uZW50cyA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuX251bUFuaW1hdGVkQ29tcG9uZW50cyk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpOm51bWJlciAvKmludCovID0gMDsgaSA8IHRoaXMuX251bUFuaW1hdGVkQ29tcG9uZW50czsgKytpKVxyXG5cdFx0XHRcdGRhdGEuY29tcG9uZW50c1tpXSA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xyXG5cclxuXHRcdFx0dGhpcy5fZnJhbWVEYXRhW2ZyYW1lSW5kZXhdID0gZGF0YTtcclxuXHJcblx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cclxuXHRcdFx0aWYgKGNoID09IFwiL1wiKSB7XHJcblx0XHRcdFx0dGhpcy5wdXRCYWNrKCk7XHJcblx0XHRcdFx0Y2ggPSB0aGlzLmdldE5leHRUb2tlbigpO1xyXG5cdFx0XHRcdGlmIChjaCA9PSBNRDVBbmltUGFyc2VyLkNPTU1FTlRfVE9LRU4pXHJcblx0XHRcdFx0XHR0aGlzLmlnbm9yZUxpbmUoKTtcclxuXHRcdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNoICE9IFwifVwiKVxyXG5cdFx0XHRcdHRoaXMucHV0QmFjaygpO1xyXG5cclxuXHRcdH0gd2hpbGUgKGNoICE9IFwifVwiKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFB1dHMgYmFjayB0aGUgbGFzdCByZWFkIGNoYXJhY3RlciBpbnRvIHRoZSBkYXRhIHN0cmVhbS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHB1dEJhY2soKTp2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5fcGFyc2VJbmRleC0tO1xyXG5cdFx0dGhpcy5fY2hhckxpbmVJbmRleC0tO1xyXG5cdFx0dGhpcy5fcmVhY2hlZEVPRiA9IHRoaXMuX3BhcnNlSW5kZXggPj0gdGhpcy5fdGV4dERhdGEubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyB0aGUgbmV4dCB0b2tlbiBpbiB0aGUgZGF0YSBzdHJlYW0uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBnZXROZXh0VG9rZW4oKTpzdHJpbmdcclxuXHR7XHJcblx0XHR2YXIgY2g6c3RyaW5nO1xyXG5cdFx0dmFyIHRva2VuOnN0cmluZyA9IFwiXCI7XHJcblxyXG5cdFx0d2hpbGUgKCF0aGlzLl9yZWFjaGVkRU9GKSB7XHJcblx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHRpZiAoY2ggPT0gXCIgXCIgfHwgY2ggPT0gXCJcXHJcIiB8fCBjaCA9PSBcIlxcblwiIHx8IGNoID09IFwiXFx0XCIpIHtcclxuXHRcdFx0XHRpZiAodG9rZW4gIT0gTUQ1QW5pbVBhcnNlci5DT01NRU5UX1RPS0VOKVxyXG5cdFx0XHRcdFx0dGhpcy5za2lwV2hpdGVTcGFjZSgpO1xyXG5cdFx0XHRcdGlmICh0b2tlbiAhPSBcIlwiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRva2VuO1xyXG5cdFx0XHR9IGVsc2VcclxuXHRcdFx0XHR0b2tlbiArPSBjaDtcclxuXHJcblx0XHRcdGlmICh0b2tlbiA9PSBNRDVBbmltUGFyc2VyLkNPTU1FTlRfVE9LRU4pXHJcblx0XHRcdFx0cmV0dXJuIHRva2VuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0b2tlbjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNraXBzIGFsbCB3aGl0ZXNwYWNlIGluIHRoZSBkYXRhIHN0cmVhbS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHNraXBXaGl0ZVNwYWNlKCk6dm9pZFxyXG5cdHtcclxuXHRcdHZhciBjaDpzdHJpbmc7XHJcblxyXG5cdFx0ZG9cclxuXHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7IHdoaWxlIChjaCA9PSBcIlxcblwiIHx8IGNoID09IFwiIFwiIHx8IGNoID09IFwiXFxyXCIgfHwgY2ggPT0gXCJcXHRcIik7XHJcblxyXG5cdFx0dGhpcy5wdXRCYWNrKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTa2lwcyB0byB0aGUgbmV4dCBsaW5lLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgaWdub3JlTGluZSgpOnZvaWRcclxuXHR7XHJcblx0XHR2YXIgY2g6c3RyaW5nO1xyXG5cdFx0d2hpbGUgKCF0aGlzLl9yZWFjaGVkRU9GICYmIGNoICE9IFwiXFxuXCIpXHJcblx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHRoZSBuZXh0IHNpbmdsZSBjaGFyYWN0ZXIgaW4gdGhlIGRhdGEgc3RyZWFtLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZ2V0TmV4dENoYXIoKTpzdHJpbmdcclxuXHR7XHJcblx0XHR2YXIgY2g6c3RyaW5nID0gdGhpcy5fdGV4dERhdGEuY2hhckF0KHRoaXMuX3BhcnNlSW5kZXgrKyk7XHJcblxyXG5cdFx0aWYgKGNoID09IFwiXFxuXCIpIHtcclxuXHRcdFx0Kyt0aGlzLl9saW5lO1xyXG5cdFx0XHR0aGlzLl9jaGFyTGluZUluZGV4ID0gMDtcclxuXHRcdH0gZWxzZSBpZiAoY2ggIT0gXCJcXHJcIilcclxuXHRcdFx0Kyt0aGlzLl9jaGFyTGluZUluZGV4O1xyXG5cclxuXHRcdGlmICh0aGlzLl9wYXJzZUluZGV4ID09IHRoaXMuX3RleHREYXRhLmxlbmd0aClcclxuXHRcdFx0dGhpcy5fcmVhY2hlZEVPRiA9IHRydWU7XHJcblxyXG5cdFx0cmV0dXJuIGNoO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHRoZSBuZXh0IGludGVnZXIgaW4gdGhlIGRhdGEgc3RyZWFtLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZ2V0TmV4dEludCgpOm51bWJlciAvKmludCovXHJcblx0e1xyXG5cdFx0dmFyIGk6bnVtYmVyID0gcGFyc2VJbnQodGhpcy5nZXROZXh0VG9rZW4oKSk7XHJcblx0XHRpZiAoaXNOYU4oaSkpXHJcblx0XHRcdHRoaXMuc2VuZFBhcnNlRXJyb3IoXCJpbnQgdHlwZVwiKTtcclxuXHRcdHJldHVybiBpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0cmlldmVzIHRoZSBuZXh0IGZsb2F0aW5nIHBvaW50IG51bWJlciBpbiB0aGUgZGF0YSBzdHJlYW0uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBnZXROZXh0TnVtYmVyKCk6bnVtYmVyXHJcblx0e1xyXG5cdFx0dmFyIGY6bnVtYmVyID0gcGFyc2VGbG9hdCh0aGlzLmdldE5leHRUb2tlbigpKTtcclxuXHRcdGlmIChpc05hTihmKSlcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcImZsb2F0IHR5cGVcIik7XHJcblx0XHRyZXR1cm4gZjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB0aGUgbmV4dCAzZCB2ZWN0b3IgaW4gdGhlIGRhdGEgc3RyZWFtLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VWZWN0b3IzRCgpOlZlY3RvcjNEXHJcblx0e1xyXG5cdFx0dmFyIHZlYzpWZWN0b3IzRCA9IG5ldyBWZWN0b3IzRCgpO1xyXG5cdFx0dmFyIGNoOnN0cmluZyA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XHJcblxyXG5cdFx0aWYgKGNoICE9IFwiKFwiKVxyXG5cdFx0XHR0aGlzLnNlbmRQYXJzZUVycm9yKFwiKFwiKTtcclxuXHRcdHZlYy54ID0gdGhpcy5nZXROZXh0TnVtYmVyKCk7XHJcblx0XHR2ZWMueSA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xyXG5cdFx0dmVjLnogPSB0aGlzLmdldE5leHROdW1iZXIoKTtcclxuXHJcblx0XHRpZiAodGhpcy5nZXROZXh0VG9rZW4oKSAhPSBcIilcIilcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcIilcIik7XHJcblxyXG5cdFx0cmV0dXJuIHZlYztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB0aGUgbmV4dCBxdWF0ZXJuaW9uIGluIHRoZSBkYXRhIHN0cmVhbS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlUXVhdGVybmlvbigpOlF1YXRlcm5pb25cclxuXHR7XHJcblx0XHR2YXIgcXVhdDpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHRcdHZhciBjaDpzdHJpbmcgPSB0aGlzLmdldE5leHRUb2tlbigpO1xyXG5cclxuXHRcdGlmIChjaCAhPSBcIihcIilcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcIihcIik7XHJcblx0XHRxdWF0LnggPSB0aGlzLmdldE5leHROdW1iZXIoKTtcclxuXHRcdHF1YXQueSA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xyXG5cdFx0cXVhdC56ID0gdGhpcy5nZXROZXh0TnVtYmVyKCk7XHJcblxyXG5cdFx0Ly8gcXVhdCBzdXBwb3NlZCB0byBiZSB1bml0IGxlbmd0aFxyXG5cdFx0dmFyIHQ6bnVtYmVyID0gMSAtIChxdWF0LngqcXVhdC54KSAtIChxdWF0LnkqcXVhdC55KSAtIChxdWF0LnoqcXVhdC56KTtcclxuXHRcdHF1YXQudyA9IHQgPCAwPyAwIDogLU1hdGguc3FydCh0KTtcclxuXHJcblx0XHRpZiAodGhpcy5nZXROZXh0VG9rZW4oKSAhPSBcIilcIilcclxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcIilcIik7XHJcblxyXG5cdFx0cmV0dXJuIHF1YXQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZXMgdGhlIGNvbW1hbmQgbGluZSBkYXRhLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VDTUQoKTp2b2lkXHJcblx0e1xyXG5cdFx0Ly8ganVzdCBpZ25vcmUgdGhlIGNvbW1hbmQgbGluZSBwcm9wZXJ0eVxyXG5cdFx0dGhpcy5wYXJzZUxpdGVyYWxzdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB0aGUgbmV4dCBsaXRlcmFsIHN0cmluZyBpbiB0aGUgZGF0YSBzdHJlYW0uIEEgbGl0ZXJhbCBzdHJpbmcgaXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJvdW5kZWRcclxuXHQgKiBieSBkb3VibGUgcXVvdGVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VMaXRlcmFsc3RyaW5nKCk6c3RyaW5nXHJcblx0e1xyXG5cdFx0dGhpcy5za2lwV2hpdGVTcGFjZSgpO1xyXG5cclxuXHRcdHZhciBjaDpzdHJpbmcgPSB0aGlzLmdldE5leHRDaGFyKCk7XHJcblx0XHR2YXIgc3RyOnN0cmluZyA9IFwiXCI7XHJcblxyXG5cdFx0aWYgKGNoICE9IFwiXFxcIlwiKVxyXG5cdFx0XHR0aGlzLnNlbmRQYXJzZUVycm9yKFwiXFxcIlwiKTtcclxuXHJcblx0XHRkbyB7XHJcblx0XHRcdGlmICh0aGlzLl9yZWFjaGVkRU9GKVxyXG5cdFx0XHRcdHRoaXMuc2VuZEVPRkVycm9yKCk7XHJcblx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xyXG5cdFx0XHRpZiAoY2ggIT0gXCJcXFwiXCIpXHJcblx0XHRcdFx0c3RyICs9IGNoO1xyXG5cdFx0fSB3aGlsZSAoY2ggIT0gXCJcXFwiXCIpO1xyXG5cclxuXHRcdHJldHVybiBzdHI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaHJvd3MgYW4gZW5kLW9mLWZpbGUgZXJyb3Igd2hlbiBhIHByZW1hdHVyZSBlbmQgb2YgZmlsZSB3YXMgZW5jb3VudGVyZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzZW5kRU9GRXJyb3IoKTp2b2lkXHJcblx0e1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBlbmQgb2YgZmlsZVwiKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRocm93cyBhbiBlcnJvciB3aGVuIGFuIHVuZXhwZWN0ZWQgdG9rZW4gd2FzIGVuY291bnRlcmVkLlxyXG5cdCAqIEBwYXJhbSBleHBlY3RlZCBUaGUgdG9rZW4gdHlwZSB0aGF0IHdhcyBhY3R1YWxseSBleHBlY3RlZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIHNlbmRQYXJzZUVycm9yKGV4cGVjdGVkOnN0cmluZyk6dm9pZFxyXG5cdHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgdG9rZW4gYXQgbGluZSBcIiArICh0aGlzLl9saW5lICsgMSkgKyBcIiwgY2hhcmFjdGVyIFwiICsgdGhpcy5fY2hhckxpbmVJbmRleCArIFwiLiBcIiArIGV4cGVjdGVkICsgXCIgZXhwZWN0ZWQsIGJ1dCBcIiArIHRoaXMuX3RleHREYXRhLmNoYXJBdCh0aGlzLl9wYXJzZUluZGV4IC0gMSkgKyBcIiBlbmNvdW50ZXJlZFwiKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRocm93cyBhbiBlcnJvciB3aGVuIGFuIHVua25vd24ga2V5d29yZCB3YXMgZW5jb3VudGVyZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzZW5kVW5rbm93bktleXdvcmRFcnJvcigpOnZvaWRcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGtleXdvcmQgYXQgbGluZSBcIiArICh0aGlzLl9saW5lICsgMSkgKyBcIiwgY2hhcmFjdGVyIFwiICsgdGhpcy5fY2hhckxpbmVJbmRleCArIFwiLiBcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgPSBNRDVBbmltUGFyc2VyO1xyXG5cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgQmFzZUZyYW1lRGF0YVxyXG57XHJcblx0LyoqXHJcblx0ICpcclxuXHQgKi9cclxuXHRwdWJsaWMgcG9zaXRpb246VmVjdG9yM0Q7XHJcblxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICovXHJcblx0cHVibGljIG9yaWVudGF0aW9uOlF1YXRlcm5pb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgQm91bmRzRGF0YVxyXG57XHJcblx0LyoqXHJcblx0ICpcclxuXHQgKi9cclxuXHRwdWJsaWMgbWluOlZlY3RvcjNEO1xyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBtYXg6VmVjdG9yM0Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgRnJhbWVEYXRhXHJcbntcclxuXHQvKipcclxuXHQgKlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBpbmRleDpudW1iZXIgLyppbnQqLztcclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKi9cclxuXHRwdWJsaWMgY29tcG9uZW50czpBcnJheTxudW1iZXI+O1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIEhpZXJhcmNoeURhdGFcclxue1xyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6c3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwYXJlbnRJbmRleDpudW1iZXIgLyppbnQqLztcclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKi9cclxuXHRwdWJsaWMgZmxhZ3M6bnVtYmVyIC8qaW50Ki87XHJcblxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICovXHJcblx0cHVibGljIHN0YXJ0SW5kZXg6bnVtYmVyIC8qaW50Ki87XHJcbn0iXX0=