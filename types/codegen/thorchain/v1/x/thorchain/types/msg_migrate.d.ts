import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgMigrate {
    tx?: ObservedTx;
    blockHeight: Long;
    signer: Uint8Array;
}
export interface MsgMigrateSDKType {
    tx?: ObservedTxSDKType;
    block_height: Long;
    signer: Uint8Array;
}
export declare const MsgMigrate: {
    encode(message: MsgMigrate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrate;
    fromJSON(object: any): MsgMigrate;
    toJSON(message: MsgMigrate): unknown;
    fromPartial(object: Partial<MsgMigrate>): MsgMigrate;
};
