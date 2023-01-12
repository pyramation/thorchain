import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ErrataTxVoter {
    txId: string;
    chain: string;
    blockHeight: Long;
    signers: string[];
}
export interface ErrataTxVoterSDKType {
    tx_id: string;
    chain: string;
    block_height: Long;
    signers: string[];
}
export declare const ErrataTxVoter: {
    encode(message: ErrataTxVoter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrataTxVoter;
    fromJSON(object: any): ErrataTxVoter;
    toJSON(message: ErrataTxVoter): unknown;
    fromPartial(object: Partial<ErrataTxVoter>): ErrataTxVoter;
};
