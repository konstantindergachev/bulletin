import React from 'react';
import {Link} from 'react-router-dom';

const Logout = () => {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link to="/create" className="menu__item">New Project</Link>
      </li>
      <li className="menu__item">
        LogOut
      </li>
    </ul>
  );
};

export default Logout;
