import type { NextPage } from 'next'
import Head from 'next/head'
import CounterAccess from '../components/counter_access'
import { EthersAppContext, EthersModalConnector, useEthersAppContext, useEthersContext } from 'eth-hooks/context';
import styles from '../styles/Home.module.css'
import { useBalance, useEthersAdaptorFromProviderOrSigners } from 'eth-hooks'
import { EthComponentsSettingsContext, IEthComponentsSettings } from 'eth-components/models';
import { fujiEthProvider, web3ClientConfig } from '../utils/appConfig';
import { defaultUpdateOptions, TCreateEthersModalConnector } from 'eth-hooks/models';
import MyAccount from '../components/my_account';
import { useCallback } from 'react';
import { Button } from 'antd';
import Web3ModalLogin from '../components/web3modallogin';




const Home: NextPage = () => {
  

  // const ethComponentsSettings: IEthComponentsSettings = {
  //   apiKeys: {
  //     BlocknativeDappId: "1334",
  //   },
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
              <Web3ModalLogin />
              <MyAccount />
              <CounterAccess />
            </EthersAppContext>
          {/* </EthComponentsSettingsContext.Provider> */}
          
      </main>
    </div>
  )
}

export default Home
