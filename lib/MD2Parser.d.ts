import { ParserBase } from "@awayjs/core/lib/parsers/ParserBase";
import { ResourceDependency } from "@awayjs/core/lib/parsers/ResourceDependency";
/**
 * MD2Parser provides a parser for the MD2 data type.
 */
export declare class MD2Parser extends ParserBase {
    static FPS: number;
    private _clipNodes;
    private _byteData;
    private _startedParsing;
    private _parsedHeader;
    private _parsedUV;
    private _parsedFaces;
    private _parsedFrames;
    private _ident;
    private _version;
    private _skinWidth;
    private _skinHeight;
    private _numSkins;
    private _numVertices;
    private _numST;
    private _numTris;
    private _numFrames;
    private _offsetSkins;
    private _offsetST;
    private _offsetTris;
    private _offsetFrames;
    private _offsetEnd;
    private _uvIndices;
    private _indices;
    private _vertIndices;
    private _animationSet;
    private _firstElements;
    private _uvs;
    private _finalUV;
    private _materialNames;
    private _textureType;
    private _ignoreTexturePath;
    private _sprite;
    private _graphics;
    private materialFinal;
    private graphicsCreated;
    /**
     * Creates a new MD2Parser object.
     * @param textureType The extension of the texture (e.g. jpg/png/...)
     * @param ignoreTexturePath If true, the path of the texture is ignored
     */
    constructor(textureType?: string, ignoreTexturePath?: boolean);
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
     * Reads in all that MD2 Header data that is declared as private variables.
     * I know its a lot, and it looks ugly, but only way to do it in Flash
     */
    private parseHeader();
    /**
     * Parses the file names for the materials.
     */
    private parseMaterialNames();
    /**
     * Parses the uv data for the sprite.
     */
    private parseUV();
    /**
     * Parses unique indices for the faces.
     */
    private parseFaces();
    /**
     * Adds a face index to the list if it doesn't exist yet, based on vertexIndex and uvIndex, and adds the
     * corresponding vertex and uv data in the correct location.
     * @param vertexIndex The original index in the vertex list.
     * @param uvIndex The original index in the uv list.
     */
    private addIndex(vertexIndex, uvIndex);
    /**
     * Finds the final index corresponding to the original MD2's vertex and uv indices. Returns -1 if it wasn't added yet.
     * @param vertexIndex The original index in the vertex list.
     * @param uvIndex The original index in the uv list.
     * @return The index of the final sprite corresponding to the original vertex and uv index. -1 if it doesn't exist yet.
     */
    private findIndex(vertexIndex, uvIndex);
    /**
     * Parses all the frame elements.
     */
    private parseFrames();
    private readFrameName();
}
