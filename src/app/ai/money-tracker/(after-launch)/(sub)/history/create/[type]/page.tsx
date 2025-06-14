import AccountHistoryCreate from '@/src/client/modules/Account/AccountHistoryCreate';
import { TransactionTabType } from '@/src/client/modules/Account/constants/tabMenus';

interface AccountHistoryCreatePageProps {
  params: { type: TransactionTabType };
}

export default function AccountHistoryCreatePage({
  params,
}: AccountHistoryCreatePageProps) {
  const type = params.type;

  return <AccountHistoryCreate type={type} />;
}
