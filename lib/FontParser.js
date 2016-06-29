"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AssetLibrary_1 = require("@awayjs/core/lib/library/AssetLibrary");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var ParserBase_1 = require("@awayjs/core/lib/parsers/ParserBase");
var ParserUtils_1 = require("@awayjs/core/lib/parsers/ParserUtils");
var Font_1 = require("@awayjs/display/lib/text/Font");
var TesselatedFontTable_1 = require("@awayjs/display/lib/text/TesselatedFontTable");
var opentype;
/**
 * FontParser should parse Fonts into TesselatedFontTable for usage with webGL, or just load the Font as css class for usage with canvas and no webGL
 */
var FontParser = (function (_super) {
    __extends(FontParser, _super);
    /**
     * Creates a new TextureAtlasParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    function FontParser(useWebGL) {
        if (useWebGL === void 0) { useWebGL = true; }
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.ARRAY_BUFFER);
        this._useWebGL = false;
        this._useWebGL = useWebGL;
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    FontParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        var supports = ((extension == "ttf") || (extension == "otf"));
        if (supports) {
            console.log("FontParse encountered file with supported extension: = " + extension);
        }
        return ((extension == "ttf") || (extension == "otf"));
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    FontParser.supportsData = function (data) {
        console.log("ParserFont = " + ParserUtils_1.ParserUtils.toString(data, 20));
        try {
            /*
            var content:string = ParserUtils.toString(data);
            if(content.indexOf("font") != -1 || content.indexOf("Font") != -1){
                console.log("supportsData fnt");
                return true;

            }
            */
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * @inheritDoc
     */
    FontParser.prototype._iResolveDependency = function (resourceDependency) {
    };
    /**
     * @inheritDoc
     */
    FontParser.prototype._iResolveDependencyFailure = function (resourceDependency) {
    };
    FontParser.prototype.sortKeys = function (dict) {
        var keys = [];
        for (var key in dict) {
            keys.push(key);
        }
        keys.sort();
        return keys;
    };
    /**
     * @inheritDoc
     */
    FontParser.prototype._pProceedParsing = function () {
        //console.log("proceed parsing = "+this._iFileName);
        opentype = window["opentype"];
        if (opentype) {
            //console.log("parsing font = "+this._iFileName+" / bytelength = "+this._pGetByteData().getBytesAvailable());
            var font_name = "";
            var font_style_name = "";
            var font = opentype.parse(this.data);
            var tablename, table, property, value, fontname;
            var head = font.tables.head;
            /*
            */
            for (tablename in font.tables) {
                table = font.tables[tablename];
                if (tablename == 'name') {
                    var properties = this.sortKeys(table);
                    for (var i = 0; i < properties.length; i++) {
                        var property = properties[i];
                        var translations = table[property];
                        var langs = this.sortKeys(translations);
                        for (var j = 0; j < langs.length; j++) {
                            var lang = langs[j];
                            if (property == "fontFamily") {
                                font_name = translations[lang];
                            }
                            else if (property == "fontSubfamily") {
                                font_style_name = translations[lang];
                            }
                            console.log("    " + property + ": " + lang + " : " + translations[lang]);
                        }
                    }
                }
            }
            if (font_name == "") {
                console.log("FontParser.ts '" + this._iFileName + "': Could not read fontname !!!");
            }
            if (font_style_name == "") {
                console.log("FontParser.ts '" + this._iFileName + "': Could not read font_style_name !!!");
            }
            var new_font = AssetLibrary_1.AssetLibrary.getAsset(font_name);
            var newfont = false;
            if (new_font == undefined) {
                new_font = new Font_1.Font();
                newfont = true;
            }
            new_font.name = font_name;
            var new_font_style = new_font.get_font_table(font_style_name, TesselatedFontTable_1.TesselatedFontTable.assetType, font);
        }
        if (document) {
            var s = document.createElement('style');
            s.type = "text/css";
            document.getElementsByTagName('head')[0].appendChild(s);
            s.style.cssText = "@font-face {\
					font-family: ''" + this._iFileName + "';\
					src: url('" + this._iFileName + "');\
					};";
        }
        this._pFinalizeAsset(new_font, new_font.name);
        return ParserBase_1.ParserBase.PARSING_DONE;
    };
    return FontParser;
}(ParserBase_1.ParserBase));
exports.FontParser = FontParser;
