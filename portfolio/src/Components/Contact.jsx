import React from 'react'
import {Box, Button, Center, FormControl, FormLabel, Heading,Input,Text, Textarea, VStack} from '@chakra-ui/react'

function Contact() {
  return (
        <Box h={'100vh'} w={'100%'} p={10} >
            <Text fontSize={'4xl'} fontWeight={'bold'} ml={40} mt={8}>Write a Message 👇</Text>
            <Box w={'100%'} ml={80} mt={10} >
                <FormControl>
                <FormLabel fontWeight={'bold'} fontSize={'2xl'}>Your Name</FormLabel>
                <Input placeholder='Name' w={'40%'} type='text'/>
                </FormControl>
                <FormControl mt={6}>
                <FormLabel fontWeight={'bold'} fontSize={'2xl'}>Your Email</FormLabel>
                <Input w={'40%'} placeholder='Email' type='email'/>
                </FormControl>
                <FormControl>
                <FormLabel fontWeight={'bold'} fontSize={'2xl'}>Message</FormLabel>
                <Textarea w={'40%'} type='text' placeholder='Type your message here ...'/>
                </FormControl>
                <Button w={'40%'} mt={6} bg={'orange'}>Send</Button>
            </Box>
        </Box>
  )
}

export default Contact