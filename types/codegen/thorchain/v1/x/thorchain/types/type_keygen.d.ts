import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../../helpers";
export declare enum KeygenType {
    UnknownKeygen = 0,
    AsgardKeygen = 1,
    YggdrasilKeygen = 2,
    UNRECOGNIZED = -1
}
export declare const KeygenTypeSDKType: typeof KeygenType;
export declare function keygenTypeFromJSON(object: any): KeygenType;
export declare function keygenTypeToJSON(object: KeygenType): string;
export interface Keygen {
    id: string;
    type: KeygenType;
    members: string[];
}
export interface KeygenSDKType {
    id: string;
    type: KeygenType;
    members: string[];
}
export interface KeygenBlock {
    height: Long;
    keygens: Keygen[];
}
export interface KeygenBlockSDKType {
    height: Long;
    keygens: KeygenSDKType[];
}
export declare const Keygen: {
    encode(message: Keygen, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Keygen;
    fromJSON(object: any): Keygen;
    toJSON(message: Keygen): unknown;
    fromPartial(object: Partial<Keygen>): Keygen;
};
export declare const KeygenBlock: {
    encode(message: KeygenBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenBlock;
    fromJSON(object: any): KeygenBlock;
    toJSON(message: KeygenBlock): unknown;
    fromPartial(object: Partial<KeygenBlock>): KeygenBlock;
};
