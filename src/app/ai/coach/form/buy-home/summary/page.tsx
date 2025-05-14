'use client';

import { Box, Stack, Text, Button, VStack, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CircularProgress from '../../../_components/form/CircularProgress';

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <Flex
      justify="space-between"
      align="center"
      padding="14px 20px"
      height="60px"
      backgroundColor="app_background"
      borderRadius="10px"
    >
      <Text textStyle="mobile_b1_semi" color="gray.800">
        {label}
      </Text>
      <Text textStyle="mobile_b1_semi" color="gray.900">
        {value}
      </Text>
    </Flex>
  );
}

function SummaryPage() {
  const router = useRouter();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const steps = [
      { value: 10, delay: 200 },
      { value: 20, delay: 400 },
      { value: 60, delay: 800 },
      { value: 100, delay: 1200 },
    ];

    steps.forEach(({ value, delay }) => {
      setTimeout(() => {
        setPercentage(value);
        if (value === 100) {
          setTimeout(() => {
            router.push('/ai/coach/form/buy-home/result');
          }, 500);
        }
      }, delay);
    });
  }, [router]);

  return (
    <Box px="20px" backgroundColor="white" minHeight="100vh" pb="120px">
      <Stack pt="60px" align="center" gap="0">
        <Text textStyle="mobile_h1" textAlign="center">
          회원님을 위한 예상
          <br /> 목표 금액을 계산 중이에요
        </Text>
        <Box mt="70px" display="flex" justifyContent="center">
          <CircularProgress height={175} width={175} percentage={percentage} />
        </Box>
        <Text
          textStyle="mobile_b1_semi"
          color="gray.800"
          textAlign="center"
          mt="30px"
        >
          입력하신 정보를 분석하고 있어요···
        </Text>
        <Box padding="0px 16px" borderRadius="24px" mt="54px" width="100%">
          <VStack align="stretch" gap="4px">
            <ResultRow label="기간" value="10년 뒤" />
            <ResultRow label="결혼계획" value="신혼부부" />
            <ResultRow label="거주지역" value="경기도 화성시" />
            <ResultRow label="거주 형태" value="아파트 (15평)" />
            <ResultRow label="소유 형태" value="자가" />
          </VStack>
        </Box>
      </Stack>
    </Box>
  );
}

export default SummaryPage;
