// 공용 컴포넌트 예시를 위한 버튼 컴포넌트입니다.
// 실제로 개발에서 사용할 때에는 그냥 chakra ui 버튼을 사용할 것 같습니다.

import { Button } from '@chakra-ui/react';

interface MyButtonProps {
  onClick: () => void;
  content: any;
}

const MyButton = ({ onClick, content }: MyButtonProps) => {
  return <Button onClick={onClick}>{content}</Button>;
};

export default MyButton;
