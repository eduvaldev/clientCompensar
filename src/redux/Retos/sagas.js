import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  EMAIL_USER_RETO_SEND,
  RETO_USER_ALL,
} from './constants';
import {
  userRetoSuccess,
} from './actions';

const url = 'https://adulto-mayor-api.innovacioncompensar.click';
//const url = 'http://localhost:3000';
// const url = process.env.REACT_APP_API_URL;
//const url = 'https://compensar.scriptf.com';

const retoUrl = `${url}/api/reto`;
const emailUrl = `${url}/api/emails`;

const emailApi = (token) => {
  return fetch(emailUrl, {
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

const retoApi = (token) => {
  return fetch(retoUrl, {
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
      console.log(error);
      throw error;
    });
};

function * emailFlow(action) {
  try {
    const { token } = action;
    const respuestaEmail = yield call(emailApi, token);
    console.log(respuestaEmail);
  } catch (error) {
    console.log(error);
  }
}

function * retoFlow(action) {
  try {
    const { token } = action;
    const allRetos = yield call(retoApi, token);
    yield put(userRetoSuccess(allRetos));
  } catch (error) {
    console.log(error);
  }
}

function * RetosWatcher() {
  yield all([
    takeEvery(EMAIL_USER_RETO_SEND, emailFlow),
    takeEvery(RETO_USER_ALL, retoFlow),
  ]);
}

export default RetosWatcher;
