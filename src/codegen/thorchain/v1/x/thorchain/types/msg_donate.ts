import { Asset, AssetSDKType, Tx, TxSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgDonate {
  asset?: Asset;
  assetAmount: string;
  runeAmount: string;
  tx?: Tx;
  signer: Uint8Array;
}
export interface MsgDonateSDKType {
  asset?: AssetSDKType;
  asset_amount: string;
  rune_amount: string;
  tx?: TxSDKType;
  signer: Uint8Array;
}

function createBaseMsgDonate(): MsgDonate {
  return {
    asset: undefined,
    assetAmount: "",
    runeAmount: "",
    tx: undefined,
    signer: new Uint8Array()
  };
}

export const MsgDonate = {
  encode(message: MsgDonate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }

    if (message.assetAmount !== "") {
      writer.uint32(18).string(message.assetAmount);
    }

    if (message.runeAmount !== "") {
      writer.uint32(26).string(message.runeAmount);
    }

    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(34).fork()).ldelim();
    }

    if (message.signer.length !== 0) {
      writer.uint32(42).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDonate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.assetAmount = reader.string();
          break;

        case 3:
          message.runeAmount = reader.string();
          break;

        case 4:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 5:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDonate {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      assetAmount: isSet(object.assetAmount) ? String(object.assetAmount) : "",
      runeAmount: isSet(object.runeAmount) ? String(object.runeAmount) : "",
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgDonate): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.assetAmount !== undefined && (obj.assetAmount = message.assetAmount);
    message.runeAmount !== undefined && (obj.runeAmount = message.runeAmount);
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgDonate>): MsgDonate {
    const message = createBaseMsgDonate();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.assetAmount = object.assetAmount ?? "";
    message.runeAmount = object.runeAmount ?? "";
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};