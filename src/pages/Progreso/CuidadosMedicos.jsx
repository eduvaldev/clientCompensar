import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import Layout from '../../components/Layout';
import logo from '../../assets/images/compensar_logo.png';
import healt from '../../assets/images/HealtAdult.png';
import golas from '../../assets/images/GoalsAdult.png';
import drog from '../../assets/images/DrogAdult.png';
import triag from '../../assets/images/TriagAdult.png';
import old from '../../assets/images/OldGroup.png';
import '../../assets/styles/Progreso.css';
import ProgressBar from '../../components/subcomponents/ProgressRadio';
import MainControlerActions from '../../components/MainControlerActions';

const CuidadosMedicos = () => {
  const { PreguntasCm } = useSelector((state) => state.preguntas);
  const [pagina, setPagina] = useState(1);
  const handleChange = (event, value) => {
    console.log(value);
    setPagina(value);
  };
  return (
    <Layout>
      <section className="progreso">
        <img alt="logo" src={logo} className="progreso__logo" />
        <h1 className="progreso__title">Mi Progreso</h1>
        <h2 className="progreso__subtitle">Mis cuidados medicos</h2>
        <div className="progreso__cards">
          { pagina === 1 ? (
            <>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">{PreguntasCm[0].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasCm[0].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasCm[0].progreso} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <p className="card__resaltado">Recuerda:</p>
                  <p className="card__textInfo">{PreguntasCm[0].pregunta_id.textoHelp}</p>
                  <img src={healt} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">{PreguntasCm[1].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasCm[1].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasCm[1].progreso} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <img src={golas} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">{PreguntasCm[2].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasCm[2].respuesta}</p>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <img src={drog} alt="" className="card__img" />
                </div>
              </div>
            </>
          ) : null}
          { pagina === 2 ? (
            <>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">{PreguntasCm[3].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasCm[3].respuesta}</p>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <img src={triag} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">{PreguntasCm[4].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasCm[4].respuesta}</p>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <img src={old} alt="" className="card__img" />
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className="progreso__navigate">
          <MainControlerActions />
          <Pagination
            className="progreso__paginacion"
            count={2}
            variant="outlined"
            shape="rounded"
            size="large"
            onChange={handleChange}
          />
        </div>
      </section>
    </Layout>
  );
};
export default CuidadosMedicos;
