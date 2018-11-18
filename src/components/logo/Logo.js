import React from 'react';
import image from '../../img/sprite.svg';
const Logo = () => (
  <svg className="svg__logo">
    <use xlinkHref={`${image}#logo`} />
  </svg>
);
export default Logo;
