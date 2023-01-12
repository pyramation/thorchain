import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NodePauseChain {
    nodeAddress: Uint8Array;
    blockHeight: Long;
}
export interface NodePauseChainSDKType {
    node_address: Uint8Array;
    block_height: Long;
}
export declare const NodePauseChain: {
    encode(message: NodePauseChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodePauseChain;
    fromJSON(object: any): NodePauseChain;
    toJSON(message: NodePauseChain): unknown;
    fromPartial(object: Partial<NodePauseChain>): NodePauseChain;
};
