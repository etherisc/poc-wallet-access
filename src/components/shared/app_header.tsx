import { PageHeader } from "antd";
import LoginWithMetaMaskButton from "./login_metamask";
import LoginWithWalletConnectButton from "./login_walletconnect";
import Logout from "./logout";
import MyAccount from "./my_account";

export default function AppHeader() {

    return (
        <PageHeader
            className="site-page-header"
            title="Depeg PoC"
            subTitle="Get your stablecoins insured now"
            extra={[
                <MyAccount key="4" />,
                <Logout key="3" />,
                <LoginWithMetaMaskButton key="2" />,
                <LoginWithWalletConnectButton key="1" />
            ]}
        />
    )

}