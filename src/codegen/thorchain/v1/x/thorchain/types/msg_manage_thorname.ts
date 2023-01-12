import { Coin, CoinSDKType, Asset, AssetSDKType } from "../../../common/common";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgManageTHORName {
  name: string;
  chain: string;
  address: string;
  coin?: Coin;
  expireBlockHeight: Long;
  preferredAsset?: Asset;
  owner: Uint8Array;
  signer: Uint8Array;
}
export interface MsgManageTHORNameSDKType {
  name: string;
  chain: string;
  address: string;
  coin?: CoinSDKType;
  expire_block_height: Long;
  preferred_asset?: AssetSDKType;
  owner: Uint8Array;
  signer: Uint8Array;
}

function createBaseMsgManageTHORName(): MsgManageTHORName {
  return {
    name: "",
    chain: "",
    address: "",
    coin: undefined,
    expireBlockHeight: Long.ZERO,
    preferredAsset: undefined,
    owner: new Uint8Array(),
    signer: new Uint8Array()
  };
}

export const MsgManageTHORName = {
  encode(message: MsgManageTHORName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }

    if (!message.expireBlockHeight.isZero()) {
      writer.uint32(40).int64(message.expireBlockHeight);
    }

    if (message.preferredAsset !== undefined) {
      Asset.encode(message.preferredAsset, writer.uint32(50).fork()).ldelim();
    }

    if (message.owner.length !== 0) {
      writer.uint32(58).bytes(message.owner);
    }

    if (message.signer.length !== 0) {
      writer.uint32(66).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgManageTHORName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgManageTHORName();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.chain = reader.string();
          break;

        case 3:
          message.address = reader.string();
          break;

        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.expireBlockHeight = (reader.int64() as Long);
          break;

        case 6:
          message.preferredAsset = Asset.decode(reader, reader.uint32());
          break;

        case 7:
          message.owner = reader.bytes();
          break;

        case 8:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgManageTHORName {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      address: isSet(object.address) ? String(object.address) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      expireBlockHeight: isSet(object.expireBlockHeight) ? Long.fromValue(object.expireBlockHeight) : Long.ZERO,
      preferredAsset: isSet(object.preferredAsset) ? Asset.fromJSON(object.preferredAsset) : undefined,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgManageTHORName): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined && (obj.address = message.address);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.expireBlockHeight !== undefined && (obj.expireBlockHeight = (message.expireBlockHeight || Long.ZERO).toString());
    message.preferredAsset !== undefined && (obj.preferredAsset = message.preferredAsset ? Asset.toJSON(message.preferredAsset) : undefined);
    message.owner !== undefined && (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array()));
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgManageTHORName>): MsgManageTHORName {
    const message = createBaseMsgManageTHORName();
    message.name = object.name ?? "";
    message.chain = object.chain ?? "";
    message.address = object.address ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.expireBlockHeight = object.expireBlockHeight !== undefined && object.expireBlockHeight !== null ? Long.fromValue(object.expireBlockHeight) : Long.ZERO;
    message.preferredAsset = object.preferredAsset !== undefined && object.preferredAsset !== null ? Asset.fromPartial(object.preferredAsset) : undefined;
    message.owner = object.owner ?? new Uint8Array();
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};