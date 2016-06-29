import { ParserBase } from "@awayjs/core/lib/parsers/ParserBase";
import { ResourceDependency } from "@awayjs/core/lib/parsers/ResourceDependency";
/**
 * FontParser should parse Fonts into TesselatedFontTable for usage with webGL, or just load the Font as css class for usage with canvas and no webGL
 */
export declare class FontParser extends ParserBase {
    private _useWebGL;
    /**
     * Creates a new TextureAtlasParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    constructor(useWebGL?: boolean);
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
    private sortKeys(dict);
    /**
     * @inheritDoc
     */
    _pProceedParsing(): boolean;
}
