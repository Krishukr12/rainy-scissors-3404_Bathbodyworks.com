import { Heading } from '@chakra-ui/react'
import React from 'react'
import styles from './single.module.css'
import {StarIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Singledata = (item) => {
    // console.log(item);
  return (
    <Link to={`/allcareProducts/${item.id}`}>
     <div className={styles.mainDiv}>
      <img src={item.img} alt="" />
      <div style={{height:'35px'}}><Heading size='xs'>{item.name}</Heading></div>
      <h4>{item.subname}</h4>
      <Heading size='xs'>₹{item.price}</Heading>
      <div style={{display:"flex",marginLeft:'100px'}}>
      <h3>{item.ratings}</h3>
      <StarIcon mt='0.7rem'/>
      </div>
      <button className={styles.bag}>ADD TO BAG</button>
      </div>
    </Link>
  )
}

export default Singledata
