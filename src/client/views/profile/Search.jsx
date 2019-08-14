import React, { useEffect } from 'react';
import useForm from '../../custHooks/useForm';
import { usePost } from '../../custHooks/crudReducer';
import css from './search.css';

const Search = () => {
  const [name, nameChange] = useForm();
  const [state, post] = usePost('http://localhost:3030/api/search', 
    { 'username':name });
  return (
    <div className = 'search-wrap'>
    <form  onSubmit = { post }>
      <input type='text' onChange = { nameChange }
        placeholder='Search Users' />
    </form>
      <div className = 'search-results'>
      { state.data && name != ''? 
          state.data.map(e => <p key = {e}> { e } </p>) : null }
      </div>
    </div>
  )
}

export default Search;
