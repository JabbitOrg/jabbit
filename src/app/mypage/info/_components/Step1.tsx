import Input from '@/src/app/components/Input/Input';
import RadioGroup from '@/src/app/components/RadioGroup/RadioGroup';
import Field from '@/src/app/components/Field/Field';
import { Flex, Stack, Text } from '@chakra-ui/react';
import {
  EMPLOYMENT_STATUS_OPTIONS,
  INDEPENDENT_STATUS_OPTIONS,
  GENDER_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  FAMILY_SUPPORT_STATUS_OPTIONS,
  HEALTH_STATUS_OPTIONS,
} from '../_constants/financial-info-form';

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
              options={GENDER_OPTIONS}
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
          <RadioGroup options={EMPLOYMENT_STATUS_OPTIONS} />
        </Field>

        <Field label="독립 여부" required gap="22px">
          <RadioGroup options={INDEPENDENT_STATUS_OPTIONS} />
        </Field>

        <Field label="결혼 여부" required gap="22px">
          <RadioGroup options={MARITAL_STATUS_OPTIONS} />
        </Field>

        <Field label="가족 부양 여부" required gap="22px">
          <RadioGroup options={FAMILY_SUPPORT_STATUS_OPTIONS} />
        </Field>

        <Field label="건강 여부" required gap="22px">
          <RadioGroup options={HEALTH_STATUS_OPTIONS} />
        </Field>
      </Stack>
    </Stack>
  );
}

export default Step1;
