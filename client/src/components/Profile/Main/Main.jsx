import React from 'react';
import { useSelector } from 'react-redux';

import './Main.css';

export const Main = () => {
  const user = useSelector((state) => state.user);

  const [name, email, age, gender, company] = ['Name:', 'Email:', 'Age:', 'Gender:', 'Company:'];
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
