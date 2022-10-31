import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { chains, providers } from '@web3modal/ethereum';

export const fujiEthProvider = new StaticJsonRpcProvider('https://api.avax-test.network/ext/bc/C/rpc');

const PROJECT_ID = '6cf24be37dc19d58bc113806ab03aded';
export const web3ClientConfig = {
    projectId: '6cf24be37dc19d58bc113806ab03aded',
    theme: 'light',
    accentColor: 'default',
    // disableInjectedProvider: true,
    ethereum: {
        appName: 'web3Modal',
        autoConnect: false,
        chains: [
            chains.mainnet,
            chains.avalanche,
            chains.avalancheFuji,
            chains.polygon,
            // chains.binanceSmartChain,
            // chains.fantom,
            // chains.arbitrum,
            // chains.optimism,
        ],
        providers: [providers.walletConnectProvider({ projectId: '6cf24be37dc19d58bc113806ab03aded' })]
    }
}

export const web3Config = {
    projectId: '6cf24be37dc19d58bc113806ab03aded',
    theme: 'light',
    accentColor: 'default',
    ethereum: {
        appName: 'web3Modal',
        chains: [
            chains.mainnet,
            chains.avalanche,
            chains.avalancheFuji,
            chains.polygon,
            // chains.binanceSmartChain,
            // chains.fantom,
            // chains.arbitrum,
            // chains.optimism,
        ],
    }
}