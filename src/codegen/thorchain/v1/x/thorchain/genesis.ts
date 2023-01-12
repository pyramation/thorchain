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
import { Long, isSet } from "../../../../helpers";
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

function createBaseLastChainHeight(): LastChainHeight {
  return {
    chain: "",
    height: Long.ZERO
  };
}

export const LastChainHeight = {
  encode(message: LastChainHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastChainHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastChainHeight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LastChainHeight {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },

  toJSON(message: LastChainHeight): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<LastChainHeight>): LastChainHeight {
    const message = createBaseLastChainHeight();
    message.chain = object.chain ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseMimir(): Mimir {
  return {
    key: "",
    value: Long.ZERO
  };
}

export const Mimir = {
  encode(message: Mimir, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mimir {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMimir();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Mimir {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO
    };
  },

  toJSON(message: Mimir): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<Mimir>): Mimir {
    const message = createBaseMimir();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    pools: [],
    liquidityProviders: [],
    observedTxInVoters: [],
    observedTxOutVoters: [],
    txOuts: [],
    nodeAccounts: [],
    vaults: [],
    reserve: Long.UZERO,
    lastSignedHeight: Long.ZERO,
    lastChainHeights: [],
    reserveContributors: [],
    network: undefined,
    msgSwaps: [],
    networkFees: [],
    chainContracts: [],
    THORNames: [],
    mimirs: [],
    storeVersion: Long.ZERO,
    bondProviders: [],
    POL: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.observedTxInVoters) {
      ObservedTxVoter.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.observedTxOutVoters) {
      ObservedTxVoter.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.txOuts) {
      TxOut.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.nodeAccounts) {
      NodeAccount.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.vaults) {
      Vault.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.reserve.isZero()) {
      writer.uint32(64).uint64(message.reserve);
    }

    if (!message.lastSignedHeight.isZero()) {
      writer.uint32(80).int64(message.lastSignedHeight);
    }

    for (const v of message.lastChainHeights) {
      LastChainHeight.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.reserveContributors) {
      ReserveContributor.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    if (message.network !== undefined) {
      Network.encode(message.network, writer.uint32(106).fork()).ldelim();
    }

    for (const v of message.msgSwaps) {
      MsgSwap.encode(v!, writer.uint32(154).fork()).ldelim();
    }

    for (const v of message.networkFees) {
      NetworkFee.encode(v!, writer.uint32(162).fork()).ldelim();
    }

    for (const v of message.chainContracts) {
      ChainContract.encode(v!, writer.uint32(178).fork()).ldelim();
    }

    for (const v of message.THORNames) {
      THORName.encode(v!, writer.uint32(186).fork()).ldelim();
    }

    for (const v of message.mimirs) {
      Mimir.encode(v!, writer.uint32(194).fork()).ldelim();
    }

    if (!message.storeVersion.isZero()) {
      writer.uint32(200).int64(message.storeVersion);
    }

    for (const v of message.bondProviders) {
      BondProviders.encode(v!, writer.uint32(210).fork()).ldelim();
    }

    if (message.POL !== undefined) {
      ProtocolOwnedLiquidity.encode(message.POL, writer.uint32(218).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;

        case 2:
          message.liquidityProviders.push(LiquidityProvider.decode(reader, reader.uint32()));
          break;

        case 3:
          message.observedTxInVoters.push(ObservedTxVoter.decode(reader, reader.uint32()));
          break;

        case 4:
          message.observedTxOutVoters.push(ObservedTxVoter.decode(reader, reader.uint32()));
          break;

        case 5:
          message.txOuts.push(TxOut.decode(reader, reader.uint32()));
          break;

        case 6:
          message.nodeAccounts.push(NodeAccount.decode(reader, reader.uint32()));
          break;

        case 7:
          message.vaults.push(Vault.decode(reader, reader.uint32()));
          break;

        case 8:
          message.reserve = (reader.uint64() as Long);
          break;

        case 10:
          message.lastSignedHeight = (reader.int64() as Long);
          break;

        case 11:
          message.lastChainHeights.push(LastChainHeight.decode(reader, reader.uint32()));
          break;

        case 12:
          message.reserveContributors.push(ReserveContributor.decode(reader, reader.uint32()));
          break;

        case 13:
          message.network = Network.decode(reader, reader.uint32());
          break;

        case 19:
          message.msgSwaps.push(MsgSwap.decode(reader, reader.uint32()));
          break;

        case 20:
          message.networkFees.push(NetworkFee.decode(reader, reader.uint32()));
          break;

        case 22:
          message.chainContracts.push(ChainContract.decode(reader, reader.uint32()));
          break;

        case 23:
          message.THORNames.push(THORName.decode(reader, reader.uint32()));
          break;

        case 24:
          message.mimirs.push(Mimir.decode(reader, reader.uint32()));
          break;

        case 25:
          message.storeVersion = (reader.int64() as Long);
          break;

        case 26:
          message.bondProviders.push(BondProviders.decode(reader, reader.uint32()));
          break;

        case 27:
          message.POL = ProtocolOwnedLiquidity.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProvider.fromJSON(e)) : [],
      observedTxInVoters: Array.isArray(object?.observedTxInVoters) ? object.observedTxInVoters.map((e: any) => ObservedTxVoter.fromJSON(e)) : [],
      observedTxOutVoters: Array.isArray(object?.observedTxOutVoters) ? object.observedTxOutVoters.map((e: any) => ObservedTxVoter.fromJSON(e)) : [],
      txOuts: Array.isArray(object?.txOuts) ? object.txOuts.map((e: any) => TxOut.fromJSON(e)) : [],
      nodeAccounts: Array.isArray(object?.nodeAccounts) ? object.nodeAccounts.map((e: any) => NodeAccount.fromJSON(e)) : [],
      vaults: Array.isArray(object?.vaults) ? object.vaults.map((e: any) => Vault.fromJSON(e)) : [],
      reserve: isSet(object.reserve) ? Long.fromValue(object.reserve) : Long.UZERO,
      lastSignedHeight: isSet(object.lastSignedHeight) ? Long.fromValue(object.lastSignedHeight) : Long.ZERO,
      lastChainHeights: Array.isArray(object?.lastChainHeights) ? object.lastChainHeights.map((e: any) => LastChainHeight.fromJSON(e)) : [],
      reserveContributors: Array.isArray(object?.reserveContributors) ? object.reserveContributors.map((e: any) => ReserveContributor.fromJSON(e)) : [],
      network: isSet(object.network) ? Network.fromJSON(object.network) : undefined,
      msgSwaps: Array.isArray(object?.msgSwaps) ? object.msgSwaps.map((e: any) => MsgSwap.fromJSON(e)) : [],
      networkFees: Array.isArray(object?.networkFees) ? object.networkFees.map((e: any) => NetworkFee.fromJSON(e)) : [],
      chainContracts: Array.isArray(object?.chainContracts) ? object.chainContracts.map((e: any) => ChainContract.fromJSON(e)) : [],
      THORNames: Array.isArray(object?.THORNames) ? object.THORNames.map((e: any) => THORName.fromJSON(e)) : [],
      mimirs: Array.isArray(object?.mimirs) ? object.mimirs.map((e: any) => Mimir.fromJSON(e)) : [],
      storeVersion: isSet(object.storeVersion) ? Long.fromValue(object.storeVersion) : Long.ZERO,
      bondProviders: Array.isArray(object?.bondProviders) ? object.bondProviders.map((e: any) => BondProviders.fromJSON(e)) : [],
      POL: isSet(object.POL) ? ProtocolOwnedLiquidity.fromJSON(object.POL) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }

    if (message.liquidityProviders) {
      obj.liquidityProviders = message.liquidityProviders.map(e => e ? LiquidityProvider.toJSON(e) : undefined);
    } else {
      obj.liquidityProviders = [];
    }

    if (message.observedTxInVoters) {
      obj.observedTxInVoters = message.observedTxInVoters.map(e => e ? ObservedTxVoter.toJSON(e) : undefined);
    } else {
      obj.observedTxInVoters = [];
    }

    if (message.observedTxOutVoters) {
      obj.observedTxOutVoters = message.observedTxOutVoters.map(e => e ? ObservedTxVoter.toJSON(e) : undefined);
    } else {
      obj.observedTxOutVoters = [];
    }

    if (message.txOuts) {
      obj.txOuts = message.txOuts.map(e => e ? TxOut.toJSON(e) : undefined);
    } else {
      obj.txOuts = [];
    }

    if (message.nodeAccounts) {
      obj.nodeAccounts = message.nodeAccounts.map(e => e ? NodeAccount.toJSON(e) : undefined);
    } else {
      obj.nodeAccounts = [];
    }

    if (message.vaults) {
      obj.vaults = message.vaults.map(e => e ? Vault.toJSON(e) : undefined);
    } else {
      obj.vaults = [];
    }

    message.reserve !== undefined && (obj.reserve = (message.reserve || Long.UZERO).toString());
    message.lastSignedHeight !== undefined && (obj.lastSignedHeight = (message.lastSignedHeight || Long.ZERO).toString());

    if (message.lastChainHeights) {
      obj.lastChainHeights = message.lastChainHeights.map(e => e ? LastChainHeight.toJSON(e) : undefined);
    } else {
      obj.lastChainHeights = [];
    }

    if (message.reserveContributors) {
      obj.reserveContributors = message.reserveContributors.map(e => e ? ReserveContributor.toJSON(e) : undefined);
    } else {
      obj.reserveContributors = [];
    }

    message.network !== undefined && (obj.network = message.network ? Network.toJSON(message.network) : undefined);

    if (message.msgSwaps) {
      obj.msgSwaps = message.msgSwaps.map(e => e ? MsgSwap.toJSON(e) : undefined);
    } else {
      obj.msgSwaps = [];
    }

    if (message.networkFees) {
      obj.networkFees = message.networkFees.map(e => e ? NetworkFee.toJSON(e) : undefined);
    } else {
      obj.networkFees = [];
    }

    if (message.chainContracts) {
      obj.chainContracts = message.chainContracts.map(e => e ? ChainContract.toJSON(e) : undefined);
    } else {
      obj.chainContracts = [];
    }

    if (message.THORNames) {
      obj.THORNames = message.THORNames.map(e => e ? THORName.toJSON(e) : undefined);
    } else {
      obj.THORNames = [];
    }

    if (message.mimirs) {
      obj.mimirs = message.mimirs.map(e => e ? Mimir.toJSON(e) : undefined);
    } else {
      obj.mimirs = [];
    }

    message.storeVersion !== undefined && (obj.storeVersion = (message.storeVersion || Long.ZERO).toString());

    if (message.bondProviders) {
      obj.bondProviders = message.bondProviders.map(e => e ? BondProviders.toJSON(e) : undefined);
    } else {
      obj.bondProviders = [];
    }

    message.POL !== undefined && (obj.POL = message.POL ? ProtocolOwnedLiquidity.toJSON(message.POL) : undefined);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    message.observedTxInVoters = object.observedTxInVoters?.map(e => ObservedTxVoter.fromPartial(e)) || [];
    message.observedTxOutVoters = object.observedTxOutVoters?.map(e => ObservedTxVoter.fromPartial(e)) || [];
    message.txOuts = object.txOuts?.map(e => TxOut.fromPartial(e)) || [];
    message.nodeAccounts = object.nodeAccounts?.map(e => NodeAccount.fromPartial(e)) || [];
    message.vaults = object.vaults?.map(e => Vault.fromPartial(e)) || [];
    message.reserve = object.reserve !== undefined && object.reserve !== null ? Long.fromValue(object.reserve) : Long.UZERO;
    message.lastSignedHeight = object.lastSignedHeight !== undefined && object.lastSignedHeight !== null ? Long.fromValue(object.lastSignedHeight) : Long.ZERO;
    message.lastChainHeights = object.lastChainHeights?.map(e => LastChainHeight.fromPartial(e)) || [];
    message.reserveContributors = object.reserveContributors?.map(e => ReserveContributor.fromPartial(e)) || [];
    message.network = object.network !== undefined && object.network !== null ? Network.fromPartial(object.network) : undefined;
    message.msgSwaps = object.msgSwaps?.map(e => MsgSwap.fromPartial(e)) || [];
    message.networkFees = object.networkFees?.map(e => NetworkFee.fromPartial(e)) || [];
    message.chainContracts = object.chainContracts?.map(e => ChainContract.fromPartial(e)) || [];
    message.THORNames = object.THORNames?.map(e => THORName.fromPartial(e)) || [];
    message.mimirs = object.mimirs?.map(e => Mimir.fromPartial(e)) || [];
    message.storeVersion = object.storeVersion !== undefined && object.storeVersion !== null ? Long.fromValue(object.storeVersion) : Long.ZERO;
    message.bondProviders = object.bondProviders?.map(e => BondProviders.fromPartial(e)) || [];
    message.POL = object.POL !== undefined && object.POL !== null ? ProtocolOwnedLiquidity.fromPartial(object.POL) : undefined;
    return message;
  }

};