import '../../styles/globals.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { Layout } from 'antd';
import AppHeader from '../components/shared/app_header';
import React, { useReducer } from 'react';
import { initialSignerData, SignerActionType, SignerContext, signerReducer } from '../context/signer_context';

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const [ data, dispatch ] = useReducer(signerReducer, initialSignerData());

  if (data.provider != undefined) {
    data.provider.on('network', (newNetwork: any, oldNetwork: any) => {
      console.log('network', newNetwork, oldNetwork);
    });
    
    // @ts-ignore
    window.ethereum.on('accountsChanged', function (accounts: any) {
      console.log('accountsChanged', accounts);
      if (accounts.length == 0) {
        dispatch({ type: SignerActionType.UNSET });
        window.localStorage.clear();
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
