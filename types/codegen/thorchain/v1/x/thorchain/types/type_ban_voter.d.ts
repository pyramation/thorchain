import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BanVoter {
    nodeAddress: Uint8Array;
    blockHeight: Long;
    signers: string[];
}
export interface BanVoterSDKType {
    node_address: Uint8Array;
    block_height: Long;
    signers: string[];
}
export declare const BanVoter: {
    encode(message: BanVoter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BanVoter;
    fromJSON(object: any): BanVoter;
    toJSON(message: BanVoter): unknown;
    fromPartial(object: Partial<BanVoter>): BanVoter;
};
