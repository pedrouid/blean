import { combineReducers } from 'redux';
import { loginReducer } from './_login';

export default combineReducers({
  login: loginReducer
});
