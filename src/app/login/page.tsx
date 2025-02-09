'use client';

import { Flex } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import KakaoLoginBtnSVG from '@/public/assets/KakaoLoginBtn.svg';
import NaverLoginBtnSVG from '@/public/assets/NaverLoginBtn.svg';
import LogoSVG from '@/public/assets/logo.svg';
import { Text } from '@chakra-ui/react';
import { OAUTH } from '@/src/app/constants/auth';

const handleKakaoLogin = () => {
  window.location.href = OAUTH.KAKAO.AUTH_URL;
};

const handleNaverLogin = () => {
  const naverState = uuidv4();
  localStorage.setItem('naverState', naverState);
  window.location.href = OAUTH.NAVER.AUTH_URL(naverState);
};

const Login = () => {
  return (
    <Flex width="100%" height="100vh">
      <Flex mx="auto" maxWidth="1280px" width="100%" flexDirection="column">
        <Flex mt="35px">
          <LogoSVG />
        </Flex>

        <Flex
          height="100%"
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="40px" fontWeight="600" color="main.black_1">
            로그인 / 회원가입
          </Text>
          <Flex flexDirection="column" gap="20px" mt="52px">
            <KakaoLoginBtnSVG onClick={handleKakaoLogin} cursor="pointer" />
            <NaverLoginBtnSVG onClick={handleNaverLogin} cursor="pointer" />
          </Flex>
          <Text
            fontSize="16px"
            fontWeight="400"
            color="main.gray_1"
            mt="36px"
            textAlign="center"
            maxWidth="333px"
            wordBreak="keep-all"
          >
            신규 회원가입시 서비스 이용 약관 및 개인정보 수집에 동의한 것으로
            간주됩니다.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
