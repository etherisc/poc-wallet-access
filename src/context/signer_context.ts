import { Signer } from "ethers";
import React from "react";

export interface SignerContext {
    signer: Signer | undefined;
    isLoading: boolean;
}

export const SignerContext = React.createContext<SignerContext|null>(null);

export function createSignerContext(signer: Signer | undefined, isLoading: boolean): SignerContext {
    return {
        signer,
        isLoading
    };
}