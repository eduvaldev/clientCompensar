import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/Form.css';

const Form = ({ isOpen, isClose, formId }) => {
  const url = `https://form.typeform.com/to/${formId}?typeform-medium=embed-snippet`;
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="form-container" onClick={isClose} role="button" tabIndex="0">
      <iframe title={url} src={url} />
      <button type="button" onClick={isClose} className="close-bt">
        <i className="icon-cross1" />
        Cerrar
      </button>
    </div>, document.getElementById('pop'),
  );
};

export default Form;
