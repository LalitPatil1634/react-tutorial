import { useState } from "react";

const App8 = () => {
  const [isRed, setIsRed] = useState(false);

  const headingStyle = { backgroundColor: isRed ? "red" : "blue" };

  return (
    <>
      <h1 style={headingStyle}>Heading</h1>
      <button onClick={() => setIsRed(!isRed)}>Toggle Color</button>
    </>
  );
};

export default App8;
