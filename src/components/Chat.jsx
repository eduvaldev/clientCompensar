import React from 'react';
import Anita from '../assets/images/Anita.png';
import '../assets/styles/Chat.css';

const Chat = (props) => {

  return (
    <>
      <div className="chat">
        <div className="chat-avatar">
          <img src={Anita} alt="anita-chat" />
          <h1>Anita</h1>
        </div>
        {props.display === '' && (props.text1)}
        {props.display === 'first' && (props.text1)}
        {props.display === 'second' && (props.text2)}
        {props.display === 'dropdown' && (props.dropdown)}
      </div>
    </>

  );
};

export default Chat;
