import { Long, isSet } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Network {
  bondRewardRune: string;
  totalBondUnits: string;
  burnedBep2Rune: string;
  burnedErc20Rune: string;
  LPIncomeSplit: Long;
  NodeIncomeSplit: Long;
}
export interface NetworkSDKType {
  bond_reward_rune: string;
  total_bond_units: string;
  burned_bep2_rune: string;
  burned_erc20_rune: string;
  LPIncomeSplit: Long;
  NodeIncomeSplit: Long;
}

function createBaseNetwork(): Network {
  return {
    bondRewardRune: "",
    totalBondUnits: "",
    burnedBep2Rune: "",
    burnedErc20Rune: "",
    LPIncomeSplit: Long.ZERO,
    NodeIncomeSplit: Long.ZERO
  };
}

export const Network = {
  encode(message: Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondRewardRune !== "") {
      writer.uint32(10).string(message.bondRewardRune);
    }

    if (message.totalBondUnits !== "") {
      writer.uint32(18).string(message.totalBondUnits);
    }

    if (message.burnedBep2Rune !== "") {
      writer.uint32(26).string(message.burnedBep2Rune);
    }

    if (message.burnedErc20Rune !== "") {
      writer.uint32(34).string(message.burnedErc20Rune);
    }

    if (!message.LPIncomeSplit.isZero()) {
      writer.uint32(40).int64(message.LPIncomeSplit);
    }

    if (!message.NodeIncomeSplit.isZero()) {
      writer.uint32(48).int64(message.NodeIncomeSplit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetwork();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondRewardRune = reader.string();
          break;

        case 2:
          message.totalBondUnits = reader.string();
          break;

        case 3:
          message.burnedBep2Rune = reader.string();
          break;

        case 4:
          message.burnedErc20Rune = reader.string();
          break;

        case 5:
          message.LPIncomeSplit = (reader.int64() as Long);
          break;

        case 6:
          message.NodeIncomeSplit = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Network {
    return {
      bondRewardRune: isSet(object.bondRewardRune) ? String(object.bondRewardRune) : "",
      totalBondUnits: isSet(object.totalBondUnits) ? String(object.totalBondUnits) : "",
      burnedBep2Rune: isSet(object.burnedBep2Rune) ? String(object.burnedBep2Rune) : "",
      burnedErc20Rune: isSet(object.burnedErc20Rune) ? String(object.burnedErc20Rune) : "",
      LPIncomeSplit: isSet(object.LPIncomeSplit) ? Long.fromValue(object.LPIncomeSplit) : Long.ZERO,
      NodeIncomeSplit: isSet(object.NodeIncomeSplit) ? Long.fromValue(object.NodeIncomeSplit) : Long.ZERO
    };
  },

  toJSON(message: Network): unknown {
    const obj: any = {};
    message.bondRewardRune !== undefined && (obj.bondRewardRune = message.bondRewardRune);
    message.totalBondUnits !== undefined && (obj.totalBondUnits = message.totalBondUnits);
    message.burnedBep2Rune !== undefined && (obj.burnedBep2Rune = message.burnedBep2Rune);
    message.burnedErc20Rune !== undefined && (obj.burnedErc20Rune = message.burnedErc20Rune);
    message.LPIncomeSplit !== undefined && (obj.LPIncomeSplit = (message.LPIncomeSplit || Long.ZERO).toString());
    message.NodeIncomeSplit !== undefined && (obj.NodeIncomeSplit = (message.NodeIncomeSplit || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<Network>): Network {
    const message = createBaseNetwork();
    message.bondRewardRune = object.bondRewardRune ?? "";
    message.totalBondUnits = object.totalBondUnits ?? "";
    message.burnedBep2Rune = object.burnedBep2Rune ?? "";
    message.burnedErc20Rune = object.burnedErc20Rune ?? "";
    message.LPIncomeSplit = object.LPIncomeSplit !== undefined && object.LPIncomeSplit !== null ? Long.fromValue(object.LPIncomeSplit) : Long.ZERO;
    message.NodeIncomeSplit = object.NodeIncomeSplit !== undefined && object.NodeIncomeSplit !== null ? Long.fromValue(object.NodeIncomeSplit) : Long.ZERO;
    return message;
  }

};