import '../../styles/globals.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { Layout } from 'antd';
import AppHeader from '../components/shared/app_header';
import React, { useReducer } from 'react';
import { initialSignerData, SignerActionType, SignerContext, signerReducer } from '../context/signer_context';
import { ethers } from 'ethers';

const { Header, Content, Footer } = Layout;

async function switchAccount(dispatch: any) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  await provider.send("eth_requestAccounts", []);

  console.log("getting signer");
  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();  
  console.log(signer);
  dispatch({ type: SignerActionType.UPDATE_SIGNER, signer: signer });
}

function MyApp({ Component, pageProps }: AppProps) {
  const [ data, dispatch ] = useReducer(signerReducer, initialSignerData());

  if (data.provider != undefined) {
    data.provider.on('network', (newNetwork: any, oldNetwork: any) => {
      console.log('network', newNetwork, oldNetwork);
    });
    
    // @ts-ignore
    window.ethereum.on('accountsChanged', function (accounts: string[]) {
      console.log('accountsChanged', accounts);
      if (accounts.length == 0) {
        dispatch({ type: SignerActionType.UNSET });
        window.localStorage.clear();
      } else {
        switchAccount(dispatch);
      }
    });
    // @ts-ignore
    window.ethereum.on('chainChanged', function (chain: any) {
      console.log('chainChanged', chain);
      if (chain != "0xa869") {
        console.log('not fuji');
        dispatch({ type: SignerActionType.UNSET });
        window.localStorage.clear();  
      }
  });
    // @ts-ignore
    window.ethereum.on('network', (newNetwork: any, oldNetwork: any) => {
      console.log('network', newNetwork, oldNetwork);
    });
  }

  return (
    <SignerContext.Provider value={{ data, dispatch}}>
      <Layout>
        <Content>
          <AppHeader />
          <Component {...pageProps} />
        </Content>
      </Layout>
    </SignerContext.Provider>
  )
}

export default MyApp
