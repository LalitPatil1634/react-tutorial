import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./actions/auth";
import { decrement, increment } from "./actions/counter";

const App18 = () => {
  const count = useSelector((state) => state.counter);
  const isAuth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onIncreaseCounter = () => {
    dispatch(increment(15));
  };

  const onDecreaseCounter = () => {
    dispatch(decrement(15));
  };

  const onLogIn = () => {
    dispatch(login());
  };

  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={onIncreaseCounter}>Increase</button>
      <button onClick={onDecreaseCounter}>Decease</button>

      {isAuth ? (
        <div>The user is logged in</div>
      ) : (
        <div>The user is logged out</div>
      )}

      <button onClick={onLogIn}>Log In</button>
      <button onClick={onLogOut}>Log Out</button>
    </>
  );
};

export default App18;
