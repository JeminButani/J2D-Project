import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import "./index.css";
import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <GoogleOAuthProvider clientId="695736801750-3shgeebko9p4j5imrtf7o01otq2r72id.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
