import React, { useState } from 'react';
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
                  <p className="card__textInfo">¿Sabes que es el Índice de Masa Corporal?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">No</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed="100" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <p className="card__resaltado">Recuerda:</p>
                  <p className="card__textInfo">El Indice de Masa Corporal  (IMC) es un número que se calcula con base en el peso y la estatura de la persona y que se utiliza como  herramienta para la detección de posibles problemas de salud de los adultos y evaluar situación nutricional.</p>
                  <img src={healt} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Tengo registro de mis datos de oxigenanción, tensión arterial o glucometria?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">Si</p>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <img src={golas} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Has cosumido todos tus medicamentos en horarios estipulados y recomendados por el personal medico?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">No Siempre</p>
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
                  <p className="card__textInfo">¿Mi plan de vacunación se encuentra al dia? </p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">Si</p>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <img src={triag} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Mis proximas citas de control medico de los programas de promoción de la salud y la prevención de enfermedades son…</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">Cada 30 dias</p>
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
