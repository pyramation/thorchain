import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
export interface MsgRefundTx {
    tx?: ObservedTx;
    inTxId: string;
    signer: Uint8Array;
}
export interface MsgRefundTxSDKType {
    tx?: ObservedTxSDKType;
    in_tx_id: string;
    signer: Uint8Array;
}
export declare const MsgRefundTx: {
    encode(message: MsgRefundTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundTx;
    fromJSON(object: any): MsgRefundTx;
    toJSON(message: MsgRefundTx): unknown;
    fromPartial(object: Partial<MsgRefundTx>): MsgRefundTx;
};
