import { Tx, TxSDKType, Asset, AssetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgAddLiquidity {
  tx?: Tx;
  asset?: Asset;
  assetAmount: string;
  runeAmount: string;
  runeAddress: string;
  assetAddress: string;
  affiliateAddress: string;
  affiliateBasisPoints: string;
  signer: Uint8Array;
}
export interface MsgAddLiquiditySDKType {
  tx?: TxSDKType;
  asset?: AssetSDKType;
  asset_amount: string;
  rune_amount: string;
  rune_address: string;
  asset_address: string;
  affiliate_address: string;
  affiliate_basis_points: string;
  signer: Uint8Array;
}

function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    tx: undefined,
    asset: undefined,
    assetAmount: "",
    runeAmount: "",
    runeAddress: "",
    assetAddress: "",
    affiliateAddress: "",
    affiliateBasisPoints: "",
    signer: new Uint8Array()
  };
}

export const MsgAddLiquidity = {
  encode(message: MsgAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }

    if (message.assetAmount !== "") {
      writer.uint32(26).string(message.assetAmount);
    }

    if (message.runeAmount !== "") {
      writer.uint32(34).string(message.runeAmount);
    }

    if (message.runeAddress !== "") {
      writer.uint32(42).string(message.runeAddress);
    }

    if (message.assetAddress !== "") {
      writer.uint32(50).string(message.assetAddress);
    }

    if (message.affiliateAddress !== "") {
      writer.uint32(58).string(message.affiliateAddress);
    }

    if (message.affiliateBasisPoints !== "") {
      writer.uint32(66).string(message.affiliateBasisPoints);
    }

    if (message.signer.length !== 0) {
      writer.uint32(74).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.asset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.assetAmount = reader.string();
          break;

        case 4:
          message.runeAmount = reader.string();
          break;

        case 5:
          message.runeAddress = reader.string();
          break;

        case 6:
          message.assetAddress = reader.string();
          break;

        case 7:
          message.affiliateAddress = reader.string();
          break;

        case 8:
          message.affiliateBasisPoints = reader.string();
          break;

        case 9:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      assetAmount: isSet(object.assetAmount) ? String(object.assetAmount) : "",
      runeAmount: isSet(object.runeAmount) ? String(object.runeAmount) : "",
      runeAddress: isSet(object.runeAddress) ? String(object.runeAddress) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : "",
      affiliateAddress: isSet(object.affiliateAddress) ? String(object.affiliateAddress) : "",
      affiliateBasisPoints: isSet(object.affiliateBasisPoints) ? String(object.affiliateBasisPoints) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.assetAmount !== undefined && (obj.assetAmount = message.assetAmount);
    message.runeAmount !== undefined && (obj.runeAmount = message.runeAmount);
    message.runeAddress !== undefined && (obj.runeAddress = message.runeAddress);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    message.affiliateAddress !== undefined && (obj.affiliateAddress = message.affiliateAddress);
    message.affiliateBasisPoints !== undefined && (obj.affiliateBasisPoints = message.affiliateBasisPoints);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.assetAmount = object.assetAmount ?? "";
    message.runeAmount = object.runeAmount ?? "";
    message.runeAddress = object.runeAddress ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.affiliateAddress = object.affiliateAddress ?? "";
    message.affiliateBasisPoints = object.affiliateBasisPoints ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};