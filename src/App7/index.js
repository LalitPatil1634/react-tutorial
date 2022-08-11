import { useState, useRef } from "react";

// Same todo example but with uncontrolled input
const App7 = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const inputNode = inputRef.current;
    const inputValue = inputNode.value;

    if (inputValue === "") {
      return;
    }

    const newTodos = [...todos, inputValue];

    setTodos(newTodos);

    inputNode.value = "";
  };

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input ref={inputRef} />
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default App7;
