import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  USER_NOTIFICACIONES_GET,
} from './constants';
import {
  userNotificacionesSuccess,
} from './actions';

const url = 'https://adulto-mayor-api.innovacioncompensar.click';
//const url = 'http://localhost:3000';
// const url = process.env.REACT_APP_API_URL;
//const url = 'https://compensar.scriptf.com';

const notificacionUrl = `${url}/api/notificaciones`;

const notificacionApi = (token) => {
  return fetch(notificacionUrl, {
    method: 'get',
    headers: {
      'Content-type': 'aplication/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.code === 200) {
        return json.data.data;
      }
      throw json.data;
    })
    .catch((error) => {
      throw error;
    });
};

function * notificacionFlow(action) {
  try {
    const { token } = action;
    const allRetos = yield call(notificacionApi, token);
    yield put(userNotificacionesSuccess(allRetos));
  } catch (error) {
    console.log(error);
  }
}

function * RetosWatcher() {
  yield all([
    takeEvery(USER_NOTIFICACIONES_GET, notificacionFlow),
  ]);
}

export default RetosWatcher;
