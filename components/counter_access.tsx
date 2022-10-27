import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, utils, Wallet } from "ethers";
import { useState } from "react";
import { Counter__factory } from "../contracts";
import CounterBuild from "../counter-contracts/Counter.json";
import { Coder } from 'abi-coder';

export default function CounterAccess() {

    const [ethProvider, setEthProvider] = useState<ethers.providers.Web3Provider>();
    const [ethSigner, setEthSigner] = useState<ethers.Signer>();
    
    async function doIt() {
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

    async function doItWc() {
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

    // async function createApproval() {
    //     console.log(`creating approval for usdc ${process.env.NEXT_PUBLIC_USDC_ADDRESS}`);
    //     const usdc = TestCoin__factory.connect(process.env.NEXT_PUBLIC_USDC_ADDRESS || '', ethSigner!);
    //     await usdc.approve(process.env.NEXT_PUBLIC_TREASURY_ADDRESS || '', 100);
    //     console.log('approval created');
    // }

    async function incrementCounter() {
        console.log("counting");

        const counter = Counter__factory.connect(process.env.NEXT_PUBLIC_COUNTER_ADDRESS!, ethSigner!);

        const tx = await counter.increment();
        console.log(tx);
        const response = await tx.wait();
        console.log(response);

        const counterAbiCoder = new Coder(CounterBuild.abi);
        let count = '';

        response.logs.forEach(log => {
            try {
                const evt = counterAbiCoder.decodeEvent(log.topics, log.data);
                if (evt.name === 'CounterIncremented') {
                    console.log(evt);
                    // @ts-ignore
                    count = evt.values.newCounter.toString();
                }
            } catch (e) {
                // console.log(e);
            }
        });
        console.log(`count: ${count}`);
        alert(`count: ${count}`);
    }

    let connected = (<div>No Wallet connected</div>);
    let count = (<div></div>);
    if (ethSigner) {
        connected = (<div>Wallet connected</div>);
        count = (
            <div>
                <button onClick={incrementCounter}>Count</button>
            </div>
        );

    }

    return (
        <div>
            <h1>PoC Counter</h1>

            {connected}

            <div>
                <button onClick={doIt}>Connect to metamask</button>
                <button onClick={doItWc}>Connect to wallet with <i>Wallet connect</i></button>
            </div>
            {count}
        </div>
    );
}