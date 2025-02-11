'use client';

import { useEffect } from 'react';
import { toaster } from '@/src/components/ui/toaster';
import { useSearchParams } from 'next/navigation';

type ToastType = 'error' | 'success' | 'info' | 'warning';

interface ToastProps {
  title: string;
  description: string;
  type: ToastType;
  searchParam: string;
}

export const useToast = (toastProps: ToastProps) => {
  const { title, description, type, searchParam } = toastProps;
  const searchParamValue = useSearchParams().get(searchParam);

  useEffect(() => {
    if (searchParamValue) {
      toaster.create({
        title,
        description,
        type,
      });
    }
  }, [searchParamValue]);

  return null;
};
