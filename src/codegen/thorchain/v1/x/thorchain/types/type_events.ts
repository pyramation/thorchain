import { Asset, AssetSDKType, Coin, CoinSDKType, Tx, TxSDKType, Fee, FeeSDKType } from "../../../common/common";
import { PoolStatus, poolStatusFromJSON, poolStatusToJSON } from "./type_pool";
import { ReserveContributor, ReserveContributorSDKType } from "./type_reserve_contributor";
import { TxOutItem, TxOutItemSDKType } from "./type_tx_out";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export enum PendingLiquidityType {
  add = 0,
  withdraw = 1,
  UNRECOGNIZED = -1,
}
export const PendingLiquidityTypeSDKType = PendingLiquidityType;
export function pendingLiquidityTypeFromJSON(object: any): PendingLiquidityType {
  switch (object) {
    case 0:
    case "add":
      return PendingLiquidityType.add;

    case 1:
    case "withdraw":
      return PendingLiquidityType.withdraw;

    case -1:
    case "UNRECOGNIZED":
    default:
      return PendingLiquidityType.UNRECOGNIZED;
  }
}
export function pendingLiquidityTypeToJSON(object: PendingLiquidityType): string {
  switch (object) {
    case PendingLiquidityType.add:
      return "add";

    case PendingLiquidityType.withdraw:
      return "withdraw";

    case PendingLiquidityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum BondType {
  bond_paid = 0,
  bond_returned = 1,
  bond_reward = 2,
  bond_cost = 3,
  UNRECOGNIZED = -1,
}
export const BondTypeSDKType = BondType;
export function bondTypeFromJSON(object: any): BondType {
  switch (object) {
    case 0:
    case "bond_paid":
      return BondType.bond_paid;

    case 1:
    case "bond_returned":
      return BondType.bond_returned;

    case 2:
    case "bond_reward":
      return BondType.bond_reward;

    case 3:
    case "bond_cost":
      return BondType.bond_cost;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BondType.UNRECOGNIZED;
  }
}
export function bondTypeToJSON(object: BondType): string {
  switch (object) {
    case BondType.bond_paid:
      return "bond_paid";

    case BondType.bond_returned:
      return "bond_returned";

    case BondType.bond_reward:
      return "bond_reward";

    case BondType.bond_cost:
      return "bond_cost";

    case BondType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MintBurnSupplyType {
  mint = 0,
  burn = 1,
  UNRECOGNIZED = -1,
}
export const MintBurnSupplyTypeSDKType = MintBurnSupplyType;
export function mintBurnSupplyTypeFromJSON(object: any): MintBurnSupplyType {
  switch (object) {
    case 0:
    case "mint":
      return MintBurnSupplyType.mint;

    case 1:
    case "burn":
      return MintBurnSupplyType.burn;

    case -1:
    case "UNRECOGNIZED":
    default:
      return MintBurnSupplyType.UNRECOGNIZED;
  }
}
export function mintBurnSupplyTypeToJSON(object: MintBurnSupplyType): string {
  switch (object) {
    case MintBurnSupplyType.mint:
      return "mint";

    case MintBurnSupplyType.burn:
      return "burn";

    case MintBurnSupplyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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

function createBasePoolMod(): PoolMod {
  return {
    asset: undefined,
    runeAmt: "",
    runeAdd: false,
    assetAmt: "",
    assetAdd: false
  };
}

export const PoolMod = {
  encode(message: PoolMod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }

    if (message.runeAmt !== "") {
      writer.uint32(18).string(message.runeAmt);
    }

    if (message.runeAdd === true) {
      writer.uint32(24).bool(message.runeAdd);
    }

    if (message.assetAmt !== "") {
      writer.uint32(34).string(message.assetAmt);
    }

    if (message.assetAdd === true) {
      writer.uint32(40).bool(message.assetAdd);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolMod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.runeAmt = reader.string();
          break;

        case 3:
          message.runeAdd = reader.bool();
          break;

        case 4:
          message.assetAmt = reader.string();
          break;

        case 5:
          message.assetAdd = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolMod {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      runeAmt: isSet(object.runeAmt) ? String(object.runeAmt) : "",
      runeAdd: isSet(object.runeAdd) ? Boolean(object.runeAdd) : false,
      assetAmt: isSet(object.assetAmt) ? String(object.assetAmt) : "",
      assetAdd: isSet(object.assetAdd) ? Boolean(object.assetAdd) : false
    };
  },

  toJSON(message: PoolMod): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.runeAmt !== undefined && (obj.runeAmt = message.runeAmt);
    message.runeAdd !== undefined && (obj.runeAdd = message.runeAdd);
    message.assetAmt !== undefined && (obj.assetAmt = message.assetAmt);
    message.assetAdd !== undefined && (obj.assetAdd = message.assetAdd);
    return obj;
  },

  fromPartial(object: Partial<PoolMod>): PoolMod {
    const message = createBasePoolMod();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.runeAmt = object.runeAmt ?? "";
    message.runeAdd = object.runeAdd ?? false;
    message.assetAmt = object.assetAmt ?? "";
    message.assetAdd = object.assetAdd ?? false;
    return message;
  }

};

function createBaseEventLimitOrder(): EventLimitOrder {
  return {
    source: undefined,
    target: undefined,
    txId: ""
  };
}

export const EventLimitOrder = {
  encode(message: EventLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== undefined) {
      Coin.encode(message.source, writer.uint32(10).fork()).ldelim();
    }

    if (message.target !== undefined) {
      Coin.encode(message.target, writer.uint32(18).fork()).ldelim();
    }

    if (message.txId !== "") {
      writer.uint32(26).string(message.txId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLimitOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.source = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.target = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.txId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventLimitOrder {
    return {
      source: isSet(object.source) ? Coin.fromJSON(object.source) : undefined,
      target: isSet(object.target) ? Coin.fromJSON(object.target) : undefined,
      txId: isSet(object.txId) ? String(object.txId) : ""
    };
  },

  toJSON(message: EventLimitOrder): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source ? Coin.toJSON(message.source) : undefined);
    message.target !== undefined && (obj.target = message.target ? Coin.toJSON(message.target) : undefined);
    message.txId !== undefined && (obj.txId = message.txId);
    return obj;
  },

  fromPartial(object: Partial<EventLimitOrder>): EventLimitOrder {
    const message = createBaseEventLimitOrder();
    message.source = object.source !== undefined && object.source !== null ? Coin.fromPartial(object.source) : undefined;
    message.target = object.target !== undefined && object.target !== null ? Coin.fromPartial(object.target) : undefined;
    message.txId = object.txId ?? "";
    return message;
  }

};

function createBaseEventSwap(): EventSwap {
  return {
    pool: undefined,
    swapTarget: "",
    swapSlip: "",
    liquidityFee: "",
    liquidityFeeInRune: "",
    inTx: undefined,
    outTxs: undefined,
    emitAsset: undefined,
    synthUnits: ""
  };
}

export const EventSwap = {
  encode(message: EventSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Asset.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    if (message.swapTarget !== "") {
      writer.uint32(18).string(message.swapTarget);
    }

    if (message.swapSlip !== "") {
      writer.uint32(26).string(message.swapSlip);
    }

    if (message.liquidityFee !== "") {
      writer.uint32(34).string(message.liquidityFee);
    }

    if (message.liquidityFeeInRune !== "") {
      writer.uint32(42).string(message.liquidityFeeInRune);
    }

    if (message.inTx !== undefined) {
      Tx.encode(message.inTx, writer.uint32(50).fork()).ldelim();
    }

    if (message.outTxs !== undefined) {
      Tx.encode(message.outTxs, writer.uint32(58).fork()).ldelim();
    }

    if (message.emitAsset !== undefined) {
      Coin.encode(message.emitAsset, writer.uint32(66).fork()).ldelim();
    }

    if (message.synthUnits !== "") {
      writer.uint32(74).string(message.synthUnits);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.swapTarget = reader.string();
          break;

        case 3:
          message.swapSlip = reader.string();
          break;

        case 4:
          message.liquidityFee = reader.string();
          break;

        case 5:
          message.liquidityFeeInRune = reader.string();
          break;

        case 6:
          message.inTx = Tx.decode(reader, reader.uint32());
          break;

        case 7:
          message.outTxs = Tx.decode(reader, reader.uint32());
          break;

        case 8:
          message.emitAsset = Coin.decode(reader, reader.uint32());
          break;

        case 9:
          message.synthUnits = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSwap {
    return {
      pool: isSet(object.pool) ? Asset.fromJSON(object.pool) : undefined,
      swapTarget: isSet(object.swapTarget) ? String(object.swapTarget) : "",
      swapSlip: isSet(object.swapSlip) ? String(object.swapSlip) : "",
      liquidityFee: isSet(object.liquidityFee) ? String(object.liquidityFee) : "",
      liquidityFeeInRune: isSet(object.liquidityFeeInRune) ? String(object.liquidityFeeInRune) : "",
      inTx: isSet(object.inTx) ? Tx.fromJSON(object.inTx) : undefined,
      outTxs: isSet(object.outTxs) ? Tx.fromJSON(object.outTxs) : undefined,
      emitAsset: isSet(object.emitAsset) ? Coin.fromJSON(object.emitAsset) : undefined,
      synthUnits: isSet(object.synthUnits) ? String(object.synthUnits) : ""
    };
  },

  toJSON(message: EventSwap): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Asset.toJSON(message.pool) : undefined);
    message.swapTarget !== undefined && (obj.swapTarget = message.swapTarget);
    message.swapSlip !== undefined && (obj.swapSlip = message.swapSlip);
    message.liquidityFee !== undefined && (obj.liquidityFee = message.liquidityFee);
    message.liquidityFeeInRune !== undefined && (obj.liquidityFeeInRune = message.liquidityFeeInRune);
    message.inTx !== undefined && (obj.inTx = message.inTx ? Tx.toJSON(message.inTx) : undefined);
    message.outTxs !== undefined && (obj.outTxs = message.outTxs ? Tx.toJSON(message.outTxs) : undefined);
    message.emitAsset !== undefined && (obj.emitAsset = message.emitAsset ? Coin.toJSON(message.emitAsset) : undefined);
    message.synthUnits !== undefined && (obj.synthUnits = message.synthUnits);
    return obj;
  },

  fromPartial(object: Partial<EventSwap>): EventSwap {
    const message = createBaseEventSwap();
    message.pool = object.pool !== undefined && object.pool !== null ? Asset.fromPartial(object.pool) : undefined;
    message.swapTarget = object.swapTarget ?? "";
    message.swapSlip = object.swapSlip ?? "";
    message.liquidityFee = object.liquidityFee ?? "";
    message.liquidityFeeInRune = object.liquidityFeeInRune ?? "";
    message.inTx = object.inTx !== undefined && object.inTx !== null ? Tx.fromPartial(object.inTx) : undefined;
    message.outTxs = object.outTxs !== undefined && object.outTxs !== null ? Tx.fromPartial(object.outTxs) : undefined;
    message.emitAsset = object.emitAsset !== undefined && object.emitAsset !== null ? Coin.fromPartial(object.emitAsset) : undefined;
    message.synthUnits = object.synthUnits ?? "";
    return message;
  }

};

function createBaseEventAddLiquidity(): EventAddLiquidity {
  return {
    pool: undefined,
    providerUnits: "",
    runeAddress: "",
    runeAmount: "",
    assetAmount: "",
    runeTxId: "",
    assetTxId: "",
    assetAddress: ""
  };
}

export const EventAddLiquidity = {
  encode(message: EventAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Asset.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    if (message.providerUnits !== "") {
      writer.uint32(18).string(message.providerUnits);
    }

    if (message.runeAddress !== "") {
      writer.uint32(26).string(message.runeAddress);
    }

    if (message.runeAmount !== "") {
      writer.uint32(34).string(message.runeAmount);
    }

    if (message.assetAmount !== "") {
      writer.uint32(42).string(message.assetAmount);
    }

    if (message.runeTxId !== "") {
      writer.uint32(50).string(message.runeTxId);
    }

    if (message.assetTxId !== "") {
      writer.uint32(58).string(message.assetTxId);
    }

    if (message.assetAddress !== "") {
      writer.uint32(66).string(message.assetAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddLiquidity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.providerUnits = reader.string();
          break;

        case 3:
          message.runeAddress = reader.string();
          break;

        case 4:
          message.runeAmount = reader.string();
          break;

        case 5:
          message.assetAmount = reader.string();
          break;

        case 6:
          message.runeTxId = reader.string();
          break;

        case 7:
          message.assetTxId = reader.string();
          break;

        case 8:
          message.assetAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventAddLiquidity {
    return {
      pool: isSet(object.pool) ? Asset.fromJSON(object.pool) : undefined,
      providerUnits: isSet(object.providerUnits) ? String(object.providerUnits) : "",
      runeAddress: isSet(object.runeAddress) ? String(object.runeAddress) : "",
      runeAmount: isSet(object.runeAmount) ? String(object.runeAmount) : "",
      assetAmount: isSet(object.assetAmount) ? String(object.assetAmount) : "",
      runeTxId: isSet(object.runeTxId) ? String(object.runeTxId) : "",
      assetTxId: isSet(object.assetTxId) ? String(object.assetTxId) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : ""
    };
  },

  toJSON(message: EventAddLiquidity): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Asset.toJSON(message.pool) : undefined);
    message.providerUnits !== undefined && (obj.providerUnits = message.providerUnits);
    message.runeAddress !== undefined && (obj.runeAddress = message.runeAddress);
    message.runeAmount !== undefined && (obj.runeAmount = message.runeAmount);
    message.assetAmount !== undefined && (obj.assetAmount = message.assetAmount);
    message.runeTxId !== undefined && (obj.runeTxId = message.runeTxId);
    message.assetTxId !== undefined && (obj.assetTxId = message.assetTxId);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    return obj;
  },

  fromPartial(object: Partial<EventAddLiquidity>): EventAddLiquidity {
    const message = createBaseEventAddLiquidity();
    message.pool = object.pool !== undefined && object.pool !== null ? Asset.fromPartial(object.pool) : undefined;
    message.providerUnits = object.providerUnits ?? "";
    message.runeAddress = object.runeAddress ?? "";
    message.runeAmount = object.runeAmount ?? "";
    message.assetAmount = object.assetAmount ?? "";
    message.runeTxId = object.runeTxId ?? "";
    message.assetTxId = object.assetTxId ?? "";
    message.assetAddress = object.assetAddress ?? "";
    return message;
  }

};

function createBaseEventWithdraw(): EventWithdraw {
  return {
    pool: undefined,
    providerUnits: "",
    basisPoints: Long.ZERO,
    asymmetry: new Uint8Array(),
    inTx: undefined,
    emitAsset: "",
    emitRune: "",
    impLossProtection: ""
  };
}

export const EventWithdraw = {
  encode(message: EventWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Asset.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    if (message.providerUnits !== "") {
      writer.uint32(18).string(message.providerUnits);
    }

    if (!message.basisPoints.isZero()) {
      writer.uint32(24).int64(message.basisPoints);
    }

    if (message.asymmetry.length !== 0) {
      writer.uint32(34).bytes(message.asymmetry);
    }

    if (message.inTx !== undefined) {
      Tx.encode(message.inTx, writer.uint32(42).fork()).ldelim();
    }

    if (message.emitAsset !== "") {
      writer.uint32(50).string(message.emitAsset);
    }

    if (message.emitRune !== "") {
      writer.uint32(58).string(message.emitRune);
    }

    if (message.impLossProtection !== "") {
      writer.uint32(66).string(message.impLossProtection);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.providerUnits = reader.string();
          break;

        case 3:
          message.basisPoints = (reader.int64() as Long);
          break;

        case 4:
          message.asymmetry = reader.bytes();
          break;

        case 5:
          message.inTx = Tx.decode(reader, reader.uint32());
          break;

        case 6:
          message.emitAsset = reader.string();
          break;

        case 7:
          message.emitRune = reader.string();
          break;

        case 8:
          message.impLossProtection = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventWithdraw {
    return {
      pool: isSet(object.pool) ? Asset.fromJSON(object.pool) : undefined,
      providerUnits: isSet(object.providerUnits) ? String(object.providerUnits) : "",
      basisPoints: isSet(object.basisPoints) ? Long.fromValue(object.basisPoints) : Long.ZERO,
      asymmetry: isSet(object.asymmetry) ? bytesFromBase64(object.asymmetry) : new Uint8Array(),
      inTx: isSet(object.inTx) ? Tx.fromJSON(object.inTx) : undefined,
      emitAsset: isSet(object.emitAsset) ? String(object.emitAsset) : "",
      emitRune: isSet(object.emitRune) ? String(object.emitRune) : "",
      impLossProtection: isSet(object.impLossProtection) ? String(object.impLossProtection) : ""
    };
  },

  toJSON(message: EventWithdraw): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Asset.toJSON(message.pool) : undefined);
    message.providerUnits !== undefined && (obj.providerUnits = message.providerUnits);
    message.basisPoints !== undefined && (obj.basisPoints = (message.basisPoints || Long.ZERO).toString());
    message.asymmetry !== undefined && (obj.asymmetry = base64FromBytes(message.asymmetry !== undefined ? message.asymmetry : new Uint8Array()));
    message.inTx !== undefined && (obj.inTx = message.inTx ? Tx.toJSON(message.inTx) : undefined);
    message.emitAsset !== undefined && (obj.emitAsset = message.emitAsset);
    message.emitRune !== undefined && (obj.emitRune = message.emitRune);
    message.impLossProtection !== undefined && (obj.impLossProtection = message.impLossProtection);
    return obj;
  },

  fromPartial(object: Partial<EventWithdraw>): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.pool = object.pool !== undefined && object.pool !== null ? Asset.fromPartial(object.pool) : undefined;
    message.providerUnits = object.providerUnits ?? "";
    message.basisPoints = object.basisPoints !== undefined && object.basisPoints !== null ? Long.fromValue(object.basisPoints) : Long.ZERO;
    message.asymmetry = object.asymmetry ?? new Uint8Array();
    message.inTx = object.inTx !== undefined && object.inTx !== null ? Tx.fromPartial(object.inTx) : undefined;
    message.emitAsset = object.emitAsset ?? "";
    message.emitRune = object.emitRune ?? "";
    message.impLossProtection = object.impLossProtection ?? "";
    return message;
  }

};

function createBaseEventPendingLiquidity(): EventPendingLiquidity {
  return {
    pool: undefined,
    pendingType: 0,
    runeAddress: "",
    runeAmount: "",
    assetAddress: "",
    assetAmount: "",
    runeTxId: "",
    assetTxId: ""
  };
}

export const EventPendingLiquidity = {
  encode(message: EventPendingLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Asset.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    if (message.pendingType !== 0) {
      writer.uint32(16).int32(message.pendingType);
    }

    if (message.runeAddress !== "") {
      writer.uint32(26).string(message.runeAddress);
    }

    if (message.runeAmount !== "") {
      writer.uint32(34).string(message.runeAmount);
    }

    if (message.assetAddress !== "") {
      writer.uint32(42).string(message.assetAddress);
    }

    if (message.assetAmount !== "") {
      writer.uint32(50).string(message.assetAmount);
    }

    if (message.runeTxId !== "") {
      writer.uint32(58).string(message.runeTxId);
    }

    if (message.assetTxId !== "") {
      writer.uint32(66).string(message.assetTxId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPendingLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPendingLiquidity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.pendingType = (reader.int32() as any);
          break;

        case 3:
          message.runeAddress = reader.string();
          break;

        case 4:
          message.runeAmount = reader.string();
          break;

        case 5:
          message.assetAddress = reader.string();
          break;

        case 6:
          message.assetAmount = reader.string();
          break;

        case 7:
          message.runeTxId = reader.string();
          break;

        case 8:
          message.assetTxId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventPendingLiquidity {
    return {
      pool: isSet(object.pool) ? Asset.fromJSON(object.pool) : undefined,
      pendingType: isSet(object.pendingType) ? pendingLiquidityTypeFromJSON(object.pendingType) : 0,
      runeAddress: isSet(object.runeAddress) ? String(object.runeAddress) : "",
      runeAmount: isSet(object.runeAmount) ? String(object.runeAmount) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : "",
      assetAmount: isSet(object.assetAmount) ? String(object.assetAmount) : "",
      runeTxId: isSet(object.runeTxId) ? String(object.runeTxId) : "",
      assetTxId: isSet(object.assetTxId) ? String(object.assetTxId) : ""
    };
  },

  toJSON(message: EventPendingLiquidity): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Asset.toJSON(message.pool) : undefined);
    message.pendingType !== undefined && (obj.pendingType = pendingLiquidityTypeToJSON(message.pendingType));
    message.runeAddress !== undefined && (obj.runeAddress = message.runeAddress);
    message.runeAmount !== undefined && (obj.runeAmount = message.runeAmount);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    message.assetAmount !== undefined && (obj.assetAmount = message.assetAmount);
    message.runeTxId !== undefined && (obj.runeTxId = message.runeTxId);
    message.assetTxId !== undefined && (obj.assetTxId = message.assetTxId);
    return obj;
  },

  fromPartial(object: Partial<EventPendingLiquidity>): EventPendingLiquidity {
    const message = createBaseEventPendingLiquidity();
    message.pool = object.pool !== undefined && object.pool !== null ? Asset.fromPartial(object.pool) : undefined;
    message.pendingType = object.pendingType ?? 0;
    message.runeAddress = object.runeAddress ?? "";
    message.runeAmount = object.runeAmount ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.assetAmount = object.assetAmount ?? "";
    message.runeTxId = object.runeTxId ?? "";
    message.assetTxId = object.assetTxId ?? "";
    return message;
  }

};

function createBaseEventDonate(): EventDonate {
  return {
    pool: undefined,
    inTx: undefined
  };
}

export const EventDonate = {
  encode(message: EventDonate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Asset.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    if (message.inTx !== undefined) {
      Tx.encode(message.inTx, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDonate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDonate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.inTx = Tx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventDonate {
    return {
      pool: isSet(object.pool) ? Asset.fromJSON(object.pool) : undefined,
      inTx: isSet(object.inTx) ? Tx.fromJSON(object.inTx) : undefined
    };
  },

  toJSON(message: EventDonate): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Asset.toJSON(message.pool) : undefined);
    message.inTx !== undefined && (obj.inTx = message.inTx ? Tx.toJSON(message.inTx) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventDonate>): EventDonate {
    const message = createBaseEventDonate();
    message.pool = object.pool !== undefined && object.pool !== null ? Asset.fromPartial(object.pool) : undefined;
    message.inTx = object.inTx !== undefined && object.inTx !== null ? Tx.fromPartial(object.inTx) : undefined;
    return message;
  }

};

function createBaseEventPool(): EventPool {
  return {
    pool: undefined,
    Status: 0
  };
}

export const EventPool = {
  encode(message: EventPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Asset.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    if (message.Status !== 0) {
      writer.uint32(16).int32(message.Status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.Status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventPool {
    return {
      pool: isSet(object.pool) ? Asset.fromJSON(object.pool) : undefined,
      Status: isSet(object.Status) ? poolStatusFromJSON(object.Status) : 0
    };
  },

  toJSON(message: EventPool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Asset.toJSON(message.pool) : undefined);
    message.Status !== undefined && (obj.Status = poolStatusToJSON(message.Status));
    return obj;
  },

  fromPartial(object: Partial<EventPool>): EventPool {
    const message = createBaseEventPool();
    message.pool = object.pool !== undefined && object.pool !== null ? Asset.fromPartial(object.pool) : undefined;
    message.Status = object.Status ?? 0;
    return message;
  }

};

function createBasePoolAmt(): PoolAmt {
  return {
    asset: undefined,
    amount: Long.ZERO
  };
}

export const PoolAmt = {
  encode(message: PoolAmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).int64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolAmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.amount = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolAmt {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.ZERO
    };
  },

  toJSON(message: PoolAmt): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<PoolAmt>): PoolAmt {
    const message = createBasePoolAmt();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.ZERO;
    return message;
  }

};

function createBaseEventRewards(): EventRewards {
  return {
    bondReward: "",
    poolRewards: []
  };
}

export const EventRewards = {
  encode(message: EventRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondReward !== "") {
      writer.uint32(10).string(message.bondReward);
    }

    for (const v of message.poolRewards) {
      PoolAmt.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondReward = reader.string();
          break;

        case 2:
          message.poolRewards.push(PoolAmt.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventRewards {
    return {
      bondReward: isSet(object.bondReward) ? String(object.bondReward) : "",
      poolRewards: Array.isArray(object?.poolRewards) ? object.poolRewards.map((e: any) => PoolAmt.fromJSON(e)) : []
    };
  },

  toJSON(message: EventRewards): unknown {
    const obj: any = {};
    message.bondReward !== undefined && (obj.bondReward = message.bondReward);

    if (message.poolRewards) {
      obj.poolRewards = message.poolRewards.map(e => e ? PoolAmt.toJSON(e) : undefined);
    } else {
      obj.poolRewards = [];
    }

    return obj;
  },

  fromPartial(object: Partial<EventRewards>): EventRewards {
    const message = createBaseEventRewards();
    message.bondReward = object.bondReward ?? "";
    message.poolRewards = object.poolRewards?.map(e => PoolAmt.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventRefund(): EventRefund {
  return {
    code: 0,
    reason: "",
    inTx: undefined,
    fee: undefined
  };
}

export const EventRefund = {
  encode(message: EventRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }

    if (message.inTx !== undefined) {
      Tx.encode(message.inTx, writer.uint32(26).fork()).ldelim();
    }

    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRefund();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 2:
          message.reason = reader.string();
          break;

        case 3:
          message.inTx = Tx.decode(reader, reader.uint32());
          break;

        case 4:
          message.fee = Fee.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventRefund {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      reason: isSet(object.reason) ? String(object.reason) : "",
      inTx: isSet(object.inTx) ? Tx.fromJSON(object.inTx) : undefined,
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: EventRefund): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.reason !== undefined && (obj.reason = message.reason);
    message.inTx !== undefined && (obj.inTx = message.inTx ? Tx.toJSON(message.inTx) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventRefund>): EventRefund {
    const message = createBaseEventRefund();
    message.code = object.code ?? 0;
    message.reason = object.reason ?? "";
    message.inTx = object.inTx !== undefined && object.inTx !== null ? Tx.fromPartial(object.inTx) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  }

};

function createBaseEventBond(): EventBond {
  return {
    amount: "",
    bondType: 0,
    txIn: undefined
  };
}

export const EventBond = {
  encode(message: EventBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    if (message.bondType !== 0) {
      writer.uint32(16).int32(message.bondType);
    }

    if (message.txIn !== undefined) {
      Tx.encode(message.txIn, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBond();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        case 2:
          message.bondType = (reader.int32() as any);
          break;

        case 3:
          message.txIn = Tx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventBond {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      bondType: isSet(object.bondType) ? bondTypeFromJSON(object.bondType) : 0,
      txIn: isSet(object.txIn) ? Tx.fromJSON(object.txIn) : undefined
    };
  },

  toJSON(message: EventBond): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.bondType !== undefined && (obj.bondType = bondTypeToJSON(message.bondType));
    message.txIn !== undefined && (obj.txIn = message.txIn ? Tx.toJSON(message.txIn) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventBond>): EventBond {
    const message = createBaseEventBond();
    message.amount = object.amount ?? "";
    message.bondType = object.bondType ?? 0;
    message.txIn = object.txIn !== undefined && object.txIn !== null ? Tx.fromPartial(object.txIn) : undefined;
    return message;
  }

};

function createBaseGasPool(): GasPool {
  return {
    asset: undefined,
    runeAmt: "",
    assetAmt: "",
    count: Long.ZERO
  };
}

export const GasPool = {
  encode(message: GasPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }

    if (message.runeAmt !== "") {
      writer.uint32(18).string(message.runeAmt);
    }

    if (message.assetAmt !== "") {
      writer.uint32(26).string(message.assetAmt);
    }

    if (!message.count.isZero()) {
      writer.uint32(32).int64(message.count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.runeAmt = reader.string();
          break;

        case 3:
          message.assetAmt = reader.string();
          break;

        case 4:
          message.count = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GasPool {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      runeAmt: isSet(object.runeAmt) ? String(object.runeAmt) : "",
      assetAmt: isSet(object.assetAmt) ? String(object.assetAmt) : "",
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.ZERO
    };
  },

  toJSON(message: GasPool): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.runeAmt !== undefined && (obj.runeAmt = message.runeAmt);
    message.assetAmt !== undefined && (obj.assetAmt = message.assetAmt);
    message.count !== undefined && (obj.count = (message.count || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<GasPool>): GasPool {
    const message = createBaseGasPool();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.runeAmt = object.runeAmt ?? "";
    message.assetAmt = object.assetAmt ?? "";
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.ZERO;
    return message;
  }

};

function createBaseEventGas(): EventGas {
  return {
    pools: []
  };
}

export const EventGas = {
  encode(message: EventGas, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      GasPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGas {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGas();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pools.push(GasPool.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventGas {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => GasPool.fromJSON(e)) : []
    };
  },

  toJSON(message: EventGas): unknown {
    const obj: any = {};

    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GasPool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }

    return obj;
  },

  fromPartial(object: Partial<EventGas>): EventGas {
    const message = createBaseEventGas();
    message.pools = object.pools?.map(e => GasPool.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventReserve(): EventReserve {
  return {
    reserveContributor: undefined,
    inTx: undefined
  };
}

export const EventReserve = {
  encode(message: EventReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveContributor !== undefined) {
      ReserveContributor.encode(message.reserveContributor, writer.uint32(10).fork()).ldelim();
    }

    if (message.inTx !== undefined) {
      Tx.encode(message.inTx, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReserve();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reserveContributor = ReserveContributor.decode(reader, reader.uint32());
          break;

        case 2:
          message.inTx = Tx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventReserve {
    return {
      reserveContributor: isSet(object.reserveContributor) ? ReserveContributor.fromJSON(object.reserveContributor) : undefined,
      inTx: isSet(object.inTx) ? Tx.fromJSON(object.inTx) : undefined
    };
  },

  toJSON(message: EventReserve): unknown {
    const obj: any = {};
    message.reserveContributor !== undefined && (obj.reserveContributor = message.reserveContributor ? ReserveContributor.toJSON(message.reserveContributor) : undefined);
    message.inTx !== undefined && (obj.inTx = message.inTx ? Tx.toJSON(message.inTx) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventReserve>): EventReserve {
    const message = createBaseEventReserve();
    message.reserveContributor = object.reserveContributor !== undefined && object.reserveContributor !== null ? ReserveContributor.fromPartial(object.reserveContributor) : undefined;
    message.inTx = object.inTx !== undefined && object.inTx !== null ? Tx.fromPartial(object.inTx) : undefined;
    return message;
  }

};

function createBaseEventScheduledOutbound(): EventScheduledOutbound {
  return {
    outTx: undefined
  };
}

export const EventScheduledOutbound = {
  encode(message: EventScheduledOutbound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outTx !== undefined) {
      TxOutItem.encode(message.outTx, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventScheduledOutbound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventScheduledOutbound();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.outTx = TxOutItem.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventScheduledOutbound {
    return {
      outTx: isSet(object.outTx) ? TxOutItem.fromJSON(object.outTx) : undefined
    };
  },

  toJSON(message: EventScheduledOutbound): unknown {
    const obj: any = {};
    message.outTx !== undefined && (obj.outTx = message.outTx ? TxOutItem.toJSON(message.outTx) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventScheduledOutbound>): EventScheduledOutbound {
    const message = createBaseEventScheduledOutbound();
    message.outTx = object.outTx !== undefined && object.outTx !== null ? TxOutItem.fromPartial(object.outTx) : undefined;
    return message;
  }

};

function createBaseEventSecurity(): EventSecurity {
  return {
    msg: "",
    tx: undefined
  };
}

export const EventSecurity = {
  encode(message: EventSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }

    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSecurity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSecurity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;

        case 2:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSecurity {
    return {
      msg: isSet(object.msg) ? String(object.msg) : "",
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined
    };
  },

  toJSON(message: EventSecurity): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventSecurity>): EventSecurity {
    const message = createBaseEventSecurity();
    message.msg = object.msg ?? "";
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  }

};

function createBaseEventSlash(): EventSlash {
  return {
    pool: undefined,
    slashAmount: []
  };
}

export const EventSlash = {
  encode(message: EventSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Asset.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.slashAmount) {
      PoolAmt.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSlash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSlash();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.slashAmount.push(PoolAmt.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSlash {
    return {
      pool: isSet(object.pool) ? Asset.fromJSON(object.pool) : undefined,
      slashAmount: Array.isArray(object?.slashAmount) ? object.slashAmount.map((e: any) => PoolAmt.fromJSON(e)) : []
    };
  },

  toJSON(message: EventSlash): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Asset.toJSON(message.pool) : undefined);

    if (message.slashAmount) {
      obj.slashAmount = message.slashAmount.map(e => e ? PoolAmt.toJSON(e) : undefined);
    } else {
      obj.slashAmount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<EventSlash>): EventSlash {
    const message = createBaseEventSlash();
    message.pool = object.pool !== undefined && object.pool !== null ? Asset.fromPartial(object.pool) : undefined;
    message.slashAmount = object.slashAmount?.map(e => PoolAmt.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventErrata(): EventErrata {
  return {
    txId: "",
    pools: []
  };
}

export const EventErrata = {
  encode(message: EventErrata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }

    for (const v of message.pools) {
      PoolMod.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventErrata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventErrata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;

        case 2:
          message.pools.push(PoolMod.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventErrata {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolMod.fromJSON(e)) : []
    };
  },

  toJSON(message: EventErrata): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);

    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolMod.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }

    return obj;
  },

  fromPartial(object: Partial<EventErrata>): EventErrata {
    const message = createBaseEventErrata();
    message.txId = object.txId ?? "";
    message.pools = object.pools?.map(e => PoolMod.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventFee(): EventFee {
  return {
    txId: "",
    fee: undefined,
    synthUnits: ""
  };
}

export const EventFee = {
  encode(message: EventFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }

    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }

    if (message.synthUnits !== "") {
      writer.uint32(26).string(message.synthUnits);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;

        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;

        case 3:
          message.synthUnits = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventFee {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      synthUnits: isSet(object.synthUnits) ? String(object.synthUnits) : ""
    };
  },

  toJSON(message: EventFee): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.synthUnits !== undefined && (obj.synthUnits = message.synthUnits);
    return obj;
  },

  fromPartial(object: Partial<EventFee>): EventFee {
    const message = createBaseEventFee();
    message.txId = object.txId ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.synthUnits = object.synthUnits ?? "";
    return message;
  }

};

function createBaseEventOutbound(): EventOutbound {
  return {
    inTxId: "",
    tx: undefined
  };
}

export const EventOutbound = {
  encode(message: EventOutbound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inTxId !== "") {
      writer.uint32(10).string(message.inTxId);
    }

    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventOutbound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutbound();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inTxId = reader.string();
          break;

        case 2:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventOutbound {
    return {
      inTxId: isSet(object.inTxId) ? String(object.inTxId) : "",
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined
    };
  },

  toJSON(message: EventOutbound): unknown {
    const obj: any = {};
    message.inTxId !== undefined && (obj.inTxId = message.inTxId);
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventOutbound>): EventOutbound {
    const message = createBaseEventOutbound();
    message.inTxId = object.inTxId ?? "";
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  }

};

function createBaseEventTssKeygenMetric(): EventTssKeygenMetric {
  return {
    pubKey: "",
    medianDurationMs: Long.ZERO
  };
}

export const EventTssKeygenMetric = {
  encode(message: EventTssKeygenMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== "") {
      writer.uint32(10).string(message.pubKey);
    }

    if (!message.medianDurationMs.isZero()) {
      writer.uint32(16).int64(message.medianDurationMs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTssKeygenMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTssKeygenMetric();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;

        case 2:
          message.medianDurationMs = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTssKeygenMetric {
    return {
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      medianDurationMs: isSet(object.medianDurationMs) ? Long.fromValue(object.medianDurationMs) : Long.ZERO
    };
  },

  toJSON(message: EventTssKeygenMetric): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.medianDurationMs !== undefined && (obj.medianDurationMs = (message.medianDurationMs || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EventTssKeygenMetric>): EventTssKeygenMetric {
    const message = createBaseEventTssKeygenMetric();
    message.pubKey = object.pubKey ?? "";
    message.medianDurationMs = object.medianDurationMs !== undefined && object.medianDurationMs !== null ? Long.fromValue(object.medianDurationMs) : Long.ZERO;
    return message;
  }

};

function createBaseEventTssKeysignMetric(): EventTssKeysignMetric {
  return {
    txId: "",
    medianDurationMs: Long.ZERO
  };
}

export const EventTssKeysignMetric = {
  encode(message: EventTssKeysignMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }

    if (!message.medianDurationMs.isZero()) {
      writer.uint32(16).int64(message.medianDurationMs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTssKeysignMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTssKeysignMetric();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;

        case 2:
          message.medianDurationMs = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTssKeysignMetric {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      medianDurationMs: isSet(object.medianDurationMs) ? Long.fromValue(object.medianDurationMs) : Long.ZERO
    };
  },

  toJSON(message: EventTssKeysignMetric): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.medianDurationMs !== undefined && (obj.medianDurationMs = (message.medianDurationMs || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EventTssKeysignMetric>): EventTssKeysignMetric {
    const message = createBaseEventTssKeysignMetric();
    message.txId = object.txId ?? "";
    message.medianDurationMs = object.medianDurationMs !== undefined && object.medianDurationMs !== null ? Long.fromValue(object.medianDurationMs) : Long.ZERO;
    return message;
  }

};

function createBaseEventSlashPoint(): EventSlashPoint {
  return {
    nodeAddress: new Uint8Array(),
    slashPoints: Long.ZERO,
    reason: ""
  };
}

export const EventSlashPoint = {
  encode(message: EventSlashPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress.length !== 0) {
      writer.uint32(10).bytes(message.nodeAddress);
    }

    if (!message.slashPoints.isZero()) {
      writer.uint32(16).int64(message.slashPoints);
    }

    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSlashPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSlashPoint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nodeAddress = reader.bytes();
          break;

        case 2:
          message.slashPoints = (reader.int64() as Long);
          break;

        case 3:
          message.reason = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSlashPoint {
    return {
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      slashPoints: isSet(object.slashPoints) ? Long.fromValue(object.slashPoints) : Long.ZERO,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },

  toJSON(message: EventSlashPoint): unknown {
    const obj: any = {};
    message.nodeAddress !== undefined && (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.slashPoints !== undefined && (obj.slashPoints = (message.slashPoints || Long.ZERO).toString());
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: Partial<EventSlashPoint>): EventSlashPoint {
    const message = createBaseEventSlashPoint();
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
    message.slashPoints = object.slashPoints !== undefined && object.slashPoints !== null ? Long.fromValue(object.slashPoints) : Long.ZERO;
    message.reason = object.reason ?? "";
    return message;
  }

};

function createBaseEventPoolBalanceChanged(): EventPoolBalanceChanged {
  return {
    poolChange: undefined,
    reason: ""
  };
}

export const EventPoolBalanceChanged = {
  encode(message: EventPoolBalanceChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolChange !== undefined) {
      PoolMod.encode(message.poolChange, writer.uint32(10).fork()).ldelim();
    }

    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolBalanceChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolBalanceChanged();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolChange = PoolMod.decode(reader, reader.uint32());
          break;

        case 2:
          message.reason = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventPoolBalanceChanged {
    return {
      poolChange: isSet(object.poolChange) ? PoolMod.fromJSON(object.poolChange) : undefined,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },

  toJSON(message: EventPoolBalanceChanged): unknown {
    const obj: any = {};
    message.poolChange !== undefined && (obj.poolChange = message.poolChange ? PoolMod.toJSON(message.poolChange) : undefined);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: Partial<EventPoolBalanceChanged>): EventPoolBalanceChanged {
    const message = createBaseEventPoolBalanceChanged();
    message.poolChange = object.poolChange !== undefined && object.poolChange !== null ? PoolMod.fromPartial(object.poolChange) : undefined;
    message.reason = object.reason ?? "";
    return message;
  }

};

function createBaseEventSwitch(): EventSwitch {
  return {
    toAddress: new Uint8Array(),
    fromAddress: "",
    burn: undefined,
    txId: ""
  };
}

export const EventSwitch = {
  encode(message: EventSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toAddress.length !== 0) {
      writer.uint32(10).bytes(message.toAddress);
    }

    if (message.fromAddress !== "") {
      writer.uint32(18).string(message.fromAddress);
    }

    if (message.burn !== undefined) {
      Coin.encode(message.burn, writer.uint32(26).fork()).ldelim();
    }

    if (message.txId !== "") {
      writer.uint32(34).string(message.txId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwitch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.toAddress = reader.bytes();
          break;

        case 2:
          message.fromAddress = reader.string();
          break;

        case 3:
          message.burn = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.txId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSwitch {
    return {
      toAddress: isSet(object.toAddress) ? bytesFromBase64(object.toAddress) : new Uint8Array(),
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      burn: isSet(object.burn) ? Coin.fromJSON(object.burn) : undefined,
      txId: isSet(object.txId) ? String(object.txId) : ""
    };
  },

  toJSON(message: EventSwitch): unknown {
    const obj: any = {};
    message.toAddress !== undefined && (obj.toAddress = base64FromBytes(message.toAddress !== undefined ? message.toAddress : new Uint8Array()));
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.burn !== undefined && (obj.burn = message.burn ? Coin.toJSON(message.burn) : undefined);
    message.txId !== undefined && (obj.txId = message.txId);
    return obj;
  },

  fromPartial(object: Partial<EventSwitch>): EventSwitch {
    const message = createBaseEventSwitch();
    message.toAddress = object.toAddress ?? new Uint8Array();
    message.fromAddress = object.fromAddress ?? "";
    message.burn = object.burn !== undefined && object.burn !== null ? Coin.fromPartial(object.burn) : undefined;
    message.txId = object.txId ?? "";
    return message;
  }

};

function createBaseEventSwitchV87(): EventSwitchV87 {
  return {
    toAddress: new Uint8Array(),
    fromAddress: "",
    burn: undefined,
    txId: "",
    mint: ""
  };
}

export const EventSwitchV87 = {
  encode(message: EventSwitchV87, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toAddress.length !== 0) {
      writer.uint32(10).bytes(message.toAddress);
    }

    if (message.fromAddress !== "") {
      writer.uint32(18).string(message.fromAddress);
    }

    if (message.burn !== undefined) {
      Coin.encode(message.burn, writer.uint32(26).fork()).ldelim();
    }

    if (message.txId !== "") {
      writer.uint32(34).string(message.txId);
    }

    if (message.mint !== "") {
      writer.uint32(42).string(message.mint);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwitchV87 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwitchV87();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.toAddress = reader.bytes();
          break;

        case 2:
          message.fromAddress = reader.string();
          break;

        case 3:
          message.burn = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.txId = reader.string();
          break;

        case 5:
          message.mint = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSwitchV87 {
    return {
      toAddress: isSet(object.toAddress) ? bytesFromBase64(object.toAddress) : new Uint8Array(),
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      burn: isSet(object.burn) ? Coin.fromJSON(object.burn) : undefined,
      txId: isSet(object.txId) ? String(object.txId) : "",
      mint: isSet(object.mint) ? String(object.mint) : ""
    };
  },

  toJSON(message: EventSwitchV87): unknown {
    const obj: any = {};
    message.toAddress !== undefined && (obj.toAddress = base64FromBytes(message.toAddress !== undefined ? message.toAddress : new Uint8Array()));
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.burn !== undefined && (obj.burn = message.burn ? Coin.toJSON(message.burn) : undefined);
    message.txId !== undefined && (obj.txId = message.txId);
    message.mint !== undefined && (obj.mint = message.mint);
    return obj;
  },

  fromPartial(object: Partial<EventSwitchV87>): EventSwitchV87 {
    const message = createBaseEventSwitchV87();
    message.toAddress = object.toAddress ?? new Uint8Array();
    message.fromAddress = object.fromAddress ?? "";
    message.burn = object.burn !== undefined && object.burn !== null ? Coin.fromPartial(object.burn) : undefined;
    message.txId = object.txId ?? "";
    message.mint = object.mint ?? "";
    return message;
  }

};

function createBaseEventMintBurn(): EventMintBurn {
  return {
    supply: 0,
    denom: "",
    amount: "",
    reason: ""
  };
}

export const EventMintBurn = {
  encode(message: EventMintBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supply !== 0) {
      writer.uint32(8).int32(message.supply);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintBurn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.supply = (reader.int32() as any);
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.reason = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventMintBurn {
    return {
      supply: isSet(object.supply) ? mintBurnSupplyTypeFromJSON(object.supply) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },

  toJSON(message: EventMintBurn): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = mintBurnSupplyTypeToJSON(message.supply));
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: Partial<EventMintBurn>): EventMintBurn {
    const message = createBaseEventMintBurn();
    message.supply = object.supply ?? 0;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    return message;
  }

};

function createBaseEventTHORName(): EventTHORName {
  return {
    name: "",
    chain: "",
    address: "",
    registrationFee: "",
    fundAmt: "",
    expire: Long.ZERO,
    owner: new Uint8Array()
  };
}

export const EventTHORName = {
  encode(message: EventTHORName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    if (message.registrationFee !== "") {
      writer.uint32(34).string(message.registrationFee);
    }

    if (message.fundAmt !== "") {
      writer.uint32(42).string(message.fundAmt);
    }

    if (!message.expire.isZero()) {
      writer.uint32(48).int64(message.expire);
    }

    if (message.owner.length !== 0) {
      writer.uint32(58).bytes(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTHORName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTHORName();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.chain = reader.string();
          break;

        case 3:
          message.address = reader.string();
          break;

        case 4:
          message.registrationFee = reader.string();
          break;

        case 5:
          message.fundAmt = reader.string();
          break;

        case 6:
          message.expire = (reader.int64() as Long);
          break;

        case 7:
          message.owner = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTHORName {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      address: isSet(object.address) ? String(object.address) : "",
      registrationFee: isSet(object.registrationFee) ? String(object.registrationFee) : "",
      fundAmt: isSet(object.fundAmt) ? String(object.fundAmt) : "",
      expire: isSet(object.expire) ? Long.fromValue(object.expire) : Long.ZERO,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array()
    };
  },

  toJSON(message: EventTHORName): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined && (obj.address = message.address);
    message.registrationFee !== undefined && (obj.registrationFee = message.registrationFee);
    message.fundAmt !== undefined && (obj.fundAmt = message.fundAmt);
    message.expire !== undefined && (obj.expire = (message.expire || Long.ZERO).toString());
    message.owner !== undefined && (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<EventTHORName>): EventTHORName {
    const message = createBaseEventTHORName();
    message.name = object.name ?? "";
    message.chain = object.chain ?? "";
    message.address = object.address ?? "";
    message.registrationFee = object.registrationFee ?? "";
    message.fundAmt = object.fundAmt ?? "";
    message.expire = object.expire !== undefined && object.expire !== null ? Long.fromValue(object.expire) : Long.ZERO;
    message.owner = object.owner ?? new Uint8Array();
    return message;
  }

};

function createBaseEventSetMimir(): EventSetMimir {
  return {
    key: "",
    value: ""
  };
}

export const EventSetMimir = {
  encode(message: EventSetMimir, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetMimir {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetMimir();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSetMimir {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: EventSetMimir): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<EventSetMimir>): EventSetMimir {
    const message = createBaseEventSetMimir();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseEventSetNodeMimir(): EventSetNodeMimir {
  return {
    key: "",
    value: "",
    address: ""
  };
}

export const EventSetNodeMimir = {
  encode(message: EventSetNodeMimir, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetNodeMimir {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetNodeMimir();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        case 3:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSetNodeMimir {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: EventSetNodeMimir): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<EventSetNodeMimir>): EventSetNodeMimir {
    const message = createBaseEventSetNodeMimir();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.address = object.address ?? "";
    return message;
  }

};