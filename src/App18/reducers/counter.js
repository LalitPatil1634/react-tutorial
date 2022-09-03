const counter = (oldState = 0, action) => {
  if (action.type === "INCREASE") {
    return oldState + action.payload;
  }

  if (action.type === "DECREASE") {
    return oldState - action.payload;
  }

  return oldState;
};

export default counter;
