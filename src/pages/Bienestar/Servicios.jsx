import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Chat from '../../components/Chat';
import logo from '../../assets/images/compensar_logo.png';
import servicePerson from '../../assets/images/service-man.png';
import audio from '../../assets/audios/10-bienestar-persona-mayor.mp3';
import '../../assets/styles/Servicios.css';
import MainContainerActions from '../../components/MainContainerActions';

const Servicios = (props) => {
  return (
    <>
      <Header />
      <audio id="media" src={audio} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <img src={logo} width="200px" alt="mayor compensar logo" />
          <h1>
            Bienestar
            <br />
            integral
          </h1>
        </div>

        <div className="main-container__content">

          <Chat
            display=""
            text1={(
              <p>
                Estas en la línea de servicios de bienestar.
                <br />
                <br />
                {' '}
                Primero mira el video completo.
                <br />
                {' '}
                <br />
                Una vez terminado el video, recuerda que al seleccionar el botón tienda compensar, encontrarás una gran variedad de prácticas libres,
                prácticas dirigidas y cursos pensados para ti.
                {' '}
                <br />
                {' '}
                <br />
                Y al seleccionar clases compensar en casa, te traerá los insumos necesarios junto con los mejores docentes
                para realizar tus clases virtuales en la comodidad de tu hogar.
              </p>
            )}
          />

          <div className="main-container__list">
            <ul>
              <li className="servicios-container__list-item">
                <h1>Servicios de bienestar</h1>
                <img src={servicePerson} alt="" />
              </li>
              <li className="servicios-container__list-item">
                <div className="servicios-container__container-item">
                  <Link to="/bienestar/servicios/tienda">
                    <button
                      type="button"
                      className="whats-container__item"
                    >
                      <i className="icon-bookmark" />
                      Tienda compensar
                    </button>
                  </Link>
                  <Link to="/bienestar/servicios/clases">
                    <button
                      type="button"
                      className="whats-container__item"
                    >
                      Clases Compensar en Casa
                    </button>
                  </Link>

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

export default Servicios;
