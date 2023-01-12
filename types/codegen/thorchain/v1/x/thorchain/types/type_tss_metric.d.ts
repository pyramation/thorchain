import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NodeTssTime {
    address: Uint8Array;
    tssTime: Long;
}
export interface NodeTssTimeSDKType {
    address: Uint8Array;
    tss_time: Long;
}
export interface TssKeygenMetric {
    pubKey: string;
    nodeTssTimes: NodeTssTime[];
}
export interface TssKeygenMetricSDKType {
    pub_key: string;
    node_tss_times: NodeTssTimeSDKType[];
}
export interface TssKeysignMetric {
    txId: string;
    nodeTssTimes: NodeTssTime[];
}
export interface TssKeysignMetricSDKType {
    tx_id: string;
    node_tss_times: NodeTssTimeSDKType[];
}
export declare const NodeTssTime: {
    encode(message: NodeTssTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeTssTime;
    fromJSON(object: any): NodeTssTime;
    toJSON(message: NodeTssTime): unknown;
    fromPartial(object: Partial<NodeTssTime>): NodeTssTime;
};
export declare const TssKeygenMetric: {
    encode(message: TssKeygenMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TssKeygenMetric;
    fromJSON(object: any): TssKeygenMetric;
    toJSON(message: TssKeygenMetric): unknown;
    fromPartial(object: Partial<TssKeygenMetric>): TssKeygenMetric;
};
export declare const TssKeysignMetric: {
    encode(message: TssKeysignMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TssKeysignMetric;
    fromJSON(object: any): TssKeysignMetric;
    toJSON(message: TssKeysignMetric): unknown;
    fromPartial(object: Partial<TssKeysignMetric>): TssKeysignMetric;
};
