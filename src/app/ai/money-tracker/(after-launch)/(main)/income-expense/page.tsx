'use client';

import { useRouter } from 'next/navigation';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { useSuspenseQuery } from '@tanstack/react-query';

import PlusSvg from '@/src/client/assets/plus.svg';
import getIncomeExpenseHistory from '@/src/client/lib/api/ai/money-tracker/getIncomExpense';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import TransactionItem from './_components/TransactionItem';

type HistoryItem = {
  historyId: string;
  dateTime: string;
  incomeCategory: string | null;
  expenseCategory: string | null;
  paymentCategory: string | null;
  amount: number;
  memo: string;
};

export type GroupedHistoryEntry = {
  historyId: string;
  dateTime: string;
  type: 'INCOME' | 'EXPENSE';
  category: string;
  paymentCategory: string | null;
  amount: number;
  memo: string;
};

type GroupedHistory = {
  date: string;
  entries: GroupedHistoryEntry[];
};

function formatKoreanDate(dateTime: string): string {
  const date = new Date(dateTime);
  const day = date.getDate();
  const weekday = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(
    date,
  );

  return `${day}일 ${weekday}`;
}

function groupHistoryByDate(historyList: HistoryItem[]): GroupedHistory[] {
  const grouped: Record<string, GroupedHistory['entries']> = {};

  for (const item of historyList) {
    const date = item.dateTime.slice(0, 10);
    const type = item.incomeCategory
      ? 'INCOME'
      : ('EXPENSE' as GroupedHistory['entries'][number]['type']);
    const category = item.incomeCategory ?? item.expenseCategory ?? 'UNKNOWN';

    const entry = {
      historyId: item.historyId,
      dateTime: item.dateTime,
      type,
      category,
      paymentCategory: item.paymentCategory,
      amount: item.amount,
      memo: item.memo,
    };

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push(entry);
  }

  return Object.entries(grouped)
    .map(([date, entries]) => ({
      date,
      entries: entries.sort(
        (a, b) =>
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
      ),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function IncomeExpensePage() {
  const router = useRouter();
  const { data } = useSuspenseQuery({
    queryKey: ['money-tracker', 'income-expense'],
    queryFn: getIncomeExpenseHistory,
  });

  const { dateTime, totalExpense, totalIncome, historyList } = data.body;
  const groupedByDate = groupHistoryByDate(historyList);

  return (
    <Stack gap="24px" p="20px">
      <Stack gap="16px">
        <Text textStyle="mobile_h3">{dateTime}</Text>
        <Flex gap="20px" alignItems="center">
          <Stack
            gap="4px"
            borderRadius="8px"
            bgColor="blue.200"
            p="16px"
            flex={1}
          >
            <Text textStyle="mobile_b2">이번 달 지출</Text>
            <Text textStyle="mobile_h3" color="font.800">
              {totalExpense.toLocaleString()} 원
            </Text>
          </Stack>
          <Stack
            gap="4px"
            borderRadius="8px"
            bgColor="blue.200"
            p="16px"
            flex={1}
          >
            <Text textStyle="mobile_b2">이번 달 수입</Text>
            <Text textStyle="mobile_h3" color="brand.blue">
              {totalIncome.toLocaleString()} 원
            </Text>
          </Stack>
        </Flex>
      </Stack>

      {groupedByDate.map((dailyHistory) => (
        <Stack gap="10px" key={dailyHistory.date}>
          <Text textStyle="mobile_b2">
            {formatKoreanDate(dailyHistory.date)}
          </Text>
          <Stack gap="20px">
            {dailyHistory.entries.map((entry) => (
              <TransactionItem key={entry.historyId} data={entry} />
            ))}
          </Stack>
        </Stack>
      ))}

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

export default IncomeExpensePage;
