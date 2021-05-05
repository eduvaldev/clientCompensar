import {
  QUESTIONS_USERS__REQUESTING,
  QUESTIONS_USERS__SUCCESS,
} from './constants';

const initialState = {
  requesting: false,
  error: '',
  PreguntasHs: [],
  PreguntasCp: [],
  PreguntasBs: [],
  PreguntasCm: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_USERS__REQUESTING:
      return {
        ...state,
        requesting: true,
        error: '',
      };
    case QUESTIONS_USERS__SUCCESS:
      console.log(action.preguntas);
      return {
        ...state,
        PreguntasHs: action.preguntas.preguntasHs,
        PreguntasCp: action.preguntas.preguntasCp,
        PreguntasBs: action.preguntas.preguntasBs,
        PreguntasCm: action.preguntas.preguntasCm,
      };
    default:
      return state;
  }
};

export default reducer;
