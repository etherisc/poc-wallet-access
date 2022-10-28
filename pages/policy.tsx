import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ApplyForPolicy from '../components/apply_for_policy'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Apply for policy</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

            <ApplyForPolicy />

        </main>

        </div>
    )
}

export default Home
