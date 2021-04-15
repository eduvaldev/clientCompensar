import { all, call, put, takeEvery } from 'redux-saga/effects';
import { likeUserError, likeUserSuccess } from './actions';
import { LIKE_USER_REQUESTING } from './constants';

const url = 'http://3.95.19.121:3000';
//const url = 'http://localhost:3000';
// const url = process.env.REACT_APP_API_URL;
//const url = 'https://compensar.scriptf.com';

const LikeUserUrl = `${url}/api/likeUser`;

const likeUserApi = (token, body) => {
  return fetch(LikeUserUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
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

function * likeUserFlow(action) {
  try {
    const { token, body } = action;
    const videos = yield call(likeUserApi, token, body);
    yield put(likeUserSuccess(videos));
  } catch (error) {
    yield put(likeUserError(error));
  }
}

function * likeUserWatcher() {
  yield all([
    takeEvery(LIKE_USER_REQUESTING, likeUserFlow),
  ]);
}

export default likeUserWatcher;
