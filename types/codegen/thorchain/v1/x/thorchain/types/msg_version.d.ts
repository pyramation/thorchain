import * as _m0 from "protobufjs/minimal";
export interface MsgSetVersion {
    version: string;
    signer: Uint8Array;
}
export interface MsgSetVersionSDKType {
    version: string;
    signer: Uint8Array;
}
export declare const MsgSetVersion: {
    encode(message: MsgSetVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVersion;
    fromJSON(object: any): MsgSetVersion;
    toJSON(message: MsgSetVersion): unknown;
    fromPartial(object: Partial<MsgSetVersion>): MsgSetVersion;
};
