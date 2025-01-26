import { Box, Text } from '@chakra-ui/react';
import Todo from '../../type/todo';
import MyButton from '@/app/common/myButton';

interface TodoBoxProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoBox = ({ todo, toggleTodo, deleteTodo }: TodoBoxProps) => {
  return (
    <Box
      background={todo.completed ? 'red.300' : 'green.100'}
      key={todo.id}
      onClick={() => toggleTodo(todo.id)}
      cursor="pointer"
      w="400px"
      p={3}
      borderRadius="md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={3}
    >
      <Text textDecoration={todo.completed ? 'line-through' : 'none'}>
        {todo.content}
      </Text>
      <MyButton onClick={() => deleteTodo(todo.id)} content="del" />
    </Box>
  );
};

export default TodoBox;
