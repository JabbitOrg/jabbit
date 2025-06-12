'use client';

import { Fragment } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Tab from '@/src/app/components/Tab/Tab';

const TRANSACTION_TABS = [
  {
    label: '지출',
    value: 'expense',
    link: '/expense',
    content: <div>지출</div>,
  },
  {
    label: '수입',
    value: 'income',
    link: '/income',
    content: <div>수입</div>,
  },
];

function IncomeExpenseSubLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Fragment>
      <Tab
        menuList={TRANSACTION_TABS}
        onClick={(value) => router.replace(`${pathname}/${value.link}`)}
        position="sticky"
        top="0"
        left="0"
        zIndex="100"
        bgColor="brand.white"
      />
      {children}
    </Fragment>
  );
}

export default IncomeExpenseSubLayout;
