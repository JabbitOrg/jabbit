'use client';
import { Flex, Text } from '@chakra-ui/react';
import Form from './components/form';
import useTodoStore from '../store/todoStore';
import { useState } from 'react';
import Todo from '../type/todo';
import TodoBox from './components/todoBox';

const TodoPage = () => {
  const [todo, setTodo] = useState('');
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  const handleAddTodo = () => {
    addTodo({
      id: Date.now(),
      content: todo,
      completed: false,
    });
    setTodo('');
  };

  return (
    <Flex
      height="100vh"
      width="100vw"
      flexDirection="column"
      alignItems="center"
      gap={10}
      p={10}
    >
      <Text textStyle="4xl">TODO LIST</Text>
      <Form
        onButtonClick={handleAddTodo}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Flex flexDirection="column" gap={3}>
        {todos.map((todo: Todo) => (
          <TodoBox
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default TodoPage;
