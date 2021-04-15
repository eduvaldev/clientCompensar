import { all, fork } from 'redux-saga/effects';
import authSagas from './Auth/sagas';
import videoSagas from './Video/sagas';
import likeUserSagas from './LikeUser/sagas';

function * IndexSagas() {
  yield all([
    fork(authSagas),
    fork(videoSagas),
    fork(likeUserSagas),
  ]);
}

export default IndexSagas;
