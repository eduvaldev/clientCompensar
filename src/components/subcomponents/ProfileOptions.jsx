import React, { useState } from 'react';
import '../../assets/styles/subcomponents/ProfileOptions.css';
import Alert from '../Alert';
import Form from '../FormPop';

function ProfileOptions(props) {

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

  { if (!props.style) {
    return (
      <>
        <div className="ProfileOptions">
          <button type="button" onClick={handleOpen}>{props.textBtn}</button>
          <p>{props.description}</p>
        </div>
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

export default ProfileOptions;
