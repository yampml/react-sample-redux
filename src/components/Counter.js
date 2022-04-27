import { useCallback } from "react";

// 4. hook created by react-redux
import { useSelector } from "react-redux";

// 6. hook created by react-redux
import { useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // 5. When you use the useSelector hook, react-redux will automatically setup
  // a subscription to the redux store for the component.
  // So your component will be updated and receive the latest data when the data in the store are changed.
  // つまり、it manages the subscription for you behind the scene.
  const counter = useSelector((state) => state.counter);

  // 6. Use dispatch, and that's it!
  const dispatch = useDispatch();
  const incrementHandler = useCallback(() => {
    dispatch({ type: "increment" });
  });

  const decrementHandler = useCallback(() => {
    dispatch({ type: "decrement" });
  });

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
