import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, utils, Wallet } from "ethers";
import { useState } from "react";
import { AyiiProduct__factory, TestCoin__factory } from "../contracts";

export default function WalletAccess() {

    const [ethProvider, setEthProvider] = useState<ethers.providers.Web3Provider>();
    const [ethSigner, setEthSigner] = useState<ethers.Signer>();
    
    async function doIt() {
        console.log("hello world!");

        // eslint-disable-next-line
        if (!window.ethereum) {
            alert("Please install MetaMask first.");
            return;
        }

        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        console.log("getting signer");
        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();

        console.log("getting balance " + await signer.getAddress());
        const balance = await signer.getBalance();
        console.log(balance.toString());
        setEthProvider(provider);
        setEthSigner(signer);
    }

    async function doItWc() {
        console.log("hello wallet connect!");

        //  Create WalletConnect Provider
        const wcProvider = new WalletConnectProvider({
            rpc: {
            // 1: "https://eth-mainnet.public.blastapi.io",
            // 3: "https://ropsten.mycustomnode.com",
            // 100: "https://dai.poa.network",
            // ...
                "1234": "https://df24-46-126-144-178.eu.ngrok.io",
            },
        });
        
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

        console.log("getting balance " + await signer.getAddress());
        const balance = await signer.getBalance();
        console.log(balance.toString());
        alert(balance.toString());
    }

    async function createApproval() {
        console.log(`creating approval for usdc ${process.env.NEXT_PUBLIC_USDC_ADDRESS}`);
        const usdc = TestCoin__factory.connect(process.env.NEXT_PUBLIC_USDC_ADDRESS || '', ethSigner!);
        await usdc.approve(process.env.NEXT_PUBLIC_TREASURY_ADDRESS || '', 100);
        console.log('approval created');
    }

    async function applyForPolicy() {
        console.log(`apply for policy. product: ${process.env.NEXT_PUBLIC_PRODUCT_ADDRESS} riskId: ${process.env.NEXT_PUBLIC_RISK_ID}`);
        // const insurerWallet = Wallet.fromMnemonic(process.env.NEXT_PUBLIC_INSURER_MNEMONIC!, `m/44'/60'/0'/0/${process.env.NEXT_PUBLIC_INSURER_ACCOUNT_INDEX}`);
        const account = utils.HDNode.fromMnemonic(process.env.NEXT_PUBLIC_INSURER_MNEMONIC!).derivePath(`m/44'/60'/0'/0/${process.env.NEXT_PUBLIC_INSURER_ACCOUNT_INDEX}`);
        const insurerSigner = new Wallet(account, ethProvider);

        
        const product = AyiiProduct__factory.connect(process.env.NEXT_PUBLIC_PRODUCT_ADDRESS!, insurerSigner);

        const tx = await product.applyForPolicy(ethSigner?.getAddress()!, 100, 1000, process.env.NEXT_PUBLIC_RISK_ID!);
        console.log(tx);
        const response = await tx.wait();
        console.log(response);

    }

    let connected = (<div>No Wallet connected</div>);
    let approval = (<div></div>);
    let policy = (<div></div>);
    if (ethSigner) {
        connected = (<div>Wallet connected</div>);
        approval = (
            <div>
                <button onClick={createApproval}>Create approval</button>
            </div>
        );
        policy = (
            <div>
                <button onClick={applyForPolicy}>Apply for policy</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Wallet Access</h1>

            {connected}

            <div>
                <button onClick={doIt}>Connect metamask</button>
                <button onClick={doItWc}>Get balance with <i>Wallet connect</i></button>
            </div>
            {approval}
            {policy}
        </div>
    );
}