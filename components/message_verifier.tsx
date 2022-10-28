import { ethers } from "ethers";
import { useState } from "react";
import { hashMessage } from "ethers/lib/utils";
import { connectEthersWallet, connectWalletConnect } from "./utils";
import { Button, Input, Typography } from "antd";

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

    const { Title } = Typography;

    return (
        <div>
            <Title>Message Verifier (via ethers)</Title>

            {connected}
            <br />

            <div>
                <Button onClick={() => connectEthersWallet(setEthProvider, setEthSigner)}>Connect to metamask</Button>
                <Button onClick={() => connectWalletConnect(setEthProvider, setEthSigner)}>Connect to wallet with <i>Wallet connect</i></Button>
            </div>
            <div>
                <Button onClick={verifySignature}>Verify signature</Button>
            </div>

            <div>
                Message: <Input type="text" value={message} onChange={handleMessageChange} />
                <br/>
                Signature: <Input type="text" value={verifyInput} onChange={handleVerifyInputChange} />
            </div>

            <div>
                Verified: {verified ? 'true' : 'false'}
            </div>
        </div>
    );
}