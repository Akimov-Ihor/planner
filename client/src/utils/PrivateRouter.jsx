import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component, userData, isVerifyingAuth, ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userData && !isVerifyingAuth) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
        if (userData && !isVerifyingAuth) {
          return <Component {...props} />;
        }
        return false;
      }}
    />
  );
};
