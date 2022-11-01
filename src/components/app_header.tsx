import { AccountButton, Web3Button, Web3Modal } from "@web3modal/react";
import { PageHeader } from "antd";
import MyAccount from "./my_account";

export default function AppHeader() {

    return (
        <PageHeader
            className="site-page-header"
            title="Depeg PoC"
            subTitle="Get your wallet insured now"
            extra={[
                <MyAccount key="2" />,
                <Web3Button key="1" />
            ]}
        />
    )

}