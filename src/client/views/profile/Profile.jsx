import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDelete } from '../../custHooks/crudReducer';
import { useDispatch } from 'react-redux';
import { logoutAC } from '../../redux/user';
import Chat from './Chat';
import Search from './Search';
import css from './profile.css';

const Profile = (props) => {

  const user = useSelector(state => state.user);
  const param = props.match.params.id;

  const [state, logout] =  
    useDelete(`http://localhost:3030/api/sessions/${param}`);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.data) {
      dispatch(logoutAC());
    }
  }, [state.data]);
  return (
    <>
      { user.username == param? 
          <div>
            <div className = 'profile-top'>
              <Search />
              <button onClick = { logout }> Log out </button>
            </div>
            <Chat />
          </div>
          :
          <p> another account</p> }
    </>
  )
}

export default Profile;
