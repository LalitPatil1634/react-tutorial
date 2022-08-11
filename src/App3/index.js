import { useState } from "react";

const App3 = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decreaseCount = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
};

export default App3;
