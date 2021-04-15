import React from 'react';
import audio from '../../assets/audios/9-bienestar-integral-salud.mp3';
import logo from '../../assets/images/compensar_logo.png';
import saludService from '../../assets/images/salud.service-medic.png';
import '../../assets/styles/Cuidado.css';
import Chat from '../../components/Chat';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainerActions from '../../components/MainContainerActions';

const Salud = (props) => {
  return (
    <>
      <Header />
      <audio id="media" src={audio} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <img src={logo} width="200px" alt="logo" />
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
                Bienvenido a la línea de servicios de salud.
                <br />
                {' '}
                <br />
                Mira el video completo donde te explicaremos los cuatro servicios que te
                presentamos, donde
                podrás contactar con nuestras líneas especializadas sobre salud.
              </p>
            )}
          />
          <div className="main-container__list">
            <ul>
              <li className="cuidado-container__list-item">
                <h1>Servicios de Salud</h1>
                <img src={saludService} alt="" />
              </li>

              <li className="cuidado-container__list-item">
                <div className="cuidado-container__container-item">
                  <button
                    type="button"
                    className="whats-container__item"
                  >
                    <a href="https://www.compensar.com/salud/" target="about_blanck">Ir a EPS</a>
                  </button>
                  <button
                    type="button"
                    className="whats-container__item"
                  >
                    <a
                      href="https://corporativo.compensar.com/salud/plan-de-beneficios-en-salud/Paginas/1DOC3.aspx"
                      target="about_blanck"
                    >
                      Ir a Un Doc Tres
                    </a>
                  </button>
                  <button
                    type="button"
                    className="whats-container__item"
                  >
                    <a href="https://api.whatsapp.com/send?phone=5714441234" target="about_blanck">
                      Ir
                      a Lina
                    </a>
                  </button>
                </div>
                <div className="callCenter-container">
                  <br />
                  <br />
                  <h2>Número de call center</h2>
                  <br />
                  <div className="callCenter">

                    <p>
                      <i className="icon-mobile" />
                      <strong>4441234</strong>
                    </p>
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

export default Salud;
