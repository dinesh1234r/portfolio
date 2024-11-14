import React from 'react'
import {Box, Flex, Heading, HStack,Image, IconButton,Text,Link,Spacer,useColorMode,useMediaQuery} from '@chakra-ui/react'
import { FaGithub, FaLinkedin , FaSun, FaMoon } from "react-icons/fa";
// import { useMediaQuery } from "@chakra-ui/media-query";

function Intro() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isNotsmallscreen]=useMediaQuery("(min-width:600px)")
  return (
    <Box w={'100%'} p={10} h={'100vh'}>
        <Flex gap={2}>
            <Heading fontSize={20}>
                DineshKumar R
            </Heading>
            <Spacer/>
            <IconButton icon={<FaGithub/>} fontSize={'25px'} isRound='true' onClick={()=>{window.open('https://github.com/dinesh1234r/')}}/>
            <IconButton icon={<FaLinkedin/>} fontSize={'25px'} isRound='true' onClick={()=>{window.open('https://www.linkedin.com/in/dinesh-kumar-23328526a/')}}/>
            <Spacer maxW={10}/>
            <IconButton icon={colorMode==='light'?<FaSun/>:<FaMoon/>} fontSize={'25px'} isRound='true' onClick={toggleColorMode}/>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }}
        p={32}
        gap={'15%'}
        >
          <Box>
            <Text fontSize={'5xl'} fontWeight={'semibold'}>Hi, I am</Text>
            <Text fontSize={'7xl'}
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text">DINESHKUMAR</Text>
            <Text fontSize={'2xl'} color={'gray.400'}>I'm a passionate programmer specializing in the MERN stack, dedicated to creating responsive, user-friendly applications that solve real-world problems.</Text>
          </Box>
          <Image src='https://pbs.twimg.com/profile_images/1292721383546318850/KU8pErTW_400x400.jpg' alt='photo' borderRadius={'full'} boxSize={isNotsmallscreen?"300px":"100px"} alignSelf={'center'}/>
        </Flex>
    </Box>
  )
}

export default Intro