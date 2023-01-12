import { Tx, TxSDKType } from "../../../common/common";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgBond {
  txIn?: Tx;
  nodeAddress: Uint8Array;
  bond: string;
  bondAddress: string;
  signer: Uint8Array;
  bondProviderAddress: Uint8Array;
  operatorFee: Long;
}
export interface MsgBondSDKType {
  tx_in?: TxSDKType;
  node_address: Uint8Array;
  bond: string;
  bond_address: string;
  signer: Uint8Array;
  bond_provider_address: Uint8Array;
  operator_fee: Long;
}

function createBaseMsgBond(): MsgBond {
  return {
    txIn: undefined,
    nodeAddress: new Uint8Array(),
    bond: "",
    bondAddress: "",
    signer: new Uint8Array(),
    bondProviderAddress: new Uint8Array(),
    operatorFee: Long.ZERO
  };
}

export const MsgBond = {
  encode(message: MsgBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txIn !== undefined) {
      Tx.encode(message.txIn, writer.uint32(10).fork()).ldelim();
    }

    if (message.nodeAddress.length !== 0) {
      writer.uint32(18).bytes(message.nodeAddress);
    }

    if (message.bond !== "") {
      writer.uint32(26).string(message.bond);
    }

    if (message.bondAddress !== "") {
      writer.uint32(34).string(message.bondAddress);
    }

    if (message.signer.length !== 0) {
      writer.uint32(42).bytes(message.signer);
    }

    if (message.bondProviderAddress.length !== 0) {
      writer.uint32(50).bytes(message.bondProviderAddress);
    }

    if (!message.operatorFee.isZero()) {
      writer.uint32(56).int64(message.operatorFee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBond();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txIn = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.nodeAddress = reader.bytes();
          break;

        case 3:
          message.bond = reader.string();
          break;

        case 4:
          message.bondAddress = reader.string();
          break;

        case 5:
          message.signer = reader.bytes();
          break;

        case 6:
          message.bondProviderAddress = reader.bytes();
          break;

        case 7:
          message.operatorFee = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBond {
    return {
      txIn: isSet(object.txIn) ? Tx.fromJSON(object.txIn) : undefined,
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      bond: isSet(object.bond) ? String(object.bond) : "",
      bondAddress: isSet(object.bondAddress) ? String(object.bondAddress) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
      bondProviderAddress: isSet(object.bondProviderAddress) ? bytesFromBase64(object.bondProviderAddress) : new Uint8Array(),
      operatorFee: isSet(object.operatorFee) ? Long.fromValue(object.operatorFee) : Long.ZERO
    };
  },

  toJSON(message: MsgBond): unknown {
    const obj: any = {};
    message.txIn !== undefined && (obj.txIn = message.txIn ? Tx.toJSON(message.txIn) : undefined);
    message.nodeAddress !== undefined && (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.bond !== undefined && (obj.bond = message.bond);
    message.bondAddress !== undefined && (obj.bondAddress = message.bondAddress);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    message.bondProviderAddress !== undefined && (obj.bondProviderAddress = base64FromBytes(message.bondProviderAddress !== undefined ? message.bondProviderAddress : new Uint8Array()));
    message.operatorFee !== undefined && (obj.operatorFee = (message.operatorFee || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgBond>): MsgBond {
    const message = createBaseMsgBond();
    message.txIn = object.txIn !== undefined && object.txIn !== null ? Tx.fromPartial(object.txIn) : undefined;
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
    message.bond = object.bond ?? "";
    message.bondAddress = object.bondAddress ?? "";
    message.signer = object.signer ?? new Uint8Array();
    message.bondProviderAddress = object.bondProviderAddress ?? new Uint8Array();
    message.operatorFee = object.operatorFee !== undefined && object.operatorFee !== null ? Long.fromValue(object.operatorFee) : Long.ZERO;
    return message;
  }

};