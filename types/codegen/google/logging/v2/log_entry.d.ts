import { MonitoredResource, MonitoredResourceSDKType } from "../../api/monitored_resource";
import { Any, AnySDKType } from "../../protobuf/any";
import { Struct, StructSDKType } from "../../protobuf/struct";
import { Timestamp, TimestampSDKType } from "../../protobuf/timestamp";
import { LogSeverity } from "../type/log_severity";
import { HttpRequest, HttpRequestSDKType } from "../type/http_request";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface LogEntry_LabelsEntry {
    key: string;
    value: string;
}
export interface LogEntry_LabelsEntrySDKType {
    key: string;
    value: string;
}
/** An individual entry in a log. */
export interface LogEntry {
    /**
     * Required. The resource name of the log to which this log entry belongs:
     *
     *     "projects/[PROJECT_ID]/logs/[LOG_ID]"
     *     "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
     *     "folders/[FOLDER_ID]/logs/[LOG_ID]"
     *
     * A project number may be used in place of PROJECT_ID. The project number is
     * translated to its corresponding PROJECT_ID internally and the `log_name`
     * field will contain PROJECT_ID in queries and exports.
     *
     * `[LOG_ID]` must be URL-encoded within `log_name`. Example:
     * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
     *
     * `[LOG_ID]` must be less than 512 characters long and can only include the
     * following characters: upper and lower case alphanumeric characters,
     * forward-slash, underscore, hyphen, and period.
     *
     * For backward compatibility, if `log_name` begins with a forward-slash, such
     * as `/projects/...`, then the log entry is ingested as usual, but the
     * forward-slash is removed. Listing the log entry will not show the leading
     * slash and filtering for a log name with a leading slash will never return
     * any results.
     */
    logName: string;
    /**
     * Required. The monitored resource that produced this log entry.
     *
     * Example: a log entry that reports a database error would be associated with
     * the monitored resource designating the particular database that reported
     * the error.
     */
    resource?: MonitoredResource;
    /**
     * The log entry payload, represented as a protocol buffer. Some Google
     * Cloud Platform services use this field for their log entry payloads.
     *
     * The following protocol buffer types are supported; user-defined types
     * are not supported:
     *
     *   "type.googleapis.com/google.cloud.audit.AuditLog"
     *   "type.googleapis.com/google.appengine.logging.v1.RequestLog"
     */
    protoPayload?: Any;
    /** The log entry payload, represented as a Unicode string (UTF-8). */
    textPayload?: string;
    /**
     * The log entry payload, represented as a structure that is
     * expressed as a JSON object.
     */
    jsonPayload?: Struct;
    /**
     * Optional. The time the event described by the log entry occurred. This time is used
     * to compute the log entry's age and to enforce the logs retention period.
     * If this field is omitted in a new log entry, then Logging assigns it the
     * current time. Timestamps have nanosecond accuracy, but trailing zeros in
     * the fractional seconds might be omitted when the timestamp is displayed.
     *
     * Incoming log entries must have timestamps that don't exceed the
     * [logs retention
     * period](https://cloud.google.com/logging/quotas#logs_retention_periods) in
     * the past, and that don't exceed 24 hours in the future. Log entries outside
     * those time boundaries aren't ingested by Logging.
     */
    timestamp?: Timestamp;
    /** Output only. The time the log entry was received by Logging. */
    receiveTimestamp?: Timestamp;
    /** Optional. The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
    severity: LogSeverity;
    /**
     * Optional. A unique identifier for the log entry. If you provide a value, then
     * Logging considers other log entries in the same project, with the same
     * `timestamp`, and with the same `insert_id` to be duplicates which are
     * removed in a single query result. However, there are no guarantees of
     * de-duplication in the export of logs.
     *
     * If the `insert_id` is omitted when writing a log entry, the Logging API
     * assigns its own unique identifier in this field.
     *
     * In queries, the `insert_id` is also used to order log entries that have
     * the same `log_name` and `timestamp` values.
     */
    insertId: string;
    /**
     * Optional. Information about the HTTP request associated with this log entry, if
     * applicable.
     */
    httpRequest?: HttpRequest;
    /**
     * Optional. A map of key, value pairs that provides additional information about the
     * log entry. The labels can be user-defined or system-defined.
     *
     * User-defined labels are arbitrary key, value pairs that you can use to
     * classify logs.
     *
     * System-defined labels are defined by GCP services for platform logs.
     * They have two components - a service namespace component and the
     * attribute name. For example: `compute.googleapis.com/resource_name`.
     *
     * Cloud Logging truncates label keys that exceed 512 B and label
     * values that exceed 64 KB upon their associated log entry being
     * written. The truncation is indicated by an ellipsis at the
     * end of the character string.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Optional. Information about an operation associated with the log entry, if
     * applicable.
     */
    operation?: LogEntryOperation;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any. If it
     * contains a relative resource name, the name is assumed to be relative to
     * `//tracing.googleapis.com`. Example:
     * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace: string;
    /**
     * Optional. The span ID within the trace associated with the log entry.
     *
     * For Trace spans, this is the same format that the Trace API v2 uses: a
     * 16-character hexadecimal encoding of an 8-byte array, such as
     * `000000000000004a`.
     */
    spanId: string;
    /**
     * Optional. The sampling decision of the trace associated with the log entry.
     *
     * True means that the trace resource name in the `trace` field was sampled
     * for storage in a trace backend. False means that the trace was not sampled
     * for storage when this log entry was written, or the sampling decision was
     * unknown at the time. A non-sampled `trace` value is still useful as a
     * request correlation identifier. The default is False.
     */
    traceSampled: boolean;
    /** Optional. Source code location information associated with the log entry, if any. */
    sourceLocation?: LogEntrySourceLocation;
    /**
     * Optional. Information indicating this LogEntry is part of a sequence of multiple log
     * entries split from a single LogEntry.
     */
    split?: LogSplit;
}
/** An individual entry in a log. */
export interface LogEntrySDKType {
    log_name: string;
    resource?: MonitoredResourceSDKType;
    proto_payload?: AnySDKType;
    text_payload?: string;
    json_payload?: StructSDKType;
    timestamp?: TimestampSDKType;
    receive_timestamp?: TimestampSDKType;
    severity: LogSeverity;
    insert_id: string;
    http_request?: HttpRequestSDKType;
    labels: {
        [key: string]: string;
    };
    operation?: LogEntryOperationSDKType;
    trace: string;
    span_id: string;
    trace_sampled: boolean;
    source_location?: LogEntrySourceLocationSDKType;
    split?: LogSplitSDKType;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperation {
    /**
     * Optional. An arbitrary operation identifier. Log entries with the same
     * identifier are assumed to be part of the same operation.
     */
    id: string;
    /**
     * Optional. An arbitrary producer identifier. The combination of `id` and
     * `producer` must be globally unique. Examples for `producer`:
     * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
     */
    producer: string;
    /** Optional. Set this to True if this is the first log entry in the operation. */
    first: boolean;
    /** Optional. Set this to True if this is the last log entry in the operation. */
    last: boolean;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperationSDKType {
    id: string;
    producer: string;
    first: boolean;
    last: boolean;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocation {
    /**
     * Optional. Source file name. Depending on the runtime environment, this
     * might be a simple name or a fully-qualified name.
     */
    file: string;
    /**
     * Optional. Line within the source file. 1-based; 0 indicates no line number
     * available.
     */
    line: Long;
    /**
     * Optional. Human-readable name of the function or method being invoked, with
     * optional context such as the class or package name. This information may be
     * used in contexts such as the logs viewer, where a file and line number are
     * less meaningful. The format can vary by language. For example:
     * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
     * (Python).
     */
    function: string;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocationSDKType {
    file: string;
    line: Long;
    function: string;
}
/**
 * Additional information used to correlate multiple log entries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is
 * split across multiple log entries.
 */
export interface LogSplit {
    /**
     * A globally unique identifier for all log entries in a sequence of split log
     * entries. All log entries with the same |LogSplit.uid| are assumed to be
     * part of the same sequence of split log entries.
     */
    uid: string;
    /**
     * The index of this LogEntry in the sequence of split log entries. Log
     * entries are given |index| values 0, 1, ..., n-1 for a sequence of n log
     * entries.
     */
    index: number;
    /** The total number of log entries that the original LogEntry was split into. */
    totalSplits: number;
}
/**
 * Additional information used to correlate multiple log entries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is
 * split across multiple log entries.
 */
export interface LogSplitSDKType {
    uid: string;
    index: number;
    total_splits: number;
}
export declare const LogEntry_LabelsEntry: {
    encode(message: LogEntry_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry_LabelsEntry;
    fromJSON(object: any): LogEntry_LabelsEntry;
    toJSON(message: LogEntry_LabelsEntry): unknown;
    fromPartial(object: Partial<LogEntry_LabelsEntry>): LogEntry_LabelsEntry;
};
export declare const LogEntry: {
    encode(message: LogEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry;
    fromJSON(object: any): LogEntry;
    toJSON(message: LogEntry): unknown;
    fromPartial(object: Partial<LogEntry>): LogEntry;
};
export declare const LogEntryOperation: {
    encode(message: LogEntryOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntryOperation;
    fromJSON(object: any): LogEntryOperation;
    toJSON(message: LogEntryOperation): unknown;
    fromPartial(object: Partial<LogEntryOperation>): LogEntryOperation;
};
export declare const LogEntrySourceLocation: {
    encode(message: LogEntrySourceLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogEntrySourceLocation;
    fromJSON(object: any): LogEntrySourceLocation;
    toJSON(message: LogEntrySourceLocation): unknown;
    fromPartial(object: Partial<LogEntrySourceLocation>): LogEntrySourceLocation;
};
export declare const LogSplit: {
    encode(message: LogSplit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogSplit;
    fromJSON(object: any): LogSplit;
    toJSON(message: LogSplit): unknown;
    fromPartial(object: Partial<LogSplit>): LogSplit;
};
