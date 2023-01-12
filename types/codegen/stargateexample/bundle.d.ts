import * as _161 from "../thorchain/v1/x/thorchain/types/genesis";
export declare namespace stargateexample {
    namespace stargateexample {
        const v1beta1: {
            GenesisState: {
                encode(_: _161.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisState;
                fromJSON(_: any): _161.GenesisState;
                toJSON(_: _161.GenesisState): unknown;
                fromPartial(_: Partial<_161.GenesisState>): _161.GenesisState;
            };
        };
    }
}
