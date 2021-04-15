import React from 'react';
import { useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import logo from '../assets/images/compensar_logo.png';
import '../assets/styles/Video.css';
import { storeVideoUserRequesting } from '../redux/Video/actions';
import Chat from './Chat';
import Footer from './Footer';
import Header from './Header';
import MainContainerActions from './MainContainerActions';

const Video1 = (props) => {

  const code = props.match.params.videoId;
  const title = props.match.params.rutaId;
  const stoppedAt = props.match.params.stopped_at;
  const focus = props.match.params.focusId;

  const dispatch = useDispatch();
  const token = localStorage.getItem('@compensar:user');
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: parseInt(stoppedAt, 10),
    },
  };

  const handleSaveUserVideo = (event) => {
    window.history.replaceState(null, 'Nivelación digital', `/nivelacion-digital/${title}/${code}/0/${event.target.getCurrentTime()}/${focus}`);
    dispatch(storeVideoUserRequesting(token, {
      'video_id': focus,
      'stopped_at': event.target.getCurrentTime(),
    }));
  };

  return (
    <>
      <Header />
      <section className="vid-container">
        <div className="vid-container__content">
          <div className="vid-container__chat">
            <div className="containers-header">
              <img src={logo} width="200px" alt="mayor compensar logo" />
              <h1>
                Nivelación
                <br />
                {' '}
                digital
              </h1>
            </div>
            <Chat
              text="En esta clase recuerda ver el video completo. Una vez veas el video completo, cuéntanos qué te pareció el video, con un pulgar arriba si te pareció claro y responde a la case, o con un pulgar abajo si te pareció difícil de entender y no responde a la clase. Si quieres hacer un comentario sobre la clase puedes escribirlo. Recuerda que buscamos mejorar y crear un servicio pensado para ti."
            />
          </div>
          <div className="vid-container__list">
            <ul>
              <li className="vid-container__list-item">
                <h1>{title}</h1>
                <YouTube
                  onPause={handleSaveUserVideo}
                  onEnd={handleSaveUserVideo}
                  opts={opts}
                  videoId={code}
                />
              </li>
              <li className="vid-container__buttons">
                <div className="vid-container__container-bt">
                  <div>
                    <button
                      type="button"
                      className="vid-container__like"
                      onClick={() => (props.history.goBack())}
                    >
                      <i className="icon-checkmark" />
                    </button>
                    <span>Me gusta </span>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="vid-container__dislike"
                      onClick={() => (props.history.goBack())}
                    >
                      <i className="icon-cross" />
                    </button>
                    <span>No me gusta</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <MainContainerActions />
      </section>
      <Footer />
    </>
  );
};

export default Video1;
