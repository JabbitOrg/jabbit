import { Button, Flex, Group } from '@chakra-ui/react';
import LogoSVG from '@/public/assets/logo.svg';

const Navigation = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      maxWidth="1280px"
      width="100%"
    >
      <LogoSVG />
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
      <Button
        bg="primary"
        w="184px"
        h="61px"
        borderRadius="12px"
        fontSize="18px"
        color="main.white_1"
      >
        로그인/회원가입
      </Button>
    </Flex>
  );
};

export default Navigation;
