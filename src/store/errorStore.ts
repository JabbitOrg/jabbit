import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ErrorCode } from '@/src/constants/ERROR_MESSAGES';
interface ErrorState {
  errorCode: ErrorCode | null;
  setError: (errorCode: ErrorCode | null) => void;
}

export const useErrorStore = create<ErrorState>()(
  persist(
    (set) => ({
      errorCode: null,
      setError: (errorCode: ErrorCode | null) => set({ errorCode }),
    }),
    {
      name: 'error',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
