import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
// import { useHistory } from 'react-router-dom';
import './Planner.css';

import { Login } from './Login/Login.jsx';
import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper.jsx';
import { navigateToPage } from '../routing/history';

export const Planner = () => {
  const isAuth = useSelector((state) => state.isAuth);

  if (!isAuth) {
    navigateToPage('/login');
  }
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route component={PrivateRoutesWrapper} />
    </Switch>
  );
};
