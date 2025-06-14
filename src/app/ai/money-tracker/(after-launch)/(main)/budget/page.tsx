import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import AccountBudget from '@/src/client/modules/Account/AccountBudget';
import { getBudget } from '@/src/client/modules/Account/api/accountHistory.api';
import { ACCOUNT_QUERY_KEY } from '@/src/client/modules/Account/hooks/accountHistory.query';

export default async function AccountBudgetPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_BUDGET,
    queryFn: getBudget,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AccountBudget />
    </HydrationBoundary>
  );
}
