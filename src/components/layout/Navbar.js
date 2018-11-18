import React from 'react';
import Logo from '../logo/Logo';
import Login from './LogIn';
import Logout from './LogOut';

import './Navbar.scss';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <Logo />
        <Login />
        <Logout />
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
