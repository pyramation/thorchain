import { Coin, CoinSDKType, Asset, AssetSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
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
export declare const MsgManageTHORName: {
    encode(message: MsgManageTHORName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgManageTHORName;
    fromJSON(object: any): MsgManageTHORName;
    toJSON(message: MsgManageTHORName): unknown;
    fromPartial(object: Partial<MsgManageTHORName>): MsgManageTHORName;
};
