import { Tx, TxSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
export interface MsgSwitch {
    tx?: Tx;
    destination: string;
    signer: Uint8Array;
}
export interface MsgSwitchSDKType {
    tx?: TxSDKType;
    destination: string;
    signer: Uint8Array;
}
export declare const MsgSwitch: {
    encode(message: MsgSwitch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwitch;
    fromJSON(object: any): MsgSwitch;
    toJSON(message: MsgSwitch): unknown;
    fromPartial(object: Partial<MsgSwitch>): MsgSwitch;
};
