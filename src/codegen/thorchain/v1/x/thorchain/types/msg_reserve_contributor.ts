import { Tx, TxSDKType } from "../../../common/common";
import { ReserveContributor, ReserveContributorSDKType } from "./type_reserve_contributor";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgReserveContributor {
  tx?: Tx;
  contributor?: ReserveContributor;
  signer: Uint8Array;
}
export interface MsgReserveContributorSDKType {
  tx?: TxSDKType;
  contributor?: ReserveContributorSDKType;
  signer: Uint8Array;
}

function createBaseMsgReserveContributor(): MsgReserveContributor {
  return {
    tx: undefined,
    contributor: undefined,
    signer: new Uint8Array()
  };
}

export const MsgReserveContributor = {
  encode(message: MsgReserveContributor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.contributor !== undefined) {
      ReserveContributor.encode(message.contributor, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReserveContributor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReserveContributor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.contributor = ReserveContributor.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgReserveContributor {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      contributor: isSet(object.contributor) ? ReserveContributor.fromJSON(object.contributor) : undefined,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgReserveContributor): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.contributor !== undefined && (obj.contributor = message.contributor ? ReserveContributor.toJSON(message.contributor) : undefined);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgReserveContributor>): MsgReserveContributor {
    const message = createBaseMsgReserveContributor();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.contributor = object.contributor !== undefined && object.contributor !== null ? ReserveContributor.fromPartial(object.contributor) : undefined;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};