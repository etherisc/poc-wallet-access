import { Button } from "antd";
import { EthersModalConnector, useEthersContext } from "eth-hooks/context";
import { TCreateEthersModalConnector } from "eth-hooks/models";
import { useCallback } from "react";
import { web3ClientConfig } from "../utils/appConfig";

export default function Web3ModalLogin() {

    const createLoginConnector: TCreateEthersModalConnector = useCallback(
        (id?: string) => {
            if (web3ClientConfig) {
                const connector = new EthersModalConnector({ ...web3ClientConfig });
                return connector;
            }
        },
        [web3ClientConfig, web3ClientConfig.theme]
    );

    const ethersContext = useEthersContext();

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

    return (
        <div>
            <Button onClick={handleLoginClick}>Login</Button>
            <Button onClick={handleLogoutClick}>Logout</Button>
        </div>
    );
}