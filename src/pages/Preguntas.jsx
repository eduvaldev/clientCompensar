import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import audioHome from '../assets/audios/2-preguntas.mp3';
import logo from '../assets/images/compensar_logo.png';
import '../assets/styles/Home.css';
import Chat from '../components/Chat';
import Layout from '../components/Layout';
import MainContainerActions from '../components/MainContainerActions';
import { videoWhatsAppRequesting } from '../redux/Video/actions';

const Preguntas = (props) => {

  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem('@compensar:user');

  useEffect(() => {
    dispatch(videoWhatsAppRequesting(token));
  }, [token]);
  return (
    <Layout>
      <audio id="media" src={audioHome} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <img alt="logo" src={logo} className="logoMain" />
          <h1>Inicio</h1>
        </div>

        <div className="main-container__content">

          <Chat
            display="dropdown"
            dropdown={(
              <div>
                <p>Aquí están las preguntas que puedes hacerme, puedes escribir en el chat y te las responderé:</p>
                <br />
                <br />
                <div className={q1 ? ('textDown textDown--active') : ('textDown')}>
                  <button type="button" className="textDown__boton" onClick={() => setQ1(!q1)}>
                    <p className="textDown__option">¿Qué es mayor compensar?</p>
                    <i className={q1 ? ('icon-circle-down icon-circle-down--active') : ('icon-circle-down')} />
                  </button>
                  <p className={q1 ? ('textDown__text textDown__text--active') : ('textDown__text')}>
                    Mayor Compensar es un portal de servicios digitales y/o
                    presenciales para persona mayor, acá podrás encontrar
                    algunas alternativas que esperamos sean de tu interés
                    y te ayudarán a mejorar tu calidad de vida en diferentes
                    aspectos como educación, bienestar, salud, actividad física,
                    recreación y deporte. También podrás adquirir conocimientos
                    acerca del pensamiento digital actual. Esta será una herramienta
                    que te permitirá acceder a todos los beneficios que te ofrece la
                    caja de compensación.
                  </p>
                </div>
                <div className={q2 ? ('textDown textDown--active') : ('textDown')}>
                  <button type="button" className="textDown__boton" onClick={() => setQ2(!q2)}>
                    <p className="textDown__option">¿Cómo obtengo los servicios que ofrece tienda compensar?</p>
                    <i className={q2 ? ('icon-circle-down icon-circle-down--active') : ('icon-circle-down')} />
                  </button>
                  <p className={q2 ? ('textDown__text textDown__text--active') : ('textDown__text')}>
                    Para obtener los servicios de tienda Compensar, debes iniciar sesión con tu usuario y
                    contraseña de transacciones en línea, Escoger el servicio que más te guste, añadirlo al
                    carrito, y cancelar con el método de pago que más te convenga.
                  </p>
                </div>
                <div className={q3 ? ('textDown textDown--active') : ('textDown')}>
                  <button type="button" className="textDown__boton" onClick={() => setQ3(!q3)}>
                    <p className="textDown__option">¿Dónde encuentro los videos de WhatsApp y Zoom?</p>
                    <i className={q3 ? ('icon-circle-down icon-circle-down--active') : ('icon-circle-down')} />
                  </button>
                  <p className={q3 ? ('textDown__text textDown__text--active') : ('textDown__text')}>
                    Estos videos hacen parte de nuestro servicio de nivelación digital
                    que puedes encontrar en el inicio del portal de Mayor Compensar.
                    Podrás acceder a dos de nuestros videos de forma gratuita, para poder
                    ver todos los videos que ofrecemos, debes pagar UNA SOLA VEZ cada
                    temática y después disfrutar de todo el contenido de manera ilimitada.
                  </p>
                </div>
                <div className={q4 ? ('textDown textDown--active') : ('textDown')}>
                  <button type="button" className="textDown__boton" onClick={() => setQ4(!q4)}>
                    <p className="textDown__option">¿Dónde encuentro los servicios de salud?</p>
                    <i className={q4 ? ('icon-circle-down icon-circle-down--active') : ('icon-circle-down')} />
                  </button>
                  <p className={q4 ? ('textDown__text textDown__text--active') : ('textDown__text')}>
                    Los servicios de salud los puedes encontrar haciendo click en
                    nuestro botón de bienestar integral, servicios de salud, allí
                    podrás encontrar de manera rápida toda la oferta de salud que
                    tiene Compensar para ti.
                  </p>
                </div>
                <div className={q5 ? ('textDown textDown--active') : ('textDown')}>
                  <button type="button" className="textDown__boton" onClick={() => setQ5(!q5)}>
                    <p className="textDown__option">¿Algunos servicios no me funcionan por qué?</p>
                    <i className={q5 ? ('icon-circle-down icon-circle-down--active') : ('icon-circle-down')} />
                  </button>
                  <p className={q5 ? ('textDown__text textDown__text--active') : ('textDown__text')}>
                    Algunos servicios en la página se verán en color gris, lo que
                    significa que aún nos encontramos trabajando para ofrecerte los
                    mejores servicios y temporalmente no están disponibles.
                  </p>
                </div>
              </div>
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
                    Ruta autocuidado
                  </button>
                </Link>
              </li>
              <li className="home-container__list-item">
                <button className="inactive-bt" type="button">
                  Modelo de productividad
                </button>
              </li>
              <li className="home-container__list-item">
                <button className="inactive-bt" type="button">
                  Aliados y convenios
                </button>
              </li>

            </ul>
          </div>
        </div>
        <MainContainerActions />
      </section>
    </Layout>
  );

};

export default Preguntas;
