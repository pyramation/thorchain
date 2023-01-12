import * as _m0 from "protobufjs/minimal";
export interface Node {
    pubkey: string;
    blameData: Uint8Array;
    blameSignature: Uint8Array;
}
export interface NodeSDKType {
    pubkey: string;
    blame_data: Uint8Array;
    blame_signature: Uint8Array;
}
export interface Blame {
    failReason: string;
    isUnicast: boolean;
    blameNodes: Node[];
}
export interface BlameSDKType {
    fail_reason: string;
    is_unicast: boolean;
    blame_nodes: NodeSDKType[];
}
export declare const Node: {
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial(object: Partial<Node>): Node;
};
export declare const Blame: {
    encode(message: Blame, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Blame;
    fromJSON(object: any): Blame;
    toJSON(message: Blame): unknown;
    fromPartial(object: Partial<Blame>): Blame;
};
