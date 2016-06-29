import { Vector3D } from "@awayjs/core/lib/geom/Vector3D";
import { ParserBase } from "@awayjs/core/lib/parsers/ParserBase";
/**
 * MD5MeshParser provides a parser for the md5mesh data type, providing the graphics of the md5 format.
 *
 * todo: optimize
 */
export declare class MD5MeshParser extends ParserBase {
    private _textData;
    private _startedParsing;
    static VERSION_TOKEN: string;
    static COMMAND_LINE_TOKEN: string;
    static NUM_JOINTS_TOKEN: string;
    static NUM_MESHES_TOKEN: string;
    static COMMENT_TOKEN: string;
    static JOINTS_TOKEN: string;
    static MESH_TOKEN: string;
    static MESH_SHADER_TOKEN: string;
    static MESH_NUM_VERTS_TOKEN: string;
    static MESH_VERT_TOKEN: string;
    static MESH_NUM_TRIS_TOKEN: string;
    static MESH_TRI_TOKEN: string;
    static MESH_NUM_WEIGHTS_TOKEN: string;
    static MESH_WEIGHT_TOKEN: string;
    private _parseIndex;
    private _reachedEOF;
    private _line;
    private _charLineIndex;
    private _version;
    private _numJoints;
    private _numMeshes;
    private _sprite;
    private _shaders;
    private _maxJointCount;
    private _elementsData;
    private _bindPoses;
    private _graphics;
    private _skeleton;
    private _animationSet;
    private _rotationQuat;
    /**
     * Creates a new MD5MeshParser object.
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
    _pStartParsing(frameLimit: number): void;
    private calculateMaxJointCount();
    private countZeroWeightJoints(position, weights);
    /**
     * Parses the skeleton's joints.
     */
    private parseJoints();
    /**
     * Puts back the last read character into the data stream.
     */
    private putBack();
    /**
     * Parses the mesh graphics.
     */
    private parseMesh();
    /**
     * Converts the sprite data to a SkinnedSub instance.
     * @param positionData The sprite's positions.
     * @param weights The joint weights per position.
     * @param indices The indices for the faces.
     * @return A TriangleElements instance containing all elements data for the current sprite.
     */
    private translateElements(positionData, weights, indices);
    /**
     * Retrieve the next triplet of position indices that form a face.
     * @param indices The index list in which to store the read data.
     */
    private parseTri(indices);
    /**
     * Reads a new joint data set for a single joint.
     * @param weights the target list to contain the weight data.
     */
    private parseJoint(weights);
    /**
     * Reads the data for a single position.
     * @param positionData The list to contain the position data.
     */
    private parseVertex(positionData);
    /**
     * Reads the next uv coordinate.
     * @param positionData The positionData to contain the UV coordinates.
     */
    private parseUV(positionData);
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
export declare class PositionData {
    index: number;
    s: number;
    t: number;
    startWeight: number;
    countWeight: number;
}
export declare class JointData {
    index: number;
    joint: number;
    bias: number;
    pos: Vector3D;
}
export declare class ElementsData {
    positionData: Array<PositionData>;
    weightData: Array<JointData>;
    indices: Array<number>;
}
