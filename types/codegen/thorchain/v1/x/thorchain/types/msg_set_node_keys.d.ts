import { PubKeySet, PubKeySetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
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
export declare const MsgSetNodeKeys: {
    encode(message: MsgSetNodeKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNodeKeys;
    fromJSON(object: any): MsgSetNodeKeys;
    toJSON(message: MsgSetNodeKeys): unknown;
    fromPartial(object: Partial<MsgSetNodeKeys>): MsgSetNodeKeys;
};
