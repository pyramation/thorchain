import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Jail {
  nodeAddress: Uint8Array;
  releaseHeight: Long;
  reason: string;
}
export interface JailSDKType {
  node_address: Uint8Array;
  release_height: Long;
  reason: string;
}

function createBaseJail(): Jail {
  return {
    nodeAddress: new Uint8Array(),
    releaseHeight: Long.ZERO,
    reason: ""
  };
}

export const Jail = {
  encode(message: Jail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress.length !== 0) {
      writer.uint32(10).bytes(message.nodeAddress);
    }

    if (!message.releaseHeight.isZero()) {
      writer.uint32(16).int64(message.releaseHeight);
    }

    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Jail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJail();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nodeAddress = reader.bytes();
          break;

        case 2:
          message.releaseHeight = (reader.int64() as Long);
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

  fromJSON(object: any): Jail {
    return {
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      releaseHeight: isSet(object.releaseHeight) ? Long.fromValue(object.releaseHeight) : Long.ZERO,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },

  toJSON(message: Jail): unknown {
    const obj: any = {};
    message.nodeAddress !== undefined && (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.releaseHeight !== undefined && (obj.releaseHeight = (message.releaseHeight || Long.ZERO).toString());
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: Partial<Jail>): Jail {
    const message = createBaseJail();
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
    message.releaseHeight = object.releaseHeight !== undefined && object.releaseHeight !== null ? Long.fromValue(object.releaseHeight) : Long.ZERO;
    message.reason = object.reason ?? "";
    return message;
  }

};