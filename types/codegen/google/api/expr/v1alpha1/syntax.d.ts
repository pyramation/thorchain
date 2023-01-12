import { NullValue } from "../../../protobuf/struct";
import { Duration, DurationSDKType } from "../../../protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../../protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** An expression together with source information as returned by the parser. */
export interface ParsedExpr {
    /** The parsed expression. */
    expr?: Expr;
    /** The source info derived from input that generated the parsed `expr`. */
    sourceInfo?: SourceInfo;
}
/** An expression together with source information as returned by the parser. */
export interface ParsedExprSDKType {
    expr?: ExprSDKType;
    source_info?: SourceInfoSDKType;
}
/**
 * An abstract representation of a common expression.
 *
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 *
 * All references within expressions must resolve to a [Decl][google.api.expr.v1alpha1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 *
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface Expr {
    /**
     * Required. An id assigned to this node by the parser which is unique in a
     * given expression tree. This is used to associate type information and other
     * attributes to a node in the parse tree.
     */
    id: Long;
    /** A literal expression. */
    constExpr?: Constant;
    /** An identifier expression. */
    identExpr?: Expr_Ident;
    /** A field selection expression, e.g. `request.auth`. */
    selectExpr?: Expr_Select;
    /** A call expression, including calls to predefined functions and operators. */
    callExpr?: Expr_Call;
    /** A list creation expression. */
    listExpr?: Expr_CreateList;
    /** A map or message creation expression. */
    structExpr?: Expr_CreateStruct;
    /** A comprehension expression. */
    comprehensionExpr?: Expr_Comprehension;
}
/**
 * An abstract representation of a common expression.
 *
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 *
 * All references within expressions must resolve to a [Decl][google.api.expr.v1alpha1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 *
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface ExprSDKType {
    id: Long;
    const_expr?: ConstantSDKType;
    ident_expr?: Expr_IdentSDKType;
    select_expr?: Expr_SelectSDKType;
    call_expr?: Expr_CallSDKType;
    list_expr?: Expr_CreateListSDKType;
    struct_expr?: Expr_CreateStructSDKType;
    comprehension_expr?: Expr_ComprehensionSDKType;
}
/** An identifier expression. e.g. `request`. */
export interface Expr_Ident {
    /**
     * Required. Holds a single, unqualified identifier, possibly preceded by a
     * '.'.
     *
     * Qualified names are represented by the [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression.
     */
    name: string;
}
/** An identifier expression. e.g. `request`. */
export interface Expr_IdentSDKType {
    name: string;
}
/** A field selection expression. e.g. `request.auth`. */
export interface Expr_Select {
    /**
     * Required. The target of the selection expression.
     *
     * For example, in the select expression `request.auth`, the `request`
     * portion of the expression is the `operand`.
     */
    operand?: Expr;
    /**
     * Required. The name of the field to select.
     *
     * For example, in the select expression `request.auth`, the `auth` portion
     * of the expression would be the `field`.
     */
    field: string;
    /**
     * Whether the select is to be interpreted as a field presence test.
     *
     * This results from the macro `has(request.auth)`.
     */
    testOnly: boolean;
}
/** A field selection expression. e.g. `request.auth`. */
export interface Expr_SelectSDKType {
    operand?: ExprSDKType;
    field: string;
    test_only: boolean;
}
/**
 * A call expression, including calls to predefined functions and operators.
 *
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_Call {
    /**
     * The target of an method call-style expression. For example, `x` in
     * `x.f()`.
     */
    target?: Expr;
    /** Required. The name of the function or method being called. */
    function: string;
    /** The arguments. */
    args: Expr[];
}
/**
 * A call expression, including calls to predefined functions and operators.
 *
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_CallSDKType {
    target?: ExprSDKType;
    function: string;
    args: ExprSDKType[];
}
/**
 * A list creation expression.
 *
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateList {
    /** The elements part of the list. */
    elements: Expr[];
}
/**
 * A list creation expression.
 *
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateListSDKType {
    elements: ExprSDKType[];
}
/**
 * A map or message creation expression.
 *
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStruct {
    /**
     * The type name of the message to be created, empty when creating map
     * literals.
     */
    messageName: string;
    /** The entries in the creation expression. */
    entries: Expr_CreateStruct_Entry[];
}
/**
 * A map or message creation expression.
 *
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStructSDKType {
    message_name: string;
    entries: Expr_CreateStruct_EntrySDKType[];
}
/** Represents an entry. */
export interface Expr_CreateStruct_Entry {
    /**
     * Required. An id assigned to this node by the parser which is unique
     * in a given expression tree. This is used to associate type
     * information and other attributes to the node.
     */
    id: Long;
    /** The field key for a message creator statement. */
    fieldKey?: string;
    /** The key expression for a map creation statement. */
    mapKey?: Expr;
    /** Required. The value assigned to the key. */
    value?: Expr;
}
/** Represents an entry. */
export interface Expr_CreateStruct_EntrySDKType {
    id: Long;
    field_key?: string;
    map_key?: ExprSDKType;
    value?: ExprSDKType;
}
/**
 * A comprehension expression applied to a list or map.
 *
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 *
 * The following macros are supported within CEL:
 *
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 *
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 *
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 */
export interface Expr_Comprehension {
    /** The name of the iteration variable. */
    iterVar: string;
    /** The range over which var iterates. */
    iterRange?: Expr;
    /** The name of the variable used for accumulation of the result. */
    accuVar: string;
    /** The initial value of the accumulator. */
    accuInit?: Expr;
    /**
     * An expression which can contain iter_var and accu_var.
     *
     * Returns false when the result has been computed and may be used as
     * a hint to short-circuit the remainder of the comprehension.
     */
    loopCondition?: Expr;
    /**
     * An expression which can contain iter_var and accu_var.
     *
     * Computes the next value of accu_var.
     */
    loopStep?: Expr;
    /**
     * An expression which can contain accu_var.
     *
     * Computes the result.
     */
    result?: Expr;
}
/**
 * A comprehension expression applied to a list or map.
 *
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 *
 * The following macros are supported within CEL:
 *
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 *
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 *
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 */
export interface Expr_ComprehensionSDKType {
    iter_var: string;
    iter_range?: ExprSDKType;
    accu_var: string;
    accu_init?: ExprSDKType;
    loop_condition?: ExprSDKType;
    loop_step?: ExprSDKType;
    result?: ExprSDKType;
}
/**
 * Represents a primitive literal.
 *
 * Named 'Constant' here for backwards compatibility.
 *
 * This is similar as the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 *
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1alpha1.Expr] elements which require evaluation and are thus not constant.
 *
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface Constant {
    /** null value. */
    nullValue?: NullValue;
    /** boolean value. */
    boolValue?: boolean;
    /** int64 value. */
    int64Value?: Long;
    /** uint64 value. */
    uint64Value?: Long;
    /** double value. */
    doubleValue?: number;
    /** string value. */
    stringValue?: string;
    /** bytes value. */
    bytesValue?: Uint8Array;
    /**
     * protobuf.Duration value.
     *
     * Deprecated: duration is no longer considered a builtin cel type.
     */
    /** @deprecated */
    durationValue?: Duration;
    /**
     * protobuf.Timestamp value.
     *
     * Deprecated: timestamp is no longer considered a builtin cel type.
     */
    /** @deprecated */
    timestampValue?: Timestamp;
}
/**
 * Represents a primitive literal.
 *
 * Named 'Constant' here for backwards compatibility.
 *
 * This is similar as the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 *
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1alpha1.Expr] elements which require evaluation and are thus not constant.
 *
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface ConstantSDKType {
    null_value?: NullValue;
    bool_value?: boolean;
    int64_value?: Long;
    uint64_value?: Long;
    double_value?: number;
    string_value?: string;
    bytes_value?: Uint8Array;
    /** @deprecated */
    duration_value?: DurationSDKType;
    /** @deprecated */
    timestamp_value?: TimestampSDKType;
}
export interface SourceInfo_PositionsEntry {
    key: Long;
    value: number;
}
export interface SourceInfo_PositionsEntrySDKType {
    key: Long;
    value: number;
}
export interface SourceInfo_MacroCallsEntry {
    key: Long;
    value?: Expr;
}
export interface SourceInfo_MacroCallsEntrySDKType {
    key: Long;
    value?: ExprSDKType;
}
/** Source information collected at parse time. */
export interface SourceInfo {
    /** The syntax version of the source, e.g. `cel1`. */
    syntaxVersion: string;
    /**
     * The location name. All position information attached to an expression is
     * relative to this location.
     *
     * The location could be a file, UI element, or similar. For example,
     * `acme/app/AnvilPolicy.cel`.
     */
    location: string;
    /**
     * Monotonically increasing list of code point offsets where newlines
     * `\n` appear.
     *
     * The line number of a given position is the index `i` where for a given
     * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
     * column may be derivd from `id_positions[id] - line_offsets[i]`.
     */
    lineOffsets: number[];
    /**
     * A map from the parse node id (e.g. `Expr.id`) to the code point offset
     * within the source.
     */
    positions: {
        [key: Long]: number;
    };
    /**
     * A map from the parse node id where a macro replacement was made to the
     * call `Expr` that resulted in a macro expansion.
     *
     * For example, `has(value.field)` is a function call that is replaced by a
     * `test_only` field selection in the AST. Likewise, the call
     * `list.exists(e, e > 10)` translates to a comprehension expression. The key
     * in the map corresponds to the expression id of the expanded macro, and the
     * value is the call `Expr` that was replaced.
     */
    macroCalls?: {
        [key: Long]: Expr;
    };
}
/** Source information collected at parse time. */
export interface SourceInfoSDKType {
    syntax_version: string;
    location: string;
    line_offsets: number[];
    positions: {
        [key: Long]: number;
    };
    macro_calls?: {
        [key: Long]: ExprSDKType;
    };
}
/** A specific position in source. */
export interface SourcePosition {
    /** The soucre location name (e.g. file name). */
    location: string;
    /** The UTF-8 code unit offset. */
    offset: number;
    /**
     * The 1-based index of the starting line in the source text
     * where the issue occurs, or 0 if unknown.
     */
    line: number;
    /**
     * The 0-based index of the starting position within the line of source text
     * where the issue occurs.  Only meaningful if line is nonzero.
     */
    column: number;
}
/** A specific position in source. */
export interface SourcePositionSDKType {
    location: string;
    offset: number;
    line: number;
    column: number;
}
export declare const ParsedExpr: {
    encode(message: ParsedExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParsedExpr;
    fromJSON(object: any): ParsedExpr;
    toJSON(message: ParsedExpr): unknown;
    fromPartial(object: Partial<ParsedExpr>): ParsedExpr;
};
export declare const Expr: {
    encode(message: Expr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr;
    fromJSON(object: any): Expr;
    toJSON(message: Expr): unknown;
    fromPartial(object: Partial<Expr>): Expr;
};
export declare const Expr_Ident: {
    encode(message: Expr_Ident, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Ident;
    fromJSON(object: any): Expr_Ident;
    toJSON(message: Expr_Ident): unknown;
    fromPartial(object: Partial<Expr_Ident>): Expr_Ident;
};
export declare const Expr_Select: {
    encode(message: Expr_Select, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Select;
    fromJSON(object: any): Expr_Select;
    toJSON(message: Expr_Select): unknown;
    fromPartial(object: Partial<Expr_Select>): Expr_Select;
};
export declare const Expr_Call: {
    encode(message: Expr_Call, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Call;
    fromJSON(object: any): Expr_Call;
    toJSON(message: Expr_Call): unknown;
    fromPartial(object: Partial<Expr_Call>): Expr_Call;
};
export declare const Expr_CreateList: {
    encode(message: Expr_CreateList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateList;
    fromJSON(object: any): Expr_CreateList;
    toJSON(message: Expr_CreateList): unknown;
    fromPartial(object: Partial<Expr_CreateList>): Expr_CreateList;
};
export declare const Expr_CreateStruct: {
    encode(message: Expr_CreateStruct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct;
    fromJSON(object: any): Expr_CreateStruct;
    toJSON(message: Expr_CreateStruct): unknown;
    fromPartial(object: Partial<Expr_CreateStruct>): Expr_CreateStruct;
};
export declare const Expr_CreateStruct_Entry: {
    encode(message: Expr_CreateStruct_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct_Entry;
    fromJSON(object: any): Expr_CreateStruct_Entry;
    toJSON(message: Expr_CreateStruct_Entry): unknown;
    fromPartial(object: Partial<Expr_CreateStruct_Entry>): Expr_CreateStruct_Entry;
};
export declare const Expr_Comprehension: {
    encode(message: Expr_Comprehension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Comprehension;
    fromJSON(object: any): Expr_Comprehension;
    toJSON(message: Expr_Comprehension): unknown;
    fromPartial(object: Partial<Expr_Comprehension>): Expr_Comprehension;
};
export declare const Constant: {
    encode(message: Constant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Constant;
    fromJSON(object: any): Constant;
    toJSON(message: Constant): unknown;
    fromPartial(object: Partial<Constant>): Constant;
};
export declare const SourceInfo_PositionsEntry: {
    encode(message: SourceInfo_PositionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_PositionsEntry;
    fromJSON(object: any): SourceInfo_PositionsEntry;
    toJSON(message: SourceInfo_PositionsEntry): unknown;
    fromPartial(object: Partial<SourceInfo_PositionsEntry>): SourceInfo_PositionsEntry;
};
export declare const SourceInfo_MacroCallsEntry: {
    encode(message: SourceInfo_MacroCallsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_MacroCallsEntry;
    fromJSON(object: any): SourceInfo_MacroCallsEntry;
    toJSON(message: SourceInfo_MacroCallsEntry): unknown;
    fromPartial(object: Partial<SourceInfo_MacroCallsEntry>): SourceInfo_MacroCallsEntry;
};
export declare const SourceInfo: {
    encode(message: SourceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo;
    fromJSON(object: any): SourceInfo;
    toJSON(message: SourceInfo): unknown;
    fromPartial(object: Partial<SourceInfo>): SourceInfo;
};
export declare const SourcePosition: {
    encode(message: SourcePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourcePosition;
    fromJSON(object: any): SourcePosition;
    toJSON(message: SourcePosition): unknown;
    fromPartial(object: Partial<SourcePosition>): SourcePosition;
};
