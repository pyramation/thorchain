import * as _97 from "./api/auth";
import * as _98 from "./api/backend";
import * as _99 from "./api/billing";
import * as _101 from "./api/config_change";
import * as _102 from "./api/consumer";
import * as _103 from "./api/context";
import * as _104 from "./api/control";
import * as _105 from "./api/distribution";
import * as _106 from "./api/documentation";
import * as _107 from "./api/endpoint";
import * as _108 from "./api/error_reason";
import * as _109 from "./api/field_behavior";
import * as _110 from "./api/http";
import * as _111 from "./api/httpbody";
import * as _112 from "./api/label";
import * as _113 from "./api/launch_stage";
import * as _114 from "./api/log";
import * as _115 from "./api/logging";
import * as _116 from "./api/metric";
import * as _117 from "./api/monitored_resource";
import * as _118 from "./api/monitoring";
import * as _119 from "./api/quota";
import * as _120 from "./api/resource";
import * as _121 from "./api/routing";
import * as _122 from "./api/service";
import * as _123 from "./api/source_info";
import * as _124 from "./api/system_parameter";
import * as _125 from "./api/usage";
import * as _126 from "./api/visibility";
import * as _127 from "./logging/type/http_request";
import * as _128 from "./logging/type/log_severity";
import * as _129 from "./logging/v2/log_entry";
import * as _130 from "./logging/v2/logging_config";
import * as _131 from "./logging/v2/logging_metrics";
import * as _132 from "./logging/v2/logging";
import * as _133 from "./longrunning/operations";
import * as _134 from "./protobuf/any";
import * as _135 from "./protobuf/api";
import * as _136 from "./protobuf/descriptor";
import * as _137 from "./protobuf/duration";
import * as _138 from "./protobuf/empty";
import * as _139 from "./protobuf/field_mask";
import * as _140 from "./protobuf/source_context";
import * as _141 from "./protobuf/struct";
import * as _142 from "./protobuf/timestamp";
import * as _143 from "./protobuf/type";
import * as _144 from "./protobuf/wrappers";
import * as _145 from "./rpc/code";
import * as _146 from "./rpc/error_details";
import * as _147 from "./rpc/status";
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _126.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Visibility;
            fromJSON(object: any): _126.Visibility;
            toJSON(message: _126.Visibility): unknown;
            fromPartial(object: Partial<_126.Visibility>): _126.Visibility;
        };
        VisibilityRule: {
            encode(message: _126.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.VisibilityRule;
            fromJSON(object: any): _126.VisibilityRule;
            toJSON(message: _126.VisibilityRule): unknown;
            fromPartial(object: Partial<_126.VisibilityRule>): _126.VisibilityRule;
        };
        Usage: {
            encode(message: _125.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Usage;
            fromJSON(object: any): _125.Usage;
            toJSON(message: _125.Usage): unknown;
            fromPartial(object: Partial<_125.Usage>): _125.Usage;
        };
        UsageRule: {
            encode(message: _125.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.UsageRule;
            fromJSON(object: any): _125.UsageRule;
            toJSON(message: _125.UsageRule): unknown;
            fromPartial(object: Partial<_125.UsageRule>): _125.UsageRule;
        };
        SystemParameters: {
            encode(message: _124.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SystemParameters;
            fromJSON(object: any): _124.SystemParameters;
            toJSON(message: _124.SystemParameters): unknown;
            fromPartial(object: Partial<_124.SystemParameters>): _124.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _124.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SystemParameterRule;
            fromJSON(object: any): _124.SystemParameterRule;
            toJSON(message: _124.SystemParameterRule): unknown;
            fromPartial(object: Partial<_124.SystemParameterRule>): _124.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _124.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SystemParameter;
            fromJSON(object: any): _124.SystemParameter;
            toJSON(message: _124.SystemParameter): unknown;
            fromPartial(object: Partial<_124.SystemParameter>): _124.SystemParameter;
        };
        SourceInfo: {
            encode(message: _123.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SourceInfo;
            fromJSON(object: any): _123.SourceInfo;
            toJSON(message: _123.SourceInfo): unknown;
            fromPartial(object: Partial<_123.SourceInfo>): _123.SourceInfo;
        };
        Service: {
            encode(message: _122.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Service;
            fromJSON(object: any): _122.Service;
            toJSON(message: _122.Service): unknown;
            fromPartial(object: Partial<_122.Service>): _122.Service;
        };
        RoutingRule: {
            encode(message: _121.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.RoutingRule;
            fromJSON(object: any): _121.RoutingRule;
            toJSON(message: _121.RoutingRule): unknown;
            fromPartial(object: Partial<_121.RoutingRule>): _121.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _121.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.RoutingParameter;
            fromJSON(object: any): _121.RoutingParameter;
            toJSON(message: _121.RoutingParameter): unknown;
            fromPartial(object: Partial<_121.RoutingParameter>): _121.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _120.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _120.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _120.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _120.ResourceDescriptor_Style): string;
        ResourceDescriptor_History: typeof _120.ResourceDescriptor_History;
        ResourceDescriptor_HistorySDKType: typeof _120.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _120.ResourceDescriptor_Style;
        ResourceDescriptor_StyleSDKType: typeof _120.ResourceDescriptor_Style;
        ResourceDescriptor: {
            encode(message: _120.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResourceDescriptor;
            fromJSON(object: any): _120.ResourceDescriptor;
            toJSON(message: _120.ResourceDescriptor): unknown;
            fromPartial(object: Partial<_120.ResourceDescriptor>): _120.ResourceDescriptor;
        };
        ResourceReference: {
            encode(message: _120.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResourceReference;
            fromJSON(object: any): _120.ResourceReference;
            toJSON(message: _120.ResourceReference): unknown;
            fromPartial(object: Partial<_120.ResourceReference>): _120.ResourceReference;
        };
        Quota: {
            encode(message: _119.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Quota;
            fromJSON(object: any): _119.Quota;
            toJSON(message: _119.Quota): unknown;
            fromPartial(object: Partial<_119.Quota>): _119.Quota;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _119.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _119.MetricRule_MetricCostsEntry;
            toJSON(message: _119.MetricRule_MetricCostsEntry): unknown;
            fromPartial(object: Partial<_119.MetricRule_MetricCostsEntry>): _119.MetricRule_MetricCostsEntry;
        };
        MetricRule: {
            encode(message: _119.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MetricRule;
            fromJSON(object: any): _119.MetricRule;
            toJSON(message: _119.MetricRule): unknown;
            fromPartial(object: Partial<_119.MetricRule>): _119.MetricRule;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _119.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _119.QuotaLimit_ValuesEntry;
            toJSON(message: _119.QuotaLimit_ValuesEntry): unknown;
            fromPartial(object: Partial<_119.QuotaLimit_ValuesEntry>): _119.QuotaLimit_ValuesEntry;
        };
        QuotaLimit: {
            encode(message: _119.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QuotaLimit;
            fromJSON(object: any): _119.QuotaLimit;
            toJSON(message: _119.QuotaLimit): unknown;
            fromPartial(object: Partial<_119.QuotaLimit>): _119.QuotaLimit;
        };
        Monitoring: {
            encode(message: _118.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Monitoring;
            fromJSON(object: any): _118.Monitoring;
            toJSON(message: _118.Monitoring): unknown;
            fromPartial(object: Partial<_118.Monitoring>): _118.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _118.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Monitoring_MonitoringDestination;
            fromJSON(object: any): _118.Monitoring_MonitoringDestination;
            toJSON(message: _118.Monitoring_MonitoringDestination): unknown;
            fromPartial(object: Partial<_118.Monitoring_MonitoringDestination>): _118.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _117.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MonitoredResourceDescriptor;
            fromJSON(object: any): _117.MonitoredResourceDescriptor;
            toJSON(message: _117.MonitoredResourceDescriptor): unknown;
            fromPartial(object: Partial<_117.MonitoredResourceDescriptor>): _117.MonitoredResourceDescriptor;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _117.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _117.MonitoredResource_LabelsEntry;
            toJSON(message: _117.MonitoredResource_LabelsEntry): unknown;
            fromPartial(object: Partial<_117.MonitoredResource_LabelsEntry>): _117.MonitoredResource_LabelsEntry;
        };
        MonitoredResource: {
            encode(message: _117.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MonitoredResource;
            fromJSON(object: any): _117.MonitoredResource;
            toJSON(message: _117.MonitoredResource): unknown;
            fromPartial(object: Partial<_117.MonitoredResource>): _117.MonitoredResource;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _117.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _117.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _117.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial(object: Partial<_117.MonitoredResourceMetadata_UserLabelsEntry>): _117.MonitoredResourceMetadata_UserLabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _117.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MonitoredResourceMetadata;
            fromJSON(object: any): _117.MonitoredResourceMetadata;
            toJSON(message: _117.MonitoredResourceMetadata): unknown;
            fromPartial(object: Partial<_117.MonitoredResourceMetadata>): _117.MonitoredResourceMetadata;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _116.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _116.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _116.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _116.MetricDescriptor_ValueType): string;
        MetricDescriptor_MetricKind: typeof _116.MetricDescriptor_MetricKind;
        MetricDescriptor_MetricKindSDKType: typeof _116.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _116.MetricDescriptor_ValueType;
        MetricDescriptor_ValueTypeSDKType: typeof _116.MetricDescriptor_ValueType;
        MetricDescriptor: {
            encode(message: _116.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MetricDescriptor;
            fromJSON(object: any): _116.MetricDescriptor;
            toJSON(message: _116.MetricDescriptor): unknown;
            fromPartial(object: Partial<_116.MetricDescriptor>): _116.MetricDescriptor;
        };
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _116.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _116.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _116.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial(object: Partial<_116.MetricDescriptor_MetricDescriptorMetadata>): _116.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric_LabelsEntry: {
            encode(message: _116.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Metric_LabelsEntry;
            fromJSON(object: any): _116.Metric_LabelsEntry;
            toJSON(message: _116.Metric_LabelsEntry): unknown;
            fromPartial(object: Partial<_116.Metric_LabelsEntry>): _116.Metric_LabelsEntry;
        };
        Metric: {
            encode(message: _116.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Metric;
            fromJSON(object: any): _116.Metric;
            toJSON(message: _116.Metric): unknown;
            fromPartial(object: Partial<_116.Metric>): _116.Metric;
        };
        Logging: {
            encode(message: _115.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Logging;
            fromJSON(object: any): _115.Logging;
            toJSON(message: _115.Logging): unknown;
            fromPartial(object: Partial<_115.Logging>): _115.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _115.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Logging_LoggingDestination;
            fromJSON(object: any): _115.Logging_LoggingDestination;
            toJSON(message: _115.Logging_LoggingDestination): unknown;
            fromPartial(object: Partial<_115.Logging_LoggingDestination>): _115.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _114.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.LogDescriptor;
            fromJSON(object: any): _114.LogDescriptor;
            toJSON(message: _114.LogDescriptor): unknown;
            fromPartial(object: Partial<_114.LogDescriptor>): _114.LogDescriptor;
        };
        launchStageFromJSON(object: any): _113.LaunchStage;
        launchStageToJSON(object: _113.LaunchStage): string;
        LaunchStage: typeof _113.LaunchStage;
        LaunchStageSDKType: typeof _113.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _112.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _112.LabelDescriptor_ValueType): string;
        LabelDescriptor_ValueType: typeof _112.LabelDescriptor_ValueType;
        LabelDescriptor_ValueTypeSDKType: typeof _112.LabelDescriptor_ValueType;
        LabelDescriptor: {
            encode(message: _112.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.LabelDescriptor;
            fromJSON(object: any): _112.LabelDescriptor;
            toJSON(message: _112.LabelDescriptor): unknown;
            fromPartial(object: Partial<_112.LabelDescriptor>): _112.LabelDescriptor;
        };
        HttpBody: {
            encode(message: _111.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.HttpBody;
            fromJSON(object: any): _111.HttpBody;
            toJSON(message: _111.HttpBody): unknown;
            fromPartial(object: Partial<_111.HttpBody>): _111.HttpBody;
        };
        Http: {
            encode(message: _110.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Http;
            fromJSON(object: any): _110.Http;
            toJSON(message: _110.Http): unknown;
            fromPartial(object: Partial<_110.Http>): _110.Http;
        };
        HttpRule: {
            encode(message: _110.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.HttpRule;
            fromJSON(object: any): _110.HttpRule;
            toJSON(message: _110.HttpRule): unknown;
            fromPartial(object: Partial<_110.HttpRule>): _110.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _110.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.CustomHttpPattern;
            fromJSON(object: any): _110.CustomHttpPattern;
            toJSON(message: _110.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_110.CustomHttpPattern>): _110.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _109.FieldBehavior;
        fieldBehaviorToJSON(object: _109.FieldBehavior): string;
        FieldBehavior: typeof _109.FieldBehavior;
        FieldBehaviorSDKType: typeof _109.FieldBehavior;
        errorReasonFromJSON(object: any): _108.ErrorReason;
        errorReasonToJSON(object: _108.ErrorReason): string;
        ErrorReason: typeof _108.ErrorReason;
        ErrorReasonSDKType: typeof _108.ErrorReason;
        Endpoint: {
            encode(message: _107.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Endpoint;
            fromJSON(object: any): _107.Endpoint;
            toJSON(message: _107.Endpoint): unknown;
            fromPartial(object: Partial<_107.Endpoint>): _107.Endpoint;
        };
        Documentation: {
            encode(message: _106.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Documentation;
            fromJSON(object: any): _106.Documentation;
            toJSON(message: _106.Documentation): unknown;
            fromPartial(object: Partial<_106.Documentation>): _106.Documentation;
        };
        DocumentationRule: {
            encode(message: _106.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DocumentationRule;
            fromJSON(object: any): _106.DocumentationRule;
            toJSON(message: _106.DocumentationRule): unknown;
            fromPartial(object: Partial<_106.DocumentationRule>): _106.DocumentationRule;
        };
        Page: {
            encode(message: _106.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Page;
            fromJSON(object: any): _106.Page;
            toJSON(message: _106.Page): unknown;
            fromPartial(object: Partial<_106.Page>): _106.Page;
        };
        Distribution: {
            encode(message: _105.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Distribution;
            fromJSON(object: any): _105.Distribution;
            toJSON(message: _105.Distribution): unknown;
            fromPartial(object: Partial<_105.Distribution>): _105.Distribution;
        };
        Distribution_Range: {
            encode(message: _105.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Distribution_Range;
            fromJSON(object: any): _105.Distribution_Range;
            toJSON(message: _105.Distribution_Range): unknown;
            fromPartial(object: Partial<_105.Distribution_Range>): _105.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _105.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Distribution_BucketOptions;
            fromJSON(object: any): _105.Distribution_BucketOptions;
            toJSON(message: _105.Distribution_BucketOptions): unknown;
            fromPartial(object: Partial<_105.Distribution_BucketOptions>): _105.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _105.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _105.Distribution_BucketOptions_Linear;
            toJSON(message: _105.Distribution_BucketOptions_Linear): unknown;
            fromPartial(object: Partial<_105.Distribution_BucketOptions_Linear>): _105.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _105.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _105.Distribution_BucketOptions_Exponential;
            toJSON(message: _105.Distribution_BucketOptions_Exponential): unknown;
            fromPartial(object: Partial<_105.Distribution_BucketOptions_Exponential>): _105.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _105.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _105.Distribution_BucketOptions_Explicit;
            toJSON(message: _105.Distribution_BucketOptions_Explicit): unknown;
            fromPartial(object: Partial<_105.Distribution_BucketOptions_Explicit>): _105.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _105.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Distribution_Exemplar;
            fromJSON(object: any): _105.Distribution_Exemplar;
            toJSON(message: _105.Distribution_Exemplar): unknown;
            fromPartial(object: Partial<_105.Distribution_Exemplar>): _105.Distribution_Exemplar;
        };
        Control: {
            encode(message: _104.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Control;
            fromJSON(object: any): _104.Control;
            toJSON(message: _104.Control): unknown;
            fromPartial(object: Partial<_104.Control>): _104.Control;
        };
        Context: {
            encode(message: _103.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Context;
            fromJSON(object: any): _103.Context;
            toJSON(message: _103.Context): unknown;
            fromPartial(object: Partial<_103.Context>): _103.Context;
        };
        ContextRule: {
            encode(message: _103.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ContextRule;
            fromJSON(object: any): _103.ContextRule;
            toJSON(message: _103.ContextRule): unknown;
            fromPartial(object: Partial<_103.ContextRule>): _103.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _102.Property_PropertyType;
        property_PropertyTypeToJSON(object: _102.Property_PropertyType): string;
        Property_PropertyType: typeof _102.Property_PropertyType;
        Property_PropertyTypeSDKType: typeof _102.Property_PropertyType;
        ProjectProperties: {
            encode(message: _102.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ProjectProperties;
            fromJSON(object: any): _102.ProjectProperties;
            toJSON(message: _102.ProjectProperties): unknown;
            fromPartial(object: Partial<_102.ProjectProperties>): _102.ProjectProperties;
        };
        Property: {
            encode(message: _102.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Property;
            fromJSON(object: any): _102.Property;
            toJSON(message: _102.Property): unknown;
            fromPartial(object: Partial<_102.Property>): _102.Property;
        };
        changeTypeFromJSON(object: any): _101.ChangeType;
        changeTypeToJSON(object: _101.ChangeType): string;
        ChangeType: typeof _101.ChangeType;
        ChangeTypeSDKType: typeof _101.ChangeType;
        ConfigChange: {
            encode(message: _101.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ConfigChange;
            fromJSON(object: any): _101.ConfigChange;
            toJSON(message: _101.ConfigChange): unknown;
            fromPartial(object: Partial<_101.ConfigChange>): _101.ConfigChange;
        };
        Advice: {
            encode(message: _101.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Advice;
            fromJSON(object: any): _101.Advice;
            toJSON(message: _101.Advice): unknown;
            fromPartial(object: Partial<_101.Advice>): _101.Advice;
        };
        Billing: {
            encode(message: _99.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Billing;
            fromJSON(object: any): _99.Billing;
            toJSON(message: _99.Billing): unknown;
            fromPartial(object: Partial<_99.Billing>): _99.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _99.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Billing_BillingDestination;
            fromJSON(object: any): _99.Billing_BillingDestination;
            toJSON(message: _99.Billing_BillingDestination): unknown;
            fromPartial(object: Partial<_99.Billing_BillingDestination>): _99.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _98.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _98.BackendRule_PathTranslation): string;
        BackendRule_PathTranslation: typeof _98.BackendRule_PathTranslation;
        BackendRule_PathTranslationSDKType: typeof _98.BackendRule_PathTranslation;
        Backend: {
            encode(message: _98.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Backend;
            fromJSON(object: any): _98.Backend;
            toJSON(message: _98.Backend): unknown;
            fromPartial(object: Partial<_98.Backend>): _98.Backend;
        };
        BackendRule: {
            encode(message: _98.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.BackendRule;
            fromJSON(object: any): _98.BackendRule;
            toJSON(message: _98.BackendRule): unknown;
            fromPartial(object: Partial<_98.BackendRule>): _98.BackendRule;
        };
        Authentication: {
            encode(message: _97.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Authentication;
            fromJSON(object: any): _97.Authentication;
            toJSON(message: _97.Authentication): unknown;
            fromPartial(object: Partial<_97.Authentication>): _97.Authentication;
        };
        AuthenticationRule: {
            encode(message: _97.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AuthenticationRule;
            fromJSON(object: any): _97.AuthenticationRule;
            toJSON(message: _97.AuthenticationRule): unknown;
            fromPartial(object: Partial<_97.AuthenticationRule>): _97.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _97.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.JwtLocation;
            fromJSON(object: any): _97.JwtLocation;
            toJSON(message: _97.JwtLocation): unknown;
            fromPartial(object: Partial<_97.JwtLocation>): _97.JwtLocation;
        };
        AuthProvider: {
            encode(message: _97.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AuthProvider;
            fromJSON(object: any): _97.AuthProvider;
            toJSON(message: _97.AuthProvider): unknown;
            fromPartial(object: Partial<_97.AuthProvider>): _97.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _97.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.OAuthRequirements;
            fromJSON(object: any): _97.OAuthRequirements;
            toJSON(message: _97.OAuthRequirements): unknown;
            fromPartial(object: Partial<_97.OAuthRequirements>): _97.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _97.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AuthRequirement;
            fromJSON(object: any): _97.AuthRequirement;
            toJSON(message: _97.AuthRequirement): unknown;
            fromPartial(object: Partial<_97.AuthRequirement>): _97.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _128.LogSeverity;
            logSeverityToJSON(object: _128.LogSeverity): string;
            LogSeverity: typeof _128.LogSeverity;
            LogSeveritySDKType: typeof _128.LogSeverity;
            HttpRequest: {
                encode(message: _127.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.HttpRequest;
                fromJSON(object: any): _127.HttpRequest;
                toJSON(message: _127.HttpRequest): unknown;
                fromPartial(object: Partial<_127.HttpRequest>): _127.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _132.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _132.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _132.TailLogEntriesResponse_SuppressionInfo_Reason;
            TailLogEntriesResponse_SuppressionInfo_ReasonSDKType: typeof _132.TailLogEntriesResponse_SuppressionInfo_Reason;
            DeleteLogRequest: {
                encode(message: _132.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.DeleteLogRequest;
                fromJSON(object: any): _132.DeleteLogRequest;
                toJSON(message: _132.DeleteLogRequest): unknown;
                fromPartial(object: Partial<_132.DeleteLogRequest>): _132.DeleteLogRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _132.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _132.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _132.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial(object: Partial<_132.WriteLogEntriesRequest_LabelsEntry>): _132.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesRequest: {
                encode(message: _132.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.WriteLogEntriesRequest;
                fromJSON(object: any): _132.WriteLogEntriesRequest;
                toJSON(message: _132.WriteLogEntriesRequest): unknown;
                fromPartial(object: Partial<_132.WriteLogEntriesRequest>): _132.WriteLogEntriesRequest;
            };
            WriteLogEntriesResponse: {
                encode(_: _132.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.WriteLogEntriesResponse;
                fromJSON(_: any): _132.WriteLogEntriesResponse;
                toJSON(_: _132.WriteLogEntriesResponse): unknown;
                fromPartial(_: Partial<_132.WriteLogEntriesResponse>): _132.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _132.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _132.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _132.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial(object: Partial<_132.WriteLogEntriesPartialErrors_LogEntryErrorsEntry>): _132.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _132.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _132.WriteLogEntriesPartialErrors;
                toJSON(message: _132.WriteLogEntriesPartialErrors): unknown;
                fromPartial(object: Partial<_132.WriteLogEntriesPartialErrors>): _132.WriteLogEntriesPartialErrors;
            };
            ListLogEntriesRequest: {
                encode(message: _132.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ListLogEntriesRequest;
                fromJSON(object: any): _132.ListLogEntriesRequest;
                toJSON(message: _132.ListLogEntriesRequest): unknown;
                fromPartial(object: Partial<_132.ListLogEntriesRequest>): _132.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _132.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ListLogEntriesResponse;
                fromJSON(object: any): _132.ListLogEntriesResponse;
                toJSON(message: _132.ListLogEntriesResponse): unknown;
                fromPartial(object: Partial<_132.ListLogEntriesResponse>): _132.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _132.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _132.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _132.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial(object: Partial<_132.ListMonitoredResourceDescriptorsRequest>): _132.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _132.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _132.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _132.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial(object: Partial<_132.ListMonitoredResourceDescriptorsResponse>): _132.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _132.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ListLogsRequest;
                fromJSON(object: any): _132.ListLogsRequest;
                toJSON(message: _132.ListLogsRequest): unknown;
                fromPartial(object: Partial<_132.ListLogsRequest>): _132.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _132.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ListLogsResponse;
                fromJSON(object: any): _132.ListLogsResponse;
                toJSON(message: _132.ListLogsResponse): unknown;
                fromPartial(object: Partial<_132.ListLogsResponse>): _132.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _132.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TailLogEntriesRequest;
                fromJSON(object: any): _132.TailLogEntriesRequest;
                toJSON(message: _132.TailLogEntriesRequest): unknown;
                fromPartial(object: Partial<_132.TailLogEntriesRequest>): _132.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _132.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TailLogEntriesResponse;
                fromJSON(object: any): _132.TailLogEntriesResponse;
                toJSON(message: _132.TailLogEntriesResponse): unknown;
                fromPartial(object: Partial<_132.TailLogEntriesResponse>): _132.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _132.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _132.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _132.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial(object: Partial<_132.TailLogEntriesResponse_SuppressionInfo>): _132.TailLogEntriesResponse_SuppressionInfo;
            };
            logMetric_ApiVersionFromJSON(object: any): _131.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _131.LogMetric_ApiVersion): string;
            LogMetric_ApiVersion: typeof _131.LogMetric_ApiVersion;
            LogMetric_ApiVersionSDKType: typeof _131.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _131.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _131.LogMetric_LabelExtractorsEntry;
                toJSON(message: _131.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial(object: Partial<_131.LogMetric_LabelExtractorsEntry>): _131.LogMetric_LabelExtractorsEntry;
            };
            LogMetric: {
                encode(message: _131.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.LogMetric;
                fromJSON(object: any): _131.LogMetric;
                toJSON(message: _131.LogMetric): unknown;
                fromPartial(object: Partial<_131.LogMetric>): _131.LogMetric;
            };
            ListLogMetricsRequest: {
                encode(message: _131.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ListLogMetricsRequest;
                fromJSON(object: any): _131.ListLogMetricsRequest;
                toJSON(message: _131.ListLogMetricsRequest): unknown;
                fromPartial(object: Partial<_131.ListLogMetricsRequest>): _131.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _131.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ListLogMetricsResponse;
                fromJSON(object: any): _131.ListLogMetricsResponse;
                toJSON(message: _131.ListLogMetricsResponse): unknown;
                fromPartial(object: Partial<_131.ListLogMetricsResponse>): _131.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _131.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GetLogMetricRequest;
                fromJSON(object: any): _131.GetLogMetricRequest;
                toJSON(message: _131.GetLogMetricRequest): unknown;
                fromPartial(object: Partial<_131.GetLogMetricRequest>): _131.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _131.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.CreateLogMetricRequest;
                fromJSON(object: any): _131.CreateLogMetricRequest;
                toJSON(message: _131.CreateLogMetricRequest): unknown;
                fromPartial(object: Partial<_131.CreateLogMetricRequest>): _131.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _131.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.UpdateLogMetricRequest;
                fromJSON(object: any): _131.UpdateLogMetricRequest;
                toJSON(message: _131.UpdateLogMetricRequest): unknown;
                fromPartial(object: Partial<_131.UpdateLogMetricRequest>): _131.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _131.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.DeleteLogMetricRequest;
                fromJSON(object: any): _131.DeleteLogMetricRequest;
                toJSON(message: _131.DeleteLogMetricRequest): unknown;
                fromPartial(object: Partial<_131.DeleteLogMetricRequest>): _131.DeleteLogMetricRequest;
            };
            logSink_VersionFormatFromJSON(object: any): _130.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _130.LogSink_VersionFormat): string;
            lifecycleStateFromJSON(object: any): _130.LifecycleState;
            lifecycleStateToJSON(object: _130.LifecycleState): string;
            operationStateFromJSON(object: any): _130.OperationState;
            operationStateToJSON(object: _130.OperationState): string;
            LogSink_VersionFormat: typeof _130.LogSink_VersionFormat;
            LogSink_VersionFormatSDKType: typeof _130.LogSink_VersionFormat;
            LifecycleState: typeof _130.LifecycleState;
            LifecycleStateSDKType: typeof _130.LifecycleState;
            OperationState: typeof _130.OperationState;
            OperationStateSDKType: typeof _130.OperationState;
            LogBucket: {
                encode(message: _130.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.LogBucket;
                fromJSON(object: any): _130.LogBucket;
                toJSON(message: _130.LogBucket): unknown;
                fromPartial(object: Partial<_130.LogBucket>): _130.LogBucket;
            };
            LogView: {
                encode(message: _130.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.LogView;
                fromJSON(object: any): _130.LogView;
                toJSON(message: _130.LogView): unknown;
                fromPartial(object: Partial<_130.LogView>): _130.LogView;
            };
            LogSink: {
                encode(message: _130.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.LogSink;
                fromJSON(object: any): _130.LogSink;
                toJSON(message: _130.LogSink): unknown;
                fromPartial(object: Partial<_130.LogSink>): _130.LogSink;
            };
            BigQueryOptions: {
                encode(message: _130.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.BigQueryOptions;
                fromJSON(object: any): _130.BigQueryOptions;
                toJSON(message: _130.BigQueryOptions): unknown;
                fromPartial(object: Partial<_130.BigQueryOptions>): _130.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _130.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ListBucketsRequest;
                fromJSON(object: any): _130.ListBucketsRequest;
                toJSON(message: _130.ListBucketsRequest): unknown;
                fromPartial(object: Partial<_130.ListBucketsRequest>): _130.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _130.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ListBucketsResponse;
                fromJSON(object: any): _130.ListBucketsResponse;
                toJSON(message: _130.ListBucketsResponse): unknown;
                fromPartial(object: Partial<_130.ListBucketsResponse>): _130.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _130.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CreateBucketRequest;
                fromJSON(object: any): _130.CreateBucketRequest;
                toJSON(message: _130.CreateBucketRequest): unknown;
                fromPartial(object: Partial<_130.CreateBucketRequest>): _130.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _130.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdateBucketRequest;
                fromJSON(object: any): _130.UpdateBucketRequest;
                toJSON(message: _130.UpdateBucketRequest): unknown;
                fromPartial(object: Partial<_130.UpdateBucketRequest>): _130.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _130.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GetBucketRequest;
                fromJSON(object: any): _130.GetBucketRequest;
                toJSON(message: _130.GetBucketRequest): unknown;
                fromPartial(object: Partial<_130.GetBucketRequest>): _130.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _130.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DeleteBucketRequest;
                fromJSON(object: any): _130.DeleteBucketRequest;
                toJSON(message: _130.DeleteBucketRequest): unknown;
                fromPartial(object: Partial<_130.DeleteBucketRequest>): _130.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _130.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UndeleteBucketRequest;
                fromJSON(object: any): _130.UndeleteBucketRequest;
                toJSON(message: _130.UndeleteBucketRequest): unknown;
                fromPartial(object: Partial<_130.UndeleteBucketRequest>): _130.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _130.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ListViewsRequest;
                fromJSON(object: any): _130.ListViewsRequest;
                toJSON(message: _130.ListViewsRequest): unknown;
                fromPartial(object: Partial<_130.ListViewsRequest>): _130.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _130.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ListViewsResponse;
                fromJSON(object: any): _130.ListViewsResponse;
                toJSON(message: _130.ListViewsResponse): unknown;
                fromPartial(object: Partial<_130.ListViewsResponse>): _130.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _130.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CreateViewRequest;
                fromJSON(object: any): _130.CreateViewRequest;
                toJSON(message: _130.CreateViewRequest): unknown;
                fromPartial(object: Partial<_130.CreateViewRequest>): _130.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _130.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdateViewRequest;
                fromJSON(object: any): _130.UpdateViewRequest;
                toJSON(message: _130.UpdateViewRequest): unknown;
                fromPartial(object: Partial<_130.UpdateViewRequest>): _130.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _130.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GetViewRequest;
                fromJSON(object: any): _130.GetViewRequest;
                toJSON(message: _130.GetViewRequest): unknown;
                fromPartial(object: Partial<_130.GetViewRequest>): _130.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _130.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DeleteViewRequest;
                fromJSON(object: any): _130.DeleteViewRequest;
                toJSON(message: _130.DeleteViewRequest): unknown;
                fromPartial(object: Partial<_130.DeleteViewRequest>): _130.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _130.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ListSinksRequest;
                fromJSON(object: any): _130.ListSinksRequest;
                toJSON(message: _130.ListSinksRequest): unknown;
                fromPartial(object: Partial<_130.ListSinksRequest>): _130.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _130.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ListSinksResponse;
                fromJSON(object: any): _130.ListSinksResponse;
                toJSON(message: _130.ListSinksResponse): unknown;
                fromPartial(object: Partial<_130.ListSinksResponse>): _130.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _130.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GetSinkRequest;
                fromJSON(object: any): _130.GetSinkRequest;
                toJSON(message: _130.GetSinkRequest): unknown;
                fromPartial(object: Partial<_130.GetSinkRequest>): _130.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _130.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CreateSinkRequest;
                fromJSON(object: any): _130.CreateSinkRequest;
                toJSON(message: _130.CreateSinkRequest): unknown;
                fromPartial(object: Partial<_130.CreateSinkRequest>): _130.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _130.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdateSinkRequest;
                fromJSON(object: any): _130.UpdateSinkRequest;
                toJSON(message: _130.UpdateSinkRequest): unknown;
                fromPartial(object: Partial<_130.UpdateSinkRequest>): _130.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _130.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DeleteSinkRequest;
                fromJSON(object: any): _130.DeleteSinkRequest;
                toJSON(message: _130.DeleteSinkRequest): unknown;
                fromPartial(object: Partial<_130.DeleteSinkRequest>): _130.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _130.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.LogExclusion;
                fromJSON(object: any): _130.LogExclusion;
                toJSON(message: _130.LogExclusion): unknown;
                fromPartial(object: Partial<_130.LogExclusion>): _130.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _130.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ListExclusionsRequest;
                fromJSON(object: any): _130.ListExclusionsRequest;
                toJSON(message: _130.ListExclusionsRequest): unknown;
                fromPartial(object: Partial<_130.ListExclusionsRequest>): _130.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _130.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ListExclusionsResponse;
                fromJSON(object: any): _130.ListExclusionsResponse;
                toJSON(message: _130.ListExclusionsResponse): unknown;
                fromPartial(object: Partial<_130.ListExclusionsResponse>): _130.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _130.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GetExclusionRequest;
                fromJSON(object: any): _130.GetExclusionRequest;
                toJSON(message: _130.GetExclusionRequest): unknown;
                fromPartial(object: Partial<_130.GetExclusionRequest>): _130.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _130.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CreateExclusionRequest;
                fromJSON(object: any): _130.CreateExclusionRequest;
                toJSON(message: _130.CreateExclusionRequest): unknown;
                fromPartial(object: Partial<_130.CreateExclusionRequest>): _130.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _130.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdateExclusionRequest;
                fromJSON(object: any): _130.UpdateExclusionRequest;
                toJSON(message: _130.UpdateExclusionRequest): unknown;
                fromPartial(object: Partial<_130.UpdateExclusionRequest>): _130.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _130.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DeleteExclusionRequest;
                fromJSON(object: any): _130.DeleteExclusionRequest;
                toJSON(message: _130.DeleteExclusionRequest): unknown;
                fromPartial(object: Partial<_130.DeleteExclusionRequest>): _130.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _130.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GetCmekSettingsRequest;
                fromJSON(object: any): _130.GetCmekSettingsRequest;
                toJSON(message: _130.GetCmekSettingsRequest): unknown;
                fromPartial(object: Partial<_130.GetCmekSettingsRequest>): _130.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _130.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdateCmekSettingsRequest;
                fromJSON(object: any): _130.UpdateCmekSettingsRequest;
                toJSON(message: _130.UpdateCmekSettingsRequest): unknown;
                fromPartial(object: Partial<_130.UpdateCmekSettingsRequest>): _130.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _130.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CmekSettings;
                fromJSON(object: any): _130.CmekSettings;
                toJSON(message: _130.CmekSettings): unknown;
                fromPartial(object: Partial<_130.CmekSettings>): _130.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _130.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GetSettingsRequest;
                fromJSON(object: any): _130.GetSettingsRequest;
                toJSON(message: _130.GetSettingsRequest): unknown;
                fromPartial(object: Partial<_130.GetSettingsRequest>): _130.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _130.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.UpdateSettingsRequest;
                fromJSON(object: any): _130.UpdateSettingsRequest;
                toJSON(message: _130.UpdateSettingsRequest): unknown;
                fromPartial(object: Partial<_130.UpdateSettingsRequest>): _130.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _130.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Settings;
                fromJSON(object: any): _130.Settings;
                toJSON(message: _130.Settings): unknown;
                fromPartial(object: Partial<_130.Settings>): _130.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _130.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CopyLogEntriesRequest;
                fromJSON(object: any): _130.CopyLogEntriesRequest;
                toJSON(message: _130.CopyLogEntriesRequest): unknown;
                fromPartial(object: Partial<_130.CopyLogEntriesRequest>): _130.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _130.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CopyLogEntriesMetadata;
                fromJSON(object: any): _130.CopyLogEntriesMetadata;
                toJSON(message: _130.CopyLogEntriesMetadata): unknown;
                fromPartial(object: Partial<_130.CopyLogEntriesMetadata>): _130.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _130.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CopyLogEntriesResponse;
                fromJSON(object: any): _130.CopyLogEntriesResponse;
                toJSON(message: _130.CopyLogEntriesResponse): unknown;
                fromPartial(object: Partial<_130.CopyLogEntriesResponse>): _130.CopyLogEntriesResponse;
            };
            LogEntry_LabelsEntry: {
                encode(message: _129.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.LogEntry_LabelsEntry;
                fromJSON(object: any): _129.LogEntry_LabelsEntry;
                toJSON(message: _129.LogEntry_LabelsEntry): unknown;
                fromPartial(object: Partial<_129.LogEntry_LabelsEntry>): _129.LogEntry_LabelsEntry;
            };
            LogEntry: {
                encode(message: _129.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.LogEntry;
                fromJSON(object: any): _129.LogEntry;
                toJSON(message: _129.LogEntry): unknown;
                fromPartial(object: Partial<_129.LogEntry>): _129.LogEntry;
            };
            LogEntryOperation: {
                encode(message: _129.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.LogEntryOperation;
                fromJSON(object: any): _129.LogEntryOperation;
                toJSON(message: _129.LogEntryOperation): unknown;
                fromPartial(object: Partial<_129.LogEntryOperation>): _129.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _129.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.LogEntrySourceLocation;
                fromJSON(object: any): _129.LogEntrySourceLocation;
                toJSON(message: _129.LogEntrySourceLocation): unknown;
                fromPartial(object: Partial<_129.LogEntrySourceLocation>): _129.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _129.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.LogSplit;
                fromJSON(object: any): _129.LogSplit;
                toJSON(message: _129.LogSplit): unknown;
                fromPartial(object: Partial<_129.LogSplit>): _129.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _133.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Operation;
            fromJSON(object: any): _133.Operation;
            toJSON(message: _133.Operation): unknown;
            fromPartial(object: Partial<_133.Operation>): _133.Operation;
        };
        GetOperationRequest: {
            encode(message: _133.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GetOperationRequest;
            fromJSON(object: any): _133.GetOperationRequest;
            toJSON(message: _133.GetOperationRequest): unknown;
            fromPartial(object: Partial<_133.GetOperationRequest>): _133.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _133.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ListOperationsRequest;
            fromJSON(object: any): _133.ListOperationsRequest;
            toJSON(message: _133.ListOperationsRequest): unknown;
            fromPartial(object: Partial<_133.ListOperationsRequest>): _133.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _133.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ListOperationsResponse;
            fromJSON(object: any): _133.ListOperationsResponse;
            toJSON(message: _133.ListOperationsResponse): unknown;
            fromPartial(object: Partial<_133.ListOperationsResponse>): _133.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _133.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.CancelOperationRequest;
            fromJSON(object: any): _133.CancelOperationRequest;
            toJSON(message: _133.CancelOperationRequest): unknown;
            fromPartial(object: Partial<_133.CancelOperationRequest>): _133.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _133.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.DeleteOperationRequest;
            fromJSON(object: any): _133.DeleteOperationRequest;
            toJSON(message: _133.DeleteOperationRequest): unknown;
            fromPartial(object: Partial<_133.DeleteOperationRequest>): _133.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _133.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.WaitOperationRequest;
            fromJSON(object: any): _133.WaitOperationRequest;
            toJSON(message: _133.WaitOperationRequest): unknown;
            fromPartial(object: Partial<_133.WaitOperationRequest>): _133.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _133.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.OperationInfo;
            fromJSON(object: any): _133.OperationInfo;
            toJSON(message: _133.OperationInfo): unknown;
            fromPartial(object: Partial<_133.OperationInfo>): _133.OperationInfo;
        };
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _144.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.DoubleValue;
            fromJSON(object: any): _144.DoubleValue;
            toJSON(message: _144.DoubleValue): unknown;
            fromPartial(object: Partial<_144.DoubleValue>): _144.DoubleValue;
        };
        FloatValue: {
            encode(message: _144.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.FloatValue;
            fromJSON(object: any): _144.FloatValue;
            toJSON(message: _144.FloatValue): unknown;
            fromPartial(object: Partial<_144.FloatValue>): _144.FloatValue;
        };
        Int64Value: {
            encode(message: _144.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Int64Value;
            fromJSON(object: any): _144.Int64Value;
            toJSON(message: _144.Int64Value): unknown;
            fromPartial(object: Partial<_144.Int64Value>): _144.Int64Value;
        };
        UInt64Value: {
            encode(message: _144.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UInt64Value;
            fromJSON(object: any): _144.UInt64Value;
            toJSON(message: _144.UInt64Value): unknown;
            fromPartial(object: Partial<_144.UInt64Value>): _144.UInt64Value;
        };
        Int32Value: {
            encode(message: _144.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Int32Value;
            fromJSON(object: any): _144.Int32Value;
            toJSON(message: _144.Int32Value): unknown;
            fromPartial(object: Partial<_144.Int32Value>): _144.Int32Value;
        };
        UInt32Value: {
            encode(message: _144.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UInt32Value;
            fromJSON(object: any): _144.UInt32Value;
            toJSON(message: _144.UInt32Value): unknown;
            fromPartial(object: Partial<_144.UInt32Value>): _144.UInt32Value;
        };
        BoolValue: {
            encode(message: _144.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BoolValue;
            fromJSON(object: any): _144.BoolValue;
            toJSON(message: _144.BoolValue): unknown;
            fromPartial(object: Partial<_144.BoolValue>): _144.BoolValue;
        };
        StringValue: {
            encode(message: _144.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.StringValue;
            fromJSON(object: any): _144.StringValue;
            toJSON(message: _144.StringValue): unknown;
            fromPartial(object: Partial<_144.StringValue>): _144.StringValue;
        };
        BytesValue: {
            encode(message: _144.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BytesValue;
            fromJSON(object: any): _144.BytesValue;
            toJSON(message: _144.BytesValue): unknown;
            fromPartial(object: Partial<_144.BytesValue>): _144.BytesValue;
        };
        field_KindFromJSON(object: any): _143.Field_Kind;
        field_KindToJSON(object: _143.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _143.Field_Cardinality;
        field_CardinalityToJSON(object: _143.Field_Cardinality): string;
        syntaxFromJSON(object: any): _143.Syntax;
        syntaxToJSON(object: _143.Syntax): string;
        Field_Kind: typeof _143.Field_Kind;
        Field_KindSDKType: typeof _143.Field_Kind;
        Field_Cardinality: typeof _143.Field_Cardinality;
        Field_CardinalitySDKType: typeof _143.Field_Cardinality;
        Syntax: typeof _143.Syntax;
        SyntaxSDKType: typeof _143.Syntax;
        Type: {
            encode(message: _143.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Type;
            fromJSON(object: any): _143.Type;
            toJSON(message: _143.Type): unknown;
            fromPartial(object: Partial<_143.Type>): _143.Type;
        };
        Field: {
            encode(message: _143.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Field;
            fromJSON(object: any): _143.Field;
            toJSON(message: _143.Field): unknown;
            fromPartial(object: Partial<_143.Field>): _143.Field;
        };
        Enum: {
            encode(message: _143.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Enum;
            fromJSON(object: any): _143.Enum;
            toJSON(message: _143.Enum): unknown;
            fromPartial(object: Partial<_143.Enum>): _143.Enum;
        };
        EnumValue: {
            encode(message: _143.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.EnumValue;
            fromJSON(object: any): _143.EnumValue;
            toJSON(message: _143.EnumValue): unknown;
            fromPartial(object: Partial<_143.EnumValue>): _143.EnumValue;
        };
        Option: {
            encode(message: _143.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Option;
            fromJSON(object: any): _143.Option;
            toJSON(message: _143.Option): unknown;
            fromPartial(object: Partial<_143.Option>): _143.Option;
        };
        Timestamp: {
            encode(message: _142.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Timestamp;
            fromJSON(object: any): _142.Timestamp;
            toJSON(message: _142.Timestamp): unknown;
            fromPartial(object: Partial<_142.Timestamp>): _142.Timestamp;
        };
        nullValueFromJSON(object: any): _141.NullValue;
        nullValueToJSON(object: _141.NullValue): string;
        NullValue: typeof _141.NullValue;
        NullValueSDKType: typeof _141.NullValue;
        Struct_FieldsEntry: {
            encode(message: _141.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Struct_FieldsEntry;
            fromJSON(object: any): _141.Struct_FieldsEntry;
            toJSON(message: _141.Struct_FieldsEntry): unknown;
            fromPartial(object: Partial<_141.Struct_FieldsEntry>): _141.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _141.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Struct;
            fromJSON(object: any): _141.Struct;
            toJSON(message: _141.Struct): unknown;
            fromPartial(object: Partial<_141.Struct>): _141.Struct;
        };
        Value: {
            encode(message: _141.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Value;
            fromJSON(object: any): _141.Value;
            toJSON(message: _141.Value): unknown;
            fromPartial(object: Partial<_141.Value>): _141.Value;
        };
        ListValue: {
            encode(message: _141.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ListValue;
            fromJSON(object: any): _141.ListValue;
            toJSON(message: _141.ListValue): unknown;
            fromPartial(object: Partial<_141.ListValue>): _141.ListValue;
        };
        SourceContext: {
            encode(message: _140.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SourceContext;
            fromJSON(object: any): _140.SourceContext;
            toJSON(message: _140.SourceContext): unknown;
            fromPartial(object: Partial<_140.SourceContext>): _140.SourceContext;
        };
        FieldMask: {
            encode(message: _139.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.FieldMask;
            fromJSON(object: any): _139.FieldMask;
            toJSON(message: _139.FieldMask): unknown;
            fromPartial(object: Partial<_139.FieldMask>): _139.FieldMask;
        };
        Empty: {
            encode(_: _138.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Empty;
            fromJSON(_: any): _138.Empty;
            toJSON(_: _138.Empty): unknown;
            fromPartial(_: Partial<_138.Empty>): _138.Empty;
        };
        Duration: {
            encode(message: _137.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Duration;
            fromJSON(object: any): _137.Duration;
            toJSON(message: _137.Duration): unknown;
            fromPartial(object: Partial<_137.Duration>): _137.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _136.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _136.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _136.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _136.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _136.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _136.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _136.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _136.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _136.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _136.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _136.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _136.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _136.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _136.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _136.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _136.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _136.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _136.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _136.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _136.FieldOptions_CType;
        FieldOptions_JSType: typeof _136.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _136.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _136.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _136.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _136.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.FileDescriptorSet;
            fromJSON(object: any): _136.FileDescriptorSet;
            toJSON(message: _136.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_136.FileDescriptorSet>): _136.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _136.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.FileDescriptorProto;
            fromJSON(object: any): _136.FileDescriptorProto;
            toJSON(message: _136.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_136.FileDescriptorProto>): _136.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _136.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.DescriptorProto;
            fromJSON(object: any): _136.DescriptorProto;
            toJSON(message: _136.DescriptorProto): unknown;
            fromPartial(object: Partial<_136.DescriptorProto>): _136.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _136.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _136.DescriptorProto_ExtensionRange;
            toJSON(message: _136.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_136.DescriptorProto_ExtensionRange>): _136.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _136.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.DescriptorProto_ReservedRange;
            fromJSON(object: any): _136.DescriptorProto_ReservedRange;
            toJSON(message: _136.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_136.DescriptorProto_ReservedRange>): _136.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _136.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ExtensionRangeOptions;
            fromJSON(object: any): _136.ExtensionRangeOptions;
            toJSON(message: _136.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_136.ExtensionRangeOptions>): _136.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _136.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.FieldDescriptorProto;
            fromJSON(object: any): _136.FieldDescriptorProto;
            toJSON(message: _136.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_136.FieldDescriptorProto>): _136.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _136.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.OneofDescriptorProto;
            fromJSON(object: any): _136.OneofDescriptorProto;
            toJSON(message: _136.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_136.OneofDescriptorProto>): _136.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _136.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EnumDescriptorProto;
            fromJSON(object: any): _136.EnumDescriptorProto;
            toJSON(message: _136.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_136.EnumDescriptorProto>): _136.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _136.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _136.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _136.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_136.EnumDescriptorProto_EnumReservedRange>): _136.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _136.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EnumValueDescriptorProto;
            fromJSON(object: any): _136.EnumValueDescriptorProto;
            toJSON(message: _136.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_136.EnumValueDescriptorProto>): _136.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _136.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ServiceDescriptorProto;
            fromJSON(object: any): _136.ServiceDescriptorProto;
            toJSON(message: _136.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_136.ServiceDescriptorProto>): _136.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _136.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MethodDescriptorProto;
            fromJSON(object: any): _136.MethodDescriptorProto;
            toJSON(message: _136.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_136.MethodDescriptorProto>): _136.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _136.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.FileOptions;
            fromJSON(object: any): _136.FileOptions;
            toJSON(message: _136.FileOptions): unknown;
            fromPartial(object: Partial<_136.FileOptions>): _136.FileOptions;
        };
        MessageOptions: {
            encode(message: _136.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MessageOptions;
            fromJSON(object: any): _136.MessageOptions;
            toJSON(message: _136.MessageOptions): unknown;
            fromPartial(object: Partial<_136.MessageOptions>): _136.MessageOptions;
        };
        FieldOptions: {
            encode(message: _136.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.FieldOptions;
            fromJSON(object: any): _136.FieldOptions;
            toJSON(message: _136.FieldOptions): unknown;
            fromPartial(object: Partial<_136.FieldOptions>): _136.FieldOptions;
        };
        OneofOptions: {
            encode(message: _136.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.OneofOptions;
            fromJSON(object: any): _136.OneofOptions;
            toJSON(message: _136.OneofOptions): unknown;
            fromPartial(object: Partial<_136.OneofOptions>): _136.OneofOptions;
        };
        EnumOptions: {
            encode(message: _136.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EnumOptions;
            fromJSON(object: any): _136.EnumOptions;
            toJSON(message: _136.EnumOptions): unknown;
            fromPartial(object: Partial<_136.EnumOptions>): _136.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _136.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EnumValueOptions;
            fromJSON(object: any): _136.EnumValueOptions;
            toJSON(message: _136.EnumValueOptions): unknown;
            fromPartial(object: Partial<_136.EnumValueOptions>): _136.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _136.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ServiceOptions;
            fromJSON(object: any): _136.ServiceOptions;
            toJSON(message: _136.ServiceOptions): unknown;
            fromPartial(object: Partial<_136.ServiceOptions>): _136.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _136.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.MethodOptions;
            fromJSON(object: any): _136.MethodOptions;
            toJSON(message: _136.MethodOptions): unknown;
            fromPartial(object: Partial<_136.MethodOptions>): _136.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _136.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.UninterpretedOption;
            fromJSON(object: any): _136.UninterpretedOption;
            toJSON(message: _136.UninterpretedOption): unknown;
            fromPartial(object: Partial<_136.UninterpretedOption>): _136.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _136.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.UninterpretedOption_NamePart;
            fromJSON(object: any): _136.UninterpretedOption_NamePart;
            toJSON(message: _136.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_136.UninterpretedOption_NamePart>): _136.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _136.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SourceCodeInfo;
            fromJSON(object: any): _136.SourceCodeInfo;
            toJSON(message: _136.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_136.SourceCodeInfo>): _136.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _136.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.SourceCodeInfo_Location;
            fromJSON(object: any): _136.SourceCodeInfo_Location;
            toJSON(message: _136.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_136.SourceCodeInfo_Location>): _136.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _136.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GeneratedCodeInfo;
            fromJSON(object: any): _136.GeneratedCodeInfo;
            toJSON(message: _136.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_136.GeneratedCodeInfo>): _136.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _136.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _136.GeneratedCodeInfo_Annotation;
            toJSON(message: _136.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_136.GeneratedCodeInfo_Annotation>): _136.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _135.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Api;
            fromJSON(object: any): _135.Api;
            toJSON(message: _135.Api): unknown;
            fromPartial(object: Partial<_135.Api>): _135.Api;
        };
        Method: {
            encode(message: _135.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Method;
            fromJSON(object: any): _135.Method;
            toJSON(message: _135.Method): unknown;
            fromPartial(object: Partial<_135.Method>): _135.Method;
        };
        Mixin: {
            encode(message: _135.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Mixin;
            fromJSON(object: any): _135.Mixin;
            toJSON(message: _135.Mixin): unknown;
            fromPartial(object: Partial<_135.Mixin>): _135.Mixin;
        };
        Any: {
            encode(message: _134.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Any;
            fromJSON(object: any): _134.Any;
            toJSON(message: _134.Any): unknown;
            fromPartial(object: Partial<_134.Any>): _134.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _147.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Status;
            fromJSON(object: any): _147.Status;
            toJSON(message: _147.Status): unknown;
            fromPartial(object: Partial<_147.Status>): _147.Status;
        };
        RetryInfo: {
            encode(message: _146.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.RetryInfo;
            fromJSON(object: any): _146.RetryInfo;
            toJSON(message: _146.RetryInfo): unknown;
            fromPartial(object: Partial<_146.RetryInfo>): _146.RetryInfo;
        };
        DebugInfo: {
            encode(message: _146.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DebugInfo;
            fromJSON(object: any): _146.DebugInfo;
            toJSON(message: _146.DebugInfo): unknown;
            fromPartial(object: Partial<_146.DebugInfo>): _146.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _146.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuotaFailure;
            fromJSON(object: any): _146.QuotaFailure;
            toJSON(message: _146.QuotaFailure): unknown;
            fromPartial(object: Partial<_146.QuotaFailure>): _146.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _146.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QuotaFailure_Violation;
            fromJSON(object: any): _146.QuotaFailure_Violation;
            toJSON(message: _146.QuotaFailure_Violation): unknown;
            fromPartial(object: Partial<_146.QuotaFailure_Violation>): _146.QuotaFailure_Violation;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _146.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _146.ErrorInfo_MetadataEntry;
            toJSON(message: _146.ErrorInfo_MetadataEntry): unknown;
            fromPartial(object: Partial<_146.ErrorInfo_MetadataEntry>): _146.ErrorInfo_MetadataEntry;
        };
        ErrorInfo: {
            encode(message: _146.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ErrorInfo;
            fromJSON(object: any): _146.ErrorInfo;
            toJSON(message: _146.ErrorInfo): unknown;
            fromPartial(object: Partial<_146.ErrorInfo>): _146.ErrorInfo;
        };
        PreconditionFailure: {
            encode(message: _146.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PreconditionFailure;
            fromJSON(object: any): _146.PreconditionFailure;
            toJSON(message: _146.PreconditionFailure): unknown;
            fromPartial(object: Partial<_146.PreconditionFailure>): _146.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _146.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PreconditionFailure_Violation;
            fromJSON(object: any): _146.PreconditionFailure_Violation;
            toJSON(message: _146.PreconditionFailure_Violation): unknown;
            fromPartial(object: Partial<_146.PreconditionFailure_Violation>): _146.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _146.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.BadRequest;
            fromJSON(object: any): _146.BadRequest;
            toJSON(message: _146.BadRequest): unknown;
            fromPartial(object: Partial<_146.BadRequest>): _146.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _146.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.BadRequest_FieldViolation;
            fromJSON(object: any): _146.BadRequest_FieldViolation;
            toJSON(message: _146.BadRequest_FieldViolation): unknown;
            fromPartial(object: Partial<_146.BadRequest_FieldViolation>): _146.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _146.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.RequestInfo;
            fromJSON(object: any): _146.RequestInfo;
            toJSON(message: _146.RequestInfo): unknown;
            fromPartial(object: Partial<_146.RequestInfo>): _146.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _146.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ResourceInfo;
            fromJSON(object: any): _146.ResourceInfo;
            toJSON(message: _146.ResourceInfo): unknown;
            fromPartial(object: Partial<_146.ResourceInfo>): _146.ResourceInfo;
        };
        Help: {
            encode(message: _146.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Help;
            fromJSON(object: any): _146.Help;
            toJSON(message: _146.Help): unknown;
            fromPartial(object: Partial<_146.Help>): _146.Help;
        };
        Help_Link: {
            encode(message: _146.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Help_Link;
            fromJSON(object: any): _146.Help_Link;
            toJSON(message: _146.Help_Link): unknown;
            fromPartial(object: Partial<_146.Help_Link>): _146.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _146.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LocalizedMessage;
            fromJSON(object: any): _146.LocalizedMessage;
            toJSON(message: _146.LocalizedMessage): unknown;
            fromPartial(object: Partial<_146.LocalizedMessage>): _146.LocalizedMessage;
        };
        codeFromJSON(object: any): _145.Code;
        codeToJSON(object: _145.Code): string;
        Code: typeof _145.Code;
        CodeSDKType: typeof _145.Code;
    };
}
