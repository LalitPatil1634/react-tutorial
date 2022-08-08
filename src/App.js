import { useState } from 'react';

import "./style.css";
import MyFirstComponent from "./MyFirstComponent";

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("John");

  function increaseCount() {
    const newCount = count + 1;

    setCount(newCount);
  }

  function changeName() {
    if (firstName === "John") {
      setFirstName("Jane");
    } else {
      setFirstName("John");
    }
  };

  return (
    <>
      <h1 className="red">{firstName}</h1>
      <button onClick={changeName}>Change Name</button>

      <MyFirstComponent country="India" age="25" count={count} />
      <MyFirstComponent country="US" age="40" count={count} />

      <br />

      <div>Count: {count}</div>
      <button onClick={increaseCount}>Increase Count</button>
    </>
  );
}

export default App;
