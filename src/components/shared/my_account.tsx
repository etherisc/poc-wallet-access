import { BigNumber, ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import Blockies from 'react-blockies';
import { Avatar, message, Space } from "antd";
import { CopyTwoTone } from "@ant-design/icons";
import { AggregatorV3Interface__factory } from "../../../contracts";
import { SignerContext } from "../../context/signer_context";
import { formatEthersNumber } from "../../utils/bignumber";

export default function MyAccount() {
    const signerContext = useContext(SignerContext);
    const [ address, setAddress ] = useState("");
    const [ balance, setBalance ] = useState(BigNumber.from(-1));
    const [ balanceUsd, setBalanceUsd ] = useState(-1);
    const [ showBalanceUsd, setShowBalanceUsd ] = useState(false);

    useEffect(() => {
        console.log("signer changed");
        async function updateData() {
            const balance = await signerContext?.data.signer?.getBalance();
            setBalance(balance!);
            const address = await signerContext?.data.signer?.getAddress();
            setAddress(address!);

            const chainlinkAggregatorAvaxUsd = 
                AggregatorV3Interface__factory.connect(
                    process.env.NEXT_PUBLIC_CHAINLINK_AGGREGATOR_AVAX_USD_ADDRESS!, 
                    signerContext?.data.signer!)
            const result = await chainlinkAggregatorAvaxUsd.latestRoundData();
            console.log(result);
            const avaxUsdPrice = result.answer.toNumber() / 10 ** 8;
            console.log(avaxUsdPrice);
            const balanceEth = Number.parseFloat(formatEthersNumber(balance!, 4));
            console.log(balanceEth);
            setBalanceUsd(balanceEth * avaxUsdPrice);
        }
        if (signerContext?.data.signer !== undefined) {
            updateData();
        }
    }, [signerContext?.data.signer]);
    
    async function copyAddressToClipboard() {
        await navigator.clipboard.writeText(address);
        message.info('Address copied to clipboard', 2);
    }

    function toggleBalanceUsd() {
        setShowBalanceUsd(!showBalanceUsd);
    }

    let account = (<></>);

    if (address !== undefined && address !== "") {
        let balanceString;

        if (showBalanceUsd) {
            balanceString = `$ ${balanceUsd.toFixed(2)}`;
        } else {
            balanceString = `AVAX ${formatEthersNumber(balance, 4)}`;
        }
        account = (
            <Space size="small">
                <Avatar src={
                    <Blockies seed={address} size={8} scale={4} />
                } />
                <span>{address}</span>
                <CopyTwoTone onClick={copyAddressToClipboard} />
                |
                <span onClick={toggleBalanceUsd}>{balanceString}</span>
            </Space>
        );
    }

    return (<>{account}</>);
}