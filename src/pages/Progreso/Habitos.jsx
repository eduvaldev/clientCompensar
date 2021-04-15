import React from 'react';
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
  return (
    <Layout>
      <section className="progreso">
        <img alt="logo" src={logo} className="progreso__logo" />
        <h1 className="progreso__title">Mi Progreso</h1>
        <h2 className="progreso__subtitle">Habitos saludables</h2>
        <div className="progreso__cards">
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">
                ¿Cuántos minutos al dia has destinado para realizar actividades como caminar, subir o bajar escaleras o en una rutina de ejercicio programado?
              </p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">30 minutos</p>
                </div>
                <div className="card__texto">
                  <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                  <div className="grafica">
                    <ProgressBar completed="75" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__right">
              <p className="card__resaltado">Recuerda:</p>
              <p className="card__textInfo">
                Tiempo de Actividad Física o Ejercicio entre 30 a 45 min al dia.
              </p>
              <img src={run} alt="" className="card__img" />
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">
                ¿Cuántas porciones de frutas, verduras y proteina has consumido en el dia?
              </p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">2 porciones</p>
                </div>
                <div className="card__texto">
                  <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                  <div className="grafica">
                    <ProgressBar completed="50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__right">
              <p className="card__resaltado">Recuerda:</p>
              <p className="card__textInfo">
                Lo ideal son 5 porciones de frutas y verduras de los diferentes colores que equivaldrian a 400 gr aproximadamente. De proteina los especialistas recomiendan 0.8 gr por kilogramo de peso corporal si no existen ninguna restricción que equivaldria a 3 porciones.
              </p>
              <img src={eat} alt="" className="card__img" />
            </div>
          </div>
          <div className="card">
            <div className="card__left">
              <p className="card__textInfo">
                ¿Cuántos vasos de agua has consumido?
              </p>
              <div className="card__respuesta">
                <div className="card__texto">
                  <p className="card__resaltado">Respuesta</p>
                  <p className="card__parrafo">2 Vasos de agua</p>
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
              <p className="card__textInfo">
                Ideal consumir minimo 6 vasos de agua y lo ideal 8 teniendo en cuenta las recomendaciones del personal medico especializado.
              </p>
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
