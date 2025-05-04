import Input from '@/src/app/components/Input/Input';
import RadioGroup from '@/src/app/components/RadioGroup/RadioGroup';
import Field from '@/src/app/components/Field/Field';
import { Flex, Stack, Text } from '@chakra-ui/react';

const 성별_Options = [
  { value: 'MALE', label: '남성' },
  { value: 'FEMALE', label: '여성' },
];

const 고용여부_Options = [
  { value: 'stable', label: '안정적이에요' },
  { value: 'unstable', label: '조금 불안정해요' },
];

const 독립여부_Options = [
  { value: 'dependent', label: '부모님과 함께 살고 있어요' },
  {
    value: 'partially independent',
    label: '독립했어요, 부모님으로부터 일절 지원받지 않아요',
  },
  {
    value: 'fully independent',
    label: '독립했지만 부모님께 일부 도움을 받아요',
  },
];

const 결혼여부_Options = [
  { value: 'married', label: '결혼했어요' },
  { value: 'single', label: '미혼이에요' },
];

const 가족부양여부_Options = [
  { value: 'self supported', label: '제가 부양 중이에요' },
  { value: 'not supported', label: '부양하지 않아요' },
  { value: 'partially supported', label: '일부 부양 중이에요' },
];

const 건강여부_Options = [
  { value: 'healthy', label: '매우 건강해요' },
  { value: 'sick', label: '대체로 건강하지만 지병이 있어요' },
  { value: 'regularly treated', label: '정기적으로 치료 받아요' },
];

function Step1() {
  return (
    <Stack dir="column" width="100%">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          인적 정보를 입력해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          재무진단 및 예측 결과를 확인 할 수 있어요
        </Text>
      </Stack>

      <Stack direction="column" gap="60px">
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Field label="이름" required maxW="200px" gap="9px">
            <Input placeholder="이름을 입력하세요" />
          </Field>

          <Field label="출생연도" required maxW="200px" gap="9px">
            <Input placeholder="출생연도를 입력하세요" />
          </Field>

          <Field label="성별" required maxW="200px" gap="22px">
            <RadioGroup
              options={성별_Options}
              color="main.black_2"
              flexDir="row"
              gap="40px"
            />
          </Field>
        </Flex>

        <Flex justifyContent="space-between" alignItems="center" gap="88px">
          <Field label="직업" required>
            <Input placeholder="직업을 적어주세요" />
          </Field>

          <Field label="연차" required>
            <Input placeholder="연차를 입력하세요 (없으면 0 으로 입력해주세요)" />
          </Field>
        </Flex>

        <Field label="고용 안정 여부" required gap="22px">
          <RadioGroup options={고용여부_Options} />
        </Field>

        <Field label="독립 여부" required gap="22px">
          <RadioGroup options={독립여부_Options} />
        </Field>

        <Field label="결혼 여부" required gap="22px">
          <RadioGroup options={결혼여부_Options} />
        </Field>

        <Field label="가족 부양 여부" required gap="22px">
          <RadioGroup options={가족부양여부_Options} />
        </Field>

        <Field label="건강 여부" required gap="22px">
          <RadioGroup options={건강여부_Options} />
        </Field>
      </Stack>
    </Stack>
  );
}

export default Step1;
