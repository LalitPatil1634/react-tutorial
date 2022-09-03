export const increment = (num) => {
  return {
    type: "INCREASE",
    payload: num
  };
};

export const decrement = (num) => {
  return {
    type: "DECREASE",
    payload: num
  };
};
