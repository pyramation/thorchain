import { Asset, AssetSDKType, Coin, CoinSDKType, Tx, TxSDKType, Fee, FeeSDKType } from "../../../common/common";
import { PoolStatus } from "./type_pool";
import { ReserveContributor, ReserveContributorSDKType } from "./type_reserve_contributor";
import { TxOutItem, TxOutItemSDKType } from "./type_tx_out";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../../helpers";
export declare enum PendingLiquidityType {
    add = 0,
    withdraw = 1,
    UNRECOGNIZED = -1
}
export declare const PendingLiquidityTypeSDKType: typeof PendingLiquidityType;
export declare function pendingLiquidityTypeFromJSON(object: any): PendingLiquidityType;
export declare function pendingLiquidityTypeToJSON(object: PendingLiquidityType): string;
export declare enum BondType {
    bond_paid = 0,
    bond_returned = 1,
    bond_reward = 2,
    bond_cost = 3,
    UNRECOGNIZED = -1
}
export declare const BondTypeSDKType: typeof BondType;
export declare function bondTypeFromJSON(object: any): BondType;
export declare function bondTypeToJSON(object: BondType): string;
export declare enum MintBurnSupplyType {
    mint = 0,
    burn = 1,
    UNRECOGNIZED = -1
}
export declare const MintBurnSupplyTypeSDKType: typeof MintBurnSupplyType;
export declare function mintBurnSupplyTypeFromJSON(object: any): MintBurnSupplyType;
export declare function mintBurnSupplyTypeToJSON(object: MintBurnSupplyType): string;
export interface PoolMod {
    asset?: Asset;
    runeAmt: string;
    runeAdd: boolean;
    assetAmt: string;
    assetAdd: boolean;
}
export interface PoolModSDKType {
    asset?: AssetSDKType;
    rune_amt: string;
    rune_add: boolean;
    asset_amt: string;
    asset_add: boolean;
}
export interface EventLimitOrder {
    source?: Coin;
    target?: Coin;
    txId: string;
}
export interface EventLimitOrderSDKType {
    source?: CoinSDKType;
    target?: CoinSDKType;
    tx_id: string;
}
export interface EventSwap {
    pool?: Asset;
    swapTarget: string;
    swapSlip: string;
    liquidityFee: string;
    liquidityFeeInRune: string;
    inTx?: Tx;
    outTxs?: Tx;
    emitAsset?: Coin;
    synthUnits: string;
}
export interface EventSwapSDKType {
    pool?: AssetSDKType;
    swap_target: string;
    swap_slip: string;
    liquidity_fee: string;
    liquidity_fee_in_rune: string;
    in_tx?: TxSDKType;
    out_txs?: TxSDKType;
    emit_asset?: CoinSDKType;
    synth_units: string;
}
export interface EventAddLiquidity {
    pool?: Asset;
    providerUnits: string;
    runeAddress: string;
    runeAmount: string;
    assetAmount: string;
    runeTxId: string;
    assetTxId: string;
    assetAddress: string;
}
export interface EventAddLiquiditySDKType {
    pool?: AssetSDKType;
    provider_units: string;
    rune_address: string;
    rune_amount: string;
    asset_amount: string;
    rune_tx_id: string;
    asset_tx_id: string;
    asset_address: string;
}
export interface EventWithdraw {
    pool?: Asset;
    providerUnits: string;
    basisPoints: Long;
    asymmetry: Uint8Array;
    inTx?: Tx;
    emitAsset: string;
    emitRune: string;
    impLossProtection: string;
}
export interface EventWithdrawSDKType {
    pool?: AssetSDKType;
    provider_units: string;
    basis_points: Long;
    asymmetry: Uint8Array;
    in_tx?: TxSDKType;
    emit_asset: string;
    emit_rune: string;
    imp_loss_protection: string;
}
export interface EventPendingLiquidity {
    pool?: Asset;
    pendingType: PendingLiquidityType;
    runeAddress: string;
    runeAmount: string;
    assetAddress: string;
    assetAmount: string;
    runeTxId: string;
    assetTxId: string;
}
export interface EventPendingLiquiditySDKType {
    pool?: AssetSDKType;
    pending_type: PendingLiquidityType;
    rune_address: string;
    rune_amount: string;
    asset_address: string;
    asset_amount: string;
    rune_tx_id: string;
    asset_tx_id: string;
}
export interface EventDonate {
    pool?: Asset;
    inTx?: Tx;
}
export interface EventDonateSDKType {
    pool?: AssetSDKType;
    in_tx?: TxSDKType;
}
export interface EventPool {
    pool?: Asset;
    Status: PoolStatus;
}
export interface EventPoolSDKType {
    pool?: AssetSDKType;
    Status: PoolStatus;
}
export interface PoolAmt {
    asset?: Asset;
    amount: Long;
}
export interface PoolAmtSDKType {
    asset?: AssetSDKType;
    amount: Long;
}
export interface EventRewards {
    bondReward: string;
    poolRewards: PoolAmt[];
}
export interface EventRewardsSDKType {
    bond_reward: string;
    pool_rewards: PoolAmtSDKType[];
}
export interface EventRefund {
    code: number;
    reason: string;
    inTx?: Tx;
    fee?: Fee;
}
export interface EventRefundSDKType {
    code: number;
    reason: string;
    in_tx?: TxSDKType;
    fee?: FeeSDKType;
}
export interface EventBond {
    amount: string;
    bondType: BondType;
    txIn?: Tx;
}
export interface EventBondSDKType {
    amount: string;
    bond_type: BondType;
    tx_in?: TxSDKType;
}
export interface GasPool {
    asset?: Asset;
    runeAmt: string;
    assetAmt: string;
    count: Long;
}
export interface GasPoolSDKType {
    asset?: AssetSDKType;
    rune_amt: string;
    asset_amt: string;
    count: Long;
}
export interface EventGas {
    pools: GasPool[];
}
export interface EventGasSDKType {
    pools: GasPoolSDKType[];
}
export interface EventReserve {
    reserveContributor?: ReserveContributor;
    inTx?: Tx;
}
export interface EventReserveSDKType {
    reserve_contributor?: ReserveContributorSDKType;
    in_tx?: TxSDKType;
}
export interface EventScheduledOutbound {
    outTx?: TxOutItem;
}
export interface EventScheduledOutboundSDKType {
    out_tx?: TxOutItemSDKType;
}
export interface EventSecurity {
    msg: string;
    tx?: Tx;
}
export interface EventSecuritySDKType {
    msg: string;
    tx?: TxSDKType;
}
export interface EventSlash {
    pool?: Asset;
    slashAmount: PoolAmt[];
}
export interface EventSlashSDKType {
    pool?: AssetSDKType;
    slash_amount: PoolAmtSDKType[];
}
export interface EventErrata {
    txId: string;
    pools: PoolMod[];
}
export interface EventErrataSDKType {
    tx_id: string;
    pools: PoolModSDKType[];
}
export interface EventFee {
    txId: string;
    fee?: Fee;
    synthUnits: string;
}
export interface EventFeeSDKType {
    tx_id: string;
    fee?: FeeSDKType;
    synth_units: string;
}
export interface EventOutbound {
    inTxId: string;
    tx?: Tx;
}
export interface EventOutboundSDKType {
    in_tx_id: string;
    tx?: TxSDKType;
}
export interface EventTssKeygenMetric {
    pubKey: string;
    medianDurationMs: Long;
}
export interface EventTssKeygenMetricSDKType {
    pub_key: string;
    median_duration_ms: Long;
}
export interface EventTssKeysignMetric {
    txId: string;
    medianDurationMs: Long;
}
export interface EventTssKeysignMetricSDKType {
    tx_id: string;
    median_duration_ms: Long;
}
export interface EventSlashPoint {
    nodeAddress: Uint8Array;
    slashPoints: Long;
    reason: string;
}
export interface EventSlashPointSDKType {
    node_address: Uint8Array;
    slash_points: Long;
    reason: string;
}
export interface EventPoolBalanceChanged {
    poolChange?: PoolMod;
    reason: string;
}
export interface EventPoolBalanceChangedSDKType {
    pool_change?: PoolModSDKType;
    reason: string;
}
export interface EventSwitch {
    toAddress: Uint8Array;
    fromAddress: string;
    burn?: Coin;
    txId: string;
}
export interface EventSwitchSDKType {
    to_address: Uint8Array;
    from_address: string;
    burn?: CoinSDKType;
    tx_id: string;
}
export interface EventSwitchV87 {
    toAddress: Uint8Array;
    fromAddress: string;
    burn?: Coin;
    txId: string;
    mint: string;
}
export interface EventSwitchV87SDKType {
    to_address: Uint8Array;
    from_address: string;
    burn?: CoinSDKType;
    tx_id: string;
    mint: string;
}
export interface EventMintBurn {
    supply: MintBurnSupplyType;
    denom: string;
    amount: string;
    reason: string;
}
export interface EventMintBurnSDKType {
    supply: MintBurnSupplyType;
    denom: string;
    amount: string;
    reason: string;
}
export interface EventTHORName {
    name: string;
    chain: string;
    address: string;
    registrationFee: string;
    fundAmt: string;
    expire: Long;
    owner: Uint8Array;
}
export interface EventTHORNameSDKType {
    name: string;
    chain: string;
    address: string;
    registration_fee: string;
    fund_amt: string;
    expire: Long;
    owner: Uint8Array;
}
export interface EventSetMimir {
    key: string;
    value: string;
}
export interface EventSetMimirSDKType {
    key: string;
    value: string;
}
export interface EventSetNodeMimir {
    key: string;
    value: string;
    address: string;
}
export interface EventSetNodeMimirSDKType {
    key: string;
    value: string;
    address: string;
}
export declare const PoolMod: {
    encode(message: PoolMod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolMod;
    fromJSON(object: any): PoolMod;
    toJSON(message: PoolMod): unknown;
    fromPartial(object: Partial<PoolMod>): PoolMod;
};
export declare const EventLimitOrder: {
    encode(message: EventLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLimitOrder;
    fromJSON(object: any): EventLimitOrder;
    toJSON(message: EventLimitOrder): unknown;
    fromPartial(object: Partial<EventLimitOrder>): EventLimitOrder;
};
export declare const EventSwap: {
    encode(message: EventSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSwap;
    fromJSON(object: any): EventSwap;
    toJSON(message: EventSwap): unknown;
    fromPartial(object: Partial<EventSwap>): EventSwap;
};
export declare const EventAddLiquidity: {
    encode(message: EventAddLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAddLiquidity;
    fromJSON(object: any): EventAddLiquidity;
    toJSON(message: EventAddLiquidity): unknown;
    fromPartial(object: Partial<EventAddLiquidity>): EventAddLiquidity;
};
export declare const EventWithdraw: {
    encode(message: EventWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw;
    fromJSON(object: any): EventWithdraw;
    toJSON(message: EventWithdraw): unknown;
    fromPartial(object: Partial<EventWithdraw>): EventWithdraw;
};
export declare const EventPendingLiquidity: {
    encode(message: EventPendingLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPendingLiquidity;
    fromJSON(object: any): EventPendingLiquidity;
    toJSON(message: EventPendingLiquidity): unknown;
    fromPartial(object: Partial<EventPendingLiquidity>): EventPendingLiquidity;
};
export declare const EventDonate: {
    encode(message: EventDonate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDonate;
    fromJSON(object: any): EventDonate;
    toJSON(message: EventDonate): unknown;
    fromPartial(object: Partial<EventDonate>): EventDonate;
};
export declare const EventPool: {
    encode(message: EventPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPool;
    fromJSON(object: any): EventPool;
    toJSON(message: EventPool): unknown;
    fromPartial(object: Partial<EventPool>): EventPool;
};
export declare const PoolAmt: {
    encode(message: PoolAmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolAmt;
    fromJSON(object: any): PoolAmt;
    toJSON(message: PoolAmt): unknown;
    fromPartial(object: Partial<PoolAmt>): PoolAmt;
};
export declare const EventRewards: {
    encode(message: EventRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRewards;
    fromJSON(object: any): EventRewards;
    toJSON(message: EventRewards): unknown;
    fromPartial(object: Partial<EventRewards>): EventRewards;
};
export declare const EventRefund: {
    encode(message: EventRefund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRefund;
    fromJSON(object: any): EventRefund;
    toJSON(message: EventRefund): unknown;
    fromPartial(object: Partial<EventRefund>): EventRefund;
};
export declare const EventBond: {
    encode(message: EventBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBond;
    fromJSON(object: any): EventBond;
    toJSON(message: EventBond): unknown;
    fromPartial(object: Partial<EventBond>): EventBond;
};
export declare const GasPool: {
    encode(message: GasPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasPool;
    fromJSON(object: any): GasPool;
    toJSON(message: GasPool): unknown;
    fromPartial(object: Partial<GasPool>): GasPool;
};
export declare const EventGas: {
    encode(message: EventGas, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventGas;
    fromJSON(object: any): EventGas;
    toJSON(message: EventGas): unknown;
    fromPartial(object: Partial<EventGas>): EventGas;
};
export declare const EventReserve: {
    encode(message: EventReserve, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventReserve;
    fromJSON(object: any): EventReserve;
    toJSON(message: EventReserve): unknown;
    fromPartial(object: Partial<EventReserve>): EventReserve;
};
export declare const EventScheduledOutbound: {
    encode(message: EventScheduledOutbound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventScheduledOutbound;
    fromJSON(object: any): EventScheduledOutbound;
    toJSON(message: EventScheduledOutbound): unknown;
    fromPartial(object: Partial<EventScheduledOutbound>): EventScheduledOutbound;
};
export declare const EventSecurity: {
    encode(message: EventSecurity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSecurity;
    fromJSON(object: any): EventSecurity;
    toJSON(message: EventSecurity): unknown;
    fromPartial(object: Partial<EventSecurity>): EventSecurity;
};
export declare const EventSlash: {
    encode(message: EventSlash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSlash;
    fromJSON(object: any): EventSlash;
    toJSON(message: EventSlash): unknown;
    fromPartial(object: Partial<EventSlash>): EventSlash;
};
export declare const EventErrata: {
    encode(message: EventErrata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventErrata;
    fromJSON(object: any): EventErrata;
    toJSON(message: EventErrata): unknown;
    fromPartial(object: Partial<EventErrata>): EventErrata;
};
export declare const EventFee: {
    encode(message: EventFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFee;
    fromJSON(object: any): EventFee;
    toJSON(message: EventFee): unknown;
    fromPartial(object: Partial<EventFee>): EventFee;
};
export declare const EventOutbound: {
    encode(message: EventOutbound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventOutbound;
    fromJSON(object: any): EventOutbound;
    toJSON(message: EventOutbound): unknown;
    fromPartial(object: Partial<EventOutbound>): EventOutbound;
};
export declare const EventTssKeygenMetric: {
    encode(message: EventTssKeygenMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTssKeygenMetric;
    fromJSON(object: any): EventTssKeygenMetric;
    toJSON(message: EventTssKeygenMetric): unknown;
    fromPartial(object: Partial<EventTssKeygenMetric>): EventTssKeygenMetric;
};
export declare const EventTssKeysignMetric: {
    encode(message: EventTssKeysignMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTssKeysignMetric;
    fromJSON(object: any): EventTssKeysignMetric;
    toJSON(message: EventTssKeysignMetric): unknown;
    fromPartial(object: Partial<EventTssKeysignMetric>): EventTssKeysignMetric;
};
export declare const EventSlashPoint: {
    encode(message: EventSlashPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSlashPoint;
    fromJSON(object: any): EventSlashPoint;
    toJSON(message: EventSlashPoint): unknown;
    fromPartial(object: Partial<EventSlashPoint>): EventSlashPoint;
};
export declare const EventPoolBalanceChanged: {
    encode(message: EventPoolBalanceChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolBalanceChanged;
    fromJSON(object: any): EventPoolBalanceChanged;
    toJSON(message: EventPoolBalanceChanged): unknown;
    fromPartial(object: Partial<EventPoolBalanceChanged>): EventPoolBalanceChanged;
};
export declare const EventSwitch: {
    encode(message: EventSwitch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSwitch;
    fromJSON(object: any): EventSwitch;
    toJSON(message: EventSwitch): unknown;
    fromPartial(object: Partial<EventSwitch>): EventSwitch;
};
export declare const EventSwitchV87: {
    encode(message: EventSwitchV87, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSwitchV87;
    fromJSON(object: any): EventSwitchV87;
    toJSON(message: EventSwitchV87): unknown;
    fromPartial(object: Partial<EventSwitchV87>): EventSwitchV87;
};
export declare const EventMintBurn: {
    encode(message: EventMintBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMintBurn;
    fromJSON(object: any): EventMintBurn;
    toJSON(message: EventMintBurn): unknown;
    fromPartial(object: Partial<EventMintBurn>): EventMintBurn;
};
export declare const EventTHORName: {
    encode(message: EventTHORName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTHORName;
    fromJSON(object: any): EventTHORName;
    toJSON(message: EventTHORName): unknown;
    fromPartial(object: Partial<EventTHORName>): EventTHORName;
};
export declare const EventSetMimir: {
    encode(message: EventSetMimir, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetMimir;
    fromJSON(object: any): EventSetMimir;
    toJSON(message: EventSetMimir): unknown;
    fromPartial(object: Partial<EventSetMimir>): EventSetMimir;
};
export declare const EventSetNodeMimir: {
    encode(message: EventSetNodeMimir, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetNodeMimir;
    fromJSON(object: any): EventSetNodeMimir;
    toJSON(message: EventSetNodeMimir): unknown;
    fromPartial(object: Partial<EventSetNodeMimir>): EventSetNodeMimir;
};
