import { BudgetFormType } from '@/src/app/ai/money-tracker/(after-launch)/(sub)/budget/setting/page';
import { apiHandler } from '@/src/client/lib/api/apiHandler';

const postBudget = async (budget: BudgetFormType) => {
  return apiHandler.post(`/account-book/budget`, budget);
};

export default postBudget;
