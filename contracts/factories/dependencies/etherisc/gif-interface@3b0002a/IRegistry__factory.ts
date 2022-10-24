/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRegistry,
  IRegistryInterface,
} from "../../../../dependencies/etherisc/gif-interface@3b0002a/IRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "release",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
    ],
    name: "LogContractDeregistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "release",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isNew",
        type: "bool",
      },
    ],
    name: "LogContractRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "release",
        type: "bytes32",
      },
    ],
    name: "LogReleasePrepared",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "contractName",
    outputs: [
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contracts",
    outputs: [
      {
        internalType: "uint256",
        name: "_numberOfContracts",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
    ],
    name: "deregister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_release",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
    ],
    name: "deregisterInRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
    ],
    name: "ensureSender",
    outputs: [
      {
        internalType: "bool",
        name: "_senderMatches",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
    ],
    name: "getContract",
    outputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_release",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
    ],
    name: "getContractInRelease",
    outputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRelease",
    outputs: [
      {
        internalType: "bytes32",
        name: "_release",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_newRelease",
        type: "bytes32",
      },
    ],
    name: "prepareRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_release",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_contractName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    name: "registerInRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IRegistryInterface {
    return new utils.Interface(_abi) as IRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRegistry {
    return new Contract(address, _abi, signerOrProvider) as IRegistry;
  }
}
