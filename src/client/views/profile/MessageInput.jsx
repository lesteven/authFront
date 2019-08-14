import React from 'react';
import io from 'socket.io-client';
import useForm from '../../custHooks/useForm';
import { useSelector } from 'react-redux';

const MessageInput = () => {
  const user = useSelector(state => state.toUser);
  const socket = io('http://localhost:3030');
  const [message, onChange] = useForm();
  console.log(user, message);
  return (
    <input type = 'text' className = 'input-msg' 
      onChange = { onChange } 
      placeholder = 'Type Message'/>
  )
}

export default MessageInput;
