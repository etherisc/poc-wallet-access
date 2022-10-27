import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import { useState } from "react";
import { Verifier__factory } from "../contracts";

export default function MessageVerifierContract() {

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
            // 1: "https://eth-mainnet.public.blastapi.io",
            // 3: "https://ropsten.mycustomnode.com",
            // 100: "https://dai.poa.network",
            // ...
                "1234": "https://wapoc-chain.loca.lt",
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

    let connected = (<div>No Wallet connected</div>);
    if (ethSigner) {
        connected = (<div>Wallet connected</div>);
    }

    const [message, setMessage] = useState<string>("");
    const handleMessageChange = (e: any) => setMessage(e.target.value);
    const [verifyInput, setVerifyInput] = useState<string>("");
    const handleVerifyInputChange = (e: any) => setVerifyInput(e.target.value);
    const [verified, setVerified] = useState<boolean>(false);
    

    async function verifySignature() {
        console.log("verifying message");
        let sig = ethers.utils.splitSignature(verifyInput);

        const verifier = Verifier__factory.connect(process.env.NEXT_PUBLIC_VERIFIER_ADDRESS!, ethSigner!);

        console.log(message);
        console.log(sig.v);
        console.log(sig.r);
        console.log(sig.s);

        let recovered = await verifier.verifyString(message, sig.v, sig.r, sig.s);
        console.log(recovered);
        setVerified(recovered === await ethSigner?.getAddress());
    }

    return (
        <div>
            <h1>Message Verifier (via contract)</h1>

            {connected}

            <div>
                <button onClick={doIt}>Connect to metamask</button>
                <button onClick={doItWc}>Connect to wallet with <i>Wallet connect</i></button>
            </div>
            <div>
                <button onClick={verifySignature}>Verify signature</button>
            </div>

            <div>
                Message: <input type="text" value={message} onChange={handleMessageChange} size={50} />
                <br/>
                Signature: <input type="text" value={verifyInput} onChange={handleVerifyInputChange} size={50} />
            </div>

            <div>
                Verified: {verified ? 'true' : 'false'}
            </div>
        </div>
    );
}