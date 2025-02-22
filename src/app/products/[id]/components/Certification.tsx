import { Box, Text } from '@chakra-ui/react';

const Certification = ({
  certification,
  isVerified,
}: {
  certification: string;
  isVerified: boolean;
}) => {
  if (isVerified) {
    return (
      <Box padding="8px 10px" bg="#d1ecc5" borderRadius="7px">
        <Text fontSize="16px" color="#798c71">
          {certification}
        </Text>
      </Box>
    );
  }

  return (
    <Box padding="8px 10px" bg="#e3e3e3" borderRadius="7px">
      <Text fontSize="16px" color="#7d7d7d">
        {certification}
      </Text>
    </Box>
  );
};

export default Certification;
