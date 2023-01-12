import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgConsolidate {
  observedTx?: ObservedTx;
  signer: Uint8Array;
}
export interface MsgConsolidateSDKType {
  observed_tx?: ObservedTxSDKType;
  signer: Uint8Array;
}

function createBaseMsgConsolidate(): MsgConsolidate {
  return {
    observedTx: undefined,
    signer: new Uint8Array()
  };
}

export const MsgConsolidate = {
  encode(message: MsgConsolidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.observedTx !== undefined) {
      ObservedTx.encode(message.observedTx, writer.uint32(10).fork()).ldelim();
    }

    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConsolidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConsolidate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.observedTx = ObservedTx.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgConsolidate {
    return {
      observedTx: isSet(object.observedTx) ? ObservedTx.fromJSON(object.observedTx) : undefined,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgConsolidate): unknown {
    const obj: any = {};
    message.observedTx !== undefined && (obj.observedTx = message.observedTx ? ObservedTx.toJSON(message.observedTx) : undefined);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgConsolidate>): MsgConsolidate {
    const message = createBaseMsgConsolidate();
    message.observedTx = object.observedTx !== undefined && object.observedTx !== null ? ObservedTx.fromPartial(object.observedTx) : undefined;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};