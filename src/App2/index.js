import { useCallback, useEffect, useState } from "react";

import IncBtn from "./IncBtn";
import DisplayCounter from "./DisplayCounter";

function App() {
  const [count, setCount] = useState(0);

  const onIncreaseCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    onIncreaseCount();
  }, [onIncreaseCount]);

  return (
    <>
      <DisplayCounter count={count} />
      <IncBtn onIncreaseCount={onIncreaseCount} />
    </>
  );
}

export default App;
