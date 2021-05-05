import {
  QUESTIONS_USERS__REQUESTING,
  QUESTIONS_USERS__SUCCESS,
} from './constants';

export const preguntasUserRequesting = (token) => ({
  type: QUESTIONS_USERS__REQUESTING,
  token,
});

export const preguntasUserSuccess = (preguntas) => ({
  type: QUESTIONS_USERS__SUCCESS,
  preguntas,
});
