import MyButton from '@/app/common/myButton';
import { Flex, Input } from '@chakra-ui/react';

interface FormProps {
  onButtonClick: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ onButtonClick, value, onChange }: FormProps) => {
  // 엔터 누르면 동작 (한글 입력 처리 추가)
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      onButtonClick();
    }
  };

  return (
    <Flex gap={3} w="400px">
      <Input
        placeholder="type your todo"
        onKeyDown={handleEnterPress}
        value={value}
        onChange={onChange}
      />
      <MyButton onClick={onButtonClick} content="Add" />
    </Flex>
  );
};

export default Form;
