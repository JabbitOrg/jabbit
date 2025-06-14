import AccountHistoryCreate from '@/src/client/modules/Account/AccountHistoryCreate';

interface TransactionCreatePageProps {
  params: { type: 'income' | 'expense' };
}

export default function TransactionCreatePage({
  params,
}: TransactionCreatePageProps) {
  const type = params.type;

  return <AccountHistoryCreate type={type} />;
}
