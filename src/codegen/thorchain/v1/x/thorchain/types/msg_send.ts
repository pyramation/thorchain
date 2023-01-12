import { Coin, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgSend {
  fromAddress: Uint8Array;
  toAddress: Uint8Array;
  amount: Coin[];
}
export interface MsgSendSDKType {
  from_address: Uint8Array;
  to_address: Uint8Array;
  amount: CoinSDKType[];
}

function createBaseMsgSend(): MsgSend {
  return {
    fromAddress: new Uint8Array(),
    toAddress: new Uint8Array(),
    amount: []
  };
}

export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress.length !== 0) {
      writer.uint32(10).bytes(message.fromAddress);
    }

    if (message.toAddress.length !== 0) {
      writer.uint32(18).bytes(message.toAddress);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.bytes();
          break;

        case 2:
          message.toAddress = reader.bytes();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      fromAddress: isSet(object.fromAddress) ? bytesFromBase64(object.fromAddress) : new Uint8Array(),
      toAddress: isSet(object.toAddress) ? bytesFromBase64(object.toAddress) : new Uint8Array(),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = base64FromBytes(message.fromAddress !== undefined ? message.fromAddress : new Uint8Array()));
    message.toAddress !== undefined && (obj.toAddress = base64FromBytes(message.toAddress !== undefined ? message.toAddress : new Uint8Array()));

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.fromAddress = object.fromAddress ?? new Uint8Array();
    message.toAddress = object.toAddress ?? new Uint8Array();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};