import {Box, HStack, VStack} from '@chakra-ui/react'
import Intro from './Components/Intro';
import Skill from './Components/Skill';
import Achievement from './Components/Achievement';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <VStack w={'100%'}  >
      <Intro />
      <Skill />
      <Achievement/>
      <Project/>
      <Contact/>
    </VStack>
  );
}

export default App;
