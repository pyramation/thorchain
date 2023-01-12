import { Api, ApiSDKType } from "../../../protobuf/api";
import { Documentation, DocumentationSDKType } from "../../documentation";
import { Quota, QuotaSDKType } from "../../quota";
import { Authentication, AuthenticationSDKType } from "../../auth";
import { Usage, UsageSDKType } from "../../usage";
import { Endpoint, EndpointSDKType } from "../../endpoint";
import { MonitoredResourceDescriptor, MonitoredResourceDescriptorSDKType } from "../../monitored_resource";
import { Monitoring, MonitoringSDKType } from "../../monitoring";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** Whether or not a service has been enabled for use by a consumer. */
export declare enum State {
    /**
     * STATE_UNSPECIFIED - The default value, which indicates that the enabled state of the service
     * is unspecified or not meaningful. Currently, all consumers other than
     * projects (such as folders and organizations) are always in this state.
     */
    STATE_UNSPECIFIED = 0,
    /**
     * DISABLED - The service cannot be used by this consumer. It has either been explicitly
     * disabled, or has never been enabled.
     */
    DISABLED = 1,
    /** ENABLED - The service has been explicitly enabled for use by this consumer. */
    ENABLED = 2,
    UNRECOGNIZED = -1
}
export declare const StateSDKType: typeof State;
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
/**
 * Selected view of quota. Can be used to request more detailed quota
 * information when retrieving quota metrics and limits.
 */
