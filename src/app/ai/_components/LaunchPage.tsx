import { Button, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface LaunchPageProps {
  launchData: {
    mainTitle: string;
    contents: {
      title: string;
      description: string;
      image: string;
    }[];
  };
}

function LaunchPage({ launchData }: LaunchPageProps) {
  return (
    <Stack width="100%" px="20px" gap="30px" mt="56px" mb="86px">
      <Text textStyle="mobile_h1" whiteSpace="pre-wrap" textAlign="center">
        {launchData.mainTitle}
      </Text>
      <Stack gap="35px" flexDir="column" alignItems="center">
        {launchData.contents.map((content) => (
          <Stack
            key={content.title}
            flexDir="column"
            alignItems="center"
            bgColor="blue.400"
            borderRadius="20px"
            overflow="hidden"
            w="100%"
            h="406px"
            gap="0px"
          >
            <Text mb="16px" mt="50px" textStyle="mobile_h3">
              {content.title}
            </Text>
            <Text
              mb="32px"
              textStyle="mobile_b2"
              color="font.700"
              whiteSpace="pre-wrap"
              textAlign="center"
            >
              {content.description}
            </Text>
            <Image
              src={content.image}
              alt={content.title}
              width={190}
              height={1000}
            />
          </Stack>
        ))}
      </Stack>

      <Button
        position="absolute"
        bottom="83px"
        mx="20px"
        left="0px"
        right="0px"
        bgColor="brand.blue"
        color="white"
        borderRadius="10px"
        boxShadow="0px 2px 24px 0px rgba(0, 0, 0, 0.20)"
        h="60px"
      >
        출시 알림 받기
      </Button>
    </Stack>
  );
}

export default LaunchPage;
