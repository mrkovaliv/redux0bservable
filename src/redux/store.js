import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootEpic from "./rootEpic";
import staticReducers from "./staticReducers";

const enhancers = [];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const createReducer = (asyncReducers = {}) => {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
};

const configureStore = (initialState = {}) => {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    createReducer(),
    initialState,
    compose(applyMiddleware(epicMiddleware), ...enhancers)
  );

  store.staticReducers = staticReducers;
  store.asyncReducers = {};

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
