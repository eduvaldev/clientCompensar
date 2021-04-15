import {
  SHOW_VIDEO_ERROR,
  SHOW_VIDEO_REQUESTING, SHOW_VIDEO_SUCCESS,
  STORE_VIDEO_USER_ERROR,
  STORE_VIDEO_USER_REQUESTING, STORE_VIDEO_USER_SUCCESS,
  VIDEO_WHATSAPP_ERROR,
  VIDEO_WHATSAPP_REQUESTING,
  VIDEO_WHATSAPP_SUCCESS,
  VIDEO_ZOOM_REQUESTING,
  VIDEO_ZOOM_SUCCESS,
  VIDEO_ZOOM_ERROR,
} from './constants';

export const videoWhatsAppRequesting = (token) => ({
  type: VIDEO_WHATSAPP_REQUESTING,
  token,
});

export const videoWhatsAppSuccess = (videos) => ({
  type: VIDEO_WHATSAPP_SUCCESS,
  videos,
});

export const videoWhatsAppError = (error) => ({
  type: VIDEO_WHATSAPP_ERROR,
  error,
});

export const videoZoomRequesting = (token) => ({
  type: VIDEO_ZOOM_REQUESTING,
  token,
});

export const videoZoomSuccess = (videos) => ({
  type: VIDEO_ZOOM_SUCCESS,
  videos,
});

export const videoZoomError = (error) => ({
  type: VIDEO_ZOOM_ERROR,
  error,
});

export const storeVideoUserRequesting = (token, body) => ({
  type: STORE_VIDEO_USER_REQUESTING,
  token,
  body,
});

export const storeVideoUserSuccess = () => ({
  type: STORE_VIDEO_USER_SUCCESS,
});

export const storeVideoUserError = () => ({
  type: STORE_VIDEO_USER_ERROR,
});

export const showVideoRequesting = (token, video) => ({
  type: SHOW_VIDEO_REQUESTING,
  token,
  video,
});

export const showVideoSuccess = (videoShow) => ({
  type: SHOW_VIDEO_SUCCESS,
  videoShow,
});

export const showVideoError = () => ({
  type: SHOW_VIDEO_ERROR,
});
