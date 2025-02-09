'use client';

import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/authStore';

const LogoutBtn = () => {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <Text
      fontSize="20px"
      fontWeight="600"
      color="main.gray_1"
      cursor="pointer"
      onClick={handleLogout}
    >
      로그아웃
    </Text>
  );
};

export default LogoutBtn;
