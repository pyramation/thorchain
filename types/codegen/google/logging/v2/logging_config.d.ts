import { FieldMask, FieldMaskSDKType } from "../../protobuf/field_mask";
import { Timestamp, TimestampSDKType } from "../../protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Deprecated. This is unused. */
export declare enum LogSink_VersionFormat {
    /** VERSION_FORMAT_UNSPECIFIED - An unspecified format version that will default to V2. */
    VERSION_FORMAT_UNSPECIFIED = 0,
    /** V2 - `LogEntry` version 2 format. */
    V2 = 1,
    /** V1 - `LogEntry` version 1 format. */
    V1 = 2,
    UNRECOGNIZED = -1
}
export declare const LogSink_VersionFormatSDKType: typeof LogSink_VersionFormat;
export declare function logSink_VersionFormatFromJSON(object: any): LogSink_VersionFormat;
export declare function logSink_VersionFormatToJSON(object: LogSink_VersionFormat): string;
/** LogBucket lifecycle states. */
export declare enum LifecycleState {
    /**
     * LIFECYCLE_STATE_UNSPECIFIED - Unspecified state. This is only used/useful for distinguishing unset
     * values.
     */
    LIFECYCLE_STATE_UNSPECIFIED = 0,
    /** ACTIVE - The normal and active state. */
    ACTIVE = 1,
    /**
     * DELETE_REQUESTED - The resource has been marked for deletion by the user. For some resources
     * (e.g. buckets), this can be reversed by an un-delete operation.
     */
    DELETE_REQUESTED = 2,
    UNRECOGNIZED = -1
}
export declare const LifecycleStateSDKType: typeof LifecycleState;
export declare function lifecycleStateFromJSON(object: any): LifecycleState;
export declare function lifecycleStateToJSON(object: LifecycleState): string;
/**
 * List of different operation states.
 * High level state of the operation. This is used to report the job's
 * current state to the user. Once a long running operation is created,
 * the current state of the operation can be queried even before the
 * operation is finished and the final result is available.
 */
export declare enum OperationState {
    /** OPERATION_STATE_UNSPECIFIED - Should not be used. */
    OPERATION_STATE_UNSPECIFIED = 0,
    /** OPERATION_STATE_SCHEDULED - The operation is scheduled. */
    OPERATION_STATE_SCHEDULED = 1,
    /** OPERATION_STATE_WAITING_FOR_PERMISSIONS - Waiting for necessary permissions. */
    OPERATION_STATE_WAITING_FOR_PERMISSIONS = 2,
    /** OPERATION_STATE_RUNNING - The operation is running. */
    OPERATION_STATE_RUNNING = 3,
    /** OPERATION_STATE_SUCCEEDED - The operation was completed successfully. */
    OPERATION_STATE_SUCCEEDED = 4,
    /** OPERATION_STATE_FAILED - The operation failed. */
    OPERATION_STATE_FAILED = 5,
    /** OPERATION_STATE_CANCELLED - The operation was cancelled by the user. */
    OPERATION_STATE_CANCELLED = 6,
    UNRECOGNIZED = -1
}
export declare const OperationStateSDKType: typeof OperationState;
export declare function operationStateFromJSON(object: any): OperationState;
export declare function operationStateToJSON(object: OperationState): string;
/** Describes a repository in which log entries are stored. */
export interface LogBucket {
    /**
     * Output only. The resource name of the bucket.
     *
     * For example:
     *
     *   `projects/my-project/locations/global/buckets/my-bucket`
     *
     * For a list of supported locations, see [Supported
     * Regions](https://cloud.google.com/logging/docs/region-support)
     *
     * For the location of `global` it is unspecified where log entries are
     * actually stored.
     *
     * After a bucket has been created, the location cannot be changed.
     */
    name: string;
    /** Describes this bucket. */
    description: string;
    /**
     * Output only. The creation timestamp of the bucket. This is not set for any of the
     * default buckets.
     */
    createTime?: Timestamp;
    /** Output only. The last update timestamp of the bucket. */
    updateTime?: Timestamp;
    /**
     * Logs will be retained by default for this amount of time, after which they
     * will automatically be deleted. The minimum retention period is 1 day. If
     * this value is set to zero at bucket creation time, the default time of 30
     * days will be used.
     */
    retentionDays: number;
    /**
     * Whether the bucket is locked.
     *
     * The retention period on a locked bucket cannot be changed. Locked buckets
     * may only be deleted if they are empty.
     */
    locked: boolean;
    /** Output only. The bucket lifecycle state. */
    lifecycleState: LifecycleState;
    /**
     * Log entry field paths that are denied access in this bucket.
     *
     * The following fields and their children are eligible: `textPayload`,
     * `jsonPayload`, `protoPayload`, `httpRequest`, `labels`, `sourceLocation`.
     *
     * Restricting a repeated field will restrict all values. Adding a parent will
     * block all child fields. (e.g. `foo.bar` will block `foo.bar.baz`)
     */
    restrictedFields: string[];
    /**
     * The CMEK settings of the log bucket. If present, new log entries written to
     * this log bucket are encrypted using the CMEK key provided in this
     * configuration. If a log bucket has CMEK settings, the CMEK settings cannot
     * be disabled later by updating the log bucket. Changing the KMS key is
     * allowed.
     */
    cmekSettings?: CmekSettings;
}
/** Describes a repository in which log entries are stored. */
export interface LogBucketSDKType {
    name: string;
    description: string;
    create_time?: TimestampSDKType;
    update_time?: TimestampSDKType;
    retention_days: number;
    locked: boolean;
    lifecycle_state: LifecycleState;
    restricted_fields: string[];
    cmek_settings?: CmekSettingsSDKType;
}
/** Describes a view over log entries in a bucket. */
export interface LogView {
    /**
     * The resource name of the view.
     *
     * For example:
     *
     *   `projects/my-project/locations/global/buckets/my-bucket/views/my-view`
     */
    name: string;
    /** Describes this view. */
    description: string;
    /** Output only. The creation timestamp of the view. */
    createTime?: Timestamp;
    /** Output only. The last update timestamp of the view. */
    updateTime?: Timestamp;
    /**
     * Filter that restricts which log entries in a bucket are visible in this
     * view.
     *
     * Filters are restricted to be a logical AND of ==/!= of any of the
     * following:
     *
     *   - originating project/folder/organization/billing account.
     *   - resource type
     *   - log id
     *
     * For example:
     *
     *   SOURCE("projects/myproject") AND resource.type = "gce_instance"
     *                                AND LOG_ID("stdout")
     */
    filter: string;
}
/** Describes a view over log entries in a bucket. */
export interface LogViewSDKType {
    name: string;
    description: string;
    create_time?: TimestampSDKType;
    update_time?: TimestampSDKType;
    filter: string;
}
/**
 * Describes a sink used to export log entries to one of the following
 * destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a
 * Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log
 * entries are exported. The sink must be created within a project,
 * organization, billing account, or folder.
 */
