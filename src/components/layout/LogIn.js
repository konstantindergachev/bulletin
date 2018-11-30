import React from 'react';
import {Link} from 'react-router-dom';


const Login = ({open}) => {
  return (
    <ul className={`menu ${open ? 'menu__open' : ''}`}>
      <li className="menu__item">
        <Link to="/signup" className="menu__link">Signup</Link>
      </li>
      <li className="menu__item">
        <Link to="/signin" className="menu__link">Login</Link>
      </li>
    </ul>
  );
};
export default Login;