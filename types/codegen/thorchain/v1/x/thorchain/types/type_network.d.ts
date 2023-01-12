import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Network {
    bondRewardRune: string;
    totalBondUnits: string;
    burnedBep2Rune: string;
    burnedErc20Rune: string;
    LPIncomeSplit: Long;
    NodeIncomeSplit: Long;
}
export interface NetworkSDKType {
    bond_reward_rune: string;
    total_bond_units: string;
    burned_bep2_rune: string;
    burned_erc20_rune: string;
    LPIncomeSplit: Long;
    NodeIncomeSplit: Long;
}
export declare const Network: {
    encode(message: Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Network;
    fromJSON(object: any): Network;
    toJSON(message: Network): unknown;
    fromPartial(object: Partial<Network>): Network;
};
