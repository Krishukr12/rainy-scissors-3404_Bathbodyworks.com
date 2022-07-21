import React, { useState } from 'react'
import styles from "./Signup.module.css"
import {
    Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack
} from '@chakra-ui/react';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
     <img className={styles.img_small_scr} src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwed70e262/images/create-account-mbl.png" alt=""/>
    
     <img className={styles.img_large_scr} src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd4536939/images/hellothere.png" alt=""/>
     <div className={styles.title_main_div}>
    <p className={styles.title_main}>Create an Account</p>
     <div className={styles.line}/>
     </div>
    <div className={styles.Signup_form_main}>
    
       <Stack spacing={4}>

            <FormControl id="firstName" isRequired>
                  <FormLabel className={styles.input_name}>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
            <FormControl id="email" isRequired>
              <p className={styles.input_name}>Last Name</p>
              <Input type="text" marginLeft={"40px"}/>
            </FormControl>
            <FormControl id="email" isRequired> 
              <p className={styles.input_name}>Email</p>
              <Input type="email" marginLeft={"40px"}/>
            </FormControl>
            <FormControl id="email" isRequired>
              <p className={styles.input_name}>Confirm Email</p>
              <Input type="email" marginLeft={"40px"}/>
            </FormControl>
             <FormControl id="email" isRequired>
              <p className={styles.input_name}>Birthday</p>
              <Input type="date" marginLeft={"40px"}/>
            </FormControl>
             <FormControl id="email" isRequired>
              <p className={styles.input_name}>Zip/Postal Code</p>
              <Input type="email" marginLeft={"40px"}/>
            </FormControl>  
            <FormControl id="email" isRequired>
              <p className={styles.input_name}>Phone</p>
              <Input type="email" marginLeft={"40px"}/>
            </FormControl>
            <p className={styles.reward_text}>We'll use this to look up your Rewards account in stores.</p>
            <FormControl id="password" isRequired >
              <p className={styles.input_name}>Password</p>
              <InputGroup >
                <Input type={showPassword ? 'text' : 'password'} marginLeft={"40px"}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                     onClick={() =>
                      setShowPassword( !showPassword)
                    }
                        >
                    
                   {showPassword ? <p >Hide</p> : <p >show</p>}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="email" isRequired>
              <p className={styles.input_name}>Confirm Password</p>
              <Input type="email" marginLeft={"40px"}/>
            </FormControl>
      </Stack>
       <p className={styles.privacy_policy}>
                 <a href="www.google.com">Privay Policy</a>
              </p>
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
    </>
  )
}

export default Signin
