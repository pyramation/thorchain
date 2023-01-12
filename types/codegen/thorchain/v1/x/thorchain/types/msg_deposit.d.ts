import { Coin, CoinSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
export interface MsgDeposit {
    coins: Coin[];
    memo: string;
    signer: Uint8Array;
}
export interface MsgDepositSDKType {
    coins: CoinSDKType[];
    memo: string;
    signer: Uint8Array;
}
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
};
