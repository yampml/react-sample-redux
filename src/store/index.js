import { createStore } from "redux";

// 2. Reducer Function
const counterReducer = (state = { counter: 0 }, action) => {
  let counter;
  if (action.type === "increment") {
    counter = state.counter + 1;
  } else if (action.type === "decrement") {
    counter = state.counter - 1;
  } else {
    counter = state.counter;
  }
  console.log(counter);
  return {
    counter
  };
};

// 1. Store
const store = createStore(counterReducer);

export default store;
