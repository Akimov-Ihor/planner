import React from 'react';
import { useSelector } from 'react-redux';

import { Main } from '../Profile/Main/Main.jsx';
import { Calendar } from '../Profile/Calendar/Calendar.jsx';

import { PrivateRoute } from '../../utils/PrivateRouter.jsx';
import { Navbar } from '../Navbar/Navbar.jsx';

export const PrivateRoutesWrapper = () => {
  const isAuth = useSelector((state) => state.isAuth);

  return (
    <>
      <Navbar />
      <PrivateRoute exact isAuth={isAuth} path="/" component={Main} />
      <PrivateRoute exact isAuth={isAuth} path="/calendar" component={Calendar} />
    </>
  );
};