'use client';

import { Fragment, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import {
  Box,
  Button,
  createListCollection,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import Modal from '@/src/app/common/Modal/Modal';
import Input from '@/src/app/components/Input/Input';
import Select from '@/src/app/components/Select/Select';
import Textarea from '@/src/app/components/Textarea/Textarea';

import Header from '@/src/app/ai/_components/Header';
import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import getIncomeExpenseHistory from '@/src/client/lib/api/ai/money-tracker/getIncomExpense';
import deleteIncome from '@/src/client/lib/api/ai/money-tracker/deleteIncome';
import putIncome from '@/src/client/lib/api/ai/money-tracker/putIncome';

import {
  formatNumberWithCommas,
  unformatNumber,
} from '../../../budget/setting/page';
import {
  incomeCategoryOptions,
  IncomeForm,
  useIncomeForm,
} from '../../create/income/page';
import { getCurrentLocalDateTimeString } from '../../create/expense/page';

function IncomeEditPage() {
  const router = useRouter();
  const { historyId } = useParams();
  const queryClient = useQueryClient();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { data: incomeData } = useSuspenseQuery({
    queryKey: ['money-tracker', 'income-expense'],
    queryFn: getIncomeExpenseHistory,
    select: (data) => {
      const income = data.body.historyList.find(
        (item) => item.historyId === historyId,
      );

      return income;
    },
  });

  const { mutate: deleteIncomeMutate } = useMutation({
    mutationFn: deleteIncome,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['money-tracker', 'income-expense'],
      });
      router.push(IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_INCOME_EXPENSE']);
    },
    onError: () => {
      alert('수입 내역 삭제에 실패했습니다.');
    },
  });

  const { mutate: putIncomeMutate } = useMutation({
    mutationFn: (income: IncomeForm) => putIncome(historyId as string, income),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['money-tracker', 'income-expense'],
      });
      router.push(IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_INCOME_EXPENSE']);
    },
    onError: () => {
      alert('수입 내역 수정에 실패했습니다.');
    },
  });

  const { register, control, getValues, watch } = useIncomeForm({
    defaultValues: {
      dateTime: incomeData?.dateTime.split('T')[0],
      category: incomeData?.incomeCategory ?? '',
      amount: incomeData?.amount,
      memo: incomeData?.memo,
    } as unknown as IncomeForm,
  });

  const handleDelete = () => {
    deleteIncomeMutate(historyId as string);
  };

  const handleEdit = () => {
    const { dateTime, ...value } = getValues();
    const body = {
      ...value,
      dateTime: getCurrentLocalDateTimeString(dateTime),
    };

    putIncomeMutate(body);
  };

  const amount = watch('amount');
  const category = watch('category');
  const dateTime = watch('dateTime');

  return (
    <Fragment>
      <Header title="내역 수정" hasPrev>
        <Button
          type="submit"
          variant="plain"
          color="font.required"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          삭제
        </Button>
      </Header>

      <form>
        <Box p="20px" pt="68px">
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
                    value={[field.value]}
                    onValueChange={({ value }) => field.onChange(value[0])}
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
              onClick={() => setIsEditModalOpen(true)}
            >
              수정하기
            </Button>
          </Flex>
        </Box>
      </form>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        content="내역을 삭제할까요?"
        confirmText="삭제"
        cancelText="취소"
        customStyle={{
          confirmButton: {
            bgColor: 'font.required',
          },
        }}
      />
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onConfirm={handleEdit}
        content="내역을 수정할까요?"
        confirmText="확인"
        cancelText="취소"
      />
    </Fragment>
  );
}

export default IncomeEditPage;
