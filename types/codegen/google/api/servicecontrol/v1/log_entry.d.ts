import { Timestamp, TimestampSDKType } from "../../../protobuf/timestamp";
import { LogSeverity } from "../../../logging/type/log_severity";
import { HttpRequest, HttpRequestSDKType } from "./http_request";
import { Any, AnySDKType } from "../../../protobuf/any";
import { Struct, StructSDKType } from "../../../protobuf/struct";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
export interface LogEntry_LabelsEntry {
    key: string;
    value: string;
}
export interface LogEntry_LabelsEntrySDKType {
    key: string;
    value: string;
}
/** An individual log entry. */
export interface LogEntry {
    /**
     * Required. The log to which this log entry belongs. Examples: `"syslog"`,
     * `"book_log"`.
     */
    name: string;
    /**
     * The time the event described by the log entry occurred. If
     * omitted, defaults to operation start time.
     */
    timestamp?: Timestamp;
    /**
     * The severity of the log entry. The default value is
     * `LogSeverity.DEFAULT`.
     */
    severity: LogSeverity;
    /**
     * Optional. Information about the HTTP request associated with this
     * log entry, if applicable.
     */
    httpRequest?: HttpRequest;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any.
     * If this field contains a relative resource name, you can assume the name is
     * relative to `//tracing.googleapis.com`. Example:
     * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace: string;
    /**
     * A unique ID for the log entry used for deduplication. If omitted,
     * the implementation will generate one based on operation_id.
     */
    insertId: string;
    /**
     * A set of user-defined (key, value) data that provides additional
     * information about the log entry.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * The log entry payload, represented as a protocol buffer that is
     * expressed as a JSON object. The only accepted type currently is
     * [AuditLog][google.cloud.audit.AuditLog].
     */
    protoPayload?: Any;
    /** The log entry payload, represented as a Unicode string (UTF-8). */
    textPayload?: string;
    /**
     * The log entry payload, represented as a structure that
     * is expressed as a JSON object.
     */
    structPayload?: Struct;
    /**
     * Optional. Information about an operation associated with the log entry, if
     * applicable.
     */
    operation?: LogEntryOperation;
    /**
     * Optional. Source code location information associated with the log entry,
     * if any.
     */
    sourceLocation?: LogEntrySourceLocation;
}
/** An individual log entry. */
export interface LogEntrySDKType {
    name: string;
    timestamp?: TimestampSDKType;
    severity: LogSeverity;
    http_request?: HttpRequestSDKType;
    trace: string;
    insert_id: string;
    labels: {
        [key: string]: string;
    };
    proto_payload?: AnySDKType;
    text_payload?: string;
    struct_payload?: StructSDKType;
    operation?: LogEntryOperationSDKType;
    source_location?: LogEntrySourceLocationSDKType;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperation {
    /**
     * Optional. An arbitrary operation identifier. Log entries with the
     * same identifier are assumed to be part of the same operation.
     */
    id: string;
    /**
     * Optional. An arbitrary producer identifier. The combination of
     * `id` and `producer` must be globally unique.  Examples for `producer`:
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
