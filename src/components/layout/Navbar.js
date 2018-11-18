import React from 'react';
import Logo from '../logo/Logo';
import Login from './LogIn';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar"><Logo /></nav>
      <Login />
    </React.Fragment>
  );
};

export default Navbar;
