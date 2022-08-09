import { useState, useRef } from 'react';

import "./style.css";
import MyFirstComponent from "./MyFirstComponent";
import PopUp from "./PopUp";

function OldApp() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("John");

  const inputRef = useRef(null);

  function increaseCount() {
    const newCount = count + 1;

    setCount(newCount);

    const inputNode = inputRef.current;
    inputNode.focus();
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

      <br />

      <input ref={inputRef} />

      <PopUp />
    </>
  );
}

export default OldApp;