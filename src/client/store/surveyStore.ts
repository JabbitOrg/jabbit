import { create } from 'zustand';

interface answer {
  id: number;
  answer: string | number;
}

interface SurveyState {
  answers: Record<number, answer>;
  setAnswer: (id: number, answer: string | number) => void;
  clearAnswers: () => void;
}

export const useSurveyStore = create<SurveyState>((set) => ({
  answers: {},
  setAnswer: (id, answer) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [id]: { id, answer },
      },
    })),
  clearAnswers: () => set({ answers: {} }),
}));
