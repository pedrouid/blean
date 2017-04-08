import { apiLoginUser } from '../helpers/api';

// -- Constants ------------------------------------------------------------- //

const SIGNUP_REQUEST = 'signup/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE';
const SIGNUP_UPDATE_EMAIL = 'signup/SIGNUP_UPDATE_EMAIL';
const SIGNUP_UPDATE_PASSWORD = 'signup/SIGNUP_UPDATE_PASSWORD';

// -- Actions --------------------------------------------------------------- //

export const signupAuth = (email = '', password = '') =>
  (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    apiLoginUser(email, password)
    .then(({ data }) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.account
      });
    })
    .catch((error) => {
      dispatch({ type: SIGNUP_FAILURE });
      console.error(error);
    });
  };

export const signupUpdateEmail = email =>
  ({ type: SIGNUP_UPDATE_EMAIL, payload: email });

export const signupUpdatePassword = password =>
  ({ type: SIGNUP_UPDATE_PASSWORD, payload: password });

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  account: [],
  email: '',
  password: ''
};

export const signupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case SIGNUP_UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case SIGNUP_REQUEST:
      return { ...state, fetching: true };
    case SIGNUP_SUCCESS:
      return { ...state, fetching: false, account: action.payload };
    case SIGNUP_FAILURE:
      return { ...state, fetching: false, account: [] };
    default:
      return state;
  }
};
