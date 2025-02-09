'use client';

import { Flex } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import KakaoLoginBtnSVG from '@/public/assets/KakaoLoginBtn.svg';
import NaverLoginBtnSVG from '@/public/assets/NaverLoginBtn.svg';

const naverState = uuidv4();
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}&state=${naverState}`;

const handleKakaoLogin = () => {
  window.location.href = KAKAO_AUTH_URL;
};

const handleNaverLogin = () => {
  localStorage.setItem('naverState', naverState);
  window.location.href = NAVER_AUTH_URL;
};

const Login = () => {
  return (
    <Flex
      direction="column"
      gap={4}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <KakaoLoginBtnSVG onClick={handleKakaoLogin} cursor="pointer" />
      <NaverLoginBtnSVG onClick={handleNaverLogin} cursor="pointer" />
    </Flex>
  );
};

export default Login;
