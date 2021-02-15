import React from 'react';
import {
  Route, Switch, useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Planner.css';

import { Login } from './Login/Login.jsx';
// import { Main } from './Profile/Main/Main.jsx';
// import { Calendar } from './Profile/Calendar/Calendar.jsx';
// import { PrivateRoute } from '../utils/PrivateRouter.jsx';
// import { setIsAuth } from '../store/actionCreators/plannerCreators';
import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper.jsx';

export const Planner = () => {
  const isAuth = useSelector((state) => state.isAuth);
  // const dispatch = useDispatch();
  const history = useHistory();
  if (!isAuth) {
    history.push('/login');
  }

  return (
    <div className="plannerWrapper">
      <h1>Your Planner</h1>
      <Switch>
        <PrivateRoutesWrapper />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
