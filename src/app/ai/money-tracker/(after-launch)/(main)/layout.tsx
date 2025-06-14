'use client';

import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { MONEY_TRACKER_TABS } from '@/src/client/modules/Account/constants/tabMenus';
import Tab from '@/src/app/components/Tab/Tab';

function MoneyTrackerLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Fragment>
      <Tab
        menuList={MONEY_TRACKER_TABS}
        onClick={(value) => router.push(value.link)}
        position="sticky"
        top="0"
        left="0"
        zIndex="100"
        bgColor="brand.white"
        pt="32px"
      />
      {children}
    </Fragment>
  );
}

export default MoneyTrackerLayout;
