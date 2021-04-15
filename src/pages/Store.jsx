/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/style-prop-object */
import React from 'react';
import logo from '../assets/images/compensar_logo.png';
import '../assets/styles/Store.css';
import Chat from '../components/Chat';
import Layout from '../components/Layout';
import MainContainerActions from '../components/MainContainerActions';

function Store(props) {
  return (
    <Layout>
      <section className="main-container">
        <audio id="media" src="" autoPlay={false} />
        <div className="containers-header">
          <img alt="logoMain" src={logo} className="logoMain" />
          <h1>Bienestar {' '}<br /> integral</h1>
        </div>
        <div className="main-container__content">
          <Chat display="" text1={<p>Hola, soy Anita, tu guía personal.</p>} />

          <div className="home-container__list">
            <ul>
              <li className="home-container__list-item">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/yQRepnqflcI"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <h2>Tienda Compensar</h2>
              </li>
              <li className="home-container__list-item">

                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                  cuando un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                </p>

              </li>
              <li className="corp-container__dislike">
                <a href="https://www.tiendacompensar.com/adulto-mayor/category/adultoMayor" target="about_blanck">
                  <button type="button">Ir a tienda</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <MainContainerActions addQueryBtn={true} />
      </section>
    </Layout>
  );
}

export default Store;
