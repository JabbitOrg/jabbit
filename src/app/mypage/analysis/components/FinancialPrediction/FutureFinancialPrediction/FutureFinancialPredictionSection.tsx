import { Box, Flex } from '@chakra-ui/react';
import FutureFinancialPredictionTitle from './FutureFinancialPredictionTitle';
import FutureFinancialPredictionBarChart from './PredictionChart.tsx/FutureFinancialPredictionChart';
import FutureFinancialChangeSummary from './FutureFinancialChangeSummary';

const FutureFinancialPredictionSection = () => {
  return (
    <Flex flexDir="column">
      <FutureFinancialPredictionTitle />
      <Box h="37px" />
      <FutureFinancialPredictionBarChart />
      <Box h="40px" />
      <FutureFinancialChangeSummary />
    </Flex>
  );
};
export default FutureFinancialPredictionSection;
