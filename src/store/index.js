// Importe o método applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Importe o redux-thunk
import rootReducer from '../reducers';
const api = 'https://aws.random.cat/meow';

// Aplique o middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
);

export default store;
