import { FC } from 'react';

interface ITodoItem {
  todo: {
    id: string;
    title: string;
    completed: boolean;
    assignedUser: string;
  };
  handleCompleted: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  setShowModal: (id: string) => void;
}

export const TodoItem: FC<ITodoItem> = ({
  todo,
  handleCompleted,
  deleteTodoProps,
  setShowModal,
}) => {
  const { completed, id, title } = todo;
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCompleted(id)}
      />
      <span style={completed ? completedStyle : undefined}>{title}</span>
      {todo.assignedUser && (
        <span>
          <span
            style={{
              marginLeft: '10px',
              fontSize: '1.5rem',
              textDecoration: completed ? 'line-through' : 'none',
            }}
          >
            Assigned User: {todo.assignedUser}
          </span>
        </span>
      )}
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      {!completed && <button onClick={() => setShowModal(id)}>Edit</button>}
    </li>
  );
};

const completedStyle = {
  fontStyle: 'italic',
  color: '#d35e0f',
  opacity: 0.4,
  textDecoration: 'line-through',
};
