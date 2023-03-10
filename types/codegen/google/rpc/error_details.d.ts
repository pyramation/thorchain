import { Duration, DurationSDKType } from "../protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 *
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 *
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfo {
    /** Clients should wait at least this long between retrying the same request. */
    retryDelay?: Duration;
}
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 *
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 *
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfoSDKType {
    retry_delay?: DurationSDKType;
}
/** Describes additional debugging info. */
export interface DebugInfo {
    /** The stack trace entries indicating where the error occurred. */
    stackEntries: string[];
    /** Additional debugging information provided by the server. */
    detail: string;
}
/** Describes additional debugging info. */
export interface DebugInfoSDKType {
    stack_entries: string[];
    detail: string;
}
/**
 * Describes how a quota check failed.
 *
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 *
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailure {
    /** Describes all quota violations. */
    violations: QuotaFailure_Violation[];
}
/**
 * Describes how a quota check failed.
 *
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 *
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailureSDKType {
    violations: QuotaFailure_ViolationSDKType[];
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_Violation {
    /**
     * The subject on which the quota check failed.
     * For example, "clientip:<ip address of client>" or "project:<Google
     * developer project id>".
     */
    subject: string;
    /**
     * A description of how the quota check failed. Clients can use this
     * description to find more about the quota configuration in the service's
     * public documentation, or find the relevant quota limit to adjust through
     * developer console.
     *
     * For example: "Service disabled" or "Daily Limit for read operations
     * exceeded".
     */
    description: string;
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_ViolationSDKType {
    subject: string;
    description: string;
}
export interface ErrorInfo_MetadataEntry {
    key: string;
    value: string;
}
export interface ErrorInfo_MetadataEntrySDKType {
    key: string;
    value: string;
}
/**
 * Describes the cause of the error with structured details.
 *
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 *
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 *
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 *
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 *
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfo {
    /**
     * The reason of the error. This is a constant value that identifies the
     * proximate cause of the error. Error reasons are unique within a particular
     * domain of errors. This should be at most 63 characters and match
     * /[A-Z0-9_]+/.
     */
    reason: string;
    /**
     * The logical grouping to which the "reason" belongs. The error domain
     * is typically the registered service name of the tool or product that
     * generates the error. Example: "pubsub.googleapis.com". If the error is
     * generated by some common infrastructure, the error domain must be a
     * globally unique value that identifies the infrastructure. For Google API
     * infrastructure, the error domain is "googleapis.com".
     */
    domain: string;
    /**
     * Additional structured details about this error.
     *
     * Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in
     * length. When identifying the current value of an exceeded limit, the units
     * should be contained in the key, not the value.  For example, rather than
     * {"instanceLimit": "100/request"}, should be returned as,
     * {"instanceLimitPerRequest": "100"}, if the client exceeds the number of
     * instances that can be created in a single (batch) request.
     */
    metadata: {
        [key: string]: string;
    };
}
/**
 * Describes the cause of the error with structured details.
 *
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 *
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 *
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 *
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 *
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfoSDKType {
    reason: string;
    domain: string;
    metadata: {
        [key: string]: string;
    };
}
/**
 * Describes what preconditions have failed.
 *
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailure {
    /** Describes all precondition violations. */
    violations: PreconditionFailure_Violation[];
}
/**
 * Describes what preconditions have failed.
 *
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailureSDKType {
    violations: PreconditionFailure_ViolationSDKType[];
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_Violation {
    /**
     * The type of PreconditionFailure. We recommend using a service-specific
     * enum type to define the supported precondition violation subjects. For
     * example, "TOS" for "Terms of Service violation".
     */
    type: string;
    /**
     * The subject, relative to the type, that failed.
     * For example, "google.com/cloud" relative to the "TOS" type would indicate
     * which terms of service is being referenced.
     */
    subject: string;
    /**
     * A description of how the precondition failed. Developers can use this
     * description to understand how to fix the failure.
     *
     * For example: "Terms of service not accepted".
     */
    description: string;
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_ViolationSDKType {
    type: string;
    subject: string;
    description: string;
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequest {
    /** Describes all violations in a client request. */
    fieldViolations: BadRequest_FieldViolation[];
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequestSDKType {
    field_violations: BadRequest_FieldViolationSDKType[];
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolation {
    /**
     * A path leading to a field in the request body. The value will be a
     * sequence of dot-separated identifiers that identify a protocol buffer
     * field. E.g., "field_violations.field" would identify this field.
     */
    field: string;
    /** A description of why the request element is bad. */
    description: string;
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolationSDKType {
    field: string;
    description: string;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfo {
    /**
     * An opaque string that should only be interpreted by the service generating
     * it. For example, it can be used to identify requests in the service's logs.
     */
    requestId: string;
    /**
     * Any data that was used to serve this request. For example, an encrypted
     * stack trace that can be sent back to the service provider for debugging.
     */
    servingData: string;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfoSDKType {
    request_id: string;
    serving_data: string;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfo {
    /**
     * A name for the type of resource being accessed, e.g. "sql table",
     * "cloud storage bucket", "file", "Google calendar"; or the type URL
     * of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
     */
    resourceType: string;
    /**
     * The name of the resource being accessed.  For example, a shared calendar
     * name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
     * error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
     */
    resourceName: string;
    /**
     * The owner of the resource (optional).
     * For example, "user:<owner email>" or "project:<Google developer project
     * id>".
     */
    owner: string;
    /**
     * Describes what error is encountered when accessing this resource.
     * For example, updating a cloud project may require the `writer` permission
     * on the developer console project.
     */
    description: string;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfoSDKType {
    resource_type: string;
    resource_name: string;
    owner: string;
    description: string;
}
/**
 * Provides links to documentation or for performing an out of band action.
 *
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface Help {
    /** URL(s) pointing to additional information on handling the current error. */
    links: Help_Link[];
}
/**
 * Provides links to documentation or for performing an out of band action.
 *
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface HelpSDKType {
    links: Help_LinkSDKType[];
}
/** Describes a URL link. */
export interface Help_Link {
    /** Describes what the link offers. */
    description: string;
    /** The URL of the link. */
    url: string;
}
/** Describes a URL link. */
export interface Help_LinkSDKType {
    description: string;
    url: string;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessage {
    /**
     * The locale used following the specification defined at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
     * Examples are: "en-US", "fr-CH", "es-MX"
     */
    locale: string;
    /** The localized error message in the above locale. */
    message: string;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessageSDKType {
    locale: string;
    message: string;
}
export declare const RetryInfo: {
    encode(message: RetryInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryInfo;
    fromJSON(object: any): RetryInfo;
    toJSON(message: RetryInfo): unknown;
    fromPartial(object: Partial<RetryInfo>): RetryInfo;
};
export declare const DebugInfo: {
    encode(message: DebugInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DebugInfo;
    fromJSON(object: any): DebugInfo;
    toJSON(message: DebugInfo): unknown;
    fromPartial(object: Partial<DebugInfo>): DebugInfo;
};
export declare const QuotaFailure: {
    encode(message: QuotaFailure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure;
    fromJSON(object: any): QuotaFailure;
    toJSON(message: QuotaFailure): unknown;
    fromPartial(object: Partial<QuotaFailure>): QuotaFailure;
};
export declare const QuotaFailure_Violation: {
    encode(message: QuotaFailure_Violation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure_Violation;
    fromJSON(object: any): QuotaFailure_Violation;
    toJSON(message: QuotaFailure_Violation): unknown;
    fromPartial(object: Partial<QuotaFailure_Violation>): QuotaFailure_Violation;
};
export declare const ErrorInfo_MetadataEntry: {
    encode(message: ErrorInfo_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorInfo_MetadataEntry;
    fromJSON(object: any): ErrorInfo_MetadataEntry;
    toJSON(message: ErrorInfo_MetadataEntry): unknown;
    fromPartial(object: Partial<ErrorInfo_MetadataEntry>): ErrorInfo_MetadataEntry;
};
export declare const ErrorInfo: {
    encode(message: ErrorInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorInfo;
    fromJSON(object: any): ErrorInfo;
    toJSON(message: ErrorInfo): unknown;
    fromPartial(object: Partial<ErrorInfo>): ErrorInfo;
};
export declare const PreconditionFailure: {
    encode(message: PreconditionFailure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PreconditionFailure;
    fromJSON(object: any): PreconditionFailure;
    toJSON(message: PreconditionFailure): unknown;
    fromPartial(object: Partial<PreconditionFailure>): PreconditionFailure;
};
export declare const PreconditionFailure_Violation: {
    encode(message: PreconditionFailure_Violation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PreconditionFailure_Violation;
    fromJSON(object: any): PreconditionFailure_Violation;
    toJSON(message: PreconditionFailure_Violation): unknown;
    fromPartial(object: Partial<PreconditionFailure_Violation>): PreconditionFailure_Violation;
};
export declare const BadRequest: {
    encode(message: BadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BadRequest;
    fromJSON(object: any): BadRequest;
    toJSON(message: BadRequest): unknown;
    fromPartial(object: Partial<BadRequest>): BadRequest;
};
export declare const BadRequest_FieldViolation: {
    encode(message: BadRequest_FieldViolation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BadRequest_FieldViolation;
    fromJSON(object: any): BadRequest_FieldViolation;
    toJSON(message: BadRequest_FieldViolation): unknown;
    fromPartial(object: Partial<BadRequest_FieldViolation>): BadRequest_FieldViolation;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): unknown;
    fromPartial(object: Partial<RequestInfo>): RequestInfo;
};
export declare const ResourceInfo: {
    encode(message: ResourceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInfo;
    fromJSON(object: any): ResourceInfo;
    toJSON(message: ResourceInfo): unknown;
    fromPartial(object: Partial<ResourceInfo>): ResourceInfo;
};
export declare const Help: {
    encode(message: Help, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Help;
    fromJSON(object: any): Help;
    toJSON(message: Help): unknown;
    fromPartial(object: Partial<Help>): Help;
};
export declare const Help_Link: {
    encode(message: Help_Link, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Help_Link;
    fromJSON(object: any): Help_Link;
    toJSON(message: Help_Link): unknown;
    fromPartial(object: Partial<Help_Link>): Help_Link;
};
export declare const LocalizedMessage: {
    encode(message: LocalizedMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalizedMessage;
    fromJSON(object: any): LocalizedMessage;
    toJSON(message: LocalizedMessage): unknown;
    fromPartial(object: Partial<LocalizedMessage>): LocalizedMessage;
};
