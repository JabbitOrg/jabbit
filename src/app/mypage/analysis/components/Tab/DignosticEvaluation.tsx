import { Flex } from '@chakra-ui/react';
import LifeCycleSection from '../LifeCycleSection';
import FinanceRatioSection from '../FinanceRatioSection';

interface DignosticEvaluationProps {
  birthYear: number;
  mainInvestmentStrategies: string[];
  mainFinancialIssues: string[];
  financialGoal: {
    goal: string;
    recommendedGoals: string[];
    advices: string[];
  };
  financialRatios: {
    expense: number;
    insurance: number;
    saving: number;
    investment: number;
    debtRepayment: number;
    retirement: number;
  };
  groupComparison: {
    income: {
      user: number;
      average: number;
    };
    debtRepayment: {
      user: number;
      average: number;
    };
    asset: {
      user: number;
      average: number;
    };
    expense: {
      user: number;
      average: number;
    };
    savingAndInvestment: {
      user: number;
      average: number;
    };
  };
}

const DignosticEvaluation = ({
  birthYear,
  financialGoal,
  financialRatios,
}: DignosticEvaluationProps) => {
  return (
    <Flex flexDirection="column" gap="64px">
      <LifeCycleSection birthYear={birthYear} financialGoal={financialGoal} />
      <FinanceRatioSection financialRatios={financialRatios} birthYear={birthYear} />
    </Flex>
  );
};

export default DignosticEvaluation;
