import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NodePauseChain {
  nodeAddress: Uint8Array;
  blockHeight: Long;
}
export interface NodePauseChainSDKType {
  node_address: Uint8Array;
  block_height: Long;
}

function createBaseNodePauseChain(): NodePauseChain {
  return {
    nodeAddress: new Uint8Array(),
    blockHeight: Long.ZERO
  };
}

export const NodePauseChain = {
  encode(message: NodePauseChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress.length !== 0) {
      writer.uint32(10).bytes(message.nodeAddress);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).int64(message.blockHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodePauseChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodePauseChain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nodeAddress = reader.bytes();
          break;

        case 2:
          message.blockHeight = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodePauseChain {
    return {
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO
    };
  },

  toJSON(message: NodePauseChain): unknown {
    const obj: any = {};
    message.nodeAddress !== undefined && (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<NodePauseChain>): NodePauseChain {
    const message = createBaseNodePauseChain();
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    return message;
  }

};