export interface LogSink {
    /**
     * Required. The client-assigned sink identifier, unique within the project.
     *
     * For example: `"my-syslog-errors-to-pubsub"`. Sink identifiers are limited
     * to 100 characters and can include only the following characters: upper and
     * lower-case alphanumeric characters, underscores, hyphens, and periods.
     * First character has to be alphanumeric.
     */
    name: string;
    /**
     * Required. The export destination:
     *
     *     "storage.googleapis.com/[GCS_BUCKET]"
     *     "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"
     *     "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]"
     *
     * The sink's `writer_identity`, set when the sink is created, must have
     * permission to write to the destination or else the log entries are not
     * exported. For more information, see
     * [Exporting Logs with
     * Sinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
     */
    destination: string;
    /**
     * Optional. An [advanced logs
     * filter](https://cloud.google.com/logging/docs/view/advanced-queries). The
     * only exported log entries are those that are in the resource owning the
     * sink and that match the filter.
     *
     * For example:
     *
     *   `logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR`
     */
    filter: string;
    /**
     * Optional. A description of this sink.
     *
     * The maximum length of the description is 8000 characters.
     */
    description: string;
    /**
     * Optional. If set to true, then this sink is disabled and it does not export any log
     * entries.
     */
    disabled: boolean;
    /**
     * Optional. Log entries that match any of these exclusion filters will not be exported.
     *
     * If a log entry is matched by both `filter` and one of `exclusion_filters`
     * it will not be exported.
     */
    exclusions: LogExclusion[];
    /** Deprecated. This field is unused. */
    /** @deprecated */
    outputVersionFormat: LogSink_VersionFormat;
    /**
     * Output only. An IAM identity&mdash;a service account or group&mdash;under which Cloud
     * Logging writes the exported log entries to the sink's destination. This
     * field is set by
     * [sinks.create][google.logging.v2.ConfigServiceV2.CreateSink] and
     * [sinks.update][google.logging.v2.ConfigServiceV2.UpdateSink] based on the
     * value of `unique_writer_identity` in those methods.
     *
     * Until you grant this identity write-access to the destination, log entry
     * exports from this sink will fail. For more information, see [Granting
     * Access for a
     * Resource](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource).
     * Consult the destination service's documentation to determine the
     * appropriate IAM roles to assign to the identity.
     *
     * Sinks that have a destination that is a log bucket in the same project as
     * the sink do not have a writer_identity and no additional permissions are
     * required.
     */
    writerIdentity: string;
    /**
     * Optional. This field applies only to sinks owned by organizations and folders. If the
     * field is false, the default, only the logs owned by the sink's parent
     * resource are available for export. If the field is true, then log entries
     * from all the projects, folders, and billing accounts contained in the
     * sink's parent resource are also available for export. Whether a particular
     * log entry from the children is exported depends on the sink's filter
     * expression.
     *
     * For example, if this field is true, then the filter
     * `resource.type=gce_instance` would export all Compute Engine VM instance
     * log entries from all projects in the sink's parent.
     *
     * To only export entries from certain child projects, filter on the project
     * part of the log name:
     *
     *   logName:("projects/test-project1/" OR "projects/test-project2/") AND
     *   resource.type=gce_instance
     */
    includeChildren: boolean;
    /** Optional. Options that affect sinks exporting data to BigQuery. */
    bigqueryOptions?: BigQueryOptions;
    /**
     * Output only. The creation timestamp of the sink.
     *
     * This field may not be present for older sinks.
     */
    createTime?: Timestamp;
    /**
     * Output only. The last update timestamp of the sink.
     *
     * This field may not be present for older sinks.
     */
    updateTime?: Timestamp;
}
/**
 * Describes a sink used to export log entries to one of the following
 * destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a
 * Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log
 * entries are exported. The sink must be created within a project,
 * organization, billing account, or folder.
 */
