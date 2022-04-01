import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

import initializers from './initializers';
import createRootReducer from './reducers';

const history = createBrowserHistory();

let store;

export function configureStore(preloadedState) {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(history),
  ].filter(Boolean);

  store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  for (const initializer of initializers) {
    initializer(store);
  }

  return store;
}

export function getHistory() {
  return history;
}

export default function getStore() {
  return store;
}
