import * as _m0 from "protobufjs/minimal";
export interface ProtocolOwnedLiquidity {
    runeDeposited: string;
    runeWithdrawn: string;
}
export interface ProtocolOwnedLiquiditySDKType {
    rune_deposited: string;
    rune_withdrawn: string;
}
export declare const ProtocolOwnedLiquidity: {
    encode(message: ProtocolOwnedLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolOwnedLiquidity;
    fromJSON(object: any): ProtocolOwnedLiquidity;
    toJSON(message: ProtocolOwnedLiquidity): unknown;
    fromPartial(object: Partial<ProtocolOwnedLiquidity>): ProtocolOwnedLiquidity;
};
