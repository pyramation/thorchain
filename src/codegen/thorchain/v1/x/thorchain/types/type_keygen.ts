import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../../../helpers";
export enum KeygenType {
  UnknownKeygen = 0,
  AsgardKeygen = 1,
  YggdrasilKeygen = 2,
  UNRECOGNIZED = -1,
}
export const KeygenTypeSDKType = KeygenType;
export function keygenTypeFromJSON(object: any): KeygenType {
  switch (object) {
    case 0:
    case "UnknownKeygen":
      return KeygenType.UnknownKeygen;

    case 1:
    case "AsgardKeygen":
      return KeygenType.AsgardKeygen;

    case 2:
    case "YggdrasilKeygen":
      return KeygenType.YggdrasilKeygen;

    case -1:
    case "UNRECOGNIZED":
    default:
      return KeygenType.UNRECOGNIZED;
  }
}
export function keygenTypeToJSON(object: KeygenType): string {
  switch (object) {
    case KeygenType.UnknownKeygen:
      return "UnknownKeygen";

    case KeygenType.AsgardKeygen:
      return "AsgardKeygen";

    case KeygenType.YggdrasilKeygen:
      return "YggdrasilKeygen";

    case KeygenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Keygen {
  id: string;
  type: KeygenType;
  members: string[];
}
export interface KeygenSDKType {
  id: string;
  type: KeygenType;
  members: string[];
}
export interface KeygenBlock {
  height: Long;
  keygens: Keygen[];
}
export interface KeygenBlockSDKType {
  height: Long;
  keygens: KeygenSDKType[];
}

function createBaseKeygen(): Keygen {
  return {
    id: "",
    type: 0,
    members: []
  };
}

export const Keygen = {
  encode(message: Keygen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }

    for (const v of message.members) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Keygen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygen();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.type = (reader.int32() as any);
          break;

        case 3:
          message.members.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Keygen {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? keygenTypeFromJSON(object.type) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Keygen): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = keygenTypeToJSON(message.type));

    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Keygen>): Keygen {
    const message = createBaseKeygen();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    message.members = object.members?.map(e => e) || [];
    return message;
  }

};

function createBaseKeygenBlock(): KeygenBlock {
  return {
    height: Long.ZERO,
    keygens: []
  };
}

export const KeygenBlock = {
  encode(message: KeygenBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    for (const v of message.keygens) {
      Keygen.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        case 4:
          message.keygens.push(Keygen.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeygenBlock {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      keygens: Array.isArray(object?.keygens) ? object.keygens.map((e: any) => Keygen.fromJSON(e)) : []
    };
  },

  toJSON(message: KeygenBlock): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());

    if (message.keygens) {
      obj.keygens = message.keygens.map(e => e ? Keygen.toJSON(e) : undefined);
    } else {
      obj.keygens = [];
    }

    return obj;
  },

  fromPartial(object: Partial<KeygenBlock>): KeygenBlock {
    const message = createBaseKeygenBlock();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.keygens = object.keygens?.map(e => Keygen.fromPartial(e)) || [];
    return message;
  }

};