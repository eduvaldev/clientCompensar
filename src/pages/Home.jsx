import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import audioHome from '../assets/audios/1-menu-principal.mp3';
import logo from '../assets/images/compensar_logo.png';
import '../assets/styles/Home.css';
import Alert from '../components/Alert';
import Chat from '../components/Chat';
import Layout from '../components/Layout';
import MainContainerActions from '../components/MainContainerActions';
import { videoWhatsAppRequesting, videoZoomRequesting } from '../redux/Video/actions';

const Home = () => {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  const token = localStorage.getItem('@compensar:user');
  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    dispatch(videoWhatsAppRequesting(token));
    dispatch(videoZoomRequesting(token));
  }, [token]);

  return (
    <Layout>
      <section className="main-container">
        <audio id="media" src={audioHome} autoPlay={false} />
        <div className="containers-header">
          <img alt="logo" src={logo} className="logoMain" />
          <h1>Inicio</h1>
        </div>

        <div className="main-container__content">

          <Chat
            display=""
            text1={(
              <p>
                Hola, soy Anita, tu guía personal.
                Fui creada para explicarte cómo funciona cada experiencia, así que no debes preocuparte.
                <br />
                {' '}
                <br />

                ¿Qué es Mayor Compensar? Mayor compensar es una plataforma pensada para ti, donde encontrarás
                todos los servicios agrupados de la persona mayor,
                como: Nivelación Digital, Bienestar Integral, Mi Reto Saludable, Red de Cuidadores, Plan de Bienestar Integral Calle 26 - CUR,
                Modelo de Productividad y Aliados y Convenios.
                Estos contenidos son claros y fáciles de entender. Haz clic sobre uno de los servicios y
                empecemos la experiencia.
                {' '}
                <br />
                {' '}
                <br />

                Si tienes alguna duda haz clic en el botón de preguntas.
                Para escuchar esta información haz clic en el botón reproducir.
              </p>
            )}
          />

          <div className="home-container__list">
            <ul>
              <li className="home-container__list-item">

                <Link to="/nivelacion-digital">
                  <button type="button">
                    <i className="icon-mobile" />
                    Nivelación Digital
                  </button>
                </Link>

              </li>
              <li className="home-container__list-item">
                <Link to="/bienestar">
                  <button type="button">
                    <i className="icon-man" />
                    Bienestar Integral
                  </button>
                </Link>
              </li>
              <li className="home-container__list-item">
                <Link to="/auto-cuidado">
                  <button type="button">
                    <i className="icon-map" />
                    Mi reto saludable
                  </button>
                </Link>
              </li>
              <li className="home-container__list-item">
                <button onClick={handleOpenAlert} className="inactive-bt" type="button">
                  Plan de bienestar integral calle 26 - CUR
                </button>
              </li>
              <li className="home-container__list-item">
                <button onClick={handleOpenAlert} className="inactive-bt" type="button">
                  Red de cuidadores
                </button>
              </li>
              <li className="home-container__list-item">
                <button onClick={handleOpenAlert} className="inactive-bt" type="button">
                  Modelo de productividad
                </button>
              </li>
              <li className="home-container__list-item">
                <button onClick={handleOpenAlert} className="inactive-bt" type="button">
                  Aliados y convenios
                </button>
              </li>
            </ul>
          </div>
        </div>
        <MainContainerActions addQueryBtn={true} />
        <Alert isOpen={openAlert} isClose={handleCloseAlert} modalType="inactive-btn" />
      </section>
    </Layout>
  );

};

export default Home;
