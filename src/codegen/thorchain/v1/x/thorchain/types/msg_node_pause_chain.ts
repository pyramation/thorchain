import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgNodePauseChain {
  value: Long;
  signer: Uint8Array;
}
export interface MsgNodePauseChainSDKType {
  value: Long;
  signer: Uint8Array;
}

function createBaseMsgNodePauseChain(): MsgNodePauseChain {
  return {
    value: Long.ZERO,
    signer: new Uint8Array()
  };
}

export const MsgNodePauseChain = {
  encode(message: MsgNodePauseChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).int64(message.value);
    }

    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNodePauseChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNodePauseChain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = (reader.int64() as Long);
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

  fromJSON(object: any): MsgNodePauseChain {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgNodePauseChain): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgNodePauseChain>): MsgNodePauseChain {
    const message = createBaseMsgNodePauseChain();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};