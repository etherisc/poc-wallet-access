import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <Layout>
          <Content>
            <Component {...pageProps} />
          </Content>
      </Layout>
    </div>
  )
}

export default MyApp
