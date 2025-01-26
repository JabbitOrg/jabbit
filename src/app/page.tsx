'use client';

import { Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Button onClick={() => router.push('/todo')}>Go to Todo page</Button>
    </Flex>
  );
};

export default Home;
