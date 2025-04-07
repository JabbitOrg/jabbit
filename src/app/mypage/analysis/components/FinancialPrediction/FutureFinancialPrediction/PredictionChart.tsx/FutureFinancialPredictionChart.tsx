import { Flex, Box } from '@chakra-ui/react';
import LegendBox from './LegendBox';
import PredictionChartItem from './PredictionChartItem';

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

const FutureFinancialPredictionChart = () => {
  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.current, item.future)),
  );

  return (
    <Flex
      flexDir="column"
      px="30px"
      pt="30px"
      pb="40px"
      border="2px solid #F2F3F5"
      borderRadius="10px"
    >
      <LegendBox />
      <Box height="52px" />
      <Flex flexDir="column" gap="30px" w="100%" ml="30px">
        {data.map((item) => (
          <PredictionChartItem
            key={item.name}
            maxValue={maxValue}
            current={item.current}
            future={item.future}
            name={item.name}
          />
        ))}
      </Flex>
    </Flex>
  );
};
export default FutureFinancialPredictionChart;
