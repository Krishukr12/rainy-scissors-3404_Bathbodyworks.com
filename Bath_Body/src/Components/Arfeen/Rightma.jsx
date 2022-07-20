import React from 'react'
import styles from './rightma.module.css';

const Rightma = () => {
  return (
    <div className={styles.contai}>
      <h1 className={styles.headinga}>All Bath & Shower</h1>
      <img className={styles.imag} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0817b914/images/Spring2022/tbctier_sp3_gh.jpg?yocs=s_" alt="Favourite_Fragrance" />
      <div style={{display:'flex',gap:'35px',marginLeft:'20px'}}>
      <button className={styles.bttn}>ALL BODY CARE</button>
      <button className={styles.bttn}>FRAGRANCE</button>
      <button className={styles.bttn}>BATH & SHOWER</button>
      <button className={styles.bttn}>MOISTURIZERS</button>
      <button className={styles.bttn}>AROMATHERAPY</button>
      </div>
    </div>
  )
}

export default Rightma