export declare enum QuotaView {
    /**
     * QUOTA_VIEW_UNSPECIFIED - No quota view specified. Requests that do not specify a quota view will
     * typically default to the BASIC view.
     */
    QUOTA_VIEW_UNSPECIFIED = 0,
    /** BASIC - Only buckets with overrides are shown in the response. */
    BASIC = 1,
    /**
     * FULL - Include per-location buckets even if they do not have overrides.
     * When the view is FULL, and a limit has regional or zonal quota, the limit
     * will include buckets for all regions or zones that could support
     * overrides, even if none are currently present. In some cases this will
     * cause the response to become very large; callers that do not need this
     * extra information should use the BASIC view instead.
     */
    FULL = 2,
    UNRECOGNIZED = -1
}
export declare const QuotaViewSDKType: typeof QuotaView;
export declare function quotaViewFromJSON(object: any): QuotaView;
export declare function quotaViewToJSON(object: QuotaView): string;
/** Enumerations of quota safety checks. */
export declare enum QuotaSafetyCheck {
    /** QUOTA_SAFETY_CHECK_UNSPECIFIED - Unspecified quota safety check. */
    QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
    /**
     * LIMIT_DECREASE_BELOW_USAGE - Validates that a quota mutation would not cause the consumer's effective
     * limit to be lower than the consumer's quota usage.
     */
    LIMIT_DECREASE_BELOW_USAGE = 1,
    /**
     * LIMIT_DECREASE_PERCENTAGE_TOO_HIGH - Validates that a quota mutation would not cause the consumer's effective
     * limit to decrease by more than 10 percent.
     */
    LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = 2,
    UNRECOGNIZED = -1
}
export declare const QuotaSafetyCheckSDKType: typeof QuotaSafetyCheck;
export declare function quotaSafetyCheckFromJSON(object: any): QuotaSafetyCheck;
export declare function quotaSafetyCheckToJSON(object: QuotaSafetyCheck): string;
/** A service that is available for use by the consumer. */
export interface Service {
    /**
     * The resource name of the consumer and service.
     *
     * A valid name would be:
     * - `projects/123/services/serviceusage.googleapis.com`
     */
    name: string;
    /**
     * The resource name of the consumer.
     *
     * A valid name would be:
     * - `projects/123`
     */
    parent: string;
    /**
     * The service configuration of the available service.
     * Some fields may be filtered out of the configuration in responses to
     * the `ListServices` method. These fields are present only in responses to
     * the `GetService` method.
     */
    config?: ServiceConfig;
    /** Whether or not the service has been enabled for use by the consumer. */
    state: State;
}
/** A service that is available for use by the consumer. */
export interface ServiceSDKType {
    name: string;
    parent: string;
    config?: ServiceConfigSDKType;
    state: State;
}
/** The configuration of the service. */
export interface ServiceConfig {
    /**
     * The DNS address at which this service is available.
     *
     * An example DNS address would be:
     * `calendar.googleapis.com`.
     */
    name: string;
    /** The product title for this service. */
    title: string;
    /**
     * A list of API interfaces exported by this service. Contains only the names,
     * versions, and method names of the interfaces.
     */
    apis: Api[];
    /**
     * Additional API documentation. Contains only the summary and the
     * documentation URL.
     */
    documentation?: Documentation;
    /** Quota configuration. */
    quota?: Quota;
    /** Auth configuration. Contains only the OAuth rules. */
    authentication?: Authentication;
    /** Configuration controlling usage of this service. */
    usage?: Usage;
    /**
     * Configuration for network endpoints. Contains only the names and aliases
     * of the endpoints.
     */
    endpoints: Endpoint[];
    /**
     * Defines the monitored resources used by this service. This is required
     * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
     */
    monitoredResources: MonitoredResourceDescriptor[];
    /**
     * Monitoring configuration.
     * This should not include the 'producer_destinations' field.
     */
    monitoring?: Monitoring;
}
/** The configuration of the service. */
export interface ServiceConfigSDKType {
    name: string;
    title: string;
    apis: ApiSDKType[];
    documentation?: DocumentationSDKType;
    quota?: QuotaSDKType;
    authentication?: AuthenticationSDKType;
    usage?: UsageSDKType;
    endpoints: EndpointSDKType[];
    monitored_resources: MonitoredResourceDescriptorSDKType[];
    monitoring?: MonitoringSDKType;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadata {
    /**
     * The full name of the resources that this operation is directly
     * associated with.
     */
    resourceNames: string[];
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadataSDKType {
    resource_names: string[];
}
/** Consumer quota settings for a quota metric. */
export interface ConsumerQuotaMetric {
    /**
     * The resource name of the quota settings on this metric for this consumer.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
     *
     * The resource name is intended to be opaque and should not be parsed for
     * its component strings, since its representation could change in the future.
     */
    name: string;
    /**
     * The name of the metric.
     *
     * An example name would be:
     * `compute.googleapis.com/cpus`
     */
    metric: string;
    /**
     * The display name of the metric.
     *
     * An example name would be:
     * `CPUs`
     */
    displayName: string;
    /** The consumer quota for each quota limit defined on the metric. */
    consumerQuotaLimits: ConsumerQuotaLimit[];
    /**
     * The quota limits targeting the descendant containers of the
     * consumer in request.
     *
     * If the consumer in request is of type `organizations`
     * or `folders`, the field will list per-project limits in the metric; if the
     * consumer in request is of type `project`, the field will be empty.
     *
     * The `quota_buckets` field of each descendant consumer quota limit will not
     * be populated.
     */
    descendantConsumerQuotaLimits: ConsumerQuotaLimit[];
    /** The units in which the metric value is reported. */
    unit: string;
}
/** Consumer quota settings for a quota metric. */
export interface ConsumerQuotaMetricSDKType {
    name: string;
    metric: string;
    display_name: string;
    consumer_quota_limits: ConsumerQuotaLimitSDKType[];
    descendant_consumer_quota_limits: ConsumerQuotaLimitSDKType[];
    unit: string;
}
/** Consumer quota settings for a quota limit. */
export interface ConsumerQuotaLimit {
    /**
     * The resource name of the quota limit.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     *
     * The resource name is intended to be opaque and should not be parsed for
     * its component strings, since its representation could change in the future.
     */
    name: string;
    /**
     * The name of the parent metric of this limit.
     *
     * An example name would be:
     * `compute.googleapis.com/cpus`
     */
    metric: string;
    /**
     * The limit unit.
     *
     * An example unit would be
     * `1/{project}/{region}`
     * Note that `{project}` and `{region}` are not placeholders in this example;
     * the literal characters `{` and `}` occur in the string.
     */
    unit: string;
    /** Whether this limit is precise or imprecise. */
    isPrecise: boolean;
    /** Whether admin overrides are allowed on this limit */
    allowsAdminOverrides: boolean;
    /**
     * Summary of the enforced quota buckets, organized by quota dimension,
     * ordered from least specific to most specific (for example, the global
     * default bucket, with no quota dimensions, will always appear first).
     */
    quotaBuckets: QuotaBucket[];
}
/** Consumer quota settings for a quota limit. */
export interface ConsumerQuotaLimitSDKType {
    name: string;
    metric: string;
    unit: string;
    is_precise: boolean;
    allows_admin_overrides: boolean;
    quota_buckets: QuotaBucketSDKType[];
}
export interface QuotaBucket_DimensionsEntry {
    key: string;
    value: string;
}
export interface QuotaBucket_DimensionsEntrySDKType {
    key: string;
    value: string;
}
/** A quota bucket is a quota provisioning unit for a specific set of dimensions. */
export interface QuotaBucket {
    /**
     * The effective limit of this quota bucket. Equal to default_limit if there
     * are no overrides.
     */
    effectiveLimit: Long;
    /**
     * The default limit of this quota bucket, as specified by the service
     * configuration.
     */
    defaultLimit: Long;
    /** Producer override on this quota bucket. */
    producerOverride?: QuotaOverride;
    /** Consumer override on this quota bucket. */
    consumerOverride?: QuotaOverride;
    /** Admin override on this quota bucket. */
    adminOverride?: QuotaOverride;
    /**
     * The dimensions of this quota bucket.
     *
     * If this map is empty, this is the global bucket, which is the default quota
     * value applied to all requests that do not have a more specific override.
     *
     * If this map is nonempty, the default limit, effective limit, and quota
     * overrides apply only to requests that have the dimensions given in the map.
     *
     * For example, if the map has key `region` and value `us-east-1`, then the
     * specified effective limit is only effective in that region, and the
     * specified overrides apply only in that region.
     */
    dimensions: {
        [key: string]: string;
    };
}
/** A quota bucket is a quota provisioning unit for a specific set of dimensions. */
export interface QuotaBucketSDKType {
    effective_limit: Long;
    default_limit: Long;
    producer_override?: QuotaOverrideSDKType;
    consumer_override?: QuotaOverrideSDKType;
    admin_override?: QuotaOverrideSDKType;
    dimensions: {
        [key: string]: string;
    };
}
export interface QuotaOverride_DimensionsEntry {
    key: string;
    value: string;
}
export interface QuotaOverride_DimensionsEntrySDKType {
    key: string;
    value: string;
}
/** A quota override */
export interface QuotaOverride {
    /**
     * The resource name of the override.
     * This name is generated by the server when the override is created.
     *
     * Example names would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     *
     * The resource name is intended to be opaque and should not be parsed for
     * its component strings, since its representation could change in the future.
     */
    name: string;
    /**
     * The overriding quota limit value.
     * Can be any nonnegative integer, or -1 (unlimited quota).
     */
    overrideValue: Long;
    /**
     * If this map is nonempty, then this override applies only to specific values
     * for dimensions defined in the limit unit.
     *
     * For example, an override on a limit with the unit `1/{project}/{region}`
     * could contain an entry with the key `region` and the value `us-east-1`;
     * the override is only applied to quota consumed in that region.
     *
     * This map has the following restrictions:
     *
     * *   Keys that are not defined in the limit's unit are not valid keys.
     *     Any string appearing in `{brackets}` in the unit (besides `{project}`
     *     or
     *     `{user}`) is a defined key.
     * *   `project` is not a valid key; the project is already specified in
     *     the parent resource name.
     * *   `user` is not a valid key; the API does not support quota overrides
     *     that apply only to a specific user.
     * *   If `region` appears as a key, its value must be a valid Cloud region.
     * *   If `zone` appears as a key, its value must be a valid Cloud zone.
     * *   If any valid key other than `region` or `zone` appears in the map, then
     *     all valid keys other than `region` or `zone` must also appear in the
     *     map.
     */
    dimensions: {
        [key: string]: string;
    };
    /**
     * The name of the metric to which this override applies.
     *
     * An example name would be:
     * `compute.googleapis.com/cpus`
     */
    metric: string;
    /**
     * The limit unit of the limit to which this override applies.
     *
     * An example unit would be:
     * `1/{project}/{region}`
     * Note that `{project}` and `{region}` are not placeholders in this example;
     * the literal characters `{` and `}` occur in the string.
     */
    unit: string;
    /**
     * The resource name of the ancestor that requested the override. For example:
     * `organizations/12345` or `folders/67890`.
     * Used by admin overrides only.
     */
    adminOverrideAncestor: string;
}
/** A quota override */
export interface QuotaOverrideSDKType {
    name: string;
    override_value: Long;
    dimensions: {
        [key: string]: string;
    };
    metric: string;
    unit: string;
    admin_override_ancestor: string;
}
/** Import data embedded in the request message */
export interface OverrideInlineSource {
    /**
     * The overrides to create.
     * Each override must have a value for 'metric' and 'unit', to specify
     * which metric and which limit the override should be applied to.
     * The 'name' field of the override does not need to be set; it is ignored.
     */
    overrides: QuotaOverride[];
}
/** Import data embedded in the request message */
export interface OverrideInlineSourceSDKType {
    overrides: QuotaOverrideSDKType[];
}
export interface AdminQuotaPolicy_DimensionsEntry {
    key: string;
    value: string;
}
export interface AdminQuotaPolicy_DimensionsEntrySDKType {
    key: string;
    value: string;
}
/** Quota policy created by quota administrator. */
export interface AdminQuotaPolicy {
    /**
     * The resource name of the policy.
     * This name is generated by the server when the policy is created.
     *
     * Example names would be:
     * `organizations/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminQuotaPolicies/4a3f2c1d`
     */
    name: string;
    /**
     * The quota policy value.
     * Can be any nonnegative integer, or -1 (unlimited quota).
     */
    policyValue: Long;
    /**
     * If this map is nonempty, then this policy applies only to specific values
     * for dimensions defined in the limit unit.
     *
     * For example, an policy on a limit with the unit `1/{project}/{region}`
     * could contain an entry with the key `region` and the value `us-east-1`;
     * the policy is only applied to quota consumed in that region.
     *
     * This map has the following restrictions:
     *
     * *   If `region` appears as a key, its value must be a valid Cloud region.
     * *   If `zone` appears as a key, its value must be a valid Cloud zone.
     * *   Keys other than `region` or `zone` are not valid.
     */
    dimensions: {
        [key: string]: string;
    };
    /**
     * The name of the metric to which this policy applies.
     *
     * An example name would be:
     * `compute.googleapis.com/cpus`
     */
    metric: string;
    /**
     * The limit unit of the limit to which this policy applies.
     *
     * An example unit would be:
     * `1/{project}/{region}`
     * Note that `{project}` and `{region}` are not placeholders in this example;
     * the literal characters `{` and `}` occur in the string.
     */
    unit: string;
    /**
     * The cloud resource container at which the quota policy is created. The
     * format is `{container_type}/{container_number}`
     */
    container: string;
}
/** Quota policy created by quota administrator. */
export interface AdminQuotaPolicySDKType {
    name: string;
    policy_value: Long;
    dimensions: {
        [key: string]: string;
    };
    metric: string;
    unit: string;
    container: string;
}
/**
 * Service identity for a service. This is the identity that service producer
 * should use to access consumer resources.
 */
export interface ServiceIdentity {
    /**
     * The email address of the service account that a service producer would use
     * to access consumer resources.
     */
    email: string;
    /**
     * The unique and stable id of the service account.
     * https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts#ServiceAccount
     */
    uniqueId: string;
}
/**
 * Service identity for a service. This is the identity that service producer
 * should use to access consumer resources.
 */
export interface ServiceIdentitySDKType {
    email: string;
    unique_id: string;
}
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial(object: Partial<Service>): Service;
};
export declare const ServiceConfig: {
    encode(message: ServiceConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceConfig;
    fromJSON(object: any): ServiceConfig;
    toJSON(message: ServiceConfig): unknown;
    fromPartial(object: Partial<ServiceConfig>): ServiceConfig;
};
export declare const OperationMetadata: {
    encode(message: OperationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata;
    fromJSON(object: any): OperationMetadata;
    toJSON(message: OperationMetadata): unknown;
    fromPartial(object: Partial<OperationMetadata>): OperationMetadata;
};
export declare const ConsumerQuotaMetric: {
    encode(message: ConsumerQuotaMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsumerQuotaMetric;
    fromJSON(object: any): ConsumerQuotaMetric;
    toJSON(message: ConsumerQuotaMetric): unknown;
    fromPartial(object: Partial<ConsumerQuotaMetric>): ConsumerQuotaMetric;
};
export declare const ConsumerQuotaLimit: {
    encode(message: ConsumerQuotaLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsumerQuotaLimit;
    fromJSON(object: any): ConsumerQuotaLimit;
    toJSON(message: ConsumerQuotaLimit): unknown;
    fromPartial(object: Partial<ConsumerQuotaLimit>): ConsumerQuotaLimit;
};
export declare const QuotaBucket_DimensionsEntry: {
    encode(message: QuotaBucket_DimensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaBucket_DimensionsEntry;
    fromJSON(object: any): QuotaBucket_DimensionsEntry;
    toJSON(message: QuotaBucket_DimensionsEntry): unknown;
    fromPartial(object: Partial<QuotaBucket_DimensionsEntry>): QuotaBucket_DimensionsEntry;
};
export declare const QuotaBucket: {
    encode(message: QuotaBucket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaBucket;
    fromJSON(object: any): QuotaBucket;
    toJSON(message: QuotaBucket): unknown;
    fromPartial(object: Partial<QuotaBucket>): QuotaBucket;
};
export declare const QuotaOverride_DimensionsEntry: {
    encode(message: QuotaOverride_DimensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOverride_DimensionsEntry;
    fromJSON(object: any): QuotaOverride_DimensionsEntry;
    toJSON(message: QuotaOverride_DimensionsEntry): unknown;
    fromPartial(object: Partial<QuotaOverride_DimensionsEntry>): QuotaOverride_DimensionsEntry;
};
export declare const QuotaOverride: {
    encode(message: QuotaOverride, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOverride;
    fromJSON(object: any): QuotaOverride;
    toJSON(message: QuotaOverride): unknown;
    fromPartial(object: Partial<QuotaOverride>): QuotaOverride;
};
export declare const OverrideInlineSource: {
    encode(message: OverrideInlineSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OverrideInlineSource;
    fromJSON(object: any): OverrideInlineSource;
    toJSON(message: OverrideInlineSource): unknown;
    fromPartial(object: Partial<OverrideInlineSource>): OverrideInlineSource;
};
export declare const AdminQuotaPolicy_DimensionsEntry: {
    encode(message: AdminQuotaPolicy_DimensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdminQuotaPolicy_DimensionsEntry;
    fromJSON(object: any): AdminQuotaPolicy_DimensionsEntry;
    toJSON(message: AdminQuotaPolicy_DimensionsEntry): unknown;
    fromPartial(object: Partial<AdminQuotaPolicy_DimensionsEntry>): AdminQuotaPolicy_DimensionsEntry;
};
export declare const AdminQuotaPolicy: {
    encode(message: AdminQuotaPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdminQuotaPolicy;
    fromJSON(object: any): AdminQuotaPolicy;
    toJSON(message: AdminQuotaPolicy): unknown;
    fromPartial(object: Partial<AdminQuotaPolicy>): AdminQuotaPolicy;
};
export declare const ServiceIdentity: {
    encode(message: ServiceIdentity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceIdentity;
    fromJSON(object: any): ServiceIdentity;
    toJSON(message: ServiceIdentity): unknown;
    fromPartial(object: Partial<ServiceIdentity>): ServiceIdentity;
};
