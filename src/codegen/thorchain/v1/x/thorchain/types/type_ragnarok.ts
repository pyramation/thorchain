import { Asset, AssetSDKType } from "../../../common/common";
import { Long, isSet } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RagnarokWithdrawPosition {
  number: Long;
  pool?: Asset;
}
export interface RagnarokWithdrawPositionSDKType {
  number: Long;
  pool?: AssetSDKType;
}

function createBaseRagnarokWithdrawPosition(): RagnarokWithdrawPosition {
  return {
    number: Long.ZERO,
    pool: undefined
  };
}

export const RagnarokWithdrawPosition = {
  encode(message: RagnarokWithdrawPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.number.isZero()) {
      writer.uint32(8).int64(message.number);
    }

    if (message.pool !== undefined) {
      Asset.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RagnarokWithdrawPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRagnarokWithdrawPosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.number = (reader.int64() as Long);
          break;

        case 2:
          message.pool = Asset.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RagnarokWithdrawPosition {
    return {
      number: isSet(object.number) ? Long.fromValue(object.number) : Long.ZERO,
      pool: isSet(object.pool) ? Asset.fromJSON(object.pool) : undefined
    };
  },

  toJSON(message: RagnarokWithdrawPosition): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = (message.number || Long.ZERO).toString());
    message.pool !== undefined && (obj.pool = message.pool ? Asset.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(object: Partial<RagnarokWithdrawPosition>): RagnarokWithdrawPosition {
    const message = createBaseRagnarokWithdrawPosition();
    message.number = object.number !== undefined && object.number !== null ? Long.fromValue(object.number) : Long.ZERO;
    message.pool = object.pool !== undefined && object.pool !== null ? Asset.fromPartial(object.pool) : undefined;
    return message;
  }

};