/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RiskpoolToken, RiskpoolTokenInterface } from "../RiskpoolToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SYMBOL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040518060400160405280601281526020017123a4a3102934b9b5b837b7b6102a37b5b2b760711b8152506040518060400160405280600381526020016214941560ea1b815250816003908051906020019061006e92919061008a565b50805161008290600490602084019061008a565b50505061015e565b82805461009690610123565b90600052602060002090601f0160209004810192826100b857600085556100fe565b82601f106100d157805160ff19168380011785556100fe565b828001600101855582156100fe579182015b828111156100fe5782518255916020019190600101906100e3565b5061010a92915061010e565b5090565b5b8082111561010a576000815560010161010f565b60028104600182168061013757607f821691505b6020821081141561015857634e487b7160e01b600052602260045260246000fd5b50919050565b6108fc8061016d6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146101a8578063a9059cbb146101bb578063dd62ed3e146101ce578063f76f8d78146101e1576100cf565b806370a082311461015c57806395d89b411461016f578063a3f4df7e14610177576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc610203565b6040516100e99190610814565b60405180910390f35b6101056101003660046107eb565b610295565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b6101056101353660046107b0565b6102ad565b604051601281526020016100e9565b6101056101573660046107eb565b6102d1565b61011961016a36600461075d565b6102f3565b6100dc610312565b6100dc6040518060400160405280601281526020017123a4a3102934b9b5b837b7b6102a37b5b2b760711b81525081565b6101056101b63660046107eb565b610321565b6101056101c93660046107eb565b6103a1565b6101196101dc36600461077e565b6103af565b6100dc6040518060400160405280600381526020016214941560ea1b81525081565b6060600380546102129061088b565b80601f016020809104026020016040519081016040528092919081815260200182805461023e9061088b565b801561028b5780601f106102605761010080835404028352916020019161028b565b820191906000526020600020905b81548152906001019060200180831161026e57829003601f168201915b5050505050905090565b6000336102a38185856103da565b5060019392505050565b6000336102bb8582856104fe565b6102c6858585610578565b506001949350505050565b6000336102a38185856102e483836103af565b6102ee9190610867565b6103da565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546102129061088b565b6000338161032f82866103af565b9050838110156103945760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102c682868684036103da565b6000336102a3818585610578565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661043c5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161038b565b6001600160a01b03821661049d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161038b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061050a84846103af565b9050600019811461057257818110156105655760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161038b565b61057284848484036103da565b50505050565b6001600160a01b0383166105dc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161038b565b6001600160a01b03821661063e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161038b565b6001600160a01b038316600090815260208190526040902054818110156106b65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161038b565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106ed908490610867565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161073991815260200190565b60405180910390a3610572565b80356001600160a01b038116811461030d57600080fd5b60006020828403121561076e578081fd5b61077782610746565b9392505050565b60008060408385031215610790578081fd5b61079983610746565b91506107a760208401610746565b90509250929050565b6000806000606084860312156107c4578081fd5b6107cd84610746565b92506107db60208501610746565b9150604084013590509250925092565b600080604083850312156107fd578182fd5b61080683610746565b946020939093013593505050565b6000602080835283518082850152825b8181101561084057858101830151858201604001528201610824565b818111156108515783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561088657634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061089f57607f821691505b602082108114156108c057634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220e3a11ad24529a3931ba0b033dfbf154df941955ae33e559cfe647bad0409008f64736f6c63430008020033";

type RiskpoolTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RiskpoolTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RiskpoolToken__factory extends ContractFactory {
  constructor(...args: RiskpoolTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RiskpoolToken> {
    return super.deploy(overrides || {}) as Promise<RiskpoolToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RiskpoolToken {
    return super.attach(address) as RiskpoolToken;
  }
  override connect(signer: Signer): RiskpoolToken__factory {
    return super.connect(signer) as RiskpoolToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RiskpoolTokenInterface {
    return new utils.Interface(_abi) as RiskpoolTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RiskpoolToken {
    return new Contract(address, _abi, signerOrProvider) as RiskpoolToken;
  }
}
