import { Tx, TxSDKType, Asset, AssetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
export interface MsgAddLiquidity {
    tx?: Tx;
    asset?: Asset;
    assetAmount: string;
    runeAmount: string;
    runeAddress: string;
    assetAddress: string;
    affiliateAddress: string;
    affiliateBasisPoints: string;
    signer: Uint8Array;
}
export interface MsgAddLiquiditySDKType {
    tx?: TxSDKType;
    asset?: AssetSDKType;
    asset_amount: string;
    rune_amount: string;
    rune_address: string;
    asset_address: string;
    affiliate_address: string;
    affiliate_basis_points: string;
    signer: Uint8Array;
}
export declare const MsgAddLiquidity: {
    encode(message: MsgAddLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity;
    fromJSON(object: any): MsgAddLiquidity;
    toJSON(message: MsgAddLiquidity): unknown;
    fromPartial(object: Partial<MsgAddLiquidity>): MsgAddLiquidity;
};
