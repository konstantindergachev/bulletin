import React from 'react';

import './Sandwich.scss';

const Sandwich = ({ togglerClick, open }) => {
  return (
    <div
      onClick={togglerClick}
      className={`sandwich ${open ? 'sandwich__active' : ''}`}
    >
      <div />
      <div />
      <div />
    </div>
  );
};
export default Sandwich;
