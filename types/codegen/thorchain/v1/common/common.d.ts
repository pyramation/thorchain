import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface Asset {
    chain: string;
    symbol: string;
    ticker: string;
    synth: boolean;
}
export interface AssetSDKType {
    chain: string;
    symbol: string;
    ticker: string;
    synth: boolean;
}
export interface Coin {
    asset?: Asset;
    amount: string;
    decimals: Long;
}
export interface CoinSDKType {
    asset?: AssetSDKType;
    amount: string;
    decimals: Long;
}
/** PubKeySet contains two pub keys , secp256k1 and ed25519 */
export interface PubKeySet {
    secp256k1: string;
    ed25519: string;
}
/** PubKeySet contains two pub keys , secp256k1 and ed25519 */
export interface PubKeySetSDKType {
    secp256k1: string;
    ed25519: string;
}
export interface Tx {
    id: string;
    chain: string;
    fromAddress: string;
    toAddress: string;
    coins: Coin[];
    gas: Coin[];
    memo: string;
}
export interface TxSDKType {
    id: string;
    chain: string;
    from_address: string;
    to_address: string;
    coins: CoinSDKType[];
    gas: CoinSDKType[];
    memo: string;
}
export interface Fee {
    coins: Coin[];
    poolDeduct: string;
}
export interface FeeSDKType {
    coins: CoinSDKType[];
    pool_deduct: string;
}
export interface ProtoUint {
    value: string;
}
export interface ProtoUintSDKType {
    value: string;
}
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial(object: Partial<Asset>): Asset;
};
export declare const Coin: {
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): unknown;
    fromPartial(object: Partial<Coin>): Coin;
};
export declare const PubKeySet: {
    encode(message: PubKeySet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKeySet;
    fromJSON(object: any): PubKeySet;
    toJSON(message: PubKeySet): unknown;
    fromPartial(object: Partial<PubKeySet>): PubKeySet;
};
export declare const Tx: {
    encode(message: Tx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tx;
    fromJSON(object: any): Tx;
    toJSON(message: Tx): unknown;
    fromPartial(object: Partial<Tx>): Tx;
};
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): unknown;
    fromPartial(object: Partial<Fee>): Fee;
};
export declare const ProtoUint: {
    encode(message: ProtoUint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtoUint;
    fromJSON(object: any): ProtoUint;
    toJSON(message: ProtoUint): unknown;
    fromPartial(object: Partial<ProtoUint>): ProtoUint;
};
