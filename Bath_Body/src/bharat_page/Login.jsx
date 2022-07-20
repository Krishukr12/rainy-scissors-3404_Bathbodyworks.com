import React from 'react'
import AskforsSignup from '../bharat/AskforsSignup/AskforsSignup'
import Or_Div from '../bharat/OR_div/Or_div'
import { SigninCard } from '../bharat/signin/Sign'
import styles from "./Login.module.css"

const Login = () => {
  return (
    <div className={styles.Login_main}>
      <SigninCard/>

      <Or_Div/>
   
      <AskforsSignup/>
    </div>
  )
}

export default Login
