import { useEffect } from "react";

const HelloFunction = (props) => {
  const effectCB = () => {
    console.log("Use Effect");

    return () => {
      console.log("Unmount");
    };
  };

  useEffect(effectCB);

  return (
    <>
      <h1>Hello</h1>
      <h1>{props.count}</h1>
    </>
  );
};

export default HelloFunction;
