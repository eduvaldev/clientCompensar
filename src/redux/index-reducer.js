import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import videos from './Video/reducer';
import likeUser from './LikeUser/reducer';
import preguntas from './Preguntas/reducer';
import retos from './Retos/reducer';
import notificaciones from './Notificaciones/reducer';
import textos from './Textos/reducer';
import enlaces from './Enlaces/reducer';

const IndexReducer = combineReducers({
  auth,
  videos,
  likeUser,
  preguntas,
  retos,
  notificaciones,
  textos,
  enlaces,
});

export default IndexReducer;
