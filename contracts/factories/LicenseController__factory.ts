/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  LicenseController,
  LicenseControllerInterface,
} from "../LicenseController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "productAddress",
        type: "address",
      },
    ],
    name: "getAuthorizationStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isAuthorized",
        type: "bool",
      },
      {
        internalType: "address",
        name: "policyFlow",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b610630806100ed6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c4d66de81461003b578063d3e9c31414610050575b600080fd5b61004e61004936600461056c565b61008b565b005b61006361005e36600461056c565b610215565b6040805193845291151560208401526001600160a01b03169082015260600160405180910390f35b600054610100900460ff16158080156100ab5750600054600160ff909116105b806100cc57506100ba30610329565b1580156100cc575060005460ff166001145b6101345760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610157576000805461ff0019166101001790555b6000805462010000600160b01b031916620100006001600160a01b03851602179055610181600090565b6541636365737360d01b146101c3576101a26541636365737360d01b61033c565b600180546001600160a01b0319166001600160a01b03929092169190911790555b6101cb610424565b8015610211576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b600254604051632b1c7f7360e01b81526001600160a01b0383811660048301526000928392839290911690632b1c7f739060240160206040518083038186803b15801561026157600080fd5b505afa158015610275573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029991906105ca565b92506102a4836104c6565b60025460405163e61ae29760e01b8152600481018690529193506001600160a01b03169063e61ae2979060240160206040518083038186803b1580156102e957600080fd5b505afa1580156102fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610321919061058f565b929491935050565b6001600160a01b0381163b15155b919050565b60008054604051631c2d8fb360e31b815260048101849052620100009091046001600160a01b03169063e16c7d989060240160206040518083038186803b15801561038657600080fd5b505afa15801561039a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103be919061058f565b90506001600160a01b0381166103375760405162461bcd60e51b815260206004820152602560248201527f4552524f523a4352432d3030343a434f4e54524143545f4e4f545f5245474953604482015264151154915160da1b606482015260840161012b565b600054610100900460ff1661048f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161012b565b6104a46810dbdb5c1bdb995b9d60ba1b61033c565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60006003600254604051635e966e4560e01b8152600481018590526001600160a01b0390911690635e966e459060240160206040518083038186803b15801561050e57600080fd5b505afa158015610522573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054691906105ab565b600681111561056557634e487b7160e01b600052602160045260246000fd5b1492915050565b60006020828403121561057d578081fd5b8135610588816105e2565b9392505050565b6000602082840312156105a0578081fd5b8151610588816105e2565b6000602082840312156105bc578081fd5b815160078110610588578182fd5b6000602082840312156105db578081fd5b5051919050565b6001600160a01b03811681146105f757600080fd5b5056fea2646970667358221220a41b2837820550469c00347b63509bbc5846c4d8f00b1aa38562b71d4af13d1964736f6c63430008020033";

type LicenseControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LicenseControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LicenseController__factory extends ContractFactory {
  constructor(...args: LicenseControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LicenseController> {
    return super.deploy(overrides || {}) as Promise<LicenseController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LicenseController {
    return super.attach(address) as LicenseController;
  }
  override connect(signer: Signer): LicenseController__factory {
    return super.connect(signer) as LicenseController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LicenseControllerInterface {
    return new utils.Interface(_abi) as LicenseControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LicenseController {
    return new Contract(address, _abi, signerOrProvider) as LicenseController;
  }
}
