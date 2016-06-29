import { ParserBase } from "@awayjs/core/lib/parsers/ParserBase";
import { ResourceDependency } from "@awayjs/core/lib/parsers/ResourceDependency";
/**
 * TextureAtlasParser provides a "parser" for natively supported image types (jpg, png). While it simply loads bytes into
 * a loader object, it wraps it in a BitmapImage2DResource so resource management can happen consistently without
 * exception cases.
 */
export declare class FNTParser extends ParserBase {
    private _doc;
    private _imagePath;
    private _bitmapFontTable;
    private _font;
    private _chars;
    private _parseState;
    /**
     * Creates a new TextureAtlasParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    constructor();
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
}
