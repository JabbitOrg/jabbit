import { useSuspenseQuery } from '@tanstack/react-query';
import { getBudget, getIncomeExpenseHistory } from '../api/accountHistory.api';

export const ACCOUNT_QUERY_KEY = {
  GET_BUDGET: ['money-tracker', 'budget'],
  GET_INCOME_EXPENSE_HISTORY: ['money-tracker', 'income-expense'],
} as const;

export const useGetBudget = () => {
  return useSuspenseQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_BUDGET,
    queryFn: getBudget,
  });
};

export const useGetIncomeExpenseHistory = () => {
  return useSuspenseQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_INCOME_EXPENSE_HISTORY,
    queryFn: getIncomeExpenseHistory,
  });
};
