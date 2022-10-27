import { ethers } from "ethers";
import { useState } from "react";
import { hashMessage } from "ethers/lib/utils";
import { connectEthersWallet, connectWalletConnect } from "./utils";

export default function MessageVerifier() {

    const [ethProvider, setEthProvider] = useState<ethers.providers.Web3Provider>();
    const [ethSigner, setEthSigner] = useState<ethers.Signer>();

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
        const address = await ethers.utils.recoverAddress(hashMessage(message || ''), verifyInput || '');
        setVerified(address === await ethSigner?.getAddress());
    }

    return (
        <div>
            <h1>Message Verifier (via ethers)</h1>

            {connected}

            <div>
                <button onClick={() => connectEthersWallet(setEthProvider, setEthSigner)}>Connect to metamask</button>
                <button onClick={() => connectWalletConnect(setEthProvider, setEthSigner)}>Connect to wallet with <i>Wallet connect</i></button>
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