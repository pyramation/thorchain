import * as _m0 from "protobufjs/minimal";
export interface ChainContract {
    chain: string;
    router: string;
}
export interface ChainContractSDKType {
    chain: string;
    router: string;
}
export declare const ChainContract: {
    encode(message: ChainContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainContract;
    fromJSON(object: any): ChainContract;
    toJSON(message: ChainContract): unknown;
    fromPartial(object: Partial<ChainContract>): ChainContract;
};
