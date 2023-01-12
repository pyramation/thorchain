import { KeygenType, keygenTypeFromJSON, keygenTypeToJSON } from "./type_keygen";
import { Blame, BlameSDKType } from "./type_blame";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgTssPool {
  id: string;
  poolPubKey: string;
  keygenType: KeygenType;
  pubKeys: string[];
  height: Long;
  blame?: Blame;
  chains: string[];
  signer: Uint8Array;
  keygenTime: Long;
}
export interface MsgTssPoolSDKType {
  id: string;
  pool_pub_key: string;
  keygen_type: KeygenType;
  pub_keys: string[];
  height: Long;
  blame?: BlameSDKType;
  chains: string[];
  signer: Uint8Array;
  keygen_time: Long;
}

function createBaseMsgTssPool(): MsgTssPool {
  return {
    id: "",
    poolPubKey: "",
    keygenType: 0,
    pubKeys: [],
    height: Long.ZERO,
    blame: undefined,
    chains: [],
    signer: new Uint8Array(),
    keygenTime: Long.ZERO
  };
}

export const MsgTssPool = {
  encode(message: MsgTssPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.poolPubKey !== "") {
      writer.uint32(18).string(message.poolPubKey);
    }

    if (message.keygenType !== 0) {
      writer.uint32(24).int32(message.keygenType);
    }

    for (const v of message.pubKeys) {
      writer.uint32(34).string(v!);
    }

    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }

    if (message.blame !== undefined) {
      Blame.encode(message.blame, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.chains) {
      writer.uint32(58).string(v!);
    }

    if (message.signer.length !== 0) {
      writer.uint32(66).bytes(message.signer);
    }

    if (!message.keygenTime.isZero()) {
      writer.uint32(72).int64(message.keygenTime);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTssPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTssPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.poolPubKey = reader.string();
          break;

        case 3:
          message.keygenType = (reader.int32() as any);
          break;

        case 4:
          message.pubKeys.push(reader.string());
          break;

        case 5:
          message.height = (reader.int64() as Long);
          break;

        case 6:
          message.blame = Blame.decode(reader, reader.uint32());
          break;

        case 7:
          message.chains.push(reader.string());
          break;

        case 8:
          message.signer = reader.bytes();
          break;

        case 9:
          message.keygenTime = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgTssPool {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      poolPubKey: isSet(object.poolPubKey) ? String(object.poolPubKey) : "",
      keygenType: isSet(object.keygenType) ? keygenTypeFromJSON(object.keygenType) : 0,
      pubKeys: Array.isArray(object?.pubKeys) ? object.pubKeys.map((e: any) => String(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      blame: isSet(object.blame) ? Blame.fromJSON(object.blame) : undefined,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : [],
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
      keygenTime: isSet(object.keygenTime) ? Long.fromValue(object.keygenTime) : Long.ZERO
    };
  },

  toJSON(message: MsgTssPool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.poolPubKey !== undefined && (obj.poolPubKey = message.poolPubKey);
    message.keygenType !== undefined && (obj.keygenType = keygenTypeToJSON(message.keygenType));

    if (message.pubKeys) {
      obj.pubKeys = message.pubKeys.map(e => e);
    } else {
      obj.pubKeys = [];
    }

    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.blame !== undefined && (obj.blame = message.blame ? Blame.toJSON(message.blame) : undefined);

    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }

    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    message.keygenTime !== undefined && (obj.keygenTime = (message.keygenTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgTssPool>): MsgTssPool {
    const message = createBaseMsgTssPool();
    message.id = object.id ?? "";
    message.poolPubKey = object.poolPubKey ?? "";
    message.keygenType = object.keygenType ?? 0;
    message.pubKeys = object.pubKeys?.map(e => e) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.blame = object.blame !== undefined && object.blame !== null ? Blame.fromPartial(object.blame) : undefined;
    message.chains = object.chains?.map(e => e) || [];
    message.signer = object.signer ?? new Uint8Array();
    message.keygenTime = object.keygenTime !== undefined && object.keygenTime !== null ? Long.fromValue(object.keygenTime) : Long.ZERO;
    return message;
  }

};