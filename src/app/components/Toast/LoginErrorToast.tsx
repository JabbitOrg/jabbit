'use client';

import { useEffect } from 'react';
import { toaster } from '@/src/components/ui/toaster';
import { useSearchParams } from 'next/navigation';

export const LoginErrorToast = () => {
  const error = useSearchParams().get('error');

  useEffect(() => {
    if (error) {
      toaster.create({
        title: '로그인 실패',
        description: '로그인에 실패했습니다.',
        type: 'error',
      });
    }
  }, [error]);

  return null;
};
