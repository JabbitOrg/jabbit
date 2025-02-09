'use client';

import { Button, Flex, Group } from '@chakra-ui/react';
import AuthBtn from '../AuthBtn/AuthBtn';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      maxWidth="1280px"
      width="100%"
    >
      <Logo />
      <Group>
        <Button color="main.black_1" variant="plain" fontSize="18px">
          전문가 찾기
        </Button>
        <Button variant="plain" fontSize="18px">
          상품 견적 요청
        </Button>
        <Button variant="plain" fontSize="18px">
          AI 무료 진단
        </Button>
        <Button variant="plain" fontSize="18px">
          금융 미션
        </Button>
        <Button variant="plain" fontSize="18px">
          커뮤니티
        </Button>
      </Group>
      <AuthBtn />
    </Flex>
  );
};

export default Navigation;
