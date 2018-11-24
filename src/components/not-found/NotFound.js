import React from 'react';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="page__not-found">
            <h1 className="error__text">404 Page</h1>
            <p>Sorry. Page that you looking for does'n exist</p>
        </div>
    );
};
export default NotFound;