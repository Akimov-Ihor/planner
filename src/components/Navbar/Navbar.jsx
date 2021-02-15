import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { setIsAuth } from '../../store/actionCreators/plannerCreators';

export const Navbar = () => {
  const isAuth = useSelector((state) => state.isAuth);
  //   const dispatch = useDispatch();
  const [title, main, planner, logout] = ['Your Planner', 'Main', 'Planner', 'Logout'];
  //   onClick={() => dispatch(setIsAuth(!isAuth))}
  return (
    <>
      {isAuth
        ? (
          <>
            <h1>{title}</h1>
            <nav>
              <ul>
                <li>
                  <NavLink to="/main">{main}</NavLink>
                </li>
                <li>
                  <NavLink to="/calendar">{planner}</NavLink>
                </li>
                <li>
                  <NavLink to="/login">{logout}</NavLink>
                </li>
              </ul>
            </nav>
          </>
        ) : null }
    </>
  );
};
