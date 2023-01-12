import * as _m0 from "protobufjs/minimal";
export interface MsgErrataTx {
    txId: string;
    chain: string;
    signer: Uint8Array;
}
export interface MsgErrataTxSDKType {
    tx_id: string;
    chain: string;
    signer: Uint8Array;
}
export declare const MsgErrataTx: {
    encode(message: MsgErrataTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgErrataTx;
    fromJSON(object: any): MsgErrataTx;
    toJSON(message: MsgErrataTx): unknown;
    fromPartial(object: Partial<MsgErrataTx>): MsgErrataTx;
};
