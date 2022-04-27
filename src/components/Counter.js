import { Component } from "react";
import { useCallback } from "react";

// 4. hook created by react-redux
import { useSelector } from "react-redux";

// 6. hook created by react-redux
import { useDispatch } from "react-redux";

import { connect } from "react-redux";

import classes from "./Counter.module.css";

// 1. Functional Component
// 1.1 use Hooks

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

//===================================================================
/*
// 1. Functional Component
// 1.2 use connect
const Counter = (props) => {
  const incrementHandler = () => {
    props.increment();
  };
  const decrementHandler = () => {
    props.decrement();
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{props.counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/

//===================================================================
/*
// 2. Class-based Component
// connect class-based component to redux store
class Counter extends Component {
  // We can add method in javascript class like this
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

// need to pass State & Dispatch function into class as props
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
