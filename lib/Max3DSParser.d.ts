import { Vector3D } from "@awayjs/core/lib/geom/Vector3D";
import { ParserBase } from "@awayjs/core/lib/parsers/ParserBase";
import { ResourceDependency } from "@awayjs/core/lib/parsers/ResourceDependency";
import { MaterialBase } from "@awayjs/display/lib/materials/MaterialBase";
import { Single2DTexture } from "@awayjs/display/lib/textures/Single2DTexture";
/**
 * Max3DSParser provides a parser for the 3ds data type.
 */
export declare class Max3DSParser extends ParserBase {
    private _byteData;
    private _textures;
    private _materials;
    private _unfinalized_objects;
    private _cur_obj_end;
    private _cur_obj;
    private _cur_mat_end;
    private _cur_mat;
    private _useSmoothingGroups;
    /**
     * Creates a new <code>Max3DSParser</code> object.
     *
     * @param useSmoothingGroups Determines whether the parser looks for smoothing groups in the 3ds file or assumes uniform smoothing. Defaults to true.
     */
    constructor(useSmoothingGroups?: boolean);
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
    private parseMaterial();
    private parseTexture(end);
    private parseVertexList();
    private parseFaceList();
    private parseSmoothingGroups();
    private parseUVList();
    private parseFaceMaterialList();
    private parseObjectAnimation(end);
    private constructObject(obj, pivot?);
    private prepareData(vertices, faces, obj);
    private applySmoothGroups(vertices, faces);
    private finalizeCurrentMaterial();
    private readNulTermstring();
    private readTransform();
    private readColor();
}
/**
 *
 */
export declare class FaceVO {
    a: number;
    b: number;
    c: number;
    smoothGroup: number;
}
/**
 *
 */
export declare class MaterialVO {
    name: string;
    ambientColor: number;
    diffuseColor: number;
    specularColor: number;
    twoSided: boolean;
    colorMap: TextureVO;
    specularMap: TextureVO;
    material: MaterialBase;
}
/**
 *
 */
export declare class ObjectVO {
    name: string;
    type: string;
    pivotX: number;
    pivotY: number;
    pivotZ: number;
    transform: Float32Array;
    verts: Array<number>;
    indices: Array<number>;
    uvs: Array<number>;
    materialFaces: Object;
    materials: Array<string>;
    smoothingGroups: Array<number>;
}
/**
 *
 */
export declare class TextureVO {
    url: string;
    texture: Single2DTexture;
}
/**
 *
 */
export declare class VertexVO {
    x: number;
    y: number;
    z: number;
    u: number;
    v: number;
    normal: Vector3D;
    tangent: Vector3D;
}
