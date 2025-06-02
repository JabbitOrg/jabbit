'use client';

import { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import GuideLinkButton from '@/src/app/ai/_components/GuideLinkButton';
import { GUIDE_BUTTONS } from '@/src/app/ai/_constants/guide';
import BudgetUnset from './_components/BudgetUnset';
import BudgetStatus from './_components/BudgetStatus';

function BudgetPage() {
  const [isBudgetSet, setIsBudgetSet] = useState(false);

  console.log(setIsBudgetSet);

  return (
    <Stack gap="20px" p="20px">
      <GuideLinkButton data={GUIDE_BUTTONS['money-tracker']} />

      {isBudgetSet ? <BudgetUnset /> : <BudgetStatus />}
    </Stack>
  );
}

export default BudgetPage;
