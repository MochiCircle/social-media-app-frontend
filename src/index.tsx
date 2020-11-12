import React from "react";
import ReactDOM from "react-dom";
import LoginReducer from "./reducers/LoginReducer";
import alertReducer from "./reducers/AlertReducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { loadState, saveState } from "./util/sessionStorage";
import { IState } from "./reducers";

const a: any = window;

const composeEnhancer =
  (a["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

export const state = combineReducers<IState>({
  loginState: LoginReducer,
  alertStates: alertReducer,
});

//re-loads the state from the current session
const persistedState = loadState();

//this allows us to create a persistent store that also allows for async disptach calls
const store = createStore(
  state,
  persistedState,
  composeEnhancer(applyMiddleware(thunk))
);

//Every time a dispatch is called this state is stored in the session and then reloaded
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/* Sets context for the app */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
