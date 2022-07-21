import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './rightma.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { getData, getData1, getData2, getData3 } from '../../Redux/ArfReducer/action';
// import Singledata from './Singledata';

const Rightma = () => {
  const {data}=useSelector((state)=>state.arfreducer);
  // console.log(data);
const [val,setVal]=useState('All Bath & Shower');

  const dispatch=useDispatch();
  useEffect(()=>{
    if(val==='All Bath & Shower'||val==='All Body Care'){
      dispatch(getData());
    }else if(val==='All Fragrance'){
      dispatch(getData3());
    }else if(val==='All Aromatherapy Body Care'){
      dispatch(getData2());
    }
    else{
      dispatch(getData1());
    }
  },[dispatch,val])

  const handleChange=(e)=>{
    //  console.log(e.target.value);
    setVal(e.target.value);
  }
  return (
    <div className={styles.contai}>
      <h1 className={styles.headinga}>{val}</h1>
      <img className={styles.imag} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0817b914/images/Spring2022/tbctier_sp3_gh.jpg?yocs=s_" alt="Favourite_Fragrance" />
      <div style={{display:'flex',gap:'35px',marginLeft:'20px'}}>


      <button className={styles.bttn} value='All Body Care' onClick={(e)=>handleChange(e)}>ALL BODY CARE</button>


      <button className={styles.bttn} value='All Fragrance' onClick={(e)=>handleChange(e)}>FRAGRANCE</button>
      <button className={styles.bttn} value='All Bath & Shower' onClick={(e)=>handleChange(e)}>BATH & SHOWER</button>
      <button className={styles.bttn} value='All Skin & Body Moisturizers' onClick={(e)=>handleChange(e)}>MOISTURIZERS</button>
      <button className={styles.bttn} value='All Aromatherapy Body Care' onClick={(e)=>handleChange(e)}>AROMATHERAPY</button>
      </div>
      <div style={{width:'100%', height:'100px' ,border:'1px solid red'}}></div>
      <div className={styles.mainconta}>
      {data?.map((elem)=>(
        <div  key={elem.id}>
          {/* <Singledata {...elem}/> */}
          <div>{elem.name}</div>
          {/* <div>{elem.img}</div>
          <div>{elem.img}</div>
          <div>{elem.img}</div> */}
        </div>
      ))}
          </div>
    </div>
  )
}

export default Rightma
