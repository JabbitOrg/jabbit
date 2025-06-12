import { useRouter } from 'next/navigation';
import { Flex, Stack, Text } from '@chakra-ui/react';

import {
  EXPENSE_CATEGORY_MAP,
  INCOME_CATEGORY_MAP,
  PAYMENT_METHOD_MAP,
} from '@/src/app/ai/money-tracker/_ constants/category';
import { GroupedHistoryEntry } from '../page';

interface TransactionItemProps {
  data: GroupedHistoryEntry;
}

function TransactionItem({ data }: TransactionItemProps) {
  const router = useRouter();
  const isIncome = data.type === 'INCOME';
  const dataMap = isIncome
    ? INCOME_CATEGORY_MAP[data.category as keyof typeof INCOME_CATEGORY_MAP]
    : EXPENSE_CATEGORY_MAP[data.category as keyof typeof EXPENSE_CATEGORY_MAP];

  const paymentMethodMap = !isIncome
    ? PAYMENT_METHOD_MAP[
        data.paymentCategory as keyof typeof PAYMENT_METHOD_MAP
      ]
    : undefined;

  const handleClick = () => {
    if (isIncome) {
      router.push(`/ai/money-tracker/income-expense/income/${data.historyId}`);
    } else {
      router.push(`/ai/money-tracker/income-expense/expense/${data.historyId}`);
    }
  };

  return (
    <Flex gap="10px" cursor="pointer" onClick={handleClick}>
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize="38px"
        borderRadius="full"
        bgColor={isIncome ? 'blue.100' : 'yellow.100'}
      >
        <Text textStyle="mobile_h3">{dataMap.icon}</Text>
      </Flex>
      <Flex
        flex={1}
        alignItems="center"
        gap="10px"
        justifyContent="space-between"
      >
        <Stack textStyle="mobile_cap" gap="1px">
          <Text
            fontWeight={700}
          >{`${dataMap.name}${!isIncome ? ` | ${paymentMethodMap?.icon} ${paymentMethodMap?.name}` : ''}`}</Text>
          <Text color="font.600">{data.memo}</Text>
        </Stack>
        <Text
          textStyle="mobile_b1_semi"
          color={isIncome ? 'brand.blue' : 'font.800'}
        >
          {`${isIncome ? '+' : '-'}${data.amount.toLocaleString()} 원`}
        </Text>
      </Flex>
    </Flex>
  );
}

export default TransactionItem;
