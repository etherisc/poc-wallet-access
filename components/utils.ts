import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

async function connectEthersWallet(
    setEthProvider: (x: ethers.providers.Web3Provider) => void, 
    setEthSigner: (x: ethers.providers.JsonRpcSigner) => void
) {
    console.log("hello world!");

    // @ts-ignore
    if (!window.ethereum) {
        alert("Please install MetaMask first.");
        return;
    }

    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    // @ts-ignore
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

async function connectWalletConnect(
    setEthProvider: (x: ethers.providers.Web3Provider) => void, 
    setEthSigner: (x: ethers.providers.JsonRpcSigner) => void
) {
    console.log("hello wallet connect!");

    //  Create WalletConnect Provider
    const wcProvider = new WalletConnectProvider({
        rpc: {
            "43113": "https://api.avax-test.network/ext/bc/C/rpc",
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
    setEthProvider(provider);
    setEthSigner(signer);
}

export { connectEthersWallet, connectWalletConnect }