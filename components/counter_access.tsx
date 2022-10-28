import { ethers } from "ethers";
import { useState } from "react";
import { Counter__factory } from "../contracts";
import CounterBuild from "../custom-contracts/Counter.json";
import { Coder } from 'abi-coder';
import { connectEthersWallet, connectWalletConnect } from "./utils";
import { Typography, Button, Space } from 'antd';

export default function CounterAccess() {

    const [ethProvider, setEthProvider] = useState<ethers.providers.Web3Provider>();
    const [ethSigner, setEthSigner] = useState<ethers.Signer>();

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
    let count = (<></>);
    if (ethSigner) {
        connected = (<div>Wallet connected</div>);
        count = (
            <Button onClick={incrementCounter}>Count</Button>
        );

    }

    const { Title } = Typography;

    return (
        <div>
            <Title>PoC Counter</Title>

            {connected}
            <br/>

            <Space size={8}>
                <Button onClick={() => connectEthersWallet(setEthProvider, setEthSigner)}>Connect to metamask</Button>
                <Button onClick={() => connectWalletConnect(setEthProvider, setEthSigner)}>Connect to wallet with <i>Wallet connect</i></Button>
                {count}
            </Space>
        </div>
    );
}