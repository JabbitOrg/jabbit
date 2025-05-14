'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import ProgressBar from '../../_components/form/ProgressBar';
import { useState } from 'react';
import StepController from '../../_components/form/StepController';
import Step from '../../_components/form/Step';
import Question from '../../_components/form/Question';
import Answer from '../../_components/form/Answer';
import SurveyQuestions from '../../../../data/financial-goal-survey.json';

const totalStep = 12;

function FinancialGoalFormPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStepContent = () => {
    const currentQuestion = SurveyQuestions.find((q) => q.id === currentStep);

    if (!currentQuestion) return null;

    const { title, description, type, answerChoices } = currentQuestion;

    return (
      <Stack gap="200px">
        <Question title={title} description={description} />
        <Answer
          type={
            type as 'input-year' | 'input-area' | 'choice-full' | 'choice-grid'
          }
          answerChoices={answerChoices}
        />
      </Stack>
    );
  };

  return (
    <Box pt="60px">
      <Stack direction="column" gap="36px" px="20px">
        <ProgressBar progress={(currentStep / totalStep) * 100} />
        <Flex alignItems="center" justifyContent="space-between">
          <Step currentStep={currentStep} totalStep={totalStep} />
          <StepController
            currentStep={currentStep}
            totalStep={totalStep}
            onPrevStep={() => setCurrentStep(currentStep - 1)}
            onNextStep={() => setCurrentStep(currentStep + 1)}
          />
        </Flex>

        {/* step content */}
        {renderStepContent()}
      </Stack>
    </Box>
  );
}

export default FinancialGoalFormPage;
