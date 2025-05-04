import { useState } from 'react';
import { Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react';

import Textarea from '@/src/app/components/Textarea/Textarea';
import Field from '@/src/app/components/Field/Field';
import RadioGroup from '@/src/app/components/RadioGroup/RadioGroup';

import ExpenditureManagementSVG from '@/src/client/assets/expenditure_management.svg';
import RealEstateSVG from '@/src/client/assets/real_estate.svg';
import DebtSVG from '@/src/client/assets/debt.svg';
import InvestmentConsultingSVG from '@/src/client/assets/invest_consulting.svg';
import ChildCareSVG from '@/src/client/assets/child_care.svg';
import InsuranceSVG from '@/src/client/assets/insurance.svg';
import SeedMoneySVG from '@/src/client/assets/seed_money.svg';
import ConsultingSVG from '@/src/client/assets/consulting.svg';

const 재무고민_Options = [
  {
    label: '소득 관리 및 지출통제',
    value: '소득 관리 및 지출통제',
    icon: <ExpenditureManagementSVG width="100%" height="100%" />,
  },
  {
    label: '내 집 마련',
    value: '내 집 마련',
    icon: <RealEstateSVG width="100%" height="100%" />,
  },
  {
    label: '부채 관리',
    value: '부채 관리',
    icon: <DebtSVG width="100%" height="100%" />,
  },
  {
    label: '투자 및 자산관리',
    value: '투자 및 자산관리',
    icon: <InvestmentConsultingSVG width="100%" height="100%" />,
  },
  {
    label: '노후/은퇴 준비',
    value: '노후/은퇴 준비',
    icon: <ConsultingSVG width="100%" height="100%" />,
  },
  {
    label: '자녀 교육 및 양육비',
    value: '자녀 교육 및 양육비',
    icon: <ChildCareSVG width="100%" height="100%" />,
  },
  {
    label: '절세',
    value: '절세',
    icon: <InsuranceSVG width="100%" height="100%" />,
  },
  {
    label: '종잣돈 마련',
    value: '종잣돈 마련',
    icon: <SeedMoneySVG width="100%" height="100%" />,
  },
];

const 고용여부_Options = [
  { value: 'now', label: '지금 당장' },
  {
    value: 'within 3months',
    label: '1~3개월 이내',
  },
  {
    value: 'within 1year',
    label: '6개월~1년 이내',
  },
  {
    value: 'within 5year',
    label: '향후 1~5년 이내',
  },
  {
    value: 'not sure',
    label: '아직 잘 모르겠어요',
  },
];

const CategorySelect = () => {
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  const handleSelectItem = (value: string) => {
    if (selectedItem.includes(value)) {
      return setSelectedItem((prev) => prev.filter((item) => item !== value));
    }

    setSelectedItem((prev) => [...prev, value]);
  };

  return (
    <Grid
      columnGap="10px"
      rowGap="20px"
      gridTemplateColumns="repeat(4,1fr)"
      w="100%"
    >
      {재무고민_Options.map((item) => (
        <GridItem key={item.value}>
          <Stack
            dir="column"
            gap="15px"
            border="2px solid"
            borderRadius="10px"
            h="110px"
            p="15px"
            borderColor={
              selectedItem.includes(item.value) ? 'primary' : 'main.line'
            }
            onClick={() => handleSelectItem(item.value)}
          >
            <Flex
              width="43px"
              height="43px"
              justifyContent="center"
              alignItems="center"
              padding={item.value === '자녀 교육 및 양육비' ? '0px' : '6px'}
            >
              {item.icon}
            </Flex>
            <Text textStyle="xs" fontWeight={500} paddingLeft="5px">
              {item.label}
            </Text>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  );
};

function Step3() {
  return (
    <Stack dir="column" width="100%" gap="0">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          재무 고민을 작성해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          공인 재무전문가와 1:1 비대면으로 재무 고민을 해결 할 수 있어요
        </Text>
      </Stack>

      <Stack dir="column" gap="50px">
        <Field
          label="현재 재무고민을 최대 3개 선택해 주세요"
          required
          gap="34px"
        >
          <CategorySelect />
        </Field>

        <Field
          label="전문가와 해결하고 싶은 재무고민 1가지만 선택해 주세요"
          required
          gap="34px"
        >
          <CategorySelect />
        </Field>

        <Field label="고용 안정 여부" required gap="22px">
          <RadioGroup options={고용여부_Options} />
        </Field>

        <Field label="전문가님이 이해할 수 있게 재무고민을 자세히 적어주세요">
          <Textarea
            h="260px"
            placeholder={`작성 예시:
포트폴리오
현재 나의 현금 흐름이 적절한지?
여윳돈이 생긴다면, 어느 항목의 비중을 높이는 것이 좋은지?

투자
현재 시도 중인 적립식 투자 방식에 대한 조언
미국 주식 시장의 전망 및 장기 투자 조언
헤지 자산 설정법
장기 방치 중인 주식의 평단가를 낮춰 빨리 빼는 게 나은지? 계속 두는 것이 나은지?
예수금은 최소한으로 유지하는 것이 좋은지?
개인연금 & IRP 장기 투자처`}
          />
        </Field>
      </Stack>
    </Stack>
  );
}

export default Step3;
