import { ethers } from "ethers";
import { useState } from "react";
import { connectEthersWallet, connectWalletConnect } from "./utils";

export default function MessageSigner() {

    const [ethProvider, setEthProvider] = useState<ethers.providers.Web3Provider>();
    const [ethSigner, setEthSigner] = useState<ethers.Signer>();

    let connected = (<div>No Wallet connected</div>);
    if (ethSigner) {
        connected = (<div>Wallet connected</div>);
    }

    const [message, setMessage] = useState<string>("");
    const handleMessageChange = (e: any) => setMessage(e.target.value);
    const [signature, setSignature] = useState<string>("");
    
    async function signMessage() {
        console.log("signing message");

        const signature = await ethSigner?.signMessage(message);
        
        setSignature(signature || '');
        let sig = ethers.utils.splitSignature(signature!);
        console.log(message);
        console.log(sig.v);
        console.log(sig.r);
        console.log(sig.s);
    }

    return (
        <div>
            <h1>Message signer</h1>

            {connected}

            <div>
                <button onClick={() => connectEthersWallet(setEthProvider, setEthSigner)}>Connect to metamask</button>
                <button onClick={() => connectWalletConnect(setEthProvider, setEthSigner)}>Connect to wallet with <i>Wallet connect</i></button>
            </div>
            <div>
                <button onClick={signMessage}>Sign message</button>
            </div>

            <div>
                Message: <input type="text" value={message} onChange={handleMessageChange} size={50} />
            </div>
            <div>
                Signature: {signature}
            </div>
        </div>
    );
}