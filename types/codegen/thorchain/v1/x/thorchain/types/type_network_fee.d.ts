import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * NetworkFee represent the fee rate and typical transaction size outbound from
 * THORNode This is to keep the information reported by bifrost For BTC chain,
 * TransactionFeeRate should be sats/vbyte For Binance chain , given fee is
 * fixed , thus for single coin , transaction size will be 1, and the rate
 * should be 37500, for multiple coin , Transaction size should the number of
 * coins
 */
export interface NetworkFee {
    chain: string;
    transactionSize: Long;
    transactionFeeRate: Long;
}
/**
 * NetworkFee represent the fee rate and typical transaction size outbound from
 * THORNode This is to keep the information reported by bifrost For BTC chain,
 * TransactionFeeRate should be sats/vbyte For Binance chain , given fee is
 * fixed , thus for single coin , transaction size will be 1, and the rate
 * should be 37500, for multiple coin , Transaction size should the number of
 * coins
 */
export interface NetworkFeeSDKType {
    chain: string;
    transaction_size: Long;
    transaction_fee_rate: Long;
}
export declare const NetworkFee: {
    encode(message: NetworkFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkFee;
    fromJSON(object: any): NetworkFee;
    toJSON(message: NetworkFee): unknown;
    fromPartial(object: Partial<NetworkFee>): NetworkFee;
};
