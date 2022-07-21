import React from 'react'
import styles from './AskforsSignup.module.css'
import {Stack,Button} from "@chakra-ui/react"
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc' 

const AskforsSignup = () => {
  return (
    <div className={styles.Signup_components}>
             <h2 className={styles.Signin_title}>SIGN UP</h2>
    
           <p className={styles.create_text}>Create an account to access the best of your favorite store</p>
              <div className={styles.other_options}>
    <div className={styles.facebook}><FaFacebookF className={styles.facebook_icon}/> Login With facebook</div>
    <div className={styles.google}><FcGoogle className={styles.google_icon}/> Login With Google</div>
   </div>
      <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw6ea854c9/images/benefits.png" alt=""/>
       <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="md"
                width="40%"
                margin={'auto'}
                bg={'black'}
                color={'white'}
                marginTop="3%"
                _hover={{
                  bg: 'white',
                  color:'black',
                  border:'0.5px solid black'

                }}>
                create Account
              </Button>
              
            </Stack>
    </div>
  )
}

export default AskforsSignup
