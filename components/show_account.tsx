import { Button, notification } from "antd";
import { connectorErrorText, CouldNotActivateError, EthersModalConnector, NoStaticJsonRPCProviderFoundError, useEthersAppContext, useEthersContext, UserClosedModalError } from "eth-hooks/context";
import { TCreateEthersModalConnector } from "eth-hooks/models";
import { useCallback, useEffect } from "react";
import { fujiEthProvider, web3ClientConfig } from "../utils/appConfig";
import { Account, Balance } from 'eth-components/ant';
import { useAntNotification } from "./useAntNotification";
import { useAccount, useSigner, useWebsocketProvider, Web3Button, Web3Modal } from "@web3modal/react";
import { useBalance, useEthersAdaptorFromProviderOrSigners } from "eth-hooks";
import { mergeDefaultUpdateOptions } from "eth-hooks/functions";

export default function ShowAccount() {

    const createLoginConnector: TCreateEthersModalConnector = useCallback(
        (id?: string) => {
            if (web3ClientConfig) {
                console.log(1);
                const connector = new EthersModalConnector({ ...web3ClientConfig, theme: 'light' });
                return connector;
            }
        },
        [web3ClientConfig, web3ClientConfig.theme]
    );

    // const ethersContext = useEthersContext();

    // const ethersContextUpdate = useEffect(() => {
    //     console.log("ethersContextUpdate");
    //     console.log(ethersContext);
    // }, [ethersContext]);

    // to handle a login
    const handleLoginClick = (): void => {
        if (createLoginConnector != null && ethersContext?.openModal != null) {
            const connector = createLoginConnector();
            ethersContext.openModal(connector!!);
        }
    };

    // to handle a log out
    const handleLogoutClick = (): void => {
        if (ethersContext?.disconnectModal != null) {
            ethersContext.disconnectModal();
        }
    };

    // const notification = useAntNotification();

    const onLoginError = useCallback(
        (e: Error) => {
            if (e instanceof UserClosedModalError) {
                notification.info({
                    message: connectorErrorText.UserClosedModalError,
                    description: e.message,
                });
            } else if (e instanceof NoStaticJsonRPCProviderFoundError) {
                notification.error({
                    message: 'Login Error: ' + connectorErrorText.NoStaticJsonRPCProviderFoundError,
                    description: e.message,
                });
            } else if (e instanceof CouldNotActivateError) {
                notification.error({
                    message: 'Login Error: ' + connectorErrorText.CouldNotActivateError,
                    description: e.message,
                });
            } else {
                notification.error({ message: 'Login Error: ', description: e.message });
            }
        },
        [notification]
    );

    const price = 18.63;
    const blockExplorer = 'https://testnet.snowtrace.io/';

    // const { switchNetwork, data, isLoading, error } = useSwitchNetwork();

    // const switchNetworkUpdate = useEffect(() => {
    //     console.log("switchNetworkUpdate");
    //     console.log(data);
    // }, [data]);

    // const { account, isReady } = useAccount();
    // const { data } = useSigner();
    // const accountUpdate = useEffect(() => {
    //     console.log("accountUpdate");
    //     console.log(account);
    //     ethersContext.account = account.address;
    //     ethersContext.signer = data;
    //     ethersContext.set
    // }, [account]);

    const { websocketProvider } = useWebsocketProvider();
    const { account } = useAccount();

    const [adaptor] = useEthersAdaptorFromProviderOrSigners(websocketProvider);
    
    const ethersContext = useEthersAppContext();
    
    console.log(ethersContext.account);
    const [balance] = useBalance(account.address, mergeDefaultUpdateOptions(), {
        adaptorEnabled: false,

        adaptor,
    });

    const { data } = useSigner();

    // const balance = useBalance(account.address);

    console.log(balance);

    return (
        <div>
            <Web3Button />

            <Button onClick={handleLoginClick}>Login</Button>
            <Button onClick={handleLogoutClick}>Logout</Button>
            <Account 
                // createLoginConnector={createLoginConnector}
                // loginOnError={onLoginError}
                ensProvider={websocketProvider}
                price={price}
                address={account.address}
                blockExplorer={blockExplorer}
                hasContextConnect={false}
                // signer={data}
            />
            AVAX 
            <Balance 
                address={account.address}
                balance={balance}
                />
        </div>
    );
}