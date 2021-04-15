import { LIKE_USER_ERROR, LIKE_USER_REQUESTING, LIKE_USER_SUCCESS } from './constants';

export const likeUserRequesting = (token, body) => ({
  type: LIKE_USER_REQUESTING,
  token,
  body,
});

export const likeUserSuccess = (videos) => ({
  type: LIKE_USER_SUCCESS,
  videos,
});

export const likeUserError = (error) => ({
  type: LIKE_USER_ERROR,
  error,
});
