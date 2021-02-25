
import userReducer from './userReducer';

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  userReducer
});

export default createRootReducer
