import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loginError, loginSuccess } from './actions';
import { LOGIN_REQUESTING } from './constants';

const url = 'http://3.86.211.240:3000';
//const url = 'http://localhost:3000';
// const url = process.env.REACT_APP_API_URL;
//const url = 'https://compensar.scriptf.com';

const loginUrl = `${url}/api/login`;

const loginApi = (body) => {
  return fetch(loginUrl, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': '256',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  })
    .then((response) => {
      // remove next line
      return response.json();
    })
    .then((data) => {
      if (data.access_token) {
        localStorage.setItem('@compensar:user', data.access_token);
        return data.access_token;
      }
      alert('Verifica que tu numero de identificación y contraseña sean correctos');
      throw data.data;
    }).catch((error) => {
      throw error;
    });
};

function * loginFlow(action) {
  try {
    const { body } = action;
    const token = yield call(loginApi, body);
    yield put(loginSuccess(token));
    localStorage.setItem(
      '@compensar:NUMERODOCUMENTO',
      body.identification_number,
    );
  } catch (error) {
    yield put(loginError(error));
  }
}

function * loginWatcher() {
  yield all([
    takeEvery(LOGIN_REQUESTING, loginFlow),
  ]);
}

export default loginWatcher;
