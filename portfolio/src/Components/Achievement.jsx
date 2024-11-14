import React, { useEffect, useState } from 'react';
import { Box, Center, Heading, Image, Flex, VStack, Text, HStack } from '@chakra-ui/react';

function Achievement() {
  const [leetcode, setLeetcode] = useState(0);

  useEffect(() => {
    const leetcodeCall = async () => {
      try {
        const response = await fetch("https://leetcode.com/graphql/", {
          method: "POST",
          headers: {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,en-IN;q=0.8,fr;q=0.7",
            "authorization": "",
            "content-type": "application/json",
            "x-csrftoken": "kM8d7NLpuFVUOKsugVfDXFrMM364GleW37bULRMzcCKDOqSVcSNlcXWeEamI0wwR"
          },
          body: JSON.stringify({
            query: `
              query userProfileUserQuestionProgressV2($userSlug: String!) {
                userProfileUserQuestionProgressV2(userSlug: $userSlug) {
                  numAcceptedQuestions {
                    count
                    difficulty
                  }
                  totalQuestionBeatsPercentage
                }
              }
            `,
            variables: { userSlug: "mec037" },
            operationName: "userProfileUserQuestionProgressV2"
          }),
          credentials: "include"
        });
        
        const result = await response.json();
        
        // Navigate through the response data structure to set the Leetcode data
        const totalSolved = result.data.userProfileUserQuestionProgressV2.numAcceptedQuestions.reduce(
          (sum, question) => sum + question.count,
          0
        );
        setLeetcode(totalSolved);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    leetcodeCall();
  }, []); // Empty dependency array means this effect runs only once

  return (
    <Box w={'100%'} h={'100vh'} p={4}>
      <Center mt={10}>
        <Heading>TOOLS AND SOFTWARE</Heading>
      </Center>
      <Center mt={10} p={10}>
        <Flex gap={10}>
          <VStack>
            <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/vscode.png' boxSize={20} />
            <Text>VS Code</Text>
          </VStack>
          <VStack>
            <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/ChatGPT.png' boxSize={20} />
            <Text>Chat GPT</Text>
          </VStack>
          <VStack>
            <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/mongodbCompass.png' boxSize={20} />
            <Text>MongoDB Compass</Text>
          </VStack>
          <VStack>
            <Image src='https://mern-rajesh-portfolio.web.app/assets/tools/postman.png' boxSize={20} />
            <Text>Postman</Text>
          </VStack>
          <VStack>
            <Image src='https://th.bing.com/th/id/R.98865e06d77faca32b3e118df119049e?rik=AU0%2bE0ROLAbnog&riu=http%3a%2f%2flogonoid.com%2fimages%2fintellij-idea-logo.png&ehk=CapqYnZAeX0cbsUWxFNWr913YwdQDC7OFt%2ftIAEb%2fBU%3d&risl=&pid=ImgRaw&r=0' boxSize={20} />
            <Text>IntelliJ</Text>
          </VStack>
        </Flex>
      </Center>
      <Center mt={10}>
        <Heading>Program Solved Count</Heading>
      </Center>
      <VStack mt={10} spacing={10}>
        <HStack>
          <Text fontFamily={'cursive'} fontSize={30}>Leetcode :</Text>
          <Text fontFamily={'cursive'} fontSize={30}>{`${leetcode}+`}</Text>
        </HStack>
        <HStack>
          <Text fontFamily={'cursive'} fontSize={30}>Striver SDE Sheet :</Text>
          <Text fontFamily={'cursive'} fontSize={30}>500+</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Achievement;
