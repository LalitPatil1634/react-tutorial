import { useState } from "react";

const App6 = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    const inputNode = event.currentTarget;
    const value = inputNode.value;

    setInputValue(value);
  };

  const addTodo = () => {
    if (inputValue === "") {
      return;
    }

    const newTodos = [...todos, inputValue];

    setTodos(newTodos);
    setInputValue("");
  };

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input value={inputValue} onChange={onInputChange} />
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default App6;
