import { Tx, TxSDKType } from "../../../common/common";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export interface MsgUnBond {
  txIn?: Tx;
  nodeAddress: Uint8Array;
  bondAddress: string;
  amount: string;
  signer: Uint8Array;
  bondProviderAddress: Uint8Array;
}
export interface MsgUnBondSDKType {
  tx_in?: TxSDKType;
  node_address: Uint8Array;
  bond_address: string;
  amount: string;
  signer: Uint8Array;
  bond_provider_address: Uint8Array;
}

function createBaseMsgUnBond(): MsgUnBond {
  return {
    txIn: undefined,
    nodeAddress: new Uint8Array(),
    bondAddress: "",
    amount: "",
    signer: new Uint8Array(),
    bondProviderAddress: new Uint8Array()
  };
}

export const MsgUnBond = {
  encode(message: MsgUnBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txIn !== undefined) {
      Tx.encode(message.txIn, writer.uint32(10).fork()).ldelim();
    }

    if (message.nodeAddress.length !== 0) {
      writer.uint32(18).bytes(message.nodeAddress);
    }

    if (message.bondAddress !== "") {
      writer.uint32(42).string(message.bondAddress);
    }

    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }

    if (message.signer.length !== 0) {
      writer.uint32(58).bytes(message.signer);
    }

    if (message.bondProviderAddress.length !== 0) {
      writer.uint32(66).bytes(message.bondProviderAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnBond();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txIn = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.nodeAddress = reader.bytes();
          break;

        case 5:
          message.bondAddress = reader.string();
          break;

        case 6:
          message.amount = reader.string();
          break;

        case 7:
          message.signer = reader.bytes();
          break;

        case 8:
          message.bondProviderAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUnBond {
    return {
      txIn: isSet(object.txIn) ? Tx.fromJSON(object.txIn) : undefined,
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      bondAddress: isSet(object.bondAddress) ? String(object.bondAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
      bondProviderAddress: isSet(object.bondProviderAddress) ? bytesFromBase64(object.bondProviderAddress) : new Uint8Array()
    };
  },

  toJSON(message: MsgUnBond): unknown {
    const obj: any = {};
    message.txIn !== undefined && (obj.txIn = message.txIn ? Tx.toJSON(message.txIn) : undefined);
    message.nodeAddress !== undefined && (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.bondAddress !== undefined && (obj.bondAddress = message.bondAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.signer !== undefined && (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    message.bondProviderAddress !== undefined && (obj.bondProviderAddress = base64FromBytes(message.bondProviderAddress !== undefined ? message.bondProviderAddress : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgUnBond>): MsgUnBond {
    const message = createBaseMsgUnBond();
    message.txIn = object.txIn !== undefined && object.txIn !== null ? Tx.fromPartial(object.txIn) : undefined;
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
    message.bondAddress = object.bondAddress ?? "";
    message.amount = object.amount ?? "";
    message.signer = object.signer ?? new Uint8Array();
    message.bondProviderAddress = object.bondProviderAddress ?? new Uint8Array();
    return message;
  }

};