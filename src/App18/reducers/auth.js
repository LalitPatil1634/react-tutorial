const auth = (oldState = false, action) => {
  if (action.type === "LOGIN") {
    return true;
  }

  if (action.type === "LOGOUT") {
    return false;
  }

  return oldState;
};

export default auth;
