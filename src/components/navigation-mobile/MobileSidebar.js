import React from 'react';
import { connect } from 'react-redux';
import Login from '../layout/LogIn';
import Logout from '../layout/Logout';

const Sidebar = ({ authStatus, initials, open, close }) => {
  return (
    <React.Fragment>
      <section
        className={`sidebar ${open ? 'sidebar__open' : ''}`}
        onClick={close}
      >
        {!authStatus ? <Login /> : <Logout initials={initials} open={open} />}
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
