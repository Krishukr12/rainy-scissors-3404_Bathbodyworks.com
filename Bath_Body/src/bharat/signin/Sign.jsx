import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,

} from '@chakra-ui/react';
import { useState } from 'react';
import styles from "./login.module.css"
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import AskforsSignup from '../AskforsSignup/AskforsSignup';
import OrDiv from '../OR_div/Or_div';
import { signin } from '../../Redux/Authreducer/actions';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/ArfReducer/action';

export const SigninCard=() =>{
  const [showPassword, setShowPassword] = useState(false);
  const {token,isAuth,isError,isLoading}=useSelector(state=>state.AuthReducer)
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const dispatch=useDispatch()
console.log(token,isAuth,isError,isLoading)

  const handlelogin=()=>{
    // e.preventDefault()
    //  dispatch(signin({email,password}))
    dispatch(signin());
  }

  return (
    <>
    <div className={styles.Login_main}>
    <Flex
      minH={'78vh'}
      direction={"column"}
      justify-content={"flex-start"}    
     >        
    <Box
       w="110%"
          >
          
          
              <h2 className={styles.Signin_title}>SIGN IN</h2>
              <div className={styles.other_options}>
                
    <div className={styles.facebook}><FaFacebookF className={styles.facebook_icon}/> Login With facebook</div>
    <div className={styles.google}><FcGoogle className={styles.google_icon}/> Login With Google</div>
   </div>
    <p className={styles.sign_in_below}>If you already have an account with us, sign in below</p>
          <Stack spacing={4}>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired >
              <FormLabel>Password</FormLabel>
              <InputGroup >
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setpassword(e.target.value)}/>
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
          
            <div className={styles.parent_frgt_pswrd}>
              <p className={styles.frgt_pswrd}>
                 <a href="www.google.com">Forgot password ?</a>
              </p>
              <div >
                <input className={styles.parent_frgt_pswrd_input} type="checkbox"/>
                <label className={styles.parent_label}>Remember Me</label>
              </div>
              
            </div>
            <p>
                 <a href="www.google.com">Privay Policy</a>
              </p>
              <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="md"
                width="30%"
                margin={'auto'}
                bg={'black'}
                color={'white'}
                _hover={{
                  bg: 'white',
                  color:'black',
                  border:'0.5px solid black'
                }}
                onClick={handlelogin}
                // onClick={()=>dispatch(getData())}
                >
                SIGN IN
              </Button>
              
            </Stack>
          </Stack>
        </Box>
    </Flex>
      <OrDiv/>  
      <AskforsSignup/>
    </div>
    </>
  );
}