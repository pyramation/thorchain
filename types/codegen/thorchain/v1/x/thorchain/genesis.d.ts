import { Pool, PoolSDKType } from "./types/type_pool";
import { LiquidityProvider, LiquidityProviderSDKType } from "./types/type_liquidity_provider";
import { ObservedTxVoter, ObservedTxVoterSDKType } from "./types/type_observed_tx";
import { TxOut, TxOutSDKType } from "./types/type_tx_out";
import { NodeAccount, NodeAccountSDKType, BondProviders, BondProvidersSDKType } from "./types/type_node_account";
import { Vault, VaultSDKType } from "./types/type_vault";
import { ReserveContributor, ReserveContributorSDKType } from "./types/type_reserve_contributor";
import { Network, NetworkSDKType } from "./types/type_network";
import { MsgSwap, MsgSwapSDKType } from "./types/msg_swap";
import { NetworkFee, NetworkFeeSDKType } from "./types/type_network_fee";
import { ChainContract, ChainContractSDKType } from "./types/type_chain_contract";
import { THORName, THORNameSDKType } from "./types/type_thorname";
import { ProtocolOwnedLiquidity, ProtocolOwnedLiquiditySDKType } from "./types/type_pol";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface LastChainHeight {
    chain: string;
    height: Long;
}
export interface LastChainHeightSDKType {
    chain: string;
    height: Long;
}
export interface Mimir {
    key: string;
    value: Long;
}
export interface MimirSDKType {
    key: string;
    value: Long;
}
export interface GenesisState {
    pools: Pool[];
    liquidityProviders: LiquidityProvider[];
    observedTxInVoters: ObservedTxVoter[];
    observedTxOutVoters: ObservedTxVoter[];
    txOuts: TxOut[];
    nodeAccounts: NodeAccount[];
    vaults: Vault[];
    reserve: Long;
    lastSignedHeight: Long;
    lastChainHeights: LastChainHeight[];
    reserveContributors: ReserveContributor[];
    network?: Network;
    msgSwaps: MsgSwap[];
    networkFees: NetworkFee[];
    chainContracts: ChainContract[];
    THORNames: THORName[];
    mimirs: Mimir[];
    storeVersion: Long;
    bondProviders: BondProviders[];
    POL?: ProtocolOwnedLiquidity;
}
export interface GenesisStateSDKType {
    pools: PoolSDKType[];
    liquidity_providers: LiquidityProviderSDKType[];
    observed_tx_in_voters: ObservedTxVoterSDKType[];
    observed_tx_out_voters: ObservedTxVoterSDKType[];
    tx_outs: TxOutSDKType[];
    node_accounts: NodeAccountSDKType[];
    vaults: VaultSDKType[];
    reserve: Long;
    last_signed_height: Long;
    last_chain_heights: LastChainHeightSDKType[];
    reserve_contributors: ReserveContributorSDKType[];
    network?: NetworkSDKType;
    msg_swaps: MsgSwapSDKType[];
    network_fees: NetworkFeeSDKType[];
    chain_contracts: ChainContractSDKType[];
    THORNames: THORNameSDKType[];
    mimirs: MimirSDKType[];
    store_version: Long;
    bond_providers: BondProvidersSDKType[];
    POL?: ProtocolOwnedLiquiditySDKType;
}
export declare const LastChainHeight: {
    encode(message: LastChainHeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastChainHeight;
    fromJSON(object: any): LastChainHeight;
    toJSON(message: LastChainHeight): unknown;
    fromPartial(object: Partial<LastChainHeight>): LastChainHeight;
};
export declare const Mimir: {
    encode(message: Mimir, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Mimir;
    fromJSON(object: any): Mimir;
    toJSON(message: Mimir): unknown;
    fromPartial(object: Partial<Mimir>): Mimir;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
