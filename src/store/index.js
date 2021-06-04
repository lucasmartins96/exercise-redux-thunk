// Importe o método applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Importe o redux-thunk
import rootReducer from '../reducers';
const api = 'https://aws.random.cat/meow';

// Aplique o middleware
const store = createStore(
  rootReducer,
);

export default store;
