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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import styles from "./login.module.css"
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

export const SigninCard=() =>{
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
 
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      direction={"column"}
      justify-content={"flex-start"}
     >
        
        <Box
       w="130%"
          p={8}
          >
          
          
           
              <div className={styles.other_options}>
    <div className={styles.facebook}><FaFacebookF className={styles.facebook_icon}/> Login With facebook</div>
    <div className={styles.google}><FcGoogle className={styles.google_icon}/> Login With Google</div>
   </div>
    <p className={styles.sign_in_below}>If you already have an account with us, sign in below</p>
          <Stack spacing={4}>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired >
              <FormLabel>Password</FormLabel>
              <InputGroup >
                <Input type={showPassword ? 'text' : 'password'} />
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
                }}>
                SIGN IN
              </Button>
              
            </Stack>
          </Stack>
        </Box>
    </Flex>
    </>
  );
}