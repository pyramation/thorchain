import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgObservedTxOut {
  txs: ObservedTx[];
  signer: Uint8Array;
}
export interface MsgObservedTxOutSDKType {
  txs: ObservedTxSDKType[];
  signer: Uint8Array;
}

function createBaseMsgObservedTxOut(): MsgObservedTxOut {
  return {
    txs: [],
    signer: new Uint8Array()
  };
}

export const MsgObservedTxOut = {
  encode(message: MsgObservedTxOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      ObservedTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgObservedTxOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgObservedTxOut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(ObservedTx.decode(reader, reader.uint32()));
          break;

        case 2:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgObservedTxOut {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => ObservedTx.fromJSON(e)) : [],
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgObservedTxOut): unknown {
    const obj: any = {};

    if (message.txs) {
      obj.txs = message.txs.map(e => e ? ObservedTx.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }

    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgObservedTxOut>): MsgObservedTxOut {
    const message = createBaseMsgObservedTxOut();
    message.txs = object.txs?.map(e => ObservedTx.fromPartial(e)) || [];
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};