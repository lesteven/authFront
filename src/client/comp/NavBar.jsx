import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import css from './css/nav.css';
import { getData } from '../custHooks/getData';
import { useDispatch, useSelector } from 'react-redux';
import { loginAC } from '../redux/user';

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async() => {
      const json = await getData('http://localhost:3030/api/sessions');
      dispatch(loginAC(json));
    }
    get();
  }, [])

  const user = useSelector(state => state.user);
  let filteredRoutes = routes.slice(0, routes.length-1);

  if (user.username != '') {
    filteredRoutes = filteredRoutes.filter(e => {
      return e.path != '/signup' && e.path != '/login'
    });
  } else {
    filteredRoutes = filteredRoutes.filter(e => e.path != '/prof');
  }

  return (
    <nav className = 'nav-bar'>
      {filteredRoutes.map(e => 
        <Link to = {e.path} key = {e.path}> {e.title} </Link>
      )}
      { user.username != '' ? 
          <Link to = {`/prof/${user.username}`} > Profile </Link> : null }
    </nav>
  )
}


export default NavBar;
