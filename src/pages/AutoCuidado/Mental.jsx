import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import audio from '../../assets/audios/14-ruta-autocuidado-mental.mp3';
import audio2 from '../../assets/audios/18-ruta-autocuidado-registrar-actividad-mental.mp3';
import logo from '../../assets/images/compensar_logo.png';
import '../../assets/styles/Corpoal.css';
import Alert from '../../components/Alert';
import Chat from '../../components/Chat';
import Footer from '../../components/Footer';
import Form from '../../components/FormPop';
import Header from '../../components/Header';
import MainContainerActions from '../../components/MainContainerActions';
import { emailSendUser } from '../../redux/Retos/actions';

const Mental = (props) => {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState('first');
  const [visible, setVisible] = useState('corp-container__like');
  const [registerAct, setRegisterAct] = useState('noButton');
  const [openAlert, setOpenAlert] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem('@compensar:user');
  const { mayorSabio } = useSelector((state) => state.retos);

  useEffect(() => {
    if (mayorSabio.state === 'true') {
      setVisible('noButton');
      setRegisterAct('corp-container__dislike');
    } else {
      setVisible('corp-container__like');
      setRegisterAct('noButton');
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
    setVisible('noButton');
    const audioSrc = document.getElementById('media');
    audioSrc.setAttribute('src', audio2);
    setShowText('second');
    setRegisterAct('corp-container__dislike');
  };
  const handleOpenAlert = () => {
    dispatch(emailSendUser(token));
    setOpenAlert(true);
  };
  return (
    <>
      <Header />
      <audio id="media" src={audio} autoPlay={false} />
      <section className="main-container">
        <div className="containers-header">
          <img src={logo} width="200px" alt="mayor compensar logo" />
          <h1>
            Mi Reto
            <br />
            {' '}
            Saludable
          </h1>
        </div>
        <div className="main-container__content">

          <Chat
            display={showText}
            text1={(
              <p>
                Bienvenido a la línea de mayor sabio.
                Primero mira el video completo.
                <br />
                <br />
                Una vez termines el video, para hacer parte de esta experiencia de dos semanas, revisa las condiciones de la actividad, y si estas de
                acuerdo haz clic en el botón de “acepto el reto”.
                {' '}
                <br />
                <br />
              </p>
            )}
            text2={(
              <p>
                En este espacio podrás registrar tus ejercicios diarios.
                <br />
                <br />
                Recuerda que puedes repetir el video de mayor sabio cuantas veces gustes para recordar la rutina.
              </p>
            )}
          />

          <div className="main-container__list">
            <ul>
              <li className="corp-container__list-item">
                <h2>Mayor sabio</h2>
                <br />
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/vOq-tAVPDMU"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </li>
              <li className="corp-container__buttons">
                <div className="corp-container__container-bt">
                  <button type="button" className={visible} onClick={handleOpenAlert}>Acepto el reto</button>
                </div>
                <button
                  type="button"
                  className={registerAct}
                  onClick={handleOpen}
                >
                  Registrar actividad
                </button>
              </li>
            </ul>
          </div>
        </div>
        <MainContainerActions />
      </section>
      <Form formId="LjcRLbXW" isOpen={open} isClose={handleClose} />
      <Alert isOpen={openAlert} isClose={handleCloseAlert} />
      <Footer />
    </>
  );
};

export default Mental;
