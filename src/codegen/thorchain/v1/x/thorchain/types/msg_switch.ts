import { Tx, TxSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgSwitch {
  tx?: Tx;
  destination: string;
  signer: Uint8Array;
}
export interface MsgSwitchSDKType {
  tx?: TxSDKType;
  destination: string;
  signer: Uint8Array;
}

function createBaseMsgSwitch(): MsgSwitch {
  return {
    tx: undefined,
    destination: "",
    signer: new Uint8Array()
  };
}

export const MsgSwitch = {
  encode(message: MsgSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwitch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwitch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.destination = reader.string();
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

  fromJSON(object: any): MsgSwitch {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      destination: isSet(object.destination) ? String(object.destination) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgSwitch): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.destination !== undefined && (obj.destination = message.destination);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgSwitch>): MsgSwitch {
    const message = createBaseMsgSwitch();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.destination = object.destination ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};