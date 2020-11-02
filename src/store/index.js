import { createStore } from 'redux';
import rootReducers from '../reducers';

function saveUser(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('localUser', serialisedState);
  } catch (e) {
    console.error(e);
  }
}

function getLocalUser() {
  try {
    const serialisedState = localStorage.getItem('localUser');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

const store = createStore(rootReducers, getLocalUser());

store.subscribe(() => saveUser(store.getState()));

export default store;
