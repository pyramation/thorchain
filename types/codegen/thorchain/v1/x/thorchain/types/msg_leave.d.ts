import { Tx, TxSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
export interface MsgLeave {
    tx?: Tx;
    nodeAddress: Uint8Array;
    signer: Uint8Array;
}
export interface MsgLeaveSDKType {
    tx?: TxSDKType;
    node_address: Uint8Array;
    signer: Uint8Array;
}
export declare const MsgLeave: {
    encode(message: MsgLeave, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeave;
    fromJSON(object: any): MsgLeave;
    toJSON(message: MsgLeave): unknown;
    fromPartial(object: Partial<MsgLeave>): MsgLeave;
};
