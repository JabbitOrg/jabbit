import { apiHandler } from '@/src/client/lib/api/apiHandler';

const deleteIncome = async (historyId: string) => {
  return apiHandler.delete(`/account-book/history/income/${historyId}`);
};

export default deleteIncome;
