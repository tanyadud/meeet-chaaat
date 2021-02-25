import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
// import rootReducers from '../reducers';
import createRootReducer from '../reducers'
export const history = createBrowserHistory()

const store = createStore(
  createRootReducer(history),
  applyMiddleware(thunk)
);



export default store;
