import { Button, Flex, Text } from '@chakra-ui/react';

interface ConsultationCardProps {
  date: string;
  title: string;
  description: string;
  consultant: string;
  completed: boolean;
}

const ConsultationCard = ({
  date,
  title,
  description,
  consultant,
  completed,
}: ConsultationCardProps) => {
  return (
    <Flex
      w="800px"
      h="144px"
      border="2px solid var(--chakra-colors-main-line)"
      borderRadius="10px"
      padding="20px"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Flex flexDirection="column" gap="12px">
        <Flex flexDirection="column" gap="8px">
          <Text fontSize="12px" fontWeight="400">
            {date}
          </Text>
          <Text fontSize="14px" fontWeight="600">
            {title}
          </Text>
          <Text fontSize="12px" fontWeight="400" color="main.black_3">
            {description}
          </Text>
        </Flex>
        <Text fontSize="12px" fontWeight="400">
          {consultant}
        </Text>
      </Flex>
      <Button
        w="150px"
        h="40px"
        borderRadius="10px"
        bg={completed ? 'primary' : '#d9d9d9'}
        color={completed ? 'main.white_1' : 'main.black_1'}
        fontSize="12px"
        fontWeight="400"
      >
        {completed ? '상담 결과 보기' : '상담 결과 작성 중'}
      </Button>
    </Flex>
  );
};

export default ConsultationCard;
