import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ProtoInt64 {
  value: Long;
}
export interface ProtoInt64SDKType {
  value: Long;
}
export interface ProtoUint64 {
  value: Long;
}
export interface ProtoUint64SDKType {
  value: Long;
}
export interface ProtoAccAddresses {
  value: Uint8Array[];
}
export interface ProtoAccAddressesSDKType {
  value: Uint8Array[];
}
export interface ProtoStrings {
  value: string[];
}
export interface ProtoStringsSDKType {
  value: string[];
}
export interface ProtoBools {
  value: boolean[];
}
export interface ProtoBoolsSDKType {
  value: boolean[];
}

function createBaseProtoInt64(): ProtoInt64 {
  return {
    value: Long.ZERO
  };
}

export const ProtoInt64 = {
  encode(message: ProtoInt64, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).int64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoInt64 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoInt64();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProtoInt64 {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO
    };
  },

  toJSON(message: ProtoInt64): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<ProtoInt64>): ProtoInt64 {
    const message = createBaseProtoInt64();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  }

};

function createBaseProtoUint64(): ProtoUint64 {
  return {
    value: Long.UZERO
  };
}

export const ProtoUint64 = {
  encode(message: ProtoUint64, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoUint64 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoUint64();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProtoUint64 {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },

  toJSON(message: ProtoUint64): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<ProtoUint64>): ProtoUint64 {
    const message = createBaseProtoUint64();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }

};

function createBaseProtoAccAddresses(): ProtoAccAddresses {
  return {
    value: []
  };
}

export const ProtoAccAddresses = {
  encode(message: ProtoAccAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoAccAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoAccAddresses();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProtoAccAddresses {
    return {
      value: Array.isArray(object?.value) ? object.value.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: ProtoAccAddresses): unknown {
    const obj: any = {};

    if (message.value) {
      obj.value = message.value.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.value = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ProtoAccAddresses>): ProtoAccAddresses {
    const message = createBaseProtoAccAddresses();
    message.value = object.value?.map(e => e) || [];
    return message;
  }

};

function createBaseProtoStrings(): ProtoStrings {
  return {
    value: []
  };
}

export const ProtoStrings = {
  encode(message: ProtoStrings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoStrings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoStrings();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProtoStrings {
    return {
      value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ProtoStrings): unknown {
    const obj: any = {};

    if (message.value) {
      obj.value = message.value.map(e => e);
    } else {
      obj.value = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ProtoStrings>): ProtoStrings {
    const message = createBaseProtoStrings();
    message.value = object.value?.map(e => e) || [];
    return message;
  }

};

function createBaseProtoBools(): ProtoBools {
  return {
    value: []
  };
}

export const ProtoBools = {
  encode(message: ProtoBools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.value) {
      writer.bool(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoBools {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoBools();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.value.push(reader.bool());
            }
          } else {
            message.value.push(reader.bool());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProtoBools {
    return {
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Boolean(e)) : []
    };
  },

  toJSON(message: ProtoBools): unknown {
    const obj: any = {};

    if (message.value) {
      obj.value = message.value.map(e => e);
    } else {
      obj.value = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ProtoBools>): ProtoBools {
    const message = createBaseProtoBools();
    message.value = object.value?.map(e => e) || [];
    return message;
  }

};