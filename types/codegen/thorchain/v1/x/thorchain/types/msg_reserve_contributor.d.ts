import { Tx, TxSDKType } from "../../../common/common";
import { ReserveContributor, ReserveContributorSDKType } from "./type_reserve_contributor";
import * as _m0 from "protobufjs/minimal";
export interface MsgReserveContributor {
    tx?: Tx;
    contributor?: ReserveContributor;
    signer: Uint8Array;
}
export interface MsgReserveContributorSDKType {
    tx?: TxSDKType;
    contributor?: ReserveContributorSDKType;
    signer: Uint8Array;
}
export declare const MsgReserveContributor: {
    encode(message: MsgReserveContributor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReserveContributor;
    fromJSON(object: any): MsgReserveContributor;
    toJSON(message: MsgReserveContributor): unknown;
    fromPartial(object: Partial<MsgReserveContributor>): MsgReserveContributor;
};
