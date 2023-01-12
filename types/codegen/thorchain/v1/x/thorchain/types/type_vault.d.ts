import { Coin, CoinSDKType } from "../../../common/common";
import { ChainContract, ChainContractSDKType } from "./type_chain_contract";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum VaultType {
    UnknownVault = 0,
    AsgardVault = 1,
    YggdrasilVault = 2,
    UNRECOGNIZED = -1
}
export declare const VaultTypeSDKType: typeof VaultType;
export declare function vaultTypeFromJSON(object: any): VaultType;
export declare function vaultTypeToJSON(object: VaultType): string;
export declare enum VaultStatus {
    InactiveVault = 0,
    ActiveVault = 1,
    RetiringVault = 2,
    InitVault = 3,
    UNRECOGNIZED = -1
}
export declare const VaultStatusSDKType: typeof VaultStatus;
export declare function vaultStatusFromJSON(object: any): VaultStatus;
export declare function vaultStatusToJSON(object: VaultStatus): string;
export interface Vault {
    blockHeight: Long;
    pubKey: string;
    coins: Coin[];
    type: VaultType;
    status: VaultStatus;
    statusSince: Long;
    membership: string[];
    chains: string[];
    inboundTxCount: Long;
    outboundTxCount: Long;
    pendingTxBlockHeights: Long[];
    routers: ChainContract[];
}
export interface VaultSDKType {
    block_height: Long;
    pub_key: string;
    coins: CoinSDKType[];
    type: VaultType;
    status: VaultStatus;
    status_since: Long;
    membership: string[];
    chains: string[];
    inbound_tx_count: Long;
    outbound_tx_count: Long;
    pending_tx_block_heights: Long[];
    routers: ChainContractSDKType[];
}
export declare const Vault: {
    encode(message: Vault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vault;
    fromJSON(object: any): Vault;
    toJSON(message: Vault): unknown;
    fromPartial(object: Partial<Vault>): Vault;
};
