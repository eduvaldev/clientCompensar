import {
  LIKE_USER_ERROR,
  LIKE_USER_REQUESTING, LIKE_USER_SUCCESS,
} from './constants';

const initialState = {
  requesting: false,
  success: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_USER_REQUESTING:
      return {
        ...state,
        requesting: true,
        error: '',
      };
    case LIKE_USER_ERROR:
      return {
        ...state,
        error: action.error,
        requesting: false,
      };
    case LIKE_USER_SUCCESS:
      return {
        ...state,
        error: '',
        requesting: false,
      };
    default:
      return state;
  }
};

export default reducer;
