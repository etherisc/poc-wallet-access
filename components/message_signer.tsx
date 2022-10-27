import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, utils, Wallet } from "ethers";
import { useState } from "react";
import AyiiProductBuild from "@etherisc/gif-contracts/build/contracts/AyiiProduct.json";
import { Coder } from 'abi-coder';
import { TestCoin__factory } from "../contracts/factories/TestCoin__factory";
import { AyiiProduct__factory } from "../contracts/factories/AyiiProduct__factory";
import { hashMessage } from "ethers/lib/utils";

export default function MessageSigner() {

    const [ethProvider, setEthProvider] = useState<ethers.providers.Web3Provider>();
    const [ethSigner, setEthSigner] = useState<ethers.Signer>();
    
    async function doIt() {
        console.log("hello world!");

        // @ts-ignore
        if (!window.ethereum) {
            alert("Please install MetaMask first.");
            return;
        }

        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        console.log("getting signer");
        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();

        console.log("getting balance " + await signer.getAddress());
        const balance = await signer.getBalance();
        console.log(balance.toString());
        setEthProvider(provider);
        setEthSigner(signer);
    }

    async function doItWc() {
        console.log("hello wallet connect!");

        //  Create WalletConnect Provider
        const wcProvider = new WalletConnectProvider({
            rpc: {
            // 1: "https://eth-mainnet.public.blastapi.io",
            // 3: "https://ropsten.mycustomnode.com",
            // 100: "https://dai.poa.network",
            // ...
                "1234": "https://wapoc-chain.loca.lt",
            },
        });
        
        //  Enable session (triggers QR Code modal)
        await wcProvider.enable();

        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(wcProvider);

        // MetaMask requires requesting permission to connect users accounts
        // await provider.send("eth_requestAccounts", []);

        console.log("getting wc signer");
        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();

        console.log("getting balance " + await signer.getAddress());
        const balance = await signer.getBalance();
        console.log(balance.toString());
        setEthProvider(provider);
        setEthSigner(signer);
    }

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
                <button onClick={createApproval}>Create approval</button>
            </div>
        );
        policy = (
            <div>
                <button onClick={applyForPolicy}>Apply for policy</button>
            </div>
        );
    }

    const [message, setMessage] = useState<string>("");
    const handleMessageChange = (e: any) => setMessage(e.target.value);
    const [signature, setSignature] = useState<string>("");
    const [verifyInput, setVerifyInput] = useState<string>("");
    const handleVerifyInputChange = (e: any) => setVerifyInput(e.target.value);
    const [verified, setVerified] = useState<boolean>(false);
    
    async function signMessage() {
        console.log("signing message");
        const signature = await ethSigner?.signMessage(message || '');
        setSignature(signature || '');
    }

    return (
        <div>
            <h1>Message signer</h1>

            {connected}

            <div>
                <button onClick={doIt}>Connect to metamask</button>
                <button onClick={doItWc}>Connect to wallet with <i>Wallet connect</i></button>
            </div>
            <div>
                <button onClick={signMessage}>Sign message</button>
            </div>

            <div>
                Message: <input type="text" value={message} onChange={handleMessageChange} size={50} />
            </div>
            <div>
                Signature: {signature}
            </div>
        </div>
    );
}