import { useState } from "react";

import './style.css';

const App9 = () => {
  const [isRed, setIsRed] = useState(false);

  return (
    <>
      <h1 className={isRed ? 'red' : 'blue'}>Heading</h1>
      <button onClick={() => setIsRed(!isRed)}>Toggle Color</button>
    </>
  );
};

export default App9;
