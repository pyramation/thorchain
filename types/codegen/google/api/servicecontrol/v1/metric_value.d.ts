import { Timestamp, TimestampSDKType } from "../../../protobuf/timestamp";
import { Distribution, DistributionSDKType } from "./distribution";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
export interface MetricValue_LabelsEntry {
    key: string;
    value: string;
}
export interface MetricValue_LabelsEntrySDKType {
    key: string;
    value: string;
}
/** Represents a single metric value. */
export interface MetricValue {
    /**
     * The labels describing the metric value.
     * See comments on [google.api.servicecontrol.v1.Operation.labels][google.api.servicecontrol.v1.Operation.labels] for
     * the overriding relationship.
     * Note that this map must not contain monitored resource labels.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * The start of the time period over which this metric value's measurement
     * applies. The time period has different semantics for different metric
     * types (cumulative, delta, and gauge). See the metric definition
     * documentation in the service configuration for details. If not specified,
     * [google.api.servicecontrol.v1.Operation.start_time][google.api.servicecontrol.v1.Operation.start_time] will be used.
     */
    startTime?: Timestamp;
    /**
     * The end of the time period over which this metric value's measurement
     * applies.  If not specified,
     * [google.api.servicecontrol.v1.Operation.end_time][google.api.servicecontrol.v1.Operation.end_time] will be used.
     */
    endTime?: Timestamp;
    /** A boolean value. */
    boolValue?: boolean;
    /** A signed 64-bit integer value. */
    int64Value?: Long;
    /** A double precision floating point value. */
    doubleValue?: number;
    /** A text string value. */
    stringValue?: string;
    /** A distribution value. */
    distributionValue?: Distribution;
}
/** Represents a single metric value. */
export interface MetricValueSDKType {
    labels: {
        [key: string]: string;
    };
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
    bool_value?: boolean;
    int64_value?: Long;
    double_value?: number;
    string_value?: string;
    distribution_value?: DistributionSDKType;
}
/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 */
export interface MetricValueSet {
    /** The metric name defined in the service configuration. */
    metricName: string;
    /** The values in this metric. */
    metricValues: MetricValue[];
}
/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 */
export interface MetricValueSetSDKType {
    metric_name: string;
    metric_values: MetricValueSDKType[];
}
export declare const MetricValue_LabelsEntry: {
    encode(message: MetricValue_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetricValue_LabelsEntry;
    fromJSON(object: any): MetricValue_LabelsEntry;
    toJSON(message: MetricValue_LabelsEntry): unknown;
    fromPartial(object: Partial<MetricValue_LabelsEntry>): MetricValue_LabelsEntry;
};
export declare const MetricValue: {
    encode(message: MetricValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetricValue;
    fromJSON(object: any): MetricValue;
    toJSON(message: MetricValue): unknown;
    fromPartial(object: Partial<MetricValue>): MetricValue;
};
export declare const MetricValueSet: {
    encode(message: MetricValueSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetricValueSet;
    fromJSON(object: any): MetricValueSet;
    toJSON(message: MetricValueSet): unknown;
    fromPartial(object: Partial<MetricValueSet>): MetricValueSet;
};
