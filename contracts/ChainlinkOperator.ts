/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ChainlinkOperatorInterface extends utils.Interface {
  functions: {
    "fulfillOracleRequest2(bytes32,uint256,address,bytes4,uint256,bytes)": FunctionFragment;
    "getAuthorizedSenders()": FunctionFragment;
    "getExpiryTime()": FunctionFragment;
    "onTokenTransfer(address,uint256,bytes)": FunctionFragment;
    "oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAuthorizedSenders(address[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fulfillOracleRequest2"
      | "getAuthorizedSenders"
      | "getExpiryTime"
      | "onTokenTransfer"
      | "oracleRequest"
      | "owner"
      | "renounceOwnership"
      | "setAuthorizedSenders"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fulfillOracleRequest2",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizedSenders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getExpiryTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onTokenTransfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleRequest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizedSenders",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "fulfillOracleRequest2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizedSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpiryTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizedSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizedSendersChanged(address[],address)": EventFragment;
    "CancelOracleRequest(bytes32)": EventFragment;
    "OracleRequest(bytes32,address,bytes32,uint256,address,bytes4,uint256,uint256,bytes)": EventFragment;
    "OracleResponse(bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizedSendersChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelOracleRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleResponse"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AuthorizedSendersChangedEventObject {
  senders: string[];
  changedBy: string;
}
export type AuthorizedSendersChangedEvent = TypedEvent<
  [string[], string],
  AuthorizedSendersChangedEventObject
>;

export type AuthorizedSendersChangedEventFilter =
  TypedEventFilter<AuthorizedSendersChangedEvent>;

export interface CancelOracleRequestEventObject {
  requestId: string;
}
export type CancelOracleRequestEvent = TypedEvent<
  [string],
  CancelOracleRequestEventObject
>;

export type CancelOracleRequestEventFilter =
  TypedEventFilter<CancelOracleRequestEvent>;

export interface OracleRequestEventObject {
  specId: string;
  requester: string;
  requestId: string;
  payment: BigNumber;
  callbackAddr: string;
  callbackFunctionId: string;
  cancelExpiration: BigNumber;
  dataVersion: BigNumber;
  data: string;
}
export type OracleRequestEvent = TypedEvent<
  [
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    string
  ],
  OracleRequestEventObject
>;

export type OracleRequestEventFilter = TypedEventFilter<OracleRequestEvent>;

export interface OracleResponseEventObject {
  requestId: string;
}
export type OracleResponseEvent = TypedEvent<
  [string],
  OracleResponseEventObject
>;

export type OracleResponseEventFilter = TypedEventFilter<OracleResponseEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ChainlinkOperator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainlinkOperatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    fulfillOracleRequest2(
      requestId: PromiseOrValue<BytesLike>,
      payment: PromiseOrValue<BigNumberish>,
      callbackAddress: PromiseOrValue<string>,
      callbackFunctionId: PromiseOrValue<BytesLike>,
      expiration: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<[string[]]>;

    getExpiryTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    onTokenTransfer(
      sender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    oracleRequest(
      sender: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      specId: PromiseOrValue<BytesLike>,
      callbackAddress: PromiseOrValue<string>,
      callbackFunctionId: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      dataVersion: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  fulfillOracleRequest2(
    requestId: PromiseOrValue<BytesLike>,
    payment: PromiseOrValue<BigNumberish>,
    callbackAddress: PromiseOrValue<string>,
    callbackFunctionId: PromiseOrValue<BytesLike>,
    expiration: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAuthorizedSenders(overrides?: CallOverrides): Promise<string[]>;

  getExpiryTime(overrides?: CallOverrides): Promise<BigNumber>;

  onTokenTransfer(
    sender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  oracleRequest(
    sender: PromiseOrValue<string>,
    payment: PromiseOrValue<BigNumberish>,
    specId: PromiseOrValue<BytesLike>,
    callbackAddress: PromiseOrValue<string>,
    callbackFunctionId: PromiseOrValue<BytesLike>,
    nonce: PromiseOrValue<BigNumberish>,
    dataVersion: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAuthorizedSenders(
    senders: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fulfillOracleRequest2(
      requestId: PromiseOrValue<BytesLike>,
      payment: PromiseOrValue<BigNumberish>,
      callbackAddress: PromiseOrValue<string>,
      callbackFunctionId: PromiseOrValue<BytesLike>,
      expiration: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<string[]>;

    getExpiryTime(overrides?: CallOverrides): Promise<BigNumber>;

    onTokenTransfer(
      sender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    oracleRequest(
      sender: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      specId: PromiseOrValue<BytesLike>,
      callbackAddress: PromiseOrValue<string>,
      callbackFunctionId: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      dataVersion: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorizedSendersChanged(address[],address)"(
      senders?: null,
      changedBy?: null
    ): AuthorizedSendersChangedEventFilter;
    AuthorizedSendersChanged(
      senders?: null,
      changedBy?: null
    ): AuthorizedSendersChangedEventFilter;

    "CancelOracleRequest(bytes32)"(
      requestId?: PromiseOrValue<BytesLike> | null
    ): CancelOracleRequestEventFilter;
    CancelOracleRequest(
      requestId?: PromiseOrValue<BytesLike> | null
    ): CancelOracleRequestEventFilter;

    "OracleRequest(bytes32,address,bytes32,uint256,address,bytes4,uint256,uint256,bytes)"(
      specId?: PromiseOrValue<BytesLike> | null,
      requester?: null,
      requestId?: null,
      payment?: null,
      callbackAddr?: null,
      callbackFunctionId?: null,
      cancelExpiration?: null,
      dataVersion?: null,
      data?: null
    ): OracleRequestEventFilter;
    OracleRequest(
      specId?: PromiseOrValue<BytesLike> | null,
      requester?: null,
      requestId?: null,
      payment?: null,
      callbackAddr?: null,
      callbackFunctionId?: null,
      cancelExpiration?: null,
      dataVersion?: null,
      data?: null
    ): OracleRequestEventFilter;

    "OracleResponse(bytes32)"(
      requestId?: PromiseOrValue<BytesLike> | null
    ): OracleResponseEventFilter;
    OracleResponse(
      requestId?: PromiseOrValue<BytesLike> | null
    ): OracleResponseEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    fulfillOracleRequest2(
      requestId: PromiseOrValue<BytesLike>,
      payment: PromiseOrValue<BigNumberish>,
      callbackAddress: PromiseOrValue<string>,
      callbackFunctionId: PromiseOrValue<BytesLike>,
      expiration: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<BigNumber>;

    getExpiryTime(overrides?: CallOverrides): Promise<BigNumber>;

    onTokenTransfer(
      sender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    oracleRequest(
      sender: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      specId: PromiseOrValue<BytesLike>,
      callbackAddress: PromiseOrValue<string>,
      callbackFunctionId: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      dataVersion: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fulfillOracleRequest2(
      requestId: PromiseOrValue<BytesLike>,
      payment: PromiseOrValue<BigNumberish>,
      callbackAddress: PromiseOrValue<string>,
      callbackFunctionId: PromiseOrValue<BytesLike>,
      expiration: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAuthorizedSenders(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExpiryTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onTokenTransfer(
      sender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    oracleRequest(
      sender: PromiseOrValue<string>,
      payment: PromiseOrValue<BigNumberish>,
      specId: PromiseOrValue<BytesLike>,
      callbackAddress: PromiseOrValue<string>,
      callbackFunctionId: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      dataVersion: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAuthorizedSenders(
      senders: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
