import {Box, HStack, VStack} from '@chakra-ui/react'
import Intro from './Components/Intro';
import Skill from './Components/Skill';
import Achievement from './Components/Achievement';

function App() {
  return (
    <VStack w={'100%'}  >
      <Intro />
      <Skill />
      <Achievement/>
    </VStack>
  );
}

export default App;
