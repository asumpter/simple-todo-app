import { FC, Fragment, useState } from 'react';
import { TodoItem } from './TodoItem';
import { createPortal } from 'react-dom';
import { EditTodoModal } from './EditTodoModal';

interface ITodoList {
  // TODO update with correct TS model
  todos: any[];
  handleCompleted: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  handleUpdateTodo: (id: string, title: string, assignedUser: string) => void;
}

export const TodosList: FC<ITodoList> = ({
  todos,
  handleCompleted,
  deleteTodoProps,
  handleUpdateTodo,
}) => {
  // TODO update type here
  const [showModal, setShowModal] = useState<any>({});
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Fragment key={todo.id}>
            <TodoItem
              todo={todo}
              handleCompleted={handleCompleted}
              deleteTodoProps={deleteTodoProps}
              setShowModal={(id) =>
                setShowModal({
                  // need to make sure we take in the previous state so we don't override the other modals
                  ...showModal,
                  [id]: true,
                })
              }
            />
            {showModal[todo.id] &&
              createPortal(
                <EditTodoModal
                  handleClose={() =>
                    setShowModal({
                      // need to make sure we take in the previous state so we don't override the other modals
                      ...showModal,
                      [todo.id]: !showModal[todo.id],
                    })
                  }
                  currentTodo={todo}
                  updateTodo={(title: string, assignedUser: string) => {
                    handleUpdateTodo(todo.id, title, assignedUser);
                  }}
                />,
                document.body
              )}
          </Fragment>
        );
      })}
    </div>
  );
};
