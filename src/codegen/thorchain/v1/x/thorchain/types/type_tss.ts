import { Long, isSet } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TssVoter {
  id: string;
  poolPubKey: string;
  pubKeys: string[];
  blockHeight: Long;
  chains: string[];
  signers: string[];
  majorityConsensusBlockHeight: Long;
}
export interface TssVoterSDKType {
  id: string;
  pool_pub_key: string;
  pub_keys: string[];
  block_height: Long;
  chains: string[];
  signers: string[];
  majority_consensus_block_height: Long;
}

function createBaseTssVoter(): TssVoter {
  return {
    id: "",
    poolPubKey: "",
    pubKeys: [],
    blockHeight: Long.ZERO,
    chains: [],
    signers: [],
    majorityConsensusBlockHeight: Long.ZERO
  };
}

export const TssVoter = {
  encode(message: TssVoter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.poolPubKey !== "") {
      writer.uint32(18).string(message.poolPubKey);
    }

    for (const v of message.pubKeys) {
      writer.uint32(26).string(v!);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(32).int64(message.blockHeight);
    }

    for (const v of message.chains) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.signers) {
      writer.uint32(50).string(v!);
    }

    if (!message.majorityConsensusBlockHeight.isZero()) {
      writer.uint32(56).int64(message.majorityConsensusBlockHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TssVoter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTssVoter();

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
          message.pubKeys.push(reader.string());
          break;

        case 4:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 5:
          message.chains.push(reader.string());
          break;

        case 6:
          message.signers.push(reader.string());
          break;

        case 7:
          message.majorityConsensusBlockHeight = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TssVoter {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      poolPubKey: isSet(object.poolPubKey) ? String(object.poolPubKey) : "",
      pubKeys: Array.isArray(object?.pubKeys) ? object.pubKeys.map((e: any) => String(e)) : [],
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : [],
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
      majorityConsensusBlockHeight: isSet(object.majorityConsensusBlockHeight) ? Long.fromValue(object.majorityConsensusBlockHeight) : Long.ZERO
    };
  },

  toJSON(message: TssVoter): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.poolPubKey !== undefined && (obj.poolPubKey = message.poolPubKey);

    if (message.pubKeys) {
      obj.pubKeys = message.pubKeys.map(e => e);
    } else {
      obj.pubKeys = [];
    }

    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());

    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }

    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }

    message.majorityConsensusBlockHeight !== undefined && (obj.majorityConsensusBlockHeight = (message.majorityConsensusBlockHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<TssVoter>): TssVoter {
    const message = createBaseTssVoter();
    message.id = object.id ?? "";
    message.poolPubKey = object.poolPubKey ?? "";
    message.pubKeys = object.pubKeys?.map(e => e) || [];
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.chains = object.chains?.map(e => e) || [];
    message.signers = object.signers?.map(e => e) || [];
    message.majorityConsensusBlockHeight = object.majorityConsensusBlockHeight !== undefined && object.majorityConsensusBlockHeight !== null ? Long.fromValue(object.majorityConsensusBlockHeight) : Long.ZERO;
    return message;
  }

};