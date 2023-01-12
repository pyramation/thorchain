import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgNoOp {
  observedTx?: ObservedTx;
  signer: Uint8Array;
  action: string;
}
export interface MsgNoOpSDKType {
  observed_tx?: ObservedTxSDKType;
  signer: Uint8Array;
  action: string;
}

function createBaseMsgNoOp(): MsgNoOp {
  return {
    observedTx: undefined,
    signer: new Uint8Array(),
    action: ""
  };
}

export const MsgNoOp = {
  encode(message: MsgNoOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.observedTx !== undefined) {
      ObservedTx.encode(message.observedTx, writer.uint32(10).fork()).ldelim();
    }

    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }

    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNoOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNoOp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.observedTx = ObservedTx.decode(reader, reader.uint32());
          break;

        case 2:
          message.signer = reader.bytes();
          break;

        case 3:
          message.action = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgNoOp {
    return {
      observedTx: isSet(object.observedTx) ? ObservedTx.fromJSON(object.observedTx) : undefined,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
      action: isSet(object.action) ? String(object.action) : ""
    };
  },

  toJSON(message: MsgNoOp): unknown {
    const obj: any = {};
    message.observedTx !== undefined && (obj.observedTx = message.observedTx ? ObservedTx.toJSON(message.observedTx) : undefined);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial(object: Partial<MsgNoOp>): MsgNoOp {
    const message = createBaseMsgNoOp();
    message.observedTx = object.observedTx !== undefined && object.observedTx !== null ? ObservedTx.fromPartial(object.observedTx) : undefined;
    message.signer = object.signer ?? new Uint8Array();
    message.action = object.action ?? "";
    return message;
  }

};