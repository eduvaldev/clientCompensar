import { LOGIN_ERROR, LOGIN_REQUESTING, LOGIN_SUCCESS } from './constants';

const initialState = {
  requesting: false,
  success: false,
  error: '',
  token: '',
  userId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        ...state,
        requesting: true,
        error: '',
        token: '',
      };
    case LOGIN_SUCCESS:
      // review that action.token exists or it is action.payload?
      // eslint-disable-next-line no-case-declarations
      const newState = {
        ...state,
        requesting: false,
        error: '',
      };
      if (action?.payload?.userId) { newState.userId = action.payload.userId; }
      if (action?.payload) { newState.token = action.payload; }
      return newState;
    case LOGIN_ERROR:
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
