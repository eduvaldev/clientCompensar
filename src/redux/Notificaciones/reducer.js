import {
  USER_NOTIFICACIONES_GET,
  USER_NOTIFICACIONES_GET_SUCCESS,
} from './constants';

const initialState = {
  requesting: false,
  error: '',
  notBasico: null,
  notRiesgo: null,
  notReto: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_NOTIFICACIONES_GET:
      return {
        ...state,
        requesting: true,
        error: '',
      };
    case USER_NOTIFICACIONES_GET_SUCCESS: {
      console.log(action.notificaciones);
      let basico ;
      let riesgo ;
      action.notificaciones.notfGeneral.map((not) => {
        if (not.notificaciones_id.type === 'PerfilB') {
          basico = not.active;
        } else if (not.notificaciones_id.type === 'PerfilR') {
          riesgo = not.active;
        }
        return null;
      });
      const reto = action.notificaciones.notReto.find((reto) => reto.active);
      return {
        ...state,
        requesting: false,
        notBasico: basico,
        notRiesgo: riesgo,
        notReto: reto,
      };
    }
    default:
      return state;
  }
};

export default reducer;
