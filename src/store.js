import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import reduxPromise from 'redux-promise';

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, reduxPromise)
  )
);
