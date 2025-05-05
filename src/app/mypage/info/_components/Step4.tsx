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
import { FINANCIAL_EXPENSE_OPTIONS } from '../_constants/financial-info-form';

const spendingTypes = createListCollection({
  items: FINANCIAL_EXPENSE_OPTIONS,
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
