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
import { useDispatch } from 'react-redux';
import { signup } from '../Redux/Authreducer/actions';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [username, setusername] = useState('')
  const [mobile, setmobile] = useState(0)
  const [description, setdescription] = useState(0)
  const dispatch=useDispatch()

const handlesignup=()=>{

  dispatch(signup({"name":firstname+" "+lastname,"email":email,"username":username,"mobile":mobile,"password":password,"description":description}))

}

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
                  <Input type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
                </FormControl>
                <FormControl id="LasttName" isRequired>
                  <FormLabel className={styles.input_name}>Last Name</FormLabel>
                  <Input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
                </FormControl>
            <FormControl id="email" isRequired> 
              <FormLabel className={styles.input_name}>Email</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </FormControl>
            <FormControl id="Username" isRequired>
              <FormLabel className={styles.input_name}>Username</FormLabel>
              <Input type="text" value={username} onChange={(e)=>setusername(e.target.value)}/>
            </FormControl>
             <FormControl id="birthday" isRequired>
              <FormLabel className={styles.input_name}>Birthday</FormLabel>
              <Input type="date" />
            </FormControl>
             <FormControl id="zipCode" isRequired>
              <FormLabel className={styles.input_name}>Zip/Postal Code</FormLabel>
              <Input type="number" />
            </FormControl>  
            <FormControl id="mobile" isRequired>
              <FormLabel className={styles.input_name}>Phone</FormLabel>
              <Input type="number" value={mobile} onChange={(e)=>setmobile(e.target.value)}/>
            </FormControl>
            <FormLabel className={styles.reward_text}>We'll use this to look up your Rewards account in stores.</FormLabel>
            <FormControl id="password" isRequired >
              <FormLabel className={styles.input_name}>Password</FormLabel>
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
            <FormControl id="password1" isRequired>
              <FormLabel className={styles.input_name}>Confirm Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </FormControl>
      </Stack>
       <FormLabel className={styles.privacy_policy}>
                 <a href="www.google.com">Privay Policy</a>
              </FormLabel>
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

                }} onClick={handlesignup}>
                create Account
              </Button>
              
            </Stack>
    </div>
    </>
  )
}

export default Signup
