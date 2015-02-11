var AssetLoader = require("awayjs-core/lib/library/AssetLoader");
var AWDParser = require("awayjs-parsers/lib/AWDParser");
var Max3DSParser = require("awayjs-parsers/lib/Max3DSParser");
var MD2Parser = require("awayjs-parsers/lib/MD2Parser");
var OBJParser = require("awayjs-parsers/lib/OBJParser");
/**
 *
 */
var Parsers = (function () {
    function Parsers() {
    }
    /**
     * Short-hand function to enable all bundled parsers for auto-detection. In practice,
     * this is the same as invoking enableParsers(Parsers.ALL_BUNDLED) on any of the
     * loader classes SingleFileLoader, AssetLoader, AssetLibrary or Loader3D.
     *
     * See notes about file size in the documentation for the ALL_BUNDLED constant.
     *
     * @see away.parsers.Parsers.ALL_BUNDLED
     */
    Parsers.enableAllBundled = function () {
        AssetLoader.enableParsers(Parsers.ALL_BUNDLED);
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
     * <li>Doom 3 MD5 meshes (.md5mesh)</li>
     * <li>Wavefront OBJ (.obj)</li>
     * <li>Collada (.dae)</li>
     * <li>Images (.jpg, .png)</li>
     * </ul>
     *
     * @see away.library.AssetLibrary.enableParser
     */
    Parsers.ALL_BUNDLED = Array(AWDParser, Max3DSParser, MD2Parser, OBJParser);
    return Parsers;
})();
module.exports = Parsers;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1wYXJzZXJzL2xpYi9QYXJzZXJzLnRzIl0sIm5hbWVzIjpbIlBhcnNlcnMiLCJQYXJzZXJzLmNvbnN0cnVjdG9yIiwiUGFyc2Vycy5lbmFibGVBbGxCdW5kbGVkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLFdBQVcsV0FBZ0IscUNBQXFDLENBQUMsQ0FBQztBQUV6RSxJQUFPLFNBQVMsV0FBZ0IsOEJBQThCLENBQUMsQ0FBQztBQUNoRSxJQUFPLFlBQVksV0FBZ0IsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxJQUFPLFNBQVMsV0FBZ0IsOEJBQThCLENBQUMsQ0FBQztBQUNoRSxJQUFPLFNBQVMsV0FBZ0IsOEJBQThCLENBQUMsQ0FBQztBQUVoRSxBQUdBOztHQURHO0lBQ0csT0FBTztJQUFiQSxTQUFNQSxPQUFPQTtJQWtEYkMsQ0FBQ0E7SUFiQUQ7Ozs7Ozs7O09BUUdBO0lBQ1dBLHdCQUFnQkEsR0FBOUJBO1FBRUNFLFdBQVdBLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQS9DREY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0NHQTtJQUNXQSxtQkFBV0EsR0FBaUJBLEtBQUtBLENBQVNBLFNBQVNBLEVBQUVBLFlBQVlBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO0lBZXhHQSxjQUFDQTtBQUFEQSxDQWxEQSxBQWtEQ0EsSUFBQTtBQUVELEFBQWlCLGlCQUFSLE9BQU8sQ0FBQyIsImZpbGUiOiJQYXJzZXJzLmpzIiwic291cmNlUm9vdCI6Ii4uLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldExvYWRlclx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9saWJyYXJ5L0Fzc2V0TG9hZGVyXCIpO1xyXG5cclxuaW1wb3J0IEFXRFBhcnNlclx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1wYXJzZXJzL2xpYi9BV0RQYXJzZXJcIik7XHJcbmltcG9ydCBNYXgzRFNQYXJzZXJcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcGFyc2Vycy9saWIvTWF4M0RTUGFyc2VyXCIpO1xyXG5pbXBvcnQgTUQyUGFyc2VyXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXBhcnNlcnMvbGliL01EMlBhcnNlclwiKTtcclxuaW1wb3J0IE9CSlBhcnNlclx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1wYXJzZXJzL2xpYi9PQkpQYXJzZXJcIik7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIFBhcnNlcnNcclxue1xyXG5cdC8qKlxyXG5cdCAqIEEgbGlzdCBvZiBhbGwgcGFyc2VycyB0aGF0IGNvbWUgYnVuZGxlZCB3aXRoIEF3YXkzRC4gVXNlIHRoaXMgdG8gcXVpY2tseVxyXG5cdCAqIGVuYWJsZSBzdXBwb3J0IGZvciBhbGwgYnVuZGxlZCBwYXJzZXJzIHRvIHRoZSBmaWxlIGZvcm1hdCBhdXRvLWRldGVjdGlvblxyXG5cdCAqIGZlYXR1cmUsIHVzaW5nIGFueSBvZiB0aGUgZW5hYmxlUGFyc2VycygpIG1ldGhvZHMgb24gbG9hZGVycywgZS5nLjpcclxuXHQgKlxyXG5cdCAqIDxjb2RlPkFzc2V0TGlicmFyeS5lbmFibGVQYXJzZXJzKFBhcnNlcnMuQUxMX0JVTkRMRUQpOzwvY29kZT5cclxuXHQgKlxyXG5cdCAqIEJld2FyZSBob3dldmVyIHRoYXQgdGhpcyByZXF1aXJlcyBhbGwgcGFyc2VyIGNsYXNzZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXHJcblx0ICogU1dGIGZpbGUsIHdoaWNoIHdpbGwgYWRkIDUwLTEwMCBrYiB0byB0aGUgZmlsZS4gV2hlbiBvbmx5IGEgbGltaXRlZCBzZXQgb2ZcclxuXHQgKiBmaWxlIGZvcm1hdHMgYXJlIHVzZWQsIFNXRiBmaWxlIHNpemUgY2FuIGJlIHNhdmVkIGJ5IGFkZGluZyB0aGUgcGFyc2Vyc1xyXG5cdCAqIGluZGl2aWR1YWxseSB1c2luZyBBc3NldExpYnJhcnkuZW5hYmxlUGFyc2VyKClcclxuXHQgKlxyXG5cdCAqIEEgdGhpcmQgd2F5IGlzIHRvIHNwZWNpZnkgYSBwYXJzZXIgZm9yIGVhY2ggbG9hZGVkIGZpbGUsIHRoZXJlYnkgYnlwYXNzaW5nXHJcblx0ICogdGhlIGF1dG8tZGV0ZWN0aW9uIG1lY2hhbmlzbXMgYWx0b2dldGhlciwgd2hpbGUgYXQgdGhlIHNhbWUgdGltZSBhbGxvd2luZ1xyXG5cdCAqIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIHVuaXF1ZSB0byB0aGF0IHBhcnNlciB0byBiZSBzZXQgZm9yIHRoYXQgbG9hZC5cclxuXHQgKlxyXG5cdCAqIFRoZSBidW5kbGVkIHBhcnNlcnMgYXJlOlxyXG5cdCAqXHJcblx0ICogPHVsPlxyXG5cdCAqIDxsaT5BQzNEICguYWMpPC9saT5cclxuXHQgKiA8bGk+QXdheSBEYXRhIHZlcnNpb24gMSBBU0NJSSBhbmQgdmVyc2lvbiAyIGJpbmFyeSAoLmF3ZCkuIEFXRDEgQlNQIHVuc3VwcG9ydGVkPC9saT5cclxuXHQgKiA8bGk+M0RNYXggKC4zZHMpPC9saT5cclxuXHQgKiA8bGk+RFhGICguZHhmKTwvbGk+XHJcblx0ICogPGxpPlF1YWtlIDIgTUQyIG1vZGVscyAoLm1kMik8L2xpPlxyXG5cdCAqIDxsaT5Eb29tIDMgTUQ1IGFuaW1hdGlvbiBjbGlwcyAoLm1kNWFuaW0pPC9saT5cclxuXHQgKiA8bGk+RG9vbSAzIE1ENSBtZXNoZXMgKC5tZDVtZXNoKTwvbGk+XHJcblx0ICogPGxpPldhdmVmcm9udCBPQkogKC5vYmopPC9saT5cclxuXHQgKiA8bGk+Q29sbGFkYSAoLmRhZSk8L2xpPlxyXG5cdCAqIDxsaT5JbWFnZXMgKC5qcGcsIC5wbmcpPC9saT5cclxuXHQgKiA8L3VsPlxyXG5cdCAqXHJcblx0ICogQHNlZSBhd2F5LmxpYnJhcnkuQXNzZXRMaWJyYXJ5LmVuYWJsZVBhcnNlclxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgQUxMX0JVTkRMRUQ6QXJyYXk8T2JqZWN0PiA9IEFycmF5PE9iamVjdD4oQVdEUGFyc2VyLCBNYXgzRFNQYXJzZXIsIE1EMlBhcnNlciwgT0JKUGFyc2VyKTtcclxuXHJcblx0LyoqXHJcblx0ICogU2hvcnQtaGFuZCBmdW5jdGlvbiB0byBlbmFibGUgYWxsIGJ1bmRsZWQgcGFyc2VycyBmb3IgYXV0by1kZXRlY3Rpb24uIEluIHByYWN0aWNlLFxyXG5cdCAqIHRoaXMgaXMgdGhlIHNhbWUgYXMgaW52b2tpbmcgZW5hYmxlUGFyc2VycyhQYXJzZXJzLkFMTF9CVU5ETEVEKSBvbiBhbnkgb2YgdGhlXHJcblx0ICogbG9hZGVyIGNsYXNzZXMgU2luZ2xlRmlsZUxvYWRlciwgQXNzZXRMb2FkZXIsIEFzc2V0TGlicmFyeSBvciBMb2FkZXIzRC5cclxuXHQgKlxyXG5cdCAqIFNlZSBub3RlcyBhYm91dCBmaWxlIHNpemUgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBBTExfQlVORExFRCBjb25zdGFudC5cclxuXHQgKlxyXG5cdCAqIEBzZWUgYXdheS5wYXJzZXJzLlBhcnNlcnMuQUxMX0JVTkRMRURcclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIGVuYWJsZUFsbEJ1bmRsZWQoKTp2b2lkXHJcblx0e1xyXG5cdFx0QXNzZXRMb2FkZXIuZW5hYmxlUGFyc2VycyhQYXJzZXJzLkFMTF9CVU5ETEVEKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCA9IFBhcnNlcnM7Il19