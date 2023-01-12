import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Jail {
    nodeAddress: Uint8Array;
    releaseHeight: Long;
    reason: string;
}
export interface JailSDKType {
    node_address: Uint8Array;
    release_height: Long;
    reason: string;
}
export declare const Jail: {
    encode(message: Jail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Jail;
    fromJSON(object: any): Jail;
    toJSON(message: Jail): unknown;
    fromPartial(object: Partial<Jail>): Jail;
};
