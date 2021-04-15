import React from 'react';
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
  return (
    <Layout>
      <section className="progreso">
        <img alt="logo" src={logo} className="progreso__logo" />
        <h1 className="progreso__title">Mi Progreso</h1>
        <h2 className="progreso__subtitle">Cuidado personal</h2>
        <div className="progreso__cards">
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">¿Numero de veces y tiempo que utilizó para mi limpieza dental diariamente?-</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">3 veces</p>
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
              <p className="card__textInfo">3 veces al dia limpieza dental.</p>
              <img src={dental} alt="" className="card__img" />
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">¿Cuándo realizas actividades laborales o en el hogar tomas las medidas necesarias para evitar algun tipo de accidente o lesión física?</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">No Siempre</p>
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
              <img src={jardin} alt="" className="card__img" />
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">¿Prevengo accidentes en el hogar evitando conductas inapropiadas?</p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">Siempre</p>
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
