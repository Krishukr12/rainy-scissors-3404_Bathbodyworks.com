import { Box, CircularProgress, Heading } from '@chakra-ui/react'
import React from 'react'
import styles from './single.module.css'
import {StarIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../../Redux/CartReducer/action'


const Singledata = (item) => {
  const {isLoading}=useSelector((state)=>state.ArfReducer);
  const dispatch =useDispatch();

  
  const handleClick = (item) => {
    // console.log(item);
    alert("added to cart");
   
    addtocart({
      item,
      dispatch,
    });
  };
  // const handleCLick=(e)=>{
  //    addProducts(dispatch,e.img,e.name,e.subname,e.Price,e.type,e.ratings);
  // };    // console.log(item);
  return (
    <>
      {isLoading?<CircularProgress isIndeterminate color='green.300' />:''}
    <div className={styles.maind}>
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
      </div>
     </Link>
      <button onClick={()=>handleClick(item)} className={styles.bag}>ADD TO BAG</button>
    </div>
    </>
  )
}

export default Singledata
