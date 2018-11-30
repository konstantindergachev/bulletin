import React from 'react';
import { connect } from 'react-redux';
import Login from '../layout/LogIn';
import Logout from '../layout/Logout';

const Sidebar = ({ authStatus, initials }) => {
  return (
    <React.Fragment>
      <section className="sidebar">
        {!authStatus ? <Login /> : <Logout initials={initials} />}
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