import React, { useState, useEffect } from 'react';
import css from './signup.css';
import useForm from '../../custHooks/useForm';
import { usePost } from '../../custHooks/crudReducer';
import { useDispatch } from 'react-redux';
import { loginAC } from '../../redux/user';
import { useSelector } from 'react-redux';

const SignUp = () => {
  const [name, nameChange] = useForm();
  const [pw, pwChange] = useForm();

  const [state, post] = usePost('http://localhost:3030/api/users', 
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
      <>
        <h2 className = 'auth-header'> Sign Up </h2>
        { state.errorMsg != ''? 
            <p className = 'err'> { state.errorMsg } </p> : null }
        <form className = 'form' onSubmit = { post }>
          <label htmlFor = 'username'> Username </label>
            <input id='username' type='text' value = {name} 
              onChange = {nameChange} />
          <label htmlFor = 'password'> Password </label>
            <input id ='password' type='password' value = {pw} 
              onChange = {pwChange} />
            <input type ='submit' value='Submit'/>
        </form>
      </>
    )
  }
}

export default SignUp;
