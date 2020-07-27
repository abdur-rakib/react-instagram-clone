import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "firebase";
import { isLoaded } from "react-redux-firebase";

function AuthIsLoaded({ children }) {
  if (isLoaded(auth)) {
    return children;
  } else {
    return "Loading";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <AuthIsLoaded>
      <App />
    </AuthIsLoaded>
  </Provider>,
  document.getElementById("root")
);
