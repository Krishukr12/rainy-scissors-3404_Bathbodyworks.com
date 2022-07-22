import React from 'react'
import { useEffect } from 'react';
import styles from './rightma.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { getData } from '../../Redux/ArfReducer/action';
import Singledata from './Singledata';

const AllSoapRight = () => {
  const {data}=useSelector((state)=>state.ArfReducer);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getData());
  },[dispatch])

  return (
    <div className={styles.contai}>
      <h1 className={styles.headinga}>Hand Soaps & Sanitizers</h1>
      <div style={{width:'100%', height:'100px' ,border:'1px solid red'}}></div>
      <div className={styles.mainconta}>
      {data?.map((elem)=>(
         <Singledata key={elem.id} {...elem}/>
      ))}
          </div>
    </div>
  )
}
export default AllSoapRight;
