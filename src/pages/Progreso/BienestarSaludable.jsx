import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Layout from '../../components/Layout';
import logo from '../../assets/images/compensar_logo.png';
import sit from '../../assets/images/SitAdult.png';
import learn from '../../assets/images/LearnAdult.png';
import cicle from '../../assets/images/CicleAdult.png';
import family from '../../assets/images/FamilyAdult.png';
import learnpar from '../../assets/images/LearnAdultPar.png';
import glof from '../../assets/images/GolfAdult.png';
import romantic from '../../assets/images/RomanticAdult.png';
import dancing from '../../assets/images/DancingAdult.png';
import '../../assets/styles/Progreso.css';
import ProgressBar from '../../components/subcomponents/ProgressRadio';
import MainControlerActions from '../../components/MainControlerActions';

const BienestarSaludable = () => {
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
        <h2 className="progreso__subtitle">Bienestar saludable</h2>
        <div className="progreso__cards">
          { pagina === 1 ? (
            <>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Cuántos minutos al dia te has tomado para estar tranquilo meditando y sin pensar en nada?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">20 Minutos</p>
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
                  <p className="card__textInfo">60 minuots al dia es el tiempo minimo para una rutina de meditación y relajación.</p>
                  <img src={sit} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Cuántas paginas al dia has leido?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">20 Paginas</p>
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
                  <p className="card__textInfo">10 paginas leidas al dia.</p>
                  <img src={learn} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Has aprendido algo nuevo en tu vida que desees compartirme?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">No siempre</p>
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
                  <img src={cicle} alt="" className="card__img" />
                </div>
              </div>
            </>
          ) : null}
          { pagina === 2 ? (
            <>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Cuántos minutos al dia estoy compartirndo con mis familiares que me generan alegria y felicidad?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">60 Minutos</p>
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
                  <p className="card__textInfo">Minimo 60 minutos ideal 180 minutos.</p>
                  <img src={family} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Has compartido tus experiencias o conocimientos con alguna persona?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">Si</p>
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
                  <img src={learnpar} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿ Has participado de actividades de libre esparcimiento como juegos de mesa o concierto de foma individual o grupal?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">Si</p>
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
                  <img src={glof} alt="" className="card__img" />
                </div>
              </div>
            </>
          ) : null}
          { pagina === 3 ? (
            <>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Cuento con personas de confianza con la cual puedo compartir mis emociones y expresar mis sentimientos cuando lo necesite hacer?</p>
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
                  <img src={romantic} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">¿Has realizado caminatas en ambientes naturales como parte de tu rutina diaria para mejoar tu salud física y mental?</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">Si</p>
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
                  <img src={dancing} alt="" className="card__img" />
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className="progreso__navigate">
          <MainControlerActions />
          <Pagination
            className="progreso__paginacion"
            count={3}
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
export default BienestarSaludable;
