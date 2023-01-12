import { Tx, TxSDKType, Asset, AssetSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
export declare enum OrderType {
    market = 0,
    limit = 1,
    UNRECOGNIZED = -1
}
export declare const OrderTypeSDKType: typeof OrderType;
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
export interface MsgSwap {
    tx?: Tx;
    targetAsset?: Asset;
    destination: string;
    tradeTarget: string;
    affiliateAddress: string;
    affiliateBasisPoints: string;
    signer: Uint8Array;
    aggregator: string;
    aggregatorTargetAddress: string;
    aggregatorTargetLimit: string;
    orderType: OrderType;
}
export interface MsgSwapSDKType {
    tx?: TxSDKType;
    target_asset?: AssetSDKType;
    destination: string;
    trade_target: string;
    affiliate_address: string;
    affiliate_basis_points: string;
    signer: Uint8Array;
    aggregator: string;
    aggregator_target_address: string;
    aggregator_target_limit: string;
    order_type: OrderType;
}
export declare const MsgSwap: {
    encode(message: MsgSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap;
    fromJSON(object: any): MsgSwap;
    toJSON(message: MsgSwap): unknown;
    fromPartial(object: Partial<MsgSwap>): MsgSwap;
};