export interface LogSinkSDKType {
    name: string;
    destination: string;
    filter: string;
    description: string;
    disabled: boolean;
    exclusions: LogExclusionSDKType[];
    /** @deprecated */
    output_version_format: LogSink_VersionFormat;
    writer_identity: string;
    include_children: boolean;
    bigquery_options?: BigQueryOptionsSDKType;
    create_time?: TimestampSDKType;
    update_time?: TimestampSDKType;
}
/** Options that change functionality of a sink exporting data to BigQuery. */
export interface BigQueryOptions {
    /**
     * Optional. Whether to use [BigQuery's partition
     * tables](https://cloud.google.com/bigquery/docs/partitioned-tables). By
     * default, Cloud Logging creates dated tables based on the log entries'
     * timestamps, e.g. syslog_20170523. With partitioned tables the date suffix
     * is no longer present and [special query
     * syntax](https://cloud.google.com/bigquery/docs/querying-partitioned-tables)
     * has to be used instead. In both cases, tables are sharded based on UTC
     * timezone.
     */
    usePartitionedTables: boolean;
    /**
     * Output only. True if new timestamp column based partitioning is in use, false if legacy
     * ingestion-time partitioning is in use.
     *
     * All new sinks will have this field set true and will use timestamp column
     * based partitioning. If use_partitioned_tables is false, this value has no
     * meaning and will be false. Legacy sinks using partitioned tables will have
     * this field set to false.
     */
    usesTimestampColumnPartitioning: boolean;
}
/** Options that change functionality of a sink exporting data to BigQuery. */
export interface BigQueryOptionsSDKType {
    use_partitioned_tables: boolean;
    uses_timestamp_column_partitioning: boolean;
}
/** The parameters to `ListBuckets`. */
export interface ListBucketsRequest {
    /**
     * Required. The parent resource whose buckets are to be listed:
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
     *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]"
     *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]"
     *
     * Note: The locations portion of the resource must be specified, but
     * supplying the character `-` in place of [LOCATION_ID] will return all
     * buckets.
     */
    parent: string;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call
     * to this method. `pageToken` must be the value of `nextPageToken` from the
     * previous response. The values of other method parameters should be
     * identical to those in the previous call.
     */
    pageToken: string;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive
     * values are ignored. The presence of `nextPageToken` in the response
     * indicates that more results might be available.
     */
    pageSize: number;
}
/** The parameters to `ListBuckets`. */
export interface ListBucketsRequestSDKType {
    parent: string;
    page_token: string;
    page_size: number;
}
/** The response from ListBuckets. */
export interface ListBucketsResponse {
    /** A list of buckets. */
    buckets: LogBucket[];
    /**
     * If there might be more results than appear in this response, then
     * `nextPageToken` is included. To get the next set of results, call the same
     * method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken: string;
}
/** The response from ListBuckets. */
export interface ListBucketsResponseSDKType {
    buckets: LogBucketSDKType[];
    next_page_token: string;
}
/** The parameters to `CreateBucket`. */
export interface CreateBucketRequest {
    /**
     * Required. The resource in which to create the log bucket:
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/global"`
     */
    parent: string;
    /**
     * Required. A client-assigned identifier such as `"my-bucket"`. Identifiers are limited
     * to 100 characters and can include only letters, digits, underscores,
     * hyphens, and periods.
     */
    bucketId: string;
    /**
     * Required. The new bucket. The region specified in the new bucket must be compliant
     * with any Location Restriction Org Policy. The name field in the bucket is
     * ignored.
     */
    bucket?: LogBucket;
}
/** The parameters to `CreateBucket`. */
export interface CreateBucketRequestSDKType {
    parent: string;
    bucket_id: string;
    bucket?: LogBucketSDKType;
}
/** The parameters to `UpdateBucket`. */
export interface UpdateBucketRequest {
    /**
     * Required. The full resource name of the bucket to update.
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/global/buckets/my-bucket"`
     */
    name: string;
    /** Required. The updated bucket. */
    bucket?: LogBucket;
    /**
     * Required. Field mask that specifies the fields in `bucket` that need an update. A
     * bucket field will be overwritten if, and only if, it is in the update mask.
     * `name` and output only fields cannot be updated.
     *
     * For a detailed `FieldMask` definition, see:
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
     *
     * For example: `updateMask=retention_days`
     */
    updateMask?: FieldMask;
}
/** The parameters to `UpdateBucket`. */
export interface UpdateBucketRequestSDKType {
    name: string;
    bucket?: LogBucketSDKType;
    update_mask?: FieldMaskSDKType;
}
/** The parameters to `GetBucket`. */
export interface GetBucketRequest {
    /**
     * Required. The resource name of the bucket:
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/global/buckets/my-bucket"`
     */
    name: string;
}
/** The parameters to `GetBucket`. */
export interface GetBucketRequestSDKType {
    name: string;
}
/** The parameters to `DeleteBucket`. */
export interface DeleteBucketRequest {
    /**
     * Required. The full resource name of the bucket to delete.
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/global/buckets/my-bucket"`
     */
    name: string;
}
/** The parameters to `DeleteBucket`. */
export interface DeleteBucketRequestSDKType {
    name: string;
}
/** The parameters to `UndeleteBucket`. */
export interface UndeleteBucketRequest {
    /**
     * Required. The full resource name of the bucket to undelete.
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/global/buckets/my-bucket"`
     */
    name: string;
}
/** The parameters to `UndeleteBucket`. */
export interface UndeleteBucketRequestSDKType {
    name: string;
}
/** The parameters to `ListViews`. */
export interface ListViewsRequest {
    /**
     * Required. The bucket whose views are to be listed:
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     */
    parent: string;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call
     * to this method. `pageToken` must be the value of `nextPageToken` from the
     * previous response. The values of other method parameters should be
     * identical to those in the previous call.
     */
    pageToken: string;
    /**
     * Optional. The maximum number of results to return from this request.
     *
     * Non-positive values are ignored. The presence of `nextPageToken` in the
     * response indicates that more results might be available.
     */
    pageSize: number;
}
/** The parameters to `ListViews`. */
export interface ListViewsRequestSDKType {
    parent: string;
    page_token: string;
    page_size: number;
}
/** The response from ListViews. */
export interface ListViewsResponse {
    /** A list of views. */
    views: LogView[];
    /**
     * If there might be more results than appear in this response, then
     * `nextPageToken` is included. To get the next set of results, call the same
     * method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken: string;
}
/** The response from ListViews. */
export interface ListViewsResponseSDKType {
    views: LogViewSDKType[];
    next_page_token: string;
}
/** The parameters to `CreateView`. */
export interface CreateViewRequest {
    /**
     * Required. The bucket in which to create the view
     *
     *     `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"`
     *
     * For example:
     *
     *   `"projects/my-project/locations/global/buckets/my-bucket"`
     */
    parent: string;
    /** Required. The id to use for this view. */
    viewId: string;
    /** Required. The new view. */
    view?: LogView;
}
/** The parameters to `CreateView`. */
export interface CreateViewRequestSDKType {
    parent: string;
    view_id: string;
    view?: LogViewSDKType;
}
/** The parameters to `UpdateView`. */
export interface UpdateViewRequest {
    /**
     * Required. The full resource name of the view to update
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
     */
    name: string;
    /** Required. The updated view. */
    view?: LogView;
    /**
     * Optional. Field mask that specifies the fields in `view` that need
     * an update. A field will be overwritten if, and only if, it is
     * in the update mask. `name` and output only fields cannot be updated.
     *
     * For a detailed `FieldMask` definition, see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
     *
     * For example: `updateMask=filter`
     */
    updateMask?: FieldMask;
}
/** The parameters to `UpdateView`. */
export interface UpdateViewRequestSDKType {
    name: string;
    view?: LogViewSDKType;
    update_mask?: FieldMaskSDKType;
}
/** The parameters to `GetView`. */
export interface GetViewRequest {
    /**
     * Required. The resource name of the policy:
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
     */
    name: string;
}
/** The parameters to `GetView`. */
export interface GetViewRequestSDKType {
    name: string;
}
/** The parameters to `DeleteView`. */
export interface DeleteViewRequest {
    /**
     * Required. The full resource name of the view to delete:
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
     *
     * For example:
     *
     *    `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
     */
    name: string;
}
/** The parameters to `DeleteView`. */
export interface DeleteViewRequestSDKType {
    name: string;
}
/** The parameters to `ListSinks`. */
export interface ListSinksRequest {
    /**
     * Required. The parent resource whose sinks are to be listed:
     *
     *     "projects/[PROJECT_ID]"
     *     "organizations/[ORGANIZATION_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]"
     *     "folders/[FOLDER_ID]"
     */
    parent: string;
    /**
     * Optional. If present, then retrieve the next batch of results from the
     * preceding call to this method. `pageToken` must be the value of
     * `nextPageToken` from the previous response. The values of other method
     * parameters should be identical to those in the previous call.
     */
    pageToken: string;
    /**
     * Optional. The maximum number of results to return from this request.
     * Non-positive values are ignored. The presence of `nextPageToken` in the
     * response indicates that more results might be available.
     */
    pageSize: number;
}
/** The parameters to `ListSinks`. */
export interface ListSinksRequestSDKType {
    parent: string;
    page_token: string;
    page_size: number;
}
/** Result returned from `ListSinks`. */
export interface ListSinksResponse {
    /** A list of sinks. */
    sinks: LogSink[];
    /**
     * If there might be more results than appear in this response, then
     * `nextPageToken` is included. To get the next set of results, call the same
     * method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken: string;
}
/** Result returned from `ListSinks`. */
export interface ListSinksResponseSDKType {
    sinks: LogSinkSDKType[];
    next_page_token: string;
}
/** The parameters to `GetSink`. */
export interface GetSinkRequest {
    /**
     * Required. The resource name of the sink:
     *
     *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
     *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
     *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/sinks/my-sink"`
     */
    sinkName: string;
}
/** The parameters to `GetSink`. */
export interface GetSinkRequestSDKType {
    sink_name: string;
}
/** The parameters to `CreateSink`. */
export interface CreateSinkRequest {
    /**
     * Required. The resource in which to create the sink:
     *
     *     "projects/[PROJECT_ID]"
     *     "organizations/[ORGANIZATION_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]"
     *     "folders/[FOLDER_ID]"
     *
     * For examples:
     *
     *   `"projects/my-project"`
     *   `"organizations/123456789"`
     */
    parent: string;
    /**
     * Required. The new sink, whose `name` parameter is a sink identifier that
     * is not already in use.
     */
    sink?: LogSink;
    /**
     * Optional. Determines the kind of IAM identity returned as `writer_identity`
     * in the new sink. If this value is omitted or set to false, and if the
     * sink's parent is a project, then the value returned as `writer_identity` is
     * the same group or service account used by Cloud Logging before the addition
     * of writer identities to this API. The sink's destination must be in the
     * same project as the sink itself.
     *
     * If this field is set to true, or if the sink is owned by a non-project
     * resource such as an organization, then the value of `writer_identity` will
     * be a unique service account used only for exports from the new sink. For
     * more information, see `writer_identity` in [LogSink][google.logging.v2.LogSink].
     */
    uniqueWriterIdentity: boolean;
}
/** The parameters to `CreateSink`. */
export interface CreateSinkRequestSDKType {
    parent: string;
    sink?: LogSinkSDKType;
    unique_writer_identity: boolean;
}
/** The parameters to `UpdateSink`. */
export interface UpdateSinkRequest {
    /**
     * Required. The full resource name of the sink to update, including the parent
     * resource and the sink identifier:
     *
     *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
     *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
     *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/sinks/my-sink"`
     */
    sinkName: string;
    /**
     * Required. The updated sink, whose name is the same identifier that appears as part
     * of `sink_name`.
     */
    sink?: LogSink;
    /**
     * Optional. See [sinks.create][google.logging.v2.ConfigServiceV2.CreateSink]
     * for a description of this field. When updating a sink, the effect of this
     * field on the value of `writer_identity` in the updated sink depends on both
     * the old and new values of this field:
     *
     * +   If the old and new values of this field are both false or both true,
     *     then there is no change to the sink's `writer_identity`.
     * +   If the old value is false and the new value is true, then
     *     `writer_identity` is changed to a unique service account.
     * +   It is an error if the old value is true and the new value is
     *     set to false or defaulted to false.
     */
    uniqueWriterIdentity: boolean;
    /**
     * Optional. Field mask that specifies the fields in `sink` that need
     * an update. A sink field will be overwritten if, and only if, it is
     * in the update mask. `name` and output only fields cannot be updated.
     *
     * An empty `updateMask` is temporarily treated as using the following mask
     * for backwards compatibility purposes:
     *
     *   `destination,filter,includeChildren`
     *
     * At some point in the future, behavior will be removed and specifying an
     * empty `updateMask` will be an error.
     *
     * For a detailed `FieldMask` definition, see
     * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
     *
     * For example: `updateMask=filter`
     */
    updateMask?: FieldMask;
}
/** The parameters to `UpdateSink`. */
export interface UpdateSinkRequestSDKType {
    sink_name: string;
    sink?: LogSinkSDKType;
    unique_writer_identity: boolean;
    update_mask?: FieldMaskSDKType;
}
/** The parameters to `DeleteSink`. */
export interface DeleteSinkRequest {
    /**
     * Required. The full resource name of the sink to delete, including the parent
     * resource and the sink identifier:
     *
     *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
     *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
     *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/sinks/my-sink"`
     */
    sinkName: string;
}
/** The parameters to `DeleteSink`. */
export interface DeleteSinkRequestSDKType {
    sink_name: string;
}
/**
 * Specifies a set of log entries that are filtered out by a sink. If
 * your Google Cloud resource receives a large volume of log entries, you can
 * use exclusions to reduce your chargeable logs. Note that exclusions on
 * organization-level and folder-level sinks don't apply to child resources.
 * Note also that you cannot modify the _Required sink or exclude logs from it.
 */
export interface LogExclusion {
    /**
     * Required. A client-assigned identifier, such as `"load-balancer-exclusion"`.
     * Identifiers are limited to 100 characters and can include only letters,
     * digits, underscores, hyphens, and periods. First character has to be
     * alphanumeric.
     */
    name: string;
    /** Optional. A description of this exclusion. */
    description: string;
    /**
     * Required. An [advanced logs
     * filter](https://cloud.google.com/logging/docs/view/advanced-queries) that
     * matches the log entries to be excluded. By using the [sample
     * function](https://cloud.google.com/logging/docs/view/advanced-queries#sample),
     * you can exclude less than 100% of the matching log entries.
     *
     * For example, the following query matches 99% of low-severity log entries
     * from Google Cloud Storage buckets:
     *
     *   `resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99)`
     */
    filter: string;
    /**
     * Optional. If set to True, then this exclusion is disabled and it does not
     * exclude any log entries. You can [update an
     * exclusion][google.logging.v2.ConfigServiceV2.UpdateExclusion] to change the
     * value of this field.
     */
    disabled: boolean;
    /**
     * Output only. The creation timestamp of the exclusion.
     *
     * This field may not be present for older exclusions.
     */
    createTime?: Timestamp;
    /**
     * Output only. The last update timestamp of the exclusion.
     *
     * This field may not be present for older exclusions.
     */
    updateTime?: Timestamp;
}
/**
 * Specifies a set of log entries that are filtered out by a sink. If
 * your Google Cloud resource receives a large volume of log entries, you can
 * use exclusions to reduce your chargeable logs. Note that exclusions on
 * organization-level and folder-level sinks don't apply to child resources.
 * Note also that you cannot modify the _Required sink or exclude logs from it.
 */
export interface LogExclusionSDKType {
    name: string;
    description: string;
    filter: string;
    disabled: boolean;
    create_time?: TimestampSDKType;
    update_time?: TimestampSDKType;
}
/** The parameters to `ListExclusions`. */
export interface ListExclusionsRequest {
    /**
     * Required. The parent resource whose exclusions are to be listed.
     *
     *     "projects/[PROJECT_ID]"
     *     "organizations/[ORGANIZATION_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]"
     *     "folders/[FOLDER_ID]"
     */
    parent: string;
    /**
     * Optional. If present, then retrieve the next batch of results from the
     * preceding call to this method. `pageToken` must be the value of
     * `nextPageToken` from the previous response. The values of other method
     * parameters should be identical to those in the previous call.
     */
    pageToken: string;
    /**
     * Optional. The maximum number of results to return from this request.
     * Non-positive values are ignored. The presence of `nextPageToken` in the
     * response indicates that more results might be available.
     */
    pageSize: number;
}
/** The parameters to `ListExclusions`. */
export interface ListExclusionsRequestSDKType {
    parent: string;
    page_token: string;
    page_size: number;
}
/** Result returned from `ListExclusions`. */
export interface ListExclusionsResponse {
    /** A list of exclusions. */
    exclusions: LogExclusion[];
    /**
     * If there might be more results than appear in this response, then
     * `nextPageToken` is included. To get the next set of results, call the same
     * method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken: string;
}
/** Result returned from `ListExclusions`. */
export interface ListExclusionsResponseSDKType {
    exclusions: LogExclusionSDKType[];
    next_page_token: string;
}
/** The parameters to `GetExclusion`. */
export interface GetExclusionRequest {
    /**
     * Required. The resource name of an existing exclusion:
     *
     *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
     *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
     *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/exclusions/my-exclusion"`
     */
    name: string;
}
/** The parameters to `GetExclusion`. */
export interface GetExclusionRequestSDKType {
    name: string;
}
/** The parameters to `CreateExclusion`. */
export interface CreateExclusionRequest {
    /**
     * Required. The parent resource in which to create the exclusion:
     *
     *     "projects/[PROJECT_ID]"
     *     "organizations/[ORGANIZATION_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]"
     *     "folders/[FOLDER_ID]"
     *
     * For examples:
     *
     *   `"projects/my-logging-project"`
     *   `"organizations/123456789"`
     */
    parent: string;
    /**
     * Required. The new exclusion, whose `name` parameter is an exclusion name
     * that is not already used in the parent resource.
     */
    exclusion?: LogExclusion;
}
/** The parameters to `CreateExclusion`. */
export interface CreateExclusionRequestSDKType {
    parent: string;
    exclusion?: LogExclusionSDKType;
}
/** The parameters to `UpdateExclusion`. */
export interface UpdateExclusionRequest {
    /**
     * Required. The resource name of the exclusion to update:
     *
     *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
     *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
     *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/exclusions/my-exclusion"`
     */
    name: string;
    /**
     * Required. New values for the existing exclusion. Only the fields specified in
     * `update_mask` are relevant.
     */
    exclusion?: LogExclusion;
    /**
     * Required. A non-empty list of fields to change in the existing exclusion. New values
     * for the fields are taken from the corresponding fields in the
     * [LogExclusion][google.logging.v2.LogExclusion] included in this request. Fields not mentioned in
     * `update_mask` are not changed and are ignored in the request.
     *
     * For example, to change the filter and description of an exclusion,
     * specify an `update_mask` of `"filter,description"`.
     */
    updateMask?: FieldMask;
}
/** The parameters to `UpdateExclusion`. */
export interface UpdateExclusionRequestSDKType {
    name: string;
    exclusion?: LogExclusionSDKType;
    update_mask?: FieldMaskSDKType;
}
/** The parameters to `DeleteExclusion`. */
export interface DeleteExclusionRequest {
    /**
     * Required. The resource name of an existing exclusion to delete:
     *
     *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
     *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
     *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
     *
     * For example:
     *
     *   `"projects/my-project/exclusions/my-exclusion"`
     */
    name: string;
}
/** The parameters to `DeleteExclusion`. */
export interface DeleteExclusionRequestSDKType {
    name: string;
}
/**
 * The parameters to
 * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings].
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetCmekSettingsRequest {
    /**
     * Required. The resource for which to retrieve CMEK settings.
     *
     *     "projects/[PROJECT_ID]/cmekSettings"
     *     "organizations/[ORGANIZATION_ID]/cmekSettings"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
     *     "folders/[FOLDER_ID]/cmekSettings"
     *
     * For example:
     *
     *   `"organizations/12345/cmekSettings"`
     *
     * Note: CMEK for the Log Router can be configured for Google Cloud projects,
     * folders, organizations and billing accounts. Once configured for an
     * organization, it applies to all projects and folders in the Google Cloud
     * organization.
     */
    name: string;
}
/**
 * The parameters to
 * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings].
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetCmekSettingsRequestSDKType {
    name: string;
}
/**
 * The parameters to
 * [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings].
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateCmekSettingsRequest {
    /**
     * Required. The resource name for the CMEK settings to update.
     *
     *     "projects/[PROJECT_ID]/cmekSettings"
     *     "organizations/[ORGANIZATION_ID]/cmekSettings"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
     *     "folders/[FOLDER_ID]/cmekSettings"
     *
     * For example:
     *
     *   `"organizations/12345/cmekSettings"`
     *
     * Note: CMEK for the Log Router can currently only be configured for Google
     * Cloud organizations. Once configured, it applies to all projects and
     * folders in the Google Cloud organization.
     */
    name: string;
    /**
     * Required. The CMEK settings to update.
     *
     * See [Enabling CMEK for Log
     * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
     * for more information.
     */
    cmekSettings?: CmekSettings;
    /**
     * Optional. Field mask identifying which fields from `cmek_settings` should
     * be updated. A field will be overwritten if and only if it is in the update
     * mask. Output only fields cannot be updated.
     *
     * See [FieldMask][google.protobuf.FieldMask] for more information.
     *
     * For example: `"updateMask=kmsKeyName"`
     */
    updateMask?: FieldMask;
}
/**
 * The parameters to
 * [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings].
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateCmekSettingsRequestSDKType {
    name: string;
    cmek_settings?: CmekSettingsSDKType;
    update_mask?: FieldMaskSDKType;
}
/**
 * Describes the customer-managed encryption key (CMEK) settings associated with
 * a project, folder, organization, billing account, or flexible resource.
 *
 * Note: CMEK for the Log Router can currently only be configured for Google
 * Cloud organizations. Once configured, it applies to all projects and folders
 * in the Google Cloud organization.
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface CmekSettings {
    /** Output only. The resource name of the CMEK settings. */
    name: string;
    /**
     * The resource name for the configured Cloud KMS key.
     *
     * KMS key name format:
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`
     *
     *
     *
     * To enable CMEK for the Log Router, set this field to a valid
     * `kms_key_name` for which the associated service account has the required
     * cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
     *
     * The Cloud KMS key used by the Log Router can be updated by changing the
     * `kms_key_name` to a new valid key name or disabled by setting the key name
     * to an empty string. Encryption operations that are in progress will be
     * completed with the key that was in use when they started. Decryption
     * operations will be completed using the key that was used at the time of
     * encryption unless access to that key has been revoked.
     *
     * To disable CMEK for the Log Router, set this field to an empty string.
     *
     * See [Enabling CMEK for Log
     * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
     * for more information.
     */
    kmsKeyName: string;
    /**
     * Output only. The service account that will be used by the Log Router to access your
     * Cloud KMS key.
     *
     * Before enabling CMEK for Log Router, you must first assign the
     * cloudkms.cryptoKeyEncrypterDecrypter role to the service account that
     * the Log Router will use to access your Cloud KMS key. Use
     * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings] to
     * obtain the service account ID.
     *
     * See [Enabling CMEK for Log
     * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
     * for more information.
     */
    serviceAccountId: string;
}
/**
 * Describes the customer-managed encryption key (CMEK) settings associated with
 * a project, folder, organization, billing account, or flexible resource.
 *
 * Note: CMEK for the Log Router can currently only be configured for Google
 * Cloud organizations. Once configured, it applies to all projects and folders
 * in the Google Cloud organization.
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface CmekSettingsSDKType {
    name: string;
    kms_key_name: string;
    service_account_id: string;
}
/**
 * The parameters to
 * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings].
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetSettingsRequest {
    /**
     * Required. The resource for which to retrieve settings.
     *
     *     "projects/[PROJECT_ID]/settings"
     *     "organizations/[ORGANIZATION_ID]/settings"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/settings"
     *     "folders/[FOLDER_ID]/settings"
     *
     * For example:
     *
     *   `"organizations/12345/settings"`
     *
     * Note: Settings for the Log Router can be get for Google Cloud projects,
     * folders, organizations and billing accounts. Currently it can only be
     * configured for organizations. Once configured for an organization, it
     * applies to all projects and folders in the Google Cloud organization.
     */
    name: string;
}
/**
 * The parameters to
 * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings].
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetSettingsRequestSDKType {
    name: string;
}
/**
 * The parameters to
 * [UpdateSettings][google.logging.v2.ConfigServiceV2.UpdateSettings].
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateSettingsRequest {
    /**
     * Required. The resource name for the settings to update.
     *
     *     "organizations/[ORGANIZATION_ID]/settings"
     *
     * For example:
     *
     *   `"organizations/12345/settings"`
     *
     * Note: Settings for the Log Router can currently only be configured for
     * Google Cloud organizations. Once configured, it applies to all projects and
     * folders in the Google Cloud organization.
     */
    name: string;
    /**
     * Required. The settings to update.
     *
     * See [Enabling CMEK for Log
     * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
     * for more information.
     */
    settings?: Settings;
    /**
     * Optional. Field mask identifying which fields from `settings` should
     * be updated. A field will be overwritten if and only if it is in the update
     * mask. Output only fields cannot be updated.
     *
     * See [FieldMask][google.protobuf.FieldMask] for more information.
     *
     * For example: `"updateMask=kmsKeyName"`
     */
    updateMask?: FieldMask;
}
/**
 * The parameters to
 * [UpdateSettings][google.logging.v2.ConfigServiceV2.UpdateSettings].
 *
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateSettingsRequestSDKType {
    name: string;
    settings?: SettingsSDKType;
    update_mask?: FieldMaskSDKType;
}
/**
 * Describes the settings associated with a project, folder, organization,
 * billing account, or flexible resource.
 */
