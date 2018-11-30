import React from 'react';
import Login from '../layout/LogIn';
import Logout from '../layout/Logout';

const Sidebar = () => {
  return (
    <React.Fragment>
      <section className="sidebar">
        {!authStatus ? (
          <Login />
        ) : (
          <Logout />
        )}
      </section>
    </React.Fragment>
  );
};
export default Sidebar;
