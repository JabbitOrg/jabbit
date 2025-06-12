import { IncomeForm } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/income-expense/create/income/page';
import { apiHandler } from '@/src/client/lib/api/apiHandler';

const putIncome = async (historyId: string, income: IncomeForm) => {
  return apiHandler.put(`/account-book/history/income/${historyId}`, income);
};

export default putIncome;
