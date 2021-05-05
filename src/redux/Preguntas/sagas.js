import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  QUESTIONS_USERS__REQUESTING,
  //QUESTIONS_USERS__SUCCESS,
} from './constants';
import {
  preguntasUserSuccess,
} from './actions';

//const url = 'https://adulto-mayor-api.innovacioncompensar.click';
const url = 'http://localhost:3000';
// const url = process.env.REACT_APP_API_URL;
//const url = 'https://compensar.scriptf.com';

const preguntasUrl = `${url}/api/pregunta`;

const preguntasApi = (token) => {
  return fetch(preguntasUrl, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.code === 200) {
        return json.data.data;
      }
      throw json.data;

    }).catch((error) => {
      console.log(error);
      throw error;
    });
};

function * preguntaFlow(action) {
  try {
    const { token } = action;
    const preguntas = yield call(preguntasApi, token);
    yield put(preguntasUserSuccess(preguntas));
  } catch (error) {
    console.log(error);
    //yield put(videoWhatsAppError(error));
  }
}

function * preguntasWatcher() {
  yield all([
    takeEvery(QUESTIONS_USERS__REQUESTING, preguntaFlow),
  ]);
}

export default preguntasWatcher;
