import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgNetworkFee {
  blockHeight: Long;
  chain: string;
  transactionSize: Long;
  transactionFeeRate: Long;
  signer: Uint8Array;
}
export interface MsgNetworkFeeSDKType {
  block_height: Long;
  chain: string;
  transaction_size: Long;
  transaction_fee_rate: Long;
  signer: Uint8Array;
}

function createBaseMsgNetworkFee(): MsgNetworkFee {
  return {
    blockHeight: Long.ZERO,
    chain: "",
    transactionSize: Long.UZERO,
    transactionFeeRate: Long.UZERO,
    signer: new Uint8Array()
  };
}

export const MsgNetworkFee = {
  encode(message: MsgNetworkFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }

    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }

    if (!message.transactionSize.isZero()) {
      writer.uint32(24).uint64(message.transactionSize);
    }

    if (!message.transactionFeeRate.isZero()) {
      writer.uint32(32).uint64(message.transactionFeeRate);
    }

    if (message.signer.length !== 0) {
      writer.uint32(42).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNetworkFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNetworkFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 2:
          message.chain = reader.string();
          break;

        case 3:
          message.transactionSize = (reader.uint64() as Long);
          break;

        case 4:
          message.transactionFeeRate = (reader.uint64() as Long);
          break;

        case 5:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgNetworkFee {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      chain: isSet(object.chain) ? String(object.chain) : "",
      transactionSize: isSet(object.transactionSize) ? Long.fromValue(object.transactionSize) : Long.UZERO,
      transactionFeeRate: isSet(object.transactionFeeRate) ? Long.fromValue(object.transactionFeeRate) : Long.UZERO,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgNetworkFee): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.chain !== undefined && (obj.chain = message.chain);
    message.transactionSize !== undefined && (obj.transactionSize = (message.transactionSize || Long.UZERO).toString());
    message.transactionFeeRate !== undefined && (obj.transactionFeeRate = (message.transactionFeeRate || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgNetworkFee>): MsgNetworkFee {
    const message = createBaseMsgNetworkFee();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.chain = object.chain ?? "";
    message.transactionSize = object.transactionSize !== undefined && object.transactionSize !== null ? Long.fromValue(object.transactionSize) : Long.UZERO;
    message.transactionFeeRate = object.transactionFeeRate !== undefined && object.transactionFeeRate !== null ? Long.fromValue(object.transactionFeeRate) : Long.UZERO;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};