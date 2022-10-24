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

export interface RiskpoolServiceInterface extends utils.Interface {
  functions: {
    "RISKPOOL_NAME()": FunctionFragment;
    "burnBundle(uint256)": FunctionFragment;
    "closeBundle(uint256)": FunctionFragment;
    "collateralizePolicy(uint256,bytes32,uint256)": FunctionFragment;
    "createBundle(address,bytes,uint256)": FunctionFragment;
    "defundBundle(uint256,uint256)": FunctionFragment;
    "fundBundle(uint256,uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "lockBundle(uint256)": FunctionFragment;
    "processPayout(uint256,bytes32,uint256)": FunctionFragment;
    "processPremium(uint256,bytes32,uint256)": FunctionFragment;
    "registerRiskpool(address,address,uint256,uint256)": FunctionFragment;
    "releasePolicy(uint256,bytes32)": FunctionFragment;
    "setMaximumNumberOfActiveBundles(uint256,uint256)": FunctionFragment;
    "unlockBundle(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "RISKPOOL_NAME"
      | "burnBundle"
      | "closeBundle"
      | "collateralizePolicy"
      | "createBundle"
      | "defundBundle"
      | "fundBundle"
      | "initialize"
      | "lockBundle"
      | "processPayout"
      | "processPremium"
      | "registerRiskpool"
      | "releasePolicy"
      | "setMaximumNumberOfActiveBundles"
      | "unlockBundle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "RISKPOOL_NAME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnBundle",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "closeBundle",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralizePolicy",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createBundle",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "defundBundle",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "fundBundle",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockBundle",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "processPayout",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "processPremium",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerRiskpool",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "releasePolicy",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaximumNumberOfActiveBundles",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockBundle",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "RISKPOOL_NAME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burnBundle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeBundle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralizePolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createBundle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defundBundle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fundBundle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockBundle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processPayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processPremium",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRiskpool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasePolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaximumNumberOfActiveBundles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockBundle",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface RiskpoolService extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RiskpoolServiceInterface;

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
    RISKPOOL_NAME(overrides?: CallOverrides): Promise<[string]>;

    burnBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closeBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collateralizePolicy(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createBundle(
      owner: PromiseOrValue<string>,
      filter: PromiseOrValue<BytesLike>,
      initialCapital: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    defundBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    processPayout(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    processPremium(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerRiskpool(
      wallet: PromiseOrValue<string>,
      erc20Token: PromiseOrValue<string>,
      collateralizationLevel: PromiseOrValue<BigNumberish>,
      sumOfSumInsuredCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releasePolicy(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaximumNumberOfActiveBundles(
      riskpoolId: PromiseOrValue<BigNumberish>,
      maxNumberOfActiveBundles: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlockBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  RISKPOOL_NAME(overrides?: CallOverrides): Promise<string>;

  burnBundle(
    bundleId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closeBundle(
    bundleId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collateralizePolicy(
    bundleId: PromiseOrValue<BigNumberish>,
    processId: PromiseOrValue<BytesLike>,
    collateralAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createBundle(
    owner: PromiseOrValue<string>,
    filter: PromiseOrValue<BytesLike>,
    initialCapital: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  defundBundle(
    bundleId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundBundle(
    bundleId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    registry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockBundle(
    bundleId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  processPayout(
    bundleId: PromiseOrValue<BigNumberish>,
    processId: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  processPremium(
    bundleId: PromiseOrValue<BigNumberish>,
    processId: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerRiskpool(
    wallet: PromiseOrValue<string>,
    erc20Token: PromiseOrValue<string>,
    collateralizationLevel: PromiseOrValue<BigNumberish>,
    sumOfSumInsuredCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releasePolicy(
    bundleId: PromiseOrValue<BigNumberish>,
    processId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaximumNumberOfActiveBundles(
    riskpoolId: PromiseOrValue<BigNumberish>,
    maxNumberOfActiveBundles: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlockBundle(
    bundleId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    RISKPOOL_NAME(overrides?: CallOverrides): Promise<string>;

    burnBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    closeBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    collateralizePolicy(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createBundle(
      owner: PromiseOrValue<string>,
      filter: PromiseOrValue<BytesLike>,
      initialCapital: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    defundBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fundBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      registry: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    lockBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    processPayout(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    processPremium(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerRiskpool(
      wallet: PromiseOrValue<string>,
      erc20Token: PromiseOrValue<string>,
      collateralizationLevel: PromiseOrValue<BigNumberish>,
      sumOfSumInsuredCap: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    releasePolicy(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMaximumNumberOfActiveBundles(
      riskpoolId: PromiseOrValue<BigNumberish>,
      maxNumberOfActiveBundles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    RISKPOOL_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    burnBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closeBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collateralizePolicy(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createBundle(
      owner: PromiseOrValue<string>,
      filter: PromiseOrValue<BytesLike>,
      initialCapital: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    defundBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    processPayout(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    processPremium(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerRiskpool(
      wallet: PromiseOrValue<string>,
      erc20Token: PromiseOrValue<string>,
      collateralizationLevel: PromiseOrValue<BigNumberish>,
      sumOfSumInsuredCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releasePolicy(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaximumNumberOfActiveBundles(
      riskpoolId: PromiseOrValue<BigNumberish>,
      maxNumberOfActiveBundles: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlockBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    RISKPOOL_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burnBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closeBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collateralizePolicy(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createBundle(
      owner: PromiseOrValue<string>,
      filter: PromiseOrValue<BytesLike>,
      initialCapital: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    defundBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    processPayout(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    processPremium(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerRiskpool(
      wallet: PromiseOrValue<string>,
      erc20Token: PromiseOrValue<string>,
      collateralizationLevel: PromiseOrValue<BigNumberish>,
      sumOfSumInsuredCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releasePolicy(
      bundleId: PromiseOrValue<BigNumberish>,
      processId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaximumNumberOfActiveBundles(
      riskpoolId: PromiseOrValue<BigNumberish>,
      maxNumberOfActiveBundles: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlockBundle(
      bundleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}