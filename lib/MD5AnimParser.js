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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9NRDVBbmltUGFyc2VyLnRzIl0sIm5hbWVzIjpbIk1ENUFuaW1QYXJzZXIiLCJNRDVBbmltUGFyc2VyLmNvbnN0cnVjdG9yIiwiTUQ1QW5pbVBhcnNlci5zdXBwb3J0c1R5cGUiLCJNRDVBbmltUGFyc2VyLnN1cHBvcnRzRGF0YSIsIk1ENUFuaW1QYXJzZXIuX3BQcm9jZWVkUGFyc2luZyIsIk1ENUFuaW1QYXJzZXIudHJhbnNsYXRlQ2xpcCIsIk1ENUFuaW1QYXJzZXIudHJhbnNsYXRlUG9zZSIsIk1ENUFuaW1QYXJzZXIucGFyc2VIaWVyYXJjaHkiLCJNRDVBbmltUGFyc2VyLnBhcnNlQm91bmRzIiwiTUQ1QW5pbVBhcnNlci5wYXJzZUJhc2VGcmFtZSIsIk1ENUFuaW1QYXJzZXIucGFyc2VGcmFtZSIsIk1ENUFuaW1QYXJzZXIucHV0QmFjayIsIk1ENUFuaW1QYXJzZXIuZ2V0TmV4dFRva2VuIiwiTUQ1QW5pbVBhcnNlci5za2lwV2hpdGVTcGFjZSIsIk1ENUFuaW1QYXJzZXIuaWdub3JlTGluZSIsIk1ENUFuaW1QYXJzZXIuZ2V0TmV4dENoYXIiLCJNRDVBbmltUGFyc2VyLmdldE5leHRJbnQiLCJNRDVBbmltUGFyc2VyLmdldE5leHROdW1iZXIiLCJNRDVBbmltUGFyc2VyLnBhcnNlVmVjdG9yM0QiLCJNRDVBbmltUGFyc2VyLnBhcnNlUXVhdGVybmlvbiIsIk1ENUFuaW1QYXJzZXIucGFyc2VDTUQiLCJNRDVBbmltUGFyc2VyLnBhcnNlTGl0ZXJhbHN0cmluZyIsIk1ENUFuaW1QYXJzZXIuc2VuZEVPRkVycm9yIiwiTUQ1QW5pbVBhcnNlci5zZW5kUGFyc2VFcnJvciIsIk1ENUFuaW1QYXJzZXIuc2VuZFVua25vd25LZXl3b3JkRXJyb3IiLCJCYXNlRnJhbWVEYXRhIiwiQmFzZUZyYW1lRGF0YS5jb25zdHJ1Y3RvciIsIkJvdW5kc0RhdGEiLCJCb3VuZHNEYXRhLmNvbnN0cnVjdG9yIiwiRnJhbWVEYXRhIiwiRnJh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Q0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMURBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNkQSxXQUFXQSxDQUFDQSxDQUFDQSxHQUFHQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUUxREEsSUFBSUEsQ0FBQ0EsR0FBVUEsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0dBLFdBQVdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLEdBQUVBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBRXpDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxXQUFXQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0JBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO2dCQUMzREEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFDOURBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNQQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtnQkFDdkNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNq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QkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUF5akIzQ0Esb0JBQUNBO0FBQURBLENBemtCQSxBQXlrQkNBLEVBemtCMkIsVUFBVSxFQXlrQnJDO0FBS0QsQUFHQTs7R0FERztJQUNHLGFBQWE7SUFBbkJ5QixTQUFNQSxhQUFhQTtJQVduQkMsQ0FBQ0E7SUFBREQsb0JBQUNBO0FBQURBLENBWEEsQUFXQ0EsSUFBQTtBQUVELEFBR0E7O0dBREc7SUFDRyxVQUFVO0lBQWhCRSxTQUFNQSxVQUFVQTtJQVdoQkMsQ0FBQ0E7SUFBREQsaUJBQUNBO0FBQURBLENBWEEsQUFXQ0EsSUFBQTtBQUVELEFBR0E7O0dBREc7SUFDRyxTQUFTO0lBQWZFLFNBQU1BLFNBQVNBO0lBV2ZDLENBQUNBO0lBQURELGdCQUFDQTtBQUFEQSxDQVhBLEFBV0NBLElBQUE7QUFFRCxBQUdBOztHQURHO0lBQ0csYUFBYTtJQUFuQkUsU0FBTUEsYUFBYUE7SUFxQm5CQyxDQUFDQTtJQUFERCxvQkFBQ0E7QUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7QUEzRUQsaUJBQVMsYUFBYSxDQUFDIiwiZmlsZSI6Ik1ENUFuaW1QYXJzZXIuanMiLCJzb3VyY2VSb290IjoiLi4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1YXRlcm5pb25cdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9RdWF0ZXJuaW9uXCIpO1xuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XG5pbXBvcnQgUGFyc2VyQmFzZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlckJhc2VcIik7XG5cbmltcG9ydCBKb2ludFBvc2VcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvSm9pbnRQb3NlXCIpO1xuaW1wb3J0IFNrZWxldG9uUG9zZVx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9Ta2VsZXRvblBvc2VcIik7XG5pbXBvcnQgU2tlbGV0b25DbGlwTm9kZVx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL25vZGVzL1NrZWxldG9uQ2xpcE5vZGVcIik7XG5cbi8qKlxuICogTUQ1QW5pbVBhcnNlciBwcm92aWRlcyBhIHBhcnNlciBmb3IgdGhlIG1kNWFuaW0gZGF0YSB0eXBlLCBwcm92aWRpbmcgYW4gYW5pbWF0aW9uIHNlcXVlbmNlIGZvciB0aGUgbWQ1IGZvcm1hdC5cbiAqXG4gKiB0b2RvOiBvcHRpbWl6ZVxuICovXG5jbGFzcyBNRDVBbmltUGFyc2VyIGV4dGVuZHMgUGFyc2VyQmFzZVxue1xuXHRwcml2YXRlIF90ZXh0RGF0YTpzdHJpbmc7XG5cdHByaXZhdGUgX3N0YXJ0ZWRQYXJzaW5nOmJvb2xlYW47XG5cdHB1YmxpYyBzdGF0aWMgVkVSU0lPTl9UT0tFTjpzdHJpbmcgPSBcIk1ENVZlcnNpb25cIjtcblx0cHVibGljIHN0YXRpYyBDT01NQU5EX0xJTkVfVE9LRU46c3RyaW5nID0gXCJjb21tYW5kbGluZVwiO1xuXHRwdWJsaWMgc3RhdGljIE5VTV9GUkFNRVNfVE9LRU46c3RyaW5nID0gXCJudW1GcmFtZXNcIjtcblx0cHVibGljIHN0YXRpYyBOVU1fSk9JTlRTX1RPS0VOOnN0cmluZyA9IFwibnVtSm9pbnRzXCI7XG5cdHB1YmxpYyBzdGF0aWMgRlJBTUVfUkFURV9UT0tFTjpzdHJpbmcgPSBcImZyYW1lUmF0ZVwiO1xuXHRwdWJsaWMgc3RhdGljIE5VTV9BTklNQVRFRF9DT01QT05FTlRTX1RPS0VOOnN0cmluZyA9IFwibnVtQW5pbWF0ZWRDb21wb25lbnRzXCI7XG5cblx0cHVibGljIHN0YXRpYyBISUVSQVJDSFlfVE9LRU46c3RyaW5nID0gXCJoaWVyYXJjaHlcIjtcblx0cHVibGljIHN0YXRpYyBCT1VORFNfVE9LRU46c3RyaW5nID0gXCJib3VuZHNcIjtcblx0cHVibGljIHN0YXRpYyBCQVNFX0ZSQU1FX1RPS0VOOnN0cmluZyA9IFwiYmFzZWZyYW1lXCI7XG5cdHB1YmxpYyBzdGF0aWMgRlJBTUVfVE9LRU46c3RyaW5nID0gXCJmcmFtZVwiO1xuXG5cdHB1YmxpYyBzdGF0aWMgQ09NTUVOVF9UT0tFTjpzdHJpbmcgPSBcIi8vXCI7XG5cblx0cHJpdmF0ZSBfcGFyc2VJbmRleDpudW1iZXIgLyppbnQqLyA9IDA7XG5cdHByaXZhdGUgX3JlYWNoZWRFT0Y6Ym9vbGVhbjtcblx0cHJpdmF0ZSBfbGluZTpudW1iZXIgLyppbnQqLyA9IDA7XG5cdHByaXZhdGUgX2NoYXJMaW5lSW5kZXg6bnVtYmVyIC8qaW50Ki8gPSAwO1xuXHRwcml2YXRlIF92ZXJzaW9uOm51bWJlciAvKmludCovO1xuXHRwcml2YXRlIF9mcmFtZVJhdGU6bnVtYmVyIC8qaW50Ki87XG5cdHByaXZhdGUgX251bUZyYW1lczpudW1iZXIgLyppbnQqLztcblx0cHJpdmF0ZSBfbnVtSm9pbnRzOm51bWJlciAvKmludCovO1xuXHRwcml2YXRlIF9udW1BbmltYXRlZENvbXBvbmVudHM6bnVtYmVyIC8qaW50Ki87XG5cblx0cHJpdmF0ZSBfaGllcmFyY2h5OkFycmF5PEhpZXJhcmNoeURhdGE+O1xuXHRwcml2YXRlIF9ib3VuZHM6QXJyYXk8Qm91bmRzRGF0YT47XG5cdHByaXZhdGUgX2ZyYW1lRGF0YTpBcnJheTxGcmFtZURhdGE+O1xuXHRwcml2YXRlIF9iYXNlRnJhbWVEYXRhOkFycmF5PEJhc2VGcmFtZURhdGE+O1xuXG5cdHByaXZhdGUgX3JvdGF0aW9uUXVhdDpRdWF0ZXJuaW9uO1xuXHRwcml2YXRlIF9jbGlwOlNrZWxldG9uQ2xpcE5vZGU7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgTUQ1QW5pbVBhcnNlciBvYmplY3QuXG5cdCAqIEBwYXJhbSB1cmkgVGhlIHVybCBvciBpZCBvZiB0aGUgZGF0YSBvciBmaWxlIHRvIGJlIHBhcnNlZC5cblx0ICogQHBhcmFtIGV4dHJhIFRoZSBob2xkZXIgZm9yIGV4dHJhIGNvbnRleHR1YWwgZGF0YSB0aGF0IHRoZSBwYXJzZXIgbWlnaHQgbmVlZC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGFkZGl0aW9uYWxSb3RhdGlvbkF4aXM6VmVjdG9yM0QgPSBudWxsLCBhZGRpdGlvbmFsUm90YXRpb25SYWRpYW5zOm51bWJlciA9IDApXG5cdHtcblx0XHRzdXBlcihVUkxMb2FkZXJEYXRhRm9ybWF0LlRFWFQpO1xuXHRcdHRoaXMuX3JvdGF0aW9uUXVhdCA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cdFx0dmFyIHQxOlF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpO1xuXHRcdHZhciB0MjpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcblxuXHRcdHQxLmZyb21BeGlzQW5nbGUoVmVjdG9yM0QuWF9BWElTLCAtTWF0aC5QSSouNSk7XG5cdFx0dDIuZnJvbUF4aXNBbmdsZShWZWN0b3IzRC5ZX0FYSVMsIC1NYXRoLlBJKi41KTtcblxuXHRcdHRoaXMuX3JvdGF0aW9uUXVhdC5tdWx0aXBseSh0MiwgdDEpO1xuXG5cdFx0aWYgKGFkZGl0aW9uYWxSb3RhdGlvbkF4aXMpIHtcblx0XHRcdHRoaXMuX3JvdGF0aW9uUXVhdC5tdWx0aXBseSh0MiwgdDEpO1xuXHRcdFx0dDEuZnJvbUF4aXNBbmdsZShhZGRpdGlvbmFsUm90YXRpb25BeGlzLCBhZGRpdGlvbmFsUm90YXRpb25SYWRpYW5zKTtcblx0XHRcdHRoaXMuX3JvdGF0aW9uUXVhdC5tdWx0aXBseSh0MSwgdGhpcy5fcm90YXRpb25RdWF0KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gZmlsZSBleHRlbnNpb24gaXMgc3VwcG9ydGVkIGJ5IHRoZSBwYXJzZXIuXG5cdCAqIEBwYXJhbSBleHRlbnNpb24gVGhlIGZpbGUgZXh0ZW5zaW9uIG9mIGEgcG90ZW50aWFsIGZpbGUgdG8gYmUgcGFyc2VkLlxuXHQgKiBAcmV0dXJuIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBmaWxlIHR5cGUgaXMgc3VwcG9ydGVkLlxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBzdXBwb3J0c1R5cGUoZXh0ZW5zaW9uOnN0cmluZyk6Ym9vbGVhblxuXHR7XG5cdFx0ZXh0ZW5zaW9uID0gZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIGV4dGVuc2lvbiA9PSBcIm1kNWFuaW1cIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBUZXN0cyB3aGV0aGVyIGEgZGF0YSBibG9jayBjYW4gYmUgcGFyc2VkIGJ5IHRoZSBwYXJzZXIuXG5cdCAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGJsb2NrIHRvIHBvdGVudGlhbGx5IGJlIHBhcnNlZC5cblx0ICogQHJldHVybiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gZGF0YSBpcyBzdXBwb3J0ZWQuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIHN1cHBvcnRzRGF0YShkYXRhOmFueSk6Ym9vbGVhblxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRwdWJsaWMgX3BQcm9jZWVkUGFyc2luZygpOmJvb2xlYW5cblx0e1xuXHRcdHZhciB0b2tlbjpzdHJpbmc7XG5cblx0XHRpZiAoIXRoaXMuX3N0YXJ0ZWRQYXJzaW5nKSB7XG5cdFx0XHR0aGlzLl90ZXh0RGF0YSA9IHRoaXMuX3BHZXRUZXh0RGF0YSgpO1xuXHRcdFx0dGhpcy5fc3RhcnRlZFBhcnNpbmcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHdoaWxlICh0aGlzLl9wSGFzVGltZSgpKSB7XG5cdFx0XHR0b2tlbiA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XG5cdFx0XHRzd2l0Y2ggKHRva2VuKSB7XG5cdFx0XHRcdGNhc2UgTUQ1QW5pbVBhcnNlci5DT01NRU5UX1RPS0VOOlxuXHRcdFx0XHRcdHRoaXMuaWdub3JlTGluZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiXCI6XG5cdFx0XHRcdFx0Ly8gY2FuIG9jY3VyIGF0IHRoZSBlbmQgb2YgYSBmaWxlXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgTUQ1QW5pbVBhcnNlci5WRVJTSU9OX1RPS0VOOlxuXHRcdFx0XHRcdHRoaXMuX3ZlcnNpb24gPSB0aGlzLmdldE5leHRJbnQoKTtcblx0XHRcdFx0XHRpZiAodGhpcy5fdmVyc2lvbiAhPSAxMClcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdmVyc2lvbiBudW1iZXIgZW5jb3VudGVyZWQhXCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE1ENUFuaW1QYXJzZXIuQ09NTUFORF9MSU5FX1RPS0VOOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VDTUQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBNRDVBbmltUGFyc2VyLk5VTV9GUkFNRVNfVE9LRU46XG5cdFx0XHRcdFx0dGhpcy5fbnVtRnJhbWVzID0gdGhpcy5nZXROZXh0SW50KCk7XG5cdFx0XHRcdFx0dGhpcy5fYm91bmRzID0gbmV3IEFycmF5PEJvdW5kc0RhdGE+KCk7XG5cdFx0XHRcdFx0dGhpcy5fZnJhbWVEYXRhID0gbmV3IEFycmF5PEZyYW1lRGF0YT4oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBNRDVBbmltUGFyc2VyLk5VTV9KT0lOVFNfVE9LRU46XG5cdFx0XHRcdFx0dGhpcy5fbnVtSm9pbnRzID0gdGhpcy5nZXROZXh0SW50KCk7XG5cdFx0XHRcdFx0dGhpcy5faGllcmFyY2h5ID0gbmV3IEFycmF5PEhpZXJhcmNoeURhdGE+KHRoaXMuX251bUpvaW50cyk7XG5cdFx0XHRcdFx0dGhpcy5fYmFzZUZyYW1lRGF0YSA9IG5ldyBBcnJheTxCYXNlRnJhbWVEYXRhPih0aGlzLl9udW1Kb2ludHMpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE1ENUFuaW1QYXJzZXIuRlJBTUVfUkFURV9UT0tFTjpcblx0XHRcdFx0XHR0aGlzLl9mcmFtZVJhdGUgPSB0aGlzLmdldE5leHRJbnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBNRDVBbmltUGFyc2VyLk5VTV9BTklNQVRFRF9DT01QT05FTlRTX1RPS0VOOlxuXHRcdFx0XHRcdHRoaXMuX251bUFuaW1hdGVkQ29tcG9uZW50cyA9IHRoaXMuZ2V0TmV4dEludCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIE1ENUFuaW1QYXJzZXIuSElFUkFSQ0hZX1RPS0VOOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VIaWVyYXJjaHkoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBNRDVBbmltUGFyc2VyLkJPVU5EU19UT0tFTjpcblx0XHRcdFx0XHR0aGlzLnBhcnNlQm91bmRzKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgTUQ1QW5pbVBhcnNlci5CQVNFX0ZSQU1FX1RPS0VOOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VCYXNlRnJhbWUoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBNRDVBbmltUGFyc2VyLkZSQU1FX1RPS0VOOlxuXHRcdFx0XHRcdHRoaXMucGFyc2VGcmFtZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlmICghdGhpcy5fcmVhY2hlZEVPRilcblx0XHRcdFx0XHRcdHRoaXMuc2VuZFVua25vd25LZXl3b3JkRXJyb3IoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX3JlYWNoZWRFT0YpIHtcblx0XHRcdFx0dGhpcy5fY2xpcCA9IG5ldyBTa2VsZXRvbkNsaXBOb2RlKCk7XG5cdFx0XHRcdHRoaXMudHJhbnNsYXRlQ2xpcCgpO1xuXHRcdFx0XHR0aGlzLl9wRmluYWxpemVBc3NldCh0aGlzLl9jbGlwKTtcblx0XHRcdFx0cmV0dXJuIFBhcnNlckJhc2UuUEFSU0lOR19ET05FO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gUGFyc2VyQmFzZS5NT1JFX1RPX1BBUlNFO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGFsbCBrZXkgZnJhbWUgZGF0YSB0byBhbiBTa2lubmVkQW5pbWF0aW9uU2VxdWVuY2UuXG5cdCAqL1xuXHRwcml2YXRlIHRyYW5zbGF0ZUNsaXAoKTp2b2lkXG5cdHtcblx0XHRmb3IgKHZhciBpOm51bWJlciAvKmludCovID0gMDsgaSA8IHRoaXMuX251bUZyYW1lczsgKytpKVxuXHRcdFx0dGhpcy5fY2xpcC5hZGRGcmFtZSh0aGlzLnRyYW5zbGF0ZVBvc2UodGhpcy5fZnJhbWVEYXRhW2ldKSwgMTAwMC90aGlzLl9mcmFtZVJhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgc2luZ2xlIGtleSBmcmFtZSBkYXRhIHRvIGEgU2tlbGV0b25Qb3NlLlxuXHQgKiBAcGFyYW0gZnJhbWVEYXRhIFRoZSBhY3R1YWwgZnJhbWUgZGF0YS5cblx0ICogQHJldHVybiBBIFNrZWxldG9uUG9zZSBjb250YWluaW5nIHRoZSBmcmFtZSBkYXRhJ3MgcG9zZS5cblx0ICovXG5cdHByaXZhdGUgdHJhbnNsYXRlUG9zZShmcmFtZURhdGE6RnJhbWVEYXRhKTpTa2VsZXRvblBvc2Vcblx0e1xuXHRcdHZhciBoaWVyYXJjaHk6SGllcmFyY2h5RGF0YTtcblx0XHR2YXIgcG9zZTpKb2ludFBvc2U7XG5cdFx0dmFyIGJhc2U6QmFzZUZyYW1lRGF0YTtcblx0XHR2YXIgZmxhZ3M6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIGo6bnVtYmVyIC8qaW50Ki87XG5cdFx0dmFyIHRyYW5zbGF0ZTpWZWN0b3IzRCA9IG5ldyBWZWN0b3IzRCgpO1xuXHRcdHZhciBvcmllbnRhdGlvbjpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcblx0XHR2YXIgY29tcG9uZW50czpBcnJheTxudW1iZXI+ID0gZnJhbWVEYXRhLmNvbXBvbmVudHM7XG5cdFx0dmFyIHNrZWxQb3NlOlNrZWxldG9uUG9zZSA9IG5ldyBTa2VsZXRvblBvc2UoKTtcblx0XHR2YXIgam9pbnRQb3NlczpBcnJheTxKb2ludFBvc2U+ID0gc2tlbFBvc2Uuam9pbnRQb3NlcztcblxuXHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdGhpcy5fbnVtSm9pbnRzOyArK2kpIHtcblx0XHRcdGogPSAwO1xuXHRcdFx0cG9zZSA9IG5ldyBKb2ludFBvc2UoKTtcblx0XHRcdGhpZXJhcmNoeSA9IHRoaXMuX2hpZXJhcmNoeVtpXTtcblx0XHRcdGJhc2UgPSB0aGlzLl9iYXNlRnJhbWVEYXRhW2ldO1xuXHRcdFx0ZmxhZ3MgPSBoaWVyYXJjaHkuZmxhZ3M7XG5cdFx0XHR0cmFuc2xhdGUueCA9IGJhc2UucG9zaXRpb24ueDtcblx0XHRcdHRyYW5zbGF0ZS55ID0gYmFzZS5wb3NpdGlvbi55O1xuXHRcdFx0dHJhbnNsYXRlLnogPSBiYXNlLnBvc2l0aW9uLno7XG5cdFx0XHRvcmllbnRhdGlvbi54ID0gYmFzZS5vcmllbnRhdGlvbi54O1xuXHRcdFx0b3JpZW50YXRpb24ueSA9IGJhc2Uub3JpZW50YXRpb24ueTtcblx0XHRcdG9yaWVudGF0aW9uLnogPSBiYXNlLm9yaWVudGF0aW9uLno7XG5cblx0XHRcdGlmIChmbGFncyAmIDEpXG5cdFx0XHRcdHRyYW5zbGF0ZS54ID0gY29tcG9uZW50c1toaWVyYXJjaHkuc3RhcnRJbmRleCArIChqKyspXTtcblx0XHRcdGlmIChmbGFncyAmIDIpXG5cdFx0XHRcdHRyYW5zbGF0ZS55ID0gY29tcG9uZW50c1toaWVyYXJjaHkuc3RhcnRJbmRleCArIChqKyspXTtcblx0XHRcdGlmIChmbGFncyAmIDQpXG5cdFx0XHRcdHRyYW5zbGF0ZS56ID0gY29tcG9uZW50c1toaWVyYXJjaHkuc3RhcnRJbmRleCArIChqKyspXTtcblx0XHRcdGlmIChmbGFncyAmIDgpXG5cdFx0XHRcdG9yaWVudGF0aW9uLnggPSBjb21wb25lbnRzW2hpZXJhcmNoeS5zdGFydEluZGV4ICsgKGorKyldO1xuXHRcdFx0aWYgKGZsYWdzICYgMTYpXG5cdFx0XHRcdG9yaWVudGF0aW9uLnkgPSBjb21wb25lbnRzW2hpZXJhcmNoeS5zdGFydEluZGV4ICsgKGorKyldO1xuXHRcdFx0aWYgKGZsYWdzICYgMzIpXG5cdFx0XHRcdG9yaWVudGF0aW9uLnogPSBjb21wb25lbnRzW2hpZXJhcmNoeS5zdGFydEluZGV4ICsgKGorKyldO1xuXG5cdFx0XHR2YXIgdzpudW1iZXIgPSAxIC0gb3JpZW50YXRpb24ueCpvcmllbnRhdGlvbi54IC0gb3JpZW50YXRpb24ueSpvcmllbnRhdGlvbi55IC0gb3JpZW50YXRpb24ueipvcmllbnRhdGlvbi56O1xuXHRcdFx0b3JpZW50YXRpb24udyA9IHcgPCAwPyAwIDogLU1hdGguc3FydCh3KTtcblxuXHRcdFx0aWYgKGhpZXJhcmNoeS5wYXJlbnRJbmRleCA8IDApIHtcblx0XHRcdFx0cG9zZS5vcmllbnRhdGlvbi5tdWx0aXBseSh0aGlzLl9yb3RhdGlvblF1YXQsIG9yaWVudGF0aW9uKTtcblx0XHRcdFx0cG9zZS50cmFuc2xhdGlvbiA9IHRoaXMuX3JvdGF0aW9uUXVhdC5yb3RhdGVQb2ludCh0cmFuc2xhdGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cG9zZS5vcmllbnRhdGlvbi5jb3B5RnJvbShvcmllbnRhdGlvbik7XG5cdFx0XHRcdHBvc2UudHJhbnNsYXRpb24ueCA9IHRyYW5zbGF0ZS54O1xuXHRcdFx0XHRwb3NlLnRyYW5zbGF0aW9uLnkgPSB0cmFuc2xhdGUueTtcblx0XHRcdFx0cG9zZS50cmFuc2xhdGlvbi56ID0gdHJhbnNsYXRlLno7XG5cdFx0XHR9XG5cdFx0XHRwb3NlLm9yaWVudGF0aW9uLnkgPSAtcG9zZS5vcmllbnRhdGlvbi55O1xuXHRcdFx0cG9zZS5vcmllbnRhdGlvbi56ID0gLXBvc2Uub3JpZW50YXRpb24uejtcblx0XHRcdHBvc2UudHJhbnNsYXRpb24ueCA9IC1wb3NlLnRyYW5zbGF0aW9uLng7XG5cblx0XHRcdGpvaW50UG9zZXNbaV0gPSBwb3NlO1xuXHRcdH1cblxuXHRcdHJldHVybiBza2VsUG9zZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgdGhlIHNrZWxldG9uJ3MgaGllcmFyY2h5IGRhdGEuXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlSGllcmFyY2h5KCk6dm9pZFxuXHR7XG5cdFx0dmFyIGNoOnN0cmluZztcblx0XHR2YXIgZGF0YTpIaWVyYXJjaHlEYXRhO1xuXHRcdHZhciB0b2tlbjpzdHJpbmcgPSB0aGlzLmdldE5leHRUb2tlbigpO1xuXHRcdHZhciBpOm51bWJlciAvKmludCovID0gMDtcblxuXHRcdGlmICh0b2tlbiAhPSBcIntcIilcblx0XHRcdHRoaXMuc2VuZFVua25vd25LZXl3b3JkRXJyb3IoKTtcblxuXHRcdGRvIHtcblx0XHRcdGlmICh0aGlzLl9yZWFjaGVkRU9GKVxuXHRcdFx0XHR0aGlzLnNlbmRFT0ZFcnJvcigpO1xuXHRcdFx0ZGF0YSA9IG5ldyBIaWVyYXJjaHlEYXRhKCk7XG5cdFx0XHRkYXRhLm5hbWUgPSB0aGlzLnBhcnNlTGl0ZXJhbHN0cmluZygpO1xuXHRcdFx0ZGF0YS5wYXJlbnRJbmRleCA9IHRoaXMuZ2V0TmV4dEludCgpO1xuXHRcdFx0ZGF0YS5mbGFncyA9IHRoaXMuZ2V0TmV4dEludCgpO1xuXHRcdFx0ZGF0YS5zdGFydEluZGV4ID0gdGhpcy5nZXROZXh0SW50KCk7XG5cdFx0XHR0aGlzLl9oaWVyYXJjaHlbaSsrXSA9IGRhdGE7XG5cblx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xuXG5cdFx0XHRpZiAoY2ggPT0gXCIvXCIpIHtcblx0XHRcdFx0dGhpcy5wdXRCYWNrKCk7XG5cdFx0XHRcdGNoID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcblx0XHRcdFx0aWYgKGNoID09IE1ENUFuaW1QYXJzZXIuQ09NTUVOVF9UT0tFTilcblx0XHRcdFx0XHR0aGlzLmlnbm9yZUxpbmUoKTtcblx0XHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjaCAhPSBcIn1cIilcblx0XHRcdFx0dGhpcy5wdXRCYWNrKCk7XG5cblx0XHR9IHdoaWxlIChjaCAhPSBcIn1cIik7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2VzIGZyYW1lIGJvdW5kcy5cblx0ICovXG5cdHByaXZhdGUgcGFyc2VCb3VuZHMoKTp2b2lkXG5cdHtcblx0XHR2YXIgY2g6c3RyaW5nO1xuXHRcdHZhciBkYXRhOkJvdW5kc0RhdGE7XG5cdFx0dmFyIHRva2VuOnN0cmluZyA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwO1xuXG5cdFx0aWYgKHRva2VuICE9IFwie1wiKVxuXHRcdFx0dGhpcy5zZW5kVW5rbm93bktleXdvcmRFcnJvcigpO1xuXG5cdFx0ZG8ge1xuXHRcdFx0aWYgKHRoaXMuX3JlYWNoZWRFT0YpXG5cdFx0XHRcdHRoaXMuc2VuZEVPRkVycm9yKCk7XG5cdFx0XHRkYXRhID0gbmV3IEJvdW5kc0RhdGEoKTtcblx0XHRcdGRhdGEubWluID0gdGhpcy5wYXJzZVZlY3RvcjNEKCk7XG5cdFx0XHRkYXRhLm1heCA9IHRoaXMucGFyc2VWZWN0b3IzRCgpO1xuXHRcdFx0dGhpcy5fYm91bmRzW2krK10gPSBkYXRhO1xuXG5cdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcblxuXHRcdFx0aWYgKGNoID09IFwiL1wiKSB7XG5cdFx0XHRcdHRoaXMucHV0QmFjaygpO1xuXHRcdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XG5cdFx0XHRcdGlmIChjaCA9PSBNRDVBbmltUGFyc2VyLkNPTU1FTlRfVE9LRU4pXG5cdFx0XHRcdFx0dGhpcy5pZ25vcmVMaW5lKCk7XG5cdFx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2ggIT0gXCJ9XCIpXG5cdFx0XHRcdHRoaXMucHV0QmFjaygpO1xuXG5cdFx0fSB3aGlsZSAoY2ggIT0gXCJ9XCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgYmFzZSBmcmFtZS5cblx0ICovXG5cdHByaXZhdGUgcGFyc2VCYXNlRnJhbWUoKTp2b2lkXG5cdHtcblx0XHR2YXIgY2g6c3RyaW5nO1xuXHRcdHZhciBkYXRhOkJhc2VGcmFtZURhdGE7XG5cdFx0dmFyIHRva2VuOnN0cmluZyA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XG5cdFx0dmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwO1xuXG5cdFx0aWYgKHRva2VuICE9IFwie1wiKVxuXHRcdFx0dGhpcy5zZW5kVW5rbm93bktleXdvcmRFcnJvcigpO1xuXG5cdFx0ZG8ge1xuXHRcdFx0aWYgKHRoaXMuX3JlYWNoZWRFT0YpXG5cdFx0XHRcdHRoaXMuc2VuZEVPRkVycm9yKCk7XG5cdFx0XHRkYXRhID0gbmV3IEJhc2VGcmFtZURhdGEoKTtcblx0XHRcdGRhdGEucG9zaXRpb24gPSB0aGlzLnBhcnNlVmVjdG9yM0QoKTtcblx0XHRcdGRhdGEub3JpZW50YXRpb24gPSB0aGlzLnBhcnNlUXVhdGVybmlvbigpO1xuXHRcdFx0dGhpcy5fYmFzZUZyYW1lRGF0YVtpKytdID0gZGF0YTtcblxuXHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7XG5cblx0XHRcdGlmIChjaCA9PSBcIi9cIikge1xuXHRcdFx0XHR0aGlzLnB1dEJhY2soKTtcblx0XHRcdFx0Y2ggPSB0aGlzLmdldE5leHRUb2tlbigpO1xuXHRcdFx0XHRpZiAoY2ggPT0gTUQ1QW5pbVBhcnNlci5DT01NRU5UX1RPS0VOKVxuXHRcdFx0XHRcdHRoaXMuaWdub3JlTGluZSgpO1xuXHRcdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNoICE9IFwifVwiKVxuXHRcdFx0XHR0aGlzLnB1dEJhY2soKTtcblxuXHRcdH0gd2hpbGUgKGNoICE9IFwifVwiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgYSBzaW5nbGUgZnJhbWUuXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlRnJhbWUoKTp2b2lkXG5cdHtcblx0XHR2YXIgY2g6c3RyaW5nO1xuXHRcdHZhciBkYXRhOkZyYW1lRGF0YTtcblx0XHR2YXIgdG9rZW46c3RyaW5nO1xuXHRcdHZhciBmcmFtZUluZGV4Om51bWJlciAvKmludCovO1xuXG5cdFx0ZnJhbWVJbmRleCA9IHRoaXMuZ2V0TmV4dEludCgpO1xuXG5cdFx0dG9rZW4gPSB0aGlzLmdldE5leHRUb2tlbigpO1xuXHRcdGlmICh0b2tlbiAhPSBcIntcIilcblx0XHRcdHRoaXMuc2VuZFVua25vd25LZXl3b3JkRXJyb3IoKTtcblxuXHRcdGRvIHtcblx0XHRcdGlmICh0aGlzLl9yZWFjaGVkRU9GKVxuXHRcdFx0XHR0aGlzLnNlbmRFT0ZFcnJvcigpO1xuXHRcdFx0ZGF0YSA9IG5ldyBGcmFtZURhdGEoKTtcblx0XHRcdGRhdGEuY29tcG9uZW50cyA9IG5ldyBBcnJheTxudW1iZXI+KHRoaXMuX251bUFuaW1hdGVkQ29tcG9uZW50cyk7XG5cblx0XHRcdGZvciAodmFyIGk6bnVtYmVyIC8qaW50Ki8gPSAwOyBpIDwgdGhpcy5fbnVtQW5pbWF0ZWRDb21wb25lbnRzOyArK2kpXG5cdFx0XHRcdGRhdGEuY29tcG9uZW50c1tpXSA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xuXG5cdFx0XHR0aGlzLl9mcmFtZURhdGFbZnJhbWVJbmRleF0gPSBkYXRhO1xuXG5cdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dENoYXIoKTtcblxuXHRcdFx0aWYgKGNoID09IFwiL1wiKSB7XG5cdFx0XHRcdHRoaXMucHV0QmFjaygpO1xuXHRcdFx0XHRjaCA9IHRoaXMuZ2V0TmV4dFRva2VuKCk7XG5cdFx0XHRcdGlmIChjaCA9PSBNRDVBbmltUGFyc2VyLkNPTU1FTlRfVE9LRU4pXG5cdFx0XHRcdFx0dGhpcy5pZ25vcmVMaW5lKCk7XG5cdFx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2ggIT0gXCJ9XCIpXG5cdFx0XHRcdHRoaXMucHV0QmFjaygpO1xuXG5cdFx0fSB3aGlsZSAoY2ggIT0gXCJ9XCIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFB1dHMgYmFjayB0aGUgbGFzdCByZWFkIGNoYXJhY3RlciBpbnRvIHRoZSBkYXRhIHN0cmVhbS5cblx0ICovXG5cdHByaXZhdGUgcHV0QmFjaygpOnZvaWRcblx0e1xuXHRcdHRoaXMuX3BhcnNlSW5kZXgtLTtcblx0XHR0aGlzLl9jaGFyTGluZUluZGV4LS07XG5cdFx0dGhpcy5fcmVhY2hlZEVPRiA9IHRoaXMuX3BhcnNlSW5kZXggPj0gdGhpcy5fdGV4dERhdGEubGVuZ3RoO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG5leHQgdG9rZW4gaW4gdGhlIGRhdGEgc3RyZWFtLlxuXHQgKi9cblx0cHJpdmF0ZSBnZXROZXh0VG9rZW4oKTpzdHJpbmdcblx0e1xuXHRcdHZhciBjaDpzdHJpbmc7XG5cdFx0dmFyIHRva2VuOnN0cmluZyA9IFwiXCI7XG5cblx0XHR3aGlsZSAoIXRoaXMuX3JlYWNoZWRFT0YpIHtcblx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xuXHRcdFx0aWYgKGNoID09IFwiIFwiIHx8IGNoID09IFwiXFxyXCIgfHwgY2ggPT0gXCJcXG5cIiB8fCBjaCA9PSBcIlxcdFwiKSB7XG5cdFx0XHRcdGlmICh0b2tlbiAhPSBNRDVBbmltUGFyc2VyLkNPTU1FTlRfVE9LRU4pXG5cdFx0XHRcdFx0dGhpcy5za2lwV2hpdGVTcGFjZSgpO1xuXHRcdFx0XHRpZiAodG9rZW4gIT0gXCJcIilcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW47XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0dG9rZW4gKz0gY2g7XG5cblx0XHRcdGlmICh0b2tlbiA9PSBNRDVBbmltUGFyc2VyLkNPTU1FTlRfVE9LRU4pXG5cdFx0XHRcdHJldHVybiB0b2tlbjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH1cblxuXHQvKipcblx0ICogU2tpcHMgYWxsIHdoaXRlc3BhY2UgaW4gdGhlIGRhdGEgc3RyZWFtLlxuXHQgKi9cblx0cHJpdmF0ZSBza2lwV2hpdGVTcGFjZSgpOnZvaWRcblx0e1xuXHRcdHZhciBjaDpzdHJpbmc7XG5cblx0XHRkb1xuXHRcdFx0Y2ggPSB0aGlzLmdldE5leHRDaGFyKCk7IHdoaWxlIChjaCA9PSBcIlxcblwiIHx8IGNoID09IFwiIFwiIHx8IGNoID09IFwiXFxyXCIgfHwgY2ggPT0gXCJcXHRcIik7XG5cblx0XHR0aGlzLnB1dEJhY2soKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTa2lwcyB0byB0aGUgbmV4dCBsaW5lLlxuXHQgKi9cblx0cHJpdmF0ZSBpZ25vcmVMaW5lKCk6dm9pZFxuXHR7XG5cdFx0dmFyIGNoOnN0cmluZztcblx0XHR3aGlsZSAoIXRoaXMuX3JlYWNoZWRFT0YgJiYgY2ggIT0gXCJcXG5cIilcblx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgbmV4dCBzaW5nbGUgY2hhcmFjdGVyIGluIHRoZSBkYXRhIHN0cmVhbS5cblx0ICovXG5cdHByaXZhdGUgZ2V0TmV4dENoYXIoKTpzdHJpbmdcblx0e1xuXHRcdHZhciBjaDpzdHJpbmcgPSB0aGlzLl90ZXh0RGF0YS5jaGFyQXQodGhpcy5fcGFyc2VJbmRleCsrKTtcblxuXHRcdGlmIChjaCA9PSBcIlxcblwiKSB7XG5cdFx0XHQrK3RoaXMuX2xpbmU7XG5cdFx0XHR0aGlzLl9jaGFyTGluZUluZGV4ID0gMDtcblx0XHR9IGVsc2UgaWYgKGNoICE9IFwiXFxyXCIpXG5cdFx0XHQrK3RoaXMuX2NoYXJMaW5lSW5kZXg7XG5cblx0XHRpZiAodGhpcy5fcGFyc2VJbmRleCA9PSB0aGlzLl90ZXh0RGF0YS5sZW5ndGgpXG5cdFx0XHR0aGlzLl9yZWFjaGVkRU9GID0gdHJ1ZTtcblxuXHRcdHJldHVybiBjaDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIG5leHQgaW50ZWdlciBpbiB0aGUgZGF0YSBzdHJlYW0uXG5cdCAqL1xuXHRwcml2YXRlIGdldE5leHRJbnQoKTpudW1iZXIgLyppbnQqL1xuXHR7XG5cdFx0dmFyIGk6bnVtYmVyID0gcGFyc2VJbnQodGhpcy5nZXROZXh0VG9rZW4oKSk7XG5cdFx0aWYgKGlzTmFOKGkpKVxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcImludCB0eXBlXCIpO1xuXHRcdHJldHVybiBpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgbmV4dCBmbG9hdGluZyBwb2ludCBudW1iZXIgaW4gdGhlIGRhdGEgc3RyZWFtLlxuXHQgKi9cblx0cHJpdmF0ZSBnZXROZXh0TnVtYmVyKCk6bnVtYmVyXG5cdHtcblx0XHR2YXIgZjpudW1iZXIgPSBwYXJzZUZsb2F0KHRoaXMuZ2V0TmV4dFRva2VuKCkpO1xuXHRcdGlmIChpc05hTihmKSlcblx0XHRcdHRoaXMuc2VuZFBhcnNlRXJyb3IoXCJmbG9hdCB0eXBlXCIpO1xuXHRcdHJldHVybiBmO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgbmV4dCAzZCB2ZWN0b3IgaW4gdGhlIGRhdGEgc3RyZWFtLlxuXHQgKi9cblx0cHJpdmF0ZSBwYXJzZVZlY3RvcjNEKCk6VmVjdG9yM0Rcblx0e1xuXHRcdHZhciB2ZWM6VmVjdG9yM0QgPSBuZXcgVmVjdG9yM0QoKTtcblx0XHR2YXIgY2g6c3RyaW5nID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcblxuXHRcdGlmIChjaCAhPSBcIihcIilcblx0XHRcdHRoaXMuc2VuZFBhcnNlRXJyb3IoXCIoXCIpO1xuXHRcdHZlYy54ID0gdGhpcy5nZXROZXh0TnVtYmVyKCk7XG5cdFx0dmVjLnkgPSB0aGlzLmdldE5leHROdW1iZXIoKTtcblx0XHR2ZWMueiA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xuXG5cdFx0aWYgKHRoaXMuZ2V0TmV4dFRva2VuKCkgIT0gXCIpXCIpXG5cdFx0XHR0aGlzLnNlbmRQYXJzZUVycm9yKFwiKVwiKTtcblxuXHRcdHJldHVybiB2ZWM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSBuZXh0IHF1YXRlcm5pb24gaW4gdGhlIGRhdGEgc3RyZWFtLlxuXHQgKi9cblx0cHJpdmF0ZSBwYXJzZVF1YXRlcm5pb24oKTpRdWF0ZXJuaW9uXG5cdHtcblx0XHR2YXIgcXVhdDpRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcblx0XHR2YXIgY2g6c3RyaW5nID0gdGhpcy5nZXROZXh0VG9rZW4oKTtcblxuXHRcdGlmIChjaCAhPSBcIihcIilcblx0XHRcdHRoaXMuc2VuZFBhcnNlRXJyb3IoXCIoXCIpO1xuXHRcdHF1YXQueCA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xuXHRcdHF1YXQueSA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xuXHRcdHF1YXQueiA9IHRoaXMuZ2V0TmV4dE51bWJlcigpO1xuXG5cdFx0Ly8gcXVhdCBzdXBwb3NlZCB0byBiZSB1bml0IGxlbmd0aFxuXHRcdHZhciB0Om51bWJlciA9IDEgLSAocXVhdC54KnF1YXQueCkgLSAocXVhdC55KnF1YXQueSkgLSAocXVhdC56KnF1YXQueik7XG5cdFx0cXVhdC53ID0gdCA8IDA/IDAgOiAtTWF0aC5zcXJ0KHQpO1xuXG5cdFx0aWYgKHRoaXMuZ2V0TmV4dFRva2VuKCkgIT0gXCIpXCIpXG5cdFx0XHR0aGlzLnNlbmRQYXJzZUVycm9yKFwiKVwiKTtcblxuXHRcdHJldHVybiBxdWF0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgY29tbWFuZCBsaW5lIGRhdGEuXG5cdCAqL1xuXHRwcml2YXRlIHBhcnNlQ01EKCk6dm9pZFxuXHR7XG5cdFx0Ly8ganVzdCBpZ25vcmUgdGhlIGNvbW1hbmQgbGluZSBwcm9wZXJ0eVxuXHRcdHRoaXMucGFyc2VMaXRlcmFsc3RyaW5nKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSBuZXh0IGxpdGVyYWwgc3RyaW5nIGluIHRoZSBkYXRhIHN0cmVhbS4gQSBsaXRlcmFsIHN0cmluZyBpcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYm91bmRlZFxuXHQgKiBieSBkb3VibGUgcXVvdGVzLlxuXHQgKi9cblx0cHJpdmF0ZSBwYXJzZUxpdGVyYWxzdHJpbmcoKTpzdHJpbmdcblx0e1xuXHRcdHRoaXMuc2tpcFdoaXRlU3BhY2UoKTtcblxuXHRcdHZhciBjaDpzdHJpbmcgPSB0aGlzLmdldE5leHRDaGFyKCk7XG5cdFx0dmFyIHN0cjpzdHJpbmcgPSBcIlwiO1xuXG5cdFx0aWYgKGNoICE9IFwiXFxcIlwiKVxuXHRcdFx0dGhpcy5zZW5kUGFyc2VFcnJvcihcIlxcXCJcIik7XG5cblx0XHRkbyB7XG5cdFx0XHRpZiAodGhpcy5fcmVhY2hlZEVPRilcblx0XHRcdFx0dGhpcy5zZW5kRU9GRXJyb3IoKTtcblx0XHRcdGNoID0gdGhpcy5nZXROZXh0Q2hhcigpO1xuXHRcdFx0aWYgKGNoICE9IFwiXFxcIlwiKVxuXHRcdFx0XHRzdHIgKz0gY2g7XG5cdFx0fSB3aGlsZSAoY2ggIT0gXCJcXFwiXCIpO1xuXG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaHJvd3MgYW4gZW5kLW9mLWZpbGUgZXJyb3Igd2hlbiBhIHByZW1hdHVyZSBlbmQgb2YgZmlsZSB3YXMgZW5jb3VudGVyZWQuXG5cdCAqL1xuXHRwcml2YXRlIHNlbmRFT0ZFcnJvcigpOnZvaWRcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGZpbGVcIik7XG5cdH1cblxuXHQvKipcblx0ICogVGhyb3dzIGFuIGVycm9yIHdoZW4gYW4gdW5leHBlY3RlZCB0b2tlbiB3YXMgZW5jb3VudGVyZWQuXG5cdCAqIEBwYXJhbSBleHBlY3RlZCBUaGUgdG9rZW4gdHlwZSB0aGF0IHdhcyBhY3R1YWxseSBleHBlY3RlZC5cblx0ICovXG5cdHByaXZhdGUgc2VuZFBhcnNlRXJyb3IoZXhwZWN0ZWQ6c3RyaW5nKTp2b2lkXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHRva2VuIGF0IGxpbmUgXCIgKyAodGhpcy5fbGluZSArIDEpICsgXCIsIGNoYXJhY3RlciBcIiArIHRoaXMuX2NoYXJMaW5lSW5kZXggKyBcIi4gXCIgKyBleHBlY3RlZCArIFwiIGV4cGVjdGVkLCBidXQgXCIgKyB0aGlzLl90ZXh0RGF0YS5jaGFyQXQodGhpcy5fcGFyc2VJbmRleCAtIDEpICsgXCIgZW5jb3VudGVyZWRcIik7XG5cdH1cblxuXHQvKipcblx0ICogVGhyb3dzIGFuIGVycm9yIHdoZW4gYW4gdW5rbm93biBrZXl3b3JkIHdhcyBlbmNvdW50ZXJlZC5cblx0ICovXG5cdHByaXZhdGUgc2VuZFVua25vd25LZXl3b3JkRXJyb3IoKTp2b2lkXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGtleXdvcmQgYXQgbGluZSBcIiArICh0aGlzLl9saW5lICsgMSkgKyBcIiwgY2hhcmFjdGVyIFwiICsgdGhpcy5fY2hhckxpbmVJbmRleCArIFwiLiBcIik7XG5cdH1cbn1cblxuZXhwb3J0ID0gTUQ1QW5pbVBhcnNlcjtcblxuXG4vKipcbiAqXG4gKi9cbmNsYXNzIEJhc2VGcmFtZURhdGFcbntcblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRwdWJsaWMgcG9zaXRpb246VmVjdG9yM0Q7XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRwdWJsaWMgb3JpZW50YXRpb246UXVhdGVybmlvbjtcbn1cblxuLyoqXG4gKlxuICovXG5jbGFzcyBCb3VuZHNEYXRhXG57XG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0cHVibGljIG1pbjpWZWN0b3IzRDtcblxuXHQvKipcblx0ICpcblx0ICovXG5cdHB1YmxpYyBtYXg6VmVjdG9yM0Q7XG59XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgRnJhbWVEYXRhXG57XG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0cHVibGljIGluZGV4Om51bWJlciAvKmludCovO1xuXG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0cHVibGljIGNvbXBvbmVudHM6QXJyYXk8bnVtYmVyPjtcbn1cblxuLyoqXG4gKlxuICovXG5jbGFzcyBIaWVyYXJjaHlEYXRhXG57XG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0cHVibGljIG5hbWU6c3RyaW5nO1xuXG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0cHVibGljIHBhcmVudEluZGV4Om51bWJlciAvKmludCovO1xuXG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0cHVibGljIGZsYWdzOm51bWJlciAvKmludCovO1xuXG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0cHVibGljIHN0YXJ0SW5kZXg6bnVtYmVyIC8qaW50Ki87XG59Il19