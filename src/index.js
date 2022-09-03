import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App18 from "./App18";

import rootReducer from "./App18/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App18 />
    </BrowserRouter>
  </Provider>
);
