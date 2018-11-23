import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { firebaseConnect } from 'react-redux-firebase';

const Logout = ({ signOut, firebase, history,  initials }) => {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link to="/create" className="menu__link">
          New Project
        </Link>
      </li>
      <li className="menu__item">
        <a className="menu__link" onClick={() => signOut(firebase, history)}>
          LogOut
        </a>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="/" className="btn btn__circle">
          {initials}
        </Link>
      </li>
    </ul>
  );
};

export default compose(
  firebaseConnect(),
  connect(
    null,
    { signOut },
  ),
)(withRouter(Logout));
