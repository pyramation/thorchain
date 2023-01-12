import * as _162 from "../thorchain/v1/x/thorchain/types/misc";
import * as _163 from "../thorchain/v1/x/thorchain/types/msg_add_liquidity";
import * as _164 from "../thorchain/v1/x/thorchain/types/msg_ban";
import * as _165 from "../thorchain/v1/x/thorchain/types/msg_bond";
import * as _166 from "../thorchain/v1/x/thorchain/types/msg_consolidate";
import * as _167 from "../thorchain/v1/x/thorchain/types/msg_deposit";
import * as _168 from "../thorchain/v1/x/thorchain/types/msg_donate";
import * as _169 from "../thorchain/v1/x/thorchain/types/msg_errata";
import * as _170 from "../thorchain/v1/x/thorchain/types/msg_leave";
import * as _171 from "../thorchain/v1/x/thorchain/types/msg_manage_thorname";
import * as _172 from "../thorchain/v1/x/thorchain/types/msg_migrate";
import * as _173 from "../thorchain/v1/x/thorchain/types/msg_mimir";
import * as _174 from "../thorchain/v1/x/thorchain/types/msg_network_fee";
import * as _175 from "../thorchain/v1/x/thorchain/types/msg_node_pause_chain";
import * as _176 from "../thorchain/v1/x/thorchain/types/msg_noop";
import * as _177 from "../thorchain/v1/x/thorchain/types/msg_observed_txin";
import * as _178 from "../thorchain/v1/x/thorchain/types/msg_observed_txout";
import * as _179 from "../thorchain/v1/x/thorchain/types/msg_ragnarok";
import * as _180 from "../thorchain/v1/x/thorchain/types/msg_refund";
import * as _181 from "../thorchain/v1/x/thorchain/types/msg_reserve_contributor";
import * as _182 from "../thorchain/v1/x/thorchain/types/msg_send";
import * as _183 from "../thorchain/v1/x/thorchain/types/msg_set_ip_address";
import * as _184 from "../thorchain/v1/x/thorchain/types/msg_set_node_keys";
import * as _185 from "../thorchain/v1/x/thorchain/types/msg_solvency";
import * as _186 from "../thorchain/v1/x/thorchain/types/msg_swap";
import * as _187 from "../thorchain/v1/x/thorchain/types/msg_switch";
import * as _188 from "../thorchain/v1/x/thorchain/types/msg_tss_keysign_fail";
import * as _189 from "../thorchain/v1/x/thorchain/types/msg_tss_pool";
import * as _190 from "../thorchain/v1/x/thorchain/types/msg_tx_outbound";
import * as _191 from "../thorchain/v1/x/thorchain/types/msg_unbond";
import * as _192 from "../thorchain/v1/x/thorchain/types/msg_version";
import * as _193 from "../thorchain/v1/x/thorchain/types/msg_withdraw_liquidity";
import * as _194 from "../thorchain/v1/x/thorchain/types/msg_yggdrasil";
import * as _195 from "../thorchain/v1/x/thorchain/types/type_ban_voter";
import * as _196 from "../thorchain/v1/x/thorchain/types/type_blame";
import * as _197 from "../thorchain/v1/x/thorchain/types/type_chain_contract";
import * as _198 from "../thorchain/v1/x/thorchain/types/type_errata_tx_voter";
import * as _199 from "../thorchain/v1/x/thorchain/types/type_events";
import * as _200 from "../thorchain/v1/x/thorchain/types/type_jail";
import * as _201 from "../thorchain/v1/x/thorchain/types/type_keygen";
import * as _202 from "../thorchain/v1/x/thorchain/types/type_liquidity_provider";
import * as _203 from "../thorchain/v1/x/thorchain/types/type_mimir";
import * as _204 from "../thorchain/v1/x/thorchain/types/type_network_fee";
import * as _205 from "../thorchain/v1/x/thorchain/types/type_network";
import * as _206 from "../thorchain/v1/x/thorchain/types/type_node_account";
import * as _207 from "../thorchain/v1/x/thorchain/types/type_node_pause_chain";
import * as _208 from "../thorchain/v1/x/thorchain/types/type_observed_network_fee";
import * as _209 from "../thorchain/v1/x/thorchain/types/type_observed_tx";
import * as _210 from "../thorchain/v1/x/thorchain/types/type_pol";
import * as _211 from "../thorchain/v1/x/thorchain/types/type_pool";
import * as _212 from "../thorchain/v1/x/thorchain/types/type_ragnarok";
import * as _213 from "../thorchain/v1/x/thorchain/types/type_reserve_contributor";
import * as _214 from "../thorchain/v1/x/thorchain/types/type_solvency_voter";
import * as _215 from "../thorchain/v1/x/thorchain/types/type_thorname";
import * as _216 from "../thorchain/v1/x/thorchain/types/type_tss_keysign";
import * as _217 from "../thorchain/v1/x/thorchain/types/type_tss_metric";
import * as _218 from "../thorchain/v1/x/thorchain/types/type_tss";
import * as _219 from "../thorchain/v1/x/thorchain/types/type_tx_out";
import * as _220 from "../thorchain/v1/x/thorchain/types/type_vault";
export declare const types: {
    vaultTypeFromJSON(object: any): _220.VaultType;
    vaultTypeToJSON(object: _220.VaultType): string;
    vaultStatusFromJSON(object: any): _220.VaultStatus;
    vaultStatusToJSON(object: _220.VaultStatus): string;
    VaultType: typeof _220.VaultType;
    VaultTypeSDKType: typeof _220.VaultType;
    VaultStatus: typeof _220.VaultStatus;
    VaultStatusSDKType: typeof _220.VaultStatus;
    Vault: {
        encode(message: _220.Vault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Vault;
        fromJSON(object: any): _220.Vault;
        toJSON(message: _220.Vault): unknown;
        fromPartial(object: Partial<_220.Vault>): _220.Vault;
    };
    TxOutItem: {
        encode(message: _219.TxOutItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.TxOutItem;
        fromJSON(object: any): _219.TxOutItem;
        toJSON(message: _219.TxOutItem): unknown;
        fromPartial(object: Partial<_219.TxOutItem>): _219.TxOutItem;
    };
    TxOut: {
        encode(message: _219.TxOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.TxOut;
        fromJSON(object: any): _219.TxOut;
        toJSON(message: _219.TxOut): unknown;
        fromPartial(object: Partial<_219.TxOut>): _219.TxOut;
    };
    TssVoter: {
        encode(message: _218.TssVoter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.TssVoter;
        fromJSON(object: any): _218.TssVoter;
        toJSON(message: _218.TssVoter): unknown;
        fromPartial(object: Partial<_218.TssVoter>): _218.TssVoter;
    };
    NodeTssTime: {
        encode(message: _217.NodeTssTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.NodeTssTime;
        fromJSON(object: any): _217.NodeTssTime;
        toJSON(message: _217.NodeTssTime): unknown;
        fromPartial(object: Partial<_217.NodeTssTime>): _217.NodeTssTime;
    };
    TssKeygenMetric: {
        encode(message: _217.TssKeygenMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.TssKeygenMetric;
        fromJSON(object: any): _217.TssKeygenMetric;
        toJSON(message: _217.TssKeygenMetric): unknown;
        fromPartial(object: Partial<_217.TssKeygenMetric>): _217.TssKeygenMetric;
    };
    TssKeysignMetric: {
        encode(message: _217.TssKeysignMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.TssKeysignMetric;
        fromJSON(object: any): _217.TssKeysignMetric;
        toJSON(message: _217.TssKeysignMetric): unknown;
        fromPartial(object: Partial<_217.TssKeysignMetric>): _217.TssKeysignMetric;
    };
    TssKeysignFailVoter: {
        encode(message: _216.TssKeysignFailVoter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.TssKeysignFailVoter;
        fromJSON(object: any): _216.TssKeysignFailVoter;
        toJSON(message: _216.TssKeysignFailVoter): unknown;
        fromPartial(object: Partial<_216.TssKeysignFailVoter>): _216.TssKeysignFailVoter;
    };
    THORNameAlias: {
        encode(message: _215.THORNameAlias, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.THORNameAlias;
        fromJSON(object: any): _215.THORNameAlias;
        toJSON(message: _215.THORNameAlias): unknown;
        fromPartial(object: Partial<_215.THORNameAlias>): _215.THORNameAlias;
    };
    THORName: {
        encode(message: _215.THORName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.THORName;
        fromJSON(object: any): _215.THORName;
        toJSON(message: _215.THORName): unknown;
        fromPartial(object: Partial<_215.THORName>): _215.THORName;
    };
    SolvencyVoter: {
        encode(message: _214.SolvencyVoter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.SolvencyVoter;
        fromJSON(object: any): _214.SolvencyVoter;
        toJSON(message: _214.SolvencyVoter): unknown;
        fromPartial(object: Partial<_214.SolvencyVoter>): _214.SolvencyVoter;
    };
    ReserveContributor: {
        encode(message: _213.ReserveContributor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ReserveContributor;
        fromJSON(object: any): _213.ReserveContributor;
        toJSON(message: _213.ReserveContributor): unknown;
        fromPartial(object: Partial<_213.ReserveContributor>): _213.ReserveContributor;
    };
    RagnarokWithdrawPosition: {
        encode(message: _212.RagnarokWithdrawPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.RagnarokWithdrawPosition;
        fromJSON(object: any): _212.RagnarokWithdrawPosition;
        toJSON(message: _212.RagnarokWithdrawPosition): unknown;
        fromPartial(object: Partial<_212.RagnarokWithdrawPosition>): _212.RagnarokWithdrawPosition;
    };
    poolStatusFromJSON(object: any): _211.PoolStatus;
    poolStatusToJSON(object: _211.PoolStatus): string;
    PoolStatus: typeof _211.PoolStatus;
    PoolStatusSDKType: typeof _211.PoolStatus;
    Pool: {
        encode(message: _211.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.Pool;
        fromJSON(object: any): _211.Pool;
        toJSON(message: _211.Pool): unknown;
        fromPartial(object: Partial<_211.Pool>): _211.Pool;
    };
    ProtocolOwnedLiquidity: {
        encode(message: _210.ProtocolOwnedLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ProtocolOwnedLiquidity;
        fromJSON(object: any): _210.ProtocolOwnedLiquidity;
        toJSON(message: _210.ProtocolOwnedLiquidity): unknown;
        fromPartial(object: Partial<_210.ProtocolOwnedLiquidity>): _210.ProtocolOwnedLiquidity;
    };
    statusFromJSON(object: any): _209.Status;
    statusToJSON(object: _209.Status): string;
    Status: typeof _209.Status;
    StatusSDKType: typeof _209.Status;
    ObservedTx: {
        encode(message: _209.ObservedTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.ObservedTx;
        fromJSON(object: any): _209.ObservedTx;
        toJSON(message: _209.ObservedTx): unknown;
        fromPartial(object: Partial<_209.ObservedTx>): _209.ObservedTx;
    };
    ObservedTxVoter: {
        encode(message: _209.ObservedTxVoter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.ObservedTxVoter;
        fromJSON(object: any): _209.ObservedTxVoter;
        toJSON(message: _209.ObservedTxVoter): unknown;
        fromPartial(object: Partial<_209.ObservedTxVoter>): _209.ObservedTxVoter;
    };
    ObservedNetworkFeeVoter: {
        encode(message: _208.ObservedNetworkFeeVoter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.ObservedNetworkFeeVoter;
        fromJSON(object: any): _208.ObservedNetworkFeeVoter;
        toJSON(message: _208.ObservedNetworkFeeVoter): unknown;
        fromPartial(object: Partial<_208.ObservedNetworkFeeVoter>): _208.ObservedNetworkFeeVoter;
    };
    NodePauseChain: {
        encode(message: _207.NodePauseChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.NodePauseChain;
        fromJSON(object: any): _207.NodePauseChain;
        toJSON(message: _207.NodePauseChain): unknown;
        fromPartial(object: Partial<_207.NodePauseChain>): _207.NodePauseChain;
    };
    nodeStatusFromJSON(object: any): _206.NodeStatus;
    nodeStatusToJSON(object: _206.NodeStatus): string;
    nodeTypeFromJSON(object: any): _206.NodeType;
    nodeTypeToJSON(object: _206.NodeType): string;
    NodeStatus: typeof _206.NodeStatus;
    NodeStatusSDKType: typeof _206.NodeStatus;
    NodeType: typeof _206.NodeType;
    NodeTypeSDKType: typeof _206.NodeType;
    NodeAccount: {
        encode(message: _206.NodeAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.NodeAccount;
        fromJSON(object: any): _206.NodeAccount;
        toJSON(message: _206.NodeAccount): unknown;
        fromPartial(object: Partial<_206.NodeAccount>): _206.NodeAccount;
    };
    BondProvider: {
        encode(message: _206.BondProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.BondProvider;
        fromJSON(object: any): _206.BondProvider;
        toJSON(message: _206.BondProvider): unknown;
        fromPartial(object: Partial<_206.BondProvider>): _206.BondProvider;
    };
    BondProviders: {
        encode(message: _206.BondProviders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.BondProviders;
        fromJSON(object: any): _206.BondProviders;
        toJSON(message: _206.BondProviders): unknown;
        fromPartial(object: Partial<_206.BondProviders>): _206.BondProviders;
    };
    Network: {
        encode(message: _205.Network, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Network;
        fromJSON(object: any): _205.Network;
        toJSON(message: _205.Network): unknown;
        fromPartial(object: Partial<_205.Network>): _205.Network;
    };
    NetworkFee: {
        encode(message: _204.NetworkFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.NetworkFee;
        fromJSON(object: any): _204.NetworkFee;
        toJSON(message: _204.NetworkFee): unknown;
        fromPartial(object: Partial<_204.NetworkFee>): _204.NetworkFee;
    };
    NodeMimir: {
        encode(message: _203.NodeMimir, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.NodeMimir;
        fromJSON(object: any): _203.NodeMimir;
        toJSON(message: _203.NodeMimir): unknown;
        fromPartial(object: Partial<_203.NodeMimir>): _203.NodeMimir;
    };
    NodeMimirs: {
        encode(message: _203.NodeMimirs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.NodeMimirs;
        fromJSON(object: any): _203.NodeMimirs;
        toJSON(message: _203.NodeMimirs): unknown;
        fromPartial(object: Partial<_203.NodeMimirs>): _203.NodeMimirs;
    };
    LiquidityProvider: {
        encode(message: _202.LiquidityProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.LiquidityProvider;
        fromJSON(object: any): _202.LiquidityProvider;
        toJSON(message: _202.LiquidityProvider): unknown;
        fromPartial(object: Partial<_202.LiquidityProvider>): _202.LiquidityProvider;
    };
    keygenTypeFromJSON(object: any): _201.KeygenType;
    keygenTypeToJSON(object: _201.KeygenType): string;
    KeygenType: typeof _201.KeygenType;
    KeygenTypeSDKType: typeof _201.KeygenType;
    Keygen: {
        encode(message: _201.Keygen, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Keygen;
        fromJSON(object: any): _201.Keygen;
        toJSON(message: _201.Keygen): unknown;
        fromPartial(object: Partial<_201.Keygen>): _201.Keygen;
    };
    KeygenBlock: {
        encode(message: _201.KeygenBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.KeygenBlock;
        fromJSON(object: any): _201.KeygenBlock;
        toJSON(message: _201.KeygenBlock): unknown;
        fromPartial(object: Partial<_201.KeygenBlock>): _201.KeygenBlock;
    };
    Jail: {
        encode(message: _200.Jail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Jail;
        fromJSON(object: any): _200.Jail;
        toJSON(message: _200.Jail): unknown;
        fromPartial(object: Partial<_200.Jail>): _200.Jail;
    };
    pendingLiquidityTypeFromJSON(object: any): _199.PendingLiquidityType;
    pendingLiquidityTypeToJSON(object: _199.PendingLiquidityType): string;
    bondTypeFromJSON(object: any): _199.BondType;
    bondTypeToJSON(object: _199.BondType): string;
    mintBurnSupplyTypeFromJSON(object: any): _199.MintBurnSupplyType;
    mintBurnSupplyTypeToJSON(object: _199.MintBurnSupplyType): string;
    PendingLiquidityType: typeof _199.PendingLiquidityType;
    PendingLiquidityTypeSDKType: typeof _199.PendingLiquidityType;
    BondType: typeof _199.BondType;
    BondTypeSDKType: typeof _199.BondType;
    MintBurnSupplyType: typeof _199.MintBurnSupplyType;
    MintBurnSupplyTypeSDKType: typeof _199.MintBurnSupplyType;
    PoolMod: {
        encode(message: _199.PoolMod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.PoolMod;
        fromJSON(object: any): _199.PoolMod;
        toJSON(message: _199.PoolMod): unknown;
        fromPartial(object: Partial<_199.PoolMod>): _199.PoolMod;
    };
    EventLimitOrder: {
        encode(message: _199.EventLimitOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventLimitOrder;
        fromJSON(object: any): _199.EventLimitOrder;
        toJSON(message: _199.EventLimitOrder): unknown;
        fromPartial(object: Partial<_199.EventLimitOrder>): _199.EventLimitOrder;
    };
    EventSwap: {
        encode(message: _199.EventSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventSwap;
        fromJSON(object: any): _199.EventSwap;
        toJSON(message: _199.EventSwap): unknown;
        fromPartial(object: Partial<_199.EventSwap>): _199.EventSwap;
    };
    EventAddLiquidity: {
        encode(message: _199.EventAddLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventAddLiquidity;
        fromJSON(object: any): _199.EventAddLiquidity;
        toJSON(message: _199.EventAddLiquidity): unknown;
        fromPartial(object: Partial<_199.EventAddLiquidity>): _199.EventAddLiquidity;
    };
    EventWithdraw: {
        encode(message: _199.EventWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventWithdraw;
        fromJSON(object: any): _199.EventWithdraw;
        toJSON(message: _199.EventWithdraw): unknown;
        fromPartial(object: Partial<_199.EventWithdraw>): _199.EventWithdraw;
    };
    EventPendingLiquidity: {
        encode(message: _199.EventPendingLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventPendingLiquidity;
        fromJSON(object: any): _199.EventPendingLiquidity;
        toJSON(message: _199.EventPendingLiquidity): unknown;
        fromPartial(object: Partial<_199.EventPendingLiquidity>): _199.EventPendingLiquidity;
    };
    EventDonate: {
        encode(message: _199.EventDonate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventDonate;
        fromJSON(object: any): _199.EventDonate;
        toJSON(message: _199.EventDonate): unknown;
        fromPartial(object: Partial<_199.EventDonate>): _199.EventDonate;
    };
    EventPool: {
        encode(message: _199.EventPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventPool;
        fromJSON(object: any): _199.EventPool;
        toJSON(message: _199.EventPool): unknown;
        fromPartial(object: Partial<_199.EventPool>): _199.EventPool;
    };
    PoolAmt: {
        encode(message: _199.PoolAmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.PoolAmt;
        fromJSON(object: any): _199.PoolAmt;
        toJSON(message: _199.PoolAmt): unknown;
        fromPartial(object: Partial<_199.PoolAmt>): _199.PoolAmt;
    };
    EventRewards: {
        encode(message: _199.EventRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventRewards;
        fromJSON(object: any): _199.EventRewards;
        toJSON(message: _199.EventRewards): unknown;
        fromPartial(object: Partial<_199.EventRewards>): _199.EventRewards;
    };
    EventRefund: {
        encode(message: _199.EventRefund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventRefund;
        fromJSON(object: any): _199.EventRefund;
        toJSON(message: _199.EventRefund): unknown;
        fromPartial(object: Partial<_199.EventRefund>): _199.EventRefund;
    };
    EventBond: {
        encode(message: _199.EventBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventBond;
        fromJSON(object: any): _199.EventBond;
        toJSON(message: _199.EventBond): unknown;
        fromPartial(object: Partial<_199.EventBond>): _199.EventBond;
    };
    GasPool: {
        encode(message: _199.GasPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.GasPool;
        fromJSON(object: any): _199.GasPool;
        toJSON(message: _199.GasPool): unknown;
        fromPartial(object: Partial<_199.GasPool>): _199.GasPool;
    };
    EventGas: {
        encode(message: _199.EventGas, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventGas;
        fromJSON(object: any): _199.EventGas;
        toJSON(message: _199.EventGas): unknown;
        fromPartial(object: Partial<_199.EventGas>): _199.EventGas;
    };
    EventReserve: {
        encode(message: _199.EventReserve, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventReserve;
        fromJSON(object: any): _199.EventReserve;
        toJSON(message: _199.EventReserve): unknown;
        fromPartial(object: Partial<_199.EventReserve>): _199.EventReserve;
    };
    EventScheduledOutbound: {
        encode(message: _199.EventScheduledOutbound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventScheduledOutbound;
        fromJSON(object: any): _199.EventScheduledOutbound;
        toJSON(message: _199.EventScheduledOutbound): unknown;
        fromPartial(object: Partial<_199.EventScheduledOutbound>): _199.EventScheduledOutbound;
    };
    EventSecurity: {
        encode(message: _199.EventSecurity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventSecurity;
        fromJSON(object: any): _199.EventSecurity;
        toJSON(message: _199.EventSecurity): unknown;
        fromPartial(object: Partial<_199.EventSecurity>): _199.EventSecurity;
    };
    EventSlash: {
        encode(message: _199.EventSlash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventSlash;
        fromJSON(object: any): _199.EventSlash;
        toJSON(message: _199.EventSlash): unknown;
        fromPartial(object: Partial<_199.EventSlash>): _199.EventSlash;
    };
    EventErrata: {
        encode(message: _199.EventErrata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventErrata;
        fromJSON(object: any): _199.EventErrata;
        toJSON(message: _199.EventErrata): unknown;
        fromPartial(object: Partial<_199.EventErrata>): _199.EventErrata;
    };
    EventFee: {
        encode(message: _199.EventFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventFee;
        fromJSON(object: any): _199.EventFee;
        toJSON(message: _199.EventFee): unknown;
        fromPartial(object: Partial<_199.EventFee>): _199.EventFee;
    };
    EventOutbound: {
        encode(message: _199.EventOutbound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventOutbound;
        fromJSON(object: any): _199.EventOutbound;
        toJSON(message: _199.EventOutbound): unknown;
        fromPartial(object: Partial<_199.EventOutbound>): _199.EventOutbound;
    };
    EventTssKeygenMetric: {
        encode(message: _199.EventTssKeygenMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventTssKeygenMetric;
        fromJSON(object: any): _199.EventTssKeygenMetric;
        toJSON(message: _199.EventTssKeygenMetric): unknown;
        fromPartial(object: Partial<_199.EventTssKeygenMetric>): _199.EventTssKeygenMetric;
    };
    EventTssKeysignMetric: {
        encode(message: _199.EventTssKeysignMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventTssKeysignMetric;
        fromJSON(object: any): _199.EventTssKeysignMetric;
        toJSON(message: _199.EventTssKeysignMetric): unknown;
        fromPartial(object: Partial<_199.EventTssKeysignMetric>): _199.EventTssKeysignMetric;
    };
    EventSlashPoint: {
        encode(message: _199.EventSlashPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventSlashPoint;
        fromJSON(object: any): _199.EventSlashPoint;
        toJSON(message: _199.EventSlashPoint): unknown;
        fromPartial(object: Partial<_199.EventSlashPoint>): _199.EventSlashPoint;
    };
    EventPoolBalanceChanged: {
        encode(message: _199.EventPoolBalanceChanged, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventPoolBalanceChanged;
        fromJSON(object: any): _199.EventPoolBalanceChanged;
        toJSON(message: _199.EventPoolBalanceChanged): unknown;
        fromPartial(object: Partial<_199.EventPoolBalanceChanged>): _199.EventPoolBalanceChanged;
    };
    EventSwitch: {
        encode(message: _199.EventSwitch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventSwitch;
        fromJSON(object: any): _199.EventSwitch;
        toJSON(message: _199.EventSwitch): unknown;
        fromPartial(object: Partial<_199.EventSwitch>): _199.EventSwitch;
    };
    EventSwitchV87: {
        encode(message: _199.EventSwitchV87, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventSwitchV87;
        fromJSON(object: any): _199.EventSwitchV87;
        toJSON(message: _199.EventSwitchV87): unknown;
        fromPartial(object: Partial<_199.EventSwitchV87>): _199.EventSwitchV87;
    };
    EventMintBurn: {
        encode(message: _199.EventMintBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventMintBurn;
        fromJSON(object: any): _199.EventMintBurn;
        toJSON(message: _199.EventMintBurn): unknown;
        fromPartial(object: Partial<_199.EventMintBurn>): _199.EventMintBurn;
    };
    EventTHORName: {
        encode(message: _199.EventTHORName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventTHORName;
        fromJSON(object: any): _199.EventTHORName;
        toJSON(message: _199.EventTHORName): unknown;
        fromPartial(object: Partial<_199.EventTHORName>): _199.EventTHORName;
    };
    EventSetMimir: {
        encode(message: _199.EventSetMimir, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventSetMimir;
        fromJSON(object: any): _199.EventSetMimir;
        toJSON(message: _199.EventSetMimir): unknown;
        fromPartial(object: Partial<_199.EventSetMimir>): _199.EventSetMimir;
    };
    EventSetNodeMimir: {
        encode(message: _199.EventSetNodeMimir, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EventSetNodeMimir;
        fromJSON(object: any): _199.EventSetNodeMimir;
        toJSON(message: _199.EventSetNodeMimir): unknown;
        fromPartial(object: Partial<_199.EventSetNodeMimir>): _199.EventSetNodeMimir;
    };
    ErrataTxVoter: {
        encode(message: _198.ErrataTxVoter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ErrataTxVoter;
        fromJSON(object: any): _198.ErrataTxVoter;
        toJSON(message: _198.ErrataTxVoter): unknown;
        fromPartial(object: Partial<_198.ErrataTxVoter>): _198.ErrataTxVoter;
    };
    ChainContract: {
        encode(message: _197.ChainContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ChainContract;
        fromJSON(object: any): _197.ChainContract;
        toJSON(message: _197.ChainContract): unknown;
        fromPartial(object: Partial<_197.ChainContract>): _197.ChainContract;
    };
    Node: {
        encode(message: _196.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Node;
        fromJSON(object: any): _196.Node;
        toJSON(message: _196.Node): unknown;
        fromPartial(object: Partial<_196.Node>): _196.Node;
    };
    Blame: {
        encode(message: _196.Blame, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Blame;
        fromJSON(object: any): _196.Blame;
        toJSON(message: _196.Blame): unknown;
        fromPartial(object: Partial<_196.Blame>): _196.Blame;
    };
    BanVoter: {
        encode(message: _195.BanVoter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.BanVoter;
        fromJSON(object: any): _195.BanVoter;
        toJSON(message: _195.BanVoter): unknown;
        fromPartial(object: Partial<_195.BanVoter>): _195.BanVoter;
    };
    MsgYggdrasil: {
        encode(message: _194.MsgYggdrasil, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgYggdrasil;
        fromJSON(object: any): _194.MsgYggdrasil;
        toJSON(message: _194.MsgYggdrasil): unknown;
        fromPartial(object: Partial<_194.MsgYggdrasil>): _194.MsgYggdrasil;
    };
    MsgWithdrawLiquidity: {
        encode(message: _193.MsgWithdrawLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgWithdrawLiquidity;
        fromJSON(object: any): _193.MsgWithdrawLiquidity;
        toJSON(message: _193.MsgWithdrawLiquidity): unknown;
        fromPartial(object: Partial<_193.MsgWithdrawLiquidity>): _193.MsgWithdrawLiquidity;
    };
    MsgSetVersion: {
        encode(message: _192.MsgSetVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgSetVersion;
        fromJSON(object: any): _192.MsgSetVersion;
        toJSON(message: _192.MsgSetVersion): unknown;
        fromPartial(object: Partial<_192.MsgSetVersion>): _192.MsgSetVersion;
    };
    MsgUnBond: {
        encode(message: _191.MsgUnBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgUnBond;
        fromJSON(object: any): _191.MsgUnBond;
        toJSON(message: _191.MsgUnBond): unknown;
        fromPartial(object: Partial<_191.MsgUnBond>): _191.MsgUnBond;
    };
    MsgOutboundTx: {
        encode(message: _190.MsgOutboundTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.MsgOutboundTx;
        fromJSON(object: any): _190.MsgOutboundTx;
        toJSON(message: _190.MsgOutboundTx): unknown;
        fromPartial(object: Partial<_190.MsgOutboundTx>): _190.MsgOutboundTx;
    };
    MsgTssPool: {
        encode(message: _189.MsgTssPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MsgTssPool;
        fromJSON(object: any): _189.MsgTssPool;
        toJSON(message: _189.MsgTssPool): unknown;
        fromPartial(object: Partial<_189.MsgTssPool>): _189.MsgTssPool;
    };
    MsgTssKeysignFail: {
        encode(message: _188.MsgTssKeysignFail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgTssKeysignFail;
        fromJSON(object: any): _188.MsgTssKeysignFail;
        toJSON(message: _188.MsgTssKeysignFail): unknown;
        fromPartial(object: Partial<_188.MsgTssKeysignFail>): _188.MsgTssKeysignFail;
    };
    MsgSwitch: {
        encode(message: _187.MsgSwitch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgSwitch;
        fromJSON(object: any): _187.MsgSwitch;
        toJSON(message: _187.MsgSwitch): unknown;
        fromPartial(object: Partial<_187.MsgSwitch>): _187.MsgSwitch;
    };
    orderTypeFromJSON(object: any): _186.OrderType;
    orderTypeToJSON(object: _186.OrderType): string;
    OrderType: typeof _186.OrderType;
    OrderTypeSDKType: typeof _186.OrderType;
    MsgSwap: {
        encode(message: _186.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MsgSwap;
        fromJSON(object: any): _186.MsgSwap;
        toJSON(message: _186.MsgSwap): unknown;
        fromPartial(object: Partial<_186.MsgSwap>): _186.MsgSwap;
    };
    MsgSolvency: {
        encode(message: _185.MsgSolvency, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgSolvency;
        fromJSON(object: any): _185.MsgSolvency;
        toJSON(message: _185.MsgSolvency): unknown;
        fromPartial(object: Partial<_185.MsgSolvency>): _185.MsgSolvency;
    };
    MsgSetNodeKeys: {
        encode(message: _184.MsgSetNodeKeys, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgSetNodeKeys;
        fromJSON(object: any): _184.MsgSetNodeKeys;
        toJSON(message: _184.MsgSetNodeKeys): unknown;
        fromPartial(object: Partial<_184.MsgSetNodeKeys>): _184.MsgSetNodeKeys;
    };
    MsgSetIPAddress: {
        encode(message: _183.MsgSetIPAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgSetIPAddress;
        fromJSON(object: any): _183.MsgSetIPAddress;
        toJSON(message: _183.MsgSetIPAddress): unknown;
        fromPartial(object: Partial<_183.MsgSetIPAddress>): _183.MsgSetIPAddress;
    };
    MsgSend: {
        encode(message: _182.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgSend;
        fromJSON(object: any): _182.MsgSend;
        toJSON(message: _182.MsgSend): unknown;
        fromPartial(object: Partial<_182.MsgSend>): _182.MsgSend;
    };
    MsgReserveContributor: {
        encode(message: _181.MsgReserveContributor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgReserveContributor;
        fromJSON(object: any): _181.MsgReserveContributor;
        toJSON(message: _181.MsgReserveContributor): unknown;
        fromPartial(object: Partial<_181.MsgReserveContributor>): _181.MsgReserveContributor;
    };
    MsgRefundTx: {
        encode(message: _180.MsgRefundTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgRefundTx;
        fromJSON(object: any): _180.MsgRefundTx;
        toJSON(message: _180.MsgRefundTx): unknown;
        fromPartial(object: Partial<_180.MsgRefundTx>): _180.MsgRefundTx;
    };
    MsgRagnarok: {
        encode(message: _179.MsgRagnarok, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgRagnarok;
        fromJSON(object: any): _179.MsgRagnarok;
        toJSON(message: _179.MsgRagnarok): unknown;
        fromPartial(object: Partial<_179.MsgRagnarok>): _179.MsgRagnarok;
    };
    MsgObservedTxOut: {
        encode(message: _178.MsgObservedTxOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgObservedTxOut;
        fromJSON(object: any): _178.MsgObservedTxOut;
        toJSON(message: _178.MsgObservedTxOut): unknown;
        fromPartial(object: Partial<_178.MsgObservedTxOut>): _178.MsgObservedTxOut;
    };
    MsgObservedTxIn: {
        encode(message: _177.MsgObservedTxIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgObservedTxIn;
        fromJSON(object: any): _177.MsgObservedTxIn;
        toJSON(message: _177.MsgObservedTxIn): unknown;
        fromPartial(object: Partial<_177.MsgObservedTxIn>): _177.MsgObservedTxIn;
    };
    MsgNoOp: {
        encode(message: _176.MsgNoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgNoOp;
        fromJSON(object: any): _176.MsgNoOp;
        toJSON(message: _176.MsgNoOp): unknown;
        fromPartial(object: Partial<_176.MsgNoOp>): _176.MsgNoOp;
    };
    MsgNodePauseChain: {
        encode(message: _175.MsgNodePauseChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgNodePauseChain;
        fromJSON(object: any): _175.MsgNodePauseChain;
        toJSON(message: _175.MsgNodePauseChain): unknown;
        fromPartial(object: Partial<_175.MsgNodePauseChain>): _175.MsgNodePauseChain;
    };
    MsgNetworkFee: {
        encode(message: _174.MsgNetworkFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgNetworkFee;
        fromJSON(object: any): _174.MsgNetworkFee;
        toJSON(message: _174.MsgNetworkFee): unknown;
        fromPartial(object: Partial<_174.MsgNetworkFee>): _174.MsgNetworkFee;
    };
    MsgMimir: {
        encode(message: _173.MsgMimir, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgMimir;
        fromJSON(object: any): _173.MsgMimir;
        toJSON(message: _173.MsgMimir): unknown;
        fromPartial(object: Partial<_173.MsgMimir>): _173.MsgMimir;
    };
    MsgMigrate: {
        encode(message: _172.MsgMigrate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgMigrate;
        fromJSON(object: any): _172.MsgMigrate;
        toJSON(message: _172.MsgMigrate): unknown;
        fromPartial(object: Partial<_172.MsgMigrate>): _172.MsgMigrate;
    };
    MsgManageTHORName: {
        encode(message: _171.MsgManageTHORName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgManageTHORName;
        fromJSON(object: any): _171.MsgManageTHORName;
        toJSON(message: _171.MsgManageTHORName): unknown;
        fromPartial(object: Partial<_171.MsgManageTHORName>): _171.MsgManageTHORName;
    };
    MsgLeave: {
        encode(message: _170.MsgLeave, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgLeave;
        fromJSON(object: any): _170.MsgLeave;
        toJSON(message: _170.MsgLeave): unknown;
        fromPartial(object: Partial<_170.MsgLeave>): _170.MsgLeave;
    };
    MsgErrataTx: {
        encode(message: _169.MsgErrataTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgErrataTx;
        fromJSON(object: any): _169.MsgErrataTx;
        toJSON(message: _169.MsgErrataTx): unknown;
        fromPartial(object: Partial<_169.MsgErrataTx>): _169.MsgErrataTx;
    };
    MsgDonate: {
        encode(message: _168.MsgDonate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgDonate;
        fromJSON(object: any): _168.MsgDonate;
        toJSON(message: _168.MsgDonate): unknown;
        fromPartial(object: Partial<_168.MsgDonate>): _168.MsgDonate;
    };
    MsgDeposit: {
        encode(message: _167.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgDeposit;
        fromJSON(object: any): _167.MsgDeposit;
        toJSON(message: _167.MsgDeposit): unknown;
        fromPartial(object: Partial<_167.MsgDeposit>): _167.MsgDeposit;
    };
    MsgConsolidate: {
        encode(message: _166.MsgConsolidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgConsolidate;
        fromJSON(object: any): _166.MsgConsolidate;
        toJSON(message: _166.MsgConsolidate): unknown;
        fromPartial(object: Partial<_166.MsgConsolidate>): _166.MsgConsolidate;
    };
    MsgBond: {
        encode(message: _165.MsgBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgBond;
        fromJSON(object: any): _165.MsgBond;
        toJSON(message: _165.MsgBond): unknown;
        fromPartial(object: Partial<_165.MsgBond>): _165.MsgBond;
    };
    MsgBan: {
        encode(message: _164.MsgBan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgBan;
        fromJSON(object: any): _164.MsgBan;
        toJSON(message: _164.MsgBan): unknown;
        fromPartial(object: Partial<_164.MsgBan>): _164.MsgBan;
    };
    MsgAddLiquidity: {
        encode(message: _163.MsgAddLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgAddLiquidity;
        fromJSON(object: any): _163.MsgAddLiquidity;
        toJSON(message: _163.MsgAddLiquidity): unknown;
        fromPartial(object: Partial<_163.MsgAddLiquidity>): _163.MsgAddLiquidity;
    };
    ProtoInt64: {
        encode(message: _162.ProtoInt64, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ProtoInt64;
        fromJSON(object: any): _162.ProtoInt64;
        toJSON(message: _162.ProtoInt64): unknown;
        fromPartial(object: Partial<_162.ProtoInt64>): _162.ProtoInt64;
    };
    ProtoUint64: {
        encode(message: _162.ProtoUint64, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ProtoUint64;
        fromJSON(object: any): _162.ProtoUint64;
        toJSON(message: _162.ProtoUint64): unknown;
        fromPartial(object: Partial<_162.ProtoUint64>): _162.ProtoUint64;
    };
    ProtoAccAddresses: {
        encode(message: _162.ProtoAccAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ProtoAccAddresses;
        fromJSON(object: any): _162.ProtoAccAddresses;
        toJSON(message: _162.ProtoAccAddresses): unknown;
        fromPartial(object: Partial<_162.ProtoAccAddresses>): _162.ProtoAccAddresses;
    };
    ProtoStrings: {
        encode(message: _162.ProtoStrings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ProtoStrings;
        fromJSON(object: any): _162.ProtoStrings;
        toJSON(message: _162.ProtoStrings): unknown;
        fromPartial(object: Partial<_162.ProtoStrings>): _162.ProtoStrings;
    };
    ProtoBools: {
        encode(message: _162.ProtoBools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ProtoBools;
        fromJSON(object: any): _162.ProtoBools;
        toJSON(message: _162.ProtoBools): unknown;
        fromPartial(object: Partial<_162.ProtoBools>): _162.ProtoBools;
    };
};
