import {
  EMAIL_USER_RETO_SEND,
  RETO_USER_ALL,
  RETO_USER_SUCCESS,
} from './constants';

export const emailSendUser = (token) => ({
  type: EMAIL_USER_RETO_SEND,
  token,
});

export const userRetos = (token) => ({
  type: RETO_USER_ALL,
  token,
});

export const userRetoSuccess = (retos) => ({
  type: RETO_USER_SUCCESS,
  retos,
});
