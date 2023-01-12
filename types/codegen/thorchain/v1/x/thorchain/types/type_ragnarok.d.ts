import { Asset, AssetSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RagnarokWithdrawPosition {
    number: Long;
    pool?: Asset;
}
export interface RagnarokWithdrawPositionSDKType {
    number: Long;
    pool?: AssetSDKType;
}
export declare const RagnarokWithdrawPosition: {
    encode(message: RagnarokWithdrawPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RagnarokWithdrawPosition;
    fromJSON(object: any): RagnarokWithdrawPosition;
    toJSON(message: RagnarokWithdrawPosition): unknown;
    fromPartial(object: Partial<RagnarokWithdrawPosition>): RagnarokWithdrawPosition;
};
