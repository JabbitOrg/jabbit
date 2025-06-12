import { apiHandler } from '@/src/client/lib/api/apiHandler';

const deleteExpense = async (historyId: string) => {
  return apiHandler.delete(`/account-book/history/expense/${historyId}`);
};

export default deleteExpense;
