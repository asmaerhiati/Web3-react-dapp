import contentStyles from '../styles/Content.module.css'
import ButtonStyles from '../styles/Button.module.css'
import AccountDisconnect from './Account-disconnect'
import AccountConnect from './Account-connect'
import InfoDisconnect from './Info-disconnect'
import InfoConnect from './Info-connect'
import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { formatEther } from '@ethersproject/units'


const Content = () => {
  const {active, account, activate, chainId, library} = useWeb3React();
  const balance = useBalance();
  const blockNumber = useBlockNumber();

  return (
    <div className={contentStyles.content}>
      <h1 className={contentStyles.header}>Hi!</h1>
      <p className={contentStyles.paragraph}>We are happy to see you again. </p>
      
      {active ? (
        <>
        <AccountConnect setAccount={account}/>
        <InfoConnect setBalance={balance} setBlockNumber={blockNumber} setNetwork={chainId}/>

        <div 
        className={ButtonStyles.button}
        onClick = {async() => {
          const message = `Logging in at ${new Date().toISOString()}`;
                  const signature = await library
                    .getSigner(account)
                    .signMessage(message)
                    .catch((error: any) => console.error(error));
                  console.log({ message, account, signature });
                }}
        >
        Sign in
       </div>
        </>
      ) : (
        <>
          <AccountDisconnect />
          <InfoDisconnect />

        <div 
          className={ButtonStyles.button}
          onClick={() =>{
            activate(new InjectedConnector({}));
          }}
        >
          Connect
        </div>
        </>
      )}

    </div>
  )
}

function useBalance(){
  const {account, library} =  useWeb3React();
  const [balance, setBalance] = useState();

  useEffect(() => {
    if(account) {
      library.getBalance(account).then((val: any) => setBalance(val));
    }
  }, [account, library]);

  return balance ? `${formatEther(balance)} ETH` : null;
}

function useBlockNumber() {
  const {library} = useWeb3React();
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    if(library){
      const updateBlockNumber = (val: any) => setBlockNumber(val);
      library.on("block", updateBlockNumber);
  
      return () => {
        library.removeEventListener("block", updateBlockNumber);
  
      };
    }
  }, [library]);

  return blockNumber;
}

export default Content
