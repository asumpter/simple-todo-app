import { FC } from 'react';

interface ITodoItem {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
}

export const TodoItem: FC<ITodoItem> = ({
  todo,
  handleChangeProps,
  deleteTodoProps,
}) => {
  const { completed, id, title } = todo;
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : undefined}>{title}</span>
    </li>
  );
};

const completedStyle = {
  fontStyle: 'italic',
  color: '#d35e0f',
  opacity: 0.4,
  textDecoration: 'line-through',
};
