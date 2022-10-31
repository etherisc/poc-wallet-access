import type { NextPage } from 'next'
import Head from 'next/head'
import CounterAccess from '../components/counter_access'
import { EthersAppContext, EthersModalConnector, getEthersAppProviderLibrary, useEthersAppContext, useEthersContext } from 'eth-hooks/context';
import styles from '../styles/Home.module.css'
import { useBalance, useEthersAdaptorFromProviderOrSigners } from 'eth-hooks'
import { EthComponentsSettingsContext, IEthComponentsSettings } from 'eth-components/models';
import { fujiEthProvider, web3ClientConfig } from '../utils/appConfig';
import { defaultUpdateOptions, TCreateEthersModalConnector, TEthersProvider } from 'eth-hooks/models';
import MyAccount from '../components/my_account';
import { useCallback, useEffect } from 'react';
import { Button } from 'antd';
import Web3ModalLogin from '../components/show_account';
import { Account } from 'eth-components/ant';
import ShowAccount from '../components/show_account';
import { useProvider } from '@web3modal/react';




const Home: NextPage = () => {
  

  // const ethComponentsSettings: IEthComponentsSettings = {
  //   apiKeys: {
  //     BlocknativeDappId: "1334",
  //   },
  // };

  // const { provider, isReady } = useProvider();

  // const getEthersAppProviderLibrary = () => {
    // console.log("provider");
    // console.log(provider);
  //   return provider;
  // };

  // const updateProvider = useEffect(() => {
  //   console.log("updateProvider");
  //   console.log(provider);
  // }, [provider]);

  // const customGetEthersAppProviderLibrary = () => {
  //   console.log("customGetEthersAppProviderLibrary");
  //   return provider as TEthersProvider;
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          {/* <EthComponentsSettingsContext.Provider value={ethComponentsSettings}> */}
            <EthersAppContext disableDefaultQueryClientRoot={true}>
              <ShowAccount />
              <CounterAccess />
            </EthersAppContext>
          {/* </EthComponentsSettingsContext.Provider> */}
          
      </main>
    </div>
  )
}

export default Home
