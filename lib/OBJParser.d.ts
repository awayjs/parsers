import { ParserBase } from "@awayjs/core/lib/parsers/ParserBase";
import { ResourceDependency } from "@awayjs/core/lib/parsers/ResourceDependency";
import { MaterialBase } from "@awayjs/display/lib/materials/MaterialBase";
import { Single2DTexture } from "@awayjs/display/lib/textures/Single2DTexture";
import { SpecularBasicMethod } from "@awayjs/materials/lib/methods/SpecularBasicMethod";
/**
 * OBJParser provides a parser for the OBJ data type.
 */
export declare class OBJParser extends ParserBase {
    private _textData;
    private _startedParsing;
    private _charIndex;
    private _oldIndex;
    private _stringLength;
    private _currentObject;
    private _currentGroup;
    private _currentMaterialGroup;
    private _objects;
    private _materialIDs;
    private _materialLoaded;
    private _materialSpecularData;
    private _sprites;
    private _lastMtlID;
    private _objectIndex;
    private _realIndices;
    private _vertexIndex;
    private _vertices;
    private _vertexNormals;
    private _uvs;
    private _scale;
    private _mtlLib;
    private _mtlLibLoaded;
    private _activeMaterialID;
    /**
     * Creates a new OBJParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    constructor(scale?: number);
    /**
     * Scaling factor applied directly to vertices data
     * @param value The scaling factor.
     */
    scale: number;
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
    _iResolveDependency(resourceDependency: ResourceDependency): void;
    /**
     * @inheritDoc
     */
    _iResolveDependencyFailure(resourceDependency: ResourceDependency): void;
    /**
     * @inheritDoc
     */
    _pProceedParsing(): boolean;
    _pStartParsing(frameLimit: number): void;
    /**
     * Parses a single line in the OBJ file.
     */
    private parseLine(trunk);
    /**
     * Converts the parsed data into an Away3D scenegraph structure
     */
    private translate();
    /**
     * Translates an obj's material group to a subgraphics.
     * @param materialGroup The material group data to convert.
     * @param graphics The Graphics to contain the converted Elements.
     */
    private translateMaterialGroup(materialGroup, graphics);
    private translateVertexData(face, vertexIndex, vertices, uvs, indices, normals);
    /**
     * Creates a new object group.
     * @param trunk The data block containing the object tag and its parameters
     */
    private createObject(trunk);
    /**
     * Creates a new group.
     * @param trunk The data block containing the group tag and its parameters
     */
    private createGroup(trunk);
    /**
     * Creates a new material group.
     * @param trunk The data block containing the material tag and its parameters
     */
    private createMaterialGroup(trunk);
    /**
     * Reads the next vertex coordinates.
     * @param trunk The data block containing the vertex tag and its parameters
     */
    private parseVertex(trunk);
    /**
     * Reads the next uv coordinates.
     * @param trunk The data block containing the uv tag and its parameters
     */
    private parseUV(trunk);
    /**
     * Reads the next vertex normal coordinates.
     * @param trunk The data block containing the vertex normal tag and its parameters
     */
    private parseVertexNormal(trunk);
    /**
     * Reads the next face's indices.
     * @param trunk The data block containing the face tag and its parameters
     */
    private parseFace(trunk);
    /**
     * This is a hack around negative face coords
     */
    private parseIndex(index, length);
    private parseMtl(data);
    private parseMapKdString(trunk);
    private loadMtl(mtlurl);
    private applyMaterial(lm);
    private applyMaterials();
}
export declare class ObjectGroup {
    name: string;
    groups: Group[];
}
export declare class Group {
    name: string;
    materialID: string;
    materialGroups: MaterialGroup[];
}
export declare class MaterialGroup {
    url: string;
    faces: FaceData[];
}
export declare class SpecularData {
    materialID: string;
    basicSpecularMethod: SpecularBasicMethod;
    color: number;
    alpha: number;
}
export declare class LoadedMaterial {
    materialID: string;
    texture: Single2DTexture;
    cm: MaterialBase;
    specularMethod: SpecularBasicMethod;
    color: number;
    alpha: number;
}
export declare class FaceData {
    vertexIndices: Array<number>;
    uvIndices: Array<number>;
    normalIndices: Array<number>;
    indexIds: string[];
}
/**
* Texture coordinates value object.
*/
export declare class UV {
    private _u;
    private _v;
    /**
     * Creates a new <code>UV</code> object.
     *
     * @param    u        [optional]    The horizontal coordinate of the texture value. Defaults to 0.
     * @param    v        [optional]    The vertical coordinate of the texture value. Defaults to 0.
     */
    constructor(u?: number, v?: number);
    /**
     * Defines the vertical coordinate of the texture value.
     */
    v: number;
    /**
     * Defines the horizontal coordinate of the texture value.
     */
    u: number;
    /**
     * returns a new UV value Object
     */
    clone(): UV;
    /**
     * returns the value object as a string for trace/debug purpose
     */
    toString(): string;
}
export declare class Vertex {
    private _x;
    private _y;
    private _z;
    private _index;
    /**
     * Creates a new <code>Vertex</code> value object.
     *
     * @param    x            [optional]    The x value. Defaults to 0.
     * @param    y            [optional]    The y value. Defaults to 0.
     * @param    z            [optional]    The z value. Defaults to 0.
     * @param    index        [optional]    The index value. Defaults is NaN.
     */
    constructor(x?: number, y?: number, z?: number, index?: number);
    /**
     * To define/store the index of value object
     * @param    ind        The index
     */
    index: number;
    /**
     * To define/store the x value of the value object
     * @param    value        The x value
     */
    x: number;
    /**
     * To define/store the y value of the value object
     * @param    value        The y value
     */
    y: number;
    /**
     * To define/store the z value of the value object
     * @param    value        The z value
     */
    z: number;
    /**
     * returns a new Vertex value Object
     */
    clone(): Vertex;
}
