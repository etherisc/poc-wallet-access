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

    const [ mySigner, setMySigner ] = useState(signerContext?.signer);
    const [ currentCount, setCurrentCount ] = useState("");
    const [ trxInProgress, setTrxInProgress ] = useState(false);
    
    useEffect(() => {
        console.log("update signerContext to " + signerContext?.signer);
        console.log(signerContext?.signer + " " + signerContext?.isLoading);
        if (signerContext?.signer !== undefined && ! signerContext?.isLoading) {
            setMySigner(signerContext?.signer);
        } else {
            setMySigner(undefined);
        }
    }, [signerContext?.signer, signerContext?.isLoading]);

    async function incrementCounter() {
        if (mySigner === undefined) {
            return;
        }
        console.log("counting");

        const counter = Counter__factory.connect(process.env.NEXT_PUBLIC_COUNTER_ADDRESS!, mySigner);

        const tx = await counter.increment();
        console.log(tx);
        setTrxInProgress(true);
        const response = await tx.wait();
        console.log(response);
        setTrxInProgress(false);

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
    console.log("signer: " + mySigner);
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

    let waiting = (<></>);
    if (trxInProgress) {
        waiting = (<div>Please wait for transaciton to complete</div>);
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
                <br />
                {waiting}
            </Space>
        </div>
    );
}