import { Coin, CoinSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSolvency {
    id: string;
    chain: string;
    pubKey: string;
    coins: Coin[];
    height: Long;
    signer: Uint8Array;
}
export interface MsgSolvencySDKType {
    id: string;
    chain: string;
    pub_key: string;
    coins: CoinSDKType[];
    height: Long;
    signer: Uint8Array;
}
export declare const MsgSolvency: {
    encode(message: MsgSolvency, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSolvency;
    fromJSON(object: any): MsgSolvency;
    toJSON(message: MsgSolvency): unknown;
    fromPartial(object: Partial<MsgSolvency>): MsgSolvency;
};
