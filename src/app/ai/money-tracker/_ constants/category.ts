export enum ExpenseCategory {
  food = '식비',
  cafe = '카페/간식',
  convenienceStore = '편의점/마트/잡화',
  alcohol = '술/유흥',
  shopping = '쇼핑',
  hobby = '취미/여가',
  medical = '의료/건강/피트니스',
  living = '생활용품',
  communication = '주거/통신',
  beauty = '미용/패션',
  insurance = '보험/세금/기타금융',
  education = '교육',
  car = '교육/자동차',
  gift = '경조사/회비',
  etc = '기타',
}

export enum IncomeCategory {
  salary = '월급',
  additionalIncome = '부수입',
  allowance = '용돈',
  bonus = '상여',
  financialIncome = '금융소득',
  etc = '기타',
}

export enum PaymentMethod {
  creditCard = '신용카드',
  debitCard = '체크카드',
  cash = '현금',
  etc = '기타',
}

export type IncomeCategoryKey = keyof typeof IncomeCategory;
export type ExpenseCategoryKey = keyof typeof ExpenseCategory;
export type PaymentMethodKey = keyof typeof PaymentMethod;

export const EXPENSE_CATEGORY_MAP: Record<
  ExpenseCategoryKey,
  { name: string; icon: string }
> = {
  food: {
    name: '식비',
    icon: '🍜',
  },
  cafe: {
    name: '카페/간식',
    icon: '☕️',
  },
  convenienceStore: {
    name: '편의점/마트/잡화',
    icon: '🛒',
  },
  alcohol: {
    name: '술/유흥',
    icon: '🍺',
  },
  shopping: {
    name: '쇼핑',
    icon: '🛍️',
  },
  hobby: {
    name: '취미/여가',
    icon: '🕹️',
  },
  medical: {
    name: '의료/건강/피트니스',
    icon: '🧘',
  },
  living: {
    name: '생활용품',
    icon: '🪑',
  },
  communication: {
    name: '주거/통신',
    icon: '🏠',
  },
  beauty: {
    name: '미용/패션',
    icon: '🧥',
  },
  insurance: {
    name: '보험/세금/기타금융',
    icon: '💰',
  },
  education: {
    name: '교육',
    icon: '📙',
  },
  car: {
    name: '교육/자동차',
    icon: '🚖',
  },
  gift: {
    name: '경조사/회비',
    icon: '🎁',
  },
  etc: {
    name: '기타',
    icon: '📋',
  },
} as const;

export const INCOME_CATEGORY_MAP: Record<
  IncomeCategoryKey,
  { name: string; icon: string }
> = {
  salary: {
    name: '월급',
    icon: '💰',
  },
  additionalIncome: {
    name: '부수입',
    icon: '💵',
  },
  allowance: {
    name: '용돈',
    icon: '🤑',
  },
  bonus: {
    name: '상여',
    icon: '🏅',
  },
  financialIncome: {
    name: '금융소득',
    icon: '🏦',
  },
  etc: {
    name: '기타',
    icon: '📋',
  },
} as const;

export const PAYMENT_METHOD_MAP: Record<
  PaymentMethodKey,
  { name: string; icon: string }
> = {
  creditCard: {
    name: '신용카드',
    icon: '💳',
  },
  debitCard: {
    name: '체크카드',
    icon: '🪪',
  },
  cash: {
    name: '현금',
    icon: '💰',
  },
  etc: {
    name: '기타',
    icon: '📋',
  },
} as const;
