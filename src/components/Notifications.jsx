import React, { useState } from 'react';
import '../assets/styles/Notifications.css';
import NotificationsOptions from './subcomponents/NotificationsOptions';

const Notifications = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="notifications">
      <div className="notifications__bell" onClick={() => setOpen(!open)} role="button" tabIndex="0">
        <i className="icon-bell" />
      </div>
      <div className="notifications__alerta">
        <p className="notifications__numero">3</p>
      </div>
      <ul className={open ? ('notifications__conten notifications__conten--active') : ('notifications__conten')}>
        <p className="notifications__title">Notificaciones</p>
        <NotificationsOptions
          icon="icon-profile"
          text="No has diligenciado tu perfil básico. (Toca esta notificación para ir a tu perfil básico)."
          formId="mIzTanfz"
        />
        <NotificationsOptions
          icon="icon-aid-kit"
          text="No has diligenciado tu perfil de riesgo. (Toca esta notificacion para ir a tu perfil de riesgo)."
          formId="aqBkYqrh"
        />
        <NotificationsOptions
          icon="icon-stats-dots"
          text="Aceptó el reto de “Mayor saludable” y no has diligenciado tu actividad diaria. (Toca esta notificación para registrar tu actividad diaria)."
          formId="D1QfAiHg"
        />
      </ul>
    </div>
  );
};

export default Notifications;
