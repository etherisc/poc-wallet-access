import { ethers, Signer } from "ethers";
import { useContext, useEffect, useState } from "react";
import CounterBuild from "../../custom-contracts/Counter.json";
import { Coder } from 'abi-coder';
import { Typography, Button, Space, Spin, message } from 'antd';
import { SignerContext } from "../context/signer_context";
import { Counter__factory } from "../../contracts/factories/Counter__factory";

export default function CounterAccess() {
    const signerContext = useContext(SignerContext);

    const mySigner = signerContext?.data.signer;
    const [ currentCount, setCurrentCount ] = useState("");
    const [ trxInProgress, setTrxInProgress ] = useState(false);

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
        message.success('Transaction finished. The counter has been incremented', 3);
    }


    let notLoggedIn = (<>Please log in to use this application</>)

    let incrementCountButton = (<></>);
    console.log("signer: " + mySigner);
    if (mySigner !== undefined) {
        notLoggedIn = (<></>);
        incrementCountButton = (
            <Button onClick={incrementCounter} disabled={trxInProgress}>Increment counter by 1</Button>
        );

        console.log("reading counter");
        const counter = Counter__factory.connect(process.env.NEXT_PUBLIC_COUNTER_ADDRESS!, mySigner);
        counter.getCounter().then((c) => {
            setCurrentCount(c.toString());
        });
    } 

    const { Title, Text, Paragraph } = Typography;

    let waiting = (<></>);
    if (trxInProgress) {
        waiting = (<Paragraph><Space size={8}>
                <Spin /><Text>Please wait for the transaction to complete</Text>
            </Space></Paragraph>);
    }

    let content = (<></>);

    if (mySigner !== undefined) {
        content = (
            <>
                <Paragraph>{notLoggedIn}</Paragraph>

                <Paragraph>The current counter value is <Text strong={true}>{currentCount}</Text></Paragraph>
                <Paragraph>
                    {incrementCountButton}
                </Paragraph>
                {waiting}
            </>
        );
    }

    return (
        <>
            <Title>Counter component</Title>

            {content}
        </>
    );
}