import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgNodePauseChain {
    value: Long;
    signer: Uint8Array;
}
export interface MsgNodePauseChainSDKType {
    value: Long;
    signer: Uint8Array;
}
export declare const MsgNodePauseChain: {
    encode(message: MsgNodePauseChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNodePauseChain;
    fromJSON(object: any): MsgNodePauseChain;
    toJSON(message: MsgNodePauseChain): unknown;
    fromPartial(object: Partial<MsgNodePauseChain>): MsgNodePauseChain;
};
