import type { NextPage } from 'next'
import Head from 'next/head'
import CounterAccess from '../src/components/counter_access'
import { EthersAppContext, EthersModalConnector, getEthersAppProviderLibrary, useEthersAppContext, useEthersContext } from 'eth-hooks/context';
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
            <CounterAccess />          
      </main>
    </div>
  )
}

export default Home
