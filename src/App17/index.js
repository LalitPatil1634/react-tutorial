import { useMemo, useState } from "react";

const App17 = () => {
  const [counter, setCounter] = useState(0);

  const value = useMemo(() => {
    return 45 ** 54;
  }, []);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <h1>{value}</h1>
      <div>{counter}</div>
      <button onClick={increaseCounter}>Increase</button>
    </>
  );
};

export default App17;
