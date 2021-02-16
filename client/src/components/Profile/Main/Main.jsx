import React from 'react';
import { useSelector } from 'react-redux';

import './Main.css';

export const Main = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="main_wrapper">
      <div className="main_block">
        <h2>About me</h2>
        <hr />
        <div className="main_info">
          <div className="main_info_user">
            <div className="main_info_user_photo">
              <img src="https://blacksea7.com/images/avatar2.png" alt="personal_photo" />
            </div>
            <div className="main_info_user_contacts">
              <div>
                Name:
                {user.name}
              </div>
              <div>
                Email:
                {user.email}
              </div>
              <div>
                Number:
                {user.number}
              </div>
            </div>
          </div>
          <div className="main_info_user_status">
            <div>
              Status:
              {user.status}
            </div>
            <div>
              Personal Status:
              {user.personalStatus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
