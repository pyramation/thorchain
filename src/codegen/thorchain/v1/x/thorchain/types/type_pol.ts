import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface ProtocolOwnedLiquidity {
  runeDeposited: string;
  runeWithdrawn: string;
}
export interface ProtocolOwnedLiquiditySDKType {
  rune_deposited: string;
  rune_withdrawn: string;
}

function createBaseProtocolOwnedLiquidity(): ProtocolOwnedLiquidity {
  return {
    runeDeposited: "",
    runeWithdrawn: ""
  };
}

export const ProtocolOwnedLiquidity = {
  encode(message: ProtocolOwnedLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.runeDeposited !== "") {
      writer.uint32(10).string(message.runeDeposited);
    }

    if (message.runeWithdrawn !== "") {
      writer.uint32(18).string(message.runeWithdrawn);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolOwnedLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolOwnedLiquidity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.runeDeposited = reader.string();
          break;

        case 2:
          message.runeWithdrawn = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProtocolOwnedLiquidity {
    return {
      runeDeposited: isSet(object.runeDeposited) ? String(object.runeDeposited) : "",
      runeWithdrawn: isSet(object.runeWithdrawn) ? String(object.runeWithdrawn) : ""
    };
  },

  toJSON(message: ProtocolOwnedLiquidity): unknown {
    const obj: any = {};
    message.runeDeposited !== undefined && (obj.runeDeposited = message.runeDeposited);
    message.runeWithdrawn !== undefined && (obj.runeWithdrawn = message.runeWithdrawn);
    return obj;
  },

  fromPartial(object: Partial<ProtocolOwnedLiquidity>): ProtocolOwnedLiquidity {
    const message = createBaseProtocolOwnedLiquidity();
    message.runeDeposited = object.runeDeposited ?? "";
    message.runeWithdrawn = object.runeWithdrawn ?? "";
    return message;
  }

};