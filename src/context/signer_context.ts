import { Signer } from "ethers";
import { ErrorFragment } from "ethers/lib/utils";
import React from "react";

export interface SignerContext {
    data: SignerData;
    dispatch: React.Dispatch<SignerAction>;
}

export interface SignerData {
    signer: Signer | undefined;
}

export const SignerContext = React.createContext<SignerContext|undefined>(undefined);

export function initialSignerData(): SignerData {
    return {
        signer: undefined
    };
}

export enum SignerActionType {
    SET,
    UNSET
}

export interface SignerAction {
    type: SignerActionType;
    signer?: Signer;
}

export const signerReducer = (state: SignerData, action: SignerAction): SignerData => {
    switch (action.type) {
        case SignerActionType.SET:
            return { signer: action?.signer };
        case SignerActionType.UNSET:
            return { signer: undefined };
        default:
            throw Error("unxpected action type " + action.type);
    }
}