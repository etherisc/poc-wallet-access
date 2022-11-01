import WalletConnectProvider from "@walletconnect/web3-provider";
import { Button } from "antd";
import { ethers } from "ethers";
import { useContext } from "react";
import { walletConnectConfig } from "../../config/appConfig";
import { SignerContext, SignerActionType } from "../../context/signer_context";

export default function LoginWithWalletConnectButton() {
    const signerContext = useContext(SignerContext);

    async function login() {
        console.log("wallet connect login");

        //  Create WalletConnect Provider
        const wcProvider = new WalletConnectProvider(walletConnectConfig);

        //  Enable session (triggers QR Code modal)
        await wcProvider.enable();

        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(wcProvider);

        // MetaMask requires requesting permission to connect users accounts
        // await provider.send("eth_requestAccounts", []);

        console.log("getting wc signer");
        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();
        signerContext?.dispatch({ type: SignerActionType.SET, signer: signer });
    }

    let button = (<></>);
    
    if (signerContext?.data.signer === undefined) {
        button = (<Button onClick={login}>Login with Wallet Connect</Button>);
    }

    return (
        <>{button}</>
    );
}