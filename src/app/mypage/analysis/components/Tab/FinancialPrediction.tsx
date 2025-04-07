import { Flex } from '@chakra-ui/react';
import FutureFinancialPredictionSection from '../FinancialPrediction/FutureFinancialPrediction/FutureFinancialPredictionSection';
import GoalAchievementPredictionSection from '../FinancialPrediction/GoalAchievementPredictionSection';
import ConsultingSuggestionSection from '../FinancialPrediction/ConsultingSuggestionSection';

const FinancialPrediction = () => {
  return (
    <Flex flexDir="column" gap="64px">
      <FutureFinancialPredictionSection />
      <GoalAchievementPredictionSection />
      <ConsultingSuggestionSection />
    </Flex>
  );
};

export default FinancialPrediction;
