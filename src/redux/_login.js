import { apiLoginUser } from '../helpers/api';

// -- Constants ------------------------------------------------------------- //

const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
const LOGIN_UPDATE_EMAIL = 'login/LOGIN_UPDATE_EMAIL';
const LOGIN_UPDATE_PASSWORD = 'login/LOGIN_UPDATE_PASSWORD';

// -- Actions --------------------------------------------------------------- //

export const loginAuth = (email = '', password = '') =>
  (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    apiLoginUser(email, password)
    .then(({ data }) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.account
      });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE });
      console.error(error);
    });
  };

export const loginUpdateEmail = email =>
  ({ type: LOGIN_UPDATE_EMAIL, payload: email });

export const loginUpdatePassword = password =>
  ({ type: LOGIN_UPDATE_PASSWORD, payload: password });

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  account: [],
  email: '',
  password: ''
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case LOGIN_UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_REQUEST:
      return { ...state, fetching: true };
    case LOGIN_SUCCESS:
      return { ...state, fetching: false, account: action.payload };
    case LOGIN_FAILURE:
      return { ...state, fetching: false, account: [] };
    default:
      return state;
  }
};
