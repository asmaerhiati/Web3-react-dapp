import InfoStyles from '../styles/Info.module.css'
import React from 'react';

interface Props {
  setBalance: any,
  setBlockNumber: any,
  setNetwork: any
}

const InfoConnect = ( props : Props) => {
  const {setBalance, setBlockNumber, setNetwork} = props;
  return (
    <div className={InfoStyles.infoContent}>
      <div className={InfoStyles.balanceFrame}>
        <p className={InfoStyles.header}>Balance</p>
        <p className={InfoStyles.value}>{setBalance}</p>
      </div>
      <div className={InfoStyles.mainnetFrame}>
        <p className={InfoStyles.header}>{setNetwork === 1 ? "Mainnet" : "Testnet"}</p>
        <p className={InfoStyles.value}>{setBlockNumber}</p>
      </div>
    </div>
  )
}

export default InfoConnect
