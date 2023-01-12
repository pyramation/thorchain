import { ParsedExpr, ParsedExprSDKType, SourcePosition, SourcePositionSDKType } from "../../v1alpha1/syntax";
import { Decl, DeclSDKType, CheckedExpr, CheckedExprSDKType } from "../../v1alpha1/checked";
import { ExprValue, ExprValueSDKType } from "../../v1alpha1/eval";
import { Status, StatusSDKType } from "../../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../../helpers";
/** Severities of issues. */
export declare enum IssueDetails_Severity {
    /** SEVERITY_UNSPECIFIED - An unspecified severity. */
    SEVERITY_UNSPECIFIED = 0,
    /**
     * DEPRECATION - Deprecation issue for statements and method that may no longer be
     * supported or maintained.
     */
    DEPRECATION = 1,
    /** WARNING - Warnings such as: unused variables. */
    WARNING = 2,
    /** ERROR - Errors such as: unmatched curly braces or variable redefinition. */
    ERROR = 3,
    UNRECOGNIZED = -1
}
export declare const IssueDetails_SeveritySDKType: typeof IssueDetails_Severity;
export declare function issueDetails_SeverityFromJSON(object: any): IssueDetails_Severity;
export declare function issueDetails_SeverityToJSON(object: IssueDetails_Severity): string;
/** Request message for the Parse method. */
export interface ParseRequest {
    /** Required. Source text in CEL syntax. */
    celSource: string;
    /** Tag for version of CEL syntax, for future use. */
    syntaxVersion: string;
    /** File or resource for source text, used in [SourceInfo][google.api.SourceInfo]. */
    sourceLocation: string;
    /** Prevent macro expansion.  See "Macros" in Language Defiinition. */
    disableMacros: boolean;
}
/** Request message for the Parse method. */
export interface ParseRequestSDKType {
    cel_source: string;
    syntax_version: string;
    source_location: string;
    disable_macros: boolean;
}
/** Response message for the Parse method. */
export interface ParseResponse {
    /** The parsed representation, or unset if parsing failed. */
    parsedExpr?: ParsedExpr;
    /** Any number of issues with [StatusDetails][] as the details. */
    issues: Status[];
}
/** Response message for the Parse method. */
export interface ParseResponseSDKType {
    parsed_expr?: ParsedExprSDKType;
    issues: StatusSDKType[];
}
/** Request message for the Check method. */
export interface CheckRequest {
    /** Required. The parsed representation of the CEL program. */
    parsedExpr?: ParsedExpr;
    /**
     * Declarations of types for external variables and functions.
     * Required if program uses external variables or functions
     * not in the default environment.
     */
    typeEnv: Decl[];
    /**
     * The protocol buffer context.  See "Name Resolution" in the
     * Language Definition.
     */
    container: string;
    /**
     * If true, use only the declarations in [type_env][google.api.expr.conformance.v1alpha1.CheckRequest.type_env].  If false (default),
     * add declarations for the standard definitions to the type environment.  See
     * "Standard Definitions" in the Language Definition.
     */
    noStdEnv: boolean;
}
/** Request message for the Check method. */
export interface CheckRequestSDKType {
    parsed_expr?: ParsedExprSDKType;
    type_env: DeclSDKType[];
    container: string;
    no_std_env: boolean;
}
/** Response message for the Check method. */
export interface CheckResponse {
    /** The annotated representation, or unset if checking failed. */
    checkedExpr?: CheckedExpr;
    /** Any number of issues with [StatusDetails][] as the details. */
    issues: Status[];
}
/** Response message for the Check method. */
export interface CheckResponseSDKType {
    checked_expr?: CheckedExprSDKType;
    issues: StatusSDKType[];
}
export interface EvalRequest_BindingsEntry {
    key: string;
    value?: ExprValue;
}
export interface EvalRequest_BindingsEntrySDKType {
    key: string;
    value?: ExprValueSDKType;
}
/** Request message for the Eval method. */
export interface EvalRequest {
    /** Evaluate based on the parsed representation. */
    parsedExpr?: ParsedExpr;
    /** Evaluate based on the checked representation. */
    checkedExpr?: CheckedExpr;
    /**
     * Bindings for the external variables.  The types SHOULD be compatible
     * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
     */
    bindings?: {
        [key: string]: ExprValue;
    };
    /** SHOULD be the same container as used in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked. */
    container: string;
}
/** Request message for the Eval method. */
export interface EvalRequestSDKType {
    parsed_expr?: ParsedExprSDKType;
    checked_expr?: CheckedExprSDKType;
    bindings?: {
        [key: string]: ExprValueSDKType;
    };
    container: string;
}
/** Response message for the Eval method. */
export interface EvalResponse {
    /** The execution result, or unset if execution couldn't start. */
    result?: ExprValue;
    /**
     * Any number of issues with [StatusDetails][] as the details.
     * Note that CEL execution errors are reified into [ExprValue][].
     * Nevertheless, we'll allow out-of-band issues to be raised,
     * which also makes the replies more regular.
     */
    issues: Status[];
}
/** Response message for the Eval method. */
export interface EvalResponseSDKType {
    result?: ExprValueSDKType;
    issues: StatusSDKType[];
}
/**
 * Warnings or errors in service execution are represented by
 * [google.rpc.Status][google.rpc.Status] messages, with the following message
 * in the details field.
 */
export interface IssueDetails {
    /** The severity of the issue. */
    severity: IssueDetails_Severity;
    /** Position in the source, if known. */
    position?: SourcePosition;
    /** Expression ID from [Expr][], 0 if unknown. */
    id: Long;
}
/**
 * Warnings or errors in service execution are represented by
 * [google.rpc.Status][google.rpc.Status] messages, with the following message
 * in the details field.
 */
export interface IssueDetailsSDKType {
    severity: IssueDetails_Severity;
    position?: SourcePositionSDKType;
    id: Long;
}
export declare const ParseRequest: {
    encode(message: ParseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParseRequest;
    fromJSON(object: any): ParseRequest;
    toJSON(message: ParseRequest): unknown;
    fromPartial(object: Partial<ParseRequest>): ParseRequest;
};
export declare const ParseResponse: {
    encode(message: ParseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParseResponse;
    fromJSON(object: any): ParseResponse;
    toJSON(message: ParseResponse): unknown;
    fromPartial(object: Partial<ParseResponse>): ParseResponse;
};
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
export declare const EvalRequest_BindingsEntry: {
    encode(message: EvalRequest_BindingsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalRequest_BindingsEntry;
    fromJSON(object: any): EvalRequest_BindingsEntry;
    toJSON(message: EvalRequest_BindingsEntry): unknown;
    fromPartial(object: Partial<EvalRequest_BindingsEntry>): EvalRequest_BindingsEntry;
};
export declare const EvalRequest: {
    encode(message: EvalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalRequest;
    fromJSON(object: any): EvalRequest;
    toJSON(message: EvalRequest): unknown;
    fromPartial(object: Partial<EvalRequest>): EvalRequest;
};
export declare const EvalResponse: {
    encode(message: EvalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalResponse;
    fromJSON(object: any): EvalResponse;
    toJSON(message: EvalResponse): unknown;
    fromPartial(object: Partial<EvalResponse>): EvalResponse;
};
export declare const IssueDetails: {
    encode(message: IssueDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IssueDetails;
    fromJSON(object: any): IssueDetails;
    toJSON(message: IssueDetails): unknown;
    fromPartial(object: Partial<IssueDetails>): IssueDetails;
};
