import { useReducer, useState } from "react";

const initialState = ["Do something", "Do something else"];

function reducer(state, action) {
  //   if (action.type === "add") {
  //       return [...state, action.payload];
  //   }

  //   if (action.type === "remove") {
  //     return state.filter((todo) => todo !== action.payload);
  //   }

  //   return state;

  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }

    case "remove": {
      return state.filter((todo) => todo !== action.payload);
    }

    default: {
      return state;
    }
  }
}

function App14() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const action = {
      type: "add",
      payload: inputValue,
    };

    dispatch(action);
    setInputValue("");
  };

  const removeTodo = (todo) => {
    const action = {
      type: "remove",
      payload: todo,
    };

    dispatch(action);
  };

  return (
    <>
      <ul>
        {state.map((todo) => (
          <>
            <li key={todo}>{todo}</li>
            <button onClick={() => removeTodo(todo)}>Remove</button>
          </>
        ))}

        <br />

        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </ul>
    </>
  );
}

export default App14;
