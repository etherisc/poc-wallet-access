import { useProvider, useSigner, useWebsocketProvider } from "@web3modal/react";
import { useContext } from "react";
import { SignerContext } from "../context/signer_context";

export default function MyAccount() {

    const signerContext = useContext(SignerContext);
    // console.log("acc signerContext");
    // console.log(signerContext?.signer);
    
    return (<></>);
}