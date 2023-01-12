import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NodeMimir {
  key: string;
  value: Long;
  signer: Uint8Array;
}
export interface NodeMimirSDKType {
  key: string;
  value: Long;
  signer: Uint8Array;
}
export interface NodeMimirs {
  mimirs: NodeMimir[];
}
export interface NodeMimirsSDKType {
  mimirs: NodeMimirSDKType[];
}

function createBaseNodeMimir(): NodeMimir {
  return {
    key: "",
    value: Long.ZERO,
    signer: new Uint8Array()
  };
}

export const NodeMimir = {
  encode(message: NodeMimir, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeMimir {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeMimir();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = (reader.int64() as Long);
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

  fromJSON(object: any): NodeMimir {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: NodeMimir): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<NodeMimir>): NodeMimir {
    const message = createBaseNodeMimir();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseNodeMimirs(): NodeMimirs {
  return {
    mimirs: []
  };
}

export const NodeMimirs = {
  encode(message: NodeMimirs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mimirs) {
      NodeMimir.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeMimirs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeMimirs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mimirs.push(NodeMimir.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeMimirs {
    return {
      mimirs: Array.isArray(object?.mimirs) ? object.mimirs.map((e: any) => NodeMimir.fromJSON(e)) : []
    };
  },

  toJSON(message: NodeMimirs): unknown {
    const obj: any = {};

    if (message.mimirs) {
      obj.mimirs = message.mimirs.map(e => e ? NodeMimir.toJSON(e) : undefined);
    } else {
      obj.mimirs = [];
    }

    return obj;
  },

  fromPartial(object: Partial<NodeMimirs>): NodeMimirs {
    const message = createBaseNodeMimirs();
    message.mimirs = object.mimirs?.map(e => NodeMimir.fromPartial(e)) || [];
    return message;
  }

};