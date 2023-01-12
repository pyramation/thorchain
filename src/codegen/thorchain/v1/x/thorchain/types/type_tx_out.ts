import { Coin, CoinSDKType } from "../../../common/common";
import { Long, isSet } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TxOutItem {
  chain: string;
  toAddress: string;
  vaultPubKey: string;
  coin?: Coin;
  memo: string;
  maxGas: Coin[];
  gasRate: Long;
  inHash: string;
  outHash: string;
  moduleName: string;
  aggregator: string;
  aggregatorTargetAsset: string;
  aggregatorTargetLimit: string;
}
export interface TxOutItemSDKType {
  chain: string;
  to_address: string;
  vault_pub_key: string;
  coin?: CoinSDKType;
  memo: string;
  max_gas: CoinSDKType[];
  gas_rate: Long;
  in_hash: string;
  out_hash: string;
  module_name: string;
  aggregator: string;
  aggregator_target_asset: string;
  aggregator_target_limit: string;
}
export interface TxOut {
  height: Long;
  txArray: TxOutItem[];
}
export interface TxOutSDKType {
  height: Long;
  tx_array: TxOutItemSDKType[];
}

function createBaseTxOutItem(): TxOutItem {
  return {
    chain: "",
    toAddress: "",
    vaultPubKey: "",
    coin: undefined,
    memo: "",
    maxGas: [],
    gasRate: Long.ZERO,
    inHash: "",
    outHash: "",
    moduleName: "",
    aggregator: "",
    aggregatorTargetAsset: "",
    aggregatorTargetLimit: undefined
  };
}

export const TxOutItem = {
  encode(message: TxOutItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }

    if (message.vaultPubKey !== "") {
      writer.uint32(26).string(message.vaultPubKey);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }

    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }

    for (const v of message.maxGas) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (!message.gasRate.isZero()) {
      writer.uint32(56).int64(message.gasRate);
    }

    if (message.inHash !== "") {
      writer.uint32(66).string(message.inHash);
    }

    if (message.outHash !== "") {
      writer.uint32(74).string(message.outHash);
    }

    if (message.moduleName !== "") {
      writer.uint32(82).string(message.moduleName);
    }

    if (message.aggregator !== "") {
      writer.uint32(90).string(message.aggregator);
    }

    if (message.aggregatorTargetAsset !== "") {
      writer.uint32(98).string(message.aggregatorTargetAsset);
    }

    if (message.aggregatorTargetLimit !== undefined) {
      writer.uint32(106).string(message.aggregatorTargetLimit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxOutItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxOutItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        case 2:
          message.toAddress = reader.string();
          break;

        case 3:
          message.vaultPubKey = reader.string();
          break;

        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.memo = reader.string();
          break;

        case 6:
          message.maxGas.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.gasRate = (reader.int64() as Long);
          break;

        case 8:
          message.inHash = reader.string();
          break;

        case 9:
          message.outHash = reader.string();
          break;

        case 10:
          message.moduleName = reader.string();
          break;

        case 11:
          message.aggregator = reader.string();
          break;

        case 12:
          message.aggregatorTargetAsset = reader.string();
          break;

        case 13:
          message.aggregatorTargetLimit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxOutItem {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      vaultPubKey: isSet(object.vaultPubKey) ? String(object.vaultPubKey) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      memo: isSet(object.memo) ? String(object.memo) : "",
      maxGas: Array.isArray(object?.maxGas) ? object.maxGas.map((e: any) => Coin.fromJSON(e)) : [],
      gasRate: isSet(object.gasRate) ? Long.fromValue(object.gasRate) : Long.ZERO,
      inHash: isSet(object.inHash) ? String(object.inHash) : "",
      outHash: isSet(object.outHash) ? String(object.outHash) : "",
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      aggregator: isSet(object.aggregator) ? String(object.aggregator) : "",
      aggregatorTargetAsset: isSet(object.aggregatorTargetAsset) ? String(object.aggregatorTargetAsset) : "",
      aggregatorTargetLimit: isSet(object.aggregatorTargetLimit) ? String(object.aggregatorTargetLimit) : undefined
    };
  },

  toJSON(message: TxOutItem): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.vaultPubKey !== undefined && (obj.vaultPubKey = message.vaultPubKey);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.memo !== undefined && (obj.memo = message.memo);

    if (message.maxGas) {
      obj.maxGas = message.maxGas.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxGas = [];
    }

    message.gasRate !== undefined && (obj.gasRate = (message.gasRate || Long.ZERO).toString());
    message.inHash !== undefined && (obj.inHash = message.inHash);
    message.outHash !== undefined && (obj.outHash = message.outHash);
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.aggregator !== undefined && (obj.aggregator = message.aggregator);
    message.aggregatorTargetAsset !== undefined && (obj.aggregatorTargetAsset = message.aggregatorTargetAsset);
    message.aggregatorTargetLimit !== undefined && (obj.aggregatorTargetLimit = message.aggregatorTargetLimit);
    return obj;
  },

  fromPartial(object: Partial<TxOutItem>): TxOutItem {
    const message = createBaseTxOutItem();
    message.chain = object.chain ?? "";
    message.toAddress = object.toAddress ?? "";
    message.vaultPubKey = object.vaultPubKey ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.memo = object.memo ?? "";
    message.maxGas = object.maxGas?.map(e => Coin.fromPartial(e)) || [];
    message.gasRate = object.gasRate !== undefined && object.gasRate !== null ? Long.fromValue(object.gasRate) : Long.ZERO;
    message.inHash = object.inHash ?? "";
    message.outHash = object.outHash ?? "";
    message.moduleName = object.moduleName ?? "";
    message.aggregator = object.aggregator ?? "";
    message.aggregatorTargetAsset = object.aggregatorTargetAsset ?? "";
    message.aggregatorTargetLimit = object.aggregatorTargetLimit ?? undefined;
    return message;
  }

};

function createBaseTxOut(): TxOut {
  return {
    height: Long.ZERO,
    txArray: []
  };
}

export const TxOut = {
  encode(message: TxOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    for (const v of message.txArray) {
      TxOutItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        case 2:
          message.txArray.push(TxOutItem.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxOut {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      txArray: Array.isArray(object?.txArray) ? object.txArray.map((e: any) => TxOutItem.fromJSON(e)) : []
    };
  },

  toJSON(message: TxOut): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());

    if (message.txArray) {
      obj.txArray = message.txArray.map(e => e ? TxOutItem.toJSON(e) : undefined);
    } else {
      obj.txArray = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TxOut>): TxOut {
    const message = createBaseTxOut();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.txArray = object.txArray?.map(e => TxOutItem.fromPartial(e)) || [];
    return message;
  }

};