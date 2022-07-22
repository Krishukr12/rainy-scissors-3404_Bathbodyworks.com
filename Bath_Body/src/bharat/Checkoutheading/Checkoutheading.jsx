import  Styles  from './Checkoutheading.module.css'
import React from 'react'

const Checkoutheading = () => {
  return (
    <div className={Styles.heading_main}>
      <h1 className={Styles.heading_Text}>ADDRESS</h1>
      <hr className={Styles.hr_line}/>
    </div>
  )
}

export default Checkoutheading
