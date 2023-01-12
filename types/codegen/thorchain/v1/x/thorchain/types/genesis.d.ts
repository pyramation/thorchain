import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
}
export declare const GenesisState: {
    encode(_: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(_: any): GenesisState;
    toJSON(_: GenesisState): unknown;
    fromPartial(_: Partial<GenesisState>): GenesisState;
};
