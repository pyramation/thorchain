import { PubKeySet, PubKeySetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgSetNodeKeys {
  pubKeySetSet?: PubKeySet;
  validatorConsPubKey: string;
  signer: Uint8Array;
}
export interface MsgSetNodeKeysSDKType {
  pub_key_set_set?: PubKeySetSDKType;
  validator_cons_pub_key: string;
  signer: Uint8Array;
}

function createBaseMsgSetNodeKeys(): MsgSetNodeKeys {
  return {
    pubKeySetSet: undefined,
    validatorConsPubKey: "",
    signer: new Uint8Array()
  };
}

export const MsgSetNodeKeys = {
  encode(message: MsgSetNodeKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKeySetSet !== undefined) {
      PubKeySet.encode(message.pubKeySetSet, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorConsPubKey !== "") {
      writer.uint32(18).string(message.validatorConsPubKey);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNodeKeys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNodeKeys();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKeySetSet = PubKeySet.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorConsPubKey = reader.string();
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

  fromJSON(object: any): MsgSetNodeKeys {
    return {
      pubKeySetSet: isSet(object.pubKeySetSet) ? PubKeySet.fromJSON(object.pubKeySetSet) : undefined,
      validatorConsPubKey: isSet(object.validatorConsPubKey) ? String(object.validatorConsPubKey) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array()
    };
  },

  toJSON(message: MsgSetNodeKeys): unknown {
    const obj: any = {};
    message.pubKeySetSet !== undefined && (obj.pubKeySetSet = message.pubKeySetSet ? PubKeySet.toJSON(message.pubKeySetSet) : undefined);
    message.validatorConsPubKey !== undefined && (obj.validatorConsPubKey = message.validatorConsPubKey);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgSetNodeKeys>): MsgSetNodeKeys {
    const message = createBaseMsgSetNodeKeys();
    message.pubKeySetSet = object.pubKeySetSet !== undefined && object.pubKeySetSet !== null ? PubKeySet.fromPartial(object.pubKeySetSet) : undefined;
    message.validatorConsPubKey = object.validatorConsPubKey ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};