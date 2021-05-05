import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userNotificacionesGet } from '../redux/Notificaciones/actions';
import '../assets/styles/Notifications.css';
import NotificationsOptions from './subcomponents/NotificationsOptions';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notBasico, notRiesgo, notReto } = useSelector((state) => state.notificaciones);
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const token = localStorage.getItem('@compensar:user');
  const funcNumber = () => {
    if (notBasico) {
      setNumber(number + 1);
    } else if (notRiesgo) {
      setNumber(number + 1);
    } else if (notReto && notReto.active) {
      setNumber(number + 1);
    }
  };
  useEffect(() => {
    dispatch(userNotificacionesGet(token));
    funcNumber();
  }, [token]);
  return (
    <div className="notifications">
      <div className="notifications__bell" onClick={() => setOpen(!open)} role="button" tabIndex="0">
        <i className="icon-bell" />
      </div>
      <div className="notifications__alerta">
        <p className="notifications__numero">{number}</p>
      </div>
      <ul className={open ? ('notifications__conten notifications__conten--active') : ('notifications__conten')}>
        <p className="notifications__title">Notificaciones</p>
        { notBasico ? (
          <>
            <NotificationsOptions
              icon="icon-profile"
              text="No has diligenciado tu perfil básico. (Toca esta notificación para ir a tu perfil básico)."
              formId="mIzTanfz"
            />
          </>
        ) : null }
        { notRiesgo ? (
          <>
            <NotificationsOptions
              icon="icon-aid-kit"
              text="No has diligenciado tu perfil de riesgo. (Toca esta notificacion para ir a tu perfil de riesgo)."
              formId="aqBkYqrh"
            />
          </>
        ) : null }
        { notReto !== null && notReto.active && notReto.notificaciones_id.subtype === 'Msaludable' ? (
          <>
            <NotificationsOptions
              icon="icon-stats-dots"
              text="Aceptó el reto de “Mayor saludable” y no has diligenciado tu actividad diaria. (Toca esta notificación para registrar tu actividad diaria)."
              formId="D1QfAiHg"
            />
          </>
        ) : null }
      </ul>
    </div>
  );
};

export default Notifications;
