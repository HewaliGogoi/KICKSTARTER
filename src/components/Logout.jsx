import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Logout.css';


const Logout = () => {

    const user = useSelector(user)
    const dispatch = useDispatch();
    const handleLogout = (e) =>{
        e.preventDefault();

        dispatch(Logout())
    }
  return (
    <div className='logout'>
        <h1>Welcome <span className='user_name'>{user.name}</span></h1>
        <button className='logout_button' onClick={(e) => handleLogout(e)}>Logout</button>

    </div>
  )
}

export default Logout;