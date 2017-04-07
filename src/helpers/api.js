/* eslint camelcase: 0 */
import axios from 'axios';
import { refreshSession } from './utilities';

/**
 * Configuration for api instance
 * @type axios instance
 */
const apiRequest = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    platform: 'web'
  },
  transformResponse: [(data) => {
    refreshSession();
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }]
});

/**
 * @desc validate and login user session
 * @param  {String} [email='']
 * @param  {String} [password='']
 * @return {Promise}
 */
export const apiLogin = (email = '', password = '') =>
  apiRequest.post('/sessions', { email, password });


/**
 * @desc delete authenticated user session
 * @return {Promise}
 */
export const apiLogout = () =>
  apiRequest.delete('/sessions');
