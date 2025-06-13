import { apiHandler } from '@/src/client/lib/api/apiHandler';
import {
  ExpenseCategoryKey,
  PaymentMethodKey,
  IncomeCategoryKey,
} from '@/src/app/ai/money-tracker/_ constants/category';
import { BudgetFormType } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/budget/setting/page';
import { IncomeForm } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/income-expense/create/income/page';
import { ExpenseForm } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/income-expense/create/expense/page';

interface CategoryBudget {
  budget: number;
  spent: number;
}

interface GetBudgetResponse {
  code: string;
  message: string | null;
  body: {
    totalBudget: number;
    totalSpent: number;
    categoryBudgets: Record<ExpenseCategoryKey, CategoryBudget>;
  };
}

export interface HistoryItem {
  historyId: string;
  dateTime: string;
  incomeCategory: IncomeCategoryKey | null;
  expenseCategory: ExpenseCategoryKey | null;
  paymentCategory: PaymentMethodKey | null;
  amount: number;
  memo: string;
}

interface GetIncomeExpenseHistoryResponse {
  code: string;
  message: string | null;
  body: {
    dateTime: string;
    totalExpense: number;
    totalIncome: number;
    historyList: HistoryItem[];
  };
}

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

export const postIncome = async (income: IncomeForm) => {
  return apiHandler.post(`/account-book/history/income`, income);
};

export const postExpense = async (expense: ExpenseForm) => {
  return apiHandler.post(`/account-book/history/expense`, expense);
};

export const putIncome = async (historyId: string, income: IncomeForm) => {
  return apiHandler.put(`/account-book/history/income/${historyId}`, income);
};

export const putExpense = async (historyId: string, expense: ExpenseForm) => {
  return apiHandler.put(`/account-book/history/expense/${historyId}`, expense);
};

export const deleteIncome = async (historyId: string) => {
  return apiHandler.delete(`/account-book/history/income/${historyId}`);
};

export const deleteExpense = async (historyId: string) => {
  return apiHandler.delete(`/account-book/history/expense/${historyId}`);
};
