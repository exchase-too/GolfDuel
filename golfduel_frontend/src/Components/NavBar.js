import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar' >
      <span>
        <img src={'https://i.imgur.com/IFI6xN4.png'} style={{width:"200px", align:"right"}} alt='Golf Duel Logo'></img>
      </span>

      <span style={{display:"inline-block", textAlign:"right", padding:'10px'}}>
          <NavLink exact to="/">Home</NavLink>
      </span>
      <span style={{display:"inline-block", textAlign:"right", padding:'10px'}}>
        <NavLink exact to="/account">Account Details</NavLink>
      </span>
      <span style={{display:"inline-block", textAlign:"right", padding:'10px'}}>
        <NavLink exact to="/xxx">Logout</NavLink>
      </span>

      <hr></hr>
    </div>
  );
};

export default NavBar;