import {
  GET_TEXTOS_ALL,
  SUCCES_TEXTOS_ALL,
} from './constants';

export const textosAppRequesting = (token) => ({
  type: GET_TEXTOS_ALL,
  token,
});

export const textosSuccess = (textos) => ({
  type: SUCCES_TEXTOS_ALL,
  textos,
});
