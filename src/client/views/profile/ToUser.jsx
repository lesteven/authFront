import React from 'react';
import { useDispatch } from 'react-redux';
import { inputAC } from '../../redux/toUser';
import { useSelector } from 'react-redux';

const ToUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.toUser);
  console.log(user);
  const onChange = (e) => {
    dispatch(inputAC(e.target.value));
  }
  return (
    <input type = 'text' 
      value = { user }
      onChange = { onChange }
      placeholder = 'User'/>
  )
}

export default ToUser;
