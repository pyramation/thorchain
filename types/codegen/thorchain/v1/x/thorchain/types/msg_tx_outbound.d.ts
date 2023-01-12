import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
export interface MsgOutboundTx {
    tx?: ObservedTx;
    inTxId: string;
    signer: Uint8Array;
}
export interface MsgOutboundTxSDKType {
    tx?: ObservedTxSDKType;
    in_tx_id: string;
    signer: Uint8Array;
}
export declare const MsgOutboundTx: {
    encode(message: MsgOutboundTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOutboundTx;
    fromJSON(object: any): MsgOutboundTx;
    toJSON(message: MsgOutboundTx): unknown;
    fromPartial(object: Partial<MsgOutboundTx>): MsgOutboundTx;
};
