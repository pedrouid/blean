import { combineReducers } from 'redux';
import { loginReducer } from './_login';
import { signupReducer } from './_signup';

export default combineReducers({
  login: loginReducer,
  signup: signupReducer
});
