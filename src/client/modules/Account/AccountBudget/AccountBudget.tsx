'use client';

import { Stack } from '@chakra-ui/react';

import GuideLinkButton from '@/src/app/ai/_components/GuideLinkButton';
import { GUIDE_BUTTONS } from '@/src/app/ai/_constants/guide';

import { useGetBudget } from '../hooks/accountHistory.query';
import HistoryAddFloatingButton from '../components/HistoryAddFloatingButton';
import { BudgetUnset, BudgetStatus } from './components';

function AccountBudget() {
  const { data } = useGetBudget();
  const isBudgetSet = data.body.totalBudget !== 0;

  return (
    <Stack gap="20px" p="20px">
      <GuideLinkButton data={GUIDE_BUTTONS['money-tracker']} />

      {isBudgetSet ? <BudgetStatus /> : <BudgetUnset />}

      <HistoryAddFloatingButton />
    </Stack>
  );
}

export default AccountBudget;
