import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
// import '../styles/light-theme.css';
// import 'antd/dist/dark-theme.css';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { Web3Modal } from '@web3modal/react';
import { web3ClientConfig, web3Config } from '../utils/appConfig';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  // load saved theme
const savedTheme = 'light';

// setup themes for theme switcher
const themes = {
  // dark: './themes/ant-dark-theme.css',
  light: './ant-light-theme.css',
};

  return (
    <div className="App">
      <Layout>
          <Content>
            <QueryClientProvider client={queryClient}>
              <ThemeSwitcherProvider themeMap={themes} defaultTheme={savedTheme ?? 'light'}>
                <Component {...pageProps} />
              </ThemeSwitcherProvider>
            </QueryClientProvider>
          </Content>
      </Layout>
      <Web3Modal config={web3ClientConfig} />
    </div>
  )
}

export default MyApp
