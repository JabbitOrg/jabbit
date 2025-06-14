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

export const groupHistoryByDate = (
  historyList: HistoryItem[],
): GroupedHistory[] => {
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
};
