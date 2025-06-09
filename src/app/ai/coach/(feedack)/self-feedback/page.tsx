'use client';

import { useRouter } from 'next/navigation';
import {
  Button,
  Text,
  Flex,
  Box,
  Checkbox,
  Stack,
  HStack,
  Input,
} from '@chakra-ui/react';
import {
  WEEKLY_FEELING_MAP,
  ACHIEVEMENT_MAP,
  FAILURE_MAP,
  NEXT_WEEK_ROUTINE_MAP,
} from '../_constants/feedbackOptions';

function Item({ title }: Checkbox.RootProps) {
  return (
    <Flex borderRadius="10px" bgColor="app_background" p="12px">
      <Text textStyle="mobile_b1_med">{title}</Text>
    </Flex>
  );
}
function CheckboxItem({ title, ...props }: Checkbox.RootProps) {
  return (
    <Flex borderRadius="10px" bgColor="app_background" p="12px">
      <Checkbox.Root
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="12px"
        variant="solid"
        {...props}
      >
        <Checkbox.Label textStyle="mobile_b1_med">{title}</Checkbox.Label>
        <Checkbox.HiddenInput />
        <Checkbox.Control
          _checked={{
            bgColor: 'brand.blue',
            borderColor: 'brand.blue',
          }}
        />
      </Checkbox.Root>
    </Flex>
  );
}

export default function SelfFeedbackPage() {
  const router = useRouter();

  const handleButtonClick = async () => {};

  return (
    <Box>
      <Box px="20px" rounded="md" mt="16px" pb="80px">
        <Stack gap="12px">
          <HStack>
            <Text textStyle="mobile_h3">1. 이번 주, 어땠나요?</Text>
            <Text color="font.required">*</Text>
          </HStack>
          <Stack gap="12px">
            {Object.values(WEEKLY_FEELING_MAP).map((item, idx) => (
              <Item key={idx} title={item.icon + ' ' + item.name} />
            ))}
          </Stack>
        </Stack>

        <Stack gap="12px" mt="48px">
          <HStack>
            <Text textStyle="mobile_h3">
              2. 잘했다고 생각한 점은 무엇인가요?
            </Text>
            <Text color="font.required">*</Text>
          </HStack>
          <Text textStyle="mobile_b2" color="font.800">
            (복수선택 가능)
          </Text>
          <Stack gap="12px">
            {Object.values(ACHIEVEMENT_MAP).map((item, idx) => (
              <CheckboxItem key={idx} title={item.icon + ' ' + item.name} />
            ))}
          </Stack>
        </Stack>

        <Stack gap="12px" mt="48px">
          <HStack>
            <Text textStyle="mobile_h3">3. 조금 아쉬운 점은 무엇인가요?</Text>
            <Text color="font.required">*</Text>
          </HStack>
          <Text textStyle="mobile_b2" color="font.800">
            (복수선택 가능)
          </Text>
          <Stack gap="12px">
            {Object.values(FAILURE_MAP).map((item, idx) => (
              <CheckboxItem key={idx} title={item.icon + ' ' + item.name} />
            ))}
          </Stack>
        </Stack>

        <Stack gap="12px" mt="48px">
          <HStack>
            <Text textStyle="mobile_h3">
              4. 다음 주엔 어떤 재무 루틴을 실천해보고 싶으세요?
            </Text>
            <Text color="font.required">*</Text>
          </HStack>
          <Text textStyle="mobile_b2" color="font.800">
            (복수선택 가능)
          </Text>
          <Stack gap="12px">
            {Object.values(NEXT_WEEK_ROUTINE_MAP).map((item, idx) => (
              <CheckboxItem key={idx} title={item.icon + ' ' + item.name} />
            ))}
          </Stack>
        </Stack>

        <Stack gap="12px" mt="48px">
          <Text textStyle="mobile_h3">5. 나에게 하는 한마디!</Text>
          <Stack gap="12px">
            <Input
              placeholder="자유롭게 적어보세요!"
              textStyle="mobile_b1_med"
              color="main.black_1"
              minH="120px"
              mb="147px"
              backgroundColor="app_background"
              border="none"
            />
          </Stack>
        </Stack>
      </Box>
      <Button
        position="fixed"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        borderRadius="14px"
        height="60px"
        color="white"
        backgroundColor="brand.blue"
        borderWidth="2px"
        borderColor="gray.100"
        minWidth="335px"
        onClick={handleButtonClick}
      >
        <Text textStyle="mobile_b1_semi" color="white">
          제출하기
        </Text>
      </Button>
    </Box>
  );
}
