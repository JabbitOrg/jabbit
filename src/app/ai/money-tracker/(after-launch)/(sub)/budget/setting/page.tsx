'use client';

import { z } from 'zod';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, Text } from '@chakra-ui/react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import Modal from '@/src/app/common/Modal/Modal';
import Input from '@/src/app/components/Input/Input';
import Header from '@/src/app/ai/_components/Header';

import { typedObjectEntries } from '@/src/client/utils/type';
import getBudget from '@/src/client/lib/api/ai/money-tracker/getBudget';
import postBudget from '@/src/client/lib/api/ai/money-tracker/postBudget';

import { IDENTIFIER_TO_PATH_MAP } from '@/src/app/ai/_constants/routes';
import { EXPENSE_CATEGORY_MAP } from '@/src/app/ai/money-tracker/_ constants/category';

const budgetSchemaShape = Object.fromEntries(
  typedObjectEntries(EXPENSE_CATEGORY_MAP).map(([key]) => [key, z.number()]),
);
export const BudgetSchema = z.object(budgetSchemaShape);

export type BudgetFormType = z.infer<typeof BudgetSchema>;

export const formatNumberWithCommas = (value: string | number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const unformatNumber = (value: string) => value.replace(/[^\d]/g, '');

function BudgetSettingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: ['money-tracker', 'budget'],
    queryFn: getBudget,
  });

  const { mutate: updateBudgetMutate } = useMutation({
    mutationFn: (data: BudgetFormType) => postBudget(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['money-tracker', 'budget'] });
      router.push(IDENTIFIER_TO_PATH_MAP['MONEY_TRACKER_BUDGET']);
    },
  });

  const { control, getValues } = useForm<BudgetFormType>({
    resolver: zodResolver(BudgetSchema),
    defaultValues: typedObjectEntries(EXPENSE_CATEGORY_MAP).reduce(
      (acc, [key]) => {
        const categoryKey = key;
        acc[categoryKey] = data.body.categoryBudgets[key].budget;
        return acc;
      },
      {} as BudgetFormType,
    ),
  });

  const handleSubmit = () => {
    const data = getValues();
    updateBudgetMutate(data);
  };

  return (
    <Fragment>
      <Header title="예산 설정" hasPrev>
        <Button
          type="submit"
          variant="plain"
          color="brand.blue"
          onClick={() => setIsModalOpen(true)}
        >
          저장
        </Button>
      </Header>

      <form>
        <Stack gap="24px" p="20px" pt="68px">
          {Object.entries(EXPENSE_CATEGORY_MAP).map(([key, item]) => (
            <Stack key={key} gap="8px">
              <Text textStyle="mobile_b2">
                {item.icon} {item.name}
              </Text>
              <Controller
                name={key}
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
          ))}
        </Stack>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleSubmit}
        content="예산을 설정할까요?"
        confirmText="확인"
        cancelText="취소"
      />
    </Fragment>
  );
}

export default BudgetSettingPage;
