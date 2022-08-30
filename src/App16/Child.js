import { forwardRef } from "react";

const Child = (props, ref) => {
  return <h2 ref={ref}>Child</h2>;
};

export default forwardRef(Child);
