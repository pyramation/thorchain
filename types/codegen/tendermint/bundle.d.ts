import * as _148 from "./abci/types";
import * as _149 from "./crypto/keys";
import * as _150 from "./crypto/proof";
import * as _151 from "./libs/bits/types";
import * as _152 from "./p2p/types";
import * as _153 from "./types/block";
import * as _154 from "./types/evidence";
import * as _155 from "./types/params";
import * as _156 from "./types/types";
import * as _157 from "./types/validator";
import * as _158 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _148.CheckTxType;
        checkTxTypeToJSON(object: _148.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _148.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _148.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _148.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _148.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _148.EvidenceType;
        evidenceTypeToJSON(object: _148.EvidenceType): string;
        CheckTxType: typeof _148.CheckTxType;
        CheckTxTypeSDKType: typeof _148.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _148.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _148.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _148.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _148.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _148.EvidenceType;
        EvidenceTypeSDKType: typeof _148.EvidenceType;
        Request: {
            encode(message: _148.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Request;
            fromJSON(object: any): _148.Request;
            toJSON(message: _148.Request): unknown;
            fromPartial(object: Partial<_148.Request>): _148.Request;
        };
        RequestEcho: {
            encode(message: _148.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestEcho;
            fromJSON(object: any): _148.RequestEcho;
            toJSON(message: _148.RequestEcho): unknown;
            fromPartial(object: Partial<_148.RequestEcho>): _148.RequestEcho;
        };
        RequestFlush: {
            encode(_: _148.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestFlush;
            fromJSON(_: any): _148.RequestFlush;
            toJSON(_: _148.RequestFlush): unknown;
            fromPartial(_: Partial<_148.RequestFlush>): _148.RequestFlush;
        };
        RequestInfo: {
            encode(message: _148.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestInfo;
            fromJSON(object: any): _148.RequestInfo;
            toJSON(message: _148.RequestInfo): unknown;
            fromPartial(object: Partial<_148.RequestInfo>): _148.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _148.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestSetOption;
            fromJSON(object: any): _148.RequestSetOption;
            toJSON(message: _148.RequestSetOption): unknown;
            fromPartial(object: Partial<_148.RequestSetOption>): _148.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _148.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestInitChain;
            fromJSON(object: any): _148.RequestInitChain;
            toJSON(message: _148.RequestInitChain): unknown;
            fromPartial(object: Partial<_148.RequestInitChain>): _148.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _148.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestQuery;
            fromJSON(object: any): _148.RequestQuery;
            toJSON(message: _148.RequestQuery): unknown;
            fromPartial(object: Partial<_148.RequestQuery>): _148.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _148.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestBeginBlock;
            fromJSON(object: any): _148.RequestBeginBlock;
            toJSON(message: _148.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_148.RequestBeginBlock>): _148.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _148.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestCheckTx;
            fromJSON(object: any): _148.RequestCheckTx;
            toJSON(message: _148.RequestCheckTx): unknown;
            fromPartial(object: Partial<_148.RequestCheckTx>): _148.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _148.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestDeliverTx;
            fromJSON(object: any): _148.RequestDeliverTx;
            toJSON(message: _148.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_148.RequestDeliverTx>): _148.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _148.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestEndBlock;
            fromJSON(object: any): _148.RequestEndBlock;
            toJSON(message: _148.RequestEndBlock): unknown;
            fromPartial(object: Partial<_148.RequestEndBlock>): _148.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _148.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestCommit;
            fromJSON(_: any): _148.RequestCommit;
            toJSON(_: _148.RequestCommit): unknown;
            fromPartial(_: Partial<_148.RequestCommit>): _148.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _148.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestListSnapshots;
            fromJSON(_: any): _148.RequestListSnapshots;
            toJSON(_: _148.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_148.RequestListSnapshots>): _148.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _148.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestOfferSnapshot;
            fromJSON(object: any): _148.RequestOfferSnapshot;
            toJSON(message: _148.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_148.RequestOfferSnapshot>): _148.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _148.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestLoadSnapshotChunk;
            fromJSON(object: any): _148.RequestLoadSnapshotChunk;
            toJSON(message: _148.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_148.RequestLoadSnapshotChunk>): _148.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _148.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.RequestApplySnapshotChunk;
            fromJSON(object: any): _148.RequestApplySnapshotChunk;
            toJSON(message: _148.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_148.RequestApplySnapshotChunk>): _148.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _148.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Response;
            fromJSON(object: any): _148.Response;
            toJSON(message: _148.Response): unknown;
            fromPartial(object: Partial<_148.Response>): _148.Response;
        };
        ResponseException: {
            encode(message: _148.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseException;
            fromJSON(object: any): _148.ResponseException;
            toJSON(message: _148.ResponseException): unknown;
            fromPartial(object: Partial<_148.ResponseException>): _148.ResponseException;
        };
        ResponseEcho: {
            encode(message: _148.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseEcho;
            fromJSON(object: any): _148.ResponseEcho;
            toJSON(message: _148.ResponseEcho): unknown;
            fromPartial(object: Partial<_148.ResponseEcho>): _148.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _148.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseFlush;
            fromJSON(_: any): _148.ResponseFlush;
            toJSON(_: _148.ResponseFlush): unknown;
            fromPartial(_: Partial<_148.ResponseFlush>): _148.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _148.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseInfo;
            fromJSON(object: any): _148.ResponseInfo;
            toJSON(message: _148.ResponseInfo): unknown;
            fromPartial(object: Partial<_148.ResponseInfo>): _148.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _148.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseSetOption;
            fromJSON(object: any): _148.ResponseSetOption;
            toJSON(message: _148.ResponseSetOption): unknown;
            fromPartial(object: Partial<_148.ResponseSetOption>): _148.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _148.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseInitChain;
            fromJSON(object: any): _148.ResponseInitChain;
            toJSON(message: _148.ResponseInitChain): unknown;
            fromPartial(object: Partial<_148.ResponseInitChain>): _148.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _148.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseQuery;
            fromJSON(object: any): _148.ResponseQuery;
            toJSON(message: _148.ResponseQuery): unknown;
            fromPartial(object: Partial<_148.ResponseQuery>): _148.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _148.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseBeginBlock;
            fromJSON(object: any): _148.ResponseBeginBlock;
            toJSON(message: _148.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_148.ResponseBeginBlock>): _148.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _148.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseCheckTx;
            fromJSON(object: any): _148.ResponseCheckTx;
            toJSON(message: _148.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_148.ResponseCheckTx>): _148.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _148.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseDeliverTx;
            fromJSON(object: any): _148.ResponseDeliverTx;
            toJSON(message: _148.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_148.ResponseDeliverTx>): _148.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _148.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseEndBlock;
            fromJSON(object: any): _148.ResponseEndBlock;
            toJSON(message: _148.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_148.ResponseEndBlock>): _148.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _148.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseCommit;
            fromJSON(object: any): _148.ResponseCommit;
            toJSON(message: _148.ResponseCommit): unknown;
            fromPartial(object: Partial<_148.ResponseCommit>): _148.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _148.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseListSnapshots;
            fromJSON(object: any): _148.ResponseListSnapshots;
            toJSON(message: _148.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_148.ResponseListSnapshots>): _148.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _148.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseOfferSnapshot;
            fromJSON(object: any): _148.ResponseOfferSnapshot;
            toJSON(message: _148.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_148.ResponseOfferSnapshot>): _148.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _148.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _148.ResponseLoadSnapshotChunk;
            toJSON(message: _148.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_148.ResponseLoadSnapshotChunk>): _148.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _148.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ResponseApplySnapshotChunk;
            fromJSON(object: any): _148.ResponseApplySnapshotChunk;
            toJSON(message: _148.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_148.ResponseApplySnapshotChunk>): _148.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _148.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ConsensusParams;
            fromJSON(object: any): _148.ConsensusParams;
            toJSON(message: _148.ConsensusParams): unknown;
            fromPartial(object: Partial<_148.ConsensusParams>): _148.ConsensusParams;
        };
        BlockParams: {
            encode(message: _148.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.BlockParams;
            fromJSON(object: any): _148.BlockParams;
            toJSON(message: _148.BlockParams): unknown;
            fromPartial(object: Partial<_148.BlockParams>): _148.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _148.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.LastCommitInfo;
            fromJSON(object: any): _148.LastCommitInfo;
            toJSON(message: _148.LastCommitInfo): unknown;
            fromPartial(object: Partial<_148.LastCommitInfo>): _148.LastCommitInfo;
        };
        Event: {
            encode(message: _148.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Event;
            fromJSON(object: any): _148.Event;
            toJSON(message: _148.Event): unknown;
            fromPartial(object: Partial<_148.Event>): _148.Event;
        };
        EventAttribute: {
            encode(message: _148.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.EventAttribute;
            fromJSON(object: any): _148.EventAttribute;
            toJSON(message: _148.EventAttribute): unknown;
            fromPartial(object: Partial<_148.EventAttribute>): _148.EventAttribute;
        };
        TxResult: {
            encode(message: _148.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.TxResult;
            fromJSON(object: any): _148.TxResult;
            toJSON(message: _148.TxResult): unknown;
            fromPartial(object: Partial<_148.TxResult>): _148.TxResult;
        };
        Validator: {
            encode(message: _148.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Validator;
            fromJSON(object: any): _148.Validator;
            toJSON(message: _148.Validator): unknown;
            fromPartial(object: Partial<_148.Validator>): _148.Validator;
        };
        ValidatorUpdate: {
            encode(message: _148.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ValidatorUpdate;
            fromJSON(object: any): _148.ValidatorUpdate;
            toJSON(message: _148.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_148.ValidatorUpdate>): _148.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _148.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.VoteInfo;
            fromJSON(object: any): _148.VoteInfo;
            toJSON(message: _148.VoteInfo): unknown;
            fromPartial(object: Partial<_148.VoteInfo>): _148.VoteInfo;
        };
        Evidence: {
            encode(message: _148.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Evidence;
            fromJSON(object: any): _148.Evidence;
            toJSON(message: _148.Evidence): unknown;
            fromPartial(object: Partial<_148.Evidence>): _148.Evidence;
        };
        Snapshot: {
            encode(message: _148.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Snapshot;
            fromJSON(object: any): _148.Snapshot;
            toJSON(message: _148.Snapshot): unknown;
            fromPartial(object: Partial<_148.Snapshot>): _148.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _150.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Proof;
            fromJSON(object: any): _150.Proof;
            toJSON(message: _150.Proof): unknown;
            fromPartial(object: Partial<_150.Proof>): _150.Proof;
        };
        ValueOp: {
            encode(message: _150.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ValueOp;
            fromJSON(object: any): _150.ValueOp;
            toJSON(message: _150.ValueOp): unknown;
            fromPartial(object: Partial<_150.ValueOp>): _150.ValueOp;
        };
        DominoOp: {
            encode(message: _150.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.DominoOp;
            fromJSON(object: any): _150.DominoOp;
            toJSON(message: _150.DominoOp): unknown;
            fromPartial(object: Partial<_150.DominoOp>): _150.DominoOp;
        };
        ProofOp: {
            encode(message: _150.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ProofOp;
            fromJSON(object: any): _150.ProofOp;
            toJSON(message: _150.ProofOp): unknown;
            fromPartial(object: Partial<_150.ProofOp>): _150.ProofOp;
        };
        ProofOps: {
            encode(message: _150.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ProofOps;
            fromJSON(object: any): _150.ProofOps;
            toJSON(message: _150.ProofOps): unknown;
            fromPartial(object: Partial<_150.ProofOps>): _150.ProofOps;
        };
        PublicKey: {
            encode(message: _149.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.PublicKey;
            fromJSON(object: any): _149.PublicKey;
            toJSON(message: _149.PublicKey): unknown;
            fromPartial(object: Partial<_149.PublicKey>): _149.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _151.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.BitArray;
                fromJSON(object: any): _151.BitArray;
                toJSON(message: _151.BitArray): unknown;
                fromPartial(object: Partial<_151.BitArray>): _151.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _152.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ProtocolVersion;
            fromJSON(object: any): _152.ProtocolVersion;
            toJSON(message: _152.ProtocolVersion): unknown;
            fromPartial(object: Partial<_152.ProtocolVersion>): _152.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _152.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.NodeInfo;
            fromJSON(object: any): _152.NodeInfo;
            toJSON(message: _152.NodeInfo): unknown;
            fromPartial(object: Partial<_152.NodeInfo>): _152.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _152.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.NodeInfoOther;
            fromJSON(object: any): _152.NodeInfoOther;
            toJSON(message: _152.NodeInfoOther): unknown;
            fromPartial(object: Partial<_152.NodeInfoOther>): _152.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _152.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.PeerInfo;
            fromJSON(object: any): _152.PeerInfo;
            toJSON(message: _152.PeerInfo): unknown;
            fromPartial(object: Partial<_152.PeerInfo>): _152.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _152.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.PeerAddressInfo;
            fromJSON(object: any): _152.PeerAddressInfo;
            toJSON(message: _152.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_152.PeerAddressInfo>): _152.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _157.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ValidatorSet;
            fromJSON(object: any): _157.ValidatorSet;
            toJSON(message: _157.ValidatorSet): unknown;
            fromPartial(object: Partial<_157.ValidatorSet>): _157.ValidatorSet;
        };
        Validator: {
            encode(message: _157.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Validator;
            fromJSON(object: any): _157.Validator;
            toJSON(message: _157.Validator): unknown;
            fromPartial(object: Partial<_157.Validator>): _157.Validator;
        };
        SimpleValidator: {
            encode(message: _157.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.SimpleValidator;
            fromJSON(object: any): _157.SimpleValidator;
            toJSON(message: _157.SimpleValidator): unknown;
            fromPartial(object: Partial<_157.SimpleValidator>): _157.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _156.BlockIDFlag;
        blockIDFlagToJSON(object: _156.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _156.SignedMsgType;
        signedMsgTypeToJSON(object: _156.SignedMsgType): string;
        BlockIDFlag: typeof _156.BlockIDFlag;
        BlockIDFlagSDKType: typeof _156.BlockIDFlag;
        SignedMsgType: typeof _156.SignedMsgType;
        SignedMsgTypeSDKType: typeof _156.SignedMsgType;
        PartSetHeader: {
            encode(message: _156.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PartSetHeader;
            fromJSON(object: any): _156.PartSetHeader;
            toJSON(message: _156.PartSetHeader): unknown;
            fromPartial(object: Partial<_156.PartSetHeader>): _156.PartSetHeader;
        };
        Part: {
            encode(message: _156.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Part;
            fromJSON(object: any): _156.Part;
            toJSON(message: _156.Part): unknown;
            fromPartial(object: Partial<_156.Part>): _156.Part;
        };
        BlockID: {
            encode(message: _156.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.BlockID;
            fromJSON(object: any): _156.BlockID;
            toJSON(message: _156.BlockID): unknown;
            fromPartial(object: Partial<_156.BlockID>): _156.BlockID;
        };
        Header: {
            encode(message: _156.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Header;
            fromJSON(object: any): _156.Header;
            toJSON(message: _156.Header): unknown;
            fromPartial(object: Partial<_156.Header>): _156.Header;
        };
        Data: {
            encode(message: _156.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Data;
            fromJSON(object: any): _156.Data;
            toJSON(message: _156.Data): unknown;
            fromPartial(object: Partial<_156.Data>): _156.Data;
        };
        Vote: {
            encode(message: _156.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Vote;
            fromJSON(object: any): _156.Vote;
            toJSON(message: _156.Vote): unknown;
            fromPartial(object: Partial<_156.Vote>): _156.Vote;
        };
        Commit: {
            encode(message: _156.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Commit;
            fromJSON(object: any): _156.Commit;
            toJSON(message: _156.Commit): unknown;
            fromPartial(object: Partial<_156.Commit>): _156.Commit;
        };
        CommitSig: {
            encode(message: _156.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.CommitSig;
            fromJSON(object: any): _156.CommitSig;
            toJSON(message: _156.CommitSig): unknown;
            fromPartial(object: Partial<_156.CommitSig>): _156.CommitSig;
        };
        Proposal: {
            encode(message: _156.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Proposal;
            fromJSON(object: any): _156.Proposal;
            toJSON(message: _156.Proposal): unknown;
            fromPartial(object: Partial<_156.Proposal>): _156.Proposal;
        };
        SignedHeader: {
            encode(message: _156.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.SignedHeader;
            fromJSON(object: any): _156.SignedHeader;
            toJSON(message: _156.SignedHeader): unknown;
            fromPartial(object: Partial<_156.SignedHeader>): _156.SignedHeader;
        };
        LightBlock: {
            encode(message: _156.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.LightBlock;
            fromJSON(object: any): _156.LightBlock;
            toJSON(message: _156.LightBlock): unknown;
            fromPartial(object: Partial<_156.LightBlock>): _156.LightBlock;
        };
        BlockMeta: {
            encode(message: _156.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.BlockMeta;
            fromJSON(object: any): _156.BlockMeta;
            toJSON(message: _156.BlockMeta): unknown;
            fromPartial(object: Partial<_156.BlockMeta>): _156.BlockMeta;
        };
        TxProof: {
            encode(message: _156.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.TxProof;
            fromJSON(object: any): _156.TxProof;
            toJSON(message: _156.TxProof): unknown;
            fromPartial(object: Partial<_156.TxProof>): _156.TxProof;
        };
        ConsensusParams: {
            encode(message: _155.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ConsensusParams;
            fromJSON(object: any): _155.ConsensusParams;
            toJSON(message: _155.ConsensusParams): unknown;
            fromPartial(object: Partial<_155.ConsensusParams>): _155.ConsensusParams;
        };
        BlockParams: {
            encode(message: _155.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.BlockParams;
            fromJSON(object: any): _155.BlockParams;
            toJSON(message: _155.BlockParams): unknown;
            fromPartial(object: Partial<_155.BlockParams>): _155.BlockParams;
        };
        EvidenceParams: {
            encode(message: _155.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.EvidenceParams;
            fromJSON(object: any): _155.EvidenceParams;
            toJSON(message: _155.EvidenceParams): unknown;
            fromPartial(object: Partial<_155.EvidenceParams>): _155.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _155.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ValidatorParams;
            fromJSON(object: any): _155.ValidatorParams;
            toJSON(message: _155.ValidatorParams): unknown;
            fromPartial(object: Partial<_155.ValidatorParams>): _155.ValidatorParams;
        };
        VersionParams: {
            encode(message: _155.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.VersionParams;
            fromJSON(object: any): _155.VersionParams;
            toJSON(message: _155.VersionParams): unknown;
            fromPartial(object: Partial<_155.VersionParams>): _155.VersionParams;
        };
        HashedParams: {
            encode(message: _155.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.HashedParams;
            fromJSON(object: any): _155.HashedParams;
            toJSON(message: _155.HashedParams): unknown;
            fromPartial(object: Partial<_155.HashedParams>): _155.HashedParams;
        };
        Evidence: {
            encode(message: _154.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Evidence;
            fromJSON(object: any): _154.Evidence;
            toJSON(message: _154.Evidence): unknown;
            fromPartial(object: Partial<_154.Evidence>): _154.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _154.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.DuplicateVoteEvidence;
            fromJSON(object: any): _154.DuplicateVoteEvidence;
            toJSON(message: _154.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_154.DuplicateVoteEvidence>): _154.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _154.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.LightClientAttackEvidence;
            fromJSON(object: any): _154.LightClientAttackEvidence;
            toJSON(message: _154.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_154.LightClientAttackEvidence>): _154.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _154.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EvidenceList;
            fromJSON(object: any): _154.EvidenceList;
            toJSON(message: _154.EvidenceList): unknown;
            fromPartial(object: Partial<_154.EvidenceList>): _154.EvidenceList;
        };
        Block: {
            encode(message: _153.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Block;
            fromJSON(object: any): _153.Block;
            toJSON(message: _153.Block): unknown;
            fromPartial(object: Partial<_153.Block>): _153.Block;
        };
    };
    const version: {
        App: {
            encode(message: _158.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.App;
            fromJSON(object: any): _158.App;
            toJSON(message: _158.App): unknown;
            fromPartial(object: Partial<_158.App>): _158.App;
        };
        Consensus: {
            encode(message: _158.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Consensus;
            fromJSON(object: any): _158.Consensus;
            toJSON(message: _158.Consensus): unknown;
            fromPartial(object: Partial<_158.Consensus>): _158.Consensus;
        };
    };
}
