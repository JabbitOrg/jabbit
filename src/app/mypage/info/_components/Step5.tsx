import {
  Separator,
  Grid,
  Stack,
  Text,
  createListCollection,
} from '@chakra-ui/react';
import Input from '@/src/app/components/Input/Input';
import Field from '@/src/app/components/Field/Field';
import { DropdownSelect } from './Step4';
import {
  FINANCIAL_ASSET_OPTIONS,
  FINANCIAL_DEBT_OPTIONS,
} from '../_constants/financial-info-form';

const assetTypes = createListCollection({
  items: FINANCIAL_ASSET_OPTIONS,
});

const debtTypes = createListCollection({
  items: FINANCIAL_DEBT_OPTIONS,
});

function Step5() {
  return (
    <Stack dir="column" width="100%">
      <Stack dir="column" gap="12px" mb="34px">
        <Text textStyle="lg" fontWeight={600}>
          자산부채를 작성해 주세요
        </Text>
        <Text textStyle="md" color="main.black_3">
          재무관리를 잘해왔는지 진단 및 평가를 받아 볼 수 있어요
        </Text>
      </Stack>

      <Field label="자산" required gap="34px" fontSize="20px" fontWeight={600}>
        <Grid templateColumns="1fr 1fr 2fr" columnGap="20px" rowGap="24px">
          <Field label="자산 유형" gap="9px">
            <DropdownSelect
              options={assetTypes}
              placeholder="카테고리를 선택하세요"
            />
          </Field>
          <Field label="금액" gap="9px">
            <Input placeholder="총 얼마인가요?" />
          </Field>
          <Field label="메모" gap="9px">
            <Input placeholder="어떤 자산인지 설명해주세요" />
          </Field>

          <Field label="자산 유형" gap="9px">
            <DropdownSelect
              options={assetTypes}
              placeholder="카테고리를 선택하세요"
            />
          </Field>
          <Field label="금액" gap="9px">
            <Input placeholder="총 얼마인가요?" />
          </Field>
          <Field label="메모" gap="9px">
            <Input placeholder="어떤 자산인지 설명해주세요" />
          </Field>
        </Grid>
      </Field>

      <Separator my="50px" />

      <Field label="부채" required gap="34px" fontSize="20px" fontWeight={600}>
        <Grid templateColumns="1fr 1fr 2fr" columnGap="20px" rowGap="24px">
          <Field label="부채 유형" gap="9px">
            <DropdownSelect
              options={debtTypes}
              placeholder="카테고리를 선택하세요"
            />
          </Field>
          <Field label="금액" gap="9px">
            <Input placeholder="총 얼마인가요?" />
          </Field>
          <Field label="메모" gap="9px">
            <Input placeholder="어떤 자산인지 설명해주세요" />
          </Field>

          <Field label="종류" gap="9px">
            <DropdownSelect
              options={assetTypes}
              placeholder="카테고리를 선택하세요"
            />
          </Field>
          <Field label="금액" gap="9px">
            <Input placeholder="총 얼마인가요?" />
          </Field>
          <Field label="메모" gap="9px">
            <Input placeholder="어떤 부채인지 설명해주세요 (ex. 대출상품명, 만기일, 이율 등)" />
          </Field>
        </Grid>
      </Field>
    </Stack>
  );
}

export default Step5;
