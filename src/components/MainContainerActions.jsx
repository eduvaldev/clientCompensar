import React from 'react';
import '../assets/styles/MainContainerActions.css';
import { Link, useHistory } from 'react-router-dom';

function MainContainerActions({ addQueryBtn }) {

  const history = useHistory();
  const goBack = () => history.goBack();

  if (addQueryBtn) {
    return (
      <div className="main-container__actions">
        <button type="button" onClick={goBack}>
          <i className="icon-arrow-left" />
          Atrás
        </button>
        <Link to="/preguntas">
          <button type="button" id="QuestionsBtn">Preguntas</button>
        </Link>
        <Link to="/inicio">
          <button type="button">
            <i className="icon-home" />
            Inicio
          </button>
        </Link>
        <button
          type="button"
          onClick={() => {
            const audio = document.getElementById('media');
            if (audio.paused) {
              audio.play();
            } else {
              audio.pause();
            }
          }}
        >
          <i className="icon-play3" />
          Reproducir / Pausar
        </button>
        <button
          type="button"
          className="repeat-bt"
          onClick={() => {
            const audio = document.getElementById('media');
            audio.play();
          }}
        >
          <i className="icon-spinner11" />
          Repetir
        </button>
      </div>
    );
  }
  return (
    <div className="main-container__actions">
      <button type="button" onClick={goBack}>
        <i className="icon-arrow-left" />
        Atrás
      </button>
      <Link to="/inicio">
        <button type="button">
          <i className="icon-home" />
          Inicio
        </button>
      </Link>
      <button
        type="button"
        onClick={() => {
          const audio = document.getElementById('media');
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }}
      >
        <i className="icon-play3" />
        Reproducir / Pausar
      </button>
      <button
        type="button"
        className="repeat-bt"
        onClick={() => {
          const audio = document.getElementById('media');
          audio.play();
        }}
      >
        <i className="icon-spinner11" />
        Repetir
      </button>
    </div>
  );

}

export default MainContainerActions;
