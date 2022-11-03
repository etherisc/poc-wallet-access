import type { NextPage } from 'next'
import Head from 'next/head'
import CounterAccess from '../components/counter_access'
import styles from '../../styles/Home.module.css'


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
            <CounterAccess />          
      </main>
    </>
  )
}

export default Home
