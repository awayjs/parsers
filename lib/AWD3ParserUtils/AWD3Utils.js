"use strict";
var AWD3Utils = (function () {
    function AWD3Utils() {
    }
    AWD3Utils.BLOCKSTATE_FINALIZE = 0;
    AWD3Utils.BLOCKSTATE_INVALID = 1;
    AWD3Utils.BLOCKSTATE_LOAD_DEPENDENICES = 2;
    AWD3Utils.BLOCKSTATE_NO_ASSET = 3;
    AWD3Utils.COMPRESSIONMODE_LZMA = "lzma";
    AWD3Utils.UNCOMPRESSED = 0;
    AWD3Utils.DEFLATE = 1;
    AWD3Utils.LZMA = 2;
    AWD3Utils.INT8 = 1;
    AWD3Utils.INT16 = 2;
    AWD3Utils.INT32 = 3;
    AWD3Utils.UINT8 = 4;
    AWD3Utils.UINT16 = 5;
    AWD3Utils.UINT32 = 6;
    AWD3Utils.FLOAT32 = 7;
    AWD3Utils.FLOAT64 = 8;
    AWD3Utils.BOOL = 21;
    AWD3Utils.COLOR = 22;
    AWD3Utils.BADDR = 23;
    AWD3Utils.AWDSTRING = 31;
    AWD3Utils.AWDBYTEARRAY = 32;
    AWD3Utils.VECTOR2x1 = 41;
    AWD3Utils.VECTOR3x1 = 42;
    AWD3Utils.VECTOR4x1 = 43;
    AWD3Utils.MTX3x2 = 44;
    AWD3Utils.MTX3x3 = 45;
    AWD3Utils.MTX4x3 = 46;
    AWD3Utils.MTX4x4 = 47;
    return AWD3Utils;
}());
exports.AWD3Utils = AWD3Utils;
