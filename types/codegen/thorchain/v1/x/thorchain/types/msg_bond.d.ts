import { Tx, TxSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgBond {
    txIn?: Tx;
    nodeAddress: Uint8Array;
    bond: string;
    bondAddress: string;
    signer: Uint8Array;
    bondProviderAddress: Uint8Array;
    operatorFee: Long;
}
export interface MsgBondSDKType {
    tx_in?: TxSDKType;
    node_address: Uint8Array;
    bond: string;
    bond_address: string;
    signer: Uint8Array;
    bond_provider_address: Uint8Array;
    operator_fee: Long;
}
export declare const MsgBond: {
    encode(message: MsgBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBond;
    fromJSON(object: any): MsgBond;
    toJSON(message: MsgBond): unknown;
    fromPartial(object: Partial<MsgBond>): MsgBond;
};
