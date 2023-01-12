import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ObservedNetworkFeeVoter {
    blockHeight: Long;
    reportBlockHeight: Long;
    chain: string;
    signers: string[];
    feeRate: Long;
}
export interface ObservedNetworkFeeVoterSDKType {
    block_height: Long;
    report_block_height: Long;
    chain: string;
    signers: string[];
    fee_rate: Long;
}
export declare const ObservedNetworkFeeVoter: {
    encode(message: ObservedNetworkFeeVoter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObservedNetworkFeeVoter;
    fromJSON(object: any): ObservedNetworkFeeVoter;
    toJSON(message: ObservedNetworkFeeVoter): unknown;
    fromPartial(object: Partial<ObservedNetworkFeeVoter>): ObservedNetworkFeeVoter;
};
