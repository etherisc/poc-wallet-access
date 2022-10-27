import { ethers } from "ethers";
import { useState } from "react";
import { Verifier__factory } from "../contracts";
import { connectEthersWallet, connectWalletConnect } from "./utils";

export default function MessageVerifierContract() {

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