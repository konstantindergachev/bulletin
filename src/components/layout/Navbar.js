import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import Login from './LogIn';
import Logout from './LogOut';

import './Navbar.scss';

const Navbar = ({ authStatus, initials }) => {
  return (
      <nav className="navbar">
        <Link to="/" className="logo__link">
          <Logo />
        </Link>
        {!authStatus ? <Logout initials={initials} /> : <Login />}
      </nav>
  );
};

const mapStateToProps = state => ({
  authStatus: state.firebase.profile.isEmpty,
  initials: state.firebase.profile.initials,
});

export default connect(
  mapStateToProps,
  null,
)(Navbar);
