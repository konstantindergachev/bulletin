import React from 'react';
import Logo from '../logo/Logo';
import Login from './LogIn';
import Logout from './LogOut';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar"><Logo /></nav>
      <Login />
      <Logout />
    </React.Fragment>
  );
};

export default Navbar;
