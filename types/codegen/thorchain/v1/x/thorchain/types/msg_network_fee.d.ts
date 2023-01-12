import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgNetworkFee {
    blockHeight: Long;
    chain: string;
    transactionSize: Long;
    transactionFeeRate: Long;
    signer: Uint8Array;
}
export interface MsgNetworkFeeSDKType {
    block_height: Long;
    chain: string;
    transaction_size: Long;
    transaction_fee_rate: Long;
    signer: Uint8Array;
}
export declare const MsgNetworkFee: {
    encode(message: MsgNetworkFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNetworkFee;
    fromJSON(object: any): MsgNetworkFee;
    toJSON(message: MsgNetworkFee): unknown;
    fromPartial(object: Partial<MsgNetworkFee>): MsgNetworkFee;
};
