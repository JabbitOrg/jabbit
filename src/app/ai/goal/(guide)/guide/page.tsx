import { Flex, List, Text } from '@chakra-ui/react';

const ROUTINE_GUIDE_CONTENT = {
  title: '📌 이 루틴, 왜 따라야 하나요?',
  description:
    '재무 목표를 더 빠르고 효율적으로 달성하기 위해\n전문가와 AI가 함께 설계한 맞춤 루틴이에요.',
  questions: [
    {
      title: 'Q. 어떻게 만들어졌나요?',
      description:
        '입력한 정보를 모두 반영해 AI가 최적의 루틴을\n설계해요. 당신에게만 딱 알맞는, 초개인화 루틴이에요.',
      list: [
        '월 현금흐름, 자산/부채 등 재무 데이터',
        '재무 목표, 고민, 투자성향 등 비재무 정보',
        '전문가와의 1:1 상담 결과 및 평가',
      ],
    },
    {
      title: 'Q. 이 루틴을 꾸준히 하면?',
      list: [
        '현금흐름 개선으로 투자·저축은 늘고 소비는 안정돼요',
        '시간이 지날수록 자산은 증가하고, 부채는 줄어들어요',
        '재무목표 달성률이 눈에 띄게 올라가요',
        '그 과정에서의 불안과 막막함도 점차 사라질 거예요',
      ],
    },
  ],
};

function RoutineGuidePage() {
  return (
    <Flex flexDir="column" p="20px" gap="32px">
      <Flex flexDir="column" gap="12px">
        <Text textStyle="mobile_h2" color="brand.blue">
          {ROUTINE_GUIDE_CONTENT.title}
        </Text>
        <Text textStyle="mobile_b1_semi" color="font.900">
          {ROUTINE_GUIDE_CONTENT.description}
        </Text>
      </Flex>

      <Flex flexDir="column" gap="16px">
        {ROUTINE_GUIDE_CONTENT.questions.map(({ title, description, list }) => (
          <Flex
            flexDir="column"
            gap="12px"
            key={title}
            bgColor="app_background"
            p="16px"
            borderRadius="16px"
          >
            <Text textStyle="mobile_h3" color="brand.blue">
              {title}
            </Text>
            {description && (
              <Text textStyle="mobile_b2" color="font.800">
                {description}
              </Text>
            )}
            {list.length > 0 && (
              <List.Root flexDir="column" listStylePos="inside">
                {list.map((item, index) => (
                  <List.Item
                    key={index}
                    textStyle="mobile_b2"
                    color="font.800"
                    _marker={{ margin: '0px', color: 'inherit' }}
                  >
                    {item}
                  </List.Item>
                ))}
              </List.Root>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default RoutineGuidePage;
