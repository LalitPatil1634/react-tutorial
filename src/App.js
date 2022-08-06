import { useState } from 'react';

import "./style.css";
import MyFirstComponent from "./MyFirstComponent";

const firstName = "John";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    const newCount = count + 1;

    setCount(newCount);
  }

  return (
    <>
      <h1 className="red">{firstName}</h1>

      <MyFirstComponent country="India" age="25" />
      <MyFirstComponent country="US" age="40" />

      <br />

      <div>Count: {count}</div>
      <button onClick={increaseCount}>Click Me!</button>
    </>
  );
}

export default App;
