import React from 'react'
import { useEffect } from 'react';
import styles from './rightma.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { getData, getData2soap } from '../../Redux/ArfReducer/action';
import Singledata from './Singledata';
import classes from '../../Pages/Home Fragnance/HomeFragnance.module.css';

const AllSoapRight = () => {
  const {data}=useSelector((state)=>state.ArfReducer);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getData());
  },[dispatch])

  return (
    <div className={styles.contai}>
      <h1 className={styles.headinga}>Hand Soaps & Sanitizers</h1>
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
              onChange={(e) => getData2soap(dispatch, e.target.value)}
            >
              <option>SORT BY</option>
              <option value="asc">Price low to high</option>
              <option value="desc">Price high to low</option>
            </select>
          </div>
        </div>
      <div className={styles.mainconta}>
      {data?.map((elem)=>(
         <Singledata key={elem.id} {...elem}/>
      ))}
          </div>
    </div>
  )
}
export default AllSoapRight;
