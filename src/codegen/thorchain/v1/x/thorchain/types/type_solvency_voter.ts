import { Coin, CoinSDKType } from "../../../common/common";
import { Long, isSet } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SolvencyVoter {
  id: string;
  chain: string;
  pubKey: string;
  coins: Coin[];
  height: Long;
  consensusBlockHeight: Long;
  signers: string[];
}
export interface SolvencyVoterSDKType {
  id: string;
  chain: string;
  pub_key: string;
  coins: CoinSDKType[];
  height: Long;
  consensus_block_height: Long;
  signers: string[];
}

function createBaseSolvencyVoter(): SolvencyVoter {
  return {
    id: "",
    chain: "",
    pubKey: "",
    coins: [],
    height: Long.ZERO,
    consensusBlockHeight: Long.ZERO,
    signers: []
  };
}

export const SolvencyVoter = {
  encode(message: SolvencyVoter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.consensusBlockHeight.isZero()) {
      writer.uint32(48).int64(message.consensusBlockHeight);
    }

    for (const v of message.signers) {
      writer.uint32(58).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SolvencyVoter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolvencyVoter();

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
          message.consensusBlockHeight = (reader.int64() as Long);
          break;

        case 7:
          message.signers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SolvencyVoter {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      consensusBlockHeight: isSet(object.consensusBlockHeight) ? Long.fromValue(object.consensusBlockHeight) : Long.ZERO,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: SolvencyVoter): unknown {
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
    message.consensusBlockHeight !== undefined && (obj.consensusBlockHeight = (message.consensusBlockHeight || Long.ZERO).toString());

    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }

    return obj;
  },

  fromPartial(object: Partial<SolvencyVoter>): SolvencyVoter {
    const message = createBaseSolvencyVoter();
    message.id = object.id ?? "";
    message.chain = object.chain ?? "";
    message.pubKey = object.pubKey ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.consensusBlockHeight = object.consensusBlockHeight !== undefined && object.consensusBlockHeight !== null ? Long.fromValue(object.consensusBlockHeight) : Long.ZERO;
    message.signers = object.signers?.map(e => e) || [];
    return message;
  }

};