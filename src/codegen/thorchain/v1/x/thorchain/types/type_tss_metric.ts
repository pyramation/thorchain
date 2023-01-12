import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NodeTssTime {
  address: Uint8Array;
  tssTime: Long;
}
export interface NodeTssTimeSDKType {
  address: Uint8Array;
  tss_time: Long;
}
export interface TssKeygenMetric {
  pubKey: string;
  nodeTssTimes: NodeTssTime[];
}
export interface TssKeygenMetricSDKType {
  pub_key: string;
  node_tss_times: NodeTssTimeSDKType[];
}
export interface TssKeysignMetric {
  txId: string;
  nodeTssTimes: NodeTssTime[];
}
export interface TssKeysignMetricSDKType {
  tx_id: string;
  node_tss_times: NodeTssTimeSDKType[];
}

function createBaseNodeTssTime(): NodeTssTime {
  return {
    address: new Uint8Array(),
    tssTime: Long.ZERO
  };
}

export const NodeTssTime = {
  encode(message: NodeTssTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (!message.tssTime.isZero()) {
      writer.uint32(16).int64(message.tssTime);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeTssTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeTssTime();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.tssTime = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NodeTssTime {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      tssTime: isSet(object.tssTime) ? Long.fromValue(object.tssTime) : Long.ZERO
    };
  },

  toJSON(message: NodeTssTime): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.tssTime !== undefined && (obj.tssTime = (message.tssTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<NodeTssTime>): NodeTssTime {
    const message = createBaseNodeTssTime();
    message.address = object.address ?? new Uint8Array();
    message.tssTime = object.tssTime !== undefined && object.tssTime !== null ? Long.fromValue(object.tssTime) : Long.ZERO;
    return message;
  }

};

function createBaseTssKeygenMetric(): TssKeygenMetric {
  return {
    pubKey: "",
    nodeTssTimes: []
  };
}

export const TssKeygenMetric = {
  encode(message: TssKeygenMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== "") {
      writer.uint32(10).string(message.pubKey);
    }

    for (const v of message.nodeTssTimes) {
      NodeTssTime.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TssKeygenMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTssKeygenMetric();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.string();
          break;

        case 2:
          message.nodeTssTimes.push(NodeTssTime.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TssKeygenMetric {
    return {
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      nodeTssTimes: Array.isArray(object?.nodeTssTimes) ? object.nodeTssTimes.map((e: any) => NodeTssTime.fromJSON(e)) : []
    };
  },

  toJSON(message: TssKeygenMetric): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);

    if (message.nodeTssTimes) {
      obj.nodeTssTimes = message.nodeTssTimes.map(e => e ? NodeTssTime.toJSON(e) : undefined);
    } else {
      obj.nodeTssTimes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TssKeygenMetric>): TssKeygenMetric {
    const message = createBaseTssKeygenMetric();
    message.pubKey = object.pubKey ?? "";
    message.nodeTssTimes = object.nodeTssTimes?.map(e => NodeTssTime.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTssKeysignMetric(): TssKeysignMetric {
  return {
    txId: "",
    nodeTssTimes: []
  };
}

export const TssKeysignMetric = {
  encode(message: TssKeysignMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }

    for (const v of message.nodeTssTimes) {
      NodeTssTime.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TssKeysignMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTssKeysignMetric();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;

        case 2:
          message.nodeTssTimes.push(NodeTssTime.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TssKeysignMetric {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      nodeTssTimes: Array.isArray(object?.nodeTssTimes) ? object.nodeTssTimes.map((e: any) => NodeTssTime.fromJSON(e)) : []
    };
  },

  toJSON(message: TssKeysignMetric): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);

    if (message.nodeTssTimes) {
      obj.nodeTssTimes = message.nodeTssTimes.map(e => e ? NodeTssTime.toJSON(e) : undefined);
    } else {
      obj.nodeTssTimes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TssKeysignMetric>): TssKeysignMetric {
    const message = createBaseTssKeysignMetric();
    message.txId = object.txId ?? "";
    message.nodeTssTimes = object.nodeTssTimes?.map(e => NodeTssTime.fromPartial(e)) || [];
    return message;
  }

};