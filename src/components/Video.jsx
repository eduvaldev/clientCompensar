import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import YouTube from 'react-youtube';
import audio from '../assets/audios/6-nivelacion-digital-whatsapp-ubicacion.mp3';
import logo from '../assets/images/compensar_logo.png';
import like from '../assets/images/thumbs-up-solid-like.png';
import noLike from '../assets/images/thumbs-up-solid-nolike.png';
import '../assets/styles/Video.css';
import { likeUserRequesting } from '../redux/LikeUser/actions';
import { storeVideoUserRequesting, showVideoRequesting } from '../redux/Video/actions';
import Layout from './Layout';
import Chat from './Chat';
import MainContainerActions from './MainContainerActions';

const Video = (props) => {
  const code = props.match.params.videoId;
  const title = props.match.params.rutaId;
  const stoppedAt = props.match.params.stopped_at;
  const focus = props.match.params.focusId;
  const dispatch = useDispatch();
  const token = localStorage.getItem('@compensar:user');
  const { focusVideo } = useSelector((state) => state.videos);
  const { requesting } = useSelector((state) => state.likeUser);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      start: parseInt(stoppedAt, 10),
    },
  };
  // onmouseleave.log('focusVideo', focusVideo);
  React.useEffect(() => {
    if (token) {
      dispatch(showVideoRequesting(token, focus));
    }
  }, [focus, token]);

  const handleSaveUserVideo = (event) => {
    window.history.replaceState(null, 'Nivelación digital', `/nivelacion-digital/${title}/${code}/0/${event.target.getCurrentTime()}/${focus}`);
    dispatch(storeVideoUserRequesting(token, {
      'video_id': focus,
      'stopped_at': event.target.getCurrentTime(),
    }));
  };

  const handleLike = (type) => {
    dispatch(likeUserRequesting(token, { video_id: focus, type }));
  };

  return (
    <Layout>
      <audio id="media" src={audio} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <img src={logo} width="200px" alt="mayor compensar logo" />
          <h1>
            Nivelación
            <br />
            {' digital'}
          </h1>
        </div>
        <div className="main-container__content">
          <Chat
            display=""
            text1={(
              <p>
                En esta clase recuerda ver el video completo.
                <br />
                <br />
                Una vez veas el video completo, cuéntanos qué te pareció el video, con un pulgar arriba si te pareció claro y responde a la
                clase, o con un pulgar abajo si te pareció difícil de entender y no responde a la clase.
                {' '}
                <br />
                <br />
                Si quieres hacer un comentario sobre la clase puedes escribirlo. Recuerda que buscamos mejorar
                y crear un servicio pensado para ti.
                {' '}
              </p>
            )}
          />
          <div className="main-container__list">
            <ul>
              <li className="vid-container__list-item">
                <h1>{title}</h1>
                <br />
                <YouTube
                  onPause={handleSaveUserVideo}
                  onEnd={handleSaveUserVideo}
                  opts={opts}
                  videoId={code}
                />
              </li>
              {requesting ? (
                <li>
                  <ClipLoader
                    size={20}
                    color="#ffffff"
                    loading={requesting}
                  />
                </li>
              ) : (
                <li className="vid-container__buttons">
                  { focusVideo.information_like && focusVideo.information_like.cant_action && (
                    <div className="vid-container__container-bt">
                      <div>
                        <button
                          type="button"
                          className="vid-container__like"
                          onClick={() => handleLike('like')}
                        >
                          <img src={like} width="25px" alt="like" />
                        </button>
                        <p>Me gusta </p>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="vid-container__dislike"
                          onClick={() => handleLike('dislike')}
                        >
                          <img src={noLike} width="25px" alt="no like" />
                        </button>
                        <p>No me gusta</p>
                      </div>
                    </div>

                  )}
                  { focusVideo.information_like && !focusVideo.information_like.cant_action && (
                    <div className="vid-container__container-bt">
                      {focusVideo.information_like.is_like && (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <button className="vid-container__like" type="button">
                            <img src={like} width="25px" alt="like" />
                          </button>
                          <p>Te gustó el video</p>
                        </div>
                      )}

                      {focusVideo.information_like.is_dislike && (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <button type="button" className="vid-container__dislike">
                            <img src={noLike} width="25px" alt="no like" />
                          </button>
                          <p>No te gustó el video</p>
                        </div>
                      )}

                    </div>
                  )}

                </li>
              )}

            </ul>
          </div>
        </div>
        <MainContainerActions />
      </section>
    </Layout>
  );
};

export default Video;
