import { Button, Input, Typography } from "antd";
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

    const { Title } = Typography;

    return (
        <div>
            <Title>Message signer</Title>

            {connected}
            <br/>

            <div>
                <Button onClick={() => connectEthersWallet(setEthProvider, setEthSigner)}>Connect to metamask</Button>
                <Button onClick={() => connectWalletConnect(setEthProvider, setEthSigner)}>Connect to wallet with <i>Wallet connect</i></Button>
            </div>
            <div>
                <Button onClick={signMessage}>Sign message</Button>
            </div>
            <div>
                Message: <Input type="text" value={message} onChange={handleMessageChange} />
            </div>
            <div>
                Signature: <Input type="text" value={signature} />
            </div>
        </div>
    );
}