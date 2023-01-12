import { Duration, DurationSDKType } from "../protobuf/duration";
import { Any, AnySDKType } from "../protobuf/any";
import { Status, StatusSDKType } from "../rpc/status";
import * as _m0 from "protobufjs/minimal";
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Operation {
    /**
     * The server-assigned name, which is only unique within the same service that
     * originally returns it. If you use the default HTTP mapping, the
     * `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name: string;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: Any;
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done: boolean;
    /** The error result of the operation in case of failure or cancellation. */
    error?: Status;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx`
     * is the original method name.  For example, if the original method name
     * is `TakeSnapshot()`, the inferred response type is
     * `TakeSnapshotResponse`.
     */
    response?: Any;
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface OperationSDKType {
    name: string;
    metadata?: AnySDKType;
    done: boolean;
    error?: StatusSDKType;
    response?: AnySDKType;
}
/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
    /** The name of the operation resource. */
    name: string;
}
/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequestSDKType {
    name: string;
}
/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequest {
    /** The name of the operation's parent resource. */
    name: string;
    /** The standard list filter. */
    filter: string;
    /** The standard list page size. */
    pageSize: number;
    /** The standard list page token. */
    pageToken: string;
}
/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequestSDKType {
    name: string;
    filter: string;
    page_size: number;
    page_token: string;
}
/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
    /** A list of operations that matches the specified filter in the request. */
    operations: Operation[];
    /** The standard List next-page token. */
    nextPageToken: string;
}
/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponseSDKType {
    operations: OperationSDKType[];
    next_page_token: string;
}
/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
    /** The name of the operation resource to be cancelled. */
    name: string;
}
/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequestSDKType {
    name: string;
}
/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
    /** The name of the operation resource to be deleted. */
    name: string;
}
/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequestSDKType {
    name: string;
}
/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequest {
    /** The name of the operation resource to wait on. */
    name: string;
    /**
     * The maximum duration to wait before timing out. If left blank, the wait
     * will be at most the time permitted by the underlying HTTP/RPC protocol.
     * If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: Duration;
}
/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequestSDKType {
    name: string;
    timeout?: DurationSDKType;
}
/**
 * A message representing the message types used by a long-running operation.
 *
 * Example:
 *
 *   rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *       returns (google.longrunning.Operation) {
 *     option (google.longrunning.operation_info) = {
 *       response_type: "LongRunningRecognizeResponse"
 *       metadata_type: "LongRunningRecognizeMetadata"
 *     };
 *   }
 */
export interface OperationInfo {
    /**
     * Required. The message name of the primary return type for this
     * long-running operation.
     * This type will be used to deserialize the LRO's response.
     *
     * If the response is in a different package from the rpc, a fully-qualified
     * message name must be used (e.g. `google.protobuf.Struct`).
     *
     * Note: Altering this value constitutes a breaking change.
     */
    responseType: string;
    /**
     * Required. The message name of the metadata type for this long-running
     * operation.
     *
     * If the response is in a different package from the rpc, a fully-qualified
     * message name must be used (e.g. `google.protobuf.Struct`).
     *
     * Note: Altering this value constitutes a breaking change.
     */
    metadataType: string;
}
/**
 * A message representing the message types used by a long-running operation.
 *
 * Example:
 *
 *   rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *       returns (google.longrunning.Operation) {
 *     option (google.longrunning.operation_info) = {
 *       response_type: "LongRunningRecognizeResponse"
 *       metadata_type: "LongRunningRecognizeMetadata"
 *     };
 *   }
 */
export interface OperationInfoSDKType {
    response_type: string;
    metadata_type: string;
}
export declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    fromPartial(object: Partial<Operation>): Operation;
};
export declare const GetOperationRequest: {
    encode(message: GetOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationRequest;
    fromJSON(object: any): GetOperationRequest;
    toJSON(message: GetOperationRequest): unknown;
    fromPartial(object: Partial<GetOperationRequest>): GetOperationRequest;
};
export declare const ListOperationsRequest: {
    encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest;
    fromJSON(object: any): ListOperationsRequest;
    toJSON(message: ListOperationsRequest): unknown;
    fromPartial(object: Partial<ListOperationsRequest>): ListOperationsRequest;
};
export declare const ListOperationsResponse: {
    encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse;
    fromJSON(object: any): ListOperationsResponse;
    toJSON(message: ListOperationsResponse): unknown;
    fromPartial(object: Partial<ListOperationsResponse>): ListOperationsResponse;
};
export declare const CancelOperationRequest: {
    encode(message: CancelOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOperationRequest;
    fromJSON(object: any): CancelOperationRequest;
    toJSON(message: CancelOperationRequest): unknown;
    fromPartial(object: Partial<CancelOperationRequest>): CancelOperationRequest;
};
export declare const DeleteOperationRequest: {
    encode(message: DeleteOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOperationRequest;
    fromJSON(object: any): DeleteOperationRequest;
    toJSON(message: DeleteOperationRequest): unknown;
    fromPartial(object: Partial<DeleteOperationRequest>): DeleteOperationRequest;
};
export declare const WaitOperationRequest: {
    encode(message: WaitOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WaitOperationRequest;
    fromJSON(object: any): WaitOperationRequest;
    toJSON(message: WaitOperationRequest): unknown;
    fromPartial(object: Partial<WaitOperationRequest>): WaitOperationRequest;
};
export declare const OperationInfo: {
    encode(message: OperationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationInfo;
    fromJSON(object: any): OperationInfo;
    toJSON(message: OperationInfo): unknown;
    fromPartial(object: Partial<OperationInfo>): OperationInfo;
};
