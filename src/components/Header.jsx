import React from 'react';
import { Link } from 'react-router-dom';
//import IconProfile from '../assets/icons/Icon-profile.png';
import Notifications from './Notifications';
import '../assets/styles/Header.css';

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('@compensar:user');
    localStorage.removeItem('@compensar:identification');
    window.location.href = '/';
  };

  return (
    <header className="Header">
      <h1>
        <i className=" icon-user-check" />
        Mayor Compensar
      </h1>
      <nav className="nav-container">
        <Link to="/inicio">
          <button type="button">
            <i className="icon-home" />
            Inicio
          </button>
        </Link>
        <Link to="/profile">
          <button type="button">
            <i className="icon-user" />
            Mi Perfil
          </button>
        </Link>
        <Link to="/progreso">
          <button type="button">
            <i className="icon-pie-chart" />
            Mi progreso
          </button>
        </Link>
        <Notifications />
        <button type="button" onClick={handleLogout}>
          <i className="icon-cross" />
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
};
export default Header;
