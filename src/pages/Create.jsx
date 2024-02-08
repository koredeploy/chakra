import { Box, Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { Form, redirect } from 'react-router-dom'





const Create = () => {
  return (
   <Box maxW="480px">
    <Form method='post' action='/create'>
      <FormControl isRequired mb="40px">
        <FormLabel>Task Name:</FormLabel>
        <Input type='text' name='title' />
        <FormHelperText> Enter a descriptive task name</FormHelperText>
      </FormControl>
      <FormControl mb="40px">
        <FormLabel>Task Description</FormLabel>
        <Textarea placeholder='Enter a detailed description fro the task...' name='description' />
      </FormControl>
      <FormControl display="Flex" alignItems='center' mb="40px">
        <Checkbox name='isPriority' size="lg" colorScheme='purple'/>
        <FormLabel mb="0" ml="2">Make this a priority task</FormLabel>
      </FormControl>
      <Button type='submit'>Submit</Button>
    </Form>
   </Box>
  )
}

export default Create

// eslint-disable-next-line react-refresh/only-export-components
export const createAction = async ({request}) =>{
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }
  console.log(task);

  return redirect('/')
}