import { Flex } from '@chakra-ui/react';
import ConsultationCard from '../components/ConsultationCard';

const consultatioinMockProps = {
  date: '2020.13.22',
  title: 'testtest',
  description: 'eeeee',
  consultant: 'qwepppooe',
  completed: false,
};

const ConsultationHistory = () => {
  return (
    <Flex flexDirection="column" gap="64px" w="100%">
      <ConsultationCard {...consultatioinMockProps} />
    </Flex>
  );
};

export default ConsultationHistory;
