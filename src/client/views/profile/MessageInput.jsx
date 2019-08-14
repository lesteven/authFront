import React, { useEffect } from 'react';
import useForm from '../../custHooks/useForm';
import { useSelector } from 'react-redux';

const MessageInput = ( { socket }) => {
  const user = useSelector(state => state.toUser);
  const [message, onChange] = useForm();

  const onEnter = (e) => {
    if (e.key == 'Enter') {
      console.log(user, message);
      console.log('user pressed enter');
      socket.emit('chat message', message);
    }
  }
  socket.on('send', (data) => {
    console.log(data);
  })
  return (
    <input type = 'text' className = 'input-msg' 
      onChange = { onChange } 
      onKeyDown = { onEnter }
      placeholder = 'Type Message'/>
  )
}

export default MessageInput;
