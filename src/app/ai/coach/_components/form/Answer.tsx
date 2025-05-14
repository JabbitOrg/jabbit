import { Stack, Text, SimpleGrid, HStack } from '@chakra-ui/react';
import AnswerButton from './AnswerButton';
import AnswerInput from './AnswerInput';
import Region from '../../../../data/region.json';
interface AnswerChoice {
  code: string;
  label: string;
}

interface AnswerProps {
  type: 'choice-full' | 'input-year' | 'input-area' | 'choice-grid';
  answerChoices: AnswerChoice[];
}

function Answer({ type, answerChoices }: AnswerProps) {
  const renderAnswerChoices = () => {
    switch (type) {
      case 'choice-full':
        return answerChoices.map((choice) => (
          <AnswerButton
            key={choice.code}
            isSelected={true}
            onClick={() => true}
          >
            {choice.label}
          </AnswerButton>
        ));

      case 'input-year':
        return (
          <HStack align="center" justify="center" gap="12px">
            <Text textStyle="mobile_b1_semi" color="font.700">
              지금부터
            </Text>
            <AnswerInput></AnswerInput>
            <Text textStyle="mobile_b1_semi" color="font.700">
              년 뒤
            </Text>
          </HStack>
        );

      case 'input-area':
        return (
          <HStack align="center" justify="center" gap="12px">
            <AnswerInput></AnswerInput>
            <Text>평</Text>
          </HStack>
        );

      case 'choice-grid':
        return (
          <SimpleGrid columns={3} gap="8px">
            {Region.SEOUL.map((choice) => (
              <AnswerButton
                key={choice.code}
                isSelected={true}
                onClick={() => true}
              >
                {choice.label}
              </AnswerButton>
            ))}
          </SimpleGrid>
        );

      default:
        return null;
    }
  };

  return (
    <Stack direction="column" gap="12px">
      {renderAnswerChoices()}
    </Stack>
  );
}

export default Answer;
