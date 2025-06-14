import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query';
import {
  deleteExpense,
  deleteIncome,
  getBudget,
  getIncomeExpenseHistory,
  postExpense,
  postIncome,
  putExpense,
  putIncome,
} from '../api/accountHistory.api';
import {
  ExpenseFormRequestBody,
  IncomeFormRequestBody,
} from './useTransactionHistoryForm';
import {
  GetBudgetResponse,
  GetIncomeExpenseHistoryResponse,
  PutExpenseArgs,
  PutIncomeArgs,
} from '../api/accountHistory.type';

export const ACCOUNT_QUERY_KEY = {
  GET_BUDGET: ['money-tracker', 'budget'],
  GET_INCOME_EXPENSE_HISTORY: ['money-tracker', 'income-expense'],
  GET_INCOME_EXPENSE_HISTORY_DETAIL: (historyId: string) => [
    'money-tracker',
    'income-expense',
    historyId,
  ],
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

export const usePutExpense = (
  props?: UseMutationOptions<any, Error, PutExpenseArgs>,
): UseMutationResult<any, Error, PutExpenseArgs> => {
  return useMutation({
    mutationFn: putExpense,
    ...props,
  });
};

export const usePutIncome = (
  props?: UseMutationOptions<any, Error, PutIncomeArgs>,
): UseMutationResult<any, Error, PutIncomeArgs> => {
  return useMutation({
    mutationFn: putIncome,
    ...props,
  });
};

export const useDeleteExpense = (
  props?: UseMutationOptions<any, Error, string>,
): UseMutationResult<any, Error, string> => {
  return useMutation({
    mutationFn: deleteExpense,
    ...props,
  });
};

export const useDeleteIncome = (
  props?: UseMutationOptions<any, Error, string>,
): UseMutationResult<any, Error, string> => {
  return useMutation({
    mutationFn: deleteIncome,
    ...props,
  });
};
