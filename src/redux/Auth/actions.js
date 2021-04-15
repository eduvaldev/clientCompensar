import { LOGIN_ERROR, LOGIN_REQUESTING, LOGIN_SUCCESS } from './constants';

export const loginRequesting = (body) => {
  return ({ type: LOGIN_REQUESTING, body });
};

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});
