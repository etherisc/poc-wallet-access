/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IQuery,
  IQueryInterface,
} from "../../../../dependencies/etherisc/gif-interface@3b0002a/IQuery";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "LogOracleCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "responsibleOracleId",
        type: "uint256",
      },
    ],
    name: "LogOracleRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "responder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "LogOracleResponded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "callbackMethodName",
        type: "string",
      },
      {
        internalType: "address",
        name: "callbackContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "responsibleOracleId",
        type: "uint256",
      },
    ],
    name: "request",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "responder",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "respond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IQuery__factory {
  static readonly abi = _abi;
  static createInterface(): IQueryInterface {
    return new utils.Interface(_abi) as IQueryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IQuery {
    return new Contract(address, _abi, signerOrProvider) as IQuery;
  }
}
