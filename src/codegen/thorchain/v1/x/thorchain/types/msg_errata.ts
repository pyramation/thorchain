import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgErrataTx {
  txId: string;
  chain: string;
  signer: Uint8Array;
}
export interface MsgErrataTxSDKType {
  tx_id: string;
  chain: string;
  signer: Uint8Array;
}

function createBaseMsgErrataTx(): MsgErrataTx {
  return {
    txId: "",
    chain: "",
    signer: new Uint8Array()
  };
}

export const MsgErrataTx = {
  encode(message: MsgErrataTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }

    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgErrataTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgErrataTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;

        case 2:
          message.chain = reader.string();
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgErrataTx {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgErrataTx): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.chain !== undefined && (obj.chain = message.chain);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgErrataTx>): MsgErrataTx {
    const message = createBaseMsgErrataTx();
    message.txId = object.txId ?? "";
    message.chain = object.chain ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};