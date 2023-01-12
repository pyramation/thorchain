import { Coin, CoinSDKType } from "../../../common/common";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSolvency {
  id: string;
  chain: string;
  pubKey: string;
  coins: Coin[];
  height: Long;
  signer: Uint8Array;
}
export interface MsgSolvencySDKType {
  id: string;
  chain: string;
  pub_key: string;
  coins: CoinSDKType[];
  height: Long;
  signer: Uint8Array;
}

function createBaseMsgSolvency(): MsgSolvency {
  return {
    id: "",
    chain: "",
    pubKey: "",
    coins: [],
    height: Long.ZERO,
    signer: new Uint8Array()
  };
}

export const MsgSolvency = {
  encode(message: MsgSolvency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }

    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }

    if (message.signer.length !== 0) {
      writer.uint32(50).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSolvency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSolvency();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.chain = reader.string();
          break;

        case 3:
          message.pubKey = reader.string();
          break;

        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.height = (reader.int64() as Long);
          break;

        case 6:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSolvency {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgSolvency): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.chain !== undefined && (obj.chain = message.chain);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgSolvency>): MsgSolvency {
    const message = createBaseMsgSolvency();
    message.id = object.id ?? "";
    message.chain = object.chain ?? "";
    message.pubKey = object.pubKey ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};