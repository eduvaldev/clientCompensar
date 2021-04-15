import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  SHOW_VIDEO_REQUESTING,
  STORE_VIDEO_USER_REQUESTING,
  VIDEO_WHATSAPP_REQUESTING,
  VIDEO_ZOOM_REQUESTING,
} from './constants';
import {
  showVideoError,
  showVideoSuccess,
  storeVideoUserError,
  storeVideoUserSuccess,
  videoWhatsAppError,
  videoWhatsAppRequesting,
  videoWhatsAppSuccess,
  videoZoomSuccess,
  videoZoomError,
} from './actions';

const url = 'http://3.86.211.240:3000';
//const url = 'http://localhost:3000';
// const url = process.env.REACT_APP_API_URL;
//const url = 'https://compensar.scriptf.com';

const videoUrl = `${url}/api/videos`;
const videoWhatsAppUrl = `${url}/api/videos?type=WHSP`;
const videoZoomUrl = `${url}/api/videos?type=ZOOM`;
const userVideoUrl = `${url}/api/uservideo`;

const videoWhatsAppApi = (token) => {
  return fetch(videoWhatsAppUrl, {
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

const videoZoomApi = (token) => {
  return fetch(videoZoomUrl, {
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

function * videoFlow(action) {
  try {
    const { token } = action;
    const videos = yield call(videoWhatsAppApi, token);
    yield put(videoWhatsAppSuccess(videos));
  } catch (error) {
    yield put(videoWhatsAppError(error));
  }
}

function * videoFlowZoom(action) {
  try {
    const { token } = action;
    const videos = yield call(videoZoomApi, token);
    yield put(videoZoomSuccess(videos));
  } catch (error) {
    yield put(videoZoomError(error));
  }
}

const videoShowApi = (token, video) => {
  return fetch(`${videoUrl}/${video}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.code === 200) {
        return json.data.data[0];
      }
      throw json.data;

    }).catch((error) => {
      throw error;
    });
};

function * videoShowFlow(action) {
  try {
    const { token, video } = action;
    const videoShow = yield call(videoShowApi, token, video);
    yield put(showVideoSuccess(videoShow));
  } catch (error) {
    yield put(showVideoError(error));
  }
}

const userVideoApi = (token, body) => {
  return fetch(userVideoUrl, {
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

function * userVideoFlow(action) {
  try {
    const { token, body } = action;
    const videos = yield call(userVideoApi, token, body);
    yield put(storeVideoUserSuccess(videos));
    yield put(videoWhatsAppRequesting(token));
  } catch (error) {
    yield put(storeVideoUserError(error));
  }
}

function * videoWatcher() {
  yield all([
    takeEvery(VIDEO_WHATSAPP_REQUESTING, videoFlow),
    takeEvery(VIDEO_ZOOM_REQUESTING, videoFlowZoom),
    takeEvery(STORE_VIDEO_USER_REQUESTING, userVideoFlow),
    takeEvery(SHOW_VIDEO_REQUESTING, videoShowFlow),
  ]);
}

export default videoWatcher;
