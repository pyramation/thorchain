import { Service, ServiceSDKType } from "./resources";
import * as _m0 from "protobufjs/minimal";
/**
 * Enum to determine if service usage should be checked when disabling a
 * service.
 */
export declare enum DisableServiceRequest_CheckIfServiceHasUsage {
    /** CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED - When unset, the default behavior is used, which is SKIP. */
    CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED = 0,
    /** SKIP - If set, skip checking service usage when disabling a service. */
    SKIP = 1,
    /**
     * CHECK - If set, service usage is checked when disabling the service. If a
     * service, or its dependents, has usage in the last 30 days, the request
     * returns a FAILED_PRECONDITION error.
     */
    CHECK = 2,
    UNRECOGNIZED = -1
}
export declare const DisableServiceRequest_CheckIfServiceHasUsageSDKType: typeof DisableServiceRequest_CheckIfServiceHasUsage;
export declare function disableServiceRequest_CheckIfServiceHasUsageFromJSON(object: any): DisableServiceRequest_CheckIfServiceHasUsage;
export declare function disableServiceRequest_CheckIfServiceHasUsageToJSON(object: DisableServiceRequest_CheckIfServiceHasUsage): string;
/** Request message for the `EnableService` method. */
export interface EnableServiceRequest {
    /**
     * Name of the consumer and service to enable the service on.
     *
     * The `EnableService` and `DisableService` methods currently only support
     * projects.
     *
     * Enabling a service requires that the service is public or is shared with
     * the user enabling the service.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number.
     */
    name: string;
}
/** Request message for the `EnableService` method. */
export interface EnableServiceRequestSDKType {
    name: string;
}
/**
 * Response message for the `EnableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface EnableServiceResponse {
    /** The new state of the service after enabling. */
    service?: Service;
}
/**
 * Response message for the `EnableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface EnableServiceResponseSDKType {
    service?: ServiceSDKType;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequest {
    /**
     * Name of the consumer and service to disable the service on.
     *
     * The enable and disable methods currently only support projects.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number.
     */
    name: string;
    /**
     * Indicates if services that are enabled and which depend on this service
     * should also be disabled. If not set, an error will be generated if any
     * enabled services depend on the service to be disabled. When set, the
     * service, and any enabled services that depend on it, will be disabled
     * together.
     */
    disableDependentServices: boolean;
    /** Defines the behavior for checking service usage when disabling a service. */
    checkIfServiceHasUsage: DisableServiceRequest_CheckIfServiceHasUsage;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequestSDKType {
    name: string;
    disable_dependent_services: boolean;
    check_if_service_has_usage: DisableServiceRequest_CheckIfServiceHasUsage;
}
/**
 * Response message for the `DisableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface DisableServiceResponse {
    /** The new state of the service after disabling. */
    service?: Service;
}
/**
 * Response message for the `DisableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface DisableServiceResponseSDKType {
    service?: ServiceSDKType;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequest {
    /**
     * Name of the consumer and service to get the `ConsumerState` for.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number.
     */
    name: string;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequestSDKType {
    name: string;
}
/** Request message for the `ListServices` method. */
export interface ListServicesRequest {
    /**
     * Parent to search for services on.
     *
     * An example name would be:
     * `projects/123` where `123` is the project number.
     */
    parent: string;
    /**
     * Requested size of the next page of data.
     * Requested page size cannot exceed 200.
     * If not set, the default page size is 50.
     */
    pageSize: number;
    /**
     * Token identifying which result to start with, which is returned by a
     * previous list call.
     */
    pageToken: string;
    /**
     * Only list services that conform to the given filter.
     * The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
     */
    filter: string;
}
/** Request message for the `ListServices` method. */
export interface ListServicesRequestSDKType {
    parent: string;
    page_size: number;
    page_token: string;
    filter: string;
}
/** Response message for the `ListServices` method. */
export interface ListServicesResponse {
    /** The available services for the requested project. */
    services: Service[];
    /**
     * Token that can be passed to `ListServices` to resume a paginated
     * query.
     */
    nextPageToken: string;
}
/** Response message for the `ListServices` method. */
export interface ListServicesResponseSDKType {
    services: ServiceSDKType[];
    next_page_token: string;
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequest {
    /**
     * Parent to enable services on.
     *
     * An example name would be:
     * `projects/123` where `123` is the project number.
     *
     * The `BatchEnableServices` method currently only supports projects.
     */
    parent: string;
    /**
     * The identifiers of the services to enable on the project.
     *
     * A valid identifier would be:
     * serviceusage.googleapis.com
     *
     * Enabling services requires that each service is public or is shared with
     * the user enabling the service.
     *
     * A single request can enable a maximum of 20 services at a time. If more
     * than 20 services are specified, the request will fail, and no state changes
     * will occur.
     */
    serviceIds: string[];
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequestSDKType {
    parent: string;
    service_ids: string[];
}
/**
 * Response message for the `BatchEnableServices` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface BatchEnableServicesResponse {
    /** The new state of the services after enabling. */
    services: Service[];
    /**
     * If allow_partial_success is true, and one or more services could not be
     * enabled, this field contains the details about each failure.
     */
    failures: BatchEnableServicesResponse_EnableFailure[];
}
/**
 * Response message for the `BatchEnableServices` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface BatchEnableServicesResponseSDKType {
    services: ServiceSDKType[];
    failures: BatchEnableServicesResponse_EnableFailureSDKType[];
}
/** Provides error messages for the failing services. */
export interface BatchEnableServicesResponse_EnableFailure {
    /** The service id of a service that could not be enabled. */
    serviceId: string;
    /** An error message describing why the service could not be enabled. */
    errorMessage: string;
}
/** Provides error messages for the failing services. */
export interface BatchEnableServicesResponse_EnableFailureSDKType {
    service_id: string;
    error_message: string;
}
/** Request message for the `BatchGetServices` method. */
export interface BatchGetServicesRequest {
    /**
     * Parent to retrieve services from.
     * If this is set, the parent of all of the services specified in `names` must
     * match this field. An example name would be: `projects/123` where `123` is
     * the project number. The `BatchGetServices` method currently only supports
     * projects.
     */
    parent: string;
    /**
     * Names of the services to retrieve.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number.
     * A single request can get a maximum of 30 services at a time.
     */
    names: string[];
}
/** Request message for the `BatchGetServices` method. */
export interface BatchGetServicesRequestSDKType {
    parent: string;
    names: string[];
}
/** Response message for the `BatchGetServices` method. */
export interface BatchGetServicesResponse {
    /** The requested Service states. */
    services: Service[];
}
/** Response message for the `BatchGetServices` method. */
export interface BatchGetServicesResponseSDKType {
    services: ServiceSDKType[];
}
export declare const EnableServiceRequest: {
    encode(message: EnableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceRequest;
    fromJSON(object: any): EnableServiceRequest;
    toJSON(message: EnableServiceRequest): unknown;
    fromPartial(object: Partial<EnableServiceRequest>): EnableServiceRequest;
};
export declare const EnableServiceResponse: {
    encode(message: EnableServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceResponse;
    fromJSON(object: any): EnableServiceResponse;
    toJSON(message: EnableServiceResponse): unknown;
    fromPartial(object: Partial<EnableServiceResponse>): EnableServiceResponse;
};
export declare const DisableServiceRequest: {
    encode(message: DisableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceRequest;
    fromJSON(object: any): DisableServiceRequest;
    toJSON(message: DisableServiceRequest): unknown;
    fromPartial(object: Partial<DisableServiceRequest>): DisableServiceRequest;
};
export declare const DisableServiceResponse: {
    encode(message: DisableServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceResponse;
    fromJSON(object: any): DisableServiceResponse;
    toJSON(message: DisableServiceResponse): unknown;
    fromPartial(object: Partial<DisableServiceResponse>): DisableServiceResponse;
};
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    fromPartial(object: Partial<GetServiceRequest>): GetServiceRequest;
};
export declare const ListServicesRequest: {
    encode(message: ListServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest;
    fromJSON(object: any): ListServicesRequest;
    toJSON(message: ListServicesRequest): unknown;
    fromPartial(object: Partial<ListServicesRequest>): ListServicesRequest;
};
export declare const ListServicesResponse: {
    encode(message: ListServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse;
    fromJSON(object: any): ListServicesResponse;
    toJSON(message: ListServicesResponse): unknown;
    fromPartial(object: Partial<ListServicesResponse>): ListServicesResponse;
};
export declare const BatchEnableServicesRequest: {
    encode(message: BatchEnableServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesRequest;
    fromJSON(object: any): BatchEnableServicesRequest;
    toJSON(message: BatchEnableServicesRequest): unknown;
    fromPartial(object: Partial<BatchEnableServicesRequest>): BatchEnableServicesRequest;
};
export declare const BatchEnableServicesResponse: {
    encode(message: BatchEnableServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse;
    fromJSON(object: any): BatchEnableServicesResponse;
    toJSON(message: BatchEnableServicesResponse): unknown;
    fromPartial(object: Partial<BatchEnableServicesResponse>): BatchEnableServicesResponse;
};
export declare const BatchEnableServicesResponse_EnableFailure: {
    encode(message: BatchEnableServicesResponse_EnableFailure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse_EnableFailure;
    fromJSON(object: any): BatchEnableServicesResponse_EnableFailure;
    toJSON(message: BatchEnableServicesResponse_EnableFailure): unknown;
    fromPartial(object: Partial<BatchEnableServicesResponse_EnableFailure>): BatchEnableServicesResponse_EnableFailure;
};
export declare const BatchGetServicesRequest: {
    encode(message: BatchGetServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesRequest;
    fromJSON(object: any): BatchGetServicesRequest;
    toJSON(message: BatchGetServicesRequest): unknown;
    fromPartial(object: Partial<BatchGetServicesRequest>): BatchGetServicesRequest;
};
export declare const BatchGetServicesResponse: {
    encode(message: BatchGetServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesResponse;
    fromJSON(object: any): BatchGetServicesResponse;
    toJSON(message: BatchGetServicesResponse): unknown;
    fromPartial(object: Partial<BatchGetServicesResponse>): BatchGetServicesResponse;
};
