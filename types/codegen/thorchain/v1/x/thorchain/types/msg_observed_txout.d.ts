import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
export interface MsgObservedTxOut {
    txs: ObservedTx[];
    signer: Uint8Array;
}
export interface MsgObservedTxOutSDKType {
    txs: ObservedTxSDKType[];
    signer: Uint8Array;
}
export declare const MsgObservedTxOut: {
    encode(message: MsgObservedTxOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgObservedTxOut;
    fromJSON(object: any): MsgObservedTxOut;
    toJSON(message: MsgObservedTxOut): unknown;
    fromPartial(object: Partial<MsgObservedTxOut>): MsgObservedTxOut;
};
