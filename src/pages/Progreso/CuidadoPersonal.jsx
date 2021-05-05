import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import Layout from '../../components/Layout';
import logo from '../../assets/images/compensar_logo.png';
import dental from '../../assets/images/DentalImg.png';
import jardin from '../../assets/images/JardinImg.png';
import par from '../../assets/images/AdulPar.png';
import '../../assets/styles/Progreso.css';
import ProgressBar from '../../components/subcomponents/ProgressRadio';
import MainControlerActions from '../../components/MainControlerActions';

const CuidadoPersonal = () => {
  const { PreguntasCp } = useSelector((state) => state.preguntas);
  return (
    <Layout>
      <section className="progreso">
        <img alt="logo" src={logo} className="progreso__logo" />
        <h1 className="progreso__title">Mi Progreso</h1>
        <h2 className="progreso__subtitle">Cuidado personal</h2>
        <div className="progreso__cards">
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">{PreguntasCp[0].pregunta_id.pregunta}</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">{PreguntasCp[0].respuesta}</p>
                </div>
                <div className="card__texto">
                  <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                  <div className="grafica">
                    <ProgressBar completed={PreguntasCp[0].progreso} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__right">
              <p className="card__resaltado">Recuerda:</p>
              <p className="card__textInfo">{PreguntasCp[1].pregunta_id.textoHelp}</p>
              <img src={dental} alt="" className="card__img" />
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">{PreguntasCp[1].pregunta_id.pregunta}</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">{PreguntasCp[1].respuesta}</p>
                </div>
                <div className="card__texto">
                  <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                  <div className="grafica">
                    <ProgressBar completed={PreguntasCp[1].progreso} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__right">
              <img src={jardin} alt="" className="card__img" />
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">{PreguntasCp[2].pregunta_id.pregunta}</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">{PreguntasCp[2].respuesta}</p>
                </div>
                <div className="card__texto">
                  <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                  <div className="grafica">
                    <ProgressBar completed={PreguntasCp[2].progreso} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__right">
              <img src={par} alt="" className="card__img" />
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
export default CuidadoPersonal;
