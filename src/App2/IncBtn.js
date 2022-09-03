import { memo } from "react";

function IncBtn(props) {
  console.log("Render");

  return <button onClick={props.onIncreaseCount}>Increase Counter</button>;
}

export default memo(IncBtn);
