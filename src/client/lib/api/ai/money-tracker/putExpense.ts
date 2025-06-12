import { ExpenseForm } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/income-expense/create/expense/page';
import { apiHandler } from '@/src/client/lib/api/apiHandler';

const putExpense = async (historyId: string, expense: ExpenseForm) => {
  return apiHandler.put(`/account-book/history/expense/${historyId}`, expense);
};

export default putExpense;
