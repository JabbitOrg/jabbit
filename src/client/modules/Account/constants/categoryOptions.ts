import {
  EXPENSE_CATEGORY_MAP,
  PAYMENT_METHOD_MAP,
  INCOME_CATEGORY_MAP,
} from '@/src/app/ai/money-tracker/_ constants/category';

export const incomeCategoryOptions = Object.entries(INCOME_CATEGORY_MAP).map(
  ([key, item]) => ({
    label: `${item.icon} ${item.name}`,
    value: key,
  }),
);

export const expenseCategoryOptions = Object.entries(EXPENSE_CATEGORY_MAP).map(
  ([key, item]) => ({
    label: `${item.icon} ${item.name}`,
    value: key,
  }),
);

export const paymentMethodOptions = Object.entries(PAYMENT_METHOD_MAP).map(
  ([key, item]) => ({
    label: `${item.icon} ${item.name}`,
    value: key,
  }),
);