export interface Settings {
    /** Output only. The resource name of the settings. */
    name: string;
    /**
     * Optional. The resource name for the configured Cloud KMS key.
     *
     * KMS key name format:
     *
     *     "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
     *
     * For example:
     *
     *   `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`
     *
     *
     *
     * To enable CMEK for the Log Router, set this field to a valid
     * `kms_key_name` for which the associated service account has the required
     * `roles/cloudkms.cryptoKeyEncrypterDecrypter` role assigned for the key.
     *
     * The Cloud KMS key used by the Log Router can be updated by changing the
     * `kms_key_name` to a new valid key name. Encryption operations that are in
     * progress will be completed with the key that was in use when they started.
     * Decryption operations will be completed using the key that was used at the
     * time of encryption unless access to that key has been revoked.
     *
     * To disable CMEK for the Log Router, set this field to an empty string.
     *
     * See [Enabling CMEK for Log
     * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
     * for more information.
     */
    kmsKeyName: string;
    /**
     * Output only. The service account that will be used by the Log Router to access your
     * Cloud KMS key.
     *
     * Before enabling CMEK for Log Router, you must first assign the role
     * `roles/cloudkms.cryptoKeyEncrypterDecrypter` to the service account that
     * the Log Router will use to access your Cloud KMS key. Use
     * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings] to
     * obtain the service account ID.
     *
     * See [Enabling CMEK for Log
     * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
     * for more information.
     */
    kmsServiceAccountId: string;
    /**
     * Optional. The Cloud region that will be used for _Default and _Required log buckets
     * for newly created projects and folders. For example `europe-west1`.
     * This setting does not affect the location of custom log buckets.
     */
    storageLocation: string;
    /**
     * Optional. If set to true, the _Default sink in newly created projects and folders
     * will created in a disabled state. This can be used to automatically disable
     * log ingestion if there is already an aggregated sink configured in the
     * hierarchy. The _Default sink can be re-enabled manually if needed.
     */
    disableDefaultSink: boolean;
}
/**
 * Describes the settings associated with a project, folder, organization,
 * billing account, or flexible resource.
 */
