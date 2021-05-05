import {
  USER_NOTIFICACIONES_GET,
  USER_NOTIFICACIONES_GET_SUCCESS,
} from './constants';

export const userNotificacionesGet = (token) => ({
  type: USER_NOTIFICACIONES_GET,
  token,
});

export const userNotificacionesSuccess = (notificaciones) => ({
  type: USER_NOTIFICACIONES_GET_SUCCESS,
  notificaciones,
});
