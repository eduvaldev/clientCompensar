import {
  EMAIL_USER_RETO_SEND,
  RETO_USER_ALL,
  RETO_USER_SUCCESS,
} from './constants';

const initialState = {
  requesting: false,
  error: '',
  mayorSaludable: null,
  mayorSabio: null,
  mayorFeliz: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_USER_RETO_SEND:
      return action;
    case RETO_USER_ALL:
      return {
        ...state,
        requesting: true,
        error: '',
      };
    case RETO_USER_SUCCESS:
      console.log(action.retos);
      return {
        ...state,
        mayorSaludable: action.retos.retoMayorSaludable,
        mayorSabio: action.retos.retoMayorSabio,
        mayorFeliz: action.retos.retoMayorFeliz,
      };
    default:
      return state;
  }
};

export default reducer;
