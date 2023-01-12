import { Blame, BlameSDKType } from "./type_blame";
import { Coin, CoinSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgTssKeysignFail {
    id: string;
    height: Long;
    blame?: Blame;
    memo: string;
    coins: Coin[];
    pubKey: string;
    signer: Uint8Array;
}
export interface MsgTssKeysignFailSDKType {
    id: string;
    height: Long;
    blame?: BlameSDKType;
    memo: string;
    coins: CoinSDKType[];
    pub_key: string;
    signer: Uint8Array;
}
export declare const MsgTssKeysignFail: {
    encode(message: MsgTssKeysignFail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTssKeysignFail;
    fromJSON(object: any): MsgTssKeysignFail;
    toJSON(message: MsgTssKeysignFail): unknown;
    fromPartial(object: Partial<MsgTssKeysignFail>): MsgTssKeysignFail;
};
