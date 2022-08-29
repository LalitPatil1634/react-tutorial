import { useState } from "react";

const Child = () => {
  const [todos, setTodos] = useState(["Some task", "Another task"]);

  const addTodo = () => {
    setTodos('new todo');
  };

  return (
    <div>
      <h1>Child</h1>
      <p>This is the child component</p>

      {todos.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}

      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default Child;
