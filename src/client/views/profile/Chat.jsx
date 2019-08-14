import React from 'react';
import css from './chat.css';

const Chat = () => {

  return (
    <div className = 'chat'>
      <div>
        <h3> Friends </h3>
        <p> hello </p>
        <p> hello </p>
      </div>
      <div className = 'messages'>
        <h3> Messages </h3>
        <div>
          <input type='text'/>
        </div>
      </div>
    </div>
  )
}

export default Chat;
