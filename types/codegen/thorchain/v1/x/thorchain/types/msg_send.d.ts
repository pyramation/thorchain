import { Coin, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface MsgSend {
    fromAddress: Uint8Array;
    toAddress: Uint8Array;
    amount: Coin[];
}
export interface MsgSendSDKType {
    from_address: Uint8Array;
    to_address: Uint8Array;
    amount: CoinSDKType[];
}
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial(object: Partial<MsgSend>): MsgSend;
};
