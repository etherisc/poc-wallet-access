import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
// import '../styles/light-theme.css';
// import 'antd/dist/dark-theme.css';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { useAccount, useNetwork, useSigner, useWebsocketProvider, Web3Modal } from '@web3modal/react';
import { web3ClientConfig, web3Config } from '../src/config/appConfig';
import AppHeader from '../src/components/app_header';
import React, { useEffect } from 'react';
import { useAreSignerEqual } from 'eth-hooks';
import { STRING_LITERAL_DROP_BUNDLE } from 'next/dist/shared/lib/constants';
import { createSignerContext, SignerContext } from '../src/context/signer_context';
import { Counter__factory } from '../contracts';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

    // load saved theme
  const savedTheme = 'light';

  // setup themes for theme switcher
  const themes = {
    // dark: './themes/ant-dark-theme.css',
    light: './ant-light-theme.css',
  };

  const signer = useSigner();

  useEffect(() => {
    if (signer.data === undefined || signer.isLoading) {
      return;
    }

    const counter = Counter__factory.connect(process.env.NEXT_PUBLIC_COUNTER_ADDRESS!, signer.data);
    console.log("reading counter 2");
    counter.getCounter().then((c) => {
        console.log("counter: " + c);
    });
  }, [signer]);

  return (
    <div className="App">
      <SignerContext.Provider value={createSignerContext(signer.data, signer.isLoading)}>
        <Layout>
            <Content>
              <QueryClientProvider client={queryClient}>
                  <AppHeader />
                  <Component {...pageProps} />
              </QueryClientProvider>
            </Content>
        </Layout>
        <Web3Modal config={web3ClientConfig} />
      </SignerContext.Provider>
    </div>
  )
}

export default MyApp
