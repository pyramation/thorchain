import { Tx, TxSDKType, Asset, AssetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export enum OrderType {
  market = 0,
  limit = 1,
  UNRECOGNIZED = -1,
}
export const OrderTypeSDKType = OrderType;
export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "market":
      return OrderType.market;

    case 1:
    case "limit":
      return OrderType.limit;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderType.UNRECOGNIZED;
  }
}
export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.market:
      return "market";

    case OrderType.limit:
      return "limit";

    case OrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MsgSwap {
  tx?: Tx;
  targetAsset?: Asset;
  destination: string;
  tradeTarget: string;
  affiliateAddress: string;
  affiliateBasisPoints: string;
  signer: Uint8Array;
  aggregator: string;
  aggregatorTargetAddress: string;
  aggregatorTargetLimit: string;
  orderType: OrderType;
}
export interface MsgSwapSDKType {
  tx?: TxSDKType;
  target_asset?: AssetSDKType;
  destination: string;
  trade_target: string;
  affiliate_address: string;
  affiliate_basis_points: string;
  signer: Uint8Array;
  aggregator: string;
  aggregator_target_address: string;
  aggregator_target_limit: string;
  order_type: OrderType;
}

function createBaseMsgSwap(): MsgSwap {
  return {
    tx: undefined,
    targetAsset: undefined,
    destination: "",
    tradeTarget: "",
    affiliateAddress: "",
    affiliateBasisPoints: "",
    signer: new Uint8Array(),
    aggregator: "",
    aggregatorTargetAddress: "",
    aggregatorTargetLimit: undefined,
    orderType: 0
  };
}

export const MsgSwap = {
  encode(message: MsgSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.targetAsset !== undefined) {
      Asset.encode(message.targetAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.destination !== "") {
      writer.uint32(26).string(message.destination);
    }

    if (message.tradeTarget !== "") {
      writer.uint32(34).string(message.tradeTarget);
    }

    if (message.affiliateAddress !== "") {
      writer.uint32(42).string(message.affiliateAddress);
    }

    if (message.affiliateBasisPoints !== "") {
      writer.uint32(50).string(message.affiliateBasisPoints);
    }

    if (message.signer.length !== 0) {
      writer.uint32(58).bytes(message.signer);
    }

    if (message.aggregator !== "") {
      writer.uint32(66).string(message.aggregator);
    }

    if (message.aggregatorTargetAddress !== "") {
      writer.uint32(74).string(message.aggregatorTargetAddress);
    }

    if (message.aggregatorTargetLimit !== undefined) {
      writer.uint32(82).string(message.aggregatorTargetLimit);
    }

    if (message.orderType !== 0) {
      writer.uint32(88).int32(message.orderType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.targetAsset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.destination = reader.string();
          break;

        case 4:
          message.tradeTarget = reader.string();
          break;

        case 5:
          message.affiliateAddress = reader.string();
          break;

        case 6:
          message.affiliateBasisPoints = reader.string();
          break;

        case 7:
          message.signer = reader.bytes();
          break;

        case 8:
          message.aggregator = reader.string();
          break;

        case 9:
          message.aggregatorTargetAddress = reader.string();
          break;

        case 10:
          message.aggregatorTargetLimit = reader.string();
          break;

        case 11:
          message.orderType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwap {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      targetAsset: isSet(object.targetAsset) ? Asset.fromJSON(object.targetAsset) : undefined,
      destination: isSet(object.destination) ? String(object.destination) : "",
      tradeTarget: isSet(object.tradeTarget) ? String(object.tradeTarget) : "",
      affiliateAddress: isSet(object.affiliateAddress) ? String(object.affiliateAddress) : "",
      affiliateBasisPoints: isSet(object.affiliateBasisPoints) ? String(object.affiliateBasisPoints) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
      aggregator: isSet(object.aggregator) ? String(object.aggregator) : "",
      aggregatorTargetAddress: isSet(object.aggregatorTargetAddress) ? String(object.aggregatorTargetAddress) : "",
      aggregatorTargetLimit: isSet(object.aggregatorTargetLimit) ? String(object.aggregatorTargetLimit) : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0
    };
  },

  toJSON(message: MsgSwap): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.targetAsset !== undefined && (obj.targetAsset = message.targetAsset ? Asset.toJSON(message.targetAsset) : undefined);
    message.destination !== undefined && (obj.destination = message.destination);
    message.tradeTarget !== undefined && (obj.tradeTarget = message.tradeTarget);
    message.affiliateAddress !== undefined && (obj.affiliateAddress = message.affiliateAddress);
    message.affiliateBasisPoints !== undefined && (obj.affiliateBasisPoints = message.affiliateBasisPoints);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    message.aggregator !== undefined && (obj.aggregator = message.aggregator);
    message.aggregatorTargetAddress !== undefined && (obj.aggregatorTargetAddress = message.aggregatorTargetAddress);
    message.aggregatorTargetLimit !== undefined && (obj.aggregatorTargetLimit = message.aggregatorTargetLimit);
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    return obj;
  },

  fromPartial(object: Partial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.targetAsset = object.targetAsset !== undefined && object.targetAsset !== null ? Asset.fromPartial(object.targetAsset) : undefined;
    message.destination = object.destination ?? "";
    message.tradeTarget = object.tradeTarget ?? "";
    message.affiliateAddress = object.affiliateAddress ?? "";
    message.affiliateBasisPoints = object.affiliateBasisPoints ?? "";
    message.signer = object.signer ?? new Uint8Array();
    message.aggregator = object.aggregator ?? "";
    message.aggregatorTargetAddress = object.aggregatorTargetAddress ?? "";
    message.aggregatorTargetLimit = object.aggregatorTargetLimit ?? undefined;
    message.orderType = object.orderType ?? 0;
    return message;
  }

};