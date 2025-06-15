import {
  ExpenseCategoryKey,
  PaymentMethodKey,
  IncomeCategoryKey,
} from '../constants/category';
import {
  ExpenseFormRequestBody,
  IncomeFormRequestBody,
} from '../hooks/useTransactionHistoryForm';

export interface CategoryBudget {
  budget: number;
  spent: number;
}

export interface GetBudgetResponse {
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

export interface GetAccountBookHistoryResponse {
  code: string;
  message: string | null;
  body: {
    dateTime: string;
    totalExpense: number;
    totalIncome: number;
    historyList: HistoryItem[];
  };
}

export interface PutIncomeArgs {
  historyId: string;
  income: IncomeFormRequestBody;
}

export interface PutExpenseArgs {
  historyId: string;
  expense: ExpenseFormRequestBody;
}
