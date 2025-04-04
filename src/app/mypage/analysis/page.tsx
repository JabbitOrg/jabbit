import { Flex } from '@chakra-ui/react';
import AnalysisTab from './components/AnalysisTab';
import { ANALYSIS_TAB_DATA } from '@/src/client/constants/MYPAGE';

const Analysis = () => {
  return (
    <Flex flexDirection="column" gap="64px" w="100%">
      <AnalysisTab defaultTab={ANALYSIS_TAB_DATA[0]} />
    </Flex>
  );
};

export default Analysis;
