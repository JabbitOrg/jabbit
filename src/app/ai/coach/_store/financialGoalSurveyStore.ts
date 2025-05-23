import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentTimestamp } from '@/src/client/utils/parser';

interface Answer {
  id: number;
  answer: string | number;
  text: string;
}

interface financialGoalSurveyState {
  answers: Record<number, Answer>;
  isSubmitted: boolean;
  dateSubmitted: string | null;
  setAnswer: (id: number, answer: string | number, text: string) => void;
  clearSurvey: () => void;
  submitSurvey: () => void;
  isNotificationEnabled: boolean;
  setNotification: (isNotificationEnabled: boolean) => void;
  setScenarioCreated: () => void;
  setPlanCreated: () => void;
  setRoutineCreated: () => void;
  dateScenarioCreated: string | null;
  datePlanCreated: string | null;
  dateRoutineCreated: string | null;
}

export const useFinancialGoalSurveyStore = create<financialGoalSurveyState>()(
  persist(
    (set) => ({
      answers: {},
      isSubmitted: false,
      dateSubmitted: null,
      isNotificationEnabled: false,
      dateScenarioCreated: null,
      datePlanCreated: null,
      dateRoutineCreated: null,
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
      setNotification: (isNotificationEnabled) =>
        set({ isNotificationEnabled: isNotificationEnabled }),
      setScenarioCreated: () =>
        set({
          dateScenarioCreated: getCurrentTimestamp(),
        }),
      setPlanCreated: () =>
        set({
          datePlanCreated: getCurrentTimestamp(),
        }),
      setRoutineCreated: () =>
        set({
          dateRoutineCreated: getCurrentTimestamp(),
        }),
    }),
    {
      name: 'financial-goal-survey-storage',
    },
  ),
);
