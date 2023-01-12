import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface ReserveContributor {
  address: string;
  amount: string;
}
export interface ReserveContributorSDKType {
  address: string;
  amount: string;
}

function createBaseReserveContributor(): ReserveContributor {
  return {
    address: "",
    amount: ""
  };
}

export const ReserveContributor = {
  encode(message: ReserveContributor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReserveContributor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReserveContributor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ReserveContributor {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: ReserveContributor): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<ReserveContributor>): ReserveContributor {
    const message = createBaseReserveContributor();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};