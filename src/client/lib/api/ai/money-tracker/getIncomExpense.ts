import {
  ExpenseCategoryKey,
  IncomeCategoryKey,
  PaymentMethodKey,
} from '@/src/app/ai/money-tracker/_ constants/category';
import { apiHandler } from '@/src/client/lib/api/apiHandler';

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

const getIncomeExpenseHistory =
  async (): Promise<GetIncomeExpenseHistoryResponse> => {
    return apiHandler.get('/account-book/history');
  };

export default getIncomeExpenseHistory;
