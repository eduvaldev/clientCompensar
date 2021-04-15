import React, { useState } from 'react';
import audio from '../../assets/audios/11-bienestar-persona-mayor-clases.mp3';
import logo from '../../assets/images/compensar_logo.png';
import seniorEjer from '../../assets/images/clases-compensar.jpg';
import '../../assets/styles/Clases.css';
import Chat from '../../components/Chat';
import Footer from '../../components/Footer';
import Form from '../../components/FormPop';
import Header from '../../components/Header';
import MainContainerActions from '../../components/MainContainerActions';

const Clases = (props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
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
            {' '}
            Integral
          </h1>
        </div>
        <div className="main-container__content">
          <Chat
            display=""
            text1={(
              <p>
                Bienvenido a las clases Compensar en casa.
                <br />
                <br />
                {' '}
                En este espacio te explicaremos la clase que
                ofrecemos.
                {' '}
                <br />
                <br />
                Luego haz clic en el botón de “Me interesa esta clase”
                y seras contactado en el menor tiempo posble para recibir la información correspondiente.
                <br />
                {' '}
              </p>
            )}
          />

          <div className="main-container__list">
            <ul>
              <li className="clases-container__list-item">
                <img src={seniorEjer} alt="" />
              </li>
              <li className="clases-container__list-item">
                <h2>Clases Compensar en casa</h2>
                <br />
                <p>
                  Estas clases te brindan la oportunidad de poder elaborar deliciosas pizzas sin salir
                  de tu hogar, reserva nuestra clase PIZZA EN CASA y recibe los ingredientes a domicilio,
                  después conéctate con uno de nuestros docentes y deléitate con los mejores sabores que
                  ofrecemos para ti, puedes escoger entre: Pizza hawaiana, Pollo y champiñón,
                  Margarita (vegetariana) y Especial.
                </p>
                <h3>$ 150.000</h3>
                <div className="clases-container__container-item">
                  <button
                    className="clases-bt"
                    onClick={handleOpen}
                    type="button"
                  >
                    Me interesa esta clase
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <MainContainerActions />
      </section>
      <Footer />
      <Form isOpen={open} isClose={handleClose} formId="FPbptjcN" />
    </>
  );
};

export default Clases;
