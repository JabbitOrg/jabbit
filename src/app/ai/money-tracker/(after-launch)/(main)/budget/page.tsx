'use client';

import { useRouter } from 'next/navigation';
import { Flex, Stack } from '@chakra-ui/react';
import { useSuspenseQuery } from '@tanstack/react-query';

import PlusSvg from '@/src/client/assets/plus.svg';
import getBudget from '@/src/client/lib/api/ai/money-tracker/getBudget';
import GuideLinkButton from '@/src/app/ai/_components/GuideLinkButton';
import { GUIDE_BUTTONS } from '@/src/app/ai/_constants/guide';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import BudgetUnset from './_components/BudgetUnset';
import BudgetStatus from './_components/BudgetStatus';

function BudgetPage() {
  const router = useRouter();
  const { data } = useSuspenseQuery({
    queryKey: ['money-tracker', 'budget'],
    queryFn: getBudget,
  });

  const isBudgetSet = data.body.totalBudget !== 0;

  return (
    <Stack gap="20px" p="20px">
      <GuideLinkButton data={GUIDE_BUTTONS['money-tracker']} />

      {isBudgetSet ? <BudgetStatus /> : <BudgetUnset />}

      <Flex
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        position="fixed"
        bottom="88px"
        right="0px"
        onClick={() =>
          router.push(IDENTIFIER_TO_PATH_MAP.MONEY_TRACKER_EXPENSE_CREATE)
        }
      >
        <PlusSvg />
      </Flex>
    </Stack>
  );
}

export default BudgetPage;
