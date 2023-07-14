import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// Redux
import { Provider } from "react-redux";
import combineReducers from "./store/index";
import { createStore } from "redux";

import App from "./App";

const store = createStore(combineReducers);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
