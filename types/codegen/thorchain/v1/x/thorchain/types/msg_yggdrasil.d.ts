import { Tx, TxSDKType, Coin, CoinSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgYggdrasil {
    tx?: Tx;
    pubKey: string;
    addFunds: boolean;
    coins: Coin[];
    blockHeight: Long;
    signer: Uint8Array;
}
export interface MsgYggdrasilSDKType {
    tx?: TxSDKType;
    pub_key: string;
    add_funds: boolean;
    coins: CoinSDKType[];
    block_height: Long;
    signer: Uint8Array;
}
export declare const MsgYggdrasil: {
    encode(message: MsgYggdrasil, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgYggdrasil;
    fromJSON(object: any): MsgYggdrasil;
    toJSON(message: MsgYggdrasil): unknown;
    fromPartial(object: Partial<MsgYggdrasil>): MsgYggdrasil;
};
