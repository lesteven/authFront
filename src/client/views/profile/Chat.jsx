import React from 'react';
import css from './chat.css';
import ToUser from './ToUser';
import MessageInput from './MessageInput';

const Chat = () => {
  const arr = [1,2,3,4];
  const msg = arr.map(e => <p key = {e}> {e}</p>);
  return (
    <section className = 'chat'>
      <div>
        <h3> Friends </h3>
      </div>
      <div className = 'messages'>
        <h3> Messages </h3>
        <div className = 'chat-box'>
          <ToUser/>
            { msg }
          <MessageInput/>
        </div>
      </div>
    </section>
  )
}

export default Chat;
