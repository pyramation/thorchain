import { KeygenType } from "./type_keygen";
import { Blame, BlameSDKType } from "./type_blame";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgTssPool {
    id: string;
    poolPubKey: string;
    keygenType: KeygenType;
    pubKeys: string[];
    height: Long;
    blame?: Blame;
    chains: string[];
    signer: Uint8Array;
    keygenTime: Long;
}
export interface MsgTssPoolSDKType {
    id: string;
    pool_pub_key: string;
    keygen_type: KeygenType;
    pub_keys: string[];
    height: Long;
    blame?: BlameSDKType;
    chains: string[];
    signer: Uint8Array;
    keygen_time: Long;
}
export declare const MsgTssPool: {
    encode(message: MsgTssPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTssPool;
    fromJSON(object: any): MsgTssPool;
    toJSON(message: MsgTssPool): unknown;
    fromPartial(object: Partial<MsgTssPool>): MsgTssPool;
};
