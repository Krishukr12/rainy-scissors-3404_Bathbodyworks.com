import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
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
       <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="md"
                width="100%"
                margin={'auto'}
                bg={'black'}
                color={'white'}
                marginTop="20px"
                _hover={{
                  bg: 'white',
                  color:'black',
                  border:'0.5px solid black'
                  
                }}
               
                
                >
                CONFIRM SHIPPING ADDRESS
              </Button>
              
            </Stack>
    </div>
  )
}

export default ChechoutDetail
