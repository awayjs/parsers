"use strict";
var AWD3Utils_1 = require("../AWD3ParserUtils/AWD3Utils");
var AWDBlock = (function () {
    function AWDBlock(this_id, this_type) {
        this.type = this_type;
        this.id = this_id;
        this.state = AWD3Utils_1.AWD3Utils.BLOCKSTATE_FINALIZE;
        this.dependencies_data = Array();
        this.dependencies_urls = Array();
        if (this_type == 83) {
            this.loaded_dependencies = Array(6);
        }
        this.loaded_dependencies_cnt = 0;
    }
    AWDBlock.prototype.dispose = function () {
        this.id = null;
        this.bytes = null;
        this.errorMessages = null;
        this.uvsForVertexAnimation = null;
    };
    AWDBlock.prototype.addError = function (errorMsg) {
        if (!this.errorMessages)
            this.errorMessages = new Array();
        this.errorMessages.push(errorMsg);
    };
    return AWDBlock;
}());
exports.AWDBlock = AWDBlock;
