import { BigNumber, ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { SignerContext } from "../context/signer_context";
import Blockies from 'react-blockies';
import { Avatar, message, Space } from "antd";
import { CopyTwoTone } from "@ant-design/icons";

export default function MyAccount() {
    const signerContext = useContext(SignerContext);
    const [ address, setAddress ] = useState("");
    const [ balance, setBalance ] = useState(BigNumber.from(-1));

    useEffect(() => {
        console.log("signer changed");
        async function updateData() {
            const balance = await signerContext?.data.signer?.getBalance();
            setBalance(balance!);
            const address = await signerContext?.data.signer?.getAddress();
            setAddress(address!);
        }
        updateData();
    }, [signerContext?.data.signer]);
    
    async function copyAddressToClipboard() {
        await navigator.clipboard.writeText(address);
        message.success('Address copied to clipboard', 2);
    }

    let account = (<></>);

    if (address !== undefined && address !== "") {
        const balanceEth = ethers.utils.formatEther(balance);
        const balanceEth4Dec = (+balanceEth).toFixed(4);
        account = (
            <Space size="small">
                <Avatar src={
                    <Blockies seed={address} size={8} scale={4} />
                } />
                <span>{address}</span>
                <CopyTwoTone onClick={copyAddressToClipboard} />
                <span>{balanceEth4Dec} ETH</span>
                /
                <span>AVAX {balanceEth4Dec}</span>
            </Space>
        );
    }

    return (<>{account}</>);
}