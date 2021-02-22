import React from 'react';
import { useSelector } from 'react-redux';

import { Main } from '../Profile/Main/Main.jsx';
import { Calendar } from '../Profile/Calendar/Calendar.jsx';

import { PrivateRoute } from '../../utils/PrivateRouter.jsx';
import { Navbar } from '../Navbar/Navbar.jsx';

export const PrivateRoutesWrapper = () => {
  const [userDataFromStore, isVerifyingAuthFromStore] = useSelector(({ userData, isVerifyingAuth }) => [
    userData, isVerifyingAuth,
  ]);
  return (
    <>
      <Navbar />
      <PrivateRoute
        exact
        userData={userDataFromStore}
        isVerifyingAuth={isVerifyingAuthFromStore}
        path="/"
        component={Main}
      />
      <PrivateRoute
        exact
        userData={userDataFromStore}
        isVerifyingAuth={isVerifyingAuthFromStore}
        path="/calendar"
        component={Calendar}
      />
    </>
  );
};
