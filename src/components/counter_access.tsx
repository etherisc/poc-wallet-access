import { ethers, Signer } from "ethers";
import { useContext, useEffect, useState } from "react";
import { Counter__factory } from "../../contracts";
import CounterBuild from "../../custom-contracts/Counter.json";
import { Coder } from 'abi-coder';
import { connectEthersWallet, connectWalletConnect } from "../../components/utils";
import { Typography, Button, Space } from 'antd';
import { useAccount, useNetwork, useSigner } from "@web3modal/react";
import { const_blockNumberIntervalLong } from "eth-hooks/models";
import { signerHasNetwork } from "eth-hooks/functions";
import { SignerContext } from "../context/signer_context";

export default function CounterAccess() {
    const signerContext = useContext(SignerContext);
    // signerContext?.signer?.getAddress().then((address) => {;
    //     console.log(`counter signerContext address ${address}`);
    // });

    const [ mySigner, setMySigner ] = useState(signerContext?.signer);
    const [ currentCount, setCurrentCount ] = useState("");
    
    useEffect(() => {
        console.log("update signerContext");
        console.log(signerContext?.signer);
        setMySigner(signerContext?.signer);
    }, [signerContext?.signer]);

    async function incrementCounter() {
        if (signerContext?.signer === undefined) {
            return;
        }
        console.log("counting");

        const counter = Counter__factory.connect(process.env.NEXT_PUBLIC_COUNTER_ADDRESS!, signerContext.signer);

        const tx = await counter.increment();
        console.log(tx);
        const response = await tx.wait();
        console.log(response);

        const counterAbiCoder = new Coder(CounterBuild.abi);
        let count = -1;

        response.logs.forEach(log => {
            try {
                const evt = counterAbiCoder.decodeEvent(log.topics, log.data);
                if (evt.name === 'CounterIncremented') {
                    console.log(evt);
                    // @ts-ignore
                    count = evt.values.newCounter;
                }
            } catch (e) {
                // console.log(e);
            }
        });
        console.log(`count: ${count}`);
        // alert(`count: ${count}`);
        setCurrentCount(count.toString());
    }

    let incrementCountButton = (<></>);
    console.log("signer: " + signerContext?.signer);
    if (mySigner !== undefined) {

        incrementCountButton = (
            <Button onClick={incrementCounter}>Increment counter</Button>
        );

        console.log("reading counter");
        const counter = Counter__factory.connect(process.env.NEXT_PUBLIC_COUNTER_ADDRESS!, mySigner);
        console.log("reading counter 2");
        counter.getCounter().then((c) => {
            setCurrentCount(c.toString());
        });
    }

    const { Title } = Typography;

    return (
        <div>
            <Title>PoC Counter</Title>

            <br/>

            <Space size={8}>
                {currentCount}
                <br />
                {incrementCountButton}
            </Space>
        </div>
    );
}