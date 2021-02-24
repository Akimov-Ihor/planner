import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { Login } from './Login/Login.jsx';
import { PrivateRoutesWrapper } from './PrivateRoutesWrapper/PrivateRoutesWrapper.jsx';
import { Registration } from './Registration/Registration.jsx';

import './Planner.css';
import 'react-toastify/dist/ReactToastify.css';

export const Planner = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route component={PrivateRoutesWrapper} />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>

  );
};
