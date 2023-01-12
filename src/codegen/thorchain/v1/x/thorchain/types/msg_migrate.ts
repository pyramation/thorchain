import { ObservedTx, ObservedTxSDKType } from "./type_observed_tx";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgMigrate {
  tx?: ObservedTx;
  blockHeight: Long;
  signer: Uint8Array;
}
export interface MsgMigrateSDKType {
  tx?: ObservedTxSDKType;
  block_height: Long;
  signer: Uint8Array;
}

function createBaseMsgMigrate(): MsgMigrate {
  return {
    tx: undefined,
    blockHeight: Long.ZERO,
    signer: new Uint8Array()
  };
}

export const MsgMigrate = {
  encode(message: MsgMigrate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      ObservedTx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).int64(message.blockHeight);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = ObservedTx.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockHeight = (reader.int64() as Long);
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

  fromJSON(object: any): MsgMigrate {
    return {
      tx: isSet(object.tx) ? ObservedTx.fromJSON(object.tx) : undefined,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgMigrate): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? ObservedTx.toJSON(message.tx) : undefined);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgMigrate>): MsgMigrate {
    const message = createBaseMsgMigrate();
    message.tx = object.tx !== undefined && object.tx !== null ? ObservedTx.fromPartial(object.tx) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};