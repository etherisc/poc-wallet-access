import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import RenderResult from "next/dist/server/render-result";

export default function WalletAccess() {

    
    async function doIt() {
        console.log("hello world!");

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

    return (
        <div>
            <h1>Wallet Access</h1>

            <button onClick={doIt}>Do It</button>
            <button onClick={doItWc}>Do It with Wallet connect</button>
        </div>
    );
}