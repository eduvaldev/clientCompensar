import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioProfile from '../assets/audios/20-mi-perfil.mp3';
import logo from '../assets/images/compensar_logo.png';
import '../assets/styles/Profile.css';
import Chat from '../components/Chat';
import Layout from '../components/Layout';
import MainContainerActions from '../components/MainContainerActions';
import ProfileOptions from '../components/subcomponents/ProfileOptions';
import { userNotificacionesGet } from '../redux/Notificaciones/actions';
import { textosAppRequesting } from '../redux/Textos/actions';

function Profile() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('@compensar:user');
  const { textos } = useSelector((state) => state.textos);
  console.log(textos);
  useEffect(() => {
    dispatch(userNotificacionesGet(token));
    dispatch(textosAppRequesting(token));
  }, [token]);
  return (
    <Layout>
      <section className="main-container">
        <audio id="media" src={AudioProfile} autoPlay={false} />
        <div className="containers-header">
          <img alt="logo" src={logo} className="logoMain" />
          <h1>Mi Perfil</h1>
        </div>

        <div className="main-container__content">
          { textos.length > 0 ? (
            <Chat
              display=""
              text1={(
                <p>
                  {textos[1].texto}
                </p>
              )}
            />
          ) : null}

          <div className="home-container__list">
            <ul>
              <li className="home-container__list-item">
                <figure className="__SectionImage">
                  <img src="https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="adultos mayores" />
                </figure>

              </li>
              <li className="home-container__list-item">

                <ProfileOptions
                  description="Llena tu perfil de datos básicos aquí"
                  textBtn="Perfil básico"
                  formId="mIzTanfz"
                />

              </li>
              <li className="home-container__list-item">

                <ProfileOptions
                  description="Llena tu autoevaluación de salud y bienestar aquí"
                  textBtn="Perfil de riesgo "
                  formId="aqBkYqrh"
                />

              </li>
              <li className="home-container__list-item">

                <ProfileOptions
                  description="Llena tu perfil de productividad aquí "
                  textBtn="Perfil de Productividad "
                  style={{}}
                />

              </li>
            </ul>
          </div>
        </div>
        <MainContainerActions addQueryBtn={true} />
      </section>
    </Layout>
  );
}

export default Profile;
