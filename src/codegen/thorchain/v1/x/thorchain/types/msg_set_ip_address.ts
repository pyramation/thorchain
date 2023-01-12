import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgSetIPAddress {
  ipAddress: string;
  signer: Uint8Array;
}
export interface MsgSetIPAddressSDKType {
  ip_address: string;
  signer: Uint8Array;
}

function createBaseMsgSetIPAddress(): MsgSetIPAddress {
  return {
    ipAddress: "",
    signer: new Uint8Array()
  };
}

export const MsgSetIPAddress = {
  encode(message: MsgSetIPAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipAddress !== "") {
      writer.uint32(10).string(message.ipAddress);
    }

    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetIPAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetIPAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ipAddress = reader.string();
          break;

        case 2:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetIPAddress {
    return {
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgSetIPAddress): unknown {
    const obj: any = {};
    message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgSetIPAddress>): MsgSetIPAddress {
    const message = createBaseMsgSetIPAddress();
    message.ipAddress = object.ipAddress ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};