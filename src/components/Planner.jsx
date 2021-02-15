import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { useHistory } from 'react-router-dom';
import './Planner.css';

import { Login } from './Login/Login.jsx';
import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper.jsx';

export const Planner = () => {
  const history = useHistory();

  const isAuth = useSelector((state) => state.isAuth);

  if (!isAuth) {
    history.push('/main');
  }
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route component={PrivateRoutesWrapper} />
    </Switch>
  );
};
