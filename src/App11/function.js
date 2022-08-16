import { useState } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  const increaseCount = () => {
    setCount(count + 1);
  };

  const changeName = () => {
    if (name === "John") {
      setName("Alice");
    } else {
      setName("John");
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>

      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>

      <h1>My age is {props.age}</h1>
    </>
  );
};

export default App;
