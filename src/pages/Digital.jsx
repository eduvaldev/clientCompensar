import React from 'react';
import { Link } from 'react-router-dom';
import audio from '../assets/audios/3-nivelacion-digital.mp3';
import logo from '../assets/images/compensar_logo.png';
import WhatsApp from '../assets/images/WhatsApp.png';
import Zoom from '../assets/images/Zoom.png';
import '../assets/styles/Digital.css';
import '../assets/styles/Whats.css';
import Chat from '../components/Chat';
import Layout from '../components/Layout';
import MainContainerActions from '../components/MainContainerActions';

const Digital = (props) => {
//Implementar porcentajes del progreso del curso
  return (
    <Layout>
      <audio id="media" src={audio} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <img src={logo} width="200px" alt="logo" />
          <h1>
            Nivelación
            <br />
            {' '}
            Digital
          </h1>
        </div>
        <p />
        <div className="main-container__content">
          <Chat
            display=""
            text1={(
              <p>
                Te presentamos el servicio de nivelación digital, donde aprenderás y podrás adquirir destrezas por medio
                de tutoriales en las aplicaciones de WhatsApp y Zoom.
                <br />
                <br />
                {' '}
                Al seleccionar un tutorial encontrarás diferentes contenidos sobre temas específicos de la aplicación.
                {' '}
                <br />
                <br />
                El número grande que ves debajo de WhatsApp representa el avance general del tutorial.
                {' '}
                <br />
                <br />
              </p>
            )}
          />
          <div className="main-container__list">
            <ul>
              <li>
                <Link to="/nivelacion-digital/whatsapp" className="digital-container__list-item">
                  <img src={WhatsApp} alt="WhatsApp Curos logo" />
                </Link>
                {/* <p>Progreso de video</p>
                <br />
                <br />

                <div className="w3-progress-container">
                  <div id="myBar" className="w3-progressbar w3-purpue style-name-1">
                    <div className="w3-center w3-text-white"><p>0%</p></div>
                  </div>
                </div> */}
              </li>

              <Link to="/nivelacion-digital/zoom" className="digital-container__list-item">
                <img src={Zoom} alt="WhatsApp Curos logo" />
              </Link>
            </ul>
          </div>
        </div>
        <MainContainerActions />
      </section>

    </Layout>
  );
};

export default Digital;
