import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface Node {
  pubkey: string;
  blameData: Uint8Array;
  blameSignature: Uint8Array;
}
export interface NodeSDKType {
  pubkey: string;
  blame_data: Uint8Array;
  blame_signature: Uint8Array;
}
export interface Blame {
  failReason: string;
  isUnicast: boolean;
  blameNodes: Node[];
}
export interface BlameSDKType {
  fail_reason: string;
  is_unicast: boolean;
  blame_nodes: NodeSDKType[];
}

function createBaseNode(): Node {
  return {
    pubkey: "",
    blameData: new Uint8Array(),
    blameSignature: new Uint8Array()
  };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubkey !== "") {
      writer.uint32(10).string(message.pubkey);
    }

    if (message.blameData.length !== 0) {
      writer.uint32(18).bytes(message.blameData);
    }

    if (message.blameSignature.length !== 0) {
      writer.uint32(26).bytes(message.blameSignature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubkey = reader.string();
          break;

        case 2:
          message.blameData = reader.bytes();
          break;

        case 3:
          message.blameSignature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Node {
    return {
      pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
      blameData: isSet(object.blameData) ? bytesFromBase64(object.blameData) : new Uint8Array(),
      blameSignature: isSet(object.blameSignature) ? bytesFromBase64(object.blameSignature) : new Uint8Array()
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.blameData !== undefined && (obj.blameData = base64FromBytes(message.blameData !== undefined ? message.blameData : new Uint8Array()));
    message.blameSignature !== undefined && (obj.blameSignature = base64FromBytes(message.blameSignature !== undefined ? message.blameSignature : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<Node>): Node {
    const message = createBaseNode();
    message.pubkey = object.pubkey ?? "";
    message.blameData = object.blameData ?? new Uint8Array();
    message.blameSignature = object.blameSignature ?? new Uint8Array();
    return message;
  }

};

function createBaseBlame(): Blame {
  return {
    failReason: "",
    isUnicast: false,
    blameNodes: []
  };
}

export const Blame = {
  encode(message: Blame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.failReason !== "") {
      writer.uint32(10).string(message.failReason);
    }

    if (message.isUnicast === true) {
      writer.uint32(16).bool(message.isUnicast);
    }

    for (const v of message.blameNodes) {
      Node.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Blame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlame();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.failReason = reader.string();
          break;

        case 2:
          message.isUnicast = reader.bool();
          break;

        case 3:
          message.blameNodes.push(Node.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Blame {
    return {
      failReason: isSet(object.failReason) ? String(object.failReason) : "",
      isUnicast: isSet(object.isUnicast) ? Boolean(object.isUnicast) : false,
      blameNodes: Array.isArray(object?.blameNodes) ? object.blameNodes.map((e: any) => Node.fromJSON(e)) : []
    };
  },

  toJSON(message: Blame): unknown {
    const obj: any = {};
    message.failReason !== undefined && (obj.failReason = message.failReason);
    message.isUnicast !== undefined && (obj.isUnicast = message.isUnicast);

    if (message.blameNodes) {
      obj.blameNodes = message.blameNodes.map(e => e ? Node.toJSON(e) : undefined);
    } else {
      obj.blameNodes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Blame>): Blame {
    const message = createBaseBlame();
    message.failReason = object.failReason ?? "";
    message.isUnicast = object.isUnicast ?? false;
    message.blameNodes = object.blameNodes?.map(e => Node.fromPartial(e)) || [];
    return message;
  }

};