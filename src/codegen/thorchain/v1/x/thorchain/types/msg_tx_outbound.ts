import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgOutboundTx {
  tx?: ObservedTx;
  inTxId: string;
  signer: Uint8Array;
}
export interface MsgOutboundTxSDKType {
  tx?: ObservedTxSDKType;
  in_tx_id: string;
  signer: Uint8Array;
}

function createBaseMsgOutboundTx(): MsgOutboundTx {
  return {
    tx: undefined,
    inTxId: "",
    signer: new Uint8Array()
  };
}

export const MsgOutboundTx = {
  encode(message: MsgOutboundTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      ObservedTx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.inTxId !== "") {
      writer.uint32(18).string(message.inTxId);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOutboundTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOutboundTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = ObservedTx.decode(reader, reader.uint32());
          break;

        case 2:
          message.inTxId = reader.string();
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgOutboundTx {
    return {
      tx: isSet(object.tx) ? ObservedTx.fromJSON(object.tx) : undefined,
      inTxId: isSet(object.inTxId) ? String(object.inTxId) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgOutboundTx): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? ObservedTx.toJSON(message.tx) : undefined);
    message.inTxId !== undefined && (obj.inTxId = message.inTxId);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgOutboundTx>): MsgOutboundTx {
    const message = createBaseMsgOutboundTx();
    message.tx = object.tx !== undefined && object.tx !== null ? ObservedTx.fromPartial(object.tx) : undefined;
    message.inTxId = object.inTxId ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};