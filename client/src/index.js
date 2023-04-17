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
// google auth id changed
ReactDOM.render(
  <GoogleOAuthProvider clientId="454263157056-t8al346f7ottreudpq01bcoo06fk2e69.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
