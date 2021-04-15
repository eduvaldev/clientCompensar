import React, { useState } from 'react';
import Alert from '../Alert';
import Form from '../FormPop';

const NotificationsOptions = (props) => {

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  /*  No has diligenciado tu perfil básico. (Toca esta notificación para ir a tu perfil básico).className="icon-profile notifications__icon" */
  { if (!props.style) {
    return (
      <>
        <li className="notifications__item" onClick={handleOpen}>
          <i className={`${props.icon} notifications__icon`} />
          <p className="notification__text">{props.text}</p>
        </li>
        <Form formId={props.formId} isOpen={open} isClose={handleClose} />
      </>
    );
  }
  return (
    <>
      <div className="ProfileOptions">
        <button type="button" onClick={handleOpenAlert} className="inactive-bt">{props.textBtn}</button>
        <p>{props.description}</p>
      </div>
      <Alert isOpen={openAlert} isClose={handleCloseAlert} modalType="alternative" />
    </>
  );
  };
};

export default NotificationsOptions;
