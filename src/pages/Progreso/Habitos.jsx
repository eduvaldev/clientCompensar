import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import Layout from '../../components/Layout';
import logo from '../../assets/images/compensar_logo.png';
import run from '../../assets/images/RunAdult.png';
import eat from '../../assets/images/EatAdult.png';
import order from '../../assets/images/OrderAdult.png';
import '../../assets/styles/Progreso.css';
import ProgressBar from '../../components/subcomponents/ProgressRadio';
import MainControlerActions from '../../components/MainControlerActions';

const Habitos = () => {
  const { PreguntasHs } = useSelector((state) => state.preguntas);
  return (
    <Layout>
      <section className="progreso">
        <img alt="logo" src={logo} className="progreso__logo" />
        <h1 className="progreso__title">Mi Progreso</h1>
        <h2 className="progreso__subtitle">Habitos saludables</h2>
        <div className="progreso__cards">
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">{PreguntasHs[0].pregunta_id.pregunta}</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">{PreguntasHs[0].respuesta}</p>
                </div>
                <div className="card__texto">
                  <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                  <div className="grafica">
                    <ProgressBar completed={PreguntasHs[0].progreso} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__right">
              <p className="card__resaltado">Recuerda:</p>
              <p className="card__textInfo">{PreguntasHs[0].pregunta_id.textoHelp}</p>
              <img src={run} alt="" className="card__img" />
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">{PreguntasHs[1].pregunta_id.pregunta}</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">{PreguntasHs[1].respuesta}</p>
                </div>
                <div className="card__texto">
                  <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                  <div className="grafica">
                    <ProgressBar completed={PreguntasHs[1].progreso} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__right">
              <p className="card__resaltado">Recuerda:</p>
              <p className="card__textInfo">{PreguntasHs[1].pregunta_id.textoHelp}</p>
              <img src={eat} alt="" className="card__img" />
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">{PreguntasHs[2].pregunta_id.pregunta}</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">{PreguntasHs[2].respuesta}</p>
                </div>
                <div className="card__texto">
                  <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                  <div className="grafica">
                    <ProgressBar completed={PreguntasHs[2].progreso} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__right">
              <p className="card__resaltado">Recuerda:</p>
              <p className="card__textInfo">{PreguntasHs[2].pregunta_id.textoHelp}</p>
              <img src={order} alt="" className="card__img" />
            </div>
          </div>
        </div>
        <div className="progreso__navigate">
          <MainControlerActions />
          <Pagination
            className="progreso__paginacion"
            count={1}
            variant="outlined"
            shape="rounded"
            size="large"
            disabled
          />
        </div>
      </section>
    </Layout>
  );
};
export default Habitos;
