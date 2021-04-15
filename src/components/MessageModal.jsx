import React from 'react';
import ReactDOM from 'react-dom';

function MessageModal({ isOpen, isClose }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="MessageModal__Container">
      <div className="__MessageContainer">
        <button type="button" onClick={props.onClose} className="__CloseBtn"> x </button>
        <h3 className="__Message">Aqí va el mensaje</h3>
        <button type="button" onClick={props.onClose}>Aceptar</button>
      </div>
    </div>,
    document.getElementById('pop'),
  );
}

export default MessageModal;
