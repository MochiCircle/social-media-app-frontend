import { applyMiddleware, compose, createStore, Store } from "redux";
import { state } from "./reducers";
import reduxThunk from "redux-thunk";
const a:any  = window;

// if there are devtools installed in chrome, let them be used
//    otherwise use the default ones from redux.
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

export const store: Store<any> = createStore(state,enhancer);