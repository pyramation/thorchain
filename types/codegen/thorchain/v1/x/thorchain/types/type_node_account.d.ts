import { PubKeySet, PubKeySetSDKType } from "../../../common/common";
import { Long } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum NodeStatus {
    Unknown = 0,
    Whitelisted = 1,
    Standby = 2,
    Ready = 3,
    Active = 4,
    Disabled = 5,
    UNRECOGNIZED = -1
}
export declare const NodeStatusSDKType: typeof NodeStatus;
export declare function nodeStatusFromJSON(object: any): NodeStatus;
export declare function nodeStatusToJSON(object: NodeStatus): string;
export declare enum NodeType {
    TypeValidator = 0,
    TypeVault = 1,
    TypeUnknown = 2,
    UNRECOGNIZED = -1
}
export declare const NodeTypeSDKType: typeof NodeType;
export declare function nodeTypeFromJSON(object: any): NodeType;
export declare function nodeTypeToJSON(object: NodeType): string;
export interface NodeAccount {
    nodeAddress: Uint8Array;
    status: NodeStatus;
    pubKeySet?: PubKeySet;
    validatorConsPubKey: string;
    bond: string;
    activeBlockHeight: Long;
    bondAddress: string;
    statusSince: Long;
    signerMembership: string[];
    requestedToLeave: boolean;
    forcedToLeave: boolean;
    leaveScore: Long;
    ipAddress: string;
    version: string;
    type: NodeType;
}
export interface NodeAccountSDKType {
    node_address: Uint8Array;
    status: NodeStatus;
    pub_key_set?: PubKeySetSDKType;
    validator_cons_pub_key: string;
    bond: string;
    active_block_height: Long;
    bond_address: string;
    status_since: Long;
    signer_membership: string[];
    requested_to_leave: boolean;
    forced_to_leave: boolean;
    leave_score: Long;
    ip_address: string;
    version: string;
    type: NodeType;
}
export interface BondProvider {
    bondAddress: Uint8Array;
    bond: string;
}
export interface BondProviderSDKType {
    bond_address: Uint8Array;
    bond: string;
}
export interface BondProviders {
    nodeAddress: Uint8Array;
    nodeOperatorFee: string;
    providers: BondProvider[];
}
export interface BondProvidersSDKType {
    node_address: Uint8Array;
    node_operator_fee: string;
    providers: BondProviderSDKType[];
}
export declare const NodeAccount: {
    encode(message: NodeAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeAccount;
    fromJSON(object: any): NodeAccount;
    toJSON(message: NodeAccount): unknown;
    fromPartial(object: Partial<NodeAccount>): NodeAccount;
};
export declare const BondProvider: {
    encode(message: BondProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondProvider;
    fromJSON(object: any): BondProvider;
    toJSON(message: BondProvider): unknown;
    fromPartial(object: Partial<BondProvider>): BondProvider;
};
export declare const BondProviders: {
    encode(message: BondProviders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondProviders;
    fromJSON(object: any): BondProviders;
    toJSON(message: BondProviders): unknown;
    fromPartial(object: Partial<BondProviders>): BondProviders;
};
