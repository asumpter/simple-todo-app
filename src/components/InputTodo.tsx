import { FC, useState } from 'react';

interface IInputTodo {
  addTodoProps: (title: string) => void;
}

export const InputTodo: FC<IInputTodo> = ({ addTodoProps }) => {
  const [title, setTitle] = useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  interface IHandleSubmit {
    (e: React.FormEvent<HTMLFormElement>): void;
  }

  const handleSubmit: IHandleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
};
