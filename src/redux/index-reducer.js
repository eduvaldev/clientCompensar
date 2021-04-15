import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import videos from './Video/reducer';
import likeUser from './LikeUser/reducer';

const IndexReducer = combineReducers({
  auth,
  videos,
  likeUser,
});

export default IndexReducer;
