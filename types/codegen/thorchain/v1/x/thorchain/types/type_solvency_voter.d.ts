import { Coin, CoinSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SolvencyVoter {
    id: string;
    chain: string;
    pubKey: string;
    coins: Coin[];
    height: Long;
    consensusBlockHeight: Long;
    signers: string[];
}
export interface SolvencyVoterSDKType {
    id: string;
    chain: string;
    pub_key: string;
    coins: CoinSDKType[];
    height: Long;
    consensus_block_height: Long;
    signers: string[];
}
export declare const SolvencyVoter: {
    encode(message: SolvencyVoter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SolvencyVoter;
    fromJSON(object: any): SolvencyVoter;
    toJSON(message: SolvencyVoter): unknown;
    fromPartial(object: Partial<SolvencyVoter>): SolvencyVoter;
};
