import { useState } from "react";
import HelloFunction from "./HelloFunction";

const App = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const [isHelloVisible, setIsHelloVisible] = useState(true);

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

  const toggleHelloVisibility = () => {
    setIsHelloVisible(!isHelloVisible);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>

      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>

      <h1>My age is {props.age}</h1>

      {isHelloVisible && <HelloFunction count={count} />}
      <button onClick={toggleHelloVisibility}>
        Toggle Hello Visibility
      </button>
    </>
  );
};

export default App;
