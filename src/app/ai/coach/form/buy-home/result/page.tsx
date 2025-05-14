'use client';

import { Box, Stack, Text, Button, VStack, Flex } from '@chakra-ui/react';

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <Flex
      justify="space-between"
      align="center"
      padding="14px 20px"
      height="60px"
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

function ResultPage() {
  return (
    <Box px="20px" backgroundColor="white" minHeight="100vh" pb="120px">
      <Stack pt="60px" align="center">
        <Text textStyle="mobile_h1" textAlign="center">
          목표 달성에 필요한
          <br /> 예상 금액이에요
        </Text>

        <Box
          padding="40px 16px"
          borderRadius="24px"
          mt="48px"
          backgroundColor="app_background"
          width="100%"
        >
          <Text
            textStyle="mobile_d1_bold"
            color="brand.blue"
            textAlign="center"
          >
            4억 5천만원
          </Text>

          <VStack align="stretch" gap="0" mt="54px">
            <ResultRow label="기간" value="10년 뒤" />
            <ResultRow label="결혼계획" value="신혼부부" />
            <ResultRow label="거주지역" value="경기도 화성시" />
            <ResultRow label="거주 형태" value="아파트 (15평)" />
            <ResultRow label="소유 형태" value="자가" />
          </VStack>
        </Box>
      </Stack>

      <Button
        position="fixed"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        borderRadius="14px"
        height="60px"
        color="white"
        backgroundColor="brand.blue"
        borderWidth="2px"
        borderColor="gray.100"
        minWidth="335px"
      >
        <Text textStyle="mobile_b1_semi" color="white">
          장기목표로 설정하기
        </Text>
      </Button>
    </Box>
  );
}

export default ResultPage;
