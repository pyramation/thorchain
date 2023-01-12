import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgMimir {
    key: string;
    value: Long;
    signer: Uint8Array;
}
export interface MsgMimirSDKType {
    key: string;
    value: Long;
    signer: Uint8Array;
}
export declare const MsgMimir: {
    encode(message: MsgMimir, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMimir;
    fromJSON(object: any): MsgMimir;
    toJSON(message: MsgMimir): unknown;
    fromPartial(object: Partial<MsgMimir>): MsgMimir;
};
