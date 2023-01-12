import * as _m0 from "protobufjs/minimal";
export interface MsgSetIPAddress {
    ipAddress: string;
    signer: Uint8Array;
}
export interface MsgSetIPAddressSDKType {
    ip_address: string;
    signer: Uint8Array;
}
export declare const MsgSetIPAddress: {
    encode(message: MsgSetIPAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetIPAddress;
    fromJSON(object: any): MsgSetIPAddress;
    toJSON(message: MsgSetIPAddress): unknown;
    fromPartial(object: Partial<MsgSetIPAddress>): MsgSetIPAddress;
};
