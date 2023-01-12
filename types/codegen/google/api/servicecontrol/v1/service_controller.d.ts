import { Operation, OperationSDKType } from "./operation";
import { CheckError, CheckErrorSDKType } from "./check_error";
import { Status, StatusSDKType } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * The type of the consumer as defined in
 * [Google Resource Manager](https://cloud.google.com/resource-manager/).
 */
export declare enum CheckResponse_ConsumerInfo_ConsumerType {
    /** CONSUMER_TYPE_UNSPECIFIED - This is never used. */
    CONSUMER_TYPE_UNSPECIFIED = 0,
    /** PROJECT - The consumer is a Google Cloud Project. */
    PROJECT = 1,
    /** FOLDER - The consumer is a Google Cloud Folder. */
    FOLDER = 2,
    /** ORGANIZATION - The consumer is a Google Cloud Organization. */
    ORGANIZATION = 3,
    /**
     * SERVICE_SPECIFIC - Service-specific resource container which is defined by the service
     * producer to offer their users the ability to manage service control
     * functionalities at a finer level of granularity than the PROJECT.
     */
    SERVICE_SPECIFIC = 4,
    UNRECOGNIZED = -1
}
export declare const CheckResponse_ConsumerInfo_ConsumerTypeSDKType: typeof CheckResponse_ConsumerInfo_ConsumerType;
export declare function checkResponse_ConsumerInfo_ConsumerTypeFromJSON(object: any): CheckResponse_ConsumerInfo_ConsumerType;
export declare function checkResponse_ConsumerInfo_ConsumerTypeToJSON(object: CheckResponse_ConsumerInfo_ConsumerType): string;
/** Request message for the Check method. */
export interface CheckRequest {
    /**
     * The service name as specified in its service configuration. For example,
     * `"pubsub.googleapis.com"`.
     *
     * See
     * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
     * for the definition of a service name.
     */
    serviceName: string;
    /** The operation to be checked. */
    operation?: Operation;
    /**
     * Specifies which version of service configuration should be used to process
     * the request.
     *
     * If unspecified or no matching version can be found, the
     * latest one will be used.
     */
    serviceConfigId: string;
}
/** Request message for the Check method. */
export interface CheckRequestSDKType {
    service_name: string;
    operation?: OperationSDKType;
    service_config_id: string;
}
/** Response message for the Check method. */
export interface CheckResponse {
    /**
     * The same operation_id value used in the
     * [CheckRequest][google.api.servicecontrol.v1.CheckRequest]. Used for logging
     * and diagnostics purposes.
     */
    operationId: string;
    /**
     * Indicate the decision of the check.
     *
     * If no check errors are present, the service should process the operation.
     * Otherwise the service should use the list of errors to determine the
     * appropriate action.
     */
    checkErrors: CheckError[];
    /** The actual config id used to process the request. */
    serviceConfigId: string;
    /** The current service rollout id used to process the request. */
    serviceRolloutId: string;
    /** Feedback data returned from the server during processing a Check request. */
    checkInfo?: CheckResponse_CheckInfo;
}
/** Response message for the Check method. */
export interface CheckResponseSDKType {
    operation_id: string;
    check_errors: CheckErrorSDKType[];
    service_config_id: string;
    service_rollout_id: string;
    check_info?: CheckResponse_CheckInfoSDKType;
}
/** Contains additional information about the check operation. */
export interface CheckResponse_CheckInfo {
    /**
     * A list of fields and label keys that are ignored by the server.
     * The client doesn't need to send them for following requests to improve
     * performance and allow better aggregation.
     */
    unusedArguments: string[];
    /** Consumer info of this check. */
    consumerInfo?: CheckResponse_ConsumerInfo;
}
/** Contains additional information about the check operation. */
export interface CheckResponse_CheckInfoSDKType {
    unused_arguments: string[];
    consumer_info?: CheckResponse_ConsumerInfoSDKType;
}
/** `ConsumerInfo` provides information about the consumer. */
export interface CheckResponse_ConsumerInfo {
    /**
     * The Google cloud project number, e.g. 1234567890. A value of 0 indicates
     * no project number is found.
     *
     * NOTE: This field is deprecated after we support flexible consumer
     * id. New code should not depend on this field anymore.
     */
    projectNumber: Long;
    /**
     * The type of the consumer which should have been defined in
     * [Google Resource Manager](https://cloud.google.com/resource-manager/).
     */
    type: CheckResponse_ConsumerInfo_ConsumerType;
    /**
     * The consumer identity number, can be Google cloud project number, folder
     * number or organization number e.g. 1234567890. A value of 0 indicates no
     * consumer number is found.
     */
    consumerNumber: Long;
}
/** `ConsumerInfo` provides information about the consumer. */
export interface CheckResponse_ConsumerInfoSDKType {
    project_number: Long;
    type: CheckResponse_ConsumerInfo_ConsumerType;
    consumer_number: Long;
}
/** Request message for the Report method. */
export interface ReportRequest {
    /**
     * The service name as specified in its service configuration. For example,
     * `"pubsub.googleapis.com"`.
     *
     * See
     * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
     * for the definition of a service name.
     */
    serviceName: string;
    /**
     * Operations to be reported.
     *
     * Typically the service should report one operation per request.
     * Putting multiple operations into a single request is allowed, but should
     * be used only when multiple operations are natually available at the time
     * of the report.
     *
     * There is no limit on the number of operations in the same ReportRequest,
     * however the ReportRequest size should be no larger than 1MB. See
     * [ReportResponse.report_errors][google.api.servicecontrol.v1.ReportResponse.report_errors]
     * for partial failure behavior.
     */
    operations: Operation[];
    /**
     * Specifies which version of service config should be used to process the
     * request.
     *
     * If unspecified or no matching version can be found, the
     * latest one will be used.
     */
    serviceConfigId: string;
}
/** Request message for the Report method. */
export interface ReportRequestSDKType {
    service_name: string;
    operations: OperationSDKType[];
    service_config_id: string;
}
/** Response message for the Report method. */
export interface ReportResponse {
    /**
     * Partial failures, one for each `Operation` in the request that failed
     * processing. There are three possible combinations of the RPC status:
     *
     * 1. The combination of a successful RPC status and an empty `report_errors`
     *    list indicates a complete success where all `Operations` in the
     *    request are processed successfully.
     * 2. The combination of a successful RPC status and a non-empty
     *    `report_errors` list indicates a partial success where some
     *    `Operations` in the request succeeded. Each
     *    `Operation` that failed processing has a corresponding item
     *    in this list.
     * 3. A failed RPC status indicates a general non-deterministic failure.
     *    When this happens, it's impossible to know which of the
     *    'Operations' in the request succeeded or failed.
     */
    reportErrors: ReportResponse_ReportError[];
    /** The actual config id used to process the request. */
    serviceConfigId: string;
    /** The current service rollout id used to process the request. */
    serviceRolloutId: string;
}
/** Response message for the Report method. */
export interface ReportResponseSDKType {
    report_errors: ReportResponse_ReportErrorSDKType[];
    service_config_id: string;
    service_rollout_id: string;
}
/**
 * Represents the processing error of one
 * [Operation][google.api.servicecontrol.v1.Operation] in the request.
 */
export interface ReportResponse_ReportError {
    /**
     * The
     * [Operation.operation_id][google.api.servicecontrol.v1.Operation.operation_id]
     * value from the request.
     */
    operationId: string;
    /**
     * Details of the error when processing the
     * [Operation][google.api.servicecontrol.v1.Operation].
     */
    status?: Status;
}
/**
 * Represents the processing error of one
 * [Operation][google.api.servicecontrol.v1.Operation] in the request.
 */
export interface ReportResponse_ReportErrorSDKType {
    operation_id: string;
    status?: StatusSDKType;
}
export declare const CheckRequest: {
    encode(message: CheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest;
    fromJSON(object: any): CheckRequest;
    toJSON(message: CheckRequest): unknown;
    fromPartial(object: Partial<CheckRequest>): CheckRequest;
};
export declare const CheckResponse: {
    encode(message: CheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse;
    fromJSON(object: any): CheckResponse;
    toJSON(message: CheckResponse): unknown;
    fromPartial(object: Partial<CheckResponse>): CheckResponse;
};
export declare const CheckResponse_CheckInfo: {
    encode(message: CheckResponse_CheckInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_CheckInfo;
    fromJSON(object: any): CheckResponse_CheckInfo;
    toJSON(message: CheckResponse_CheckInfo): unknown;
    fromPartial(object: Partial<CheckResponse_CheckInfo>): CheckResponse_CheckInfo;
};
export declare const CheckResponse_ConsumerInfo: {
    encode(message: CheckResponse_ConsumerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_ConsumerInfo;
    fromJSON(object: any): CheckResponse_ConsumerInfo;
    toJSON(message: CheckResponse_ConsumerInfo): unknown;
    fromPartial(object: Partial<CheckResponse_ConsumerInfo>): CheckResponse_ConsumerInfo;
};
export declare const ReportRequest: {
    encode(message: ReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest;
    fromJSON(object: any): ReportRequest;
    toJSON(message: ReportRequest): unknown;
    fromPartial(object: Partial<ReportRequest>): ReportRequest;
};
export declare const ReportResponse: {
    encode(message: ReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse;
    fromJSON(object: any): ReportResponse;
    toJSON(message: ReportResponse): unknown;
    fromPartial(object: Partial<ReportResponse>): ReportResponse;
};
export declare const ReportResponse_ReportError: {
    encode(message: ReportResponse_ReportError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse_ReportError;
    fromJSON(object: any): ReportResponse_ReportError;
    toJSON(message: ReportResponse_ReportError): unknown;
    fromPartial(object: Partial<ReportResponse_ReportError>): ReportResponse_ReportError;
};
