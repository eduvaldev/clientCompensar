import React from 'react';
import { Link } from 'react-router-dom';
import audio from '../assets/audios/8-bienestar-integral.mp3';
import logo from '../assets/images/compensar_logo.png';
import '../assets/styles/Bienestar.css';
import Chat from '../components/Chat';
import Layout from '../components/Layout';
import MainContainerActions from '../components/MainContainerActions';

const Bienestar = (props) => {
  return (
    <Layout>
      <audio id="media" src={audio} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <img src={logo} width="200px" alt="mayor compensar logo" />
          <h1>
            Bienestar
            <br />
            {' '}
            integral
          </h1>
        </div>

        <div className="main-container__content">

          <Chat
            display=""
            text1={(
              <p>
                {' '}
                Bienvenido a una nueva experiencia de servicios integrales para mejorar tu calidad de vida.
                <br />
                <br />
                Si haces clic en la primera imagen,
                te ayudaremos a acceder a los servicios que se prestan en salud a nivel general.
                {' '}
                <br />
                <br />
                Y si haces clic en la segunda imagen, te ayudaremos a acceder a los servicios que ofrece Compensar en temas de recreación, educación y deporte.
              </p>
            )}
          />

          <div className="main-container__list">
            <ul>
              <Link to="/bienestar/servicios-salud">
                <button
                  type="button"
                  className="bienestar-container__list-itemHealt"
                >
                  <h1>Servicios de salud</h1>
                </button>
              </Link>
              <Link to="/bienestar/servicios">
                <button
                  type="button"
                  className="bienestar-container__list-itemServices"
                >
                  <h1> Servicios de bienestar</h1>

                </button>
              </Link>

            </ul>
          </div>

        </div>
        <MainContainerActions />
      </section>
    </Layout>
  );
};

export default Bienestar;
