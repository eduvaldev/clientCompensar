import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import logo from '../assets/images/compensar_logo.png';
import audioHome from '../assets/audios/1-menu-principal.mp3';
import '../assets/styles/Home.css';
import Chat from '../components/Chat';
import MainContainerActions from '../components/MainContainerActions';
import '../assets/styles/Progreso.css';
import { preguntasUserRequesting } from '../redux/Preguntas/actions';

const Progress = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('@compensar:user');

  useEffect(() => {
    dispatch(preguntasUserRequesting(token));
  }, [token]);
  return (
    <Layout>
      <section className="main-container">
        <audio id="media" src={audioHome} autoPlay={false} />
        <div className="containers-header">
          <img alt="logo" src={logo} className="logoMain" />
          <h1>Mi Progreso</h1>
        </div>

        <div className="main-container__content">
          <Chat
            display=""
            text1={(
              <p>
                Hola, soy Anita, tu guía personal.
                <br />
                <br />
                Fui creada para explicarte cómo funciona cada experiencia, así que no debes preocuparte.
              </p>
            )}
          />
          <div className="progreso__botones">
            <Link to="/progreso/habitos">
              <button type="button" className="progreso__boton">Habitos saludables</button>
            </Link>
            <Link to="/progreso/cuidadopersonal">
              <button type="button" className="progreso__boton">Cuidado personal</button>
            </Link>
            <Link to="/progreso/bienestarsaludable">
              <button type="button" className="progreso__boton">Bienestar saludable</button>
            </Link>
            <Link to="/progreso/cuidadosmedicos">
              <button type="button" className="progreso__boton">Mis cuidados medicos</button>
            </Link>
          </div>
        </div>
        <MainContainerActions addQueryBtn={true} />
      </section>
    </Layout>
  );
};
export default Progress;
