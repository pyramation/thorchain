import { Asset, AssetSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * |    State    | Swap | Add   | Withdraw  | Refunding |
 * | ----------- | ---- | ----- | --------- | --------- |
 * | `staged`    | no   | yes   | yes       | Refund Invalid Add/Remove Liquidity && all Swaps |
 * | `available` | yes  | yes   | yes       | Refund Invalid Tx |
 * | `suspended` | no   | no    | no        | Refund all |
 */
export declare enum PoolStatus {
    UnknownPoolStatus = 0,
    Available = 1,
    Staged = 2,
    Suspended = 3,
    UNRECOGNIZED = -1
}
export declare const PoolStatusSDKType: typeof PoolStatus;
export declare function poolStatusFromJSON(object: any): PoolStatus;
export declare function poolStatusToJSON(object: PoolStatus): string;
export interface Pool {
    balanceRune: string;
    balanceAsset: string;
    asset?: Asset;
    LPUnits: string;
    status: PoolStatus;
    statusSince: Long;
    decimals: Long;
    synthUnits: string;
    pendingInboundRune: string;
    pendingInboundAsset: string;
}
export interface PoolSDKType {
    balance_rune: string;
    balance_asset: string;
    asset?: AssetSDKType;
    LP_units: string;
    status: PoolStatus;
    status_since: Long;
    decimals: Long;
    synth_units: string;
    pending_inbound_rune: string;
    pending_inbound_asset: string;
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: Partial<Pool>): Pool;
};
