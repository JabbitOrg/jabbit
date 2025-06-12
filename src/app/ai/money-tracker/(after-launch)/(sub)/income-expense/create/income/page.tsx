'use client';

import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Box,
  Button,
  createListCollection,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';

import Modal from '@/src/app/common/Modal/Modal';
import Input from '@/src/app/components/Input/Input';
import Select from '@/src/app/components/Select/Select';
import Textarea from '@/src/app/components/Textarea/Textarea';

import {
  INCOME_CATEGORY_MAP,
  IncomeCategory,
} from '@/src/app/ai/money-tracker/_ constants/category';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import { typedObjectEntries } from '@/src/client/utils/type';
import postIncome from '@/src/client/lib/api/ai/money-tracker/postIncome';

import {
  formatNumberWithCommas,
  unformatNumber,
} from '../../../budget/setting/page';

export const IncomeFormSchema = z.object({
  dateTime: z.string(),
  amount: z.number(),
  category: z.nativeEnum(IncomeCategory),
  memo: z.string().optional(),
});

export type IncomeForm = z.infer<typeof IncomeFormSchema>;

function getCurrentLocalDateTimeString(date: string): string {
  const dateTime = new Date(date);
  const time = new Date();

  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

export const useIncomeForm = ({
  defaultValues,
}: {
  defaultValues?: IncomeForm;
}) => {
  return useForm<IncomeForm>({
    resolver: zodResolver(IncomeFormSchema),
    mode: 'onChange',
    defaultValues: {
      dateTime: new Date().toISOString().split('T')[0],
      ...defaultValues,
    },
  });
};

export const incomeCategoryOptions = typedObjectEntries(
  INCOME_CATEGORY_MAP,
).map(([key, item]) => ({
  label: `${item.icon} ${item.name}`,
  value: key as IncomeCategory,
}));

function IncomeCreatePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { control, getValues, register, watch } = useIncomeForm({});
  const { mutate: postIncomeMutate } = useMutation({
    mutationFn: postIncome,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['money-tracker', 'income-expense'],
      });
      router.push(IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_INCOME_EXPENSE']);
    },
    onError: () => {
      alert('수입 내역 저장에 실패했습니다.');
    },
  });

  const handleSubmit = () => {
    const { dateTime, ...value } = getValues();
    const body = {
      ...value,
      dateTime: getCurrentLocalDateTimeString(dateTime),
    };

    postIncomeMutate(body);
  };

  const dateTime = watch('dateTime');
  const amount = watch('amount');
  const category = watch('category');

  return (
    <Fragment>
      <form>
        <Box p="20px">
          <Stack gap="20px">
            <Stack gap="8px">
              <Text textStyle="mobile_b2">날짜</Text>
              <Input
                placeholder="날짜를 선택해주세요"
                bgColor="blue.100"
                textStyle="mobile_b2"
                _placeholder={{ color: 'font.600' }}
                borderColor="font.400"
                type="date"
                {...register('dateTime')}
              />
            </Stack>
            <Stack gap="8px">
              <Text textStyle="mobile_b2">금액</Text>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    value={formatNumberWithCommas(field.value ?? '')}
                    onChange={(e) => {
                      const raw = unformatNumber(e.target.value);
                      const num = Number(raw);
                      if (!isNaN(num)) field.onChange(num);
                    }}
                    placeholder="금액을 입력해주세요"
                    _placeholder={{ color: 'font.600' }}
                    textStyle="mobile_b2"
                    bgColor="blue.100"
                    borderColor="font.400"
                    h="auto"
                    px="16px"
                    py="14px"
                  />
                )}
              />
            </Stack>
            <Stack gap="8px">
              <Text textStyle="mobile_b2">카테고리</Text>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    collection={createListCollection({
                      items: incomeCategoryOptions,
                    })}
                    placeholder="카테고리를 선택해주세요"
                    name={field.name}
                    onValueChange={({ value }) =>
                      field.onChange(value[0] as IncomeCategory)
                    }
                    onInteractOutside={() => field.onBlur()}
                  />
                )}
              />
            </Stack>
            <Stack gap="8px">
              <Text textStyle="mobile_b2">메모</Text>
              <Textarea
                placeholder="메모를 입력해주세요"
                bgColor="blue.100"
                textStyle="mobile_b2"
                _placeholder={{ color: 'font.600' }}
                borderColor="font.400"
                resize="none"
                {...register('memo')}
              />
            </Stack>
          </Stack>

          <Flex
            position="fixed"
            bottom="18px"
            left="0"
            right="0"
            py="20px"
            zIndex="100"
            justifyContent="center"
          >
            <Button
              bgColor="brand.blue"
              borderRadius="14px"
              w="calc(100% - 40px)"
              h="62px"
              disabled={!amount || !category || !dateTime}
              onClick={() => setIsModalOpen(true)}
            >
              저장하기
            </Button>
          </Flex>
        </Box>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleSubmit}
        content="수입 내역을 저장할까요?"
        confirmText="확인"
        cancelText="취소"
      />
    </Fragment>
  );
}

export default IncomeCreatePage;
