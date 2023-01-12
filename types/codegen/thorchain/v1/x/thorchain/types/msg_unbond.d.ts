import { Tx, TxSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
export interface MsgUnBond {
    txIn?: Tx;
    nodeAddress: Uint8Array;
    bondAddress: string;
    amount: string;
    signer: Uint8Array;
    bondProviderAddress: Uint8Array;
}
export interface MsgUnBondSDKType {
    tx_in?: TxSDKType;
    node_address: Uint8Array;
    bond_address: string;
    amount: string;
    signer: Uint8Array;
    bond_provider_address: Uint8Array;
}
export declare const MsgUnBond: {
    encode(message: MsgUnBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnBond;
    fromJSON(object: any): MsgUnBond;
    toJSON(message: MsgUnBond): unknown;
    fromPartial(object: Partial<MsgUnBond>): MsgUnBond;
};
