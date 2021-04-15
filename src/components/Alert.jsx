/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/Form.css';
import AlertData from '../data/alert_data.json';

const Form = ({ isOpen, isClose, modalType }) => {
  if (!isOpen) {
    return null;
  };

  const [title, setTitle] = useState();
  const [paragraph, setParagraph] = useState();

  useEffect(() => {
    if (modalType === 'inactive-btn') {
      // eslint-disable-next-line no-unused-vars
      setTitle(AlertData.disabledAlert.title);
      setParagraph(AlertData.disabledAlert.paragraph);
    } else if (modalType === 'alternative') {
      setTitle(AlertData.alternative.title);
      setParagraph(AlertData.alternative.paragraph);
    } else {
      setTitle(AlertData.congratsAlert.title);
      setParagraph(AlertData.congratsAlert.paragraph);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="alert-container">
      <div className="alert-container__content">
        <h1>{title}</h1>
        <p>
          <br />
          {paragraph}
        </p>
        <button type="button" onClick={isClose} className="close-alert">Aceptar</button>
      </div>
    </div>, document.getElementById('pop'),
  );
};

export default Form;

