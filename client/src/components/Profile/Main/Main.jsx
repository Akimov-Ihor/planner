import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Main.css';
import { useHistory } from 'react-router';
import { constants } from '../../../constants/text.constants';

export const Main = () => {
  const history = useHistory();

  const user = useSelector((state) => state.userData);
  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  });
  return (
    <div className="main_wrapper">
      <div className="main_block">
        <h2>{constants.main.aboutMe}</h2>
        <hr />
        <div className="main_info">
          <div className="main_info_user">
            <div className="main_info_user_photo">
              <img src="https://blacksea7.com/images/avatar2.png" alt="personal_photo" />
            </div>
            <div className="main_info_user_contacts">
              <div>
                <div className="main_titles_info">{constants.main.name}</div>
                {user.name}
              </div>
              <div>
                <div className="main_titles_info">{ constants.main.email}</div>
                {user.email}
              </div>
              <div>
                <div className="main_titles_info">{constants.main.age}</div>
                {user.age}
              </div>
              <div>
                <div className="main_titles_info">{constants.main.gender}</div>
                {user.gender}
              </div>
              <div>
                <div className="main_titles_info">{constants.main.company}</div>
                {user.company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
