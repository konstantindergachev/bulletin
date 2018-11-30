import React from 'react';

import './Backdrop.scss';

const Backdrop = ({open}) => {
    return open ? <div className="backdrop"></div> : ''
};
export default Backdrop;
