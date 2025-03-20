'use client';

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import ReportAccordion from './components/ReportAccordion';
import { parseLastTwoNumberOfYear } from '@/src/client/utils/parser';
import ProfitCards from './components/ProfitCards';
import MissionAccordion from './components/MissionAccordion';

const consultationHistoryMockProps = {
  date: '2020.13.22',
  title: '나의 재무 상태 파악 어쩌고',
  field: '종합재무상담',
  expertName: '백샘이나',
  mainProposals: [
    {
      title:
        '만약, 월 현금 흐름이 정 맞게 나오지 않는다면 대출 상환하고 있는 금액 중 일부를 조절하시길 추천드려요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요',
      description:
        '이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.\n이때에는 금리가 높은 상품은 갚고, 금리가 낮은 상품으로 선택해서 줄여주세요.',
    },
    {
      title:
        '재무 상황을 고려하여 대출을 적절히 조정하는 것이 중요합니다.\n금리가 높은 대출은 우선적으로 상환하고, 저금리 대출을 유지하는 것이 효과적입니다.',
      description:
        '금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.\n금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.\n금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.\n금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.\n금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.\n금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.\n금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.\n금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.\n금리가 높은 대출을 우선적으로 상환하세요.\n금리가 낮은 대출을 유지하면서 현금 흐름을 조정하세요.',
    },
    {
      title:
        '자산을 효율적으로 관리하려면 불필요한 지출을 줄이고 대출 전략을 최적화해야 합니다.\n금리가 높은 대출을 먼저 정리하고, 여유 자금을 확보하세요.',
      description:
        '불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.\n불필요한 지출을 줄이고 대출 전략을 최적화하세요.\n금리가 높은 대출을 먼저 정리하세요.',
    },
  ],
};

const missionAccordionMockProps = [
  {
    title: '체크카드 챌린지 - 변동 지출 30% 줄이기',
    contents: [
      '신용카드 사용을 최소화하고, 체크카드로만 변동 지출(식비, 쇼핑, 취미 등)을 결제하세요.',
      '이번 주 변동 지출을 30% 줄여서 절약한 금액을 계산해보세요.',
    ],
    methods: [
      '이번 주 신용카드 사용을 고정 지출(구독료, 보험료)로 제한하세요.',
      '식비, 쇼핑, 취미 비용을 체크카드로 결제하세요.',
      '주말에 주 동안 아낀 금액을 확인해보세요 -> 목표는 5~10만 원 절약하기.',
      '절약한 금액은 다른 상품 혹은 저축 계좌로 이체하세요.',
    ],
  },
  {
    title: '체크카드 챌린지 - 변동 지출 30% 줄이기',
    contents: [
      '신용카드 사용을 최소화하고, 체크카드로만 변동 지출(식비, 쇼핑, 취미 등)을 결제하세요.',
      '이번 주 변동 지출을 30% 줄여서 절약한 금액을 계산해보세요.',
    ],
    methods: [
      '이번 주 신용카드 사용을 고정 지출(구독료, 보험료)로 제한하세요.',
      '식비, 쇼핑, 취미 비용을 체크카드로 결제하세요.',
      '주말에 주 동안 아낀 금액을 확인해보세요 -> 목표는 5~10만 원 절약하기.',
      '절약한 금액은 다른 상품 혹은 저축 계좌로 이체하세요.',
    ],
  },
  {
    title: '체크카드 챌린지 - 변동 지출 30% 줄이기',
    contents: [
      '신용카드 사용을 최소화하고, 체크카드로만 변동 지출(식비, 쇼핑, 취미 등)을 결제하세요.',
      '이번 주 변동 지출을 30% 줄여서 절약한 금액을 계산해보세요.',
    ],
    methods: [
      '이번 주 신용카드 사용을 고정 지출(구독료, 보험료)로 제한하세요.',
      '식비, 쇼핑, 취미 비용을 체크카드로 결제하세요.',
      '주말에 주 동안 아낀 금액을 확인해보세요 -> 목표는 5~10만 원 절약하기.',
      '절약한 금액은 다른 상품 혹은 저축 계좌로 이체하세요.',
    ],
  },
];

