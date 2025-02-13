// src/components/ErrorToast.tsx
'use client';

import { useEffect } from 'react';
import { useErrorStore } from '@/src/store/errorStore';
import { toaster } from '@/src/components/ui/toaster';
import { ERROR_MESSAGES } from '@/src/constants/ERROR_MESSAGES';

const ErrorToast = () => {
  const { errorCode, setError } = useErrorStore();

  useEffect(() => {
    if (!errorCode) return;

    if (Object.hasOwn(ERROR_MESSAGES, errorCode)) {
      toaster.create({
        title: '문제가 발생했습니다.',
        description: ERROR_MESSAGES[errorCode as keyof typeof ERROR_MESSAGES],
        type: 'error',
      });
    } else {
      toaster.create({
        title: '문제가 발생했습니다.',
        description: ERROR_MESSAGES['UNKNOWN_ERROR'],
        type: 'error',
      });
    }

    // 3초 후 에러 메시지 초기화 (중복 방지)
    setTimeout(() => setError(null), 3000);
  }, [errorCode, setError]);

  return null; // UI를 렌더링하지 않음
};

export default ErrorToast;
