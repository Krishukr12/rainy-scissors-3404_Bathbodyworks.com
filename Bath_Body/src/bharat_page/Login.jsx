import React from 'react'
import AskforsSignup from '../bharat/AskforsSignup/AskforsSignup'
import Or_Div from '../bharat/OR_div/Or_div'
import { SigninCard } from '../bharat/signin/Sign'
import styles from "./Login.module.css"

const Login = () => {
  return (
    <>
     <img className={styles.img_small_scr} src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwed70e262/images/create-account-mbl.png" alt=""/>
    
     <img className={styles.img_large_scr} src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwe06c2dcd/images/signin.png" alt=""/>
     <div className={styles.title_main_div}>
    <p className={styles.title_main}>Sign In or Sign Up</p>
     <div className={styles.line}/>
     </div>
    
    <div className={styles.Login_main}>
      <SigninCard/>
    </div>
    </>
  )
}

export default Login
