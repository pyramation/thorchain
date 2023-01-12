import { QuotaView, QuotaOverride, QuotaOverrideSDKType, QuotaSafetyCheck, OverrideInlineSource, OverrideInlineSourceSDKType, Service, ServiceSDKType, ConsumerQuotaMetric, ConsumerQuotaMetricSDKType, AdminQuotaPolicy, AdminQuotaPolicySDKType, ServiceIdentity, ServiceIdentitySDKType } from "./resources";
import { FieldMask, FieldMaskSDKType } from "../../../protobuf/field_mask";
import * as _m0 from "protobufjs/minimal";
/** Enum for service identity state. */
export declare enum GetServiceIdentityResponse_IdentityState {
    /**
     * IDENTITY_STATE_UNSPECIFIED - Default service identity state. This value is used if the state is
     * omitted.
     */
    IDENTITY_STATE_UNSPECIFIED = 0,
    /** ACTIVE - Service identity has been created and can be used. */
    ACTIVE = 1,
    UNRECOGNIZED = -1
}
export declare const GetServiceIdentityResponse_IdentityStateSDKType: typeof GetServiceIdentityResponse_IdentityState;
export declare function getServiceIdentityResponse_IdentityStateFromJSON(object: any): GetServiceIdentityResponse_IdentityState;
export declare function getServiceIdentityResponse_IdentityStateToJSON(object: GetServiceIdentityResponse_IdentityState): string;
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
     * `projects/123/services/serviceusage.googleapis.com`
     * where `123` is the project number (not project ID).
     */
    name: string;
}
/** Request message for the `EnableService` method. */
export interface EnableServiceRequestSDKType {
    name: string;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequest {
    /**
     * Name of the consumer and service to disable the service on.
     *
     * The enable and disable methods currently only support projects.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com`
     * where `123` is the project number (not project ID).
     */
    name: string;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequestSDKType {
    name: string;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequest {
    /**
     * Name of the consumer and service to get the `ConsumerState` for.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com`
     * where `123` is the project number (not project ID).
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
     * `projects/123`
     * where `123` is the project number (not project ID).
     */
    parent: string;
    /**
     * Requested size of the next page of data.
     * Requested page size cannot exceed 200.
     *  If not set, the default page size is 50.
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
     * `projects/123`
     * where `123` is the project number (not project ID).
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
     * Two or more services must be specified. To enable a single service,
     * use the `EnableService` method instead.
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
/** Request message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsRequest {
    /**
     * Parent of the quotas resource.
     *
     * Some example names would be:
     * `projects/123/services/serviceconsumermanagement.googleapis.com`
     * `folders/345/services/serviceconsumermanagement.googleapis.com`
     * `organizations/456/services/serviceconsumermanagement.googleapis.com`
     */
    parent: string;
    /** Requested size of the next page of data. */
    pageSize: number;
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    pageToken: string;
    /** Specifies the level of detail for quota information in the response. */
    view: QuotaView;
}
/** Request message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsRequestSDKType {
    parent: string;
    page_size: number;
    page_token: string;
    view: QuotaView;
}
/** Response message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsResponse {
    /** Quota settings for the consumer, organized by quota metric. */
    metrics: ConsumerQuotaMetric[];
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    nextPageToken: string;
}
/** Response message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsResponseSDKType {
    metrics: ConsumerQuotaMetricSDKType[];
    next_page_token: string;
}
/** Request message for GetConsumerQuotaMetric */
export interface GetConsumerQuotaMetricRequest {
    /**
     * The resource name of the quota limit.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com/quotas/metrics/serviceusage.googleapis.com%2Fmutate_requests`
     */
    name: string;
    /** Specifies the level of detail for quota information in the response. */
    view: QuotaView;
}
/** Request message for GetConsumerQuotaMetric */
export interface GetConsumerQuotaMetricRequestSDKType {
    name: string;
    view: QuotaView;
}
/** Request message for GetConsumerQuotaLimit */
export interface GetConsumerQuotaLimitRequest {
    /**
     * The resource name of the quota limit.
     *
     * Use the quota limit resource name returned by previous
     * ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls.
     */
    name: string;
    /** Specifies the level of detail for quota information in the response. */
    view: QuotaView;
}
/** Request message for GetConsumerQuotaLimit */
export interface GetConsumerQuotaLimitRequestSDKType {
    name: string;
    view: QuotaView;
}
/** Request message for CreateAdminOverride. */
export interface CreateAdminOverrideRequest {
    /**
     * The resource name of the parent quota limit, returned by a
     * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     */
    parent: string;
    /** The admin override to create. */
    override?: QuotaOverride;
    /**
     * Whether to force the creation of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for CreateAdminOverride. */
export interface CreateAdminOverrideRequestSDKType {
    parent: string;
    override?: QuotaOverrideSDKType;
    force: boolean;
    force_only: QuotaSafetyCheck[];
}
/** Request message for UpdateAdminOverride. */
export interface UpdateAdminOverrideRequest {
    /**
     * The resource name of the override to update.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     */
    name: string;
    /**
     * The new override.
     * Only the override_value is updated; all other fields are ignored.
     */
    override?: QuotaOverride;
    /**
     * Whether to force the update of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * Update only the specified fields of the override.
     * If unset, all fields will be updated.
     */
    updateMask?: FieldMask;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for UpdateAdminOverride. */
export interface UpdateAdminOverrideRequestSDKType {
    name: string;
    override?: QuotaOverrideSDKType;
    force: boolean;
    update_mask?: FieldMaskSDKType;
    force_only: QuotaSafetyCheck[];
}
/** Request message for DeleteAdminOverride. */
export interface DeleteAdminOverrideRequest {
    /**
     * The resource name of the override to delete.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     */
    name: string;
    /**
     * Whether to force the deletion of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for DeleteAdminOverride. */
export interface DeleteAdminOverrideRequestSDKType {
    name: string;
    force: boolean;
    force_only: QuotaSafetyCheck[];
}
/** Request message for ListAdminOverrides */
export interface ListAdminOverridesRequest {
    /**
     * The resource name of the parent quota limit, returned by a
     * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     */
    parent: string;
    /** Requested size of the next page of data. */
    pageSize: number;
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    pageToken: string;
}
/** Request message for ListAdminOverrides */
export interface ListAdminOverridesRequestSDKType {
    parent: string;
    page_size: number;
    page_token: string;
}
/** Response message for ListAdminOverrides. */
export interface ListAdminOverridesResponse {
    /** Admin overrides on this limit. */
    overrides: QuotaOverride[];
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    nextPageToken: string;
}
/** Response message for ListAdminOverrides. */
export interface ListAdminOverridesResponseSDKType {
    overrides: QuotaOverrideSDKType[];
    next_page_token: string;
}
/** Response message for BatchCreateAdminOverrides */
export interface BatchCreateAdminOverridesResponse {
    /** The overrides that were created. */
    overrides: QuotaOverride[];
}
/** Response message for BatchCreateAdminOverrides */
export interface BatchCreateAdminOverridesResponseSDKType {
    overrides: QuotaOverrideSDKType[];
}
/** Request message for ImportAdminOverrides */
export interface ImportAdminOverridesRequest {
    /**
     * The resource name of the consumer.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com`
     */
    parent: string;
    /** The import data is specified in the request message itself */
    inlineSource?: OverrideInlineSource;
    /**
     * Whether to force the creation of the quota overrides.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for ImportAdminOverrides */
export interface ImportAdminOverridesRequestSDKType {
    parent: string;
    inline_source?: OverrideInlineSourceSDKType;
    force: boolean;
    force_only: QuotaSafetyCheck[];
}
/** Response message for ImportAdminOverrides */
export interface ImportAdminOverridesResponse {
    /** The overrides that were created from the imported data. */
    overrides: QuotaOverride[];
}
/** Response message for ImportAdminOverrides */
export interface ImportAdminOverridesResponseSDKType {
    overrides: QuotaOverrideSDKType[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminOverrides.
 */
export interface ImportAdminOverridesMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminOverrides.
 */
export interface ImportAdminOverridesMetadataSDKType {
}
/** Request message for CreateConsumerOverride. */
export interface CreateConsumerOverrideRequest {
    /**
     * The resource name of the parent quota limit, returned by a
     * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     */
    parent: string;
    /** The override to create. */
    override?: QuotaOverride;
    /**
     * Whether to force the creation of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for CreateConsumerOverride. */
export interface CreateConsumerOverrideRequestSDKType {
    parent: string;
    override?: QuotaOverrideSDKType;
    force: boolean;
    force_only: QuotaSafetyCheck[];
}
/** Request message for UpdateConsumerOverride. */
export interface UpdateConsumerOverrideRequest {
    /**
     * The resource name of the override to update.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     */
    name: string;
    /**
     * The new override.
     * Only the override_value is updated; all other fields are ignored.
     */
    override?: QuotaOverride;
    /**
     * Whether to force the update of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * Update only the specified fields of the override.
     * If unset, all fields will be updated.
     */
    updateMask?: FieldMask;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for UpdateConsumerOverride. */
export interface UpdateConsumerOverrideRequestSDKType {
    name: string;
    override?: QuotaOverrideSDKType;
    force: boolean;
    update_mask?: FieldMaskSDKType;
    force_only: QuotaSafetyCheck[];
}
/** Request message for DeleteConsumerOverride. */
export interface DeleteConsumerOverrideRequest {
    /**
     * The resource name of the override to delete.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     */
    name: string;
    /**
     * Whether to force the deletion of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for DeleteConsumerOverride. */
export interface DeleteConsumerOverrideRequestSDKType {
    name: string;
    force: boolean;
    force_only: QuotaSafetyCheck[];
}
/** Request message for ListConsumerOverrides */
export interface ListConsumerOverridesRequest {
    /**
     * The resource name of the parent quota limit, returned by a
     * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     */
    parent: string;
    /** Requested size of the next page of data. */
    pageSize: number;
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    pageToken: string;
}
/** Request message for ListConsumerOverrides */
export interface ListConsumerOverridesRequestSDKType {
    parent: string;
    page_size: number;
    page_token: string;
}
/** Response message for ListConsumerOverrides. */
export interface ListConsumerOverridesResponse {
    /** Consumer overrides on this limit. */
    overrides: QuotaOverride[];
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    nextPageToken: string;
}
/** Response message for ListConsumerOverrides. */
export interface ListConsumerOverridesResponseSDKType {
    overrides: QuotaOverrideSDKType[];
    next_page_token: string;
}
/** Response message for BatchCreateConsumerOverrides */
export interface BatchCreateConsumerOverridesResponse {
    /** The overrides that were created. */
    overrides: QuotaOverride[];
}
/** Response message for BatchCreateConsumerOverrides */
export interface BatchCreateConsumerOverridesResponseSDKType {
    overrides: QuotaOverrideSDKType[];
}
/** Request message for ImportConsumerOverrides */
export interface ImportConsumerOverridesRequest {
    /**
     * The resource name of the consumer.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com`
     */
    parent: string;
    /** The import data is specified in the request message itself */
    inlineSource?: OverrideInlineSource;
    /**
     * Whether to force the creation of the quota overrides.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for ImportConsumerOverrides */
export interface ImportConsumerOverridesRequestSDKType {
    parent: string;
    inline_source?: OverrideInlineSourceSDKType;
    force: boolean;
    force_only: QuotaSafetyCheck[];
}
/** Response message for ImportConsumerOverrides */
export interface ImportConsumerOverridesResponse {
    /** The overrides that were created from the imported data. */
    overrides: QuotaOverride[];
}
/** Response message for ImportConsumerOverrides */
export interface ImportConsumerOverridesResponseSDKType {
    overrides: QuotaOverrideSDKType[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportConsumerOverrides.
 */
export interface ImportConsumerOverridesMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportConsumerOverrides.
 */
export interface ImportConsumerOverridesMetadataSDKType {
}
/** Response message for ImportAdminQuotaPolicies */
export interface ImportAdminQuotaPoliciesResponse {
    /** The policies that were created from the imported data. */
    policies: AdminQuotaPolicy[];
}
/** Response message for ImportAdminQuotaPolicies */
export interface ImportAdminQuotaPoliciesResponseSDKType {
    policies: AdminQuotaPolicySDKType[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminQuotaPolicies.
 */
export interface ImportAdminQuotaPoliciesMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminQuotaPolicies.
 */
export interface ImportAdminQuotaPoliciesMetadataSDKType {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by CreateAdminQuotaPolicy.
 */
export interface CreateAdminQuotaPolicyMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by CreateAdminQuotaPolicy.
 */
export interface CreateAdminQuotaPolicyMetadataSDKType {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by UpdateAdminQuotaPolicy.
 */
export interface UpdateAdminQuotaPolicyMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by UpdateAdminQuotaPolicy.
 */
export interface UpdateAdminQuotaPolicyMetadataSDKType {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by DeleteAdminQuotaPolicy.
 */
export interface DeleteAdminQuotaPolicyMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by DeleteAdminQuotaPolicy.
 */
export interface DeleteAdminQuotaPolicyMetadataSDKType {
}
/** Request message for generating service identity. */
export interface GenerateServiceIdentityRequest {
    /**
     * Name of the consumer and service to generate an identity for.
     *
     * The `GenerateServiceIdentity` methods currently only support projects.
     *
     * An example name would be:
     * `projects/123/services/example.googleapis.com` where `123` is the
     * project number.
     */
    parent: string;
}
/** Request message for generating service identity. */
export interface GenerateServiceIdentityRequestSDKType {
    parent: string;
}
/** Response message for getting service identity. */
export interface GetServiceIdentityResponse {
    /**
     * Service identity that service producer can use to access consumer
     * resources. If exists is true, it contains email and unique_id. If exists is
     * false, it contains pre-constructed email and empty unique_id.
     */
    identity?: ServiceIdentity;
    /** Service identity state. */
    state: GetServiceIdentityResponse_IdentityState;
}
/** Response message for getting service identity. */
export interface GetServiceIdentityResponseSDKType {
    identity?: ServiceIdentitySDKType;
    state: GetServiceIdentityResponse_IdentityState;
}
/** Metadata for the `GetServiceIdentity` method. */
export interface GetServiceIdentityMetadata {
}
/** Metadata for the `GetServiceIdentity` method. */
export interface GetServiceIdentityMetadataSDKType {
}
export declare const EnableServiceRequest: {
    encode(message: EnableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceRequest;
    fromJSON(object: any): EnableServiceRequest;
    toJSON(message: EnableServiceRequest): unknown;
    fromPartial(object: Partial<EnableServiceRequest>): EnableServiceRequest;
};
export declare const DisableServiceRequest: {
    encode(message: DisableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceRequest;
    fromJSON(object: any): DisableServiceRequest;
    toJSON(message: DisableServiceRequest): unknown;
    fromPartial(object: Partial<DisableServiceRequest>): DisableServiceRequest;
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
export declare const ListConsumerQuotaMetricsRequest: {
    encode(message: ListConsumerQuotaMetricsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConsumerQuotaMetricsRequest;
    fromJSON(object: any): ListConsumerQuotaMetricsRequest;
    toJSON(message: ListConsumerQuotaMetricsRequest): unknown;
    fromPartial(object: Partial<ListConsumerQuotaMetricsRequest>): ListConsumerQuotaMetricsRequest;
};
export declare const ListConsumerQuotaMetricsResponse: {
    encode(message: ListConsumerQuotaMetricsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConsumerQuotaMetricsResponse;
    fromJSON(object: any): ListConsumerQuotaMetricsResponse;
    toJSON(message: ListConsumerQuotaMetricsResponse): unknown;
    fromPartial(object: Partial<ListConsumerQuotaMetricsResponse>): ListConsumerQuotaMetricsResponse;
};
export declare const GetConsumerQuotaMetricRequest: {
    encode(message: GetConsumerQuotaMetricRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConsumerQuotaMetricRequest;
    fromJSON(object: any): GetConsumerQuotaMetricRequest;
    toJSON(message: GetConsumerQuotaMetricRequest): unknown;
    fromPartial(object: Partial<GetConsumerQuotaMetricRequest>): GetConsumerQuotaMetricRequest;
};
export declare const GetConsumerQuotaLimitRequest: {
    encode(message: GetConsumerQuotaLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConsumerQuotaLimitRequest;
    fromJSON(object: any): GetConsumerQuotaLimitRequest;
    toJSON(message: GetConsumerQuotaLimitRequest): unknown;
    fromPartial(object: Partial<GetConsumerQuotaLimitRequest>): GetConsumerQuotaLimitRequest;
};
export declare const CreateAdminOverrideRequest: {
    encode(message: CreateAdminOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAdminOverrideRequest;
    fromJSON(object: any): CreateAdminOverrideRequest;
    toJSON(message: CreateAdminOverrideRequest): unknown;
    fromPartial(object: Partial<CreateAdminOverrideRequest>): CreateAdminOverrideRequest;
};
export declare const UpdateAdminOverrideRequest: {
    encode(message: UpdateAdminOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminOverrideRequest;
    fromJSON(object: any): UpdateAdminOverrideRequest;
    toJSON(message: UpdateAdminOverrideRequest): unknown;
    fromPartial(object: Partial<UpdateAdminOverrideRequest>): UpdateAdminOverrideRequest;
};
export declare const DeleteAdminOverrideRequest: {
    encode(message: DeleteAdminOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAdminOverrideRequest;
    fromJSON(object: any): DeleteAdminOverrideRequest;
    toJSON(message: DeleteAdminOverrideRequest): unknown;
    fromPartial(object: Partial<DeleteAdminOverrideRequest>): DeleteAdminOverrideRequest;
};
export declare const ListAdminOverridesRequest: {
    encode(message: ListAdminOverridesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAdminOverridesRequest;
    fromJSON(object: any): ListAdminOverridesRequest;
    toJSON(message: ListAdminOverridesRequest): unknown;
    fromPartial(object: Partial<ListAdminOverridesRequest>): ListAdminOverridesRequest;
};
export declare const ListAdminOverridesResponse: {
    encode(message: ListAdminOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAdminOverridesResponse;
    fromJSON(object: any): ListAdminOverridesResponse;
    toJSON(message: ListAdminOverridesResponse): unknown;
    fromPartial(object: Partial<ListAdminOverridesResponse>): ListAdminOverridesResponse;
};
export declare const BatchCreateAdminOverridesResponse: {
    encode(message: BatchCreateAdminOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateAdminOverridesResponse;
    fromJSON(object: any): BatchCreateAdminOverridesResponse;
    toJSON(message: BatchCreateAdminOverridesResponse): unknown;
    fromPartial(object: Partial<BatchCreateAdminOverridesResponse>): BatchCreateAdminOverridesResponse;
};
export declare const ImportAdminOverridesRequest: {
    encode(message: ImportAdminOverridesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminOverridesRequest;
    fromJSON(object: any): ImportAdminOverridesRequest;
    toJSON(message: ImportAdminOverridesRequest): unknown;
    fromPartial(object: Partial<ImportAdminOverridesRequest>): ImportAdminOverridesRequest;
};
export declare const ImportAdminOverridesResponse: {
    encode(message: ImportAdminOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminOverridesResponse;
    fromJSON(object: any): ImportAdminOverridesResponse;
    toJSON(message: ImportAdminOverridesResponse): unknown;
    fromPartial(object: Partial<ImportAdminOverridesResponse>): ImportAdminOverridesResponse;
};
export declare const ImportAdminOverridesMetadata: {
    encode(_: ImportAdminOverridesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminOverridesMetadata;
    fromJSON(_: any): ImportAdminOverridesMetadata;
    toJSON(_: ImportAdminOverridesMetadata): unknown;
    fromPartial(_: Partial<ImportAdminOverridesMetadata>): ImportAdminOverridesMetadata;
};
export declare const CreateConsumerOverrideRequest: {
    encode(message: CreateConsumerOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConsumerOverrideRequest;
    fromJSON(object: any): CreateConsumerOverrideRequest;
    toJSON(message: CreateConsumerOverrideRequest): unknown;
    fromPartial(object: Partial<CreateConsumerOverrideRequest>): CreateConsumerOverrideRequest;
};
export declare const UpdateConsumerOverrideRequest: {
    encode(message: UpdateConsumerOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConsumerOverrideRequest;
    fromJSON(object: any): UpdateConsumerOverrideRequest;
    toJSON(message: UpdateConsumerOverrideRequest): unknown;
    fromPartial(object: Partial<UpdateConsumerOverrideRequest>): UpdateConsumerOverrideRequest;
};
export declare const DeleteConsumerOverrideRequest: {
    encode(message: DeleteConsumerOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConsumerOverrideRequest;
    fromJSON(object: any): DeleteConsumerOverrideRequest;
    toJSON(message: DeleteConsumerOverrideRequest): unknown;
    fromPartial(object: Partial<DeleteConsumerOverrideRequest>): DeleteConsumerOverrideRequest;
};
export declare const ListConsumerOverridesRequest: {
    encode(message: ListConsumerOverridesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConsumerOverridesRequest;
    fromJSON(object: any): ListConsumerOverridesRequest;
    toJSON(message: ListConsumerOverridesRequest): unknown;
    fromPartial(object: Partial<ListConsumerOverridesRequest>): ListConsumerOverridesRequest;
};
export declare const ListConsumerOverridesResponse: {
    encode(message: ListConsumerOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConsumerOverridesResponse;
    fromJSON(object: any): ListConsumerOverridesResponse;
    toJSON(message: ListConsumerOverridesResponse): unknown;
    fromPartial(object: Partial<ListConsumerOverridesResponse>): ListConsumerOverridesResponse;
};
export declare const BatchCreateConsumerOverridesResponse: {
    encode(message: BatchCreateConsumerOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateConsumerOverridesResponse;
    fromJSON(object: any): BatchCreateConsumerOverridesResponse;
    toJSON(message: BatchCreateConsumerOverridesResponse): unknown;
    fromPartial(object: Partial<BatchCreateConsumerOverridesResponse>): BatchCreateConsumerOverridesResponse;
};
export declare const ImportConsumerOverridesRequest: {
    encode(message: ImportConsumerOverridesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportConsumerOverridesRequest;
    fromJSON(object: any): ImportConsumerOverridesRequest;
    toJSON(message: ImportConsumerOverridesRequest): unknown;
    fromPartial(object: Partial<ImportConsumerOverridesRequest>): ImportConsumerOverridesRequest;
};
export declare const ImportConsumerOverridesResponse: {
    encode(message: ImportConsumerOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportConsumerOverridesResponse;
    fromJSON(object: any): ImportConsumerOverridesResponse;
    toJSON(message: ImportConsumerOverridesResponse): unknown;
    fromPartial(object: Partial<ImportConsumerOverridesResponse>): ImportConsumerOverridesResponse;
};
export declare const ImportConsumerOverridesMetadata: {
    encode(_: ImportConsumerOverridesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportConsumerOverridesMetadata;
    fromJSON(_: any): ImportConsumerOverridesMetadata;
    toJSON(_: ImportConsumerOverridesMetadata): unknown;
    fromPartial(_: Partial<ImportConsumerOverridesMetadata>): ImportConsumerOverridesMetadata;
};
export declare const ImportAdminQuotaPoliciesResponse: {
    encode(message: ImportAdminQuotaPoliciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminQuotaPoliciesResponse;
    fromJSON(object: any): ImportAdminQuotaPoliciesResponse;
    toJSON(message: ImportAdminQuotaPoliciesResponse): unknown;
    fromPartial(object: Partial<ImportAdminQuotaPoliciesResponse>): ImportAdminQuotaPoliciesResponse;
};
export declare const ImportAdminQuotaPoliciesMetadata: {
    encode(_: ImportAdminQuotaPoliciesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminQuotaPoliciesMetadata;
    fromJSON(_: any): ImportAdminQuotaPoliciesMetadata;
    toJSON(_: ImportAdminQuotaPoliciesMetadata): unknown;
    fromPartial(_: Partial<ImportAdminQuotaPoliciesMetadata>): ImportAdminQuotaPoliciesMetadata;
};
export declare const CreateAdminQuotaPolicyMetadata: {
    encode(_: CreateAdminQuotaPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAdminQuotaPolicyMetadata;
    fromJSON(_: any): CreateAdminQuotaPolicyMetadata;
    toJSON(_: CreateAdminQuotaPolicyMetadata): unknown;
    fromPartial(_: Partial<CreateAdminQuotaPolicyMetadata>): CreateAdminQuotaPolicyMetadata;
};
export declare const UpdateAdminQuotaPolicyMetadata: {
    encode(_: UpdateAdminQuotaPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminQuotaPolicyMetadata;
    fromJSON(_: any): UpdateAdminQuotaPolicyMetadata;
    toJSON(_: UpdateAdminQuotaPolicyMetadata): unknown;
    fromPartial(_: Partial<UpdateAdminQuotaPolicyMetadata>): UpdateAdminQuotaPolicyMetadata;
};
export declare const DeleteAdminQuotaPolicyMetadata: {
    encode(_: DeleteAdminQuotaPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAdminQuotaPolicyMetadata;
    fromJSON(_: any): DeleteAdminQuotaPolicyMetadata;
    toJSON(_: DeleteAdminQuotaPolicyMetadata): unknown;
    fromPartial(_: Partial<DeleteAdminQuotaPolicyMetadata>): DeleteAdminQuotaPolicyMetadata;
};
export declare const GenerateServiceIdentityRequest: {
    encode(message: GenerateServiceIdentityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateServiceIdentityRequest;
    fromJSON(object: any): GenerateServiceIdentityRequest;
    toJSON(message: GenerateServiceIdentityRequest): unknown;
    fromPartial(object: Partial<GenerateServiceIdentityRequest>): GenerateServiceIdentityRequest;
};
export declare const GetServiceIdentityResponse: {
    encode(message: GetServiceIdentityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceIdentityResponse;
    fromJSON(object: any): GetServiceIdentityResponse;
    toJSON(message: GetServiceIdentityResponse): unknown;
    fromPartial(object: Partial<GetServiceIdentityResponse>): GetServiceIdentityResponse;
};
export declare const GetServiceIdentityMetadata: {
    encode(_: GetServiceIdentityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceIdentityMetadata;
    fromJSON(_: any): GetServiceIdentityMetadata;
    toJSON(_: GetServiceIdentityMetadata): unknown;
    fromPartial(_: Partial<GetServiceIdentityMetadata>): GetServiceIdentityMetadata;
};
