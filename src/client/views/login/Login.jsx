import React, { useState, useEffect } from 'react';
import useForm from '../../custHooks/useForm';
import { usePost } from '../../custHooks/crudReducer';
import { useDispatch } from 'react-redux';
import { loginAC } from '../../redux/user';
import { useSelector } from 'react-redux';

const Login = () => {
  const [name, nameChange] = useForm();
  const [pw, pwChange] = useForm();

  const [state, post] = usePost('http://localhost:3030/api/sessions', 
    { 'username':name,'password':pw });
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.data) {
      console.log(state); 
      dispatch(loginAC(state));
    }
  }, [state.data]);

  const user = useSelector(state => state.user);

  if (state.data || user.username != '') {
    return (
      <p> You are logged in </p>
    )
  } else {
    return (
      <div className= 'center'>
        <h2> Log In </h2>
        { state.errorMsg != ''? 
            <p className = 'err'> { state.errorMsg } </p> : null }
        <form className= 'form' onSubmit = { post }>
          <label htmlFor='username'> Username </label>
            <input id='username' type='text' value = {name} 
              onChange = {nameChange} />
          <label htmlFor='password'> Password </label>
            <input id='password' type='password' value = {pw} 
              onChange = {pwChange} />
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default Login;
