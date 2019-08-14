import React from 'react';
import css from './chat.css';

const Chat = () => {

  return (
    <section className = 'chat'>
      <div>
        <h3> Friends </h3>
        <p> hello </p>
        <p> hello </p>
      </div>
      <div className = 'messages'>
        <h3> Messages </h3>
        <div className = 'chat-box'>
          <input type = 'text' placeholder = 'User'/>
          <div>
          </div>
          <input type = 'text' className = 'input-msg' 
            placeholder = 'Type Message'/>
        </div>
      </div>
    </section>
  )
}

export default Chat;
