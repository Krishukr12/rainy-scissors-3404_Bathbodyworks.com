import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { BasicUsage, OrderPlacedButton } from '../Order_place_buttion/Order_place_buttion'
import styles from "./ChechoutDetail.module.css"
const ChechoutDetail = () => {
  return (
    <div className={styles.ckeckout_main}>
      <h2 className={styles.detail}>ORDER DETAILS</h2>
      <p className={styles.price_taxes}>Prices are inclusive of all taxes</p>
      <div className={styles.bill_content}>
        <div >
            <p className={styles.total_mrp}>Total MRP</p>
            <p className={styles.total_mrp}>Shipping charges</p>
        </div>
        <div >
            <p>₹2,698.00</p>
            <p>₹0.00</p>
        </div>
      </div>
      <div className={styles.grand_total}>
        <div className={styles.total_text}>ORDER TOTAL</div>
        <div className={styles.total_text}>₹2,698.00</div>
      </div>
            <BasicUsage/>
    </div>
  )
}

export default ChechoutDetail
