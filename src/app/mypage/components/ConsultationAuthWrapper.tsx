'use client';

import { useAuthStore } from '@/src/client/store/authStore';
import { redirect } from 'next/navigation';

interface ConsultationAuthWrapperProps {
  children: React.ReactNode;
  authenticatedUserId: string;
}

const ConsultationAuthWrapper = ({
  children,
  authenticatedUserId,
}: ConsultationAuthWrapperProps) => {
  const { user } = useAuthStore();
  if (!user || user.id !== authenticatedUserId) {
    redirect('/');
  }
  return children;
};

export default ConsultationAuthWrapper;
