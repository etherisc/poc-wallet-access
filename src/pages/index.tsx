import type { NextPage } from 'next'
import Head from 'next/head'
import CounterAccess from '../components/counter_access'
import { Row, Col, Space } from 'antd'


const Home: NextPage = () => {

  return (
    <Space style={{ padding: '16px 24px' }}>
      <Head>
        <title>Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col span={24}>
          <CounterAccess />          
        </Col>
      </Row>
    </Space>
  )
}

export default Home
