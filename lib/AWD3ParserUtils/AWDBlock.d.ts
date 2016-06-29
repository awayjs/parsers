import { ByteArray } from "@awayjs/core/lib/utils/ByteArray";
export declare class AWDBlock {
    id: number;
    name: string;
    type: number;
    data: any;
    dependencies_data: Array<ByteArray>;
    dependencies_urls: Array<string>;
    loaded_dependencies: Array<any>;
    loaded_dependencies_cnt: number;
    len: number;
    geoID: number;
    state: number;
    extras: Object;
    bytes: ByteArray;
    errorMessages: Array<string>;
    uvsForVertexAnimation: Array<Float32Array>;
    constructor(this_id: number, this_type: number);
    dispose(): void;
    addError(errorMsg: string): void;
}
