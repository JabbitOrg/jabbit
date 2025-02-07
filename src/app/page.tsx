import { Flex } from '@chakra-ui/react';
import Navigation from './components/Navigation/Naviagtion';

const Home = () => {
  return (
    <Flex flexDirection="column" width="100%" height="100vh" paddingTop="35px">
      <Navigation />
    </Flex>
  );
};

export default Home;
