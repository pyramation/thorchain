import * as _m0 from "protobufjs/minimal";
export interface MsgBan {
    nodeAddress: Uint8Array;
    signer: Uint8Array;
}
export interface MsgBanSDKType {
    node_address: Uint8Array;
    signer: Uint8Array;
}
export declare const MsgBan: {
    encode(message: MsgBan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBan;
    fromJSON(object: any): MsgBan;
    toJSON(message: MsgBan): unknown;
    fromPartial(object: Partial<MsgBan>): MsgBan;
};