export interface SettingsSDKType {
    name: string;
    kms_key_name: string;
    kms_service_account_id: string;
    storage_location: string;
    disable_default_sink: boolean;
}
/** The parameters to CopyLogEntries. */
export interface CopyLogEntriesRequest {
    /**
     * Required. Log bucket from which to copy log entries.
     *
     * For example:
     *
     *   `"projects/my-project/locations/global/buckets/my-source-bucket"`
     */
    name: string;
    /**
     * Optional. A filter specifying which log entries to copy. The filter must be no more
     * than 20k characters. An empty filter matches all log entries.
     */
    filter: string;
    /** Required. Destination to which to copy log entries. */
    destination: string;
}
/** The parameters to CopyLogEntries. */
export interface CopyLogEntriesRequestSDKType {
    name: string;
    filter: string;
    destination: string;
}
/** Metadata for CopyLogEntries long running operations. */
export interface CopyLogEntriesMetadata {
    /** The create time of an operation. */
    startTime?: Timestamp;
    /** The end time of an operation. */
    endTime?: Timestamp;
    /** State of an operation. */
    state: OperationState;
    /** Identifies whether the user has requested cancellation of the operation. */
    cancellationRequested: boolean;
    /** CopyLogEntries RPC request. */
    request?: CopyLogEntriesRequest;
    /** Estimated progress of the operation (0 - 100%). */
    progress: number;
    /**
     * The IAM identity of a service account that must be granted access to the
     * destination.
     *
     * If the service account is not granted permission to the destination within
     * an hour, the operation will be cancelled.
     *
     * For example: `"serviceAccount:foo@bar.com"`
     */
    writerIdentity: string;
}
/** Metadata for CopyLogEntries long running operations. */
export interface CopyLogEntriesMetadataSDKType {
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
    state: OperationState;
    cancellation_requested: boolean;
    request?: CopyLogEntriesRequestSDKType;
    progress: number;
    writer_identity: string;
}
/** Response type for CopyLogEntries long running operations. */
export interface CopyLogEntriesResponse {
    /** Number of log entries copied. */
    logEntriesCopiedCount: Long;
}
/** Response type for CopyLogEntries long running operations. */
export interface CopyLogEntriesResponseSDKType {
    log_entries_copied_count: Long;
}
export declare const LogBucket: {
    encode(message: LogBucket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogBucket;
    fromJSON(object: any): LogBucket;
    toJSON(message: LogBucket): unknown;
    fromPartial(object: Partial<LogBucket>): LogBucket;
};
export declare const LogView: {
    encode(message: LogView, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogView;
    fromJSON(object: any): LogView;
    toJSON(message: LogView): unknown;
    fromPartial(object: Partial<LogView>): LogView;
};
export declare const LogSink: {
    encode(message: LogSink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogSink;
    fromJSON(object: any): LogSink;
    toJSON(message: LogSink): unknown;
    fromPartial(object: Partial<LogSink>): LogSink;
};
export declare const BigQueryOptions: {
    encode(message: BigQueryOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BigQueryOptions;
    fromJSON(object: any): BigQueryOptions;
    toJSON(message: BigQueryOptions): unknown;
    fromPartial(object: Partial<BigQueryOptions>): BigQueryOptions;
};
export declare const ListBucketsRequest: {
    encode(message: ListBucketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListBucketsRequest;
    fromJSON(object: any): ListBucketsRequest;
    toJSON(message: ListBucketsRequest): unknown;
    fromPartial(object: Partial<ListBucketsRequest>): ListBucketsRequest;
};
export declare const ListBucketsResponse: {
    encode(message: ListBucketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListBucketsResponse;
    fromJSON(object: any): ListBucketsResponse;
    toJSON(message: ListBucketsResponse): unknown;
    fromPartial(object: Partial<ListBucketsResponse>): ListBucketsResponse;
};
export declare const CreateBucketRequest: {
    encode(message: CreateBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBucketRequest;
    fromJSON(object: any): CreateBucketRequest;
    toJSON(message: CreateBucketRequest): unknown;
    fromPartial(object: Partial<CreateBucketRequest>): CreateBucketRequest;
};
export declare const UpdateBucketRequest: {
    encode(message: UpdateBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateBucketRequest;
    fromJSON(object: any): UpdateBucketRequest;
    toJSON(message: UpdateBucketRequest): unknown;
    fromPartial(object: Partial<UpdateBucketRequest>): UpdateBucketRequest;
};
export declare const GetBucketRequest: {
    encode(message: GetBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBucketRequest;
    fromJSON(object: any): GetBucketRequest;
    toJSON(message: GetBucketRequest): unknown;
    fromPartial(object: Partial<GetBucketRequest>): GetBucketRequest;
};
export declare const DeleteBucketRequest: {
    encode(message: DeleteBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBucketRequest;
    fromJSON(object: any): DeleteBucketRequest;
    toJSON(message: DeleteBucketRequest): unknown;
    fromPartial(object: Partial<DeleteBucketRequest>): DeleteBucketRequest;
};
export declare const UndeleteBucketRequest: {
    encode(message: UndeleteBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteBucketRequest;
    fromJSON(object: any): UndeleteBucketRequest;
    toJSON(message: UndeleteBucketRequest): unknown;
    fromPartial(object: Partial<UndeleteBucketRequest>): UndeleteBucketRequest;
};
export declare const ListViewsRequest: {
    encode(message: ListViewsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsRequest;
    fromJSON(object: any): ListViewsRequest;
    toJSON(message: ListViewsRequest): unknown;
    fromPartial(object: Partial<ListViewsRequest>): ListViewsRequest;
};
export declare const ListViewsResponse: {
    encode(message: ListViewsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListViewsResponse;
    fromJSON(object: any): ListViewsResponse;
    toJSON(message: ListViewsResponse): unknown;
    fromPartial(object: Partial<ListViewsResponse>): ListViewsResponse;
};
export declare const CreateViewRequest: {
    encode(message: CreateViewRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateViewRequest;
    fromJSON(object: any): CreateViewRequest;
    toJSON(message: CreateViewRequest): unknown;
    fromPartial(object: Partial<CreateViewRequest>): CreateViewRequest;
};
export declare const UpdateViewRequest: {
    encode(message: UpdateViewRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateViewRequest;
    fromJSON(object: any): UpdateViewRequest;
    toJSON(message: UpdateViewRequest): unknown;
    fromPartial(object: Partial<UpdateViewRequest>): UpdateViewRequest;
};
export declare const GetViewRequest: {
    encode(message: GetViewRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetViewRequest;
    fromJSON(object: any): GetViewRequest;
    toJSON(message: GetViewRequest): unknown;
    fromPartial(object: Partial<GetViewRequest>): GetViewRequest;
};
export declare const DeleteViewRequest: {
    encode(message: DeleteViewRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteViewRequest;
    fromJSON(object: any): DeleteViewRequest;
    toJSON(message: DeleteViewRequest): unknown;
    fromPartial(object: Partial<DeleteViewRequest>): DeleteViewRequest;
};
export declare const ListSinksRequest: {
    encode(message: ListSinksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSinksRequest;
    fromJSON(object: any): ListSinksRequest;
    toJSON(message: ListSinksRequest): unknown;
    fromPartial(object: Partial<ListSinksRequest>): ListSinksRequest;
};
export declare const ListSinksResponse: {
    encode(message: ListSinksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListSinksResponse;
    fromJSON(object: any): ListSinksResponse;
    toJSON(message: ListSinksResponse): unknown;
    fromPartial(object: Partial<ListSinksResponse>): ListSinksResponse;
};
export declare const GetSinkRequest: {
    encode(message: GetSinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSinkRequest;
    fromJSON(object: any): GetSinkRequest;
    toJSON(message: GetSinkRequest): unknown;
    fromPartial(object: Partial<GetSinkRequest>): GetSinkRequest;
};
export declare const CreateSinkRequest: {
    encode(message: CreateSinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateSinkRequest;
    fromJSON(object: any): CreateSinkRequest;
    toJSON(message: CreateSinkRequest): unknown;
    fromPartial(object: Partial<CreateSinkRequest>): CreateSinkRequest;
};
export declare const UpdateSinkRequest: {
    encode(message: UpdateSinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSinkRequest;
    fromJSON(object: any): UpdateSinkRequest;
    toJSON(message: UpdateSinkRequest): unknown;
    fromPartial(object: Partial<UpdateSinkRequest>): UpdateSinkRequest;
};
export declare const DeleteSinkRequest: {
    encode(message: DeleteSinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSinkRequest;
    fromJSON(object: any): DeleteSinkRequest;
    toJSON(message: DeleteSinkRequest): unknown;
    fromPartial(object: Partial<DeleteSinkRequest>): DeleteSinkRequest;
};
export declare const LogExclusion: {
    encode(message: LogExclusion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogExclusion;
    fromJSON(object: any): LogExclusion;
    toJSON(message: LogExclusion): unknown;
    fromPartial(object: Partial<LogExclusion>): LogExclusion;
};
export declare const ListExclusionsRequest: {
    encode(message: ListExclusionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListExclusionsRequest;
    fromJSON(object: any): ListExclusionsRequest;
    toJSON(message: ListExclusionsRequest): unknown;
    fromPartial(object: Partial<ListExclusionsRequest>): ListExclusionsRequest;
};
export declare const ListExclusionsResponse: {
    encode(message: ListExclusionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListExclusionsResponse;
    fromJSON(object: any): ListExclusionsResponse;
    toJSON(message: ListExclusionsResponse): unknown;
    fromPartial(object: Partial<ListExclusionsResponse>): ListExclusionsResponse;
};
export declare const GetExclusionRequest: {
    encode(message: GetExclusionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetExclusionRequest;
    fromJSON(object: any): GetExclusionRequest;
    toJSON(message: GetExclusionRequest): unknown;
    fromPartial(object: Partial<GetExclusionRequest>): GetExclusionRequest;
};
export declare const CreateExclusionRequest: {
    encode(message: CreateExclusionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateExclusionRequest;
    fromJSON(object: any): CreateExclusionRequest;
    toJSON(message: CreateExclusionRequest): unknown;
    fromPartial(object: Partial<CreateExclusionRequest>): CreateExclusionRequest;
};
export declare const UpdateExclusionRequest: {
    encode(message: UpdateExclusionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExclusionRequest;
    fromJSON(object: any): UpdateExclusionRequest;
    toJSON(message: UpdateExclusionRequest): unknown;
    fromPartial(object: Partial<UpdateExclusionRequest>): UpdateExclusionRequest;
};
export declare const DeleteExclusionRequest: {
    encode(message: DeleteExclusionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExclusionRequest;
    fromJSON(object: any): DeleteExclusionRequest;
    toJSON(message: DeleteExclusionRequest): unknown;
    fromPartial(object: Partial<DeleteExclusionRequest>): DeleteExclusionRequest;
};
export declare const GetCmekSettingsRequest: {
    encode(message: GetCmekSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCmekSettingsRequest;
    fromJSON(object: any): GetCmekSettingsRequest;
    toJSON(message: GetCmekSettingsRequest): unknown;
    fromPartial(object: Partial<GetCmekSettingsRequest>): GetCmekSettingsRequest;
};
export declare const UpdateCmekSettingsRequest: {
    encode(message: UpdateCmekSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCmekSettingsRequest;
    fromJSON(object: any): UpdateCmekSettingsRequest;
    toJSON(message: UpdateCmekSettingsRequest): unknown;
    fromPartial(object: Partial<UpdateCmekSettingsRequest>): UpdateCmekSettingsRequest;
};
export declare const CmekSettings: {
    encode(message: CmekSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CmekSettings;
    fromJSON(object: any): CmekSettings;
    toJSON(message: CmekSettings): unknown;
    fromPartial(object: Partial<CmekSettings>): CmekSettings;
};
export declare const GetSettingsRequest: {
    encode(message: GetSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSettingsRequest;
    fromJSON(object: any): GetSettingsRequest;
    toJSON(message: GetSettingsRequest): unknown;
    fromPartial(object: Partial<GetSettingsRequest>): GetSettingsRequest;
};
export declare const UpdateSettingsRequest: {
    encode(message: UpdateSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSettingsRequest;
    fromJSON(object: any): UpdateSettingsRequest;
    toJSON(message: UpdateSettingsRequest): unknown;
    fromPartial(object: Partial<UpdateSettingsRequest>): UpdateSettingsRequest;
};
export declare const Settings: {
    encode(message: Settings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Settings;
    fromJSON(object: any): Settings;
    toJSON(message: Settings): unknown;
    fromPartial(object: Partial<Settings>): Settings;
};
export declare const CopyLogEntriesRequest: {
    encode(message: CopyLogEntriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CopyLogEntriesRequest;
    fromJSON(object: any): CopyLogEntriesRequest;
    toJSON(message: CopyLogEntriesRequest): unknown;
    fromPartial(object: Partial<CopyLogEntriesRequest>): CopyLogEntriesRequest;
};
export declare const CopyLogEntriesMetadata: {
    encode(message: CopyLogEntriesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CopyLogEntriesMetadata;
    fromJSON(object: any): CopyLogEntriesMetadata;
    toJSON(message: CopyLogEntriesMetadata): unknown;
    fromPartial(object: Partial<CopyLogEntriesMetadata>): CopyLogEntriesMetadata;
};
export declare const CopyLogEntriesResponse: {
    encode(message: CopyLogEntriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CopyLogEntriesResponse;
    fromJSON(object: any): CopyLogEntriesResponse;
    toJSON(message: CopyLogEntriesResponse): unknown;
    fromPartial(object: Partial<CopyLogEntriesResponse>): CopyLogEntriesResponse;
};
