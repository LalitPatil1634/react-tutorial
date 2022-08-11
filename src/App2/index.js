import { useState } from "react";

import IncBtn from "./IncBtn";
import DisplayCounter from "./DisplayCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DisplayCounter count={count} />
      <IncBtn count={count} setCount={setCount} />
    </>
  );
}

export default App;
