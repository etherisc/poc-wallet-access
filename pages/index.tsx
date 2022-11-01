import type { NextPage } from 'next'
import Head from 'next/head'
import CounterAccess from '../src/components/counter_access'
import { EthersAppContext, EthersModalConnector, getEthersAppProviderLibrary, useEthersAppContext, useEthersContext } from 'eth-hooks/context';
import styles from '../styles/Home.module.css'
import { useSigner } from '@web3modal/react';
import { useEffect } from 'react';
import { Counter__factory } from '../contracts';


const Home: NextPage = () => {

  const signer = useSigner();

  useEffect(() => {
    if (signer.data === undefined || signer.isLoading) {
      return;
    }

    const counter = Counter__factory.connect(process.env.NEXT_PUBLIC_COUNTER_ADDRESS!, signer.data);
    console.log("reading counter");
    counter.getCounter().then((c) => {
        console.log("counter: " + c);
    });
  }, [signer]);

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
