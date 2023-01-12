import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./capability/v1beta1/capability";
import * as _29 from "./capability/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/tx";
import * as _32 from "./crypto/ed25519/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/v1beta1/distribution";
import * as _39 from "./distribution/v1beta1/genesis";
import * as _40 from "./distribution/v1beta1/query";
import * as _41 from "./distribution/v1beta1/tx";
import * as _42 from "./evidence/v1beta1/evidence";
import * as _43 from "./evidence/v1beta1/genesis";
import * as _44 from "./evidence/v1beta1/query";
import * as _45 from "./evidence/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/v1beta1/genesis";
import * as _51 from "./gov/v1/genesis";
import * as _52 from "./gov/v1/gov";
import * as _53 from "./gov/v1/query";
import * as _54 from "./gov/v1/tx";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./group/v1/events";
import * as _60 from "./group/v1/genesis";
import * as _61 from "./group/v1/query";
import * as _62 from "./group/v1/tx";
import * as _63 from "./group/v1/types";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _68 from "./nft/v1beta1/event";
import * as _69 from "./nft/v1beta1/genesis";
import * as _70 from "./nft/v1beta1/nft";
import * as _71 from "./nft/v1beta1/query";
import * as _72 from "./nft/v1beta1/tx";
import * as _73 from "./orm/module/v1alpha1/module";
import * as _74 from "./orm/v1/orm";
import * as _75 from "./orm/v1alpha1/schema";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/upgrade";
import * as _93 from "./vesting/v1beta1/tx";
import * as _94 from "./vesting/v1beta1/vesting";
import * as _221 from "./app/v1alpha1/query.rpc.Query";
import * as _222 from "./auth/v1beta1/query.rpc.Query";
import * as _223 from "./authz/v1beta1/query.rpc.Query";
import * as _224 from "./bank/v1beta1/query.rpc.Query";
import * as _225 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _226 from "./distribution/v1beta1/query.rpc.Query";
import * as _227 from "./evidence/v1beta1/query.rpc.Query";
import * as _228 from "./feegrant/v1beta1/query.rpc.Query";
import * as _229 from "./gov/v1/query.rpc.Query";
import * as _230 from "./gov/v1beta1/query.rpc.Query";
import * as _231 from "./group/v1/query.rpc.Query";
import * as _232 from "./mint/v1beta1/query.rpc.Query";
import * as _233 from "./nft/v1beta1/query.rpc.Query";
import * as _234 from "./params/v1beta1/query.rpc.Query";
import * as _235 from "./slashing/v1beta1/query.rpc.Query";
import * as _236 from "./staking/v1beta1/query.rpc.Query";
import * as _237 from "./tx/v1beta1/service.rpc.Service";
import * as _238 from "./upgrade/v1beta1/query.rpc.Query";
import * as _239 from "./authz/v1beta1/tx.rpc.msg";
import * as _240 from "./bank/v1beta1/tx.rpc.msg";
import * as _241 from "./crisis/v1beta1/tx.rpc.msg";
import * as _242 from "./distribution/v1beta1/tx.rpc.msg";
import * as _243 from "./evidence/v1beta1/tx.rpc.msg";
import * as _244 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _245 from "./gov/v1/tx.rpc.msg";
import * as _246 from "./gov/v1beta1/tx.rpc.msg";
import * as _247 from "./group/v1/tx.rpc.msg";
import * as _248 from "./nft/v1beta1/tx.rpc.msg";
import * as _249 from "./slashing/v1beta1/tx.rpc.msg";
import * as _250 from "./staking/v1beta1/tx.rpc.msg";
import * as _251 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _252 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _4.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigRequest;
                fromJSON(_: any): _4.QueryConfigRequest;
                toJSON(_: _4.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_4.QueryConfigRequest>): _4.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _4.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigResponse;
                fromJSON(object: any): _4.QueryConfigResponse;
                toJSON(message: _4.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_4.QueryConfigResponse>): _4.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _3.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleDescriptor;
                fromJSON(object: any): _3.ModuleDescriptor;
                toJSON(message: _3.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_3.ModuleDescriptor>): _3.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _3.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PackageReference;
                fromJSON(object: any): _3.PackageReference;
                toJSON(message: _3.PackageReference): unknown;
                fromPartial(object: Partial<_3.PackageReference>): _3.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _3.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MigrateFromInfo;
                fromJSON(object: any): _3.MigrateFromInfo;
                toJSON(message: _3.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_3.MigrateFromInfo>): _3.MigrateFromInfo;
            };
            Config: {
                encode(message: _2.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Config;
                fromJSON(object: any): _2.Config;
                toJSON(message: _2.Config): unknown;
                fromPartial(object: Partial<_2.Config>): _2.Config;
            };
            ModuleConfig: {
                encode(message: _2.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleConfig;
                fromJSON(object: any): _2.ModuleConfig;
                toJSON(message: _2.ModuleConfig): unknown;
                fromPartial(object: Partial<_2.ModuleConfig>): _2.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                moduleAccounts(request?: _7.QueryModuleAccountsRequest): Promise<_7.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _7.Bech32PrefixRequest): Promise<_7.Bech32PrefixResponse>;
                addressBytesToString(request: _7.AddressBytesToStringRequest): Promise<_7.AddressBytesToStringResponse>;
                addressStringToBytes(request: _7.AddressStringToBytesRequest): Promise<_7.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _7.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsRequest;
                fromJSON(object: any): _7.QueryAccountsRequest;
                toJSON(message: _7.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_7.QueryAccountsRequest>): _7.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _7.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsResponse;
                fromJSON(object: any): _7.QueryAccountsResponse;
                toJSON(message: _7.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_7.QueryAccountsResponse>): _7.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _7.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountRequest;
                fromJSON(object: any): _7.QueryAccountRequest;
                toJSON(message: _7.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_7.QueryAccountRequest>): _7.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _7.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsRequest;
                fromJSON(_: any): _7.QueryModuleAccountsRequest;
                toJSON(_: _7.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_7.QueryModuleAccountsRequest>): _7.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _7.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountResponse;
                fromJSON(object: any): _7.QueryAccountResponse;
                toJSON(message: _7.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_7.QueryAccountResponse>): _7.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _7.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsResponse;
                fromJSON(object: any): _7.QueryModuleAccountsResponse;
                toJSON(message: _7.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_7.QueryModuleAccountsResponse>): _7.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _7.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixRequest;
                fromJSON(_: any): _7.Bech32PrefixRequest;
                toJSON(_: _7.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_7.Bech32PrefixRequest>): _7.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _7.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixResponse;
                fromJSON(object: any): _7.Bech32PrefixResponse;
                toJSON(message: _7.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_7.Bech32PrefixResponse>): _7.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _7.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringRequest;
                fromJSON(object: any): _7.AddressBytesToStringRequest;
                toJSON(message: _7.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_7.AddressBytesToStringRequest>): _7.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _7.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringResponse;
                fromJSON(object: any): _7.AddressBytesToStringResponse;
                toJSON(message: _7.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_7.AddressBytesToStringResponse>): _7.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _7.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesRequest;
                fromJSON(object: any): _7.AddressStringToBytesRequest;
                toJSON(message: _7.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_7.AddressStringToBytesRequest>): _7.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _7.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesResponse;
                fromJSON(object: any): _7.AddressStringToBytesResponse;
                toJSON(message: _7.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_7.AddressStringToBytesResponse>): _7.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
            };
            BaseAccount: {
                encode(message: _5.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BaseAccount;
                fromJSON(object: any): _5.BaseAccount;
                toJSON(message: _5.BaseAccount): unknown;
                fromPartial(object: Partial<_5.BaseAccount>): _5.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _5.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleAccount;
                fromJSON(object: any): _5.ModuleAccount;
                toJSON(message: _5.ModuleAccount): unknown;
                fromPartial(object: Partial<_5.ModuleAccount>): _5.ModuleAccount;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromJSON(object: any): _5.Params;
                toJSON(message: _5.Params): unknown;
                fromPartial(object: Partial<_5.Params>): _5.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _11.QueryGrantsRequest): Promise<_11.QueryGrantsResponse>;
                granterGrants(request: _11.QueryGranterGrantsRequest): Promise<_11.QueryGranterGrantsResponse>;
                granteeGrants(request: _11.QueryGranteeGrantsRequest): Promise<_11.QueryGranteeGrantsResponse>;
            };
            MsgGrant: {
                encode(message: _12.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrant;
                fromJSON(object: any): _12.MsgGrant;
                toJSON(message: _12.MsgGrant): unknown;
                fromPartial(object: Partial<_12.MsgGrant>): _12.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _12.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExecResponse;
                fromJSON(object: any): _12.MsgExecResponse;
                toJSON(message: _12.MsgExecResponse): unknown;
                fromPartial(object: Partial<_12.MsgExecResponse>): _12.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _12.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExec;
                fromJSON(object: any): _12.MsgExec;
                toJSON(message: _12.MsgExec): unknown;
                fromPartial(object: Partial<_12.MsgExec>): _12.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _12.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrantResponse;
                fromJSON(_: any): _12.MsgGrantResponse;
                toJSON(_: _12.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_12.MsgGrantResponse>): _12.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _12.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevoke;
                fromJSON(object: any): _12.MsgRevoke;
                toJSON(message: _12.MsgRevoke): unknown;
                fromPartial(object: Partial<_12.MsgRevoke>): _12.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _12.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevokeResponse;
                fromJSON(_: any): _12.MsgRevokeResponse;
                toJSON(_: _12.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_12.MsgRevokeResponse>): _12.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _11.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsRequest;
                fromJSON(object: any): _11.QueryGrantsRequest;
                toJSON(message: _11.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGrantsRequest>): _11.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _11.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsResponse;
                fromJSON(object: any): _11.QueryGrantsResponse;
                toJSON(message: _11.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGrantsResponse>): _11.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _11.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsRequest;
                fromJSON(object: any): _11.QueryGranterGrantsRequest;
                toJSON(message: _11.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGranterGrantsRequest>): _11.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _11.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsResponse;
                fromJSON(object: any): _11.QueryGranterGrantsResponse;
                toJSON(message: _11.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGranterGrantsResponse>): _11.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _11.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsRequest;
                fromJSON(object: any): _11.QueryGranteeGrantsRequest;
                toJSON(message: _11.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGranteeGrantsRequest>): _11.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _11.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsResponse;
                fromJSON(object: any): _11.QueryGranteeGrantsResponse;
                toJSON(message: _11.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGranteeGrantsResponse>): _11.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
            };
            EventGrant: {
                encode(message: _9.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventGrant;
                fromJSON(object: any): _9.EventGrant;
                toJSON(message: _9.EventGrant): unknown;
                fromPartial(object: Partial<_9.EventGrant>): _9.EventGrant;
            };
            EventRevoke: {
                encode(message: _9.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventRevoke;
                fromJSON(object: any): _9.EventRevoke;
                toJSON(message: _9.EventRevoke): unknown;
                fromPartial(object: Partial<_9.EventRevoke>): _9.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _8.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenericAuthorization;
                fromJSON(object: any): _8.GenericAuthorization;
                toJSON(message: _8.GenericAuthorization): unknown;
                fromPartial(object: Partial<_8.GenericAuthorization>): _8.GenericAuthorization;
            };
            Grant: {
                encode(message: _8.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Grant;
                fromJSON(object: any): _8.Grant;
                toJSON(message: _8.Grant): unknown;
                fromPartial(object: Partial<_8.Grant>): _8.Grant;
            };
            GrantAuthorization: {
                encode(message: _8.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantAuthorization;
                fromJSON(object: any): _8.GrantAuthorization;
                toJSON(message: _8.GrantAuthorization): unknown;
                fromPartial(object: Partial<_8.GrantAuthorization>): _8.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _8.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantQueueItem;
                fromJSON(object: any): _8.GrantQueueItem;
                toJSON(message: _8.GrantQueueItem): unknown;
                fromPartial(object: Partial<_8.GrantQueueItem>): _8.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _16.QueryBalanceRequest): Promise<_16.QueryBalanceResponse>;
                allBalances(request: _16.QueryAllBalancesRequest): Promise<_16.QueryAllBalancesResponse>;
                spendableBalances(request: _16.QuerySpendableBalancesRequest): Promise<_16.QuerySpendableBalancesResponse>;
                totalSupply(request?: _16.QueryTotalSupplyRequest): Promise<_16.QueryTotalSupplyResponse>;
                supplyOf(request: _16.QuerySupplyOfRequest): Promise<_16.QuerySupplyOfResponse>;
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                denomMetadata(request: _16.QueryDenomMetadataRequest): Promise<_16.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _16.QueryDenomsMetadataRequest): Promise<_16.QueryDenomsMetadataResponse>;
                denomOwners(request: _16.QueryDenomOwnersRequest): Promise<_16.QueryDenomOwnersResponse>;
            };
            MsgSend: {
                encode(message: _17.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSend;
                fromJSON(object: any): _17.MsgSend;
                toJSON(message: _17.MsgSend): unknown;
                fromPartial(object: Partial<_17.MsgSend>): _17.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _17.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSendResponse;
                fromJSON(_: any): _17.MsgSendResponse;
                toJSON(_: _17.MsgSendResponse): unknown;
                fromPartial(_: Partial<_17.MsgSendResponse>): _17.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _17.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSend;
                fromJSON(object: any): _17.MsgMultiSend;
                toJSON(message: _17.MsgMultiSend): unknown;
                fromPartial(object: Partial<_17.MsgMultiSend>): _17.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _17.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSendResponse;
                fromJSON(_: any): _17.MsgMultiSendResponse;
                toJSON(_: _17.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_17.MsgMultiSendResponse>): _17.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _16.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceRequest;
                fromJSON(object: any): _16.QueryBalanceRequest;
                toJSON(message: _16.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_16.QueryBalanceRequest>): _16.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _16.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceResponse;
                fromJSON(object: any): _16.QueryBalanceResponse;
                toJSON(message: _16.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_16.QueryBalanceResponse>): _16.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _16.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesRequest;
                fromJSON(object: any): _16.QueryAllBalancesRequest;
                toJSON(message: _16.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_16.QueryAllBalancesRequest>): _16.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _16.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesResponse;
                fromJSON(object: any): _16.QueryAllBalancesResponse;
                toJSON(message: _16.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_16.QueryAllBalancesResponse>): _16.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _16.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesRequest;
                fromJSON(object: any): _16.QuerySpendableBalancesRequest;
                toJSON(message: _16.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_16.QuerySpendableBalancesRequest>): _16.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _16.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesResponse;
                fromJSON(object: any): _16.QuerySpendableBalancesResponse;
                toJSON(message: _16.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_16.QuerySpendableBalancesResponse>): _16.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _16.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyRequest;
                fromJSON(object: any): _16.QueryTotalSupplyRequest;
                toJSON(message: _16.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_16.QueryTotalSupplyRequest>): _16.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _16.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyResponse;
                fromJSON(object: any): _16.QueryTotalSupplyResponse;
                toJSON(message: _16.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_16.QueryTotalSupplyResponse>): _16.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _16.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfRequest;
                fromJSON(object: any): _16.QuerySupplyOfRequest;
                toJSON(message: _16.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_16.QuerySupplyOfRequest>): _16.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _16.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfResponse;
                fromJSON(object: any): _16.QuerySupplyOfResponse;
                toJSON(message: _16.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_16.QuerySupplyOfResponse>): _16.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromJSON(_: any): _16.QueryParamsRequest;
                toJSON(_: _16.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponse;
                fromJSON(object: any): _16.QueryParamsResponse;
                toJSON(message: _16.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _16.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataRequest;
                fromJSON(object: any): _16.QueryDenomsMetadataRequest;
                toJSON(message: _16.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomsMetadataRequest>): _16.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _16.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataResponse;
                fromJSON(object: any): _16.QueryDenomsMetadataResponse;
                toJSON(message: _16.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomsMetadataResponse>): _16.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _16.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataRequest;
                fromJSON(object: any): _16.QueryDenomMetadataRequest;
                toJSON(message: _16.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomMetadataRequest>): _16.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _16.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataResponse;
                fromJSON(object: any): _16.QueryDenomMetadataResponse;
                toJSON(message: _16.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomMetadataResponse>): _16.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _16.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersRequest;
                fromJSON(object: any): _16.QueryDenomOwnersRequest;
                toJSON(message: _16.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomOwnersRequest>): _16.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _16.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DenomOwner;
                fromJSON(object: any): _16.DenomOwner;
                toJSON(message: _16.DenomOwner): unknown;
                fromPartial(object: Partial<_16.DenomOwner>): _16.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _16.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersResponse;
                fromJSON(object: any): _16.QueryDenomOwnersResponse;
                toJSON(message: _16.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomOwnersResponse>): _16.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromJSON(object: any): _15.GenesisState;
                toJSON(message: _15.GenesisState): unknown;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            Balance: {
                encode(message: _15.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Balance;
                fromJSON(object: any): _15.Balance;
                toJSON(message: _15.Balance): unknown;
                fromPartial(object: Partial<_15.Balance>): _15.Balance;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Params;
                fromJSON(object: any): _14.Params;
                toJSON(message: _14.Params): unknown;
                fromPartial(object: Partial<_14.Params>): _14.Params;
            };
            SendEnabled: {
                encode(message: _14.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendEnabled;
                fromJSON(object: any): _14.SendEnabled;
                toJSON(message: _14.SendEnabled): unknown;
                fromPartial(object: Partial<_14.SendEnabled>): _14.SendEnabled;
            };
            Input: {
                encode(message: _14.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Input;
                fromJSON(object: any): _14.Input;
                toJSON(message: _14.Input): unknown;
                fromPartial(object: Partial<_14.Input>): _14.Input;
            };
            Output: {
                encode(message: _14.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Output;
                fromJSON(object: any): _14.Output;
                toJSON(message: _14.Output): unknown;
                fromPartial(object: Partial<_14.Output>): _14.Output;
            };
            Supply: {
                encode(message: _14.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Supply;
                fromJSON(object: any): _14.Supply;
                toJSON(message: _14.Supply): unknown;
                fromPartial(object: Partial<_14.Supply>): _14.Supply;
            };
            DenomUnit: {
                encode(message: _14.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.DenomUnit;
                fromJSON(object: any): _14.DenomUnit;
                toJSON(message: _14.DenomUnit): unknown;
                fromPartial(object: Partial<_14.DenomUnit>): _14.DenomUnit;
            };
            Metadata: {
                encode(message: _14.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Metadata;
                fromJSON(object: any): _14.Metadata;
                toJSON(message: _14.Metadata): unknown;
                fromPartial(object: Partial<_14.Metadata>): _14.Metadata;
            };
            SendAuthorization: {
                encode(message: _13.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendAuthorization;
                fromJSON(object: any): _13.SendAuthorization;
                toJSON(message: _13.SendAuthorization): unknown;
                fromPartial(object: Partial<_13.SendAuthorization>): _13.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _18.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxResponse;
                    fromJSON(object: any): _18.TxResponse;
                    toJSON(message: _18.TxResponse): unknown;
                    fromPartial(object: Partial<_18.TxResponse>): _18.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _18.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ABCIMessageLog;
                    fromJSON(object: any): _18.ABCIMessageLog;
                    toJSON(message: _18.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_18.ABCIMessageLog>): _18.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _18.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.StringEvent;
                    fromJSON(object: any): _18.StringEvent;
                    toJSON(message: _18.StringEvent): unknown;
                    fromPartial(object: Partial<_18.StringEvent>): _18.StringEvent;
                };
                Attribute: {
                    encode(message: _18.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Attribute;
                    fromJSON(object: any): _18.Attribute;
                    toJSON(message: _18.Attribute): unknown;
                    fromPartial(object: Partial<_18.Attribute>): _18.Attribute;
                };
                GasInfo: {
                    encode(message: _18.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GasInfo;
                    fromJSON(object: any): _18.GasInfo;
                    toJSON(message: _18.GasInfo): unknown;
                    fromPartial(object: Partial<_18.GasInfo>): _18.GasInfo;
                };
                Result: {
                    encode(message: _18.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Result;
                    fromJSON(object: any): _18.Result;
                    toJSON(message: _18.Result): unknown;
                    fromPartial(object: Partial<_18.Result>): _18.Result;
                };
                SimulationResponse: {
                    encode(message: _18.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SimulationResponse;
                    fromJSON(object: any): _18.SimulationResponse;
                    toJSON(message: _18.SimulationResponse): unknown;
                    fromPartial(object: Partial<_18.SimulationResponse>): _18.SimulationResponse;
                };
                MsgData: {
                    encode(message: _18.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgData;
                    fromJSON(object: any): _18.MsgData;
                    toJSON(message: _18.MsgData): unknown;
                    fromPartial(object: Partial<_18.MsgData>): _18.MsgData;
                };
                TxMsgData: {
                    encode(message: _18.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxMsgData;
                    fromJSON(object: any): _18.TxMsgData;
                    toJSON(message: _18.TxMsgData): unknown;
                    fromPartial(object: Partial<_18.TxMsgData>): _18.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _18.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SearchTxsResult;
                    fromJSON(object: any): _18.SearchTxsResult;
                    toJSON(message: _18.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_18.SearchTxsResult>): _18.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _19.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pairs;
                    fromJSON(object: any): _19.Pairs;
                    toJSON(message: _19.Pairs): unknown;
                    fromPartial(object: Partial<_19.Pairs>): _19.Pairs;
                };
                Pair: {
                    encode(message: _19.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pair;
                    fromJSON(object: any): _19.Pair;
                    toJSON(message: _19.Pair): unknown;
                    fromPartial(object: Partial<_19.Pair>): _19.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _20.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageRequest;
                    fromJSON(object: any): _20.PageRequest;
                    toJSON(message: _20.PageRequest): unknown;
                    fromPartial(object: Partial<_20.PageRequest>): _20.PageRequest;
                };
                PageResponse: {
                    encode(message: _20.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageResponse;
                    fromJSON(object: any): _20.PageResponse;
                    toJSON(message: _20.PageResponse): unknown;
                    fromPartial(object: Partial<_20.PageResponse>): _20.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _21.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesRequest;
                    fromJSON(_: any): _21.ListAllInterfacesRequest;
                    toJSON(_: _21.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_21.ListAllInterfacesRequest>): _21.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _21.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesResponse;
                    fromJSON(object: any): _21.ListAllInterfacesResponse;
                    toJSON(message: _21.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_21.ListAllInterfacesResponse>): _21.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _21.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsRequest;
                    fromJSON(object: any): _21.ListImplementationsRequest;
                    toJSON(message: _21.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_21.ListImplementationsRequest>): _21.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _21.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsResponse;
                    fromJSON(object: any): _21.ListImplementationsResponse;
                    toJSON(message: _21.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_21.ListImplementationsResponse>): _21.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _22.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AppDescriptor;
                    fromJSON(object: any): _22.AppDescriptor;
                    toJSON(message: _22.AppDescriptor): unknown;
                    fromPartial(object: Partial<_22.AppDescriptor>): _22.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _22.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.TxDescriptor;
                    fromJSON(object: any): _22.TxDescriptor;
                    toJSON(message: _22.TxDescriptor): unknown;
                    fromPartial(object: Partial<_22.TxDescriptor>): _22.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _22.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AuthnDescriptor;
                    fromJSON(object: any): _22.AuthnDescriptor;
                    toJSON(message: _22.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_22.AuthnDescriptor>): _22.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _22.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SigningModeDescriptor;
                    fromJSON(object: any): _22.SigningModeDescriptor;
                    toJSON(message: _22.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_22.SigningModeDescriptor>): _22.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _22.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ChainDescriptor;
                    fromJSON(object: any): _22.ChainDescriptor;
                    toJSON(message: _22.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_22.ChainDescriptor>): _22.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _22.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CodecDescriptor;
                    fromJSON(object: any): _22.CodecDescriptor;
                    toJSON(message: _22.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_22.CodecDescriptor>): _22.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _22.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceDescriptor;
                    fromJSON(object: any): _22.InterfaceDescriptor;
                    toJSON(message: _22.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_22.InterfaceDescriptor>): _22.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _22.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _22.InterfaceImplementerDescriptor;
                    toJSON(message: _22.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_22.InterfaceImplementerDescriptor>): _22.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _22.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _22.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _22.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_22.InterfaceAcceptingMessageDescriptor>): _22.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _22.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ConfigurationDescriptor;
                    fromJSON(object: any): _22.ConfigurationDescriptor;
                    toJSON(message: _22.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_22.ConfigurationDescriptor>): _22.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _22.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgDescriptor;
                    fromJSON(object: any): _22.MsgDescriptor;
                    toJSON(message: _22.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_22.MsgDescriptor>): _22.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _22.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _22.GetAuthnDescriptorRequest;
                    toJSON(_: _22.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetAuthnDescriptorRequest>): _22.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _22.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _22.GetAuthnDescriptorResponse;
                    toJSON(message: _22.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetAuthnDescriptorResponse>): _22.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _22.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorRequest;
                    fromJSON(_: any): _22.GetChainDescriptorRequest;
                    toJSON(_: _22.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetChainDescriptorRequest>): _22.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _22.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorResponse;
                    fromJSON(object: any): _22.GetChainDescriptorResponse;
                    toJSON(message: _22.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetChainDescriptorResponse>): _22.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _22.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorRequest;
                    fromJSON(_: any): _22.GetCodecDescriptorRequest;
                    toJSON(_: _22.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetCodecDescriptorRequest>): _22.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _22.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorResponse;
                    fromJSON(object: any): _22.GetCodecDescriptorResponse;
                    toJSON(message: _22.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetCodecDescriptorResponse>): _22.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _22.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _22.GetConfigurationDescriptorRequest;
                    toJSON(_: _22.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetConfigurationDescriptorRequest>): _22.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _22.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _22.GetConfigurationDescriptorResponse;
                    toJSON(message: _22.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetConfigurationDescriptorResponse>): _22.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _22.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _22.GetQueryServicesDescriptorRequest;
                    toJSON(_: _22.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetQueryServicesDescriptorRequest>): _22.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _22.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _22.GetQueryServicesDescriptorResponse;
                    toJSON(message: _22.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetQueryServicesDescriptorResponse>): _22.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _22.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorRequest;
                    fromJSON(_: any): _22.GetTxDescriptorRequest;
                    toJSON(_: _22.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetTxDescriptorRequest>): _22.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _22.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorResponse;
                    fromJSON(object: any): _22.GetTxDescriptorResponse;
                    toJSON(message: _22.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetTxDescriptorResponse>): _22.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _22.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServicesDescriptor;
                    fromJSON(object: any): _22.QueryServicesDescriptor;
                    toJSON(message: _22.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_22.QueryServicesDescriptor>): _22.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _22.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServiceDescriptor;
                    fromJSON(object: any): _22.QueryServiceDescriptor;
                    toJSON(message: _22.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_22.QueryServiceDescriptor>): _22.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _22.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryMethodDescriptor;
                    fromJSON(object: any): _22.QueryMethodDescriptor;
                    toJSON(message: _22.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_22.QueryMethodDescriptor>): _22.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _23.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Snapshot;
                    fromJSON(object: any): _23.Snapshot;
                    toJSON(message: _23.Snapshot): unknown;
                    fromPartial(object: Partial<_23.Snapshot>): _23.Snapshot;
                };
                Metadata: {
                    encode(message: _23.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Metadata;
                    fromJSON(object: any): _23.Metadata;
                    toJSON(message: _23.Metadata): unknown;
                    fromPartial(object: Partial<_23.Metadata>): _23.Metadata;
                };
                SnapshotItem: {
                    encode(message: _23.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotItem;
                    fromJSON(object: any): _23.SnapshotItem;
                    toJSON(message: _23.SnapshotItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotItem>): _23.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _23.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotStoreItem;
                    fromJSON(object: any): _23.SnapshotStoreItem;
                    toJSON(message: _23.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotStoreItem>): _23.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _23.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotIAVLItem;
                    fromJSON(object: any): _23.SnapshotIAVLItem;
                    toJSON(message: _23.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotIAVLItem>): _23.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _23.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionMeta;
                    fromJSON(object: any): _23.SnapshotExtensionMeta;
                    toJSON(message: _23.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_23.SnapshotExtensionMeta>): _23.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _23.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionPayload;
                    fromJSON(object: any): _23.SnapshotExtensionPayload;
                    toJSON(message: _23.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_23.SnapshotExtensionPayload>): _23.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _23.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotKVItem;
                    fromJSON(object: any): _23.SnapshotKVItem;
                    toJSON(message: _23.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotKVItem>): _23.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _23.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotSchema;
                    fromJSON(object: any): _23.SnapshotSchema;
                    toJSON(message: _23.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_23.SnapshotSchema>): _23.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _25.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StoreKVPair;
                    fromJSON(object: any): _25.StoreKVPair;
                    toJSON(message: _25.StoreKVPair): unknown;
                    fromPartial(object: Partial<_25.StoreKVPair>): _25.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _24.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitInfo;
                    fromJSON(object: any): _24.CommitInfo;
                    toJSON(message: _24.CommitInfo): unknown;
                    fromPartial(object: Partial<_24.CommitInfo>): _24.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _24.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StoreInfo;
                    fromJSON(object: any): _24.StoreInfo;
                    toJSON(message: _24.StoreInfo): unknown;
                    fromPartial(object: Partial<_24.StoreInfo>): _24.StoreInfo;
                };
                CommitID: {
                    encode(message: _24.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitID;
                    fromJSON(object: any): _24.CommitID;
                    toJSON(message: _24.CommitID): unknown;
                    fromPartial(object: Partial<_24.CommitID>): _24.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _225.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _26.GetNodeInfoRequest): Promise<_26.GetNodeInfoResponse>;
                    getSyncing(request?: _26.GetSyncingRequest): Promise<_26.GetSyncingResponse>;
                    getLatestBlock(request?: _26.GetLatestBlockRequest): Promise<_26.GetLatestBlockResponse>;
                    getBlockByHeight(request: _26.GetBlockByHeightRequest): Promise<_26.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _26.GetLatestValidatorSetRequest): Promise<_26.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _26.GetValidatorSetByHeightRequest): Promise<_26.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _26.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _26.GetValidatorSetByHeightRequest;
                    toJSON(message: _26.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightRequest>): _26.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _26.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _26.GetValidatorSetByHeightResponse;
                    toJSON(message: _26.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightResponse>): _26.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _26.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _26.GetLatestValidatorSetRequest;
                    toJSON(message: _26.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetRequest>): _26.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _26.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _26.GetLatestValidatorSetResponse;
                    toJSON(message: _26.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetResponse>): _26.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _26.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Validator;
                    fromJSON(object: any): _26.Validator;
                    toJSON(message: _26.Validator): unknown;
                    fromPartial(object: Partial<_26.Validator>): _26.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _26.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightRequest;
                    fromJSON(object: any): _26.GetBlockByHeightRequest;
                    toJSON(message: _26.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_26.GetBlockByHeightRequest>): _26.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _26.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightResponse;
                    fromJSON(object: any): _26.GetBlockByHeightResponse;
                    toJSON(message: _26.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_26.GetBlockByHeightResponse>): _26.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _26.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockRequest;
                    fromJSON(_: any): _26.GetLatestBlockRequest;
                    toJSON(_: _26.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_26.GetLatestBlockRequest>): _26.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _26.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockResponse;
                    fromJSON(object: any): _26.GetLatestBlockResponse;
                    toJSON(message: _26.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_26.GetLatestBlockResponse>): _26.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _26.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingRequest;
                    fromJSON(_: any): _26.GetSyncingRequest;
                    toJSON(_: _26.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_26.GetSyncingRequest>): _26.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _26.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingResponse;
                    fromJSON(object: any): _26.GetSyncingResponse;
                    toJSON(message: _26.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_26.GetSyncingResponse>): _26.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _26.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoRequest;
                    fromJSON(_: any): _26.GetNodeInfoRequest;
                    toJSON(_: _26.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_26.GetNodeInfoRequest>): _26.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _26.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoResponse;
                    fromJSON(object: any): _26.GetNodeInfoResponse;
                    toJSON(message: _26.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_26.GetNodeInfoResponse>): _26.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _26.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.VersionInfo;
                    fromJSON(object: any): _26.VersionInfo;
                    toJSON(message: _26.VersionInfo): unknown;
                    fromPartial(object: Partial<_26.VersionInfo>): _26.VersionInfo;
                };
                Module: {
                    encode(message: _26.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Module;
                    fromJSON(object: any): _26.Module;
                    toJSON(message: _26.Module): unknown;
                    fromPartial(object: Partial<_26.Module>): _26.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _27.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Coin;
                fromJSON(object: any): _27.Coin;
                toJSON(message: _27.Coin): unknown;
                fromPartial(object: Partial<_27.Coin>): _27.Coin;
            };
            DecCoin: {
                encode(message: _27.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecCoin;
                fromJSON(object: any): _27.DecCoin;
                toJSON(message: _27.DecCoin): unknown;
                fromPartial(object: Partial<_27.DecCoin>): _27.DecCoin;
            };
            IntProto: {
                encode(message: _27.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.IntProto;
                fromJSON(object: any): _27.IntProto;
                toJSON(message: _27.IntProto): unknown;
                fromPartial(object: Partial<_27.IntProto>): _27.IntProto;
            };
            DecProto: {
                encode(message: _27.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecProto;
                fromJSON(object: any): _27.DecProto;
                toJSON(message: _27.DecProto): unknown;
                fromPartial(object: Partial<_27.DecProto>): _27.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _29.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisOwners;
                fromJSON(object: any): _29.GenesisOwners;
                toJSON(message: _29.GenesisOwners): unknown;
                fromPartial(object: Partial<_29.GenesisOwners>): _29.GenesisOwners;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromJSON(object: any): _29.GenesisState;
                toJSON(message: _29.GenesisState): unknown;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
            };
            Capability: {
                encode(message: _28.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Capability;
                fromJSON(object: any): _28.Capability;
                toJSON(message: _28.Capability): unknown;
                fromPartial(object: Partial<_28.Capability>): _28.Capability;
            };
            Owner: {
                encode(message: _28.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Owner;
                fromJSON(object: any): _28.Owner;
                toJSON(message: _28.Owner): unknown;
                fromPartial(object: Partial<_28.Owner>): _28.Owner;
            };
            CapabilityOwners: {
                encode(message: _28.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.CapabilityOwners;
                fromJSON(object: any): _28.CapabilityOwners;
                toJSON(message: _28.CapabilityOwners): unknown;
                fromPartial(object: Partial<_28.CapabilityOwners>): _28.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            MsgVerifyInvariant: {
                encode(message: _31.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariant;
                fromJSON(object: any): _31.MsgVerifyInvariant;
                toJSON(message: _31.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_31.MsgVerifyInvariant>): _31.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _31.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariantResponse;
                fromJSON(_: any): _31.MsgVerifyInvariantResponse;
                toJSON(_: _31.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_31.MsgVerifyInvariantResponse>): _31.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromJSON(object: any): _30.GenesisState;
                toJSON(message: _30.GenesisState): unknown;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromJSON(object: any): _32.PubKey;
                toJSON(message: _32.PubKey): unknown;
                fromPartial(object: Partial<_32.PubKey>): _32.PubKey;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromJSON(object: any): _32.PrivKey;
                toJSON(message: _32.PrivKey): unknown;
                fromPartial(object: Partial<_32.PrivKey>): _32.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _33.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.BIP44Params;
                    fromJSON(object: any): _33.BIP44Params;
                    toJSON(message: _33.BIP44Params): unknown;
                    fromPartial(object: Partial<_33.BIP44Params>): _33.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _34.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record;
                    fromJSON(object: any): _34.Record;
                    toJSON(message: _34.Record): unknown;
                    fromPartial(object: Partial<_34.Record>): _34.Record;
                };
                Record_Local: {
                    encode(message: _34.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Local;
                    fromJSON(object: any): _34.Record_Local;
                    toJSON(message: _34.Record_Local): unknown;
                    fromPartial(object: Partial<_34.Record_Local>): _34.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _34.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Ledger;
                    fromJSON(object: any): _34.Record_Ledger;
                    toJSON(message: _34.Record_Ledger): unknown;
                    fromPartial(object: Partial<_34.Record_Ledger>): _34.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _34.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Multi;
                    fromJSON(_: any): _34.Record_Multi;
                    toJSON(_: _34.Record_Multi): unknown;
                    fromPartial(_: Partial<_34.Record_Multi>): _34.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _34.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Offline;
                    fromJSON(_: any): _34.Record_Offline;
                    toJSON(_: _34.Record_Offline): unknown;
                    fromPartial(_: Partial<_34.Record_Offline>): _34.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _35.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.LegacyAminoPubKey;
                fromJSON(object: any): _35.LegacyAminoPubKey;
                toJSON(message: _35.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_35.LegacyAminoPubKey>): _35.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromJSON(object: any): _36.PubKey;
                toJSON(message: _36.PubKey): unknown;
                fromPartial(object: Partial<_36.PubKey>): _36.PubKey;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromJSON(object: any): _36.PrivKey;
                toJSON(message: _36.PrivKey): unknown;
                fromPartial(object: Partial<_36.PrivKey>): _36.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PubKey;
                fromJSON(object: any): _37.PubKey;
                toJSON(message: _37.PubKey): unknown;
                fromPartial(object: Partial<_37.PubKey>): _37.PubKey;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PrivKey;
                fromJSON(object: any): _37.PrivKey;
                toJSON(message: _37.PrivKey): unknown;
                fromPartial(object: Partial<_37.PrivKey>): _37.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                validatorOutstandingRewards(request: _40.QueryValidatorOutstandingRewardsRequest): Promise<_40.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _40.QueryValidatorCommissionRequest): Promise<_40.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _40.QueryValidatorSlashesRequest): Promise<_40.QueryValidatorSlashesResponse>;
                delegationRewards(request: _40.QueryDelegationRewardsRequest): Promise<_40.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _40.QueryDelegationTotalRewardsRequest): Promise<_40.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _40.QueryDelegatorValidatorsRequest): Promise<_40.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _40.QueryDelegatorWithdrawAddressRequest): Promise<_40.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _40.QueryCommunityPoolRequest): Promise<_40.QueryCommunityPoolResponse>;
            };
            MsgSetWithdrawAddress: {
                encode(message: _41.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddress;
                fromJSON(object: any): _41.MsgSetWithdrawAddress;
                toJSON(message: _41.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_41.MsgSetWithdrawAddress>): _41.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _41.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _41.MsgSetWithdrawAddressResponse;
                toJSON(_: _41.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_41.MsgSetWithdrawAddressResponse>): _41.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _41.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _41.MsgWithdrawDelegatorReward;
                toJSON(message: _41.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_41.MsgWithdrawDelegatorReward>): _41.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _41.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _41.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _41.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_41.MsgWithdrawDelegatorRewardResponse>): _41.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _41.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _41.MsgWithdrawValidatorCommission;
                toJSON(message: _41.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_41.MsgWithdrawValidatorCommission>): _41.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _41.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _41.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _41.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_41.MsgWithdrawValidatorCommissionResponse>): _41.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _41.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPool;
                fromJSON(object: any): _41.MsgFundCommunityPool;
                toJSON(message: _41.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_41.MsgFundCommunityPool>): _41.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _41.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _41.MsgFundCommunityPoolResponse;
                toJSON(_: _41.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_41.MsgFundCommunityPoolResponse>): _41.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsRequest;
                fromJSON(_: any): _40.QueryParamsRequest;
                toJSON(_: _40.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsResponse;
                fromJSON(object: any): _40.QueryParamsResponse;
                toJSON(message: _40.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _40.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _40.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _40.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_40.QueryValidatorOutstandingRewardsRequest>): _40.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _40.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _40.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _40.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_40.QueryValidatorOutstandingRewardsResponse>): _40.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _40.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionRequest;
                fromJSON(object: any): _40.QueryValidatorCommissionRequest;
                toJSON(message: _40.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_40.QueryValidatorCommissionRequest>): _40.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _40.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionResponse;
                fromJSON(object: any): _40.QueryValidatorCommissionResponse;
                toJSON(message: _40.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_40.QueryValidatorCommissionResponse>): _40.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _40.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesRequest;
                fromJSON(object: any): _40.QueryValidatorSlashesRequest;
                toJSON(message: _40.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_40.QueryValidatorSlashesRequest>): _40.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _40.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesResponse;
                fromJSON(object: any): _40.QueryValidatorSlashesResponse;
                toJSON(message: _40.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_40.QueryValidatorSlashesResponse>): _40.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _40.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsRequest;
                fromJSON(object: any): _40.QueryDelegationRewardsRequest;
                toJSON(message: _40.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_40.QueryDelegationRewardsRequest>): _40.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _40.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsResponse;
                fromJSON(object: any): _40.QueryDelegationRewardsResponse;
                toJSON(message: _40.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_40.QueryDelegationRewardsResponse>): _40.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _40.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _40.QueryDelegationTotalRewardsRequest;
                toJSON(message: _40.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_40.QueryDelegationTotalRewardsRequest>): _40.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _40.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _40.QueryDelegationTotalRewardsResponse;
                toJSON(message: _40.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_40.QueryDelegationTotalRewardsResponse>): _40.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _40.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _40.QueryDelegatorValidatorsRequest;
                toJSON(message: _40.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_40.QueryDelegatorValidatorsRequest>): _40.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _40.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _40.QueryDelegatorValidatorsResponse;
                toJSON(message: _40.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_40.QueryDelegatorValidatorsResponse>): _40.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _40.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _40.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _40.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_40.QueryDelegatorWithdrawAddressRequest>): _40.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _40.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _40.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _40.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_40.QueryDelegatorWithdrawAddressResponse>): _40.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _40.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolRequest;
                fromJSON(_: any): _40.QueryCommunityPoolRequest;
                toJSON(_: _40.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_40.QueryCommunityPoolRequest>): _40.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _40.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolResponse;
                fromJSON(object: any): _40.QueryCommunityPoolResponse;
                toJSON(message: _40.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_40.QueryCommunityPoolResponse>): _40.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _39.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorWithdrawInfo;
                fromJSON(object: any): _39.DelegatorWithdrawInfo;
                toJSON(message: _39.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_39.DelegatorWithdrawInfo>): _39.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _39.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _39.ValidatorOutstandingRewardsRecord;
                toJSON(message: _39.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorOutstandingRewardsRecord>): _39.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _39.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _39.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _39.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorAccumulatedCommissionRecord>): _39.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _39.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _39.ValidatorHistoricalRewardsRecord;
                toJSON(message: _39.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorHistoricalRewardsRecord>): _39.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _39.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _39.ValidatorCurrentRewardsRecord;
                toJSON(message: _39.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorCurrentRewardsRecord>): _39.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _39.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorStartingInfoRecord;
                fromJSON(object: any): _39.DelegatorStartingInfoRecord;
                toJSON(message: _39.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_39.DelegatorStartingInfoRecord>): _39.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _39.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEventRecord;
                fromJSON(object: any): _39.ValidatorSlashEventRecord;
                toJSON(message: _39.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorSlashEventRecord>): _39.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromJSON(object: any): _39.GenesisState;
                toJSON(message: _39.GenesisState): unknown;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
            };
            Params: {
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Params;
                fromJSON(object: any): _38.Params;
                toJSON(message: _38.Params): unknown;
                fromPartial(object: Partial<_38.Params>): _38.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _38.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorHistoricalRewards;
                fromJSON(object: any): _38.ValidatorHistoricalRewards;
                toJSON(message: _38.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_38.ValidatorHistoricalRewards>): _38.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _38.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorCurrentRewards;
                fromJSON(object: any): _38.ValidatorCurrentRewards;
                toJSON(message: _38.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_38.ValidatorCurrentRewards>): _38.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _38.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorAccumulatedCommission;
                fromJSON(object: any): _38.ValidatorAccumulatedCommission;
                toJSON(message: _38.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_38.ValidatorAccumulatedCommission>): _38.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _38.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorOutstandingRewards;
                fromJSON(object: any): _38.ValidatorOutstandingRewards;
                toJSON(message: _38.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_38.ValidatorOutstandingRewards>): _38.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _38.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvent;
                fromJSON(object: any): _38.ValidatorSlashEvent;
                toJSON(message: _38.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_38.ValidatorSlashEvent>): _38.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _38.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvents;
                fromJSON(object: any): _38.ValidatorSlashEvents;
                toJSON(message: _38.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_38.ValidatorSlashEvents>): _38.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _38.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.FeePool;
                fromJSON(object: any): _38.FeePool;
                toJSON(message: _38.FeePool): unknown;
                fromPartial(object: Partial<_38.FeePool>): _38.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _38.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposal;
                fromJSON(object: any): _38.CommunityPoolSpendProposal;
                toJSON(message: _38.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_38.CommunityPoolSpendProposal>): _38.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _38.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorStartingInfo;
                fromJSON(object: any): _38.DelegatorStartingInfo;
                toJSON(message: _38.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_38.DelegatorStartingInfo>): _38.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _38.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegationDelegatorReward;
                fromJSON(object: any): _38.DelegationDelegatorReward;
                toJSON(message: _38.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_38.DelegationDelegatorReward>): _38.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _38.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _38.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _38.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_38.CommunityPoolSpendProposalWithDeposit>): _38.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _44.QueryEvidenceRequest): Promise<_44.QueryEvidenceResponse>;
                allEvidence(request?: _44.QueryAllEvidenceRequest): Promise<_44.QueryAllEvidenceResponse>;
            };
            MsgSubmitEvidence: {
                encode(message: _45.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidence;
                fromJSON(object: any): _45.MsgSubmitEvidence;
                toJSON(message: _45.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_45.MsgSubmitEvidence>): _45.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _45.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _45.MsgSubmitEvidenceResponse;
                toJSON(message: _45.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_45.MsgSubmitEvidenceResponse>): _45.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _44.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceRequest;
                fromJSON(object: any): _44.QueryEvidenceRequest;
                toJSON(message: _44.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_44.QueryEvidenceRequest>): _44.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _44.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceResponse;
                fromJSON(object: any): _44.QueryEvidenceResponse;
                toJSON(message: _44.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_44.QueryEvidenceResponse>): _44.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _44.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceRequest;
                fromJSON(object: any): _44.QueryAllEvidenceRequest;
                toJSON(message: _44.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_44.QueryAllEvidenceRequest>): _44.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _44.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceResponse;
                fromJSON(object: any): _44.QueryAllEvidenceResponse;
                toJSON(message: _44.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_44.QueryAllEvidenceResponse>): _44.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromJSON(object: any): _43.GenesisState;
                toJSON(message: _43.GenesisState): unknown;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            };
            Equivocation: {
                encode(message: _42.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Equivocation;
                fromJSON(object: any): _42.Equivocation;
                toJSON(message: _42.Equivocation): unknown;
                fromPartial(object: Partial<_42.Equivocation>): _42.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _48.QueryAllowanceRequest): Promise<_48.QueryAllowanceResponse>;
                allowances(request: _48.QueryAllowancesRequest): Promise<_48.QueryAllowancesResponse>;
                allowancesByGranter(request: _48.QueryAllowancesByGranterRequest): Promise<_48.QueryAllowancesByGranterResponse>;
            };
            MsgGrantAllowance: {
                encode(message: _49.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowance;
                fromJSON(object: any): _49.MsgGrantAllowance;
                toJSON(message: _49.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_49.MsgGrantAllowance>): _49.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _49.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowanceResponse;
                fromJSON(_: any): _49.MsgGrantAllowanceResponse;
                toJSON(_: _49.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_49.MsgGrantAllowanceResponse>): _49.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _49.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowance;
                fromJSON(object: any): _49.MsgRevokeAllowance;
                toJSON(message: _49.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_49.MsgRevokeAllowance>): _49.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _49.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _49.MsgRevokeAllowanceResponse;
                toJSON(_: _49.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_49.MsgRevokeAllowanceResponse>): _49.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _48.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceRequest;
                fromJSON(object: any): _48.QueryAllowanceRequest;
                toJSON(message: _48.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllowanceRequest>): _48.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _48.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceResponse;
                fromJSON(object: any): _48.QueryAllowanceResponse;
                toJSON(message: _48.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllowanceResponse>): _48.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _48.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesRequest;
                fromJSON(object: any): _48.QueryAllowancesRequest;
                toJSON(message: _48.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllowancesRequest>): _48.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _48.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesResponse;
                fromJSON(object: any): _48.QueryAllowancesResponse;
                toJSON(message: _48.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllowancesResponse>): _48.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _48.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _48.QueryAllowancesByGranterRequest;
                toJSON(message: _48.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllowancesByGranterRequest>): _48.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _48.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _48.QueryAllowancesByGranterResponse;
                toJSON(message: _48.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllowancesByGranterResponse>): _48.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
            BasicAllowance: {
                encode(message: _46.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.BasicAllowance;
                fromJSON(object: any): _46.BasicAllowance;
                toJSON(message: _46.BasicAllowance): unknown;
                fromPartial(object: Partial<_46.BasicAllowance>): _46.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _46.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PeriodicAllowance;
                fromJSON(object: any): _46.PeriodicAllowance;
                toJSON(message: _46.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_46.PeriodicAllowance>): _46.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _46.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.AllowedMsgAllowance;
                fromJSON(object: any): _46.AllowedMsgAllowance;
                toJSON(message: _46.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_46.AllowedMsgAllowance>): _46.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _46.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Grant;
                fromJSON(object: any): _46.Grant;
                toJSON(message: _46.Grant): unknown;
                fromPartial(object: Partial<_46.Grant>): _46.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _53.QueryProposalRequest): Promise<_53.QueryProposalResponse>;
                proposals(request: _53.QueryProposalsRequest): Promise<_53.QueryProposalsResponse>;
                vote(request: _53.QueryVoteRequest): Promise<_53.QueryVoteResponse>;
                votes(request: _53.QueryVotesRequest): Promise<_53.QueryVotesResponse>;
                params(request: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                deposit(request: _53.QueryDepositRequest): Promise<_53.QueryDepositResponse>;
                deposits(request: _53.QueryDepositsRequest): Promise<_53.QueryDepositsResponse>;
                tallyResult(request: _53.QueryTallyResultRequest): Promise<_53.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _54.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposal;
                fromJSON(object: any): _54.MsgSubmitProposal;
                toJSON(message: _54.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_54.MsgSubmitProposal>): _54.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _54.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposalResponse;
                fromJSON(object: any): _54.MsgSubmitProposalResponse;
                toJSON(message: _54.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_54.MsgSubmitProposalResponse>): _54.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _54.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgExecLegacyContent;
                fromJSON(object: any): _54.MsgExecLegacyContent;
                toJSON(message: _54.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_54.MsgExecLegacyContent>): _54.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _54.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgExecLegacyContentResponse;
                fromJSON(_: any): _54.MsgExecLegacyContentResponse;
                toJSON(_: _54.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_54.MsgExecLegacyContentResponse>): _54.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _54.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVote;
                fromJSON(object: any): _54.MsgVote;
                toJSON(message: _54.MsgVote): unknown;
                fromPartial(object: Partial<_54.MsgVote>): _54.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _54.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteResponse;
                fromJSON(_: any): _54.MsgVoteResponse;
                toJSON(_: _54.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_54.MsgVoteResponse>): _54.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _54.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeighted;
                fromJSON(object: any): _54.MsgVoteWeighted;
                toJSON(message: _54.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_54.MsgVoteWeighted>): _54.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _54.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeightedResponse;
                fromJSON(_: any): _54.MsgVoteWeightedResponse;
                toJSON(_: _54.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_54.MsgVoteWeightedResponse>): _54.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _54.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDeposit;
                fromJSON(object: any): _54.MsgDeposit;
                toJSON(message: _54.MsgDeposit): unknown;
                fromPartial(object: Partial<_54.MsgDeposit>): _54.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _54.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDepositResponse;
                fromJSON(_: any): _54.MsgDepositResponse;
                toJSON(_: _54.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_54.MsgDepositResponse>): _54.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _53.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalRequest;
                fromJSON(object: any): _53.QueryProposalRequest;
                toJSON(message: _53.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_53.QueryProposalRequest>): _53.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _53.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalResponse;
                fromJSON(object: any): _53.QueryProposalResponse;
                toJSON(message: _53.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_53.QueryProposalResponse>): _53.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _53.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsRequest;
                fromJSON(object: any): _53.QueryProposalsRequest;
                toJSON(message: _53.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_53.QueryProposalsRequest>): _53.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _53.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsResponse;
                fromJSON(object: any): _53.QueryProposalsResponse;
                toJSON(message: _53.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_53.QueryProposalsResponse>): _53.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _53.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteRequest;
                fromJSON(object: any): _53.QueryVoteRequest;
                toJSON(message: _53.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_53.QueryVoteRequest>): _53.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _53.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteResponse;
                fromJSON(object: any): _53.QueryVoteResponse;
                toJSON(message: _53.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_53.QueryVoteResponse>): _53.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _53.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesRequest;
                fromJSON(object: any): _53.QueryVotesRequest;
                toJSON(message: _53.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_53.QueryVotesRequest>): _53.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _53.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesResponse;
                fromJSON(object: any): _53.QueryVotesResponse;
                toJSON(message: _53.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_53.QueryVotesResponse>): _53.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _53.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsRequest;
                fromJSON(object: any): _53.QueryParamsRequest;
                toJSON(message: _53.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _53.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsResponse;
                fromJSON(object: any): _53.QueryParamsResponse;
                toJSON(message: _53.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _53.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositRequest;
                fromJSON(object: any): _53.QueryDepositRequest;
                toJSON(message: _53.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_53.QueryDepositRequest>): _53.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _53.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositResponse;
                fromJSON(object: any): _53.QueryDepositResponse;
                toJSON(message: _53.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_53.QueryDepositResponse>): _53.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _53.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsRequest;
                fromJSON(object: any): _53.QueryDepositsRequest;
                toJSON(message: _53.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_53.QueryDepositsRequest>): _53.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _53.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsResponse;
                fromJSON(object: any): _53.QueryDepositsResponse;
                toJSON(message: _53.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_53.QueryDepositsResponse>): _53.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _53.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultRequest;
                fromJSON(object: any): _53.QueryTallyResultRequest;
                toJSON(message: _53.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_53.QueryTallyResultRequest>): _53.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _53.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultResponse;
                fromJSON(object: any): _53.QueryTallyResultResponse;
                toJSON(message: _53.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_53.QueryTallyResultResponse>): _53.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _52.VoteOption;
            voteOptionToJSON(object: _52.VoteOption): string;
            proposalStatusFromJSON(object: any): _52.ProposalStatus;
            proposalStatusToJSON(object: _52.ProposalStatus): string;
            VoteOption: typeof _52.VoteOption;
            VoteOptionSDKType: typeof _52.VoteOption;
            ProposalStatus: typeof _52.ProposalStatus;
            ProposalStatusSDKType: typeof _52.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _52.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.WeightedVoteOption;
                fromJSON(object: any): _52.WeightedVoteOption;
                toJSON(message: _52.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_52.WeightedVoteOption>): _52.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _52.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Deposit;
                fromJSON(object: any): _52.Deposit;
                toJSON(message: _52.Deposit): unknown;
                fromPartial(object: Partial<_52.Deposit>): _52.Deposit;
            };
            Proposal: {
                encode(message: _52.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Proposal;
                fromJSON(object: any): _52.Proposal;
                toJSON(message: _52.Proposal): unknown;
                fromPartial(object: Partial<_52.Proposal>): _52.Proposal;
            };
            TallyResult: {
                encode(message: _52.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyResult;
                fromJSON(object: any): _52.TallyResult;
                toJSON(message: _52.TallyResult): unknown;
                fromPartial(object: Partial<_52.TallyResult>): _52.TallyResult;
            };
            Vote: {
                encode(message: _52.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Vote;
                fromJSON(object: any): _52.Vote;
                toJSON(message: _52.Vote): unknown;
                fromPartial(object: Partial<_52.Vote>): _52.Vote;
            };
            DepositParams: {
                encode(message: _52.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DepositParams;
                fromJSON(object: any): _52.DepositParams;
                toJSON(message: _52.DepositParams): unknown;
                fromPartial(object: Partial<_52.DepositParams>): _52.DepositParams;
            };
            VotingParams: {
                encode(message: _52.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.VotingParams;
                fromJSON(object: any): _52.VotingParams;
                toJSON(message: _52.VotingParams): unknown;
                fromPartial(object: Partial<_52.VotingParams>): _52.VotingParams;
            };
            TallyParams: {
                encode(message: _52.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyParams;
                fromJSON(object: any): _52.TallyParams;
                toJSON(message: _52.TallyParams): unknown;
                fromPartial(object: Partial<_52.TallyParams>): _52.TallyParams;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _58.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposal;
                fromJSON(object: any): _58.MsgSubmitProposal;
                toJSON(message: _58.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_58.MsgSubmitProposal>): _58.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _58.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposalResponse;
                fromJSON(object: any): _58.MsgSubmitProposalResponse;
                toJSON(message: _58.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_58.MsgSubmitProposalResponse>): _58.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _58.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVote;
                fromJSON(object: any): _58.MsgVote;
                toJSON(message: _58.MsgVote): unknown;
                fromPartial(object: Partial<_58.MsgVote>): _58.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _58.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteResponse;
                fromJSON(_: any): _58.MsgVoteResponse;
                toJSON(_: _58.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_58.MsgVoteResponse>): _58.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _58.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeighted;
                fromJSON(object: any): _58.MsgVoteWeighted;
                toJSON(message: _58.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_58.MsgVoteWeighted>): _58.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _58.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeightedResponse;
                fromJSON(_: any): _58.MsgVoteWeightedResponse;
                toJSON(_: _58.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_58.MsgVoteWeightedResponse>): _58.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _58.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeposit;
                fromJSON(object: any): _58.MsgDeposit;
                toJSON(message: _58.MsgDeposit): unknown;
                fromPartial(object: Partial<_58.MsgDeposit>): _58.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _58.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDepositResponse;
                fromJSON(_: any): _58.MsgDepositResponse;
                toJSON(_: _58.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_58.MsgDepositResponse>): _58.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _57.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalRequest;
                fromJSON(object: any): _57.QueryProposalRequest;
                toJSON(message: _57.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_57.QueryProposalRequest>): _57.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _57.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalResponse;
                fromJSON(object: any): _57.QueryProposalResponse;
                toJSON(message: _57.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_57.QueryProposalResponse>): _57.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _57.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsRequest;
                fromJSON(object: any): _57.QueryProposalsRequest;
                toJSON(message: _57.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_57.QueryProposalsRequest>): _57.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _57.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsResponse;
                fromJSON(object: any): _57.QueryProposalsResponse;
                toJSON(message: _57.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_57.QueryProposalsResponse>): _57.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _57.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteRequest;
                fromJSON(object: any): _57.QueryVoteRequest;
                toJSON(message: _57.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_57.QueryVoteRequest>): _57.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _57.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteResponse;
                fromJSON(object: any): _57.QueryVoteResponse;
                toJSON(message: _57.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_57.QueryVoteResponse>): _57.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _57.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesRequest;
                fromJSON(object: any): _57.QueryVotesRequest;
                toJSON(message: _57.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_57.QueryVotesRequest>): _57.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _57.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesResponse;
                fromJSON(object: any): _57.QueryVotesResponse;
                toJSON(message: _57.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_57.QueryVotesResponse>): _57.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                fromJSON(object: any): _57.QueryParamsRequest;
                toJSON(message: _57.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                fromJSON(object: any): _57.QueryParamsResponse;
                toJSON(message: _57.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _57.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositRequest;
                fromJSON(object: any): _57.QueryDepositRequest;
                toJSON(message: _57.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_57.QueryDepositRequest>): _57.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _57.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositResponse;
                fromJSON(object: any): _57.QueryDepositResponse;
                toJSON(message: _57.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_57.QueryDepositResponse>): _57.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _57.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsRequest;
                fromJSON(object: any): _57.QueryDepositsRequest;
                toJSON(message: _57.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_57.QueryDepositsRequest>): _57.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _57.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsResponse;
                fromJSON(object: any): _57.QueryDepositsResponse;
                toJSON(message: _57.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_57.QueryDepositsResponse>): _57.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _57.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultRequest;
                fromJSON(object: any): _57.QueryTallyResultRequest;
                toJSON(message: _57.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_57.QueryTallyResultRequest>): _57.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _57.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultResponse;
                fromJSON(object: any): _57.QueryTallyResultResponse;
                toJSON(message: _57.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_57.QueryTallyResultResponse>): _57.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _56.VoteOption;
            voteOptionToJSON(object: _56.VoteOption): string;
            proposalStatusFromJSON(object: any): _56.ProposalStatus;
            proposalStatusToJSON(object: _56.ProposalStatus): string;
            VoteOption: typeof _56.VoteOption;
            VoteOptionSDKType: typeof _56.VoteOption;
            ProposalStatus: typeof _56.ProposalStatus;
            ProposalStatusSDKType: typeof _56.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _56.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.WeightedVoteOption;
                fromJSON(object: any): _56.WeightedVoteOption;
                toJSON(message: _56.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_56.WeightedVoteOption>): _56.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _56.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TextProposal;
                fromJSON(object: any): _56.TextProposal;
                toJSON(message: _56.TextProposal): unknown;
                fromPartial(object: Partial<_56.TextProposal>): _56.TextProposal;
            };
            Deposit: {
                encode(message: _56.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Deposit;
                fromJSON(object: any): _56.Deposit;
                toJSON(message: _56.Deposit): unknown;
                fromPartial(object: Partial<_56.Deposit>): _56.Deposit;
            };
            Proposal: {
                encode(message: _56.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Proposal;
                fromJSON(object: any): _56.Proposal;
                toJSON(message: _56.Proposal): unknown;
                fromPartial(object: Partial<_56.Proposal>): _56.Proposal;
            };
            TallyResult: {
                encode(message: _56.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyResult;
                fromJSON(object: any): _56.TallyResult;
                toJSON(message: _56.TallyResult): unknown;
                fromPartial(object: Partial<_56.TallyResult>): _56.TallyResult;
            };
            Vote: {
                encode(message: _56.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Vote;
                fromJSON(object: any): _56.Vote;
                toJSON(message: _56.Vote): unknown;
                fromPartial(object: Partial<_56.Vote>): _56.Vote;
            };
            DepositParams: {
                encode(message: _56.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DepositParams;
                fromJSON(object: any): _56.DepositParams;
                toJSON(message: _56.DepositParams): unknown;
                fromPartial(object: Partial<_56.DepositParams>): _56.DepositParams;
            };
            VotingParams: {
                encode(message: _56.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.VotingParams;
                fromJSON(object: any): _56.VotingParams;
                toJSON(message: _56.VotingParams): unknown;
                fromPartial(object: Partial<_56.VotingParams>): _56.VotingParams;
            };
            TallyParams: {
                encode(message: _56.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyParams;
                fromJSON(object: any): _56.TallyParams;
                toJSON(message: _56.TallyParams): unknown;
                fromPartial(object: Partial<_56.TallyParams>): _56.TallyParams;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromJSON(object: any): _55.GenesisState;
                toJSON(message: _55.GenesisState): unknown;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _61.QueryGroupInfoRequest): Promise<_61.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _61.QueryGroupPolicyInfoRequest): Promise<_61.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _61.QueryGroupMembersRequest): Promise<_61.QueryGroupMembersResponse>;
                groupsByAdmin(request: _61.QueryGroupsByAdminRequest): Promise<_61.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _61.QueryGroupPoliciesByGroupRequest): Promise<_61.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _61.QueryGroupPoliciesByAdminRequest): Promise<_61.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _61.QueryProposalsByGroupPolicyRequest): Promise<_61.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _61.QueryVoteByProposalVoterRequest): Promise<_61.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _61.QueryVotesByProposalRequest): Promise<_61.QueryVotesByProposalResponse>;
                votesByVoter(request: _61.QueryVotesByVoterRequest): Promise<_61.QueryVotesByVoterResponse>;
                groupsByMember(request: _61.QueryGroupsByMemberRequest): Promise<_61.QueryGroupsByMemberResponse>;
                tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
            };
            voteOptionFromJSON(object: any): _63.VoteOption;
            voteOptionToJSON(object: _63.VoteOption): string;
            proposalStatusFromJSON(object: any): _63.ProposalStatus;
            proposalStatusToJSON(object: _63.ProposalStatus): string;
            proposalResultFromJSON(object: any): _63.ProposalResult;
            proposalResultToJSON(object: _63.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _63.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _63.ProposalExecutorResult): string;
            VoteOption: typeof _63.VoteOption;
            VoteOptionSDKType: typeof _63.VoteOption;
            ProposalStatus: typeof _63.ProposalStatus;
            ProposalStatusSDKType: typeof _63.ProposalStatus;
            ProposalResult: typeof _63.ProposalResult;
            ProposalResultSDKType: typeof _63.ProposalResult;
            ProposalExecutorResult: typeof _63.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _63.ProposalExecutorResult;
            Member: {
                encode(message: _63.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Member;
                fromJSON(object: any): _63.Member;
                toJSON(message: _63.Member): unknown;
                fromPartial(object: Partial<_63.Member>): _63.Member;
            };
            Members: {
                encode(message: _63.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Members;
                fromJSON(object: any): _63.Members;
                toJSON(message: _63.Members): unknown;
                fromPartial(object: Partial<_63.Members>): _63.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _63.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ThresholdDecisionPolicy;
                fromJSON(object: any): _63.ThresholdDecisionPolicy;
                toJSON(message: _63.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_63.ThresholdDecisionPolicy>): _63.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _63.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PercentageDecisionPolicy;
                fromJSON(object: any): _63.PercentageDecisionPolicy;
                toJSON(message: _63.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_63.PercentageDecisionPolicy>): _63.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _63.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DecisionPolicyWindows;
                fromJSON(object: any): _63.DecisionPolicyWindows;
                toJSON(message: _63.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_63.DecisionPolicyWindows>): _63.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _63.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupInfo;
                fromJSON(object: any): _63.GroupInfo;
                toJSON(message: _63.GroupInfo): unknown;
                fromPartial(object: Partial<_63.GroupInfo>): _63.GroupInfo;
            };
            GroupMember: {
                encode(message: _63.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupMember;
                fromJSON(object: any): _63.GroupMember;
                toJSON(message: _63.GroupMember): unknown;
                fromPartial(object: Partial<_63.GroupMember>): _63.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _63.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupPolicyInfo;
                fromJSON(object: any): _63.GroupPolicyInfo;
                toJSON(message: _63.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_63.GroupPolicyInfo>): _63.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _63.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Proposal;
                fromJSON(object: any): _63.Proposal;
                toJSON(message: _63.Proposal): unknown;
                fromPartial(object: Partial<_63.Proposal>): _63.Proposal;
            };
            TallyResult: {
                encode(message: _63.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TallyResult;
                fromJSON(object: any): _63.TallyResult;
                toJSON(message: _63.TallyResult): unknown;
                fromPartial(object: Partial<_63.TallyResult>): _63.TallyResult;
            };
            Vote: {
                encode(message: _63.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Vote;
                fromJSON(object: any): _63.Vote;
                toJSON(message: _63.Vote): unknown;
                fromPartial(object: Partial<_63.Vote>): _63.Vote;
            };
            execFromJSON(object: any): _62.Exec;
            execToJSON(object: _62.Exec): string;
            Exec: typeof _62.Exec;
            ExecSDKType: typeof _62.Exec;
            MsgCreateGroup: {
                encode(message: _62.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroup;
                fromJSON(object: any): _62.MsgCreateGroup;
                toJSON(message: _62.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroup>): _62.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _62.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupResponse;
                fromJSON(object: any): _62.MsgCreateGroupResponse;
                toJSON(message: _62.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupResponse>): _62.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _62.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMembers;
                fromJSON(object: any): _62.MsgUpdateGroupMembers;
                toJSON(message: _62.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupMembers>): _62.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _62.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _62.MsgUpdateGroupMembersResponse;
                toJSON(_: _62.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupMembersResponse>): _62.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _62.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupAdmin;
                fromJSON(object: any): _62.MsgUpdateGroupAdmin;
                toJSON(message: _62.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupAdmin>): _62.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _62.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _62.MsgUpdateGroupAdminResponse;
                toJSON(_: _62.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupAdminResponse>): _62.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _62.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMetadata;
                fromJSON(object: any): _62.MsgUpdateGroupMetadata;
                toJSON(message: _62.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupMetadata>): _62.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _62.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _62.MsgUpdateGroupMetadataResponse;
                toJSON(_: _62.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupMetadataResponse>): _62.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _62.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupPolicy;
                fromJSON(object: any): _62.MsgCreateGroupPolicy;
                toJSON(message: _62.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupPolicy>): _62.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _62.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _62.MsgCreateGroupPolicyResponse;
                toJSON(message: _62.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupPolicyResponse>): _62.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _62.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _62.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _62.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyAdmin>): _62.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _62.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _62.MsgCreateGroupWithPolicy;
                toJSON(message: _62.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupWithPolicy>): _62.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _62.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _62.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _62.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupWithPolicyResponse>): _62.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _62.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _62.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _62.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyAdminResponse>): _62.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _62.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _62.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _62.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyDecisionPolicy>): _62.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _62.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _62.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyDecisionPolicyResponse>): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _62.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _62.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _62.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyMetadata>): _62.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _62.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _62.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _62.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyMetadataResponse>): _62.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _62.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposal;
                fromJSON(object: any): _62.MsgSubmitProposal;
                toJSON(message: _62.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_62.MsgSubmitProposal>): _62.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _62.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposalResponse;
                fromJSON(object: any): _62.MsgSubmitProposalResponse;
                toJSON(message: _62.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_62.MsgSubmitProposalResponse>): _62.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _62.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgWithdrawProposal;
                fromJSON(object: any): _62.MsgWithdrawProposal;
                toJSON(message: _62.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_62.MsgWithdrawProposal>): _62.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _62.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgWithdrawProposalResponse;
                fromJSON(_: any): _62.MsgWithdrawProposalResponse;
                toJSON(_: _62.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_62.MsgWithdrawProposalResponse>): _62.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _62.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVote;
                fromJSON(object: any): _62.MsgVote;
                toJSON(message: _62.MsgVote): unknown;
                fromPartial(object: Partial<_62.MsgVote>): _62.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _62.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteResponse;
                fromJSON(_: any): _62.MsgVoteResponse;
                toJSON(_: _62.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_62.MsgVoteResponse>): _62.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _62.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExec;
                fromJSON(object: any): _62.MsgExec;
                toJSON(message: _62.MsgExec): unknown;
                fromPartial(object: Partial<_62.MsgExec>): _62.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _62.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExecResponse;
                fromJSON(_: any): _62.MsgExecResponse;
                toJSON(_: _62.MsgExecResponse): unknown;
                fromPartial(_: Partial<_62.MsgExecResponse>): _62.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _62.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgLeaveGroup;
                fromJSON(object: any): _62.MsgLeaveGroup;
                toJSON(message: _62.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_62.MsgLeaveGroup>): _62.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _62.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgLeaveGroupResponse;
                fromJSON(_: any): _62.MsgLeaveGroupResponse;
                toJSON(_: _62.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_62.MsgLeaveGroupResponse>): _62.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _61.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupInfoRequest;
                fromJSON(object: any): _61.QueryGroupInfoRequest;
                toJSON(message: _61.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupInfoRequest>): _61.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _61.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupInfoResponse;
                fromJSON(object: any): _61.QueryGroupInfoResponse;
                toJSON(message: _61.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupInfoResponse>): _61.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _61.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _61.QueryGroupPolicyInfoRequest;
                toJSON(message: _61.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupPolicyInfoRequest>): _61.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _61.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _61.QueryGroupPolicyInfoResponse;
                toJSON(message: _61.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupPolicyInfoResponse>): _61.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _61.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupMembersRequest;
                fromJSON(object: any): _61.QueryGroupMembersRequest;
                toJSON(message: _61.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupMembersRequest>): _61.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _61.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupMembersResponse;
                fromJSON(object: any): _61.QueryGroupMembersResponse;
                toJSON(message: _61.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupMembersResponse>): _61.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _61.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByAdminRequest;
                fromJSON(object: any): _61.QueryGroupsByAdminRequest;
                toJSON(message: _61.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupsByAdminRequest>): _61.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _61.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByAdminResponse;
                fromJSON(object: any): _61.QueryGroupsByAdminResponse;
                toJSON(message: _61.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupsByAdminResponse>): _61.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _61.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _61.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _61.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByGroupRequest>): _61.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _61.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _61.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _61.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByGroupResponse>): _61.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _61.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _61.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _61.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByAdminRequest>): _61.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _61.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _61.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _61.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByAdminResponse>): _61.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _61.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalRequest;
                fromJSON(object: any): _61.QueryProposalRequest;
                toJSON(message: _61.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_61.QueryProposalRequest>): _61.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _61.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalResponse;
                fromJSON(object: any): _61.QueryProposalResponse;
                toJSON(message: _61.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_61.QueryProposalResponse>): _61.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _61.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _61.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _61.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_61.QueryProposalsByGroupPolicyRequest>): _61.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _61.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _61.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _61.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_61.QueryProposalsByGroupPolicyResponse>): _61.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _61.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _61.QueryVoteByProposalVoterRequest;
                toJSON(message: _61.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_61.QueryVoteByProposalVoterRequest>): _61.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _61.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _61.QueryVoteByProposalVoterResponse;
                toJSON(message: _61.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_61.QueryVoteByProposalVoterResponse>): _61.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _61.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByProposalRequest;
                fromJSON(object: any): _61.QueryVotesByProposalRequest;
                toJSON(message: _61.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_61.QueryVotesByProposalRequest>): _61.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _61.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByProposalResponse;
                fromJSON(object: any): _61.QueryVotesByProposalResponse;
                toJSON(message: _61.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_61.QueryVotesByProposalResponse>): _61.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _61.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByVoterRequest;
                fromJSON(object: any): _61.QueryVotesByVoterRequest;
                toJSON(message: _61.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_61.QueryVotesByVoterRequest>): _61.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _61.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByVoterResponse;
                fromJSON(object: any): _61.QueryVotesByVoterResponse;
                toJSON(message: _61.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_61.QueryVotesByVoterResponse>): _61.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _61.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByMemberRequest;
                fromJSON(object: any): _61.QueryGroupsByMemberRequest;
                toJSON(message: _61.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupsByMemberRequest>): _61.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _61.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByMemberResponse;
                fromJSON(object: any): _61.QueryGroupsByMemberResponse;
                toJSON(message: _61.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupsByMemberResponse>): _61.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _61.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultRequest;
                fromJSON(object: any): _61.QueryTallyResultRequest;
                toJSON(message: _61.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_61.QueryTallyResultRequest>): _61.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _61.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultResponse;
                fromJSON(object: any): _61.QueryTallyResultResponse;
                toJSON(message: _61.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_61.QueryTallyResultResponse>): _61.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromJSON(object: any): _60.GenesisState;
                toJSON(message: _60.GenesisState): unknown;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _59.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventCreateGroup;
                fromJSON(object: any): _59.EventCreateGroup;
                toJSON(message: _59.EventCreateGroup): unknown;
                fromPartial(object: Partial<_59.EventCreateGroup>): _59.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _59.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventUpdateGroup;
                fromJSON(object: any): _59.EventUpdateGroup;
                toJSON(message: _59.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_59.EventUpdateGroup>): _59.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _59.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventCreateGroupPolicy;
                fromJSON(object: any): _59.EventCreateGroupPolicy;
                toJSON(message: _59.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_59.EventCreateGroupPolicy>): _59.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _59.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventUpdateGroupPolicy;
                fromJSON(object: any): _59.EventUpdateGroupPolicy;
                toJSON(message: _59.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_59.EventUpdateGroupPolicy>): _59.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _59.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventSubmitProposal;
                fromJSON(object: any): _59.EventSubmitProposal;
                toJSON(message: _59.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_59.EventSubmitProposal>): _59.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _59.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventWithdrawProposal;
                fromJSON(object: any): _59.EventWithdrawProposal;
                toJSON(message: _59.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_59.EventWithdrawProposal>): _59.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _59.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventVote;
                fromJSON(object: any): _59.EventVote;
                toJSON(message: _59.EventVote): unknown;
                fromPartial(object: Partial<_59.EventVote>): _59.EventVote;
            };
            EventExec: {
                encode(message: _59.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventExec;
                fromJSON(object: any): _59.EventExec;
                toJSON(message: _59.EventExec): unknown;
                fromPartial(object: Partial<_59.EventExec>): _59.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _59.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventLeaveGroup;
                fromJSON(object: any): _59.EventLeaveGroup;
                toJSON(message: _59.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_59.EventLeaveGroup>): _59.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                inflation(request?: _66.QueryInflationRequest): Promise<_66.QueryInflationResponse>;
                annualProvisions(request?: _66.QueryAnnualProvisionsRequest): Promise<_66.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsRequest;
                fromJSON(_: any): _66.QueryParamsRequest;
                toJSON(_: _66.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsResponse;
                fromJSON(object: any): _66.QueryParamsResponse;
                toJSON(message: _66.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _66.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInflationRequest;
                fromJSON(_: any): _66.QueryInflationRequest;
                toJSON(_: _66.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_66.QueryInflationRequest>): _66.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _66.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInflationResponse;
                fromJSON(object: any): _66.QueryInflationResponse;
                toJSON(message: _66.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_66.QueryInflationResponse>): _66.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _66.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _66.QueryAnnualProvisionsRequest;
                toJSON(_: _66.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_66.QueryAnnualProvisionsRequest>): _66.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _66.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _66.QueryAnnualProvisionsResponse;
                toJSON(message: _66.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_66.QueryAnnualProvisionsResponse>): _66.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _65.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Minter;
                fromJSON(object: any): _65.Minter;
                toJSON(message: _65.Minter): unknown;
                fromPartial(object: Partial<_65.Minter>): _65.Minter;
            };
            Params: {
                encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                fromJSON(object: any): _65.Params;
                toJSON(message: _65.Params): unknown;
                fromPartial(object: Partial<_65.Params>): _65.Params;
            };
            GenesisState: {
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                fromJSON(object: any): _64.GenesisState;
                toJSON(message: _64.GenesisState): unknown;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _71.QueryBalanceRequest): Promise<_71.QueryBalanceResponse>;
                owner(request: _71.QueryOwnerRequest): Promise<_71.QueryOwnerResponse>;
                supply(request: _71.QuerySupplyRequest): Promise<_71.QuerySupplyResponse>;
                nFTs(request: _71.QueryNFTsRequest): Promise<_71.QueryNFTsResponse>;
                nFT(request: _71.QueryNFTRequest): Promise<_71.QueryNFTResponse>;
                class(request: _71.QueryClassRequest): Promise<_71.QueryClassResponse>;
                classes(request?: _71.QueryClassesRequest): Promise<_71.QueryClassesResponse>;
            };
            MsgSend: {
                encode(message: _72.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgSend;
                fromJSON(object: any): _72.MsgSend;
                toJSON(message: _72.MsgSend): unknown;
                fromPartial(object: Partial<_72.MsgSend>): _72.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _72.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgSendResponse;
                fromJSON(_: any): _72.MsgSendResponse;
                toJSON(_: _72.MsgSendResponse): unknown;
                fromPartial(_: Partial<_72.MsgSendResponse>): _72.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _71.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryBalanceRequest;
                fromJSON(object: any): _71.QueryBalanceRequest;
                toJSON(message: _71.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_71.QueryBalanceRequest>): _71.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _71.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryBalanceResponse;
                fromJSON(object: any): _71.QueryBalanceResponse;
                toJSON(message: _71.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_71.QueryBalanceResponse>): _71.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _71.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryOwnerRequest;
                fromJSON(object: any): _71.QueryOwnerRequest;
                toJSON(message: _71.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_71.QueryOwnerRequest>): _71.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _71.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryOwnerResponse;
                fromJSON(object: any): _71.QueryOwnerResponse;
                toJSON(message: _71.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_71.QueryOwnerResponse>): _71.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _71.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QuerySupplyRequest;
                fromJSON(object: any): _71.QuerySupplyRequest;
                toJSON(message: _71.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_71.QuerySupplyRequest>): _71.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _71.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QuerySupplyResponse;
                fromJSON(object: any): _71.QuerySupplyResponse;
                toJSON(message: _71.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_71.QuerySupplyResponse>): _71.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _71.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTsRequest;
                fromJSON(object: any): _71.QueryNFTsRequest;
                toJSON(message: _71.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_71.QueryNFTsRequest>): _71.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _71.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTsResponse;
                fromJSON(object: any): _71.QueryNFTsResponse;
                toJSON(message: _71.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_71.QueryNFTsResponse>): _71.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _71.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTRequest;
                fromJSON(object: any): _71.QueryNFTRequest;
                toJSON(message: _71.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_71.QueryNFTRequest>): _71.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _71.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTResponse;
                fromJSON(object: any): _71.QueryNFTResponse;
                toJSON(message: _71.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_71.QueryNFTResponse>): _71.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _71.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassRequest;
                fromJSON(object: any): _71.QueryClassRequest;
                toJSON(message: _71.QueryClassRequest): unknown;
                fromPartial(object: Partial<_71.QueryClassRequest>): _71.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _71.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassResponse;
                fromJSON(object: any): _71.QueryClassResponse;
                toJSON(message: _71.QueryClassResponse): unknown;
                fromPartial(object: Partial<_71.QueryClassResponse>): _71.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _71.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassesRequest;
                fromJSON(object: any): _71.QueryClassesRequest;
                toJSON(message: _71.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_71.QueryClassesRequest>): _71.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _71.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassesResponse;
                fromJSON(object: any): _71.QueryClassesResponse;
                toJSON(message: _71.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_71.QueryClassesResponse>): _71.QueryClassesResponse;
            };
            Class: {
                encode(message: _70.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Class;
                fromJSON(object: any): _70.Class;
                toJSON(message: _70.Class): unknown;
                fromPartial(object: Partial<_70.Class>): _70.Class;
            };
            NFT: {
                encode(message: _70.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.NFT;
                fromJSON(object: any): _70.NFT;
                toJSON(message: _70.NFT): unknown;
                fromPartial(object: Partial<_70.NFT>): _70.NFT;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                fromJSON(object: any): _69.GenesisState;
                toJSON(message: _69.GenesisState): unknown;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
            Entry: {
                encode(message: _69.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Entry;
                fromJSON(object: any): _69.Entry;
                toJSON(message: _69.Entry): unknown;
                fromPartial(object: Partial<_69.Entry>): _69.Entry;
            };
            EventSend: {
                encode(message: _68.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventSend;
                fromJSON(object: any): _68.EventSend;
                toJSON(message: _68.EventSend): unknown;
                fromPartial(object: Partial<_68.EventSend>): _68.EventSend;
            };
            EventMint: {
                encode(message: _68.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventMint;
                fromJSON(object: any): _68.EventMint;
                toJSON(message: _68.EventMint): unknown;
                fromPartial(object: Partial<_68.EventMint>): _68.EventMint;
            };
            EventBurn: {
                encode(message: _68.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventBurn;
                fromJSON(object: any): _68.EventBurn;
                toJSON(message: _68.EventBurn): unknown;
                fromPartial(object: Partial<_68.EventBurn>): _68.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _73.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Module;
                    fromJSON(_: any): _73.Module;
                    toJSON(_: _73.Module): unknown;
                    fromPartial(_: Partial<_73.Module>): _73.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _74.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.TableDescriptor;
                fromJSON(object: any): _74.TableDescriptor;
                toJSON(message: _74.TableDescriptor): unknown;
                fromPartial(object: Partial<_74.TableDescriptor>): _74.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _74.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PrimaryKeyDescriptor;
                fromJSON(object: any): _74.PrimaryKeyDescriptor;
                toJSON(message: _74.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_74.PrimaryKeyDescriptor>): _74.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _74.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SecondaryIndexDescriptor;
                fromJSON(object: any): _74.SecondaryIndexDescriptor;
                toJSON(message: _74.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_74.SecondaryIndexDescriptor>): _74.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _74.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SingletonDescriptor;
                fromJSON(object: any): _74.SingletonDescriptor;
                toJSON(message: _74.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_74.SingletonDescriptor>): _74.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _75.StorageType;
            storageTypeToJSON(object: _75.StorageType): string;
            StorageType: typeof _75.StorageType;
            StorageTypeSDKType: typeof _75.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _75.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleSchemaDescriptor;
                fromJSON(object: any): _75.ModuleSchemaDescriptor;
                toJSON(message: _75.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_75.ModuleSchemaDescriptor>): _75.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _75.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _75.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _75.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_75.ModuleSchemaDescriptor_FileEntry>): _75.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                subspaces(request?: _77.QuerySubspacesRequest): Promise<_77.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _77.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsRequest;
                fromJSON(object: any): _77.QueryParamsRequest;
                toJSON(message: _77.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_77.QueryParamsRequest>): _77.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _77.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryParamsResponse;
                fromJSON(object: any): _77.QueryParamsResponse;
                toJSON(message: _77.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_77.QueryParamsResponse>): _77.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _77.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySubspacesRequest;
                fromJSON(_: any): _77.QuerySubspacesRequest;
                toJSON(_: _77.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_77.QuerySubspacesRequest>): _77.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _77.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySubspacesResponse;
                fromJSON(object: any): _77.QuerySubspacesResponse;
                toJSON(message: _77.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_77.QuerySubspacesResponse>): _77.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _77.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Subspace;
                fromJSON(object: any): _77.Subspace;
                toJSON(message: _77.Subspace): unknown;
                fromPartial(object: Partial<_77.Subspace>): _77.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _76.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ParameterChangeProposal;
                fromJSON(object: any): _76.ParameterChangeProposal;
                toJSON(message: _76.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_76.ParameterChangeProposal>): _76.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _76.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ParamChange;
                fromJSON(object: any): _76.ParamChange;
                toJSON(message: _76.ParamChange): unknown;
                fromPartial(object: Partial<_76.ParamChange>): _76.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
            };
            MsgUnjail: {
                encode(message: _81.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUnjail;
                fromJSON(object: any): _81.MsgUnjail;
                toJSON(message: _81.MsgUnjail): unknown;
                fromPartial(object: Partial<_81.MsgUnjail>): _81.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _81.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUnjailResponse;
                fromJSON(_: any): _81.MsgUnjailResponse;
                toJSON(_: _81.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_81.MsgUnjailResponse>): _81.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _80.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ValidatorSigningInfo;
                fromJSON(object: any): _80.ValidatorSigningInfo;
                toJSON(message: _80.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_80.ValidatorSigningInfo>): _80.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _80.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Params;
                fromJSON(object: any): _80.Params;
                toJSON(message: _80.Params): unknown;
                fromPartial(object: Partial<_80.Params>): _80.Params;
            };
            QueryParamsRequest: {
                encode(_: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsRequest;
                fromJSON(_: any): _79.QueryParamsRequest;
                toJSON(_: _79.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsResponse;
                fromJSON(object: any): _79.QueryParamsResponse;
                toJSON(message: _79.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _79.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfoRequest;
                fromJSON(object: any): _79.QuerySigningInfoRequest;
                toJSON(message: _79.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_79.QuerySigningInfoRequest>): _79.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _79.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfoResponse;
                fromJSON(object: any): _79.QuerySigningInfoResponse;
                toJSON(message: _79.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_79.QuerySigningInfoResponse>): _79.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _79.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfosRequest;
                fromJSON(object: any): _79.QuerySigningInfosRequest;
                toJSON(message: _79.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_79.QuerySigningInfosRequest>): _79.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _79.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySigningInfosResponse;
                fromJSON(object: any): _79.QuerySigningInfosResponse;
                toJSON(message: _79.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_79.QuerySigningInfosResponse>): _79.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                fromJSON(object: any): _78.GenesisState;
                toJSON(message: _78.GenesisState): unknown;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
            SigningInfo: {
                encode(message: _78.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SigningInfo;
                fromJSON(object: any): _78.SigningInfo;
                toJSON(message: _78.SigningInfo): unknown;
                fromPartial(object: Partial<_78.SigningInfo>): _78.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _78.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ValidatorMissedBlocks;
                fromJSON(object: any): _78.ValidatorMissedBlocks;
                toJSON(message: _78.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_78.ValidatorMissedBlocks>): _78.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _78.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MissedBlock;
                fromJSON(object: any): _78.MissedBlock;
                toJSON(message: _78.MissedBlock): unknown;
                fromPartial(object: Partial<_78.MissedBlock>): _78.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
            };
            MsgCreateValidator: {
                encode(message: _86.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateValidator;
                fromJSON(object: any): _86.MsgCreateValidator;
                toJSON(message: _86.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_86.MsgCreateValidator>): _86.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _86.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateValidatorResponse;
                fromJSON(_: any): _86.MsgCreateValidatorResponse;
                toJSON(_: _86.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_86.MsgCreateValidatorResponse>): _86.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _86.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgEditValidator;
                fromJSON(object: any): _86.MsgEditValidator;
                toJSON(message: _86.MsgEditValidator): unknown;
                fromPartial(object: Partial<_86.MsgEditValidator>): _86.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _86.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgEditValidatorResponse;
                fromJSON(_: any): _86.MsgEditValidatorResponse;
                toJSON(_: _86.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_86.MsgEditValidatorResponse>): _86.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _86.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgDelegate;
                fromJSON(object: any): _86.MsgDelegate;
                toJSON(message: _86.MsgDelegate): unknown;
                fromPartial(object: Partial<_86.MsgDelegate>): _86.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _86.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgDelegateResponse;
                fromJSON(_: any): _86.MsgDelegateResponse;
                toJSON(_: _86.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_86.MsgDelegateResponse>): _86.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _86.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgBeginRedelegate;
                fromJSON(object: any): _86.MsgBeginRedelegate;
                toJSON(message: _86.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_86.MsgBeginRedelegate>): _86.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _86.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgBeginRedelegateResponse;
                fromJSON(object: any): _86.MsgBeginRedelegateResponse;
                toJSON(message: _86.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_86.MsgBeginRedelegateResponse>): _86.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _86.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUndelegate;
                fromJSON(object: any): _86.MsgUndelegate;
                toJSON(message: _86.MsgUndelegate): unknown;
                fromPartial(object: Partial<_86.MsgUndelegate>): _86.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _86.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUndelegateResponse;
                fromJSON(object: any): _86.MsgUndelegateResponse;
                toJSON(message: _86.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_86.MsgUndelegateResponse>): _86.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _85.BondStatus;
            bondStatusToJSON(object: _85.BondStatus): string;
            BondStatus: typeof _85.BondStatus;
            BondStatusSDKType: typeof _85.BondStatus;
            HistoricalInfo: {
                encode(message: _85.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.HistoricalInfo;
                fromJSON(object: any): _85.HistoricalInfo;
                toJSON(message: _85.HistoricalInfo): unknown;
                fromPartial(object: Partial<_85.HistoricalInfo>): _85.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _85.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CommissionRates;
                fromJSON(object: any): _85.CommissionRates;
                toJSON(message: _85.CommissionRates): unknown;
                fromPartial(object: Partial<_85.CommissionRates>): _85.CommissionRates;
            };
            Commission: {
                encode(message: _85.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Commission;
                fromJSON(object: any): _85.Commission;
                toJSON(message: _85.Commission): unknown;
                fromPartial(object: Partial<_85.Commission>): _85.Commission;
            };
            Description: {
                encode(message: _85.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Description;
                fromJSON(object: any): _85.Description;
                toJSON(message: _85.Description): unknown;
                fromPartial(object: Partial<_85.Description>): _85.Description;
            };
            Validator: {
                encode(message: _85.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Validator;
                fromJSON(object: any): _85.Validator;
                toJSON(message: _85.Validator): unknown;
                fromPartial(object: Partial<_85.Validator>): _85.Validator;
            };
            ValAddresses: {
                encode(message: _85.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValAddresses;
                fromJSON(object: any): _85.ValAddresses;
                toJSON(message: _85.ValAddresses): unknown;
                fromPartial(object: Partial<_85.ValAddresses>): _85.ValAddresses;
            };
            DVPair: {
                encode(message: _85.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVPair;
                fromJSON(object: any): _85.DVPair;
                toJSON(message: _85.DVPair): unknown;
                fromPartial(object: Partial<_85.DVPair>): _85.DVPair;
            };
            DVPairs: {
                encode(message: _85.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVPairs;
                fromJSON(object: any): _85.DVPairs;
                toJSON(message: _85.DVPairs): unknown;
                fromPartial(object: Partial<_85.DVPairs>): _85.DVPairs;
            };
            DVVTriplet: {
                encode(message: _85.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVVTriplet;
                fromJSON(object: any): _85.DVVTriplet;
                toJSON(message: _85.DVVTriplet): unknown;
                fromPartial(object: Partial<_85.DVVTriplet>): _85.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _85.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DVVTriplets;
                fromJSON(object: any): _85.DVVTriplets;
                toJSON(message: _85.DVVTriplets): unknown;
                fromPartial(object: Partial<_85.DVVTriplets>): _85.DVVTriplets;
            };
            Delegation: {
                encode(message: _85.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Delegation;
                fromJSON(object: any): _85.Delegation;
                toJSON(message: _85.Delegation): unknown;
                fromPartial(object: Partial<_85.Delegation>): _85.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _85.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.UnbondingDelegation;
                fromJSON(object: any): _85.UnbondingDelegation;
                toJSON(message: _85.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_85.UnbondingDelegation>): _85.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _85.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.UnbondingDelegationEntry;
                fromJSON(object: any): _85.UnbondingDelegationEntry;
                toJSON(message: _85.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_85.UnbondingDelegationEntry>): _85.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _85.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationEntry;
                fromJSON(object: any): _85.RedelegationEntry;
                toJSON(message: _85.RedelegationEntry): unknown;
                fromPartial(object: Partial<_85.RedelegationEntry>): _85.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _85.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Redelegation;
                fromJSON(object: any): _85.Redelegation;
                toJSON(message: _85.Redelegation): unknown;
                fromPartial(object: Partial<_85.Redelegation>): _85.Redelegation;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromJSON(object: any): _85.Params;
                toJSON(message: _85.Params): unknown;
                fromPartial(object: Partial<_85.Params>): _85.Params;
            };
            DelegationResponse: {
                encode(message: _85.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DelegationResponse;
                fromJSON(object: any): _85.DelegationResponse;
                toJSON(message: _85.DelegationResponse): unknown;
                fromPartial(object: Partial<_85.DelegationResponse>): _85.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _85.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationEntryResponse;
                fromJSON(object: any): _85.RedelegationEntryResponse;
                toJSON(message: _85.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_85.RedelegationEntryResponse>): _85.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _85.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.RedelegationResponse;
                fromJSON(object: any): _85.RedelegationResponse;
                toJSON(message: _85.RedelegationResponse): unknown;
                fromPartial(object: Partial<_85.RedelegationResponse>): _85.RedelegationResponse;
            };
            Pool: {
                encode(message: _85.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Pool;
                fromJSON(object: any): _85.Pool;
                toJSON(message: _85.Pool): unknown;
                fromPartial(object: Partial<_85.Pool>): _85.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _84.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorsRequest;
                fromJSON(object: any): _84.QueryValidatorsRequest;
                toJSON(message: _84.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_84.QueryValidatorsRequest>): _84.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _84.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorsResponse;
                fromJSON(object: any): _84.QueryValidatorsResponse;
                toJSON(message: _84.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_84.QueryValidatorsResponse>): _84.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _84.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorRequest;
                fromJSON(object: any): _84.QueryValidatorRequest;
                toJSON(message: _84.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_84.QueryValidatorRequest>): _84.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _84.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorResponse;
                fromJSON(object: any): _84.QueryValidatorResponse;
                toJSON(message: _84.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_84.QueryValidatorResponse>): _84.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _84.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _84.QueryValidatorDelegationsRequest;
                toJSON(message: _84.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryValidatorDelegationsRequest>): _84.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _84.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _84.QueryValidatorDelegationsResponse;
                toJSON(message: _84.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryValidatorDelegationsResponse>): _84.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _84.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _84.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryValidatorUnbondingDelegationsRequest>): _84.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _84.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _84.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryValidatorUnbondingDelegationsResponse>): _84.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _84.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegationRequest;
                fromJSON(object: any): _84.QueryDelegationRequest;
                toJSON(message: _84.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegationRequest>): _84.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _84.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegationResponse;
                fromJSON(object: any): _84.QueryDelegationResponse;
                toJSON(message: _84.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegationResponse>): _84.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _84.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _84.QueryUnbondingDelegationRequest;
                toJSON(message: _84.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_84.QueryUnbondingDelegationRequest>): _84.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _84.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _84.QueryUnbondingDelegationResponse;
                toJSON(message: _84.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_84.QueryUnbondingDelegationResponse>): _84.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _84.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _84.QueryDelegatorDelegationsRequest;
                toJSON(message: _84.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorDelegationsRequest>): _84.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _84.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _84.QueryDelegatorDelegationsResponse;
                toJSON(message: _84.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorDelegationsResponse>): _84.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _84.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _84.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorUnbondingDelegationsRequest>): _84.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _84.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _84.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _84.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorUnbondingDelegationsResponse>): _84.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _84.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryRedelegationsRequest;
                fromJSON(object: any): _84.QueryRedelegationsRequest;
                toJSON(message: _84.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_84.QueryRedelegationsRequest>): _84.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _84.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryRedelegationsResponse;
                fromJSON(object: any): _84.QueryRedelegationsResponse;
                toJSON(message: _84.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_84.QueryRedelegationsResponse>): _84.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _84.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _84.QueryDelegatorValidatorsRequest;
                toJSON(message: _84.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsRequest>): _84.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _84.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _84.QueryDelegatorValidatorsResponse;
                toJSON(message: _84.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorsResponse>): _84.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _84.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _84.QueryDelegatorValidatorRequest;
                toJSON(message: _84.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorRequest>): _84.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _84.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _84.QueryDelegatorValidatorResponse;
                toJSON(message: _84.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_84.QueryDelegatorValidatorResponse>): _84.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _84.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoricalInfoRequest;
                fromJSON(object: any): _84.QueryHistoricalInfoRequest;
                toJSON(message: _84.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_84.QueryHistoricalInfoRequest>): _84.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _84.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryHistoricalInfoResponse;
                fromJSON(object: any): _84.QueryHistoricalInfoResponse;
                toJSON(message: _84.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_84.QueryHistoricalInfoResponse>): _84.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _84.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryPoolRequest;
                fromJSON(_: any): _84.QueryPoolRequest;
                toJSON(_: _84.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_84.QueryPoolRequest>): _84.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _84.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryPoolResponse;
                fromJSON(object: any): _84.QueryPoolResponse;
                toJSON(message: _84.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_84.QueryPoolResponse>): _84.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsRequest;
                fromJSON(_: any): _84.QueryParamsRequest;
                toJSON(_: _84.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsResponse;
                fromJSON(object: any): _84.QueryParamsResponse;
                toJSON(message: _84.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_84.QueryParamsResponse>): _84.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromJSON(object: any): _83.GenesisState;
                toJSON(message: _83.GenesisState): unknown;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _83.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.LastValidatorPower;
                fromJSON(object: any): _83.LastValidatorPower;
                toJSON(message: _83.LastValidatorPower): unknown;
                fromPartial(object: Partial<_83.LastValidatorPower>): _83.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _82.AuthorizationType;
            authorizationTypeToJSON(object: _82.AuthorizationType): string;
            AuthorizationType: typeof _82.AuthorizationType;
            AuthorizationTypeSDKType: typeof _82.AuthorizationType;
            StakeAuthorization: {
                encode(message: _82.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StakeAuthorization;
                fromJSON(object: any): _82.StakeAuthorization;
                toJSON(message: _82.StakeAuthorization): unknown;
                fromPartial(object: Partial<_82.StakeAuthorization>): _82.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _82.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StakeAuthorization_Validators;
                fromJSON(object: any): _82.StakeAuthorization_Validators;
                toJSON(message: _82.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_82.StakeAuthorization_Validators>): _82.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _87.SignMode;
                signModeToJSON(object: _87.SignMode): string;
                SignMode: typeof _87.SignMode;
                SignModeSDKType: typeof _87.SignMode;
                SignatureDescriptors: {
                    encode(message: _87.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptors;
                    fromJSON(object: any): _87.SignatureDescriptors;
                    toJSON(message: _87.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptors>): _87.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _87.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor;
                    fromJSON(object: any): _87.SignatureDescriptor;
                    toJSON(message: _87.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptor>): _87.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _87.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data;
                    fromJSON(object: any): _87.SignatureDescriptor_Data;
                    toJSON(message: _87.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data>): _87.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _87.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Single;
                    toJSON(message: _87.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data_Single>): _87.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _87.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _87.SignatureDescriptor_Data_Multi;
                    toJSON(message: _87.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_87.SignatureDescriptor_Data_Multi>): _87.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _237.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _89.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Tx;
                fromJSON(object: any): _89.Tx;
                toJSON(message: _89.Tx): unknown;
                fromPartial(object: Partial<_89.Tx>): _89.Tx;
            };
            TxRaw: {
                encode(message: _89.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TxRaw;
                fromJSON(object: any): _89.TxRaw;
                toJSON(message: _89.TxRaw): unknown;
                fromPartial(object: Partial<_89.TxRaw>): _89.TxRaw;
            };
            SignDoc: {
                encode(message: _89.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignDoc;
                fromJSON(object: any): _89.SignDoc;
                toJSON(message: _89.SignDoc): unknown;
                fromPartial(object: Partial<_89.SignDoc>): _89.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _89.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignDocDirectAux;
                fromJSON(object: any): _89.SignDocDirectAux;
                toJSON(message: _89.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_89.SignDocDirectAux>): _89.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _89.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TxBody;
                fromJSON(object: any): _89.TxBody;
                toJSON(message: _89.TxBody): unknown;
                fromPartial(object: Partial<_89.TxBody>): _89.TxBody;
            };
            AuthInfo: {
                encode(message: _89.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AuthInfo;
                fromJSON(object: any): _89.AuthInfo;
                toJSON(message: _89.AuthInfo): unknown;
                fromPartial(object: Partial<_89.AuthInfo>): _89.AuthInfo;
            };
            SignerInfo: {
                encode(message: _89.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignerInfo;
                fromJSON(object: any): _89.SignerInfo;
                toJSON(message: _89.SignerInfo): unknown;
                fromPartial(object: Partial<_89.SignerInfo>): _89.SignerInfo;
            };
            ModeInfo: {
                encode(message: _89.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo;
                fromJSON(object: any): _89.ModeInfo;
                toJSON(message: _89.ModeInfo): unknown;
                fromPartial(object: Partial<_89.ModeInfo>): _89.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _89.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo_Single;
                fromJSON(object: any): _89.ModeInfo_Single;
                toJSON(message: _89.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_89.ModeInfo_Single>): _89.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _89.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ModeInfo_Multi;
                fromJSON(object: any): _89.ModeInfo_Multi;
                toJSON(message: _89.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_89.ModeInfo_Multi>): _89.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _89.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Fee;
                fromJSON(object: any): _89.Fee;
                toJSON(message: _89.Fee): unknown;
                fromPartial(object: Partial<_89.Fee>): _89.Fee;
            };
            Tip: {
                encode(message: _89.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Tip;
                fromJSON(object: any): _89.Tip;
                toJSON(message: _89.Tip): unknown;
                fromPartial(object: Partial<_89.Tip>): _89.Tip;
            };
            AuxSignerData: {
                encode(message: _89.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.AuxSignerData;
                fromJSON(object: any): _89.AuxSignerData;
                toJSON(message: _89.AuxSignerData): unknown;
                fromPartial(object: Partial<_89.AuxSignerData>): _89.AuxSignerData;
            };
            orderByFromJSON(object: any): _88.OrderBy;
            orderByToJSON(object: _88.OrderBy): string;
            broadcastModeFromJSON(object: any): _88.BroadcastMode;
            broadcastModeToJSON(object: _88.BroadcastMode): string;
            OrderBy: typeof _88.OrderBy;
            OrderBySDKType: typeof _88.OrderBy;
            BroadcastMode: typeof _88.BroadcastMode;
            BroadcastModeSDKType: typeof _88.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _88.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxsEventRequest;
                fromJSON(object: any): _88.GetTxsEventRequest;
                toJSON(message: _88.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_88.GetTxsEventRequest>): _88.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _88.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxsEventResponse;
                fromJSON(object: any): _88.GetTxsEventResponse;
                toJSON(message: _88.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_88.GetTxsEventResponse>): _88.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _88.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BroadcastTxRequest;
                fromJSON(object: any): _88.BroadcastTxRequest;
                toJSON(message: _88.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_88.BroadcastTxRequest>): _88.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _88.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BroadcastTxResponse;
                fromJSON(object: any): _88.BroadcastTxResponse;
                toJSON(message: _88.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_88.BroadcastTxResponse>): _88.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _88.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimulateRequest;
                fromJSON(object: any): _88.SimulateRequest;
                toJSON(message: _88.SimulateRequest): unknown;
                fromPartial(object: Partial<_88.SimulateRequest>): _88.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _88.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SimulateResponse;
                fromJSON(object: any): _88.SimulateResponse;
                toJSON(message: _88.SimulateResponse): unknown;
                fromPartial(object: Partial<_88.SimulateResponse>): _88.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _88.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxRequest;
                fromJSON(object: any): _88.GetTxRequest;
                toJSON(message: _88.GetTxRequest): unknown;
                fromPartial(object: Partial<_88.GetTxRequest>): _88.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _88.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetTxResponse;
                fromJSON(object: any): _88.GetTxResponse;
                toJSON(message: _88.GetTxResponse): unknown;
                fromPartial(object: Partial<_88.GetTxResponse>): _88.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _88.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetBlockWithTxsRequest;
                fromJSON(object: any): _88.GetBlockWithTxsRequest;
                toJSON(message: _88.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_88.GetBlockWithTxsRequest>): _88.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _88.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GetBlockWithTxsResponse;
                fromJSON(object: any): _88.GetBlockWithTxsResponse;
                toJSON(message: _88.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_88.GetBlockWithTxsResponse>): _88.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                authority(request?: _90.QueryAuthorityRequest): Promise<_90.QueryAuthorityResponse>;
            };
            Plan: {
                encode(message: _92.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Plan;
                fromJSON(object: any): _92.Plan;
                toJSON(message: _92.Plan): unknown;
                fromPartial(object: Partial<_92.Plan>): _92.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _92.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SoftwareUpgradeProposal;
                fromJSON(object: any): _92.SoftwareUpgradeProposal;
                toJSON(message: _92.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_92.SoftwareUpgradeProposal>): _92.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _92.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _92.CancelSoftwareUpgradeProposal;
                toJSON(message: _92.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_92.CancelSoftwareUpgradeProposal>): _92.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _92.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ModuleVersion;
                fromJSON(object: any): _92.ModuleVersion;
                toJSON(message: _92.ModuleVersion): unknown;
                fromPartial(object: Partial<_92.ModuleVersion>): _92.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _91.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSoftwareUpgrade;
                fromJSON(object: any): _91.MsgSoftwareUpgrade;
                toJSON(message: _91.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_91.MsgSoftwareUpgrade>): _91.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _91.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _91.MsgSoftwareUpgradeResponse;
                toJSON(_: _91.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_91.MsgSoftwareUpgradeResponse>): _91.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _91.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCancelUpgrade;
                fromJSON(object: any): _91.MsgCancelUpgrade;
                toJSON(message: _91.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_91.MsgCancelUpgrade>): _91.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _91.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCancelUpgradeResponse;
                fromJSON(_: any): _91.MsgCancelUpgradeResponse;
                toJSON(_: _91.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_91.MsgCancelUpgradeResponse>): _91.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _90.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCurrentPlanRequest;
                fromJSON(_: any): _90.QueryCurrentPlanRequest;
                toJSON(_: _90.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_90.QueryCurrentPlanRequest>): _90.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _90.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryCurrentPlanResponse;
                fromJSON(object: any): _90.QueryCurrentPlanResponse;
                toJSON(message: _90.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_90.QueryCurrentPlanResponse>): _90.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _90.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAppliedPlanRequest;
                fromJSON(object: any): _90.QueryAppliedPlanRequest;
                toJSON(message: _90.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_90.QueryAppliedPlanRequest>): _90.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _90.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAppliedPlanResponse;
                fromJSON(object: any): _90.QueryAppliedPlanResponse;
                toJSON(message: _90.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_90.QueryAppliedPlanResponse>): _90.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _90.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _90.QueryUpgradedConsensusStateRequest;
                toJSON(message: _90.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_90.QueryUpgradedConsensusStateRequest>): _90.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _90.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _90.QueryUpgradedConsensusStateResponse;
                toJSON(message: _90.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_90.QueryUpgradedConsensusStateResponse>): _90.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _90.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryModuleVersionsRequest;
                fromJSON(object: any): _90.QueryModuleVersionsRequest;
                toJSON(message: _90.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_90.QueryModuleVersionsRequest>): _90.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _90.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryModuleVersionsResponse;
                fromJSON(object: any): _90.QueryModuleVersionsResponse;
                toJSON(message: _90.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_90.QueryModuleVersionsResponse>): _90.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _90.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAuthorityRequest;
                fromJSON(_: any): _90.QueryAuthorityRequest;
                toJSON(_: _90.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_90.QueryAuthorityRequest>): _90.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _90.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAuthorityResponse;
                fromJSON(object: any): _90.QueryAuthorityResponse;
                toJSON(message: _90.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_90.QueryAuthorityResponse>): _90.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            BaseVestingAccount: {
                encode(message: _94.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.BaseVestingAccount;
                fromJSON(object: any): _94.BaseVestingAccount;
                toJSON(message: _94.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_94.BaseVestingAccount>): _94.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _94.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ContinuousVestingAccount;
                fromJSON(object: any): _94.ContinuousVestingAccount;
                toJSON(message: _94.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_94.ContinuousVestingAccount>): _94.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _94.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.DelayedVestingAccount;
                fromJSON(object: any): _94.DelayedVestingAccount;
                toJSON(message: _94.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_94.DelayedVestingAccount>): _94.DelayedVestingAccount;
            };
            Period: {
                encode(message: _94.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Period;
                fromJSON(object: any): _94.Period;
                toJSON(message: _94.Period): unknown;
                fromPartial(object: Partial<_94.Period>): _94.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _94.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PeriodicVestingAccount;
                fromJSON(object: any): _94.PeriodicVestingAccount;
                toJSON(message: _94.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_94.PeriodicVestingAccount>): _94.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _94.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PermanentLockedAccount;
                fromJSON(object: any): _94.PermanentLockedAccount;
                toJSON(message: _94.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_94.PermanentLockedAccount>): _94.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _93.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreateVestingAccount;
                fromJSON(object: any): _93.MsgCreateVestingAccount;
                toJSON(message: _93.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_93.MsgCreateVestingAccount>): _93.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _93.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _93.MsgCreateVestingAccountResponse;
                toJSON(_: _93.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_93.MsgCreateVestingAccountResponse>): _93.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _93.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _93.MsgCreatePermanentLockedAccount;
                toJSON(message: _93.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_93.MsgCreatePermanentLockedAccount>): _93.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _93.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _93.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _93.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_93.MsgCreatePermanentLockedAccountResponse>): _93.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _93.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _93.MsgCreatePeriodicVestingAccount;
                toJSON(message: _93.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_93.MsgCreatePeriodicVestingAccount>): _93.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _93.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _93.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _93.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_93.MsgCreatePeriodicVestingAccountResponse>): _93.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _239.MsgClientImpl;
                };
                bank: {
                    v1beta1: _240.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _241.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _242.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _243.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _244.MsgClientImpl;
                };
                gov: {
                    v1: _245.MsgClientImpl;
                    v1beta1: _246.MsgClientImpl;
                };
                group: {
                    v1: _247.MsgClientImpl;
                };
                nft: {
                    v1beta1: _248.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _249.MsgClientImpl;
                };
                staking: {
                    v1beta1: _250.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _251.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _252.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                        account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        moduleAccounts(request?: _7.QueryModuleAccountsRequest): Promise<_7.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _7.Bech32PrefixRequest): Promise<_7.Bech32PrefixResponse>;
                        addressBytesToString(request: _7.AddressBytesToStringRequest): Promise<_7.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _7.AddressStringToBytesRequest): Promise<_7.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _11.QueryGrantsRequest): Promise<_11.QueryGrantsResponse>;
                        granterGrants(request: _11.QueryGranterGrantsRequest): Promise<_11.QueryGranterGrantsResponse>;
                        granteeGrants(request: _11.QueryGranteeGrantsRequest): Promise<_11.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _16.QueryBalanceRequest): Promise<_16.QueryBalanceResponse>;
                        allBalances(request: _16.QueryAllBalancesRequest): Promise<_16.QueryAllBalancesResponse>;
                        spendableBalances(request: _16.QuerySpendableBalancesRequest): Promise<_16.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _16.QueryTotalSupplyRequest): Promise<_16.QueryTotalSupplyResponse>;
                        supplyOf(request: _16.QuerySupplyOfRequest): Promise<_16.QuerySupplyOfResponse>;
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        denomMetadata(request: _16.QueryDenomMetadataRequest): Promise<_16.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _16.QueryDenomsMetadataRequest): Promise<_16.QueryDenomsMetadataResponse>;
                        denomOwners(request: _16.QueryDenomOwnersRequest): Promise<_16.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _26.GetNodeInfoRequest): Promise<_26.GetNodeInfoResponse>;
                            getSyncing(request?: _26.GetSyncingRequest): Promise<_26.GetSyncingResponse>;
                            getLatestBlock(request?: _26.GetLatestBlockRequest): Promise<_26.GetLatestBlockResponse>;
                            getBlockByHeight(request: _26.GetBlockByHeightRequest): Promise<_26.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _26.GetLatestValidatorSetRequest): Promise<_26.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _26.GetValidatorSetByHeightRequest): Promise<_26.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _40.QueryValidatorOutstandingRewardsRequest): Promise<_40.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _40.QueryValidatorCommissionRequest): Promise<_40.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _40.QueryValidatorSlashesRequest): Promise<_40.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _40.QueryDelegationRewardsRequest): Promise<_40.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _40.QueryDelegationTotalRewardsRequest): Promise<_40.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _40.QueryDelegatorValidatorsRequest): Promise<_40.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _40.QueryDelegatorWithdrawAddressRequest): Promise<_40.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _40.QueryCommunityPoolRequest): Promise<_40.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _44.QueryEvidenceRequest): Promise<_44.QueryEvidenceResponse>;
                        allEvidence(request?: _44.QueryAllEvidenceRequest): Promise<_44.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _48.QueryAllowanceRequest): Promise<_48.QueryAllowanceResponse>;
                        allowances(request: _48.QueryAllowancesRequest): Promise<_48.QueryAllowancesResponse>;
                        allowancesByGranter(request: _48.QueryAllowancesByGranterRequest): Promise<_48.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _53.QueryProposalRequest): Promise<_53.QueryProposalResponse>;
                        proposals(request: _53.QueryProposalsRequest): Promise<_53.QueryProposalsResponse>;
                        vote(request: _53.QueryVoteRequest): Promise<_53.QueryVoteResponse>;
                        votes(request: _53.QueryVotesRequest): Promise<_53.QueryVotesResponse>;
                        params(request: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        deposit(request: _53.QueryDepositRequest): Promise<_53.QueryDepositResponse>;
                        deposits(request: _53.QueryDepositsRequest): Promise<_53.QueryDepositsResponse>;
                        tallyResult(request: _53.QueryTallyResultRequest): Promise<_53.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                        proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                        vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                        votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                        params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                        deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                        tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _61.QueryGroupInfoRequest): Promise<_61.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _61.QueryGroupPolicyInfoRequest): Promise<_61.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _61.QueryGroupMembersRequest): Promise<_61.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _61.QueryGroupsByAdminRequest): Promise<_61.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _61.QueryGroupPoliciesByGroupRequest): Promise<_61.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _61.QueryGroupPoliciesByAdminRequest): Promise<_61.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _61.QueryProposalsByGroupPolicyRequest): Promise<_61.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _61.QueryVoteByProposalVoterRequest): Promise<_61.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _61.QueryVotesByProposalRequest): Promise<_61.QueryVotesByProposalResponse>;
                        votesByVoter(request: _61.QueryVotesByVoterRequest): Promise<_61.QueryVotesByVoterResponse>;
                        groupsByMember(request: _61.QueryGroupsByMemberRequest): Promise<_61.QueryGroupsByMemberResponse>;
                        tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        inflation(request?: _66.QueryInflationRequest): Promise<_66.QueryInflationResponse>;
                        annualProvisions(request?: _66.QueryAnnualProvisionsRequest): Promise<_66.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _71.QueryBalanceRequest): Promise<_71.QueryBalanceResponse>;
                        owner(request: _71.QueryOwnerRequest): Promise<_71.QueryOwnerResponse>;
                        supply(request: _71.QuerySupplyRequest): Promise<_71.QuerySupplyResponse>;
                        nFTs(request: _71.QueryNFTsRequest): Promise<_71.QueryNFTsResponse>;
                        nFT(request: _71.QueryNFTRequest): Promise<_71.QueryNFTResponse>;
                        class(request: _71.QueryClassRequest): Promise<_71.QueryClassResponse>;
                        classes(request?: _71.QueryClassesRequest): Promise<_71.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _77.QueryParamsRequest): Promise<_77.QueryParamsResponse>;
                        subspaces(request?: _77.QuerySubspacesRequest): Promise<_77.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        signingInfo(request: _79.QuerySigningInfoRequest): Promise<_79.QuerySigningInfoResponse>;
                        signingInfos(request?: _79.QuerySigningInfosRequest): Promise<_79.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _84.QueryValidatorsRequest): Promise<_84.QueryValidatorsResponse>;
                        validator(request: _84.QueryValidatorRequest): Promise<_84.QueryValidatorResponse>;
                        validatorDelegations(request: _84.QueryValidatorDelegationsRequest): Promise<_84.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _84.QueryValidatorUnbondingDelegationsRequest): Promise<_84.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _84.QueryDelegationRequest): Promise<_84.QueryDelegationResponse>;
                        unbondingDelegation(request: _84.QueryUnbondingDelegationRequest): Promise<_84.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _84.QueryDelegatorDelegationsRequest): Promise<_84.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _84.QueryDelegatorUnbondingDelegationsRequest): Promise<_84.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _84.QueryRedelegationsRequest): Promise<_84.QueryRedelegationsResponse>;
                        delegatorValidators(request: _84.QueryDelegatorValidatorsRequest): Promise<_84.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _84.QueryDelegatorValidatorRequest): Promise<_84.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _84.QueryHistoricalInfoRequest): Promise<_84.QueryHistoricalInfoResponse>;
                        pool(request?: _84.QueryPoolRequest): Promise<_84.QueryPoolResponse>;
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _88.SimulateRequest): Promise<_88.SimulateResponse>;
                        getTx(request: _88.GetTxRequest): Promise<_88.GetTxResponse>;
                        broadcastTx(request: _88.BroadcastTxRequest): Promise<_88.BroadcastTxResponse>;
                        getTxsEvent(request: _88.GetTxsEventRequest): Promise<_88.GetTxsEventResponse>;
                        getBlockWithTxs(request: _88.GetBlockWithTxsRequest): Promise<_88.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _90.QueryCurrentPlanRequest): Promise<_90.QueryCurrentPlanResponse>;
                        appliedPlan(request: _90.QueryAppliedPlanRequest): Promise<_90.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _90.QueryUpgradedConsensusStateRequest): Promise<_90.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _90.QueryModuleVersionsRequest): Promise<_90.QueryModuleVersionsResponse>;
                        authority(request?: _90.QueryAuthorityRequest): Promise<_90.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
