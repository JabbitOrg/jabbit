import { formatKoreanCurrency } from '@/src/client/utils/currency';
import { Flex, Span, Text } from '@chakra-ui/react';

const data = [
  {
    name: '소득',
    current: 4016667,
    future: 6874785,
  },
  {
    name: '자산',
    current: 14480000,
    future: 16768616,
  },
  {
    name: '부채',
    current: 12300000,
    future: 7408800,
  },
];

const calculateFinancialChange = (current: number, future: number): string => {
  const change = future - current;

  return change > 0
    ? `[+${formatKoreanCurrency(change)}]`
    : `[${formatKoreanCurrency(change)}]`;
};

const FutureFinancialChangeSummary = () => {
  return (
    <Flex flexDir="column" gap="10px">
      <Text fontSize="16px" fontWeight="medium" color="main.black_1">
        • {data[0].name}은{' '}
        <Span textDecor={'underline'}>
          {calculateFinancialChange(data[0].current, data[0].future)}만큼
        </Span>
        <Span color="main.black_3"> 변했어요</Span>
      </Text>
      <Text fontSize="16px" fontWeight="medium" color="main.black_1">
        • {data[1].name}은{' '}
        <Span textDecor={'underline'}>
          {calculateFinancialChange(data[1].current, data[1].future)}만큼
        </Span>
        <Span color="main.black_3"> 변했어요</Span>
      </Text>
      <Text fontSize="16px" fontWeight="medium" color="main.black_1">
        • {data[2].name}은{' '}
        <Span textDecor={'underline'}>
          {calculateFinancialChange(data[2].current, data[2].future)}만큼
        </Span>
        <Span color="main.black_3"> 변했어요</Span>
      </Text>
    </Flex>
  );
};

export default FutureFinancialChangeSummary;
