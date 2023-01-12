import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TssKeysignFailVoter {
    id: string;
    height: Long;
    signers: string[];
}
export interface TssKeysignFailVoterSDKType {
    id: string;
    height: Long;
    signers: string[];
}
export declare const TssKeysignFailVoter: {
    encode(message: TssKeysignFailVoter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TssKeysignFailVoter;
    fromJSON(object: any): TssKeysignFailVoter;
    toJSON(message: TssKeysignFailVoter): unknown;
    fromPartial(object: Partial<TssKeysignFailVoter>): TssKeysignFailVoter;
};
