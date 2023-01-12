import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgRagnarok {
    tx?: ObservedTx;
    blockHeight: Long;
    signer: Uint8Array;
}
export interface MsgRagnarokSDKType {
    tx?: ObservedTxSDKType;
    block_height: Long;
    signer: Uint8Array;
}
export declare const MsgRagnarok: {
    encode(message: MsgRagnarok, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRagnarok;
    fromJSON(object: any): MsgRagnarok;
    toJSON(message: MsgRagnarok): unknown;
    fromPartial(object: Partial<MsgRagnarok>): MsgRagnarok;
};
