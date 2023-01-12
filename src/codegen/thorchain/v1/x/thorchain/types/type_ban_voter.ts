import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BanVoter {
  nodeAddress: Uint8Array;
  blockHeight: Long;
  signers: string[];
}
export interface BanVoterSDKType {
  node_address: Uint8Array;
  block_height: Long;
  signers: string[];
}

function createBaseBanVoter(): BanVoter {
  return {
    nodeAddress: new Uint8Array(),
    blockHeight: Long.ZERO,
    signers: []
  };
}

export const BanVoter = {
  encode(message: BanVoter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress.length !== 0) {
      writer.uint32(10).bytes(message.nodeAddress);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).int64(message.blockHeight);
    }

    for (const v of message.signers) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BanVoter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBanVoter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nodeAddress = reader.bytes();
          break;

        case 2:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 3:
          message.signers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BanVoter {
    return {
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: BanVoter): unknown {
    const obj: any = {};
    message.nodeAddress !== undefined && (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());

    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }

    return obj;
  },

  fromPartial(object: Partial<BanVoter>): BanVoter {
    const message = createBaseBanVoter();
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.signers = object.signers?.map(e => e) || [];
    return message;
  }

};