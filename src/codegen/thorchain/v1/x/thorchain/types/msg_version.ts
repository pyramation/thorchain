import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgSetVersion {
  version: string;
  signer: Uint8Array;
}
export interface MsgSetVersionSDKType {
  version: string;
  signer: Uint8Array;
}

function createBaseMsgSetVersion(): MsgSetVersion {
  return {
    version: "",
    signer: new Uint8Array()
  };
}

export const MsgSetVersion = {
  encode(message: MsgSetVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }

    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVersion();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
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

  fromJSON(object: any): MsgSetVersion {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgSetVersion): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgSetVersion>): MsgSetVersion {
    const message = createBaseMsgSetVersion();
    message.version = object.version ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};