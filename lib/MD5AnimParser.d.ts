import { Quaternion } from "@awayjs/core/lib/geom/Quaternion";
import { Vector3D } from "@awayjs/core/lib/geom/Vector3D";
import { ParserBase } from "@awayjs/core/lib/parsers/ParserBase";
/**
 * MD5AnimParser provides a parser for the md5anim data type, providing an animation sequence for the md5 format.
 *
 * todo: optimize
 */
export declare class MD5AnimParser extends ParserBase {
    private _textData;
    private _startedParsing;
    static VERSION_TOKEN: string;
    static COMMAND_LINE_TOKEN: string;
    static NUM_FRAMES_TOKEN: string;
    static NUM_JOINTS_TOKEN: string;
    static FRAME_RATE_TOKEN: string;
    static NUM_ANIMATED_COMPONENTS_TOKEN: string;
    static HIERARCHY_TOKEN: string;
    static BOUNDS_TOKEN: string;
    static BASE_FRAME_TOKEN: string;
    static FRAME_TOKEN: string;
    static COMMENT_TOKEN: string;
    private _parseIndex;
    private _reachedEOF;
    private _line;
    private _charLineIndex;
    private _version;
    private _frameRate;
    private _numFrames;
    private _numJoints;
    private _numAnimatedComponents;
    private _hierarchy;
    private _bounds;
    private _frameData;
    private _baseFrameData;
    private _rotationQuat;
    private _clip;
    /**
     * Creates a new MD5AnimParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    constructor(additionalRotationAxis?: Vector3D, additionalRotationRadians?: number);
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    static supportsType(extension: string): boolean;
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    static supportsData(data: any): boolean;
    /**
     * @inheritDoc
     */
    _pProceedParsing(): boolean;
    /**
     * Converts all key frame data to an SkinnedAnimationSequence.
     */
    private translateClip();
    /**
     * Converts a single key frame data to a SkeletonPose.
     * @param frameData The actual frame data.
     * @return A SkeletonPose containing the frame data's pose.
     */
    private translatePose(frameData);
    /**
     * Parses the skeleton's hierarchy data.
     */
    private parseHierarchy();
    /**
     * Parses frame bounds.
     */
    private parseBounds();
    /**
     * Parses the base frame.
     */
    private parseBaseFrame();
    /**
     * Parses a single frame.
     */
    private parseFrame();
    /**
     * Puts back the last read character into the data stream.
     */
    private putBack();
    /**
     * Gets the next token in the data stream.
     */
    private getNextToken();
    /**
     * Skips all whitespace in the data stream.
     */
    private skipWhiteSpace();
    /**
     * Skips to the next line.
     */
    private ignoreLine();
    /**
     * Retrieves the next single character in the data stream.
     */
    private getNextChar();
    /**
     * Retrieves the next integer in the data stream.
     */
    private getNextInt();
    /**
     * Retrieves the next floating point number in the data stream.
     */
    private getNextNumber();
    /**
     * Retrieves the next 3d vector in the data stream.
     */
    private parseVector3D();
    /**
     * Retrieves the next quaternion in the data stream.
     */
    private parseQuaternion();
    /**
     * Parses the command line data.
     */
    private parseCMD();
    /**
     * Retrieves the next literal string in the data stream. A literal string is a sequence of characters bounded
     * by double quotes.
     */
    private parseLiteralstring();
    /**
     * Throws an end-of-file error when a premature end of file was encountered.
     */
    private sendEOFError();
    /**
     * Throws an error when an unexpected token was encountered.
     * @param expected The token type that was actually expected.
     */
    private sendParseError(expected);
    /**
     * Throws an error when an unknown keyword was encountered.
     */
    private sendUnknownKeywordError();
}
/**
 *
 */
export declare class BaseFrameData {
    /**
     *
     */
    position: Vector3D;
    /**
     *
     */
    orientation: Quaternion;
}
/**
 *
 */
export declare class BoundsData {
    /**
     *
     */
    min: Vector3D;
    /**
     *
     */
    max: Vector3D;
}
/**
 *
 */
export declare class FrameData {
    /**
     *
     */
    index: number;
    /**
     *
     */
    components: Array<number>;
}
/**
 *
 */
export declare class HierarchyData {
    /**
     *
     */
    name: string;
    /**
     *
     */
    parentIndex: number;
    /**
     *
     */
    flags: number;
    /**
     *
     */
    startIndex: number;
}
