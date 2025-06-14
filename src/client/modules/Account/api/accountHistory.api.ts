import { apiHandler } from '@/src/client/lib/api/apiHandler';
import { BudgetFormType } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/budget/setting/page';
import {
  ExpenseFormRequestBody,
  IncomeFormRequestBody,
} from '../AccountHistoryCreate/hooks/useTransactionHistoryForm';
import {
  GetBudgetResponse,
  GetIncomeExpenseHistoryResponse,
} from './accountHistory.type';

// 예산
export const getBudget = async (): Promise<GetBudgetResponse> => {
  return apiHandler.get('/account-book/budget');
};

export const postBudget = async (budget: BudgetFormType) => {
  return apiHandler.post(`/account-book/budget`, budget);
};

// 수입/지출 내역
export const getIncomeExpenseHistory =
  async (): Promise<GetIncomeExpenseHistoryResponse> => {
    return apiHandler.get('/account-book/history');
  };

export const postIncome = async (income: IncomeFormRequestBody) => {
  return apiHandler.post(`/account-book/history/income`, income);
};

export const postExpense = async (expense: ExpenseFormRequestBody) => {
  return apiHandler.post(`/account-book/history/expense`, expense);
};

export const putIncome = async (
  historyId: string,
  income: IncomeFormRequestBody,
) => {
  return apiHandler.put(`/account-book/history/income/${historyId}`, income);
};

export const putExpense = async (
  historyId: string,
  expense: ExpenseFormRequestBody,
) => {
  return apiHandler.put(`/account-book/history/expense/${historyId}`, expense);
};

export const deleteIncome = async (historyId: string) => {
  return apiHandler.delete(`/account-book/history/income/${historyId}`);
};

export const deleteExpense = async (historyId: string) => {
  return apiHandler.delete(`/account-book/history/expense/${historyId}`);
};
