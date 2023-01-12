import { Tx, TxSDKType } from "../../../common/common";
import { TxOutItem, TxOutItemSDKType } from "./type_tx_out";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum Status {
    incomplete = 0,
    done = 1,
    reverted = 2,
    UNRECOGNIZED = -1
}
export declare const StatusSDKType: typeof Status;
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
export interface ObservedTx {
    tx?: Tx;
    status: Status;
    outHashes: string[];
    blockHeight: Long;
    signers: string[];
    observedPubKey: string;
    keysignMs: Long;
    finaliseHeight: Long;
    aggregator: string;
    aggregatorTarget: string;
    aggregatorTargetLimit: string;
}
export interface ObservedTxSDKType {
    tx?: TxSDKType;
    status: Status;
    out_hashes: string[];
    block_height: Long;
    signers: string[];
    observed_pub_key: string;
    keysign_ms: Long;
    finalise_height: Long;
    aggregator: string;
    aggregator_target: string;
    aggregator_target_limit: string;
}
export interface ObservedTxVoter {
    txId: string;
    tx?: ObservedTx;
    height: Long;
    txs: ObservedTx[];
    actions: TxOutItem[];
    outTxs: Tx[];
    finalisedHeight: Long;
    updatedVault: boolean;
    reverted: boolean;
    outboundHeight: Long;
}
export interface ObservedTxVoterSDKType {
    tx_id: string;
    tx?: ObservedTxSDKType;
    height: Long;
    txs: ObservedTxSDKType[];
    actions: TxOutItemSDKType[];
    out_txs: TxSDKType[];
    finalised_height: Long;
    updated_vault: boolean;
    reverted: boolean;
    outbound_height: Long;
}
export declare const ObservedTx: {
    encode(message: ObservedTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObservedTx;
    fromJSON(object: any): ObservedTx;
    toJSON(message: ObservedTx): unknown;
    fromPartial(object: Partial<ObservedTx>): ObservedTx;
};
export declare const ObservedTxVoter: {
    encode(message: ObservedTxVoter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObservedTxVoter;
    fromJSON(object: any): ObservedTxVoter;
    toJSON(message: ObservedTxVoter): unknown;
    fromPartial(object: Partial<ObservedTxVoter>): ObservedTxVoter;
};
