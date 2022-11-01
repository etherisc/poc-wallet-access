import '../styles/globals.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppHeader from '../src/components/app_header';
import React, { useReducer } from 'react';
import { initialSignerData, SignerContext, signerReducer } from '../src/context/signer_context';

function MyApp({ Component, pageProps }: AppProps) {
  const [ data, dispatch ] = useReducer(signerReducer, initialSignerData());

  return (
    <div className="App">
      <SignerContext.Provider value={{ data, dispatch}}>
        <Layout>
            <Content>
                <AppHeader />
                <Component {...pageProps} />
            </Content>
        </Layout>
      </SignerContext.Provider>
    </div>
  )
}

export default MyApp
