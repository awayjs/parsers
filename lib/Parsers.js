"use strict";
var Loader_1 = require("@awayjs/core/lib/library/Loader");
var AWDParser_1 = require("./AWDParser");
var Max3DSParser_1 = require("./Max3DSParser");
var MD2Parser_1 = require("./MD2Parser");
var OBJParser_1 = require("./OBJParser");
var FNTParser_1 = require("./FNTParser");
/**
 *
 */
var Parsers = (function () {
    function Parsers() {
    }
    /**
     * Short-hand function to enable all bundled parsers for auto-detection. In practice,
     * this is the same as invoking enableParsers(Parsers.ALL_BUNDLED) on any of the
     * loader classes SingleFileLoader, LoaderSession, AssetLibrary or Loader3D.
     *
     * See notes about file size in the documentation for the ALL_BUNDLED constant.
     *
     * @see away.parsers.Parsers.ALL_BUNDLED
     */
    Parsers.enableAllBundled = function () {
        Loader_1.Loader.enableParsers(Parsers.ALL_BUNDLED);
    };
    /**
     * A list of all parsers that come bundled with Away3D. Use this to quickly
     * enable support for all bundled parsers to the file format auto-detection
     * feature, using any of the enableParsers() methods on loaders, e.g.:
     *
     * <code>AssetLibrary.enableParsers(Parsers.ALL_BUNDLED);</code>
     *
     * Beware however that this requires all parser classes to be included in the
     * SWF file, which will add 50-100 kb to the file. When only a limited set of
     * file formats are used, SWF file size can be saved by adding the parsers
     * individually using AssetLibrary.enableParser()
     *
     * A third way is to specify a parser for each loaded file, thereby bypassing
     * the auto-detection mechanisms altogether, while at the same time allowing
     * any properties that are unique to that parser to be set for that load.
     *
     * The bundled parsers are:
     *
     * <ul>
     * <li>AC3D (.ac)</li>
     * <li>Away Data version 1 ASCII and version 2 binary (.awd). AWD1 BSP unsupported</li>
     * <li>3DMax (.3ds)</li>
     * <li>DXF (.dxf)</li>
     * <li>Quake 2 MD2 models (.md2)</li>
     * <li>Doom 3 MD5 animation clips (.md5anim)</li>
     * <li>Doom 3 MD5 sprites (.md5sprite)</li>
     * <li>Wavefront OBJ (.obj)</li>
     * <li>Collada (.dae)</li>
     * <li>Images (.jpg, .png)</li>
     * </ul>
     *
     * @see away.library.AssetLibrary.enableParser
     */
    Parsers.ALL_BUNDLED = Array(AWDParser_1.AWDParser, Max3DSParser_1.Max3DSParser, MD2Parser_1.MD2Parser, OBJParser_1.OBJParser, FNTParser_1.FNTParser);
    return Parsers;
}());
exports.Parsers = Parsers;
