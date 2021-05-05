import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import audio from '../assets/audios/12-ruta-autocuidado.mp3';
import Cuidadologo from '../assets/images/salud.service-medic.png';
import '../assets/styles/AutoCuidado.css';
import Chat from '../components/Chat';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import MainContainerActions from '../components/MainContainerActions';
import { userRetos } from '../redux/Retos/actions';

const Cuidado = (props) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('@compensar:user');
  useEffect(() => {
    dispatch(userRetos(token));
  }, [token]);
  return (
    <Layout>
      <audio id="media" src={audio} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <Logo />
          <h1>
            Mi reto
            <br />
            saludable
          </h1>
        </div>
        <div className="main-container__content">

          <Chat
            display=""
            text1={(
              <p>
                Te presentamos el servicio mi reto saludable, donde harás un recorrido por tres temas,
                con el fin de ayudar y mejorar en tu calidad de vida.
                <br />
                <br />
                Es un camino que te ayudará a mejorar tus estilos de vida saludable, mediante la práctica
                de diversas actividades físicas dirigidas, que estarán acompañadas de consejos
                para el bienestar integral.
                <br />
                <br />
                Para ello, tendrás como motivación un acompañamiento profesional por medio de WhatsApp,
                de esta manera estaremos más cerca de ti y podremos brindarte una asesoría
                más especializada según tus necesidades
              </p>
            )}
          />

          <div className="main-container__list">
            <ul>
              <li className="auto-cuidado-container__list-item">
                <img src={Cuidadologo} alt="rutas logo" width="150%" />
              </li>
              <li className="auto-cuidado-container__list-item">
                <div className="auto-cuidado-container__container-item">
                  <Link to="/auto-cuidado/corporal">
                    <button type="button" className="whats-container__item">
                      <i className="icon-accessibility" />
                      Mayor saludable
                    </button>
                  </Link>
                  <Link to="/auto-cuidado/mental">
                    {' '}
                    <button
                      type="button"
                      className="whats-container__item"
                    >
                      <i className="icon-eye" />
                      Mayor sabio
                    </button>
                  </Link>
                  <Link to="/auto-cuidado/afectiva">
                    <button
                      type="button"
                      className="whats-container__item"
                    >
                      <i className="icon-heart" />
                      Mayor feliz
                    </button>
                  </Link>
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

export default Cuidado;
