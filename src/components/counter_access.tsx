import { ethers, Signer } from "ethers";
import { useContext, useEffect, useState } from "react";
import CounterBuild from "../../custom-contracts/Counter.json";
import { Coder } from 'abi-coder';
import { Typography, Button, Space } from 'antd';
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
    }

    let incrementCountButton = (<></>);
    console.log("signer: " + mySigner);
    if (mySigner !== undefined) {

        incrementCountButton = (
            <Button onClick={incrementCounter}>Increment counter</Button>
        );

        console.log("reading counter");
        const counter = Counter__factory.connect(process.env.NEXT_PUBLIC_COUNTER_ADDRESS!, mySigner);
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