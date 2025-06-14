import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import {
  getBudget,
  getIncomeExpenseHistory,
  postExpense,
  postIncome,
} from '../api/accountHistory.api';
import {
  ExpenseFormRequestBody,
  IncomeFormRequestBody,
} from '../AccountHistoryCreate/hooks/useTransactionHistoryForm';
import {
  GetBudgetResponse,
  GetIncomeExpenseHistoryResponse,
} from '../api/accountHistory.type';

export const ACCOUNT_QUERY_KEY = {
  GET_BUDGET: ['money-tracker', 'budget'],
  GET_INCOME_EXPENSE_HISTORY: ['money-tracker', 'income-expense'],
} as const;

export const useGetBudget = (
  props?: UseSuspenseQueryOptions<GetBudgetResponse, Error>,
) => {
  return useSuspenseQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_BUDGET,
    queryFn: getBudget,
    ...props,
  });
};

export const useGetIncomeExpenseHistory = (
  props?: UseSuspenseQueryOptions<GetIncomeExpenseHistoryResponse, Error>,
) => {
  return useSuspenseQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_INCOME_EXPENSE_HISTORY,
    queryFn: getIncomeExpenseHistory,
    ...props,
  });
};

export const usePostExpense = (
  props?: UseMutationOptions<any, Error, ExpenseFormRequestBody>,
): UseMutationResult<any, Error, ExpenseFormRequestBody> => {
  return useMutation({
    mutationFn: postExpense,
    ...props,
  });
};

export const usePostIncome = (
  props?: UseMutationOptions<any, Error, IncomeFormRequestBody>,
): UseMutationResult<any, Error, IncomeFormRequestBody> => {
  return useMutation({
    mutationFn: postIncome,
    ...props,
  });
};
