const defaultState = {
  user: {},
  loading: false,
  errorMessage: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case 'LOGIN_USER_ERROR':
      return {
        ...state,
        user: {},
        errorMessage: action.payload,
        loading: false
      }
    default:
      return state
  }
}
