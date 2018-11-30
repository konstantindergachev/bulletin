import React from 'react';
import { connect } from 'react-redux';
import Login from '../layout/LogIn';
import Logout from '../layout/Logout';
import Backdrop from './Backdrop';

import './MobileSidebar.scss';

const Sidebar = ({ authStatus, initials, open, close }) => {
  return (
    <React.Fragment>
      <Backdrop open={open} />
      <section
        className={`sidebar ${open ? 'sidebar__open' : ''}`}
        onClick={close}
      >
        {!authStatus ? (
          <Logout initials={initials} open={open} />
        ) : (
          <Login open={open} />
        )}
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  authStatus: state.firebase.profile.isEmpty,
  initials: state.firebase.profile.initials,
});
export default connect(
  mapStateToProps,
  null,
)(Sidebar);
