import React, { useEffect } from 'react'
import {Box, Flex, Heading,VStack, HStack,Image,Center, IconButton,Text,Link,Spacer,Card,Icon} from '@chakra-ui/react'
import { FaJava } from 'react-icons/fa';

function Skill() {
    

  return (
    <Box w={'100%'} h={'100vh'} >
        <Box p={10} mt='10'>
            <Center>
        <Heading fontFamily={'sans-serif'} fontSize={'5xl'}>Skills</Heading>
        </Center>
        <Center w={'80%'} ml={'10%'}>
        <Flex
        wrap={'wrap'}
        ml={10}
        gap={'20'}
        direction={{base:"column" ,md:"row"}} mt={'10'}>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://mern-rajesh-portfolio.web.app/assets/tech/html.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>HTML</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://mern-rajesh-portfolio.web.app/assets/tech/css.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>CSS</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://mern-rajesh-portfolio.web.app/assets/tech/javascript.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>JavaScript</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://mern-rajesh-portfolio.web.app/assets/tech/reactjs.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>React</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://mern-rajesh-portfolio.web.app/assets/tech/redux.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>Redux</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://www.coffeeclass.io/logos/chakra-ui.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>Chakra UI</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://mern-rajesh-portfolio.web.app/assets/tech/expressjs.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>Express JS</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://mern-rajesh-portfolio.web.app/assets/tech/mongodb.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>Mongo DB</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://mern-rajesh-portfolio.web.app/assets/tech/mongoose.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>Mongoose</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://siakhooi.github.io/java-g5-framework/img/logo.jpg'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>Java</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://pngimg.com/d/mysql_PNG23.png'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>MY SQL</Text>
            </VStack>
            <VStack h={'20vh'} w={'15vh'}>
                <Image src='https://logowik.com/content/uploads/images/github9775.jpg'/>
                <Spacer/>
                <Text fontSize={'1xl'} fontWeight={'semibold'}>Git Hub</Text>
            </VStack>
        </Flex>
        </Center>
        </Box>
    </Box>
  )
}

export default Skill