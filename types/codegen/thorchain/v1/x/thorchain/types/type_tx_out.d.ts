import { Coin, CoinSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TxOutItem {
    chain: string;
    toAddress: string;
    vaultPubKey: string;
    coin?: Coin;
    memo: string;
    maxGas: Coin[];
    gasRate: Long;
    inHash: string;
    outHash: string;
    moduleName: string;
    aggregator: string;
    aggregatorTargetAsset: string;
    aggregatorTargetLimit: string;
}
export interface TxOutItemSDKType {
    chain: string;
    to_address: string;
    vault_pub_key: string;
    coin?: CoinSDKType;
    memo: string;
    max_gas: CoinSDKType[];
    gas_rate: Long;
    in_hash: string;
    out_hash: string;
    module_name: string;
    aggregator: string;
    aggregator_target_asset: string;
    aggregator_target_limit: string;
}
export interface TxOut {
    height: Long;
    txArray: TxOutItem[];
}
export interface TxOutSDKType {
    height: Long;
    tx_array: TxOutItemSDKType[];
}
export declare const TxOutItem: {
    encode(message: TxOutItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxOutItem;
    fromJSON(object: any): TxOutItem;
    toJSON(message: TxOutItem): unknown;
    fromPartial(object: Partial<TxOutItem>): TxOutItem;
};
export declare const TxOut: {
    encode(message: TxOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxOut;
    fromJSON(object: any): TxOut;
    toJSON(message: TxOut): unknown;
    fromPartial(object: Partial<TxOut>): TxOut;
};