const profitCardsMockProps = {
  profits: {
    today: 22666,
    weekly: 158662,
    monthly: 679980,
    yearly: 8273090,
  },
  profitInfo: {
    title: '재무 목표를 더 빨리 달성할 수 있어요.',
    contents: [
      '1년이면 약 816만 원이 절감되고, 이는 신용대출 원리금 30% 상환 가능한 수준이에요.',
      '5년 후에는 전세자금 5천만 원 목표에 40% 이상 가까워져요.',
    ],
  },
};

const ConsultationReport = () => {
  return (
    <Flex flexDirection="column" gap="54px">
      <Flex flexDirection="column" gap="32px">
        <Text fontSize="24px" fontWeight="600">
          {parseLastTwoNumberOfYear(consultationHistoryMockProps.date)}{' '}
          {consultationHistoryMockProps.field} 결과
        </Text>
        <Flex flexDirection="column" gap="12px">
          <Text fontSize="20px" fontWeight="500">
            {consultationHistoryMockProps.expertName} 전문가님이 제안했어요
          </Text>
          <Text textStyle="sm" color="main.black_3">
            전문가님이 선정한 우선순위 대로 보여드릴게요!
          </Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="64px">
        <Flex flexDirection="column" gap="28px" w="100%">
          <Text fontSize="20px" fontWeight="600">
            핵심제안 {consultationHistoryMockProps.mainProposals.length}가지
            알려드려요
          </Text>
          {consultationHistoryMockProps.mainProposals.map((proposal, index) => (
            <ReportAccordion
              key={index}
              index={index}
              title={proposal.title}
              description={proposal.description}
              isMainProposal={true}
            />
          ))}
        </Flex>
        <Flex flexDirection="column" gap="28px" w="100%">
          <Text fontSize="20px" fontWeight="600">
            추가적인 제안들도 알려드려요
          </Text>
          {consultationHistoryMockProps.mainProposals.map((proposal, index) => (
            <ReportAccordion
              key={index}
              index={index}
              title={proposal.title}
              description={proposal.description}
              isMainProposal={false}
            />
          ))}
        </Flex>
        <Flex flexDirection="column" gap="34px">
          <Text fontSize="20px" fontWeight="600">
            지금 제안들을 실행하면 얼마나 이득일까요?
          </Text>
          <ProfitCards {...profitCardsMockProps} />
        </Flex>
        <Flex flexDirection="column" gap="34px">
          <Text fontSize="20px" fontWeight="600">
            주간 미션을 추천드려요
          </Text>
          {missionAccordionMockProps.map((mission, index) => (
            <MissionAccordion key={index} index={index} {...mission} />
          ))}
        </Flex>
      </Flex>
      <Box margin="54px auto 120px auto" position="relative" flexShrink={0}>
        <Flex
          zIndex="10"
          position="absolute"
          bottom="38px"
          left="53%"
          transform="translateX(-50%)"
          p="6px 12px"
          bg="#f6f7ff"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          _after={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '30%',
            width: '0',
            height: '0',
            border: '7px solid transparent',
            borderTopColor: '#f6f7ff',
            borderBottom: '0',
            marginLeft: '-16px',
            marginBottom: '-7px',
          }}
        >
          <Text
            textStyle="sm"
            fontWeight={600}
            color="#5971b2"
            whiteSpace="nowrap"
          >
            [+NNN,NNN]원 아껴보세요!
          </Text>
        </Flex>
        <Button w="300px" borderRadius="10px" bg="primary" cursor="pointer">
          <Text fontSize="16px"> 미션 리마인드 알림 받기</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default ConsultationReport;
