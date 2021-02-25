import axios from 'axios';
import { history } from '../store';

export const createNewUser = ({email, password}) => dispatch => {
  dispatch({
    type: 'CREATE_USER_LOADING',
    payload: true
  });

  return axios.post(`${process.env.REACT_APP_SOCKET_IO_URL}/auth/sign-up`, {
    email,
    password
  })
  .then(res => {
      dispatch({
        type: 'CREATE_USER_SUCCESS',
        payload: true
      });
      history.push('/confirm-email');
      console.log('createNewUser success:', res);
  })
  .catch(err => {
      dispatch({
        type: 'CREATE_USER_ERROR',
        payload: true
      });
      console.log('createNewUser error:', err);
   });
}

export const logInUser = ({email, password}) => dispatch => {
  dispatch({
    type: 'LOGIN_USER_LOADING',
    payload: true
  });
  return axios.post(`${process.env.REACT_APP_SOCKET_IO_URL}/auth/login`, {
    email,
    password
  })
  .then(res => {
    dispatch({
      type: 'LOGIN_USER_SUCCESS',
      payload: res.user
    });
    history.push('/chat');
  })
  .catch(err => {
    dispatch({
      type: 'LOGIN_USER_ERROR',
      payload: 'Email or password is invalid'
    });
   });
}
