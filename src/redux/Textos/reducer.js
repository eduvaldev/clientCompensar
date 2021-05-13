import {
  GET_TEXTOS_ALL,
  SUCCES_TEXTOS_ALL,
} from './constants';

const initialState = {
  requesting: false,
  error: '',
  textos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXTOS_ALL:
      return {
        ...state,
        requesting: true,
        error: '',
      };
    case SUCCES_TEXTOS_ALL:
      return {
        ...state,
        textos: action.textos,
      };
    default:
      return state;
  }
};

export default reducer;
