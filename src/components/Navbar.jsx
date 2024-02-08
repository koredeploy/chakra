import { UnlockIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react"

const Navbar  = () => {
  const toast = useToast()
  const showToast = ()=>{
    toast({
      title: "Logged Out",
      description: 'Successfully logged out',
      duration: 4000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon/>
    })
  }
  return (
    <Flex as='nav' p='10px' alignItems='center' mb={10} >
        <Heading as='h1'> Dojo Tasks</Heading>
        <Spacer/>
        <HStack spacing='20px'>
        <Box bg='gray.200' p='10px'> M</Box>
        <Text>Mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
    // <Flex bg='gray.200' justify="space-between" wrap="wrap" gap="2">
    //     <Box w='150px' h='50px' bg='red'> 1 </Box>
    //     <Box w='150px' h='50px' bg='blue'> 2 </Box>
    //     <Box w='150px' h='50px' flexGrow='1' bg='green'> 3 </Box>
    //     <Box w='150px' h='50px' flexGrow='2' bg='yellow'> 4 </Box>
    // </Flex>
  )
}

export default Navbar