import { Asset, AssetSDKType, Tx, TxSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
export interface MsgDonate {
    asset?: Asset;
    assetAmount: string;
    runeAmount: string;
    tx?: Tx;
    signer: Uint8Array;
}
export interface MsgDonateSDKType {
    asset?: AssetSDKType;
    asset_amount: string;
    rune_amount: string;
    tx?: TxSDKType;
    signer: Uint8Array;
}
export declare const MsgDonate: {
    encode(message: MsgDonate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonate;
    fromJSON(object: any): MsgDonate;
    toJSON(message: MsgDonate): unknown;
    fromPartial(object: Partial<MsgDonate>): MsgDonate;
};
