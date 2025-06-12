import { ExpenseForm } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/income-expense/create/expense/page';
import { apiHandler } from '@/src/client/lib/api/apiHandler';

const postExpense = async (expense: ExpenseForm) => {
  return apiHandler.post(`/account-book/history/expense`, expense);
};

export default postExpense;
