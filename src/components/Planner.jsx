import React from 'react';
import { Route, Switch } from 'react-router';
import './Planner.css';

// import { Login } from './Login/Login.jsx';
// import { Main } from './Profile/Main/Main.jsx';
// import { Calendar } from './Profile/Calendar/Calendar.jsx';
// import { PrivateRoute } from '../utils/PrivateRouter.jsx';
// import { setIsAuth } from '../store/actionCreators/plannerCreators';
import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper.jsx';

const comp = () => (<div>test</div>);

export const Planner = () => {
  return (
    <div className="plannerWrapper">
      <h1>Your Planner</h1>
      <Switch>
        <PrivateRoutesWrapper />
        <Route exact path="/login" component={comp} />
      </Switch>
    </div>
  );
};
