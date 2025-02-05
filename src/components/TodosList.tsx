import { FC } from 'react';
import { TodoItem } from './TodoItem';

interface ITodoList {
  // TODO update with correct TS model
  todos: any[];
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
}

export const TodosList: FC<ITodoList> = ({
  todos,
  handleChangeProps,
  deleteTodoProps,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </div>
  );
};
