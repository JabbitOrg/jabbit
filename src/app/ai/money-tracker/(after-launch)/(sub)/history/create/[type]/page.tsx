import AccountHistoryCreate from '@/src/client/modules/Account/AccountHistoryCreate';
import { TransactionTabType } from '@/src/client/modules/Account/constants/tabMenus';

interface AccountHistoryCreatePageProps {
  params: Promise<{ type: TransactionTabType }>;
}

export default async function AccountHistoryCreatePage({
  params,
}: AccountHistoryCreatePageProps) {
  const { type } = await params;

  return <AccountHistoryCreate type={type} />;
}
