import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
export interface MsgObservedTxIn {
    txs: ObservedTx[];
    signer: Uint8Array;
}
export interface MsgObservedTxInSDKType {
    txs: ObservedTxSDKType[];
    signer: Uint8Array;
}
export declare const MsgObservedTxIn: {
    encode(message: MsgObservedTxIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgObservedTxIn;
    fromJSON(object: any): MsgObservedTxIn;
    toJSON(message: MsgObservedTxIn): unknown;
    fromPartial(object: Partial<MsgObservedTxIn>): MsgObservedTxIn;
};
