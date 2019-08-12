import React, { useState, useEffect } from 'react';
import css from './signup.css';
import useForm from '../../custHooks/useForm';
import { postData } from '../../custHooks/crudActions';
import getData from '../../custHooks/getData';

const SignUp = () => {
  const [name, nameChange] = useForm();
  const [pw, pwChange] = useForm();
  const post = postData('http://localhost:3030/data', 
    { 'username':name,'password':pw });
  return (
    <div className= 'center'>
      <form className= 'form' onSubmit = { post }>
        <label htmlFor='username'> Username </label>
          <input id='username' type='text' value = {name} 
            onChange = {nameChange} />
        <label htmlFor='password'> Password </label>
          <input id='password' type='text' value = {pw} 
            onChange = {pwChange} />
          <input type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default SignUp;
