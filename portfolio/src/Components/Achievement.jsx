import React,{useEffect,useState} from 'react'
import {Box, Center,Heading,Image,Flex,VStack,Text, Card, HStack} from '@chakra-ui/react'
import axios from 'axios';

function Achievement() {
    const [leetcode,Setleetcode]=useState(0)
    useEffect(() => {
        const leetcodecall = async () => {
            try {
                const response = await axios.get('https://backend.takeuforward.org/api/profile/user/leetcode/DINESH2003', {
                    leetcode_id: "mec037",
                    success: true,
                    username: "DINESH2003"
                });
                console.log(response.data);
                Setleetcode(response.data.leetcode_data.totalSolved);
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.response) {
                    console.error("Response error data:", error.response.data);
                }
            }
        };
        leetcodecall();
    });
  return (
    <Box w={'100%'} h={'100vh'} p={4} >
        <Center mt={10}>
            <Heading>TOOLS AND SOFTWARE</Heading>
        </Center>
        <Center mt={10} p={10}>
            <Flex gap={10}>
                <VStack >
                    <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/vscode.png' boxSize={20}/>
                    <Text>VS Code</Text>
                </VStack>
                <VStack >
                    <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/ChatGPT.png' boxSize={20}/>
                    <Text>Chat GPT</Text>
                </VStack>
                <VStack >
                    <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/mongodbCompass.png' boxSize={20}/>
                    <Text>MongoDB Compass</Text>
                </VStack>
                <VStack >
                    <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/postman.png' boxSize={20}/>
                    <Text>Postman</Text>
                </VStack>
                <VStack >
                    <Image src='https://th.bing.com/th/id/R.98865e06d77faca32b3e118df119049e?rik=AU0%2bE0ROLAbnog&riu=http%3a%2f%2flogonoid.com%2fimages%2fintellij-idea-logo.png&ehk=CapqYnZAeX0cbsUWxFNWr913YwdQDC7OFt%2ftIAEb%2fBU%3d&risl=&pid=ImgRaw&r=0' boxSize={20}/>
                    <Text>IntelliJ</Text>
                </VStack>
                {/* <VStack >
                    <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/postman.png' boxSize={20}/>
                    <Text>Postman</Text>
                </VStack> */}
            </Flex>
        </Center>
        <Center mt={10}>
            <Heading>Program Solved Count</Heading>
        </Center>
        <VStack mt={10} spacing={10}>
            <HStack>
            <Text fontFamily={'cursive'} fontSize={30} >Leetcode :</Text>
            <Text fontFamily={'cursive'} fontSize={30} >{`${leetcode}+`}</Text>
            </HStack>
            <HStack>
            <Text fontFamily={'cursive'} fontSize={30} >Striver SDE Sheet :</Text>
            <Text fontFamily={'cursive'} fontSize={30} >500+</Text>
            </HStack>
        </VStack>
    </Box>
  )
}

export default Achievement