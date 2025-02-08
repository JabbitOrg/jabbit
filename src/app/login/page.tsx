'use client';

import { Button } from '@chakra-ui/react';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

const handleKakaoLogin = () => {
  window.location.href = KAKAO_AUTH_URL;
};

const Login = () => {
  return <Button onClick={handleKakaoLogin}>KakaoLogin</Button>;
};

export default Login;
