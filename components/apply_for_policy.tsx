import { ethers, utils, Wallet } from "ethers";
import { useState } from "react";
import AyiiProductBuild from "@etherisc/gif-contracts/build/contracts/AyiiProduct.json";
import { Coder } from 'abi-coder';
import { TestCoin__factory } from "../contracts/factories/TestCoin__factory";
import { AyiiProduct__factory } from "../contracts/factories/AyiiProduct__factory";
import { connectEthersWallet, connectWalletConnect } from "./utils";
import { Button, Space, Typography } from "antd";

export default function ApplyForPolicy() {

    const [ethProvider, setEthProvider] = useState<ethers.providers.Web3Provider>();
    const [ethSigner, setEthSigner] = useState<ethers.Signer>();

    async function createApproval() {
        console.log(`creating approval for usdc ${process.env.NEXT_PUBLIC_USDC_ADDRESS}`);
        const usdc = TestCoin__factory.connect(process.env.NEXT_PUBLIC_USDC_ADDRESS || '', ethSigner!);
        await usdc.approve(process.env.NEXT_PUBLIC_TREASURY_ADDRESS || '', 100);
        console.log('approval created');
    }

    async function applyForPolicy() {
        console.log(`apply for policy. product: ${process.env.NEXT_PUBLIC_PRODUCT_ADDRESS} riskId: ${process.env.NEXT_PUBLIC_RISK_ID}`);
        // const insurerWallet = Wallet.fromMnemonic(process.env.NEXT_PUBLIC_INSURER_MNEMONIC!, `m/44'/60'/0'/0/${process.env.NEXT_PUBLIC_INSURER_ACCOUNT_INDEX}`);
        const account = utils.HDNode.fromMnemonic(process.env.NEXT_PUBLIC_INSURER_MNEMONIC!).derivePath(`m/44'/60'/0'/0/${process.env.NEXT_PUBLIC_INSURER_ACCOUNT_INDEX}`);
        const insurerSigner = new Wallet(account, ethProvider);

        const product = AyiiProduct__factory.connect(process.env.NEXT_PUBLIC_PRODUCT_ADDRESS!, insurerSigner);

        const tx = await product.applyForPolicy(ethSigner?.getAddress()!, 100, 1000, process.env.NEXT_PUBLIC_RISK_ID!);
        console.log(tx);
        const response = await tx.wait();
        console.log(response);

        const ayiiProductAbiCoder = new Coder(AyiiProductBuild.abi);
        let processId = '';

        response.logs.forEach(log => {
            try {
                const evt = ayiiProductAbiCoder.decodeEvent(log.topics, log.data);
                if (evt.name === 'LogAyiiPolicyCreated') {
                    console.log(evt);
                    // @ts-ignore
                    processId = evt.values.policyId.toString();
                }
            } catch (e) {
                // console.log(e);
            }
        });
        console.log(`processId: ${processId}`);
        alert(`processId: ${processId}`);
    }

    let connected = (<div>No Wallet connected</div>);
    let approval = (<div></div>);
    let policy = (<div></div>);
    if (ethSigner) {
        connected = (<div>Wallet connected</div>);
        approval = (
            <div>
                <Button onClick={createApproval}>Create approval</Button>
            </div>
        );
        policy = (
            <div>
                <Button onClick={applyForPolicy}>Apply for policy</Button>
            </div>
        );
    }

    const { Title } = Typography;

    return (
        <div>
            <Title>PoC Ayii policy apply</Title>

            {connected}
            <br />

            <Space size={8}>
                <Button onClick={() => connectEthersWallet(setEthProvider, setEthSigner)}>Connect to metamask</Button>
                <Button onClick={() => connectWalletConnect(setEthProvider, setEthSigner)}>Connect to wallet with <i>Wallet connect</i></Button>
                {approval}
                {policy}
            </Space>
        </div>
    );
}