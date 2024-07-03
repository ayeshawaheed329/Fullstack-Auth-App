/*
    This file configures the Redux store for the application.
*/

import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'store/reducers';
import {thunk} from 'redux-thunk';

const configureStore = (initialState) => {
  const middlewares = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
