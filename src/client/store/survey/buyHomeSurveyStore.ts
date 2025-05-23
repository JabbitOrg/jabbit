import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentTimestamp } from '@/src/client/utils/parser';

interface Answer {
  id: number;
  answer: string | number;
  text: string;
}

interface BuyHomeSurveyState {
  answers: Record<number, Answer>;
  isSubmitted: boolean;
  dateSubmitted: string | null;
  dateFirstVisit: string | null;
  setAnswer: (id: number, answer: string | number, text: string) => void;
  setDateFirstVisit: () => void;
  clearSurvey: () => void;
  submitSurvey: () => void;
}

export const useBuyHomeSurveyStore = create<BuyHomeSurveyState>()(
  persist(
    (set, get) => ({
      answers: {},
      isSubmitted: false,
      dateSubmitted: null,
      dateFirstVisit: null,
      setDateFirstVisit: () => {
        const current = get().dateFirstVisit;
        if (!current) {
          set(() => ({
            dateFirstVisit: getCurrentTimestamp(),
          }));
        }
      },
      setAnswer: (id, answer, text) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [id]: { id, answer, text },
          },
        })),
      clearSurvey: () =>
        set({ answers: {}, isSubmitted: false, dateSubmitted: null }),
      submitSurvey: () =>
        set({
          isSubmitted: true,
          dateSubmitted: getCurrentTimestamp(),
        }),
    }),
    {
      name: 'buy-home-survey-storage',
    },
  ),
);
