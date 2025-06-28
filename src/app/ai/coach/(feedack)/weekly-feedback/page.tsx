'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Text, Box } from '@chakra-ui/react';
import Feedback from '@/src/client/modules/Coach/components/Feedback';
import Loading from '@/src/client/modules/Coach/components/Loading';
import getAiScenario from '@/src/client/lib/api/getAiScenario';

export default function WeeklyFeedbackPage() {
  const router = useRouter();

  const loadingMessage = `피드백을 만들고 있어요...`;
  const [data, setData] = useState<any>(null);

  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response] = await Promise.all([
          getAiScenario('FEEDBACK').then((res) => res.body.response[0]),
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
        // if (response.body.response !== null) {
        //   setData(response.body);
        //   setTypingDone(true);
        // }
        setData(response);
        console.log(response);
        setTypingDone(true);
      } catch (error) {
        console.error('Error fetching guide:', error);
      } finally {
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = async () => {
    router.push('/ai/coach');
  };

  if (!typingDone) return <Loading message={loadingMessage} />;

  return (
    <Box>
      <Box px="20px" rounded="md" mt="16px" pb="80px">
        <Feedback data={data} />
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
          루틴 추가하기
        </Text>
      </Button>
    </Box>
  );
}
