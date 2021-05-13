import { all, fork } from 'redux-saga/effects';
import authSagas from './Auth/sagas';
import videoSagas from './Video/sagas';
import likeUserSagas from './LikeUser/sagas';
import preguntasUser from './Preguntas/sagas';
import retoUser from './Retos/sagas';
import notUser from './Notificaciones/sagas';
import textos from './Textos/sagas';
import enlaces from './Enlaces/sagas';

function * IndexSagas() {
  yield all([
    fork(authSagas),
    fork(videoSagas),
    fork(likeUserSagas),
    fork(preguntasUser),
    fork(retoUser),
    fork(notUser),
    fork(textos),
    fork(enlaces),
  ]);
}

export default IndexSagas;
