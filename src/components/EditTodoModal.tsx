import { FC, useState } from 'react';

interface IEditTodoModal {
  handleClose: () => void;
  currentTodo: {
    id: string;
    title: string;
    assignedUser: string;
  };
  updateTodo: (title: string, assignedUser: string) => void;
}

export const EditTodoModal: FC<IEditTodoModal> = ({
  handleClose,
  currentTodo,
  updateTodo,
}) => {
  const [title, setTitle] = useState(currentTodo.title ?? '');
  const [assignedUser, setAssignedUser] = useState(
    currentTodo.assignedUser ?? ''
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTodo(title, assignedUser);
    handleClose();
  };
  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="form-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: `0 auto`,
            gap: 2,
          }}
        >
          <h2>Edit Todo</h2>
          <label>Todo Title</label>
          <input
            type="text"
            className="input-text"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Assigned User</label>
          <select
            name="user"
            value={assignedUser}
            onChange={(e) => setAssignedUser(e.target.value)}
          >
            <option value="" disabled>
              Select User
            </option>
            <option value="joe">Joe</option>
            <option value="sam">Sam</option>
            <option value="bob">Bob</option>
          </select>
          <div style={{ display: 'flex', gap: 1 }}>
            <input type="submit" className="input-submit" value="Submit" />
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </form>
    </div>
  );
};
