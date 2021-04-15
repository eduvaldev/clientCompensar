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
import { LIKE_USER_SUCCESS } from '../LikeUser/constants';

const initialState = {
  requesting: false,
  success: false,
  error: '',
  progressWp: 0,
  progressZoom: 0,
  videosWhatsApp: [],
  videosZoom: [],
  focusVideo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_WHATSAPP_REQUESTING:
      return {
        ...state,
        requesting: true,
        error: '',
        progressWp: 0,
        videosWhatsApp: [],
      };
    case VIDEO_WHATSAPP_SUCCESS: {
      let sumPorcent = 0;
      action.videos.map((element) => {
        sumPorcent += Math.ceil(parseInt(element.information_user_video.percentage, 10));
        return null;
      });
      return {
        ...state,
        requesting: false,
        error: '',
        progressWp: sumPorcent / 8,
        videosWhatsApp: action.videos,
      };
    };
    case VIDEO_WHATSAPP_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.error,
      };
    case VIDEO_ZOOM_REQUESTING:
      return {
        ...state,
        requesting: true,
        error: '',
        videosZoom: [],
      };
    case VIDEO_ZOOM_SUCCESS: {
      let sumPorcent = 0;
      console.log(action.videos);
      action.videos.map((element) => {
        sumPorcent += Math.ceil(parseInt(element.information_user_video.percentage, 10));
        return null;
      });
      return {
        ...state,
        requesting: false,
        error: '',
        videosZoom: action.videos,
        progressZoom: sumPorcent / 8,
      };
    };
    case VIDEO_ZOOM_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.error,
      };
    case STORE_VIDEO_USER_REQUESTING:
      return {
        ...state,
        requesting: true,
      };
    case STORE_VIDEO_USER_ERROR:
      return {
        ...state,
        requesting: false,
      };
    case STORE_VIDEO_USER_SUCCESS:
      return {
        ...state,
        requesting: false,
      };
    case LIKE_USER_SUCCESS:
      return {
        ...state,
        focusVideo: action.videos,
      };

    case SHOW_VIDEO_REQUESTING:
      return {
        ...state,
        requesting: true,
      };
    case SHOW_VIDEO_ERROR:
      return {
        ...state,
        requesting: false,
      };
    case SHOW_VIDEO_SUCCESS:
      return {
        ...state,
        requesting: false,
        focusVideo: action.videoShow,
      };
    default:
      return state;
  }
};

export default reducer;
