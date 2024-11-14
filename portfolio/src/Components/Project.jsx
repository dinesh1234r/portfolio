import React from 'react'
import {Box, Heading,Center,Flex,Card,Text,Image, HStack, Button, Spacer} from '@chakra-ui/react'
import Project1 from '../Assets/E-commerence.png'
import Project2 from '../Assets/Chatapplication.png'
import Project3 from '../Assets/Medivault.png'

function Project() {
  return (
    <Box h={'100vh'} w={'100%'} p={10}>
        <Center>
            <Heading>
                Projects
            </Heading>
        </Center>
        <Center>
        <Box mt={10}>
                <Flex direction={{base:"column",md:"row"}}gap={10}>
                    <Card w={'300px'} h={'60vh'} boxShadow={'lg'} borderRadius={20} gap={4}>
                        <Center mt={8}>
                        <Image src={Project1} w={'40vh'} borderRadius={'md'}/>
                        </Center>
                        <Text ml={2}  fontFamily={'monospace'} fontSize={'2xl'}>
                            E-commerence
                        </Text>
                        <Text ml={2} mr={2}>
                        Developed a secure e-commerce platform with JWT authentication, order history, shopping cart, secure checkout, input validation, bcrypt password hashing, and secured API endpoints.
                        </Text>
                        <HStack ml={4} mr={6}>
                            <Text>
                                #MERNSTACK
                            </Text>
                            <Spacer/>
                            <Button onClick={()=>{window.open('https://e-commerce-frontend-1jum.onrender.com')}} boxShadow={'lg'}
                                bg={'lightblue'}>
                                View
                            </Button>
                        </HStack>
                    </Card>
                    <Card w={'300px'} h={'60vh'} boxShadow={'lg'} borderRadius={20} gap={4}>
                        <Center mt={8}>
                        <Image src={Project2} w={'40vh'} borderRadius={'md'}/>
                        </Center>
                        <Text ml={2}  fontFamily={'monospace'} fontSize={'2xl'}>
                            Chat Application
                        </Text>
                        <Text ml={2} mr={2}>
                        Built a real-time chat app with JWT authentication, Socket.IO for messaging, and features like chat history, message search, and emoji support.
                        </Text>
                        <HStack ml={4} mr={6}>
                            <Text>
                                #MERNSTACK
                            </Text>
                            <Spacer/>
                            <Button onClick={()=>{window.open('https://chat-app-forntend.onrender.com/')}} boxShadow={'lg'}
                                bg={'lightblue'}>
                                View
                            </Button>
                        </HStack>
                    </Card>
                    <Card w={'300px'} h={'60vh'} boxShadow={'lg'} borderRadius={20} gap={4}>
                        <Center mt={8}>
                        <Image src={Project3} w={'40vh'} borderRadius={'md'}/>
                        </Center>
                        <Text ml={2}  fontFamily={'monospace'} fontSize={'2xl'}>
                            Medivault
                        </Text>
                        <Text ml={2} mr={2}>
                        Built a patient record management system with facial recognition, role-based access for nurses and doctors, secure image storage via Cloudinary and Firebase, and a Chakra UI frontend.
                        </Text>
                        <HStack ml={4} mr={6}>
                            <Text>
                                #MERNSTACK
                            </Text>
                            <Text>
                                #CHAKRAUI
                            </Text>
                            <Spacer/>
                            <Button onClick={()=>{window.open('https://medivault-website.onrender.com/')}} boxShadow={'lg'}
                                bg={'lightblue'}>
                                View
                            </Button>
                        </HStack>
                    </Card>
                </Flex>
            </Box>
        </Center>
    </Box>
  )
}

export default Project