import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
export interface MsgConsolidate {
    observedTx?: ObservedTx;
    signer: Uint8Array;
}
export interface MsgConsolidateSDKType {
    observed_tx?: ObservedTxSDKType;
    signer: Uint8Array;
}
export declare const MsgConsolidate: {
    encode(message: MsgConsolidate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConsolidate;
    fromJSON(object: any): MsgConsolidate;
    toJSON(message: MsgConsolidate): unknown;
    fromPartial(object: Partial<MsgConsolidate>): MsgConsolidate;
};
