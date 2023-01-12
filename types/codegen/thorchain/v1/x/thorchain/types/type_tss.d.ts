import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TssVoter {
    id: string;
    poolPubKey: string;
    pubKeys: string[];
    blockHeight: Long;
    chains: string[];
    signers: string[];
    majorityConsensusBlockHeight: Long;
}
export interface TssVoterSDKType {
    id: string;
    pool_pub_key: string;
    pub_keys: string[];
    block_height: Long;
    chains: string[];
    signers: string[];
    majority_consensus_block_height: Long;
}
export declare const TssVoter: {
    encode(message: TssVoter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TssVoter;
    fromJSON(object: any): TssVoter;
    toJSON(message: TssVoter): unknown;
    fromPartial(object: Partial<TssVoter>): TssVoter;
};
