import { useEthersAppContext } from 'eth-hooks/context';
import { useBalance, useEthersAdaptorFromProviderOrSigners } from 'eth-hooks'
import { fujiEthProvider } from '../utils/appConfig';
import { defaultUpdateOptions } from 'eth-hooks/models';
import { ethers } from 'ethers';
import { mergeDefaultUpdateOptions } from 'eth-hooks/functions';

export default function MyAccount() {
    // const account = '0x2CeC4C063Fef1074B0CD53022C3306A6FADb4729';
    const [adaptor] = useEthersAdaptorFromProviderOrSigners(fujiEthProvider);
    
    const ethersContext = useEthersAppContext();
    
    console.log(ethersContext.account);
    const [balance] = useBalance(ethersContext.account, mergeDefaultUpdateOptions(), {
        adaptorEnabled: true,
        adaptor,
    });
    const result = ethers.utils.formatEther(balance);


    console.log(`yourLocalBalance: ${balance}`);

    
    return (
        <div>
                The ether balance of account: {ethersContext.account}
                <br />
                is {result.toString()}
        </div>
    );

}