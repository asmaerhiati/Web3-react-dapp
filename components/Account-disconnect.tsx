import AccountStyles from '../styles/Account.module.css'

const AccountDisconnect = () => {
  
     return(
    <div className={AccountStyles.accountFrame}>
      <div className={AccountStyles.accountHeader}>
        <h1 className={AccountStyles.header}>
           Account
        </h1>
      </div>
      <div className={AccountStyles.accountDecoration}>
        <div className={AccountStyles.decoration1}></div>
        <div className={AccountStyles.decoration2}></div>
        <div className={AccountStyles.decoration3}></div>
      </div>
    </div>
     )
}

export default AccountDisconnect
