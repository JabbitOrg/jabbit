import { redirect } from 'next/navigation';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';

function TransactionCreatePage() {
  redirect(IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_INCOME_CREATE']);
}

export default TransactionCreatePage;
