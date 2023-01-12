import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
export interface MsgNoOp {
    observedTx?: ObservedTx;
    signer: Uint8Array;
    action: string;
}
export interface MsgNoOpSDKType {
    observed_tx?: ObservedTxSDKType;
    signer: Uint8Array;
    action: string;
}
export declare const MsgNoOp: {
    encode(message: MsgNoOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNoOp;
    fromJSON(object: any): MsgNoOp;
    toJSON(message: MsgNoOp): unknown;
    fromPartial(object: Partial<MsgNoOp>): MsgNoOp;
};
