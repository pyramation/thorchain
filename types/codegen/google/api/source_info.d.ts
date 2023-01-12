import { Any, AnySDKType } from "../protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** Source information used to create a Service Config */
export interface SourceInfo {
    /** All files used during config generation. */
    sourceFiles: Any[];
}
/** Source information used to create a Service Config */
export interface SourceInfoSDKType {
    source_files: AnySDKType[];
}
export declare const SourceInfo: {
    encode(message: SourceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo;
    fromJSON(object: any): SourceInfo;
    toJSON(message: SourceInfo): unknown;
    fromPartial(object: Partial<SourceInfo>): SourceInfo;
};
