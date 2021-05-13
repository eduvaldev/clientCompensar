import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_TEXTOS_ALL,
} from './constants';

import {
  textosSuccess,
} from './actions';

const url = 'https://adulto-mayor-api.innovacioncompensar.click';
//const url = 'http://localhost:3000';
// const url = process.env.REACT_APP_API_URL;
//const url = 'https://compensar.scriptf.com';

const textosUrl = `${url}/api/textos`;

const textosApi = (token) => {
  return fetch(textosUrl, {
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
      throw error;
    });
};

function * textosFlow(action) {
  try {
    const { token } = action;
    const textos = yield call(textosApi, token);
    yield put(textosSuccess(textos));
  } catch (error) {
    console.log(error);
    //yield put(videoWhatsAppError(error));
  }
}

function * textosWatcher() {
  yield all([
    takeEvery(GET_TEXTOS_ALL, textosFlow),
  ]);
};

export default textosWatcher;
