import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NodeMimir {
    key: string;
    value: Long;
    signer: Uint8Array;
}
export interface NodeMimirSDKType {
    key: string;
    value: Long;
    signer: Uint8Array;
}
export interface NodeMimirs {
    mimirs: NodeMimir[];
}
export interface NodeMimirsSDKType {
    mimirs: NodeMimirSDKType[];
}
export declare const NodeMimir: {
    encode(message: NodeMimir, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeMimir;
    fromJSON(object: any): NodeMimir;
    toJSON(message: NodeMimir): unknown;
    fromPartial(object: Partial<NodeMimir>): NodeMimir;
};
export declare const NodeMimirs: {
    encode(message: NodeMimirs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeMimirs;
    fromJSON(object: any): NodeMimirs;
    toJSON(message: NodeMimirs): unknown;
    fromPartial(object: Partial<NodeMimirs>): NodeMimirs;
};
