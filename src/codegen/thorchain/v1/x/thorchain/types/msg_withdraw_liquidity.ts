import { Tx, TxSDKType, Asset, AssetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgWithdrawLiquidity {
  tx?: Tx;
  withdrawAddress: string;
  basisPoints: string;
  asset?: Asset;
  withdrawalAsset?: Asset;
  signer: Uint8Array;
}
export interface MsgWithdrawLiquiditySDKType {
  tx?: TxSDKType;
  withdraw_address: string;
  basis_points: string;
  asset?: AssetSDKType;
  withdrawal_asset?: AssetSDKType;
  signer: Uint8Array;
}

function createBaseMsgWithdrawLiquidity(): MsgWithdrawLiquidity {
  return {
    tx: undefined,
    withdrawAddress: "",
    basisPoints: "",
    asset: undefined,
    withdrawalAsset: undefined,
    signer: new Uint8Array()
  };
}

export const MsgWithdrawLiquidity = {
  encode(message: MsgWithdrawLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }

    if (message.basisPoints !== "") {
      writer.uint32(26).string(message.basisPoints);
    }

    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(34).fork()).ldelim();
    }

    if (message.withdrawalAsset !== undefined) {
      Asset.encode(message.withdrawalAsset, writer.uint32(42).fork()).ldelim();
    }

    if (message.signer.length !== 0) {
      writer.uint32(50).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLiquidity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.withdrawAddress = reader.string();
          break;

        case 3:
          message.basisPoints = reader.string();
          break;

        case 4:
          message.asset = Asset.decode(reader, reader.uint32());
          break;

        case 5:
          message.withdrawalAsset = Asset.decode(reader, reader.uint32());
          break;

        case 6:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawLiquidity {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
      basisPoints: isSet(object.basisPoints) ? String(object.basisPoints) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      withdrawalAsset: isSet(object.withdrawalAsset) ? Asset.fromJSON(object.withdrawalAsset) : undefined,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgWithdrawLiquidity): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    message.basisPoints !== undefined && (obj.basisPoints = message.basisPoints);
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.withdrawalAsset !== undefined && (obj.withdrawalAsset = message.withdrawalAsset ? Asset.toJSON(message.withdrawalAsset) : undefined);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgWithdrawLiquidity>): MsgWithdrawLiquidity {
    const message = createBaseMsgWithdrawLiquidity();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.basisPoints = object.basisPoints ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.withdrawalAsset = object.withdrawalAsset !== undefined && object.withdrawalAsset !== null ? Asset.fromPartial(object.withdrawalAsset) : undefined;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};