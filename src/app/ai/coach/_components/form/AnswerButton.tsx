import { Button } from '@chakra-ui/react';

function AnswerButton({
  isSelected,
  children,
  onClick,
}: {
  isSelected: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      borderRadius="10px"
      height="60px"
      colorScheme={isSelected ? 'blue' : 'gray'}
      variant={isSelected ? 'solid' : 'outline'}
      color={isSelected ? 'gray.700' : 'gray.700'}
      backgroundColor={isSelected ? 'white' : 'white'}
      borderWidth="2px"
      borderColor="gray.100"
      _hover={{
        backgroundColor: isSelected ? 'blue.300' : 'blue.300',
        color: isSelected ? 'brand.blue' : 'gray.800',
        borderWidth: '2px',
        borderColor: 'brand.blue',
      }}
      width="full"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default AnswerButton;
