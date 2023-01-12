import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ProtoInt64 {
    value: Long;
}
export interface ProtoInt64SDKType {
    value: Long;
}
export interface ProtoUint64 {
    value: Long;
}
export interface ProtoUint64SDKType {
    value: Long;
}
export interface ProtoAccAddresses {
    value: Uint8Array[];
}
export interface ProtoAccAddressesSDKType {
    value: Uint8Array[];
}
export interface ProtoStrings {
    value: string[];
}
export interface ProtoStringsSDKType {
    value: string[];
}
export interface ProtoBools {
    value: boolean[];
}
export interface ProtoBoolsSDKType {
    value: boolean[];
}
export declare const ProtoInt64: {
    encode(message: ProtoInt64, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtoInt64;
    fromJSON(object: any): ProtoInt64;
    toJSON(message: ProtoInt64): unknown;
    fromPartial(object: Partial<ProtoInt64>): ProtoInt64;
};
export declare const ProtoUint64: {
    encode(message: ProtoUint64, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtoUint64;
    fromJSON(object: any): ProtoUint64;
    toJSON(message: ProtoUint64): unknown;
    fromPartial(object: Partial<ProtoUint64>): ProtoUint64;
};
export declare const ProtoAccAddresses: {
    encode(message: ProtoAccAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtoAccAddresses;
    fromJSON(object: any): ProtoAccAddresses;
    toJSON(message: ProtoAccAddresses): unknown;
    fromPartial(object: Partial<ProtoAccAddresses>): ProtoAccAddresses;
};
export declare const ProtoStrings: {
    encode(message: ProtoStrings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtoStrings;
    fromJSON(object: any): ProtoStrings;
    toJSON(message: ProtoStrings): unknown;
    fromPartial(object: Partial<ProtoStrings>): ProtoStrings;
};
export declare const ProtoBools: {
    encode(message: ProtoBools, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtoBools;
    fromJSON(object: any): ProtoBools;
    toJSON(message: ProtoBools): unknown;
    fromPartial(object: Partial<ProtoBools>): ProtoBools;
};
