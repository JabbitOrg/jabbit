export const dynamic = 'force-dynamic';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getBudget } from '@/src/client/modules/Account/api/accountHistory.api';
import { ACCOUNT_QUERY_KEY } from '@/src/client/modules/Account/hooks/accountHistory.query';
import AccountBudgetSetting from '@/src/client/modules/Account/AccountBudgetSetting';

export default async function AccountBudgetSettingPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_BUDGET,
    queryFn: getBudget,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AccountBudgetSetting />
    </HydrationBoundary>
  );
}
