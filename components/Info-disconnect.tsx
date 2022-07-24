import InfoStyles from '../styles/Info.module.css'

const InfoDisconnect = () => {
  return (
    <div className={InfoStyles.infoContent}>
      <div className={InfoStyles.balanceFrame}>
        <p className={InfoStyles.header}>Balance</p>
      </div>
      <div className={InfoStyles.mainnetFrame}>
        <p className={InfoStyles.header}>Network</p>
      </div>
    </div>
  )
}

export default InfoDisconnect
