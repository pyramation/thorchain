import { Asset, AssetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface THORNameAlias {
  chain: string;
  address: string;
}
export interface THORNameAliasSDKType {
  chain: string;
  address: string;
}
export interface THORName {
  name: string;
  expireBlockHeight: Long;
  owner: Uint8Array;
  preferredAsset?: Asset;
  aliases: THORNameAlias[];
}
export interface THORNameSDKType {
  name: string;
  expire_block_height: Long;
  owner: Uint8Array;
  preferred_asset?: AssetSDKType;
  aliases: THORNameAliasSDKType[];
}

function createBaseTHORNameAlias(): THORNameAlias {
  return {
    chain: "",
    address: ""
  };
}

export const THORNameAlias = {
  encode(message: THORNameAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): THORNameAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTHORNameAlias();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): THORNameAlias {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: THORNameAlias): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<THORNameAlias>): THORNameAlias {
    const message = createBaseTHORNameAlias();
    message.chain = object.chain ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseTHORName(): THORName {
  return {
    name: "",
    expireBlockHeight: Long.ZERO,
    owner: new Uint8Array(),
    preferredAsset: undefined,
    aliases: []
  };
}

export const THORName = {
  encode(message: THORName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (!message.expireBlockHeight.isZero()) {
      writer.uint32(16).int64(message.expireBlockHeight);
    }

    if (message.owner.length !== 0) {
      writer.uint32(26).bytes(message.owner);
    }

    if (message.preferredAsset !== undefined) {
      Asset.encode(message.preferredAsset, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.aliases) {
      THORNameAlias.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): THORName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTHORName();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.expireBlockHeight = (reader.int64() as Long);
          break;

        case 3:
          message.owner = reader.bytes();
          break;

        case 4:
          message.preferredAsset = Asset.decode(reader, reader.uint32());
          break;

        case 5:
          message.aliases.push(THORNameAlias.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): THORName {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      expireBlockHeight: isSet(object.expireBlockHeight) ? Long.fromValue(object.expireBlockHeight) : Long.ZERO,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      preferredAsset: isSet(object.preferredAsset) ? Asset.fromJSON(object.preferredAsset) : undefined,
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => THORNameAlias.fromJSON(e)) : []
    };
  },

  toJSON(message: THORName): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.expireBlockHeight !== undefined && (obj.expireBlockHeight = (message.expireBlockHeight || Long.ZERO).toString());
    message.owner !== undefined && (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array()));
    message.preferredAsset !== undefined && (obj.preferredAsset = message.preferredAsset ? Asset.toJSON(message.preferredAsset) : undefined);

    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e ? THORNameAlias.toJSON(e) : undefined);
    } else {
      obj.aliases = [];
    }

    return obj;
  },

  fromPartial(object: Partial<THORName>): THORName {
    const message = createBaseTHORName();
    message.name = object.name ?? "";
    message.expireBlockHeight = object.expireBlockHeight !== undefined && object.expireBlockHeight !== null ? Long.fromValue(object.expireBlockHeight) : Long.ZERO;
    message.owner = object.owner ?? new Uint8Array();
    message.preferredAsset = object.preferredAsset !== undefined && object.preferredAsset !== null ? Asset.fromPartial(object.preferredAsset) : undefined;
    message.aliases = object.aliases?.map(e => THORNameAlias.fromPartial(e)) || [];
    return message;
  }

};