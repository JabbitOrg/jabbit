'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Text, Flex, Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import Image from 'next/image';

function Loading({ message }: { message: string }) {
  const typing = keyframes`
  from { width: 0 }
  to { width: ${message.length}ch }
`;

  const blink = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: black }
`;

  const blinkImage = keyframes`
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
`;
  return (
    <Flex
      align="center"
      gap="8px"
      padding="24px 30px"
      justifyContent="flex-start"
    >
      <Box animation={`${blinkImage} 2s ease-in-out infinite`}>
        <Image
          src="/assets/ico_money.svg"
          alt="돈 아이콘"
          width={24}
          height={24}
          priority={false}
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Text
        textStyle="mobile_b2"
        color="font.800"
        whiteSpace="nowrap"
        overflow="hidden"
        borderRight="1px solid"
        animation={`${typing} 3s steps(${message.length}), ${blink} 1s step-end infinite`}
      >
        {message}
      </Text>
    </Flex>
  );
}

export default function WeeklyFeedbackPage() {
  const router = useRouter();

  const loadingMessage = `피드백을 만들고 있어요...`;
  const [data, setData] = useState<any>(null);

  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          //todo api
          new Promise((resolve) => setTimeout(resolve, 5000)),
        ]);
        // if (response.body.response !== null) {
        //   setData(response.body.response);
        //   setTypingDone(true);
        // }
        setData(response);
        setTypingDone(true);
      } catch (error) {
        console.error('Error fetching guide:', error);
      } finally {
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = async () => {
    router.push('/ai/coach/self-feedback');
  };

  if (!typingDone) return <Loading message={loadingMessage} />;

  return (
    <Box>
      <Box px="20px" rounded="md" mt="16px" pb="80px">
        <Text textStyle="mobile_b1_med" color="main.black_1">
          주간 피드백
          {data}
        </Text>
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
          셀프 피드백 작성하기
        </Text>
      </Button>
    </Box>
  );
}
