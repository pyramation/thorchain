import { Asset, AssetSDKType } from "../../../common/common";
import { Long, isSet } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface LiquidityProvider {
  asset?: Asset;
  runeAddress: string;
  assetAddress: string;
  lastAddHeight: Long;
  lastWithdrawHeight: Long;
  units: string;
  pendingRune: string;
  pendingAsset: string;
  pendingTx_Id: string;
  runeDepositValue: string;
  assetDepositValue: string;
}
export interface LiquidityProviderSDKType {
  asset?: AssetSDKType;
  rune_address: string;
  asset_address: string;
  last_add_height: Long;
  last_withdraw_height: Long;
  units: string;
  pending_rune: string;
  pending_asset: string;
  pending_tx_Id: string;
  rune_deposit_value: string;
  asset_deposit_value: string;
}

function createBaseLiquidityProvider(): LiquidityProvider {
  return {
    asset: undefined,
    runeAddress: "",
    assetAddress: "",
    lastAddHeight: Long.ZERO,
    lastWithdrawHeight: Long.ZERO,
    units: "",
    pendingRune: "",
    pendingAsset: "",
    pendingTx_Id: "",
    runeDepositValue: "",
    assetDepositValue: ""
  };
}

export const LiquidityProvider = {
  encode(message: LiquidityProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }

    if (message.runeAddress !== "") {
      writer.uint32(18).string(message.runeAddress);
    }

    if (message.assetAddress !== "") {
      writer.uint32(26).string(message.assetAddress);
    }

    if (!message.lastAddHeight.isZero()) {
      writer.uint32(32).int64(message.lastAddHeight);
    }

    if (!message.lastWithdrawHeight.isZero()) {
      writer.uint32(40).int64(message.lastWithdrawHeight);
    }

    if (message.units !== "") {
      writer.uint32(50).string(message.units);
    }

    if (message.pendingRune !== "") {
      writer.uint32(58).string(message.pendingRune);
    }

    if (message.pendingAsset !== "") {
      writer.uint32(66).string(message.pendingAsset);
    }

    if (message.pendingTx_Id !== "") {
      writer.uint32(74).string(message.pendingTx_Id);
    }

    if (message.runeDepositValue !== "") {
      writer.uint32(82).string(message.runeDepositValue);
    }

    if (message.assetDepositValue !== "") {
      writer.uint32(90).string(message.assetDepositValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;

        case 2:
          message.runeAddress = reader.string();
          break;

        case 3:
          message.assetAddress = reader.string();
          break;

        case 4:
          message.lastAddHeight = (reader.int64() as Long);
          break;

        case 5:
          message.lastWithdrawHeight = (reader.int64() as Long);
          break;

        case 6:
          message.units = reader.string();
          break;

        case 7:
          message.pendingRune = reader.string();
          break;

        case 8:
          message.pendingAsset = reader.string();
          break;

        case 9:
          message.pendingTx_Id = reader.string();
          break;

        case 10:
          message.runeDepositValue = reader.string();
          break;

        case 11:
          message.assetDepositValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProvider {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      runeAddress: isSet(object.runeAddress) ? String(object.runeAddress) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : "",
      lastAddHeight: isSet(object.lastAddHeight) ? Long.fromValue(object.lastAddHeight) : Long.ZERO,
      lastWithdrawHeight: isSet(object.lastWithdrawHeight) ? Long.fromValue(object.lastWithdrawHeight) : Long.ZERO,
      units: isSet(object.units) ? String(object.units) : "",
      pendingRune: isSet(object.pendingRune) ? String(object.pendingRune) : "",
      pendingAsset: isSet(object.pendingAsset) ? String(object.pendingAsset) : "",
      pendingTx_Id: isSet(object.pendingTx_Id) ? String(object.pendingTx_Id) : "",
      runeDepositValue: isSet(object.runeDepositValue) ? String(object.runeDepositValue) : "",
      assetDepositValue: isSet(object.assetDepositValue) ? String(object.assetDepositValue) : ""
    };
  },

  toJSON(message: LiquidityProvider): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.runeAddress !== undefined && (obj.runeAddress = message.runeAddress);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    message.lastAddHeight !== undefined && (obj.lastAddHeight = (message.lastAddHeight || Long.ZERO).toString());
    message.lastWithdrawHeight !== undefined && (obj.lastWithdrawHeight = (message.lastWithdrawHeight || Long.ZERO).toString());
    message.units !== undefined && (obj.units = message.units);
    message.pendingRune !== undefined && (obj.pendingRune = message.pendingRune);
    message.pendingAsset !== undefined && (obj.pendingAsset = message.pendingAsset);
    message.pendingTx_Id !== undefined && (obj.pendingTx_Id = message.pendingTx_Id);
    message.runeDepositValue !== undefined && (obj.runeDepositValue = message.runeDepositValue);
    message.assetDepositValue !== undefined && (obj.assetDepositValue = message.assetDepositValue);
    return obj;
  },

  fromPartial(object: Partial<LiquidityProvider>): LiquidityProvider {
    const message = createBaseLiquidityProvider();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.runeAddress = object.runeAddress ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.lastAddHeight = object.lastAddHeight !== undefined && object.lastAddHeight !== null ? Long.fromValue(object.lastAddHeight) : Long.ZERO;
    message.lastWithdrawHeight = object.lastWithdrawHeight !== undefined && object.lastWithdrawHeight !== null ? Long.fromValue(object.lastWithdrawHeight) : Long.ZERO;
    message.units = object.units ?? "";
    message.pendingRune = object.pendingRune ?? "";
    message.pendingAsset = object.pendingAsset ?? "";
    message.pendingTx_Id = object.pendingTx_Id ?? "";
    message.runeDepositValue = object.runeDepositValue ?? "";
    message.assetDepositValue = object.assetDepositValue ?? "";
    return message;
  }

};