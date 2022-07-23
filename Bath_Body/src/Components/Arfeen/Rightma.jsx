import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './rightma.module.css';
import classes from '../../Pages/Home Fragnance/HomeFragnance.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { getData, getData1, getData2, getData2candle, getData2fragrance, getData2moisturizers, getData2soap, getData3 } from '../../Redux/ArfReducer/action';
import Singledata from './Singledata';
import {useSearchParams} from 'react-router-dom'

const Rightma = () => {
  const {data}=useSelector((state)=>state.ArfReducer);
  // console.log(data);
  const [val,setVal]=useState('All Bath & Shower');
  const [searchParams,setSearchParams]=useSearchParams();
  const [categoryValue,setCategoryValue]=useState(
    searchParams.getAll("category")||[]);

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
    setSearchParams({category:categoryValue})
  },[dispatch,val,categoryValue,setSearchParams])

  const handleChange=(e)=>{
    //  console.log(e.target.value);
    setVal(e.target.value);
    setCategoryValue(e.target.value);
  }
  const handleSort=(e)=>{
    if(val==='All Bath & Shower'||val==='All Body Care'){
      getData2soap(dispatch, e.target.value);
    }else if(val==='All Fragrance'){
      getData2fragrance(dispatch, e.target.value);
    }else if(val==='All Aromatherapy Body Care'){
      getData2candle(dispatch, e.target.value);
    }
    else{
      getData2moisturizers(dispatch, e.target.value);
  
    }
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
      <div className={classes.filter_sort_contaier}>
          <div className={classes.filter_div}>
            <h1 className={classes.filter_h1}>Filter By :</h1>
            <select className={classes.filter_select}>
              <option>Product Type</option>
            </select>
            <select className={classes.filter_select}>
              <option>Fragnance Name</option>
            </select>
            <select className={classes.filter_select}>
              <option>Fragnance Category</option>
            </select>
          </div>
          <div className={classes.sort_div}>
            <select
              className={classes.sort_select}
              onChange={(e) => handleSort(e)}>
              <option>SORT BY</option>
              <option value="asc">Price Low to high</option>
              <option value="desc">Price High to low</option>
            </select>
          </div>
        </div>
      <div className={styles.mainconta}>
      {data?.map((elem)=>(
        // <div  key={elem.id}>
        //   {/* <Singledata {...elem}/> */}
        //   <div>{elem.name}</div>
        //   {/* <div>{elem.img}</div>
        //   <div>{elem.img}</div>
        //   <div>{elem.img}</div> */}
        // </div>
         <Singledata key={elem.id} {...elem}/>
      ))}
          </div>
    </div>
  )
}

export default Rightma
