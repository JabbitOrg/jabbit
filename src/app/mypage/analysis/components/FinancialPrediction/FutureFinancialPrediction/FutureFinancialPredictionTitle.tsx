import { Box, Flex, Text } from '@chakra-ui/react';
import InfoTooltipCircleSVG from '@/public/assets/info_tooltip_circle.svg';

const FutureFinancialPredictionTitle = () => {
  return (
    <Flex flexDir="column">
      <Flex flexDir="row" alignItems="center">
        <Text color="main.black_1" fontSize="24px" fontWeight="semibold">
          미래 재무 예측
        </Text>
        <Box w="14px" />
        <InfoTooltipCircleSVG />
        <Box w="4px" />
        <Text color="main.black_5" fontSize="18px" fontWeight="semibold">
          예측 기준?
        </Text>
      </Flex>
      <Box h="12px" />
      <Text color="main.black_3" fontSize="16px" fontWeight="medium">
        현재 현금흐름과 보유한 자산 및 부채로 미래를 예측해 드릴게요
      </Text>
    </Flex>
  );
};

export default FutureFinancialPredictionTitle;
