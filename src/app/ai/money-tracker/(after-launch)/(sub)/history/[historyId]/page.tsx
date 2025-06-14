import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getIncomeExpenseHistory } from '@/src/client/modules/Account/api/accountHistory.api';
import { ACCOUNT_QUERY_KEY } from '@/src/client/modules/Account/hooks/accountHistory.query';
import AccountHistoryDetail from '@/src/client/modules/Account/AccountHistoryDetail';

interface AccountHistoryDetailPageProps {
  params: Promise<{ historyId: string }>;
}

export default async function AccountHistoryDetailPage({
  params,
}: AccountHistoryDetailPageProps) {
  const { historyId } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ACCOUNT_QUERY_KEY.GET_INCOME_EXPENSE_HISTORY_DETAIL(historyId),
    queryFn: getIncomeExpenseHistory,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AccountHistoryDetail />
    </HydrationBoundary>
  );
}
