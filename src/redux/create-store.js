import { createStore, applyMiddleware, combineReducers } from 'redux';
//thunk middleware allows action creators to return functions
import thunk from 'redux-thunk';
import * as reducers from './reducers';

//store can be initialized with data (optional) from backend (or default)
//structure of data object must match store
export default function(data) {
  var reducer = combineReducers(reducers);
  var finalCreateStore = applyMiddleware(thunk)(createStore);
  var store = finalCreateStore(reducer, data);

  return store;
}