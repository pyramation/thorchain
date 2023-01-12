import { Tx, TxSDKType, Asset, AssetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
export interface MsgWithdrawLiquidity {
    tx?: Tx;
    withdrawAddress: string;
    basisPoints: string;
    asset?: Asset;
    withdrawalAsset?: Asset;
    signer: Uint8Array;
}
export interface MsgWithdrawLiquiditySDKType {
    tx?: TxSDKType;
    withdraw_address: string;
    basis_points: string;
    asset?: AssetSDKType;
    withdrawal_asset?: AssetSDKType;
    signer: Uint8Array;
}
export declare const MsgWithdrawLiquidity: {
    encode(message: MsgWithdrawLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLiquidity;
    fromJSON(object: any): MsgWithdrawLiquidity;
    toJSON(message: MsgWithdrawLiquidity): unknown;
    fromPartial(object: Partial<MsgWithdrawLiquidity>): MsgWithdrawLiquidity;
};
