import {
  ENLACES_LINK_ERROR,
  ENLACES_LINK_REQUESTING,
  ENLACES_LINK_SUCCESS,
  ENLACES_TYPEFORM_REQUESTING,
  ENLACES_TYPEFORM_SUCCESS,
  ENLACES_TYPEFORM_ERROR,
} from './constants';

const initialState = {
  requesting: false,
  success: false,
  error: '',
  enlacesLink: [],
  enlaceTypeForm: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENLACES_LINK_REQUESTING:
      return {
        ...state,
        requesting: true,
        error: '',
        enlacesLink: [],
      };
    case ENLACES_LINK_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: '',
      };
    case ENLACES_LINK_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.error,
      };
    case ENLACES_TYPEFORM_REQUESTING:
      return {
        ...state,
        requesting: true,
        error: '',
        enlaceTypeForm: [],
      };
    case ENLACES_TYPEFORM_SUCCESS: {
      console.log(action.enlaces);
      return {
        ...state,
        requesting: false,
        error: '',
        enlaceTypeForm: action.enlaces,
      };
    };
    case ENLACES_TYPEFORM_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
