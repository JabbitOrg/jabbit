import { IncomeForm } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/income-expense/create/income/page';
import { apiHandler } from '@/src/client/lib/api/apiHandler';

const postIncome = async (income: IncomeForm) => {
  return apiHandler.post(`/account-book/history/income`, income);
};

export default postIncome;
