import { Value, ValueSDKType } from "./value";
import { Status, StatusSDKType } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
/**
 * The state of an evaluation.
 *
 * Can represent an initial, partial, or completed state of evaluation.
 */
export interface EvalState {
    /** The unique values referenced in this message. */
    values: ExprValue[];
    /**
     * An ordered list of results.
     *
     * Tracks the flow of evaluation through the expression.
     * May be sparse.
     */
    results: EvalState_Result[];
}
/**
 * The state of an evaluation.
 *
 * Can represent an initial, partial, or completed state of evaluation.
 */
export interface EvalStateSDKType {
    values: ExprValueSDKType[];
    results: EvalState_ResultSDKType[];
}
/** A single evaluation result. */
export interface EvalState_Result {
    /** The expression this result is for. */
    expr?: IdRef;
    /** The index in `values` of the resulting value. */
    value: number;
}
/** A single evaluation result. */
export interface EvalState_ResultSDKType {
    expr?: IdRefSDKType;
    value: number;
}
/** The value of an evaluated expression. */
export interface ExprValue {
    /** A concrete value. */
    value?: Value;
    /**
     * The set of errors in the critical path of evalution.
     *
     * Only errors in the critical path are included. For example,
     * `(<error1> || true) && <error2>` will only result in `<error2>`,
     * while `<error1> || <error2>` will result in both `<error1>` and
     * `<error2>`.
     *
     * Errors cause by the presence of other errors are not included in the
     * set. For example `<error1>.foo`, `foo(<error1>)`, and `<error1> + 1` will
     * only result in `<error1>`.
     *
     * Multiple errors *might* be included when evaluation could result
     * in different errors. For example `<error1> + <error2>` and
     * `foo(<error1>, <error2>)` may result in `<error1>`, `<error2>` or both.
     * The exact subset of errors included for this case is unspecified and
     * depends on the implementation details of the evaluator.
     */
    error?: ErrorSet;
    /**
     * The set of unknowns in the critical path of evaluation.
     *
     * Unknown behaves identically to Error with regards to propagation.
     * Specifically, only unknowns in the critical path are included, unknowns
     * caused by the presence of other unknowns are not included, and multiple
     * unknowns *might* be included included when evaluation could result in
     * different unknowns. For example:
     *
     *     (<unknown[1]> || true) && <unknown[2]> -> <unknown[2]>
     *     <unknown[1]> || <unknown[2]> -> <unknown[1,2]>
     *     <unknown[1]>.foo -> <unknown[1]>
     *     foo(<unknown[1]>) -> <unknown[1]>
     *     <unknown[1]> + <unknown[2]> -> <unknown[1]> or <unknown[2[>
     *
     * Unknown takes precidence over Error in cases where a `Value` can short
     * circuit the result:
     *
     *     <error> || <unknown> -> <unknown>
     *     <error> && <unknown> -> <unknown>
     *
     * Errors take precidence in all other cases:
     *
     *     <unknown> + <error> -> <error>
     *     foo(<unknown>, <error>) -> <error>
     */
    unknown?: UnknownSet;
}
/** The value of an evaluated expression. */
export interface ExprValueSDKType {
    value?: ValueSDKType;
    error?: ErrorSetSDKType;
    unknown?: UnknownSetSDKType;
}
/**
 * A set of errors.
 *
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSet {
    /** The errors in the set. */
    errors: Status[];
}
/**
 * A set of errors.
 *
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSetSDKType {
    errors: StatusSDKType[];
}
/**
 * A set of expressions for which the value is unknown.
 *
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSet {
    /** The ids of the expressions with unknown values. */
    exprs: IdRef[];
}
/**
 * A set of expressions for which the value is unknown.
 *
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSetSDKType {
    exprs: IdRefSDKType[];
}
/** A reference to an expression id. */
export interface IdRef {
    /** The expression id. */
    id: number;
}
/** A reference to an expression id. */
export interface IdRefSDKType {
    id: number;
}
export declare const EvalState: {
    encode(message: EvalState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalState;
    fromJSON(object: any): EvalState;
    toJSON(message: EvalState): unknown;
    fromPartial(object: Partial<EvalState>): EvalState;
};
export declare const EvalState_Result: {
    encode(message: EvalState_Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvalState_Result;
    fromJSON(object: any): EvalState_Result;
    toJSON(message: EvalState_Result): unknown;
    fromPartial(object: Partial<EvalState_Result>): EvalState_Result;
};
export declare const ExprValue: {
    encode(message: ExprValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExprValue;
    fromJSON(object: any): ExprValue;
    toJSON(message: ExprValue): unknown;
    fromPartial(object: Partial<ExprValue>): ExprValue;
};
export declare const ErrorSet: {
    encode(message: ErrorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorSet;
    fromJSON(object: any): ErrorSet;
    toJSON(message: ErrorSet): unknown;
    fromPartial(object: Partial<ErrorSet>): ErrorSet;
};
export declare const UnknownSet: {
    encode(message: UnknownSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnknownSet;
    fromJSON(object: any): UnknownSet;
    toJSON(message: UnknownSet): unknown;
    fromPartial(object: Partial<UnknownSet>): UnknownSet;
};
export declare const IdRef: {
    encode(message: IdRef, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdRef;
    fromJSON(object: any): IdRef;
    toJSON(message: IdRef): unknown;
    fromPartial(object: Partial<IdRef>): IdRef;
};
