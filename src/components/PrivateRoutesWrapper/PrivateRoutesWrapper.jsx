import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Main } from '../Profile/Main/Main.jsx';
import { Calendar } from '../Profile/Calendar/Calendar.jsx';

import { PrivateRoute } from '../../utils/PrivateRouter.jsx';
import { setIsAuth } from '../../store/actionCreators/plannerCreators';

export const PrivateRoutesWrapper = ({ isAuth }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isAuth
        ? (
          <nav>
            <ul>
              <li>
                <NavLink to="/main">Main</NavLink>
              </li>
              <li>
                <NavLink to="/calendar">Planner</NavLink>
              </li>
              <li onClick={() => dispatch(setIsAuth(!isAuth))}>
                <NavLink to="/login">Logout</NavLink>
              </li>
            </ul>
          </nav>
        ) : null }
      <PrivateRoute isAuth={isAuth} path="/main" component={Main} />
      <PrivateRoute isAuth={isAuth} path="/calendar" component={Calendar} />
    </>
  );
};
