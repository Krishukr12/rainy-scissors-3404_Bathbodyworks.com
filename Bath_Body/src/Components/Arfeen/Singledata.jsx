import { Heading } from '@chakra-ui/react'
import React from 'react'
import styles from './single.module.css'
import {StarIcon} from '@chakra-ui/icons'

const Singledata = (item) => {
    // console.log(item);
  return (
    <>
     <div className={styles.mainDiv}>
      <img src={item.img} alt="" />
      <div style={{height:'40px'}}><Heading size='xs'>{item.name}</Heading></div>
      <h4>{item.subname}</h4>
      <Heading size='xs'>₹{item.price}</Heading>
      <button className={styles.bag}>ADD TO BAG</button>
      <div style={{display:"flex",marginLeft:'100px'}}>
      <h3>{item.ratings}</h3>
      <StarIcon mt='0.7rem'/>
      </div>
      </div>
    </>
  )
}

export default Singledata
