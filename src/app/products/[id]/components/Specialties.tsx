import ConsultingSVG from '@/src/client/assets/consulting.svg';
import InsuranceSVG from '@/src/client/assets/insurance.svg';
import DebtSVG from '@/src/client/assets/debt.svg';
import ExpenditureSVG from '@/src/client/assets/expenditure_management.svg';
import InvestmentSVG from '@/src/client/assets/invest_consulting.svg';
import RealEstateSVG from '@/src/client/assets/real_estate.svg';
import SeedMoneySVG from '@/src/client/assets/seed_money.svg';
import { Flex, Text } from '@chakra-ui/react';

const CATEGORY_ITEMS = [
  {
    title: '종합재무상담',
    image: <ConsultingSVG width="100%" height="100%" />,
  },
  {
    title: '보험진단',
    image: <InsuranceSVG width="100%" height="100%" />,
  },
  {
    title: '부채상환',
    image: <DebtSVG width="100%" height="100%" />,
  },
  {
    title: '투자점검',
    image: <InvestmentSVG width="100%" height="100%" />,
  },
  {
    title: '종잣돈 마련',
    image: <SeedMoneySVG width="100%" height="100%" />,
  },
  {
    title: '지출관리',
    image: <ExpenditureSVG width="100%" height="100%" />,
  },

  {
    title: '부동산',
    image: <RealEstateSVG width="100%" height="100%" />,
  },
];

const Specialties = ({ specialty }: { specialty: string }) => {
  const item = CATEGORY_ITEMS.find((item) => item.title === specialty);

  return (
    <Flex
      gap="14px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        width="80px"
        height="80px"
        justifyContent="center"
        alignItems="center"
      >
        {item?.image}
      </Flex>
      <Text textStyle="md" color="main.black_1">
        {item?.title}
      </Text>
    </Flex>
  );
};

export default Specialties;
