import {
  Separator,
  Stack,
  Text,
  Grid,
  Portal,
  Select,
  createListCollection,
  ListCollection,
} from '@chakra-ui/react';
import Input from '@/src/app/components/Input/Input';
import Field from '@/src/app/components/Field/Field';

const spendingTypes = createListCollection({
  items: [
    { label: '주거 / 관리비', value: '식주거 / 관리비비' },
    { label: '대출 이자', value: '대출 이자' },
    { label: '의료 / 건강 / 보험료', value: '의료 / 건강 / 보험료' },
    { label: '통신비', value: '통신비' },
    { label: '교통비', value: '교통비' },
    { label: '식비', value: '식비' },
    { label: '취미 / 여가', value: '취미 / 여가' },
    { label: '교육 / 운동', value: '교육 / 운동' },
    { label: '카페 / 간식', value: '카페 / 간식' },
    { label: '편의점 / 마트 / 잡화', value: '편의점 / 마트 / 잡화' },
    { label: '술 / 유흥', value: '술 / 유흥' },
    { label: '미용 / 의복', value: '미용 / 의복' },
    { label: '기타', value: '기타' },
  ],
});

export const DropdownSelect = ({
  options,
  placeholder,
}: {
  options: ListCollection<{ label: string; value: string }>;
  placeholder: string;
}) => {
  return (
    <Select.Root collection={options} width="100%">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content w="190px">
            {options.items.map((option) => (
              <Select.Item item={option} key={option.value}>
                {option.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

function Step4() {
  return (
    <Stack dir="column" width="100%">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          현금 흐름을 작성해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          재무관리를 잘해왔는지 진단 및 평가를 받아 볼 수 있어요
        </Text>
      </Stack>

      <Field label="소득" required gap="34px" fontSize="20px" fontWeight={600}>
        <Field label="정기 수입" gap="9px">
          <Input placeholder="월 수입은 얼마인가요?" />
        </Field>
        <Field label="비정기 수입" gap="9px">
          <Input placeholder="비정기 수입은 연간 얼마인가요?" />
        </Field>
        <Field label="메모" gap="9px">
          <Input placeholder="메모를 작성하면 더 정확한 진단이 이뤄져요" />
        </Field>
      </Field>

      <Separator my="50px" />

      <Field label="저축" required gap="34px" fontSize="20px" fontWeight={600}>
        <Field label="정기 저축" gap="9px">
          <Input placeholder="월 저축 금액은 얼마인가요?" />
        </Field>
        <Field label="비정기 저축" gap="9px">
          <Input placeholder="비정기 저축 금액은 연간 얼마인가요?" />
        </Field>
        <Field label="메모" gap="9px">
          <Input placeholder="메모를 작성하면 더 정확한 진단이 이뤄져요" />
        </Field>
      </Field>

      <Separator my="50px" />

      <Field label="투자" required gap="34px" fontSize="20px" fontWeight={600}>
        <Field label="정기 투자" gap="9px">
          <Input placeholder="월 투자 금액은 얼마인가요?" />
        </Field>
        <Field label="비정기 투자" gap="9px">
          <Input placeholder="비정기 투자 금액은 연간 얼마인가요?" />
        </Field>
        <Field label="메모" gap="9px">
          <Input placeholder="메모를 작성하면 더 정확한 진단이 이뤄져요" />
        </Field>
      </Field>

      <Separator my="50px" />

      <Field label="지출" required gap="34px" fontSize="20px" fontWeight={600}>
        <Grid templateColumns="1fr 1fr 2fr" columnGap="20px" rowGap="24px">
          <Field label="지출 종류" gap="9px">
            <DropdownSelect
              options={spendingTypes}
              placeholder="카테고리를 선택하세요"
            />
          </Field>
          <Field label="지출 금액" gap="9px">
            <Input placeholder="월 지출은 얼마인가요?" />
          </Field>
          <Field label="메모" gap="9px">
            <Input placeholder="어떤 목적으로 지출했나요?" />
          </Field>

          <Field label="지출 종류" gap="9px">
            <DropdownSelect
              options={spendingTypes}
              placeholder="카테고리를 선택하세요"
            />
          </Field>
          <Field label="지출 금액" gap="9px">
            <Input placeholder="월 지출은 얼마인가요?" />
          </Field>
          <Field label="메모" gap="9px">
            <Input placeholder="어떤 목적으로 지출했나요?!" />
          </Field>
        </Grid>
      </Field>
    </Stack>
  );
}

export default Step4;
