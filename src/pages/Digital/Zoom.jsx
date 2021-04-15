import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Zoomlogo from '../../assets/images/Zoom.png';
import '../../assets/styles/Zoom.css';
import Chat from '../../components/Chat';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import MainContainerActions from '../../components/MainContainerActions';

const Zoom = (props) => {
  const { videosZoom, progressZoom } = useSelector((state) => state.videos);
  useEffect(() => {
    if (videosZoom.length === 0) {
      window.location.href = '/inicio';
    }
  }, []);
  return (
    <>
      <Header />
      <section className="main-container">
        <div className="containers-header">
          <Logo />
          <h1>Nivelación Zoom</h1>
        </div>
        <div className="main-container__content">
          <Chat
            display=""
            text1={(
              <p>
                Estás en el tutorial de Zoom, aquí encontrarás un catálogo de contenidos con temas puntuales sobre la
                aplicación.
                <br />
                <br />
                El número grande que ves debajo de Zoom representa el avance general de todos tus contenidos.
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
              <div className="zoom__logo__container">
                <img src={Zoomlogo} alt="zoomApp Curos logo" width="100%" />
              </div>
              <p>Progreso de video</p>
              <br />
              <br />

              <div className="w3-progress-container">
                <div id="myBar" className="w3-progressbar w3-purpue style-name-1" style={{ 'width': `${Math.ceil(progressZoom)}%` }}>
                  <div className="w3-center w3-text-white">
                    <p>
                      {Math.ceil(progressZoom)}
                      %
                    </p>
                  </div>
                </div>
              </div>

              <br />
              <br />
              <li className="zoom-container__list-item">
                <div className="zoom-container__container-item">
                  {videosZoom.length > 0 && videosZoom.map((video, index) => {
                    return (video.enabled ? (
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
                    ));
                  })}
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

export default Zoom;
