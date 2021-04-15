import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import ArrowDown from '../assets/images/arrow-down.png';
import logo from '../assets/images/compensar_logo.png';
import '../assets/styles/Login.css';
import { ErrorMessage } from '../components/ErrorMessage';
import Layout from '../components/Layout';
import { loginRequesting } from '../redux/Auth/actions';

/*
ReactGA.pageview(window.location.pathname + window.location.search);*/

const Home = () => {
  const { requesting, error } = useSelector((state) => state.auth);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const loginActionSubmit = (_data) => {
    const data = {
      TIPODOCUMENTO: _data.document_type,
      NUMERODOCUMENTO: _data.identification_number,
      CONTRASENA: _data.password,
    };
    console.log(data);
    dispatch(loginRequesting(data));
  };

  return (
    <Layout removeHeader>
      <section style={{ maxWidth: '500px', margin: 'auto' }} className="login-container">
        <img src={logo} alt="compensarLogo" />
        <h1 className="__title">
          Bienvenido a Mayor Compensar
        </h1>
        <form className="login-container__input" onSubmit={handleSubmit(loginActionSubmit)}>
          <p>Ingresa tu tipo de identificación</p>
          {errors.document_type && errors.firstName.type === 'required' && (
            <p className="error-message">Seleccione su tipo de identificación</p>
          )}

          <div className="identification_type">
            <select name="document_type" ref={register({ required: true })}>
              <option value="CC">Cédula de ciudadania</option>
            </select>
            <img src={ArrowDown} alt="" />
          </div>
          <p> Ingresa tu número de identificación</p>
          {errors.identification_number && <p className="error-message">Este campo es requerido</p>}
          <input
            name="identification_number"
            ref={register({ required: true })}
          />
          {typeof error === 'string' && <ErrorMessage message={error} />}
          <p>Ingresa tu contraseña</p>
          {errors.password && <p className="error-message">Este campo es requerido</p>}
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
          />

          {!requesting && (
            <button type="submit" className="login-container__button">
              <ClipLoader size={20} color="#ffffff" loading={requesting} />
              Empezar
            </button>
          ) }
        </form>
      </section>
    </Layout>

  );
};

export default Home;
