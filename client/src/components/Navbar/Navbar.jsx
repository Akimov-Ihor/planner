import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { constants } from '../../constants/text.constants';
import { logout } from '../../store/actions/planner.actions';

import './Navbar.css';

export const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <h1>{constants.navbar.title}</h1>
      <nav className="navbar-nav">
        <ul>
          <li>
            <NavLink to="/">{constants.navbar.main}</NavLink>
          </li>
          <li>
            <NavLink to="/calendar">{constants.navbar.planner}</NavLink>
          </li>
          <li onClick={() => logout(history)(dispatch)}>
            <NavLink to="/login">{constants.navbar.logoutTxt}</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
