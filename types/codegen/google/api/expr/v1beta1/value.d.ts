import { NullValue } from "../../../protobuf/struct";
import { Any, AnySDKType } from "../../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * Represents a CEL value.
 *
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface Value {
    /** Null value. */
    nullValue?: NullValue;
    /** Boolean value. */
    boolValue?: boolean;
    /** Signed integer value. */
    int64Value?: Long;
    /** Unsigned integer value. */
    uint64Value?: Long;
    /** Floating point value. */
    doubleValue?: number;
    /** UTF-8 string value. */
    stringValue?: string;
    /** Byte string value. */
    bytesValue?: Uint8Array;
    /** An enum value. */
    enumValue?: EnumValue;
    /** The proto message backing an object value. */
    objectValue?: Any;
    /** Map value. */
    mapValue?: MapValue;
    /** List value. */
    listValue?: ListValue;
    /** A Type value represented by the fully qualified name of the type. */
    typeValue?: string;
}
/**
 * Represents a CEL value.
 *
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface ValueSDKType {
    null_value?: NullValue;
    bool_value?: boolean;
    int64_value?: Long;
    uint64_value?: Long;
    double_value?: number;
    string_value?: string;
    bytes_value?: Uint8Array;
    enum_value?: EnumValueSDKType;
    object_value?: AnySDKType;
    map_value?: MapValueSDKType;
    list_value?: ListValueSDKType;
    type_value?: string;
}
/** An enum value. */
export interface EnumValue {
    /** The fully qualified name of the enum type. */
    type: string;
    /** The value of the enum. */
    value: number;
}
/** An enum value. */
export interface EnumValueSDKType {
    type: string;
    value: number;
}
/**
 * A list.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValue {
    /** The ordered values in the list. */
    values: Value[];
}
/**
 * A list.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValueSDKType {
    values: ValueSDKType[];
}
/**
 * A map.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValue {
    /**
     * The set of map entries.
     *
     * CEL has fewer restrictions on keys, so a protobuf map represenation
     * cannot be used.
     */
    entries: MapValue_Entry[];
}
/**
 * A map.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValueSDKType {
    entries: MapValue_EntrySDKType[];
}
/** An entry in the map. */
export interface MapValue_Entry {
    /**
     * The key.
     *
     * Must be unique with in the map.
     * Currently only boolean, int, uint, and string values can be keys.
     */
    key?: Value;
    /** The value. */
    value?: Value;
}
/** An entry in the map. */
export interface MapValue_EntrySDKType {
    key?: ValueSDKType;
    value?: ValueSDKType;
}
export declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    fromPartial(object: Partial<Value>): Value;
};
export declare const EnumValue: {
    encode(message: EnumValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue;
    fromJSON(object: any): EnumValue;
    toJSON(message: EnumValue): unknown;
    fromPartial(object: Partial<EnumValue>): EnumValue;
};
export declare const ListValue: {
    encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    fromPartial(object: Partial<ListValue>): ListValue;
};
export declare const MapValue: {
    encode(message: MapValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapValue;
    fromJSON(object: any): MapValue;
    toJSON(message: MapValue): unknown;
    fromPartial(object: Partial<MapValue>): MapValue;
};
export declare const MapValue_Entry: {
    encode(message: MapValue_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapValue_Entry;
    fromJSON(object: any): MapValue_Entry;
    toJSON(message: MapValue_Entry): unknown;
    fromPartial(object: Partial<MapValue_Entry>): MapValue_Entry;
};
