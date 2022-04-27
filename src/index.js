import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
// 3. Wrap Provider around App with a store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
