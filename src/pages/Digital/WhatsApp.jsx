/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import audio from '../../assets/audios/4-nivelacion-digital-whatsapp.mp3';
import logo from '../../assets/images/compensar_logo.png';
import WhatsApp from '../../assets/images/WhatsApp.png';
import '../../assets/styles/Whats.css';
import Chat from '../../components/Chat';
import Layout from '../../components/Layout';
import MainContainerActions from '../../components/MainContainerActions';

const Whats = (props) => {

  const { videosWhatsApp, progressWp } = useSelector((state) => state.videos);

  useEffect(() => {
    if (videosWhatsApp.length === 0) {
      window.location.href = '/inicio';
    }
  }, []);
  return (
    <Layout>
      <audio id="media" src={audio} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <img src={logo} width="200px" alt="mayor compensar logo" />
          <h1>
            Nivelación WhatsApp
          </h1>
        </div>
        <div className="main-container__content">
          <Chat
            display=""
            text1={(
              <p>
                Estás en el tutorial de WhatsApp, aquí encontrarás un catálogo de contenidos con temas puntuales sobre la
                aplicación.
                <br />
                <br />
                El número grande que ves debajo de WhatsApp representa el avance general de todos tus contenidos.
                {' '}
                <br />
                <br />
                El número que ves al lado de cada clase indica tu avance del tutorial.
                {' '}
                <br />
                <br />
                En color naranja encuentras los contenidos habilitados para ti.
              </p>
            )}
          />

          <div className="main-container__list">
            <ul>
              <li className="zoom__logo__container">
                <img src={WhatsApp} alt="WhatsApp Curos logo" />
              </li>
              <p>Progreso de video</p>
              <br />
              <br />

              <div className="w3-progress-container">
                <div id="myBar" className="w3-progressbar w3-purpue style-name-1" style={{ 'width': `${Math.ceil(progressWp)}%` }}>
                  <div className="w3-center w3-text-white">
                    <p>
                      {progressWp}
                      %
                    </p>
                  </div>
                </div>
              </div>

              <br />
              <br />

              <li className="whats-container__list-item">
                <div className="whats-container__container-item">
                  {videosWhatsApp.map((video, index) => (video.enabled ? (
                    // eslint-disable-next-line react/no-array-index-key
                    <div className="button-content" key={index}>
                      <Link
                        to={`/nivelacion-digital/${video.title}/${video.url}/${video.information_user_video.id}/${video.information_user_video.stopped_at}/${video.id}`}
                      >
                        <button type="button" className="whats-container__item ">{video.title}</button>
                      </Link>
                      <p>
                        {Math.ceil(parseInt(video.information_user_video.percentage, 10))}
                        %
                      </p>
                    </div>
                  ) : (
                    <div className="button-content">
                      <button type="button" className="whats-container__item inactive-bt">{video.title}</button>
                    </div>
                  )))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <MainContainerActions />
      </section>
    </Layout>
  );
};

export default Whats;
