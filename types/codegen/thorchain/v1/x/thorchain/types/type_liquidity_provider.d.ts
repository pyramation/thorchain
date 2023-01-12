import { Asset, AssetSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface LiquidityProvider {
    asset?: Asset;
    runeAddress: string;
    assetAddress: string;
    lastAddHeight: Long;
    lastWithdrawHeight: Long;
    units: string;
    pendingRune: string;
    pendingAsset: string;
    pendingTx_Id: string;
    runeDepositValue: string;
    assetDepositValue: string;
}
export interface LiquidityProviderSDKType {
    asset?: AssetSDKType;
    rune_address: string;
    asset_address: string;
    last_add_height: Long;
    last_withdraw_height: Long;
    units: string;
    pending_rune: string;
    pending_asset: string;
    pending_tx_Id: string;
    rune_deposit_value: string;
    asset_deposit_value: string;
}
export declare const LiquidityProvider: {
    encode(message: LiquidityProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvider;
    fromJSON(object: any): LiquidityProvider;
    toJSON(message: LiquidityProvider): unknown;
    fromPartial(object: Partial<LiquidityProvider>): LiquidityProvider;
};
