import React from 'react';
import moment from 'moment';

import './Notifications.scss';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <span className="notifications__title">Notifications</span>
      <ul className="notifications__list">
        {notifications &&
          notifications.map(notification => (
            <li className="notifications__item" key={notification.id}>
              <span className="notifications__author">{notification.user} </span>
              <span className="notifications__content">{notification.content} </span>
              <span className="notifications__time">
                {moment(notification.time.toDate()).fromNow()}{' '}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Notifications;
