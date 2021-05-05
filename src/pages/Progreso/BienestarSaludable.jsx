import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  const { PreguntasBs } = useSelector((state) => state.preguntas);
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
                  <p className="card__textInfo">{PreguntasBs[0].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasBs[0].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasBs[0].progreso} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <p className="card__resaltado">Recuerda:</p>
                  <p className="card__textInfo">{PreguntasBs[0].pregunta_id.textoHelp}</p>
                  <img src={sit} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">{PreguntasBs[1].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasBs[1].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasBs[1].progreso} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <p className="card__resaltado">Recuerda:</p>
                  <p className="card__textInfo">{PreguntasBs[1].pregunta_id.textoHelp}</p>
                  <img src={learn} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">{PreguntasBs[2].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasBs[2].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasBs[2].progreso} />
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
                  <p className="card__textInfo">{PreguntasBs[3].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasBs[3].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasBs[3].progreso} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__right">
                  <p className="card__resaltado">Recuerda:</p>
                  <p className="card__textInfo">{PreguntasBs[3].pregunta_id.textoHelp}</p>
                  <img src={family} alt="" className="card__img" />
                </div>
              </div>
              <div className="card">
                <div className="card__left">
                  <p className="card__textInfo">{PreguntasBs[4].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasBs[4].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasBs[4].progreso} />
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
                  <p className="card__textInfo">{PreguntasBs[5].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasBs[5].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasBs[5].progreso} />
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
                  <p className="card__textInfo">{PreguntasBs[6].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasBs[6].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasBs[6].progreso} />
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
                  <p className="card__textInfo">{PreguntasBs[7].pregunta_id.pregunta}</p>
                  <div className="card__respuesta">
                    <div className="card__texto">
                      <p className="card__resaltado">Respuesta</p>
                      <p className="card__parrafo">{PreguntasBs[7].respuesta}</p>
                    </div>
                    <div className="card__texto">
                      <p className="card__resaltado card__resaltado--progreso">Progreso</p>
                      <div className="grafica">
                        <ProgressBar completed={PreguntasBs[7].progreso} />
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
