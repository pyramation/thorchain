import * as _m0 from "protobufjs/minimal";
export interface ReserveContributor {
    address: string;
    amount: string;
}
export interface ReserveContributorSDKType {
    address: string;
    amount: string;
}
export declare const ReserveContributor: {
    encode(message: ReserveContributor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReserveContributor;
    fromJSON(object: any): ReserveContributor;
    toJSON(message: ReserveContributor): unknown;
    fromPartial(object: Partial<ReserveContributor>): ReserveContributor;
};
