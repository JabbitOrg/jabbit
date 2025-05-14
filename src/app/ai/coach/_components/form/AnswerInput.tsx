import { Input } from '@chakra-ui/react';

function AnswerInput() {
  return (
    <Input
      placeholder="0"
      size="lg"
      textAlign="right"
      height="60px"
      display="inline-block"
      width="full"
      minWidth="223px"
      maxWidth="280px"
      borderRadius="10px"
      padding="0 16px"
      backgroundColor="white"
      borderWidth="2px"
      borderColor="gray.100"
      pl="8px"
      _focus={{
        backgroundColor: 'blue.300',
        color: 'brand.blue',
        borderWidth: '2px',
        borderColor: 'brand.blue',
      }}
    />
  );
}

export default AnswerInput;
