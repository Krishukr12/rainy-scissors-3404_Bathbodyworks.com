import React from 'react'
import ChechoutDetail from '../bharat/ChechoutDetail/ChechoutDetail'
import Checkoutform from '../bharat/Checkoutform/Checkoutform'
import Checkoutheading from '../bharat/Checkoutheading/Checkoutheading'
import Customtabs from '../bharat/Customtabs/Customtabs'
import styles from "./Checkout.module.css"

const Checkout = () => {
  return (
    <div className={styles.body}>
      <Customtabs/>
      <Checkoutheading/>
      <div className={styles.checkout_body}>
        <Checkoutform/>
         <div className={styles.line}></div>
        <ChechoutDetail/>
      </div>
      
    </div>
  )
}

export default Checkout

