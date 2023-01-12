import { Blame, BlameSDKType } from "./type_blame";
import { Coin, CoinSDKType } from "../../../common/common";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgTssKeysignFail {
  id: string;
  height: Long;
  blame?: Blame;
  memo: string;
  coins: Coin[];
  pubKey: string;
  signer: Uint8Array;
}
export interface MsgTssKeysignFailSDKType {
  id: string;
  height: Long;
  blame?: BlameSDKType;
  memo: string;
  coins: CoinSDKType[];
  pub_key: string;
  signer: Uint8Array;
}

function createBaseMsgTssKeysignFail(): MsgTssKeysignFail {
  return {
    id: "",
    height: Long.ZERO,
    blame: undefined,
    memo: "",
    coins: [],
    pubKey: "",
    signer: new Uint8Array()
  };
}

export const MsgTssKeysignFail = {
  encode(message: MsgTssKeysignFail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.blame !== undefined) {
      Blame.encode(message.blame, writer.uint32(26).fork()).ldelim();
    }

    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.pubKey !== "") {
      writer.uint32(50).string(message.pubKey);
    }

    if (message.signer.length !== 0) {
      writer.uint32(58).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTssKeysignFail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTssKeysignFail();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        case 3:
          message.blame = Blame.decode(reader, reader.uint32());
          break;

        case 4:
          message.memo = reader.string();
          break;

        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.pubKey = reader.string();
          break;

        case 7:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgTssKeysignFail {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      blame: isSet(object.blame) ? Blame.fromJSON(object.blame) : undefined,
      memo: isSet(object.memo) ? String(object.memo) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgTssKeysignFail): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.blame !== undefined && (obj.blame = message.blame ? Blame.toJSON(message.blame) : undefined);
    message.memo !== undefined && (obj.memo = message.memo);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgTssKeysignFail>): MsgTssKeysignFail {
    const message = createBaseMsgTssKeysignFail();
    message.id = object.id ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.blame = object.blame !== undefined && object.blame !== null ? Blame.fromPartial(object.blame) : undefined;
    message.memo = object.memo ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.pubKey = object.pubKey ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};