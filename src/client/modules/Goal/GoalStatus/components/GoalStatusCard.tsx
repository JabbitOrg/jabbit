import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import ProgressBar from '@/src/app/ai/coach/_components/form/ProgressBar';
import { GoalStatus } from '../GoalStatus';

interface GoalStatusCardProps {
  data: GoalStatus;
}

function GoalStatusCard({ data }: GoalStatusCardProps) {
  const { title, description, goal, current } = data;

  const isCurrentUnset = current === null;
  const progress = !isCurrentUnset ? (current / goal) * 100 : 0;

  return (
    <Stack gap="16px" p="20px" bgColor="app_background" borderRadius="16px">
      <Stack gap="4px">
        <Text textStyle="mobile_cap" color="blue_gray.400">
          {title}
        </Text>
        <Text textStyle="mobile_h3">{description}</Text>
      </Stack>
      <Stack gap="8px">
        <Flex alignItems="flex-end" justifyContent="space-between">
          <Text textStyle="mobile_cap">달성률</Text>
          <Text color="brand.blue" textStyle="mobile_h3">
            {progress.toFixed(1)}%
          </Text>
        </Flex>
        <ProgressBar
          progress={16.7}
          height="16px"
          backgroundColor="blue_gray.200"
        />
      </Stack>
      <Stack gap="8px" textStyle="mobile_b1_semi">
        <Flex alignItems="center" justifyContent="space-between">
          <Text color="blue_gray.400">목표</Text>
          <Text>{goal.toLocaleString()}원</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text color="blue_gray.400">현재</Text>
          <Text color={isCurrentUnset ? 'font.required' : 'brand.blue'}>
            {isCurrentUnset ? '???' : current.toLocaleString()}원
          </Text>
        </Flex>
      </Stack>
      {isCurrentUnset && (
        <Button
          w="100%"
          textStyle="mobile_b1_med"
          px="20px"
          py="12px"
          bgColor="brand.blue"
          color="brand.white"
          borderRadius="8px"
          h="46px"
          mt="6px"
        >
          <Text>나의 자산 연동하기</Text>
        </Button>
      )}
    </Stack>
  );
}

export default GoalStatusCard;
