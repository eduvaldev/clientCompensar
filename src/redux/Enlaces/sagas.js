import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  ENLACES_LINK_REQUESTING,
  ENLACES_TYPEFORM_REQUESTING,
} from './constants';
import {
  enlaceLinkSuccess,
  enlaceLinkError,
  enlaceTypeFormSuccess,
  enlaceTypeFormError,
} from './actions';

//const url = 'https://adulto-mayor-api.innovacioncompensar.click';
const url = 'http://localhost:3000';
// const url = process.env.REACT_APP_API_URL;
//const url = 'https://compensar.scriptf.com';
const enlacesLink = `${url}/api/enlaces/part?type=link`;
const enlacesTypeForm = `${url}/api/enlaces/part?type=typeform`;

const enlacesLinkApi = (token) => {
  return fetch(enlacesLink, {
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

const enlacesTypeFormApi = (token) => {
  return fetch(enlacesTypeForm, {
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

function * enlaceLinkFlow(action) {
  try {
    const { token } = action;
    const videos = yield call(enlacesLinkApi, token);
    yield put(enlaceLinkSuccess(videos));
  } catch (error) {
    yield put(enlaceLinkError(error));
  }
}

function * enlaceTypeFormFlow(action) {
  console.log('sagas typeform');
  try {
    const { token } = action;
    const videos = yield call(enlacesTypeFormApi, token);
    console.log(videos);
    yield put(enlaceTypeFormSuccess(videos));
  } catch (error) {
    yield put(enlaceTypeFormError(error));
  }
}

function * enlacesWatcher() {
  yield all([
    takeEvery(ENLACES_LINK_REQUESTING, enlaceLinkFlow),
    takeEvery(ENLACES_TYPEFORM_REQUESTING, enlaceTypeFormFlow),
  ]);
}

export default enlacesWatcher;
