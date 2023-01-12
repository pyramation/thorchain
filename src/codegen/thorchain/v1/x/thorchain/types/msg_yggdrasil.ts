import { Tx, TxSDKType, Coin, CoinSDKType } from "../../../common/common";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgYggdrasil {
  tx?: Tx;
  pubKey: string;
  addFunds: boolean;
  coins: Coin[];
  blockHeight: Long;
  signer: Uint8Array;
}
export interface MsgYggdrasilSDKType {
  tx?: TxSDKType;
  pub_key: string;
  add_funds: boolean;
  coins: CoinSDKType[];
  block_height: Long;
  signer: Uint8Array;
}

function createBaseMsgYggdrasil(): MsgYggdrasil {
  return {
    tx: undefined,
    pubKey: "",
    addFunds: false,
    coins: [],
    blockHeight: Long.ZERO,
    signer: new Uint8Array()
  };
}

export const MsgYggdrasil = {
  encode(message: MsgYggdrasil, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }

    if (message.addFunds === true) {
      writer.uint32(24).bool(message.addFunds);
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(40).int64(message.blockHeight);
    }

    if (message.signer.length !== 0) {
      writer.uint32(50).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgYggdrasil {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgYggdrasil();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.pubKey = reader.string();
          break;

        case 3:
          message.addFunds = reader.bool();
          break;

        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.blockHeight = (reader.int64() as Long);
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

  fromJSON(object: any): MsgYggdrasil {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      addFunds: isSet(object.addFunds) ? Boolean(object.addFunds) : false,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgYggdrasil): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.addFunds !== undefined && (obj.addFunds = message.addFunds);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgYggdrasil>): MsgYggdrasil {
    const message = createBaseMsgYggdrasil();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.pubKey = object.pubKey ?? "";
    message.addFunds = object.addFunds ?? false;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};