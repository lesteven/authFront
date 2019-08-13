import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDelete } from '../../custHooks/crudReducer';
import { useDispatch } from 'react-redux';
import { logoutAC } from '../../redux/user';

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
    <div className = 'center'> 
      { user.username == param? 
          <div>
            <button onClick = { logout }> Log out </button>
            <p> Your account </p> 
          </div>
          :
          <p> another account</p> }
    </div>
  )
}

export default Profile;
