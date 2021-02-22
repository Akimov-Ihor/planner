import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actionCreators/plannerCreators';

export const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, main, planner, logoutTxt] = ['Your Planner', 'Main', 'Planner', 'Logout'];
  return (
    <>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">{main}</NavLink>
          </li>
          <li>
            <NavLink to="/calendar">{planner}</NavLink>
          </li>
          <li onClick={() => logout(history)(dispatch)}>
            <NavLink to="/login">{logoutTxt}</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
