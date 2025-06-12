import { ExpenseCategoryKey } from '@/src/app/ai/money-tracker/_ constants/category';
import { apiHandler } from '@/src/client/lib/api/apiHandler';

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

const getBudget = async (): Promise<GetBudgetResponse> => {
  return apiHandler.get('/account-book/budget');
};

export default getBudget;
