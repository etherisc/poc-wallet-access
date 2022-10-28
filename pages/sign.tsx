import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MessageSigner from '../components/message_signer'
import MessageVerifier from '../components/message_verifier'
import MessageVerifierContract from '../components/message_verifier_contract'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Sign/verify message</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

            <MessageSigner />

            <MessageVerifier />

            <MessageVerifierContract />

        </main>

        </div>
    )
}

export default Home
