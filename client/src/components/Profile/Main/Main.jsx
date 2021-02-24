import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Main.css';
import { useHistory } from 'react-router';

export const Main = () => {
  const history = useHistory();

  const user = useSelector((state) => state.userData);
  const [name, email, age, gender, company] = ['Name:', 'Email:', 'Age:', 'Gender:', 'Company:'];
  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  });
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
                <div className="main_titles_info">{name}</div>
                {user.name}
              </div>
              <div>
                <div className="main_titles_info">{ email}</div>
                {user.email}
              </div>
              <div>
                <div className="main_titles_info">{age}</div>
                {user.age}
              </div>
              <div>
                <div className="main_titles_info">{gender}</div>
                {user.gender}
              </div>
              <div>
                <div className="main_titles_info">{company}</div>
                {user.company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
