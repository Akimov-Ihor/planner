import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from './Login/Login.jsx';
import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper.jsx';
import { Registration } from './Registration/Registration.jsx';

import './Planner.css';

export const Planner = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route component={PrivateRoutesWrapper} />
    </Switch>
  );
};
