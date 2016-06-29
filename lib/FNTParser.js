"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AssetLibrary_1 = require("@awayjs/core/lib/library/AssetLibrary");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("@awayjs/core/lib/net/URLRequest");
var ParserBase_1 = require("@awayjs/core/lib/parsers/ParserBase");
var ParserUtils_1 = require("@awayjs/core/lib/parsers/ParserUtils");
var XmlUtils_1 = require("@awayjs/core/lib/utils/XmlUtils");
var BitmapFontTable_1 = require("@awayjs/display/lib/text/BitmapFontTable");
var Font_1 = require("@awayjs/display/lib/text/Font");
/**
 * TextureAtlasParser provides a "parser" for natively supported image types (jpg, png). While it simply loads bytes into
 * a loader object, it wraps it in a BitmapImage2DResource so resource management can happen consistently without
 * exception cases.
 */
var FNTParser = (function (_super) {
    __extends(FNTParser, _super);
    /**
     * Creates a new TextureAtlasParser object.
     * @param uri The url or id of the data or file to be parsed.
     * @param extra The holder for extra contextual data that the parser might need.
     */
    function FNTParser() {
        _super.call(this, URLLoaderDataFormat_1.URLLoaderDataFormat.TEXT);
        this._parseState = 0;
    }
    /**
     * Indicates whether or not a given file extension is supported by the parser.
     * @param extension The file extension of a potential file to be parsed.
     * @return Whether or not the given file type is supported.
     */
    FNTParser.supportsType = function (extension) {
        extension = extension.toLowerCase();
        var supports = extension == "fnt";
        if (supports) {
            console.log("supportsType fnt = " + extension);
        }
        return extension == "fnt";
    };
    /**
     * Tests whether a data block can be parsed by the parser.
     * @param data The data block to potentially be parsed.
     * @return Whether or not the given data is supported.
     */
    FNTParser.supportsData = function (data) {
        try {
            var content = ParserUtils_1.ParserUtils.toString(data);
            if (content.indexOf("font") != -1 || content.indexOf("Font") != -1) {
                console.log("supportsData fnt");
                return true;
            }
            return false;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * @inheritDoc
     */
    FNTParser.prototype._iResolveDependency = function (resourceDependency) {
        if (resourceDependency.assets.length) {
            this._bitmapFontTable.add_page(resourceDependency.assets[0]);
            this._pFinalizeAsset(resourceDependency.assets[0]);
            this._parseState = FNTParserState.PARSE_CHARS;
        }
        else {
            this._parseState = FNTParserState.PARSE_COMPLETE;
        }
    };
    /**
     * @inheritDoc
     */
    FNTParser.prototype._iResolveDependencyFailure = function (resourceDependency) {
        this._parseState = FNTParserState.PARSE_COMPLETE;
    };
    /**
     * @inheritDoc
     */
    FNTParser.prototype._pProceedParsing = function () {
        var nodes;
        switch (this._parseState) {
            case FNTParserState.PARSE_XML:
                try {
                    this._doc = XmlUtils_1.XmlUtils.getChildrenWithTag(XmlUtils_1.XmlUtils.strToXml(this._pGetTextData()), "font")[0];
                    var page_node = XmlUtils_1.XmlUtils.getChildrenWithTag(this._doc, "pages")[0];
                    var all_pages = XmlUtils_1.XmlUtils.getChildrenWithTag(page_node, "page");
                    var len = all_pages.length;
                    // todo: correctly support multiple pages
                    for (var i = 0; i < len; i++) {
                        this._imagePath = XmlUtils_1.XmlUtils.readAttributeValue(all_pages[i], "file");
                    }
                    var char_node = XmlUtils_1.XmlUtils.getChildrenWithTag(this._doc, "chars")[0];
                    this._chars = XmlUtils_1.XmlUtils.getChildrenWithTag(char_node, "char");
                    this._parseState = FNTParserState.PARSE_IMAGE;
                    var info_node = XmlUtils_1.XmlUtils.getChildrenWithTag(this._doc, "info")[0];
                    var common_node = XmlUtils_1.XmlUtils.getChildrenWithTag(this._doc, "common")[0];
                    var font_name = XmlUtils_1.XmlUtils.readAttributeValue(info_node, "face");
                    this._font = AssetLibrary_1.AssetLibrary.getAsset(font_name);
                    if (this._font == undefined) {
                        this._font = new Font_1.Font();
                        this._font.name = font_name;
                    }
                    var bold = XmlUtils_1.XmlUtils.readAttributeValue(info_node, "bold");
                    if (bold != "0")
                        font_name += "_bold";
                    var italic = XmlUtils_1.XmlUtils.readAttributeValue(info_node, "italic");
                    if (italic != "0")
                        font_name += "_italic";
                    this._bitmapFontTable = this._font.get_font_table(font_name, BitmapFontTable_1.BitmapFontTable.assetType);
                    var size = XmlUtils_1.XmlUtils.readAttributeValue(info_node, "size");
                    this._bitmapFontTable._init_size = parseInt(size);
                }
                catch (Error) {
                    return ParserBase_1.ParserBase.PARSING_DONE;
                }
                break;
            case FNTParserState.PARSE_IMAGE:
                if (this._imagePath) {
                    this._pAddDependency(this._imagePath, new URLRequest_1.URLRequest(this._imagePath));
                    this._pPauseAndRetrieveDependencies();
                }
                else {
                    return ParserBase_1.ParserBase.PARSING_DONE;
                }
                break;
            case FNTParserState.PARSE_CHARS:
                var element;
                var x, y, width, height, xoff, yoff, xadv, page, chnl;
                var id;
                var len = this._chars.length;
                for (var i = 0; i < len; i++) {
                    element = this._chars[i];
                    x = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "x"));
                    y = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "y"));
                    width = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "width"));
                    height = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "height"));
                    xoff = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "xoffset"));
                    yoff = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "yoffset"));
                    xadv = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "xadvance"));
                    page = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "page"));
                    chnl = parseInt(XmlUtils_1.XmlUtils.readAttributeValue(element, "chnl"));
                    id = XmlUtils_1.XmlUtils.readAttributeValue(element, "id");
                    this._bitmapFontTable.setChar(id, x, y, width, height, xoff, yoff, xadv, page, chnl);
                }
                this._pFinalizeAsset(this._font, this._font.name);
                this._parseState = FNTParserState.PARSE_COMPLETE;
                break;
            case FNTParserState.PARSE_COMPLETE:
                return ParserBase_1.ParserBase.PARSING_DONE;
        }
        return ParserBase_1.ParserBase.MORE_TO_PARSE;
    };
    return FNTParser;
}(ParserBase_1.ParserBase));
exports.FNTParser = FNTParser;
var FNTParserState = (function () {
    function FNTParserState() {
    }
    FNTParserState.PARSE_XML = 0;
    FNTParserState.PARSE_IMAGE = 1;
    FNTParserState.PARSE_CHARS = 2;
    FNTParserState.PARSE_COMPLETE = 3;
    return FNTParserState;
}());
