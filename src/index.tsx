import React from "react";
import ReactDOM from "react-dom";
import App from "domains/App";
import { store } from "core/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
