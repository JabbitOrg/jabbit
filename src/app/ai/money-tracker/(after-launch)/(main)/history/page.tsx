export const dynamic = 'force-dynamic';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import AccountHistory from '@/src/client/modules/Account/AccountHistory';
import { getIncomeExpenseHistory } from '@/src/client/modules/Account/api/accountHistory.api';
import { ACCOUNT_QUERY_KEY } from '@/src/client/modules/Account/hooks/accountHistory.query';

export default async function AccountHistoryPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_INCOME_EXPENSE_HISTORY,
    queryFn: getIncomeExpenseHistory,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AccountHistory />
    </HydrationBoundary>
  );
}
