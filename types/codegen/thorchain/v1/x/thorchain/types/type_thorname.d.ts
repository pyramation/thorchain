import { Asset, AssetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../../helpers";
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
export declare const THORNameAlias: {
    encode(message: THORNameAlias, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): THORNameAlias;
    fromJSON(object: any): THORNameAlias;
    toJSON(message: THORNameAlias): unknown;
    fromPartial(object: Partial<THORNameAlias>): THORNameAlias;
};
export declare const THORName: {
    encode(message: THORName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): THORName;
    fromJSON(object: any): THORName;
    toJSON(message: THORName): unknown;
    fromPartial(object: Partial<THORName>): THORName;
};
