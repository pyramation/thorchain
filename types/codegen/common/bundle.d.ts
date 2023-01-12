import * as _159 from "../thorchain/v1/common/common";
export declare const common: {
    Asset: {
        encode(message: _159.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Asset;
        fromJSON(object: any): _159.Asset;
        toJSON(message: _159.Asset): unknown;
        fromPartial(object: Partial<_159.Asset>): _159.Asset;
    };
    Coin: {
        encode(message: _159.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Coin;
        fromJSON(object: any): _159.Coin;
        toJSON(message: _159.Coin): unknown;
        fromPartial(object: Partial<_159.Coin>): _159.Coin;
    };
    PubKeySet: {
        encode(message: _159.PubKeySet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.PubKeySet;
        fromJSON(object: any): _159.PubKeySet;
        toJSON(message: _159.PubKeySet): unknown;
        fromPartial(object: Partial<_159.PubKeySet>): _159.PubKeySet;
    };
    Tx: {
        encode(message: _159.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Tx;
        fromJSON(object: any): _159.Tx;
        toJSON(message: _159.Tx): unknown;
        fromPartial(object: Partial<_159.Tx>): _159.Tx;
    };
    Fee: {
        encode(message: _159.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Fee;
        fromJSON(object: any): _159.Fee;
        toJSON(message: _159.Fee): unknown;
        fromPartial(object: Partial<_159.Fee>): _159.Fee;
    };
    ProtoUint: {
        encode(message: _159.ProtoUint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ProtoUint;
        fromJSON(object: any): _159.ProtoUint;
        toJSON(message: _159.ProtoUint): unknown;
        fromPartial(object: Partial<_159.ProtoUint>): _159.ProtoUint;
    };
};
