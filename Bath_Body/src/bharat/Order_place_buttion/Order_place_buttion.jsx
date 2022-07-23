import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Image
} from '@chakra-ui/react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export function BasicUsage() {
  const navigate=useNavigate()
const handleclose=()=>{
navigate("/")
}
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
     <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="md"
                width="100%"
                margin={'auto'}
                bg={'black'}
                color={'white'}
                marginTop="20px"
                _hover={{
                  bg: 'white',
                  color:'black',
                  border:'0.5px solid black'
                  
                }}
               onClick={onOpen}
                
                >
                PLACE ORDER
              </Button>
            </Stack>

      <Modal isOpen={isOpen} onClose={()=>{onClose(); handleclose()}}>
        <ModalOverlay/>
        <ModalContent>
          
          <ModalHeader>Order Placed Succefully!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Image width={"80%"} margin="auto" src="https://media.istockphoto.com/vectors/vector-typography-for-banner-poster-invitation-greeting-postcard-for-vector-id1063232648?k=20&m=1063232648&s=612x612&w=0&h=uAe-h2LHZNyjwP_povu1Ll6UXphzG5fJBqyyyMMPf-U=" alt=""/>
          </ModalBody>

          <ModalFooter>
            <Link to ="/"> <Button colorScheme='blue' mr={3} onClick={onClose}>Close
            </Button></Link>
           
              
             
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
