import { TodosList } from './TodosList';
import { Header } from './Header';
import { InputTodo } from './InputTodo';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  assignedUser: string;
}

export const TodoContainer = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
      assignedUser: '',
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
      assignedUser: '',
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
      assignedUser: '',
    },
  ]);
  const handleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleUpdateTodo = (
    id: string,
    title: string,
    assignedUser: string
  ) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
          todo.assignedUser = assignedUser;
        }
        return todo;
      })
    );
  };

  const delTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (title: string) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
      assignedUser: '',
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="container" id="todo-container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleCompleted={handleCompleted}
        deleteTodoProps={delTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};
