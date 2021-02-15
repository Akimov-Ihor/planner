import React from 'react';
import {
  Route, Switch, NavLink, useHistory,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Planner.css';

import { Login } from './Login/Login.jsx';
import { Main } from './Profile/Main/Main.jsx';
import { Calendar } from './Profile/Calendar/Calendar.jsx';
import { setIsAuth } from '../store/actionCreators/plannerCreators';

export const Planner = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!isAuth) {
    history.push('/login');
  }

  return (
    <div className="plannerWrapper">
      <h1>Your Planner</h1>
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
      <Switch>
        <Route path="/main" render={() => <Main />} />
        <Route path="/calendar" render={() => <Calendar />} />
        <Route exact path="/login" render={() => <Login isAuth={isAuth} />} />
      </Switch>
    </div>
  );
};
