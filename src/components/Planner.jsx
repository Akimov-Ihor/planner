import React from 'react';
import { Route, Switch } from 'react-router';
import './Planner.css';

import { Login } from './Login/Login.jsx';
import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper.jsx';

export const Planner = () => {
  return (
    <Switch>
      <div className="plannerWrapper">
        <h1>Your Planner</h1>
        <Route exact path="/login" component={Login} />
        <Route component={PrivateRoutesWrapper} />
      </div>
    </Switch>
  );
};
