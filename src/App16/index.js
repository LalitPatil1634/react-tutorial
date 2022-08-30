import { useRef } from "react";
import Child from "./Child";

const App16 = () => {
  const headingRef = useRef(null);
  const childRef = useRef(null);

  const printHeadingRef = () => {
    console.log(headingRef);
  };

  const printChildRef = () => {
    console.log(childRef);
  };

  return (
    <>
      <h1 ref={headingRef}>Heading</h1>
      <button onClick={printHeadingRef}>Print Heading Ref</button>

      <Child ref={childRef} />
      <button onClick={printChildRef}>Print Child Ref</button>
    </>
  );
};

export default App16;
