import * as _160 from "./v1/x/thorchain/genesis";
export declare const thorchain: {
    LastChainHeight: {
        encode(message: _160.LastChainHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.LastChainHeight;
        fromJSON(object: any): _160.LastChainHeight;
        toJSON(message: _160.LastChainHeight): unknown;
        fromPartial(object: Partial<_160.LastChainHeight>): _160.LastChainHeight;
    };
    Mimir: {
        encode(message: _160.Mimir, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Mimir;
        fromJSON(object: any): _160.Mimir;
        toJSON(message: _160.Mimir): unknown;
        fromPartial(object: Partial<_160.Mimir>): _160.Mimir;
    };
    GenesisState: {
        encode(message: _160.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisState;
        fromJSON(object: any): _160.GenesisState;
        toJSON(message: _160.GenesisState): unknown;
        fromPartial(object: Partial<_160.GenesisState>): _160.GenesisState;
    };
};
