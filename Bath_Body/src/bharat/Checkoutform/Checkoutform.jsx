import React, { useState } from 'react'
import {
    Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  StylesProvider
} from '@chakra-ui/react';
import styles from "./Checkoutform.module.css"

const Checkoutform = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.checkoutform_main}>
      <h2 className={styles.form_title}>SELECT DELIVERY ADDRESS</h2>
<Stack spacing={4}>
   <Flex gap={10}>
       <FormControl id="firstName" isRequired >
         <FormLabel fontWeight={"400"}>First Name</FormLabel>
         <Input type="text" background={"white"}/>
       </FormControl>
       <FormControl id="LasttName" isRequired>
         <FormLabel fontWeight={"400"}>Last Name</FormLabel>
         <Input type="text" background={"white"}/>
       </FormControl>
   </Flex>
 
   <FormControl id="email" isRequired> 
     <FormLabel fontWeight={"400"}>Address 1</FormLabel>
     <Input type="email" background={"white"}/>
   </FormControl>
   <FormControl id="Username" isRequired>
     <FormLabel fontWeight={"400"}>Address 2</FormLabel>
     <Input type="text"  background={"white"}/>
   </FormControl>
<Flex gap={10}>
     <FormControl id="birthday" isRequired>
       <FormLabel fontWeight={"400"}>Country</FormLabel>
       <Input type="text" background={"white"}/>
     </FormControl>
     <FormControl id="zipCode" isRequired>
      <FormLabel fontWeight={"400"}>Zip/Postal Code</FormLabel>
      <Input type="number" background={"white"}/>
    </FormControl>      
</Flex>
<Flex gap={10}>
        <FormControl id="birthday" isRequired>
     <FormLabel fontWeight={"400"}>State</FormLabel>
     <Input type="text" background={"white"}/>
   </FormControl>
    <FormControl id="zipCode" isRequired>
     <FormLabel fontWeight={"400"}>City</FormLabel>
     <Input type="text" background={"white"}/>
   </FormControl>      
   </Flex>
   <FormControl id="mobile" isRequired>
     <FormLabel fontWeight={"400"} >Phone Number</FormLabel>
     <Input type="number" background={"white"}/>
      <FormLabel fontWeight={"400"}>Example: 9234567890</FormLabel>
     </FormControl>
 </Stack>
      <p className={styles.exaple}>SHIPPING METHOD </p>
      <div className={styles.input_radio_box}>
        <input type="radio"  defaultChecked />
        <label className={styles.text_white_background}><span className={styles.standard}>Standard</span> <span className={styles.bracket_text}>(Estimated Delivery in 5 to 7 Days)</span></label>
        <span className={styles.delivery_charge}>..............................
      ₹0.00</span>
      </div>
     
    </div>
  )
}

export default Checkoutform
