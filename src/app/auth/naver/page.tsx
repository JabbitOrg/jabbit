'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import { useAuthStore, User } from '../../../store/authStore';
import { useErrorStore } from '@/src/store/errorStore';

const NaverAuthPage = () => {
  const router = useRouter();
  const code = useSearchParams().get('code');
  const { setUser } = useAuthStore();
  const { setError } = useErrorStore();
  useEffect(() => {
    if (code) {
      const state = localStorage.getItem('naverState');
      fetch(`/api/auth/naver/callback?code=${code}&state=${state}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const user: User = {
              id: data.id,
              provider: data.provider,
            };
            setUser(user, data.token);
            router.replace('/');
          } else {
            setError(data.error);
            router.replace('/login');
          }
        })
        .catch(() => {
          setError('NETWORK_ERROR');
          router.replace('/login');
        });
    }
  }, [code, router, setUser]);

  return (
    <Flex
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap={4}
    >
      <Spinner size="xl" />
      <Text fontSize="lg">로그인 시도 중이에요.</Text>
    </Flex>
  );
};

export default NaverAuthPage;
